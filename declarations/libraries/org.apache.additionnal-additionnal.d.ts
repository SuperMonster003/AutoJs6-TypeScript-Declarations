declare module myjava {
	export module awt {
		export module datatransfer {
			export class DataFlavor extends java.lang.Object implements java.io.Externalizable, java.lang.Cloneable {
				public static class: java.lang.Class<myjava.awt.datatransfer.DataFlavor>;
				public static plainTextFlavor: myjava.awt.datatransfer.DataFlavor;
				public static stringFlavor: myjava.awt.datatransfer.DataFlavor;
				public static javaFileListFlavor: myjava.awt.datatransfer.DataFlavor;
				public static javaJVMLocalObjectMimeType: string;
				public static javaRemoteObjectMimeType: string;
				public static javaSerializedObjectMimeType: string;
				public constructor(mimeType: string);
				public setHumanPresentableName(humanPresentableName: string): void;
				/** @deprecated */
				public equals(s: string): boolean;
				public constructor(mimeType: string, humanPresentableName: string, classLoader: java.lang.ClassLoader);
				/** @deprecated */
				public normalizeMimeTypeParameter(parameterName: string, parameterValue: string): string;
				public isMimeTypeEqual(mimeType: string): boolean;
				public static tryToLoadClass(className: string, fallback: java.lang.ClassLoader): java.lang.Class<any>;
				public getParameter(paramName: string): string;
				public isRepresentationClassReader(): boolean;
				public isFlavorJavaFileListType(): boolean;
				public constructor();
				public getHumanPresentableName(): string;
				public isRepresentationClassRemote(): boolean;
				/** @deprecated */
				public normalizeMimeType(mimeType: string): string;
				public isRepresentationClassByteBuffer(): boolean;
				public writeExternal(param0: java.io.ObjectOutput): void;
				public getMimeType(): string;
				public hashCode(): number;
				public isFlavorTextType(): boolean;
				public constructor(mimeType: string, humanPresentableName: string);
				public clone(): any;
				public isFlavorSerializedObjectType(): boolean;
				public readExternal(param0: java.io.ObjectInput): void;
				public readExternal(is: java.io.ObjectInput): void;
				public equals(o: any): boolean;
				public getSubType(): string;
				public static getTextPlainUnicodeFlavor(): myjava.awt.datatransfer.DataFlavor;
				public getRepresentationClass(): java.lang.Class<any>;
				public getDefaultRepresentationClassAsString(): string;
				public getDefaultRepresentationClass(): java.lang.Class<any>;
				public equals(that: myjava.awt.datatransfer.DataFlavor): boolean;
				public isMimeTypeSerializedObject(): boolean;
				public isRepresentationClassSerializable(): boolean;
				public isRepresentationClassInputStream(): boolean;
				public toString(): string;
				public isFlavorRemoteObjectType(): boolean;
				public getPrimaryType(): string;
				public isMimeTypeEqual(dataFlavor: myjava.awt.datatransfer.DataFlavor): boolean;
				public equals(obj: any): boolean;
				public writeExternal(os: java.io.ObjectOutput): void;
				public isRepresentationClassCharBuffer(): boolean;
				public constructor(representationClass: java.lang.Class<any>, humanPresentableName: string);
				public getReaderForText(transferable: myjava.awt.datatransfer.Transferable): java.io.Reader;
				public match(that: myjava.awt.datatransfer.DataFlavor): boolean;
				public static selectBestTextFlavor(availableFlavors: myjava.awt.datatransfer.DataFlavor[]): myjava.awt.datatransfer.DataFlavor;
			}
		}
	}
}

declare module myjava {
	export module awt {
		export module datatransfer {
			export class MimeTypeProcessor extends java.lang.Object {
				public static class: java.lang.Class<myjava.awt.datatransfer.MimeTypeProcessor>;
			}
			export module MimeTypeProcessor {
				export class MimeType extends java.lang.Object implements java.lang.Cloneable, java.io.Serializable {
					public static class: java.lang.Class<myjava.awt.datatransfer.MimeTypeProcessor.MimeType>;
					public clone(): any;
				}
				export class StringPosition extends java.lang.Object {
					public static class: java.lang.Class<myjava.awt.datatransfer.MimeTypeProcessor.StringPosition>;
				}
			}
		}
	}
}

declare module myjava {
	export module awt {
		export module datatransfer {
			export class Transferable extends java.lang.Object {
				public static class: java.lang.Class<myjava.awt.datatransfer.Transferable>;
				/**
				 * Constructs a new instance of the myjava.awt.datatransfer.Transferable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getTransferData(param0: myjava.awt.datatransfer.DataFlavor): any;
					isDataFlavorSupported(param0: myjava.awt.datatransfer.DataFlavor): boolean;
					getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
				});
				public constructor();
				public isDataFlavorSupported(param0: myjava.awt.datatransfer.DataFlavor): boolean;
				public getTransferData(param0: myjava.awt.datatransfer.DataFlavor): any;
				public getTransferDataFlavors(): myjava.awt.datatransfer.DataFlavor[];
			}
		}
	}
}

declare module myjava {
	export module awt {
		export module datatransfer {
			export class UnsupportedFlavorException extends java.lang.Exception {
				public static class: java.lang.Class<myjava.awt.datatransfer.UnsupportedFlavorException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(flavor: myjava.awt.datatransfer.DataFlavor);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export class ContextStorage extends java.lang.Object {
					public static class: java.lang.Class<org.apache.harmony.awt.ContextStorage>;
					public static setDTK(dtk: org.apache.harmony.awt.datatransfer.DTK): void;
					public static getDefaultToolkit(): java.awt.Toolkit;
					public static getGraphicsEnvironment(): java.awt.GraphicsEnvironment;
					public constructor();
					public static getContextLock(): any;
					public static setGraphicsEnvironment(environment: java.awt.GraphicsEnvironment): void;
					public static shutdownPending(): boolean;
					public static setDefaultToolkit(newToolkit: java.awt.Toolkit): void;
					public static getDTK(): org.apache.harmony.awt.datatransfer.DTK;
				}
				export module ContextStorage {
					export class ContextLock extends java.lang.Object {
						public static class: java.lang.Class<org.apache.harmony.awt.ContextStorage.ContextLock>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export module datatransfer {
					export abstract class DTK extends java.lang.Object {
						public static class: java.lang.Class<org.apache.harmony.awt.datatransfer.DTK>;
						public systemFlavorMap: java.awt.datatransfer.SystemFlavorMap;
						public dataTransferThread: org.apache.harmony.awt.datatransfer.DataTransferThread;
						public appendSystemFlavorMap(fm: java.awt.datatransfer.SystemFlavorMap, charsets: string[], subType: string, nat: string): void;
						public getNativeClipboard(): org.apache.harmony.awt.datatransfer.NativeClipboard;
						public constructor();
						public newNativeClipboard(): org.apache.harmony.awt.datatransfer.NativeClipboard;
						public initDragAndDrop(): void;
						public getDefaultCharset(): string;
						public createDropTargetContextPeer(param0: java.awt.dnd.DropTargetContext): java.awt.dnd.peer.DropTargetContextPeer;
						public runEventLoop(): void;
						public setSystemFlavorMap(newFlavorMap: java.awt.datatransfer.SystemFlavorMap): void;
						public appendSystemFlavorMap(fm: java.awt.datatransfer.SystemFlavorMap, flav: java.awt.datatransfer.DataFlavor, nat: string): void;
						public getNativeSelection(): org.apache.harmony.awt.datatransfer.NativeClipboard;
						public newNativeSelection(): org.apache.harmony.awt.datatransfer.NativeClipboard;
						public createDragSourceContextPeer(param0: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer;
						public getCharsets(): string[];
						public static getDTK(): org.apache.harmony.awt.datatransfer.DTK;
						public initSystemFlavorMap(fm: java.awt.datatransfer.SystemFlavorMap): void;
						public getSystemFlavorMap(): java.awt.datatransfer.SystemFlavorMap;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export module datatransfer {
					export class DataProvider extends java.lang.Object {
						public static class: java.lang.Class<org.apache.harmony.awt.datatransfer.DataProvider>;
						/**
						 * Constructs a new instance of the org.apache.harmony.awt.datatransfer.DataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							"<clinit>"(): void;
							getNativeFormats(): string[];
							isNativeFormatAvailable(param0: string): boolean;
							getText(): string;
							getFileList(): string[];
							getURL(): string;
							getHTML(): string;
							getRawBitmap(): org.apache.harmony.awt.datatransfer.RawBitmap;
							getSerializedObject(param0: java.lang.Class<any>): number[];
						});
						public constructor();
						public static FORMAT_TEXT: string;
						public static FORMAT_HTML: string;
						public static TYPE_TEXTENCODING: string;
						public static TYPE_SERIALIZED: string;
						public static TYPE_HTML: string;
						public static TYPE_FILELIST: string;
						public static TYPE_PLAINTEXT: string;
						public static TYPE_URL: string;
						public static TYPE_IMAGE: string;
						public static urlFlavor: java.awt.datatransfer.DataFlavor;
						public static uriFlavor: java.awt.datatransfer.DataFlavor;
						public static FORMAT_URL: string;
						public static FORMAT_IMAGE: string;
						public static TYPE_URILIST: string;
						public static FORMAT_FILE_LIST: string;
						public isNativeFormatAvailable(param0: string): boolean;
						public getSerializedObject(param0: java.lang.Class<any>): number[];
						public getRawBitmap(): org.apache.harmony.awt.datatransfer.RawBitmap;
						public getURL(): string;
						public getFileList(): string[];
						public getHTML(): string;
						public getText(): string;
						public getNativeFormats(): string[];
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export module datatransfer {
					export class DataProxy extends java.lang.Object {
						public static class: java.lang.Class<org.apache.harmony.awt.datatransfer.DataProxy>;
						public static unicodeTextClasses: java.lang.Class<any>[];
						public static charsetTextClasses: java.lang.Class<any>[];
						public isDataFlavorSupported(flavor: java.awt.datatransfer.DataFlavor): boolean;
						public constructor(data: org.apache.harmony.awt.datatransfer.DataProvider);
						public getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[];
						public getTransferData(flavor: java.awt.datatransfer.DataFlavor): any;
						public getDataProvider(): org.apache.harmony.awt.datatransfer.DataProvider;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export module datatransfer {
					export class DataSnapshot extends java.lang.Object implements org.apache.harmony.awt.datatransfer.DataProvider {
						public static class: java.lang.Class<org.apache.harmony.awt.datatransfer.DataSnapshot>;
						public getRawBitmapBuffer8(): number[];
						public getRawBitmap(): org.apache.harmony.awt.datatransfer.RawBitmap;
						public getRawBitmapBuffer32(): number[];
						public getFileList(): string[];
						public getHTML(): string;
						public getText(): string;
						public getSerializedObject(nativeFormat: string): number[];
						public getSerializedObject(clazz: java.lang.Class<any>): number[];
						public isNativeFormatAvailable(param0: string): boolean;
						public getRawBitmapHeader(): number[];
						public getRawBitmapBuffer16(): number[];
						public getSerializedObject(param0: java.lang.Class<any>): number[];
						public getURL(): string;
						public constructor(data: org.apache.harmony.awt.datatransfer.DataProvider);
						public isNativeFormatAvailable(nativeFormat: string): boolean;
						public getNativeFormats(): string[];
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export module datatransfer {
					export class DataSource extends java.lang.Object implements org.apache.harmony.awt.datatransfer.DataProvider {
						public static class: java.lang.Class<org.apache.harmony.awt.datatransfer.DataSource>;
						public contents: java.awt.datatransfer.Transferable;
						public getRawBitmap(): org.apache.harmony.awt.datatransfer.RawBitmap;
						public getFileList(): string[];
						public getHTML(): string;
						public getText(): string;
						public getSerializedObject(clazz: java.lang.Class<any>): number[];
						public isNativeFormatAvailable(param0: string): boolean;
						public getSerializedObject(param0: java.lang.Class<any>): number[];
						public getURL(): string;
						public isNativeFormatAvailable(nativeFormat: string): boolean;
						public constructor(contents: java.awt.datatransfer.Transferable);
						public getDataFlavors(): java.awt.datatransfer.DataFlavor[];
						public getNativeFormats(): string[];
						public getNativeFormatsList(): java.util.List<string>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export module datatransfer {
					export class DataTransferThread extends java.lang.Thread {
						public static class: java.lang.Class<org.apache.harmony.awt.datatransfer.DataTransferThread>;
						public constructor();
						public constructor(group: java.lang.ThreadGroup, name: string);
						public constructor(target: java.lang.Runnable, name: string);
						public constructor(dtk: org.apache.harmony.awt.datatransfer.DTK);
						public run(): void;
						public start(): void;
						public constructor(name: string);
						public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string);
						public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable);
						public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string, stackSize: number);
						public constructor(target: java.lang.Runnable);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export module datatransfer {
					export class DragSourceEventProxy extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<org.apache.harmony.awt.datatransfer.DragSourceEventProxy>;
						public static DRAG_ENTER: number;
						public static DRAG_OVER: number;
						public static DRAG_ACTION_CHANGED: number;
						public static DRAG_MOUSE_MOVED: number;
						public static DRAG_EXIT: number;
						public static DRAG_DROP_END: number;
						public constructor(context: java.awt.dnd.DragSourceContext, type: number, userAction: number, targetActions: number, location: java.awt.Point, modifiers: number);
						public run(): void;
						public constructor(context: java.awt.dnd.DragSourceContext, type: number, userAction: number, success: boolean, location: java.awt.Point, modifiers: number);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export module datatransfer {
					export class FlavorsComparator extends java.util.Comparator<java.awt.datatransfer.DataFlavor> {
						public static class: java.lang.Class<org.apache.harmony.awt.datatransfer.FlavorsComparator>;
						public constructor();
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public compare(flav1: java.awt.datatransfer.DataFlavor, flav2: java.awt.datatransfer.DataFlavor): number;
						public static reverseOrder(): java.util.Comparator<any>;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: any, param1: any): number;
						public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export module datatransfer {
					export abstract class NativeClipboard {
						public static class: java.lang.Class<org.apache.harmony.awt.datatransfer.NativeClipboard>;
						public static OPS_TIMEOUT: number;
						public onShutdown(): void;
						public onRestart(): void;
						public constructor(name: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export module datatransfer {
					export class RawBitmap extends java.lang.Object {
						public static class: java.lang.Class<org.apache.harmony.awt.datatransfer.RawBitmap>;
						public width: number;
						public height: number;
						public stride: number;
						public bits: number;
						public rMask: number;
						public gMask: number;
						public bMask: number;
						public buffer: any;
						public constructor(header: number[], buffer: any);
						public constructor(w: number, h: number, stride: number, bits: number, rMask: number, gMask: number, bMask: number, buffer: any);
						public getHeader(): number[];
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export module datatransfer {
					export class TextFlavor extends java.lang.Object {
						public static class: java.lang.Class<org.apache.harmony.awt.datatransfer.TextFlavor>;
						public static unicodeTextClasses: java.lang.Class<any>[];
						public static charsetTextClasses: java.lang.Class<any>[];
						public constructor();
						public static addUnicodeClasses(fm: java.awt.datatransfer.SystemFlavorMap, nat: string, subType: string): void;
						public static addCharsetClasses(fm: java.awt.datatransfer.SystemFlavorMap, nat: string, subType: string, charset: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module awt {
				export module internal {
					export module nls {
						export class Messages extends java.lang.Object {
							public static class: java.lang.Class<org.apache.harmony.awt.internal.nls.Messages>;
							public constructor();
							public static getString(msg: string, arg: number): string;
							public static getString(msg: string, args: any[]): string;
							public static format(format: string, args: any[]): string;
							public static getString(msg: string, arg: any): string;
							public static setLocale(locale: java.util.Locale, resource: string): java.util.ResourceBundle;
							public static getString(msg: string, arg1: any, arg2: any): string;
							public static getString(msg: string): string;
							public static getString(msg: string, arg: string): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module harmony {
			export module misc {
				export class SystemUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.harmony.misc.SystemUtils>;
					public static OS_WINDOWS: number;
					public static OS_LINUX: number;
					public static OS_UNKNOWN: number;
					public static ARC_IA32: number;
					public static ARC_IA64: number;
					public static ARC_UNKNOWN: number;
					public constructor();
					public static getOS(): number;
				}
			}
		}
	}
}

//Generics information:

