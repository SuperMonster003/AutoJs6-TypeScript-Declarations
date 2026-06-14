/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module io {
	export module noties {
		export module markwon {
			export abstract class AbstractMarkwonPlugin extends java.lang.Object implements io.noties.markwon.MarkwonPlugin {
				public static class: java.lang.Class<io.noties.markwon.AbstractMarkwonPlugin>;
				public afterRender(node: org.commonmark.node.Node, visitor: io.noties.markwon.MarkwonVisitor): void;
				public configureVisitor(builder: io.noties.markwon.MarkwonVisitor.Builder): void;
				public configure(registry: io.noties.markwon.MarkwonPlugin.Registry): void;
				public configureSpansFactory(param0: io.noties.markwon.MarkwonSpansFactory.Builder): void;
				public configureSpansFactory(builder: io.noties.markwon.MarkwonSpansFactory.Builder): void;
				public processMarkdown(markdown: string): string;
				public configureParser(param0: org.commonmark.parser.Parser.Builder): void;
				public configureConfiguration(builder: io.noties.markwon.MarkwonConfiguration.Builder): void;
				public beforeRender(node: org.commonmark.node.Node): void;
				public configureConfiguration(param0: io.noties.markwon.MarkwonConfiguration.Builder): void;
				public afterSetText(param0: android.widget.TextView): void;
				public constructor();
				public configureParser(builder: org.commonmark.parser.Parser.Builder): void;
				public configureVisitor(param0: io.noties.markwon.MarkwonVisitor.Builder): void;
				public afterRender(param0: org.commonmark.node.Node, param1: io.noties.markwon.MarkwonVisitor): void;
				public processMarkdown(param0: string): string;
				public configure(param0: io.noties.markwon.MarkwonPlugin.Registry): void;
				public configureTheme(param0: io.noties.markwon.core.MarkwonTheme.Builder): void;
				public beforeRender(param0: org.commonmark.node.Node): void;
				public beforeSetText(param0: android.widget.TextView, param1: android.text.Spanned): void;
				public configureTheme(builder: io.noties.markwon.core.MarkwonTheme.Builder): void;
				public beforeSetText(textView: android.widget.TextView, markdown: android.text.Spanned): void;
				public afterSetText(textView: android.widget.TextView): void;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class BlockHandlerDef extends java.lang.Object implements io.noties.markwon.MarkwonVisitor.BlockHandler {
				public static class: java.lang.Class<io.noties.markwon.BlockHandlerDef>;
				public blockEnd(visitor: io.noties.markwon.MarkwonVisitor, node: org.commonmark.node.Node): void;
				public blockEnd(param0: io.noties.markwon.MarkwonVisitor, param1: org.commonmark.node.Node): void;
				public blockStart(param0: io.noties.markwon.MarkwonVisitor, param1: org.commonmark.node.Node): void;
				public blockStart(visitor: io.noties.markwon.MarkwonVisitor, node: org.commonmark.node.Node): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class LinkResolver extends java.lang.Object {
				public static class: java.lang.Class<io.noties.markwon.LinkResolver>;
				/**
				 * Constructs a new instance of the io.noties.markwon.LinkResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					resolve(param0: android.view.View, param1: string): void;
				});
				public constructor();
				public resolve(param0: android.view.View, param1: string): void;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class LinkResolverDef extends java.lang.Object implements io.noties.markwon.LinkResolver {
				public static class: java.lang.Class<io.noties.markwon.LinkResolverDef>;
				public resolve(view: android.view.View, link: string): void;
				public resolve(param0: android.view.View, param1: string): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export abstract class Markwon extends java.lang.Object {
				public static class: java.lang.Class<io.noties.markwon.Markwon>;
				public parse(param0: string): org.commonmark.node.Node;
				public render(param0: org.commonmark.node.Node): android.text.Spanned;
				public setParsedMarkdown(param0: android.widget.TextView, param1: android.text.Spanned): void;
				public static builder(context: android.content.Context): io.noties.markwon.Markwon.Builder;
				public constructor();
				public toMarkdown(param0: string): android.text.Spanned;
				public getPlugin(param0: java.lang.Class<any>): io.noties.markwon.MarkwonPlugin;
				public static create(context: android.content.Context): io.noties.markwon.Markwon;
				public static builderNoCore(context: android.content.Context): io.noties.markwon.Markwon.Builder;
				public hasPlugin(param0: java.lang.Class<any>): boolean;
				public configuration(): io.noties.markwon.MarkwonConfiguration;
				public setMarkdown(param0: android.widget.TextView, param1: string): void;
				public getPlugins(): java.util.List<any>;
				public requirePlugin(param0: java.lang.Class<any>): io.noties.markwon.MarkwonPlugin;
			}
			export module Markwon {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.Markwon.Builder>;
					/**
					 * Constructs a new instance of the io.noties.markwon.Markwon$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						bufferType(param0: android.widget.TextView.BufferType): io.noties.markwon.Markwon.Builder;
						textSetter(param0: io.noties.markwon.Markwon.TextSetter): io.noties.markwon.Markwon.Builder;
						usePlugin(param0: io.noties.markwon.MarkwonPlugin): io.noties.markwon.Markwon.Builder;
						usePlugins(param0: java.lang.Iterable<any>): io.noties.markwon.Markwon.Builder;
						fallbackToRawInputWhenEmpty(param0: boolean): io.noties.markwon.Markwon.Builder;
						build(): io.noties.markwon.Markwon;
					});
					public constructor();
					public usePlugins(param0: java.lang.Iterable<any>): io.noties.markwon.Markwon.Builder;
					public textSetter(param0: io.noties.markwon.Markwon.TextSetter): io.noties.markwon.Markwon.Builder;
					public usePlugin(param0: io.noties.markwon.MarkwonPlugin): io.noties.markwon.Markwon.Builder;
					public fallbackToRawInputWhenEmpty(param0: boolean): io.noties.markwon.Markwon.Builder;
					public build(): io.noties.markwon.Markwon;
					public bufferType(param0: android.widget.TextView.BufferType): io.noties.markwon.Markwon.Builder;
				}
				export class TextSetter extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.Markwon.TextSetter>;
					/**
					 * Constructs a new instance of the io.noties.markwon.Markwon$TextSetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setText(param0: android.widget.TextView, param1: android.text.Spanned, param2: android.widget.TextView.BufferType, param3: java.lang.Runnable): void;
					});
					public constructor();
					public setText(param0: android.widget.TextView, param1: android.text.Spanned, param2: android.widget.TextView.BufferType, param3: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class MarkwonBuilderImpl extends java.lang.Object implements io.noties.markwon.Markwon.Builder {
				public static class: java.lang.Class<io.noties.markwon.MarkwonBuilderImpl>;
				public fallbackToRawInputWhenEmpty(param0: boolean): io.noties.markwon.Markwon.Builder;
				public textSetter(param0: io.noties.markwon.Markwon.TextSetter): io.noties.markwon.Markwon.Builder;
				public bufferType(bufferType: android.widget.TextView.BufferType): io.noties.markwon.Markwon.Builder;
				public usePlugins(plugins: java.lang.Iterable<any>): io.noties.markwon.Markwon.Builder;
				public build(): io.noties.markwon.Markwon;
				public usePlugin(param0: io.noties.markwon.MarkwonPlugin): io.noties.markwon.Markwon.Builder;
				public usePlugin(plugin: io.noties.markwon.MarkwonPlugin): io.noties.markwon.Markwon.Builder;
				public bufferType(param0: android.widget.TextView.BufferType): io.noties.markwon.Markwon.Builder;
				public usePlugins(param0: java.lang.Iterable<any>): io.noties.markwon.Markwon.Builder;
				public textSetter(textSetter: io.noties.markwon.Markwon.TextSetter): io.noties.markwon.Markwon.Builder;
				public fallbackToRawInputWhenEmpty(fallbackToRawInputWhenEmpty: boolean): io.noties.markwon.Markwon.Builder;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class MarkwonConfiguration extends java.lang.Object {
				public static class: java.lang.Class<io.noties.markwon.MarkwonConfiguration>;
				public static builder(): io.noties.markwon.MarkwonConfiguration.Builder;
				public theme(): io.noties.markwon.core.MarkwonTheme;
				public linkResolver(): io.noties.markwon.LinkResolver;
				public asyncDrawableLoader(): io.noties.markwon.image.AsyncDrawableLoader;
				public syntaxHighlight(): io.noties.markwon.syntax.SyntaxHighlight;
				public imageDestinationProcessor(): io.noties.markwon.image.destination.ImageDestinationProcessor;
				public imageSizeResolver(): io.noties.markwon.image.ImageSizeResolver;
				public spansFactory(): io.noties.markwon.MarkwonSpansFactory;
			}
			export module MarkwonConfiguration {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.MarkwonConfiguration.Builder>;
					public syntaxHighlight(syntaxHighlight: io.noties.markwon.syntax.SyntaxHighlight): io.noties.markwon.MarkwonConfiguration.Builder;
					public asyncDrawableLoader(asyncDrawableLoader: io.noties.markwon.image.AsyncDrawableLoader): io.noties.markwon.MarkwonConfiguration.Builder;
					public imageSizeResolver(imageSizeResolver: io.noties.markwon.image.ImageSizeResolver): io.noties.markwon.MarkwonConfiguration.Builder;
					public imageDestinationProcessor(imageDestinationProcessor: io.noties.markwon.image.destination.ImageDestinationProcessor): io.noties.markwon.MarkwonConfiguration.Builder;
					public linkResolver(linkResolver: io.noties.markwon.LinkResolver): io.noties.markwon.MarkwonConfiguration.Builder;
					public build(theme: io.noties.markwon.core.MarkwonTheme, spansFactory: io.noties.markwon.MarkwonSpansFactory): io.noties.markwon.MarkwonConfiguration;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class MarkwonImpl extends io.noties.markwon.Markwon {
				public static class: java.lang.Class<io.noties.markwon.MarkwonImpl>;
				public parse(param0: string): org.commonmark.node.Node;
				public render(param0: org.commonmark.node.Node): android.text.Spanned;
				public requirePlugin(type: java.lang.Class<any>): io.noties.markwon.MarkwonPlugin;
				public getPlugin(type: java.lang.Class<any>): io.noties.markwon.MarkwonPlugin;
				public render(node: org.commonmark.node.Node): android.text.Spanned;
				public setMarkdown(textView: android.widget.TextView, markdown: string): void;
				public setParsedMarkdown(param0: android.widget.TextView, param1: android.text.Spanned): void;
				public setParsedMarkdown(textView: android.widget.TextView, markdown: android.text.Spanned): void;
				public toMarkdown(param0: string): android.text.Spanned;
				public hasPlugin(type: java.lang.Class<any>): boolean;
				public getPlugin(param0: java.lang.Class<any>): io.noties.markwon.MarkwonPlugin;
				public parse(input: string): org.commonmark.node.Node;
				public hasPlugin(param0: java.lang.Class<any>): boolean;
				public toMarkdown(input: string): android.text.Spanned;
				public configuration(): io.noties.markwon.MarkwonConfiguration;
				public setMarkdown(param0: android.widget.TextView, param1: string): void;
				public getPlugins(): java.util.List<any>;
				public requirePlugin(param0: java.lang.Class<any>): io.noties.markwon.MarkwonPlugin;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class MarkwonPlugin extends java.lang.Object {
				public static class: java.lang.Class<io.noties.markwon.MarkwonPlugin>;
				/**
				 * Constructs a new instance of the io.noties.markwon.MarkwonPlugin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					configure(param0: io.noties.markwon.MarkwonPlugin.Registry): void;
					configureParser(param0: org.commonmark.parser.Parser.Builder): void;
					configureTheme(param0: io.noties.markwon.core.MarkwonTheme.Builder): void;
					configureConfiguration(param0: io.noties.markwon.MarkwonConfiguration.Builder): void;
					configureVisitor(param0: io.noties.markwon.MarkwonVisitor.Builder): void;
					configureSpansFactory(param0: io.noties.markwon.MarkwonSpansFactory.Builder): void;
					processMarkdown(param0: string): string;
					beforeRender(param0: org.commonmark.node.Node): void;
					afterRender(param0: org.commonmark.node.Node, param1: io.noties.markwon.MarkwonVisitor): void;
					beforeSetText(param0: android.widget.TextView, param1: android.text.Spanned): void;
					afterSetText(param0: android.widget.TextView): void;
				});
				public constructor();
				public processMarkdown(param0: string): string;
				public configure(param0: io.noties.markwon.MarkwonPlugin.Registry): void;
				public configureSpansFactory(param0: io.noties.markwon.MarkwonSpansFactory.Builder): void;
				public configureTheme(param0: io.noties.markwon.core.MarkwonTheme.Builder): void;
				public beforeRender(param0: org.commonmark.node.Node): void;
				public beforeSetText(param0: android.widget.TextView, param1: android.text.Spanned): void;
				public configureParser(param0: org.commonmark.parser.Parser.Builder): void;
				public configureConfiguration(param0: io.noties.markwon.MarkwonConfiguration.Builder): void;
				public afterSetText(param0: android.widget.TextView): void;
				public configureVisitor(param0: io.noties.markwon.MarkwonVisitor.Builder): void;
				public afterRender(param0: org.commonmark.node.Node, param1: io.noties.markwon.MarkwonVisitor): void;
			}
			export module MarkwonPlugin {
				export class Action<P>  extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.MarkwonPlugin.Action<any>>;
					/**
					 * Constructs a new instance of the io.noties.markwon.MarkwonPlugin$Action interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: P): void;
					});
					public constructor();
					public apply(param0: P): void;
				}
				export class Registry extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.MarkwonPlugin.Registry>;
					/**
					 * Constructs a new instance of the io.noties.markwon.MarkwonPlugin$Registry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						require(param0: java.lang.Class<any>): io.noties.markwon.MarkwonPlugin;
						require(param0: java.lang.Class<any>, param1: io.noties.markwon.MarkwonPlugin.Action<any>): void;
					});
					public constructor();
					public require(param0: java.lang.Class<any>): io.noties.markwon.MarkwonPlugin;
					public require(param0: java.lang.Class<any>, param1: io.noties.markwon.MarkwonPlugin.Action<any>): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export abstract class MarkwonReducer extends java.lang.Object {
				public static class: java.lang.Class<io.noties.markwon.MarkwonReducer>;
				public static directChildren(): io.noties.markwon.MarkwonReducer;
				public reduce(param0: org.commonmark.node.Node): java.util.List<org.commonmark.node.Node>;
				public constructor();
			}
			export module MarkwonReducer {
				export class DirectChildren extends io.noties.markwon.MarkwonReducer {
					public static class: java.lang.Class<io.noties.markwon.MarkwonReducer.DirectChildren>;
					public reduce(param0: org.commonmark.node.Node): java.util.List<org.commonmark.node.Node>;
					public reduce(root: org.commonmark.node.Node): java.util.List<org.commonmark.node.Node>;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class MarkwonSpansFactory extends java.lang.Object {
				public static class: java.lang.Class<io.noties.markwon.MarkwonSpansFactory>;
				/**
				 * Constructs a new instance of the io.noties.markwon.MarkwonSpansFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(param0: java.lang.Class<any>): io.noties.markwon.SpanFactory;
					require(param0: java.lang.Class<any>): io.noties.markwon.SpanFactory;
				});
				public constructor();
				public require(param0: java.lang.Class<any>): io.noties.markwon.SpanFactory;
				public get(param0: java.lang.Class<any>): io.noties.markwon.SpanFactory;
			}
			export module MarkwonSpansFactory {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.MarkwonSpansFactory.Builder>;
					/**
					 * Constructs a new instance of the io.noties.markwon.MarkwonSpansFactory$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setFactory(param0: java.lang.Class<any>, param1: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
						addFactory(param0: java.lang.Class<any>, param1: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
						appendFactory(param0: java.lang.Class<any>, param1: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
						prependFactory(param0: java.lang.Class<any>, param1: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
						getFactory(param0: java.lang.Class<any>): io.noties.markwon.SpanFactory;
						requireFactory(param0: java.lang.Class<any>): io.noties.markwon.SpanFactory;
						build(): io.noties.markwon.MarkwonSpansFactory;
					});
					public constructor();
					public setFactory(param0: java.lang.Class<any>, param1: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
					public appendFactory(param0: java.lang.Class<any>, param1: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
					public requireFactory(param0: java.lang.Class<any>): io.noties.markwon.SpanFactory;
					public build(): io.noties.markwon.MarkwonSpansFactory;
					public getFactory(param0: java.lang.Class<any>): io.noties.markwon.SpanFactory;
					/** @deprecated */
					public addFactory(param0: java.lang.Class<any>, param1: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
					public prependFactory(param0: java.lang.Class<any>, param1: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class MarkwonSpansFactoryImpl extends java.lang.Object implements io.noties.markwon.MarkwonSpansFactory {
				public static class: java.lang.Class<io.noties.markwon.MarkwonSpansFactoryImpl>;
				public require(node: java.lang.Class<any>): io.noties.markwon.SpanFactory;
				public require(param0: java.lang.Class<any>): io.noties.markwon.SpanFactory;
				public get(node: java.lang.Class<any>): io.noties.markwon.SpanFactory;
				public get(param0: java.lang.Class<any>): io.noties.markwon.SpanFactory;
			}
			export module MarkwonSpansFactoryImpl {
				export class BuilderImpl extends java.lang.Object implements io.noties.markwon.MarkwonSpansFactory.Builder {
					public static class: java.lang.Class<io.noties.markwon.MarkwonSpansFactoryImpl.BuilderImpl>;
					public requireFactory(node: java.lang.Class<any>): io.noties.markwon.SpanFactory;
					public setFactory(node: java.lang.Class<any>, factory: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
					public prependFactory(node: java.lang.Class<any>, factory: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
					/** @deprecated */
					public addFactory(param0: java.lang.Class<any>, param1: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
					public prependFactory(param0: java.lang.Class<any>, param1: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
					public getFactory(node: java.lang.Class<any>): io.noties.markwon.SpanFactory;
					public setFactory(param0: java.lang.Class<any>, param1: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
					public appendFactory(param0: java.lang.Class<any>, param1: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
					/** @deprecated */
					public addFactory(node: java.lang.Class<any>, factory: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
					public requireFactory(param0: java.lang.Class<any>): io.noties.markwon.SpanFactory;
					public build(): io.noties.markwon.MarkwonSpansFactory;
					public getFactory(param0: java.lang.Class<any>): io.noties.markwon.SpanFactory;
					public appendFactory(node: java.lang.Class<any>, factory: io.noties.markwon.SpanFactory): io.noties.markwon.MarkwonSpansFactory.Builder;
				}
				export class CompositeSpanFactory extends java.lang.Object implements io.noties.markwon.SpanFactory {
					public static class: java.lang.Class<io.noties.markwon.MarkwonSpansFactoryImpl.CompositeSpanFactory>;
					public getSpans(configuration: io.noties.markwon.MarkwonConfiguration, props: io.noties.markwon.RenderProps): any;
					public getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class MarkwonVisitor extends java.lang.Object implements org.commonmark.node.Visitor {
				public static class: java.lang.Class<io.noties.markwon.MarkwonVisitor>;
				/**
				 * Constructs a new instance of the io.noties.markwon.MarkwonVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					configuration(): io.noties.markwon.MarkwonConfiguration;
					renderProps(): io.noties.markwon.RenderProps;
					builder(): io.noties.markwon.SpannableBuilder;
					visitChildren(param0: org.commonmark.node.Node): void;
					hasNext(param0: org.commonmark.node.Node): boolean;
					ensureNewLine(): void;
					forceNewLine(): void;
					length(): number;
					clear(): void;
					setSpans(param0: number, param1: any): void;
					setSpansForNode(param0: org.commonmark.node.Node, param1: number): void;
					setSpansForNode(param0: java.lang.Class<any>, param1: number): void;
					setSpansForNodeOptional(param0: org.commonmark.node.Node, param1: number): void;
					setSpansForNodeOptional(param0: java.lang.Class<any>, param1: number): void;
					blockStart(param0: org.commonmark.node.Node): void;
					blockEnd(param0: org.commonmark.node.Node): void;
					visit(param0: org.commonmark.node.BlockQuote): void;
					visit(param0: org.commonmark.node.BulletList): void;
					visit(param0: org.commonmark.node.Code): void;
					visit(param0: org.commonmark.node.CustomBlock): void;
					visit(param0: org.commonmark.node.CustomNode): void;
					visit(param0: org.commonmark.node.Document): void;
					visit(param0: org.commonmark.node.Emphasis): void;
					visit(param0: org.commonmark.node.FencedCodeBlock): void;
					visit(param0: org.commonmark.node.HardLineBreak): void;
					visit(param0: org.commonmark.node.Heading): void;
					visit(param0: org.commonmark.node.HtmlBlock): void;
					visit(param0: org.commonmark.node.HtmlInline): void;
					visit(param0: org.commonmark.node.Image): void;
					visit(param0: org.commonmark.node.IndentedCodeBlock): void;
					visit(param0: org.commonmark.node.Link): void;
					visit(param0: org.commonmark.node.ListItem): void;
					visit(param0: org.commonmark.node.OrderedList): void;
					visit(param0: org.commonmark.node.Paragraph): void;
					visit(param0: org.commonmark.node.SoftLineBreak): void;
					visit(param0: org.commonmark.node.StrongEmphasis): void;
					visit(param0: org.commonmark.node.Text): void;
					visit(param0: org.commonmark.node.ThematicBreak): void;
				});
				public constructor();
				public setSpansForNodeOptional(param0: java.lang.Class<any>, param1: number): void;
				public blockEnd(param0: org.commonmark.node.Node): void;
				public visit(param0: org.commonmark.node.OrderedList): void;
				public renderProps(): io.noties.markwon.RenderProps;
				public visit(param0: org.commonmark.node.FencedCodeBlock): void;
				public blockStart(param0: org.commonmark.node.Node): void;
				public visit(param0: org.commonmark.node.CustomNode): void;
				public visit(param0: org.commonmark.node.HtmlInline): void;
				public visit(param0: org.commonmark.node.Document): void;
				public visit(param0: org.commonmark.node.SoftLineBreak): void;
				public visit(param0: org.commonmark.node.ThematicBreak): void;
				public visit(param0: org.commonmark.node.IndentedCodeBlock): void;
				public visit(param0: org.commonmark.node.Heading): void;
				public clear(): void;
				public visit(param0: org.commonmark.node.Image): void;
				public ensureNewLine(): void;
				public visit(param0: org.commonmark.node.ListItem): void;
				public visit(param0: org.commonmark.node.BlockQuote): void;
				public visit(param0: org.commonmark.node.HtmlBlock): void;
				public forceNewLine(): void;
				public setSpansForNode(param0: org.commonmark.node.Node, param1: number): void;
				public setSpansForNode(param0: java.lang.Class<any>, param1: number): void;
				public visit(param0: org.commonmark.node.Code): void;
				public visit(param0: org.commonmark.node.Emphasis): void;
				public visit(param0: org.commonmark.node.BulletList): void;
				public length(): number;
				public setSpansForNodeOptional(param0: org.commonmark.node.Node, param1: number): void;
				public visit(param0: org.commonmark.node.StrongEmphasis): void;
				public visit(param0: org.commonmark.node.Paragraph): void;
				public hasNext(param0: org.commonmark.node.Node): boolean;
				public visit(param0: org.commonmark.node.Link): void;
				public builder(): io.noties.markwon.SpannableBuilder;
				public setSpans(param0: number, param1: any): void;
				public visit(param0: org.commonmark.node.CustomBlock): void;
				public configuration(): io.noties.markwon.MarkwonConfiguration;
				public visit(param0: org.commonmark.node.HardLineBreak): void;
				public visit(param0: org.commonmark.node.Text): void;
				public visitChildren(param0: org.commonmark.node.Node): void;
			}
			export module MarkwonVisitor {
				export class BlockHandler extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.MarkwonVisitor.BlockHandler>;
					/**
					 * Constructs a new instance of the io.noties.markwon.MarkwonVisitor$BlockHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						blockStart(param0: io.noties.markwon.MarkwonVisitor, param1: org.commonmark.node.Node): void;
						blockEnd(param0: io.noties.markwon.MarkwonVisitor, param1: org.commonmark.node.Node): void;
					});
					public constructor();
					public blockStart(param0: io.noties.markwon.MarkwonVisitor, param1: org.commonmark.node.Node): void;
					public blockEnd(param0: io.noties.markwon.MarkwonVisitor, param1: org.commonmark.node.Node): void;
				}
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.MarkwonVisitor.Builder>;
					/**
					 * Constructs a new instance of the io.noties.markwon.MarkwonVisitor$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						on(param0: java.lang.Class<any>, param1: io.noties.markwon.MarkwonVisitor.NodeVisitor<any>): io.noties.markwon.MarkwonVisitor.Builder;
						blockHandler(param0: io.noties.markwon.MarkwonVisitor.BlockHandler): io.noties.markwon.MarkwonVisitor.Builder;
						build(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): io.noties.markwon.MarkwonVisitor;
					});
					public constructor();
					public on(param0: java.lang.Class<any>, param1: io.noties.markwon.MarkwonVisitor.NodeVisitor<any>): io.noties.markwon.MarkwonVisitor.Builder;
					public build(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): io.noties.markwon.MarkwonVisitor;
					public blockHandler(param0: io.noties.markwon.MarkwonVisitor.BlockHandler): io.noties.markwon.MarkwonVisitor.Builder;
				}
				export class NodeVisitor<N>  extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.MarkwonVisitor.NodeVisitor<any>>;
					/**
					 * Constructs a new instance of the io.noties.markwon.MarkwonVisitor$NodeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						visit(param0: io.noties.markwon.MarkwonVisitor, param1: N): void;
					});
					public constructor();
					public visit(param0: io.noties.markwon.MarkwonVisitor, param1: N): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export abstract class MarkwonVisitorFactory extends java.lang.Object {
				public static class: java.lang.Class<io.noties.markwon.MarkwonVisitorFactory>;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class MarkwonVisitorImpl extends java.lang.Object implements io.noties.markwon.MarkwonVisitor {
				public static class: java.lang.Class<io.noties.markwon.MarkwonVisitorImpl>;
				public visit(image: org.commonmark.node.Image): void;
				public blockEnd(node: org.commonmark.node.Node): void;
				public blockEnd(param0: org.commonmark.node.Node): void;
				public visit(listItem: org.commonmark.node.ListItem): void;
				public visit(param0: org.commonmark.node.OrderedList): void;
				public visit(param0: org.commonmark.node.FencedCodeBlock): void;
				public setSpansForNode(node: java.lang.Class<any>, start: number): void;
				public blockStart(param0: org.commonmark.node.Node): void;
				public visit(param0: org.commonmark.node.CustomNode): void;
				public visit(strongEmphasis: org.commonmark.node.StrongEmphasis): void;
				public setSpansForNode(node: org.commonmark.node.Node, start: number): void;
				public visit(param0: org.commonmark.node.SoftLineBreak): void;
				public setSpans(start: number, spans: any): void;
				public visit(param0: org.commonmark.node.Image): void;
				public ensureNewLine(): void;
				public visit(param0: org.commonmark.node.BlockQuote): void;
				public visit(heading: org.commonmark.node.Heading): void;
				public visit(orderedList: org.commonmark.node.OrderedList): void;
				public visit(document: org.commonmark.node.Document): void;
				public setSpansForNode(param0: org.commonmark.node.Node, param1: number): void;
				public visit(param0: org.commonmark.node.Code): void;
				public visit(text: org.commonmark.node.Text): void;
				public visitChildren(parent: org.commonmark.node.Node): void;
				public length(): number;
				public visit(bulletList: org.commonmark.node.BulletList): void;
				public visit(param0: org.commonmark.node.StrongEmphasis): void;
				public visit(softLineBreak: org.commonmark.node.SoftLineBreak): void;
				public visit(link: org.commonmark.node.Link): void;
				public visit(indentedCodeBlock: org.commonmark.node.IndentedCodeBlock): void;
				public visit(customNode: org.commonmark.node.CustomNode): void;
				public setSpansForNodeOptional(node: java.lang.Class<any>, start: number): void;
				public visitChildren(param0: org.commonmark.node.Node): void;
				public setSpansForNodeOptional(param0: java.lang.Class<any>, param1: number): void;
				public visit(linkReferenceDefinition: org.commonmark.node.LinkReferenceDefinition): void;
				public visit(customBlock: org.commonmark.node.CustomBlock): void;
				public renderProps(): io.noties.markwon.RenderProps;
				public visit(htmlInline: org.commonmark.node.HtmlInline): void;
				public visit(param0: org.commonmark.node.HtmlInline): void;
				public visit(param0: org.commonmark.node.Document): void;
				public visit(param0: org.commonmark.node.ThematicBreak): void;
				public visit(param0: org.commonmark.node.IndentedCodeBlock): void;
				public visit(thematicBreak: org.commonmark.node.ThematicBreak): void;
				public visit(param0: org.commonmark.node.Heading): void;
				public clear(): void;
				public visit(fencedCodeBlock: org.commonmark.node.FencedCodeBlock): void;
				public visit(param0: org.commonmark.node.ListItem): void;
				public visit(paragraph: org.commonmark.node.Paragraph): void;
				public visit(param0: org.commonmark.node.HtmlBlock): void;
				public forceNewLine(): void;
				public setSpansForNode(param0: java.lang.Class<any>, param1: number): void;
				public visit(emphasis: org.commonmark.node.Emphasis): void;
				public visit(param0: org.commonmark.node.Emphasis): void;
				public visit(param0: org.commonmark.node.BulletList): void;
				public setSpansForNodeOptional(param0: org.commonmark.node.Node, param1: number): void;
				public visit(blockQuote: org.commonmark.node.BlockQuote): void;
				public visit(param0: org.commonmark.node.Paragraph): void;
				public hasNext(param0: org.commonmark.node.Node): boolean;
				public visit(param0: org.commonmark.node.Link): void;
				public builder(): io.noties.markwon.SpannableBuilder;
				public visit(htmlBlock: org.commonmark.node.HtmlBlock): void;
				public setSpansForNodeOptional(node: org.commonmark.node.Node, start: number): void;
				public setSpans(param0: number, param1: any): void;
				public visit(param0: org.commonmark.node.CustomBlock): void;
				public visit(code: org.commonmark.node.Code): void;
				public visit(hardLineBreak: org.commonmark.node.HardLineBreak): void;
				public configuration(): io.noties.markwon.MarkwonConfiguration;
				public visit(param0: org.commonmark.node.HardLineBreak): void;
				public hasNext(node: org.commonmark.node.Node): boolean;
				public visit(param0: org.commonmark.node.Text): void;
				public blockStart(node: org.commonmark.node.Node): void;
			}
			export module MarkwonVisitorImpl {
				export class BuilderImpl extends java.lang.Object implements io.noties.markwon.MarkwonVisitor.Builder {
					public static class: java.lang.Class<io.noties.markwon.MarkwonVisitorImpl.BuilderImpl>;
					public on(param0: java.lang.Class<any>, param1: io.noties.markwon.MarkwonVisitor.NodeVisitor<any>): io.noties.markwon.MarkwonVisitor.Builder;
					public build(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): io.noties.markwon.MarkwonVisitor;
					public build(configuration: io.noties.markwon.MarkwonConfiguration, renderProps: io.noties.markwon.RenderProps): io.noties.markwon.MarkwonVisitor;
					public on(node: java.lang.Class<any>, nodeVisitor: io.noties.markwon.MarkwonVisitor.NodeVisitor<any>): io.noties.markwon.MarkwonVisitor.Builder;
					public blockHandler(blockHandler: io.noties.markwon.MarkwonVisitor.BlockHandler): io.noties.markwon.MarkwonVisitor.Builder;
					public blockHandler(param0: io.noties.markwon.MarkwonVisitor.BlockHandler): io.noties.markwon.MarkwonVisitor.Builder;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class PrecomputedFutureTextSetterCompat extends java.lang.Object implements io.noties.markwon.Markwon.TextSetter {
				public static class: java.lang.Class<io.noties.markwon.PrecomputedFutureTextSetterCompat>;
				public static create(): io.noties.markwon.PrecomputedFutureTextSetterCompat;
				public setText(param0: android.widget.TextView, param1: android.text.Spanned, param2: android.widget.TextView.BufferType, param3: java.lang.Runnable): void;
				public setText(textView: android.widget.TextView, markdown: android.text.Spanned, bufferType: android.widget.TextView.BufferType, onComplete: java.lang.Runnable): void;
				public static create(executor: java.util.concurrent.Executor): io.noties.markwon.PrecomputedFutureTextSetterCompat;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class PrecomputedTextSetterCompat extends java.lang.Object implements io.noties.markwon.Markwon.TextSetter {
				public static class: java.lang.Class<io.noties.markwon.PrecomputedTextSetterCompat>;
				public setText(param0: android.widget.TextView, param1: android.text.Spanned, param2: android.widget.TextView.BufferType, param3: java.lang.Runnable): void;
				public setText(textView: android.widget.TextView, markdown: android.text.Spanned, bufferType: android.widget.TextView.BufferType, onComplete: java.lang.Runnable): void;
				public static create(executor: java.util.concurrent.Executor): io.noties.markwon.PrecomputedTextSetterCompat;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class Prop<T>  extends java.lang.Object {
				public static class: java.lang.Class<io.noties.markwon.Prop<any>>;
				public name(): string;
				public equals(obj: any): boolean;
				public require(props: io.noties.markwon.RenderProps): T;
				public hashCode(): number;
				public static of(name: string): io.noties.markwon.Prop<any>;
				public set(props: io.noties.markwon.RenderProps, value: T): void;
				public equals(o: any): boolean;
				public clear(props: io.noties.markwon.RenderProps): void;
				public get(props: io.noties.markwon.RenderProps): T;
				public get(props: io.noties.markwon.RenderProps, defValue: T): T;
				public toString(): string;
				public static of(type: java.lang.Class<any>, name: string): io.noties.markwon.Prop<any>;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class RegistryImpl extends java.lang.Object implements io.noties.markwon.MarkwonPlugin.Registry {
				public static class: java.lang.Class<io.noties.markwon.RegistryImpl>;
				public require(plugin: java.lang.Class<any>): io.noties.markwon.MarkwonPlugin;
				public require(param0: java.lang.Class<any>, param1: io.noties.markwon.MarkwonPlugin.Action<any>): void;
				public require(param0: java.lang.Class<any>): io.noties.markwon.MarkwonPlugin;
				public require(plugin: java.lang.Class<any>, action: io.noties.markwon.MarkwonPlugin.Action<any>): void;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class RenderProps extends java.lang.Object {
				public static class: java.lang.Class<io.noties.markwon.RenderProps>;
				/**
				 * Constructs a new instance of the io.noties.markwon.RenderProps interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(param0: io.noties.markwon.Prop<any>): any;
					get(param0: io.noties.markwon.Prop<any>, param1: any): any;
					set(param0: io.noties.markwon.Prop<any>, param1: any): void;
					clear(param0: io.noties.markwon.Prop<any>): void;
					clearAll(): void;
				});
				public constructor();
				public clearAll(): void;
				public clear(param0: io.noties.markwon.Prop<any>): void;
				public get(param0: io.noties.markwon.Prop<any>, param1: any): any;
				public get(param0: io.noties.markwon.Prop<any>): any;
				public set(param0: io.noties.markwon.Prop<any>, param1: any): void;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class RenderPropsImpl extends java.lang.Object implements io.noties.markwon.RenderProps {
				public static class: java.lang.Class<io.noties.markwon.RenderPropsImpl>;
				public clearAll(): void;
				public get(prop: io.noties.markwon.Prop<any>): any;
				public set(prop: io.noties.markwon.Prop<any>, value: any): void;
				public clear(param0: io.noties.markwon.Prop<any>): void;
				public get(param0: io.noties.markwon.Prop<any>, param1: any): any;
				public get(prop: io.noties.markwon.Prop<any>, defValue: any): any;
				public clear(prop: io.noties.markwon.Prop<any>): void;
				public get(param0: io.noties.markwon.Prop<any>): any;
				public set(param0: io.noties.markwon.Prop<any>, param1: any): void;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class SoftBreakAddsNewLinePlugin extends io.noties.markwon.AbstractMarkwonPlugin {
				public static class: java.lang.Class<io.noties.markwon.SoftBreakAddsNewLinePlugin>;
				public afterRender(node: org.commonmark.node.Node, visitor: io.noties.markwon.MarkwonVisitor): void;
				public configureVisitor(builder: io.noties.markwon.MarkwonVisitor.Builder): void;
				public configure(registry: io.noties.markwon.MarkwonPlugin.Registry): void;
				public configureSpansFactory(param0: io.noties.markwon.MarkwonSpansFactory.Builder): void;
				public configureSpansFactory(builder: io.noties.markwon.MarkwonSpansFactory.Builder): void;
				public processMarkdown(markdown: string): string;
				public configureParser(param0: org.commonmark.parser.Parser.Builder): void;
				public configureConfiguration(builder: io.noties.markwon.MarkwonConfiguration.Builder): void;
				public configureConfiguration(param0: io.noties.markwon.MarkwonConfiguration.Builder): void;
				public beforeRender(node: org.commonmark.node.Node): void;
				public afterSetText(param0: android.widget.TextView): void;
				public constructor();
				public configureParser(builder: org.commonmark.parser.Parser.Builder): void;
				public configureVisitor(param0: io.noties.markwon.MarkwonVisitor.Builder): void;
				public afterRender(param0: org.commonmark.node.Node, param1: io.noties.markwon.MarkwonVisitor): void;
				public processMarkdown(param0: string): string;
				public configure(param0: io.noties.markwon.MarkwonPlugin.Registry): void;
				public configureTheme(param0: io.noties.markwon.core.MarkwonTheme.Builder): void;
				public beforeRender(param0: org.commonmark.node.Node): void;
				public beforeSetText(param0: android.widget.TextView, param1: android.text.Spanned): void;
				public static create(): io.noties.markwon.SoftBreakAddsNewLinePlugin;
				public configureTheme(builder: io.noties.markwon.core.MarkwonTheme.Builder): void;
				public beforeSetText(textView: android.widget.TextView, markdown: android.text.Spanned): void;
				public afterSetText(textView: android.widget.TextView): void;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class SpanFactory extends java.lang.Object {
				public static class: java.lang.Class<io.noties.markwon.SpanFactory>;
				/**
				 * Constructs a new instance of the io.noties.markwon.SpanFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
				});
				public constructor();
				public getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export class SpannableBuilder extends java.lang.Object implements java.lang.Appendable, java.lang.CharSequence {
				public static class: java.lang.Class<io.noties.markwon.SpannableBuilder>;
				public append(csq: string, start: number, end: number): io.noties.markwon.SpannableBuilder;
				public text(): string;
				public setSpan(span: any, start: number, end: number, flags: number): io.noties.markwon.SpannableBuilder;
				public codePoints(): java.util.stream.IntStream;
				public setSpan(span: any, start: number): io.noties.markwon.SpannableBuilder;
				public constructor(cs: string);
				public charAt(param0: number): string;
				public constructor();
				public append(c: string): io.noties.markwon.SpannableBuilder;
				public lastChar(): string;
				public getSpans(start: number, end: number): java.util.List<io.noties.markwon.SpannableBuilder.Span>;
				public append(cs: string, span: any): io.noties.markwon.SpannableBuilder;
				public clear(): void;
				public charAt(index: number): string;
				public append(cs: string, span: any, flags: number): io.noties.markwon.SpannableBuilder;
				public append(cs: string): io.noties.markwon.SpannableBuilder;
				public length(): number;
				public subSequence(start: number, end: number): string;
				public setSpan(span: any, start: number, end: number): io.noties.markwon.SpannableBuilder;
				public chars(): java.util.stream.IntStream;
				public toString(): string;
				public spannableStringBuilder(): android.text.SpannableStringBuilder;
				public append(text: string): io.noties.markwon.SpannableBuilder;
				public static setSpans(builder: io.noties.markwon.SpannableBuilder, spans: any, start: number, end: number): void;
				public subSequence(param0: number, param1: number): string;
				public removeFromEnd(start: number): string;
				public append(param0: string): java.lang.Appendable;
				public append(param0: string, param1: number, param2: number): java.lang.Appendable;
			}
			export module SpannableBuilder {
				export class Span extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.SpannableBuilder.Span>;
					public what: any;
					public start: number;
					public end: number;
					public flags: number;
				}
				export class SpannableStringBuilderReversed extends android.text.SpannableStringBuilder {
					public static class: java.lang.Class<io.noties.markwon.SpannableBuilder.SpannableStringBuilderReversed>;
					public getFilters(): android.text.InputFilter[];
					public delete(param0: number, param1: number): android.text.Editable;
					public append(param0: string): java.lang.Appendable;
					public append(text: string, what: any, flags: number): android.text.SpannableStringBuilder;
					public replace(start: number, end: number, tb: string, tbstart: number, tbend: number): android.text.SpannableStringBuilder;
					public removeSpan(what: any): void;
					public clearSpans(): void;
					public getChars(start: number, end: number, dest: string[], destoff: number): void;
					public append(text: string): android.text.SpannableStringBuilder;
					public delete(start: number, end: number): android.text.SpannableStringBuilder;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public removeSpan(param0: any): void;
					public codePoints(): java.util.stream.IntStream;
					public replace(param0: number, param1: number, param2: string, param3: number, param4: number): android.text.Editable;
					public toString(): string;
					public clear(): void;
					public setFilters(filters: android.text.InputFilter[]): void;
					public insert(param0: number, param1: string, param2: number, param3: number): android.text.Editable;
					public charAt(where: number): string;
					public setSpan(param0: any, param1: number, param2: number, param3: number): void;
					public insert(where: number, tb: string): android.text.SpannableStringBuilder;
					public chars(): java.util.stream.IntStream;
					public subSequence(param0: number, param1: number): string;
					public setFilters(param0: android.text.InputFilter[]): void;
					public subSequence(start: number, end: number): string;
					public insert(param0: number, param1: string): android.text.Editable;
					public length(): number;
					public append(param0: string, param1: number, param2: number): android.text.Editable;
					public charAt(param0: number): string;
					public append(text: string, start: number, end: number): android.text.SpannableStringBuilder;
					public replace(param0: number, param1: number, param2: string): android.text.Editable;
					public getChars(param0: number, param1: number, param2: string[], param3: number): void;
					public insert(where: number, tb: string, start: number, end: number): android.text.SpannableStringBuilder;
					public append(param0: string): android.text.Editable;
					public replace(start: number, end: number, tb: string): android.text.SpannableStringBuilder;
					public setSpan(what: any, start: number, end: number, flags: number): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export class CorePlugin extends io.noties.markwon.AbstractMarkwonPlugin {
					public static class: java.lang.Class<io.noties.markwon.core.CorePlugin>;
					public configureTheme(param0: io.noties.markwon.core.MarkwonTheme.Builder): void;
					public afterRender(node: org.commonmark.node.Node, visitor: io.noties.markwon.MarkwonVisitor): void;
					public addOnTextAddedListener(onTextAddedListener: io.noties.markwon.core.CorePlugin.OnTextAddedListener): io.noties.markwon.core.CorePlugin;
					public processMarkdown(markdown: string): string;
					public configureSpansFactory(param0: io.noties.markwon.MarkwonSpansFactory.Builder): void;
					public beforeSetText(textView: android.widget.TextView, markdown: android.text.Spanned): void;
					public configureParser(param0: org.commonmark.parser.Parser.Builder): void;
					public afterSetText(param0: android.widget.TextView): void;
					public configureConfiguration(builder: io.noties.markwon.MarkwonConfiguration.Builder): void;
					public configureParser(builder: org.commonmark.parser.Parser.Builder): void;
					public processMarkdown(param0: string): string;
					public configureConfiguration(param0: io.noties.markwon.MarkwonConfiguration.Builder): void;
					public constructor();
					public configure(param0: io.noties.markwon.MarkwonPlugin.Registry): void;
					public static enabledBlockTypes(): java.util.Set<java.lang.Class<any>>;
					public configureVisitor(builder: io.noties.markwon.MarkwonVisitor.Builder): void;
					public beforeRender(node: org.commonmark.node.Node): void;
					public afterRender(param0: org.commonmark.node.Node, param1: io.noties.markwon.MarkwonVisitor): void;
					public configure(registry: io.noties.markwon.MarkwonPlugin.Registry): void;
					public static create(): io.noties.markwon.core.CorePlugin;
					public configureTheme(builder: io.noties.markwon.core.MarkwonTheme.Builder): void;
					public beforeRender(param0: org.commonmark.node.Node): void;
					public hasExplicitMovementMethod(hasExplicitMovementMethod: boolean): io.noties.markwon.core.CorePlugin;
					public configureVisitor(param0: io.noties.markwon.MarkwonVisitor.Builder): void;
					public configureSpansFactory(builder: io.noties.markwon.MarkwonSpansFactory.Builder): void;
					public beforeSetText(param0: android.widget.TextView, param1: android.text.Spanned): void;
					public afterSetText(textView: android.widget.TextView): void;
				}
				export module CorePlugin {
					export class OnTextAddedListener extends java.lang.Object {
						public static class: java.lang.Class<io.noties.markwon.core.CorePlugin.OnTextAddedListener>;
						/**
						 * Constructs a new instance of the io.noties.markwon.core.CorePlugin$OnTextAddedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTextAdded(param0: io.noties.markwon.MarkwonVisitor, param1: string, param2: number): void;
						});
						public constructor();
						public onTextAdded(param0: io.noties.markwon.MarkwonVisitor, param1: string, param2: number): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export abstract class CoreProps extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.core.CoreProps>;
					public static LIST_ITEM_TYPE: io.noties.markwon.Prop<io.noties.markwon.core.CoreProps.ListItemType>;
					public static BULLET_LIST_ITEM_LEVEL: io.noties.markwon.Prop<java.lang.Integer>;
					public static ORDERED_LIST_ITEM_NUMBER: io.noties.markwon.Prop<java.lang.Integer>;
					public static HEADING_LEVEL: io.noties.markwon.Prop<java.lang.Integer>;
					public static LINK_DESTINATION: io.noties.markwon.Prop<string>;
					public static PARAGRAPH_IS_IN_TIGHT_LIST: io.noties.markwon.Prop<java.lang.Boolean>;
					public static CODE_BLOCK_INFO: io.noties.markwon.Prop<string>;
				}
				export module CoreProps {
					export class ListItemType {
						public static class: java.lang.Class<io.noties.markwon.core.CoreProps.ListItemType>;
						public static BULLET: io.noties.markwon.core.CoreProps.ListItemType;
						public static ORDERED: io.noties.markwon.core.CoreProps.ListItemType;
						public static values(): io.noties.markwon.core.CoreProps.ListItemType[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): io.noties.markwon.core.CoreProps.ListItemType;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export class MarkwonTheme extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.core.MarkwonTheme>;
					public static BLOCK_QUOTE_DEF_COLOR_ALPHA: number;
					public static CODE_DEF_BACKGROUND_COLOR_ALPHA: number;
					public static CODE_DEF_TEXT_SIZE_RATIO: number;
					public static HEADING_DEF_BREAK_COLOR_ALPHA: number;
					public static THEMATIC_BREAK_DEF_ALPHA: number;
					public linkColor: number;
					public isLinkedUnderlined: boolean;
					public blockMargin: number;
					public blockQuoteWidth: number;
					public blockQuoteColor: number;
					public listItemColor: number;
					public bulletListItemStrokeWidth: number;
					public bulletWidth: number;
					public codeTextColor: number;
					public codeBlockTextColor: number;
					public codeBackgroundColor: number;
					public codeBlockBackgroundColor: number;
					public codeBlockMargin: number;
					public codeTypeface: android.graphics.Typeface;
					public codeBlockTypeface: android.graphics.Typeface;
					public codeTextSize: number;
					public codeBlockTextSize: number;
					public headingBreakHeight: number;
					public headingBreakColor: number;
					public headingTypeface: android.graphics.Typeface;
					public headingTextSizeMultipliers: number[];
					public thematicBreakColor: number;
					public thematicBreakHeight: number;
					public applyHeadingTextStyle(paint: android.graphics.Paint, level: number): void;
					public getBlockMargin(): number;
					public getBulletWidth(height: number): number;
					public static emptyBuilder(): io.noties.markwon.core.MarkwonTheme.Builder;
					public applyLinkStyle(paint: android.text.TextPaint): void;
					public getCodeBackgroundColor(paint: android.graphics.Paint): number;
					public static builderWithDefaults(context: android.content.Context): io.noties.markwon.core.MarkwonTheme.Builder;
					public getBlockQuoteWidth(): number;
					public applyListItemStyle(paint: android.graphics.Paint): void;
					public applyCodeTextStyle(paint: android.graphics.Paint): void;
					public static create(context: android.content.Context): io.noties.markwon.core.MarkwonTheme;
					public getCodeBlockBackgroundColor(paint: android.graphics.Paint): number;
					public constructor(builder: io.noties.markwon.core.MarkwonTheme.Builder);
					public applyBlockQuoteStyle(paint: android.graphics.Paint): void;
					public applyLinkStyle(paint: android.graphics.Paint): void;
					public applyThematicBreakStyle(paint: android.graphics.Paint): void;
					public applyHeadingBreakStyle(paint: android.graphics.Paint): void;
					public applyCodeBlockTextStyle(paint: android.graphics.Paint): void;
					public getCodeBlockMargin(): number;
					public static builder(copyFrom: io.noties.markwon.core.MarkwonTheme): io.noties.markwon.core.MarkwonTheme.Builder;
				}
				export module MarkwonTheme {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<io.noties.markwon.core.MarkwonTheme.Builder>;
						public headingTypeface(headingTypeface: android.graphics.Typeface): io.noties.markwon.core.MarkwonTheme.Builder;
						public listItemColor(listItemColor: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public isLinkUnderlined(isLinkUnderlined: boolean): io.noties.markwon.core.MarkwonTheme.Builder;
						public blockQuoteWidth(blockQuoteWidth: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public codeBlockTypeface(typeface: android.graphics.Typeface): io.noties.markwon.core.MarkwonTheme.Builder;
						public codeBlockTextSize(codeTextSize: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public thematicBreakHeight(thematicBreakHeight: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public codeBackgroundColor(codeBackgroundColor: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public bulletListItemStrokeWidth(bulletListItemStrokeWidth: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public headingTextSizeMultipliers(headingTextSizeMultipliers: number[]): io.noties.markwon.core.MarkwonTheme.Builder;
						public codeBlockTextColor(codeBlockTextColor: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public thematicBreakColor(thematicBreakColor: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public headingBreakHeight(headingBreakHeight: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public bulletWidth(bulletWidth: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public codeTextSize(codeTextSize: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public blockQuoteColor(blockQuoteColor: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public linkColor(linkColor: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public codeBlockMargin(codeBlockMargin: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public headingBreakColor(headingBreakColor: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public codeBlockBackgroundColor(codeBlockBackgroundColor: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public build(): io.noties.markwon.core.MarkwonTheme;
						public codeTypeface(codeTypeface: android.graphics.Typeface): io.noties.markwon.core.MarkwonTheme.Builder;
						public blockMargin(blockMargin: number): io.noties.markwon.core.MarkwonTheme.Builder;
						public codeTextColor(codeTextColor: number): io.noties.markwon.core.MarkwonTheme.Builder;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export class SimpleBlockNodeVisitor extends io.noties.markwon.MarkwonVisitor.NodeVisitor<org.commonmark.node.Node> {
					public static class: java.lang.Class<io.noties.markwon.core.SimpleBlockNodeVisitor>;
					public visit(param0: io.noties.markwon.MarkwonVisitor, param1: any): void;
					public constructor();
					public visit(visitor: io.noties.markwon.MarkwonVisitor, node: org.commonmark.node.Node): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module factory {
					export class BlockQuoteSpanFactory extends java.lang.Object implements io.noties.markwon.SpanFactory {
						public static class: java.lang.Class<io.noties.markwon.core.factory.BlockQuoteSpanFactory>;
						public getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
						public constructor();
						public getSpans(configuration: io.noties.markwon.MarkwonConfiguration, props: io.noties.markwon.RenderProps): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module factory {
					export class CodeBlockSpanFactory extends java.lang.Object implements io.noties.markwon.SpanFactory {
						public static class: java.lang.Class<io.noties.markwon.core.factory.CodeBlockSpanFactory>;
						public getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
						public constructor();
						public getSpans(configuration: io.noties.markwon.MarkwonConfiguration, props: io.noties.markwon.RenderProps): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module factory {
					export class CodeSpanFactory extends java.lang.Object implements io.noties.markwon.SpanFactory {
						public static class: java.lang.Class<io.noties.markwon.core.factory.CodeSpanFactory>;
						public getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
						public constructor();
						public getSpans(configuration: io.noties.markwon.MarkwonConfiguration, props: io.noties.markwon.RenderProps): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module factory {
					export class EmphasisSpanFactory extends java.lang.Object implements io.noties.markwon.SpanFactory {
						public static class: java.lang.Class<io.noties.markwon.core.factory.EmphasisSpanFactory>;
						public getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
						public constructor();
						public getSpans(configuration: io.noties.markwon.MarkwonConfiguration, props: io.noties.markwon.RenderProps): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module factory {
					export class HeadingSpanFactory extends java.lang.Object implements io.noties.markwon.SpanFactory {
						public static class: java.lang.Class<io.noties.markwon.core.factory.HeadingSpanFactory>;
						public getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
						public constructor();
						public getSpans(configuration: io.noties.markwon.MarkwonConfiguration, props: io.noties.markwon.RenderProps): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module factory {
					export class LinkSpanFactory extends java.lang.Object implements io.noties.markwon.SpanFactory {
						public static class: java.lang.Class<io.noties.markwon.core.factory.LinkSpanFactory>;
						public getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
						public constructor();
						public getSpans(configuration: io.noties.markwon.MarkwonConfiguration, props: io.noties.markwon.RenderProps): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module factory {
					export class ListItemSpanFactory extends java.lang.Object implements io.noties.markwon.SpanFactory {
						public static class: java.lang.Class<io.noties.markwon.core.factory.ListItemSpanFactory>;
						public getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
						public constructor();
						public getSpans(configuration: io.noties.markwon.MarkwonConfiguration, props: io.noties.markwon.RenderProps): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module factory {
					export class StrongEmphasisSpanFactory extends java.lang.Object implements io.noties.markwon.SpanFactory {
						public static class: java.lang.Class<io.noties.markwon.core.factory.StrongEmphasisSpanFactory>;
						public getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
						public constructor();
						public getSpans(configuration: io.noties.markwon.MarkwonConfiguration, props: io.noties.markwon.RenderProps): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module factory {
					export class ThematicBreakSpanFactory extends java.lang.Object implements io.noties.markwon.SpanFactory {
						public static class: java.lang.Class<io.noties.markwon.core.factory.ThematicBreakSpanFactory>;
						public getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
						public constructor();
						public getSpans(configuration: io.noties.markwon.MarkwonConfiguration, props: io.noties.markwon.RenderProps): any;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class BlockQuoteSpan extends java.lang.Object implements android.text.style.LeadingMarginSpan {
						public static class: java.lang.Class<io.noties.markwon.core.spans.BlockQuoteSpan>;
						public getLeadingMargin(param0: boolean): number;
						public drawLeadingMargin(c: android.graphics.Canvas, p: android.graphics.Paint, x: number, dir: number, top: number, baseline: number, bottom: number, text: string, start: number, end: number, first: boolean, layout: android.text.Layout): void;
						public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;
						public getLeadingMargin(first: boolean): number;
						public constructor(theme: io.noties.markwon.core.MarkwonTheme);
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class BulletListItemSpan extends java.lang.Object implements android.text.style.LeadingMarginSpan {
						public static class: java.lang.Class<io.noties.markwon.core.spans.BulletListItemSpan>;
						public getLeadingMargin(param0: boolean): number;
						public drawLeadingMargin(c: android.graphics.Canvas, p: android.graphics.Paint, x: number, dir: number, top: number, baseline: number, bottom: number, text: string, start: number, end: number, first: boolean, layout: android.text.Layout): void;
						public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;
						public constructor(theme: io.noties.markwon.core.MarkwonTheme, level: number);
						public getLeadingMargin(first: boolean): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class CodeBlockSpan extends android.text.style.MetricAffectingSpan implements android.text.style.LeadingMarginSpan {
						public static class: java.lang.Class<io.noties.markwon.core.spans.CodeBlockSpan>;
						public getLeadingMargin(param0: boolean): number;
						public constructor();
						public updateMeasureState(p: android.text.TextPaint): void;
						public drawLeadingMargin(c: android.graphics.Canvas, p: android.graphics.Paint, x: number, dir: number, top: number, baseline: number, bottom: number, text: string, start: number, end: number, first: boolean, layout: android.text.Layout): void;
						public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;
						public updateMeasureState(param0: android.text.TextPaint): void;
						public updateDrawState(param0: android.text.TextPaint): void;
						public updateDrawState(ds: android.text.TextPaint): void;
						public getLeadingMargin(first: boolean): number;
						public constructor(theme: io.noties.markwon.core.MarkwonTheme);
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class CodeSpan extends android.text.style.MetricAffectingSpan {
						public static class: java.lang.Class<io.noties.markwon.core.spans.CodeSpan>;
						public constructor();
						public updateMeasureState(p: android.text.TextPaint): void;
						public updateMeasureState(param0: android.text.TextPaint): void;
						public updateDrawState(param0: android.text.TextPaint): void;
						public updateDrawState(ds: android.text.TextPaint): void;
						public constructor(theme: io.noties.markwon.core.MarkwonTheme);
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class CustomTypefaceSpan extends android.text.style.MetricAffectingSpan {
						public static class: java.lang.Class<io.noties.markwon.core.spans.CustomTypefaceSpan>;
						public constructor();
						public updateDrawState(paint: android.text.TextPaint): void;
						public updateMeasureState(param0: android.text.TextPaint): void;
						public updateMeasureState(paint: android.text.TextPaint): void;
						public updateDrawState(param0: android.text.TextPaint): void;
						public static create(typeface: android.graphics.Typeface): io.noties.markwon.core.spans.CustomTypefaceSpan;
						public static create(typeface: android.graphics.Typeface, mergeStyles: boolean): io.noties.markwon.core.spans.CustomTypefaceSpan;
						/** @deprecated */
						public constructor(typeface: android.graphics.Typeface);
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class EmphasisSpan extends android.text.style.MetricAffectingSpan {
						public static class: java.lang.Class<io.noties.markwon.core.spans.EmphasisSpan>;
						public constructor();
						public updateMeasureState(p: android.text.TextPaint): void;
						public updateDrawState(tp: android.text.TextPaint): void;
						public updateMeasureState(param0: android.text.TextPaint): void;
						public updateDrawState(param0: android.text.TextPaint): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class HeadingSpan extends android.text.style.MetricAffectingSpan implements android.text.style.LeadingMarginSpan {
						public static class: java.lang.Class<io.noties.markwon.core.spans.HeadingSpan>;
						public getLevel(): number;
						public getLeadingMargin(param0: boolean): number;
						public constructor();
						public updateMeasureState(p: android.text.TextPaint): void;
						public updateDrawState(tp: android.text.TextPaint): void;
						public drawLeadingMargin(c: android.graphics.Canvas, p: android.graphics.Paint, x: number, dir: number, top: number, baseline: number, bottom: number, text: string, start: number, end: number, first: boolean, layout: android.text.Layout): void;
						public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;
						public constructor(theme: io.noties.markwon.core.MarkwonTheme, level: number);
						public updateMeasureState(param0: android.text.TextPaint): void;
						public updateDrawState(param0: android.text.TextPaint): void;
						public getLeadingMargin(first: boolean): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class LastLineSpacingSpan extends java.lang.Object implements android.text.style.LineHeightSpan {
						public static class: java.lang.Class<io.noties.markwon.core.spans.LastLineSpacingSpan>;
						public constructor(spacing: number);
						public chooseHeight(param0: string, param1: number, param2: number, param3: number, param4: number, param5: android.graphics.Paint.FontMetricsInt): void;
						public chooseHeight(text: string, start: number, end: number, spanstartv: number, v: number, fm: android.graphics.Paint.FontMetricsInt): void;
						public static create(spacing: number): io.noties.markwon.core.spans.LastLineSpacingSpan;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class LinkSpan extends android.text.style.URLSpan {
						public static class: java.lang.Class<io.noties.markwon.core.spans.LinkSpan>;
						public constructor();
						public getLink(): string;
						public constructor(src: android.os.Parcel);
						public onClick(widget: android.view.View): void;
						public constructor(url: string);
						public getSpanTypeId(): number;
						public constructor(theme: io.noties.markwon.core.MarkwonTheme, link: string, resolver: io.noties.markwon.LinkResolver);
						public updateDrawState(ds: android.text.TextPaint): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export abstract class ObjectsPool extends java.lang.Object {
						public static class: java.lang.Class<io.noties.markwon.core.spans.ObjectsPool>;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class OrderedListItemSpan extends java.lang.Object implements android.text.style.LeadingMarginSpan {
						public static class: java.lang.Class<io.noties.markwon.core.spans.OrderedListItemSpan>;
						public getLeadingMargin(param0: boolean): number;
						public constructor(theme: io.noties.markwon.core.MarkwonTheme, number: string);
						public drawLeadingMargin(c: android.graphics.Canvas, p: android.graphics.Paint, x: number, dir: number, top: number, baseline: number, bottom: number, text: string, start: number, end: number, first: boolean, layout: android.text.Layout): void;
						public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;
						public getLeadingMargin(first: boolean): number;
						public static measure(textView: android.widget.TextView, text: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class StrongEmphasisSpan extends android.text.style.MetricAffectingSpan {
						public static class: java.lang.Class<io.noties.markwon.core.spans.StrongEmphasisSpan>;
						public constructor();
						public updateMeasureState(p: android.text.TextPaint): void;
						public updateDrawState(tp: android.text.TextPaint): void;
						public updateMeasureState(param0: android.text.TextPaint): void;
						public updateDrawState(param0: android.text.TextPaint): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class TextLayoutSpan extends java.lang.Object {
						public static class: java.lang.Class<io.noties.markwon.core.spans.TextLayoutSpan>;
						public static layoutOf(cs: string): android.text.Layout;
						public layout(): android.text.Layout;
						public static applyTo(spannable: android.text.Spannable, layout: android.text.Layout): void;
						public static layoutOf(spanned: android.text.Spanned): android.text.Layout;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class TextViewSpan extends java.lang.Object {
						public static class: java.lang.Class<io.noties.markwon.core.spans.TextViewSpan>;
						public static applyTo(spannable: android.text.Spannable, textView: android.widget.TextView): void;
						public static textViewOf(spanned: android.text.Spanned): android.widget.TextView;
						public textView(): android.widget.TextView;
						public constructor(textView: android.widget.TextView);
						public static textViewOf(cs: string): android.widget.TextView;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module core {
				export module spans {
					export class ThematicBreakSpan extends java.lang.Object implements android.text.style.LeadingMarginSpan {
						public static class: java.lang.Class<io.noties.markwon.core.spans.ThematicBreakSpan>;
						public getLeadingMargin(param0: boolean): number;
						public drawLeadingMargin(c: android.graphics.Canvas, p: android.graphics.Paint, x: number, dir: number, top: number, baseline: number, bottom: number, text: string, start: number, end: number, first: boolean, layout: android.text.Layout): void;
						public drawLeadingMargin(param0: android.graphics.Canvas, param1: android.graphics.Paint, param2: number, param3: number, param4: number, param5: number, param6: number, param7: string, param8: number, param9: number, param10: boolean, param11: android.text.Layout): void;
						public getLeadingMargin(first: boolean): number;
						public constructor(theme: io.noties.markwon.core.MarkwonTheme);
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export class AsyncDrawable extends android.graphics.drawable.Drawable {
					public static class: java.lang.Class<io.noties.markwon.image.AsyncDrawable>;
					public constructor(destination: string, loader: io.noties.markwon.image.AsyncDrawableLoader, imageSizeResolver: io.noties.markwon.image.ImageSizeResolver, imageSize: io.noties.markwon.image.ImageSize);
					public getLastKnownCanvasWidth(): number;
					public getIntrinsicWidth(): number;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public setResult(result: android.graphics.drawable.Drawable): void;
					public toString(): string;
					public initWithKnownDimensions(width: number, textSize: number): void;
					public constructor();
					public getDestination(): string;
					public draw(canvas: android.graphics.Canvas): void;
					public getLastKnowTextSize(): number;
					public setCallback2(cb: android.graphics.drawable.Drawable.Callback): void;
					public draw(param0: android.graphics.Canvas): void;
					public getOpacity(): number;
					public clearResult(): void;
					public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
					public getIntrinsicHeight(): number;
					public setAlpha(param0: number): void;
					public getResult(): android.graphics.drawable.Drawable;
					public hasKnownDimensions(): boolean;
					public setColorFilter(colorFilter: android.graphics.ColorFilter): void;
					public getImageSizeResolver(): io.noties.markwon.image.ImageSizeResolver;
					public hasResult(): boolean;
					public getImageSize(): io.noties.markwon.image.ImageSize;
					public setPlaceholderResult(placeholder: android.graphics.drawable.Drawable): void;
					public setAlpha(alpha: number): void;
					public isAttached(): boolean;
				}
				export module AsyncDrawable {
					export class WrappedCallback extends java.lang.Object implements android.graphics.drawable.Drawable.Callback {
						public static class: java.lang.Class<io.noties.markwon.image.AsyncDrawable.WrappedCallback>;
						public invalidateDrawable(who: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export abstract class AsyncDrawableLoader extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.image.AsyncDrawableLoader>;
					public cancel(param0: io.noties.markwon.image.AsyncDrawable): void;
					public load(param0: io.noties.markwon.image.AsyncDrawable): void;
					public constructor();
					public placeholder(param0: io.noties.markwon.image.AsyncDrawable): android.graphics.drawable.Drawable;
					public static noOp(): io.noties.markwon.image.AsyncDrawableLoader;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export class AsyncDrawableLoaderNoOp extends io.noties.markwon.image.AsyncDrawableLoader {
					public static class: java.lang.Class<io.noties.markwon.image.AsyncDrawableLoaderNoOp>;
					public cancel(param0: io.noties.markwon.image.AsyncDrawable): void;
					public load(param0: io.noties.markwon.image.AsyncDrawable): void;
					public cancel(drawable: io.noties.markwon.image.AsyncDrawable): void;
					public placeholder(drawable: io.noties.markwon.image.AsyncDrawable): android.graphics.drawable.Drawable;
					public load(drawable: io.noties.markwon.image.AsyncDrawable): void;
					public placeholder(param0: io.noties.markwon.image.AsyncDrawable): android.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export abstract class AsyncDrawableScheduler extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.image.AsyncDrawableScheduler>;
					public static unschedule(view: android.widget.TextView): void;
					public static schedule(textView: android.widget.TextView): void;
				}
				export module AsyncDrawableScheduler {
					export class DrawableCallbackImpl extends java.lang.Object implements android.graphics.drawable.Drawable.Callback {
						public static class: java.lang.Class<io.noties.markwon.image.AsyncDrawableScheduler.DrawableCallbackImpl>;
						public invalidateDrawable(who: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					}
					export module DrawableCallbackImpl {
						export class Invalidator extends java.lang.Object {
							public static class: java.lang.Class<io.noties.markwon.image.AsyncDrawableScheduler.DrawableCallbackImpl.Invalidator>;
							/**
							 * Constructs a new instance of the io.noties.markwon.image.AsyncDrawableScheduler$DrawableCallbackImpl$Invalidator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								invalidate(): void;
							});
							public constructor();
							public invalidate(): void;
						}
					}
					export class TextViewInvalidator extends java.lang.Object implements io.noties.markwon.image.AsyncDrawableScheduler.DrawableCallbackImpl.Invalidator, java.lang.Runnable {
						public static class: java.lang.Class<io.noties.markwon.image.AsyncDrawableScheduler.TextViewInvalidator>;
						public invalidate(): void;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export class AsyncDrawableSpan extends android.text.style.ReplacementSpan {
					public static class: java.lang.Class<io.noties.markwon.image.AsyncDrawableSpan>;
					public static ALIGN_BOTTOM: number;
					public static ALIGN_BASELINE: number;
					public static ALIGN_CENTER: number;
					public constructor();
					public constructor(theme: io.noties.markwon.core.MarkwonTheme, drawable: io.noties.markwon.image.AsyncDrawable, alignment: number, replacementTextIsLink: boolean);
					public getSize(paint: android.graphics.Paint, text: string, start: number, end: number, fm: android.graphics.Paint.FontMetricsInt): number;
					public draw(param0: android.graphics.Canvas, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: android.graphics.Paint): void;
					public getSize(param0: android.graphics.Paint, param1: string, param2: number, param3: number, param4: android.graphics.Paint.FontMetricsInt): number;
					public getDrawable(): io.noties.markwon.image.AsyncDrawable;
					public draw(canvas: android.graphics.Canvas, text: string, start: number, end: number, x: number, top: number, y: number, bottom: number, paint: android.graphics.Paint): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export abstract class DrawableUtils extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.image.DrawableUtils>;
					public static applyIntrinsicBoundsIfEmpty(drawable: android.graphics.drawable.Drawable): void;
					public static intrinsicBounds(drawable: android.graphics.drawable.Drawable): android.graphics.Rect;
					public static applyIntrinsicBounds(drawable: android.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export abstract class ImageProps extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.image.ImageProps>;
					public static DESTINATION: io.noties.markwon.Prop<string>;
					public static REPLACEMENT_TEXT_IS_LINK: io.noties.markwon.Prop<java.lang.Boolean>;
					public static IMAGE_SIZE: io.noties.markwon.Prop<io.noties.markwon.image.ImageSize>;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export class ImageSize extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.image.ImageSize>;
					public width: io.noties.markwon.image.ImageSize.Dimension;
					public height: io.noties.markwon.image.ImageSize.Dimension;
					public constructor(width: io.noties.markwon.image.ImageSize.Dimension, height: io.noties.markwon.image.ImageSize.Dimension);
					public toString(): string;
				}
				export module ImageSize {
					export class Dimension extends java.lang.Object {
						public static class: java.lang.Class<io.noties.markwon.image.ImageSize.Dimension>;
						public value: number;
						public unit: string;
						public constructor(value: number, unit: string);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export abstract class ImageSizeResolver extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.image.ImageSizeResolver>;
					public constructor();
					public resolveImageSize(param0: io.noties.markwon.image.AsyncDrawable): android.graphics.Rect;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export class ImageSizeResolverDef extends io.noties.markwon.image.ImageSizeResolver {
					public static class: java.lang.Class<io.noties.markwon.image.ImageSizeResolverDef>;
					public static UNIT_PERCENT: string;
					public static UNIT_EM: string;
					public constructor();
					public resolveImageSize(param0: io.noties.markwon.image.AsyncDrawable): android.graphics.Rect;
					public resolveImageSize(drawable: io.noties.markwon.image.AsyncDrawable): android.graphics.Rect;
					public resolveImageSize(imageSize: io.noties.markwon.image.ImageSize, imageBounds: android.graphics.Rect, canvasWidth: number, textSize: number): android.graphics.Rect;
					public resolveAbsolute(dimension: io.noties.markwon.image.ImageSize.Dimension, original: number, textSize: number): number;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export class ImageSpanFactory extends java.lang.Object implements io.noties.markwon.SpanFactory {
					public static class: java.lang.Class<io.noties.markwon.image.ImageSpanFactory>;
					public getSpans(configuration: io.noties.markwon.MarkwonConfiguration, props: io.noties.markwon.RenderProps): any;
					public constructor();
					public getSpans(param0: io.noties.markwon.MarkwonConfiguration, param1: io.noties.markwon.RenderProps): any;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export module destination {
					export abstract class ImageDestinationProcessor extends java.lang.Object {
						public static class: java.lang.Class<io.noties.markwon.image.destination.ImageDestinationProcessor>;
						public process(param0: string): string;
						public constructor();
						public static noOp(): io.noties.markwon.image.destination.ImageDestinationProcessor;
					}
					export module ImageDestinationProcessor {
						export class NoOp extends io.noties.markwon.image.destination.ImageDestinationProcessor {
							public static class: java.lang.Class<io.noties.markwon.image.destination.ImageDestinationProcessor.NoOp>;
							public process(destination: string): string;
							public process(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export module destination {
					export class ImageDestinationProcessorAssets extends io.noties.markwon.image.destination.ImageDestinationProcessor {
						public static class: java.lang.Class<io.noties.markwon.image.destination.ImageDestinationProcessorAssets>;
						public process(param0: string): string;
						public constructor();
						public constructor(parent: io.noties.markwon.image.destination.ImageDestinationProcessor);
						public process(destination: string): string;
						public static create(parent: io.noties.markwon.image.destination.ImageDestinationProcessor): io.noties.markwon.image.destination.ImageDestinationProcessorAssets;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module image {
				export module destination {
					export class ImageDestinationProcessorRelativeToAbsolute extends io.noties.markwon.image.destination.ImageDestinationProcessor {
						public static class: java.lang.Class<io.noties.markwon.image.destination.ImageDestinationProcessorRelativeToAbsolute>;
						public process(param0: string): string;
						public constructor();
						public static create(base: string): io.noties.markwon.image.destination.ImageDestinationProcessorRelativeToAbsolute;
						public process(destination: string): string;
						public static create(base: java.net.URL): io.noties.markwon.image.destination.ImageDestinationProcessorRelativeToAbsolute;
						public constructor(base: java.net.URL);
						public constructor(base: string);
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module movement {
				export class MovementMethodPlugin extends io.noties.markwon.AbstractMarkwonPlugin {
					public static class: java.lang.Class<io.noties.markwon.movement.MovementMethodPlugin>;
					public configureTheme(param0: io.noties.markwon.core.MarkwonTheme.Builder): void;
					public afterRender(node: org.commonmark.node.Node, visitor: io.noties.markwon.MarkwonVisitor): void;
					public processMarkdown(markdown: string): string;
					public configureSpansFactory(param0: io.noties.markwon.MarkwonSpansFactory.Builder): void;
					public beforeSetText(textView: android.widget.TextView, markdown: android.text.Spanned): void;
					public configureParser(param0: org.commonmark.parser.Parser.Builder): void;
					public afterSetText(param0: android.widget.TextView): void;
					public configureConfiguration(builder: io.noties.markwon.MarkwonConfiguration.Builder): void;
					public static create(movementMethod: android.text.method.MovementMethod): io.noties.markwon.movement.MovementMethodPlugin;
					public configureParser(builder: org.commonmark.parser.Parser.Builder): void;
					public processMarkdown(param0: string): string;
					public configureConfiguration(param0: io.noties.markwon.MarkwonConfiguration.Builder): void;
					public configure(param0: io.noties.markwon.MarkwonPlugin.Registry): void;
					public static link(): io.noties.markwon.movement.MovementMethodPlugin;
					public configureVisitor(builder: io.noties.markwon.MarkwonVisitor.Builder): void;
					public beforeRender(node: org.commonmark.node.Node): void;
					public afterRender(param0: org.commonmark.node.Node, param1: io.noties.markwon.MarkwonVisitor): void;
					public static none(): io.noties.markwon.movement.MovementMethodPlugin;
					public configure(registry: io.noties.markwon.MarkwonPlugin.Registry): void;
					public configureTheme(builder: io.noties.markwon.core.MarkwonTheme.Builder): void;
					public beforeRender(param0: org.commonmark.node.Node): void;
					public configureVisitor(param0: io.noties.markwon.MarkwonVisitor.Builder): void;
					public configureSpansFactory(builder: io.noties.markwon.MarkwonSpansFactory.Builder): void;
					public beforeSetText(param0: android.widget.TextView, param1: android.text.Spanned): void;
					/** @deprecated */
					public static create(): io.noties.markwon.movement.MovementMethodPlugin;
					public afterSetText(textView: android.widget.TextView): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module syntax {
				export class SyntaxHighlight extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.syntax.SyntaxHighlight>;
					/**
					 * Constructs a new instance of the io.noties.markwon.syntax.SyntaxHighlight interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						highlight(param0: string, param1: string): string;
					});
					public constructor();
					public highlight(param0: string, param1: string): string;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module syntax {
				export class SyntaxHighlightNoOp extends java.lang.Object implements io.noties.markwon.syntax.SyntaxHighlight {
					public static class: java.lang.Class<io.noties.markwon.syntax.SyntaxHighlightNoOp>;
					public constructor();
					public highlight(info: string, code: string): string;
					public highlight(param0: string, param1: string): string;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module utils {
				export abstract class ColorUtils extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.utils.ColorUtils>;
					public static blend(foreground: number, background: number, ratio: number): number;
					public static applyAlpha(color: number, alpha: number): number;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module utils {
				export class Dip extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.utils.Dip>;
					public static create(context: android.content.Context): io.noties.markwon.utils.Dip;
					public constructor(density: number);
					public toPx(dp: number): number;
					public static create(density: number): io.noties.markwon.utils.Dip;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module utils {
				export abstract class DrawableUtils extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.utils.DrawableUtils>;
					public static intrinsicBounds(drawable: android.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module utils {
				export abstract class DumpNodes extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.utils.DumpNodes>;
					public static dump(node: org.commonmark.node.Node, nodeProcessor: io.noties.markwon.utils.DumpNodes.NodeProcessor): string;
					public static dump(node: org.commonmark.node.Node): string;
				}
				export module DumpNodes {
					export class Indent extends java.lang.Object {
						public static class: java.lang.Class<io.noties.markwon.utils.DumpNodes.Indent>;
					}
					export class NodeProcessor extends java.lang.Object {
						public static class: java.lang.Class<io.noties.markwon.utils.DumpNodes.NodeProcessor>;
						/**
						 * Constructs a new instance of the io.noties.markwon.utils.DumpNodes$NodeProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							process(param0: org.commonmark.node.Node): string;
						});
						public constructor();
						public process(param0: org.commonmark.node.Node): string;
					}
					export class NodeProcessorToString extends java.lang.Object implements io.noties.markwon.utils.DumpNodes.NodeProcessor {
						public static class: java.lang.Class<io.noties.markwon.utils.DumpNodes.NodeProcessorToString>;
						public process(param0: org.commonmark.node.Node): string;
						public process(node: org.commonmark.node.Node): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module utils {
				export abstract class LayoutUtils extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.utils.LayoutUtils>;
					public static getLineHeight(layout: android.text.Layout, line: number): number;
					public static getLineTopWithoutPadding(layout: android.text.Layout, line: number): number;
					public static getLineBottomWithoutPaddingAndSpacing(layout: android.text.Layout, line: number): number;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module utils {
				export abstract class LeadingMarginUtils extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.utils.LeadingMarginUtils>;
					public static selfStart(start: number, text: string, span: any): boolean;
					public static selfEnd(end: number, text: string, span: any): boolean;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module utils {
				export class NoCopySpannableFactory extends android.text.Spannable.Factory {
					public static class: java.lang.Class<io.noties.markwon.utils.NoCopySpannableFactory>;
					public static getInstance(): io.noties.markwon.utils.NoCopySpannableFactory;
					public static getInstance(): android.text.Spannable.Factory;
					public constructor();
					public newSpannable(source: string): android.text.Spannable;
				}
				export module NoCopySpannableFactory {
					export class Holder extends java.lang.Object {
						public static class: java.lang.Class<io.noties.markwon.utils.NoCopySpannableFactory.Holder>;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module utils {
				export abstract class ParserUtils extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.utils.ParserUtils>;
					public static moveChildren(to: org.commonmark.node.Node, from: org.commonmark.node.Node): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module utils {
				export abstract class SpanUtils extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.utils.SpanUtils>;
					public static width(canvas: android.graphics.Canvas, cs: string): number;
					public constructor();
				}
			}
		}
	}
}

//Generics information:
//io.noties.markwon.MarkwonPlugin.Action:1
//io.noties.markwon.MarkwonVisitor.NodeVisitor:1
//io.noties.markwon.Prop:1

