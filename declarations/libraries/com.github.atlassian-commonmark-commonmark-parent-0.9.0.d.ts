declare module org {
	export module commonmark {
		export class Extension extends java.lang.Object {
			public static class: java.lang.Class<org.commonmark.Extension>;
			/**
			 * Constructs a new instance of the org.commonmark.Extension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class BlockContent extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.internal.BlockContent>;
				public getString(): string;
				public constructor(content: string);
				public add(line: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class BlockContinueImpl extends org.commonmark.parser.block.BlockContinue {
				public static class: java.lang.Class<org.commonmark.internal.BlockContinueImpl>;
				public getNewColumn(): number;
				public isFinalize(): boolean;
				public getNewIndex(): number;
				public constructor(newIndex: number, newColumn: number, finalize: boolean);
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class BlockQuoteParser extends org.commonmark.parser.block.AbstractBlockParser {
				public static class: java.lang.Class<org.commonmark.internal.BlockQuoteParser>;
				public getBlock(): org.commonmark.node.BlockQuote;
				public getBlock(): org.commonmark.node.Block;
				public addLine(param0: string): void;
				public tryContinue(state: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public addLine(line: string): void;
				public parseInlines(param0: org.commonmark.parser.InlineParser): void;
				public canContain(param0: org.commonmark.node.Block): boolean;
				public canContain(block: org.commonmark.node.Block): boolean;
				public constructor();
				public closeBlock(): void;
				public tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public parseInlines(inlineParser: org.commonmark.parser.InlineParser): void;
				public isContainer(): boolean;
			}
			export module BlockQuoteParser {
				export class Factory extends org.commonmark.parser.block.AbstractBlockParserFactory {
					public static class: java.lang.Class<org.commonmark.internal.BlockQuoteParser.Factory>;
					public constructor();
					public tryStart(param0: org.commonmark.parser.block.ParserState, param1: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
					public tryStart(state: org.commonmark.parser.block.ParserState, matchedBlockParser: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class BlockStartImpl extends org.commonmark.parser.block.BlockStart {
				public static class: java.lang.Class<org.commonmark.internal.BlockStartImpl>;
				public getNewColumn(): number;
				public getBlockParsers(): org.commonmark.parser.block.BlockParser[];
				public atIndex(newIndex: number): org.commonmark.parser.block.BlockStart;
				public replaceActiveBlockParser(): org.commonmark.parser.block.BlockStart;
				public atColumn(newColumn: number): org.commonmark.parser.block.BlockStart;
				public constructor(...blockParsers: org.commonmark.parser.block.BlockParser[]);
				public isReplaceActiveBlockParser(): boolean;
				public atColumn(param0: number): org.commonmark.parser.block.BlockStart;
				public getNewIndex(): number;
				public constructor();
				public atIndex(param0: number): org.commonmark.parser.block.BlockStart;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class Bracket extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.internal.Bracket>;
				public node: org.commonmark.node.Text;
				public index: number;
				public previous: org.commonmark.internal.Bracket;
				public previousDelimiter: org.commonmark.internal.Delimiter;
				public allowed: boolean;
				public bracketAfter: boolean;
				public static image(node: org.commonmark.node.Text, index: number, previous: org.commonmark.internal.Bracket, previousDelimiter: org.commonmark.internal.Delimiter): org.commonmark.internal.Bracket;
				public static link(node: org.commonmark.node.Text, index: number, previous: org.commonmark.internal.Bracket, previousDelimiter: org.commonmark.internal.Delimiter): org.commonmark.internal.Bracket;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class Delimiter extends java.lang.Object implements org.commonmark.parser.delimiter.DelimiterRun {
				public static class: java.lang.Class<org.commonmark.internal.Delimiter>;
				public node: org.commonmark.node.Text;
				public delimiterChar: string;
				public previous: org.commonmark.internal.Delimiter;
				public next: org.commonmark.internal.Delimiter;
				public numDelims: number;
				public constructor(node: org.commonmark.node.Text, delimiterChar: string, canOpen: boolean, canClose: boolean, previous: org.commonmark.internal.Delimiter);
				public canOpen(): boolean;
				public length(): number;
				public canClose(): boolean;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class DocumentBlockParser extends org.commonmark.parser.block.AbstractBlockParser {
				public static class: java.lang.Class<org.commonmark.internal.DocumentBlockParser>;
				public getBlock(): org.commonmark.node.Block;
				public addLine(param0: string): void;
				public tryContinue(state: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public addLine(line: string): void;
				public parseInlines(param0: org.commonmark.parser.InlineParser): void;
				public canContain(param0: org.commonmark.node.Block): boolean;
				public canContain(block: org.commonmark.node.Block): boolean;
				public constructor();
				public getBlock(): org.commonmark.node.Document;
				public closeBlock(): void;
				public tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public parseInlines(inlineParser: org.commonmark.parser.InlineParser): void;
				public isContainer(): boolean;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class DocumentParser extends java.lang.Object implements org.commonmark.parser.block.ParserState {
				public static class: java.lang.Class<org.commonmark.internal.DocumentParser>;
				public parse(input: string): org.commonmark.node.Document;
				public static calculateBlockParserFactories(customBlockParserFactories: java.util.List<org.commonmark.parser.block.BlockParserFactory>, enabledBlockTypes: java.util.Set<java.lang.Class<any>>): java.util.List<org.commonmark.parser.block.BlockParserFactory>;
				public getNextNonSpaceIndex(): number;
				public getColumn(): number;
				public isBlank(): boolean;
				public getIndex(): number;
				public constructor(blockParserFactories: java.util.List<org.commonmark.parser.block.BlockParserFactory>, inlineParser: org.commonmark.parser.InlineParser);
				public parse(input: java.io.Reader): org.commonmark.node.Document;
				public getLine(): string;
				public static getDefaultBlockParserTypes(): java.util.Set<java.lang.Class<any>>;
				public getIndent(): number;
				public getActiveBlockParser(): org.commonmark.parser.block.BlockParser;
			}
			export module DocumentParser {
				export class MatchedBlockParserImpl extends java.lang.Object implements org.commonmark.parser.block.MatchedBlockParser {
					public static class: java.lang.Class<org.commonmark.internal.DocumentParser.MatchedBlockParserImpl>;
					public constructor(matchedBlockParser: org.commonmark.parser.block.BlockParser);
					public getMatchedBlockParser(): org.commonmark.parser.block.BlockParser;
					public getParagraphContent(): string;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class FencedCodeBlockParser extends org.commonmark.parser.block.AbstractBlockParser {
				public static class: java.lang.Class<org.commonmark.internal.FencedCodeBlockParser>;
				public getBlock(): org.commonmark.node.Block;
				public addLine(param0: string): void;
				public tryContinue(state: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public addLine(line: string): void;
				public parseInlines(param0: org.commonmark.parser.InlineParser): void;
				public canContain(param0: org.commonmark.node.Block): boolean;
				public canContain(block: org.commonmark.node.Block): boolean;
				public constructor(fenceChar: string, fenceLength: number, fenceIndent: number);
				public constructor();
				public closeBlock(): void;
				public tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public parseInlines(inlineParser: org.commonmark.parser.InlineParser): void;
				public isContainer(): boolean;
			}
			export module FencedCodeBlockParser {
				export class Factory extends org.commonmark.parser.block.AbstractBlockParserFactory {
					public static class: java.lang.Class<org.commonmark.internal.FencedCodeBlockParser.Factory>;
					public constructor();
					public tryStart(param0: org.commonmark.parser.block.ParserState, param1: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
					public tryStart(state: org.commonmark.parser.block.ParserState, matchedBlockParser: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class HeadingParser extends org.commonmark.parser.block.AbstractBlockParser {
				public static class: java.lang.Class<org.commonmark.internal.HeadingParser>;
				public constructor(level: number, content: string);
				public getBlock(): org.commonmark.node.Block;
				public addLine(param0: string): void;
				public addLine(line: string): void;
				public parseInlines(param0: org.commonmark.parser.InlineParser): void;
				public canContain(param0: org.commonmark.node.Block): boolean;
				public canContain(block: org.commonmark.node.Block): boolean;
				public constructor();
				public closeBlock(): void;
				public tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public tryContinue(parserState: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public parseInlines(inlineParser: org.commonmark.parser.InlineParser): void;
				public isContainer(): boolean;
			}
			export module HeadingParser {
				export class Factory extends org.commonmark.parser.block.AbstractBlockParserFactory {
					public static class: java.lang.Class<org.commonmark.internal.HeadingParser.Factory>;
					public constructor();
					public tryStart(param0: org.commonmark.parser.block.ParserState, param1: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
					public tryStart(state: org.commonmark.parser.block.ParserState, matchedBlockParser: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class HtmlBlockParser extends org.commonmark.parser.block.AbstractBlockParser {
				public static class: java.lang.Class<org.commonmark.internal.HtmlBlockParser>;
				public getBlock(): org.commonmark.node.Block;
				public closeBlock(): void;
				public addLine(param0: string): void;
				public tryContinue(state: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public addLine(line: string): void;
				public tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public parseInlines(param0: org.commonmark.parser.InlineParser): void;
				public canContain(param0: org.commonmark.node.Block): boolean;
				public parseInlines(inlineParser: org.commonmark.parser.InlineParser): void;
				public canContain(block: org.commonmark.node.Block): boolean;
				public isContainer(): boolean;
			}
			export module HtmlBlockParser {
				export class Factory extends org.commonmark.parser.block.AbstractBlockParserFactory {
					public static class: java.lang.Class<org.commonmark.internal.HtmlBlockParser.Factory>;
					public constructor();
					public tryStart(param0: org.commonmark.parser.block.ParserState, param1: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
					public tryStart(state: org.commonmark.parser.block.ParserState, matchedBlockParser: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class IndentedCodeBlockParser extends org.commonmark.parser.block.AbstractBlockParser {
				public static class: java.lang.Class<org.commonmark.internal.IndentedCodeBlockParser>;
				public getBlock(): org.commonmark.node.Block;
				public closeBlock(): void;
				public addLine(param0: string): void;
				public tryContinue(state: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public addLine(line: string): void;
				public tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public parseInlines(param0: org.commonmark.parser.InlineParser): void;
				public canContain(param0: org.commonmark.node.Block): boolean;
				public parseInlines(inlineParser: org.commonmark.parser.InlineParser): void;
				public canContain(block: org.commonmark.node.Block): boolean;
				public constructor();
				public isContainer(): boolean;
			}
			export module IndentedCodeBlockParser {
				export class Factory extends org.commonmark.parser.block.AbstractBlockParserFactory {
					public static class: java.lang.Class<org.commonmark.internal.IndentedCodeBlockParser.Factory>;
					public constructor();
					public tryStart(param0: org.commonmark.parser.block.ParserState, param1: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
					public tryStart(state: org.commonmark.parser.block.ParserState, matchedBlockParser: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class InlineParserImpl extends java.lang.Object implements org.commonmark.parser.InlineParser, org.commonmark.internal.ReferenceParser {
				public static class: java.lang.Class<org.commonmark.internal.InlineParserImpl>;
				public static calculateDelimiterCharacters(characters: java.util.Set<java.lang.Character>): java.util.BitSet;
				public static calculateSpecialCharacters(delimiterCharacters: java.util.BitSet): java.util.BitSet;
				public static calculateDelimiterProcessors(delimiterProcessors: java.util.List<org.commonmark.parser.delimiter.DelimiterProcessor>): java.util.Map<java.lang.Character,org.commonmark.parser.delimiter.DelimiterProcessor>;
				public parseReference(s: string): number;
				public parseReference(param0: string): number;
				public parse(content: string, block: org.commonmark.node.Node): void;
				public constructor(delimiterProcessors: java.util.List<org.commonmark.parser.delimiter.DelimiterProcessor>);
				public parse(param0: string, param1: org.commonmark.node.Node): void;
			}
			export module InlineParserImpl {
				export class DelimiterData extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.internal.InlineParserImpl.DelimiterData>;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class ListBlockParser extends org.commonmark.parser.block.AbstractBlockParser {
				public static class: java.lang.Class<org.commonmark.internal.ListBlockParser>;
				public getBlock(): org.commonmark.node.Block;
				public addLine(param0: string): void;
				public constructor(block: org.commonmark.node.ListBlock);
				public tryContinue(state: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public addLine(line: string): void;
				public parseInlines(param0: org.commonmark.parser.InlineParser): void;
				public canContain(param0: org.commonmark.node.Block): boolean;
				public canContain(block: org.commonmark.node.Block): boolean;
				public constructor();
				public setTight(tight: boolean): void;
				public closeBlock(): void;
				public tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public parseInlines(inlineParser: org.commonmark.parser.InlineParser): void;
				public isContainer(): boolean;
			}
			export module ListBlockParser {
				export class Factory extends org.commonmark.parser.block.AbstractBlockParserFactory {
					public static class: java.lang.Class<org.commonmark.internal.ListBlockParser.Factory>;
					public constructor();
					public tryStart(param0: org.commonmark.parser.block.ParserState, param1: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
					public tryStart(state: org.commonmark.parser.block.ParserState, matchedBlockParser: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
				}
				export class ListData extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.internal.ListBlockParser.ListData>;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class ListItemParser extends org.commonmark.parser.block.AbstractBlockParser {
				public static class: java.lang.Class<org.commonmark.internal.ListItemParser>;
				public getBlock(): org.commonmark.node.Block;
				public addLine(param0: string): void;
				public tryContinue(state: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public addLine(line: string): void;
				public parseInlines(param0: org.commonmark.parser.InlineParser): void;
				public canContain(param0: org.commonmark.node.Block): boolean;
				public canContain(block: org.commonmark.node.Block): boolean;
				public constructor(contentIndent: number);
				public constructor();
				public closeBlock(): void;
				public tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public parseInlines(inlineParser: org.commonmark.parser.InlineParser): void;
				public isContainer(): boolean;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class ParagraphParser extends org.commonmark.parser.block.AbstractBlockParser {
				public static class: java.lang.Class<org.commonmark.internal.ParagraphParser>;
				public getBlock(): org.commonmark.node.Block;
				public getContentString(): string;
				public addLine(param0: string): void;
				public tryContinue(state: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public addLine(line: string): void;
				public parseInlines(param0: org.commonmark.parser.InlineParser): void;
				public canContain(param0: org.commonmark.node.Block): boolean;
				public canContain(block: org.commonmark.node.Block): boolean;
				public constructor();
				public closeBlock(inlineParser: org.commonmark.internal.ReferenceParser): void;
				public closeBlock(): void;
				public tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public parseInlines(inlineParser: org.commonmark.parser.InlineParser): void;
				public isContainer(): boolean;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class ReferenceParser extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.internal.ReferenceParser>;
				/**
				 * Constructs a new instance of the org.commonmark.internal.ReferenceParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					parseReference(param0: string): number;
				});
				public constructor();
				public parseReference(param0: string): number;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export class ThematicBreakParser extends org.commonmark.parser.block.AbstractBlockParser {
				public static class: java.lang.Class<org.commonmark.internal.ThematicBreakParser>;
				public getBlock(): org.commonmark.node.Block;
				public closeBlock(): void;
				public addLine(param0: string): void;
				public tryContinue(state: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
				public addLine(line: string): void;
				public parseInlines(param0: org.commonmark.parser.InlineParser): void;
				public canContain(param0: org.commonmark.node.Block): boolean;
				public parseInlines(inlineParser: org.commonmark.parser.InlineParser): void;
				public canContain(block: org.commonmark.node.Block): boolean;
				public constructor();
				public isContainer(): boolean;
			}
			export module ThematicBreakParser {
				export class Factory extends org.commonmark.parser.block.AbstractBlockParserFactory {
					public static class: java.lang.Class<org.commonmark.internal.ThematicBreakParser.Factory>;
					public constructor();
					public tryStart(param0: org.commonmark.parser.block.ParserState, param1: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
					public tryStart(state: org.commonmark.parser.block.ParserState, matchedBlockParser: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export module inline {
				export class AsteriskDelimiterProcessor extends org.commonmark.internal.inline.EmphasisDelimiterProcessor {
					public static class: java.lang.Class<org.commonmark.internal.inline.AsteriskDelimiterProcessor>;
					public getDelimiterUse(param0: org.commonmark.parser.delimiter.DelimiterRun, param1: org.commonmark.parser.delimiter.DelimiterRun): number;
					public constructor();
					public process(param0: org.commonmark.node.Text, param1: org.commonmark.node.Text, param2: number): void;
					public process(opener: org.commonmark.node.Text, closer: org.commonmark.node.Text, delimiterUse: number): void;
					public getMinLength(): number;
					public getClosingCharacter(): string;
					public getDelimiterUse(opener: org.commonmark.parser.delimiter.DelimiterRun, closer: org.commonmark.parser.delimiter.DelimiterRun): number;
					public constructor(delimiterChar: string);
					public getOpeningCharacter(): string;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export module inline {
				export abstract class EmphasisDelimiterProcessor extends java.lang.Object implements org.commonmark.parser.delimiter.DelimiterProcessor {
					public static class: java.lang.Class<org.commonmark.internal.inline.EmphasisDelimiterProcessor>;
					public getDelimiterUse(param0: org.commonmark.parser.delimiter.DelimiterRun, param1: org.commonmark.parser.delimiter.DelimiterRun): number;
					public process(param0: org.commonmark.node.Text, param1: org.commonmark.node.Text, param2: number): void;
					public process(opener: org.commonmark.node.Text, closer: org.commonmark.node.Text, delimiterUse: number): void;
					public getMinLength(): number;
					public getClosingCharacter(): string;
					public getDelimiterUse(opener: org.commonmark.parser.delimiter.DelimiterRun, closer: org.commonmark.parser.delimiter.DelimiterRun): number;
					public constructor(delimiterChar: string);
					public getOpeningCharacter(): string;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export module inline {
				export class UnderscoreDelimiterProcessor extends org.commonmark.internal.inline.EmphasisDelimiterProcessor {
					public static class: java.lang.Class<org.commonmark.internal.inline.UnderscoreDelimiterProcessor>;
					public getDelimiterUse(param0: org.commonmark.parser.delimiter.DelimiterRun, param1: org.commonmark.parser.delimiter.DelimiterRun): number;
					public constructor();
					public process(param0: org.commonmark.node.Text, param1: org.commonmark.node.Text, param2: number): void;
					public process(opener: org.commonmark.node.Text, closer: org.commonmark.node.Text, delimiterUse: number): void;
					public getMinLength(): number;
					public getClosingCharacter(): string;
					public getDelimiterUse(opener: org.commonmark.parser.delimiter.DelimiterRun, closer: org.commonmark.parser.delimiter.DelimiterRun): number;
					public constructor(delimiterChar: string);
					public getOpeningCharacter(): string;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export module renderer {
				export class NodeRendererMap extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.internal.renderer.NodeRendererMap>;
					public constructor();
					public add(nodeRenderer: org.commonmark.renderer.NodeRenderer): void;
					public render(node: org.commonmark.node.Node): void;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export module util {
				export class Escaping extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.internal.util.Escaping>;
					public static ESCAPABLE: string;
					public static normalizeReference(input: string): string;
					public constructor();
					public static unescapeString(s: string): string;
					public static escapeHtml(input: string, preserveEntities: boolean): string;
					public static percentEncodeUrl(s: string): string;
				}
				export module Escaping {
					export class Replacer extends java.lang.Object {
						public static class: java.lang.Class<org.commonmark.internal.util.Escaping.Replacer>;
						/**
						 * Constructs a new instance of the org.commonmark.internal.util.Escaping$Replacer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							replace(param0: string, param1: java.lang.StringBuilder): void;
						});
						public constructor();
						public replace(param0: string, param1: java.lang.StringBuilder): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export module util {
				export class Html5Entities extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.internal.util.Html5Entities>;
					public constructor();
					public static entityToString(input: string): string;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export module util {
				export class Parsing extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.internal.util.Parsing>;
					public static OPENTAG: string;
					public static CLOSETAG: string;
					public static CODE_BLOCK_INDENT: number;
					public static columnsToNextTabStop(column: number): number;
					public static isLetter(s: string, index: number): boolean;
					public static findLineBreak(s: string, startIndex: number): number;
					public constructor();
					public static prepareLine(line: string): string;
					public static isBlank(s: string): boolean;
					public static isSpaceOrTab(s: string, index: number): boolean;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module internal {
			export module util {
				export class Substring extends java.lang.Object implements java.lang.CharSequence {
					public static class: java.lang.Class<org.commonmark.internal.util.Substring>;
					public toString(): string;
					public equals(obj: any): boolean;
					public chars(): java.util.stream.IntStream;
					public charAt(index: number): string;
					public charAt(param0: number): string;
					public subSequence(param0: number, param1: number): string;
					public static of(base: string, beginIndex: number, endIndex: number): string;
					public hashCode(): number;
					public subSequence(start: number, end: number): string;
					public codePoints(): java.util.stream.IntStream;
					public length(): number;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export abstract class AbstractVisitor extends java.lang.Object implements org.commonmark.node.Visitor {
				public static class: java.lang.Class<org.commonmark.node.AbstractVisitor>;
				public visit(image: org.commonmark.node.Image): void;
				public visit(customBlock: org.commonmark.node.CustomBlock): void;
				public visit(listItem: org.commonmark.node.ListItem): void;
				public visit(param0: org.commonmark.node.OrderedList): void;
				public visit(param0: org.commonmark.node.FencedCodeBlock): void;
				public visit(htmlInline: org.commonmark.node.HtmlInline): void;
				public visit(param0: org.commonmark.node.CustomNode): void;
				public visit(strongEmphasis: org.commonmark.node.StrongEmphasis): void;
				public visit(param0: org.commonmark.node.HtmlInline): void;
				public constructor();
				public visit(param0: org.commonmark.node.Document): void;
				public visit(param0: org.commonmark.node.SoftLineBreak): void;
				public visit(param0: org.commonmark.node.ThematicBreak): void;
				public visit(param0: org.commonmark.node.IndentedCodeBlock): void;
				public visit(thematicBreak: org.commonmark.node.ThematicBreak): void;
				public visit(param0: org.commonmark.node.Heading): void;
				public visit(param0: org.commonmark.node.Image): void;
				public visit(fencedCodeBlock: org.commonmark.node.FencedCodeBlock): void;
				public visit(param0: org.commonmark.node.ListItem): void;
				public visit(paragraph: org.commonmark.node.Paragraph): void;
				public visit(param0: org.commonmark.node.BlockQuote): void;
				public visit(param0: org.commonmark.node.HtmlBlock): void;
				public visit(heading: org.commonmark.node.Heading): void;
				public visit(orderedList: org.commonmark.node.OrderedList): void;
				public visit(document: org.commonmark.node.Document): void;
				public visit(param0: org.commonmark.node.Code): void;
				public visit(emphasis: org.commonmark.node.Emphasis): void;
				public visit(param0: org.commonmark.node.Emphasis): void;
				public visit(text: org.commonmark.node.Text): void;
				public visit(param0: org.commonmark.node.BulletList): void;
				public visitChildren(parent: org.commonmark.node.Node): void;
				public visit(bulletList: org.commonmark.node.BulletList): void;
				public visit(blockQuote: org.commonmark.node.BlockQuote): void;
				public visit(param0: org.commonmark.node.StrongEmphasis): void;
				public visit(param0: org.commonmark.node.Paragraph): void;
				public visit(param0: org.commonmark.node.Link): void;
				public visit(softLineBreak: org.commonmark.node.SoftLineBreak): void;
				public visit(htmlBlock: org.commonmark.node.HtmlBlock): void;
				public visit(param0: org.commonmark.node.CustomBlock): void;
				public visit(code: org.commonmark.node.Code): void;
				public visit(hardLineBreak: org.commonmark.node.HardLineBreak): void;
				public visit(link: org.commonmark.node.Link): void;
				public visit(param0: org.commonmark.node.HardLineBreak): void;
				public visit(indentedCodeBlock: org.commonmark.node.IndentedCodeBlock): void;
				public visit(param0: org.commonmark.node.Text): void;
				public visit(customNode: org.commonmark.node.CustomNode): void;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export abstract class Block extends org.commonmark.node.Node {
				public static class: java.lang.Class<org.commonmark.node.Block>;
				public getParent(): org.commonmark.node.Block;
				public setParent(parent: org.commonmark.node.Node): void;
				public getParent(): org.commonmark.node.Node;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class BlockQuote extends org.commonmark.node.Block {
				public static class: java.lang.Class<org.commonmark.node.BlockQuote>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class BulletList extends org.commonmark.node.ListBlock {
				public static class: java.lang.Class<org.commonmark.node.BulletList>;
				public getBulletMarker(): string;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public constructor();
				public setBulletMarker(bulletMarker: string): void;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class Code extends org.commonmark.node.Node {
				public static class: java.lang.Class<org.commonmark.node.Code>;
				public getLiteral(): string;
				public accept(param0: org.commonmark.node.Visitor): void;
				public constructor(literal: string);
				public accept(visitor: org.commonmark.node.Visitor): void;
				public setLiteral(literal: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export abstract class CustomBlock extends org.commonmark.node.Block {
				public static class: java.lang.Class<org.commonmark.node.CustomBlock>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export abstract class CustomNode extends org.commonmark.node.Node {
				public static class: java.lang.Class<org.commonmark.node.CustomNode>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class Delimited extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.node.Delimited>;
				/**
				 * Constructs a new instance of the org.commonmark.node.Delimited interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getOpeningDelimiter(): string;
					getClosingDelimiter(): string;
				});
				public constructor();
				public getClosingDelimiter(): string;
				public getOpeningDelimiter(): string;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class Document extends org.commonmark.node.Block {
				public static class: java.lang.Class<org.commonmark.node.Document>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class Emphasis extends org.commonmark.node.Node implements org.commonmark.node.Delimited {
				public static class: java.lang.Class<org.commonmark.node.Emphasis>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public getClosingDelimiter(): string;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public getOpeningDelimiter(): string;
				public setDelimiter(delimiter: string): void;
				public constructor();
				public constructor(delimiter: string);
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class FencedCodeBlock extends org.commonmark.node.Block {
				public static class: java.lang.Class<org.commonmark.node.FencedCodeBlock>;
				public getFenceIndent(): number;
				public getLiteral(): string;
				public accept(param0: org.commonmark.node.Visitor): void;
				public setInfo(info: string): void;
				public getFenceLength(): number;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public setLiteral(literal: string): void;
				public constructor();
				public setFenceLength(fenceLength: number): void;
				public setFenceIndent(fenceIndent: number): void;
				public getFenceChar(): string;
				public getInfo(): string;
				public setFenceChar(fenceChar: string): void;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class HardLineBreak extends org.commonmark.node.Node {
				public static class: java.lang.Class<org.commonmark.node.HardLineBreak>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class Heading extends org.commonmark.node.Block {
				public static class: java.lang.Class<org.commonmark.node.Heading>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public getLevel(): number;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public setLevel(level: number): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class HtmlBlock extends org.commonmark.node.Block {
				public static class: java.lang.Class<org.commonmark.node.HtmlBlock>;
				public getLiteral(): string;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public setLiteral(literal: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class HtmlInline extends org.commonmark.node.Node {
				public static class: java.lang.Class<org.commonmark.node.HtmlInline>;
				public getLiteral(): string;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public setLiteral(literal: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class Image extends org.commonmark.node.Node {
				public static class: java.lang.Class<org.commonmark.node.Image>;
				public setDestination(destination: string): void;
				public accept(param0: org.commonmark.node.Visitor): void;
				public constructor(destination: string, title: string);
				public getDestination(): string;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public setTitle(title: string): void;
				public toStringAttributes(): string;
				public getTitle(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class IndentedCodeBlock extends org.commonmark.node.Block {
				public static class: java.lang.Class<org.commonmark.node.IndentedCodeBlock>;
				public getLiteral(): string;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public setLiteral(literal: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class Link extends org.commonmark.node.Node {
				public static class: java.lang.Class<org.commonmark.node.Link>;
				public setDestination(destination: string): void;
				public accept(param0: org.commonmark.node.Visitor): void;
				public constructor(destination: string, title: string);
				public getDestination(): string;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public setTitle(title: string): void;
				public toStringAttributes(): string;
				public getTitle(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export abstract class ListBlock extends org.commonmark.node.Block {
				public static class: java.lang.Class<org.commonmark.node.ListBlock>;
				public setTight(tight: boolean): void;
				public isTight(): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class ListItem extends org.commonmark.node.Block {
				public static class: java.lang.Class<org.commonmark.node.ListItem>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export abstract class Node extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.node.Node>;
				public getPrevious(): org.commonmark.node.Node;
				public insertAfter(sibling: org.commonmark.node.Node): void;
				public accept(param0: org.commonmark.node.Visitor): void;
				public insertBefore(sibling: org.commonmark.node.Node): void;
				public setParent(parent: org.commonmark.node.Node): void;
				public getParent(): org.commonmark.node.Node;
				public appendChild(child: org.commonmark.node.Node): void;
				public prependChild(child: org.commonmark.node.Node): void;
				public getFirstChild(): org.commonmark.node.Node;
				public getNext(): org.commonmark.node.Node;
				public toString(): string;
				public toStringAttributes(): string;
				public constructor();
				public unlink(): void;
				public getLastChild(): org.commonmark.node.Node;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class OrderedList extends org.commonmark.node.ListBlock {
				public static class: java.lang.Class<org.commonmark.node.OrderedList>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public getStartNumber(): number;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public setDelimiter(delimiter: string): void;
				public setStartNumber(startNumber: number): void;
				public constructor();
				public getDelimiter(): string;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class Paragraph extends org.commonmark.node.Block {
				public static class: java.lang.Class<org.commonmark.node.Paragraph>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class SoftLineBreak extends org.commonmark.node.Node {
				public static class: java.lang.Class<org.commonmark.node.SoftLineBreak>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class StrongEmphasis extends org.commonmark.node.Node implements org.commonmark.node.Delimited {
				public static class: java.lang.Class<org.commonmark.node.StrongEmphasis>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public getClosingDelimiter(): string;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public getOpeningDelimiter(): string;
				public setDelimiter(delimiter: string): void;
				public constructor();
				public constructor(delimiter: string);
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class Text extends org.commonmark.node.Node {
				public static class: java.lang.Class<org.commonmark.node.Text>;
				public getLiteral(): string;
				public accept(param0: org.commonmark.node.Visitor): void;
				public constructor(literal: string);
				public accept(visitor: org.commonmark.node.Visitor): void;
				public toStringAttributes(): string;
				public setLiteral(literal: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class ThematicBreak extends org.commonmark.node.Block {
				public static class: java.lang.Class<org.commonmark.node.ThematicBreak>;
				public accept(param0: org.commonmark.node.Visitor): void;
				public accept(visitor: org.commonmark.node.Visitor): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module node {
			export class Visitor extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.node.Visitor>;
				/**
				 * Constructs a new instance of the org.commonmark.node.Visitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					visit(param0: org.commonmark.node.BlockQuote): void;
					visit(param0: org.commonmark.node.BulletList): void;
					visit(param0: org.commonmark.node.Code): void;
					visit(param0: org.commonmark.node.Document): void;
					visit(param0: org.commonmark.node.Emphasis): void;
					visit(param0: org.commonmark.node.FencedCodeBlock): void;
					visit(param0: org.commonmark.node.HardLineBreak): void;
					visit(param0: org.commonmark.node.Heading): void;
					visit(param0: org.commonmark.node.ThematicBreak): void;
					visit(param0: org.commonmark.node.HtmlInline): void;
					visit(param0: org.commonmark.node.HtmlBlock): void;
					visit(param0: org.commonmark.node.Image): void;
					visit(param0: org.commonmark.node.IndentedCodeBlock): void;
					visit(param0: org.commonmark.node.Link): void;
					visit(param0: org.commonmark.node.ListItem): void;
					visit(param0: org.commonmark.node.OrderedList): void;
					visit(param0: org.commonmark.node.Paragraph): void;
					visit(param0: org.commonmark.node.SoftLineBreak): void;
					visit(param0: org.commonmark.node.StrongEmphasis): void;
					visit(param0: org.commonmark.node.Text): void;
					visit(param0: org.commonmark.node.CustomBlock): void;
					visit(param0: org.commonmark.node.CustomNode): void;
				});
				public constructor();
				public visit(param0: org.commonmark.node.Code): void;
				public visit(param0: org.commonmark.node.Emphasis): void;
				public visit(param0: org.commonmark.node.BulletList): void;
				public visit(param0: org.commonmark.node.OrderedList): void;
				public visit(param0: org.commonmark.node.FencedCodeBlock): void;
				public visit(param0: org.commonmark.node.StrongEmphasis): void;
				public visit(param0: org.commonmark.node.Paragraph): void;
				public visit(param0: org.commonmark.node.CustomNode): void;
				public visit(param0: org.commonmark.node.HtmlInline): void;
				public visit(param0: org.commonmark.node.Document): void;
				public visit(param0: org.commonmark.node.Link): void;
				public visit(param0: org.commonmark.node.SoftLineBreak): void;
				public visit(param0: org.commonmark.node.ThematicBreak): void;
				public visit(param0: org.commonmark.node.IndentedCodeBlock): void;
				public visit(param0: org.commonmark.node.CustomBlock): void;
				public visit(param0: org.commonmark.node.Heading): void;
				public visit(param0: org.commonmark.node.Image): void;
				public visit(param0: org.commonmark.node.HardLineBreak): void;
				public visit(param0: org.commonmark.node.ListItem): void;
				public visit(param0: org.commonmark.node.Text): void;
				public visit(param0: org.commonmark.node.BlockQuote): void;
				public visit(param0: org.commonmark.node.HtmlBlock): void;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export class InlineParser extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.parser.InlineParser>;
				/**
				 * Constructs a new instance of the org.commonmark.parser.InlineParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					parse(param0: string, param1: org.commonmark.node.Node): void;
				});
				public constructor();
				public parse(param0: string, param1: org.commonmark.node.Node): void;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export class InlineParserContext extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.parser.InlineParserContext>;
				/**
				 * Constructs a new instance of the org.commonmark.parser.InlineParserContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCustomDelimiterProcessors(): java.util.List<org.commonmark.parser.delimiter.DelimiterProcessor>;
				});
				public constructor();
				public getCustomDelimiterProcessors(): java.util.List<org.commonmark.parser.delimiter.DelimiterProcessor>;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export class InlineParserFactory extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.parser.InlineParserFactory>;
				/**
				 * Constructs a new instance of the org.commonmark.parser.InlineParserFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: org.commonmark.parser.InlineParserContext): org.commonmark.parser.InlineParser;
				});
				public constructor();
				public create(param0: org.commonmark.parser.InlineParserContext): org.commonmark.parser.InlineParser;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export class Parser extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.parser.Parser>;
				public static builder(): org.commonmark.parser.Parser.Builder;
				public parse(input: string): org.commonmark.node.Node;
				public parseReader(input: java.io.Reader): org.commonmark.node.Node;
			}
			export module Parser {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.parser.Parser.Builder>;
					public customBlockParserFactory(blockParserFactory: org.commonmark.parser.block.BlockParserFactory): org.commonmark.parser.Parser.Builder;
					public enabledBlockTypes(enabledBlockTypes: java.util.Set<java.lang.Class<any>>): org.commonmark.parser.Parser.Builder;
					public constructor();
					public customDelimiterProcessor(delimiterProcessor: org.commonmark.parser.delimiter.DelimiterProcessor): org.commonmark.parser.Parser.Builder;
					public build(): org.commonmark.parser.Parser;
					public extensions(extensions: java.lang.Iterable<any>): org.commonmark.parser.Parser.Builder;
					public inlineParserFactory(inlineParserFactory: org.commonmark.parser.InlineParserFactory): org.commonmark.parser.Parser.Builder;
					public postProcessor(postProcessor: org.commonmark.parser.PostProcessor): org.commonmark.parser.Parser.Builder;
				}
				export class CustomInlineParserContext extends java.lang.Object implements org.commonmark.parser.InlineParserContext {
					public static class: java.lang.Class<org.commonmark.parser.Parser.CustomInlineParserContext>;
					public getCustomDelimiterProcessors(): java.util.List<org.commonmark.parser.delimiter.DelimiterProcessor>;
				}
				export class ParserExtension extends java.lang.Object implements org.commonmark.Extension {
					public static class: java.lang.Class<org.commonmark.parser.Parser.ParserExtension>;
					/**
					 * Constructs a new instance of the org.commonmark.parser.Parser$ParserExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						extend(param0: org.commonmark.parser.Parser.Builder): void;
					});
					public constructor();
					public extend(param0: org.commonmark.parser.Parser.Builder): void;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export class PostProcessor extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.parser.PostProcessor>;
				/**
				 * Constructs a new instance of the org.commonmark.parser.PostProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					process(param0: org.commonmark.node.Node): org.commonmark.node.Node;
				});
				public constructor();
				public process(param0: org.commonmark.node.Node): org.commonmark.node.Node;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export module block {
				export abstract class AbstractBlockParser extends java.lang.Object implements org.commonmark.parser.block.BlockParser {
					public static class: java.lang.Class<org.commonmark.parser.block.AbstractBlockParser>;
					public parseInlines(inlineParser: org.commonmark.parser.InlineParser): void;
					public parseInlines(param0: org.commonmark.parser.InlineParser): void;
					public addLine(line: string): void;
					public canContain(param0: org.commonmark.node.Block): boolean;
					public constructor();
					public tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
					public isContainer(): boolean;
					public getBlock(): org.commonmark.node.Block;
					public addLine(param0: string): void;
					public closeBlock(): void;
					public canContain(block: org.commonmark.node.Block): boolean;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export module block {
				export abstract class AbstractBlockParserFactory extends java.lang.Object implements org.commonmark.parser.block.BlockParserFactory {
					public static class: java.lang.Class<org.commonmark.parser.block.AbstractBlockParserFactory>;
					public constructor();
					public tryStart(param0: org.commonmark.parser.block.ParserState, param1: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export module block {
				export class BlockContinue extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.parser.block.BlockContinue>;
					public static finished(): org.commonmark.parser.block.BlockContinue;
					public constructor();
					public static none(): org.commonmark.parser.block.BlockContinue;
					public static atColumn(newColumn: number): org.commonmark.parser.block.BlockContinue;
					public static atIndex(newIndex: number): org.commonmark.parser.block.BlockContinue;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export module block {
				export class BlockParser extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.parser.block.BlockParser>;
					/**
					 * Constructs a new instance of the org.commonmark.parser.block.BlockParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isContainer(): boolean;
						canContain(param0: org.commonmark.node.Block): boolean;
						getBlock(): org.commonmark.node.Block;
						tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
						addLine(param0: string): void;
						closeBlock(): void;
						parseInlines(param0: org.commonmark.parser.InlineParser): void;
					});
					public constructor();
					public parseInlines(param0: org.commonmark.parser.InlineParser): void;
					public canContain(param0: org.commonmark.node.Block): boolean;
					public tryContinue(param0: org.commonmark.parser.block.ParserState): org.commonmark.parser.block.BlockContinue;
					public isContainer(): boolean;
					public getBlock(): org.commonmark.node.Block;
					public addLine(param0: string): void;
					public closeBlock(): void;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export module block {
				export class BlockParserFactory extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.parser.block.BlockParserFactory>;
					/**
					 * Constructs a new instance of the org.commonmark.parser.block.BlockParserFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						tryStart(param0: org.commonmark.parser.block.ParserState, param1: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
					});
					public constructor();
					public tryStart(param0: org.commonmark.parser.block.ParserState, param1: org.commonmark.parser.block.MatchedBlockParser): org.commonmark.parser.block.BlockStart;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export module block {
				export abstract class BlockStart extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.parser.block.BlockStart>;
					public constructor();
					public atIndex(param0: number): org.commonmark.parser.block.BlockStart;
					public replaceActiveBlockParser(): org.commonmark.parser.block.BlockStart;
					public static none(): org.commonmark.parser.block.BlockStart;
					public static of(...blockParsers: org.commonmark.parser.block.BlockParser[]): org.commonmark.parser.block.BlockStart;
					public atColumn(param0: number): org.commonmark.parser.block.BlockStart;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export module block {
				export class MatchedBlockParser extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.parser.block.MatchedBlockParser>;
					/**
					 * Constructs a new instance of the org.commonmark.parser.block.MatchedBlockParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMatchedBlockParser(): org.commonmark.parser.block.BlockParser;
						getParagraphContent(): string;
					});
					public constructor();
					public getMatchedBlockParser(): org.commonmark.parser.block.BlockParser;
					public getParagraphContent(): string;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export module block {
				export class ParserState extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.parser.block.ParserState>;
					/**
					 * Constructs a new instance of the org.commonmark.parser.block.ParserState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getLine(): string;
						getIndex(): number;
						getNextNonSpaceIndex(): number;
						getColumn(): number;
						getIndent(): number;
						isBlank(): boolean;
						getActiveBlockParser(): org.commonmark.parser.block.BlockParser;
					});
					public constructor();
					public getIndex(): number;
					public getNextNonSpaceIndex(): number;
					public isBlank(): boolean;
					public getIndent(): number;
					public getActiveBlockParser(): org.commonmark.parser.block.BlockParser;
					public getLine(): string;
					public getColumn(): number;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export module delimiter {
				export class DelimiterProcessor extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.parser.delimiter.DelimiterProcessor>;
					/**
					 * Constructs a new instance of the org.commonmark.parser.delimiter.DelimiterProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getOpeningCharacter(): string;
						getClosingCharacter(): string;
						getMinLength(): number;
						getDelimiterUse(param0: org.commonmark.parser.delimiter.DelimiterRun, param1: org.commonmark.parser.delimiter.DelimiterRun): number;
						process(param0: org.commonmark.node.Text, param1: org.commonmark.node.Text, param2: number): void;
					});
					public constructor();
					public getDelimiterUse(param0: org.commonmark.parser.delimiter.DelimiterRun, param1: org.commonmark.parser.delimiter.DelimiterRun): number;
					public process(param0: org.commonmark.node.Text, param1: org.commonmark.node.Text, param2: number): void;
					public getMinLength(): number;
					public getClosingCharacter(): string;
					public getOpeningCharacter(): string;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module parser {
			export module delimiter {
				export class DelimiterRun extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.parser.delimiter.DelimiterRun>;
					/**
					 * Constructs a new instance of the org.commonmark.parser.delimiter.DelimiterRun interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						canOpen(): boolean;
						canClose(): boolean;
						length(): number;
					});
					public constructor();
					public canClose(): boolean;
					public canOpen(): boolean;
					public length(): number;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export class NodeRenderer extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.renderer.NodeRenderer>;
				/**
				 * Constructs a new instance of the org.commonmark.renderer.NodeRenderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getNodeTypes(): java.util.Set<java.lang.Class<any>>;
					render(param0: org.commonmark.node.Node): void;
				});
				public constructor();
				public getNodeTypes(): java.util.Set<java.lang.Class<any>>;
				public render(param0: org.commonmark.node.Node): void;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export class Renderer extends java.lang.Object {
				public static class: java.lang.Class<org.commonmark.renderer.Renderer>;
				/**
				 * Constructs a new instance of the org.commonmark.renderer.Renderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					render(param0: org.commonmark.node.Node, param1: java.lang.Appendable): void;
					render(param0: org.commonmark.node.Node): string;
				});
				public constructor();
				public render(param0: org.commonmark.node.Node): string;
				public render(param0: org.commonmark.node.Node, param1: java.lang.Appendable): void;
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module html {
				export class AttributeProvider extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.renderer.html.AttributeProvider>;
					/**
					 * Constructs a new instance of the org.commonmark.renderer.html.AttributeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setAttributes(param0: org.commonmark.node.Node, param1: string, param2: java.util.Map<string,string>): void;
					});
					public constructor();
					public setAttributes(param0: org.commonmark.node.Node, param1: string, param2: java.util.Map<string,string>): void;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module html {
				export class AttributeProviderContext extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.renderer.html.AttributeProviderContext>;
					/**
					 * Constructs a new instance of the org.commonmark.renderer.html.AttributeProviderContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module html {
				export class AttributeProviderFactory extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.renderer.html.AttributeProviderFactory>;
					/**
					 * Constructs a new instance of the org.commonmark.renderer.html.AttributeProviderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: org.commonmark.renderer.html.AttributeProviderContext): org.commonmark.renderer.html.AttributeProvider;
					});
					public constructor();
					public create(param0: org.commonmark.renderer.html.AttributeProviderContext): org.commonmark.renderer.html.AttributeProvider;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module html {
				export class CoreHtmlNodeRenderer extends org.commonmark.node.AbstractVisitor implements org.commonmark.renderer.NodeRenderer {
					public static class: java.lang.Class<org.commonmark.renderer.html.CoreHtmlNodeRenderer>;
					public context: org.commonmark.renderer.html.HtmlNodeRendererContext;
					public constructor(context: org.commonmark.renderer.html.HtmlNodeRendererContext);
					public visit(htmlBlock: org.commonmark.node.HtmlBlock): void;
					public render(node: org.commonmark.node.Node): void;
					public visit(param0: org.commonmark.node.Emphasis): void;
					public visit(param0: org.commonmark.node.HardLineBreak): void;
					public visit(strongEmphasis: org.commonmark.node.StrongEmphasis): void;
					public visit(param0: org.commonmark.node.ListItem): void;
					public visitChildren(parent: org.commonmark.node.Node): void;
					public constructor();
					public visit(listItem: org.commonmark.node.ListItem): void;
					public visit(param0: org.commonmark.node.IndentedCodeBlock): void;
					public visit(paragraph: org.commonmark.node.Paragraph): void;
					public visit(orderedList: org.commonmark.node.OrderedList): void;
					public visit(param0: org.commonmark.node.StrongEmphasis): void;
					public getNodeTypes(): java.util.Set<java.lang.Class<any>>;
					public visit(param0: org.commonmark.node.HtmlBlock): void;
					public visit(param0: org.commonmark.node.Image): void;
					public visit(blockQuote: org.commonmark.node.BlockQuote): void;
					public visit(param0: org.commonmark.node.BulletList): void;
					public visit(emphasis: org.commonmark.node.Emphasis): void;
					public visit(fencedCodeBlock: org.commonmark.node.FencedCodeBlock): void;
					public visit(softLineBreak: org.commonmark.node.SoftLineBreak): void;
					public visit(customBlock: org.commonmark.node.CustomBlock): void;
					public visit(param0: org.commonmark.node.CustomBlock): void;
					public visit(param0: org.commonmark.node.Paragraph): void;
					public visit(param0: org.commonmark.node.SoftLineBreak): void;
					public visit(image: org.commonmark.node.Image): void;
					public visit(code: org.commonmark.node.Code): void;
					public visit(param0: org.commonmark.node.Heading): void;
					public visit(param0: org.commonmark.node.Text): void;
					public visit(document: org.commonmark.node.Document): void;
					public visit(param0: org.commonmark.node.FencedCodeBlock): void;
					public visit(param0: org.commonmark.node.HtmlInline): void;
					public visit(thematicBreak: org.commonmark.node.ThematicBreak): void;
					public visit(param0: org.commonmark.node.ThematicBreak): void;
					public visit(heading: org.commonmark.node.Heading): void;
					public visit(param0: org.commonmark.node.BlockQuote): void;
					public render(param0: org.commonmark.node.Node): void;
					public visit(htmlInline: org.commonmark.node.HtmlInline): void;
					public visit(indentedCodeBlock: org.commonmark.node.IndentedCodeBlock): void;
					public visit(customNode: org.commonmark.node.CustomNode): void;
					public visit(param0: org.commonmark.node.Code): void;
					public visit(bulletList: org.commonmark.node.BulletList): void;
					public visit(text: org.commonmark.node.Text): void;
					public visit(param0: org.commonmark.node.OrderedList): void;
					public visit(param0: org.commonmark.node.CustomNode): void;
					public visit(param0: org.commonmark.node.Link): void;
					public visit(param0: org.commonmark.node.Document): void;
					public visit(hardLineBreak: org.commonmark.node.HardLineBreak): void;
					public visit(link: org.commonmark.node.Link): void;
				}
				export module CoreHtmlNodeRenderer {
					export class AltTextVisitor extends org.commonmark.node.AbstractVisitor {
						public static class: java.lang.Class<org.commonmark.renderer.html.CoreHtmlNodeRenderer.AltTextVisitor>;
						public visit(listItem: org.commonmark.node.ListItem): void;
						public visit(param0: org.commonmark.node.HtmlInline): void;
						public visit(bulletList: org.commonmark.node.BulletList): void;
						public visit(blockQuote: org.commonmark.node.BlockQuote): void;
						public visit(param0: org.commonmark.node.SoftLineBreak): void;
						public visit(customBlock: org.commonmark.node.CustomBlock): void;
						public visit(param0: org.commonmark.node.HtmlBlock): void;
						public visit(htmlBlock: org.commonmark.node.HtmlBlock): void;
						public visit(thematicBreak: org.commonmark.node.ThematicBreak): void;
						public visit(param0: org.commonmark.node.OrderedList): void;
						public visit(param0: org.commonmark.node.CustomNode): void;
						public visit(param0: org.commonmark.node.Link): void;
						public visit(customNode: org.commonmark.node.CustomNode): void;
						public visit(param0: org.commonmark.node.BlockQuote): void;
						public visit(param0: org.commonmark.node.Text): void;
						public visit(param0: org.commonmark.node.ThematicBreak): void;
						public visit(param0: org.commonmark.node.IndentedCodeBlock): void;
						public visit(strongEmphasis: org.commonmark.node.StrongEmphasis): void;
						public visit(param0: org.commonmark.node.Emphasis): void;
						public visit(orderedList: org.commonmark.node.OrderedList): void;
						public visit(param0: org.commonmark.node.Heading): void;
						public visit(param0: org.commonmark.node.Image): void;
						public visit(document: org.commonmark.node.Document): void;
						public visit(emphasis: org.commonmark.node.Emphasis): void;
						public visit(image: org.commonmark.node.Image): void;
						public visit(param0: org.commonmark.node.FencedCodeBlock): void;
						public visit(text: org.commonmark.node.Text): void;
						public visit(param0: org.commonmark.node.Document): void;
						public visit(softLineBreak: org.commonmark.node.SoftLineBreak): void;
						public visit(param0: org.commonmark.node.BulletList): void;
						public visit(hardLineBreak: org.commonmark.node.HardLineBreak): void;
						public visit(param0: org.commonmark.node.ListItem): void;
						public visit(param0: org.commonmark.node.Paragraph): void;
						public visit(paragraph: org.commonmark.node.Paragraph): void;
						public visit(heading: org.commonmark.node.Heading): void;
						public visit(code: org.commonmark.node.Code): void;
						public visit(param0: org.commonmark.node.StrongEmphasis): void;
						public visit(htmlInline: org.commonmark.node.HtmlInline): void;
						public visit(indentedCodeBlock: org.commonmark.node.IndentedCodeBlock): void;
						public visit(param0: org.commonmark.node.HardLineBreak): void;
						public visit(link: org.commonmark.node.Link): void;
						public visit(fencedCodeBlock: org.commonmark.node.FencedCodeBlock): void;
						public visit(param0: org.commonmark.node.Code): void;
						public visit(param0: org.commonmark.node.CustomBlock): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module html {
				export class HtmlNodeRendererContext extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.renderer.html.HtmlNodeRendererContext>;
					/**
					 * Constructs a new instance of the org.commonmark.renderer.html.HtmlNodeRendererContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						encodeUrl(param0: string): string;
						extendAttributes(param0: org.commonmark.node.Node, param1: string, param2: java.util.Map<string,string>): java.util.Map<string,string>;
						getWriter(): org.commonmark.renderer.html.HtmlWriter;
						getSoftbreak(): string;
						render(param0: org.commonmark.node.Node): void;
						shouldEscapeHtml(): boolean;
					});
					public constructor();
					public getWriter(): org.commonmark.renderer.html.HtmlWriter;
					public getSoftbreak(): string;
					public encodeUrl(param0: string): string;
					public extendAttributes(param0: org.commonmark.node.Node, param1: string, param2: java.util.Map<string,string>): java.util.Map<string,string>;
					public shouldEscapeHtml(): boolean;
					public render(param0: org.commonmark.node.Node): void;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module html {
				export class HtmlNodeRendererFactory extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.renderer.html.HtmlNodeRendererFactory>;
					/**
					 * Constructs a new instance of the org.commonmark.renderer.html.HtmlNodeRendererFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: org.commonmark.renderer.html.HtmlNodeRendererContext): org.commonmark.renderer.NodeRenderer;
					});
					public constructor();
					public create(param0: org.commonmark.renderer.html.HtmlNodeRendererContext): org.commonmark.renderer.NodeRenderer;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module html {
				export class HtmlRenderer extends java.lang.Object implements org.commonmark.renderer.Renderer {
					public static class: java.lang.Class<org.commonmark.renderer.html.HtmlRenderer>;
					public static builder(): org.commonmark.renderer.html.HtmlRenderer.Builder;
					public render(param0: org.commonmark.node.Node, param1: java.lang.Appendable): void;
					public render(node: org.commonmark.node.Node): string;
					public render(node: org.commonmark.node.Node, output: java.lang.Appendable): void;
					public render(param0: org.commonmark.node.Node): string;
				}
				export module HtmlRenderer {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<org.commonmark.renderer.html.HtmlRenderer.Builder>;
						public percentEncodeUrls(percentEncodeUrls: boolean): org.commonmark.renderer.html.HtmlRenderer.Builder;
						public attributeProviderFactory(attributeProviderFactory: org.commonmark.renderer.html.AttributeProviderFactory): org.commonmark.renderer.html.HtmlRenderer.Builder;
						public constructor();
						public escapeHtml(escapeHtml: boolean): org.commonmark.renderer.html.HtmlRenderer.Builder;
						public build(): org.commonmark.renderer.html.HtmlRenderer;
						public softbreak(softbreak: string): org.commonmark.renderer.html.HtmlRenderer.Builder;
						public nodeRendererFactory(nodeRendererFactory: org.commonmark.renderer.html.HtmlNodeRendererFactory): org.commonmark.renderer.html.HtmlRenderer.Builder;
						public extensions(extensions: java.lang.Iterable<any>): org.commonmark.renderer.html.HtmlRenderer.Builder;
					}
					export class HtmlRendererExtension extends java.lang.Object implements org.commonmark.Extension {
						public static class: java.lang.Class<org.commonmark.renderer.html.HtmlRenderer.HtmlRendererExtension>;
						/**
						 * Constructs a new instance of the org.commonmark.renderer.html.HtmlRenderer$HtmlRendererExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							extend(param0: org.commonmark.renderer.html.HtmlRenderer.Builder): void;
						});
						public constructor();
						public extend(param0: org.commonmark.renderer.html.HtmlRenderer.Builder): void;
					}
					export class RendererContext extends java.lang.Object implements org.commonmark.renderer.html.HtmlNodeRendererContext, org.commonmark.renderer.html.AttributeProviderContext {
						public static class: java.lang.Class<org.commonmark.renderer.html.HtmlRenderer.RendererContext>;
						public getSoftbreak(): string;
						public render(param0: org.commonmark.node.Node): void;
						public extendAttributes(node: org.commonmark.node.Node, tagName: string, attributes: java.util.Map<string,string>): java.util.Map<string,string>;
						public getWriter(): org.commonmark.renderer.html.HtmlWriter;
						public render(node: org.commonmark.node.Node): void;
						public encodeUrl(param0: string): string;
						public shouldEscapeHtml(): boolean;
						public extendAttributes(param0: org.commonmark.node.Node, param1: string, param2: java.util.Map<string,string>): java.util.Map<string,string>;
						public encodeUrl(url: string): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module html {
				export class HtmlWriter extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.renderer.html.HtmlWriter>;
					public text(text: string): void;
					public tag(name: string, attrs: java.util.Map<string,string>, voidElement: boolean): void;
					public append(s: string): void;
					public raw(s: string): void;
					public tag(name: string, attrs: java.util.Map<string,string>): void;
					public constructor(out: java.lang.Appendable);
					public line(): void;
					public tag(name: string): void;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module text {
				export class CoreTextContentNodeRenderer extends org.commonmark.node.AbstractVisitor implements org.commonmark.renderer.NodeRenderer {
					public static class: java.lang.Class<org.commonmark.renderer.text.CoreTextContentNodeRenderer>;
					public context: org.commonmark.renderer.text.TextContentNodeRendererContext;
					public visit(htmlBlock: org.commonmark.node.HtmlBlock): void;
					public render(node: org.commonmark.node.Node): void;
					public visit(param0: org.commonmark.node.Emphasis): void;
					public visit(param0: org.commonmark.node.HardLineBreak): void;
					public visit(strongEmphasis: org.commonmark.node.StrongEmphasis): void;
					public visit(param0: org.commonmark.node.ListItem): void;
					public visitChildren(parent: org.commonmark.node.Node): void;
					public constructor();
					public visit(listItem: org.commonmark.node.ListItem): void;
					public visit(param0: org.commonmark.node.IndentedCodeBlock): void;
					public visit(paragraph: org.commonmark.node.Paragraph): void;
					public visit(orderedList: org.commonmark.node.OrderedList): void;
					public visit(param0: org.commonmark.node.StrongEmphasis): void;
					public getNodeTypes(): java.util.Set<java.lang.Class<any>>;
					public visit(param0: org.commonmark.node.HtmlBlock): void;
					public visit(param0: org.commonmark.node.Image): void;
					public visit(blockQuote: org.commonmark.node.BlockQuote): void;
					public visit(param0: org.commonmark.node.BulletList): void;
					public visit(emphasis: org.commonmark.node.Emphasis): void;
					public visit(fencedCodeBlock: org.commonmark.node.FencedCodeBlock): void;
					public visit(softLineBreak: org.commonmark.node.SoftLineBreak): void;
					public visit(customBlock: org.commonmark.node.CustomBlock): void;
					public visit(param0: org.commonmark.node.CustomBlock): void;
					public visit(param0: org.commonmark.node.Paragraph): void;
					public visit(param0: org.commonmark.node.SoftLineBreak): void;
					public visit(image: org.commonmark.node.Image): void;
					public visit(code: org.commonmark.node.Code): void;
					public visit(param0: org.commonmark.node.Heading): void;
					public visit(param0: org.commonmark.node.Text): void;
					public visit(document: org.commonmark.node.Document): void;
					public visit(param0: org.commonmark.node.FencedCodeBlock): void;
					public visit(param0: org.commonmark.node.HtmlInline): void;
					public visit(thematicBreak: org.commonmark.node.ThematicBreak): void;
					public visit(param0: org.commonmark.node.ThematicBreak): void;
					public visit(heading: org.commonmark.node.Heading): void;
					public visit(param0: org.commonmark.node.BlockQuote): void;
					public constructor(context: org.commonmark.renderer.text.TextContentNodeRendererContext);
					public render(param0: org.commonmark.node.Node): void;
					public visit(htmlInline: org.commonmark.node.HtmlInline): void;
					public visit(indentedCodeBlock: org.commonmark.node.IndentedCodeBlock): void;
					public visit(customNode: org.commonmark.node.CustomNode): void;
					public visit(param0: org.commonmark.node.Code): void;
					public visit(bulletList: org.commonmark.node.BulletList): void;
					public visit(text: org.commonmark.node.Text): void;
					public visit(param0: org.commonmark.node.OrderedList): void;
					public visit(param0: org.commonmark.node.CustomNode): void;
					public visit(param0: org.commonmark.node.Link): void;
					public visit(param0: org.commonmark.node.Document): void;
					public visit(hardLineBreak: org.commonmark.node.HardLineBreak): void;
					public visit(link: org.commonmark.node.Link): void;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module text {
				export class TextContentNodeRendererContext extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.renderer.text.TextContentNodeRendererContext>;
					/**
					 * Constructs a new instance of the org.commonmark.renderer.text.TextContentNodeRendererContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						stripNewlines(): boolean;
						getWriter(): org.commonmark.renderer.text.TextContentWriter;
						render(param0: org.commonmark.node.Node): void;
					});
					public constructor();
					public stripNewlines(): boolean;
					public getWriter(): org.commonmark.renderer.text.TextContentWriter;
					public render(param0: org.commonmark.node.Node): void;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module text {
				export class TextContentNodeRendererFactory extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.renderer.text.TextContentNodeRendererFactory>;
					/**
					 * Constructs a new instance of the org.commonmark.renderer.text.TextContentNodeRendererFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: org.commonmark.renderer.text.TextContentNodeRendererContext): org.commonmark.renderer.NodeRenderer;
					});
					public constructor();
					public create(param0: org.commonmark.renderer.text.TextContentNodeRendererContext): org.commonmark.renderer.NodeRenderer;
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module text {
				export class TextContentRenderer extends java.lang.Object implements org.commonmark.renderer.Renderer {
					public static class: java.lang.Class<org.commonmark.renderer.text.TextContentRenderer>;
					public render(param0: org.commonmark.node.Node, param1: java.lang.Appendable): void;
					public render(node: org.commonmark.node.Node): string;
					public static builder(): org.commonmark.renderer.text.TextContentRenderer.Builder;
					public render(node: org.commonmark.node.Node, output: java.lang.Appendable): void;
					public render(param0: org.commonmark.node.Node): string;
				}
				export module TextContentRenderer {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<org.commonmark.renderer.text.TextContentRenderer.Builder>;
						public stripNewlines(stripNewlines: boolean): org.commonmark.renderer.text.TextContentRenderer.Builder;
						public constructor();
						public extensions(extensions: java.lang.Iterable<any>): org.commonmark.renderer.text.TextContentRenderer.Builder;
						public build(): org.commonmark.renderer.text.TextContentRenderer;
						public nodeRendererFactory(nodeRendererFactory: org.commonmark.renderer.text.TextContentNodeRendererFactory): org.commonmark.renderer.text.TextContentRenderer.Builder;
					}
					export class RendererContext extends java.lang.Object implements org.commonmark.renderer.text.TextContentNodeRendererContext {
						public static class: java.lang.Class<org.commonmark.renderer.text.TextContentRenderer.RendererContext>;
						public stripNewlines(): boolean;
						public render(param0: org.commonmark.node.Node): void;
						public render(node: org.commonmark.node.Node): void;
						public getWriter(): org.commonmark.renderer.text.TextContentWriter;
					}
					export class TextContentRendererExtension extends java.lang.Object implements org.commonmark.Extension {
						public static class: java.lang.Class<org.commonmark.renderer.text.TextContentRenderer.TextContentRendererExtension>;
						/**
						 * Constructs a new instance of the org.commonmark.renderer.text.TextContentRenderer$TextContentRendererExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							extend(param0: org.commonmark.renderer.text.TextContentRenderer.Builder): void;
						});
						public constructor();
						public extend(param0: org.commonmark.renderer.text.TextContentRenderer.Builder): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module commonmark {
		export module renderer {
			export module text {
				export class TextContentWriter extends java.lang.Object {
					public static class: java.lang.Class<org.commonmark.renderer.text.TextContentWriter>;
					public writeStripped(s: string): void;
					public write(s: string): void;
					public colon(): void;
					public constructor(out: java.lang.Appendable);
					public whitespace(): void;
					public line(): void;
					public write(c: string): void;
				}
			}
		}
	}
}

//Generics information:

