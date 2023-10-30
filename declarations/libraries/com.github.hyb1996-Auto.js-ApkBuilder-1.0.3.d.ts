declare module com {
	export module stardust {
		export module autojs {
			export module apkbuilder {
				export class ApkBuilder extends java.lang.Object {
					public static class: java.lang.Class<com.stardust.autojs.apkbuilder.ApkBuilder>;
					public cleanWorkspace(): com.stardust.autojs.apkbuilder.ApkBuilder;
					public editManifest(): com.stardust.autojs.apkbuilder.ManifestEditor;
					public constructor(apkInputStream: java.io.InputStream, outApkFile: java.io.File, workspacePath: string);
					public constructor(inFile: java.io.File, outFile: java.io.File, workspacePath: string);
					public prepare(): com.stardust.autojs.apkbuilder.ApkBuilder;
					public replaceFile(relativePath: string, newFilePath: string): com.stardust.autojs.apkbuilder.ApkBuilder;
					public sign(): com.stardust.autojs.apkbuilder.ApkBuilder;
					public setArscPackageName(packageName: string): com.stardust.autojs.apkbuilder.ApkBuilder;
					public build(): com.stardust.autojs.apkbuilder.ApkBuilder;
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module autojs {
			export module apkbuilder {
				export class ApkPackager extends java.lang.Object {
					public static class: java.lang.Class<com.stardust.autojs.apkbuilder.ApkPackager>;
					public constructor(apkInputStream: java.io.InputStream, workspacePath: string);
					public constructor(apkPath: string, workspacePath: string);
					public cleanWorkspace(): void;
					public repackage(newApkPath: string): void;
					public unzip(): void;
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module autojs {
			export module apkbuilder {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.stardust.autojs.apkbuilder.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module autojs {
			export module apkbuilder {
				export class ManifestEditor extends java.lang.Object {
					public static class: java.lang.Class<com.stardust.autojs.apkbuilder.ManifestEditor>;
					public constructor(manifestInputStream: java.io.InputStream);
					public setVersionCode(versionCode: number): com.stardust.autojs.apkbuilder.ManifestEditor;
					public commit(): com.stardust.autojs.apkbuilder.ManifestEditor;
					public setAppName(appName: string): com.stardust.autojs.apkbuilder.ManifestEditor;
					public setPackageName(packageName: string): com.stardust.autojs.apkbuilder.ManifestEditor;
					public onAttr(attr: pxb.android.axml.AxmlWriter.Attr): void;
					public setVersionName(versionName: string): com.stardust.autojs.apkbuilder.ManifestEditor;
					public writeTo(manifestOutputStream: java.io.OutputStream): void;
				}
				export module ManifestEditor {
					export class MutableAxmlWriter extends pxb.android.axml.AxmlWriter {
						public static class: java.lang.Class<com.stardust.autojs.apkbuilder.ManifestEditor.MutableAxmlWriter>;
						public child(ns: string, name: string): pxb.android.axml.NodeVisitor;
					}
					export module MutableAxmlWriter {
						export class MutableNodeImpl extends pxb.android.axml.AxmlWriter.NodeImpl {
							public static class: java.lang.Class<com.stardust.autojs.apkbuilder.ManifestEditor.MutableAxmlWriter.MutableNodeImpl>;
							public onAttr(a: pxb.android.axml.AxmlWriter.Attr): void;
							public child(ns: string, name: string): pxb.android.axml.NodeVisitor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module autojs {
			export module apkbuilder {
				export module util {
					export class BoolFunction<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.stardust.autojs.apkbuilder.util.BoolFunction<any>>;
						/**
						 * Constructs a new instance of the com.stardust.autojs.apkbuilder.util.BoolFunction<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: T): boolean;
						});
						public constructor();
						public accept(param0: T): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module autojs {
			export module apkbuilder {
				export module util {
					export class StreamUtils extends java.lang.Object {
						public static class: java.lang.Class<com.stardust.autojs.apkbuilder.util.StreamUtils>;
						public constructor();
						public static readAsBytes(inputStream: java.io.InputStream): number[];
						public static write(inputStream: java.io.InputStream, out: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module pxb {
	export module android {
		export class ResConst extends java.lang.Object {
			public static class: java.lang.Class<pxb.android.ResConst>;
			/**
			 * Constructs a new instance of the pxb.android.ResConst interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
			public static RES_STRING_POOL_TYPE: number;
			public static RES_TABLE_TYPE: number;
			public static RES_TABLE_TYPE_SPEC_TYPE: number;
			public static RES_XML_TYPE: number;
			public static RES_TABLE_PACKAGE_TYPE: number;
			public static RES_XML_END_ELEMENT_TYPE: number;
			public static RES_TABLE_TYPE_TYPE: number;
			public static RES_XML_RESOURCE_MAP_TYPE: number;
			public static RES_XML_END_NAMESPACE_TYPE: number;
			public static RES_XML_START_ELEMENT_TYPE: number;
			public static RES_XML_CDATA_TYPE: number;
			public static RES_XML_START_NAMESPACE_TYPE: number;
		}
	}
}

declare module pxb {
	export module android {
		export class StringItem extends java.lang.Object {
			public static class: java.lang.Class<pxb.android.StringItem>;
			public data: string;
			public dataOffset: number;
			public index: number;
			public toString(): string;
			public equals(obj: any): boolean;
			public constructor();
			public constructor(data: string);
			public hashCode(): number;
		}
	}
}

declare module pxb {
	export module android {
		export class StringItems extends java.util.ArrayList<pxb.android.StringItem> {
			public static class: java.lang.Class<pxb.android.StringItems>;
			public prepare(): void;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public contains(o: any): boolean;
			public retainAll(c: java.util.Collection<any>): boolean;
			public toArray(param0: any[]): any[];
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public lastIndexOf(o: any): number;
			public addAll(index: number, c: java.util.Collection<any>): boolean;
			public replaceAll(operator: any /* any*/): void;
			public add(e: any): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public clear(): void;
			public constructor(c: java.util.Collection<any>);
			public listIterator(param0: number): java.util.ListIterator<any>;
			public constructor();
			public addAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public equals(o: any): boolean;
			public add(param0: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public set(index: number, element: any): any;
			public get(index: number): any;
			public equals(param0: any): boolean;
			public constructor(initialCapacity: number);
			public remove(o: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public contains(param0: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public get(param0: number): any;
			public toArray(): any[];
			public remove(index: number): any;
			public addAll(c: java.util.Collection<any>): boolean;
			public toArray(a: any[]): any[];
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public subList(param0: number, param1: number): java.util.List<any>;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public removeAll(c: java.util.Collection<any>): boolean;
			public indexOf(o: any): number;
			public write(out: java.nio.ByteBuffer): void;
			public static read(_in_: java.nio.ByteBuffer): string[];
			public listIterator(): java.util.ListIterator<any>;
			public containsAll(c: java.util.Collection<any>): boolean;
			public add(index: number, element: any): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module pxb {
	export module android {
		export module arsc {
			export class ArscDumper extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.arsc.ArscDumper>;
				public static main(...args: string[]): void;
				public static dump(pkgs: java.util.List<pxb.android.arsc.Pkg>): void;
				public constructor();
			}
		}
	}
}

declare module pxb {
	export module android {
		export module arsc {
			export class ArscParser extends java.lang.Object implements pxb.android.ResConst {
				public static class: java.lang.Class<pxb.android.arsc.ArscParser>;
				public static TYPE_STRING: number;
				public constructor(b: number[]);
				public parse(): java.util.List<pxb.android.arsc.Pkg>;
			}
			export module ArscParser {
				export class Chunk extends java.lang.Object {
					public static class: java.lang.Class<pxb.android.arsc.ArscParser.Chunk>;
					public headSize: number;
					public location: number;
					public size: number;
					public type: number;
					public constructor(this$0: pxb.android.arsc.ArscParser);
				}
			}
		}
	}
}

declare module pxb {
	export module android {
		export module arsc {
			export class ArscWriter extends java.lang.Object implements pxb.android.ResConst {
				public static class: java.lang.Class<pxb.android.arsc.ArscWriter>;
				public static main(...args: string[]): void;
				public toByteArray(): number[];
				public constructor(pkgs: java.util.List<pxb.android.arsc.Pkg>);
			}
			export module ArscWriter {
				export class PkgCtx extends java.lang.Object {
					public static class: java.lang.Class<pxb.android.arsc.ArscWriter.PkgCtx>;
					public keyStringOff: number;
					public addKeyName(name: string): void;
					public addTypeName(id: number, name: string): void;
				}
			}
		}
	}
}

declare module pxb {
	export module android {
		export module arsc {
			export class BagValue extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.arsc.BagValue>;
				public parent: number;
				public map: java.util.List<java.util.Map.Entry<java.lang.Integer,pxb.android.arsc.Value>>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public toString(): string;
				public constructor(parent: number);
			}
		}
	}
}

declare module pxb {
	export module android {
		export module arsc {
			export class Config extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.arsc.Config>;
				public entryCount: number;
				public id: number[];
				public resources: java.util.Map<java.lang.Integer,pxb.android.arsc.ResEntry>;
				public constructor(id: number[], entryCount: number);
			}
		}
	}
}

declare module pxb {
	export module android {
		export module arsc {
			export class Pkg extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.arsc.Pkg>;
				public id: number;
				public name: string;
				public types: java.util.TreeMap<java.lang.Integer,pxb.android.arsc.Type>;
				public getType(tid: number, name: string, entrySize: number): pxb.android.arsc.Type;
				public constructor(id: number, name: string);
			}
		}
	}
}

declare module pxb {
	export module android {
		export module arsc {
			export class ResEntry extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.arsc.ResEntry>;
				public flag: number;
				public spec: pxb.android.arsc.ResSpec;
				public value: any;
				public constructor(flag: number, spec: pxb.android.arsc.ResSpec);
			}
		}
	}
}

declare module pxb {
	export module android {
		export module arsc {
			export class ResSpec extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.arsc.ResSpec>;
				public id: number;
				public flags: number;
				public name: string;
				public constructor(id: number);
				public updateName(s: string): void;
			}
		}
	}
}

declare module pxb {
	export module android {
		export module arsc {
			export class Type extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.arsc.Type>;
				public configs: java.util.List<pxb.android.arsc.Config>;
				public id: number;
				public name: string;
				public specs: pxb.android.arsc.ResSpec[];
				public getSpec(resId: number): pxb.android.arsc.ResSpec;
				public constructor();
				public addConfig(config: pxb.android.arsc.Config): void;
			}
		}
	}
}

declare module pxb {
	export module android {
		export module arsc {
			export class Value extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.arsc.Value>;
				public data: number;
				public type: number;
				public raw: string;
				public constructor(type: number, data: number, raw: string);
				public toString(): string;
			}
		}
	}
}

declare module pxb {
	export module android {
		export module axml {
			export class Axml extends pxb.android.axml.AxmlVisitor {
				public static class: java.lang.Class<pxb.android.axml.Axml>;
				public firsts: java.util.List<pxb.android.axml.Axml.Node>;
				public nses: java.util.List<pxb.android.axml.Axml.Ns>;
				public accept(visitor: pxb.android.axml.AxmlVisitor): void;
				public ns(prefix: string, uri: string, ln: number): void;
				public constructor(av: pxb.android.axml.NodeVisitor);
				public constructor();
				public child(ns: string, name: string): pxb.android.axml.NodeVisitor;
			}
			export module Axml {
				export class Node extends pxb.android.axml.NodeVisitor {
					public static class: java.lang.Class<pxb.android.axml.Axml.Node>;
					public attrs: java.util.List<pxb.android.axml.Axml.Node.Attr>;
					public children: java.util.List<pxb.android.axml.Axml.Node>;
					public ln: java.lang.Integer;
					public ns: string;
					public name: string;
					public attr(ns: string, name: string, resourceId: number, type: number, obj: any): void;
					public constructor(nv: pxb.android.axml.NodeVisitor);
					public constructor();
					public accept(nodeVisitor: pxb.android.axml.NodeVisitor): void;
					public acceptB(nodeVisitor: pxb.android.axml.NodeVisitor): void;
					public child(ns: string, name: string): pxb.android.axml.NodeVisitor;
					public text(lineNumber: number, value: string): void;
					public line(ln: number): void;
				}
				export module Node {
					export class Attr extends java.lang.Object {
						public static class: java.lang.Class<pxb.android.axml.Axml.Node.Attr>;
						public ns: string;
						public name: string;
						public resourceId: number;
						public type: number;
						public value: any;
						public constructor();
						public accept(nodeVisitor: pxb.android.axml.NodeVisitor): void;
					}
					export class Text extends java.lang.Object {
						public static class: java.lang.Class<pxb.android.axml.Axml.Node.Text>;
						public ln: number;
						public text: string;
						public constructor();
						public accept(nodeVisitor: pxb.android.axml.NodeVisitor): void;
					}
				}
				export class Ns extends java.lang.Object {
					public static class: java.lang.Class<pxb.android.axml.Axml.Ns>;
					public ln: number;
					public prefix: string;
					public uri: string;
					public accept(visitor: pxb.android.axml.AxmlVisitor): void;
					public constructor();
				}
			}
		}
	}
}

declare module pxb {
	export module android {
		export module axml {
			export class AxmlParser extends java.lang.Object implements pxb.android.ResConst {
				public static class: java.lang.Class<pxb.android.axml.AxmlParser>;
				public static END_FILE: number;
				public static END_NS: number;
				public static END_TAG: number;
				public static START_FILE: number;
				public static START_NS: number;
				public static START_TAG: number;
				public static TEXT: number;
				public getAttrValue(i: number): any;
				public getLineNumber(): number;
				public getAttrName(i: number): string;
				public getAttrNs(i: number): string;
				public getName(): string;
				public getAttributeCount(): number;
				public getAttrType(i: number): number;
				public getNamespaceUri(): string;
				public getText(): string;
				public getNamespacePrefix(): string;
				public constructor(_in_: java.nio.ByteBuffer);
				public getAttrResId(i: number): number;
				public constructor(data: number[]);
				public getAttrCount(): number;
				public next(): number;
			}
		}
	}
}

declare module pxb {
	export module android {
		export module axml {
			export class AxmlReader extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.axml.AxmlReader>;
				public static EMPTY_VISITOR: pxb.android.axml.NodeVisitor;
				public constructor(data: number[]);
				public accept(av: pxb.android.axml.AxmlVisitor): void;
			}
		}
	}
}

declare module pxb {
	export module android {
		export module axml {
			export class AxmlVisitor extends pxb.android.axml.NodeVisitor {
				public static class: java.lang.Class<pxb.android.axml.AxmlVisitor>;
				public ns(prefix: string, uri: string, ln: number): void;
				public constructor(av: pxb.android.axml.NodeVisitor);
				public constructor(nv: pxb.android.axml.NodeVisitor);
				public constructor();
			}
		}
	}
}

declare module pxb {
	export module android {
		export module axml {
			export class AxmlWriter extends pxb.android.axml.AxmlVisitor {
				public static class: java.lang.Class<pxb.android.axml.AxmlWriter>;
				public firsts: java.util.List<pxb.android.axml.AxmlWriter.NodeImpl>;
				public toByteArray(): number[];
				public ns(prefix: string, uri: string, ln: number): void;
				public constructor(av: pxb.android.axml.NodeVisitor);
				public constructor();
				public child(ns: string, name: string): pxb.android.axml.NodeVisitor;
				public end(): void;
			}
			export module AxmlWriter {
				export class Attr extends java.lang.Object {
					public static class: java.lang.Class<pxb.android.axml.AxmlWriter.Attr>;
					public index: number;
					public name: pxb.android.StringItem;
					public ns: pxb.android.StringItem;
					public resourceId: number;
					public type: number;
					public value: any;
					public raw: pxb.android.StringItem;
					public prepare(axmlWriter: pxb.android.axml.AxmlWriter): void;
					public constructor(ns: pxb.android.StringItem, name: pxb.android.StringItem, resourceId: number);
				}
				export class NodeImpl extends pxb.android.axml.NodeVisitor {
					public static class: java.lang.Class<pxb.android.axml.AxmlWriter.NodeImpl>;
					public children: java.util.List<pxb.android.axml.AxmlWriter.NodeImpl>;
					public text(ln: number, value: string): void;
					public end(): void;
					public attr(ns: string, name: string, resourceId: number, type: number, obj: any): void;
					public attr(ns: string, name: string, resourceId: number, type: number, value: any): void;
					public onAttr(a: pxb.android.axml.AxmlWriter.Attr): void;
					public constructor(nv: pxb.android.axml.NodeVisitor);
					public constructor();
					public constructor(ns: string, name: string);
					public prepare(axmlWriter: pxb.android.axml.AxmlWriter): number;
					public child(ns: string, name: string): pxb.android.axml.NodeVisitor;
					public text(lineNumber: number, value: string): void;
					public line(ln: number): void;
				}
				export class Ns extends java.lang.Object {
					public static class: java.lang.Class<pxb.android.axml.AxmlWriter.Ns>;
					public constructor(prefix: pxb.android.StringItem, uri: pxb.android.StringItem, ln: number);
				}
			}
		}
	}
}

declare module pxb {
	export module android {
		export module axml {
			export class DumpAdapter extends pxb.android.axml.AxmlVisitor {
				public static class: java.lang.Class<pxb.android.axml.DumpAdapter>;
				public deep: number;
				public nses: java.util.Map<string,string>;
				public attr(ns: string, name: string, resourceId: number, type: number, obj: any): void;
				public constructor(nv: pxb.android.axml.NodeVisitor, x: number, nses: java.util.Map<string,string>);
				public getPrefix(uri: string): string;
				public ns(prefix: string, uri: string, ln: number): void;
				public text(lineNumber: number, value: string): void;
				public constructor(av: pxb.android.axml.NodeVisitor);
				public constructor(nv: pxb.android.axml.NodeVisitor);
				public constructor();
				public child(ns: string, name: string): pxb.android.axml.NodeVisitor;
				public text(ln: number, value: string): void;
			}
		}
	}
}

declare module pxb {
	export module android {
		export module axml {
			export class DumpEditor extends pxb.android.axml.DumpAdapter {
				public static class: java.lang.Class<pxb.android.axml.DumpEditor>;
				public attr(ns: string, name: string, resourceId: number, type: number, obj: any): void;
				public constructor(nv: pxb.android.axml.NodeVisitor, valueModifications: java.util.Map<string,string>);
				public constructor(nv: pxb.android.axml.NodeVisitor, x: number, nses: java.util.Map<string,string>);
				public constructor(nv: pxb.android.axml.NodeVisitor);
				public constructor(valueModifications: java.util.Map<string,string>);
				public constructor();
				public child(ns: string, name: string): pxb.android.axml.NodeVisitor;
			}
		}
	}
}

declare module pxb {
	export module android {
		export module axml {
			export abstract class NodeVisitor extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.axml.NodeVisitor>;
				public static TYPE_FIRST_INT: number;
				public static TYPE_INT_BOOLEAN: number;
				public static TYPE_INT_HEX: number;
				public static TYPE_REFERENCE: number;
				public static TYPE_STRING: number;
				public nv: pxb.android.axml.NodeVisitor;
				public attr(ns: string, name: string, resourceId: number, type: number, obj: any): void;
				public line(ln: number): void;
				public text(lineNumber: number, value: string): void;
				public constructor(nv: pxb.android.axml.NodeVisitor);
				public constructor();
				public child(ns: string, name: string): pxb.android.axml.NodeVisitor;
				public end(): void;
			}
		}
	}
}

declare module pxb {
	export module android {
		export module axml {
			export class Util extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.axml.Util>;
				public static writeFile(data: number[], out: java.io.File): void;
				public static readIs(is: java.io.InputStream): number[];
				public static readProguardConfig(config: java.io.File): java.util.Map<string,string>;
				public static readFile(_in_: java.io.File): number[];
				public static copy(is: java.io.InputStream, os: java.io.OutputStream): void;
				public constructor();
			}
		}
	}
}

declare module pxb {
	export module android {
		export module axml {
			export class ValueWrapper extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.axml.ValueWrapper>;
				public static ID: number;
				public static STYLE: number;
				public static CLASS: number;
				public type: number;
				public raw: string;
				public ref: number;
				public static wrapStyle(ref: number, raw: string): pxb.android.axml.ValueWrapper;
				public replaceRaw(raw: string): pxb.android.axml.ValueWrapper;
				public static wrapClass(ref: number, raw: string): pxb.android.axml.ValueWrapper;
				public static wrapId(ref: number, raw: string): pxb.android.axml.ValueWrapper;
			}
		}
	}
}

declare module pxb {
	export module android {
		export module tinysign {
			export class TinySign extends java.lang.Object {
				public static class: java.lang.Class<pxb.android.tinysign.TinySign>;
				public static sign(dir: java.io.File, out: java.io.OutputStream): void;
				public constructor();
			}
			export module TinySign {
				export class SignatureOutputStream extends java.io.FilterOutputStream {
					public static class: java.lang.Class<pxb.android.tinysign.TinySign.SignatureOutputStream>;
					public constructor(out: java.io.OutputStream, sig: java.security.Signature);
					public constructor();
					public write(b: number): void;
					public write(b: number[]): void;
					public close(): void;
					public write(b: number[], off: number, len: number): void;
					public flush(): void;
					public constructor(out: java.io.OutputStream);
					public write(buffer: number[]): void;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export class AndrolibResources extends java.lang.Object {
			public static class: java.lang.Class<zhao.arsceditor.AndrolibResources>;
			public static sKeepBroken: boolean;
			public mARSCDecoder: zhao.arsceditor.ResDecoder.ARSCDecoder;
			public mAXMLDecoder: zhao.arsceditor.ResDecoder.AXMLDecoder;
			public constructor(context: android.content.Context);
			public decodeAXML(AXMLStream: java.io.InputStream): void;
			public getResTable(ARSCStream: java.io.InputStream): zhao.arsceditor.ResDecoder.data.ResTable;
			public getResTable(ARSCStream: java.io.InputStream, loadMainPkg: boolean): zhao.arsceditor.ResDecoder.data.ResTable;
			public loadMainPkg(resTable: zhao.arsceditor.ResDecoder.data.ResTable, ARSCStream: java.io.InputStream): zhao.arsceditor.ResDecoder.data.ResPackage;
			public getResTable(): zhao.arsceditor.ResDecoder.data.ResTable;
			public selectPkgWithMostResSpecs(pkgs: zhao.arsceditor.ResDecoder.data.ResPackage[]): zhao.arsceditor.ResDecoder.data.ResPackage;
			public pushFramResPackage(pkg: zhao.arsceditor.ResDecoder.data.ResPackage): void;
			public getFramPackage(): zhao.arsceditor.ResDecoder.data.ResPackage;
			public decodeARSC(resTable: zhao.arsceditor.ResDecoder.data.ResTable, callback: zhao.arsceditor.ResDecoder.ARSCCallBack): void;
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export class ARSCCallBack extends java.lang.Object {
				public static class: java.lang.Class<zhao.arsceditor.ResDecoder.ARSCCallBack>;
				/**
				 * Constructs a new instance of the zhao.arsceditor.ResDecoder.ARSCCallBack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					back(param0: string, param1: string, param2: string, param3: string): void;
				});
				public constructor();
				public back(param0: string, param1: string, param2: string, param3: string): void;
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export class ARSCDecoder extends java.lang.Object {
				public static class: java.lang.Class<zhao.arsceditor.ResDecoder.ARSCDecoder>;
				public mPkg: zhao.arsceditor.ResDecoder.data.ResPackage;
				public mTableStrings: zhao.arsceditor.ResDecoder.StringBlock;
				public decode(decoder: zhao.arsceditor.ResDecoder.ARSCDecoder, arscStream: java.io.InputStream, findFlagsOffsets: boolean, keepBroken: boolean): zhao.arsceditor.ResDecoder.ARSCDecoder.ARSCData;
				public write(os: java.io.OutputStream): void;
				public CloneArsc(os: java.io.OutputStream, newPackageName: string, close: boolean): void;
				public constructor(arscStream: java.io.InputStream, resTable: zhao.arsceditor.ResDecoder.data.ResTable, keepBroken: boolean);
				public getPackageName(): string;
				public write(os: java.io.OutputStream, stringlist_src: java.util.List<string>, stringlist_tar: java.util.List<string>): void;
				public decode(decoder: zhao.arsceditor.ResDecoder.ARSCDecoder, arscStream: java.io.InputStream, findFlagsOffsets: boolean, keepBroken: boolean, resTable: zhao.arsceditor.ResDecoder.data.ResTable): zhao.arsceditor.ResDecoder.ARSCDecoder.ARSCData;
				public readTable(): zhao.arsceditor.ResDecoder.data.ResPackage[];
			}
			export module ARSCDecoder {
				export class ARSCData extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.ARSCDecoder.ARSCData>;
					public getResTable(): zhao.arsceditor.ResDecoder.data.ResTable;
					public getPackages(): zhao.arsceditor.ResDecoder.data.ResPackage[];
					public constructor(packages: zhao.arsceditor.ResDecoder.data.ResPackage[], resTable: zhao.arsceditor.ResDecoder.data.ResTable);
					public findPackageWithMostResSpecs(): number;
					public getOnePackage(): zhao.arsceditor.ResDecoder.data.ResPackage;
				}
				export class Header extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.ARSCDecoder.Header>;
					public static TYPE_NONE: number;
					public static TYPE_TABLE: number;
					public static TYPE_PACKAGE: number;
					public static TYPE_TYPE: number;
					public static TYPE_SPEC_TYPE: number;
					public static TYPE_LIBRARY: number;
					public byte1: number;
					public byte2: number;
					public chunkSize: number;
					public type: number;
					public static read(_in_: zhao.arsceditor.ResDecoder.IO.LEDataInputStream): zhao.arsceditor.ResDecoder.ARSCDecoder.Header;
					public constructor(type: number, size: number, byte1: number, byte2: number);
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export class AXMLDecoder extends java.lang.Object {
				public static class: java.lang.Class<zhao.arsceditor.ResDecoder.AXMLDecoder>;
				public mTableStrings: zhao.arsceditor.ResDecoder.StringBlock;
				public write(stringlist_src: java.util.List<string>, stringlist_tar: java.util.List<string>, out: java.io.OutputStream): void;
				public static read(input: java.io.InputStream): zhao.arsceditor.ResDecoder.AXMLDecoder;
				public getStrings(m_strings: java.util.List<string>): void;
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export class GetResValues extends java.lang.Object {
				public static class: java.lang.Class<zhao.arsceditor.ResDecoder.GetResValues>;
				/**
				 * Constructs a new instance of the zhao.arsceditor.ResDecoder.GetResValues interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
				});
				public constructor();
				public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module IO {
				export class Duo<T1, T2>  extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.IO.Duo<any,any>>;
					public m1: T1;
					public m2: T2;
					public constructor(t1: T1, t2: T2);
					public equals(obj: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module IO {
				export class LEDataInputStream extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.IO.LEDataInputStream>;
					public work: number[];
					public size: number;
					public skipCheckShort(expected: number): void;
					public seek(position: number): void;
					public skipShort(): void;
					public readLong(): number;
					public setIsLittleEndian(isLittleEndian: boolean): void;
					public readShort(): number;
					public mark(readlimit: number): void;
					public readFully(ba: number[]): void;
					public constructor(_in_: java.io.InputStream);
					public readFully(ba: number[], off: number, len: number): void;
					public skipBytes(n: number): void;
					public close(): void;
					public readNulEndedString(length: number, fixed: boolean): string;
					public readInt(): number;
					public skipByte(): void;
					public reset(): void;
					public skipInt(): void;
					public skipCheckByte(expected: number): void;
					public readUnsignedShort(): number;
					public readByte(): number;
					public skipCheckInt(expected: number): void;
					public static toByteArray(input: java.io.InputStream): number[];
					public readIntArray(length: number): number[];
					public available(): number;
					public skipCheckChunkTypeInt(expected: number, possible: number): number;
					public read(buffer: number[], start: number, end: number): number;
					public constructor(data: number[]);
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module IO {
				export class LEDataOutputStream extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.IO.LEDataOutputStream>;
					public writeFully(b: number[]): void;
					public writeInt(i: number): void;
					public writeShort(s: number): void;
					public close(): void;
					public writeCharArray(charbuf: string[]): void;
					public writeNulEndedString(name: string): void;
					public size(): number;
					public writeBytes(length: number): void;
					public writeFully(buffer: number[], offset: number, count: number): void;
					public constructor(out: java.io.OutputStream);
					public writeByte(b: number): void;
					public writeIntArray(buf: number[]): void;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export class StringBlock extends java.lang.Object {
				public static class: java.lang.Class<zhao.arsceditor.ResDecoder.StringBlock>;
				public m_strings: number[];
				public writeFully(lmOut: zhao.arsceditor.ResDecoder.IO.LEDataOutputStream, bOut: java.io.ByteArrayOutputStream): void;
				public getList(): java.util.List<string>;
				public static read(reader: zhao.arsceditor.ResDecoder.IO.LEDataInputStream): zhao.arsceditor.ResDecoder.StringBlock;
				public find(string: string): number;
				public writeString(stringlist: java.util.List<string>): java.io.ByteArrayOutputStream;
				public sortStringBlock(src: string, tar: string): void;
				public getCount(): number;
				public getString(index: number): string;
				public constructor();
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export class ResConfig extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.ResConfig>;
					public toString(): string;
					public addResource(res: zhao.arsceditor.ResDecoder.data.ResResource, overwrite: boolean): void;
					public listResSpecs(): java.util.Set<zhao.arsceditor.ResDecoder.data.ResResSpec>;
					public constructor(flags: zhao.arsceditor.ResDecoder.data.ResConfigFlags);
					public getResource(spec: zhao.arsceditor.ResDecoder.data.ResResSpec): zhao.arsceditor.ResDecoder.data.ResResource;
					public listResources(): java.util.Set<zhao.arsceditor.ResDecoder.data.ResResource>;
					public getFlags(): zhao.arsceditor.ResDecoder.data.ResConfigFlags;
					public addResource(res: zhao.arsceditor.ResDecoder.data.ResResource): void;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export class ResConfigFlags extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.ResConfigFlags>;
					public static DENSITY_400: number;
					public static DENSITY_ANY: number;
					public static DENSITY_DEFAULT: number;
					public static DENSITY_HIGH: number;
					public static DENSITY_LOW: number;
					public static DENSITY_MEDIUM: number;
					public static DENSITY_NONE: number;
					public static DENSITY_TV: number;
					public static DENSITY_XHIGH: number;
					public static DENSITY_XXHIGH: number;
					public static DENSITY_XXXHIGH: number;
					public static KEYBOARD_12KEY: number;
					public static KEYBOARD_ANY: number;
					public static KEYBOARD_NOKEYS: number;
					public static KEYBOARD_QWERTY: number;
					public static KEYSHIDDEN_ANY: number;
					public static KEYSHIDDEN_NO: number;
					public static KEYSHIDDEN_SOFT: number;
					public static KEYSHIDDEN_YES: number;
					public static MASK_KEYSHIDDEN: number;
					public static MASK_LAYOUTDIR: number;
					public static MASK_NAVHIDDEN: number;
					public static MASK_SCREENLONG: number;
					public static MASK_SCREENROUND: number;
					public static MASK_SCREENSIZE: number;
					public static MASK_UI_MODE_NIGHT: number;
					public static MASK_UI_MODE_TYPE: number;
					public static MNC_ZERO: number;
					public static NAVHIDDEN_ANY: number;
					public static NAVHIDDEN_NO: number;
					public static NAVHIDDEN_YES: number;
					public static NAVIGATION_ANY: number;
					public static NAVIGATION_DPAD: number;
					public static NAVIGATION_NONAV: number;
					public static NAVIGATION_TRACKBALL: number;
					public static NAVIGATION_WHEEL: number;
					public static ORIENTATION_ANY: number;
					public static ORIENTATION_LAND: number;
					public static ORIENTATION_PORT: number;
					public static ORIENTATION_SQUARE: number;
					public static SCREENLAYOUT_LAYOUTDIR_ANY: number;
					public static SCREENLAYOUT_LAYOUTDIR_LTR: number;
					public static SCREENLAYOUT_LAYOUTDIR_RTL: number;
					public static SCREENLAYOUT_LAYOUTDIR_SHIFT: number;
					public static SCREENLAYOUT_ROUND_ANY: number;
					public static SCREENLAYOUT_ROUND_NO: number;
					public static SCREENLAYOUT_ROUND_YES: number;
					public static SCREENLONG_ANY: number;
					public static SCREENLONG_NO: number;
					public static SCREENLONG_YES: number;
					public static SCREENSIZE_ANY: number;
					public static SCREENSIZE_LARGE: number;
					public static SCREENSIZE_NORMAL: number;
					public static SCREENSIZE_SMALL: number;
					public static SCREENSIZE_XLARGE: number;
					public static SDK_BASE: number;
					public static SDK_BASE_1_1: number;
					public static SDK_CUPCAKE: number;
					public static SDK_DONUT: number;
					public static SDK_ECLAIR: number;
					public static SDK_ECLAIR_0_1: number;
					public static SDK_ECLAIR_MR1: number;
					public static SDK_FROYO: number;
					public static SDK_GINGERBREAD: number;
					public static SDK_GINGERBREAD_MR1: number;
					public static SDK_HONEYCOMB: number;
					public static SDK_HONEYCOMB_MR1: number;
					public static SDK_HONEYCOMB_MR2: number;
					public static SDK_ICE_CREAM_SANDWICH: number;
					public static SDK_ICE_CREAM_SANDWICH_MR1: number;
					public static SDK_JELLY_BEAN: number;
					public static SDK_JELLY_BEAN_MR1: number;
					public static SDK_JELLY_BEAN_MR2: number;
					public static SDK_KITKAT: number;
					public static SDK_LOLLIPOP: number;
					public static SDK_LOLLIPOP_MR1: number;
					public static SDK_MNC: number;
					public static TOUCHSCREEN_ANY: number;
					public static TOUCHSCREEN_FINGER: number;
					public static TOUCHSCREEN_NOTOUCH: number;
					public static TOUCHSCREEN_STYLUS: number;
					public static UI_MODE_NIGHT_ANY: number;
					public static UI_MODE_NIGHT_NO: number;
					public static UI_MODE_NIGHT_YES: number;
					public static UI_MODE_TYPE_ANY: number;
					public static UI_MODE_TYPE_APPLIANCE: number;
					public static UI_MODE_TYPE_CAR: number;
					public static UI_MODE_TYPE_DESK: number;
					public static UI_MODE_TYPE_GODZILLAUI: number;
					public static UI_MODE_TYPE_HUGEUI: number;
					public static UI_MODE_TYPE_LARGEUI: number;
					public static UI_MODE_TYPE_MEDIUMUI: number;
					public static UI_MODE_TYPE_NORMAL: number;
					public static UI_MODE_TYPE_SMALLUI: number;
					public static UI_MODE_TYPE_TELEVISION: number;
					public static UI_MODE_TYPE_WATCH: number;
					public density: number;
					public inputFlags: number;
					public isInvalid: boolean;
					public keyboard: number;
					public language: string[];
					public mcc: number;
					public mnc: number;
					public navigation: number;
					public orientation: number;
					public region: string[];
					public screenHeight: number;
					public screenHeightDp: number;
					public screenLayout: number;
					public screenWidth: number;
					public screenWidthDp: number;
					public sdkVersion: number;
					public smallestScreenWidthDp: number;
					public touchscreen: number;
					public uiMode: number;
					public constructor(mcc: number, mnc: number, language: string[], region: string[], orientation: number, touchscreen: number, density: number, keyboard: number, navigation: number, inputFlags: number, screenWidth: number, screenHeight: number, sdkVersion: number, screenLayout: number, uiMode: number, smallestScreenWidthDp: number, screenWidthDp: number, screenHeightDp: number, localeScript: string[], localeVariant: string[], screenLayout2: number, isInvalid: boolean, size: number);
					public equals(obj: any): boolean;
					public toString(): string;
					public getQualifiers(): string;
					public constructor();
					public hashCode(): number;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export class ResID extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.ResID>;
					public entry: number;
					public id: number;
					public package_: number;
					public type: number;
					public equals(obj: any): boolean;
					public toString(): string;
					public constructor(package_: number, type: number, entry: number);
					public constructor(id: number);
					public constructor(package_: number, type: number, entry: number, id: number);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export class ResPackage extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.ResPackage>;
					public equals(obj: any): boolean;
					public constructor(resTable: zhao.arsceditor.ResDecoder.data.ResTable, id: number, name: string);
					public getOrCreateConfig(flags: zhao.arsceditor.ResDecoder.data.ResConfigFlags): zhao.arsceditor.ResDecoder.data.ResType;
					public hasType(typeName: string): boolean;
					public hasConfig(flags: zhao.arsceditor.ResDecoder.data.ResConfigFlags): boolean;
					public addResSpec(spec: zhao.arsceditor.ResDecoder.data.ResResSpec): void;
					public listResSpecs(): java.util.List<zhao.arsceditor.ResDecoder.data.ResResSpec>;
					public listFiles(): java.util.Set<zhao.arsceditor.ResDecoder.data.ResResource>;
					public removeResSpec(spec: zhao.arsceditor.ResDecoder.data.ResResSpec): void;
					public listValuesFiles(): java.util.Collection<zhao.arsceditor.ResDecoder.data.ResValuesFile>;
					public getResTable(): zhao.arsceditor.ResDecoder.data.ResTable;
					public toString(): string;
					public hasResSpec(resID: zhao.arsceditor.ResDecoder.data.ResID): boolean;
					public hashCode(): number;
					public addConfig(config: zhao.arsceditor.ResDecoder.data.ResType): void;
					public getConfigs(): java.util.List<zhao.arsceditor.ResDecoder.data.ResType>;
					public addType(type: zhao.arsceditor.ResDecoder.data.ResTypeSpec): void;
					public getId(): number;
					public removeResource(res: zhao.arsceditor.ResDecoder.data.ResResource): void;
					public getValueFactory(): zhao.arsceditor.ResDecoder.data.value.ResValueFactory;
					public getConfig(flags: zhao.arsceditor.ResDecoder.data.ResConfigFlags): zhao.arsceditor.ResDecoder.data.ResType;
					public getType(typeName: string): zhao.arsceditor.ResDecoder.data.ResTypeSpec;
					public listTypes(): java.util.List<zhao.arsceditor.ResDecoder.data.ResTypeSpec>;
					public getName(): string;
					public getResSpec(resID: zhao.arsceditor.ResDecoder.data.ResID): zhao.arsceditor.ResDecoder.data.ResResSpec;
					public getResSpecCount(): number;
					public addSynthesizedRes(resId: number): void;
					public addResource(res: zhao.arsceditor.ResDecoder.data.ResResource): void;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export class ResResSpec extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.ResResSpec>;
					public getFullName(relativeToPackage: zhao.arsceditor.ResDecoder.data.ResPackage, excludeType: boolean): string;
					public hasResource(config: zhao.arsceditor.ResDecoder.data.ResType): boolean;
					public addResource(res: zhao.arsceditor.ResDecoder.data.ResResource, overwrite: boolean): void;
					public getFullName(excludePackage: boolean, excludeType: boolean): string;
					public getType(): zhao.arsceditor.ResDecoder.data.ResTypeSpec;
					public listResources(): java.util.Set<zhao.arsceditor.ResDecoder.data.ResResource>;
					public removeResource(res: zhao.arsceditor.ResDecoder.data.ResResource): void;
					public getFullName(): string;
					public getResource(config: zhao.arsceditor.ResDecoder.data.ResConfigFlags): zhao.arsceditor.ResDecoder.data.ResResource;
					public isDummyResSpec(): boolean;
					public toString(): string;
					public getDefaultResource(): zhao.arsceditor.ResDecoder.data.ResResource;
					public getId(): zhao.arsceditor.ResDecoder.data.ResID;
					public getName(): string;
					public hasDefaultResource(): boolean;
					public getResource(config: zhao.arsceditor.ResDecoder.data.ResType): zhao.arsceditor.ResDecoder.data.ResResource;
					public constructor(id: zhao.arsceditor.ResDecoder.data.ResID, name: string, pkg: zhao.arsceditor.ResDecoder.data.ResPackage, type: zhao.arsceditor.ResDecoder.data.ResTypeSpec);
					public getPackage(): zhao.arsceditor.ResDecoder.data.ResPackage;
					public addResource(res: zhao.arsceditor.ResDecoder.data.ResResource): void;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export class ResResource extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.ResResource>;
					public toString(): string;
					public getResSpec(): zhao.arsceditor.ResDecoder.data.ResResSpec;
					public getValue(): zhao.arsceditor.ResDecoder.data.value.ResValue;
					public replace(value: zhao.arsceditor.ResDecoder.data.value.ResValue): void;
					public getFilePath(): string;
					public getConfig(): zhao.arsceditor.ResDecoder.data.ResType;
					public constructor(config: zhao.arsceditor.ResDecoder.data.ResType, spec: zhao.arsceditor.ResDecoder.data.ResResSpec, value: zhao.arsceditor.ResDecoder.data.value.ResValue);
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export class ResTable extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.ResTable>;
					public getSharedLibrary(): boolean;
					public constructor(andRes: zhao.arsceditor.AndrolibResources);
					public setPackageOriginal(pkg: string): void;
					public hasPackage(id: number): boolean;
					public addSdkInfo(key: string, value: string): void;
					public clearSdkInfo(): void;
					public hasPackage(name: string): boolean;
					public constructor();
					public addPackage(pkg: zhao.arsceditor.ResDecoder.data.ResPackage, main: boolean): void;
					public getPackage(id: number): zhao.arsceditor.ResDecoder.data.ResPackage;
					public setAnalysisMode(mode: boolean): void;
					public getVersionInfo(): java.util.Map<string,string>;
					public setPackageId(id: number): void;
					public addVersionInfo(key: string, value: string): void;
					public getAnalysisMode(): boolean;
					public setSharedLibrary(flag: boolean): void;
					public getSdkInfo(): java.util.Map<string,string>;
					public getResSpec(resID: number): zhao.arsceditor.ResDecoder.data.ResResSpec;
					public getPackageRenamed(): string;
					public listFramePackages(): java.util.Set<zhao.arsceditor.ResDecoder.data.ResPackage>;
					public setPackageRenamed(pkg: string): void;
					public getPackageId(): number;
					public getResSpec(resID: zhao.arsceditor.ResDecoder.data.ResID): zhao.arsceditor.ResDecoder.data.ResResSpec;
					public getPackageOriginal(): string;
					public listMainPackages(): java.util.Set<zhao.arsceditor.ResDecoder.data.ResPackage>;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export class ResType extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.ResType>;
					public toString(): string;
					public addResource(res: zhao.arsceditor.ResDecoder.data.ResResource, overwrite: boolean): void;
					public listResSpecs(): java.util.Set<zhao.arsceditor.ResDecoder.data.ResResSpec>;
					public constructor(flags: zhao.arsceditor.ResDecoder.data.ResConfigFlags);
					public getResource(spec: zhao.arsceditor.ResDecoder.data.ResResSpec): zhao.arsceditor.ResDecoder.data.ResResource;
					public listResources(): java.util.Set<zhao.arsceditor.ResDecoder.data.ResResource>;
					public removeResource(res: zhao.arsceditor.ResDecoder.data.ResResource): void;
					public getFlags(): zhao.arsceditor.ResDecoder.data.ResConfigFlags;
					public addResource(res: zhao.arsceditor.ResDecoder.data.ResResource): void;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export class ResTypeSpec extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.ResTypeSpec>;
					public getResSpec(name: string): zhao.arsceditor.ResDecoder.data.ResResSpec;
					public toString(): string;
					public getName(): string;
					public isString(): boolean;
					public listResSpecs(): java.util.Set<zhao.arsceditor.ResDecoder.data.ResResSpec>;
					public getId(): number;
					public addResSpec(spec: zhao.arsceditor.ResDecoder.data.ResResSpec): void;
					public getEntryCount(): number;
					public constructor(name: string, resTable: zhao.arsceditor.ResDecoder.data.ResTable, package_: zhao.arsceditor.ResDecoder.data.ResPackage, id: number, entryCount: number);
					public removeResSpec(spec: zhao.arsceditor.ResDecoder.data.ResResSpec): void;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export class ResUnknownFiles extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.ResUnknownFiles>;
					public addUnknownFileInfo(file: string, value: string): void;
					public constructor();
					public getUnknownFiles(): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export class ResValuesFile extends java.lang.Object {
					public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.ResValuesFile>;
					public getPath(): string;
					public equals(obj: any): boolean;
					public constructor(pkg: zhao.arsceditor.ResDecoder.data.ResPackage, type: zhao.arsceditor.ResDecoder.data.ResTypeSpec, config: zhao.arsceditor.ResDecoder.data.ResType);
					public getType(): zhao.arsceditor.ResDecoder.data.ResTypeSpec;
					public isSynthesized(res: zhao.arsceditor.ResDecoder.data.ResResource): boolean;
					public listResources(): java.util.Set<zhao.arsceditor.ResDecoder.data.ResResource>;
					public hashCode(): number;
					public getConfig(): zhao.arsceditor.ResDecoder.data.ResType;
					public addResource(res: zhao.arsceditor.ResDecoder.data.ResResource): void;
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResArrayValue extends zhao.arsceditor.ResDecoder.data.value.ResBagValue implements zhao.arsceditor.ResDecoder.GetResValues {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResArrayValue>;
						public static BAG_KEY_ARRAY_START: number;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public getType(): string;
						public constructor(parent: zhao.arsceditor.ResDecoder.data.value.ResReferenceValue, items: zhao.arsceditor.ResDecoder.data.value.ResScalarValue[]);
						public constructor(parent: zhao.arsceditor.ResDecoder.data.value.ResReferenceValue);
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResAttr extends zhao.arsceditor.ResDecoder.data.value.ResBagValue implements zhao.arsceditor.ResDecoder.GetResValues {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResAttr>;
						public static BAG_KEY_ATTR_TYPE: number;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public static factory(parent: zhao.arsceditor.ResDecoder.data.value.ResReferenceValue, items: zhao.arsceditor.ResDecoder.IO.Duo<java.lang.Integer,zhao.arsceditor.ResDecoder.data.value.ResScalarValue>[], factory: zhao.arsceditor.ResDecoder.data.value.ResValueFactory, pkg: zhao.arsceditor.ResDecoder.data.ResPackage): zhao.arsceditor.ResDecoder.data.value.ResAttr;
						public serializeBody(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public convertToResXmlFormat(value: zhao.arsceditor.ResDecoder.data.value.ResScalarValue): string;
						public getTypeAsString(): string;
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResBagValue extends zhao.arsceditor.ResDecoder.data.value.ResValue implements zhao.arsceditor.ResDecoder.GetResValues {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResBagValue>;
						public mParent: zhao.arsceditor.ResDecoder.data.value.ResReferenceValue;
						public getParent(): zhao.arsceditor.ResDecoder.data.value.ResReferenceValue;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor(parent: zhao.arsceditor.ResDecoder.data.value.ResReferenceValue);
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResBoolValue extends zhao.arsceditor.ResDecoder.data.value.ResScalarValue {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResBoolValue>;
						public constructor(value: boolean, rawIntValue: number, rawValue: string);
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor(type: string, rawIntValue: number, rawValue: string);
						public getValue(): boolean;
						public encodeAsResValue(): string;
						public constructor(rawIntValue: number);
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResColorValue extends zhao.arsceditor.ResDecoder.data.value.ResIntValue {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResColorValue>;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor(type: string, rawIntValue: number, rawValue: string);
						public constructor(value: number, rawValue: string);
						public constructor(value: number, rawValue: string, type: string);
						public encodeAsResValue(): string;
						public constructor(value: number, rawValue: string, type: number);
						public constructor(rawIntValue: number);
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResDimenValue extends zhao.arsceditor.ResDecoder.data.value.ResIntValue {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResDimenValue>;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor(type: string, rawIntValue: number, rawValue: string);
						public constructor(value: number, rawValue: string);
						public constructor(value: number, rawValue: string, type: string);
						public encodeAsResValue(): string;
						public constructor(value: number, rawValue: string, type: number);
						public constructor(rawIntValue: number);
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResEnumAttr extends zhao.arsceditor.ResDecoder.data.value.ResAttr {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResEnumAttr>;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public serializeBody(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public convertToResXmlFormat(value: zhao.arsceditor.ResDecoder.data.value.ResScalarValue): string;
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResFileValue extends zhao.arsceditor.ResDecoder.data.value.ResIntBasedValue implements zhao.arsceditor.ResDecoder.GetResValues {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResFileValue>;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public getStrippedPath(): string;
						public constructor(path: string, rawIntValue: number);
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public getPath(): string;
						public constructor(rawIntValue: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResFlagsAttr extends zhao.arsceditor.ResDecoder.data.value.ResAttr {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResFlagsAttr>;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public serializeBody(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public convertToResXmlFormat(value: zhao.arsceditor.ResDecoder.data.value.ResScalarValue): string;
					}
					export module ResFlagsAttr {
						export class FlagItem extends java.lang.Object {
							public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResFlagsAttr.FlagItem>;
							public flag: number;
							public value: string;
							public constructor(ref: zhao.arsceditor.ResDecoder.data.value.ResReferenceValue, flag: number);
							public getValue(): string;
						}
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResFloatValue extends zhao.arsceditor.ResDecoder.data.value.ResScalarValue {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResFloatValue>;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor(type: string, rawIntValue: number, rawValue: string);
						public constructor(value: number, rawIntValue: number, rawValue: string);
						public encodeAsResValue(): string;
						public constructor(rawIntValue: number);
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResFractionValue extends zhao.arsceditor.ResDecoder.data.value.ResIntValue {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResFractionValue>;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor(type: string, rawIntValue: number, rawValue: string);
						public constructor(value: number, rawValue: string);
						public constructor(value: number, rawValue: string, type: string);
						public encodeAsResValue(): string;
						public constructor(value: number, rawValue: string, type: number);
						public constructor(rawIntValue: number);
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResIdValue extends zhao.arsceditor.ResDecoder.data.value.ResValue implements zhao.arsceditor.ResDecoder.GetResValues {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResIdValue>;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResIntBasedValue extends zhao.arsceditor.ResDecoder.data.value.ResValue {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResIntBasedValue>;
						public constructor();
						public getRawIntValue(): number;
						public constructor(rawIntValue: number);
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResIntValue extends zhao.arsceditor.ResDecoder.data.value.ResScalarValue {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResIntValue>;
						public mValue: number;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor(type: string, rawIntValue: number, rawValue: string);
						public constructor(value: number, rawValue: string, type: string);
						public encodeAsResValue(): string;
						public constructor(rawIntValue: number);
						public constructor(value: number, rawValue: string, type: number);
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResReferenceValue extends zhao.arsceditor.ResDecoder.data.value.ResIntValue {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResReferenceValue>;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public isNull(): boolean;
						public constructor(package_: zhao.arsceditor.ResDecoder.data.ResPackage, value: number, rawValue: string);
						public constructor(package_: zhao.arsceditor.ResDecoder.data.ResPackage, value: number, rawValue: string, theme: boolean);
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor(type: string, rawIntValue: number, rawValue: string);
						public constructor(value: number, rawValue: string, type: string);
						public encodeAsResValue(): string;
						public constructor(value: number, rawValue: string, type: number);
						public constructor(rawIntValue: number);
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export abstract class ResScalarValue extends zhao.arsceditor.ResDecoder.data.value.ResIntBasedValue implements zhao.arsceditor.ResDecoder.GetResValues {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResScalarValue>;
						public mRawValue: string;
						public mType: string;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor(type: string, rawIntValue: number, rawValue: string);
						public encodeAsResXmlItemValue(): string;
						public getType(): string;
						public encodeResValue(): string;
						public encodeAsResValue(): string;
						public constructor(rawIntValue: number);
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResStringValue extends zhao.arsceditor.ResDecoder.data.value.ResScalarValue {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResStringValue>;
						public constructor(value: string, rawValue: number, type: string);
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor();
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public constructor(type: string, rawIntValue: number, rawValue: string);
						public constructor(value: string, rawValue: number);
						public encodeAsResValue(): string;
						public constructor(rawIntValue: number);
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResStyleValue extends zhao.arsceditor.ResDecoder.data.value.ResBagValue implements zhao.arsceditor.ResDecoder.GetResValues {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResStyleValue>;
						public getResValues(param0: zhao.arsceditor.ResDecoder.ARSCCallBack, param1: zhao.arsceditor.ResDecoder.data.ResResource): void;
						public getResValues(back: zhao.arsceditor.ResDecoder.ARSCCallBack, res: zhao.arsceditor.ResDecoder.data.ResResource): void;
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResValue extends java.lang.Object {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResValue>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module zhao {
	export module arsceditor {
		export module ResDecoder {
			export module data {
				export module value {
					export class ResValueFactory extends java.lang.Object {
						public static class: java.lang.Class<zhao.arsceditor.ResDecoder.data.value.ResValueFactory>;
						public newReference(resID: number, rawValue: string, theme: boolean): zhao.arsceditor.ResDecoder.data.value.ResReferenceValue;
						public constructor(pakage_: zhao.arsceditor.ResDecoder.data.ResPackage);
						public factory(value: string, rawValue: number): zhao.arsceditor.ResDecoder.data.value.ResIntBasedValue;
						public factory(type: number, value: number, rawValue: string): zhao.arsceditor.ResDecoder.data.value.ResScalarValue;
						public newReference(resID: number, rawValue: string): zhao.arsceditor.ResDecoder.data.value.ResReferenceValue;
						public bagFactory(parent: number, items: zhao.arsceditor.ResDecoder.IO.Duo<java.lang.Integer,zhao.arsceditor.ResDecoder.data.value.ResScalarValue>[]): zhao.arsceditor.ResDecoder.data.value.ResBagValue;
					}
				}
			}
		}
	}
}

//Generics information:
//com.stardust.autojs.apkbuilder.util.BoolFunction:1
//zhao.arsceditor.ResDecoder.IO.Duo:2

