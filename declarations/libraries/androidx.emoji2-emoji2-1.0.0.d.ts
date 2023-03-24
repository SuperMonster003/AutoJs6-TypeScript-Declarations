declare module androidx {
	export module emoji2 {
		export module text {
			export class ConcurrencyHelpers extends java.lang.Object {
				public static class: java.lang.Class<androidx.emoji2.text.ConcurrencyHelpers>;
			}
			export module ConcurrencyHelpers {
				export class Handler28Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.ConcurrencyHelpers.Handler28Impl>;
					public static createAsync(looper: android.os.Looper): android.os.Handler;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module text {
			export class DefaultEmojiCompatConfig extends java.lang.Object {
				public static class: java.lang.Class<androidx.emoji2.text.DefaultEmojiCompatConfig>;
				public static create(context: android.content.Context): androidx.emoji2.text.FontRequestEmojiCompatConfig;
			}
			export module DefaultEmojiCompatConfig {
				export class DefaultEmojiCompatConfigFactory extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.DefaultEmojiCompatConfig.DefaultEmojiCompatConfigFactory>;
					public create(context: android.content.Context): androidx.emoji2.text.EmojiCompat.Config;
					public constructor(helper: androidx.emoji2.text.DefaultEmojiCompatConfig.DefaultEmojiCompatConfigHelper);
				}
				export class DefaultEmojiCompatConfigHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.DefaultEmojiCompatConfig.DefaultEmojiCompatConfigHelper>;
					public queryIntentContentProviders(packageManager: android.content.pm.PackageManager, intent: android.content.Intent, flags: number): java.util.List<android.content.pm.ResolveInfo>;
					public constructor();
					public getSigningSignatures(packageManager: android.content.pm.PackageManager, providerPackage: string): android.content.pm.Signature[];
					public getProviderInfo(resolveInfo: android.content.pm.ResolveInfo): android.content.pm.ProviderInfo;
				}
				export class DefaultEmojiCompatConfigHelper_API19 extends androidx.emoji2.text.DefaultEmojiCompatConfig.DefaultEmojiCompatConfigHelper {
					public static class: java.lang.Class<androidx.emoji2.text.DefaultEmojiCompatConfig.DefaultEmojiCompatConfigHelper_API19>;
					public queryIntentContentProviders(packageManager: android.content.pm.PackageManager, intent: android.content.Intent, flags: number): java.util.List<android.content.pm.ResolveInfo>;
					public constructor();
					public getProviderInfo(resolveInfo: android.content.pm.ResolveInfo): android.content.pm.ProviderInfo;
				}
				export class DefaultEmojiCompatConfigHelper_API28 extends androidx.emoji2.text.DefaultEmojiCompatConfig.DefaultEmojiCompatConfigHelper_API19 {
					public static class: java.lang.Class<androidx.emoji2.text.DefaultEmojiCompatConfig.DefaultEmojiCompatConfigHelper_API28>;
					public constructor();
					public getSigningSignatures(packageManager: android.content.pm.PackageManager, providerPackage: string): android.content.pm.Signature[];
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module text {
			export class EmojiCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.emoji2.text.EmojiCompat>;
				public static EDITOR_INFO_METAVERSION_KEY: string;
				public static EDITOR_INFO_REPLACE_ALL_KEY: string;
				public static LOAD_STATE_DEFAULT: number;
				public static LOAD_STATE_LOADING: number;
				public static LOAD_STATE_SUCCEEDED: number;
				public static LOAD_STATE_FAILED: number;
				public static REPLACE_STRATEGY_DEFAULT: number;
				public static REPLACE_STRATEGY_ALL: number;
				public static REPLACE_STRATEGY_NON_EXISTENT: number;
				public static LOAD_STRATEGY_DEFAULT: number;
				public static LOAD_STRATEGY_MANUAL: number;
				public getEmojiSpanIndicatorColor(): number;
				public hasEmojiGlyph(sequence: string, metadataVersion: number): boolean;
				public static handleOnKeyDown(editable: android.text.Editable, keyCode: number, event: android.view.KeyEvent): boolean;
				public process(charSequence: string): string;
				public getAssetSignature(): string;
				public static reset(config: androidx.emoji2.text.EmojiCompat.Config): androidx.emoji2.text.EmojiCompat;
				public static init(context: android.content.Context, defaultFactory: androidx.emoji2.text.DefaultEmojiCompatConfig.DefaultEmojiCompatConfigFactory): androidx.emoji2.text.EmojiCompat;
				public static handleDeleteSurroundingText(inputConnection: android.view.inputmethod.InputConnection, editable: android.text.Editable, beforeLength: number, afterLength: number, inCodePoints: boolean): boolean;
				public static init(context: android.content.Context): androidx.emoji2.text.EmojiCompat;
				public unregisterInitCallback(initCallback: androidx.emoji2.text.EmojiCompat.InitCallback): void;
				public getLoadState(): number;
				public hasEmojiGlyph(sequence: string): boolean;
				public process(charSequence: string, start: number, end: number, maxEmojiCount: number): string;
				public process(charSequence: string, start: number, end: number, maxEmojiCount: number, replaceStrategy: number): string;
				public static isConfigured(): boolean;
				public static reset(emojiCompat: androidx.emoji2.text.EmojiCompat): androidx.emoji2.text.EmojiCompat;
				public static get(): androidx.emoji2.text.EmojiCompat;
				public process(charSequence: string, start: number, end: number): string;
				public load(): void;
				public isEmojiSpanIndicatorEnabled(): boolean;
				public updateEditorInfo(outAttrs: android.view.inputmethod.EditorInfo): void;
				public registerInitCallback(initCallback: androidx.emoji2.text.EmojiCompat.InitCallback): void;
				public static init(config: androidx.emoji2.text.EmojiCompat.Config): androidx.emoji2.text.EmojiCompat;
				public static skipDefaultConfigurationLookup(shouldSkip: boolean): void;
			}
			export module EmojiCompat {
				export class CompatInternal extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompat.CompatInternal>;
				}
				export class CompatInternal19 extends androidx.emoji2.text.EmojiCompat.CompatInternal {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompat.CompatInternal19>;
				}
				export abstract class Config extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompat.Config>;
					public setReplaceAll(replaceAll: boolean): androidx.emoji2.text.EmojiCompat.Config;
					public setUseEmojiAsDefaultStyle(useEmojiAsDefaultStyle: boolean): androidx.emoji2.text.EmojiCompat.Config;
					public setUseEmojiAsDefaultStyle(useEmojiAsDefaultStyle: boolean, emojiAsDefaultStyleExceptions: java.util.List<java.lang.Integer>): androidx.emoji2.text.EmojiCompat.Config;
					public getMetadataRepoLoader(): androidx.emoji2.text.EmojiCompat.MetadataRepoLoader;
					public constructor(metadataLoader: androidx.emoji2.text.EmojiCompat.MetadataRepoLoader);
					public registerInitCallback(initCallback: androidx.emoji2.text.EmojiCompat.InitCallback): androidx.emoji2.text.EmojiCompat.Config;
					public setEmojiSpanIndicatorColor(color: number): androidx.emoji2.text.EmojiCompat.Config;
					public setMetadataLoadStrategy(strategy: number): androidx.emoji2.text.EmojiCompat.Config;
					public unregisterInitCallback(initCallback: androidx.emoji2.text.EmojiCompat.InitCallback): androidx.emoji2.text.EmojiCompat.Config;
					public setEmojiSpanIndicatorEnabled(emojiSpanIndicatorEnabled: boolean): androidx.emoji2.text.EmojiCompat.Config;
					public setGlyphChecker(glyphChecker: androidx.emoji2.text.EmojiCompat.GlyphChecker): androidx.emoji2.text.EmojiCompat.Config;
				}
				export class GlyphChecker extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompat.GlyphChecker>;
					/**
					 * Constructs a new instance of the androidx.emoji2.text.EmojiCompat$GlyphChecker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasGlyph(param0: string, param1: number, param2: number, param3: number): boolean;
					});
					public constructor();
					public hasGlyph(param0: string, param1: number, param2: number, param3: number): boolean;
				}
				export abstract class InitCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompat.InitCallback>;
					public onInitialized(): void;
					public onFailed(throwable: java.lang.Throwable): void;
					public constructor();
				}
				export class ListenerDispatcher extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompat.ListenerDispatcher>;
					public run(): void;
				}
				export class LoadStrategy extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompat.LoadStrategy>;
					/**
					 * Constructs a new instance of the androidx.emoji2.text.EmojiCompat$LoadStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class MetadataRepoLoader extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompat.MetadataRepoLoader>;
					/**
					 * Constructs a new instance of the androidx.emoji2.text.EmojiCompat$MetadataRepoLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						load(param0: androidx.emoji2.text.EmojiCompat.MetadataRepoLoaderCallback): void;
					});
					public constructor();
					public load(param0: androidx.emoji2.text.EmojiCompat.MetadataRepoLoaderCallback): void;
				}
				export abstract class MetadataRepoLoaderCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompat.MetadataRepoLoaderCallback>;
					public onLoaded(param0: androidx.emoji2.text.MetadataRepo): void;
					public constructor();
					public onFailed(param0: java.lang.Throwable): void;
				}
				export class ReplaceStrategy extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompat.ReplaceStrategy>;
					/**
					 * Constructs a new instance of the androidx.emoji2.text.EmojiCompat$ReplaceStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class SpanFactory extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompat.SpanFactory>;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module text {
			export class EmojiCompatInitializer extends androidx.startup.Initializer<java.lang.Boolean> {
				public static class: java.lang.Class<androidx.emoji2.text.EmojiCompatInitializer>;
				public create(context: android.content.Context): java.lang.Boolean;
				public dependencies(): java.util.List<java.lang.Class<any>>;
				public create(param0: android.content.Context): any;
				public constructor();
			}
			export module EmojiCompatInitializer {
				export class BackgroundDefaultConfig extends androidx.emoji2.text.EmojiCompat.Config {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompatInitializer.BackgroundDefaultConfig>;
					public constructor(context: android.content.Context);
					public constructor(metadataLoader: androidx.emoji2.text.EmojiCompat.MetadataRepoLoader);
				}
				export class BackgroundDefaultLoader extends java.lang.Object implements androidx.emoji2.text.EmojiCompat.MetadataRepoLoader {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompatInitializer.BackgroundDefaultLoader>;
					public load(param0: androidx.emoji2.text.EmojiCompat.MetadataRepoLoaderCallback): void;
					public load(loaderCallback: androidx.emoji2.text.EmojiCompat.MetadataRepoLoaderCallback): void;
				}
				export class LoadEmojiCompatRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiCompatInitializer.LoadEmojiCompatRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module text {
			export class EmojiDefaults extends java.lang.Object {
				public static class: java.lang.Class<androidx.emoji2.text.EmojiDefaults>;
				public static MAX_EMOJI_COUNT: number;
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module text {
			export class EmojiMetadata extends java.lang.Object {
				public static class: java.lang.Class<androidx.emoji2.text.EmojiMetadata>;
				public static HAS_GLYPH_UNKNOWN: number;
				public static HAS_GLYPH_ABSENT: number;
				public static HAS_GLYPH_EXISTS: number;
				public getHeight(): number;
				public getCodepointsLength(): number;
				public setHasGlyph(hasGlyph: boolean): void;
				public getId(): number;
				public draw(canvas: android.graphics.Canvas, x: number, y: number, paint: android.graphics.Paint): void;
				public getSdkAdded(): number;
				public getHasGlyph(): number;
				public toString(): string;
				public getCompatAdded(): number;
				public resetHasGlyphCache(): void;
				public getTypeface(): android.graphics.Typeface;
				public getWidth(): number;
				public isDefaultEmoji(): boolean;
				public getCodepointAt(index: number): number;
			}
			export module EmojiMetadata {
				export class HasGlyph extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiMetadata.HasGlyph>;
					/**
					 * Constructs a new instance of the androidx.emoji2.text.EmojiMetadata$HasGlyph interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module androidx {
	export module emoji2 {
		export module text {
			export class EmojiProcessor extends java.lang.Object {
				public static class: java.lang.Class<androidx.emoji2.text.EmojiProcessor>;
			}
			export module EmojiProcessor {
				export class CodepointIndexFinder extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiProcessor.CodepointIndexFinder>;
				}
				export class DefaultGlyphChecker extends java.lang.Object implements androidx.emoji2.text.EmojiCompat.GlyphChecker {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiProcessor.DefaultGlyphChecker>;
					public hasGlyph(charSequence: string, start: number, end: number, sdkAdded: number): boolean;
					public hasGlyph(param0: string, param1: number, param2: number, param3: number): boolean;
				}
				export class ProcessorSm extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.EmojiProcessor.ProcessorSm>;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module text {
			export abstract class EmojiSpan extends android.text.style.ReplacementSpan {
				public static class: java.lang.Class<androidx.emoji2.text.EmojiSpan>;
				public getSize(paint: android.graphics.Paint, text: string, start: number, end: number, fm: android.graphics.Paint.FontMetricsInt): number;
				public getHeight(): number;
				public getSize(param0: android.graphics.Paint, param1: string, param2: number, param3: number, param4: android.graphics.Paint.FontMetricsInt): number;
				public getId(): number;
				public getMetadata(): androidx.emoji2.text.EmojiMetadata;
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module text {
			export class FontRequestEmojiCompatConfig extends androidx.emoji2.text.EmojiCompat.Config {
				public static class: java.lang.Class<androidx.emoji2.text.FontRequestEmojiCompatConfig>;
				public setLoadingExecutor(executor: java.util.concurrent.Executor): androidx.emoji2.text.FontRequestEmojiCompatConfig;
				/** @deprecated */
				public setHandler(handler: android.os.Handler): androidx.emoji2.text.FontRequestEmojiCompatConfig;
				public setRetryPolicy(policy: androidx.emoji2.text.FontRequestEmojiCompatConfig.RetryPolicy): androidx.emoji2.text.FontRequestEmojiCompatConfig;
				public constructor(context: android.content.Context, request: androidx.core.provider.FontRequest, fontProviderHelper: androidx.emoji2.text.FontRequestEmojiCompatConfig.FontProviderHelper);
				public constructor(metadataLoader: androidx.emoji2.text.EmojiCompat.MetadataRepoLoader);
				public constructor(context: android.content.Context, request: androidx.core.provider.FontRequest);
			}
			export module FontRequestEmojiCompatConfig {
				export class ExponentialBackoffRetryPolicy extends androidx.emoji2.text.FontRequestEmojiCompatConfig.RetryPolicy {
					public static class: java.lang.Class<androidx.emoji2.text.FontRequestEmojiCompatConfig.ExponentialBackoffRetryPolicy>;
					public constructor();
					public constructor(totalMs: number);
					public getRetryDelay(): number;
				}
				export class FontProviderHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.FontRequestEmojiCompatConfig.FontProviderHelper>;
					public buildTypeface(context: android.content.Context, font: androidx.core.provider.FontsContractCompat.FontInfo): android.graphics.Typeface;
					public constructor();
					public fetchFonts(context: android.content.Context, request: androidx.core.provider.FontRequest): androidx.core.provider.FontsContractCompat.FontFamilyResult;
					public registerObserver(context: android.content.Context, uri: android.net.Uri, observer: android.database.ContentObserver): void;
					public unregisterObserver(context: android.content.Context, observer: android.database.ContentObserver): void;
				}
				export class FontRequestMetadataLoader extends java.lang.Object implements androidx.emoji2.text.EmojiCompat.MetadataRepoLoader {
					public static class: java.lang.Class<androidx.emoji2.text.FontRequestEmojiCompatConfig.FontRequestMetadataLoader>;
					public setRetryPolicy(policy: androidx.emoji2.text.FontRequestEmojiCompatConfig.RetryPolicy): void;
					public setExecutor(executor: java.util.concurrent.Executor): void;
					public load(param0: androidx.emoji2.text.EmojiCompat.MetadataRepoLoaderCallback): void;
					public load(loaderCallback: androidx.emoji2.text.EmojiCompat.MetadataRepoLoaderCallback): void;
				}
				export abstract class RetryPolicy extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.FontRequestEmojiCompatConfig.RetryPolicy>;
					public constructor();
					public getRetryDelay(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module text {
			export class MetadataListReader extends java.lang.Object {
				public static class: java.lang.Class<androidx.emoji2.text.MetadataListReader>;
			}
			export module MetadataListReader {
				export class ByteBufferReader extends java.lang.Object implements androidx.emoji2.text.MetadataListReader.OpenTypeReader {
					public static class: java.lang.Class<androidx.emoji2.text.MetadataListReader.ByteBufferReader>;
					public skip(numOfBytes: number): void;
					public skip(param0: number): void;
					public readUnsignedShort(): number;
					public readTag(): number;
					public getPosition(): number;
					public readUnsignedInt(): number;
				}
				export class InputStreamOpenTypeReader extends java.lang.Object implements androidx.emoji2.text.MetadataListReader.OpenTypeReader {
					public static class: java.lang.Class<androidx.emoji2.text.MetadataListReader.InputStreamOpenTypeReader>;
					public skip(numOfBytes: number): void;
					public skip(param0: number): void;
					public readUnsignedShort(): number;
					public readTag(): number;
					public getPosition(): number;
					public readUnsignedInt(): number;
				}
				export class OffsetInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.MetadataListReader.OffsetInfo>;
				}
				export class OpenTypeReader extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.MetadataListReader.OpenTypeReader>;
					/**
					 * Constructs a new instance of the androidx.emoji2.text.MetadataListReader$OpenTypeReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						readUnsignedShort(): number;
						readUnsignedInt(): number;
						readTag(): number;
						skip(param0: number): void;
						getPosition(): number;
					});
					public constructor();
					public static UINT32_BYTE_COUNT: number;
					public static UINT16_BYTE_COUNT: number;
					public skip(param0: number): void;
					public readUnsignedShort(): number;
					public readTag(): number;
					public getPosition(): number;
					public readUnsignedInt(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module text {
			export class MetadataRepo extends java.lang.Object {
				public static class: java.lang.Class<androidx.emoji2.text.MetadataRepo>;
				public static create(typeface: android.graphics.Typeface, byteBuffer: java.nio.ByteBuffer): androidx.emoji2.text.MetadataRepo;
				public static create(assetManager: android.content.res.AssetManager, assetPath: string): androidx.emoji2.text.MetadataRepo;
				public getMetadataList(): androidx.emoji2.text.flatbuffer.MetadataList;
				public static create(typeface: android.graphics.Typeface, inputStream: java.io.InputStream): androidx.emoji2.text.MetadataRepo;
				public static create(typeface: android.graphics.Typeface): androidx.emoji2.text.MetadataRepo;
				public getEmojiCharArray(): string[];
			}
			export module MetadataRepo {
				export class Node extends java.lang.Object {
					public static class: java.lang.Class<androidx.emoji2.text.MetadataRepo.Node>;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module text {
			export class SpannableBuilder extends android.text.SpannableStringBuilder {
				public static class: java.lang.Class<androidx.emoji2.text.SpannableBuilder>;
				public static create(clazz: java.lang.Class<any>, text: string): androidx.emoji2.text.SpannableBuilder;
				public insert(where: number, tb: string, start: number, end: number): android.text.SpannableStringBuilder;
				public getChars(param0: number, param1: number, param2: string[], param3: number): void;
				public beginBatchEdit(): void;
				public codePoints(): java.util.stream.IntStream;
				public removeSpan(param0: any): void;
				public removeSpan(what: any): void;
				public insert(param0: number, param1: string, param2: number, param3: number): android.text.Editable;
				public nextSpanTransition(start: number, limit: number, type: java.lang.Class<any>): number;
				public charAt(param0: number): string;
				public setFilters(param0: android.text.InputFilter[]): void;
				public insert(where: number, tb: string): android.text.SpannableStringBuilder;
				public getSpanEnd(tag: any): number;
				public append(param0: string): android.text.Editable;
				public setFilters(filters: android.text.InputFilter[]): void;
				public endBatchEdit(): void;
				public clear(): void;
				public getFilters(): android.text.InputFilter[];
				public setSpan(what: any, start: number, end: number, flags: number): void;
				public getSpanEnd(what: any): number;
				public append(text: string, what: any, flags: number): android.text.SpannableStringBuilder;
				public getChars(start: number, end: number, dest: string[], destoff: number): void;
				public replace(param0: number, param1: number, param2: string, param3: number, param4: number): android.text.Editable;
				public insert(param0: number, param1: string): android.text.Editable;
				public getSpanStart(tag: any): number;
				public delete(param0: number, param1: number): android.text.Editable;
				public replace(start: number, end: number, tb: string): android.text.SpannableStringBuilder;
				public nextSpanTransition(start: number, limit: number, kind: java.lang.Class<any>): number;
				public length(): number;
				public charAt(where: number): string;
				public subSequence(start: number, end: number): string;
				public setSpan(param0: any, param1: number, param2: number, param3: number): void;
				public replace(start: number, end: number, tb: string, tbstart: number, tbend: number): android.text.SpannableStringBuilder;
				public chars(): java.util.stream.IntStream;
				public getSpans(queryStart: number, queryEnd: number, kind: java.lang.Class<any>): any[];
				public toString(): string;
				public append(text: string): android.text.SpannableStringBuilder;
				public getSpanStart(what: any): number;
				public getSpanFlags(tag: any): number;
				public subSequence(param0: number, param1: number): string;
				public replace(param0: number, param1: number, param2: string): android.text.Editable;
				public getSpanFlags(what: any): number;
				public append(text: string, start: number, end: number): android.text.SpannableStringBuilder;
				public append(param0: string, param1: number, param2: number): android.text.Editable;
				public delete(start: number, end: number): android.text.SpannableStringBuilder;
				public append(param0: string): java.lang.Appendable;
				public clearSpans(): void;
				public append(param0: string, param1: number, param2: number): java.lang.Appendable;
			}
			export module SpannableBuilder {
				export class WatcherWrapper extends java.lang.Object implements android.text.TextWatcher, android.text.SpanWatcher {
					public static class: java.lang.Class<androidx.emoji2.text.SpannableBuilder.WatcherWrapper>;
					public onSpanChanged(param0: android.text.Spannable, param1: any, param2: number, param3: number, param4: number, param5: number): void;
					public onTextChanged(s: string, start: number, before: number, count: number): void;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public onSpanAdded(param0: android.text.Spannable, param1: any, param2: number, param3: number): void;
					public onSpanAdded(text: android.text.Spannable, what: any, start: number, end: number): void;
					public onSpanChanged(text: android.text.Spannable, what: any, ostart: number, oend: number, nstart: number, nend: number): void;
					public beforeTextChanged(s: string, start: number, count: number, after: number): void;
					public afterTextChanged(s: android.text.Editable): void;
					public onSpanRemoved(param0: android.text.Spannable, param1: any, param2: number, param3: number): void;
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public afterTextChanged(param0: android.text.Editable): void;
					public onSpanRemoved(text: android.text.Spannable, what: any, start: number, end: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module emoji2 {
		export module text {
			export class TypefaceEmojiSpan extends androidx.emoji2.text.EmojiSpan {
				public static class: java.lang.Class<androidx.emoji2.text.TypefaceEmojiSpan>;
				public draw(param0: android.graphics.Canvas, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: android.graphics.Paint): void;
				public constructor(metadata: androidx.emoji2.text.EmojiMetadata);
				public draw(canvas: android.graphics.Canvas, text: string, start: number, end: number, x: number, top: number, y: number, bottom: number, paint: android.graphics.Paint): void;
				public constructor();
			}
		}
	}
}

//Generics information:

