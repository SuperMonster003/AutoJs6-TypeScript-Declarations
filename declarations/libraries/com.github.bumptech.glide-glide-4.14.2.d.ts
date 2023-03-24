declare module com {
	export module bumptech {
		export module glide {
			export abstract class GeneratedAppGlideModule extends com.bumptech.glide.module.AppGlideModule {
				public static class: java.lang.Class<com.bumptech.glide.GeneratedAppGlideModule>;
				public registerComponents(param0: android.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
				public applyOptions(context: android.content.Context, builder: com.bumptech.glide.GlideBuilder): void;
				public applyOptions(param0: android.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
				public registerComponents(context: android.content.Context, glide: com.bumptech.glide.Glide, registry: com.bumptech.glide.Registry): void;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GenericTransitionOptions<TranscodeType>  extends com.bumptech.glide.TransitionOptions<com.bumptech.glide.GenericTransitionOptions<any>,any> {
				public static class: java.lang.Class<com.bumptech.glide.GenericTransitionOptions<any>>;
				public static withNoTransition(): com.bumptech.glide.GenericTransitionOptions<any>;
				public static with(transitionFactory: com.bumptech.glide.request.transition.TransitionFactory<any>): com.bumptech.glide.GenericTransitionOptions<any>;
				public static with(viewAnimationId: number): com.bumptech.glide.GenericTransitionOptions<any>;
				public hashCode(): number;
				public static with(animator: com.bumptech.glide.request.transition.ViewPropertyTransition.Animator): com.bumptech.glide.GenericTransitionOptions<any>;
				public equals(o: any): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class Glide extends java.lang.Object implements android.content.ComponentCallbacks2 {
				public static class: java.lang.Class<com.bumptech.glide.Glide>;
				public static getPhotoCacheDir(context: android.content.Context): java.io.File;
				public static enableHardwareBitmaps(): void;
				/** @deprecated */
				public static with(fragment: android.app.Fragment): com.bumptech.glide.RequestManager;
				public getRegistry(): com.bumptech.glide.Registry;
				public getArrayPool(): com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool;
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public onTrimMemory(level: number): void;
				public static get(context: android.content.Context): com.bumptech.glide.Glide;
				/** @deprecated */
				public static init(glide: com.bumptech.glide.Glide): void;
				public setMemoryCategory(memoryCategory: com.bumptech.glide.MemoryCategory): com.bumptech.glide.MemoryCategory;
				public onTrimMemory(param0: number): void;
				public static with(fragment: androidx.fragment.app.Fragment): com.bumptech.glide.RequestManager;
				public trimMemory(level: number): void;
				public onLowMemory(): void;
				public static with(context: android.content.Context): com.bumptech.glide.RequestManager;
				/** @deprecated */
				public static with(activity: android.app.Activity): com.bumptech.glide.RequestManager;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public static init(context: android.content.Context, builder: com.bumptech.glide.GlideBuilder): void;
				public static with(view: android.view.View): com.bumptech.glide.RequestManager;
				public static with(activity: androidx.fragment.app.FragmentActivity): com.bumptech.glide.RequestManager;
				public getRequestManagerRetriever(): com.bumptech.glide.manager.RequestManagerRetriever;
				public static getPhotoCacheDir(context: android.content.Context, cacheName: string): java.io.File;
				public clearDiskCache(): void;
				public getBitmapPool(): com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool;
				public preFillBitmapPool(...bitmapAttributeBuilders: com.bumptech.glide.load.engine.prefill.PreFillType.Builder[]): void;
				public clearMemory(): void;
				public getContext(): android.content.Context;
				public static tearDown(): void;
			}
			export module Glide {
				export class RequestOptionsFactory extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.Glide.RequestOptionsFactory>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.Glide$RequestOptionsFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(): com.bumptech.glide.request.RequestOptions;
					});
					public constructor();
					public build(): com.bumptech.glide.request.RequestOptions;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GlideBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.bumptech.glide.GlideBuilder>;
				/** @deprecated */
				public setResizeExecutor(service: com.bumptech.glide.load.engine.executor.GlideExecutor): com.bumptech.glide.GlideBuilder;
				public setLogLevel(logLevel: number): com.bumptech.glide.GlideBuilder;
				public setMemorySizeCalculator(calculator: com.bumptech.glide.load.engine.cache.MemorySizeCalculator): com.bumptech.glide.GlideBuilder;
				public addGlobalRequestListener(listener: com.bumptech.glide.request.RequestListener<any>): com.bumptech.glide.GlideBuilder;
				public setDiskCache(diskCacheFactory: com.bumptech.glide.load.engine.cache.DiskCache.Factory): com.bumptech.glide.GlideBuilder;
				public setLogRequestOrigins(isEnabled: boolean): com.bumptech.glide.GlideBuilder;
				public setDiskCacheExecutor(service: com.bumptech.glide.load.engine.executor.GlideExecutor): com.bumptech.glide.GlideBuilder;
				public constructor();
				public setArrayPool(arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.GlideBuilder;
				public setDefaultRequestOptions(requestOptions: com.bumptech.glide.request.RequestOptions): com.bumptech.glide.GlideBuilder;
				public setImageDecoderEnabledForBitmaps(isEnabled: boolean): com.bumptech.glide.GlideBuilder;
				public setMemoryCache(memoryCache: com.bumptech.glide.load.engine.cache.MemoryCache): com.bumptech.glide.GlideBuilder;
				public useLifecycleInsteadOfInjectingFragments(isEnabled: boolean): com.bumptech.glide.GlideBuilder;
				public setDefaultTransitionOptions(clazz: java.lang.Class<any>, options: com.bumptech.glide.TransitionOptions<any,any>): com.bumptech.glide.GlideBuilder;
				public setBitmapPool(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.GlideBuilder;
				public setSourceExecutor(service: com.bumptech.glide.load.engine.executor.GlideExecutor): com.bumptech.glide.GlideBuilder;
				public setAnimationExecutor(service: com.bumptech.glide.load.engine.executor.GlideExecutor): com.bumptech.glide.GlideBuilder;
				public setConnectivityMonitorFactory(factory: com.bumptech.glide.manager.ConnectivityMonitorFactory): com.bumptech.glide.GlideBuilder;
				public setIsActiveResourceRetentionAllowed(isActiveResourceRetentionAllowed: boolean): com.bumptech.glide.GlideBuilder;
				public setDefaultRequestOptions(factory: com.bumptech.glide.Glide.RequestOptionsFactory): com.bumptech.glide.GlideBuilder;
				public setMemorySizeCalculator(builder: com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder): com.bumptech.glide.GlideBuilder;
			}
			export module GlideBuilder {
				export class EnableImageDecoderForBitmaps extends java.lang.Object implements com.bumptech.glide.GlideExperiments.Experiment {
					public static class: java.lang.Class<com.bumptech.glide.GlideBuilder.EnableImageDecoderForBitmaps>;
				}
				export class EnableLazyGlideRegistry extends java.lang.Object implements com.bumptech.glide.GlideExperiments.Experiment {
					public static class: java.lang.Class<com.bumptech.glide.GlideBuilder.EnableLazyGlideRegistry>;
				}
				export class LogRequestOrigins extends java.lang.Object implements com.bumptech.glide.GlideExperiments.Experiment {
					public static class: java.lang.Class<com.bumptech.glide.GlideBuilder.LogRequestOrigins>;
					public constructor();
				}
				export class ManualOverrideHardwareBitmapMaxFdCount extends java.lang.Object implements com.bumptech.glide.GlideExperiments.Experiment {
					public static class: java.lang.Class<com.bumptech.glide.GlideBuilder.ManualOverrideHardwareBitmapMaxFdCount>;
				}
				export class UseLifecycleInsteadOfInjectingFragments extends java.lang.Object implements com.bumptech.glide.GlideExperiments.Experiment {
					public static class: java.lang.Class<com.bumptech.glide.GlideBuilder.UseLifecycleInsteadOfInjectingFragments>;
					public constructor();
				}
				export class WaitForFramesAfterTrimMemory extends java.lang.Object implements com.bumptech.glide.GlideExperiments.Experiment {
					public static class: java.lang.Class<com.bumptech.glide.GlideBuilder.WaitForFramesAfterTrimMemory>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GlideContext extends android.content.ContextWrapper {
				public static class: java.lang.Class<com.bumptech.glide.GlideContext>;
				public constructor(context: android.content.Context, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool, registry: com.bumptech.glide.util.GlideSuppliers.GlideSupplier<com.bumptech.glide.Registry>, imageViewTargetFactory: com.bumptech.glide.request.target.ImageViewTargetFactory, defaultRequestOptionsFactory: com.bumptech.glide.Glide.RequestOptionsFactory, defaultTransitionOptions: java.util.Map<java.lang.Class<any>,com.bumptech.glide.TransitionOptions<any,any>>, defaultRequestListeners: java.util.List<com.bumptech.glide.request.RequestListener<any>>, engine: com.bumptech.glide.load.engine.Engine, experiments: com.bumptech.glide.GlideExperiments, logLevel: number);
				public getEngine(): com.bumptech.glide.load.engine.Engine;
				public getLogLevel(): number;
				public buildImageViewTarget(imageView: android.widget.ImageView, transcodeClass: java.lang.Class<any>): com.bumptech.glide.request.target.ViewTarget<any,any>;
				public getDefaultRequestListeners(): java.util.List<com.bumptech.glide.request.RequestListener<any>>;
				public getDefaultTransitionOptions(transcodeClass: java.lang.Class<any>): com.bumptech.glide.TransitionOptions<any,any>;
				public getRegistry(): com.bumptech.glide.Registry;
				public getDefaultRequestOptions(): com.bumptech.glide.request.RequestOptions;
				public getArrayPool(): com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool;
				public constructor(base: android.content.Context);
				public constructor();
				public getExperiments(): com.bumptech.glide.GlideExperiments;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GlideExperiments extends java.lang.Object {
				public static class: java.lang.Class<com.bumptech.glide.GlideExperiments>;
				public isEnabled(clazz: java.lang.Class<any>): boolean;
			}
			export module GlideExperiments {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.GlideExperiments.Builder>;
				}
				export class Experiment extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.GlideExperiments.Experiment>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.GlideExperiments$Experiment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class ListPreloader<T>  extends android.widget.AbsListView.OnScrollListener {
				public static class: java.lang.Class<com.bumptech.glide.ListPreloader<any>>;
				public onScrollStateChanged(absListView: android.widget.AbsListView, scrollState: number): void;
				public onScroll(param0: android.widget.AbsListView, param1: number, param2: number, param3: number): void;
				public constructor(requestManager: com.bumptech.glide.RequestManager, preloadModelProvider: com.bumptech.glide.ListPreloader.PreloadModelProvider<any>, preloadDimensionProvider: com.bumptech.glide.ListPreloader.PreloadSizeProvider<any>, maxPreload: number);
				public onScrollStateChanged(param0: android.widget.AbsListView, param1: number): void;
				public onScroll(absListView: android.widget.AbsListView, firstVisible: number, visibleCount: number, totalCount: number): void;
			}
			export module ListPreloader {
				export class PreloadModelProvider<U>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.ListPreloader.PreloadModelProvider<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.ListPreloader$PreloadModelProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getPreloadItems(param0: number): java.util.List<U>;
						getPreloadRequestBuilder(param0: U): com.bumptech.glide.RequestBuilder<any>;
					});
					public constructor();
					public getPreloadItems(param0: number): java.util.List<U>;
					public getPreloadRequestBuilder(param0: U): com.bumptech.glide.RequestBuilder<any>;
				}
				export class PreloadSizeProvider<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.ListPreloader.PreloadSizeProvider<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.ListPreloader$PreloadSizeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getPreloadSize(param0: T, param1: number, param2: number): number[];
					});
					public constructor();
					public getPreloadSize(param0: T, param1: number, param2: number): number[];
				}
				export class PreloadTarget extends com.bumptech.glide.request.target.Target<any> {
					public static class: java.lang.Class<com.bumptech.glide.ListPreloader.PreloadTarget>;
					public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onDestroy(): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public setRequest(request: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
					public onStart(): void;
					public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
					public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
					public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
					public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
					public onStop(): void;
					public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
					public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
				}
				export class PreloadTargetQueue extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.ListPreloader.PreloadTargetQueue>;
					public next(width: number, height: number): com.bumptech.glide.ListPreloader.PreloadTarget;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class MemoryCategory {
				public static class: java.lang.Class<com.bumptech.glide.MemoryCategory>;
				public static LOW: com.bumptech.glide.MemoryCategory;
				public static NORMAL: com.bumptech.glide.MemoryCategory;
				public static HIGH: com.bumptech.glide.MemoryCategory;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public getMultiplier(): number;
				public static values(): com.bumptech.glide.MemoryCategory[];
				public static valueOf(name: string): com.bumptech.glide.MemoryCategory;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class ModelTypes<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.bumptech.glide.ModelTypes<any>>;
				/**
				 * Constructs a new instance of the com.bumptech.glide.ModelTypes<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(param0: android.graphics.Bitmap): T;
					load(param0: android.graphics.drawable.Drawable): T;
					load(param0: string): T;
					load(param0: android.net.Uri): T;
					load(param0: java.io.File): T;
					load(param0: java.lang.Integer): T;
					load(param0: java.net.URL): T;
					load(param0: number[]): T;
					load(param0: any): T;
				});
				public constructor();
				public load(param0: string): T;
				public load(param0: android.net.Uri): T;
				public load(param0: java.io.File): T;
				public load(param0: number[]): T;
				public load(param0: android.graphics.drawable.Drawable): T;
				public load(param0: java.lang.Integer): T;
				public load(param0: android.graphics.Bitmap): T;
				/** @deprecated */
				public load(param0: java.net.URL): T;
				public load(param0: any): T;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class Priority {
				public static class: java.lang.Class<com.bumptech.glide.Priority>;
				public static IMMEDIATE: com.bumptech.glide.Priority;
				public static HIGH: com.bumptech.glide.Priority;
				public static NORMAL: com.bumptech.glide.Priority;
				public static LOW: com.bumptech.glide.Priority;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): com.bumptech.glide.Priority[];
				public static valueOf(name: string): com.bumptech.glide.Priority;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class Registry extends java.lang.Object {
				public static class: java.lang.Class<com.bumptech.glide.Registry>;
				public static BUCKET_ANIMATION: string;
				public static BUCKET_GIF: string;
				public static BUCKET_BITMAP: string;
				public static BUCKET_BITMAP_DRAWABLE: string;
				public append(resourceClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.ResourceEncoder<any>): com.bumptech.glide.Registry;
				/** @deprecated */
				public register(resourceClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.ResourceEncoder<any>): com.bumptech.glide.Registry;
				public isResourceEncoderAvailable(resource: com.bumptech.glide.load.engine.Resource<any>): boolean;
				public prepend(resourceClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.ResourceEncoder<any>): com.bumptech.glide.Registry;
				public constructor();
				public prepend(dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, decoder: com.bumptech.glide.load.ResourceDecoder<any,any>): com.bumptech.glide.Registry;
				/** @deprecated */
				public register(dataClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.Encoder<any>): com.bumptech.glide.Registry;
				public getImageHeaderParsers(): java.util.List<com.bumptech.glide.load.ImageHeaderParser>;
				public register(resourceClass: java.lang.Class<any>, transcodeClass: java.lang.Class<any>, transcoder: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>): com.bumptech.glide.Registry;
				public register(parser: com.bumptech.glide.load.ImageHeaderParser): com.bumptech.glide.Registry;
				public getLoadPath(dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, transcodeClass: java.lang.Class<any>): com.bumptech.glide.load.engine.LoadPath<any,any,any>;
				public getSourceEncoder(data: any): com.bumptech.glide.load.Encoder<any>;
				public append(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): com.bumptech.glide.Registry;
				public append(dataClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.Encoder<any>): com.bumptech.glide.Registry;
				public prepend(dataClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.Encoder<any>): com.bumptech.glide.Registry;
				public append(bucket: string, dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, decoder: com.bumptech.glide.load.ResourceDecoder<any,any>): com.bumptech.glide.Registry;
				public setResourceDecoderBucketPriorityList(buckets: java.util.List<string>): com.bumptech.glide.Registry;
				public getModelLoaders(model: any): java.util.List<any>;
				public prepend(bucket: string, dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, decoder: com.bumptech.glide.load.ResourceDecoder<any,any>): com.bumptech.glide.Registry;
				public getResultEncoder(resource: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.ResourceEncoder<any>;
				public append(dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, decoder: com.bumptech.glide.load.ResourceDecoder<any,any>): com.bumptech.glide.Registry;
				public replace(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): com.bumptech.glide.Registry;
				public getRewinder(data: any): com.bumptech.glide.load.data.DataRewinder<any>;
				public getRegisteredResourceClasses(modelClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, transcodeClass: java.lang.Class<any>): java.util.List<any>;
				public register(factory: com.bumptech.glide.load.data.DataRewinder.Factory<any>): com.bumptech.glide.Registry;
				public prepend(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): com.bumptech.glide.Registry;
			}
			export module Registry {
				export class MissingComponentException extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.MissingComponentException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export class NoImageHeaderParserException extends com.bumptech.glide.Registry.MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.NoImageHeaderParserException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export class NoModelLoaderAvailableException extends com.bumptech.glide.Registry.MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.NoModelLoaderAvailableException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>);
					public constructor(cause: java.lang.Throwable);
					public constructor(model: any, matchingButNotHandlingModelLoaders: java.util.List<any>);
					public constructor(message: string, cause: java.lang.Throwable);
					public constructor(model: any);
				}
				export class NoResultEncoderAvailableException extends com.bumptech.glide.Registry.MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.NoResultEncoderAvailableException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(resourceClass: java.lang.Class<any>);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export class NoSourceEncoderAvailableException extends com.bumptech.glide.Registry.MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.NoSourceEncoderAvailableException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor(dataClass: java.lang.Class<any>);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class RegistryFactory extends java.lang.Object {
				public static class: java.lang.Class<com.bumptech.glide.RegistryFactory>;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class RequestBuilder<TranscodeType>  extends com.bumptech.glide.request.BaseRequestOptions<com.bumptech.glide.RequestBuilder<any>> {
				public static class: java.lang.Class<com.bumptech.glide.RequestBuilder<any>>;
				public static DOWNLOAD_ONLY_OPTIONS: com.bumptech.glide.request.RequestOptions;
				public load(uri: android.net.Uri): com.bumptech.glide.RequestBuilder<any>;
				public preload(width: number, height: number): com.bumptech.glide.request.target.Target<any>;
				public load(param0: android.net.Uri): any;
				public apply(o: com.bumptech.glide.request.BaseRequestOptions<any>): any;
				/** @deprecated */
				public thumbnail(sizeMultiplier: number): com.bumptech.glide.RequestBuilder<any>;
				/** @deprecated */
				public load(url: java.net.URL): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: any): any;
				public listener(requestListener: com.bumptech.glide.request.RequestListener<any>): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: number[]): any;
				public constructor(transcodeClass: java.lang.Class<any>, other: com.bumptech.glide.RequestBuilder<any>);
				public load(model: number[]): com.bumptech.glide.RequestBuilder<any>;
				public constructor();
				public error(errorBuilder: com.bumptech.glide.RequestBuilder<any>): com.bumptech.glide.RequestBuilder<any>;
				public addListener(requestListener: com.bumptech.glide.request.RequestListener<any>): com.bumptech.glide.RequestBuilder<any>;
				/** @deprecated */
				public downloadOnly(target: com.bumptech.glide.request.target.Target<any>): com.bumptech.glide.request.target.Target<any>;
				public thumbnail(thumbnails: java.util.List<com.bumptech.glide.RequestBuilder<any>>): com.bumptech.glide.RequestBuilder<any>;
				public hashCode(): number;
				public clone(): any;
				public submit(width: number, height: number): com.bumptech.glide.request.FutureTarget<any>;
				public clone(): com.bumptech.glide.RequestBuilder<any>;
				public equals(o: any): boolean;
				public load(param0: java.io.File): any;
				public load(file: java.io.File): com.bumptech.glide.RequestBuilder<any>;
				public transition(transitionOptions: com.bumptech.glide.TransitionOptions<any,any>): com.bumptech.glide.RequestBuilder<any>;
				public load(resourceId: java.lang.Integer): com.bumptech.glide.RequestBuilder<any>;
				public apply(requestOptions: com.bumptech.glide.request.BaseRequestOptions<any>): com.bumptech.glide.RequestBuilder<any>;
				public into(target: com.bumptech.glide.request.target.Target<any>): com.bumptech.glide.request.target.Target<any>;
				public load(string: string): com.bumptech.glide.RequestBuilder<any>;
				public constructor(glide: com.bumptech.glide.Glide, requestManager: com.bumptech.glide.RequestManager, transcodeClass: java.lang.Class<any>, context: android.content.Context);
				public thumbnail(...thumbnails: com.bumptech.glide.RequestBuilder<any>[]): com.bumptech.glide.RequestBuilder<any>;
				/** @deprecated */
				public into(width: number, height: number): com.bumptech.glide.request.FutureTarget<any>;
				public load(drawable: android.graphics.drawable.Drawable): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: string): any;
				public load(model: any): com.bumptech.glide.RequestBuilder<any>;
				public load(bitmap: android.graphics.Bitmap): com.bumptech.glide.RequestBuilder<any>;
				/** @deprecated */
				public downloadOnly(width: number, height: number): com.bumptech.glide.request.FutureTarget<java.io.File>;
				public load(param0: android.graphics.Bitmap): any;
				public getDownloadOnlyRequest(): com.bumptech.glide.RequestBuilder<java.io.File>;
				public error(model: any): com.bumptech.glide.RequestBuilder<any>;
				public preload(): com.bumptech.glide.request.target.Target<any>;
				public thumbnail(thumbnailRequest: com.bumptech.glide.RequestBuilder<any>): com.bumptech.glide.RequestBuilder<any>;
				public submit(): com.bumptech.glide.request.FutureTarget<any>;
				public load(param0: java.lang.Integer): any;
				public error(drawable: android.graphics.drawable.Drawable): any;
				public load(param0: android.graphics.drawable.Drawable): any;
				/** @deprecated */
				public load(param0: java.net.URL): any;
				public error(resourceId: number): any;
				public into(view: android.widget.ImageView): com.bumptech.glide.request.target.ViewTarget<android.widget.ImageView,any>;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class RequestManager extends java.lang.Object {
				public static class: java.lang.Class<com.bumptech.glide.RequestManager>;
				public glide: com.bumptech.glide.Glide;
				public context: android.content.Context;
				public load(param0: android.net.Uri): any;
				public load(model: number[]): com.bumptech.glide.RequestBuilder<android.graphics.drawable.Drawable>;
				public setDefaultRequestOptions(requestOptions: com.bumptech.glide.request.RequestOptions): com.bumptech.glide.RequestManager;
				public load(param0: number[]): any;
				public setPauseAllRequestsOnTrimMemoryModerate(pauseAllOnTrim: boolean): void;
				public applyDefaultRequestOptions(requestOptions: com.bumptech.glide.request.RequestOptions): com.bumptech.glide.RequestManager;
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public load(resourceId: java.lang.Integer): com.bumptech.glide.RequestBuilder<android.graphics.drawable.Drawable>;
				public onTrimMemory(param0: number): void;
				public clear(view: android.view.View): void;
				public resumeRequestsRecursive(): void;
				public load(file: java.io.File): com.bumptech.glide.RequestBuilder<android.graphics.drawable.Drawable>;
				public load(model: any): com.bumptech.glide.RequestBuilder<android.graphics.drawable.Drawable>;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public toString(): string;
				public load(param0: string): any;
				public as(resourceClass: java.lang.Class<any>): com.bumptech.glide.RequestBuilder<any>;
				public clear(target: com.bumptech.glide.request.target.Target<any>): void;
				public load(param0: android.graphics.Bitmap): any;
				public load(uri: android.net.Uri): com.bumptech.glide.RequestBuilder<android.graphics.drawable.Drawable>;
				public onStart(): void;
				public pauseAllRequestsRecursive(): void;
				public load(string: string): com.bumptech.glide.RequestBuilder<android.graphics.drawable.Drawable>;
				public asGif(): com.bumptech.glide.RequestBuilder<com.bumptech.glide.load.resource.gif.GifDrawable>;
				public load(param0: java.lang.Integer): any;
				public resumeRequests(): void;
				public load(param0: android.graphics.drawable.Drawable): any;
				/** @deprecated */
				public load(url: java.net.URL): com.bumptech.glide.RequestBuilder<android.graphics.drawable.Drawable>;
				public addDefaultRequestListener(requestListener: com.bumptech.glide.request.RequestListener<any>): com.bumptech.glide.RequestManager;
				public pauseRequests(): void;
				public load(param0: any): any;
				public setRequestOptions(toSet: com.bumptech.glide.request.RequestOptions): void;
				public asBitmap(): com.bumptech.glide.RequestBuilder<android.graphics.Bitmap>;
				public onTrimMemory(level: number): void;
				public downloadOnly(): com.bumptech.glide.RequestBuilder<java.io.File>;
				public onStop(): void;
				public load(param0: java.io.File): any;
				public pauseRequestsRecursive(): void;
				public download(model: any): com.bumptech.glide.RequestBuilder<java.io.File>;
				public onLowMemory(): void;
				public pauseAllRequests(): void;
				public asFile(): com.bumptech.glide.RequestBuilder<java.io.File>;
				public constructor(glide: com.bumptech.glide.Glide, lifecycle: com.bumptech.glide.manager.Lifecycle, treeNode: com.bumptech.glide.manager.RequestManagerTreeNode, context: android.content.Context);
				public load(drawable: android.graphics.drawable.Drawable): com.bumptech.glide.RequestBuilder<android.graphics.drawable.Drawable>;
				/** @deprecated */
				public load(param0: java.net.URL): any;
				public onDestroy(): void;
				public load(bitmap: android.graphics.Bitmap): com.bumptech.glide.RequestBuilder<android.graphics.drawable.Drawable>;
				public asDrawable(): com.bumptech.glide.RequestBuilder<android.graphics.drawable.Drawable>;
				public isPaused(): boolean;
			}
			export module RequestManager {
				export class ClearTarget extends com.bumptech.glide.request.target.CustomViewTarget<android.view.View,any> {
					public static class: java.lang.Class<com.bumptech.glide.RequestManager.ClearTarget>;
					public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onResourceCleared(param0: android.graphics.drawable.Drawable): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public setRequest(request: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
					public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
					public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
					public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
					public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
					public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
					public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
					public onResourceCleared(placeholder: android.graphics.drawable.Drawable): void;
				}
				export class RequestManagerConnectivityListener extends java.lang.Object implements com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener {
					public static class: java.lang.Class<com.bumptech.glide.RequestManager.RequestManagerConnectivityListener>;
					public onConnectivityChanged(isConnected: boolean): void;
					public onConnectivityChanged(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export abstract class TransitionOptions<CHILD, TranscodeType>  extends java.lang.Cloneable {
				public static class: java.lang.Class<com.bumptech.glide.TransitionOptions<any,any>>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public transition(viewAnimationId: number): any;
				public transition(transitionFactory: com.bumptech.glide.request.transition.TransitionFactory<any>): any;
				public clone(): any;
				public dontTransition(): any;
				public equals(o: any): boolean;
				public transition(animator: com.bumptech.glide.request.transition.ViewPropertyTransition.Animator): any;
				public constructor();
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class DataSource {
					public static class: java.lang.Class<com.bumptech.glide.load.DataSource>;
					public static LOCAL: com.bumptech.glide.load.DataSource;
					public static REMOTE: com.bumptech.glide.load.DataSource;
					public static DATA_DISK_CACHE: com.bumptech.glide.load.DataSource;
					public static RESOURCE_DISK_CACHE: com.bumptech.glide.load.DataSource;
					public static MEMORY_CACHE: com.bumptech.glide.load.DataSource;
					public static valueOf(name: string): com.bumptech.glide.load.DataSource;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.bumptech.glide.load.DataSource[];
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class DecodeFormat {
					public static class: java.lang.Class<com.bumptech.glide.load.DecodeFormat>;
					public static PREFER_ARGB_8888: com.bumptech.glide.load.DecodeFormat;
					public static PREFER_RGB_565: com.bumptech.glide.load.DecodeFormat;
					public static DEFAULT: com.bumptech.glide.load.DecodeFormat;
					public static values(): com.bumptech.glide.load.DecodeFormat[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): com.bumptech.glide.load.DecodeFormat;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class EncodeStrategy {
					public static class: java.lang.Class<com.bumptech.glide.load.EncodeStrategy>;
					public static SOURCE: com.bumptech.glide.load.EncodeStrategy;
					public static TRANSFORMED: com.bumptech.glide.load.EncodeStrategy;
					public static NONE: com.bumptech.glide.load.EncodeStrategy;
					public static values(): com.bumptech.glide.load.EncodeStrategy[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): com.bumptech.glide.load.EncodeStrategy;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Encoder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.load.Encoder<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Encoder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						encode(param0: T, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					});
					public constructor();
					public encode(param0: T, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class HttpException extends java.io.IOException {
					public static class: java.lang.Class<com.bumptech.glide.load.HttpException>;
					public static UNKNOWN: number;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					/** @deprecated */
					public constructor(message: string);
					public getStatusCode(): number;
					public constructor(statusCode: number);
					public constructor();
					public constructor(message: string, statusCode: number, cause: java.lang.Throwable);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, statusCode: number);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class ImageHeaderParser extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParser>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ImageHeaderParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getType(param0: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						getType(param0: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						getOrientation(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
						getOrientation(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					});
					public constructor();
					public static UNKNOWN_ORIENTATION: number;
					public getOrientation(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					public getType(param0: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					public getOrientation(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					public getType(param0: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
				}
				export module ImageHeaderParser {
					export class ImageType {
						public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParser.ImageType>;
						public static GIF: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static JPEG: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static RAW: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static PNG_A: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static PNG: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static WEBP_A: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static WEBP: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static ANIMATED_WEBP: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static AVIF: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static UNKNOWN: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static valueOf(name: string): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public hasAlpha(): boolean;
						public static values(): com.bumptech.glide.load.ImageHeaderParser.ImageType[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public isWebp(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class ImageHeaderParserUtils extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParserUtils>;
					public static getType(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, parcelFileDescriptorRewinder: com.bumptech.glide.load.data.ParcelFileDescriptorRewinder, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					public static getOrientation(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, parcelFileDescriptorRewinder: com.bumptech.glide.load.data.ParcelFileDescriptorRewinder, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					public static getOrientation(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					public static getType(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					public static getType(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, buffer: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					public static getOrientation(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, buffer: java.nio.ByteBuffer, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
				}
				export module ImageHeaderParserUtils {
					export class OrientationReader extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParserUtils.OrientationReader>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.ImageHeaderParserUtils$OrientationReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getOrientationAndRewind(param0: com.bumptech.glide.load.ImageHeaderParser): number;
						});
						public constructor();
						public getOrientationAndRewind(param0: com.bumptech.glide.load.ImageHeaderParser): number;
					}
					export class TypeReader extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParserUtils.TypeReader>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.ImageHeaderParserUtils$TypeReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTypeAndRewind(param0: com.bumptech.glide.load.ImageHeaderParser): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						});
						public constructor();
						public getTypeAndRewind(param0: com.bumptech.glide.load.ImageHeaderParser): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Key extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.load.Key>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Key interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						updateDiskCacheKey(param0: java.security.MessageDigest): void;
						equals(param0: any): boolean;
						hashCode(): number;
						"<clinit>"(): void;
					});
					public constructor();
					public static CHARSET: java.nio.charset.Charset;
					public static STRING_CHARSET_NAME: string;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class MultiTransformation<T>  extends com.bumptech.glide.load.Transformation<any> {
					public static class: java.lang.Class<com.bumptech.glide.load.MultiTransformation<any>>;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public constructor(transformationList: java.util.Collection<any>);
					public constructor(...transformations: com.bumptech.glide.load.Transformation<any>[]);
					public transform(context: android.content.Context, resource: com.bumptech.glide.load.engine.Resource<any>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<any>;
					public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Option<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.load.Option<any>>;
					public static memory(key: string, defaultValue: any): com.bumptech.glide.load.Option<any>;
					public update(value: T, messageDigest: java.security.MessageDigest): void;
					public equals(obj: any): boolean;
					public toString(): string;
					public static memory(key: string): com.bumptech.glide.load.Option<any>;
					public static disk(key: string, cacheKeyUpdater: com.bumptech.glide.load.Option.CacheKeyUpdater<any>): com.bumptech.glide.load.Option<any>;
					public static disk(key: string, defaultValue: any, cacheKeyUpdater: com.bumptech.glide.load.Option.CacheKeyUpdater<any>): com.bumptech.glide.load.Option<any>;
					public equals(o: any): boolean;
					public hashCode(): number;
					public getDefaultValue(): T;
				}
				export module Option {
					export class CacheKeyUpdater<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.Option.CacheKeyUpdater<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.Option$CacheKeyUpdater interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							update(param0: number[], param1: T, param2: java.security.MessageDigest): void;
						});
						public constructor();
						public update(param0: number[], param1: T, param2: java.security.MessageDigest): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Options extends java.lang.Object implements com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.load.Options>;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public constructor();
					public set(option: com.bumptech.glide.load.Option<any>, value: any): com.bumptech.glide.load.Options;
					public get(option: com.bumptech.glide.load.Option<any>): any;
					public putAll(other: com.bumptech.glide.load.Options): void;
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class PreferredColorSpace {
					public static class: java.lang.Class<com.bumptech.glide.load.PreferredColorSpace>;
					public static SRGB: com.bumptech.glide.load.PreferredColorSpace;
					public static DISPLAY_P3: com.bumptech.glide.load.PreferredColorSpace;
					public static valueOf(name: string): com.bumptech.glide.load.PreferredColorSpace;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.bumptech.glide.load.PreferredColorSpace[];
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class ResourceDecoder<T, Z>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.load.ResourceDecoder<any,any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ResourceDecoder<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						handles(param0: T, param1: com.bumptech.glide.load.Options): boolean;
						decode(param0: T, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<Z>;
					});
					public constructor();
					public decode(param0: T, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<Z>;
					public handles(param0: T, param1: com.bumptech.glide.load.Options): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class ResourceEncoder<T>  extends com.bumptech.glide.load.Encoder<com.bumptech.glide.load.engine.Resource<any>> {
					public static class: java.lang.Class<com.bumptech.glide.load.ResourceEncoder<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ResourceEncoder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
						encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					});
					public constructor();
					public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					public getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Transformation<T>  extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.load.Transformation<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Transformation<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						updateDiskCacheKey(param0: java.security.MessageDigest): void;
						equals(param0: any): boolean;
						hashCode(): number;
						"<clinit>"(): void;
					});
					public constructor();
					public static CHARSET: java.nio.charset.Charset;
					public static STRING_CHARSET_NAME: string;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class AssetFileDescriptorLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher<android.content.res.AssetFileDescriptor> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.AssetFileDescriptorLocalUriFetcher>;
						public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public constructor(contentResolver: android.content.ContentResolver, uri: android.net.Uri);
						public close(data: android.content.res.AssetFileDescriptor): void;
						public cleanup(): void;
						public loadResource(uri: android.net.Uri, contentResolver: android.content.ContentResolver): android.content.res.AssetFileDescriptor;
						public loadResource(param0: android.net.Uri, param1: android.content.ContentResolver): any;
						public getDataClass(): java.lang.Class<android.content.res.AssetFileDescriptor>;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export abstract class AssetPathFetcher<T>  extends com.bumptech.glide.load.data.DataFetcher<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.AssetPathFetcher<any>>;
						public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public loadResource(param0: android.content.res.AssetManager, param1: string): any;
						public constructor(assetManager: android.content.res.AssetManager, assetPath: string);
						public cleanup(): void;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class BufferedOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<com.bumptech.glide.load.data.BufferedOutputStream>;
						public write(b: number[]): void;
						public constructor();
						public close(): void;
						public write(param0: number): void;
						public write(b: number[], initialOffset: number, length: number): void;
						public write(b: number): void;
						public flush(): void;
						public constructor(out: java.io.OutputStream, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class DataFetcher<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.data.DataFetcher<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.data.DataFetcher<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							cleanup(): void;
							cancel(): void;
							getDataClass(): java.lang.Class<T>;
							getDataSource(): com.bumptech.glide.load.DataSource;
						});
						public constructor();
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public cleanup(): void;
						public getDataClass(): java.lang.Class<T>;
					}
					export module DataFetcher {
						export class DataCallback<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.data.DataFetcher.DataCallback<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.DataFetcher$DataCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDataReady(param0: T): void;
								onLoadFailed(param0: java.lang.Exception): void;
							});
							public constructor();
							public onLoadFailed(param0: java.lang.Exception): void;
							public onDataReady(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class DataRewinder<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.data.DataRewinder<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.data.DataRewinder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							rewindAndGet(): T;
							cleanup(): void;
						});
						public constructor();
						public rewindAndGet(): T;
						public cleanup(): void;
					}
					export module DataRewinder {
						export class Factory<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.data.DataRewinder.Factory<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.DataRewinder$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								build(param0: T): com.bumptech.glide.load.data.DataRewinder<T>;
								getDataClass(): java.lang.Class<T>;
							});
							public constructor();
							public build(param0: T): com.bumptech.glide.load.data.DataRewinder<T>;
							public getDataClass(): java.lang.Class<T>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class DataRewinderRegistry extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.data.DataRewinderRegistry>;
						public constructor();
						public register(factory: com.bumptech.glide.load.data.DataRewinder.Factory<any>): void;
						public build(data: any): com.bumptech.glide.load.data.DataRewinder<any>;
					}
					export module DataRewinderRegistry {
						export class DefaultRewinder extends com.bumptech.glide.load.data.DataRewinder<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.data.DataRewinderRegistry.DefaultRewinder>;
							public cleanup(): void;
							public rewindAndGet(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class ExifOrientationStream extends java.io.FilterInputStream {
						public static class: java.lang.Class<com.bumptech.glide.load.data.ExifOrientationStream>;
						public read(): number;
						public constructor();
						public read(buffer: number[], byteOffset: number, byteCount: number): number;
						public close(): void;
						public constructor(in: java.io.InputStream, orientation: number);
						public read(b: number[]): number;
						public skip(n: number): number;
						public skip(byteCount: number): number;
						public constructor(in: java.io.InputStream);
						public mark(readlimit: number): void;
						public read(b: number[], off: number, len: number): number;
						public markSupported(): boolean;
						public mark(readLimit: number): void;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class FileDescriptorAssetPathFetcher extends com.bumptech.glide.load.data.AssetPathFetcher<android.content.res.AssetFileDescriptor> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.FileDescriptorAssetPathFetcher>;
						public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public loadResource(assetManager: android.content.res.AssetManager, path: string): android.content.res.AssetFileDescriptor;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public close(data: android.content.res.AssetFileDescriptor): void;
						public loadResource(param0: android.content.res.AssetManager, param1: string): any;
						public constructor(assetManager: android.content.res.AssetManager, assetPath: string);
						public cleanup(): void;
						public getDataClass(): java.lang.Class<android.content.res.AssetFileDescriptor>;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class FileDescriptorLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher<android.os.ParcelFileDescriptor> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.FileDescriptorLocalUriFetcher>;
						public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public close(data: android.os.ParcelFileDescriptor): void;
						public loadResource(uri: android.net.Uri, contentResolver: android.content.ContentResolver): android.os.ParcelFileDescriptor;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public constructor(contentResolver: android.content.ContentResolver, uri: android.net.Uri);
						public cleanup(): void;
						public getDataClass(): java.lang.Class<android.os.ParcelFileDescriptor>;
						public loadResource(param0: android.net.Uri, param1: android.content.ContentResolver): any;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class HttpUrlFetcher extends com.bumptech.glide.load.data.DataFetcher<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.HttpUrlFetcher>;
						public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public getDataClass(): java.lang.Class<java.io.InputStream>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public constructor(glideUrl: com.bumptech.glide.load.model.GlideUrl, timeout: number);
						public cancel(): void;
						public cleanup(): void;
						public getDataClass(): java.lang.Class<any>;
					}
					export module HttpUrlFetcher {
						export class DefaultHttpUrlConnectionFactory extends java.lang.Object implements com.bumptech.glide.load.data.HttpUrlFetcher.HttpUrlConnectionFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.data.HttpUrlFetcher.DefaultHttpUrlConnectionFactory>;
							public build(param0: java.net.URL): java.net.HttpURLConnection;
							public build(url: java.net.URL): java.net.HttpURLConnection;
						}
						export class HttpUrlConnectionFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.data.HttpUrlFetcher.HttpUrlConnectionFactory>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.HttpUrlFetcher$HttpUrlConnectionFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								build(param0: java.net.URL): java.net.HttpURLConnection;
							});
							public constructor();
							public build(param0: java.net.URL): java.net.HttpURLConnection;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class InputStreamRewinder extends com.bumptech.glide.load.data.DataRewinder<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.InputStreamRewinder>;
						public constructor(is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
						public rewindAndGet(): java.io.InputStream;
						public fixMarkLimits(): void;
						public cleanup(): void;
						public rewindAndGet(): any;
					}
					export module InputStreamRewinder {
						export class Factory extends com.bumptech.glide.load.data.DataRewinder.Factory<java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.data.InputStreamRewinder.Factory>;
							public constructor(byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public build(data: java.io.InputStream): com.bumptech.glide.load.data.DataRewinder<java.io.InputStream>;
							public build(param0: any): com.bumptech.glide.load.data.DataRewinder<any>;
							public getDataClass(): java.lang.Class<any>;
							public getDataClass(): java.lang.Class<java.io.InputStream>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export abstract class LocalUriFetcher<T>  extends com.bumptech.glide.load.data.DataFetcher<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.LocalUriFetcher<any>>;
						public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public constructor(contentResolver: android.content.ContentResolver, uri: android.net.Uri);
						public cleanup(): void;
						public loadResource(param0: android.net.Uri, param1: android.content.ContentResolver): any;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class ParcelFileDescriptorRewinder extends com.bumptech.glide.load.data.DataRewinder<android.os.ParcelFileDescriptor> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.ParcelFileDescriptorRewinder>;
						public constructor(parcelFileDescriptor: android.os.ParcelFileDescriptor);
						public static isSupported(): boolean;
						public rewindAndGet(): android.os.ParcelFileDescriptor;
						public cleanup(): void;
						public rewindAndGet(): any;
					}
					export module ParcelFileDescriptorRewinder {
						export class Factory extends com.bumptech.glide.load.data.DataRewinder.Factory<android.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.data.ParcelFileDescriptorRewinder.Factory>;
							public constructor();
							public build(parcelFileDescriptor: android.os.ParcelFileDescriptor): com.bumptech.glide.load.data.DataRewinder<android.os.ParcelFileDescriptor>;
							public getDataClass(): java.lang.Class<android.os.ParcelFileDescriptor>;
							public build(param0: any): com.bumptech.glide.load.data.DataRewinder<any>;
							public getDataClass(): java.lang.Class<any>;
						}
						export class InternalRewinder extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.data.ParcelFileDescriptorRewinder.InternalRewinder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class StreamAssetPathFetcher extends com.bumptech.glide.load.data.AssetPathFetcher<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.StreamAssetPathFetcher>;
						public getDataClass(): java.lang.Class<java.io.InputStream>;
						public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadResource(assetManager: android.content.res.AssetManager, path: string): java.io.InputStream;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public loadResource(param0: android.content.res.AssetManager, param1: string): any;
						public constructor(assetManager: android.content.res.AssetManager, assetPath: string);
						public cleanup(): void;
						public close(data: java.io.InputStream): void;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class StreamLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.StreamLocalUriFetcher>;
						public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public loadResource(uri: android.net.Uri, contentResolver: android.content.ContentResolver): java.io.InputStream;
						public loadResource(param0: android.net.Uri, param1: android.content.ContentResolver): any;
						public constructor(resolver: android.content.ContentResolver, uri: android.net.Uri);
						public getDataClass(): java.lang.Class<java.io.InputStream>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public constructor(contentResolver: android.content.ContentResolver, uri: android.net.Uri);
						public cleanup(): void;
						public close(data: java.io.InputStream): void;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export module mediastore {
						export class FileService extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.FileService>;
							public get(path: string): java.io.File;
							public exists(file: java.io.File): boolean;
							public length(file: java.io.File): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export module mediastore {
						export class MediaStoreUtil extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.MediaStoreUtil>;
							public static isMediaStoreImageUri(uri: android.net.Uri): boolean;
							public static isMediaStoreVideoUri(uri: android.net.Uri): boolean;
							public static isThumbnailSize(width: number, height: number): boolean;
							public static isMediaStoreUri(uri: android.net.Uri): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export module mediastore {
						export class ThumbFetcher extends com.bumptech.glide.load.data.DataFetcher<java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbFetcher>;
							public cancel(): void;
							public static buildImageFetcher(context: android.content.Context, uri: android.net.Uri): com.bumptech.glide.load.data.mediastore.ThumbFetcher;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
							public static buildVideoFetcher(context: android.content.Context, uri: android.net.Uri): com.bumptech.glide.load.data.mediastore.ThumbFetcher;
							public getDataClass(): java.lang.Class<java.io.InputStream>;
						}
						export module ThumbFetcher {
							export class ImageThumbnailQuery extends java.lang.Object implements com.bumptech.glide.load.data.mediastore.ThumbnailQuery {
								public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbFetcher.ImageThumbnailQuery>;
								public query(uri: android.net.Uri): android.database.Cursor;
								public query(param0: android.net.Uri): android.database.Cursor;
							}
							export class VideoThumbnailQuery extends java.lang.Object implements com.bumptech.glide.load.data.mediastore.ThumbnailQuery {
								public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbFetcher.VideoThumbnailQuery>;
								public query(uri: android.net.Uri): android.database.Cursor;
								public query(param0: android.net.Uri): android.database.Cursor;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export module mediastore {
						export class ThumbnailQuery extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbnailQuery>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.mediastore.ThumbnailQuery interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								query(param0: android.net.Uri): android.database.Cursor;
							});
							public constructor();
							public query(param0: android.net.Uri): android.database.Cursor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export module mediastore {
						export class ThumbnailStreamOpener extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbnailStreamOpener>;
							public open(uri: android.net.Uri): java.io.InputStream;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class ActiveResources extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.ActiveResources>;
					}
					export module ActiveResources {
						export class DequeuedResourceCallback extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.ActiveResources.DequeuedResourceCallback>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.ActiveResources$DequeuedResourceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResourceDequeued(): void;
							});
							public constructor();
							public onResourceDequeued(): void;
						}
						export class ResourceWeakReference extends java.lang.ref.WeakReference<com.bumptech.glide.load.engine.EngineResource<any>> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.ActiveResources.ResourceWeakReference>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class CallbackException extends java.lang.RuntimeException {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.CallbackException>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DataCacheGenerator extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DataCacheGenerator>;
						public startNext(): boolean;
						public onLoadFailed(param0: java.lang.Exception): void;
						public onLoadFailed(e: java.lang.Exception): void;
						public cancel(): void;
						public onDataReady(data: any): void;
						public onDataReady(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DataCacheKey extends java.lang.Object implements com.bumptech.glide.load.Key {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DataCacheKey>;
						public equals(obj: any): boolean;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DataCacheWriter<DataType>  extends com.bumptech.glide.load.engine.cache.DiskCache.Writer {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DataCacheWriter<any>>;
						public write(param0: java.io.File): boolean;
						public write(file: java.io.File): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DataFetcherGenerator extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DataFetcherGenerator>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.DataFetcherGenerator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							startNext(): boolean;
							cancel(): void;
						});
						public constructor();
						public startNext(): boolean;
						public cancel(): void;
					}
					export module DataFetcherGenerator {
						export class FetcherReadyCallback extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DataFetcherGenerator.FetcherReadyCallback>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DataFetcherGenerator$FetcherReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								reschedule(): void;
								onDataFetcherReady(param0: com.bumptech.glide.load.Key, param1: any, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource, param4: com.bumptech.glide.load.Key): void;
								onDataFetcherFailed(param0: com.bumptech.glide.load.Key, param1: java.lang.Exception, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource): void;
							});
							public constructor();
							public reschedule(): void;
							public onDataFetcherFailed(param0: com.bumptech.glide.load.Key, param1: java.lang.Exception, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource): void;
							public onDataFetcherReady(param0: com.bumptech.glide.load.Key, param1: any, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource, param4: com.bumptech.glide.load.Key): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DecodeHelper<Transcode>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeHelper<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DecodeJob<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob<any>>;
						public onDataFetcherReady(sourceKey: com.bumptech.glide.load.Key, data: any, fetcher: com.bumptech.glide.load.data.DataFetcher<any>, dataSource: com.bumptech.glide.load.DataSource, attemptedKey: com.bumptech.glide.load.Key): void;
						public run(): void;
						public onDataFetcherReady(param0: com.bumptech.glide.load.Key, param1: any, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource, param4: com.bumptech.glide.load.Key): void;
						public cancel(): void;
						public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
						public onDataFetcherFailed(attemptedKey: com.bumptech.glide.load.Key, e: java.lang.Exception, fetcher: com.bumptech.glide.load.data.DataFetcher<any>, dataSource: com.bumptech.glide.load.DataSource): void;
						public compareTo(other: com.bumptech.glide.load.engine.DecodeJob<any>): number;
						public reschedule(): void;
						public onDataFetcherFailed(param0: com.bumptech.glide.load.Key, param1: java.lang.Exception, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource): void;
					}
					export module DecodeJob {
						export class Callback<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.Callback<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DecodeJob$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResourceReady(param0: com.bumptech.glide.load.engine.Resource<R>, param1: com.bumptech.glide.load.DataSource, param2: boolean): void;
								onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
								reschedule(param0: com.bumptech.glide.load.engine.DecodeJob<any>): void;
							});
							public constructor();
							public onResourceReady(param0: com.bumptech.glide.load.engine.Resource<R>, param1: com.bumptech.glide.load.DataSource, param2: boolean): void;
							public reschedule(param0: com.bumptech.glide.load.engine.DecodeJob<any>): void;
							public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
						}
						export class DecodeCallback<Z>  extends com.bumptech.glide.load.engine.DecodePath.DecodeCallback<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.DecodeCallback<any>>;
							public onResourceDecoded(param0: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public onResourceDecoded(decoded: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
						}
						export class DeferredEncodeManager<Z>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.DeferredEncodeManager<any>>;
						}
						export class DiskCacheProvider extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.DiskCacheProvider>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DecodeJob$DiskCacheProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
							});
							public constructor();
							public getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
						}
						export class ReleaseManager extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.ReleaseManager>;
						}
						export class RunReason {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.RunReason>;
							public static INITIALIZE: com.bumptech.glide.load.engine.DecodeJob.RunReason;
							public static SWITCH_TO_SOURCE_SERVICE: com.bumptech.glide.load.engine.DecodeJob.RunReason;
							public static DECODE_DATA: com.bumptech.glide.load.engine.DecodeJob.RunReason;
							public static values(): com.bumptech.glide.load.engine.DecodeJob.RunReason[];
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): com.bumptech.glide.load.engine.DecodeJob.RunReason;
						}
						export class Stage {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.Stage>;
							public static INITIALIZE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static RESOURCE_CACHE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static DATA_CACHE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static SOURCE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static ENCODE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static FINISHED: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static values(): com.bumptech.glide.load.engine.DecodeJob.Stage[];
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): com.bumptech.glide.load.engine.DecodeJob.Stage;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DecodePath<DataType, ResourceType, Transcode>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodePath<any,any,any>>;
						public constructor(dataClass: java.lang.Class<DataType>, resourceClass: java.lang.Class<ResourceType>, transcodeClass: java.lang.Class<Transcode>, decoders: java.util.List<any>, transcoder: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<ResourceType,Transcode>, listPool: androidx.core.util.Pools.Pool<java.util.List<java.lang.Throwable>>);
						public decode(rewinder: com.bumptech.glide.load.data.DataRewinder<DataType>, width: number, height: number, options: com.bumptech.glide.load.Options, callback: com.bumptech.glide.load.engine.DecodePath.DecodeCallback<ResourceType>): com.bumptech.glide.load.engine.Resource<Transcode>;
						public toString(): string;
					}
					export module DecodePath {
						export class DecodeCallback<ResourceType>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodePath.DecodeCallback<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DecodePath$DecodeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResourceDecoded(param0: com.bumptech.glide.load.engine.Resource<ResourceType>): com.bumptech.glide.load.engine.Resource<ResourceType>;
							});
							public constructor();
							public onResourceDecoded(param0: com.bumptech.glide.load.engine.Resource<ResourceType>): com.bumptech.glide.load.engine.Resource<ResourceType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export abstract class DiskCacheStrategy extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DiskCacheStrategy>;
						public static ALL: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static NONE: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static DATA: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static RESOURCE: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static AUTOMATIC: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public constructor();
						public decodeCachedData(): boolean;
						public decodeCachedResource(): boolean;
						public isDataCacheable(param0: com.bumptech.glide.load.DataSource): boolean;
						public isResourceCacheable(param0: boolean, param1: com.bumptech.glide.load.DataSource, param2: com.bumptech.glide.load.EncodeStrategy): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class Engine extends java.lang.Object implements com.bumptech.glide.load.engine.EngineJobListener, com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener, com.bumptech.glide.load.engine.EngineResource.ResourceListener {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine>;
						public onEngineJobComplete(engineJob: com.bumptech.glide.load.engine.EngineJob<any>, key: com.bumptech.glide.load.Key, resource: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public onResourceRemoved(resource: com.bumptech.glide.load.engine.Resource<any>): void;
						public onEngineJobCancelled(engineJob: com.bumptech.glide.load.engine.EngineJob<any>, key: com.bumptech.glide.load.Key): void;
						public onEngineJobComplete(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key, param2: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public load(glideContext: com.bumptech.glide.GlideContext, model: any, signature: com.bumptech.glide.load.Key, width: number, height: number, resourceClass: java.lang.Class<any>, transcodeClass: java.lang.Class<any>, priority: com.bumptech.glide.Priority, diskCacheStrategy: com.bumptech.glide.load.engine.DiskCacheStrategy, transformations: java.util.Map<any,any>, isTransformationRequired: boolean, isScaleOnlyOrNoTransform: boolean, options: com.bumptech.glide.load.Options, isMemoryCacheable: boolean, useUnlimitedSourceExecutorPool: boolean, useAnimationPool: boolean, onlyRetrieveFromCache: boolean, cb: com.bumptech.glide.request.ResourceCallback, callbackExecutor: java.util.concurrent.Executor): com.bumptech.glide.load.engine.Engine.LoadStatus;
						public constructor(memoryCache: com.bumptech.glide.load.engine.cache.MemoryCache, diskCacheFactory: com.bumptech.glide.load.engine.cache.DiskCache.Factory, diskCacheExecutor: com.bumptech.glide.load.engine.executor.GlideExecutor, sourceExecutor: com.bumptech.glide.load.engine.executor.GlideExecutor, sourceUnlimitedExecutor: com.bumptech.glide.load.engine.executor.GlideExecutor, animationExecutor: com.bumptech.glide.load.engine.executor.GlideExecutor, isActiveResourceRetentionAllowed: boolean);
						public clearDiskCache(): void;
						public shutdown(): void;
						public release(resource: com.bumptech.glide.load.engine.Resource<any>): void;
						public onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key): void;
						public onResourceReleased(cacheKey: com.bumptech.glide.load.Key, resource: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource<any>): void;
					}
					export module Engine {
						export class DecodeJobFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine.DecodeJobFactory>;
						}
						export class EngineJobFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine.EngineJobFactory>;
						}
						export class LazyDiskCacheProvider extends java.lang.Object implements com.bumptech.glide.load.engine.DecodeJob.DiskCacheProvider {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine.LazyDiskCacheProvider>;
							public getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
						}
						export class LoadStatus extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine.LoadStatus>;
							public cancel(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineJob<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob<any>>;
						public onResourceReady(resource: com.bumptech.glide.load.engine.Resource<R>, dataSource: com.bumptech.glide.load.DataSource, isLoadedFromAlternateCacheKey: boolean): void;
						public reschedule(param0: com.bumptech.glide.load.engine.DecodeJob<any>): void;
						public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
						public onLoadFailed(e: com.bumptech.glide.load.engine.GlideException): void;
						public reschedule(job: com.bumptech.glide.load.engine.DecodeJob<any>): void;
						public start(decodeJob: com.bumptech.glide.load.engine.DecodeJob<R>): void;
						public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
						public onResourceReady(param0: com.bumptech.glide.load.engine.Resource<R>, param1: com.bumptech.glide.load.DataSource, param2: boolean): void;
					}
					export module EngineJob {
						export class CallLoadFailed extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.CallLoadFailed>;
							public run(): void;
						}
						export class CallResourceReady extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.CallResourceReady>;
							public run(): void;
						}
						export class EngineResourceFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.EngineResourceFactory>;
							public build(resource: com.bumptech.glide.load.engine.Resource<any>, isMemoryCacheable: boolean, key: com.bumptech.glide.load.Key, listener: com.bumptech.glide.load.engine.EngineResource.ResourceListener): com.bumptech.glide.load.engine.EngineResource<any>;
						}
						export class ResourceCallbackAndExecutor extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.ResourceCallbackAndExecutor>;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public equals(o: any): boolean;
						}
						export class ResourceCallbacksAndExecutors extends java.lang.Iterable<com.bumptech.glide.load.engine.EngineJob.ResourceCallbackAndExecutor> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.ResourceCallbacksAndExecutors>;
							public iterator(): java.util.Iterator<any>;
							public spliterator(): java.util.Spliterator<any>;
							public iterator(): java.util.Iterator<com.bumptech.glide.load.engine.EngineJob.ResourceCallbackAndExecutor>;
							public forEach(action: any /* any*/): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineJobListener extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJobListener>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.EngineJobListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEngineJobComplete(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key, param2: com.bumptech.glide.load.engine.EngineResource<any>): void;
							onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key): void;
						});
						public constructor();
						public onEngineJobComplete(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key, param2: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineKey extends java.lang.Object implements com.bumptech.glide.load.Key {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineKey>;
						public equals(obj: any): boolean;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineKeyFactory extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineKeyFactory>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineResource<Z>  extends com.bumptech.glide.load.engine.Resource<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineResource<any>>;
						public getResourceClass(): java.lang.Class<any>;
						public getSize(): number;
						public recycle(): void;
						public get(): any;
						public toString(): string;
					}
					export module EngineResource {
						export class ResourceListener extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineResource.ResourceListener>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.EngineResource$ResourceListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource<any>): void;
							});
							public constructor();
							public onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class GlideException extends java.lang.Exception {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.GlideException>;
						public getMessage(): string;
						public constructor();
						public constructor(detailMessage: string, cause: java.lang.Throwable);
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(detailMessage: string, causes: java.util.List<java.lang.Throwable>);
						public setOrigin(exception: java.lang.Exception): void;
						public printStackTrace(s: java.io.PrintStream): void;
						public printStackTrace(err: java.io.PrintStream): void;
						public printStackTrace(err: java.io.PrintWriter): void;
						public getRootCauses(): java.util.List<java.lang.Throwable>;
						public printStackTrace(s: java.io.PrintWriter): void;
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
						public getOrigin(): java.lang.Exception;
						public getCauses(): java.util.List<java.lang.Throwable>;
						public fillInStackTrace(): java.lang.Throwable;
						public printStackTrace(): void;
						public logRootCauses(tag: string): void;
					}
					export module GlideException {
						export class IndentedAppendable extends java.lang.Object implements java.lang.Appendable {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.GlideException.IndentedAppendable>;
							public append(charSequence: string, start: number, end: number): java.lang.Appendable;
							public append(charSequence: string): java.lang.Appendable;
							public append(c: string): java.lang.Appendable;
							public append(param0: string): java.lang.Appendable;
							public append(param0: string, param1: number, param2: number): java.lang.Appendable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class Initializable extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.Initializable>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.Initializable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(): void;
						});
						public constructor();
						public initialize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class Jobs extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.Jobs>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class LoadPath<Data, ResourceType, Transcode>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.LoadPath<any,any,any>>;
						public load(rewinder: com.bumptech.glide.load.data.DataRewinder<Data>, options: com.bumptech.glide.load.Options, width: number, height: number, decodeCallback: com.bumptech.glide.load.engine.DecodePath.DecodeCallback<ResourceType>): com.bumptech.glide.load.engine.Resource<Transcode>;
						public getDataClass(): java.lang.Class<Data>;
						public constructor(dataClass: java.lang.Class<Data>, resourceClass: java.lang.Class<ResourceType>, transcodeClass: java.lang.Class<Transcode>, decodePaths: java.util.List<com.bumptech.glide.load.engine.DecodePath<Data,ResourceType,Transcode>>, listPool: androidx.core.util.Pools.Pool<java.util.List<java.lang.Throwable>>);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class LockedResource<Z>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.LockedResource<any>>;
						public getSize(): number;
						public get(): Z;
						public recycle(): void;
						public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
						public getResourceClass(): java.lang.Class<Z>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class Resource<Z>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.Resource<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.Resource<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getResourceClass(): java.lang.Class<Z>;
							get(): Z;
							getSize(): number;
							recycle(): void;
						});
						public constructor();
						public getSize(): number;
						public get(): Z;
						public recycle(): void;
						public getResourceClass(): java.lang.Class<Z>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class ResourceCacheGenerator extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.ResourceCacheGenerator>;
						public startNext(): boolean;
						public onLoadFailed(param0: java.lang.Exception): void;
						public onLoadFailed(e: java.lang.Exception): void;
						public cancel(): void;
						public onDataReady(data: any): void;
						public onDataReady(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class ResourceCacheKey extends java.lang.Object implements com.bumptech.glide.load.Key {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.ResourceCacheKey>;
						public equals(obj: any): boolean;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public hashCode(): number;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public equals(o: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class ResourceRecycler extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.ResourceRecycler>;
					}
					export module ResourceRecycler {
						export class ResourceRecyclerCallback extends java.lang.Object implements android.os.Handler.Callback {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.ResourceRecycler.ResourceRecyclerCallback>;
							public handleMessage(message: android.os.Message): boolean;
							public handleMessage(param0: android.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class SourceGenerator extends java.lang.Object implements com.bumptech.glide.load.engine.DataFetcherGenerator, com.bumptech.glide.load.engine.DataFetcherGenerator.FetcherReadyCallback {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.SourceGenerator>;
						public startNext(): boolean;
						public onDataFetcherReady(sourceKey: com.bumptech.glide.load.Key, data: any, fetcher: com.bumptech.glide.load.data.DataFetcher<any>, dataSource: com.bumptech.glide.load.DataSource, attemptedKey: com.bumptech.glide.load.Key): void;
						public onDataFetcherReady(param0: com.bumptech.glide.load.Key, param1: any, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource, param4: com.bumptech.glide.load.Key): void;
						public onDataFetcherFailed(sourceKey: com.bumptech.glide.load.Key, e: java.lang.Exception, fetcher: com.bumptech.glide.load.data.DataFetcher<any>, dataSource: com.bumptech.glide.load.DataSource): void;
						public cancel(): void;
						public reschedule(): void;
						public onDataFetcherFailed(param0: com.bumptech.glide.load.Key, param1: java.lang.Exception, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class ArrayAdapterInterface<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getTag(): string;
								getArrayLength(param0: T): number;
								newArray(param0: number): T;
								getElementSizeInBytes(): number;
							});
							public constructor();
							public newArray(param0: number): T;
							public getArrayLength(param0: T): number;
							public getElementSizeInBytes(): number;
							public getTag(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class ArrayPool extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								put(param0: any, param1: java.lang.Class<any>): void;
								put(param0: any): void;
								get(param0: number, param1: java.lang.Class<any>): any;
								getExact(param0: number, param1: java.lang.Class<any>): any;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public constructor();
							public static STANDARD_BUFFER_SIZE_BYTES: number;
							public getExact(param0: number, param1: java.lang.Class<any>): any;
							public put(param0: any): void;
							public get(param0: number, param1: java.lang.Class<any>): any;
							public clearMemory(): void;
							/** @deprecated */
							public put(param0: any, param1: java.lang.Class<any>): void;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class AttributeStrategy extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy>;
							public get(width: number, height: number, config: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public removeLast(): android.graphics.Bitmap;
							public put(bitmap: android.graphics.Bitmap): void;
							public getSize(bitmap: android.graphics.Bitmap): number;
							public logBitmap(param0: number, param1: number, param2: android.graphics.Bitmap.Config): string;
							public logBitmap(bitmap: android.graphics.Bitmap): string;
							public logBitmap(param0: android.graphics.Bitmap): string;
							public getSize(param0: android.graphics.Bitmap): number;
							public toString(): string;
							public logBitmap(width: number, height: number, config: android.graphics.Bitmap.Config): string;
							public put(param0: android.graphics.Bitmap): void;
						}
						export module AttributeStrategy {
							export class Key extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key>;
								public toString(): string;
								public init(width: number, height: number, config: android.graphics.Bitmap.Config): void;
								public equals(obj: any): boolean;
								public constructor(pool: com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.KeyPool);
								public equals(o: any): boolean;
								public offer(): void;
								public hashCode(): number;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key> {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.KeyPool>;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export abstract class BaseKeyPool<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<any>>;
							public offer(key: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class BitmapPool extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getMaxSize(): number;
								setSizeMultiplier(param0: number): void;
								put(param0: android.graphics.Bitmap): void;
								get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
								getDirty(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public constructor();
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public getDirty(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public put(param0: android.graphics.Bitmap): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class BitmapPoolAdapter extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.BitmapPoolAdapter>;
							public constructor();
							public getDirty(width: number, height: number, config: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public put(bitmap: android.graphics.Bitmap): void;
							public getDirty(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public setSizeMultiplier(param0: number): void;
							public put(param0: android.graphics.Bitmap): void;
							public get(width: number, height: number, config: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public setSizeMultiplier(sizeMultiplier: number): void;
							public trimMemory(level: number): void;
							public clearMemory(): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class ByteArrayAdapter extends com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface<number[]> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.ByteArrayAdapter>;
							public constructor();
							public getArrayLength(param0: any): number;
							public newArray(length: number): number[];
							public getElementSizeInBytes(): number;
							public newArray(param0: number): any;
							public getTag(): string;
							public getArrayLength(array: number[]): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class GroupedLinkedMap<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.GroupedLinkedMap<any,any>>;
							public get(key: K): V;
							public put(key: K, value: V): void;
							public toString(): string;
							public removeLast(): V;
						}
						export module GroupedLinkedMap {
							export class LinkedEntry<K, V>  extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.GroupedLinkedMap.LinkedEntry<any,any>>;
								public size(): number;
								public removeLast(): V;
								public add(value: V): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class IntegerArrayAdapter extends com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface<number[]> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.IntegerArrayAdapter>;
							public constructor();
							public getArrayLength(param0: any): number;
							public newArray(length: number): number[];
							public getElementSizeInBytes(): number;
							public newArray(param0: number): any;
							public getTag(): string;
							public getArrayLength(array: number[]): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class LruArrayPool extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool>;
							public constructor();
							public get(size: number, arrayClass: java.lang.Class<any>): any;
							public put(param0: any): void;
							public constructor(maxSize: number);
							public put(array: any): void;
							/** @deprecated */
							public put(param0: any, param1: java.lang.Class<any>): void;
							/** @deprecated */
							public put(array: any, arrayClass: java.lang.Class<any>): void;
							public getExact(param0: number, param1: java.lang.Class<any>): any;
							public trimMemory(level: number): void;
							public getExact(size: number, arrayClass: java.lang.Class<any>): any;
							public get(param0: number, param1: java.lang.Class<any>): any;
							public clearMemory(): void;
							public trimMemory(param0: number): void;
						}
						export module LruArrayPool {
							export class Key extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool.Key>;
								public toString(): string;
								public equals(obj: any): boolean;
								public equals(o: any): boolean;
								public offer(): void;
								public hashCode(): number;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool.Key> {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool.KeyPool>;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class LruBitmapPool extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool>;
							public constructor(maxSize: number, param1: java.util.Set<android.graphics.Bitmap.Config>);
							public getDirty(width: number, height: number, config: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public getCurrentSize(): number;
							public put(bitmap: android.graphics.Bitmap): void;
							public getDirty(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public missCount(): number;
							public constructor(maxSize: number);
							public setSizeMultiplier(param0: number): void;
							public put(param0: android.graphics.Bitmap): void;
							public get(width: number, height: number, config: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public evictionCount(): number;
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public setSizeMultiplier(sizeMultiplier: number): void;
							public trimMemory(level: number): void;
							public hitCount(): number;
							public clearMemory(): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
						export module LruBitmapPool {
							export class BitmapTracker extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.BitmapTracker>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool$BitmapTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									add(param0: android.graphics.Bitmap): void;
									remove(param0: android.graphics.Bitmap): void;
								});
								public constructor();
								public remove(param0: android.graphics.Bitmap): void;
								public add(param0: android.graphics.Bitmap): void;
							}
							export class NullBitmapTracker extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.BitmapTracker {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.NullBitmapTracker>;
								public remove(param0: android.graphics.Bitmap): void;
								public add(bitmap: android.graphics.Bitmap): void;
								public remove(bitmap: android.graphics.Bitmap): void;
								public add(param0: android.graphics.Bitmap): void;
							}
							export class ThrowingBitmapTracker extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.BitmapTracker {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.ThrowingBitmapTracker>;
								public remove(param0: android.graphics.Bitmap): void;
								public add(bitmap: android.graphics.Bitmap): void;
								public remove(bitmap: android.graphics.Bitmap): void;
								public add(param0: android.graphics.Bitmap): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class LruPoolStrategy extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								put(param0: android.graphics.Bitmap): void;
								get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
								removeLast(): android.graphics.Bitmap;
								logBitmap(param0: android.graphics.Bitmap): string;
								logBitmap(param0: number, param1: number, param2: android.graphics.Bitmap.Config): string;
								getSize(param0: android.graphics.Bitmap): number;
							});
							public constructor();
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public removeLast(): android.graphics.Bitmap;
							public logBitmap(param0: number, param1: number, param2: android.graphics.Bitmap.Config): string;
							public logBitmap(param0: android.graphics.Bitmap): string;
							public getSize(param0: android.graphics.Bitmap): number;
							public put(param0: android.graphics.Bitmap): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class Poolable extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.Poolable>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.Poolable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								offer(): void;
							});
							public constructor();
							public offer(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class PrettyPrintTreeMap<K, V>  extends java.util.TreeMap<any,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.PrettyPrintTreeMap<any,any>>;
							public get(param0: any): any;
							public higherEntry(key: any): java.util.Map.Entry<any,any>;
							public remove(param0: any): any;
							public lastEntry(): java.util.Map.Entry<any,any>;
							public headMap(param0: any, param1: boolean): java.util.NavigableMap<any,any>;
							public putIfAbsent(key: any, value: any): any;
							public ceilingKey(param0: any): any;
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public values(): java.util.Collection<any>;
							public subMap(fromKey: any, toKey: any): java.util.SortedMap<any,any>;
							public remove(key: any): any;
							public firstEntry(): java.util.Map.Entry<any,any>;
							public put(param0: any, param1: any): any;
							public pollFirstEntry(): java.util.Map.Entry<any,any>;
							public descendingMap(): java.util.NavigableMap<any,any>;
							public containsKey(param0: any): boolean;
							public remove(key: any, value: any): boolean;
							public pollLastEntry(): java.util.Map.Entry<any,any>;
							public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
							public higherEntry(param0: any): java.util.Map.Entry<any,any>;
							public putAll(map: java.util.Map<any,any>): void;
							public navigableKeySet(): java.util.NavigableSet<any>;
							public containsValue(value: any): boolean;
							public replaceAll(function: any /* any<any,any,any>*/): void;
							public lowerEntry(key: any): java.util.Map.Entry<any,any>;
							public floorEntry(param0: any): java.util.Map.Entry<any,any>;
							public isEmpty(): boolean;
							public equals(param0: any): boolean;
							public putAll(param0: java.util.Map<any,any>): void;
							public tailMap(fromKey: any): java.util.SortedMap<any,any>;
							public put(key: any, value: any): any;
							public size(): number;
							public ceilingEntry(key: any): java.util.Map.Entry<any,any>;
							public hashCode(): number;
							public toString(): string;
							public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
							public floorEntry(key: any): java.util.Map.Entry<any,any>;
							public higherKey(key: any): any;
							public subMap(fromKey: any, fromInclusive: boolean, toKey: any, toInclusive: boolean): java.util.NavigableMap<any,any>;
							public subMap(param0: any, param1: any): java.util.SortedMap<any,any>;
							public containsKey(key: any): boolean;
							public lowerEntry(param0: any): java.util.Map.Entry<any,any>;
							public equals(o: any): boolean;
							public floorKey(key: any): any;
							public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
							public lowerKey(key: any): any;
							public floorKey(param0: any): any;
							public tailMap(fromKey: any, inclusive: boolean): java.util.NavigableMap<any,any>;
							public clear(): void;
							public get(key: any): any;
							public keySet(): java.util.Set<any>;
							public replace(key: any, oldValue: any, newValue: any): boolean;
							public descendingKeySet(): java.util.NavigableSet<any>;
							public headMap(param0: any): java.util.SortedMap<any,any>;
							public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
							public ceilingKey(key: any): any;
							public forEach(action: any /* any<any,any>*/): void;
							public ceilingEntry(param0: any): java.util.Map.Entry<any,any>;
							public getOrDefault(key: any, defaultValue: any): any;
							public subMap(param0: any, param1: boolean, param2: any, param3: boolean): java.util.NavigableMap<any,any>;
							public replace(key: any, value: any): any;
							public higherKey(param0: any): any;
							public headMap(toKey: any, inclusive: boolean): java.util.NavigableMap<any,any>;
							public headMap(toKey: any): java.util.SortedMap<any,any>;
							public tailMap(param0: any, param1: boolean): java.util.NavigableMap<any,any>;
							public tailMap(param0: any): java.util.SortedMap<any,any>;
							public lowerKey(param0: any): any;
							public containsValue(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class SizeConfigStrategy extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy>;
							public constructor();
							public removeLast(): android.graphics.Bitmap;
							public put(bitmap: android.graphics.Bitmap): void;
							public getSize(bitmap: android.graphics.Bitmap): number;
							public logBitmap(param0: android.graphics.Bitmap): string;
							public getSize(param0: android.graphics.Bitmap): number;
							public toString(): string;
							public put(param0: android.graphics.Bitmap): void;
							public get(width: number, height: number, config: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public logBitmap(param0: number, param1: number, param2: android.graphics.Bitmap.Config): string;
							public logBitmap(bitmap: android.graphics.Bitmap): string;
							public logBitmap(width: number, height: number, config: android.graphics.Bitmap.Config): string;
						}
						export module SizeConfigStrategy {
							export class Key extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key>;
								public init(size: number, config: android.graphics.Bitmap.Config): void;
								public toString(): string;
								public equals(obj: any): boolean;
								public constructor(pool: com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.KeyPool);
								public offer(): void;
								public equals(o: any): boolean;
								public hashCode(): number;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key> {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.KeyPool>;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key;
								public get(size: number, config: android.graphics.Bitmap.Config): com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class SizeStrategy extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy>;
							public get(width: number, height: number, config: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public removeLast(): android.graphics.Bitmap;
							public put(bitmap: android.graphics.Bitmap): void;
							public getSize(bitmap: android.graphics.Bitmap): number;
							public logBitmap(param0: number, param1: number, param2: android.graphics.Bitmap.Config): string;
							public logBitmap(bitmap: android.graphics.Bitmap): string;
							public logBitmap(param0: android.graphics.Bitmap): string;
							public getSize(param0: android.graphics.Bitmap): number;
							public toString(): string;
							public logBitmap(width: number, height: number, config: android.graphics.Bitmap.Config): string;
							public put(param0: android.graphics.Bitmap): void;
						}
						export module SizeStrategy {
							export class Key extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key>;
								public toString(): string;
								public equals(obj: any): boolean;
								public init(size: number): void;
								public equals(o: any): boolean;
								public offer(): void;
								public hashCode(): number;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key> {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.KeyPool>;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key;
								public get(size: number): com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskCache extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCache>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								get(param0: com.bumptech.glide.load.Key): java.io.File;
								put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
								delete(param0: com.bumptech.glide.load.Key): void;
								clear(): void;
							});
							public constructor();
							public get(param0: com.bumptech.glide.load.Key): java.io.File;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public clear(): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
						export module DiskCache {
							export class Factory extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCache.Factory>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									build(): com.bumptech.glide.load.engine.cache.DiskCache;
								});
								public constructor();
								public static DEFAULT_DISK_CACHE_DIR: string;
								public static DEFAULT_DISK_CACHE_SIZE: number;
								public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							}
							export class Writer extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCache.Writer>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache$Writer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									write(param0: java.io.File): boolean;
								});
								public constructor();
								public write(param0: java.io.File): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskCacheAdapter extends java.lang.Object implements com.bumptech.glide.load.engine.cache.DiskCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheAdapter>;
							public constructor();
							public put(key: com.bumptech.glide.load.Key, writer: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public get(param0: com.bumptech.glide.load.Key): java.io.File;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public get(key: com.bumptech.glide.load.Key): java.io.File;
							public clear(): void;
							public delete(key: com.bumptech.glide.load.Key): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
						export module DiskCacheAdapter {
							export class Factory extends java.lang.Object implements com.bumptech.glide.load.engine.cache.DiskCache.Factory {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheAdapter.Factory>;
								public build(): com.bumptech.glide.load.engine.cache.DiskCache;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskCacheWriteLocker extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheWriteLocker>;
						}
						export module DiskCacheWriteLocker {
							export class WriteLock extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheWriteLocker.WriteLock>;
							}
							export class WriteLockPool extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheWriteLocker.WriteLockPool>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskLruCacheFactory extends java.lang.Object implements com.bumptech.glide.load.engine.cache.DiskCache.Factory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskLruCacheFactory>;
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(cacheDirectoryGetter: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheName: string, diskCacheSize: number);
						}
						export module DiskLruCacheFactory {
							export class CacheDirectoryGetter extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskLruCacheFactory$CacheDirectoryGetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCacheDirectory(): java.io.File;
								});
								public constructor();
								public getCacheDirectory(): java.io.File;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskLruCacheWrapper extends java.lang.Object implements com.bumptech.glide.load.engine.cache.DiskCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskLruCacheWrapper>;
							public put(key: com.bumptech.glide.load.Key, writer: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public get(param0: com.bumptech.glide.load.Key): java.io.File;
							public static create(directory: java.io.File, maxSize: number): com.bumptech.glide.load.engine.cache.DiskCache;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							/** @deprecated */
							public static get(directory: java.io.File, maxSize: number): com.bumptech.glide.load.engine.cache.DiskCache;
							public get(key: com.bumptech.glide.load.Key): java.io.File;
							public clear(): void;
							public delete(key: com.bumptech.glide.load.Key): void;
							/** @deprecated */
							public constructor(directory: java.io.File, maxSize: number);
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class ExternalCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.ExternalCacheDiskCacheFactory>;
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(cacheDirectoryGetter: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, diskCacheSize: number);
							public constructor(context: android.content.Context);
							public constructor(context: android.content.Context, diskCacheName: string, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheName: string, diskCacheSize: number);
							public constructor(context: android.content.Context, diskCacheSize: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class ExternalPreferredCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.ExternalPreferredCacheDiskCacheFactory>;
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(cacheDirectoryGetter: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, diskCacheSize: number);
							public constructor(context: android.content.Context);
							public constructor(context: android.content.Context, diskCacheName: string, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheName: string, diskCacheSize: number);
							public constructor(context: android.content.Context, diskCacheSize: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class InternalCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.InternalCacheDiskCacheFactory>;
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(cacheDirectoryGetter: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, diskCacheSize: number);
							public constructor(context: android.content.Context);
							public constructor(context: android.content.Context, diskCacheName: string, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheSize: number);
							public constructor(diskCacheFolder: string, diskCacheName: string, diskCacheSize: number);
							public constructor(context: android.content.Context, diskCacheSize: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class LruResourceCache extends com.bumptech.glide.util.LruCache<com.bumptech.glide.load.Key,com.bumptech.glide.load.engine.Resource<any>> implements com.bumptech.glide.load.engine.cache.MemoryCache  {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.LruResourceCache>;
							public constructor(size: number);
							public setSizeMultiplier(multiplier: number): void;
							public getCurrentSize(): number;
							public put(key: any, item: any): any;
							public onItemEvicted(key: com.bumptech.glide.load.Key, item: com.bumptech.glide.load.engine.Resource<any>): void;
							public setSizeMultiplier(param0: number): void;
							public getSize(item: com.bumptech.glide.load.engine.Resource<any>): number;
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public getSize(item: any): number;
							public onItemEvicted(key: any, item: any): void;
							public trimMemory(level: number): void;
							public remove(key: any): any;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
							public clearMemory(): void;
							public setResourceRemovedListener(listener: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class MemoryCache extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemoryCache>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemoryCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCurrentSize(): number;
								getMaxSize(): number;
								setSizeMultiplier(param0: number): void;
								remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
								put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
								setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public constructor();
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public getCurrentSize(): number;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
						export module MemoryCache {
							export class ResourceRemovedListener extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemoryCache$ResourceRemovedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource<any>): void;
								});
								public constructor();
								public onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class MemoryCacheAdapter extends java.lang.Object implements com.bumptech.glide.load.engine.cache.MemoryCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemoryCacheAdapter>;
							public constructor();
							public setSizeMultiplier(multiplier: number): void;
							public getCurrentSize(): number;
							public remove(key: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
							public setSizeMultiplier(param0: number): void;
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public trimMemory(level: number): void;
							public put(key: com.bumptech.glide.load.Key, resource: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
							public clearMemory(): void;
							public setResourceRemovedListener(listener: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class MemorySizeCalculator extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemorySizeCalculator>;
							public getMemoryCacheSize(): number;
							public getBitmapPoolSize(): number;
							public getArrayPoolSizeInBytes(): number;
						}
						export module MemorySizeCalculator {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder>;
								public setLowMemoryMaxSizeMultiplier(lowMemoryMaxSizeMultiplier: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
								public setMemoryCacheScreens(memoryCacheScreens: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
								public build(): com.bumptech.glide.load.engine.cache.MemorySizeCalculator;
								public constructor(context: android.content.Context);
								public setBitmapPoolScreens(bitmapPoolScreens: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
								public setMaxSizeMultiplier(maxSizeMultiplier: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
								public setArrayPoolSize(arrayPoolSizeBytes: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
							}
							export class DisplayMetricsScreenDimensions extends java.lang.Object implements com.bumptech.glide.load.engine.cache.MemorySizeCalculator.ScreenDimensions {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemorySizeCalculator.DisplayMetricsScreenDimensions>;
								public getWidthPixels(): number;
								public getHeightPixels(): number;
							}
							export class ScreenDimensions extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemorySizeCalculator.ScreenDimensions>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemorySizeCalculator$ScreenDimensions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getWidthPixels(): number;
									getHeightPixels(): number;
								});
								public constructor();
								public getWidthPixels(): number;
								public getHeightPixels(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class SafeKeyGenerator extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.SafeKeyGenerator>;
							public constructor();
							public getSafeKey(key: com.bumptech.glide.load.Key): string;
						}
						export module SafeKeyGenerator {
							export class PoolableDigestContainer extends java.lang.Object implements com.bumptech.glide.util.pool.FactoryPools.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.SafeKeyGenerator.PoolableDigestContainer>;
								public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module executor {
						export class GlideExecutor extends java.lang.Object implements java.util.concurrent.ExecutorService {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor>;
							public shutdownNow(): java.util.List<java.lang.Runnable>;
							/** @deprecated */
							public static newAnimationExecutor(threadCount: number, uncaughtThrowableStrategy: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public toString(): string;
							public submit(task: java.lang.Runnable): java.util.concurrent.Future<any>;
							public invokeAny(tasks: java.util.Collection<any>): any;
							public static newDiskCacheExecutor(): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public static newAnimationBuilder(): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
							public invokeAll(tasks: java.util.Collection<any>): java.util.List<any>;
							public static calculateBestThreadCount(): number;
							public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
							public execute(param0: java.lang.Runnable): void;
							public invokeAll(tasks: java.util.Collection<any>, timeout: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
							/** @deprecated */
							public static newSourceExecutor(threadCount: number, name: string, uncaughtThrowableStrategy: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public submit(task: java.lang.Runnable, result: any): java.util.concurrent.Future<any>;
							public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
							public submit(task: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
							public invokeAny(param0: java.util.Collection<any>): any;
							public execute(command: java.lang.Runnable): void;
							public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
							public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
							public static newAnimationExecutor(): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
							public shutdown(): void;
							public awaitTermination(timeout: number, param1: java.util.concurrent.TimeUnit): boolean;
							public static newSourceExecutor(): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public static newDiskCacheBuilder(): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
							public static newSourceBuilder(): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
							/** @deprecated */
							public static newDiskCacheExecutor(uncaughtThrowableStrategy: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public isShutdown(): boolean;
							/** @deprecated */
							public static newSourceExecutor(uncaughtThrowableStrategy: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public isTerminated(): boolean;
							public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
							/** @deprecated */
							public static newDiskCacheExecutor(threadCount: number, name: string, uncaughtThrowableStrategy: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public invokeAny(tasks: java.util.Collection<any>, timeout: number, param2: java.util.concurrent.TimeUnit): any;
							public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
							public static newUnlimitedSourceExecutor(): com.bumptech.glide.load.engine.executor.GlideExecutor;
						}
						export module GlideExecutor {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor.Builder>;
								public static NO_THREAD_TIMEOUT: number;
								public setThreadTimeoutMillis(threadTimeoutMillis: number): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
								public setThreadCount(threadCount: number): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
								public build(): com.bumptech.glide.load.engine.executor.GlideExecutor;
								public setUncaughtThrowableStrategy(strategy: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
								public setName(name: string): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
							}
							export class DefaultPriorityThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor.DefaultPriorityThreadFactory>;
								public newThread(runnable: java.lang.Runnable): java.lang.Thread;
								public newThread(param0: java.lang.Runnable): java.lang.Thread;
							}
							export class DefaultThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor.DefaultThreadFactory>;
								public newThread(runnable: java.lang.Runnable): java.lang.Thread;
								public newThread(param0: java.lang.Runnable): java.lang.Thread;
							}
							export class UncaughtThrowableStrategy extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.executor.GlideExecutor$UncaughtThrowableStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									handle(param0: java.lang.Throwable): void;
									"<clinit>"(): void;
								});
								public constructor();
								public static IGNORE: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy;
								public static DEFAULT: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy;
								public static LOG: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy;
								public static THROW: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy;
								public handle(param0: java.lang.Throwable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module executor {
						export class RuntimeCompat extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.RuntimeCompat>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class BitmapPreFillRunner extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.BitmapPreFillRunner>;
							public cancel(): void;
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, memoryCache: com.bumptech.glide.load.engine.cache.MemoryCache, allocationOrder: com.bumptech.glide.load.engine.prefill.PreFillQueue);
							public run(): void;
						}
						export module BitmapPreFillRunner {
							export class Clock extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.BitmapPreFillRunner.Clock>;
							}
							export class UniqueKey extends java.lang.Object implements com.bumptech.glide.load.Key {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.BitmapPreFillRunner.UniqueKey>;
								public equals(obj: any): boolean;
								public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
								public equals(param0: any): boolean;
								public updateDiskCacheKey(param0: java.security.MessageDigest): void;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class BitmapPreFiller extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.BitmapPreFiller>;
							public constructor(memoryCache: com.bumptech.glide.load.engine.cache.MemoryCache, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, defaultFormat: com.bumptech.glide.load.DecodeFormat);
							public preFill(...bitmapAttributeBuilders: com.bumptech.glide.load.engine.prefill.PreFillType.Builder[]): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class PreFillQueue extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.PreFillQueue>;
							public remove(): com.bumptech.glide.load.engine.prefill.PreFillType;
							public getSize(): number;
							public isEmpty(): boolean;
							public constructor(bitmapsPerType: java.util.Map<com.bumptech.glide.load.engine.prefill.PreFillType,java.lang.Integer>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class PreFillType extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.PreFillType>;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public equals(o: any): boolean;
							public toString(): string;
						}
						export module PreFillType {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.PreFillType.Builder>;
								public constructor(width: number, height: number);
								public setConfig(config: android.graphics.Bitmap.Config): com.bumptech.glide.load.engine.prefill.PreFillType.Builder;
								public constructor(size: number);
								public setWeight(weight: number): com.bumptech.glide.load.engine.prefill.PreFillType.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class AssetUriLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<android.net.Uri,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.AssetUriLoader<any>>;
						public constructor(assetManager: android.content.res.AssetManager, factory: com.bumptech.glide.load.model.AssetUriLoader.AssetFetcherFactory<any>);
						public handles(model: android.net.Uri): boolean;
						public handles(param0: any): boolean;
						public buildLoadData(model: android.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module AssetUriLoader {
						export class AssetFetcherFactory<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.AssetUriLoader.AssetFetcherFactory<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.AssetUriLoader$AssetFetcherFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								buildFetcher(param0: android.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<Data>;
							});
							public constructor();
							public buildFetcher(param0: android.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<Data>;
						}
						export class FileDescriptorFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.AssetUriLoader.FileDescriptorFactory>;
							public constructor(assetManager: android.content.res.AssetManager);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,android.content.res.AssetFileDescriptor>;
							public buildFetcher(assetManager: android.content.res.AssetManager, assetPath: string): com.bumptech.glide.load.data.DataFetcher<android.content.res.AssetFileDescriptor>;
							public buildFetcher(param0: android.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<any>;
						}
						export class StreamFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.AssetUriLoader.StreamFactory>;
							public constructor(assetManager: android.content.res.AssetManager);
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,java.io.InputStream>;
							public buildFetcher(assetManager: android.content.res.AssetManager, assetPath: string): com.bumptech.glide.load.data.DataFetcher<java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public buildFetcher(param0: android.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ByteArrayLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<number[],any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader<any>>;
						public constructor(converter: com.bumptech.glide.load.model.ByteArrayLoader.Converter<any>);
						public buildLoadData(model: number[], width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public handles(model: number[]): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module ByteArrayLoader {
						export class ByteBufferFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<number[],java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader.ByteBufferFactory>;
							public constructor();
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<number[],java.nio.ByteBuffer>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
						export class Converter<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader.Converter<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.ByteArrayLoader$Converter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								convert(param0: number[]): Data;
								getDataClass(): java.lang.Class<Data>;
							});
							public constructor();
							public convert(param0: number[]): Data;
							public getDataClass(): java.lang.Class<Data>;
						}
						export class Fetcher<Data>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader.Fetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
						export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<number[],java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader.StreamFactory>;
							public constructor();
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<number[],java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ByteBufferEncoder extends com.bumptech.glide.load.Encoder<java.nio.ByteBuffer> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ByteBufferEncoder>;
						public constructor();
						public encode(data: java.nio.ByteBuffer, file: java.io.File, options: com.bumptech.glide.load.Options): boolean;
						public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ByteBufferFileLoader extends com.bumptech.glide.load.model.ModelLoader<java.io.File,java.nio.ByteBuffer> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ByteBufferFileLoader>;
						public constructor();
						public handles(file: java.io.File): boolean;
						public handles(param0: any): boolean;
						public buildLoadData(file: java.io.File, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.nio.ByteBuffer>;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module ByteBufferFileLoader {
						export class ByteBufferFetcher extends com.bumptech.glide.load.data.DataFetcher<java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteBufferFileLoader.ByteBufferFetcher>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<java.nio.ByteBuffer>;
							public getDataClass(): java.lang.Class<any>;
						}
						export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.io.File,java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteBufferFileLoader.Factory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.io.File,java.nio.ByteBuffer>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class DataUrlLoader<Model, Data>  extends com.bumptech.glide.load.model.ModelLoader<any,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.DataUrlLoader<any,any>>;
						public buildLoadData(model: any, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(model: any): boolean;
						public handles(param0: any): boolean;
						public constructor(dataDecoder: com.bumptech.glide.load.model.DataUrlLoader.DataDecoder<any>);
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module DataUrlLoader {
						export class DataDecoder<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DataUrlLoader.DataDecoder<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.DataUrlLoader$DataDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								decode(param0: string): Data;
								close(param0: Data): void;
								getDataClass(): java.lang.Class<Data>;
							});
							public constructor();
							public close(param0: Data): void;
							public getDataClass(): java.lang.Class<Data>;
							public decode(param0: string): Data;
						}
						export class DataUriFetcher<Data>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DataUrlLoader.DataUriFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
						export class StreamFactory<Model>  extends com.bumptech.glide.load.model.ModelLoaderFactory<any,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DataUrlLoader.StreamFactory<any>>;
							public constructor();
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class FileLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<java.io.File,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader<any>>;
						public handles(model: java.io.File): boolean;
						public buildLoadData(model: java.io.File, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public constructor(fileOpener: com.bumptech.glide.load.model.FileLoader.FileOpener<any>);
						public handles(param0: any): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module FileLoader {
						export class Factory<Data>  extends com.bumptech.glide.load.model.ModelLoaderFactory<java.io.File,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.Factory<any>>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public constructor(opener: com.bumptech.glide.load.model.FileLoader.FileOpener<any>);
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.io.File,any>;
						}
						export class FileDescriptorFactory extends com.bumptech.glide.load.model.FileLoader.Factory<android.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.FileDescriptorFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public constructor(opener: com.bumptech.glide.load.model.FileLoader.FileOpener<any>);
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.io.File,any>;
						}
						export class FileFetcher<Data>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.FileFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
						export class FileOpener<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.FileOpener<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.FileLoader$FileOpener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								open(param0: java.io.File): Data;
								close(param0: Data): void;
								getDataClass(): java.lang.Class<Data>;
							});
							public constructor();
							public close(param0: Data): void;
							public open(param0: java.io.File): Data;
							public getDataClass(): java.lang.Class<Data>;
						}
						export class StreamFactory extends com.bumptech.glide.load.model.FileLoader.Factory<java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.StreamFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public constructor(opener: com.bumptech.glide.load.model.FileLoader.FileOpener<any>);
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.io.File,any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class GlideUrl extends java.lang.Object implements com.bumptech.glide.load.Key {
						public static class: java.lang.Class<com.bumptech.glide.load.model.GlideUrl>;
						public equals(obj: any): boolean;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public toStringUrl(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toURL(): java.net.URL;
						public toString(): string;
						public constructor(url: java.net.URL);
						public getCacheKey(): string;
						public getHeaders(): java.util.Map<string,string>;
						public constructor(url: string, headers: com.bumptech.glide.load.model.Headers);
						public constructor(url: java.net.URL, headers: com.bumptech.glide.load.model.Headers);
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public constructor(url: string);
						public equals(o: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class Headers extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.Headers>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.Headers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getHeaders(): java.util.Map<string,string>;
							"<clinit>"(): void;
						});
						public constructor();
						public static DEFAULT: com.bumptech.glide.load.model.Headers;
						public static NONE: com.bumptech.glide.load.model.Headers;
						public getHeaders(): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class LazyHeaderFactory extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.LazyHeaderFactory>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.LazyHeaderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							buildHeader(): string;
						});
						public constructor();
						public buildHeader(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class LazyHeaders extends java.lang.Object implements com.bumptech.glide.load.model.Headers {
						public static class: java.lang.Class<com.bumptech.glide.load.model.LazyHeaders>;
						public equals(obj: any): boolean;
						public getHeaders(): java.util.Map<string,string>;
						public hashCode(): number;
						public equals(o: any): boolean;
						public toString(): string;
					}
					export module LazyHeaders {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.LazyHeaders.Builder>;
							public constructor();
							public setHeader(key: string, value: string): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public addHeader(key: string, factory: com.bumptech.glide.load.model.LazyHeaderFactory): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public addHeader(key: string, value: string): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public build(): com.bumptech.glide.load.model.LazyHeaders;
							public setHeader(key: string, factory: com.bumptech.glide.load.model.LazyHeaderFactory): com.bumptech.glide.load.model.LazyHeaders.Builder;
						}
						export class StringHeaderFactory extends java.lang.Object implements com.bumptech.glide.load.model.LazyHeaderFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.model.LazyHeaders.StringHeaderFactory>;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public toString(): string;
							public equals(o: any): boolean;
							public buildHeader(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class MediaStoreFileLoader extends com.bumptech.glide.load.model.ModelLoader<android.net.Uri,java.io.File> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.MediaStoreFileLoader>;
						public handles(uri: android.net.Uri): boolean;
						public constructor(context: android.content.Context);
						public handles(param0: any): boolean;
						public buildLoadData(uri: android.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.File>;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module MediaStoreFileLoader {
						export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<android.net.Uri,java.io.File> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MediaStoreFileLoader.Factory>;
							public constructor(context: android.content.Context);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,java.io.File>;
							public teardown(): void;
						}
						export class FilePathFetcher extends com.bumptech.glide.load.data.DataFetcher<java.io.File> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MediaStoreFileLoader.FilePathFetcher>;
							public cancel(): void;
							public cleanup(): void;
							public getDataClass(): java.lang.Class<java.io.File>;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class Model extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.Model>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.Model interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isEquivalentTo(param0: any): boolean;
						});
						public constructor();
						public isEquivalentTo(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelCache<A, B>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ModelCache<any,any>>;
						public constructor();
						public constructor(size: number);
						public put(model: A, width: number, height: number, value: B): void;
						public clear(): void;
						public get(model: A, width: number, height: number): B;
					}
					export module ModelCache {
						export class ModelKey<A>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ModelCache.ModelKey<any>>;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public release(): void;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelLoader<Model, Data>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoader<any,any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.ModelLoader<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							buildLoadData(param0: Model, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<Data>;
							handles(param0: Model): boolean;
						});
						public constructor();
						public buildLoadData(param0: Model, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<Data>;
						public handles(param0: Model): boolean;
					}
					export module ModelLoader {
						export class LoadData<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoader.LoadData<any>>;
							public sourceKey: com.bumptech.glide.load.Key;
							public alternateKeys: java.util.List<com.bumptech.glide.load.Key>;
							public fetcher: com.bumptech.glide.load.data.DataFetcher<Data>;
							public constructor(sourceKey: com.bumptech.glide.load.Key, fetcher: com.bumptech.glide.load.data.DataFetcher<Data>);
							public constructor(sourceKey: com.bumptech.glide.load.Key, alternateKeys: java.util.List<com.bumptech.glide.load.Key>, fetcher: com.bumptech.glide.load.data.DataFetcher<Data>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelLoaderFactory<T, Y>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoaderFactory<any,any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.ModelLoaderFactory<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<T,Y>;
							teardown(): void;
						});
						public constructor();
						public teardown(): void;
						public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<T,Y>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelLoaderRegistry extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoaderRegistry>;
						public prepend(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): void;
						public constructor(throwableListPool: androidx.core.util.Pools.Pool<java.util.List<java.lang.Throwable>>);
						public append(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): void;
						public getModelLoaders(model: any): java.util.List<any>;
						public remove(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>): void;
						public getDataClasses(modelClass: java.lang.Class<any>): java.util.List<java.lang.Class<any>>;
						public build(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>): com.bumptech.glide.load.model.ModelLoader<any,any>;
						public replace(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): void;
					}
					export module ModelLoaderRegistry {
						export class ModelLoaderCache extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoaderRegistry.ModelLoaderCache>;
							public put(modelClass: java.lang.Class<any>, loaders: java.util.List<any>): void;
							public clear(): void;
							public get(modelClass: java.lang.Class<any>): java.util.List<any>;
						}
						export module ModelLoaderCache {
							export class Entry<Model>  extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoaderRegistry.ModelLoaderCache.Entry<any>>;
								public constructor(loaders: java.util.List<com.bumptech.glide.load.model.ModelLoader<Model,any>>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class MultiModelLoader<Model, Data>  extends com.bumptech.glide.load.model.ModelLoader<any,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoader<any,any>>;
						public buildLoadData(model: any, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(model: any): boolean;
						public handles(param0: any): boolean;
						public toString(): string;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module MultiModelLoader {
						export class MultiFetcher<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoader.MultiFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public onLoadFailed(param0: java.lang.Exception): void;
							public getDataClass(): java.lang.Class<Data>;
							public onLoadFailed(e: java.lang.Exception): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public onDataReady(data: Data): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
							public onDataReady(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class MultiModelLoaderFactory extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoaderFactory>;
						public constructor(throwableListPool: androidx.core.util.Pools.Pool<java.util.List<java.lang.Throwable>>);
						public build(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>): com.bumptech.glide.load.model.ModelLoader<any,any>;
					}
					export module MultiModelLoaderFactory {
						export class EmptyModelLoader extends com.bumptech.glide.load.model.ModelLoader<any,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoaderFactory.EmptyModelLoader>;
							public handles(param0: any): boolean;
							public handles(o: any): boolean;
							public buildLoadData(o: any, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export class Entry<Model, Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoaderFactory.Entry<any,any>>;
							public handles(modelClass: java.lang.Class<any>, dataClass: java.lang.Class<any>): boolean;
							public constructor(modelClass: java.lang.Class<Model>, dataClass: java.lang.Class<Data>, factory: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>);
							public handles(modelClass: java.lang.Class<any>): boolean;
						}
						export class Factory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoaderFactory.Factory>;
							public build(modelLoaders: java.util.List<any>, throwableListPool: androidx.core.util.Pools.Pool): com.bumptech.glide.load.model.MultiModelLoader<any,any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ResourceLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader<any>>;
						public handles(model: java.lang.Integer): boolean;
						public buildLoadData(model: java.lang.Integer, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public constructor(resources: android.content.res.Resources, uriLoader: com.bumptech.glide.load.model.ModelLoader<android.net.Uri,any>);
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module ResourceLoader {
						export class AssetFileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,android.content.res.AssetFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader.AssetFileDescriptorFactory>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,android.content.res.AssetFileDescriptor>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public constructor(resources: android.content.res.Resources);
							public teardown(): void;
						}
						export class FileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,android.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader.FileDescriptorFactory>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public constructor(resources: android.content.res.Resources);
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,android.os.ParcelFileDescriptor>;
							public teardown(): void;
						}
						export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader.StreamFactory>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public constructor(resources: android.content.res.Resources);
							public teardown(): void;
						}
						export class UriFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,android.net.Uri> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader.UriFactory>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,android.net.Uri>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public constructor(resources: android.content.res.Resources);
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class StreamEncoder extends com.bumptech.glide.load.Encoder<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.StreamEncoder>;
						public constructor(byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
						public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
						public encode(data: java.io.InputStream, file: java.io.File, options: com.bumptech.glide.load.Options): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class StringLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<string,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.StringLoader<any>>;
						public buildLoadData(model: string, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public constructor(uriLoader: com.bumptech.glide.load.model.ModelLoader<android.net.Uri,any>);
						public handles(param0: any): boolean;
						public handles(model: string): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module StringLoader {
						export class AssetFileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<string,android.content.res.AssetFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.StringLoader.AssetFileDescriptorFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<string,android.content.res.AssetFileDescriptor>;
							public teardown(): void;
						}
						export class FileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<string,android.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.StringLoader.FileDescriptorFactory>;
							public constructor();
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<string,android.os.ParcelFileDescriptor>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
						export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<string,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.StringLoader.StreamFactory>;
							public constructor();
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<string,java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class UnitModelLoader<Model>  extends com.bumptech.glide.load.model.ModelLoader<any,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.UnitModelLoader<any>>;
						public static getInstance(): com.bumptech.glide.load.model.UnitModelLoader<any>;
						/** @deprecated */
						public constructor();
						public buildLoadData(model: any, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(model: any): boolean;
						public handles(param0: any): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module UnitModelLoader {
						export class Factory<Model>  extends com.bumptech.glide.load.model.ModelLoaderFactory<any,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UnitModelLoader.Factory<any>>;
							/** @deprecated */
							public constructor();
							public static getInstance(): com.bumptech.glide.load.model.UnitModelLoader.Factory<any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
						export class UnitFetcher<Model>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UnitModelLoader.UnitFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class UriLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<android.net.Uri,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader<any>>;
						public constructor(factory: com.bumptech.glide.load.model.UriLoader.LocalUriFetcherFactory<any>);
						public handles(model: android.net.Uri): boolean;
						public handles(param0: any): boolean;
						public buildLoadData(model: android.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module UriLoader {
						export class AssetFileDescriptorFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader.AssetFileDescriptorFactory>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public build(param0: android.net.Uri): com.bumptech.glide.load.data.DataFetcher<any>;
							public constructor(contentResolver: android.content.ContentResolver);
							public build(uri: android.net.Uri): com.bumptech.glide.load.data.DataFetcher<android.content.res.AssetFileDescriptor>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,android.content.res.AssetFileDescriptor>;
						}
						export class FileDescriptorFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader.FileDescriptorFactory>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,android.os.ParcelFileDescriptor>;
							public build(uri: android.net.Uri): com.bumptech.glide.load.data.DataFetcher<android.os.ParcelFileDescriptor>;
							public teardown(): void;
							public build(param0: android.net.Uri): com.bumptech.glide.load.data.DataFetcher<any>;
							public constructor(contentResolver: android.content.ContentResolver);
						}
						export class LocalUriFetcherFactory<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader.LocalUriFetcherFactory<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.UriLoader$LocalUriFetcherFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								build(param0: android.net.Uri): com.bumptech.glide.load.data.DataFetcher<Data>;
							});
							public constructor();
							public build(param0: android.net.Uri): com.bumptech.glide.load.data.DataFetcher<Data>;
						}
						export class StreamFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader.StreamFactory>;
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,java.io.InputStream>;
							public build(uri: android.net.Uri): com.bumptech.glide.load.data.DataFetcher<java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public build(param0: android.net.Uri): com.bumptech.glide.load.data.DataFetcher<any>;
							public constructor(contentResolver: android.content.ContentResolver);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class UrlUriLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<android.net.Uri,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.UrlUriLoader<any>>;
						public constructor(urlLoader: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,any>);
						public handles(uri: android.net.Uri): boolean;
						public buildLoadData(uri: android.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module UrlUriLoader {
						export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<android.net.Uri,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UrlUriLoader.StreamFactory>;
							public constructor();
							public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export abstract class BaseGlideUrlLoader<Model>  extends com.bumptech.glide.load.model.ModelLoader<any,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.BaseGlideUrlLoader<any>>;
							public getAlternateUrls(model: any, width: number, height: number, options: com.bumptech.glide.load.Options): java.util.List<string>;
							public getHeaders(model: any, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.Headers;
							public handles(param0: any): boolean;
							public buildLoadData(model: any, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public getUrl(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): string;
							public constructor(concreteLoader: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>);
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public constructor(concreteLoader: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>, modelCache: com.bumptech.glide.load.model.ModelCache<any,com.bumptech.glide.load.model.GlideUrl>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class HttpGlideUrlLoader extends com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.HttpGlideUrlLoader>;
							public static TIMEOUT: com.bumptech.glide.load.Option<java.lang.Integer>;
							public constructor();
							public handles(param0: any): boolean;
							public constructor(modelCache: com.bumptech.glide.load.model.ModelCache<com.bumptech.glide.load.model.GlideUrl,com.bumptech.glide.load.model.GlideUrl>);
							public handles(model: com.bumptech.glide.load.model.GlideUrl): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public buildLoadData(model: com.bumptech.glide.load.model.GlideUrl, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
						}
						export module HttpGlideUrlLoader {
							export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.HttpGlideUrlLoader.Factory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class HttpUriLoader extends com.bumptech.glide.load.model.UrlUriLoader<java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.HttpUriLoader>;
							public handles(param0: any): boolean;
							public constructor(urlLoader: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,any>);
							public constructor(urlLoader: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>);
							public buildLoadData(uri: android.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public handles(uri: android.net.Uri): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export module HttpUriLoader {
							export class Factory extends com.bumptech.glide.load.model.UrlUriLoader.StreamFactory {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.HttpUriLoader.Factory>;
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,java.io.InputStream>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class MediaStoreImageThumbLoader extends com.bumptech.glide.load.model.ModelLoader<android.net.Uri,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.MediaStoreImageThumbLoader>;
							public handles(param0: any): boolean;
							public constructor(context: android.content.Context);
							public handles(model: android.net.Uri): boolean;
							public buildLoadData(model: android.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export module MediaStoreImageThumbLoader {
							export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<android.net.Uri,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.MediaStoreImageThumbLoader.Factory>;
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,java.io.InputStream>;
								public teardown(): void;
								public constructor(context: android.content.Context);
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class MediaStoreVideoThumbLoader extends com.bumptech.glide.load.model.ModelLoader<android.net.Uri,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.MediaStoreVideoThumbLoader>;
							public handles(param0: any): boolean;
							public constructor(context: android.content.Context);
							public handles(model: android.net.Uri): boolean;
							public buildLoadData(model: android.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export module MediaStoreVideoThumbLoader {
							export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<android.net.Uri,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.MediaStoreVideoThumbLoader.Factory>;
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,java.io.InputStream>;
								public teardown(): void;
								public constructor(context: android.content.Context);
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class QMediaStoreUriLoader<DataT>  extends com.bumptech.glide.load.model.ModelLoader<android.net.Uri,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader<any>>;
							public handles(param0: any): boolean;
							public buildLoadData(uri: android.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public handles(uri: android.net.Uri): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export module QMediaStoreUriLoader {
							export abstract class Factory<DataT>  extends com.bumptech.glide.load.model.ModelLoaderFactory<android.net.Uri,any> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.Factory<any>>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,any>;
							}
							export class FileDescriptorFactory extends com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.Factory<android.os.ParcelFileDescriptor> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.FileDescriptorFactory>;
								public teardown(): void;
								public constructor(context: android.content.Context);
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,any>;
							}
							export class InputStreamFactory extends com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.Factory<java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.InputStreamFactory>;
								public teardown(): void;
								public constructor(context: android.content.Context);
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<android.net.Uri,any>;
							}
							export class QMediaStoreUriFetcher<DataT>  extends com.bumptech.glide.load.data.DataFetcher<any> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.QMediaStoreUriFetcher<any>>;
								public cancel(): void;
								public loadData(priority: com.bumptech.glide.Priority, callback: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
								public cleanup(): void;
								public getDataClass(): java.lang.Class<any>;
								public getDataSource(): com.bumptech.glide.load.DataSource;
								public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class UrlLoader extends com.bumptech.glide.load.model.ModelLoader<java.net.URL,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.UrlLoader>;
							public handles(param0: any): boolean;
							public buildLoadData(model: java.net.URL, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public constructor(glideUrlLoader: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>);
							public handles(model: java.net.URL): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export module UrlLoader {
							export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.net.URL,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.UrlLoader.StreamFactory>;
								public teardown(): void;
								public build(multiFactory: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.net.URL,java.io.InputStream>;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class DefaultOnHeaderDecodedListener extends java.lang.Object implements android.graphics.ImageDecoder.OnHeaderDecodedListener {
						public static class: java.lang.Class<com.bumptech.glide.load.resource.DefaultOnHeaderDecodedListener>;
						public constructor(requestedWidth: number, requestedHeight: number, options: com.bumptech.glide.load.Options);
						public onHeaderDecoded(param0: android.graphics.ImageDecoder, param1: android.graphics.ImageDecoder.ImageInfo, param2: android.graphics.ImageDecoder.Source): void;
						public onHeaderDecoded(decoder: android.graphics.ImageDecoder, info: android.graphics.ImageDecoder.ImageInfo, source: android.graphics.ImageDecoder.Source): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class SimpleResource<T>  extends com.bumptech.glide.load.engine.Resource<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.resource.SimpleResource<any>>;
						public data: any;
						public getResourceClass(): java.lang.Class<any>;
						public getSize(): number;
						public constructor(data: any);
						public recycle(): void;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class UnitTransformation<T>  extends com.bumptech.glide.load.Transformation<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.resource.UnitTransformation<any>>;
						public equals(obj: any): boolean;
						public static get(): com.bumptech.glide.load.resource.UnitTransformation<any>;
						public transform(context: android.content.Context, resource: com.bumptech.glide.load.engine.Resource<any>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<any>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapDrawableDecoder<DataType>  extends com.bumptech.glide.load.ResourceDecoder<any,android.graphics.drawable.BitmapDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapDrawableDecoder<any>>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(source: any, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.drawable.BitmapDrawable>;
							/** @deprecated */
							public constructor(resources: android.content.res.Resources, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, decoder: com.bumptech.glide.load.ResourceDecoder<any,android.graphics.Bitmap>);
							public handles(source: any, options: com.bumptech.glide.load.Options): boolean;
							public constructor(context: android.content.Context, decoder: com.bumptech.glide.load.ResourceDecoder<any,android.graphics.Bitmap>);
							public constructor(resources: android.content.res.Resources, decoder: com.bumptech.glide.load.ResourceDecoder<any,android.graphics.Bitmap>);
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapDrawableEncoder extends com.bumptech.glide.load.ResourceEncoder<android.graphics.drawable.BitmapDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapDrawableEncoder>;
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, encoder: com.bumptech.glide.load.ResourceEncoder<android.graphics.Bitmap>);
							public encode(data: com.bumptech.glide.load.engine.Resource<android.graphics.drawable.BitmapDrawable>, file: java.io.File, options: com.bumptech.glide.load.Options): boolean;
							public getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
							public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
							public getEncodeStrategy(options: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource<android.graphics.drawable.BitmapDrawable> implements com.bumptech.glide.load.engine.Initializable  {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapDrawableResource>;
							public get(): any;
							public getSize(): number;
							public initialize(): void;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public constructor(drawable: any);
							public getResourceClass(): java.lang.Class<android.graphics.drawable.BitmapDrawable>;
							public constructor(drawable: android.graphics.drawable.BitmapDrawable, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapDrawableTransformation extends com.bumptech.glide.load.Transformation<android.graphics.drawable.BitmapDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapDrawableTransformation>;
							public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(obj: any): boolean;
							public equals(o: any): boolean;
							public equals(param0: any): boolean;
							public constructor(wrapped: com.bumptech.glide.load.Transformation<android.graphics.Bitmap>);
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
							public transform(context: android.content.Context, drawableResourceToTransform: com.bumptech.glide.load.engine.Resource<android.graphics.drawable.BitmapDrawable>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<android.graphics.drawable.BitmapDrawable>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapEncoder extends com.bumptech.glide.load.ResourceEncoder<android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapEncoder>;
							public static COMPRESSION_QUALITY: com.bumptech.glide.load.Option<java.lang.Integer>;
							public static COMPRESSION_FORMAT: com.bumptech.glide.load.Option<android.graphics.Bitmap.CompressFormat>;
							/** @deprecated */
							public constructor();
							public getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
							public constructor(arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public encode(resource: com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>, file: java.io.File, options: com.bumptech.glide.load.Options): boolean;
							public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
							public getEncodeStrategy(options: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapImageDecoderResourceDecoder extends com.bumptech.glide.load.ResourceDecoder<android.graphics.ImageDecoder.Source,android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapImageDecoderResourceDecoder>;
							public constructor();
							public decode(source: android.graphics.ImageDecoder.Source, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(source: android.graphics.ImageDecoder.Source, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapResource extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapResource>;
							public get(): any;
							public getSize(): number;
							public getResourceClass(): java.lang.Class<android.graphics.Bitmap>;
							public initialize(): void;
							public static obtain(bitmap: android.graphics.Bitmap, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.resource.bitmap.BitmapResource;
							public get(): android.graphics.Bitmap;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public constructor(bitmap: android.graphics.Bitmap, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export abstract class BitmapTransformation extends com.bumptech.glide.load.Transformation<android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapTransformation>;
							public constructor();
							public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public transform(context: android.content.Context, resource: com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap, param2: number, param3: number): android.graphics.Bitmap;
							public equals(param0: any): boolean;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapTransitionOptions extends com.bumptech.glide.TransitionOptions<com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions,android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions>;
							public constructor();
							public crossFade(drawableCrossFadeFactory: com.bumptech.glide.request.transition.DrawableCrossFadeFactory): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public hashCode(): number;
							public static withCrossFade(): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public crossFade(duration: number): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static with(transitionFactory: com.bumptech.glide.request.transition.TransitionFactory<android.graphics.Bitmap>): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static withCrossFade(drawableCrossFadeFactory: com.bumptech.glide.request.transition.DrawableCrossFadeFactory): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static withCrossFade(duration: number): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public crossFade(builder: com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static withCrossFade(builder: com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public crossFade(): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public equals(o: any): boolean;
							public static withWrapped(drawableCrossFadeFactory: com.bumptech.glide.request.transition.TransitionFactory<android.graphics.drawable.Drawable>): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public transitionUsing(drawableCrossFadeFactory: com.bumptech.glide.request.transition.TransitionFactory<android.graphics.drawable.Drawable>): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ByteBufferBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ByteBufferBitmapDecoder>;
							public decode(source: java.nio.ByteBuffer, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(downsampler: com.bumptech.glide.load.resource.bitmap.Downsampler);
							public handles(source: java.nio.ByteBuffer, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ByteBufferBitmapImageDecoderResourceDecoder extends com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ByteBufferBitmapImageDecoderResourceDecoder>;
							public constructor();
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(buffer: java.nio.ByteBuffer, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public handles(source: java.nio.ByteBuffer, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class CenterCrop extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.CenterCrop>;
							public constructor();
							public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: android.graphics.Bitmap, outWidth: number, outHeight: number): android.graphics.Bitmap;
							public hashCode(): number;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(obj: any): boolean;
							public transform(context: android.content.Context, resource: com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap, param2: number, param3: number): android.graphics.Bitmap;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class CenterInside extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.CenterInside>;
							public constructor();
							public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: android.graphics.Bitmap, outWidth: number, outHeight: number): android.graphics.Bitmap;
							public hashCode(): number;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(obj: any): boolean;
							public transform(context: android.content.Context, resource: com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap, param2: number, param3: number): android.graphics.Bitmap;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class CircleCrop extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.CircleCrop>;
							public constructor();
							public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: android.graphics.Bitmap, outWidth: number, outHeight: number): android.graphics.Bitmap;
							public hashCode(): number;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(obj: any): boolean;
							public transform(context: android.content.Context, resource: com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap, param2: number, param3: number): android.graphics.Bitmap;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class DefaultImageHeaderParser extends java.lang.Object implements com.bumptech.glide.load.ImageHeaderParser {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser>;
							public constructor();
							public getOrientation(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getType(param0: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getType(byteBuffer: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getOrientation(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getOrientation(is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getType(param0: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getType(is: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getOrientation(byteBuffer: java.nio.ByteBuffer, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
						}
						export module DefaultImageHeaderParser {
							export class ByteBufferReader extends java.lang.Object implements com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.Reader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.ByteBufferReader>;
								public skip(param0: number): number;
								public skip(total: number): number;
								public getUInt8(): number;
								public read(param0: number[], param1: number): number;
								public getUInt16(): number;
								public read(buffer: number[], byteCount: number): number;
							}
							export class RandomAccessReader extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.RandomAccessReader>;
							}
							export class Reader extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.Reader>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser$Reader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getUInt8(): number;
									getUInt16(): number;
									read(param0: number[], param1: number): number;
									skip(param0: number): number;
								});
								public constructor();
								public skip(param0: number): number;
								public getUInt8(): number;
								public read(param0: number[], param1: number): number;
								public getUInt16(): number;
							}
							export module Reader {
								export class EndOfFileException extends java.io.IOException {
									public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.Reader.EndOfFileException>;
								}
							}
							export class StreamReader extends java.lang.Object implements com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.Reader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.StreamReader>;
								public skip(param0: number): number;
								public skip(total: number): number;
								public getUInt8(): number;
								public read(param0: number[], param1: number): number;
								public getUInt16(): number;
								public read(buffer: number[], byteCount: number): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export abstract class DownsampleStrategy extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy>;
							public static AT_LEAST: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static AT_MOST: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static FIT_CENTER: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static CENTER_INSIDE: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static CENTER_OUTSIDE: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static NONE: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static DEFAULT: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static OPTION: com.bumptech.glide.load.Option<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy>;
							public constructor();
							public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
							public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
						}
						export module DownsampleStrategy {
							export class AtLeast extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.AtLeast>;
								public getSampleSizeRounding(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
								public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): number;
							}
							export class AtMost extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.AtMost>;
								public getSampleSizeRounding(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
								public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): number;
							}
							export class CenterInside extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.CenterInside>;
								public getSampleSizeRounding(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
								public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): number;
							}
							export class CenterOutside extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.CenterOutside>;
								public getSampleSizeRounding(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
								public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): number;
							}
							export class FitCenter extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.FitCenter>;
								public getSampleSizeRounding(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
								public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): number;
							}
							export class None extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.None>;
								public getSampleSizeRounding(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
								public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public getScaleFactor(sourceWidth: number, sourceHeight: number, requestedWidth: number, requestedHeight: number): number;
							}
							export class SampleSizeRounding {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding>;
								public static MEMORY: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public static QUALITY: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public static valueOf(name: string): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public static values(): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding[];
								public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class Downsampler extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.Downsampler>;
							public static DECODE_FORMAT: com.bumptech.glide.load.Option<com.bumptech.glide.load.DecodeFormat>;
							public static PREFERRED_COLOR_SPACE: com.bumptech.glide.load.Option<com.bumptech.glide.load.PreferredColorSpace>;
							public static DOWNSAMPLE_STRATEGY: com.bumptech.glide.load.Option<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy>;
							public static FIX_BITMAP_SIZE_TO_REQUESTED_DIMENSIONS: com.bumptech.glide.load.Option<java.lang.Boolean>;
							public static ALLOW_HARDWARE_CONFIG: com.bumptech.glide.load.Option<java.lang.Boolean>;
							public handles(is: java.io.InputStream): boolean;
							public handles(byteBuffer: java.nio.ByteBuffer): boolean;
							public handles(source: android.os.ParcelFileDescriptor): boolean;
							public decode(parcelFileDescriptor: android.os.ParcelFileDescriptor, outWidth: number, outHeight: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public decode(is: java.io.InputStream, outWidth: number, outHeight: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public decode(buffer: java.nio.ByteBuffer, requestedWidth: number, requestedHeight: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public decode(is: java.io.InputStream, requestedWidth: number, requestedHeight: number, options: com.bumptech.glide.load.Options, callbacks: com.bumptech.glide.load.resource.bitmap.Downsampler.DecodeCallbacks): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public constructor(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, displayMetrics: android.util.DisplayMetrics, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
						}
						export module Downsampler {
							export class DecodeCallbacks extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.Downsampler.DecodeCallbacks>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.Downsampler$DecodeCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onObtainBounds(): void;
									onDecodeComplete(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap): void;
								});
								public constructor();
								public onDecodeComplete(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap): void;
								public onObtainBounds(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class DrawableToBitmapConverter extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DrawableToBitmapConverter>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class DrawableTransformation extends com.bumptech.glide.load.Transformation<android.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DrawableTransformation>;
							public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(wrapped: com.bumptech.glide.load.Transformation<android.graphics.Bitmap>, isRequired: boolean);
							public asBitmapDrawable(): com.bumptech.glide.load.Transformation<android.graphics.drawable.BitmapDrawable>;
							public hashCode(): number;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(obj: any): boolean;
							public transform(context: android.content.Context, resource: com.bumptech.glide.load.engine.Resource<android.graphics.drawable.Drawable>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<android.graphics.drawable.Drawable>;
							public equals(o: any): boolean;
							public equals(param0: any): boolean;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ExifInterfaceImageHeaderParser extends java.lang.Object implements com.bumptech.glide.load.ImageHeaderParser {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ExifInterfaceImageHeaderParser>;
							public constructor();
							public getOrientation(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getType(param0: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getType(byteBuffer: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getOrientation(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getOrientation(is: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getType(param0: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getType(is: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getOrientation(byteBuffer: java.nio.ByteBuffer, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class FitCenter extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.FitCenter>;
							public constructor();
							public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: android.graphics.Bitmap, outWidth: number, outHeight: number): android.graphics.Bitmap;
							public hashCode(): number;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(obj: any): boolean;
							public transform(context: android.content.Context, resource: com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap, param2: number, param3: number): android.graphics.Bitmap;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class GranularRoundedCorners extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.GranularRoundedCorners>;
							public constructor();
							public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: android.graphics.Bitmap, outWidth: number, outHeight: number): android.graphics.Bitmap;
							public hashCode(): number;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(obj: any): boolean;
							public transform(context: android.content.Context, resource: com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap, param2: number, param3: number): android.graphics.Bitmap;
							public equals(o: any): boolean;
							public constructor(topLeft: number, topRight: number, bottomRight: number, bottomLeft: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class HardwareConfigState extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.HardwareConfigState>;
							public static BLOCK_HARDWARE_BITMAPS_WHEN_GL_CONTEXT_MIGHT_NOT_BE_INITIALIZED: boolean;
							public static HARDWARE_BITMAPS_SUPPORTED: boolean;
							public static NO_MAX_FD_COUNT: number;
							public areHardwareBitmapsBlocked(): boolean;
							public blockHardwareBitmaps(): void;
							public isHardwareConfigAllowed(targetWidth: number, targetHeight: number, isHardwareConfigAllowed: boolean, isExifOrientationRequired: boolean): boolean;
							public static getInstance(): com.bumptech.glide.load.resource.bitmap.HardwareConfigState;
							public unblockHardwareBitmaps(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ImageReader extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.ImageReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								decodeBitmap(param0: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
								getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
								getImageOrientation(): number;
								stopGrowingBuffers(): void;
							});
							public constructor();
							public getImageOrientation(): number;
							public decodeBitmap(param0: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
							public stopGrowingBuffers(): void;
							public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						}
						export module ImageReader {
							export class ByteArrayReader extends java.lang.Object implements com.bumptech.glide.load.resource.bitmap.ImageReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader.ByteArrayReader>;
								public getImageOrientation(): number;
								public decodeBitmap(options: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
								public stopGrowingBuffers(): void;
								public decodeBitmap(param0: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
								public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							}
							export class ByteBufferReader extends java.lang.Object implements com.bumptech.glide.load.resource.bitmap.ImageReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader.ByteBufferReader>;
								public getImageOrientation(): number;
								public decodeBitmap(options: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
								public stopGrowingBuffers(): void;
								public decodeBitmap(param0: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
								public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							}
							export class FileReader extends java.lang.Object implements com.bumptech.glide.load.resource.bitmap.ImageReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader.FileReader>;
								public getImageOrientation(): number;
								public decodeBitmap(options: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
								public stopGrowingBuffers(): void;
								public decodeBitmap(param0: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
								public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							}
							export class InputStreamImageReader extends java.lang.Object implements com.bumptech.glide.load.resource.bitmap.ImageReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader.InputStreamImageReader>;
								public getImageOrientation(): number;
								public decodeBitmap(options: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
								public stopGrowingBuffers(): void;
								public decodeBitmap(param0: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
								public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							}
							export class ParcelFileDescriptorImageReader extends java.lang.Object implements com.bumptech.glide.load.resource.bitmap.ImageReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader.ParcelFileDescriptorImageReader>;
								public getImageOrientation(): number;
								public decodeBitmap(options: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
								public stopGrowingBuffers(): void;
								public decodeBitmap(param0: android.graphics.BitmapFactory.Options): android.graphics.Bitmap;
								public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class InputStreamBitmapImageDecoderResourceDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.InputStreamBitmapImageDecoderResourceDecoder>;
							public constructor();
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(stream: java.io.InputStream, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public handles(source: java.io.InputStream, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class LazyBitmapDrawableResource extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.LazyBitmapDrawableResource>;
							public get(): android.graphics.drawable.BitmapDrawable;
							public get(): any;
							public getSize(): number;
							public initialize(): void;
							/** @deprecated */
							public static obtain(context: android.content.Context, bitmap: android.graphics.Bitmap): com.bumptech.glide.load.resource.bitmap.LazyBitmapDrawableResource;
							/** @deprecated */
							public static obtain(resources: android.content.res.Resources, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, bitmap: android.graphics.Bitmap): com.bumptech.glide.load.resource.bitmap.LazyBitmapDrawableResource;
							public static obtain(resources: android.content.res.Resources, bitmapResource: com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>): com.bumptech.glide.load.engine.Resource<android.graphics.drawable.BitmapDrawable>;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public getResourceClass(): java.lang.Class<android.graphics.drawable.BitmapDrawable>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ParcelFileDescriptorBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<android.os.ParcelFileDescriptor,android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ParcelFileDescriptorBitmapDecoder>;
							public decode(source: android.os.ParcelFileDescriptor, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(source: android.os.ParcelFileDescriptor, options: com.bumptech.glide.load.Options): boolean;
							public constructor(downsampler: com.bumptech.glide.load.resource.bitmap.Downsampler);
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class RecyclableBufferedInputStream extends java.io.FilterInputStream {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.RecyclableBufferedInputStream>;
							public constructor();
							public read(buffer: number[], offset: number, byteCount: number): number;
							public close(): void;
							public available(): number;
							public constructor(in: java.io.InputStream, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public read(): number;
							public release(): void;
							public skip(n: number): number;
							public read(b: number[]): number;
							public reset(): void;
							public markSupported(): boolean;
							public mark(readlimit: number): void;
							public skip(byteCount: number): number;
							public fixMarkLimit(): void;
							public read(b: number[], off: number, len: number): number;
							public constructor(in: java.io.InputStream);
						}
						export module RecyclableBufferedInputStream {
							export class InvalidMarkException extends java.io.IOException {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.RecyclableBufferedInputStream.InvalidMarkException>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ResourceBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<android.net.Uri,android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ResourceBitmapDecoder>;
							public decode(source: android.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public constructor(drawableDecoder: com.bumptech.glide.load.resource.drawable.ResourceDrawableDecoder, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public handles(source: android.net.Uri, options: com.bumptech.glide.load.Options): boolean;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class Rotate extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.Rotate>;
							public constructor();
							public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: android.graphics.Bitmap, outWidth: number, outHeight: number): android.graphics.Bitmap;
							public hashCode(): number;
							public constructor(degreesToRotate: number);
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(obj: any): boolean;
							public transform(context: android.content.Context, resource: com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap, param2: number, param3: number): android.graphics.Bitmap;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class RoundedCorners extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.RoundedCorners>;
							public constructor();
							public constructor(roundingRadius: number);
							public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, toTransform: android.graphics.Bitmap, outWidth: number, outHeight: number): android.graphics.Bitmap;
							public hashCode(): number;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public equals(obj: any): boolean;
							public transform(context: android.content.Context, resource: com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap, param2: number, param3: number): android.graphics.Bitmap;
							public equals(o: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class StreamBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.StreamBitmapDecoder>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(source: java.io.InputStream, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public constructor(downsampler: com.bumptech.glide.load.resource.bitmap.Downsampler, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public handles(source: java.io.InputStream, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
						export module StreamBitmapDecoder {
							export class UntrustedCallbacks extends java.lang.Object implements com.bumptech.glide.load.resource.bitmap.Downsampler.DecodeCallbacks {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.StreamBitmapDecoder.UntrustedCallbacks>;
								public onDecodeComplete(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap): void;
								public onObtainBounds(): void;
								public onDecodeComplete(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, downsampled: android.graphics.Bitmap): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class TransformationUtils extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.TransformationUtils>;
							public static PAINT_FLAGS: number;
							public static circleCrop(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: android.graphics.Bitmap, destWidth: number, destHeight: number): android.graphics.Bitmap;
							public static isExifOrientationRequired(exifOrientation: number): boolean;
							public static getExifOrientationDegrees(exifOrientation: number): number;
							public static centerCrop(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: android.graphics.Bitmap, width: number, height: number): android.graphics.Bitmap;
							public static getBitmapDrawableLock(): java.util.concurrent.locks.Lock;
							public static rotateImage(imageToOrient: android.graphics.Bitmap, degreesToRotate: number): android.graphics.Bitmap;
							/** @deprecated */
							public static roundedCorners(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: android.graphics.Bitmap, width: number, height: number, roundingRadius: number): android.graphics.Bitmap;
							public static roundedCorners(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: android.graphics.Bitmap, roundingRadius: number): android.graphics.Bitmap;
							public static setAlpha(inBitmap: android.graphics.Bitmap, outBitmap: android.graphics.Bitmap): void;
							public static centerInside(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: android.graphics.Bitmap, width: number, height: number): android.graphics.Bitmap;
							public static roundedCorners(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: android.graphics.Bitmap, topLeft: number, topRight: number, bottomRight: number, bottomLeft: number): android.graphics.Bitmap;
							public static fitCenter(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: android.graphics.Bitmap, width: number, height: number): android.graphics.Bitmap;
							public static rotateImageExif(pool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, inBitmap: android.graphics.Bitmap, exifOrientation: number): android.graphics.Bitmap;
						}
						export module TransformationUtils {
							export class DrawRoundedCornerFn extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.TransformationUtils.DrawRoundedCornerFn>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.TransformationUtils$DrawRoundedCornerFn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									drawRoundedCorners(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: android.graphics.RectF): void;
								});
								public constructor();
								public drawRoundedCorners(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: android.graphics.RectF): void;
							}
							export class NoLock extends java.lang.Object implements java.util.concurrent.locks.Lock {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.TransformationUtils.NoLock>;
								public lockInterruptibly(): void;
								public newCondition(): java.util.concurrent.locks.Condition;
								public unlock(): void;
								public tryLock(time: number, param1: java.util.concurrent.TimeUnit): boolean;
								public lock(): void;
								public tryLock(): boolean;
								public tryLock(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class UnitBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<android.graphics.Bitmap,android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.UnitBitmapDecoder>;
							public constructor();
							public handles(source: android.graphics.Bitmap, options: com.bumptech.glide.load.Options): boolean;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(source: android.graphics.Bitmap, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
						export module UnitBitmapDecoder {
							export class NonOwnedBitmapResource extends com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.UnitBitmapDecoder.NonOwnedBitmapResource>;
								public getResourceClass(): java.lang.Class<any>;
								public get(): any;
								public recycle(): void;
								public getResourceClass(): java.lang.Class<android.graphics.Bitmap>;
								public get(): android.graphics.Bitmap;
								public getSize(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class VideoBitmapDecoder extends com.bumptech.glide.load.resource.bitmap.VideoDecoder<android.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoBitmapDecoder>;
							public handles(data: any, options: com.bumptech.glide.load.Options): boolean;
							public constructor(context: android.content.Context);
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public decode(resource: any, outWidth: number, outHeight: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class VideoDecoder<T>  extends com.bumptech.glide.load.ResourceDecoder<any,android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder<any>>;
							public static DEFAULT_FRAME: number;
							public static TARGET_FRAME: com.bumptech.glide.load.Option<java.lang.Long>;
							public static FRAME_OPTION: com.bumptech.glide.load.Option<java.lang.Integer>;
							public static parcel(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.ResourceDecoder<android.os.ParcelFileDescriptor,android.graphics.Bitmap>;
							public handles(data: any, options: com.bumptech.glide.load.Options): boolean;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public static byteBuffer(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,android.graphics.Bitmap>;
							public decode(resource: any, outWidth: number, outHeight: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public static asset(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.ResourceDecoder<android.content.res.AssetFileDescriptor,android.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
						export module VideoDecoder {
							export class AssetFileDescriptorInitializer extends com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverInitializer<android.content.res.AssetFileDescriptor> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.AssetFileDescriptorInitializer>;
								public initialize(retriever: android.media.MediaMetadataRetriever, data: android.content.res.AssetFileDescriptor): void;
								public initialize(param0: android.media.MediaMetadataRetriever, param1: any): void;
							}
							export class ByteBufferInitializer extends com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverInitializer<java.nio.ByteBuffer> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.ByteBufferInitializer>;
								public initialize(retriever: android.media.MediaMetadataRetriever, data: java.nio.ByteBuffer): void;
								public initialize(param0: android.media.MediaMetadataRetriever, param1: any): void;
							}
							export class MediaMetadataRetrieverFactory extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverFactory>;
								public build(): android.media.MediaMetadataRetriever;
							}
							export class MediaMetadataRetrieverInitializer<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverInitializer<any>>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.VideoDecoder$MediaMetadataRetrieverInitializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									initialize(param0: android.media.MediaMetadataRetriever, param1: T): void;
								});
								public constructor();
								public initialize(param0: android.media.MediaMetadataRetriever, param1: T): void;
							}
							export class ParcelFileDescriptorInitializer extends com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverInitializer<android.os.ParcelFileDescriptor> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.ParcelFileDescriptorInitializer>;
								public initialize(param0: android.media.MediaMetadataRetriever, param1: any): void;
								public initialize(retriever: android.media.MediaMetadataRetriever, data: android.os.ParcelFileDescriptor): void;
							}
							export class VideoDecoderException extends java.lang.RuntimeException {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.VideoDecoderException>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bytes {
						export class ByteBufferRewinder extends com.bumptech.glide.load.data.DataRewinder<java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bytes.ByteBufferRewinder>;
							public cleanup(): void;
							public constructor(buffer: java.nio.ByteBuffer);
							public rewindAndGet(): java.nio.ByteBuffer;
							public rewindAndGet(): any;
						}
						export module ByteBufferRewinder {
							export class Factory extends com.bumptech.glide.load.data.DataRewinder.Factory<java.nio.ByteBuffer> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bytes.ByteBufferRewinder.Factory>;
								public getDataClass(): java.lang.Class<java.nio.ByteBuffer>;
								public build(param0: any): com.bumptech.glide.load.data.DataRewinder<any>;
								public build(data: java.nio.ByteBuffer): com.bumptech.glide.load.data.DataRewinder<java.nio.ByteBuffer>;
								public constructor();
								public getDataClass(): java.lang.Class<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bytes {
						export class BytesResource extends com.bumptech.glide.load.engine.Resource<number[]> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bytes.BytesResource>;
							public get(): any;
							public getSize(): number;
							public getResourceClass(): java.lang.Class<number[]>;
							public get(): number[];
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public constructor(bytes: number[]);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export class AnimatedWebpDecoder extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.AnimatedWebpDecoder>;
							public static byteBufferDecoder(imageHeaderParsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,android.graphics.drawable.Drawable>;
							public static streamDecoder(imageHeaderParsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,android.graphics.drawable.Drawable>;
						}
						export module AnimatedWebpDecoder {
							export class AnimatedImageDrawableResource extends com.bumptech.glide.load.engine.Resource<android.graphics.drawable.Drawable> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.AnimatedWebpDecoder.AnimatedImageDrawableResource>;
								public getResourceClass(): java.lang.Class<android.graphics.drawable.Drawable>;
								public get(): android.graphics.drawable.AnimatedImageDrawable;
								public getResourceClass(): java.lang.Class<any>;
								public get(): any;
								public recycle(): void;
								public getSize(): number;
							}
							export class ByteBufferAnimatedWebpDecoder extends com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,android.graphics.drawable.Drawable> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.AnimatedWebpDecoder.ByteBufferAnimatedWebpDecoder>;
								public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
								public handles(source: java.nio.ByteBuffer, options: com.bumptech.glide.load.Options): boolean;
								public decode(byteBuffer: java.nio.ByteBuffer, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.drawable.Drawable>;
								public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
							}
							export class StreamAnimatedWebpDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,android.graphics.drawable.Drawable> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.AnimatedWebpDecoder.StreamAnimatedWebpDecoder>;
								public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
								public decode(is: java.io.InputStream, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.drawable.Drawable>;
								public handles(source: java.io.InputStream, options: com.bumptech.glide.load.Options): boolean;
								public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export class DrawableDecoderCompat extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.DrawableDecoderCompat>;
							public static getDrawable(ourContext: android.content.Context, targetContext: android.content.Context, id: number): android.graphics.drawable.Drawable;
							public static getDrawable(ourContext: android.content.Context, id: number, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export abstract class DrawableResource<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.DrawableResource<any>>;
							public drawable: T;
							public get(): any;
							public getSize(): number;
							public initialize(): void;
							public constructor(drawable: T);
							public get(): T;
							public getResourceClass(): java.lang.Class<any>;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export class DrawableTransitionOptions extends com.bumptech.glide.TransitionOptions<com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions,android.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions>;
							public constructor();
							public static with(transitionFactory: com.bumptech.glide.request.transition.TransitionFactory<android.graphics.drawable.Drawable>): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public crossFade(drawableCrossFadeFactory: com.bumptech.glide.request.transition.DrawableCrossFadeFactory): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public static withCrossFade(drawableCrossFadeFactory: com.bumptech.glide.request.transition.DrawableCrossFadeFactory): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public static withCrossFade(builder: com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public crossFade(builder: com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public hashCode(): number;
							public crossFade(): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public static withCrossFade(): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public static withCrossFade(duration: number): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public equals(o: any): boolean;
							public crossFade(duration: number): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export class NonOwnedDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource<android.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.NonOwnedDrawableResource>;
							public get(): any;
							public getSize(): number;
							public initialize(): void;
							public getResourceClass(): java.lang.Class<android.graphics.drawable.Drawable>;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export class ResourceDrawableDecoder extends com.bumptech.glide.load.ResourceDecoder<android.net.Uri,android.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.ResourceDrawableDecoder>;
							public static THEME: com.bumptech.glide.load.Option<android.content.res.Resources.Theme>;
							public constructor(context: android.content.Context);
							public handles(source: android.net.Uri, options: com.bumptech.glide.load.Options): boolean;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(source: android.net.Uri, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.drawable.Drawable>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export class UnitDrawableDecoder extends com.bumptech.glide.load.ResourceDecoder<android.graphics.drawable.Drawable,android.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.UnitDrawableDecoder>;
							public constructor();
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(source: android.graphics.drawable.Drawable, options: com.bumptech.glide.load.Options): boolean;
							public decode(source: android.graphics.drawable.Drawable, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.drawable.Drawable>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module file {
						export class FileDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.File,java.io.File> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.file.FileDecoder>;
							public constructor();
							public handles(source: java.io.File, options: com.bumptech.glide.load.Options): boolean;
							public decode(source: java.io.File, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<java.io.File>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module file {
						export class FileResource extends com.bumptech.glide.load.resource.SimpleResource<java.io.File> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.file.FileResource>;
							public get(): any;
							public constructor(file: java.io.File);
							public getSize(): number;
							public constructor(data: any);
							public getResourceClass(): java.lang.Class<any>;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class ByteBufferGifDecoder extends com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,com.bumptech.glide.load.resource.gif.GifDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.ByteBufferGifDecoder>;
							public decode(source: java.nio.ByteBuffer, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.resource.gif.GifDrawableResource;
							public constructor(context: android.content.Context);
							public constructor(context: android.content.Context, parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(source: java.nio.ByteBuffer, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
						export module ByteBufferGifDecoder {
							export class GifDecoderFactory extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.ByteBufferGifDecoder.GifDecoderFactory>;
							}
							export class GifHeaderParserPool extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.ByteBufferGifDecoder.GifHeaderParserPool>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifBitmapProvider extends java.lang.Object implements com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifBitmapProvider>;
							public release(bytes: number[]): void;
							public release(bitmap: android.graphics.Bitmap): void;
							public obtainByteArray(size: number): number[];
							public obtainByteArray(param0: number): number[];
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, arrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public obtain(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public obtainIntArray(size: number): number[];
							public obtainIntArray(param0: number): number[];
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public obtain(width: number, height: number, config: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public release(array: number[]): void;
							public release(param0: android.graphics.Bitmap): void;
							public release(param0: number[]): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawable extends android.graphics.drawable.Drawable implements com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameCallback, android.graphics.drawable.Animatable, androidx.vectordrawable.graphics.drawable.Animatable2Compat {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawable>;
							public static LOOP_FOREVER: number;
							public static LOOP_INTRINSIC: number;
							public getBuffer(): java.nio.ByteBuffer;
							public registerAnimationCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
							public clearAnimationCallbacks(): void;
							/** @deprecated */
							public constructor(context: android.content.Context, gifDecoder: com.bumptech.glide.gifdecoder.GifDecoder, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, frameTransformation: com.bumptech.glide.load.Transformation<android.graphics.Bitmap>, targetFrameWidth: number, targetFrameHeight: number, firstFrame: android.graphics.Bitmap);
							public onFrameReady(): void;
							public constructor(context: android.content.Context, gifDecoder: com.bumptech.glide.gifdecoder.GifDecoder, frameTransformation: com.bumptech.glide.load.Transformation<android.graphics.Bitmap>, targetFrameWidth: number, targetFrameHeight: number, firstFrame: android.graphics.Bitmap);
							public setVisible(visible: boolean, restart: boolean): boolean;
							public getFirstFrame(): android.graphics.Bitmap;
							public unregisterAnimationCallback(animationCallback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): boolean;
							public isRunning(): boolean;
							public getSize(): number;
							public stop(): void;
							public start(): void;
							public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
							public getIntrinsicWidth(): number;
							public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
							public setFrameTransformation(frameTransformation: com.bumptech.glide.load.Transformation<android.graphics.Bitmap>, firstFrame: android.graphics.Bitmap): void;
							public constructor();
							public draw(param0: android.graphics.Canvas): void;
							public setColorFilter(colorFilter: android.graphics.ColorFilter): void;
							public startFromFirstFrame(): void;
							public setColorFilter(param0: android.graphics.ColorFilter): void;
							public unregisterAnimationCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): boolean;
							public getFrameCount(): number;
							public onBoundsChange(bounds: android.graphics.Rect): void;
							public registerAnimationCallback(animationCallback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
							public getIntrinsicHeight(): number;
							public setAlpha(param0: number): void;
							public getFrameTransformation(): com.bumptech.glide.load.Transformation<android.graphics.Bitmap>;
							public getFrameIndex(): number;
							public setAlpha(i: number): void;
							public getOpacity(): number;
							public recycle(): void;
							public draw(canvas: android.graphics.Canvas): void;
							public setLoopCount(loopCount: number): void;
						}
						export module GifDrawable {
							export class GifState extends android.graphics.drawable.Drawable.ConstantState {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawable.GifState>;
								public newDrawable(res: android.content.res.Resources): android.graphics.drawable.Drawable;
								public getChangingConfigurations(): number;
								public newDrawable(): android.graphics.drawable.Drawable;
								public newDrawable(res: android.content.res.Resources, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawableEncoder extends com.bumptech.glide.load.ResourceEncoder<com.bumptech.glide.load.resource.gif.GifDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawableEncoder>;
							public constructor();
							public getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
							public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
							public getEncodeStrategy(options: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
							public encode(data: com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>, file: java.io.File, options: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource<com.bumptech.glide.load.resource.gif.GifDrawable> implements com.bumptech.glide.load.engine.Initializable  {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawableResource>;
							public get(): any;
							public getSize(): number;
							public getResourceClass(): java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawable>;
							public initialize(): void;
							public constructor(drawable: com.bumptech.glide.load.resource.gif.GifDrawable);
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public constructor(drawable: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawableTransformation extends com.bumptech.glide.load.Transformation<com.bumptech.glide.load.resource.gif.GifDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawableTransformation>;
							public transform(param0: android.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
							public transform(context: android.content.Context, resource: com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>, outWidth: number, outHeight: number): com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>;
							public equals(obj: any): boolean;
							public equals(o: any): boolean;
							public equals(param0: any): boolean;
							public constructor(wrapped: com.bumptech.glide.load.Transformation<android.graphics.Bitmap>);
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifFrameLoader extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader>;
						}
						export module GifFrameLoader {
							export class DelayTarget extends com.bumptech.glide.request.target.CustomTarget<android.graphics.Bitmap> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader.DelayTarget>;
								public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
								public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
								public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
								public getRequest(): com.bumptech.glide.request.Request;
								public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
								public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
								public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
								public setRequest(param0: com.bumptech.glide.request.Request): void;
								public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
								public setRequest(request: com.bumptech.glide.request.Request): void;
								public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
								public onResourceReady(resource: android.graphics.Bitmap, transition: com.bumptech.glide.request.transition.Transition<any>): void;
								public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
								public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
								public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
							}
							export class FrameCallback extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameCallback>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.gif.GifFrameLoader$FrameCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onFrameReady(): void;
								});
								public constructor();
								public onFrameReady(): void;
							}
							export class FrameLoaderCallback extends java.lang.Object implements android.os.Handler.Callback {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameLoaderCallback>;
								public handleMessage(msg: android.os.Message): boolean;
								public handleMessage(param0: android.os.Message): boolean;
							}
							export class OnEveryFrameListener extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader.OnEveryFrameListener>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.gif.GifFrameLoader$OnEveryFrameListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onFrameReady(): void;
								});
								public constructor();
								public onFrameReady(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifFrameResourceDecoder extends com.bumptech.glide.load.ResourceDecoder<com.bumptech.glide.gifdecoder.GifDecoder,android.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameResourceDecoder>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public decode(source: com.bumptech.glide.gifdecoder.GifDecoder, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>;
							public handles(source: com.bumptech.glide.gifdecoder.GifDecoder, options: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifOptions extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifOptions>;
							public static DECODE_FORMAT: com.bumptech.glide.load.Option<com.bumptech.glide.load.DecodeFormat>;
							public static DISABLE_ANIMATION: com.bumptech.glide.load.Option<java.lang.Boolean>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class StreamGifDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,com.bumptech.glide.load.resource.gif.GifDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.StreamGifDecoder>;
							public decode(source: java.io.InputStream, width: number, height: number, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(source: java.io.InputStream, options: com.bumptech.glide.load.Options): boolean;
							public constructor(parsers: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, byteBufferDecoder: com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,com.bumptech.glide.load.resource.gif.GifDrawable>, byteArrayPool: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class BitmapBytesTranscoder extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<android.graphics.Bitmap,number[]> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.BitmapBytesTranscoder>;
							public constructor();
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public transcode(toTranscode: com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<number[]>;
							public constructor(compressFormat: android.graphics.Bitmap.CompressFormat, quality: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class BitmapDrawableTranscoder extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<android.graphics.Bitmap,android.graphics.drawable.BitmapDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.BitmapDrawableTranscoder>;
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(context: android.content.Context);
							public constructor(resources: android.content.res.Resources);
							/** @deprecated */
							public constructor(resources: android.content.res.Resources, bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public transcode(toTranscode: com.bumptech.glide.load.engine.Resource<android.graphics.Bitmap>, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<android.graphics.drawable.BitmapDrawable>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class DrawableBytesTranscoder extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<android.graphics.drawable.Drawable,number[]> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.DrawableBytesTranscoder>;
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public transcode(toTranscode: com.bumptech.glide.load.engine.Resource<android.graphics.drawable.Drawable>, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<number[]>;
							public constructor(bitmapPool: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, bitmapBytesTranscoder: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<android.graphics.Bitmap,number[]>, gifDrawableBytesTranscoder: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<com.bumptech.glide.load.resource.gif.GifDrawable,number[]>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class GifDrawableBytesTranscoder extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<com.bumptech.glide.load.resource.gif.GifDrawable,number[]> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.GifDrawableBytesTranscoder>;
							public constructor();
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public transcode(toTranscode: com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<number[]>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class ResourceTranscoder<Z, R>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								transcode(param0: com.bumptech.glide.load.engine.Resource<Z>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<R>;
							});
							public constructor();
							public transcode(param0: com.bumptech.glide.load.engine.Resource<Z>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<R>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class TranscoderRegistry extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.TranscoderRegistry>;
							public constructor();
							public getTranscodeClasses(resourceClass: java.lang.Class<any>, transcodeClass: java.lang.Class<any>): java.util.List<any>;
							public register(decodedClass: java.lang.Class<any>, transcodedClass: java.lang.Class<any>, transcoder: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>): void;
							public get(resourceClass: java.lang.Class<any>, transcodedClass: java.lang.Class<any>): com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>;
						}
						export module TranscoderRegistry {
							export class Entry<Z, R>  extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.TranscoderRegistry.Entry<any,any>>;
								public handles(fromClass: java.lang.Class<any>, toClass: java.lang.Class<any>): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class UnitTranscoder<Z>  extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.UnitTranscoder<any>>;
							public constructor();
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public static get(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>;
							public transcode(toTranscode: com.bumptech.glide.load.engine.Resource<any>, options: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ActivityFragmentLifecycle extends java.lang.Object implements com.bumptech.glide.manager.Lifecycle {
					public static class: java.lang.Class<com.bumptech.glide.manager.ActivityFragmentLifecycle>;
					public addListener(listener: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(listener: com.bumptech.glide.manager.LifecycleListener): void;
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ApplicationLifecycle extends java.lang.Object implements com.bumptech.glide.manager.Lifecycle {
					public static class: java.lang.Class<com.bumptech.glide.manager.ApplicationLifecycle>;
					public addListener(listener: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(listener: com.bumptech.glide.manager.LifecycleListener): void;
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ConnectivityMonitor extends java.lang.Object implements com.bumptech.glide.manager.LifecycleListener {
					public static class: java.lang.Class<com.bumptech.glide.manager.ConnectivityMonitor>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public constructor();
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
				export module ConnectivityMonitor {
					export class ConnectivityListener extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitor$ConnectivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onConnectivityChanged(param0: boolean): void;
						});
						public constructor();
						public onConnectivityChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ConnectivityMonitorFactory extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.manager.ConnectivityMonitorFactory>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(param0: android.content.Context, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
					});
					public constructor();
					public build(param0: android.content.Context, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class DefaultConnectivityMonitor extends java.lang.Object implements com.bumptech.glide.manager.ConnectivityMonitor {
					public static class: java.lang.Class<com.bumptech.glide.manager.DefaultConnectivityMonitor>;
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class DefaultConnectivityMonitorFactory extends java.lang.Object implements com.bumptech.glide.manager.ConnectivityMonitorFactory {
					public static class: java.lang.Class<com.bumptech.glide.manager.DefaultConnectivityMonitorFactory>;
					public constructor();
					public build(context: android.content.Context, listener: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
					public build(param0: android.content.Context, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class DoNothingFirstFrameWaiter extends java.lang.Object implements com.bumptech.glide.manager.FrameWaiter {
					public static class: java.lang.Class<com.bumptech.glide.manager.DoNothingFirstFrameWaiter>;
					public registerSelf(param0: android.app.Activity): void;
					public registerSelf(activity: android.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class EmptyRequestManagerTreeNode extends java.lang.Object implements com.bumptech.glide.manager.RequestManagerTreeNode {
					public static class: java.lang.Class<com.bumptech.glide.manager.EmptyRequestManagerTreeNode>;
					public getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class FirstFrameAndAfterTrimMemoryWaiter extends java.lang.Object implements com.bumptech.glide.manager.FrameWaiter, android.content.ComponentCallbacks2 {
					public static class: java.lang.Class<com.bumptech.glide.manager.FirstFrameAndAfterTrimMemoryWaiter>;
					public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
					public onTrimMemory(level: number): void;
					public onTrimMemory(param0: number): void;
					public registerSelf(param0: android.app.Activity): void;
					public registerSelf(activity: android.app.Activity): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onLowMemory(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class FirstFrameWaiter extends java.lang.Object implements com.bumptech.glide.manager.FrameWaiter {
					public static class: java.lang.Class<com.bumptech.glide.manager.FirstFrameWaiter>;
					public registerSelf(param0: android.app.Activity): void;
					public registerSelf(activity: android.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class FrameWaiter extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.manager.FrameWaiter>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.FrameWaiter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerSelf(param0: android.app.Activity): void;
					});
					public constructor();
					public registerSelf(param0: android.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class Lifecycle extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.manager.Lifecycle>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.Lifecycle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
						removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					});
					public constructor();
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class LifecycleLifecycle extends java.lang.Object implements com.bumptech.glide.manager.Lifecycle, androidx.lifecycle.LifecycleObserver {
					public static class: java.lang.Class<com.bumptech.glide.manager.LifecycleLifecycle>;
					public addListener(listener: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(listener: com.bumptech.glide.manager.LifecycleListener): void;
					public onStart(owner: androidx.lifecycle.LifecycleOwner): void;
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					public onStop(owner: androidx.lifecycle.LifecycleOwner): void;
					public onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class LifecycleListener extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.manager.LifecycleListener>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.LifecycleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public constructor();
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class LifecycleRequestManagerRetriever extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.manager.LifecycleRequestManagerRetriever>;
				}
				export module LifecycleRequestManagerRetriever {
					export class SupportRequestManagerTreeNode extends java.lang.Object implements com.bumptech.glide.manager.RequestManagerTreeNode {
						public static class: java.lang.Class<com.bumptech.glide.manager.LifecycleRequestManagerRetriever.SupportRequestManagerTreeNode>;
						public getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class NullConnectivityMonitor extends java.lang.Object implements com.bumptech.glide.manager.ConnectivityMonitor {
					public static class: java.lang.Class<com.bumptech.glide.manager.NullConnectivityMonitor>;
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestManagerFragment extends android.app.Fragment {
					public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerFragment>;
					/** @deprecated */
					public onAttach(activity: android.app.Activity): void;
					public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
					public onAttach(context: android.content.Context): void;
					public setRequestManager(requestManager: com.bumptech.glide.RequestManager): void;
					public onDestroy(): void;
					public onStart(): void;
					public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
					public toString(): string;
					public onTrimMemory(level: number): void;
					public onTrimMemory(param0: number): void;
					public getRequestManager(): com.bumptech.glide.RequestManager;
					public constructor();
					public onDetach(): void;
					public onStop(): void;
					public getRequestManagerTreeNode(): com.bumptech.glide.manager.RequestManagerTreeNode;
					public onAttach(activity: android.app.Activity): void;
				}
				export module RequestManagerFragment {
					export class FragmentRequestManagerTreeNode extends java.lang.Object implements com.bumptech.glide.manager.RequestManagerTreeNode {
						public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerFragment.FragmentRequestManagerTreeNode>;
						public getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestManagerRetriever extends java.lang.Object implements android.os.Handler.Callback {
					public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerRetriever>;
					public handleMessage(param0: android.os.Message): boolean;
					public get(context: android.content.Context): com.bumptech.glide.RequestManager;
					public get(activity: androidx.fragment.app.FragmentActivity): com.bumptech.glide.RequestManager;
					public handleMessage(message: android.os.Message): boolean;
					/** @deprecated */
					public get(fragment: android.app.Fragment): com.bumptech.glide.RequestManager;
					public get(view: android.view.View): com.bumptech.glide.RequestManager;
					/** @deprecated */
					public get(activity: android.app.Activity): com.bumptech.glide.RequestManager;
					public constructor(factory: com.bumptech.glide.manager.RequestManagerRetriever.RequestManagerFactory, experiments: com.bumptech.glide.GlideExperiments);
					public get(fragment: androidx.fragment.app.Fragment): com.bumptech.glide.RequestManager;
				}
				export module RequestManagerRetriever {
					export class RequestManagerFactory extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerRetriever.RequestManagerFactory>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.manager.RequestManagerRetriever$RequestManagerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							build(param0: com.bumptech.glide.Glide, param1: com.bumptech.glide.manager.Lifecycle, param2: com.bumptech.glide.manager.RequestManagerTreeNode, param3: android.content.Context): com.bumptech.glide.RequestManager;
						});
						public constructor();
						public build(param0: com.bumptech.glide.Glide, param1: com.bumptech.glide.manager.Lifecycle, param2: com.bumptech.glide.manager.RequestManagerTreeNode, param3: android.content.Context): com.bumptech.glide.RequestManager;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestManagerTreeNode extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerTreeNode>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.RequestManagerTreeNode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
					});
					public constructor();
					public getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestTracker extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.manager.RequestTracker>;
					public toString(): string;
					public pauseRequests(): void;
					public constructor();
					public pauseAllRequests(): void;
					public clearRequests(): void;
					public restartRequests(): void;
					public isPaused(): boolean;
					public clearAndRemove(request: com.bumptech.glide.request.Request): boolean;
					public runRequest(request: com.bumptech.glide.request.Request): void;
					public resumeRequests(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class SingletonConnectivityReceiver extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.manager.SingletonConnectivityReceiver>;
				}
				export module SingletonConnectivityReceiver {
					export class FrameworkConnectivityMonitor extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.manager.SingletonConnectivityReceiver.FrameworkConnectivityMonitor>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.manager.SingletonConnectivityReceiver$FrameworkConnectivityMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							register(): boolean;
							unregister(): void;
						});
						public constructor();
						public unregister(): void;
						public register(): boolean;
					}
					export class FrameworkConnectivityMonitorPostApi24 extends java.lang.Object implements com.bumptech.glide.manager.SingletonConnectivityReceiver.FrameworkConnectivityMonitor {
						public static class: java.lang.Class<com.bumptech.glide.manager.SingletonConnectivityReceiver.FrameworkConnectivityMonitorPostApi24>;
						public unregister(): void;
						public register(): boolean;
					}
					export class FrameworkConnectivityMonitorPreApi24 extends java.lang.Object implements com.bumptech.glide.manager.SingletonConnectivityReceiver.FrameworkConnectivityMonitor {
						public static class: java.lang.Class<com.bumptech.glide.manager.SingletonConnectivityReceiver.FrameworkConnectivityMonitorPreApi24>;
						public unregister(): void;
						public register(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class SupportRequestManagerFragment extends androidx.fragment.app.Fragment {
					public static class: java.lang.Class<com.bumptech.glide.manager.SupportRequestManagerFragment>;
					public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
					public getViewModelStore(): androidx.lifecycle.ViewModelStore;
					public onAttach(param0: android.content.Context): void;
					public onAttach(context: android.content.Context): void;
					public setRequestManager(requestManager: com.bumptech.glide.RequestManager): void;
					public onDestroy(): void;
					public getLifecycle(): androidx.lifecycle.Lifecycle;
					public onLowMemory(): void;
					public onStart(): void;
					public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
					public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
					public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
					public toString(): string;
					public constructor(lifecycle: com.bumptech.glide.manager.ActivityFragmentLifecycle);
					public getRequestManager(): com.bumptech.glide.RequestManager;
					public constructor();
					public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
					public onDetach(): void;
					public onAttach(param0: android.app.Activity): void;
					public onStop(): void;
					public getRequestManagerTreeNode(): com.bumptech.glide.manager.RequestManagerTreeNode;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public constructor(param0: number);
				}
				export module SupportRequestManagerFragment {
					export class SupportFragmentRequestManagerTreeNode extends java.lang.Object implements com.bumptech.glide.manager.RequestManagerTreeNode {
						public static class: java.lang.Class<com.bumptech.glide.manager.SupportRequestManagerFragment.SupportFragmentRequestManagerTreeNode>;
						public getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class TargetTracker extends java.lang.Object implements com.bumptech.glide.manager.LifecycleListener {
					public static class: java.lang.Class<com.bumptech.glide.manager.TargetTracker>;
					public onStart(): void;
					public constructor();
					public clear(): void;
					public getAll(): java.util.List<com.bumptech.glide.request.target.Target<any>>;
					public track(target: com.bumptech.glide.request.target.Target<any>): void;
					public onStop(): void;
					public onDestroy(): void;
					public untrack(target: com.bumptech.glide.request.target.Target<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export abstract class AppGlideModule extends com.bumptech.glide.module.LibraryGlideModule implements com.bumptech.glide.module.AppliesOptions {
					public static class: java.lang.Class<com.bumptech.glide.module.AppGlideModule>;
					public isManifestParsingEnabled(): boolean;
					public constructor();
					public registerComponents(param0: android.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
					public registerComponents(context: android.content.Context, glide: com.bumptech.glide.Glide, registry: com.bumptech.glide.Registry): void;
					public applyOptions(context: android.content.Context, builder: com.bumptech.glide.GlideBuilder): void;
					public applyOptions(param0: android.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export class AppliesOptions extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.module.AppliesOptions>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.module.AppliesOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						applyOptions(param0: android.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
					});
					public constructor();
					public applyOptions(param0: android.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export class GlideModule extends java.lang.Object implements com.bumptech.glide.module.RegistersComponents, com.bumptech.glide.module.AppliesOptions {
					public static class: java.lang.Class<com.bumptech.glide.module.GlideModule>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.module.GlideModule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerComponents(param0: android.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
						applyOptions(param0: android.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
					});
					public constructor();
					public registerComponents(param0: android.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
					public applyOptions(param0: android.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export abstract class LibraryGlideModule extends java.lang.Object implements com.bumptech.glide.module.RegistersComponents {
					public static class: java.lang.Class<com.bumptech.glide.module.LibraryGlideModule>;
					public constructor();
					public registerComponents(param0: android.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
					public registerComponents(context: android.content.Context, glide: com.bumptech.glide.Glide, registry: com.bumptech.glide.Registry): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export class ManifestParser extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.module.ManifestParser>;
					public constructor(context: android.content.Context);
					public parse(): java.util.List<com.bumptech.glide.module.GlideModule>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export class RegistersComponents extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.module.RegistersComponents>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.module.RegistersComponents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerComponents(param0: android.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
					});
					public constructor();
					public registerComponents(param0: android.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class EncoderRegistry extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.provider.EncoderRegistry>;
					public prepend(dataClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.Encoder<any>): void;
					public constructor();
					public append(dataClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.Encoder<any>): void;
					public getEncoder(dataClass: java.lang.Class<any>): com.bumptech.glide.load.Encoder<any>;
				}
				export module EncoderRegistry {
					export class Entry<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.provider.EncoderRegistry.Entry<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class ImageHeaderParserRegistry extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.provider.ImageHeaderParserRegistry>;
					public add(parser: com.bumptech.glide.load.ImageHeaderParser): void;
					public constructor();
					public getParsers(): java.util.List<com.bumptech.glide.load.ImageHeaderParser>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class LoadPathCache extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.provider.LoadPathCache>;
					public constructor();
					public get(dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, transcodeClass: java.lang.Class<any>): com.bumptech.glide.load.engine.LoadPath<any,any,any>;
					public put(dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, transcodeClass: java.lang.Class<any>, loadPath: com.bumptech.glide.load.engine.LoadPath<any,any,any>): void;
					public isEmptyLoadPath(path: com.bumptech.glide.load.engine.LoadPath<any,any,any>): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class ModelToResourceClassCache extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.provider.ModelToResourceClassCache>;
					public constructor();
					public get(modelClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, transcodeClass: java.lang.Class<any>): java.util.List<java.lang.Class<any>>;
					public clear(): void;
					public put(modelClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>, transcodeClass: java.lang.Class<any>, resourceClasses: java.util.List<java.lang.Class<any>>): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class ResourceDecoderRegistry extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.provider.ResourceDecoderRegistry>;
					public setBucketPriorityList(buckets: java.util.List<string>): void;
					public constructor();
					public getResourceClasses(dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>): java.util.List<any>;
					public append(bucket: string, decoder: com.bumptech.glide.load.ResourceDecoder<any,any>, dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>): void;
					public prepend(bucket: string, decoder: com.bumptech.glide.load.ResourceDecoder<any,any>, dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>): void;
					public getDecoders(dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>): java.util.List<any>;
				}
				export module ResourceDecoderRegistry {
					export class Entry<T, R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.provider.ResourceDecoderRegistry.Entry<any,any>>;
						public handles(dataClass: java.lang.Class<any>, resourceClass: java.lang.Class<any>): boolean;
						public constructor(dataClass: java.lang.Class<T>, resourceClass: java.lang.Class<R>, decoder: com.bumptech.glide.load.ResourceDecoder<T,R>);
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class ResourceEncoderRegistry extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.provider.ResourceEncoderRegistry>;
					public append(resourceClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.ResourceEncoder<any>): void;
					public get(resourceClass: java.lang.Class<any>): com.bumptech.glide.load.ResourceEncoder<any>;
					public constructor();
					public prepend(resourceClass: java.lang.Class<any>, encoder: com.bumptech.glide.load.ResourceEncoder<any>): void;
				}
				export module ResourceEncoderRegistry {
					export class Entry<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.provider.ResourceEncoderRegistry.Entry<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export abstract class BaseRequestOptions<T>  extends java.lang.Cloneable {
					public static class: java.lang.Class<com.bumptech.glide.request.BaseRequestOptions<any>>;
					public autoClone(): any;
					public isTransformationSet(): boolean;
					/** @deprecated */
					public transforms(...transformations: com.bumptech.glide.load.Transformation<android.graphics.Bitmap>[]): any;
					public getSignature(): com.bumptech.glide.load.Key;
					public transform(...transformations: com.bumptech.glide.load.Transformation<android.graphics.Bitmap>[]): any;
					public equals(o: any): boolean;
					public sizeMultiplier(sizeMultiplier: number): any;
					public dontTransform(): any;
					public getErrorPlaceholder(): android.graphics.drawable.Drawable;
					public decode(resourceClass: java.lang.Class<any>): any;
					public clone(): any;
					public diskCacheStrategy(strategy: com.bumptech.glide.load.engine.DiskCacheStrategy): any;
					public getPriority(): com.bumptech.glide.Priority;
					public constructor();
					public error(resourceId: number): any;
					public useUnlimitedSourceGeneratorsPool(flag: boolean): any;
					public frame(frameTimeMicros: number): any;
					public optionalTransform(transformation: com.bumptech.glide.load.Transformation<android.graphics.Bitmap>): any;
					public format(format: com.bumptech.glide.load.DecodeFormat): any;
					public optionalCircleCrop(): any;
					public onlyRetrieveFromCache(flag: boolean): any;
					public isPrioritySet(): boolean;
					public error(drawable: android.graphics.drawable.Drawable): any;
					public encodeQuality(quality: number): any;
					public override(size: number): any;
					public encodeFormat(format: android.graphics.Bitmap.CompressFormat): any;
					public centerCrop(): any;
					public set(option: com.bumptech.glide.load.Option<any>, value: any): com.bumptech.glide.request.BaseRequestOptions<any>;
					public getOverrideHeight(): number;
					public placeholder(resourceId: number): any;
					public isValidOverride(): boolean;
					public isLocked(): boolean;
					public getUseAnimationPool(): boolean;
					public optionalTransform(resourceClass: java.lang.Class<any>, transformation: com.bumptech.glide.load.Transformation<any>): com.bumptech.glide.request.BaseRequestOptions<any>;
					public isSkipMemoryCacheSet(): boolean;
					public getPlaceholderDrawable(): android.graphics.drawable.Drawable;
					public apply(o: com.bumptech.glide.request.BaseRequestOptions<any>): any;
					public getSizeMultiplier(): number;
					public fallback(drawable: android.graphics.drawable.Drawable): any;
					public fitCenter(): any;
					public getOnlyRetrieveFromCache(): boolean;
					public theme(theme: android.content.res.Resources.Theme): any;
					public getOverrideWidth(): number;
					public transform(transformation: com.bumptech.glide.load.Transformation<android.graphics.Bitmap>): any;
					public getTransformations(): java.util.Map<java.lang.Class<any>,com.bumptech.glide.load.Transformation<any>>;
					public getFallbackDrawable(): android.graphics.drawable.Drawable;
					public isTransformationAllowed(): boolean;
					public getFallbackId(): number;
					public placeholder(drawable: android.graphics.drawable.Drawable): any;
					public equals(obj: any): boolean;
					public getOptions(): com.bumptech.glide.load.Options;
					public override(width: number, height: number): any;
					public dontAnimate(): any;
					public getPlaceholderId(): number;
					public transform(resourceClass: java.lang.Class<any>, transformation: com.bumptech.glide.load.Transformation<any>): com.bumptech.glide.request.BaseRequestOptions<any>;
					public useAnimationPool(flag: boolean): any;
					public isMemoryCacheable(): boolean;
					public getDiskCacheStrategy(): com.bumptech.glide.load.engine.DiskCacheStrategy;
					public isAutoCloneEnabled(): boolean;
					public optionalCenterInside(): any;
					public fallback(resourceId: number): any;
					public disallowHardwareConfig(): any;
					public selfOrThrowIfLocked(): any;
					public optionalCenterCrop(): any;
					public hashCode(): number;
					public lock(): any;
					public timeout(timeoutMs: number): any;
					public getTheme(): android.content.res.Resources.Theme;
					public isDiskCacheStrategySet(): boolean;
					public downsample(strategy: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy): any;
					public signature(signature: com.bumptech.glide.load.Key): any;
					public centerInside(): any;
					public getUseUnlimitedSourceGeneratorsPool(): boolean;
					public circleCrop(): any;
					public optionalFitCenter(): any;
					public skipMemoryCache(skip: boolean): any;
					public isTransformationRequired(): boolean;
					public getErrorId(): number;
					public priority(priority: com.bumptech.glide.Priority): any;
					public getResourceClass(): java.lang.Class<any>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class ErrorRequestCoordinator extends java.lang.Object implements com.bumptech.glide.request.RequestCoordinator, com.bumptech.glide.request.Request {
					public static class: java.lang.Class<com.bumptech.glide.request.ErrorRequestCoordinator>;
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public isEquivalentTo(o: com.bumptech.glide.request.Request): boolean;
					public canSetImage(request: com.bumptech.glide.request.Request): boolean;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public onRequestSuccess(request: com.bumptech.glide.request.Request): void;
					public isComplete(): boolean;
					public canNotifyCleared(request: com.bumptech.glide.request.Request): boolean;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public setRequests(primary: com.bumptech.glide.request.Request, error: com.bumptech.glide.request.Request): void;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
					public canNotifyStatusChanged(request: com.bumptech.glide.request.Request): boolean;
					public getRoot(): com.bumptech.glide.request.RequestCoordinator;
					public isCleared(): boolean;
					public pause(): void;
					public canNotifyCleared(param0: com.bumptech.glide.request.Request): boolean;
					public clear(): void;
					public isRunning(): boolean;
					public isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
					public onRequestFailed(param0: com.bumptech.glide.request.Request): void;
					public constructor(requestLock: any, parent: com.bumptech.glide.request.RequestCoordinator);
					public onRequestFailed(request: com.bumptech.glide.request.Request): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export abstract class ExperimentalRequestListener<ResourceT>  extends com.bumptech.glide.request.RequestListener<any> {
					public static class: java.lang.Class<com.bumptech.glide.request.ExperimentalRequestListener<any>>;
					public onRequestStarted(model: any): void;
					public onResourceReady(param0: any, param1: any, param2: com.bumptech.glide.request.target.Target<any>, param3: com.bumptech.glide.load.DataSource, param4: boolean): boolean;
					public constructor();
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException, param1: any, param2: com.bumptech.glide.request.target.Target<any>, param3: boolean): boolean;
					public onResourceReady(param0: any, param1: any, param2: com.bumptech.glide.request.target.Target<any>, param3: com.bumptech.glide.load.DataSource, param4: boolean, param5: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class FutureTarget<R>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.FutureTarget<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.FutureTarget<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cancel(param0: boolean): boolean;
						isCancelled(): boolean;
						isDone(): boolean;
						get(): any;
						get(param0: number, param1: java.util.concurrent.TimeUnit): any;
						onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						onResourceReady(param0: R, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						setRequest(param0: com.bumptech.glide.request.Request): void;
						getRequest(): com.bumptech.glide.request.Request;
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public constructor();
					public static SIZE_ORIGINAL: number;
					public isCancelled(): boolean;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onDestroy(): void;
					public cancel(param0: boolean): boolean;
					public onResourceReady(param0: R, param1: com.bumptech.glide.request.transition.Transition<any>): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
					public onStart(): void;
					public get(): any;
					public isDone(): boolean;
					public getRequest(): com.bumptech.glide.request.Request;
					public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
					public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
					public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onStop(): void;
					public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class Request extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.Request>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.Request interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						begin(): void;
						clear(): void;
						pause(): void;
						isRunning(): boolean;
						isComplete(): boolean;
						isCleared(): boolean;
						isAnyResourceSet(): boolean;
						isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
					});
					public constructor();
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public isCleared(): boolean;
					public pause(): void;
					public clear(): void;
					public isRunning(): boolean;
					public isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
					public isComplete(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestCoordinator extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.RequestCoordinator>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.RequestCoordinator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						canSetImage(param0: com.bumptech.glide.request.Request): boolean;
						canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
						canNotifyCleared(param0: com.bumptech.glide.request.Request): boolean;
						isAnyResourceSet(): boolean;
						onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
						onRequestFailed(param0: com.bumptech.glide.request.Request): void;
						getRoot(): com.bumptech.glide.request.RequestCoordinator;
					});
					public constructor();
					public getRoot(): com.bumptech.glide.request.RequestCoordinator;
					public isAnyResourceSet(): boolean;
					public canNotifyCleared(param0: com.bumptech.glide.request.Request): boolean;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public onRequestFailed(param0: com.bumptech.glide.request.Request): void;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
				}
				export module RequestCoordinator {
					export class RequestState {
						public static class: java.lang.Class<com.bumptech.glide.request.RequestCoordinator.RequestState>;
						public static RUNNING: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static PAUSED: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static CLEARED: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static SUCCESS: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static FAILED: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static values(): com.bumptech.glide.request.RequestCoordinator.RequestState[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): com.bumptech.glide.request.RequestCoordinator.RequestState;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestFutureTarget<R>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.RequestFutureTarget<any>>;
					public get(): R;
					public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
					public isCancelled(): boolean;
					public onResourceReady(resource: R, model: any, target: com.bumptech.glide.request.target.Target<R>, dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): boolean;
					public onDestroy(): void;
					public cancel(param0: boolean): boolean;
					public onResourceReady(param0: R, param1: com.bumptech.glide.request.transition.Transition<any>): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onStart(): void;
					public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
					public onLoadFailed(e: com.bumptech.glide.load.engine.GlideException, model: any, target: com.bumptech.glide.request.target.Target<R>, isFirstResource: boolean): boolean;
					public toString(): string;
					public getRequest(): com.bumptech.glide.request.Request;
					public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
					public cancel(mayInterruptIfRunning: boolean): boolean;
					public get(time: number, param1: java.util.concurrent.TimeUnit): R;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public setRequest(request: com.bumptech.glide.request.Request): void;
					public constructor(width: number, height: number);
					public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
					public onResourceReady(param0: R, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: com.bumptech.glide.load.DataSource, param4: boolean): boolean;
					public get(): any;
					public isDone(): boolean;
					public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: boolean): boolean;
					public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
					public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
					public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onStop(): void;
					public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
					public onResourceReady(resource: R, transition: com.bumptech.glide.request.transition.Transition<any>): void;
				}
				export module RequestFutureTarget {
					export class Waiter extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.request.RequestFutureTarget.Waiter>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestListener<R>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.RequestListener<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.RequestListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: boolean): boolean;
						onResourceReady(param0: R, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: com.bumptech.glide.load.DataSource, param4: boolean): boolean;
					});
					public constructor();
					public onResourceReady(param0: R, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: com.bumptech.glide.load.DataSource, param4: boolean): boolean;
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestOptions extends com.bumptech.glide.request.BaseRequestOptions<com.bumptech.glide.request.RequestOptions> {
					public static class: java.lang.Class<com.bumptech.glide.request.RequestOptions>;
					public static encodeFormatOf(format: android.graphics.Bitmap.CompressFormat): com.bumptech.glide.request.RequestOptions;
					public static errorOf(errorId: number): com.bumptech.glide.request.RequestOptions;
					public equals(o: any): boolean;
					public static decodeTypeOf(resourceClass: java.lang.Class<any>): com.bumptech.glide.request.RequestOptions;
					public static frameOf(frameTimeMicros: number): com.bumptech.glide.request.RequestOptions;
					public static timeoutOf(timeout: number): com.bumptech.glide.request.RequestOptions;
					public constructor();
					public static noAnimation(): com.bumptech.glide.request.RequestOptions;
					public static downsampleOf(strategy: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy): com.bumptech.glide.request.RequestOptions;
					public static placeholderOf(placeholder: android.graphics.drawable.Drawable): com.bumptech.glide.request.RequestOptions;
					public static placeholderOf(placeholderId: number): com.bumptech.glide.request.RequestOptions;
					public static noTransformation(): com.bumptech.glide.request.RequestOptions;
					public hashCode(): number;
					public static diskCacheStrategyOf(diskCacheStrategy: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.request.RequestOptions;
					public static formatOf(format: com.bumptech.glide.load.DecodeFormat): com.bumptech.glide.request.RequestOptions;
					public static encodeQualityOf(quality: number): com.bumptech.glide.request.RequestOptions;
					public static signatureOf(signature: com.bumptech.glide.load.Key): com.bumptech.glide.request.RequestOptions;
					public static centerInsideTransform(): com.bumptech.glide.request.RequestOptions;
					public static errorOf(errorDrawable: android.graphics.drawable.Drawable): com.bumptech.glide.request.RequestOptions;
					public static sizeMultiplierOf(sizeMultiplier: number): com.bumptech.glide.request.RequestOptions;
					public static overrideOf(size: number): com.bumptech.glide.request.RequestOptions;
					public static bitmapTransform(transformation: com.bumptech.glide.load.Transformation<android.graphics.Bitmap>): com.bumptech.glide.request.RequestOptions;
					public static priorityOf(priority: com.bumptech.glide.Priority): com.bumptech.glide.request.RequestOptions;
					public static skipMemoryCacheOf(skipMemoryCache: boolean): com.bumptech.glide.request.RequestOptions;
					public static centerCropTransform(): com.bumptech.glide.request.RequestOptions;
					public static circleCropTransform(): com.bumptech.glide.request.RequestOptions;
					public static overrideOf(width: number, height: number): com.bumptech.glide.request.RequestOptions;
					public static fitCenterTransform(): com.bumptech.glide.request.RequestOptions;
					public static option(option: com.bumptech.glide.load.Option<any>, value: any): com.bumptech.glide.request.RequestOptions;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class ResourceCallback extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.ResourceCallback>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.ResourceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResourceReady(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.DataSource, param2: boolean): void;
						onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
						getLock(): any;
					});
					public constructor();
					public onResourceReady(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.DataSource, param2: boolean): void;
					public getLock(): any;
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class SingleRequest<R>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.SingleRequest<any>>;
					public static obtain(context: android.content.Context, glideContext: com.bumptech.glide.GlideContext, requestLock: any, model: any, transcodeClass: java.lang.Class<any>, requestOptions: com.bumptech.glide.request.BaseRequestOptions<any>, overrideWidth: number, overrideHeight: number, priority: com.bumptech.glide.Priority, target: com.bumptech.glide.request.target.Target<any>, targetListener: com.bumptech.glide.request.RequestListener<any>, requestListeners: java.util.List<any>, requestCoordinator: com.bumptech.glide.request.RequestCoordinator, engine: com.bumptech.glide.load.engine.Engine, animationFactory: com.bumptech.glide.request.transition.TransitionFactory<any>, callbackExecutor: java.util.concurrent.Executor): com.bumptech.glide.request.SingleRequest<any>;
					public onResourceReady(resource: com.bumptech.glide.load.engine.Resource<any>, dataSource: com.bumptech.glide.load.DataSource, isLoadedFromAlternateCacheKey: boolean): void;
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public onResourceReady(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.DataSource, param2: boolean): void;
					public onLoadFailed(e: com.bumptech.glide.load.engine.GlideException): void;
					public isEquivalentTo(o: com.bumptech.glide.request.Request): boolean;
					public isComplete(): boolean;
					public onSizeReady(param0: number, param1: number): void;
					public getLock(): any;
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
					public onSizeReady(width: number, height: number): void;
					public toString(): string;
					public isCleared(): boolean;
					public pause(): void;
					public clear(): void;
					public isRunning(): boolean;
					public isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
				}
				export module SingleRequest {
					export class Status {
						public static class: java.lang.Class<com.bumptech.glide.request.SingleRequest.Status>;
						public static PENDING: com.bumptech.glide.request.SingleRequest.Status;
						public static RUNNING: com.bumptech.glide.request.SingleRequest.Status;
						public static WAITING_FOR_SIZE: com.bumptech.glide.request.SingleRequest.Status;
						public static COMPLETE: com.bumptech.glide.request.SingleRequest.Status;
						public static FAILED: com.bumptech.glide.request.SingleRequest.Status;
						public static CLEARED: com.bumptech.glide.request.SingleRequest.Status;
						public static values(): com.bumptech.glide.request.SingleRequest.Status[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): com.bumptech.glide.request.SingleRequest.Status;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class ThumbnailRequestCoordinator extends java.lang.Object implements com.bumptech.glide.request.RequestCoordinator, com.bumptech.glide.request.Request {
					public static class: java.lang.Class<com.bumptech.glide.request.ThumbnailRequestCoordinator>;
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public canSetImage(request: com.bumptech.glide.request.Request): boolean;
					public isEquivalentTo(o: com.bumptech.glide.request.Request): boolean;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public onRequestSuccess(request: com.bumptech.glide.request.Request): void;
					public isComplete(): boolean;
					public canNotifyCleared(request: com.bumptech.glide.request.Request): boolean;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
					public canNotifyStatusChanged(request: com.bumptech.glide.request.Request): boolean;
					public getRoot(): com.bumptech.glide.request.RequestCoordinator;
					public setRequests(full: com.bumptech.glide.request.Request, thumb: com.bumptech.glide.request.Request): void;
					public isCleared(): boolean;
					public pause(): void;
					public canNotifyCleared(param0: com.bumptech.glide.request.Request): boolean;
					public clear(): void;
					public isRunning(): boolean;
					public isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
					public onRequestFailed(param0: com.bumptech.glide.request.Request): void;
					public constructor(requestLock: any, parent: com.bumptech.glide.request.RequestCoordinator);
					public onRequestFailed(request: com.bumptech.glide.request.Request): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class AppWidgetTarget extends com.bumptech.glide.request.target.CustomTarget<android.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.AppWidgetTarget>;
						public constructor(context: android.content.Context, width: number, height: number, viewId: number, remoteViews: android.widget.RemoteViews, ...widgetIds: number[]);
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public constructor(context: android.content.Context, viewId: number, remoteViews: android.widget.RemoteViews, componentName: android.content.ComponentName);
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public constructor(width: number, height: number);
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						public constructor(context: android.content.Context, width: number, height: number, viewId: number, remoteViews: android.widget.RemoteViews, componentName: android.content.ComponentName);
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public constructor(context: android.content.Context, viewId: number, remoteViews: android.widget.RemoteViews, ...widgetIds: number[]);
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onResourceReady(resource: android.graphics.Bitmap, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class BaseTarget<Z>  extends com.bumptech.glide.request.target.Target<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.BaseTarget<any>>;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public onStop(): void;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						public onDestroy(): void;
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class BitmapImageViewTarget extends com.bumptech.glide.request.target.ImageViewTarget<android.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.BitmapImageViewTarget>;
						public getView(): any;
						public setResource(resource: android.graphics.Bitmap): void;
						public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public getView(): android.view.View;
						public getCurrentDrawable(): android.graphics.drawable.Drawable;
						public setResource(param0: any): void;
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public constructor(view: android.widget.ImageView);
						public constructor(view: any);
						public setDrawable(drawable: android.graphics.drawable.Drawable): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setDrawable(param0: android.graphics.drawable.Drawable): void;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						/** @deprecated */
						public constructor(view: android.widget.ImageView, waitForLayout: boolean);
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class BitmapThumbnailImageViewTarget extends com.bumptech.glide.request.target.ThumbnailImageViewTarget<android.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.BitmapThumbnailImageViewTarget>;
						public getView(): any;
						public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						public getDrawable(param0: any): android.graphics.drawable.Drawable;
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public getView(): android.view.View;
						public getCurrentDrawable(): android.graphics.drawable.Drawable;
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public constructor(view: android.widget.ImageView);
						public constructor(view: any);
						public setDrawable(drawable: android.graphics.drawable.Drawable): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setDrawable(param0: android.graphics.drawable.Drawable): void;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						/** @deprecated */
						public constructor(view: android.widget.ImageView, waitForLayout: boolean);
						public getDrawable(resource: android.graphics.Bitmap): android.graphics.drawable.Drawable;
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class CustomTarget<T>  extends com.bumptech.glide.request.target.Target<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.CustomTarget<any>>;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public constructor(width: number, height: number);
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						public onStop(): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						public onDestroy(): void;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class CustomViewTarget<T, Z>  extends com.bumptech.glide.request.target.Target<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.CustomViewTarget<any,any>>;
						public view: any;
						public getView(): any;
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public onResourceCleared(param0: android.graphics.drawable.Drawable): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public clearOnDetach(): com.bumptech.glide.request.target.CustomViewTarget<any,any>;
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						public waitForLayout(): com.bumptech.glide.request.target.CustomViewTarget<any,any>;
						public onStop(): void;
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public toString(): string;
						public onDestroy(): void;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(view: any);
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onResourceLoading(placeholder: android.graphics.drawable.Drawable): void;
						/** @deprecated */
						public useTagId(tagId: number): com.bumptech.glide.request.target.CustomViewTarget<any,any>;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
					export module CustomViewTarget {
						export class SizeDeterminer extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.request.target.CustomViewTarget.SizeDeterminer>;
						}
						export module SizeDeterminer {
							export class SizeDeterminerLayoutListener extends java.lang.Object implements android.view.ViewTreeObserver.OnPreDrawListener {
								public static class: java.lang.Class<com.bumptech.glide.request.target.CustomViewTarget.SizeDeterminer.SizeDeterminerLayoutListener>;
								public onPreDraw(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class DrawableImageViewTarget extends com.bumptech.glide.request.target.ImageViewTarget<android.graphics.drawable.Drawable> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.DrawableImageViewTarget>;
						public getView(): any;
						public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public getView(): android.view.View;
						public getCurrentDrawable(): android.graphics.drawable.Drawable;
						public setResource(param0: any): void;
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public constructor(view: android.widget.ImageView);
						public constructor(view: any);
						public setDrawable(drawable: android.graphics.drawable.Drawable): void;
						public setResource(resource: android.graphics.drawable.Drawable): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setDrawable(param0: android.graphics.drawable.Drawable): void;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						/** @deprecated */
						public constructor(view: android.widget.ImageView, waitForLayout: boolean);
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class DrawableThumbnailImageViewTarget extends com.bumptech.glide.request.target.ThumbnailImageViewTarget<android.graphics.drawable.Drawable> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.DrawableThumbnailImageViewTarget>;
						public getView(): any;
						public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						public getDrawable(param0: any): android.graphics.drawable.Drawable;
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public getView(): android.view.View;
						public getCurrentDrawable(): android.graphics.drawable.Drawable;
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public constructor(view: android.widget.ImageView);
						public constructor(view: any);
						public setDrawable(drawable: android.graphics.drawable.Drawable): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setDrawable(param0: android.graphics.drawable.Drawable): void;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						/** @deprecated */
						public constructor(view: android.widget.ImageView, waitForLayout: boolean);
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public getDrawable(resource: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class FixedSizeDrawable extends android.graphics.drawable.Drawable {
						public static class: java.lang.Class<com.bumptech.glide.request.target.FixedSizeDrawable>;
						public draw(canvas: android.graphics.Canvas): void;
						public getChangingConfigurations(): number;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public setVisible(visible: boolean, restart: boolean): boolean;
						public clearColorFilter(): void;
						public getMinimumWidth(): number;
						public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
						public getAlpha(): number;
						public setBounds(bounds: android.graphics.Rect): void;
						public getCallback(): android.graphics.drawable.Drawable.Callback;
						public getPadding(padding: android.graphics.Rect): boolean;
						public setColorFilter(colorFilter: android.graphics.ColorFilter): void;
						public constructor(wrapped: android.graphics.drawable.Drawable, width: number, height: number);
						public getCurrent(): android.graphics.drawable.Drawable;
						public setChangingConfigurations(configs: number): void;
						public getMinimumHeight(): number;
						public draw(param0: android.graphics.Canvas): void;
						public invalidateSelf(): void;
						public constructor();
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public mutate(): android.graphics.drawable.Drawable;
						public setBounds(left: number, top: number, right: number, bottom: number): void;
						public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
						public setAlpha(i: number): void;
						public unscheduleSelf(what: java.lang.Runnable): void;
						public scheduleSelf(what: java.lang.Runnable, when: number): void;
						/** @deprecated */
						public setDither(dither: boolean): void;
						public setFilterBitmap(filter: boolean): void;
					}
					export module FixedSizeDrawable {
						export class State extends android.graphics.drawable.Drawable.ConstantState {
							public static class: java.lang.Class<com.bumptech.glide.request.target.FixedSizeDrawable.State>;
							public newDrawable(res: android.content.res.Resources): android.graphics.drawable.Drawable;
							public newDrawable(): android.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
							public newDrawable(res: android.content.res.Resources, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class ImageViewTarget<Z>  extends com.bumptech.glide.request.target.ViewTarget<android.widget.ImageView,any> implements com.bumptech.glide.request.transition.Transition.ViewAdapter  {
						public static class: java.lang.Class<com.bumptech.glide.request.target.ImageViewTarget<any>>;
						public getView(): any;
						public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public getCurrentDrawable(): android.graphics.drawable.Drawable;
						public getView(): android.view.View;
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public setResource(param0: any): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public constructor(view: any);
						public constructor(view: android.widget.ImageView);
						public setDrawable(drawable: android.graphics.drawable.Drawable): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setDrawable(param0: android.graphics.drawable.Drawable): void;
						public onStop(): void;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						/** @deprecated */
						public constructor(view: android.widget.ImageView, waitForLayout: boolean);
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class ImageViewTargetFactory extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.request.target.ImageViewTargetFactory>;
						public constructor();
						public buildTarget(view: android.widget.ImageView, clazz: java.lang.Class<any>): com.bumptech.glide.request.target.ViewTarget<any,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class NotificationTarget extends com.bumptech.glide.request.target.CustomTarget<android.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.NotificationTarget>;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public constructor(context: android.content.Context, viewId: number, remoteViews: android.widget.RemoteViews, notification: android.app.Notification, notificationId: number, notificationTag: string);
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public constructor(width: number, height: number);
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						public constructor(context: android.content.Context, width: number, height: number, viewId: number, remoteViews: android.widget.RemoteViews, notification: android.app.Notification, notificationId: number, notificationTag: string);
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public constructor(context: android.content.Context, viewId: number, remoteViews: android.widget.RemoteViews, notification: android.app.Notification, notificationId: number);
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onResourceReady(resource: android.graphics.Bitmap, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class PreloadTarget<Z>  extends com.bumptech.glide.request.target.CustomTarget<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.PreloadTarget<any>>;
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public static obtain(requestManager: com.bumptech.glide.RequestManager, width: number, height: number): com.bumptech.glide.request.target.PreloadTarget<any>;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class SimpleTarget<Z>  extends com.bumptech.glide.request.target.BaseTarget<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.SimpleTarget<any>>;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public constructor(width: number, height: number);
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class SizeReadyCallback extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.request.target.SizeReadyCallback>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.target.SizeReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSizeReady(param0: number, param1: number): void;
						});
						public constructor();
						public onSizeReady(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class Target<R>  extends com.bumptech.glide.manager.LifecycleListener {
						public static class: java.lang.Class<com.bumptech.glide.request.target.Target<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.target.Target<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLoadStarted(param0: android.graphics.drawable.Drawable): void;
							onLoadFailed(param0: android.graphics.drawable.Drawable): void;
							onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
							onLoadCleared(param0: android.graphics.drawable.Drawable): void;
							getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
							removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
							setRequest(param0: com.bumptech.glide.request.Request): void;
							getRequest(): com.bumptech.glide.request.Request;
							onStart(): void;
							onStop(): void;
							onDestroy(): void;
						});
						public constructor();
						public static SIZE_ORIGINAL: number;
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public onDestroy(): void;
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onStop(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class ThumbnailImageViewTarget<T>  extends com.bumptech.glide.request.target.ImageViewTarget<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.ThumbnailImageViewTarget<any>>;
						public getView(): any;
						public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						public getDrawable(param0: any): android.graphics.drawable.Drawable;
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public getView(): android.view.View;
						public getCurrentDrawable(): android.graphics.drawable.Drawable;
						public setResource(param0: any): void;
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public constructor(view: android.widget.ImageView);
						public constructor(view: any);
						public setDrawable(drawable: android.graphics.drawable.Drawable): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setDrawable(param0: android.graphics.drawable.Drawable): void;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						/** @deprecated */
						public constructor(view: android.widget.ImageView, waitForLayout: boolean);
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public setResource(resource: any): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class ViewTarget<T, Z>  extends com.bumptech.glide.request.target.BaseTarget<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.ViewTarget<any,any>>;
						public view: any;
						public getView(): any;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public clearOnDetach(): com.bumptech.glide.request.target.ViewTarget<any,any>;
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						public waitForLayout(): com.bumptech.glide.request.target.ViewTarget<any,any>;
						/** @deprecated */
						public constructor(view: any, waitForLayout: boolean);
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public toString(): string;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(view: any);
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						/** @deprecated */
						public static setTagId(tagId: number): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
					export module ViewTarget {
						export class SizeDeterminer extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.request.target.ViewTarget.SizeDeterminer>;
						}
						export module SizeDeterminer {
							export class SizeDeterminerLayoutListener extends java.lang.Object implements android.view.ViewTreeObserver.OnPreDrawListener {
								public static class: java.lang.Class<com.bumptech.glide.request.target.ViewTarget.SizeDeterminer.SizeDeterminerLayoutListener>;
								public onPreDraw(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export abstract class BitmapContainerTransitionFactory<R>  extends com.bumptech.glide.request.transition.TransitionFactory<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.BitmapContainerTransitionFactory<any>>;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public getBitmap(param0: any): android.graphics.Bitmap;
						public build(dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public constructor(realFactory: com.bumptech.glide.request.transition.TransitionFactory<android.graphics.drawable.Drawable>);
					}
					export module BitmapContainerTransitionFactory {
						export class BitmapGlideAnimation extends com.bumptech.glide.request.transition.Transition<any> {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.BitmapContainerTransitionFactory.BitmapGlideAnimation>;
							public transition(current: any, adapter: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
							public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class BitmapTransitionFactory extends com.bumptech.glide.request.transition.BitmapContainerTransitionFactory<android.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.BitmapTransitionFactory>;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public getBitmap(param0: any): android.graphics.Bitmap;
						public getBitmap(current: android.graphics.Bitmap): android.graphics.Bitmap;
						public build(dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public constructor(realFactory: com.bumptech.glide.request.transition.TransitionFactory<android.graphics.drawable.Drawable>);
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class DrawableCrossFadeFactory extends com.bumptech.glide.request.transition.TransitionFactory<android.graphics.drawable.Drawable> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.DrawableCrossFadeFactory>;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public constructor(duration: number, isCrossFadeEnabled: boolean);
						public build(dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): com.bumptech.glide.request.transition.Transition<android.graphics.drawable.Drawable>;
					}
					export module DrawableCrossFadeFactory {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder>;
							public constructor();
							public build(): com.bumptech.glide.request.transition.DrawableCrossFadeFactory;
							public constructor(durationMillis: number);
							public setCrossFadeEnabled(isCrossFadeEnabled: boolean): com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class DrawableCrossFadeTransition extends com.bumptech.glide.request.transition.Transition<android.graphics.drawable.Drawable> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.DrawableCrossFadeTransition>;
						public constructor(duration: number, isCrossFadeEnabled: boolean);
						public transition(current: android.graphics.drawable.Drawable, adapter: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class NoTransition<R>  extends com.bumptech.glide.request.transition.Transition<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.NoTransition<any>>;
						public constructor();
						public static getFactory(): com.bumptech.glide.request.transition.TransitionFactory<any>;
						public transition(current: any, adapter: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						public static get(): com.bumptech.glide.request.transition.Transition<any>;
					}
					export module NoTransition {
						export class NoAnimationFactory<R>  extends com.bumptech.glide.request.transition.TransitionFactory<any> {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.NoTransition.NoAnimationFactory<any>>;
							public constructor();
							public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
							public build(dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): com.bumptech.glide.request.transition.Transition<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class Transition<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.Transition<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.transition.Transition<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							transition(param0: R, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						});
						public constructor();
						public transition(param0: R, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
					}
					export module Transition {
						export class ViewAdapter extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.Transition.ViewAdapter>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.transition.Transition$ViewAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getView(): android.view.View;
								getCurrentDrawable(): android.graphics.drawable.Drawable;
								setDrawable(param0: android.graphics.drawable.Drawable): void;
							});
							public constructor();
							public getView(): android.view.View;
							public getCurrentDrawable(): android.graphics.drawable.Drawable;
							public setDrawable(param0: android.graphics.drawable.Drawable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class TransitionFactory<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.TransitionFactory<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.transition.TransitionFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<R>;
						});
						public constructor();
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<R>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class ViewAnimationFactory<R>  extends com.bumptech.glide.request.transition.TransitionFactory<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewAnimationFactory<any>>;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public constructor(animation: android.view.animation.Animation);
						public constructor(animationId: number);
						public build(dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): com.bumptech.glide.request.transition.Transition<any>;
					}
					export module ViewAnimationFactory {
						export class ConcreteViewTransitionAnimationFactory extends java.lang.Object implements com.bumptech.glide.request.transition.ViewTransition.ViewTransitionAnimationFactory {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewAnimationFactory.ConcreteViewTransitionAnimationFactory>;
							public build(param0: android.content.Context): android.view.animation.Animation;
							public build(context: android.content.Context): android.view.animation.Animation;
						}
						export class ResourceViewTransitionAnimationFactory extends java.lang.Object implements com.bumptech.glide.request.transition.ViewTransition.ViewTransitionAnimationFactory {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewAnimationFactory.ResourceViewTransitionAnimationFactory>;
							public build(param0: android.content.Context): android.view.animation.Animation;
							public build(context: android.content.Context): android.view.animation.Animation;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class ViewPropertyAnimationFactory<R>  extends com.bumptech.glide.request.transition.TransitionFactory<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewPropertyAnimationFactory<any>>;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public constructor(animator: com.bumptech.glide.request.transition.ViewPropertyTransition.Animator);
						public build(dataSource: com.bumptech.glide.load.DataSource, isFirstResource: boolean): com.bumptech.glide.request.transition.Transition<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class ViewPropertyTransition<R>  extends com.bumptech.glide.request.transition.Transition<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewPropertyTransition<any>>;
						public constructor(animator: com.bumptech.glide.request.transition.ViewPropertyTransition.Animator);
						public transition(current: any, adapter: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
					}
					export module ViewPropertyTransition {
						export class Animator extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewPropertyTransition.Animator>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.transition.ViewPropertyTransition$Animator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								animate(param0: android.view.View): void;
							});
							public constructor();
							public animate(param0: android.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class ViewTransition<R>  extends com.bumptech.glide.request.transition.Transition<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewTransition<any>>;
						public transition(current: any, adapter: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
					}
					export module ViewTransition {
						export class ViewTransitionAnimationFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewTransition.ViewTransitionAnimationFactory>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.transition.ViewTransition$ViewTransitionAnimationFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								build(param0: android.content.Context): android.view.animation.Animation;
							});
							public constructor();
							public build(param0: android.content.Context): android.view.animation.Animation;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class AndroidResourceSignature extends java.lang.Object implements com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.signature.AndroidResourceSignature>;
					public equals(param0: any): boolean;
					public static obtain(context: android.content.Context): com.bumptech.glide.load.Key;
					public equals(obj: any): boolean;
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class ApplicationVersionSignature extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.signature.ApplicationVersionSignature>;
					public static obtain(context: android.content.Context): com.bumptech.glide.load.Key;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class EmptySignature extends java.lang.Object implements com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.signature.EmptySignature>;
					public equals(param0: any): boolean;
					public toString(): string;
					public equals(obj: any): boolean;
					public static obtain(): com.bumptech.glide.signature.EmptySignature;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class MediaStoreSignature extends java.lang.Object implements com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.signature.MediaStoreSignature>;
					public constructor(mimeType: string, dateModified: number, param2: number);
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class ObjectKey extends java.lang.Object implements com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.signature.ObjectKey>;
					public equals(param0: any): boolean;
					public toString(): string;
					public equals(obj: any): boolean;
					public constructor(object: any);
					public equals(o: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(messageDigest: java.security.MessageDigest): void;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ByteBufferUtil extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.ByteBufferUtil>;
					public static toBytes(byteBuffer: java.nio.ByteBuffer): number[];
					public static toStream(buffer: java.nio.ByteBuffer): java.io.InputStream;
					public static fromStream(stream: java.io.InputStream): java.nio.ByteBuffer;
					public static toStream(byteBuffer: java.nio.ByteBuffer, os: java.io.OutputStream): void;
					public static fromFile(file: java.io.File): java.nio.ByteBuffer;
					public static rewind(buffer: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static toFile(buffer: java.nio.ByteBuffer, file: java.io.File): void;
				}
				export module ByteBufferUtil {
					export class ByteBufferStream extends java.io.InputStream {
						public static class: java.lang.Class<com.bumptech.glide.util.ByteBufferUtil.ByteBufferStream>;
						public read(): number;
						public skip(byteCount: number): number;
						public mark(readlimit: number): void;
						public read(buffer: number[], byteOffset: number, byteCount: number): number;
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public mark(readLimit: number): void;
						public markSupported(): boolean;
						public read(b: number[]): number;
						public reset(): void;
						public available(): number;
						public skip(n: number): number;
					}
					export class SafeArray extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.util.ByteBufferUtil.SafeArray>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class CachedHashCodeArrayMap<K, V>  extends androidx.collection.ArrayMap<any,any> {
					public static class: java.lang.Class<com.bumptech.glide.util.CachedHashCodeArrayMap<any,any>>;
					public replace(param0: any, param1: any): any;
					public removeAt(index: number): any;
					public isEmpty(): boolean;
					public setValueAt(index: number, value: any): any;
					public forEach(action: any /* any<any,any>*/): void;
					public size(): number;
					public put(param0: any, param1: any): any;
					public putAll(simpleArrayMap: androidx.collection.SimpleArrayMap<any,any>): void;
					public putAll(param0: androidx.collection.SimpleArrayMap<any,any>): void;
					public getOrDefault(param0: any, param1: any): any;
					public remove(key: any, value: any): boolean;
					public putAll(param0: java.util.Map<any,any>): void;
					public replace(param0: any, param1: any, param2: any): boolean;
					public containsValue(param0: any): boolean;
					public remove(param0: any): any;
					public getOrDefault(key: any, defaultValue: any): any;
					public putIfAbsent(key: any, value: any): any;
					public constructor();
					public keySet(): java.util.Set<any>;
					public clear(): void;
					public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
					public hashCode(): number;
					public putIfAbsent(param0: any, param1: any): any;
					public replace(key: any, oldValue: any, newValue: any): boolean;
					public remove(param0: any, param1: any): boolean;
					public replaceAll(function: any /* any<any,any,any>*/): void;
					public constructor(param0: number);
					public setValueAt(param0: number, param1: any): any;
					public constructor(param0: androidx.collection.SimpleArrayMap);
					public values(): java.util.Collection<any>;
					public replace(key: any, value: any): any;
					public equals(param0: any): boolean;
					public containsKey(param0: any): boolean;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public put(key: any, value: any): any;
					public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
					public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
					public removeAt(param0: number): any;
					public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ContentLengthInputStream extends java.io.FilterInputStream {
					public static class: java.lang.Class<com.bumptech.glide.util.ContentLengthInputStream>;
					public available(): number;
					public read(): number;
					public read(b: number[], off: number, len: number): number;
					public read(b: number[]): number;
					public read(buffer: number[], byteOffset: number, byteCount: number): number;
					public close(): void;
					public static obtain(other: java.io.InputStream, contentLength: number): java.io.InputStream;
					public static obtain(other: java.io.InputStream, contentLengthHeader: string): java.io.InputStream;
					public read(buffer: number[]): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ExceptionCatchingInputStream extends java.io.InputStream {
					public static class: java.lang.Class<com.bumptech.glide.util.ExceptionCatchingInputStream>;
					public read(): number;
					public reset(): void;
					public read(b: number[], off: number, len: number): number;
					public markSupported(): boolean;
					public release(): void;
					public mark(readLimit: number): void;
					public mark(readlimit: number): void;
					public read(buffer: number[]): number;
					public available(): number;
					public skip(byteCount: number): number;
					public getException(): java.io.IOException;
					public read(b: number[]): number;
					public read(buffer: number[], byteOffset: number, byteCount: number): number;
					public close(): void;
					public static obtain(toWrap: java.io.InputStream): com.bumptech.glide.util.ExceptionCatchingInputStream;
					public skip(n: number): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ExceptionPassthroughInputStream extends java.io.InputStream {
					public static class: java.lang.Class<com.bumptech.glide.util.ExceptionPassthroughInputStream>;
					public read(): number;
					public reset(): void;
					public read(b: number[], off: number, len: number): number;
					public markSupported(): boolean;
					public release(): void;
					public mark(readLimit: number): void;
					public mark(readlimit: number): void;
					public read(buffer: number[]): number;
					public available(): number;
					public skip(byteCount: number): number;
					public getException(): java.io.IOException;
					public read(b: number[]): number;
					public read(buffer: number[], byteOffset: number, byteCount: number): number;
					public close(): void;
					public static obtain(toWrap: java.io.InputStream): com.bumptech.glide.util.ExceptionPassthroughInputStream;
					public skip(n: number): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class Executors extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.Executors>;
					public static directExecutor(): java.util.concurrent.Executor;
					public static shutdownAndAwaitTermination(pool: java.util.concurrent.ExecutorService): void;
					public static mainThreadExecutor(): java.util.concurrent.Executor;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class FixedPreloadSizeProvider<T>  extends com.bumptech.glide.ListPreloader.PreloadSizeProvider<any> {
					public static class: java.lang.Class<com.bumptech.glide.util.FixedPreloadSizeProvider<any>>;
					public getPreloadSize(item: any, adapterPosition: number, itemPosition: number): number[];
					public getPreloadSize(param0: any, param1: number, param2: number): number[];
					public constructor(width: number, height: number);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class GlideSuppliers extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.GlideSuppliers>;
					public static memorize(supplier: com.bumptech.glide.util.GlideSuppliers.GlideSupplier<any>): com.bumptech.glide.util.GlideSuppliers.GlideSupplier<any>;
				}
				export module GlideSuppliers {
					export class GlideSupplier<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.util.GlideSuppliers.GlideSupplier<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.util.GlideSuppliers$GlideSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(): T;
						});
						public constructor();
						public get(): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class LogTime extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.LogTime>;
					public static getLogTime(): number;
					public static getElapsedMillis(logTime: number): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class LruCache<T, Y>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.LruCache<any,any>>;
					public put(key: T, item: Y): Y;
					public getCount(): number;
					public contains(key: T): boolean;
					public clearMemory(): void;
					public remove(key: T): Y;
					public onItemEvicted(key: T, item: Y): void;
					public get(key: T): Y;
					public trimToSize(size: number): void;
					public setSizeMultiplier(multiplier: number): void;
					public getCurrentSize(): number;
					public constructor(size: number);
					public getMaxSize(): number;
					public getSize(item: Y): number;
				}
				export module LruCache {
					export class Entry<Y>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.util.LruCache.Entry<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class MarkEnforcingInputStream extends java.io.FilterInputStream {
					public static class: java.lang.Class<com.bumptech.glide.util.MarkEnforcingInputStream>;
					public read(): number;
					public reset(): void;
					public read(b: number[], off: number, len: number): number;
					public mark(readLimit: number): void;
					public mark(readlimit: number): void;
					public available(): number;
					public skip(byteCount: number): number;
					public constructor(in: java.io.InputStream);
					public constructor();
					public read(b: number[]): number;
					public read(buffer: number[], byteOffset: number, byteCount: number): number;
					public close(): void;
					public skip(n: number): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class MultiClassKey extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.MultiClassKey>;
					public constructor(first: java.lang.Class<any>, second: java.lang.Class<any>, third: java.lang.Class<any>);
					public toString(): string;
					public equals(obj: any): boolean;
					public constructor();
					public set(first: java.lang.Class<any>, second: java.lang.Class<any>): void;
					public set(first: java.lang.Class<any>, second: java.lang.Class<any>, third: java.lang.Class<any>): void;
					public constructor(first: java.lang.Class<any>, second: java.lang.Class<any>);
					public equals(o: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class Preconditions extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.Preconditions>;
					public static checkArgument(expression: boolean, message: string): void;
					public static checkNotNull(arg: any): any;
					public static checkNotEmpty(collection: java.util.Collection<any>): java.util.Collection<any>;
					public static checkNotNull(arg: any, message: string): any;
					public static checkNotEmpty(string: string): string;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class Synthetic extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.bumptech.glide.util.Synthetic>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.util.Synthetic interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class Util extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.Util>;
					public static getBytesPerPixel(config: android.graphics.Bitmap.Config): number;
					public static bothModelsNullEquivalentOrEquals(a: any, b: any): boolean;
					public static sha256BytesToHex(bytes: number[]): string;
					public static getBitmapByteSize(width: number, height: number, config: android.graphics.Bitmap.Config): number;
					public static assertMainThread(): void;
					public static isOnBackgroundThread(): boolean;
					public static isValidDimensions(width: number, height: number): boolean;
					public static isOnMainThread(): boolean;
					public static createQueue(size: number): java.util.Queue<any>;
					public static hashCode(value: boolean): number;
					public static getSnapshot(other: java.util.Collection<any>): java.util.List<any>;
					public static hashCode(value: number, accumulator: number): number;
					public static hashCode(object: any, accumulator: number): number;
					public static isValidDimension(dimen: number): boolean;
					public static removeCallbacksOnUiThread(runnable: java.lang.Runnable): void;
					public static assertBackgroundThread(): void;
					public static bothNullOrEqual(a: any, b: any): boolean;
					public static postOnUiThread(runnable: java.lang.Runnable): void;
					public static hashCode(value: number): number;
					public hashCode(): number;
					/** @deprecated */
					public static getSize(bitmap: android.graphics.Bitmap): number;
					public static getBitmapByteSize(bitmap: android.graphics.Bitmap): number;
					public static hashCode(value: boolean, accumulator: number): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ViewPreloadSizeProvider<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.ViewPreloadSizeProvider<any>>;
					public onSizeReady(width: number, height: number): void;
					public getPreloadSize(param0: T, param1: number, param2: number): number[];
					public constructor();
					public setView(view: android.view.View): void;
					public onSizeReady(param0: number, param1: number): void;
					public getPreloadSize(item: T, adapterPosition: number, itemPosition: number): number[];
					public constructor(view: android.view.View);
				}
				export module ViewPreloadSizeProvider {
					export class SizeViewTarget extends com.bumptech.glide.request.target.CustomViewTarget<android.view.View,any> {
						public static class: java.lang.Class<com.bumptech.glide.util.ViewPreloadSizeProvider.SizeViewTarget>;
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(resource: any, transition: com.bumptech.glide.request.transition.Transition<any>): void;
						public setRequest(request: com.bumptech.glide.request.Request): void;
						public onResourceCleared(param0: android.graphics.drawable.Drawable): void;
						public removeCallback(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public onLoadStarted(placeholder: android.graphics.drawable.Drawable): void;
						public onLoadCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onLoadFailed(errorDrawable: android.graphics.drawable.Drawable): void;
						public onLoadFailed(param0: android.graphics.drawable.Drawable): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public getSize(cb: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onResourceCleared(placeholder: android.graphics.drawable.Drawable): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export module pool {
					export class FactoryPools extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools>;
						public static threadSafeList(): androidx.core.util.Pools.Pool;
						public static threadSafeList(size: number): androidx.core.util.Pools.Pool;
						public static simple(size: number, factory: com.bumptech.glide.util.pool.FactoryPools.Factory<any>): androidx.core.util.Pools.Pool;
						public static threadSafe(size: number, factory: com.bumptech.glide.util.pool.FactoryPools.Factory<any>): androidx.core.util.Pools.Pool;
					}
					export module FactoryPools {
						export class Factory<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools.Factory<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.util.pool.FactoryPools$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								create(): T;
							});
							public constructor();
							public create(): T;
						}
						export class FactoryPool<T>  extends androidx.core.util.Pools.Pool<any> {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools.FactoryPool<any>>;
							public acquire(): any;
							public release(param0: any): boolean;
							public release(instance: any): boolean;
						}
						export class Poolable extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools.Poolable>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.util.pool.FactoryPools$Poolable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
							});
							public constructor();
							public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
						}
						export class Resetter<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools.Resetter<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.util.pool.FactoryPools$Resetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								reset(param0: T): void;
							});
							public constructor();
							public reset(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export module pool {
					export class GlideTrace extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.util.pool.GlideTrace>;
						public static endSectionAsync(tag: string, cookie: number): void;
						public static beginSectionFormat(format: string, arg1: any, arg2: any, arg3: any): void;
						public static endSection(): void;
						public static beginSection(tag: string): void;
						public static beginSectionFormat(format: string, arg1: any, arg2: any): void;
						public static beginSectionAsync(tag: string): number;
						public static beginSectionFormat(format: string, arg1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export module pool {
					export abstract class StateVerifier extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.util.pool.StateVerifier>;
						public static newInstance(): com.bumptech.glide.util.pool.StateVerifier;
						public throwIfRecycled(): void;
					}
					export module StateVerifier {
						export class DebugStateVerifier extends com.bumptech.glide.util.pool.StateVerifier {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.StateVerifier.DebugStateVerifier>;
							public throwIfRecycled(): void;
						}
						export class DefaultStateVerifier extends com.bumptech.glide.util.pool.StateVerifier {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.StateVerifier.DefaultStateVerifier>;
							public setRecycled(isRecycled: boolean): void;
							public throwIfRecycled(): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.bumptech.glide.GenericTransitionOptions:1
//com.bumptech.glide.ListPreloader:1
//com.bumptech.glide.ListPreloader.PreloadModelProvider:1
//com.bumptech.glide.ListPreloader.PreloadSizeProvider:1
//com.bumptech.glide.ModelTypes:1
//com.bumptech.glide.RequestBuilder:1
//com.bumptech.glide.TransitionOptions:2
//com.bumptech.glide.load.Encoder:1
//com.bumptech.glide.load.MultiTransformation:1
//com.bumptech.glide.load.Option:1
//com.bumptech.glide.load.Option.CacheKeyUpdater:1
//com.bumptech.glide.load.ResourceDecoder:2
//com.bumptech.glide.load.ResourceEncoder:1
//com.bumptech.glide.load.Transformation:1
//com.bumptech.glide.load.data.AssetPathFetcher:1
//com.bumptech.glide.load.data.DataFetcher:1
//com.bumptech.glide.load.data.DataFetcher.DataCallback:1
//com.bumptech.glide.load.data.DataRewinder:1
//com.bumptech.glide.load.data.DataRewinder.Factory:1
//com.bumptech.glide.load.data.LocalUriFetcher:1
//com.bumptech.glide.load.engine.DataCacheWriter:1
//com.bumptech.glide.load.engine.DecodeHelper:1
//com.bumptech.glide.load.engine.DecodeJob:1
//com.bumptech.glide.load.engine.DecodeJob.Callback:1
//com.bumptech.glide.load.engine.DecodeJob.DecodeCallback:1
//com.bumptech.glide.load.engine.DecodeJob.DeferredEncodeManager:1
//com.bumptech.glide.load.engine.DecodePath:3
//com.bumptech.glide.load.engine.DecodePath.DecodeCallback:1
//com.bumptech.glide.load.engine.EngineJob:1
//com.bumptech.glide.load.engine.EngineResource:1
//com.bumptech.glide.load.engine.LoadPath:3
//com.bumptech.glide.load.engine.LockedResource:1
//com.bumptech.glide.load.engine.Resource:1
//com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface:1
//com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool:1
//com.bumptech.glide.load.engine.bitmap_recycle.GroupedLinkedMap:2
//com.bumptech.glide.load.engine.bitmap_recycle.GroupedLinkedMap.LinkedEntry:2
//com.bumptech.glide.load.engine.bitmap_recycle.PrettyPrintTreeMap:2
//com.bumptech.glide.load.model.AssetUriLoader:1
//com.bumptech.glide.load.model.AssetUriLoader.AssetFetcherFactory:1
//com.bumptech.glide.load.model.ByteArrayLoader:1
//com.bumptech.glide.load.model.ByteArrayLoader.Converter:1
//com.bumptech.glide.load.model.ByteArrayLoader.Fetcher:1
//com.bumptech.glide.load.model.DataUrlLoader:2
//com.bumptech.glide.load.model.DataUrlLoader.DataDecoder:1
//com.bumptech.glide.load.model.DataUrlLoader.DataUriFetcher:1
//com.bumptech.glide.load.model.DataUrlLoader.StreamFactory:1
//com.bumptech.glide.load.model.FileLoader:1
//com.bumptech.glide.load.model.FileLoader.Factory:1
//com.bumptech.glide.load.model.FileLoader.FileFetcher:1
//com.bumptech.glide.load.model.FileLoader.FileOpener:1
//com.bumptech.glide.load.model.ModelCache:2
//com.bumptech.glide.load.model.ModelCache.ModelKey:1
//com.bumptech.glide.load.model.ModelLoader:2
//com.bumptech.glide.load.model.ModelLoader.LoadData:1
//com.bumptech.glide.load.model.ModelLoaderFactory:2
//com.bumptech.glide.load.model.ModelLoaderRegistry.ModelLoaderCache.Entry:1
//com.bumptech.glide.load.model.MultiModelLoader:2
//com.bumptech.glide.load.model.MultiModelLoader.MultiFetcher:1
//com.bumptech.glide.load.model.MultiModelLoaderFactory.Entry:2
//com.bumptech.glide.load.model.ResourceLoader:1
//com.bumptech.glide.load.model.StringLoader:1
//com.bumptech.glide.load.model.UnitModelLoader:1
//com.bumptech.glide.load.model.UnitModelLoader.Factory:1
//com.bumptech.glide.load.model.UnitModelLoader.UnitFetcher:1
//com.bumptech.glide.load.model.UriLoader:1
//com.bumptech.glide.load.model.UriLoader.LocalUriFetcherFactory:1
//com.bumptech.glide.load.model.UrlUriLoader:1
//com.bumptech.glide.load.model.stream.BaseGlideUrlLoader:1
//com.bumptech.glide.load.model.stream.QMediaStoreUriLoader:1
//com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.Factory:1
//com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.QMediaStoreUriFetcher:1
//com.bumptech.glide.load.resource.SimpleResource:1
//com.bumptech.glide.load.resource.UnitTransformation:1
//com.bumptech.glide.load.resource.bitmap.BitmapDrawableDecoder:1
//com.bumptech.glide.load.resource.bitmap.VideoDecoder:1
//com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverInitializer:1
//com.bumptech.glide.load.resource.drawable.DrawableResource:1
//com.bumptech.glide.load.resource.transcode.ResourceTranscoder:2
//com.bumptech.glide.load.resource.transcode.TranscoderRegistry.Entry:2
//com.bumptech.glide.load.resource.transcode.UnitTranscoder:1
//com.bumptech.glide.provider.EncoderRegistry.Entry:1
//com.bumptech.glide.provider.ResourceDecoderRegistry.Entry:2
//com.bumptech.glide.provider.ResourceEncoderRegistry.Entry:1
//com.bumptech.glide.request.BaseRequestOptions:1
//com.bumptech.glide.request.ExperimentalRequestListener:1
//com.bumptech.glide.request.FutureTarget:1
//com.bumptech.glide.request.RequestFutureTarget:1
//com.bumptech.glide.request.RequestListener:1
//com.bumptech.glide.request.SingleRequest:1
//com.bumptech.glide.request.target.BaseTarget:1
//com.bumptech.glide.request.target.CustomTarget:1
//com.bumptech.glide.request.target.CustomViewTarget:2
//com.bumptech.glide.request.target.ImageViewTarget:1
//com.bumptech.glide.request.target.PreloadTarget:1
//com.bumptech.glide.request.target.SimpleTarget:1
//com.bumptech.glide.request.target.Target:1
//com.bumptech.glide.request.target.ThumbnailImageViewTarget:1
//com.bumptech.glide.request.target.ViewTarget:2
//com.bumptech.glide.request.transition.BitmapContainerTransitionFactory:1
//com.bumptech.glide.request.transition.NoTransition:1
//com.bumptech.glide.request.transition.NoTransition.NoAnimationFactory:1
//com.bumptech.glide.request.transition.Transition:1
//com.bumptech.glide.request.transition.TransitionFactory:1
//com.bumptech.glide.request.transition.ViewAnimationFactory:1
//com.bumptech.glide.request.transition.ViewPropertyAnimationFactory:1
//com.bumptech.glide.request.transition.ViewPropertyTransition:1
//com.bumptech.glide.request.transition.ViewTransition:1
//com.bumptech.glide.util.CachedHashCodeArrayMap:2
//com.bumptech.glide.util.FixedPreloadSizeProvider:1
//com.bumptech.glide.util.GlideSuppliers.GlideSupplier:1
//com.bumptech.glide.util.LruCache:2
//com.bumptech.glide.util.LruCache.Entry:1
//com.bumptech.glide.util.ViewPreloadSizeProvider:1
//com.bumptech.glide.util.pool.FactoryPools.Factory:1
//com.bumptech.glide.util.pool.FactoryPools.FactoryPool:1
//com.bumptech.glide.util.pool.FactoryPools.Resetter:1

