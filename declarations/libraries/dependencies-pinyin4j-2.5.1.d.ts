/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class BuildDocument extends java.lang.Object implements com.hp.hpl.sparta.DocumentSource, com.hp.hpl.sparta.ParseHandler {
					public static class: java.lang.Class<com.hp.hpl.sparta.BuildDocument>;
					public getLineNumber(): number;
					public characters(buf: string[], offset: number, len: number): void;
					public getDocument(): com.hp.hpl.sparta.Document;
					public constructor(log: com.hp.hpl.sparta.ParseLog);
					public endDocument(): void;
					public startElement(element: com.hp.hpl.sparta.Element): void;
					public setParseSource(param0: com.hp.hpl.sparta.ParseSource): void;
					public setParseSource(ps: com.hp.hpl.sparta.ParseSource): void;
					public startElement(param0: com.hp.hpl.sparta.Element): void;
					public endElement(param0: com.hp.hpl.sparta.Element): void;
					public characters(param0: string[], param1: number, param2: number): void;
					public startDocument(): void;
					public toString(): string;
					public endElement(element: com.hp.hpl.sparta.Element): void;
					public constructor();
					public getParseSource(): com.hp.hpl.sparta.ParseSource;
					public getSystemId(): string;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class CharCircBuffer extends java.lang.Object {
					public static class: java.lang.Class<com.hp.hpl.sparta.CharCircBuffer>;
					public toString(): string;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class DOMException extends java.lang.Exception {
					public static class: java.lang.Class<com.hp.hpl.sparta.DOMException>;
					public code: number;
					public static DOMSTRING_SIZE_ERR: number;
					public static HIERARCHY_REQUEST_ERR: number;
					public static NOT_FOUND_ERR: number;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor(code: number, message: string);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class DefaultLog extends java.lang.Object implements com.hp.hpl.sparta.ParseLog {
					public static class: java.lang.Class<com.hp.hpl.sparta.DefaultLog>;
					public warning(msg: string, systemId: string, line: number): void;
					public note(msg: string, systemId: string, line: number): void;
					public error(param0: string, param1: string, param2: number): void;
					public note(param0: string, param1: string, param2: number): void;
					public error(msg: string, systemId: string, line: number): void;
					public warning(param0: string, param1: string, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class DefaultParseHandler extends java.lang.Object implements com.hp.hpl.sparta.ParseHandler {
					public static class: java.lang.Class<com.hp.hpl.sparta.DefaultParseHandler>;
					public endElement(param0: com.hp.hpl.sparta.Element): void;
					public characters(param0: string[], param1: number, param2: number): void;
					public startDocument(): void;
					public endElement(element: com.hp.hpl.sparta.Element): void;
					public constructor();
					public endDocument(): void;
					public startElement(element: com.hp.hpl.sparta.Element): void;
					public getParseSource(): com.hp.hpl.sparta.ParseSource;
					public setParseSource(param0: com.hp.hpl.sparta.ParseSource): void;
					public setParseSource(ps: com.hp.hpl.sparta.ParseSource): void;
					public startElement(param0: com.hp.hpl.sparta.Element): void;
					public characters(buf: string[], off: number, len: number): void;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class Document extends com.hp.hpl.sparta.Node {
					public static class: java.lang.Class<com.hp.hpl.sparta.Document>;
					public equals(obj: any): boolean;
					public xpathSelectElement(param0: string): com.hp.hpl.sparta.Element;
					public xpathSelectElement(xpath: string): com.hp.hpl.sparta.Element;
					public xpathSelectString(param0: string): string;
					public computeHashCode(): number;
					public toString(writer: java.io.Writer): void;
					public equals(thatO: any): boolean;
					public xpathSelectElements(xpath: string): java.util.Enumeration<any>;
					public toString(): string;
					public clone(): any;
					public setSystemId(systemId: string): void;
					public xpathSelectElements(param0: string): java.util.Enumeration<any>;
					public constructor();
					public deleteObserver(observer: com.hp.hpl.sparta.Document.Observer): void;
					public xpathSelectString(xpath: string): string;
					public setDocumentElement(rootElement: com.hp.hpl.sparta.Element): void;
					public getSystemId(): string;
					public xpathEnsure(xpath: string): boolean;
					public addObserver(observer: com.hp.hpl.sparta.Document.Observer): void;
					public xpathSelectStrings(xpath: string): java.util.Enumeration<any>;
					public xpathHasIndex(xpath: string): boolean;
					public toXml(): string;
					public xpathSelectStrings(param0: string): java.util.Enumeration<any>;
					public xpathGetIndex(xpath: string): com.hp.hpl.sparta.Document.Index;
					public toXml(writer: java.io.Writer): void;
					public getDocumentElement(): com.hp.hpl.sparta.Element;
				}
				export module Document {
					export class Index extends java.lang.Object implements com.hp.hpl.sparta.Document.Observer {
						public static class: java.lang.Class<com.hp.hpl.sparta.Document.Index>;
						public update(doc: com.hp.hpl.sparta.Document): void;
						public get(attrValue: string): java.util.Enumeration<any>;
						public size(): number;
						public update(param0: com.hp.hpl.sparta.Document): void;
					}
					export class Observer extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.Document.Observer>;
						/**
						 * Constructs a new instance of the com.hp.hpl.sparta.Document$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							update(param0: com.hp.hpl.sparta.Document): void;
						});
						public constructor();
						public update(param0: com.hp.hpl.sparta.Document): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class DocumentSource extends java.lang.Object implements com.hp.hpl.sparta.ParseSource {
					public static class: java.lang.Class<com.hp.hpl.sparta.DocumentSource>;
					/**
					 * Constructs a new instance of the com.hp.hpl.sparta.DocumentSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDocument(): com.hp.hpl.sparta.Document;
						toString(): string;
						getSystemId(): string;
						getLineNumber(): number;
						"<clinit>"(): void;
					});
					public constructor();
					public static DEFAULT_LOG: com.hp.hpl.sparta.ParseLog;
					public static MAXLOOKAHEAD: number;
					public getLineNumber(): number;
					public getDocument(): com.hp.hpl.sparta.Document;
					public toString(): string;
					public getSystemId(): string;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class Element extends com.hp.hpl.sparta.Node {
					public static class: java.lang.Class<com.hp.hpl.sparta.Element>;
					public equals(obj: any): boolean;
					public xpathSelectElement(param0: string): com.hp.hpl.sparta.Element;
					public removeAttribute(name: string): void;
					public removeChild(childToRemove: com.hp.hpl.sparta.Node): void;
					public replaceChild(newChild: com.hp.hpl.sparta.Element, oldChild: com.hp.hpl.sparta.Node): void;
					public xpathSelectElement(xpath: string): com.hp.hpl.sparta.Element;
					public xpathSelectString(param0: string): string;
					public computeHashCode(): number;
					public equals(thatO: any): boolean;
					public cloneShallow(): com.hp.hpl.sparta.Element;
					public getTagName(): string;
					public xpathSelectElements(xpath: string): java.util.Enumeration<any>;
					public getLastChild(): com.hp.hpl.sparta.Node;
					public clone(): any;
					public xpathSelectElements(param0: string): java.util.Enumeration<any>;
					public constructor();
					public appendChild(addedChild: com.hp.hpl.sparta.Node): void;
					public xpathSelectString(xpath: string): string;
					public setAttribute(name: string, value: string): void;
					public xpathEnsure(xpath: string): boolean;
					public getAttributeNames(): java.util.Enumeration<any>;
					public replaceChild(newChild: com.hp.hpl.sparta.Text, oldChild: com.hp.hpl.sparta.Node): void;
					public getAttribute(name: string): string;
					public toXml(): string;
					public xpathSelectStrings(xpath: string): java.util.Enumeration<any>;
					public constructor(tagName: string);
					public xpathSelectStrings(param0: string): java.util.Enumeration<any>;
					public toXml(writer: java.io.Writer): void;
					public cloneElement(deep: boolean): com.hp.hpl.sparta.Element;
					public getFirstChild(): com.hp.hpl.sparta.Node;
					public setTagName(tagName: string): void;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class EmptyEnumeration extends java.lang.Object implements java.util.Enumeration<any> {
					public static class: java.lang.Class<com.hp.hpl.sparta.EmptyEnumeration>;
					public hasMoreElements(): boolean;
					public nextElement(): any;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class EncodingMismatchException extends com.hp.hpl.sparta.ParseException {
					public static class: java.lang.Class<com.hp.hpl.sparta.EncodingMismatchException>;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export abstract class Node extends java.lang.Object {
					public static class: java.lang.Class<com.hp.hpl.sparta.Node>;
					public getAnnotation(): any;
					public toXml(): string;
					public xpathSelectElement(param0: string): com.hp.hpl.sparta.Element;
					public getNextSibling(): com.hp.hpl.sparta.Node;
					public xpathSelectStrings(param0: string): java.util.Enumeration<any>;
					public xpathSelectString(param0: string): string;
					public computeHashCode(): number;
					public getOwnerDocument(): com.hp.hpl.sparta.Document;
					public setAnnotation(annotation: any): void;
					public toString(): string;
					public clone(): any;
					public xpathSetStrings(xpath: string, value: string): boolean;
					public xpathSelectElements(param0: string): java.util.Enumeration<any>;
					public constructor();
					public static htmlEncode(writer: java.io.Writer, string: string): void;
					public hashCode(): number;
					public getParentNode(): com.hp.hpl.sparta.Element;
					public getPreviousSibling(): com.hp.hpl.sparta.Node;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class NodeListWithPosition extends java.lang.Object {
					public static class: java.lang.Class<com.hp.hpl.sparta.NodeListWithPosition>;
					public toString(): string;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class ParseByteStream extends java.lang.Object implements com.hp.hpl.sparta.ParseSource {
					public static class: java.lang.Class<com.hp.hpl.sparta.ParseByteStream>;
					public getLineNumber(): number;
					public toString(): string;
					public constructor(systemId: string, istream: java.io.InputStream, log: com.hp.hpl.sparta.ParseLog, guessedEncoding: string, handler: com.hp.hpl.sparta.ParseHandler);
					public getSystemId(): string;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class ParseCharStream extends java.lang.Object implements com.hp.hpl.sparta.ParseSource {
					public static class: java.lang.Class<com.hp.hpl.sparta.ParseCharStream>;
					public static HISTORY_LENGTH: number;
					public getLineNumber(): number;
					public toString(): string;
					public constructor(systemId: string, xmlData: string[], log: com.hp.hpl.sparta.ParseLog, encoding: string, handler: com.hp.hpl.sparta.ParseHandler);
					public constructor(systemId: string, reader: java.io.Reader, log: com.hp.hpl.sparta.ParseLog, encoding: string, handler: com.hp.hpl.sparta.ParseHandler);
					public getSystemId(): string;
					public constructor(systemId: string, reader: java.io.Reader, xmlData: string[], log: com.hp.hpl.sparta.ParseLog, encoding: string, handler: com.hp.hpl.sparta.ParseHandler);
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class ParseException extends java.lang.Exception {
					public static class: java.lang.Class<com.hp.hpl.sparta.ParseException>;
					public getLineNumber(): number;
					public constructor(source: com.hp.hpl.sparta.ParseCharStream, msg: string);
					public constructor(log: com.hp.hpl.sparta.ParseLog, systemId: string, lineNumber: number, lastCharRead: number, history: string, msg: string);
					public constructor(source: com.hp.hpl.sparta.ParseCharStream, actual: string, expected: string[]);
					public constructor(msg: string);
					public constructor(systemId: string, lineNumber: number, lastCharRead: number, history: string, msg: string);
					public getCause(): java.lang.Throwable;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
					public constructor(msg: string, cause: java.lang.Throwable);
					public constructor(source: com.hp.hpl.sparta.ParseCharStream, actual: string, expected: string);
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class ParseHandler extends java.lang.Object {
					public static class: java.lang.Class<com.hp.hpl.sparta.ParseHandler>;
					/**
					 * Constructs a new instance of the com.hp.hpl.sparta.ParseHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setParseSource(param0: com.hp.hpl.sparta.ParseSource): void;
						getParseSource(): com.hp.hpl.sparta.ParseSource;
						startDocument(): void;
						endDocument(): void;
						startElement(param0: com.hp.hpl.sparta.Element): void;
						endElement(param0: com.hp.hpl.sparta.Element): void;
						characters(param0: string[], param1: number, param2: number): void;
					});
					public constructor();
					public endElement(param0: com.hp.hpl.sparta.Element): void;
					public characters(param0: string[], param1: number, param2: number): void;
					public startDocument(): void;
					public endDocument(): void;
					public getParseSource(): com.hp.hpl.sparta.ParseSource;
					public setParseSource(param0: com.hp.hpl.sparta.ParseSource): void;
					public startElement(param0: com.hp.hpl.sparta.Element): void;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class ParseLog extends java.lang.Object {
					public static class: java.lang.Class<com.hp.hpl.sparta.ParseLog>;
					/**
					 * Constructs a new instance of the com.hp.hpl.sparta.ParseLog interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						error(param0: string, param1: string, param2: number): void;
						warning(param0: string, param1: string, param2: number): void;
						note(param0: string, param1: string, param2: number): void;
					});
					public constructor();
					public error(param0: string, param1: string, param2: number): void;
					public note(param0: string, param1: string, param2: number): void;
					public warning(param0: string, param1: string, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class ParseSource extends java.lang.Object {
					public static class: java.lang.Class<com.hp.hpl.sparta.ParseSource>;
					/**
					 * Constructs a new instance of the com.hp.hpl.sparta.ParseSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toString(): string;
						getSystemId(): string;
						getLineNumber(): number;
						"<clinit>"(): void;
					});
					public constructor();
					public static DEFAULT_LOG: com.hp.hpl.sparta.ParseLog;
					public static MAXLOOKAHEAD: number;
					public getLineNumber(): number;
					public toString(): string;
					public getSystemId(): string;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class Parser extends java.lang.Object {
					public static class: java.lang.Class<com.hp.hpl.sparta.Parser>;
					public static parse(xml: string[]): com.hp.hpl.sparta.Document;
					public static parse(systemId: string, istream: java.io.InputStream): com.hp.hpl.sparta.Document;
					public static parse(systemId: string, reader: java.io.Reader, log: com.hp.hpl.sparta.ParseLog, encoding: string): com.hp.hpl.sparta.Document;
					public static parse(systemId: string, istream: java.io.InputStream, log: com.hp.hpl.sparta.ParseLog): com.hp.hpl.sparta.Document;
					public static parse(xml: string[], ph: com.hp.hpl.sparta.ParseHandler): void;
					public static parse(systemId: string, reader: java.io.Reader, ph: com.hp.hpl.sparta.ParseHandler): void;
					public static parse(xml: number[], ph: com.hp.hpl.sparta.ParseHandler): void;
					public static parse(systemId: string, istream: java.io.InputStream, ph: com.hp.hpl.sparta.ParseHandler): void;
					public static parse(systemId: string, reader: java.io.Reader, log: com.hp.hpl.sparta.ParseLog, ph: com.hp.hpl.sparta.ParseHandler): void;
					public static parse(xml: string): com.hp.hpl.sparta.Document;
					public static parse(xml: number[]): com.hp.hpl.sparta.Document;
					public static parse(systemId: string, istream: java.io.InputStream, log: com.hp.hpl.sparta.ParseLog, guessedEncoding: string): com.hp.hpl.sparta.Document;
					public static parse(systemId: string, reader: java.io.Reader, log: com.hp.hpl.sparta.ParseLog, encoding: string, ph: com.hp.hpl.sparta.ParseHandler): void;
					public static parse(systemId: string, reader: java.io.Reader): com.hp.hpl.sparta.Document;
					public static parse(systemId: string, reader: java.io.Reader, log: com.hp.hpl.sparta.ParseLog): com.hp.hpl.sparta.Document;
					public constructor();
					public static parse(systemId: string, istream: java.io.InputStream, log: com.hp.hpl.sparta.ParseLog, guessedEncoding: string, ph: com.hp.hpl.sparta.ParseHandler): void;
					public static parse(systemId: string, istream: java.io.InputStream, log: com.hp.hpl.sparta.ParseLog, ph: com.hp.hpl.sparta.ParseHandler): void;
					public static parse(xml: string, ph: com.hp.hpl.sparta.ParseHandler): void;
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class Sparta extends java.lang.Object {
					public static class: java.lang.Class<com.hp.hpl.sparta.Sparta>;
					public constructor();
					public static setCacheFactory(f: com.hp.hpl.sparta.Sparta.CacheFactory): void;
					public static intern(s: string): string;
					public static setInternment(i: com.hp.hpl.sparta.Sparta.Internment): void;
				}
				export module Sparta {
					export class Cache extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.Sparta.Cache>;
						/**
						 * Constructs a new instance of the com.hp.hpl.sparta.Sparta$Cache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(param0: any): any;
							put(param0: any, param1: any): any;
							size(): number;
						});
						public constructor();
						public put(param0: any, param1: any): any;
						public get(param0: any): any;
						public size(): number;
					}
					export class CacheFactory extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.Sparta.CacheFactory>;
						/**
						 * Constructs a new instance of the com.hp.hpl.sparta.Sparta$CacheFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							create(): com.hp.hpl.sparta.Sparta.Cache;
						});
						public constructor();
						public create(): com.hp.hpl.sparta.Sparta.Cache;
					}
					export class HashtableCache extends java.util.Hashtable<any,any> implements com.hp.hpl.sparta.Sparta.Cache {
						public static class: java.lang.Class<com.hp.hpl.sparta.Sparta.HashtableCache>;
						public put(param0: any, param1: any): any;
						public remove(param0: any): any;
						public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public containsKey(key: any): boolean;
						public values(): java.util.Collection<any>;
						public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
						public getOrDefault(key: any, defaultValue: any): any;
						public remove(key: any, value: any): boolean;
						public putAll(param0: java.util.Map<any,any>): void;
						public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
						public putIfAbsent(key: any, value: any): any;
						public replace(key: any, oldValue: any, newValue: any): boolean;
						public isEmpty(): boolean;
						public forEach(action: any /* any<any,any>*/): void;
						public equals(o: any): boolean;
						public size(): number;
						public replace(key: any, value: any): any;
						public put(key: any, value: any): any;
						public replaceAll(_function_: any /* any<any,any,any>*/): void;
						public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
						public get(param0: any): any;
						public containsValue(value: any): boolean;
						public get(key: any): any;
						public containsValue(param0: any): boolean;
						public containsKey(param0: any): boolean;
						public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
						public remove(key: any): any;
						public putAll(t: java.util.Map<any,any>): void;
						public clear(): void;
						public keySet(): java.util.Set<any>;
					}
					export class Internment extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.Sparta.Internment>;
						/**
						 * Constructs a new instance of the com.hp.hpl.sparta.Sparta$Internment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							intern(param0: string): string;
						});
						public constructor();
						public intern(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class Text extends com.hp.hpl.sparta.Node {
					public static class: java.lang.Class<com.hp.hpl.sparta.Text>;
					public equals(obj: any): boolean;
					public xpathSelectStrings(xpath: string): java.util.Enumeration<any>;
					public xpathSelectElement(param0: string): com.hp.hpl.sparta.Element;
					public xpathSelectStrings(param0: string): java.util.Enumeration<any>;
					public xpathSelectElement(xpath: string): com.hp.hpl.sparta.Element;
					public xpathSelectString(param0: string): string;
					public appendData(ch: string): void;
					public computeHashCode(): number;
					public constructor(data: string);
					public appendData(cbuf: string[], offset: number, len: number): void;
					public equals(thatO: any): boolean;
					public getData(): string;
					public xpathSelectElements(xpath: string): java.util.Enumeration<any>;
					public clone(): any;
					public xpathSelectElements(param0: string): java.util.Enumeration<any>;
					public constructor();
					public setData(data: string): void;
					public xpathSelectString(xpath: string): string;
					public appendData(s: string): void;
					public constructor(ch: string);
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export class XPathVisitor extends java.lang.Object implements com.hp.hpl.sparta.xpath.Visitor {
					public static class: java.lang.Class<com.hp.hpl.sparta.XPathVisitor>;
					public visit(param0: com.hp.hpl.sparta.xpath.AttrExistsExpr): void;
					public visit(a: com.hp.hpl.sparta.xpath.TextExistsExpr): void;
					public visit(param0: com.hp.hpl.sparta.xpath.AllElementTest): void;
					public visit(a: com.hp.hpl.sparta.xpath.TextTest): void;
					public getResultEnumeration(): java.util.Enumeration<any>;
					public visit(a: com.hp.hpl.sparta.xpath.ParentNodeTest): void;
					public visit(a: com.hp.hpl.sparta.xpath.TextEqualsExpr): void;
					public visit(test: com.hp.hpl.sparta.xpath.ElementTest): void;
					public visit(a: com.hp.hpl.sparta.xpath.PositionEqualsExpr): void;
					public visit(a: com.hp.hpl.sparta.xpath.TextNotEqualsExpr): void;
					public visit(param0: com.hp.hpl.sparta.xpath.TextNotEqualsExpr): void;
					public visit(param0: com.hp.hpl.sparta.xpath.ElementTest): void;
					public visit(param0: com.hp.hpl.sparta.xpath.AttrEqualsExpr): void;
					public visit(param0: com.hp.hpl.sparta.xpath.ParentNodeTest): void;
					public visit(param0: com.hp.hpl.sparta.xpath.TextEqualsExpr): void;
					public visit(a: com.hp.hpl.sparta.xpath.AttrLessExpr): void;
					public visit(a: com.hp.hpl.sparta.xpath.AttrGreaterExpr): void;
					public visit(a: com.hp.hpl.sparta.xpath.ThisNodeTest): void;
					public visit(a: com.hp.hpl.sparta.xpath.AllElementTest): void;
					public visit(param0: com.hp.hpl.sparta.xpath.AttrGreaterExpr): void;
					public visit(a: com.hp.hpl.sparta.xpath.AttrNotEqualsExpr): void;
					public visit(param0: com.hp.hpl.sparta.xpath.AttrNotEqualsExpr): void;
					public visit(param0: com.hp.hpl.sparta.xpath.TextTest): void;
					public getFirstResultString(): string;
					public visit(param0: com.hp.hpl.sparta.xpath.TrueExpr): void;
					public visit(a: com.hp.hpl.sparta.xpath.AttrExistsExpr): void;
					public visit(param0: com.hp.hpl.sparta.xpath.PositionEqualsExpr): void;
					public constructor(context: com.hp.hpl.sparta.Document, xpath: com.hp.hpl.sparta.xpath.XPath);
					public visit(test: com.hp.hpl.sparta.xpath.AttrTest): void;
					public visit(param0: com.hp.hpl.sparta.xpath.AttrTest): void;
					public visit(param0: com.hp.hpl.sparta.xpath.TextExistsExpr): void;
					public visit(a: com.hp.hpl.sparta.xpath.AttrEqualsExpr): void;
					public constructor(context: com.hp.hpl.sparta.Element, xpath: com.hp.hpl.sparta.xpath.XPath);
					public visit(param0: com.hp.hpl.sparta.xpath.AttrLessExpr): void;
					public visit(param0: com.hp.hpl.sparta.xpath.ThisNodeTest): void;
					public visit(a: com.hp.hpl.sparta.xpath.TrueExpr): void;
					public getFirstResultElement(): com.hp.hpl.sparta.Element;
				}
				export module XPathVisitor {
					export class BooleanStack extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.XPathVisitor.BooleanStack>;
					}
					export module BooleanStack {
						export class Item extends java.lang.Object {
							public static class: java.lang.Class<com.hp.hpl.sparta.XPathVisitor.BooleanStack.Item>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class AllElementTest extends com.hp.hpl.sparta.xpath.NodeTest {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.AllElementTest>;
						public isStringValue(): boolean;
						public accept(param0: com.hp.hpl.sparta.xpath.Visitor): void;
						public accept(visitor: com.hp.hpl.sparta.xpath.Visitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export abstract class AttrCompareExpr extends com.hp.hpl.sparta.xpath.AttrExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.AttrCompareExpr>;
						public getAttrValue(): string;
						public toString(op: string): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class AttrEqualsExpr extends com.hp.hpl.sparta.xpath.AttrCompareExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.AttrEqualsExpr>;
						public accept(visitor: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(op: string): string;
						public accept(param0: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class AttrExistsExpr extends com.hp.hpl.sparta.xpath.AttrExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.AttrExistsExpr>;
						public accept(visitor: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public accept(param0: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export abstract class AttrExpr extends com.hp.hpl.sparta.xpath.BooleanExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.AttrExpr>;
						public getAttrName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class AttrGreaterExpr extends com.hp.hpl.sparta.xpath.AttrRelationalExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.AttrGreaterExpr>;
						public constructor();
						public accept(visitor: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(op: string): string;
						public constructor(attrName: string, attrValue: number);
						public accept(param0: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class AttrLessExpr extends com.hp.hpl.sparta.xpath.AttrRelationalExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.AttrLessExpr>;
						public constructor();
						public accept(visitor: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(op: string): string;
						public constructor(attrName: string, attrValue: number);
						public accept(param0: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class AttrNotEqualsExpr extends com.hp.hpl.sparta.xpath.AttrCompareExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.AttrNotEqualsExpr>;
						public accept(visitor: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(op: string): string;
						public accept(param0: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export abstract class AttrRelationalExpr extends com.hp.hpl.sparta.xpath.AttrExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.AttrRelationalExpr>;
						public toString(op: string): string;
						public getAttrValue(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class AttrTest extends com.hp.hpl.sparta.xpath.NodeTest {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.AttrTest>;
						public isStringValue(): boolean;
						public accept(param0: com.hp.hpl.sparta.xpath.Visitor): void;
						public getAttrName(): string;
						public accept(visitor: com.hp.hpl.sparta.xpath.Visitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export abstract class BooleanExpr extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.BooleanExpr>;
						public constructor();
						public accept(param0: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class BooleanExprVisitor extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.BooleanExprVisitor>;
						/**
						 * Constructs a new instance of the com.hp.hpl.sparta.xpath.BooleanExprVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							visit(param0: com.hp.hpl.sparta.xpath.TrueExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.AttrExistsExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.AttrEqualsExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.AttrNotEqualsExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.AttrLessExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.AttrGreaterExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.TextExistsExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.TextEqualsExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.TextNotEqualsExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.PositionEqualsExpr): void;
						});
						public constructor();
						public visit(param0: com.hp.hpl.sparta.xpath.AttrExistsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.AttrLessExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.AttrEqualsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.TextEqualsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.PositionEqualsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.TextExistsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.AttrNotEqualsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.TextNotEqualsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.TrueExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.AttrGreaterExpr): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class ElementTest extends com.hp.hpl.sparta.xpath.NodeTest {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.ElementTest>;
						public isStringValue(): boolean;
						public accept(param0: com.hp.hpl.sparta.xpath.Visitor): void;
						public getTagName(): string;
						public accept(visitor: com.hp.hpl.sparta.xpath.Visitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class ExprFactory extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.ExprFactory>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export abstract class NodeTest extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.NodeTest>;
						public isStringValue(): boolean;
						public constructor();
						public accept(param0: com.hp.hpl.sparta.xpath.Visitor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class NodeTestVisitor extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.NodeTestVisitor>;
						/**
						 * Constructs a new instance of the com.hp.hpl.sparta.xpath.NodeTestVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							visit(param0: com.hp.hpl.sparta.xpath.AllElementTest): void;
							visit(param0: com.hp.hpl.sparta.xpath.ThisNodeTest): void;
							visit(param0: com.hp.hpl.sparta.xpath.ParentNodeTest): void;
							visit(param0: com.hp.hpl.sparta.xpath.ElementTest): void;
							visit(param0: com.hp.hpl.sparta.xpath.AttrTest): void;
							visit(param0: com.hp.hpl.sparta.xpath.TextTest): void;
						});
						public constructor();
						public visit(param0: com.hp.hpl.sparta.xpath.ElementTest): void;
						public visit(param0: com.hp.hpl.sparta.xpath.AllElementTest): void;
						public visit(param0: com.hp.hpl.sparta.xpath.TextTest): void;
						public visit(param0: com.hp.hpl.sparta.xpath.ParentNodeTest): void;
						public visit(param0: com.hp.hpl.sparta.xpath.ThisNodeTest): void;
						public visit(param0: com.hp.hpl.sparta.xpath.AttrTest): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class ParentNodeTest extends com.hp.hpl.sparta.xpath.NodeTest {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.ParentNodeTest>;
						public isStringValue(): boolean;
						public accept(param0: com.hp.hpl.sparta.xpath.Visitor): void;
						public accept(visitor: com.hp.hpl.sparta.xpath.Visitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class PositionEqualsExpr extends com.hp.hpl.sparta.xpath.BooleanExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.PositionEqualsExpr>;
						public constructor();
						public accept(visitor: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public getPosition(): number;
						public constructor(position: number);
						public accept(param0: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class SimpleStreamTokenizer extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.SimpleStreamTokenizer>;
						public static TT_EOF: number;
						public static TT_NUMBER: number;
						public static TT_WORD: number;
						public ttype: number;
						public nval: number;
						public sval: string;
						public wordChars(from: string, to: string): void;
						public nextToken(): number;
						public constructor(reader: java.io.Reader);
						public ordinaryChar(ch: string): void;
						public toString(): string;
						public pushBack(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class Step extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.Step>;
						public static DOT: com.hp.hpl.sparta.xpath.Step;
						public isMultiLevel(): boolean;
						public isStringValue(): boolean;
						public getPredicate(): com.hp.hpl.sparta.xpath.BooleanExpr;
						public getNodeTest(): com.hp.hpl.sparta.xpath.NodeTest;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export abstract class TextCompareExpr extends com.hp.hpl.sparta.xpath.BooleanExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.TextCompareExpr>;
						public toString(op: string): string;
						public getValue(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class TextEqualsExpr extends com.hp.hpl.sparta.xpath.TextCompareExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.TextEqualsExpr>;
						public accept(visitor: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(op: string): string;
						public accept(param0: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class TextExistsExpr extends com.hp.hpl.sparta.xpath.BooleanExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.TextExistsExpr>;
						public accept(visitor: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public accept(param0: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class TextNotEqualsExpr extends com.hp.hpl.sparta.xpath.TextCompareExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.TextNotEqualsExpr>;
						public accept(visitor: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(op: string): string;
						public accept(param0: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class TextTest extends com.hp.hpl.sparta.xpath.NodeTest {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.TextTest>;
						public isStringValue(): boolean;
						public accept(param0: com.hp.hpl.sparta.xpath.Visitor): void;
						public accept(visitor: com.hp.hpl.sparta.xpath.Visitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class ThisNodeTest extends com.hp.hpl.sparta.xpath.NodeTest {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.ThisNodeTest>;
						public isStringValue(): boolean;
						public accept(param0: com.hp.hpl.sparta.xpath.Visitor): void;
						public accept(visitor: com.hp.hpl.sparta.xpath.Visitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class TrueExpr extends com.hp.hpl.sparta.xpath.BooleanExpr {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.TrueExpr>;
						public accept(visitor: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public accept(param0: com.hp.hpl.sparta.xpath.BooleanExprVisitor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class Visitor extends java.lang.Object implements com.hp.hpl.sparta.xpath.NodeTestVisitor, com.hp.hpl.sparta.xpath.BooleanExprVisitor {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.Visitor>;
						/**
						 * Constructs a new instance of the com.hp.hpl.sparta.xpath.Visitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							visit(param0: com.hp.hpl.sparta.xpath.AllElementTest): void;
							visit(param0: com.hp.hpl.sparta.xpath.ThisNodeTest): void;
							visit(param0: com.hp.hpl.sparta.xpath.ParentNodeTest): void;
							visit(param0: com.hp.hpl.sparta.xpath.ElementTest): void;
							visit(param0: com.hp.hpl.sparta.xpath.AttrTest): void;
							visit(param0: com.hp.hpl.sparta.xpath.TextTest): void;
							visit(param0: com.hp.hpl.sparta.xpath.TrueExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.AttrExistsExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.AttrEqualsExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.AttrNotEqualsExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.AttrLessExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.AttrGreaterExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.TextExistsExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.TextEqualsExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.TextNotEqualsExpr): void;
							visit(param0: com.hp.hpl.sparta.xpath.PositionEqualsExpr): void;
						});
						public constructor();
						public visit(param0: com.hp.hpl.sparta.xpath.AttrExistsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.ElementTest): void;
						public visit(param0: com.hp.hpl.sparta.xpath.TextTest): void;
						public visit(param0: com.hp.hpl.sparta.xpath.ParentNodeTest): void;
						public visit(param0: com.hp.hpl.sparta.xpath.TextNotEqualsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.AttrGreaterExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.AttrLessExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.AttrEqualsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.TextEqualsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.PositionEqualsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.AllElementTest): void;
						public visit(param0: com.hp.hpl.sparta.xpath.TextExistsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.AttrNotEqualsExpr): void;
						public visit(param0: com.hp.hpl.sparta.xpath.ThisNodeTest): void;
						public visit(param0: com.hp.hpl.sparta.xpath.AttrTest): void;
						public visit(param0: com.hp.hpl.sparta.xpath.TrueExpr): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class XPath extends java.lang.Object {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.XPath>;
						public isStringValue(): boolean;
						public static isStringValue(xpathString: string): boolean;
						public getSteps(): java.util.Enumeration<any>;
						public getIndexingAttrNameOfEquals(): string;
						public clone(): any;
						public static get(xpathString: string): com.hp.hpl.sparta.xpath.XPath;
						public isAbsolute(): boolean;
						public getIndexingAttrName(): string;
						public toString(): string;
						public static get(isAbsolute: boolean, steps: com.hp.hpl.sparta.xpath.Step[]): com.hp.hpl.sparta.xpath.XPath;
					}
				}
			}
		}
	}
}

declare module com {
	export module hp {
		export module hpl {
			export module sparta {
				export module xpath {
					export class XPathException extends java.lang.Exception {
						public static class: java.lang.Class<com.hp.hpl.sparta.xpath.XPathException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public getCause(): java.lang.Throwable;
						public constructor(xpath: com.hp.hpl.sparta.xpath.XPath, msg: string);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export class ChineseToPinyinResource extends java.lang.Object {
				public static class: java.lang.Class<net.sourceforge.pinyin4j.ChineseToPinyinResource>;
			}
			export module ChineseToPinyinResource {
				export class ChineseToPinyinResourceHolder extends java.lang.Object {
					public static class: java.lang.Class<net.sourceforge.pinyin4j.ChineseToPinyinResource.ChineseToPinyinResourceHolder>;
				}
				export class Field extends java.lang.Object {
					public static class: java.lang.Class<net.sourceforge.pinyin4j.ChineseToPinyinResource.Field>;
				}
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export class GwoyeuRomatzyhResource extends java.lang.Object {
				public static class: java.lang.Class<net.sourceforge.pinyin4j.GwoyeuRomatzyhResource>;
			}
			export module GwoyeuRomatzyhResource {
				export class GwoyeuRomatzyhSystemResourceHolder extends java.lang.Object {
					public static class: java.lang.Class<net.sourceforge.pinyin4j.GwoyeuRomatzyhResource.GwoyeuRomatzyhSystemResourceHolder>;
				}
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export class GwoyeuRomatzyhTranslator extends java.lang.Object {
				public static class: java.lang.Class<net.sourceforge.pinyin4j.GwoyeuRomatzyhTranslator>;
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export class PinyinFormatter extends java.lang.Object {
				public static class: java.lang.Class<net.sourceforge.pinyin4j.PinyinFormatter>;
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export class PinyinHelper extends java.lang.Object {
				public static class: java.lang.Class<net.sourceforge.pinyin4j.PinyinHelper>;
				public static toTongyongPinyinStringArray(ch: string): string[];
				public static toMPS2PinyinStringArray(ch: string): string[];
				public static toWadeGilesPinyinStringArray(ch: string): string[];
				public static toHanYuPinyinString(str: string, outputFormat: net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat, separate: string, retain: boolean): string;
				public static toHanyuPinyinStringArray(ch: string, outputFormat: net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat): string[];
				public static toYalePinyinStringArray(ch: string): string[];
				public static toGwoyeuRomatzyhStringArray(ch: string): string[];
				public static toHanyuPinyinStringArray(ch: string): string[];
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export class PinyinRomanizationResource extends java.lang.Object {
				public static class: java.lang.Class<net.sourceforge.pinyin4j.PinyinRomanizationResource>;
			}
			export module PinyinRomanizationResource {
				export class PinyinRomanizationSystemResourceHolder extends java.lang.Object {
					public static class: java.lang.Class<net.sourceforge.pinyin4j.PinyinRomanizationResource.PinyinRomanizationSystemResourceHolder>;
				}
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export class PinyinRomanizationTranslator extends java.lang.Object {
				public static class: java.lang.Class<net.sourceforge.pinyin4j.PinyinRomanizationTranslator>;
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export class PinyinRomanizationType extends java.lang.Object {
				public static class: java.lang.Class<net.sourceforge.pinyin4j.PinyinRomanizationType>;
				public tagName: string;
				public setTagName(tagName: string): void;
				public constructor(tagName: string);
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export class ResourceHelper extends java.lang.Object {
				public static class: java.lang.Class<net.sourceforge.pinyin4j.ResourceHelper>;
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export class TextHelper extends java.lang.Object {
				public static class: java.lang.Class<net.sourceforge.pinyin4j.TextHelper>;
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export module format {
				export class HanyuPinyinCaseType extends java.lang.Object {
					public static class: java.lang.Class<net.sourceforge.pinyin4j.format.HanyuPinyinCaseType>;
					public static UPPERCASE: net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
					public static LOWERCASE: net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
					public name: string;
					public setName(name: string): void;
					public constructor(name: string);
					public getName(): string;
				}
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export module format {
				export class HanyuPinyinOutputFormat extends java.lang.Object {
					public static class: java.lang.Class<net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat>;
					public getToneType(): net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
					public restoreDefault(): void;
					public constructor();
					public setToneType(toneType: net.sourceforge.pinyin4j.format.HanyuPinyinToneType): void;
					public getCaseType(): net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
					public setCaseType(caseType: net.sourceforge.pinyin4j.format.HanyuPinyinCaseType): void;
					public getVCharType(): net.sourceforge.pinyin4j.format.HanyuPinyinVCharType;
					public setVCharType(charType: net.sourceforge.pinyin4j.format.HanyuPinyinVCharType): void;
				}
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export module format {
				export class HanyuPinyinToneType extends java.lang.Object {
					public static class: java.lang.Class<net.sourceforge.pinyin4j.format.HanyuPinyinToneType>;
					public static WITH_TONE_NUMBER: net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
					public static WITHOUT_TONE: net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
					public static WITH_TONE_MARK: net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
					public name: string;
					public setName(name: string): void;
					public constructor(name: string);
					public getName(): string;
				}
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export module format {
				export class HanyuPinyinVCharType extends java.lang.Object {
					public static class: java.lang.Class<net.sourceforge.pinyin4j.format.HanyuPinyinVCharType>;
					public static WITH_U_AND_COLON: net.sourceforge.pinyin4j.format.HanyuPinyinVCharType;
					public static WITH_V: net.sourceforge.pinyin4j.format.HanyuPinyinVCharType;
					public static WITH_U_UNICODE: net.sourceforge.pinyin4j.format.HanyuPinyinVCharType;
					public name: string;
					public setName(name: string): void;
					public constructor(name: string);
					public getName(): string;
				}
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export module format {
				export module exception {
					export class BadHanyuPinyinOutputFormatCombination extends java.lang.Exception {
						public static class: java.lang.Class<net.sourceforge.pinyin4j.format.exception.BadHanyuPinyinOutputFormatCombination>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export module multipinyin {
				export class MultiPinyinConfig extends java.lang.Object {
					public static class: java.lang.Class<net.sourceforge.pinyin4j.multipinyin.MultiPinyinConfig>;
					public static multiPinyinPath: string;
					public constructor();
				}
			}
		}
	}
}

declare module net {
	export module sourceforge {
		export module pinyin4j {
			export module multipinyin {
				export class Trie extends java.lang.Object {
					public static class: java.lang.Class<net.sourceforge.pinyin4j.multipinyin.Trie>;
					public setNextTire(nextTire: net.sourceforge.pinyin4j.multipinyin.Trie): void;
					public load(inStream: java.io.InputStream): void;
					public constructor();
					public get(hexString: string): net.sourceforge.pinyin4j.multipinyin.Trie;
					public getNextTire(): net.sourceforge.pinyin4j.multipinyin.Trie;
					public put(s: string, trie: net.sourceforge.pinyin4j.multipinyin.Trie): void;
					public loadMultiPinyinExtend(): void;
					public getPinyin(): string;
					public loadMultiPinyin(inStream: java.io.InputStream): void;
					public setPinyin(pinyin: string): void;
				}
			}
		}
	}
}

//Generics information:

