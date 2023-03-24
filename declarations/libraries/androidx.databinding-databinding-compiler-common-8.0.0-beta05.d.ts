declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class ANTLRErrorListener extends java.lang.Object {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorListener>;
								/**
								 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									syntaxError(param0: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, param1: any, param2: number, param3: number, param4: string, param5: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
									reportAmbiguity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: boolean, param5: java.util.BitSet, param6: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
									reportAttemptingFullContext(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: java.util.BitSet, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
									reportContextSensitivity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: number, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								});
								public constructor();
								public reportAttemptingFullContext(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: java.util.BitSet, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public reportAmbiguity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: boolean, param5: java.util.BitSet, param6: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public syntaxError(param0: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, param1: any, param2: number, param3: number, param4: string, param5: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportContextSensitivity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: number, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class ANTLRErrorStrategy extends java.lang.Object {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorStrategy>;
								/**
								 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									reset(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
									recoverInline(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): android.databinding.internal.org.antlr.v4.runtime.Token;
									recover(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
									sync(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
									inErrorRecoveryMode(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): boolean;
									reportMatch(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
									reportError(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								});
								public constructor();
								public reportError(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public recover(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportMatch(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public reset(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public recoverInline(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): android.databinding.internal.org.antlr.v4.runtime.Token;
								public sync(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public inErrorRecoveryMode(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class ANTLRFileStream extends android.databinding.internal.org.antlr.v4.runtime.ANTLRInputStream {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.ANTLRFileStream>;
								public fileName: string;
								public constructor(input: java.io.InputStream);
								public load(fileName: string, encoding: string): void;
								public constructor();
								public constructor(fileName: string, encoding: string);
								public load(r: java.io.Reader, size: number, readChunkSize: number): void;
								public getSourceName(): string;
								public constructor(input: string);
								public constructor(r: java.io.Reader, initialSize: number);
								public constructor(r: java.io.Reader, initialSize: number, readChunkSize: number);
								public getText(interval: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public constructor(input: java.io.InputStream, initialSize: number);
								public constructor(data: string[], numberOfActualCharsInArray: number);
								public constructor(input: java.io.InputStream, initialSize: number, readChunkSize: number);
								public constructor(r: java.io.Reader);
								public constructor(fileName: string);
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class ANTLRInputStream extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.CharStream {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.ANTLRInputStream>;
								public static READ_BUFFER_SIZE: number;
								public static INITIAL_BUFFER_SIZE: number;
								public data: string[];
								public n: number;
								public p: number;
								public name: string;
								public toString(): string;
								public size(): number;
								public constructor(input: java.io.InputStream);
								public LA(i: number): number;
								public LT(i: number): number;
								public mark(): number;
								public load(r: java.io.Reader, size: number, readChunkSize: number): void;
								public seek(param0: number): void;
								public getSourceName(): string;
								public constructor(input: string);
								public constructor(r: java.io.Reader, initialSize: number);
								public constructor(r: java.io.Reader, initialSize: number, readChunkSize: number);
								public getText(interval: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public constructor(data: string[], numberOfActualCharsInArray: number);
								public constructor(input: java.io.InputStream, initialSize: number, readChunkSize: number);
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public index(): number;
								public release(marker: number): void;
								public constructor();
								public LA(param0: number): number;
								public constructor(input: java.io.InputStream, initialSize: number);
								public consume(): void;
								public reset(): void;
								public constructor(r: java.io.Reader);
								public release(param0: number): void;
								public seek(index: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class BailErrorStrategy extends android.databinding.internal.org.antlr.v4.runtime.DefaultErrorStrategy {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.BailErrorStrategy>;
								public inErrorRecoveryMode(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): boolean;
								public reportError(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, e: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public constructor();
								public sync(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public reportMatch(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public recover(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, e: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportMatch(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public reportError(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public recoverInline(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): android.databinding.internal.org.antlr.v4.runtime.Token;
								public recover(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reset(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public reset(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public recoverInline(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): android.databinding.internal.org.antlr.v4.runtime.Token;
								public sync(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public inErrorRecoveryMode(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class BaseErrorListener extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorListener {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.BaseErrorListener>;
								public reportContextSensitivity(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, prediction: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public reportAttemptingFullContext(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: java.util.BitSet, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public constructor();
								public reportAmbiguity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: boolean, param5: java.util.BitSet, param6: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public syntaxError(recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, offendingSymbol: any, line: number, charPositionInLine: number, msg: string, e: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportAmbiguity(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public reportAttemptingFullContext(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, conflictingAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public syntaxError(param0: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, param1: any, param2: number, param3: number, param4: string, param5: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportContextSensitivity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: number, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class BufferedTokenStream extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.TokenStream {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.BufferedTokenStream>;
								public tokenSource: android.databinding.internal.org.antlr.v4.runtime.TokenSource;
								public tokens: java.util.List<android.databinding.internal.org.antlr.v4.runtime.Token>;
								public p: number;
								public fetchedEOF: boolean;
								public getTokens(start: number, stop: number): java.util.List<android.databinding.internal.org.antlr.v4.runtime.Token>;
								public adjustSeekIndex(i: number): number;
								public size(): number;
								public getHiddenTokensToRight(tokenIndex: number): java.util.List<android.databinding.internal.org.antlr.v4.runtime.Token>;
								public getHiddenTokensToLeft(tokenIndex: number, channel: number): java.util.List<android.databinding.internal.org.antlr.v4.runtime.Token>;
								public LA(i: number): number;
								public fetch(n: number): number;
								public nextTokenOnChannel(i: number, channel: number): number;
								public fill(): void;
								public mark(): number;
								public setTokenSource(tokenSource: android.databinding.internal.org.antlr.v4.runtime.TokenSource): void;
								public getTokens(start: number, stop: number, ttype: number): java.util.List<android.databinding.internal.org.antlr.v4.runtime.Token>;
								public seek(param0: number): void;
								public getSourceName(): string;
								public constructor(tokenSource: android.databinding.internal.org.antlr.v4.runtime.TokenSource);
								public get(start: number, stop: number): java.util.List<android.databinding.internal.org.antlr.v4.runtime.Token>;
								public getText(interval: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public getTokens(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.Token>;
								public getTokens(start: number, stop: number, types: java.util.Set<java.lang.Integer>): java.util.List<android.databinding.internal.org.antlr.v4.runtime.Token>;
								public previousTokenOnChannel(i: number, channel: number): number;
								public getText(): string;
								public LB(k: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public get(param0: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public LT(k: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public index(): number;
								public LT(param0: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getTokenSource(): android.databinding.internal.org.antlr.v4.runtime.TokenSource;
								public filterForChannel(from: number, to: number, channel: number): java.util.List<android.databinding.internal.org.antlr.v4.runtime.Token>;
								public release(marker: number): void;
								public setup(): void;
								public getHiddenTokensToRight(tokenIndex: number, channel: number): java.util.List<android.databinding.internal.org.antlr.v4.runtime.Token>;
								public getHiddenTokensToLeft(tokenIndex: number): java.util.List<android.databinding.internal.org.antlr.v4.runtime.Token>;
								public LA(param0: number): number;
								public getText(start: android.databinding.internal.org.antlr.v4.runtime.Token, stop: android.databinding.internal.org.antlr.v4.runtime.Token): string;
								public get(i: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public consume(): void;
								public reset(): void;
								public lazyInit(): void;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.Token, param1: android.databinding.internal.org.antlr.v4.runtime.Token): string;
								public getText(ctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext): string;
								public release(param0: number): void;
								public sync(i: number): boolean;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.RuleContext): string;
								public seek(index: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class CharStream extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.IntStream {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.CharStream>;
								/**
								 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.CharStream interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getText(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
									consume(): void;
									LA(param0: number): number;
									mark(): number;
									release(param0: number): void;
									index(): number;
									seek(param0: number): void;
									size(): number;
									getSourceName(): string;
								});
								public constructor();
								public static EOF: number;
								public static UNKNOWN_SOURCE_NAME: string;
								public LA(param0: number): number;
								public index(): number;
								public size(): number;
								public consume(): void;
								public mark(): number;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public release(param0: number): void;
								public seek(param0: number): void;
								public getSourceName(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class CommonToken extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.WritableToken, java.io.Serializable {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.CommonToken>;
								public static EMPTY_SOURCE: android.databinding.internal.org.antlr.v4.runtime.misc.Pair<android.databinding.internal.org.antlr.v4.runtime.TokenSource,android.databinding.internal.org.antlr.v4.runtime.CharStream>;
								public type: number;
								public line: number;
								public charPositionInLine: number;
								public channel: number;
								public source: android.databinding.internal.org.antlr.v4.runtime.misc.Pair<android.databinding.internal.org.antlr.v4.runtime.TokenSource,android.databinding.internal.org.antlr.v4.runtime.CharStream>;
								public text: string;
								public index: number;
								public start: number;
								public stop: number;
								public toString(): string;
								public setTokenIndex(param0: number): void;
								public setStartIndex(start: number): void;
								public getTokenIndex(): number;
								public setText(param0: string): void;
								public getCharPositionInLine(): number;
								public setText(text: string): void;
								public setType(type: number): void;
								public setLine(param0: number): void;
								public constructor(oldToken: android.databinding.internal.org.antlr.v4.runtime.Token);
								public getText(): string;
								public getStartIndex(): number;
								public constructor(type: number);
								public constructor(type: number, text: string);
								public setChannel(param0: number): void;
								public setChannel(channel: number): void;
								public setCharPositionInLine(charPositionInLine: number): void;
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
								public getTokenSource(): android.databinding.internal.org.antlr.v4.runtime.TokenSource;
								public setTokenIndex(index: number): void;
								public setCharPositionInLine(param0: number): void;
								public constructor(source: android.databinding.internal.org.antlr.v4.runtime.misc.Pair<android.databinding.internal.org.antlr.v4.runtime.TokenSource,android.databinding.internal.org.antlr.v4.runtime.CharStream>, type: number, channel: number, start: number, stop: number);
								public setStopIndex(stop: number): void;
								public getChannel(): number;
								public getStopIndex(): number;
								public getType(): number;
								public setType(param0: number): void;
								public setLine(line: number): void;
								public getLine(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class CommonTokenFactory extends android.databinding.internal.org.antlr.v4.runtime.TokenFactory<android.databinding.internal.org.antlr.v4.runtime.CommonToken> {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.CommonTokenFactory>;
								public static DEFAULT: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<android.databinding.internal.org.antlr.v4.runtime.CommonToken>;
								public copyText: boolean;
								public create(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Pair<android.databinding.internal.org.antlr.v4.runtime.TokenSource,android.databinding.internal.org.antlr.v4.runtime.CharStream>, param1: number, param2: string, param3: number, param4: number, param5: number, param6: number, param7: number): any;
								public create(type: number, text: string): android.databinding.internal.org.antlr.v4.runtime.CommonToken;
								public create(source: android.databinding.internal.org.antlr.v4.runtime.misc.Pair<android.databinding.internal.org.antlr.v4.runtime.TokenSource,android.databinding.internal.org.antlr.v4.runtime.CharStream>, type: number, text: string, channel: number, start: number, stop: number, line: number, charPositionInLine: number): android.databinding.internal.org.antlr.v4.runtime.CommonToken;
								public create(param0: number, param1: string): any;
								public constructor();
								public constructor(copyText: boolean);
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class CommonTokenStream extends android.databinding.internal.org.antlr.v4.runtime.BufferedTokenStream {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.CommonTokenStream>;
								public channel: number;
								public get(param0: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public adjustSeekIndex(i: number): number;
								public LT(k: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public LT(param0: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getTokenSource(): android.databinding.internal.org.antlr.v4.runtime.TokenSource;
								public getNumberOfOnChannelTokens(): number;
								public constructor(tokenSource: android.databinding.internal.org.antlr.v4.runtime.TokenSource);
								public get(start: number, stop: number): java.util.List<android.databinding.internal.org.antlr.v4.runtime.Token>;
								public getText(interval: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public getText(start: android.databinding.internal.org.antlr.v4.runtime.Token, stop: android.databinding.internal.org.antlr.v4.runtime.Token): string;
								public get(i: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getText(): string;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.Token, param1: android.databinding.internal.org.antlr.v4.runtime.Token): string;
								public LB(k: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public constructor(tokenSource: android.databinding.internal.org.antlr.v4.runtime.TokenSource, channel: number);
								public getText(ctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext): string;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.RuleContext): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class ConsoleErrorListener extends android.databinding.internal.org.antlr.v4.runtime.BaseErrorListener {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.ConsoleErrorListener>;
								public static INSTANCE: android.databinding.internal.org.antlr.v4.runtime.ConsoleErrorListener;
								public reportContextSensitivity(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, prediction: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public reportAttemptingFullContext(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: java.util.BitSet, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public constructor();
								public reportAmbiguity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: boolean, param5: java.util.BitSet, param6: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public syntaxError(recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, offendingSymbol: any, line: number, charPositionInLine: number, msg: string, e: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportAmbiguity(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public syntaxError(param0: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, param1: any, param2: number, param3: number, param4: string, param5: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportAttemptingFullContext(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, conflictingAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public reportContextSensitivity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: number, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class DefaultErrorStrategy extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorStrategy {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.DefaultErrorStrategy>;
								public errorRecoveryMode: boolean;
								public lastErrorIndex: number;
								public lastErrorStates: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
								public reportNoViableAlternative(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, e: android.databinding.internal.org.antlr.v4.runtime.NoViableAltException): void;
								public inErrorRecoveryMode(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): boolean;
								public getSymbolType(symbol: android.databinding.internal.org.antlr.v4.runtime.Token): number;
								public singleTokenDeletion(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): android.databinding.internal.org.antlr.v4.runtime.Token;
								public reportMatch(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public reportMissingToken(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public beginErrorCondition(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public consumeUntil(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, set: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet): void;
								public reportError(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportFailedPredicate(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, e: android.databinding.internal.org.antlr.v4.runtime.FailedPredicateException): void;
								public getSymbolText(symbol: android.databinding.internal.org.antlr.v4.runtime.Token): string;
								public getErrorRecoverySet(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
								public recoverInline(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): android.databinding.internal.org.antlr.v4.runtime.Token;
								public sync(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public inErrorRecoveryMode(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): boolean;
								public escapeWSAndQuote(s: string): string;
								public getTokenErrorDisplay(t: android.databinding.internal.org.antlr.v4.runtime.Token): string;
								public getMissingSymbol(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): android.databinding.internal.org.antlr.v4.runtime.Token;
								public reportError(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, e: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public singleTokenInsertion(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): boolean;
								public constructor();
								public sync(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public reportMatch(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public getExpectedTokens(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
								public recover(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, e: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportUnwantedToken(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public recoverInline(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): android.databinding.internal.org.antlr.v4.runtime.Token;
								public recover(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportInputMismatch(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, e: android.databinding.internal.org.antlr.v4.runtime.InputMismatchException): void;
								public reset(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public reset(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
								public endErrorCondition(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class DiagnosticErrorListener extends android.databinding.internal.org.antlr.v4.runtime.BaseErrorListener {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.DiagnosticErrorListener>;
								public exactOnly: boolean;
								public constructor(exactOnly: boolean);
								public reportContextSensitivity(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, prediction: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public getConflictingAlts(reportedAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): java.util.BitSet;
								public reportAttemptingFullContext(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: java.util.BitSet, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public constructor();
								public reportAmbiguity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: boolean, param5: java.util.BitSet, param6: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public reportAmbiguity(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public getDecisionDescription(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA): string;
								public syntaxError(recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, offendingSymbol: any, line: number, charPositionInLine: number, msg: string, e: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportAttemptingFullContext(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, conflictingAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public syntaxError(param0: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, param1: any, param2: number, param3: number, param4: string, param5: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportContextSensitivity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: number, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class FailedPredicateException extends android.databinding.internal.org.antlr.v4.runtime.RecognitionException {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.FailedPredicateException>;
								public constructor(message: string);
								public constructor(cause: java.lang.Throwable);
								public getRuleIndex(): number;
								public getPredicate(): string;
								public constructor(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, predicate: string, message: string);
								public constructor();
								public constructor(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser);
								public constructor(message: string, recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, input: android.databinding.internal.org.antlr.v4.runtime.IntStream, ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext);
								public constructor(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, predicate: string);
								public constructor(recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, input: android.databinding.internal.org.antlr.v4.runtime.IntStream, ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext);
								public constructor(message: string, cause: java.lang.Throwable);
								public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
								public getPredIndex(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class InputMismatchException extends android.databinding.internal.org.antlr.v4.runtime.RecognitionException {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.InputMismatchException>;
								public constructor(message: string, recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, input: android.databinding.internal.org.antlr.v4.runtime.IntStream, ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext);
								public constructor(message: string);
								public constructor(cause: java.lang.Throwable);
								public constructor(recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, input: android.databinding.internal.org.antlr.v4.runtime.IntStream, ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext);
								public constructor(message: string, cause: java.lang.Throwable);
								public constructor();
								public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
								public constructor(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser);
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class IntStream extends java.lang.Object {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.IntStream>;
								/**
								 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.IntStream interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									consume(): void;
									LA(param0: number): number;
									mark(): number;
									release(param0: number): void;
									index(): number;
									seek(param0: number): void;
									size(): number;
									getSourceName(): string;
								});
								public constructor();
								public static EOF: number;
								public static UNKNOWN_SOURCE_NAME: string;
								public LA(param0: number): number;
								public index(): number;
								public size(): number;
								public consume(): void;
								public mark(): number;
								public release(param0: number): void;
								public seek(param0: number): void;
								public getSourceName(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class InterpreterRuleContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.InterpreterRuleContext>;
								public ruleIndex: number;
								public getRuleIndex(): number;
								public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
								public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
								public constructor();
								public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number, ruleIndex: number);
								public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
								public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export abstract class Lexer extends android.databinding.internal.org.antlr.v4.runtime.Recognizer<java.lang.Integer,android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNSimulator> implements android.databinding.internal.org.antlr.v4.runtime.TokenSource  {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.Lexer>;
								public static DEFAULT_MODE: number;
								public static MORE: number;
								public static SKIP: number;
								public static DEFAULT_TOKEN_CHANNEL: number;
								public static HIDDEN: number;
								public static MIN_CHAR_VALUE: number;
								public static MAX_CHAR_VALUE: number;
								public _input: android.databinding.internal.org.antlr.v4.runtime.CharStream;
								public _tokenFactorySourcePair: android.databinding.internal.org.antlr.v4.runtime.misc.Pair<android.databinding.internal.org.antlr.v4.runtime.TokenSource,android.databinding.internal.org.antlr.v4.runtime.CharStream>;
								public _factory: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>;
								public _token: android.databinding.internal.org.antlr.v4.runtime.Token;
								public _tokenStartCharIndex: number;
								public _tokenStartLine: number;
								public _tokenStartCharPositionInLine: number;
								public _hitEOF: boolean;
								public _channel: number;
								public _type: number;
								public _modeStack: android.databinding.internal.org.antlr.v4.runtime.misc.IntegerStack;
								public _mode: number;
								public _text: string;
								public emit(token: android.databinding.internal.org.antlr.v4.runtime.Token): void;
								public setType(ttype: number): void;
								public getCharIndex(): number;
								public constructor(input: android.databinding.internal.org.antlr.v4.runtime.CharStream);
								public getAllTokens(): java.util.List<any>;
								public skip(): void;
								public setToken(_token: android.databinding.internal.org.antlr.v4.runtime.Token): void;
								public getTokenFactory(): android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>;
								public recover(re: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public getSourceName(): string;
								public setTokenFactory(factory: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
								public getCharPositionInLine(): number;
								public setText(text: string): void;
								public getText(): string;
								public emit(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public setInputStream(param0: android.databinding.internal.org.antlr.v4.runtime.IntStream): void;
								public emitEOF(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public popMode(): number;
								public setInputStream(input: android.databinding.internal.org.antlr.v4.runtime.IntStream): void;
								public setChannel(channel: number): void;
								public getModeNames(): string[];
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
								public setCharPositionInLine(charPositionInLine: number): void;
								/** @deprecated */
								public getTokenNames(): string[];
								public getToken(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public constructor();
								public pushMode(m: number): void;
								public nextToken(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getErrorDisplay(s: string): string;
								public more(): void;
								public getCharErrorDisplay(c: number): string;
								public getChannel(): number;
								public getType(): number;
								public reset(): void;
								public getLine(): number;
								public setLine(line: number): void;
								public setTokenFactory(param0: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
								public mode(m: number): void;
								public getErrorDisplay(c: number): string;
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.IntStream;
								public recover(e: android.databinding.internal.org.antlr.v4.runtime.LexerNoViableAltException): void;
								public notifyListeners(e: android.databinding.internal.org.antlr.v4.runtime.LexerNoViableAltException): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class LexerInterpreter extends android.databinding.internal.org.antlr.v4.runtime.Lexer {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.LexerInterpreter>;
								public grammarFileName: string;
								public atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
								public tokenNames: string[];
								public ruleNames: string[];
								public modeNames: string[];
								public _decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[];
								public _sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache;
								public constructor(grammarFileName: string, vocabulary: android.databinding.internal.org.antlr.v4.runtime.Vocabulary, ruleNames: java.util.Collection<string>, modeNames: java.util.Collection<string>, atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, input: android.databinding.internal.org.antlr.v4.runtime.CharStream);
								public getVocabulary(): android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
								public getModeNames(): string[];
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
								public constructor(input: android.databinding.internal.org.antlr.v4.runtime.CharStream);
								/** @deprecated */
								public constructor(grammarFileName: string, tokenNames: java.util.Collection<string>, ruleNames: java.util.Collection<string>, modeNames: java.util.Collection<string>, atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, input: android.databinding.internal.org.antlr.v4.runtime.CharStream);
								/** @deprecated */
								public getTokenNames(): string[];
								public constructor();
								public getTokenFactory(): android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>;
								public nextToken(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getSourceName(): string;
								public getCharPositionInLine(): number;
								public setTokenFactory(factory: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
								public getRuleNames(): string[];
								public getLine(): number;
								public setTokenFactory(param0: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
								public getATN(): android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
								public getGrammarFileName(): string;
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.IntStream;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class LexerNoViableAltException extends android.databinding.internal.org.antlr.v4.runtime.RecognitionException {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.LexerNoViableAltException>;
								public toString(): string;
								public constructor(message: string);
								public constructor(cause: java.lang.Throwable);
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
								public constructor(lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer, input: android.databinding.internal.org.antlr.v4.runtime.CharStream, startIndex: number, deadEndConfigs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet);
								public constructor();
								public constructor(message: string, recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, input: android.databinding.internal.org.antlr.v4.runtime.IntStream, ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext);
								public constructor(recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, input: android.databinding.internal.org.antlr.v4.runtime.IntStream, ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext);
								public constructor(message: string, cause: java.lang.Throwable);
								public getDeadEndConfigs(): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet;
								public getStartIndex(): number;
								public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.IntStream;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class ListTokenSource extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.TokenSource {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.ListTokenSource>;
								public tokens: java.util.List<any>;
								public i: number;
								public eofToken: android.databinding.internal.org.antlr.v4.runtime.Token;
								public constructor(tokens: java.util.List<any>, sourceName: string);
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
								public constructor(tokens: java.util.List<any>);
								public getLine(): number;
								public getTokenFactory(): android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>;
								public setTokenFactory(param0: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
								public nextToken(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getSourceName(): string;
								public getCharPositionInLine(): number;
								public setTokenFactory(factory: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class NoViableAltException extends android.databinding.internal.org.antlr.v4.runtime.RecognitionException {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.NoViableAltException>;
								public constructor(message: string, recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, input: android.databinding.internal.org.antlr.v4.runtime.IntStream, ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext);
								public constructor(message: string);
								public constructor(cause: java.lang.Throwable);
								public constructor(recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, input: android.databinding.internal.org.antlr.v4.runtime.IntStream, ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext);
								public constructor(message: string, cause: java.lang.Throwable);
								public constructor();
								public getDeadEndConfigs(): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet;
								public getStartToken(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
								public constructor(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startToken: android.databinding.internal.org.antlr.v4.runtime.Token, offendingToken: android.databinding.internal.org.antlr.v4.runtime.Token, deadEndConfigs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext);
								public constructor(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser);
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export abstract class Parser extends android.databinding.internal.org.antlr.v4.runtime.Recognizer<android.databinding.internal.org.antlr.v4.runtime.Token,android.databinding.internal.org.antlr.v4.runtime.atn.ParserATNSimulator> {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.Parser>;
								public _errHandler: android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorStrategy;
								public _input: android.databinding.internal.org.antlr.v4.runtime.TokenStream;
								public _precedenceStack: android.databinding.internal.org.antlr.v4.runtime.misc.IntegerStack;
								public _ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
								public _buildParseTrees: boolean;
								public _parseListeners: java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener>;
								public _syntaxErrors: number;
								public matchedEOF: boolean;
								public triggerEnterRuleEvent(): void;
								public removeParseListeners(): void;
								public getDFAStrings(): java.util.List<string>;
								public compileParseTreePattern(pattern: string, patternRuleIndex: number): android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePattern;
								public constructor(input: android.databinding.internal.org.antlr.v4.runtime.TokenStream);
								public getRuleInvocationStack(p: android.databinding.internal.org.antlr.v4.runtime.RuleContext): java.util.List<string>;
								public removeParseListener(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
								/** @deprecated */
								public enterRecursionRule(localctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, ruleIndex: number): void;
								public setTokenFactory(factory: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
								public precpred(localctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext, precedence: number): boolean;
								public matchWildcard(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public consume(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public isTrace(): boolean;
								public notifyErrorListeners(msg: string): void;
								public getNumberOfSyntaxErrors(): number;
								public setErrorHandler(handler: android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorStrategy): void;
								public compileParseTreePattern(pattern: string, patternRuleIndex: number, lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer): android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePattern;
								public setInputStream(param0: android.databinding.internal.org.antlr.v4.runtime.IntStream): void;
								public setInputStream(input: android.databinding.internal.org.antlr.v4.runtime.IntStream): void;
								public unrollRecursionContexts(_parentctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
								public constructor();
								public notifyErrorListeners(offendingToken: android.databinding.internal.org.antlr.v4.runtime.Token, msg: string, e: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public getBuildParseTree(): boolean;
								public getParseListeners(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener>;
								public enterRecursionRule(localctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, state: number, ruleIndex: number, precedence: number): void;
								public addContextToParseTree(): void;
								public getExpectedTokensWithinCurrentRule(): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
								public getRuleIndex(ruleName: string): number;
								public setTokenStream(input: android.databinding.internal.org.antlr.v4.runtime.TokenStream): void;
								public setProfile(profile: boolean): void;
								public reset(): void;
								public exitRule(): void;
								public setTokenFactory(param0: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
								public dumpDFA(): void;
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.IntStream;
								public isMatchedEOF(): boolean;
								public match(ttype: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getInvokingContext(ruleIndex: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
								public pushNewRecursionContext(localctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, state: number, ruleIndex: number): void;
								public getTokenFactory(): android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>;
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.TokenStream;
								public enterRule(localctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, state: number, ruleIndex: number): void;
								public getSourceName(): string;
								public setContext(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
								public getExpectedTokens(): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
								public getContext(): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
								public getRuleInvocationStack(): java.util.List<string>;
								public enterOuterAlt(localctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, altNum: number): void;
								public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
								public getPrecedence(): number;
								public setBuildParseTree(buildParseTrees: boolean): void;
								public triggerExitRuleEvent(): void;
								public setTrace(trace: boolean): void;
								public getTokenStream(): android.databinding.internal.org.antlr.v4.runtime.TokenStream;
								public addParseListener(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
								public isExpectedToken(symbol: number): boolean;
								public getParseInfo(): android.databinding.internal.org.antlr.v4.runtime.atn.ParseInfo;
								public getTrimParseTree(): boolean;
								public getATNWithBypassAlts(): android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
								public inContext(context: string): boolean;
								public getCurrentToken(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public setTrimParseTree(trimParseTrees: boolean): void;
								public getErrorHandler(): android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorStrategy;
							}
							export module Parser {
								export class TraceListener extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.Parser.TraceListener>;
									public visitErrorNode(node: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
									public enterEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
									public constructor(param0: android.databinding.internal.org.antlr.v4.runtime.Parser);
									public visitTerminal(node: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
									public exitEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
									public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
									public enterEveryRule(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
									public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
									public exitEveryRule(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
								}
								export class TrimToSizeListener extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.Parser.TrimToSizeListener>;
									public static INSTANCE: android.databinding.internal.org.antlr.v4.runtime.Parser.TrimToSizeListener;
									public constructor();
									public visitErrorNode(node: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
									public enterEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
									public visitTerminal(node: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
									public exitEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
									public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
									public enterEveryRule(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
									public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
									public exitEveryRule(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class ParserInterpreter extends android.databinding.internal.org.antlr.v4.runtime.Parser {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.ParserInterpreter>;
								public grammarFileName: string;
								public atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
								public decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[];
								public sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache;
								public tokenNames: string[];
								public ruleNames: string[];
								public _parentContextStack: java.util.Deque<android.databinding.internal.org.antlr.v4.runtime.misc.Pair<android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext,java.lang.Integer>>;
								public overrideDecision: number;
								public overrideDecisionInputIndex: number;
								public overrideDecisionAlt: number;
								public overrideDecisionReached: boolean;
								public overrideDecisionRoot: android.databinding.internal.org.antlr.v4.runtime.InterpreterRuleContext;
								public rootContext: android.databinding.internal.org.antlr.v4.runtime.InterpreterRuleContext;
								public constructor(grammarFileName: string, vocabulary: android.databinding.internal.org.antlr.v4.runtime.Vocabulary, ruleNames: java.util.Collection<string>, atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream);
								public getVocabulary(): android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
								public recover(e: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								/** @deprecated */
								public constructor(grammarFileName: string, tokenNames: java.util.Collection<string>, ruleNames: java.util.Collection<string>, atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream);
								/** @deprecated */
								public getTokenNames(): string[];
								public getRootContext(): android.databinding.internal.org.antlr.v4.runtime.InterpreterRuleContext;
								public constructor(input: android.databinding.internal.org.antlr.v4.runtime.TokenStream);
								public constructor();
								/** @deprecated */
								public enterRecursionRule(localctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, ruleIndex: number): void;
								public recoverInline(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public enterRecursionRule(localctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, state: number, ruleIndex: number, precedence: number): void;
								public getOverrideDecisionRoot(): android.databinding.internal.org.antlr.v4.runtime.InterpreterRuleContext;
								public visitRuleStopState(p: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState): void;
								public visitDecisionState(p: android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState): number;
								public getRuleNames(): string[];
								public reset(): void;
								public createInterpreterRuleContext(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number, ruleIndex: number): android.databinding.internal.org.antlr.v4.runtime.InterpreterRuleContext;
								public getATNState(): android.databinding.internal.org.antlr.v4.runtime.atn.ATNState;
								public getATN(): android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
								public getGrammarFileName(): string;
								public parse(startRuleIndex: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
								public visitState(p: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState): void;
								public addDecisionOverride(decision: number, tokenIndex: number, forcedAlt: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class ParserRuleContext extends android.databinding.internal.org.antlr.v4.runtime.RuleContext {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext>;
								public children: java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
								public start: android.databinding.internal.org.antlr.v4.runtime.Token;
								public stop: android.databinding.internal.org.antlr.v4.runtime.Token;
								public exception: android.databinding.internal.org.antlr.v4.runtime.RecognitionException;
								public addErrorNode(badToken: android.databinding.internal.org.antlr.v4.runtime.Token): android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode;
								public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
								public toInfoString(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
								public getChild(i: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
								public getChildCount(): number;
								public addChild(t: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
								public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
								public removeLastChild(): void;
								public getStop(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getParent(): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
								public getChild(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
								public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
								public getParent(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
								public addChild(matchedToken: android.databinding.internal.org.antlr.v4.runtime.Token): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
								public getStart(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
								public constructor();
								public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
								public getTokens(ttype: number): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode>;
								public getToken(ttype: number, i: number): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
								public copyFrom(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
								public getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
								public addChild(ruleInvocation: android.databinding.internal.org.antlr.v4.runtime.RuleContext): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
								public getRuleContexts(ctxType: java.lang.Class<any>): java.util.List<any>;
								public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class ProxyErrorListener extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorListener {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.ProxyErrorListener>;
								public constructor(delegates: java.util.Collection<any>);
								public reportContextSensitivity(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, prediction: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public reportAttemptingFullContext(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: java.util.BitSet, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public reportAmbiguity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: boolean, param5: java.util.BitSet, param6: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public syntaxError(recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, offendingSymbol: any, line: number, charPositionInLine: number, msg: string, e: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportAmbiguity(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public reportAttemptingFullContext(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, conflictingAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
								public syntaxError(param0: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, param1: any, param2: number, param3: number, param4: string, param5: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
								public reportContextSensitivity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: number, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class RecognitionException extends java.lang.RuntimeException {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.RecognitionException>;
								public getCtx(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
								public constructor(message: string);
								public getOffendingState(): number;
								public constructor(cause: java.lang.Throwable);
								public getRecognizer(): android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>;
								public constructor();
								public getExpectedTokens(): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
								public constructor(message: string, recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, input: android.databinding.internal.org.antlr.v4.runtime.IntStream, ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext);
								public setOffendingState(offendingState: number): void;
								public constructor(message: string, cause: java.lang.Throwable);
								public constructor(recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, input: android.databinding.internal.org.antlr.v4.runtime.IntStream, ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext);
								public getOffendingToken(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public setOffendingToken(offendingToken: android.databinding.internal.org.antlr.v4.runtime.Token): void;
								public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.IntStream;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export abstract class Recognizer<Symbol, ATNInterpreter>  extends java.lang.Object {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>>;
								public static EOF: number;
								public _interp: ATNInterpreter;
								public getVocabulary(): android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
								public removeErrorListener(listener: android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorListener): void;
								public getTokenFactory(): android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>;
								/** @deprecated */
								public getTokenErrorDisplay(t: android.databinding.internal.org.antlr.v4.runtime.Token): string;
								public getErrorListenerDispatch(): android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorListener;
								public precpred(localctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext, precedence: number): boolean;
								public setState(atnState: number): void;
								public removeErrorListeners(): void;
								public action(_localctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext, ruleIndex: number, actionIndex: number): void;
								public getState(): number;
								public setInputStream(param0: android.databinding.internal.org.antlr.v4.runtime.IntStream): void;
								public getSerializedATN(): string;
								public getATN(): android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
								/** @deprecated */
								public getTokenNames(): string[];
								public getTokenTypeMap(): java.util.Map<string,java.lang.Integer>;
								public constructor();
								public addErrorListener(listener: android.databinding.internal.org.antlr.v4.runtime.ANTLRErrorListener): void;
								public getParseInfo(): android.databinding.internal.org.antlr.v4.runtime.atn.ParseInfo;
								public setInterpreter(interpreter: ATNInterpreter): void;
								public sempred(_localctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext, ruleIndex: number, actionIndex: number): boolean;
								public getRuleNames(): string[];
								public getErrorHeader(e: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): string;
								public getTokenType(tokenName: string): number;
								public getErrorListeners(): java.util.List<any>;
								public getRuleIndexMap(): java.util.Map<string,java.lang.Integer>;
								public setTokenFactory(param0: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
								public getGrammarFileName(): string;
								public getInterpreter(): ATNInterpreter;
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.IntStream;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class RuleContext extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.RuleContext>;
								public static EMPTY: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
								public parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext;
								public invokingState: number;
								public toStringTree(ruleNames: java.util.List<string>): string;
								public toString(): string;
								public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
								public accept(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
								public toStringTree(recog: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
								public getChild(i: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
								public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
								public toString(ruleNames: java.util.List<string>): string;
								public getChildCount(): number;
								public getText(): string;
								public setAltNumber(altNumber: number): void;
								public getPayload(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
								public toString(recog: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, stop: android.databinding.internal.org.antlr.v4.runtime.RuleContext): string;
								public toString(ruleNames: java.util.List<string>, stop: android.databinding.internal.org.antlr.v4.runtime.RuleContext): string;
								public getPayload(): any;
								public depth(): number;
								public getParent(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
								public getRuleIndex(): number;
								public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
								public constructor();
								public getAltNumber(): number;
								public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
								public toStringTree(): string;
								public isEmpty(): boolean;
								public getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
								public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
								public toStringTree(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
								public toString(recog: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>): string;
								public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
								public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class RuleContextWithAltNum extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.RuleContextWithAltNum>;
								public altNum: number;
								public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
								public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
								public setAltNumber(altNumber: number): void;
								public setAltNumber(altNum: number): void;
								public constructor();
								public getAltNumber(): number;
								public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
								public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class RuntimeMetaData extends java.lang.Object {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.RuntimeMetaData>;
								public static VERSION: string;
								public static getMajorMinorVersion(version: string): string;
								public static checkVersion(generatingToolVersion: string, compileTimeVersion: string): void;
								public static getRuntimeVersion(): string;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class Token extends java.lang.Object {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.Token>;
								/**
								 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.Token interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getText(): string;
									getType(): number;
									getLine(): number;
									getCharPositionInLine(): number;
									getChannel(): number;
									getTokenIndex(): number;
									getStartIndex(): number;
									getStopIndex(): number;
									getTokenSource(): android.databinding.internal.org.antlr.v4.runtime.TokenSource;
									getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
								});
								public constructor();
								public static MIN_USER_TOKEN_TYPE: number;
								public static EOF: number;
								public static INVALID_TYPE: number;
								public static EPSILON: number;
								public static DEFAULT_CHANNEL: number;
								public static MIN_USER_CHANNEL_VALUE: number;
								public static HIDDEN_CHANNEL: number;
								public getChannel(): number;
								public getStopIndex(): number;
								public getType(): number;
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
								public getText(): string;
								public getTokenSource(): android.databinding.internal.org.antlr.v4.runtime.TokenSource;
								public getTokenIndex(): number;
								public getLine(): number;
								public getStartIndex(): number;
								public getCharPositionInLine(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class TokenFactory<Symbol>  extends java.lang.Object {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>>;
								/**
								 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									create(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Pair<android.databinding.internal.org.antlr.v4.runtime.TokenSource,android.databinding.internal.org.antlr.v4.runtime.CharStream>, param1: number, param2: string, param3: number, param4: number, param5: number, param6: number, param7: number): Symbol;
									create(param0: number, param1: string): Symbol;
								});
								public constructor();
								public create(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Pair<android.databinding.internal.org.antlr.v4.runtime.TokenSource,android.databinding.internal.org.antlr.v4.runtime.CharStream>, param1: number, param2: string, param3: number, param4: number, param5: number, param6: number, param7: number): Symbol;
								public create(param0: number, param1: string): Symbol;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class TokenSource extends java.lang.Object {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.TokenSource>;
								/**
								 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.TokenSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									nextToken(): android.databinding.internal.org.antlr.v4.runtime.Token;
									getLine(): number;
									getCharPositionInLine(): number;
									getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
									getSourceName(): string;
									setTokenFactory(param0: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
									getTokenFactory(): android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>;
								});
								public constructor();
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
								public getLine(): number;
								public setTokenFactory(param0: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
								public getTokenFactory(): android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>;
								public nextToken(): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getSourceName(): string;
								public getCharPositionInLine(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class TokenStream extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.IntStream {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.TokenStream>;
								/**
								 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.TokenStream interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									LT(param0: number): android.databinding.internal.org.antlr.v4.runtime.Token;
									get(param0: number): android.databinding.internal.org.antlr.v4.runtime.Token;
									getTokenSource(): android.databinding.internal.org.antlr.v4.runtime.TokenSource;
									getText(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
									getText(): string;
									getText(param0: android.databinding.internal.org.antlr.v4.runtime.RuleContext): string;
									getText(param0: android.databinding.internal.org.antlr.v4.runtime.Token, param1: android.databinding.internal.org.antlr.v4.runtime.Token): string;
									consume(): void;
									LA(param0: number): number;
									mark(): number;
									release(param0: number): void;
									index(): number;
									seek(param0: number): void;
									size(): number;
									getSourceName(): string;
								});
								public constructor();
								public static EOF: number;
								public static UNKNOWN_SOURCE_NAME: string;
								public get(param0: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public index(): number;
								public size(): number;
								public LT(param0: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getTokenSource(): android.databinding.internal.org.antlr.v4.runtime.TokenSource;
								public mark(): number;
								public seek(param0: number): void;
								public getSourceName(): string;
								public LA(param0: number): number;
								public getText(): string;
								public consume(): void;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.Token, param1: android.databinding.internal.org.antlr.v4.runtime.Token): string;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public release(param0: number): void;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.RuleContext): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class TokenStreamRewriter extends java.lang.Object {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter>;
								public static DEFAULT_PROGRAM_NAME: string;
								public static PROGRAM_INIT_SIZE: number;
								public static MIN_TOKEN_INDEX: number;
								public tokens: android.databinding.internal.org.antlr.v4.runtime.TokenStream;
								public programs: java.util.Map<string,java.util.List<android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter.RewriteOperation>>;
								public lastRewriteTokenIndexes: java.util.Map<string,java.lang.Integer>;
								public insertAfter(t: android.databinding.internal.org.antlr.v4.runtime.Token, text: any): void;
								public getText(programName: string): string;
								public replace(programName: string, from: android.databinding.internal.org.antlr.v4.runtime.Token, to: android.databinding.internal.org.antlr.v4.runtime.Token, text: any): void;
								public catOpText(a: any, b: any): string;
								public deleteProgram(programName: string): void;
								public getLastRewriteTokenIndex(): number;
								public replace(programName: string, from: number, to: number, text: any): void;
								public getProgram(name: string): java.util.List<android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter.RewriteOperation>;
								public insertAfter(programName: string, t: android.databinding.internal.org.antlr.v4.runtime.Token, text: any): void;
								public delete(index: number): void;
								public getText(interval: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public delete(programName: string, from: number, to: number): void;
								public replace(from: number, to: number, text: any): void;
								public getText(): string;
								public getKindOfOps(rewrites: java.util.List<any>, kind: java.lang.Class<any>, before: number): java.util.List<any>;
								public rollback(instructionIndex: number): void;
								public delete(from: number, to: number): void;
								public delete(from: android.databinding.internal.org.antlr.v4.runtime.Token, to: android.databinding.internal.org.antlr.v4.runtime.Token): void;
								public insertBefore(index: number, text: any): void;
								public deleteProgram(): void;
								public getTokenStream(): android.databinding.internal.org.antlr.v4.runtime.TokenStream;
								public insertBefore(programName: string, t: android.databinding.internal.org.antlr.v4.runtime.Token, text: any): void;
								public insertAfter(programName: string, index: number, text: any): void;
								public delete(indexT: android.databinding.internal.org.antlr.v4.runtime.Token): void;
								public getLastRewriteTokenIndex(programName: string): number;
								public insertAfter(index: number, text: any): void;
								public reduceToSingleOperationPerIndex(rewrites: java.util.List<android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter.RewriteOperation>): java.util.Map<java.lang.Integer,android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter.RewriteOperation>;
								public insertBefore(programName: string, index: number, text: any): void;
								public delete(programName: string, from: android.databinding.internal.org.antlr.v4.runtime.Token, to: android.databinding.internal.org.antlr.v4.runtime.Token): void;
								public replace(index: number, text: any): void;
								public insertBefore(t: android.databinding.internal.org.antlr.v4.runtime.Token, text: any): void;
								public constructor(tokens: android.databinding.internal.org.antlr.v4.runtime.TokenStream);
								public replace(from: android.databinding.internal.org.antlr.v4.runtime.Token, to: android.databinding.internal.org.antlr.v4.runtime.Token, text: any): void;
								public setLastRewriteTokenIndex(programName: string, i: number): void;
								public getText(programName: string, interval: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public rollback(programName: string, instructionIndex: number): void;
								public replace(indexT: android.databinding.internal.org.antlr.v4.runtime.Token, text: any): void;
							}
							export module TokenStreamRewriter {
								export class InsertBeforeOp extends android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter.RewriteOperation {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter.InsertBeforeOp>;
									public constructor(param0: android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter, index: number);
									public constructor(param0: android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter, index: number, text: any);
									public execute(buf: java.lang.StringBuilder): number;
								}
								export class ReplaceOp extends android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter.RewriteOperation {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter.ReplaceOp>;
									public lastIndex: number;
									public constructor(param0: android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter, index: number);
									public constructor(param0: android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter, index: number, text: any);
									public constructor(param0: android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter, from: number, to: number, text: any);
									public toString(): string;
									public execute(buf: java.lang.StringBuilder): number;
								}
								export class RewriteOperation extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter.RewriteOperation>;
									public instructionIndex: number;
									public index: number;
									public text: any;
									public constructor(param0: android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter, index: number);
									public constructor(param0: android.databinding.internal.org.antlr.v4.runtime.TokenStreamRewriter, index: number, text: any);
									public toString(): string;
									public execute(buf: java.lang.StringBuilder): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class UnbufferedCharStream extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.CharStream {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.UnbufferedCharStream>;
								public data: string[];
								public n: number;
								public p: number;
								public numMarkers: number;
								public lastChar: number;
								public lastCharBufferStart: number;
								public currentCharIndex: number;
								public input: java.io.Reader;
								public name: string;
								public index(): number;
								public size(): number;
								public constructor(input: java.io.InputStream);
								public getBufferStartIndex(): number;
								public LA(i: number): number;
								public mark(): number;
								public release(marker: number): void;
								public constructor();
								public constructor(input: java.io.Reader, bufferSize: number);
								public seek(param0: number): void;
								public getSourceName(): string;
								public sync(want: number): void;
								public LA(param0: number): number;
								public constructor(bufferSize: number);
								public getText(interval: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public constructor(input: java.io.InputStream, bufferSize: number);
								public fill(n: number): number;
								public consume(): void;
								public nextChar(): number;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public release(param0: number): void;
								public constructor(input: java.io.Reader);
								public add(c: number): void;
								public seek(index: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class UnbufferedTokenStream<T>  extends android.databinding.internal.org.antlr.v4.runtime.TokenStream {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.UnbufferedTokenStream<any>>;
								public tokenSource: android.databinding.internal.org.antlr.v4.runtime.TokenSource;
								public tokens: android.databinding.internal.org.antlr.v4.runtime.Token[];
								public n: number;
								public p: number;
								public numMarkers: number;
								public lastToken: android.databinding.internal.org.antlr.v4.runtime.Token;
								public lastTokenBufferStart: android.databinding.internal.org.antlr.v4.runtime.Token;
								public currentTokenIndex: number;
								public size(): number;
								public LA(i: number): number;
								public mark(): number;
								public add(t: android.databinding.internal.org.antlr.v4.runtime.Token): void;
								public seek(param0: number): void;
								public getSourceName(): string;
								public constructor(tokenSource: android.databinding.internal.org.antlr.v4.runtime.TokenSource);
								public getText(interval: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public getText(): string;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): string;
								public constructor(tokenSource: android.databinding.internal.org.antlr.v4.runtime.TokenSource, bufferSize: number);
								public get(param0: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public index(): number;
								public getBufferStartIndex(): number;
								public LT(param0: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public getTokenSource(): android.databinding.internal.org.antlr.v4.runtime.TokenSource;
								public release(marker: number): void;
								public sync(want: number): void;
								public LA(param0: number): number;
								public getText(start: android.databinding.internal.org.antlr.v4.runtime.Token, stop: android.databinding.internal.org.antlr.v4.runtime.Token): string;
								public get(i: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public fill(n: number): number;
								public consume(): void;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.Token, param1: android.databinding.internal.org.antlr.v4.runtime.Token): string;
								public getText(ctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext): string;
								public LT(i: number): android.databinding.internal.org.antlr.v4.runtime.Token;
								public release(param0: number): void;
								public getText(param0: android.databinding.internal.org.antlr.v4.runtime.RuleContext): string;
								public seek(index: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class Vocabulary extends java.lang.Object {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.Vocabulary>;
								/**
								 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.Vocabulary interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getMaxTokenType(): number;
									getLiteralName(param0: number): string;
									getSymbolicName(param0: number): string;
									getDisplayName(param0: number): string;
								});
								public constructor();
								public getSymbolicName(param0: number): string;
								public getDisplayName(param0: number): string;
								public getMaxTokenType(): number;
								public getLiteralName(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class VocabularyImpl extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.Vocabulary {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.VocabularyImpl>;
								public static EMPTY_VOCABULARY: android.databinding.internal.org.antlr.v4.runtime.VocabularyImpl;
								public getDisplayName(tokenType: number): string;
								public getSymbolicName(param0: number): string;
								public getDisplayName(param0: number): string;
								public constructor(literalNames: string[], symbolicNames: string[]);
								public getMaxTokenType(): number;
								public constructor(literalNames: string[], symbolicNames: string[], displayNames: string[]);
								public getLiteralName(tokenType: number): string;
								public getSymbolicName(tokenType: number): string;
								public static fromTokenNames(tokenNames: string[]): android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
								public getLiteralName(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export class WritableToken extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.Token {
								public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.WritableToken>;
								/**
								 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.WritableToken interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									setText(param0: string): void;
									setType(param0: number): void;
									setLine(param0: number): void;
									setCharPositionInLine(param0: number): void;
									setChannel(param0: number): void;
									setTokenIndex(param0: number): void;
									getText(): string;
									getType(): number;
									getLine(): number;
									getCharPositionInLine(): number;
									getChannel(): number;
									getTokenIndex(): number;
									getStartIndex(): number;
									getStopIndex(): number;
									getTokenSource(): android.databinding.internal.org.antlr.v4.runtime.TokenSource;
									getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
								});
								public constructor();
								public static MIN_USER_TOKEN_TYPE: number;
								public static EOF: number;
								public static INVALID_TYPE: number;
								public static EPSILON: number;
								public static DEFAULT_CHANNEL: number;
								public static MIN_USER_CHANNEL_VALUE: number;
								public static HIDDEN_CHANNEL: number;
								public setTokenIndex(param0: number): void;
								public setChannel(param0: number): void;
								public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
								public getTokenSource(): android.databinding.internal.org.antlr.v4.runtime.TokenSource;
								public setCharPositionInLine(param0: number): void;
								public getTokenIndex(): number;
								public setText(param0: string): void;
								public getCharPositionInLine(): number;
								public getChannel(): number;
								public getStopIndex(): number;
								public setType(param0: number): void;
								public setLine(param0: number): void;
								public getType(): number;
								public getText(): string;
								public getLine(): number;
								public getStartIndex(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ATN extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ATN>;
									public static INVALID_ALT_NUMBER: number;
									public states: java.util.List<android.databinding.internal.org.antlr.v4.runtime.atn.ATNState>;
									public decisionToState: java.util.List<android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState>;
									public ruleToStartState: android.databinding.internal.org.antlr.v4.runtime.atn.RuleStartState[];
									public ruleToStopState: android.databinding.internal.org.antlr.v4.runtime.atn.RuleStopState[];
									public modeNameToStartState: java.util.Map<string,android.databinding.internal.org.antlr.v4.runtime.atn.TokensStartState>;
									public grammarType: android.databinding.internal.org.antlr.v4.runtime.atn.ATNType;
									public maxTokenType: number;
									public ruleToTokenType: number[];
									public lexerActions: android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction[];
									public modeToStartState: java.util.List<android.databinding.internal.org.antlr.v4.runtime.atn.TokensStartState>;
									public getExpectedTokens(stateNumber: number, context: android.databinding.internal.org.antlr.v4.runtime.RuleContext): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public nextTokens(s: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public addState(state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState): void;
									public getNumberOfDecisions(): number;
									public defineDecisionState(s: android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState): number;
									public constructor(grammarType: android.databinding.internal.org.antlr.v4.runtime.atn.ATNType, maxTokenType: number);
									public nextTokens(s: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, ctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public removeState(state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState): void;
									public getDecisionState(decision: number): android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ATNConfig extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig>;
									public state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState;
									public alt: number;
									public context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public reachesIntoOuterContext: number;
									public semanticContext: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext;
									public hashCode(): number;
									public setPrecedenceFilterSuppressed(value: boolean): void;
									public constructor(state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, alt: number, context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, semanticContext: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext);
									public toString(): string;
									public constructor(old: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig);
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, semanticContext: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext);
									public getOuterContextDepth(): number;
									public toString(recog: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, showAlt: boolean): string;
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, semanticContext: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext);
									public equals(o: any): boolean;
									public equals(other: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig): boolean;
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext);
									public equals(obj: any): boolean;
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public isPrecedenceFilterSuppressed(): boolean;
									public constructor(state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, alt: number, context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext);
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, semanticContext: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ATNConfigSet extends java.util.Set<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig> {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet>;
									public readonly: boolean;
									public configLookup: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet.AbstractConfigHashSet;
									public configs: java.util.ArrayList<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig>;
									public uniqueAlt: number;
									public conflictingAlts: java.util.BitSet;
									public hasSemanticContext: boolean;
									public dipsIntoOuterContext: boolean;
									public fullCtx: boolean;
									public getStates(): java.util.Set<android.databinding.internal.org.antlr.v4.runtime.atn.ATNState>;
									public add(param0: any): boolean;
									public addAll(coll: java.util.Collection<any>): boolean;
									public constructor(old: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet);
									public iterator(): java.util.Iterator<any>;
									public removeIf(filter: any /* any*/): boolean;
									public getAlts(): java.util.BitSet;
									public retainAll(c: java.util.Collection<any>): boolean;
									public constructor(fullCtx: boolean);
									public add(config: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig): boolean;
									public equals(o: any): boolean;
									public remove(param0: any): boolean;
									public setReadonly(readonly: boolean): void;
									public contains(o: any): boolean;
									public stream(): java.util.stream.Stream<any>;
									public isEmpty(): boolean;
									public toArray(param0: any[]): any[];
									public contains(param0: any): boolean;
									public constructor();
									public hashCode(): number;
									public parallelStream(): java.util.stream.Stream<any>;
									public size(): number;
									public containsFast(obj: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig): boolean;
									public remove(o: any): boolean;
									public elements(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig>;
									public toArray(): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig[];
									public addAll(param0: java.util.Collection<any>): boolean;
									public equals(param0: any): boolean;
									public toString(): string;
									public clear(): void;
									public toArray(): any[];
									public forEach(action: any /* any*/): void;
									public spliterator(): java.util.Spliterator<any>;
									public iterator(): java.util.Iterator<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig>;
									public get(i: number): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig;
									public removeAll(param0: java.util.Collection<any>): boolean;
									public equals(obj: any): boolean;
									public retainAll(param0: java.util.Collection<any>): boolean;
									public removeAll(c: java.util.Collection<any>): boolean;
									public containsAll(param0: java.util.Collection<any>): boolean;
									public optimizeConfigs(interpreter: android.databinding.internal.org.antlr.v4.runtime.atn.ATNSimulator): void;
									public toArray(a: any[]): any[];
									public add(config: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, mergeCache: android.databinding.internal.org.antlr.v4.runtime.misc.DoubleKeyMap<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext>): boolean;
									public getPredicates(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext>;
									public isReadonly(): boolean;
									public containsAll(c: java.util.Collection<any>): boolean;
								}
								export module ATNConfigSet {
									export abstract class AbstractConfigHashSet extends android.databinding.internal.org.antlr.v4.runtime.misc.Array2DHashSet<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig> {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet.AbstractConfigHashSet>;
										public equals(param0: any): boolean;
										public createBucket(capacity: number): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig[];
										public size(): number;
										public spliterator(): java.util.Spliterator<any>;
										public toArray(param0: any[]): any[];
										public toArray(a: any[]): any[];
										public hashCode(): number;
										public containsAll(param0: java.util.Collection<any>): boolean;
										public constructor();
										public contains(o: any): boolean;
										public containsAll(collection: java.util.Collection<any>): boolean;
										public iterator(): java.util.Iterator<any>;
										public remove(o: any): boolean;
										public asElementType(o: any): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig;
										public add(t: any): boolean;
										public clear(): void;
										public toArray(): any[];
										public remove(param0: any): boolean;
										public createBuckets(capacity: number): any[][];
										public createBucket(capacity: number): any[];
										public constructor(comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>);
										public addAll(c: java.util.Collection<any>): boolean;
										public contains(param0: any): boolean;
										public retainAll(param0: java.util.Collection<any>): boolean;
										public constructor(comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>, initialCapacity: number, initialBucketCapacity: number);
										public isEmpty(): boolean;
										public retainAll(c: java.util.Collection<any>): boolean;
										public removeAll(param0: java.util.Collection<any>): boolean;
										public equals(o: any): boolean;
										public asElementType(o: any): any;
										public createBuckets(capacity: number): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig[][];
										public addAll(param0: java.util.Collection<any>): boolean;
										public removeAll(c: java.util.Collection<any>): boolean;
										public add(param0: any): boolean;
									}
									export class ConfigEqualityComparator extends android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig> {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet.ConfigEqualityComparator>;
										public static INSTANCE: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet.ConfigEqualityComparator;
										public hashCode(param0: any): number;
										public hashCode(): number;
										public equals(a: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, b: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig): boolean;
										public hashCode(o: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig): number;
										public equals(param0: any, param1: any): boolean;
										public equals(obj: any): boolean;
									}
									export class ConfigHashSet extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet.AbstractConfigHashSet {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet.ConfigHashSet>;
										public equals(param0: any): boolean;
										public size(): number;
										public spliterator(): java.util.Spliterator<any>;
										public toArray(param0: any[]): any[];
										public toArray(a: any[]): any[];
										public hashCode(): number;
										public containsAll(param0: java.util.Collection<any>): boolean;
										public constructor();
										public contains(o: any): boolean;
										public containsAll(collection: java.util.Collection<any>): boolean;
										public iterator(): java.util.Iterator<any>;
										public remove(o: any): boolean;
										public add(t: any): boolean;
										public clear(): void;
										public toArray(): any[];
										public remove(param0: any): boolean;
										public constructor(comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>);
										public addAll(c: java.util.Collection<any>): boolean;
										public contains(param0: any): boolean;
										public retainAll(param0: java.util.Collection<any>): boolean;
										public constructor(comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>, initialCapacity: number, initialBucketCapacity: number);
										public isEmpty(): boolean;
										public retainAll(c: java.util.Collection<any>): boolean;
										public removeAll(param0: java.util.Collection<any>): boolean;
										public equals(o: any): boolean;
										public addAll(param0: java.util.Collection<any>): boolean;
										public removeAll(c: java.util.Collection<any>): boolean;
										public add(param0: any): boolean;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ATNDeserializationOptions extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ATNDeserializationOptions>;
									public constructor();
									public isVerifyATN(): boolean;
									public makeReadOnly(): void;
									public isGenerateRuleBypassTransitions(): boolean;
									public setVerifyATN(verifyATN: boolean): void;
									public isReadOnly(): boolean;
									public setGenerateRuleBypassTransitions(generateRuleBypassTransitions: boolean): void;
									public throwIfReadOnly(): void;
									public static getDefaultOptions(): android.databinding.internal.org.antlr.v4.runtime.atn.ATNDeserializationOptions;
									public constructor(options: android.databinding.internal.org.antlr.v4.runtime.atn.ATNDeserializationOptions);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ATNDeserializer extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ATNDeserializer>;
									public static SERIALIZED_VERSION: number;
									public static SERIALIZED_UUID: java.util.UUID;
									public checkCondition(condition: boolean): void;
									public static toLong(data: string[], offset: number): number;
									public constructor();
									public static toInt32(data: string[], offset: number): number;
									public verifyATN(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN): void;
									public edgeFactory(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, type: number, src: number, trg: number, arg1: number, arg2: number, arg3: number, sets: java.util.List<android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet>): android.databinding.internal.org.antlr.v4.runtime.atn.Transition;
									public constructor(deserializationOptions: android.databinding.internal.org.antlr.v4.runtime.atn.ATNDeserializationOptions);
									public static toUUID(data: string[], offset: number): java.util.UUID;
									public markPrecedenceDecisions(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN): void;
									public isFeatureSupported(feature: java.util.UUID, actualUuid: java.util.UUID): boolean;
									public static toInt(c: string): number;
									public deserialize(data: string[]): android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
									public stateFactory(type: number, ruleIndex: number): android.databinding.internal.org.antlr.v4.runtime.atn.ATNState;
									public checkCondition(condition: boolean, message: string): void;
									public lexerActionFactory(type: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType, data1: number, data2: number): android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ATNSerializer extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ATNSerializer>;
									public atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
									public static getSerializedAsString(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN): string;
									public constructor(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, tokenNames: java.util.List<string>);
									public getTokenName(t: number): string;
									public decode(data: string[]): string;
									public static getSerialized(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN): android.databinding.internal.org.antlr.v4.runtime.misc.IntegerList;
									public constructor(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN);
									public serialize(): android.databinding.internal.org.antlr.v4.runtime.misc.IntegerList;
									public static getSerializedAsChars(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN): string[];
									public static getDecoded(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, tokenNames: java.util.List<string>): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export abstract class ATNSimulator extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ATNSimulator>;
									public static SERIALIZED_VERSION: number;
									public static SERIALIZED_UUID: java.util.UUID;
									public static ERROR: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
									public sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache;
									public constructor(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache);
									/** @deprecated */
									public static toInt32(data: string[], offset: number): number;
									/** @deprecated */
									public static toLong(data: string[], offset: number): number;
									public reset(): void;
									/** @deprecated */
									public static stateFactory(type: number, ruleIndex: number): android.databinding.internal.org.antlr.v4.runtime.atn.ATNState;
									/** @deprecated */
									public static edgeFactory(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, type: number, src: number, trg: number, arg1: number, arg2: number, arg3: number, sets: java.util.List<android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet>): android.databinding.internal.org.antlr.v4.runtime.atn.Transition;
									/** @deprecated */
									public static deserialize(data: string[]): android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
									/** @deprecated */
									public static checkCondition(condition: boolean, message: string): void;
									public clearDFA(): void;
									public getCachedContext(context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									/** @deprecated */
									public static toUUID(data: string[], offset: number): java.util.UUID;
									public getSharedContextCache(): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache;
									/** @deprecated */
									public static toInt(c: string): number;
									/** @deprecated */
									public static checkCondition(condition: boolean): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export abstract class ATNState extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ATNState>;
									public static INITIAL_NUM_TRANSITIONS: number;
									public static INVALID_TYPE: number;
									public static BASIC: number;
									public static RULE_START: number;
									public static BLOCK_START: number;
									public static PLUS_BLOCK_START: number;
									public static STAR_BLOCK_START: number;
									public static TOKEN_START: number;
									public static RULE_STOP: number;
									public static BLOCK_END: number;
									public static STAR_LOOP_BACK: number;
									public static STAR_LOOP_ENTRY: number;
									public static PLUS_LOOP_BACK: number;
									public static LOOP_END: number;
									public static serializationNames: java.util.List<string>;
									public static INVALID_STATE_NUMBER: number;
									public atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
									public stateNumber: number;
									public ruleIndex: number;
									public epsilonOnlyTransitions: boolean;
									public transitions: java.util.List<android.databinding.internal.org.antlr.v4.runtime.atn.Transition>;
									public nextTokenWithinRule: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public constructor();
									public hashCode(): number;
									public addTransition(e: android.databinding.internal.org.antlr.v4.runtime.atn.Transition): void;
									public transition(i: number): android.databinding.internal.org.antlr.v4.runtime.atn.Transition;
									public getNumberOfTransitions(): number;
									public toString(): string;
									public setTransition(i: number, e: android.databinding.internal.org.antlr.v4.runtime.atn.Transition): void;
									public equals(o: any): boolean;
									public isNonGreedyExitState(): boolean;
									public setRuleIndex(ruleIndex: number): void;
									public getTransitions(): android.databinding.internal.org.antlr.v4.runtime.atn.Transition[];
									public removeTransition(index: number): android.databinding.internal.org.antlr.v4.runtime.atn.Transition;
									public addTransition(index: number, e: android.databinding.internal.org.antlr.v4.runtime.atn.Transition): void;
									public equals(obj: any): boolean;
									public getStateType(): number;
									public onlyHasEpsilonTransitions(): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ATNType {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ATNType>;
									public static LEXER: android.databinding.internal.org.antlr.v4.runtime.atn.ATNType;
									public static PARSER: android.databinding.internal.org.antlr.v4.runtime.atn.ATNType;
									public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
									public static valueOf(name: string): android.databinding.internal.org.antlr.v4.runtime.atn.ATNType;
									public static values(): android.databinding.internal.org.antlr.v4.runtime.atn.ATNType[];
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export abstract class AbstractPredicateTransition extends android.databinding.internal.org.antlr.v4.runtime.atn.Transition {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.AbstractPredicateTransition>;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ActionTransition extends android.databinding.internal.org.antlr.v4.runtime.atn.Transition {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ActionTransition>;
									public ruleIndex: number;
									public actionIndex: number;
									public isCtxDependent: boolean;
									public isEpsilon(): boolean;
									public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
									public getSerializationType(): number;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public toString(): string;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, ruleIndex: number);
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, ruleIndex: number, actionIndex: number, isCtxDependent: boolean);
									public matches(param0: number, param1: number, param2: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class AmbiguityInfo extends android.databinding.internal.org.antlr.v4.runtime.atn.DecisionEventInfo {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.AmbiguityInfo>;
									public ambigAlts: java.util.BitSet;
									public constructor(decision: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, ambigAlts: java.util.BitSet, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startIndex: number, stopIndex: number, fullCtx: boolean);
									public constructor(decision: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startIndex: number, stopIndex: number, fullCtx: boolean);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ArrayPredictionContext extends android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ArrayPredictionContext>;
									public parents: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext[];
									public returnStates: number[];
									public getParent(index: number): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public getReturnState(param0: number): number;
									public size(): number;
									public equals(param0: any): boolean;
									public toString(): string;
									public equals(o: any): boolean;
									public toString(recog: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>): string;
									public getReturnState(index: number): number;
									public constructor(parents: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext[], returnStates: number[]);
									public constructor(cachedHashCode: number);
									public getParent(param0: number): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public constructor(a: android.databinding.internal.org.antlr.v4.runtime.atn.SingletonPredictionContext);
									public isEmpty(): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class AtomTransition extends android.databinding.internal.org.antlr.v4.runtime.atn.Transition {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.AtomTransition>;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, label: number);
									public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
									public label(): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public getSerializationType(): number;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public toString(): string;
									public matches(param0: number, param1: number, param2: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class BasicBlockStartState extends android.databinding.internal.org.antlr.v4.runtime.atn.BlockStartState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.BasicBlockStartState>;
									public constructor();
									public getStateType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class BasicState extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.BasicState>;
									public constructor();
									public getStateType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class BlockEndState extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.BlockEndState>;
									public startState: android.databinding.internal.org.antlr.v4.runtime.atn.BlockStartState;
									public constructor();
									public getStateType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export abstract class BlockStartState extends android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.BlockStartState>;
									public endState: android.databinding.internal.org.antlr.v4.runtime.atn.BlockEndState;
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ContextSensitivityInfo extends android.databinding.internal.org.antlr.v4.runtime.atn.DecisionEventInfo {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ContextSensitivityInfo>;
									public constructor(decision: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startIndex: number, stopIndex: number);
									public constructor(decision: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startIndex: number, stopIndex: number, fullCtx: boolean);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class DecisionEventInfo extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.DecisionEventInfo>;
									public decision: number;
									public configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet;
									public input: android.databinding.internal.org.antlr.v4.runtime.TokenStream;
									public startIndex: number;
									public stopIndex: number;
									public fullCtx: boolean;
									public constructor(decision: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startIndex: number, stopIndex: number, fullCtx: boolean);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class DecisionInfo extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.DecisionInfo>;
									public decision: number;
									public invocations: number;
									public timeInPrediction: number;
									public SLL_TotalLook: number;
									public SLL_MinLook: number;
									public SLL_MaxLook: number;
									public SLL_MaxLookEvent: android.databinding.internal.org.antlr.v4.runtime.atn.LookaheadEventInfo;
									public LL_TotalLook: number;
									public LL_MinLook: number;
									public LL_MaxLook: number;
									public LL_MaxLookEvent: android.databinding.internal.org.antlr.v4.runtime.atn.LookaheadEventInfo;
									public contextSensitivities: java.util.List<android.databinding.internal.org.antlr.v4.runtime.atn.ContextSensitivityInfo>;
									public errors: java.util.List<android.databinding.internal.org.antlr.v4.runtime.atn.ErrorInfo>;
									public ambiguities: java.util.List<android.databinding.internal.org.antlr.v4.runtime.atn.AmbiguityInfo>;
									public predicateEvals: java.util.List<android.databinding.internal.org.antlr.v4.runtime.atn.PredicateEvalInfo>;
									public SLL_ATNTransitions: number;
									public SLL_DFATransitions: number;
									public LL_Fallback: number;
									public LL_ATNTransitions: number;
									public LL_DFATransitions: number;
									public constructor(decision: number);
									public toString(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export abstract class DecisionState extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState>;
									public decision: number;
									public nonGreedy: boolean;
									public constructor();
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class EmptyPredictionContext extends android.databinding.internal.org.antlr.v4.runtime.atn.SingletonPredictionContext {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.EmptyPredictionContext>;
									public equals(o: any): boolean;
									public constructor();
									public getParent(index: number): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public size(): number;
									public toString(recog: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>): string;
									public getReturnState(index: number): number;
									public toString(): string;
									public constructor(cachedHashCode: number);
									public isEmpty(): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class EpsilonTransition extends android.databinding.internal.org.antlr.v4.runtime.atn.Transition {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.EpsilonTransition>;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, outermostPrecedenceReturn: number);
									public isEpsilon(): boolean;
									public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
									public outermostPrecedenceReturn(): number;
									public getSerializationType(): number;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public toString(): string;
									public matches(param0: number, param1: number, param2: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ErrorInfo extends android.databinding.internal.org.antlr.v4.runtime.atn.DecisionEventInfo {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ErrorInfo>;
									public constructor(decision: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startIndex: number, stopIndex: number, fullCtx: boolean);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LL1Analyzer extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LL1Analyzer>;
									public static HIT_PRED: number;
									public atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
									public LOOK(s: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, ctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public _LOOK(s: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, stopState: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, ctx: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, look: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet, lookBusy: java.util.Set<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig>, calledRuleStack: java.util.BitSet, seeThruPreds: boolean, addEOF: boolean): void;
									public constructor(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN);
									public LOOK(s: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, stopState: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, ctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public getDecisionLookahead(s: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet[];
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerATNConfig extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNConfig>;
									public hashCode(): number;
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNConfig, state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, lexerActionExecutor: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionExecutor);
									public constructor(state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, alt: number, context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, semanticContext: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext);
									public hasPassedThroughNonGreedyDecision(): boolean;
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNConfig, state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public constructor(old: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig);
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, semanticContext: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext);
									public getLexerActionExecutor(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionExecutor;
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, semanticContext: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext);
									public equals(o: any): boolean;
									public constructor(state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, alt: number, context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, lexerActionExecutor: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionExecutor);
									public equals(other: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig): boolean;
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext);
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNConfig, state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext);
									public constructor(state: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, alt: number, context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext);
									public constructor(c: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, semanticContext: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerATNSimulator extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNSimulator {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNSimulator>;
									public static debug: boolean;
									public static dfa_debug: boolean;
									public static MIN_DFA_EDGE: number;
									public static MAX_DFA_EDGE: number;
									public recog: android.databinding.internal.org.antlr.v4.runtime.Lexer;
									public startIndex: number;
									public line: number;
									public charPositionInLine: number;
									public decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[];
									public mode: number;
									public prevAccept: android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNSimulator.SimState;
									public static match_calls: number;
									public captureSimState(settings: android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNSimulator.SimState, input: android.databinding.internal.org.antlr.v4.runtime.CharStream, dfaState: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState): void;
									public constructor(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache);
									public closure(input: android.databinding.internal.org.antlr.v4.runtime.CharStream, config: android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNConfig, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, currentAltReachedAcceptState: boolean, speculative: boolean, treatEofAsEpsilon: boolean): boolean;
									public addDFAState(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public computeStartState(input: android.databinding.internal.org.antlr.v4.runtime.CharStream, p: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet;
									public reset(): void;
									public getText(input: android.databinding.internal.org.antlr.v4.runtime.CharStream): string;
									public getReachableTarget(trans: android.databinding.internal.org.antlr.v4.runtime.atn.Transition, t: number): android.databinding.internal.org.antlr.v4.runtime.atn.ATNState;
									public getDFA(mode: number): android.databinding.internal.org.antlr.v4.runtime.dfa.DFA;
									public getCharPositionInLine(): number;
									public setLine(line: number): void;
									public getTokenName(t: number): string;
									public clearDFA(): void;
									public setCharPositionInLine(charPositionInLine: number): void;
									public addDFAEdge(p: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, t: number, q: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState): void;
									public getExistingTargetState(s: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, t: number): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public getEpsilonTarget(input: android.databinding.internal.org.antlr.v4.runtime.CharStream, config: android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNConfig, t: android.databinding.internal.org.antlr.v4.runtime.atn.Transition, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, speculative: boolean, treatEofAsEpsilon: boolean): android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNConfig;
									public accept(input: android.databinding.internal.org.antlr.v4.runtime.CharStream, lexerActionExecutor: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionExecutor, startIndex: number, index: number, line: number, charPos: number): void;
									public execATN(input: android.databinding.internal.org.antlr.v4.runtime.CharStream, ds0: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState): number;
									public constructor(recog: android.databinding.internal.org.antlr.v4.runtime.Lexer, atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[], sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache);
									public getReachableConfigSet(input: android.databinding.internal.org.antlr.v4.runtime.CharStream, closure: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, reach: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, t: number): void;
									public computeTargetState(input: android.databinding.internal.org.antlr.v4.runtime.CharStream, s: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, t: number): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public failOrAccept(prevAccept: android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNSimulator.SimState, input: android.databinding.internal.org.antlr.v4.runtime.CharStream, reach: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, t: number): number;
									public getLine(): number;
									public copyState(simulator: android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNSimulator): void;
									public matchATN(input: android.databinding.internal.org.antlr.v4.runtime.CharStream): number;
									public match(input: android.databinding.internal.org.antlr.v4.runtime.CharStream, mode: number): number;
									public consume(input: android.databinding.internal.org.antlr.v4.runtime.CharStream): void;
									public constructor(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[], sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache);
									public addDFAEdge(from: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, t: number, q: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public evaluatePredicate(input: android.databinding.internal.org.antlr.v4.runtime.CharStream, ruleIndex: number, predIndex: number, speculative: boolean): boolean;
								}
								export module LexerATNSimulator {
									export class SimState extends java.lang.Object {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerATNSimulator.SimState>;
										public index: number;
										public line: number;
										public charPos: number;
										public dfaState: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
										public reset(): void;
										public constructor();
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerAction extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getActionType(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
										isPositionDependent(): boolean;
										execute(param0: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									});
									public constructor();
									public execute(param0: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public isPositionDependent(): boolean;
									public getActionType(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerActionExecutor extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionExecutor>;
									public static append(lexerActionExecutor: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionExecutor, lexerAction: android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionExecutor;
									public hashCode(): number;
									public fixOffsetBeforeMatch(offset: number): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionExecutor;
									public equals(obj: any): boolean;
									public constructor(lexerActions: android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction[]);
									public getLexerActions(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction[];
									public execute(lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer, input: android.databinding.internal.org.antlr.v4.runtime.CharStream, startIndex: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerActionType {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType>;
									public static CHANNEL: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
									public static CUSTOM: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
									public static MODE: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
									public static MORE: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
									public static POP_MODE: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
									public static PUSH_MODE: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
									public static SKIP: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
									public static TYPE: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
									public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
									public static valueOf(name: string): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
									public static values(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType[];
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerChannelAction extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerChannelAction>;
									public hashCode(): number;
									public constructor(channel: number);
									public equals(obj: any): boolean;
									public toString(): string;
									public execute(param0: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public isPositionDependent(): boolean;
									public execute(lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public getChannel(): number;
									public getActionType(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerCustomAction extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerCustomAction>;
									public getActionIndex(): number;
									public hashCode(): number;
									public constructor(ruleIndex: number, actionIndex: number);
									public getRuleIndex(): number;
									public equals(obj: any): boolean;
									public execute(param0: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public isPositionDependent(): boolean;
									public execute(lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public getActionType(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerIndexedCustomAction extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerIndexedCustomAction>;
									public hashCode(): number;
									public constructor(offset: number, action: android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction);
									public getOffset(): number;
									public getAction(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction;
									public equals(obj: any): boolean;
									public execute(param0: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public isPositionDependent(): boolean;
									public execute(lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public getActionType(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerModeAction extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerModeAction>;
									public getMode(): number;
									public hashCode(): number;
									public equals(obj: any): boolean;
									public constructor(mode: number);
									public toString(): string;
									public execute(param0: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public isPositionDependent(): boolean;
									public execute(lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public getActionType(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerMoreAction extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerMoreAction>;
									public static INSTANCE: android.databinding.internal.org.antlr.v4.runtime.atn.LexerMoreAction;
									public hashCode(): number;
									public equals(obj: any): boolean;
									public toString(): string;
									public execute(param0: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public isPositionDependent(): boolean;
									public execute(lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public getActionType(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerPopModeAction extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerPopModeAction>;
									public static INSTANCE: android.databinding.internal.org.antlr.v4.runtime.atn.LexerPopModeAction;
									public hashCode(): number;
									public equals(obj: any): boolean;
									public toString(): string;
									public execute(param0: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public isPositionDependent(): boolean;
									public execute(lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public getActionType(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerPushModeAction extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerPushModeAction>;
									public getMode(): number;
									public hashCode(): number;
									public equals(obj: any): boolean;
									public constructor(mode: number);
									public toString(): string;
									public execute(param0: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public isPositionDependent(): boolean;
									public execute(lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public getActionType(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerSkipAction extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerSkipAction>;
									public static INSTANCE: android.databinding.internal.org.antlr.v4.runtime.atn.LexerSkipAction;
									public hashCode(): number;
									public equals(obj: any): boolean;
									public toString(): string;
									public execute(param0: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public isPositionDependent(): boolean;
									public execute(lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public getActionType(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LexerTypeAction extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.atn.LexerAction {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LexerTypeAction>;
									public hashCode(): number;
									public getType(): number;
									public equals(obj: any): boolean;
									public toString(): string;
									public execute(param0: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public isPositionDependent(): boolean;
									public execute(lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer): void;
									public constructor(type: number);
									public getActionType(): android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionType;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LookaheadEventInfo extends android.databinding.internal.org.antlr.v4.runtime.atn.DecisionEventInfo {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LookaheadEventInfo>;
									public predictedAlt: number;
									public constructor(decision: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startIndex: number, stopIndex: number, fullCtx: boolean);
									public constructor(decision: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, predictedAlt: number, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startIndex: number, stopIndex: number, fullCtx: boolean);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class LoopEndState extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.LoopEndState>;
									public loopBackState: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState;
									public constructor();
									public getStateType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class NotSetTransition extends android.databinding.internal.org.antlr.v4.runtime.atn.SetTransition {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.NotSetTransition>;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, set: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet);
									public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
									public getSerializationType(): number;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public toString(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class OrderedATNConfigSet extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.OrderedATNConfigSet>;
									public add(param0: any): boolean;
									public addAll(coll: java.util.Collection<any>): boolean;
									public constructor(old: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet);
									public iterator(): java.util.Iterator<any>;
									public retainAll(c: java.util.Collection<any>): boolean;
									public constructor(fullCtx: boolean);
									public add(config: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig): boolean;
									public equals(o: any): boolean;
									public remove(param0: any): boolean;
									public contains(o: any): boolean;
									public isEmpty(): boolean;
									public toArray(param0: any[]): any[];
									public contains(param0: any): boolean;
									public constructor();
									public hashCode(): number;
									public size(): number;
									public remove(o: any): boolean;
									public toArray(): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig[];
									public addAll(param0: java.util.Collection<any>): boolean;
									public equals(param0: any): boolean;
									public toArray(): any[];
									public clear(): void;
									public spliterator(): java.util.Spliterator<any>;
									public iterator(): java.util.Iterator<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig>;
									public removeAll(param0: java.util.Collection<any>): boolean;
									public retainAll(param0: java.util.Collection<any>): boolean;
									public removeAll(c: java.util.Collection<any>): boolean;
									public containsAll(param0: java.util.Collection<any>): boolean;
									public toArray(a: any[]): any[];
									public add(config: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, mergeCache: android.databinding.internal.org.antlr.v4.runtime.misc.DoubleKeyMap<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext>): boolean;
									public containsAll(c: java.util.Collection<any>): boolean;
								}
								export module OrderedATNConfigSet {
									export class LexerConfigHashSet extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet.AbstractConfigHashSet {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.OrderedATNConfigSet.LexerConfigHashSet>;
										public equals(param0: any): boolean;
										public size(): number;
										public spliterator(): java.util.Spliterator<any>;
										public toArray(param0: any[]): any[];
										public toArray(a: any[]): any[];
										public hashCode(): number;
										public containsAll(param0: java.util.Collection<any>): boolean;
										public constructor();
										public contains(o: any): boolean;
										public containsAll(collection: java.util.Collection<any>): boolean;
										public iterator(): java.util.Iterator<any>;
										public remove(o: any): boolean;
										public add(t: any): boolean;
										public clear(): void;
										public toArray(): any[];
										public remove(param0: any): boolean;
										public constructor(comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>);
										public addAll(c: java.util.Collection<any>): boolean;
										public contains(param0: any): boolean;
										public retainAll(param0: java.util.Collection<any>): boolean;
										public constructor(comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>, initialCapacity: number, initialBucketCapacity: number);
										public isEmpty(): boolean;
										public retainAll(c: java.util.Collection<any>): boolean;
										public removeAll(param0: java.util.Collection<any>): boolean;
										public equals(o: any): boolean;
										public addAll(param0: java.util.Collection<any>): boolean;
										public removeAll(c: java.util.Collection<any>): boolean;
										public add(param0: any): boolean;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ParseInfo extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ParseInfo>;
									public atnSimulator: android.databinding.internal.org.antlr.v4.runtime.atn.ProfilingATNSimulator;
									public constructor(atnSimulator: android.databinding.internal.org.antlr.v4.runtime.atn.ProfilingATNSimulator);
									public getTotalLLATNLookaheadOps(): number;
									public getTotalATNLookaheadOps(): number;
									public getTotalSLLATNLookaheadOps(): number;
									public getTotalSLLLookaheadOps(): number;
									public getTotalLLLookaheadOps(): number;
									public getDFASize(decision: number): number;
									public getDFASize(): number;
									public getTotalTimeInPrediction(): number;
									public getDecisionInfo(): android.databinding.internal.org.antlr.v4.runtime.atn.DecisionInfo[];
									public getLLDecisions(): java.util.List<java.lang.Integer>;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ParserATNSimulator extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNSimulator {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ParserATNSimulator>;
									public static debug: boolean;
									public static debug_list_atn_decisions: boolean;
									public static dfa_debug: boolean;
									public static retry_debug: boolean;
									public parser: android.databinding.internal.org.antlr.v4.runtime.Parser;
									public decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[];
									public mergeCache: android.databinding.internal.org.antlr.v4.runtime.misc.DoubleKeyMap<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext>;
									public _input: android.databinding.internal.org.antlr.v4.runtime.TokenStream;
									public _startIndex: number;
									public _outerContext: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
									public _dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA;
									public predicateDFAState(dfaState: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, decisionState: android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState): void;
									public getPredicatePredictions(ambigAlts: java.util.BitSet, altToPred: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext[]): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState.PredPrediction[];
									public precedenceTransition(config: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, pt: android.databinding.internal.org.antlr.v4.runtime.atn.PrecedencePredicateTransition, collectPredicates: boolean, inContext: boolean, fullCtx: boolean): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig;
									public execATN(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, s0: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startIndex: number, outerContext: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): number;
									public constructor(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache);
									public dumpDeadEndConfigs(nvae: android.databinding.internal.org.antlr.v4.runtime.NoViableAltException): void;
									public ruleTransition(config: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, t: android.databinding.internal.org.antlr.v4.runtime.atn.RuleTransition): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig;
									public actionTransition(config: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, t: android.databinding.internal.org.antlr.v4.runtime.atn.ActionTransition): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig;
									public constructor(parser: android.databinding.internal.org.antlr.v4.runtime.Parser, atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[], sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache);
									public evalSemanticContext(pred: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext, parserCallStack: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, alt: number, fullCtx: boolean): boolean;
									public addDFAState(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, D: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public reset(): void;
									public getReachableTarget(trans: android.databinding.internal.org.antlr.v4.runtime.atn.Transition, ttype: number): android.databinding.internal.org.antlr.v4.runtime.atn.ATNState;
									public getParser(): android.databinding.internal.org.antlr.v4.runtime.Parser;
									public getPredsForAmbigAlts(ambigAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, nalts: number): android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext[];
									public predTransition(config: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, pt: android.databinding.internal.org.antlr.v4.runtime.atn.PredicateTransition, collectPredicates: boolean, inContext: boolean, fullCtx: boolean): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig;
									public getTokenName(t: number): string;
									public reportAmbiguity(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, D: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
									public getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, outerContext: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): number;
									public addDFAEdge(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, from: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, t: number, to: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public clearDFA(): void;
									public getAltThatFinishedDecisionEntryRule(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): number;
									public execATNWithFullContext(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, D: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, s0: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startIndex: number, outerContext: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): number;
									public static getUniqueAlt(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): number;
									public getLookaheadName(input: android.databinding.internal.org.antlr.v4.runtime.TokenStream): string;
									public reportContextSensitivity(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, prediction: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, startIndex: number, stopIndex: number): void;
									public closure(config: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, closureBusy: java.util.Set<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig>, collectPredicates: boolean, fullCtx: boolean, treatEofAsEpsilon: boolean): void;
									public splitAccordingToSemanticValidity(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, outerContext: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): android.databinding.internal.org.antlr.v4.runtime.misc.Pair<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet,android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet>;
									public computeReachSet(closure: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, t: number, fullCtx: boolean): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet;
									public applyPrecedenceFilter(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet;
									public reportAttemptingFullContext(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, conflictingAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, startIndex: number, stopIndex: number): void;
									public getEpsilonTarget(config: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, t: android.databinding.internal.org.antlr.v4.runtime.atn.Transition, collectPredicates: boolean, inContext: boolean, fullCtx: boolean, treatEofAsEpsilon: boolean): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig;
									public computeTargetState(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, previousD: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, t: number): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public evalSemanticContext(predPredictions: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState.PredPrediction[], outerContext: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, complete: boolean): java.util.BitSet;
									public getExistingTargetState(previousD: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, t: number): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public closureCheckingStopState(config: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, closureBusy: java.util.Set<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig>, collectPredicates: boolean, fullCtx: boolean, depth: number, treatEofAsEpsilon: boolean): void;
									public closure_(config: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, closureBusy: java.util.Set<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig>, collectPredicates: boolean, fullCtx: boolean, depth: number, treatEofAsEpsilon: boolean): void;
									public getConflictingAlts(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): java.util.BitSet;
									public getRuleName(index: number): string;
									public constructor(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[], sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache);
									public removeAllConfigsNotInRuleStopState(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, lookToEndOfRule: boolean): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet;
									public getConflictingAltsOrUniqueAlt(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): java.util.BitSet;
									public getPredictionMode(): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionMode;
									public computeStartState(p: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, ctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext, fullCtx: boolean): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet;
									public adaptivePredict(input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, decision: number, outerContext: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): number;
									public noViableAlt(input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, outerContext: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, startIndex: number): android.databinding.internal.org.antlr.v4.runtime.NoViableAltException;
									public setPredictionMode(mode: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionMode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class PlusBlockStartState extends android.databinding.internal.org.antlr.v4.runtime.atn.BlockStartState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.PlusBlockStartState>;
									public loopBackState: android.databinding.internal.org.antlr.v4.runtime.atn.PlusLoopbackState;
									public constructor();
									public getStateType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class PlusLoopbackState extends android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.PlusLoopbackState>;
									public constructor();
									public getStateType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class PrecedencePredicateTransition extends android.databinding.internal.org.antlr.v4.runtime.atn.AbstractPredicateTransition {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.PrecedencePredicateTransition>;
									public precedence: number;
									public isEpsilon(): boolean;
									public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
									public getPredicate(): android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext.PrecedencePredicate;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, precedence: number);
									public getSerializationType(): number;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public toString(): string;
									public matches(param0: number, param1: number, param2: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class PredicateEvalInfo extends android.databinding.internal.org.antlr.v4.runtime.atn.DecisionEventInfo {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.PredicateEvalInfo>;
									public semctx: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext;
									public predictedAlt: number;
									public evalResult: boolean;
									public constructor(decision: number, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startIndex: number, stopIndex: number, semctx: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext, evalResult: boolean, predictedAlt: number, fullCtx: boolean);
									public constructor(decision: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, startIndex: number, stopIndex: number, fullCtx: boolean);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class PredicateTransition extends android.databinding.internal.org.antlr.v4.runtime.atn.AbstractPredicateTransition {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.PredicateTransition>;
									public ruleIndex: number;
									public predIndex: number;
									public isCtxDependent: boolean;
									public isEpsilon(): boolean;
									public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
									public getSerializationType(): number;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public getPredicate(): android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext.Predicate;
									public toString(): string;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, ruleIndex: number, predIndex: number, isCtxDependent: boolean);
									public matches(param0: number, param1: number, param2: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export abstract class PredictionContext extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext>;
									public static EMPTY: android.databinding.internal.org.antlr.v4.runtime.atn.EmptyPredictionContext;
									public static EMPTY_RETURN_STATE: number;
									public static globalNodeCount: number;
									public id: number;
									public cachedHashCode: number;
									public static calculateHashCode(parents: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext[], returnStates: number[]): number;
									public static getAllContextNodes(context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext): java.util.List<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext>;
									public static merge(a: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, b: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, rootIsWildcard: boolean, mergeCache: android.databinding.internal.org.antlr.v4.runtime.misc.DoubleKeyMap<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext>): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public static mergeArrays(a: android.databinding.internal.org.antlr.v4.runtime.atn.ArrayPredictionContext, b: android.databinding.internal.org.antlr.v4.runtime.atn.ArrayPredictionContext, rootIsWildcard: boolean, mergeCache: android.databinding.internal.org.antlr.v4.runtime.misc.DoubleKeyMap<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext>): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public static getCachedContext(context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, contextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache, visited: java.util.IdentityHashMap<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext>): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public static fromRuleContext(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, outerContext: android.databinding.internal.org.antlr.v4.runtime.RuleContext): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public toString(recog: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>): string;
									public static toDOTString(context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext): string;
									public constructor(cachedHashCode: number);
									public getParent(param0: number): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public isEmpty(): boolean;
									public getReturnState(param0: number): number;
									public hashCode(): number;
									public size(): number;
									public static combineCommonParents(parents: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext[]): void;
									public toStrings(recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, stop: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, currentState: number): string[];
									public static mergeSingletons(a: android.databinding.internal.org.antlr.v4.runtime.atn.SingletonPredictionContext, b: android.databinding.internal.org.antlr.v4.runtime.atn.SingletonPredictionContext, rootIsWildcard: boolean, mergeCache: android.databinding.internal.org.antlr.v4.runtime.misc.DoubleKeyMap<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext>): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public hasEmptyPath(): boolean;
									public equals(param0: any): boolean;
									public toString(): string;
									public toStrings(recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, currentState: number): string[];
									public static calculateEmptyHashCode(): number;
									public static getAllContextNodes_(context: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, nodes: java.util.List<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext>, visited: java.util.Map<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext>): void;
									public static mergeRoot(a: android.databinding.internal.org.antlr.v4.runtime.atn.SingletonPredictionContext, b: android.databinding.internal.org.antlr.v4.runtime.atn.SingletonPredictionContext, rootIsWildcard: boolean): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public equals(obj: any): boolean;
									public static calculateHashCode(parent: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, returnState: number): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class PredictionContextCache extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache>;
									public cache: java.util.Map<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext,android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext>;
									public constructor();
									public add(ctx: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public get(ctx: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public size(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class PredictionMode {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionMode>;
									public static SLL: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionMode;
									public static LL: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionMode;
									public static LL_EXACT_AMBIG_DETECTION: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionMode;
									public static getSingleViableAlt(altsets: java.util.Collection<java.util.BitSet>): number;
									public static resolvesToJustOneViableAlt(altsets: java.util.Collection<java.util.BitSet>): number;
									public static getAlts(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): java.util.BitSet;
									public static allConfigsInRuleStopStates(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): boolean;
									public static getConflictingAltSubsets(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): java.util.Collection<java.util.BitSet>;
									public static hasSLLConflictTerminatingPrediction(mode: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionMode, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): boolean;
									public static allSubsetsEqual(altsets: java.util.Collection<java.util.BitSet>): boolean;
									public static valueOf(name: string): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionMode;
									public static getUniqueAlt(altsets: java.util.Collection<java.util.BitSet>): number;
									public static hasConfigInRuleStopState(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): boolean;
									public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
									public static values(): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionMode[];
									public static allSubsetsConflict(altsets: java.util.Collection<java.util.BitSet>): boolean;
									public static getStateToAltMap(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): java.util.Map<android.databinding.internal.org.antlr.v4.runtime.atn.ATNState,java.util.BitSet>;
									public static hasStateAssociatedWithOneAlt(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): boolean;
									public static hasNonConflictingAltSet(altsets: java.util.Collection<java.util.BitSet>): boolean;
									public static hasConflictingAltSet(altsets: java.util.Collection<java.util.BitSet>): boolean;
									public static getAlts(altsets: java.util.Collection<java.util.BitSet>): java.util.BitSet;
								}
								export module PredictionMode {
									export class AltAndContextConfigEqualityComparator extends android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig> {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionMode.AltAndContextConfigEqualityComparator>;
										public static INSTANCE: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionMode.AltAndContextConfigEqualityComparator;
										public hashCode(param0: any): number;
										public hashCode(): number;
										public equals(a: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig, b: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig): boolean;
										public hashCode(o: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig): number;
										public equals(param0: any, param1: any): boolean;
										public equals(obj: any): boolean;
									}
									export class AltAndContextMap extends android.databinding.internal.org.antlr.v4.runtime.misc.FlexibleHashMap<android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfig,java.util.BitSet> {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.PredictionMode.AltAndContextMap>;
										public equals(param0: any): boolean;
										public getOrDefault(key: any, defaultValue: any): any;
										public size(): number;
										public values(): java.util.Collection<any>;
										public remove(key: any): any;
										public hashCode(): number;
										public containsKey(key: any): boolean;
										public constructor();
										public putAll(param0: java.util.Map<any,any>): void;
										public put(param0: any, param1: any): any;
										public clear(): void;
										public containsKey(param0: any): boolean;
										public remove(param0: any): any;
										public putAll(m: java.util.Map<any,any>): void;
										public replace(key: any, oldValue: any, newValue: any): boolean;
										public put(key: any, value: any): any;
										public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
										public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
										public constructor(comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>);
										public keySet(): java.util.Set<any>;
										public replaceAll(function: any /* any<any,any,any>*/): void;
										public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
										public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
										public constructor(comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>, initialCapacity: number, initialBucketCapacity: number);
										public isEmpty(): boolean;
										public replace(key: any, value: any): any;
										public containsValue(value: any): boolean;
										public get(param0: any): any;
										public forEach(action: any /* any<any,any>*/): void;
										public remove(key: any, value: any): boolean;
										public equals(o: any): boolean;
										public get(key: any): any;
										public putIfAbsent(key: any, value: any): any;
										public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
										public containsValue(param0: any): boolean;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class ProfilingATNSimulator extends android.databinding.internal.org.antlr.v4.runtime.atn.ParserATNSimulator {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.ProfilingATNSimulator>;
									public decisions: android.databinding.internal.org.antlr.v4.runtime.atn.DecisionInfo[];
									public numDecisions: number;
									public _sllStopIndex: number;
									public _llStopIndex: number;
									public currentDecision: number;
									public currentState: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public conflictingAltResolvedBySLL: number;
									public computeReachSet(closure: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, t: number, fullCtx: boolean): android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet;
									public getCurrentState(): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public constructor(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache);
									public reportAttemptingFullContext(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, conflictingAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, startIndex: number, stopIndex: number): void;
									public computeTargetState(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, previousD: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, t: number): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public evalSemanticContext(predPredictions: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState.PredPrediction[], outerContext: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, complete: boolean): java.util.BitSet;
									public getExistingTargetState(previousD: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, t: number): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public constructor(parser: android.databinding.internal.org.antlr.v4.runtime.Parser, atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[], sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache);
									public evalSemanticContext(pred: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext, parserCallStack: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, alt: number, fullCtx: boolean): boolean;
									public getDecisionInfo(): android.databinding.internal.org.antlr.v4.runtime.atn.DecisionInfo[];
									public constructor(parser: android.databinding.internal.org.antlr.v4.runtime.Parser);
									public reportAmbiguity(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, D: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
									public constructor(atn: android.databinding.internal.org.antlr.v4.runtime.atn.ATN, decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[], sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache);
									public adaptivePredict(input: android.databinding.internal.org.antlr.v4.runtime.TokenStream, decision: number, outerContext: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): number;
									public reportContextSensitivity(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, prediction: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet, startIndex: number, stopIndex: number): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class RangeTransition extends android.databinding.internal.org.antlr.v4.runtime.atn.Transition {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.RangeTransition>;
									public from: number;
									public to: number;
									public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
									public label(): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public getSerializationType(): number;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, from: number, to: number);
									public toString(): string;
									public matches(param0: number, param1: number, param2: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class RuleStartState extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.RuleStartState>;
									public stopState: android.databinding.internal.org.antlr.v4.runtime.atn.RuleStopState;
									public isLeftRecursiveRule: boolean;
									public constructor();
									public getStateType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class RuleStopState extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.RuleStopState>;
									public constructor();
									public getStateType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class RuleTransition extends android.databinding.internal.org.antlr.v4.runtime.atn.Transition {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.RuleTransition>;
									public ruleIndex: number;
									public precedence: number;
									public followState: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState;
									/** @deprecated */
									public constructor(ruleStart: android.databinding.internal.org.antlr.v4.runtime.atn.RuleStartState, ruleIndex: number, followState: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public isEpsilon(): boolean;
									public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
									public getSerializationType(): number;
									public constructor(ruleStart: android.databinding.internal.org.antlr.v4.runtime.atn.RuleStartState, ruleIndex: number, precedence: number, followState: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public matches(param0: number, param1: number, param2: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export abstract class SemanticContext extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext>;
									public static NONE: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext;
									public constructor();
									public static and(a: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext, b: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext): android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext;
									public eval(param0: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, param1: android.databinding.internal.org.antlr.v4.runtime.RuleContext): boolean;
									public evalPrecedence(parser: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, parserCallStack: android.databinding.internal.org.antlr.v4.runtime.RuleContext): android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext;
									public static or(a: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext, b: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext): android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext;
								}
								export module SemanticContext {
									export class AND extends android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext.Operator {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext.AND>;
										public opnds: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext[];
										public eval(param0: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, param1: android.databinding.internal.org.antlr.v4.runtime.RuleContext): boolean;
										public getOperands(): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext>;
										public hashCode(): number;
										public constructor();
										public toString(): string;
										public constructor(a: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext, b: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext);
										public equals(obj: any): boolean;
										public eval(parser: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, parserCallStack: android.databinding.internal.org.antlr.v4.runtime.RuleContext): boolean;
										public evalPrecedence(parser: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, parserCallStack: android.databinding.internal.org.antlr.v4.runtime.RuleContext): android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext;
									}
									export class OR extends android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext.Operator {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext.OR>;
										public opnds: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext[];
										public eval(param0: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, param1: android.databinding.internal.org.antlr.v4.runtime.RuleContext): boolean;
										public getOperands(): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext>;
										public hashCode(): number;
										public constructor();
										public toString(): string;
										public constructor(a: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext, b: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext);
										public equals(obj: any): boolean;
										public eval(parser: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, parserCallStack: android.databinding.internal.org.antlr.v4.runtime.RuleContext): boolean;
										public evalPrecedence(parser: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, parserCallStack: android.databinding.internal.org.antlr.v4.runtime.RuleContext): android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext;
									}
									export abstract class Operator extends android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext.Operator>;
										public getOperands(): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext>;
										public constructor();
									}
									export class PrecedencePredicate extends android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext implements java.lang.Comparable<android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext.PrecedencePredicate>  {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext.PrecedencePredicate>;
										public precedence: number;
										public eval(param0: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, param1: android.databinding.internal.org.antlr.v4.runtime.RuleContext): boolean;
										public compareTo(o: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext.PrecedencePredicate): number;
										public hashCode(): number;
										public constructor(precedence: number);
										public constructor();
										public toString(): string;
										public eval(parser: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, parserCallStack: android.databinding.internal.org.antlr.v4.runtime.RuleContext): boolean;
										public equals(obj: any): boolean;
										public evalPrecedence(parser: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, parserCallStack: android.databinding.internal.org.antlr.v4.runtime.RuleContext): android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext;
									}
									export class Predicate extends android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext.Predicate>;
										public ruleIndex: number;
										public predIndex: number;
										public isCtxDependent: boolean;
										public eval(param0: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, param1: android.databinding.internal.org.antlr.v4.runtime.RuleContext): boolean;
										public hashCode(): number;
										public constructor();
										public toString(): string;
										public constructor(ruleIndex: number, predIndex: number, isCtxDependent: boolean);
										public eval(parser: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, parserCallStack: android.databinding.internal.org.antlr.v4.runtime.RuleContext): boolean;
										public equals(obj: any): boolean;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class SetTransition extends android.databinding.internal.org.antlr.v4.runtime.atn.Transition {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.SetTransition>;
									public set: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState, set: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet);
									public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
									public label(): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public getSerializationType(): number;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public toString(): string;
									public matches(param0: number, param1: number, param2: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class SingletonPredictionContext extends android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.SingletonPredictionContext>;
									public parent: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public returnState: number;
									public equals(o: any): boolean;
									public getParent(index: number): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
									public getReturnState(param0: number): number;
									public size(): number;
									public toString(recog: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>): string;
									public getReturnState(index: number): number;
									public equals(param0: any): boolean;
									public toString(): string;
									public static create(parent: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext, returnState: number): android.databinding.internal.org.antlr.v4.runtime.atn.SingletonPredictionContext;
									public getParent(param0: number): android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContext;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class StarBlockStartState extends android.databinding.internal.org.antlr.v4.runtime.atn.BlockStartState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.StarBlockStartState>;
									public constructor();
									public getStateType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class StarLoopEntryState extends android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.StarLoopEntryState>;
									public loopBackState: android.databinding.internal.org.antlr.v4.runtime.atn.StarLoopbackState;
									public isPrecedenceDecision: boolean;
									public constructor();
									public getStateType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class StarLoopbackState extends android.databinding.internal.org.antlr.v4.runtime.atn.ATNState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.StarLoopbackState>;
									public constructor();
									public getLoopEntryState(): android.databinding.internal.org.antlr.v4.runtime.atn.StarLoopEntryState;
									public getStateType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class TokensStartState extends android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.TokensStartState>;
									public constructor();
									public getStateType(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export abstract class Transition extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.Transition>;
									public static EPSILON: number;
									public static RANGE: number;
									public static RULE: number;
									public static PREDICATE: number;
									public static ATOM: number;
									public static ACTION: number;
									public static SET: number;
									public static NOT_SET: number;
									public static WILDCARD: number;
									public static PRECEDENCE: number;
									public static serializationNames: java.util.List<string>;
									public static serializationTypes: java.util.Map<java.lang.Class<any>,java.lang.Integer>;
									public target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState;
									public isEpsilon(): boolean;
									public label(): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public getSerializationType(): number;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public matches(param0: number, param1: number, param2: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module atn {
								export class WildcardTransition extends android.databinding.internal.org.antlr.v4.runtime.atn.Transition {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.atn.WildcardTransition>;
									public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
									public getSerializationType(): number;
									public constructor(target: android.databinding.internal.org.antlr.v4.runtime.atn.ATNState);
									public toString(): string;
									public matches(param0: number, param1: number, param2: number): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module dfa {
								export class DFA extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.dfa.DFA>;
									public states: java.util.Map<android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState,android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState>;
									public s0: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public decision: number;
									public atnStartState: android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState;
									public isPrecedenceDfa(): boolean;
									public getPrecedenceStartState(precedence: number): android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState;
									public setPrecedenceStartState(precedence: number, startState: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState): void;
									public getStates(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState>;
									public constructor(atnStartState: android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState, decision: number);
									public toString(): string;
									public toLexerString(): string;
									/** @deprecated */
									public toString(tokenNames: string[]): string;
									public constructor(atnStartState: android.databinding.internal.org.antlr.v4.runtime.atn.DecisionState);
									public toString(vocabulary: android.databinding.internal.org.antlr.v4.runtime.Vocabulary): string;
									/** @deprecated */
									public setPrecedenceDfa(precedenceDfa: boolean): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module dfa {
								export class DFASerializer extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.dfa.DFASerializer>;
									public getStateString(s: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState): string;
									public getEdgeLabel(i: number): string;
									/** @deprecated */
									public constructor(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, tokenNames: string[]);
									public toString(): string;
									public constructor(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, vocabulary: android.databinding.internal.org.antlr.v4.runtime.Vocabulary);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module dfa {
								export class DFAState extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState>;
									public stateNumber: number;
									public configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet;
									public edges: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState[];
									public isAcceptState: boolean;
									public prediction: number;
									public lexerActionExecutor: android.databinding.internal.org.antlr.v4.runtime.atn.LexerActionExecutor;
									public requiresFullContext: boolean;
									public predicates: android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState.PredPrediction[];
									public equals(o: any): boolean;
									public constructor();
									public constructor(stateNumber: number);
									public hashCode(): number;
									public equals(obj: any): boolean;
									public toString(): string;
									public getAltSet(): java.util.Set<java.lang.Integer>;
									public constructor(configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet);
								}
								export module DFAState {
									export class PredPrediction extends java.lang.Object {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.dfa.DFAState.PredPrediction>;
										public pred: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext;
										public alt: number;
										public constructor(pred: android.databinding.internal.org.antlr.v4.runtime.atn.SemanticContext, alt: number);
										public toString(): string;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module dfa {
								export class LexerDFASerializer extends android.databinding.internal.org.antlr.v4.runtime.dfa.DFASerializer {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.dfa.LexerDFASerializer>;
									public getEdgeLabel(i: number): string;
									/** @deprecated */
									public constructor(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, tokenNames: string[]);
									public constructor(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA);
									public constructor(dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, vocabulary: android.databinding.internal.org.antlr.v4.runtime.Vocabulary);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export abstract class AbstractEqualityComparator<T>  extends android.databinding.internal.org.antlr.v4.runtime.misc.EqualityComparator<any> {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>>;
									public constructor();
									public hashCode(): number;
									public equals(param0: any, param1: any): boolean;
									public equals(obj: any): boolean;
									public hashCode(param0: any): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class Array2DHashSet<T>  extends java.util.Set<any> {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.Array2DHashSet<any>>;
									public static INITAL_CAPACITY: number;
									public static INITAL_BUCKET_CAPACITY: number;
									public static LOAD_FACTOR: number;
									public comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>;
									public buckets: any[][];
									public n: number;
									public threshold: number;
									public currentPrime: number;
									public initialBucketCapacity: number;
									public get(o: any): any;
									public add(param0: any): boolean;
									public iterator(): java.util.Iterator<any>;
									public removeIf(filter: any /* any*/): boolean;
									public retainAll(c: java.util.Collection<any>): boolean;
									public getBucket(o: any): number;
									public equals(o: any): boolean;
									public asElementType(o: any): any;
									public remove(param0: any): boolean;
									public contains(o: any): boolean;
									public containsAll(collection: java.util.Collection<any>): boolean;
									public stream(): java.util.stream.Stream<any>;
									public isEmpty(): boolean;
									public toArray(param0: any[]): any[];
									public getOrAdd(o: any): any;
									public addAll(c: java.util.Collection<any>): boolean;
									public contains(param0: any): boolean;
									public constructor();
									public hashCode(): number;
									public add(t: any): boolean;
									public parallelStream(): java.util.stream.Stream<any>;
									public size(): number;
									public createBucket(capacity: number): any[];
									public remove(o: any): boolean;
									public removeFast(obj: any): boolean;
									public toTableString(): string;
									public addAll(param0: java.util.Collection<any>): boolean;
									public expand(): void;
									public equals(param0: any): boolean;
									public toString(): string;
									public constructor(comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>, initialCapacity: number, initialBucketCapacity: number);
									public toArray(): any[];
									public clear(): void;
									public forEach(action: any /* any*/): void;
									public spliterator(): java.util.Spliterator<any>;
									public getOrAddImpl(o: any): any;
									public constructor(comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>);
									public containsFast(obj: any): boolean;
									public removeAll(param0: java.util.Collection<any>): boolean;
									public equals(obj: any): boolean;
									public createBuckets(capacity: number): any[][];
									public retainAll(param0: java.util.Collection<any>): boolean;
									public removeAll(c: java.util.Collection<any>): boolean;
									public containsAll(param0: java.util.Collection<any>): boolean;
									public toArray(a: any[]): any[];
								}
								export module Array2DHashSet {
									export class SetIterator extends java.util.Iterator<any> {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.Array2DHashSet.SetIterator>;
										public constructor(param0: any[]);
										public hasNext(): boolean;
										public remove(): void;
										public next(): any;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class DoubleKeyMap<Key1, Key2, Value>  extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.DoubleKeyMap<any,any,any>>;
									public constructor();
									public get(k1: Key1): java.util.Map<Key2,Value>;
									public values(k1: Key1): java.util.Collection<Value>;
									public keySet(): java.util.Set<Key1>;
									public keySet(k1: Key1): java.util.Set<Key2>;
									public get(k1: Key1, k2: Key2): Value;
									public put(k1: Key1, k2: Key2, v: Value): Value;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class EqualityComparator<T>  extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.EqualityComparator<any>>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.misc.EqualityComparator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										hashCode(param0: T): number;
										equals(param0: T, param1: T): boolean;
									});
									public constructor();
									public hashCode(): number;
									public equals(obj: any): boolean;
									public equals(param0: T, param1: T): boolean;
									public hashCode(param0: T): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class FlexibleHashMap<K, V>  extends java.util.Map<any,any> {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.FlexibleHashMap<any,any>>;
									public static INITAL_CAPACITY: number;
									public static INITAL_BUCKET_CAPACITY: number;
									public static LOAD_FACTOR: number;
									public comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>;
									public buckets: java.util.LinkedList<android.databinding.internal.org.antlr.v4.runtime.misc.FlexibleHashMap.Entry<any,any>>[];
									public n: number;
									public threshold: number;
									public currentPrime: number;
									public initialBucketCapacity: number;
									public remove(key: any, value: any): boolean;
									public keySet(): java.util.Set<any>;
									public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
									public putAll(m: java.util.Map<any,any>): void;
									public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
									public remove(key: any): any;
									public getBucket(key: any): number;
									public get(key: any): any;
									public replaceAll(function: any /* any<any,any,any>*/): void;
									public equals(o: any): boolean;
									public getOrDefault(key: any, defaultValue: any): any;
									public get(param0: any): any;
									public putAll(param0: java.util.Map<any,any>): void;
									public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
									public replace(key: any, oldValue: any, newValue: any): boolean;
									public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
									public put(param0: any, param1: any): any;
									public isEmpty(): boolean;
									public constructor();
									public hashCode(): number;
									public static main(args: string[]): void;
									public put(key: any, value: any): any;
									public size(): number;
									public containsValue(param0: any): boolean;
									public toTableString(): string;
									public expand(): void;
									public equals(param0: any): boolean;
									public toString(): string;
									public constructor(comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>, initialCapacity: number, initialBucketCapacity: number);
									public clear(): void;
									public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
									public containsValue(value: any): boolean;
									public constructor(comparator: android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any>);
									public remove(param0: any): any;
									public containsKey(param0: any): boolean;
									public equals(obj: any): boolean;
									public putIfAbsent(key: any, value: any): any;
									public replace(key: any, value: any): any;
									public values(): java.util.Collection<any>;
									public forEach(action: any /* any<any,any>*/): void;
									public containsKey(key: any): boolean;
								}
								export module FlexibleHashMap {
									export class Entry<K, V>  extends java.lang.Object {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.FlexibleHashMap.Entry<any,any>>;
										public key: K;
										public value: V;
										public toString(): string;
										public constructor(key: K, value: V);
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class IntSet extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.IntSet>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.misc.IntSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										add(param0: number): void;
										addAll(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
										and(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
										complement(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
										or(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
										subtract(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
										size(): number;
										isNil(): boolean;
										equals(param0: any): boolean;
										getSingleElement(): number;
										contains(param0: number): boolean;
										remove(param0: number): void;
										toList(): java.util.List<java.lang.Integer>;
										toString(): string;
									});
									public constructor();
									public add(param0: number): void;
									public complement(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
									public getSingleElement(): number;
									public size(): number;
									public equals(param0: any): boolean;
									public contains(param0: number): boolean;
									public toString(): string;
									public subtract(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
									public addAll(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
									public and(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
									public remove(param0: number): void;
									public toList(): java.util.List<java.lang.Integer>;
									public isNil(): boolean;
									public equals(obj: any): boolean;
									public or(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class IntegerList extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.IntegerList>;
									public constructor(list: java.util.Collection<java.lang.Integer>);
									public addAll(list: java.util.Collection<java.lang.Integer>): void;
									public trimToSize(): void;
									public removeRange(fromIndex: number, toIndex: number): void;
									public get(index: number): number;
									public equals(o: any): boolean;
									public contains(value: number): boolean;
									public addAll(list: android.databinding.internal.org.antlr.v4.runtime.misc.IntegerList): void;
									public binarySearch(key: number): number;
									public sort(): void;
									public isEmpty(): boolean;
									public constructor();
									public toArray(): number[];
									public hashCode(): number;
									public set(index: number, value: number): number;
									public size(): number;
									public add(value: number): void;
									public toString(): string;
									public binarySearch(fromIndex: number, toIndex: number, key: number): number;
									public clear(): void;
									public constructor(list: android.databinding.internal.org.antlr.v4.runtime.misc.IntegerList);
									public removeAt(index: number): number;
									public equals(obj: any): boolean;
									public constructor(capacity: number);
									public addAll(array: number[]): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class IntegerStack extends android.databinding.internal.org.antlr.v4.runtime.misc.IntegerList {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.IntegerStack>;
									public constructor();
									public push(value: number): void;
									public constructor(list: java.util.Collection<java.lang.Integer>);
									public peek(): number;
									public pop(): number;
									public constructor(capacity: number);
									public constructor(list: android.databinding.internal.org.antlr.v4.runtime.misc.IntegerList);
									public constructor(list: android.databinding.internal.org.antlr.v4.runtime.misc.IntegerStack);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class Interval extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.Interval>;
									public static INTERVAL_POOL_MAX_VALUE: number;
									public static INVALID: android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
									public a: number;
									public b: number;
									public static creates: number;
									public static misses: number;
									public static hits: number;
									public static outOfRange: number;
									public intersection(other: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
									public hashCode(): number;
									public differenceNotProperlyContained(other: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
									public startsAfterDisjoint(other: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): boolean;
									public disjoint(other: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): boolean;
									public toString(): string;
									public properlyContains(other: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): boolean;
									public union(other: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
									public adjacent(other: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): boolean;
									public equals(o: any): boolean;
									public startsBeforeNonDisjoint(other: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): boolean;
									public length(): number;
									public startsBeforeDisjoint(other: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): boolean;
									public static of(a: number, b: number): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
									public equals(obj: any): boolean;
									public constructor(a: number, b: number);
									public startsAfter(other: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): boolean;
									public startsAfterNonDisjoint(other: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class IntervalSet extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.misc.IntSet {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet>;
									public static COMPLETE_CHAR_SET: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public static EMPTY_SET: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public intervals: java.util.List<android.databinding.internal.org.antlr.v4.runtime.misc.Interval>;
									public readonly: boolean;
									public getIntervals(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.misc.Interval>;
									public static or(sets: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet[]): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public complement(minElement: number, maxElement: number): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public add(a: number, b: number): void;
									public addAll(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
									public toList(): java.util.List<java.lang.Integer>;
									public remove(param0: number): void;
									public setReadonly(readonly: boolean): void;
									public get(i: number): number;
									public subtract(a: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public remove(el: number): void;
									public and(other: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public addAll(set: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public contains(el: number): boolean;
									public constructor(intervals: java.util.List<android.databinding.internal.org.antlr.v4.runtime.misc.Interval>);
									public toString(elemAreChar: boolean): string;
									public toArray(): number[];
									public add(param0: number): void;
									/** @deprecated */
									public elementName(tokenNames: string[], a: number): string;
									public subtract(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
									public and(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
									public getMinElement(): number;
									public static of(a: number, b: number): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public constructor(...els: number[]);
									public toIntegerList(): android.databinding.internal.org.antlr.v4.runtime.misc.IntegerList;
									public isReadonly(): boolean;
									public getSingleElement(): number;
									public static subtract(left: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet, right: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public complement(vocabulary: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public toSet(): java.util.Set<java.lang.Integer>;
									public add(el: number): void;
									public toString(vocabulary: android.databinding.internal.org.antlr.v4.runtime.Vocabulary): string;
									public constructor(set: android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet);
									public or(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
									public hashCode(): number;
									public complement(param0: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntSet;
									public static of(a: number): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public size(): number;
									public equals(param0: any): boolean;
									public getMaxElement(): number;
									public toString(): string;
									public contains(param0: number): boolean;
									public or(a: android.databinding.internal.org.antlr.v4.runtime.misc.IntSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public clear(): void;
									public add(addition: android.databinding.internal.org.antlr.v4.runtime.misc.Interval): void;
									public isNil(): boolean;
									public equals(obj: any): boolean;
									/** @deprecated */
									public toString(tokenNames: string[]): string;
									public elementName(vocabulary: android.databinding.internal.org.antlr.v4.runtime.Vocabulary, a: number): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class LogManager extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.LogManager>;
									public records: java.util.List<android.databinding.internal.org.antlr.v4.runtime.misc.LogManager.Record>;
									public constructor();
									public save(): string;
									public static main(args: string[]): void;
									public save(filename: string): void;
									public log(component: string, msg: string): void;
									public log(msg: string): void;
									public toString(): string;
								}
								export module LogManager {
									export class Record extends java.lang.Object {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.LogManager.Record>;
										public constructor();
										public toString(): string;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class MultiMap<K, V>  extends java.util.LinkedHashMap<any,java.util.List<any>> {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.MultiMap<any,any>>;
									public remove(key: any, value: any): boolean;
									public keySet(): java.util.Set<any>;
									public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
									public putAll(m: java.util.Map<any,any>): void;
									public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
									public remove(key: any): any;
									public constructor(initialCapacity: number, loadFactor: number);
									public get(key: any): any;
									public replaceAll(function: any /* any<any,any,any>*/): void;
									public map(key: any, value: any): void;
									public equals(o: any): boolean;
									public getOrDefault(key: any, defaultValue: any): any;
									public get(param0: any): any;
									public putAll(param0: java.util.Map<any,any>): void;
									public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
									public replace(key: any, oldValue: any, newValue: any): boolean;
									public constructor(initialCapacity: number, loadFactor: number, accessOrder: boolean);
									public getPairs(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.misc.Pair<any,any>>;
									public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
									public constructor(initialCapacity: number);
									public put(param0: any, param1: any): any;
									public isEmpty(): boolean;
									public constructor();
									public hashCode(): number;
									public put(key: any, value: any): any;
									public size(): number;
									public containsValue(param0: any): boolean;
									public equals(param0: any): boolean;
									public clear(): void;
									public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
									public containsValue(value: any): boolean;
									public remove(param0: any): any;
									public constructor(m: java.util.Map<any,any>);
									public containsKey(param0: any): boolean;
									public putIfAbsent(key: any, value: any): any;
									public replace(key: any, value: any): any;
									public values(): java.util.Collection<any>;
									public forEach(action: any /* any<any,any>*/): void;
									public containsKey(key: any): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class MurmurHash extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.MurmurHash>;
									public hashCode(): number;
									public static hashCode(data: any[], seed: number): number;
									public static initialize(): number;
									public static finish(hash: number, numberOfWords: number): number;
									public static update(hash: number, value: number): number;
									public static update(hash: number, value: any): number;
									public static initialize(seed: number): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class NotNull extends java.lang.Object implements java.lang.annotation.Annotation {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.NotNull>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.misc.NotNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										equals(param0: any): boolean;
										hashCode(): number;
										toString(): string;
										annotationType(): java.lang.Class<any>;
									});
									public constructor();
									public hashCode(): number;
									public equals(param0: any): boolean;
									public annotationType(): java.lang.Class<any>;
									public equals(obj: any): boolean;
									public toString(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class ObjectEqualityComparator extends android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator<any> {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.ObjectEqualityComparator>;
									public static INSTANCE: android.databinding.internal.org.antlr.v4.runtime.misc.ObjectEqualityComparator;
									public constructor();
									public hashCode(): number;
									public hashCode(obj: any): number;
									public equals(param0: any, param1: any): boolean;
									public equals(a: any, b: any): boolean;
									public equals(obj: any): boolean;
									public hashCode(param0: any): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class OrderedHashSet<T>  extends java.util.LinkedHashSet<any> {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.OrderedHashSet<any>>;
									public add(param0: any): boolean;
									public add(value: any): boolean;
									public iterator(): java.util.Iterator<any>;
									public removeIf(filter: any /* any*/): boolean;
									public add(e: any): boolean;
									public constructor(initialCapacity: number, loadFactor: number);
									public get(i: number): any;
									public retainAll(c: java.util.Collection<any>): boolean;
									public constructor(c: java.util.Collection<any>);
									public equals(o: any): boolean;
									public remove(param0: any): boolean;
									public contains(o: any): boolean;
									public elements(): java.util.List<any>;
									public constructor(initialCapacity: number);
									public stream(): java.util.stream.Stream<any>;
									public isEmpty(): boolean;
									public toArray(param0: any[]): any[];
									public set(i: number, value: any): any;
									public contains(param0: any): boolean;
									public addAll(c: java.util.Collection<any>): boolean;
									public constructor();
									public hashCode(): number;
									public parallelStream(): java.util.stream.Stream<any>;
									public size(): number;
									public remove(o: any): boolean;
									public addAll(param0: java.util.Collection<any>): boolean;
									public equals(param0: any): boolean;
									public toString(): string;
									public clear(): void;
									public toArray(): any[];
									public spliterator(): java.util.Spliterator<any>;
									public removeAll(param0: java.util.Collection<any>): boolean;
									public clone(): any;
									public retainAll(param0: java.util.Collection<any>): boolean;
									public removeAll(c: java.util.Collection<any>): boolean;
									public containsAll(param0: java.util.Collection<any>): boolean;
									public remove(i: number): boolean;
									public toArray(a: any[]): any[];
									public containsAll(c: java.util.Collection<any>): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class Pair<A, B>  extends java.io.Serializable {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.Pair<any,any>>;
									public a: any;
									public b: any;
									public hashCode(): number;
									public constructor(a: any, b: any);
									public equals(obj: any): boolean;
									public toString(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class ParseCancellationException extends java.util.concurrent.CancellationException {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.ParseCancellationException>;
									public constructor();
									public constructor(cause: java.lang.Throwable);
									public constructor(message: string);
									public constructor(message: string, cause: java.lang.Throwable);
									public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class Predicate<T>  extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.Predicate<any>>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.misc.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										test(param0: T): boolean;
									});
									public constructor();
									public test(param0: T): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class TestRig extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.TestRig>;
									public constructor();
									public static main(args: string[]): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class Triple<A, B, C>  extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.Triple<any,any,any>>;
									public a: A;
									public b: B;
									public c: C;
									public hashCode(): number;
									public equals(obj: any): boolean;
									public toString(): string;
									public constructor(a: A, b: B, c: C);
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module misc {
								export class Utils extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.misc.Utils>;
									public constructor();
									public static toMap(keys: string[]): java.util.Map<string,java.lang.Integer>;
									public static join(iter: java.util.Iterator<any>, separator: string): string;
									public static readFile(fileName: string, encoding: string): string[];
									public static join(array: any[], separator: string): string;
									public static readFile(fileName: string): string[];
									public static escapeWhitespace(s: string, escapeSpaces: boolean): string;
									public static toCharArray(data: android.databinding.internal.org.antlr.v4.runtime.misc.IntegerList): string[];
									public static numNonnull(data: any[]): number;
									public static writeFile(fileName: string, content: string, encoding: string): void;
									public static toSet(bits: java.util.BitSet): android.databinding.internal.org.antlr.v4.runtime.misc.IntervalSet;
									public static removeAllElements(data: java.util.Collection<any>, value: any): void;
									public static writeFile(fileName: string, content: string): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export abstract class AbstractParseTreeVisitor<T>  extends android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any> {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.AbstractParseTreeVisitor<any>>;
									public constructor();
									public shouldVisitNextChild(node: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode, currentResult: any): boolean;
									public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): any;
									public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): any;
									public visitTerminal(node: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): any;
									public visitChildren(param0: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): any;
									public defaultResult(): any;
									public visitChildren(node: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): any;
									public aggregateResult(aggregate: any, nextResult: any): any;
									public visitErrorNode(node: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): any;
									public visit(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): any;
									public visit(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class ErrorNode extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getSymbol(): android.databinding.internal.org.antlr.v4.runtime.Token;
										getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
										getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
										accept(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
										getText(): string;
										toStringTree(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
										getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
										getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
										getPayload(): any;
										getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
										getChildCount(): number;
										toStringTree(): string;
									});
									public constructor();
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public accept(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
									public getText(): string;
									public toStringTree(): string;
									public toStringTree(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
									public getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
									public getChildCount(): number;
									public getPayload(): any;
									public getSymbol(): android.databinding.internal.org.antlr.v4.runtime.Token;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class ErrorNodeImpl extends android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNodeImpl implements android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNodeImpl>;
									public accept(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
									public toStringTree(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
									public constructor(symbol: android.databinding.internal.org.antlr.v4.runtime.Token);
									public getChildCount(): number;
									public toStringTree(parser: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
									public getPayload(): android.databinding.internal.org.antlr.v4.runtime.Token;
									public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
									public getSymbol(): android.databinding.internal.org.antlr.v4.runtime.Token;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
									public getChild(i: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public getText(): string;
									public constructor(token: android.databinding.internal.org.antlr.v4.runtime.Token);
									public toStringTree(): string;
									public getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
									public getPayload(): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class ParseTree extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.tree.SyntaxTree {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
										getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
										accept(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
										getText(): string;
										toStringTree(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
										getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
										getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
										getPayload(): any;
										getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
										getChildCount(): number;
										toStringTree(): string;
									});
									public constructor();
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public accept(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
									public getText(): string;
									public toStringTree(): string;
									public toStringTree(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
									public getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
									public getChildCount(): number;
									public getPayload(): any;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class ParseTreeListener extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
										visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
										enterEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
										exitEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
									});
									public constructor();
									public enterEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
									public exitEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
									public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
									public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class ParseTreeProperty<V>  extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeProperty<any>>;
									public annotations: java.util.Map<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree,V>;
									public constructor();
									public put(node: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, value: V): void;
									public removeFrom(node: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): V;
									public get(node: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): V;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class ParseTreeVisitor<T>  extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										visit(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): T;
										visitChildren(param0: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): T;
										visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): T;
										visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): T;
									});
									public constructor();
									public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): T;
									public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): T;
									public visitChildren(param0: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): T;
									public visit(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): T;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class ParseTreeWalker extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeWalker>;
									public static DEFAULT: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeWalker;
									public constructor();
									public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener, r: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): void;
									public walk(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener, t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): void;
									public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener, r: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class RuleNode extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
										getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
										getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
										accept(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
										getText(): string;
										toStringTree(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
										getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
										getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
										getPayload(): any;
										getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
										getChildCount(): number;
										toStringTree(): string;
									});
									public constructor();
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public accept(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
									public getText(): string;
									public toStringTree(): string;
									public toStringTree(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
									public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
									public getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
									public getChildCount(): number;
									public getPayload(): any;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class SyntaxTree extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.tree.Tree {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.SyntaxTree>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.tree.SyntaxTree interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
										getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
										getPayload(): any;
										getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
										getChildCount(): number;
										toStringTree(): string;
									});
									public constructor();
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
									public toStringTree(): string;
									public getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
									public getChildCount(): number;
									public getPayload(): any;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class TerminalNode extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getSymbol(): android.databinding.internal.org.antlr.v4.runtime.Token;
										getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
										getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
										accept(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
										getText(): string;
										toStringTree(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
										getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
										getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
										getPayload(): any;
										getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
										getChildCount(): number;
										toStringTree(): string;
									});
									public constructor();
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public accept(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
									public getText(): string;
									public toStringTree(): string;
									public toStringTree(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
									public getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
									public getChildCount(): number;
									public getPayload(): any;
									public getSymbol(): android.databinding.internal.org.antlr.v4.runtime.Token;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class TerminalNodeImpl extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNodeImpl>;
									public symbol: android.databinding.internal.org.antlr.v4.runtime.Token;
									public parent: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public accept(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
									public toStringTree(param0: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
									public constructor(symbol: android.databinding.internal.org.antlr.v4.runtime.Token);
									public getChildCount(): number;
									public toStringTree(parser: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
									public toString(): string;
									public getPayload(): android.databinding.internal.org.antlr.v4.runtime.Token;
									public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
									public getSymbol(): android.databinding.internal.org.antlr.v4.runtime.Token;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
									public getChild(i: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
									public getText(): string;
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
									public toStringTree(): string;
									public getSourceInterval(): android.databinding.internal.org.antlr.v4.runtime.misc.Interval;
									public getPayload(): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class Tree extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.Tree>;
									/**
									 * Constructs a new instance of the android.databinding.internal.org.antlr.v4.runtime.tree.Tree interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
										getPayload(): any;
										getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
										getChildCount(): number;
										toStringTree(): string;
									});
									public constructor();
									public getChild(param0: number): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
									public toStringTree(): string;
									public getChildCount(): number;
									public getPayload(): any;
									public getParent(): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export class Trees extends java.lang.Object {
									public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.Trees>;
									public static getRootOfSubtreeEnclosingRegion(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, startTokenIndex: number, stopTokenIndex: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
									public static getNodeText(t: android.databinding.internal.org.antlr.v4.runtime.tree.Tree, ruleNames: java.util.List<string>): string;
									public static isAncestorOf(t: android.databinding.internal.org.antlr.v4.runtime.tree.Tree, u: android.databinding.internal.org.antlr.v4.runtime.tree.Tree): boolean;
									public static getDescendants(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
									public static _findAllNodes(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, index: number, findTokens: boolean, nodes: java.util.List<any>): void;
									public static findAllTokenNodes(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, ttype: number): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
									public static toStringTree(t: android.databinding.internal.org.antlr.v4.runtime.tree.Tree, ruleNames: java.util.List<string>): string;
									public static getNodeText(t: android.databinding.internal.org.antlr.v4.runtime.tree.Tree, recog: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
									public static findNodeSuchThat(t: android.databinding.internal.org.antlr.v4.runtime.tree.Tree, pred: android.databinding.internal.org.antlr.v4.runtime.misc.Predicate<android.databinding.internal.org.antlr.v4.runtime.tree.Tree>): android.databinding.internal.org.antlr.v4.runtime.tree.Tree;
									public static findAllNodes(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, index: number, findTokens: boolean): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
									public static findAllRuleNodes(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, ruleIndex: number): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
									/** @deprecated */
									public static descendants(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
									public static stripChildrenOutOfRange(t: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, root: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, startIndex: number, stopIndex: number): void;
									public static getAncestors(t: android.databinding.internal.org.antlr.v4.runtime.tree.Tree): java.util.List<any>;
									public static getChildren(t: android.databinding.internal.org.antlr.v4.runtime.tree.Tree): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.Tree>;
									public static toStringTree(t: android.databinding.internal.org.antlr.v4.runtime.tree.Tree, recog: android.databinding.internal.org.antlr.v4.runtime.Parser): string;
									public static toStringTree(t: android.databinding.internal.org.antlr.v4.runtime.tree.Tree): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module pattern {
									export abstract class Chunk extends java.lang.Object {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.pattern.Chunk>;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module pattern {
									export class ParseTreeMatch extends java.lang.Object {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreeMatch>;
										public getAll(label: string): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
										public getPattern(): android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePattern;
										public getTree(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
										public toString(): string;
										public succeeded(): boolean;
										public get(label: string): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
										public constructor(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, pattern: android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePattern, labels: android.databinding.internal.org.antlr.v4.runtime.misc.MultiMap<string,android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>, mismatchedNode: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree);
										public getLabels(): android.databinding.internal.org.antlr.v4.runtime.misc.MultiMap<string,android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
										public getMismatchedNode(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module pattern {
									export class ParseTreePattern extends java.lang.Object {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePattern>;
										public getPattern(): string;
										public getPatternTree(): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
										public match(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreeMatch;
										public matches(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): boolean;
										public getMatcher(): android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePatternMatcher;
										public constructor(matcher: android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePatternMatcher, pattern: string, patternRuleIndex: number, patternTree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree);
										public findAll(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, xpath: string): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreeMatch>;
										public getPatternRuleIndex(): number;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module pattern {
									export class ParseTreePatternMatcher extends java.lang.Object {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePatternMatcher>;
										public start: string;
										public stop: string;
										public escape: string;
										public getRuleTagToken(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): android.databinding.internal.org.antlr.v4.runtime.tree.pattern.RuleTagToken;
										public match(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, pattern: string, patternRuleIndex: number): android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreeMatch;
										public split(pattern: string): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.pattern.Chunk>;
										public matches(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, pattern: android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePattern): boolean;
										public setDelimiters(start: string, stop: string, escapeLeft: string): void;
										public matches(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, pattern: string, patternRuleIndex: number): boolean;
										public compile(pattern: string, patternRuleIndex: number): android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePattern;
										public getLexer(): android.databinding.internal.org.antlr.v4.runtime.Lexer;
										public matchImpl(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, patternTree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, labels: android.databinding.internal.org.antlr.v4.runtime.misc.MultiMap<string,android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>): android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree;
										public constructor(lexer: android.databinding.internal.org.antlr.v4.runtime.Lexer, parser: android.databinding.internal.org.antlr.v4.runtime.Parser);
										public match(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, pattern: android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePattern): android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreeMatch;
										public tokenize(pattern: string): java.util.List<any>;
										public getParser(): android.databinding.internal.org.antlr.v4.runtime.Parser;
									}
									export module ParseTreePatternMatcher {
										export class CannotInvokeStartRule extends java.lang.RuntimeException {
											public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePatternMatcher.CannotInvokeStartRule>;
											public constructor(message: string);
											public constructor(message: string, cause: java.lang.Throwable);
											public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
											public constructor(e: java.lang.Throwable);
											public constructor();
											public constructor(cause: java.lang.Throwable);
										}
										export class StartRuleDoesNotConsumeFullPattern extends java.lang.RuntimeException {
											public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.pattern.ParseTreePatternMatcher.StartRuleDoesNotConsumeFullPattern>;
											public constructor(message: string);
											public constructor(message: string, cause: java.lang.Throwable);
											public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
											public constructor();
											public constructor(cause: java.lang.Throwable);
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
}

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module pattern {
									export class RuleTagToken extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.Token {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.pattern.RuleTagToken>;
										public getChannel(): number;
										public getRuleName(): string;
										public getCharPositionInLine(): number;
										public getLine(): number;
										public getTokenSource(): android.databinding.internal.org.antlr.v4.runtime.TokenSource;
										public getText(): string;
										public getStartIndex(): number;
										public constructor(ruleName: string, bypassTokenType: number);
										public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
										public getType(): number;
										public constructor(ruleName: string, bypassTokenType: number, label: string);
										public toString(): string;
										public getLabel(): string;
										public getTokenIndex(): number;
										public getStopIndex(): number;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module pattern {
									export class TagChunk extends android.databinding.internal.org.antlr.v4.runtime.tree.pattern.Chunk {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.pattern.TagChunk>;
										public constructor(tag: string);
										public toString(): string;
										public constructor(label: string, tag: string);
										public getLabel(): string;
										public getTag(): string;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module pattern {
									export class TextChunk extends android.databinding.internal.org.antlr.v4.runtime.tree.pattern.Chunk {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.pattern.TextChunk>;
										public constructor(text: string);
										public getText(): string;
										public toString(): string;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module pattern {
									export class TokenTagToken extends android.databinding.internal.org.antlr.v4.runtime.CommonToken {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.pattern.TokenTagToken>;
										public setChannel(channel: number): void;
										public setCharPositionInLine(param0: number): void;
										public constructor(tokenName: string, type: number);
										public setType(type: number): void;
										public getText(): string;
										public setCharPositionInLine(charPositionInLine: number): void;
										public setTokenIndex(index: number): void;
										public setText(param0: string): void;
										public setLine(line: number): void;
										public setType(param0: number): void;
										public setLine(param0: number): void;
										public setTokenIndex(param0: number): void;
										public constructor(type: number);
										public constructor(oldToken: android.databinding.internal.org.antlr.v4.runtime.Token);
										public getTokenName(): string;
										public toString(): string;
										public constructor(type: number, text: string);
										public constructor(tokenName: string, type: number, label: string);
										public getLabel(): string;
										public setText(text: string): void;
										public constructor(source: android.databinding.internal.org.antlr.v4.runtime.misc.Pair<android.databinding.internal.org.antlr.v4.runtime.TokenSource,android.databinding.internal.org.antlr.v4.runtime.CharStream>, type: number, channel: number, start: number, stop: number);
										public setChannel(param0: number): void;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module xpath {
									export class XPath extends java.lang.Object {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPath>;
										public static WILDCARD: string;
										public static NOT: string;
										public path: string;
										public elements: android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathElement[];
										public parser: android.databinding.internal.org.antlr.v4.runtime.Parser;
										public getXPathElement(wordToken: android.databinding.internal.org.antlr.v4.runtime.Token, anywhere: boolean): android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathElement;
										public split(path: string): android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathElement[];
										public constructor(parser: android.databinding.internal.org.antlr.v4.runtime.Parser, path: string);
										public evaluate(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
										public static findAll(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree, xpath: string, parser: android.databinding.internal.org.antlr.v4.runtime.Parser): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module xpath {
									export abstract class XPathElement extends java.lang.Object {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathElement>;
										public nodeName: string;
										public invert: boolean;
										public constructor(nodeName: string);
										public toString(): string;
										public evaluate(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module xpath {
									export class XPathLexer extends android.databinding.internal.org.antlr.v4.runtime.Lexer {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathLexer>;
										public static _decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[];
										public static _sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache;
										public static TOKEN_REF: number;
										public static RULE_REF: number;
										public static ANYWHERE: number;
										public static ROOT: number;
										public static WILDCARD: number;
										public static BANG: number;
										public static ID: number;
										public static STRING: number;
										public static modeNames: string[];
										public static ruleNames: string[];
										public static VOCABULARY: android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
										public static tokenNames: string[];
										public static _serializedATN: string;
										public static _ATN: android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
										public nextToken(): android.databinding.internal.org.antlr.v4.runtime.Token;
										public getSourceName(): string;
										public setTokenFactory(param0: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
										public getRuleNames(): string[];
										public getATN(): android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
										public getCharPositionInLine(): number;
										public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.IntStream;
										public getLine(): number;
										public constructor();
										public getTokenFactory(): android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>;
										public getVocabulary(): android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
										public constructor(input: android.databinding.internal.org.antlr.v4.runtime.CharStream);
										public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
										public getGrammarFileName(): string;
										public getModeNames(): string[];
										public action(_localctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext, ruleIndex: number, actionIndex: number): void;
										public setTokenFactory(factory: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
										/** @deprecated */
										public getTokenNames(): string[];
										public getSerializedATN(): string;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module xpath {
									export class XPathLexerErrorListener extends android.databinding.internal.org.antlr.v4.runtime.BaseErrorListener {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathLexerErrorListener>;
										public syntaxError(param0: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, param1: any, param2: number, param3: number, param4: string, param5: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
										public reportAmbiguity(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
										public reportAttemptingFullContext(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, conflictingAlts: java.util.BitSet, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
										public reportContextSensitivity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: number, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
										public reportAmbiguity(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: boolean, param5: java.util.BitSet, param6: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
										public reportAttemptingFullContext(param0: android.databinding.internal.org.antlr.v4.runtime.Parser, param1: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, param2: number, param3: number, param4: java.util.BitSet, param5: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
										public syntaxError(recognizer: android.databinding.internal.org.antlr.v4.runtime.Recognizer<any,any>, offendingSymbol: any, line: number, charPositionInLine: number, msg: string, e: android.databinding.internal.org.antlr.v4.runtime.RecognitionException): void;
										public constructor();
										public reportContextSensitivity(recognizer: android.databinding.internal.org.antlr.v4.runtime.Parser, dfa: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA, startIndex: number, stopIndex: number, prediction: number, configs: android.databinding.internal.org.antlr.v4.runtime.atn.ATNConfigSet): void;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module xpath {
									export class XPathRuleAnywhereElement extends android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathElement {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathRuleAnywhereElement>;
										public ruleIndex: number;
										public constructor(nodeName: string);
										public constructor(ruleName: string, ruleIndex: number);
										public evaluate(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
										public evaluate(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module xpath {
									export class XPathRuleElement extends android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathElement {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathRuleElement>;
										public ruleIndex: number;
										public constructor(nodeName: string);
										public constructor(ruleName: string, ruleIndex: number);
										public evaluate(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
										public evaluate(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module xpath {
									export class XPathTokenAnywhereElement extends android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathElement {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathTokenAnywhereElement>;
										public tokenType: number;
										public constructor(nodeName: string);
										public constructor(tokenName: string, tokenType: number);
										public evaluate(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
										public evaluate(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module xpath {
									export class XPathTokenElement extends android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathElement {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathTokenElement>;
										public tokenType: number;
										public constructor(nodeName: string);
										public constructor(tokenName: string, tokenType: number);
										public evaluate(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
										public evaluate(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module xpath {
									export class XPathWildcardAnywhereElement extends android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathElement {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathWildcardAnywhereElement>;
										public constructor(nodeName: string);
										public constructor();
										public evaluate(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
										public evaluate(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
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

declare module android {
	export module databinding {
		export module internal {
			export module org {
				export module antlr {
					export module v4 {
						export module runtime {
							export module tree {
								export module xpath {
									export class XPathWildcardElement extends android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathElement {
										public static class: java.lang.Class<android.databinding.internal.org.antlr.v4.runtime.tree.xpath.XPathWildcardElement>;
										public constructor(nodeName: string);
										public constructor();
										public evaluate(t: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
										public evaluate(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): java.util.Collection<android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree>;
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

declare module android {
	export module databinding {
		export module parser {
			export class BindingExpressionBaseListener extends java.lang.Object implements android.databinding.parser.BindingExpressionListener {
				public static class: java.lang.Class<android.databinding.parser.BindingExpressionBaseListener>;
				public exitResource(ctx: android.databinding.parser.BindingExpressionParser.ResourceContext): void;
				public exitTypeArguments(ctx: android.databinding.parser.BindingExpressionParser.TypeArgumentsContext): void;
				public exitExpressionList(param0: android.databinding.parser.BindingExpressionParser.ExpressionListContext): void;
				public exitExplicitGenericInvocationSuffix(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext): void;
				public exitQuestionQuestionOp(ctx: android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext): void;
				public exitFunctionRef(ctx: android.databinding.parser.BindingExpressionParser.FunctionRefContext): void;
				public enterGlobalMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext): void;
				public enterTernaryOp(param0: android.databinding.parser.BindingExpressionParser.TernaryOpContext): void;
				public exitLambdaParameterList(ctx: android.databinding.parser.BindingExpressionParser.LambdaParameterListContext): void;
				public enterIdentifier(param0: android.databinding.parser.BindingExpressionParser.IdentifierContext): void;
				public exitType(param0: android.databinding.parser.BindingExpressionParser.TypeContext): void;
				public enterArguments(param0: android.databinding.parser.BindingExpressionParser.ArgumentsContext): void;
				public exitBinaryOp(param0: android.databinding.parser.BindingExpressionParser.BinaryOpContext): void;
				public enterInferredFormalParameterList(param0: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext): void;
				public exitClassExtraction(param0: android.databinding.parser.BindingExpressionParser.ClassExtractionContext): void;
				public exitEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				public enterRootExpr(ctx: android.databinding.parser.BindingExpressionParser.RootExprContext): void;
				public enterCastOp(param0: android.databinding.parser.BindingExpressionParser.CastOpContext): void;
				public enterComparisonOp(ctx: android.databinding.parser.BindingExpressionParser.ComparisonOpContext): void;
				public exitClassOrInterfaceType(param0: android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext): void;
				public exitIdentifier(param0: android.databinding.parser.BindingExpressionParser.IdentifierContext): void;
				public exitExpressionList(ctx: android.databinding.parser.BindingExpressionParser.ExpressionListContext): void;
				public exitGrouping(ctx: android.databinding.parser.BindingExpressionParser.GroupingContext): void;
				public enterMathOp(ctx: android.databinding.parser.BindingExpressionParser.MathOpContext): void;
				public enterJavaLiteral(param0: android.databinding.parser.BindingExpressionParser.JavaLiteralContext): void;
				public exitExplicitGenericInvocation(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext): void;
				public enterResourceParameters(ctx: android.databinding.parser.BindingExpressionParser.ResourceParametersContext): void;
				public enterLambdaParameterList(ctx: android.databinding.parser.BindingExpressionParser.LambdaParameterListContext): void;
				public exitResource(param0: android.databinding.parser.BindingExpressionParser.ResourceContext): void;
				public enterClassExtraction(ctx: android.databinding.parser.BindingExpressionParser.ClassExtractionContext): void;
				public exitLambdaExpression(param0: android.databinding.parser.BindingExpressionParser.LambdaExpressionContext): void;
				public exitResources(param0: android.databinding.parser.BindingExpressionParser.ResourcesContext): void;
				public enterLiteral(param0: android.databinding.parser.BindingExpressionParser.LiteralContext): void;
				public exitBitShiftOp(ctx: android.databinding.parser.BindingExpressionParser.BitShiftOpContext): void;
				public exitResources(ctx: android.databinding.parser.BindingExpressionParser.ResourcesContext): void;
				public exitType(ctx: android.databinding.parser.BindingExpressionParser.TypeContext): void;
				public enterRootLambda(ctx: android.databinding.parser.BindingExpressionParser.RootLambdaContext): void;
				public exitComparisonOp(ctx: android.databinding.parser.BindingExpressionParser.ComparisonOpContext): void;
				public exitPrimary(param0: android.databinding.parser.BindingExpressionParser.PrimaryContext): void;
				public enterSingleLambdaParameter(param0: android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext): void;
				public enterRootExpr(param0: android.databinding.parser.BindingExpressionParser.RootExprContext): void;
				public enterTypeArguments(param0: android.databinding.parser.BindingExpressionParser.TypeArgumentsContext): void;
				public exitIdentifier(ctx: android.databinding.parser.BindingExpressionParser.IdentifierContext): void;
				public exitResourceParameters(ctx: android.databinding.parser.BindingExpressionParser.ResourceParametersContext): void;
				public exitJavaLiteral(param0: android.databinding.parser.BindingExpressionParser.JavaLiteralContext): void;
				public exitLiteral(param0: android.databinding.parser.BindingExpressionParser.LiteralContext): void;
				public enterArguments(ctx: android.databinding.parser.BindingExpressionParser.ArgumentsContext): void;
				public exitExplicitGenericInvocation(ctx: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext): void;
				public enterDotOp(param0: android.databinding.parser.BindingExpressionParser.DotOpContext): void;
				public exitRootExpr(ctx: android.databinding.parser.BindingExpressionParser.RootExprContext): void;
				public enterMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.MethodInvocationContext): void;
				public enterConstantValue(param0: android.databinding.parser.BindingExpressionParser.ConstantValueContext): void;
				public exitPrimary(ctx: android.databinding.parser.BindingExpressionParser.PrimaryContext): void;
				public enterTernaryOp(ctx: android.databinding.parser.BindingExpressionParser.TernaryOpContext): void;
				public exitStringLiteral(param0: android.databinding.parser.BindingExpressionParser.StringLiteralContext): void;
				public enterFunctionRef(param0: android.databinding.parser.BindingExpressionParser.FunctionRefContext): void;
				public exitMathOp(ctx: android.databinding.parser.BindingExpressionParser.MathOpContext): void;
				public exitBinaryOp(ctx: android.databinding.parser.BindingExpressionParser.BinaryOpContext): void;
				public enterDefaults(ctx: android.databinding.parser.BindingExpressionParser.DefaultsContext): void;
				public exitLambdaParameterList(param0: android.databinding.parser.BindingExpressionParser.LambdaParameterListContext): void;
				public enterSingleLambdaParameter(ctx: android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext): void;
				public exitUnaryOp(ctx: android.databinding.parser.BindingExpressionParser.UnaryOpContext): void;
				public exitTernaryOp(param0: android.databinding.parser.BindingExpressionParser.TernaryOpContext): void;
				public enterClassExtraction(param0: android.databinding.parser.BindingExpressionParser.ClassExtractionContext): void;
				public enterRootLambda(param0: android.databinding.parser.BindingExpressionParser.RootLambdaContext): void;
				public exitGlobalMethodInvocation(ctx: android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext): void;
				public enterExpressionList(ctx: android.databinding.parser.BindingExpressionParser.ExpressionListContext): void;
				public exitClassOrInterfaceType(ctx: android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext): void;
				public enterLambdaExpression(param0: android.databinding.parser.BindingExpressionParser.LambdaExpressionContext): void;
				public exitMathOp(param0: android.databinding.parser.BindingExpressionParser.MathOpContext): void;
				public enterExplicitGenericInvocation(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext): void;
				public exitBracketOp(ctx: android.databinding.parser.BindingExpressionParser.BracketOpContext): void;
				public enterMathOp(param0: android.databinding.parser.BindingExpressionParser.MathOpContext): void;
				public enterEveryRule(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				public enterLambdaExpression(ctx: android.databinding.parser.BindingExpressionParser.LambdaExpressionContext): void;
				public enterAndOrOp(ctx: android.databinding.parser.BindingExpressionParser.AndOrOpContext): void;
				public exitRootLambda(param0: android.databinding.parser.BindingExpressionParser.RootLambdaContext): void;
				public enterConstantValue(ctx: android.databinding.parser.BindingExpressionParser.ConstantValueContext): void;
				public exitCastOp(param0: android.databinding.parser.BindingExpressionParser.CastOpContext): void;
				public exitDefaults(param0: android.databinding.parser.BindingExpressionParser.DefaultsContext): void;
				public enterGrouping(param0: android.databinding.parser.BindingExpressionParser.GroupingContext): void;
				public exitComparisonOp(param0: android.databinding.parser.BindingExpressionParser.ComparisonOpContext): void;
				public enterBracketOp(param0: android.databinding.parser.BindingExpressionParser.BracketOpContext): void;
				public enterPrimary(param0: android.databinding.parser.BindingExpressionParser.PrimaryContext): void;
				public enterEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				public exitRootLambda(ctx: android.databinding.parser.BindingExpressionParser.RootLambdaContext): void;
				public enterExpressionList(param0: android.databinding.parser.BindingExpressionParser.ExpressionListContext): void;
				public enterInstanceOfOp(param0: android.databinding.parser.BindingExpressionParser.InstanceOfOpContext): void;
				public enterPrimitiveType(param0: android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext): void;
				public enterResource(param0: android.databinding.parser.BindingExpressionParser.ResourceContext): void;
				public enterCastOp(ctx: android.databinding.parser.BindingExpressionParser.CastOpContext): void;
				public enterClassOrInterfaceType(param0: android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext): void;
				public constructor();
				public exitDotOp(param0: android.databinding.parser.BindingExpressionParser.DotOpContext): void;
				public enterBinaryOp(ctx: android.databinding.parser.BindingExpressionParser.BinaryOpContext): void;
				public enterGlobalMethodInvocation(ctx: android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext): void;
				public enterUnaryOp(ctx: android.databinding.parser.BindingExpressionParser.UnaryOpContext): void;
				public exitStringLiteral(ctx: android.databinding.parser.BindingExpressionParser.StringLiteralContext): void;
				public exitLambdaExpression(ctx: android.databinding.parser.BindingExpressionParser.LambdaExpressionContext): void;
				public exitJavaLiteral(ctx: android.databinding.parser.BindingExpressionParser.JavaLiteralContext): void;
				public enterResourceParameters(param0: android.databinding.parser.BindingExpressionParser.ResourceParametersContext): void;
				public exitUnaryOp(param0: android.databinding.parser.BindingExpressionParser.UnaryOpContext): void;
				public enterResources(param0: android.databinding.parser.BindingExpressionParser.ResourcesContext): void;
				public enterExplicitGenericInvocationSuffix(ctx: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext): void;
				public enterUnaryOp(param0: android.databinding.parser.BindingExpressionParser.UnaryOpContext): void;
				public exitInstanceOfOp(ctx: android.databinding.parser.BindingExpressionParser.InstanceOfOpContext): void;
				public exitConstantValue(param0: android.databinding.parser.BindingExpressionParser.ConstantValueContext): void;
				public exitSingleLambdaParameter(ctx: android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext): void;
				public enterQuestionQuestionOp(ctx: android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext): void;
				public enterJavaLiteral(ctx: android.databinding.parser.BindingExpressionParser.JavaLiteralContext): void;
				public enterPrimitiveType(ctx: android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext): void;
				public exitExplicitGenericInvocationSuffix(ctx: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext): void;
				public exitQuestionQuestionOp(param0: android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext): void;
				public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
				public enterGrouping(ctx: android.databinding.parser.BindingExpressionParser.GroupingContext): void;
				public visitErrorNode(node: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
				public exitCastOp(ctx: android.databinding.parser.BindingExpressionParser.CastOpContext): void;
				public enterLiteral(ctx: android.databinding.parser.BindingExpressionParser.LiteralContext): void;
				public exitRootExpr(param0: android.databinding.parser.BindingExpressionParser.RootExprContext): void;
				public enterComparisonOp(param0: android.databinding.parser.BindingExpressionParser.ComparisonOpContext): void;
				public enterResources(ctx: android.databinding.parser.BindingExpressionParser.ResourcesContext): void;
				public exitFunctionRef(param0: android.databinding.parser.BindingExpressionParser.FunctionRefContext): void;
				public enterType(param0: android.databinding.parser.BindingExpressionParser.TypeContext): void;
				public enterExplicitGenericInvocationSuffix(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext): void;
				public exitLiteral(ctx: android.databinding.parser.BindingExpressionParser.LiteralContext): void;
				public exitMethodInvocation(ctx: android.databinding.parser.BindingExpressionParser.MethodInvocationContext): void;
				public exitGlobalMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext): void;
				public enterResource(ctx: android.databinding.parser.BindingExpressionParser.ResourceContext): void;
				public enterClassOrInterfaceType(ctx: android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext): void;
				public enterQuestionQuestionOp(param0: android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext): void;
				public enterInstanceOfOp(ctx: android.databinding.parser.BindingExpressionParser.InstanceOfOpContext): void;
				public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
				public exitBracketOp(param0: android.databinding.parser.BindingExpressionParser.BracketOpContext): void;
				public enterDotOp(ctx: android.databinding.parser.BindingExpressionParser.DotOpContext): void;
				public exitArguments(ctx: android.databinding.parser.BindingExpressionParser.ArgumentsContext): void;
				public enterBinaryOp(param0: android.databinding.parser.BindingExpressionParser.BinaryOpContext): void;
				public enterExplicitGenericInvocation(ctx: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext): void;
				public exitInferredFormalParameterList(param0: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext): void;
				public exitResourceParameters(param0: android.databinding.parser.BindingExpressionParser.ResourceParametersContext): void;
				public visitTerminal(node: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
				public exitSingleLambdaParameter(param0: android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext): void;
				public enterAndOrOp(param0: android.databinding.parser.BindingExpressionParser.AndOrOpContext): void;
				public exitAndOrOp(param0: android.databinding.parser.BindingExpressionParser.AndOrOpContext): void;
				public exitConstantValue(ctx: android.databinding.parser.BindingExpressionParser.ConstantValueContext): void;
				public exitAndOrOp(ctx: android.databinding.parser.BindingExpressionParser.AndOrOpContext): void;
				public enterMethodInvocation(ctx: android.databinding.parser.BindingExpressionParser.MethodInvocationContext): void;
				public exitPrimitiveType(ctx: android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext): void;
				public exitEveryRule(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				public exitClassExtraction(ctx: android.databinding.parser.BindingExpressionParser.ClassExtractionContext): void;
				public enterFunctionRef(ctx: android.databinding.parser.BindingExpressionParser.FunctionRefContext): void;
				public exitTernaryOp(ctx: android.databinding.parser.BindingExpressionParser.TernaryOpContext): void;
				public exitDotOp(ctx: android.databinding.parser.BindingExpressionParser.DotOpContext): void;
				public exitArguments(param0: android.databinding.parser.BindingExpressionParser.ArgumentsContext): void;
				public enterType(ctx: android.databinding.parser.BindingExpressionParser.TypeContext): void;
				public exitInstanceOfOp(param0: android.databinding.parser.BindingExpressionParser.InstanceOfOpContext): void;
				public exitInferredFormalParameterList(ctx: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext): void;
				public enterStringLiteral(param0: android.databinding.parser.BindingExpressionParser.StringLiteralContext): void;
				public enterBitShiftOp(ctx: android.databinding.parser.BindingExpressionParser.BitShiftOpContext): void;
				public enterBitShiftOp(param0: android.databinding.parser.BindingExpressionParser.BitShiftOpContext): void;
				public exitDefaults(ctx: android.databinding.parser.BindingExpressionParser.DefaultsContext): void;
				public enterStringLiteral(ctx: android.databinding.parser.BindingExpressionParser.StringLiteralContext): void;
				public exitGrouping(param0: android.databinding.parser.BindingExpressionParser.GroupingContext): void;
				public exitTypeArguments(param0: android.databinding.parser.BindingExpressionParser.TypeArgumentsContext): void;
				public enterTypeArguments(ctx: android.databinding.parser.BindingExpressionParser.TypeArgumentsContext): void;
				public enterDefaults(param0: android.databinding.parser.BindingExpressionParser.DefaultsContext): void;
				public enterLambdaParameterList(param0: android.databinding.parser.BindingExpressionParser.LambdaParameterListContext): void;
				public enterIdentifier(ctx: android.databinding.parser.BindingExpressionParser.IdentifierContext): void;
				public exitPrimitiveType(param0: android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext): void;
				public exitMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.MethodInvocationContext): void;
				public enterPrimary(ctx: android.databinding.parser.BindingExpressionParser.PrimaryContext): void;
				public enterBracketOp(ctx: android.databinding.parser.BindingExpressionParser.BracketOpContext): void;
				public exitBitShiftOp(param0: android.databinding.parser.BindingExpressionParser.BitShiftOpContext): void;
				public enterInferredFormalParameterList(ctx: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext): void;
			}
		}
	}
}

declare module android {
	export module databinding {
		export module parser {
			export class BindingExpressionBaseVisitor<T>  extends android.databinding.internal.org.antlr.v4.runtime.tree.AbstractParseTreeVisitor<any> implements android.databinding.parser.BindingExpressionVisitor<any>  {
				public static class: java.lang.Class<android.databinding.parser.BindingExpressionBaseVisitor<any>>;
				public visitBitShiftOp(param0: android.databinding.parser.BindingExpressionParser.BitShiftOpContext): any;
				public visitFunctionRef(ctx: android.databinding.parser.BindingExpressionParser.FunctionRefContext): any;
				public visitSingleLambdaParameter(param0: android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext): any;
				public visitClassOrInterfaceType(param0: android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext): any;
				public visitStringLiteral(param0: android.databinding.parser.BindingExpressionParser.StringLiteralContext): any;
				public visit(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): any;
				public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): any;
				public visitAndOrOp(param0: android.databinding.parser.BindingExpressionParser.AndOrOpContext): any;
				public visit(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): any;
				public visitClassOrInterfaceType(ctx: android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext): any;
				public visitDotOp(param0: android.databinding.parser.BindingExpressionParser.DotOpContext): any;
				public visitTernaryOp(ctx: android.databinding.parser.BindingExpressionParser.TernaryOpContext): any;
				public visitType(ctx: android.databinding.parser.BindingExpressionParser.TypeContext): any;
				public visitInstanceOfOp(param0: android.databinding.parser.BindingExpressionParser.InstanceOfOpContext): any;
				public constructor();
				public visitPrimary(ctx: android.databinding.parser.BindingExpressionParser.PrimaryContext): any;
				public visitLiteral(param0: android.databinding.parser.BindingExpressionParser.LiteralContext): any;
				public visitArguments(ctx: android.databinding.parser.BindingExpressionParser.ArgumentsContext): any;
				public visitTerminal(node: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): any;
				public visitDefaults(param0: android.databinding.parser.BindingExpressionParser.DefaultsContext): any;
				public visitMethodInvocation(ctx: android.databinding.parser.BindingExpressionParser.MethodInvocationContext): any;
				public visitResources(ctx: android.databinding.parser.BindingExpressionParser.ResourcesContext): any;
				public visitSingleLambdaParameter(ctx: android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext): any;
				public visitArguments(param0: android.databinding.parser.BindingExpressionParser.ArgumentsContext): any;
				public visitInstanceOfOp(ctx: android.databinding.parser.BindingExpressionParser.InstanceOfOpContext): any;
				public visitStringLiteral(ctx: android.databinding.parser.BindingExpressionParser.StringLiteralContext): any;
				public visitComparisonOp(ctx: android.databinding.parser.BindingExpressionParser.ComparisonOpContext): any;
				public visitQuestionQuestionOp(ctx: android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext): any;
				public visitLambdaParameterList(param0: android.databinding.parser.BindingExpressionParser.LambdaParameterListContext): any;
				public visitExplicitGenericInvocation(ctx: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext): any;
				public visitMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.MethodInvocationContext): any;
				public visitTernaryOp(param0: android.databinding.parser.BindingExpressionParser.TernaryOpContext): any;
				public visitRootLambda(param0: android.databinding.parser.BindingExpressionParser.RootLambdaContext): any;
				public visitGlobalMethodInvocation(ctx: android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext): any;
				public visitCastOp(param0: android.databinding.parser.BindingExpressionParser.CastOpContext): any;
				public visitGrouping(ctx: android.databinding.parser.BindingExpressionParser.GroupingContext): any;
				public visitExplicitGenericInvocationSuffix(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext): any;
				public visitResources(param0: android.databinding.parser.BindingExpressionParser.ResourcesContext): any;
				public visitBinaryOp(ctx: android.databinding.parser.BindingExpressionParser.BinaryOpContext): any;
				public visitInferredFormalParameterList(param0: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext): any;
				public visitUnaryOp(param0: android.databinding.parser.BindingExpressionParser.UnaryOpContext): any;
				public visitResourceParameters(ctx: android.databinding.parser.BindingExpressionParser.ResourceParametersContext): any;
				public visitComparisonOp(param0: android.databinding.parser.BindingExpressionParser.ComparisonOpContext): any;
				public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): any;
				public visitRootExpr(param0: android.databinding.parser.BindingExpressionParser.RootExprContext): any;
				public visitPrimary(param0: android.databinding.parser.BindingExpressionParser.PrimaryContext): any;
				public visitBinaryOp(param0: android.databinding.parser.BindingExpressionParser.BinaryOpContext): any;
				public visitDotOp(ctx: android.databinding.parser.BindingExpressionParser.DotOpContext): any;
				public visitGrouping(param0: android.databinding.parser.BindingExpressionParser.GroupingContext): any;
				public visitExplicitGenericInvocation(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext): any;
				public visitIdentifier(param0: android.databinding.parser.BindingExpressionParser.IdentifierContext): any;
				public visitQuestionQuestionOp(param0: android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext): any;
				public visitResourceParameters(param0: android.databinding.parser.BindingExpressionParser.ResourceParametersContext): any;
				public visitResource(ctx: android.databinding.parser.BindingExpressionParser.ResourceContext): any;
				public visitLiteral(ctx: android.databinding.parser.BindingExpressionParser.LiteralContext): any;
				public visitMathOp(param0: android.databinding.parser.BindingExpressionParser.MathOpContext): any;
				public visitPrimitiveType(param0: android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext): any;
				public visitResource(param0: android.databinding.parser.BindingExpressionParser.ResourceContext): any;
				public visitPrimitiveType(ctx: android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext): any;
				public visitUnaryOp(ctx: android.databinding.parser.BindingExpressionParser.UnaryOpContext): any;
				public visitGlobalMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext): any;
				public visitJavaLiteral(param0: android.databinding.parser.BindingExpressionParser.JavaLiteralContext): any;
				public visitLambdaParameterList(ctx: android.databinding.parser.BindingExpressionParser.LambdaParameterListContext): any;
				public visitBracketOp(ctx: android.databinding.parser.BindingExpressionParser.BracketOpContext): any;
				public visitJavaLiteral(ctx: android.databinding.parser.BindingExpressionParser.JavaLiteralContext): any;
				public visitLambdaExpression(ctx: android.databinding.parser.BindingExpressionParser.LambdaExpressionContext): any;
				public visitExpressionList(param0: android.databinding.parser.BindingExpressionParser.ExpressionListContext): any;
				public visitFunctionRef(param0: android.databinding.parser.BindingExpressionParser.FunctionRefContext): any;
				public visitLambdaExpression(param0: android.databinding.parser.BindingExpressionParser.LambdaExpressionContext): any;
				public visitMathOp(ctx: android.databinding.parser.BindingExpressionParser.MathOpContext): any;
				public visitTypeArguments(ctx: android.databinding.parser.BindingExpressionParser.TypeArgumentsContext): any;
				public visitBracketOp(param0: android.databinding.parser.BindingExpressionParser.BracketOpContext): any;
				public visitClassExtraction(param0: android.databinding.parser.BindingExpressionParser.ClassExtractionContext): any;
				public visitExpressionList(ctx: android.databinding.parser.BindingExpressionParser.ExpressionListContext): any;
				public visitAndOrOp(ctx: android.databinding.parser.BindingExpressionParser.AndOrOpContext): any;
				public visitCastOp(ctx: android.databinding.parser.BindingExpressionParser.CastOpContext): any;
				public visitConstantValue(ctx: android.databinding.parser.BindingExpressionParser.ConstantValueContext): any;
				public visitExplicitGenericInvocationSuffix(ctx: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext): any;
				public visitConstantValue(param0: android.databinding.parser.BindingExpressionParser.ConstantValueContext): any;
				public visitRootExpr(ctx: android.databinding.parser.BindingExpressionParser.RootExprContext): any;
				public visitRootLambda(ctx: android.databinding.parser.BindingExpressionParser.RootLambdaContext): any;
				public visitTypeArguments(param0: android.databinding.parser.BindingExpressionParser.TypeArgumentsContext): any;
				public visitBitShiftOp(ctx: android.databinding.parser.BindingExpressionParser.BitShiftOpContext): any;
				public visitClassExtraction(ctx: android.databinding.parser.BindingExpressionParser.ClassExtractionContext): any;
				public visitInferredFormalParameterList(ctx: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext): any;
				public visitType(param0: android.databinding.parser.BindingExpressionParser.TypeContext): any;
				public visitIdentifier(ctx: android.databinding.parser.BindingExpressionParser.IdentifierContext): any;
				public visitErrorNode(node: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): any;
				public visitChildren(node: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): any;
				public visitDefaults(ctx: android.databinding.parser.BindingExpressionParser.DefaultsContext): any;
				public visitChildren(param0: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): any;
			}
		}
	}
}

declare module android {
	export module databinding {
		export module parser {
			export class BindingExpressionLexer extends android.databinding.internal.org.antlr.v4.runtime.Lexer {
				public static class: java.lang.Class<android.databinding.parser.BindingExpressionLexer>;
				public static _decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[];
				public static _sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache;
				public static T__0: number;
				public static T__1: number;
				public static T__2: number;
				public static T__3: number;
				public static T__4: number;
				public static T__5: number;
				public static T__6: number;
				public static T__7: number;
				public static T__8: number;
				public static T__9: number;
				public static T__10: number;
				public static T__11: number;
				public static T__12: number;
				public static T__13: number;
				public static T__14: number;
				public static T__15: number;
				public static T__16: number;
				public static T__17: number;
				public static T__18: number;
				public static T__19: number;
				public static T__20: number;
				public static T__21: number;
				public static T__22: number;
				public static T__23: number;
				public static T__24: number;
				public static T__25: number;
				public static T__26: number;
				public static T__27: number;
				public static T__28: number;
				public static T__29: number;
				public static T__30: number;
				public static T__31: number;
				public static T__32: number;
				public static T__33: number;
				public static T__34: number;
				public static T__35: number;
				public static T__36: number;
				public static T__37: number;
				public static T__38: number;
				public static T__39: number;
				public static T__40: number;
				public static T__41: number;
				public static T__42: number;
				public static T__43: number;
				public static THIS: number;
				public static VoidLiteral: number;
				public static IntegerLiteral: number;
				public static FloatingPointLiteral: number;
				public static BooleanLiteral: number;
				public static CharacterLiteral: number;
				public static SingleQuoteString: number;
				public static DoubleQuoteString: number;
				public static NullLiteral: number;
				public static Identifier: number;
				public static WS: number;
				public static ResourceReference: number;
				public static PackageName: number;
				public static ResourceType: number;
				public static modeNames: string[];
				public static ruleNames: string[];
				public static VOCABULARY: android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
				public static tokenNames: string[];
				public static _serializedATN: string;
				public static _ATN: android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
				public getModeNames(): string[];
				public sempred(_localctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext, ruleIndex: number, actionIndex: number): boolean;
				/** @deprecated */
				public getTokenNames(): string[];
				public getLine(): number;
				public setTokenFactory(factory: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
				public getSerializedATN(): string;
				public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
				public getRuleNames(): string[];
				public getGrammarFileName(): string;
				public sempred(_localctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext, ruleIndex: number, predIndex: number): boolean;
				public constructor();
				public getATN(): android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
				public getCharPositionInLine(): number;
				public constructor(input: android.databinding.internal.org.antlr.v4.runtime.CharStream);
				public getTokenFactory(): android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>;
				public nextToken(): android.databinding.internal.org.antlr.v4.runtime.Token;
				public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.IntStream;
				public getVocabulary(): android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
				public setTokenFactory(param0: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
				public getSourceName(): string;
			}
		}
	}
}

declare module android {
	export module databinding {
		export module parser {
			export class BindingExpressionListener extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener {
				public static class: java.lang.Class<android.databinding.parser.BindingExpressionListener>;
				/**
				 * Constructs a new instance of the android.databinding.parser.BindingExpressionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					enterRootExpr(param0: android.databinding.parser.BindingExpressionParser.RootExprContext): void;
					exitRootExpr(param0: android.databinding.parser.BindingExpressionParser.RootExprContext): void;
					enterRootLambda(param0: android.databinding.parser.BindingExpressionParser.RootLambdaContext): void;
					exitRootLambda(param0: android.databinding.parser.BindingExpressionParser.RootLambdaContext): void;
					enterDefaults(param0: android.databinding.parser.BindingExpressionParser.DefaultsContext): void;
					exitDefaults(param0: android.databinding.parser.BindingExpressionParser.DefaultsContext): void;
					enterConstantValue(param0: android.databinding.parser.BindingExpressionParser.ConstantValueContext): void;
					exitConstantValue(param0: android.databinding.parser.BindingExpressionParser.ConstantValueContext): void;
					enterLambdaExpression(param0: android.databinding.parser.BindingExpressionParser.LambdaExpressionContext): void;
					exitLambdaExpression(param0: android.databinding.parser.BindingExpressionParser.LambdaExpressionContext): void;
					enterSingleLambdaParameter(param0: android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext): void;
					exitSingleLambdaParameter(param0: android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext): void;
					enterLambdaParameterList(param0: android.databinding.parser.BindingExpressionParser.LambdaParameterListContext): void;
					exitLambdaParameterList(param0: android.databinding.parser.BindingExpressionParser.LambdaParameterListContext): void;
					enterInferredFormalParameterList(param0: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext): void;
					exitInferredFormalParameterList(param0: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext): void;
					enterCastOp(param0: android.databinding.parser.BindingExpressionParser.CastOpContext): void;
					exitCastOp(param0: android.databinding.parser.BindingExpressionParser.CastOpContext): void;
					enterComparisonOp(param0: android.databinding.parser.BindingExpressionParser.ComparisonOpContext): void;
					exitComparisonOp(param0: android.databinding.parser.BindingExpressionParser.ComparisonOpContext): void;
					enterUnaryOp(param0: android.databinding.parser.BindingExpressionParser.UnaryOpContext): void;
					exitUnaryOp(param0: android.databinding.parser.BindingExpressionParser.UnaryOpContext): void;
					enterBracketOp(param0: android.databinding.parser.BindingExpressionParser.BracketOpContext): void;
					exitBracketOp(param0: android.databinding.parser.BindingExpressionParser.BracketOpContext): void;
					enterResource(param0: android.databinding.parser.BindingExpressionParser.ResourceContext): void;
					exitResource(param0: android.databinding.parser.BindingExpressionParser.ResourceContext): void;
					enterQuestionQuestionOp(param0: android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext): void;
					exitQuestionQuestionOp(param0: android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext): void;
					enterGrouping(param0: android.databinding.parser.BindingExpressionParser.GroupingContext): void;
					exitGrouping(param0: android.databinding.parser.BindingExpressionParser.GroupingContext): void;
					enterMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.MethodInvocationContext): void;
					exitMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.MethodInvocationContext): void;
					enterBitShiftOp(param0: android.databinding.parser.BindingExpressionParser.BitShiftOpContext): void;
					exitBitShiftOp(param0: android.databinding.parser.BindingExpressionParser.BitShiftOpContext): void;
					enterAndOrOp(param0: android.databinding.parser.BindingExpressionParser.AndOrOpContext): void;
					exitAndOrOp(param0: android.databinding.parser.BindingExpressionParser.AndOrOpContext): void;
					enterTernaryOp(param0: android.databinding.parser.BindingExpressionParser.TernaryOpContext): void;
					exitTernaryOp(param0: android.databinding.parser.BindingExpressionParser.TernaryOpContext): void;
					enterPrimary(param0: android.databinding.parser.BindingExpressionParser.PrimaryContext): void;
					exitPrimary(param0: android.databinding.parser.BindingExpressionParser.PrimaryContext): void;
					enterDotOp(param0: android.databinding.parser.BindingExpressionParser.DotOpContext): void;
					exitDotOp(param0: android.databinding.parser.BindingExpressionParser.DotOpContext): void;
					enterGlobalMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext): void;
					exitGlobalMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext): void;
					enterMathOp(param0: android.databinding.parser.BindingExpressionParser.MathOpContext): void;
					exitMathOp(param0: android.databinding.parser.BindingExpressionParser.MathOpContext): void;
					enterInstanceOfOp(param0: android.databinding.parser.BindingExpressionParser.InstanceOfOpContext): void;
					exitInstanceOfOp(param0: android.databinding.parser.BindingExpressionParser.InstanceOfOpContext): void;
					enterBinaryOp(param0: android.databinding.parser.BindingExpressionParser.BinaryOpContext): void;
					exitBinaryOp(param0: android.databinding.parser.BindingExpressionParser.BinaryOpContext): void;
					enterFunctionRef(param0: android.databinding.parser.BindingExpressionParser.FunctionRefContext): void;
					exitFunctionRef(param0: android.databinding.parser.BindingExpressionParser.FunctionRefContext): void;
					enterClassExtraction(param0: android.databinding.parser.BindingExpressionParser.ClassExtractionContext): void;
					exitClassExtraction(param0: android.databinding.parser.BindingExpressionParser.ClassExtractionContext): void;
					enterExpressionList(param0: android.databinding.parser.BindingExpressionParser.ExpressionListContext): void;
					exitExpressionList(param0: android.databinding.parser.BindingExpressionParser.ExpressionListContext): void;
					enterLiteral(param0: android.databinding.parser.BindingExpressionParser.LiteralContext): void;
					exitLiteral(param0: android.databinding.parser.BindingExpressionParser.LiteralContext): void;
					enterIdentifier(param0: android.databinding.parser.BindingExpressionParser.IdentifierContext): void;
					exitIdentifier(param0: android.databinding.parser.BindingExpressionParser.IdentifierContext): void;
					enterJavaLiteral(param0: android.databinding.parser.BindingExpressionParser.JavaLiteralContext): void;
					exitJavaLiteral(param0: android.databinding.parser.BindingExpressionParser.JavaLiteralContext): void;
					enterStringLiteral(param0: android.databinding.parser.BindingExpressionParser.StringLiteralContext): void;
					exitStringLiteral(param0: android.databinding.parser.BindingExpressionParser.StringLiteralContext): void;
					enterExplicitGenericInvocation(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext): void;
					exitExplicitGenericInvocation(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext): void;
					enterTypeArguments(param0: android.databinding.parser.BindingExpressionParser.TypeArgumentsContext): void;
					exitTypeArguments(param0: android.databinding.parser.BindingExpressionParser.TypeArgumentsContext): void;
					enterType(param0: android.databinding.parser.BindingExpressionParser.TypeContext): void;
					exitType(param0: android.databinding.parser.BindingExpressionParser.TypeContext): void;
					enterExplicitGenericInvocationSuffix(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext): void;
					exitExplicitGenericInvocationSuffix(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext): void;
					enterArguments(param0: android.databinding.parser.BindingExpressionParser.ArgumentsContext): void;
					exitArguments(param0: android.databinding.parser.BindingExpressionParser.ArgumentsContext): void;
					enterClassOrInterfaceType(param0: android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext): void;
					exitClassOrInterfaceType(param0: android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext): void;
					enterPrimitiveType(param0: android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext): void;
					exitPrimitiveType(param0: android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext): void;
					enterResources(param0: android.databinding.parser.BindingExpressionParser.ResourcesContext): void;
					exitResources(param0: android.databinding.parser.BindingExpressionParser.ResourcesContext): void;
					enterResourceParameters(param0: android.databinding.parser.BindingExpressionParser.ResourceParametersContext): void;
					exitResourceParameters(param0: android.databinding.parser.BindingExpressionParser.ResourceParametersContext): void;
					visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
					visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
					enterEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
					exitEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				});
				public constructor();
				public enterEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				public exitExpressionList(param0: android.databinding.parser.BindingExpressionParser.ExpressionListContext): void;
				public exitExplicitGenericInvocationSuffix(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext): void;
				public enterExpressionList(param0: android.databinding.parser.BindingExpressionParser.ExpressionListContext): void;
				public enterInstanceOfOp(param0: android.databinding.parser.BindingExpressionParser.InstanceOfOpContext): void;
				public enterPrimitiveType(param0: android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext): void;
				public enterResource(param0: android.databinding.parser.BindingExpressionParser.ResourceContext): void;
				public enterGlobalMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext): void;
				public enterTernaryOp(param0: android.databinding.parser.BindingExpressionParser.TernaryOpContext): void;
				public enterIdentifier(param0: android.databinding.parser.BindingExpressionParser.IdentifierContext): void;
				public exitType(param0: android.databinding.parser.BindingExpressionParser.TypeContext): void;
				public enterClassOrInterfaceType(param0: android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext): void;
				public exitDotOp(param0: android.databinding.parser.BindingExpressionParser.DotOpContext): void;
				public enterArguments(param0: android.databinding.parser.BindingExpressionParser.ArgumentsContext): void;
				public exitBinaryOp(param0: android.databinding.parser.BindingExpressionParser.BinaryOpContext): void;
				public enterInferredFormalParameterList(param0: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext): void;
				public exitClassExtraction(param0: android.databinding.parser.BindingExpressionParser.ClassExtractionContext): void;
				public exitEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				public enterCastOp(param0: android.databinding.parser.BindingExpressionParser.CastOpContext): void;
				public enterResourceParameters(param0: android.databinding.parser.BindingExpressionParser.ResourceParametersContext): void;
				public exitUnaryOp(param0: android.databinding.parser.BindingExpressionParser.UnaryOpContext): void;
				public exitClassOrInterfaceType(param0: android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext): void;
				public exitIdentifier(param0: android.databinding.parser.BindingExpressionParser.IdentifierContext): void;
				public enterResources(param0: android.databinding.parser.BindingExpressionParser.ResourcesContext): void;
				public enterUnaryOp(param0: android.databinding.parser.BindingExpressionParser.UnaryOpContext): void;
				public exitConstantValue(param0: android.databinding.parser.BindingExpressionParser.ConstantValueContext): void;
				public enterJavaLiteral(param0: android.databinding.parser.BindingExpressionParser.JavaLiteralContext): void;
				public exitExplicitGenericInvocation(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext): void;
				public exitQuestionQuestionOp(param0: android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext): void;
				public exitResource(param0: android.databinding.parser.BindingExpressionParser.ResourceContext): void;
				public exitLambdaExpression(param0: android.databinding.parser.BindingExpressionParser.LambdaExpressionContext): void;
				public exitResources(param0: android.databinding.parser.BindingExpressionParser.ResourcesContext): void;
				public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
				public enterLiteral(param0: android.databinding.parser.BindingExpressionParser.LiteralContext): void;
				public exitRootExpr(param0: android.databinding.parser.BindingExpressionParser.RootExprContext): void;
				public enterComparisonOp(param0: android.databinding.parser.BindingExpressionParser.ComparisonOpContext): void;
				public exitPrimary(param0: android.databinding.parser.BindingExpressionParser.PrimaryContext): void;
				public enterSingleLambdaParameter(param0: android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext): void;
				public enterRootExpr(param0: android.databinding.parser.BindingExpressionParser.RootExprContext): void;
				public exitFunctionRef(param0: android.databinding.parser.BindingExpressionParser.FunctionRefContext): void;
				public enterTypeArguments(param0: android.databinding.parser.BindingExpressionParser.TypeArgumentsContext): void;
				public exitJavaLiteral(param0: android.databinding.parser.BindingExpressionParser.JavaLiteralContext): void;
				public enterType(param0: android.databinding.parser.BindingExpressionParser.TypeContext): void;
				public enterExplicitGenericInvocationSuffix(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext): void;
				public exitLiteral(param0: android.databinding.parser.BindingExpressionParser.LiteralContext): void;
				public exitGlobalMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext): void;
				public enterQuestionQuestionOp(param0: android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext): void;
				public enterDotOp(param0: android.databinding.parser.BindingExpressionParser.DotOpContext): void;
				public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
				public exitBracketOp(param0: android.databinding.parser.BindingExpressionParser.BracketOpContext): void;
				public enterMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.MethodInvocationContext): void;
				public enterConstantValue(param0: android.databinding.parser.BindingExpressionParser.ConstantValueContext): void;
				public enterBinaryOp(param0: android.databinding.parser.BindingExpressionParser.BinaryOpContext): void;
				public exitInferredFormalParameterList(param0: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext): void;
				public exitResourceParameters(param0: android.databinding.parser.BindingExpressionParser.ResourceParametersContext): void;
				public exitSingleLambdaParameter(param0: android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext): void;
				public enterAndOrOp(param0: android.databinding.parser.BindingExpressionParser.AndOrOpContext): void;
				public exitStringLiteral(param0: android.databinding.parser.BindingExpressionParser.StringLiteralContext): void;
				public exitAndOrOp(param0: android.databinding.parser.BindingExpressionParser.AndOrOpContext): void;
				public enterFunctionRef(param0: android.databinding.parser.BindingExpressionParser.FunctionRefContext): void;
				public exitLambdaParameterList(param0: android.databinding.parser.BindingExpressionParser.LambdaParameterListContext): void;
				public exitTernaryOp(param0: android.databinding.parser.BindingExpressionParser.TernaryOpContext): void;
				public enterClassExtraction(param0: android.databinding.parser.BindingExpressionParser.ClassExtractionContext): void;
				public enterRootLambda(param0: android.databinding.parser.BindingExpressionParser.RootLambdaContext): void;
				public exitArguments(param0: android.databinding.parser.BindingExpressionParser.ArgumentsContext): void;
				public exitInstanceOfOp(param0: android.databinding.parser.BindingExpressionParser.InstanceOfOpContext): void;
				public enterStringLiteral(param0: android.databinding.parser.BindingExpressionParser.StringLiteralContext): void;
				public enterBitShiftOp(param0: android.databinding.parser.BindingExpressionParser.BitShiftOpContext): void;
				public exitGrouping(param0: android.databinding.parser.BindingExpressionParser.GroupingContext): void;
				public enterLambdaExpression(param0: android.databinding.parser.BindingExpressionParser.LambdaExpressionContext): void;
				public exitMathOp(param0: android.databinding.parser.BindingExpressionParser.MathOpContext): void;
				public enterExplicitGenericInvocation(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext): void;
				public enterMathOp(param0: android.databinding.parser.BindingExpressionParser.MathOpContext): void;
				public exitRootLambda(param0: android.databinding.parser.BindingExpressionParser.RootLambdaContext): void;
				public exitTypeArguments(param0: android.databinding.parser.BindingExpressionParser.TypeArgumentsContext): void;
				public enterDefaults(param0: android.databinding.parser.BindingExpressionParser.DefaultsContext): void;
				public enterLambdaParameterList(param0: android.databinding.parser.BindingExpressionParser.LambdaParameterListContext): void;
				public exitCastOp(param0: android.databinding.parser.BindingExpressionParser.CastOpContext): void;
				public exitDefaults(param0: android.databinding.parser.BindingExpressionParser.DefaultsContext): void;
				public enterGrouping(param0: android.databinding.parser.BindingExpressionParser.GroupingContext): void;
				public exitPrimitiveType(param0: android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext): void;
				public exitComparisonOp(param0: android.databinding.parser.BindingExpressionParser.ComparisonOpContext): void;
				public enterBracketOp(param0: android.databinding.parser.BindingExpressionParser.BracketOpContext): void;
				public enterPrimary(param0: android.databinding.parser.BindingExpressionParser.PrimaryContext): void;
				public exitMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.MethodInvocationContext): void;
				public exitBitShiftOp(param0: android.databinding.parser.BindingExpressionParser.BitShiftOpContext): void;
			}
		}
	}
}

declare module android {
	export module databinding {
		export module parser {
			export class BindingExpressionParser extends android.databinding.internal.org.antlr.v4.runtime.Parser {
				public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser>;
				public static _decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[];
				public static _sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache;
				public static T__0: number;
				public static T__1: number;
				public static T__2: number;
				public static T__3: number;
				public static T__4: number;
				public static T__5: number;
				public static T__6: number;
				public static T__7: number;
				public static T__8: number;
				public static T__9: number;
				public static T__10: number;
				public static T__11: number;
				public static T__12: number;
				public static T__13: number;
				public static T__14: number;
				public static T__15: number;
				public static T__16: number;
				public static T__17: number;
				public static T__18: number;
				public static T__19: number;
				public static T__20: number;
				public static T__21: number;
				public static T__22: number;
				public static T__23: number;
				public static T__24: number;
				public static T__25: number;
				public static T__26: number;
				public static T__27: number;
				public static T__28: number;
				public static T__29: number;
				public static T__30: number;
				public static T__31: number;
				public static T__32: number;
				public static T__33: number;
				public static T__34: number;
				public static T__35: number;
				public static T__36: number;
				public static T__37: number;
				public static T__38: number;
				public static T__39: number;
				public static T__40: number;
				public static T__41: number;
				public static T__42: number;
				public static T__43: number;
				public static THIS: number;
				public static VoidLiteral: number;
				public static IntegerLiteral: number;
				public static FloatingPointLiteral: number;
				public static BooleanLiteral: number;
				public static CharacterLiteral: number;
				public static SingleQuoteString: number;
				public static DoubleQuoteString: number;
				public static NullLiteral: number;
				public static Identifier: number;
				public static WS: number;
				public static ResourceReference: number;
				public static PackageName: number;
				public static ResourceType: number;
				public static RULE_bindingSyntax: number;
				public static RULE_defaults: number;
				public static RULE_constantValue: number;
				public static RULE_lambdaExpression: number;
				public static RULE_lambdaParameters: number;
				public static RULE_inferredFormalParameterList: number;
				public static RULE_expression: number;
				public static RULE_classExtraction: number;
				public static RULE_expressionList: number;
				public static RULE_literal: number;
				public static RULE_identifier: number;
				public static RULE_javaLiteral: number;
				public static RULE_stringLiteral: number;
				public static RULE_explicitGenericInvocation: number;
				public static RULE_typeArguments: number;
				public static RULE_type: number;
				public static RULE_explicitGenericInvocationSuffix: number;
				public static RULE_arguments: number;
				public static RULE_classOrInterfaceType: number;
				public static RULE_primitiveType: number;
				public static RULE_resources: number;
				public static RULE_resourceParameters: number;
				public static ruleNames: string[];
				public static VOCABULARY: android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
				public static tokenNames: string[];
				public static _serializedATN: string;
				public static _ATN: android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
				/** @deprecated */
				public getTokenNames(): string[];
				public getSerializedATN(): string;
				public lambdaExpression(): android.databinding.parser.BindingExpressionParser.LambdaExpressionContext;
				public getGrammarFileName(): string;
				public explicitGenericInvocation(): android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext;
				public lambdaParameters(): android.databinding.parser.BindingExpressionParser.LambdaParametersContext;
				public identifier(): android.databinding.parser.BindingExpressionParser.IdentifierContext;
				public arguments(): android.databinding.parser.BindingExpressionParser.ArgumentsContext;
				public constructor();
				public resources(): android.databinding.parser.BindingExpressionParser.ResourcesContext;
				public constructor(input: android.databinding.internal.org.antlr.v4.runtime.TokenStream);
				public defaults(): android.databinding.parser.BindingExpressionParser.DefaultsContext;
				public classOrInterfaceType(): android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext;
				public bindingSyntax(): android.databinding.parser.BindingExpressionParser.BindingSyntaxContext;
				public javaLiteral(): android.databinding.parser.BindingExpressionParser.JavaLiteralContext;
				public sempred(_localctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext, ruleIndex: number, actionIndex: number): boolean;
				public stringLiteral(): android.databinding.parser.BindingExpressionParser.StringLiteralContext;
				public type(): android.databinding.parser.BindingExpressionParser.TypeContext;
				public getRuleNames(): string[];
				public sempred(_localctx: android.databinding.internal.org.antlr.v4.runtime.RuleContext, ruleIndex: number, predIndex: number): boolean;
				public expression(): android.databinding.parser.BindingExpressionParser.ExpressionContext;
				public getATN(): android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
				public classExtraction(): android.databinding.parser.BindingExpressionParser.ClassExtractionContext;
				public explicitGenericInvocationSuffix(): android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext;
				public inferredFormalParameterList(): android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext;
				public literal(): android.databinding.parser.BindingExpressionParser.LiteralContext;
				public expressionList(): android.databinding.parser.BindingExpressionParser.ExpressionListContext;
				public resourceParameters(): android.databinding.parser.BindingExpressionParser.ResourceParametersContext;
				public getVocabulary(): android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
				public constantValue(): android.databinding.parser.BindingExpressionParser.ConstantValueContext;
				public typeArguments(): android.databinding.parser.BindingExpressionParser.TypeArgumentsContext;
				public primitiveType(): android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext;
			}
			export module BindingExpressionParser {
				export class AndOrOpContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.AndOrOpContext>;
					public left: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public op: android.databinding.internal.org.antlr.v4.runtime.Token;
					public right: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public expression(i: number): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public expression(): java.util.List<android.databinding.parser.BindingExpressionParser.ExpressionContext>;
				}
				export class ArgumentsContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.ArgumentsContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public expressionList(): android.databinding.parser.BindingExpressionParser.ExpressionListContext;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class BinaryOpContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.BinaryOpContext>;
					public left: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public op: android.databinding.internal.org.antlr.v4.runtime.Token;
					public right: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public expression(i: number): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public expression(): java.util.List<android.databinding.parser.BindingExpressionParser.ExpressionContext>;
				}
				export class BindingSyntaxContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.BindingSyntaxContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public copyFrom(ctx: android.databinding.parser.BindingExpressionParser.BindingSyntaxContext): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public copyFrom(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class BitShiftOpContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.BitShiftOpContext>;
					public left: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public op: android.databinding.internal.org.antlr.v4.runtime.Token;
					public right: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public expression(i: number): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public expression(): java.util.List<android.databinding.parser.BindingExpressionParser.ExpressionContext>;
				}
				export class BracketOpContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.BracketOpContext>;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public expression(i: number): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public expression(): java.util.List<android.databinding.parser.BindingExpressionParser.ExpressionContext>;
				}
				export class CastOpContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.CastOpContext>;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public expression(): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public type(): android.databinding.parser.BindingExpressionParser.TypeContext;
				}
				export class ClassExtractionContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.ClassExtractionContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public type(): android.databinding.parser.BindingExpressionParser.TypeContext;
				}
				export class ClassOrInterfaceTypeContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext>;
					public typeArguments(i: number): android.databinding.parser.BindingExpressionParser.TypeArgumentsContext;
					public Identifier(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode>;
					public typeArguments(): java.util.List<android.databinding.parser.BindingExpressionParser.TypeArgumentsContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public identifier(): android.databinding.parser.BindingExpressionParser.IdentifierContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public Identifier(i: number): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
				}
				export class ComparisonOpContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.ComparisonOpContext>;
					public left: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public op: android.databinding.internal.org.antlr.v4.runtime.Token;
					public right: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public expression(i: number): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public expression(): java.util.List<android.databinding.parser.BindingExpressionParser.ExpressionContext>;
				}
				export class ConstantValueContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.ConstantValueContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public ResourceReference(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public literal(): android.databinding.parser.BindingExpressionParser.LiteralContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public identifier(): android.databinding.parser.BindingExpressionParser.IdentifierContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
				}
				export class DefaultsContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.DefaultsContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public constantValue(): android.databinding.parser.BindingExpressionParser.ConstantValueContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class DotOpContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.DotOpContext>;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public Identifier(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public expression(): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class ExplicitGenericInvocationContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public explicitGenericInvocationSuffix(): android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext;
					public typeArguments(): android.databinding.parser.BindingExpressionParser.TypeArgumentsContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class ExplicitGenericInvocationSuffixContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public Identifier(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public arguments(): android.databinding.parser.BindingExpressionParser.ArgumentsContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class ExpressionContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.ExpressionContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public copyFrom(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext): void;
					public copyFrom(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class ExpressionListContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.ExpressionListContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public expression(i: number): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public expression(): java.util.List<android.databinding.parser.BindingExpressionParser.ExpressionContext>;
				}
				export class FunctionRefContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.FunctionRefContext>;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public Identifier(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public expression(): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class GlobalMethodInvocationContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext>;
					public methodName: android.databinding.internal.org.antlr.v4.runtime.Token;
					public args: android.databinding.parser.BindingExpressionParser.ExpressionListContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public expressionList(): android.databinding.parser.BindingExpressionParser.ExpressionListContext;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public Identifier(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class GroupingContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.GroupingContext>;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public expression(): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class IdentifierContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.IdentifierContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public Identifier(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class InferredFormalParameterListContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public Identifier(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode>;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public Identifier(i: number): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class InstanceOfOpContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.InstanceOfOpContext>;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public expression(): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public type(): android.databinding.parser.BindingExpressionParser.TypeContext;
				}
				export class JavaLiteralContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.JavaLiteralContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public IntegerLiteral(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public NullLiteral(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public BooleanLiteral(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public CharacterLiteral(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public FloatingPointLiteral(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
				}
				export class LambdaExpressionContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.LambdaExpressionContext>;
					public args: android.databinding.parser.BindingExpressionParser.LambdaParametersContext;
					public expr: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public lambdaParameters(): android.databinding.parser.BindingExpressionParser.LambdaParametersContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public expression(): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class LambdaParameterListContext extends android.databinding.parser.BindingExpressionParser.LambdaParametersContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.LambdaParameterListContext>;
					public params: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public inferredFormalParameterList(): android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.LambdaParametersContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class LambdaParametersContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.LambdaParametersContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public copyFrom(ctx: android.databinding.parser.BindingExpressionParser.LambdaParametersContext): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public copyFrom(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class LiteralContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.LiteralContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public javaLiteral(): android.databinding.parser.BindingExpressionParser.JavaLiteralContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public stringLiteral(): android.databinding.parser.BindingExpressionParser.StringLiteralContext;
				}
				export class MathOpContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.MathOpContext>;
					public left: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public op: android.databinding.internal.org.antlr.v4.runtime.Token;
					public right: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public expression(i: number): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public expression(): java.util.List<android.databinding.parser.BindingExpressionParser.ExpressionContext>;
				}
				export class MethodInvocationContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.MethodInvocationContext>;
					public target: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public methodName: android.databinding.internal.org.antlr.v4.runtime.Token;
					public args: android.databinding.parser.BindingExpressionParser.ExpressionListContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public expressionList(): android.databinding.parser.BindingExpressionParser.ExpressionListContext;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public Identifier(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public expression(): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class PrimaryContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.PrimaryContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public literal(): android.databinding.parser.BindingExpressionParser.LiteralContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public identifier(): android.databinding.parser.BindingExpressionParser.IdentifierContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public classExtraction(): android.databinding.parser.BindingExpressionParser.ClassExtractionContext;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public VoidLiteral(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
				}
				export class PrimitiveTypeContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class QuestionQuestionOpContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext>;
					public left: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public op: android.databinding.internal.org.antlr.v4.runtime.Token;
					public right: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public expression(i: number): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public expression(): java.util.List<android.databinding.parser.BindingExpressionParser.ExpressionContext>;
				}
				export class ResourceContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.ResourceContext>;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public resources(): android.databinding.parser.BindingExpressionParser.ResourcesContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class ResourceParametersContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.ResourceParametersContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public expressionList(): android.databinding.parser.BindingExpressionParser.ExpressionListContext;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class ResourcesContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.ResourcesContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public ResourceReference(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public resourceParameters(): android.databinding.parser.BindingExpressionParser.ResourceParametersContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class RootExprContext extends android.databinding.parser.BindingExpressionParser.BindingSyntaxContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.RootExprContext>;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public expression(): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public defaults(): android.databinding.parser.BindingExpressionParser.DefaultsContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.BindingSyntaxContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class RootLambdaContext extends android.databinding.parser.BindingExpressionParser.BindingSyntaxContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.RootLambdaContext>;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public lambdaExpression(): android.databinding.parser.BindingExpressionParser.LambdaExpressionContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.BindingSyntaxContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class SingleLambdaParameterContext extends android.databinding.parser.BindingExpressionParser.LambdaParametersContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext>;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public Identifier(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.LambdaParametersContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class StringLiteralContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.StringLiteralContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public SingleQuoteString(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public DoubleQuoteString(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class TernaryOpContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.TernaryOpContext>;
					public left: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public op: android.databinding.internal.org.antlr.v4.runtime.Token;
					public iftrue: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public iffalse: android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public expression(i: number): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public expression(): java.util.List<android.databinding.parser.BindingExpressionParser.ExpressionContext>;
				}
				export class TypeArgumentsContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.TypeArgumentsContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public type(i: number): android.databinding.parser.BindingExpressionParser.TypeContext;
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public type(): java.util.List<android.databinding.parser.BindingExpressionParser.TypeContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class TypeContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.TypeContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public classOrInterfaceType(): android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public primitiveType(): android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext;
				}
				export class UnaryOpContext extends android.databinding.parser.BindingExpressionParser.ExpressionContext {
					public static class: java.lang.Class<android.databinding.parser.BindingExpressionParser.UnaryOpContext>;
					public op: android.databinding.internal.org.antlr.v4.runtime.Token;
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public expression(): android.databinding.parser.BindingExpressionParser.ExpressionContext;
					public constructor(ctx: android.databinding.parser.BindingExpressionParser.ExpressionContext);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module parser {
			export class BindingExpressionVisitor<T>  extends android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any> {
				public static class: java.lang.Class<android.databinding.parser.BindingExpressionVisitor<any>>;
				/**
				 * Constructs a new instance of the android.databinding.parser.BindingExpressionVisitor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					visitRootExpr(param0: android.databinding.parser.BindingExpressionParser.RootExprContext): any;
					visitRootLambda(param0: android.databinding.parser.BindingExpressionParser.RootLambdaContext): any;
					visitDefaults(param0: android.databinding.parser.BindingExpressionParser.DefaultsContext): any;
					visitConstantValue(param0: android.databinding.parser.BindingExpressionParser.ConstantValueContext): any;
					visitLambdaExpression(param0: android.databinding.parser.BindingExpressionParser.LambdaExpressionContext): any;
					visitSingleLambdaParameter(param0: android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext): any;
					visitLambdaParameterList(param0: android.databinding.parser.BindingExpressionParser.LambdaParameterListContext): any;
					visitInferredFormalParameterList(param0: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext): any;
					visitCastOp(param0: android.databinding.parser.BindingExpressionParser.CastOpContext): any;
					visitComparisonOp(param0: android.databinding.parser.BindingExpressionParser.ComparisonOpContext): any;
					visitUnaryOp(param0: android.databinding.parser.BindingExpressionParser.UnaryOpContext): any;
					visitBracketOp(param0: android.databinding.parser.BindingExpressionParser.BracketOpContext): any;
					visitResource(param0: android.databinding.parser.BindingExpressionParser.ResourceContext): any;
					visitQuestionQuestionOp(param0: android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext): any;
					visitGrouping(param0: android.databinding.parser.BindingExpressionParser.GroupingContext): any;
					visitMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.MethodInvocationContext): any;
					visitBitShiftOp(param0: android.databinding.parser.BindingExpressionParser.BitShiftOpContext): any;
					visitAndOrOp(param0: android.databinding.parser.BindingExpressionParser.AndOrOpContext): any;
					visitTernaryOp(param0: android.databinding.parser.BindingExpressionParser.TernaryOpContext): any;
					visitPrimary(param0: android.databinding.parser.BindingExpressionParser.PrimaryContext): any;
					visitDotOp(param0: android.databinding.parser.BindingExpressionParser.DotOpContext): any;
					visitGlobalMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext): any;
					visitMathOp(param0: android.databinding.parser.BindingExpressionParser.MathOpContext): any;
					visitInstanceOfOp(param0: android.databinding.parser.BindingExpressionParser.InstanceOfOpContext): any;
					visitBinaryOp(param0: android.databinding.parser.BindingExpressionParser.BinaryOpContext): any;
					visitFunctionRef(param0: android.databinding.parser.BindingExpressionParser.FunctionRefContext): any;
					visitClassExtraction(param0: android.databinding.parser.BindingExpressionParser.ClassExtractionContext): any;
					visitExpressionList(param0: android.databinding.parser.BindingExpressionParser.ExpressionListContext): any;
					visitLiteral(param0: android.databinding.parser.BindingExpressionParser.LiteralContext): any;
					visitIdentifier(param0: android.databinding.parser.BindingExpressionParser.IdentifierContext): any;
					visitJavaLiteral(param0: android.databinding.parser.BindingExpressionParser.JavaLiteralContext): any;
					visitStringLiteral(param0: android.databinding.parser.BindingExpressionParser.StringLiteralContext): any;
					visitExplicitGenericInvocation(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext): any;
					visitTypeArguments(param0: android.databinding.parser.BindingExpressionParser.TypeArgumentsContext): any;
					visitType(param0: android.databinding.parser.BindingExpressionParser.TypeContext): any;
					visitExplicitGenericInvocationSuffix(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext): any;
					visitArguments(param0: android.databinding.parser.BindingExpressionParser.ArgumentsContext): any;
					visitClassOrInterfaceType(param0: android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext): any;
					visitPrimitiveType(param0: android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext): any;
					visitResources(param0: android.databinding.parser.BindingExpressionParser.ResourcesContext): any;
					visitResourceParameters(param0: android.databinding.parser.BindingExpressionParser.ResourceParametersContext): any;
					visit(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): any;
					visitChildren(param0: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): any;
					visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): any;
					visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): any;
				});
				public constructor();
				public visitQuestionQuestionOp(param0: android.databinding.parser.BindingExpressionParser.QuestionQuestionOpContext): any;
				public visitBitShiftOp(param0: android.databinding.parser.BindingExpressionParser.BitShiftOpContext): any;
				public visitResourceParameters(param0: android.databinding.parser.BindingExpressionParser.ResourceParametersContext): any;
				public visitSingleLambdaParameter(param0: android.databinding.parser.BindingExpressionParser.SingleLambdaParameterContext): any;
				public visitClassOrInterfaceType(param0: android.databinding.parser.BindingExpressionParser.ClassOrInterfaceTypeContext): any;
				public visitStringLiteral(param0: android.databinding.parser.BindingExpressionParser.StringLiteralContext): any;
				public visit(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): any;
				public visitMathOp(param0: android.databinding.parser.BindingExpressionParser.MathOpContext): any;
				public visitPrimitiveType(param0: android.databinding.parser.BindingExpressionParser.PrimitiveTypeContext): any;
				public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): any;
				public visitAndOrOp(param0: android.databinding.parser.BindingExpressionParser.AndOrOpContext): any;
				public visitResource(param0: android.databinding.parser.BindingExpressionParser.ResourceContext): any;
				public visitDotOp(param0: android.databinding.parser.BindingExpressionParser.DotOpContext): any;
				public visitGlobalMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.GlobalMethodInvocationContext): any;
				public visitInstanceOfOp(param0: android.databinding.parser.BindingExpressionParser.InstanceOfOpContext): any;
				public visitJavaLiteral(param0: android.databinding.parser.BindingExpressionParser.JavaLiteralContext): any;
				public visitLiteral(param0: android.databinding.parser.BindingExpressionParser.LiteralContext): any;
				public visitExpressionList(param0: android.databinding.parser.BindingExpressionParser.ExpressionListContext): any;
				public visitFunctionRef(param0: android.databinding.parser.BindingExpressionParser.FunctionRefContext): any;
				public visitLambdaExpression(param0: android.databinding.parser.BindingExpressionParser.LambdaExpressionContext): any;
				public visitDefaults(param0: android.databinding.parser.BindingExpressionParser.DefaultsContext): any;
				public visitBracketOp(param0: android.databinding.parser.BindingExpressionParser.BracketOpContext): any;
				public visitClassExtraction(param0: android.databinding.parser.BindingExpressionParser.ClassExtractionContext): any;
				public visitArguments(param0: android.databinding.parser.BindingExpressionParser.ArgumentsContext): any;
				public visitConstantValue(param0: android.databinding.parser.BindingExpressionParser.ConstantValueContext): any;
				public visitLambdaParameterList(param0: android.databinding.parser.BindingExpressionParser.LambdaParameterListContext): any;
				public visitMethodInvocation(param0: android.databinding.parser.BindingExpressionParser.MethodInvocationContext): any;
				public visitTernaryOp(param0: android.databinding.parser.BindingExpressionParser.TernaryOpContext): any;
				public visitRootLambda(param0: android.databinding.parser.BindingExpressionParser.RootLambdaContext): any;
				public visitTypeArguments(param0: android.databinding.parser.BindingExpressionParser.TypeArgumentsContext): any;
				public visitCastOp(param0: android.databinding.parser.BindingExpressionParser.CastOpContext): any;
				public visitExplicitGenericInvocationSuffix(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationSuffixContext): any;
				public visitResources(param0: android.databinding.parser.BindingExpressionParser.ResourcesContext): any;
				public visitInferredFormalParameterList(param0: android.databinding.parser.BindingExpressionParser.InferredFormalParameterListContext): any;
				public visitUnaryOp(param0: android.databinding.parser.BindingExpressionParser.UnaryOpContext): any;
				public visitType(param0: android.databinding.parser.BindingExpressionParser.TypeContext): any;
				public visitComparisonOp(param0: android.databinding.parser.BindingExpressionParser.ComparisonOpContext): any;
				public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): any;
				public visitRootExpr(param0: android.databinding.parser.BindingExpressionParser.RootExprContext): any;
				public visitPrimary(param0: android.databinding.parser.BindingExpressionParser.PrimaryContext): any;
				public visitBinaryOp(param0: android.databinding.parser.BindingExpressionParser.BinaryOpContext): any;
				public visitGrouping(param0: android.databinding.parser.BindingExpressionParser.GroupingContext): any;
				public visitExplicitGenericInvocation(param0: android.databinding.parser.BindingExpressionParser.ExplicitGenericInvocationContext): any;
				public visitIdentifier(param0: android.databinding.parser.BindingExpressionParser.IdentifierContext): any;
				public visitChildren(param0: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): any;
			}
		}
	}
}

declare module android {
	export module databinding {
		export module parser {
			export class XMLLexer extends android.databinding.internal.org.antlr.v4.runtime.Lexer {
				public static class: java.lang.Class<android.databinding.parser.XMLLexer>;
				public static _decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[];
				public static _sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache;
				public static COMMENT: number;
				public static CDATA: number;
				public static DTD: number;
				public static EntityRef: number;
				public static CharRef: number;
				public static SEA_WS: number;
				public static OPEN: number;
				public static XMLDeclOpen: number;
				public static TEXT: number;
				public static CLOSE: number;
				public static SPECIAL_CLOSE: number;
				public static SLASH_CLOSE: number;
				public static SLASH: number;
				public static EQUALS: number;
				public static STRING: number;
				public static Name: number;
				public static S: number;
				public static PI: number;
				public static INSIDE: number;
				public static PROC_INSTR: number;
				public static modeNames: string[];
				public static ruleNames: string[];
				public static VOCABULARY: android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
				public static tokenNames: string[];
				public static _serializedATN: string;
				public static _ATN: android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
				public getModeNames(): string[];
				/** @deprecated */
				public getTokenNames(): string[];
				public getLine(): number;
				public setTokenFactory(factory: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
				public getSerializedATN(): string;
				public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.CharStream;
				public getRuleNames(): string[];
				public getGrammarFileName(): string;
				public constructor();
				public getATN(): android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
				public getCharPositionInLine(): number;
				public constructor(input: android.databinding.internal.org.antlr.v4.runtime.CharStream);
				public getTokenFactory(): android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>;
				public nextToken(): android.databinding.internal.org.antlr.v4.runtime.Token;
				public getInputStream(): android.databinding.internal.org.antlr.v4.runtime.IntStream;
				public getVocabulary(): android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
				public setTokenFactory(param0: android.databinding.internal.org.antlr.v4.runtime.TokenFactory<any>): void;
				public getSourceName(): string;
			}
		}
	}
}

declare module android {
	export module databinding {
		export module parser {
			export class XMLParser extends android.databinding.internal.org.antlr.v4.runtime.Parser {
				public static class: java.lang.Class<android.databinding.parser.XMLParser>;
				public static _decisionToDFA: android.databinding.internal.org.antlr.v4.runtime.dfa.DFA[];
				public static _sharedContextCache: android.databinding.internal.org.antlr.v4.runtime.atn.PredictionContextCache;
				public static COMMENT: number;
				public static CDATA: number;
				public static DTD: number;
				public static EntityRef: number;
				public static CharRef: number;
				public static SEA_WS: number;
				public static OPEN: number;
				public static XMLDeclOpen: number;
				public static TEXT: number;
				public static CLOSE: number;
				public static SPECIAL_CLOSE: number;
				public static SLASH_CLOSE: number;
				public static SLASH: number;
				public static EQUALS: number;
				public static STRING: number;
				public static Name: number;
				public static S: number;
				public static PI: number;
				public static RULE_document: number;
				public static RULE_prolog: number;
				public static RULE_content: number;
				public static RULE_element: number;
				public static RULE_reference: number;
				public static RULE_attribute: number;
				public static RULE_chardata: number;
				public static RULE_misc: number;
				public static ruleNames: string[];
				public static VOCABULARY: android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
				public static tokenNames: string[];
				public static _serializedATN: string;
				public static _ATN: android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
				/** @deprecated */
				public getTokenNames(): string[];
				public attribute(): android.databinding.parser.XMLParser.AttributeContext;
				public document(): android.databinding.parser.XMLParser.DocumentContext;
				public reference(): android.databinding.parser.XMLParser.ReferenceContext;
				public misc(): android.databinding.parser.XMLParser.MiscContext;
				public getSerializedATN(): string;
				public content(): android.databinding.parser.XMLParser.ContentContext;
				public getRuleNames(): string[];
				public getGrammarFileName(): string;
				public prolog(): android.databinding.parser.XMLParser.PrologContext;
				public constructor();
				public getATN(): android.databinding.internal.org.antlr.v4.runtime.atn.ATN;
				public constructor(input: android.databinding.internal.org.antlr.v4.runtime.TokenStream);
				public element(): android.databinding.parser.XMLParser.ElementContext;
				public chardata(): android.databinding.parser.XMLParser.ChardataContext;
				public getVocabulary(): android.databinding.internal.org.antlr.v4.runtime.Vocabulary;
			}
			export module XMLParser {
				export class AttributeContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.XMLParser.AttributeContext>;
					public attrName: android.databinding.internal.org.antlr.v4.runtime.Token;
					public attrValue: android.databinding.internal.org.antlr.v4.runtime.Token;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public STRING(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public Name(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
				export class ChardataContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.XMLParser.ChardataContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public SEA_WS(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public TEXT(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
				}
				export class ContentContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.XMLParser.ContentContext>;
					public PI(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode>;
					public chardata(i: number): android.databinding.parser.XMLParser.ChardataContext;
					public COMMENT(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode>;
					public COMMENT(i: number): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public chardata(): java.util.List<android.databinding.parser.XMLParser.ChardataContext>;
					public reference(i: number): android.databinding.parser.XMLParser.ReferenceContext;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public PI(i: number): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public reference(): java.util.List<android.databinding.parser.XMLParser.ReferenceContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public element(): java.util.List<android.databinding.parser.XMLParser.ElementContext>;
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public element(i: number): android.databinding.parser.XMLParser.ElementContext;
					public CDATA(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode>;
					public CDATA(i: number): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
				}
				export class DocumentContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.XMLParser.DocumentContext>;
					public element(): android.databinding.parser.XMLParser.ElementContext;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public misc(): java.util.List<android.databinding.parser.XMLParser.MiscContext>;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public misc(i: number): android.databinding.parser.XMLParser.MiscContext;
					public constructor();
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public prolog(): android.databinding.parser.XMLParser.PrologContext;
				}
				export class ElementContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.XMLParser.ElementContext>;
					public elmName: android.databinding.internal.org.antlr.v4.runtime.Token;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public Name(): java.util.List<android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode>;
					public attribute(): java.util.List<android.databinding.parser.XMLParser.AttributeContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public attribute(i: number): android.databinding.parser.XMLParser.AttributeContext;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public content(): android.databinding.parser.XMLParser.ContentContext;
					public Name(i: number): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
				}
				export class MiscContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.XMLParser.MiscContext>;
					public COMMENT(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public SEA_WS(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public PI(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
				}
				export class PrologContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.XMLParser.PrologContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public XMLDeclOpen(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public SPECIAL_CLOSE(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public attribute(): java.util.List<android.databinding.parser.XMLParser.AttributeContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public attribute(i: number): android.databinding.parser.XMLParser.AttributeContext;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
				}
				export class ReferenceContext extends android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext {
					public static class: java.lang.Class<android.databinding.parser.XMLParser.ReferenceContext>;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingStateNumber: number);
					public accept(visitor: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any>): any;
					public exitRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public constructor();
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.RuleContext, invokingState: number);
					public getRuleContext(ctxType: java.lang.Class<any>, i: number): android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext;
					public getRuleIndex(): number;
					public enterRule(listener: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener): void;
					public getRuleContext(): android.databinding.internal.org.antlr.v4.runtime.RuleContext;
					public EntityRef(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public CharRef(): android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode;
					public constructor(parent: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext, invokingState: number);
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module parser {
			export class XMLParserBaseListener extends java.lang.Object implements android.databinding.parser.XMLParserListener {
				public static class: java.lang.Class<android.databinding.parser.XMLParserBaseListener>;
				public exitReference(param0: android.databinding.parser.XMLParser.ReferenceContext): void;
				public enterEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				public enterContent(param0: android.databinding.parser.XMLParser.ContentContext): void;
				public enterContent(ctx: android.databinding.parser.XMLParser.ContentContext): void;
				public exitElement(param0: android.databinding.parser.XMLParser.ElementContext): void;
				public exitContent(ctx: android.databinding.parser.XMLParser.ContentContext): void;
				public exitAttribute(param0: android.databinding.parser.XMLParser.AttributeContext): void;
				public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
				public constructor();
				public enterAttribute(ctx: android.databinding.parser.XMLParser.AttributeContext): void;
				public exitDocument(param0: android.databinding.parser.XMLParser.DocumentContext): void;
				public exitContent(param0: android.databinding.parser.XMLParser.ContentContext): void;
				public enterAttribute(param0: android.databinding.parser.XMLParser.AttributeContext): void;
				public visitTerminal(node: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
				public enterReference(param0: android.databinding.parser.XMLParser.ReferenceContext): void;
				public exitEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				public enterDocument(param0: android.databinding.parser.XMLParser.DocumentContext): void;
				public enterProlog(ctx: android.databinding.parser.XMLParser.PrologContext): void;
				public exitReference(ctx: android.databinding.parser.XMLParser.ReferenceContext): void;
				public enterElement(ctx: android.databinding.parser.XMLParser.ElementContext): void;
				public enterReference(ctx: android.databinding.parser.XMLParser.ReferenceContext): void;
				public exitEveryRule(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				public enterElement(param0: android.databinding.parser.XMLParser.ElementContext): void;
				public enterMisc(param0: android.databinding.parser.XMLParser.MiscContext): void;
				public exitElement(ctx: android.databinding.parser.XMLParser.ElementContext): void;
				public exitAttribute(ctx: android.databinding.parser.XMLParser.AttributeContext): void;
				public exitChardata(param0: android.databinding.parser.XMLParser.ChardataContext): void;
				public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
				public exitProlog(ctx: android.databinding.parser.XMLParser.PrologContext): void;
				public enterMisc(ctx: android.databinding.parser.XMLParser.MiscContext): void;
				public enterEveryRule(ctx: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				public visitErrorNode(node: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
				public enterDocument(ctx: android.databinding.parser.XMLParser.DocumentContext): void;
				public enterChardata(param0: android.databinding.parser.XMLParser.ChardataContext): void;
				public enterChardata(ctx: android.databinding.parser.XMLParser.ChardataContext): void;
				public exitChardata(ctx: android.databinding.parser.XMLParser.ChardataContext): void;
				public enterProlog(param0: android.databinding.parser.XMLParser.PrologContext): void;
				public exitMisc(param0: android.databinding.parser.XMLParser.MiscContext): void;
				public exitProlog(param0: android.databinding.parser.XMLParser.PrologContext): void;
				public exitDocument(ctx: android.databinding.parser.XMLParser.DocumentContext): void;
				public exitMisc(ctx: android.databinding.parser.XMLParser.MiscContext): void;
			}
		}
	}
}

declare module android {
	export module databinding {
		export module parser {
			export class XMLParserBaseVisitor<T>  extends android.databinding.internal.org.antlr.v4.runtime.tree.AbstractParseTreeVisitor<any> implements android.databinding.parser.XMLParserVisitor<any>  {
				public static class: java.lang.Class<android.databinding.parser.XMLParserBaseVisitor<any>>;
				public visitElement(ctx: android.databinding.parser.XMLParser.ElementContext): any;
				public visitChardata(param0: android.databinding.parser.XMLParser.ChardataContext): any;
				public visit(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): any;
				public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): any;
				public visit(tree: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): any;
				public visitMisc(ctx: android.databinding.parser.XMLParser.MiscContext): any;
				public constructor();
				public visitAttribute(param0: android.databinding.parser.XMLParser.AttributeContext): any;
				public visitTerminal(node: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): any;
				public visitProlog(ctx: android.databinding.parser.XMLParser.PrologContext): any;
				public visitContent(param0: android.databinding.parser.XMLParser.ContentContext): any;
				public visitAttribute(ctx: android.databinding.parser.XMLParser.AttributeContext): any;
				public visitDocument(ctx: android.databinding.parser.XMLParser.DocumentContext): any;
				public visitReference(ctx: android.databinding.parser.XMLParser.ReferenceContext): any;
				public visitDocument(param0: android.databinding.parser.XMLParser.DocumentContext): any;
				public visitContent(ctx: android.databinding.parser.XMLParser.ContentContext): any;
				public visitChardata(ctx: android.databinding.parser.XMLParser.ChardataContext): any;
				public visitReference(param0: android.databinding.parser.XMLParser.ReferenceContext): any;
				public visitProlog(param0: android.databinding.parser.XMLParser.PrologContext): any;
				public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): any;
				public visitErrorNode(node: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): any;
				public visitElement(param0: android.databinding.parser.XMLParser.ElementContext): any;
				public visitChildren(node: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): any;
				public visitMisc(param0: android.databinding.parser.XMLParser.MiscContext): any;
				public visitChildren(param0: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): any;
			}
		}
	}
}

declare module android {
	export module databinding {
		export module parser {
			export class XMLParserListener extends java.lang.Object implements android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeListener {
				public static class: java.lang.Class<android.databinding.parser.XMLParserListener>;
				/**
				 * Constructs a new instance of the android.databinding.parser.XMLParserListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					enterDocument(param0: android.databinding.parser.XMLParser.DocumentContext): void;
					exitDocument(param0: android.databinding.parser.XMLParser.DocumentContext): void;
					enterProlog(param0: android.databinding.parser.XMLParser.PrologContext): void;
					exitProlog(param0: android.databinding.parser.XMLParser.PrologContext): void;
					enterContent(param0: android.databinding.parser.XMLParser.ContentContext): void;
					exitContent(param0: android.databinding.parser.XMLParser.ContentContext): void;
					enterElement(param0: android.databinding.parser.XMLParser.ElementContext): void;
					exitElement(param0: android.databinding.parser.XMLParser.ElementContext): void;
					enterReference(param0: android.databinding.parser.XMLParser.ReferenceContext): void;
					exitReference(param0: android.databinding.parser.XMLParser.ReferenceContext): void;
					enterAttribute(param0: android.databinding.parser.XMLParser.AttributeContext): void;
					exitAttribute(param0: android.databinding.parser.XMLParser.AttributeContext): void;
					enterChardata(param0: android.databinding.parser.XMLParser.ChardataContext): void;
					exitChardata(param0: android.databinding.parser.XMLParser.ChardataContext): void;
					enterMisc(param0: android.databinding.parser.XMLParser.MiscContext): void;
					exitMisc(param0: android.databinding.parser.XMLParser.MiscContext): void;
					visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
					visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
					enterEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
					exitEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				});
				public constructor();
				public exitReference(param0: android.databinding.parser.XMLParser.ReferenceContext): void;
				public enterEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				public enterElement(param0: android.databinding.parser.XMLParser.ElementContext): void;
				public enterContent(param0: android.databinding.parser.XMLParser.ContentContext): void;
				public enterMisc(param0: android.databinding.parser.XMLParser.MiscContext): void;
				public exitElement(param0: android.databinding.parser.XMLParser.ElementContext): void;
				public exitChardata(param0: android.databinding.parser.XMLParser.ChardataContext): void;
				public exitAttribute(param0: android.databinding.parser.XMLParser.AttributeContext): void;
				public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): void;
				public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): void;
				public exitDocument(param0: android.databinding.parser.XMLParser.DocumentContext): void;
				public enterChardata(param0: android.databinding.parser.XMLParser.ChardataContext): void;
				public exitContent(param0: android.databinding.parser.XMLParser.ContentContext): void;
				public enterAttribute(param0: android.databinding.parser.XMLParser.AttributeContext): void;
				public enterReference(param0: android.databinding.parser.XMLParser.ReferenceContext): void;
				public exitEveryRule(param0: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext): void;
				public enterProlog(param0: android.databinding.parser.XMLParser.PrologContext): void;
				public enterDocument(param0: android.databinding.parser.XMLParser.DocumentContext): void;
				public exitMisc(param0: android.databinding.parser.XMLParser.MiscContext): void;
				public exitProlog(param0: android.databinding.parser.XMLParser.PrologContext): void;
			}
		}
	}
}

declare module android {
	export module databinding {
		export module parser {
			export class XMLParserVisitor<T>  extends android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor<any> {
				public static class: java.lang.Class<android.databinding.parser.XMLParserVisitor<any>>;
				/**
				 * Constructs a new instance of the android.databinding.parser.XMLParserVisitor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					visitDocument(param0: android.databinding.parser.XMLParser.DocumentContext): any;
					visitProlog(param0: android.databinding.parser.XMLParser.PrologContext): any;
					visitContent(param0: android.databinding.parser.XMLParser.ContentContext): any;
					visitElement(param0: android.databinding.parser.XMLParser.ElementContext): any;
					visitReference(param0: android.databinding.parser.XMLParser.ReferenceContext): any;
					visitAttribute(param0: android.databinding.parser.XMLParser.AttributeContext): any;
					visitChardata(param0: android.databinding.parser.XMLParser.ChardataContext): any;
					visitMisc(param0: android.databinding.parser.XMLParser.MiscContext): any;
					visit(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): any;
					visitChildren(param0: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): any;
					visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): any;
					visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): any;
				});
				public constructor();
				public visitDocument(param0: android.databinding.parser.XMLParser.DocumentContext): any;
				public visitChardata(param0: android.databinding.parser.XMLParser.ChardataContext): any;
				public visitErrorNode(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ErrorNode): any;
				public visit(param0: android.databinding.internal.org.antlr.v4.runtime.tree.ParseTree): any;
				public visitReference(param0: android.databinding.parser.XMLParser.ReferenceContext): any;
				public visitTerminal(param0: android.databinding.internal.org.antlr.v4.runtime.tree.TerminalNode): any;
				public visitContent(param0: android.databinding.parser.XMLParser.ContentContext): any;
				public visitElement(param0: android.databinding.parser.XMLParser.ElementContext): any;
				public visitProlog(param0: android.databinding.parser.XMLParser.PrologContext): any;
				public visitMisc(param0: android.databinding.parser.XMLParser.MiscContext): any;
				public visitAttribute(param0: android.databinding.parser.XMLParser.AttributeContext): any;
				public visitChildren(param0: android.databinding.internal.org.antlr.v4.runtime.tree.RuleNode): any;
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class BaseDataBinder extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.BaseDataBinder>;
				public getGetRPackage(): kotlin.jvm.functions.Function2<string,string,string>;
				public constructor(input: android.databinding.tool.store.LayoutInfoInput, getRPackage: kotlin.jvm.functions.Function2<any,any,string>);
				public generateAll(writer: android.databinding.tool.writer.JavaFileWriter): void;
				public getInput(): android.databinding.tool.store.LayoutInfoInput;
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class BindableCompat extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.BindableCompat>;
				public static extractFrom(element: javax.lang.model.element.Element): android.databinding.tool.BindableCompat;
				public static extractFrom(field: java.lang.reflect.Field): android.databinding.tool.BindableCompat;
				public getDependencies(): string[];
				public constructor(dependencies: string[]);
				public static extractFrom(method: java.lang.reflect.Method): android.databinding.tool.BindableCompat;
			}
			export module BindableCompat {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.BindableCompat.Companion>;
					public extractFrom(method: java.lang.reflect.Method): android.databinding.tool.BindableCompat;
					public extractFrom(field: java.lang.reflect.Field): android.databinding.tool.BindableCompat;
					public extractFrom(element: javax.lang.model.element.Element): android.databinding.tool.BindableCompat;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class BindingAdapterCompat extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.BindingAdapterCompat>;
				public static create(element: javax.lang.model.element.Element): android.databinding.tool.BindingAdapterCompat;
				public getRequireAll(): boolean;
				public constructor(attributes: string[], requireAll: boolean);
				public getAttributes(): string[];
			}
			export module BindingAdapterCompat {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.BindingAdapterCompat.Companion>;
					public create(element: javax.lang.model.element.Element): android.databinding.tool.BindingAdapterCompat;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class BindingMethodsCompat extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.BindingMethodsCompat>;
				public getMethods(): java.util.List<android.databinding.tool.BindingMethodsCompat.BindingMethodCompat>;
				public static create(element: javax.lang.model.element.Element): android.databinding.tool.BindingMethodsCompat;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public copy(methods: java.util.List<android.databinding.tool.BindingMethodsCompat.BindingMethodCompat>): android.databinding.tool.BindingMethodsCompat;
				public hashCode(): number;
				public toString(): string;
				public constructor(methods: java.util.List<android.databinding.tool.BindingMethodsCompat.BindingMethodCompat>);
				public component1(): java.util.List<android.databinding.tool.BindingMethodsCompat.BindingMethodCompat>;
			}
			export module BindingMethodsCompat {
				export class BindingMethodCompat extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.BindingMethodsCompat.BindingMethodCompat>;
					public getAttribute(): string;
					public copy(type: string, attribute: string, method: string): android.databinding.tool.BindingMethodsCompat.BindingMethodCompat;
					public toString(): string;
					public equals(obj: any): boolean;
					public component1(): string;
					public component2(): string;
					public equals(other: any): boolean;
					public constructor(type: string, attribute: string, method: string);
					public component3(): string;
					public getType(): string;
					public hashCode(): number;
					public getMethod(): string;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.BindingMethodsCompat.Companion>;
					public create(element: javax.lang.model.element.Element): android.databinding.tool.BindingMethodsCompat;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class CompilerArguments extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.CompilerArguments>;
				public static PARAM_INCREMENTAL: string;
				public static ALL_PARAMS: java.util.Set<string>;
				public component17(): boolean;
				public component7(): java.io.File;
				public component16(): boolean;
				public getEnableDebugLogs(): boolean;
				public component1(): boolean;
				public component8(): java.io.File;
				public getApiFile(): java.io.File;
				public component6(): java.io.File;
				public toMap(): java.util.Map<string,string>;
				public component2(): android.databinding.tool.CompilerArguments.Type;
				public hashCode(): number;
				public getIncremental(): boolean;
				public getDependencyArtifactsDir(): java.io.File;
				public getPrintEncodedErrorLogs(): boolean;
				public constructor(incremental: boolean, artifactType: android.databinding.tool.CompilerArguments.Type, modulePackage: string, minApi: number, apiFile: java.io.File, dependencyArtifactsDir: java.io.File, layoutInfoDir: java.io.File, classLogDir: java.io.File, baseFeatureInfoDir: java.io.File, featureInfoDir: java.io.File, aarOutDir: java.io.File, exportClassListOutFile: java.io.File, enableDebugLogs: boolean, printEncodedErrorLogs: boolean, isTestVariant: boolean, isEnabledForTests: boolean, isEnableV2: boolean, directDependencyPackages: string, localR: java.io.File, dependenciesRFiles: java.util.List<any>, mergedDependenciesRFile: java.io.File);
				public isEnableV2(): boolean;
				public getMergedDependenciesRFile(): java.io.File;
				public copyAsV1(modulePackage: string): android.databinding.tool.CompilerArguments;
				public getDependenciesRFiles(): java.util.List<java.io.File>;
				public component18(): string;
				public component19(): java.io.File;
				public component5(): java.io.File;
				public parseDirectDependencyPackages(): java.util.TreeSet<string>;
				public toString(): string;
				public isEnabledForTests(): boolean;
				public getExportClassListOutFile(): java.io.File;
				public component3(): string;
				public component14(): boolean;
				public component13(): boolean;
				public component15(): boolean;
				public copy(incremental: boolean, artifactType: android.databinding.tool.CompilerArguments.Type, modulePackage: string, minApi: number, apiFile: java.io.File, dependencyArtifactsDir: java.io.File, layoutInfoDir: java.io.File, classLogDir: java.io.File, baseFeatureInfoDir: java.io.File, featureInfoDir: java.io.File, aarOutDir: java.io.File, exportClassListOutFile: java.io.File, enableDebugLogs: boolean, printEncodedErrorLogs: boolean, isTestVariant: boolean, isEnabledForTests: boolean, isEnableV2: boolean, directDependencyPackages: string, localR: java.io.File, dependenciesRFiles: java.util.List<any>, mergedDependenciesRFile: java.io.File): android.databinding.tool.CompilerArguments;
				public getArtifactType(): android.databinding.tool.CompilerArguments.Type;
				public static readFromOptions(options: java.util.Map<string,string>): android.databinding.tool.CompilerArguments;
				public component4(): number;
				public getFeatureInfoDir(): java.io.File;
				public getAarOutDir(): java.io.File;
				public component12(): java.io.File;
				public component11(): java.io.File;
				public component20(): java.util.List<java.io.File>;
				public getBaseFeatureInfoDir(): java.io.File;
				public equals(other: any): boolean;
				public getMinApi(): number;
				public getClassLogDir(): java.io.File;
				public getLayoutInfoDir(): java.io.File;
				public isLibrary(): boolean;
				public isApp(): boolean;
				public component21(): java.io.File;
				public getDirectDependencyPackages(): string;
				public getModulePackage(): string;
				public isFeature(): boolean;
				public isTestVariant(): boolean;
				public getLocalR(): java.io.File;
				public equals(obj: any): boolean;
				public component9(): java.io.File;
				public component10(): java.io.File;
			}
			export module CompilerArguments {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.CompilerArguments.Companion>;
					public fileListToString(fileList: java.util.List<any>): string;
					public stringToFileList(fileListValue: string): java.util.List<java.io.File>;
					public readFromOptions(options: java.util.Map<string,string>): android.databinding.tool.CompilerArguments;
				}
				export class Type {
					public static class: java.lang.Class<android.databinding.tool.CompilerArguments.Type>;
					public static APPLICATION: android.databinding.tool.CompilerArguments.Type;
					public static LIBRARY: android.databinding.tool.CompilerArguments.Type;
					public static FEATURE: android.databinding.tool.CompilerArguments.Type;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(value: string): android.databinding.tool.CompilerArguments.Type;
					public static values(): android.databinding.tool.CompilerArguments.Type[];
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class DataBindingBuilder extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.DataBindingBuilder>;
				public static PROCESSOR_NAME: string;
				public static ARTIFACT_BASE_CLASSES_DIR_FROM_LIBS: string;
				public static INCREMENTAL_BIN_AAR_DIR: string;
				public static INCREMENTAL_BINDING_CLASSES_LIST_DIR: string;
				public static DATA_BINDING_ROOT_FOLDER_IN_AAR: string;
				public static DATA_BINDING_CLASS_LOG_ROOT_FOLDER_IN_AAR: string;
				public static BR_FILE_EXT: string;
				public static LAYOUT_INFO_FILE_EXT: string;
				public static RESOURCE_FILE_EXTENSIONS: java.util.List<string>;
				public static BINDING_CLASS_LIST_SUFFIX: string;
				public static FEATURE_PACKAGE_LIST_FILE_NAME: string;
				public static FEATURE_BR_OFFSET_FILE_NAME: string;
				public setPrintMachineReadableOutput(machineReadableOutput: boolean): void;
				public getBaseLibraryVersion(compilerVersion: string): string;
				public getBaseAdaptersVersion(compilerVersion: string): string;
				public createJavaFileWriter(outFolder: java.io.File): android.databinding.tool.writer.JavaFileWriter;
				public isDebugLogEnabled(): boolean;
				public getLibraryVersion(compilerVersion: string): string;
				public static getPrintMachineReadableOutput(): boolean;
				public getCompilerVersion(): string;
				public static getJarExcludeList(packageName: string, className: string, generatedClassListFile: java.io.File, dataBindingCompilerBuildFolder: java.io.File): java.util.List<string>;
				public static setDebugLogEnabled(enableDebugLogs: boolean): void;
				public constructor();
			}
			export module DataBindingBuilder {
				export class GradleFileWriter extends android.databinding.tool.writer.JavaFileWriter {
					public static class: java.lang.Class<android.databinding.tool.DataBindingBuilder.GradleFileWriter>;
					public constructor();
					public deleteFile(param0: string): void;
					public writeToFile(param0: string, param1: string): void;
					public writeToFile(exactPath: java.io.File, contents: string): void;
					public writeToFile(canonicalName: string, contents: string): void;
					public deleteFile(canonicalName: string): void;
					public constructor(outputBase: string);
					public writeToFile(javafile: com.squareup.javapoet.JavaFile): void;
				}
				export class Versions extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.DataBindingBuilder.Versions>;
					public constructor(properties: java.util.Properties);
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class FeaturePackageInfo extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.FeaturePackageInfo>;
				public serialize(file: java.io.File): void;
				public constructor(packageId: number);
				public static fromFile(file: java.io.File): android.databinding.tool.FeaturePackageInfo;
				public getPackageId(): number;
			}
			export module FeaturePackageInfo {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.FeaturePackageInfo.Companion>;
					public fromFile(file: java.io.File): android.databinding.tool.FeaturePackageInfo;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class InverseBindingAdapterCompat extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.InverseBindingAdapterCompat>;
				public constructor(attribute: string, event: string);
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public getEvent(): string;
				public component1(): string;
				public getAttribute(): string;
				public hashCode(): number;
				public component2(): string;
				public toString(): string;
				public static create(element: javax.lang.model.element.Element): android.databinding.tool.InverseBindingAdapterCompat;
				public copy(attribute: string, event: string): android.databinding.tool.InverseBindingAdapterCompat;
			}
			export module InverseBindingAdapterCompat {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.InverseBindingAdapterCompat.Companion>;
					public create(element: javax.lang.model.element.Element): android.databinding.tool.InverseBindingAdapterCompat;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class InverseBindingMethodsCompat extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.InverseBindingMethodsCompat>;
				public static create(element: javax.lang.model.element.Element): android.databinding.tool.InverseBindingMethodsCompat;
				public copy(methods: java.util.List<android.databinding.tool.InverseBindingMethodsCompat.InverseBindingMethodCompat>): android.databinding.tool.InverseBindingMethodsCompat;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public component1(): java.util.List<android.databinding.tool.InverseBindingMethodsCompat.InverseBindingMethodCompat>;
				public toString(): string;
				public constructor(methods: java.util.List<android.databinding.tool.InverseBindingMethodsCompat.InverseBindingMethodCompat>);
				public getMethods(): java.util.List<android.databinding.tool.InverseBindingMethodsCompat.InverseBindingMethodCompat>;
			}
			export module InverseBindingMethodsCompat {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.InverseBindingMethodsCompat.Companion>;
					public create(element: javax.lang.model.element.Element): android.databinding.tool.InverseBindingMethodsCompat;
					public create(annotation: androidx.databinding.InverseBindingMethods): android.databinding.tool.InverseBindingMethodsCompat;
					public create(annotation: android.databinding.InverseBindingMethods): android.databinding.tool.InverseBindingMethodsCompat;
				}
				export class InverseBindingMethodCompat extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.InverseBindingMethodsCompat.InverseBindingMethodCompat>;
					public getAttribute(): string;
					public equals(obj: any): boolean;
					public component2(): string;
					public equals(other: any): boolean;
					public component3(): string;
					public getEvent(): string;
					public toString(): string;
					public component1(): string;
					public component4(): string;
					public getType(): string;
					public copy(type: string, attribute: string, event: string, method: string): android.databinding.tool.InverseBindingMethodsCompat.InverseBindingMethodCompat;
					public hashCode(): number;
					public constructor(type: string, attribute: string, event: string, method: string);
					public getMethod(): string;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class InverseMethodCompat extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.InverseMethodCompat>;
				public static create(element: javax.lang.model.element.Element): android.databinding.tool.InverseMethodCompat;
				public copy(value: string): android.databinding.tool.InverseMethodCompat;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public component1(): string;
				public hashCode(): number;
				public getValue(): string;
				public constructor(value: string);
				public toString(): string;
			}
			export module InverseMethodCompat {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.InverseMethodCompat.Companion>;
					public create(element: javax.lang.model.element.Element): android.databinding.tool.InverseMethodCompat;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class LayoutXmlProcessor extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.LayoutXmlProcessor>;
				public processSingleFile(input: android.databinding.tool.util.RelativizableFile, output: java.io.File, isViewBindingEnabled: boolean, isDataBindingEnabled: boolean): boolean;
				public processResources(input: android.databinding.tool.LayoutXmlProcessor.ResourceInput, isViewBindingEnabled: boolean, isDataBindingEnabled: boolean): boolean;
				public getPackage(): string;
				public processFileWithNoDataBinding(file: java.io.File): void;
				public static generateExportFileName(fileName: string, dirName: string): string;
				public writeLayoutInfoFiles(xmlOutDir: java.io.File): void;
				public writeLayoutInfoFiles(xmlOutDir: java.io.File, writer: android.databinding.tool.writer.JavaFileWriter): void;
				public processRemovedFile(input: java.io.File): void;
				public static toSystemDependentPath(path: string): string;
				public constructor(applicationPackage: string, fileWriter: android.databinding.tool.writer.JavaFileWriter, originalFileLookup: android.databinding.tool.LayoutXmlProcessor.OriginalFileLookup, useAndroidX: boolean);
				public getFileWriter(): android.databinding.tool.writer.JavaFileWriter;
				public static exportLayoutNameFromInfoFileName(infoFileName: string): string;
				public getResourceBundle(): android.databinding.tool.store.ResourceBundle;
			}
			export module LayoutXmlProcessor {
				export class OriginalFileLookup extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.LayoutXmlProcessor.OriginalFileLookup>;
					/**
					 * Constructs a new instance of the android.databinding.tool.LayoutXmlProcessor$OriginalFileLookup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getOriginalFileFor(param0: java.io.File): java.io.File;
					});
					public constructor();
					public getOriginalFileFor(param0: java.io.File): java.io.File;
				}
				export class ProcessFileCallback extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.LayoutXmlProcessor.ProcessFileCallback>;
					/**
					 * Constructs a new instance of the android.databinding.tool.LayoutXmlProcessor$ProcessFileCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						processLayoutFile(param0: java.io.File): void;
						processOtherFile(param0: java.io.File, param1: java.io.File): void;
						processRemovedLayoutFile(param0: java.io.File): void;
						processRemovedOtherFile(param0: java.io.File, param1: java.io.File): void;
						processOtherFolder(param0: java.io.File): void;
						processLayoutFolder(param0: java.io.File): void;
						processOtherRootFile(param0: java.io.File): void;
						processRemovedOtherRootFile(param0: java.io.File): void;
					});
					public constructor();
					public processOtherFile(param0: java.io.File, param1: java.io.File): void;
					public processOtherFolder(param0: java.io.File): void;
					public processRemovedOtherFile(param0: java.io.File, param1: java.io.File): void;
					public processOtherRootFile(param0: java.io.File): void;
					public processLayoutFolder(param0: java.io.File): void;
					public processRemovedOtherRootFile(param0: java.io.File): void;
					public processRemovedLayoutFile(param0: java.io.File): void;
					public processLayoutFile(param0: java.io.File): void;
				}
				export class ResourceInput extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.LayoutXmlProcessor.ResourceInput>;
					public toString(): string;
					public isIncremental(): boolean;
					public changed(file: java.io.File): void;
					public added(file: java.io.File): void;
					public removed(file: java.io.File): void;
					public constructor(incremental: boolean, rootInputFolder: java.io.File, rootOutputFolder: java.io.File);
					public shouldCopy(): boolean;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class LibTypes extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.LibTypes>;
				public getBindingPackage(): string;
				public getBindableClass(): java.lang.Class<any>;
				public getBindingAdapterClass(): java.lang.Class<any>;
				public getUntaggableClass(): java.lang.Class<any>;
				public getDataBindingKtx(): string;
				public getInverseBindingMethodsClass(): java.lang.Class<any>;
				public getAppCompatResources(): string;
				public getMutableLiveData(): string;
				public getLifecycleOwner(): string;
				public getStateFlow(): string;
				public getListClassNames(): java.util.List<string>;
				public getBindingAdapter(): string;
				public getObservableMap(): string;
				public getUseAndroidX(): boolean;
				public getViewBinding(): string;
				public getBindable(): string;
				public getInverseBindingListener(): string;
				public getPropertyChangedInverseListener(): string;
				public constructor(useAndroidX: boolean);
				public getBindingConversionClass(): java.lang.Class<any>;
				public getDataBinderMapper(): string;
				public getDataBindingUtil(): string;
				public getNullable(): string;
				public getNonNull(): string;
				public getObservableFields(): java.util.List<string>;
				public getViewDataBinding(): string;
				public getBindingMethodsClass(): java.lang.Class<any>;
				public convert(inp: string): string;
				public getObservable(): string;
				public getInverseBindingAdapterClass(): java.lang.Class<any>;
				public getViewStubProxy(): string;
				public getDataBindingComponent(): string;
				public getObservableList(): string;
				public getMutableStateFlow(): string;
				public getLiveData(): string;
				public getInverseMethodClass(): java.lang.Class<any>;
			}
			export module LibTypes {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.LibTypes.Companion>;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export class UntaggableCompat extends java.lang.Object {
				public static class: java.lang.Class<android.databinding.tool.UntaggableCompat>;
				public getValue(): string[];
				public constructor(value: string[]);
				public static create(element: javax.lang.model.element.Element): android.databinding.tool.UntaggableCompat;
			}
			export module UntaggableCompat {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.UntaggableCompat.Companion>;
					public create(element: javax.lang.model.element.Element): android.databinding.tool.UntaggableCompat;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module expr {
				export class VersionProvider extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.expr.VersionProvider>;
					/**
					 * Constructs a new instance of the android.databinding.tool.expr.VersionProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getVersion(): number;
					});
					public constructor();
					public getVersion(): number;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module ext {
				export class LazyExt<K, T>  extends kotlin.properties.ReadOnlyProperty<any,any> {
					public static class: java.lang.Class<android.databinding.tool.ext.LazyExt<any,any>>;
					public getValue(param0: any, param1: kotlin.reflect.KProperty<any>): any;
					public getValue(thisRef: any, property: kotlin.reflect.KProperty<any>): any;
					public constructor(initializer: kotlin.jvm.functions.Function1<any,any>);
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module ext {
				export class Replacement extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.ext.Replacement>;
					public getSupport(): com.squareup.javapoet.ClassName;
					public toString(): string;
					public equals(obj: any): boolean;
					public constructor(support: com.squareup.javapoet.ClassName, androidX: com.squareup.javapoet.ClassName);
					public component1(): com.squareup.javapoet.ClassName;
					public equals(other: any): boolean;
					public getAndroidX(): com.squareup.javapoet.ClassName;
					public copy(support: com.squareup.javapoet.ClassName, androidX: com.squareup.javapoet.ClassName): android.databinding.tool.ext.Replacement;
					public component2(): com.squareup.javapoet.ClassName;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module ext {
				export class VersionedLazyExt<K, T>  extends kotlin.properties.ReadOnlyProperty<any,any> {
					public static class: java.lang.Class<android.databinding.tool.ext.VersionedLazyExt<any,any>>;
					public getValue(param0: any, param1: kotlin.reflect.KProperty<any>): any;
					public getValue(thisRef: any, property: kotlin.reflect.KProperty<any>): any;
					public constructor(initializer: kotlin.jvm.functions.Function1<any,any>);
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module ext {
				export class VersionedResult<T>  extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.ext.VersionedResult<any>>;
					public toString(): string;
					public equals(obj: any): boolean;
					public getVersion(): number;
					public component1(): number;
					public equals(other: any): boolean;
					public getResult(): T;
					public copy(version: number, result: T): android.databinding.tool.ext.VersionedResult<T>;
					public hashCode(): number;
					public constructor(version: number, result: T);
					public component2(): T;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module ext {
				export class XmlResourceReference extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.ext.XmlResourceReference>;
					public getNamespace(): string;
					public equals(obj: any): boolean;
					public component2(): string;
					public equals(other: any): boolean;
					public component3(): string;
					public getCreating(): boolean;
					public toString(): string;
					public component1(): string;
					public getName(): string;
					public component4(): boolean;
					public constructor(namespace: string, type: string, name: string, creating: boolean);
					public getType(): string;
					public hashCode(): number;
					public copy(namespace: string, type: string, name: string, creating: boolean): android.databinding.tool.ext.XmlResourceReference;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module processing {
				export class ErrorMessages extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.processing.ErrorMessages>;
					public static INCLUDE_INSIDE_MERGE: string;
					public static FOUND_LAYOUT_BUT_NOT_ENABLED: string;
					public static UNDEFINED_VARIABLE: string;
					public static CANNOT_FIND_SETTER_CALL: string;
					public static CANNOT_RESOLVE_TYPE: string;
					public static MULTI_CONFIG_LAYOUT_CLASS_NAME_MISMATCH: string;
					public static MULTI_CONFIG_VARIABLE_TYPE_MISMATCH: string;
					public static MULTI_CONFIG_IMPORT_TYPE_MISMATCH: string;
					public static MULTI_CONFIG_ID_USED_AS_IMPORT: string;
					public static ROOT_TAG_NOT_SUPPORTED: string;
					public static SYNTAX_ERROR: string;
					public static CANNOT_FIND_GETTER_CALL: string;
					public static EXPRESSION_NOT_INVERTIBLE: string;
					public static TWO_WAY_EVENT_ATTRIBUTE: string;
					public static CANNOT_FIND_ABSTRACT_METHOD: string;
					public static CALLBACK_ARGUMENT_COUNT_MISMATCH: string;
					public static DUPLICATE_CALLBACK_ARGUMENT: string;
					public static CALLBACK_VARIABLE_NAME_CLASH: string;
					public static CANNOT_UNBOX_TYPE: string;
					public static CANNOT_FIND_METHOD_ON_OWNER: string;
					public static ARGUMENT_COUNT_MISMATCH: string;
					public static RECURSIVE_OBSERVABLE: string;
					public static DUPLICATE_VIEW_OR_INCLUDE_ID: string;
					public static UNEXPECTED_ERROR_IN_LAYOUT: string;
					public constructor();
					public static callbackReturnTypeMismatchError(methodName: string, expectedReturnType: string, expression: string, expressionReturnType: string): string;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module processing {
				export class Scope extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.processing.Scope>;
					public static enter(scopeProvider: android.databinding.tool.processing.scopes.ScopeProvider): void;
					public static exit(): void;
					public constructor();
					public static registerError(msg: string, ...scopeProviders: android.databinding.tool.processing.scopes.ScopeProvider[]): void;
					public static enter(location: android.databinding.tool.store.Location): void;
					public static defer(exception: android.databinding.tool.processing.ScopedException): void;
					public static assertNoError(): void;
				}
				export module Scope {
					export class ScopeEntry extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.processing.Scope.ScopeEntry>;
						public constructor(scopeProvider: android.databinding.tool.processing.scopes.ScopeProvider, parent: android.databinding.tool.processing.Scope.ScopeEntry);
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module processing {
				export class ScopedErrorReport extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.processing.ScopedErrorReport>;
					public isValid(): boolean;
					public toUserReadableString(): string;
					public getLocations(): java.util.List<android.databinding.tool.store.Location>;
					public getFilePath(): string;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module processing {
				export class ScopedException extends java.lang.RuntimeException {
					public static class: java.lang.Class<android.databinding.tool.processing.ScopedException>;
					public static extractErrors(output: string): java.util.List<android.databinding.tool.processing.ScopedException>;
					public constructor(cause: java.lang.Throwable, message: string, ...args: any[]);
					public constructor(message: string, ...args: any[]);
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public createHumanReadableMessage(): string;
					public static encodeOutput(encodeOutput: boolean): void;
					public constructor();
					public getScopedErrorReport(): android.databinding.tool.processing.ScopedErrorReport;
					public isValid(): boolean;
					public constructor(cause: java.lang.Throwable);
					public getBareMessage(): string;
					public getMessage(): string;
					public static isEncodeOutput(): boolean;
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module ScopedException {
					export class EncodedMessage extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.processing.ScopedException.EncodedMessage>;
						public message: string;
						public filePath: string;
						public positions: java.util.List<android.databinding.tool.processing.ScopedException.FileLocation>;
					}
					export class FileLocation extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.processing.ScopedException.FileLocation>;
						public lineStart: number;
						public colStart: number;
						public lineEnd: number;
						public colEnd: number;
						public toLocation(): android.databinding.tool.store.Location;
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module processing {
				export class ViewBindingErrorMessages extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.processing.ViewBindingErrorMessages>;
					public static INSTANCE: android.databinding.tool.processing.ViewBindingErrorMessages;
					public inconsistentViewBindingType(layoutFileName: string, bindingTypes: java.util.List<string>, bindingTargetId: string): string;
					public viewBindingTypeInIncludeTag(layoutFileName: string, includeTagId: string): string;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module processing {
				export module scopes {
					export class FileScopeProvider extends java.lang.Object implements android.databinding.tool.processing.scopes.ScopeProvider {
						public static class: java.lang.Class<android.databinding.tool.processing.scopes.FileScopeProvider>;
						/**
						 * Constructs a new instance of the android.databinding.tool.processing.scopes.FileScopeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							provideScopeFilePath(): string;
						});
						public constructor();
						public provideScopeFilePath(): string;
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module processing {
				export module scopes {
					export class LocationScopeProvider extends java.lang.Object implements android.databinding.tool.processing.scopes.ScopeProvider {
						public static class: java.lang.Class<android.databinding.tool.processing.scopes.LocationScopeProvider>;
						/**
						 * Constructs a new instance of the android.databinding.tool.processing.scopes.LocationScopeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							provideScopeLocation(): java.util.List<android.databinding.tool.store.Location>;
						});
						public constructor();
						public provideScopeLocation(): java.util.List<android.databinding.tool.store.Location>;
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module processing {
				export module scopes {
					export class ScopeProvider extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.processing.scopes.ScopeProvider>;
						/**
						 * Constructs a new instance of the android.databinding.tool.processing.scopes.ScopeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module store {
				export class FeatureInfoList extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.store.FeatureInfoList>;
					public copy(packages: java.util.Set<string>): android.databinding.tool.store.FeatureInfoList;
					public toString(): string;
					public equals(obj: any): boolean;
					public constructor(packages: java.util.Set<string>);
					public equals(other: any): boolean;
					public serialize(file: java.io.File): void;
					public static fromFile(file: java.io.File): android.databinding.tool.store.FeatureInfoList;
					public component1(): java.util.Set<string>;
					public hashCode(): number;
					public getPackages(): java.util.Set<string>;
				}
				export module FeatureInfoList {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.store.FeatureInfoList.Companion>;
						public fromFile(file: java.io.File): android.databinding.tool.store.FeatureInfoList;
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module store {
				export class GenClassInfoLog extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.store.GenClassInfoLog>;
					public equals(obj: any): boolean;
					public equals(other: any): boolean;
					public diff(other: android.databinding.tool.store.GenClassInfoLog): java.util.Set<string>;
					public constructor(mappings: java.util.LinkedHashMap<string,android.databinding.tool.store.GenClassInfoLog.GenClass>);
					public mappings(): java.util.LinkedHashMap<string,android.databinding.tool.store.GenClassInfoLog.GenClass>;
					public createPackageInfoLog(pkg: string): android.databinding.tool.store.GenClassInfoLog;
					public toString(): string;
					public addMapping(infoFileName: string, klass: android.databinding.tool.store.GenClassInfoLog.GenClass): void;
					public static fromFile(file: java.io.File): android.databinding.tool.store.GenClassInfoLog;
					public constructor();
					public serialize(file: java.io.File): void;
					public addAll(other: android.databinding.tool.store.GenClassInfoLog): void;
					public copy(mappings: java.util.LinkedHashMap<string,android.databinding.tool.store.GenClassInfoLog.GenClass>): android.databinding.tool.store.GenClassInfoLog;
					public hashCode(): number;
					public static fromInputStream(inputStream: java.io.InputStream): android.databinding.tool.store.GenClassInfoLog;
				}
				export module GenClassInfoLog {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.store.GenClassInfoLog.Companion>;
						public fromInputStream(inputStream: java.io.InputStream): android.databinding.tool.store.GenClassInfoLog;
						public fromFile(file: java.io.File): android.databinding.tool.store.GenClassInfoLog;
					}
					export class GenClass extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.store.GenClassInfoLog.GenClass>;
						public constructor(qName: string, modulePackage: string, variables: java.util.Map<string,string>, implementations: java.util.Set<android.databinding.tool.store.GenClassInfoLog.GenClassImpl>);
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getVariables(): java.util.Map<string,string>;
						public component1(): string;
						public hashCode(): number;
						public getModulePackage(): string;
						public copy(qName: string, modulePackage: string, variables: java.util.Map<string,string>, implementations: java.util.Set<android.databinding.tool.store.GenClassInfoLog.GenClassImpl>): android.databinding.tool.store.GenClassInfoLog.GenClass;
						public toString(): string;
						public component4(): java.util.Set<android.databinding.tool.store.GenClassInfoLog.GenClassImpl>;
						public component3(): java.util.Map<string,string>;
						public component2(): string;
						public getImplementations(): java.util.Set<android.databinding.tool.store.GenClassInfoLog.GenClassImpl>;
						public getQName(): string;
					}
					export class GenClassImpl extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.store.GenClassInfoLog.GenClassImpl>;
						public copy(tag: string, merge: boolean, qualifiedName: string): android.databinding.tool.store.GenClassInfoLog.GenClassImpl;
						public component3(): string;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public component2(): boolean;
						public constructor(tag: string, merge: boolean, qualifiedName: string);
						public getTag(): string;
						public component1(): string;
						public hashCode(): number;
						public toString(): string;
						public getMerge(): boolean;
						public getQualifiedName(): string;
					}
					export module GenClassImpl {
						export class Companion extends java.lang.Object {
							public static class: java.lang.Class<android.databinding.tool.store.GenClassInfoLog.GenClassImpl.Companion>;
							public from(bundle: android.databinding.tool.store.ResourceBundle.LayoutFileBundle): android.databinding.tool.store.GenClassInfoLog.GenClassImpl;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module store {
				export class LayoutFileParser extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.store.LayoutFileParser>;
					public static VIEW_BINDING_TYPE_ATTR: string;
					public static parseXml(input: android.databinding.tool.util.RelativizableFile, outputFile: java.io.File, pkg: string, originalFileLookup: android.databinding.tool.LayoutXmlProcessor.OriginalFileLookup, isViewBindingEnabled: boolean, isDataBindingEnabled: boolean): android.databinding.tool.store.ResourceBundle.LayoutFileBundle;
					public static stripSingleLayoutFile(layoutFile: java.io.File, outputFile: java.io.File): boolean;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module store {
				export class LayoutInfoInput extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.store.LayoutInfoInput>;
					public static LOG_FILE_NAME: string;
					public static DEPS_LOG_FILE_NAME: string;
					public getInvalidatedClasses(): java.util.Set<string>;
					public getArgs(): android.databinding.tool.store.LayoutInfoInput.Args;
					public saveLog(myLog: android.databinding.tool.store.LayoutInfoLog): void;
					public getPackageName(): string;
					public getBaseBinderLog(): android.databinding.tool.store.LayoutInfoLog;
					public getUpdatedDeps(): java.util.Set<string>;
					public getDeps(): android.databinding.tool.store.GenClassInfoLog;
					public constructor(args: android.databinding.tool.store.LayoutInfoInput.Args);
					public getFilesToConsider(): java.util.Set<java.io.File>;
					public getExistingBindingClasses(): android.databinding.tool.store.GenClassInfoLog;
					public getUnchangedLog(): android.databinding.tool.store.LayoutInfoLog;
				}
				export module LayoutInfoInput {
					export class Args extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<android.databinding.tool.store.LayoutInfoInput.Args>;
						public component4(): java.util.List<java.io.File>;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public hashCode(): number;
						public getIncremental(): boolean;
						public getV1ArtifactsFolder(): java.io.File;
						public getRemoved(): java.util.List<java.io.File>;
						public getInfoFolder(): java.io.File;
						public component10(): boolean;
						public getLogFolder(): java.io.File;
						public constructor(outOfDate: java.util.List<any>, removed: java.util.List<any>, infoFolder: java.io.File, dependencyClassesFolders: java.util.List<any>, artifactFolder: java.io.File, logFolder: java.io.File, packageName: string, incremental: boolean, v1ArtifactsFolder: java.io.File, useAndroidX: boolean, enableViewBinding: boolean, enableDataBinding: boolean);
						public component6(): java.io.File;
						public component9(): java.io.File;
						public getEnableViewBinding(): boolean;
						public getDependencyClassesFolders(): java.util.List<java.io.File>;
						public copy(outOfDate: java.util.List<any>, removed: java.util.List<any>, infoFolder: java.io.File, dependencyClassesFolders: java.util.List<any>, artifactFolder: java.io.File, logFolder: java.io.File, packageName: string, incremental: boolean, v1ArtifactsFolder: java.io.File, useAndroidX: boolean, enableViewBinding: boolean, enableDataBinding: boolean): android.databinding.tool.store.LayoutInfoInput.Args;
						public component7(): string;
						public component11(): boolean;
						public component5(): java.io.File;
						public component12(): boolean;
						public getOutOfDate(): java.util.List<java.io.File>;
						public getEnableDataBinding(): boolean;
						public toString(): string;
						public getUseAndroidX(): boolean;
						public component3(): java.io.File;
						public getPackageName(): string;
						public getArtifactFolder(): java.io.File;
						public component8(): boolean;
						public component1(): java.util.List<java.io.File>;
						public component2(): java.util.List<java.io.File>;
					}
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.store.LayoutInfoInput.Companion>;
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module store {
				export class LayoutInfoLog extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.store.LayoutInfoLog>;
					public getDependencies(infoFileName: string): java.util.Collection<string>;
					public addDependency(fromLayout: string, toLayout: string): void;
					public static fromFile(file: java.io.File): android.databinding.tool.store.LayoutInfoLog;
					public constructor();
					public getClassInfoLog(): android.databinding.tool.store.GenClassInfoLog;
					public serialize(file: java.io.File): void;
					public getLayoutsThatDependOn(layouts: java.util.Set<string>): java.util.Set<string>;
					public addAll(other: android.databinding.tool.store.LayoutInfoLog): void;
				}
				export module LayoutInfoLog {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.store.LayoutInfoLog.Companion>;
						public fromFile(file: java.io.File): android.databinding.tool.store.LayoutInfoLog;
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module store {
				export class Location extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.store.Location>;
					public static NaN: number;
					public startLine: number;
					public startOffset: number;
					public endLine: number;
					public endOffset: number;
					public parentLocation: android.databinding.tool.store.Location;
					public constructor(startLine: number, startOffset: number, endLine: number, endOffset: number);
					public equals(obj: any): boolean;
					public toUserReadableString(): string;
					public constructor(other: android.databinding.tool.store.Location);
					public toAbsoluteLocation(): android.databinding.tool.store.Location;
					public equals(o: any): boolean;
					public createScope(): android.databinding.tool.processing.scopes.LocationScopeProvider;
					public toString(): string;
					public constructor();
					public constructor(context: android.databinding.internal.org.antlr.v4.runtime.ParserRuleContext);
					public isValid(): boolean;
					public contains(other: android.databinding.tool.store.Location): boolean;
					public static fromUserReadableString(str: string): android.databinding.tool.store.Location;
					public constructor(start: android.databinding.internal.org.antlr.v4.runtime.Token, end: android.databinding.internal.org.antlr.v4.runtime.Token);
					public setParentLocation(parentLocation: android.databinding.tool.store.Location): void;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module store {
				export class ResourceBundle extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<android.databinding.tool.store.ResourceBundle>;
					public getAppPackage(): string;
					public getAllLayoutBundles(): java.util.Map<string,java.util.List<android.databinding.tool.store.ResourceBundle.LayoutFileBundle>>;
					public getAllLayoutFileBundlesInSource(): java.util.Set<android.databinding.tool.store.ResourceBundle.LayoutFileBundle>;
					/** @deprecated */
					public getLayoutBundles(): java.util.Map<string,java.util.List<android.databinding.tool.store.ResourceBundle.LayoutFileBundle>>;
					public addDependencyLayouts(genClassInfoLog: android.databinding.tool.store.GenClassInfoLog): void;
					public validateAndRegisterErrors(): void;
					/** @deprecated */
					public getLayoutFileBundlesInSource(): java.util.Set<android.databinding.tool.store.ResourceBundle.LayoutFileBundle>;
					public addRemovedFile(file: java.io.File): void;
					public getRemovedFiles(): java.util.List<java.io.File>;
					public constructor(appPackage: string, useAndroidX: boolean);
					public static loadClassInfoFromFolder(folder: java.io.File): android.databinding.tool.store.GenClassInfoLog;
					public addLayoutBundle(bundle: android.databinding.tool.store.ResourceBundle.LayoutFileBundle, fromSource: boolean): void;
					public addFileWithNoDataBinding(file: java.io.File): void;
					public getFilesWithNoDataBinding(): java.util.List<java.io.File>;
					public static loadClassInfoFromFolders(folders: java.util.List<java.io.File>): android.databinding.tool.store.GenClassInfoLog;
				}
				export module ResourceBundle {
					export class BindingTargetBundle extends java.lang.Object implements java.io.Serializable, android.databinding.tool.processing.scopes.LocationScopeProvider {
						public static class: java.lang.Class<android.databinding.tool.store.ResourceBundle.BindingTargetBundle>;
						public mId: string;
						public mTag: string;
						public mOriginalTag: string;
						public mViewName: string;
						public mUsed: boolean;
						public mBindingBundleList: java.util.List<android.databinding.tool.store.ResourceBundle.BindingTargetBundle.BindingBundle>;
						public mIncludedLayout: string;
						public mLocation: android.databinding.tool.store.Location;
						public mViewBindingType: string;
						public isBinder(): boolean;
						public constructor();
						public setInterfaceType(interfaceType: string): void;
						public getViewName(): string;
						public setLocation(location: android.databinding.tool.store.Location): void;
						public isUsed(): boolean;
						public getModulePackage(): string;
						public setIncludedLayout(includedLayout: string): void;
						public getInterfaceType(): string;
						public provideScopeLocation(): java.util.List<android.databinding.tool.store.Location>;
						public addBinding(name: string, expr: string, isTwoWay: boolean, location: android.databinding.tool.store.Location, valueLocation: android.databinding.tool.store.Location): void;
						public getFullClassName(): string;
						public getQualifiedViewBindingType(): string;
						public getBindingBundleList(): java.util.List<android.databinding.tool.store.ResourceBundle.BindingTargetBundle.BindingBundle>;
						public getLocation(): android.databinding.tool.store.Location;
						public constructor(id: string, viewName: string, viewBindingType: string, used: boolean, tag: string, originalTag: string, location: android.databinding.tool.store.Location);
						public getViewBindingType(): string;
						public getTag(): string;
						public getId(): string;
						public getIncludedLayout(): string;
						public getOriginalTag(): string;
						public setInterfaceType(interfaceType: string, modulePackage: string): void;
					}
					export module BindingTargetBundle {
						export class BindingBundle extends java.lang.Object implements java.io.Serializable {
							public static class: java.lang.Class<android.databinding.tool.store.ResourceBundle.BindingTargetBundle.BindingBundle>;
							public constructor();
							public setValueLocation(valueLocation: android.databinding.tool.store.Location): void;
							public setName(name: string): void;
							public constructor(name: string, expr: string, isTwoWay: boolean, location: android.databinding.tool.store.Location, valueLocation: android.databinding.tool.store.Location);
							public setExpr(expr: string): void;
							public getName(): string;
							public setTwoWay(isTwoWay: boolean): void;
							public getValueLocation(): android.databinding.tool.store.Location;
							public getLocation(): android.databinding.tool.store.Location;
							public isTwoWay(): boolean;
							public getExpr(): string;
							public setLocation(location: android.databinding.tool.store.Location): void;
						}
					}
					export class IncludedLayout extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.store.ResourceBundle.IncludedLayout>;
						public layoutName: string;
						public modulePackage: string;
						public interfaceQName: string;
					}
					export module IncludedLayout {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<android.databinding.tool.store.ResourceBundle.IncludedLayout.Builder>;
							public build(): android.databinding.tool.store.ResourceBundle.IncludedLayout;
						}
					}
					export class LayoutFileBundle extends java.lang.Object implements java.io.Serializable, android.databinding.tool.processing.scopes.FileScopeProvider {
						public static class: java.lang.Class<android.databinding.tool.store.ResourceBundle.LayoutFileBundle>;
						public mFileName: string;
						public mModulePackage: string;
						public mFilePath: string;
						public mBindingClass: string;
						public mDirectory: string;
						public mHasVariations: boolean;
						public mVariables: java.util.List<android.databinding.tool.store.ResourceBundle.VariableDeclaration>;
						public mImports: java.util.List<android.databinding.tool.store.ResourceBundle.NameTypeLocation>;
						public mBindingTargetBundles: java.util.List<android.databinding.tool.store.ResourceBundle.BindingTargetBundle>;
						public getBindingClassPackage(): string;
						public equals(obj: any): boolean;
						public getRootNodeViewId(): string;
						public constructor(file: android.databinding.tool.util.RelativizableFile, fileName: string, directory: string, modulePackage: string, isMerge: boolean, isBindingData: boolean, rootViewType: string, rootViewId: string);
						public static fromXML(inputStream: java.io.InputStream): android.databinding.tool.store.ResourceBundle.LayoutFileBundle;
						public createTag(): string;
						public getConfigName(): string;
						public getFileName(): string;
						public hashCode(): number;
						public getRootNodeViewType(): string;
						public getBindingTargetById(key: string): android.databinding.tool.store.ResourceBundle.BindingTargetBundle;
						public getBindingClassName(): string;
						public getClassNameLocationProvider(): android.databinding.tool.processing.scopes.LocationScopeProvider;
						public addImport(alias: string, type: string, location: android.databinding.tool.store.Location): void;
						public isEmpty(): boolean;
						public addVariable(name: string, type: string, location: android.databinding.tool.store.Location, declared: boolean): void;
						public equals(o: any): boolean;
						public getVariables(): java.util.List<android.databinding.tool.store.ResourceBundle.VariableDeclaration>;
						public getBindingTargetBundles(): java.util.List<android.databinding.tool.store.ResourceBundle.BindingTargetBundle>;
						public constructor();
						public hasVariations(): boolean;
						public isMerge(): boolean;
						public provideScopeFilePath(): string;
						public getModulePackage(): string;
						public toString(): string;
						public createImplClassNameWithConfig(): string;
						public toXML(): string;
						public getFullBindingClass(): string;
						public inheritConfigurationFrom(other: android.databinding.tool.store.ResourceBundle.LayoutFileBundle): void;
						public getFilePath(): string;
						public createBindingTarget(id: string, viewName: string, viewBindingType: string, used: boolean, tag: string, originalTag: string, location: android.databinding.tool.store.Location): android.databinding.tool.store.ResourceBundle.BindingTargetBundle;
						public getDirectory(): string;
						public getImports(): java.util.List<android.databinding.tool.store.ResourceBundle.NameTypeLocation>;
						public isBindingData(): boolean;
						public setBindingClass(bindingClass: string, location: android.databinding.tool.store.Location): void;
					}
					export class MarshalledMapType extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.store.ResourceBundle.MarshalledMapType>;
						public entries: java.util.List<android.databinding.tool.store.ResourceBundle.NameTypeLocation>;
						public constructor();
					}
					export class NameTypeLocation extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.store.ResourceBundle.NameTypeLocation>;
						public type: string;
						public name: string;
						public location: android.databinding.tool.store.Location;
						public constructor();
						public constructor(name: string, type: string, location: android.databinding.tool.store.Location);
						public equals(obj: any): boolean;
						public hashCode(): number;
						public static contains(list: java.util.List<any>, name: string): boolean;
						public equals(o: any): boolean;
						public toString(): string;
					}
					export class ValidateAndFilterCallback extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.store.ResourceBundle.ValidateAndFilterCallback>;
						/**
						 * Constructs a new instance of the android.databinding.tool.store.ResourceBundle$ValidateAndFilterCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(param0: android.databinding.tool.store.ResourceBundle.LayoutFileBundle): java.util.List<any>;
						});
						public constructor();
						public get(param0: android.databinding.tool.store.ResourceBundle.LayoutFileBundle): java.util.List<any>;
					}
					export class VariableDeclaration extends android.databinding.tool.store.ResourceBundle.NameTypeLocation {
						public static class: java.lang.Class<android.databinding.tool.store.ResourceBundle.VariableDeclaration>;
						public declared: boolean;
						public constructor();
						public constructor(name: string, type: string, location: android.databinding.tool.store.Location);
						public constructor(name: string, type: string, location: android.databinding.tool.store.Location, declared: boolean);
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module store {
				export class V1CompatLayoutInfoLoader extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.store.V1CompatLayoutInfoLoader>;
					public constructor();
					public load(folder: java.io.File): android.databinding.tool.store.GenClassInfoLog;
				}
				export module V1CompatLayoutInfoLoader {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.store.V1CompatLayoutInfoLoader.Companion>;
					}
					export class CompatObjectInputStream extends java.io.ObjectInputStream {
						public static class: java.lang.Class<android.databinding.tool.store.V1CompatLayoutInfoLoader.CompatObjectInputStream>;
						public read(): number;
						public skip(param0: number): number;
						public constructor();
						public read(buf: number[], off: number, len: number): number;
						public close(): void;
						public read(b: number[]): number;
						public readClassDescriptor(): java.io.ObjectStreamClass;
						public read(param0: number[]): number;
						public skip(n: number): number;
						public available(): number;
						public constructor(in: java.io.InputStream);
						public read(param0: number[], param1: number, param2: number): number;
						public readObject(): any;
					}
					export class IntermediateV1Compat extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<android.databinding.tool.store.V1CompatLayoutInfoLoader.IntermediateV1Compat>;
						public mLayoutInfoMap: java.util.Map<string,string>;
						public constructor();
					}
					export class IntermediateV2Compat extends android.databinding.tool.store.V1CompatLayoutInfoLoader.IntermediateV1Compat implements java.io.Serializable {
						public static class: java.lang.Class<android.databinding.tool.store.V1CompatLayoutInfoLoader.IntermediateV2Compat>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module util {
				export class FileUtil extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.util.FileUtil>;
					public static INSTANCE: android.databinding.tool.util.FileUtil;
					public static listAndSortFiles(directory: java.io.File, fileFilter: org.apache.commons.io.filefilter.IOFileFilter, dirFilter: org.apache.commons.io.filefilter.IOFileFilter): java.util.List<java.io.File>;
					public static listAndSortFiles(directory: java.io.File, extensions: string[], recursive: boolean): java.util.List<java.io.File>;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module util {
				export class L extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.util.L>;
					public static setDebugLog(enabled: boolean): void;
					public static isDebugEnabled(): boolean;
					public static w(msg: string, ...args: any[]): void;
					public static e(msg: string, ...args: any[]): void;
					public static e(t: java.lang.Throwable, msg: string, ...args: any[]): void;
					public static e(element: javax.lang.model.element.Element, msg: string, ...args: any[]): void;
					public static d(msg: string, ...args: any[]): void;
					public static d(t: java.lang.Throwable, msg: string, ...args: any[]): void;
					public constructor();
					public static w(element: javax.lang.model.element.Element, msg: string, ...args: any[]): void;
					public static setClient(client: android.databinding.tool.util.L.Client): void;
					public static d(element: javax.lang.model.element.Element, msg: string, ...args: any[]): void;
					public static w(t: java.lang.Throwable, msg: string, ...args: any[]): void;
				}
				export module L {
					export class Client extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.util.L.Client>;
						/**
						 * Constructs a new instance of the android.databinding.tool.util.L$Client interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							printMessage(param0: javax.tools.Diagnostic.Kind, param1: string, param2: javax.lang.model.element.Element): void;
						});
						public constructor();
						public printMessage(param0: javax.tools.Diagnostic.Kind, param1: string, param2: javax.lang.model.element.Element): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module util {
				export class LoggedErrorException extends java.lang.RuntimeException {
					public static class: java.lang.Class<android.databinding.tool.util.LoggedErrorException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module util {
				export class ParserHelper extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.util.ParserHelper>;
					public constructor();
					public static toClassName(name: string): string;
					public static stripExtension(name: string): string;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module util {
				export class Preconditions extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.util.Preconditions>;
					public constructor();
					public static checkNull(value: any, error: string, ...args: any[]): void;
					public static checkNotNull(value: any, error: string, ...args: any[]): void;
					public static check(value: boolean, error: string, ...args: any[]): void;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module util {
				export class RelativizableFile extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.util.RelativizableFile>;
					public static fromRelativeFile(baseDir: java.io.File, relativeFile: java.io.File): android.databinding.tool.util.RelativizableFile;
					public getBaseDir(): java.io.File;
					public getRelativeFile(): java.io.File;
					public getAbsoluteFile(): java.io.File;
					public static fromAbsoluteFile(absoluteFile: java.io.File, baseDir: java.io.File): android.databinding.tool.util.RelativizableFile;
				}
				export module RelativizableFile {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.util.RelativizableFile.Companion>;
						public fromAbsoluteFile(absoluteFile: java.io.File, baseDir: java.io.File): android.databinding.tool.util.RelativizableFile;
						public fromRelativeFile(baseDir: java.io.File, relativeFile: java.io.File): android.databinding.tool.util.RelativizableFile;
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module util {
				export class SourceCodeEscapers extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.util.SourceCodeEscapers>;
					public static javaStringUnicodeEscaper(): com.google.common.escape.Escaper;
					public static javaCharEscaper(): com.google.common.escape.Escaper;
					public static javaStringEscaperWithOctal(): com.google.common.escape.Escaper;
					public static javaCharEscaperWithOctal(): com.google.common.escape.Escaper;
				}
				export module SourceCodeEscapers {
					export class JavaCharEscaper {
						public static class: java.lang.Class<android.databinding.tool.util.SourceCodeEscapers.JavaCharEscaper>;
						public escapeUnsafe(c: string): string[];
					}
					export class JavaCharEscaperWithOctal {
						public static class: java.lang.Class<android.databinding.tool.util.SourceCodeEscapers.JavaCharEscaperWithOctal>;
						public escapeUnsafe(c: string): string[];
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module util {
				export class StringUtils extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.util.StringUtils>;
					public static LINE_SEPARATOR: string;
					public static capitalize(string: string): string;
					public static isNotBlank(string: string): boolean;
					public static unescapeXml(escaped: string): string;
					public static join(strings: string[], sep: string): string;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module util {
				export class XmlEditor extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.util.XmlEditor>;
					public static attributes(elementContext: android.databinding.parser.XMLParser.ElementContext): java.util.List<any>;
					public static elements(context: android.databinding.parser.XMLParser.ElementContext): java.util.List<any>;
					public static hasExpressionAttributes(context: android.databinding.parser.XMLParser.ElementContext): boolean;
					public static expressionAttributes(elementContext: android.databinding.parser.XMLParser.ElementContext): java.util.List<any>;
					public constructor();
					public static strip(f: java.io.File, newTag: string, encoding: string): string;
					public static nodeName(elementContext: android.databinding.parser.XMLParser.ElementContext): string;
				}
				export module XmlEditor {
					export class Position extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.util.XmlEditor.Position>;
						public constructor(line: number, charIndex: number);
					}
					export class PositionPair extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.util.XmlEditor.PositionPair>;
					}
					export class TagAndContext extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.util.XmlEditor.TagAndContext>;
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module writer {
				export class BaseLayoutBinderWriter extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.writer.BaseLayoutBinderWriter>;
					public getLibTypes(): android.databinding.tool.LibTypes;
					public constructor(model: android.databinding.tool.writer.BaseLayoutModel, libTypes: android.databinding.tool.LibTypes);
					public generateClassInfo(): android.databinding.tool.store.GenClassInfoLog.GenClass;
					public write(): com.squareup.javapoet.JavaFile;
					public getModel(): android.databinding.tool.writer.BaseLayoutModel;
				}
				export module BaseLayoutBinderWriter {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.writer.BaseLayoutBinderWriter.Companion>;
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module writer {
				export class BaseLayoutModel extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.writer.BaseLayoutModel>;
					public fieldName(variable: android.databinding.tool.store.ResourceBundle.VariableDeclaration): string;
					public getVariations(): java.util.List<android.databinding.tool.store.ResourceBundle.LayoutFileBundle>;
					public getBindingClassPackage(): string;
					public getBaseFileName(): string;
					public getModulePackage(): string;
					public generateImplInfo(): java.util.Set<android.databinding.tool.store.GenClassInfoLog.GenClassImpl>;
					public constructor(variations: java.util.List<any>, getRPackage: kotlin.jvm.functions.Function2<any,any,string>);
					public getVariables(): java.util.List<android.databinding.tool.store.ResourceBundle.VariableDeclaration>;
					public setterName(variable: android.databinding.tool.store.ResourceBundle.VariableDeclaration): string;
					public getImportsByAlias(): java.util.Map<string,string>;
					public fieldName(target: android.databinding.tool.store.ResourceBundle.BindingTargetBundle): string;
					public getBindingClassName(): string;
					public getterName(variable: android.databinding.tool.store.ResourceBundle.VariableDeclaration): string;
					public getGetRPackage(): kotlin.jvm.functions.Function2<string,string,string>;
					public layoutConfigurationMembership(target: android.databinding.tool.store.ResourceBundle.BindingTargetBundle): kotlin.Pair<java.util.List<string>,java.util.List<string>>;
					public getSortedTargets(): java.util.List<android.databinding.tool.store.ResourceBundle.BindingTargetBundle>;
				}
				export module BaseLayoutModel {
					export class JavaScope {
						public static class: java.lang.Class<android.databinding.tool.writer.BaseLayoutModel.JavaScope>;
						public static FIELD: android.databinding.tool.writer.BaseLayoutModel.JavaScope;
						public static GETTER: android.databinding.tool.writer.BaseLayoutModel.JavaScope;
						public static SETTER: android.databinding.tool.writer.BaseLayoutModel.JavaScope;
						public static values(): android.databinding.tool.writer.BaseLayoutModel.JavaScope[];
						public static valueOf(value: string): android.databinding.tool.writer.BaseLayoutModel.JavaScope;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module writer {
				export class JavaFileGenerator extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.writer.JavaFileGenerator>;
					public constructor(binder: android.databinding.tool.writer.ViewBinder, useLegacyAnnotations: boolean);
					public create(): com.squareup.javapoet.JavaFile;
					public getViewBindingPackage(): string;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module writer {
				export abstract class JavaFileWriter extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.writer.JavaFileWriter>;
					public constructor();
					public deleteFile(param0: string): void;
					public writeToFile(param0: string, param1: string): void;
					public writeToFile(exactPath: java.io.File, contents: string): void;
					public writeToFile(javafile: com.squareup.javapoet.JavaFile): void;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module writer {
				export class ResourceReference extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.writer.ResourceReference>;
					public equals(obj: any): boolean;
					public component1(): com.squareup.javapoet.ClassName;
					public constructor(rClassName: com.squareup.javapoet.ClassName, type: string, name: string);
					public component2(): string;
					public getRClassName(): com.squareup.javapoet.ClassName;
					public copy(rClassName: com.squareup.javapoet.ClassName, type: string, name: string): android.databinding.tool.writer.ResourceReference;
					public equals(other: any): boolean;
					public component3(): string;
					public asCode(): com.squareup.javapoet.CodeBlock;
					public toString(): string;
					public getName(): string;
					public getType(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module writer {
				export class ViewBinder extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.writer.ViewBinder>;
					public equals(obj: any): boolean;
					public component1(): com.squareup.javapoet.ClassName;
					public equals(other: any): boolean;
					public constructor(generatedTypeName: com.squareup.javapoet.ClassName, layoutReference: android.databinding.tool.writer.ResourceReference, bindings: java.util.List<android.databinding.tool.writer.ViewBinding>, rootNode: android.databinding.tool.writer.ViewBinder.RootNode);
					public getLayoutReference(): android.databinding.tool.writer.ResourceReference;
					public toString(): string;
					public getBindings(): java.util.List<android.databinding.tool.writer.ViewBinding>;
					public component2(): android.databinding.tool.writer.ResourceReference;
					public copy(generatedTypeName: com.squareup.javapoet.ClassName, layoutReference: android.databinding.tool.writer.ResourceReference, bindings: java.util.List<android.databinding.tool.writer.ViewBinding>, rootNode: android.databinding.tool.writer.ViewBinder.RootNode): android.databinding.tool.writer.ViewBinder;
					public getRootNode(): android.databinding.tool.writer.ViewBinder.RootNode;
					public component3(): java.util.List<android.databinding.tool.writer.ViewBinding>;
					public getGeneratedTypeName(): com.squareup.javapoet.ClassName;
					public component4(): android.databinding.tool.writer.ViewBinder.RootNode;
					public hashCode(): number;
				}
				export module ViewBinder {
					export abstract class RootNode extends java.lang.Object {
						public static class: java.lang.Class<android.databinding.tool.writer.ViewBinder.RootNode>;
					}
					export module RootNode {
						export class Binding extends android.databinding.tool.writer.ViewBinder.RootNode {
							public static class: java.lang.Class<android.databinding.tool.writer.ViewBinder.RootNode.Binding>;
							public hashCode(): number;
							public getBinding(): android.databinding.tool.writer.ViewBinding;
							public equals(other: any): boolean;
							public copy(binding: android.databinding.tool.writer.ViewBinding): android.databinding.tool.writer.ViewBinder.RootNode.Binding;
							public equals(obj: any): boolean;
							public toString(): string;
							public constructor(binding: android.databinding.tool.writer.ViewBinding);
							public component1(): android.databinding.tool.writer.ViewBinding;
						}
						export class Merge extends android.databinding.tool.writer.ViewBinder.RootNode {
							public static class: java.lang.Class<android.databinding.tool.writer.ViewBinder.RootNode.Merge>;
							public static INSTANCE: android.databinding.tool.writer.ViewBinder.RootNode.Merge;
						}
						export class View extends android.databinding.tool.writer.ViewBinder.RootNode {
							public static class: java.lang.Class<android.databinding.tool.writer.ViewBinder.RootNode.View>;
							public copy(type: com.squareup.javapoet.ClassName): android.databinding.tool.writer.ViewBinder.RootNode.View;
							public hashCode(): number;
							public equals(other: any): boolean;
							public equals(obj: any): boolean;
							public toString(): string;
							public component1(): com.squareup.javapoet.ClassName;
							public constructor(type: com.squareup.javapoet.ClassName);
							public getType(): com.squareup.javapoet.ClassName;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module databinding {
		export module tool {
			export module writer {
				export class ViewBinding extends java.lang.Object {
					public static class: java.lang.Class<android.databinding.tool.writer.ViewBinding>;
					public equals(obj: any): boolean;
					public copy(name: string, type: com.squareup.javapoet.ClassName, form: android.databinding.tool.writer.ViewBinding.Form, id: android.databinding.tool.writer.ResourceReference, presentConfigurations: java.util.List<string>, absentConfigurations: java.util.List<string>): android.databinding.tool.writer.ViewBinding;
					public component5(): java.util.List<string>;
					public equals(other: any): boolean;
					public component2(): com.squareup.javapoet.ClassName;
					public constructor(name: string, type: com.squareup.javapoet.ClassName, form: android.databinding.tool.writer.ViewBinding.Form, id: android.databinding.tool.writer.ResourceReference, presentConfigurations: java.util.List<string>, absentConfigurations: java.util.List<string>);
					public getType(): com.squareup.javapoet.ClassName;
					public isRequired(): boolean;
					public getId(): android.databinding.tool.writer.ResourceReference;
					public component4(): android.databinding.tool.writer.ResourceReference;
					public toString(): string;
					public getForm(): android.databinding.tool.writer.ViewBinding.Form;
					public component1(): string;
					public getName(): string;
					public component6(): java.util.List<string>;
					public component3(): android.databinding.tool.writer.ViewBinding.Form;
					public hashCode(): number;
					public getPresentConfigurations(): java.util.List<string>;
					public getAbsentConfigurations(): java.util.List<string>;
				}
				export module ViewBinding {
					export class Form {
						public static class: java.lang.Class<android.databinding.tool.writer.ViewBinding.Form>;
						public static View: android.databinding.tool.writer.ViewBinding.Form;
						public static Binder: android.databinding.tool.writer.ViewBinding.Form;
						public static valueOf(value: string): android.databinding.tool.writer.ViewBinding.Form;
						public static values(): android.databinding.tool.writer.ViewBinding.Form[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

//Generics information:
//android.databinding.internal.org.antlr.v4.runtime.Recognizer:2
//android.databinding.internal.org.antlr.v4.runtime.TokenFactory:1
//android.databinding.internal.org.antlr.v4.runtime.UnbufferedTokenStream:1
//android.databinding.internal.org.antlr.v4.runtime.misc.AbstractEqualityComparator:1
//android.databinding.internal.org.antlr.v4.runtime.misc.Array2DHashSet:1
//android.databinding.internal.org.antlr.v4.runtime.misc.DoubleKeyMap:3
//android.databinding.internal.org.antlr.v4.runtime.misc.EqualityComparator:1
//android.databinding.internal.org.antlr.v4.runtime.misc.FlexibleHashMap:2
//android.databinding.internal.org.antlr.v4.runtime.misc.FlexibleHashMap.Entry:2
//android.databinding.internal.org.antlr.v4.runtime.misc.MultiMap:2
//android.databinding.internal.org.antlr.v4.runtime.misc.OrderedHashSet:1
//android.databinding.internal.org.antlr.v4.runtime.misc.Pair:2
//android.databinding.internal.org.antlr.v4.runtime.misc.Predicate:1
//android.databinding.internal.org.antlr.v4.runtime.misc.Triple:3
//android.databinding.internal.org.antlr.v4.runtime.tree.AbstractParseTreeVisitor:1
//android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeProperty:1
//android.databinding.internal.org.antlr.v4.runtime.tree.ParseTreeVisitor:1
//android.databinding.parser.BindingExpressionBaseVisitor:1
//android.databinding.parser.BindingExpressionVisitor:1
//android.databinding.parser.XMLParserBaseVisitor:1
//android.databinding.parser.XMLParserVisitor:1
//android.databinding.tool.ext.LazyExt:2
//android.databinding.tool.ext.VersionedLazyExt:2
//android.databinding.tool.ext.VersionedResult:1

