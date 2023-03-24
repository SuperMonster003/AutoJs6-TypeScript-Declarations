declare module androidx {
	export module webkit {
		export class CookieManagerCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.CookieManagerCompat>;
			public static getCookieInfo(cookieManager: android.webkit.CookieManager, url: string): java.util.List<string>;
		}
	}
}

declare module androidx {
	export module webkit {
		export class DropDataContentProvider extends android.content.ContentProvider {
			public static class: java.lang.Class<androidx.webkit.DropDataContentProvider>;
			public query(param0: android.net.Uri, param1: string[], param2: string, param3: string[], param4: string): android.database.Cursor;
			public delete(param0: android.net.Uri, param1: string, param2: string[]): number;
			public query(uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string): android.database.Cursor;
			public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: string[]): number;
			public openFile(uri: android.net.Uri, mode: string): android.os.ParcelFileDescriptor;
			public constructor();
			public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
			public getType(uri: android.net.Uri): string;
			public getType(param0: android.net.Uri): string;
			public onCreate(): boolean;
			public openFile(uri: android.net.Uri, mode: string, signal: android.os.CancellationSignal): android.os.ParcelFileDescriptor;
			public query(uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string, cancellationSignal: android.os.CancellationSignal): android.database.Cursor;
			public onTrimMemory(param0: number): void;
			public update(uri: android.net.Uri, contentValues: android.content.ContentValues, s: string, strings: string[]): number;
			public onTrimMemory(level: number): void;
			public delete(uri: android.net.Uri, selection: string, selectionArgs: string[]): number;
			public call(method: string, arg: string, extras: android.os.Bundle): android.os.Bundle;
			public insert(uri: android.net.Uri, contentValues: android.content.ContentValues): android.net.Uri;
		}
	}
}

declare module androidx {
	export module webkit {
		export abstract class JavaScriptReplyProxy extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.JavaScriptReplyProxy>;
			public postMessage(param0: string): void;
			public constructor();
		}
	}
}

declare module androidx {
	export module webkit {
		export class ProcessGlobalConfig extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.ProcessGlobalConfig>;
			public static apply(config: androidx.webkit.ProcessGlobalConfig): void;
			public constructor();
			public setDataDirectorySuffix(context: android.content.Context, suffix: string): androidx.webkit.ProcessGlobalConfig;
		}
	}
}

declare module androidx {
	export module webkit {
		export class ProxyConfig extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.ProxyConfig>;
			public static MATCH_HTTP: string;
			public static MATCH_HTTPS: string;
			public static MATCH_ALL_SCHEMES: string;
			public isReverseBypassEnabled(): boolean;
			public constructor(proxyRules: java.util.List<androidx.webkit.ProxyConfig.ProxyRule>, bypassRules: java.util.List<string>, reverseBypass: boolean);
			public getProxyRules(): java.util.List<androidx.webkit.ProxyConfig.ProxyRule>;
			public getBypassRules(): java.util.List<string>;
		}
		export module ProxyConfig {
			export class Builder extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.ProxyConfig.Builder>;
				public addProxyRule(proxyUrl: string): androidx.webkit.ProxyConfig.Builder;
				public addDirect(): androidx.webkit.ProxyConfig.Builder;
				public removeImplicitRules(): androidx.webkit.ProxyConfig.Builder;
				public constructor(proxyConfig: androidx.webkit.ProxyConfig);
				public addBypassRule(bypassRule: string): androidx.webkit.ProxyConfig.Builder;
				public addProxyRule(proxyUrl: string, schemeFilter: string): androidx.webkit.ProxyConfig.Builder;
				public addDirect(schemeFilter: string): androidx.webkit.ProxyConfig.Builder;
				public bypassSimpleHostnames(): androidx.webkit.ProxyConfig.Builder;
				public setReverseBypassEnabled(reverseBypass: boolean): androidx.webkit.ProxyConfig.Builder;
				public build(): androidx.webkit.ProxyConfig;
				public constructor();
			}
			export class ProxyRule extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.ProxyConfig.ProxyRule>;
				public getSchemeFilter(): string;
				public getUrl(): string;
				public constructor(schemeFilter: string, url: string);
				public constructor(url: string);
			}
			export class ProxyScheme extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.webkit.ProxyConfig.ProxyScheme>;
				/**
				 * Constructs a new instance of the androidx.webkit.ProxyConfig$ProxyScheme interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module webkit {
		export abstract class ProxyController extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.ProxyController>;
			public clearProxyOverride(param0: java.util.concurrent.Executor, param1: java.lang.Runnable): void;
			public constructor();
			public static getInstance(): androidx.webkit.ProxyController;
			public setProxyOverride(param0: androidx.webkit.ProxyConfig, param1: java.util.concurrent.Executor, param2: java.lang.Runnable): void;
		}
		export module ProxyController {
			export class LAZY_HOLDER extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.ProxyController.LAZY_HOLDER>;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export abstract class SafeBrowsingResponseCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.SafeBrowsingResponseCompat>;
			public showInterstitial(param0: boolean): void;
			public backToSafety(param0: boolean): void;
			public constructor();
			public proceed(param0: boolean): void;
		}
	}
}

declare module androidx {
	export module webkit {
		export abstract class ScriptHandler extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.ScriptHandler>;
			public constructor();
			public remove(): void;
		}
	}
}

declare module androidx {
	export module webkit {
		export abstract class ServiceWorkerClientCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.ServiceWorkerClientCompat>;
			public constructor();
			public shouldInterceptRequest(param0: android.webkit.WebResourceRequest): android.webkit.WebResourceResponse;
		}
	}
}

declare module androidx {
	export module webkit {
		export abstract class ServiceWorkerControllerCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.ServiceWorkerControllerCompat>;
			public getServiceWorkerWebSettings(): androidx.webkit.ServiceWorkerWebSettingsCompat;
			public static getInstance(): androidx.webkit.ServiceWorkerControllerCompat;
			public setServiceWorkerClient(param0: androidx.webkit.ServiceWorkerClientCompat): void;
			public constructor();
		}
		export module ServiceWorkerControllerCompat {
			export class LAZY_HOLDER extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.ServiceWorkerControllerCompat.LAZY_HOLDER>;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export abstract class ServiceWorkerWebSettingsCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.ServiceWorkerWebSettingsCompat>;
			public getBlockNetworkLoads(): boolean;
			public setCacheMode(param0: number): void;
			public setAllowFileAccess(param0: boolean): void;
			public setBlockNetworkLoads(param0: boolean): void;
			public getRequestedWithHeaderOriginAllowList(): java.util.Set<string>;
			public setAllowContentAccess(param0: boolean): void;
			public getAllowContentAccess(): boolean;
			public constructor();
			public getAllowFileAccess(): boolean;
			public getCacheMode(): number;
			public setRequestedWithHeaderOriginAllowList(param0: java.util.Set<string>): void;
		}
		export module ServiceWorkerWebSettingsCompat {
			export class CacheMode extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.webkit.ServiceWorkerWebSettingsCompat.CacheMode>;
				/**
				 * Constructs a new instance of the androidx.webkit.ServiceWorkerWebSettingsCompat$CacheMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module webkit {
		export class TracingConfig extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.TracingConfig>;
			public static CATEGORIES_NONE: number;
			public static CATEGORIES_ALL: number;
			public static CATEGORIES_ANDROID_WEBVIEW: number;
			public static CATEGORIES_WEB_DEVELOPER: number;
			public static CATEGORIES_INPUT_LATENCY: number;
			public static CATEGORIES_RENDERING: number;
			public static CATEGORIES_JAVASCRIPT_AND_RENDERING: number;
			public static CATEGORIES_FRAME_VIEWER: number;
			public static RECORD_UNTIL_FULL: number;
			public static RECORD_CONTINUOUSLY: number;
			public constructor(predefinedCategories: number, customIncludedCategories: java.util.List<string>, tracingMode: number);
			public getCustomIncludedCategories(): java.util.List<string>;
			public getTracingMode(): number;
			public getPredefinedCategories(): number;
		}
		export module TracingConfig {
			export class Builder extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.TracingConfig.Builder>;
				public addCategories(...predefinedCategories: number[]): androidx.webkit.TracingConfig.Builder;
				public addCategories(categories: java.util.Collection<string>): androidx.webkit.TracingConfig.Builder;
				public setTracingMode(tracingMode: number): androidx.webkit.TracingConfig.Builder;
				public build(): androidx.webkit.TracingConfig;
				public addCategories(...categories: string[]): androidx.webkit.TracingConfig.Builder;
				public constructor();
			}
			export class PredefinedCategories extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.webkit.TracingConfig.PredefinedCategories>;
				/**
				 * Constructs a new instance of the androidx.webkit.TracingConfig$PredefinedCategories interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export class TracingMode extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.webkit.TracingConfig.TracingMode>;
				/**
				 * Constructs a new instance of the androidx.webkit.TracingConfig$TracingMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module webkit {
		export abstract class TracingController extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.TracingController>;
			public static getInstance(): androidx.webkit.TracingController;
			public constructor();
			public start(param0: androidx.webkit.TracingConfig): void;
			public isTracing(): boolean;
			public stop(param0: java.io.OutputStream, param1: java.util.concurrent.Executor): boolean;
		}
		export module TracingController {
			export class LAZY_HOLDER extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.TracingController.LAZY_HOLDER>;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export class WebMessageCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.WebMessageCompat>;
			public static TYPE_STRING: number;
			public static TYPE_ARRAY_BUFFER: number;
			public getType(): number;
			public getData(): string;
			public getArrayBuffer(): number[];
			public getPorts(): androidx.webkit.WebMessagePortCompat[];
			public constructor(arrayBuffer: number[], ports: androidx.webkit.WebMessagePortCompat[]);
			public constructor(data: string);
			public constructor(data: string, ports: androidx.webkit.WebMessagePortCompat[]);
			public constructor(arrayBuffer: number[]);
		}
		export module WebMessageCompat {
			export class Type extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.webkit.WebMessageCompat.Type>;
				/**
				 * Constructs a new instance of the androidx.webkit.WebMessageCompat$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module webkit {
		export abstract class WebMessagePortCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.WebMessagePortCompat>;
			public getFrameworkPort(): android.webkit.WebMessagePort;
			public getInvocationHandler(): java.lang.reflect.InvocationHandler;
			public postMessage(param0: androidx.webkit.WebMessageCompat): void;
			public setWebMessageCallback(param0: androidx.webkit.WebMessagePortCompat.WebMessageCallbackCompat): void;
			public constructor();
			public close(): void;
			public setWebMessageCallback(param0: android.os.Handler, param1: androidx.webkit.WebMessagePortCompat.WebMessageCallbackCompat): void;
		}
		export module WebMessagePortCompat {
			export abstract class WebMessageCallbackCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.WebMessagePortCompat.WebMessageCallbackCompat>;
				public onMessage(port: androidx.webkit.WebMessagePortCompat, message: androidx.webkit.WebMessageCompat): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export abstract class WebResourceErrorCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.WebResourceErrorCompat>;
			public getErrorCode(): number;
			public getDescription(): string;
			public constructor();
		}
		export module WebResourceErrorCompat {
			export class NetErrorCode extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.webkit.WebResourceErrorCompat.NetErrorCode>;
				/**
				 * Constructs a new instance of the androidx.webkit.WebResourceErrorCompat$NetErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module webkit {
		export class WebResourceRequestCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.WebResourceRequestCompat>;
			public static isRedirect(request: android.webkit.WebResourceRequest): boolean;
		}
	}
}

declare module androidx {
	export module webkit {
		export class WebSettingsCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.WebSettingsCompat>;
			public static FORCE_DARK_OFF: number;
			public static FORCE_DARK_AUTO: number;
			public static FORCE_DARK_ON: number;
			public static DARK_STRATEGY_USER_AGENT_DARKENING_ONLY: number;
			public static DARK_STRATEGY_WEB_THEME_DARKENING_ONLY: number;
			public static DARK_STRATEGY_PREFER_WEB_THEME_OVER_USER_AGENT_DARKENING: number;
			public static setEnterpriseAuthenticationAppLinkPolicyEnabled(settings: android.webkit.WebSettings, enabled: boolean): void;
			public static getOffscreenPreRaster(settings: android.webkit.WebSettings): boolean;
			public static getSafeBrowsingEnabled(settings: android.webkit.WebSettings): boolean;
			public static setDisabledActionModeMenuItems(settings: android.webkit.WebSettings, menuItems: number): void;
			public static getEnterpriseAuthenticationAppLinkPolicyEnabled(settings: android.webkit.WebSettings): boolean;
			/** @deprecated */
			public static getForceDark(settings: android.webkit.WebSettings): number;
			/** @deprecated */
			public static getForceDarkStrategy(settings: android.webkit.WebSettings): number;
			/** @deprecated */
			public static setForceDarkStrategy(settings: android.webkit.WebSettings, forceDarkBehavior: number): void;
			public static setRequestedWithHeaderOriginAllowList(settings: android.webkit.WebSettings, allowList: java.util.Set<string>): void;
			public static setWillSuppressErrorPage(settings: android.webkit.WebSettings, suppressed: boolean): void;
			/** @deprecated */
			public static setForceDark(settings: android.webkit.WebSettings, forceDarkMode: number): void;
			public static willSuppressErrorPage(settings: android.webkit.WebSettings): boolean;
			public static getDisabledActionModeMenuItems(settings: android.webkit.WebSettings): number;
			public static setSafeBrowsingEnabled(settings: android.webkit.WebSettings, enabled: boolean): void;
			public static setOffscreenPreRaster(settings: android.webkit.WebSettings, enabled: boolean): void;
			public static getRequestedWithHeaderOriginAllowList(settings: android.webkit.WebSettings): java.util.Set<string>;
			public static setAlgorithmicDarkeningAllowed(settings: android.webkit.WebSettings, allow: boolean): void;
			public static isAlgorithmicDarkeningAllowed(settings: android.webkit.WebSettings): boolean;
		}
		export module WebSettingsCompat {
			export class ForceDark extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.webkit.WebSettingsCompat.ForceDark>;
				/**
				 * Constructs a new instance of the androidx.webkit.WebSettingsCompat$ForceDark interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export class ForceDarkStrategy extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.webkit.WebSettingsCompat.ForceDarkStrategy>;
				/**
				 * Constructs a new instance of the androidx.webkit.WebSettingsCompat$ForceDarkStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export class MenuItemFlags extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.webkit.WebSettingsCompat.MenuItemFlags>;
				/**
				 * Constructs a new instance of the androidx.webkit.WebSettingsCompat$MenuItemFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module webkit {
		export class WebViewAssetLoader extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.WebViewAssetLoader>;
			public static DEFAULT_DOMAIN: string;
			public shouldInterceptRequest(url: android.net.Uri): android.webkit.WebResourceResponse;
		}
		export module WebViewAssetLoader {
			export class AssetsPathHandler extends java.lang.Object implements androidx.webkit.WebViewAssetLoader.PathHandler {
				public static class: java.lang.Class<androidx.webkit.WebViewAssetLoader.AssetsPathHandler>;
				public handle(param0: string): android.webkit.WebResourceResponse;
				public constructor(context: android.content.Context);
				public handle(path: string): android.webkit.WebResourceResponse;
			}
			export class Builder extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.WebViewAssetLoader.Builder>;
				public addPathHandler(path: string, handler: androidx.webkit.WebViewAssetLoader.PathHandler): androidx.webkit.WebViewAssetLoader.Builder;
				public setHttpAllowed(httpAllowed: boolean): androidx.webkit.WebViewAssetLoader.Builder;
				public setDomain(domain: string): androidx.webkit.WebViewAssetLoader.Builder;
				public build(): androidx.webkit.WebViewAssetLoader;
				public constructor();
			}
			export class InternalStoragePathHandler extends java.lang.Object implements androidx.webkit.WebViewAssetLoader.PathHandler {
				public static class: java.lang.Class<androidx.webkit.WebViewAssetLoader.InternalStoragePathHandler>;
				public handle(param0: string): android.webkit.WebResourceResponse;
				public handle(path: string): android.webkit.WebResourceResponse;
				public constructor(context: android.content.Context, directory: java.io.File);
			}
			export class PathHandler extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.WebViewAssetLoader.PathHandler>;
				/**
				 * Constructs a new instance of the androidx.webkit.WebViewAssetLoader$PathHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					handle(param0: string): android.webkit.WebResourceResponse;
				});
				public constructor();
				public handle(param0: string): android.webkit.WebResourceResponse;
			}
			export class PathMatcher extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.WebViewAssetLoader.PathMatcher>;
				public getSuffixPath(path: string): string;
				public match(uri: android.net.Uri): androidx.webkit.WebViewAssetLoader.PathHandler;
			}
			export class ResourcesPathHandler extends java.lang.Object implements androidx.webkit.WebViewAssetLoader.PathHandler {
				public static class: java.lang.Class<androidx.webkit.WebViewAssetLoader.ResourcesPathHandler>;
				public handle(param0: string): android.webkit.WebResourceResponse;
				public constructor(context: android.content.Context);
				public handle(path: string): android.webkit.WebResourceResponse;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export class WebViewClientCompat extends android.webkit.WebViewClient implements org.chromium.support_lib_boundary.WebViewClientBoundaryInterface {
			public static class: java.lang.Class<androidx.webkit.WebViewClientCompat>;
			public onReceivedHttpError(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: android.webkit.WebResourceResponse): void;
			public onSafeBrowsingHit(view: android.webkit.WebView, request: android.webkit.WebResourceRequest, threatType: number, handler: java.lang.reflect.InvocationHandler): void;
			public shouldOverrideUrlLoading(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest): boolean;
			public constructor();
			/** @deprecated */
			public onReceivedError(view: android.webkit.WebView, errorCode: number, description: string, failingUrl: string): void;
			public onSafeBrowsingHit(view: android.webkit.WebView, request: android.webkit.WebResourceRequest, threatType: number, response: android.webkit.SafeBrowsingResponse): void;
			public onPageCommitVisible(param0: android.webkit.WebView, param1: string): void;
			public onSafeBrowsingHit(view: android.webkit.WebView, request: android.webkit.WebResourceRequest, threatType: number, callback: androidx.webkit.SafeBrowsingResponseCompat): void;
			public onReceivedError(view: android.webkit.WebView, request: android.webkit.WebResourceRequest, error: androidx.webkit.WebResourceErrorCompat): void;
			public onReceivedError(view: android.webkit.WebView, request: android.webkit.WebResourceRequest, handler: java.lang.reflect.InvocationHandler): void;
			public onSafeBrowsingHit(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: number, param3: java.lang.reflect.InvocationHandler): void;
			public getSupportedFeatures(): string[];
			public onWebAuthnIntent(view: android.webkit.WebView, intent: android.app.PendingIntent, callback: java.lang.reflect.InvocationHandler): boolean;
			public onPageCommitVisible(view: android.webkit.WebView, url: string): void;
			public onReceivedError(view: android.webkit.WebView, request: android.webkit.WebResourceRequest, error: android.webkit.WebResourceError): void;
			public onReceivedHttpError(view: android.webkit.WebView, request: android.webkit.WebResourceRequest, errorResponse: android.webkit.WebResourceResponse): void;
			public shouldOverrideUrlLoading(view: android.webkit.WebView, request: android.webkit.WebResourceRequest): boolean;
			public onWebAuthnIntent(param0: android.webkit.WebView, param1: android.app.PendingIntent, param2: java.lang.reflect.InvocationHandler): boolean;
			/** @deprecated */
			public shouldOverrideUrlLoading(view: android.webkit.WebView, url: string): boolean;
			public onReceivedError(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: java.lang.reflect.InvocationHandler): void;
		}
		export module WebViewClientCompat {
			export class SafeBrowsingThreat extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.webkit.WebViewClientCompat.SafeBrowsingThreat>;
				/**
				 * Constructs a new instance of the androidx.webkit.WebViewClientCompat$SafeBrowsingThreat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module webkit {
		export class WebViewCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.WebViewCompat>;
			public static postWebMessage(webview: android.webkit.WebView, message: androidx.webkit.WebMessageCompat, targetOrigin: android.net.Uri): void;
			public static getWebChromeClient(webview: android.webkit.WebView): android.webkit.WebChromeClient;
			public static getCurrentLoadedWebViewPackage(): android.content.pm.PackageInfo;
			public static postVisualStateCallback(webview: android.webkit.WebView, requestId: number, param2: androidx.webkit.WebViewCompat.VisualStateCallback): void;
			public static getWebViewRenderProcessClient(webview: android.webkit.WebView): androidx.webkit.WebViewRenderProcessClient;
			public static getSafeBrowsingPrivacyPolicyUrl(): android.net.Uri;
			public static setWebViewRenderProcessClient(webview: android.webkit.WebView, executor: java.util.concurrent.Executor, webViewRenderProcessClient: androidx.webkit.WebViewRenderProcessClient): void;
			public static addWebMessageListener(webView: android.webkit.WebView, jsObjectName: string, allowedOriginRules: java.util.Set<string>, listener: androidx.webkit.WebViewCompat.WebMessageListener): void;
			public static removeWebMessageListener(webview: android.webkit.WebView, jsObjectName: string): void;
			public static setSafeBrowsingAllowlist(hosts: java.util.Set<string>, callback: android.webkit.ValueCallback<java.lang.Boolean>): void;
			/** @deprecated */
			public static setSafeBrowsingWhitelist(hosts: java.util.List<string>, callback: android.webkit.ValueCallback<java.lang.Boolean>): void;
			public static createWebMessageChannel(webview: android.webkit.WebView): androidx.webkit.WebMessagePortCompat[];
			public static getWebViewRenderProcess(webview: android.webkit.WebView): androidx.webkit.WebViewRenderProcess;
			public static getVariationsHeader(): string;
			public static startSafeBrowsing(context: android.content.Context, callback: android.webkit.ValueCallback<java.lang.Boolean>): void;
			public static getCurrentWebViewPackage(context: android.content.Context): android.content.pm.PackageInfo;
			public static getWebViewClient(webview: android.webkit.WebView): android.webkit.WebViewClient;
			public static setWebViewRenderProcessClient(webview: android.webkit.WebView, webViewRenderProcessClient: androidx.webkit.WebViewRenderProcessClient): void;
			public static addDocumentStartJavaScript(webview: android.webkit.WebView, script: string, allowedOriginRules: java.util.Set<string>): androidx.webkit.ScriptHandler;
			public static isMultiProcessEnabled(): boolean;
		}
		export module WebViewCompat {
			export class VisualStateCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.WebViewCompat.VisualStateCallback>;
				/**
				 * Constructs a new instance of the androidx.webkit.WebViewCompat$VisualStateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onComplete(param0: number): void;
				});
				public constructor();
				public onComplete(param0: number): void;
			}
			export class WebMessageListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.WebViewCompat.WebMessageListener>;
				/**
				 * Constructs a new instance of the androidx.webkit.WebViewCompat$WebMessageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPostMessage(param0: android.webkit.WebView, param1: androidx.webkit.WebMessageCompat, param2: android.net.Uri, param3: boolean, param4: androidx.webkit.JavaScriptReplyProxy): void;
				});
				public constructor();
				public onPostMessage(param0: android.webkit.WebView, param1: androidx.webkit.WebMessageCompat, param2: android.net.Uri, param3: boolean, param4: androidx.webkit.JavaScriptReplyProxy): void;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export class WebViewFeature extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.WebViewFeature>;
			public static VISUAL_STATE_CALLBACK: string;
			public static OFF_SCREEN_PRERASTER: string;
			public static SAFE_BROWSING_ENABLE: string;
			public static DISABLED_ACTION_MODE_MENU_ITEMS: string;
			public static START_SAFE_BROWSING: string;
			public static SAFE_BROWSING_ALLOWLIST: string;
			public static SAFE_BROWSING_WHITELIST: string;
			public static SAFE_BROWSING_PRIVACY_POLICY_URL: string;
			public static SERVICE_WORKER_BASIC_USAGE: string;
			public static SERVICE_WORKER_CACHE_MODE: string;
			public static SERVICE_WORKER_CONTENT_ACCESS: string;
			public static SERVICE_WORKER_FILE_ACCESS: string;
			public static SERVICE_WORKER_BLOCK_NETWORK_LOADS: string;
			public static SERVICE_WORKER_SHOULD_INTERCEPT_REQUEST: string;
			public static RECEIVE_WEB_RESOURCE_ERROR: string;
			public static RECEIVE_HTTP_ERROR: string;
			public static SHOULD_OVERRIDE_WITH_REDIRECTS: string;
			public static SAFE_BROWSING_HIT: string;
			public static TRACING_CONTROLLER_BASIC_USAGE: string;
			public static WEB_RESOURCE_REQUEST_IS_REDIRECT: string;
			public static WEB_RESOURCE_ERROR_GET_DESCRIPTION: string;
			public static WEB_RESOURCE_ERROR_GET_CODE: string;
			public static SAFE_BROWSING_RESPONSE_BACK_TO_SAFETY: string;
			public static SAFE_BROWSING_RESPONSE_PROCEED: string;
			public static SAFE_BROWSING_RESPONSE_SHOW_INTERSTITIAL: string;
			public static WEB_MESSAGE_PORT_POST_MESSAGE: string;
			public static WEB_MESSAGE_PORT_CLOSE: string;
			public static WEB_MESSAGE_GET_MESSAGE_PAYLOAD: string;
			public static WEB_MESSAGE_PORT_SET_MESSAGE_CALLBACK: string;
			public static CREATE_WEB_MESSAGE_CHANNEL: string;
			public static POST_WEB_MESSAGE: string;
			public static WEB_MESSAGE_CALLBACK_ON_MESSAGE: string;
			public static GET_WEB_VIEW_CLIENT: string;
			public static GET_WEB_CHROME_CLIENT: string;
			public static GET_WEB_VIEW_RENDERER: string;
			public static WEB_VIEW_RENDERER_TERMINATE: string;
			public static WEB_VIEW_RENDERER_CLIENT_BASIC_USAGE: string;
			public static PROXY_OVERRIDE: string;
			public static SUPPRESS_ERROR_PAGE: string;
			public static MULTI_PROCESS: string;
			public static FORCE_DARK: string;
			public static FORCE_DARK_STRATEGY: string;
			public static ALGORITHMIC_DARKENING: string;
			public static WEB_MESSAGE_LISTENER: string;
			public static DOCUMENT_START_SCRIPT: string;
			public static PROXY_OVERRIDE_REVERSE_BYPASS: string;
			public static GET_VARIATIONS_HEADER: string;
			public static ENTERPRISE_AUTHENTICATION_APP_LINK_POLICY: string;
			public static GET_COOKIE_INFO: string;
			public static STARTUP_FEATURE_SET_DATA_DIRECTORY_SUFFIX: string;
			public static REQUESTED_WITH_HEADER_ALLOW_LIST: string;
			public static isFeatureSupported(feature: string): boolean;
			public static isStartupFeatureSupported(context: android.content.Context, startupFeature: string): boolean;
		}
		export module WebViewFeature {
			export class WebViewStartupFeature extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.webkit.WebViewFeature.WebViewStartupFeature>;
				/**
				 * Constructs a new instance of the androidx.webkit.WebViewFeature$WebViewStartupFeature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export class WebViewSupportFeature extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.webkit.WebViewFeature.WebViewSupportFeature>;
				/**
				 * Constructs a new instance of the androidx.webkit.WebViewFeature$WebViewSupportFeature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
	export module webkit {
		export abstract class WebViewRenderProcess extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.WebViewRenderProcess>;
			public terminate(): boolean;
			public constructor();
		}
	}
}

declare module androidx {
	export module webkit {
		export abstract class WebViewRenderProcessClient extends java.lang.Object {
			public static class: java.lang.Class<androidx.webkit.WebViewRenderProcessClient>;
			public onRenderProcessUnresponsive(param0: android.webkit.WebView, param1: androidx.webkit.WebViewRenderProcess): void;
			public onRenderProcessResponsive(param0: android.webkit.WebView, param1: androidx.webkit.WebViewRenderProcess): void;
			public constructor();
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export abstract class ApiFeature extends java.lang.Object implements androidx.webkit.internal.ConditionallySupportedFeature {
				public static class: java.lang.Class<androidx.webkit.internal.ApiFeature>;
				public isSupported(): boolean;
				public getPublicFeatureName(): string;
				public isSupportedByWebView(): boolean;
				public isSupportedByFramework(): boolean;
				public static values(): java.util.Set<androidx.webkit.internal.ApiFeature>;
				public static getWebViewApkFeaturesForTesting(): java.util.Set<string>;
			}
			export module ApiFeature {
				export class LAZY_HOLDER extends java.lang.Object {
					public static class: java.lang.Class<androidx.webkit.internal.ApiFeature.LAZY_HOLDER>;
				}
				export class M extends androidx.webkit.internal.ApiFeature {
					public static class: java.lang.Class<androidx.webkit.internal.ApiFeature.M>;
					public isSupported(): boolean;
					public isSupportedByFramework(): boolean;
					public getPublicFeatureName(): string;
				}
				export class N extends androidx.webkit.internal.ApiFeature {
					public static class: java.lang.Class<androidx.webkit.internal.ApiFeature.N>;
					public isSupported(): boolean;
					public isSupportedByFramework(): boolean;
					public getPublicFeatureName(): string;
				}
				export class NoFramework extends androidx.webkit.internal.ApiFeature {
					public static class: java.lang.Class<androidx.webkit.internal.ApiFeature.NoFramework>;
					public isSupported(): boolean;
					public isSupportedByFramework(): boolean;
					public getPublicFeatureName(): string;
				}
				export class O extends androidx.webkit.internal.ApiFeature {
					public static class: java.lang.Class<androidx.webkit.internal.ApiFeature.O>;
					public isSupported(): boolean;
					public isSupportedByFramework(): boolean;
					public getPublicFeatureName(): string;
				}
				export class O_MR1 extends androidx.webkit.internal.ApiFeature {
					public static class: java.lang.Class<androidx.webkit.internal.ApiFeature.O_MR1>;
					public isSupported(): boolean;
					public isSupportedByFramework(): boolean;
					public getPublicFeatureName(): string;
				}
				export class P extends androidx.webkit.internal.ApiFeature {
					public static class: java.lang.Class<androidx.webkit.internal.ApiFeature.P>;
					public isSupported(): boolean;
					public isSupportedByFramework(): boolean;
					public getPublicFeatureName(): string;
				}
				export class Q extends androidx.webkit.internal.ApiFeature {
					public static class: java.lang.Class<androidx.webkit.internal.ApiFeature.Q>;
					public isSupported(): boolean;
					public isSupportedByFramework(): boolean;
					public getPublicFeatureName(): string;
				}
				export class T extends androidx.webkit.internal.ApiFeature {
					public static class: java.lang.Class<androidx.webkit.internal.ApiFeature.T>;
					public isSupported(): boolean;
					public isSupportedByFramework(): boolean;
					public getPublicFeatureName(): string;
				}
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ApiHelperForLollipop extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.ApiHelperForLollipop>;
				public static getUrl(webResourceRequest: android.webkit.WebResourceRequest): android.net.Uri;
				public static isForMainFrame(webResourceRequest: android.webkit.WebResourceRequest): boolean;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ApiHelperForM extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.ApiHelperForM>;
				public static postVisualStateCallback(webView: android.webkit.WebView, requestId: number, param2: androidx.webkit.WebViewCompat.VisualStateCallback): void;
				public static setOffscreenPreRaster(webSettings: android.webkit.WebSettings, b: boolean): void;
				public static getDescription(webResourceError: android.webkit.WebResourceError): string;
				public static postWebMessage(webView: android.webkit.WebView, message: android.webkit.WebMessage, targetOrigin: android.net.Uri): void;
				public static postMessage(webMessagePort: android.webkit.WebMessagePort, webMessage: android.webkit.WebMessage): void;
				public static setWebMessageCallback(frameworksImpl: android.webkit.WebMessagePort, callback: androidx.webkit.WebMessagePortCompat.WebMessageCallbackCompat): void;
				public static createWebMessage(message: androidx.webkit.WebMessageCompat): android.webkit.WebMessage;
				public static close(webMessagePort: android.webkit.WebMessagePort): void;
				public static setWebMessageCallback(frameworksImpl: android.webkit.WebMessagePort, callback: androidx.webkit.WebMessagePortCompat.WebMessageCallbackCompat, handler: android.os.Handler): void;
				public static getErrorCode(webResourceError: android.webkit.WebResourceError): number;
				public static createWebMessageChannel(webView: android.webkit.WebView): android.webkit.WebMessagePort[];
				public static createWebMessageCompat(webMessage: android.webkit.WebMessage): androidx.webkit.WebMessageCompat;
				public static getOffscreenPreRaster(webSettings: android.webkit.WebSettings): boolean;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ApiHelperForN extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.ApiHelperForN>;
				public static setCacheMode(serviceWorkerWebSettings: android.webkit.ServiceWorkerWebSettings, cacheMode: number): void;
				public static setBlockNetworkLoads(serviceWorkerWebSettings: android.webkit.ServiceWorkerWebSettings, blockNetworkLoads: boolean): void;
				public static getCacheMode(serviceWorkerWebSettings: android.webkit.ServiceWorkerWebSettings): number;
				public static getAllowContentAccess(serviceWorkerWebSettings: android.webkit.ServiceWorkerWebSettings): boolean;
				public static getServiceWorkerWebSettings(serviceWorkerController: android.webkit.ServiceWorkerController): android.webkit.ServiceWorkerWebSettings;
				public static setAllowFileAccess(serviceWorkerWebSettings: android.webkit.ServiceWorkerWebSettings, allowFileAccess: boolean): void;
				public static setServiceWorkerClientCompat(serviceWorkerController: android.webkit.ServiceWorkerController, serviceWorkerClientCompat: androidx.webkit.ServiceWorkerClientCompat): void;
				public static getAllowFileAccess(serviceWorkerWebSettings: android.webkit.ServiceWorkerWebSettings): boolean;
				public static getServiceWorkerWebSettingsImpl(serviceWorkerController: android.webkit.ServiceWorkerController): androidx.webkit.internal.ServiceWorkerWebSettingsImpl;
				public static getBlockNetworkLoads(serviceWorkerWebSettings: android.webkit.ServiceWorkerWebSettings): boolean;
				public static setServiceWorkerClient(serviceWorkerController: android.webkit.ServiceWorkerController, serviceWorkerClient: android.webkit.ServiceWorkerClient): void;
				public static isRedirect(webResourceRequest: android.webkit.WebResourceRequest): boolean;
				public static getServiceWorkerControllerInstance(): android.webkit.ServiceWorkerController;
				public static getDataDir(context: android.content.Context): java.io.File;
				public static getDisabledActionModeMenuItems(webSettings: android.webkit.WebSettings): number;
				public static setAllowContentAccess(serviceWorkerWebSettings: android.webkit.ServiceWorkerWebSettings, allowContentAccess: boolean): void;
				public static setDisabledActionModeMenuItems(webSettings: android.webkit.WebSettings, i: number): void;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ApiHelperForO extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.ApiHelperForO>;
				public static setSafeBrowsingEnabled(webSettings: android.webkit.WebSettings, b: boolean): void;
				public static getWebViewClient(webView: android.webkit.WebView): android.webkit.WebViewClient;
				public static getCurrentWebViewPackage(): android.content.pm.PackageInfo;
				public static getSafeBrowsingEnabled(webSettings: android.webkit.WebSettings): boolean;
				public static getWebChromeClient(webView: android.webkit.WebView): android.webkit.WebChromeClient;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ApiHelperForOMR1 extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.ApiHelperForOMR1>;
				public static getSafeBrowsingPrivacyPolicyUrl(): android.net.Uri;
				public static startSafeBrowsing(context: android.content.Context, callback: android.webkit.ValueCallback<java.lang.Boolean>): void;
				public static setSafeBrowsingWhitelist(hosts: java.util.List<string>, callback: android.webkit.ValueCallback<java.lang.Boolean>): void;
				public static showInterstitial(safeBrowsingResponse: android.webkit.SafeBrowsingResponse, showInterstitial: boolean): void;
				public static proceed(frameworksImpl: android.webkit.SafeBrowsingResponse, proceed: boolean): void;
				public static backToSafety(safeBrowsingResponse: android.webkit.SafeBrowsingResponse, backToSafety: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ApiHelperForP extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.ApiHelperForP>;
				public static getTracingControllerInstance(): android.webkit.TracingController;
				public static start(tracingController: android.webkit.TracingController, tracingConfig: androidx.webkit.TracingConfig): void;
				public static getWebViewClassLoader(): java.lang.ClassLoader;
				public static getWebViewLooper(webView: android.webkit.WebView): android.os.Looper;
				public static stop(tracingController: android.webkit.TracingController, os: java.io.OutputStream, ex: java.util.concurrent.Executor): boolean;
				public static setDataDirectorySuffix(suffix: string): void;
				public static isTracing(tracingController: android.webkit.TracingController): boolean;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ApiHelperForQ extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.ApiHelperForQ>;
				public static setWebViewRenderProcessClient(webView: android.webkit.WebView, executor: java.util.concurrent.Executor, client: androidx.webkit.WebViewRenderProcessClient): void;
				public static setWebViewRenderProcessClient(webView: android.webkit.WebView, client: androidx.webkit.WebViewRenderProcessClient): void;
				public static getWebViewRenderProcessClient(webView: android.webkit.WebView): android.webkit.WebViewRenderProcessClient;
				public static getWebViewRenderProcess(webView: android.webkit.WebView): android.webkit.WebViewRenderProcess;
				/** @deprecated */
				public static getForceDark(webSettings: android.webkit.WebSettings): number;
				/** @deprecated */
				public static setForceDark(webSettings: android.webkit.WebSettings, forceDark: number): void;
				public static terminate(webViewRenderProcess: android.webkit.WebViewRenderProcess): boolean;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ApiHelperForTiramisu extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.ApiHelperForTiramisu>;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class AssetHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.AssetHelper>;
				public static DEFAULT_MIME_TYPE: string;
				public constructor(context: android.content.Context);
				public static openFile(file: java.io.File): java.io.InputStream;
				public static guessMimeType(filePath: string): string;
				public openResource(path: string): java.io.InputStream;
				public openAsset(path: string): java.io.InputStream;
				public static getDataDir(context: android.content.Context): java.io.File;
				public static getCanonicalFileIfChild(parent: java.io.File, child: string): java.io.File;
				public static getCanonicalDirPath(file: java.io.File): string;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ConditionallySupportedFeature extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.ConditionallySupportedFeature>;
				/**
				 * Constructs a new instance of the androidx.webkit.internal.ConditionallySupportedFeature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPublicFeatureName(): string;
					isSupported(): boolean;
				});
				public constructor();
				public isSupported(): boolean;
				public getPublicFeatureName(): string;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class CookieManagerAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.CookieManagerAdapter>;
				public getCookieInfo(url: string): java.util.List<string>;
				public constructor(boundaryInterface: org.chromium.support_lib_boundary.WebViewCookieManagerBoundaryInterface);
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class FrameworkServiceWorkerClient extends android.webkit.ServiceWorkerClient {
				public static class: java.lang.Class<androidx.webkit.internal.FrameworkServiceWorkerClient>;
				public constructor(impl: androidx.webkit.ServiceWorkerClientCompat);
				public shouldInterceptRequest(request: android.webkit.WebResourceRequest): android.webkit.WebResourceResponse;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class IncompatibleApkWebViewProviderFactory extends java.lang.Object implements androidx.webkit.internal.WebViewProviderFactory {
				public static class: java.lang.Class<androidx.webkit.internal.IncompatibleApkWebViewProviderFactory>;
				public getProxyController(): org.chromium.support_lib_boundary.ProxyControllerBoundaryInterface;
				public getWebViewFeatures(): string[];
				public getServiceWorkerController(): org.chromium.support_lib_boundary.ServiceWorkerControllerBoundaryInterface;
				public getTracingController(): org.chromium.support_lib_boundary.TracingControllerBoundaryInterface;
				public getStatics(): org.chromium.support_lib_boundary.StaticsBoundaryInterface;
				public getDropDataProvider(): org.chromium.support_lib_boundary.DropDataContentProviderBoundaryInterface;
				public getWebkitToCompatConverter(): org.chromium.support_lib_boundary.WebkitToCompatConverterBoundaryInterface;
				public createWebView(webview: android.webkit.WebView): org.chromium.support_lib_boundary.WebViewProviderBoundaryInterface;
				public createWebView(param0: android.webkit.WebView): org.chromium.support_lib_boundary.WebViewProviderBoundaryInterface;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class JavaScriptReplyProxyImpl extends androidx.webkit.JavaScriptReplyProxy {
				public static class: java.lang.Class<androidx.webkit.internal.JavaScriptReplyProxyImpl>;
				public postMessage(param0: string): void;
				public postMessage(message: string): void;
				public constructor(boundaryInterface: org.chromium.support_lib_boundary.JsReplyProxyBoundaryInterface);
				public static forInvocationHandler(invocationHandler: java.lang.reflect.InvocationHandler): androidx.webkit.internal.JavaScriptReplyProxyImpl;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ProxyControllerImpl extends androidx.webkit.ProxyController {
				public static class: java.lang.Class<androidx.webkit.internal.ProxyControllerImpl>;
				public setProxyOverride(proxyConfig: androidx.webkit.ProxyConfig, executor: java.util.concurrent.Executor, listener: java.lang.Runnable): void;
				public clearProxyOverride(param0: java.util.concurrent.Executor, param1: java.lang.Runnable): void;
				public setProxyOverride(param0: androidx.webkit.ProxyConfig, param1: java.util.concurrent.Executor, param2: java.lang.Runnable): void;
				public clearProxyOverride(executor: java.util.concurrent.Executor, listener: java.lang.Runnable): void;
				public static proxyRulesToStringArray(proxyRuleList: java.util.List<androidx.webkit.ProxyConfig.ProxyRule>): string[][];
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class SafeBrowsingResponseImpl extends androidx.webkit.SafeBrowsingResponseCompat {
				public static class: java.lang.Class<androidx.webkit.internal.SafeBrowsingResponseImpl>;
				public showInterstitial(allowReporting: boolean): void;
				public proceed(report: boolean): void;
				public constructor(invocationHandler: java.lang.reflect.InvocationHandler);
				public backToSafety(param0: boolean): void;
				public proceed(param0: boolean): void;
				public showInterstitial(param0: boolean): void;
				public constructor(response: android.webkit.SafeBrowsingResponse);
				public backToSafety(report: boolean): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ScriptHandlerImpl extends androidx.webkit.ScriptHandler {
				public static class: java.lang.Class<androidx.webkit.internal.ScriptHandlerImpl>;
				public remove(): void;
				public static toScriptHandler(invocationHandler: java.lang.reflect.InvocationHandler): androidx.webkit.internal.ScriptHandlerImpl;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ServiceWorkerClientAdapter extends java.lang.Object implements org.chromium.support_lib_boundary.ServiceWorkerClientBoundaryInterface {
				public static class: java.lang.Class<androidx.webkit.internal.ServiceWorkerClientAdapter>;
				public constructor(client: androidx.webkit.ServiceWorkerClientCompat);
				public shouldInterceptRequest(param0: android.webkit.WebResourceRequest): android.webkit.WebResourceResponse;
				public shouldInterceptRequest(request: android.webkit.WebResourceRequest): android.webkit.WebResourceResponse;
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ServiceWorkerControllerImpl extends androidx.webkit.ServiceWorkerControllerCompat {
				public static class: java.lang.Class<androidx.webkit.internal.ServiceWorkerControllerImpl>;
				public getServiceWorkerWebSettings(): androidx.webkit.ServiceWorkerWebSettingsCompat;
				public setServiceWorkerClient(client: androidx.webkit.ServiceWorkerClientCompat): void;
				public constructor();
				public setServiceWorkerClient(param0: androidx.webkit.ServiceWorkerClientCompat): void;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class ServiceWorkerWebSettingsImpl extends androidx.webkit.ServiceWorkerWebSettingsCompat {
				public static class: java.lang.Class<androidx.webkit.internal.ServiceWorkerWebSettingsImpl>;
				public constructor(settings: android.webkit.ServiceWorkerWebSettings);
				public constructor(invocationHandler: java.lang.reflect.InvocationHandler);
				public setCacheMode(mode: number): void;
				public setAllowContentAccess(param0: boolean): void;
				public setRequestedWithHeaderOriginAllowList(param0: java.util.Set<string>): void;
				public setAllowFileAccess(allow: boolean): void;
				public setBlockNetworkLoads(param0: boolean): void;
				public setRequestedWithHeaderOriginAllowList(allowList: java.util.Set<string>): void;
				public getAllowFileAccess(): boolean;
				public getBlockNetworkLoads(): boolean;
				public constructor();
				public setCacheMode(param0: number): void;
				public getAllowContentAccess(): boolean;
				public getRequestedWithHeaderOriginAllowList(): java.util.Set<string>;
				public setBlockNetworkLoads(flag: boolean): void;
				public getCacheMode(): number;
				public setAllowFileAccess(param0: boolean): void;
				public setAllowContentAccess(allow: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export abstract class StartupApiFeature extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.StartupApiFeature>;
				public static METADATA_HOLDER_SERVICE_NAME: string;
				public isSupportedByWebView(context: android.content.Context): boolean;
				public getPublicFeatureName(): string;
				public isSupportedByFramework(): boolean;
				public isSupported(context: android.content.Context): boolean;
				public static values(): java.util.Set<androidx.webkit.internal.StartupApiFeature>;
			}
			export module StartupApiFeature {
				export class P extends androidx.webkit.internal.StartupApiFeature {
					public static class: java.lang.Class<androidx.webkit.internal.StartupApiFeature.P>;
					public isSupportedByFramework(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class StartupFeatures extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.StartupFeatures>;
				public static STARTUP_FEATURE_SET_DATA_DIRECTORY_SUFFIX: string;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class TracingControllerImpl extends androidx.webkit.TracingController {
				public static class: java.lang.Class<androidx.webkit.internal.TracingControllerImpl>;
				public isTracing(): boolean;
				public stop(param0: java.io.OutputStream, param1: java.util.concurrent.Executor): boolean;
				public start(param0: androidx.webkit.TracingConfig): void;
				public start(tracingConfig: androidx.webkit.TracingConfig): void;
				public stop(outputStream: java.io.OutputStream, executor: java.util.concurrent.Executor): boolean;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class VisualStateCallbackAdapter extends java.lang.Object implements org.chromium.support_lib_boundary.VisualStateCallbackBoundaryInterface {
				public static class: java.lang.Class<androidx.webkit.internal.VisualStateCallbackAdapter>;
				public constructor(visualStateCallback: androidx.webkit.WebViewCompat.VisualStateCallback);
				public onComplete(param0: number): void;
				public onComplete(requestId: number): void;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebMessageAdapter extends java.lang.Object implements org.chromium.support_lib_boundary.WebMessageBoundaryInterface {
				public static class: java.lang.Class<androidx.webkit.internal.WebMessageAdapter>;
				public constructor(webMessage: androidx.webkit.WebMessageCompat);
				public getPorts(): java.lang.reflect.InvocationHandler[];
				public getMessagePayload(): java.lang.reflect.InvocationHandler;
				public static webMessageCompatFromBoundaryInterface(boundaryInterface: org.chromium.support_lib_boundary.WebMessageBoundaryInterface): androidx.webkit.WebMessageCompat;
				public static isMessagePayloadTypeSupportedByWebView(type: number): boolean;
				/** @deprecated */
				public getData(): string;
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebMessageCallbackAdapter extends java.lang.Object implements org.chromium.support_lib_boundary.WebMessageCallbackBoundaryInterface {
				public static class: java.lang.Class<androidx.webkit.internal.WebMessageCallbackAdapter>;
				public onMessage(param0: java.lang.reflect.InvocationHandler, param1: java.lang.reflect.InvocationHandler): void;
				public onMessage(port: java.lang.reflect.InvocationHandler, message: java.lang.reflect.InvocationHandler): void;
				public constructor(impl: androidx.webkit.WebMessagePortCompat.WebMessageCallbackCompat);
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebMessageListenerAdapter extends java.lang.Object implements org.chromium.support_lib_boundary.WebMessageListenerBoundaryInterface {
				public static class: java.lang.Class<androidx.webkit.internal.WebMessageListenerAdapter>;
				public onPostMessage(view: android.webkit.WebView, message: java.lang.reflect.InvocationHandler, sourceOrigin: android.net.Uri, isMainFrame: boolean, replyProxy: java.lang.reflect.InvocationHandler): void;
				public onPostMessage(param0: android.webkit.WebView, param1: java.lang.reflect.InvocationHandler, param2: android.net.Uri, param3: boolean, param4: java.lang.reflect.InvocationHandler): void;
				public constructor(webMessageListener: androidx.webkit.WebViewCompat.WebMessageListener);
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebMessagePayloadAdapter extends java.lang.Object implements org.chromium.support_lib_boundary.WebMessagePayloadBoundaryInterface {
				public static class: java.lang.Class<androidx.webkit.internal.WebMessagePayloadAdapter>;
				public getAsArrayBuffer(): number[];
				public getType(): number;
				public constructor(webMessageCompat: androidx.webkit.WebMessageCompat);
				public getAsString(): string;
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebMessagePortImpl extends androidx.webkit.WebMessagePortCompat {
				public static class: java.lang.Class<androidx.webkit.internal.WebMessagePortImpl>;
				public close(): void;
				public constructor(invocationHandler: java.lang.reflect.InvocationHandler);
				public constructor(frameworksImpl: android.webkit.WebMessagePort);
				public constructor();
				public setWebMessageCallback(param0: android.os.Handler, param1: androidx.webkit.WebMessagePortCompat.WebMessageCallbackCompat): void;
				public postMessage(message: androidx.webkit.WebMessageCompat): void;
				public setWebMessageCallback(handler: android.os.Handler, callback: androidx.webkit.WebMessagePortCompat.WebMessageCallbackCompat): void;
				public static compatToPorts(compatPorts: androidx.webkit.WebMessagePortCompat[]): android.webkit.WebMessagePort[];
				public static compatToFrameworkMessage(message: androidx.webkit.WebMessageCompat): android.webkit.WebMessage;
				public setWebMessageCallback(callback: androidx.webkit.WebMessagePortCompat.WebMessageCallbackCompat): void;
				public getFrameworkPort(): android.webkit.WebMessagePort;
				public static portsToCompat(ports: android.webkit.WebMessagePort[]): androidx.webkit.WebMessagePortCompat[];
				public static frameworkMessageToCompat(message: android.webkit.WebMessage): androidx.webkit.WebMessageCompat;
				public postMessage(param0: androidx.webkit.WebMessageCompat): void;
				public setWebMessageCallback(param0: androidx.webkit.WebMessagePortCompat.WebMessageCallbackCompat): void;
				public getInvocationHandler(): java.lang.reflect.InvocationHandler;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebResourceErrorImpl extends androidx.webkit.WebResourceErrorCompat {
				public static class: java.lang.Class<androidx.webkit.internal.WebResourceErrorImpl>;
				public constructor(invocationHandler: java.lang.reflect.InvocationHandler);
				public constructor(error: android.webkit.WebResourceError);
				public getDescription(): string;
				public getErrorCode(): number;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebResourceRequestAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.WebResourceRequestAdapter>;
				public isRedirect(): boolean;
				public constructor(boundaryInterface: org.chromium.support_lib_boundary.WebResourceRequestBoundaryInterface);
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebSettingsAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.WebSettingsAdapter>;
				public getSafeBrowsingEnabled(): boolean;
				public setSafeBrowsingEnabled(enabled: boolean): void;
				public getForceDark(): number;
				public setEnterpriseAuthenticationAppLinkPolicyEnabled(enabled: boolean): void;
				public setWillSuppressErrorPage(suppressed: boolean): void;
				public getForceDarkStrategy(): number;
				public setRequestedWithHeaderOriginAllowList(allowList: java.util.Set<string>): void;
				public getOffscreenPreRaster(): boolean;
				public constructor(boundaryInterface: org.chromium.support_lib_boundary.WebSettingsBoundaryInterface);
				public setDisabledActionModeMenuItems(menuItems: number): void;
				public setForceDarkStrategy(forceDarkStrategy: number): void;
				public getDisabledActionModeMenuItems(): number;
				public getRequestedWithHeaderOriginAllowList(): java.util.Set<string>;
				public isAlgorithmicDarkeningAllowed(): boolean;
				public setOffscreenPreRaster(enabled: boolean): void;
				public setForceDark(forceDarkMode: number): void;
				public willSuppressErrorPage(): boolean;
				public setAlgorithmicDarkeningAllowed(allow: boolean): void;
				public getEnterpriseAuthenticationAppLinkPolicyEnabled(): boolean;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebViewFeatureInternal extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.WebViewFeatureInternal>;
				public static VISUAL_STATE_CALLBACK: androidx.webkit.internal.ApiFeature.M;
				public static OFF_SCREEN_PRERASTER: androidx.webkit.internal.ApiFeature.M;
				public static SAFE_BROWSING_ENABLE: androidx.webkit.internal.ApiFeature.O;
				public static DISABLED_ACTION_MODE_MENU_ITEMS: androidx.webkit.internal.ApiFeature.N;
				public static START_SAFE_BROWSING: androidx.webkit.internal.ApiFeature.O_MR1;
				public static SAFE_BROWSING_ALLOWLIST_DEPRECATED_TO_DEPRECATED: androidx.webkit.internal.ApiFeature.O_MR1;
				public static SAFE_BROWSING_ALLOWLIST_DEPRECATED_TO_PREFERRED: androidx.webkit.internal.ApiFeature.O_MR1;
				public static SAFE_BROWSING_ALLOWLIST_PREFERRED_TO_DEPRECATED: androidx.webkit.internal.ApiFeature.O_MR1;
				public static SAFE_BROWSING_ALLOWLIST_PREFERRED_TO_PREFERRED: androidx.webkit.internal.ApiFeature.O_MR1;
				public static SAFE_BROWSING_PRIVACY_POLICY_URL: androidx.webkit.internal.ApiFeature.O_MR1;
				public static SERVICE_WORKER_BASIC_USAGE: androidx.webkit.internal.ApiFeature.N;
				public static SERVICE_WORKER_CACHE_MODE: androidx.webkit.internal.ApiFeature.N;
				public static SERVICE_WORKER_CONTENT_ACCESS: androidx.webkit.internal.ApiFeature.N;
				public static SERVICE_WORKER_FILE_ACCESS: androidx.webkit.internal.ApiFeature.N;
				public static SERVICE_WORKER_BLOCK_NETWORK_LOADS: androidx.webkit.internal.ApiFeature.N;
				public static SERVICE_WORKER_SHOULD_INTERCEPT_REQUEST: androidx.webkit.internal.ApiFeature.N;
				public static RECEIVE_WEB_RESOURCE_ERROR: androidx.webkit.internal.ApiFeature.M;
				public static RECEIVE_HTTP_ERROR: androidx.webkit.internal.ApiFeature.M;
				public static SHOULD_OVERRIDE_WITH_REDIRECTS: androidx.webkit.internal.ApiFeature.N;
				public static SAFE_BROWSING_HIT: androidx.webkit.internal.ApiFeature.O_MR1;
				public static WEB_RESOURCE_REQUEST_IS_REDIRECT: androidx.webkit.internal.ApiFeature.N;
				public static WEB_RESOURCE_ERROR_GET_DESCRIPTION: androidx.webkit.internal.ApiFeature.M;
				public static WEB_RESOURCE_ERROR_GET_CODE: androidx.webkit.internal.ApiFeature.M;
				public static SAFE_BROWSING_RESPONSE_BACK_TO_SAFETY: androidx.webkit.internal.ApiFeature.O_MR1;
				public static SAFE_BROWSING_RESPONSE_PROCEED: androidx.webkit.internal.ApiFeature.O_MR1;
				public static SAFE_BROWSING_RESPONSE_SHOW_INTERSTITIAL: androidx.webkit.internal.ApiFeature.O_MR1;
				public static WEB_MESSAGE_PORT_POST_MESSAGE: androidx.webkit.internal.ApiFeature.M;
				public static WEB_MESSAGE_PORT_CLOSE: androidx.webkit.internal.ApiFeature.M;
				public static WEB_MESSAGE_GET_MESSAGE_PAYLOAD: androidx.webkit.internal.ApiFeature.NoFramework;
				public static WEB_MESSAGE_PORT_SET_MESSAGE_CALLBACK: androidx.webkit.internal.ApiFeature.M;
				public static CREATE_WEB_MESSAGE_CHANNEL: androidx.webkit.internal.ApiFeature.M;
				public static POST_WEB_MESSAGE: androidx.webkit.internal.ApiFeature.M;
				public static WEB_MESSAGE_CALLBACK_ON_MESSAGE: androidx.webkit.internal.ApiFeature.M;
				public static GET_WEB_VIEW_CLIENT: androidx.webkit.internal.ApiFeature.O;
				public static GET_WEB_CHROME_CLIENT: androidx.webkit.internal.ApiFeature.O;
				public static GET_WEB_VIEW_RENDERER: androidx.webkit.internal.ApiFeature.Q;
				public static WEB_VIEW_RENDERER_TERMINATE: androidx.webkit.internal.ApiFeature.Q;
				public static TRACING_CONTROLLER_BASIC_USAGE: androidx.webkit.internal.ApiFeature.P;
				public static STARTUP_FEATURE_SET_DATA_DIRECTORY_SUFFIX: androidx.webkit.internal.StartupApiFeature.P;
				public static WEB_VIEW_RENDERER_CLIENT_BASIC_USAGE: androidx.webkit.internal.ApiFeature.Q;
				public static ALGORITHMIC_DARKENING: androidx.webkit.internal.ApiFeature.T;
				public static PROXY_OVERRIDE: androidx.webkit.internal.ApiFeature.NoFramework;
				public static SUPPRESS_ERROR_PAGE: androidx.webkit.internal.ApiFeature.NoFramework;
				public static MULTI_PROCESS: androidx.webkit.internal.ApiFeature.NoFramework;
				public static FORCE_DARK: androidx.webkit.internal.ApiFeature.Q;
				public static FORCE_DARK_STRATEGY: androidx.webkit.internal.ApiFeature.NoFramework;
				public static WEB_MESSAGE_LISTENER: androidx.webkit.internal.ApiFeature.NoFramework;
				public static DOCUMENT_START_SCRIPT: androidx.webkit.internal.ApiFeature.NoFramework;
				public static PROXY_OVERRIDE_REVERSE_BYPASS: androidx.webkit.internal.ApiFeature.NoFramework;
				public static GET_VARIATIONS_HEADER: androidx.webkit.internal.ApiFeature.NoFramework;
				public static ENTERPRISE_AUTHENTICATION_APP_LINK_POLICY: androidx.webkit.internal.ApiFeature.NoFramework;
				public static GET_COOKIE_INFO: androidx.webkit.internal.ApiFeature.NoFramework;
				public static REQUESTED_WITH_HEADER_ALLOW_LIST: androidx.webkit.internal.ApiFeature.NoFramework;
				public static isSupported(publicFeatureValue: string, internalFeatures: java.util.Collection<any>): boolean;
				public static getUnsupportedOperationException(): java.lang.UnsupportedOperationException;
				public static isStartupFeatureSupported(publicFeatureValue: string, context: android.content.Context): boolean;
				public static isSupported(publicFeatureValue: string): boolean;
				public static isStartupFeatureSupported(publicFeatureValue: string, internalFeatures: java.util.Collection<androidx.webkit.internal.StartupApiFeature>, context: android.content.Context): boolean;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebViewGlueCommunicator extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.WebViewGlueCommunicator>;
				public static getWebViewClassLoader(): java.lang.ClassLoader;
				public static getCompatConverter(): androidx.webkit.internal.WebkitToCompatConverter;
				public static getFactory(): androidx.webkit.internal.WebViewProviderFactory;
			}
			export module WebViewGlueCommunicator {
				export class LAZY_COMPAT_CONVERTER_HOLDER extends java.lang.Object {
					public static class: java.lang.Class<androidx.webkit.internal.WebViewGlueCommunicator.LAZY_COMPAT_CONVERTER_HOLDER>;
				}
				export class LAZY_FACTORY_HOLDER extends java.lang.Object {
					public static class: java.lang.Class<androidx.webkit.internal.WebViewGlueCommunicator.LAZY_FACTORY_HOLDER>;
				}
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebViewProviderAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.WebViewProviderAdapter>;
				public createWebMessageChannel(): androidx.webkit.WebMessagePortCompat[];
				public setWebViewRenderProcessClient(executor: java.util.concurrent.Executor, webViewRenderProcessClient: androidx.webkit.WebViewRenderProcessClient): void;
				public getWebChromeClient(): android.webkit.WebChromeClient;
				public constructor(impl: org.chromium.support_lib_boundary.WebViewProviderBoundaryInterface);
				public getWebViewRenderProcess(): androidx.webkit.WebViewRenderProcess;
				public insertVisualStateCallback(requestId: number, param1: androidx.webkit.WebViewCompat.VisualStateCallback): void;
				public removeWebMessageListener(jsObjectName: string): void;
				public getWebViewClient(): android.webkit.WebViewClient;
				public addWebMessageListener(jsObjectName: string, allowedOriginRules: string[], listener: androidx.webkit.WebViewCompat.WebMessageListener): void;
				public addDocumentStartJavaScript(script: string, allowedOriginRules: string[]): androidx.webkit.internal.ScriptHandlerImpl;
				public postWebMessage(message: androidx.webkit.WebMessageCompat, targetOrigin: android.net.Uri): void;
				public getWebViewRenderProcessClient(): androidx.webkit.WebViewRenderProcessClient;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebViewProviderFactory extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.WebViewProviderFactory>;
				/**
				 * Constructs a new instance of the androidx.webkit.internal.WebViewProviderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createWebView(param0: android.webkit.WebView): org.chromium.support_lib_boundary.WebViewProviderBoundaryInterface;
					getWebkitToCompatConverter(): org.chromium.support_lib_boundary.WebkitToCompatConverterBoundaryInterface;
					getStatics(): org.chromium.support_lib_boundary.StaticsBoundaryInterface;
					getWebViewFeatures(): string[];
					getServiceWorkerController(): org.chromium.support_lib_boundary.ServiceWorkerControllerBoundaryInterface;
					getTracingController(): org.chromium.support_lib_boundary.TracingControllerBoundaryInterface;
					getProxyController(): org.chromium.support_lib_boundary.ProxyControllerBoundaryInterface;
					getDropDataProvider(): org.chromium.support_lib_boundary.DropDataContentProviderBoundaryInterface;
				});
				public constructor();
				public getProxyController(): org.chromium.support_lib_boundary.ProxyControllerBoundaryInterface;
				public getWebViewFeatures(): string[];
				public getServiceWorkerController(): org.chromium.support_lib_boundary.ServiceWorkerControllerBoundaryInterface;
				public getTracingController(): org.chromium.support_lib_boundary.TracingControllerBoundaryInterface;
				public getStatics(): org.chromium.support_lib_boundary.StaticsBoundaryInterface;
				public getDropDataProvider(): org.chromium.support_lib_boundary.DropDataContentProviderBoundaryInterface;
				public getWebkitToCompatConverter(): org.chromium.support_lib_boundary.WebkitToCompatConverterBoundaryInterface;
				public createWebView(param0: android.webkit.WebView): org.chromium.support_lib_boundary.WebViewProviderBoundaryInterface;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebViewProviderFactoryAdapter extends java.lang.Object implements androidx.webkit.internal.WebViewProviderFactory {
				public static class: java.lang.Class<androidx.webkit.internal.WebViewProviderFactoryAdapter>;
				public getProxyController(): org.chromium.support_lib_boundary.ProxyControllerBoundaryInterface;
				public getWebViewFeatures(): string[];
				public constructor(impl: org.chromium.support_lib_boundary.WebViewProviderFactoryBoundaryInterface);
				public getServiceWorkerController(): org.chromium.support_lib_boundary.ServiceWorkerControllerBoundaryInterface;
				public getTracingController(): org.chromium.support_lib_boundary.TracingControllerBoundaryInterface;
				public getStatics(): org.chromium.support_lib_boundary.StaticsBoundaryInterface;
				public getDropDataProvider(): org.chromium.support_lib_boundary.DropDataContentProviderBoundaryInterface;
				public getWebkitToCompatConverter(): org.chromium.support_lib_boundary.WebkitToCompatConverterBoundaryInterface;
				public createWebView(webview: android.webkit.WebView): org.chromium.support_lib_boundary.WebViewProviderBoundaryInterface;
				public createWebView(param0: android.webkit.WebView): org.chromium.support_lib_boundary.WebViewProviderBoundaryInterface;
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebViewRenderProcessClientAdapter extends java.lang.Object implements org.chromium.support_lib_boundary.WebViewRendererClientBoundaryInterface {
				public static class: java.lang.Class<androidx.webkit.internal.WebViewRenderProcessClientAdapter>;
				public onRendererUnresponsive(param0: android.webkit.WebView, param1: java.lang.reflect.InvocationHandler): void;
				public onRendererResponsive(param0: android.webkit.WebView, param1: java.lang.reflect.InvocationHandler): void;
				public onRendererUnresponsive(view: android.webkit.WebView, renderer: java.lang.reflect.InvocationHandler): void;
				public constructor(executor: java.util.concurrent.Executor, webViewRenderProcessClient: androidx.webkit.WebViewRenderProcessClient);
				public getWebViewRenderProcessClient(): androidx.webkit.WebViewRenderProcessClient;
				public onRendererResponsive(view: android.webkit.WebView, renderer: java.lang.reflect.InvocationHandler): void;
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebViewRenderProcessClientFrameworkAdapter extends android.webkit.WebViewRenderProcessClient {
				public static class: java.lang.Class<androidx.webkit.internal.WebViewRenderProcessClientFrameworkAdapter>;
				public constructor(client: androidx.webkit.WebViewRenderProcessClient);
				public getFrameworkRenderProcessClient(): androidx.webkit.WebViewRenderProcessClient;
				public onRenderProcessUnresponsive(param0: android.webkit.WebView, param1: android.webkit.WebViewRenderProcess): void;
				public onRenderProcessResponsive(param0: android.webkit.WebView, param1: android.webkit.WebViewRenderProcess): void;
				public onRenderProcessResponsive(view: android.webkit.WebView, renderer: android.webkit.WebViewRenderProcess): void;
				public onRenderProcessUnresponsive(view: android.webkit.WebView, renderer: android.webkit.WebViewRenderProcess): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebViewRenderProcessImpl extends androidx.webkit.WebViewRenderProcess {
				public static class: java.lang.Class<androidx.webkit.internal.WebViewRenderProcessImpl>;
				public constructor(frameworkRenderer: android.webkit.WebViewRenderProcess);
				public terminate(): boolean;
				public static forFrameworkObject(frameworkRenderer: android.webkit.WebViewRenderProcess): androidx.webkit.internal.WebViewRenderProcessImpl;
				public constructor(boundaryInterface: org.chromium.support_lib_boundary.WebViewRendererBoundaryInterface);
				public static forInvocationHandler(invocationHandler: java.lang.reflect.InvocationHandler): androidx.webkit.internal.WebViewRenderProcessImpl;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module webkit {
		export module internal {
			export class WebkitToCompatConverter extends java.lang.Object {
				public static class: java.lang.Class<androidx.webkit.internal.WebkitToCompatConverter>;
				public convertSafeBrowsingResponse(safeBrowsingResponse: java.lang.reflect.InvocationHandler): android.webkit.SafeBrowsingResponse;
				public convertServiceWorkerSettings(serviceWorkerSettings: java.lang.reflect.InvocationHandler): android.webkit.ServiceWorkerWebSettings;
				public convertWebMessagePort(webMessagePort: java.lang.reflect.InvocationHandler): android.webkit.WebMessagePort;
				public convertSafeBrowsingResponse(safeBrowsingResponse: android.webkit.SafeBrowsingResponse): java.lang.reflect.InvocationHandler;
				public convertWebResourceRequest(request: android.webkit.WebResourceRequest): androidx.webkit.internal.WebResourceRequestAdapter;
				public constructor(impl: org.chromium.support_lib_boundary.WebkitToCompatConverterBoundaryInterface);
				public convertSettings(webSettings: android.webkit.WebSettings): androidx.webkit.internal.WebSettingsAdapter;
				public convertWebResourceError(webResourceError: android.webkit.WebResourceError): java.lang.reflect.InvocationHandler;
				public convertWebMessagePort(webMessagePort: android.webkit.WebMessagePort): java.lang.reflect.InvocationHandler;
				public convertWebResourceError(webResourceError: java.lang.reflect.InvocationHandler): android.webkit.WebResourceError;
				public convertCookieManager(cookieManager: android.webkit.CookieManager): androidx.webkit.internal.CookieManagerAdapter;
				public convertServiceWorkerSettings(settings: android.webkit.ServiceWorkerWebSettings): java.lang.reflect.InvocationHandler;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class DropDataContentProviderBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.DropDataContentProviderBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.DropDataContentProviderBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCreate(): boolean;
					getStreamTypes(param0: android.net.Uri, param1: string): string[];
					openFile(param0: android.content.ContentProvider, param1: android.net.Uri): android.os.ParcelFileDescriptor;
					query(param0: android.net.Uri, param1: string[], param2: string, param3: string[], param4: string): android.database.Cursor;
					getType(param0: android.net.Uri): string;
					cache(param0: number[], param1: string, param2: string): android.net.Uri;
					setClearCachedDataIntervalMs(param0: number): void;
					onDragEnd(param0: boolean): void;
					call(param0: string, param1: string, param2: android.os.Bundle): android.os.Bundle;
				});
				public constructor();
				public query(param0: android.net.Uri, param1: string[], param2: string, param3: string[], param4: string): android.database.Cursor;
				public setClearCachedDataIntervalMs(param0: number): void;
				public call(param0: string, param1: string, param2: android.os.Bundle): android.os.Bundle;
				public getStreamTypes(param0: android.net.Uri, param1: string): string[];
				public onDragEnd(param0: boolean): void;
				public openFile(param0: android.content.ContentProvider, param1: android.net.Uri): android.os.ParcelFileDescriptor;
				public getType(param0: android.net.Uri): string;
				public onCreate(): boolean;
				public cache(param0: number[], param1: string, param2: string): android.net.Uri;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class FeatureFlagHolderBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.FeatureFlagHolderBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.FeatureFlagHolderBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getSupportedFeatures(): string[];
				});
				public constructor();
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class IsomorphicObjectBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.IsomorphicObjectBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.IsomorphicObjectBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getOrCreatePeer(param0: java.util.concurrent.Callable<any>): any;
				});
				public constructor();
				public getOrCreatePeer(param0: java.util.concurrent.Callable<any>): any;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class JsReplyProxyBoundaryInterface extends java.lang.Object implements org.chromium.support_lib_boundary.IsomorphicObjectBoundaryInterface {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.JsReplyProxyBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.JsReplyProxyBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					postMessage(param0: string): void;
					getOrCreatePeer(param0: java.util.concurrent.Callable<any>): any;
				});
				public constructor();
				public postMessage(param0: string): void;
				public getOrCreatePeer(param0: java.util.concurrent.Callable<any>): any;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class ProcessGlobalConfigConstants extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.ProcessGlobalConfigConstants>;
				public static DATA_DIRECTORY_SUFFIX: string;
			}
			export module ProcessGlobalConfigConstants {
				export class ProcessGlobalConfigMapKey extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.chromium.support_lib_boundary.ProcessGlobalConfigConstants.ProcessGlobalConfigMapKey>;
					/**
					 * Constructs a new instance of the org.chromium.support_lib_boundary.ProcessGlobalConfigConstants$ProcessGlobalConfigMapKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
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

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class ProxyControllerBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.ProxyControllerBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.ProxyControllerBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setProxyOverride(param0: string[][], param1: string[], param2: java.lang.Runnable, param3: java.util.concurrent.Executor): void;
					setProxyOverride(param0: string[][], param1: string[], param2: java.lang.Runnable, param3: java.util.concurrent.Executor, param4: boolean): void;
					clearProxyOverride(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void;
				});
				public constructor();
				public setProxyOverride(param0: string[][], param1: string[], param2: java.lang.Runnable, param3: java.util.concurrent.Executor): void;
				public clearProxyOverride(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void;
				public setProxyOverride(param0: string[][], param1: string[], param2: java.lang.Runnable, param3: java.util.concurrent.Executor, param4: boolean): void;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class SafeBrowsingResponseBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.SafeBrowsingResponseBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.SafeBrowsingResponseBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					showInterstitial(param0: boolean): void;
					proceed(param0: boolean): void;
					backToSafety(param0: boolean): void;
				});
				public constructor();
				public backToSafety(param0: boolean): void;
				public proceed(param0: boolean): void;
				public showInterstitial(param0: boolean): void;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class ScriptHandlerBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.ScriptHandlerBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.ScriptHandlerBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					remove(): void;
				});
				public constructor();
				public remove(): void;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class ServiceWorkerClientBoundaryInterface extends java.lang.Object implements org.chromium.support_lib_boundary.FeatureFlagHolderBoundaryInterface {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.ServiceWorkerClientBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.ServiceWorkerClientBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					shouldInterceptRequest(param0: android.webkit.WebResourceRequest): android.webkit.WebResourceResponse;
					getSupportedFeatures(): string[];
				});
				public constructor();
				public shouldInterceptRequest(param0: android.webkit.WebResourceRequest): android.webkit.WebResourceResponse;
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class ServiceWorkerControllerBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.ServiceWorkerControllerBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.ServiceWorkerControllerBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getServiceWorkerWebSettings(): java.lang.reflect.InvocationHandler;
					setServiceWorkerClient(param0: java.lang.reflect.InvocationHandler): void;
				});
				public constructor();
				public setServiceWorkerClient(param0: java.lang.reflect.InvocationHandler): void;
				public getServiceWorkerWebSettings(): java.lang.reflect.InvocationHandler;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class ServiceWorkerWebSettingsBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.ServiceWorkerWebSettingsBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.ServiceWorkerWebSettingsBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setCacheMode(param0: number): void;
					getCacheMode(): number;
					setAllowContentAccess(param0: boolean): void;
					getAllowContentAccess(): boolean;
					setAllowFileAccess(param0: boolean): void;
					getAllowFileAccess(): boolean;
					setBlockNetworkLoads(param0: boolean): void;
					getBlockNetworkLoads(): boolean;
					setRequestedWithHeaderOriginAllowList(param0: java.util.Set<string>): void;
					getRequestedWithHeaderOriginAllowList(): java.util.Set<string>;
				});
				public constructor();
				public setCacheMode(param0: number): void;
				public getAllowContentAccess(): boolean;
				public getRequestedWithHeaderOriginAllowList(): java.util.Set<string>;
				public setAllowContentAccess(param0: boolean): void;
				public setRequestedWithHeaderOriginAllowList(param0: java.util.Set<string>): void;
				public setBlockNetworkLoads(param0: boolean): void;
				public getCacheMode(): number;
				public setAllowFileAccess(param0: boolean): void;
				public getAllowFileAccess(): boolean;
				public getBlockNetworkLoads(): boolean;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class StaticsBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.StaticsBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.StaticsBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					initSafeBrowsing(param0: android.content.Context, param1: android.webkit.ValueCallback<java.lang.Boolean>): void;
					setSafeBrowsingAllowlist(param0: java.util.Set<string>, param1: android.webkit.ValueCallback<java.lang.Boolean>): void;
					setSafeBrowsingWhitelist(param0: java.util.List<string>, param1: android.webkit.ValueCallback<java.lang.Boolean>): void;
					getSafeBrowsingPrivacyPolicyUrl(): android.net.Uri;
					isMultiProcessEnabled(): boolean;
					getVariationsHeader(): string;
				});
				public constructor();
				public getSafeBrowsingPrivacyPolicyUrl(): android.net.Uri;
				public initSafeBrowsing(param0: android.content.Context, param1: android.webkit.ValueCallback<java.lang.Boolean>): void;
				public setSafeBrowsingWhitelist(param0: java.util.List<string>, param1: android.webkit.ValueCallback<java.lang.Boolean>): void;
				public getVariationsHeader(): string;
				public isMultiProcessEnabled(): boolean;
				public setSafeBrowsingAllowlist(param0: java.util.Set<string>, param1: android.webkit.ValueCallback<java.lang.Boolean>): void;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class TracingControllerBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.TracingControllerBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.TracingControllerBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isTracing(): boolean;
					start(param0: number, param1: java.util.Collection<string>, param2: number): void;
					stop(param0: java.io.OutputStream, param1: java.util.concurrent.Executor): boolean;
				});
				public constructor();
				public isTracing(): boolean;
				public start(param0: number, param1: java.util.Collection<string>, param2: number): void;
				public stop(param0: java.io.OutputStream, param1: java.util.concurrent.Executor): boolean;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class VisualStateCallbackBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.VisualStateCallbackBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.VisualStateCallbackBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onComplete(param0: number): void;
				});
				public constructor();
				public onComplete(param0: number): void;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebAuthnCallbackBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebAuthnCallbackBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebAuthnCallbackBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onResult(param0: number, param1: android.content.Intent): void;
				});
				public constructor();
				public onResult(param0: number, param1: android.content.Intent): void;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebMessageBoundaryInterface extends java.lang.Object implements org.chromium.support_lib_boundary.FeatureFlagHolderBoundaryInterface {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebMessageBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebMessageBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getData(): string;
					getMessagePayload(): java.lang.reflect.InvocationHandler;
					getPorts(): java.lang.reflect.InvocationHandler[];
					getSupportedFeatures(): string[];
				});
				public constructor();
				public getPorts(): java.lang.reflect.InvocationHandler[];
				public getMessagePayload(): java.lang.reflect.InvocationHandler;
				/** @deprecated */
				public getData(): string;
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebMessageCallbackBoundaryInterface extends java.lang.Object implements org.chromium.support_lib_boundary.FeatureFlagHolderBoundaryInterface {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebMessageCallbackBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebMessageCallbackBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onMessage(param0: java.lang.reflect.InvocationHandler, param1: java.lang.reflect.InvocationHandler): void;
					getSupportedFeatures(): string[];
				});
				public constructor();
				public onMessage(param0: java.lang.reflect.InvocationHandler, param1: java.lang.reflect.InvocationHandler): void;
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebMessageListenerBoundaryInterface extends java.lang.Object implements org.chromium.support_lib_boundary.FeatureFlagHolderBoundaryInterface {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebMessageListenerBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebMessageListenerBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPostMessage(param0: android.webkit.WebView, param1: java.lang.reflect.InvocationHandler, param2: android.net.Uri, param3: boolean, param4: java.lang.reflect.InvocationHandler): void;
					getSupportedFeatures(): string[];
				});
				public constructor();
				public onPostMessage(param0: android.webkit.WebView, param1: java.lang.reflect.InvocationHandler, param2: android.net.Uri, param3: boolean, param4: java.lang.reflect.InvocationHandler): void;
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebMessagePayloadBoundaryInterface extends java.lang.Object implements org.chromium.support_lib_boundary.FeatureFlagHolderBoundaryInterface {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebMessagePayloadBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebMessagePayloadBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getType(): number;
					getAsString(): string;
					getAsArrayBuffer(): number[];
					getSupportedFeatures(): string[];
				});
				public constructor();
				public getAsArrayBuffer(): number[];
				public getType(): number;
				public getAsString(): string;
				public getSupportedFeatures(): string[];
			}
			export module WebMessagePayloadBoundaryInterface {
				export class WebMessagePayloadType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.chromium.support_lib_boundary.WebMessagePayloadBoundaryInterface.WebMessagePayloadType>;
					/**
					 * Constructs a new instance of the org.chromium.support_lib_boundary.WebMessagePayloadBoundaryInterface$WebMessagePayloadType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static TYPE_STRING: number;
					public static TYPE_ARRAY_BUFFER: number;
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

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebMessagePortBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebMessagePortBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebMessagePortBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					postMessage(param0: java.lang.reflect.InvocationHandler): void;
					close(): void;
					setWebMessageCallback(param0: java.lang.reflect.InvocationHandler): void;
					setWebMessageCallback(param0: java.lang.reflect.InvocationHandler, param1: android.os.Handler): void;
				});
				public constructor();
				public close(): void;
				public setWebMessageCallback(param0: java.lang.reflect.InvocationHandler): void;
				public setWebMessageCallback(param0: java.lang.reflect.InvocationHandler, param1: android.os.Handler): void;
				public postMessage(param0: java.lang.reflect.InvocationHandler): void;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebResourceErrorBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebResourceErrorBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebResourceErrorBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getErrorCode(): number;
					getDescription(): string;
				});
				public constructor();
				public getDescription(): string;
				public getErrorCode(): number;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebResourceRequestBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebResourceRequestBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebResourceRequestBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isRedirect(): boolean;
				});
				public constructor();
				public isRedirect(): boolean;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebSettingsBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebSettingsBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebSettingsBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setOffscreenPreRaster(param0: boolean): void;
					getOffscreenPreRaster(): boolean;
					setSafeBrowsingEnabled(param0: boolean): void;
					getSafeBrowsingEnabled(): boolean;
					setDisabledActionModeMenuItems(param0: number): void;
					getDisabledActionModeMenuItems(): number;
					setWillSuppressErrorPage(param0: boolean): void;
					getWillSuppressErrorPage(): boolean;
					setForceDark(param0: number): void;
					getForceDark(): number;
					setAlgorithmicDarkeningAllowed(param0: boolean): void;
					isAlgorithmicDarkeningAllowed(): boolean;
					setForceDarkBehavior(param0: number): void;
					getForceDarkBehavior(): number;
					setWebAuthnSupport(param0: number): void;
					getWebAuthnSupport(): number;
					setRequestedWithHeaderOriginAllowList(param0: java.util.Set<string>): void;
					getRequestedWithHeaderOriginAllowList(): java.util.Set<string>;
					setEnterpriseAuthenticationAppLinkPolicyEnabled(param0: boolean): void;
					getEnterpriseAuthenticationAppLinkPolicyEnabled(): boolean;
				});
				public constructor();
				public getSafeBrowsingEnabled(): boolean;
				public getWebAuthnSupport(): number;
				public getWillSuppressErrorPage(): boolean;
				public getForceDark(): number;
				public setForceDarkBehavior(param0: number): void;
				public setWebAuthnSupport(param0: number): void;
				public setRequestedWithHeaderOriginAllowList(param0: java.util.Set<string>): void;
				public setForceDark(param0: number): void;
				public getOffscreenPreRaster(): boolean;
				public setAlgorithmicDarkeningAllowed(param0: boolean): void;
				public setSafeBrowsingEnabled(param0: boolean): void;
				public setDisabledActionModeMenuItems(param0: number): void;
				public setWillSuppressErrorPage(param0: boolean): void;
				public getDisabledActionModeMenuItems(): number;
				public getRequestedWithHeaderOriginAllowList(): java.util.Set<string>;
				public isAlgorithmicDarkeningAllowed(): boolean;
				public setOffscreenPreRaster(param0: boolean): void;
				public setEnterpriseAuthenticationAppLinkPolicyEnabled(param0: boolean): void;
				public getForceDarkBehavior(): number;
				public getEnterpriseAuthenticationAppLinkPolicyEnabled(): boolean;
			}
			export module WebSettingsBoundaryInterface {
				export class ForceDarkBehavior extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.chromium.support_lib_boundary.WebSettingsBoundaryInterface.ForceDarkBehavior>;
					/**
					 * Constructs a new instance of the org.chromium.support_lib_boundary.WebSettingsBoundaryInterface$ForceDarkBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static MEDIA_QUERY_ONLY: number;
					public static FORCE_DARK_ONLY: number;
					public static PREFER_MEDIA_QUERY_OVER_FORCE_DARK: number;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class WebAuthnSupport extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.chromium.support_lib_boundary.WebSettingsBoundaryInterface.WebAuthnSupport>;
					/**
					 * Constructs a new instance of the org.chromium.support_lib_boundary.WebSettingsBoundaryInterface$WebAuthnSupport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static NONE: number;
					public static APP: number;
					public static BROWSER: number;
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

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebViewClientBoundaryInterface extends java.lang.Object implements org.chromium.support_lib_boundary.FeatureFlagHolderBoundaryInterface {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebViewClientBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebViewClientBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPageCommitVisible(param0: android.webkit.WebView, param1: string): void;
					onReceivedError(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: java.lang.reflect.InvocationHandler): void;
					onReceivedHttpError(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: android.webkit.WebResourceResponse): void;
					onSafeBrowsingHit(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: number, param3: java.lang.reflect.InvocationHandler): void;
					shouldOverrideUrlLoading(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest): boolean;
					onWebAuthnIntent(param0: android.webkit.WebView, param1: android.app.PendingIntent, param2: java.lang.reflect.InvocationHandler): boolean;
					getSupportedFeatures(): string[];
				});
				public constructor();
				public onPageCommitVisible(param0: android.webkit.WebView, param1: string): void;
				public onReceivedError(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: java.lang.reflect.InvocationHandler): void;
				public onSafeBrowsingHit(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: number, param3: java.lang.reflect.InvocationHandler): void;
				public onWebAuthnIntent(param0: android.webkit.WebView, param1: android.app.PendingIntent, param2: java.lang.reflect.InvocationHandler): boolean;
				public onReceivedHttpError(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest, param2: android.webkit.WebResourceResponse): void;
				public shouldOverrideUrlLoading(param0: android.webkit.WebView, param1: android.webkit.WebResourceRequest): boolean;
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebViewCookieManagerBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebViewCookieManagerBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebViewCookieManagerBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCookieInfo(param0: string): java.util.List<string>;
				});
				public constructor();
				public getCookieInfo(param0: string): java.util.List<string>;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebViewProviderBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebViewProviderBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebViewProviderBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					insertVisualStateCallback(param0: number, param1: java.lang.reflect.InvocationHandler): void;
					createWebMessageChannel(): java.lang.reflect.InvocationHandler[];
					postMessageToMainFrame(param0: java.lang.reflect.InvocationHandler, param1: android.net.Uri): void;
					addWebMessageListener(param0: string, param1: string[], param2: java.lang.reflect.InvocationHandler): void;
					removeWebMessageListener(param0: string): void;
					addDocumentStartJavaScript(param0: string, param1: string[]): java.lang.reflect.InvocationHandler;
					getWebViewClient(): android.webkit.WebViewClient;
					getWebChromeClient(): android.webkit.WebChromeClient;
					getWebViewRenderer(): java.lang.reflect.InvocationHandler;
					getWebViewRendererClient(): java.lang.reflect.InvocationHandler;
					setWebViewRendererClient(param0: java.lang.reflect.InvocationHandler): void;
				});
				public constructor();
				public insertVisualStateCallback(param0: number, param1: java.lang.reflect.InvocationHandler): void;
				public createWebMessageChannel(): java.lang.reflect.InvocationHandler[];
				public getWebChromeClient(): android.webkit.WebChromeClient;
				public addWebMessageListener(param0: string, param1: string[], param2: java.lang.reflect.InvocationHandler): void;
				public getWebViewRenderer(): java.lang.reflect.InvocationHandler;
				public getWebViewRendererClient(): java.lang.reflect.InvocationHandler;
				public postMessageToMainFrame(param0: java.lang.reflect.InvocationHandler, param1: android.net.Uri): void;
				public setWebViewRendererClient(param0: java.lang.reflect.InvocationHandler): void;
				public getWebViewClient(): android.webkit.WebViewClient;
				public removeWebMessageListener(param0: string): void;
				public addDocumentStartJavaScript(param0: string, param1: string[]): java.lang.reflect.InvocationHandler;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebViewProviderFactoryBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebViewProviderFactoryBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebViewProviderFactoryBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createWebView(param0: android.webkit.WebView): java.lang.reflect.InvocationHandler;
					getWebkitToCompatConverter(): java.lang.reflect.InvocationHandler;
					getStatics(): java.lang.reflect.InvocationHandler;
					getSupportedFeatures(): string[];
					getServiceWorkerController(): java.lang.reflect.InvocationHandler;
					getTracingController(): java.lang.reflect.InvocationHandler;
					getProxyController(): java.lang.reflect.InvocationHandler;
					setSupportLibraryVersion(param0: string): void;
					getDropDataProvider(): java.lang.reflect.InvocationHandler;
				});
				public constructor();
				public setSupportLibraryVersion(param0: string): void;
				public getWebkitToCompatConverter(): java.lang.reflect.InvocationHandler;
				public getStatics(): java.lang.reflect.InvocationHandler;
				public getServiceWorkerController(): java.lang.reflect.InvocationHandler;
				public getTracingController(): java.lang.reflect.InvocationHandler;
				public getProxyController(): java.lang.reflect.InvocationHandler;
				public getDropDataProvider(): java.lang.reflect.InvocationHandler;
				public createWebView(param0: android.webkit.WebView): java.lang.reflect.InvocationHandler;
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebViewRendererBoundaryInterface extends java.lang.Object implements org.chromium.support_lib_boundary.IsomorphicObjectBoundaryInterface {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebViewRendererBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebViewRendererBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					terminate(): boolean;
					getOrCreatePeer(param0: java.util.concurrent.Callable<any>): any;
				});
				public constructor();
				public terminate(): boolean;
				public getOrCreatePeer(param0: java.util.concurrent.Callable<any>): any;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebViewRendererClientBoundaryInterface extends java.lang.Object implements org.chromium.support_lib_boundary.FeatureFlagHolderBoundaryInterface {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebViewRendererClientBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebViewRendererClientBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRendererUnresponsive(param0: android.webkit.WebView, param1: java.lang.reflect.InvocationHandler): void;
					onRendererResponsive(param0: android.webkit.WebView, param1: java.lang.reflect.InvocationHandler): void;
					getSupportedFeatures(): string[];
				});
				public constructor();
				public onRendererUnresponsive(param0: android.webkit.WebView, param1: java.lang.reflect.InvocationHandler): void;
				public onRendererResponsive(param0: android.webkit.WebView, param1: java.lang.reflect.InvocationHandler): void;
				public getSupportedFeatures(): string[];
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export class WebkitToCompatConverterBoundaryInterface extends java.lang.Object {
				public static class: java.lang.Class<org.chromium.support_lib_boundary.WebkitToCompatConverterBoundaryInterface>;
				/**
				 * Constructs a new instance of the org.chromium.support_lib_boundary.WebkitToCompatConverterBoundaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					convertSettings(param0: android.webkit.WebSettings): java.lang.reflect.InvocationHandler;
					convertWebResourceRequest(param0: android.webkit.WebResourceRequest): java.lang.reflect.InvocationHandler;
					convertServiceWorkerSettings(param0: any): java.lang.reflect.InvocationHandler;
					convertServiceWorkerSettings(param0: java.lang.reflect.InvocationHandler): any;
					convertWebResourceError(param0: any): java.lang.reflect.InvocationHandler;
					convertWebResourceError(param0: java.lang.reflect.InvocationHandler): any;
					convertSafeBrowsingResponse(param0: any): java.lang.reflect.InvocationHandler;
					convertSafeBrowsingResponse(param0: java.lang.reflect.InvocationHandler): any;
					convertWebMessagePort(param0: any): java.lang.reflect.InvocationHandler;
					convertWebMessagePort(param0: java.lang.reflect.InvocationHandler): any;
					convertCookieManager(param0: any): java.lang.reflect.InvocationHandler;
				});
				public constructor();
				public convertSettings(param0: android.webkit.WebSettings): java.lang.reflect.InvocationHandler;
				public convertWebResourceError(param0: any): java.lang.reflect.InvocationHandler;
				public convertCookieManager(param0: any): java.lang.reflect.InvocationHandler;
				public convertWebResourceError(param0: java.lang.reflect.InvocationHandler): any;
				public convertServiceWorkerSettings(param0: any): java.lang.reflect.InvocationHandler;
				public convertServiceWorkerSettings(param0: java.lang.reflect.InvocationHandler): any;
				public convertWebMessagePort(param0: any): java.lang.reflect.InvocationHandler;
				public convertWebResourceRequest(param0: android.webkit.WebResourceRequest): java.lang.reflect.InvocationHandler;
				public convertSafeBrowsingResponse(param0: any): java.lang.reflect.InvocationHandler;
				public convertWebMessagePort(param0: java.lang.reflect.InvocationHandler): any;
				public convertSafeBrowsingResponse(param0: java.lang.reflect.InvocationHandler): any;
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export module util {
				export class BoundaryInterfaceReflectionUtil extends java.lang.Object {
					public static class: java.lang.Class<org.chromium.support_lib_boundary.util.BoundaryInterfaceReflectionUtil>;
					public static instanceOfInOwnClassLoader(obj: any, className: string): boolean;
					public static createInvocationHandlerFor(delegate: any): java.lang.reflect.InvocationHandler;
					public static containsFeature(features: java.util.Collection<string>, soughtFeature: string): boolean;
					public constructor();
					public static containsFeature(features: string[], soughtFeature: string): boolean;
					public static castToSuppLibClass(clazz: java.lang.Class<any>, invocationHandler: java.lang.reflect.InvocationHandler): any;
					public static createInvocationHandlersForArray(delegates: any[]): java.lang.reflect.InvocationHandler[];
					public static dupeMethod(method: java.lang.reflect.Method, delegateLoader: java.lang.ClassLoader): java.lang.reflect.Method;
					public static getDelegateFromInvocationHandler(invocationHandler: java.lang.reflect.InvocationHandler): any;
				}
				export module BoundaryInterfaceReflectionUtil {
					export class InvocationHandlerWithDelegateGetter extends java.lang.Object implements java.lang.reflect.InvocationHandler {
						public static class: java.lang.Class<org.chromium.support_lib_boundary.util.BoundaryInterfaceReflectionUtil.InvocationHandlerWithDelegateGetter>;
						public invoke(o: any, method: java.lang.reflect.Method, objects: any[]): any;
						public constructor(delegate: any);
						public getDelegate(): any;
						public invoke(param0: any, param1: java.lang.reflect.Method, param2: any[]): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module chromium {
		export module support_lib_boundary {
			export module util {
				export class Features extends java.lang.Object {
					public static class: java.lang.Class<org.chromium.support_lib_boundary.util.Features>;
					public static DEV_SUFFIX: string;
					public static VISUAL_STATE_CALLBACK: string;
					public static RECEIVE_WEB_RESOURCE_ERROR: string;
					public static RECEIVE_HTTP_ERROR: string;
					public static SAFE_BROWSING_HIT: string;
					public static SHOULD_OVERRIDE_WITH_REDIRECTS: string;
					public static OFF_SCREEN_PRERASTER: string;
					public static SAFE_BROWSING_ENABLE: string;
					public static DISABLED_ACTION_MODE_MENU_ITEMS: string;
					public static START_SAFE_BROWSING: string;
					public static SAFE_BROWSING_ALLOWLIST: string;
					public static SAFE_BROWSING_WHITELIST: string;
					public static SAFE_BROWSING_PRIVACY_POLICY_URL: string;
					public static SERVICE_WORKER_BASIC_USAGE: string;
					public static SERVICE_WORKER_SHOULD_INTERCEPT_REQUEST: string;
					public static SERVICE_WORKER_CACHE_MODE: string;
					public static SERVICE_WORKER_CONTENT_ACCESS: string;
					public static SERVICE_WORKER_FILE_ACCESS: string;
					public static SERVICE_WORKER_BLOCK_NETWORK_LOADS: string;
					public static WEB_RESOURCE_REQUEST_IS_REDIRECT: string;
					public static WEB_RESOURCE_ERROR_GET_DESCRIPTION: string;
					public static WEB_RESOURCE_ERROR_GET_CODE: string;
					public static SAFE_BROWSING_RESPONSE_BACK_TO_SAFETY: string;
					public static SAFE_BROWSING_RESPONSE_PROCEED: string;
					public static SAFE_BROWSING_RESPONSE_SHOW_INTERSTITIAL: string;
					public static WEB_MESSAGE_GET_MESSAGE_PAYLOAD: string;
					public static WEB_MESSAGE_PORT_POST_MESSAGE: string;
					public static WEB_MESSAGE_PORT_CLOSE: string;
					public static WEB_MESSAGE_PORT_SET_MESSAGE_CALLBACK: string;
					public static CREATE_WEB_MESSAGE_CHANNEL: string;
					public static POST_WEB_MESSAGE: string;
					public static WEB_MESSAGE_CALLBACK_ON_MESSAGE: string;
					public static GET_WEB_VIEW_CLIENT: string;
					public static GET_WEB_CHROME_CLIENT: string;
					public static PROXY_OVERRIDE: string;
					public static PROXY_OVERRIDE_REVERSE_BYPASS: string;
					public static SUPPRESS_ERROR_PAGE: string;
					public static GET_WEB_VIEW_RENDERER: string;
					public static WEB_VIEW_RENDERER_TERMINATE: string;
					public static TRACING_CONTROLLER_BASIC_USAGE: string;
					public static WEB_VIEW_RENDERER_CLIENT_BASIC_USAGE: string;
					public static MULTI_PROCESS_QUERY: string;
					public static FORCE_DARK: string;
					public static FORCE_DARK_BEHAVIOR: string;
					public static ALGORITHMIC_DARKENING: string;
					public static WEB_MESSAGE_LISTENER: string;
					public static SET_SUPPORT_LIBRARY_VERSION: string;
					public static DOCUMENT_START_SCRIPT: string;
					public static WEB_AUTHENTICATION: string;
					public static REQUESTED_WITH_HEADER_CONTROL: string;
					public static REQUESTED_WITH_HEADER_ALLOW_LIST: string;
					public static GET_VARIATIONS_HEADER: string;
					public static ENTERPRISE_AUTHENTICATION_APP_LINK_POLICY: string;
					public static GET_COOKIE_INFO: string;
					public static IMAGE_DRAG_DROP: string;
				}
			}
		}
	}
}

//Generics information:

