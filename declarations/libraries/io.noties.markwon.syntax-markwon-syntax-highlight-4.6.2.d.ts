/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module io {
	export module noties {
		export module markwon {
			export module syntax {
				export class Prism4jSyntaxHighlight extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.syntax.Prism4jSyntaxHighlight>;
					public static create(prism4j: io.noties.prism4j.Prism4j, theme: io.noties.markwon.syntax.Prism4jTheme): io.noties.markwon.syntax.Prism4jSyntaxHighlight;
					public constructor(prism4j: io.noties.prism4j.Prism4j, theme: io.noties.markwon.syntax.Prism4jTheme, fallback: string);
					public theme(): io.noties.markwon.syntax.Prism4jTheme;
					public highlightNoLanguageInfo(code: string): string;
					public prism4j(): io.noties.prism4j.Prism4j;
					public highlight(language: string, grammar: io.noties.prism4j.Prism4j.Grammar, code: string): string;
					public highlightWithLanguageInfo(info: string, code: string): string;
					public static create(prism4j: io.noties.prism4j.Prism4j, theme: io.noties.markwon.syntax.Prism4jTheme, fallback: string): io.noties.markwon.syntax.Prism4jSyntaxHighlight;
					public highlight(info: string, code: string): string;
					public fallback(): string;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module syntax {
				export class Prism4jSyntaxVisitor {
					public static class: java.lang.Class<io.noties.markwon.syntax.Prism4jSyntaxVisitor>;
					public visitText(text: io.noties.prism4j.Prism4j.Text): void;
					public visitSyntax(syntax: io.noties.prism4j.Prism4j.Syntax): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module syntax {
				export class Prism4jTheme extends java.lang.Object {
					public static class: java.lang.Class<io.noties.markwon.syntax.Prism4jTheme>;
					/**
					 * Constructs a new instance of the io.noties.markwon.syntax.Prism4jTheme interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						background(): number;
						textColor(): number;
						apply(param0: string, param1: io.noties.prism4j.Prism4j.Syntax, param2: android.text.SpannableStringBuilder, param3: number, param4: number): void;
					});
					public constructor();
					public textColor(): number;
					public background(): number;
					public apply(param0: string, param1: io.noties.prism4j.Prism4j.Syntax, param2: android.text.SpannableStringBuilder, param3: number, param4: number): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module syntax {
				export abstract class Prism4jThemeBase extends java.lang.Object implements io.noties.markwon.syntax.Prism4jTheme {
					public static class: java.lang.Class<io.noties.markwon.syntax.Prism4jThemeBase>;
					public applyColor(language: string, type: string, alias: string, color: number, builder: android.text.SpannableStringBuilder, start: number, end: number): void;
					public constructor();
					public textColor(): number;
					public static isOfType(expected: string, type: string, alias: string): boolean;
					public init(): io.noties.markwon.syntax.Prism4jThemeBase.ColorHashMap;
					public apply(language: string, syntax: io.noties.prism4j.Prism4j.Syntax, builder: android.text.SpannableStringBuilder, start: number, end: number): void;
					public background(): number;
					public color(language: string, type: string, alias: string): number;
					public apply(param0: string, param1: io.noties.prism4j.Prism4j.Syntax, param2: android.text.SpannableStringBuilder, param3: number, param4: number): void;
					public static applyAlpha(alpha: number, color: number): number;
				}
				export module Prism4jThemeBase {
					export class Color extends java.lang.Object {
						public static class: java.lang.Class<io.noties.markwon.syntax.Prism4jThemeBase.Color>;
						public color: number;
						public constructor(color: number);
						public static of(color: number): io.noties.markwon.syntax.Prism4jThemeBase.Color;
					}
					export class ColorHashMap extends java.util.HashMap<string,io.noties.markwon.syntax.Prism4jThemeBase.Color> {
						public static class: java.lang.Class<io.noties.markwon.syntax.Prism4jThemeBase.ColorHashMap>;
						public add(color: number, name1: string, name2: string, name3: string): io.noties.markwon.syntax.Prism4jThemeBase.ColorHashMap;
						public put(param0: any, param1: any): any;
						public remove(param0: any): any;
						public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public containsKey(key: any): boolean;
						public values(): java.util.Collection<any>;
						public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
						public add(color: number, name: string): io.noties.markwon.syntax.Prism4jThemeBase.ColorHashMap;
						public constructor(initialCapacity: number, loadFactor: number);
						public getOrDefault(key: any, defaultValue: any): any;
						public putAll(param0: java.util.Map<any,any>): void;
						public remove(key: any, value: any): boolean;
						public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
						public putIfAbsent(key: any, value: any): any;
						public constructor(initialCapacity: number);
						public replace(key: any, oldValue: any, newValue: any): boolean;
						public isEmpty(): boolean;
						public forEach(action: any /* any<any,any>*/): void;
						public equals(o: any): boolean;
						public size(): number;
						public constructor(m: java.util.Map<any,any>);
						public replace(key: any, value: any): any;
						public put(key: any, value: any): any;
						public constructor();
						public replaceAll(_function_: any /* any<any,any,any>*/): void;
						public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
						public containsValue(value: any): boolean;
						public get(param0: any): any;
						public get(key: any): any;
						public putAll(m: java.util.Map<any,any>): void;
						public containsValue(param0: any): boolean;
						public containsKey(param0: any): boolean;
						public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
						public add(color: number, ...names: string[]): io.noties.markwon.syntax.Prism4jThemeBase.ColorHashMap;
						public remove(key: any): any;
						public clear(): void;
						public add(color: number, name1: string, name2: string): io.noties.markwon.syntax.Prism4jThemeBase.ColorHashMap;
						public keySet(): java.util.Set<any>;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module syntax {
				export class Prism4jThemeDarkula extends io.noties.markwon.syntax.Prism4jThemeBase {
					public static class: java.lang.Class<io.noties.markwon.syntax.Prism4jThemeDarkula>;
					public applyColor(language: string, type: string, alias: string, color: number, builder: android.text.SpannableStringBuilder, start: number, end: number): void;
					public constructor();
					public textColor(): number;
					public constructor(background: number);
					public background(): number;
					public init(): io.noties.markwon.syntax.Prism4jThemeBase.ColorHashMap;
					public apply(language: string, syntax: io.noties.prism4j.Prism4j.Syntax, builder: android.text.SpannableStringBuilder, start: number, end: number): void;
					public apply(param0: string, param1: io.noties.prism4j.Prism4j.Syntax, param2: android.text.SpannableStringBuilder, param3: number, param4: number): void;
					public static create(): io.noties.markwon.syntax.Prism4jThemeDarkula;
					public static create(background: number): io.noties.markwon.syntax.Prism4jThemeDarkula;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module syntax {
				export class Prism4jThemeDefault extends io.noties.markwon.syntax.Prism4jThemeBase {
					public static class: java.lang.Class<io.noties.markwon.syntax.Prism4jThemeDefault>;
					public applyColor(language: string, type: string, alias: string, color: number, builder: android.text.SpannableStringBuilder, start: number, end: number): void;
					public static create(): io.noties.markwon.syntax.Prism4jThemeDefault;
					public constructor();
					public textColor(): number;
					public static create(background: number): io.noties.markwon.syntax.Prism4jThemeDefault;
					public constructor(background: number);
					public background(): number;
					public init(): io.noties.markwon.syntax.Prism4jThemeBase.ColorHashMap;
					public apply(language: string, syntax: io.noties.prism4j.Prism4j.Syntax, builder: android.text.SpannableStringBuilder, start: number, end: number): void;
					public apply(param0: string, param1: io.noties.prism4j.Prism4j.Syntax, param2: android.text.SpannableStringBuilder, param3: number, param4: number): void;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module markwon {
			export module syntax {
				export class SyntaxHighlightPlugin {
					public static class: java.lang.Class<io.noties.markwon.syntax.SyntaxHighlightPlugin>;
					public configureTheme(builder: io.noties.markwon.core.MarkwonTheme.Builder): void;
					public static create(prism4j: io.noties.prism4j.Prism4j, theme: io.noties.markwon.syntax.Prism4jTheme): io.noties.markwon.syntax.SyntaxHighlightPlugin;
					public static create(prism4j: io.noties.prism4j.Prism4j, theme: io.noties.markwon.syntax.Prism4jTheme, fallbackLanguage: string): io.noties.markwon.syntax.SyntaxHighlightPlugin;
					public constructor(prism4j: io.noties.prism4j.Prism4j, theme: io.noties.markwon.syntax.Prism4jTheme, fallbackLanguage: string);
					public configureConfiguration(builder: io.noties.markwon.MarkwonConfiguration.Builder): void;
				}
			}
		}
	}
}

//Generics information:

