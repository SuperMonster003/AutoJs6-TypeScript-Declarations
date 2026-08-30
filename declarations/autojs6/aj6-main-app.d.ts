/// <reference path="../android.d.ts" />
/// <reference path="../libraries.d.ts" />
/// <reference path="./aj6-resources.d.ts" />

declare namespace __javaRoots {
	export import androidRoot = android;
	export import androidxRoot = androidx;
	export import comRoot = com;
	export import euRoot = eu;
	export import jackpalRoot = jackpal;
	export import javaRoot = java;
	export import kotlinRoot = kotlin;
	export import kotlinxRoot = kotlinx;
	export import okhttp3Root = okhttp3;
	export import okioRoot = okio;
	export import orgRoot = org;
}

declare namespace ezy {
	export namespace assist {
		export namespace compat {
			export class SettingsCompat {
				public constructor();
				public static canDrawOverlays(context: __javaRoots.androidRoot.content.Context): boolean;
				public static canWriteSettings(context: __javaRoots.androidRoot.content.Context): boolean;
				public static manageDrawOverlays(context: __javaRoots.androidRoot.content.Context): boolean;
				public static manageWriteSettings(context: __javaRoots.androidRoot.content.Context): void;
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace annotation {
				export class ScriptVariable {
					public constructor(implementation: ScriptVariable);
					public constructor();
				}
				export interface ScriptVariable extends __javaRoots.javaRoot.lang.annotation.Annotation {
					equals(...args: any[]): any;
					hashCode(...args: any[]): any;
					toString(...args: any[]): any;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace apkbuilder {
				export class ApkBuilder {
					public static readonly ICON_NAME: string;
					public static readonly ICON_RES_DIR: string;
					public static readonly INRT_APP_ID: string;
					public static readonly LIBRARY_DIR: string;
					public static readonly TEMPLATE_APK_NAME: string;
					/** @deprecated */
					public constructor(apkInputStream: __javaRoots.javaRoot.io.InputStream, outApkFile: __javaRoots.javaRoot.io.File, buildPath: string);
					public constructor(apkInputStream: __javaRoots.javaRoot.io.InputStream, outApkFile: __javaRoots.javaRoot.io.File, buildPath: string, remoteBuildExecutor: __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder.RemoteBuildExecutor);
					public build(context: __javaRoots.androidRoot.content.Context): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
					public cleanWorkspace(context: __javaRoots.androidRoot.content.Context): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
					public commitProjectConfigIfNeeded(context: __javaRoots.androidRoot.content.Context): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
					public copyDir(context: __javaRoots.androidRoot.content.Context, srcFile: __javaRoots.javaRoot.io.File, relativeDestPath: string): void;
					public editManifest(): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ManifestEditor;
					public finish(): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
					public static nativeLibraryDirectoryMatchesAbi$app(directoryName: string, abiCandidates: __javaRoots.javaRoot.util.List<string>): boolean;
					public prepare(context: __javaRoots.androidRoot.content.Context): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
					public replaceFile(context: __javaRoots.androidRoot.content.Context, srcFile: __javaRoots.javaRoot.io.File, relativeDestPath: string): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
					public replaceFile(context: __javaRoots.androidRoot.content.Context, srcPath: string, relativeDestPath: string): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
					public static selectBestPluginVariantCandidate<T>(infos: __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<T, __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder.PluginLibVariant>>, supportedVariants: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder.PluginLibVariant>): __javaRoots.kotlinRoot.Pair<T, __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder.PluginLibVariant>;
					public setArscPackageName(packageName: string): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
					public setCancelSignal(cancelSignal: __javaRoots.javaRoot.util.concurrent.atomic.AtomicBoolean): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
					public setProgressCallback(callback: __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder.ProgressCallback): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
					public setScriptFile(context: __javaRoots.androidRoot.content.Context, path: string): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
					public sign(context: __javaRoots.androidRoot.content.Context): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
					public withConfig(context: __javaRoots.androidRoot.content.Context, config: __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder;
				}
				export namespace ApkBuilder {
					export class PluginLibVariant {
						public readonly assetsToInclude: __javaRoots.kotlinRoot.Pair<__javaRoots.javaRoot.util.List<string>, __javaRoots.javaRoot.util.List<string>>;
						public readonly libsToInclude: __javaRoots.javaRoot.util.List<string>;
						public readonly variant: string;
						public constructor();
						public constructor(variant: string, assetsToInclude: __javaRoots.kotlinRoot.Pair<__javaRoots.javaRoot.util.List<string>, __javaRoots.javaRoot.util.List<string>>, libsToInclude: __javaRoots.javaRoot.util.List<string>);
						public component1(): string;
						public component2(): __javaRoots.kotlinRoot.Pair<__javaRoots.javaRoot.util.List<string>, __javaRoots.javaRoot.util.List<string>>;
						public component3(): __javaRoots.javaRoot.util.List<string>;
						public copy(variant: string, assetsToInclude: __javaRoots.kotlinRoot.Pair<__javaRoots.javaRoot.util.List<string>, __javaRoots.javaRoot.util.List<string>>, libsToInclude: __javaRoots.javaRoot.util.List<string>): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder.PluginLibVariant;
						public equals(other: any): boolean;
						public getAssetsToInclude(): __javaRoots.kotlinRoot.Pair<__javaRoots.javaRoot.util.List<string>, __javaRoots.javaRoot.util.List<string>>;
						public getLibsToInclude(): __javaRoots.javaRoot.util.List<string>;
						public getVariant(): string;
						public hashCode(): number;
						public toString(): string;
					}
					export class ProgressCallback {
						public constructor(implementation: ProgressCallback);
						public constructor();
					}
					export interface ProgressCallback {
						onBuild(param0: __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder): void;
						onClean(param0: __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder): void;
						onFinished(param0: __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder): void;
						onPrepare(param0: __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder): void;
						onSign(param0: __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder): void;
						onStepProgress(param0: __javaRoots.orgRoot.autojs.autojs.apkbuilder.ApkBuilder, param1: string, param2: string): void;
					}
					export class RemoteBuildExecutor {
						public constructor(implementation: RemoteBuildExecutor);
						public constructor();
					}
					export interface RemoteBuildExecutor {
						build(param0: __javaRoots.androidRoot.content.Context, param1: __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig, param2: __javaRoots.javaRoot.io.File, param3: __javaRoots.javaRoot.util.concurrent.atomic.AtomicBoolean, param4: __javaRoots.orgRoot.autojs.autojs.apkbuilder.template.RemoteApkBuildClient.ProgressListener): __javaRoots.orgRoot.autojs.autojs.apkbuilder.template.RemoteApkBuildClient.BuildOutcome;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace apkbuilder {
				export class ManifestEditor {
					public constructor(manifestInputStream: __javaRoots.javaRoot.io.InputStream);
					public addEmbeddedNodeForegroundServicePermissionsIfMissing(): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ManifestEditor;
					public addEmbeddedNodeScriptServiceIfMissing(): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ManifestEditor;
					public commit(): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ManifestEditor;
					public isPermissionRequired(permissionName: string): boolean;
					public setAppName(appName: string): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ManifestEditor;
					public setPackageName(packageName: string): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ManifestEditor;
					public setVersionCode(versionCode: number): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ManifestEditor;
					public setVersionName(versionName: string): __javaRoots.orgRoot.autojs.autojs.apkbuilder.ManifestEditor;
					public shouldIgnoreComponentNode(nodeName: string, componentClassName: string): boolean;
					public writeTo(manifestOutputStream: __javaRoots.javaRoot.io.OutputStream): void;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace apkbuilder {
				export namespace keystore {
					export class KeyStore {
						public readonly absolutePath: string;
						public readonly alias: string;
						public readonly aliasPassword: string;
						public readonly filename: string;
						public readonly password: string;
						public readonly verified: boolean;
						public constructor(absolutePath: string, filename: string, password: string, alias: string, aliasPassword: string, verified: boolean);
						public component1(): string;
						public component2(): string;
						public component3(): string;
						public component4(): string;
						public component5(): string;
						public component6(): boolean;
						public copy(absolutePath: string, filename: string, password: string, alias: string, aliasPassword: string, verified: boolean): __javaRoots.orgRoot.autojs.autojs.apkbuilder.keystore.KeyStore;
						public equals(other: any): boolean;
						public getAbsolutePath(): string;
						public getAlias(): string;
						public getAliasPassword(): string;
						public getFilename(): string;
						public getPassword(): string;
						public getVerified(): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace apkbuilder {
				export namespace template {
					export class RemoteApkBuildClient {
						public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.apkbuilder.template.RemoteApkBuildClient;
						public static readonly STATUS_NOT_AVAILABLE: number;
						public static buildBlocking(context: __javaRoots.androidRoot.content.Context, projectConfig: __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig, outApk: __javaRoots.javaRoot.io.File, cancelSignal: __javaRoots.javaRoot.util.concurrent.atomic.AtomicBoolean, progressListener: __javaRoots.orgRoot.autojs.autojs.apkbuilder.template.RemoteApkBuildClient.ProgressListener, preferredPluginPackageName: string): __javaRoots.orgRoot.autojs.autojs.apkbuilder.template.RemoteApkBuildClient.BuildOutcome;
						protected constructor();
					}
					export namespace RemoteApkBuildClient {
						export class BuildOutcome {
							public readonly errors: __javaRoots.javaRoot.util.List<string>;
							public readonly status: number;
							public readonly success: boolean;
							public readonly updatedProjectConfigJson: string;
							public readonly warnings: __javaRoots.javaRoot.util.List<string>;
							public constructor(status: number, warnings: __javaRoots.javaRoot.util.List<string>, errors: __javaRoots.javaRoot.util.List<string>, updatedProjectConfigJson: string);
							public component1(): number;
							public component2(): __javaRoots.javaRoot.util.List<string>;
							public component3(): __javaRoots.javaRoot.util.List<string>;
							public component4(): string;
							public copy(status: number, warnings: __javaRoots.javaRoot.util.List<string>, errors: __javaRoots.javaRoot.util.List<string>, updatedProjectConfigJson: string): __javaRoots.orgRoot.autojs.autojs.apkbuilder.template.RemoteApkBuildClient.BuildOutcome;
							public equals(other: any): boolean;
							public getErrors(): __javaRoots.javaRoot.util.List<string>;
							public getStatus(): number;
							public getUpdatedProjectConfigJson(): string;
							public getWarnings(): __javaRoots.javaRoot.util.List<string>;
							public hashCode(): number;
							public isSuccess(): boolean;
							public toString(): string;
						}
						export class ProgressListener {
							public constructor(implementation: ProgressListener);
							public constructor();
						}
						export interface ProgressListener {
							onProgress(param0: __javaRoots.orgRoot.autojs.plugin.apkbuilder.template.ApkBuildProgress): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace app {
				export class GlobalAppContext {
					public constructor();
					public static get(): __javaRoots.androidRoot.content.Context;
					public static post(r: __javaRoots.javaRoot.lang.Runnable): void;
					public static postDelayed(r: __javaRoots.javaRoot.lang.Runnable, delay: number): void;
					public static set(app: __javaRoots.androidRoot.app.Application): void;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace app {
				export class OnActivityResultDelegate {
					public constructor(implementation: OnActivityResultDelegate);
					public constructor();
				}
				export interface OnActivityResultDelegate {
					onActivityResult(param0: number, param1: number, param2: __javaRoots.androidRoot.content.Intent): void;
				}
				export namespace OnActivityResultDelegate {
					export class DelegateHost {
						public constructor(implementation: DelegateHost);
						public constructor();
					}
					export interface DelegateHost {
						readonly onActivityResultDelegateMediator: __javaRoots.orgRoot.autojs.autojs.app.OnActivityResultDelegate.Mediator;
						getOnActivityResultDelegateMediator(): __javaRoots.orgRoot.autojs.autojs.app.OnActivityResultDelegate.Mediator;
					}
					export class Mediator {
						public constructor();
						public addDelegate(requestCode: number, delegate: __javaRoots.orgRoot.autojs.autojs.app.OnActivityResultDelegate): void;
						public addDelegate(delegate: __javaRoots.orgRoot.autojs.autojs.app.OnActivityResultDelegate): void;
						public onActivityResult(requestCode: number, resultCode: number, data: __javaRoots.androidRoot.content.Intent): void;
						public removeDelegate(delegate: __javaRoots.orgRoot.autojs.autojs.app.OnActivityResultDelegate): void;
					}
					export interface Mediator extends __javaRoots.orgRoot.autojs.autojs.app.OnActivityResultDelegate {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace concurrent {
				export class VolatileBox<T> {
					public readonly null: boolean;
					public constructor();
					public constructor(value: T);
					public block(): void;
					public block(timeout: number): void;
					public blockedGet(): T;
					public blockedGet(timeout: number): T;
					public blockedGetOrThrow(timeout: number, exception: __javaRoots.javaRoot.lang.Class<__javaRoots.javaRoot.lang.RuntimeException>): T;
					public blockedGetOrThrow(exception: __javaRoots.javaRoot.lang.Class<__javaRoots.javaRoot.lang.RuntimeException>): T;
					public get(): T;
					public isNull(): boolean;
					public notNull(): boolean;
					public set(value: T): void;
					public unblock(): void;
					public unblock(value: T): void;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace concurrent {
				export class VolatileDispose<T> {
					public constructor();
					public blockedGet(): T;
					public blockedGet(timeout: number): T;
					public blockedGetOrThrow(exception: __javaRoots.javaRoot.lang.Class<__javaRoots.javaRoot.lang.RuntimeException>): T;
					public blockedGetOrThrow(exception: __javaRoots.javaRoot.lang.Class<__javaRoots.javaRoot.lang.RuntimeException>, timeout: number, defaultValue: T): T;
					public setAndNotify(value: T): void;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace accessibility {
					export abstract class AccessibilityBridge {
						public static readonly FLAG_FIND_ON_UI_THREAD: number;
						public static readonly FLAG_USE_SHELL: number;
						public static readonly FLAG_USE_USAGE_STATS: number;
						public static readonly MODE_FAST: number;
						public static readonly MODE_NORMAL: number;
						public readonly config: __javaRoots.orgRoot.autojs.autojs.runtime.accessibility.AccessibilityConfig;
						public readonly flags: number;
						public readonly infoProvider: __javaRoots.orgRoot.autojs.autojs.core.activity.ActivityInfoProvider;
						public readonly notificationObserver: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityNotificationObserver;
						public readonly rootInActiveWindow: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo;
						public readonly rootInCurrentWindow: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo;
						public readonly service: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityService;
						public constructor(context: __javaRoots.androidRoot.content.Context, config: __javaRoots.orgRoot.autojs.autojs.runtime.accessibility.AccessibilityConfig, uiHandler: __javaRoots.orgRoot.autojs.autojs.tool.UiHandler);
						public ensureServiceStarted(): void;
						public ensureServiceStarted(param0: boolean): void;
						public getConfig(): __javaRoots.orgRoot.autojs.autojs.runtime.accessibility.AccessibilityConfig;
						public getFlags(): number;
						public getInfoProvider(): __javaRoots.orgRoot.autojs.autojs.core.activity.ActivityInfoProvider;
						public getNotificationObserver(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityNotificationObserver;
						public getRootInActiveWindow(): __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo;
						public getRootInCurrentWindow(): __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo;
						public getService(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityService;
						public post(r: __javaRoots.javaRoot.lang.Runnable): void;
						public setAccessibilityListener(listener: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityServiceCallback): void;
						public setFlags(flags: number): void;
						public setMode(mode: number): void;
						public setWindowFilter(windowFilter: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityBridge.WindowFilter): void;
						public windowRoots(): __javaRoots.javaRoot.util.List<__javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo>;
					}
					export namespace AccessibilityBridge {
						export class WindowFilter {
							public constructor(implementation: WindowFilter);
							public constructor();
						}
						export interface WindowFilter {
							filter(param0: __javaRoots.androidRoot.view.accessibility.AccessibilityWindowInfo): boolean;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace accessibility {
					export class AccessibilityDelegate {
						public constructor(implementation: AccessibilityDelegate);
						public constructor();
					}
					export interface AccessibilityDelegate {
						readonly eventTypes: __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.lang.Integer>;
						getEventTypes(): __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.lang.Integer>;
						onAccessibilityEvent(param0: __javaRoots.androidRoot.accessibilityservice.AccessibilityService, param1: __javaRoots.androidRoot.view.accessibility.AccessibilityEvent): boolean;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace accessibility {
					export class AccessibilityNodeInfoAllocator {
						public constructor();
						public add(nodeInfo: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo): __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo;
						public findAccessibilityNodeInfosByText(root: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo, text: string): __javaRoots.javaRoot.util.List<__javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo>;
						public findAccessibilityNodeInfosByText(root: __javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat, text: string): __javaRoots.javaRoot.util.List<__javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat>;
						public findAccessibilityNodeInfosByViewId(root: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo, id: string): __javaRoots.javaRoot.util.List<__javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo>;
						public findAccessibilityNodeInfosByViewId(root: __javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat, id: string): __javaRoots.javaRoot.util.List<__javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat>;
						public getChild(parent: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo, i: number): __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo;
						public getChild(parent: __javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat, i: number): __javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat;
						public getParent(n: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo): __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo;
						public getParent(n: __javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat): __javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat;
						public recycle(nodeInfo: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo): void;
						public recycle(nodeInfo: __javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat): void;
						public recycleAll(): number;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace accessibility {
					export class AccessibilityNotificationObserver {
						public readonly eventTypes: __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.lang.Integer>;
						public constructor(mContext: __javaRoots.androidRoot.content.Context);
						public addNotificationListener(listener: __javaRoots.orgRoot.autojs.autojs.core.accessibility.NotificationListener): void;
						public addToastListener(listener: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityNotificationObserver.ToastListener): void;
						public getEventTypes(): __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.lang.Integer>;
						public onAccessibilityEvent(service: __javaRoots.androidRoot.accessibilityservice.AccessibilityService, event: __javaRoots.androidRoot.view.accessibility.AccessibilityEvent): boolean;
						public onNotification(notification: __javaRoots.orgRoot.autojs.autojs.core.notification.Notification): void;
						public removeNotificationListener(listener: __javaRoots.orgRoot.autojs.autojs.core.accessibility.NotificationListener): boolean;
						public removeToastListener(listener: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityNotificationObserver.ToastListener): boolean;
					}
					export interface AccessibilityNotificationObserver extends __javaRoots.orgRoot.autojs.autojs.core.accessibility.NotificationListener, __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityDelegate {}
					export namespace AccessibilityNotificationObserver {
						export class Toast {
							public readonly packageName: string;
							public readonly text: string;
							public constructor(this$0: string, packageName: __javaRoots.javaRoot.util.List<string>);
							public getPackageName(): string;
							public getText(): string;
							public toString(): string;
						}
						export class ToastListener {
							public constructor(implementation: ToastListener);
							public constructor();
						}
						export interface ToastListener {
							onToast(param0: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityNotificationObserver.Toast): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace accessibility {
					export class AccessibilityService extends __javaRoots.androidRoot.accessibilityservice.AccessibilityService {
						public readonly bridge: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityBridge;
						public readonly fastRootInActiveWindow: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo;
						public readonly keyInterrupterObserver: __javaRoots.orgRoot.autojs.autojs.core.accessibility.KeyInterceptor.Observer;
						public readonly onKeyObserver: __javaRoots.orgRoot.autojs.autojs.core.accessibility.OnKeyListener.Observer;
						public readonly rootInActiveWindow: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo;
						public constructor();
						public addAccessibilityEventCallback(ownerId: string, name: string, callback: __javaRoots.orgRoot.autojs.autojs.core.accessibility.SimpleActionAutomator.Companion.AccessibilityEventCallback): void;
						public static clearAccessibilityEventCallback(): void;
						public getBridge(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityBridge;
						public getFastRootInActiveWindow(): __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo;
						public getKeyInterrupterObserver(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.KeyInterceptor.Observer;
						public getOnKeyObserver(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.OnKeyListener.Observer;
						public getRootInActiveWindow(): __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo;
						public onAccessibilityEvent(event: __javaRoots.androidRoot.view.accessibility.AccessibilityEvent): void;
						public onDestroy(): void;
						public onInterrupt(): void;
						public onUnbind(intent: __javaRoots.androidRoot.content.Intent): boolean;
						public removeAccessibilityEventCallback(ownerId: string, name: string): void;
						public removeAllAccessibilityEventCallbacks(ownerId: string): void;
						public setBridge(_set___: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityBridge): void;
						public getRootInActiveWindow(...args: any[]): any;
					}
					export namespace AccessibilityService {
						export namespace Companion {
							export class GestureListener {
								public constructor(implementation: GestureListener);
								public constructor();
							}
							export interface GestureListener {
								onGesture(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace accessibility {
					export class AccessibilityServiceCallback {
						public constructor(implementation: AccessibilityServiceCallback);
						public constructor();
					}
					export interface AccessibilityServiceCallback {
						onConnected(): void;
						onDisconnected(): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace accessibility {
					export class KeyInterceptor {
						public constructor(implementation: KeyInterceptor);
						public constructor();
					}
					export interface KeyInterceptor {
						onInterceptKeyEvent(param0: __javaRoots.androidRoot.view.KeyEvent): boolean;
					}
					export namespace KeyInterceptor {
						export class Observer {
							public constructor();
							public addKeyInterrupter(interrupter: __javaRoots.orgRoot.autojs.autojs.core.accessibility.KeyInterceptor): void;
							public onInterceptKeyEvent(event: __javaRoots.androidRoot.view.KeyEvent): boolean;
							public removeKeyInterrupter(interrupter: __javaRoots.orgRoot.autojs.autojs.core.accessibility.KeyInterceptor): boolean;
						}
						export interface Observer extends __javaRoots.orgRoot.autojs.autojs.core.accessibility.KeyInterceptor {}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace accessibility {
					export class NotificationListener {
						public constructor(implementation: NotificationListener);
						public constructor();
					}
					export interface NotificationListener {
						onNotification(param0: __javaRoots.orgRoot.autojs.autojs.core.notification.Notification): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace accessibility {
					export class OnKeyListener {
						public constructor(implementation: OnKeyListener);
						public constructor();
					}
					export interface OnKeyListener {
						onKeyEvent(param0: number, param1: __javaRoots.androidRoot.view.KeyEvent): void;
					}
					export namespace OnKeyListener {
						export class Observer {
							public constructor();
							public addListener(listener: __javaRoots.orgRoot.autojs.autojs.core.accessibility.OnKeyListener): void;
							public onKeyEvent(keyCode: number, event: __javaRoots.androidRoot.view.KeyEvent): void;
							public removeListener(listener: __javaRoots.orgRoot.autojs.autojs.core.accessibility.OnKeyListener): boolean;
						}
						export interface Observer extends __javaRoots.orgRoot.autojs.autojs.core.accessibility.OnKeyListener {}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace accessibility {
					export class SimpleActionAutomator {
						public readonly serviceRunning: boolean;
						public constructor(accessibilityBridge: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityBridge, scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public accessibilityAllApps(): boolean;
						public accessibilityButton(): boolean;
						public accessibilityButtonChooser(): boolean;
						public accessibilityShortcut(): boolean;
						public appendText(target: __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget, text: string): boolean;
						public back(): boolean;
						public bounds(left: number, top: number, right: number, bottom: number): __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget.BoundsActionTarget;
						public captureScreen(): __javaRoots.orgRoot.autojs.autojs.runtime.api.ScriptPromiseAdapter;
						public click(x: number, y: number): boolean;
						public click(target: __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget): boolean;
						public dismissNotificationShade(): boolean;
						public editable(i: number): __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget.EditableActionTarget;
						public ensureService(): void;
						public focus(target: __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget): boolean;
						public gesture(start: number, duration: number, points: number[][]): boolean;
						public gestureAsync(start: number, duration: number, points: number[][]): void;
						public gestureAsync(start: number, duration: number, points: number[][], callback: __javaRoots.androidRoot.accessibilityservice.AccessibilityService.GestureResultCallback): void;
						public gestures(strokes: __javaRoots.androidRoot.accessibilityservice.GestureDescription.StrokeDescription[]): boolean;
						public gesturesAsync(strokes: __javaRoots.androidRoot.accessibilityservice.GestureDescription.StrokeDescription[]): void;
						public gesturesAsync(strokes: __javaRoots.androidRoot.accessibilityservice.GestureDescription.StrokeDescription[], callback: __javaRoots.androidRoot.accessibilityservice.AccessibilityService.GestureResultCallback): void;
						public headsethook(): boolean;
						public home(): boolean;
						public id(id: string): __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget.IdActionTarget;
						public isServiceRunning(): boolean;
						public lockScreen(): boolean;
						public longClick(x: number, y: number): boolean;
						public longClick(target: __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget): boolean;
						public notifications(): boolean;
						public paste(target: __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget): boolean;
						public powerDialog(): boolean;
						public press(x: number, y: number, duration: number): boolean;
						public quickSettings(): boolean;
						public recents(): boolean;
						public registerEvent(eventName: string, callback: __javaRoots.orgRoot.autojs.autojs.core.accessibility.SimpleActionAutomator.Companion.AccessibilityEventCallback): void;
						public removeAllEventsForThisRuntime(): void;
						public removeEvent(eventName: string): void;
						public scrollBackward(i: number): boolean;
						public scrollDown(target: __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget): boolean;
						public scrollForward(i: number): boolean;
						public scrollMaxBackward(): boolean;
						public scrollMaxForward(): boolean;
						public scrollUp(target: __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget): boolean;
						public select(target: __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget): boolean;
						public setScreenMetrics(metrics: __javaRoots.orgRoot.autojs.autojs.runtime.api.ScreenMetrics): void;
						public setText(target: __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget, text: string): boolean;
						public splitScreen(): boolean;
						public swipe(x1: number, y1: number, x2: number, y2: number, duration: number): boolean;
						public switchToInputMethod(packageName: string): boolean;
						public switchToInputMethodWithId(inputMethodId: string): boolean;
						public takeScreenshot(): boolean;
						public text(text: string, i: number): __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget.TextActionTarget;
					}
					export namespace SimpleActionAutomator {
						export namespace Companion {
							export class AccessibilityEventCallback {
								public constructor(implementation: AccessibilityEventCallback);
								public constructor();
							}
							export interface AccessibilityEventCallback {
								onAccessibilityEvent(param0: __javaRoots.orgRoot.autojs.autojs.core.automator.AccessibilityEventWrapper): void;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace accessibility {
					export class UiSelector {
						public static readonly ID_IDENTIFIER: string;
						public readonly searchAlgorithm$app: __javaRoots.orgRoot.autojs.autojs.core.automator.search.SearchAlgorithm;
						public readonly selector$app: __javaRoots.orgRoot.autojs.autojs.core.automator.filter.Selector;
						public constructor();
						public constructor(accessibilityBridge: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityBridge);
						public constructor(accessibilityBridge: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityBridge, allocator: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityNodeInfoAllocator);
						public accessibilityFocus(): boolean;
						public accessibilityFocused(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public accessibilityFocused(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public action(...actions: any[]): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public algorithm(str: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public append(selector: __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public bottom(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public bottom(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public bounds(l: number, t: number, r: number, b: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsBottom(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsBottom(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsCenterX(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsCenterX(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsCenterY(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsCenterY(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsContains(l: number, t: number, r: number, b: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsHeight(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsHeight(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsInside(l: number, t: number, r: number, b: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsLeft(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsLeft(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMaxBottom(max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMaxCenterX(max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMaxCenterY(max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMaxHeight(max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMaxLeft(max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMaxRight(max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMaxTop(max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMaxWidth(max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMinBottom(min: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMinCenterX(min: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMinCenterY(min: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMinHeight(min: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMinLeft(min: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMinRight(min: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMinTop(min: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsMinWidth(min: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsRight(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsRight(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsTop(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsTop(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsWidth(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public boundsWidth(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public centerX(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public centerX(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public centerY(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public centerY(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public checkable(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public checkable(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public checked(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public checked(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public childCount(count: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public className(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public className(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public classNameContains(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public classNameContains(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public classNameEndsWith(suffix: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public classNameMatch(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public classNameMatch(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public classNameMatches(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public classNameMatches(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public classNameStartsWith(prefix: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public clearAccessibilityFocus(): boolean;
						public clearFocus(): boolean;
						public clearSelection(): boolean;
						public click(): boolean;
						public clickable(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public clickable(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public collapse(): boolean;
						public column(d: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public columnCount(d: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public columnSpan(d: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public content(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public content(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public contentContains(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public contentContains(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public contentEndsWith(suffix: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public contentInvalid(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public contentInvalid(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public contentMatch(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public contentMatch(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public contentMatches(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public contentMatches(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public contentStartsWith(prefix: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public contextClick(): boolean;
						public contextClickable(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public contextClickable(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public copy(): boolean;
						public currentApp(name: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public currentApp(app: __javaRoots.orgRoot.autojs.autojs.util.App): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public cut(): boolean;
						public depth(d: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public desc(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public desc(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public descContains(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public descContains(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public descEndsWith(suffix: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public descMatch(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public descMatch(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public descMatches(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public descMatches(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public descStartsWith(prefix: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public dismiss(): boolean;
						public dismissable(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public dismissable(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public dragCancel(): boolean;
						public dragDrop(): boolean;
						public dragStart(): boolean;
						public drawingOrder(order: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public editable(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public editable(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public enabled(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public enabled(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public exists(): boolean;
						public expand(): boolean;
						public filter(filter: __javaRoots.orgRoot.autojs.autojs.core.automator.filter.BooleanFilter.BooleanSupplier): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public find(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						public find(max: number): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						public findAndReturnList$app(root: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject, max: number): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.core.automator.UiObject>;
						public findOf$app(root: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						public findOnce(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public findOnce(index: number): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						/** @deprecated */
						public findOne(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public findOne(timeout: number): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public findOneOf$app(root: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public focus(): boolean;
						public focusable(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public focusable(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public focused(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public focused(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public getSearchAlgorithm$app(): __javaRoots.orgRoot.autojs.autojs.core.automator.search.SearchAlgorithm;
						public getSelector$app(): __javaRoots.orgRoot.autojs.autojs.core.automator.filter.Selector;
						public hasChildren(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public hasChildren(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public height(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public height(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public hideTooltip(): boolean;
						public id(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public id(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public idContains(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public idContains(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public idEndsWith(suffix: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public idHex(str: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public idMatch(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public idMatch(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public idMatches(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public idMatches(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public idStartsWith(prefix: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public imeEnter(): boolean;
						public indexInParent(index: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public left(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public left(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public longClick(): boolean;
						public longClickable(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public longClickable(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public maxBottom(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public maxCenterX(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public maxCenterY(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public maxChildCount(max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public maxHeight(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public maxLeft(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public maxRight(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public maxTop(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public maxWidth(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public minBottom(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public minCenterX(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public minCenterY(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public minChildCount(min: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public minHeight(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public minLeft(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public minRight(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public minTop(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public minWidth(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public moveWindow(x: number, y: number): boolean;
						public multiLine(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public multiLine(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public nextAtMovementGranularity(granularity: number, isExtendSelection: boolean): boolean;
						public nextHtmlElement(element: string): boolean;
						public packageName(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public packageName(app: __javaRoots.orgRoot.autojs.autojs.util.App): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public packageName(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public packageNameContains(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public packageNameContains(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public packageNameEndsWith(suffix: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public packageNameMatch(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public packageNameMatch(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public packageNameMatches(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public packageNameMatches(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public packageNameStartsWith(prefix: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public pageDown(): boolean;
						public pageLeft(): boolean;
						public pageRight(): boolean;
						public pageUp(): boolean;
						public password(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public password(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public paste(): boolean;
						public performAction(action: number): boolean;
						public performAction(action: number, ...arguments: __javaRoots.orgRoot.autojs.autojs.core.automator.ActionArgument[]): boolean;
						public static pickup(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, root: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject, selector: any, compass: string, resultType: any, callback: __javaRoots.orgRoot.mozilla.javascript.Callable): any;
						public plus(selector: __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public pressAndHold(): boolean;
						public previousAtMovementGranularity(granularity: number, isExtendSelection: boolean): boolean;
						public previousHtmlElement(element: string): boolean;
						public right(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public right(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public row(d: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public rowCount(d: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public rowSpan(d: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public screenCenterX(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public screenCenterX(tolerance: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public screenCenterX(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public screenCenterX(b: boolean, tolerance: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public screenCenterY(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public screenCenterY(tolerance: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public screenCenterY(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public screenCenterY(b: boolean, tolerance: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public screenCoverage(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public screenCoverage(min: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public scrollBackward(): boolean;
						public scrollDown(): boolean;
						public scrollForward(): boolean;
						public scrollLeft(): boolean;
						public scrollRight(): boolean;
						public scrollTo(row: number, column: number): boolean;
						public scrollUp(): boolean;
						public scrollable(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public scrollable(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public select(): boolean;
						public selected(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public selected(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public setProgress(progress: number): boolean;
						public setSearchAlgorithm$app(_set___: __javaRoots.orgRoot.autojs.autojs.core.automator.search.SearchAlgorithm): void;
						public setSelection(s: number, e: number): boolean;
						public setSelector$app(_set___: __javaRoots.orgRoot.autojs.autojs.core.automator.filter.Selector): void;
						public setText(text: string): boolean;
						public show(): boolean;
						public showTextSuggestions(): boolean;
						public showTooltip(): boolean;
						public text(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public text(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public textContains(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public textContains(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public textEndsWith(suffix: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public textMatch(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public textMatch(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public textMatches(s: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public textMatches(regex: __javaRoots.orgRoot.mozilla.javascript.regexp.NativeRegExp): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public textStartsWith(prefix: string): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public toString(): string;
						public toStringReadable(): string;
						public top(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public top(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public untilFind(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						public untilFindOne(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public visibleToUser(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public visibleToUser(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						/** @deprecated */
						public waitFor(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						public width(value: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public width(min: number, max: number): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
						public performAction(...args: any[]): any;
					}
					export interface UiSelector extends __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectActions, __javaRoots.orgRoot.autojs.autojs.runtime.api.StringReadable {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace accessibility {
					export namespace monitor {
						export class CloseableManager {
							public constructor();
							public add(closeable: __javaRoots.javaRoot.io.Closeable): void;
							public recycleAll(): void;
							public remove(closeable: __javaRoots.javaRoot.io.Closeable): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace activity {
					export class ActivityInfoProvider {
						public readonly eventTypes: __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.lang.Integer>;
						public readonly latestActivity: string;
						public readonly latestExternalComponent: __javaRoots.androidRoot.content.ComponentName;
						public readonly latestExternalPackageByUsageStatsIfGranted: string;
						public readonly latestPackage: string;
						public readonly latestPackageByUsageStatsIfGranted: string;
						public readonly useShell: boolean;
						public readonly useUsageStats: boolean;
						public constructor(context: __javaRoots.androidRoot.content.Context);
						public getEventTypes(): __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.lang.Integer>;
						public getLatestActivity(): string;
						public getLatestExternalComponent(): __javaRoots.androidRoot.content.ComponentName;
						public getLatestExternalPackageByUsageStatsIfGranted(): string;
						public getLatestPackage(): string;
						public getLatestPackageByUsageStatsIfGranted(): string;
						public getUseShell(): boolean;
						public getUseUsageStats(): boolean;
						public onAccessibilityEvent(service: __javaRoots.androidRoot.accessibilityservice.AccessibilityService, event: __javaRoots.androidRoot.view.accessibility.AccessibilityEvent): boolean;
						public setUseShell(value: boolean): void;
						public setUseUsageStats(_set___: boolean): void;
					}
					export interface ActivityInfoProvider extends __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityDelegate {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export class AccessibilityEventWrapper {
						public readonly action: number;
						public readonly className: string;
						public readonly eventTime: number;
						public readonly eventType: number;
						public readonly fullScreen: boolean;
						public readonly packageName: string;
						public readonly raw: __javaRoots.androidRoot.view.accessibility.AccessibilityEvent;
						public readonly source: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public constructor(event: __javaRoots.androidRoot.view.accessibility.AccessibilityEvent);
						public getAction(): number;
						public getClassName(): string;
						public getEventTime(): number;
						public getEventType(): number;
						public getPackageName(): string;
						public getRaw(): __javaRoots.androidRoot.view.accessibility.AccessibilityEvent;
						public getSource(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public isFullScreen(): boolean;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export abstract class ActionArgument {
						public putIn(param0: __javaRoots.androidRoot.os.Bundle): void;
						protected constructor();
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export class UiObject extends __javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat {
						public static readonly ACTION_APPEND_TEXT: number;
						public static readonly COMPASS_PASS_ON: string;
						public static readonly RESULT_TYPE_WIDGET: string;
						public readonly shifted: boolean;
						public readonly singleton: boolean;
						public constructor(info: any);
						public constructor(info: any, depth: number);
						public constructor(info: any, depth: number, indexInParent: number);
						public constructor(info: any, allocator: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityNodeInfoAllocator, indexInParent: number);
						public constructor(info: any, allocator: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityNodeInfoAllocator, depth: number, indexInParent: number);
						public accessibilityFocus(): boolean;
						public accessibilityFocused(): boolean;
						public actionNames(): __javaRoots.javaRoot.util.List<string>;
						public bottom(): number;
						public bounds(): __javaRoots.androidRoot.graphics.Rect;
						public boundsBottom(): number;
						public boundsCenterX(): number;
						public boundsCenterY(): number;
						public boundsExactCenterX(): number;
						public boundsExactCenterY(): number;
						public boundsHeight(): number;
						/** @deprecated */
						public boundsInParent(): __javaRoots.androidRoot.graphics.Rect;
						public boundsInScreen(): __javaRoots.androidRoot.graphics.Rect;
						public boundsLeft(): number;
						public boundsRight(): number;
						public boundsTop(): number;
						public boundsWidth(): number;
						/** @deprecated */
						public brother(i: number): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public center(): __javaRoots.orgRoot.opencv.core.Point;
						public centerX(): number;
						public centerY(): number;
						public checkable(): boolean;
						public checked(): boolean;
						public child(i: number): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public childCount(): number;
						public children(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						public className(): string;
						public clearAccessibilityFocus(): boolean;
						public clearFocus(): boolean;
						public clearSelection(): boolean;
						public click(): boolean;
						public clickBounds(): boolean;
						public clickBounds(offsetX: number): boolean;
						public clickBounds(offsetX: number, offsetY: number): boolean;
						public clickable(): boolean;
						public collapse(): boolean;
						public column(): number;
						public columnCount(): number;
						public columnSpan(): number;
						public compass(compassArg: string): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public content(): string;
						public contextClick(): boolean;
						public copy(): boolean;
						public static createRoot(root: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public cut(): boolean;
						public depth(): number;
						public desc(): string;
						public static detect(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, w: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject, compass: string, resultType: any, callback: __javaRoots.orgRoot.mozilla.javascript.Callable): any;
						public dismiss(): boolean;
						public dragCancel(): boolean;
						public dragDrop(): boolean;
						public dragStart(): boolean;
						public drawingOrder(): number;
						public editable(): boolean;
						public enabled(): boolean;
						public static ensureCompass(s: string): void;
						public exactCenterX(): number;
						public exactCenterY(): number;
						public expand(): boolean;
						public find(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						public find(selector: __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						public findAccessibilityNodeInfosByText(text: string): __javaRoots.javaRoot.util.List<__javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat>;
						public findAccessibilityNodeInfosByViewId(viewId: string): __javaRoots.javaRoot.util.List<__javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat>;
						public findOne(selector: __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public firstChild(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public firstSibling(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public focus(): boolean;
						public focusable(): boolean;
						public focused(): boolean;
						public fullId(): string;
						public getChild(index: number): __javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat;
						public getParent(): __javaRoots.androidxRoot.core.view.accessibility.AccessibilityNodeInfoCompat;
						public getText(): string;
						public hasAction(...actions: any[]): boolean;
						public hasChildren(): boolean;
						public height(): number;
						public hideTooltip(): boolean;
						public id(): string;
						public idEntry(): string;
						public idHex(): string;
						public imeEnter(): boolean;
						public indexInParent(): number;
						public static isCompass(s: any): boolean;
						public isShifted(): boolean;
						public isShifted(tolerance: number): boolean;
						public isSimilar(other: any): boolean;
						public isSingleton(): boolean;
						public lastChild(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public lastSibling(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public left(): number;
						public longClick(): boolean;
						public longClickable(): boolean;
						public moveWindow(x: number, y: number): boolean;
						public nextAtMovementGranularity(granularity: number, isExtendSelection: boolean): boolean;
						public nextHtmlElement(element: string): boolean;
						public nextSibling(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public offset(i: number): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public packageName(): string;
						public pageDown(): boolean;
						public pageLeft(): boolean;
						public pageRight(): boolean;
						public pageUp(): boolean;
						public parent(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public parent(i: number): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public password(): boolean;
						public paste(): boolean;
						public performAction(action: number): boolean;
						public performAction(action: number, bundle: __javaRoots.androidRoot.os.Bundle): boolean;
						public performAction(action: number, ...arguments: __javaRoots.orgRoot.autojs.autojs.core.automator.ActionArgument[]): boolean;
						public point(): __javaRoots.orgRoot.opencv.core.Point;
						public pressAndHold(): boolean;
						public previousAtMovementGranularity(granularity: number, isExtendSelection: boolean): boolean;
						public previousHtmlElement(element: string): boolean;
						public previousSibling(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						/** @deprecated */
						public recycle(): void;
						public right(): number;
						public row(): number;
						public rowCount(): number;
						public rowSpan(): number;
						public scrollBackward(): boolean;
						public scrollDown(): boolean;
						public scrollForward(): boolean;
						public scrollLeft(): boolean;
						public scrollRight(): boolean;
						public scrollTo(row: number, column: number): boolean;
						public scrollUp(): boolean;
						public scrollable(): boolean;
						public select(): boolean;
						public selected(): boolean;
						public setProgress(progress: number): boolean;
						public setSelection(s: number, e: number): boolean;
						public setText(text: string): boolean;
						public show(): boolean;
						public showTextSuggestions(): boolean;
						public showTooltip(): boolean;
						public sibling(i: number): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public siblingCount(): number;
						public siblings(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						public simpleId(): string;
						public size(): __javaRoots.orgRoot.opencv.core.Size;
						public snapshot(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public summary(): string;
						public text(): string;
						public toString(): string;
						public top(): number;
						public visibleToUser(): boolean;
						public width(): number;
						public getChild(...args: any[]): any;
						public getParent(...args: any[]): any;
						public setText(...args: any[]): any;
					}
					export namespace UiObject {
						export class Companion {
							public createRoot(root: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
							public createRoot$app(root: __javaRoots.androidRoot.view.accessibility.AccessibilityNodeInfo, allocator: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityNodeInfoAllocator): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
							public detect(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, w: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject, compass: string, resultType: any, callback: __javaRoots.orgRoot.mozilla.javascript.Callable): any;
							public ensureCompass(s: string): void;
							public isCompass(s: any): boolean;
							protected constructor();
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export class UiObjectActions {
						public constructor(implementation: UiObjectActions);
						public constructor();
					}
					export interface UiObjectActions {
						accessibilityFocus(): boolean;
						clearAccessibilityFocus(): boolean;
						clearFocus(): boolean;
						clearSelection(): boolean;
						click(): boolean;
						collapse(): boolean;
						contextClick(): boolean;
						copy(): boolean;
						cut(): boolean;
						dismiss(): boolean;
						dragCancel(): boolean;
						dragDrop(): boolean;
						dragStart(): boolean;
						expand(): boolean;
						focus(): boolean;
						hideTooltip(): boolean;
						imeEnter(): boolean;
						longClick(): boolean;
						moveWindow(x: number, y: number): boolean;
						nextAtMovementGranularity(granularity: number, isExtendSelection: boolean): boolean;
						nextHtmlElement(element: string): boolean;
						pageDown(): boolean;
						pageLeft(): boolean;
						pageRight(): boolean;
						pageUp(): boolean;
						paste(): boolean;
						performAction(param0: number, ...param1: __javaRoots.orgRoot.autojs.autojs.core.automator.ActionArgument[]): boolean;
						pressAndHold(): boolean;
						previousAtMovementGranularity(granularity: number, isExtendSelection: boolean): boolean;
						previousHtmlElement(element: string): boolean;
						scrollBackward(): boolean;
						scrollDown(): boolean;
						scrollForward(): boolean;
						scrollLeft(): boolean;
						scrollRight(): boolean;
						scrollTo(row: number, column: number): boolean;
						scrollUp(): boolean;
						select(): boolean;
						setProgress(progress: number): boolean;
						setSelection(s: number, e: number): boolean;
						setText(text: string): boolean;
						show(): boolean;
						showTextSuggestions(): boolean;
						showTooltip(): boolean;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export class UiObjectCollection {
						public readonly nodes: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.core.automator.UiObject>;
						public readonly notEmpty: boolean;
						public accessibilityFocus(): boolean;
						public clearAccessibilityFocus(): boolean;
						public clearFocus(): boolean;
						public clearSelection(): boolean;
						public click(): boolean;
						public collapse(): boolean;
						public contains(o: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject): boolean;
						public contextClick(): boolean;
						public copy(): boolean;
						public cut(): boolean;
						public dismiss(): boolean;
						public dragCancel(): boolean;
						public dragDrop(): boolean;
						public dragStart(): boolean;
						public each(consumer: __javaRoots.orgRoot.autojs.autojs.tool.Consumer<__javaRoots.orgRoot.autojs.autojs.core.automator.UiObject>): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						/** @deprecated */
						public empty(): boolean;
						public equals(other: any): boolean;
						public expand(): boolean;
						public find(selector: __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						public findOne(selector: __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public focus(): boolean;
						public get(i: number): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
						public getNodes(): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.core.automator.UiObject>;
						public hashCode(): number;
						public hideTooltip(): boolean;
						public imeEnter(): boolean;
						public isEmpty(): boolean;
						public isNotEmpty(): boolean;
						public isSimilar(other: any): boolean;
						public iterator(): __javaRoots.javaRoot.util.Iterator<__javaRoots.orgRoot.autojs.autojs.core.automator.UiObject>;
						public longClick(): boolean;
						public moveWindow(x: number, y: number): boolean;
						public nextAtMovementGranularity(granularity: number, isExtendSelection: boolean): boolean;
						public nextHtmlElement(element: string): boolean;
						/** @deprecated */
						public nonEmpty(): boolean;
						public static of(list: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.core.automator.UiObject>): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						public static of(list: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject[]): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectCollection;
						public pageDown(): boolean;
						public pageLeft(): boolean;
						public pageRight(): boolean;
						public pageUp(): boolean;
						public paste(): boolean;
						public performAction(action: number): boolean;
						public performAction(action: number, ...arguments: __javaRoots.orgRoot.autojs.autojs.core.automator.ActionArgument[]): boolean;
						public pressAndHold(): boolean;
						public previousAtMovementGranularity(granularity: number, isExtendSelection: boolean): boolean;
						public previousHtmlElement(element: string): boolean;
						public scrollBackward(): boolean;
						public scrollDown(): boolean;
						public scrollForward(): boolean;
						public scrollLeft(): boolean;
						public scrollRight(): boolean;
						public scrollTo(row: number, column: number): boolean;
						public scrollUp(): boolean;
						public select(): boolean;
						public setProgress(progress: number): boolean;
						public setSelection(s: number, e: number): boolean;
						public setText(text: string): boolean;
						public show(): boolean;
						public showTextSuggestions(): boolean;
						public showTooltip(): boolean;
						public size(): number;
						public toArray(): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject[];
						public toList(): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.core.automator.UiObject>;
						public toString(): string;
						protected constructor();
						public performAction(...args: any[]): any;
					}
					export interface UiObjectCollection extends __javaRoots.orgRoot.autojs.autojs.core.automator.UiObjectActions {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export namespace action {
						export class ActionTarget {
							public constructor(implementation: ActionTarget);
							public constructor();
						}
						export interface ActionTarget {
							createAction(param0: number, ...param1: any[]): __javaRoots.orgRoot.autojs.autojs.core.automator.action.SimpleAction;
						}
						export namespace ActionTarget {
							export class BoundsActionTarget {
								public constructor(boundsInRect: __javaRoots.androidRoot.graphics.Rect);
								public createAction(action: number, ...params: any[]): __javaRoots.orgRoot.autojs.autojs.core.automator.action.SearchTargetAction;
								public createAction(...args: any[]): any;
							}
							export interface BoundsActionTarget extends __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget {}
							export class EditableActionTarget {
								public constructor(index: number);
								public createAction(action: number, ...params: any[]): __javaRoots.orgRoot.autojs.autojs.core.automator.action.SimpleAction;
							}
							export interface EditableActionTarget extends __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget {}
							export class IdActionTarget {
								public constructor(id: string);
								public createAction(action: number, ...params: any[]): __javaRoots.orgRoot.autojs.autojs.core.automator.action.FilterAction.SimpleFilterAction;
								public createAction(...args: any[]): any;
							}
							export interface IdActionTarget extends __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget {}
							export class TextActionTarget {
								public constructor(text: string, index: number);
								public createAction(action: number, ...params: any[]): __javaRoots.orgRoot.autojs.autojs.core.automator.action.SearchTargetAction;
								public createAction(...args: any[]): any;
							}
							export interface TextActionTarget extends __javaRoots.orgRoot.autojs.autojs.core.automator.action.ActionTarget {}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export namespace action {
						export abstract class FilterAction extends __javaRoots.orgRoot.autojs.autojs.core.automator.action.SimpleAction {
							public constructor(mFilter: __javaRoots.orgRoot.autojs.autojs.core.automator.action.FilterAction.Filter);
							public perform(param0: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.core.automator.UiObject>): boolean;
							public perform(root: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject): boolean;
							public toString(): string;
							public perform(...args: any[]): any;
						}
						export namespace FilterAction {
							export class Filter {
								public constructor(implementation: Filter);
								public constructor();
							}
							export interface Filter {
								filter(param0: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.core.automator.UiObject>;
							}
							export class SimpleFilterAction extends __javaRoots.orgRoot.autojs.autojs.core.automator.action.FilterAction {
								public constructor(mAction: number, filter: __javaRoots.orgRoot.autojs.autojs.core.automator.action.FilterAction.Filter);
								public perform(nodes: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.core.automator.UiObject>): boolean;
								public perform(...args: any[]): any;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export namespace action {
						export abstract class SearchTargetAction extends __javaRoots.orgRoot.autojs.autojs.core.automator.action.FilterAction {
							public readonly action: number;
							public constructor(action: number, filter: __javaRoots.orgRoot.autojs.autojs.core.automator.action.FilterAction.Filter);
							public getAction(): number;
							public perform(nodes: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.core.automator.UiObject>): boolean;
							public searchTarget(node: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject): __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject;
							public toString(): string;
							public perform(...args: any[]): any;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export namespace action {
						export abstract class SimpleAction {
							public readonly result: boolean;
							public readonly valid: boolean;
							public constructor();
							public getResult(): boolean;
							public isValid(): boolean;
							public perform(param0: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject): boolean;
							public setResult(_set___: boolean): void;
							public setValid(_set___: boolean): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export namespace filter {
						export class BooleanFilter {
							public static readonly DEFAULT: boolean;
							public constructor(mBooleanSupplier: __javaRoots.orgRoot.autojs.autojs.core.automator.filter.BooleanFilter.BooleanSupplier, mExceptedValue: __javaRoots.javaRoot.lang.Boolean);
							public filter(node: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject): boolean;
							public toString(): string;
						}
						export interface BooleanFilter extends __javaRoots.orgRoot.autojs.autojs.core.automator.filter.Filter {}
						export namespace BooleanFilter {
							export class BooleanSupplier {
								public constructor(implementation: BooleanSupplier);
								public constructor();
							}
							export interface BooleanSupplier {
								get(param0: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject): boolean;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export namespace filter {
						export class Filter {
							public constructor(implementation: Filter);
							public constructor();
						}
						export interface Filter {
							filter(param0: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject): boolean;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export namespace filter {
						export class Selector {
							public readonly filters: __javaRoots.javaRoot.util.LinkedList<__javaRoots.orgRoot.autojs.autojs.core.automator.filter.Filter>;
							public constructor();
							public add(filter: __javaRoots.orgRoot.autojs.autojs.core.automator.filter.Filter): boolean;
							public append(uiSelector: __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector): boolean;
							public filter(node: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject): boolean;
							public getFilters(): __javaRoots.javaRoot.util.LinkedList<__javaRoots.orgRoot.autojs.autojs.core.automator.filter.Filter>;
							public toString(): string;
						}
						export interface Selector extends __javaRoots.orgRoot.autojs.autojs.core.automator.filter.Filter {}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace automator {
					export namespace search {
						export class SearchAlgorithm {
							public constructor(implementation: SearchAlgorithm);
							public constructor();
						}
						export interface SearchAlgorithm {
							search(param0: __javaRoots.orgRoot.autojs.autojs.core.automator.UiObject, param1: __javaRoots.orgRoot.autojs.autojs.core.automator.filter.Filter, param2: number): __javaRoots.javaRoot.util.ArrayList<__javaRoots.orgRoot.autojs.autojs.core.automator.UiObject>;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace broadcast {
					export class BroadcastEmitter extends __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter {
						public constructor(bridges: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptBridges, timer: __javaRoots.orgRoot.autojs.autojs.core.looper.Timer);
						public emit(eventName: string, ...args: any[]): boolean;
						public onBroadcast(eventName: string, ...args: any[]): boolean;
						public unregister(): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace console {
					export class ConsoleImpl extends __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractConsole {
						public static readonly DEFAULT_ALPHA: number;
						public static readonly DEFAULT_EXIT_ON_CLOSE: boolean;
						public static readonly DEFAULT_EXIT_ON_CLOSE_TIMEOUT: number;
						public static readonly DEFAULT_GRAVITY: number;
						public static readonly DEFAULT_TITLE: string;
						public static readonly DEFAULT_TOUCHABLE: boolean;
						public static readonly DEFAULT_TOUCH_THROUGH: boolean;
						public readonly configurator: __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
						public readonly contentBackgroundAlpha: number;
						public readonly contentBackgroundColor: number;
						public readonly contentBackgroundTint: __javaRoots.javaRoot.lang.Integer;
						public readonly contentTextColors: __javaRoots.javaRoot.util.Map<__javaRoots.javaRoot.lang.Integer, __javaRoots.javaRoot.lang.Integer>;
						public readonly contentTextSize: number;
						public readonly exitOnClose: any;
						public readonly gravity: number;
						public readonly logEntries: __javaRoots.javaRoot.util.ArrayList<__javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.LogEntry>;
						public readonly position: __javaRoots.orgRoot.opencv.core.Point;
						public readonly showing: boolean;
						public readonly size: __javaRoots.orgRoot.opencv.core.Size;
						public readonly title: string;
						public readonly titleBackgroundAlpha: number;
						public readonly titleBackgroundColor: number;
						public readonly titleBackgroundTint: __javaRoots.javaRoot.lang.Integer;
						public readonly titleTextColor: number;
						public readonly titleTextSize: number;
						public readonly touchThrough: boolean;
						public readonly touchable: boolean;
						public readonly uiHandler: __javaRoots.orgRoot.autojs.autojs.tool.UiHandler;
						public constructor(uiHandler: __javaRoots.orgRoot.autojs.autojs.tool.UiHandler);
						public clear(): void;
						public collapse(): boolean;
						public copyAll(): void;
						public static createLogExportFileName(): string;
						public error(data: any, ...formatArgs: any[]): void;
						public expand(): boolean;
						public export(): void;
						public export(uri: __javaRoots.androidRoot.net.Uri): void;
						public getConfigurator(): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
						public getContentBackgroundAlpha(): number;
						public getContentBackgroundColor(): number;
						public getContentBackgroundTint(): __javaRoots.javaRoot.lang.Integer;
						public getContentTextColors(): __javaRoots.javaRoot.util.Map<__javaRoots.javaRoot.lang.Integer, __javaRoots.javaRoot.lang.Integer>;
						public getContentTextSize(): number;
						public getExitOnClose(): any;
						public getGravity(): number;
						public getLogEntries(): __javaRoots.javaRoot.util.ArrayList<__javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.LogEntry>;
						public getPosition(): __javaRoots.orgRoot.opencv.core.Point;
						public getSize(): __javaRoots.orgRoot.opencv.core.Size;
						public getTitle(): string;
						public getTitleBackgroundAlpha(): number;
						public getTitleBackgroundColor(): number;
						public getTitleBackgroundTint(): __javaRoots.javaRoot.lang.Integer;
						public getTitleTextColor(): number;
						public getTitleTextSize(): number;
						public getUiHandler(): __javaRoots.orgRoot.autojs.autojs.tool.UiHandler;
						public hide(): void;
						public hideDelayed(): void;
						public hideDelayed(exitOnCloseTimeout: number): void;
						public isShowing(): boolean;
						public isTouchThrough(): boolean;
						public isTouchable(): boolean;
						public printAllStackTrace(t: __javaRoots.javaRoot.lang.Throwable): void;
						public println(level: number, charSequence: string): string;
						public reset(): void;
						public resetBackgroundAlpha(): void;
						public resetContentBackgroundAlpha(): void;
						public resetTitleBackgroundAlpha(): void;
						public send(): void;
						public setBackgroundAlpha(alpha: __javaRoots.javaRoot.lang.Double): void;
						public setBackgroundColor(color: number): void;
						public setBackgroundTint(color: number): void;
						public setConsoleView(consoleView: __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleView): void;
						public setContentBackgroundAlpha(alpha: __javaRoots.javaRoot.lang.Double): void;
						public setContentBackgroundColor(color: number): void;
						public setContentBackgroundTint(tint: __javaRoots.javaRoot.lang.Integer): void;
						public setContentTextColors(colors: __javaRoots.javaRoot.lang.Integer[]): void;
						public setContentTextSize(size: number): void;
						public setExitOnClose(): void;
						public setExitOnClose(timeout: number): void;
						public setExitOnClose(exitOnClose: boolean): void;
						public setGravity(gravity: number): void;
						public setGravity(gravity: string): void;
						public setPosition(x: number, y: number): void;
						public setSize(w: number, h: number): void;
						public setTextColor(color: number): void;
						public setTextSize(size: number): void;
						public setTitle(title: string): void;
						public setTitleBackgroundAlpha(alpha: __javaRoots.javaRoot.lang.Double): void;
						public setTitleBackgroundColor(color: number): void;
						public setTitleBackgroundTint(tint: __javaRoots.javaRoot.lang.Integer): void;
						public setTitleIconsTint(color: __javaRoots.javaRoot.lang.Integer): void;
						public setTitleTextColor(color: number): void;
						public setTitleTextSize(size: number): void;
						public setTouchThrough(): void;
						public setTouchThrough(touchThrough: boolean): void;
						public setTouchable(): void;
						public setTouchable(touchable: boolean): void;
						public show(): void;
						public show(isReset: boolean): void;
						public write(level: number, data: string): void;
						public error(...args: any[]): any;
						public setTouchable(...args: any[]): any;
						public show(...args: any[]): any;
					}
					export namespace ConsoleImpl {
						export class Configurator {
							public readonly contentBackgroundAlpha: number;
							public readonly contentBackgroundColor: number;
							public readonly contentBackgroundTint: __javaRoots.javaRoot.lang.Integer;
							public readonly contentTextColors: __javaRoots.javaRoot.lang.Integer[];
							public readonly contentTextSize: __javaRoots.javaRoot.lang.Float;
							public readonly exitOnClose: boolean;
							public readonly exitOnCloseTimeout: number;
							public readonly gravity: number;
							public readonly position: __javaRoots.orgRoot.opencv.core.Point;
							public readonly size: __javaRoots.orgRoot.opencv.core.Size;
							public readonly title: string;
							public readonly titleBackgroundAlpha: number;
							public readonly titleBackgroundColor: number;
							public readonly titleBackgroundTint: __javaRoots.javaRoot.lang.Integer;
							public readonly titleIconsTint: __javaRoots.javaRoot.lang.Integer;
							public readonly titleTextColor: __javaRoots.javaRoot.lang.Integer;
							public readonly titleTextSize: __javaRoots.javaRoot.lang.Float;
							public readonly touchable: boolean;
							public constructor();
							public clearStates(): void;
							public getContentBackgroundAlpha(): number;
							public getContentBackgroundColor(): number;
							public getContentBackgroundTint(): __javaRoots.javaRoot.lang.Integer;
							public getContentTextColors(): __javaRoots.javaRoot.lang.Integer[];
							public getContentTextSize(): __javaRoots.javaRoot.lang.Float;
							public getExitOnCloseTimeout(): number;
							public getGravity(): number;
							public getPosition(): __javaRoots.orgRoot.opencv.core.Point;
							public getSize(): __javaRoots.orgRoot.opencv.core.Size;
							public getTitle(): string;
							public getTitleBackgroundAlpha(): number;
							public getTitleBackgroundColor(): number;
							public getTitleBackgroundTint(): __javaRoots.javaRoot.lang.Integer;
							public getTitleIconsTint(): __javaRoots.javaRoot.lang.Integer;
							public getTitleTextColor(): __javaRoots.javaRoot.lang.Integer;
							public getTitleTextSize(): __javaRoots.javaRoot.lang.Float;
							public isExitOnClose(): boolean;
							public isTouchable(): boolean;
							public resetExitOnClose$app(): void;
							public setBackgroundAlpha(alpha: __javaRoots.javaRoot.lang.Double): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setBackgroundColor(color: any): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setBackgroundTint(color: any): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setContentBackgroundAlpha(alpha: __javaRoots.javaRoot.lang.Double): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setContentBackgroundColor(_set___: number): void;
							public setContentBackgroundColor(color: any): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setContentBackgroundTint(_set___: __javaRoots.javaRoot.lang.Integer): void;
							public setContentBackgroundTint(tint: any): void;
							public setContentTextColors(colors: any[]): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setContentTextSize(size: number): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setExitOnClose(): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setExitOnClose(timeout: number): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setExitOnClose(exitOnClose: boolean): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setGravity(gravity: __javaRoots.javaRoot.lang.Integer): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setPosition(x: number, y: number): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setSize(w: number, h: number): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setTextColor(color: any): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setTextSize(size: number): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setTitle(title: string): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setTitleBackgroundAlpha(alpha: __javaRoots.javaRoot.lang.Double): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setTitleBackgroundColor(_set___: number): void;
							public setTitleBackgroundColor(color: any): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setTitleBackgroundTint(_set___: __javaRoots.javaRoot.lang.Integer): void;
							public setTitleBackgroundTint(tint: any): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setTitleIconsTint(color: any): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setTitleTextColor(color: any): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setTitleTextSize(size: number): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setTouchThrough(touchThrough: boolean): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public setTouchable(touchable: boolean): __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.Configurator;
							public show(): void;
							public show(isReset: boolean): void;
						}
						export class LogEntry {
							public content: string;
							public level: number;
							public readonly id: number;
							public constructor(id: number, level: number, content: string);
							public compareTo(other: __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.LogEntry): number;
							public getId(): number;
							public setId(_set___: number): void;
							public compareTo(...args: any[]): any;
						}
						export interface LogEntry extends __javaRoots.javaRoot.lang.Comparable<__javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.LogEntry> {}
						export class LogListener {
							public constructor(implementation: LogListener);
							public constructor();
						}
						export interface LogListener {
							onLogClear(): void;
							onNewLog(param0: __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.LogEntry): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace console {
					export class ConsoleView extends __javaRoots.androidRoot.widget.FrameLayout {
						public readonly textColors: __javaRoots.javaRoot.util.Map<__javaRoots.javaRoot.lang.Integer, __javaRoots.javaRoot.lang.Integer>;
						public readonly textSize: number;
						public constructor(context: __javaRoots.androidRoot.content.Context);
						public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
						public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
						public export(fileName: string): void;
						public getTextColors(): __javaRoots.javaRoot.util.Map<__javaRoots.javaRoot.lang.Integer, __javaRoots.javaRoot.lang.Integer>;
						public getTextSize(): number;
						public onLogClear(): void;
						public onNewLog(logEntry: __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.LogEntry): void;
						public setAssertTextColor(color: number): void;
						public setCommandInputBusy(busy: boolean): void;
						public setCommandInputTextColor(color: number): void;
						public setCommandInputVisible(visible: boolean): void;
						public setConsole(console: __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl): void;
						public setDebugTextColor(color: number): void;
						public setEnableStackFrameLinks(enabled: boolean): void;
						public setErrorTextColor(color: number): void;
						public setInfoTextColor(color: number): void;
						public setLogActivity(activity: __javaRoots.orgRoot.autojs.autojs.ui.log.LogActivity): void;
						public setOnCommandStopListener(listener: __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleView.OnCommandStopListener): void;
						public setOnCommandSubmitListener(listener: __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleView.OnCommandSubmitListener): void;
						public setOnStackFrameClickListener(listener: __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleView.OnStackFrameClickListener): void;
						public setPinchToZoomEnabled(enabled: boolean): void;
						public setTextColors(colors: __javaRoots.javaRoot.lang.Integer[]): void;
						public setTextSize(size: number): void;
						public setVerboseTextColor(color: number): void;
						public setWarnTextColor(color: number): void;
					}
					export interface ConsoleView extends __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.LogListener {}
					export namespace ConsoleView {
						export class OnCommandStopListener {
							public constructor(implementation: OnCommandStopListener);
							public constructor();
						}
						export interface OnCommandStopListener {
							onCommandStop(): void;
						}
						export class OnCommandSubmitListener {
							public constructor(implementation: OnCommandSubmitListener);
							public constructor();
						}
						export interface OnCommandSubmitListener {
							onCommandSubmit(param0: string): void;
						}
						export class OnStackFrameClickListener {
							public constructor(implementation: OnStackFrameClickListener);
							public constructor();
						}
						export interface OnStackFrameClickListener {
							onStackFrameClick(param0: string, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace console {
					export class GlobalConsole extends __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl {
						public constructor(uiHandler: __javaRoots.orgRoot.autojs.autojs.tool.UiHandler);
						public println(level: number, charSequence: string): string;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace crypto {
					export class Crypto {
						public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.core.crypto.Crypto;
						public static decrypt(data: any, key: any, transformation: string): __javaRoots.javaRoot.io.Serializable;
						public static decrypt(data: any, key: any, transformation: string, options: __javaRoots.orgRoot.mozilla.javascript.NativeObject): __javaRoots.javaRoot.io.Serializable;
						public static digest(message: any): __javaRoots.javaRoot.io.Serializable;
						public static digest(message: any, algorithm: string): __javaRoots.javaRoot.io.Serializable;
						public static digest(message: any, algorithm: string, options: __javaRoots.orgRoot.mozilla.javascript.NativeObject): __javaRoots.javaRoot.io.Serializable;
						public static digest(message: any, options: __javaRoots.orgRoot.mozilla.javascript.NativeObject): __javaRoots.javaRoot.io.Serializable;
						public static encrypt(data: any, key: any, transformation: string): __javaRoots.javaRoot.io.Serializable;
						public static encrypt(data: any, key: any, transformation: string, options: __javaRoots.orgRoot.mozilla.javascript.NativeObject): __javaRoots.javaRoot.io.Serializable;
						public static fromHex(hex: string): number[];
						public static generateKeyPair(algorithm: string): __javaRoots.orgRoot.autojs.autojs.core.crypto.Crypto.KeyPair;
						public static generateKeyPair(algorithm: string, length: number): __javaRoots.orgRoot.autojs.autojs.core.crypto.Crypto.KeyPair;
						public static toHex(bytes: number[]): string;
						protected constructor();
					}
					export namespace Crypto {
						export class Key {
							public readonly data: number[];
							public readonly keyPair: string;
							public constructor(data: any);
							public constructor(data: any, options: __javaRoots.orgRoot.mozilla.javascript.NativeObject);
							public constructor(data: any, options: __javaRoots.orgRoot.mozilla.javascript.NativeObject, isPublic: __javaRoots.javaRoot.lang.Boolean);
							public getData(): number[];
							public getKeyPair(): string;
							public toKeySpec(transformation: string): __javaRoots.javaRoot.security.Key;
							public toString(): string;
						}
						export class KeyPair {
							public readonly keyPairGeneratorAlgorithm$app: string;
							public readonly privateKey: __javaRoots.orgRoot.autojs.autojs.core.crypto.Crypto.Key;
							public readonly publicKey: __javaRoots.orgRoot.autojs.autojs.core.crypto.Crypto.Key;
							public constructor(publicKeyData: any, privateKeyData: any);
							public constructor(publicKeyData: any, privateKeyData: any, options: __javaRoots.orgRoot.mozilla.javascript.NativeObject);
							public getKeyPairGeneratorAlgorithm$app(): string;
							public getPrivateKey(): __javaRoots.orgRoot.autojs.autojs.core.crypto.Crypto.Key;
							public getPublicKey(): __javaRoots.orgRoot.autojs.autojs.core.crypto.Crypto.Key;
							public setKeyPairGeneratorAlgorithm$app(_set___: string): void;
							public toKeySpec(transformation: string): __javaRoots.javaRoot.security.Key;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace database {
					export class Database extends __javaRoots.androidRoot.database.sqlite.SQLiteOpenHelper {
						public readonly attachedDbs: __javaRoots.javaRoot.util.List<__javaRoots.androidRoot.util.Pair<string, string>>;
						public readonly databaseIntegrityOk: boolean;
						public readonly dbLockedByCurrentThread: boolean;
						public readonly maximumSize: number;
						public readonly open: boolean;
						public readonly pageSize: number;
						public readonly path: string;
						public readonly readOnly: boolean;
						public readonly typeAdapter: __javaRoots.orgRoot.autojs.autojs.core.database.Database.TypeAdapter;
						public readonly version: number;
						public readonly writeAheadLoggingEnabled: boolean;
						public constructor(context: __javaRoots.androidRoot.content.Context, scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, databaseFilePath: string, version: number, readable: boolean, databaseCallback: __javaRoots.orgRoot.autojs.autojs.core.database.Database.DatabaseCallback, typeAdapter: __javaRoots.orgRoot.autojs.autojs.core.database.Database.TypeAdapter);
						public acquireReference(): void;
						public beginTransaction(): void;
						public beginTransactionNonExclusive(): void;
						public beginTransactionWithListener(listener: __javaRoots.androidRoot.database.sqlite.SQLiteTransactionListener): void;
						public beginTransactionWithListenerNonExclusive(listener: __javaRoots.androidRoot.database.sqlite.SQLiteTransactionListener): void;
						public close(): void;
						public compileStatement(sql: string): __javaRoots.androidRoot.database.sqlite.SQLiteStatement;
						public delete(table: string, whereClause: string, whereArgs: string[]): number;
						public disableWriteAheadLogging(): void;
						public enableWriteAheadLogging(): boolean;
						public endTransaction(): void;
						public execSQL(sql: string): void;
						public execSQL(sql: string, bindArgs: any[]): void;
						public getAttachedDbs(): __javaRoots.javaRoot.util.List<__javaRoots.androidRoot.util.Pair<string, string>>;
						public getMaximumSize(): number;
						public getPageSize(): number;
						public getPath(): string;
						public getTypeAdapter(): __javaRoots.orgRoot.autojs.autojs.core.database.Database.TypeAdapter;
						public getVersion(): number;
						public inTransaction(): boolean;
						public insert(table: string, values: any): number;
						public insert(table: string, nullColumnHack: string, values: any): number;
						public insertOrThrow(table: string, nullColumnHack: string, values: any): number;
						public insertWithOnConflict(table: string, nullColumnHack: string, initialValues: any, conflictAlgorithm: number): number;
						public isDatabaseIntegrityOk(): boolean;
						public isDbLockedByCurrentThread(): boolean;
						public isOpen(): boolean;
						public isReadOnly(): boolean;
						public isWriteAheadLoggingEnabled(): boolean;
						public needUpgrade(newVersion: number): boolean;
						public onCreate(db: __javaRoots.androidRoot.database.sqlite.SQLiteDatabase): void;
						public onOpen(db: __javaRoots.androidRoot.database.sqlite.SQLiteDatabase): void;
						public onUpgrade(db: __javaRoots.androidRoot.database.sqlite.SQLiteDatabase, oldVersion: number, newVersion: number): void;
						public query(table: string, columns: string[], selection: string, selectionArgs: string[], groupBy: string, having: string, orderBy: string): any;
						public query(table: string, columns: string[], selection: string, selectionArgs: string[], groupBy: string, having: string, orderBy: string, limit: string): any;
						public query(distinct: boolean, table: string, columns: string[], selection: string, selectionArgs: string[], groupBy: string, having: string, orderBy: string, limit: string): any;
						public query(distinct: boolean, table: string, columns: string[], selection: string, selectionArgs: string[], groupBy: string, having: string, orderBy: string, limit: string, cancellationSignal: __javaRoots.androidRoot.os.CancellationSignal): any;
						public queryWithFactory(cursorFactory: __javaRoots.androidRoot.database.sqlite.SQLiteDatabase.CursorFactory, distinct: boolean, table: string, columns: string[], selection: string, selectionArgs: string[], groupBy: string, having: string, orderBy: string, limit: string): any;
						public queryWithFactory(cursorFactory: __javaRoots.androidRoot.database.sqlite.SQLiteDatabase.CursorFactory, distinct: boolean, table: string, columns: string[], selection: string, selectionArgs: string[], groupBy: string, having: string, orderBy: string, limit: string, cancellationSignal: __javaRoots.androidRoot.os.CancellationSignal): any;
						public rawQuery(sql: string, selectionArgs: string[]): any;
						public rawQuery(sql: string, selectionArgs: string[], cancellationSignal: __javaRoots.androidRoot.os.CancellationSignal): any;
						public rawQueryWithFactory(cursorFactory: __javaRoots.androidRoot.database.sqlite.SQLiteDatabase.CursorFactory, sql: string, selectionArgs: string[], editTable: string): any;
						public rawQueryWithFactory(cursorFactory: __javaRoots.androidRoot.database.sqlite.SQLiteDatabase.CursorFactory, sql: string, selectionArgs: string[], editTable: string, cancellationSignal: __javaRoots.androidRoot.os.CancellationSignal): any;
						public releaseReference(): void;
						public replace(table: string, nullColumnHack: string, initialValues: any): number;
						public replaceOrThrow(table: string, nullColumnHack: string, initialValues: any): number;
						public setForeignKeyConstraintsEnabled(enable: boolean): void;
						public setLocale(locale: __javaRoots.javaRoot.util.Locale): void;
						public setMaxSqlCacheSize(cacheSize: number): void;
						public setMaximumSize(numBytes: number): number;
						public setPageSize(numBytes: number): void;
						public setTransactionSuccessful(): void;
						public setVersion(version: number): void;
						public transaction(transactionCallback: __javaRoots.orgRoot.autojs.autojs.core.database.TransactionCallback): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public transaction(transactionCallback: __javaRoots.orgRoot.autojs.autojs.core.database.TransactionCallback, exclusive: boolean): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public update(table: string, values: any, whereClause: string, whereArgs: string[]): number;
						public updateWithOnConflict(table: string, values: any, whereClause: string, whereArgs: string[], conflictAlgorithm: number): number;
						public validateSql(sql: string, cancellationSignal: __javaRoots.androidRoot.os.CancellationSignal): void;
						public yieldIfContendedSafely(): boolean;
						public yieldIfContendedSafely(sleepAfterYieldDelay: number): boolean;
					}
					export namespace Database {
						export class DatabaseCallback {
							public constructor(implementation: DatabaseCallback);
							public constructor();
						}
						export interface DatabaseCallback {
							onCorruption(param0: __javaRoots.androidRoot.database.sqlite.SQLiteDatabase): void;
							onCreate(param0: __javaRoots.orgRoot.autojs.autojs.core.database.Database): void;
							onOpen(param0: __javaRoots.orgRoot.autojs.autojs.core.database.Database): void;
							onUpgrade(param0: __javaRoots.orgRoot.autojs.autojs.core.database.Database, param1: number, param2: number): void;
						}
						export class TypeAdapter {
							public constructor(implementation: TypeAdapter);
							public constructor();
						}
						export interface TypeAdapter {
							toContentValues(param0: any): __javaRoots.androidRoot.content.ContentValues;
							wrapCursor(param0: __javaRoots.androidRoot.database.Cursor): any;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace database {
					export class Transaction {
						public readonly database: __javaRoots.orgRoot.autojs.autojs.core.database.Database;
						public constructor(database: __javaRoots.orgRoot.autojs.autojs.core.database.Database);
						public end(): void;
						public getDatabase(): __javaRoots.orgRoot.autojs.autojs.core.database.Database;
						public succeed(): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace database {
					export class TransactionCallback {
						public constructor(implementation: TransactionCallback);
						public constructor();
					}
					export interface TransactionCallback {
						handleEvent(param0: __javaRoots.orgRoot.autojs.autojs.core.database.Transaction): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace eventloop {
					export class EventEmitter {
						public readonly maxListeners: number;
						public readonly timer: __javaRoots.orgRoot.autojs.autojs.core.looper.Timer;
						public constructor(bridges: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptBridges);
						public constructor(bridges: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptBridges, timer: __javaRoots.orgRoot.autojs.autojs.core.looper.Timer);
						public addListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public static defaultMaxListeners(): number;
						public emit(eventName: string, ...args: any[]): boolean;
						public emitSticky(eventName: string, ...args: any[]): boolean;
						public eventNames(): string[];
						public getMaxListeners(): number;
						public getTimer(): __javaRoots.orgRoot.autojs.autojs.core.looper.Timer;
						public listenerCount(eventName: string): number;
						public listeners(eventName: string): any[];
						public on(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public once(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public prependListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public prependOnceListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public removeAllListeners(): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public removeAllListeners(eventName: string): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public removeListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public setMaxListeners(maxListeners: number): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace floaty {
					export class BaseResizableFloatyWindow extends __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.ResizableFloatyWindow {
						public readonly adjustEnabled: boolean;
						public readonly rootView: __javaRoots.androidRoot.widget.FrameLayout;
						public constructor(context: __javaRoots.androidRoot.content.Context, viewSupplier: __javaRoots.orgRoot.autojs.autojs.core.floaty.BaseResizableFloatyWindow.ViewSupplier);
						public disableWindowFocus(): void;
						public getRootView(): __javaRoots.androidRoot.widget.FrameLayout;
						public isAdjustEnabled(): boolean;
						public onCreate(service: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyService, manager: __javaRoots.androidRoot.view.WindowManager): void;
						public requestWindowFocus(): void;
						public setAdjustEnabled(enabled: boolean): void;
						public setOnCloseButtonClickListener(listener: __javaRoots.androidRoot.view.View.OnClickListener): void;
						public waitForCreation(): __javaRoots.javaRoot.lang.RuntimeException;
						public getRootView(...args: any[]): any;
					}
					export namespace BaseResizableFloatyWindow {
						export class ViewSupplier {
							public constructor(implementation: ViewSupplier);
							public constructor();
						}
						export interface ViewSupplier {
							inflate(param0: __javaRoots.androidRoot.content.Context, param1: __javaRoots.androidRoot.view.ViewGroup): __javaRoots.androidRoot.view.View;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace floaty {
					export class RawWindow extends __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyWindow {
						public readonly contentView: __javaRoots.androidRoot.view.View;
						public constructor(context: __javaRoots.androidRoot.content.Context, supplier: __javaRoots.orgRoot.autojs.autojs.core.floaty.BaseResizableFloatyWindow.ViewSupplier);
						public disableWindowFocus(): void;
						public getContentView(): __javaRoots.androidRoot.view.View;
						public onCreate(floatyService: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyService, windowManager: __javaRoots.androidRoot.view.WindowManager): void;
						public requestWindowFocus(): void;
						public setContentView(_set___: __javaRoots.androidRoot.view.View): void;
						public setTouchable(touchable: boolean): void;
						public waitForCreation(): __javaRoots.javaRoot.lang.RuntimeException;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace graphics {
					export class ScriptCanvas {
						public readonly androidCanvas: __javaRoots.androidRoot.graphics.Canvas;
						public readonly clipBounds: __javaRoots.androidRoot.graphics.Rect;
						public readonly density: number;
						public readonly drawFilter: __javaRoots.androidRoot.graphics.DrawFilter;
						public readonly hardwareAccelerated: boolean;
						public readonly height: number;
						/** @deprecated */
						public readonly matrix: __javaRoots.androidRoot.graphics.Matrix;
						public readonly maximumBitmapHeight: number;
						public readonly maximumBitmapWidth: number;
						public readonly opaque: boolean;
						public readonly saveCount: number;
						public readonly width: number;
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, width: number, height: number);
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, bitmap: __javaRoots.androidRoot.graphics.Bitmap);
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper);
						public clipPath(path: __javaRoots.androidRoot.graphics.Path): boolean;
						public clipPath(path: __javaRoots.androidRoot.graphics.Path, op: __javaRoots.androidRoot.graphics.Region.Op): boolean;
						public clipRect(left: number, top: number, right: number, bottom: number): boolean;
						public clipRect(left: number, top: number, right: number, bottom: number, op: __javaRoots.androidRoot.graphics.Region.Op): boolean;
						public clipRect(rect: __javaRoots.androidRoot.graphics.Rect): boolean;
						public clipRect(rect: __javaRoots.androidRoot.graphics.Rect, op: __javaRoots.androidRoot.graphics.Region.Op): boolean;
						public clipRect(rect: __javaRoots.androidRoot.graphics.RectF): boolean;
						public clipRect(rect: __javaRoots.androidRoot.graphics.RectF, op: __javaRoots.androidRoot.graphics.Region.Op): boolean;
						public concat(matrix: __javaRoots.androidRoot.graphics.Matrix): void;
						public drawARGB(a: number, r: number, g: number, b: number): void;
						public drawArc(left: number, top: number, right: number, bottom: number, startAngle: number, sweepAngle: number, useCenter: boolean, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawArc(oval: __javaRoots.androidRoot.graphics.RectF, startAngle: number, sweepAngle: number, useCenter: boolean, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawBitmap(bitmap: __javaRoots.androidRoot.graphics.Bitmap, left: number, top: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawBitmap(bitmap: __javaRoots.androidRoot.graphics.Bitmap, matrix: __javaRoots.androidRoot.graphics.Matrix, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawBitmap(bitmap: __javaRoots.androidRoot.graphics.Bitmap, src: __javaRoots.androidRoot.graphics.Rect, dst: __javaRoots.androidRoot.graphics.Rect, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawBitmap(bitmap: __javaRoots.androidRoot.graphics.Bitmap, src: __javaRoots.androidRoot.graphics.Rect, dst: __javaRoots.androidRoot.graphics.RectF, paint: __javaRoots.androidRoot.graphics.Paint): void;
						/** @deprecated */
						public drawBitmap(colors: number[], offset: number, stride: number, x: number, y: number, width: number, height: number, hasAlpha: boolean, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawBitmapMesh(bitmap: __javaRoots.androidRoot.graphics.Bitmap, meshWidth: number, meshHeight: number, verts: number[], vertOffset: number, colors: number[], colorOffset: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawCircle(cx: number, cy: number, radius: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawColor(color: number): void;
						public drawColor(color: number, mode: __javaRoots.androidRoot.graphics.PorterDuff.Mode): void;
						public drawImage(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, left: number, top: number, width: number, height: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawImage(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, left: number, top: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawImage(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, sx: number, sy: number, swidth: number, sheight: number, left: number, top: number, width: number, height: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawImage(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, matrix: __javaRoots.androidRoot.graphics.Matrix, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawImage(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, src: __javaRoots.androidRoot.graphics.Rect, dst: __javaRoots.androidRoot.graphics.Rect, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawImage(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, src: __javaRoots.androidRoot.graphics.Rect, dst: __javaRoots.androidRoot.graphics.RectF, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawLine(startX: number, startY: number, stopX: number, stopY: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawLines(pts: number[], offset: number, count: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawLines(pts: number[], paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawOval(left: number, top: number, right: number, bottom: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawOval(oval: __javaRoots.androidRoot.graphics.RectF, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawPaint(paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawPath(path: __javaRoots.androidRoot.graphics.Path, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawPicture(picture: __javaRoots.androidRoot.graphics.Picture): void;
						public drawPicture(picture: __javaRoots.androidRoot.graphics.Picture, dst: __javaRoots.androidRoot.graphics.Rect): void;
						public drawPicture(picture: __javaRoots.androidRoot.graphics.Picture, dst: __javaRoots.androidRoot.graphics.RectF): void;
						public drawPoint(x: number, y: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawPoints(pts: number[], offset: number, count: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawPoints(pts: number[], paint: __javaRoots.androidRoot.graphics.Paint): void;
						/** @deprecated */
						public drawPosText(text: string, pos: number[], paint: __javaRoots.androidRoot.graphics.Paint): void;
						/** @deprecated */
						public drawPosText(text: string[], index: number, count: number, pos: number[], paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawRGB(r: number, g: number, b: number): void;
						public drawRect(left: number, top: number, right: number, bottom: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawRect(r: __javaRoots.androidRoot.graphics.Rect, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawRect(rect: __javaRoots.androidRoot.graphics.RectF, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawRoundRect(left: number, top: number, right: number, bottom: number, rx: number, ry: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawRoundRect(rect: __javaRoots.androidRoot.graphics.RectF, rx: number, ry: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawText(text: string, start: number, end: number, x: number, y: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawText(text: string, x: number, y: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawText(text: string[], index: number, count: number, x: number, y: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawTextOnPath(text: string, path: __javaRoots.androidRoot.graphics.Path, hOffset: number, vOffset: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawTextOnPath(text: string[], index: number, count: number, path: __javaRoots.androidRoot.graphics.Path, hOffset: number, vOffset: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawTextRun(text: string, start: number, end: number, contextStart: number, contextEnd: number, x: number, y: number, isRtl: boolean, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawTextRun(text: string[], index: number, count: number, contextIndex: number, contextCount: number, x: number, y: number, isRtl: boolean, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public drawVertices(mode: __javaRoots.androidRoot.graphics.Canvas.VertexMode, vertexCount: number, verts: number[], vertOffset: number, texs: number[], texOffset: number, colors: number[], colorOffset: number, indices: number[], indexOffset: number, indexCount: number, paint: __javaRoots.androidRoot.graphics.Paint): void;
						public getAndroidCanvas(): __javaRoots.androidRoot.graphics.Canvas;
						public getClipBounds(): __javaRoots.androidRoot.graphics.Rect;
						public getClipBounds(bounds: __javaRoots.androidRoot.graphics.Rect): boolean;
						public getDensity(): number;
						public getDrawFilter(): __javaRoots.androidRoot.graphics.DrawFilter;
						public getHeight(): number;
						/** @deprecated */
						public getMatrix(): __javaRoots.androidRoot.graphics.Matrix;
						/** @deprecated */
						public getMatrix(ctm: __javaRoots.androidRoot.graphics.Matrix): void;
						public getMaximumBitmapHeight(): number;
						public getMaximumBitmapWidth(): number;
						public getSaveCount(): number;
						public getWidth(): number;
						public isHardwareAccelerated(): boolean;
						public isOpaque(): boolean;
						public quickReject(left: number, top: number, right: number, bottom: number, _type_: __javaRoots.androidRoot.graphics.Canvas.EdgeType): boolean;
						public quickReject(path: __javaRoots.androidRoot.graphics.Path, _type_: __javaRoots.androidRoot.graphics.Canvas.EdgeType): boolean;
						public quickReject(rect: __javaRoots.androidRoot.graphics.RectF, _type_: __javaRoots.androidRoot.graphics.Canvas.EdgeType): boolean;
						public restore(): void;
						public restoreToCount(saveCount: number): void;
						public rotate(degrees: number): void;
						public rotate(degrees: number, px: number, py: number): void;
						public save(): number;
						public saveLayer(left: number, top: number, right: number, bottom: number, paint: __javaRoots.androidRoot.graphics.Paint): number;
						public saveLayer(left: number, top: number, right: number, bottom: number, paint: __javaRoots.androidRoot.graphics.Paint, saveFlags: number): number;
						public saveLayer(bounds: __javaRoots.androidRoot.graphics.RectF, paint: __javaRoots.androidRoot.graphics.Paint): number;
						public saveLayer(bounds: __javaRoots.androidRoot.graphics.RectF, paint: __javaRoots.androidRoot.graphics.Paint, saveFlags: number): number;
						public saveLayerAlpha(left: number, top: number, right: number, bottom: number, alpha: number): number;
						public saveLayerAlpha(left: number, top: number, right: number, bottom: number, alpha: number, saveFlags: number): number;
						public saveLayerAlpha(bounds: __javaRoots.androidRoot.graphics.RectF, alpha: number): number;
						public saveLayerAlpha(bounds: __javaRoots.androidRoot.graphics.RectF, alpha: number, saveFlags: number): number;
						public scale(sx: number, sy: number): void;
						public scale(sx: number, sy: number, px: number, py: number): void;
						public setBitmap(bitmap: __javaRoots.androidRoot.graphics.Bitmap): void;
						public setCanvas(canvas: __javaRoots.androidRoot.graphics.Canvas): void;
						public setDensity(density: number): void;
						public setDrawFilter(filter: __javaRoots.androidRoot.graphics.DrawFilter): void;
						public setMatrix(matrix: __javaRoots.androidRoot.graphics.Matrix): void;
						public skew(sx: number, sy: number): void;
						public toImage(): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public translate(dx: number, dy: number): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace http {
					export class MutableOkHttp extends __javaRoots.okhttp3Root.OkHttpClient {
						public static readonly DEFAULT_IS_INSECURE: boolean;
						public static readonly DEFAULT_MAX_RETRIES: number;
						public static readonly DEFAULT_TIMEOUT: number;
						public maxRetries: number;
						public constructor();
						public client(): __javaRoots.okhttp3Root.OkHttpClient;
						public clone(): any;
						public muteClient(builder: __javaRoots.okhttp3Root.OkHttpClient.Builder): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace image {
					export class ColorDetector {
						public constructor(implementation: ColorDetector);
						public constructor();
						public static get(color: number, algorithm: string, threshold: number): __javaRoots.orgRoot.autojs.autojs.core.image.ColorDetector;
					}
					export interface ColorDetector {
						detectColor(param0: number, param1: number, param2: number): boolean;
					}
					export namespace ColorDetector {
						export abstract class AbstractColorDetector {
							public constructor(color: number);
						}
						export interface AbstractColorDetector extends __javaRoots.orgRoot.autojs.autojs.core.image.ColorDetector {}
						export class DifferenceDetector extends __javaRoots.orgRoot.autojs.autojs.core.image.ColorDetector.AbstractColorDetector {
							public constructor(color: number, threshold: number);
							public detectColor(r: number, g: number, b: number): boolean;
						}
						export class EqualityDetector extends __javaRoots.orgRoot.autojs.autojs.core.image.ColorDetector.AbstractColorDetector {
							public constructor(color: number);
							public detectColor(r: number, g: number, b: number): boolean;
						}
						export class HSDistanceDetector extends __javaRoots.orgRoot.autojs.autojs.core.image.ColorDetector.AbstractColorDetector {
							public constructor(color: number, similarity: number);
							public constructor(color: number, threshold: number);
							public detectColor(r: number, g: number, b: number): boolean;
						}
						export class RGBDistanceDetector extends __javaRoots.orgRoot.autojs.autojs.core.image.ColorDetector.AbstractColorDetector {
							public constructor(color: number, threshold: number);
							public detectColor(r: number, g: number, b: number): boolean;
						}
						export class WeightedRGBDistanceDetector extends __javaRoots.orgRoot.autojs.autojs.core.image.ColorDetector.AbstractColorDetector {
							public constructor(color: number, threshold: number);
							public detectColor(r: number, g: number, b: number): boolean;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace image {
					export class ColorFinder {
						public constructor(screenMetrics: __javaRoots.orgRoot.autojs.autojs.runtime.api.ScreenMetrics);
						public detectMultiColors(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, x: number, y: number, firstColor: number, threshold: number, region: __javaRoots.orgRoot.opencv.core.Rect, points: number[]): boolean;
						/** @deprecated */
						public findAllMultiColors(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, firstColor: number, threshold: number, rect: __javaRoots.orgRoot.opencv.core.Rect, points: number[]): __javaRoots.orgRoot.opencv.core.Point[];
						/** @deprecated */
						public findAllPointsForColor(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, color: number, threshold: number, rect: __javaRoots.orgRoot.opencv.core.Rect): __javaRoots.orgRoot.opencv.core.Point[];
						/** @deprecated */
						public findColor(imageWrapper: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, color: number, threshold: number): __javaRoots.orgRoot.opencv.core.Point;
						/** @deprecated */
						public findColor(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, color: number, threshold: number, rect: __javaRoots.orgRoot.opencv.core.Rect): __javaRoots.orgRoot.opencv.core.Point;
						/** @deprecated */
						public findColorEquals(imageWrapper: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, color: number): __javaRoots.orgRoot.opencv.core.Point;
						/** @deprecated */
						public findColorEquals(imageWrapper: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, color: number, region: __javaRoots.orgRoot.opencv.core.Rect): __javaRoots.orgRoot.opencv.core.Point;
						/** @deprecated */
						public findMultiColors(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, firstColor: number, threshold: number, rect: __javaRoots.orgRoot.opencv.core.Rect, points: number[]): __javaRoots.orgRoot.opencv.core.Point;
						public findPointByColor(imageWrapper: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, color: number): __javaRoots.orgRoot.opencv.core.Point;
						public findPointByColor(imageWrapper: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, color: number, threshold: number): __javaRoots.orgRoot.opencv.core.Point;
						public findPointByColor(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, color: number, threshold: number, rect: __javaRoots.orgRoot.opencv.core.Rect): __javaRoots.orgRoot.opencv.core.Point;
						public findPointByColor(imageWrapper: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, color: number, region: __javaRoots.orgRoot.opencv.core.Rect): __javaRoots.orgRoot.opencv.core.Point;
						public findPointByColors(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, firstColor: number, threshold: number, rect: __javaRoots.orgRoot.opencv.core.Rect, points: number[]): __javaRoots.orgRoot.opencv.core.Point;
						public findPointsByColor(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, color: number, threshold: number, rect: __javaRoots.orgRoot.opencv.core.Rect): __javaRoots.orgRoot.opencv.core.Point[];
						public findPointsByColors(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, firstColor: number, threshold: number, rect: __javaRoots.orgRoot.opencv.core.Rect, points: number[]): __javaRoots.orgRoot.opencv.core.Point[];
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace image {
					export class ColorTable {
						public constructor();
						public static getColorByName(colorName: string): __javaRoots.javaRoot.lang.Integer;
						public static getColorByName(colorName: string, suppressExceptions: boolean): __javaRoots.javaRoot.lang.Integer;
					}
					export namespace ColorTable {
						export class Android {
							public static readonly AQUA: number;
							public static readonly BLACK: number;
							public static readonly BLUE: number;
							public static readonly CYAN: number;
							public static readonly DARK_GRAY: number;
							public static readonly DARK_GREY: number;
							public static readonly DKGRAY: number;
							public static readonly FUCHSIA: number;
							public static readonly GRAY: number;
							public static readonly GREEN: number;
							public static readonly GREY: number;
							public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.core.image.ColorTable.Android;
							public static readonly LIGHT_GRAY: number;
							public static readonly LIGHT_GREY: number;
							public static readonly LIME: number;
							public static readonly LTGRAY: number;
							public static readonly MAGENTA: number;
							public static readonly MAROON: number;
							public static readonly NAVY: number;
							public static readonly OLIVE: number;
							public static readonly PURPLE: number;
							public static readonly RED: number;
							public static readonly SILVER: number;
							public static readonly TEAL: number;
							public static readonly TRANSPARENT: number;
							public static readonly WHITE: number;
							public static readonly YELLOW: number;
							protected constructor();
						}
						export class Css {
							public static readonly ALICE_BLUE: number;
							public static readonly ANTIQUE_WHITE: number;
							public static readonly AQUA: number;
							public static readonly AQUAMARINE: number;
							public static readonly AZURE: number;
							public static readonly BEIGE: number;
							public static readonly BISQUE: number;
							public static readonly BLACK: number;
							public static readonly BLANCHED_ALMOND: number;
							public static readonly BLUE: number;
							public static readonly BLUE_VIOLET: number;
							public static readonly BROWN: number;
							public static readonly BURLY_WOOD: number;
							public static readonly CADET_BLUE: number;
							public static readonly CHARTREUSE: number;
							public static readonly CHOCOLATE: number;
							public static readonly CORAL: number;
							public static readonly CORNFLOWER_BLUE: number;
							public static readonly CORN_SILK: number;
							public static readonly CRIMSON: number;
							public static readonly CYAN: number;
							public static readonly DARK_BLUE: number;
							public static readonly DARK_CYAN: number;
							public static readonly DARK_GOLDENROD: number;
							public static readonly DARK_GRAY: number;
							public static readonly DARK_GREEN: number;
							public static readonly DARK_GREY: number;
							public static readonly DARK_KHAKI: number;
							public static readonly DARK_MAGENTA: number;
							public static readonly DARK_OLIVE_GREEN: number;
							public static readonly DARK_ORANGE: number;
							public static readonly DARK_ORCHID: number;
							public static readonly DARK_RED: number;
							public static readonly DARK_SALMON: number;
							public static readonly DARK_SEA_GREEN: number;
							public static readonly DARK_SLATE_BLUE: number;
							public static readonly DARK_SLATE_GRAY: number;
							public static readonly DARK_SLATE_GREY: number;
							public static readonly DARK_TURQUOISE: number;
							public static readonly DARK_VIOLET: number;
							public static readonly DEEP_PINK: number;
							public static readonly DEEP_SKY_BLUE: number;
							public static readonly DIM_GRAY: number;
							public static readonly DIM_GREY: number;
							public static readonly DODGER_BLUE: number;
							public static readonly FIRE_BRICK: number;
							public static readonly FLORAL_WHITE: number;
							public static readonly FOREST_GREEN: number;
							public static readonly FUCHSIA: number;
							public static readonly GAINSBORO: number;
							public static readonly GHOST_WHITE: number;
							public static readonly GOLD: number;
							public static readonly GOLDENROD: number;
							public static readonly GRAY: number;
							public static readonly GREEN: number;
							public static readonly GREEN_YELLOW: number;
							public static readonly GREY: number;
							public static readonly HONEYDEW: number;
							public static readonly HOT_PINK: number;
							public static readonly INDIAN_RED: number;
							public static readonly INDIGO: number;
							public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.core.image.ColorTable.Css;
							public static readonly IVORY: number;
							public static readonly KHAKI: number;
							public static readonly LAVENDER: number;
							public static readonly LAVENDER_BLUSH: number;
							public static readonly LAWN_GREEN: number;
							public static readonly LEMON_CHIFFON: number;
							public static readonly LIGHT_BLUE: number;
							public static readonly LIGHT_CORAL: number;
							public static readonly LIGHT_CYAN: number;
							public static readonly LIGHT_GOLDENROD_YELLOW: number;
							public static readonly LIGHT_GRAY: number;
							public static readonly LIGHT_GREEN: number;
							public static readonly LIGHT_GREY: number;
							public static readonly LIGHT_PINK: number;
							public static readonly LIGHT_SALMON: number;
							public static readonly LIGHT_SEA_GREEN: number;
							public static readonly LIGHT_SKY_BLUE: number;
							public static readonly LIGHT_SLATE_GRAY: number;
							public static readonly LIGHT_SLATE_GREY: number;
							public static readonly LIGHT_STEEL_BLUE: number;
							public static readonly LIGHT_YELLOW: number;
							public static readonly LIME: number;
							public static readonly LIME_GREEN: number;
							public static readonly LINEN: number;
							public static readonly MAGENTA: number;
							public static readonly MAROON: number;
							public static readonly MEDIUM_AQUAMARINE: number;
							public static readonly MEDIUM_BLUE: number;
							public static readonly MEDIUM_LAVENDER_MAGENTA: number;
							public static readonly MEDIUM_ORCHID: number;
							public static readonly MEDIUM_PURPLE: number;
							public static readonly MEDIUM_SEA_GREEN: number;
							public static readonly MEDIUM_SLATE_BLUE: number;
							public static readonly MEDIUM_SPRING_GREEN: number;
							public static readonly MEDIUM_TURQUOISE: number;
							public static readonly MEDIUM_VIOLET_RED: number;
							public static readonly MIDNIGHT_BLUE: number;
							public static readonly MINT_CREAM: number;
							public static readonly MISTY_ROSE: number;
							public static readonly MOCCASIN: number;
							public static readonly NAVAJO_WHITE: number;
							public static readonly NAVY: number;
							public static readonly OLD_LACE: number;
							public static readonly OLIVE: number;
							public static readonly OLIVE_DRAB: number;
							public static readonly ORANGE: number;
							public static readonly ORANGE_RED: number;
							public static readonly ORCHID: number;
							public static readonly PALE_GOLDENROD: number;
							public static readonly PALE_GREEN: number;
							public static readonly PALE_TURQUOISE: number;
							public static readonly PALE_VIOLET_RED: number;
							public static readonly PAPAYA_WHIP: number;
							public static readonly PATRIARCH: number;
							public static readonly PEACH_PUFF: number;
							public static readonly PERU: number;
							public static readonly PINK: number;
							public static readonly POWDER_BLUE: number;
							public static readonly REBECCA_PURPLE: number;
							public static readonly RED: number;
							public static readonly ROSY_BROWN: number;
							public static readonly ROYAL_BLUE: number;
							public static readonly SADDLE_BROWN: number;
							public static readonly SALMON: number;
							public static readonly SAND_BROWN: number;
							public static readonly SEASHELL: number;
							public static readonly SEA_GREEN: number;
							public static readonly SIENNA: number;
							public static readonly SILVER: number;
							public static readonly SKY_BLUE: number;
							public static readonly SLATE_BLUE: number;
							public static readonly SLATE_GRAY: number;
							public static readonly SLATE_GREY: number;
							public static readonly SNOW: number;
							public static readonly SPRING_GREEN: number;
							public static readonly STEEL_BLUE: number;
							public static readonly TAN: number;
							public static readonly TEAL: number;
							public static readonly THISTLE: number;
							public static readonly TOMATO: number;
							public static readonly TURQUOISE: number;
							public static readonly VIOLET: number;
							public static readonly WHEAT: number;
							public static readonly WHITE: number;
							public static readonly WHITE_SMOKE: number;
							public static readonly YELLOW: number;
							public static readonly YELLOW_GREEN: number;
							protected constructor();
						}
						export class Material {
							public static readonly AMBER: number;
							public static readonly AMBER_100: number;
							public static readonly AMBER_200: number;
							public static readonly AMBER_300: number;
							public static readonly AMBER_400: number;
							public static readonly AMBER_50: number;
							public static readonly AMBER_500: number;
							public static readonly AMBER_600: number;
							public static readonly AMBER_700: number;
							public static readonly AMBER_800: number;
							public static readonly AMBER_900: number;
							public static readonly AMBER_A100: number;
							public static readonly AMBER_A200: number;
							public static readonly AMBER_A400: number;
							public static readonly AMBER_A700: number;
							public static readonly BLACK: number;
							public static readonly BLACK_1000: number;
							public static readonly BLUE: number;
							public static readonly BLUE_100: number;
							public static readonly BLUE_200: number;
							public static readonly BLUE_300: number;
							public static readonly BLUE_400: number;
							public static readonly BLUE_50: number;
							public static readonly BLUE_500: number;
							public static readonly BLUE_600: number;
							public static readonly BLUE_700: number;
							public static readonly BLUE_800: number;
							public static readonly BLUE_900: number;
							public static readonly BLUE_A100: number;
							public static readonly BLUE_A200: number;
							public static readonly BLUE_A400: number;
							public static readonly BLUE_A700: number;
							public static readonly BLUE_GRAY: number;
							public static readonly BLUE_GRAY_100: number;
							public static readonly BLUE_GRAY_200: number;
							public static readonly BLUE_GRAY_300: number;
							public static readonly BLUE_GRAY_400: number;
							public static readonly BLUE_GRAY_50: number;
							public static readonly BLUE_GRAY_500: number;
							public static readonly BLUE_GRAY_600: number;
							public static readonly BLUE_GRAY_700: number;
							public static readonly BLUE_GRAY_800: number;
							public static readonly BLUE_GRAY_900: number;
							public static readonly BLUE_GREY: number;
							public static readonly BLUE_GREY_100: number;
							public static readonly BLUE_GREY_200: number;
							public static readonly BLUE_GREY_300: number;
							public static readonly BLUE_GREY_400: number;
							public static readonly BLUE_GREY_50: number;
							public static readonly BLUE_GREY_500: number;
							public static readonly BLUE_GREY_600: number;
							public static readonly BLUE_GREY_700: number;
							public static readonly BLUE_GREY_800: number;
							public static readonly BLUE_GREY_900: number;
							public static readonly BROWN: number;
							public static readonly BROWN_100: number;
							public static readonly BROWN_200: number;
							public static readonly BROWN_300: number;
							public static readonly BROWN_400: number;
							public static readonly BROWN_50: number;
							public static readonly BROWN_500: number;
							public static readonly BROWN_600: number;
							public static readonly BROWN_700: number;
							public static readonly BROWN_800: number;
							public static readonly BROWN_900: number;
							public static readonly CYAN: number;
							public static readonly CYAN_100: number;
							public static readonly CYAN_200: number;
							public static readonly CYAN_300: number;
							public static readonly CYAN_400: number;
							public static readonly CYAN_50: number;
							public static readonly CYAN_500: number;
							public static readonly CYAN_600: number;
							public static readonly CYAN_700: number;
							public static readonly CYAN_800: number;
							public static readonly CYAN_900: number;
							public static readonly CYAN_A100: number;
							public static readonly CYAN_A200: number;
							public static readonly CYAN_A400: number;
							public static readonly CYAN_A700: number;
							public static readonly DEEP_ORANGE: number;
							public static readonly DEEP_ORANGE_100: number;
							public static readonly DEEP_ORANGE_200: number;
							public static readonly DEEP_ORANGE_300: number;
							public static readonly DEEP_ORANGE_400: number;
							public static readonly DEEP_ORANGE_50: number;
							public static readonly DEEP_ORANGE_500: number;
							public static readonly DEEP_ORANGE_600: number;
							public static readonly DEEP_ORANGE_700: number;
							public static readonly DEEP_ORANGE_800: number;
							public static readonly DEEP_ORANGE_900: number;
							public static readonly DEEP_ORANGE_A100: number;
							public static readonly DEEP_ORANGE_A200: number;
							public static readonly DEEP_ORANGE_A400: number;
							public static readonly DEEP_ORANGE_A700: number;
							public static readonly DEEP_PURPLE: number;
							public static readonly DEEP_PURPLE_100: number;
							public static readonly DEEP_PURPLE_200: number;
							public static readonly DEEP_PURPLE_300: number;
							public static readonly DEEP_PURPLE_400: number;
							public static readonly DEEP_PURPLE_50: number;
							public static readonly DEEP_PURPLE_500: number;
							public static readonly DEEP_PURPLE_600: number;
							public static readonly DEEP_PURPLE_700: number;
							public static readonly DEEP_PURPLE_800: number;
							public static readonly DEEP_PURPLE_900: number;
							public static readonly DEEP_PURPLE_A100: number;
							public static readonly DEEP_PURPLE_A200: number;
							public static readonly DEEP_PURPLE_A400: number;
							public static readonly DEEP_PURPLE_A700: number;
							public static readonly GRAY: number;
							public static readonly GRAY_100: number;
							public static readonly GRAY_200: number;
							public static readonly GRAY_300: number;
							public static readonly GRAY_400: number;
							public static readonly GRAY_50: number;
							public static readonly GRAY_500: number;
							public static readonly GRAY_600: number;
							public static readonly GRAY_700: number;
							public static readonly GRAY_800: number;
							public static readonly GRAY_900: number;
							public static readonly GREEN: number;
							public static readonly GREEN_100: number;
							public static readonly GREEN_200: number;
							public static readonly GREEN_300: number;
							public static readonly GREEN_400: number;
							public static readonly GREEN_50: number;
							public static readonly GREEN_500: number;
							public static readonly GREEN_600: number;
							public static readonly GREEN_700: number;
							public static readonly GREEN_800: number;
							public static readonly GREEN_900: number;
							public static readonly GREEN_A100: number;
							public static readonly GREEN_A200: number;
							public static readonly GREEN_A400: number;
							public static readonly GREEN_A700: number;
							public static readonly GREY: number;
							public static readonly GREY_100: number;
							public static readonly GREY_200: number;
							public static readonly GREY_300: number;
							public static readonly GREY_400: number;
							public static readonly GREY_50: number;
							public static readonly GREY_500: number;
							public static readonly GREY_600: number;
							public static readonly GREY_700: number;
							public static readonly GREY_800: number;
							public static readonly GREY_900: number;
							public static readonly INDIGO: number;
							public static readonly INDIGO_100: number;
							public static readonly INDIGO_200: number;
							public static readonly INDIGO_300: number;
							public static readonly INDIGO_400: number;
							public static readonly INDIGO_50: number;
							public static readonly INDIGO_500: number;
							public static readonly INDIGO_600: number;
							public static readonly INDIGO_700: number;
							public static readonly INDIGO_800: number;
							public static readonly INDIGO_900: number;
							public static readonly INDIGO_A100: number;
							public static readonly INDIGO_A200: number;
							public static readonly INDIGO_A400: number;
							public static readonly INDIGO_A700: number;
							public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.core.image.ColorTable.Material;
							public static readonly LIGHT_BLUE: number;
							public static readonly LIGHT_BLUE_100: number;
							public static readonly LIGHT_BLUE_200: number;
							public static readonly LIGHT_BLUE_300: number;
							public static readonly LIGHT_BLUE_400: number;
							public static readonly LIGHT_BLUE_50: number;
							public static readonly LIGHT_BLUE_500: number;
							public static readonly LIGHT_BLUE_600: number;
							public static readonly LIGHT_BLUE_700: number;
							public static readonly LIGHT_BLUE_800: number;
							public static readonly LIGHT_BLUE_900: number;
							public static readonly LIGHT_BLUE_A100: number;
							public static readonly LIGHT_BLUE_A200: number;
							public static readonly LIGHT_BLUE_A400: number;
							public static readonly LIGHT_BLUE_A700: number;
							public static readonly LIGHT_GREEN: number;
							public static readonly LIGHT_GREEN_100: number;
							public static readonly LIGHT_GREEN_200: number;
							public static readonly LIGHT_GREEN_300: number;
							public static readonly LIGHT_GREEN_400: number;
							public static readonly LIGHT_GREEN_50: number;
							public static readonly LIGHT_GREEN_500: number;
							public static readonly LIGHT_GREEN_600: number;
							public static readonly LIGHT_GREEN_700: number;
							public static readonly LIGHT_GREEN_800: number;
							public static readonly LIGHT_GREEN_900: number;
							public static readonly LIGHT_GREEN_A100: number;
							public static readonly LIGHT_GREEN_A200: number;
							public static readonly LIGHT_GREEN_A400: number;
							public static readonly LIGHT_GREEN_A700: number;
							public static readonly LIME: number;
							public static readonly LIME_100: number;
							public static readonly LIME_200: number;
							public static readonly LIME_300: number;
							public static readonly LIME_400: number;
							public static readonly LIME_50: number;
							public static readonly LIME_500: number;
							public static readonly LIME_600: number;
							public static readonly LIME_700: number;
							public static readonly LIME_800: number;
							public static readonly LIME_900: number;
							public static readonly LIME_A100: number;
							public static readonly LIME_A200: number;
							public static readonly LIME_A400: number;
							public static readonly LIME_A700: number;
							public static readonly ORANGE: number;
							public static readonly ORANGE_100: number;
							public static readonly ORANGE_200: number;
							public static readonly ORANGE_300: number;
							public static readonly ORANGE_400: number;
							public static readonly ORANGE_50: number;
							public static readonly ORANGE_500: number;
							public static readonly ORANGE_600: number;
							public static readonly ORANGE_700: number;
							public static readonly ORANGE_800: number;
							public static readonly ORANGE_900: number;
							public static readonly ORANGE_A100: number;
							public static readonly ORANGE_A200: number;
							public static readonly ORANGE_A400: number;
							public static readonly ORANGE_A700: number;
							public static readonly PINK: number;
							public static readonly PINK_100: number;
							public static readonly PINK_200: number;
							public static readonly PINK_300: number;
							public static readonly PINK_400: number;
							public static readonly PINK_50: number;
							public static readonly PINK_500: number;
							public static readonly PINK_600: number;
							public static readonly PINK_700: number;
							public static readonly PINK_800: number;
							public static readonly PINK_900: number;
							public static readonly PINK_A100: number;
							public static readonly PINK_A200: number;
							public static readonly PINK_A400: number;
							public static readonly PINK_A700: number;
							public static readonly PURPLE: number;
							public static readonly PURPLE_100: number;
							public static readonly PURPLE_200: number;
							public static readonly PURPLE_300: number;
							public static readonly PURPLE_400: number;
							public static readonly PURPLE_50: number;
							public static readonly PURPLE_500: number;
							public static readonly PURPLE_600: number;
							public static readonly PURPLE_700: number;
							public static readonly PURPLE_800: number;
							public static readonly PURPLE_900: number;
							public static readonly PURPLE_A100: number;
							public static readonly PURPLE_A200: number;
							public static readonly PURPLE_A400: number;
							public static readonly PURPLE_A700: number;
							public static readonly RED: number;
							public static readonly RED_100: number;
							public static readonly RED_200: number;
							public static readonly RED_300: number;
							public static readonly RED_400: number;
							public static readonly RED_50: number;
							public static readonly RED_500: number;
							public static readonly RED_600: number;
							public static readonly RED_700: number;
							public static readonly RED_800: number;
							public static readonly RED_900: number;
							public static readonly RED_A100: number;
							public static readonly RED_A200: number;
							public static readonly RED_A400: number;
							public static readonly RED_A700: number;
							public static readonly TEAL: number;
							public static readonly TEAL_100: number;
							public static readonly TEAL_200: number;
							public static readonly TEAL_300: number;
							public static readonly TEAL_400: number;
							public static readonly TEAL_50: number;
							public static readonly TEAL_500: number;
							public static readonly TEAL_600: number;
							public static readonly TEAL_700: number;
							public static readonly TEAL_800: number;
							public static readonly TEAL_900: number;
							public static readonly TEAL_A100: number;
							public static readonly TEAL_A200: number;
							public static readonly TEAL_A400: number;
							public static readonly TEAL_A700: number;
							public static readonly WHITE: number;
							public static readonly WHITE_1000: number;
							public static readonly YELLOW: number;
							public static readonly YELLOW_100: number;
							public static readonly YELLOW_200: number;
							public static readonly YELLOW_300: number;
							public static readonly YELLOW_400: number;
							public static readonly YELLOW_50: number;
							public static readonly YELLOW_500: number;
							public static readonly YELLOW_600: number;
							public static readonly YELLOW_700: number;
							public static readonly YELLOW_800: number;
							public static readonly YELLOW_900: number;
							public static readonly YELLOW_A100: number;
							public static readonly YELLOW_A200: number;
							public static readonly YELLOW_A400: number;
							public static readonly YELLOW_A700: number;
							protected constructor();
						}
						export class Web {
							public static readonly ALICE_BLUE: number;
							public static readonly ALIZARIN_CRIMSON: number;
							public static readonly AMBER: number;
							public static readonly AMETHYST: number;
							public static readonly ANTIQUE_WHITE: number;
							public static readonly APPLE_GREEN: number;
							public static readonly APRICOT: number;
							public static readonly AQUA: number;
							public static readonly AQUAMARINE: number;
							public static readonly AQUA_BLUE: number;
							public static readonly AZURE: number;
							public static readonly BABY_BLUE: number;
							public static readonly BABY_PINK: number;
							public static readonly BEIGE: number;
							public static readonly BISQUE: number;
							public static readonly BLACK: number;
							public static readonly BLANCHED_ALMOND: number;
							public static readonly BLUE: number;
							public static readonly BLUE_VIOLET: number;
							public static readonly BRIGHT_GREEN: number;
							public static readonly BRONZE: number;
							public static readonly BROWN: number;
							public static readonly BURGUNDY: number;
							public static readonly BURLY_WOOD: number;
							public static readonly BURNT_ORANGE: number;
							public static readonly CADET_BLUE: number;
							public static readonly CAMEL: number;
							public static readonly CAMELLIA: number;
							public static readonly CANARY_YELLOW: number;
							public static readonly CARDINAL_RED: number;
							public static readonly CARMINE: number;
							public static readonly CELADON: number;
							public static readonly CERISE: number;
							public static readonly CERULEAN_BLUE: number;
							public static readonly CHAMPAGNE_YELLOW: number;
							public static readonly CHARTREUSE: number;
							public static readonly CHOCOLATE: number;
							public static readonly CHROME_YELLOW: number;
							public static readonly CLEMATIS: number;
							public static readonly COBALT_BLUE: number;
							public static readonly COBALT_GREEN: number;
							public static readonly COCONUT_BROWN: number;
							public static readonly COFFEE: number;
							public static readonly CORAL: number;
							public static readonly CORAL_PINK: number;
							public static readonly CORNFLOWER_BLUE: number;
							public static readonly CORN_SILK: number;
							public static readonly CREAM: number;
							public static readonly CRIMSON: number;
							public static readonly CYAN: number;
							public static readonly CYAN_BLUE: number;
							public static readonly DARK_BLUE: number;
							public static readonly DARK_CYAN: number;
							public static readonly DARK_GOLDENROD: number;
							public static readonly DARK_GRAY: number;
							public static readonly DARK_GREEN: number;
							public static readonly DARK_KHAKI: number;
							public static readonly DARK_MAGENTA: number;
							public static readonly DARK_MINERAL_BLUE: number;
							public static readonly DARK_OLIVE_GREEN: number;
							public static readonly DARK_ORANGE: number;
							public static readonly DARK_ORCHID: number;
							public static readonly DARK_POWDER_BLUE: number;
							public static readonly DARK_RED: number;
							public static readonly DARK_SALMON: number;
							public static readonly DARK_SEA_GREEN: number;
							public static readonly DARK_SLATE_BLUE: number;
							public static readonly DARK_SLATE_GRAY: number;
							public static readonly DARK_TURQUOISE: number;
							public static readonly DARK_VIOLET: number;
							public static readonly DEEP_PINK: number;
							public static readonly DEEP_SKY_BLUE: number;
							public static readonly DIM_GRAY: number;
							public static readonly DODGER_BLUE: number;
							public static readonly EMERALD: number;
							public static readonly FIRE_BRICK: number;
							public static readonly FLAMINGO: number;
							public static readonly FLORAL_WHITE: number;
							public static readonly FOLIAGE_GREEN: number;
							public static readonly FOREST_GREEN: number;
							public static readonly FRESH_LEAVES: number;
							public static readonly FUCHSIA: number;
							public static readonly GAINSBORO: number;
							public static readonly GHOST_WHITE: number;
							public static readonly GOLD: number;
							public static readonly GOLDEN: number;
							public static readonly GOLDENROD: number;
							public static readonly GRASS_GREEN: number;
							public static readonly GRAY: number;
							public static readonly GRAYISH_PURPLE: number;
							public static readonly GREEN: number;
							public static readonly GREEN_YELLOW: number;
							public static readonly HELIOTROPE: number;
							public static readonly HONEYDEW: number;
							public static readonly HONEY_ORANGE: number;
							public static readonly HORIZON_BLUE: number;
							public static readonly HOT_PINK: number;
							public static readonly INDIAN_RED: number;
							public static readonly INDIGO: number;
							public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.core.image.ColorTable.Web;
							public static readonly INTERNATIONAL_KLEIN_BLUE: number;
							public static readonly IRON_GRAY: number;
							public static readonly IVORY: number;
							public static readonly IVY_GREEN: number;
							public static readonly JASMINE: number;
							public static readonly KHAKI: number;
							public static readonly LAPIS_LAZULI: number;
							public static readonly LAVENDER: number;
							public static readonly LAVENDER_BLUE: number;
							public static readonly LAVENDER_BLUSH: number;
							public static readonly LAVENDER_MAGENTA: number;
							public static readonly LAVENDER_MIST: number;
							public static readonly LAWN_GREEN: number;
							public static readonly LEMON_CHIFFON: number;
							public static readonly LIGHT_BLUE: number;
							public static readonly LIGHT_CORAL: number;
							public static readonly LIGHT_CYAN: number;
							public static readonly LIGHT_GOLDENROD_YELLOW: number;
							public static readonly LIGHT_GRAY: number;
							public static readonly LIGHT_GREEN: number;
							public static readonly LIGHT_KHAKI: number;
							public static readonly LIGHT_LIME: number;
							public static readonly LIGHT_PINK: number;
							public static readonly LIGHT_SALMON: number;
							public static readonly LIGHT_SEA_GREEN: number;
							public static readonly LIGHT_SKY_BLUE: number;
							public static readonly LIGHT_SLATE_GRAY: number;
							public static readonly LIGHT_STEEL_BLUE: number;
							public static readonly LIGHT_VIOLET: number;
							public static readonly LIGHT_YELLOW: number;
							public static readonly LILAC: number;
							public static readonly LIME: number;
							public static readonly LIME_GREEN: number;
							public static readonly LINEN: number;
							public static readonly MAGENTA: number;
							public static readonly MAGENTA_ROSE: number;
							public static readonly MALACHITE: number;
							public static readonly MALLOW: number;
							public static readonly MARIGOLD: number;
							public static readonly MARINE_BLUE: number;
							public static readonly MAROON: number;
							public static readonly MAUVE: number;
							public static readonly MEDIUM_AQUAMARINE: number;
							public static readonly MEDIUM_BLUE: number;
							public static readonly MEDIUM_LAVENDER_MAGENTA: number;
							public static readonly MEDIUM_ORCHID: number;
							public static readonly MEDIUM_PURPLE: number;
							public static readonly MEDIUM_SEA_GREEN: number;
							public static readonly MEDIUM_SLATE_BLUE: number;
							public static readonly MEDIUM_SPRING_GREEN: number;
							public static readonly MEDIUM_TURQUOISE: number;
							public static readonly MEDIUM_VIOLET_RED: number;
							public static readonly MIDNIGHT_BLUE: number;
							public static readonly MIMOSA: number;
							public static readonly MINERAL_BLUE: number;
							public static readonly MINERAL_VIOLET: number;
							public static readonly MINT: number;
							public static readonly MINT_CREAM: number;
							public static readonly MISTY_ROSE: number;
							public static readonly MOCCASIN: number;
							public static readonly MOON_YELLOW: number;
							public static readonly MOSS_GREEN: number;
							public static readonly MUSTARD: number;
							public static readonly NAVAJO_WHITE: number;
							public static readonly NAVY: number;
							public static readonly NAVY_BLUE: number;
							public static readonly OCHER: number;
							public static readonly OLD_LACE: number;
							public static readonly OLD_ROSE: number;
							public static readonly OLIVE: number;
							public static readonly OLIVE_DRAB: number;
							public static readonly OPERA_MAUVE: number;
							public static readonly ORANGE: number;
							public static readonly ORANGE_RED: number;
							public static readonly ORCHID: number;
							public static readonly PAIL_LILAC: number;
							public static readonly PALE_BLUE: number;
							public static readonly PALE_DENIM: number;
							public static readonly PALE_GOLDENROD: number;
							public static readonly PALE_GREEN: number;
							public static readonly PALE_OCHRE: number;
							public static readonly PALE_TURQUOISE: number;
							public static readonly PALE_VIOLET_RED: number;
							public static readonly PANSY: number;
							public static readonly PAPAYA_WHIP: number;
							public static readonly PATRIARCH: number;
							public static readonly PEACH: number;
							public static readonly PEACH_PEARL: number;
							public static readonly PEACH_PUFF: number;
							public static readonly PEACOCK_BLUE: number;
							public static readonly PEACOCK_GREEN: number;
							public static readonly PEARL_PINK: number;
							public static readonly PERIWINKLE: number;
							public static readonly PERSIMMON: number;
							public static readonly PERU: number;
							public static readonly PINK: number;
							public static readonly PLUM: number;
							public static readonly POWDER_BLUE: number;
							public static readonly PRUSSIAN_BLUE: number;
							public static readonly PURPLE: number;
							public static readonly RED: number;
							public static readonly ROSE: number;
							public static readonly ROSE_PINK: number;
							public static readonly ROSY_BROWN: number;
							public static readonly ROYAL_BLUE: number;
							public static readonly RUBY: number;
							public static readonly SADDLE_BROWN: number;
							public static readonly SALMON: number;
							public static readonly SALMON_PINK: number;
							public static readonly SALVIA_BLUE: number;
							public static readonly SAND_BEIGE: number;
							public static readonly SAND_BROWN: number;
							public static readonly SAPPHIRE: number;
							public static readonly SAXE_BLUE: number;
							public static readonly SCARLET: number;
							public static readonly SEASHELL: number;
							public static readonly SEA_GREEN: number;
							public static readonly SEPIA: number;
							public static readonly SHELL_PINK: number;
							public static readonly SIENNA: number;
							public static readonly SILVER: number;
							public static readonly SKY_BLUE: number;
							public static readonly SLATE_BLUE: number;
							public static readonly SLATE_GRAY: number;
							public static readonly SNOW: number;
							public static readonly SPINEL_RED: number;
							public static readonly SPRING_GREEN: number;
							public static readonly STEEL_BLUE: number;
							public static readonly STRONG_BLUE: number;
							public static readonly STRONG_RED: number;
							public static readonly SUN_ORANGE: number;
							public static readonly TAN: number;
							public static readonly TANGERINE: number;
							public static readonly TANGERINE_YELLOW: number;
							public static readonly TEAL: number;
							public static readonly THISTLE: number;
							public static readonly TOMATO: number;
							public static readonly TROPICAL_ORANGE: number;
							public static readonly TURQUOISE: number;
							public static readonly TURQUOISE_BLUE: number;
							public static readonly TURQUOISE_GREEN: number;
							public static readonly ULTRAMARINE: number;
							public static readonly VERMILION: number;
							public static readonly VERY_LIGHT_MALACHITE_GREEN: number;
							public static readonly VIOLET: number;
							public static readonly VIRIDIAN: number;
							public static readonly WEDGWOOD_BLUE: number;
							public static readonly WHEAT: number;
							public static readonly WHITE: number;
							public static readonly WHITE_SMOKE: number;
							public static readonly WISTERIA: number;
							public static readonly YELLOW: number;
							public static readonly YELLOW_GREEN: number;
							protected constructor();
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace image {
					export class Colors {
						public constructor();
						public HSVToColor(alpha: number, hsv: number[]): number;
						public HSVToColor(hsv: number[]): number;
						public RGBToHSV(red: number, green: number, blue: number, hsv: number[]): void;
						public argb(alpha: number, red: number, green: number, blue: number): number;
						public colorToHSV(color: number, hsv: number[]): void;
						public equals(c1: number, c2: number): boolean;
						public equals(c1: number, c2: string): boolean;
						public equals(c1: string, c2: number): boolean;
						public equals(c1: string, c2: string): boolean;
						public luminance(color: number): number;
						public parseColor(colorString: string): number;
						public rgb(red: number, green: number, blue: number): number;
						public toString(color: number): string;
						public equals(...args: any[]): any;
						public toString(...args: any[]): any;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace image {
					export class ImageWrapper {
						public readonly bgrMat: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public readonly bitmap: __javaRoots.androidRoot.graphics.Bitmap;
						public readonly height: number;
						public readonly mat: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public readonly plane: __javaRoots.androidRoot.media.Image.Plane;
						public readonly recycled: boolean;
						public readonly size: __javaRoots.orgRoot.opencv.core.Size;
						public readonly width: number;
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, width: number, height: number);
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, bitmap: __javaRoots.androidRoot.graphics.Bitmap);
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, bitmap: __javaRoots.androidRoot.graphics.Bitmap, mat: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat);
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, mediaImage: __javaRoots.androidRoot.media.Image);
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, mat: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat);
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, mat: __javaRoots.orgRoot.opencv.core.Mat);
						public clone(): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public ensureNotRecycled(): void;
						public getBgrMat(): __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public getBitmap(): __javaRoots.androidRoot.graphics.Bitmap;
						public getHeight(): number;
						public getMat(): __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public getPlane(): __javaRoots.androidRoot.media.Image.Plane;
						public getSize(): __javaRoots.orgRoot.opencv.core.Size;
						public getWidth(): number;
						public isRecycled(): boolean;
						public static ofBitmap(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, bitmap: __javaRoots.androidRoot.graphics.Bitmap): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public static ofImage(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, image: __javaRoots.androidRoot.media.Image): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public static ofMat(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, mat: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public static ofMat(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, mat: __javaRoots.orgRoot.opencv.core.Mat): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public pixel(x: number, y: number): number;
						public recycle(): void;
						public static recycleAll(): void;
						public saveTo(path: string): boolean;
						public setOneShot(b: boolean): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public shoot(): void;
						public clone(...args: any[]): any;
						public setOneShot(...args: any[]): any;
					}
					export interface ImageWrapper extends __javaRoots.orgRoot.autojs.autojs.core.image.Shootable<__javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper> {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace image {
					export class RhinoColorFinder extends __javaRoots.orgRoot.autojs.autojs.core.image.ColorFinder {
						public static readonly DEFAULT_COLOR_THRESHOLD: number;
						public constructor(screenMetrics: __javaRoots.orgRoot.autojs.autojs.runtime.api.ScreenMetrics);
						public findColorRhino(img: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, color: any, options: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject): __javaRoots.orgRoot.opencv.core.Point;
						public findMultiColorsRhino(img: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, color: any, paths: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject, options: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject): __javaRoots.orgRoot.opencv.core.Point;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace image {
					export class Shootable<T> {
						public constructor(implementation: Shootable<T>);
						public constructor();
					}
					export interface Shootable<T> {
						isRecycled(): boolean;
						oneShot(): T;
						recycle(): void;
						setOneShot(param0: boolean): T;
						shoot(): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace image {
					export class TemplateMatching {
						public static readonly MATCHING_METHOD_DEFAULT: number;
						public static readonly MATCHING_METHOD_DEFAULT_WITH_TRANSPARENT_MASK: number;
						public static readonly MATCHING_METHOD_NONE: number;
						public static readonly MAX_LEVEL_AUTO: number;
						public constructor();
						public static fastTemplateMatching(img: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, template: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, options: __javaRoots.orgRoot.autojs.autojs.core.image.TemplateMatching.Options): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.core.image.TemplateMatching.Match>;
						public static matchTemplate(img: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, template: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, matchingMethod: number): __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public static matchTemplate(img: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, template: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, matchingMethod: number, transparentMast: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat): __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public static singleTemplateMatching(mat: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, mat2: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, options: __javaRoots.orgRoot.autojs.autojs.core.image.TemplateMatching.Options): __javaRoots.orgRoot.opencv.core.Point;
					}
					export namespace TemplateMatching {
						export class Match {
							public readonly point: __javaRoots.orgRoot.opencv.core.Point;
							public readonly similarity: number;
							public constructor(point: __javaRoots.orgRoot.opencv.core.Point, similarity: number);
							public toString(): string;
						}
						export class Options {
							public readonly limit: number;
							public readonly matchingMethod: number;
							public readonly maxLevel: number;
							public readonly strictThreshold: number;
							public readonly useTransparentMask: boolean;
							public readonly weakThreshold: number;
							public constructor(matchingMethod: number, weakThreshold: number, strictThreshold: number, maxLevel: number);
							public constructor(matchingMethod: number, weakThreshold: number, strictThreshold: number, maxLevel: number, useTransparentMask: boolean, limit: number);
							public getLimit(): number;
							public getMatchingMethod(): number;
							public getMaxLevel(): number;
							public getStrictThreshold(): number;
							public getUseTransparentMask(): boolean;
							public getWeakThreshold(): number;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace image {
					export namespace capture {
						export class ScreenCapturer {
							public static readonly ORIENTATION_AUTO: number;
							public static readonly ORIENTATION_LANDSCAPE: number;
							public static readonly ORIENTATION_NONE: number;
							public static readonly ORIENTATION_PORTRAIT: number;
							public readonly options: __javaRoots.orgRoot.autojs.autojs.core.image.capture.ScreenCapturer.Options;
							public readonly released: boolean;
							public constructor(context: __javaRoots.androidRoot.content.Context, data: __javaRoots.androidRoot.content.Intent, options: __javaRoots.orgRoot.autojs.autojs.core.image.capture.ScreenCapturer.Options, handler: __javaRoots.androidRoot.os.Handler);
							public capture(): __javaRoots.androidRoot.media.Image;
							public getOptions(): __javaRoots.orgRoot.autojs.autojs.core.image.capture.ScreenCapturer.Options;
							public isReleased(): boolean;
							public onConfigurationChanged(configuration: __javaRoots.androidRoot.content.res.Configuration): void;
							public release(): void;
							public setImageCaptureCallback(onScreenCaptureAvailableListener: __javaRoots.orgRoot.autojs.autojs.core.image.capture.ScreenCapturer.OnScreenCaptureAvailableListener): void;
							public setImageListenerAsync(imageReader: __javaRoots.androidRoot.media.ImageReader): void;
							public setImageListenerSync(imageReader: __javaRoots.androidRoot.media.ImageReader): void;
							public setOnMediaProjectionStopListener(listener: __javaRoots.javaRoot.lang.Runnable): void;
						}
						export namespace ScreenCapturer {
							export class OnScreenCaptureAvailableListener {
								public constructor(implementation: OnScreenCaptureAvailableListener);
								public constructor();
							}
							export interface OnScreenCaptureAvailableListener {
								onCaptureAvailable(param0: __javaRoots.androidRoot.media.Image): void;
							}
							export class Options extends __javaRoots.javaRoot.lang.Record {
								public readonly async: boolean;
								public constructor(width: number, height: number, orientation: number, density: number, isAsync: boolean);
								public density(): number;
								public equals(o: any): boolean;
								public hashCode(): number;
								public height(): number;
								public isAsync(): boolean;
								public orientation(): number;
								public toString(): string;
								public width(): number;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace inputevent {
					export class InputEventCodes {
						public static readonly ABS_BRAKE: number;
						public static readonly ABS_CNT: number;
						public static readonly ABS_DISTANCE: number;
						public static readonly ABS_GAS: number;
						public static readonly ABS_HAT0X: number;
						public static readonly ABS_HAT0Y: number;
						public static readonly ABS_HAT1X: number;
						public static readonly ABS_HAT1Y: number;
						public static readonly ABS_HAT2X: number;
						public static readonly ABS_HAT2Y: number;
						public static readonly ABS_HAT3X: number;
						public static readonly ABS_HAT3Y: number;
						public static readonly ABS_MAX: number;
						public static readonly ABS_MISC: number;
						public static readonly ABS_MT_BLOB_ID: number;
						public static readonly ABS_MT_DISTANCE: number;
						public static readonly ABS_MT_ORIENTATION: number;
						public static readonly ABS_MT_POSITION_X: number;
						public static readonly ABS_MT_POSITION_Y: number;
						public static readonly ABS_MT_PRESSURE: number;
						public static readonly ABS_MT_SLOT: number;
						public static readonly ABS_MT_TOOL_TYPE: number;
						public static readonly ABS_MT_TOOL_X: number;
						public static readonly ABS_MT_TOOL_Y: number;
						public static readonly ABS_MT_TOUCH_MAJOR: number;
						public static readonly ABS_MT_TOUCH_MINOR: number;
						public static readonly ABS_MT_TRACKING_ID: number;
						public static readonly ABS_MT_WIDTH_MAJOR: number;
						public static readonly ABS_MT_WIDTH_MINOR: number;
						public static readonly ABS_PRESSURE: number;
						public static readonly ABS_RUDDER: number;
						public static readonly ABS_RX: number;
						public static readonly ABS_RY: number;
						public static readonly ABS_RZ: number;
						public static readonly ABS_THROTTLE: number;
						public static readonly ABS_TILT_X: number;
						public static readonly ABS_TILT_Y: number;
						public static readonly ABS_TOOL_WIDTH: number;
						public static readonly ABS_VOLUME: number;
						public static readonly ABS_WHEEL: number;
						public static readonly ABS_X: number;
						public static readonly ABS_Y: number;
						public static readonly ABS_Z: number;
						public static readonly BTN_0: number;
						public static readonly BTN_1: number;
						public static readonly BTN_2: number;
						public static readonly BTN_3: number;
						public static readonly BTN_4: number;
						public static readonly BTN_5: number;
						public static readonly BTN_6: number;
						public static readonly BTN_7: number;
						public static readonly BTN_8: number;
						public static readonly BTN_9: number;
						public static readonly BTN_A: number;
						public static readonly BTN_B: number;
						public static readonly BTN_BACK: number;
						public static readonly BTN_BASE: number;
						public static readonly BTN_BASE2: number;
						public static readonly BTN_BASE3: number;
						public static readonly BTN_BASE4: number;
						public static readonly BTN_BASE5: number;
						public static readonly BTN_BASE6: number;
						public static readonly BTN_C: number;
						public static readonly BTN_DEAD: number;
						public static readonly BTN_DIGI: number;
						public static readonly BTN_DPAD_DOWN: number;
						public static readonly BTN_DPAD_LEFT: number;
						public static readonly BTN_DPAD_RIGHT: number;
						public static readonly BTN_DPAD_UP: number;
						public static readonly BTN_EAST: number;
						public static readonly BTN_EXTRA: number;
						public static readonly BTN_FORWARD: number;
						public static readonly BTN_GAMEPAD: number;
						public static readonly BTN_GEAR_DOWN: number;
						public static readonly BTN_GEAR_UP: number;
						public static readonly BTN_JOYSTICK: number;
						public static readonly BTN_LEFT: number;
						public static readonly BTN_MIDDLE: number;
						public static readonly BTN_MISC: number;
						public static readonly BTN_MODE: number;
						public static readonly BTN_MOUSE: number;
						public static readonly BTN_NORTH: number;
						public static readonly BTN_PINKIE: number;
						public static readonly BTN_RIGHT: number;
						public static readonly BTN_SELECT: number;
						public static readonly BTN_SIDE: number;
						public static readonly BTN_SOUTH: number;
						public static readonly BTN_START: number;
						public static readonly BTN_STYLUS: number;
						public static readonly BTN_STYLUS2: number;
						public static readonly BTN_TASK: number;
						public static readonly BTN_THUMB: number;
						public static readonly BTN_THUMB2: number;
						public static readonly BTN_THUMBL: number;
						public static readonly BTN_THUMBR: number;
						public static readonly BTN_TL: number;
						public static readonly BTN_TL2: number;
						public static readonly BTN_TOOL_AIRBRUSH: number;
						public static readonly BTN_TOOL_BRUSH: number;
						public static readonly BTN_TOOL_DOUBLETAP: number;
						public static readonly BTN_TOOL_FINGER: number;
						public static readonly BTN_TOOL_LENS: number;
						public static readonly BTN_TOOL_MOUSE: number;
						public static readonly BTN_TOOL_PEN: number;
						public static readonly BTN_TOOL_PENCIL: number;
						public static readonly BTN_TOOL_QUADTAP: number;
						public static readonly BTN_TOOL_QUINTTAP: number;
						public static readonly BTN_TOOL_RUBBER: number;
						public static readonly BTN_TOOL_TRIPLETAP: number;
						public static readonly BTN_TOP: number;
						public static readonly BTN_TOP2: number;
						public static readonly BTN_TOUCH: number;
						public static readonly BTN_TR: number;
						public static readonly BTN_TR2: number;
						public static readonly BTN_TRIGGER: number;
						public static readonly BTN_TRIGGER_HAPPY: number;
						public static readonly BTN_TRIGGER_HAPPY1: number;
						public static readonly BTN_TRIGGER_HAPPY10: number;
						public static readonly BTN_TRIGGER_HAPPY11: number;
						public static readonly BTN_TRIGGER_HAPPY12: number;
						public static readonly BTN_TRIGGER_HAPPY13: number;
						public static readonly BTN_TRIGGER_HAPPY14: number;
						public static readonly BTN_TRIGGER_HAPPY15: number;
						public static readonly BTN_TRIGGER_HAPPY16: number;
						public static readonly BTN_TRIGGER_HAPPY17: number;
						public static readonly BTN_TRIGGER_HAPPY18: number;
						public static readonly BTN_TRIGGER_HAPPY19: number;
						public static readonly BTN_TRIGGER_HAPPY2: number;
						public static readonly BTN_TRIGGER_HAPPY20: number;
						public static readonly BTN_TRIGGER_HAPPY21: number;
						public static readonly BTN_TRIGGER_HAPPY22: number;
						public static readonly BTN_TRIGGER_HAPPY23: number;
						public static readonly BTN_TRIGGER_HAPPY24: number;
						public static readonly BTN_TRIGGER_HAPPY25: number;
						public static readonly BTN_TRIGGER_HAPPY26: number;
						public static readonly BTN_TRIGGER_HAPPY27: number;
						public static readonly BTN_TRIGGER_HAPPY28: number;
						public static readonly BTN_TRIGGER_HAPPY29: number;
						public static readonly BTN_TRIGGER_HAPPY3: number;
						public static readonly BTN_TRIGGER_HAPPY30: number;
						public static readonly BTN_TRIGGER_HAPPY31: number;
						public static readonly BTN_TRIGGER_HAPPY32: number;
						public static readonly BTN_TRIGGER_HAPPY33: number;
						public static readonly BTN_TRIGGER_HAPPY34: number;
						public static readonly BTN_TRIGGER_HAPPY35: number;
						public static readonly BTN_TRIGGER_HAPPY36: number;
						public static readonly BTN_TRIGGER_HAPPY37: number;
						public static readonly BTN_TRIGGER_HAPPY38: number;
						public static readonly BTN_TRIGGER_HAPPY39: number;
						public static readonly BTN_TRIGGER_HAPPY4: number;
						public static readonly BTN_TRIGGER_HAPPY40: number;
						public static readonly BTN_TRIGGER_HAPPY5: number;
						public static readonly BTN_TRIGGER_HAPPY6: number;
						public static readonly BTN_TRIGGER_HAPPY7: number;
						public static readonly BTN_TRIGGER_HAPPY8: number;
						public static readonly BTN_TRIGGER_HAPPY9: number;
						public static readonly BTN_WEST: number;
						public static readonly BTN_WHEEL: number;
						public static readonly BTN_X: number;
						public static readonly BTN_Y: number;
						public static readonly BTN_Z: number;
						public static readonly DOWN: number;
						public static readonly EV_ABS: number;
						public static readonly EV_CNT: number;
						public static readonly EV_FF: number;
						public static readonly EV_FF_STATUS: number;
						public static readonly EV_KEY: number;
						public static readonly EV_LED: number;
						public static readonly EV_MAX: number;
						public static readonly EV_MSC: number;
						public static readonly EV_PWR: number;
						public static readonly EV_REL: number;
						public static readonly EV_REP: number;
						public static readonly EV_SND: number;
						public static readonly EV_SW: number;
						public static readonly EV_SYN: number;
						public static readonly INPUT_PROP_ACCELEROMETER: number;
						public static readonly INPUT_PROP_BUTTONPAD: number;
						public static readonly INPUT_PROP_CNT: number;
						public static readonly INPUT_PROP_DIRECT: number;
						public static readonly INPUT_PROP_MAX: number;
						public static readonly INPUT_PROP_POINTER: number;
						public static readonly INPUT_PROP_POINTING_STICK: number;
						public static readonly INPUT_PROP_SEMI_MT: number;
						public static readonly INPUT_PROP_TOPBUTTONPAD: number;
						public static readonly KEY_0: number;
						public static readonly KEY_1: number;
						public static readonly KEY_102ND: number;
						public static readonly KEY_10CHANNELSDOWN: number;
						public static readonly KEY_10CHANNELSUP: number;
						public static readonly KEY_2: number;
						public static readonly KEY_3: number;
						public static readonly KEY_3D_MODE: number;
						public static readonly KEY_4: number;
						public static readonly KEY_5: number;
						public static readonly KEY_6: number;
						public static readonly KEY_7: number;
						public static readonly KEY_8: number;
						public static readonly KEY_9: number;
						public static readonly KEY_A: number;
						public static readonly KEY_AB: number;
						public static readonly KEY_ADDRESSBOOK: number;
						public static readonly KEY_AGAIN: number;
						public static readonly KEY_ALS_TOGGLE: number;
						public static readonly KEY_ALTERASE: number;
						public static readonly KEY_ANGLE: number;
						public static readonly KEY_APOSTROPHE: number;
						public static readonly KEY_APPSELECT: number;
						public static readonly KEY_ARCHIVE: number;
						public static readonly KEY_ASSISTANT: number;
						public static readonly KEY_ATTENDANT_OFF: number;
						public static readonly KEY_ATTENDANT_ON: number;
						public static readonly KEY_ATTENDANT_TOGGLE: number;
						public static readonly KEY_AUDIO: number;
						public static readonly KEY_AUDIO_DESC: number;
						public static readonly KEY_AUX: number;
						public static readonly KEY_B: number;
						public static readonly KEY_BACK: number;
						public static readonly KEY_BACKSLASH: number;
						public static readonly KEY_BACKSPACE: number;
						public static readonly KEY_BASSBOOST: number;
						public static readonly KEY_BATTERY: number;
						public static readonly KEY_BLUE: number;
						public static readonly KEY_BLUETOOTH: number;
						public static readonly KEY_BOOKMARKS: number;
						public static readonly KEY_BREAK: number;
						public static readonly KEY_BRIGHTNESSDOWN: number;
						public static readonly KEY_BRIGHTNESSUP: number;
						public static readonly KEY_BRIGHTNESS_AUTO: number;
						public static readonly KEY_BRIGHTNESS_CYCLE: number;
						public static readonly KEY_BRIGHTNESS_MAX: number;
						public static readonly KEY_BRIGHTNESS_MIN: number;
						public static readonly KEY_BRIGHTNESS_TOGGLE: number;
						public static readonly KEY_BRIGHTNESS_ZERO: number;
						public static readonly KEY_BRL_DOT1: number;
						public static readonly KEY_BRL_DOT10: number;
						public static readonly KEY_BRL_DOT2: number;
						public static readonly KEY_BRL_DOT3: number;
						public static readonly KEY_BRL_DOT4: number;
						public static readonly KEY_BRL_DOT5: number;
						public static readonly KEY_BRL_DOT6: number;
						public static readonly KEY_BRL_DOT7: number;
						public static readonly KEY_BRL_DOT8: number;
						public static readonly KEY_BRL_DOT9: number;
						public static readonly KEY_BUTTONCONFIG: number;
						public static readonly KEY_C: number;
						public static readonly KEY_CALC: number;
						public static readonly KEY_CALENDAR: number;
						public static readonly KEY_CAMERA: number;
						public static readonly KEY_CAMERA_DOWN: number;
						public static readonly KEY_CAMERA_FOCUS: number;
						public static readonly KEY_CAMERA_LEFT: number;
						public static readonly KEY_CAMERA_RIGHT: number;
						public static readonly KEY_CAMERA_UP: number;
						public static readonly KEY_CAMERA_ZOOMIN: number;
						public static readonly KEY_CAMERA_ZOOMOUT: number;
						public static readonly KEY_CANCEL: number;
						public static readonly KEY_CAPSLOCK: number;
						public static readonly KEY_CD: number;
						public static readonly KEY_CHANNEL: number;
						public static readonly KEY_CHANNELDOWN: number;
						public static readonly KEY_CHANNELUP: number;
						public static readonly KEY_CHAT: number;
						public static readonly KEY_CLEAR: number;
						public static readonly KEY_CLOSE: number;
						public static readonly KEY_CLOSECD: number;
						public static readonly KEY_CNT: number;
						public static readonly KEY_COFFEE: number;
						public static readonly KEY_COMMA: number;
						public static readonly KEY_COMPOSE: number;
						public static readonly KEY_COMPUTER: number;
						public static readonly KEY_CONFIG: number;
						public static readonly KEY_CONNECT: number;
						public static readonly KEY_CONTEXT_MENU: number;
						public static readonly KEY_CONTROLPANEL: number;
						public static readonly KEY_COPY: number;
						public static readonly KEY_CUT: number;
						public static readonly KEY_CYCLEWINDOWS: number;
						public static readonly KEY_D: number;
						public static readonly KEY_DASHBOARD: number;
						public static readonly KEY_DATA: number;
						public static readonly KEY_DATABASE: number;
						public static readonly KEY_DELETE: number;
						public static readonly KEY_DELETEFILE: number;
						public static readonly KEY_DEL_EOL: number;
						public static readonly KEY_DEL_EOS: number;
						public static readonly KEY_DEL_LINE: number;
						public static readonly KEY_DIGITS: number;
						public static readonly KEY_DIRECTION: number;
						public static readonly KEY_DIRECTORY: number;
						public static readonly KEY_DISPLAYTOGGLE: number;
						public static readonly KEY_DISPLAY_OFF: number;
						public static readonly KEY_DOCUMENTS: number;
						public static readonly KEY_DOLLAR: number;
						public static readonly KEY_DOT: number;
						public static readonly KEY_DOWN: number;
						public static readonly KEY_DVD: number;
						public static readonly KEY_E: number;
						public static readonly KEY_EDIT: number;
						public static readonly KEY_EDITOR: number;
						public static readonly KEY_EJECTCD: number;
						public static readonly KEY_EJECTCLOSECD: number;
						public static readonly KEY_EMAIL: number;
						public static readonly KEY_END: number;
						public static readonly KEY_ENTER: number;
						public static readonly KEY_EPG: number;
						public static readonly KEY_EQUAL: number;
						public static readonly KEY_ESC: number;
						public static readonly KEY_EURO: number;
						public static readonly KEY_EXIT: number;
						public static readonly KEY_F: number;
						public static readonly KEY_F1: number;
						public static readonly KEY_F10: number;
						public static readonly KEY_F11: number;
						public static readonly KEY_F12: number;
						public static readonly KEY_F13: number;
						public static readonly KEY_F14: number;
						public static readonly KEY_F15: number;
						public static readonly KEY_F16: number;
						public static readonly KEY_F17: number;
						public static readonly KEY_F18: number;
						public static readonly KEY_F19: number;
						public static readonly KEY_F2: number;
						public static readonly KEY_F20: number;
						public static readonly KEY_F21: number;
						public static readonly KEY_F22: number;
						public static readonly KEY_F23: number;
						public static readonly KEY_F24: number;
						public static readonly KEY_F3: number;
						public static readonly KEY_F4: number;
						public static readonly KEY_F5: number;
						public static readonly KEY_F6: number;
						public static readonly KEY_F7: number;
						public static readonly KEY_F8: number;
						public static readonly KEY_F9: number;
						public static readonly KEY_FASTFORWARD: number;
						public static readonly KEY_FASTREVERSE: number;
						public static readonly KEY_FAVORITES: number;
						public static readonly KEY_FILE: number;
						public static readonly KEY_FINANCE: number;
						public static readonly KEY_FIND: number;
						public static readonly KEY_FIRST: number;
						public static readonly KEY_FN: number;
						public static readonly KEY_FN_1: number;
						public static readonly KEY_FN_2: number;
						public static readonly KEY_FN_B: number;
						public static readonly KEY_FN_D: number;
						public static readonly KEY_FN_E: number;
						public static readonly KEY_FN_ESC: number;
						public static readonly KEY_FN_F: number;
						public static readonly KEY_FN_F1: number;
						public static readonly KEY_FN_F10: number;
						public static readonly KEY_FN_F11: number;
						public static readonly KEY_FN_F12: number;
						public static readonly KEY_FN_F2: number;
						public static readonly KEY_FN_F3: number;
						public static readonly KEY_FN_F4: number;
						public static readonly KEY_FN_F5: number;
						public static readonly KEY_FN_F6: number;
						public static readonly KEY_FN_F7: number;
						public static readonly KEY_FN_F8: number;
						public static readonly KEY_FN_F9: number;
						public static readonly KEY_FN_S: number;
						public static readonly KEY_FORWARD: number;
						public static readonly KEY_FORWARDMAIL: number;
						public static readonly KEY_FRAMEBACK: number;
						public static readonly KEY_FRAMEFORWARD: number;
						public static readonly KEY_FRONT: number;
						public static readonly KEY_G: number;
						public static readonly KEY_GAMES: number;
						public static readonly KEY_GOTO: number;
						public static readonly KEY_GRAPHICSEDITOR: number;
						public static readonly KEY_GRAVE: number;
						public static readonly KEY_GREEN: number;
						public static readonly KEY_H: number;
						public static readonly KEY_HANGEUL: number;
						public static readonly KEY_HANGUEL: number;
						public static readonly KEY_HANJA: number;
						public static readonly KEY_HELP: number;
						public static readonly KEY_HENKAN: number;
						public static readonly KEY_HIRAGANA: number;
						public static readonly KEY_HOME: number;
						public static readonly KEY_HOMEPAGE: number;
						public static readonly KEY_HP: number;
						public static readonly KEY_I: number;
						public static readonly KEY_IMAGES: number;
						public static readonly KEY_INFO: number;
						public static readonly KEY_INSERT: number;
						public static readonly KEY_INS_LINE: number;
						public static readonly KEY_ISO: number;
						public static readonly KEY_J: number;
						public static readonly KEY_JOURNAL: number;
						public static readonly KEY_K: number;
						public static readonly KEY_KATAKANA: number;
						public static readonly KEY_KATAKANAHIRAGANA: number;
						public static readonly KEY_KBDILLUMDOWN: number;
						public static readonly KEY_KBDILLUMTOGGLE: number;
						public static readonly KEY_KBDILLUMUP: number;
						public static readonly KEY_KBDINPUTASSIST_ACCEPT: number;
						public static readonly KEY_KBDINPUTASSIST_CANCEL: number;
						public static readonly KEY_KBDINPUTASSIST_NEXT: number;
						public static readonly KEY_KBDINPUTASSIST_NEXTGROUP: number;
						public static readonly KEY_KBDINPUTASSIST_PREV: number;
						public static readonly KEY_KBDINPUTASSIST_PREVGROUP: number;
						public static readonly KEY_KEYBOARD: number;
						public static readonly KEY_KP0: number;
						public static readonly KEY_KP1: number;
						public static readonly KEY_KP2: number;
						public static readonly KEY_KP3: number;
						public static readonly KEY_KP4: number;
						public static readonly KEY_KP5: number;
						public static readonly KEY_KP6: number;
						public static readonly KEY_KP7: number;
						public static readonly KEY_KP8: number;
						public static readonly KEY_KP9: number;
						public static readonly KEY_KPASTERISK: number;
						public static readonly KEY_KPCOMMA: number;
						public static readonly KEY_KPDOT: number;
						public static readonly KEY_KPENTER: number;
						public static readonly KEY_KPEQUAL: number;
						public static readonly KEY_KPJPCOMMA: number;
						public static readonly KEY_KPLEFTPAREN: number;
						public static readonly KEY_KPMINUS: number;
						public static readonly KEY_KPPLUS: number;
						public static readonly KEY_KPPLUSMINUS: number;
						public static readonly KEY_KPRIGHTPAREN: number;
						public static readonly KEY_KPSLASH: number;
						public static readonly KEY_L: number;
						public static readonly KEY_LANGUAGE: number;
						public static readonly KEY_LAST: number;
						public static readonly KEY_LEFT: number;
						public static readonly KEY_LEFTALT: number;
						public static readonly KEY_LEFTBRACE: number;
						public static readonly KEY_LEFTCTRL: number;
						public static readonly KEY_LEFTMETA: number;
						public static readonly KEY_LEFTSHIFT: number;
						public static readonly KEY_LEFT_DOWN: number;
						public static readonly KEY_LEFT_UP: number;
						public static readonly KEY_LIGHTS_TOGGLE: number;
						public static readonly KEY_LINEFEED: number;
						public static readonly KEY_LIST: number;
						public static readonly KEY_LOGOFF: number;
						public static readonly KEY_M: number;
						public static readonly KEY_MACRO: number;
						public static readonly KEY_MAIL: number;
						public static readonly KEY_MAX: number;
						public static readonly KEY_MEDIA: number;
						public static readonly KEY_MEDIA_REPEAT: number;
						public static readonly KEY_MEDIA_TOP_MENU: number;
						public static readonly KEY_MEMO: number;
						public static readonly KEY_MENU: number;
						public static readonly KEY_MESSENGER: number;
						public static readonly KEY_MHP: number;
						public static readonly KEY_MICMUTE: number;
						public static readonly KEY_MINUS: number;
						public static readonly KEY_MIN_INTERESTING: number;
						public static readonly KEY_MODE: number;
						public static readonly KEY_MOVE: number;
						public static readonly KEY_MP3: number;
						public static readonly KEY_MSDOS: number;
						public static readonly KEY_MUHENKAN: number;
						public static readonly KEY_MUTE: number;
						public static readonly KEY_N: number;
						public static readonly KEY_NEW: number;
						public static readonly KEY_NEWS: number;
						public static readonly KEY_NEXT: number;
						public static readonly KEY_NEXTSONG: number;
						public static readonly KEY_NEXT_FAVORITE: number;
						public static readonly KEY_NUMERIC_0: number;
						public static readonly KEY_NUMERIC_1: number;
						public static readonly KEY_NUMERIC_11: number;
						public static readonly KEY_NUMERIC_12: number;
						public static readonly KEY_NUMERIC_2: number;
						public static readonly KEY_NUMERIC_3: number;
						public static readonly KEY_NUMERIC_4: number;
						public static readonly KEY_NUMERIC_5: number;
						public static readonly KEY_NUMERIC_6: number;
						public static readonly KEY_NUMERIC_7: number;
						public static readonly KEY_NUMERIC_8: number;
						public static readonly KEY_NUMERIC_9: number;
						public static readonly KEY_NUMERIC_A: number;
						public static readonly KEY_NUMERIC_B: number;
						public static readonly KEY_NUMERIC_C: number;
						public static readonly KEY_NUMERIC_D: number;
						public static readonly KEY_NUMERIC_POUND: number;
						public static readonly KEY_NUMERIC_STAR: number;
						public static readonly KEY_NUMLOCK: number;
						public static readonly KEY_O: number;
						public static readonly KEY_OK: number;
						public static readonly KEY_ONSCREEN_KEYBOARD: number;
						public static readonly KEY_OPEN: number;
						public static readonly KEY_OPTION: number;
						public static readonly KEY_P: number;
						public static readonly KEY_PAGEDOWN: number;
						public static readonly KEY_PAGEUP: number;
						public static readonly KEY_PASTE: number;
						public static readonly KEY_PAUSE: number;
						public static readonly KEY_PAUSECD: number;
						public static readonly KEY_PAUSE_RECORD: number;
						public static readonly KEY_PC: number;
						public static readonly KEY_PHONE: number;
						public static readonly KEY_PLAY: number;
						public static readonly KEY_PLAYCD: number;
						public static readonly KEY_PLAYER: number;
						public static readonly KEY_PLAYPAUSE: number;
						public static readonly KEY_POWER: number;
						public static readonly KEY_POWER2: number;
						public static readonly KEY_PRESENTATION: number;
						public static readonly KEY_PREVIOUS: number;
						public static readonly KEY_PREVIOUSSONG: number;
						public static readonly KEY_PRINT: number;
						public static readonly KEY_PROG1: number;
						public static readonly KEY_PROG2: number;
						public static readonly KEY_PROG3: number;
						public static readonly KEY_PROG4: number;
						public static readonly KEY_PROGRAM: number;
						public static readonly KEY_PROPS: number;
						public static readonly KEY_PVR: number;
						public static readonly KEY_Q: number;
						public static readonly KEY_QUESTION: number;
						public static readonly KEY_R: number;
						public static readonly KEY_RADIO: number;
						public static readonly KEY_RECORD: number;
						public static readonly KEY_RED: number;
						public static readonly KEY_REDO: number;
						public static readonly KEY_REFRESH: number;
						public static readonly KEY_REPLY: number;
						public static readonly KEY_RESERVED: number;
						public static readonly KEY_RESTART: number;
						public static readonly KEY_REWIND: number;
						public static readonly KEY_RFKILL: number;
						public static readonly KEY_RIGHT: number;
						public static readonly KEY_RIGHTALT: number;
						public static readonly KEY_RIGHTBRACE: number;
						public static readonly KEY_RIGHTCTRL: number;
						public static readonly KEY_RIGHTMETA: number;
						public static readonly KEY_RIGHTSHIFT: number;
						public static readonly KEY_RIGHT_DOWN: number;
						public static readonly KEY_RIGHT_UP: number;
						public static readonly KEY_RO: number;
						public static readonly KEY_ROOT_MENU: number;
						public static readonly KEY_ROTATE_DISPLAY: number;
						public static readonly KEY_S: number;
						public static readonly KEY_SAT: number;
						public static readonly KEY_SAT2: number;
						public static readonly KEY_SAVE: number;
						public static readonly KEY_SCALE: number;
						public static readonly KEY_SCREEN: number;
						public static readonly KEY_SCREENLOCK: number;
						public static readonly KEY_SCREENSAVER: number;
						public static readonly KEY_SCROLLDOWN: number;
						public static readonly KEY_SCROLLLOCK: number;
						public static readonly KEY_SCROLLUP: number;
						public static readonly KEY_SEARCH: number;
						public static readonly KEY_SELECT: number;
						public static readonly KEY_SEMICOLON: number;
						public static readonly KEY_SEND: number;
						public static readonly KEY_SENDFILE: number;
						public static readonly KEY_SETUP: number;
						public static readonly KEY_SHOP: number;
						public static readonly KEY_SHUFFLE: number;
						public static readonly KEY_SLASH: number;
						public static readonly KEY_SLEEP: number;
						public static readonly KEY_SLOW: number;
						public static readonly KEY_SLOWREVERSE: number;
						public static readonly KEY_SOUND: number;
						public static readonly KEY_SPACE: number;
						public static readonly KEY_SPELLCHECK: number;
						public static readonly KEY_SPORT: number;
						public static readonly KEY_SPREADSHEET: number;
						public static readonly KEY_STOP: number;
						public static readonly KEY_STOPCD: number;
						public static readonly KEY_STOP_RECORD: number;
						public static readonly KEY_SUBTITLE: number;
						public static readonly KEY_SUSPEND: number;
						public static readonly KEY_SWITCHVIDEOMODE: number;
						public static readonly KEY_SYSRQ: number;
						public static readonly KEY_T: number;
						public static readonly KEY_TAB: number;
						public static readonly KEY_TAPE: number;
						public static readonly KEY_TASKMANAGER: number;
						public static readonly KEY_TEEN: number;
						public static readonly KEY_TEXT: number;
						public static readonly KEY_TIME: number;
						public static readonly KEY_TITLE: number;
						public static readonly KEY_TOUCHPAD_OFF: number;
						public static readonly KEY_TOUCHPAD_ON: number;
						public static readonly KEY_TOUCHPAD_TOGGLE: number;
						public static readonly KEY_TUNER: number;
						public static readonly KEY_TV: number;
						public static readonly KEY_TV2: number;
						public static readonly KEY_TWEN: number;
						public static readonly KEY_U: number;
						public static readonly KEY_UNDO: number;
						public static readonly KEY_UNKNOWN: number;
						public static readonly KEY_UNMUTE: number;
						public static readonly KEY_UP: number;
						public static readonly KEY_UWB: number;
						public static readonly KEY_V: number;
						public static readonly KEY_VCR: number;
						public static readonly KEY_VCR2: number;
						public static readonly KEY_VENDOR: number;
						public static readonly KEY_VIDEO: number;
						public static readonly KEY_VIDEOPHONE: number;
						public static readonly KEY_VIDEO_NEXT: number;
						public static readonly KEY_VIDEO_PREV: number;
						public static readonly KEY_VOD: number;
						public static readonly KEY_VOICECOMMAND: number;
						public static readonly KEY_VOICEMAIL: number;
						public static readonly KEY_VOLUMEDOWN: number;
						public static readonly KEY_VOLUMEUP: number;
						public static readonly KEY_W: number;
						public static readonly KEY_WAKEUP: number;
						public static readonly KEY_WIMAX: number;
						public static readonly KEY_WLAN: number;
						public static readonly KEY_WORDPROCESSOR: number;
						public static readonly KEY_WPS_BUTTON: number;
						public static readonly KEY_WWAN: number;
						public static readonly KEY_WWW: number;
						public static readonly KEY_X: number;
						public static readonly KEY_XFER: number;
						public static readonly KEY_Y: number;
						public static readonly KEY_YELLOW: number;
						public static readonly KEY_YEN: number;
						public static readonly KEY_Z: number;
						public static readonly KEY_ZENKAKUHANKAKU: number;
						public static readonly KEY_ZOOM: number;
						public static readonly KEY_ZOOMIN: number;
						public static readonly KEY_ZOOMOUT: number;
						public static readonly KEY_ZOOMRESET: number;
						public static readonly LED_CAPSL: number;
						public static readonly LED_CHARGING: number;
						public static readonly LED_CNT: number;
						public static readonly LED_COMPOSE: number;
						public static readonly LED_KANA: number;
						public static readonly LED_MAIL: number;
						public static readonly LED_MAX: number;
						public static readonly LED_MISC: number;
						public static readonly LED_MUTE: number;
						public static readonly LED_NUML: number;
						public static readonly LED_SCROLLL: number;
						public static readonly LED_SLEEP: number;
						public static readonly LED_SUSPEND: number;
						public static readonly MSC_CNT: number;
						public static readonly MSC_GESTURE: number;
						public static readonly MSC_MAX: number;
						public static readonly MSC_PULSELED: number;
						public static readonly MSC_RAW: number;
						public static readonly MSC_SCAN: number;
						public static readonly MSC_SERIAL: number;
						public static readonly MSC_TIMESTAMP: number;
						public static readonly REL_CNT: number;
						public static readonly REL_DIAL: number;
						public static readonly REL_HWHEEL: number;
						public static readonly REL_MAX: number;
						public static readonly REL_MISC: number;
						public static readonly REL_RX: number;
						public static readonly REL_RY: number;
						public static readonly REL_RZ: number;
						public static readonly REL_WHEEL: number;
						public static readonly REL_X: number;
						public static readonly REL_Y: number;
						public static readonly REL_Z: number;
						public static readonly REP_CNT: number;
						public static readonly REP_DELAY: number;
						public static readonly REP_MAX: number;
						public static readonly REP_PERIOD: number;
						public static readonly SND_BELL: number;
						public static readonly SND_CLICK: number;
						public static readonly SND_CNT: number;
						public static readonly SND_MAX: number;
						public static readonly SND_TONE: number;
						public static readonly SW_CAMERA_LENS_COVER: number;
						public static readonly SW_CNT: number;
						public static readonly SW_DOCK: number;
						public static readonly SW_FRONT_PROXIMITY: number;
						public static readonly SW_HEADPHONE_INSERT: number;
						public static readonly SW_JACK_PHYSICAL_INSERT: number;
						public static readonly SW_KEYPAD_SLIDE: number;
						public static readonly SW_LID: number;
						public static readonly SW_LINEIN_INSERT: number;
						public static readonly SW_LINEOUT_INSERT: number;
						public static readonly SW_MAX: number;
						public static readonly SW_MICROPHONE_INSERT: number;
						public static readonly SW_MUTE_DEVICE: number;
						public static readonly SW_PEN_INSERTED: number;
						public static readonly SW_RADIO: number;
						public static readonly SW_RFKILL_ALL: number;
						public static readonly SW_ROTATE_LOCK: number;
						public static readonly SW_TABLET_MODE: number;
						public static readonly SW_VIDEOOUT_INSERT: number;
						public static readonly SYN_CNT: number;
						public static readonly SYN_CONFIG: number;
						public static readonly SYN_DROPPED: number;
						public static readonly SYN_MAX: number;
						public static readonly SYN_MT_REPORT: number;
						public static readonly SYN_REPORT: number;
						public static readonly UP: number;
						public constructor();
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace inputevent {
					export class InputEventObserver {
						public constructor(context: __javaRoots.androidRoot.content.Context);
						public addListener(listener: __javaRoots.orgRoot.autojs.autojs.core.inputevent.InputEventObserver.InputEventListener): void;
						public ensureObservedAsync(): void;
						public static getGlobal(context: __javaRoots.androidRoot.content.Context): __javaRoots.orgRoot.autojs.autojs.core.inputevent.InputEventObserver;
						public observe(): void;
						public onInputEvent(eventStr: string): void;
						public recycle(): void;
						public removeListener(listener: __javaRoots.orgRoot.autojs.autojs.core.inputevent.InputEventObserver.InputEventListener): boolean;
					}
					export namespace InputEventObserver {
						export class InputEvent {
							public code: string;
							public device: string;
							public time: number;
							public type: string;
							public value: string;
							public constructor(time: number, device: string, _type_: string, code: string, value: string);
							public toString(): string;
						}
						export class InputEventListener {
							public constructor(implementation: InputEventListener);
							public constructor();
						}
						export interface InputEventListener {
							onInputEvent(param0: __javaRoots.orgRoot.autojs.autojs.core.inputevent.InputEventObserver.InputEvent): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace inputevent {
					export class RootAutomator {
						public static readonly DATA_TYPE_EVENT: number;
						public static readonly DATA_TYPE_EVENT_SYNC_REPORT: number;
						public static readonly DATA_TYPE_EVENT_TOUCH_X: number;
						public static readonly DATA_TYPE_EVENT_TOUCH_Y: number;
						public static readonly DATA_TYPE_SLEEP: number;
						public readonly defaultId: number;
						public constructor(context: __javaRoots.androidRoot.content.Context, waitForReadyTimeout: number);
						public constructor(context: __javaRoots.androidRoot.content.Context, waitForReady: boolean);
						public exit(): void;
						public getDefaultId(): number;
						public longPress(x: number, y: number): void;
						public longPress(x: number, y: number, id: number): void;
						public onInitialized(): void;
						public onInterrupted(e: __javaRoots.javaRoot.lang.InterruptedException): void;
						public onNewLine(line: string): void;
						public onOutput(str: string): void;
						public press(x: number, y: number, duration: number): void;
						public press(x: number, y: number, duration: number, id: number): void;
						public sendEvent(_type_: number, code: number, value: number): void;
						public sendMtSync(): void;
						public sendSync(): void;
						public setDefaultId(defaultId: number): void;
						public setScreenMetrics(width: number, height: number): void;
						public swipe(x1: number, y1: number, x2: number, y2: number): void;
						public swipe(x1: number, y1: number, x2: number, y2: number, duration: number): void;
						public swipe(x1: number, y1: number, x2: number, y2: number, duration: number, id: number): void;
						public tap(x: number, y: number): void;
						public tap(x: number, y: number, id: number): void;
						public touch(x: number, y: number): void;
						public touchDown(x: number, y: number): void;
						public touchDown(x: number, y: number, id: number): void;
						public touchMove(x: number, y: number): void;
						public touchMove(x: number, y: number, id: number): void;
						public touchUp(): void;
						public touchUp(id: number): void;
						public touchX(x: number): void;
						public touchY(y: number): void;
					}
					export interface RootAutomator extends __javaRoots.orgRoot.autojs.autojs.runtime.api.Shell.Callback {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace inputevent {
					export class TouchObserver {
						public constructor(observer: __javaRoots.orgRoot.autojs.autojs.core.inputevent.InputEventObserver);
						public observe(): void;
						public onInputEvent(event: __javaRoots.orgRoot.autojs.autojs.core.inputevent.InputEventObserver.InputEvent): void;
						public setOnTouchEventListener(onTouchEventListener: __javaRoots.orgRoot.autojs.autojs.core.inputevent.TouchObserver.OnTouchEventListener): void;
						public stop(): void;
					}
					export interface TouchObserver extends __javaRoots.orgRoot.autojs.autojs.core.inputevent.InputEventObserver.InputEventListener {}
					export namespace TouchObserver {
						export class OnTouchEventListener {
							public constructor(implementation: OnTouchEventListener);
							public constructor();
						}
						export interface OnTouchEventListener {
							onTouch(param0: number, param1: number): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace looper {
					export class ILooperThread {
						public constructor(implementation: ILooperThread);
						public constructor();
					}
					export interface ILooperThread {
						readonly looper: __javaRoots.androidRoot.os.Looper;
						getLooper(): __javaRoots.androidRoot.os.Looper;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace looper {
					export class Loopers {
						public readonly mainLooper: __javaRoots.androidRoot.os.Looper;
						public readonly scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime;
						public readonly servantLooper: __javaRoots.androidRoot.os.Looper;
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public addLooperQuitHandler(looperQuitHandler: __javaRoots.orgRoot.autojs.autojs.core.looper.Loopers.LooperQuitHandler): void;
						public doNotWaitWhenIdle(waitId: number): void;
						public getMainLooper(): __javaRoots.androidRoot.os.Looper;
						public getScriptRuntime(): __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime;
						public getServantLooper(): __javaRoots.androidRoot.os.Looper;
						public notifyThreadExit(thread: __javaRoots.orgRoot.autojs.autojs.core.looper.TimerThread): void;
						public prepare(): void;
						public queueIdle(): boolean;
						public recycle(): void;
						public removeLooperQuitHandler(looperQuitHandler: __javaRoots.orgRoot.autojs.autojs.core.looper.Loopers.LooperQuitHandler): boolean;
						public setMainLooperQuitHandler(looperQuitHandler: __javaRoots.orgRoot.autojs.autojs.core.looper.Loopers.LooperQuitHandler): void;
						public waitWhenIdle(): number;
						public waitWhenIdle(b: boolean): void;
						public waitWhenIdleToken$app(): __javaRoots.orgRoot.autojs.autojs.core.looper.Loopers.WaitToken;
					}
					export interface Loopers extends __javaRoots.androidRoot.os.MessageQueue.IdleHandler {}
					export namespace Loopers {
						export class LooperQuitHandler {
							public constructor(implementation: LooperQuitHandler);
							public constructor();
						}
						export interface LooperQuitHandler {
							shouldQuit(): boolean;
						}
						export class WaitToken {
							public readonly id$app: number;
							public constructor(id: number, waitIds: __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.lang.Integer>);
							public getId$app(): number;
							public release(): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace looper {
					export class MainThreadProxy {
						public readonly alive: boolean;
						public readonly contextClassLoader: __javaRoots.javaRoot.lang.ClassLoader;
						public readonly daemon: boolean;
						public readonly id: number;
						public readonly interrupted: boolean;
						public readonly name: string;
						public readonly priority: number;
						public readonly stackTrace: __javaRoots.javaRoot.lang.StackTraceElement[];
						public readonly state: __javaRoots.javaRoot.lang.Thread.State;
						public readonly threadGroup: __javaRoots.javaRoot.lang.ThreadGroup;
						public readonly uncaughtExceptionHandler: __javaRoots.javaRoot.lang.Thread.UncaughtExceptionHandler;
						public static readonly allStackTraces: __javaRoots.javaRoot.util.Map<__javaRoots.javaRoot.lang.Thread, __javaRoots.javaRoot.lang.StackTraceElement[]>;
						public static readonly defaultUncaughtExceptionHandler: __javaRoots.javaRoot.lang.Thread.UncaughtExceptionHandler;
						public constructor(thread: __javaRoots.javaRoot.lang.Thread, runtime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public static activeCount(): number;
						public checkAccess(): void;
						public clearImmediate(id: number): boolean;
						public clearInterval(id: number): boolean;
						public clearTimeout(id: number): boolean;
						public static currentThread(): __javaRoots.javaRoot.lang.Thread;
						public static dumpStack(): void;
						public static enumerate(tarray: __javaRoots.javaRoot.lang.Thread[]): number;
						public static getAllStackTraces(): __javaRoots.javaRoot.util.Map<__javaRoots.javaRoot.lang.Thread, __javaRoots.javaRoot.lang.StackTraceElement[]>;
						public getContextClassLoader(): __javaRoots.javaRoot.lang.ClassLoader;
						public static getDefaultUncaughtExceptionHandler(): __javaRoots.javaRoot.lang.Thread.UncaughtExceptionHandler;
						public getId(): number;
						public getName(): string;
						public getPriority(): number;
						public getStackTrace(): __javaRoots.javaRoot.lang.StackTraceElement[];
						public getState(): __javaRoots.javaRoot.lang.Thread.State;
						public getThreadGroup(): __javaRoots.javaRoot.lang.ThreadGroup;
						public getUncaughtExceptionHandler(): __javaRoots.javaRoot.lang.Thread.UncaughtExceptionHandler;
						public static holdsLock(obj: any): boolean;
						public interrupt(): void;
						public static interrupted(): boolean;
						public isAlive(): boolean;
						public isDaemon(): boolean;
						public isInterrupted(): boolean;
						public join(): void;
						public join(millis: number): void;
						public join(millis: number, nanos: number): void;
						public run(): void;
						public setContextClassLoader(cl: __javaRoots.javaRoot.lang.ClassLoader): void;
						public setDaemon(on: boolean): void;
						public static setDefaultUncaughtExceptionHandler(eh: __javaRoots.javaRoot.lang.Thread.UncaughtExceptionHandler): void;
						public setImmediate(listener: __javaRoots.orgRoot.mozilla.javascript.Callable, ...args: any[]): number;
						public setInterval(callback: __javaRoots.orgRoot.mozilla.javascript.Callable, interval: number, ...args: any[]): number;
						public setName(name: string): void;
						public setPriority(newPriority: number): void;
						public setTimeout(callback: __javaRoots.orgRoot.mozilla.javascript.Callable, delay: number, ...args: any[]): number;
						public setUncaughtExceptionHandler(eh: __javaRoots.javaRoot.lang.Thread.UncaughtExceptionHandler): void;
						public static sleep(millis: number): void;
						public static sleep(millis: number, nanos: number): void;
						public start(): void;
						/** @deprecated */
						public stop(): void;
						public toString(): string;
						public static yield(): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace looper {
					export class Timer {
						public static readonly EMPTY_RUNNABLE: __javaRoots.javaRoot.lang.Runnable;
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, maxCallbackMillisForAllThread: __javaRoots.orgRoot.autojs.autojs.concurrent.VolatileBox<__javaRoots.javaRoot.lang.Long>, timerId: number);
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, maxCallbackMillisForAllThread: __javaRoots.orgRoot.autojs.autojs.concurrent.VolatileBox<__javaRoots.javaRoot.lang.Long>, looper: __javaRoots.androidRoot.os.Looper, timerId: number);
						public clearImmediate(n: number): boolean;
						public clearInterval(n: number): boolean;
						public clearTimeout(n: number): boolean;
						public static getTimerId(n: number): number;
						public hasPendingCallbacks(): boolean;
						public postDelayed(r: __javaRoots.javaRoot.lang.Runnable, interval: number): void;
						public removeAllCallbacks(): void;
						public setImmediate(callback: __javaRoots.orgRoot.mozilla.javascript.Callable, ...args: any[]): number;
						public setInterval(callback: __javaRoots.orgRoot.mozilla.javascript.Callable, interval: number, ...args: any[]): number;
						public setTimeout(callback: __javaRoots.orgRoot.mozilla.javascript.Callable, delay: number, ...args: any[]): number;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace looper {
					export class TimerThread extends __javaRoots.orgRoot.autojs.autojs.lang.ThreadCompat {
						public readonly looper: __javaRoots.androidRoot.os.Looper;
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, target: __javaRoots.javaRoot.lang.Runnable);
						public clearImmediate(id: number): boolean;
						public clearInterval(id: number): boolean;
						public clearTimeout(id: number): boolean;
						public getLooper(): __javaRoots.androidRoot.os.Looper;
						public static getTimerForThread(thread: __javaRoots.javaRoot.lang.Thread): __javaRoots.orgRoot.autojs.autojs.core.looper.Timer;
						public interrupt(): void;
						public run(): void;
						public setImmediate(callback: __javaRoots.orgRoot.mozilla.javascript.Callable, ...args: any[]): number;
						public setInterval(callback: __javaRoots.orgRoot.mozilla.javascript.Callable): number;
						public setInterval(callback: __javaRoots.orgRoot.mozilla.javascript.Callable, interval: number, ...args: any[]): number;
						public setTimeout(callback: __javaRoots.orgRoot.mozilla.javascript.Callable): number;
						public setTimeout(callback: __javaRoots.orgRoot.mozilla.javascript.Callable, delay: number, ...args: any[]): number;
						public toString(): string;
						public waitFor(): void;
					}
					export interface TimerThread extends __javaRoots.orgRoot.autojs.autojs.core.looper.ILooperThread {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace notification {
					export class Notification extends __javaRoots.androidRoot.app.Notification {
						public readonly packageName: string;
						public readonly text: string;
						public readonly title: string;
						public click(): void;
						public delete(): void;
						public getPackageName(): string;
						public getText(): string;
						public getTitle(): string;
						public toString(): string;
						protected constructor();
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace opencv {
					export class Mat extends __javaRoots.orgRoot.opencv.core.Mat {
						public readonly released: boolean;
						public constructor();
						public constructor(rows: number, cols: number, _type_: number);
						public constructor(rows: number, cols: number, _type_: number, data: __javaRoots.javaRoot.nio.ByteBuffer);
						public constructor(rows: number, cols: number, _type_: number, data: __javaRoots.javaRoot.nio.ByteBuffer, step: number);
						public constructor(rows: number, cols: number, _type_: number, s: __javaRoots.orgRoot.opencv.core.Scalar);
						public constructor(addr: number);
						public constructor(m: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, rowRange: __javaRoots.orgRoot.opencv.core.Range);
						public constructor(m: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, rowRange: __javaRoots.orgRoot.opencv.core.Range, colRange: __javaRoots.orgRoot.opencv.core.Range);
						public constructor(m: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, roi: __javaRoots.orgRoot.opencv.core.Rect);
						public constructor(opencvMat: __javaRoots.orgRoot.opencv.core.Mat, rowRange: __javaRoots.orgRoot.opencv.core.Range);
						public constructor(opencvMat: __javaRoots.orgRoot.opencv.core.Mat, rowRange: __javaRoots.orgRoot.opencv.core.Range, colRange: __javaRoots.orgRoot.opencv.core.Range);
						public constructor(opencvMat: __javaRoots.orgRoot.opencv.core.Mat, rect: __javaRoots.orgRoot.opencv.core.Rect);
						public constructor(opencvMat: __javaRoots.orgRoot.opencv.core.Mat, ranges: __javaRoots.orgRoot.opencv.core.Range[]);
						public constructor(size: __javaRoots.orgRoot.opencv.core.Size, _type_: number);
						public constructor(size: __javaRoots.orgRoot.opencv.core.Size, _type_: number, s: __javaRoots.orgRoot.opencv.core.Scalar);
						public constructor(sizes: number[], _type_: number);
						public constructor(sizes: number[], _type_: number, scalar: __javaRoots.orgRoot.opencv.core.Scalar);
						public clone(): __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public convertTo(_type_: number): __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public convertTo(_type_: number, isRelease: boolean): __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public isReleased(): boolean;
						public static ones(size_width: number, size_height: number, _type_: number): __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public release(): void;
						public clone(...args: any[]): any;
						public convertTo(...args: any[]): any;
						public static ones(...args: any[]): any;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace permission {
					export class OnRequestPermissionsResultCallback {
						public constructor(implementation: OnRequestPermissionsResultCallback);
						public constructor();
					}
					export interface OnRequestPermissionsResultCallback {
						onRequestPermissionsResult(param0: number, param1: string[], param2: number[]): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace permission {
					export class PermissionRequestProxyActivity {
						public constructor(implementation: PermissionRequestProxyActivity);
						public constructor();
					}
					export interface PermissionRequestProxyActivity {
						addRequestPermissionsCallback(param0: __javaRoots.orgRoot.autojs.autojs.core.permission.OnRequestPermissionsResultCallback): void;
						removeRequestPermissionsCallback(param0: __javaRoots.orgRoot.autojs.autojs.core.permission.OnRequestPermissionsResultCallback): boolean;
						requestPermissions(param0: string[], param1: number): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace permission {
					export class Permissions {
						public constructor();
						public static getPermissionsNeedToRequest(context: __javaRoots.androidRoot.content.Context, permissions: string[]): string[];
						public static requestPermissions(context: __javaRoots.androidRoot.content.Context, permissions: string[]): void;
						public static requestPermissions(activity: __javaRoots.orgRoot.autojs.autojs.core.permission.PermissionRequestProxyActivity, permissions: string[], callback: __javaRoots.orgRoot.autojs.autojs.core.permission.OnRequestPermissionsResultCallback): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace plugin {
					export class Plugin {
						public mainScriptPath: string;
						public readonly assetsScriptDir: string;
						public readonly componentName: __javaRoots.androidRoot.content.ComponentName;
						public readonly pkg: __javaRoots.orgRoot.autojs.autojs.core.plugin.Plugin.Package;
						public readonly version: number;
						public constructor(pluginInstance: __javaRoots.androidRoot.content.ServiceConnection, pkg: __javaRoots.orgRoot.autojs.autojs.core.plugin.Plugin.Package);
						public getAssetsScriptDir(): string;
						public getComponentName(): __javaRoots.androidRoot.content.ComponentName;
						public getMainScriptPath(): string;
						public getPkg(): __javaRoots.orgRoot.autojs.autojs.core.plugin.Plugin.Package;
						public getVersion(): number;
						public onServiceConnected(componentName: __javaRoots.androidRoot.content.ComponentName, service: __javaRoots.androidRoot.os.IBinder): void;
						public onServiceDisconnected(componentName: __javaRoots.androidRoot.content.ComponentName): void;
						public setMainScriptPath(_set___: string): void;
						public unwrap(): __javaRoots.androidRoot.content.ServiceConnection;
					}
					export interface Plugin extends __javaRoots.androidRoot.content.ServiceConnection {}
					export namespace Plugin {
						export class Package extends __javaRoots.javaRoot.lang.Record {
							public constructor(context: __javaRoots.androidRoot.content.Context, applicationInfo: __javaRoots.androidRoot.content.pm.ApplicationInfo, installed: boolean);
							public applicationInfo(): __javaRoots.androidRoot.content.pm.ApplicationInfo;
							public component1(): __javaRoots.androidRoot.content.Context;
							public component2(): __javaRoots.androidRoot.content.pm.ApplicationInfo;
							public component3(): boolean;
							public context(): __javaRoots.androidRoot.content.Context;
							public copy(context: __javaRoots.androidRoot.content.Context, applicationInfo: __javaRoots.androidRoot.content.pm.ApplicationInfo, installed: boolean): __javaRoots.orgRoot.autojs.autojs.core.plugin.Plugin.Package;
							public equals(other: any): boolean;
							public hashCode(): number;
							public installed(): boolean;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace pref {
					export class Pref {
						public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.core.pref.Pref;
						public readonly gestureObservingEnabled: boolean;
						public readonly stableModeEnabled: boolean;
						public static readonly autoCheckForUpdatesEnabled: boolean;
						public static readonly codeHighlightThresholdChars: number;
						public static readonly currentTheme: string;
						public static readonly explorerPlaybackHistoryEnabled: boolean;
						public static readonly extendingJsBuildInObjectsEnabled: boolean;
						public static readonly fileExtensionsHidden: boolean;
						public static readonly fileExtensionsShownForAll: boolean;
						public static readonly fileExtensionsShownForAllButExecutable: boolean;
						public static readonly guardModeEnabled: boolean;
						public static readonly hiddenFilesShown: boolean;
						public static readonly keyKeepScreenOnWhenInForeground: string;
						public static readonly keyStorePath: string;
						public static readonly largeFileModeThresholdBytes: number;
						public static readonly lastNoNewerUpdatesTimestamp: number;
						public static readonly lastUpdatesAutoCheckedTimestamp: number;
						public static readonly lastUpdatesCheckedTimeString: string;
						public static readonly lastUpdatesPostponedTimestamp: number;
						public static readonly quickRestartEnabled: boolean;
						public static readonly recordToastEnabled: boolean;
						public static readonly rootMode: __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode;
						public static readonly scheduledRestartPreferredWorkManager: boolean;
						public static readonly screenCaptureRequestDelay: number;
						public static readonly scriptDirPath: string;
						public static readonly serverAddress: string;
						public static readonly useVolumeControlRecordEnabled: boolean;
						public static readonly useVolumeControlRunningEnabled: boolean;
						public static clearUpdatesCheckedStates(): void;
						public static containsKey(keyRes: number): boolean;
						public static containsKey(key: string): boolean;
						public static containsKey(...keyResList: number[]): boolean;
						public static get(): __javaRoots.androidRoot.content.SharedPreferences;
						public static getBoolean(keyRes: number, defValue: number): boolean;
						public static getBoolean(keyRes: number, defValue: boolean): boolean;
						public static getBoolean(key: string, defValue: boolean): boolean;
						public static getCodeHighlightThresholdChars(): number;
						public static getCurrentTheme(): string;
						public static getEditorTextSize(defValue: number): number;
						public static getFloat(key: string, defValue: number): number;
						public static getInt(keyRes: number, defValue: number): number;
						public static getInt(key: string, defValue: number): number;
						public static getKeyKeepScreenOnWhenInForeground(): string;
						public static getKeyStorePath(): string;
						public static getLargeFileModeThresholdBytes(): number;
						public static getLastNoNewerUpdatesTimestamp(): number;
						public static getLastUpdatesAutoCheckedTimestamp(): number;
						public static getLastUpdatesCheckedTimeString(): string;
						public static getLastUpdatesPostponedTimestamp(): number;
						public static getLinkedHashSet(keyRes: number): __javaRoots.javaRoot.util.LinkedHashSet<string>;
						public static getLinkedList(key: string): __javaRoots.javaRoot.util.LinkedList<string>;
						public static getLong(keyRes: number, defValue: number): number;
						public static getLong(key: string, defValue: number): number;
						public static getRootMode(): __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode;
						public static getScreenCaptureRequestDelay(): number;
						public static getScriptDirPath(): string;
						public static getServerAddress(): string;
						public static getString(keyRes: number, defKeyRes: number): string;
						public static getString(keyRes: number, defValue: string): string;
						public static getString(key: string, defValue: string): string;
						public static getStringOrNull(keyRes: number): string;
						public static getStringOrNull(key: string): string;
						public static getStringSet(keyRes: number, defValues: __javaRoots.javaRoot.util.Set<string>): __javaRoots.javaRoot.util.Set<string>;
						public static isAutoCheckForUpdatesEnabled(): boolean;
						public static isCodeHighlightEnabledForLength(length: number): boolean;
						public static isExplorerPlaybackHistoryEnabled(): boolean;
						public static isExtendingJsBuildInObjectsEnabled(): boolean;
						public static isFileExtensionsHidden(): boolean;
						public static isFileExtensionsShownForAll(): boolean;
						public static isFileExtensionsShownForAllButExecutable(): boolean;
						public isGestureObservingEnabled(): boolean;
						public static isGuardModeEnabled(): boolean;
						public static isHiddenFilesShown(): boolean;
						public static isQuickRestartEnabled(): boolean;
						public static isRecordToastEnabled(): boolean;
						public static isScheduledRestartPreferredWorkManager(): boolean;
						public isStableModeEnabled(): boolean;
						public static isUseVolumeControlRecordEnabled(): boolean;
						public static isUseVolumeControlRunningEnabled(): boolean;
						public static putBoolean(keyRes: number, value: boolean): void;
						public static putBoolean(key: string, value: boolean): void;
						public static putBooleanSync(keyRes: number, value: boolean): void;
						public static putBooleanSync(key: string, value: boolean): void;
						public static putFloat(key: string, value: number): void;
						public static putFloatSync(key: string, value: number): void;
						public static putInt(keyRes: number, value: number): void;
						public static putInt(key: string, value: number): void;
						public static putIntSync(key: string, value: number): void;
						public static putLinkedHashSet(keyRes: number, value: __javaRoots.javaRoot.util.LinkedHashSet<string>): void;
						public static putLinkedList(key: string, value: __javaRoots.javaRoot.util.LinkedList<string>): void;
						public static putLong(keyRes: number, value: number): void;
						public static putLong(key: string, value: number): void;
						public static putString(keyRes: number, value: string): void;
						public static putString(key: string, value: string): void;
						public static putStringSet(keyRes: number, values: __javaRoots.javaRoot.util.Set<string>): void;
						public static putStringSync(key: string, value: string): void;
						public static refreshLastNoNewerUpdatesTimestamp(): void;
						public static refreshLastUpdatesAutoCheckedTimestamp(): void;
						public static refreshLastUpdatesCheckedTimestamp(): void;
						public static refreshLastUpdatesPostponedTimestamp(): void;
						public static registerOnSharedPreferenceChangeListener(listener: __javaRoots.androidRoot.content.SharedPreferences.OnSharedPreferenceChangeListener): void;
						public static remove(key: string): void;
						public static rootRecordGeneratesBinary(): boolean;
						public static setCodeHighlightThresholdChars(value: number): void;
						public static setCurrentTheme(theme: string): void;
						public static setEditorTextSize(value: number): void;
						public static setLargeFileModeThresholdBytes(value: number): void;
						public static setRootMode(mode: __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode): void;
						public static setServerAddress(address: string): void;
						public static shouldEnableLargeFileModeForSize(size: number): boolean;
						public static shouldStartA11yServiceWithRoot(): boolean;
						public static shouldStartA11yServiceWithSecureSettings(): boolean;
						protected constructor();
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace shizuku {
					export class IUserService {
						public constructor(implementation: IUserService);
						public constructor();
						public static readonly DESCRIPTOR: string;
					}
					export interface IUserService extends __javaRoots.androidRoot.os.IInterface {
						currentActivity(): string;
						currentComponent(): string;
						currentComponentShort(): string;
						currentPackage(): string;
						destroy(): void;
						execCommand(param0: string): string;
						exit(): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export class BaseEvent extends __javaRoots.orgRoot.autojs.autojs.rhino.NativeJavaObjectWithPrototype {
						public readonly consumed: boolean;
						public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any);
						public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any, staticType: __javaRoots.javaRoot.lang.Class<any>);
						public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any, staticType: __javaRoots.javaRoot.lang.Class<any>, isAdapter: boolean);
						public get(name: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable): any;
						public has(name: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable): boolean;
						public isConsumed(): boolean;
						public put(name: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable, value: any): void;
						public get(...args: any[]): any;
						public has(...args: any[]): any;
						public put(...args: any[]): any;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export class JsViewHelper {
						public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.core.ui.JsViewHelper;
						public static findViewByStringId(view: __javaRoots.androidRoot.view.View, id: string): __javaRoots.androidRoot.view.View;
						protected constructor();
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace dialog {
						export class JsDialog {
							public readonly actionBar: __javaRoots.androidRoot.app.ActionBar;
							public readonly builder: __javaRoots.comRoot.afollestad.materialdialogs.MaterialDialog.Builder;
							public readonly cancelled: boolean;
							public readonly contentView: __javaRoots.androidRoot.widget.TextView;
							public readonly context: __javaRoots.androidRoot.content.Context;
							public readonly currentFocus: __javaRoots.androidRoot.view.View;
							public readonly currentProgress: number;
							public readonly customView: __javaRoots.androidRoot.view.View;
							public readonly iconView: __javaRoots.androidRoot.widget.ImageView;
							public readonly indeterminateProgress: boolean;
							public readonly inputEditText: __javaRoots.androidRoot.widget.EditText;
							public readonly items: __javaRoots.javaRoot.util.ArrayList<string>;
							public readonly layoutInflater: __javaRoots.androidRoot.view.LayoutInflater;
							public readonly maxListeners: number;
							public readonly maxProgress: number;
							public readonly ownerActivity: __javaRoots.androidRoot.app.Activity;
							public readonly progress: number;
							public readonly progressBar: __javaRoots.androidRoot.widget.ProgressBar;
							public readonly promptCheckBoxChecked: boolean;
							public readonly recyclerView: __javaRoots.androidxRoot.recyclerview.widget.RecyclerView;
							public readonly searchEvent: __javaRoots.androidRoot.view.SearchEvent;
							public readonly selectedIndex: number;
							public readonly selectedIndices: __javaRoots.javaRoot.lang.Integer[];
							public readonly showing: boolean;
							public readonly tag: any;
							public readonly titleView: __javaRoots.androidRoot.widget.TextView;
							public readonly view: __javaRoots.androidRoot.view.View;
							public readonly volumeControlStream: number;
							public readonly window: __javaRoots.androidRoot.view.Window;
							public constructor(builder: __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialogBuilder, emitter: __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter, uiHandler: __javaRoots.orgRoot.autojs.autojs.tool.UiHandler);
							public addContentView(view: __javaRoots.androidRoot.view.View, params: __javaRoots.androidRoot.view.ViewGroup.LayoutParams): void;
							public addListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public cancel(): void;
							public clearSelectedIndices(): void;
							public clearSelectedIndices(sendCallback: boolean): void;
							public closeOptionsMenu(): void;
							public create(): void;
							public static defaultMaxListeners(): number;
							public dismiss(): void;
							public dispatchGenericMotionEvent(ev: __javaRoots.androidRoot.view.MotionEvent): boolean;
							public dispatchKeyEvent(event: __javaRoots.androidRoot.view.KeyEvent): boolean;
							public dispatchKeyShortcutEvent(event: __javaRoots.androidRoot.view.KeyEvent): boolean;
							public dispatchPopulateAccessibilityEvent(event: __javaRoots.androidRoot.view.accessibility.AccessibilityEvent): boolean;
							public dispatchTouchEvent(ev: __javaRoots.androidRoot.view.MotionEvent): boolean;
							public dispatchTrackballEvent(ev: __javaRoots.androidRoot.view.MotionEvent): boolean;
							public emit(eventName: string, ...args: any[]): boolean;
							public eventNames(): string[];
							public findViewById(id: number): __javaRoots.androidRoot.view.View;
							public getActionBar(): __javaRoots.androidRoot.app.ActionBar;
							public getActionButton(which: __javaRoots.comRoot.afollestad.materialdialogs.DialogAction): __javaRoots.comRoot.afollestad.materialdialogs.internal.MDButton;
							public getActionButton(action: string): string;
							public getBuilder(): __javaRoots.comRoot.afollestad.materialdialogs.MaterialDialog.Builder;
							public getContentView(): __javaRoots.androidRoot.widget.TextView;
							public getContext(): __javaRoots.androidRoot.content.Context;
							public getCurrentFocus(): __javaRoots.androidRoot.view.View;
							public getCurrentProgress(): number;
							public getCustomView(): __javaRoots.androidRoot.view.View;
							public getIconView(): __javaRoots.androidRoot.widget.ImageView;
							public getInputEditText(): __javaRoots.androidRoot.widget.EditText;
							public getItems(): __javaRoots.javaRoot.util.ArrayList<string>;
							public getLayoutInflater(): __javaRoots.androidRoot.view.LayoutInflater;
							public getMaxListeners(): number;
							public getMaxProgress(): number;
							public getOwnerActivity(): __javaRoots.androidRoot.app.Activity;
							public getProgress(): number;
							public getProgressBar(): __javaRoots.androidRoot.widget.ProgressBar;
							public getRecyclerView(): __javaRoots.androidxRoot.recyclerview.widget.RecyclerView;
							public getSearchEvent(): __javaRoots.androidRoot.view.SearchEvent;
							public getSelectedIndex(): number;
							public getSelectedIndices(): __javaRoots.javaRoot.lang.Integer[];
							public getTag(): any;
							public getTitleView(): __javaRoots.androidRoot.widget.TextView;
							public getView(): __javaRoots.androidRoot.view.View;
							public getVolumeControlStream(): number;
							public getWindow(): __javaRoots.androidRoot.view.Window;
							public hasActionButtons(): boolean;
							public hide(): void;
							public incrementProgress(by: number): void;
							public invalidateOptionsMenu(): void;
							public isCancelled(): boolean;
							public isIndeterminateProgress(): boolean;
							public isPromptCheckBoxChecked(): boolean;
							public isShowing(): boolean;
							public listenerCount(eventName: string): number;
							public listeners(eventName: string): any[];
							public notifyItemChanged(index: number): void;
							public notifyItemInserted(index: number): void;
							public notifyItemsChanged(): void;
							public numberOfActionButtons(): number;
							public on(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public onActionModeFinished(mode: __javaRoots.androidRoot.view.ActionMode): void;
							public onActionModeStarted(mode: __javaRoots.androidRoot.view.ActionMode): void;
							public onAttachedToWindow(): void;
							public onBackPressed(): void;
							public onClick(v: __javaRoots.androidRoot.view.View): void;
							public onContentChanged(): void;
							public onContextItemSelected(item: __javaRoots.androidRoot.view.MenuItem): boolean;
							public onContextMenuClosed(menu: __javaRoots.androidRoot.view.Menu): void;
							public onCreateContextMenu(menu: __javaRoots.androidRoot.view.ContextMenu, v: __javaRoots.androidRoot.view.View, menuInfo: __javaRoots.androidRoot.view.ContextMenu.ContextMenuInfo): void;
							public onCreateOptionsMenu(menu: __javaRoots.androidRoot.view.Menu): boolean;
							public onCreatePanelMenu(featureId: number, menu: __javaRoots.androidRoot.view.Menu): boolean;
							public onCreatePanelView(featureId: number): __javaRoots.androidRoot.view.View;
							public onDetachedFromWindow(): void;
							public onGenericMotionEvent(event: __javaRoots.androidRoot.view.MotionEvent): boolean;
							public onItemSelected(dialog: __javaRoots.comRoot.afollestad.materialdialogs.MaterialDialog, view: __javaRoots.androidRoot.view.View, position: number, text: string, longPress: boolean): boolean;
							public onKeyDown(keyCode: number, event: __javaRoots.androidRoot.view.KeyEvent): boolean;
							public onKeyLongPress(keyCode: number, event: __javaRoots.androidRoot.view.KeyEvent): boolean;
							public onKeyMultiple(keyCode: number, repeatCount: number, event: __javaRoots.androidRoot.view.KeyEvent): boolean;
							public onKeyShortcut(keyCode: number, event: __javaRoots.androidRoot.view.KeyEvent): boolean;
							public onKeyUp(keyCode: number, event: __javaRoots.androidRoot.view.KeyEvent): boolean;
							public onMenuItemSelected(featureId: number, item: __javaRoots.androidRoot.view.MenuItem): boolean;
							public onMenuOpened(featureId: number, menu: __javaRoots.androidRoot.view.Menu): boolean;
							public onOptionsItemSelected(item: __javaRoots.androidRoot.view.MenuItem): boolean;
							public onOptionsMenuClosed(menu: __javaRoots.androidRoot.view.Menu): void;
							public onPanelClosed(featureId: number, menu: __javaRoots.androidRoot.view.Menu): void;
							public onPrepareOptionsMenu(menu: __javaRoots.androidRoot.view.Menu): boolean;
							public onPreparePanel(featureId: number, view: __javaRoots.androidRoot.view.View, menu: __javaRoots.androidRoot.view.Menu): boolean;
							public onProvideKeyboardShortcuts(data: __javaRoots.javaRoot.util.List<__javaRoots.androidRoot.view.KeyboardShortcutGroup>, menu: __javaRoots.androidRoot.view.Menu, deviceId: number): void;
							public onRestoreInstanceState(savedInstanceState: __javaRoots.androidRoot.os.Bundle): void;
							public onSaveInstanceState(): __javaRoots.androidRoot.os.Bundle;
							public onSearchRequested(): boolean;
							public onSearchRequested(searchEvent: __javaRoots.androidRoot.view.SearchEvent): boolean;
							public onShow(dialog: __javaRoots.androidRoot.content.DialogInterface): void;
							public onTouchEvent(event: __javaRoots.androidRoot.view.MotionEvent): boolean;
							public onTrackballEvent(event: __javaRoots.androidRoot.view.MotionEvent): boolean;
							public onWindowAttributesChanged(params: __javaRoots.androidRoot.view.WindowManager.LayoutParams): void;
							public onWindowFocusChanged(hasFocus: boolean): void;
							public onWindowStartingActionMode(callback: __javaRoots.androidRoot.view.ActionMode.Callback): __javaRoots.androidRoot.view.ActionMode;
							public onWindowStartingActionMode(callback: __javaRoots.androidRoot.view.ActionMode.Callback, _type_: number): __javaRoots.androidRoot.view.ActionMode;
							public once(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public openContextMenu(view: __javaRoots.androidRoot.view.View): void;
							public openOptionsMenu(): void;
							public prependListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public prependOnceListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public registerForContextMenu(view: __javaRoots.androidRoot.view.View): void;
							public removeAllListeners(): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public removeAllListeners(eventName: string): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public removeListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public requestWindowFeature(featureId: number): boolean;
							public selectAllIndices(): void;
							public selectAllIndices(sendCallback: boolean): void;
							public setActionButton(which: __javaRoots.comRoot.afollestad.materialdialogs.DialogAction, titleRes: number): void;
							public setActionButton(which: __javaRoots.comRoot.afollestad.materialdialogs.DialogAction, title: string): void;
							public setActionButton(action: string, text: string): void;
							public setCancelMessage(msg: __javaRoots.androidRoot.os.Message): void;
							public setCancelable(flag: boolean): void;
							public setCanceledOnTouchOutside(cancel: boolean): void;
							public setContent(newContentRes: number): void;
							public setContent(newContentRes: number, ...formatArgs: any[]): void;
							public setContent(newContent: string): void;
							/** @deprecated */
							public setContentView(layoutResID: number): void;
							/** @deprecated */
							public setContentView(view: __javaRoots.androidRoot.view.View): void;
							/** @deprecated */
							public setContentView(view: __javaRoots.androidRoot.view.View, params: __javaRoots.androidRoot.view.ViewGroup.LayoutParams): void;
							public setDismissMessage(msg: __javaRoots.androidRoot.os.Message): void;
							public setFeatureDrawable(featureId: number, drawable: __javaRoots.androidRoot.graphics.drawable.Drawable): void;
							public setFeatureDrawableAlpha(featureId: number, alpha: number): void;
							public setFeatureDrawableResource(featureId: number, resId: number): void;
							public setFeatureDrawableUri(featureId: number, uri: __javaRoots.androidRoot.net.Uri): void;
							public setIcon(resId: number): void;
							public setIcon(d: __javaRoots.androidRoot.graphics.drawable.Drawable): void;
							public setIconAttribute(attrId: number): void;
							public setItems(...items: string[]): void;
							public setMaxListeners(n: number): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public setMaxProgress(max: number): void;
							public setOnBackPressedFromJs(callback: __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.OnBackPressedFromJs): void;
							public setOnCancelListener(listener: __javaRoots.androidRoot.content.DialogInterface.OnCancelListener): void;
							public setOnDismissListener(listener: __javaRoots.androidRoot.content.DialogInterface.OnDismissListener): void;
							public setOnKeyListener(onKeyListener: __javaRoots.androidRoot.content.DialogInterface.OnKeyListener): void;
							public setOnShowListener(listener: __javaRoots.androidRoot.content.DialogInterface.OnShowListener): void;
							public setOwnerActivity(activity: __javaRoots.androidRoot.app.Activity): void;
							public setProgress(progress: number): void;
							public setProgressNumberFormat(format: string): void;
							public setProgressPercentFormat(format: __javaRoots.javaRoot.text.NumberFormat): void;
							public setPromptCheckBoxChecked(checked: boolean): void;
							public setSelectedIndex(index: number): void;
							public setSelectedIndices(indices: __javaRoots.javaRoot.lang.Integer[]): void;
							public setTitle(newTitleRes: number): void;
							public setTitle(newTitleRes: number, ...formatArgs: any[]): void;
							public setTitle(newTitle: string): void;
							public setTypeface(target: __javaRoots.androidRoot.widget.TextView, t: __javaRoots.androidRoot.graphics.Typeface): void;
							public setVolumeControlStream(streamType: number): void;
							public show(): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public showSnack(stringRes: number): void;
							public showSnack(stringRes: number, duration: number): void;
							public showSnack(stringRes: number, isLong: boolean): void;
							public showSnack(_string_: string): void;
							public showSnack(_string_: string, duration: number): void;
							public showSnack(_string_: string, isLong: boolean): void;
							public takeKeyEvents(_get_: boolean): void;
							public unregisterForContextMenu(view: __javaRoots.androidRoot.view.View): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace dialog {
						export class JsDialogBuilder extends __javaRoots.comRoot.afollestad.materialdialogs.MaterialDialog.Builder {
							public thread: any;
							public readonly dialog: __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public readonly maxListeners: number;
							public constructor(context: __javaRoots.androidRoot.content.Context, scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
							public addListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialogBuilder;
							public buildDialog(): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public static defaultMaxListeners(): number;
							public emit(eventName: string, ...args: any[]): boolean;
							public eventNames(): string[];
							public getDialog(): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialog;
							public getMaxListeners(): number;
							public listenerCount(eventName: string): number;
							public listeners(eventName: string): any[];
							public on(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialogBuilder;
							/** @deprecated */
							public onShowCalled(): void;
							public once(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialogBuilder;
							public prependListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialogBuilder;
							public prependOnceListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialogBuilder;
							public removeAllListeners(): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialogBuilder;
							public removeAllListeners(eventName: string): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialogBuilder;
							public removeListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialogBuilder;
							public setMaxListeners(n: number): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialogBuilder;
							public theme(theme: __javaRoots.comRoot.afollestad.materialdialogs.Theme): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialogBuilder;
							public theme(...args: any[]): any;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace dialog {
						export class OnBackPressedFromJs {
							public constructor(implementation: OnBackPressedFromJs);
							public constructor();
						}
						export interface OnBackPressedFromJs {
							onBackPressed(param0: __javaRoots.comRoot.afollestad.materialdialogs.MaterialDialog): boolean;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace inflater {
						export class AndroidResourceResolver {
							public readonly repository: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ScriptResourceRepository;
							public constructor();
							public constructor(repository: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ScriptResourceRepository);
							public canResolveDrawable(value: string): boolean;
							public configure(sourceFile: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File): void;
							public getRepository(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ScriptResourceRepository;
							public parseColor(context: __javaRoots.androidRoot.content.Context, source: string): number;
							public parseColorStateList(context: __javaRoots.androidRoot.content.Context, source: string): __javaRoots.androidRoot.content.res.ColorStateList;
							public parseDimension$app(context: __javaRoots.androidRoot.content.Context, source: string): number;
							public readLayout(reference: string): string;
							public resolveAttributes(context: __javaRoots.androidRoot.content.Context, source: __javaRoots.javaRoot.util.Map<string, string>): __javaRoots.javaRoot.util.HashMap<string, string>;
							public resolveDrawable(context: __javaRoots.androidRoot.content.Context, source: string): __javaRoots.androidRoot.graphics.drawable.Drawable;
							public resolveScalar(context: __javaRoots.androidRoot.content.Context, source: string): string;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace inflater {
						export class DynamicLayoutInflater {
							public static readonly FLAG_DEFAULT: number;
							public static readonly FLAG_IGNORES_DYNAMIC_ATTRS: number;
							public static readonly FLAG_JUST_DYNAMIC_ATTRS: number;
							public readonly context: __javaRoots.androidRoot.content.Context;
							public readonly inflateFlags: number;
							public readonly layoutInflaterDelegate: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.LayoutInflaterDelegate;
							public readonly privateContext$app: __javaRoots.androidRoot.content.Context;
							public readonly resourceParser: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ResourceParser;
							public constructor(inflater: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.DynamicLayoutInflater);
							public constructor(resourceParser: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ResourceParser, scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
							public applyAttributes(context: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, view: __javaRoots.androidRoot.view.View, attrs: __javaRoots.javaRoot.util.HashMap<string, string>, parent: __javaRoots.androidRoot.view.ViewGroup): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewInflater<__javaRoots.androidRoot.view.View>;
							public createViewForName(name: string, attrs: __javaRoots.javaRoot.util.HashMap<string, string>, parent: __javaRoots.androidRoot.view.ViewGroup): __javaRoots.androidRoot.view.View;
							public getAttributesMap(currentNode: __javaRoots.orgRoot.w3c.dom.Node): __javaRoots.javaRoot.util.HashMap<string, string>;
							public getContext(): __javaRoots.androidRoot.content.Context;
							public getInflateFlags(): number;
							public getLayoutInflaterDelegate(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.LayoutInflaterDelegate;
							public getPrivateContext$app(): __javaRoots.androidRoot.content.Context;
							public getResourceParser(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ResourceParser;
							public getViewInflater(view: __javaRoots.androidRoot.view.View): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewInflater<__javaRoots.androidRoot.view.View>;
							public inflate(xml: string): __javaRoots.androidRoot.view.View;
							public inflate(xml: string, parent: __javaRoots.androidRoot.view.ViewGroup): __javaRoots.androidRoot.view.View;
							public inflate(xml: string, parent: __javaRoots.androidRoot.view.ViewGroup, attachToParent: boolean): __javaRoots.androidRoot.view.View;
							public inflate(context: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, xml: string, parent: __javaRoots.androidRoot.view.ViewGroup, attachToParent: boolean): __javaRoots.androidRoot.view.View;
							public inflate(context: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, node: __javaRoots.orgRoot.w3c.dom.Node, parent: __javaRoots.androidRoot.view.ViewGroup, attachToParent: boolean): __javaRoots.androidRoot.view.View;
							public inflateChildren(context: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, node: __javaRoots.orgRoot.w3c.dom.Node, parent: __javaRoots.androidRoot.view.ViewGroup): void;
							public inflateFile(path: string): __javaRoots.androidRoot.view.View;
							public inflateFile(path: string, parent: __javaRoots.androidRoot.view.ViewGroup): __javaRoots.androidRoot.view.View;
							public inflateFile(path: string, parent: __javaRoots.androidRoot.view.ViewGroup, attachToParent: boolean): __javaRoots.androidRoot.view.View;
							public isDynamicValue(value: string): boolean;
							public newInflateContext(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext;
							public newInflateContext(parent: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext;
							public registerViewAttrSetter(clazz: __javaRoots.javaRoot.lang.Class<any>, inflater: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewInflater<any>): void;
							public registerViewAttrSetter(className: string, inflater: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewInflater<any>): void;
							public setContext(value: __javaRoots.androidRoot.content.Context): void;
							public setInflateFlags(_set___: number): void;
							public setLayoutInflaterDelegate(_set___: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.LayoutInflaterDelegate): void;
							public setPrivateContext$app(_set___: __javaRoots.androidRoot.content.Context): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace inflater {
						export class InflateContext {
							public constructor();
							public get(key: string): any;
							public has(key: string): boolean;
							public put(key: string, value: any): void;
							public remove(key: string): any;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace inflater {
						export class LayoutInflaterDelegate {
							public constructor(implementation: LayoutInflaterDelegate);
							public constructor();
							public static readonly NO_OP: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.LayoutInflaterDelegate;
						}
						export interface LayoutInflaterDelegate {
							afterApplyAttribute(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewInflater<__javaRoots.androidRoot.view.View>, param2: __javaRoots.androidRoot.view.View, param3: string, param4: string, param5: string, param6: __javaRoots.androidRoot.view.ViewGroup): void;
							afterApplyAttributes(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.androidRoot.view.View, param2: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewInflater<__javaRoots.androidRoot.view.View>, param3: __javaRoots.javaRoot.util.HashMap<string, string>, param4: __javaRoots.androidRoot.view.ViewGroup): void;
							afterApplyPendingAttributesOfChildren(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewGroupInflater<any>, param2: __javaRoots.androidRoot.view.ViewGroup): void;
							afterConvertXml(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: string): string;
							afterCreateView(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.androidRoot.view.View, param2: __javaRoots.orgRoot.w3c.dom.Node, param3: string, param4: __javaRoots.androidRoot.view.ViewGroup): __javaRoots.androidRoot.view.View;
							afterInflateChildren(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewInflater<__javaRoots.androidRoot.view.View>, param2: __javaRoots.orgRoot.w3c.dom.Node, param3: __javaRoots.androidRoot.view.ViewGroup): void;
							afterInflateView(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.androidRoot.view.View, param2: __javaRoots.orgRoot.w3c.dom.Node, param3: __javaRoots.androidRoot.view.ViewGroup, param4: boolean): __javaRoots.androidRoot.view.View;
							afterInflation(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.androidRoot.view.View, param2: string, param3: __javaRoots.androidRoot.view.ViewGroup): __javaRoots.androidRoot.view.View;
							beforeApplyAttribute(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewInflater<__javaRoots.androidRoot.view.View>, param2: __javaRoots.androidRoot.view.View, param3: string, param4: string, param5: string, param6: __javaRoots.androidRoot.view.ViewGroup): boolean;
							beforeApplyAttributes(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.androidRoot.view.View, param2: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewInflater<__javaRoots.androidRoot.view.View>, param3: __javaRoots.javaRoot.util.HashMap<string, string>, param4: __javaRoots.androidRoot.view.ViewGroup): boolean;
							beforeApplyPendingAttributesOfChildren(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewGroupInflater<any>, param2: __javaRoots.androidRoot.view.ViewGroup): boolean;
							beforeConvertXml(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: string): string;
							beforeCreateView(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.orgRoot.w3c.dom.Node, param2: string, param3: __javaRoots.androidRoot.view.ViewGroup): __javaRoots.androidRoot.view.View;
							beforeInflateChildren(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewInflater<__javaRoots.androidRoot.view.View>, param2: __javaRoots.orgRoot.w3c.dom.Node, param3: __javaRoots.androidRoot.view.ViewGroup): boolean;
							beforeInflateView(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: __javaRoots.orgRoot.w3c.dom.Node, param2: __javaRoots.androidRoot.view.ViewGroup, param3: boolean): __javaRoots.androidRoot.view.View;
							beforeInflation(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.InflateContext, param1: string, param2: __javaRoots.androidRoot.view.ViewGroup): __javaRoots.androidRoot.view.View;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace inflater {
						export class ResourceParser {
							public readonly androidResources: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.AndroidResourceResolver;
							public readonly drawables: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.util.Drawables;
							public constructor(drawables: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.util.Drawables);
							public constructor(drawables: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.util.Drawables, androidResources: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.AndroidResourceResolver);
							public getAndroidResources(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.AndroidResourceResolver;
							public getDrawables(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.util.Drawables;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace inflater {
						export class ScriptResourceRepository {
							public readonly resourceRoot: __javaRoots.javaRoot.io.File;
							public constructor();
							public configure(sourceFile: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File): void;
							public findColor(reference: string): __javaRoots.javaRoot.io.File;
							public findDrawable(reference: string): __javaRoots.javaRoot.io.File;
							public findFileResource$app(reference: string, acceptedTypes: __javaRoots.javaRoot.util.Set<string>, extensions: __javaRoots.javaRoot.util.List<string>): __javaRoots.javaRoot.io.File;
							public getResourceRoot(): __javaRoots.javaRoot.io.File;
							public hasResourceRoot(): boolean;
							public parseDocument$app(file: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.w3c.dom.Document;
							public parseDocument$app(xml: string): __javaRoots.orgRoot.w3c.dom.Document;
							public readLayout(reference: string): string;
							public resolveStyle(reference: string): __javaRoots.javaRoot.util.LinkedHashMap<string, string>;
							public resolveStyleDetails$app(reference: string): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ScriptResourceRepository.ResolvedStyle;
							public resolveValue(reference: string): string;
						}
						export namespace ScriptResourceRepository {
							export class ResolvedStyle {
								public readonly attributes: __javaRoots.javaRoot.util.LinkedHashMap<string, string>;
								public readonly compiledParent: string;
								public constructor(attributes: __javaRoots.javaRoot.util.LinkedHashMap<string, string>, compiledParent: string);
								public component1(): __javaRoots.javaRoot.util.LinkedHashMap<string, string>;
								public component2(): string;
								public copy(attributes: __javaRoots.javaRoot.util.LinkedHashMap<string, string>, compiledParent: string): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ScriptResourceRepository.ResolvedStyle;
								public equals(other: any): boolean;
								public getAttributes(): __javaRoots.javaRoot.util.LinkedHashMap<string, string>;
								public getCompiledParent(): string;
								public hashCode(): number;
								public toString(): string;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace inflater {
						export class ShouldCallOnFinishInflate {
							public constructor(implementation: ShouldCallOnFinishInflate);
							public constructor();
						}
						export interface ShouldCallOnFinishInflate {
							onFinishDynamicInflate(): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace inflater {
						export class ViewCreator<V extends __javaRoots.androidRoot.view.View> {
							public constructor(implementation: ViewCreator<V>);
							public constructor();
						}
						export interface ViewCreator<V extends __javaRoots.androidRoot.view.View> {
							create(param0: __javaRoots.androidRoot.content.Context, param1: __javaRoots.javaRoot.util.HashMap<string, string>, param2: __javaRoots.androidRoot.view.ViewGroup): V;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace inflater {
						export namespace inflaters {
							export class BaseViewInflater<V extends __javaRoots.androidRoot.view.View> {
								public readonly creator: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ViewCreator<any>;
								public readonly drawables: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.util.Drawables;
								public readonly resourceParser: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ResourceParser;
								public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, resourceParser: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ResourceParser);
								public applyPendingAttributes(view: V, parent: __javaRoots.androidRoot.view.ViewGroup): void;
								public getCreator(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ViewCreator<any>;
								public getDrawables(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.util.Drawables;
								public getResourceParser(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ResourceParser;
								public inflateChildren(inflater: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.DynamicLayoutInflater, node: __javaRoots.orgRoot.w3c.dom.Node, parent: V): boolean;
								public setAttr(view: V, attrName: string, value: string, parent: __javaRoots.androidRoot.view.ViewGroup): boolean;
								public setAttr(view: V, ns: string, attrName: string, value: string, parent: __javaRoots.androidRoot.view.ViewGroup): boolean;
							}
							export interface BaseViewInflater<V extends __javaRoots.androidRoot.view.View> extends __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.ViewInflater<V> {}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace inflater {
						export namespace inflaters {
							export class ViewGroupInflater<V extends __javaRoots.androidRoot.view.ViewGroup> extends __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.inflaters.BaseViewInflater<V> {
								public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, resourceParser: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ResourceParser);
								public applyPendingAttributesOfChildren(view: V): void;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace inflater {
						export namespace inflaters {
							export class ViewInflater<V extends __javaRoots.androidRoot.view.View> {
								public constructor(implementation: ViewInflater<V>);
								public constructor();
							}
							export interface ViewInflater<V extends __javaRoots.androidRoot.view.View> {
								readonly creator: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ViewCreator<any>;
								applyPendingAttributes(view: V, parent: __javaRoots.androidRoot.view.ViewGroup): void;
								getCreator(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ViewCreator<any>;
								inflateChildren(inflater: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.DynamicLayoutInflater, node: __javaRoots.orgRoot.w3c.dom.Node, parent: V): boolean;
								setAttr(param0: V, param1: string, param2: string, param3: __javaRoots.androidRoot.view.ViewGroup): boolean;
								setAttr(view: V, ns: string, attrName: string, value: string, parent: __javaRoots.androidRoot.view.ViewGroup): boolean;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace inflater {
						export namespace util {
							export class Drawables {
								public readonly androidResourceResolver: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.AndroidResourceResolver;
								public constructor();
								public decodeImage(context: __javaRoots.androidRoot.content.Context, path: string): __javaRoots.androidRoot.graphics.drawable.Drawable;
								public getAndroidResourceResolver(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.AndroidResourceResolver;
								public static loadBase64Data(data: string): __javaRoots.androidRoot.graphics.Bitmap;
								public parse(context: __javaRoots.androidRoot.content.Context, value: string): __javaRoots.androidRoot.graphics.drawable.Drawable;
								public parse(view: __javaRoots.androidRoot.view.View, name: string): __javaRoots.androidRoot.graphics.drawable.Drawable;
								public setAndroidResourceResolver(_set___: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.AndroidResourceResolver): void;
								public setupWithImage<V extends __javaRoots.androidRoot.widget.ImageView>(view: V, value: string): void;
								public setupWithViewBackground(view: __javaRoots.androidRoot.view.View, value: string): void;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export abstract class EventWebView extends __javaRoots.androidRoot.webkit.WebView {
							public static readonly FILE_CHOOSER_REQUEST_CODE: number;
							public readonly javascriptEventCallback: __javaRoots.orgRoot.autojs.autojs.core.ui.widget.EventWebView.JavaScriptEventCallback;
							public readonly syncWebViewEventCallback: __javaRoots.orgRoot.autojs.autojs.core.ui.widget.EventWebView.SyncViewEventCallback;
							public readonly webViewEventCallback: __javaRoots.orgRoot.autojs.autojs.core.ui.widget.EventWebView.WebViewEventCallback;
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
							public emitEvent(event: string, ...args: any[]): __javaRoots.orgRoot.autojs.autojs.event.EventResult;
							public emitInScope(eventName: string, scope: __javaRoots.kotlinxRoot.coroutines.CoroutineScope, ...args: any[]): __javaRoots.orgRoot.autojs.autojs.event.EventResult;
							public escapeToStr(param0: string): string;
							public evalInternal(code: string): __javaRoots.orgRoot.autojs.autojs.runtime.api.Resolvable;
							public getJavascriptEventCallback(): __javaRoots.orgRoot.autojs.autojs.core.ui.widget.EventWebView.JavaScriptEventCallback;
							public getSyncWebViewEventCallback(): __javaRoots.orgRoot.autojs.autojs.core.ui.widget.EventWebView.SyncViewEventCallback;
							public getWebViewEventCallback(): __javaRoots.orgRoot.autojs.autojs.core.ui.widget.EventWebView.WebViewEventCallback;
							public newPromise(): __javaRoots.orgRoot.autojs.autojs.runtime.api.Resolvable;
							public onError(t: __javaRoots.javaRoot.lang.Throwable): void;
							public sendEventToWebJavaScript(event: string, jsonArgs: string): void;
							public setJavascriptEventCallback(callback: __javaRoots.orgRoot.autojs.autojs.core.ui.widget.EventWebView.JavaScriptEventCallback): void;
							public setSyncEventEnabled(event: string, alwaysSync: boolean): void;
							public setSyncWebViewEventCallback(_set___: __javaRoots.orgRoot.autojs.autojs.core.ui.widget.EventWebView.SyncViewEventCallback): void;
							public setWebViewEventCallback(_set___: __javaRoots.orgRoot.autojs.autojs.core.ui.widget.EventWebView.WebViewEventCallback): void;
						}
						export interface EventWebView extends __javaRoots.orgRoot.autojs.autojs.event.IEventEmitter {}
						export namespace EventWebView {
							export class JavaScriptEventCallback {
								public constructor(implementation: JavaScriptEventCallback);
								public constructor();
							}
							export interface JavaScriptEventCallback {
								onWebJavaScriptEvent(param0: string, param1: string): void;
							}
							export class SyncViewEventCallback {
								public constructor(implementation: SyncViewEventCallback);
								public constructor();
							}
							export interface SyncViewEventCallback {
								onSyncWebViewEvent(param0: __javaRoots.orgRoot.autojs.autojs.event.CoroutineSyncEventHost.Companion.Event): void;
							}
							export class WebViewEventCallback {
								public constructor(implementation: WebViewEventCallback);
								public constructor();
							}
							export interface WebViewEventCallback {
								onWebViewEvent(param0: __javaRoots.orgRoot.autojs.autojs.event.CoroutineSyncEventHost.Companion.Event): void;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsAppBarLayout extends __javaRoots.comRoot.google.android.material.appbar.AppBarLayout {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsButton extends __javaRoots.androidRoot.widget.Button {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
							public text(): string;
							public text(text: string): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsCanvasView extends __javaRoots.androidRoot.view.TextureView {
							public readonly maxListeners: number;
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
							public addListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
							public emit(eventName: string, ...args: any[]): boolean;
							public eventNames(): string[];
							public getMaxListeners(): number;
							public initWithScriptRuntime(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime): void;
							public listenerCount(eventName: string): number;
							public listeners(eventName: string): any[];
							public on(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
							public onSurfaceTextureAvailable(surface: __javaRoots.androidRoot.graphics.SurfaceTexture, width: number, height: number): void;
							public onSurfaceTextureDestroyed(surface: __javaRoots.androidRoot.graphics.SurfaceTexture): boolean;
							public onSurfaceTextureSizeChanged(surface: __javaRoots.androidRoot.graphics.SurfaceTexture, width: number, height: number): void;
							public onSurfaceTextureUpdated(surface: __javaRoots.androidRoot.graphics.SurfaceTexture): void;
							public once(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
							public prependListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
							public prependOnceListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
							public removeAllListeners(): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
							public removeAllListeners(eventName: string): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
							public removeListener(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
							public setMaxFps(maxFps: number): void;
							public setMaxListeners(n: number): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						}
						export interface JsCanvasView extends __javaRoots.androidRoot.view.TextureView.SurfaceTextureListener {}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsCardView extends __javaRoots.androidxRoot.cardview.widget.CardView {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsCheckBox extends __javaRoots.androidxRoot.appcompat.widget.AppCompatCheckBox {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public setChecked(checked: boolean, notify: boolean): void;
							public setOnCheckedChangeListener(listener: __javaRoots.androidRoot.widget.CompoundButton.OnCheckedChangeListener): void;
							public toggle(notify: boolean): void;
							public setChecked(...args: any[]): any;
							public toggle(...args: any[]): any;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsConsoleView extends __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleView {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public onNewLog(logEntry: __javaRoots.orgRoot.autojs.autojs.core.console.ConsoleImpl.LogEntry): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsDatePicker extends __javaRoots.androidRoot.widget.DatePicker {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsDrawerLayout extends __javaRoots.androidxRoot.drawerlayout.widget.DrawerLayout {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsEditText extends __javaRoots.androidRoot.widget.EditText {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public text(): string;
							public text(text: string): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsFloatingActionButton extends __javaRoots.comRoot.google.android.material.floatingactionbutton.FloatingActionButton {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsFrameLayout extends __javaRoots.androidRoot.widget.FrameLayout {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
							public id(id: string): __javaRoots.androidRoot.view.View;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsGridView extends __javaRoots.orgRoot.autojs.autojs.core.ui.widget.JsListView {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsImageButton extends __javaRoots.androidRoot.widget.ImageButton {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsImageView extends __javaRoots.comRoot.makeramen.roundedimageview.RoundedImageView {
							public readonly circle: boolean;
							public readonly drawables: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.util.Drawables;
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyle: number);
							public getDrawables(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.util.Drawables;
							public isCircle(): boolean;
							public setCircle(circle: boolean): void;
							public setDrawables(_set___: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.util.Drawables): void;
							public setSource(uri: string): void;
							public setSource(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsLinearLayout extends __javaRoots.androidRoot.widget.LinearLayout {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
							public id(id: string): __javaRoots.androidRoot.view.View;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsListView {
							public readonly dataSource: any;
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public getDataSource(): any;
							public initWithScriptRuntime(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime): void;
							public setDataSource(dataSource: any): void;
							public setDataSourceAdapter(dataSourceAdapter: __javaRoots.orgRoot.autojs.autojs.core.ui.widget.JsListView.DataSourceAdapter): void;
							public setItemTemplate(inflater: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.DynamicLayoutInflater, itemTemplate: __javaRoots.orgRoot.w3c.dom.Node): void;
							public setOnItemTouchListener(onItemTouchListener: __javaRoots.orgRoot.autojs.autojs.core.ui.widget.JsListView.OnItemTouchListener): void;
						}
						export interface JsListView extends __javaRoots.androidxRoot.recyclerview.widget.RecyclerView {}
						export namespace JsListView {
							export class DataSourceAdapter {
								public constructor(implementation: DataSourceAdapter);
								public constructor();
							}
							export interface DataSourceAdapter {
								getItem(param0: any, param1: number): any;
								getItemCount(param0: any): number;
								setDataSource(param0: any): void;
							}
							export class OnItemTouchListener {
								public constructor(implementation: OnItemTouchListener);
								public constructor();
							}
							export interface OnItemTouchListener {
								onItemClick(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.widget.JsListView, param1: __javaRoots.androidRoot.view.View, param2: any, param3: number): void;
								onItemLongClick(param0: __javaRoots.orgRoot.autojs.autojs.core.ui.widget.JsListView, param1: __javaRoots.androidRoot.view.View, param2: any, param3: number): boolean;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsProgressBar extends __javaRoots.androidRoot.widget.ProgressBar {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsRadioButton extends __javaRoots.androidRoot.widget.RadioButton {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsRadioGroup extends __javaRoots.androidRoot.widget.RadioGroup {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsRatingBar extends __javaRoots.androidRoot.widget.RatingBar {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsRelativeLayout extends __javaRoots.androidRoot.widget.RelativeLayout {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
							public id(id: string): __javaRoots.androidRoot.view.View;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsScrollView extends __javaRoots.androidRoot.widget.ScrollView {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsSeekBar extends __javaRoots.androidRoot.widget.SeekBar {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsSpinner extends __javaRoots.androidxRoot.appcompat.widget.AppCompatSpinner {
							public readonly entryTextColor: number;
							public readonly entryTextSize: number;
							public readonly entryTextStyle: number;
							public readonly textColor: number;
							public readonly textSize: number;
							public readonly textStyle: number;
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, mode: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, mode: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, mode: number, popupTheme: __javaRoots.androidRoot.content.res.Resources.Theme);
							public getEntryTextColor(): number;
							public getEntryTextSize(): number;
							public getEntryTextStyle(): number;
							public getTextColor(): number;
							public getTextSize(): number;
							public getTextStyle(): number;
							public setEntryTextColor(_set___: number): void;
							public setEntryTextSize(_set___: number): void;
							public setEntryTextStyle(_set___: number): void;
							public setTextColor(textColor: number): void;
							public setTextSize(textSize: number): void;
							public setTextStyle(textStyle: number): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsSwitch extends __javaRoots.androidxRoot.appcompat.widget.SwitchCompat {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public setChecked(checked: boolean, notify: boolean): void;
							public setOnCheckedChangeListener(listener: __javaRoots.androidRoot.widget.CompoundButton.OnCheckedChangeListener): void;
							public toggle(notify: boolean): void;
							public setChecked(...args: any[]): any;
							public toggle(...args: any[]): any;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsTabLayout extends __javaRoots.comRoot.google.android.material.tabs.TabLayout {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsTextClock extends __javaRoots.androidRoot.widget.TextClock {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsTextView extends __javaRoots.androidxRoot.appcompat.widget.AppCompatTextView {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public text(): string;
							public text(text: string): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsTimePicker extends __javaRoots.androidRoot.widget.TimePicker {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsToggleButton extends __javaRoots.androidRoot.widget.ToggleButton {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsToolbar extends __javaRoots.androidxRoot.appcompat.widget.Toolbar {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public setupWithDrawer(drawerLayout: __javaRoots.androidxRoot.drawerlayout.widget.DrawerLayout): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsVideoView extends __javaRoots.androidRoot.widget.VideoView {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
							public clearMediaController(): void;
							public resetMediaController(): void;
							public setCustomMediaController(controller: __javaRoots.androidRoot.widget.MediaController): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsViewFlipper extends __javaRoots.androidRoot.widget.ViewFlipper {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsViewPager extends __javaRoots.androidxRoot.viewpager.widget.ViewPager {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public onFinishDynamicInflate(): void;
							public setTitles(titles: string[]): void;
						}
						export interface JsViewPager extends __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ShouldCallOnFinishInflate {}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsViewSwitcher extends __javaRoots.androidRoot.widget.ViewSwitcher {
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace ui {
					export namespace widget {
						export class JsWebView extends __javaRoots.orgRoot.autojs.autojs.core.ui.widget.EventWebView {
							public events: __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
							public jsBridge: __javaRoots.orgRoot.mozilla.javascript.Scriptable;
							public constructor(context: __javaRoots.androidRoot.content.Context);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number);
							public constructor(context: __javaRoots.androidRoot.content.Context, attrs: __javaRoots.androidRoot.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
							public escapeToStr(src: string): string;
							public newPromise(): __javaRoots.orgRoot.autojs.autojs.runtime.api.Resolvable;
							public onError(t: __javaRoots.javaRoot.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace web {
					export class InjectableWebClient extends __javaRoots.androidRoot.webkit.WebViewClient {
						public constructor(context: __javaRoots.orgRoot.mozilla.javascript.Context, scriptable: __javaRoots.orgRoot.mozilla.javascript.Scriptable);
						public inject(script: string): void;
						public inject(script: string, callback: __javaRoots.androidRoot.webkit.ValueCallback<string>): void;
						public injectAndWait(script: string): string;
						public onPageFinished(view: __javaRoots.androidRoot.webkit.WebView, url: string): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace web {
					export class InjectableWebView extends __javaRoots.androidRoot.webkit.WebView {
						public constructor(context: __javaRoots.androidRoot.content.Context, jsCtx: __javaRoots.orgRoot.mozilla.javascript.Context, scriptable: __javaRoots.orgRoot.mozilla.javascript.Scriptable, url: string);
						public inject(script: string): void;
						public inject(script: string, callback: __javaRoots.androidRoot.webkit.ValueCallback<string>): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace core {
				export namespace web {
					export class WebSocket extends __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter {
						public static readonly CODE_BAD_GATEWAY: number;
						public static readonly CODE_CLOSED_NO_STATUS: number;
						public static readonly CODE_CLOSE_ABNORMAL: number;
						public static readonly CODE_CLOSE_GOING_AWAY: number;
						public static readonly CODE_CLOSE_NORMAL: number;
						public static readonly CODE_CLOSE_PROTOCOL_ERROR: number;
						public static readonly CODE_CLOSE_TOO_LARGE: number;
						public static readonly CODE_CLOSE_UNSUPPORTED: number;
						public static readonly CODE_MANDATORY_EXTENSION: number;
						public static readonly CODE_POLICY_VIOLATION: number;
						public static readonly CODE_SERVER_ERROR: number;
						public static readonly CODE_SERVICE_RESTART: number;
						public static readonly CODE_TLS_HANDSHAKE_FAIL: number;
						public static readonly CODE_TRY_AGAIN_LATER: number;
						public static readonly CODE_UNSUPPORTED_PAYLOAD: number;
						public static readonly EVENT_BYTES: string;
						public static readonly EVENT_CLOSED: string;
						public static readonly EVENT_CLOSING: string;
						public static readonly EVENT_FAILURE: string;
						public static readonly EVENT_MAX_REBUILDS: string;
						public static readonly EVENT_MESSAGE: string;
						public static readonly EVENT_OPEN: string;
						public static readonly EVENT_TEXT: string;
						public readonly client: __javaRoots.okhttp3Root.OkHttpClient;
						public readonly url: string;
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, client: __javaRoots.okhttp3Root.OkHttpClient, url: string);
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, client: __javaRoots.okhttp3Root.OkHttpClient, url: string, isInCurrentThread: boolean);
						public cancel(): void;
						public close(): boolean;
						public close(code: number): boolean;
						public close(code: number, reason: string): boolean;
						public close(reason: string): boolean;
						public exitOnClose(): void;
						public exitOnClose(timeout: number): void;
						public exitOnClose(isExitOnClose: boolean): void;
						public getClient(): __javaRoots.okhttp3Root.OkHttpClient;
						public getUrl(): string;
						public on(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.web.WebSocket;
						public static onExit(reason: string): void;
						public once(eventName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.core.web.WebSocket;
						public queueSize(): number;
						public rebuild(): void;
						public rebuild(maxRebuildTimes: number): void;
						public request(): __javaRoots.okhttp3Root.Request;
						public send(text: string): boolean;
						public send(bytes: __javaRoots.okioRoot.ByteString): boolean;
						public close(...args: any[]): any;
						public on(...args: any[]): any;
						public once(...args: any[]): any;
					}
					export interface WebSocket extends __javaRoots.okhttp3Root.WebSocket {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace engine {
				export abstract class JavaScriptEngine extends __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine.AbstractScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.JavaScriptSource> {
					public readonly backingSourcePath: string;
					public readonly execArgv: any;
					public readonly runtime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime;
					public readonly source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
					public readonly sourceDirectory: string;
					public readonly sourcePath: string;
					public readonly sourceUri: string;
					public constructor();
					public destroy(): void;
					public emit(eventName: string, ...args: any[]): void;
					public execute(scriptSource: __javaRoots.orgRoot.autojs.autojs.script.JavaScriptSource): any;
					public getBackingSourcePath(): string;
					public getExecArgv(): any;
					public getRuntime(): __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime;
					public getSource(): __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
					public getSourceDirectory(): string;
					public getSourcePath(): string;
					public getSourceUri(): string;
					public hasFeature(feature: string): boolean;
					public setExecArgv(execArgv: any): void;
					public setRuntime(runtime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime): void;
					public toString(): string;
					public execute(...args: any[]): any;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace engine {
				export class LoopBasedJavaScriptEngine extends __javaRoots.orgRoot.autojs.autojs.engine.RhinoJavaScriptEngine {
					public readonly running: boolean;
					public readonly stopped: boolean;
					public constructor(context: __javaRoots.androidRoot.content.Context);
					public destroy(): void;
					public execute(source: __javaRoots.orgRoot.autojs.autojs.script.JavaScriptSource): any;
					public execute(source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource, callback: __javaRoots.orgRoot.autojs.autojs.engine.LoopBasedJavaScriptEngine.ExecuteCallback): void;
					public forceStop(): void;
					public init(): void;
					public isRunning(): boolean;
					public isStopped(): boolean;
					public execute(...args: any[]): any;
				}
				export namespace LoopBasedJavaScriptEngine {
					export class ExecuteCallback {
						public constructor(implementation: ExecuteCallback);
						public constructor();
					}
					export interface ExecuteCallback {
						onException(param0: __javaRoots.javaRoot.lang.Throwable): void;
						onResult(param0: any): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace engine {
				export class NodePluginScriptRequest {
					public static readonly DEFAULT_TIMEOUT_MS: number;
					public readonly childProcessEnabled: __javaRoots.javaRoot.lang.Boolean;
					public readonly dynamicImportEnabled: __javaRoots.javaRoot.lang.Boolean;
					public readonly env: __javaRoots.javaRoot.util.Map<string, string>;
					public readonly esmEnabled: __javaRoots.javaRoot.lang.Boolean;
					public readonly executionId: string;
					public readonly executionMode: string;
					public readonly inspectorEnabled: boolean;
					public readonly javaInteropEnabled: __javaRoots.javaRoot.lang.Boolean;
					public readonly moduleSourceProvider: __javaRoots.orgRoot.autojs.plugin.nodejs.api.INodeJsModuleSourceProvider;
					public readonly moduleSourceProviderVersion: __javaRoots.javaRoot.lang.Integer;
					public readonly moduleSources: __javaRoots.javaRoot.util.Map<string, string>;
					public readonly rawNodeNetworkModulesEnabled: __javaRoots.javaRoot.lang.Boolean;
					public readonly runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>;
					public readonly sandboxRoot: string;
					public readonly source: string;
					public readonly sourceLineOffset: number;
					public readonly sourceName: string;
					public readonly spawnDepth: number;
					public readonly timeoutMs: number;
					public readonly typeScriptPrecompiledSnapshot: boolean;
					public readonly typeScriptPrecompiledSourceNames: __javaRoots.javaRoot.util.Set<string>;
					public readonly workerThreadsEnabled: __javaRoots.javaRoot.lang.Boolean;
					public readonly workingDirectory: string;
					public readonly workspaceModuleSources: __javaRoots.javaRoot.util.Map<string, string>;
					public constructor(source: string, sourceName: string, sourceLineOffset: number, workingDirectory: string, sandboxRoot: string, executionId: string, executionMode: string, timeoutMs: number, env: __javaRoots.javaRoot.util.Map<string, string>, moduleSources: __javaRoots.javaRoot.util.Map<string, string>, workspaceModuleSources: __javaRoots.javaRoot.util.Map<string, string>, runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>, typeScriptPrecompiledSnapshot: boolean, typeScriptPrecompiledSourceNames: __javaRoots.javaRoot.util.Set<string>, esmEnabled: __javaRoots.javaRoot.lang.Boolean, dynamicImportEnabled: __javaRoots.javaRoot.lang.Boolean, rawNodeNetworkModulesEnabled: __javaRoots.javaRoot.lang.Boolean, inspectorEnabled: boolean, workerThreadsEnabled: __javaRoots.javaRoot.lang.Boolean, childProcessEnabled: __javaRoots.javaRoot.lang.Boolean, javaInteropEnabled: __javaRoots.javaRoot.lang.Boolean, spawnDepth: number, moduleSourceProvider: __javaRoots.orgRoot.autojs.plugin.nodejs.api.INodeJsModuleSourceProvider, moduleSourceProviderVersion: __javaRoots.javaRoot.lang.Integer);
					public component1(): string;
					public component10(): __javaRoots.javaRoot.util.Map<string, string>;
					public component11(): __javaRoots.javaRoot.util.Map<string, string>;
					public component12(): __javaRoots.javaRoot.util.Map<string, string>;
					public component13(): boolean;
					public component14(): __javaRoots.javaRoot.util.Set<string>;
					public component15(): __javaRoots.javaRoot.lang.Boolean;
					public component16(): __javaRoots.javaRoot.lang.Boolean;
					public component17(): __javaRoots.javaRoot.lang.Boolean;
					public component18(): boolean;
					public component19(): __javaRoots.javaRoot.lang.Boolean;
					public component2(): string;
					public component20(): __javaRoots.javaRoot.lang.Boolean;
					public component21(): __javaRoots.javaRoot.lang.Boolean;
					public component22(): number;
					public component23(): __javaRoots.orgRoot.autojs.plugin.nodejs.api.INodeJsModuleSourceProvider;
					public component24(): __javaRoots.javaRoot.lang.Integer;
					public component3(): number;
					public component4(): string;
					public component5(): string;
					public component6(): string;
					public component7(): string;
					public component8(): number;
					public component9(): __javaRoots.javaRoot.util.Map<string, string>;
					public copy(source: string, sourceName: string, sourceLineOffset: number, workingDirectory: string, sandboxRoot: string, executionId: string, executionMode: string, timeoutMs: number, env: __javaRoots.javaRoot.util.Map<string, string>, moduleSources: __javaRoots.javaRoot.util.Map<string, string>, workspaceModuleSources: __javaRoots.javaRoot.util.Map<string, string>, runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>, typeScriptPrecompiledSnapshot: boolean, typeScriptPrecompiledSourceNames: __javaRoots.javaRoot.util.Set<string>, esmEnabled: __javaRoots.javaRoot.lang.Boolean, dynamicImportEnabled: __javaRoots.javaRoot.lang.Boolean, rawNodeNetworkModulesEnabled: __javaRoots.javaRoot.lang.Boolean, inspectorEnabled: boolean, workerThreadsEnabled: __javaRoots.javaRoot.lang.Boolean, childProcessEnabled: __javaRoots.javaRoot.lang.Boolean, javaInteropEnabled: __javaRoots.javaRoot.lang.Boolean, spawnDepth: number, moduleSourceProvider: __javaRoots.orgRoot.autojs.plugin.nodejs.api.INodeJsModuleSourceProvider, moduleSourceProviderVersion: __javaRoots.javaRoot.lang.Integer): __javaRoots.orgRoot.autojs.autojs.engine.NodePluginScriptRequest;
					public equals(other: any): boolean;
					public getChildProcessEnabled(): __javaRoots.javaRoot.lang.Boolean;
					public getDynamicImportEnabled(): __javaRoots.javaRoot.lang.Boolean;
					public getEnv(): __javaRoots.javaRoot.util.Map<string, string>;
					public getEsmEnabled(): __javaRoots.javaRoot.lang.Boolean;
					public getExecutionId(): string;
					public getExecutionMode(): string;
					public getInspectorEnabled(): boolean;
					public getJavaInteropEnabled(): __javaRoots.javaRoot.lang.Boolean;
					public getModuleSourceProvider(): __javaRoots.orgRoot.autojs.plugin.nodejs.api.INodeJsModuleSourceProvider;
					public getModuleSourceProviderVersion(): __javaRoots.javaRoot.lang.Integer;
					public getModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
					public getRawNodeNetworkModulesEnabled(): __javaRoots.javaRoot.lang.Boolean;
					public getRuntimeModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
					public getSandboxRoot(): string;
					public getSource(): string;
					public getSourceLineOffset(): number;
					public getSourceName(): string;
					public getSpawnDepth(): number;
					public getTimeoutMs(): number;
					public getTypeScriptPrecompiledSnapshot(): boolean;
					public getTypeScriptPrecompiledSourceNames(): __javaRoots.javaRoot.util.Set<string>;
					public getWorkerThreadsEnabled(): __javaRoots.javaRoot.lang.Boolean;
					public getWorkingDirectory(): string;
					public getWorkspaceModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
					public hashCode(): number;
					public toString(): string;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace engine {
				export class NodePluginScriptResult {
					public readonly elapsedMs: number;
					public readonly errorCode: string;
					public readonly errorMessage: string;
					public readonly errorName: string;
					public readonly errorStack: string;
					public readonly exitCode: __javaRoots.javaRoot.lang.Integer;
					public readonly nativeValues: __javaRoots.javaRoot.util.Map<string, string>;
					public readonly pid: number;
					public readonly processName: string;
					public readonly resultText: string;
					public readonly sourceName: string;
					public readonly stderr: string;
					public readonly stdout: string;
					public readonly succeeded: boolean;
					public readonly timedOut: boolean;
					public readonly timeoutMs: __javaRoots.javaRoot.lang.Long;
					public readonly workingDirectory: string;
					public constructor(succeeded: boolean, exitCode: __javaRoots.javaRoot.lang.Integer, resultText: string, stdout: string, stderr: string, errorName: string, errorMessage: string, errorStack: string, elapsedMs: number, processName: string, pid: number, sourceName: string, nativeValues: __javaRoots.javaRoot.util.Map<string, string>, errorCode: string, timedOut: boolean, timeoutMs: __javaRoots.javaRoot.lang.Long, workingDirectory: string);
					public component1(): boolean;
					public component10(): string;
					public component11(): number;
					public component12(): string;
					public component13(): __javaRoots.javaRoot.util.Map<string, string>;
					public component14(): string;
					public component15(): boolean;
					public component16(): __javaRoots.javaRoot.lang.Long;
					public component17(): string;
					public component2(): __javaRoots.javaRoot.lang.Integer;
					public component3(): string;
					public component4(): string;
					public component5(): string;
					public component6(): string;
					public component7(): string;
					public component8(): string;
					public component9(): number;
					public copy(succeeded: boolean, exitCode: __javaRoots.javaRoot.lang.Integer, resultText: string, stdout: string, stderr: string, errorName: string, errorMessage: string, errorStack: string, elapsedMs: number, processName: string, pid: number, sourceName: string, nativeValues: __javaRoots.javaRoot.util.Map<string, string>, errorCode: string, timedOut: boolean, timeoutMs: __javaRoots.javaRoot.lang.Long, workingDirectory: string): __javaRoots.orgRoot.autojs.autojs.engine.NodePluginScriptResult;
					public equals(other: any): boolean;
					public getElapsedMs(): number;
					public getErrorCode(): string;
					public getErrorMessage(): string;
					public getErrorName(): string;
					public getErrorStack(): string;
					public getExitCode(): __javaRoots.javaRoot.lang.Integer;
					public getNativeValues(): __javaRoots.javaRoot.util.Map<string, string>;
					public getPid(): number;
					public getProcessName(): string;
					public getResultText(): string;
					public getSourceName(): string;
					public getStderr(): string;
					public getStdout(): string;
					public getSucceeded(): boolean;
					public getTimedOut(): boolean;
					public getTimeoutMs(): __javaRoots.javaRoot.lang.Long;
					public getWorkingDirectory(): string;
					public hashCode(): number;
					public toString(): string;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace engine {
				export class NodeProjectRunner {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner;
					public static buildProjectRequest(launchSource: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchSource): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest;
					public buildProjectRequest(launchSource: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchSource, projectRoot: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest;
					public buildResolvedEntryRequest(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.Request): __javaRoots.orgRoot.autojs.autojs.engine.NodePluginScriptRequest;
					public buildResolvedProjectLaunchRequest(plan: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectLaunchPlan): __javaRoots.orgRoot.autojs.autojs.engine.NodePluginScriptRequest;
					public describe(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.PackageBinRequest, entryFile: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.Descriptor;
					public describe(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.PackageBinRequest, result: __javaRoots.orgRoot.autojs.autojs.engine.NodePluginScriptResult, entryFile: __javaRoots.javaRoot.io.File): string;
					public describe(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.PackageScriptRequest, entryFile: __javaRoots.javaRoot.io.File, binName: string, scriptCommand: string, resolvedCommand: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.Descriptor;
					public describe(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.PackageScriptRequest, result: __javaRoots.orgRoot.autojs.autojs.engine.NodePluginScriptResult, entryFile: __javaRoots.javaRoot.io.File, binName: string, scriptCommand: string, resolvedCommand: string): string;
					public describe(plan: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectLaunchPlan): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.Descriptor;
					public describe(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest, entryFile: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.Descriptor;
					public describe(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest, result: __javaRoots.orgRoot.autojs.autojs.engine.NodePluginScriptResult, entryFile: __javaRoots.javaRoot.io.File): string;
					public describe(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.Request): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.Descriptor;
					public describe(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.Request, result: __javaRoots.orgRoot.autojs.autojs.engine.NodePluginScriptResult): string;
					public describeResolvedEntryRequest(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.Request): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.Descriptor;
					public static isNodeProjectRoot(projectRoot: __javaRoots.javaRoot.io.File): boolean;
					public parsePackageScriptCommand(command: string): __javaRoots.javaRoot.util.List<string>;
					public resolvePackageBinLaunchPlan(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.PackageBinRequest): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectLaunchPlan;
					public resolvePackageBinTarget(packageDir: __javaRoots.javaRoot.io.File, binName: string): __javaRoots.javaRoot.io.File;
					public resolvePackageScriptBinPackageDir(projectRoot: __javaRoots.javaRoot.io.File, packageDir: __javaRoots.javaRoot.io.File, binName: string): __javaRoots.javaRoot.io.File;
					public resolvePackageScriptCommand(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.PackageScriptRequest): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ResolvedPackageScriptCommand;
					public resolvePackageScriptLaunchPlan(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.PackageScriptRequest): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectLaunchPlan;
					public resolveProjectEntryFile(projectRoot: __javaRoots.javaRoot.io.File): __javaRoots.javaRoot.io.File;
					public static resolveProjectEntryFileIfNodeProject(projectRoot: __javaRoots.javaRoot.io.File): __javaRoots.javaRoot.io.File;
					public resolveProjectLaunchPlan(projectRoot: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectLaunchPlan;
					public resolveProjectLaunchPlan(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectLaunchPlan;
					public resolveProjectLaunchPlanWithDescriptor(request: __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectLaunchPlan;
					protected constructor();
				}
				export namespace NodeProjectRunner {
					export class Descriptor {
						public readonly argv: __javaRoots.javaRoot.util.List<string>;
						public readonly binName: string;
						public readonly entryDirective: string;
						public readonly entryFile: string;
						public readonly entrySourceBytes: number;
						public readonly envKeys: __javaRoots.javaRoot.util.List<string>;
						public readonly executionMode: string;
						public readonly kind: string;
						public readonly launchKind: string;
						public readonly moduleSourceBytes: number;
						public readonly moduleSourceCount: number;
						public readonly packageDir: string;
						public readonly processPoolSlot: string;
						public readonly processPoolSlotSource: string;
						public readonly projectRoot: string;
						public readonly resolvedCommand: string;
						public readonly runtimeModuleSourceBytes: number;
						public readonly runtimeModuleSourceCount: number;
						public readonly scriptCommand: string;
						public readonly scriptName: string;
						public readonly timeoutMs: number;
						public readonly workingDirectory: string;
						public constructor(kind: string, launchKind: string, projectRoot: string, entryFile: string, workingDirectory: string, argv: __javaRoots.javaRoot.util.List<string>, envKeys: __javaRoots.javaRoot.util.List<string>, timeoutMs: number, moduleSourceCount: number, moduleSourceBytes: number, runtimeModuleSourceCount: number, runtimeModuleSourceBytes: number, entrySourceBytes: number, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string, packageDir: string, binName: string, scriptName: string, scriptCommand: string, resolvedCommand: string);
						public component1(): string;
						public component10(): number;
						public component11(): number;
						public component12(): number;
						public component13(): number;
						public component14(): string;
						public component15(): string;
						public component16(): string;
						public component17(): string;
						public component18(): string;
						public component19(): string;
						public component2(): string;
						public component20(): string;
						public component21(): string;
						public component22(): string;
						public component3(): string;
						public component4(): string;
						public component5(): string;
						public component6(): __javaRoots.javaRoot.util.List<string>;
						public component7(): __javaRoots.javaRoot.util.List<string>;
						public component8(): number;
						public component9(): number;
						public copy(kind: string, launchKind: string, projectRoot: string, entryFile: string, workingDirectory: string, argv: __javaRoots.javaRoot.util.List<string>, envKeys: __javaRoots.javaRoot.util.List<string>, timeoutMs: number, moduleSourceCount: number, moduleSourceBytes: number, runtimeModuleSourceCount: number, runtimeModuleSourceBytes: number, entrySourceBytes: number, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string, packageDir: string, binName: string, scriptName: string, scriptCommand: string, resolvedCommand: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.Descriptor;
						public equals(other: any): boolean;
						public getArgv(): __javaRoots.javaRoot.util.List<string>;
						public getBinName(): string;
						public getEntryDirective(): string;
						public getEntryFile(): string;
						public getEntrySourceBytes(): number;
						public getEnvKeys(): __javaRoots.javaRoot.util.List<string>;
						public getExecutionMode(): string;
						public getKind(): string;
						public getLaunchKind(): string;
						public getModuleSourceBytes(): number;
						public getModuleSourceCount(): number;
						public getPackageDir(): string;
						public getProcessPoolSlot(): string;
						public getProcessPoolSlotSource(): string;
						public getProjectRoot(): string;
						public getResolvedCommand(): string;
						public getRuntimeModuleSourceBytes(): number;
						public getRuntimeModuleSourceCount(): number;
						public getScriptCommand(): string;
						public getScriptName(): string;
						public getTimeoutMs(): number;
						public getWorkingDirectory(): string;
						public hashCode(): number;
						public toDebugString(): string;
						public toNativeValues(): __javaRoots.javaRoot.util.Map<string, string>;
						public toString(): string;
					}
					export class PackageBinRequest {
						public readonly argv: __javaRoots.javaRoot.util.List<string>;
						public readonly binName: string;
						public readonly entryDirective: string;
						public readonly env: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly executionMode: string;
						public readonly moduleSources: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly packageDir: __javaRoots.javaRoot.io.File;
						public readonly processPoolSlot: string;
						public readonly processPoolSlotSource: string;
						public readonly projectRoot: __javaRoots.javaRoot.io.File;
						public readonly runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly timeoutMs: number;
						public readonly workingDirectory: __javaRoots.javaRoot.io.File;
						public constructor(projectRoot: __javaRoots.javaRoot.io.File, packageDir: __javaRoots.javaRoot.io.File, binName: string, workingDirectory: __javaRoots.javaRoot.io.File, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: number, moduleSources: __javaRoots.javaRoot.util.Map<string, string>, runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string);
						public component1(): __javaRoots.javaRoot.io.File;
						public component10(): string;
						public component11(): string;
						public component12(): string;
						public component13(): string;
						public component2(): __javaRoots.javaRoot.io.File;
						public component3(): string;
						public component4(): __javaRoots.javaRoot.io.File;
						public component5(): __javaRoots.javaRoot.util.List<string>;
						public component6(): __javaRoots.javaRoot.util.Map<string, string>;
						public component7(): number;
						public component8(): __javaRoots.javaRoot.util.Map<string, string>;
						public component9(): __javaRoots.javaRoot.util.Map<string, string>;
						public copy(projectRoot: __javaRoots.javaRoot.io.File, packageDir: __javaRoots.javaRoot.io.File, binName: string, workingDirectory: __javaRoots.javaRoot.io.File, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: number, moduleSources: __javaRoots.javaRoot.util.Map<string, string>, runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.PackageBinRequest;
						public equals(other: any): boolean;
						public getArgv(): __javaRoots.javaRoot.util.List<string>;
						public getBinName(): string;
						public getEntryDirective(): string;
						public getEnv(): __javaRoots.javaRoot.util.Map<string, string>;
						public getExecutionMode(): string;
						public getModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
						public getPackageDir(): __javaRoots.javaRoot.io.File;
						public getProcessPoolSlot(): string;
						public getProcessPoolSlotSource(): string;
						public getProjectRoot(): __javaRoots.javaRoot.io.File;
						public getRuntimeModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
						public getTimeoutMs(): number;
						public getWorkingDirectory(): __javaRoots.javaRoot.io.File;
						public hashCode(): number;
						public toString(): string;
					}
					export class PackageScriptRequest {
						public readonly argv: __javaRoots.javaRoot.util.List<string>;
						public readonly entryDirective: string;
						public readonly env: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly executionMode: string;
						public readonly moduleSources: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly packageDir: __javaRoots.javaRoot.io.File;
						public readonly processPoolSlot: string;
						public readonly processPoolSlotSource: string;
						public readonly projectRoot: __javaRoots.javaRoot.io.File;
						public readonly runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly scriptName: string;
						public readonly timeoutMs: number;
						public readonly workingDirectory: __javaRoots.javaRoot.io.File;
						public constructor(projectRoot: __javaRoots.javaRoot.io.File, packageDir: __javaRoots.javaRoot.io.File, scriptName: string, workingDirectory: __javaRoots.javaRoot.io.File, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: number, moduleSources: __javaRoots.javaRoot.util.Map<string, string>, runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string);
						public component1(): __javaRoots.javaRoot.io.File;
						public component10(): string;
						public component11(): string;
						public component12(): string;
						public component13(): string;
						public component2(): __javaRoots.javaRoot.io.File;
						public component3(): string;
						public component4(): __javaRoots.javaRoot.io.File;
						public component5(): __javaRoots.javaRoot.util.List<string>;
						public component6(): __javaRoots.javaRoot.util.Map<string, string>;
						public component7(): number;
						public component8(): __javaRoots.javaRoot.util.Map<string, string>;
						public component9(): __javaRoots.javaRoot.util.Map<string, string>;
						public copy(projectRoot: __javaRoots.javaRoot.io.File, packageDir: __javaRoots.javaRoot.io.File, scriptName: string, workingDirectory: __javaRoots.javaRoot.io.File, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: number, moduleSources: __javaRoots.javaRoot.util.Map<string, string>, runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.PackageScriptRequest;
						public equals(other: any): boolean;
						public getArgv(): __javaRoots.javaRoot.util.List<string>;
						public getEntryDirective(): string;
						public getEnv(): __javaRoots.javaRoot.util.Map<string, string>;
						public getExecutionMode(): string;
						public getModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
						public getPackageDir(): __javaRoots.javaRoot.io.File;
						public getProcessPoolSlot(): string;
						public getProcessPoolSlotSource(): string;
						public getProjectRoot(): __javaRoots.javaRoot.io.File;
						public getRuntimeModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
						public getScriptName(): string;
						public getTimeoutMs(): number;
						public getWorkingDirectory(): __javaRoots.javaRoot.io.File;
						public hashCode(): number;
						public toString(): string;
					}
					export class ProjectLaunchPlan {
						public readonly argv: __javaRoots.javaRoot.util.List<string>;
						public readonly binName: string;
						public readonly diagnosticArgv: __javaRoots.javaRoot.util.List<string>;
						public readonly diagnosticEnvKeys: __javaRoots.javaRoot.util.List<string>;
						public readonly entryDirective: string;
						public readonly entryFile: __javaRoots.javaRoot.io.File;
						public readonly entrySource: string;
						public readonly env: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly executionMode: string;
						public readonly kind: string;
						public readonly moduleSources: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly packageDir: __javaRoots.javaRoot.io.File;
						public readonly processPoolSlot: string;
						public readonly processPoolSlotSource: string;
						public readonly projectRoot: __javaRoots.javaRoot.io.File;
						public readonly resolvedCommand: string;
						public readonly runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly scriptCommand: string;
						public readonly scriptName: string;
						public readonly timeoutMs: number;
						public readonly workingDirectory: __javaRoots.javaRoot.io.File;
						public constructor(kind: string, projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: number, moduleSources: __javaRoots.javaRoot.util.Map<string, string>, runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>, entrySource: string, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string, diagnosticArgv: __javaRoots.javaRoot.util.List<string>, diagnosticEnvKeys: __javaRoots.javaRoot.util.List<string>, packageDir: __javaRoots.javaRoot.io.File, binName: string, scriptName: string, scriptCommand: string, resolvedCommand: string);
						public component1(): string;
						public component10(): string;
						public component11(): string;
						public component12(): string;
						public component13(): string;
						public component14(): string;
						public component15(): __javaRoots.javaRoot.util.List<string>;
						public component16(): __javaRoots.javaRoot.util.List<string>;
						public component17(): __javaRoots.javaRoot.io.File;
						public component18(): string;
						public component19(): string;
						public component2(): __javaRoots.javaRoot.io.File;
						public component20(): string;
						public component21(): string;
						public component3(): __javaRoots.javaRoot.io.File;
						public component4(): __javaRoots.javaRoot.io.File;
						public component5(): __javaRoots.javaRoot.util.List<string>;
						public component6(): __javaRoots.javaRoot.util.Map<string, string>;
						public component7(): number;
						public component8(): __javaRoots.javaRoot.util.Map<string, string>;
						public component9(): __javaRoots.javaRoot.util.Map<string, string>;
						public copy(kind: string, projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: number, moduleSources: __javaRoots.javaRoot.util.Map<string, string>, runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>, entrySource: string, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string, diagnosticArgv: __javaRoots.javaRoot.util.List<string>, diagnosticEnvKeys: __javaRoots.javaRoot.util.List<string>, packageDir: __javaRoots.javaRoot.io.File, binName: string, scriptName: string, scriptCommand: string, resolvedCommand: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectLaunchPlan;
						public equals(other: any): boolean;
						public getArgv(): __javaRoots.javaRoot.util.List<string>;
						public getBinName(): string;
						public getDiagnosticArgv(): __javaRoots.javaRoot.util.List<string>;
						public getDiagnosticEnvKeys(): __javaRoots.javaRoot.util.List<string>;
						public getEntryDirective(): string;
						public getEntryFile(): __javaRoots.javaRoot.io.File;
						public getEntrySource(): string;
						public getEnv(): __javaRoots.javaRoot.util.Map<string, string>;
						public getExecutionMode(): string;
						public getKind(): string;
						public getModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
						public getPackageDir(): __javaRoots.javaRoot.io.File;
						public getProcessPoolSlot(): string;
						public getProcessPoolSlotSource(): string;
						public getProjectRoot(): __javaRoots.javaRoot.io.File;
						public getResolvedCommand(): string;
						public getRuntimeModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
						public getScriptCommand(): string;
						public getScriptName(): string;
						public getTimeoutMs(): number;
						public getWorkingDirectory(): __javaRoots.javaRoot.io.File;
						public hashCode(): number;
						public toString(): string;
					}
					export class ProjectRequest {
						public readonly argv: __javaRoots.javaRoot.util.List<string>;
						public readonly binName: string;
						public readonly entryDirective: string;
						public readonly entrySource: string;
						public readonly env: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly executionMode: string;
						public readonly moduleSources: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly packageDir: __javaRoots.javaRoot.io.File;
						public readonly processPoolSlot: string;
						public readonly processPoolSlotSource: string;
						public readonly projectRoot: __javaRoots.javaRoot.io.File;
						public readonly runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly scriptName: string;
						public readonly timeoutMs: number;
						public readonly workingDirectory: __javaRoots.javaRoot.io.File;
						public constructor(projectRoot: __javaRoots.javaRoot.io.File, packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, scriptName: string, binName: string, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: number, moduleSources: __javaRoots.javaRoot.util.Map<string, string>, runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>, entrySource: string, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string);
						public component1(): __javaRoots.javaRoot.io.File;
						public component10(): __javaRoots.javaRoot.util.Map<string, string>;
						public component11(): string;
						public component12(): string;
						public component13(): string;
						public component14(): string;
						public component15(): string;
						public component2(): __javaRoots.javaRoot.io.File;
						public component3(): __javaRoots.javaRoot.io.File;
						public component4(): string;
						public component5(): string;
						public component6(): __javaRoots.javaRoot.util.List<string>;
						public component7(): __javaRoots.javaRoot.util.Map<string, string>;
						public component8(): number;
						public component9(): __javaRoots.javaRoot.util.Map<string, string>;
						public copy(projectRoot: __javaRoots.javaRoot.io.File, packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, scriptName: string, binName: string, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: number, moduleSources: __javaRoots.javaRoot.util.Map<string, string>, runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>, entrySource: string, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest;
						public equals(other: any): boolean;
						public getArgv(): __javaRoots.javaRoot.util.List<string>;
						public getBinName(): string;
						public getEntryDirective(): string;
						public getEntrySource(): string;
						public getEnv(): __javaRoots.javaRoot.util.Map<string, string>;
						public getExecutionMode(): string;
						public getModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
						public getPackageDir(): __javaRoots.javaRoot.io.File;
						public getProcessPoolSlot(): string;
						public getProcessPoolSlotSource(): string;
						public getProjectRoot(): __javaRoots.javaRoot.io.File;
						public getRuntimeModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
						public getScriptName(): string;
						public getTimeoutMs(): number;
						public getWorkingDirectory(): __javaRoots.javaRoot.io.File;
						public hashCode(): number;
						public toString(): string;
					}
					export class Request {
						public readonly argv: __javaRoots.javaRoot.util.List<string>;
						public readonly entryDirective: string;
						public readonly entryFile: __javaRoots.javaRoot.io.File;
						public readonly entrySource: string;
						public readonly env: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly executionMode: string;
						public readonly moduleSources: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly processPoolSlot: string;
						public readonly processPoolSlotSource: string;
						public readonly projectRoot: __javaRoots.javaRoot.io.File;
						public readonly runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>;
						public readonly timeoutMs: number;
						public readonly workingDirectory: __javaRoots.javaRoot.io.File;
						public constructor(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: number, moduleSources: __javaRoots.javaRoot.util.Map<string, string>, runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>, entrySource: string, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string);
						public component1(): __javaRoots.javaRoot.io.File;
						public component10(): string;
						public component11(): string;
						public component12(): string;
						public component13(): string;
						public component2(): __javaRoots.javaRoot.io.File;
						public component3(): __javaRoots.javaRoot.io.File;
						public component4(): __javaRoots.javaRoot.util.List<string>;
						public component5(): __javaRoots.javaRoot.util.Map<string, string>;
						public component6(): number;
						public component7(): __javaRoots.javaRoot.util.Map<string, string>;
						public component8(): __javaRoots.javaRoot.util.Map<string, string>;
						public component9(): string;
						public copy(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: number, moduleSources: __javaRoots.javaRoot.util.Map<string, string>, runtimeModuleSources: __javaRoots.javaRoot.util.Map<string, string>, entrySource: string, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.Request;
						public equals(other: any): boolean;
						public getArgv(): __javaRoots.javaRoot.util.List<string>;
						public getEntryDirective(): string;
						public getEntryFile(): __javaRoots.javaRoot.io.File;
						public getEntrySource(): string;
						public getEnv(): __javaRoots.javaRoot.util.Map<string, string>;
						public getExecutionMode(): string;
						public getModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
						public getProcessPoolSlot(): string;
						public getProcessPoolSlotSource(): string;
						public getProjectRoot(): __javaRoots.javaRoot.io.File;
						public getRuntimeModuleSources(): __javaRoots.javaRoot.util.Map<string, string>;
						public getTimeoutMs(): number;
						public getWorkingDirectory(): __javaRoots.javaRoot.io.File;
						public hashCode(): number;
						public toString(): string;
					}
					export class ResolvedPackageScriptCommand {
						public readonly argv: __javaRoots.javaRoot.util.List<string>;
						public readonly binName: string;
						public readonly entryFile: __javaRoots.javaRoot.io.File;
						public readonly resolvedCommand: string;
						public readonly scriptCommand: string;
						public constructor(entryFile: __javaRoots.javaRoot.io.File, argv: __javaRoots.javaRoot.util.List<string>, binName: string, scriptCommand: string, resolvedCommand: string);
						public component1(): __javaRoots.javaRoot.io.File;
						public component2(): __javaRoots.javaRoot.util.List<string>;
						public component3(): string;
						public component4(): string;
						public component5(): string;
						public copy(entryFile: __javaRoots.javaRoot.io.File, argv: __javaRoots.javaRoot.util.List<string>, binName: string, scriptCommand: string, resolvedCommand: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ResolvedPackageScriptCommand;
						public equals(other: any): boolean;
						public getArgv(): __javaRoots.javaRoot.util.List<string>;
						public getBinName(): string;
						public getEntryFile(): __javaRoots.javaRoot.io.File;
						public getResolvedCommand(): string;
						public getScriptCommand(): string;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace engine {
				export class RhinoJavaScriptEngine extends __javaRoots.orgRoot.autojs.autojs.engine.JavaScriptEngine {
					public static readonly JS_BEAUTIFY_FILE: string;
					public static readonly JS_BEAUTIFY_PATH: string;
					public static readonly MODULES_ROOT_PATH: string;
					public static readonly SOURCE_FILE_INIT: string;
					public static readonly SOURCE_NAME_INIT: string;
					public readonly context: __javaRoots.orgRoot.mozilla.javascript.Context;
					public readonly scriptable: __javaRoots.orgRoot.autojs.autojs.rhino.TopLevelScope;
					public readonly thread: __javaRoots.javaRoot.lang.Thread;
					public constructor(androidContext: __javaRoots.androidRoot.content.Context);
					public destroy(): void;
					public doExecution(source: __javaRoots.orgRoot.autojs.autojs.script.JavaScriptSource): any;
					public enterContext(): __javaRoots.orgRoot.mozilla.javascript.Context;
					public forceStop(): void;
					public getContext(): __javaRoots.orgRoot.mozilla.javascript.Context;
					public getScriptable(): __javaRoots.orgRoot.autojs.autojs.rhino.TopLevelScope;
					public getThread(): __javaRoots.javaRoot.lang.Thread;
					public init(): void;
					public put(name: string, value: any): void;
					public setRuntime(runtime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime): void;
					public setupContext(context: __javaRoots.orgRoot.mozilla.javascript.Context): __javaRoots.orgRoot.mozilla.javascript.Context;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace engine {
				export class ScriptEngine<S extends __javaRoots.orgRoot.autojs.autojs.script.ScriptSource> {
					public constructor(implementation: ScriptEngine<S>);
					public constructor();
					public static readonly TAG_ENV_PATH: string;
					public static readonly TAG_SOURCE: string;
					public static readonly TAG_WORKING_DIRECTORY: string;
				}
				export interface ScriptEngine<S extends __javaRoots.orgRoot.autojs.autojs.script.ScriptSource> {
					readonly destroyed: boolean;
					readonly id: number;
					readonly startTime: number;
					cwd(): string;
					destroy(): void;
					execute(param0: S): any;
					forceStop(): void;
					getId(): number;
					getStartTime(): number;
					getTag(param0: string): any;
					getUncaughtException(): __javaRoots.javaRoot.lang.Throwable;
					init(): void;
					isDestroyed(): boolean;
					put(param0: string, param1: any): void;
					setId(param0: number): void;
					setOnDestroyListener(param0: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine.OnDestroyListener): void;
					setTag(param0: string, param1: any): void;
					uncaughtException(param0: __javaRoots.javaRoot.lang.Throwable): void;
				}
				export namespace ScriptEngine {
					export abstract class AbstractScriptEngine<S extends __javaRoots.orgRoot.autojs.autojs.script.ScriptSource> {
						public readonly destroyed: boolean;
						public readonly id: number;
						public constructor();
						public cwd(): string;
						public destroy(): void;
						public getId(): number;
						public getTag(key: string): any;
						public getUncaughtException(): __javaRoots.javaRoot.lang.Throwable;
						public isDestroyed(): boolean;
						public setId(id: number): void;
						public setOnDestroyListener(onDestroyListener: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine.OnDestroyListener): void;
						public setTag(key: string, value: any): void;
						public uncaughtException(throwable: __javaRoots.javaRoot.lang.Throwable): void;
					}
					export interface AbstractScriptEngine<S extends __javaRoots.orgRoot.autojs.autojs.script.ScriptSource> extends __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<S> {}
					export class OnDestroyListener {
						public constructor(implementation: OnDestroyListener);
						public constructor();
					}
					export interface OnDestroyListener {
						onDestroy(param0: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace engine {
				export class ScriptEngineManager {
					public readonly androidContext: __javaRoots.androidRoot.content.Context;
					public readonly engines: __javaRoots.javaRoot.util.Set<__javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>>;
					public constructor(androidContext: __javaRoots.androidRoot.content.Context);
					public createEngine(name: string, id: number): __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>;
					public createEngineOfSource(source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource, id: number): __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>;
					public createEngineOfSourceOrThrow(source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource): __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>;
					public createEngineOfSourceOrThrow(source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource, id: number): __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>;
					public getAndroidContext(): __javaRoots.androidRoot.content.Context;
					public getEngines(): __javaRoots.javaRoot.util.Set<__javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>>;
					public putGlobal(varName: string, value: any): void;
					public registerEngine(name: string, supplier: __javaRoots.orgRoot.autojs.autojs.tool.Supplier<__javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>>): void;
					public removeEngine(engine: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>): void;
					public removeGlobal(varName: string): void;
					public setEngineLifecycleCallback(engineLifecycleCallback: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngineManager.EngineLifecycleCallback): void;
					public stopAll(): number;
					public unregisterEngine(name: string): void;
				}
				export namespace ScriptEngineManager {
					export class EngineLifecycleCallback {
						public constructor(implementation: EngineLifecycleCallback);
						public constructor();
					}
					export interface EngineLifecycleCallback {
						onEngineCreate(param0: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>): void;
						onEngineRemove(param0: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace engine {
				export class ScriptEngineService {
					public readonly engines: __javaRoots.javaRoot.util.Set<__javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>>;
					public readonly globalConsole: __javaRoots.orgRoot.autojs.autojs.runtime.api.Console;
					public readonly languageContext: __javaRoots.androidRoot.content.Context;
					public readonly scriptExecutions: __javaRoots.javaRoot.util.Collection<__javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution>;
					public static readonly instance: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngineService;
					public execute(task: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionTask): __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution;
					public execute(source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution;
					public execute(source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource, listener: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionListener, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution;
					public getEngines(): __javaRoots.javaRoot.util.Set<__javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>>;
					public getGlobalConsole(): __javaRoots.orgRoot.autojs.autojs.runtime.api.Console;
					public static getInstance(): __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngineService;
					public getLanguageContext(): __javaRoots.androidRoot.content.Context;
					public static getModuleNameFromMode(value: __javaRoots.javaRoot.lang.Integer): string;
					public getScriptExecution(id: number): __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution;
					public getScriptExecutions(): __javaRoots.javaRoot.util.Collection<__javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution>;
					public registerEngineLifecycleCallback(engineLifecycleCallback: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngineManager.EngineLifecycleCallback): void;
					public registerGlobalScriptExecutionListener(listener: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionListener): boolean;
					public removeScriptExecution(id: number): void;
					public static setInstance(service: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngineService): void;
					public stopAll(): number;
					public stopAllAndToast(): number;
					public unregisterEngineLifecycleCallback(engineLifecycleCallback: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngineManager.EngineLifecycleCallback): void;
					public unregisterGlobalScriptExecutionListener(listener: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionListener): boolean;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace event {
				export class CoroutineSyncEventHost {
					public readonly alwaysSync: boolean;
					public readonly consumer: __javaRoots.kotlinRoot.jvm.functions.Function1<__javaRoots.orgRoot.autojs.autojs.event.CoroutineSyncEventHost.Companion.Event, __javaRoots.javaRoot.lang.Boolean>;
					public readonly onError: __javaRoots.kotlinRoot.jvm.functions.Function1<__javaRoots.javaRoot.lang.Throwable, __javaRoots.kotlinRoot.Unit>;
					public readonly scope: __javaRoots.kotlinxRoot.coroutines.CoroutineScope;
					public readonly syncEventTable: __javaRoots.javaRoot.util.concurrent.ConcurrentHashMap<string, __javaRoots.javaRoot.lang.Boolean>;
					public constructor(scope: __javaRoots.kotlinxRoot.coroutines.CoroutineScope, consumer: __javaRoots.kotlinRoot.jvm.functions.Function1<any, __javaRoots.javaRoot.lang.Boolean>);
					public emitEvent(event: string, ...args: any[]): __javaRoots.orgRoot.autojs.autojs.event.EventResult;
					public emitInScope(eventName: string, scope: __javaRoots.kotlinxRoot.coroutines.CoroutineScope, ...args: any[]): __javaRoots.orgRoot.autojs.autojs.event.EventResult;
					public getAlwaysSync(): boolean;
					public getConsumer(): __javaRoots.kotlinRoot.jvm.functions.Function1<__javaRoots.orgRoot.autojs.autojs.event.CoroutineSyncEventHost.Companion.Event, __javaRoots.javaRoot.lang.Boolean>;
					public getOnError(): __javaRoots.kotlinRoot.jvm.functions.Function1<__javaRoots.javaRoot.lang.Throwable, __javaRoots.kotlinRoot.Unit>;
					public getScope(): __javaRoots.kotlinxRoot.coroutines.CoroutineScope;
					public getSyncEventTable(): __javaRoots.javaRoot.util.concurrent.ConcurrentHashMap<string, __javaRoots.javaRoot.lang.Boolean>;
					public setAlwaysSync(_set___: boolean): void;
					public setOnError(_set___: __javaRoots.kotlinRoot.jvm.functions.Function1<any, __javaRoots.kotlinRoot.Unit>): void;
				}
				export interface CoroutineSyncEventHost extends __javaRoots.orgRoot.autojs.autojs.event.IEventEmitter {}
				export namespace CoroutineSyncEventHost {
					export namespace Companion {
						export class Event {
							public readonly arguments: any[];
							public readonly consumed: boolean;
							public readonly name: string;
							public readonly result: any;
							public readonly sync: boolean;
							public constructor(arguments: any[], name: string, sync: boolean, consumed: boolean, result: any);
							public component1(): any[];
							public component2(): string;
							public component3(): boolean;
							public component4(): boolean;
							public component5(): any;
							public copy(arguments: any[], name: string, sync: boolean, consumed: boolean, result: any): __javaRoots.orgRoot.autojs.autojs.event.CoroutineSyncEventHost.Companion.Event;
							public equals(other: any): boolean;
							public getArguments(): any[];
							public getConsumed(): boolean;
							public getName(): string;
							public getResult(): any;
							public getSync(): boolean;
							public hashCode(): number;
							public setConsumed(_set___: boolean): void;
							public setResult(_set___: any): void;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace event {
				export class EventResult {
					public readonly callSuper: boolean;
					public readonly result: any;
					public constructor(result: any, callSuper: boolean);
					public component1(): any;
					public component2(): boolean;
					public copy(result: any, callSuper: boolean): __javaRoots.orgRoot.autojs.autojs.event.EventResult;
					public equals(other: any): boolean;
					public getCallSuper(): boolean;
					public getResult(): any;
					public hashCode(): number;
					public toString(): string;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace event {
				export class IEventEmitter {
					public constructor(implementation: IEventEmitter);
					public constructor();
				}
				export interface IEventEmitter {
					emitEvent(param0: string, ...param1: any[]): __javaRoots.orgRoot.autojs.autojs.event.EventResult;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace execution {
				export class ExecutionConfig {
					public static readonly tag: string;
					public readonly arguments: any;
					public readonly delay: number;
					public readonly envPath: string[];
					public readonly intentFlags: number;
					public readonly interval: number;
					public readonly loopTimes: number;
					public readonly path: string[];
					public readonly scriptConfig: __javaRoots.orgRoot.autojs.autojs.project.ScriptConfig;
					public readonly workingDirectory: string;
					public static readonly default: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
					public constructor();
					public constructor(parcel: __javaRoots.androidRoot.os.Parcel);
					public constructor(workingDirectory: string, envPath: string[], intentFlags: number, delay: number, interval: number, loopTimes: number, scriptConfig: __javaRoots.orgRoot.autojs.autojs.project.ScriptConfig);
					public component1(): string;
					public component2(): string[];
					public component3(): number;
					public component4(): number;
					public component5(): number;
					public component6(): number;
					public component7(): __javaRoots.orgRoot.autojs.autojs.project.ScriptConfig;
					public copy(workingDirectory: string, envPath: string[], intentFlags: number, delay: number, interval: number, loopTimes: number, scriptConfig: __javaRoots.orgRoot.autojs.autojs.project.ScriptConfig): __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
					public describeContents(): number;
					public equals(other: any): boolean;
					public getArgument(key: string): any;
					public getArguments(): any;
					public getArguments(): __javaRoots.javaRoot.util.HashMap<string, any>;
					public static getDefault(): __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
					public getDelay(): number;
					public getEnvPath(): string[];
					public getIntentFlags(): number;
					public getInterval(): number;
					public getLoopTimes(): number;
					public getPath(): string[];
					public getScriptConfig(): __javaRoots.orgRoot.autojs.autojs.project.ScriptConfig;
					public static getTag(): string;
					public getWorkingDirectory(): string;
					public hashCode(): number;
					public setArgument(key: string, _object_: any): void;
					public setDelay(_set___: number): void;
					public setEnvPath(_set___: string[]): void;
					public setIntentFlags(_set___: number): void;
					public setInterval(_set___: number): void;
					public setLoopTimes(_set___: number): void;
					public setPath(path: string[]): void;
					public setScriptConfig(_set___: __javaRoots.orgRoot.autojs.autojs.project.ScriptConfig): void;
					public setWorkingDirectory(_set___: string): void;
					public toString(): string;
					public writeToParcel(parcel: __javaRoots.androidRoot.os.Parcel, flags: number): void;
				}
				export interface ExecutionConfig extends __javaRoots.androidRoot.os.Parcelable {}
				export namespace ExecutionConfig {
					export class CREATOR {
						public readonly default: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
						public readonly tag: string;
						public createFromParcel(parcel: __javaRoots.androidRoot.os.Parcel): __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
						public getDefault(): __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
						public getTag(): string;
						public newArray(size: number): __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig[];
						protected constructor();
						public createFromParcel(...args: any[]): any;
						public newArray(...args: any[]): any;
					}
					export interface CREATOR extends __javaRoots.androidRoot.os.Parcelable.Creator<__javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig> {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace execution {
				export class ScriptExecuteActivity extends __javaRoots.androidxRoot.appcompat.app.AppCompatActivity {
					public readonly emitter: __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
					public readonly eventEmitter: __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
					public readonly onActivityResultDelegateMediator: __javaRoots.orgRoot.autojs.autojs.app.OnActivityResultDelegate.Mediator;
					public constructor();
					public emit(event: string, ...args: any[]): void;
					public static execute(context: __javaRoots.androidRoot.content.Context, manager: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngineManager, task: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionTask): __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecuteActivity.ActivityScriptExecution;
					public finish(): void;
					public getEmitter(): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
					public getEventEmitter(): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
					public getOnActivityResultDelegateMediator(): __javaRoots.orgRoot.autojs.autojs.app.OnActivityResultDelegate.Mediator;
					public onCreateOptionsMenu(menu: __javaRoots.androidRoot.view.Menu): boolean;
					public onGenericMotionEvent(event: __javaRoots.androidRoot.view.MotionEvent): boolean;
					public onKeyDown(keyCode: number, event: __javaRoots.androidRoot.view.KeyEvent): boolean;
					public onOptionsItemSelected(item: __javaRoots.androidRoot.view.MenuItem): boolean;
				}
				export interface ScriptExecuteActivity extends __javaRoots.orgRoot.autojs.autojs.app.OnActivityResultDelegate.DelegateHost {}
				export namespace ScriptExecuteActivity {
					export class ActivityScriptExecution extends __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution.AbstractScriptExecution {
						public readonly activityStarted: boolean;
						public readonly engine: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<any>;
						public constructor(mScriptEngineManager: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngineManager, task: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionTask);
						public clearEngine(engine: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<any>): void;
						public createEngine(activity: __javaRoots.androidRoot.app.Activity, source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource): __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<any>;
						public getEngine(): __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<any>;
						public isActivityStarted(): boolean;
						public markActivityStarted(): void;
						public getEngine(...args: any[]): any;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace execution {
				export class ScriptExecution {
					public constructor(implementation: ScriptExecution);
					public constructor();
					public static readonly NO_ID: number;
				}
				export interface ScriptExecution {
					readonly config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
					readonly engine: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>;
					readonly id: number;
					readonly listener: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionListener;
					readonly source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
					getConfig(): __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
					getEngine(): __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>;
					getId(): number;
					getListener(): __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionListener;
					getSource(): __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
				}
				export namespace ScriptExecution {
					export abstract class AbstractScriptExecution {
						public readonly config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
						public readonly engine: __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>;
						public readonly id: number;
						public readonly listener: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionListener;
						public readonly source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
						public constructor(task: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionTask);
						public equals(o: any): boolean;
						public getConfig(): __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
						public getEngine(): __javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>;
						public getId(): number;
						public getListener(): __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionListener;
						public getSource(): __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
						public hashCode(): number;
					}
					export interface AbstractScriptExecution extends __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace execution {
				export class ScriptExecutionListener {
					public constructor(implementation: ScriptExecutionListener);
					public constructor();
				}
				export interface ScriptExecutionListener extends __javaRoots.javaRoot.io.Serializable {
					onException(param0: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution, param1: __javaRoots.javaRoot.lang.Throwable): void;
					onStart(param0: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution): void;
					onSuccess(param0: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution, param1: any): void;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace execution {
				export class ScriptExecutionTask {
					public readonly config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
					public readonly listener: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionListener;
					public readonly source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
					public constructor(source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource, listener: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionListener, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig);
					public getConfig(): __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
					public getListener(): __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionListener;
					public getSource(): __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
					public setExecutionListener(executionListener: __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecutionListener): void;
				}
				export interface ScriptExecutionTask extends __javaRoots.javaRoot.io.Serializable {}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace lang {
				export class ThreadCompat extends __javaRoots.javaRoot.lang.Thread {
					public readonly interrupted: boolean;
					public constructor();
					public constructor(target: __javaRoots.javaRoot.lang.Runnable);
					public constructor(target: __javaRoots.javaRoot.lang.Runnable, name: string);
					public constructor(name: string);
					public constructor(group: __javaRoots.javaRoot.lang.ThreadGroup, target: __javaRoots.javaRoot.lang.Runnable);
					public constructor(group: __javaRoots.javaRoot.lang.ThreadGroup, target: __javaRoots.javaRoot.lang.Runnable, name: string);
					public constructor(group: __javaRoots.javaRoot.lang.ThreadGroup, target: __javaRoots.javaRoot.lang.Runnable, name: string, stackSize: number);
					public constructor(group: __javaRoots.javaRoot.lang.ThreadGroup, name: string);
					public interrupt(): void;
					public static interrupted(): boolean;
					public isInterrupted(): boolean;
					public safeJoin(): void;
					public safeJoin(millis: number): void;
					public safeJoin(millis: number, nanos: number): void;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace model {
				export namespace explorer {
					export class ExplorerItem {
						public constructor(implementation: ExplorerItem);
						public constructor();
					}
					export interface ExplorerItem {
						readonly audioPlayable: boolean;
						readonly executable: boolean;
						readonly externalEditable: boolean;
						readonly imageViewable: boolean;
						readonly installable: boolean;
						readonly mediaMenu: boolean;
						readonly mediaPlayable: boolean;
						readonly name: string;
						readonly parent: __javaRoots.orgRoot.autojs.autojs.model.explorer.ExplorerPage;
						readonly path: string;
						readonly previewable: boolean;
						readonly size: number;
						readonly textEditable: boolean;
						readonly type: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						readonly videoPlayable: boolean;
						canBuildApk(): boolean;
						canCopy(): boolean;
						canDelete(): boolean;
						canMove(): boolean;
						canRename(): boolean;
						canSetAsWorkingDir(): boolean;
						edit(context: __javaRoots.androidRoot.content.Context): boolean;
						edit(view: __javaRoots.androidRoot.view.View): boolean;
						getName(): string;
						getParent(): __javaRoots.orgRoot.autojs.autojs.model.explorer.ExplorerPage;
						getPath(): string;
						getSize(): number;
						getType(): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						install(context: __javaRoots.androidRoot.content.Context): boolean;
						install(view: __javaRoots.androidRoot.view.View): boolean;
						isAudioPlayable(): boolean;
						isExecutable(): boolean;
						isExternalEditable(): boolean;
						isImageViewable(): boolean;
						isInstallable(): boolean;
						isMediaMenu(): boolean;
						isMediaPlayable(): boolean;
						isPreviewable(): boolean;
						isTextEditable(): boolean;
						isVideoPlayable(): boolean;
						lastModified(): number;
						play(context: __javaRoots.androidRoot.content.Context): boolean;
						play(view: __javaRoots.androidRoot.view.View): boolean;
						toScriptFile(): __javaRoots.orgRoot.autojs.autojs.model.script.ScriptFile;
						view(context: __javaRoots.androidRoot.content.Context): boolean;
						view(view: __javaRoots.androidRoot.view.View): boolean;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace model {
				export namespace explorer {
					export class ExplorerPage {
						public constructor(implementation: ExplorerPage);
						public constructor();
					}
					export interface ExplorerPage extends __javaRoots.orgRoot.autojs.autojs.model.explorer.ExplorerItem, __javaRoots.javaRoot.lang.Iterable<__javaRoots.orgRoot.autojs.autojs.model.explorer.ExplorerItem> {
						addChild(param0: __javaRoots.orgRoot.autojs.autojs.model.explorer.ExplorerItem): void;
						copyChildren(param0: __javaRoots.orgRoot.autojs.autojs.model.explorer.ExplorerPage): void;
						removeChild(param0: __javaRoots.orgRoot.autojs.autojs.model.explorer.ExplorerItem): void;
						updateChild(param0: __javaRoots.orgRoot.autojs.autojs.model.explorer.ExplorerItem, param1: __javaRoots.orgRoot.autojs.autojs.model.explorer.ExplorerItem): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace model {
				export namespace script {
					export class ScriptFile extends __javaRoots.orgRoot.autojs.autojs.pio.PFile {
						public static readonly TYPE_AUTO: number;
						public static readonly TYPE_JAVASCRIPT: number;
						public static readonly TYPE_UNKNOWN: number;
						public readonly parentFile: __javaRoots.orgRoot.autojs.autojs.model.script.ScriptFile;
						public readonly type: number;
						public constructor(file: __javaRoots.javaRoot.io.File);
						public constructor(parent: __javaRoots.javaRoot.io.File, child: string);
						public constructor(path: string);
						public constructor(parent: string, name: string);
						public getParentFile(): __javaRoots.orgRoot.autojs.autojs.model.script.ScriptFile;
						public getType(): number;
						public toSource(): __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
						public getParentFile(...args: any[]): any;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace pio {
				export class PFile extends __javaRoots.javaRoot.io.File {
					public readonly extension: string;
					public readonly parentFile: __javaRoots.orgRoot.autojs.autojs.pio.PFile;
					public readonly simplifiedName: string;
					public readonly simplifiedPath: string;
					public constructor(parent: __javaRoots.javaRoot.io.File, child: string);
					public constructor(pathname: string);
					public constructor(parent: string, child: string);
					public constructor(uri: __javaRoots.javaRoot.net.URI);
					public canBuildApk(): boolean;
					public getExtension(): string;
					public static getFullDateString(date: number): string;
					public getParentFile(): __javaRoots.orgRoot.autojs.autojs.pio.PFile;
					public getSimplifiedName(): string;
					public getSimplifiedPath(): string;
					public listFiles(): __javaRoots.orgRoot.autojs.autojs.pio.PFile[];
					public listFiles(filter: __javaRoots.javaRoot.io.FileFilter): __javaRoots.orgRoot.autojs.autojs.pio.PFile[];
					public listFiles(filter: __javaRoots.javaRoot.io.FileFilter, isShowHidden: boolean): __javaRoots.orgRoot.autojs.autojs.pio.PFile[];
					public listFiles(filter: __javaRoots.javaRoot.io.FilenameFilter): __javaRoots.orgRoot.autojs.autojs.pio.PFile[];
					public listFiles(filter: __javaRoots.javaRoot.io.FilenameFilter, isShowHidden: boolean): __javaRoots.orgRoot.autojs.autojs.pio.PFile[];
					public listFiles(isShowHidden: boolean): __javaRoots.orgRoot.autojs.autojs.pio.PFile[];
					public moveTo(to: __javaRoots.orgRoot.autojs.autojs.pio.PFile): boolean;
					public renameTo(newName: string): __javaRoots.orgRoot.autojs.autojs.pio.PFile;
					public renameWithoutExt(newName: string): __javaRoots.orgRoot.autojs.autojs.pio.PFile;
					public getParentFile(...args: any[]): any;
					public listFiles(...args: any[]): any;
					public renameTo(...args: any[]): any;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace pio {
				export class PFileInterface {
					public constructor(implementation: PFileInterface);
					public constructor();
				}
				export interface PFileInterface {
					readonly path: string;
					getPath(): string;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace pio {
				export class PFiles {
					public static readonly DEFAULT_BUFFER_SIZE: number;
					public static readonly DEFAULT_ENCODING: string;
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.pio.PFiles;
					public static append(path: string, text: string): void;
					public static append(path: string, text: string, encoding: string): void;
					public static appendBytes(path: string, bytes: number[]): void;
					public static closeSilently(closeable: __javaRoots.javaRoot.io.Closeable): void;
					public static copy(pathFrom: string, pathTo: string): boolean;
					public copyAsset(context: __javaRoots.androidRoot.content.Context, assetFile: string, path: string): boolean;
					public static copyAssetDir(manager: __javaRoots.androidRoot.content.res.AssetManager, assetsDir: string, toDir: string): void;
					public static copyAssetDir(manager: __javaRoots.androidRoot.content.res.AssetManager, assetsDir: string, toDir: string, list: string[]): void;
					public static copyAssetFile(manager: __javaRoots.androidRoot.content.res.AssetManager, assetFile: string, toPath: string): void;
					public copyAssetToTmpFile(context: __javaRoots.androidRoot.content.Context, path: string): __javaRoots.javaRoot.io.File;
					public copyRaw(context: __javaRoots.androidRoot.content.Context, rawId: number, path: string): boolean;
					public static copyStream(stream: __javaRoots.javaRoot.io.InputStream, path: string): boolean;
					public static create(path: string): boolean;
					public static createIfNotExists(path: string): boolean;
					public static createWithDirs(path: string): boolean;
					public static deleteFilesOfDir(dir: __javaRoots.javaRoot.io.File): boolean;
					public static deleteRecursively(file: __javaRoots.javaRoot.io.File): boolean;
					public static deleteRecursivelyOlderThan(file: __javaRoots.javaRoot.io.File, maxAgeMs: number): boolean;
					public static deleteRecursivelyOlderThan(file: __javaRoots.javaRoot.io.File, maxAgeMs: number, now: number): boolean;
					public static ensureDir(path: string): boolean;
					public static exists(path: string): boolean;
					public static formatSizeWithUnit(bytes: number): string;
					public generateNotExistingPath(path: string, extension: string): string;
					public static getElegantPath(path: string): string;
					public static getElegantPath(path: string, workingDirectory: string, hasPrefix: boolean): string;
					public static getExtension(fileName: string): string;
					public static getHumanReadableSize(bytes: number): string;
					public static getHumanReadableSize(bytes: number, useIecIdentifier: boolean): string;
					public static getName(filePath: string): string;
					public static getNameWithoutExtension(filePath: string): string;
					public static isCachePrefix(path: string): boolean;
					public static isDir(path: string): boolean;
					public static isEmptyDir(path: string): boolean;
					public static isFile(path: string): boolean;
					public static join(base: string, ...paths: string[]): string;
					public static listDir(path: string): string[];
					public static listDir(path: string, filter: __javaRoots.orgRoot.autojs.autojs.tool.Func1<string, __javaRoots.javaRoot.lang.Boolean>): string[];
					public static move(path: string, newPath: string): boolean;
					public static open(path: string): __javaRoots.orgRoot.autojs.autojs.pio.PFileInterface;
					public static open(path: string, mode: string): __javaRoots.orgRoot.autojs.autojs.pio.PFileInterface;
					public static open(path: string, mode: string, encoding: string): __javaRoots.orgRoot.autojs.autojs.pio.PFileInterface;
					public static open(path: string, mode: string, encoding: string, bufferSize: __javaRoots.javaRoot.lang.Integer): __javaRoots.orgRoot.autojs.autojs.pio.PFileInterface;
					public static read(file: __javaRoots.javaRoot.io.File): string;
					public static read(file: __javaRoots.javaRoot.io.File, encoding: string): string;
					public static read(inputStream: __javaRoots.javaRoot.io.InputStream): string;
					public static read(inputStream: __javaRoots.javaRoot.io.InputStream, encoding: string): string;
					public static read(path: string): string;
					public static read(path: string, encoding: string): string;
					public static readAsset(assets: __javaRoots.androidRoot.content.res.AssetManager, path: string): string;
					public readBytes(stream: __javaRoots.javaRoot.io.InputStream): number[];
					public static readBytes(path: string): number[];
					public static remove(path: string): boolean;
					public static removeDir(path: string): boolean;
					public static rename(path: string, newName: string): boolean;
					public static renameWithoutExtension(path: string, newName: string): boolean;
					public renameWithoutExtensionAndReturnNewPath(path: string, newName: string): string;
					public static write(file: __javaRoots.javaRoot.io.File, text: string): void;
					public static write(stream: __javaRoots.javaRoot.io.InputStream, os: __javaRoots.javaRoot.io.OutputStream): void;
					public static write(stream: __javaRoots.javaRoot.io.InputStream, os: __javaRoots.javaRoot.io.OutputStream, close: boolean): void;
					public static write(fileOutputStream: __javaRoots.javaRoot.io.OutputStream, text: string): void;
					public write(outputStream: __javaRoots.javaRoot.io.OutputStream, text: string, encoding: string): void;
					public static write(path: string, text: string): void;
					public static write(path: string, text: string, encoding: string): void;
					public writeBytes(outputStream: __javaRoots.javaRoot.io.OutputStream, bytes: number[]): void;
					public static writeBytes(path: string, bytes: number[]): void;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace pio {
				export class PReadableTextFile {
					public readonly path: string;
					public constructor(path: string);
					public constructor(path: string, encoding: string);
					public constructor(path: string, encoding: string, bufferingSize: number);
					public close(): void;
					public getPath(): string;
					public read(): string;
					public read(size: number): string;
					public readline(): string;
					public readlines(): string[];
				}
				export interface PReadableTextFile extends __javaRoots.javaRoot.io.Closeable, __javaRoots.orgRoot.autojs.autojs.pio.PFileInterface {}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace pio {
				export class PWritableTextFile {
					public readonly path: string;
					public constructor(path: string);
					public constructor(path: string, bufferSize: number);
					public constructor(path: string, encoding: string);
					public constructor(path: string, encoding: string, bufferSize: number);
					public constructor(path: string, encoding: string, bufferingSize: number, append: boolean);
					public constructor(path: string, encoding: string, append: boolean);
					public constructor(path: string, append: boolean);
					public close(): void;
					public flush(): void;
					public getPath(): string;
					public static open(path: string): __javaRoots.orgRoot.autojs.autojs.pio.PWritableTextFile;
					public static open(path: string, encoding: string): __javaRoots.orgRoot.autojs.autojs.pio.PWritableTextFile;
					public static open(path: string, encoding: string, bufferSize: number): __javaRoots.orgRoot.autojs.autojs.pio.PWritableTextFile;
					public static open(path: string, append: boolean): __javaRoots.orgRoot.autojs.autojs.pio.PWritableTextFile;
					public write(str: string): void;
					public writeline(line: string): void;
					public writelines(lines: __javaRoots.javaRoot.util.List<string>): void;
					public writelines(lines: string[]): void;
				}
				export interface PWritableTextFile extends __javaRoots.javaRoot.io.Closeable, __javaRoots.orgRoot.autojs.autojs.pio.PFileInterface {}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace pio {
				export class UncheckedIOException extends __javaRoots.javaRoot.lang.RuntimeException {
					public readonly cause: __javaRoots.javaRoot.io.IOException;
					public constructor(cause: __javaRoots.javaRoot.io.IOException);
					public getCause(): __javaRoots.javaRoot.io.IOException;
					public getCause(...args: any[]): any;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace project {
				export class BuildInfo {
					public readonly buildId: string;
					public readonly buildNumber: number;
					public readonly buildTime: number;
					public constructor();
					public applyOriginalJsonKeys(obj: __javaRoots.comRoot.google.gson.JsonObject, detectConflicts: boolean): void;
					public static generate(buildNumber: number): __javaRoots.orgRoot.autojs.autojs.project.BuildInfo;
					public getBuildId(): string;
					public getBuildNumber(): number;
					public getBuildTime(): number;
					public recordOriginalJsonKey(canonicalKey: string, originalKey: string): void;
					public setBuildId(buildId: string): void;
					public setBuildNumber(buildNumber: number): void;
					public setBuildTime(buildTime: number): void;
				}
				export interface BuildInfo extends __javaRoots.orgRoot.autojs.autojs.project.FuzzyDeserializer.OriginalJsonKeyAware {}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace project {
				export class FuzzyDeserializer<T> {
					public constructor();
					public constructor(detectConflicts: boolean);
					public deserialize(json: __javaRoots.comRoot.google.gson.JsonElement, typeOfT: __javaRoots.javaRoot.lang.reflect.Type, context: __javaRoots.comRoot.google.gson.JsonDeserializationContext): T;
				}
				export interface FuzzyDeserializer<T> extends __javaRoots.comRoot.google.gson.JsonDeserializer<T> {}
				export namespace FuzzyDeserializer {
					export class OriginalJsonKeyAware {
						public constructor(implementation: OriginalJsonKeyAware);
						public constructor();
					}
					export interface OriginalJsonKeyAware {
						recordOriginalJsonKey(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace project {
				export class LaunchConfig {
					public readonly launcherVisible: boolean;
					public readonly logShortcutVisible: boolean;
					public readonly logsVisible: boolean;
					public readonly runOnBoot: boolean;
					public readonly settingsShortcutVisible: boolean;
					public readonly slug: string;
					public readonly splashVisible: boolean;
					public constructor();
					public applyOriginalJsonKeys(json: __javaRoots.comRoot.google.gson.JsonObject, detectConflicts: boolean): void;
					public getSlug(): string;
					public isLauncherVisible(): boolean;
					public isLogShortcutVisible(): boolean;
					public isLogsVisible(): boolean;
					public isRunOnBoot(): boolean;
					public isSettingsShortcutVisible(): boolean;
					public isSplashVisible(): boolean;
					public recordOriginalJsonKey(canonicalKey: string, originalKey: string): void;
					public setLauncherVisible(_set___: boolean): void;
					public setLogShortcutVisible(_set___: boolean): void;
					public setLogsVisible(_set___: boolean): void;
					public setRunOnBoot(_set___: boolean): void;
					public setSettingsShortcutVisible(_set___: boolean): void;
					public setSlug(_set___: string): void;
					public setSplashVisible(_set___: boolean): void;
				}
				export interface LaunchConfig extends __javaRoots.orgRoot.autojs.autojs.project.FuzzyDeserializer.OriginalJsonKeyAware {}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace project {
				export class ProjectConfig {
					public static readonly CONFIG_FILE_NAME: string;
					public static readonly DEFAULT_MAIN_SCRIPT_FILE_NAME: string;
					public static readonly DEFAULT_PERMISSIONS: __javaRoots.javaRoot.util.List<string>;
					public readonly abis: __javaRoots.javaRoot.util.List<string>;
					public readonly assets: __javaRoots.javaRoot.util.List<string>;
					public readonly buildDir: string;
					public readonly buildInfo: __javaRoots.orgRoot.autojs.autojs.project.BuildInfo;
					public readonly excludedDirs: __javaRoots.javaRoot.util.List<__javaRoots.javaRoot.io.File>;
					public readonly features: __javaRoots.javaRoot.util.List<string>;
					public readonly iconBitmapGetter: __javaRoots.javaRoot.util.concurrent.Callable<__javaRoots.androidRoot.graphics.Bitmap>;
					public readonly iconPath: string;
					public readonly keyStore: __javaRoots.orgRoot.autojs.autojs.apkbuilder.keystore.KeyStore;
					public readonly launchConfig: __javaRoots.orgRoot.autojs.autojs.project.LaunchConfig;
					public readonly libs: __javaRoots.javaRoot.util.List<string>;
					/** @deprecated */
					public readonly mainScriptFile: string;
					public readonly mainScriptFileName: string;
					public readonly name: string;
					public readonly nodeConfig: __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig.NodeConfig;
					public readonly packageName: string;
					public readonly permissions: __javaRoots.javaRoot.util.List<string>;
					public readonly projectType: string;
					public readonly signatureScheme: string;
					public readonly sourcePath: string;
					public readonly versionCode: number;
					public readonly versionName: string;
					public constructor();
					public addAsset(assetRelativePath: string): boolean;
					public static configFileOfDir(projectDir: string): string;
					public excludeDir(dirToExclude: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public static fromAssets(context: __javaRoots.androidRoot.content.Context, path: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public static fromFile(file: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public static fromFilePath(path: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public static fromJson(json: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public static fromJsonForExecution(json: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public static fromProjectDir(path: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public static fromProjectDirForExecution(path: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public getAbis(): __javaRoots.javaRoot.util.List<string>;
					public getAssets(): __javaRoots.javaRoot.util.List<string>;
					public getBuildDir(): string;
					public getBuildInfo(): __javaRoots.orgRoot.autojs.autojs.project.BuildInfo;
					public getExcludedDirs(): __javaRoots.javaRoot.util.List<__javaRoots.javaRoot.io.File>;
					public getFeatures(): __javaRoots.javaRoot.util.List<string>;
					public getIconBitmapGetter(): __javaRoots.javaRoot.util.concurrent.Callable<__javaRoots.androidRoot.graphics.Bitmap>;
					public getIconPath(): string;
					public getKeyStore(): __javaRoots.orgRoot.autojs.autojs.apkbuilder.keystore.KeyStore;
					public getLaunchConfig(): __javaRoots.orgRoot.autojs.autojs.project.LaunchConfig;
					public getLibs(): __javaRoots.javaRoot.util.List<string>;
					/** @deprecated */
					public getMainScriptFile(): string;
					public getMainScriptFileName(): string;
					public getName(): string;
					public getNodeConfig(): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig.NodeConfig;
					public getPackageName(): string;
					public getPermissions(): __javaRoots.javaRoot.util.List<string>;
					public getProjectType(): string;
					public getSignatureScheme(): string;
					public getSourcePath(): string;
					public getVersionCode(): number;
					public getVersionName(): string;
					public static isProject(file: __javaRoots.javaRoot.io.File): boolean;
					public static isProject(path: string): boolean;
					public static isProject(page: __javaRoots.orgRoot.autojs.autojs.model.explorer.ExplorerPage): boolean;
					public static normalizeSignatureScheme(input: string): string;
					public recordOriginalJsonKey(canonicalKey: string, originalKey: string): void;
					public setAbis(abis: __javaRoots.javaRoot.util.List<string>): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setAssets(assets: __javaRoots.javaRoot.util.List<string>): void;
					public setBuildInfo(buildInfo: __javaRoots.orgRoot.autojs.autojs.project.BuildInfo): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setFeatures(features: __javaRoots.javaRoot.util.List<string>): void;
					public setIconGetter(getter: __javaRoots.javaRoot.util.concurrent.Callable<__javaRoots.androidRoot.graphics.Bitmap>): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setIconPath(iconPath: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setKeyStore(keyStore: __javaRoots.orgRoot.autojs.autojs.apkbuilder.keystore.KeyStore): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setLaunchConfig(launchConfig: __javaRoots.orgRoot.autojs.autojs.project.LaunchConfig): void;
					public setLibs(libs: __javaRoots.javaRoot.util.List<string>): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setMainScriptFileName(mainScriptFileName: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setName(name: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setNodeConfig(nodeConfig: __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig.NodeConfig): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setPackageName(packageName: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setPermissions(permissions: __javaRoots.javaRoot.util.List<string>): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setProjectType(projectType: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setSignatureScheme(signatureScheme: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setSourcePath(sourcePath: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setVersionCode(versionCode: number): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public setVersionName(versionName: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig;
					public toJson(detectConflicts: boolean): string;
				}
				export interface ProjectConfig extends __javaRoots.orgRoot.autojs.autojs.project.FuzzyDeserializer.OriginalJsonKeyAware {}
				export namespace ProjectConfig {
					export class NodeConfig {
						public readonly backend: string;
						public readonly entryDirective: string;
						public readonly executionMode: string;
						public readonly permissions: __javaRoots.javaRoot.util.List<string>;
						public readonly timeoutMs: __javaRoots.javaRoot.lang.Long;
						public constructor();
						public getBackend(): string;
						public getEntryDirective(): string;
						public getExecutionMode(): string;
						public getPermissions(): __javaRoots.javaRoot.util.List<string>;
						public getTimeoutMs(): __javaRoots.javaRoot.lang.Long;
						public setBackend(backend: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig.NodeConfig;
						public setEntryDirective(entryDirective: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig.NodeConfig;
						public setExecutionMode(executionMode: string): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig.NodeConfig;
						public setPermissions(permissions: __javaRoots.javaRoot.util.List<string>): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig.NodeConfig;
						public setTimeoutMs(timeoutMs: __javaRoots.javaRoot.lang.Long): __javaRoots.orgRoot.autojs.autojs.project.ProjectConfig.NodeConfig;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace project {
				export class ScriptConfig {
					public static readonly FEATURE_CONTINUATION: string;
					public readonly features: __javaRoots.javaRoot.util.List<string>;
					public constructor();
					public constructor(features: __javaRoots.javaRoot.util.List<string>);
					public component1(): __javaRoots.javaRoot.util.List<string>;
					public copy(features: __javaRoots.javaRoot.util.List<string>): __javaRoots.orgRoot.autojs.autojs.project.ScriptConfig;
					public equals(other: any): boolean;
					public getFeatures(): __javaRoots.javaRoot.util.List<string>;
					public hasFeature(feature: string): boolean;
					public hashCode(): number;
					public setFeatures(_set___: __javaRoots.javaRoot.util.List<string>): void;
					public toString(): string;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace rhino {
				export class ArgumentGuards {
					public constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace rhino {
				export class AutoJsContext extends __javaRoots.orgRoot.mozilla.javascript.Context {
					public readonly continuations: __javaRoots.javaRoot.util.HashSet<any>;
					public readonly rhinoJavaScriptEngine: __javaRoots.orgRoot.autojs.autojs.engine.RhinoJavaScriptEngine;
					public constructor(factory: __javaRoots.orgRoot.mozilla.javascript.ContextFactory);
					public captureContinuation(): __javaRoots.orgRoot.mozilla.javascript.ContinuationPending;
					public getContinuations(): __javaRoots.javaRoot.util.HashSet<any>;
					public getRhinoJavaScriptEngine(): __javaRoots.orgRoot.autojs.autojs.engine.RhinoJavaScriptEngine;
					public hasPendingContinuation(): boolean;
					public resumeContinuation(continuation: any, scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, functionResult: any): any;
					public setRhinoJavaScriptEngine(_set___: __javaRoots.orgRoot.autojs.autojs.engine.RhinoJavaScriptEngine): void;
					public resumeContinuation(...args: any[]): any;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace rhino {
				export class NativeJavaObjectWithPrototype extends __javaRoots.orgRoot.mozilla.javascript.NativeJavaObject {
					public constructor();
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any, staticType: __javaRoots.javaRoot.lang.Class<any>);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any, staticType: __javaRoots.javaRoot.lang.Class<any>, isAdapter: boolean);
					public get(name: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable): any;
					public has(name: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable): boolean;
					public put(name: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable, value: any): void;
					public get(...args: any[]): any;
					public has(...args: any[]): any;
					public put(...args: any[]): any;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace rhino {
				export class ProxyJavaObject extends __javaRoots.orgRoot.mozilla.javascript.NativeJavaObject {
					public constructor();
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any, staticType: __javaRoots.javaRoot.lang.Class<any>);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any, staticType: __javaRoots.javaRoot.lang.Class<any>, proxyObject: any);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any, staticType: __javaRoots.javaRoot.lang.Class<any>, proxyObject: any, isAdapter: boolean);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any, staticType: __javaRoots.javaRoot.lang.Class<any>, isAdapter: boolean);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any, proxyObject: any);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any, proxyObject: any, isAdapter: boolean);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, javaObject: any, isAdapter: boolean);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, javaObject: any);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, javaObject: any, staticType: __javaRoots.javaRoot.lang.Class<any>);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, javaObject: any, staticType: __javaRoots.javaRoot.lang.Class<any>, proxyObject: any);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, javaObject: any, staticType: __javaRoots.javaRoot.lang.Class<any>, proxyObject: any, isAdapter: boolean);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, javaObject: any, staticType: __javaRoots.javaRoot.lang.Class<any>, isAdapter: boolean);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, javaObject: any, proxyObject: any);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, javaObject: any, proxyObject: any, isAdapter: boolean);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, javaObject: any, isAdapter: boolean);
					public get(name: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable): any;
					public getWithoutProxy(name: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable): any;
					public put(key: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable, value: any): void;
					public putWithoutProxy(name: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable, value: any): void;
					public get(...args: any[]): any;
					public put(...args: any[]): any;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace rhino {
				export class ProxyObject extends __javaRoots.orgRoot.mozilla.javascript.NativeObject {
					public static readonly AUGMENTED_CUSTOM_TO_STRING_KEY: string;
					public static readonly AUGMENTED_OBJECT_KEY: string;
					public static readonly PROXY_GETTER_KEY: string;
					public static readonly PROXY_OBJECT_KEY: string;
					public static readonly PROXY_SETTER_KEY: string;
					public readonly entries: __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.util.Map.Entry<any, any>>;
					public readonly keys: __javaRoots.javaRoot.util.Set<any>;
					public constructor();
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, getter: __javaRoots.kotlinRoot.jvm.functions.Function1<any, any>, setter: __javaRoots.kotlinRoot.jvm.functions.Function1<any, __javaRoots.orgRoot.mozilla.javascript.Undefined>);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, proxyObject: __javaRoots.orgRoot.mozilla.javascript.NativeObject);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, getter: __javaRoots.kotlinRoot.jvm.functions.Function1<any, any>, setter: __javaRoots.kotlinRoot.jvm.functions.Function1<any, __javaRoots.orgRoot.mozilla.javascript.Undefined>);
					public constructor(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, proxyObject: __javaRoots.orgRoot.mozilla.javascript.NativeObject);
					public entrySet(): __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.util.Map.Entry<any, any>>;
					public get(key: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable): any;
					public getEntries(): __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.util.Map.Entry<any, any>>;
					public getKeys(): __javaRoots.javaRoot.util.Set<any>;
					public getSize(): number;
					public getValues(): __javaRoots.javaRoot.util.Collection<any>;
					public getWithoutProxy(name: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable): any;
					public keySet(): __javaRoots.javaRoot.util.Set<any>;
					public put(key: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable, value: any): void;
					public size(): number;
					public values(): __javaRoots.javaRoot.util.Collection<any>;
					public entrySet(...args: any[]): any;
					public get(...args: any[]): any;
					public keySet(...args: any[]): any;
					public put(...args: any[]): any;
					public values(...args: any[]): any;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace rhino {
				export class TopLevelScope extends __javaRoots.orgRoot.mozilla.javascript.ImporterTopLevel {
					public constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace rhino {
				export namespace continuation {
					export class Continuation {
						public readonly context: __javaRoots.orgRoot.autojs.autojs.rhino.AutoJsContext;
						public readonly pending: __javaRoots.orgRoot.mozilla.javascript.ContinuationPending;
						public readonly scope: __javaRoots.orgRoot.mozilla.javascript.VarScope;
						public constructor(context: __javaRoots.orgRoot.autojs.autojs.rhino.AutoJsContext, scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, mTimer: __javaRoots.orgRoot.autojs.autojs.core.looper.Timer);
						public getContext(): __javaRoots.orgRoot.autojs.autojs.rhino.AutoJsContext;
						public getPending(): __javaRoots.orgRoot.mozilla.javascript.ContinuationPending;
						public getScope(): __javaRoots.orgRoot.mozilla.javascript.VarScope;
						public resumeWith(result: __javaRoots.orgRoot.autojs.autojs.rhino.continuation.Continuation.Result): void;
						public suspend(): __javaRoots.orgRoot.autojs.autojs.rhino.continuation.Continuation.Result;
					}
					export namespace Continuation {
						export class Result {
							public readonly error: any;
							public readonly result: any;
							public constructor(result: any, error: any);
							public static failure(error: any): __javaRoots.orgRoot.autojs.autojs.rhino.continuation.Continuation.Result;
							public static getOrThrow(o: any): any;
							public static handle(o: any): any;
							public static success(result: any): __javaRoots.orgRoot.autojs.autojs.rhino.continuation.Continuation.Result;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export class ConsoleTimeTable {
					public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
					public print(label: string): void;
					public save(label: string): void;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export class IScriptBridges {
					public constructor(implementation: IScriptBridges);
					public constructor();
				}
				export interface IScriptBridges {
					asArray(param0: any): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					call(param0: __javaRoots.orgRoot.mozilla.javascript.Callable, param1: any, param2: any[]): any;
					toArray(param0: __javaRoots.javaRoot.lang.Iterable<any>): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					toPrimitive(param0: any): any;
					toString(param0: any): string;
					toString(...args: any[]): any;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export class ScriptBridges {
					public readonly engine: __javaRoots.orgRoot.autojs.autojs.engine.RhinoJavaScriptEngine;
					public readonly javaPrimitiveWrap: boolean;
					public constructor();
					public asArray(listLike: any): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public call(func: __javaRoots.orgRoot.mozilla.javascript.Callable, target: any, args: any[]): any;
					public getEngine(): __javaRoots.orgRoot.autojs.autojs.engine.RhinoJavaScriptEngine;
					public isJavaPrimitiveWrap(): boolean;
					public setJavaPrimitiveWrap(b: boolean): void;
					public setup(engine: __javaRoots.orgRoot.autojs.autojs.engine.RhinoJavaScriptEngine): void;
					public toArray(o: __javaRoots.javaRoot.lang.Iterable<any>): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public toPrimitive(obj: any): any;
					public toString(obj: any): string;
					public toString(...args: any[]): any;
				}
				export interface ScriptBridges extends __javaRoots.orgRoot.autojs.autojs.runtime.IScriptBridges {}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export class ScriptRuntime {
					public readonly accessibilityBridge: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityBridge;
					public readonly app: __javaRoots.orgRoot.autojs.autojs.runtime.api.AppUtils;
					public augmentedApp: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public augmentedAutojs: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public augmentedOcrMLKit: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public augmentedOcrPaddle: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public augmentedOcrRapid: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public readonly automator: __javaRoots.orgRoot.autojs.autojs.core.accessibility.SimpleActionAutomator;
					public readonly barcode: __javaRoots.orgRoot.autojs.autojs.runtime.api.Barcode;
					public readonly bridges: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptBridges;
					public readonly closeableManager: __javaRoots.orgRoot.autojs.autojs.core.accessibility.monitor.CloseableManager;
					public readonly colors: __javaRoots.orgRoot.autojs.autojs.core.image.Colors;
					public readonly console: __javaRoots.orgRoot.autojs.autojs.core.console.GlobalConsole;
					public consoleProxyObject: __javaRoots.orgRoot.autojs.autojs.rhino.ProxyObject;
					public readonly device: __javaRoots.orgRoot.autojs.autojs.runtime.api.Device;
					public readonly dialogs: __javaRoots.orgRoot.autojs.autojs.runtime.api.Dialogs;
					public readonly engines: __javaRoots.orgRoot.autojs.autojs.runtime.api.Engines;
					public events: __javaRoots.orgRoot.autojs.autojs.runtime.api.Events;
					public readonly files: __javaRoots.orgRoot.autojs.autojs.runtime.api.Files;
					public readonly floaty: __javaRoots.orgRoot.autojs.autojs.runtime.api.Floaty;
					public readonly http: __javaRoots.orgRoot.autojs.autojs.runtime.api.Http;
					public readonly images: __javaRoots.orgRoot.autojs.autojs.runtime.api.Images;
					public loopers: __javaRoots.orgRoot.autojs.autojs.core.looper.Loopers;
					public readonly media: __javaRoots.orgRoot.autojs.autojs.runtime.api.Media;
					public readonly mime: __javaRoots.orgRoot.autojs.autojs.runtime.api.Mime;
					public readonly notice: __javaRoots.orgRoot.autojs.autojs.runtime.api.Notice;
					public readonly ocr: __javaRoots.orgRoot.autojs.autojs.runtime.api.Ocr;
					public readonly ocrRapid: __javaRoots.orgRoot.autojs.autojs.runtime.api.OcrRapid;
					public plugins: __javaRoots.orgRoot.autojs.autojs.runtime.api.Plugins;
					public readonly recorder: __javaRoots.orgRoot.autojs.autojs.runtime.api.Recorder;
					public readonly scale: __javaRoots.orgRoot.autojs.autojs.runtime.api.Scale;
					public sensors: __javaRoots.orgRoot.autojs.autojs.runtime.api.Sensors;
					public readonly shizuku: __javaRoots.orgRoot.autojs.autojs.runtime.api.WrappedShizuku;
					public readonly sqlite: __javaRoots.orgRoot.autojs.autojs.runtime.api.SQLite;
					public threads: __javaRoots.orgRoot.autojs.autojs.runtime.api.Threads;
					public timers: __javaRoots.orgRoot.autojs.autojs.runtime.api.Timers;
					public readonly toaster: __javaRoots.orgRoot.autojs.autojs.runtime.api.Toaster;
					public readonly ui: __javaRoots.orgRoot.autojs.autojs.runtime.api.UI;
					public readonly util: __javaRoots.orgRoot.autojs.autojs.runtime.api.Util;
					public readonly augmentedApp$app: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public readonly augmentedAutojs$app: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public readonly augmentedOcrMLKit$app: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public readonly augmentedOcrPaddle$app: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public readonly augmentedOcrRapid$app: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public readonly clip: string;
					public readonly consoleProxyObject$app: __javaRoots.orgRoot.autojs.autojs.rhino.ProxyObject;
					public readonly consoleTimeTable$app: __javaRoots.orgRoot.autojs.autojs.runtime.ConsoleTimeTable;
					public readonly coroutineContext: __javaRoots.kotlinRoot.coroutines.CoroutineContext;
					public readonly coroutineScope: __javaRoots.kotlinxRoot.coroutines.CoroutineScope;
					public readonly exiting: boolean;
					public readonly info: __javaRoots.orgRoot.autojs.autojs.core.activity.ActivityInfoProvider;
					public readonly javaPrimitiveWrap: boolean;
					public readonly js_Module$app: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public readonly js_Promise$app: __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public readonly js_ResultAdapter$app: __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public readonly js_UiExt$app: __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public readonly js_array_observe_min$app: __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public readonly js_mod_axios$app: __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public readonly js_mod_cheerio$app: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public readonly js_mod_continuation$app: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public readonly js_mod_dayjs$app: __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public readonly js_mod_i18n$app: __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public readonly js_mod_internal$app: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public readonly js_object_observe_lite_min$app: __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public readonly js_structured_clone$app: __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public readonly ownerId: string;
					public readonly rootShell: __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell;
					public readonly screenMetrics: __javaRoots.orgRoot.autojs.autojs.runtime.api.ScreenMetrics;
					public readonly stopped: boolean;
					public readonly topLevelScope: __javaRoots.orgRoot.autojs.autojs.rhino.TopLevelScope;
					public readonly uiHandler: __javaRoots.orgRoot.autojs.autojs.tool.UiHandler;
					public static readonly applicationContext: __javaRoots.androidRoot.content.Context;
					public cancelScriptJobs(): void;
					public createContinuation(): __javaRoots.orgRoot.autojs.autojs.rhino.continuation.Continuation;
					public createContinuation(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable): __javaRoots.orgRoot.autojs.autojs.rhino.continuation.Continuation;
					public exit(): void;
					public exit(e: __javaRoots.javaRoot.lang.Throwable): void;
					public static getApplicationContext(): __javaRoots.androidRoot.content.Context;
					public getAugmentedApp$app(): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public getAugmentedAutojs$app(): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public getAugmentedOcrMLKit$app(): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public getAugmentedOcrPaddle$app(): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public getAugmentedOcrRapid$app(): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public getClip(): string;
					public getConsoleProxyObject$app(): __javaRoots.orgRoot.autojs.autojs.rhino.ProxyObject;
					public getConsoleTimeTable$app(): __javaRoots.orgRoot.autojs.autojs.runtime.ConsoleTimeTable;
					public getCoroutineContext(): __javaRoots.kotlinRoot.coroutines.CoroutineContext;
					public getCoroutineScope(): __javaRoots.kotlinxRoot.coroutines.CoroutineScope;
					public getEvents(): __javaRoots.orgRoot.autojs.autojs.runtime.api.Events;
					public getInfo(): __javaRoots.orgRoot.autojs.autojs.core.activity.ActivityInfoProvider;
					public getJs_Module$app(): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public getJs_Promise$app(): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public getJs_ResultAdapter$app(): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public getJs_UiExt$app(): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public getJs_array_observe_min$app(): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public getJs_mod_axios$app(): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public getJs_mod_cheerio$app(): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public getJs_mod_continuation$app(): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public getJs_mod_dayjs$app(): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public getJs_mod_i18n$app(): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public getJs_mod_internal$app(): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
					public getJs_object_observe_lite_min$app(): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public getJs_structured_clone$app(): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public getLoopers(): __javaRoots.orgRoot.autojs.autojs.core.looper.Loopers;
					public getOwnerId(): string;
					public getPlugins(): __javaRoots.orgRoot.autojs.autojs.runtime.api.Plugins;
					public getProperty(key: string): any;
					public getRootShell(): __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell;
					public getScreenMetrics(): __javaRoots.orgRoot.autojs.autojs.runtime.api.ScreenMetrics;
					public getSensors(): __javaRoots.orgRoot.autojs.autojs.runtime.api.Sensors;
					public static getStackTrace(e: __javaRoots.javaRoot.lang.Throwable, printJavaStackTrace: boolean): string;
					public getThreads(): __javaRoots.orgRoot.autojs.autojs.runtime.api.Threads;
					public getTimers(): __javaRoots.orgRoot.autojs.autojs.runtime.api.Timers;
					public getTopLevelScope(): __javaRoots.orgRoot.autojs.autojs.rhino.TopLevelScope;
					public getUiHandler(): __javaRoots.orgRoot.autojs.autojs.tool.UiHandler;
					public initEpilogue(): void;
					public initPrologue(): void;
					public isExiting(): boolean;
					public isJavaPrimitiveWrap(): boolean;
					public isStopped(): boolean;
					public load(dir: string, isRecursive: boolean): void;
					public load(...path: string[]): void;
					public loadAar(dir: string, isRecursive: boolean): void;
					public loadAar(...paths: string[]): void;
					public loadDex(dir: string, isRecursive: boolean): void;
					public loadDex(...path: string[]): void;
					public loadJar(dir: string, isRecursive: boolean): void;
					public loadJar(...paths: string[]): void;
					public loadJarWithClasspath(program: string, ...orderedClasspath: string[]): void;
					public loadJarWithR8(program: string, keepRules: string[]): void;
					public loadJarWithR8(program: string, keepRules: string[], exportDirectory: string): void;
					public loadJarWithR8(program: string, keepRules: string[], orderedClasspath: string[]): void;
					public loadJarWithR8(program: string, keepRules: string[], orderedClasspath: string[], exportDirectory: string): void;
					public loadJarWithR8(program: string, keepRules: string[], orderedClasspath: string[], consumerRules: string[], consumerRuleClasspathOrdinals: number[]): void;
					public loadJarWithR8(program: string, keepRules: string[], orderedClasspath: string[], consumerRules: string[], consumerRuleClasspathOrdinals: number[], exportDirectory: string): void;
					public onExit(): void;
					public static popException(message: string): void;
					public putProperty(key: string, value: any): any;
					public removeProperty(key: string): any;
					public requestPermissions(permissions: string[]): void;
					public static requiresApi(requiresApi: number): void;
					public retraceR8Stack(obfuscatedStackTrace: string, mapping: string, retraceMetadata: string): string;
					public selector(): __javaRoots.orgRoot.autojs.autojs.core.accessibility.UiSelector;
					public static setApplicationContext(context: __javaRoots.androidRoot.content.Context): void;
					public setAugmentedApp$app(_set___: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject): void;
					public setAugmentedAutojs$app(_set___: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject): void;
					public setAugmentedOcrMLKit$app(_set___: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject): void;
					public setAugmentedOcrPaddle$app(_set___: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject): void;
					public setAugmentedOcrRapid$app(_set___: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject): void;
					public setClip(text: string): void;
					public setConsoleProxyObject$app(_set___: __javaRoots.orgRoot.autojs.autojs.rhino.ProxyObject): void;
					public setEvents(_set___: __javaRoots.orgRoot.autojs.autojs.runtime.api.Events): void;
					public setExiting(_set___: boolean): void;
					public setJavaPrimitiveWrap(b: boolean): void;
					public setLoopers(_set___: __javaRoots.orgRoot.autojs.autojs.core.looper.Loopers): void;
					public setPlugins(_set___: __javaRoots.orgRoot.autojs.autojs.runtime.api.Plugins): void;
					public setScreenMetrics(width: number, height: number): void;
					public setSensors(_set___: __javaRoots.orgRoot.autojs.autojs.runtime.api.Sensors): void;
					public setThreads(_set___: __javaRoots.orgRoot.autojs.autojs.runtime.api.Threads): void;
					public setTimers(_set___: __javaRoots.orgRoot.autojs.autojs.runtime.api.Timers): void;
					public setTopLevelScope(topLevelScope: __javaRoots.orgRoot.autojs.autojs.rhino.TopLevelScope): void;
					public shell(cmd: string, withRoot: number): __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell.Result;
					public sleep(millis: number): void;
					/** @deprecated */
					public stop(): void;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace accessibility {
					export class AccessibilityConfig {
						public static readonly unintendedGuardEnabled: boolean;
						public constructor();
						public addBlacklist(packageName: string): void;
						public isInBlacklist(packageName: string): boolean;
						public static isUnintendedGuardEnabled(): boolean;
						public seal(): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export abstract class AbstractConsole {
						public constructor();
						public assertTrue(value: boolean, data: any): void;
						public assertTrue(value: boolean, data: any, ...formatArgs: any[]): void;
						public error(data: any): void;
						public error(data: any, ...formatArgs: any[]): void;
						public format(data: any, ...formatArgs: any[]): string;
						public info(data: any): void;
						public info(data: any, ...formatArgs: any[]): void;
						public log(data: any): void;
						public log(data: any, ...formatArgs: any[]): void;
						public print(level: number, data: any): void;
						public print(level: number, data: any, ...formatArgs: any[]): void;
						public printf(level: number, data: any, ...formatArgs: any[]): void;
						public verbose(data: any): void;
						public verbose(data: any, ...formatArgs: any[]): void;
						public warn(data: any): void;
						public warn(data: any, ...formatArgs: any[]): void;
					}
					export interface AbstractConsole extends __javaRoots.orgRoot.autojs.autojs.runtime.api.Console {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export abstract class AbstractShell {
						public static readonly COMMAND_EXIT: string;
						public static readonly COMMAND_LINE_END: string;
						public static readonly COMMAND_SH: string;
						public static readonly COMMAND_SU: string;
						public readonly execWithRoot: boolean;
						public constructor();
						public constructor(context: __javaRoots.androidRoot.content.Context, isExecWithRoot: boolean);
						public constructor(isExecWithRoot: boolean);
						public Back(): void;
						public Camera(): void;
						public Down(): void;
						public Home(): void;
						public Input(text: string): void;
						public KeyCode(keyCode: number): void;
						public KeyCode(keyCode: string): void;
						public Left(): void;
						public Menu(): void;
						public OK(): void;
						public Power(): void;
						public Right(): void;
						public Screencap(path: string): void;
						public SendEvent(_type_: number, code: number, value: number): void;
						public SendEvent(device: number, _type_: number, code: number, value: number): void;
						public SetScreenMetrics(width: number, height: number): void;
						public SetScreenMetrics(screenMetrics: __javaRoots.orgRoot.autojs.autojs.runtime.api.ScreenMetrics): void;
						public SetTouchDevice(touchDevice: number): void;
						public Swipe(x1: number, y1: number, x2: number, y2: number): void;
						public Swipe(x1: number, y1: number, x2: number, y2: number, time: number): void;
						public Tap(x: number, y: number): void;
						public Text(text: string): void;
						public Touch(x: number, y: number): void;
						public TouchX(x: number): void;
						public TouchY(y: number): void;
						public Up(): void;
						public VolumeDown(): void;
						public VolumeUp(): void;
						public exec(param0: string): void;
						public exit(): void;
						public exitAndWaitFor(): void;
						public isExecWithRoot(): boolean;
						public sleep(i: number): void;
						public usleep(l: number): void;
					}
					export namespace AbstractShell {
						export class Result {
							public code: number;
							public error: string;
							public result: string;
							public constructor();
							public constructor(code: number);
							public constructor(code: number, e: __javaRoots.javaRoot.lang.Exception);
							public constructor(code: number, result: string);
							public constructor(code: number, result: string, error: string);
							public constructor(code: number, shell: __javaRoots.orgRoot.autojs.autojs.runtime.api.ProcessShell);
							public static fromJson(json: string): __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell.Result;
							public throwIfError(): void;
							public toJson(): string;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class AppUtils {
						public static readonly ACTIVITY_SHORT_FORM_PREFIX: string;
						public static readonly BROADCAST_SHORT_FORM_PREFIX: string;
						public readonly currentActivity: __javaRoots.androidRoot.app.Activity;
						public readonly fileProviderAuthority: string;
						public constructor(context: __javaRoots.androidRoot.content.Context, fileProviderAuthority: string);
						public editFile(path: string): boolean;
						public ensureInstalled(packageName: string): void;
						public ensureInstalled(app: __javaRoots.orgRoot.autojs.autojs.util.App): void;
						public static generateNextVersionInfo(packageName: string): __javaRoots.orgRoot.autojs.autojs.runtime.api.AppUtils.Companion.SimpleVersionInfo;
						public getAppName(packageName: string): string;
						public getCurrentActivity(): __javaRoots.androidRoot.app.Activity;
						public getFileProviderAuthority(): string;
						public static getInstalledAppIcon(packageName: string): __javaRoots.androidRoot.graphics.drawable.Drawable;
						public getPackageName(appName: string): string;
						public static isActivityShortForm(s: string): boolean;
						public static isBroadcastShortForm(s: string): boolean;
						public isInstalled(packageName: string): boolean;
						public isInstalledAndEnabled(packageName: string): boolean;
						public launch(o: any): boolean;
						public launchApp(appName: string): boolean;
						public launchPackage(o: string): boolean;
						public launchPackage(app: __javaRoots.orgRoot.autojs.autojs.util.App): boolean;
						public launchSettings(packageName: string): boolean;
						public openUrl(url: string): void;
						public openUrl(url: __javaRoots.javaRoot.net.URI): void;
						public sendLocalBroadcastSync(intent: __javaRoots.androidRoot.content.Intent): void;
						public setCurrentActivity(currentActivity: __javaRoots.androidRoot.app.Activity): void;
						public uninstall(packageName: string): void;
						public viewFile(path: string): boolean;
					}
					export namespace AppUtils {
						export namespace Companion {
							export class SimpleVersionInfo {
								public readonly versionCode: number;
								public readonly versionCodeString: string;
								public readonly versionName: string;
								public constructor(versionName: string, versionCode: number);
								public component1(): string;
								public component2(): number;
								public copy(versionName: string, versionCode: number): __javaRoots.orgRoot.autojs.autojs.runtime.api.AppUtils.Companion.SimpleVersionInfo;
								public equals(other: any): boolean;
								public hashCode(): number;
								public toString(): string;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Barcode {
						public static readonly FORMAT_NAME_UNKNOWN: string;
						public static readonly TYPE_NAME_UNKNOWN: string;
						public constructor();
						public detect(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, formats: number[], enableAllPotentialBarcodes: boolean, onlyOneResult: boolean): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.runtime.api.WrappedBarcode>;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Console {
						public constructor(implementation: Console);
						public constructor();
					}
					export interface Console {
						assertTrue(value: boolean, data: any): void;
						assertTrue(param0: boolean, param1: any, ...param2: any[]): void;
						clear(): void;
						error(data: any): void;
						error(param0: any, ...param1: any[]): void;
						hide(): void;
						info(data: any): void;
						info(param0: any, ...param1: any[]): void;
						log(data: any): void;
						log(param0: any, ...param1: any[]): void;
						print(level: number, data: any): void;
						print(param0: number, param1: any, ...param2: any[]): void;
						println(param0: number, param1: string): string;
						setPosition(param0: number, param1: number): void;
						setSize(param0: number, param1: number): void;
						setTitle(param0: string): void;
						setTouchable(param0: boolean): void;
						show(): void;
						verbose(data: any): void;
						verbose(param0: any, ...param1: any[]): void;
						warn(data: any): void;
						warn(param0: any, ...param1: any[]): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Device {
						public static readonly baseOS: string;
						public static readonly board: string;
						public static readonly bootloader: string;
						public static readonly brand: string;
						public readonly brands: __javaRoots.orgRoot.autojs.autojs.util.RomUtils.Brand;
						public static readonly buildDisplay: string;
						public static readonly buildId: string;
						public static readonly codename: string;
						public static readonly device: string;
						public static readonly fingerprint: string;
						public static readonly hardware: string;
						public static imei: string;
						public static readonly incremental: string;
						public static readonly manufacturer: string;
						public readonly manufacturers: __javaRoots.orgRoot.autojs.autojs.runtime.api.Device.Manufacturers;
						public static readonly model: string;
						public static readonly product: string;
						public static readonly release: string;
						public readonly roms: __javaRoots.orgRoot.autojs.autojs.util.RomUtils;
						public static readonly sdkInt: number;
						public static readonly securityPatch: string;
						public static serial: string;
						public readonly IMEI: string;
						public readonly alarmMaxVolume: number;
						public readonly alarmVolume: number;
						public readonly androidId: string;
						public readonly availMem: number;
						public readonly battery: number;
						public readonly brightness: number;
						public readonly brightnessMode: number;
						public readonly charging: boolean;
						public readonly macAddress: string;
						public readonly marketName: string;
						public readonly musicMaxVolume: number;
						public readonly musicVolume: number;
						public readonly notificationMaxVolume: number;
						public readonly notificationVolume: number;
						public readonly orientation: number;
						public readonly powerSourceAC: boolean;
						public readonly powerSourceDock: boolean;
						public readonly powerSourceUSB: boolean;
						public readonly powerSourceWireless: boolean;
						public readonly rotation: number;
						public readonly screenLandscape: boolean;
						public readonly screenOn: boolean;
						public readonly screenPortrait: boolean;
						public readonly serial: string;
						public readonly totalMem: number;
						public constructor(context: __javaRoots.androidRoot.content.Context);
						public cancelKeepingAwake(): void;
						public cancelVibration(): void;
						public static doVibrate(millis: number): void;
						public static doVibrate(off: number, millis: number): void;
						public static doVibrate(timings: number[]): void;
						public ensureReadPhoneStatePermission(): void;
						public getAlarmMaxVolume(): number;
						public getAlarmVolume(): number;
						public getAndroidId(): string;
						public getAvailMem(): number;
						public getBattery(): number;
						public getBrightness(): number;
						public getBrightnessMode(): number;
						public getIMEI(): string;
						public getMacAddress(): string;
						public getMarketName(): string;
						public getMusicMaxVolume(): number;
						public getMusicVolume(): number;
						public getNotificationMaxVolume(): number;
						public getNotificationVolume(): number;
						public getOrientation(): number;
						public getRotation(): number;
						public getSerial(): string;
						public getTotalMem(): number;
						public hasReadPhoneStatePermission(): boolean;
						public isCharging(): boolean;
						public isManufacturer(manufacturer: string): boolean;
						public isPowerSourceAC(): boolean;
						public isPowerSourceDock(): boolean;
						public isPowerSourceUSB(): boolean;
						public isPowerSourceWireless(): boolean;
						public isScreenLandscape(): boolean;
						public isScreenOn(): boolean;
						public isScreenPortrait(): boolean;
						public keepAwake(flags: number): void;
						public keepAwake(flags: number, timeout: number): void;
						public keepScreenDim(): void;
						public keepScreenDim(timeout: number): void;
						public keepScreenOn(): void;
						public keepScreenOn(timeout: number): void;
						public setAlarmVolume(i: number): void;
						public setBrightness(b: number): void;
						public setBrightnessMode(b: number): void;
						public setMusicVolume(i: number): void;
						public setNotificationVolume(i: number): void;
						public toString(): string;
						public vibrate(millis: number): void;
						public vibrate(off: number, millis: number): void;
						public vibrate(timings: number[]): void;
						public wakeUp(): void;
						public wakeUpIfNeeded(): void;
					}
					export namespace Device {
						export class Manufacturers {
							public readonly LG: boolean;
							public readonly coolpad: boolean;
							public readonly honor: boolean;
							public readonly htc: boolean;
							public readonly huawei: boolean;
							public readonly lenovo: boolean;
							public readonly letv: boolean;
							public readonly meizu: boolean;
							public readonly nova: boolean;
							public readonly onePlus: boolean;
							public readonly oppo: boolean;
							public readonly samsung: boolean;
							public readonly smartisan: boolean;
							public readonly sony: boolean;
							public readonly vivo: boolean;
							public readonly xiaomi: boolean;
							public readonly zte: boolean;
							public constructor(this$0: __javaRoots.orgRoot.autojs.autojs.runtime.api.Device);
							public isCoolpad(): boolean;
							public isHonor(): boolean;
							public isHtc(): boolean;
							public isHuawei(): boolean;
							public isLG(): boolean;
							public isLenovo(): boolean;
							public isLetv(): boolean;
							public isMeizu(): boolean;
							public isNova(): boolean;
							public isOnePlus(): boolean;
							public isOppo(): boolean;
							public isSamsung(): boolean;
							public isSmartisan(): boolean;
							public isSony(): boolean;
							public isVivo(): boolean;
							public isXiaomi(): boolean;
							public isZte(): boolean;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Dialogs {
						public readonly nonUiDialogs: __javaRoots.orgRoot.autojs.autojs.runtime.api.Dialogs.NonUiDialogs;
						public constructor(runtime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public alert(title: string, content: string, callback: __javaRoots.orgRoot.mozilla.javascript.Callable): any;
						public confirm(title: string, content: string, callback: __javaRoots.orgRoot.mozilla.javascript.Callable): any;
						public multiChoice(title: string, indices: number[], items: string[], callback: __javaRoots.orgRoot.mozilla.javascript.Callable): any;
						public newBuilder(): __javaRoots.orgRoot.autojs.autojs.core.ui.dialog.JsDialogBuilder;
						public rawInput(title: string, prefill: string, callback: __javaRoots.orgRoot.mozilla.javascript.Callable): any;
						public select(title: string, items: string[], callback: __javaRoots.orgRoot.mozilla.javascript.Callable): any;
						public selectFile(title: string, prefill: string, callback: __javaRoots.orgRoot.mozilla.javascript.Callable): any;
						public singleChoice(title: string, selectedIndex: number, items: string[], callback: __javaRoots.orgRoot.mozilla.javascript.Callable): any;
					}
					export namespace Dialogs {
						export class NonUiDialogs {
							public constructor(this$0: __javaRoots.orgRoot.autojs.autojs.runtime.api.Dialogs);
							public alert(title: string, content: string, callback: __javaRoots.orgRoot.mozilla.javascript.Callable): any;
							public confirm(title: string, content: string, callback: __javaRoots.orgRoot.mozilla.javascript.Callable): boolean;
							public multiChoice(title: string, indices: number[], items: string[], callback: __javaRoots.orgRoot.mozilla.javascript.Callable): number[];
							public rawInput(title: string, prefill: string, callback: __javaRoots.orgRoot.mozilla.javascript.Callable): string;
							public select(title: string, items: string[], callback: __javaRoots.orgRoot.mozilla.javascript.Callable): number;
							public singleChoice(title: string, selectedIndex: number, items: string[], callback: __javaRoots.orgRoot.mozilla.javascript.Callable): number;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Engines {
						public readonly engines: __javaRoots.javaRoot.util.Set<__javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>>;
						public constructor(mScriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public all(): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
						public static createExecScriptFileExecutionConfig(launch: __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
						public execAutoFile(path: string, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution;
						public execScript(name: string, script: string, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution;
						public execScriptFile(path: string, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.execution.ScriptExecution;
						public getEngines(): __javaRoots.javaRoot.util.Set<__javaRoots.orgRoot.autojs.autojs.engine.ScriptEngine<__javaRoots.orgRoot.autojs.autojs.script.ScriptSource>>;
						public myEngine(): __javaRoots.orgRoot.autojs.autojs.engine.JavaScriptEngine;
						public setCurrentEngine(engine: __javaRoots.orgRoot.autojs.autojs.engine.JavaScriptEngine): void;
						public stopAll(): number;
						public stopAllAndToast(): number;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Events extends __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter {
						public readonly broadcast: __javaRoots.orgRoot.autojs.autojs.core.broadcast.BroadcastEmitter;
						public readonly touchEventTimeout: number;
						public constructor(context: __javaRoots.androidRoot.content.Context, accessibilityBridge: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityBridge, runtime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public emitter(): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public emitter(thread: __javaRoots.javaRoot.lang.Thread): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public emitter(mainThreadProxy: __javaRoots.orgRoot.autojs.autojs.core.looper.MainThreadProxy): __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter;
						public getTouchEventTimeout(): number;
						public observeKey(): void;
						public observeNotification(): void;
						public observeToast(): void;
						public observeTouch(): void;
						public onGesture(gestureId: number): void;
						public onKeyDown(keyName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.runtime.api.Events;
						public onKeyEvent(keyCode: number, event: __javaRoots.androidRoot.view.KeyEvent): void;
						public onKeyUp(keyName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.runtime.api.Events;
						public onNotification(notification: __javaRoots.orgRoot.autojs.autojs.core.notification.Notification): void;
						public onNotification(listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.runtime.api.Events;
						public onToast(toast: __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityNotificationObserver.Toast): void;
						public onToast(listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.runtime.api.Events;
						public onTouch(x: number, y: number): void;
						public onTouch(listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.runtime.api.Events;
						public onceKeyDown(keyName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.runtime.api.Events;
						public onceKeyUp(keyName: string, listener: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.autojs.autojs.runtime.api.Events;
						public recycle(): void;
						public removeAllKeyDownListeners(keyName: string): __javaRoots.orgRoot.autojs.autojs.runtime.api.Events;
						public removeAllKeyUpListeners(keyName: string): __javaRoots.orgRoot.autojs.autojs.runtime.api.Events;
						public removeAllTouchListeners(): __javaRoots.orgRoot.autojs.autojs.runtime.api.Events;
						public removeNotificationObserver(): void;
						public removeToastObserver(): void;
						public setKeyInterceptionEnabled(key: string, enabled: boolean): void;
						public setKeyInterceptionEnabled(enabled: boolean): void;
						public setTouchEventTimeout(touchEventTimeout: number): void;
						public onNotification(...args: any[]): any;
						public onToast(...args: any[]): any;
						public onTouch(...args: any[]): any;
					}
					export interface Events extends __javaRoots.orgRoot.autojs.autojs.core.accessibility.OnKeyListener, __javaRoots.orgRoot.autojs.autojs.core.inputevent.TouchObserver.OnTouchEventListener, __javaRoots.orgRoot.autojs.autojs.core.accessibility.NotificationListener, __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityNotificationObserver.ToastListener, __javaRoots.orgRoot.autojs.autojs.core.accessibility.AccessibilityService.Companion.GestureListener {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Files {
						public readonly context: __javaRoots.androidRoot.content.Context;
						public readonly sdcardPath: string;
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public append(path: string, text: string): void;
						public append(path: string, text: string, encoding: string): void;
						public appendBytes(path: string, bytes: number[]): void;
						public copy(pathFrom: string, pathTo: string): boolean;
						public create(path: string): boolean;
						public createIfNotExists(path: string): boolean;
						public createWithDirs(path: string): boolean;
						public cwd(): string;
						public ensureDir(path: string): boolean;
						public exists(path: string): boolean;
						public formatSizeWithUnit(bytes: number): string;
						public getContext(): __javaRoots.androidRoot.content.Context;
						public getExtension(fileName: string): string;
						public getHumanReadableSize(bytes: number): string;
						public getHumanReadableSize(bytes: number, useIecIdentifier: boolean): string;
						public getName(filePath: string): string;
						public getNameWithoutExtension(filePath: string): string;
						public getSdcardPath(): string;
						public getSimplifiedPath(path: string): string;
						public isDir(path: string): boolean;
						public isEmptyDir(path: string): boolean;
						public isFile(path: string): boolean;
						public static join(parent: string, ...child: string[]): string;
						public listDir(path: string): string[];
						public listDir(path: string, filter: __javaRoots.orgRoot.autojs.autojs.tool.Func1<string, __javaRoots.javaRoot.lang.Boolean>): string[];
						public move(path: string, newPath: string): boolean;
						public nonNullPath(relativePath: string): string;
						public open(): __javaRoots.orgRoot.autojs.autojs.pio.PFileInterface;
						public open(path: string): __javaRoots.orgRoot.autojs.autojs.pio.PFileInterface;
						public open(path: string, mode: string): __javaRoots.orgRoot.autojs.autojs.pio.PFileInterface;
						public open(path: string, mode: string, encoding: string): __javaRoots.orgRoot.autojs.autojs.pio.PFileInterface;
						public open(path: string, mode: string, encoding: string, bufferSize: __javaRoots.javaRoot.lang.Integer): __javaRoots.orgRoot.autojs.autojs.pio.PFileInterface;
						public path(relativePath: string): string;
						public read(path: string): string;
						public read(path: string, encoding: string): string;
						public readAssets(fileName: string): string;
						public readAssets(fileName: string, encoding: string): string;
						public readBytes(path: string): number[];
						public remove(path: string): boolean;
						public removeDir(path: string): boolean;
						public rename(path: string, newName: string): boolean;
						public renameWithoutExtension(path: string, newName: string): boolean;
						public write(path: string, text: string): void;
						public write(path: string, text: string, encoding: string): void;
						public writeBytes(path: string, bytes: number[]): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Floaty {
						public constructor(uiHandler: __javaRoots.orgRoot.autojs.autojs.tool.UiHandler, scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public closeAll(): void;
						public ensurePermission(): void;
						public getClip(maxDelayAfterWindowReady: number): string;
						public hasPermission(): boolean;
						public rawWindow(view: __javaRoots.androidRoot.view.View): __javaRoots.orgRoot.autojs.autojs.runtime.api.Floaty.JsRawWindow;
						public rawWindow(supplier: __javaRoots.orgRoot.autojs.autojs.core.floaty.BaseResizableFloatyWindow.ViewSupplier): __javaRoots.orgRoot.autojs.autojs.runtime.api.Floaty.JsRawWindow;
						public requestPermission(): boolean;
						public window(view: __javaRoots.androidRoot.view.View): __javaRoots.orgRoot.autojs.autojs.runtime.api.Floaty.JsResizableWindow;
						public window(supplier: __javaRoots.orgRoot.autojs.autojs.core.floaty.BaseResizableFloatyWindow.ViewSupplier): __javaRoots.orgRoot.autojs.autojs.runtime.api.Floaty.JsResizableWindow;
					}
					export namespace Floaty {
						export class JsRawWindow {
							public readonly height: number;
							public readonly width: number;
							public readonly x: number;
							public readonly y: number;
							public constructor(this$0: __javaRoots.orgRoot.autojs.autojs.core.floaty.BaseResizableFloatyWindow.ViewSupplier);
							public close(): void;
							public close(removeFromWindows: boolean): void;
							public disableFocus(): __javaRoots.kotlinRoot.Unit;
							public exitOnClose(): void;
							public findView(id: string): __javaRoots.androidRoot.view.View;
							public getHeight(): number;
							public getWidth(): number;
							public getX(): number;
							public getY(): number;
							public requestFocus(): __javaRoots.kotlinRoot.Unit;
							public setPosition(x: number, y: number): void;
							public setSize(w: number, h: number): void;
							public setTouchable(touchable: boolean): void;
							public close(...args: any[]): any;
						}
						export interface JsRawWindow extends __javaRoots.orgRoot.autojs.autojs.runtime.api.Floaty.JsWindow {}
						export class JsResizableWindow {
							public readonly adjustEnabled: boolean;
							public readonly height: number;
							public readonly width: number;
							public readonly x: number;
							public readonly y: number;
							public constructor(this$0: __javaRoots.orgRoot.autojs.autojs.core.floaty.BaseResizableFloatyWindow.ViewSupplier);
							public close(): void;
							public close(removeFromWindows: boolean): void;
							public disableFocus(): __javaRoots.kotlinRoot.Unit;
							public exitOnClose(): void;
							public findView(id: string): __javaRoots.androidRoot.view.View;
							public getHeight(): number;
							public getWidth(): number;
							public getX(): number;
							public getY(): number;
							public isAdjustEnabled(): boolean;
							public requestFocus(): __javaRoots.kotlinRoot.Unit;
							public setAdjustEnabled(enabled: boolean): void;
							public setPosition(x: number, y: number): void;
							public setSize(w: number, h: number): void;
							public close(...args: any[]): any;
						}
						export interface JsResizableWindow extends __javaRoots.orgRoot.autojs.autojs.runtime.api.Floaty.JsWindow {}
						export class JsWindow {
							public constructor(implementation: JsWindow);
							public constructor();
						}
						export interface JsWindow {
							close(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Http {
						public readonly okhttp: __javaRoots.orgRoot.autojs.autojs.core.http.MutableOkHttp;
						public constructor();
						public client(): __javaRoots.okhttp3Root.OkHttpClient;
						public getOkhttp(): __javaRoots.orgRoot.autojs.autojs.core.http.MutableOkHttp;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class IWrappedBarcode {
						public constructor(implementation: IWrappedBarcode);
						public constructor();
					}
					export interface IWrappedBarcode {
						readonly boundingBox: __javaRoots.androidRoot.graphics.Rect;
						readonly calendarEvent: any;
						readonly contactInfo: any;
						readonly cornerPoints: __javaRoots.androidRoot.graphics.Point[];
						readonly displayValue: string;
						readonly driverLicense: any;
						readonly email: any;
						readonly format: number;
						readonly formatName: string;
						readonly geoPoint: any;
						readonly phone: any;
						readonly rawBytes: number[];
						readonly rawValue: string;
						readonly sms: any;
						readonly type: number;
						readonly typeName: string;
						readonly url: any;
						readonly valueType: number;
						readonly valueTypeName: string;
						readonly wifi: any;
						getBoundingBox(): __javaRoots.androidRoot.graphics.Rect;
						getCalendarEvent(): any;
						getContactInfo(): any;
						getCornerPoints(): __javaRoots.androidRoot.graphics.Point[];
						getDisplayValue(): string;
						getDriverLicense(): any;
						getEmail(): any;
						getFormat(): number;
						getFormatName(): string;
						getGeoPoint(): any;
						getPhone(): any;
						getRawBytes(): number[];
						getRawValue(): string;
						getSms(): any;
						getType(): number;
						getTypeName(): string;
						getUrl(): any;
						getValueType(): number;
						getValueTypeName(): string;
						getWifi(): any;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class ImageFeatureMatching {
						public static FEATURE_MATCHING_METHOD_ORB: number;
						public static FEATURE_MATCHING_METHOD_SIFT: number;
						public constructor();
						public static createFeatureMatchingDescriptor(src: __javaRoots.orgRoot.opencv.core.Mat, cvtColorFlag: number, scale: number, method: number): __javaRoots.orgRoot.autojs.autojs.runtime.api.ImageFeatureMatching.FeatureMatchingDescriptor;
						public static featureMatching(sceneDesc: __javaRoots.orgRoot.autojs.autojs.runtime.api.ImageFeatureMatching.FeatureMatchingDescriptor, objectDesc: __javaRoots.orgRoot.autojs.autojs.runtime.api.ImageFeatureMatching.FeatureMatchingDescriptor, matcherType: number, debugMatchesImagePath: string, threshold: number): __javaRoots.orgRoot.autojs.autojs.runtime.api.ImageFeatureMatching.FeatureMatchingResult;
					}
					export namespace ImageFeatureMatching {
						export class FeatureMatchingDescriptor {
							public readonly corners: __javaRoots.orgRoot.opencv.core.MatOfPoint2f;
							public readonly descriptors: __javaRoots.orgRoot.opencv.core.Mat;
							public readonly keyPoint: __javaRoots.orgRoot.opencv.core.MatOfKeyPoint;
							public readonly nativePtr: number;
							public constructor(descriptors: __javaRoots.orgRoot.opencv.core.Mat, keyPoint: __javaRoots.orgRoot.opencv.core.MatOfKeyPoint, corners: __javaRoots.orgRoot.opencv.core.MatOfPoint2f);
							public getCorners(): __javaRoots.orgRoot.opencv.core.MatOfPoint2f;
							public getDescriptors(): __javaRoots.orgRoot.opencv.core.Mat;
							public getKeyPoint(): __javaRoots.orgRoot.opencv.core.MatOfKeyPoint;
							public getNativePtr(): number;
							public release(): void;
							public setNativePtr(nativePtr: number): void;
						}
						export class FeatureMatchingResult {
							public readonly matches: __javaRoots.orgRoot.opencv.core.Mat;
							public readonly points: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.opencv.core.Point>;
							public readonly quad: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.opencv.core.Point>;
							public constructor(pts: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.opencv.core.Point>, quad: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.opencv.core.Point>, matches: __javaRoots.orgRoot.opencv.core.Mat);
							public equals(o: any): boolean;
							public getMatches(): __javaRoots.orgRoot.opencv.core.Mat;
							public getPoints(): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.opencv.core.Point>;
							public getQuad(): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.opencv.core.Point>;
							public hashCode(): number;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Images {
						public readonly colorFinder: __javaRoots.orgRoot.autojs.autojs.core.image.RhinoColorFinder;
						public readonly screenCaptureOptions: __javaRoots.orgRoot.autojs.autojs.core.image.capture.ScreenCapturer.Options;
						public readonly screenCapturer: __javaRoots.orgRoot.autojs.autojs.core.image.capture.ScreenCapturer;
						public constructor(context: __javaRoots.androidRoot.content.Context, scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public captureScreen(): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public captureScreen(path: string): boolean;
						public clip(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, x: number, y: number, w: number, h: number): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public compress(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, format: string, quality: number): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public compress(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, format: string, options: __javaRoots.orgRoot.autojs.autojs.runtime.api.PngQuantBridge.Options): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public compressToBytes(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, format: string, quality: number): number[];
						public compressToBytes(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, format: string, options: __javaRoots.orgRoot.autojs.autojs.runtime.api.PngQuantBridge.Options): number[];
						public static concat(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, imgA: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, imgB: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, direction: number): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public copy(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public detectAndComputeFeatures(mat: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, scale: number, cvtColor: number, method: number): __javaRoots.orgRoot.autojs.autojs.runtime.api.ImageFeatureMatching.FeatureMatchingDescriptor;
						public findImage(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, template: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper): __javaRoots.orgRoot.opencv.core.Point;
						public findImage(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, template: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, threshold: number): __javaRoots.orgRoot.opencv.core.Point;
						public findImage(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, template: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, weakThreshold: number, strictThreshold: number, rect: __javaRoots.orgRoot.opencv.core.Rect, maxLevel: number): __javaRoots.orgRoot.opencv.core.Point;
						public findImage(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, template: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, threshold: number, rect: __javaRoots.orgRoot.opencv.core.Rect): __javaRoots.orgRoot.opencv.core.Point;
						public flip(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, horizontal: boolean, vertical: boolean): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public fromBase64(data: string): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public fromBytes(bytes: number[]): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public getScreenCaptureOptions(): __javaRoots.orgRoot.autojs.autojs.core.image.capture.ScreenCapturer.Options;
						public getScreenCapturer(): __javaRoots.orgRoot.autojs.autojs.core.image.capture.ScreenCapturer;
						public hasActiveScreenCapturer(): boolean;
						public static imread(path: string): __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public static initOpenCvIfNeeded(): void;
						public invert(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public load(src: string): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public matchTemplate(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, template: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, weakThreshold: number, strictThreshold: number, rect: __javaRoots.orgRoot.opencv.core.Rect, maxLevel: number, limit: number, useTransparentMask: boolean): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.core.image.TemplateMatching.Match>;
						public newMat(): __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public newMat(mat: __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat, rect: __javaRoots.orgRoot.opencv.core.Rect): __javaRoots.orgRoot.autojs.autojs.core.opencv.Mat;
						public static pixel(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, x: number, y: number): number;
						public read(path: string): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public read(path: string, isStrict: boolean): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public releaseScreenCapturer(): void;
						public requestScreenCapture(orientation: number, width: number, height: number, isAsync: boolean): __javaRoots.orgRoot.autojs.autojs.runtime.api.ScriptPromiseAdapter;
						public rotate(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, x: number, y: number, degree: number): __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper;
						public save(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, path: string, format: string, quality: number): boolean;
						public save(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, path: string, format: string, options: __javaRoots.orgRoot.autojs.autojs.runtime.api.PngQuantBridge.Options): boolean;
						public static saveBitmap(bitmap: __javaRoots.androidRoot.graphics.Bitmap, path: string): void;
						public static scaleBitmap(origin: __javaRoots.androidRoot.graphics.Bitmap, newWidth: number, newHeight: number): __javaRoots.androidRoot.graphics.Bitmap;
						public setImageCaptureCallback(onScreenCaptureAvailableListener: __javaRoots.orgRoot.autojs.autojs.runtime.api.Images.OnScreenCaptureAvailableListener): void;
						public static shoot(...shootableArgs: __javaRoots.orgRoot.autojs.autojs.core.image.Shootable<any>[]): void;
						public stopScreenCapture(): void;
						public stopScreenCapturerForegroundService(): void;
						public toBase64(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, format: string, quality: number): string;
						public toBytes(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, format: string, quality: number): number[];
					}
					export namespace Images {
						export class OnScreenCaptureAvailableListener {
							public constructor(implementation: OnScreenCaptureAvailableListener);
							public constructor();
						}
						export interface OnScreenCaptureAvailableListener {
							onCaptureAvailable(param0: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Media {
						public readonly musicCurrentPosition: number;
						public readonly musicDuration: number;
						public readonly musicPlaying: boolean;
						public constructor(context: __javaRoots.androidRoot.content.Context, runtime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public getMusicCurrentPosition(): number;
						public getMusicDuration(): number;
						public isMusicPlaying(): boolean;
						public musicSeekTo(m: number): void;
						public onMediaScannerConnected(): void;
						public onScanCompleted(path: string, uri: __javaRoots.androidRoot.net.Uri): void;
						public pauseMusic(): void;
						public playMusic(path: string): void;
						public playMusic(path: string, volume: number): void;
						public playMusic(path: string, volume: number, looping: boolean): void;
						public recycle(): void;
						public resumeMusic(): void;
						public scanFile(path: string): void;
						public stopMusic(): void;
					}
					export interface Media extends __javaRoots.androidRoot.media.MediaScannerConnection.MediaScannerConnectionClient {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Mime extends __javaRoots.euRoot.medsea.mimeutil.MimeUtil2 {
						public static readonly APPLICATION_1D_INTERLEAVED_PARITYFEC: string;
						public static readonly APPLICATION_3GPDASH_QOE_REPORT_XML: string;
						public static readonly APPLICATION_3GPPHALFORMS_JSON: string;
						public static readonly APPLICATION_3GPPHAL_JSON: string;
						public static readonly APPLICATION_3GPP_IMS_XML: string;
						public static readonly APPLICATION_A2L: string;
						public static readonly APPLICATION_ACE_CBOR: string;
						public static readonly APPLICATION_ACE_JSON: string;
						public static readonly APPLICATION_ACTIVEMESSAGE: string;
						public static readonly APPLICATION_ACTIVITY_JSON: string;
						public static readonly APPLICATION_AIF_CBOR: string;
						public static readonly APPLICATION_AIF_JSON: string;
						public static readonly APPLICATION_ALTO_CDNIFILTER_JSON: string;
						public static readonly APPLICATION_ALTO_CDNI_JSON: string;
						public static readonly APPLICATION_ALTO_COSTMAPFILTER_JSON: string;
						public static readonly APPLICATION_ALTO_COSTMAP_JSON: string;
						public static readonly APPLICATION_ALTO_DIRECTORY_JSON: string;
						public static readonly APPLICATION_ALTO_ENDPOINTCOSTPARAMS_JSON: string;
						public static readonly APPLICATION_ALTO_ENDPOINTCOST_JSON: string;
						public static readonly APPLICATION_ALTO_ENDPOINTPROPPARAMS_JSON: string;
						public static readonly APPLICATION_ALTO_ENDPOINTPROP_JSON: string;
						public static readonly APPLICATION_ALTO_ERROR_JSON: string;
						public static readonly APPLICATION_ALTO_NETWORKMAPFILTER_JSON: string;
						public static readonly APPLICATION_ALTO_NETWORKMAP_JSON: string;
						public static readonly APPLICATION_ALTO_PROPMAPPARAMS_JSON: string;
						public static readonly APPLICATION_ALTO_PROPMAP_JSON: string;
						public static readonly APPLICATION_ALTO_TIPSPARAMS_JSON: string;
						public static readonly APPLICATION_ALTO_TIPS_JSON: string;
						public static readonly APPLICATION_ALTO_UPDATESTREAMCONTROL_JSON: string;
						public static readonly APPLICATION_ALTO_UPDATESTREAMPARAMS_JSON: string;
						public static readonly APPLICATION_AML: string;
						public static readonly APPLICATION_ANDREW_INSET: string;
						public static readonly APPLICATION_ANNODEX: string;
						public static readonly APPLICATION_APPLEFILE: string;
						public static readonly APPLICATION_ATF: string;
						public static readonly APPLICATION_ATFX: string;
						public static readonly APPLICATION_ATOMCAT_XML: string;
						public static readonly APPLICATION_ATOMDELETED_XML: string;
						public static readonly APPLICATION_ATOMICMAIL: string;
						public static readonly APPLICATION_ATOMSERV_XML: string;
						public static readonly APPLICATION_ATOMSVC_XML: string;
						public static readonly APPLICATION_ATOM_XML: string;
						public static readonly APPLICATION_ATSC_DWD_XML: string;
						public static readonly APPLICATION_ATSC_DYNAMIC_EVENT_MESSAGE: string;
						public static readonly APPLICATION_ATSC_HELD_XML: string;
						public static readonly APPLICATION_ATSC_RDT_JSON: string;
						public static readonly APPLICATION_ATSC_RSAT_XML: string;
						public static readonly APPLICATION_ATXML: string;
						public static readonly APPLICATION_AT_JWT: string;
						public static readonly APPLICATION_AUTH_POLICY_XML: string;
						public static readonly APPLICATION_AUTOMATIONML_AMLX_ZIP: string;
						public static readonly APPLICATION_AUTOMATIONML_AML_XML: string;
						public static readonly APPLICATION_BACNET_XDD_ZIP: string;
						public static readonly APPLICATION_BATCH_SMTP: string;
						public static readonly APPLICATION_BBOLIN: string;
						public static readonly APPLICATION_BEEP_XML: string;
						public static readonly APPLICATION_BZ2: string;
						public static readonly APPLICATION_C2PA: string;
						public static readonly APPLICATION_CALENDAR_JSON: string;
						public static readonly APPLICATION_CALENDAR_XML: string;
						public static readonly APPLICATION_CALL_COMPLETION: string;
						public static readonly APPLICATION_CALS_1840: string;
						public static readonly APPLICATION_CAPTIVE_JSON: string;
						public static readonly APPLICATION_CBOR: string;
						public static readonly APPLICATION_CBOR_SEQ: string;
						public static readonly APPLICATION_CCCEX: string;
						public static readonly APPLICATION_CCMP_XML: string;
						public static readonly APPLICATION_CCXML_XML: string;
						public static readonly APPLICATION_CDA_XML: string;
						public static readonly APPLICATION_CDFX_XML: string;
						public static readonly APPLICATION_CDMI_CAPABILITY: string;
						public static readonly APPLICATION_CDMI_CONTAINER: string;
						public static readonly APPLICATION_CDMI_DOMAIN: string;
						public static readonly APPLICATION_CDMI_OBJECT: string;
						public static readonly APPLICATION_CDMI_QUEUE: string;
						public static readonly APPLICATION_CDNI: string;
						public static readonly APPLICATION_CEA: string;
						public static readonly APPLICATION_CEA_2018_XML: string;
						public static readonly APPLICATION_CELLML_XML: string;
						public static readonly APPLICATION_CFW: string;
						public static readonly APPLICATION_CID_EDHOC_CBOR_SEQ: string;
						public static readonly APPLICATION_CITY_JSON: string;
						public static readonly APPLICATION_CLR: string;
						public static readonly APPLICATION_CLUE_INFO_XML: string;
						public static readonly APPLICATION_CLUE_XML: string;
						public static readonly APPLICATION_CMS: string;
						public static readonly APPLICATION_CNRP_XML: string;
						public static readonly APPLICATION_COAP_GROUP_JSON: string;
						public static readonly APPLICATION_COAP_PAYLOAD: string;
						public static readonly APPLICATION_COMMONGROUND: string;
						public static readonly APPLICATION_CONCISE_PROBLEM_DETAILS_CBOR: string;
						public static readonly APPLICATION_CONFERENCE_INFO_XML: string;
						public static readonly APPLICATION_COSE: string;
						public static readonly APPLICATION_COSE_KEY: string;
						public static readonly APPLICATION_COSE_KEY_SET: string;
						public static readonly APPLICATION_COSE_X509: string;
						public static readonly APPLICATION_CPL_XML: string;
						public static readonly APPLICATION_CSRATTRS: string;
						public static readonly APPLICATION_CSTADATA_XML: string;
						public static readonly APPLICATION_CSTA_XML: string;
						public static readonly APPLICATION_CSVM_JSON: string;
						public static readonly APPLICATION_CU_SEEME: string;
						public static readonly APPLICATION_CWL: string;
						public static readonly APPLICATION_CWL_JSON: string;
						public static readonly APPLICATION_CWT: string;
						public static readonly APPLICATION_CYBERCASH: string;
						public static readonly APPLICATION_DASHDELTA: string;
						public static readonly APPLICATION_DASH_PATCH_XML: string;
						public static readonly APPLICATION_DASH_XML: string;
						public static readonly APPLICATION_DAVMOUNT_XML: string;
						public static readonly APPLICATION_DCA_RFT: string;
						public static readonly APPLICATION_DCD: string;
						public static readonly APPLICATION_DEC_DX: string;
						public static readonly APPLICATION_DIALOG_INFO_XML: string;
						public static readonly APPLICATION_DICOM: string;
						public static readonly APPLICATION_DICOM_JSON: string;
						public static readonly APPLICATION_DICOM_XML: string;
						public static readonly APPLICATION_DII: string;
						public static readonly APPLICATION_DIT: string;
						public static readonly APPLICATION_DNS: string;
						public static readonly APPLICATION_DNS_JSON: string;
						public static readonly APPLICATION_DNS_MESSAGE: string;
						public static readonly APPLICATION_DOCBOOK_XML: string;
						public static readonly APPLICATION_DOTS_CBOR: string;
						public static readonly APPLICATION_DPOP_JWT: string;
						public static readonly APPLICATION_DSKPP_XML: string;
						public static readonly APPLICATION_DSPTYPE: string;
						public static readonly APPLICATION_DSSC_DER: string;
						public static readonly APPLICATION_DSSC_XML: string;
						public static readonly APPLICATION_DVCS: string;
						public static readonly APPLICATION_ECMASCRIPT: string;
						public static readonly APPLICATION_EDHOC_CBOR_SEQ: string;
						public static readonly APPLICATION_EDIFACT: string;
						public static readonly APPLICATION_EDI_CONSENT: string;
						public static readonly APPLICATION_EDI_X12: string;
						public static readonly APPLICATION_EFI: string;
						public static readonly APPLICATION_ELM_JSON: string;
						public static readonly APPLICATION_ELM_XML: string;
						public static readonly APPLICATION_EMERGENCYCALLDATA_CAP_XML: string;
						public static readonly APPLICATION_EMERGENCYCALLDATA_COMMENT_XML: string;
						public static readonly APPLICATION_EMERGENCYCALLDATA_CONTROL_XML: string;
						public static readonly APPLICATION_EMERGENCYCALLDATA_DEVICEINFO_XML: string;
						public static readonly APPLICATION_EMERGENCYCALLDATA_ECALL_MSD: string;
						public static readonly APPLICATION_EMERGENCYCALLDATA_LEGACYESN_JSON: string;
						public static readonly APPLICATION_EMERGENCYCALLDATA_PROVIDERINFO_XML: string;
						public static readonly APPLICATION_EMERGENCYCALLDATA_SERVICEINFO_XML: string;
						public static readonly APPLICATION_EMERGENCYCALLDATA_SUBSCRIBERINFO_XML: string;
						public static readonly APPLICATION_EMERGENCYCALLDATA_VEDS_XML: string;
						public static readonly APPLICATION_EMMA_XML: string;
						public static readonly APPLICATION_EMOTIONML_XML: string;
						public static readonly APPLICATION_ENCAPRTP: string;
						public static readonly APPLICATION_EPP_XML: string;
						public static readonly APPLICATION_EPUB_ZIP: string;
						public static readonly APPLICATION_ESHOP: string;
						public static readonly APPLICATION_EXAMPLE: string;
						public static readonly APPLICATION_EXI: string;
						public static readonly APPLICATION_EXPECT_CT_REPORT_JSON: string;
						public static readonly APPLICATION_EXPRESS: string;
						public static readonly APPLICATION_FASTINFOSET: string;
						public static readonly APPLICATION_FASTSOAP: string;
						public static readonly APPLICATION_FDF: string;
						public static readonly APPLICATION_FDT_XML: string;
						public static readonly APPLICATION_FHIR_JSON: string;
						public static readonly APPLICATION_FHIR_XML: string;
						public static readonly APPLICATION_FITS: string;
						public static readonly APPLICATION_FLEXFEC: string;
						public static readonly APPLICATION_FONT_SFNT: string;
						public static readonly APPLICATION_FONT_TDPFR: string;
						public static readonly APPLICATION_FONT_WOFF: string;
						public static readonly APPLICATION_FORM_URLENCODED: string;
						public static readonly APPLICATION_FRAMEWORK_ATTRIBUTES_XML: string;
						public static readonly APPLICATION_FUTURESPLASH: string;
						public static readonly APPLICATION_GEOPACKAGE_SQLITE3: string;
						public static readonly APPLICATION_GEOXACML_JSON: string;
						public static readonly APPLICATION_GEOXACML_XML: string;
						public static readonly APPLICATION_GEO_JSON: string;
						public static readonly APPLICATION_GEO_JSON_SEQ: string;
						public static readonly APPLICATION_GHOSTVIEW: string;
						public static readonly APPLICATION_GLTF_BUFFER: string;
						public static readonly APPLICATION_GML_XML: string;
						public static readonly APPLICATION_GNAP_BINDING_JWS: string;
						public static readonly APPLICATION_GNAP_BINDING_JWSD: string;
						public static readonly APPLICATION_GNAP_BINDING_ROTATION_JWS: string;
						public static readonly APPLICATION_GNAP_BINDING_ROTATION_JWSD: string;
						public static readonly APPLICATION_GZIP: string;
						public static readonly APPLICATION_H224: string;
						public static readonly APPLICATION_HELD_XML: string;
						public static readonly APPLICATION_HL7V2_XML: string;
						public static readonly APPLICATION_HTA: string;
						public static readonly APPLICATION_HTTP: string;
						public static readonly APPLICATION_HYPERSTUDIO: string;
						public static readonly APPLICATION_IBE_KEY_REQUEST_XML: string;
						public static readonly APPLICATION_IBE_PKG_REPLY_XML: string;
						public static readonly APPLICATION_IBE_PP_DATA: string;
						public static readonly APPLICATION_IGES: string;
						public static readonly APPLICATION_IM_ISCOMPOSING_XML: string;
						public static readonly APPLICATION_INDEX: string;
						public static readonly APPLICATION_INDEX_CMD: string;
						public static readonly APPLICATION_INDEX_OBJ: string;
						public static readonly APPLICATION_INDEX_RESPONSE: string;
						public static readonly APPLICATION_INDEX_VND: string;
						public static readonly APPLICATION_INKML_XML: string;
						public static readonly APPLICATION_IOTA_MMC_WBXML: string;
						public static readonly APPLICATION_IOTA_MMC_XML: string;
						public static readonly APPLICATION_IOTP: string;
						public static readonly APPLICATION_IPFIX: string;
						public static readonly APPLICATION_IPP: string;
						public static readonly APPLICATION_ISUP: string;
						public static readonly APPLICATION_ITS_XML: string;
						public static readonly APPLICATION_JAVASCRIPT: string;
						public static readonly APPLICATION_JAVA_ARCHIVE: string;
						public static readonly APPLICATION_JAVA_SERIALIZED_OBJECT: string;
						public static readonly APPLICATION_JAVA_VM: string;
						public static readonly APPLICATION_JF2FEED_JSON: string;
						public static readonly APPLICATION_JOSE: string;
						public static readonly APPLICATION_JOSE_JSON: string;
						public static readonly APPLICATION_JRD_JSON: string;
						public static readonly APPLICATION_JSCALENDAR_JSON: string;
						public static readonly APPLICATION_JSCONTACT_JSON: string;
						public static readonly APPLICATION_JSON: string;
						public static readonly APPLICATION_JSONPATH: string;
						public static readonly APPLICATION_JSON_PATCH_JSON: string;
						public static readonly APPLICATION_JSON_SEQ: string;
						public static readonly APPLICATION_JWK_JSON: string;
						public static readonly APPLICATION_JWK_SET_JSON: string;
						public static readonly APPLICATION_JWT: string;
						public static readonly APPLICATION_KPML_REQUEST_XML: string;
						public static readonly APPLICATION_KPML_RESPONSE_XML: string;
						public static readonly APPLICATION_LD_JSON: string;
						public static readonly APPLICATION_LGR_XML: string;
						public static readonly APPLICATION_LINKSET: string;
						public static readonly APPLICATION_LINKSET_JSON: string;
						public static readonly APPLICATION_LINK_FORMAT: string;
						public static readonly APPLICATION_LOAD_CONTROL_XML: string;
						public static readonly APPLICATION_LOGOUT_JWT: string;
						public static readonly APPLICATION_LOSTSYNC_XML: string;
						public static readonly APPLICATION_LOST_XML: string;
						public static readonly APPLICATION_LPF_ZIP: string;
						public static readonly APPLICATION_LXF: string;
						public static readonly APPLICATION_M3G: string;
						public static readonly APPLICATION_MACWRITEII: string;
						public static readonly APPLICATION_MAC_BINHEX40: string;
						public static readonly APPLICATION_MAC_COMPACTPRO: string;
						public static readonly APPLICATION_MADS_XML: string;
						public static readonly APPLICATION_MANIFEST_JSON: string;
						public static readonly APPLICATION_MARC: string;
						public static readonly APPLICATION_MARCXML_XML: string;
						public static readonly APPLICATION_MATHEMATICA: string;
						public static readonly APPLICATION_MATHML_CONTENT_XML: string;
						public static readonly APPLICATION_MATHML_PRESENTATION_XML: string;
						public static readonly APPLICATION_MATHML_XML: string;
						public static readonly APPLICATION_MBMS_ASSOCIATED_PROCEDURE_DESCRIPTION_XML: string;
						public static readonly APPLICATION_MBMS_DEREGISTER_XML: string;
						public static readonly APPLICATION_MBMS_ENVELOPE_XML: string;
						public static readonly APPLICATION_MBMS_MSK_RESPONSE_XML: string;
						public static readonly APPLICATION_MBMS_MSK_XML: string;
						public static readonly APPLICATION_MBMS_PROTECTION_DESCRIPTION_XML: string;
						public static readonly APPLICATION_MBMS_RECEPTION_REPORT_XML: string;
						public static readonly APPLICATION_MBMS_REGISTER_RESPONSE_XML: string;
						public static readonly APPLICATION_MBMS_REGISTER_XML: string;
						public static readonly APPLICATION_MBMS_SCHEDULE_XML: string;
						public static readonly APPLICATION_MBMS_USER_SERVICE_DESCRIPTION_XML: string;
						public static readonly APPLICATION_MBOX: string;
						public static readonly APPLICATION_MEDIASERVERCONTROL_XML: string;
						public static readonly APPLICATION_MEDIA_CONTROL_XML: string;
						public static readonly APPLICATION_MEDIA_POLICY_DATASET_XML: string;
						public static readonly APPLICATION_MERGE_PATCH_JSON: string;
						public static readonly APPLICATION_METALINK4_XML: string;
						public static readonly APPLICATION_METS_XML: string;
						public static readonly APPLICATION_MF4: string;
						public static readonly APPLICATION_MIKEY: string;
						public static readonly APPLICATION_MIPC: string;
						public static readonly APPLICATION_MISSING_BLOCKS_CBOR_SEQ: string;
						public static readonly APPLICATION_MMT_AEI_XML: string;
						public static readonly APPLICATION_MMT_USD_XML: string;
						public static readonly APPLICATION_MODS_XML: string;
						public static readonly APPLICATION_MOSSKEY_DATA: string;
						public static readonly APPLICATION_MOSSKEY_REQUEST: string;
						public static readonly APPLICATION_MOSS_KEYS: string;
						public static readonly APPLICATION_MOSS_SIGNATURE: string;
						public static readonly APPLICATION_MP21: string;
						public static readonly APPLICATION_MP4: string;
						public static readonly APPLICATION_MPEG4_GENERIC: string;
						public static readonly APPLICATION_MPEG4_IOD: string;
						public static readonly APPLICATION_MPEG4_IOD_XMT: string;
						public static readonly APPLICATION_MRB_CONSUMER_XML: string;
						public static readonly APPLICATION_MRB_PUBLISH_XML: string;
						public static readonly APPLICATION_MSACCESS: string;
						public static readonly APPLICATION_MSC_IVR_XML: string;
						public static readonly APPLICATION_MSC_MIXER_XML: string;
						public static readonly APPLICATION_MSEXCEL: string;
						public static readonly APPLICATION_MSPOWERPOINT: string;
						public static readonly APPLICATION_MSWORD: string;
						public static readonly APPLICATION_MS_EXCEL: string;
						public static readonly APPLICATION_MS_POWERPOINT: string;
						public static readonly APPLICATION_MS_TNEF: string;
						public static readonly APPLICATION_MS_WORD: string;
						public static readonly APPLICATION_MUD_JSON: string;
						public static readonly APPLICATION_MULTIPART_CORE: string;
						public static readonly APPLICATION_MXF: string;
						public static readonly APPLICATION_NASDATA: string;
						public static readonly APPLICATION_NEWS_CHECKGROUPS: string;
						public static readonly APPLICATION_NEWS_GROUPINFO: string;
						public static readonly APPLICATION_NEWS_MESSAGE_ID: string;
						public static readonly APPLICATION_NEWS_TRANSMISSION: string;
						public static readonly APPLICATION_NLSML_XML: string;
						public static readonly APPLICATION_NODE: string;
						public static readonly APPLICATION_NSS: string;
						public static readonly APPLICATION_N_QUADS: string;
						public static readonly APPLICATION_N_TRIPLES: string;
						public static readonly APPLICATION_OASIS_OPENDOCUMENT_PRESENTATION: string;
						public static readonly APPLICATION_OASIS_OPENDOCUMENT_SPREADSHEET: string;
						public static readonly APPLICATION_OASIS_OPENDOCUMENT_TEXT: string;
						public static readonly APPLICATION_OASIS_PRESENTATION: string;
						public static readonly APPLICATION_OASIS_SPREADSHEET: string;
						public static readonly APPLICATION_OASIS_TEXT: string;
						public static readonly APPLICATION_OAUTH_AUTHZ_REQ_JWT: string;
						public static readonly APPLICATION_OBLIVIOUS_DNS_MESSAGE: string;
						public static readonly APPLICATION_OCSP_REQUEST: string;
						public static readonly APPLICATION_OCSP_RESPONSE: string;
						public static readonly APPLICATION_OCTET_STREAM: string;
						public static readonly APPLICATION_ODA: string;
						public static readonly APPLICATION_ODM_XML: string;
						public static readonly APPLICATION_ODX: string;
						public static readonly APPLICATION_OEBPS_PACKAGE_XML: string;
						public static readonly APPLICATION_OGG: string;
						public static readonly APPLICATION_OHTTP_KEYS: string;
						public static readonly APPLICATION_OMA_DIRECTORY_XML: string;
						public static readonly APPLICATION_ONENOTE: string;
						public static readonly APPLICATION_OPC_NODESET_XML: string;
						public static readonly APPLICATION_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION: string;
						public static readonly APPLICATION_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET: string;
						public static readonly APPLICATION_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT: string;
						public static readonly APPLICATION_OPENXML_DOCUMENT: string;
						public static readonly APPLICATION_OPENXML_PRESENTATION: string;
						public static readonly APPLICATION_OPENXML_SHEET: string;
						public static readonly APPLICATION_OSCORE: string;
						public static readonly APPLICATION_OXPS: string;
						public static readonly APPLICATION_P21: string;
						public static readonly APPLICATION_P21_ZIP: string;
						public static readonly APPLICATION_P2P_OVERLAY_XML: string;
						public static readonly APPLICATION_PARITYFEC: string;
						public static readonly APPLICATION_PASSPORT: string;
						public static readonly APPLICATION_PATCH_OPS_ERROR_XML: string;
						public static readonly APPLICATION_PDF: string;
						public static readonly APPLICATION_PDX: string;
						public static readonly APPLICATION_PEM_CERTIFICATE_CHAIN: string;
						public static readonly APPLICATION_PGP_ENCRYPTED: string;
						public static readonly APPLICATION_PGP_KEYS: string;
						public static readonly APPLICATION_PGP_SIGNATURE: string;
						public static readonly APPLICATION_PICS_RULES: string;
						public static readonly APPLICATION_PIDF_DIFF_XML: string;
						public static readonly APPLICATION_PIDF_XML: string;
						public static readonly APPLICATION_PKCS10: string;
						public static readonly APPLICATION_PKCS12: string;
						public static readonly APPLICATION_PKCS7_MIME: string;
						public static readonly APPLICATION_PKCS7_SIGNATURE: string;
						public static readonly APPLICATION_PKCS8: string;
						public static readonly APPLICATION_PKCS8_ENCRYPTED: string;
						public static readonly APPLICATION_PKIXCMP: string;
						public static readonly APPLICATION_PKIX_ATTR_CERT: string;
						public static readonly APPLICATION_PKIX_CERT: string;
						public static readonly APPLICATION_PKIX_CRL: string;
						public static readonly APPLICATION_PKIX_PKIPATH: string;
						public static readonly APPLICATION_PLS_XML: string;
						public static readonly APPLICATION_POC_SETTINGS_XML: string;
						public static readonly APPLICATION_POSTSCRIPT: string;
						public static readonly APPLICATION_PPSP_TRACKER_JSON: string;
						public static readonly APPLICATION_PRIVATE_TOKEN_ISSUER_DIRECTORY: string;
						public static readonly APPLICATION_PRIVATE_TOKEN_REQUEST: string;
						public static readonly APPLICATION_PRIVATE_TOKEN_RESPONSE: string;
						public static readonly APPLICATION_PROBLEM_JSON: string;
						public static readonly APPLICATION_PROBLEM_XML: string;
						public static readonly APPLICATION_PROVENANCE_XML: string;
						public static readonly APPLICATION_PRS_ALVESTRAND_TITRAX_SHEET: string;
						public static readonly APPLICATION_PRS_CWW: string;
						public static readonly APPLICATION_PRS_CYN: string;
						public static readonly APPLICATION_PRS_HPUB_ZIP: string;
						public static readonly APPLICATION_PRS_IMPLIED_DOCUMENT_XML: string;
						public static readonly APPLICATION_PRS_IMPLIED_EXECUTABLE: string;
						public static readonly APPLICATION_PRS_IMPLIED_OBJECT_JSON: string;
						public static readonly APPLICATION_PRS_IMPLIED_OBJECT_JSON_SEQ: string;
						public static readonly APPLICATION_PRS_IMPLIED_OBJECT_YAML: string;
						public static readonly APPLICATION_PRS_IMPLIED_STRUCTURE: string;
						public static readonly APPLICATION_PRS_NPREND: string;
						public static readonly APPLICATION_PRS_PLUCKER: string;
						public static readonly APPLICATION_PRS_RDF_XML_CRYPT: string;
						public static readonly APPLICATION_PRS_VCFBZIP2: string;
						public static readonly APPLICATION_PRS_XSF_XML: string;
						public static readonly APPLICATION_PSKC_XML: string;
						public static readonly APPLICATION_PVD_JSON: string;
						public static readonly APPLICATION_QSIG: string;
						public static readonly APPLICATION_RAPTORFEC: string;
						public static readonly APPLICATION_RDAP_JSON: string;
						public static readonly APPLICATION_RDF_XML: string;
						public static readonly APPLICATION_REGINFO_XML: string;
						public static readonly APPLICATION_RELAX_NG_COMPACT_SYNTAX: string;
						public static readonly APPLICATION_REMOTE_PRINTING: string;
						public static readonly APPLICATION_REPUTON_JSON: string;
						public static readonly APPLICATION_RESOURCE_LISTS_DIFF_XML: string;
						public static readonly APPLICATION_RESOURCE_LISTS_XML: string;
						public static readonly APPLICATION_RFC_XML: string;
						public static readonly APPLICATION_RISCOS: string;
						public static readonly APPLICATION_RLMI_XML: string;
						public static readonly APPLICATION_RLS_SERVICES_XML: string;
						public static readonly APPLICATION_ROUTE_APD_XML: string;
						public static readonly APPLICATION_ROUTE_S_TSID_XML: string;
						public static readonly APPLICATION_ROUTE_USD_XML: string;
						public static readonly APPLICATION_RPKI_CHECKLIST: string;
						public static readonly APPLICATION_RPKI_GHOSTBUSTERS: string;
						public static readonly APPLICATION_RPKI_MANIFEST: string;
						public static readonly APPLICATION_RPKI_PUBLICATION: string;
						public static readonly APPLICATION_RPKI_ROA: string;
						public static readonly APPLICATION_RPKI_UPDOWN: string;
						public static readonly APPLICATION_RSS_XML: string;
						public static readonly APPLICATION_RTF: string;
						public static readonly APPLICATION_RTPLOOPBACK: string;
						public static readonly APPLICATION_RTX: string;
						public static readonly APPLICATION_SAMLASSERTION_XML: string;
						public static readonly APPLICATION_SAMLMETADATA_XML: string;
						public static readonly APPLICATION_SARIF_EXTERNAL_PROPERTIES_JSON: string;
						public static readonly APPLICATION_SARIF_JSON: string;
						public static readonly APPLICATION_SBE: string;
						public static readonly APPLICATION_SBML_XML: string;
						public static readonly APPLICATION_SCAIP_XML: string;
						public static readonly APPLICATION_SCIM_JSON: string;
						public static readonly APPLICATION_SCVP_CV_REQUEST: string;
						public static readonly APPLICATION_SCVP_CV_RESPONSE: string;
						public static readonly APPLICATION_SCVP_VP_REQUEST: string;
						public static readonly APPLICATION_SCVP_VP_RESPONSE: string;
						public static readonly APPLICATION_SDP: string;
						public static readonly APPLICATION_SECEVENT_JWT: string;
						public static readonly APPLICATION_SENML_CBOR: string;
						public static readonly APPLICATION_SENML_ETCH_CBOR: string;
						public static readonly APPLICATION_SENML_ETCH_JSON: string;
						public static readonly APPLICATION_SENML_EXI: string;
						public static readonly APPLICATION_SENML_JSON: string;
						public static readonly APPLICATION_SENML_XML: string;
						public static readonly APPLICATION_SENSML_CBOR: string;
						public static readonly APPLICATION_SENSML_EXI: string;
						public static readonly APPLICATION_SENSML_JSON: string;
						public static readonly APPLICATION_SENSML_XML: string;
						public static readonly APPLICATION_SEP_EXI: string;
						public static readonly APPLICATION_SEP_XML: string;
						public static readonly APPLICATION_SESSION_INFO: string;
						public static readonly APPLICATION_SET_PAYMENT: string;
						public static readonly APPLICATION_SET_PAYMENT_INITIATION: string;
						public static readonly APPLICATION_SET_REGISTRATION: string;
						public static readonly APPLICATION_SET_REGISTRATION_INITIATION: string;
						public static readonly APPLICATION_SGML: string;
						public static readonly APPLICATION_SGML_OPEN_CATALOG: string;
						public static readonly APPLICATION_SHF_XML: string;
						public static readonly APPLICATION_SIEVE: string;
						public static readonly APPLICATION_SIMPLESYMBOLCONTAINER: string;
						public static readonly APPLICATION_SIMPLE_FILTER_XML: string;
						public static readonly APPLICATION_SIMPLE_MESSAGE_SUMMARY: string;
						public static readonly APPLICATION_SIPC: string;
						public static readonly APPLICATION_SLA: string;
						public static readonly APPLICATION_SLATE: string;
						public static readonly APPLICATION_SMIL: string;
						public static readonly APPLICATION_SMIL_XML: string;
						public static readonly APPLICATION_SMPTE336M: string;
						public static readonly APPLICATION_SOAP_FASTINFOSET: string;
						public static readonly APPLICATION_SOAP_XML: string;
						public static readonly APPLICATION_SPARQL_QUERY: string;
						public static readonly APPLICATION_SPARQL_RESULTS_XML: string;
						public static readonly APPLICATION_SPDX_JSON: string;
						public static readonly APPLICATION_SPIRITS_EVENT_XML: string;
						public static readonly APPLICATION_SQL: string;
						public static readonly APPLICATION_SRGS: string;
						public static readonly APPLICATION_SRGS_XML: string;
						public static readonly APPLICATION_SRU_XML: string;
						public static readonly APPLICATION_SSML_XML: string;
						public static readonly APPLICATION_STIX_JSON: string;
						public static readonly APPLICATION_SVG_XML: string;
						public static readonly APPLICATION_SWID_CBOR: string;
						public static readonly APPLICATION_SWID_XML: string;
						public static readonly APPLICATION_TAMP_APEX_UPDATE: string;
						public static readonly APPLICATION_TAMP_APEX_UPDATE_CONFIRM: string;
						public static readonly APPLICATION_TAMP_COMMUNITY_UPDATE: string;
						public static readonly APPLICATION_TAMP_COMMUNITY_UPDATE_CONFIRM: string;
						public static readonly APPLICATION_TAMP_ERROR: string;
						public static readonly APPLICATION_TAMP_SEQUENCE_ADJUST: string;
						public static readonly APPLICATION_TAMP_SEQUENCE_ADJUST_CONFIRM: string;
						public static readonly APPLICATION_TAMP_STATUS_QUERY: string;
						public static readonly APPLICATION_TAMP_STATUS_RESPONSE: string;
						public static readonly APPLICATION_TAMP_UPDATE: string;
						public static readonly APPLICATION_TAMP_UPDATE_CONFIRM: string;
						public static readonly APPLICATION_TAXII_JSON: string;
						public static readonly APPLICATION_TD_JSON: string;
						public static readonly APPLICATION_TEI_XML: string;
						public static readonly APPLICATION_TETRA_ISI: string;
						public static readonly APPLICATION_THRAUD_XML: string;
						public static readonly APPLICATION_TIMESTAMPED_DATA: string;
						public static readonly APPLICATION_TIMESTAMP_QUERY: string;
						public static readonly APPLICATION_TIMESTAMP_REPLY: string;
						public static readonly APPLICATION_TLSRPT_GZIP: string;
						public static readonly APPLICATION_TLSRPT_JSON: string;
						public static readonly APPLICATION_TM_JSON: string;
						public static readonly APPLICATION_TNAUTHLIST: string;
						public static readonly APPLICATION_TOKEN_INTROSPECTION_JWT: string;
						public static readonly APPLICATION_TRICKLE_ICE_SDPFRAG: string;
						public static readonly APPLICATION_TRIG: string;
						public static readonly APPLICATION_TTML_XML: string;
						public static readonly APPLICATION_TVE_TRIGGER: string;
						public static readonly APPLICATION_TZIF: string;
						public static readonly APPLICATION_TZIF_LEAP: string;
						public static readonly APPLICATION_ULPFEC: string;
						public static readonly APPLICATION_URC_GRPSHEET_XML: string;
						public static readonly APPLICATION_URC_RESSHEET_XML: string;
						public static readonly APPLICATION_URC_TARGETDESC_XML: string;
						public static readonly APPLICATION_URC_UISOCKETDESC_XML: string;
						public static readonly APPLICATION_VCARD_JSON: string;
						public static readonly APPLICATION_VCARD_XML: string;
						public static readonly APPLICATION_VEMMI: string;
						public static readonly APPLICATION_VNC_CMCC_DCD_XML: string;
						public static readonly APPLICATION_VND_1000MINDS_DECISION_MODEL_XML: string;
						public static readonly APPLICATION_VND_1OB: string;
						public static readonly APPLICATION_VND_3GPP2_BCMCSINFO_XML: string;
						public static readonly APPLICATION_VND_3GPP2_SMS: string;
						public static readonly APPLICATION_VND_3GPP2_TCAP: string;
						public static readonly APPLICATION_VND_3GPP_5GNAS: string;
						public static readonly APPLICATION_VND_3GPP_5GSA2X: string;
						public static readonly APPLICATION_VND_3GPP_5GSA2X_LOCAL_SERVICE_INFORMATION: string;
						public static readonly APPLICATION_VND_3GPP_ACCESS_TRANSFER_EVENTS_XML: string;
						public static readonly APPLICATION_VND_3GPP_BSF_XML: string;
						public static readonly APPLICATION_VND_3GPP_CRS_XML: string;
						public static readonly APPLICATION_VND_3GPP_CURRENT_LOCATION_DISCOVERY_XML: string;
						public static readonly APPLICATION_VND_3GPP_GMOP_XML: string;
						public static readonly APPLICATION_VND_3GPP_GTPC: string;
						public static readonly APPLICATION_VND_3GPP_INTERWORKING_DATA: string;
						public static readonly APPLICATION_VND_3GPP_LPP: string;
						public static readonly APPLICATION_VND_3GPP_MCDATA_AFFILIATION_COMMAND_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCDATA_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCDATA_MSGSTORE_CTRL_REQUEST_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCDATA_PAYLOAD: string;
						public static readonly APPLICATION_VND_3GPP_MCDATA_REGROUP_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCDATA_SERVICE_CONFIG_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCDATA_SIGNALLING: string;
						public static readonly APPLICATION_VND_3GPP_MCDATA_UE_CONFIG_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCDATA_USER_PROFILE_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCPTT_AFFILIATION_COMMAND_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCPTT_FLOOR_REQUEST_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCPTT_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCPTT_LOCATION_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCPTT_MBMS_USAGE_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCPTT_REGROUP_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCPTT_SERVICE_CONFIG_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCPTT_SIGNED_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCPTT_UE_CONFIG_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCPTT_UE_INIT_CONFIG_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCPTT_USER_PROFILE_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCVIDEO_AFFILIATION_COMMAND_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCVIDEO_AFFILIATION_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCVIDEO_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCVIDEO_LOCATION_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCVIDEO_MBMS_USAGE_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCVIDEO_REGROUP_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCVIDEO_SERVICE_CONFIG_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCVIDEO_TRANSMISSION_REQUEST_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCVIDEO_UE_CONFIG_XML: string;
						public static readonly APPLICATION_VND_3GPP_MCVIDEO_USER_PROFILE_XML: string;
						public static readonly APPLICATION_VND_3GPP_MC_SIGNALLING_EAR: string;
						public static readonly APPLICATION_VND_3GPP_MID_CALL_XML: string;
						public static readonly APPLICATION_VND_3GPP_NGAP: string;
						public static readonly APPLICATION_VND_3GPP_PFCP: string;
						public static readonly APPLICATION_VND_3GPP_PIC_BW_LARGE: string;
						public static readonly APPLICATION_VND_3GPP_PIC_BW_SMALL: string;
						public static readonly APPLICATION_VND_3GPP_PIC_BW_VAR: string;
						public static readonly APPLICATION_VND_3GPP_PROSE_PC3ACH_XML: string;
						public static readonly APPLICATION_VND_3GPP_PROSE_PC3A_XML: string;
						public static readonly APPLICATION_VND_3GPP_PROSE_PC3CH_XML: string;
						public static readonly APPLICATION_VND_3GPP_PROSE_PC8_XML: string;
						public static readonly APPLICATION_VND_3GPP_PROSE_XML: string;
						public static readonly APPLICATION_VND_3GPP_S1AP: string;
						public static readonly APPLICATION_VND_3GPP_SEAL_GROUP_DOC_XML: string;
						public static readonly APPLICATION_VND_3GPP_SEAL_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_SEAL_LOCATION_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_SEAL_MBMS_USAGE_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_SEAL_NETWORK_QOS_MANAGEMENT_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_SEAL_UE_CONFIG_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_SEAL_UNICAST_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_SEAL_USER_PROFILE_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_SMS: string;
						public static readonly APPLICATION_VND_3GPP_SMS_XML: string;
						public static readonly APPLICATION_VND_3GPP_SRVCC_EXT_XML: string;
						public static readonly APPLICATION_VND_3GPP_SRVCC_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_STATE_AND_EVENT_INFO_XML: string;
						public static readonly APPLICATION_VND_3GPP_USSD_XML: string;
						public static readonly APPLICATION_VND_3GPP_V2X: string;
						public static readonly APPLICATION_VND_3GPP_V2X_LOCAL_SERVICE_INFORMATION: string;
						public static readonly APPLICATION_VND_3GPP_VAE_INFO_XML: string;
						public static readonly APPLICATION_VND_3LIGHTSSOFTWARE_IMAGESCAL: string;
						public static readonly APPLICATION_VND_3M_POST_IT_NOTES: string;
						public static readonly APPLICATION_VND_ACCPAC_SIMPLY_ASO: string;
						public static readonly APPLICATION_VND_ACCPAC_SIMPLY_IMP: string;
						public static readonly APPLICATION_VND_ACM_ADDRESSXFER_JSON: string;
						public static readonly APPLICATION_VND_ACM_CHATBOT_JSON: string;
						public static readonly APPLICATION_VND_ACUCOBOL: string;
						public static readonly APPLICATION_VND_ACUCORP: string;
						public static readonly APPLICATION_VND_ADOBE_FLASH_MOVIE: string;
						public static readonly APPLICATION_VND_ADOBE_FORMSCENTRAL_FCDT: string;
						public static readonly APPLICATION_VND_ADOBE_FXP: string;
						public static readonly APPLICATION_VND_ADOBE_PARTIAL_UPLOAD: string;
						public static readonly APPLICATION_VND_ADOBE_XDP_XML: string;
						public static readonly APPLICATION_VND_AETHER_IMP: string;
						public static readonly APPLICATION_VND_AFPC_AFPLINEDATA: string;
						public static readonly APPLICATION_VND_AFPC_AFPLINEDATA_PAGEDEF: string;
						public static readonly APPLICATION_VND_AFPC_CMOCA_CMRESOURCE: string;
						public static readonly APPLICATION_VND_AFPC_FOCA_CHARSET: string;
						public static readonly APPLICATION_VND_AFPC_FOCA_CODEDFONT: string;
						public static readonly APPLICATION_VND_AFPC_FOCA_CODEPAGE: string;
						public static readonly APPLICATION_VND_AFPC_MODCA: string;
						public static readonly APPLICATION_VND_AFPC_MODCA_CMTABLE: string;
						public static readonly APPLICATION_VND_AFPC_MODCA_FORMDEF: string;
						public static readonly APPLICATION_VND_AFPC_MODCA_MEDIUMMAP: string;
						public static readonly APPLICATION_VND_AFPC_MODCA_OBJECTCONTAINER: string;
						public static readonly APPLICATION_VND_AFPC_MODCA_OVERLAY: string;
						public static readonly APPLICATION_VND_AFPC_MODCA_PAGESEGMENT: string;
						public static readonly APPLICATION_VND_AGE: string;
						public static readonly APPLICATION_VND_AHEAD_SPACE: string;
						public static readonly APPLICATION_VND_AH_BARCODE: string;
						public static readonly APPLICATION_VND_AIRZIP_FILESECURE_AZF: string;
						public static readonly APPLICATION_VND_AIRZIP_FILESECURE_AZS: string;
						public static readonly APPLICATION_VND_AMADEUS_JSON: string;
						public static readonly APPLICATION_VND_AMAZON_MOBI8_EBOOK: string;
						public static readonly APPLICATION_VND_AMERICANDYNAMICS_ACC: string;
						public static readonly APPLICATION_VND_AMIGA_AMI: string;
						public static readonly APPLICATION_VND_AMUNDSEN_MAZE_XML: string;
						public static readonly APPLICATION_VND_ANDROID_OTA: string;
						public static readonly APPLICATION_VND_ANDROID_PACKAGE_ARCHIVE: string;
						public static readonly APPLICATION_VND_ANKI: string;
						public static readonly APPLICATION_VND_ANSER_WEB_CERTIFICATE_ISSUE_INITIATION: string;
						public static readonly APPLICATION_VND_ANSER_WEB_FUNDS_TRANSFER_INITIATION: string;
						public static readonly APPLICATION_VND_ANTIX_GAME_COMPONENT: string;
						public static readonly APPLICATION_VND_APACHE_ARROW_FILE: string;
						public static readonly APPLICATION_VND_APACHE_ARROW_STREAM: string;
						public static readonly APPLICATION_VND_APACHE_PARQUET: string;
						public static readonly APPLICATION_VND_APACHE_THRIFT_BINARY: string;
						public static readonly APPLICATION_VND_APACHE_THRIFT_COMPACT: string;
						public static readonly APPLICATION_VND_APACHE_THRIFT_JSON: string;
						public static readonly APPLICATION_VND_APEXLANG: string;
						public static readonly APPLICATION_VND_API_JSON: string;
						public static readonly APPLICATION_VND_APLEXTOR_WARRP_JSON: string;
						public static readonly APPLICATION_VND_APOTHEKENDE_RESERVATION_JSON: string;
						public static readonly APPLICATION_VND_APPLE_INSTALLER_XML: string;
						public static readonly APPLICATION_VND_APPLE_KEYNOTE: string;
						public static readonly APPLICATION_VND_APPLE_MPEGURL: string;
						public static readonly APPLICATION_VND_APPLE_NUMBERS: string;
						public static readonly APPLICATION_VND_APPLE_PAGES: string;
						public static readonly APPLICATION_VND_ARASTRA_SWI: string;
						public static readonly APPLICATION_VND_ARISTANETWORKS_SWI: string;
						public static readonly APPLICATION_VND_ARTISAN_JSON: string;
						public static readonly APPLICATION_VND_ARTSQUARE: string;
						public static readonly APPLICATION_VND_ASTRAEA_SOFTWARE_IOTA: string;
						public static readonly APPLICATION_VND_AUDIOGRAPH: string;
						public static readonly APPLICATION_VND_AUTOPACKAGE: string;
						public static readonly APPLICATION_VND_AVALON_JSON: string;
						public static readonly APPLICATION_VND_AVISTAR_XML: string;
						public static readonly APPLICATION_VND_BALSAMIQ_BMML_XML: string;
						public static readonly APPLICATION_VND_BALSAMIQ_BMPR: string;
						public static readonly APPLICATION_VND_BANANA_ACCOUNTING: string;
						public static readonly APPLICATION_VND_BBF_USP_ERROR: string;
						public static readonly APPLICATION_VND_BBF_USP_MSG: string;
						public static readonly APPLICATION_VND_BBF_USP_MSG_JSON: string;
						public static readonly APPLICATION_VND_BEKITZUR_STECH_JSON: string;
						public static readonly APPLICATION_VND_BELIGHTSOFT_LHZD_ZIP: string;
						public static readonly APPLICATION_VND_BELIGHTSOFT_LHZL_ZIP: string;
						public static readonly APPLICATION_VND_BINT_MED_CONTENT: string;
						public static readonly APPLICATION_VND_BIOPAX_RDF_XML: string;
						public static readonly APPLICATION_VND_BLINK_IDB_VALUE_WRAPPER: string;
						public static readonly APPLICATION_VND_BLUEICE_MULTIPASS: string;
						public static readonly APPLICATION_VND_BLUETOOTH_EP_OOB: string;
						public static readonly APPLICATION_VND_BLUETOOTH_LE_OOB: string;
						public static readonly APPLICATION_VND_BMI: string;
						public static readonly APPLICATION_VND_BPF: string;
						public static readonly APPLICATION_VND_BPF3: string;
						public static readonly APPLICATION_VND_BUSINESSOBJECTS: string;
						public static readonly APPLICATION_VND_BYU_UAPI_JSON: string;
						public static readonly APPLICATION_VND_BZIP3: string;
						public static readonly APPLICATION_VND_C3VOC_SCHEDULE_XML: string;
						public static readonly APPLICATION_VND_CAB_JSCRIPT: string;
						public static readonly APPLICATION_VND_CANON_CPDL: string;
						public static readonly APPLICATION_VND_CANON_LIPS: string;
						public static readonly APPLICATION_VND_CAPASYSTEMS_PG_JSON: string;
						public static readonly APPLICATION_VND_CENDIO_THINLINC_CLIENTCONF: string;
						public static readonly APPLICATION_VND_CENTURY_SYSTEMS_TCP_STREAM: string;
						public static readonly APPLICATION_VND_CHEMDRAW_XML: string;
						public static readonly APPLICATION_VND_CHESS_PGN: string;
						public static readonly APPLICATION_VND_CHIPNUTS_KARAOKE_MMD: string;
						public static readonly APPLICATION_VND_CIEDI: string;
						public static readonly APPLICATION_VND_CINDERELLA: string;
						public static readonly APPLICATION_VND_CIRPACK_ISDN_EXT: string;
						public static readonly APPLICATION_VND_CITATIONSTYLES_STYLE_XML: string;
						public static readonly APPLICATION_VND_CLAYMORE: string;
						public static readonly APPLICATION_VND_CLOANTO_RP9: string;
						public static readonly APPLICATION_VND_CLONK_C4GROUP: string;
						public static readonly APPLICATION_VND_CLUETRUST_CARTOMOBILE_CONFIG: string;
						public static readonly APPLICATION_VND_CLUETRUST_CARTOMOBILE_CONFIG_PKG: string;
						public static readonly APPLICATION_VND_CMCC_BOMBING_WBXML: string;
						public static readonly APPLICATION_VND_CMCC_SETTING_WBXML: string;
						public static readonly APPLICATION_VND_CNCF_HELM_CHART_CONTENT_V1_TAR_GZIP: string;
						public static readonly APPLICATION_VND_CNCF_HELM_CHART_PROVENANCE_V1_PROV: string;
						public static readonly APPLICATION_VND_CNCF_HELM_CONFIG_V1_JSON: string;
						public static readonly APPLICATION_VND_COFFEESCRIPT: string;
						public static readonly APPLICATION_VND_COLLABIO_XODOCUMENTS_DOCUMENT: string;
						public static readonly APPLICATION_VND_COLLABIO_XODOCUMENTS_DOCUMENT_TEMPLATE: string;
						public static readonly APPLICATION_VND_COLLABIO_XODOCUMENTS_PRESENTATION: string;
						public static readonly APPLICATION_VND_COLLABIO_XODOCUMENTS_PRESENTATION_TEMPLATE: string;
						public static readonly APPLICATION_VND_COLLABIO_XODOCUMENTS_SPREADSHEET: string;
						public static readonly APPLICATION_VND_COLLABIO_XODOCUMENTS_SPREADSHEET_TEMPLATE: string;
						public static readonly APPLICATION_VND_COLLECTION_DOC_JSON: string;
						public static readonly APPLICATION_VND_COLLECTION_JSON: string;
						public static readonly APPLICATION_VND_COLLECTION_NEXT_JSON: string;
						public static readonly APPLICATION_VND_COMICBOOK_RAR: string;
						public static readonly APPLICATION_VND_COMICBOOK_ZIP: string;
						public static readonly APPLICATION_VND_COMMERCE_BATTELLE: string;
						public static readonly APPLICATION_VND_COMMONSPACE: string;
						public static readonly APPLICATION_VND_COMSOCALLER: string;
						public static readonly APPLICATION_VND_CONTACT_CMSG: string;
						public static readonly APPLICATION_VND_COREOS_IGNITION_JSON: string;
						public static readonly APPLICATION_VND_COSMOCALLER: string;
						public static readonly APPLICATION_VND_CRICK_CLICKER: string;
						public static readonly APPLICATION_VND_CRICK_CLICKER_KEYBOARD: string;
						public static readonly APPLICATION_VND_CRICK_CLICKER_PALETTE: string;
						public static readonly APPLICATION_VND_CRICK_CLICKER_TEMPLATE: string;
						public static readonly APPLICATION_VND_CRICK_CLICKER_WORDBANK: string;
						public static readonly APPLICATION_VND_CRITICALTOOLS_WBS_XML: string;
						public static readonly APPLICATION_VND_CRYPTII_PIPE_JSON: string;
						public static readonly APPLICATION_VND_CRYPTOMATOR_ENCRYPTED: string;
						public static readonly APPLICATION_VND_CRYPTOMATOR_VAULT: string;
						public static readonly APPLICATION_VND_CRYPTO_SHADE_FILE: string;
						public static readonly APPLICATION_VND_CTCT_WS_XML: string;
						public static readonly APPLICATION_VND_CTC_POSML: string;
						public static readonly APPLICATION_VND_CUPS_PDF: string;
						public static readonly APPLICATION_VND_CUPS_POSTSCRIPT: string;
						public static readonly APPLICATION_VND_CUPS_PPD: string;
						public static readonly APPLICATION_VND_CUPS_RASTER: string;
						public static readonly APPLICATION_VND_CUPS_RAW: string;
						public static readonly APPLICATION_VND_CURL: string;
						public static readonly APPLICATION_VND_CYAN_DEAN_ROOT_XML: string;
						public static readonly APPLICATION_VND_CYBANK: string;
						public static readonly APPLICATION_VND_CYCLONEDX_JSON: string;
						public static readonly APPLICATION_VND_CYCLONEDX_XML: string;
						public static readonly APPLICATION_VND_D2L_COURSEPACKAGE1P0_ZIP: string;
						public static readonly APPLICATION_VND_D3M_DATASET: string;
						public static readonly APPLICATION_VND_D3M_PROBLEM: string;
						public static readonly APPLICATION_VND_DART: string;
						public static readonly APPLICATION_VND_DATALOG: string;
						public static readonly APPLICATION_VND_DATAPACKAGE_JSON: string;
						public static readonly APPLICATION_VND_DATARESOURCE_JSON: string;
						public static readonly APPLICATION_VND_DATA_VISION_RDZ: string;
						public static readonly APPLICATION_VND_DBF: string;
						public static readonly APPLICATION_VND_DEBIAN_BINARY_PACKAGE: string;
						public static readonly APPLICATION_VND_DECE_DATA: string;
						public static readonly APPLICATION_VND_DECE_TTML_XML: string;
						public static readonly APPLICATION_VND_DECE_UNSPECIFIED: string;
						public static readonly APPLICATION_VND_DECE_ZIP: string;
						public static readonly APPLICATION_VND_DENOVO_FCSELAYOUT_LINK: string;
						public static readonly APPLICATION_VND_DESMUME_MOVIE: string;
						public static readonly APPLICATION_VND_DIR_BI_PLATE_DL_NOSUFFIX: string;
						public static readonly APPLICATION_VND_DM_DELEGATION_XML: string;
						public static readonly APPLICATION_VND_DNA: string;
						public static readonly APPLICATION_VND_DOCOMO_PF: string;
						public static readonly APPLICATION_VND_DOCOMO_PF2: string;
						public static readonly APPLICATION_VND_DOCOMO_UB: string;
						public static readonly APPLICATION_VND_DOCUMENT_JSON: string;
						public static readonly APPLICATION_VND_DOLBY_MOBILE_1: string;
						public static readonly APPLICATION_VND_DOLBY_MOBILE_2: string;
						public static readonly APPLICATION_VND_DOREMIR_SCORECLOUD_BINARY_DOCUMENT: string;
						public static readonly APPLICATION_VND_DPGRAPH: string;
						public static readonly APPLICATION_VND_DREAMFACTORY: string;
						public static readonly APPLICATION_VND_DRIVE_JSON: string;
						public static readonly APPLICATION_VND_DTG_LOCAL: string;
						public static readonly APPLICATION_VND_DTG_LOCAL_FLASH: string;
						public static readonly APPLICATION_VND_DTG_LOCAL_HTML: string;
						public static readonly APPLICATION_VND_DVB_AIT: string;
						public static readonly APPLICATION_VND_DVB_DVBISL_XML: string;
						public static readonly APPLICATION_VND_DVB_DVBJ: string;
						public static readonly APPLICATION_VND_DVB_ESGCONTAINER: string;
						public static readonly APPLICATION_VND_DVB_IPDCDFTNOTIFACCESS: string;
						public static readonly APPLICATION_VND_DVB_IPDCESGACCESS: string;
						public static readonly APPLICATION_VND_DVB_IPDCESGACCESS2: string;
						public static readonly APPLICATION_VND_DVB_IPDCESGPDD: string;
						public static readonly APPLICATION_VND_DVB_IPDCROAMING: string;
						public static readonly APPLICATION_VND_DVB_IPTV_ALFEC_BASE: string;
						public static readonly APPLICATION_VND_DVB_IPTV_ALFEC_ENHANCEMENT: string;
						public static readonly APPLICATION_VND_DVB_NOTIF_AGGREGATE_ROOT_XML: string;
						public static readonly APPLICATION_VND_DVB_NOTIF_CONTAINER_XML: string;
						public static readonly APPLICATION_VND_DVB_NOTIF_GENERIC_XML: string;
						public static readonly APPLICATION_VND_DVB_NOTIF_IA_MSGLIST_XML: string;
						public static readonly APPLICATION_VND_DVB_NOTIF_IA_REGISTRATION_REQUEST_XML: string;
						public static readonly APPLICATION_VND_DVB_NOTIF_IA_REGISTRATION_RESPONSE_XML: string;
						public static readonly APPLICATION_VND_DVB_NOTIF_INIT_XML: string;
						public static readonly APPLICATION_VND_DVB_PFR: string;
						public static readonly APPLICATION_VND_DVB_SERVICE: string;
						public static readonly APPLICATION_VND_DXR: string;
						public static readonly APPLICATION_VND_DYNAGEO: string;
						public static readonly APPLICATION_VND_DZR: string;
						public static readonly APPLICATION_VND_EASYKARAOKE_CDGDOWNLOAD: string;
						public static readonly APPLICATION_VND_ECDIS_UPDATE: string;
						public static readonly APPLICATION_VND_ECIP_RLP: string;
						public static readonly APPLICATION_VND_ECLIPSE_DITTO_JSON: string;
						public static readonly APPLICATION_VND_ECOWIN_CHART: string;
						public static readonly APPLICATION_VND_ECOWIN_FILEREQUEST: string;
						public static readonly APPLICATION_VND_ECOWIN_FILEUPDATE: string;
						public static readonly APPLICATION_VND_ECOWIN_SERIES: string;
						public static readonly APPLICATION_VND_ECOWIN_SERIESREQUEST: string;
						public static readonly APPLICATION_VND_ECOWIN_SERIESUPDATE: string;
						public static readonly APPLICATION_VND_EFI_IMG: string;
						public static readonly APPLICATION_VND_EFI_ISO: string;
						public static readonly APPLICATION_VND_ELN_ZIP: string;
						public static readonly APPLICATION_VND_EMCLIENT_ACCESSREQUEST_XML: string;
						public static readonly APPLICATION_VND_ENLIVEN: string;
						public static readonly APPLICATION_VND_ENPHASE_ENVOY: string;
						public static readonly APPLICATION_VND_EPRINTS_DATA_XML: string;
						public static readonly APPLICATION_VND_EPSON_ESF: string;
						public static readonly APPLICATION_VND_EPSON_MSF: string;
						public static readonly APPLICATION_VND_EPSON_QUICKANIME: string;
						public static readonly APPLICATION_VND_EPSON_SALT: string;
						public static readonly APPLICATION_VND_EPSON_SSF: string;
						public static readonly APPLICATION_VND_ERICSSON_QUICKCALL: string;
						public static readonly APPLICATION_VND_EROFS: string;
						public static readonly APPLICATION_VND_ESPASS_ESPASS_ZIP: string;
						public static readonly APPLICATION_VND_ESZIGNO3_XML: string;
						public static readonly APPLICATION_VND_ETSI_AOC_XML: string;
						public static readonly APPLICATION_VND_ETSI_ASIC_E_ZIP: string;
						public static readonly APPLICATION_VND_ETSI_ASIC_S_ZIP: string;
						public static readonly APPLICATION_VND_ETSI_CUG_XML: string;
						public static readonly APPLICATION_VND_ETSI_IPTVCOMMAND_XML: string;
						public static readonly APPLICATION_VND_ETSI_IPTVDISCOVERY_XML: string;
						public static readonly APPLICATION_VND_ETSI_IPTVPROFILE_XML: string;
						public static readonly APPLICATION_VND_ETSI_IPTVSAD_BC_XML: string;
						public static readonly APPLICATION_VND_ETSI_IPTVSAD_COD_XML: string;
						public static readonly APPLICATION_VND_ETSI_IPTVSAD_NPVR_XML: string;
						public static readonly APPLICATION_VND_ETSI_IPTVSERVICE_XML: string;
						public static readonly APPLICATION_VND_ETSI_IPTVSYNC_XML: string;
						public static readonly APPLICATION_VND_ETSI_IPTVUEPROFILE_XML: string;
						public static readonly APPLICATION_VND_ETSI_MCID_XML: string;
						public static readonly APPLICATION_VND_ETSI_MHEG5: string;
						public static readonly APPLICATION_VND_ETSI_OVERLOAD_CONTROL_POLICY_DATASET_XML: string;
						public static readonly APPLICATION_VND_ETSI_PSTN_XML: string;
						public static readonly APPLICATION_VND_ETSI_SCI_XML: string;
						public static readonly APPLICATION_VND_ETSI_SIMSERVS_XML: string;
						public static readonly APPLICATION_VND_ETSI_TIMESTAMP_TOKEN: string;
						public static readonly APPLICATION_VND_ETSI_TSL_DER: string;
						public static readonly APPLICATION_VND_ETSI_TSL_XML: string;
						public static readonly APPLICATION_VND_EUDORA_DATA: string;
						public static readonly APPLICATION_VND_EU_KASPARIAN_CAR_JSON: string;
						public static readonly APPLICATION_VND_EVOLV_ECIG_PROFILE: string;
						public static readonly APPLICATION_VND_EVOLV_ECIG_SETTINGS: string;
						public static readonly APPLICATION_VND_EVOLV_ECIG_THEME: string;
						public static readonly APPLICATION_VND_EXSTREAM_EMPOWER_ZIP: string;
						public static readonly APPLICATION_VND_EXSTREAM_PACKAGE: string;
						public static readonly APPLICATION_VND_EZPIX_ALBUM: string;
						public static readonly APPLICATION_VND_EZPIX_PACKAGE: string;
						public static readonly APPLICATION_VND_FAMILYSEARCH_GEDCOM_ZIP: string;
						public static readonly APPLICATION_VND_FASTCOPY_DISK_IMAGE: string;
						public static readonly APPLICATION_VND_FDF: string;
						public static readonly APPLICATION_VND_FDSN_MSEED: string;
						public static readonly APPLICATION_VND_FDSN_SEED: string;
						public static readonly APPLICATION_VND_FFSNS: string;
						public static readonly APPLICATION_VND_FICLAB_FLB_ZIP: string;
						public static readonly APPLICATION_VND_FILMIT_ZFC: string;
						public static readonly APPLICATION_VND_FINTS: string;
						public static readonly APPLICATION_VND_FIREMONKEYS_CLOUDCELL: string;
						public static readonly APPLICATION_VND_FLOGRAPHIT: string;
						public static readonly APPLICATION_VND_FLUXTIME_CLIP: string;
						public static readonly APPLICATION_VND_FONT_FONTFORGE_SFD: string;
						public static readonly APPLICATION_VND_FRAMEMAKER: string;
						public static readonly APPLICATION_VND_FREELOG_COMIC: string;
						public static readonly APPLICATION_VND_FROGANS_FNC: string;
						public static readonly APPLICATION_VND_FROGANS_LTF: string;
						public static readonly APPLICATION_VND_FSC_WEBLAUNCH: string;
						public static readonly APPLICATION_VND_FUJIFILM_FB_DOCUWORKS: string;
						public static readonly APPLICATION_VND_FUJIFILM_FB_DOCUWORKS_BINDER: string;
						public static readonly APPLICATION_VND_FUJIFILM_FB_DOCUWORKS_CONTAINER: string;
						public static readonly APPLICATION_VND_FUJIFILM_FB_JFI_XML: string;
						public static readonly APPLICATION_VND_FUJITSU_OASYS: string;
						public static readonly APPLICATION_VND_FUJITSU_OASYS2: string;
						public static readonly APPLICATION_VND_FUJITSU_OASYS3: string;
						public static readonly APPLICATION_VND_FUJITSU_OASYSGP: string;
						public static readonly APPLICATION_VND_FUJITSU_OASYSPRS: string;
						public static readonly APPLICATION_VND_FUJIXEROX_ART4: string;
						public static readonly APPLICATION_VND_FUJIXEROX_ART_EX: string;
						public static readonly APPLICATION_VND_FUJIXEROX_DDD: string;
						public static readonly APPLICATION_VND_FUJIXEROX_DOCUWORKS: string;
						public static readonly APPLICATION_VND_FUJIXEROX_DOCUWORKS_BINDER: string;
						public static readonly APPLICATION_VND_FUJIXEROX_DOCUWORKS_CONTAINER: string;
						public static readonly APPLICATION_VND_FUJIXEROX_HBPL: string;
						public static readonly APPLICATION_VND_FUTOIN_CBOR: string;
						public static readonly APPLICATION_VND_FUTOIN_JSON: string;
						public static readonly APPLICATION_VND_FUT_MISNET: string;
						public static readonly APPLICATION_VND_FUZZYSHEET: string;
						public static readonly APPLICATION_VND_F_SECURE_MOBILE: string;
						public static readonly APPLICATION_VND_GENOMATIX_TUXEDO: string;
						public static readonly APPLICATION_VND_GENOZIP: string;
						public static readonly APPLICATION_VND_GENTICS_GRD_JSON: string;
						public static readonly APPLICATION_VND_GENTOO_CATMETADATA_XML: string;
						public static readonly APPLICATION_VND_GENTOO_EBUILD: string;
						public static readonly APPLICATION_VND_GENTOO_ECLASS: string;
						public static readonly APPLICATION_VND_GENTOO_GPKG: string;
						public static readonly APPLICATION_VND_GENTOO_MANIFEST: string;
						public static readonly APPLICATION_VND_GENTOO_PKGMETADATA_XML: string;
						public static readonly APPLICATION_VND_GENTOO_XPAK: string;
						public static readonly APPLICATION_VND_GEOCUBE_XML: string;
						public static readonly APPLICATION_VND_GEOGEBRA_FILE: string;
						public static readonly APPLICATION_VND_GEOGEBRA_SLIDES: string;
						public static readonly APPLICATION_VND_GEOGEBRA_TOOL: string;
						public static readonly APPLICATION_VND_GEOMETRY_EXPLORER: string;
						public static readonly APPLICATION_VND_GEONEXT: string;
						public static readonly APPLICATION_VND_GEOPLAN: string;
						public static readonly APPLICATION_VND_GEOSPACE: string;
						public static readonly APPLICATION_VND_GEO_JSON: string;
						public static readonly APPLICATION_VND_GERBER: string;
						public static readonly APPLICATION_VND_GLOBALPLATFORM_CARD_CONTENT_MGT: string;
						public static readonly APPLICATION_VND_GLOBALPLATFORM_CARD_CONTENT_MGT_RESPONSE: string;
						public static readonly APPLICATION_VND_GMX: string;
						public static readonly APPLICATION_VND_GNU_TALER_EXCHANGE_JSON: string;
						public static readonly APPLICATION_VND_GNU_TALER_MERCHANT_JSON: string;
						public static readonly APPLICATION_VND_GOOGLE_APPS_DOCUMENT: string;
						public static readonly APPLICATION_VND_GOOGLE_APPS_DRAWING: string;
						public static readonly APPLICATION_VND_GOOGLE_APPS_PRESENTATION: string;
						public static readonly APPLICATION_VND_GOOGLE_APPS_SPREADSHEET: string;
						public static readonly APPLICATION_VND_GOOGLE_EARTH_KML_XML: string;
						public static readonly APPLICATION_VND_GOOGLE_EARTH_KMZ: string;
						public static readonly APPLICATION_VND_GOV_SK_E_FORM_XML: string;
						public static readonly APPLICATION_VND_GOV_SK_E_FORM_ZIP: string;
						public static readonly APPLICATION_VND_GOV_SK_XMLDATACONTAINER_XML: string;
						public static readonly APPLICATION_VND_GPXSEE_MAP_XML: string;
						public static readonly APPLICATION_VND_GRAFEQ: string;
						public static readonly APPLICATION_VND_GRIDMP: string;
						public static readonly APPLICATION_VND_GROOVE_ACCOUNT: string;
						public static readonly APPLICATION_VND_GROOVE_HELP: string;
						public static readonly APPLICATION_VND_GROOVE_IDENTITY_MESSAGE: string;
						public static readonly APPLICATION_VND_GROOVE_INJECTOR: string;
						public static readonly APPLICATION_VND_GROOVE_TOOL_MESSAGE: string;
						public static readonly APPLICATION_VND_GROOVE_TOOL_TEMPLATE: string;
						public static readonly APPLICATION_VND_GROOVE_VCARD: string;
						public static readonly APPLICATION_VND_HAL_JSON: string;
						public static readonly APPLICATION_VND_HAL_XML: string;
						public static readonly APPLICATION_VND_HANDHELD_ENTERTAINMENT_XML: string;
						public static readonly APPLICATION_VND_HBCI: string;
						public static readonly APPLICATION_VND_HCL_BIREPORTS: string;
						public static readonly APPLICATION_VND_HC_JSON: string;
						public static readonly APPLICATION_VND_HDT: string;
						public static readonly APPLICATION_VND_HEROKU_JSON: string;
						public static readonly APPLICATION_VND_HHE_LESSON_PLAYER: string;
						public static readonly APPLICATION_VND_HP_HPGL: string;
						public static readonly APPLICATION_VND_HP_HPID: string;
						public static readonly APPLICATION_VND_HP_HPS: string;
						public static readonly APPLICATION_VND_HP_JLYT: string;
						public static readonly APPLICATION_VND_HP_PCL: string;
						public static readonly APPLICATION_VND_HP_PCLXL: string;
						public static readonly APPLICATION_VND_HSL: string;
						public static readonly APPLICATION_VND_HTTPHONE: string;
						public static readonly APPLICATION_VND_HYDROSTATIX_SOF_DATA: string;
						public static readonly APPLICATION_VND_HYPERDRIVE_JSON: string;
						public static readonly APPLICATION_VND_HYPER_ITEM_JSON: string;
						public static readonly APPLICATION_VND_HYPER_JSON: string;
						public static readonly APPLICATION_VND_HZN_3D_CROSSWORD: string;
						public static readonly APPLICATION_VND_IBM_AFPLINEDATA: string;
						public static readonly APPLICATION_VND_IBM_ELECTRONIC_MEDIA: string;
						public static readonly APPLICATION_VND_IBM_MINIPAY: string;
						public static readonly APPLICATION_VND_IBM_MODCAP: string;
						public static readonly APPLICATION_VND_IBM_RIGHTS_MANAGEMENT: string;
						public static readonly APPLICATION_VND_IBM_SECURE_CONTAINER: string;
						public static readonly APPLICATION_VND_ICCPROFILE: string;
						public static readonly APPLICATION_VND_IEEE_1905: string;
						public static readonly APPLICATION_VND_IGLOADER: string;
						public static readonly APPLICATION_VND_IMAGEMETER_FOLDER_ZIP: string;
						public static readonly APPLICATION_VND_IMAGEMETER_IMAGE_ZIP: string;
						public static readonly APPLICATION_VND_IMMERVISION_IVP: string;
						public static readonly APPLICATION_VND_IMMERVISION_IVU: string;
						public static readonly APPLICATION_VND_IMS_IMSCCV1P1: string;
						public static readonly APPLICATION_VND_IMS_IMSCCV1P2: string;
						public static readonly APPLICATION_VND_IMS_IMSCCV1P3: string;
						public static readonly APPLICATION_VND_IMS_LIS_V2_RESULT_JSON: string;
						public static readonly APPLICATION_VND_IMS_LTI_V2_TOOLCONSUMERPROFILE_JSON: string;
						public static readonly APPLICATION_VND_IMS_LTI_V2_TOOLPROXY_ID_JSON: string;
						public static readonly APPLICATION_VND_IMS_LTI_V2_TOOLPROXY_JSON: string;
						public static readonly APPLICATION_VND_IMS_LTI_V2_TOOLSETTINGS_JSON: string;
						public static readonly APPLICATION_VND_IMS_LTI_V2_TOOLSETTINGS_SIMPLE_JSON: string;
						public static readonly APPLICATION_VND_INFORMEDCONTROL_RMS_XML: string;
						public static readonly APPLICATION_VND_INFORMIX_VISIONARY: string;
						public static readonly APPLICATION_VND_INFOTECH_PROJECT: string;
						public static readonly APPLICATION_VND_INFOTECH_PROJECT_XML: string;
						public static readonly APPLICATION_VND_INNOPATH_WAMP_NOTIFICATION: string;
						public static readonly APPLICATION_VND_INSORS_IGM: string;
						public static readonly APPLICATION_VND_INTERCON_FORMNET: string;
						public static readonly APPLICATION_VND_INTERGEO: string;
						public static readonly APPLICATION_VND_INTERTRUST_DIGIBOX: string;
						public static readonly APPLICATION_VND_INTERTRUST_NNCP: string;
						public static readonly APPLICATION_VND_INTU_QBO: string;
						public static readonly APPLICATION_VND_INTU_QFX: string;
						public static readonly APPLICATION_VND_IPFS_IPNS_RECORD: string;
						public static readonly APPLICATION_VND_IPLD_CAR: string;
						public static readonly APPLICATION_VND_IPLD_DAG_CBOR: string;
						public static readonly APPLICATION_VND_IPLD_DAG_JSON: string;
						public static readonly APPLICATION_VND_IPLD_RAW: string;
						public static readonly APPLICATION_VND_IPTC_G2_CATALOGITEM_XML: string;
						public static readonly APPLICATION_VND_IPTC_G2_CONCEPTITEM_XML: string;
						public static readonly APPLICATION_VND_IPTC_G2_KNOWLEDGEITEM_XML: string;
						public static readonly APPLICATION_VND_IPTC_G2_NEWSITEM_XML: string;
						public static readonly APPLICATION_VND_IPTC_G2_NEWSMESSAGE_XML: string;
						public static readonly APPLICATION_VND_IPTC_G2_PACKAGEITEM_XML: string;
						public static readonly APPLICATION_VND_IPTC_G2_PLANNINGITEM_XML: string;
						public static readonly APPLICATION_VND_IPUNPLUGGED_RCPROFILE: string;
						public static readonly APPLICATION_VND_IREPOSITORY_PACKAGE_XML: string;
						public static readonly APPLICATION_VND_ISAC_FCS: string;
						public static readonly APPLICATION_VND_ISO11783_10_ZIP: string;
						public static readonly APPLICATION_VND_IS_XPR: string;
						public static readonly APPLICATION_VND_JAM: string;
						public static readonly APPLICATION_VND_JAPANNET_DIRECTORY_SERVICE: string;
						public static readonly APPLICATION_VND_JAPANNET_JPNSTORE_WAKEUP: string;
						public static readonly APPLICATION_VND_JAPANNET_PAYMENT_WAKEUP: string;
						public static readonly APPLICATION_VND_JAPANNET_REGISTRATION: string;
						public static readonly APPLICATION_VND_JAPANNET_REGISTRATION_WAKEUP: string;
						public static readonly APPLICATION_VND_JAPANNET_SETSTORE_WAKEUP: string;
						public static readonly APPLICATION_VND_JAPANNET_VERIFICATION: string;
						public static readonly APPLICATION_VND_JAPANNET_VERIFICATION_WAKEUP: string;
						public static readonly APPLICATION_VND_JCP_JAVAME_MIDLET_RMS: string;
						public static readonly APPLICATION_VND_JISP: string;
						public static readonly APPLICATION_VND_JOOST_JODA_ARCHIVE: string;
						public static readonly APPLICATION_VND_JSK_ISDN_NGN: string;
						public static readonly APPLICATION_VND_KAHOOTZ: string;
						public static readonly APPLICATION_VND_KDE_KARBON: string;
						public static readonly APPLICATION_VND_KDE_KCHART: string;
						public static readonly APPLICATION_VND_KDE_KFORMULA: string;
						public static readonly APPLICATION_VND_KDE_KIVIO: string;
						public static readonly APPLICATION_VND_KDE_KONTOUR: string;
						public static readonly APPLICATION_VND_KDE_KPRESENTER: string;
						public static readonly APPLICATION_VND_KDE_KSPREAD: string;
						public static readonly APPLICATION_VND_KDE_KWORD: string;
						public static readonly APPLICATION_VND_KENAMEAAPP: string;
						public static readonly APPLICATION_VND_KIDSPIRATION: string;
						public static readonly APPLICATION_VND_KINAR: string;
						public static readonly APPLICATION_VND_KOAN: string;
						public static readonly APPLICATION_VND_KODAK_DESCRIPTOR: string;
						public static readonly APPLICATION_VND_LAS: string;
						public static readonly APPLICATION_VND_LASZIP: string;
						public static readonly APPLICATION_VND_LAS_LAS_JSON: string;
						public static readonly APPLICATION_VND_LAS_LAS_XML: string;
						public static readonly APPLICATION_VND_LDEV_PRODUCTLICENSING: string;
						public static readonly APPLICATION_VND_LEAP_JSON: string;
						public static readonly APPLICATION_VND_LIBERTY_REQUEST_XML: string;
						public static readonly APPLICATION_VND_LLAMAGRAPHICS_LIFE_BALANCE_DESKTOP: string;
						public static readonly APPLICATION_VND_LLAMAGRAPHICS_LIFE_BALANCE_EXCHANGE_XML: string;
						public static readonly APPLICATION_VND_LOGIPIPE_CIRCUIT_ZIP: string;
						public static readonly APPLICATION_VND_LOOM: string;
						public static readonly APPLICATION_VND_LOTUS_1_2_3: string;
						public static readonly APPLICATION_VND_LOTUS_APPROACH: string;
						public static readonly APPLICATION_VND_LOTUS_FREELANCE: string;
						public static readonly APPLICATION_VND_LOTUS_NOTES: string;
						public static readonly APPLICATION_VND_LOTUS_ORGANIZER: string;
						public static readonly APPLICATION_VND_LOTUS_SCREENCAM: string;
						public static readonly APPLICATION_VND_LOTUS_WORDPRO: string;
						public static readonly APPLICATION_VND_MACPORTS_PORTPKG: string;
						public static readonly APPLICATION_VND_MAPBOX_VECTOR_TILE: string;
						public static readonly APPLICATION_VND_MARLIN_DRM_ACTIONTOKEN_XML: string;
						public static readonly APPLICATION_VND_MARLIN_DRM_CONFTOKEN_XML: string;
						public static readonly APPLICATION_VND_MARLIN_DRM_LICENSE_XML: string;
						public static readonly APPLICATION_VND_MARLIN_DRM_MDCF: string;
						public static readonly APPLICATION_VND_MASON_JSON: string;
						public static readonly APPLICATION_VND_MAXAR_ARCHIVE_3TZ_ZIP: string;
						public static readonly APPLICATION_VND_MAXMIND_MAXMIND_DB: string;
						public static readonly APPLICATION_VND_MCD: string;
						public static readonly APPLICATION_VND_MDL: string;
						public static readonly APPLICATION_VND_MDL_MBSDF: string;
						public static readonly APPLICATION_VND_MEDCALCDATA: string;
						public static readonly APPLICATION_VND_MEDIASTATION_CDKEY: string;
						public static readonly APPLICATION_VND_MEDICALHOLODECK_RECORDXR: string;
						public static readonly APPLICATION_VND_MERIDIAN_SLINGSHOT: string;
						public static readonly APPLICATION_VND_MERMAID: string;
						public static readonly APPLICATION_VND_MFER: string;
						public static readonly APPLICATION_VND_MFMP: string;
						public static readonly APPLICATION_VND_MICROGRAFX_FLO: string;
						public static readonly APPLICATION_VND_MICROGRAFX_IGX: string;
						public static readonly APPLICATION_VND_MICROSOFT_PORTABLE_EXECUTABLE: string;
						public static readonly APPLICATION_VND_MICROSOFT_WINDOWS_THUMBNAIL_CACHE: string;
						public static readonly APPLICATION_VND_MICRO_JSON: string;
						public static readonly APPLICATION_VND_MIELE_JSON: string;
						public static readonly APPLICATION_VND_MIF: string;
						public static readonly APPLICATION_VND_MINISOFT_HP3000_SAVE: string;
						public static readonly APPLICATION_VND_MITSUBISHI_MISTY_GUARD_TRUSTWEB: string;
						public static readonly APPLICATION_VND_MOBIUS_DAF: string;
						public static readonly APPLICATION_VND_MOBIUS_DIS: string;
						public static readonly APPLICATION_VND_MOBIUS_MBK: string;
						public static readonly APPLICATION_VND_MOBIUS_MQY: string;
						public static readonly APPLICATION_VND_MOBIUS_MSL: string;
						public static readonly APPLICATION_VND_MOBIUS_PLC: string;
						public static readonly APPLICATION_VND_MOBIUS_TXF: string;
						public static readonly APPLICATION_VND_MODL: string;
						public static readonly APPLICATION_VND_MOPHUN_APPLICATION: string;
						public static readonly APPLICATION_VND_MOPHUN_CERTIFICATE: string;
						public static readonly APPLICATION_VND_MOTOROLA_FLEXSUITE: string;
						public static readonly APPLICATION_VND_MOTOROLA_FLEXSUITE_ADSI: string;
						public static readonly APPLICATION_VND_MOTOROLA_FLEXSUITE_FIS: string;
						public static readonly APPLICATION_VND_MOTOROLA_FLEXSUITE_GOTAP: string;
						public static readonly APPLICATION_VND_MOTOROLA_FLEXSUITE_KMR: string;
						public static readonly APPLICATION_VND_MOTOROLA_FLEXSUITE_TTC: string;
						public static readonly APPLICATION_VND_MOTOROLA_FLEXSUITE_WEM: string;
						public static readonly APPLICATION_VND_MOTOROLA_IPRM: string;
						public static readonly APPLICATION_VND_MOTOROLA_SCREEN3_GZIP: string;
						public static readonly APPLICATION_VND_MOTOROLA_SCREEN3_XML: string;
						public static readonly APPLICATION_VND_MOZILLA_XUL_XML: string;
						public static readonly APPLICATION_VND_MSA_DISK_IMAGE: string;
						public static readonly APPLICATION_VND_MSEQ: string;
						public static readonly APPLICATION_VND_MSIGN: string;
						public static readonly APPLICATION_VND_MS_3MFDOCUMENT: string;
						public static readonly APPLICATION_VND_MS_ARTGALRY: string;
						public static readonly APPLICATION_VND_MS_ASF: string;
						public static readonly APPLICATION_VND_MS_CAB_COMPRESSED: string;
						public static readonly APPLICATION_VND_MS_EXCEL: string;
						public static readonly APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12: string;
						public static readonly APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12: string;
						public static readonly APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12: string;
						public static readonly APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12: string;
						public static readonly APPLICATION_VND_MS_FONTOBJECT: string;
						public static readonly APPLICATION_VND_MS_HTMLHELP: string;
						public static readonly APPLICATION_VND_MS_IMS: string;
						public static readonly APPLICATION_VND_MS_LRM: string;
						public static readonly APPLICATION_VND_MS_OFFICETHEME: string;
						public static readonly APPLICATION_VND_MS_OFFICE_ACTIVEX_XML: string;
						public static readonly APPLICATION_VND_MS_PKI_SECCAT: string;
						public static readonly APPLICATION_VND_MS_PLAYREADY_INITIATOR_XML: string;
						public static readonly APPLICATION_VND_MS_POWERPOINT: string;
						public static readonly APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12: string;
						public static readonly APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12: string;
						public static readonly APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12: string;
						public static readonly APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12: string;
						public static readonly APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12: string;
						public static readonly APPLICATION_VND_MS_PRINTDEVICECAPABILITIES_XML: string;
						public static readonly APPLICATION_VND_MS_PRINTSCHEMATICKET_XML: string;
						public static readonly APPLICATION_VND_MS_PROJECT: string;
						public static readonly APPLICATION_VND_MS_TNEF: string;
						public static readonly APPLICATION_VND_MS_WINDOWS_DEVICEPAIRING: string;
						public static readonly APPLICATION_VND_MS_WINDOWS_NWPRINTING_OOB: string;
						public static readonly APPLICATION_VND_MS_WINDOWS_PRINTERPAIRING: string;
						public static readonly APPLICATION_VND_MS_WINDOWS_WSD_OOB: string;
						public static readonly APPLICATION_VND_MS_WMDRM_LIC_CHLG_REQ: string;
						public static readonly APPLICATION_VND_MS_WMDRM_LIC_RESP: string;
						public static readonly APPLICATION_VND_MS_WMDRM_METER_CHLG_REQ: string;
						public static readonly APPLICATION_VND_MS_WMDRM_METER_RESP: string;
						public static readonly APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12: string;
						public static readonly APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12: string;
						public static readonly APPLICATION_VND_MS_WORKS: string;
						public static readonly APPLICATION_VND_MS_WPL: string;
						public static readonly APPLICATION_VND_MS_XPSDOCUMENT: string;
						public static readonly APPLICATION_VND_MULTIAD_CREATOR: string;
						public static readonly APPLICATION_VND_MULTIAD_CREATOR_CIF: string;
						public static readonly APPLICATION_VND_MUSICIAN: string;
						public static readonly APPLICATION_VND_MUSIC_NIFF: string;
						public static readonly APPLICATION_VND_MUVEE_STYLE: string;
						public static readonly APPLICATION_VND_MYNFC: string;
						public static readonly APPLICATION_VND_NACAMAR_YBRID_JSON: string;
						public static readonly APPLICATION_VND_NATO_BINDINGDATAOBJECT_CBOR: string;
						public static readonly APPLICATION_VND_NATO_BINDINGDATAOBJECT_JSON: string;
						public static readonly APPLICATION_VND_NATO_BINDINGDATAOBJECT_XML: string;
						public static readonly APPLICATION_VND_NATO_OPENXMLFORMATS_PACKAGE_IEPD_ZIP: string;
						public static readonly APPLICATION_VND_NCD_CONTROL: string;
						public static readonly APPLICATION_VND_NCD_REFERENCE: string;
						public static readonly APPLICATION_VND_NEARST_INV_JSON: string;
						public static readonly APPLICATION_VND_NEBUMIND_LINE: string;
						public static readonly APPLICATION_VND_NERVANA: string;
						public static readonly APPLICATION_VND_NETFPX: string;
						public static readonly APPLICATION_VND_NEUROLANGUAGE_NLU: string;
						public static readonly APPLICATION_VND_NIMN: string;
						public static readonly APPLICATION_VND_NINTENDO_NITRO_ROM: string;
						public static readonly APPLICATION_VND_NINTENDO_SNES_ROM: string;
						public static readonly APPLICATION_VND_NITF: string;
						public static readonly APPLICATION_VND_NOBLENET_DIRECTORY: string;
						public static readonly APPLICATION_VND_NOBLENET_SEALER: string;
						public static readonly APPLICATION_VND_NOBLENET_WEB: string;
						public static readonly APPLICATION_VND_NOKIA_CATALOGS: string;
						public static readonly APPLICATION_VND_NOKIA_CONML_WBXML: string;
						public static readonly APPLICATION_VND_NOKIA_CONML_XML: string;
						public static readonly APPLICATION_VND_NOKIA_IPDC_PURCHASE_RESPONSE: string;
						public static readonly APPLICATION_VND_NOKIA_IPTV_CONFIG_XML: string;
						public static readonly APPLICATION_VND_NOKIA_ISDS_RADIO_PRESETS: string;
						public static readonly APPLICATION_VND_NOKIA_LANDMARKCOLLECTION_XML: string;
						public static readonly APPLICATION_VND_NOKIA_LANDMARK_WBXML: string;
						public static readonly APPLICATION_VND_NOKIA_LANDMARK_XML: string;
						public static readonly APPLICATION_VND_NOKIA_NCD: string;
						public static readonly APPLICATION_VND_NOKIA_N_GAGE_AC_XML: string;
						public static readonly APPLICATION_VND_NOKIA_N_GAGE_DATA: string;
						public static readonly APPLICATION_VND_NOKIA_N_GAGE_SYMBIAN_INSTALL: string;
						public static readonly APPLICATION_VND_NOKIA_PCD_WBXML: string;
						public static readonly APPLICATION_VND_NOKIA_PCD_XML: string;
						public static readonly APPLICATION_VND_NOKIA_RADIO_PRESET: string;
						public static readonly APPLICATION_VND_NOKIA_RADIO_PRESETS: string;
						public static readonly APPLICATION_VND_NOKIA_SYNCSET_WBXML: string;
						public static readonly APPLICATION_VND_NOVADIGM_EDM: string;
						public static readonly APPLICATION_VND_NOVADIGM_EDX: string;
						public static readonly APPLICATION_VND_NOVADIGM_EXT: string;
						public static readonly APPLICATION_VND_NTT_LOCAL_CONTENT_SHARE: string;
						public static readonly APPLICATION_VND_NTT_LOCAL_FILE_TRANSFER: string;
						public static readonly APPLICATION_VND_NTT_LOCAL_OGW_REMOTE_ACCESS: string;
						public static readonly APPLICATION_VND_NTT_LOCAL_SIP_TA_REMOTE: string;
						public static readonly APPLICATION_VND_NTT_LOCAL_SIP_TA_TCP_STREAM: string;
						public static readonly APPLICATION_VND_OAI_WORKFLOWS: string;
						public static readonly APPLICATION_VND_OAI_WORKFLOWS_JSON: string;
						public static readonly APPLICATION_VND_OAI_WORKFLOWS_YAML: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_BASE: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_CHART: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_CHART_TEMPLATE: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA_TEMPLATE: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS_TEMPLATE: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_IMAGE: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_IMAGE_TEMPLATE: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION_TEMPLATE: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET_TEMPLATE: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT_MASTER: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT_MASTER_TEMPLATE: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT_TEMPLATE: string;
						public static readonly APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT_WEB: string;
						public static readonly APPLICATION_VND_OASIS_PRESENTATION: string;
						public static readonly APPLICATION_VND_OASIS_SPREADSHEET: string;
						public static readonly APPLICATION_VND_OASIS_TEXT: string;
						public static readonly APPLICATION_VND_OBN: string;
						public static readonly APPLICATION_VND_OCF_CBOR: string;
						public static readonly APPLICATION_VND_OCI_IMAGE_MANIFEST_V1_JSON: string;
						public static readonly APPLICATION_VND_OFTN_L10N_JSON: string;
						public static readonly APPLICATION_VND_OIPF_CONTENTACCESSDOWNLOAD_XML: string;
						public static readonly APPLICATION_VND_OIPF_CONTENTACCESSSTREAMING_XML: string;
						public static readonly APPLICATION_VND_OIPF_CSPG_HEXBINARY: string;
						public static readonly APPLICATION_VND_OIPF_DAE_SVG_XML: string;
						public static readonly APPLICATION_VND_OIPF_DAE_XHTML_XML: string;
						public static readonly APPLICATION_VND_OIPF_MIPPVCONTROLMESSAGE_XML: string;
						public static readonly APPLICATION_VND_OIPF_PAE_GEM: string;
						public static readonly APPLICATION_VND_OIPF_SPDISCOVERY_XML: string;
						public static readonly APPLICATION_VND_OIPF_SPDLIST_XML: string;
						public static readonly APPLICATION_VND_OIPF_UEPROFILE_XML: string;
						public static readonly APPLICATION_VND_OIPF_USERPROFILE_XML: string;
						public static readonly APPLICATION_VND_OLPC_SUGAR: string;
						public static readonly APPLICATION_VND_OMADS_EMAIL_XML: string;
						public static readonly APPLICATION_VND_OMADS_FILE_XML: string;
						public static readonly APPLICATION_VND_OMADS_FOLDER_XML: string;
						public static readonly APPLICATION_VND_OMALOC_SUPL_INIT: string;
						public static readonly APPLICATION_VND_OMA_BCAST_ASSOCIATED_PROCEDURE_PARAMETER_XML: string;
						public static readonly APPLICATION_VND_OMA_BCAST_DRM_TRIGGER_XML: string;
						public static readonly APPLICATION_VND_OMA_BCAST_IMD_XML: string;
						public static readonly APPLICATION_VND_OMA_BCAST_LTKM: string;
						public static readonly APPLICATION_VND_OMA_BCAST_NOTIFICATION_XML: string;
						public static readonly APPLICATION_VND_OMA_BCAST_PROVISIONINGTRIGGER: string;
						public static readonly APPLICATION_VND_OMA_BCAST_SGBOOT: string;
						public static readonly APPLICATION_VND_OMA_BCAST_SGDD_XML: string;
						public static readonly APPLICATION_VND_OMA_BCAST_SGDU: string;
						public static readonly APPLICATION_VND_OMA_BCAST_SIMPLE_SYMBOL_CONTAINER: string;
						public static readonly APPLICATION_VND_OMA_BCAST_SMARTCARD_TRIGGER_XML: string;
						public static readonly APPLICATION_VND_OMA_BCAST_SPROV_XML: string;
						public static readonly APPLICATION_VND_OMA_BCAST_STKM: string;
						public static readonly APPLICATION_VND_OMA_CAB_ADDRESS_BOOK_XML: string;
						public static readonly APPLICATION_VND_OMA_CAB_FEATURE_HANDLER_XML: string;
						public static readonly APPLICATION_VND_OMA_CAB_PCC_XML: string;
						public static readonly APPLICATION_VND_OMA_CAB_SUBS_INVITE_XML: string;
						public static readonly APPLICATION_VND_OMA_CAB_USER_PREFS_XML: string;
						public static readonly APPLICATION_VND_OMA_DCD: string;
						public static readonly APPLICATION_VND_OMA_DCDC: string;
						public static readonly APPLICATION_VND_OMA_DD2_XML: string;
						public static readonly APPLICATION_VND_OMA_DD_XML: string;
						public static readonly APPLICATION_VND_OMA_DRM_CONTENT: string;
						public static readonly APPLICATION_VND_OMA_DRM_MESSAGE: string;
						public static readonly APPLICATION_VND_OMA_DRM_RIGHTS_WBXML: string;
						public static readonly APPLICATION_VND_OMA_DRM_RIGHTS_XML: string;
						public static readonly APPLICATION_VND_OMA_DRM_RISD_XML: string;
						public static readonly APPLICATION_VND_OMA_DRM_ROAP_TRIGGER_WBXML: string;
						public static readonly APPLICATION_VND_OMA_GROUP_USAGE_LIST_XML: string;
						public static readonly APPLICATION_VND_OMA_LWM2M_CBOR: string;
						public static readonly APPLICATION_VND_OMA_LWM2M_JSON: string;
						public static readonly APPLICATION_VND_OMA_LWM2M_TLV: string;
						public static readonly APPLICATION_VND_OMA_PAL_XML: string;
						public static readonly APPLICATION_VND_OMA_POC_DETAILED_PROGRESS_REPORT_XML: string;
						public static readonly APPLICATION_VND_OMA_POC_FINAL_REPORT_XML: string;
						public static readonly APPLICATION_VND_OMA_POC_GROUPS_XML: string;
						public static readonly APPLICATION_VND_OMA_POC_INVOCATION_DESCRIPTOR_XML: string;
						public static readonly APPLICATION_VND_OMA_POC_OPTIMIZED_PROGRESS_REPORT_XML: string;
						public static readonly APPLICATION_VND_OMA_PUSH: string;
						public static readonly APPLICATION_VND_OMA_SCIDM_MESSAGES_XML: string;
						public static readonly APPLICATION_VND_OMA_SCWS_CONFIG: string;
						public static readonly APPLICATION_VND_OMA_SCWS_HTTP_REQUEST: string;
						public static readonly APPLICATION_VND_OMA_SCWS_HTTP_RESPONSE: string;
						public static readonly APPLICATION_VND_OMA_XCAP_DIRECTORY_XML: string;
						public static readonly APPLICATION_VND_ONEPAGER: string;
						public static readonly APPLICATION_VND_ONEPAGERTAMP: string;
						public static readonly APPLICATION_VND_ONEPAGERTAMX: string;
						public static readonly APPLICATION_VND_ONEPAGERTAT: string;
						public static readonly APPLICATION_VND_ONEPAGERTATP: string;
						public static readonly APPLICATION_VND_ONEPAGERTATX: string;
						public static readonly APPLICATION_VND_ONVIF_METADATA: string;
						public static readonly APPLICATION_VND_OPENBLOX_GAME_BINARY: string;
						public static readonly APPLICATION_VND_OPENBLOX_GAME_XML: string;
						public static readonly APPLICATION_VND_OPENEYE_OEB: string;
						public static readonly APPLICATION_VND_OPENSTREETMAP_DATA_XML: string;
						public static readonly APPLICATION_VND_OPENTIMESTAMPS_OTS: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_CUSTOMXMLPROPERTIES_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_CUSTOM_PROPERTIES_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_CHARTSHAPES_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_CHART_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_DIAGRAMCOLORS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_DIAGRAMDATA_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_DIAGRAMLAYOUT_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWINGML_DIAGRAMSTYLE_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_DRAWING_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_EXTENDED_PROPERTIES_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_COMMENTAUTHORS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_COMMENTS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_HANDOUTMASTER_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_NOTESMASTER_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_NOTESSLIDE_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION_MAIN_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESPROPS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDELAYOUT_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDEMASTER_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW_MAIN_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDEUPDATEINFO_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TABLESTYLES_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TAGS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE_MAIN_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_VIEWPROPS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_CALCCHAIN_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_CHARTSHEET_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_COMMENTS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_CONNECTIONS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_DIALOGSHEET_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_EXTERNALLINK_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_PIVOTCACHEDEFINITION_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_PIVOTCACHERECORDS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_PIVOTTABLE_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_QUERYTABLE_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_REVISIONHEADERS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_REVISIONLOG_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHAREDSTRINGS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEETMETADATA_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET_MAIN_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_STYLES_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TABLESINGLECELLS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TABLE_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE_MAIN_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_USERNAMES_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_VOLATILEDEPENDENCIES_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_WORKSHEET_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_THEMEOVERRIDE_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_THEME_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_VMLDRAWING: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_COMMENTS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT_GLOSSARY_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT_MAIN_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_ENDNOTES_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_FONTTABLE_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_FOOTER_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_FOOTNOTES_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_NUMBERING_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_SETTINGS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_STYLES_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE_MAIN_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_WEBSETTINGS_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_PACKAGE_CORE_PROPERTIES_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_PACKAGE_DIGITAL_SIGNATURE_XMLSIGNATURE_XML: string;
						public static readonly APPLICATION_VND_OPENXMLFORMATS_PACKAGE_RELATIONSHIPS_XML: string;
						public static readonly APPLICATION_VND_OPENXML_DOCUMENT: string;
						public static readonly APPLICATION_VND_OPENXML_PRESENTATION: string;
						public static readonly APPLICATION_VND_OPENXML_SHEET: string;
						public static readonly APPLICATION_VND_ORACLE_RESOURCE_JSON: string;
						public static readonly APPLICATION_VND_ORANGE_INDATA: string;
						public static readonly APPLICATION_VND_OSA_NETDEPLOY: string;
						public static readonly APPLICATION_VND_OSGEO_MAPGUIDE_PACKAGE: string;
						public static readonly APPLICATION_VND_OSGI_BUNDLE: string;
						public static readonly APPLICATION_VND_OSGI_DP: string;
						public static readonly APPLICATION_VND_OSGI_SUBSYSTEM: string;
						public static readonly APPLICATION_VND_OTPS_CT_KIP_XML: string;
						public static readonly APPLICATION_VND_OXLI_COUNTGRAPH: string;
						public static readonly APPLICATION_VND_PAGERDUTY_JSON: string;
						public static readonly APPLICATION_VND_PALM: string;
						public static readonly APPLICATION_VND_PANOPLY: string;
						public static readonly APPLICATION_VND_PAOS_XML: string;
						public static readonly APPLICATION_VND_PATENTDIVE: string;
						public static readonly APPLICATION_VND_PATIENTECOMMSDOC: string;
						public static readonly APPLICATION_VND_PAWAAFILE: string;
						public static readonly APPLICATION_VND_PCOS: string;
						public static readonly APPLICATION_VND_PG_FORMAT: string;
						public static readonly APPLICATION_VND_PG_OSASLI: string;
						public static readonly APPLICATION_VND_PHONECOM_MMC_WBXML: string;
						public static readonly APPLICATION_VND_PIACCESS_APPLICATION_LICENCE: string;
						public static readonly APPLICATION_VND_PICSEL: string;
						public static readonly APPLICATION_VND_PMI_WIDGET: string;
						public static readonly APPLICATION_VND_POCKETLEARN: string;
						public static readonly APPLICATION_VND_POC_GROUP_ADVERTISEMENT_XML: string;
						public static readonly APPLICATION_VND_POWERBUILDER6: string;
						public static readonly APPLICATION_VND_POWERBUILDER6_S: string;
						public static readonly APPLICATION_VND_POWERBUILDER7: string;
						public static readonly APPLICATION_VND_POWERBUILDER75: string;
						public static readonly APPLICATION_VND_POWERBUILDER75_S: string;
						public static readonly APPLICATION_VND_POWERBUILDER7_S: string;
						public static readonly APPLICATION_VND_PREMINET: string;
						public static readonly APPLICATION_VND_PREVIEWSYSTEMS_BOX: string;
						public static readonly APPLICATION_VND_PROTEUS_MAGAZINE: string;
						public static readonly APPLICATION_VND_PSFS: string;
						public static readonly APPLICATION_VND_PT_MUNDUSMUNDI: string;
						public static readonly APPLICATION_VND_PUBLISHARE_DELTA_TREE: string;
						public static readonly APPLICATION_VND_PVI_PTID1: string;
						public static readonly APPLICATION_VND_PWG_MULTIPLEXED: string;
						public static readonly APPLICATION_VND_PWG_XHTML_PRINT_XML: string;
						public static readonly APPLICATION_VND_QUALCOMM_BREW_APP_RES: string;
						public static readonly APPLICATION_VND_QUARANTAINENET: string;
						public static readonly APPLICATION_VND_QUARK_QUARKXPRESS: string;
						public static readonly APPLICATION_VND_QUOBJECT_QUOXDOCUMENT: string;
						public static readonly APPLICATION_VND_RADISYS_MOML_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_AUDIT_CONF_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_AUDIT_CONN_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_AUDIT_DIALOG_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_AUDIT_STREAM_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_AUDIT_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_CONF_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_DIALOG_BASE_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_DIALOG_FAX_DETECT_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_DIALOG_FAX_SENDRECV_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_DIALOG_GROUP_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_DIALOG_SPEECH_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_DIALOG_TRANSFORM_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_DIALOG_XML: string;
						public static readonly APPLICATION_VND_RADISYS_MSML_XML: string;
						public static readonly APPLICATION_VND_RAINSTOR_DATA: string;
						public static readonly APPLICATION_VND_RAPID: string;
						public static readonly APPLICATION_VND_RAR: string;
						public static readonly APPLICATION_VND_REALVNC_BED: string;
						public static readonly APPLICATION_VND_RECORDARE_MUSICXML: string;
						public static readonly APPLICATION_VND_RECORDARE_MUSICXML_XML: string;
						public static readonly APPLICATION_VND_RELPIPE: string;
						public static readonly APPLICATION_VND_RENLEARN_RLPRINT: string;
						public static readonly APPLICATION_VND_RESILIENT_LOGIC: string;
						public static readonly APPLICATION_VND_RESTFUL_JSON: string;
						public static readonly APPLICATION_VND_RIG_CRYPTONOTE: string;
						public static readonly APPLICATION_VND_RIM_COD: string;
						public static readonly APPLICATION_VND_ROUTE66_LINK66_XML: string;
						public static readonly APPLICATION_VND_RS_274X: string;
						public static readonly APPLICATION_VND_RUCKUS_DOWNLOAD: string;
						public static readonly APPLICATION_VND_S3SMS: string;
						public static readonly APPLICATION_VND_SAILINGTRACKER_TRACK: string;
						public static readonly APPLICATION_VND_SAR: string;
						public static readonly APPLICATION_VND_SBM_CID: string;
						public static readonly APPLICATION_VND_SBM_MID2: string;
						public static readonly APPLICATION_VND_SCRIBUS: string;
						public static readonly APPLICATION_VND_SEALEDMEDIA_SOFTSEAL_HTML: string;
						public static readonly APPLICATION_VND_SEALEDMEDIA_SOFTSEAL_PDF: string;
						public static readonly APPLICATION_VND_SEALED_3DF: string;
						public static readonly APPLICATION_VND_SEALED_CSF: string;
						public static readonly APPLICATION_VND_SEALED_DOC: string;
						public static readonly APPLICATION_VND_SEALED_EML: string;
						public static readonly APPLICATION_VND_SEALED_MHT: string;
						public static readonly APPLICATION_VND_SEALED_NET: string;
						public static readonly APPLICATION_VND_SEALED_PPT: string;
						public static readonly APPLICATION_VND_SEALED_TIFF: string;
						public static readonly APPLICATION_VND_SEALED_XLS: string;
						public static readonly APPLICATION_VND_SEEMAIL: string;
						public static readonly APPLICATION_VND_SEIS_JSON: string;
						public static readonly APPLICATION_VND_SEMA: string;
						public static readonly APPLICATION_VND_SEMD: string;
						public static readonly APPLICATION_VND_SEMF: string;
						public static readonly APPLICATION_VND_SHADE_SAVE_FILE: string;
						public static readonly APPLICATION_VND_SHANA_INFORMED_FORMDATA: string;
						public static readonly APPLICATION_VND_SHANA_INFORMED_FORMTEMPLATE: string;
						public static readonly APPLICATION_VND_SHANA_INFORMED_INTERCHANGE: string;
						public static readonly APPLICATION_VND_SHANA_INFORMED_PACKAGE: string;
						public static readonly APPLICATION_VND_SHOOTPROOF_JSON: string;
						public static readonly APPLICATION_VND_SHOPKICK_JSON: string;
						public static readonly APPLICATION_VND_SHP: string;
						public static readonly APPLICATION_VND_SHX: string;
						public static readonly APPLICATION_VND_SIGROK_SESSION: string;
						public static readonly APPLICATION_VND_SIMTECH_MINDMAPPER: string;
						public static readonly APPLICATION_VND_SIREN_JSON: string;
						public static readonly APPLICATION_VND_SMAF: string;
						public static readonly APPLICATION_VND_SMART_NOTEBOOK: string;
						public static readonly APPLICATION_VND_SMART_TEACHER: string;
						public static readonly APPLICATION_VND_SMINTIO_PORTALS_ARCHIVE: string;
						public static readonly APPLICATION_VND_SNESDEV_PAGE_TABLE: string;
						public static readonly APPLICATION_VND_SOFTWARE602_FILLER_FORM_XML: string;
						public static readonly APPLICATION_VND_SOFTWARE602_FILLER_FORM_XML_ZIP: string;
						public static readonly APPLICATION_VND_SOLENT_SDKM_XML: string;
						public static readonly APPLICATION_VND_SPOTFIRE_DXP: string;
						public static readonly APPLICATION_VND_SPOTFIRE_SFS: string;
						public static readonly APPLICATION_VND_SQLITE3: string;
						public static readonly APPLICATION_VND_SSS_COD: string;
						public static readonly APPLICATION_VND_SSS_DTF: string;
						public static readonly APPLICATION_VND_SSS_NTF: string;
						public static readonly APPLICATION_VND_STARDIVISION_CALC: string;
						public static readonly APPLICATION_VND_STARDIVISION_CHART: string;
						public static readonly APPLICATION_VND_STARDIVISION_DRAW: string;
						public static readonly APPLICATION_VND_STARDIVISION_IMPRESS: string;
						public static readonly APPLICATION_VND_STARDIVISION_MATH: string;
						public static readonly APPLICATION_VND_STARDIVISION_WRITER: string;
						public static readonly APPLICATION_VND_STARDIVISION_WRITER_GLOBAL: string;
						public static readonly APPLICATION_VND_STEPMANIA_PACKAGE: string;
						public static readonly APPLICATION_VND_STEPMANIA_STEPCHART: string;
						public static readonly APPLICATION_VND_STREET_STREAM: string;
						public static readonly APPLICATION_VND_SUN_WADL_XML: string;
						public static readonly APPLICATION_VND_SUN_XML_CALC: string;
						public static readonly APPLICATION_VND_SUN_XML_CALC_TEMPLATE: string;
						public static readonly APPLICATION_VND_SUN_XML_DRAW: string;
						public static readonly APPLICATION_VND_SUN_XML_DRAW_TEMPLATE: string;
						public static readonly APPLICATION_VND_SUN_XML_IMPRESS: string;
						public static readonly APPLICATION_VND_SUN_XML_IMPRESS_TEMPLATE: string;
						public static readonly APPLICATION_VND_SUN_XML_WRITER: string;
						public static readonly APPLICATION_VND_SUN_XML_WRITER_GLOBAL: string;
						public static readonly APPLICATION_VND_SUN_XML_WRITER_TEMPLATE: string;
						public static readonly APPLICATION_VND_SUS_CALENDAR: string;
						public static readonly APPLICATION_VND_SVD: string;
						public static readonly APPLICATION_VND_SWIFTVIEW_ICS: string;
						public static readonly APPLICATION_VND_SYBYL_MOL2: string;
						public static readonly APPLICATION_VND_SYCLE_XML: string;
						public static readonly APPLICATION_VND_SYFT_JSON: string;
						public static readonly APPLICATION_VND_SYMBIAN_INSTALL: string;
						public static readonly APPLICATION_VND_SYNCML_DMDDF_WBXML: string;
						public static readonly APPLICATION_VND_SYNCML_DMDDF_XML: string;
						public static readonly APPLICATION_VND_SYNCML_DMTNDS_WBXML: string;
						public static readonly APPLICATION_VND_SYNCML_DMTNDS_XML: string;
						public static readonly APPLICATION_VND_SYNCML_DM_NOTIFICATION: string;
						public static readonly APPLICATION_VND_SYNCML_DM_WBXML: string;
						public static readonly APPLICATION_VND_SYNCML_DM_XML: string;
						public static readonly APPLICATION_VND_SYNCML_DS_NOTIFICATION: string;
						public static readonly APPLICATION_VND_SYNCML_NOTIFICATION: string;
						public static readonly APPLICATION_VND_SYNCML_WBXML: string;
						public static readonly APPLICATION_VND_SYNCML_XML: string;
						public static readonly APPLICATION_VND_TABLESCHEMA_JSON: string;
						public static readonly APPLICATION_VND_TAO_INTENT_MODULE_ARCHIVE: string;
						public static readonly APPLICATION_VND_TCPDUMP_PCAP: string;
						public static readonly APPLICATION_VND_THINK_CELL_PPTTC_JSON: string;
						public static readonly APPLICATION_VND_TMD_MEDIAFLEX_API_XML: string;
						public static readonly APPLICATION_VND_TML: string;
						public static readonly APPLICATION_VND_TMOBILE_LIVETV: string;
						public static readonly APPLICATION_VND_TRID_TPT: string;
						public static readonly APPLICATION_VND_TRISCAPE_MXS: string;
						public static readonly APPLICATION_VND_TRI_ONESOURCE: string;
						public static readonly APPLICATION_VND_TRUEAPP: string;
						public static readonly APPLICATION_VND_TRUEDOC: string;
						public static readonly APPLICATION_VND_TVE_TRIGGER: string;
						public static readonly APPLICATION_VND_UBISOFT_WEBPLAYER: string;
						public static readonly APPLICATION_VND_UFDL: string;
						public static readonly APPLICATION_VND_UIQ_THEME: string;
						public static readonly APPLICATION_VND_UMAJIN: string;
						public static readonly APPLICATION_VND_UNITY: string;
						public static readonly APPLICATION_VND_UOML_XML: string;
						public static readonly APPLICATION_VND_UPLANET_ALERT: string;
						public static readonly APPLICATION_VND_UPLANET_ALERT_WBXML: string;
						public static readonly APPLICATION_VND_UPLANET_BEARER_CHOICE: string;
						public static readonly APPLICATION_VND_UPLANET_BEARER_CHOICE_WBXML: string;
						public static readonly APPLICATION_VND_UPLANET_CACHEOP: string;
						public static readonly APPLICATION_VND_UPLANET_CACHEOP_WBXML: string;
						public static readonly APPLICATION_VND_UPLANET_CHANNEL: string;
						public static readonly APPLICATION_VND_UPLANET_CHANNEL_WBXML: string;
						public static readonly APPLICATION_VND_UPLANET_LIST: string;
						public static readonly APPLICATION_VND_UPLANET_LISTCMD: string;
						public static readonly APPLICATION_VND_UPLANET_LISTCMD_WBXML: string;
						public static readonly APPLICATION_VND_UPLANET_LIST_WBXML: string;
						public static readonly APPLICATION_VND_UPLANET_PROVISIONING_STATUS_URI: string;
						public static readonly APPLICATION_VND_UPLANET_SIGNAL: string;
						public static readonly APPLICATION_VND_URI_MAP: string;
						public static readonly APPLICATION_VND_VALVE_SOURCE_MATERIAL: string;
						public static readonly APPLICATION_VND_VCX: string;
						public static readonly APPLICATION_VND_VD_STUDY: string;
						public static readonly APPLICATION_VND_VECTORWORKS: string;
						public static readonly APPLICATION_VND_VEL_JSON: string;
						public static readonly APPLICATION_VND_VERIMATRIX_VCAS: string;
						public static readonly APPLICATION_VND_VERITONE_AION_JSON: string;
						public static readonly APPLICATION_VND_VERYANT_THIN: string;
						public static readonly APPLICATION_VND_VES_ENCRYPTED: string;
						public static readonly APPLICATION_VND_VIDSOFT_VIDCONFERENCE: string;
						public static readonly APPLICATION_VND_VISIO: string;
						public static readonly APPLICATION_VND_VISIONARY: string;
						public static readonly APPLICATION_VND_VIVIDENCE_SCRIPTFILE: string;
						public static readonly APPLICATION_VND_VSF: string;
						public static readonly APPLICATION_VND_WAP_CERT_RESPONSE: string;
						public static readonly APPLICATION_VND_WAP_COC: string;
						public static readonly APPLICATION_VND_WAP_CONNECTIVITY_WBXML: string;
						public static readonly APPLICATION_VND_WAP_EMN_WBXML: string;
						public static readonly APPLICATION_VND_WAP_HASHED_CERTIFICATE: string;
						public static readonly APPLICATION_VND_WAP_LOCC_WBXML: string;
						public static readonly APPLICATION_VND_WAP_LOC_XML: string;
						public static readonly APPLICATION_VND_WAP_MMS_MESSAGE: string;
						public static readonly APPLICATION_VND_WAP_MULTIPART_ALTERNATIVE: string;
						public static readonly APPLICATION_VND_WAP_MULTIPART_BYTERANGES: string;
						public static readonly APPLICATION_VND_WAP_MULTIPART_FORM_DATA: string;
						public static readonly APPLICATION_VND_WAP_MULTIPART_MIXED: string;
						public static readonly APPLICATION_VND_WAP_MULTIPART_RELATED: string;
						public static readonly APPLICATION_VND_WAP_MULTIPART_WILDCARD: string;
						public static readonly APPLICATION_VND_WAP_ROLLOVER_CERTIFICATE: string;
						public static readonly APPLICATION_VND_WAP_SIA: string;
						public static readonly APPLICATION_VND_WAP_SIC: string;
						public static readonly APPLICATION_VND_WAP_SIGNED_CERTIFICATE: string;
						public static readonly APPLICATION_VND_WAP_SLC: string;
						public static readonly APPLICATION_VND_WAP_UAPROF: string;
						public static readonly APPLICATION_VND_WAP_WBXML: string;
						public static readonly APPLICATION_VND_WAP_WMLC: string;
						public static readonly APPLICATION_VND_WAP_WMLSCRIPTC: string;
						public static readonly APPLICATION_VND_WAP_WTA_EVENTC: string;
						public static readonly APPLICATION_VND_WAP_WTLS_CA_CERTIFICATE: string;
						public static readonly APPLICATION_VND_WAP_WTLS_USER_CERTIFICATE: string;
						public static readonly APPLICATION_VND_WAP_XHTML_XML: string;
						public static readonly APPLICATION_VND_WASMFLOW_WAFL: string;
						public static readonly APPLICATION_VND_WEBTURBO: string;
						public static readonly APPLICATION_VND_WFA_DPP: string;
						public static readonly APPLICATION_VND_WFA_P2P: string;
						public static readonly APPLICATION_VND_WFA_WSC: string;
						public static readonly APPLICATION_VND_WINDOWS_DEVICEPAIRING: string;
						public static readonly APPLICATION_VND_WMC: string;
						public static readonly APPLICATION_VND_WMF_BOOTSTRAP: string;
						public static readonly APPLICATION_VND_WOLFRAM_MATHEMATICA: string;
						public static readonly APPLICATION_VND_WOLFRAM_MATHEMATICA_PACKAGE: string;
						public static readonly APPLICATION_VND_WOLFRAM_PLAYER: string;
						public static readonly APPLICATION_VND_WORDLIFT: string;
						public static readonly APPLICATION_VND_WORDPERFECT: string;
						public static readonly APPLICATION_VND_WORDPERFECT5_1: string;
						public static readonly APPLICATION_VND_WQD: string;
						public static readonly APPLICATION_VND_WRQ_HP3000_LABELLED: string;
						public static readonly APPLICATION_VND_WT_STF: string;
						public static readonly APPLICATION_VND_WV_CSP_CIR: string;
						public static readonly APPLICATION_VND_WV_CSP_WBXML: string;
						public static readonly APPLICATION_VND_WV_CSP_XML: string;
						public static readonly APPLICATION_VND_WV_SSP_XML: string;
						public static readonly APPLICATION_VND_XACML_JSON: string;
						public static readonly APPLICATION_VND_XARA: string;
						public static readonly APPLICATION_VND_XECRETS_ENCRYPTED: string;
						public static readonly APPLICATION_VND_XFDL: string;
						public static readonly APPLICATION_VND_XFDL_WEBFORM: string;
						public static readonly APPLICATION_VND_XMI_XML: string;
						public static readonly APPLICATION_VND_XMPIE_CPKG: string;
						public static readonly APPLICATION_VND_XMPIE_DPKG: string;
						public static readonly APPLICATION_VND_XMPIE_PLAN: string;
						public static readonly APPLICATION_VND_XMPIE_PPKG: string;
						public static readonly APPLICATION_VND_XMPIE_XLIM: string;
						public static readonly APPLICATION_VND_YAMAHA_HV_DIC: string;
						public static readonly APPLICATION_VND_YAMAHA_HV_SCRIPT: string;
						public static readonly APPLICATION_VND_YAMAHA_HV_VOICE: string;
						public static readonly APPLICATION_VND_YAMAHA_OPENSCOREFORMAT: string;
						public static readonly APPLICATION_VND_YAMAHA_OPENSCOREFORMAT_OSFPVG_XML: string;
						public static readonly APPLICATION_VND_YAMAHA_REMOTE_SETUP: string;
						public static readonly APPLICATION_VND_YAMAHA_SMAF_AUDIO: string;
						public static readonly APPLICATION_VND_YAMAHA_SMAF_PHRASE: string;
						public static readonly APPLICATION_VND_YAMAHA_THROUGH_NGN: string;
						public static readonly APPLICATION_VND_YAMAHA_TUNNEL_UDPENCAP: string;
						public static readonly APPLICATION_VND_YAOWEME: string;
						public static readonly APPLICATION_VND_YELLOWRIVER_CUSTOM_MENU: string;
						public static readonly APPLICATION_VND_YOUTUBE_YT: string;
						public static readonly APPLICATION_VND_ZUL: string;
						public static readonly APPLICATION_VND_ZZAZZ_DECK_XML: string;
						public static readonly APPLICATION_VOICEXML_XML: string;
						public static readonly APPLICATION_VOUCHER_CMS_JSON: string;
						public static readonly APPLICATION_VQ_RTCPXR: string;
						public static readonly APPLICATION_WASM: string;
						public static readonly APPLICATION_WATCHERINFO_XML: string;
						public static readonly APPLICATION_WEBPUSH_OPTIONS_JSON: string;
						public static readonly APPLICATION_WHOISPP_QUERY: string;
						public static readonly APPLICATION_WHOISPP_RESPONSE: string;
						public static readonly APPLICATION_WIDGET: string;
						public static readonly APPLICATION_WILDCARD: string;
						public static readonly APPLICATION_WITA: string;
						public static readonly APPLICATION_WML_XML: string;
						public static readonly APPLICATION_WORDPERFECT5_1: string;
						public static readonly APPLICATION_WSDL_XML: string;
						public static readonly APPLICATION_WSPOLICY_XML: string;
						public static readonly APPLICATION_X400_BP: string;
						public static readonly APPLICATION_XACML_XML: string;
						public static readonly APPLICATION_XCAP_ATT_XML: string;
						public static readonly APPLICATION_XCAP_CAPS_XML: string;
						public static readonly APPLICATION_XCAP_DIFF_XML: string;
						public static readonly APPLICATION_XCAP_EL_XML: string;
						public static readonly APPLICATION_XCAP_ERROR_XML: string;
						public static readonly APPLICATION_XCAP_NS_XML: string;
						public static readonly APPLICATION_XCON_CONFERENCE_INFO_DIFF_XML: string;
						public static readonly APPLICATION_XCON_CONFERENCE_INFO_XML: string;
						public static readonly APPLICATION_XENC_XML: string;
						public static readonly APPLICATION_XFDF: string;
						public static readonly APPLICATION_XHTML_XML: string;
						public static readonly APPLICATION_XLIFF_XML: string;
						public static readonly APPLICATION_XML: string;
						public static readonly APPLICATION_XML_DTD: string;
						public static readonly APPLICATION_XML_EXTERNAL_PARSED_ENTITY: string;
						public static readonly APPLICATION_XML_PATCH_XML: string;
						public static readonly APPLICATION_XMPP_XML: string;
						public static readonly APPLICATION_XOP_XML: string;
						public static readonly APPLICATION_XSLT_XML: string;
						public static readonly APPLICATION_XSPF_XML: string;
						public static readonly APPLICATION_XV_XML: string;
						public static readonly APPLICATION_X_123: string;
						public static readonly APPLICATION_X_7Z_COMPRESSED: string;
						public static readonly APPLICATION_X_ABIWORD: string;
						public static readonly APPLICATION_X_APPLE_DISKIMAGE: string;
						public static readonly APPLICATION_X_BCPIO: string;
						public static readonly APPLICATION_X_BITTORRENT: string;
						public static readonly APPLICATION_X_CAB: string;
						public static readonly APPLICATION_X_CBR: string;
						public static readonly APPLICATION_X_CBZ: string;
						public static readonly APPLICATION_X_CDF: string;
						public static readonly APPLICATION_X_CDLINK: string;
						public static readonly APPLICATION_X_CHESS_PGN: string;
						public static readonly APPLICATION_X_COMSOL: string;
						public static readonly APPLICATION_X_CORE: string;
						public static readonly APPLICATION_X_CPIO: string;
						public static readonly APPLICATION_X_CSH: string;
						public static readonly APPLICATION_X_DEB: string;
						public static readonly APPLICATION_X_DEBIAN_PACKAGE: string;
						public static readonly APPLICATION_X_DIRECTOR: string;
						public static readonly APPLICATION_X_DMS: string;
						public static readonly APPLICATION_X_DOOM: string;
						public static readonly APPLICATION_X_DVI: string;
						public static readonly APPLICATION_X_EXECUTABLE: string;
						public static readonly APPLICATION_X_FONT: string;
						public static readonly APPLICATION_X_FONT_PCF: string;
						public static readonly APPLICATION_X_FONT_TTF: string;
						public static readonly APPLICATION_X_FONT_WOFF: string;
						public static readonly APPLICATION_X_FREEMIND: string;
						public static readonly APPLICATION_X_FUTURESPLASH: string;
						public static readonly APPLICATION_X_GANTTPROJECT: string;
						public static readonly APPLICATION_X_GNUMERIC: string;
						public static readonly APPLICATION_X_GO_SGF: string;
						public static readonly APPLICATION_X_GRAPHING_CALCULATOR: string;
						public static readonly APPLICATION_X_GTAR: string;
						public static readonly APPLICATION_X_GTAR_COMPRESSED: string;
						public static readonly APPLICATION_X_HDF: string;
						public static readonly APPLICATION_X_HDMLC: string;
						public static readonly APPLICATION_X_HWP: string;
						public static readonly APPLICATION_X_ICA: string;
						public static readonly APPLICATION_X_INFO: string;
						public static readonly APPLICATION_X_INTERNET_SIGNUP: string;
						public static readonly APPLICATION_X_IPHONE: string;
						public static readonly APPLICATION_X_ISO9660_IMAGE: string;
						public static readonly APPLICATION_X_JAM: string;
						public static readonly APPLICATION_X_JAVASCRIPT: string;
						public static readonly APPLICATION_X_JAVA_APPLET: string;
						public static readonly APPLICATION_X_JAVA_BEAN: string;
						public static readonly APPLICATION_X_JAVA_JNLP_FILE: string;
						public static readonly APPLICATION_X_JMOL: string;
						public static readonly APPLICATION_X_KCHART: string;
						public static readonly APPLICATION_X_KDELNK: string;
						public static readonly APPLICATION_X_KILLUSTRATOR: string;
						public static readonly APPLICATION_X_KOAN: string;
						public static readonly APPLICATION_X_KPRESENTER: string;
						public static readonly APPLICATION_X_KSPREAD: string;
						public static readonly APPLICATION_X_KWORD: string;
						public static readonly APPLICATION_X_LATEX: string;
						public static readonly APPLICATION_X_LHA: string;
						public static readonly APPLICATION_X_LYX: string;
						public static readonly APPLICATION_X_LZH: string;
						public static readonly APPLICATION_X_LZX: string;
						public static readonly APPLICATION_X_MAKER: string;
						public static readonly APPLICATION_X_MIF: string;
						public static readonly APPLICATION_X_MPEGURL: string;
						public static readonly APPLICATION_X_MSDOS_PROGRAM: string;
						public static readonly APPLICATION_X_MSI: string;
						public static readonly APPLICATION_X_MS_APPLICATION: string;
						public static readonly APPLICATION_X_MS_MANIFEST: string;
						public static readonly APPLICATION_X_MS_WMD: string;
						public static readonly APPLICATION_X_MS_WMZ: string;
						public static readonly APPLICATION_X_NETCDF: string;
						public static readonly APPLICATION_X_NS_PROXY_AUTOCONFIG: string;
						public static readonly APPLICATION_X_NWC: string;
						public static readonly APPLICATION_X_OBJECT: string;
						public static readonly APPLICATION_X_OZ_APPLICATION: string;
						public static readonly APPLICATION_X_PKCS12: string;
						public static readonly APPLICATION_X_PKCS7_CERTIFICATES: string;
						public static readonly APPLICATION_X_PKCS7_CERTREQRESP: string;
						public static readonly APPLICATION_X_PKCS7_CRL: string;
						public static readonly APPLICATION_X_PKCS7_MIME: string;
						public static readonly APPLICATION_X_PKCS7_SIGNATURE: string;
						public static readonly APPLICATION_X_PKI_MESSAGE: string;
						public static readonly APPLICATION_X_PYTHON_CODE: string;
						public static readonly APPLICATION_X_QGIS: string;
						public static readonly APPLICATION_X_QUICKTIMEPLAYER: string;
						public static readonly APPLICATION_X_RAR_COMPRESSED: string;
						public static readonly APPLICATION_X_RDP: string;
						public static readonly APPLICATION_X_REDHAT_PACKAGE_MANAGER: string;
						public static readonly APPLICATION_X_RSS_XML: string;
						public static readonly APPLICATION_X_RUBY: string;
						public static readonly APPLICATION_X_RX: string;
						public static readonly APPLICATION_X_SCILAB: string;
						public static readonly APPLICATION_X_SCILAB_XCOS: string;
						public static readonly APPLICATION_X_SH: string;
						public static readonly APPLICATION_X_SHAR: string;
						public static readonly APPLICATION_X_SHELLSCRIPT: string;
						public static readonly APPLICATION_X_SHOCKWAVE_FLASH: string;
						public static readonly APPLICATION_X_SILVERLIGHT: string;
						public static readonly APPLICATION_X_SQL: string;
						public static readonly APPLICATION_X_STUFFIT: string;
						public static readonly APPLICATION_X_SV4CPIO: string;
						public static readonly APPLICATION_X_SV4CRC: string;
						public static readonly APPLICATION_X_TAR: string;
						public static readonly APPLICATION_X_TCL: string;
						public static readonly APPLICATION_X_TEX: string;
						public static readonly APPLICATION_X_TEXINFO: string;
						public static readonly APPLICATION_X_TEX_GF: string;
						public static readonly APPLICATION_X_TEX_PK: string;
						public static readonly APPLICATION_X_TRASH: string;
						public static readonly APPLICATION_X_TROFF: string;
						public static readonly APPLICATION_X_TROFF_MAN: string;
						public static readonly APPLICATION_X_TROFF_ME: string;
						public static readonly APPLICATION_X_TROFF_MS: string;
						public static readonly APPLICATION_X_TROFF_MSVIDEO: string;
						public static readonly APPLICATION_X_USTAR: string;
						public static readonly APPLICATION_X_VIDEOLAN: string;
						public static readonly APPLICATION_X_WAIS_SOURCE: string;
						public static readonly APPLICATION_X_WEBARCHIVE: string;
						public static readonly APPLICATION_X_WEBARCHIVE_XML: string;
						public static readonly APPLICATION_X_WINGZ: string;
						public static readonly APPLICATION_X_WWW_FORM_URLENCODED: string;
						public static readonly APPLICATION_X_X509_CA_CERT: string;
						public static readonly APPLICATION_X_X509_CA_RA_CERT: string;
						public static readonly APPLICATION_X_X509_NEXT_CA_CERT: string;
						public static readonly APPLICATION_X_X509_USER_CERT: string;
						public static readonly APPLICATION_X_X968_CA_CERT: string;
						public static readonly APPLICATION_X_X968_CROSS_CERT: string;
						public static readonly APPLICATION_X_X968_USER_CERT: string;
						public static readonly APPLICATION_X_XCF: string;
						public static readonly APPLICATION_X_XFIG: string;
						public static readonly APPLICATION_X_XPINSTALL: string;
						public static readonly APPLICATION_X_XZ: string;
						public static readonly APPLICATION_YAML: string;
						public static readonly APPLICATION_YANG: string;
						public static readonly APPLICATION_YANG_DATA_CBOR: string;
						public static readonly APPLICATION_YANG_DATA_JSON: string;
						public static readonly APPLICATION_YANG_DATA_XML: string;
						public static readonly APPLICATION_YANG_PATCH_JSON: string;
						public static readonly APPLICATION_YANG_PATCH_XML: string;
						public static readonly APPLICATION_YANG_SID_JSON: string;
						public static readonly APPLICATION_YIN_XML: string;
						public static readonly APPLICATION_ZIP: string;
						public static readonly APPLICATION_ZLIB: string;
						public static readonly APPLICATION_ZSTD: string;
						public static readonly AUDIO_1D_INTERLEAVED_PARITYFEC: string;
						public static readonly AUDIO_32KADPCM: string;
						public static readonly AUDIO_3GPP: string;
						public static readonly AUDIO_3GPP2: string;
						public static readonly AUDIO_AAC: string;
						public static readonly AUDIO_AC3: string;
						public static readonly AUDIO_AIFF: string;
						public static readonly AUDIO_AMR: string;
						public static readonly AUDIO_AMR_WB: string;
						public static readonly AUDIO_AMR_WB_PLUS: string;
						public static readonly AUDIO_ANNODEX: string;
						public static readonly AUDIO_APTX: string;
						public static readonly AUDIO_ASC: string;
						public static readonly AUDIO_ATRAC3: string;
						public static readonly AUDIO_ATRAC_ADVANCED_LOSSLESS: string;
						public static readonly AUDIO_ATRAC_X: string;
						public static readonly AUDIO_BASIC: string;
						public static readonly AUDIO_BV16: string;
						public static readonly AUDIO_BV32: string;
						public static readonly AUDIO_CLEARMODE: string;
						public static readonly AUDIO_CN: string;
						public static readonly AUDIO_CSOUND: string;
						public static readonly AUDIO_DAT12: string;
						public static readonly AUDIO_DLS: string;
						public static readonly AUDIO_DSR_ES201108: string;
						public static readonly AUDIO_DSR_ES202050: string;
						public static readonly AUDIO_DSR_ES202211: string;
						public static readonly AUDIO_DSR_ES202212: string;
						public static readonly AUDIO_DV: string;
						public static readonly AUDIO_DVI4: string;
						public static readonly AUDIO_EAC3: string;
						public static readonly AUDIO_ENCAPRTP: string;
						public static readonly AUDIO_EVRC: string;
						public static readonly AUDIO_EVRC0: string;
						public static readonly AUDIO_EVRC1: string;
						public static readonly AUDIO_EVRCB: string;
						public static readonly AUDIO_EVRCB0: string;
						public static readonly AUDIO_EVRCB1: string;
						public static readonly AUDIO_EVRCNW: string;
						public static readonly AUDIO_EVRCNW0: string;
						public static readonly AUDIO_EVRCNW1: string;
						public static readonly AUDIO_EVRCWB: string;
						public static readonly AUDIO_EVRCWB0: string;
						public static readonly AUDIO_EVRCWB1: string;
						public static readonly AUDIO_EVRC_QCP: string;
						public static readonly AUDIO_EVS: string;
						public static readonly AUDIO_EXAMPLE: string;
						public static readonly AUDIO_FLAC: string;
						public static readonly AUDIO_FLEXFEC: string;
						public static readonly AUDIO_FWDRED: string;
						public static readonly AUDIO_G711_0: string;
						public static readonly AUDIO_G719: string;
						public static readonly AUDIO_G722: string;
						public static readonly AUDIO_G7221: string;
						public static readonly AUDIO_G723: string;
						public static readonly AUDIO_G726_16: string;
						public static readonly AUDIO_G726_24: string;
						public static readonly AUDIO_G726_32: string;
						public static readonly AUDIO_G726_40: string;
						public static readonly AUDIO_G728: string;
						public static readonly AUDIO_G729: string;
						public static readonly AUDIO_G7291: string;
						public static readonly AUDIO_G729D: string;
						public static readonly AUDIO_G729E: string;
						public static readonly AUDIO_GSM: string;
						public static readonly AUDIO_GSM_EFR: string;
						public static readonly AUDIO_GSM_HR_08: string;
						public static readonly AUDIO_G_722_1: string;
						public static readonly AUDIO_ILBC: string;
						public static readonly AUDIO_IP_MR_V2_5: string;
						public static readonly AUDIO_L16: string;
						public static readonly AUDIO_L20: string;
						public static readonly AUDIO_L24: string;
						public static readonly AUDIO_L8: string;
						public static readonly AUDIO_LPC: string;
						public static readonly AUDIO_MATROSKA: string;
						public static readonly AUDIO_MELP: string;
						public static readonly AUDIO_MELP1200: string;
						public static readonly AUDIO_MELP2400: string;
						public static readonly AUDIO_MELP600: string;
						public static readonly AUDIO_MHAS: string;
						public static readonly AUDIO_MIDI: string;
						public static readonly AUDIO_MIDI_CLIP: string;
						public static readonly AUDIO_MOBILE_XMF: string;
						public static readonly AUDIO_MP4: string;
						public static readonly AUDIO_MP4A_LATM: string;
						public static readonly AUDIO_MPA: string;
						public static readonly AUDIO_MPA_ROBUST: string;
						public static readonly AUDIO_MPEG: string;
						public static readonly AUDIO_MPEG4_GENERIC: string;
						public static readonly AUDIO_MPEGURL: string;
						public static readonly AUDIO_OGG: string;
						public static readonly AUDIO_OPUS: string;
						public static readonly AUDIO_PARITYFEC: string;
						public static readonly AUDIO_PCMA: string;
						public static readonly AUDIO_PCMA_WB: string;
						public static readonly AUDIO_PCMU: string;
						public static readonly AUDIO_PCMU_WB: string;
						public static readonly AUDIO_PRS_SID: string;
						public static readonly AUDIO_QCELP: string;
						public static readonly AUDIO_RAPTORFEC: string;
						public static readonly AUDIO_RED: string;
						public static readonly AUDIO_RTPLOOPBACK: string;
						public static readonly AUDIO_RTP_ENC_AESCM128: string;
						public static readonly AUDIO_RTP_MIDI: string;
						public static readonly AUDIO_RTX: string;
						public static readonly AUDIO_SCIP: string;
						public static readonly AUDIO_SMV: string;
						public static readonly AUDIO_SMV0: string;
						public static readonly AUDIO_SMV_QCP: string;
						public static readonly AUDIO_SOFA: string;
						public static readonly AUDIO_SPEEX: string;
						public static readonly AUDIO_SP_MIDI: string;
						public static readonly AUDIO_T140C: string;
						public static readonly AUDIO_T38: string;
						public static readonly AUDIO_TELEPHONE_EVENT: string;
						public static readonly AUDIO_TETRA_ACELP: string;
						public static readonly AUDIO_TETRA_ACELP_BB: string;
						public static readonly AUDIO_TONE: string;
						public static readonly AUDIO_TSVCIS: string;
						public static readonly AUDIO_UEMCLIP: string;
						public static readonly AUDIO_ULPFEC: string;
						public static readonly AUDIO_USAC: string;
						public static readonly AUDIO_VDVI: string;
						public static readonly AUDIO_VMR_WB: string;
						public static readonly AUDIO_VND_3GPP_IUFP: string;
						public static readonly AUDIO_VND_4SB: string;
						public static readonly AUDIO_VND_AUDIOKOZ: string;
						public static readonly AUDIO_VND_CELP: string;
						public static readonly AUDIO_VND_CISCO_NSE: string;
						public static readonly AUDIO_VND_CMLES_RADIO_EVENTS: string;
						public static readonly AUDIO_VND_CNS_ANP1: string;
						public static readonly AUDIO_VND_CNS_INF1: string;
						public static readonly AUDIO_VND_DECE_AUDIO: string;
						public static readonly AUDIO_VND_DIGITAL_WINDS: string;
						public static readonly AUDIO_VND_DLNA_ADTS: string;
						public static readonly AUDIO_VND_DOLBY_HEAAC_1: string;
						public static readonly AUDIO_VND_DOLBY_HEAAC_2: string;
						public static readonly AUDIO_VND_DOLBY_MLP: string;
						public static readonly AUDIO_VND_DOLBY_MPS: string;
						public static readonly AUDIO_VND_DOLBY_PL2: string;
						public static readonly AUDIO_VND_DOLBY_PL2X: string;
						public static readonly AUDIO_VND_DOLBY_PL2Z: string;
						public static readonly AUDIO_VND_DOLBY_PULSE_1: string;
						public static readonly AUDIO_VND_DRA: string;
						public static readonly AUDIO_VND_DTS: string;
						public static readonly AUDIO_VND_DTS_HD: string;
						public static readonly AUDIO_VND_DTS_UHD: string;
						public static readonly AUDIO_VND_DVB_FILE: string;
						public static readonly AUDIO_VND_EVERAD_PLJ: string;
						public static readonly AUDIO_VND_HNS_AUDIO: string;
						public static readonly AUDIO_VND_LUCENT_VOICE: string;
						public static readonly AUDIO_VND_MS_PLAYREADY_MEDIA_PYA: string;
						public static readonly AUDIO_VND_NOKIA_MOBILE_XMF: string;
						public static readonly AUDIO_VND_NORTEL_VBK: string;
						public static readonly AUDIO_VND_NUERA_ECELP4800: string;
						public static readonly AUDIO_VND_NUERA_ECELP7470: string;
						public static readonly AUDIO_VND_NUERA_ECELP9600: string;
						public static readonly AUDIO_VND_OCTEL_SBC: string;
						public static readonly AUDIO_VND_PRESONUS_MULTITRACK: string;
						public static readonly AUDIO_VND_QCELP: string;
						public static readonly AUDIO_VND_RHETOREX_32KADPCM: string;
						public static readonly AUDIO_VND_RIP: string;
						public static readonly AUDIO_VND_SEALEDMEDIA_SOFTSEAL_MPEG: string;
						public static readonly AUDIO_VND_VMX_CVSD: string;
						public static readonly AUDIO_VORBIS: string;
						public static readonly AUDIO_VORBIS_CONFIG: string;
						public static readonly AUDIO_WAV: string;
						public static readonly AUDIO_WILDCARD: string;
						public static readonly AUDIO_X_AIFF: string;
						public static readonly AUDIO_X_GSM: string;
						public static readonly AUDIO_X_MPEGURL: string;
						public static readonly AUDIO_X_MS_WAX: string;
						public static readonly AUDIO_X_MS_WMA: string;
						public static readonly AUDIO_X_PN_REALAUDIO: string;
						public static readonly AUDIO_X_PN_REALAUDIO_PLUGIN: string;
						public static readonly AUDIO_X_REALAUDIO: string;
						public static readonly AUDIO_X_SCPLS: string;
						public static readonly AUDIO_X_SD2: string;
						public static readonly AUDIO_X_WAV: string;
						public static readonly CHEMICAL_X_ALCHEMY: string;
						public static readonly CHEMICAL_X_CACHE: string;
						public static readonly CHEMICAL_X_CACHE_CSF: string;
						public static readonly CHEMICAL_X_CACTVS_BINARY: string;
						public static readonly CHEMICAL_X_CDX: string;
						public static readonly CHEMICAL_X_CERIUS: string;
						public static readonly CHEMICAL_X_CHEM3D: string;
						public static readonly CHEMICAL_X_CHEMDRAW: string;
						public static readonly CHEMICAL_X_CIF: string;
						public static readonly CHEMICAL_X_CMDF: string;
						public static readonly CHEMICAL_X_CML: string;
						public static readonly CHEMICAL_X_COMPASS: string;
						public static readonly CHEMICAL_X_CROSSFIRE: string;
						public static readonly CHEMICAL_X_CSML: string;
						public static readonly CHEMICAL_X_CTX: string;
						public static readonly CHEMICAL_X_CXF: string;
						public static readonly CHEMICAL_X_EMBL_DL_NUCLEOTIDE: string;
						public static readonly CHEMICAL_X_GALACTIC_SPC: string;
						public static readonly CHEMICAL_X_GAMESS_INPUT: string;
						public static readonly CHEMICAL_X_GAUSSIAN_CHECKPOINT: string;
						public static readonly CHEMICAL_X_GAUSSIAN_CUBE: string;
						public static readonly CHEMICAL_X_GAUSSIAN_INPUT: string;
						public static readonly CHEMICAL_X_GAUSSIAN_LOG: string;
						public static readonly CHEMICAL_X_GCG8_SEQUENCE: string;
						public static readonly CHEMICAL_X_GENBANK: string;
						public static readonly CHEMICAL_X_HIN: string;
						public static readonly CHEMICAL_X_ISOSTAR: string;
						public static readonly CHEMICAL_X_JCAMP_DX: string;
						public static readonly CHEMICAL_X_KINEMAGE: string;
						public static readonly CHEMICAL_X_MACMOLECULE: string;
						public static readonly CHEMICAL_X_MACROMODEL_INPUT: string;
						public static readonly CHEMICAL_X_MDL_MOLFILE: string;
						public static readonly CHEMICAL_X_MDL_RDFILE: string;
						public static readonly CHEMICAL_X_MDL_RXNFILE: string;
						public static readonly CHEMICAL_X_MDL_SDFILE: string;
						public static readonly CHEMICAL_X_MDL_TGF: string;
						public static readonly CHEMICAL_X_MMCIF: string;
						public static readonly CHEMICAL_X_MOL2: string;
						public static readonly CHEMICAL_X_MOLCONN_Z: string;
						public static readonly CHEMICAL_X_MOPAC_GRAPH: string;
						public static readonly CHEMICAL_X_MOPAC_INPUT: string;
						public static readonly CHEMICAL_X_MOPAC_OUT: string;
						public static readonly CHEMICAL_X_MOPAC_VIB: string;
						public static readonly CHEMICAL_X_NCBI_ASN1: string;
						public static readonly CHEMICAL_X_NCBI_ASN1_ASCII: string;
						public static readonly CHEMICAL_X_NCBI_ASN1_BINARY: string;
						public static readonly CHEMICAL_X_NCBI_ASN1_SPEC: string;
						public static readonly CHEMICAL_X_PDB: string;
						public static readonly CHEMICAL_X_ROSDAL: string;
						public static readonly CHEMICAL_X_SWISSPROT: string;
						public static readonly CHEMICAL_X_VAMAS_ISO14976: string;
						public static readonly CHEMICAL_X_VMD: string;
						public static readonly CHEMICAL_X_XTEL: string;
						public static readonly CHEMICAL_X_XYZ: string;
						public static readonly FONT_COLLECTION: string;
						public static readonly FONT_OTF: string;
						public static readonly FONT_SFNT: string;
						public static readonly FONT_TTF: string;
						public static readonly FONT_WOFF: string;
						public static readonly FONT_WOFF2: string;
						public static readonly IMAGE_ACES: string;
						public static readonly IMAGE_APNG: string;
						public static readonly IMAGE_AVCI: string;
						public static readonly IMAGE_AVCS: string;
						public static readonly IMAGE_AVIF: string;
						public static readonly IMAGE_BMP: string;
						public static readonly IMAGE_CGM: string;
						public static readonly IMAGE_DICOM_RLE: string;
						public static readonly IMAGE_DPX: string;
						public static readonly IMAGE_EMF: string;
						public static readonly IMAGE_EXAMPLE: string;
						public static readonly IMAGE_FITS: string;
						public static readonly IMAGE_G3FAX: string;
						public static readonly IMAGE_GIF: string;
						public static readonly IMAGE_HEIC: string;
						public static readonly IMAGE_HEIC_SEQUENCE: string;
						public static readonly IMAGE_HEIF: string;
						public static readonly IMAGE_HEIF_SEQUENCE: string;
						public static readonly IMAGE_HEJ2K: string;
						public static readonly IMAGE_HSJ2: string;
						public static readonly IMAGE_IEF: string;
						public static readonly IMAGE_J2C: string;
						public static readonly IMAGE_JLS: string;
						public static readonly IMAGE_JP2: string;
						public static readonly IMAGE_JPEG: string;
						public static readonly IMAGE_JPH: string;
						public static readonly IMAGE_JPHC: string;
						public static readonly IMAGE_JPM: string;
						public static readonly IMAGE_JPX: string;
						public static readonly IMAGE_JXL: string;
						public static readonly IMAGE_JXR: string;
						public static readonly IMAGE_JXRA: string;
						public static readonly IMAGE_JXRS: string;
						public static readonly IMAGE_JXS: string;
						public static readonly IMAGE_JXSC: string;
						public static readonly IMAGE_JXSI: string;
						public static readonly IMAGE_JXSS: string;
						public static readonly IMAGE_KTX: string;
						public static readonly IMAGE_KTX2: string;
						public static readonly IMAGE_NAPLPS: string;
						public static readonly IMAGE_PCX: string;
						public static readonly IMAGE_PNG: string;
						public static readonly IMAGE_PRS_BTIF: string;
						public static readonly IMAGE_PRS_PTI: string;
						public static readonly IMAGE_PWG_RASTER: string;
						public static readonly IMAGE_SVG_XML: string;
						public static readonly IMAGE_T38: string;
						public static readonly IMAGE_TIFF: string;
						public static readonly IMAGE_TIFF_FX: string;
						public static readonly IMAGE_VND_ADOBE_PHOTOSHOP: string;
						public static readonly IMAGE_VND_AIRZIP_ACCELERATOR_AZV: string;
						public static readonly IMAGE_VND_CNS_INF2: string;
						public static readonly IMAGE_VND_DECE_GRAPHIC: string;
						public static readonly IMAGE_VND_DJVU: string;
						public static readonly IMAGE_VND_DVB_SUBTITLE: string;
						public static readonly IMAGE_VND_DWG: string;
						public static readonly IMAGE_VND_DXF: string;
						public static readonly IMAGE_VND_FASTBIDSHEET: string;
						public static readonly IMAGE_VND_FPX: string;
						public static readonly IMAGE_VND_FST: string;
						public static readonly IMAGE_VND_FUJIXEROX_EDMICS_MMR: string;
						public static readonly IMAGE_VND_FUJIXEROX_EDMICS_RLC: string;
						public static readonly IMAGE_VND_GLOBALGRAPHICS_PGB: string;
						public static readonly IMAGE_VND_MICROSOFT_ICON: string;
						public static readonly IMAGE_VND_MIX: string;
						public static readonly IMAGE_VND_MOZILLA_APNG: string;
						public static readonly IMAGE_VND_MS_MODI: string;
						public static readonly IMAGE_VND_NET_FPX: string;
						public static readonly IMAGE_VND_PCO_B16: string;
						public static readonly IMAGE_VND_RADIANCE: string;
						public static readonly IMAGE_VND_SEALEDMEDIA_SOFTSEAL_GIF: string;
						public static readonly IMAGE_VND_SEALEDMEDIA_SOFTSEAL_JPG: string;
						public static readonly IMAGE_VND_SEALED_PNG: string;
						public static readonly IMAGE_VND_SVF: string;
						public static readonly IMAGE_VND_TENCENT_TAP: string;
						public static readonly IMAGE_VND_VALVE_SOURCE_TEXTURE: string;
						public static readonly IMAGE_VND_WAP_WBMP: string;
						public static readonly IMAGE_VND_XIFF: string;
						public static readonly IMAGE_VND_ZBRUSH_PCX: string;
						public static readonly IMAGE_WEBP: string;
						public static readonly IMAGE_WILDCARD: string;
						public static readonly IMAGE_WMF: string;
						public static readonly IMAGE_X_CANON_CR2: string;
						public static readonly IMAGE_X_CANON_CRW: string;
						public static readonly IMAGE_X_CMU_RAST: string;
						public static readonly IMAGE_X_CMU_RASTER: string;
						public static readonly IMAGE_X_CORELDRAW: string;
						public static readonly IMAGE_X_CORELDRAWPATTERN: string;
						public static readonly IMAGE_X_CORELDRAWTEMPLATE: string;
						public static readonly IMAGE_X_CORELPHOTOPAINT: string;
						public static readonly IMAGE_X_EMF: string;
						public static readonly IMAGE_X_EPSON_ERF: string;
						public static readonly IMAGE_X_ICON: string;
						public static readonly IMAGE_X_JG: string;
						public static readonly IMAGE_X_JNG: string;
						public static readonly IMAGE_X_MS_BMP: string;
						public static readonly IMAGE_X_NIKON_NEF: string;
						public static readonly IMAGE_X_OLYMPUS_ORF: string;
						public static readonly IMAGE_X_PHOTOSHOP: string;
						public static readonly IMAGE_X_PORTABLE_ANYMAP: string;
						public static readonly IMAGE_X_PORTABLE_BITMAP: string;
						public static readonly IMAGE_X_PORTABLE_GRAYMAP: string;
						public static readonly IMAGE_X_PORTABLE_PIXMAP: string;
						public static readonly IMAGE_X_RGB: string;
						public static readonly IMAGE_X_UP_WPNG: string;
						public static readonly IMAGE_X_WMF: string;
						public static readonly IMAGE_X_XBITMAP: string;
						public static readonly IMAGE_X_XPIXMAP: string;
						public static readonly IMAGE_X_XWINDOWDUMP: string;
						public static readonly INODE_BLOCKDEVICE: string;
						public static readonly INODE_CHARDEVICE: string;
						public static readonly INODE_DIRECTORY: string;
						public static readonly INODE_DIRECTORY_LOCKED: string;
						public static readonly INODE_FIFO: string;
						public static readonly INODE_SOCKET: string;
						public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.runtime.api.Mime;
						public static readonly MEDIA_TYPE_WILDCARD: string;
						public static readonly MESSAGE_BHTTP: string;
						public static readonly MESSAGE_CPIM: string;
						public static readonly MESSAGE_DELIVERY_STATUS: string;
						public static readonly MESSAGE_DISPOSITION_NOTIFICATION: string;
						public static readonly MESSAGE_EXAMPLE: string;
						public static readonly MESSAGE_EXTERNAL_BODY: string;
						public static readonly MESSAGE_FEEDBACK_REPORT: string;
						public static readonly MESSAGE_GLOBAL: string;
						public static readonly MESSAGE_GLOBAL_DELIVERY_STATUS: string;
						public static readonly MESSAGE_GLOBAL_DISPOSITION_NOTIFICATION: string;
						public static readonly MESSAGE_GLOBAL_HEADERS: string;
						public static readonly MESSAGE_HTTP: string;
						public static readonly MESSAGE_IMDN_XML: string;
						public static readonly MESSAGE_MLS: string;
						public static readonly MESSAGE_NEWS: string;
						public static readonly MESSAGE_OHTTP_REQ: string;
						public static readonly MESSAGE_OHTTP_RES: string;
						public static readonly MESSAGE_RFC822: string;
						public static readonly MESSAGE_SIP: string;
						public static readonly MESSAGE_SIPFRAG: string;
						public static readonly MESSAGE_S_HTTP: string;
						public static readonly MESSAGE_TRACKING_STATUS: string;
						public static readonly MESSAGE_VND_SI_SIMP: string;
						public static readonly MESSAGE_VND_WFA_WSC: string;
						public static readonly MODEL_3MF: string;
						public static readonly MODEL_E57: string;
						public static readonly MODEL_EXAMPLE: string;
						public static readonly MODEL_GLTF_BINARY: string;
						public static readonly MODEL_GLTF_JSON: string;
						public static readonly MODEL_IGES: string;
						public static readonly MODEL_JT: string;
						public static readonly MODEL_MESH: string;
						public static readonly MODEL_MTL: string;
						public static readonly MODEL_OBJ: string;
						public static readonly MODEL_PRC: string;
						public static readonly MODEL_STEP: string;
						public static readonly MODEL_STEP_XML: string;
						public static readonly MODEL_STEP_XML_ZIP: string;
						public static readonly MODEL_STEP_ZIP: string;
						public static readonly MODEL_STL: string;
						public static readonly MODEL_U3D: string;
						public static readonly MODEL_VND_BARY: string;
						public static readonly MODEL_VND_CLD: string;
						public static readonly MODEL_VND_COLLADA_XML: string;
						public static readonly MODEL_VND_DWF: string;
						public static readonly MODEL_VND_FLATLAND_3DML: string;
						public static readonly MODEL_VND_GDL: string;
						public static readonly MODEL_VND_GS_GDL: string;
						public static readonly MODEL_VND_GTW: string;
						public static readonly MODEL_VND_MOML_XML: string;
						public static readonly MODEL_VND_MTS: string;
						public static readonly MODEL_VND_OPENGEX: string;
						public static readonly MODEL_VND_PARASOLID_TRANSMIT_BINARY: string;
						public static readonly MODEL_VND_PARASOLID_TRANSMIT_TEXT: string;
						public static readonly MODEL_VND_PYTHA_PYOX: string;
						public static readonly MODEL_VND_ROSETTE_ANNOTATED_DATA_MODEL: string;
						public static readonly MODEL_VND_SAP_VDS: string;
						public static readonly MODEL_VND_USDA: string;
						public static readonly MODEL_VND_USDZ_ZIP: string;
						public static readonly MODEL_VND_VALVE_SOURCE_COMPILED_MAP: string;
						public static readonly MODEL_VND_VTU: string;
						public static readonly MODEL_VRML: string;
						public static readonly MODEL_X3D_BINARY: string;
						public static readonly MODEL_X3D_FASTINFOSET: string;
						public static readonly MODEL_X3D_VRML: string;
						public static readonly MODEL_X3D_XML: string;
						public static readonly MULTIPART_ALTERNATIVE: string;
						public static readonly MULTIPART_APPLEDOUBLE: string;
						public static readonly MULTIPART_BYTERANGES: string;
						public static readonly MULTIPART_BYTERANTES: string;
						public static readonly MULTIPART_DIGEST: string;
						public static readonly MULTIPART_ENCRYPTED: string;
						public static readonly MULTIPART_EXAMPLE: string;
						public static readonly MULTIPART_FORM_DATA: string;
						public static readonly MULTIPART_HEADER_SET: string;
						public static readonly MULTIPART_MIXED: string;
						public static readonly MULTIPART_MULTILINGUAL: string;
						public static readonly MULTIPART_PARALLEL: string;
						public static readonly MULTIPART_RELATED: string;
						public static readonly MULTIPART_REPORT: string;
						public static readonly MULTIPART_SIGNED: string;
						public static readonly MULTIPART_VND_BINT_MED_PLUS: string;
						public static readonly MULTIPART_VOICE_MESSAGE: string;
						public static readonly MULTIPART_WILDCARD: string;
						public static readonly MULTIPART_X_MIXED_REPLACE: string;
						public static readonly SERVER_SENT_EVENTS: string;
						public static readonly TEXT_1D_INTERLEAVED_PARITYFEC: string;
						public static readonly TEXT_CACHE_MANIFEST: string;
						public static readonly TEXT_CALENDAR: string;
						public static readonly TEXT_CQL: string;
						public static readonly TEXT_CQL_EXPRESSION: string;
						public static readonly TEXT_CQL_IDENTIFIER: string;
						public static readonly TEXT_CSS: string;
						public static readonly TEXT_CSV: string;
						public static readonly TEXT_CSV_SCHEMA: string;
						public static readonly TEXT_DIRECTORY: string;
						public static readonly TEXT_DIRECTORY_PROFILE_VCARD: string;
						public static readonly TEXT_DNS: string;
						public static readonly TEXT_ECMASCRIPT: string;
						public static readonly TEXT_ENCAPRTP: string;
						public static readonly TEXT_ENGLISH: string;
						public static readonly TEXT_ENRICHED: string;
						public static readonly TEXT_EVENT_STREAM: string;
						public static readonly TEXT_EXAMPLE: string;
						public static readonly TEXT_FHIRPATH: string;
						public static readonly TEXT_FLEXFEC: string;
						public static readonly TEXT_FWDRED: string;
						public static readonly TEXT_GFF3: string;
						public static readonly TEXT_GRAMMAR_REF_LIST: string;
						public static readonly TEXT_H323: string;
						public static readonly TEXT_HL7V2: string;
						public static readonly TEXT_HTML: string;
						public static readonly TEXT_IULS: string;
						public static readonly TEXT_JAVASCRIPT: string;
						public static readonly TEXT_JCR_CND: string;
						public static readonly TEXT_MARKDOWN: string;
						public static readonly TEXT_MATHML: string;
						public static readonly TEXT_MIZAR: string;
						public static readonly TEXT_N3: string;
						public static readonly TEXT_PARAMETERS: string;
						public static readonly TEXT_PARITYFEC: string;
						public static readonly TEXT_PLAIN: string;
						public static readonly TEXT_PROVENANCE_NOTATION: string;
						public static readonly TEXT_PRS_FALLENSTEIN_RST: string;
						public static readonly TEXT_PRS_LINES_TAG: string;
						public static readonly TEXT_PRS_PROP_LOGIC: string;
						public static readonly TEXT_PRS_TEXI: string;
						public static readonly TEXT_RAPTORFEC: string;
						public static readonly TEXT_RED: string;
						public static readonly TEXT_RFC822_HEADERS: string;
						public static readonly TEXT_RICHTEXT: string;
						public static readonly TEXT_RTF: string;
						public static readonly TEXT_RTPLOOPBACK: string;
						public static readonly TEXT_RTP_ENC_AESCM128: string;
						public static readonly TEXT_RTX: string;
						public static readonly TEXT_SCRIPTLET: string;
						public static readonly TEXT_SGML: string;
						public static readonly TEXT_SHACLC: string;
						public static readonly TEXT_SHEX: string;
						public static readonly TEXT_SPDX: string;
						public static readonly TEXT_STRINGS: string;
						public static readonly TEXT_T140: string;
						public static readonly TEXT_TAB_SEPARATED_VALUES: string;
						public static readonly TEXT_TEXMACS: string;
						public static readonly TEXT_TROFF: string;
						public static readonly TEXT_TURTLE: string;
						public static readonly TEXT_ULPFEC: string;
						public static readonly TEXT_URI_LIST: string;
						public static readonly TEXT_VCARD: string;
						public static readonly TEXT_VND_A: string;
						public static readonly TEXT_VND_ABC: string;
						public static readonly TEXT_VND_ASCII_ART: string;
						public static readonly TEXT_VND_CURL: string;
						public static readonly TEXT_VND_DEBIAN_COPYRIGHT: string;
						public static readonly TEXT_VND_DMCLIENTSCRIPT: string;
						public static readonly TEXT_VND_DVB_SUBTITLE: string;
						public static readonly TEXT_VND_ESMERTEC_THEME_DESCRIPTOR: string;
						public static readonly TEXT_VND_EXCHANGEABLE: string;
						public static readonly TEXT_VND_FAMILYSEARCH_GEDCOM: string;
						public static readonly TEXT_VND_FICLAB_FLT: string;
						public static readonly TEXT_VND_FLATLAND_3DML: string;
						public static readonly TEXT_VND_FLY: string;
						public static readonly TEXT_VND_FMI_FLEXSTOR: string;
						public static readonly TEXT_VND_GML: string;
						public static readonly TEXT_VND_GRAPHVIZ: string;
						public static readonly TEXT_VND_HANS: string;
						public static readonly TEXT_VND_HGL: string;
						public static readonly TEXT_VND_IN3D_3DML: string;
						public static readonly TEXT_VND_IN3D_SPOT: string;
						public static readonly TEXT_VND_IPTC_NEWSML: string;
						public static readonly TEXT_VND_IPTC_NITF: string;
						public static readonly TEXT_VND_LATEX_Z: string;
						public static readonly TEXT_VND_MOTOROLA_REFLEX: string;
						public static readonly TEXT_VND_MS_MEDIAPACKAGE: string;
						public static readonly TEXT_VND_NET2PHONE_COMMCENTER_COMMAND: string;
						public static readonly TEXT_VND_RADISYS_MSML_BASIC_LAYOUT: string;
						public static readonly TEXT_VND_SENX_WARPSCRIPT: string;
						public static readonly TEXT_VND_SI_URICATALOGUE: string;
						public static readonly TEXT_VND_SOSI: string;
						public static readonly TEXT_VND_SUN_J2ME_APP_DESCRIPTOR: string;
						public static readonly TEXT_VND_TROLLTECH_LINGUIST: string;
						public static readonly TEXT_VND_WAP_CO: string;
						public static readonly TEXT_VND_WAP_CONNECTIVITY_XML: string;
						public static readonly TEXT_VND_WAP_EMN_XML: string;
						public static readonly TEXT_VND_WAP_SI: string;
						public static readonly TEXT_VND_WAP_SL: string;
						public static readonly TEXT_VND_WAP_WML: string;
						public static readonly TEXT_VND_WAP_WMLSCRIPT: string;
						public static readonly TEXT_VND_WAP_WTA_EVENT: string;
						public static readonly TEXT_VTT: string;
						public static readonly TEXT_WGSL: string;
						public static readonly TEXT_WILDCARD: string;
						public static readonly TEXT_XML: string;
						public static readonly TEXT_XML_EXTERNAL_PARSED_ENTITY: string;
						public static readonly TEXT_X_BIBTEX: string;
						public static readonly TEXT_X_BOO: string;
						public static readonly TEXT_X_CHDR: string;
						public static readonly TEXT_X_COMPONENT: string;
						public static readonly TEXT_X_CRONTAB: string;
						public static readonly TEXT_X_CSH: string;
						public static readonly TEXT_X_CSRC: string;
						public static readonly TEXT_X_C_HDR: string;
						public static readonly TEXT_X_C_SRC: string;
						public static readonly TEXT_X_DIFF: string;
						public static readonly TEXT_X_DSRC: string;
						public static readonly TEXT_X_HASKELL: string;
						public static readonly TEXT_X_HDML: string;
						public static readonly TEXT_X_JAVA: string;
						public static readonly TEXT_X_LILYPOND: string;
						public static readonly TEXT_X_LITERATE_HASKELL: string;
						public static readonly TEXT_X_MAKEFILE: string;
						public static readonly TEXT_X_MOC: string;
						public static readonly TEXT_X_PASCAL: string;
						public static readonly TEXT_X_PCS_GCD: string;
						public static readonly TEXT_X_PERL: string;
						public static readonly TEXT_X_PYTHON: string;
						public static readonly TEXT_X_SCALA: string;
						public static readonly TEXT_X_SERVER_PARSED_HTML: string;
						public static readonly TEXT_X_SETEXT: string;
						public static readonly TEXT_X_SFV: string;
						public static readonly TEXT_X_SH: string;
						public static readonly TEXT_X_TCL: string;
						public static readonly TEXT_X_TEX: string;
						public static readonly TEXT_X_TTML: string;
						public static readonly TEXT_X_VCALENDAR: string;
						public static readonly VIDEO_1D_INTERLEAVED_PARITYFEC: string;
						public static readonly VIDEO_3GPP: string;
						public static readonly VIDEO_3GPP2: string;
						public static readonly VIDEO_3GPP_TT: string;
						public static readonly VIDEO_ANNODEX: string;
						public static readonly VIDEO_AV1: string;
						public static readonly VIDEO_BMPEG: string;
						public static readonly VIDEO_BT656: string;
						public static readonly VIDEO_CELB: string;
						public static readonly VIDEO_DL: string;
						public static readonly VIDEO_DV: string;
						public static readonly VIDEO_ENCAPRTP: string;
						public static readonly VIDEO_EVC: string;
						public static readonly VIDEO_EXAMPLE: string;
						public static readonly VIDEO_FFV1: string;
						public static readonly VIDEO_FLEXFEC: string;
						public static readonly VIDEO_FLI: string;
						public static readonly VIDEO_GL: string;
						public static readonly VIDEO_H261: string;
						public static readonly VIDEO_H263: string;
						public static readonly VIDEO_H263_1998: string;
						public static readonly VIDEO_H263_2000: string;
						public static readonly VIDEO_H264: string;
						public static readonly VIDEO_H264_RCDO: string;
						public static readonly VIDEO_H264_SVC: string;
						public static readonly VIDEO_H265: string;
						public static readonly VIDEO_H266: string;
						public static readonly VIDEO_ISO_SEGMENT: string;
						public static readonly VIDEO_JPEG: string;
						public static readonly VIDEO_JPEG2000: string;
						public static readonly VIDEO_JXSV: string;
						public static readonly VIDEO_MATROSKA: string;
						public static readonly VIDEO_MATROSKA_3D: string;
						public static readonly VIDEO_MJ2: string;
						public static readonly VIDEO_MP1S: string;
						public static readonly VIDEO_MP2P: string;
						public static readonly VIDEO_MP2T: string;
						public static readonly VIDEO_MP4: string;
						public static readonly VIDEO_MP4V_ES: string;
						public static readonly VIDEO_MPEG: string;
						public static readonly VIDEO_MPEG4_GENERIC: string;
						public static readonly VIDEO_MPV: string;
						public static readonly VIDEO_NV: string;
						public static readonly VIDEO_OGG: string;
						public static readonly VIDEO_PARITYFEC: string;
						public static readonly VIDEO_POINTER: string;
						public static readonly VIDEO_QUICKTIME: string;
						public static readonly VIDEO_RAPTORFEC: string;
						public static readonly VIDEO_RAW: string;
						public static readonly VIDEO_RTPLOOPBACK: string;
						public static readonly VIDEO_RTP_ENC_AESCM128: string;
						public static readonly VIDEO_RTX: string;
						public static readonly VIDEO_SCIP: string;
						public static readonly VIDEO_SGI_MOVIE: string;
						public static readonly VIDEO_SMPTE291: string;
						public static readonly VIDEO_SMPTE292M: string;
						public static readonly VIDEO_ULPFEC: string;
						public static readonly VIDEO_VC1: string;
						public static readonly VIDEO_VC2: string;
						public static readonly VIDEO_VND_CCTV: string;
						public static readonly VIDEO_VND_DECE_HD: string;
						public static readonly VIDEO_VND_DECE_MOBILE: string;
						public static readonly VIDEO_VND_DECE_MP4: string;
						public static readonly VIDEO_VND_DECE_PD: string;
						public static readonly VIDEO_VND_DECE_SD: string;
						public static readonly VIDEO_VND_DECE_VIDEO: string;
						public static readonly VIDEO_VND_DIRECTV_MPEG: string;
						public static readonly VIDEO_VND_DIRECTV_MPEG_TTS: string;
						public static readonly VIDEO_VND_DLNA_MPEG_TTS: string;
						public static readonly VIDEO_VND_DVB_FILE: string;
						public static readonly VIDEO_VND_FVT: string;
						public static readonly VIDEO_VND_HNS_VIDEO: string;
						public static readonly VIDEO_VND_IPTVFORUM_1DPARITYFEC_1010: string;
						public static readonly VIDEO_VND_IPTVFORUM_1DPARITYFEC_2005: string;
						public static readonly VIDEO_VND_IPTVFORUM_2DPARITYFEC_1010: string;
						public static readonly VIDEO_VND_IPTVFORUM_2DPARITYFEC_2005: string;
						public static readonly VIDEO_VND_IPTVFORUM_TTSAVC: string;
						public static readonly VIDEO_VND_IPTVFORUM_TTSMPEG2: string;
						public static readonly VIDEO_VND_MOTOROLA_VIDEO: string;
						public static readonly VIDEO_VND_MOTOROLA_VIDEOP: string;
						public static readonly VIDEO_VND_MPEGURL: string;
						public static readonly VIDEO_VND_MS_PLAYREADY_MEDIA_PYV: string;
						public static readonly VIDEO_VND_MTS: string;
						public static readonly VIDEO_VND_NOKIA_INTERLEAVED_MULTIMEDIA: string;
						public static readonly VIDEO_VND_NOKIA_MP4VR: string;
						public static readonly VIDEO_VND_NOKIA_VIDEOVOIP: string;
						public static readonly VIDEO_VND_OBJECTVIDEO: string;
						public static readonly VIDEO_VND_RADGAMETTOOLS_BINK: string;
						public static readonly VIDEO_VND_RADGAMETTOOLS_SMACKER: string;
						public static readonly VIDEO_VND_SEALEDMEDIA_SOFTSEAL_MOV: string;
						public static readonly VIDEO_VND_SEALED_MPEG1: string;
						public static readonly VIDEO_VND_SEALED_MPEG4: string;
						public static readonly VIDEO_VND_SEALED_SWF: string;
						public static readonly VIDEO_VND_UVVU_MP4: string;
						public static readonly VIDEO_VND_VIVO: string;
						public static readonly VIDEO_VND_YOUTUBE_YT: string;
						public static readonly VIDEO_VP8: string;
						public static readonly VIDEO_VP9: string;
						public static readonly VIDEO_WEBM: string;
						public static readonly VIDEO_WILDCARD: string;
						public static readonly VIDEO_X_FLV: string;
						public static readonly VIDEO_X_LA_ASF: string;
						public static readonly VIDEO_X_MATROSKA: string;
						public static readonly VIDEO_X_MNG: string;
						public static readonly VIDEO_X_MSVIDEO: string;
						public static readonly VIDEO_X_MS_ASF: string;
						public static readonly VIDEO_X_MS_WM: string;
						public static readonly VIDEO_X_MS_WMV: string;
						public static readonly VIDEO_X_MS_WMX: string;
						public static readonly VIDEO_X_MS_WVX: string;
						public static readonly VIDEO_X_SGI_MOVIE: string;
						public static readonly VND_ANDROID_DOCUMENT_DIRECTORY: string;
						public static readonly WILDCARD: string;
						public static readonly X_CONFERENCE_X_COOLTALK: string;
						public static readonly X_EPOC_X_SISX_APP: string;
						public static readonly X_WAP_MULTIPART_VND_UPLANET_HEADER_SET: string;
						public static readonly X_WORLD_X_VRML: string;
						public static fromFile(path: string): string;
						public static fromFileOr(path: string, defaultType: string): string;
						public static fromFileOrWildcard(path: string): string;
						public static getMediaType(mediaType: string): __javaRoots.okhttp3Root.MediaType;
						public static parseMediaType(mediaType: string): __javaRoots.okhttp3Root.MediaType;
						protected constructor();
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Notice {
						public readonly config$app: __javaRoots.orgRoot.autojs.autojs.runtime.api.Notice.Companion.Config;
						public readonly default$app: __javaRoots.orgRoot.autojs.autojs.runtime.api.Notice.Companion.Default;
						public readonly service$app: __javaRoots.androidRoot.app.NotificationManager;
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public getConfig$app(): __javaRoots.orgRoot.autojs.autojs.runtime.api.Notice.Companion.Config;
						public getDefault$app(): __javaRoots.orgRoot.autojs.autojs.runtime.api.Notice.Companion.Default;
						public getService$app(): __javaRoots.androidRoot.app.NotificationManager;
					}
					export namespace Notice {
						export namespace Companion {
							export class Config {
								public readonly defaultAppendScriptName: any;
								public readonly defaultAutoCancel: __javaRoots.javaRoot.lang.Boolean;
								public readonly defaultBigContent: string;
								public readonly defaultChannelDescription: string;
								public readonly defaultChannelId: string;
								public readonly defaultChannelName: string;
								public readonly defaultContent: string;
								public readonly defaultEnableLightsForChannel: __javaRoots.javaRoot.lang.Boolean;
								public readonly defaultEnableVibrationForChannel: __javaRoots.javaRoot.lang.Boolean;
								public readonly defaultImportanceForChannel: any;
								public readonly defaultIsSilent: __javaRoots.javaRoot.lang.Boolean;
								public readonly defaultLightColorForChannel: any;
								public readonly defaultLockscreenVisibilityForChannel: any;
								public readonly defaultPriority: any;
								public readonly defaultTitle: string;
								public readonly defaultVibrationPatternForChannel: number[];
								public readonly enableChannelInvalidModificationWarnings: boolean;
								public readonly useDynamicDefaultNotificationId: boolean;
								public readonly useScriptNameAsDefaultChannelId: boolean;
								public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
								public getDefaultAppendScriptName(): any;
								public getDefaultAutoCancel(): __javaRoots.javaRoot.lang.Boolean;
								public getDefaultBigContent(): string;
								public getDefaultChannelDescription(): string;
								public getDefaultChannelId(): string;
								public getDefaultChannelName(): string;
								public getDefaultContent(): string;
								public getDefaultEnableLightsForChannel(): __javaRoots.javaRoot.lang.Boolean;
								public getDefaultEnableVibrationForChannel(): __javaRoots.javaRoot.lang.Boolean;
								public getDefaultImportanceForChannel(): any;
								public getDefaultIsSilent(): __javaRoots.javaRoot.lang.Boolean;
								public getDefaultLightColorForChannel(): any;
								public getDefaultLockscreenVisibilityForChannel(): any;
								public getDefaultPriority(): any;
								public getDefaultTitle(): string;
								public getDefaultVibrationPatternForChannel(): number[];
								public getEnableChannelInvalidModificationWarnings(): boolean;
								public getUseDynamicDefaultNotificationId(): boolean;
								public getUseScriptNameAsDefaultChannelId(): boolean;
								public setDefaultAppendScriptName(_set___: any): void;
								public setDefaultAutoCancel(_set___: __javaRoots.javaRoot.lang.Boolean): void;
								public setDefaultBigContent(_set___: string): void;
								public setDefaultChannelDescription(_set___: string): void;
								public setDefaultChannelId(value: string): void;
								public setDefaultChannelName(_set___: string): void;
								public setDefaultContent(_set___: string): void;
								public setDefaultEnableLightsForChannel(_set___: __javaRoots.javaRoot.lang.Boolean): void;
								public setDefaultEnableVibrationForChannel(_set___: __javaRoots.javaRoot.lang.Boolean): void;
								public setDefaultImportanceForChannel(_set___: any): void;
								public setDefaultIsSilent(_set___: __javaRoots.javaRoot.lang.Boolean): void;
								public setDefaultLightColorForChannel(_set___: any): void;
								public setDefaultLockscreenVisibilityForChannel(_set___: any): void;
								public setDefaultPriority(_set___: any): void;
								public setDefaultTitle(_set___: string): void;
								public setDefaultVibrationPatternForChannel(_set___: number[]): void;
								public setEnableChannelInvalidModificationWarnings(_set___: boolean): void;
								public setUseDynamicDefaultNotificationId(_set___: boolean): void;
								public setUseScriptNameAsDefaultChannelId(_set___: boolean): void;
							}
							export class Default {
								public static readonly CHANNEL_ID: string;
								public static readonly ENABLE_CHANNEL_INVALID_MODIFICATION_WARNINGS: boolean;
								public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.runtime.api.Notice.Companion.Default;
								public static readonly USE_DYNAMIC_DEFAULT_NOTIFICATION_ID: boolean;
								public static readonly USE_SCRIPT_NAME_AS_DEFAULT_CHANNEL_ID: boolean;
								public readonly NOTIFICATION_ID: number;
								public getNOTIFICATION_ID(): number;
								protected constructor();
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Ocr {
						public mode: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.ocr.Ocr.Companion.OcrMode;
						public constructor();
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class OcrRapid {
						public constructor();
						public detect(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.runtime.api.OcrResult>;
						public recognizeText(image: __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper): __javaRoots.javaRoot.util.List<string>;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class OcrResult {
						public readonly bounds: __javaRoots.androidRoot.graphics.Rect;
						public readonly confidence: number;
						public readonly label: string;
						public readonly text: string;
						public constructor(text: string, confidence: number, bounds: __javaRoots.androidRoot.graphics.Rect);
						public compareTo(other: __javaRoots.orgRoot.autojs.autojs.runtime.api.OcrResult): number;
						public toString(): string;
						public compareTo(...args: any[]): any;
					}
					export interface OcrResult extends __javaRoots.javaRoot.lang.Comparable<__javaRoots.orgRoot.autojs.autojs.runtime.api.OcrResult> {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Plugins {
						public constructor(context: __javaRoots.androidRoot.content.Context, runtime: __javaRoots.orgRoot.autojs.autojs.runtime.api.Plugins.PluginRuntime);
						public clear(): void;
						public load(packageName: string): __javaRoots.orgRoot.autojs.autojs.core.plugin.Plugin;
					}
					export namespace Plugins {
						export class PluginRuntime extends __javaRoots.javaRoot.lang.Record {
							public constructor(topLevelScope: __javaRoots.orgRoot.autojs.autojs.rhino.TopLevelScope, pluginSearchDir: string, engine: string);
							public component1(): __javaRoots.orgRoot.autojs.autojs.rhino.TopLevelScope;
							public component2(): string;
							public component3(): string;
							public copy(topLevelScope: __javaRoots.orgRoot.autojs.autojs.rhino.TopLevelScope, pluginSearchDir: string, engine: string): __javaRoots.orgRoot.autojs.autojs.runtime.api.Plugins.PluginRuntime;
							public createScopedAppContext(hostContext: __javaRoots.androidRoot.content.Context, selfContext: __javaRoots.androidRoot.content.Context): __javaRoots.orgRoot.autojs.autojs.runtime.api.Plugins.ScopedAppContext;
							public engine(): string;
							public equals(other: any): boolean;
							public hashCode(): number;
							public pluginSearchDir(): string;
							public toString(): string;
							public topLevelScope(): __javaRoots.orgRoot.autojs.autojs.rhino.TopLevelScope;
						}
						export class ScopedAppContext extends __javaRoots.androidRoot.content.ContextWrapper {
							public readonly applicationContext: __javaRoots.orgRoot.autojs.autojs.runtime.api.Plugins.ScopedAppContext;
							public readonly cacheDir: __javaRoots.javaRoot.io.File;
							public readonly dataDir: __javaRoots.javaRoot.io.File;
							public readonly filesDir: __javaRoots.javaRoot.io.File;
							public constructor(hostContext: __javaRoots.androidRoot.content.Context, selfContext: __javaRoots.androidRoot.content.Context);
							public getApplicationContext(): __javaRoots.orgRoot.autojs.autojs.runtime.api.Plugins.ScopedAppContext;
							public getCacheDir(): __javaRoots.javaRoot.io.File;
							public getDataDir(): __javaRoots.javaRoot.io.File;
							public getDatabasePath(name: string): __javaRoots.javaRoot.io.File;
							public getFilesDir(): __javaRoots.javaRoot.io.File;
							public getApplicationContext(...args: any[]): any;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class PngQuantBridge {
						public constructor();
						public static probeLoadedRuntime(): string;
						public static quantize(bitmap: __javaRoots.androidRoot.graphics.Bitmap, quality: number): number[];
						public static quantize(bitmap: __javaRoots.androidRoot.graphics.Bitmap, options: __javaRoots.orgRoot.autojs.autojs.runtime.api.PngQuantBridge.Options): number[];
					}
					export namespace PngQuantBridge {
						export class Options {
							public static readonly DEFAULT_DITHERING_LEVEL: number;
							public static readonly DEFAULT_MAX_COLORS: number;
							public static readonly DEFAULT_POSTERIZE_BITS: number;
							public static readonly DEFAULT_SPEED: number;
							public readonly ditheringLevel: number;
							public readonly maxColors: number;
							public readonly maxQuality: number;
							public readonly minQuality: number;
							public readonly posterizeBits: number;
							public readonly speed: number;
							public constructor(maxColors: number, speed: number, minQuality: number, maxQuality: number, ditheringLevel: number, posterizeBits: number);
							public getDitheringLevel(): number;
							public getMaxColors(): number;
							public getMaxQuality(): number;
							public getMinQuality(): number;
							public getPosterizeBits(): number;
							public getSpeed(): number;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class ProcessShell extends __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell {
						public readonly errorOutput: __javaRoots.javaRoot.lang.StringBuilder;
						public readonly errorReader: __javaRoots.javaRoot.io.BufferedReader;
						public readonly process: __javaRoots.javaRoot.lang.Process;
						public readonly successOutput: __javaRoots.javaRoot.lang.StringBuilder;
						public readonly successReader: __javaRoots.javaRoot.io.BufferedReader;
						public static readonly rootProcess: __javaRoots.javaRoot.lang.Process;
						public static readonly shellProcess: __javaRoots.javaRoot.lang.Process;
						public constructor();
						public constructor(root: boolean);
						public exec(command: string): void;
						public static exec(command: string, withRoot: boolean): __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell.Result;
						public static exec(commands: string[], withRoot: boolean): __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell.Result;
						public static execCommand(command: string, withRoot: boolean): __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell.Result;
						public static execCommand(commands: string[], process: __javaRoots.javaRoot.lang.Process): __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell.Result;
						public static execCommand(commands: string[], withRoot: boolean): __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell.Result;
						public exit(): void;
						public exitAndWaitFor(): void;
						public getErrorOutput(): __javaRoots.javaRoot.lang.StringBuilder;
						public getErrorReader(): __javaRoots.javaRoot.io.BufferedReader;
						public getProcess(): __javaRoots.javaRoot.lang.Process;
						public static getRootProcess(): __javaRoots.javaRoot.lang.Process;
						public static getShellProcess(): __javaRoots.javaRoot.lang.Process;
						public getSuccessOutput(): __javaRoots.javaRoot.lang.StringBuilder;
						public getSuccessReader(): __javaRoots.javaRoot.io.BufferedReader;
						public readAll(): __javaRoots.orgRoot.autojs.autojs.runtime.api.ProcessShell;
						public readErrorOutput(): __javaRoots.orgRoot.autojs.autojs.runtime.api.ProcessShell;
						public readSuccessOutput(): __javaRoots.orgRoot.autojs.autojs.runtime.api.ProcessShell;
						public waitFor(): number;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Recorder {
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public clear(): void;
						public has(key: string): boolean;
						public isGreaterThan(key: string, compare: any): boolean;
						public isLessThan(key: string, compare: any): boolean;
						public load(): number;
						public load(key: string): number;
						public load(key: string, ts: any): number;
						public remove(key: string): boolean;
						public save(): number;
						public save(key: string): number;
						public save(key: string, ts: any): number;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Resolvable {
						public constructor(implementation: Resolvable);
						public constructor();
					}
					export interface Resolvable {
						resolve(param0: any): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class SQLite {
						public static readonly DEFAULT_READ_ONLY: boolean;
						public static readonly DEFAULT_VERSION: number;
						public constructor(context: __javaRoots.androidRoot.content.Context, scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public open(databaseFilePath: string, version: number, readOnly: boolean, callback: __javaRoots.orgRoot.autojs.autojs.core.database.Database.DatabaseCallback): __javaRoots.orgRoot.autojs.autojs.core.database.Database;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Scale {
						public readonly baseX: number;
						public readonly baseY: number;
						public constructor();
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public static ensureBase(base: number): number;
						public ensureBasesConsistent(): void;
						public getBaseX(): number;
						public getBaseY(): number;
						public setBaseX(value: number): void;
						public setBaseY(value: number): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class ScreenMetrics {
						public static readonly deviceScreenDensity: number;
						public static readonly deviceScreenHeight: number;
						public static readonly deviceScreenWidth: number;
						public static readonly orientation: number;
						public static readonly rotation: number;
						public static readonly screenLandscape: boolean;
						public static readonly screenPortrait: boolean;
						public constructor();
						public static getDeviceScreenDensity(): number;
						public static getDeviceScreenHeight(): number;
						public static getDeviceScreenWidth(): number;
						public static getOrientation(): number;
						public static getOrientationAwareScreenHeight(orientation: number): number;
						public static getOrientationAwareScreenWidth(orientation: number): number;
						public static getRotation(): number;
						public static init(activity: __javaRoots.androidRoot.app.Activity): void;
						public static isScreenLandscape(): boolean;
						public static isScreenPortrait(): boolean;
						public rescaleX(x: number): number;
						public rescaleX(x: number, width: number): number;
						public rescaleY(y: number): number;
						public rescaleY(y: number, height: number): number;
						public scaleX(x: number): number;
						public scaleX(x: number, width: number): number;
						public scaleY(y: number): number;
						public scaleY(y: number, height: number): number;
						public setScreenMetrics(width: number, height: number): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class ScriptPromiseAdapter {
						public constructor();
						public onReject(callback: __javaRoots.orgRoot.autojs.autojs.runtime.api.ScriptPromiseAdapter.Callback): __javaRoots.orgRoot.autojs.autojs.runtime.api.ScriptPromiseAdapter;
						public onResolve(callback: __javaRoots.orgRoot.autojs.autojs.runtime.api.ScriptPromiseAdapter.Callback): __javaRoots.orgRoot.autojs.autojs.runtime.api.ScriptPromiseAdapter;
						public reject(error: any): void;
						public resolve(result: any): void;
					}
					export interface ScriptPromiseAdapter extends __javaRoots.orgRoot.autojs.autojs.runtime.api.Resolvable {}
					export namespace ScriptPromiseAdapter {
						export class Callback {
							public constructor(implementation: Callback);
							public constructor();
						}
						export interface Callback {
							call(param0: any): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class SensorEventEmitter extends __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter {
						public constructor(sensors: __javaRoots.orgRoot.autojs.autojs.runtime.api.Sensors, bridges: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptBridges);
						public onAccuracyChanged(sensor: __javaRoots.androidRoot.hardware.Sensor, accuracy: number): void;
						public onSensorChanged(event: __javaRoots.androidRoot.hardware.SensorEvent): void;
						public unregister(): void;
					}
					export interface SensorEventEmitter extends __javaRoots.androidRoot.hardware.SensorEventListener {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Sensors extends __javaRoots.orgRoot.autojs.autojs.core.eventloop.EventEmitter {
						public readonly delay: __javaRoots.orgRoot.autojs.autojs.runtime.api.Sensors.Delay;
						public ignoresUnsupportedSensor: boolean;
						public constructor(context: __javaRoots.androidRoot.content.Context, scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public getSensor(sensorName: string): __javaRoots.androidRoot.hardware.Sensor;
						public register(sensorName: string): __javaRoots.orgRoot.autojs.autojs.runtime.api.SensorEventEmitter;
						public register(sensorName: string, delay: number): __javaRoots.orgRoot.autojs.autojs.runtime.api.SensorEventEmitter;
						public shouldQuit(): boolean;
						public unregister(emitter: __javaRoots.orgRoot.autojs.autojs.runtime.api.SensorEventEmitter): void;
						public unregisterAll(): void;
					}
					export interface Sensors extends __javaRoots.orgRoot.autojs.autojs.core.looper.Loopers.LooperQuitHandler {}
					export namespace Sensors {
						export class Delay {
							public static readonly fastest: number;
							public static readonly game: number;
							public static readonly normal: number;
							public static readonly ui: number;
							public constructor();
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Shell extends __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell {
						public readonly initialized: boolean;
						public readonly termSession: __javaRoots.jackpalRoot.androidterm.emulatorview.TermSession;
						public constructor();
						public constructor(context: __javaRoots.androidRoot.content.Context);
						public constructor(context: __javaRoots.androidRoot.content.Context, root: boolean);
						public constructor(root: boolean);
						public exec(command: string): void;
						public execAndWaitFor(command: string): string;
						public exit(): void;
						public exitAndWaitFor(): void;
						public getTermSession(): __javaRoots.jackpalRoot.androidterm.emulatorview.TermSession;
						public isInitialized(): boolean;
						public setCallback(callback: __javaRoots.orgRoot.autojs.autojs.runtime.api.Shell.Callback): void;
					}
					export namespace Shell {
						export class Callback {
							public constructor(implementation: Callback);
							public constructor();
						}
						export interface Callback {
							onInitialized(): void;
							onInterrupted(param0: __javaRoots.javaRoot.lang.InterruptedException): void;
							onNewLine(param0: string): void;
							onOutput(param0: string): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class StringReadable {
						public constructor(implementation: StringReadable);
						public constructor();
						public static readonly KEY: string;
						public static getKEY(): string;
					}
					export interface StringReadable {
						toStringReadable(): string;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Threads {
						public readonly mainThread: __javaRoots.javaRoot.lang.Thread;
						public readonly threadPools: __javaRoots.javaRoot.util.HashSet<__javaRoots.javaRoot.util.concurrent.ThreadPoolExecutor>;
						public readonly threads: __javaRoots.javaRoot.util.Set<__javaRoots.orgRoot.autojs.autojs.runtime.api.Threads.Companion.TimerThread>;
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public _pool(corePoolSize: number, maximumPoolSize: number, keepAliveTime: number): __javaRoots.javaRoot.util.concurrent.ThreadPoolExecutor;
						public allThreads(): __javaRoots.javaRoot.util.List<__javaRoots.javaRoot.lang.Thread>;
						public atomic(): __javaRoots.javaRoot.util.concurrent.atomic.AtomicLong;
						public atomic(value: number): __javaRoots.javaRoot.util.concurrent.atomic.AtomicLong;
						public currentThread(): any;
						public disposable(): __javaRoots.orgRoot.autojs.autojs.concurrent.VolatileDispose<any>;
						public exit(): void;
						public getMainThread(): __javaRoots.javaRoot.lang.Thread;
						public getThreadPools(): __javaRoots.javaRoot.util.HashSet<__javaRoots.javaRoot.util.concurrent.ThreadPoolExecutor>;
						public getThreads(): __javaRoots.javaRoot.util.Set<__javaRoots.orgRoot.autojs.autojs.runtime.api.Threads.Companion.TimerThread>;
						public hasRunningThreads(): boolean;
						public lock(): __javaRoots.javaRoot.util.concurrent.locks.ReentrantLock;
						public shutDownAll(): void;
						public start(runnable: __javaRoots.javaRoot.lang.Runnable): __javaRoots.orgRoot.autojs.autojs.runtime.api.Threads.Companion.TimerThread;
					}
					export namespace Threads {
						export namespace Companion {
							export class TimerThread extends __javaRoots.orgRoot.autojs.autojs.core.looper.TimerThread {
								public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, runnable: __javaRoots.javaRoot.lang.Runnable, _set_: __javaRoots.javaRoot.util.Set<__javaRoots.orgRoot.autojs.autojs.runtime.api.Threads.Companion.TimerThread>);
								public onExit(): void;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Timers {
						public readonly mainTimer: __javaRoots.orgRoot.autojs.autojs.core.looper.Timer;
						public readonly maxCallbackUptimeMillisForAllThreads: __javaRoots.orgRoot.autojs.autojs.concurrent.VolatileBox<__javaRoots.javaRoot.lang.Long>;
						public readonly timerForCurrentThread: __javaRoots.orgRoot.autojs.autojs.core.looper.Timer;
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public clearImmediate(id: number): boolean;
						public clearInterval(id: number): boolean;
						public clearTimeout(id: number): boolean;
						public getMainTimer(): __javaRoots.orgRoot.autojs.autojs.core.looper.Timer;
						public getMaxCallbackUptimeMillisForAllThreads(): __javaRoots.orgRoot.autojs.autojs.concurrent.VolatileBox<__javaRoots.javaRoot.lang.Long>;
						public getTimerForCurrentThread(): __javaRoots.orgRoot.autojs.autojs.core.looper.Timer;
						public getTimerForId(id: number): __javaRoots.orgRoot.autojs.autojs.core.looper.Timer;
						public getTimerForThread(thread: __javaRoots.javaRoot.lang.Thread): __javaRoots.orgRoot.autojs.autojs.core.looper.Timer;
						public hasPendingCallbacks(): boolean;
						public newTimer(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime): __javaRoots.orgRoot.autojs.autojs.core.looper.Timer;
						public recycle(): void;
						public setImmediate(callback: __javaRoots.orgRoot.mozilla.javascript.Callable, ...args: any[]): number;
						public setInterval(callback: __javaRoots.orgRoot.mozilla.javascript.Callable): number;
						public setInterval(callback: __javaRoots.orgRoot.mozilla.javascript.Callable, interval: number, ...args: any[]): number;
						public setTimeout(callback: __javaRoots.orgRoot.mozilla.javascript.Callable): number;
						public setTimeout(callback: __javaRoots.orgRoot.mozilla.javascript.Callable, delay: number, ...args: any[]): number;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Toaster {
						public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public easy(message: string): void;
						public easy(message: string, duration: number): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class UI extends __javaRoots.orgRoot.autojs.autojs.rhino.ProxyObject {
						public readonly androidLayout: __javaRoots.javaRoot.lang.Boolean;
						public readonly bindingContext: any;
						public readonly className: string;
						public readonly layoutInflater: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.DynamicLayoutInflater;
						public readonly resourceParser: __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ResourceParser;
						public readonly view: __javaRoots.androidRoot.view.View;
						public readonly widgets: __javaRoots.orgRoot.mozilla.javascript.NativeObject;
						public constructor(context: __javaRoots.androidRoot.content.Context, scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
						public get(key: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable): any;
						public getBindingContext(): any;
						public getClassName(): string;
						public getLayoutInflater(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.DynamicLayoutInflater;
						public getResourceParser(): __javaRoots.orgRoot.autojs.autojs.core.ui.inflater.ResourceParser;
						public getView(): __javaRoots.androidRoot.view.View;
						public getWidgets(): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
						public isAndroidLayout(): __javaRoots.javaRoot.lang.Boolean;
						public put(key: string, start: __javaRoots.orgRoot.mozilla.javascript.Scriptable, value: any): void;
						public recycle(): void;
						public setAndroidLayout$app(_set___: __javaRoots.javaRoot.lang.Boolean): void;
						public setBindingContext(context: any): void;
						public setView(_set___: __javaRoots.androidRoot.view.View): void;
						public get(...args: any[]): any;
						public put(...args: any[]): any;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class Util {
						public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.runtime.api.Util;
						public class(o: any): __javaRoots.javaRoot.lang.Class<any>;
						public className(o: any): string;
						public getClass(o: any): __javaRoots.javaRoot.lang.Class<any>;
						public getClassName(o: any): string;
						protected constructor();
						public getClass(...args: any[]): any;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class WrappedBarcode {
						public readonly barcode: __javaRoots.orgRoot.autojs.plugin.mlkit.barcode.api.BarcodeResult;
						public readonly boundingBox: __javaRoots.androidRoot.graphics.Rect;
						public readonly calendarEvent: any;
						public readonly contactInfo: any;
						public readonly cornerPoints: __javaRoots.androidRoot.graphics.Point[];
						public readonly displayValue: string;
						public readonly driverLicense: any;
						public readonly email: any;
						public readonly format: number;
						public readonly formatName: string;
						public readonly geoPoint: any;
						public readonly phone: any;
						public readonly rawBytes: number[];
						public readonly rawValue: string;
						public readonly sms: any;
						public readonly type: number;
						public readonly typeName: string;
						public readonly url: any;
						public readonly value: string;
						public readonly valueType: number;
						public readonly valueTypeName: string;
						public readonly wifi: any;
						public constructor(barcode: __javaRoots.orgRoot.autojs.plugin.mlkit.barcode.api.BarcodeResult);
						public getBarcode(): __javaRoots.orgRoot.autojs.plugin.mlkit.barcode.api.BarcodeResult;
						public getBoundingBox(): __javaRoots.androidRoot.graphics.Rect;
						public getCalendarEvent(): any;
						public getContactInfo(): any;
						public getCornerPoints(): __javaRoots.androidRoot.graphics.Point[];
						public getDisplayValue(): string;
						public getDriverLicense(): any;
						public getEmail(): any;
						public getFormat(): number;
						public getFormatName(): string;
						public getGeoPoint(): any;
						public getPhone(): any;
						public getRawBytes(): number[];
						public getRawValue(): string;
						public getSms(): any;
						public getType(): number;
						public getTypeName(): string;
						public getUrl(): any;
						public getValue(): string;
						public getValueType(): number;
						public getValueTypeName(): string;
						public getWifi(): any;
						public toString(): string;
					}
					export interface WrappedBarcode extends __javaRoots.orgRoot.autojs.autojs.runtime.api.IWrappedBarcode {}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export class WrappedShizuku {
						public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.runtime.api.WrappedShizuku;
						public static service: __javaRoots.orgRoot.autojs.autojs.core.shizuku.IUserService;
						public readonly operational: boolean;
						public readonly running: boolean;
						public static readonly serviceOrNull: __javaRoots.orgRoot.autojs.autojs.core.shizuku.IUserService;
						public bindUserServiceIfNeeded$app(): void;
						public config(): __javaRoots.androidRoot.content.Intent;
						public config(isRequest: __javaRoots.javaRoot.lang.Boolean): __javaRoots.androidRoot.content.Intent;
						public configWithContext(context: __javaRoots.androidRoot.content.Context, isRequest: __javaRoots.javaRoot.lang.Boolean): __javaRoots.androidRoot.content.Intent;
						public execCommand(context: __javaRoots.androidRoot.content.Context, cmd: string): __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell.Result;
						public execCommand(context: __javaRoots.androidRoot.content.Context, cmdList: string[]): __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell.Result;
						public execCommand(cmd: string): __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell.Result;
						public execCommand(cmdList: string[]): __javaRoots.orgRoot.autojs.autojs.runtime.api.AbstractShell.Result;
						public getLaunchIntent(context: __javaRoots.androidRoot.content.Context): __javaRoots.androidRoot.content.Intent;
						public static getServiceOrNull(): __javaRoots.orgRoot.autojs.autojs.core.shizuku.IUserService;
						public hasPermission(): boolean;
						public hasService(): boolean;
						public isInstalled(context: __javaRoots.androidRoot.content.Context): boolean;
						public isOperational(): boolean;
						public isRunning(): boolean;
						public onCreate$app(): void;
						public onDestroy$app(): void;
						public requestPermission(): void;
						protected constructor();
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export namespace augment {
						export abstract class Augmentable extends __javaRoots.orgRoot.autojs.autojs.rhino.ArgumentGuards {
							public static readonly AS_FUNCTIONAL_TO_STRING: number;
							public static readonly AS_GLOBAL: number;
							public static readonly AS_IGNORED: number;
							public static readonly AS_LITERAL_TO_STRING: number;
							public readonly globalAssignmentFunctions: __javaRoots.javaRoot.util.List<any>;
							public readonly globalAssignmentGetters: __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<string, any>>;
							public readonly globalAssignmentJavaClasses: __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<string, __javaRoots.kotlinRoot.reflect.KClass<any>>>;
							public readonly globalAssignmentProperties: __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<any, any>>;
							public readonly key: string;
							public readonly keys: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.runtime.api.augment.AugmentableKey>;
							public readonly selfAssignmentFunctions: __javaRoots.javaRoot.util.List<any>;
							public readonly selfAssignmentGetters: __javaRoots.javaRoot.util.List<any>;
							public readonly selfAssignmentGettersAndSetters: __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Triple<string, any, any>>;
							public readonly selfAssignmentJavaClasses: __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<string, __javaRoots.kotlinRoot.reflect.KClass<any>>>;
							public readonly selfAssignmentProperties: __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<any, any>>;
							public constructor();
							public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
							public assign(target: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject, proto: any, specifiedRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime): void;
							public assignWithRuntime(target: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject, specifiedRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, proto: any): void;
							public augment(target: __javaRoots.orgRoot.mozilla.javascript.Scriptable, additionalAttributes: number, specifiedRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
							public augment(target: __javaRoots.orgRoot.mozilla.javascript.Scriptable, proto: any, additionalAttributes: number, specifiedRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
							/** @deprecated */
							public augment(target: __javaRoots.orgRoot.mozilla.javascript.Scriptable, proto: any, withDollarPrefix: boolean, additionalAttributes: number, specifiedRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
							/** @deprecated */
							public augment(target: __javaRoots.orgRoot.mozilla.javascript.Scriptable, withDollarPrefix: boolean, additionalAttributes: number, specifiedRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
							public augmentFunctionsBy$app(destination: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject, functions: __javaRoots.javaRoot.util.Collection<__javaRoots.kotlinRoot.Pair<__javaRoots.kotlinRoot.Pair<string, string>, __javaRoots.javaRoot.lang.Integer>>): void;
							public augmentWithRuntime(target: __javaRoots.orgRoot.mozilla.javascript.Scriptable, specifiedRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, additionalAttributes: number): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
							public augmentWithRuntime(target: __javaRoots.orgRoot.mozilla.javascript.Scriptable, specifiedRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, proto: any, additionalAttributes: number): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
							/** @deprecated */
							public augmentWithRuntime(target: __javaRoots.orgRoot.mozilla.javascript.Scriptable, specifiedRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, proto: any, withDollarPrefix: boolean, additionalAttributes: number): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
							/** @deprecated */
							public augmentWithRuntime(target: __javaRoots.orgRoot.mozilla.javascript.Scriptable, specifiedRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, withDollarPrefix: boolean, additionalAttributes: number): __javaRoots.orgRoot.mozilla.javascript.ScriptableObject;
							public getGlobalAssignmentFunctions(): __javaRoots.javaRoot.util.List<any>;
							public getGlobalAssignmentGetters(): __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<string, any>>;
							public getGlobalAssignmentJavaClasses(): __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<string, __javaRoots.kotlinRoot.reflect.KClass<any>>>;
							public getGlobalAssignmentProperties(): __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<any, any>>;
							public getKey(): string;
							public getKeys(): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.runtime.api.augment.AugmentableKey>;
							public getSelfAssignmentFunctions(): __javaRoots.javaRoot.util.List<any>;
							public getSelfAssignmentGetters(): __javaRoots.javaRoot.util.List<any>;
							public getSelfAssignmentGettersAndSetters(): __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Triple<string, any, any>>;
							public getSelfAssignmentJavaClasses(): __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<string, __javaRoots.kotlinRoot.reflect.KClass<any>>>;
							public getSelfAssignmentProperties(): __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<any, any>>;
							public put(o: __javaRoots.orgRoot.mozilla.javascript.Scriptable, name: string, value: any): void;
							public put(o: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject, items: __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<string, any>>): void;
							public put(o: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject, item: __javaRoots.kotlinRoot.Pair<string, any>): void;
							public putIfAbsent(o: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject, item: __javaRoots.kotlinRoot.Pair<string, any>): void;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export namespace augment {
						export class AugmentableKey {
							public readonly name: string;
							public readonly withDollarPrefix: boolean;
							public constructor(name: string, withDollarPrefix: boolean);
							public component1(): string;
							public component2(): boolean;
							public copy(name: string, withDollarPrefix: boolean): __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.AugmentableKey;
							public equals(other: any): boolean;
							public getName(): string;
							public getWithDollarPrefix(): boolean;
							public hashCode(): number;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export namespace augment {
						export class Invokable {
							public constructor(implementation: Invokable);
							public constructor();
						}
						export interface Invokable {
							invoke(...args: any[]): any;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export namespace augment {
						export namespace continuation {
							export class Creator {
								public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable);
								public await(): any;
								public resume(): void;
								public resume(result: any): void;
								public resumeError(error: any): void;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export namespace augment {
						export namespace ocr {
							export class Ocr extends __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.Augmentable {
								public readonly selfAssignmentFunctions: __javaRoots.javaRoot.util.List<__javaRoots.javaRoot.io.Serializable>;
								public readonly selfAssignmentGettersAndSetters: __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Triple<string, any, any>>;
								public constructor(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime);
								public static detect(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, args: any[]): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
								public getSelfAssignmentFunctions(): __javaRoots.javaRoot.util.List<__javaRoots.javaRoot.io.Serializable>;
								public getSelfAssignmentGettersAndSetters(): __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Triple<string, any, any>>;
								public invoke(...args: any[]): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
								public static recognizeText(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, args: any[]): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
								public static summary(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, args: any[]): string;
								public static tap(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, args: any[]): __javaRoots.orgRoot.mozilla.javascript.Undefined;
								public static toString(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, args: any[]): string;
								public getSelfAssignmentFunctions(...args: any[]): any;
								public invoke(...args: any[]): any;
							}
							export interface Ocr extends __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.Invokable {}
							export namespace Ocr {
								export namespace Companion {
									export class OcrMode extends __javaRoots.javaRoot.lang.Enum<__javaRoots.orgRoot.autojs.autojs.runtime.api.augment.ocr.Ocr.Companion.OcrMode> {
										public static readonly MLKIT: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.ocr.Ocr.Companion.OcrMode;
										public static readonly PADDLE: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.ocr.Ocr.Companion.OcrMode;
										public static readonly RAPID: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.ocr.Ocr.Companion.OcrMode;
										public static readonly UNKNOWN: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.ocr.Ocr.Companion.OcrMode;
										public readonly detect: __javaRoots.kotlinRoot.jvm.functions.Function3<__javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, __javaRoots.orgRoot.mozilla.javascript.NativeObject, __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.runtime.api.OcrResult>>;
										public readonly recognizeText: __javaRoots.kotlinRoot.jvm.functions.Function3<__javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, __javaRoots.orgRoot.mozilla.javascript.NativeObject, __javaRoots.javaRoot.util.List<string>>;
										public readonly value: string;
										public static readonly entries: __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.runtime.api.augment.ocr.Ocr.Companion.OcrMode>;
										public getDetect(): __javaRoots.kotlinRoot.jvm.functions.Function3<__javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, __javaRoots.orgRoot.mozilla.javascript.NativeObject, __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.runtime.api.OcrResult>>;
										public static getEntries(): __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.runtime.api.augment.ocr.Ocr.Companion.OcrMode>;
										public getRecognizeText(): __javaRoots.kotlinRoot.jvm.functions.Function3<__javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, __javaRoots.orgRoot.autojs.autojs.core.image.ImageWrapper, __javaRoots.orgRoot.mozilla.javascript.NativeObject, __javaRoots.javaRoot.util.List<string>>;
										public getValue(): string;
										public static valueOf(value: string): __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.ocr.Ocr.Companion.OcrMode;
										public static values(): __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.ocr.Ocr.Companion.OcrMode[];
										protected constructor();
										public static valueOf(...args: any[]): any;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export namespace augment {
						export namespace pinyin {
							export class PinyinCore {
								public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore;
								public compact(arr: __javaRoots.javaRoot.util.List<__javaRoots.javaRoot.util.List<string>>): __javaRoots.javaRoot.util.List<__javaRoots.javaRoot.util.List<string>>;
								public compare(hanA: string, hanB: string): number;
								public convert(hansArg: string, options: __javaRoots.orgRoot.mozilla.javascript.NativeObject): __javaRoots.javaRoot.util.List<__javaRoots.javaRoot.util.List<string>>;
								public parseMode$app(o: any): __javaRoots.javaRoot.lang.Integer;
								public parseStyle$app(o: any): __javaRoots.javaRoot.lang.Integer;
								public surnamePinyin(hans: string, options: __javaRoots.orgRoot.mozilla.javascript.NativeObject): __javaRoots.javaRoot.util.List<__javaRoots.javaRoot.util.List<string>>;
								public toFixed$app(pinyin: string, style: number): string;
								protected constructor();
							}
							export namespace PinyinCore {
								export class PinyinMode extends __javaRoots.javaRoot.lang.Enum<__javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinMode> {
									public static readonly NORMAL: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinMode;
									public static readonly PLACENAME: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinMode;
									public static readonly PLACE_NAME: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinMode;
									public static readonly SURNAME: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinMode;
									public readonly value: number;
									public static readonly entries: __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinMode>;
									public static getEntries(): __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinMode>;
									public getValue(): number;
									public static valueOf(value: string): __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinMode;
									public static values(): __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinMode[];
									protected constructor();
									public static valueOf(...args: any[]): any;
								}
								export class PinyinStyle extends __javaRoots.javaRoot.lang.Enum<__javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinStyle> {
									public static readonly FIRST_LETTER: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinStyle;
									public static readonly INITIALS: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinStyle;
									public static readonly NORMAL: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinStyle;
									public static readonly TO3NE: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinStyle;
									public static readonly TONE: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinStyle;
									public static readonly TONE2: __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinStyle;
									public readonly value: number;
									public static readonly entries: __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinStyle>;
									public static getEntries(): __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinStyle>;
									public getValue(): number;
									public static valueOf(value: string): __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinStyle;
									public static values(): __javaRoots.orgRoot.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinStyle[];
									protected constructor();
									public static valueOf(...args: any[]): any;
								}
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace api {
					export namespace augment {
						export namespace threads {
							export class VolatileDisposeNativeObject extends __javaRoots.orgRoot.mozilla.javascript.NativeObject {
								public readonly entries: __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.util.Map.Entry<any, any>>;
								public readonly keys: __javaRoots.javaRoot.util.Set<any>;
								public constructor();
								public constructor(declarationScope: __javaRoots.orgRoot.mozilla.javascript.VarScope);
								public static blockedGet(cx: __javaRoots.orgRoot.mozilla.javascript.Context, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, args: any[], funObj: __javaRoots.orgRoot.mozilla.javascript.Function): any;
								public static blockedGetOrThrow(cx: __javaRoots.orgRoot.mozilla.javascript.Context, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, args: any[], funObj: __javaRoots.orgRoot.mozilla.javascript.Function): any;
								public entrySet(): __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.util.Map.Entry<any, any>>;
								public getEntries(): __javaRoots.javaRoot.util.Set<__javaRoots.javaRoot.util.Map.Entry<any, any>>;
								public getKeys(): __javaRoots.javaRoot.util.Set<any>;
								public getSize(): number;
								public getValues(): __javaRoots.javaRoot.util.Collection<any>;
								public keySet(): __javaRoots.javaRoot.util.Set<any>;
								public static setAndNotify(cx: __javaRoots.orgRoot.mozilla.javascript.Context, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, args: any[], funObj: __javaRoots.orgRoot.mozilla.javascript.Function): __javaRoots.orgRoot.mozilla.javascript.Undefined;
								public size(): number;
								public values(): __javaRoots.javaRoot.util.Collection<any>;
								public entrySet(...args: any[]): any;
								public keySet(...args: any[]): any;
								public values(...args: any[]): any;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace exception {
					export class NotImplementedError extends __javaRoots.javaRoot.lang.Exception {
						public constructor();
						public constructor(message: string);
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace exception {
					export class ScriptException extends __javaRoots.javaRoot.lang.RuntimeException {
						public constructor();
						public constructor(message: string);
						public constructor(message: string, cause: __javaRoots.javaRoot.lang.Throwable);
						public constructor(cause: __javaRoots.javaRoot.lang.Throwable);
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace runtime {
				export namespace exception {
					export class ScriptInterruptedException extends __javaRoots.orgRoot.autojs.autojs.runtime.exception.ScriptException {
						public constructor();
						public constructor(e: __javaRoots.javaRoot.lang.Throwable);
						public static causedByInterrupt(e: __javaRoots.javaRoot.lang.Throwable): boolean;
						/** @deprecated */
						public static causedByInterrupted(e: __javaRoots.javaRoot.lang.Throwable): boolean;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export class AutoFileSource extends __javaRoots.orgRoot.autojs.autojs.script.ScriptSource {
					public static readonly ENGINE: string;
					public readonly engineName: string;
					public readonly file: __javaRoots.javaRoot.io.File;
					public constructor(file: __javaRoots.javaRoot.io.File);
					public constructor(path: string);
					public getEngineName(): string;
					public getFile(): __javaRoots.javaRoot.io.File;
					public toString(): string;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export class JavaScriptFileSource extends __javaRoots.orgRoot.autojs.autojs.script.JavaScriptSource {
					public readonly compilerBackedTypeScriptSource: boolean;
					public readonly engineName: string;
					public readonly file: __javaRoots.javaRoot.io.File;
					public readonly nodeProjectRoot: __javaRoots.javaRoot.io.File;
					public readonly rhinoTypeScriptSource: boolean;
					public readonly script: string;
					public readonly scriptReader: __javaRoots.javaRoot.io.Reader;
					public constructor(file: __javaRoots.javaRoot.io.File);
					public constructor(path: string);
					public constructor(name: string, file: __javaRoots.javaRoot.io.File);
					public getEngineName(): string;
					public getFile(): __javaRoots.javaRoot.io.File;
					public getNodeProjectRoot(): __javaRoots.javaRoot.io.File;
					public getScript(): string;
					public getScriptReader(): __javaRoots.javaRoot.io.Reader;
					public isCompilerBackedTypeScriptSource(): boolean;
					public isRhinoTypeScriptSource(): boolean;
					public toString(): string;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export abstract class JavaScriptSource extends __javaRoots.orgRoot.autojs.autojs.script.ScriptSource {
					public static readonly ENGINE: string;
					public static readonly ENGINE_NODEJS: string;
					public static readonly EXECUTION_MODES: __javaRoots.javaRoot.util.Map<string, __javaRoots.javaRoot.lang.Integer>;
					public static readonly EXECUTION_MODE_AUTO: number;
					public static readonly EXECUTION_MODE_JSOX: number;
					public static readonly EXECUTION_MODE_NODEJS: number;
					public static readonly EXECUTION_MODE_NORMAL: number;
					public static readonly EXECUTION_MODE_RAW: number;
					public static readonly EXECUTION_MODE_RHINO: number;
					public static readonly EXECUTION_MODE_UI: number;
					public static readonly EXECUTION_MODE_UI_PREFIX: string;
					public static readonly EXECUTION_MODE_UI_THREAD: number;
					public readonly engineName: string;
					public readonly executionMode: number;
					public readonly nonNullScriptReader: __javaRoots.javaRoot.io.Reader;
					public readonly script: string;
					public readonly scriptReader: __javaRoots.javaRoot.io.Reader;
					public constructor(name: string);
					public getEngineName(): string;
					public getExecutionMode(): number;
					public getNonNullScriptReader(): __javaRoots.javaRoot.io.Reader;
					public getScript(): string;
					public getScriptReader(): __javaRoots.javaRoot.io.Reader;
					public static isCompilerBackedTypeScriptFileName(fileName: string): boolean;
					public static isJavaScriptFileName(fileName: string): boolean;
					public static isNodeJsFileName(fileName: string): boolean;
					public static isRhinoTypeScriptFileName(fileName: string): boolean;
					public static isTypeScriptDeclarationFileName(fileName: string): boolean;
					public static isUnsupportedSingleFileTypeScriptFileName(fileName: string): boolean;
					public static parseExecutionMode(script: string): __javaRoots.orgRoot.autojs.autojs.script.JavaScriptSource.ExecutionInfo;
					public static resolveEngineName(executionMode: number): string;
					public toString(): string;
				}
				export namespace JavaScriptSource {
					export class ExecutionInfo {
						public readonly lineno: number;
						public readonly mode: number;
						public getLineno(): number;
						public getMode(): number;
						protected constructor();
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export class NodeProjectLaunchKind extends __javaRoots.javaRoot.lang.Enum<__javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind> {
					public static readonly AMBIGUOUS: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind;
					public static readonly PACKAGE_BIN: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind;
					public static readonly PACKAGE_SCRIPT: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind;
					public static readonly PROJECT_ENTRY: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind;
					public readonly descriptorValue: string;
					public static readonly entries: __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind>;
					public getDescriptorValue(): string;
					public static getEntries(): __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind>;
					public static valueOf(value: string): __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind;
					public static values(): __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind[];
					protected constructor();
					public static valueOf(...args: any[]): any;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export class NodeProjectLaunchOptions {
					public readonly argv: __javaRoots.javaRoot.util.List<string>;
					public readonly binName: string;
					public readonly entryDirective: string;
					public readonly env: __javaRoots.javaRoot.util.Map<string, string>;
					public readonly executionMode: string;
					public readonly launchKind: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind;
					public readonly packageDir: __javaRoots.javaRoot.io.File;
					public readonly processPoolSlot: string;
					public readonly processPoolSlotSource: string;
					public readonly scriptName: string;
					public readonly timeoutMs: __javaRoots.javaRoot.lang.Long;
					public readonly workingDirectory: __javaRoots.javaRoot.io.File;
					public constructor();
					public constructor(packageDir: __javaRoots.javaRoot.io.File);
					public constructor(packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File);
					public constructor(packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, scriptName: string);
					public constructor(packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, scriptName: string, binName: string);
					public constructor(packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, scriptName: string, binName: string, argv: __javaRoots.javaRoot.util.List<string>);
					public constructor(packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, scriptName: string, binName: string, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>);
					public constructor(packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, scriptName: string, binName: string, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: __javaRoots.javaRoot.lang.Long);
					public constructor(packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, scriptName: string, binName: string, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: __javaRoots.javaRoot.lang.Long, executionMode: string);
					public constructor(packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, scriptName: string, binName: string, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: __javaRoots.javaRoot.lang.Long, executionMode: string, entryDirective: string);
					public constructor(packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, scriptName: string, binName: string, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: __javaRoots.javaRoot.lang.Long, executionMode: string, entryDirective: string, processPoolSlot: string);
					public constructor(packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, scriptName: string, binName: string, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: __javaRoots.javaRoot.lang.Long, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string);
					public component1(): __javaRoots.javaRoot.io.File;
					public component10(): string;
					public component11(): string;
					public component2(): __javaRoots.javaRoot.io.File;
					public component3(): string;
					public component4(): string;
					public component5(): __javaRoots.javaRoot.util.List<string>;
					public component6(): __javaRoots.javaRoot.util.Map<string, string>;
					public component7(): __javaRoots.javaRoot.lang.Long;
					public component8(): string;
					public component9(): string;
					public copy(packageDir: __javaRoots.javaRoot.io.File, workingDirectory: __javaRoots.javaRoot.io.File, scriptName: string, binName: string, argv: __javaRoots.javaRoot.util.List<string>, env: __javaRoots.javaRoot.util.Map<string, string>, timeoutMs: __javaRoots.javaRoot.lang.Long, executionMode: string, entryDirective: string, processPoolSlot: string, processPoolSlotSource: string): __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchOptions;
					public equals(other: any): boolean;
					public getArgv(): __javaRoots.javaRoot.util.List<string>;
					public getBinName(): string;
					public getEntryDirective(): string;
					public getEnv(): __javaRoots.javaRoot.util.Map<string, string>;
					public getExecutionMode(): string;
					public getLaunchKind(): __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind;
					public getPackageDir(): __javaRoots.javaRoot.io.File;
					public getProcessPoolSlot(): string;
					public getProcessPoolSlotSource(): string;
					public getScriptName(): string;
					public getTimeoutMs(): __javaRoots.javaRoot.lang.Long;
					public getWorkingDirectory(): __javaRoots.javaRoot.io.File;
					public hashCode(): number;
					public toString(): string;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export class NodeProjectLaunchSource {
					public constructor(implementation: NodeProjectLaunchSource);
					public constructor();
				}
				export interface NodeProjectLaunchSource {
					readonly nodeProjectArgv: __javaRoots.javaRoot.util.List<string>;
					readonly nodeProjectBinName: string;
					readonly nodeProjectEntryDirective: string;
					readonly nodeProjectEnv: __javaRoots.javaRoot.util.Map<string, string>;
					readonly nodeProjectExecutionMode: string;
					readonly nodeProjectLaunchKind: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind;
					readonly nodeProjectPackageDirFile: __javaRoots.javaRoot.io.File;
					readonly nodeProjectProcessPoolSlot: string;
					readonly nodeProjectProcessPoolSlotSource: string;
					readonly nodeProjectRootFile: __javaRoots.javaRoot.io.File;
					readonly nodeProjectScriptName: string;
					readonly nodeProjectTimeoutMs: __javaRoots.javaRoot.lang.Long;
					readonly nodeProjectWorkingDirectoryFile: __javaRoots.javaRoot.io.File;
					getNodeProjectArgv(): __javaRoots.javaRoot.util.List<string>;
					getNodeProjectBinName(): string;
					getNodeProjectEntryDirective(): string;
					getNodeProjectEnv(): __javaRoots.javaRoot.util.Map<string, string>;
					getNodeProjectExecutionMode(): string;
					getNodeProjectLaunchKind(): __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind;
					getNodeProjectPackageDirFile(): __javaRoots.javaRoot.io.File;
					getNodeProjectProcessPoolSlot(): string;
					getNodeProjectProcessPoolSlotSource(): string;
					getNodeProjectRootFile(): __javaRoots.javaRoot.io.File;
					getNodeProjectScriptName(): string;
					getNodeProjectTimeoutMs(): __javaRoots.javaRoot.lang.Long;
					getNodeProjectWorkingDirectoryFile(): __javaRoots.javaRoot.io.File;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export class PersistedScriptLaunchContext {
					public readonly projectRoot: string;
					public readonly sourceKind: string;
					public constructor(sourceKind: string, projectRoot: string);
					public component1(): string;
					public component2(): string;
					public copy(sourceKind: string, projectRoot: string): __javaRoots.orgRoot.autojs.autojs.script.PersistedScriptLaunchContext;
					public equals(other: any): boolean;
					public getProjectRoot(): string;
					public getSourceKind(): string;
					public hashCode(): number;
					public toString(): string;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export class PythonFileSource extends __javaRoots.orgRoot.autojs.autojs.script.PythonScriptSource {
					public readonly file: __javaRoots.javaRoot.io.File;
					public readonly semanticFile$app: __javaRoots.javaRoot.io.File;
					public constructor(file: __javaRoots.javaRoot.io.File);
					public constructor(file: __javaRoots.javaRoot.io.File, semanticFile: __javaRoots.javaRoot.io.File);
					public constructor(path: string);
					public getFile(): __javaRoots.javaRoot.io.File;
					public getSemanticFile$app(): __javaRoots.javaRoot.io.File;
					public toString(): string;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export class PythonProjectLaunchAdmission {
					public readonly entryFile: __javaRoots.javaRoot.io.File;
					public readonly entryMode: __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonEntryMode;
					public readonly executionMode: __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonExecutionMode;
					public readonly projectRoot: __javaRoots.javaRoot.io.File;
					public readonly stdin: __javaRoots.orgRoot.autojs.autojs.script.PythonProjectStdinSource;
					public readonly timeoutMillis: __javaRoots.javaRoot.lang.Long;
					public constructor(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, timeoutMillis: __javaRoots.javaRoot.lang.Long, entryMode: __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonEntryMode, stdin: __javaRoots.orgRoot.autojs.autojs.script.PythonProjectStdinSource, executionMode: __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonExecutionMode);
					public component1(): __javaRoots.javaRoot.io.File;
					public component2(): __javaRoots.javaRoot.io.File;
					public component3(): __javaRoots.javaRoot.lang.Long;
					public component4(): __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonEntryMode;
					public component5(): __javaRoots.orgRoot.autojs.autojs.script.PythonProjectStdinSource;
					public component6(): __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonExecutionMode;
					public copy(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, timeoutMillis: __javaRoots.javaRoot.lang.Long, entryMode: __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonEntryMode, stdin: __javaRoots.orgRoot.autojs.autojs.script.PythonProjectStdinSource, executionMode: __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonExecutionMode): __javaRoots.orgRoot.autojs.autojs.script.PythonProjectLaunchAdmission;
					public equals(other: any): boolean;
					public getEntryFile(): __javaRoots.javaRoot.io.File;
					public getEntryMode(): __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonEntryMode;
					public getExecutionMode(): __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonExecutionMode;
					public getProjectRoot(): __javaRoots.javaRoot.io.File;
					public getStdin(): __javaRoots.orgRoot.autojs.autojs.script.PythonProjectStdinSource;
					public getTimeoutMillis(): __javaRoots.javaRoot.lang.Long;
					public hashCode(): number;
					public toString(): string;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export class PythonProjectSource extends __javaRoots.orgRoot.autojs.autojs.script.PythonFileSource {
					public readonly entryMode: __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonEntryMode;
					public readonly entryPoint: string;
					public readonly executionMode: __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonExecutionMode;
					public readonly projectEntryFile: __javaRoots.javaRoot.io.File;
					public readonly projectRoot: __javaRoots.javaRoot.io.File;
					public readonly stdin: __javaRoots.orgRoot.autojs.autojs.script.PythonProjectStdinSource;
					public readonly timeoutMillis: __javaRoots.javaRoot.lang.Long;
					public static create(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.script.PythonProjectSource;
					public static create(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, timeoutMillis: __javaRoots.javaRoot.lang.Long): __javaRoots.orgRoot.autojs.autojs.script.PythonProjectSource;
					public static create(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, timeoutMillis: __javaRoots.javaRoot.lang.Long, entryMode: __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonEntryMode): __javaRoots.orgRoot.autojs.autojs.script.PythonProjectSource;
					public static create(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, timeoutMillis: __javaRoots.javaRoot.lang.Long, entryMode: __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonEntryMode, stdin: __javaRoots.orgRoot.autojs.autojs.script.PythonProjectStdinSource): __javaRoots.orgRoot.autojs.autojs.script.PythonProjectSource;
					public static create(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, timeoutMillis: __javaRoots.javaRoot.lang.Long, entryMode: __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonEntryMode, stdin: __javaRoots.orgRoot.autojs.autojs.script.PythonProjectStdinSource, executionMode: __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonExecutionMode): __javaRoots.orgRoot.autojs.autojs.script.PythonProjectSource;
					public getEntryMode(): __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonEntryMode;
					public getEntryPoint(): string;
					public getExecutionMode(): __javaRoots.orgRoot.autojs.plugin.python.runtime.api.PythonExecutionMode;
					public getProjectEntryFile(): __javaRoots.javaRoot.io.File;
					public getProjectRoot(): __javaRoots.javaRoot.io.File;
					public getStdin(): __javaRoots.orgRoot.autojs.autojs.script.PythonProjectStdinSource;
					public getTimeoutMillis(): __javaRoots.javaRoot.lang.Long;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export abstract class PythonProjectStdinSource {
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export abstract class PythonScriptSource extends __javaRoots.orgRoot.autojs.autojs.script.ScriptSource {
					public static readonly ENGINE: string;
					public static readonly EXTENSION: string;
					public readonly engineName: string;
					public static readonly previewEnabled: boolean;
					public getEngineName(): string;
					public static isPreviewEnabled(): boolean;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export class ScriptLaunchSourceFactory {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory;
					public static capturePersistedLaunchContext(path: string): __javaRoots.orgRoot.autojs.autojs.script.PersistedScriptLaunchContext;
					public createAutoJsProjectLaunchForPythonPreview$app(projectRoot: __javaRoots.javaRoot.io.File, workingDirectory: string, pythonPreviewEnabled: boolean): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createFileLaunch(file: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createFileLaunch(file: __javaRoots.javaRoot.io.File, workingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createFileLaunch(file: __javaRoots.javaRoot.io.File, workingDirectory: string, defaultWorkingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public createFileLaunchForPythonPreview$app(file: __javaRoots.javaRoot.io.File, workingDirectory: string, defaultWorkingDirectory: string, pythonPreviewEnabled: boolean): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createFileSource(file: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
					public static createNodeProjectLaunch(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createNodeProjectLaunch(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, name: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createNodeProjectLaunch(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, name: string, launchOptions: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchOptions): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createNodeProjectLaunch(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, name: string, launchOptions: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchOptions, workingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createNodeProjectLaunch(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, name: string, launchOptions: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchOptions, workingDirectory: string, defaultWorkingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createNodeProjectRequestOrNull(file: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest;
					public static createNodeProjectRequestOrNull(file: __javaRoots.javaRoot.io.File, workingDirectory: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest;
					public static createNodeProjectRequestOrNull(file: __javaRoots.javaRoot.io.File, workingDirectory: string, defaultWorkingDirectory: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest;
					public static createNodeProjectRequestOrNull(path: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest;
					public static createNodeProjectRequestOrNull(path: string, workingDirectory: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest;
					public static createNodeProjectRequestOrNull(path: string, workingDirectory: string, defaultWorkingDirectory: string): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest;
					public static createPathLaunch(path: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createPathLaunch(path: string, preExecuteScript: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createPathLaunch(path: string, preExecuteScript: string, workingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createPathLaunch(path: string, preExecuteScript: string, workingDirectory: string, defaultWorkingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public createPathLaunchForPythonPreview$app(path: string, preExecuteScript: string, workingDirectory: string, defaultWorkingDirectory: string, pythonPreviewEnabled: boolean): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createPersistedPathLaunch(path: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createPersistedPathLaunch(path: string, sourceKind: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createPersistedPathLaunch(path: string, sourceKind: string, projectRoot: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createPersistedPathLaunch(path: string, sourceKind: string, projectRoot: string, preExecuteScript: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createPersistedPathLaunch(path: string, sourceKind: string, projectRoot: string, preExecuteScript: string, workingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createPersistedPathLaunch(path: string, sourceKind: string, projectRoot: string, preExecuteScript: string, workingDirectory: string, defaultWorkingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public createPersistedPathLaunchForPythonPreview$app(path: string, sourceKind: string, projectRoot: string, preExecuteScript: string, workingDirectory: string, defaultWorkingDirectory: string, pythonPreviewEnabled: boolean): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createProjectEntryLaunch(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createProjectEntryLaunch(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, name: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createProjectEntryLaunch(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, name: string, workingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createProjectEntryLaunch(projectRoot: __javaRoots.javaRoot.io.File, entryFile: __javaRoots.javaRoot.io.File, name: string, workingDirectory: string, defaultWorkingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createPythonProjectLaunch(admission: __javaRoots.orgRoot.autojs.autojs.script.PythonProjectLaunchAdmission): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createPythonProjectLaunch(admission: __javaRoots.orgRoot.autojs.autojs.script.PythonProjectLaunchAdmission, workingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public createPythonProjectLaunchForPreview$app(admission: __javaRoots.orgRoot.autojs.autojs.script.PythonProjectLaunchAdmission, workingDirectory: string, pythonPreviewEnabled: boolean): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createScriptLaunch(script: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createScriptLaunch(script: string, workingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createSemanticFileLaunch(sourceFile: __javaRoots.javaRoot.io.File, semanticPath: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createSemanticFileLaunch(sourceFile: __javaRoots.javaRoot.io.File, semanticPath: string, semanticUri: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createSemanticFileLaunch(sourceFile: __javaRoots.javaRoot.io.File, semanticPath: string, semanticUri: string, semanticDisplayName: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createSemanticFileLaunch(sourceFile: __javaRoots.javaRoot.io.File, semanticPath: string, semanticUri: string, semanticDisplayName: string, semanticMimeType: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createSemanticFileLaunch(sourceFile: __javaRoots.javaRoot.io.File, semanticPath: string, semanticUri: string, semanticDisplayName: string, semanticMimeType: string, workingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createSemanticFileLaunch(sourceFile: __javaRoots.javaRoot.io.File, semanticPath: string, semanticUri: string, semanticDisplayName: string, semanticMimeType: string, workingDirectory: string, defaultWorkingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public createSemanticFileLaunchForPythonPreview$app(sourceFile: __javaRoots.javaRoot.io.File, semanticPath: string, semanticUri: string, semanticDisplayName: string, semanticMimeType: string, workingDirectory: string, defaultWorkingDirectory: string, pythonPreviewEnabled: boolean): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createSourceLaunch(source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createSourceLaunch(source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource, workingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static createSourceLaunch(source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource, workingDirectory: string, defaultWorkingDirectory: string): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
					public static enforcePythonExternalUriBoundary(scheme: string, uriPath: string, uriText: string, displayName: string, explicitMimeType: string, providerMimeType: string): void;
					public static enforcePythonLaunchBoundary(...locations: string[]): void;
					public static enforcePythonMimeBoundary(mimeType: string): void;
					public static resolvePythonImportExtension(displayName: string, uriPath: string, explicitMimeType: string, providerMimeType: string): string;
					protected constructor();
				}
				export namespace ScriptLaunchSourceFactory {
					export class Launch {
						public readonly engineName: string;
						public readonly nodeProjectLaunchKind: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind;
						public readonly nodeProjectLaunchSource: __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchSource;
						public readonly projectFeatures: __javaRoots.javaRoot.util.List<string>;
						public readonly pythonProjectSource: __javaRoots.orgRoot.autojs.autojs.script.PythonProjectSource;
						public readonly source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
						public readonly workingDirectory: string;
						public constructor(source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource, workingDirectory: string, projectFeatures: __javaRoots.javaRoot.util.List<string>);
						public buildNodeProjectRequestOrNull(): __javaRoots.orgRoot.autojs.autojs.engine.NodeProjectRunner.ProjectRequest;
						public component1(): __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
						public component2(): string;
						public component3(): __javaRoots.javaRoot.util.List<string>;
						public copy(source: __javaRoots.orgRoot.autojs.autojs.script.ScriptSource, workingDirectory: string, projectFeatures: __javaRoots.javaRoot.util.List<string>): __javaRoots.orgRoot.autojs.autojs.script.ScriptLaunchSourceFactory.Launch;
						public createExecutionConfig(): __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
						public createExecutionConfig(base: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
						public createExecutionConfig(base: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig, overrideWorkingDirectory: boolean): __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig;
						public equals(other: any): boolean;
						public getEngineName(): string;
						public getNodeProjectLaunchKind(): __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchKind;
						public getNodeProjectLaunchSource(): __javaRoots.orgRoot.autojs.autojs.script.NodeProjectLaunchSource;
						public getProjectFeatures(): __javaRoots.javaRoot.util.List<string>;
						public getPythonProjectSource(): __javaRoots.orgRoot.autojs.autojs.script.PythonProjectSource;
						public getSource(): __javaRoots.orgRoot.autojs.autojs.script.ScriptSource;
						public getWorkingDirectory(): string;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export abstract class ScriptSource {
					public readonly elegantPath: string;
					public readonly engineName: string;
					public readonly extension: string;
					public readonly fullName: string;
					public readonly fullPath: string;
					public readonly name: string;
					public readonly originPath: string;
					public readonly originUri: string;
					public readonly overriddenFullPath: string;
					public readonly prefix: string;
					public constructor(sourceName: string);
					public constructor(sourceName: string, extension: string);
					public getElegantPath(): string;
					public getEngineName(): string;
					public getExtension(): string;
					public getFullName(): string;
					public getFullPath(): string;
					public getName(): string;
					public getOriginPath(): string;
					public getOriginUri(): string;
					public getOverriddenFullPath(): string;
					public getPrefix(): string;
					public setOriginUri(_set___: string): void;
					public setOverriddenFullPath(_set___: string): void;
					public setPrefix(_set___: string): void;
				}
				export interface ScriptSource extends __javaRoots.javaRoot.io.Serializable {}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace script {
				export class StringScriptSource extends __javaRoots.orgRoot.autojs.autojs.script.JavaScriptSource {
					public readonly script: string;
					public readonly scriptReader: __javaRoots.javaRoot.io.Reader;
					public constructor(script: string);
					public constructor(name: string, script: string);
					public getScript(): string;
					public getScriptReader(): __javaRoots.javaRoot.io.Reader;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace storage {
				export namespace database {
					export abstract class BaseModel {
						public readonly id: number;
						public constructor();
						public equals(o: any): boolean;
						public getId(): number;
						public hashCode(): number;
						public setId(id: number): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace theme {
				export class ThemeColor {
					public readonly luminanceDark: boolean;
					public readonly luminanceLight: boolean;
					public constructor();
					public constructor(color: number);
					public constructor(colorPrimary: number, colorPrimaryDark: number, colorAccent: number);
					public colorAccent(colorAccent: number): __javaRoots.orgRoot.autojs.autojs.theme.ThemeColor;
					public colorPrimary(colorPrimary: number): __javaRoots.orgRoot.autojs.autojs.theme.ThemeColor;
					public colorPrimaryDark(colorPrimaryDark: number): __javaRoots.orgRoot.autojs.autojs.theme.ThemeColor;
					public equals(other: any): boolean;
					public getColorAccent(): number;
					public getColorPrimary(): number;
					public getColorPrimaryDark(): number;
					public hashCode(): number;
					public isLuminanceDark(): boolean;
					public isLuminanceDark(backgroundColorMatters: boolean): boolean;
					public isLuminanceLight(): boolean;
					public isLuminanceLight(backgroundColorMatters: boolean): boolean;
					public readFrom(): __javaRoots.orgRoot.autojs.autojs.theme.ThemeColor;
					public saveIn(): void;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace timing {
				export class IntentTask extends __javaRoots.orgRoot.autojs.autojs.storage.database.BaseModel {
					public static readonly TABLE: string;
					public readonly action: string;
					public readonly category: string;
					public readonly dataType: string;
					public readonly intentFilter: __javaRoots.androidRoot.content.IntentFilter;
					public readonly local: boolean;
					public readonly projectRoot: string;
					public readonly scriptPath: string;
					public readonly sourceKind: string;
					public constructor();
					public getAction(): string;
					public getCategory(): string;
					public getDataType(): string;
					public getIntentFilter(): __javaRoots.androidRoot.content.IntentFilter;
					public getProjectRoot(): string;
					public getScriptPath(): string;
					public getSourceKind(): string;
					public isLocal(): boolean;
					public setAction(action: string): void;
					public setCategory(category: string): void;
					public setDataType(dataType: string): void;
					public setLocal(local: boolean): void;
					public setProjectRoot(projectRoot: string): void;
					public setScriptPath(scriptPath: string): void;
					public setScriptPathAndCaptureContext(scriptPath: string): void;
					public setSourceKind(sourceKind: string): void;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace timing {
				export class TimedTask extends __javaRoots.orgRoot.autojs.autojs.storage.database.BaseModel {
					public static readonly END_MODE_COUNT: number;
					public static readonly END_MODE_FOREVER: number;
					public static readonly END_MODE_UNTIL_DATE: number;
					public static readonly FLAG_FRIDAY: number;
					public static readonly FLAG_MONDAY: number;
					public static readonly FLAG_SATURDAY: number;
					public static readonly FLAG_SUNDAY: number;
					public static readonly FLAG_THURSDAY: number;
					public static readonly FLAG_TUESDAY: number;
					public static readonly FLAG_WEDNESDAY: number;
					public static readonly REPEAT_MODE_COUNTDOWN: number;
					public static readonly REPEAT_MODE_DAILY: number;
					public static readonly REPEAT_MODE_DISPOSABLE: number;
					public static readonly REPEAT_MODE_MONTHLY: number;
					public static readonly REPEAT_MODE_UNKNOWN: number;
					public static readonly REPEAT_MODE_WEEKLY: number;
					public static readonly REPEAT_MODE_YEARLY: number;
					public static readonly TABLE: string;
					public readonly countdown: boolean;
					public readonly daily: boolean;
					public readonly dayOfMonth: number;
					public readonly delay: number;
					public readonly disposable: boolean;
					public readonly endMode: number;
					public readonly endValue: number;
					public readonly finishedTimes: number;
					public readonly interval: number;
					public readonly loopTimes: number;
					public readonly millis: number;
					public readonly monthOfYear: number;
					public readonly monthly: boolean;
					public readonly nextTime: number;
					public readonly projectRoot: string;
					public readonly repeatMode: number;
					public readonly scheduled: boolean;
					public readonly scriptPath: string;
					public readonly sourceKind: string;
					public readonly timeFlag: number;
					public readonly weekly: boolean;
					public readonly yearly: boolean;
					public constructor();
					public constructor(millis: number, timeFlag: number, scriptPath: string, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig);
					public captureLaunchContext(): void;
					public static countdownTask(delayMillis: number, scriptPath: string, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.timing.TimedTask;
					public createIntent(): __javaRoots.androidRoot.content.Intent;
					public createPendingIntent(context: __javaRoots.androidRoot.content.Context): __javaRoots.androidRoot.app.PendingIntent;
					public static dailyTask(time: __javaRoots.orgRoot.joda.time.LocalTime, scriptPath: string, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.timing.TimedTask;
					public static disposableTask(dateTime: __javaRoots.orgRoot.joda.time.LocalDateTime, scriptPath: string, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.timing.TimedTask;
					public getDayOfMonth(): number;
					public static getDayOfWeekTimeFlag(dayOfWeek: number): number;
					public static getDayOfWeekTimeFlag(context: __javaRoots.androidRoot.content.Context, dayOfWeek: number): number;
					public getDelay(): number;
					public getEndMode(): number;
					public getEndValue(): number;
					public getFinishedTimes(): number;
					public getInterval(): number;
					public getLoopTimes(): number;
					public getMillis(): number;
					public getMonthOfYear(): number;
					public getNextTime(): number;
					public getNextTime(context: __javaRoots.androidRoot.content.Context): number;
					public getProjectRoot(): string;
					public getRepeatMode(): number;
					public getScriptPath(): string;
					public getSourceKind(): string;
					public getTimeFlag(): number;
					public hasDayOfWeek(context: __javaRoots.androidRoot.content.Context, dayOfWeek: number): boolean;
					public isCountdown(): boolean;
					public isDaily(): boolean;
					public isDisposable(): boolean;
					public isMonthly(): boolean;
					public isScheduled(): boolean;
					public isWeekly(): boolean;
					public isYearly(): boolean;
					public static monthlyTask(time: __javaRoots.orgRoot.joda.time.LocalTime, dayOfMonth: number, scriptPath: string, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.timing.TimedTask;
					public notifyFinished(): void;
					public setDayOfMonth(dayOfMonth: number): void;
					public setDelay(delay: number): void;
					public setEndMode(endMode: number): void;
					public setEndValue(endValue: number): void;
					public setFinishedTimes(finishedTimes: number): void;
					public setInterval(interval: number): void;
					public setLoopTimes(loopTimes: number): void;
					public setMillis(millis: number): void;
					public setMonthOfYear(monthOfYear: number): void;
					public setProjectRoot(projectRoot: string): void;
					public setRepeatMode(repeatMode: number): void;
					public setScheduled(scheduled: boolean): void;
					public setScriptPath(scriptPath: string): void;
					public setSourceKind(sourceKind: string): void;
					public setTimeFlag(time: number): void;
					public toString(): string;
					public static weeklyTask(time: __javaRoots.orgRoot.joda.time.LocalTime, timeFlag: number, scriptPath: string, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.timing.TimedTask;
					public static yearlyTask(time: __javaRoots.orgRoot.joda.time.LocalTime, monthOfYear: number, dayOfMonth: number, scriptPath: string, config: __javaRoots.orgRoot.autojs.autojs.execution.ExecutionConfig): __javaRoots.orgRoot.autojs.autojs.timing.TimedTask;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace tool {
				export class Consumer<T> {
					public constructor(implementation: Consumer<T>);
					public constructor();
				}
				export interface Consumer<T> {
					accept(param0: T): void;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace tool {
				export class Func1<T, R> {
					public constructor(implementation: Func1<T, R>);
					public constructor();
				}
				export interface Func1<T, R> {
					call(param0: T): R;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace tool {
				export class Supplier<T> {
					public constructor(implementation: Supplier<T>);
					public constructor();
				}
				export interface Supplier<T> {
					get(): T;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace tool {
				export class UiHandler extends __javaRoots.androidRoot.os.Handler {
					public readonly applicationContext: __javaRoots.androidRoot.content.Context;
					public constructor(applicationContext: __javaRoots.androidRoot.content.Context);
					public getApplicationContext(): __javaRoots.androidRoot.content.Context;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace ui {
				export abstract class BaseActivity extends __javaRoots.androidxRoot.appcompat.app.AppCompatActivity {
					public readonly handleContentViewFromHorizontalNavigationBarAutomatically: boolean;
					public readonly handleNavigationBarContrastEnforcedAutomatically: boolean;
					public readonly handleStatusBarThemeColorAutomatically: boolean;
					public constructor();
					public getHandleContentViewFromHorizontalNavigationBarAutomatically(): boolean;
					public getHandleNavigationBarContrastEnforcedAutomatically(): boolean;
					public getHandleStatusBarThemeColorAutomatically(): boolean;
					public initThemeColors(): void;
					public setToolbarAsBack(titleRes: number): void;
					public setToolbarAsBack(title: string): void;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace ui {
				export namespace edit {
					export namespace editor {
						export namespace encoding {
							export class EditorEncodingDetection {
								public readonly charset: __javaRoots.javaRoot.nio.charset.Charset;
								public readonly confidence: number;
								public readonly hadBom: boolean;
								public readonly matches: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingMatch>;
								public readonly source: __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource;
								public constructor(charset: __javaRoots.javaRoot.nio.charset.Charset, confidence: number, hadBom: boolean, source: __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource, matches: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingMatch>);
								public component1(): __javaRoots.javaRoot.nio.charset.Charset;
								public component2(): number;
								public component3(): boolean;
								public component4(): __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource;
								public component5(): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingMatch>;
								public copy(charset: __javaRoots.javaRoot.nio.charset.Charset, confidence: number, hadBom: boolean, source: __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource, matches: __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingMatch>): __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetection;
								public equals(other: any): boolean;
								public getCharset(): __javaRoots.javaRoot.nio.charset.Charset;
								public getConfidence(): number;
								public getHadBom(): boolean;
								public getMatches(): __javaRoots.javaRoot.util.List<__javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingMatch>;
								public getSource(): __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource;
								public hashCode(): number;
								public toString(): string;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace ui {
				export namespace edit {
					export namespace editor {
						export namespace encoding {
							export class EditorEncodingDetectionSource extends __javaRoots.javaRoot.lang.Enum<__javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource> {
								public static readonly ASCII: __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource;
								public static readonly BOM: __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource;
								public static readonly FALLBACK: __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource;
								public static readonly LEGACY: __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource;
								public static readonly UTF8: __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource;
								public static readonly entries: __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource>;
								public static getEntries(): __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource>;
								public static valueOf(value: string): __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource;
								public static values(): __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetectionSource[];
								protected constructor();
								public static valueOf(...args: any[]): any;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace ui {
				export namespace edit {
					export namespace editor {
						export namespace encoding {
							export class EditorEncodingMatch {
								public readonly charset: __javaRoots.javaRoot.nio.charset.Charset;
								public readonly confidence: number;
								public constructor(charset: __javaRoots.javaRoot.nio.charset.Charset, confidence: number);
								public component1(): __javaRoots.javaRoot.nio.charset.Charset;
								public component2(): number;
								public copy(charset: __javaRoots.javaRoot.nio.charset.Charset, confidence: number): __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingMatch;
								public equals(other: any): boolean;
								public getCharset(): __javaRoots.javaRoot.nio.charset.Charset;
								public getConfidence(): number;
								public hashCode(): number;
								public toString(): string;
							}
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace ui {
				export namespace enhancedfloaty {
					export class FloatyService extends __javaRoots.androidRoot.app.Service {
						public initialSize: __javaRoots.orgRoot.opencv.core.Size;
						public static instance: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyService;
						public constructor();
						public static addWindow(window: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyWindow): void;
						public onBind(intent: __javaRoots.androidRoot.content.Intent): __javaRoots.androidRoot.os.IBinder;
						public onCreate(): void;
						public onDestroy(): void;
						public static removeWindow(window: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyWindow): void;
						public static setInitialMeasure(size: __javaRoots.orgRoot.opencv.core.Size): void;
						public static stopService(): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace ui {
				export namespace enhancedfloaty {
					export abstract class FloatyWindow {
						public initialPosition: __javaRoots.orgRoot.opencv.core.Point;
						public initialSize: __javaRoots.orgRoot.opencv.core.Size;
						public readonly floatyService: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyService;
						public readonly windowBridge: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.WindowBridge;
						public readonly windowLayoutParams: __javaRoots.androidRoot.view.WindowManager.LayoutParams;
						public readonly windowManager: __javaRoots.androidRoot.view.WindowManager;
						public readonly windowView: __javaRoots.androidRoot.view.View;
						public constructor();
						public close(): void;
						public getFloatyService(): __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyService;
						public getWindowBridge(): __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.WindowBridge;
						public getWindowLayoutParams(): __javaRoots.androidRoot.view.WindowManager.LayoutParams;
						public getWindowManager(): __javaRoots.androidRoot.view.WindowManager;
						public getWindowView(): __javaRoots.androidRoot.view.View;
						public onCreate(service: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyService, manager: __javaRoots.androidRoot.view.WindowManager): void;
						public onServiceDestroy(service: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyService): void;
						public setWindowLayoutParams(windowLayoutParams: __javaRoots.androidRoot.view.WindowManager.LayoutParams): void;
						public updateWindowLayoutParams(params: __javaRoots.androidRoot.view.WindowManager.LayoutParams): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace ui {
				export namespace enhancedfloaty {
					export class ResizableFloaty {
						public constructor(implementation: ResizableFloaty);
						public constructor();
					}
					export interface ResizableFloaty {
						getCloseButtonView(param0: __javaRoots.androidRoot.view.View): __javaRoots.androidRoot.widget.ImageView;
						getMoveCursorView(param0: __javaRoots.androidRoot.view.View): __javaRoots.androidRoot.widget.ImageView;
						getResizerView(param0: __javaRoots.androidRoot.view.View): __javaRoots.androidRoot.widget.ImageView;
						inflateView(param0: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyService, param1: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.ResizableFloatyWindow): __javaRoots.androidRoot.view.View;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace ui {
				export namespace enhancedfloaty {
					export class ResizableFloatyWindow extends __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyWindow {
						public readonly moveCursor: __javaRoots.androidRoot.view.View;
						public readonly resizer: __javaRoots.androidRoot.view.View;
						public readonly rootView: __javaRoots.androidRoot.view.View;
						public constructor(floaty: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.ResizableFloaty);
						public getMoveCursor(): __javaRoots.androidRoot.view.View;
						public getResizer(): __javaRoots.androidRoot.view.View;
						public getRootView(): __javaRoots.androidRoot.view.View;
						public onCreate(service: __javaRoots.orgRoot.autojs.autojs.ui.enhancedfloaty.FloatyService, manager: __javaRoots.androidRoot.view.WindowManager): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace ui {
				export namespace enhancedfloaty {
					export class WindowBridge {
						public constructor(implementation: WindowBridge);
						public constructor();
						public static readonly TAG: string;
					}
					export interface WindowBridge {
						readonly height: number;
						readonly screenHeight: number;
						readonly screenWidth: number;
						readonly width: number;
						readonly x: number;
						readonly y: number;
						getHeight(): number;
						getScreenHeight(): number;
						getScreenWidth(): number;
						getWidth(): number;
						getX(): number;
						getY(): number;
						updateMeasure(param0: number, param1: number): void;
						updatePosition(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace ui {
				export namespace log {
					export class LogActivity extends __javaRoots.orgRoot.autojs.autojs.ui.BaseActivity {
						public constructor();
						public export(fileName: string): void;
						public finish(): void;
						public static launch(context: __javaRoots.androidRoot.content.Context): void;
						public static launch(context: __javaRoots.androidRoot.content.Context, scriptName: string, scriptPath: string): void;
						public onCreateOptionsMenu(menu: __javaRoots.androidRoot.view.Menu): boolean;
						public onOptionsItemSelected(item: __javaRoots.androidRoot.view.MenuItem): boolean;
						public onPrepareOptionsMenu(menu: __javaRoots.androidRoot.view.Menu): boolean;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class AndroidUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.AndroidUtils;
					public static readonly appMainAbi: string;
					public static readonly appSupportedAbiList: __javaRoots.javaRoot.util.List<string>;
					public static readonly deviceFilteredAbiList: __javaRoots.javaRoot.util.List<string>;
					public static getAppMainAbi(): string;
					public static getAppSupportedAbiList(): __javaRoots.javaRoot.util.List<string>;
					public static getDeviceFilteredAbiList(): __javaRoots.javaRoot.util.List<string>;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class App extends __javaRoots.javaRoot.lang.Enum<__javaRoots.orgRoot.autojs.autojs.util.App> {
					public static readonly ACCUWEATHER: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly ADM: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly ALIPAY: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly AMAP: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly APPOPS: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly AQUAMAIL: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly AUTOJS: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly AUTOJS6: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly AUTOJSPRO: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly BAIDUMAP: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly BILIBILI: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly BREVENT: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly CALENDAR: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly CHROME: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly COOLAPK: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly DIANPING: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly DIGICAL: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly DRIVE: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly ES: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly EUDIC: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly EXCEL: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly FIREFOX: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly FX: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly GEOMETRICWEATHER: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly HTTPCANARY: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly IDLEFISH: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly IDMPLUS: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly JD: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly KEEP: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly KEEPNOTES: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly MAGISK: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly MEITUAN: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly MT: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly MXPRO: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly ONEDRIVE: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly PACKETCAPTURE: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly PARALLELSPACE: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly POWERPOINT: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly PULSARPLUS: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly PUREWEATHER: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly QQ: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly QQMUSIC: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly SDMAID: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly SHIZUKU: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly STOPAPP: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly TAOBAO: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly TRAINNOTE: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly TWITTER: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly UNIONPAY: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly VIA: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly VYSOR: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly WECHAT: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly WORD: __javaRoots.orgRoot.autojs.autojs.util.App;
					public static readonly ZHIHU: __javaRoots.orgRoot.autojs.autojs.util.App;
					public readonly alias: string;
					public readonly appName: string;
					public readonly appNameEn: string;
					public readonly appNameZh: string;
					public readonly installed: boolean;
					public readonly packageName: string;
					public static readonly entries: __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.util.App>;
					public ensureInstalled(): void;
					public getAlias(): string;
					public static getAppByAlias(alias: string): __javaRoots.orgRoot.autojs.autojs.util.App;
					public getAppName(): string;
					public getAppNameEn(): string;
					public getAppNameZh(): string;
					public static getEntries(): __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.util.App>;
					public getPackageName(): string;
					public isInstalled(): boolean;
					public launch(): boolean;
					public launchSettings(): boolean;
					public toString(): string;
					public uninstall(): void;
					public static valueOf(value: string): __javaRoots.orgRoot.autojs.autojs.util.App;
					public static values(): __javaRoots.orgRoot.autojs.autojs.util.App[];
					protected constructor();
					public static valueOf(...args: any[]): any;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class ArrayUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.ArrayUtils;
					public static box(array: number[]): __javaRoots.javaRoot.lang.Integer[];
					public static merge<T>(a1: T[], a2: T[]): T[];
					public symmetricDifference<T>($this$symmetricDifference: T[], other: T[]): __javaRoots.javaRoot.util.Set<T>;
					public static toStringArray(list: __javaRoots.javaRoot.util.List<any>): string[];
					public static unbox(array: __javaRoots.javaRoot.lang.Integer[]): number[];
					public unshiftWith<T>($this$unshiftWith: T[], thisObj: any): any[];
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class ClipboardUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.ClipboardUtils;
					public static getClip(context: __javaRoots.androidRoot.content.Context): string;
					public static getClipOrEmpty(context: __javaRoots.androidRoot.content.Context): string;
					public static setClip(context: __javaRoots.androidRoot.content.Context, text: string): void;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class ColorUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.ColorUtils;
					public static HSVToColor(alpha: number, hsv: number[]): number;
					public static HSVToColor(hsv: number[]): number;
					public static RGBToHSV(red: number, green: number, blue: number, hsv: number[]): void;
					public static adjustBrightness(color: number, factor: number): number;
					public static adjustColorForContrast(background: number, reference: number): number;
					public static adjustColorForContrast(background: number, reference: number, minimumContrast: number): number;
					public static adjustColorForContrast(background: number, reference: number, minimumContrast: number, alpha: number): number;
					public static adjustContrast(color: number, factor: number): number;
					public static adjustThemeColorForContrast(background: number): number;
					public static adjustThemeColorForContrast(background: number, minimumContrast: number): number;
					public static adjustThemeColorForContrast(background: number, minimumContrast: number, alpha: number): number;
					public static applyAlpha(color: number, alpha: number): number;
					public static argb(alpha: number, red: number, green: number, blue: number): number;
					public static colorToHSV(color: number, hsv: number[]): void;
					public static equals(c1: number, c2: number): boolean;
					public static equals(c1: number, c2: string): boolean;
					public static equals(c1: string, c2: number): boolean;
					public static equals(c1: string, c2: string): boolean;
					public getColorFromAttr(context: __javaRoots.androidRoot.content.Context, attr: number): number;
					public getColorFromAttr(context: __javaRoots.androidRoot.content.Context, attr: number, fallback: number): number;
					public static isLuminanceDark(color: number): boolean;
					public static isLuminanceLight(color: number): boolean;
					public static luminance(color: number): number;
					public static parse(context: __javaRoots.androidRoot.content.Context, color: string): number;
					public static parse(view: __javaRoots.androidRoot.view.View, color: string): number;
					public static parseColor(colorString: string): number;
					public static rgb(red: number, green: number, blue: number): number;
					public static roundToAlphaString($this$roundToAlphaString: number): string;
					public static roundToAlphaString($this$roundToAlphaString: number, scale: number): string;
					public static roundToAlphaString($this$roundToAlphaString: number, scale: number, keepTrailingZeroForFullAlpha: boolean): string;
					public static roundToHueString($this$roundToHueString: number): string;
					public static roundToHueString($this$roundToHueString: number, scale: number): string;
					public static roundToSaturationString($this$roundToSaturationString: number): string;
					public static roundToSaturationString($this$roundToSaturationString: number, scale: number): string;
					public static roundToValueString($this$roundToValueString: number): string;
					public static roundToValueString($this$roundToValueString: number, scale: number): string;
					public toColorStateList(view: __javaRoots.androidRoot.view.View, color: string): __javaRoots.androidRoot.content.res.ColorStateList;
					public toColorStateList(color: string): __javaRoots.androidRoot.content.res.ColorStateList;
					public static toFraction(value: __javaRoots.javaRoot.lang.Number): number;
					public static toFullHex(num: __javaRoots.javaRoot.lang.Number): string;
					public static toFullHex(colorString: string): string;
					public static toFullHex(themeColor: __javaRoots.orgRoot.autojs.autojs.theme.ThemeColor): string;
					public static toHex(num: __javaRoots.javaRoot.lang.Number): string;
					public static toHex(num: __javaRoots.javaRoot.lang.Number, resultLength: number): string;
					public static toHex(num: __javaRoots.javaRoot.lang.Number, alpha: string): string;
					public static toHex(num: __javaRoots.javaRoot.lang.Number, hasAlpha: boolean): string;
					public static toHex(colorString: string): string;
					public static toHex(colorString: string, resultLength: number): string;
					public static toHex(colorString: string, alpha: string): string;
					public static toHex(colorString: string, hasAlpha: boolean): string;
					public static toHex(themeColor: __javaRoots.orgRoot.autojs.autojs.theme.ThemeColor): string;
					public static toHex(themeColor: __javaRoots.orgRoot.autojs.autojs.theme.ThemeColor, resultLength: number): string;
					public static toHex(themeColor: __javaRoots.orgRoot.autojs.autojs.theme.ThemeColor, alpha: string): string;
					public static toHex(themeColor: __javaRoots.orgRoot.autojs.autojs.theme.ThemeColor, hasAlpha: boolean): string;
					public static toInt(num: __javaRoots.javaRoot.lang.Number): number;
					public static toInt(colorString: string): number;
					public static toInt(themeColor: __javaRoots.orgRoot.autojs.autojs.theme.ThemeColor): number;
					public static toString(color: number): string;
					public static toString(color: number, uppercase: boolean): string;
					public static toUint8(component: number): number;
					public static toUint8(component: number, takeNumOneAsPercent: boolean): number;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class ConsoleUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.ConsoleUtils;
					public static launch(): boolean;
					public static launch(context: __javaRoots.androidRoot.content.Context): boolean;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class DeviceUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.DeviceUtils;
					public static readonly serial: string;
					public static getDeviceSummary(context: __javaRoots.androidRoot.content.Context): string;
					public static getDeviceSummaryWithSimpleAppInfo(context: __javaRoots.androidRoot.content.Context): string;
					public static getIMEI(context: __javaRoots.androidRoot.content.Context): string;
					public static getSerial(): string;
					public static isCharging(context: __javaRoots.androidRoot.content.Context): boolean;
					public static isPowerSourceAC(context: __javaRoots.androidRoot.content.Context): boolean;
					public static isPowerSourceDock(context: __javaRoots.androidRoot.content.Context): boolean;
					public static isPowerSourceUSB(context: __javaRoots.androidRoot.content.Context): boolean;
					public static isPowerSourceWireless(context: __javaRoots.androidRoot.content.Context): boolean;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class DisplayUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.DisplayUtils;
					public static readonly displayMetrics: __javaRoots.androidRoot.util.DisplayMetrics;
					public static dpToPx(dp: number): number;
					public static getDisplayMetrics(): __javaRoots.androidRoot.util.DisplayMetrics;
					public static pxToDp(px: number): number;
					public static pxToSp(px: number): number;
					public static spToPx(sp: number): number;
					public static toCeilIntX(value: number): number;
					public static toCeilIntX(value: number, enableMinusOneMetric: boolean): number;
					public static toCeilIntY(value: number): number;
					public static toCeilIntY(value: number, enableMinusOneMetric: boolean): number;
					public static toFloorIntX(value: number): number;
					public static toFloorIntX(value: number, enableMinusOneMetric: boolean): number;
					public static toFloorIntY(value: number): number;
					public static toFloorIntY(value: number, enableMinusOneMetric: boolean): number;
					public static toRoundDoubleX(value: number): number;
					public static toRoundDoubleX(value: number, enableMinusOneMetric: boolean): number;
					public static toRoundDoubleY(value: number): number;
					public static toRoundDoubleY(value: number, enableMinusOneMetric: boolean): number;
					public static toRoundIntX(value: number): number;
					public static toRoundIntX(value: number, enableMinusOneMetric: boolean): number;
					public static toRoundIntY(value: number): number;
					public static toRoundIntY(value: number, enableMinusOneMetric: boolean): number;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class FileUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils;
					public static areSamePath(a: __javaRoots.javaRoot.io.File, b: __javaRoots.javaRoot.io.File): boolean;
					public static getExtension(file: __javaRoots.javaRoot.io.File): string;
					public static getExtension(fileName: string): string;
					public static isAudioCueSheetLike($this$isAudioCueSheetLike: __javaRoots.javaRoot.io.File): boolean;
					public static isAudioM3ULike($this$isAudioM3ULike: __javaRoots.javaRoot.io.File): boolean;
					public static isBinArchiveLike($this$isBinArchiveLike: __javaRoots.javaRoot.io.File): boolean;
					public static isBinDiscImageLike($this$isBinDiscImageLike: __javaRoots.javaRoot.io.File): boolean;
					public static isDiskImageCueSheetLike($this$isDiskImageCueSheetLike: __javaRoots.javaRoot.io.File): boolean;
					public static isEbuStlLike($this$isEbuStlLike: __javaRoots.javaRoot.io.File): boolean;
					public static isGenerateDataLike($this$isGenerateDataLike: __javaRoots.javaRoot.io.File): boolean;
					public static isLikelyApk(context: __javaRoots.androidRoot.content.Context, uri: __javaRoots.androidRoot.net.Uri): boolean;
					public static isLikelyApk(file: __javaRoots.javaRoot.io.File): boolean;
					public static isMacroFileLike($this$isMacroFileLike: __javaRoots.javaRoot.io.File): boolean;
					public static isMarkdownMDLike($this$isMarkdownMDLike: __javaRoots.javaRoot.io.File): boolean;
					public static isMatlabLike($this$isMatlabLike: __javaRoots.javaRoot.io.File): boolean;
					public static isModel3dsLike($this$isModel3dsLike: __javaRoots.javaRoot.io.File): boolean;
					public static isModelStlLike($this$isModelStlLike: __javaRoots.javaRoot.io.File): boolean;
					public static isMonkeyAudioLike($this$isMonkeyAudioLike: __javaRoots.javaRoot.io.File): boolean;
					public static isMpeg2TsLike($this$isMpeg2TsLike: __javaRoots.javaRoot.io.File): boolean;
					public static isNintendo3dsLike($this$isNintendo3dsLike: __javaRoots.javaRoot.io.File): boolean;
					public static isObjectiveCLike($this$isObjectiveCLike: __javaRoots.javaRoot.io.File): boolean;
					public static isProguardConfigLike($this$isProguardConfigLike: __javaRoots.javaRoot.io.File): boolean;
					public static isQmakeProjectLike($this$isQmakeProjectLike: __javaRoots.javaRoot.io.File): boolean;
					public static isSegaMDLike($this$isSegaMDLike: __javaRoots.javaRoot.io.File): boolean;
					public static isTypeScriptLike($this$isTypeScriptLike: __javaRoots.javaRoot.io.File): boolean;
					public static isVcdDataLike($this$isVcdDataLike: __javaRoots.javaRoot.io.File): boolean;
					public static isVideoM3ULike($this$isVideoM3ULike: __javaRoots.javaRoot.io.File): boolean;
					public static isWavefrontObjLike($this$isWavefrontObjLike: __javaRoots.javaRoot.io.File): boolean;
					public static probeApk(file: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.ApkProbeResult;
					public sanitizeUriCacheFileName$app(rawName: string): string;
					public toCacheFile($this$toCacheFile: __javaRoots.androidRoot.net.Uri, context: __javaRoots.androidRoot.content.Context, subDir: string, preferName: string, $completion: __javaRoots.kotlinRoot.coroutines.Continuation<any>): any;
					public withSameNameExtension($this$withSameNameExtension: __javaRoots.javaRoot.io.File, extensionName: string): boolean;
					protected constructor();
				}
				export namespace FileUtils {
					export class ApkProbeResult {
						public readonly hasAndroidManifest: boolean;
						public readonly hasClassesDex: boolean;
						public readonly hasResDir: boolean;
						public readonly hasResourcesArsc: boolean;
						public readonly likelyApk: boolean;
						public readonly zipReadable: boolean;
						public constructor(isZipReadable: boolean, hasAndroidManifest: boolean, hasClassesDex: boolean, hasResourcesArsc: boolean, hasResDir: boolean);
						public component1(): boolean;
						public component2(): boolean;
						public component3(): boolean;
						public component4(): boolean;
						public component5(): boolean;
						public copy(isZipReadable: boolean, hasAndroidManifest: boolean, hasClassesDex: boolean, hasResourcesArsc: boolean, hasResDir: boolean): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.ApkProbeResult;
						public equals(other: any): boolean;
						public getHasAndroidManifest(): boolean;
						public getHasClassesDex(): boolean;
						public getHasResDir(): boolean;
						public getHasResourcesArsc(): boolean;
						public hashCode(): number;
						public isLikelyApk(): boolean;
						public isZipReadable(): boolean;
						public toString(): string;
					}
					export class CandidateCriterion {
						public readonly criterion: any;
						public readonly weight: number;
						public constructor(criterion: any, weight: number);
						public component1(): any;
						public component2(): number;
						public copy(criterion: any, weight: number): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.CandidateCriterion;
						public equals(other: any): boolean;
						public getCriterion(): any;
						public getWeight(): number;
						public hashCode(): number;
						public toString(): string;
					}
					export class IconData {
						public readonly degree: __javaRoots.javaRoot.lang.Number;
						public readonly excludeFontPadding: boolean;
						public readonly iconName: string;
						public readonly size: __javaRoots.javaRoot.lang.Number;
						public readonly toBottom: __javaRoots.javaRoot.lang.Number;
						public readonly toEnd: __javaRoots.javaRoot.lang.Number;
						public readonly toStart: __javaRoots.javaRoot.lang.Number;
						public readonly toTop: __javaRoots.javaRoot.lang.Number;
						public constructor();
						public constructor(iconName: string, size: __javaRoots.javaRoot.lang.Number, toStart: __javaRoots.javaRoot.lang.Number, toTop: __javaRoots.javaRoot.lang.Number, toEnd: __javaRoots.javaRoot.lang.Number, toBottom: __javaRoots.javaRoot.lang.Number, degree: __javaRoots.javaRoot.lang.Number, excludeFontPadding: boolean);
						public component1(): string;
						public component2(): __javaRoots.javaRoot.lang.Number;
						public component3(): __javaRoots.javaRoot.lang.Number;
						public component4(): __javaRoots.javaRoot.lang.Number;
						public component5(): __javaRoots.javaRoot.lang.Number;
						public component6(): __javaRoots.javaRoot.lang.Number;
						public component7(): __javaRoots.javaRoot.lang.Number;
						public component8(): boolean;
						public copy(iconName: string, size: __javaRoots.javaRoot.lang.Number, toStart: __javaRoots.javaRoot.lang.Number, toTop: __javaRoots.javaRoot.lang.Number, toEnd: __javaRoots.javaRoot.lang.Number, toBottom: __javaRoots.javaRoot.lang.Number, degree: __javaRoots.javaRoot.lang.Number, excludeFontPadding: boolean): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.IconData;
						public equals(other: any): boolean;
						public getDegree(): __javaRoots.javaRoot.lang.Number;
						public getExcludeFontPadding(): boolean;
						public getIconName(): string;
						public getSize(): __javaRoots.javaRoot.lang.Number;
						public getToBottom(): __javaRoots.javaRoot.lang.Number;
						public getToEnd(): __javaRoots.javaRoot.lang.Number;
						public getToStart(): __javaRoots.javaRoot.lang.Number;
						public getToTop(): __javaRoots.javaRoot.lang.Number;
						public hashCode(): number;
						public toString(): string;
					}
					export class PreviewType extends __javaRoots.javaRoot.lang.Enum<__javaRoots.orgRoot.autojs.autojs.util.FileUtils.PreviewType> {
						public static readonly HTML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.PreviewType;
						public static readonly MARKDOWN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.PreviewType;
						public static readonly entries: __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.util.FileUtils.PreviewType>;
						public static getEntries(): __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.util.FileUtils.PreviewType>;
						public static valueOf(value: string): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.PreviewType;
						public static values(): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.PreviewType[];
						protected constructor();
						public static valueOf(...args: any[]): any;
					}
					export class TYPE extends __javaRoots.javaRoot.lang.Enum<__javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE> {
						public static readonly AAB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AAC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AAI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AAR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AC3: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ACB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ACE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ACIS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ACIS_BINARY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ADML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ADMX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AES: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AFC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AFM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AGO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AHK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AIF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AIFC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AIFF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AIP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AIT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ALAC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ALZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AMR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ANI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AOB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly APE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly APK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly APKM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly APKS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly APKZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly APK_WITH_NUMBER: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly APL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly APP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly APPLE_SCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AQT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ARC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ARJ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ARW: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ASC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ASCX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ASD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ASF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ASM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ASP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ASPX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ASS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ASX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AU: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AU3: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AUDIO_CUE_SHEET: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AUTO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AVI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AVIF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AVS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AWB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AWK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AXF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly AXX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BAC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BACKUP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BAK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BAS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BATCH: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BDF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BDMV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BH: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BIK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BINARY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BIN_ARCHIVE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BIN_DISK_IMAGE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BKCFLAC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BKCMP3: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BLEND: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BMP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BPL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BPW: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BREP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BROWSER: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BTM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BUP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BWF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly BZ2: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly C: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly C4D: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CAB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CAD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CAF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CAL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CAT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CCD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CDA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CDF_MS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CDT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CER: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CFG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CHK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CHM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CIA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CLASS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CLASSPATH: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CLPI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CMAKE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly COB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly COBOL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly COFFEE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly COM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly COMMAND: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly COMMONJS_JAVASCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly COMMONJS_TYPESCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly COMPOSITEFONT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CONF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CONFIG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly COPYRIGHT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CPIO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CPL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CPP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CR2: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CRL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CRT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CRW: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CSO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CSS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CSV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CUR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CVR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CXI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly CXX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly C_SHARP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DAE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DART: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DAT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DAV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DB_JOURNAL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DB_SHM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DB_WAL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DDS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DEB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DER: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DEX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DFF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DIAGPKG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DIB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DIC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DIFF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DIRECTORY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DISK_IMAGE_CUE_SHEET: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DIVX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DIZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DKS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DLL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DLM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DMSKM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DNG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DOC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DOCM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DOCX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DOT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DOTM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DOTX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DPG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DPL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DQY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DRV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DSF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DTD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DTS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DTSHD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DTSMA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DTSWAV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DVR_MS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DWG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly DXF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EAC3: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EBU: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EEA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EGG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EIGHT_SVX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EJS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ELF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ELIXIR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ELM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EMBEDDED_RUBY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EMF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EPS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ERLANG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ESM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EVB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EVO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EXE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly EXP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly F4V: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FBX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FCD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FFS_DB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FIG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FLA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FLAC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FLV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FON: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FORTRAN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FORTRAN_90: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FORTRAN_95: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FPL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FPP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FREEDESKTOP_DESKTOP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FREEDESKTOP_DIRECTORY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FRM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FTF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly FXG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly F_SHARP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly F_SHARP_EXT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GBA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GBC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GDL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GEN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GENERATE_DATA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GIF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GIFV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GPD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GQL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GRADLE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GRADLE_KOTLIN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GRADLE_WRAPPER: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GRAPH_QL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GROOVY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GXK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly GZIP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly H: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly H1C: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly H1K: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly H1S: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly H264: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HASKELL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HDMOV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HEIC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HEIF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HEX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HIF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HLP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HMTML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HPGL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HPP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HTA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HTACCESS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HTM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HTML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HXA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HXC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HXK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HXQ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HXS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly HXT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ICAL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ICALENDAR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ICC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ICM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ICO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ICS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IDENTITY_EXECUTABLE: number;
						public static readonly IDENTITY_EXTERNAL_EDITABLE: number;
						public static readonly IDENTITY_INSTALLABLE: number;
						public static readonly IDENTITY_MEDIA_MENU: number;
						public static readonly IDENTITY_MEDIA_PLAYABLE: number;
						public static readonly IDENTITY_PREVIEWABLE: number;
						public static readonly IDENTITY_TEXT_EDITABLE: number;
						public static readonly IDL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IDX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IFB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IFC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IFF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IFO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IGES: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IGS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ILBM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IMD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IME: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IMG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly INC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly INF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly INI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IPA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IPF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IPSW: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IQY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ISO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ISS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ISZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly IVF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly J2K: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JAD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JAR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JAVA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JAVASCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JAVA_KEYSTORE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JFIF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JIF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JNT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JP2: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JPC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JPE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JPEG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JPF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JPG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JPX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JRXML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JSON: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JSP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JSS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JTP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JULIA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly JXL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly K3G: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly KAR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly KDB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly KDBX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly KERNEL_OBJECT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly KEY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly KGG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly KGM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly KGMA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly KODE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly KOTLIN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly KOTLIN_SCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LBM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LCD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LCK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LESS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LEX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LHA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LIB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LIC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LICENSE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LMP4: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LNG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LNK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LOG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LOG_WITH_NUM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LRC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LTX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LUA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LXA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LXO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LZ4: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LZH: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly LZMA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M1A: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M1V: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M2A: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M2P: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M2T: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M2TS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M2V: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M3U8_AUDIO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M3U8_VIDEO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M3U_AUDIO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M3U_VIDEO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M4A: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M4B: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M4P: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M4R: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly M4V: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MAC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MACRO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MAK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MAKE_FILE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MAN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MANIFEST: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MARKDOWN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MARKDOWN_LONG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MASTER: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MATLAB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MAX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MBM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MCR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MDB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MDF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MDOWN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MDS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MDTEXT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MDTXT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MDWN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MFL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MFLAC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MFLAC0: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MGG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MGG1: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MHT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MIB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MID: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MIDI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MIDP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MK3D: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MKA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MKD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MKDN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MKS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MKV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MLP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MMM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MO3: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MOD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MODULE_JAVASCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MODULE_TYPESCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MOF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MOV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MP1: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MP2: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MP2V: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MP3: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MP4: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MP4V: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPCPL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPEG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPEG2_TS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPEG4: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPG4: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPGA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPLS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPV2: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MPV4: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MP_PLUS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MQV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MRC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MRW: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MSC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MSG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MSI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MSP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MST: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MTL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MTM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MTS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MUI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MUM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MVP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MXF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MXMF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MYD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly MYI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly N64: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NCM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NDS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NEF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NEO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NES: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NEW_LISP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NFEX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NFO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NGR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NINTENDO_3DS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NINTENDO_3DZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NLS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NODE_BRAIN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NODE_JAVASCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NRG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NRO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NRT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NRW: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NSIS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NSP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NSR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NSV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NSZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly NT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OBB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OBJ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OBJECT_C: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OBJECT_CPP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OCX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ODC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ODP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ODS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ODT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OFR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OFS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OGA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OGD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OGG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OGM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OGX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OLB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OLE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ONE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ONNX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OPUS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ORF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OTA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OTF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OTS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OVR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly OXPS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly P12: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly P7B: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly P7C: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PAN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PARASOLID_BINARY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PARASOLID_TEXT_TRANSMITTAL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PASCAL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PATCH: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PBM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PBP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PCD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PCM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PCX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PDB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PDF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PEA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PEF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PEM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PERL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PERL_MODULE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PERL_POD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PFB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PFM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PFX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PGM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PHP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PHTML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PIC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PJS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PKG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PLIST: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PLS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PLT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PMA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PNF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PNG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly POM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly POT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly POTM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly POTX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly POWERSHELL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly POWERSHELL_DATA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly POWERSHELL_SCRIPT_MODULE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PPA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PPAM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PPD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PPK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PPM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PPS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PPSM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PPSX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PPTM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PPTX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PRN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PROGUARD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PROJECT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PROPERTIES: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PRX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PS1XML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PSB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PSD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PST: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PTXML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PUB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PWZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PYC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly PYTHON: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly QMAKE_PROJECT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly QMC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly QMC0: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly QMC2: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly QMC3: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly QMCFLAC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly QMCOGG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly QT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly QUARTO_MARKDOWN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly R: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RACKET: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RAF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RAM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RAR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RAS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RDP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly REACT_JAVASCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly REACT_TYPESCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly README: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly REBOL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly REC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly REG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RESX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RF64: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RLE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RMI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RMVB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ROM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RPM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RSC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RSP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RTF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RUBY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RUST: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly RW2: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly R_MARKDOWN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly S2K: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly S3M: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SAMI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SASS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SAV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SBT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SCC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SCP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SCR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SCSS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SDB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SDI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SDP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SEGA_MD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SEP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SEVEN_ZIP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SFC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SFO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SFX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SGF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SHELL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SHTM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SHTML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SIG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SIS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SISX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SKM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SLIDE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SLK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SMALI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SMC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SMD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SMI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SMK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SND: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SNES: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SOLID_WORKS_PART: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SON: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SPMID: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SPX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SQL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SQLITE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SRF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SRT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SSA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SSH: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SSIF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SST: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SSTS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly STEP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly STEREOLITHOGRAPHY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly STL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly STP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SUB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SVG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SVX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SWF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SWIFT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SXC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SYS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SYSTEM_VERILOG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly SYSTEM_VERILOG_HEADER: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TAK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TAR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TARGETS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TAT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TAZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TBZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TBZ2: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TCL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TEX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TEXT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TGA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TGZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly THEME: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly THREE_DS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly THREE_GP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly THREE_GPP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly THREE_GP_TWO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly THREE_G_TWO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly THUMB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TIF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TIFF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TKM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TLB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TLZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TMP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TNT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TPR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TRP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TRUEHD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TSV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TTA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TTF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TTXT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TWO_SIX_FOUR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TXZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TYPESCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TYPESCRIPT_COMMONJS_DECLARATION: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TYPESCRIPT_DECLARATION: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TYPESCRIPT_MODULE_DECLARATION: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly TYPE_NAME_PREFIX_REGEX: string;
						public static readonly TZST: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly UFO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly UMD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly UMX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly UNKNOWN: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly UPDATER_SCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly UPDATE_BINARY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly URL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly UU: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly UUE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VB_SCRIPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VCALENDAR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VCD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VCF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VCS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VDF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VDX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VELOCITY: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VERILOG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VERILOG_HEADER: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VERILOG_TEST_BENCH: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VERSION: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VFT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VFX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VIDEO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VIM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VKT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VOB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VOC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VOLT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VOX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VRG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VSD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VSF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VSS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VST: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VSX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VTX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly VUE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly W64: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WAR: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WAV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WAVE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WAVEFRONT_OBJ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WAX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WBK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WBMB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WEBLOC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WEBM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WEBP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WER: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WIZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WJF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WMA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WMF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WMP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WMV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WPL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WPS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WSC: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WSDL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WSF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WTV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WTX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WV: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WVX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WXML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly WXSS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XAPK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XBAP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XBM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XCI: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XHT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XHTML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLAM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLK: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLSHTML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLSM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLSX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLTHTML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLTM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLTX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLW: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XLXB: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XMF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XPM: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XPS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XPT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XRM_MS: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XSD: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XSL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XSLT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XSPF: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XVID: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XXE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly XZ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly YAML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly YML: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly Z: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly Z64: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ZBP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ZDA: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ZDCT: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ZEG: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ZERO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ZERO_ZERO_ONE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ZIP: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ZIPX: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ZPAQ: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ZST: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static readonly ZTL: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public readonly extension: string;
						public readonly extensionWithDot: string;
						public readonly icon: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE.Icon;
						public readonly identity: number;
						public readonly previewType: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.PreviewType;
						public readonly audioPlayable: boolean;
						public readonly candidateCriteria: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.CandidateCriterion[];
						public readonly executable: boolean;
						public readonly externalEditable: boolean;
						public readonly imageFile: boolean;
						public readonly imageViewable: boolean;
						public readonly installable: boolean;
						public readonly mediaMenu: boolean;
						public readonly mediaPlayable: boolean;
						public readonly previewable: boolean;
						public readonly priority: number;
						public readonly textEditable: boolean;
						public readonly typeData: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TypeData;
						public readonly typeName: string;
						public readonly videoFile: boolean;
						public readonly videoPlayable: boolean;
						public readonly viewerType: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.ViewerType;
						public static readonly entries: __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE>;
						public static determineBy(file: __javaRoots.javaRoot.io.File): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public getCandidateCriteria(): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.CandidateCriterion[];
						public static getEntries(): __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE>;
						public getPriority(): number;
						public getTypeData(): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TypeData;
						public getTypeName(): string;
						public getViewerType(): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.ViewerType;
						public isAudioPlayable(): boolean;
						public isExecutable(): boolean;
						public isExternalEditable(): boolean;
						public isImageFile(): boolean;
						public isImageViewable(): boolean;
						public isInstallable(): boolean;
						public isMediaMenu(): boolean;
						public isMediaPlayable(): boolean;
						public isPreviewable(): boolean;
						public isTextEditable(): boolean;
						public isVideoFile(): boolean;
						public isVideoPlayable(): boolean;
						public static valueOf(value: string): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE;
						public static values(): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE[];
						protected constructor();
						public static valueOf(...args: any[]): any;
					}
					export class TypeData {
						public readonly identity: number;
						public readonly previewType: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.PreviewType;
						public readonly iconData: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.IconData;
						public constructor(iconData: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.IconData, identity: number, previewType: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.PreviewType);
						public component1(): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.IconData;
						public component2(): number;
						public component3(): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.PreviewType;
						public copy(iconData: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.IconData, identity: number, previewType: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.PreviewType): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TypeData;
						public equals(other: any): boolean;
						public getIconData(): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.IconData;
						public hashCode(): number;
						public toString(): string;
					}
					export class ViewerType extends __javaRoots.javaRoot.lang.Enum<__javaRoots.orgRoot.autojs.autojs.util.FileUtils.ViewerType> {
						public static readonly AUDIO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.ViewerType;
						public static readonly IMAGE: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.ViewerType;
						public static readonly VIDEO: __javaRoots.orgRoot.autojs.autojs.util.FileUtils.ViewerType;
						public static readonly entries: __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.util.FileUtils.ViewerType>;
						public static getEntries(): __javaRoots.kotlinRoot.enums.EnumEntries<__javaRoots.orgRoot.autojs.autojs.util.FileUtils.ViewerType>;
						public static valueOf(value: string): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.ViewerType;
						public static values(): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.ViewerType[];
						protected constructor();
						public static valueOf(...args: any[]): any;
					}
					export namespace TYPE {
						export class Icon {
							public readonly includeFontPadding: __javaRoots.javaRoot.lang.Boolean;
							public readonly rotation: __javaRoots.javaRoot.lang.Number;
							public readonly text: string;
							public readonly textPadding: __javaRoots.javaRoot.lang.Number[];
							public readonly textSize: __javaRoots.javaRoot.lang.Number;
							public constructor(text: string, textSize: __javaRoots.javaRoot.lang.Number, textPadding: __javaRoots.javaRoot.lang.Number[], rotation: __javaRoots.javaRoot.lang.Number, includeFontPadding: __javaRoots.javaRoot.lang.Boolean);
							public component1(): string;
							public component2(): __javaRoots.javaRoot.lang.Number;
							public component3(): __javaRoots.javaRoot.lang.Number[];
							public component4(): __javaRoots.javaRoot.lang.Number;
							public component5(): __javaRoots.javaRoot.lang.Boolean;
							public copy(text: string, textSize: __javaRoots.javaRoot.lang.Number, textPadding: __javaRoots.javaRoot.lang.Number[], rotation: __javaRoots.javaRoot.lang.Number, includeFontPadding: __javaRoots.javaRoot.lang.Boolean): __javaRoots.orgRoot.autojs.autojs.util.FileUtils.TYPE.Icon;
							public equals(other: any): boolean;
							public hashCode(): number;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class IntentUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.IntentUtils;
					public static browse(context: __javaRoots.androidRoot.content.Context, link: string): boolean;
					public static browse(context: __javaRoots.androidRoot.content.Context, link: string, exceptionHolder: __javaRoots.orgRoot.autojs.autojs.util.IntentUtils.ExceptionHolder): boolean;
					public chatWithQQ(context: __javaRoots.androidRoot.content.Context, qq: string): boolean;
					public static editFile(context: __javaRoots.androidRoot.content.Context, path: string): boolean;
					public static editFile(context: __javaRoots.androidRoot.content.Context, path: string, fileProviderAuthority: string): boolean;
					public static editFile(context: __javaRoots.androidRoot.content.Context, path: string, fileProviderAuthority: string, exceptionHolder: __javaRoots.orgRoot.autojs.autojs.util.IntentUtils.ExceptionHolder): boolean;
					public static getFileName(context: __javaRoots.androidRoot.content.Context, uri: __javaRoots.androidRoot.net.Uri): string;
					public static getUriOfFile(context: __javaRoots.androidRoot.content.Context, path: string): __javaRoots.androidRoot.net.Uri;
					public static getUriOfFile(context: __javaRoots.androidRoot.content.Context, path: string, fileProviderAuthority: string): __javaRoots.androidRoot.net.Uri;
					/** @deprecated */
					public goToAppDetailSettings(context: __javaRoots.androidRoot.content.Context): boolean;
					/** @deprecated */
					public goToAppDetailSettings(context: __javaRoots.androidRoot.content.Context, packageName: string): boolean;
					public static installApk(context: __javaRoots.androidRoot.content.Context, path: string): boolean;
					public static installApk(context: __javaRoots.androidRoot.content.Context, path: string, fileProviderAuthority: string): boolean;
					public static installApk(context: __javaRoots.androidRoot.content.Context, path: string, fileProviderAuthority: string, exceptionHolder: __javaRoots.orgRoot.autojs.autojs.util.IntentUtils.ExceptionHolder): boolean;
					public joinQQGroup(context: __javaRoots.androidRoot.content.Context, key: string): boolean;
					public static launchAppDetailsSettings(context: __javaRoots.androidRoot.content.Context): boolean;
					public static launchAppDetailsSettings(context: __javaRoots.androidRoot.content.Context, packageName: string): boolean;
					public static launchDeveloperOptions(context: __javaRoots.androidRoot.content.Context): boolean;
					public static launchDeveloperOptionsOrSettings(context: __javaRoots.androidRoot.content.Context): void;
					public requestAppUsagePermission(context: __javaRoots.androidRoot.content.Context): boolean;
					public static sendFile(context: __javaRoots.androidRoot.content.Context, path: string): boolean;
					public static sendFile(context: __javaRoots.androidRoot.content.Context, path: string, fileProviderAuthority: string): boolean;
					public static sendFile(context: __javaRoots.androidRoot.content.Context, path: string, fileProviderAuthority: string, exceptionHolder: __javaRoots.orgRoot.autojs.autojs.util.IntentUtils.ExceptionHolder): boolean;
					public sendMailTo(context: __javaRoots.androidRoot.content.Context, sendTo: string): boolean;
					public sendMailTo(context: __javaRoots.androidRoot.content.Context, sendTo: string, title: string): boolean;
					public sendMailTo(context: __javaRoots.androidRoot.content.Context, sendTo: string, title: string, content: string): boolean;
					public static shareText(context: __javaRoots.androidRoot.content.Context, text: string): boolean;
					public static start($this$start: __javaRoots.androidRoot.content.Intent, context: __javaRoots.androidRoot.content.Context): void;
					public static startSafely($this$startSafely: __javaRoots.androidRoot.content.Intent, context: __javaRoots.androidRoot.content.Context): boolean;
					public static startSafely($this$startSafely: __javaRoots.androidRoot.content.Intent, context: __javaRoots.androidRoot.content.Context, printStackTrace: boolean): boolean;
					public static startSafely($this$startSafely: __javaRoots.androidRoot.content.Intent, context: __javaRoots.androidRoot.content.Context, printStackTrace: boolean, onFailure: __javaRoots.kotlinRoot.jvm.functions.Function1<any, __javaRoots.kotlinRoot.Unit>): boolean;
					public static startSafelyWithOptions($this$startSafelyWithOptions: __javaRoots.androidRoot.content.Intent, context: __javaRoots.androidRoot.content.Context): boolean;
					public static startSafelyWithOptions($this$startSafelyWithOptions: __javaRoots.androidRoot.content.Intent, context: __javaRoots.androidRoot.content.Context, options: __javaRoots.androidRoot.os.Bundle): boolean;
					public static startSafelyWithOptions($this$startSafelyWithOptions: __javaRoots.androidRoot.content.Intent, context: __javaRoots.androidRoot.content.Context, options: __javaRoots.androidRoot.os.Bundle, printStackTrace: boolean): boolean;
					public static startSafelyWithOptions($this$startSafelyWithOptions: __javaRoots.androidRoot.content.Intent, context: __javaRoots.androidRoot.content.Context, options: __javaRoots.androidRoot.os.Bundle, printStackTrace: boolean, onFailure: __javaRoots.kotlinRoot.jvm.functions.Function1<any, __javaRoots.kotlinRoot.Unit>): boolean;
					public static startWithOptions($this$startWithOptions: __javaRoots.androidRoot.content.Intent, context: __javaRoots.androidRoot.content.Context, options: __javaRoots.androidRoot.os.Bundle): void;
					public static viewFile(context: __javaRoots.androidRoot.content.Context, uri: __javaRoots.androidRoot.net.Uri): boolean;
					public static viewFile(context: __javaRoots.androidRoot.content.Context, uri: __javaRoots.androidRoot.net.Uri, mimeType: string): boolean;
					public static viewFile(context: __javaRoots.androidRoot.content.Context, uri: __javaRoots.androidRoot.net.Uri, mimeType: string, fileProviderAuthority: string): boolean;
					public static viewFile(context: __javaRoots.androidRoot.content.Context, uri: __javaRoots.androidRoot.net.Uri, mimeType: string, fileProviderAuthority: string, exceptionHolder: __javaRoots.orgRoot.autojs.autojs.util.IntentUtils.ExceptionHolder): boolean;
					public static viewFile(context: __javaRoots.androidRoot.content.Context, path: string, fileProviderAuthority: string): boolean;
					public static viewFile(context: __javaRoots.androidRoot.content.Context, path: string, mimeType: string, fileProviderAuthority: string, exceptionHolder: __javaRoots.orgRoot.autojs.autojs.util.IntentUtils.ExceptionHolder): boolean;
					protected constructor();
				}
				export namespace IntentUtils {
					export class ExceptionHolder {
						public constructor(implementation: ExceptionHolder);
						public constructor();
					}
					export interface ExceptionHolder {
						show(param0: number): void;
						show(param0: string): void;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class JavaUtils {
					public constructor();
					public static getClass(clazz: __javaRoots.javaRoot.lang.Class<any>): __javaRoots.javaRoot.lang.Class<any>;
					public static getClass(o: any): __javaRoots.javaRoot.lang.Class<any>;
					public static getClassName(Clazz: __javaRoots.javaRoot.lang.Class<any>): string;
					public static getClassName(o: any): string;
					public static reflect(clazz: __javaRoots.javaRoot.lang.Class<any>, name: string): any;
					public static reflect(clazz: __javaRoots.javaRoot.lang.Class<any>, name: string, obj: any): any;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class NetworkUtils {
					public static readonly DEFAULT_IP_ADDRESS: string;
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.NetworkUtils;
					public static readonly activeNetworkMetered: boolean;
					public static readonly connectedOrConnecting: boolean;
					public static readonly gatewayAddress: string;
					public static readonly ipAddress: string;
					public static readonly ipv6Address: string;
					public static readonly wifiAvailable: boolean;
					public static bytesToHex(bytes: number[]): string;
					public static getGatewayAddress(): string;
					public static getIpAddress(): string;
					public static getIpAddress(useIPv4: boolean): string;
					public static getIpv6Address(): string;
					public static getMacAddress(interfaceName: string): string;
					public static getUTF8Bytes(str: string): number[];
					public static isActiveNetworkMetered(): boolean;
					public static isConnectedOrConnecting(): boolean;
					public static isWifiAvailable(): boolean;
					public static loadFileAsString(filename: string): string;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class NotificationUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.NotificationUtils;
					public static readonly defaultContent: string;
					public static readonly defaultTitle: string;
					public static readonly defaultNotificationId: number;
					public static readonly enabled: boolean;
					public static readonly simpleBuilder: __javaRoots.androidxRoot.core.app.NotificationCompat.Builder;
					public static createAppNotificationIntent(context: __javaRoots.androidRoot.content.Context): __javaRoots.androidRoot.content.Intent;
					public static createAppNotificationIntent(context: __javaRoots.androidRoot.content.Context, pkg: string): __javaRoots.androidRoot.content.Intent;
					public static createChannel(id: string, name: string, description: string, importance: __javaRoots.javaRoot.lang.Integer, enableVibration: __javaRoots.javaRoot.lang.Boolean, vibrationPattern: number[], enableLights: __javaRoots.javaRoot.lang.Boolean, lightColor: __javaRoots.javaRoot.lang.Integer, lockscreenVisibility: __javaRoots.javaRoot.lang.Integer): void;
					public static ensureEnabled(): void;
					public static getDefaultNotificationId(): number;
					public static getSimpleBuilder(): __javaRoots.androidxRoot.core.app.NotificationCompat.Builder;
					public static isEnabled(): boolean;
					public static launchChannelSettings(context: __javaRoots.androidRoot.content.Context, clazz: __javaRoots.javaRoot.lang.Class<any>): void;
					public static launchSettings(): void;
					public static notice(builder: __javaRoots.androidxRoot.core.app.NotificationCompat.Builder, notificationId: __javaRoots.javaRoot.lang.Integer, autoCancel: __javaRoots.javaRoot.lang.Boolean, isSilent: __javaRoots.javaRoot.lang.Boolean, intent: __javaRoots.androidRoot.content.Intent, priority: __javaRoots.javaRoot.lang.Integer): void;
					public static notice(channelId: string, title: string, content: string, bigContent: string, notificationId: __javaRoots.javaRoot.lang.Integer, autoCancel: __javaRoots.javaRoot.lang.Boolean, isSilent: __javaRoots.javaRoot.lang.Boolean, intent: __javaRoots.androidRoot.content.Intent, priority: __javaRoots.javaRoot.lang.Integer): void;
					public static requestPermission(launcher: __javaRoots.androidxRoot.activity.result.ActivityResultLauncher<string[]>): void;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class RhinoUtils {
					public static readonly DEFAULT_CALLER: number;
					public static readonly DEFAULT_CONSTRUCTOR: number;
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.RhinoUtils;
					public static readonly MAX_SAFE_INT_IEEE754_D: number;
					public static readonly MAX_SAFE_INT_IEEE754_L: number;
					public static readonly MIN_SAFE_INT_IEEE754_D: number;
					public static readonly MIN_SAFE_INT_IEEE754_L: number;
					public static readonly NOT_CALLABLE: number;
					public static readonly NOT_CONSTRUCTABLE: number;
					public readonly MAX_SAFE_INT_IEEE754_BD: __javaRoots.javaRoot.math.BigDecimal;
					public readonly MAX_SAFE_INT_IEEE754_BI: __javaRoots.javaRoot.math.BigInteger;
					public readonly MIN_SAFE_INT_IEEE754_BD: __javaRoots.javaRoot.math.BigDecimal;
					public readonly MIN_SAFE_INT_IEEE754_BI: __javaRoots.javaRoot.math.BigInteger;
					public static readonly UNDEFINED: __javaRoots.orgRoot.mozilla.javascript.Undefined;
					public static readonly arrayPrototype: __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public static readonly backgroundThread: boolean;
					public static readonly functionPrototype: __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public static readonly mainThread: boolean;
					public static readonly objectPrototype: __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public static readonly standardObjects: __javaRoots.orgRoot.mozilla.javascript.TopLevel;
					public static readonly uiThread: boolean;
					public static callFunction(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, func: __javaRoots.orgRoot.mozilla.javascript.Callable, scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, args: any[]): any;
					public static callFunction(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, func: __javaRoots.orgRoot.mozilla.javascript.Callable, scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, args: any[]): any;
					public static callFunction(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, func: __javaRoots.orgRoot.mozilla.javascript.Callable, scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, args: any[]): any;
					public static callFunction(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, func: __javaRoots.orgRoot.mozilla.javascript.Callable, scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, args: any[]): any;
					public static callFunction(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, func: __javaRoots.orgRoot.mozilla.javascript.Callable, paramsToFunction: any[]): any;
					public static callFunction(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, obj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, name: string, paramsToFunction: any[]): any;
					public static callFunction(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, name: string, paramsToFunction: any[]): any;
					public static callFunction(func: __javaRoots.orgRoot.mozilla.javascript.Callable, scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, args: any[]): any;
					public static callFunction(func: __javaRoots.orgRoot.mozilla.javascript.Callable, scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, args: any[]): any;
					public static callFunction(func: __javaRoots.orgRoot.mozilla.javascript.Callable, scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, args: any[]): any;
					public static callFunction(func: __javaRoots.orgRoot.mozilla.javascript.Callable, scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, args: any[]): any;
					public static callFunction(func: __javaRoots.orgRoot.mozilla.javascript.Callable, paramsToFunction: any[]): any;
					public static callFunction(obj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, name: string, paramsToFunction: any[]): any;
					public static callPrototypeFunction(className: string, funcName: string, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable): any;
					public static callPrototypeFunction(className: string, funcName: string, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, scope: __javaRoots.orgRoot.mozilla.javascript.VarScope): any;
					public static callPrototypeFunction(className: string, funcName: string, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, args: any[]): any;
					public static callPrototypeFunction(className: string, funcName: string, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, args: any[]): any;
					public static callPrototypeFunction(builtins: __javaRoots.orgRoot.mozilla.javascript.TopLevel.Builtins, funcName: string, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable): any;
					public static callPrototypeFunction(builtins: __javaRoots.orgRoot.mozilla.javascript.TopLevel.Builtins, funcName: string, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, scope: __javaRoots.orgRoot.mozilla.javascript.VarScope): any;
					public static callPrototypeFunction(builtins: __javaRoots.orgRoot.mozilla.javascript.TopLevel.Builtins, funcName: string, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, args: any[]): any;
					public static callPrototypeFunction(builtins: __javaRoots.orgRoot.mozilla.javascript.TopLevel.Builtins, funcName: string, thisObj: __javaRoots.orgRoot.mozilla.javascript.Scriptable, args: any[]): any;
					public static callToStringFunction(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, o: __javaRoots.orgRoot.mozilla.javascript.Scriptable): string;
					public static callToStringFunction(o: __javaRoots.orgRoot.mozilla.javascript.Scriptable): string;
					public static coerceArray(o: any): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static coerceArray(o: any, def: __javaRoots.orgRoot.mozilla.javascript.NativeArray): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static coerceBoolean(o: any): boolean;
					public static coerceBoolean(o: any, def: __javaRoots.javaRoot.lang.Boolean): boolean;
					public static coerceCallable(o: any): __javaRoots.orgRoot.mozilla.javascript.Callable;
					public static coerceCallable(o: any, def: __javaRoots.orgRoot.mozilla.javascript.Callable): __javaRoots.orgRoot.mozilla.javascript.Callable;
					public static coerceDoubleNumber(o: any): number;
					public static coerceDoubleNumber(o: any, def: __javaRoots.javaRoot.lang.Number): number;
					public static coerceFloatNumber(o: any): number;
					public static coerceFloatNumber(o: any, def: __javaRoots.javaRoot.lang.Number): number;
					public static coerceFunction(o: any): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public static coerceFunction(o: any, def: __javaRoots.orgRoot.mozilla.javascript.BaseFunction): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public static coerceIntNumber(o: any): number;
					public static coerceIntNumber(o: any, def: __javaRoots.javaRoot.lang.Number): number;
					public static coerceLongNumber(o: any): number;
					public static coerceLongNumber(o: any, def: __javaRoots.javaRoot.lang.Number): number;
					public static coerceNumber(o: any): number;
					public static coerceNumber(o: any, def: __javaRoots.javaRoot.lang.Number): number;
					public static coerceObject(o: any): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public static coerceObject(o: any, def: __javaRoots.orgRoot.mozilla.javascript.NativeObject): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public static coerceRunnable(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, o: any): __javaRoots.javaRoot.lang.Runnable;
					public static coerceRunnable(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, o: any, def: __javaRoots.javaRoot.lang.Runnable): __javaRoots.javaRoot.lang.Runnable;
					public static coerceString(o: any): string;
					public static coerceString(o: any, def: string): string;
					public static coerceStringLowercase(o: any): string;
					public static coerceStringLowercase(o: any, def: string): string;
					public static coerceStringUppercase(o: any): string;
					public static coerceStringUppercase(o: any, def: string): string;
					public static constructFunction(ctor: __javaRoots.orgRoot.mozilla.javascript.Function, scope: __javaRoots.orgRoot.autojs.autojs.rhino.TopLevelScope, args: any[]): __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public static defineFunctionProperties(target: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject, names: string[], clazz: __javaRoots.javaRoot.lang.Class<any>, attributes: number): void;
					public static defineFunctionProperties(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, target: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject, names: string[], clazz: __javaRoots.javaRoot.lang.Class<any>, attributes: number): void;
					public static dispatchToMainThread(handler: __javaRoots.androidRoot.os.Handler, r: __javaRoots.javaRoot.lang.Runnable): void;
					public static dispatchToMainThread(r: __javaRoots.javaRoot.lang.Runnable): void;
					public static encodeURI(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, str: string): string;
					public static ensureNativeArrayLength(o: __javaRoots.orgRoot.mozilla.javascript.NativeArray, length: number, desc: string): void;
					public static ensureNativeArrayLengthInRage(o: __javaRoots.orgRoot.mozilla.javascript.NativeArray, intRange: __javaRoots.kotlinRoot.ranges.IntRange, desc: string): void;
					public static flatten(input: any): __javaRoots.javaRoot.util.List<any>;
					public static getArrayPrototype(): __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public static getArrayPrototype(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable): __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public static getCurrentTopCallScopeOrDefault($this$getCurrentTopCallScopeOrDefault: __javaRoots.orgRoot.mozilla.javascript.Context): __javaRoots.orgRoot.mozilla.javascript.VarScope;
					public static getCurrentTopCallScopeOrFallback($this$getCurrentTopCallScopeOrFallback: __javaRoots.orgRoot.mozilla.javascript.Context): __javaRoots.orgRoot.mozilla.javascript.VarScope;
					public static getDeclarationScope(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable): __javaRoots.orgRoot.mozilla.javascript.VarScope;
					public static getDeclarationScopeOrDefault($this$getDeclarationScopeOrDefault: __javaRoots.orgRoot.mozilla.javascript.Context, ...scopes: __javaRoots.orgRoot.mozilla.javascript.Scriptable[]): __javaRoots.orgRoot.mozilla.javascript.VarScope;
					public static getDeclarationScopeOrDefault(...scopes: __javaRoots.orgRoot.mozilla.javascript.Scriptable[]): __javaRoots.orgRoot.mozilla.javascript.VarScope;
					public static getFunctionPrototype(): __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public static getFunctionPrototype(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable): __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public getMAX_SAFE_INT_IEEE754_BD(): __javaRoots.javaRoot.math.BigDecimal;
					public getMAX_SAFE_INT_IEEE754_BI(): __javaRoots.javaRoot.math.BigInteger;
					public getMIN_SAFE_INT_IEEE754_BD(): __javaRoots.javaRoot.math.BigDecimal;
					public getMIN_SAFE_INT_IEEE754_BI(): __javaRoots.javaRoot.math.BigInteger;
					public static getObjectPrototype(): __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public static getObjectPrototype(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable): __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public static getOrCreateStandardObjects($this$getOrCreateStandardObjects: __javaRoots.orgRoot.mozilla.javascript.Context): __javaRoots.orgRoot.mozilla.javascript.TopLevel;
					public static getPrototypeCallable(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, className: string, funcName: string): __javaRoots.orgRoot.mozilla.javascript.Callable;
					public static getPrototypeCallable(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, builtins: __javaRoots.orgRoot.mozilla.javascript.TopLevel.Builtins, funcName: string): __javaRoots.orgRoot.mozilla.javascript.Callable;
					public static getPrototypeFunction(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, className: string, funcName: string): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public static getPrototypeFunction(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, builtins: __javaRoots.orgRoot.mozilla.javascript.TopLevel.Builtins, funcName: string): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public static getRhinoStandardFunctionMethods($this$getRhinoStandardFunctionMethods: __javaRoots.javaRoot.lang.Class<any>): __javaRoots.javaRoot.util.List<__javaRoots.javaRoot.lang.reflect.Method>;
					public static getStandardObjects(): __javaRoots.orgRoot.mozilla.javascript.TopLevel;
					public static getTopLevelScope(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable): __javaRoots.orgRoot.mozilla.javascript.TopLevel;
					public static getUNDEFINED(): __javaRoots.orgRoot.mozilla.javascript.Undefined;
					public handleAsyncOperation(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, func: __javaRoots.kotlinRoot.jvm.functions.Function0<any>): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public handleAsyncOperation<T>(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, operation: __javaRoots.kotlinRoot.jvm.functions.Function0<T>, uiMapper: __javaRoots.kotlinRoot.jvm.functions.Function1<any, any>): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public static hashCodeOfScriptable(other: any): __javaRoots.javaRoot.lang.Integer;
					public static initNativeArrayPrototype(a: __javaRoots.orgRoot.mozilla.javascript.NativeArray): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static initNativeArrayPrototype(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, a: __javaRoots.orgRoot.mozilla.javascript.NativeArray): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static initNativeObjectPrototype(o: __javaRoots.orgRoot.mozilla.javascript.NativeObject): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public static initNativeObjectPrototype(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, o: __javaRoots.orgRoot.mozilla.javascript.NativeObject): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public initNewBaseFunction$app(baseFunction: __javaRoots.orgRoot.mozilla.javascript.BaseFunction): void;
					public initNewBaseFunction$app(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, baseFunction: __javaRoots.orgRoot.mozilla.javascript.BaseFunction): void;
					public static isBackgroundThread(): boolean;
					public static isInteger(o: any): boolean;
					public static isMainThread(): boolean;
					public static isUiThread(): boolean;
					public static javaArrayToString(o: any): string;
					public static javaObjectToString(o: any): string;
					public static js_array_isArray(arg: __javaRoots.orgRoot.mozilla.javascript.Scriptable): boolean;
					public static js_date_parseString(s: string): number;
					public static js_eval(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, s: string): any;
					public static js_eval(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, s: string): any;
					public static js_function_bind(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable, targetFunction: __javaRoots.orgRoot.mozilla.javascript.Callable, ...args: any[]): __javaRoots.orgRoot.mozilla.javascript.BoundFunction;
					public static js_json_parse(text: string): any;
					public static js_json_stringify(value: any): any;
					public static js_json_stringify(value: any, replacer: any): any;
					public static js_json_stringify(value: any, replacer: any, space: any): any;
					public static js_object_assign(tar: __javaRoots.orgRoot.mozilla.javascript.Scriptable, src: __javaRoots.orgRoot.mozilla.javascript.Scriptable): __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public static js_object_create(): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public static js_object_create(o: __javaRoots.orgRoot.mozilla.javascript.Scriptable): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public static js_object_create(o: __javaRoots.orgRoot.mozilla.javascript.Scriptable, properties: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public static js_object_getOwnPropertyDescriptor(value: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject, key: any): any;
					public static js_object_getOwnPropertyNames(o: __javaRoots.orgRoot.mozilla.javascript.Scriptable): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static js_object_getPrototypeOf(o: __javaRoots.orgRoot.mozilla.javascript.Scriptable): __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public static js_object_hasOwnProperty(o: __javaRoots.orgRoot.mozilla.javascript.Scriptable, property: string): boolean;
					public static js_object_keys(arg: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static js_object_setPrototypeOf(o: __javaRoots.orgRoot.mozilla.javascript.Scriptable, proto: __javaRoots.orgRoot.mozilla.javascript.Scriptable): __javaRoots.orgRoot.mozilla.javascript.Scriptable;
					public static js_object_values(arg: __javaRoots.orgRoot.mozilla.javascript.ScriptableObject): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static js_require(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, id: string): any;
					public static js_typeof(value: any): string;
					public static newBaseFunction(funcName: string, callFunc: number, constructFunc: number): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public static newBaseFunction(funcName: string, callFunc: number, constructFunc: __javaRoots.kotlinRoot.jvm.functions.Function1<any, any>): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public static newBaseFunction(funcName: string, callFunc: __javaRoots.kotlinRoot.jvm.functions.Function1<any, any>, constructFunc: number): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public static newBaseFunction(funcName: string, callFunc: __javaRoots.kotlinRoot.jvm.functions.Function1<any, any>, constructFunc: __javaRoots.kotlinRoot.jvm.functions.Function1<any, any>): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public static newBaseFunction(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, funcName: string, callFunc: number, constructFunc: number): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public static newBaseFunction(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, funcName: string, callFunc: number, constructFunc: __javaRoots.kotlinRoot.jvm.functions.Function1<any, any>): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public static newBaseFunction(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, funcName: string, callFunc: __javaRoots.kotlinRoot.jvm.functions.Function1<any, any>, constructFunc: number): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public static newBaseFunction(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, funcName: string, callFunc: __javaRoots.kotlinRoot.jvm.functions.Function1<any, any>, constructFunc: __javaRoots.kotlinRoot.jvm.functions.Function1<any, any>): __javaRoots.orgRoot.mozilla.javascript.BaseFunction;
					public static newNativeArray(): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static newNativeArray(lengthArg: number): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static newNativeArray(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static newNativeArray(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, lengthArg: number): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static newNativeArray(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, array: any[]): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static newNativeArray(array: any[]): __javaRoots.orgRoot.mozilla.javascript.NativeArray;
					public static newNativeJavaMethod(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, method: __javaRoots.javaRoot.lang.reflect.Method, name: string): __javaRoots.orgRoot.mozilla.javascript.NativeJavaMethod;
					public static newNativeObject(): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public static newNativeObject(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public static newObject(scope: __javaRoots.orgRoot.mozilla.javascript.Scriptable): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public static newObject(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope): __javaRoots.orgRoot.mozilla.javascript.NativeObject;
					public now(): number;
					public static parseFloat(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, str: string): number;
					public static parseInt(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, str: string): number;
					public static parseInt(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, str: string, radix: __javaRoots.javaRoot.lang.Number): number;
					public static putExtraForIntent(intent: __javaRoots.androidRoot.content.Intent, key: any, value: any): void;
					public static registerStandardObjects($this$registerStandardObjects: __javaRoots.orgRoot.mozilla.javascript.Context, scope: __javaRoots.orgRoot.mozilla.javascript.TopLevel): void;
					public static runJavaScript(code: string): any;
					public static toFunctionName(cls: __javaRoots.kotlinRoot.reflect.KClass<any>, func: __javaRoots.kotlinRoot.reflect.KFunction<any>): string;
					public static toFunctionName(cls: __javaRoots.kotlinRoot.reflect.KClass<any>, func: __javaRoots.kotlinRoot.reflect.KFunction<any>, paramName: string): string;
					public static toJsValue(scope: __javaRoots.orgRoot.mozilla.javascript.VarScope, value: any): any;
					public undefined(_function_: __javaRoots.kotlinRoot.jvm.functions.Function0<any>): __javaRoots.orgRoot.mozilla.javascript.Undefined;
					public static unwrap(o: any): any;
					public static withRhinoContext<R>(_function_: __javaRoots.kotlinRoot.jvm.functions.Function1<any, R>): R;
					public static withRhinoContext<R>(scriptRuntime: __javaRoots.orgRoot.autojs.autojs.runtime.ScriptRuntime, _function_: __javaRoots.kotlinRoot.jvm.functions.Function1<any, R>): R;
					public withTimeConsuming<T, R>($this$withTimeConsuming: T, name: string, _function_: __javaRoots.kotlinRoot.jvm.functions.Function1<any, R>): R;
					public static wrap(o: any): any;
					protected constructor();
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class RomUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.RomUtils;
					public readonly emui: boolean;
					public readonly flyme: boolean;
					public readonly gionee: boolean;
					public readonly lenovo: boolean;
					public readonly miui: boolean;
					public readonly oppo: boolean;
					public readonly qiku: boolean;
					public readonly smartisan: boolean;
					public readonly vivo: boolean;
					public static readonly backgroundStartGranted: boolean;
					public static isBackgroundStartGranted(): boolean;
					public static isBackgroundStartGranted(context: __javaRoots.androidRoot.content.Context): boolean;
					public isEmui(): boolean;
					public isFlyme(): boolean;
					public isGionee(): boolean;
					public isLenovo(): boolean;
					public isMiui(): boolean;
					public isOppo(): boolean;
					public isQiku(): boolean;
					public isSmartisan(): boolean;
					public isVivo(): boolean;
					protected constructor();
				}
				export namespace RomUtils {
					export class Brand {
						public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.RomUtils.Brand;
						public readonly miMix: boolean;
						public readonly redmi: boolean;
						public readonly xperia: boolean;
						public isMiMix(): boolean;
						public isRedmi(): boolean;
						public isXperia(): boolean;
						protected constructor();
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class RootUtils {
					public static readonly rootAvailable: boolean;
					public static readonly rootMode: __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode;
					public constructor();
					public static getRootMode(): __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode;
					public static isRootAvailable(): boolean;
					public static resetRuntimeOverriddenRootModeState(): void;
					public static setRootMode(mode: __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode): void;
					public static setRootMode(mode: __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode, isWriteInfoPreference: boolean): void;
				}
				export namespace RootUtils {
					export class RootMode extends __javaRoots.javaRoot.lang.Enum<__javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode> {
						public static readonly AUTO_DETECT: __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode;
						public static readonly FORCE_NON_ROOT: __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode;
						public static readonly FORCE_ROOT: __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode;
						public readonly description: string;
						public readonly key: string;
						public static getRootMode(key: string): __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode;
						public toString(): string;
						public static valueOf(name: string): __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode;
						public static values(): __javaRoots.orgRoot.autojs.autojs.util.RootUtils.RootMode[];
						protected constructor();
						public static valueOf(...args: any[]): any;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class SdkVersionUtils {
					public constructor();
					public static sdkIntToString(i: number): string;
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class StringUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.StringUtils;
					public static bomBytes(charset: __javaRoots.javaRoot.nio.charset.Charset): number[];
					public static detectCharset(bytes: number[]): __javaRoots.orgRoot.autojs.autojs.util.StringUtils.CharsetMatchWrapper;
					public static detectEncoding(bytes: number[]): __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetection;
					public static detectEncoding(bytes: number[], endOfInput: boolean): __javaRoots.orgRoot.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetection;
					public static dropBom(bytes: number[], charset: __javaRoots.javaRoot.nio.charset.Charset): number[];
					public static equalsLoosely($this$equalsLoosely: string, other: string): boolean;
					public static formatDouble(d: number): string;
					public static formatDouble(d: number, fraction: number): string;
					public getEstimateVisualWidth($this$estimateVisualWidth: string): number;
					public static getStringByLanguageTag(id: number, locale: string): string;
					public static getStringForLocale(context: __javaRoots.androidRoot.content.Context, locale: __javaRoots.javaRoot.util.Locale, resId: number): string;
					public static hasBom(bytes: number[], charset: __javaRoots.javaRoot.nio.charset.Charset): boolean;
					public static indexOf(text: string, ch: string, fromIndex: number): number;
					public static indexOf(source: string, target: string, fromIndex: number): number;
					public static isLooselyIn($this$isLooselyIn: string, list: __javaRoots.javaRoot.lang.Iterable<string>): boolean;
					public static isUri($this$isUri: string): boolean;
					public static join(delimiter: string, ...tokens: any[]): string;
					public static key(resId: number): string;
					public static lastIndexOf(text: string, ch: string, fromIndex: number): number;
					public static lastIndexOf(source: string, target: string, fromIndex: number): number;
					public static looseKey($this$looseKey: string): string;
					public looseMatches($this$looseMatches: string, reference: string): boolean;
					public static lowercaseFirstChar($this$lowercaseFirstChar: string): string;
					public static normalizeTrailingSlash($this$normalizeTrailingSlash: string, isDir: boolean): string;
					public padEnd($this$padEnd: string, length: number, padStr: string): string;
					public padStart($this$padStart: string, length: number, padStr: string): string;
					public static str(resId: number, ...args: any[]): string;
					public toDoubleOrNaN($this$toDoubleOrNaN: string): number;
					public static toFile($this$toFile: string): __javaRoots.javaRoot.io.File;
					public static toFormattedPointString($this$toFormattedPointString: __javaRoots.orgRoot.opencv.core.Point): string;
					public static toFormattedPointString($this$toFormattedPointString: __javaRoots.orgRoot.opencv.core.Point, scale: number): string;
					public static toFormattedSummary(dataList: __javaRoots.javaRoot.util.List<__javaRoots.kotlinRoot.Pair<string, __javaRoots.kotlinRoot.jvm.functions.Function0<any>>>): string;
					/** @deprecated */
					public static toUpperCaseFirst(s: string): string;
					public static truncateForSafeBinder($this$truncateForSafeBinder: string): string;
					public static truncateToLength($this$truncateToLength: string, limit: number): string;
					public static uppercaseFirstChar($this$uppercaseFirstChar: string): string;
					protected constructor();
				}
				export namespace StringUtils {
					export class CharsetMatchWrapper {
						public readonly confidence: __javaRoots.javaRoot.lang.Integer;
						public readonly name: string;
						public constructor(name: string, confidence: __javaRoots.javaRoot.lang.Integer);
						public charsetOrDefault(): __javaRoots.javaRoot.nio.charset.Charset;
						public charsetOrDefault(defaultValue: __javaRoots.javaRoot.nio.charset.Charset): __javaRoots.javaRoot.nio.charset.Charset;
						public charsetOrNull(): __javaRoots.javaRoot.nio.charset.Charset;
						public getConfidence(): __javaRoots.javaRoot.lang.Integer;
						public getName(): string;
						public nameOrDefault(defaultValue: string): string;
					}
				}
			}
		}
	}
}
declare namespace org {
	export namespace autojs {
		export namespace autojs {
			export namespace util {
				export class TextUtils {
					public static readonly INSTANCE: __javaRoots.orgRoot.autojs.autojs.util.TextUtils;
					public static htmlToMarkdown(html: string): string;
					public static joinSpanned(spannedList: __javaRoots.javaRoot.util.List<__javaRoots.androidRoot.text.Spanned>): __javaRoots.androidRoot.text.Spanned;
					public static joinSpanned(spannedList: __javaRoots.javaRoot.util.List<__javaRoots.androidRoot.text.Spanned>, delimiter: string): __javaRoots.androidRoot.text.Spanned;
					public static markdownToHtml(markdown: string): string;
					public static splitSpanned(spanned: __javaRoots.androidRoot.text.Spanned): __javaRoots.javaRoot.util.List<__javaRoots.androidRoot.text.Spanned>;
					public static splitSpanned(spanned: __javaRoots.androidRoot.text.Spanned, delimiter: string): __javaRoots.javaRoot.util.List<__javaRoots.androidRoot.text.Spanned>;
					protected constructor();
				}
			}
		}
	}
}
// Generics information:
//com.stardust.autojs.core.activity.ActivityInfoProvider.getLatestPackageByUsageStats..inlined.sortBy.1:1
//com.stardust.autojs.core.internal.Functions.Func0:1
//com.stardust.autojs.core.internal.Functions.Func1:2
//com.stardust.autojs.core.internal.Functions.Func2:3
//com.stardust.autojs.core.internal.Functions.Func3:4
//com.stardust.autojs.core.internal.Functions.Func4:5
//com.stardust.autojs.core.internal.Functions.VoidFunc1:1
//com.stardust.autojs.core.internal.Functions.VoidFunc2:2
//com.stardust.autojs.core.internal.Functions.VoidFunc3:3
//com.stardust.autojs.core.internal.Functions.VoidFunc4:4
//com.stardust.autojs.core.ui.attribute.ViewAttributes.Getter:1
//com.stardust.autojs.core.ui.attribute.ViewAttributes.MappingAttributeSetter:1
//com.stardust.autojs.core.ui.attribute.ViewAttributes.Setter:1
//com.stardust.autojs.core.ui.attribute.ViewAttributes.ValueConverter:1
//com.stardust.autojs.core.ui.inflater.ViewCreator:1
//com.stardust.autojs.core.ui.inflater.ViewInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.AppBarInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.BaseViewInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.FrameLayoutInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.ImageViewInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.JsGridViewInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.JsListViewInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.LinearLayoutInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.ProgressBarInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.RadioGroupInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.TabLayoutInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.TextViewInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.ToolbarInflater:1
//com.stardust.autojs.core.ui.inflater.inflaters.ViewGroupInflater:1
//com.stardust.autojs.core.ui.inflater.util.ValueMapper:1
//com.stardust.autojs.engine.ScriptEngine:1
//com.stardust.autojs.engine.ScriptEngine.AbstractScriptEngine:1
//com.stardust.autojs.engine.ScriptEngineProxy:1
//com.stardust.concurrent.ConcurrentArrayList:1
//com.stardust.concurrent.Value:1
//com.stardust.concurrent.VolatileBox:1
//com.stardust.concurrent.VolatileDispose:1
//com.stardust.event.EventDispatcher:1
//com.stardust.event.EventDispatcher.Event:1
//com.stardust.util.BiMap:2
//com.stardust.util.BiMaps.BiMapBuilder:2
//com.stardust.util.BiMaps.BiMapImpl:2
//com.stardust.util.Callback:1
//com.stardust.util.Consumer:1
//com.stardust.util.Func1:2
//com.stardust.util.LimitedHashMap:2
//com.stardust.util.MapBuilder:2
//com.stardust.util.SimpleCache:1
//com.stardust.util.SimpleCache.Item:1
//com.stardust.util.SimpleCache.NullSupplier:1
//com.stardust.util.SimpleCache.Supplier:1
//com.stardust.util.SparseArrayEntries:1
//com.stardust.util.StateObserver.SimpleOnStateChangedListener:1
//com.stardust.util.Supplier:1
//org.autojs.autojs.apkbuilder.template.ApkBuilderTemplatePluginHost.openTemplate..inlined.compareByDescending.1:1
//org.autojs.autojs.apkbuilder.template.ApkBuilderTemplatePluginHost.openTemplate..inlined.thenBy.1:1
//org.autojs.autojs.apkbuilder.template.ApkBuilderTemplatePluginHost.openTemplate..inlined.thenByDescending.1:1
//org.autojs.autojs.apkbuilder.template.ApkBuilderTemplatePluginHost.remoteBuildCandidates..inlined.compareByDescending.1:1
//org.autojs.autojs.apkbuilder.template.ApkBuilderTemplatePluginHost.remoteBuildCandidates..inlined.thenBy.1:1
//org.autojs.autojs.apkbuilder.template.ApkBuilderTemplatePluginHost.remoteBuildCandidates..inlined.thenByDescending.1:1
//org.autojs.autojs.apkbuilder.template.ApkBuilderTemplatePluginHost.remoteBuildCandidates..inlined.thenByDescending.2:1
//org.autojs.autojs.concurrent.ConcurrentArrayList:1
//org.autojs.autojs.concurrent.Value:1
//org.autojs.autojs.concurrent.VolatileBox:1
//org.autojs.autojs.concurrent.VolatileDispose:1
//org.autojs.autojs.core.console.StackFrameParser.parse..inlined.sortedBy.1:1
//org.autojs.autojs.core.image.Shootable:1
//org.autojs.autojs.core.internal.Functions.Func0:1
//org.autojs.autojs.core.internal.Functions.Func1:2
//org.autojs.autojs.core.internal.Functions.Func2:3
//org.autojs.autojs.core.internal.Functions.Func3:4
//org.autojs.autojs.core.internal.Functions.Func4:5
//org.autojs.autojs.core.internal.Functions.VoidFunc1:1
//org.autojs.autojs.core.internal.Functions.VoidFunc2:2
//org.autojs.autojs.core.internal.Functions.VoidFunc3:3
//org.autojs.autojs.core.internal.Functions.VoidFunc4:4
//org.autojs.autojs.core.looper.ServantLooperHolder:1
//org.autojs.autojs.core.looper.WakeUpOnRemoveSet:1
//org.autojs.autojs.core.plugin.AidlPluginHost:1
//org.autojs.autojs.core.plugin.AidlPluginHost.DedicatedBinding:1
//org.autojs.autojs.core.plugin.AidlPluginHost.LeasedCall:1
//org.autojs.autojs.core.plugin.AidlPluginHost.retryAfterBinderFailure.1:1
//org.autojs.autojs.core.plugin.AidlPluginHost.withDedicatedServiceBinding.1:1
//org.autojs.autojs.core.plugin.AidlPluginHost.withService.1:1
//org.autojs.autojs.core.plugin.ai.AiProviderDiscoveryPolicy.special..inlined.thenBy.1:1
//org.autojs.autojs.core.plugin.ai.AiProviderDiscoveryPolicy.special..inlined.thenBy.2:1
//org.autojs.autojs.core.plugin.ai.AiProviderDiscoveryPolicy.special..inlined.thenBy.3:1
//org.autojs.autojs.core.plugin.ai.AiProviderDiscoveryPolicy.special..inlined.thenBy.4:1
//org.autojs.autojs.core.plugin.ai.AiProviderDiscoveryPolicy.special..inlined.thenBy.5:1
//org.autojs.autojs.core.plugin.ai.AiProviderDiscoveryPolicy.special..inlined.thenBy.6:1
//org.autojs.autojs.core.plugin.ai.AiProviderDiscoveryPolicy.special..inlined.thenBy.7:1
//org.autojs.autojs.core.plugin.ai.AiProviderDiscoveryPolicy.special..inlined.thenBy.8:1
//org.autojs.autojs.core.plugin.ai.AiProviderDiscoveryPolicy.special..inlined.thenBy.9:1
//org.autojs.autojs.core.plugin.ai.AiProviderDiscoveryPolicy.special..inlined.thenByDescending.1:1
//org.autojs.autojs.core.plugin.ai.AiProviderDiscoveryPolicy.special..inlined.thenByDescending.2:1
//org.autojs.autojs.core.plugin.ai.AiProviderHandshakeCoordinator.MetadataValue:1
//org.autojs.autojs.core.plugin.ai.AiProviderHandshakeCoordinator.MetadataValue.Value:1
//org.autojs.autojs.core.plugin.ai.AiProviderSelectionPolicy.special..inlined.thenBy.1:1
//org.autojs.autojs.core.plugin.ai.AiProviderSelectionPolicy.special..inlined.thenByDescending.1:1
//org.autojs.autojs.core.plugin.ai.AiProviderSelectionPolicy.special..inlined.thenByDescending.2:1
//org.autojs.autojs.core.plugin.ai.AiProviderSessionCoordinator.MetadataValue:1
//org.autojs.autojs.core.plugin.ai.AiProviderSessionCoordinator.MetadataValue.Value:1
//org.autojs.autojs.core.plugin.ai.AiProviderTargetListingCoordinator.MetadataValue:1
//org.autojs.autojs.core.plugin.ai.AiProviderTargetListingCoordinator.MetadataValue.Value:1
//org.autojs.autojs.core.plugin.ai.HandshakeCloseSlot:1
//org.autojs.autojs.core.plugin.ai.SessionCoordinatorCloseSlot:1
//org.autojs.autojs.core.plugin.ai.TargetListingCloseRegistry:1
//org.autojs.autojs.core.plugin.ai.TargetListingCloseSlot:1
//org.autojs.autojs.core.plugin.barcode.BarcodePluginHost.retryAfterBinderFailure.1:1
//org.autojs.autojs.core.plugin.barcode.BarcodePluginHost.withImagePfdService.1:1
//org.autojs.autojs.core.plugin.barcode.BarcodePluginHost.withImagePfdServiceOnce.1:1
//org.autojs.autojs.core.plugin.barcode.BarcodePluginHost.withService.1:1
//org.autojs.autojs.core.plugin.center.PluginCenterActivity.showFilterDialog.FilterOption:1
//org.autojs.autojs.core.plugin.center.PluginCenterActivity.showFilterDialog.OptionGroupBinder:1
//org.autojs.autojs.core.plugin.center.PluginCenterActivity.showProcessLogs.job.1.1.1:1
//org.autojs.autojs.core.plugin.center.PluginCenterFragment.comparatorForSortField..inlined.compareBy.1:1
//org.autojs.autojs.core.plugin.center.PluginCenterFragment.comparatorForSortField..inlined.compareBy.10:1
//org.autojs.autojs.core.plugin.center.PluginCenterFragment.comparatorForSortField..inlined.compareBy.2:1
//org.autojs.autojs.core.plugin.center.PluginCenterFragment.comparatorForSortField..inlined.compareBy.3:1
//org.autojs.autojs.core.plugin.center.PluginCenterFragment.comparatorForSortField..inlined.compareBy.4:1
//org.autojs.autojs.core.plugin.center.PluginCenterFragment.comparatorForSortField..inlined.compareBy.5:1
//org.autojs.autojs.core.plugin.center.PluginCenterFragment.comparatorForSortField..inlined.compareBy.6:1
//org.autojs.autojs.core.plugin.center.PluginCenterFragment.comparatorForSortField..inlined.compareBy.7:1
//org.autojs.autojs.core.plugin.center.PluginCenterFragment.comparatorForSortField..inlined.compareBy.8:1
//org.autojs.autojs.core.plugin.center.PluginCenterFragment.comparatorForSortField..inlined.compareBy.9:1
//org.autojs.autojs.core.plugin.center.PluginCenterFrameChunkedListSubmitter:1
//org.autojs.autojs.core.plugin.center.PluginCenterLegacyRefreshState:1
//org.autojs.autojs.core.plugin.center.PluginCenterViewModel.toLegacyPluginCenterItem.lambda.1..inlined.sortedByDescending.1:1
//org.autojs.autojs.core.plugin.center.PluginCenterViewModel.toPluginCenterItem.lambda.1..inlined.sortedByDescending.1:1
//org.autojs.autojs.core.plugin.center.PluginInfoServiceHost.withInfoService.1:1
//org.autojs.autojs.core.plugin.center.PluginSettingsFragment.onCreatePreferences..inlined.sortedByDescending.1:1
//org.autojs.autojs.core.plugin.center.PluginVariantPriorityActivity.applyStoredOrder..inlined.compareBy.1:1
//org.autojs.autojs.core.plugin.center.PluginVariantPriorityActivity.applyStoredOrder..inlined.thenBy.1:1
//org.autojs.autojs.core.plugin.center.PluginVariantPriorityActivity.applyStoredOrder..inlined.thenByDescending.1:1
//org.autojs.autojs.core.plugin.center.PluginVariantPriorityStore.selectByPriority..inlined.compareBy.1:1
//org.autojs.autojs.core.plugin.center.PluginVariantPriorityStore.selectByPriority..inlined.thenByDescending.1:1
//org.autojs.autojs.core.plugin.center.PluginVisibilityStore.listHidden..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.dex.CloseOnceSlot:1
//org.autojs.autojs.core.plugin.dex.DexCompilerExperimentalPolicy.selectAndPin..inlined.compareByDescending.1:1
//org.autojs.autojs.core.plugin.dex.DexCompilerExperimentalPolicy.selectAndPin..inlined.thenBy.1:1
//org.autojs.autojs.core.plugin.dex.DexCompilerExperimentalPolicy.selectAndPin..inlined.thenBy.2:1
//org.autojs.autojs.core.plugin.dex.DexCompilerExperimentalPolicy.selectAndPin..inlined.thenByDescending.1:1
//org.autojs.autojs.core.plugin.dex.DexCompilerPersistentCache.special..inlined.compareBy.1:1
//org.autojs.autojs.core.plugin.dex.DexCompilerPersistentCache.special..inlined.compareByDescending.1:1
//org.autojs.autojs.core.plugin.dex.DexCompilerPersistentCache.special..inlined.thenBy.1:1
//org.autojs.autojs.core.plugin.dex.DexCompilerPersistentCache.special..inlined.thenBy.2:1
//org.autojs.autojs.core.plugin.dex.DexCompilerPersistentCache.special..inlined.thenBy.3:1
//org.autojs.autojs.core.plugin.dex.DexCompilerPersistentCache.special..inlined.thenByDescending.1:1
//org.autojs.autojs.core.plugin.dex.DexCompilerPersistentCache.special..inlined.thenByDescending.2:1
//org.autojs.autojs.core.plugin.dex.DexCompilerSingleFlight:2
//org.autojs.autojs.core.plugin.dex.DexCompilerSingleFlight.JoinedFlight:1
//org.autojs.autojs.core.plugin.dex.DexCompilerSingleFlightCallerCoordinator:3
//org.autojs.autojs.core.plugin.dex.DexCompilerSingleFlightCallerOutcome:2
//org.autojs.autojs.core.plugin.dex.DexCompilerSingleFlightCallerOutcome.Failure:1
//org.autojs.autojs.core.plugin.dex.DexCompilerSingleFlightCallerOutcome.Value:2
//org.autojs.autojs.core.plugin.dex.DexCompilerSingleFlightOutcome:1
//org.autojs.autojs.core.plugin.dex.DexCompilerSingleFlightOutcome.Value:1
//org.autojs.autojs.core.plugin.dex.DexCompilerSingleFlightTerminal:1
//org.autojs.autojs.core.plugin.dex.DexCompilerSingleFlightTerminal.Value:1
//org.autojs.autojs.core.plugin.dex.DexCompilerSingleFlightValueSource:1
//org.autojs.autojs.core.plugin.docs.OfflineDocsPluginHost.selectCandidate..inlined.compareBy.1:1
//org.autojs.autojs.core.plugin.docs.OfflineDocsPluginHost.selectCandidate..inlined.thenBy.1:1
//org.autojs.autojs.core.plugin.docs.OfflineDocsPluginStateMonitor.inspect..inlined.compareBy.1:1
//org.autojs.autojs.core.plugin.docs.OfflineDocsPluginStateMonitor.inspect..inlined.thenBy.1:1
//org.autojs.autojs.core.plugin.docs.OfflineDocsVerificationCache:1
//org.autojs.autojs.core.plugin.docs.OfflineDocsVerificationCache.Entry:1
//org.autojs.autojs.core.plugin.explorer.ExplorerActionRegistry.refresh.2.invokeSuspend..inlined.compareByDescending.1:1
//org.autojs.autojs.core.plugin.explorer.ExplorerActionRegistry.refresh.2.invokeSuspend..inlined.thenBy.1:1
//org.autojs.autojs.core.plugin.explorer.ExplorerActionRegistry.refresh.2.invokeSuspend..inlined.thenBy.2:1
//org.autojs.autojs.core.plugin.explorer.output.ExplorerActionOutputTransactionStore.list.lambda.0..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.explorer.session.ExplorerActionHostSession.validateAndSyncOutputTree..inlined.sortedByDescending.1:1
//org.autojs.autojs.core.plugin.explorer.session.ExplorerActionOutputBatchStore.list..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.explorer.session.ExplorerActionOutputTreeStore.list..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.explorer.session.ExplorerActionReplacementHistoryStore.cleanupLocked..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.explorer.session.ExplorerActionReplacementHistoryStore.cleanupLocked..inlined.sortedBy.2:1
//org.autojs.autojs.core.plugin.explorer.session.ExplorerActionReplacementHistoryStore.makeRoomForLocked..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.explorer.session.ExplorerActionTargetTrashBatchStore.list.lambda.0..inlined.sortedByDescending.1:1
//org.autojs.autojs.core.plugin.explorer.session.ExplorerActionTargetTrashBatchStore.makeRoomLocked..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.jvm.JvmSourceExactBindingLinkState:2
//org.autojs.autojs.core.plugin.jvm.JvmSourceExactBindingLinkState.CloseResult:2
//org.autojs.autojs.core.plugin.jvm.JvmSourceExactBindingLinkState.Link:2
//org.autojs.autojs.core.plugin.jvm.JvmSourceHostExecutionGate:1
//org.autojs.autojs.core.plugin.lua.LuaBoundedBinderCallLane.Call:1
//org.autojs.autojs.core.plugin.lua.LuaBoundedBinderCallLane.CallOutcome:1
//org.autojs.autojs.core.plugin.lua.LuaBoundedBinderCallLane.CallOutcome.Success:1
//org.autojs.autojs.core.plugin.ocr.OcrPluginHost.retryAfterBinderFailure.1:1
//org.autojs.autojs.core.plugin.ocr.OcrPluginHost.withImagePfdService.1:1
//org.autojs.autojs.core.plugin.ocr.OcrPluginHost.withImagePfdServiceOnce.1:1
//org.autojs.autojs.core.plugin.ocr.OcrPluginHost.withService.1:1
//org.autojs.autojs.core.plugin.python.PythonMaterialDialogInputController.Pending:1
//org.autojs.autojs.core.plugin.python.PythonProjectWorkspacePolicy.plan..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.python.PythonProjectWorkspacePolicy.plan.visit..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeDispatchRegistry:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeDispatchRegistry.Cancellation:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeDispatchRegistry.Cancellation.AfterStart:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeDispatchRegistry.Cancellation.BeforeStart:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeDispatchRegistry.Opened:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeDispatchRegistry.Opened.CloseLate:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeDispatchRegistry.Opened.Owned:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeDispatchRegistry.Registration:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeDispatchRegistry.Start:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeDispatchRegistry.Start.Dispatch:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeProviderSelectionPolicy.special..inlined.thenBy.1:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeProviderSelectionPolicy.special..inlined.thenByDescending.1:1
//org.autojs.autojs.core.plugin.python.PythonRuntimeProviderSelectionPolicy.special..inlined.thenByDescending.2:1
//org.autojs.autojs.core.plugin.r8.R8CompilerPersistentArtifactStore.enforceLimitsLocked..inlined.compareBy.1:1
//org.autojs.autojs.core.plugin.r8.R8CompilerPersistentArtifactStore.enforceLimitsLocked..inlined.thenBy.1:1
//org.autojs.autojs.core.plugin.r8.R8CompilerPersistentArtifactStore.matchingGenerations..inlined.compareByDescending.1:1
//org.autojs.autojs.core.plugin.r8.R8CompilerPersistentArtifactStore.matchingGenerations..inlined.thenByDescending.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptApkBuildCompiler.createPlan..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptApkBuildCompiler.prepareDirectory..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptApkBuildPlan.special..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptCompilationCacheKey.canonicalBytes..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptCompilationPersistentCache.enforceLimitsLocked..inlined.compareBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptCompilationPersistentCache.enforceLimitsLocked..inlined.thenBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptCompilationPersistentCache.enforceLimitsLocked..inlined.thenBy.2:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptCompilationPersistentCache.special..inlined.compareBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptCompilationPersistentCache.special..inlined.thenBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptCompilerWarmBindingRetention:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptCompilerWarmBindingRetention.Result:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptEditorDependencySnapshotProvider.captureRequired..inlined.sortBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptEditorProjectSnapshotProvider.collectSources..inlined.sortBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptPreparedDependencyLayer.special..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptPreparedPackageMetadata.special..inlined.sortedBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptProjectArchive.collectDependencyLayer..inlined.sortBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptProjectArchive.collectPackageMetadata..inlined.sortBy.1:1
//org.autojs.autojs.core.plugin.typescript.TypeScriptProjectArchive.collectSources..inlined.sortBy.1:1
//org.autojs.autojs.core.ui.BiMap:2
//org.autojs.autojs.core.ui.BiMaps.BiMapBuilder:2
//org.autojs.autojs.core.ui.BiMaps.BiMapImpl:2
//org.autojs.autojs.core.ui.attribute.ViewAttributes.Getter:1
//org.autojs.autojs.core.ui.attribute.ViewAttributes.MappingAttributeSetter:1
//org.autojs.autojs.core.ui.attribute.ViewAttributes.Setter:1
//org.autojs.autojs.core.ui.attribute.ViewAttributes.ValueConverter:1
//org.autojs.autojs.core.ui.inflater.ScriptResourceRepository.ensureValuesLoaded.lambda.0..inlined.sortedBy.1:1
//org.autojs.autojs.core.ui.inflater.ViewCreator:1
//org.autojs.autojs.core.ui.inflater.inflaters.AbsSeekBarInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.AbsSpinnerInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ActionMenuViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.AdapterViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.AppBarLayoutInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.AppCompatCheckBoxInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.AppCompatSpinnerInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.AppCompatTextViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.AutoCompleteTextViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.BaseViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ButtonInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.CalendarViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.CardViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.CheckBoxInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.CheckedTextViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ChronometerInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.CompoundButtonInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ConsoleViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.DatePickerInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.DrawerLayoutInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.EditTextInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.FloatingActionButtonInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.FrameLayoutInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.HorizontalScrollViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ImageButtonInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ImageSwitcherInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ImageViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.JsGridViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.JsListViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.LinearLayoutInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.NumberPickerInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ProgressBarInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.QuickContactBadgeInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.RadioGroupInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.RatingBarInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.RecyclerViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.RelativeLayoutInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.RoundedImageViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ScrollViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.SearchViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.SeekBarInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.SpinnerInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.SurfaceViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.SwitchCompatInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.TabLayoutInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.TextClockInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.TextSwitcherInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.TextViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.TextViewLegacyInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.TextureViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.TimePickerInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ToggleButtonInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ToolbarInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.VideoViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ViewAnimatorInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ViewFlipperInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ViewGroupInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ViewInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ViewPagerInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.ViewSwitcherInflater:1
//org.autojs.autojs.core.ui.inflater.inflaters.WebViewInflater:1
//org.autojs.autojs.core.ui.inflater.util.ValueMapper:1
//org.autojs.autojs.engine.LuaModuleSnapshot.Companion.create..inlined.sortedBy.1:1
//org.autojs.autojs.engine.NodeAndroidPackageInstallManager.collectPackageFiles..inlined.sortedBy.1:1
//org.autojs.autojs.engine.NodeAndroidPackageInstallManager.collectPackageFiles.visit..inlined.sortedBy.1:1
//org.autojs.autojs.engine.NodeAndroidPackageInstallManager.list.lambda.0..inlined.compareBy.1:1
//org.autojs.autojs.engine.NodeAndroidPackageInstallManager.list.lambda.0..inlined.thenBy.1:1
//org.autojs.autojs.engine.NodeBridgeResourceRegistry.closeAll..inlined.compareBy.1:1
//org.autojs.autojs.engine.NodeBridgeResourceRegistry.closeAll..inlined.thenBy.1:1
//org.autojs.autojs.engine.NodeBridgeResourceRegistry.dumpActiveResources..inlined.compareBy.1:1
//org.autojs.autojs.engine.NodeBridgeResourceRegistry.dumpActiveResources..inlined.thenBy.1:1
//org.autojs.autojs.engine.NodeIntentTaskSnapshots.querySnapshots.lambda.0..inlined.sortedBy.1:1
//org.autojs.autojs.engine.NodeJsPluginWorkspaceArchiveTransport.Companion.addDeclaredProjectTree..inlined.sortedBy.1:1
//org.autojs.autojs.engine.NodeJsRuntimePluginHost.queryAuthorizedRuntimeCandidates..inlined.compareByDescending.1:1
//org.autojs.autojs.engine.NodeJsRuntimePluginHost.queryAuthorizedRuntimeCandidates..inlined.thenBy.1:1
//org.autojs.autojs.engine.NodeJsRuntimePluginHost.queryAuthorizedRuntimeCandidates..inlined.thenBy.2:1
//org.autojs.autojs.engine.NodeJsRuntimePluginHost.queryAuthorizedRuntimeCandidates..inlined.thenByDescending.1:1
//org.autojs.autojs.engine.NodeModuleSourceFileTransportSession.drainRequests..inlined.sortedBy.1:1
//org.autojs.autojs.engine.NodeProfileSelectionDiagnostics.sortedByProfileOrder..inlined.compareBy.1:1
//org.autojs.autojs.engine.NodeProfileSelectionDiagnostics.sortedByProfileOrder..inlined.thenBy.1:1
//org.autojs.autojs.engine.NodeRuntimePluginExecutionRegistry:1
//org.autojs.autojs.engine.NodeRuntimePluginExecutionRegistry.Cancellation:1
//org.autojs.autojs.engine.NodeRuntimePluginExecutionRegistry.Cancellation.AfterDispatch:1
//org.autojs.autojs.engine.NodeRuntimePluginExecutionRegistry.Registration:1
//org.autojs.autojs.engine.NodeTimedTaskSnapshots.querySnapshots.lambda.0..inlined.sortedBy.1:1
//org.autojs.autojs.engine.NodeWorkManagerBridgeScheduler.list..inlined.sortedBy.1:1
//org.autojs.autojs.engine.ScriptEngine:1
//org.autojs.autojs.engine.ScriptEngine.AbstractScriptEngine:1
//org.autojs.autojs.engine.module.SingleFlightSoftCache:2
//org.autojs.autojs.engine.module.SingleFlightSoftCache.CacheReference:2
//org.autojs.autojs.engine.module.SingleFlightStrongCache:2
//org.autojs.autojs.event.EventDispatcher:1
//org.autojs.autojs.event.EventDispatcher.Event:1
//org.autojs.autojs.model.autocomplete.DictionaryTree:1
//org.autojs.autojs.model.autocomplete.DictionaryTree.Entry:1
//org.autojs.autojs.model.autocomplete.DictionaryTree.Node:1
//org.autojs.autojs.project.FuzzyDeserializer:1
//org.autojs.autojs.rhino.AndroidClassLoader.jarToDexR8..inlined.sortedBy.1:1
//org.autojs.autojs.rhino.AndroidClassLoader.jarToDexR8..inlined.sortedBy.2:1
//org.autojs.autojs.runtime.api.augment.proxy.JavaProxyObject:1
//org.autojs.autojs.runtime.api.augment.selector.SelectorMethodResolver.resolve..inlined.sortedBy.1:1
//org.autojs.autojs.runtime.api.augment.util.VersionCodes.Searcher.searchAll..inlined.sortedByDescending.1:1
//org.autojs.autojs.runtime.api.tts.AndroidTtsBackend.engines.lambda.0..inlined.sortedBy.1:1
//org.autojs.autojs.runtime.api.tts.TtsBackendKt.selectOfflineTtsVoice..inlined.compareByDescending.1:1
//org.autojs.autojs.runtime.api.tts.TtsBackendKt.selectOfflineTtsVoice..inlined.thenBy.1:1
//org.autojs.autojs.runtime.api.tts.TtsBackendKt.selectOfflineTtsVoice..inlined.thenBy.2:1
//org.autojs.autojs.runtime.api.tts.TtsBackendKt.selectOfflineTtsVoice..inlined.thenByDescending.1:1
//org.autojs.autojs.runtime.api.tts.TtsBackendKt.selectOfflineTtsVoice..inlined.thenByDescending.2:1
//org.autojs.autojs.runtime.api.tts.TtsOptionsParser.OptionalField:1
//org.autojs.autojs.storage.database.Database:1
//org.autojs.autojs.storage.database.ModelChange:1
//org.autojs.autojs.storage.history.HistoryCleanupWorker.cleanupEmergencyDraftsLocked..inlined.sortedByDescending.1:1
//org.autojs.autojs.theme.app.ColorSelectBaseActivity.checkAndGetTargetInfoForThemeColorLocate..inlined.sortedBy.1:1
//org.autojs.autojs.theme.app.ColorSelectBaseActivity.showColorHistory.1.5.invokeSuspend..inlined.sortedByDescending.1:1
//org.autojs.autojs.theme.app.ColorSelectBaseActivity.showColorPickerHistory.1.history.1.invokeSuspend..inlined.sortedByDescending.1:1
//org.autojs.autojs.theme.util.ListBuilder:1
//org.autojs.autojs.timing.TimedTaskScheduler.checkTasks..inlined.sortedBy.1:1
//org.autojs.autojs.tool.Callback:1
//org.autojs.autojs.tool.Consumer:1
//org.autojs.autojs.tool.Func1:2
//org.autojs.autojs.tool.LimitedHashMap:2
//org.autojs.autojs.tool.MapBuilder:2
//org.autojs.autojs.tool.SimpleCache:1
//org.autojs.autojs.tool.SimpleCache.Item:1
//org.autojs.autojs.tool.SimpleCache.NullSupplier:1
//org.autojs.autojs.tool.SimpleCache.Supplier:1
//org.autojs.autojs.tool.SimpleObserver:1
//org.autojs.autojs.tool.SparseArrayEntries:1
//org.autojs.autojs.tool.StateObserver.SimpleOnStateChangedListener:1
//org.autojs.autojs.tool.Supplier:1
//org.autojs.autojs.ui.edit.editor.ace.AceEditorFontDialog.Adapter.showVariants..inlined.compareBy.1:1
//org.autojs.autojs.ui.edit.editor.ace.AceEditorFontDialog.Adapter.showVariants..inlined.thenBy.1:1
//org.autojs.autojs.ui.edit.editor.ace.AceEditorFontManagerKt.resolveRemoteFontGroups.lambda.0..inlined.compareBy.1:1
//org.autojs.autojs.ui.edit.editor.ace.AceEditorFontManagerKt.resolveRemoteFontGroups.lambda.0..inlined.compareBy.2:1
//org.autojs.autojs.ui.edit.editor.ace.AceEditorFontManagerKt.resolveRemoteFontGroups.lambda.0..inlined.thenBy.1:1
//org.autojs.autojs.ui.edit.editor.ace.AceEditorFontManagerKt.resolveRemoteFontGroups.lambda.0..inlined.thenBy.2:1
//org.autojs.autojs.ui.edit.editor.ace.AceEditorFontUiPreferences.comparator..inlined.compareBy.1:1
//org.autojs.autojs.ui.edit.editor.ace.font.FontCatalogParser.parse..inlined.compareBy.1:1
//org.autojs.autojs.ui.edit.editor.ace.font.FontCatalogParser.parse..inlined.thenBy.1:1
//org.autojs.autojs.ui.edit.editor.ace.font.FontCatalogParser.parse..inlined.thenBy.2:1
//org.autojs.autojs.ui.edit.editor.ace.font.FontCatalogRepository.loadBestAvailable.lambda.0..inlined.compareByDescending.1:1
//org.autojs.autojs.ui.edit.editor.ace.font.FontCatalogRepository.loadBestAvailable.lambda.0..inlined.thenByDescending.1:1
//org.autojs.autojs.ui.edit.editor.ace.font.FontStore.installedFonts.lambda.0..inlined.sortedBy.1:1
//org.autojs.autojs.ui.edit.editor.ace.font.FontStore.recoverFromFontFiles..inlined.sortedByDescending.1:1
//org.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetector.detect..inlined.compareByDescending.1:1
//org.autojs.autojs.ui.edit.editor.encoding.EditorEncodingDetector.detect..inlined.thenByDescending.1:1
//org.autojs.autojs.ui.edit.editor.encoding.EditorEncodingRiskEvaluator.evaluate..inlined.compareByDescending.1:1
//org.autojs.autojs.ui.edit.editor.encoding.EditorEncodingRiskEvaluator.evaluate..inlined.thenBy.1:1
//org.autojs.autojs.ui.edit.editor.encoding.EditorEncodingRiskEvaluator.evaluate..inlined.thenBy.2:1
//org.autojs.autojs.ui.edit.editor.encoding.EditorEncodingRiskEvaluator.evaluate..inlined.thenByDescending.1:1
//org.autojs.autojs.ui.edit.editor.service.EditorFileService.EmergencyDraftStore.cleanupLocked..inlined.sortedByDescending.1:1
//org.autojs.autojs.ui.edit.keyboard.AceActionHistoryStore.persistRoot..inlined.sortedBy.1:1
//org.autojs.autojs.ui.edit.theme.ColorThemeGenerator.generate..inlined.compareBy.1:1
//org.autojs.autojs.ui.edit.theme.ColorThemeGenerator.generate..inlined.thenBy.1:1
//org.autojs.autojs.ui.edit.theme.ColorThemeGenerator.generate..inlined.thenByDescending.1:1
//org.autojs.autojs.ui.edit.toolbar.ToolbarFragment:1
//org.autojs.autojs.ui.floating.LayoutFloatyWindow.switchWindow.lambda.1..inlined.compareBy.1:1
//org.autojs.autojs.ui.fragment.BaseViewBindingFragment:1
//org.autojs.autojs.ui.main.scripts.AndroidPackageArchiveInspector.chooseBase..inlined.sortedBy.1:1
//org.autojs.autojs.ui.main.scripts.BundletoolTocDecoder.Toc.select..inlined.compareBy.1:1
//org.autojs.autojs.ui.main.scripts.BundletoolTocDecoder.Toc.select..inlined.thenBy.1:1
//org.autojs.autojs.ui.main.scripts.BundletoolTocDecoder.Toc.select..inlined.thenBy.2:1
//org.autojs.autojs.ui.main.scripts.BundletoolTocDecoder.Toc.select.lambda.19..inlined.sortedBy.1:1
//org.autojs.autojs.ui.main.scripts.BundletoolTocDecoder.Toc.selectSplitModules.lambda.0..inlined.compareByDescending.1:1
//org.autojs.autojs.ui.main.scripts.BundletoolTocDecoder.Toc.selectSplitModules.lambda.0..inlined.thenBy.1:1
//org.autojs.autojs.ui.main.scripts.BundletoolTocDecoder.Toc.selectStandaloneModules.lambda.0..inlined.compareByDescending.1:1
//org.autojs.autojs.ui.main.scripts.BundletoolTocDecoder.Toc.selectStandaloneModules.lambda.0..inlined.thenBy.1:1
//org.autojs.autojs.ui.main.scripts.BundletoolTocDecoder.ValueAlternatives:1
//org.autojs.autojs.ui.settings.DexCompilerPreference.discoverEligibleCandidates..inlined.compareBy.1:1
//org.autojs.autojs.ui.settings.DexCompilerPreference.discoverEligibleCandidates..inlined.thenBy.1:1
//org.autojs.autojs.ui.settings.DisplayReleaseHistoryActivity.showCategoryFilterDialog.3.1.2.1:1
//org.autojs.autojs.ui.settings.DisplayReleaseHistoryActivity.showProcessLogs.job.1.1.1:1
//org.autojs.autojs.ui.settings.R8CompilerPreference.discoverEligibleCandidates..inlined.compareBy.1:1
//org.autojs.autojs.ui.settings.R8CompilerPreference.discoverEligibleCandidates..inlined.thenBy.1:1
//org.autojs.autojs.ui.settings.ReleaseHistoryAdapter.ReleaseHistoryViewHolder.bind..inlined.sortedByDescending.1:1
//org.autojs.autojs.ui.settings.ReleaseHistoryRepository.loadReleaseHistoryFlow.1.1.1:1
//org.autojs.autojs.ui.settings.ReleaseHistoryRepository.loadReleaseHistoryFlow.1.3.1:1
//org.autojs.autojs.ui.storage.BaseSearchSortListActivity:2
//org.autojs.autojs.ui.storage.TrashActivity.sortItems..inlined.sortedBy.1:1
//org.autojs.autojs.ui.storage.TrashActivity.sortItems..inlined.sortedBy.2:1
//org.autojs.autojs.ui.storage.TrashActivity.sortItems..inlined.sortedBy.3:1
//org.autojs.autojs.ui.storage.TrashActivity.sortItems..inlined.sortedBy.4:1
//org.autojs.autojs.ui.storage.TrashActivity.sortItems..inlined.sortedByDescending.1:1
//org.autojs.autojs.ui.storage.TrashActivity.sortItems..inlined.sortedByDescending.2:1
//org.autojs.autojs.ui.storage.VersionHistoryActivity.loadAllItemsInBackground..inlined.sortedByDescending.1:1
//org.autojs.autojs.ui.storage.VersionHistoryActivity.sortItems..inlined.compareBy.1:1
//org.autojs.autojs.ui.storage.VersionHistoryActivity.sortItems..inlined.compareByDescending.1:1
//org.autojs.autojs.ui.storage.VersionHistoryActivity.sortItems..inlined.sortedBy.1:1
//org.autojs.autojs.ui.storage.VersionHistoryActivity.sortItems..inlined.sortedBy.2:1
//org.autojs.autojs.ui.storage.VersionHistoryActivity.sortItems..inlined.sortedBy.3:1
//org.autojs.autojs.ui.storage.VersionHistoryActivity.sortItems..inlined.sortedByDescending.1:1
//org.autojs.autojs.ui.storage.VersionHistoryActivity.sortItems..inlined.thenBy.1:1
//org.autojs.autojs.ui.storage.VersionHistoryActivity.sortItems..inlined.thenBy.2:1
//org.autojs.autojs.ui.widget.AutoAdapter:1
//org.autojs.autojs.ui.widget.BindableViewHolder:1
//org.autojs.autojs.ui.widget.SimpleRecyclerViewAdapter:2
//org.autojs.autojs.ui.widget.SimpleRecyclerViewAdapter.ViewHolderFactory:1
//org.autojs.autojs.ui.widget.ViewHolderMutableAdapter:1
//org.autojs.autojs.ui.widget.ViewHolderSupplier:1
//org.autojs.autojs.ui.widget.ViewHolderSupplier.ViewHolderCreator:1
