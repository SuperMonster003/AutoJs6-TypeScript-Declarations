/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module eu {
	export module medsea {
		export module mimeutil {
			export class MimeDetectorRegistry extends java.lang.Object {
				public static class: java.lang.Class<eu.medsea.mimeutil.MimeDetectorRegistry>;
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export class MimeException extends java.lang.RuntimeException {
				public static class: java.lang.Class<eu.medsea.mimeutil.MimeException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, t: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(t: java.lang.Throwable);
				public constructor();
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export class MimeType extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<eu.medsea.mimeutil.MimeType>;
				public type: string;
				public subtype: string;
				public constructor(mimeType: string);
				public getType(): string;
				public compareTo(arg0: any): number;
				public equals(obj: any): boolean;
				public getSpecificity(): number;
				public hashCode(): number;
				public constructor(mimeType: eu.medsea.mimeutil.MimeType);
				public getSubtype(): string;
				public equals(o: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export class MimeTypeHashSet extends java.lang.Object implements java.util.Set<any>, java.util.Collection<any> {
				public static class: java.lang.Class<eu.medsea.mimeutil.MimeTypeHashSet>;
				public parallelStream(): java.util.stream.Stream<any>;
				public matches(pattern: string): java.util.Collection<any>;
				public addAll(param0: java.util.Collection<any>): boolean;
				public toArray(arg0: any[]): any[];
				public addAll(arg0: java.util.Collection<any>): boolean;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public add(arg0: any): boolean;
				public hashCode(): number;
				public clear(): void;
				public removeAll(arg0: java.util.Collection<any>): boolean;
				public equals(param0: any): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
				public contains(o: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public remove(o: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public toArray(): any[];
				public toString(): string;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public retainAll(arg0: java.util.Collection<any>): boolean;
				public size(): number;
				public toArray(param0: any[]): any[];
				public removeIf(filter: any /* any*/): boolean;
				public equals(obj: any): boolean;
				public containsAll(arg0: java.util.Collection<any>): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export class MimeUtil extends java.lang.Object {
				public static class: java.lang.Class<eu.medsea.mimeutil.MimeUtil>;
				public static getNativeOrder(): java.nio.ByteOrder;
				public static getMimeTypes(url: java.net.URL, unknownMimeType: eu.medsea.mimeutil.MimeType): java.util.Collection<any>;
				public static getMimeTypes(fileName: string, unknownMimeType: eu.medsea.mimeutil.MimeType): java.util.Collection<any>;
				public static isMimeTypeKnown(mimeType: string): boolean;
				public static registerMimeDetector(mimeDetector: string): eu.medsea.mimeutil.detector.MimeDetector;
				public static getMimeTypes(fileName: string): java.util.Collection<any>;
				public static getMimeQuality(mimeType: string): number;
				public static getMimeDetector(name: string): eu.medsea.mimeutil.detector.MimeDetector;
				public static getMimeTypes(data: number[]): java.util.Collection<any>;
				public constructor();
				public static getExtension(fileName: string): string;
				public static addKnownMimeType(mimeType: eu.medsea.mimeutil.MimeType): void;
				public static getInputStreamForURL(url: java.net.URL): java.io.InputStream;
				public static getPreferredMimeType(accept: string, canProvide: string): eu.medsea.mimeutil.MimeType;
				public static getFirstMimeType(mimeTypes: string): eu.medsea.mimeutil.MimeType;
				public static getMimeTypes(file: java.io.File): java.util.Collection<any>;
				public static getExtension(file: java.io.File): string;
				public static getSubtype(mimeType: string): string;
				public static isMimeTypeKnown(mimeType: eu.medsea.mimeutil.MimeType): boolean;
				public static getMimeTypes(data: number[], unknownMimeType: eu.medsea.mimeutil.MimeType): java.util.Collection<any>;
				public static getType(mimeType: string): string;
				public static unregisterMimeDetector(mimeDetector: eu.medsea.mimeutil.detector.MimeDetector): eu.medsea.mimeutil.detector.MimeDetector;
				public static getMostSpecificMimeType(mimeTypes: java.util.Collection<any>): eu.medsea.mimeutil.MimeType;
				public static getMimeTypes(_in_: java.io.InputStream, unknownMimeType: eu.medsea.mimeutil.MimeType): java.util.Collection<any>;
				public static isTextMimeType(mimeType: eu.medsea.mimeutil.MimeType): boolean;
				public static addKnownMimeType(mimeType: string): void;
				public static unregisterMimeDetector(mimeDetector: string): eu.medsea.mimeutil.detector.MimeDetector;
				public static getMimeTypes(file: java.io.File, unknownMimeType: eu.medsea.mimeutil.MimeType): java.util.Collection<any>;
				public static getQuality(mimeType: string): number;
				public static getMimeTypes(_in_: java.io.InputStream): java.util.Collection<any>;
				public static getMimeTypes(url: java.net.URL): java.util.Collection<any>;
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export class MimeUtil2 extends java.lang.Object {
				public static class: java.lang.Class<eu.medsea.mimeutil.MimeUtil2>;
				public static DIRECTORY_MIME_TYPE: eu.medsea.mimeutil.MimeType;
				public static UNKNOWN_MIME_TYPE: eu.medsea.mimeutil.MimeType;
				public getMimeTypes(url: java.net.URL, unknownMimeType: eu.medsea.mimeutil.MimeType): java.util.Collection<any>;
				public static getNativeOrder(): java.nio.ByteOrder;
				public getMimeTypes(url: java.net.URL): java.util.Collection<any>;
				public static getKnownMimeTypes(): java.util.Collection<any>;
				public static isMimeTypeKnown(mimeType: string): boolean;
				public getMimeTypes(_in_: java.io.InputStream, unknownMimeType: eu.medsea.mimeutil.MimeType): java.util.Collection<any>;
				public static getMimeQuality(mimeType: string): number;
				public constructor();
				public static getExtension(fileName: string): string;
				public static addKnownMimeType(mimeType: eu.medsea.mimeutil.MimeType): void;
				public getMimeTypes(data: number[]): java.util.Collection<any>;
				public static getInputStreamForURL(url: java.net.URL): java.io.InputStream;
				public static getPreferredMimeType(accept: string, canProvide: string): eu.medsea.mimeutil.MimeType;
				public static getFirstMimeType(mimeTypes: string): eu.medsea.mimeutil.MimeType;
				public unregisterMimeDetector(mimeDetector: string): eu.medsea.mimeutil.detector.MimeDetector;
				public static getExtension(file: java.io.File): string;
				public static getSubtype(mimeType: string): string;
				public unregisterMimeDetector(mimeDetector: eu.medsea.mimeutil.detector.MimeDetector): eu.medsea.mimeutil.detector.MimeDetector;
				public static isMimeTypeKnown(mimeType: eu.medsea.mimeutil.MimeType): boolean;
				public getMimeTypes(data: number[], unknownMimeType: eu.medsea.mimeutil.MimeType): java.util.Collection<any>;
				public static getType(mimeType: string): string;
				public getMimeTypes(fileName: string): java.util.Collection<any>;
				public static getMostSpecificMimeType(mimeTypes: java.util.Collection<any>): eu.medsea.mimeutil.MimeType;
				public getMimeTypes(file: java.io.File): java.util.Collection<any>;
				public getMimeTypes(_in_: java.io.InputStream): java.util.Collection<any>;
				public static isTextMimeType(mimeType: eu.medsea.mimeutil.MimeType): boolean;
				public static addKnownMimeType(mimeType: string): void;
				public getMimeTypes(fileName: string, unknownMimeType: eu.medsea.mimeutil.MimeType): java.util.Collection<any>;
				public getMimeDetector(name: string): eu.medsea.mimeutil.detector.MimeDetector;
				public registerMimeDetector(mimeDetector: string): eu.medsea.mimeutil.detector.MimeDetector;
				public static getQuality(mimeType: string): number;
				public getMimeTypes(file: java.io.File, unknownMimeType: eu.medsea.mimeutil.MimeType): java.util.Collection<any>;
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export class TextMimeDetector extends eu.medsea.mimeutil.detector.MimeDetector {
				public static class: java.lang.Class<eu.medsea.mimeutil.TextMimeDetector>;
				public getMimeTypesByteArray(data: number[]): java.util.Collection<any>;
				public getMimeTypesFileName(param0: string): java.util.Collection<any>;
				public getDescription(): string;
				public static registerTextMimeHandler(handler: eu.medsea.mimeutil.handler.TextMimeHandler): void;
				public getMimeTypesURL(url: java.net.URL): java.util.Collection<any>;
				public getMimeTypesInputStream(param0: java.io.InputStream): java.util.Collection<any>;
				public getMimeTypesInputStream(_in_: java.io.InputStream): java.util.Collection<any>;
				public getMimeTypesFileName(fileName: string): java.util.Collection<any>;
				public getMimeTypesFile(param0: java.io.File): java.util.Collection<any>;
				public getMimeTypesURL(param0: java.net.URL): java.util.Collection<any>;
				public getMimeTypesFile(file: java.io.File): java.util.Collection<any>;
				public getMimeTypesByteArray(param0: number[]): java.util.Collection<any>;
				public static getRegisteredTextMimeHandlers(): java.util.Collection<any>;
				public static setPreferredEncodings(encodings: string[]): void;
				public static unregisterTextMimeHandler(handler: eu.medsea.mimeutil.handler.TextMimeHandler): void;
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export class TextMimeType extends eu.medsea.mimeutil.MimeType {
				public static class: java.lang.Class<eu.medsea.mimeutil.TextMimeType>;
				public constructor(mimeType: string);
				public getEncoding(): string;
				public setEncoding(encoding: string): void;
				public constructor(mimeType: string, encoding: string);
				public constructor(mimeType: eu.medsea.mimeutil.MimeType, encoding: string);
				public setType(type: string): void;
				public constructor(mimeType: eu.medsea.mimeutil.MimeType);
				public setSubtype(subtype: string): void;
				public toString(): string;
				public setMimeType(mimeType: eu.medsea.mimeutil.MimeType): void;
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export module detector {
				export class ExtensionMimeDetector extends eu.medsea.mimeutil.detector.MimeDetector {
					public static class: java.lang.Class<eu.medsea.mimeutil.detector.ExtensionMimeDetector>;
					public getMimeTypesFile(param0: java.io.File): java.util.Collection<any>;
					public getMimeTypesInputStream(param0: java.io.InputStream): java.util.Collection<any>;
					public constructor();
					public getMimeTypesFileName(param0: string): java.util.Collection<any>;
					public getMimeTypesByteArray(param0: number[]): java.util.Collection<any>;
					public getMimeTypesURL(param0: java.net.URL): java.util.Collection<any>;
					public getDescription(): string;
					public getMimeTypesFile(file: java.io.File): java.util.Collection<any>;
					public getMimeTypesURL(url: java.net.URL): java.util.Collection<any>;
					public getMimeTypesFileName(fileName: string): java.util.Collection<any>;
					public getMimeTypesInputStream(_in_: java.io.InputStream): java.util.Collection<any>;
					public getMimeTypesByteArray(data: number[]): java.util.Collection<any>;
				}
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export module detector {
				export abstract class FileWatcher extends java.util.TimerTask {
					public static class: java.lang.Class<eu.medsea.mimeutil.detector.FileWatcher>;
					public onChange(param0: java.io.File): void;
					public constructor();
					public run(): void;
					public constructor(file: java.io.File);
				}
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export module detector {
				export class InvalidMagicMimeEntryException extends java.lang.RuntimeException {
					public static class: java.lang.Class<eu.medsea.mimeutil.detector.InvalidMagicMimeEntryException>;
					public constructor(message: string);
					public constructor(mimeMagicEntry: java.util.List<any>, t: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor(t: java.lang.Throwable);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
					public constructor(mimeMagicEntry: java.util.List<any>);
					public constructor(message: string, t: java.lang.Throwable);
				}
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export module detector {
				export class MagicMimeEntry extends java.lang.Object {
					public static class: java.lang.Class<eu.medsea.mimeutil.detector.MagicMimeEntry>;
					public static STRING_TYPE: number;
					public static BELONG_TYPE: number;
					public static SHORT_TYPE: number;
					public static LELONG_TYPE: number;
					public static BESHORT_TYPE: number;
					public static LESHORT_TYPE: number;
					public static BYTE_TYPE: number;
					public static UNKNOWN_TYPE: number;
					public getType(): number;
					public getContent(): string;
					public toString(): string;
					public getCheckBytesFrom(): number;
					public getMimeType(): eu.medsea.mimeutil.MimeType;
					public getParent(): eu.medsea.mimeutil.detector.MagicMimeEntry;
					public getSubEntries(): java.util.List<any>;
					public constructor(entries: java.util.ArrayList<any>);
					public containsMimeType(mimeType: string): boolean;
					public traverseAndPrint(tabs: string): void;
				}
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export module detector {
				export class MagicMimeEntryOperation extends java.lang.Object {
					public static class: java.lang.Class<eu.medsea.mimeutil.detector.MagicMimeEntryOperation>;
					public static EQUALS: eu.medsea.mimeutil.detector.MagicMimeEntryOperation;
					public static LESS_THAN: eu.medsea.mimeutil.detector.MagicMimeEntryOperation;
					public static GREATER_THAN: eu.medsea.mimeutil.detector.MagicMimeEntryOperation;
					public static AND: eu.medsea.mimeutil.detector.MagicMimeEntryOperation;
					public static CLEAR: eu.medsea.mimeutil.detector.MagicMimeEntryOperation;
					public static NEGATED: eu.medsea.mimeutil.detector.MagicMimeEntryOperation;
					public static ANY: eu.medsea.mimeutil.detector.MagicMimeEntryOperation;
					public static NOT_EQUALS: eu.medsea.mimeutil.detector.MagicMimeEntryOperation;
					public equals(obj: any): boolean;
					public toString(): string;
					public static getOperation(operationID: string): eu.medsea.mimeutil.detector.MagicMimeEntryOperation;
					public static getOperationForNumberField(content: string): eu.medsea.mimeutil.detector.MagicMimeEntryOperation;
					public getOperationID(): string;
					public hashCode(): number;
					public static getOperationForStringField(content: string): eu.medsea.mimeutil.detector.MagicMimeEntryOperation;
				}
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export module detector {
				export class MagicMimeMimeDetector extends eu.medsea.mimeutil.detector.MimeDetector {
					public static class: java.lang.Class<eu.medsea.mimeutil.detector.MagicMimeMimeDetector>;
					public static defaultLocations: string[];
					public getMimeTypesFile(param0: java.io.File): java.util.Collection<any>;
					public getMimeTypesInputStream(param0: java.io.InputStream): java.util.Collection<any>;
					public constructor();
					public getMimeTypesFileName(param0: string): java.util.Collection<any>;
					public getMimeTypesByteArray(param0: number[]): java.util.Collection<any>;
					public getMimeTypesURL(param0: java.net.URL): java.util.Collection<any>;
					public getDescription(): string;
					public getMimeTypesFile(file: java.io.File): java.util.Collection<any>;
					public getMimeTypesURL(url: java.net.URL): java.util.Collection<any>;
					public getMimeTypesInputStream(_in_: java.io.InputStream): java.util.Collection<any>;
					public getMimeTypesFileName(fileName: string): java.util.Collection<any>;
					public getMimeTypesByteArray(data: number[]): java.util.Collection<any>;
				}
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export module detector {
				export class MatchingMagicMimeEntry extends java.lang.Object {
					public static class: java.lang.Class<eu.medsea.mimeutil.detector.MatchingMagicMimeEntry>;
					public toString(): string;
					public getMagicMimeEntry(): eu.medsea.mimeutil.detector.MagicMimeEntry;
					public getSpecificity(): number;
					public getMimeType(): eu.medsea.mimeutil.MimeType;
					public getRecursiveSubEntryCount(entry: eu.medsea.mimeutil.detector.MagicMimeEntry, subLevel: number): number;
					public constructor(magicMimeEntry: eu.medsea.mimeutil.detector.MagicMimeEntry);
				}
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export module detector {
				export abstract class MimeDetector extends java.lang.Object {
					public static class: java.lang.Class<eu.medsea.mimeutil.detector.MimeDetector>;
					public getMimeTypes(file: java.io.File): java.util.Collection<any>;
					public delete(): void;
					public static closeStream(_in_: java.io.InputStream): java.io.InputStream;
					public getMimeTypes(_in_: java.io.InputStream): java.util.Collection<any>;
					public getMimeTypesInputStream(param0: java.io.InputStream): java.util.Collection<any>;
					public getMimeTypesByteArray(param0: number[]): java.util.Collection<any>;
					public init(): void;
					public getMimeTypesURL(param0: java.net.URL): java.util.Collection<any>;
					public getMimeTypesFile(param0: java.io.File): java.util.Collection<any>;
					public getMimeTypes(fileName: string): java.util.Collection<any>;
					public constructor();
					public getName(): string;
					public getMimeTypes(url: java.net.URL): java.util.Collection<any>;
					public getMimeTypesFileName(param0: string): java.util.Collection<any>;
					public getMimeTypes(data: number[]): java.util.Collection<any>;
					public getDescription(): string;
				}
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export module detector {
				export class OpendesktopMimeDetector extends eu.medsea.mimeutil.detector.MimeDetector {
					public static class: java.lang.Class<eu.medsea.mimeutil.detector.OpendesktopMimeDetector>;
					public delete(): void;
					public getMimeTypesInputStream(param0: java.io.InputStream): java.util.Collection<any>;
					public getMimeTypesByteArray(param0: number[]): java.util.Collection<any>;
					public getMimeTypesURL(param0: java.net.URL): java.util.Collection<any>;
					public getMimeTypesFile(file: java.io.File): java.util.Collection<any>;
					public getMimeTypesFileName(fileName: string): java.util.Collection<any>;
					public getMimeTypesInputStream(_in_: java.io.InputStream): java.util.Collection<any>;
					public dump(): string;
					public getMimeTypesFile(param0: java.io.File): java.util.Collection<any>;
					public constructor(mimeCacheFile: string);
					public constructor();
					public getMimeTypesFileName(param0: string): java.util.Collection<any>;
					public getDescription(): string;
					public getMimeTypesURL(url: java.net.URL): java.util.Collection<any>;
					public getMimeTypesByteArray(data: number[]): java.util.Collection<any>;
				}
				export module OpendesktopMimeDetector {
					export class WeightedMimeType extends eu.medsea.mimeutil.MimeType {
						public static class: java.lang.Class<eu.medsea.mimeutil.detector.OpendesktopMimeDetector.WeightedMimeType>;
					}
				}
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export module detector {
				export class WindowsRegistryMimeDetector extends eu.medsea.mimeutil.detector.MimeDetector {
					public static class: java.lang.Class<eu.medsea.mimeutil.detector.WindowsRegistryMimeDetector>;
					public getMimeTypesFile(param0: java.io.File): java.util.Collection<any>;
					public getMimeTypesInputStream(param0: java.io.InputStream): java.util.Collection<any>;
					public constructor();
					public getMimeTypesFileName(param0: string): java.util.Collection<any>;
					public getMimeTypesByteArray(param0: number[]): java.util.Collection<any>;
					public getMimeTypesURL(param0: java.net.URL): java.util.Collection<any>;
					public getDescription(): string;
					public getMimeTypesFile(file: java.io.File): java.util.Collection<any>;
					public getMimeTypesURL(url: java.net.URL): java.util.Collection<any>;
					public getMimeTypesFileName(fileName: string): java.util.Collection<any>;
					public getMimeTypesInputStream(_in_: java.io.InputStream): java.util.Collection<any>;
					public getMimeTypesByteArray(data: number[]): java.util.Collection<any>;
				}
				export module WindowsRegistryMimeDetector {
					export class StreamReader extends java.lang.Thread {
						public static class: java.lang.Class<eu.medsea.mimeutil.detector.WindowsRegistryMimeDetector.StreamReader>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module mimeutil {
			export module handler {
				export class TextMimeHandler extends java.lang.Object {
					public static class: java.lang.Class<eu.medsea.mimeutil.handler.TextMimeHandler>;
					/**
					 * Constructs a new instance of the eu.medsea.mimeutil.handler.TextMimeHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						handle(param0: eu.medsea.mimeutil.TextMimeType, param1: string): boolean;
					});
					public constructor();
					public handle(param0: eu.medsea.mimeutil.TextMimeType, param1: string): boolean;
				}
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module util {
			export class EncodingGuesser extends java.lang.Object {
				public static class: java.lang.Class<eu.medsea.util.EncodingGuesser>;
				public static getDefaultEncoding(): string;
				public static compareByteArrays(a: number[], aOffset: number, b: number[], bOffset: number, length: number): boolean;
				public static getByteArraySubArray(a: number[], offset: number, length: number): number[];
				public static removeEncoding(encoding: string): boolean;
				public constructor();
				public static setSupportedEncodings(encodings: java.util.Collection<any>): java.util.Collection<any>;
				public static getValidEncodings(encodings: string[]): java.util.Collection<any>;
				public static getCanonicalEncodingNamesSupportedByJVM(): java.util.Collection<any>;
				public static getPossibleEncodings(data: number[]): java.util.Collection<any>;
				public static getSupportedEncodings(): java.util.Collection<any>;
				public static isKnownEncoding(encoding: string): boolean;
				public static getLengthBOM(encoding: string, data: number[]): number;
				public static removeEncodings(encodings: string[]): boolean;
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module util {
			export class StringUtil extends java.lang.Object {
				public static class: java.lang.Class<eu.medsea.util.StringUtil>;
				public static getHexString(raw: number[]): string;
				public static toStringArrayToString(array: string[]): string;
				public constructor();
				public static contains(target: string, content: string): boolean;
			}
		}
	}
}

declare module eu {
	export module medsea {
		export module util {
			export class ZipJarUtil extends java.lang.Object {
				public static class: java.lang.Class<eu.medsea.util.ZipJarUtil>;
				public static getInputStreamForURL(url: java.net.URL): java.io.InputStream;
				public static getEntries(fileName: string): java.util.Collection<any>;
				public static getEntries(file: java.io.File): java.util.Collection<any>;
				public static getEntries(url: java.net.URL): java.util.Collection<any>;
				public static main(args: string[]): void;
				public constructor();
				public static getEntries(zipFile: java.util.zip.ZipFile): java.util.Collection<any>;
			}
		}
	}
}

//Generics information:

