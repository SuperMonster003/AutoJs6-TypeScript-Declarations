declare module com {
	export module sun {
		export module activation {
			export module registries {
				export class LineTokenizer extends java.lang.Object {
					public static class: java.lang.Class<com.sun.activation.registries.LineTokenizer>;
					public constructor(str: string);
					public pushToken(token: string): void;
					public nextToken(): string;
					public hasMoreTokens(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module activation {
			export module registries {
				export class LogSupport extends java.lang.Object {
					public static class: java.lang.Class<com.sun.activation.registries.LogSupport>;
					public static log(msg: string): void;
					public static log(msg: string, t: java.lang.Throwable): void;
					public static isLoggable(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module activation {
			export module registries {
				export class MailcapFile extends java.lang.Object {
					public static class: java.lang.Class<com.sun.activation.registries.MailcapFile>;
					public constructor(new_fname: string);
					public getMailcapFallbackList(mime_type: string): java.util.Map<any,any>;
					public constructor();
					public constructor(is: java.io.InputStream);
					public static reportParseError(expectedToken: number, actualToken: number, actualTokenValue: string): void;
					public static reportParseError(expectedToken: number, otherExpectedToken: number, anotherExpectedToken: number, actualToken: number, actualTokenValue: string): void;
					public getMailcapList(mime_type: string): java.util.Map<any,any>;
					public getNativeCommands(mime_type: string): string[];
					public appendToMailcap(mail_cap: string): void;
					public parseLine(mailcapEntry: string): void;
					public static reportParseError(expectedToken: number, otherExpectedToken: number, actualToken: number, actualTokenValue: string): void;
					public getMimeTypes(): string[];
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module activation {
			export module registries {
				export class MailcapParseException extends java.lang.Exception {
					public static class: java.lang.Class<com.sun.activation.registries.MailcapParseException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(inInfo: string);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module activation {
			export module registries {
				export class MailcapTokenizer extends java.lang.Object {
					public static class: java.lang.Class<com.sun.activation.registries.MailcapTokenizer>;
					public static UNKNOWN_TOKEN: number;
					public static START_TOKEN: number;
					public static STRING_TOKEN: number;
					public static EOI_TOKEN: number;
					public static SLASH_TOKEN: number;
					public static SEMICOLON_TOKEN: number;
					public static EQUALS_TOKEN: number;
					public getCurrentToken(): number;
					public setIsAutoquoting(value: boolean): void;
					public static nameForToken(token: number): string;
					public getCurrentTokenValue(): string;
					public nextToken(): number;
					public constructor(inputString: string);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module activation {
			export module registries {
				export class MimeTypeEntry extends java.lang.Object {
					public static class: java.lang.Class<com.sun.activation.registries.MimeTypeEntry>;
					public getMIMEType(): string;
					public toString(): string;
					public getFileExtension(): string;
					public constructor(mime_type: string, file_ext: string);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module activation {
			export module registries {
				export class MimeTypeFile extends java.lang.Object {
					public static class: java.lang.Class<com.sun.activation.registries.MimeTypeFile>;
					public constructor(new_fname: string);
					public getMIMETypeString(file_ext: string): string;
					public constructor();
					public constructor(is: java.io.InputStream);
					public getMimeTypeEntry(file_ext: string): com.sun.activation.registries.MimeTypeEntry;
					public appendToRegistry(mime_types: string): void;
				}
			}
		}
	}
}

declare module javax {
	export module activation {
		export class ActivationDataFlavor {
			public static class: java.lang.Class<javax.activation.ActivationDataFlavor>;
			public setHumanPresentableName(humanPresentableName: string): void;
			public getHumanPresentableName(): string;
			public constructor(representationClass: java.lang.Class<any>, humanPresentableName: string);
			public constructor(mimeType: string, humanPresentableName: string);
			public getMimeType(): string;
			/** @deprecated */
			public normalizeMimeType(mimeType: string): string;
			public isMimeTypeEqual(mimeType: string): boolean;
			public equals(dataFlavor: myjava.awt.datatransfer.DataFlavor): boolean;
			/** @deprecated */
			public normalizeMimeTypeParameter(parameterName: string, parameterValue: string): string;
			public constructor(representationClass: java.lang.Class<any>, mimeType: string, humanPresentableName: string);
			public getRepresentationClass(): java.lang.Class<any>;
		}
	}
}

declare module javax {
	export module activation {
		export class CommandInfo extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.CommandInfo>;
			public getCommandObject(dh: javax.activation.DataHandler, loader: java.lang.ClassLoader): any;
			public constructor(verb: string, className: string);
			public getCommandClass(): string;
			public getCommandName(): string;
		}
	}
}

declare module javax {
	export module activation {
		export abstract class CommandMap extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.CommandMap>;
			public createDataContentHandler(param0: string): javax.activation.DataContentHandler;
			public static setDefaultCommandMap(commandMap: javax.activation.CommandMap): void;
			public getAllCommands(param0: string): javax.activation.CommandInfo[];
			public getAllCommands(mimeType: string, ds: javax.activation.DataSource): javax.activation.CommandInfo[];
			public getCommand(param0: string, param1: string): javax.activation.CommandInfo;
			public getCommand(mimeType: string, cmdName: string, ds: javax.activation.DataSource): javax.activation.CommandInfo;
			public constructor();
			public getPreferredCommands(param0: string): javax.activation.CommandInfo[];
			public getPreferredCommands(mimeType: string, ds: javax.activation.DataSource): javax.activation.CommandInfo[];
			public createDataContentHandler(mimeType: string, ds: javax.activation.DataSource): javax.activation.DataContentHandler;
			public getMimeTypes(): string[];
			public static getDefaultCommandMap(): javax.activation.CommandMap;
		}
	}
}

declare module javax {
	export module activation {
		export class CommandObject extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.CommandObject>;
			/**
			 * Constructs a new instance of the javax.activation.CommandObject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setCommandContext(param0: string, param1: javax.activation.DataHandler): void;
			});
			public constructor();
			public setCommandContext(param0: string, param1: javax.activation.DataHandler): void;
		}
	}
}

declare module javax {
	export module activation {
		export class DataContentHandler extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.DataContentHandler>;
			/**
			 * Constructs a new instance of the javax.activation.DataContentHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
				getTransferData(param0: myjava.awt.datatransfer.DataFlavor, param1: javax.activation.DataSource): any;
				getContent(param0: javax.activation.DataSource): any;
				writeTo(param0: any, param1: string, param2: java.io.OutputStream): void;
			});
			public constructor();
			public getContent(param0: javax.activation.DataSource): any;
			public writeTo(param0: any, param1: string, param2: java.io.OutputStream): void;
			public getTransferData(param0: myjava.awt.datatransfer.DataFlavor, param1: javax.activation.DataSource): any;
			public getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
		}
	}
}

declare module javax {
	export module activation {
		export class DataContentHandlerFactory extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.DataContentHandlerFactory>;
			/**
			 * Constructs a new instance of the javax.activation.DataContentHandlerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createDataContentHandler(param0: string): javax.activation.DataContentHandler;
			});
			public constructor();
			public createDataContentHandler(param0: string): javax.activation.DataContentHandler;
		}
	}
}

declare module javax {
	export module activation {
		export class DataHandler extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.DataHandler>;
			public setCommandMap(commandMap: javax.activation.CommandMap): void;
			public constructor(obj: any, mimeType: string);
			public static setDataContentHandlerFactory(newFactory: javax.activation.DataContentHandlerFactory): void;
			public getContentType(): string;
			public getTransferData(flavor: myjava.awt.datatransfer.DataFlavor): any;
			public writeTo(os: java.io.OutputStream): void;
			public constructor(url: java.net.URL);
			public isDataFlavorSupported(flavor: myjava.awt.datatransfer.DataFlavor): boolean;
			public getContent(): any;
			public getDataSource(): javax.activation.DataSource;
			public getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
			public constructor(ds: javax.activation.DataSource);
			public getName(): string;
			public getInputStream(): java.io.InputStream;
			public getBean(cmdinfo: javax.activation.CommandInfo): any;
			public getPreferredCommands(): javax.activation.CommandInfo[];
			public getAllCommands(): javax.activation.CommandInfo[];
			public getOutputStream(): java.io.OutputStream;
			public getCommand(cmdName: string): javax.activation.CommandInfo;
		}
	}
}

declare module javax {
	export module activation {
		export class DataHandlerDataSource extends java.lang.Object implements javax.activation.DataSource {
			public static class: java.lang.Class<javax.activation.DataHandlerDataSource>;
			public getInputStream(): java.io.InputStream;
			public getName(): string;
			public constructor(dh: javax.activation.DataHandler);
			public getOutputStream(): java.io.OutputStream;
			public getContentType(): string;
		}
	}
}

declare module javax {
	export module activation {
		export class DataSource extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.DataSource>;
			/**
			 * Constructs a new instance of the javax.activation.DataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getInputStream(): java.io.InputStream;
				getOutputStream(): java.io.OutputStream;
				getContentType(): string;
				getName(): string;
			});
			public constructor();
			public getInputStream(): java.io.InputStream;
			public getName(): string;
			public getOutputStream(): java.io.OutputStream;
			public getContentType(): string;
		}
	}
}

declare module javax {
	export module activation {
		export class DataSourceDataContentHandler extends java.lang.Object implements javax.activation.DataContentHandler {
			public static class: java.lang.Class<javax.activation.DataSourceDataContentHandler>;
			public constructor(dch: javax.activation.DataContentHandler, ds: javax.activation.DataSource);
			public getContent(param0: javax.activation.DataSource): any;
			public writeTo(param0: any, param1: string, param2: java.io.OutputStream): void;
			public getContent(ds: javax.activation.DataSource): any;
			public writeTo(obj: any, mimeType: string, os: java.io.OutputStream): void;
			public getTransferData(param0: myjava.awt.datatransfer.DataFlavor, param1: javax.activation.DataSource): any;
			public getTransferData(df: myjava.awt.datatransfer.DataFlavor, ds: javax.activation.DataSource): any;
			public getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
		}
	}
}

declare module javax {
	export module activation {
		export class FileDataSource extends java.lang.Object implements javax.activation.DataSource {
			public static class: java.lang.Class<javax.activation.FileDataSource>;
			public getFile(): java.io.File;
			public getInputStream(): java.io.InputStream;
			public getName(): string;
			public constructor(name: string);
			public setFileTypeMap(map: javax.activation.FileTypeMap): void;
			public getOutputStream(): java.io.OutputStream;
			public constructor(file: java.io.File);
			public getContentType(): string;
		}
	}
}

declare module javax {
	export module activation {
		export abstract class FileTypeMap extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.FileTypeMap>;
			public getContentType(param0: java.io.File): string;
			public static setDefaultFileTypeMap(map: javax.activation.FileTypeMap): void;
			public constructor();
			public getContentType(param0: string): string;
			public static getDefaultFileTypeMap(): javax.activation.FileTypeMap;
		}
	}
}

declare module javax {
	export module activation {
		export class MailcapCommandMap extends javax.activation.CommandMap {
			public static class: java.lang.Class<javax.activation.MailcapCommandMap>;
			public getAllCommands(mimeType: string, ds: javax.activation.DataSource): javax.activation.CommandInfo[];
			public getCommand(mimeType: string, cmdName: string): javax.activation.CommandInfo;
			public constructor(is: java.io.InputStream);
			public getAllCommands(mimeType: string): javax.activation.CommandInfo[];
			public getNativeCommands(mimeType: string): string[];
			public constructor();
			public getMimeTypes(): string[];
			public constructor(fileName: string);
			public addMailcap(mail_cap: string): void;
			public createDataContentHandler(param0: string): javax.activation.DataContentHandler;
			public createDataContentHandler(mimeType: string): javax.activation.DataContentHandler;
			public getAllCommands(param0: string): javax.activation.CommandInfo[];
			public getPreferredCommands(mimeType: string): javax.activation.CommandInfo[];
			public getCommand(param0: string, param1: string): javax.activation.CommandInfo;
			public getCommand(mimeType: string, cmdName: string, ds: javax.activation.DataSource): javax.activation.CommandInfo;
			public getPreferredCommands(param0: string): javax.activation.CommandInfo[];
			public getPreferredCommands(mimeType: string, ds: javax.activation.DataSource): javax.activation.CommandInfo[];
			public createDataContentHandler(mimeType: string, ds: javax.activation.DataSource): javax.activation.DataContentHandler;
		}
	}
}

declare module javax {
	export module activation {
		export class MimeType extends java.lang.Object implements java.io.Externalizable {
			public static class: java.lang.Class<javax.activation.MimeType>;
			public getPrimaryType(): string;
			public readExternal(_in_: java.io.ObjectInput): void;
			public setSubType(sub: string): void;
			public constructor();
			public writeExternal(param0: java.io.ObjectOutput): void;
			public setPrimaryType(primary: string): void;
			public setParameter(name: string, value: string): void;
			public getParameters(): javax.activation.MimeTypeParameterList;
			public match(rawdata: string): boolean;
			public getParameter(name: string): string;
			public getSubType(): string;
			public toString(): string;
			public writeExternal(out: java.io.ObjectOutput): void;
			public readExternal(param0: java.io.ObjectInput): void;
			public getBaseType(): string;
			public constructor(primary: string, sub: string);
			public removeParameter(name: string): void;
			public constructor(rawdata: string);
			public match(type: javax.activation.MimeType): boolean;
		}
	}
}

declare module javax {
	export module activation {
		export class MimeTypeParameterList extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.MimeTypeParameterList>;
			public get(name: string): string;
			public toString(): string;
			public size(): number;
			public isEmpty(): boolean;
			public remove(name: string): void;
			public getNames(): java.util.Enumeration<any>;
			public constructor();
			public constructor(parameterList: string);
			public parse(parameterList: string): void;
			public set(name: string, value: string): void;
		}
	}
}

declare module javax {
	export module activation {
		export class MimeTypeParseException extends java.lang.Exception {
			public static class: java.lang.Class<javax.activation.MimeTypeParseException>;
			public constructor(message: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor(s: string);
			public constructor();
		}
	}
}

declare module javax {
	export module activation {
		export class MimetypesFileTypeMap extends javax.activation.FileTypeMap {
			public static class: java.lang.Class<javax.activation.MimetypesFileTypeMap>;
			public getContentType(param0: java.io.File): string;
			public getContentType(filename: string): string;
			public getContentType(f: java.io.File): string;
			public constructor(is: java.io.InputStream);
			public constructor();
			public getContentType(param0: string): string;
			public constructor(mimeTypeFileName: string);
			public addMimeTypes(mime_types: string): void;
		}
	}
}

declare module javax {
	export module activation {
		export class ObjectDataContentHandler extends java.lang.Object implements javax.activation.DataContentHandler {
			public static class: java.lang.Class<javax.activation.ObjectDataContentHandler>;
			public getContent(param0: javax.activation.DataSource): any;
			public writeTo(param0: any, param1: string, param2: java.io.OutputStream): void;
			public getDCH(): javax.activation.DataContentHandler;
			public constructor(dch: javax.activation.DataContentHandler, obj: any, mimeType: string);
			public getContent(ds: javax.activation.DataSource): any;
			public writeTo(obj: any, mimeType: string, os: java.io.OutputStream): void;
			public getTransferData(param0: myjava.awt.datatransfer.DataFlavor, param1: javax.activation.DataSource): any;
			public getTransferData(df: myjava.awt.datatransfer.DataFlavor, ds: javax.activation.DataSource): any;
			public getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
		}
	}
}

declare module javax {
	export module activation {
		export class SecuritySupport extends java.lang.Object {
			public static class: java.lang.Class<javax.activation.SecuritySupport>;
			public static getContextClassLoader(): java.lang.ClassLoader;
			public static getSystemResources(name: string): java.net.URL[];
			public static openStream(url: java.net.URL): java.io.InputStream;
			public static getResourceAsStream(c: java.lang.Class<any>, name: string): java.io.InputStream;
			public static getResources(cl: java.lang.ClassLoader, name: string): java.net.URL[];
		}
	}
}

declare module javax {
	export module activation {
		export class URLDataSource extends java.lang.Object implements javax.activation.DataSource {
			public static class: java.lang.Class<javax.activation.URLDataSource>;
			public getName(): string;
			public getInputStream(): java.io.InputStream;
			public getURL(): java.net.URL;
			public getOutputStream(): java.io.OutputStream;
			public getContentType(): string;
			public constructor(url: java.net.URL);
		}
	}
}

declare module javax {
	export module activation {
		export class UnsupportedDataTypeException extends java.io.IOException {
			public static class: java.lang.Class<javax.activation.UnsupportedDataTypeException>;
			public constructor(message: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor(s: string);
			public constructor();
		}
	}
}

//Generics information:

