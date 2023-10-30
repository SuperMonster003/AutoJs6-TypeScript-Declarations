declare module com {
	export module sun {
		export module mail {
			export module dsn {
				export class DeliveryStatus extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.dsn.DeliveryStatus>;
					public messageDSN: javax.mail.internet.InternetHeaders;
					public recipientDSN: javax.mail.internet.InternetHeaders[];
					public toString(): string;
					public writeTo(os: java.io.OutputStream): void;
					public constructor();
					public getRecipientDSNCount(): number;
					public constructor(is: java.io.InputStream);
					public setMessageDSN(messageDSN: javax.mail.internet.InternetHeaders): void;
					public getMessageDSN(): javax.mail.internet.InternetHeaders;
					public addRecipientDSN(h: javax.mail.internet.InternetHeaders): void;
					public getRecipientDSN(n: number): javax.mail.internet.InternetHeaders;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module dsn {
				export class MessageHeaders extends javax.mail.internet.MimeMessage {
					public static class: java.lang.Class<com.sun.mail.dsn.MessageHeaders>;
					public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					public setDescription(param0: string): void;
					public addHeader(name: string, value: string): void;
					public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					public getNonMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
					public getHeader(param0: string, param1: string): string;
					public getSize(): number;
					public setText(param0: string): void;
					public constructor();
					public getMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
					public removeHeader(name: string): void;
					public getInputStream(): java.io.InputStream;
					public constructor(folder: javax.mail.Folder, is: java.io.InputStream, msgnum: number);
					public setDescription(description: string, charset: string): void;
					public getHeader(name: string): string[];
					public getNonMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					public constructor(is: java.io.InputStream);
					public getNonMatchingHeaders(names: string[]): java.util.Enumeration<any>;
					public getHeader(param0: string): string[];
					public constructor(folder: javax.mail.Folder, msgnum: number);
					public setContentLanguage(languages: string[]): void;
					public setHeader(param0: string, param1: string): void;
					public setText(text: string, charset: string): void;
					public constructor(source: javax.mail.internet.MimeMessage);
					public writeTo(param0: java.io.OutputStream): void;
					public removeHeader(param0: string): void;
					public getContentID(): string;
					public setDescription(description: string): void;
					public setFileName(filename: string): void;
					public getContentStream(): java.io.InputStream;
					public addHeaderLine(param0: string): void;
					public getDescription(): string;
					public setText(text: string): void;
					public getLineCount(): number;
					public getMatchingHeaders(names: string[]): java.util.Enumeration<any>;
					public constructor(session: javax.mail.Session, is: java.io.InputStream);
					public getDataHandler(): javax.activation.DataHandler;
					public isMimeType(param0: string): boolean;
					public setDataHandler(param0: javax.activation.DataHandler): void;
					public setDisposition(param0: string): void;
					public setContent(mp: javax.mail.Multipart): void;
					public setHeader(name: string, value: string): void;
					public setContentMD5(param0: string): void;
					public constructor(headers: javax.mail.internet.InternetHeaders);
					public getDisposition(): string;
					public addHeader(param0: string, param1: string): void;
					public getHeader(name: string, delimiter: string): string;
					public isMimeType(mimeType: string): boolean;
					public getMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					public getFileName(): string;
					public writeTo(os: java.io.OutputStream): void;
					public constructor(session: javax.mail.Session);
					public getEncoding(): string;
					public setContent(o: any, type: string): void;
					public setText(param0: string, param1: string, param2: string): void;
					public getContentType(): string;
					public getContent(): any;
					public setText(param0: string, param1: string): void;
					public setContent(param0: javax.mail.Multipart): void;
					public setFileName(param0: string): void;
					public setContent(param0: any, param1: string): void;
					public constructor(folder: javax.mail.Folder, headers: javax.mail.internet.InternetHeaders, content: number[], msgnum: number);
					public setDataHandler(dh: javax.activation.DataHandler): void;
					public addHeaderLine(line: string): void;
					public writeTo(os: java.io.OutputStream, ignoreList: string[]): void;
					public setText(text: string, charset: string, subtype: string): void;
					public getAllHeaderLines(): java.util.Enumeration<any>;
					public getContentMD5(): string;
					public getContentLanguage(): string[];
					public setDisposition(disposition: string): void;
					public setContentMD5(md5: string): void;
					public getAllHeaders(): java.util.Enumeration<any>;
					public setContentLanguage(param0: string[]): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module dsn {
				export class MultipartReport extends javax.mail.internet.MimeMultipart {
					public static class: java.lang.Class<com.sun.mail.dsn.MultipartReport>;
					public constructed: boolean;
					public setTextBodyPart(mbp: javax.mail.internet.MimeBodyPart): void;
					public getTextBodyPart(): javax.mail.internet.MimeBodyPart;
					public getText(): string;
					public getDeliveryStatus(): com.sun.mail.dsn.DeliveryStatus;
					public removeBodyPart(part: javax.mail.BodyPart): boolean;
					public addBodyPart(part: javax.mail.BodyPart): void;
					public setSubType(subtype: string): void;
					public constructor(text: string, status: com.sun.mail.dsn.DeliveryStatus, hdr: javax.mail.internet.InternetHeaders);
					public setReturnedMessage(msg: javax.mail.internet.MimeMessage): void;
					public constructor(text: string, status: com.sun.mail.dsn.DeliveryStatus, msg: javax.mail.internet.MimeMessage);
					public setDeliveryStatus(status: com.sun.mail.dsn.DeliveryStatus): void;
					public constructor(text: string, status: com.sun.mail.dsn.DeliveryStatus);
					public removeBodyPart(index: number): void;
					public getReturnedMessage(): javax.mail.internet.MimeMessage;
					public constructor();
					public constructor(ds: javax.activation.DataSource);
					public constructor(subtype: string);
					public addBodyPart(part: javax.mail.BodyPart, index: number): void;
					public setText(text: string): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module dsn {
				export class message_deliverystatus extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.dsn.message_deliverystatus>;
					public constructor();
					public getTransferData(df: myjava.awt.datatransfer.DataFlavor, ds: javax.activation.DataSource): any;
					public getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
					public writeTo(obj: any, mimeType: string, os: java.io.OutputStream): void;
					public getContent(ds: javax.activation.DataSource): any;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module dsn {
				export class multipart_report extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.dsn.multipart_report>;
					public constructor();
					public getTransferData(df: myjava.awt.datatransfer.DataFlavor, ds: javax.activation.DataSource): any;
					public getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
					public writeTo(obj: any, mimeType: string, os: java.io.OutputStream): void;
					public getContent(ds: javax.activation.DataSource): any;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module dsn {
				export class text_rfc822headers extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.dsn.text_rfc822headers>;
					public constructor();
					public writeTo(obj: any, type: string, os: java.io.OutputStream): void;
					public getTransferData(df: myjava.awt.datatransfer.DataFlavor, ds: javax.activation.DataSource): any;
					public getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
					public getContent(ds: javax.activation.DataSource): any;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module handlers {
				export class message_rfc822 extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.handlers.message_rfc822>;
					public constructor();
					public getTransferData(df: myjava.awt.datatransfer.DataFlavor, ds: javax.activation.DataSource): any;
					public getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
					public writeTo(obj: any, mimeType: string, os: java.io.OutputStream): void;
					public getContent(ds: javax.activation.DataSource): any;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module handlers {
				export class multipart_mixed extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.handlers.multipart_mixed>;
					public constructor();
					public getTransferData(df: myjava.awt.datatransfer.DataFlavor, ds: javax.activation.DataSource): any;
					public getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
					public writeTo(obj: any, mimeType: string, os: java.io.OutputStream): void;
					public getContent(ds: javax.activation.DataSource): any;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module handlers {
				export class text_html extends com.sun.mail.handlers.text_plain {
					public static class: java.lang.Class<com.sun.mail.handlers.text_html>;
					public constructor();
					public getDF(): javax.activation.ActivationDataFlavor;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module handlers {
				export class text_plain extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.handlers.text_plain>;
					public constructor();
					public writeTo(obj: any, type: string, os: java.io.OutputStream): void;
					public getDF(): javax.activation.ActivationDataFlavor;
					public getTransferData(df: myjava.awt.datatransfer.DataFlavor, ds: javax.activation.DataSource): any;
					public getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
					public getContent(ds: javax.activation.DataSource): any;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module handlers {
				export class text_xml extends com.sun.mail.handlers.text_plain {
					public static class: java.lang.Class<com.sun.mail.handlers.text_xml>;
					public constructor();
					public getDF(): javax.activation.ActivationDataFlavor;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class AString extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.iap.AString>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class Argument extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.iap.Argument>;
					public items: java.util.Vector<any>;
					public writeBytes(b: java.io.ByteArrayOutputStream): void;
					public writeBytes(b: com.sun.mail.iap.Literal): void;
					public constructor();
					public writeNumber(i: number): void;
					public writeAtom(s: string): void;
					public writeArgument(c: com.sun.mail.iap.Argument): void;
					public writeString(s: string): void;
					public append(arg: com.sun.mail.iap.Argument): void;
					public writeString(s: string, charset: string): void;
					public write(protocol: com.sun.mail.iap.Protocol): void;
					public writeBytes(b: number[]): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class Atom extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.iap.Atom>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class BadCommandException extends com.sun.mail.iap.ProtocolException {
					public static class: java.lang.Class<com.sun.mail.iap.BadCommandException>;
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(s: string);
					public constructor(r: com.sun.mail.iap.Response);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class ByteArray extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.iap.ByteArray>;
					public getCount(): number;
					public constructor(b: number[], start: number, count: number);
					public getBytes(): number[];
					public grow(incr: number): void;
					public constructor(size: number);
					public getNewBytes(): number[];
					public getStart(): number;
					public setCount(count: number): void;
					public toByteArrayInputStream(): java.io.ByteArrayInputStream;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class CommandFailedException extends com.sun.mail.iap.ProtocolException {
					public static class: java.lang.Class<com.sun.mail.iap.CommandFailedException>;
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(s: string);
					public constructor(r: com.sun.mail.iap.Response);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class ConnectionException extends com.sun.mail.iap.ProtocolException {
					public static class: java.lang.Class<com.sun.mail.iap.ConnectionException>;
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor(p: com.sun.mail.iap.Protocol, r: com.sun.mail.iap.Response);
					public constructor();
					public constructor(s: string);
					public constructor(r: com.sun.mail.iap.Response);
					public constructor(cause: java.lang.Throwable);
					public getProtocol(): com.sun.mail.iap.Protocol;
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class Literal extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.iap.Literal>;
					/**
					 * Constructs a new instance of the com.sun.mail.iap.Literal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						size(): number;
						writeTo(param0: java.io.OutputStream): void;
					});
					public constructor();
					public writeTo(param0: java.io.OutputStream): void;
					public size(): number;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class LiteralException extends com.sun.mail.iap.ProtocolException {
					public static class: java.lang.Class<com.sun.mail.iap.LiteralException>;
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(s: string);
					public constructor(r: com.sun.mail.iap.Response);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class ParsingException extends com.sun.mail.iap.ProtocolException {
					public static class: java.lang.Class<com.sun.mail.iap.ParsingException>;
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(s: string);
					public constructor(r: com.sun.mail.iap.Response);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class Protocol extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.iap.Protocol>;
					public host: string;
					public debug: boolean;
					public quote: boolean;
					public out: java.io.PrintStream;
					public props: java.util.Properties;
					public prefix: string;
					public getInputStream(): com.sun.mail.iap.ResponseInputStream;
					public constructor(host: string, port: number, debug: boolean, out: java.io.PrintStream, props: java.util.Properties, prefix: string, isSSL: boolean);
					public supportsNonSyncLiterals(): boolean;
					public startTLS(cmd: string): void;
					public finalize(): void;
					public readResponse(): com.sun.mail.iap.Response;
					public constructor(_in_: java.io.InputStream, out: java.io.OutputStream, debug: boolean);
					public removeResponseHandler(h: com.sun.mail.iap.ResponseHandler): void;
					public addResponseHandler(h: com.sun.mail.iap.ResponseHandler): void;
					public getResponseBuffer(): com.sun.mail.iap.ByteArray;
					public command(command: string, args: com.sun.mail.iap.Argument): com.sun.mail.iap.Response[];
					public handleResult(response: com.sun.mail.iap.Response): void;
					public getTimestamp(): number;
					public getOutputStream(): java.io.OutputStream;
					public processGreeting(r: com.sun.mail.iap.Response): void;
					public simpleCommand(cmd: string, args: com.sun.mail.iap.Argument): void;
					public writeCommand(command: string, args: com.sun.mail.iap.Argument): string;
					public disconnect(): void;
					public notifyResponseHandlers(responses: com.sun.mail.iap.Response[]): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class ProtocolException extends java.lang.Exception {
					public static class: java.lang.Class<com.sun.mail.iap.ProtocolException>;
					public response: com.sun.mail.iap.Response;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(s: string);
					public constructor(r: com.sun.mail.iap.Response);
					public getResponse(): com.sun.mail.iap.Response;
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class Response extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.iap.Response>;
					public index: number;
					public pindex: number;
					public size: number;
					public buffer: number[];
					public type: number;
					public tag: string;
					public static TAG_MASK: number;
					public static CONTINUATION: number;
					public static TAGGED: number;
					public static UNTAGGED: number;
					public static TYPE_MASK: number;
					public static OK: number;
					public static NO: number;
					public static BAD: number;
					public static BYE: number;
					public static SYNTHETIC: number;
					public getType(): number;
					public isNO(): boolean;
					public readLong(): number;
					public skipSpaces(): void;
					public isOK(): boolean;
					public toString(): string;
					public readNumber(): number;
					public readString(delim: string): string;
					public isUnTagged(): boolean;
					public constructor(p: com.sun.mail.iap.Protocol);
					public readBytes(): java.io.ByteArrayInputStream;
					public isSynthetic(): boolean;
					public isContinuation(): boolean;
					public readAtom(delim: string): string;
					public skipToken(): void;
					public readByteArray(): com.sun.mail.iap.ByteArray;
					public getRest(): string;
					public reset(): void;
					public constructor(s: string);
					public constructor(r: com.sun.mail.iap.Response);
					public skip(count: number): void;
					public readByte(): number;
					public getTag(): string;
					public static byeResponse(ex: java.lang.Exception): com.sun.mail.iap.Response;
					public isTagged(): boolean;
					public isBYE(): boolean;
					public isBAD(): boolean;
					public readStringList(): string[];
					public readAtomString(): string;
					public peekByte(): number;
					public readAtom(): string;
					public readString(): string;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class ResponseHandler extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.iap.ResponseHandler>;
					/**
					 * Constructs a new instance of the com.sun.mail.iap.ResponseHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						handleResponse(param0: com.sun.mail.iap.Response): void;
					});
					public constructor();
					public handleResponse(param0: com.sun.mail.iap.Response): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module iap {
				export class ResponseInputStream extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.iap.ResponseInputStream>;
					public constructor(_in_: java.io.InputStream);
					public readResponse(ba: com.sun.mail.iap.ByteArray): com.sun.mail.iap.ByteArray;
					public readResponse(): com.sun.mail.iap.ByteArray;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class ACL extends java.lang.Object implements java.lang.Cloneable {
					public static class: java.lang.Class<com.sun.mail.imap.ACL>;
					public constructor(name: string);
					public clone(): any;
					public getName(): string;
					public getRights(): com.sun.mail.imap.Rights;
					public constructor(name: string, rights: com.sun.mail.imap.Rights);
					public setRights(rights: com.sun.mail.imap.Rights): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class AppendUID extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.imap.AppendUID>;
					public uidvalidity: number;
					public uid: number;
					public constructor(uidvalidity: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class DefaultFolder extends com.sun.mail.imap.IMAPFolder {
					public static class: java.lang.Class<com.sun.mail.imap.DefaultFolder>;
					public getUIDValidity(): number;
					public constructor(fullName: string, separator: string, store: com.sun.mail.imap.IMAPStore);
					public getMessagesByUID(uids: number[]): javax.mail.Message[];
					public appendMessages(msgs: javax.mail.Message[]): void;
					public getUID(message: javax.mail.Message): number;
					public getMessageByUID(uid: number): javax.mail.Message;
					public getMessagesByUID(param0: number[]): javax.mail.Message[];
					public hasNewMessages(): boolean;
					public renameTo(f: javax.mail.Folder): boolean;
					public handleResponse(param0: com.sun.mail.iap.Response): void;
					public getFolder(name: string): javax.mail.Folder;
					public constructor(fullName: string, separator: string, store: com.sun.mail.imap.IMAPStore, isNamespace: boolean);
					public constructor(li: com.sun.mail.imap.protocol.ListInfo, store: com.sun.mail.imap.IMAPStore);
					public list(pattern: string): javax.mail.Folder[];
					public listSubscribed(): javax.mail.Folder[];
					public getMessageByUID(param0: number): javax.mail.Message;
					public constructor(store: javax.mail.Store);
					public getParent(): javax.mail.Folder;
					public listSubscribed(pattern: string): javax.mail.Folder[];
					public handleResponse(r: com.sun.mail.iap.Response): void;
					public getMessagesByUID(start: number, param1: number): javax.mail.Message[];
					public getMessagesByUID(param0: number, param1: number): javax.mail.Message[];
					public getUID(param0: javax.mail.Message): number;
					public constructor(store: com.sun.mail.imap.IMAPStore);
					public list(): javax.mail.Folder[];
					public getName(): string;
					public expunge(): javax.mail.Message[];
					public delete(recurse: boolean): boolean;
					public expunge(msgs: javax.mail.Message[]): javax.mail.Message[];
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class IMAPBodyPart extends javax.mail.internet.MimeBodyPart {
					public static class: java.lang.Class<com.sun.mail.imap.IMAPBodyPart>;
					public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					public setDescription(param0: string): void;
					public addHeader(name: string, value: string): void;
					public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					public getNonMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
					public getHeader(param0: string, param1: string): string;
					public getSize(): number;
					public setText(param0: string): void;
					public constructor();
					public getMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
					public removeHeader(name: string): void;
					public getInputStream(): java.io.InputStream;
					public setDescription(description: string, charset: string): void;
					public getHeader(name: string): string[];
					public getNonMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					public constructor(is: java.io.InputStream);
					public getNonMatchingHeaders(names: string[]): java.util.Enumeration<any>;
					public getHeader(param0: string): string[];
					public setContentLanguage(languages: string[]): void;
					public setHeader(param0: string, param1: string): void;
					public setText(text: string, charset: string): void;
					public writeTo(param0: java.io.OutputStream): void;
					public removeHeader(param0: string): void;
					public getContentID(): string;
					public setDescription(description: string): void;
					public setFileName(filename: string): void;
					public getContentStream(): java.io.InputStream;
					public addHeaderLine(param0: string): void;
					public getDescription(): string;
					public setText(text: string): void;
					public getLineCount(): number;
					public constructor(headers: javax.mail.internet.InternetHeaders, content: number[]);
					public getMatchingHeaders(names: string[]): java.util.Enumeration<any>;
					public getDataHandler(): javax.activation.DataHandler;
					public isMimeType(param0: string): boolean;
					public setDataHandler(param0: javax.activation.DataHandler): void;
					public setDataHandler(content: javax.activation.DataHandler): void;
					public constructor(bs: com.sun.mail.imap.protocol.BODYSTRUCTURE, sid: string, message: com.sun.mail.imap.IMAPMessage);
					public setContent(mp: javax.mail.Multipart): void;
					public setHeader(name: string, value: string): void;
					public setDisposition(param0: string): void;
					public setContentMD5(param0: string): void;
					public getDisposition(): string;
					public addHeader(param0: string, param1: string): void;
					public getHeader(name: string, delimiter: string): string;
					public isMimeType(mimeType: string): boolean;
					public getMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					public getFileName(): string;
					public writeTo(os: java.io.OutputStream): void;
					public getEncoding(): string;
					public setContent(o: any, type: string): void;
					public setText(param0: string, param1: string, param2: string): void;
					public getContentType(): string;
					public updateHeaders(): void;
					public getContent(): any;
					public setText(param0: string, param1: string): void;
					public setContent(param0: javax.mail.Multipart): void;
					public setFileName(param0: string): void;
					public setContent(param0: any, param1: string): void;
					public setDataHandler(dh: javax.activation.DataHandler): void;
					public addHeaderLine(line: string): void;
					public setText(text: string, charset: string, subtype: string): void;
					public getAllHeaderLines(): java.util.Enumeration<any>;
					public getContentMD5(): string;
					public getContentLanguage(): string[];
					public setDisposition(disposition: string): void;
					public setContentMD5(md5: string): void;
					public getAllHeaders(): java.util.Enumeration<any>;
					public setContentLanguage(param0: string[]): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class IMAPFolder extends javax.mail.Folder implements javax.mail.UIDFolder, com.sun.mail.iap.ResponseHandler {
					public static class: java.lang.Class<com.sun.mail.imap.IMAPFolder>;
					public fullName: string;
					public name: string;
					public type: number;
					public separator: string;
					public availableFlags: javax.mail.Flags;
					public permanentFlags: javax.mail.Flags;
					public isNamespace: boolean;
					public attributes: string[];
					public protocol: com.sun.mail.imap.protocol.IMAPProtocol;
					public messageCache: java.util.Vector<any>;
					public messageCacheLock: any;
					public uidTable: java.util.Hashtable<any,any>;
					public static UNKNOWN_SEPARATOR: string;
					public getType(): number;
					public getPermanentFlags(): javax.mail.Flags;
					public constructor(fullName: string, separator: string, store: com.sun.mail.imap.IMAPStore);
					public getStoreProtocol(): com.sun.mail.imap.protocol.IMAPProtocol;
					public getUIDNext(): number;
					public getUID(message: javax.mail.Message): number;
					public hasNewMessages(): boolean;
					public list(param0: string): javax.mail.Folder[];
					public getMessage(msgnum: number): javax.mail.Message;
					public getDeletedMessageCount(): number;
					public handleResponse(param0: com.sun.mail.iap.Response): void;
					public doCommand(cmd: com.sun.mail.imap.IMAPFolder.ProtocolCommand): any;
					public doCommandIgnoreFailure(cmd: com.sun.mail.imap.IMAPFolder.ProtocolCommand): any;
					public create(param0: number): boolean;
					public releaseStoreProtocol(p: com.sun.mail.imap.protocol.IMAPProtocol): void;
					public myRights(): com.sun.mail.imap.Rights;
					public setFlags(msgs: javax.mail.Message[], flag: javax.mail.Flags, value: boolean): void;
					public renameTo(param0: javax.mail.Folder): boolean;
					public constructor(li: com.sun.mail.imap.protocol.ListInfo, store: com.sun.mail.imap.IMAPStore);
					public list(pattern: string): javax.mail.Folder[];
					public getSeparator(): string;
					public getMessageByUID(param0: number): javax.mail.Message;
					public constructor(store: javax.mail.Store);
					public listSubscribed(pattern: string): javax.mail.Folder[];
					public setFlags(msgnums: number[], flag: javax.mail.Flags, value: boolean): void;
					public getFolder(param0: string): javax.mail.Folder;
					public fetch(msgs: javax.mail.Message[], fp: javax.mail.FetchProfile): void;
					public getUID(param0: javax.mail.Message): number;
					public close(param0: boolean): void;
					public list(): javax.mail.Folder[];
					public search(term: javax.mail.search.SearchTerm, msgs: javax.mail.Message[]): javax.mail.Message[];
					public removeACL(name: string): void;
					public delete(recurse: boolean): boolean;
					public expunge(msgs: javax.mail.Message[]): javax.mail.Message[];
					public getUIDValidity(): number;
					public getMessagesByUID(uids: number[]): javax.mail.Message[];
					public doOptionalCommand(err: string, cmd: com.sun.mail.imap.IMAPFolder.ProtocolCommand): any;
					public appendMessages(msgs: javax.mail.Message[]): void;
					public addRights(acl: com.sun.mail.imap.ACL): void;
					public getMessageByUID(uid: number): javax.mail.Message;
					public setQuota(quota: javax.mail.Quota): void;
					public addMessages(msgs: javax.mail.Message[]): javax.mail.Message[];
					public getMessagesByUID(param0: number[]): javax.mail.Message[];
					public search(term: javax.mail.search.SearchTerm): javax.mail.Message[];
					public appendUIDMessages(msgs: javax.mail.Message[]): com.sun.mail.imap.AppendUID[];
					public open(mode: number): void;
					public isOpen(): boolean;
					public getAttributes(): string[];
					public renameTo(f: javax.mail.Folder): boolean;
					public doProtocolCommand(cmd: com.sun.mail.imap.IMAPFolder.ProtocolCommand): any;
					public removeRights(acl: com.sun.mail.imap.ACL): void;
					public getFolder(name: string): javax.mail.Folder;
					public getMessage(param0: number): javax.mail.Message;
					public open(param0: number): void;
					public listRights(name: string): com.sun.mail.imap.Rights[];
					public constructor(fullName: string, separator: string, store: com.sun.mail.imap.IMAPStore, isNamespace: boolean);
					public setFlags(start: number, end: number, flag: javax.mail.Flags, value: boolean): void;
					public getUnreadMessageCount(): number;
					public addACL(acl: com.sun.mail.imap.ACL): void;
					public listSubscribed(): javax.mail.Folder[];
					public getACL(): com.sun.mail.imap.ACL[];
					public idle(): void;
					public getFullName(): string;
					public getParent(): javax.mail.Folder;
					public delete(param0: boolean): boolean;
					public getMessageCount(): number;
					public exists(): boolean;
					public getNewMessageCount(): number;
					public appendMessages(param0: javax.mail.Message[]): void;
					public forceClose(): void;
					public getMessagesByUID(start: number, param1: number): javax.mail.Message[];
					public handleResponse(r: com.sun.mail.iap.Response): void;
					public isSubscribed(): boolean;
					public getMessagesByUID(param0: number, param1: number): javax.mail.Message[];
					public getName(): string;
					public setSubscribed(subscribe: boolean): void;
					public expunge(): javax.mail.Message[];
					public copyMessages(msgs: javax.mail.Message[], folder: javax.mail.Folder): void;
					public create(type: number): boolean;
					public getQuota(): javax.mail.Quota[];
					public close(expunge: boolean): void;
				}
				export module IMAPFolder {
					export class FetchProfileItem extends javax.mail.FetchProfile.Item {
						public static class: java.lang.Class<com.sun.mail.imap.IMAPFolder.FetchProfileItem>;
						public static HEADERS: com.sun.mail.imap.IMAPFolder.FetchProfileItem;
						public static SIZE: com.sun.mail.imap.IMAPFolder.FetchProfileItem;
						public constructor(name: string);
					}
					export class ProtocolCommand extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.IMAPFolder.ProtocolCommand>;
						/**
						 * Constructs a new instance of the com.sun.mail.imap.IMAPFolder$ProtocolCommand interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							doCommand(param0: com.sun.mail.imap.protocol.IMAPProtocol): any;
						});
						public constructor();
						public doCommand(param0: com.sun.mail.imap.protocol.IMAPProtocol): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class IMAPInputStream extends java.io.InputStream {
					public static class: java.lang.Class<com.sun.mail.imap.IMAPInputStream>;
					public available(): number;
					public read(): number;
					public read(b: number[], off: number, len: number): number;
					public constructor();
					public read(b: number[]): number;
					public close(): void;
					public constructor(msg: com.sun.mail.imap.IMAPMessage, section: string, max: number, peek: boolean);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class IMAPMessage extends javax.mail.internet.MimeMessage {
					public static class: java.lang.Class<com.sun.mail.imap.IMAPMessage>;
					public bs: com.sun.mail.imap.protocol.BODYSTRUCTURE;
					public envelope: com.sun.mail.imap.protocol.ENVELOPE;
					public sectionId: string;
					public setDescription(param0: string): void;
					public setFlags(flag: javax.mail.Flags, set: boolean): void;
					public addHeader(name: string, value: string): void;
					public getFetchBlockSize(): number;
					public getNonMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
					public getHeader(param0: string, param1: string): string;
					public setSubject(subject: string, charset: string): void;
					public getFrom(): javax.mail.Address[];
					public getSize(): number;
					public setFrom(): void;
					public setText(param0: string): void;
					public constructor();
					public getMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
					public removeHeader(name: string): void;
					public constructor(folder: javax.mail.Folder, is: java.io.InputStream, msgnum: number);
					public setDescription(description: string, charset: string): void;
					public setFrom(address: javax.mail.Address): void;
					public getNonMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					public setUID(uid: number): void;
					public getHeader(param0: string): string[];
					public setText(text: string, charset: string): void;
					public constructor(source: javax.mail.internet.MimeMessage);
					public writeTo(param0: java.io.OutputStream): void;
					public getContentID(): string;
					public setPeek(peek: boolean): void;
					public getDescription(): string;
					public setText(text: string): void;
					public getLineCount(): number;
					public getReceivedDate(): java.util.Date;
					public setExpunged(expunged: boolean): void;
					public getSubject(): string;
					public addRecipients(type: javax.mail.Message.RecipientType, addresses: string): void;
					public getPeek(): boolean;
					public setHeader(name: string, value: string): void;
					public setDisposition(param0: string): void;
					public setContentMD5(param0: string): void;
					public setRecipients(type: javax.mail.Message.RecipientType, addresses: string): void;
					public isSet(flag: javax.mail.Flags.Flag): boolean;
					public addHeader(param0: string, param1: string): void;
					public isMimeType(mimeType: string): boolean;
					public getReplyTo(): javax.mail.Address[];
					public getFileName(): string;
					public writeTo(os: java.io.OutputStream): void;
					public getEncoding(): string;
					public setText(param0: string, param1: string, param2: string): void;
					public getContentType(): string;
					public addFrom(addresses: javax.mail.Address[]): void;
					public getContent(): any;
					public setText(param0: string, param1: string): void;
					public setContent(param0: javax.mail.Multipart): void;
					public setFileName(param0: string): void;
					public setContent(param0: any, param1: string): void;
					public setMessageNumber(msgnum: number): void;
					public setDataHandler(dh: javax.activation.DataHandler): void;
					public writeTo(os: java.io.OutputStream, ignoreList: string[]): void;
					public getAllHeaderLines(): java.util.Enumeration<any>;
					public setContentMD5(md5: string): void;
					public getMessageID(): string;
					public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					public getFlags(): javax.mail.Flags;
					public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					public getUID(): number;
					public getInputStream(): java.io.InputStream;
					public getSequenceNumber(): number;
					public checkExpunged(): void;
					public getHeader(name: string): string[];
					public getNonMatchingHeaders(names: string[]): java.util.Enumeration<any>;
					public constructor(folder: javax.mail.Folder, msgnum: number);
					public setContentLanguage(languages: string[]): void;
					public setHeader(param0: string, param1: string): void;
					public removeHeader(param0: string): void;
					public forceCheckExpunged(): void;
					public getRecipients(type: javax.mail.Message.RecipientType): javax.mail.Address[];
					public setDescription(description: string): void;
					public setFileName(filename: string): void;
					public setRecipients(type: javax.mail.Message.RecipientType, addresses: javax.mail.Address[]): void;
					public getContentStream(): java.io.InputStream;
					public constructor(folder: com.sun.mail.imap.IMAPFolder, msgnum: number, seqnum: number);
					public setExpunged(set: boolean): void;
					public addHeaderLine(param0: string): void;
					public getMatchingHeaders(names: string[]): java.util.Enumeration<any>;
					public constructor(session: javax.mail.Session, is: java.io.InputStream);
					public getDataHandler(): javax.activation.DataHandler;
					public setSender(address: javax.mail.Address): void;
					public setReplyTo(addresses: javax.mail.Address[]): void;
					public setSequenceNumber(seqnum: number): void;
					public isMimeType(param0: string): boolean;
					public setDataHandler(param0: javax.activation.DataHandler): void;
					public setDataHandler(content: javax.activation.DataHandler): void;
					public setSentDate(d: java.util.Date): void;
					public setContentID(cid: string): void;
					public addRecipients(type: javax.mail.Message.RecipientType, addresses: javax.mail.Address[]): void;
					public setContent(mp: javax.mail.Multipart): void;
					public getDisposition(): string;
					public getHeader(name: string, delimiter: string): string;
					public getMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					public constructor(session: javax.mail.Session);
					public getProtocol(): com.sun.mail.imap.protocol.IMAPProtocol;
					public setContent(o: any, type: string): void;
					public setSubject(subject: string): void;
					public invalidateHeaders(): void;
					public isREV1(): boolean;
					public getMessageCacheLock(): any;
					public constructor(folder: javax.mail.Folder, headers: javax.mail.internet.InternetHeaders, content: number[], msgnum: number);
					public addHeaderLine(line: string): void;
					public getSentDate(): java.util.Date;
					public getSender(): javax.mail.Address;
					public setText(text: string, charset: string, subtype: string): void;
					public getContentMD5(): string;
					public getContentLanguage(): string[];
					public setDisposition(disposition: string): void;
					public getInReplyTo(): string;
					public getAllHeaders(): java.util.Enumeration<any>;
					public setContentLanguage(param0: string[]): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class IMAPMultipartDataSource extends javax.mail.internet.MimePartDataSource implements javax.mail.MultipartDataSource {
					public static class: java.lang.Class<com.sun.mail.imap.IMAPMultipartDataSource>;
					public getMessageContext(): javax.mail.MessageContext;
					public getCount(): number;
					public getBodyPart(index: number): javax.mail.BodyPart;
					public constructor(part: javax.mail.internet.MimePart, bs: com.sun.mail.imap.protocol.BODYSTRUCTURE[], sectionId: string, msg: com.sun.mail.imap.IMAPMessage);
					public getBodyPart(param0: number): javax.mail.BodyPart;
					public constructor(part: javax.mail.internet.MimePart);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class IMAPNestedMessage extends com.sun.mail.imap.IMAPMessage {
					public static class: java.lang.Class<com.sun.mail.imap.IMAPNestedMessage>;
					public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					public isExpunged(): boolean;
					public setDescription(param0: string): void;
					public setFlags(flag: javax.mail.Flags, set: boolean): void;
					public addHeader(name: string, value: string): void;
					public getFetchBlockSize(): number;
					public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					public getNonMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
					public getHeader(param0: string, param1: string): string;
					public getSize(): number;
					public setText(param0: string): void;
					public getMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
					public removeHeader(name: string): void;
					public getInputStream(): java.io.InputStream;
					public setDescription(description: string, charset: string): void;
					public getSequenceNumber(): number;
					public checkExpunged(): void;
					public getHeader(name: string): string[];
					public getNonMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					public getNonMatchingHeaders(names: string[]): java.util.Enumeration<any>;
					public getHeader(param0: string): string[];
					public setContentLanguage(languages: string[]): void;
					public setHeader(param0: string, param1: string): void;
					public setText(text: string, charset: string): void;
					public writeTo(param0: java.io.OutputStream): void;
					public removeHeader(param0: string): void;
					public getContentID(): string;
					public setDescription(description: string): void;
					public setFileName(filename: string): void;
					public addHeaderLine(param0: string): void;
					public getDescription(): string;
					public setText(text: string): void;
					public getLineCount(): number;
					public getMatchingHeaders(names: string[]): java.util.Enumeration<any>;
					public getDataHandler(): javax.activation.DataHandler;
					public isMimeType(param0: string): boolean;
					public setDataHandler(param0: javax.activation.DataHandler): void;
					public setDataHandler(content: javax.activation.DataHandler): void;
					public setDisposition(param0: string): void;
					public setContent(mp: javax.mail.Multipart): void;
					public setHeader(name: string, value: string): void;
					public setContentMD5(param0: string): void;
					public getDisposition(): string;
					public addHeader(param0: string, param1: string): void;
					public getHeader(name: string, delimiter: string): string;
					public isMimeType(mimeType: string): boolean;
					public getMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					public getFileName(): string;
					public writeTo(os: java.io.OutputStream): void;
					public getProtocol(): com.sun.mail.imap.protocol.IMAPProtocol;
					public getEncoding(): string;
					public setContent(o: any, type: string): void;
					public setText(param0: string, param1: string, param2: string): void;
					public getContentType(): string;
					public getContent(): any;
					public setText(param0: string, param1: string): void;
					public setContent(param0: javax.mail.Multipart): void;
					public setFileName(param0: string): void;
					public setContent(param0: any, param1: string): void;
					public isREV1(): boolean;
					public getMessageCacheLock(): any;
					public addHeaderLine(line: string): void;
					public writeTo(os: java.io.OutputStream, ignoreList: string[]): void;
					public setText(text: string, charset: string, subtype: string): void;
					public getAllHeaderLines(): java.util.Enumeration<any>;
					public getContentMD5(): string;
					public getContentLanguage(): string[];
					public setDisposition(disposition: string): void;
					public setContentMD5(md5: string): void;
					public getAllHeaders(): java.util.Enumeration<any>;
					public setContentLanguage(param0: string[]): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class IMAPSSLStore extends com.sun.mail.imap.IMAPStore {
					public static class: java.lang.Class<com.sun.mail.imap.IMAPSSLStore>;
					public handleResponse(r: com.sun.mail.iap.Response): void;
					public constructor(session: javax.mail.Session, url: javax.mail.URLName, name: string, defaultPort: number, isSSL: boolean);
					public getQuota(param0: string): javax.mail.Quota[];
					public handleResponse(param0: com.sun.mail.iap.Response): void;
					public getQuota(root: string): javax.mail.Quota[];
					public setQuota(quota: javax.mail.Quota): void;
					public constructor(session: javax.mail.Session, url: javax.mail.URLName);
					public setQuota(param0: javax.mail.Quota): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class IMAPStore extends javax.mail.Store implements javax.mail.QuotaAwareStore, com.sun.mail.iap.ResponseHandler {
					public static class: java.lang.Class<com.sun.mail.imap.IMAPStore>;
					public static RESPONSE: number;
					public setPassword(password: string): void;
					public constructor(session: javax.mail.Session, url: javax.mail.URLName, name: string, defaultPort: number, isSSL: boolean);
					public finalize(): void;
					public getFolder(url: javax.mail.URLName): javax.mail.Folder;
					public setQuota(quota: javax.mail.Quota): void;
					public getUserNamespaces(user: string): javax.mail.Folder[];
					public protocolConnect(host: string, port: number, user: string, password: string): boolean;
					public close(): void;
					public setUsername(user: string): void;
					public getQuota(param0: string): javax.mail.Quota[];
					public constructor(session: javax.mail.Session, urlname: javax.mail.URLName);
					public handleResponse(param0: com.sun.mail.iap.Response): void;
					public getFolder(name: string): javax.mail.Folder;
					public getPersonalNamespaces(): javax.mail.Folder[];
					public getQuota(root: string): javax.mail.Quota[];
					public getDefaultFolder(): javax.mail.Folder;
					public setQuota(param0: javax.mail.Quota): void;
					public isConnected(): boolean;
					public protocolConnect(host: string, pport: number, user: string, password: string): boolean;
					public idle(): void;
					public getSharedNamespaces(): javax.mail.Folder[];
					public constructor(session: javax.mail.Session, url: javax.mail.URLName);
					public getFolder(param0: string): javax.mail.Folder;
					public handleResponse(r: com.sun.mail.iap.Response): void;
					public hasCapability(capability: string): boolean;
					public getFolder(param0: javax.mail.URLName): javax.mail.Folder;
				}
				export module IMAPStore {
					export class ConnectionPool extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.IMAPStore.ConnectionPool>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class LengthCounter extends java.io.OutputStream {
					public static class: java.lang.Class<com.sun.mail.imap.LengthCounter>;
					public constructor(maxsize: number);
					public constructor();
					public write(b: number): void;
					public write(b: number[]): void;
					public getBytes(): number[];
					public close(): void;
					public write(b: number[], off: number, len: number): void;
					public write(param0: number): void;
					public flush(): void;
					public getSize(): number;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class MessageLiteral extends java.lang.Object implements com.sun.mail.iap.Literal {
					public static class: java.lang.Class<com.sun.mail.imap.MessageLiteral>;
					public writeTo(os: java.io.OutputStream): void;
					public writeTo(param0: java.io.OutputStream): void;
					public constructor(msg: javax.mail.Message, maxsize: number);
					public size(): number;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class Rights extends java.lang.Object implements java.lang.Cloneable {
					public static class: java.lang.Class<com.sun.mail.imap.Rights>;
					public constructor(right: com.sun.mail.imap.Rights.Right);
					public contains(right: com.sun.mail.imap.Rights.Right): boolean;
					public equals(obj: any): boolean;
					public remove(rights: com.sun.mail.imap.Rights): void;
					public constructor(rights: com.sun.mail.imap.Rights);
					public contains(rights: com.sun.mail.imap.Rights): boolean;
					public add(rights: com.sun.mail.imap.Rights): void;
					public toString(): string;
					public constructor(rights: string);
					public clone(): any;
					public constructor();
					public getRights(): com.sun.mail.imap.Rights.Right[];
					public remove(right: com.sun.mail.imap.Rights.Right): void;
					public hashCode(): number;
					public add(right: com.sun.mail.imap.Rights.Right): void;
				}
				export module Rights {
					export class Right extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.Rights.Right>;
						public static LOOKUP: com.sun.mail.imap.Rights.Right;
						public static READ: com.sun.mail.imap.Rights.Right;
						public static KEEP_SEEN: com.sun.mail.imap.Rights.Right;
						public static WRITE: com.sun.mail.imap.Rights.Right;
						public static INSERT: com.sun.mail.imap.Rights.Right;
						public static POST: com.sun.mail.imap.Rights.Right;
						public static CREATE: com.sun.mail.imap.Rights.Right;
						public static DELETE: com.sun.mail.imap.Rights.Right;
						public static ADMINISTER: com.sun.mail.imap.Rights.Right;
						public static getInstance(right: string): com.sun.mail.imap.Rights.Right;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export class Utility extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.imap.Utility>;
					public static toMessageSet(msgs: javax.mail.Message[], cond: com.sun.mail.imap.Utility.Condition): com.sun.mail.imap.protocol.MessageSet[];
					public static toUIDSet(msgs: javax.mail.Message[]): com.sun.mail.imap.protocol.UIDSet[];
				}
				export module Utility {
					export class Condition extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.Utility.Condition>;
						/**
						 * Constructs a new instance of the com.sun.mail.imap.Utility$Condition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							test(param0: com.sun.mail.imap.IMAPMessage): boolean;
						});
						public constructor();
						public test(param0: com.sun.mail.imap.IMAPMessage): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class BASE64MailboxDecoder extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.BASE64MailboxDecoder>;
						public constructor();
						public static base64decode(buffer: string[], offset: number, iter: java.text.CharacterIterator): number;
						public static decode(original: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class BASE64MailboxEncoder extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.BASE64MailboxEncoder>;
						public buffer: number[];
						public bufsize: number;
						public started: boolean;
						public out: java.io.Writer;
						public write(c: number): void;
						public flush(): void;
						public constructor(what: java.io.Writer);
						public encode(): void;
						public static encode(original: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class BODY extends java.lang.Object implements com.sun.mail.imap.protocol.Item {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.BODY>;
						public msgno: number;
						public data: com.sun.mail.iap.ByteArray;
						public section: string;
						public origin: number;
						public getByteArray(): com.sun.mail.iap.ByteArray;
						public constructor(r: com.sun.mail.imap.protocol.FetchResponse);
						public getByteArrayInputStream(): java.io.ByteArrayInputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class BODYSTRUCTURE extends java.lang.Object implements com.sun.mail.imap.protocol.Item {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.BODYSTRUCTURE>;
						public msgno: number;
						public type: string;
						public subtype: string;
						public encoding: string;
						public lines: number;
						public size: number;
						public disposition: string;
						public id: string;
						public description: string;
						public md5: string;
						public attachment: string;
						public cParams: javax.mail.internet.ParameterList;
						public dParams: javax.mail.internet.ParameterList;
						public language: string[];
						public bodies: com.sun.mail.imap.protocol.BODYSTRUCTURE[];
						public envelope: com.sun.mail.imap.protocol.ENVELOPE;
						public constructor(r: com.sun.mail.imap.protocol.FetchResponse);
						public isNested(): boolean;
						public isMulti(): boolean;
						public isSingle(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class ENVELOPE extends java.lang.Object implements com.sun.mail.imap.protocol.Item {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.ENVELOPE>;
						public msgno: number;
						public date: java.util.Date;
						public subject: string;
						public from: javax.mail.internet.InternetAddress[];
						public sender: javax.mail.internet.InternetAddress[];
						public replyTo: javax.mail.internet.InternetAddress[];
						public to: javax.mail.internet.InternetAddress[];
						public cc: javax.mail.internet.InternetAddress[];
						public bcc: javax.mail.internet.InternetAddress[];
						public inReplyTo: string;
						public messageId: string;
						public constructor(r: com.sun.mail.imap.protocol.FetchResponse);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class FLAGS extends javax.mail.Flags implements com.sun.mail.imap.protocol.Item {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.FLAGS>;
						public msgno: number;
						public constructor();
						public constructor(flags: javax.mail.Flags);
						public constructor(flag: javax.mail.Flags.Flag);
						public constructor(r: com.sun.mail.imap.protocol.IMAPResponse);
						public constructor(flag: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class FetchResponse extends com.sun.mail.imap.protocol.IMAPResponse {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.FetchResponse>;
						public getItem(index: number): com.sun.mail.imap.protocol.Item;
						public static getItem(r: com.sun.mail.iap.Response[], msgno: number, c: java.lang.Class<any>): com.sun.mail.imap.protocol.Item;
						public constructor(r: com.sun.mail.iap.Response);
						public getItem(c: java.lang.Class<any>): com.sun.mail.imap.protocol.Item;
						public getItemCount(): number;
						public constructor(s: string);
						public constructor(p: com.sun.mail.iap.Protocol);
						public constructor(r: com.sun.mail.imap.protocol.IMAPResponse);
						public constructor(c: com.sun.mail.iap.Protocol);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class IMAPAddress extends javax.mail.internet.InternetAddress {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.IMAPAddress>;
						public getGroup(strict: boolean): javax.mail.internet.InternetAddress[];
						public isGroup(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class IMAPProtocol extends com.sun.mail.iap.Protocol {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.IMAPProtocol>;
						public parseCapabilities(r: com.sun.mail.iap.Response): void;
						public check(): void;
						public close(): void;
						public myRights(mbox: string): com.sun.mail.imap.Rights;
						public subscribe(mbox: string): void;
						public readResponse(): com.sun.mail.iap.Response;
						public fetchFlags(msgno: number): javax.mail.Flags;
						public appenduid(mbox: string, f: javax.mail.Flags, d: java.util.Date, data: com.sun.mail.iap.Literal, uid: boolean): com.sun.mail.imap.AppendUID;
						public examine(mbox: string): com.sun.mail.imap.protocol.MailboxInfo;
						public search(msgsets: com.sun.mail.imap.protocol.MessageSet[], term: javax.mail.search.SearchTerm): number[];
						public disconnect(): void;
						public startTLS(): void;
						public storeFlags(msg: number, flags: javax.mail.Flags, set: boolean): void;
						public proxyauth(u: string): void;
						public getQuota(root: string): javax.mail.Quota[];
						public peekBody(msgno: number, section: string): com.sun.mail.imap.protocol.BODY;
						public getACL(mbox: string): com.sun.mail.imap.ACL[];
						public authlogin(u: string, p: string): void;
						public rename(o: string, n: string): void;
						public fetchRFC822(msgno: number, what: string): com.sun.mail.imap.protocol.RFC822DATA;
						public fetchSequenceNumbers(start: number, param1: number): com.sun.mail.imap.protocol.UID[];
						public storeFlags(start: number, end: number, flags: javax.mail.Flags, set: boolean): void;
						public fetchBody(msgno: number, section: string, start: number, size: number): com.sun.mail.imap.protocol.BODY;
						public sasllogin(allowed: string[], realm: string, authzid: string, u: string, p: string): void;
						public uidexpunge(set: com.sun.mail.imap.protocol.UIDSet[]): void;
						public getQuotaRoot(mbox: string): javax.mail.Quota[];
						public logout(): void;
						public deleteACL(mbox: string, user: string): void;
						public lsub(ref: string, pattern: string): com.sun.mail.imap.protocol.ListInfo[];
						public fetchBody(msgno: number, section: string, start: number, size: number, peek: boolean, ba: com.sun.mail.iap.ByteArray): com.sun.mail.imap.protocol.BODY;
						public getResponseBuffer(): com.sun.mail.iap.ByteArray;
						public setACL(mbox: string, modifier: string, acl: com.sun.mail.imap.ACL): void;
						public append(mbox: string, f: javax.mail.Flags, d: java.util.Date, data: com.sun.mail.iap.Literal): void;
						public getCapabilities(): java.util.Map<any,any>;
						public expunge(): void;
						public storeFlags(msgsets: com.sun.mail.imap.protocol.MessageSet[], flags: javax.mail.Flags, set: boolean): void;
						public namespace(): com.sun.mail.imap.protocol.Namespaces;
						public setCapabilities(r: com.sun.mail.iap.Response): void;
						public processGreeting(r: com.sun.mail.iap.Response): void;
						public delete(mbox: string): void;
						public copy(start: number, end: number, mbox: string): void;
						public isAuthenticated(): boolean;
						public noop(): void;
						public fetchBody(msgno: number, section: string): com.sun.mail.imap.protocol.BODY;
						public setQuota(quota: javax.mail.Quota): void;
						public status(mbox: string, items: string[]): com.sun.mail.imap.protocol.Status;
						public login(u: string, p: string): void;
						public fetchBody(msgno: number, section: string, start: number, size: number, ba: com.sun.mail.iap.ByteArray): com.sun.mail.imap.protocol.BODY;
						public fetchSequenceNumbers(uids: number[]): com.sun.mail.imap.protocol.UID[];
						public select(mbox: string): com.sun.mail.imap.protocol.MailboxInfo;
						public fetchBody(msgno: number, section: string, peek: boolean): com.sun.mail.imap.protocol.BODY;
						public fetch(start: number, end: number, what: string): com.sun.mail.iap.Response[];
						public fetchBodyStructure(msgno: number): com.sun.mail.imap.protocol.BODYSTRUCTURE;
						public constructor(_in_: java.io.InputStream, out: java.io.OutputStream, debug: boolean);
						public copy(msgsets: com.sun.mail.imap.protocol.MessageSet[], mbox: string): void;
						public peekBody(msgno: number, section: string, start: number, size: number): com.sun.mail.imap.protocol.BODY;
						public fetchUID(msgno: number): com.sun.mail.imap.protocol.UID;
						public idleStart(): void;
						public listRights(mbox: string, user: string): com.sun.mail.imap.Rights[];
						public fetchSequenceNumber(uid: number): com.sun.mail.imap.protocol.UID;
						public constructor(host: string, port: number, debug: boolean, out: java.io.PrintStream, props: java.util.Properties, prefix: string, isSSL: boolean);
						public startTLS(cmd: string): void;
						public search(term: javax.mail.search.SearchTerm): number[];
						public list(ref: string, pattern: string): com.sun.mail.imap.protocol.ListInfo[];
						public processIdleResponse(r: com.sun.mail.iap.Response): boolean;
						public hasCapability(c: string): boolean;
						public peekBody(msgno: number, section: string, start: number, size: number, ba: com.sun.mail.iap.ByteArray): com.sun.mail.imap.protocol.BODY;
						public unsubscribe(mbox: string): void;
						public isREV1(): boolean;
						public appenduid(mbox: string, f: javax.mail.Flags, d: java.util.Date, data: com.sun.mail.iap.Literal): com.sun.mail.imap.AppendUID;
						public create(mbox: string): void;
						public authplain(authzid: string, u: string, p: string): void;
						public readIdleResponse(): com.sun.mail.iap.Response;
						public constructor(name: string, host: string, port: number, debug: boolean, out: java.io.PrintStream, props: java.util.Properties, isSSL: boolean);
						public capability(): void;
						public fetch(msgsets: com.sun.mail.imap.protocol.MessageSet[], what: string): com.sun.mail.iap.Response[];
						public supportsNonSyncLiterals(): boolean;
						public fetch(msg: number, what: string): com.sun.mail.iap.Response[];
						public idleAbort(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class IMAPResponse extends com.sun.mail.iap.Response {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.IMAPResponse>;
						public constructor(r: com.sun.mail.iap.Response);
						public readSimpleList(): string[];
						public static readResponse(p: com.sun.mail.iap.Protocol): com.sun.mail.imap.protocol.IMAPResponse;
						public getNumber(): number;
						public constructor(s: string);
						public constructor(p: com.sun.mail.iap.Protocol);
						public keyEquals(k: string): boolean;
						public constructor(r: com.sun.mail.imap.protocol.IMAPResponse);
						public getKey(): string;
						public constructor(c: com.sun.mail.iap.Protocol);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class IMAPSaslAuthenticator extends java.lang.Object implements com.sun.mail.imap.protocol.SaslAuthenticator {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.IMAPSaslAuthenticator>;
						public constructor(pr: com.sun.mail.imap.protocol.IMAPProtocol, name: string, props: java.util.Properties, debug: boolean, out: java.io.PrintStream, host: string);
						public authenticate(param0: string[], param1: string, param2: string, param3: string, param4: string): boolean;
						public authenticate(mechs: string[], realm: string, authzid: string, u: string, p: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class INTERNALDATE extends java.lang.Object implements com.sun.mail.imap.protocol.Item {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.INTERNALDATE>;
						public msgno: number;
						public date: java.util.Date;
						public static format(d: java.util.Date): string;
						public getDate(): java.util.Date;
						public constructor(r: com.sun.mail.imap.protocol.FetchResponse);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class Item extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.Item>;
						/**
						 * Constructs a new instance of the com.sun.mail.imap.protocol.Item interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class ListInfo extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.ListInfo>;
						public name: string;
						public separator: string;
						public hasInferiors: boolean;
						public canOpen: boolean;
						public changeState: number;
						public attrs: string[];
						public static CHANGED: number;
						public static UNCHANGED: number;
						public static INDETERMINATE: number;
						public constructor(r: com.sun.mail.imap.protocol.IMAPResponse);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class MailboxInfo extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.MailboxInfo>;
						public availableFlags: javax.mail.Flags;
						public permanentFlags: javax.mail.Flags;
						public total: number;
						public recent: number;
						public first: number;
						public uidvalidity: number;
						public uidnext: number;
						public mode: number;
						public constructor(r: com.sun.mail.iap.Response[]);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class MessageSet extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.MessageSet>;
						public start: number;
						public end: number;
						public static toString(msgsets: com.sun.mail.imap.protocol.MessageSet[]): string;
						public constructor();
						public static size(msgsets: com.sun.mail.imap.protocol.MessageSet[]): number;
						public constructor(start: number, end: number);
						public size(): number;
						public toString(): string;
						public static createMessageSets(msgs: number[]): com.sun.mail.imap.protocol.MessageSet[];
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class Namespaces extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.Namespaces>;
						public personal: com.sun.mail.imap.protocol.Namespaces.Namespace[];
						public otherUsers: com.sun.mail.imap.protocol.Namespaces.Namespace[];
						public shared: com.sun.mail.imap.protocol.Namespaces.Namespace[];
						public constructor(r: com.sun.mail.iap.Response);
					}
					export module Namespaces {
						export class Namespace extends java.lang.Object {
							public static class: java.lang.Class<com.sun.mail.imap.protocol.Namespaces.Namespace>;
							public prefix: string;
							public delimiter: string;
							public constructor(r: com.sun.mail.iap.Response);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class RFC822DATA extends java.lang.Object implements com.sun.mail.imap.protocol.Item {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.RFC822DATA>;
						public msgno: number;
						public data: com.sun.mail.iap.ByteArray;
						public getByteArray(): com.sun.mail.iap.ByteArray;
						public constructor(r: com.sun.mail.imap.protocol.FetchResponse);
						public getByteArrayInputStream(): java.io.ByteArrayInputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class RFC822SIZE extends java.lang.Object implements com.sun.mail.imap.protocol.Item {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.RFC822SIZE>;
						public msgno: number;
						public size: number;
						public constructor(r: com.sun.mail.imap.protocol.FetchResponse);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class SaslAuthenticator extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.SaslAuthenticator>;
						/**
						 * Constructs a new instance of the com.sun.mail.imap.protocol.SaslAuthenticator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							authenticate(param0: string[], param1: string, param2: string, param3: string, param4: string): boolean;
						});
						public constructor();
						public authenticate(param0: string[], param1: string, param2: string, param3: string, param4: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class SearchSequence extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.SearchSequence>;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class Status extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.Status>;
						public mbox: string;
						public total: number;
						public recent: number;
						public uidnext: number;
						public uidvalidity: number;
						public unseen: number;
						public constructor(r: com.sun.mail.iap.Response);
						public static add(s1: com.sun.mail.imap.protocol.Status, s2: com.sun.mail.imap.protocol.Status): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class UID extends java.lang.Object implements com.sun.mail.imap.protocol.Item {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.UID>;
						public seqnum: number;
						public uid: number;
						public constructor(r: com.sun.mail.imap.protocol.FetchResponse);
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module imap {
				export module protocol {
					export class UIDSet extends java.lang.Object {
						public static class: java.lang.Class<com.sun.mail.imap.protocol.UIDSet>;
						public start: number;
						public end: number;
						public constructor();
						public static size(msgsets: com.sun.mail.imap.protocol.UIDSet[]): number;
						public constructor(start: number, param1: number);
						public static toString(msgsets: com.sun.mail.imap.protocol.UIDSet[]): string;
						public size(): number;
						public toString(): string;
						public static createUIDSets(msgs: number[]): com.sun.mail.imap.protocol.UIDSet[];
					}
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module pop3 {
				export class DefaultFolder extends javax.mail.Folder {
					public static class: java.lang.Class<com.sun.mail.pop3.DefaultFolder>;
					public getType(): number;
					public getPermanentFlags(): javax.mail.Flags;
					public appendMessages(msgs: javax.mail.Message[]): void;
					public hasNewMessages(): boolean;
					public getInbox(): javax.mail.Folder;
					public list(param0: string): javax.mail.Folder[];
					public open(mode: number): void;
					public isOpen(): boolean;
					public renameTo(f: javax.mail.Folder): boolean;
					public getFolder(name: string): javax.mail.Folder;
					public getMessage(param0: number): javax.mail.Message;
					public create(param0: number): boolean;
					public open(param0: number): void;
					public renameTo(param0: javax.mail.Folder): boolean;
					public list(pattern: string): javax.mail.Folder[];
					public getSeparator(): string;
					public getMessage(msgno: number): javax.mail.Message;
					public getFullName(): string;
					public getParent(): javax.mail.Folder;
					public delete(param0: boolean): boolean;
					public getMessageCount(): number;
					public exists(): boolean;
					public getFolder(param0: string): javax.mail.Folder;
					public appendMessages(param0: javax.mail.Message[]): void;
					public close(param0: boolean): void;
					public list(): javax.mail.Folder[];
					public getName(): string;
					public expunge(): javax.mail.Message[];
					public create(type: number): boolean;
					public delete(recurse: boolean): boolean;
					public close(expunge: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module pop3 {
				export class POP3Folder extends javax.mail.Folder {
					public static class: java.lang.Class<com.sun.mail.pop3.POP3Folder>;
					public getType(): number;
					public getPermanentFlags(): javax.mail.Flags;
					public notifyMessageChangedListeners(type: number, m: javax.mail.Message): void;
					public getUID(msg: javax.mail.Message): string;
					public finalize(): void;
					public appendMessages(msgs: javax.mail.Message[]): void;
					public getSize(): number;
					public notifyMessageChangedListeners(type: number, msg: javax.mail.Message): void;
					public hasNewMessages(): boolean;
					public list(param0: string): javax.mail.Folder[];
					public open(mode: number): void;
					public isOpen(): boolean;
					public renameTo(f: javax.mail.Folder): boolean;
					public getFolder(name: string): javax.mail.Folder;
					public getMessage(param0: number): javax.mail.Message;
					public create(param0: number): boolean;
					public open(param0: number): void;
					public listCommand(): java.io.InputStream;
					public renameTo(param0: javax.mail.Folder): boolean;
					public list(pattern: string): javax.mail.Folder[];
					public getSizes(): number[];
					public getSeparator(): string;
					public getMessage(msgno: number): javax.mail.Message;
					public getFullName(): string;
					public getParent(): javax.mail.Folder;
					public delete(param0: boolean): boolean;
					public getMessageCount(): number;
					public exists(): boolean;
					public getFolder(param0: string): javax.mail.Folder;
					public appendMessages(param0: javax.mail.Message[]): void;
					public fetch(msgs: javax.mail.Message[], fp: javax.mail.FetchProfile): void;
					public close(param0: boolean): void;
					public list(): javax.mail.Folder[];
					public getName(): string;
					public expunge(): javax.mail.Message[];
					public create(type: number): boolean;
					public delete(recurse: boolean): boolean;
					public createMessage(f: javax.mail.Folder, msgno: number): com.sun.mail.pop3.POP3Message;
					public close(expunge: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module pop3 {
				export class POP3Message extends javax.mail.internet.MimeMessage {
					public static class: java.lang.Class<com.sun.mail.pop3.POP3Message>;
					public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					public setDescription(param0: string): void;
					public setFlags(flag: javax.mail.Flags, set: boolean): void;
					public addHeader(name: string, value: string): void;
					public saveChanges(): void;
					public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					public getNonMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
					public getHeader(param0: string, param1: string): string;
					public invalidate(invalidateHeaders: boolean): void;
					public getSize(): number;
					public setText(param0: string): void;
					public constructor();
					public top(n: number): java.io.InputStream;
					public getMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
					public removeHeader(name: string): void;
					public getInputStream(): java.io.InputStream;
					public constructor(folder: javax.mail.Folder, is: java.io.InputStream, msgnum: number);
					public setDescription(description: string, charset: string): void;
					public getHeader(name: string): string[];
					public getNonMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					public getNonMatchingHeaders(names: string[]): java.util.Enumeration<any>;
					public getHeader(param0: string): string[];
					public constructor(folder: javax.mail.Folder, msgnum: number);
					public setContentLanguage(languages: string[]): void;
					public setHeader(param0: string, param1: string): void;
					public setText(text: string, charset: string): void;
					public constructor(source: javax.mail.internet.MimeMessage);
					public writeTo(param0: java.io.OutputStream): void;
					public removeHeader(param0: string): void;
					public getContentID(): string;
					public setDescription(description: string): void;
					public setFileName(filename: string): void;
					public getContentStream(): java.io.InputStream;
					public addHeaderLine(param0: string): void;
					public getDescription(): string;
					public setText(text: string): void;
					public getLineCount(): number;
					public getMatchingHeaders(names: string[]): java.util.Enumeration<any>;
					public constructor(session: javax.mail.Session, is: java.io.InputStream);
					public getDataHandler(): javax.activation.DataHandler;
					public isMimeType(param0: string): boolean;
					public setDataHandler(param0: javax.activation.DataHandler): void;
					public setHeader(name: string, value: string): void;
					public setDisposition(param0: string): void;
					public setContent(mp: javax.mail.Multipart): void;
					public setContentMD5(param0: string): void;
					public getDisposition(): string;
					public addHeader(param0: string, param1: string): void;
					public getHeader(name: string, delimiter: string): string;
					public isMimeType(mimeType: string): boolean;
					public getMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					public getFileName(): string;
					public writeTo(os: java.io.OutputStream): void;
					public constructor(session: javax.mail.Session);
					public setFlags(newFlags: javax.mail.Flags, set: boolean): void;
					public getEncoding(): string;
					public setContent(o: any, type: string): void;
					public setText(param0: string, param1: string, param2: string): void;
					public getContentType(): string;
					public getContent(): any;
					public setText(param0: string, param1: string): void;
					public setContent(param0: javax.mail.Multipart): void;
					public setFileName(param0: string): void;
					public constructor(folder: javax.mail.Folder, msgno: number);
					public setContent(param0: any, param1: string): void;
					public constructor(folder: javax.mail.Folder, headers: javax.mail.internet.InternetHeaders, content: number[], msgnum: number);
					public addHeaderLine(line: string): void;
					public setDataHandler(dh: javax.activation.DataHandler): void;
					public writeTo(os: java.io.OutputStream, ignoreList: string[]): void;
					public setText(text: string, charset: string, subtype: string): void;
					public getAllHeaderLines(): java.util.Enumeration<any>;
					public getContentMD5(): string;
					public getContentLanguage(): string[];
					public setDisposition(disposition: string): void;
					public getAllHeaders(): java.util.Enumeration<any>;
					public setContentMD5(md5: string): void;
					public setContentLanguage(param0: string[]): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module pop3 {
				export class POP3SSLStore extends com.sun.mail.pop3.POP3Store {
					public static class: java.lang.Class<com.sun.mail.pop3.POP3SSLStore>;
					public constructor(session: javax.mail.Session, url: javax.mail.URLName, name: string, defaultPort: number, isSSL: boolean);
					public constructor(session: javax.mail.Session, url: javax.mail.URLName);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module pop3 {
				export class POP3Store extends javax.mail.Store {
					public static class: java.lang.Class<com.sun.mail.pop3.POP3Store>;
					public constructor(session: javax.mail.Session, url: javax.mail.URLName, name: string, defaultPort: number, isSSL: boolean);
					public isConnected(): boolean;
					public finalize(): void;
					public getFolder(url: javax.mail.URLName): javax.mail.Folder;
					public constructor(session: javax.mail.Session, url: javax.mail.URLName);
					public getFolder(param0: string): javax.mail.Folder;
					public protocolConnect(host: string, port: number, user: string, password: string): boolean;
					public close(): void;
					public constructor(session: javax.mail.Session, urlname: javax.mail.URLName);
					public getFolder(name: string): javax.mail.Folder;
					public protocolConnect(host: string, portNum: number, user: string, passwd: string): boolean;
					public getDefaultFolder(): javax.mail.Folder;
					public getFolder(param0: javax.mail.URLName): javax.mail.Folder;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module pop3 {
				export class Protocol extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.pop3.Protocol>;
					public finalize(): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module pop3 {
				export class Response extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.pop3.Response>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module pop3 {
				export class SharedByteArrayOutputStream extends java.io.ByteArrayOutputStream {
					public static class: java.lang.Class<com.sun.mail.pop3.SharedByteArrayOutputStream>;
					public constructor();
					public toStream(): java.io.InputStream;
					public close(): void;
					public constructor(size: number);
					public flush(): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module pop3 {
				export class Status extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.pop3.Status>;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module smtp {
				export class DigestMD5 extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.smtp.DigestMD5>;
					public authServer(serverResponse: string): boolean;
					public constructor(debugout: java.io.PrintStream);
					public authClient(host: string, user: string, passwd: string, realm: string, serverChallenge: string): number[];
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module smtp {
				export class SMTPAddressFailedException extends javax.mail.SendFailedException {
					public static class: java.lang.Class<com.sun.mail.smtp.SMTPAddressFailedException>;
					public addr: javax.mail.internet.InternetAddress;
					public cmd: string;
					public rc: number;
					public getCommand(): string;
					public constructor(msg: string, ex: java.lang.Exception, validSent: javax.mail.Address[], validUnsent: javax.mail.Address[], invalid: javax.mail.Address[]);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public getReturnCode(): number;
					public constructor();
					public constructor(s: string);
					public constructor(cause: java.lang.Throwable);
					public getAddress(): javax.mail.internet.InternetAddress;
					public constructor(message: string, cause: java.lang.Throwable);
					public constructor(s: string, e: java.lang.Exception);
					public constructor(addr: javax.mail.internet.InternetAddress, cmd: string, rc: number, err: string);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module smtp {
				export class SMTPAddressSucceededException extends javax.mail.MessagingException {
					public static class: java.lang.Class<com.sun.mail.smtp.SMTPAddressSucceededException>;
					public addr: javax.mail.internet.InternetAddress;
					public cmd: string;
					public rc: number;
					public getCommand(): string;
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public getReturnCode(): number;
					public constructor();
					public constructor(s: string);
					public constructor(cause: java.lang.Throwable);
					public getAddress(): javax.mail.internet.InternetAddress;
					public constructor(message: string, cause: java.lang.Throwable);
					public constructor(s: string, e: java.lang.Exception);
					public constructor(addr: javax.mail.internet.InternetAddress, cmd: string, rc: number, err: string);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module smtp {
				export class SMTPMessage extends javax.mail.internet.MimeMessage {
					public static class: java.lang.Class<com.sun.mail.smtp.SMTPMessage>;
					public static NOTIFY_NEVER: number;
					public static NOTIFY_SUCCESS: number;
					public static NOTIFY_FAILURE: number;
					public static NOTIFY_DELAY: number;
					public static RETURN_FULL: number;
					public static RETURN_HDRS: number;
					public getNotifyOptions(): number;
					public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					public setAllow8bitMIME(allow: boolean): void;
					public setDescription(param0: string): void;
					public addHeader(name: string, value: string): void;
					public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					public getNonMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
					public getHeader(param0: string, param1: string): string;
					public getMailExtension(): string;
					public getSize(): number;
					public getSendPartial(): boolean;
					public setText(param0: string): void;
					public constructor();
					public getMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
					public getEnvelopeFrom(): string;
					public removeHeader(name: string): void;
					public getInputStream(): java.io.InputStream;
					public constructor(folder: javax.mail.Folder, is: java.io.InputStream, msgnum: number);
					public setDescription(description: string, charset: string): void;
					public setSubmitter(submitter: string): void;
					public getHeader(name: string): string[];
					public getNonMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					public getNonMatchingHeaders(names: string[]): java.util.Enumeration<any>;
					public getAllow8bitMIME(): boolean;
					public getHeader(param0: string): string[];
					public setSendPartial(partial: boolean): void;
					public getSubmitter(): string;
					public constructor(folder: javax.mail.Folder, msgnum: number);
					public setContentLanguage(languages: string[]): void;
					public setHeader(param0: string, param1: string): void;
					public setText(text: string, charset: string): void;
					public constructor(source: javax.mail.internet.MimeMessage);
					public writeTo(param0: java.io.OutputStream): void;
					public removeHeader(param0: string): void;
					public getContentID(): string;
					public setDescription(description: string): void;
					public setFileName(filename: string): void;
					public addHeaderLine(param0: string): void;
					public getDescription(): string;
					public setText(text: string): void;
					public getLineCount(): number;
					public setEnvelopeFrom(from: string): void;
					public getMatchingHeaders(names: string[]): java.util.Enumeration<any>;
					public constructor(session: javax.mail.Session, is: java.io.InputStream);
					public setReturnOption(option: number): void;
					public getDataHandler(): javax.activation.DataHandler;
					public isMimeType(param0: string): boolean;
					public setDataHandler(param0: javax.activation.DataHandler): void;
					public setDisposition(param0: string): void;
					public setContent(mp: javax.mail.Multipart): void;
					public setHeader(name: string, value: string): void;
					public setContentMD5(param0: string): void;
					public setNotifyOptions(options: number): void;
					public getDisposition(): string;
					public addHeader(param0: string, param1: string): void;
					public getHeader(name: string, delimiter: string): string;
					public getReturnOption(): number;
					public isMimeType(mimeType: string): boolean;
					public getMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					public getFileName(): string;
					public writeTo(os: java.io.OutputStream): void;
					public constructor(session: javax.mail.Session);
					public getEncoding(): string;
					public setContent(o: any, type: string): void;
					public setText(param0: string, param1: string, param2: string): void;
					public getContentType(): string;
					public getContent(): any;
					public setText(param0: string, param1: string): void;
					public setContent(param0: javax.mail.Multipart): void;
					public setMailExtension(extension: string): void;
					public setFileName(param0: string): void;
					public setContent(param0: any, param1: string): void;
					public constructor(folder: javax.mail.Folder, headers: javax.mail.internet.InternetHeaders, content: number[], msgnum: number);
					public addHeaderLine(line: string): void;
					public setDataHandler(dh: javax.activation.DataHandler): void;
					public writeTo(os: java.io.OutputStream, ignoreList: string[]): void;
					public setText(text: string, charset: string, subtype: string): void;
					public getAllHeaderLines(): java.util.Enumeration<any>;
					public getContentMD5(): string;
					public getContentLanguage(): string[];
					public setDisposition(disposition: string): void;
					public setContentMD5(md5: string): void;
					public getAllHeaders(): java.util.Enumeration<any>;
					public setContentLanguage(param0: string[]): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module smtp {
				export class SMTPOutputStream extends com.sun.mail.util.CRLFOutputStream {
					public static class: java.lang.Class<com.sun.mail.smtp.SMTPOutputStream>;
					public constructor();
					public write(b: number): void;
					public write(b: number[]): void;
					public close(): void;
					public write(b: number[], off: number, len: number): void;
					public constructor(os: java.io.OutputStream);
					public flush(): void;
					public ensureAtBOL(): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module smtp {
				export class SMTPSSLTransport extends com.sun.mail.smtp.SMTPTransport {
					public static class: java.lang.Class<com.sun.mail.smtp.SMTPSSLTransport>;
					public constructor(session: javax.mail.Session, urlname: javax.mail.URLName);
					public constructor(session: javax.mail.Session, urlname: javax.mail.URLName, name: string, defaultPort: number, isSSL: boolean);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module smtp {
				export class SMTPSendFailedException extends javax.mail.SendFailedException {
					public static class: java.lang.Class<com.sun.mail.smtp.SMTPSendFailedException>;
					public addr: javax.mail.internet.InternetAddress;
					public cmd: string;
					public rc: number;
					public getCommand(): string;
					public constructor(msg: string, ex: java.lang.Exception, validSent: javax.mail.Address[], validUnsent: javax.mail.Address[], invalid: javax.mail.Address[]);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor(cmd: string, rc: number, err: string, ex: java.lang.Exception, vs: javax.mail.Address[], vus: javax.mail.Address[], inv: javax.mail.Address[]);
					public getReturnCode(): number;
					public constructor();
					public constructor(s: string);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
					public constructor(s: string, e: java.lang.Exception);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module smtp {
				export class SMTPTransport extends javax.mail.Transport {
					public static class: java.lang.Class<com.sun.mail.smtp.SMTPTransport>;
					public getReportSuccess(): boolean;
					public simpleCommand(cmd: number[]): number;
					public getExtensionParameter(ext: string): string;
					public setSASLRealm(saslRealm: string): void;
					public simpleCommand(cmd: string): number;
					public finalize(): void;
					public setUseRset(useRset: boolean): void;
					public sendMessage(message: javax.mail.Message, addresses: javax.mail.Address[]): void;
					public rcptTo(): void;
					public startTLS(): void;
					public setStartTLS(useStartTLS: boolean): void;
					public static xtext(s: string): string;
					public setReportSuccess(reportSuccess: boolean): void;
					public checkConnected(): void;
					public getLocalHost(): string;
					public getStartTLS(): boolean;
					public connect(socket: java.net.Socket): void;
					public getLastServerResponse(): string;
					public issueCommand(cmd: string, expect: number): void;
					public connect(host: string, port: number, user: string, password: string): void;
					public connect(): void;
					public protocolConnect(host: string, port: number, user: string, password: string): boolean;
					public close(): void;
					public constructor(session: javax.mail.Session, urlname: javax.mail.URLName);
					public supportsExtension(ext: string): boolean;
					public ehlo(domain: string): boolean;
					public finishData(): void;
					public getLastReturnCode(): number;
					public isConnected(): boolean;
					public supportsAuthentication(auth: string): boolean;
					public helo(domain: string): void;
					public data(): java.io.OutputStream;
					public connect(user: string, password: string): void;
					public constructor(session: javax.mail.Session, urlname: javax.mail.URLName, name: string, defaultPort: number, isSSL: boolean);
					public getUseRset(): boolean;
					public readServerResponse(): number;
					public connect(host: string, user: string, password: string): void;
					public getSASLRealm(): string;
					public setLocalHost(localhost: string): void;
					public sendCommand(cmd: string): void;
					public protocolConnect(host: string, port: number, user: string, passwd: string): boolean;
					public mailFrom(): void;
					public sendMessage(param0: javax.mail.Message, param1: javax.mail.Address[]): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class ASCIIUtility extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.util.ASCIIUtility>;
					public static parseInt(b: number[], start: number, end: number, radix: number): number;
					public static parseLong(b: number[], start: number, end: number, radix: number): number;
					public static parseInt(b: number[], start: number, end: number): number;
					public static getBytes(is: java.io.InputStream): number[];
					public toString(): string;
					public static toString(is: java.io.ByteArrayInputStream): string;
					public static getBytes(s: string): number[];
					public static parseLong(b: number[], start: number, end: number): number;
					public static toString(b: number[], start: number, end: number): string;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class BASE64DecoderStream extends java.io.FilterInputStream {
					public static class: java.lang.Class<com.sun.mail.util.BASE64DecoderStream>;
					public available(): number;
					public read(): number;
					public constructor(_in_: java.io.InputStream);
					public read(b: number[], off: number, len: number): number;
					public constructor();
					public read(b: number[]): number;
					public markSupported(): boolean;
					public close(): void;
					public constructor(_in_: java.io.InputStream, ignoreErrors: boolean);
					public read(buf: number[], off: number, len: number): number;
					public static decode(inbuf: number[]): number[];
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class BASE64EncoderStream extends java.io.FilterOutputStream {
					public static class: java.lang.Class<com.sun.mail.util.BASE64EncoderStream>;
					public write(c: number): void;
					public constructor();
					public write(b: number): void;
					public constructor(out: java.io.OutputStream, bytesPerLine: number);
					public write(b: number[]): void;
					public close(): void;
					public write(b: number[], off: number, len: number): void;
					public flush(): void;
					public constructor(out: java.io.OutputStream);
					public static encode(inbuf: number[]): number[];
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class BEncoderStream extends com.sun.mail.util.BASE64EncoderStream {
					public static class: java.lang.Class<com.sun.mail.util.BEncoderStream>;
					public constructor();
					public constructor(out: java.io.OutputStream, bytesPerLine: number);
					public close(): void;
					public flush(): void;
					public constructor(out: java.io.OutputStream);
					public static encodedLength(b: number[]): number;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class CRLFOutputStream extends java.io.FilterOutputStream {
					public static class: java.lang.Class<com.sun.mail.util.CRLFOutputStream>;
					public lastb: number;
					public atBOL: boolean;
					public constructor();
					public write(b: number): void;
					public writeln(): void;
					public write(b: number[]): void;
					public close(): void;
					public write(b: number[], off: number, len: number): void;
					public constructor(os: java.io.OutputStream);
					public flush(): void;
					public constructor(out: java.io.OutputStream);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class FolderClosedIOException extends java.io.IOException {
					public static class: java.lang.Class<com.sun.mail.util.FolderClosedIOException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(folder: javax.mail.Folder);
					public getFolder(): javax.mail.Folder;
					public constructor(message: string, cause: java.lang.Throwable);
					public constructor(folder: javax.mail.Folder, message: string);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class LineInputStream extends java.io.FilterInputStream {
					public static class: java.lang.Class<com.sun.mail.util.LineInputStream>;
					public readLine(): string;
					public constructor(_in_: java.io.InputStream);
					public constructor();
					public close(): void;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class LineOutputStream extends java.io.FilterOutputStream {
					public static class: java.lang.Class<com.sun.mail.util.LineOutputStream>;
					public constructor();
					public writeln(): void;
					public close(): void;
					public flush(): void;
					public writeln(s: string): void;
					public constructor(out: java.io.OutputStream);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class MessageRemovedIOException extends java.io.IOException {
					public static class: java.lang.Class<com.sun.mail.util.MessageRemovedIOException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(s: string);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class QDecoderStream extends com.sun.mail.util.QPDecoderStream {
					public static class: java.lang.Class<com.sun.mail.util.QDecoderStream>;
					public read(): number;
					public constructor(_in_: java.io.InputStream);
					public constructor();
					public read(b: number[]): number;
					public close(): void;
					public read(buf: number[], off: number, len: number): number;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class QEncoderStream extends com.sun.mail.util.QPEncoderStream {
					public static class: java.lang.Class<com.sun.mail.util.QEncoderStream>;
					public write(c: number): void;
					public static encodedLength(b: number[], encodingWord: boolean): number;
					public constructor(out: java.io.OutputStream, encodingWord: boolean);
					public constructor();
					public constructor(out: java.io.OutputStream, bytesPerLine: number);
					public write(b: number[]): void;
					public close(): void;
					public write(b: number[], off: number, len: number): void;
					public flush(): void;
					public constructor(out: java.io.OutputStream);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class QPDecoderStream extends java.io.FilterInputStream {
					public static class: java.lang.Class<com.sun.mail.util.QPDecoderStream>;
					public ba: number[];
					public spaces: number;
					public available(): number;
					public read(): number;
					public constructor(_in_: java.io.InputStream);
					public read(b: number[], off: number, len: number): number;
					public constructor();
					public read(b: number[]): number;
					public markSupported(): boolean;
					public close(): void;
					public read(buf: number[], off: number, len: number): number;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class QPEncoderStream extends java.io.FilterOutputStream {
					public static class: java.lang.Class<com.sun.mail.util.QPEncoderStream>;
					public write(c: number): void;
					public constructor();
					public write(b: number): void;
					public constructor(out: java.io.OutputStream, bytesPerLine: number);
					public write(b: number[]): void;
					public close(): void;
					public write(b: number[], off: number, len: number): void;
					public flush(): void;
					public output(c: number, encode: boolean): void;
					public constructor(out: java.io.OutputStream);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class SocketFetcher extends java.lang.Object {
					public static class: java.lang.Class<com.sun.mail.util.SocketFetcher>;
					public static getSocket(host: string, port: number, props: java.util.Properties, prefix: string, useSSL: boolean): java.net.Socket;
					public static startTLS(socket: java.net.Socket, props: java.util.Properties, prefix: string): java.net.Socket;
					public static getSocket(host: string, port: number, props: java.util.Properties, prefix: string): java.net.Socket;
					public static startTLS(socket: java.net.Socket): java.net.Socket;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class TraceInputStream extends java.io.FilterInputStream {
					public static class: java.lang.Class<com.sun.mail.util.TraceInputStream>;
					public read(): number;
					public constructor(_in_: java.io.InputStream);
					public setQuote(quote: boolean): void;
					public read(b: number[], off: number, len: number): number;
					public constructor();
					public read(b: number[]): number;
					public close(): void;
					public setTrace(trace: boolean): void;
					public constructor(_in_: java.io.InputStream, traceOut: java.io.OutputStream);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class TraceOutputStream extends java.io.FilterOutputStream {
					public static class: java.lang.Class<com.sun.mail.util.TraceOutputStream>;
					public setQuote(quote: boolean): void;
					public constructor();
					public write(b: number): void;
					public write(b: number[]): void;
					public close(): void;
					public write(b: number[], off: number, len: number): void;
					public flush(): void;
					public constructor(out: java.io.OutputStream, traceOut: java.io.OutputStream);
					public setTrace(trace: boolean): void;
					public constructor(out: java.io.OutputStream);
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class UUDecoderStream extends java.io.FilterInputStream {
					public static class: java.lang.Class<com.sun.mail.util.UUDecoderStream>;
					public available(): number;
					public read(): number;
					public constructor(_in_: java.io.InputStream);
					public read(b: number[], off: number, len: number): number;
					public constructor();
					public read(b: number[]): number;
					public getName(): string;
					public markSupported(): boolean;
					public close(): void;
					public read(buf: number[], off: number, len: number): number;
					public getMode(): number;
				}
			}
		}
	}
}

declare module com {
	export module sun {
		export module mail {
			export module util {
				export class UUEncoderStream extends java.io.FilterOutputStream {
					public static class: java.lang.Class<com.sun.mail.util.UUEncoderStream>;
					public name: string;
					public mode: number;
					public write(c: number): void;
					public constructor(out: java.io.OutputStream, name: string, mode: number);
					public constructor();
					public write(b: number): void;
					public write(b: number[]): void;
					public close(): void;
					public write(b: number[], off: number, len: number): void;
					public write(data: number[]): void;
					public flush(): void;
					public constructor(out: java.io.OutputStream, name: string);
					public setNameMode(name: string, mode: number): void;
					public constructor(out: java.io.OutputStream);
				}
			}
		}
	}
}

declare module javax {
	export module mail {
		export abstract class Address extends java.lang.Object implements java.io.Serializable {
			public static class: java.lang.Class<javax.mail.Address>;
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public constructor();
			public getType(): string;
		}
	}
}

declare module javax {
	export module mail {
		export class AuthenticationFailedException extends javax.mail.MessagingException {
			public static class: java.lang.Class<javax.mail.AuthenticationFailedException>;
			public constructor(message: string);
			public constructor(s: string, e: java.lang.Exception);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(s: string);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module javax {
	export module mail {
		export abstract class Authenticator extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.Authenticator>;
			public getRequestingPrompt(): string;
			public getRequestingPort(): number;
			public getPasswordAuthentication(): javax.mail.PasswordAuthentication;
			public constructor();
			public getRequestingSite(): java.net.InetAddress;
			public getRequestingProtocol(): string;
			public getDefaultUserName(): string;
		}
	}
}

declare module javax {
	export module mail {
		export abstract class BodyPart extends java.lang.Object implements javax.mail.Part {
			public static class: java.lang.Class<javax.mail.BodyPart>;
			public parent: javax.mail.Multipart;
			public isMimeType(param0: string): boolean;
			public setHeader(param0: string, param1: string): void;
			public getSize(): number;
			public setContent(param0: any, param1: string): void;
			public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
			public getLineCount(): number;
			public removeHeader(param0: string): void;
			public setDataHandler(param0: javax.activation.DataHandler): void;
			public getParent(): javax.mail.Multipart;
			public getDisposition(): string;
			public getDataHandler(): javax.activation.DataHandler;
			public setText(param0: string): void;
			public addHeader(param0: string, param1: string): void;
			public getHeader(param0: string): string[];
			public setDescription(param0: string): void;
			public constructor();
			public getContentType(): string;
			public setFileName(param0: string): void;
			public getContent(): any;
			public writeTo(param0: java.io.OutputStream): void;
			public getAllHeaders(): java.util.Enumeration<any>;
			public getInputStream(): java.io.InputStream;
			public setContent(param0: javax.mail.Multipart): void;
			public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
			public getFileName(): string;
			public setDisposition(param0: string): void;
			public getDescription(): string;
		}
	}
}

declare module javax {
	export module mail {
		export class EventQueue extends java.lang.Object implements java.lang.Runnable {
			public static class: java.lang.Class<javax.mail.EventQueue>;
			public run(): void;
			public constructor();
			public enqueue(event: javax.mail.event.MailEvent, vector: java.util.Vector<any>): void;
		}
		export module EventQueue {
			export class QueueElement extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.EventQueue.QueueElement>;
			}
		}
	}
}

declare module javax {
	export module mail {
		export class FetchProfile extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.FetchProfile>;
			public contains(headerName: string): boolean;
			public getHeaderNames(): string[];
			public getItems(): javax.mail.FetchProfile.Item[];
			public constructor();
			public contains(item: javax.mail.FetchProfile.Item): boolean;
			public add(item: javax.mail.FetchProfile.Item): void;
			public add(headerName: string): void;
		}
		export module FetchProfile {
			export class Item extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.FetchProfile.Item>;
				public static ENVELOPE: javax.mail.FetchProfile.Item;
				public static CONTENT_INFO: javax.mail.FetchProfile.Item;
				public static FLAGS: javax.mail.FetchProfile.Item;
				public constructor(name: string);
			}
		}
	}
}

declare module javax {
	export module mail {
		export class Flags extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
			public static class: java.lang.Class<javax.mail.Flags>;
			public remove(f: javax.mail.Flags): void;
			public contains(f: javax.mail.Flags): boolean;
			public add(flag: string): void;
			public constructor(flag: javax.mail.Flags.Flag);
			public getSystemFlags(): javax.mail.Flags.Flag[];
			public constructor();
			public remove(flag: javax.mail.Flags.Flag): void;
			public remove(flag: string): void;
			public constructor(flags: javax.mail.Flags);
			public constructor(flag: string);
			public add(flag: javax.mail.Flags.Flag): void;
			public contains(flag: javax.mail.Flags.Flag): boolean;
			public contains(flag: string): boolean;
			public add(f: javax.mail.Flags): void;
			public clone(): any;
			public equals(obj: any): boolean;
			public getUserFlags(): string[];
			public hashCode(): number;
		}
		export module Flags {
			export class Flag extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.Flags.Flag>;
				public static ANSWERED: javax.mail.Flags.Flag;
				public static DELETED: javax.mail.Flags.Flag;
				public static DRAFT: javax.mail.Flags.Flag;
				public static FLAGGED: javax.mail.Flags.Flag;
				public static RECENT: javax.mail.Flags.Flag;
				public static SEEN: javax.mail.Flags.Flag;
				public static USER: javax.mail.Flags.Flag;
			}
		}
	}
}

declare module javax {
	export module mail {
		export abstract class Folder extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.Folder>;
			public store: javax.mail.Store;
			public mode: number;
			public static HOLDS_MESSAGES: number;
			public static HOLDS_FOLDERS: number;
			public static READ_ONLY: number;
			public static READ_WRITE: number;
			public getStore(): javax.mail.Store;
			public create(param0: number): boolean;
			public removeMessageCountListener(l: javax.mail.event.MessageCountListener): void;
			public close(param0: boolean): void;
			public notifyFolderListeners(type: number): void;
			public removeConnectionListener(l: javax.mail.event.ConnectionListener): void;
			public setFlags(msgnums: number[], flag: javax.mail.Flags, value: boolean): void;
			public search(term: javax.mail.search.SearchTerm, msgs: javax.mail.Message[]): javax.mail.Message[];
			public addMessageCountListener(l: javax.mail.event.MessageCountListener): void;
			public isOpen(): boolean;
			public getMessageCount(): number;
			public removeFolderListener(l: javax.mail.event.FolderListener): void;
			public notifyMessageChangedListeners(type: number, msg: javax.mail.Message): void;
			public copyMessages(msgs: javax.mail.Message[], folder: javax.mail.Folder): void;
			public search(term: javax.mail.search.SearchTerm): javax.mail.Message[];
			public renameTo(param0: javax.mail.Folder): boolean;
			public getNewMessageCount(): number;
			public listSubscribed(pattern: string): javax.mail.Folder[];
			public notifyMessageAddedListeners(msgs: javax.mail.Message[]): void;
			public list(param0: string): javax.mail.Folder[];
			public getMessages(msgnums: number[]): javax.mail.Message[];
			public expunge(): javax.mail.Message[];
			public getParent(): javax.mail.Folder;
			public getMessages(start: number, end: number): javax.mail.Message[];
			public getMode(): number;
			public delete(param0: boolean): boolean;
			public getUnreadMessageCount(): number;
			public constructor(store: javax.mail.Store);
			public getSeparator(): string;
			public getType(): number;
			public setFlags(msgs: javax.mail.Message[], flag: javax.mail.Flags, value: boolean): void;
			public removeMessageChangedListener(l: javax.mail.event.MessageChangedListener): void;
			public fetch(msgs: javax.mail.Message[], fp: javax.mail.FetchProfile): void;
			public setFlags(start: number, end: number, flag: javax.mail.Flags, value: boolean): void;
			public isSubscribed(): boolean;
			public notifyMessageRemovedListeners(removed: boolean, msgs: javax.mail.Message[]): void;
			public listSubscribed(): javax.mail.Folder[];
			public appendMessages(param0: javax.mail.Message[]): void;
			public getFolder(param0: string): javax.mail.Folder;
			public setSubscribed(subscribe: boolean): void;
			public getPermanentFlags(): javax.mail.Flags;
			public notifyConnectionListeners(type: number): void;
			public getFullName(): string;
			public getMessages(): javax.mail.Message[];
			public finalize(): void;
			public addMessageChangedListener(l: javax.mail.event.MessageChangedListener): void;
			public list(): javax.mail.Folder[];
			public exists(): boolean;
			public open(param0: number): void;
			public toString(): string;
			public getName(): string;
			public getURLName(): javax.mail.URLName;
			public getMessage(param0: number): javax.mail.Message;
			public notifyFolderRenamedListeners(folder: javax.mail.Folder): void;
			public addConnectionListener(l: javax.mail.event.ConnectionListener): void;
			public addFolderListener(l: javax.mail.event.FolderListener): void;
			public hasNewMessages(): boolean;
			public getDeletedMessageCount(): number;
		}
		export module Folder {
			export class TerminatorEvent extends javax.mail.event.MailEvent {
				public static class: java.lang.Class<javax.mail.Folder.TerminatorEvent>;
				public dispatch(listener: any): void;
				public dispatch(param0: any): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export class FolderClosedException extends javax.mail.MessagingException {
			public static class: java.lang.Class<javax.mail.FolderClosedException>;
			public constructor(s: string, e: java.lang.Exception);
			public constructor(folder: javax.mail.Folder);
			public getFolder(): javax.mail.Folder;
			public constructor(folder: javax.mail.Folder, message: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(s: string);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module javax {
	export module mail {
		export class FolderNotFoundException extends javax.mail.MessagingException {
			public static class: java.lang.Class<javax.mail.FolderNotFoundException>;
			public constructor(s: string, e: java.lang.Exception);
			public constructor(folder: javax.mail.Folder);
			public constructor(s: string, folder: javax.mail.Folder);
			public getFolder(): javax.mail.Folder;
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(s: string);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
			public constructor(folder: javax.mail.Folder, s: string);
		}
	}
}

declare module javax {
	export module mail {
		export class Header extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.Header>;
			public name: string;
			public value: string;
			public constructor(name: string, value: string);
			public getName(): string;
			public getValue(): string;
		}
	}
}

declare module javax {
	export module mail {
		export class IllegalWriteException extends javax.mail.MessagingException {
			public static class: java.lang.Class<javax.mail.IllegalWriteException>;
			public constructor(s: string, e: java.lang.Exception);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(s: string);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module javax {
	export module mail {
		export abstract class Message extends java.lang.Object implements javax.mail.Part {
			public static class: java.lang.Class<javax.mail.Message>;
			public msgnum: number;
			public expunged: boolean;
			public folder: javax.mail.Folder;
			public session: javax.mail.Session;
			public setFrom(): void;
			public getReplyTo(): javax.mail.Address[];
			public getReceivedDate(): java.util.Date;
			public setFlags(param0: javax.mail.Flags, param1: boolean): void;
			public isMimeType(param0: string): boolean;
			public constructor(folder: javax.mail.Folder, msgnum: number);
			public getFrom(): javax.mail.Address[];
			public setContent(param0: any, param1: string): void;
			public getLineCount(): number;
			public setReplyTo(addresses: javax.mail.Address[]): void;
			public removeHeader(param0: string): void;
			public isSet(flag: javax.mail.Flags.Flag): boolean;
			public getDisposition(): string;
			public getDataHandler(): javax.activation.DataHandler;
			public setRecipients(param0: javax.mail.Message.RecipientType, param1: javax.mail.Address[]): void;
			public getHeader(param0: string): string[];
			public setMessageNumber(msgnum: number): void;
			public constructor();
			public reply(param0: boolean): javax.mail.Message;
			public getAllRecipients(): javax.mail.Address[];
			public setExpunged(expunged: boolean): void;
			public setFlag(flag: javax.mail.Flags.Flag, set: boolean): void;
			public isExpunged(): boolean;
			public writeTo(param0: java.io.OutputStream): void;
			public getAllHeaders(): java.util.Enumeration<any>;
			public getSubject(): string;
			public getMessageNumber(): number;
			public setRecipient(type: javax.mail.Message.RecipientType, address: javax.mail.Address): void;
			public getFileName(): string;
			public getDescription(): string;
			public setSubject(param0: string): void;
			public setSentDate(param0: java.util.Date): void;
			public getSentDate(): java.util.Date;
			public saveChanges(): void;
			public setHeader(param0: string, param1: string): void;
			public getSize(): number;
			public getFlags(): javax.mail.Flags;
			public setFrom(param0: javax.mail.Address): void;
			public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
			public constructor(session: javax.mail.Session);
			public addRecipient(type: javax.mail.Message.RecipientType, address: javax.mail.Address): void;
			public match(term: javax.mail.search.SearchTerm): boolean;
			public setDataHandler(param0: javax.activation.DataHandler): void;
			public setText(param0: string): void;
			public addHeader(param0: string, param1: string): void;
			public setDescription(param0: string): void;
			public addFrom(param0: javax.mail.Address[]): void;
			public getRecipients(param0: javax.mail.Message.RecipientType): javax.mail.Address[];
			public getContentType(): string;
			public setFileName(param0: string): void;
			public getContent(): any;
			public addRecipients(param0: javax.mail.Message.RecipientType, param1: javax.mail.Address[]): void;
			public getInputStream(): java.io.InputStream;
			public setContent(param0: javax.mail.Multipart): void;
			public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
			public getFolder(): javax.mail.Folder;
			public setDisposition(param0: string): void;
		}
		export module Message {
			export class RecipientType extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<javax.mail.Message.RecipientType>;
				public static TO: javax.mail.Message.RecipientType;
				public static CC: javax.mail.Message.RecipientType;
				public static BCC: javax.mail.Message.RecipientType;
				public type: string;
				public constructor(type: string);
				public toString(): string;
				public readResolve(): any;
			}
		}
	}
}

declare module javax {
	export module mail {
		export class MessageAware extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.MessageAware>;
			/**
			 * Constructs a new instance of the javax.mail.MessageAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getMessageContext(): javax.mail.MessageContext;
			});
			public constructor();
			public getMessageContext(): javax.mail.MessageContext;
		}
	}
}

declare module javax {
	export module mail {
		export class MessageContext extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.MessageContext>;
			public getMessage(): javax.mail.Message;
			public getSession(): javax.mail.Session;
			public constructor(part: javax.mail.Part);
			public getPart(): javax.mail.Part;
		}
	}
}

declare module javax {
	export module mail {
		export class MessageRemovedException extends javax.mail.MessagingException {
			public static class: java.lang.Class<javax.mail.MessageRemovedException>;
			public constructor(s: string, e: java.lang.Exception);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(s: string);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module javax {
	export module mail {
		export class MessagingException extends java.lang.Exception {
			public static class: java.lang.Class<javax.mail.MessagingException>;
			public constructor(message: string);
			public getNextException(): java.lang.Exception;
			public toString(): string;
			public constructor(s: string, e: java.lang.Exception);
			public getCause(): java.lang.Throwable;
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor(s: string);
			public constructor();
			public setNextException(ex: java.lang.Exception): boolean;
		}
	}
}

declare module javax {
	export module mail {
		export class MethodNotSupportedException extends javax.mail.MessagingException {
			public static class: java.lang.Class<javax.mail.MethodNotSupportedException>;
			public constructor(s: string, e: java.lang.Exception);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(s: string);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module javax {
	export module mail {
		export abstract class Multipart extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.Multipart>;
			public parts: java.util.Vector<any>;
			public contentType: string;
			public parent: javax.mail.Part;
			public setMultipartDataSource(mp: javax.mail.MultipartDataSource): void;
			public setParent(parent: javax.mail.Part): void;
			public addBodyPart(part: javax.mail.BodyPart, index: number): void;
			public writeTo(param0: java.io.OutputStream): void;
			public addBodyPart(part: javax.mail.BodyPart): void;
			public removeBodyPart(index: number): void;
			public removeBodyPart(part: javax.mail.BodyPart): boolean;
			public constructor();
			public getContentType(): string;
			public getCount(): number;
			public getParent(): javax.mail.Part;
			public getBodyPart(index: number): javax.mail.BodyPart;
		}
	}
}

declare module javax {
	export module mail {
		export class MultipartDataSource extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.MultipartDataSource>;
			/**
			 * Constructs a new instance of the javax.mail.MultipartDataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getCount(): number;
				getBodyPart(param0: number): javax.mail.BodyPart;
			});
			public constructor();
			public getBodyPart(param0: number): javax.mail.BodyPart;
			public getCount(): number;
		}
	}
}

declare module javax {
	export module mail {
		export class NoSuchProviderException extends javax.mail.MessagingException {
			public static class: java.lang.Class<javax.mail.NoSuchProviderException>;
			public constructor(message: string);
			public constructor(s: string, e: java.lang.Exception);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(s: string);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module javax {
	export module mail {
		export class Part extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.Part>;
			/**
			 * Constructs a new instance of the javax.mail.Part interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSize(): number;
				getLineCount(): number;
				getContentType(): string;
				isMimeType(param0: string): boolean;
				getDisposition(): string;
				setDisposition(param0: string): void;
				getDescription(): string;
				setDescription(param0: string): void;
				getFileName(): string;
				setFileName(param0: string): void;
				getInputStream(): java.io.InputStream;
				getDataHandler(): javax.activation.DataHandler;
				getContent(): any;
				setDataHandler(param0: javax.activation.DataHandler): void;
				setContent(param0: any, param1: string): void;
				setText(param0: string): void;
				setContent(param0: javax.mail.Multipart): void;
				writeTo(param0: java.io.OutputStream): void;
				getHeader(param0: string): string[];
				setHeader(param0: string, param1: string): void;
				addHeader(param0: string, param1: string): void;
				removeHeader(param0: string): void;
				getAllHeaders(): java.util.Enumeration<any>;
				getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
				getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
			});
			public constructor();
			public static ATTACHMENT: string;
			public static INLINE: string;
			public isMimeType(param0: string): boolean;
			public setHeader(param0: string, param1: string): void;
			public getSize(): number;
			public setContent(param0: any, param1: string): void;
			public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
			public getLineCount(): number;
			public removeHeader(param0: string): void;
			public setDataHandler(param0: javax.activation.DataHandler): void;
			public getDisposition(): string;
			public getDataHandler(): javax.activation.DataHandler;
			public setText(param0: string): void;
			public addHeader(param0: string, param1: string): void;
			public getHeader(param0: string): string[];
			public setDescription(param0: string): void;
			public getContentType(): string;
			public setFileName(param0: string): void;
			public getContent(): any;
			public writeTo(param0: java.io.OutputStream): void;
			public getAllHeaders(): java.util.Enumeration<any>;
			public getInputStream(): java.io.InputStream;
			public setContent(param0: javax.mail.Multipart): void;
			public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
			public getFileName(): string;
			public setDisposition(param0: string): void;
			public getDescription(): string;
		}
	}
}

declare module javax {
	export module mail {
		export class PasswordAuthentication extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.PasswordAuthentication>;
			public getUserName(): string;
			public constructor(userName: string, password: string);
			public getPassword(): string;
		}
	}
}

declare module javax {
	export module mail {
		export class Provider extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.Provider>;
			public getType(): javax.mail.Provider.Type;
			public toString(): string;
			public getVendor(): string;
			public getClassName(): string;
			public getProtocol(): string;
			public getVersion(): string;
			public constructor(type: javax.mail.Provider.Type, protocol: string, classname: string, vendor: string, version: string);
		}
		export module Provider {
			export class Type extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.Provider.Type>;
				public static STORE: javax.mail.Provider.Type;
				public static TRANSPORT: javax.mail.Provider.Type;
				public toString(): string;
			}
		}
	}
}

declare module javax {
	export module mail {
		export class Quota extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.Quota>;
			public quotaRoot: string;
			public resources: javax.mail.Quota.Resource[];
			public constructor(quotaRoot: string);
			public setResourceLimit(name: string, limit: number): void;
		}
		export module Quota {
			export class Resource extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.Quota.Resource>;
				public name: string;
				public usage: number;
				public limit: number;
				public constructor(name: string, usage: number, param2: number);
			}
		}
	}
}

declare module javax {
	export module mail {
		export class QuotaAwareStore extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.QuotaAwareStore>;
			/**
			 * Constructs a new instance of the javax.mail.QuotaAwareStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getQuota(param0: string): javax.mail.Quota[];
				setQuota(param0: javax.mail.Quota): void;
			});
			public constructor();
			public setQuota(param0: javax.mail.Quota): void;
			public getQuota(param0: string): javax.mail.Quota[];
		}
	}
}

declare module javax {
	export module mail {
		export class ReadOnlyFolderException extends javax.mail.MessagingException {
			public static class: java.lang.Class<javax.mail.ReadOnlyFolderException>;
			public constructor(s: string, e: java.lang.Exception);
			public constructor(folder: javax.mail.Folder);
			public getFolder(): javax.mail.Folder;
			public constructor(folder: javax.mail.Folder, message: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(s: string);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module javax {
	export module mail {
		export class SendFailedException extends javax.mail.MessagingException {
			public static class: java.lang.Class<javax.mail.SendFailedException>;
			public invalid: javax.mail.Address[];
			public validSent: javax.mail.Address[];
			public validUnsent: javax.mail.Address[];
			public getValidSentAddresses(): javax.mail.Address[];
			public getValidUnsentAddresses(): javax.mail.Address[];
			public constructor(s: string, e: java.lang.Exception);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(s: string);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
			public constructor(msg: string, ex: java.lang.Exception, validSent: javax.mail.Address[], validUnsent: javax.mail.Address[], invalid: javax.mail.Address[]);
			public getInvalidAddresses(): javax.mail.Address[];
		}
	}
}

declare module javax {
	export module mail {
		export abstract class Service extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.Service>;
			public session: javax.mail.Session;
			public url: javax.mail.URLName;
			public debug: boolean;
			public queueEvent(event: javax.mail.event.MailEvent, vector: java.util.Vector<any>): void;
			public removeConnectionListener(l: javax.mail.event.ConnectionListener): void;
			public setURLName(url: javax.mail.URLName): void;
			public connect(user: string, password: string): void;
			public setConnected(connected: boolean): void;
			public toString(): string;
			public getURLName(): javax.mail.URLName;
			public notifyConnectionListeners(type: number): void;
			public protocolConnect(host: string, port: number, user: string, password: string): boolean;
			public constructor(session: javax.mail.Session, urlname: javax.mail.URLName);
			public connect(host: string, user: string, password: string): void;
			public connect(host: string, port: number, user: string, password: string): void;
			public isConnected(): boolean;
			public addConnectionListener(l: javax.mail.event.ConnectionListener): void;
			public connect(): void;
			public close(): void;
			public finalize(): void;
		}
		export module Service {
			export class TerminatorEvent extends javax.mail.event.MailEvent {
				public static class: java.lang.Class<javax.mail.Service.TerminatorEvent>;
				public dispatch(listener: any): void;
				public dispatch(param0: any): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export class Session extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.Session>;
			public static getInstance(props: java.util.Properties): javax.mail.Session;
			public static getDefaultInstance(props: java.util.Properties, authenticator: javax.mail.Authenticator): javax.mail.Session;
			public getStore(): javax.mail.Store;
			public getTransport(url: javax.mail.URLName): javax.mail.Transport;
			public setPasswordAuthentication(url: javax.mail.URLName, pw: javax.mail.PasswordAuthentication): void;
			public getTransport(address: javax.mail.Address): javax.mail.Transport;
			public setProvider(provider: javax.mail.Provider): void;
			public setDebug(debug: boolean): void;
			public getDebug(): boolean;
			public getTransport(provider: javax.mail.Provider): javax.mail.Transport;
			public getProvider(protocol: string): javax.mail.Provider;
			public getStore(protocol: string): javax.mail.Store;
			public getFolder(url: javax.mail.URLName): javax.mail.Folder;
			public getStore(provider: javax.mail.Provider): javax.mail.Store;
			public static getDefaultInstance(props: java.util.Properties): javax.mail.Session;
			public setProtocolForAddress(addresstype: string, protocol: string): void;
			public getTransport(): javax.mail.Transport;
			public getPasswordAuthentication(url: javax.mail.URLName): javax.mail.PasswordAuthentication;
			public getTransport(protocol: string): javax.mail.Transport;
			public getProperty(name: string): string;
			public getProperties(): java.util.Properties;
			public setDebugOut(out: java.io.PrintStream): void;
			public getProviders(): javax.mail.Provider[];
			public getDebugOut(): java.io.PrintStream;
			public getStore(url: javax.mail.URLName): javax.mail.Store;
			public requestPasswordAuthentication(addr: java.net.InetAddress, port: number, protocol: string, prompt: string, defaultUserName: string): javax.mail.PasswordAuthentication;
			public static getInstance(props: java.util.Properties, authenticator: javax.mail.Authenticator): javax.mail.Session;
			public addProvider(provider: javax.mail.Provider): void;
		}
	}
}

declare module javax {
	export module mail {
		export abstract class Store extends javax.mail.Service {
			public static class: java.lang.Class<javax.mail.Store>;
			public notifyFolderListeners(type: number, folder: javax.mail.Folder): void;
			public getDefaultFolder(): javax.mail.Folder;
			public getFolder(param0: string): javax.mail.Folder;
			public removeFolderListener(l: javax.mail.event.FolderListener): void;
			public notifyFolderRenamedListeners(oldF: javax.mail.Folder, newF: javax.mail.Folder): void;
			public constructor(session: javax.mail.Session, urlname: javax.mail.URLName);
			public getFolder(param0: javax.mail.URLName): javax.mail.Folder;
			public addStoreListener(l: javax.mail.event.StoreListener): void;
			public addFolderListener(l: javax.mail.event.FolderListener): void;
			public notifyStoreListeners(type: number, message: string): void;
			public getSharedNamespaces(): javax.mail.Folder[];
			public removeStoreListener(l: javax.mail.event.StoreListener): void;
			public getPersonalNamespaces(): javax.mail.Folder[];
			public getUserNamespaces(user: string): javax.mail.Folder[];
		}
	}
}

declare module javax {
	export module mail {
		export class StoreClosedException extends javax.mail.MessagingException {
			public static class: java.lang.Class<javax.mail.StoreClosedException>;
			public getStore(): javax.mail.Store;
			public constructor(store: javax.mail.Store);
			public constructor(s: string, e: java.lang.Exception);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(s: string);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
			public constructor(store: javax.mail.Store, message: string);
		}
	}
}

declare module javax {
	export module mail {
		export class StreamLoader extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.StreamLoader>;
			/**
			 * Constructs a new instance of the javax.mail.StreamLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				load(param0: java.io.InputStream): void;
			});
			public constructor();
			public load(param0: java.io.InputStream): void;
		}
	}
}

declare module javax {
	export module mail {
		export abstract class Transport extends javax.mail.Service {
			public static class: java.lang.Class<javax.mail.Transport>;
			public sendMessage(param0: javax.mail.Message, param1: javax.mail.Address[]): void;
			public addTransportListener(l: javax.mail.event.TransportListener): void;
			public removeTransportListener(l: javax.mail.event.TransportListener): void;
			public constructor(session: javax.mail.Session, urlname: javax.mail.URLName);
			public static send(msg: javax.mail.Message): void;
			public static send(msg: javax.mail.Message, addresses: javax.mail.Address[]): void;
			public notifyTransportListeners(type: number, validSent: javax.mail.Address[], validUnsent: javax.mail.Address[], invalid: javax.mail.Address[], msg: javax.mail.Message): void;
		}
	}
}

declare module javax {
	export module mail {
		export class UIDFolder extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.UIDFolder>;
			/**
			 * Constructs a new instance of the javax.mail.UIDFolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getUIDValidity(): number;
				getMessageByUID(param0: number): javax.mail.Message;
				getMessagesByUID(param0: number, param1: number): javax.mail.Message[];
				getMessagesByUID(param0: number[]): javax.mail.Message[];
				getUID(param0: javax.mail.Message): number;
			});
			public constructor();
			public static LASTUID: number;
			public getMessagesByUID(param0: number[]): javax.mail.Message[];
			public getUID(param0: javax.mail.Message): number;
			public getUIDValidity(): number;
			public getMessageByUID(param0: number): javax.mail.Message;
			public getMessagesByUID(param0: number, param1: number): javax.mail.Message[];
		}
		export module UIDFolder {
			export class FetchProfileItem extends javax.mail.FetchProfile.Item {
				public static class: java.lang.Class<javax.mail.UIDFolder.FetchProfileItem>;
				public static UID: javax.mail.UIDFolder.FetchProfileItem;
				public constructor(name: string);
			}
		}
	}
}

declare module javax {
	export module mail {
		export class URLName extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.URLName>;
			public fullURL: string;
			public getUsername(): string;
			public getHost(): string;
			public getFile(): string;
			public constructor(protocol: string, host: string, port: number, file: string, username: string, password: string);
			public constructor(url: java.net.URL);
			public getRef(): string;
			public toString(): string;
			public getURL(): java.net.URL;
			public equals(obj: any): boolean;
			public parseString(url: string): void;
			public getProtocol(): string;
			public getPort(): number;
			public getPassword(): string;
			public constructor(url: string);
			public hashCode(): number;
		}
	}
}

declare module javax {
	export module mail {
		export class Version extends java.lang.Object {
			public static class: java.lang.Class<javax.mail.Version>;
			public static version: string;
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export abstract class ConnectionAdapter extends java.lang.Object implements javax.mail.event.ConnectionListener {
				public static class: java.lang.Class<javax.mail.event.ConnectionAdapter>;
				public closed(e: javax.mail.event.ConnectionEvent): void;
				public opened(param0: javax.mail.event.ConnectionEvent): void;
				public disconnected(e: javax.mail.event.ConnectionEvent): void;
				public opened(e: javax.mail.event.ConnectionEvent): void;
				public closed(param0: javax.mail.event.ConnectionEvent): void;
				public disconnected(param0: javax.mail.event.ConnectionEvent): void;
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export class ConnectionEvent extends javax.mail.event.MailEvent {
				public static class: java.lang.Class<javax.mail.event.ConnectionEvent>;
				public static OPENED: number;
				public static DISCONNECTED: number;
				public static CLOSED: number;
				public type: number;
				public dispatch(listener: any): void;
				public getType(): number;
				public constructor(source: any);
				public constructor(source: any, type: number);
				public dispatch(param0: any): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export class ConnectionListener extends java.lang.Object implements java.util.EventListener {
				public static class: java.lang.Class<javax.mail.event.ConnectionListener>;
				/**
				 * Constructs a new instance of the javax.mail.event.ConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					opened(param0: javax.mail.event.ConnectionEvent): void;
					disconnected(param0: javax.mail.event.ConnectionEvent): void;
					closed(param0: javax.mail.event.ConnectionEvent): void;
				});
				public constructor();
				public opened(param0: javax.mail.event.ConnectionEvent): void;
				public closed(param0: javax.mail.event.ConnectionEvent): void;
				public disconnected(param0: javax.mail.event.ConnectionEvent): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export abstract class FolderAdapter extends java.lang.Object implements javax.mail.event.FolderListener {
				public static class: java.lang.Class<javax.mail.event.FolderAdapter>;
				public folderDeleted(e: javax.mail.event.FolderEvent): void;
				public folderDeleted(param0: javax.mail.event.FolderEvent): void;
				public folderCreated(param0: javax.mail.event.FolderEvent): void;
				public folderRenamed(e: javax.mail.event.FolderEvent): void;
				public folderRenamed(param0: javax.mail.event.FolderEvent): void;
				public folderCreated(e: javax.mail.event.FolderEvent): void;
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export class FolderEvent extends javax.mail.event.MailEvent {
				public static class: java.lang.Class<javax.mail.event.FolderEvent>;
				public static CREATED: number;
				public static DELETED: number;
				public static RENAMED: number;
				public type: number;
				public folder: javax.mail.Folder;
				public newFolder: javax.mail.Folder;
				public dispatch(listener: any): void;
				public getType(): number;
				public constructor(source: any);
				public getFolder(): javax.mail.Folder;
				public constructor(source: any, folder: javax.mail.Folder, type: number);
				public getNewFolder(): javax.mail.Folder;
				public constructor(source: any, oldFolder: javax.mail.Folder, newFolder: javax.mail.Folder, type: number);
				public dispatch(param0: any): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export class FolderListener extends java.lang.Object implements java.util.EventListener {
				public static class: java.lang.Class<javax.mail.event.FolderListener>;
				/**
				 * Constructs a new instance of the javax.mail.event.FolderListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					folderCreated(param0: javax.mail.event.FolderEvent): void;
					folderDeleted(param0: javax.mail.event.FolderEvent): void;
					folderRenamed(param0: javax.mail.event.FolderEvent): void;
				});
				public constructor();
				public folderDeleted(param0: javax.mail.event.FolderEvent): void;
				public folderCreated(param0: javax.mail.event.FolderEvent): void;
				public folderRenamed(param0: javax.mail.event.FolderEvent): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export abstract class MailEvent extends java.util.EventObject {
				public static class: java.lang.Class<javax.mail.event.MailEvent>;
				public constructor(source: any);
				public dispatch(param0: any): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export class MessageChangedEvent extends javax.mail.event.MailEvent {
				public static class: java.lang.Class<javax.mail.event.MessageChangedEvent>;
				public static FLAGS_CHANGED: number;
				public static ENVELOPE_CHANGED: number;
				public type: number;
				public msg: javax.mail.Message;
				public dispatch(listener: any): void;
				public constructor(source: any, type: number, msg: javax.mail.Message);
				public constructor(source: any);
				public getMessage(): javax.mail.Message;
				public getMessageChangeType(): number;
				public dispatch(param0: any): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export class MessageChangedListener extends java.lang.Object implements java.util.EventListener {
				public static class: java.lang.Class<javax.mail.event.MessageChangedListener>;
				/**
				 * Constructs a new instance of the javax.mail.event.MessageChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					messageChanged(param0: javax.mail.event.MessageChangedEvent): void;
				});
				public constructor();
				public messageChanged(param0: javax.mail.event.MessageChangedEvent): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export abstract class MessageCountAdapter extends java.lang.Object implements javax.mail.event.MessageCountListener {
				public static class: java.lang.Class<javax.mail.event.MessageCountAdapter>;
				public messagesRemoved(param0: javax.mail.event.MessageCountEvent): void;
				public messagesAdded(param0: javax.mail.event.MessageCountEvent): void;
				public messagesAdded(e: javax.mail.event.MessageCountEvent): void;
				public messagesRemoved(e: javax.mail.event.MessageCountEvent): void;
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export class MessageCountEvent extends javax.mail.event.MailEvent {
				public static class: java.lang.Class<javax.mail.event.MessageCountEvent>;
				public static ADDED: number;
				public static REMOVED: number;
				public type: number;
				public removed: boolean;
				public msgs: javax.mail.Message[];
				public dispatch(listener: any): void;
				public isRemoved(): boolean;
				public getType(): number;
				public constructor(source: any);
				public constructor(folder: javax.mail.Folder, type: number, removed: boolean, msgs: javax.mail.Message[]);
				public getMessages(): javax.mail.Message[];
				public dispatch(param0: any): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export class MessageCountListener extends java.lang.Object implements java.util.EventListener {
				public static class: java.lang.Class<javax.mail.event.MessageCountListener>;
				/**
				 * Constructs a new instance of the javax.mail.event.MessageCountListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					messagesAdded(param0: javax.mail.event.MessageCountEvent): void;
					messagesRemoved(param0: javax.mail.event.MessageCountEvent): void;
				});
				public constructor();
				public messagesRemoved(param0: javax.mail.event.MessageCountEvent): void;
				public messagesAdded(param0: javax.mail.event.MessageCountEvent): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export class StoreEvent extends javax.mail.event.MailEvent {
				public static class: java.lang.Class<javax.mail.event.StoreEvent>;
				public static ALERT: number;
				public static NOTICE: number;
				public type: number;
				public message: string;
				public dispatch(listener: any): void;
				public getMessageType(): number;
				public constructor(source: any);
				public getMessage(): string;
				public constructor(store: javax.mail.Store, type: number, message: string);
				public dispatch(param0: any): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export class StoreListener extends java.lang.Object implements java.util.EventListener {
				public static class: java.lang.Class<javax.mail.event.StoreListener>;
				/**
				 * Constructs a new instance of the javax.mail.event.StoreListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					notification(param0: javax.mail.event.StoreEvent): void;
				});
				public constructor();
				public notification(param0: javax.mail.event.StoreEvent): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export abstract class TransportAdapter extends java.lang.Object implements javax.mail.event.TransportListener {
				public static class: java.lang.Class<javax.mail.event.TransportAdapter>;
				public messageDelivered(param0: javax.mail.event.TransportEvent): void;
				public messagePartiallyDelivered(e: javax.mail.event.TransportEvent): void;
				public messageDelivered(e: javax.mail.event.TransportEvent): void;
				public messagePartiallyDelivered(param0: javax.mail.event.TransportEvent): void;
				public constructor();
				public messageNotDelivered(e: javax.mail.event.TransportEvent): void;
				public messageNotDelivered(param0: javax.mail.event.TransportEvent): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export class TransportEvent extends javax.mail.event.MailEvent {
				public static class: java.lang.Class<javax.mail.event.TransportEvent>;
				public static MESSAGE_DELIVERED: number;
				public static MESSAGE_NOT_DELIVERED: number;
				public static MESSAGE_PARTIALLY_DELIVERED: number;
				public type: number;
				public validSent: javax.mail.Address[];
				public validUnsent: javax.mail.Address[];
				public invalid: javax.mail.Address[];
				public msg: javax.mail.Message;
				public dispatch(listener: any): void;
				public getType(): number;
				public constructor(source: any);
				public getMessage(): javax.mail.Message;
				public constructor(transport: javax.mail.Transport, type: number, validSent: javax.mail.Address[], validUnsent: javax.mail.Address[], invalid: javax.mail.Address[], msg: javax.mail.Message);
				public getValidSentAddresses(): javax.mail.Address[];
				public getValidUnsentAddresses(): javax.mail.Address[];
				public getInvalidAddresses(): javax.mail.Address[];
				public dispatch(param0: any): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module event {
			export class TransportListener extends java.lang.Object implements java.util.EventListener {
				public static class: java.lang.Class<javax.mail.event.TransportListener>;
				/**
				 * Constructs a new instance of the javax.mail.event.TransportListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					messageDelivered(param0: javax.mail.event.TransportEvent): void;
					messageNotDelivered(param0: javax.mail.event.TransportEvent): void;
					messagePartiallyDelivered(param0: javax.mail.event.TransportEvent): void;
				});
				public constructor();
				public messageDelivered(param0: javax.mail.event.TransportEvent): void;
				public messagePartiallyDelivered(param0: javax.mail.event.TransportEvent): void;
				public messageNotDelivered(param0: javax.mail.event.TransportEvent): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class AddressException extends javax.mail.internet.ParseException {
				public static class: java.lang.Class<javax.mail.internet.AddressException>;
				public ref: string;
				public pos: number;
				public constructor(s: string);
				public constructor(cause: java.lang.Throwable);
				public constructor(s: string, ref: string);
				public getRef(): string;
				public constructor(s: string, ref: string, pos: number);
				public getPos(): number;
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public toString(): string;
				public constructor(s: string, e: java.lang.Exception);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class AsciiOutputStream extends java.io.OutputStream {
				public static class: java.lang.Class<javax.mail.internet.AsciiOutputStream>;
				public write(b: number): void;
				public constructor(breakOnNonAscii: boolean, encodeEolStrict: boolean);
				public close(): void;
				public write(param0: number): void;
				public write(b: number[], off: number, len: number): void;
				public write(b: number[]): void;
				public getAscii(): number;
				public constructor();
				public flush(): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class ContentDisposition extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.internet.ContentDisposition>;
				public constructor(s: string);
				public getParameter(name: string): string;
				public setParameterList(list: javax.mail.internet.ParameterList): void;
				public constructor(disposition: string, list: javax.mail.internet.ParameterList);
				public getDisposition(): string;
				public toString(): string;
				public setParameter(name: string, value: string): void;
				public setDisposition(disposition: string): void;
				public constructor();
				public getParameterList(): javax.mail.internet.ParameterList;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class ContentType extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.internet.ContentType>;
				public setParameterList(list: javax.mail.internet.ParameterList): void;
				public getBaseType(): string;
				public setPrimaryType(primaryType: string): void;
				public match(s: string): boolean;
				public toString(): string;
				public setSubType(subType: string): void;
				public getPrimaryType(): string;
				public constructor();
				public getParameterList(): javax.mail.internet.ParameterList;
				public constructor(s: string);
				public getParameter(name: string): string;
				public match(cType: javax.mail.internet.ContentType): boolean;
				public constructor(primaryType: string, subType: string, list: javax.mail.internet.ParameterList);
				public getSubType(): string;
				public setParameter(name: string, value: string): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class HeaderTokenizer extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.internet.HeaderTokenizer>;
				public static RFC822: string;
				public static MIME: string;
				public peek(): javax.mail.internet.HeaderTokenizer.Token;
				public next(): javax.mail.internet.HeaderTokenizer.Token;
				public constructor(header: string, delimiters: string, skipComments: boolean);
				public getRemainder(): string;
				public constructor(header: string);
				public constructor(header: string, delimiters: string);
			}
			export module HeaderTokenizer {
				export class Token extends java.lang.Object {
					public static class: java.lang.Class<javax.mail.internet.HeaderTokenizer.Token>;
					public static ATOM: number;
					public static QUOTEDSTRING: number;
					public static COMMENT: number;
					public static EOF: number;
					public getType(): number;
					public getValue(): string;
					public constructor(type: number, value: string);
				}
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class InternetAddress extends javax.mail.Address implements java.lang.Cloneable {
				public static class: java.lang.Class<javax.mail.internet.InternetAddress>;
				public address: string;
				public personal: string;
				public encodedPersonal: string;
				public static getLocalAddress(session: javax.mail.Session): javax.mail.internet.InternetAddress;
				public toUnicodeString(): string;
				public isGroup(): boolean;
				public constructor();
				public setPersonal(name: string, charset: string): void;
				public constructor(address: string, personal: string, charset: string);
				public hashCode(): number;
				public static toString(addresses: javax.mail.Address[], used: number): string;
				public clone(): any;
				public equals(param0: any): boolean;
				public validate(): void;
				public setPersonal(name: string): void;
				public static parse(addresslist: string): javax.mail.internet.InternetAddress[];
				public getType(): string;
				public constructor(address: string, personal: string);
				public toString(): string;
				public constructor(address: string, strict: boolean);
				public static parse(addresslist: string, strict: boolean): javax.mail.internet.InternetAddress[];
				public equals(a: any): boolean;
				public getPersonal(): string;
				public getGroup(strict: boolean): javax.mail.internet.InternetAddress[];
				public static parseHeader(addresslist: string, strict: boolean): javax.mail.internet.InternetAddress[];
				public setAddress(address: string): void;
				public static toString(addresses: javax.mail.Address[]): string;
				public constructor(address: string);
				public getAddress(): string;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class InternetHeaders extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.internet.InternetHeaders>;
				public headers: java.util.List<any>;
				public getMatchingHeaders(names: string[]): java.util.Enumeration<any>;
				public getNonMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
				public getHeader(name: string, delimiter: string): string;
				public addHeader(name: string, value: string): void;
				public getHeader(name: string): string[];
				public getAllHeaders(): java.util.Enumeration<any>;
				public addHeaderLine(line: string): void;
				public removeHeader(name: string): void;
				public constructor();
				public load(is: java.io.InputStream): void;
				public constructor(is: java.io.InputStream);
				public setHeader(name: string, value: string): void;
				public getNonMatchingHeaders(names: string[]): java.util.Enumeration<any>;
				public getAllHeaderLines(): java.util.Enumeration<any>;
				public getMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
			}
			export module InternetHeaders {
				export class InternetHeader extends javax.mail.Header {
					public static class: java.lang.Class<javax.mail.internet.InternetHeaders.InternetHeader>;
					public constructor(name: string, value: string);
					public getValue(): string;
					public constructor(l: string);
					public constructor(n: string, v: string);
				}
				export class matchEnum extends java.lang.Object implements java.util.Enumeration<any> {
					public static class: java.lang.Class<javax.mail.internet.InternetHeaders.matchEnum>;
					public hasMoreElements(): boolean;
					public nextElement(): any;
				}
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class MailDateFormat extends java.text.SimpleDateFormat {
				public static class: java.lang.Class<javax.mail.internet.MailDateFormat>;
				public format(date: java.util.Date, toAppendTo: java.lang.StringBuffer, pos: java.text.FieldPosition): java.lang.StringBuffer;
				public format(obj: any): string;
				public parse(source: string): java.util.Date;
				public constructor(pattern: string, locale: java.util.Locale);
				public parse(text: string, pos: java.text.ParsePosition): java.util.Date;
				public setCalendar(newCalendar: java.util.Calendar): void;
				public constructor();
				public constructor(pattern: string, formatSymbols: java.text.DateFormatSymbols);
				public setNumberFormat(newNumberFormat: java.text.NumberFormat): void;
				public format(obj: any, toAppendTo: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
				public format(date: java.util.Date, dateStrBuf: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
				public constructor(pattern: string);
				public format(date: java.util.Date): string;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class MailDateParser extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.internet.MailDateParser>;
				public skipUntilNumber(): void;
				public skipChar(c: string): void;
				public peekChar(): number;
				public parseNumericTimeZone(): number;
				public constructor(orig: string[]);
				public skipWhiteSpace(): void;
				public parseNumber(): number;
				public parseTimeZone(): number;
				public skipIfChar(c: string): boolean;
				public parseMonth(): number;
				public parseAlphaTimeZone(): number;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class MimeBodyPart extends javax.mail.BodyPart implements javax.mail.internet.MimePart {
				public static class: java.lang.Class<javax.mail.internet.MimeBodyPart>;
				public dh: javax.activation.DataHandler;
				public content: number[];
				public contentStream: java.io.InputStream;
				public headers: javax.mail.internet.InternetHeaders;
				public attachFile(file: string): void;
				public getMatchingHeaders(names: string[]): java.util.Enumeration<any>;
				public addHeader(param0: string, param1: string): void;
				public constructor(headers: javax.mail.internet.InternetHeaders, content: number[]);
				public getContentType(): string;
				public isMimeType(param0: string): boolean;
				public getNonMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
				public setContent(mp: javax.mail.Multipart): void;
				public getHeader(name: string, delimiter: string): string;
				public getLineCount(): number;
				public getContentID(): string;
				public setDataHandler(dh: javax.activation.DataHandler): void;
				public removeHeader(name: string): void;
				public constructor();
				public removeHeader(param0: string): void;
				public saveFile(file: java.io.File): void;
				public setContent(param0: javax.mail.Multipart): void;
				public setContent(o: any, type: string): void;
				public getSize(): number;
				public setDataHandler(param0: javax.activation.DataHandler): void;
				public saveFile(file: string): void;
				public setContentMD5(param0: string): void;
				public writeTo(os: java.io.OutputStream): void;
				public getEncoding(): string;
				public getHeader(param0: string): string[];
				public getFileName(): string;
				public getDataHandler(): javax.activation.DataHandler;
				public getInputStream(): java.io.InputStream;
				public updateHeaders(): void;
				public getContent(): any;
				public getDisposition(): string;
				public setContentMD5(md5: string): void;
				public getAllHeaders(): java.util.Enumeration<any>;
				public addHeaderLine(line: string): void;
				public getHeader(param0: string, param1: string): string;
				public getMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
				public getContentStream(): java.io.InputStream;
				public setContentLanguage(languages: string[]): void;
				public addHeaderLine(param0: string): void;
				public setDescription(description: string): void;
				public setFileName(param0: string): void;
				public setHeader(param0: string, param1: string): void;
				public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
				public setFileName(filename: string): void;
				public getAllHeaderLines(): java.util.Enumeration<any>;
				public setText(param0: string): void;
				public setContentLanguage(param0: string[]): void;
				public writeTo(param0: java.io.OutputStream): void;
				public isMimeType(mimeType: string): boolean;
				public getDescription(): string;
				public getContentMD5(): string;
				public getHeader(name: string): string[];
				public setContentID(cid: string): void;
				public setText(text: string, charset: string, subtype: string): void;
				public constructor(is: java.io.InputStream);
				public getContentLanguage(): string[];
				public setHeader(name: string, value: string): void;
				public getNonMatchingHeaders(names: string[]): java.util.Enumeration<any>;
				public setText(text: string): void;
				public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
				public setText(param0: string, param1: string): void;
				public attachFile(file: java.io.File): void;
				public setDisposition(param0: string): void;
				public setText(text: string, charset: string): void;
				public getRawInputStream(): java.io.InputStream;
				public addHeader(name: string, value: string): void;
				public setDisposition(disposition: string): void;
				public setContent(param0: any, param1: string): void;
				public setDescription(param0: string): void;
				public setDescription(description: string, charset: string): void;
				public getNonMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
				public setText(param0: string, param1: string, param2: string): void;
				public getMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class MimeMessage extends javax.mail.Message implements javax.mail.internet.MimePart {
				public static class: java.lang.Class<javax.mail.internet.MimeMessage>;
				public dh: javax.activation.DataHandler;
				public content: number[];
				public contentStream: java.io.InputStream;
				public headers: javax.mail.internet.InternetHeaders;
				public flags: javax.mail.Flags;
				public modified: boolean;
				public saved: boolean;
				public addFrom(addresses: javax.mail.Address[]): void;
				public getSender(): javax.mail.Address;
				public setSentDate(d: java.util.Date): void;
				public getContentType(): string;
				public getFrom(): javax.mail.Address[];
				public setContent(mp: javax.mail.Multipart): void;
				public getHeader(name: string, delimiter: string): string;
				public getLineCount(): number;
				public reply(replyToAll: boolean): javax.mail.Message;
				public addRecipients(type: javax.mail.Message.RecipientType, addresses: string): void;
				public getContentID(): string;
				public removeHeader(name: string): void;
				public setFrom(): void;
				public setDataHandler(param0: javax.activation.DataHandler): void;
				public getRecipients(param0: javax.mail.Message.RecipientType): javax.mail.Address[];
				public writeTo(os: java.io.OutputStream): void;
				public createInternetHeaders(is: java.io.InputStream): javax.mail.internet.InternetHeaders;
				public setSender(address: javax.mail.Address): void;
				public getAllRecipients(): javax.mail.Address[];
				public getFileName(): string;
				public getDataHandler(): javax.activation.DataHandler;
				public updateHeaders(): void;
				public getContent(): any;
				public getReceivedDate(): java.util.Date;
				public setContentMD5(md5: string): void;
				public getAllHeaders(): java.util.Enumeration<any>;
				public getContentStream(): java.io.InputStream;
				public setRecipients(param0: javax.mail.Message.RecipientType, param1: javax.mail.Address[]): void;
				public setContentLanguage(languages: string[]): void;
				public addHeaderLine(param0: string): void;
				public setDescription(description: string): void;
				public setHeader(param0: string, param1: string): void;
				public getAllHeaderLines(): java.util.Enumeration<any>;
				public writeTo(param0: java.io.OutputStream): void;
				public setSentDate(param0: java.util.Date): void;
				public isMimeType(mimeType: string): boolean;
				public getDescription(): string;
				public getContentMD5(): string;
				public getHeader(name: string): string[];
				public setFlags(flag: javax.mail.Flags, set: boolean): void;
				public setSubject(subject: string, charset: string): void;
				public setHeader(name: string, value: string): void;
				public getNonMatchingHeaders(names: string[]): java.util.Enumeration<any>;
				public isSet(flag: javax.mail.Flags.Flag): boolean;
				public constructor(session: javax.mail.Session, is: java.io.InputStream);
				public setText(text: string): void;
				public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
				public constructor(source: javax.mail.internet.MimeMessage);
				public addRecipients(param0: javax.mail.Message.RecipientType, param1: javax.mail.Address[]): void;
				public getSentDate(): java.util.Date;
				public setDisposition(param0: string): void;
				public addHeader(name: string, value: string): void;
				public saveChanges(): void;
				public setDisposition(disposition: string): void;
				public constructor(folder: javax.mail.Folder, is: java.io.InputStream, msgnum: number);
				public updateMessageID(): void;
				public setDescription(description: string, charset: string): void;
				public writeTo(os: java.io.OutputStream, ignoreList: string[]): void;
				public setRecipients(type: javax.mail.Message.RecipientType, addresses: javax.mail.Address[]): void;
				public setText(param0: string, param1: string, param2: string): void;
				public getMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
				public getMatchingHeaders(names: string[]): java.util.Enumeration<any>;
				public addHeader(param0: string, param1: string): void;
				public setRecipients(type: javax.mail.Message.RecipientType, addresses: string): void;
				public isMimeType(param0: string): boolean;
				public getNonMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
				public setDataHandler(dh: javax.activation.DataHandler): void;
				public constructor();
				public removeHeader(param0: string): void;
				public setFrom(address: javax.mail.Address): void;
				public setContent(param0: javax.mail.Multipart): void;
				public setContent(o: any, type: string): void;
				public getSize(): number;
				public constructor(folder: javax.mail.Folder, headers: javax.mail.internet.InternetHeaders, content: number[], msgnum: number);
				public addRecipients(type: javax.mail.Message.RecipientType, addresses: javax.mail.Address[]): void;
				public constructor(session: javax.mail.Session);
				public reply(param0: boolean): javax.mail.Message;
				public setContentMD5(param0: string): void;
				public getEncoding(): string;
				public getReplyTo(): javax.mail.Address[];
				public getHeader(param0: string): string[];
				public constructor(folder: javax.mail.Folder, msgnum: number);
				public getInputStream(): java.io.InputStream;
				public setFrom(param0: javax.mail.Address): void;
				public getSubject(): string;
				public addFrom(param0: javax.mail.Address[]): void;
				public getDisposition(): string;
				public addHeaderLine(line: string): void;
				public getHeader(param0: string, param1: string): string;
				public getMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
				public setFileName(param0: string): void;
				public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
				public getRecipients(type: javax.mail.Message.RecipientType): javax.mail.Address[];
				public setFileName(filename: string): void;
				public setReplyTo(addresses: javax.mail.Address[]): void;
				public setText(param0: string): void;
				public setContentLanguage(param0: string[]): void;
				public setContentID(cid: string): void;
				public setText(text: string, charset: string, subtype: string): void;
				public setSubject(param0: string): void;
				public getContentLanguage(): string[];
				public getMessageID(): string;
				public setSubject(subject: string): void;
				public setFlags(param0: javax.mail.Flags, param1: boolean): void;
				public setText(param0: string, param1: string): void;
				public setText(text: string, charset: string): void;
				public getRawInputStream(): java.io.InputStream;
				public getFlags(): javax.mail.Flags;
				public createMimeMessage(session: javax.mail.Session): javax.mail.internet.MimeMessage;
				public setContent(param0: any, param1: string): void;
				public setDescription(param0: string): void;
				public getNonMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
				public parse(is: java.io.InputStream): void;
			}
			export module MimeMessage {
				export class RecipientType extends javax.mail.Message.RecipientType {
					public static class: java.lang.Class<javax.mail.internet.MimeMessage.RecipientType>;
					public static NEWSGROUPS: javax.mail.internet.MimeMessage.RecipientType;
					public readResolve(): any;
					public constructor(type: string);
				}
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class MimeMultipart extends javax.mail.Multipart {
				public static class: java.lang.Class<javax.mail.internet.MimeMultipart>;
				public ds: javax.activation.DataSource;
				public parsed: boolean;
				public setPreamble(preamble: string): void;
				public addBodyPart(part: javax.mail.BodyPart, index: number): void;
				public createInternetHeaders(is: java.io.InputStream): javax.mail.internet.InternetHeaders;
				public constructor(ds: javax.activation.DataSource);
				public writeTo(param0: java.io.OutputStream): void;
				public updateHeaders(): void;
				public setSubType(subtype: string): void;
				public removeBodyPart(index: number): void;
				public createMimeBodyPart(is: java.io.InputStream): javax.mail.internet.MimeBodyPart;
				public getCount(): number;
				public constructor();
				public isComplete(): boolean;
				public parse(): void;
				public constructor(subtype: string);
				public addBodyPart(part: javax.mail.BodyPart): void;
				public getBodyPart(CID: string): javax.mail.BodyPart;
				public getPreamble(): string;
				public getBodyPart(index: number): javax.mail.BodyPart;
				public createMimeBodyPart(headers: javax.mail.internet.InternetHeaders, content: number[]): javax.mail.internet.MimeBodyPart;
				public removeBodyPart(part: javax.mail.BodyPart): boolean;
				public writeTo(os: java.io.OutputStream): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class MimePart extends java.lang.Object implements javax.mail.Part {
				public static class: java.lang.Class<javax.mail.internet.MimePart>;
				/**
				 * Constructs a new instance of the javax.mail.internet.MimePart interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getHeader(param0: string, param1: string): string;
					addHeaderLine(param0: string): void;
					getAllHeaderLines(): java.util.Enumeration<any>;
					getMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					getNonMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
					getEncoding(): string;
					getContentID(): string;
					getContentMD5(): string;
					setContentMD5(param0: string): void;
					getContentLanguage(): string[];
					setContentLanguage(param0: string[]): void;
					setText(param0: string): void;
					setText(param0: string, param1: string): void;
					setText(param0: string, param1: string, param2: string): void;
					getSize(): number;
					getLineCount(): number;
					getContentType(): string;
					isMimeType(param0: string): boolean;
					getDisposition(): string;
					setDisposition(param0: string): void;
					getDescription(): string;
					setDescription(param0: string): void;
					getFileName(): string;
					setFileName(param0: string): void;
					getInputStream(): java.io.InputStream;
					getDataHandler(): javax.activation.DataHandler;
					getContent(): any;
					setDataHandler(param0: javax.activation.DataHandler): void;
					setContent(param0: any, param1: string): void;
					setText(param0: string): void;
					setContent(param0: javax.mail.Multipart): void;
					writeTo(param0: java.io.OutputStream): void;
					getHeader(param0: string): string[];
					setHeader(param0: string, param1: string): void;
					addHeader(param0: string, param1: string): void;
					removeHeader(param0: string): void;
					getAllHeaders(): java.util.Enumeration<any>;
					getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
					getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
				});
				public constructor();
				public static ATTACHMENT: string;
				public static INLINE: string;
				public addHeader(param0: string, param1: string): void;
				public getContentType(): string;
				public isMimeType(param0: string): boolean;
				public writeTo(param0: java.io.OutputStream): void;
				public getLineCount(): number;
				public getContentID(): string;
				public getDescription(): string;
				public getContentMD5(): string;
				public removeHeader(param0: string): void;
				public setContent(param0: javax.mail.Multipart): void;
				public getSize(): number;
				public getContentLanguage(): string[];
				public setDataHandler(param0: javax.activation.DataHandler): void;
				public setContentMD5(param0: string): void;
				public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
				public getEncoding(): string;
				public setText(param0: string, param1: string): void;
				public setDisposition(param0: string): void;
				public getHeader(param0: string): string[];
				public getFileName(): string;
				public getDataHandler(): javax.activation.DataHandler;
				public getInputStream(): java.io.InputStream;
				public getContent(): any;
				public getDisposition(): string;
				public getHeader(param0: string, param1: string): string;
				public getAllHeaders(): java.util.Enumeration<any>;
				public getMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
				public setContent(param0: any, param1: string): void;
				public addHeaderLine(param0: string): void;
				public setDescription(param0: string): void;
				public setFileName(param0: string): void;
				public setHeader(param0: string, param1: string): void;
				public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
				public getNonMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
				public setText(param0: string, param1: string, param2: string): void;
				public getAllHeaderLines(): java.util.Enumeration<any>;
				public setText(param0: string): void;
				public setContentLanguage(param0: string[]): void;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class MimePartDataSource extends java.lang.Object implements javax.mail.MessageAware {
				public static class: java.lang.Class<javax.mail.internet.MimePartDataSource>;
				public part: javax.mail.internet.MimePart;
				public constructor(part: javax.mail.internet.MimePart);
				public getContentType(): string;
				public getInputStream(): java.io.InputStream;
				public getMessageContext(): javax.mail.MessageContext;
				public getName(): string;
				public getOutputStream(): java.io.OutputStream;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class MimeUtility extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.internet.MimeUtility>;
				public static ALL: number;
				public static decodeWord(eword: string): string;
				public static encode(os: java.io.OutputStream, encoding: string): java.io.OutputStream;
				public static unfold(s: string): string;
				public static decode(is: java.io.InputStream, encoding: string): java.io.InputStream;
				public static encodeWord(word: string): string;
				public static getDefaultJavaCharset(): string;
				public static encodeWord(word: string, charset: string, encoding: string): string;
				public static getEncoding(ds: javax.activation.DataSource): string;
				public static encode(os: java.io.OutputStream, encoding: string, filename: string): java.io.OutputStream;
				public static getEncoding(dh: javax.activation.DataHandler): string;
				public static javaCharset(charset: string): string;
				public static quote(word: string, specials: string): string;
				public static fold(used: number, s: string): string;
				public static mimeCharset(charset: string): string;
				public static encodeText(text: string, charset: string, encoding: string): string;
				public static encodeText(text: string): string;
				public static decodeText(etext: string): string;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class NewsAddress extends javax.mail.Address {
				public static class: java.lang.Class<javax.mail.internet.NewsAddress>;
				public newsgroup: string;
				public host: string;
				public getType(): string;
				public constructor(newsgroup: string);
				public getNewsgroup(): string;
				public toString(): string;
				public constructor();
				public setNewsgroup(newsgroup: string): void;
				public setHost(host: string): void;
				public equals(a: any): boolean;
				public constructor(newsgroup: string, host: string);
				public getHost(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public static toString(addresses: javax.mail.Address[]): string;
				public static parse(newsgroups: string): javax.mail.internet.NewsAddress[];
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class ParameterList extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.internet.ParameterList>;
				public constructor(s: string);
				public set(name: string, value: string, charset: string): void;
				public get(name: string): string;
				public remove(name: string): void;
				public toString(used: number): string;
				public toString(): string;
				public set(name: string, value: string): void;
				public getNames(): java.util.Enumeration<any>;
				public constructor();
				public size(): number;
			}
			export module ParameterList {
				export class MultiValue extends java.util.ArrayList<any> {
					public static class: java.lang.Class<javax.mail.internet.ParameterList.MultiValue>;
					public isEmpty(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public lastIndexOf(o: any): number;
					public iterator(): java.util.Iterator<any>;
					public toArray(param0: any[]): any[];
					public remove(o: any): boolean;
					public get(param0: number): any;
					public listIterator(index: number): java.util.ListIterator<any>;
					public toArray(a: any[]): any[];
					public toArray(): any[];
					public add(param0: number, param1: any): void;
					public sort(c: java.util.Comparator<any>): void;
					public add(index: number, element: any): void;
					public set(param0: number, param1: any): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public subList(fromIndex: number, toIndex: number): java.util.List<any>;
					public addAll(c: java.util.Collection<any>): boolean;
					public get(index: number): any;
					public set(index: number, element: any): any;
					public remove(index: number): any;
					public contains(o: any): boolean;
					public remove(param0: number): any;
					public removeAll(c: java.util.Collection<any>): boolean;
					public clear(): void;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public containsAll(c: java.util.Collection<any>): boolean;
					public hashCode(): number;
					public contains(param0: any): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public parallelStream(): java.util.stream.Stream<any>;
					public add(e: any): boolean;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public retainAll(c: java.util.Collection<any>): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(o: any): number;
					public indexOf(param0: any): number;
					public equals(param0: any): boolean;
					public removeIf(filter: any /* any*/): boolean;
					public addAll(index: number, c: java.util.Collection<any>): boolean;
					public listIterator(): java.util.ListIterator<any>;
					public stream(): java.util.stream.Stream<any>;
				}
				export class ParamEnum extends java.lang.Object implements java.util.Enumeration<any> {
					public static class: java.lang.Class<javax.mail.internet.ParameterList.ParamEnum>;
					public hasMoreElements(): boolean;
					public nextElement(): any;
				}
				export class ToStringBuffer extends java.lang.Object {
					public static class: java.lang.Class<javax.mail.internet.ParameterList.ToStringBuffer>;
					public constructor(used: number);
					public addNV(name: string, value: string): void;
					public toString(): string;
				}
				export class Value extends java.lang.Object {
					public static class: java.lang.Class<javax.mail.internet.ParameterList.Value>;
				}
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class ParseException extends javax.mail.MessagingException {
				public static class: java.lang.Class<javax.mail.internet.ParseException>;
				public constructor(s: string);
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(s: string, e: java.lang.Exception);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class PreencodedMimeBodyPart extends javax.mail.internet.MimeBodyPart {
				public static class: java.lang.Class<javax.mail.internet.PreencodedMimeBodyPart>;
				public addHeader(param0: string, param1: string): void;
				public getMatchingHeaders(names: string[]): java.util.Enumeration<any>;
				public constructor(headers: javax.mail.internet.InternetHeaders, content: number[]);
				public getContentType(): string;
				public isMimeType(param0: string): boolean;
				public getNonMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
				public getHeader(name: string, delimiter: string): string;
				public setContent(mp: javax.mail.Multipart): void;
				public getLineCount(): number;
				public getContentID(): string;
				public setDataHandler(dh: javax.activation.DataHandler): void;
				public removeHeader(name: string): void;
				public constructor();
				public removeHeader(param0: string): void;
				public setContent(param0: javax.mail.Multipart): void;
				public setContent(o: any, type: string): void;
				public getSize(): number;
				public setDataHandler(param0: javax.activation.DataHandler): void;
				public setContentMD5(param0: string): void;
				public writeTo(os: java.io.OutputStream): void;
				public getEncoding(): string;
				public getHeader(param0: string): string[];
				public getFileName(): string;
				public getDataHandler(): javax.activation.DataHandler;
				public updateHeaders(): void;
				public getInputStream(): java.io.InputStream;
				public getContent(): any;
				public setContentMD5(md5: string): void;
				public getDisposition(): string;
				public getHeader(param0: string, param1: string): string;
				public addHeaderLine(line: string): void;
				public getAllHeaders(): java.util.Enumeration<any>;
				public getMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
				public constructor(encoding: string);
				public addHeaderLine(param0: string): void;
				public setContentLanguage(languages: string[]): void;
				public setDescription(description: string): void;
				public setFileName(param0: string): void;
				public setHeader(param0: string, param1: string): void;
				public getMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
				public setFileName(filename: string): void;
				public getAllHeaderLines(): java.util.Enumeration<any>;
				public setText(param0: string): void;
				public setContentLanguage(param0: string[]): void;
				public writeTo(param0: java.io.OutputStream): void;
				public isMimeType(mimeType: string): boolean;
				public getDescription(): string;
				public getContentMD5(): string;
				public getHeader(name: string): string[];
				public setText(text: string, charset: string, subtype: string): void;
				public constructor(is: java.io.InputStream);
				public getContentLanguage(): string[];
				public setHeader(name: string, value: string): void;
				public getNonMatchingHeaders(names: string[]): java.util.Enumeration<any>;
				public setText(text: string): void;
				public getNonMatchingHeaders(param0: string[]): java.util.Enumeration<any>;
				public setText(param0: string, param1: string): void;
				public setDisposition(param0: string): void;
				public setText(text: string, charset: string): void;
				public addHeader(name: string, value: string): void;
				public setDisposition(disposition: string): void;
				public setContent(param0: any, param1: string): void;
				public setDescription(param0: string): void;
				public setDescription(description: string, charset: string): void;
				public getNonMatchingHeaderLines(param0: string[]): java.util.Enumeration<any>;
				public setText(param0: string, param1: string, param2: string): void;
				public getMatchingHeaderLines(names: string[]): java.util.Enumeration<any>;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class SharedInputStream extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.internet.SharedInputStream>;
				/**
				 * Constructs a new instance of the javax.mail.internet.SharedInputStream interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPosition(): number;
					newStream(param0: number, param1: number): java.io.InputStream;
				});
				public constructor();
				public newStream(param0: number, param1: number): java.io.InputStream;
				public getPosition(): number;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module internet {
			export class UniqueValue extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.internet.UniqueValue>;
				public static getUniqueMessageIDValue(ssn: javax.mail.Session): string;
				public static getUniqueBoundaryValue(): string;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export abstract class AddressStringTerm extends javax.mail.search.StringTerm {
				public static class: java.lang.Class<javax.mail.search.AddressStringTerm>;
				public equals(obj: any): boolean;
				public match(a: javax.mail.Address): boolean;
				public match(param0: javax.mail.Message): boolean;
				public match(s: string): boolean;
				public constructor(pattern: string, ignoreCase: boolean);
				public constructor(pattern: string);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export abstract class AddressTerm extends javax.mail.search.SearchTerm {
				public static class: java.lang.Class<javax.mail.search.AddressTerm>;
				public address: javax.mail.Address;
				public getAddress(): javax.mail.Address;
				public equals(obj: any): boolean;
				public constructor(address: javax.mail.Address);
				public match(a: javax.mail.Address): boolean;
				public match(param0: javax.mail.Message): boolean;
				public hashCode(): number;
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class AndTerm extends javax.mail.search.SearchTerm {
				public static class: java.lang.Class<javax.mail.search.AndTerm>;
				public terms: javax.mail.search.SearchTerm[];
				public constructor(t: javax.mail.search.SearchTerm[]);
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public hashCode(): number;
				public match(msg: javax.mail.Message): boolean;
				public constructor(t1: javax.mail.search.SearchTerm, t2: javax.mail.search.SearchTerm);
				public getTerms(): javax.mail.search.SearchTerm[];
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class BodyTerm extends javax.mail.search.StringTerm {
				public static class: java.lang.Class<javax.mail.search.BodyTerm>;
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public match(msg: javax.mail.Message): boolean;
				public match(s: string): boolean;
				public constructor(pattern: string, ignoreCase: boolean);
				public constructor(pattern: string);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export abstract class ComparisonTerm extends javax.mail.search.SearchTerm {
				public static class: java.lang.Class<javax.mail.search.ComparisonTerm>;
				public static LE: number;
				public static LT: number;
				public static EQ: number;
				public static NE: number;
				public static GT: number;
				public static GE: number;
				public comparison: number;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export abstract class DateTerm extends javax.mail.search.ComparisonTerm {
				public static class: java.lang.Class<javax.mail.search.DateTerm>;
				public date: java.util.Date;
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public hashCode(): number;
				public getDate(): java.util.Date;
				public match(d: java.util.Date): boolean;
				public constructor(comparison: number, date: java.util.Date);
				public constructor();
				public getComparison(): number;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class FlagTerm extends javax.mail.search.SearchTerm {
				public static class: java.lang.Class<javax.mail.search.FlagTerm>;
				public set: boolean;
				public flags: javax.mail.Flags;
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public hashCode(): number;
				public getTestSet(): boolean;
				public match(msg: javax.mail.Message): boolean;
				public getFlags(): javax.mail.Flags;
				public constructor(flags: javax.mail.Flags, set: boolean);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class FromStringTerm extends javax.mail.search.AddressStringTerm {
				public static class: java.lang.Class<javax.mail.search.FromStringTerm>;
				public equals(obj: any): boolean;
				public match(a: javax.mail.Address): boolean;
				public match(param0: javax.mail.Message): boolean;
				public match(msg: javax.mail.Message): boolean;
				public match(s: string): boolean;
				public constructor(pattern: string, ignoreCase: boolean);
				public constructor(pattern: string);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class FromTerm extends javax.mail.search.AddressTerm {
				public static class: java.lang.Class<javax.mail.search.FromTerm>;
				public equals(obj: any): boolean;
				public constructor(address: javax.mail.Address);
				public match(a: javax.mail.Address): boolean;
				public match(param0: javax.mail.Message): boolean;
				public match(msg: javax.mail.Message): boolean;
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class HeaderTerm extends javax.mail.search.StringTerm {
				public static class: java.lang.Class<javax.mail.search.HeaderTerm>;
				public headerName: string;
				public getHeaderName(): string;
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public hashCode(): number;
				public match(msg: javax.mail.Message): boolean;
				public constructor(headerName: string, pattern: string);
				public match(s: string): boolean;
				public constructor(pattern: string, ignoreCase: boolean);
				public constructor(pattern: string);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export abstract class IntegerComparisonTerm extends javax.mail.search.ComparisonTerm {
				public static class: java.lang.Class<javax.mail.search.IntegerComparisonTerm>;
				public number: number;
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public hashCode(): number;
				public match(i: number): boolean;
				public constructor(comparison: number, number: number);
				public constructor();
				public getNumber(): number;
				public getComparison(): number;
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class MessageIDTerm extends javax.mail.search.StringTerm {
				public static class: java.lang.Class<javax.mail.search.MessageIDTerm>;
				public constructor(msgid: string);
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public match(msg: javax.mail.Message): boolean;
				public match(s: string): boolean;
				public constructor(pattern: string, ignoreCase: boolean);
				public constructor(pattern: string);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class MessageNumberTerm extends javax.mail.search.IntegerComparisonTerm {
				public static class: java.lang.Class<javax.mail.search.MessageNumberTerm>;
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public constructor(number: number);
				public match(i: number): boolean;
				public match(msg: javax.mail.Message): boolean;
				public constructor(comparison: number, number: number);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class NotTerm extends javax.mail.search.SearchTerm {
				public static class: java.lang.Class<javax.mail.search.NotTerm>;
				public term: javax.mail.search.SearchTerm;
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public hashCode(): number;
				public match(msg: javax.mail.Message): boolean;
				public getTerm(): javax.mail.search.SearchTerm;
				public constructor(t: javax.mail.search.SearchTerm);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class OrTerm extends javax.mail.search.SearchTerm {
				public static class: java.lang.Class<javax.mail.search.OrTerm>;
				public terms: javax.mail.search.SearchTerm[];
				public constructor(t: javax.mail.search.SearchTerm[]);
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public hashCode(): number;
				public match(msg: javax.mail.Message): boolean;
				public constructor(t1: javax.mail.search.SearchTerm, t2: javax.mail.search.SearchTerm);
				public getTerms(): javax.mail.search.SearchTerm[];
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class ReceivedDateTerm extends javax.mail.search.DateTerm {
				public static class: java.lang.Class<javax.mail.search.ReceivedDateTerm>;
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public match(d: java.util.Date): boolean;
				public match(msg: javax.mail.Message): boolean;
				public constructor(comparison: number, date: java.util.Date);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class RecipientStringTerm extends javax.mail.search.AddressStringTerm {
				public static class: java.lang.Class<javax.mail.search.RecipientStringTerm>;
				public equals(obj: any): boolean;
				public getRecipientType(): javax.mail.Message.RecipientType;
				public match(a: javax.mail.Address): boolean;
				public match(param0: javax.mail.Message): boolean;
				public hashCode(): number;
				public match(msg: javax.mail.Message): boolean;
				public match(s: string): boolean;
				public constructor(pattern: string, ignoreCase: boolean);
				public constructor(pattern: string);
				public constructor();
				public constructor(type: javax.mail.Message.RecipientType, pattern: string);
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class RecipientTerm extends javax.mail.search.AddressTerm {
				public static class: java.lang.Class<javax.mail.search.RecipientTerm>;
				public type: javax.mail.Message.RecipientType;
				public constructor(type: javax.mail.Message.RecipientType, address: javax.mail.Address);
				public equals(obj: any): boolean;
				public constructor(address: javax.mail.Address);
				public getRecipientType(): javax.mail.Message.RecipientType;
				public match(a: javax.mail.Address): boolean;
				public match(param0: javax.mail.Message): boolean;
				public hashCode(): number;
				public match(msg: javax.mail.Message): boolean;
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class SearchException extends javax.mail.MessagingException {
				public static class: java.lang.Class<javax.mail.search.SearchException>;
				public constructor(s: string);
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(s: string, e: java.lang.Exception);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export abstract class SearchTerm extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<javax.mail.search.SearchTerm>;
				public match(param0: javax.mail.Message): boolean;
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class SentDateTerm extends javax.mail.search.DateTerm {
				public static class: java.lang.Class<javax.mail.search.SentDateTerm>;
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public match(d: java.util.Date): boolean;
				public match(msg: javax.mail.Message): boolean;
				public constructor(comparison: number, date: java.util.Date);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class SizeTerm extends javax.mail.search.IntegerComparisonTerm {
				public static class: java.lang.Class<javax.mail.search.SizeTerm>;
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public match(i: number): boolean;
				public match(msg: javax.mail.Message): boolean;
				public constructor(comparison: number, size: number);
				public constructor(comparison: number, number: number);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export abstract class StringTerm extends javax.mail.search.SearchTerm {
				public static class: java.lang.Class<javax.mail.search.StringTerm>;
				public pattern: string;
				public ignoreCase: boolean;
				public getIgnoreCase(): boolean;
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public hashCode(): number;
				public match(s: string): boolean;
				public getPattern(): string;
				public constructor(pattern: string, ignoreCase: boolean);
				public constructor(pattern: string);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module search {
			export class SubjectTerm extends javax.mail.search.StringTerm {
				public static class: java.lang.Class<javax.mail.search.SubjectTerm>;
				public equals(obj: any): boolean;
				public match(param0: javax.mail.Message): boolean;
				public match(msg: javax.mail.Message): boolean;
				public match(s: string): boolean;
				public constructor(pattern: string, ignoreCase: boolean);
				public constructor(pattern: string);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module util {
			export class ByteArrayDataSource extends java.lang.Object {
				public static class: java.lang.Class<javax.mail.util.ByteArrayDataSource>;
				public getContentType(): string;
				public constructor(data: number[], type: string);
				public getInputStream(): java.io.InputStream;
				public setName(name: string): void;
				public constructor(is: java.io.InputStream, type: string);
				public getName(): string;
				public constructor(data: string, type: string);
				public getOutputStream(): java.io.OutputStream;
			}
			export module ByteArrayDataSource {
				export class DSByteArrayOutputStream extends java.io.ByteArrayOutputStream {
					public static class: java.lang.Class<javax.mail.util.ByteArrayDataSource.DSByteArrayOutputStream>;
					public getCount(): number;
					public close(): void;
					public flush(): void;
					public getBuf(): number[];
				}
			}
		}
	}
}

declare module javax {
	export module mail {
		export module util {
			export class SharedByteArrayInputStream extends java.io.ByteArrayInputStream implements javax.mail.internet.SharedInputStream {
				public static class: java.lang.Class<javax.mail.util.SharedByteArrayInputStream>;
				public start: number;
				public close(): void;
				public newStream(param0: number, param1: number): java.io.InputStream;
				public constructor(buf: number[]);
				public newStream(start: number, param1: number): java.io.InputStream;
				public getPosition(): number;
				public constructor(buf: number[], offset: number, length: number);
				public constructor();
			}
		}
	}
}

declare module javax {
	export module mail {
		export module util {
			export class SharedFileInputStream extends java.io.BufferedInputStream implements javax.mail.internet.SharedInputStream {
				public static class: java.lang.Class<javax.mail.util.SharedFileInputStream>;
				public _in_: java.io.RandomAccessFile;
				public bufsize: number;
				public bufpos: number;
				public start: number;
				public datalen: number;
				public constructor(file: java.io.File);
				public markSupported(): boolean;
				public close(): void;
				public read(b: number[]): number;
				public constructor(_in_: java.io.InputStream);
				public constructor(file: string, size: number);
				public finalize(): void;
				public mark(readlimit: number): void;
				public getPosition(): number;
				public constructor();
				public constructor(file: java.io.File, size: number);
				public skip(n: number): number;
				public reset(): void;
				public read(): number;
				public read(b: number[], off: number, len: number): number;
				public newStream(param0: number, param1: number): java.io.InputStream;
				public constructor(_in_: java.io.InputStream, size: number);
				public available(): number;
				public newStream(start: number, param1: number): java.io.InputStream;
				public constructor(file: string);
			}
			export module SharedFileInputStream {
				export class SharedFile extends java.lang.Object {
					public static class: java.lang.Class<javax.mail.util.SharedFileInputStream.SharedFile>;
					public forceClose(): void;
					public open(): java.io.RandomAccessFile;
					public finalize(): void;
					public close(): void;
				}
			}
		}
	}
}

//Generics information:

