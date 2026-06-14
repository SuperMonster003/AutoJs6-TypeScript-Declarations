/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module io {
	export module noties {
		export module prism4j {
			export abstract class AbsVisitor extends java.lang.Object implements io.noties.prism4j.Prism4j.Visitor {
				public static class: java.lang.Class<io.noties.prism4j.AbsVisitor>;
				public visit(nodes: java.util.List<any>): void;
				public visitSyntax(param0: io.noties.prism4j.Prism4j.Syntax): void;
				public visitText(param0: io.noties.prism4j.Prism4j.Text): void;
				public constructor();
				public visit(param0: java.util.List<any>): void;
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export abstract class ArrayUtils extends java.lang.Object {
				public static class: java.lang.Class<io.noties.prism4j.ArrayUtils>;
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export abstract class Cloner extends java.lang.Object {
				public static class: java.lang.Class<io.noties.prism4j.Cloner>;
			}
			export module Cloner {
				export class Impl extends io.noties.prism4j.Cloner {
					public static class: java.lang.Class<io.noties.prism4j.Cloner.Impl>;
				}
				export module Impl {
					export class Context extends java.lang.Object {
						public static class: java.lang.Class<io.noties.prism4j.Cloner.Impl.Context>;
						/**
						 * Constructs a new instance of the io.noties.prism4j.Cloner$Impl$Context interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							grammar(param0: io.noties.prism4j.Prism4j.Grammar): io.noties.prism4j.Prism4j.Grammar;
							token(param0: io.noties.prism4j.Prism4j.Token): io.noties.prism4j.Prism4j.Token;
							pattern(param0: io.noties.prism4j.Prism4j.Pattern): io.noties.prism4j.Prism4j.Pattern;
							save(param0: io.noties.prism4j.Prism4j.Grammar, param1: io.noties.prism4j.Prism4j.Grammar): void;
							save(param0: io.noties.prism4j.Prism4j.Token, param1: io.noties.prism4j.Prism4j.Token): void;
							save(param0: io.noties.prism4j.Prism4j.Pattern, param1: io.noties.prism4j.Prism4j.Pattern): void;
						});
						public constructor();
						public save(param0: io.noties.prism4j.Prism4j.Grammar, param1: io.noties.prism4j.Prism4j.Grammar): void;
						public grammar(param0: io.noties.prism4j.Prism4j.Grammar): io.noties.prism4j.Prism4j.Grammar;
						public save(param0: io.noties.prism4j.Prism4j.Token, param1: io.noties.prism4j.Prism4j.Token): void;
						public save(param0: io.noties.prism4j.Prism4j.Pattern, param1: io.noties.prism4j.Prism4j.Pattern): void;
						public token(param0: io.noties.prism4j.Prism4j.Token): io.noties.prism4j.Prism4j.Token;
						public pattern(param0: io.noties.prism4j.Prism4j.Pattern): io.noties.prism4j.Prism4j.Pattern;
					}
					export class ContextImpl extends java.lang.Object implements io.noties.prism4j.Cloner.Impl.Context {
						public static class: java.lang.Class<io.noties.prism4j.Cloner.Impl.ContextImpl>;
						public save(param0: io.noties.prism4j.Prism4j.Grammar, param1: io.noties.prism4j.Prism4j.Grammar): void;
						public grammar(param0: io.noties.prism4j.Prism4j.Grammar): io.noties.prism4j.Prism4j.Grammar;
						public token(origin: io.noties.prism4j.Prism4j.Token): io.noties.prism4j.Prism4j.Token;
						public save(origin: io.noties.prism4j.Prism4j.Pattern, clone: io.noties.prism4j.Prism4j.Pattern): void;
						public pattern(origin: io.noties.prism4j.Prism4j.Pattern): io.noties.prism4j.Prism4j.Pattern;
						public save(origin: io.noties.prism4j.Prism4j.Grammar, clone: io.noties.prism4j.Prism4j.Grammar): void;
						public grammar(origin: io.noties.prism4j.Prism4j.Grammar): io.noties.prism4j.Prism4j.Grammar;
						public save(origin: io.noties.prism4j.Prism4j.Token, clone: io.noties.prism4j.Prism4j.Token): void;
						public save(param0: io.noties.prism4j.Prism4j.Token, param1: io.noties.prism4j.Prism4j.Token): void;
						public save(param0: io.noties.prism4j.Prism4j.Pattern, param1: io.noties.prism4j.Prism4j.Pattern): void;
						public token(param0: io.noties.prism4j.Prism4j.Token): io.noties.prism4j.Prism4j.Token;
						public pattern(param0: io.noties.prism4j.Prism4j.Pattern): io.noties.prism4j.Prism4j.Pattern;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export class GrammarImpl extends java.lang.Object implements io.noties.prism4j.Prism4j.Grammar {
				public static class: java.lang.Class<io.noties.prism4j.GrammarImpl>;
				public name(): string;
				public tokens(): java.util.List<io.noties.prism4j.Prism4j.Token>;
				public toString(): string;
				public constructor(name: string, tokens: java.util.List<io.noties.prism4j.Prism4j.Token>);
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export class GrammarLocator extends java.lang.Object {
				public static class: java.lang.Class<io.noties.prism4j.GrammarLocator>;
				/**
				 * Constructs a new instance of the io.noties.prism4j.GrammarLocator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					grammar(param0: io.noties.prism4j.Prism4j, param1: string): io.noties.prism4j.Prism4j.Grammar;
					languages(): java.util.Set<string>;
				});
				public constructor();
				public grammar(param0: io.noties.prism4j.Prism4j, param1: string): io.noties.prism4j.Prism4j.Grammar;
				public languages(): java.util.Set<string>;
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export abstract class GrammarUtils extends java.lang.Object {
				public static class: java.lang.Class<io.noties.prism4j.GrammarUtils>;
				public static extend(grammar: io.noties.prism4j.Prism4j.Grammar, name: string, filter: io.noties.prism4j.GrammarUtils.TokenFilter, ...tokens: io.noties.prism4j.Prism4j.Token[]): io.noties.prism4j.Prism4j.Grammar;
				public static findFirstInsideGrammar(token: io.noties.prism4j.Prism4j.Token): io.noties.prism4j.Prism4j.Grammar;
				public static findToken(grammar: io.noties.prism4j.Prism4j.Grammar, path: string): io.noties.prism4j.Prism4j.Token;
				public static clone(pattern: io.noties.prism4j.Prism4j.Pattern): io.noties.prism4j.Prism4j.Pattern;
				public static extend(grammar: io.noties.prism4j.Prism4j.Grammar, name: string, ...tokens: io.noties.prism4j.Prism4j.Token[]): io.noties.prism4j.Prism4j.Grammar;
				public static require(prism4j: io.noties.prism4j.Prism4j, name: string): io.noties.prism4j.Prism4j.Grammar;
				public clone(): any;
				public static insertBeforeToken(grammar: io.noties.prism4j.Prism4j.Grammar, path: string, ...tokens: io.noties.prism4j.Prism4j.Token[]): void;
				public static clone(grammar: io.noties.prism4j.Prism4j.Grammar): io.noties.prism4j.Prism4j.Grammar;
				public static clone(token: io.noties.prism4j.Prism4j.Token): io.noties.prism4j.Prism4j.Token;
			}
			export module GrammarUtils {
				export class TokenFilter extends java.lang.Object {
					public static class: java.lang.Class<io.noties.prism4j.GrammarUtils.TokenFilter>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.GrammarUtils$TokenFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						test(param0: io.noties.prism4j.Prism4j.Token): boolean;
					});
					public constructor();
					public test(param0: io.noties.prism4j.Prism4j.Token): boolean;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export class PatternImpl extends java.lang.Object implements io.noties.prism4j.Prism4j.Pattern {
				public static class: java.lang.Class<io.noties.prism4j.PatternImpl>;
				public regex(): java.util.regex.Pattern;
				public constructor(regex: java.util.regex.Pattern, lookbehind: boolean, greedy: boolean, alias: string, inside: io.noties.prism4j.Prism4j.Grammar);
				public lookbehind(): boolean;
				public alias(): string;
				public inside(): io.noties.prism4j.Prism4j.Grammar;
				public toString(): string;
				public greedy(): boolean;
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export class Prism4j extends java.lang.Object {
				public static class: java.lang.Class<io.noties.prism4j.Prism4j>;
				public static pattern(regex: java.util.regex.Pattern, lookbehind: boolean, greedy: boolean, alias: string): io.noties.prism4j.Prism4j.Pattern;
				public static pattern(regex: java.util.regex.Pattern, lookbehind: boolean, greedy: boolean, alias: string, inside: io.noties.prism4j.Prism4j.Grammar): io.noties.prism4j.Prism4j.Pattern;
				public constructor(grammarLocator: io.noties.prism4j.GrammarLocator);
				public grammar(name: string): io.noties.prism4j.Prism4j.Grammar;
				public static pattern(regex: java.util.regex.Pattern): io.noties.prism4j.Prism4j.Pattern;
				public static grammar(name: string, tokens: java.util.List<io.noties.prism4j.Prism4j.Token>): io.noties.prism4j.Prism4j.Grammar;
				public static pattern(regex: java.util.regex.Pattern, lookbehind: boolean, greedy: boolean): io.noties.prism4j.Prism4j.Pattern;
				public static token(name: string, patterns: java.util.List<io.noties.prism4j.Prism4j.Pattern>): io.noties.prism4j.Prism4j.Token;
				public static pattern(regex: java.util.regex.Pattern, lookbehind: boolean): io.noties.prism4j.Prism4j.Pattern;
				public tokenize(text: string, grammar: io.noties.prism4j.Prism4j.Grammar): java.util.List<io.noties.prism4j.Prism4j.Node>;
				public static grammar(name: string, ...tokens: io.noties.prism4j.Prism4j.Token[]): io.noties.prism4j.Prism4j.Grammar;
				public static token(name: string, ...patterns: io.noties.prism4j.Prism4j.Pattern[]): io.noties.prism4j.Prism4j.Token;
			}
			export module Prism4j {
				export class Grammar extends java.lang.Object {
					public static class: java.lang.Class<io.noties.prism4j.Prism4j.Grammar>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.Prism4j$Grammar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						name(): string;
						tokens(): java.util.List<io.noties.prism4j.Prism4j.Token>;
					});
					public constructor();
					public name(): string;
					public tokens(): java.util.List<io.noties.prism4j.Prism4j.Token>;
				}
				export class Node extends java.lang.Object {
					public static class: java.lang.Class<io.noties.prism4j.Prism4j.Node>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.Prism4j$Node interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						textLength(): number;
						isSyntax(): boolean;
					});
					public constructor();
					public isSyntax(): boolean;
					public textLength(): number;
				}
				export class Pattern extends java.lang.Object {
					public static class: java.lang.Class<io.noties.prism4j.Prism4j.Pattern>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.Prism4j$Pattern interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						regex(): java.util.regex.Pattern;
						lookbehind(): boolean;
						greedy(): boolean;
						alias(): string;
						inside(): io.noties.prism4j.Prism4j.Grammar;
					});
					public constructor();
					public regex(): java.util.regex.Pattern;
					public alias(): string;
					public inside(): io.noties.prism4j.Prism4j.Grammar;
					public lookbehind(): boolean;
					public greedy(): boolean;
				}
				export class Syntax extends java.lang.Object implements io.noties.prism4j.Prism4j.Node {
					public static class: java.lang.Class<io.noties.prism4j.Prism4j.Syntax>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.Prism4j$Syntax interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						type(): string;
						children(): java.util.List<any>;
						alias(): string;
						matchedString(): string;
						greedy(): boolean;
						tokenized(): boolean;
						textLength(): number;
						isSyntax(): boolean;
					});
					public constructor();
					public matchedString(): string;
					public children(): java.util.List<any>;
					public alias(): string;
					public greedy(): boolean;
					public isSyntax(): boolean;
					public type(): string;
					public tokenized(): boolean;
					public textLength(): number;
				}
				export class Text extends java.lang.Object implements io.noties.prism4j.Prism4j.Node {
					public static class: java.lang.Class<io.noties.prism4j.Prism4j.Text>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.Prism4j$Text interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						literal(): string;
						textLength(): number;
						isSyntax(): boolean;
					});
					public constructor();
					public isSyntax(): boolean;
					public literal(): string;
					public textLength(): number;
				}
				export class Token extends java.lang.Object {
					public static class: java.lang.Class<io.noties.prism4j.Prism4j.Token>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.Prism4j$Token interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						name(): string;
						patterns(): java.util.List<io.noties.prism4j.Prism4j.Pattern>;
					});
					public constructor();
					public patterns(): java.util.List<io.noties.prism4j.Prism4j.Pattern>;
					public name(): string;
				}
				export class Visitor extends java.lang.Object {
					public static class: java.lang.Class<io.noties.prism4j.Prism4j.Visitor>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.Prism4j$Visitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						visit(param0: java.util.List<any>): void;
					});
					public constructor();
					public visit(param0: java.util.List<any>): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export class SyntaxImpl extends java.lang.Object implements io.noties.prism4j.Prism4j.Syntax {
				public static class: java.lang.Class<io.noties.prism4j.SyntaxImpl>;
				public constructor(type: string, children: java.util.List<any>, alias: string, matchedString: string, greedy: boolean, tokenized: boolean);
				public isSyntax(): boolean;
				public alias(): string;
				public children(): java.util.List<any>;
				public matchedString(): string;
				public type(): string;
				public tokenized(): boolean;
				public toString(): string;
				public textLength(): number;
				public greedy(): boolean;
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export class TextImpl extends java.lang.Object implements io.noties.prism4j.Prism4j.Text {
				public static class: java.lang.Class<io.noties.prism4j.TextImpl>;
				public isSyntax(): boolean;
				public constructor(literal: string);
				public literal(): string;
				public toString(): string;
				public textLength(): number;
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export abstract class ToString extends java.lang.Object {
				public static class: java.lang.Class<io.noties.prism4j.ToString>;
			}
			export module ToString {
				export class Cache extends java.lang.Object {
					public static class: java.lang.Class<io.noties.prism4j.ToString.Cache>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.ToString$Cache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						visited(param0: any): boolean;
						markVisited(param0: any): void;
					});
					public constructor();
					public visited(param0: any): boolean;
					public markVisited(param0: any): void;
				}
				export class CacheImpl extends java.lang.Object implements io.noties.prism4j.ToString.Cache {
					public static class: java.lang.Class<io.noties.prism4j.ToString.CacheImpl>;
					public visited(o: any): boolean;
					public markVisited(o: any): void;
					public visited(param0: any): boolean;
					public markVisited(param0: any): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export class TokenImpl extends java.lang.Object implements io.noties.prism4j.Prism4j.Token {
				public static class: java.lang.Class<io.noties.prism4j.TokenImpl>;
				public name(): string;
				public constructor(name: string, patterns: java.util.List<io.noties.prism4j.Prism4j.Pattern>);
				public toString(): string;
				public patterns(): java.util.List<io.noties.prism4j.Prism4j.Pattern>;
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export module annotations {
				export class Aliases extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<io.noties.prism4j.annotations.Aliases>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.annotations.Aliases interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string[];
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
					public value(): string[];
					public hashCode(): number;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export module annotations {
				export class Extend extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<io.noties.prism4j.annotations.Extend>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.annotations.Extend interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
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
					public value(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export module annotations {
				export class Modify extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<io.noties.prism4j.annotations.Modify>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.annotations.Modify interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string[];
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
					public value(): string[];
					public hashCode(): number;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export module annotations {
				export class PrismBundle extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<io.noties.prism4j.annotations.PrismBundle>;
					/**
					 * Constructs a new instance of the io.noties.prism4j.annotations.PrismBundle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						include(): string[];
						grammarLocatorClassName(): string;
						includeAll(): boolean;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public include(): string[];
					public equals(param0: any): boolean;
					public grammarLocatorClassName(): string;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public includeAll(): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

//Generics information:

