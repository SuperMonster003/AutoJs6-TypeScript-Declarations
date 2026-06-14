/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export class CharacterUtil extends java.lang.Object {
					public static class: java.lang.Class<com.huaban.analysis.jieba.CharacterUtil>;
					public static INSTANCE: com.huaban.analysis.jieba.CharacterUtil;
					public getReSkip(): java.util.regex.Pattern;
					public regularize(input: string): string;
					public isChineseLetter$jieba_analysis_debug(ch: string): boolean;
					public setReSkip(_set_: java.util.regex.Pattern): void;
					public isDigit$jieba_analysis_debug(ch: string): boolean;
					public isEnglishLetter$jieba_analysis_debug(ch: string): boolean;
					public ccFind(ch: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export class CharsDictionaryDatabase extends com.huaban.analysis.jieba.DictionaryDatabase {
					public static class: java.lang.Class<com.huaban.analysis.jieba.CharsDictionaryDatabase>;
					public close(): void;
					public getDatabaseName(): string;
				}
				export module CharsDictionaryDatabase {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<com.huaban.analysis.jieba.CharsDictionaryDatabase.Companion>;
						public getInstance(context: android.content.Context): com.huaban.analysis.jieba.CharsDictionaryDatabase;
					}
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export class DictSegment extends java.lang.Comparable<com.huaban.analysis.jieba.DictSegment> {
					public static class: java.lang.Class<com.huaban.analysis.jieba.DictSegment>;
					public match(charArray: string[], begin: number, length: number, searchHit: com.huaban.analysis.jieba.Hit): com.huaban.analysis.jieba.Hit;
					public disableSegment(charArray: string[]): void;
					public compareTo(other: com.huaban.analysis.jieba.DictSegment): number;
					public constructor(nodeChar: string);
					public fillSegments(words: java.util.List<string>): void;
					public match(charArray: string[], begin: number): com.huaban.analysis.jieba.Hit;
					public match(charArray: string[]): com.huaban.analysis.jieba.Hit;
					public match(charArray: string[], begin: number, length: number): com.huaban.analysis.jieba.Hit;
				}
				export module DictSegment {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<com.huaban.analysis.jieba.DictSegment.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export abstract class DictionaryDatabase extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<com.huaban.analysis.jieba.DictionaryDatabase>;
					public constructor(context: android.content.Context);
					public close(): void;
					public getDatabaseName(): string;
					public getDatabase(): android.database.sqlite.SQLiteDatabase;
				}
				export module DictionaryDatabase {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<com.huaban.analysis.jieba.DictionaryDatabase.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export class Hit extends java.lang.Object {
					public static class: java.lang.Class<com.huaban.analysis.jieba.Hit>;
					public isUnmatch(): boolean;
					public setMatch(): void;
					public isMatch(): boolean;
					public isPrefix(): boolean;
					public getEnd(): number;
					public setPrefix(): void;
					public getBegin(): number;
					public setBegin(begin: number): void;
					public setUnmatch(): void;
					public setMatchedDictSegment(matchedDictSegment: com.huaban.analysis.jieba.DictSegment): void;
					public constructor();
					public setEnd(end: number): void;
					public getMatchedDictSegment(): com.huaban.analysis.jieba.DictSegment;
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export class JiebaSegmenter extends java.lang.Object {
					public static class: java.lang.Class<com.huaban.analysis.jieba.JiebaSegmenter>;
					public getDictionary(): com.huaban.analysis.jieba.WordDictionary;
					public process(paragraph: string, mode: com.huaban.analysis.jieba.JiebaSegmenter.SegMode): java.util.List<com.huaban.analysis.jieba.SegToken>;
					public constructor(context: android.content.Context);
					public cutSmall(hans: string, limit: number): java.util.List<string>;
				}
				export module JiebaSegmenter {
					export class SegMode {
						public static class: java.lang.Class<com.huaban.analysis.jieba.JiebaSegmenter.SegMode>;
						public static INDEX: com.huaban.analysis.jieba.JiebaSegmenter.SegMode;
						public static SEARCH: com.huaban.analysis.jieba.JiebaSegmenter.SegMode;
						public static valueOf(value: string): com.huaban.analysis.jieba.JiebaSegmenter.SegMode;
						public static getEntries(): kotlin.enums.EnumEntries<com.huaban.analysis.jieba.JiebaSegmenter.SegMode>;
						public static values(): com.huaban.analysis.jieba.JiebaSegmenter.SegMode[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
					export class WhenMappings extends java.lang.Object {
						public static class: java.lang.Class<com.huaban.analysis.jieba.JiebaSegmenter.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export class Log extends java.lang.Object {
					public static class: java.lang.Class<com.huaban.analysis.jieba.Log>;
					public static debug(debugInfo: string): void;
					public constructor();
					public static error(errorInfo: string): void;
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export class Node extends java.lang.Object {
					public static class: java.lang.Class<com.huaban.analysis.jieba.Node>;
					public value: java.lang.Character;
					public parent: com.huaban.analysis.jieba.Node;
					public constructor(value: java.lang.Character, parent: com.huaban.analysis.jieba.Node);
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export class Pair<K>  extends java.lang.Object {
					public static class: java.lang.Class<com.huaban.analysis.jieba.Pair<any>>;
					public key: K;
					public freq: java.lang.Double;
					public toString(): string;
					public constructor(key: K, freq: number);
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export class PhrasesDictionaryDatabase extends com.huaban.analysis.jieba.DictionaryDatabase {
					public static class: java.lang.Class<com.huaban.analysis.jieba.PhrasesDictionaryDatabase>;
					public close(): void;
					public getDatabaseName(): string;
				}
				export module PhrasesDictionaryDatabase {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<com.huaban.analysis.jieba.PhrasesDictionaryDatabase.Companion>;
						public getInstance(context: android.content.Context): com.huaban.analysis.jieba.PhrasesDictionaryDatabase;
					}
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export class SegToken extends java.lang.Object {
					public static class: java.lang.Class<com.huaban.analysis.jieba.SegToken>;
					public word: string;
					public startOffset: number;
					public endOffset: number;
					public toString(): string;
					public constructor(word: string, startOffset: number, endOffset: number);
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export class WordDictionary extends java.lang.Object {
					public static class: java.lang.Class<com.huaban.analysis.jieba.WordDictionary>;
					public containsWord(word: string): boolean;
					public getFreq(key: string): number;
					public constructor(context: android.content.Context);
					public getTrie$jieba_analysis_debug(): com.huaban.analysis.jieba.DictSegment;
					public resetDict(): void;
				}
				export module WordDictionary {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<com.huaban.analysis.jieba.WordDictionary.Companion>;
						public getInstance(context: android.content.Context): com.huaban.analysis.jieba.WordDictionary;
					}
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export class WordDictionaryDatabase extends com.huaban.analysis.jieba.DictionaryDatabase {
					public static class: java.lang.Class<com.huaban.analysis.jieba.WordDictionaryDatabase>;
					public close(): void;
					public getDatabaseName(): string;
				}
				export module WordDictionaryDatabase {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<com.huaban.analysis.jieba.WordDictionaryDatabase.Companion>;
						public getInstance(context: android.content.Context): com.huaban.analysis.jieba.WordDictionaryDatabase;
					}
				}
			}
		}
	}
}

declare module com {
	export module huaban {
		export module analysis {
			export module jieba {
				export module viterbi {
					export class FinalSeg extends java.lang.Object {
						public static class: java.lang.Class<com.huaban.analysis.jieba.viterbi.FinalSeg>;
						public cut(sentence: string, tokens: java.util.List<string>): void;
					}
					export module FinalSeg {
						export class Companion extends java.lang.Object {
							public static class: java.lang.Class<com.huaban.analysis.jieba.viterbi.FinalSeg.Companion>;
							public getInstance(context: android.content.Context): com.huaban.analysis.jieba.viterbi.FinalSeg;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.huaban.analysis.jieba.Pair:1

