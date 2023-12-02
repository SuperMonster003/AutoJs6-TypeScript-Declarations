declare module com {
	export module android {
		export module dex {
			export class Annotation extends java.lang.Comparable<com.android.dex.Annotation> {
				public static class: java.lang.Class<com.android.dex.Annotation>;
				public getTypeIndex(): number;
				public getReader(): com.android.dex.EncodedValueReader;
				public getVisibility(): number;
				public constructor(dex: com.android.dex.Dex, visibility: number, encodedAnnotation: com.android.dex.EncodedValue);
				public toString(): string;
				public compareTo(other: com.android.dex.Annotation): number;
				public writeTo(out: com.android.dex.Dex.Section): void;
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class CallSiteId extends java.lang.Comparable<com.android.dex.CallSiteId> {
				public static class: java.lang.Class<com.android.dex.CallSiteId>;
				public constructor(dex: com.android.dex.Dex, offset: number);
				public getCallSiteOffset(): number;
				public compareTo(o: com.android.dex.CallSiteId): number;
				public toString(): string;
				public writeTo(out: com.android.dex.Dex.Section): void;
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class ClassData extends java.lang.Object {
				public static class: java.lang.Class<com.android.dex.ClassData>;
				public getInstanceFields(): com.android.dex.ClassData.Field[];
				public allMethods(): com.android.dex.ClassData.Method[];
				public constructor(staticFields: com.android.dex.ClassData.Field[], instanceFields: com.android.dex.ClassData.Field[], directMethods: com.android.dex.ClassData.Method[], virtualMethods: com.android.dex.ClassData.Method[]);
				public getStaticFields(): com.android.dex.ClassData.Field[];
				public getDirectMethods(): com.android.dex.ClassData.Method[];
				public getVirtualMethods(): com.android.dex.ClassData.Method[];
				public allFields(): com.android.dex.ClassData.Field[];
			}
			export module ClassData {
				export class Field extends java.lang.Object {
					public static class: java.lang.Class<com.android.dex.ClassData.Field>;
					public constructor(fieldIndex: number, accessFlags: number);
					public getAccessFlags(): number;
					public getFieldIndex(): number;
				}
				export class Method extends java.lang.Object {
					public static class: java.lang.Class<com.android.dex.ClassData.Method>;
					public getAccessFlags(): number;
					public constructor(methodIndex: number, accessFlags: number, codeOffset: number);
					public getMethodIndex(): number;
					public getCodeOffset(): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class ClassDef extends java.lang.Object {
				public static class: java.lang.Class<com.android.dex.ClassDef>;
				public static NO_INDEX: number;
				public getInterfacesOffset(): number;
				public getSourceFileIndex(): number;
				public getOffset(): number;
				public getSupertypeIndex(): number;
				public getTypeIndex(): number;
				public getAnnotationsOffset(): number;
				public constructor(buffer: com.android.dex.Dex, offset: number, typeIndex: number, accessFlags: number, supertypeIndex: number, interfacesOffset: number, sourceFileIndex: number, annotationsOffset: number, classDataOffset: number, staticValuesOffset: number);
				public toString(): string;
				public getClassDataOffset(): number;
				public getAccessFlags(): number;
				public getStaticValuesOffset(): number;
				public getInterfaces(): number[];
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class Code extends java.lang.Object {
				public static class: java.lang.Class<com.android.dex.Code>;
				public getInstructions(): number[];
				public getInsSize(): number;
				public getOutsSize(): number;
				public getRegistersSize(): number;
				public getCatchHandlers(): com.android.dex.Code.CatchHandler[];
				public getDebugInfoOffset(): number;
				public getTries(): com.android.dex.Code.Try[];
				public constructor(registersSize: number, insSize: number, outsSize: number, debugInfoOffset: number, instructions: number[], tries: com.android.dex.Code.Try[], catchHandlers: com.android.dex.Code.CatchHandler[]);
			}
			export module Code {
				export class CatchHandler extends java.lang.Object {
					public static class: java.lang.Class<com.android.dex.Code.CatchHandler>;
					public getCatchAllAddress(): number;
					public constructor(typeIndexes: number[], addresses: number[], catchAllAddress: number, offset: number);
					public getAddresses(): number[];
					public getTypeIndexes(): number[];
					public getOffset(): number;
				}
				export class Try extends java.lang.Object {
					public static class: java.lang.Class<com.android.dex.Code.Try>;
					public getCatchHandlerIndex(): number;
					public getStartAddress(): number;
					public getInstructionCount(): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class Dex extends java.lang.Object {
				public static class: java.lang.Class<com.android.dex.Dex>;
				public appendSection(maxByteCount: number, name: string): com.android.dex.Dex.Section;
				public writeTo(out: java.io.OutputStream): void;
				public open(position: number): com.android.dex.Dex.Section;
				public typeNames(): java.util.List<string>;
				public readCode(method: com.android.dex.ClassData.Method): com.android.dex.Code;
				public getTableOfContents(): com.android.dex.TableOfContents;
				public constructor(data: number[]);
				public getNextSectionStart(): number;
				public protoIds(): java.util.List<com.android.dex.ProtoId>;
				public constructor(file: java.io.File);
				public strings(): java.util.List<string>;
				public writeTo(dexOut: java.io.File): void;
				public computeChecksum(): number;
				public classDefs(): java.lang.Iterable<com.android.dex.ClassDef>;
				public computeSignature(): number[];
				public constructor(_in_: java.io.InputStream);
				public readClassData(classDef: com.android.dex.ClassDef): com.android.dex.ClassData;
				public descriptorIndexFromTypeIndex(typeIndex: number): number;
				public constructor(byteCount: number);
				public getLength(): number;
				public writeHashes(): void;
				public fieldIds(): java.util.List<com.android.dex.FieldId>;
				public typeIds(): java.util.List<java.lang.Integer>;
				public getBytes(): number[];
				public readTypeList(offset: number): com.android.dex.TypeList;
				public methodIds(): java.util.List<com.android.dex.MethodId>;
			}
			export module Dex {
				export class ClassDefIterable extends java.lang.Iterable<com.android.dex.ClassDef> {
					public static class: java.lang.Class<com.android.dex.Dex.ClassDefIterable>;
					public iterator(): java.util.Iterator<any>;
					public spliterator(): java.util.Spliterator<any>;
					public iterator(): java.util.Iterator<com.android.dex.ClassDef>;
					public forEach(action: any /* any*/): void;
				}
				export class ClassDefIterator extends java.util.Iterator<com.android.dex.ClassDef> {
					public static class: java.lang.Class<com.android.dex.Dex.ClassDefIterator>;
					public next(): com.android.dex.ClassDef;
					public hasNext(): boolean;
					public remove(): void;
				}
				export class FieldIdTable extends java.util.AbstractList<com.android.dex.FieldId> implements java.util.RandomAccess  {
					public static class: java.lang.Class<com.android.dex.Dex.FieldIdTable>;
					public isEmpty(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public lastIndexOf(o: any): number;
					public iterator(): java.util.Iterator<any>;
					public toArray(param0: any[]): any[];
					public get(param0: number): any;
					public remove(o: any): boolean;
					public listIterator(index: number): java.util.ListIterator<any>;
					public toArray(a: any[]): any[];
					public toArray(): any[];
					public add(param0: number, param1: any): void;
					public sort(c: java.util.Comparator<any>): void;
					public get(index: number): com.android.dex.FieldId;
					public add(index: number, element: any): void;
					public set(param0: number, param1: any): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public subList(fromIndex: number, toIndex: number): java.util.List<any>;
					public addAll(c: java.util.Collection<any>): boolean;
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
				export class MethodIdTable extends java.util.AbstractList<com.android.dex.MethodId> implements java.util.RandomAccess  {
					public static class: java.lang.Class<com.android.dex.Dex.MethodIdTable>;
					public isEmpty(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public lastIndexOf(o: any): number;
					public iterator(): java.util.Iterator<any>;
					public toArray(param0: any[]): any[];
					public get(param0: number): any;
					public remove(o: any): boolean;
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
					public set(index: number, element: any): any;
					public remove(index: number): any;
					public get(index: number): com.android.dex.MethodId;
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
				export class ProtoIdTable extends java.util.AbstractList<com.android.dex.ProtoId> implements java.util.RandomAccess  {
					public static class: java.lang.Class<com.android.dex.Dex.ProtoIdTable>;
					public isEmpty(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public lastIndexOf(o: any): number;
					public iterator(): java.util.Iterator<any>;
					public toArray(param0: any[]): any[];
					public get(param0: number): any;
					public remove(o: any): boolean;
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
					public set(index: number, element: any): any;
					public get(index: number): com.android.dex.ProtoId;
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
				export class Section extends java.lang.Object implements com.android.dex.util.ByteInput, com.android.dex.util.ByteOutput {
					public static class: java.lang.Class<com.android.dex.Dex.Section>;
					public readSleb128(): number;
					public readCallSiteId(): com.android.dex.CallSiteId;
					public writeSleb128(i: number): void;
					public write(bytes: number[]): void;
					public readProtoId(): com.android.dex.ProtoId;
					public alignToFourBytesWithZeroFill(): void;
					public writeUleb128p1(i: number): void;
					public writeByte(b: number): void;
					public readShort(): number;
					public writeInt(i: number): void;
					public readByteArray(length: number): number[];
					public readTypeList(): com.android.dex.TypeList;
					public write(shorts: number[]): void;
					public readInt(): number;
					public readFieldId(): com.android.dex.FieldId;
					public readClassDef(): com.android.dex.ClassDef;
					public writeTypeList(typeList: com.android.dex.TypeList): void;
					public used(): number;
					public skip(count: number): void;
					public writeShort(i: number): void;
					public readMethodId(): com.android.dex.MethodId;
					public alignToFourBytes(): void;
					public readUnsignedShort(): number;
					public readUleb128p1(): number;
					public writeUleb128(i: number): void;
					public readByte(): number;
					public readAnnotation(): com.android.dex.Annotation;
					public readMethodHandle(): com.android.dex.MethodHandle;
					public writeByte(param0: number): void;
					public readShortArray(length: number): number[];
					public assertFourByteAligned(): void;
					public writeUnsignedShort(i: number): void;
					public readEncodedArray(): com.android.dex.EncodedValue;
					public getPosition(): number;
					public readUleb128(): number;
					public readString(): string;
					public writeStringData(value: string): void;
				}
				export class StringTable extends java.util.AbstractList<string> implements java.util.RandomAccess  {
					public static class: java.lang.Class<com.android.dex.Dex.StringTable>;
					public isEmpty(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public lastIndexOf(o: any): number;
					public iterator(): java.util.Iterator<any>;
					public toArray(param0: any[]): any[];
					public get(param0: number): any;
					public remove(o: any): boolean;
					public listIterator(index: number): java.util.ListIterator<any>;
					public toArray(a: any[]): any[];
					public toArray(): any[];
					public add(param0: number, param1: any): void;
					public get(index: number): string;
					public sort(c: java.util.Comparator<any>): void;
					public add(index: number, element: any): void;
					public set(param0: number, param1: any): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public subList(fromIndex: number, toIndex: number): java.util.List<any>;
					public addAll(c: java.util.Collection<any>): boolean;
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
				export class TypeIndexToDescriptorIndexTable extends java.util.AbstractList<java.lang.Integer> implements java.util.RandomAccess  {
					public static class: java.lang.Class<com.android.dex.Dex.TypeIndexToDescriptorIndexTable>;
					public isEmpty(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public lastIndexOf(o: any): number;
					public iterator(): java.util.Iterator<any>;
					public toArray(param0: any[]): any[];
					public get(param0: number): any;
					public remove(o: any): boolean;
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
					public set(index: number, element: any): any;
					public remove(index: number): any;
					public contains(o: any): boolean;
					public remove(param0: number): any;
					public removeAll(c: java.util.Collection<any>): boolean;
					public get(index: number): java.lang.Integer;
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
				export class TypeIndexToDescriptorTable extends java.util.AbstractList<string> implements java.util.RandomAccess  {
					public static class: java.lang.Class<com.android.dex.Dex.TypeIndexToDescriptorTable>;
					public isEmpty(): boolean;
					public spliterator(): java.util.Spliterator<any>;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public equals(o: any): boolean;
					public lastIndexOf(o: any): number;
					public iterator(): java.util.Iterator<any>;
					public toArray(param0: any[]): any[];
					public get(param0: number): any;
					public remove(o: any): boolean;
					public listIterator(index: number): java.util.ListIterator<any>;
					public toArray(a: any[]): any[];
					public toArray(): any[];
					public add(param0: number, param1: any): void;
					public get(index: number): string;
					public sort(c: java.util.Comparator<any>): void;
					public add(index: number, element: any): void;
					public set(param0: number, param1: any): any;
					public replaceAll(operator: any /* any*/): void;
					public addAll(param0: java.util.Collection<any>): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public subList(fromIndex: number, toIndex: number): java.util.List<any>;
					public addAll(c: java.util.Collection<any>): boolean;
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
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class DexException extends com.android.dex.util.ExceptionWithContext {
				public static class: java.lang.Class<com.android.dex.DexException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class DexFormat extends java.lang.Object {
				public static class: java.lang.Class<com.android.dex.DexFormat>;
				public static API_INVOKE_POLYMORPHIC: number;
				public static API_DEFAULT_INTERFACE_METHODS: number;
				public static API_NO_EXTENDED_OPCODES: number;
				public static API_CURRENT: number;
				public static VERSION_FOR_API_26: string;
				public static VERSION_FOR_API_24: string;
				public static VERSION_FOR_API_13: string;
				public static VERSION_CURRENT: string;
				public static DEX_IN_JAR_NAME: string;
				public static MAGIC_PREFIX: string;
				public static MAGIC_SUFFIX: string;
				public static ENDIAN_TAG: number;
				public static MAX_MEMBER_IDX: number;
				public static MAX_TYPE_IDX: number;
				public static apiToMagic(targetApiLevel: number): string;
				public static magicToApi(magic: number[]): number;
				public static isSupportedDexMagic(magic: number[]): boolean;
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class DexIndexOverflowException extends com.android.dex.DexException {
				public static class: java.lang.Class<com.android.dex.DexIndexOverflowException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class EncodedValue extends java.lang.Comparable<com.android.dex.EncodedValue> {
				public static class: java.lang.Class<com.android.dex.EncodedValue>;
				public compareTo(other: com.android.dex.EncodedValue): number;
				public asByteInput(): com.android.dex.util.ByteInput;
				public getBytes(): number[];
				public constructor(data: number[]);
				public toString(): string;
				public writeTo(out: com.android.dex.Dex.Section): void;
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class EncodedValueCodec extends java.lang.Object {
				public static class: java.lang.Class<com.android.dex.EncodedValueCodec>;
				public static readUnsignedInt(_in_: com.android.dex.util.ByteInput, zwidth: number, fillOnRight: boolean): number;
				public static readSignedLong(_in_: com.android.dex.util.ByteInput, zwidth: number): number;
				public static readUnsignedLong(_in_: com.android.dex.util.ByteInput, zwidth: number, fillOnRight: boolean): number;
				public static writeUnsignedIntegralValue(out: com.android.dex.util.ByteOutput, type: number, value: number): void;
				public static writeSignedIntegralValue(out: com.android.dex.util.ByteOutput, type: number, value: number): void;
				public static writeRightZeroExtendedValue(out: com.android.dex.util.ByteOutput, type: number, value: number): void;
				public static readSignedInt(_in_: com.android.dex.util.ByteInput, zwidth: number): number;
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class EncodedValueReader extends java.lang.Object {
				public static class: java.lang.Class<com.android.dex.EncodedValueReader>;
				public static ENCODED_BYTE: number;
				public static ENCODED_SHORT: number;
				public static ENCODED_CHAR: number;
				public static ENCODED_INT: number;
				public static ENCODED_LONG: number;
				public static ENCODED_FLOAT: number;
				public static ENCODED_DOUBLE: number;
				public static ENCODED_METHOD_TYPE: number;
				public static ENCODED_METHOD_HANDLE: number;
				public static ENCODED_STRING: number;
				public static ENCODED_TYPE: number;
				public static ENCODED_FIELD: number;
				public static ENCODED_ENUM: number;
				public static ENCODED_METHOD: number;
				public static ENCODED_ARRAY: number;
				public static ENCODED_ANNOTATION: number;
				public static ENCODED_NULL: number;
				public static ENCODED_BOOLEAN: number;
				public _in_: com.android.dex.util.ByteInput;
				public readType(): number;
				public readChar(): string;
				public getAnnotationType(): number;
				public readAnnotation(): number;
				public constructor(_in_: com.android.dex.util.ByteInput, knownType: number);
				public readString(): number;
				public readByte(): number;
				public readShort(): number;
				public readMethodType(): number;
				public readLong(): number;
				public readDouble(): number;
				public readFloat(): number;
				public readEnum(): number;
				public peek(): number;
				public readArray(): number;
				public readInt(): number;
				public constructor(_in_: com.android.dex.util.ByteInput);
				public constructor(_in_: com.android.dex.EncodedValue, knownType: number);
				public readMethodHandle(): number;
				public readNull(): void;
				public skipValue(): void;
				public readField(): number;
				public constructor(_in_: com.android.dex.EncodedValue);
				public readAnnotationName(): number;
				public readMethod(): number;
				public readBoolean(): boolean;
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class FieldId extends java.lang.Comparable<com.android.dex.FieldId> {
				public static class: java.lang.Class<com.android.dex.FieldId>;
				public getTypeIndex(): number;
				public getDeclaringClassIndex(): number;
				public getNameIndex(): number;
				public constructor(dex: com.android.dex.Dex, declaringClassIndex: number, typeIndex: number, nameIndex: number);
				public compareTo(other: com.android.dex.FieldId): number;
				public toString(): string;
				public writeTo(out: com.android.dex.Dex.Section): void;
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class Leb128 extends java.lang.Object {
				public static class: java.lang.Class<com.android.dex.Leb128>;
				public static unsignedLeb128Size(value: number): number;
				public static readSignedLeb128(_in_: com.android.dex.util.ByteInput): number;
				public static writeSignedLeb128(out: com.android.dex.util.ByteOutput, value: number): void;
				public static readUnsignedLeb128(_in_: com.android.dex.util.ByteInput): number;
				public static writeUnsignedLeb128(out: com.android.dex.util.ByteOutput, value: number): void;
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class MethodHandle extends java.lang.Comparable<com.android.dex.MethodHandle> {
				public static class: java.lang.Class<com.android.dex.MethodHandle>;
				public getMethodHandleType(): com.android.dex.MethodHandle.MethodHandleType;
				public getUnused2(): number;
				public getFieldOrMethodId(): number;
				public getUnused1(): number;
				public constructor(dex: com.android.dex.Dex, methodHandleType: com.android.dex.MethodHandle.MethodHandleType, unused1: number, fieldOrMethodId: number, unused2: number);
				public compareTo(o: com.android.dex.MethodHandle): number;
				public toString(): string;
				public writeTo(out: com.android.dex.Dex.Section): void;
			}
			export module MethodHandle {
				export class MethodHandleType {
					public static class: java.lang.Class<com.android.dex.MethodHandle.MethodHandleType>;
					public static METHOD_HANDLE_TYPE_STATIC_PUT: com.android.dex.MethodHandle.MethodHandleType;
					public static METHOD_HANDLE_TYPE_STATIC_GET: com.android.dex.MethodHandle.MethodHandleType;
					public static METHOD_HANDLE_TYPE_INSTANCE_PUT: com.android.dex.MethodHandle.MethodHandleType;
					public static METHOD_HANDLE_TYPE_INSTANCE_GET: com.android.dex.MethodHandle.MethodHandleType;
					public static METHOD_HANDLE_TYPE_INVOKE_STATIC: com.android.dex.MethodHandle.MethodHandleType;
					public static METHOD_HANDLE_TYPE_INVOKE_INSTANCE: com.android.dex.MethodHandle.MethodHandleType;
					public static METHOD_HANDLE_TYPE_INVOKE_DIRECT: com.android.dex.MethodHandle.MethodHandleType;
					public static METHOD_HANDLE_TYPE_INVOKE_CONSTRUCTOR: com.android.dex.MethodHandle.MethodHandleType;
					public static METHOD_HANDLE_TYPE_INVOKE_INTERFACE: com.android.dex.MethodHandle.MethodHandleType;
					public static values(): com.android.dex.MethodHandle.MethodHandleType[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): com.android.dex.MethodHandle.MethodHandleType;
					public isField(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class MethodId extends java.lang.Comparable<com.android.dex.MethodId> {
				public static class: java.lang.Class<com.android.dex.MethodId>;
				public getDeclaringClassIndex(): number;
				public getNameIndex(): number;
				public constructor(dex: com.android.dex.Dex, declaringClassIndex: number, protoIndex: number, nameIndex: number);
				public toString(): string;
				public getProtoIndex(): number;
				public compareTo(other: com.android.dex.MethodId): number;
				public writeTo(out: com.android.dex.Dex.Section): void;
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class Mutf8 extends java.lang.Object {
				public static class: java.lang.Class<com.android.dex.Mutf8>;
				public static encode(dst: number[], offset: number, s: string): void;
				public static decode(_in_: com.android.dex.util.ByteInput, out: string[]): string;
				public static encode(s: string): number[];
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class ProtoId extends java.lang.Comparable<com.android.dex.ProtoId> {
				public static class: java.lang.Class<com.android.dex.ProtoId>;
				public compareTo(other: com.android.dex.ProtoId): number;
				public getReturnTypeIndex(): number;
				public getParametersOffset(): number;
				public getShortyIndex(): number;
				public constructor(dex: com.android.dex.Dex, shortyIndex: number, returnTypeIndex: number, parametersOffset: number);
				public toString(): string;
				public writeTo(out: com.android.dex.Dex.Section): void;
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class SizeOf extends java.lang.Object {
				public static class: java.lang.Class<com.android.dex.SizeOf>;
				public static UBYTE: number;
				public static USHORT: number;
				public static UINT: number;
				public static SIGNATURE: number;
				public static HEADER_ITEM: number;
				public static STRING_ID_ITEM: number;
				public static TYPE_ID_ITEM: number;
				public static TYPE_ITEM: number;
				public static PROTO_ID_ITEM: number;
				public static MEMBER_ID_ITEM: number;
				public static CLASS_DEF_ITEM: number;
				public static MAP_ITEM: number;
				public static TRY_ITEM: number;
				public static CALL_SITE_ID_ITEM: number;
				public static METHOD_HANDLE_ITEM: number;
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class TableOfContents extends java.lang.Object {
				public static class: java.lang.Class<com.android.dex.TableOfContents>;
				public header: com.android.dex.TableOfContents.Section;
				public stringIds: com.android.dex.TableOfContents.Section;
				public typeIds: com.android.dex.TableOfContents.Section;
				public protoIds: com.android.dex.TableOfContents.Section;
				public fieldIds: com.android.dex.TableOfContents.Section;
				public methodIds: com.android.dex.TableOfContents.Section;
				public classDefs: com.android.dex.TableOfContents.Section;
				public callSiteIds: com.android.dex.TableOfContents.Section;
				public methodHandles: com.android.dex.TableOfContents.Section;
				public mapList: com.android.dex.TableOfContents.Section;
				public typeLists: com.android.dex.TableOfContents.Section;
				public annotationSetRefLists: com.android.dex.TableOfContents.Section;
				public annotationSets: com.android.dex.TableOfContents.Section;
				public classDatas: com.android.dex.TableOfContents.Section;
				public codes: com.android.dex.TableOfContents.Section;
				public stringDatas: com.android.dex.TableOfContents.Section;
				public debugInfos: com.android.dex.TableOfContents.Section;
				public annotations: com.android.dex.TableOfContents.Section;
				public encodedArrays: com.android.dex.TableOfContents.Section;
				public annotationsDirectories: com.android.dex.TableOfContents.Section;
				public sections: com.android.dex.TableOfContents.Section[];
				public apiLevel: number;
				public checksum: number;
				public signature: number[];
				public fileSize: number;
				public linkSize: number;
				public linkOff: number;
				public dataSize: number;
				public dataOff: number;
				public writeHeader(out: com.android.dex.Dex.Section, api: number): void;
				public readFrom(dex: com.android.dex.Dex): void;
				public writeMap(out: com.android.dex.Dex.Section): void;
				public computeSizesFromOffsets(): void;
				public constructor();
			}
			export module TableOfContents {
				export class Section extends java.lang.Comparable<com.android.dex.TableOfContents.Section> {
					public static class: java.lang.Class<com.android.dex.TableOfContents.Section>;
					public type: number;
					public size: number;
					public off: number;
					public byteCount: number;
					public constructor(type: number);
					public toString(): string;
					public compareTo(section: com.android.dex.TableOfContents.Section): number;
					public exists(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export class TypeList extends java.lang.Comparable<com.android.dex.TypeList> {
				public static class: java.lang.Class<com.android.dex.TypeList>;
				public static EMPTY: com.android.dex.TypeList;
				public constructor(dex: com.android.dex.Dex, types: number[]);
				public compareTo(other: com.android.dex.TypeList): number;
				public getTypes(): number[];
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export module util {
				export class ByteArrayByteInput extends java.lang.Object implements com.android.dex.util.ByteInput {
					public static class: java.lang.Class<com.android.dex.util.ByteArrayByteInput>;
					public constructor(...bytes: number[]);
					public readByte(): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export module util {
				export class ByteInput extends java.lang.Object {
					public static class: java.lang.Class<com.android.dex.util.ByteInput>;
					/**
					 * Constructs a new instance of the com.android.dex.util.ByteInput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						readByte(): number;
					});
					public constructor();
					public readByte(): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export module util {
				export class ByteOutput extends java.lang.Object {
					public static class: java.lang.Class<com.android.dex.util.ByteOutput>;
					/**
					 * Constructs a new instance of the com.android.dex.util.ByteOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						writeByte(param0: number): void;
					});
					public constructor();
					public writeByte(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export module util {
				export class ExceptionWithContext extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.android.dex.util.ExceptionWithContext>;
					public addContext(str: string): void;
					public printStackTrace(s: java.io.PrintWriter): void;
					public printStackTrace(s: java.io.PrintStream): void;
					public printStackTrace(): void;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public printContext(out: java.io.PrintStream): void;
					public printContext(out: java.io.PrintWriter): void;
					public printStackTrace(out: java.io.PrintStream): void;
					public constructor();
					public static withContext(ex: java.lang.Throwable, str: string): com.android.dex.util.ExceptionWithContext;
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
					public getContext(): string;
					public printStackTrace(out: java.io.PrintWriter): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export module util {
				export class FileUtils extends java.lang.Object {
					public static class: java.lang.Class<com.android.dex.util.FileUtils>;
					public static readFile(file: java.io.File): number[];
					public static hasArchiveSuffix(fileName: string): boolean;
					public static readFile(fileName: string): number[];
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dex {
			export module util {
				export class Unsigned extends java.lang.Object {
					public static class: java.lang.Class<com.android.dex.util.Unsigned>;
					public static compare(uintA: number, uintB: number): number;
					public static compare(ushortA: number, ushortB: number): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export class Version extends java.lang.Object {
				public static class: java.lang.Class<com.android.dx.Version>;
				public static VERSION: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttAnnotationDefault extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttAnnotationDefault>;
						public static ATTRIBUTE_NAME: string;
						public constructor(value: com.android.dx.rop.cst.Constant, byteLength: number);
						public constructor(name: string);
						public byteLength(): number;
						public getValue(): com.android.dx.rop.cst.Constant;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttBootstrapMethods extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttBootstrapMethods>;
						public static ATTRIBUTE_NAME: string;
						public constructor(name: string);
						public byteLength(): number;
						public constructor(bootstrapMethods: com.android.dx.cf.code.BootstrapMethodsList);
						public getBootstrapMethods(): com.android.dx.cf.code.BootstrapMethodsList;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttCode extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttCode>;
						public static ATTRIBUTE_NAME: string;
						public constructor(name: string);
						public getMaxStack(): number;
						public byteLength(): number;
						public getCatches(): com.android.dx.cf.code.ByteCatchList;
						public getMaxLocals(): number;
						public constructor(maxStack: number, maxLocals: number, code: com.android.dx.cf.code.BytecodeArray, catches: com.android.dx.cf.code.ByteCatchList, attributes: com.android.dx.cf.iface.AttributeList);
						public getCode(): com.android.dx.cf.code.BytecodeArray;
						public getAttributes(): com.android.dx.cf.iface.AttributeList;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttConstantValue extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttConstantValue>;
						public static ATTRIBUTE_NAME: string;
						public getConstantValue(): com.android.dx.rop.cst.TypedConstant;
						public constructor(name: string);
						public byteLength(): number;
						public getName(): string;
						public constructor(constantValue: com.android.dx.rop.cst.TypedConstant);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttDeprecated extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttDeprecated>;
						public static ATTRIBUTE_NAME: string;
						public constructor();
						public constructor(name: string);
						public byteLength(): number;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttEnclosingMethod extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttEnclosingMethod>;
						public static ATTRIBUTE_NAME: string;
						public constructor(name: string);
						public constructor(type: com.android.dx.rop.cst.CstType, method: com.android.dx.rop.cst.CstNat);
						public byteLength(): number;
						public getEnclosingClass(): com.android.dx.rop.cst.CstType;
						public getMethod(): com.android.dx.rop.cst.CstNat;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttExceptions extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttExceptions>;
						public static ATTRIBUTE_NAME: string;
						public constructor(exceptions: com.android.dx.rop.type.TypeList);
						public constructor(name: string);
						public byteLength(): number;
						public getExceptions(): com.android.dx.rop.type.TypeList;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttInnerClasses extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttInnerClasses>;
						public static ATTRIBUTE_NAME: string;
						public constructor(name: string);
						public byteLength(): number;
						public constructor(innerClasses: com.android.dx.cf.attrib.InnerClassList);
						public getInnerClasses(): com.android.dx.cf.attrib.InnerClassList;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttLineNumberTable extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttLineNumberTable>;
						public static ATTRIBUTE_NAME: string;
						public constructor(name: string);
						public byteLength(): number;
						public constructor(lineNumbers: com.android.dx.cf.code.LineNumberList);
						public getName(): string;
						public getLineNumbers(): com.android.dx.cf.code.LineNumberList;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttLocalVariableTable extends com.android.dx.cf.attrib.BaseLocalVariables {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttLocalVariableTable>;
						public static ATTRIBUTE_NAME: string;
						public constructor(name: string, localVariables: com.android.dx.cf.code.LocalVariableList);
						public constructor(name: string);
						public byteLength(): number;
						public getName(): string;
						public constructor(localVariables: com.android.dx.cf.code.LocalVariableList);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttLocalVariableTypeTable extends com.android.dx.cf.attrib.BaseLocalVariables {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttLocalVariableTypeTable>;
						public static ATTRIBUTE_NAME: string;
						public constructor(name: string, localVariables: com.android.dx.cf.code.LocalVariableList);
						public constructor(name: string);
						public byteLength(): number;
						public getName(): string;
						public constructor(localVariables: com.android.dx.cf.code.LocalVariableList);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttRuntimeInvisibleAnnotations extends com.android.dx.cf.attrib.BaseAnnotations {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttRuntimeInvisibleAnnotations>;
						public static ATTRIBUTE_NAME: string;
						public constructor(attributeName: string, annotations: com.android.dx.rop.annotation.Annotations, byteLength: number);
						public constructor(name: string);
						public byteLength(): number;
						public constructor(annotations: com.android.dx.rop.annotation.Annotations, byteLength: number);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttRuntimeInvisibleParameterAnnotations extends com.android.dx.cf.attrib.BaseParameterAnnotations {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttRuntimeInvisibleParameterAnnotations>;
						public static ATTRIBUTE_NAME: string;
						public constructor(parameterAnnotations: com.android.dx.rop.annotation.AnnotationsList, byteLength: number);
						public constructor(name: string);
						public byteLength(): number;
						public constructor(attributeName: string, parameterAnnotations: com.android.dx.rop.annotation.AnnotationsList, byteLength: number);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttRuntimeVisibleAnnotations extends com.android.dx.cf.attrib.BaseAnnotations {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttRuntimeVisibleAnnotations>;
						public static ATTRIBUTE_NAME: string;
						public constructor(attributeName: string, annotations: com.android.dx.rop.annotation.Annotations, byteLength: number);
						public constructor(name: string);
						public byteLength(): number;
						public constructor(annotations: com.android.dx.rop.annotation.Annotations, byteLength: number);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttRuntimeVisibleParameterAnnotations extends com.android.dx.cf.attrib.BaseParameterAnnotations {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttRuntimeVisibleParameterAnnotations>;
						public static ATTRIBUTE_NAME: string;
						public constructor(name: string);
						public byteLength(): number;
						public constructor(attributeName: string, parameterAnnotations: com.android.dx.rop.annotation.AnnotationsList, byteLength: number);
						public constructor(annotations: com.android.dx.rop.annotation.AnnotationsList, byteLength: number);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttSignature extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttSignature>;
						public static ATTRIBUTE_NAME: string;
						public getSignature(): com.android.dx.rop.cst.CstString;
						public constructor(name: string);
						public byteLength(): number;
						public getName(): string;
						public constructor(signature: com.android.dx.rop.cst.CstString);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttSourceDebugExtension extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttSourceDebugExtension>;
						public static ATTRIBUTE_NAME: string;
						public constructor(name: string);
						public byteLength(): number;
						public constructor(smapString: com.android.dx.rop.cst.CstString);
						public getName(): string;
						public getSmapString(): com.android.dx.rop.cst.CstString;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttSourceFile extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttSourceFile>;
						public static ATTRIBUTE_NAME: string;
						public constructor(sourceFile: com.android.dx.rop.cst.CstString);
						public getSourceFile(): com.android.dx.rop.cst.CstString;
						public constructor(name: string);
						public byteLength(): number;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class AttSynthetic extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.AttSynthetic>;
						public static ATTRIBUTE_NAME: string;
						public constructor();
						public constructor(name: string);
						public byteLength(): number;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export abstract class BaseAnnotations extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.BaseAnnotations>;
						public constructor(attributeName: string, annotations: com.android.dx.rop.annotation.Annotations, byteLength: number);
						public constructor(name: string);
						public byteLength(): number;
						public getAnnotations(): com.android.dx.rop.annotation.Annotations;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export abstract class BaseAttribute extends java.lang.Object implements com.android.dx.cf.iface.Attribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.BaseAttribute>;
						public constructor(name: string);
						public byteLength(): number;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export abstract class BaseLocalVariables extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.BaseLocalVariables>;
						public constructor(name: string, localVariables: com.android.dx.cf.code.LocalVariableList);
						public constructor(name: string);
						public byteLength(): number;
						public getLocalVariables(): com.android.dx.cf.code.LocalVariableList;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export abstract class BaseParameterAnnotations extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.BaseParameterAnnotations>;
						public constructor(name: string);
						public byteLength(): number;
						public constructor(attributeName: string, parameterAnnotations: com.android.dx.rop.annotation.AnnotationsList, byteLength: number);
						public getParameterAnnotations(): com.android.dx.rop.annotation.AnnotationsList;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class InnerClassList extends com.android.dx.util.FixedSizeList {
						public static class: java.lang.Class<com.android.dx.cf.attrib.InnerClassList>;
						public constructor();
						public toHuman(): string;
						public constructor(count: number);
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public constructor(size: number);
						public get(n: number): com.android.dx.cf.attrib.InnerClassList.Item;
						public set(n: number, innerClass: com.android.dx.rop.cst.CstType, outerClass: com.android.dx.rop.cst.CstType, innerName: com.android.dx.rop.cst.CstString, accessFlags: number): void;
						public constructor(mutable: boolean);
					}
					export module InnerClassList {
						export class Item extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.attrib.InnerClassList.Item>;
							public getAccessFlags(): number;
							public getInnerName(): com.android.dx.rop.cst.CstString;
							public getInnerClass(): com.android.dx.rop.cst.CstType;
							public constructor(innerClass: com.android.dx.rop.cst.CstType, outerClass: com.android.dx.rop.cst.CstType, innerName: com.android.dx.rop.cst.CstString, accessFlags: number);
							public getOuterClass(): com.android.dx.rop.cst.CstType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module attrib {
					export class RawAttribute extends com.android.dx.cf.attrib.BaseAttribute {
						public static class: java.lang.Class<com.android.dx.cf.attrib.RawAttribute>;
						public getPool(): com.android.dx.rop.cst.ConstantPool;
						public constructor(name: string, data: com.android.dx.util.ByteArray, pool: com.android.dx.rop.cst.ConstantPool);
						public constructor(name: string);
						public byteLength(): number;
						public getData(): com.android.dx.util.ByteArray;
						public constructor(name: string, data: com.android.dx.util.ByteArray, offset: number, length: number, pool: com.android.dx.rop.cst.ConstantPool);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export abstract class BaseMachine extends java.lang.Object implements com.android.dx.cf.code.Machine {
						public static class: java.lang.Class<com.android.dx.cf.code.BaseMachine>;
						public resultWidth(): number;
						public popArgs(frame: com.android.dx.cf.code.Frame, prototype: com.android.dx.rop.type.Prototype): void;
						public auxTargetArg(target: number): void;
						public argWidth(): number;
						public run(param0: com.android.dx.cf.code.Frame, param1: number, param2: number): void;
						public localInfo(local: boolean): void;
						public auxCstArg(cst: com.android.dx.rop.cst.Constant): void;
						public setResult(result: com.android.dx.rop.type.TypeBearer): void;
						public getAuxType(): com.android.dx.rop.type.Type;
						public getLocalIndex(): number;
						public getLocalInfo(): boolean;
						public getInitValues(): java.util.ArrayList<com.android.dx.rop.cst.Constant>;
						public popArgs(frame: com.android.dx.cf.code.Frame, type1: com.android.dx.rop.type.Type, type2: com.android.dx.rop.type.Type): void;
						public localTarget(idx: number, type: com.android.dx.rop.type.Type, local: com.android.dx.rop.code.LocalItem): void;
						public addResult(result: com.android.dx.rop.type.TypeBearer): void;
						public auxInitValues(param0: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: number): void;
						public resultCount(): number;
						public localArg(param0: com.android.dx.cf.code.Frame, param1: number): void;
						public localInfo(param0: boolean): void;
						public clearArgs(): void;
						public getPrototype(): com.android.dx.rop.type.Prototype;
						public popArgs(frame: com.android.dx.cf.code.Frame, type: com.android.dx.rop.type.Type): void;
						public getAuxCases(): com.android.dx.cf.code.SwitchList;
						public getAuxCst(): com.android.dx.rop.cst.Constant;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Prototype): void;
						public auxType(type: com.android.dx.rop.type.Type): void;
						public constructor(prototype: com.android.dx.rop.type.Prototype);
						public auxType(param0: com.android.dx.rop.type.Type): void;
						public localArg(frame: com.android.dx.cf.code.Frame, idx: number): void;
						public auxIntArg(value: number): void;
						public auxIntArg(param0: number): void;
						public getLocalTarget(isMove: boolean): com.android.dx.rop.code.RegisterSpec;
						public popArgs(frame: com.android.dx.cf.code.Frame, count: number): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.type.Type): void;
						public auxTargetArg(param0: number): void;
						public arg(n: number): com.android.dx.rop.type.TypeBearer;
						public auxSwitchArg(param0: com.android.dx.cf.code.SwitchList): void;
						public result(n: number): com.android.dx.rop.type.TypeBearer;
						public storeResults(frame: com.android.dx.cf.code.Frame): void;
						public argCount(): number;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type): void;
						public static throwLocalMismatch(found: com.android.dx.rop.type.TypeBearer, local: com.android.dx.rop.type.TypeBearer): void;
						public auxSwitchArg(cases: com.android.dx.cf.code.SwitchList): void;
						public popArgs(frame: com.android.dx.cf.code.Frame, type1: com.android.dx.rop.type.Type, type2: com.android.dx.rop.type.Type, type3: com.android.dx.rop.type.Type): void;
						public getAuxTarget(): number;
						public auxCstArg(param0: com.android.dx.rop.cst.Constant): void;
						public getAuxInt(): number;
						public auxInitValues(initValues: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.type.Type, param3: com.android.dx.rop.type.Type): void;
						public clearResult(): void;
						public localTarget(param0: number, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.code.LocalItem): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class BasicBlocker extends java.lang.Object implements com.android.dx.cf.code.BytecodeArray.Visitor {
						public static class: java.lang.Class<com.android.dx.cf.code.BasicBlocker>;
						public visitBranch(opcode: number, offset: number, length: number, target: number): void;
						public visitLocal(param0: number, param1: number, param2: number, param3: number, param4: com.android.dx.rop.type.Type, param5: number): void;
						public setPreviousOffset(param0: number): void;
						public visitConstant(opcode: number, offset: number, length: number, cst: com.android.dx.rop.cst.Constant, value: number): void;
						public visitNoArgs(opcode: number, offset: number, length: number, type: com.android.dx.rop.type.Type): void;
						public visitSwitch(param0: number, param1: number, param2: number, param3: com.android.dx.cf.code.SwitchList, param4: number): void;
						public visitNewarray(offset: number, length: number, type: com.android.dx.rop.cst.CstType, intVals: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						public setPreviousOffset(offset: number): void;
						public visitInvalid(param0: number, param1: number, param2: number): void;
						public visitNewarray(param0: number, param1: number, param2: com.android.dx.rop.cst.CstType, param3: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						public visitLocal(opcode: number, offset: number, length: number, idx: number, type: com.android.dx.rop.type.Type, value: number): void;
						public visitSwitch(opcode: number, offset: number, length: number, cases: com.android.dx.cf.code.SwitchList, padding: number): void;
						public visitNoArgs(param0: number, param1: number, param2: number, param3: com.android.dx.rop.type.Type): void;
						public visitConstant(param0: number, param1: number, param2: number, param3: com.android.dx.rop.cst.Constant, param4: number): void;
						public static identifyBlocks(method: com.android.dx.cf.code.ConcreteMethod): com.android.dx.cf.code.ByteBlockList;
						public getPreviousOffset(): number;
						public visitBranch(param0: number, param1: number, param2: number, param3: number): void;
						public visitInvalid(opcode: number, offset: number, length: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class BootstrapMethodArgumentsList extends com.android.dx.util.FixedSizeList {
						public static class: java.lang.Class<com.android.dx.cf.code.BootstrapMethodArgumentsList>;
						public constructor();
						public set(n: number, cst: com.android.dx.rop.cst.Constant): void;
						public toHuman(): string;
						public constructor(count: number);
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public constructor(size: number);
						public get(n: number): com.android.dx.rop.cst.Constant;
						public constructor(mutable: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class BootstrapMethodsList extends com.android.dx.util.FixedSizeList {
						public static class: java.lang.Class<com.android.dx.cf.code.BootstrapMethodsList>;
						public static EMPTY: com.android.dx.cf.code.BootstrapMethodsList;
						public constructor();
						public set(n: number, item: com.android.dx.cf.code.BootstrapMethodsList.Item): void;
						public toHuman(): string;
						public constructor(count: number);
						public static concat(list1: com.android.dx.cf.code.BootstrapMethodsList, list2: com.android.dx.cf.code.BootstrapMethodsList): com.android.dx.cf.code.BootstrapMethodsList;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public constructor(size: number);
						public set(n: number, declaringClass: com.android.dx.rop.cst.CstType, bootstrapMethodHandle: com.android.dx.rop.cst.CstMethodHandle, arguments: com.android.dx.cf.code.BootstrapMethodArgumentsList): void;
						public get(n: number): com.android.dx.cf.code.BootstrapMethodsList.Item;
						public constructor(mutable: boolean);
					}
					export module BootstrapMethodsList {
						export class Item extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.code.BootstrapMethodsList.Item>;
							public getBootstrapMethodArguments(): com.android.dx.cf.code.BootstrapMethodArgumentsList;
							public getDeclaringClass(): com.android.dx.rop.cst.CstType;
							public constructor(declaringClass: com.android.dx.rop.cst.CstType, bootstrapMethodHandle: com.android.dx.rop.cst.CstMethodHandle, bootstrapMethodArguments: com.android.dx.cf.code.BootstrapMethodArgumentsList);
							public getBootstrapMethodHandle(): com.android.dx.rop.cst.CstMethodHandle;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class ByteBlock extends java.lang.Object implements com.android.dx.util.LabeledItem {
						public static class: java.lang.Class<com.android.dx.cf.code.ByteBlock>;
						public constructor(label: number, start: number, end: number, successors: com.android.dx.util.IntList, catches: com.android.dx.cf.code.ByteCatchList);
						public getLabel(): number;
						public getSuccessors(): com.android.dx.util.IntList;
						public getCatches(): com.android.dx.cf.code.ByteCatchList;
						public getStart(): number;
						public toString(): string;
						public getEnd(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class ByteBlockList extends com.android.dx.util.LabeledList {
						public static class: java.lang.Class<com.android.dx.cf.code.ByteBlockList>;
						public constructor();
						public toHuman(): string;
						public get(n: number): com.android.dx.cf.code.ByteBlock;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public constructor(size: number);
						public labelToBlock(label: number): com.android.dx.cf.code.ByteBlock;
						public set(n: number, item: com.android.dx.util.LabeledItem): void;
						public constructor(old: com.android.dx.util.LabeledList);
						public set(n: number, bb: com.android.dx.cf.code.ByteBlock): void;
						public constructor(mutable: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class ByteCatchList extends com.android.dx.util.FixedSizeList {
						public static class: java.lang.Class<com.android.dx.cf.code.ByteCatchList>;
						public static EMPTY: com.android.dx.cf.code.ByteCatchList;
						public set(n: number, item: com.android.dx.cf.code.ByteCatchList.Item): void;
						public constructor();
						public constructor(count: number);
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public toTargetList(noException: number): com.android.dx.util.IntList;
						public set(n: number, startPc: number, endPc: number, handlerPc: number, exceptionClass: com.android.dx.rop.cst.CstType): void;
						public toRopCatchList(): com.android.dx.rop.type.TypeList;
						public constructor(mutable: boolean);
						public toHuman(): string;
						public byteLength(): number;
						public constructor(size: number);
						public get(n: number): com.android.dx.cf.code.ByteCatchList.Item;
						public listFor(pc: number): com.android.dx.cf.code.ByteCatchList;
					}
					export module ByteCatchList {
						export class Item extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.code.ByteCatchList.Item>;
							public constructor(startPc: number, endPc: number, handlerPc: number, exceptionClass: com.android.dx.rop.cst.CstType);
							public getExceptionClass(): com.android.dx.rop.cst.CstType;
							public getStartPc(): number;
							public getEndPc(): number;
							public getHandlerPc(): number;
							public covers(pc: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class ByteOps extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.code.ByteOps>;
						public static NOP: number;
						public static ACONST_NULL: number;
						public static ICONST_M1: number;
						public static ICONST_0: number;
						public static ICONST_1: number;
						public static ICONST_2: number;
						public static ICONST_3: number;
						public static ICONST_4: number;
						public static ICONST_5: number;
						public static LCONST_0: number;
						public static LCONST_1: number;
						public static FCONST_0: number;
						public static FCONST_1: number;
						public static FCONST_2: number;
						public static DCONST_0: number;
						public static DCONST_1: number;
						public static BIPUSH: number;
						public static SIPUSH: number;
						public static LDC: number;
						public static LDC_W: number;
						public static LDC2_W: number;
						public static ILOAD: number;
						public static LLOAD: number;
						public static FLOAD: number;
						public static DLOAD: number;
						public static ALOAD: number;
						public static ILOAD_0: number;
						public static ILOAD_1: number;
						public static ILOAD_2: number;
						public static ILOAD_3: number;
						public static LLOAD_0: number;
						public static LLOAD_1: number;
						public static LLOAD_2: number;
						public static LLOAD_3: number;
						public static FLOAD_0: number;
						public static FLOAD_1: number;
						public static FLOAD_2: number;
						public static FLOAD_3: number;
						public static DLOAD_0: number;
						public static DLOAD_1: number;
						public static DLOAD_2: number;
						public static DLOAD_3: number;
						public static ALOAD_0: number;
						public static ALOAD_1: number;
						public static ALOAD_2: number;
						public static ALOAD_3: number;
						public static IALOAD: number;
						public static LALOAD: number;
						public static FALOAD: number;
						public static DALOAD: number;
						public static AALOAD: number;
						public static BALOAD: number;
						public static CALOAD: number;
						public static SALOAD: number;
						public static ISTORE: number;
						public static LSTORE: number;
						public static FSTORE: number;
						public static DSTORE: number;
						public static ASTORE: number;
						public static ISTORE_0: number;
						public static ISTORE_1: number;
						public static ISTORE_2: number;
						public static ISTORE_3: number;
						public static LSTORE_0: number;
						public static LSTORE_1: number;
						public static LSTORE_2: number;
						public static LSTORE_3: number;
						public static FSTORE_0: number;
						public static FSTORE_1: number;
						public static FSTORE_2: number;
						public static FSTORE_3: number;
						public static DSTORE_0: number;
						public static DSTORE_1: number;
						public static DSTORE_2: number;
						public static DSTORE_3: number;
						public static ASTORE_0: number;
						public static ASTORE_1: number;
						public static ASTORE_2: number;
						public static ASTORE_3: number;
						public static IASTORE: number;
						public static LASTORE: number;
						public static FASTORE: number;
						public static DASTORE: number;
						public static AASTORE: number;
						public static BASTORE: number;
						public static CASTORE: number;
						public static SASTORE: number;
						public static POP: number;
						public static POP2: number;
						public static DUP: number;
						public static DUP_X1: number;
						public static DUP_X2: number;
						public static DUP2: number;
						public static DUP2_X1: number;
						public static DUP2_X2: number;
						public static SWAP: number;
						public static IADD: number;
						public static LADD: number;
						public static FADD: number;
						public static DADD: number;
						public static ISUB: number;
						public static LSUB: number;
						public static FSUB: number;
						public static DSUB: number;
						public static IMUL: number;
						public static LMUL: number;
						public static FMUL: number;
						public static DMUL: number;
						public static IDIV: number;
						public static LDIV: number;
						public static FDIV: number;
						public static DDIV: number;
						public static IREM: number;
						public static LREM: number;
						public static FREM: number;
						public static DREM: number;
						public static INEG: number;
						public static LNEG: number;
						public static FNEG: number;
						public static DNEG: number;
						public static ISHL: number;
						public static LSHL: number;
						public static ISHR: number;
						public static LSHR: number;
						public static IUSHR: number;
						public static LUSHR: number;
						public static IAND: number;
						public static LAND: number;
						public static IOR: number;
						public static LOR: number;
						public static IXOR: number;
						public static LXOR: number;
						public static IINC: number;
						public static I2L: number;
						public static I2F: number;
						public static I2D: number;
						public static L2I: number;
						public static L2F: number;
						public static L2D: number;
						public static F2I: number;
						public static F2L: number;
						public static F2D: number;
						public static D2I: number;
						public static D2L: number;
						public static D2F: number;
						public static I2B: number;
						public static I2C: number;
						public static I2S: number;
						public static LCMP: number;
						public static FCMPL: number;
						public static FCMPG: number;
						public static DCMPL: number;
						public static DCMPG: number;
						public static IFEQ: number;
						public static IFNE: number;
						public static IFLT: number;
						public static IFGE: number;
						public static IFGT: number;
						public static IFLE: number;
						public static IF_ICMPEQ: number;
						public static IF_ICMPNE: number;
						public static IF_ICMPLT: number;
						public static IF_ICMPGE: number;
						public static IF_ICMPGT: number;
						public static IF_ICMPLE: number;
						public static IF_ACMPEQ: number;
						public static IF_ACMPNE: number;
						public static GOTO: number;
						public static JSR: number;
						public static RET: number;
						public static TABLESWITCH: number;
						public static LOOKUPSWITCH: number;
						public static IRETURN: number;
						public static LRETURN: number;
						public static FRETURN: number;
						public static DRETURN: number;
						public static ARETURN: number;
						public static RETURN: number;
						public static GETSTATIC: number;
						public static PUTSTATIC: number;
						public static GETFIELD: number;
						public static PUTFIELD: number;
						public static INVOKEVIRTUAL: number;
						public static INVOKESPECIAL: number;
						public static INVOKESTATIC: number;
						public static INVOKEINTERFACE: number;
						public static INVOKEDYNAMIC: number;
						public static NEW: number;
						public static NEWARRAY: number;
						public static ANEWARRAY: number;
						public static ARRAYLENGTH: number;
						public static ATHROW: number;
						public static CHECKCAST: number;
						public static INSTANCEOF: number;
						public static MONITORENTER: number;
						public static MONITOREXIT: number;
						public static WIDE: number;
						public static MULTIANEWARRAY: number;
						public static IFNULL: number;
						public static IFNONNULL: number;
						public static GOTO_W: number;
						public static JSR_W: number;
						public static NEWARRAY_BOOLEAN: number;
						public static NEWARRAY_CHAR: number;
						public static NEWARRAY_FLOAT: number;
						public static NEWARRAY_DOUBLE: number;
						public static NEWARRAY_BYTE: number;
						public static NEWARRAY_SHORT: number;
						public static NEWARRAY_INT: number;
						public static NEWARRAY_LONG: number;
						public static FMT_INVALID: number;
						public static FMT_NO_ARGS: number;
						public static FMT_NO_ARGS_LOCALS_1: number;
						public static FMT_NO_ARGS_LOCALS_2: number;
						public static FMT_NO_ARGS_LOCALS_3: number;
						public static FMT_NO_ARGS_LOCALS_4: number;
						public static FMT_NO_ARGS_LOCALS_5: number;
						public static FMT_BRANCH: number;
						public static FMT_WIDE_BRANCH: number;
						public static FMT_CPI: number;
						public static FMT_LOCAL_1: number;
						public static FMT_LOCAL_2: number;
						public static FMT_LITERAL_BYTE: number;
						public static FMT_INVOKEINTERFACE: number;
						public static FMT_LDC: number;
						public static FMT_SIPUSH: number;
						public static FMT_TABLESWITCH: number;
						public static FMT_LOOKUPSWITCH: number;
						public static FMT_MULTIANEWARRAY: number;
						public static FMT_WIDE: number;
						public static FMT_MASK: number;
						public static CPOK_Integer: number;
						public static CPOK_Float: number;
						public static CPOK_Long: number;
						public static CPOK_Double: number;
						public static CPOK_Class: number;
						public static CPOK_String: number;
						public static CPOK_Fieldref: number;
						public static CPOK_Methodref: number;
						public static CPOK_InterfaceMethodref: number;
						public static opInfo(opcode: number): number;
						public static opName(opcode: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class BytecodeArray extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.code.BytecodeArray>;
						public static EMPTY_VISITOR: com.android.dx.cf.code.BytecodeArray.Visitor;
						public getInstructionOffsets(): number[];
						public constructor(bytes: com.android.dx.util.ByteArray, pool: com.android.dx.rop.cst.ConstantPool);
						public byteLength(): number;
						public getBytes(): com.android.dx.util.ByteArray;
						public forEach(visitor: com.android.dx.cf.code.BytecodeArray.Visitor): void;
						public size(): number;
						public processWorkSet(workSet: number[], visitor: com.android.dx.cf.code.BytecodeArray.Visitor): void;
						public parseInstruction(offset: number, visitor: com.android.dx.cf.code.BytecodeArray.Visitor): number;
					}
					export module BytecodeArray {
						export class BaseVisitor extends java.lang.Object implements com.android.dx.cf.code.BytecodeArray.Visitor {
							public static class: java.lang.Class<com.android.dx.cf.code.BytecodeArray.BaseVisitor>;
							public visitSwitch(param0: number, param1: number, param2: number, param3: com.android.dx.cf.code.SwitchList, param4: number): void;
							public setPreviousOffset(param0: number): void;
							public visitLocal(param0: number, param1: number, param2: number, param3: number, param4: com.android.dx.rop.type.Type, param5: number): void;
							public visitInvalid(opcode: number, offset: number, length: number): void;
							public visitConstant(opcode: number, offset: number, length: number, cst: com.android.dx.rop.cst.Constant, value: number): void;
							public visitNoArgs(opcode: number, offset: number, length: number, type: com.android.dx.rop.type.Type): void;
							public visitBranch(param0: number, param1: number, param2: number, param3: number): void;
							public visitSwitch(opcode: number, offset: number, length: number, cases: com.android.dx.cf.code.SwitchList, padding: number): void;
							public visitBranch(opcode: number, offset: number, length: number, target: number): void;
							public setPreviousOffset(offset: number): void;
							public getPreviousOffset(): number;
							public visitNewarray(offset: number, length: number, type: com.android.dx.rop.cst.CstType, initValues: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
							public visitNoArgs(param0: number, param1: number, param2: number, param3: com.android.dx.rop.type.Type): void;
							public visitLocal(opcode: number, offset: number, length: number, idx: number, type: com.android.dx.rop.type.Type, value: number): void;
							public visitInvalid(param0: number, param1: number, param2: number): void;
							public visitConstant(param0: number, param1: number, param2: number, param3: com.android.dx.rop.cst.Constant, param4: number): void;
							public visitNewarray(param0: number, param1: number, param2: com.android.dx.rop.cst.CstType, param3: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						}
						export class ConstantParserVisitor extends com.android.dx.cf.code.BytecodeArray.BaseVisitor {
							public static class: java.lang.Class<com.android.dx.cf.code.BytecodeArray.ConstantParserVisitor>;
							public visitSwitch(param0: number, param1: number, param2: number, param3: com.android.dx.cf.code.SwitchList, param4: number): void;
							public setPreviousOffset(param0: number): void;
							public visitLocal(param0: number, param1: number, param2: number, param3: number, param4: com.android.dx.rop.type.Type, param5: number): void;
							public visitInvalid(opcode: number, offset: number, length: number): void;
							public visitConstant(opcode: number, offset: number, length: number, cst: com.android.dx.rop.cst.Constant, value: number): void;
							public visitNoArgs(opcode: number, offset: number, length: number, type: com.android.dx.rop.type.Type): void;
							public visitNewarray(offset: number, length: number, type: com.android.dx.rop.cst.CstType, initVals: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
							public visitBranch(param0: number, param1: number, param2: number, param3: number): void;
							public visitSwitch(opcode: number, offset: number, length: number, cases: com.android.dx.cf.code.SwitchList, padding: number): void;
							public visitBranch(opcode: number, offset: number, length: number, target: number): void;
							public setPreviousOffset(offset: number): void;
							public getPreviousOffset(): number;
							public visitNewarray(offset: number, length: number, type: com.android.dx.rop.cst.CstType, initValues: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
							public visitNoArgs(param0: number, param1: number, param2: number, param3: com.android.dx.rop.type.Type): void;
							public visitLocal(opcode: number, offset: number, length: number, idx: number, type: com.android.dx.rop.type.Type, value: number): void;
							public visitInvalid(param0: number, param1: number, param2: number): void;
							public visitConstant(param0: number, param1: number, param2: number, param3: com.android.dx.rop.cst.Constant, param4: number): void;
							public visitNewarray(param0: number, param1: number, param2: com.android.dx.rop.cst.CstType, param3: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						}
						export class Visitor extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.code.BytecodeArray.Visitor>;
							/**
							 * Constructs a new instance of the com.android.dx.cf.code.BytecodeArray$Visitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								visitInvalid(param0: number, param1: number, param2: number): void;
								visitNoArgs(param0: number, param1: number, param2: number, param3: com.android.dx.rop.type.Type): void;
								visitLocal(param0: number, param1: number, param2: number, param3: number, param4: com.android.dx.rop.type.Type, param5: number): void;
								visitConstant(param0: number, param1: number, param2: number, param3: com.android.dx.rop.cst.Constant, param4: number): void;
								visitBranch(param0: number, param1: number, param2: number, param3: number): void;
								visitSwitch(param0: number, param1: number, param2: number, param3: com.android.dx.cf.code.SwitchList, param4: number): void;
								visitNewarray(param0: number, param1: number, param2: com.android.dx.rop.cst.CstType, param3: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
								setPreviousOffset(param0: number): void;
								getPreviousOffset(): number;
							});
							public constructor();
							public visitSwitch(param0: number, param1: number, param2: number, param3: com.android.dx.cf.code.SwitchList, param4: number): void;
							public setPreviousOffset(param0: number): void;
							public visitBranch(param0: number, param1: number, param2: number, param3: number): void;
							public visitLocal(param0: number, param1: number, param2: number, param3: number, param4: com.android.dx.rop.type.Type, param5: number): void;
							public getPreviousOffset(): number;
							public visitNoArgs(param0: number, param1: number, param2: number, param3: com.android.dx.rop.type.Type): void;
							public visitInvalid(param0: number, param1: number, param2: number): void;
							public visitConstant(param0: number, param1: number, param2: number, param3: com.android.dx.rop.cst.Constant, param4: number): void;
							public visitNewarray(param0: number, param1: number, param2: com.android.dx.rop.cst.CstType, param3: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class ConcreteMethod extends java.lang.Object implements com.android.dx.cf.iface.Method {
						public static class: java.lang.Class<com.android.dx.cf.code.ConcreteMethod>;
						public getEffectiveDescriptor(): com.android.dx.rop.type.Prototype;
						public getMaxStack(): number;
						public constructor(method: com.android.dx.cf.iface.Method, cf: com.android.dx.cf.iface.ClassFile, keepLines: boolean, keepLocals: boolean);
						public getLocalVariables(): com.android.dx.cf.code.LocalVariableList;
						public constructor(method: com.android.dx.cf.iface.Method, sourceFile: com.android.dx.rop.cst.CstString, keepLines: boolean, keepLocals: boolean);
						public getCode(): com.android.dx.cf.code.BytecodeArray;
						public getAttributes(): com.android.dx.cf.iface.AttributeList;
						public getLineNumbers(): com.android.dx.cf.code.LineNumberList;
						public getAccessFlags(): number;
						public getDefiningClass(): com.android.dx.rop.cst.CstType;
						public getNat(): com.android.dx.rop.cst.CstNat;
						public getCatches(): com.android.dx.cf.code.ByteCatchList;
						public getMaxLocals(): number;
						public makeSourcePosistion(offset: number): com.android.dx.rop.code.SourcePosition;
						public getName(): com.android.dx.rop.cst.CstString;
						public getDescriptor(): com.android.dx.rop.cst.CstString;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class ExecutionStack extends com.android.dx.util.MutabilityControl {
						public static class: java.lang.Class<com.android.dx.cf.code.ExecutionStack>;
						public pop(): com.android.dx.rop.type.TypeBearer;
						public constructor();
						public copy(): com.android.dx.cf.code.ExecutionStack;
						public getMaxStack(): number;
						public merge(other: com.android.dx.cf.code.ExecutionStack): com.android.dx.cf.code.ExecutionStack;
						public annotate(ex: com.android.dex.util.ExceptionWithContext): void;
						public makeInitialized(type: com.android.dx.rop.type.Type): void;
						public peekType(n: number): com.android.dx.rop.type.Type;
						public constructor(mutable: boolean);
						public push(type: com.android.dx.rop.type.TypeBearer): void;
						public constructor(maxStack: number);
						public peek(n: number): com.android.dx.rop.type.TypeBearer;
						public change(n: number, type: com.android.dx.rop.type.TypeBearer): void;
						public clear(): void;
						public peekLocal(n: number): boolean;
						public size(): number;
						public setLocal(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class Frame extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.code.Frame>;
						public mergeWithSubroutineCaller(other: com.android.dx.cf.code.Frame, subLabel: number, predLabel: number): com.android.dx.cf.code.Frame;
						public getSubroutines(): com.android.dx.util.IntList;
						public subFrameForLabel(startLabel: number, subLabel: number): com.android.dx.cf.code.Frame;
						public makeExceptionHandlerStartFrame(exceptionClass: com.android.dx.rop.cst.CstType): com.android.dx.cf.code.Frame;
						public mergeWith(other: com.android.dx.cf.code.Frame): com.android.dx.cf.code.Frame;
						public getStack(): com.android.dx.cf.code.ExecutionStack;
						public annotate(ex: com.android.dex.util.ExceptionWithContext): void;
						public makeInitialized(type: com.android.dx.rop.type.Type): void;
						public initializeWithParameters(params: com.android.dx.rop.type.StdTypeList): void;
						public constructor(maxLocals: number, maxStack: number);
						public setImmutable(): void;
						public makeNewSubroutineStartFrame(subLabel: number, callerLabel: number): com.android.dx.cf.code.Frame;
						public getLocals(): com.android.dx.cf.code.LocalsArray;
						public copy(): com.android.dx.cf.code.Frame;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class LineNumberList extends com.android.dx.util.FixedSizeList {
						public static class: java.lang.Class<com.android.dx.cf.code.LineNumberList>;
						public static EMPTY: com.android.dx.cf.code.LineNumberList;
						public constructor();
						public set(n: number, startPc: number, lineNumber: number): void;
						public toHuman(): string;
						public set(n: number, item: com.android.dx.cf.code.LineNumberList.Item): void;
						public constructor(count: number);
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public pcToLine(pc: number): number;
						public constructor(size: number);
						public get(n: number): com.android.dx.cf.code.LineNumberList.Item;
						public static concat(list1: com.android.dx.cf.code.LineNumberList, list2: com.android.dx.cf.code.LineNumberList): com.android.dx.cf.code.LineNumberList;
						public constructor(mutable: boolean);
					}
					export module LineNumberList {
						export class Item extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.code.LineNumberList.Item>;
							public constructor(startPc: number, lineNumber: number);
							public getLineNumber(): number;
							public getStartPc(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class LocalVariableList extends com.android.dx.util.FixedSizeList {
						public static class: java.lang.Class<com.android.dx.cf.code.LocalVariableList>;
						public static EMPTY: com.android.dx.cf.code.LocalVariableList;
						public itemToLocal(item: com.android.dx.cf.code.LocalVariableList.Item): com.android.dx.cf.code.LocalVariableList.Item;
						public constructor();
						public get(n: number): com.android.dx.cf.code.LocalVariableList.Item;
						public constructor(count: number);
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public static concat(list1: com.android.dx.cf.code.LocalVariableList, list2: com.android.dx.cf.code.LocalVariableList): com.android.dx.cf.code.LocalVariableList;
						public set(n: number, startPc: number, length: number, name: com.android.dx.rop.cst.CstString, descriptor: com.android.dx.rop.cst.CstString, signature: com.android.dx.rop.cst.CstString, index: number): void;
						public constructor(mutable: boolean);
						public set(n: number, item: com.android.dx.cf.code.LocalVariableList.Item): void;
						public toHuman(): string;
						public constructor(size: number);
						public pcAndIndexToLocal(pc: number, index: number): com.android.dx.cf.code.LocalVariableList.Item;
						public static mergeDescriptorsAndSignatures(descriptorList: com.android.dx.cf.code.LocalVariableList, signatureList: com.android.dx.cf.code.LocalVariableList): com.android.dx.cf.code.LocalVariableList;
					}
					export module LocalVariableList {
						export class Item extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.code.LocalVariableList.Item>;
							public getLength(): number;
							public matchesPcAndIndex(pc: number, index: number): boolean;
							public matchesAllButType(other: com.android.dx.cf.code.LocalVariableList.Item): boolean;
							public constructor(startPc: number, length: number, name: com.android.dx.rop.cst.CstString, descriptor: com.android.dx.rop.cst.CstString, signature: com.android.dx.rop.cst.CstString, index: number);
							public getIndex(): number;
							public getDescriptor(): com.android.dx.rop.cst.CstString;
							public getStartPc(): number;
							public withSignature(newSignature: com.android.dx.rop.cst.CstString): com.android.dx.cf.code.LocalVariableList.Item;
							public getLocalItem(): com.android.dx.rop.code.LocalItem;
							public getType(): com.android.dx.rop.type.Type;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export abstract class LocalsArray extends com.android.dx.util.MutabilityControl implements com.android.dx.util.ToHuman {
						public static class: java.lang.Class<com.android.dx.cf.code.LocalsArray>;
						public getOrNull(param0: number): com.android.dx.rop.type.TypeBearer;
						public constructor();
						public getPrimary(): com.android.dx.cf.code.OneLocalsArray;
						public copy(): com.android.dx.cf.code.LocalsArray;
						public set(param0: com.android.dx.rop.code.RegisterSpec): void;
						public mergeWithSubroutineCaller(param0: com.android.dx.cf.code.LocalsArray, param1: number): com.android.dx.cf.code.LocalsArraySet;
						public merge(param0: com.android.dx.cf.code.LocalsArray): com.android.dx.cf.code.LocalsArray;
						public constructor(mutable: boolean);
						public getCategory1(param0: number): com.android.dx.rop.type.TypeBearer;
						public get(param0: number): com.android.dx.rop.type.TypeBearer;
						public toHuman(): string;
						public getCategory2(param0: number): com.android.dx.rop.type.TypeBearer;
						public makeInitialized(param0: com.android.dx.rop.type.Type): void;
						public getMaxLocals(): number;
						public set(param0: number, param1: com.android.dx.rop.type.TypeBearer): void;
						public invalidate(param0: number): void;
						public annotate(param0: com.android.dex.util.ExceptionWithContext): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class LocalsArraySet extends com.android.dx.cf.code.LocalsArray {
						public static class: java.lang.Class<com.android.dx.cf.code.LocalsArraySet>;
						public set(spec: com.android.dx.rop.code.RegisterSpec): void;
						public getCategory2(idx: number): com.android.dx.rop.type.TypeBearer;
						public annotate(ex: com.android.dex.util.ExceptionWithContext): void;
						public constructor(maxLocals: number);
						public set(param0: com.android.dx.rop.code.RegisterSpec): void;
						public getCategory1(idx: number): com.android.dx.rop.type.TypeBearer;
						public constructor(mutable: boolean);
						public set(idx: number, type: com.android.dx.rop.type.TypeBearer): void;
						public getOrNull(idx: number): com.android.dx.rop.type.TypeBearer;
						public mergeWithSubroutineCaller(other: com.android.dx.cf.code.LocalsArray, predLabel: number): com.android.dx.cf.code.LocalsArraySet;
						public getMaxLocals(): number;
						public set(param0: number, param1: com.android.dx.rop.type.TypeBearer): void;
						public getOrNull(param0: number): com.android.dx.rop.type.TypeBearer;
						public constructor();
						public merge(other: com.android.dx.cf.code.LocalsArray): com.android.dx.cf.code.LocalsArraySet;
						public getPrimary(): com.android.dx.cf.code.OneLocalsArray;
						public constructor(primary: com.android.dx.cf.code.OneLocalsArray, secondaries: java.util.ArrayList<com.android.dx.cf.code.LocalsArray>);
						public copy(): com.android.dx.cf.code.LocalsArray;
						public makeInitialized(type: com.android.dx.rop.type.Type): void;
						public mergeWithSubroutineCaller(param0: com.android.dx.cf.code.LocalsArray, param1: number): com.android.dx.cf.code.LocalsArraySet;
						public merge(param0: com.android.dx.cf.code.LocalsArray): com.android.dx.cf.code.LocalsArray;
						public setImmutable(): void;
						public getCategory1(param0: number): com.android.dx.rop.type.TypeBearer;
						public toHuman(): string;
						public get(param0: number): com.android.dx.rop.type.TypeBearer;
						public getCategory2(param0: number): com.android.dx.rop.type.TypeBearer;
						public makeInitialized(param0: com.android.dx.rop.type.Type): void;
						public get(idx: number): com.android.dx.rop.type.TypeBearer;
						public subArrayForLabel(subLabel: number): com.android.dx.cf.code.LocalsArray;
						public invalidate(param0: number): void;
						public invalidate(idx: number): void;
						public annotate(param0: com.android.dex.util.ExceptionWithContext): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class Machine extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.code.Machine>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.code.Machine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getPrototype(): com.android.dx.rop.type.Prototype;
							clearArgs(): void;
							popArgs(param0: com.android.dx.cf.code.Frame, param1: number): void;
							popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Prototype): void;
							popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type): void;
							popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.type.Type): void;
							popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.type.Type, param3: com.android.dx.rop.type.Type): void;
							localArg(param0: com.android.dx.cf.code.Frame, param1: number): void;
							localInfo(param0: boolean): void;
							auxType(param0: com.android.dx.rop.type.Type): void;
							auxIntArg(param0: number): void;
							auxCstArg(param0: com.android.dx.rop.cst.Constant): void;
							auxTargetArg(param0: number): void;
							auxSwitchArg(param0: com.android.dx.cf.code.SwitchList): void;
							auxInitValues(param0: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
							localTarget(param0: number, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.code.LocalItem): void;
							run(param0: com.android.dx.cf.code.Frame, param1: number, param2: number): void;
						});
						public constructor();
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: number): void;
						public localArg(param0: com.android.dx.cf.code.Frame, param1: number): void;
						public localInfo(param0: boolean): void;
						public run(param0: com.android.dx.cf.code.Frame, param1: number, param2: number): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type): void;
						public clearArgs(): void;
						public getPrototype(): com.android.dx.rop.type.Prototype;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.type.Type): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Prototype): void;
						public auxTargetArg(param0: number): void;
						public auxCstArg(param0: com.android.dx.rop.cst.Constant): void;
						public auxType(param0: com.android.dx.rop.type.Type): void;
						public auxSwitchArg(param0: com.android.dx.cf.code.SwitchList): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.type.Type, param3: com.android.dx.rop.type.Type): void;
						public auxIntArg(param0: number): void;
						public auxInitValues(param0: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						public localTarget(param0: number, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.code.LocalItem): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class Merger extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.code.Merger>;
						public static mergeLocals(locals1: com.android.dx.cf.code.OneLocalsArray, locals2: com.android.dx.cf.code.OneLocalsArray): com.android.dx.cf.code.OneLocalsArray;
						public static mergeStack(stack1: com.android.dx.cf.code.ExecutionStack, stack2: com.android.dx.cf.code.ExecutionStack): com.android.dx.cf.code.ExecutionStack;
						public static mergeType(ft1: com.android.dx.rop.type.TypeBearer, ft2: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.type.TypeBearer;
						public static isPossiblyAssignableFrom(supertypeBearer: com.android.dx.rop.type.TypeBearer, subtypeBearer: com.android.dx.rop.type.TypeBearer): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class OneLocalsArray extends com.android.dx.cf.code.LocalsArray {
						public static class: java.lang.Class<com.android.dx.cf.code.OneLocalsArray>;
						public set(spec: com.android.dx.rop.code.RegisterSpec): void;
						public getCategory2(idx: number): com.android.dx.rop.type.TypeBearer;
						public annotate(ex: com.android.dex.util.ExceptionWithContext): void;
						public constructor(maxLocals: number);
						public set(param0: com.android.dx.rop.code.RegisterSpec): void;
						public getCategory1(idx: number): com.android.dx.rop.type.TypeBearer;
						public constructor(mutable: boolean);
						public set(idx: number, type: com.android.dx.rop.type.TypeBearer): void;
						public getOrNull(idx: number): com.android.dx.rop.type.TypeBearer;
						public merge(other: com.android.dx.cf.code.LocalsArray): com.android.dx.cf.code.LocalsArray;
						public mergeWithSubroutineCaller(other: com.android.dx.cf.code.LocalsArray, predLabel: number): com.android.dx.cf.code.LocalsArraySet;
						public getMaxLocals(): number;
						public set(param0: number, param1: com.android.dx.rop.type.TypeBearer): void;
						public copy(): com.android.dx.cf.code.OneLocalsArray;
						public getOrNull(param0: number): com.android.dx.rop.type.TypeBearer;
						public constructor();
						public getPrimary(): com.android.dx.cf.code.OneLocalsArray;
						public merge(other: com.android.dx.cf.code.OneLocalsArray): com.android.dx.cf.code.OneLocalsArray;
						public copy(): com.android.dx.cf.code.LocalsArray;
						public makeInitialized(type: com.android.dx.rop.type.Type): void;
						public mergeWithSubroutineCaller(param0: com.android.dx.cf.code.LocalsArray, param1: number): com.android.dx.cf.code.LocalsArraySet;
						public merge(param0: com.android.dx.cf.code.LocalsArray): com.android.dx.cf.code.LocalsArray;
						public getCategory1(param0: number): com.android.dx.rop.type.TypeBearer;
						public toHuman(): string;
						public get(param0: number): com.android.dx.rop.type.TypeBearer;
						public getCategory2(param0: number): com.android.dx.rop.type.TypeBearer;
						public makeInitialized(param0: com.android.dx.rop.type.Type): void;
						public get(idx: number): com.android.dx.rop.type.TypeBearer;
						public invalidate(param0: number): void;
						public invalidate(idx: number): void;
						public annotate(param0: com.android.dex.util.ExceptionWithContext): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class ReturnAddress extends java.lang.Object implements com.android.dx.rop.type.TypeBearer {
						public static class: java.lang.Class<com.android.dx.cf.code.ReturnAddress>;
						public getBasicFrameType(): number;
						public toHuman(): string;
						public isConstant(): boolean;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public hashCode(): number;
						public constructor(subroutineAddress: number);
						public getSubroutineAddress(): number;
						public toString(): string;
						public getType(): com.android.dx.rop.type.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class Ropper extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.code.Ropper>;
						public static convert(method: com.android.dx.cf.code.ConcreteMethod, advice: com.android.dx.rop.code.TranslationAdvice, methods: com.android.dx.cf.iface.MethodList, dexOptions: com.android.dx.dex.DexOptions): com.android.dx.rop.code.RopMethod;
					}
					export module Ropper {
						export class CatchInfo extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.code.Ropper.CatchInfo>;
						}
						export class ExceptionHandlerSetup extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.code.Ropper.ExceptionHandlerSetup>;
							public getLabel(): number;
						}
						export class ExceptionSetupLabelAllocator extends com.android.dx.cf.code.Ropper.LabelAllocator {
							public static class: java.lang.Class<com.android.dx.cf.code.Ropper.ExceptionSetupLabelAllocator>;
						}
						export class LabelAllocator extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.code.Ropper.LabelAllocator>;
						}
						export class Subroutine extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.code.Ropper.Subroutine>;
						}
						export class SubroutineInliner extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.code.Ropper.SubroutineInliner>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class RopperMachine extends com.android.dx.cf.code.ValueAwareMachine {
						public static class: java.lang.Class<com.android.dx.cf.code.RopperMachine>;
						public constructor(ropper: com.android.dx.cf.code.Ropper, method: com.android.dx.cf.code.ConcreteMethod, advice: com.android.dx.rop.code.TranslationAdvice, methods: com.android.dx.cf.iface.MethodList);
						public popArgs(frame: com.android.dx.cf.code.Frame, prototype: com.android.dx.rop.type.Prototype): void;
						public auxTargetArg(target: number): void;
						public getReturnAddress(): com.android.dx.cf.code.ReturnAddress;
						public run(param0: com.android.dx.cf.code.Frame, param1: number, param2: number): void;
						public startBlock(catches: com.android.dx.rop.type.TypeList): void;
						public popArgs(frame: com.android.dx.cf.code.Frame, count: number): void;
						public localInfo(local: boolean): void;
						public auxCstArg(cst: com.android.dx.rop.cst.Constant): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.type.Type): void;
						public getInsns(): java.util.ArrayList<com.android.dx.rop.code.Insn>;
						public auxTargetArg(param0: number): void;
						public returns(): boolean;
						public auxSwitchArg(param0: com.android.dx.cf.code.SwitchList): void;
						public getPrimarySuccessorIndex(): number;
						public popArgs(frame: com.android.dx.cf.code.Frame, type1: com.android.dx.rop.type.Type, type2: com.android.dx.rop.type.Type): void;
						public localTarget(idx: number, type: com.android.dx.rop.type.Type, local: com.android.dx.rop.code.LocalItem): void;
						public auxInitValues(param0: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: number): void;
						public hasRet(): boolean;
						public localArg(param0: com.android.dx.cf.code.Frame, param1: number): void;
						public canThrow(): boolean;
						public localInfo(param0: boolean): void;
						public wereCatchesUsed(): boolean;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type): void;
						public clearArgs(): void;
						public auxSwitchArg(cases: com.android.dx.cf.code.SwitchList): void;
						public getReturnOp(): com.android.dx.rop.code.Rop;
						public getPrototype(): com.android.dx.rop.type.Prototype;
						public popArgs(frame: com.android.dx.cf.code.Frame, type: com.android.dx.rop.type.Type): void;
						public getReturnPosition(): com.android.dx.rop.code.SourcePosition;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Prototype): void;
						public auxType(type: com.android.dx.rop.type.Type): void;
						public constructor(prototype: com.android.dx.rop.type.Prototype);
						public popArgs(frame: com.android.dx.cf.code.Frame, type1: com.android.dx.rop.type.Type, type2: com.android.dx.rop.type.Type, type3: com.android.dx.rop.type.Type): void;
						public auxCstArg(param0: com.android.dx.rop.cst.Constant): void;
						public auxType(param0: com.android.dx.rop.type.Type): void;
						public localArg(frame: com.android.dx.cf.code.Frame, idx: number): void;
						public hasJsr(): boolean;
						public auxInitValues(initValues: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						public run(frame: com.android.dx.cf.code.Frame, offset: number, opcode: number): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.type.Type, param3: com.android.dx.rop.type.Type): void;
						public auxIntArg(value: number): void;
						public auxIntArg(param0: number): void;
						public localTarget(param0: number, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.code.LocalItem): void;
						public getExtraBlockCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class SimException extends com.android.dex.util.ExceptionWithContext {
						public static class: java.lang.Class<com.android.dx.cf.code.SimException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class Simulator extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.code.Simulator>;
						public simulate(bb: com.android.dx.cf.code.ByteBlock, frame: com.android.dx.cf.code.Frame): void;
						public constructor(machine: com.android.dx.cf.code.Machine, method: com.android.dx.cf.code.ConcreteMethod, dexOptions: com.android.dx.dex.DexOptions);
						public simulate(offset: number, frame: com.android.dx.cf.code.Frame): number;
					}
					export module Simulator {
						export class SimVisitor extends java.lang.Object implements com.android.dx.cf.code.BytecodeArray.Visitor {
							public static class: java.lang.Class<com.android.dx.cf.code.Simulator.SimVisitor>;
							public visitSwitch(param0: number, param1: number, param2: number, param3: com.android.dx.cf.code.SwitchList, param4: number): void;
							public setPreviousOffset(param0: number): void;
							public visitLocal(param0: number, param1: number, param2: number, param3: number, param4: com.android.dx.rop.type.Type, param5: number): void;
							public visitInvalid(opcode: number, offset: number, length: number): void;
							public constructor(param0: com.android.dx.cf.code.Simulator);
							public visitConstant(opcode: number, offset: number, length: number, cst: com.android.dx.rop.cst.Constant, value: number): void;
							public visitNoArgs(opcode: number, offset: number, length: number, type: com.android.dx.rop.type.Type): void;
							public visitBranch(param0: number, param1: number, param2: number, param3: number): void;
							public setFrame(frame: com.android.dx.cf.code.Frame): void;
							public visitSwitch(opcode: number, offset: number, length: number, cases: com.android.dx.cf.code.SwitchList, padding: number): void;
							public visitBranch(opcode: number, offset: number, length: number, target: number): void;
							public setPreviousOffset(offset: number): void;
							public getPreviousOffset(): number;
							public visitNewarray(offset: number, length: number, type: com.android.dx.rop.cst.CstType, initValues: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
							public visitNoArgs(param0: number, param1: number, param2: number, param3: com.android.dx.rop.type.Type): void;
							public visitLocal(opcode: number, offset: number, length: number, idx: number, type: com.android.dx.rop.type.Type, value: number): void;
							public visitInvalid(param0: number, param1: number, param2: number): void;
							public visitConstant(param0: number, param1: number, param2: number, param3: com.android.dx.rop.cst.Constant, param4: number): void;
							public visitNewarray(param0: number, param1: number, param2: com.android.dx.rop.cst.CstType, param3: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class SwitchList extends com.android.dx.util.MutabilityControl {
						public static class: java.lang.Class<com.android.dx.cf.code.SwitchList>;
						public getValues(): com.android.dx.util.IntList;
						public constructor();
						public setDefaultTarget(target: number): void;
						public add(value: number, target: number): void;
						public getDefaultTarget(): number;
						public constructor(mutable: boolean);
						public setImmutable(): void;
						public removeSuperfluousDefaults(): void;
						public getValue(n: number): number;
						public getTarget(n: number): number;
						public getTargets(): com.android.dx.util.IntList;
						public constructor(size: number);
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module code {
					export class ValueAwareMachine extends com.android.dx.cf.code.BaseMachine {
						public static class: java.lang.Class<com.android.dx.cf.code.ValueAwareMachine>;
						public popArgs(frame: com.android.dx.cf.code.Frame, prototype: com.android.dx.rop.type.Prototype): void;
						public auxTargetArg(target: number): void;
						public run(param0: com.android.dx.cf.code.Frame, param1: number, param2: number): void;
						public popArgs(frame: com.android.dx.cf.code.Frame, count: number): void;
						public localInfo(local: boolean): void;
						public auxCstArg(cst: com.android.dx.rop.cst.Constant): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.type.Type): void;
						public auxTargetArg(param0: number): void;
						public auxSwitchArg(param0: com.android.dx.cf.code.SwitchList): void;
						public popArgs(frame: com.android.dx.cf.code.Frame, type1: com.android.dx.rop.type.Type, type2: com.android.dx.rop.type.Type): void;
						public localTarget(idx: number, type: com.android.dx.rop.type.Type, local: com.android.dx.rop.code.LocalItem): void;
						public auxInitValues(param0: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: number): void;
						public localArg(param0: com.android.dx.cf.code.Frame, param1: number): void;
						public localInfo(param0: boolean): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type): void;
						public clearArgs(): void;
						public auxSwitchArg(cases: com.android.dx.cf.code.SwitchList): void;
						public getPrototype(): com.android.dx.rop.type.Prototype;
						public popArgs(frame: com.android.dx.cf.code.Frame, type: com.android.dx.rop.type.Type): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Prototype): void;
						public auxType(type: com.android.dx.rop.type.Type): void;
						public constructor(prototype: com.android.dx.rop.type.Prototype);
						public popArgs(frame: com.android.dx.cf.code.Frame, type1: com.android.dx.rop.type.Type, type2: com.android.dx.rop.type.Type, type3: com.android.dx.rop.type.Type): void;
						public auxCstArg(param0: com.android.dx.rop.cst.Constant): void;
						public auxType(param0: com.android.dx.rop.type.Type): void;
						public localArg(frame: com.android.dx.cf.code.Frame, idx: number): void;
						public auxInitValues(initValues: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						public run(frame: com.android.dx.cf.code.Frame, offset: number, opcode: number): void;
						public popArgs(param0: com.android.dx.cf.code.Frame, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.type.Type, param3: com.android.dx.rop.type.Type): void;
						public auxIntArg(value: number): void;
						public auxIntArg(param0: number): void;
						public localTarget(param0: number, param1: com.android.dx.rop.type.Type, param2: com.android.dx.rop.code.LocalItem): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module cst {
					export class ConstantPoolParser extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.cst.ConstantPoolParser>;
						public getEndOffset(): number;
						public setObserver(observer: com.android.dx.cf.iface.ParseObserver): void;
						public getPool(): com.android.dx.rop.cst.StdConstantPool;
						public constructor(bytes: com.android.dx.util.ByteArray);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module cst {
					export class ConstantTags extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.cst.ConstantTags>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.cst.ConstantTags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static CONSTANT_Fieldref: number;
						public static CONSTANT_MethodHandle: number;
						public static CONSTANT_Float: number;
						public static CONSTANT_InvokeDynamic: number;
						public static CONSTANT_Long: number;
						public static CONSTANT_Class: number;
						public static CONSTANT_Integer: number;
						public static CONSTANT_NameAndType: number;
						public static CONSTANT_Methodref: number;
						public static CONSTANT_MethodType: number;
						public static CONSTANT_String: number;
						public static CONSTANT_InterfaceMethodref: number;
						public static CONSTANT_Utf8: number;
						public static CONSTANT_Double: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module cst {
					export class MethodHandleKind extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.cst.MethodHandleKind>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.cst.MethodHandleKind interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static REF_invokeVirtual: number;
						public static REF_putField: number;
						public static REF_invokeSpecial: number;
						public static REF_invokeStatic: number;
						public static REF_invokeInterface: number;
						public static REF_getField: number;
						public static REF_getStatic: number;
						public static REF_newInvokeSpecial: number;
						public static REF_putStatic: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module direct {
					export class AnnotationParser extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.direct.AnnotationParser>;
						public parseValueAttribute(): com.android.dx.rop.cst.Constant;
						public constructor(cf: com.android.dx.cf.direct.DirectClassFile, offset: number, length: number, observer: com.android.dx.cf.iface.ParseObserver);
						public parseParameterAttribute(visibility: com.android.dx.rop.annotation.AnnotationVisibility): com.android.dx.rop.annotation.AnnotationsList;
						public parseAnnotationAttribute(visibility: com.android.dx.rop.annotation.AnnotationVisibility): com.android.dx.rop.annotation.Annotations;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module direct {
					export class AttributeFactory extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.direct.AttributeFactory>;
						public static CTX_CLASS: number;
						public static CTX_FIELD: number;
						public static CTX_METHOD: number;
						public static CTX_CODE: number;
						public static CTX_COUNT: number;
						public constructor();
						public parse(cf: com.android.dx.cf.direct.DirectClassFile, context: number, offset: number, observer: com.android.dx.cf.iface.ParseObserver): com.android.dx.cf.iface.Attribute;
						public parse0(cf: com.android.dx.cf.direct.DirectClassFile, context: number, name: string, offset: number, length: number, observer: com.android.dx.cf.iface.ParseObserver): com.android.dx.cf.iface.Attribute;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module direct {
					export class AttributeListParser extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.direct.AttributeListParser>;
						public constructor(cf: com.android.dx.cf.direct.DirectClassFile, context: number, offset: number, attributeFactory: com.android.dx.cf.direct.AttributeFactory);
						public getEndOffset(): number;
						public setObserver(observer: com.android.dx.cf.iface.ParseObserver): void;
						public getList(): com.android.dx.cf.iface.StdAttributeList;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module direct {
					export class ClassPathOpener extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.direct.ClassPathOpener>;
						public static acceptAll: com.android.dx.cf.direct.ClassPathOpener.FileNameFilter;
						public process(): boolean;
						public constructor(pathname: string, sort: boolean, consumer: com.android.dx.cf.direct.ClassPathOpener.Consumer);
						public constructor(pathname: string, sort: boolean, filter: com.android.dx.cf.direct.ClassPathOpener.FileNameFilter, consumer: com.android.dx.cf.direct.ClassPathOpener.Consumer);
					}
					export module ClassPathOpener {
						export class Consumer extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.direct.ClassPathOpener.Consumer>;
							/**
							 * Constructs a new instance of the com.android.dx.cf.direct.ClassPathOpener$Consumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								processFileBytes(param0: string, param1: number, param2: number[]): boolean;
								onException(param0: java.lang.Exception): void;
								onProcessArchiveStart(param0: java.io.File): void;
							});
							public constructor();
							public processFileBytes(param0: string, param1: number, param2: number[]): boolean;
							public onException(param0: java.lang.Exception): void;
							public onProcessArchiveStart(param0: java.io.File): void;
						}
						export class FileNameFilter extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.cf.direct.ClassPathOpener.FileNameFilter>;
							/**
							 * Constructs a new instance of the com.android.dx.cf.direct.ClassPathOpener$FileNameFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								accept(param0: string): boolean;
							});
							public constructor();
							public accept(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module direct {
					export class CodeObserver extends java.lang.Object implements com.android.dx.cf.code.BytecodeArray.Visitor {
						public static class: java.lang.Class<com.android.dx.cf.direct.CodeObserver>;
						public visitBranch(opcode: number, offset: number, length: number, target: number): void;
						public visitLocal(param0: number, param1: number, param2: number, param3: number, param4: com.android.dx.rop.type.Type, param5: number): void;
						public setPreviousOffset(param0: number): void;
						public visitConstant(opcode: number, offset: number, length: number, cst: com.android.dx.rop.cst.Constant, value: number): void;
						public constructor(bytes: com.android.dx.util.ByteArray, observer: com.android.dx.cf.iface.ParseObserver);
						public visitNoArgs(opcode: number, offset: number, length: number, type: com.android.dx.rop.type.Type): void;
						public visitNewarray(offset: number, length: number, cst: com.android.dx.rop.cst.CstType, intVals: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						public visitSwitch(param0: number, param1: number, param2: number, param3: com.android.dx.cf.code.SwitchList, param4: number): void;
						public setPreviousOffset(offset: number): void;
						public visitInvalid(param0: number, param1: number, param2: number): void;
						public visitNewarray(param0: number, param1: number, param2: com.android.dx.rop.cst.CstType, param3: java.util.ArrayList<com.android.dx.rop.cst.Constant>): void;
						public visitLocal(opcode: number, offset: number, length: number, idx: number, type: com.android.dx.rop.type.Type, value: number): void;
						public visitSwitch(opcode: number, offset: number, length: number, cases: com.android.dx.cf.code.SwitchList, padding: number): void;
						public visitNoArgs(param0: number, param1: number, param2: number, param3: com.android.dx.rop.type.Type): void;
						public visitConstant(param0: number, param1: number, param2: number, param3: com.android.dx.rop.cst.Constant, param4: number): void;
						public getPreviousOffset(): number;
						public visitBranch(param0: number, param1: number, param2: number, param3: number): void;
						public visitInvalid(opcode: number, offset: number, length: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module direct {
					export class DirectClassFile extends java.lang.Object implements com.android.dx.cf.iface.ClassFile {
						public static class: java.lang.Class<com.android.dx.cf.direct.DirectClassFile>;
						public setObserver(observer: com.android.dx.cf.iface.ParseObserver): void;
						public setAttributeFactory(attributeFactory: com.android.dx.cf.direct.AttributeFactory): void;
						public getMajorVersion(): number;
						public getSourceFile(): com.android.dx.rop.cst.CstString;
						public getSuperclass(): com.android.dx.rop.cst.CstType;
						public getBytes(): com.android.dx.util.ByteArray;
						public getAttributes(): com.android.dx.cf.iface.AttributeList;
						public getAccessFlags(): number;
						public getMinorVersion0(): number;
						public getMajorVersion0(): number;
						public getMinorVersion(): number;
						public makeTypeList(offset: number, size: number): com.android.dx.rop.type.TypeList;
						public getConstantPool(): com.android.dx.rop.cst.ConstantPool;
						public static stringOrNone(obj: any): string;
						public constructor(bytes: com.android.dx.util.ByteArray, filePath: string, strictParse: boolean);
						public getMagic(): number;
						public getFilePath(): string;
						public getThisClass(): com.android.dx.rop.cst.CstType;
						public getMethods(): com.android.dx.cf.iface.MethodList;
						public getMagic0(): number;
						public getBootstrapMethods(): com.android.dx.cf.code.BootstrapMethodsList;
						public constructor(bytes: number[], filePath: string, strictParse: boolean);
						public getInterfaces(): com.android.dx.rop.type.TypeList;
						public getFields(): com.android.dx.cf.iface.FieldList;
					}
					export module DirectClassFile {
						export class DcfTypeList extends java.lang.Object implements com.android.dx.rop.type.TypeList {
							public static class: java.lang.Class<com.android.dx.cf.direct.DirectClassFile.DcfTypeList>;
							public constructor(bytes: com.android.dx.util.ByteArray, offset: number, size: number, pool: com.android.dx.rop.cst.StdConstantPool, observer: com.android.dx.cf.iface.ParseObserver);
							public size(): number;
							public getType(param0: number): com.android.dx.rop.type.Type;
							public getType(n: number): com.android.dx.rop.type.Type;
							public isMutable(): boolean;
							public withAddedType(param0: com.android.dx.rop.type.Type): com.android.dx.rop.type.TypeList;
							public withAddedType(type: com.android.dx.rop.type.Type): com.android.dx.rop.type.TypeList;
							public getWordCount(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module direct {
					export class FieldListParser extends com.android.dx.cf.direct.MemberListParser {
						public static class: java.lang.Class<com.android.dx.cf.direct.FieldListParser>;
						public set(n: number, accessFlags: number, nat: com.android.dx.rop.cst.CstNat, attributes: com.android.dx.cf.iface.AttributeList): com.android.dx.cf.iface.Member;
						public humanAccessFlags(param0: number): string;
						public humanName(): string;
						public set(param0: number, param1: number, param2: com.android.dx.rop.cst.CstNat, param3: com.android.dx.cf.iface.AttributeList): com.android.dx.cf.iface.Member;
						public humanAccessFlags(accessFlags: number): string;
						public getList(): com.android.dx.cf.iface.StdFieldList;
						public constructor(cf: com.android.dx.cf.direct.DirectClassFile, definer: com.android.dx.rop.cst.CstType, offset: number, attributeFactory: com.android.dx.cf.direct.AttributeFactory);
						public getAttributeContext(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module direct {
					export abstract class MemberListParser extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.direct.MemberListParser>;
						public getEndOffset(): number;
						public setObserver(observer: com.android.dx.cf.iface.ParseObserver): void;
						public parseIfNecessary(): void;
						public humanAccessFlags(param0: number): string;
						public humanName(): string;
						public set(param0: number, param1: number, param2: com.android.dx.rop.cst.CstNat, param3: com.android.dx.cf.iface.AttributeList): com.android.dx.cf.iface.Member;
						public getDefiner(): com.android.dx.rop.cst.CstType;
						public getCount(): number;
						public constructor(cf: com.android.dx.cf.direct.DirectClassFile, definer: com.android.dx.rop.cst.CstType, offset: number, attributeFactory: com.android.dx.cf.direct.AttributeFactory);
						public getAttributeContext(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module direct {
					export class MethodListParser extends com.android.dx.cf.direct.MemberListParser {
						public static class: java.lang.Class<com.android.dx.cf.direct.MethodListParser>;
						public set(n: number, accessFlags: number, nat: com.android.dx.rop.cst.CstNat, attributes: com.android.dx.cf.iface.AttributeList): com.android.dx.cf.iface.Member;
						public humanAccessFlags(param0: number): string;
						public humanName(): string;
						public set(param0: number, param1: number, param2: com.android.dx.rop.cst.CstNat, param3: com.android.dx.cf.iface.AttributeList): com.android.dx.cf.iface.Member;
						public humanAccessFlags(accessFlags: number): string;
						public constructor(cf: com.android.dx.cf.direct.DirectClassFile, definer: com.android.dx.rop.cst.CstType, offset: number, attributeFactory: com.android.dx.cf.direct.AttributeFactory);
						public getList(): com.android.dx.cf.iface.StdMethodList;
						public getAttributeContext(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module direct {
					export class StdAttributeFactory extends com.android.dx.cf.direct.AttributeFactory {
						public static class: java.lang.Class<com.android.dx.cf.direct.StdAttributeFactory>;
						public static THE_ONE: com.android.dx.cf.direct.StdAttributeFactory;
						public constructor();
						public parse0(cf: com.android.dx.cf.direct.DirectClassFile, context: number, name: string, offset: number, length: number, observer: com.android.dx.cf.iface.ParseObserver): com.android.dx.cf.iface.Attribute;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class Attribute extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.iface.Attribute>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.iface.Attribute interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getName(): string;
							byteLength(): number;
						});
						public constructor();
						public byteLength(): number;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class AttributeList extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.iface.AttributeList>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.iface.AttributeList interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isMutable(): boolean;
							size(): number;
							get(param0: number): com.android.dx.cf.iface.Attribute;
							byteLength(): number;
							findFirst(param0: string): com.android.dx.cf.iface.Attribute;
							findNext(param0: com.android.dx.cf.iface.Attribute): com.android.dx.cf.iface.Attribute;
						});
						public constructor();
						public get(param0: number): com.android.dx.cf.iface.Attribute;
						public byteLength(): number;
						public findFirst(param0: string): com.android.dx.cf.iface.Attribute;
						public findNext(param0: com.android.dx.cf.iface.Attribute): com.android.dx.cf.iface.Attribute;
						public size(): number;
						public isMutable(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class ClassFile extends java.lang.Object implements com.android.dx.cf.iface.HasAttribute {
						public static class: java.lang.Class<com.android.dx.cf.iface.ClassFile>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.iface.ClassFile interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getMagic(): number;
							getMinorVersion(): number;
							getMajorVersion(): number;
							getAccessFlags(): number;
							getThisClass(): com.android.dx.rop.cst.CstType;
							getSuperclass(): com.android.dx.rop.cst.CstType;
							getConstantPool(): com.android.dx.rop.cst.ConstantPool;
							getInterfaces(): com.android.dx.rop.type.TypeList;
							getFields(): com.android.dx.cf.iface.FieldList;
							getMethods(): com.android.dx.cf.iface.MethodList;
							getAttributes(): com.android.dx.cf.iface.AttributeList;
							getBootstrapMethods(): com.android.dx.cf.code.BootstrapMethodsList;
							getSourceFile(): com.android.dx.rop.cst.CstString;
							getAttributes(): com.android.dx.cf.iface.AttributeList;
						});
						public constructor();
						public getMajorVersion(): number;
						public getSourceFile(): com.android.dx.rop.cst.CstString;
						public getSuperclass(): com.android.dx.rop.cst.CstType;
						public getAttributes(): com.android.dx.cf.iface.AttributeList;
						public getAccessFlags(): number;
						public getMinorVersion(): number;
						public getConstantPool(): com.android.dx.rop.cst.ConstantPool;
						public getMagic(): number;
						public getThisClass(): com.android.dx.rop.cst.CstType;
						public getMethods(): com.android.dx.cf.iface.MethodList;
						public getBootstrapMethods(): com.android.dx.cf.code.BootstrapMethodsList;
						public getInterfaces(): com.android.dx.rop.type.TypeList;
						public getFields(): com.android.dx.cf.iface.FieldList;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class Field extends java.lang.Object implements com.android.dx.cf.iface.Member {
						public static class: java.lang.Class<com.android.dx.cf.iface.Field>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.iface.Field interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getConstantValue(): com.android.dx.rop.cst.TypedConstant;
							getDefiningClass(): com.android.dx.rop.cst.CstType;
							getAccessFlags(): number;
							getName(): com.android.dx.rop.cst.CstString;
							getDescriptor(): com.android.dx.rop.cst.CstString;
							getNat(): com.android.dx.rop.cst.CstNat;
							getAttributes(): com.android.dx.cf.iface.AttributeList;
							getAttributes(): com.android.dx.cf.iface.AttributeList;
						});
						public constructor();
						public getConstantValue(): com.android.dx.rop.cst.TypedConstant;
						public getAccessFlags(): number;
						public getDefiningClass(): com.android.dx.rop.cst.CstType;
						public getNat(): com.android.dx.rop.cst.CstNat;
						public getName(): com.android.dx.rop.cst.CstString;
						public getDescriptor(): com.android.dx.rop.cst.CstString;
						public getAttributes(): com.android.dx.cf.iface.AttributeList;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class FieldList extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.iface.FieldList>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.iface.FieldList interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isMutable(): boolean;
							size(): number;
							get(param0: number): com.android.dx.cf.iface.Field;
						});
						public constructor();
						public get(param0: number): com.android.dx.cf.iface.Field;
						public size(): number;
						public isMutable(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class HasAttribute extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.iface.HasAttribute>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.iface.HasAttribute interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAttributes(): com.android.dx.cf.iface.AttributeList;
						});
						public constructor();
						public getAttributes(): com.android.dx.cf.iface.AttributeList;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class Member extends java.lang.Object implements com.android.dx.cf.iface.HasAttribute {
						public static class: java.lang.Class<com.android.dx.cf.iface.Member>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.iface.Member interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getDefiningClass(): com.android.dx.rop.cst.CstType;
							getAccessFlags(): number;
							getName(): com.android.dx.rop.cst.CstString;
							getDescriptor(): com.android.dx.rop.cst.CstString;
							getNat(): com.android.dx.rop.cst.CstNat;
							getAttributes(): com.android.dx.cf.iface.AttributeList;
							getAttributes(): com.android.dx.cf.iface.AttributeList;
						});
						public constructor();
						public getAccessFlags(): number;
						public getDefiningClass(): com.android.dx.rop.cst.CstType;
						public getNat(): com.android.dx.rop.cst.CstNat;
						public getName(): com.android.dx.rop.cst.CstString;
						public getDescriptor(): com.android.dx.rop.cst.CstString;
						public getAttributes(): com.android.dx.cf.iface.AttributeList;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class Method extends java.lang.Object implements com.android.dx.cf.iface.Member {
						public static class: java.lang.Class<com.android.dx.cf.iface.Method>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.iface.Method interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getEffectiveDescriptor(): com.android.dx.rop.type.Prototype;
							getDefiningClass(): com.android.dx.rop.cst.CstType;
							getAccessFlags(): number;
							getName(): com.android.dx.rop.cst.CstString;
							getDescriptor(): com.android.dx.rop.cst.CstString;
							getNat(): com.android.dx.rop.cst.CstNat;
							getAttributes(): com.android.dx.cf.iface.AttributeList;
							getAttributes(): com.android.dx.cf.iface.AttributeList;
						});
						public constructor();
						public getAccessFlags(): number;
						public getDefiningClass(): com.android.dx.rop.cst.CstType;
						public getEffectiveDescriptor(): com.android.dx.rop.type.Prototype;
						public getNat(): com.android.dx.rop.cst.CstNat;
						public getName(): com.android.dx.rop.cst.CstString;
						public getDescriptor(): com.android.dx.rop.cst.CstString;
						public getAttributes(): com.android.dx.cf.iface.AttributeList;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class MethodList extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.iface.MethodList>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.iface.MethodList interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isMutable(): boolean;
							size(): number;
							get(param0: number): com.android.dx.cf.iface.Method;
						});
						public constructor();
						public size(): number;
						public isMutable(): boolean;
						public get(param0: number): com.android.dx.cf.iface.Method;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class ParseException extends com.android.dex.util.ExceptionWithContext {
						public static class: java.lang.Class<com.android.dx.cf.iface.ParseException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class ParseObserver extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.cf.iface.ParseObserver>;
						/**
						 * Constructs a new instance of the com.android.dx.cf.iface.ParseObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							changeIndent(param0: number): void;
							startParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string): void;
							endParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string, param4: com.android.dx.cf.iface.Member): void;
							parsed(param0: com.android.dx.util.ByteArray, param1: number, param2: number, param3: string): void;
						});
						public constructor();
						public changeIndent(param0: number): void;
						public startParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string): void;
						public endParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string, param4: com.android.dx.cf.iface.Member): void;
						public parsed(param0: com.android.dx.util.ByteArray, param1: number, param2: number, param3: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class StdAttributeList extends com.android.dx.util.FixedSizeList implements com.android.dx.cf.iface.AttributeList {
						public static class: java.lang.Class<com.android.dx.cf.iface.StdAttributeList>;
						public set(n: number, attribute: com.android.dx.cf.iface.Attribute): void;
						public constructor();
						public findFirst(name: string): com.android.dx.cf.iface.Attribute;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public isMutable(): boolean;
						public findNext(attrib: com.android.dx.cf.iface.Attribute): com.android.dx.cf.iface.Attribute;
						public constructor(mutable: boolean);
						public get(n: number): com.android.dx.cf.iface.Attribute;
						public toHuman(): string;
						public get(param0: number): com.android.dx.cf.iface.Attribute;
						public byteLength(): number;
						public constructor(size: number);
						public findFirst(param0: string): com.android.dx.cf.iface.Attribute;
						public findNext(param0: com.android.dx.cf.iface.Attribute): com.android.dx.cf.iface.Attribute;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class StdField extends com.android.dx.cf.iface.StdMember implements com.android.dx.cf.iface.Field {
						public static class: java.lang.Class<com.android.dx.cf.iface.StdField>;
						public getConstantValue(): com.android.dx.rop.cst.TypedConstant;
						public getAccessFlags(): number;
						public getDefiningClass(): com.android.dx.rop.cst.CstType;
						public getNat(): com.android.dx.rop.cst.CstNat;
						public constructor(definingClass: com.android.dx.rop.cst.CstType, accessFlags: number, nat: com.android.dx.rop.cst.CstNat, attributes: com.android.dx.cf.iface.AttributeList);
						public getName(): com.android.dx.rop.cst.CstString;
						public getDescriptor(): com.android.dx.rop.cst.CstString;
						public getAttributes(): com.android.dx.cf.iface.AttributeList;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class StdFieldList extends com.android.dx.util.FixedSizeList implements com.android.dx.cf.iface.FieldList {
						public static class: java.lang.Class<com.android.dx.cf.iface.StdFieldList>;
						public constructor();
						public toHuman(): string;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public constructor(size: number);
						public get(param0: number): com.android.dx.cf.iface.Field;
						public set(n: number, field: com.android.dx.cf.iface.Field): void;
						public size(): number;
						public isMutable(): boolean;
						public get(n: number): com.android.dx.cf.iface.Field;
						public constructor(mutable: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export abstract class StdMember extends java.lang.Object implements com.android.dx.cf.iface.Member {
						public static class: java.lang.Class<com.android.dx.cf.iface.StdMember>;
						public getAccessFlags(): number;
						public getDefiningClass(): com.android.dx.rop.cst.CstType;
						public getNat(): com.android.dx.rop.cst.CstNat;
						public constructor(definingClass: com.android.dx.rop.cst.CstType, accessFlags: number, nat: com.android.dx.rop.cst.CstNat, attributes: com.android.dx.cf.iface.AttributeList);
						public getName(): com.android.dx.rop.cst.CstString;
						public getDescriptor(): com.android.dx.rop.cst.CstString;
						public getAttributes(): com.android.dx.cf.iface.AttributeList;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class StdMethod extends com.android.dx.cf.iface.StdMember implements com.android.dx.cf.iface.Method {
						public static class: java.lang.Class<com.android.dx.cf.iface.StdMethod>;
						public getAccessFlags(): number;
						public getDefiningClass(): com.android.dx.rop.cst.CstType;
						public getEffectiveDescriptor(): com.android.dx.rop.type.Prototype;
						public getNat(): com.android.dx.rop.cst.CstNat;
						public constructor(definingClass: com.android.dx.rop.cst.CstType, accessFlags: number, nat: com.android.dx.rop.cst.CstNat, attributes: com.android.dx.cf.iface.AttributeList);
						public getName(): com.android.dx.rop.cst.CstString;
						public getDescriptor(): com.android.dx.rop.cst.CstString;
						public getAttributes(): com.android.dx.cf.iface.AttributeList;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module cf {
				export module iface {
					export class StdMethodList extends com.android.dx.util.FixedSizeList implements com.android.dx.cf.iface.MethodList {
						public static class: java.lang.Class<com.android.dx.cf.iface.StdMethodList>;
						public get(n: number): com.android.dx.cf.iface.Method;
						public constructor();
						public toHuman(): string;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public constructor(size: number);
						public set(n: number, method: com.android.dx.cf.iface.Method): void;
						public size(): number;
						public isMutable(): boolean;
						public get(param0: number): com.android.dx.cf.iface.Method;
						public constructor(mutable: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export class Main extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.command.Main>;
					public static main(args: string[]): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export class UsageException extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.android.dx.command.UsageException>;
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

declare module com {
	export module android {
		export module dx {
			export module command {
				export module annotool {
					export class AnnotationLister extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.command.annotool.AnnotationLister>;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module annotool {
					export class Main extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.command.annotool.Main>;
						public static main(argArray: string[]): void;
					}
					export module Main {
						export class Arguments extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.command.annotool.Main.Arguments>;
						}
						export class InvalidArgumentException extends java.lang.Exception {
							public static class: java.lang.Class<com.android.dx.command.annotool.Main.InvalidArgumentException>;
						}
						export class PrintType {
							public static class: java.lang.Class<com.android.dx.command.annotool.Main.PrintType>;
							public static CLASS: com.android.dx.command.annotool.Main.PrintType;
							public static INNERCLASS: com.android.dx.command.annotool.Main.PrintType;
							public static METHOD: com.android.dx.command.annotool.Main.PrintType;
							public static PACKAGE: com.android.dx.command.annotool.Main.PrintType;
							public static values(): com.android.dx.command.annotool.Main.PrintType[];
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): com.android.dx.command.annotool.Main.PrintType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module dexer {
					export class DxContext extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.command.dexer.DxContext>;
						public codeStatistics: com.android.dx.dex.cf.CodeStatistics;
						public optimizerOptions: com.android.dx.dex.cf.OptimizerOptions;
						public out: java.io.PrintStream;
						public err: java.io.PrintStream;
						public constructor();
						public constructor(out: java.io.OutputStream, err: java.io.OutputStream);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module dexer {
					export class Main extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.command.dexer.Main>;
						public static CONCURRENCY_LEVEL: number;
						public static main(argArray: string[]): void;
						public runDx(arguments: com.android.dx.command.dexer.Main.Arguments): number;
						public constructor(context: com.android.dx.command.dexer.DxContext);
						public static clearInternTables(): void;
						public static run(arguments: com.android.dx.command.dexer.Main.Arguments): number;
					}
					export module Main {
						export class Arguments extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.command.dexer.Main.Arguments>;
							public context: com.android.dx.command.dexer.DxContext;
							public debug: boolean;
							public warnings: boolean;
							public verbose: boolean;
							public verboseDump: boolean;
							public coreLibrary: boolean;
							public methodToDump: string;
							public dumpWidth: number;
							public outName: string;
							public humanOutName: string;
							public strictNameCheck: boolean;
							public emptyOk: boolean;
							public jarOutput: boolean;
							public keepClassesInJar: boolean;
							public minSdkVersion: number;
							public positionInfo: number;
							public localInfo: boolean;
							public incremental: boolean;
							public forceJumbo: boolean;
							public fileNames: string[];
							public optimize: boolean;
							public optimizeListFile: string;
							public dontOptimizeListFile: string;
							public statistics: boolean;
							public cfOptions: com.android.dx.dex.cf.CfOptions;
							public dexOptions: com.android.dx.dex.DexOptions;
							public numThreads: number;
							public multiDex: boolean;
							public mainDexListFile: string;
							public minimalMainDex: boolean;
							public maxNumberOfIdxPerDex: number;
							public constructor();
							public makeOptionsObjects(): void;
							public constructor(context: com.android.dx.command.dexer.DxContext);
							public parseFlags(flags: string[]): void;
						}
						export module Arguments {
							export class ArgumentsParser extends java.lang.Object {
								public static class: java.lang.Class<com.android.dx.command.dexer.Main.Arguments.ArgumentsParser>;
								public constructor(arguments: string[]);
								public getLastValue(): string;
								public isArg(prefix: string): boolean;
								public getCurrent(): string;
								public getRemaining(): string[];
								public getNext(): boolean;
							}
						}
						export class BestEffortMainDexListFilter extends java.lang.Object implements com.android.dx.cf.direct.ClassPathOpener.FileNameFilter {
							public static class: java.lang.Class<com.android.dx.command.dexer.Main.BestEffortMainDexListFilter>;
							public accept(path: string): boolean;
							public constructor(param0: com.android.dx.command.dexer.Main);
							public accept(param0: string): boolean;
						}
						export class ClassDefItemConsumer extends java.util.concurrent.Callable<java.lang.Boolean> {
							public static class: java.lang.Class<com.android.dx.command.dexer.Main.ClassDefItemConsumer>;
							public call(): any;
							public call(): java.lang.Boolean;
						}
						export class ClassParserTask extends java.util.concurrent.Callable<com.android.dx.cf.direct.DirectClassFile> {
							public static class: java.lang.Class<com.android.dx.command.dexer.Main.ClassParserTask>;
							public call(): any;
							public call(): com.android.dx.cf.direct.DirectClassFile;
						}
						export class ClassTranslatorTask extends java.util.concurrent.Callable<com.android.dx.dex.file.ClassDefItem> {
							public static class: java.lang.Class<com.android.dx.command.dexer.Main.ClassTranslatorTask>;
							public call(): any;
							public call(): com.android.dx.dex.file.ClassDefItem;
						}
						export class DexWriter extends java.util.concurrent.Callable<number[]> {
							public static class: java.lang.Class<com.android.dx.command.dexer.Main.DexWriter>;
							public call(): any;
							public call(): number[];
						}
						export class DirectClassFileConsumer extends java.util.concurrent.Callable<java.lang.Boolean> {
							public static class: java.lang.Class<com.android.dx.command.dexer.Main.DirectClassFileConsumer>;
							public call(): any;
							public call(): java.lang.Boolean;
						}
						export class FileBytesConsumer extends java.lang.Object implements com.android.dx.cf.direct.ClassPathOpener.Consumer {
							public static class: java.lang.Class<com.android.dx.command.dexer.Main.FileBytesConsumer>;
							public processFileBytes(param0: string, param1: number, param2: number[]): boolean;
							public onProcessArchiveStart(file: java.io.File): void;
							public onException(param0: java.lang.Exception): void;
							public onException(ex: java.lang.Exception): void;
							public onProcessArchiveStart(param0: java.io.File): void;
							public processFileBytes(name: string, lastModified: number, param2: number[]): boolean;
						}
						export class MainDexListFilter extends java.lang.Object implements com.android.dx.cf.direct.ClassPathOpener.FileNameFilter {
							public static class: java.lang.Class<com.android.dx.command.dexer.Main.MainDexListFilter>;
							public accept(fullPath: string): boolean;
							public accept(param0: string): boolean;
						}
						export class NotFilter extends java.lang.Object implements com.android.dx.cf.direct.ClassPathOpener.FileNameFilter {
							public static class: java.lang.Class<com.android.dx.command.dexer.Main.NotFilter>;
							public accept(path: string): boolean;
							public accept(param0: string): boolean;
						}
						export class StopProcessing extends java.lang.RuntimeException {
							public static class: java.lang.Class<com.android.dx.command.dexer.Main.StopProcessing>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module dump {
					export class Args extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.command.dump.Args>;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module dump {
					export abstract class BaseDumper extends java.lang.Object implements com.android.dx.cf.iface.ParseObserver {
						public static class: java.lang.Class<com.android.dx.command.dump.BaseDumper>;
						public args: com.android.dx.command.dump.Args;
						public dexOptions: com.android.dx.dex.DexOptions;
						public changeIndent(param0: number): void;
						public getRawBytes(): boolean;
						public setAt(arr: com.android.dx.util.ByteArray, offset: number): void;
						public getBytes(): number[];
						public changeIndent(indentDelta: number): void;
						public getWidth1(): number;
						public twoColumns(s1: string, s2: string): string;
						public parsed(param0: com.android.dx.util.ByteArray, param1: number, param2: number, param3: string): void;
						public parsed(bytes: com.android.dx.util.ByteArray, offset: number, len: number, human: string): void;
						public startParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string): void;
						public getFilePath(): string;
						public hexDump(offset: number, len: number): string;
						public getStrictParse(): boolean;
						public getWidth2(): number;
						public getAt(): number;
						public startParsingMember(bytes: com.android.dx.util.ByteArray, offset: number, name: string, descriptor: string): void;
						public endParsingMember(bytes: com.android.dx.util.ByteArray, offset: number, name: string, descriptor: string, member: com.android.dx.cf.iface.Member): void;
						public print(s: string): void;
						public endParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string, param4: com.android.dx.cf.iface.Member): void;
						public println(s: string): void;
						public constructor(bytes: number[], out: java.io.PrintStream, filePath: string, args: com.android.dx.command.dump.Args);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module dump {
					export class BlockDumper extends com.android.dx.command.dump.BaseDumper {
						public static class: java.lang.Class<com.android.dx.command.dump.BlockDumper>;
						public classFile: com.android.dx.cf.direct.DirectClassFile;
						public suppressDump: boolean;
						public changeIndent(param0: number): void;
						public shouldDumpMethod(name: string): boolean;
						public startParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string): void;
						public dump(): void;
						public changeIndent(indentDelta: number): void;
						public startParsingMember(bytes: com.android.dx.util.ByteArray, offset: number, name: string, descriptor: string): void;
						public endParsingMember(bytes: com.android.dx.util.ByteArray, offset: number, name: string, descriptor: string, member: com.android.dx.cf.iface.Member): void;
						public endParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string, param4: com.android.dx.cf.iface.Member): void;
						public parsed(param0: com.android.dx.util.ByteArray, param1: number, param2: number, param3: string): void;
						public parsed(bytes: com.android.dx.util.ByteArray, offset: number, len: number, human: string): void;
						public static dump(bytes: number[], out: java.io.PrintStream, filePath: string, rop: boolean, args: com.android.dx.command.dump.Args): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module dump {
					export class ClassDumper extends com.android.dx.command.dump.BaseDumper {
						public static class: java.lang.Class<com.android.dx.command.dump.ClassDumper>;
						public changeIndent(param0: number): void;
						public startParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string): void;
						public dump(): void;
						public changeIndent(indentDelta: number): void;
						public static dump(bytes: number[], out: java.io.PrintStream, filePath: string, args: com.android.dx.command.dump.Args): void;
						public startParsingMember(bytes: com.android.dx.util.ByteArray, offset: number, name: string, descriptor: string): void;
						public endParsingMember(bytes: com.android.dx.util.ByteArray, offset: number, name: string, descriptor: string, member: com.android.dx.cf.iface.Member): void;
						public endParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string, param4: com.android.dx.cf.iface.Member): void;
						public parsed(param0: com.android.dx.util.ByteArray, param1: number, param2: number, param3: string): void;
						public parsed(bytes: com.android.dx.util.ByteArray, offset: number, len: number, human: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module dump {
					export class DotDumper extends java.lang.Object implements com.android.dx.cf.iface.ParseObserver {
						public static class: java.lang.Class<com.android.dx.command.dump.DotDumper>;
						public changeIndent(param0: number): void;
						public shouldDumpMethod(name: string): boolean;
						public startParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string): void;
						public changeIndent(indentDelta: number): void;
						public startParsingMember(bytes: com.android.dx.util.ByteArray, offset: number, name: string, descriptor: string): void;
						public endParsingMember(bytes: com.android.dx.util.ByteArray, offset: number, name: string, descriptor: string, member: com.android.dx.cf.iface.Member): void;
						public endParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string, param4: com.android.dx.cf.iface.Member): void;
						public parsed(param0: com.android.dx.util.ByteArray, param1: number, param2: number, param3: string): void;
						public parsed(bytes: com.android.dx.util.ByteArray, offset: number, len: number, human: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module dump {
					export class Main extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.command.dump.Main>;
						public static main(args: string[]): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module dump {
					export class SsaDumper extends com.android.dx.command.dump.BlockDumper {
						public static class: java.lang.Class<com.android.dx.command.dump.SsaDumper>;
						public changeIndent(param0: number): void;
						public startParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string): void;
						public dump(): void;
						public changeIndent(indentDelta: number): void;
						public static dump(bytes: number[], out: java.io.PrintStream, filePath: string, args: com.android.dx.command.dump.Args): void;
						public startParsingMember(bytes: com.android.dx.util.ByteArray, offset: number, name: string, descriptor: string): void;
						public endParsingMember(bytes: com.android.dx.util.ByteArray, offset: number, name: string, descriptor: string, member: com.android.dx.cf.iface.Member): void;
						public endParsingMember(param0: com.android.dx.util.ByteArray, param1: number, param2: string, param3: string, param4: com.android.dx.cf.iface.Member): void;
						public parsed(param0: com.android.dx.util.ByteArray, param1: number, param2: number, param3: string): void;
						public parsed(bytes: com.android.dx.util.ByteArray, offset: number, len: number, human: string): void;
						public static dump(bytes: number[], out: java.io.PrintStream, filePath: string, rop: boolean, args: com.android.dx.command.dump.Args): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module findusages {
					export class FindUsages extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.command.findusages.FindUsages>;
						public findUsages(): void;
						public constructor(dex: com.android.dex.Dex, declaredBy: string, memberName: string, out: java.io.PrintWriter);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module findusages {
					export class Main extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.command.findusages.Main>;
						public constructor();
						public static main(args: string[]): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module grep {
					export class Grep extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.command.grep.Grep>;
						public constructor(dex: com.android.dex.Dex, pattern: java.util.regex.Pattern, out: java.io.PrintWriter);
						public grep(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module command {
				export module grep {
					export class Main extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.command.grep.Main>;
						public constructor();
						public static main(args: string[]): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export class DexOptions extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.dex.DexOptions>;
					public static ALIGN_64BIT_REGS_SUPPORT: boolean;
					public ALIGN_64BIT_REGS_IN_OUTPUT_FINISHER: boolean;
					public minSdkVersion: number;
					public forceJumbo: boolean;
					public canUseInvokePolymorphic(): boolean;
					public constructor();
					public getMagic(): string;
					public canUseDefaultInterfaceMethods(): boolean;
					public canUseInvokeCustom(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module cf {
					export class AttributeTranslator extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.cf.AttributeTranslator>;
						public static getMethodAnnotations(method: com.android.dx.cf.iface.Method): com.android.dx.rop.annotation.Annotations;
						public static getParameterAnnotations(method: com.android.dx.cf.iface.Method): com.android.dx.rop.annotation.AnnotationsList;
						public static getClassAnnotations(cf: com.android.dx.cf.direct.DirectClassFile, args: com.android.dx.dex.cf.CfOptions): com.android.dx.rop.annotation.Annotations;
						public static getExceptions(method: com.android.dx.cf.iface.Method): com.android.dx.rop.type.TypeList;
						public static getAnnotations(attribs: com.android.dx.cf.iface.AttributeList): com.android.dx.rop.annotation.Annotations;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module cf {
					export class CfOptions extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.cf.CfOptions>;
						public positionInfo: number;
						public localInfo: boolean;
						public strictNameCheck: boolean;
						public optimize: boolean;
						public optimizeListFile: string;
						public dontOptimizeListFile: string;
						public statistics: boolean;
						public warn: java.io.PrintStream;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module cf {
					export class CfTranslator extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.cf.CfTranslator>;
						public static translate(context: com.android.dx.command.dexer.DxContext, cf: com.android.dx.cf.direct.DirectClassFile, bytes: number[], cfOptions: com.android.dx.dex.cf.CfOptions, dexOptions: com.android.dx.dex.DexOptions, dexFile: com.android.dx.dex.file.DexFile): com.android.dx.dex.file.ClassDefItem;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module cf {
					export class CodeStatistics extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.cf.CodeStatistics>;
						public runningDeltaRegisters: number;
						public runningDeltaInsns: number;
						public runningTotalInsns: number;
						public dexRunningDeltaRegisters: number;
						public dexRunningDeltaInsns: number;
						public dexRunningTotalInsns: number;
						public runningOriginalBytes: number;
						public updateDexStatistics(nonOptCode: com.android.dx.dex.code.DalvCode, code: com.android.dx.dex.code.DalvCode): void;
						public constructor();
						public dumpStatistics(out: java.io.PrintStream): void;
						public updateRopStatistics(nonOptRmeth: com.android.dx.rop.code.RopMethod, rmeth: com.android.dx.rop.code.RopMethod): void;
						public updateOriginalByteCount(count: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module cf {
					export class OptimizerOptions extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.cf.OptimizerOptions>;
						public constructor();
						public loadOptimizeLists(optimizeListFile: string, dontOptimizeListFile: string): void;
						public compareOptimizerStep(nonOptRmeth: com.android.dx.rop.code.RopMethod, paramSize: number, isStatic: boolean, args: com.android.dx.dex.cf.CfOptions, advice: com.android.dx.rop.code.TranslationAdvice, rmeth: com.android.dx.rop.code.RopMethod): void;
						public shouldOptimize(canonicalMethodName: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class ArrayData extends com.android.dx.dex.code.VariableSizeInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.ArrayData>;
						public codeSize(): number;
						public constructor(position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public constructor(position: com.android.dx.rop.code.SourcePosition, user: com.android.dx.dex.code.CodeAddress, values: java.util.ArrayList<com.android.dx.rop.cst.Constant>, arrayType: com.android.dx.rop.cst.Constant);
						public writeTo(param0: com.android.dx.util.AnnotatedOutput): void;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public writeTo(out: com.android.dx.util.AnnotatedOutput): void;
						public withRegisters(param0: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public withRegisters(registers: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public listingString0(param0: boolean): string;
						public argString(): string;
						public listingString0(noteIndices: boolean): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class BlockAddresses extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.code.BlockAddresses>;
						public getStart(label: number): com.android.dx.dex.code.CodeAddress;
						public constructor(method: com.android.dx.rop.code.RopMethod);
						public getEnd(label: number): com.android.dx.dex.code.CodeAddress;
						public getEnd(block: com.android.dx.rop.code.BasicBlock): com.android.dx.dex.code.CodeAddress;
						public getLast(label: number): com.android.dx.dex.code.CodeAddress;
						public getStart(block: com.android.dx.rop.code.BasicBlock): com.android.dx.dex.code.CodeAddress;
						public getLast(block: com.android.dx.rop.code.BasicBlock): com.android.dx.dex.code.CodeAddress;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class CatchBuilder extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.code.CatchBuilder>;
						/**
						 * Constructs a new instance of the com.android.dx.dex.code.CatchBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							build(): com.android.dx.dex.code.CatchTable;
							hasAnyCatches(): boolean;
							getCatchTypes(): java.util.HashSet<com.android.dx.rop.type.Type>;
						});
						public constructor();
						public build(): com.android.dx.dex.code.CatchTable;
						public getCatchTypes(): java.util.HashSet<com.android.dx.rop.type.Type>;
						public hasAnyCatches(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class CatchHandlerList extends com.android.dx.util.FixedSizeList implements java.lang.Comparable<com.android.dx.dex.code.CatchHandlerList>  {
						public static class: java.lang.Class<com.android.dx.dex.code.CatchHandlerList>;
						public static EMPTY: com.android.dx.dex.code.CatchHandlerList;
						public constructor();
						public toHuman(): string;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public set(n: number, exceptionType: com.android.dx.rop.cst.CstType, handler: number): void;
						public set(n: number, entry: com.android.dx.dex.code.CatchHandlerList.Entry): void;
						public constructor(size: number);
						public get(n: number): com.android.dx.dex.code.CatchHandlerList.Entry;
						public catchesAll(): boolean;
						public toHuman(prefix: string, header: string): string;
						public compareTo(other: com.android.dx.dex.code.CatchHandlerList): number;
						public constructor(mutable: boolean);
					}
					export module CatchHandlerList {
						export class Entry extends java.lang.Comparable<com.android.dx.dex.code.CatchHandlerList.Entry> {
							public static class: java.lang.Class<com.android.dx.dex.code.CatchHandlerList.Entry>;
							public constructor(exceptionType: com.android.dx.rop.cst.CstType, handler: number);
							public getExceptionType(): com.android.dx.rop.cst.CstType;
							public hashCode(): number;
							public equals(other: any): boolean;
							public compareTo(other: com.android.dx.dex.code.CatchHandlerList.Entry): number;
							public equals(obj: any): boolean;
							public getHandler(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class CatchTable extends com.android.dx.util.FixedSizeList implements java.lang.Comparable<com.android.dx.dex.code.CatchTable>  {
						public static class: java.lang.Class<com.android.dx.dex.code.CatchTable>;
						public static EMPTY: com.android.dx.dex.code.CatchTable;
						public constructor();
						public toHuman(): string;
						public compareTo(other: com.android.dx.dex.code.CatchTable): number;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public get(n: number): com.android.dx.dex.code.CatchTable.Entry;
						public constructor(size: number);
						public constructor(mutable: boolean);
						public set(n: number, entry: com.android.dx.dex.code.CatchTable.Entry): void;
					}
					export module CatchTable {
						export class Entry extends java.lang.Comparable<com.android.dx.dex.code.CatchTable.Entry> {
							public static class: java.lang.Class<com.android.dx.dex.code.CatchTable.Entry>;
							public hashCode(): number;
							public constructor(start: number, end: number, handlers: com.android.dx.dex.code.CatchHandlerList);
							public equals(other: any): boolean;
							public getStart(): number;
							public getEnd(): number;
							public equals(obj: any): boolean;
							public getHandlers(): com.android.dx.dex.code.CatchHandlerList;
							public compareTo(other: com.android.dx.dex.code.CatchTable.Entry): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class CodeAddress extends com.android.dx.dex.code.ZeroSizeInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.CodeAddress>;
						public constructor(position: com.android.dx.rop.code.SourcePosition, bindsClosely: boolean);
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public getBindsClosely(): boolean;
						public withRegisters(param0: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public withRegisters(registers: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public listingString0(param0: boolean): string;
						public constructor(position: com.android.dx.rop.code.SourcePosition);
						public argString(): string;
						public listingString0(noteIndices: boolean): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class CstInsn extends com.android.dx.dex.code.FixedSizeInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.CstInsn>;
						public cstString(): string;
						public hasClassIndex(): boolean;
						public withOpcode(opcode: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
						public hasIndex(): boolean;
						public setClassIndex(index: number): void;
						public withRegisters(param0: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public withRegisters(registers: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList, constant: com.android.dx.rop.cst.Constant);
						public getIndex(): number;
						public withOpcode(param0: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
						public getClassIndex(): number;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public getConstant(): com.android.dx.rop.cst.Constant;
						public cstComment(): string;
						public setIndex(index: number): void;
						public argString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class DalvCode extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.code.DalvCode>;
						public hasLocals(): boolean;
						public hasPositions(): boolean;
						public getLocals(): com.android.dx.dex.code.LocalList;
						public assignIndices(callback: com.android.dx.dex.code.DalvCode.AssignIndicesCallback): void;
						public getCatchTypes(): java.util.HashSet<com.android.dx.rop.type.Type>;
						public getInsns(): com.android.dx.dex.code.DalvInsnList;
						public getPositions(): com.android.dx.dex.code.PositionList;
						public hasAnyCatches(): boolean;
						public getInsnConstants(): java.util.HashSet<com.android.dx.rop.cst.Constant>;
						public getCatches(): com.android.dx.dex.code.CatchTable;
						public constructor(positionInfo: number, unprocessedInsns: com.android.dx.dex.code.OutputFinisher, unprocessedCatches: com.android.dx.dex.code.CatchBuilder);
					}
					export module DalvCode {
						export class AssignIndicesCallback extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.dex.code.DalvCode.AssignIndicesCallback>;
							/**
							 * Constructs a new instance of the com.android.dx.dex.code.DalvCode$AssignIndicesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getIndex(param0: com.android.dx.rop.cst.Constant): number;
							});
							public constructor();
							public getIndex(param0: com.android.dx.rop.cst.Constant): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export abstract class DalvInsn extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.code.DalvInsn>;
						public getMinimumRegisterRequirement(compatRegs: java.util.BitSet): number;
						public cstString(): string;
						public expandedVersion(compatRegs: java.util.BitSet): com.android.dx.dex.code.DalvInsn;
						public withRegisters(param0: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public hasResult(): boolean;
						public withOpcode(param0: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
						public expandedPrefix(compatRegs: java.util.BitSet): com.android.dx.dex.code.DalvInsn;
						public setAddress(address: number): void;
						public codeSize(): number;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public cstComment(): string;
						public getRegisters(): com.android.dx.rop.code.RegisterSpecList;
						public identifierString(): string;
						public argString(): string;
						public getOpcode(): com.android.dx.dex.code.Dop;
						public withRegisterOffset(param0: number): com.android.dx.dex.code.DalvInsn;
						public getPosition(): com.android.dx.rop.code.SourcePosition;
						public getAddress(): number;
						public withMapper(mapper: com.android.dx.ssa.RegisterMapper): com.android.dx.dex.code.DalvInsn;
						public listingString0(param0: boolean): string;
						public toString(): string;
						public writeTo(param0: com.android.dx.util.AnnotatedOutput): void;
						public listingString(prefix: string, width: number, noteIndices: boolean): string;
						public getNextAddress(): number;
						public getLowRegVersion(): com.android.dx.dex.code.DalvInsn;
						public static makeMove(position: com.android.dx.rop.code.SourcePosition, dest: com.android.dx.rop.code.RegisterSpec, src: com.android.dx.rop.code.RegisterSpec): com.android.dx.dex.code.SimpleInsn;
						public expandedSuffix(compatRegs: java.util.BitSet): com.android.dx.dex.code.DalvInsn;
						public hasAddress(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class DalvInsnList extends com.android.dx.util.FixedSizeList {
						public static class: java.lang.Class<com.android.dx.dex.code.DalvInsnList>;
						public constructor();
						public get(n: number): com.android.dx.dex.code.DalvInsn;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public debugPrint(out: java.io.OutputStream, prefix: string, verbose: boolean): void;
						public constructor(mutable: boolean);
						public debugPrint(out: java.io.Writer, prefix: string, verbose: boolean): void;
						public codeSize(): number;
						public toHuman(): string;
						public static makeImmutable(list: java.util.ArrayList<com.android.dx.dex.code.DalvInsn>, regCount: number): com.android.dx.dex.code.DalvInsnList;
						public writeTo(out: com.android.dx.util.AnnotatedOutput): void;
						public constructor(size: number);
						public constructor(size: number, regCount: number);
						public getOutsSize(): number;
						public set(n: number, insn: com.android.dx.dex.code.DalvInsn): void;
						public getRegistersSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class Dop extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.code.Dop>;
						public getFormat(): com.android.dx.dex.code.InsnFormat;
						public getOpcode(): number;
						public getOppositeTest(): com.android.dx.dex.code.Dop;
						public getFamily(): number;
						public getName(): string;
						public toString(): string;
						public hasResult(): boolean;
						public constructor(opcode: number, family: number, nextOpcode: number, format: com.android.dx.dex.code.InsnFormat, hasResult: boolean);
						public getNextOpcode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class Dops extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.code.Dops>;
						public static SPECIAL_FORMAT: com.android.dx.dex.code.Dop;
						public static NOP: com.android.dx.dex.code.Dop;
						public static MOVE: com.android.dx.dex.code.Dop;
						public static MOVE_FROM16: com.android.dx.dex.code.Dop;
						public static MOVE_16: com.android.dx.dex.code.Dop;
						public static MOVE_WIDE: com.android.dx.dex.code.Dop;
						public static MOVE_WIDE_FROM16: com.android.dx.dex.code.Dop;
						public static MOVE_WIDE_16: com.android.dx.dex.code.Dop;
						public static MOVE_OBJECT: com.android.dx.dex.code.Dop;
						public static MOVE_OBJECT_FROM16: com.android.dx.dex.code.Dop;
						public static MOVE_OBJECT_16: com.android.dx.dex.code.Dop;
						public static MOVE_RESULT: com.android.dx.dex.code.Dop;
						public static MOVE_RESULT_WIDE: com.android.dx.dex.code.Dop;
						public static MOVE_RESULT_OBJECT: com.android.dx.dex.code.Dop;
						public static MOVE_EXCEPTION: com.android.dx.dex.code.Dop;
						public static RETURN_VOID: com.android.dx.dex.code.Dop;
						public static RETURN: com.android.dx.dex.code.Dop;
						public static RETURN_WIDE: com.android.dx.dex.code.Dop;
						public static RETURN_OBJECT: com.android.dx.dex.code.Dop;
						public static CONST_4: com.android.dx.dex.code.Dop;
						public static CONST_16: com.android.dx.dex.code.Dop;
						public static CONST: com.android.dx.dex.code.Dop;
						public static CONST_HIGH16: com.android.dx.dex.code.Dop;
						public static CONST_WIDE_16: com.android.dx.dex.code.Dop;
						public static CONST_WIDE_32: com.android.dx.dex.code.Dop;
						public static CONST_WIDE: com.android.dx.dex.code.Dop;
						public static CONST_WIDE_HIGH16: com.android.dx.dex.code.Dop;
						public static CONST_STRING: com.android.dx.dex.code.Dop;
						public static CONST_STRING_JUMBO: com.android.dx.dex.code.Dop;
						public static CONST_CLASS: com.android.dx.dex.code.Dop;
						public static MONITOR_ENTER: com.android.dx.dex.code.Dop;
						public static MONITOR_EXIT: com.android.dx.dex.code.Dop;
						public static CHECK_CAST: com.android.dx.dex.code.Dop;
						public static INSTANCE_OF: com.android.dx.dex.code.Dop;
						public static ARRAY_LENGTH: com.android.dx.dex.code.Dop;
						public static NEW_INSTANCE: com.android.dx.dex.code.Dop;
						public static NEW_ARRAY: com.android.dx.dex.code.Dop;
						public static FILLED_NEW_ARRAY: com.android.dx.dex.code.Dop;
						public static FILLED_NEW_ARRAY_RANGE: com.android.dx.dex.code.Dop;
						public static FILL_ARRAY_DATA: com.android.dx.dex.code.Dop;
						public static THROW: com.android.dx.dex.code.Dop;
						public static GOTO: com.android.dx.dex.code.Dop;
						public static GOTO_16: com.android.dx.dex.code.Dop;
						public static GOTO_32: com.android.dx.dex.code.Dop;
						public static PACKED_SWITCH: com.android.dx.dex.code.Dop;
						public static SPARSE_SWITCH: com.android.dx.dex.code.Dop;
						public static CMPL_FLOAT: com.android.dx.dex.code.Dop;
						public static CMPG_FLOAT: com.android.dx.dex.code.Dop;
						public static CMPL_DOUBLE: com.android.dx.dex.code.Dop;
						public static CMPG_DOUBLE: com.android.dx.dex.code.Dop;
						public static CMP_LONG: com.android.dx.dex.code.Dop;
						public static IF_EQ: com.android.dx.dex.code.Dop;
						public static IF_NE: com.android.dx.dex.code.Dop;
						public static IF_LT: com.android.dx.dex.code.Dop;
						public static IF_GE: com.android.dx.dex.code.Dop;
						public static IF_GT: com.android.dx.dex.code.Dop;
						public static IF_LE: com.android.dx.dex.code.Dop;
						public static IF_EQZ: com.android.dx.dex.code.Dop;
						public static IF_NEZ: com.android.dx.dex.code.Dop;
						public static IF_LTZ: com.android.dx.dex.code.Dop;
						public static IF_GEZ: com.android.dx.dex.code.Dop;
						public static IF_GTZ: com.android.dx.dex.code.Dop;
						public static IF_LEZ: com.android.dx.dex.code.Dop;
						public static AGET: com.android.dx.dex.code.Dop;
						public static AGET_WIDE: com.android.dx.dex.code.Dop;
						public static AGET_OBJECT: com.android.dx.dex.code.Dop;
						public static AGET_BOOLEAN: com.android.dx.dex.code.Dop;
						public static AGET_BYTE: com.android.dx.dex.code.Dop;
						public static AGET_CHAR: com.android.dx.dex.code.Dop;
						public static AGET_SHORT: com.android.dx.dex.code.Dop;
						public static APUT: com.android.dx.dex.code.Dop;
						public static APUT_WIDE: com.android.dx.dex.code.Dop;
						public static APUT_OBJECT: com.android.dx.dex.code.Dop;
						public static APUT_BOOLEAN: com.android.dx.dex.code.Dop;
						public static APUT_BYTE: com.android.dx.dex.code.Dop;
						public static APUT_CHAR: com.android.dx.dex.code.Dop;
						public static APUT_SHORT: com.android.dx.dex.code.Dop;
						public static IGET: com.android.dx.dex.code.Dop;
						public static IGET_WIDE: com.android.dx.dex.code.Dop;
						public static IGET_OBJECT: com.android.dx.dex.code.Dop;
						public static IGET_BOOLEAN: com.android.dx.dex.code.Dop;
						public static IGET_BYTE: com.android.dx.dex.code.Dop;
						public static IGET_CHAR: com.android.dx.dex.code.Dop;
						public static IGET_SHORT: com.android.dx.dex.code.Dop;
						public static IPUT: com.android.dx.dex.code.Dop;
						public static IPUT_WIDE: com.android.dx.dex.code.Dop;
						public static IPUT_OBJECT: com.android.dx.dex.code.Dop;
						public static IPUT_BOOLEAN: com.android.dx.dex.code.Dop;
						public static IPUT_BYTE: com.android.dx.dex.code.Dop;
						public static IPUT_CHAR: com.android.dx.dex.code.Dop;
						public static IPUT_SHORT: com.android.dx.dex.code.Dop;
						public static SGET: com.android.dx.dex.code.Dop;
						public static SGET_WIDE: com.android.dx.dex.code.Dop;
						public static SGET_OBJECT: com.android.dx.dex.code.Dop;
						public static SGET_BOOLEAN: com.android.dx.dex.code.Dop;
						public static SGET_BYTE: com.android.dx.dex.code.Dop;
						public static SGET_CHAR: com.android.dx.dex.code.Dop;
						public static SGET_SHORT: com.android.dx.dex.code.Dop;
						public static SPUT: com.android.dx.dex.code.Dop;
						public static SPUT_WIDE: com.android.dx.dex.code.Dop;
						public static SPUT_OBJECT: com.android.dx.dex.code.Dop;
						public static SPUT_BOOLEAN: com.android.dx.dex.code.Dop;
						public static SPUT_BYTE: com.android.dx.dex.code.Dop;
						public static SPUT_CHAR: com.android.dx.dex.code.Dop;
						public static SPUT_SHORT: com.android.dx.dex.code.Dop;
						public static INVOKE_VIRTUAL: com.android.dx.dex.code.Dop;
						public static INVOKE_SUPER: com.android.dx.dex.code.Dop;
						public static INVOKE_DIRECT: com.android.dx.dex.code.Dop;
						public static INVOKE_STATIC: com.android.dx.dex.code.Dop;
						public static INVOKE_INTERFACE: com.android.dx.dex.code.Dop;
						public static INVOKE_VIRTUAL_RANGE: com.android.dx.dex.code.Dop;
						public static INVOKE_SUPER_RANGE: com.android.dx.dex.code.Dop;
						public static INVOKE_DIRECT_RANGE: com.android.dx.dex.code.Dop;
						public static INVOKE_STATIC_RANGE: com.android.dx.dex.code.Dop;
						public static INVOKE_INTERFACE_RANGE: com.android.dx.dex.code.Dop;
						public static NEG_INT: com.android.dx.dex.code.Dop;
						public static NOT_INT: com.android.dx.dex.code.Dop;
						public static NEG_LONG: com.android.dx.dex.code.Dop;
						public static NOT_LONG: com.android.dx.dex.code.Dop;
						public static NEG_FLOAT: com.android.dx.dex.code.Dop;
						public static NEG_DOUBLE: com.android.dx.dex.code.Dop;
						public static INT_TO_LONG: com.android.dx.dex.code.Dop;
						public static INT_TO_FLOAT: com.android.dx.dex.code.Dop;
						public static INT_TO_DOUBLE: com.android.dx.dex.code.Dop;
						public static LONG_TO_INT: com.android.dx.dex.code.Dop;
						public static LONG_TO_FLOAT: com.android.dx.dex.code.Dop;
						public static LONG_TO_DOUBLE: com.android.dx.dex.code.Dop;
						public static FLOAT_TO_INT: com.android.dx.dex.code.Dop;
						public static FLOAT_TO_LONG: com.android.dx.dex.code.Dop;
						public static FLOAT_TO_DOUBLE: com.android.dx.dex.code.Dop;
						public static DOUBLE_TO_INT: com.android.dx.dex.code.Dop;
						public static DOUBLE_TO_LONG: com.android.dx.dex.code.Dop;
						public static DOUBLE_TO_FLOAT: com.android.dx.dex.code.Dop;
						public static INT_TO_BYTE: com.android.dx.dex.code.Dop;
						public static INT_TO_CHAR: com.android.dx.dex.code.Dop;
						public static INT_TO_SHORT: com.android.dx.dex.code.Dop;
						public static ADD_INT: com.android.dx.dex.code.Dop;
						public static SUB_INT: com.android.dx.dex.code.Dop;
						public static MUL_INT: com.android.dx.dex.code.Dop;
						public static DIV_INT: com.android.dx.dex.code.Dop;
						public static REM_INT: com.android.dx.dex.code.Dop;
						public static AND_INT: com.android.dx.dex.code.Dop;
						public static OR_INT: com.android.dx.dex.code.Dop;
						public static XOR_INT: com.android.dx.dex.code.Dop;
						public static SHL_INT: com.android.dx.dex.code.Dop;
						public static SHR_INT: com.android.dx.dex.code.Dop;
						public static USHR_INT: com.android.dx.dex.code.Dop;
						public static ADD_LONG: com.android.dx.dex.code.Dop;
						public static SUB_LONG: com.android.dx.dex.code.Dop;
						public static MUL_LONG: com.android.dx.dex.code.Dop;
						public static DIV_LONG: com.android.dx.dex.code.Dop;
						public static REM_LONG: com.android.dx.dex.code.Dop;
						public static AND_LONG: com.android.dx.dex.code.Dop;
						public static OR_LONG: com.android.dx.dex.code.Dop;
						public static XOR_LONG: com.android.dx.dex.code.Dop;
						public static SHL_LONG: com.android.dx.dex.code.Dop;
						public static SHR_LONG: com.android.dx.dex.code.Dop;
						public static USHR_LONG: com.android.dx.dex.code.Dop;
						public static ADD_FLOAT: com.android.dx.dex.code.Dop;
						public static SUB_FLOAT: com.android.dx.dex.code.Dop;
						public static MUL_FLOAT: com.android.dx.dex.code.Dop;
						public static DIV_FLOAT: com.android.dx.dex.code.Dop;
						public static REM_FLOAT: com.android.dx.dex.code.Dop;
						public static ADD_DOUBLE: com.android.dx.dex.code.Dop;
						public static SUB_DOUBLE: com.android.dx.dex.code.Dop;
						public static MUL_DOUBLE: com.android.dx.dex.code.Dop;
						public static DIV_DOUBLE: com.android.dx.dex.code.Dop;
						public static REM_DOUBLE: com.android.dx.dex.code.Dop;
						public static ADD_INT_2ADDR: com.android.dx.dex.code.Dop;
						public static SUB_INT_2ADDR: com.android.dx.dex.code.Dop;
						public static MUL_INT_2ADDR: com.android.dx.dex.code.Dop;
						public static DIV_INT_2ADDR: com.android.dx.dex.code.Dop;
						public static REM_INT_2ADDR: com.android.dx.dex.code.Dop;
						public static AND_INT_2ADDR: com.android.dx.dex.code.Dop;
						public static OR_INT_2ADDR: com.android.dx.dex.code.Dop;
						public static XOR_INT_2ADDR: com.android.dx.dex.code.Dop;
						public static SHL_INT_2ADDR: com.android.dx.dex.code.Dop;
						public static SHR_INT_2ADDR: com.android.dx.dex.code.Dop;
						public static USHR_INT_2ADDR: com.android.dx.dex.code.Dop;
						public static ADD_LONG_2ADDR: com.android.dx.dex.code.Dop;
						public static SUB_LONG_2ADDR: com.android.dx.dex.code.Dop;
						public static MUL_LONG_2ADDR: com.android.dx.dex.code.Dop;
						public static DIV_LONG_2ADDR: com.android.dx.dex.code.Dop;
						public static REM_LONG_2ADDR: com.android.dx.dex.code.Dop;
						public static AND_LONG_2ADDR: com.android.dx.dex.code.Dop;
						public static OR_LONG_2ADDR: com.android.dx.dex.code.Dop;
						public static XOR_LONG_2ADDR: com.android.dx.dex.code.Dop;
						public static SHL_LONG_2ADDR: com.android.dx.dex.code.Dop;
						public static SHR_LONG_2ADDR: com.android.dx.dex.code.Dop;
						public static USHR_LONG_2ADDR: com.android.dx.dex.code.Dop;
						public static ADD_FLOAT_2ADDR: com.android.dx.dex.code.Dop;
						public static SUB_FLOAT_2ADDR: com.android.dx.dex.code.Dop;
						public static MUL_FLOAT_2ADDR: com.android.dx.dex.code.Dop;
						public static DIV_FLOAT_2ADDR: com.android.dx.dex.code.Dop;
						public static REM_FLOAT_2ADDR: com.android.dx.dex.code.Dop;
						public static ADD_DOUBLE_2ADDR: com.android.dx.dex.code.Dop;
						public static SUB_DOUBLE_2ADDR: com.android.dx.dex.code.Dop;
						public static MUL_DOUBLE_2ADDR: com.android.dx.dex.code.Dop;
						public static DIV_DOUBLE_2ADDR: com.android.dx.dex.code.Dop;
						public static REM_DOUBLE_2ADDR: com.android.dx.dex.code.Dop;
						public static ADD_INT_LIT16: com.android.dx.dex.code.Dop;
						public static RSUB_INT: com.android.dx.dex.code.Dop;
						public static MUL_INT_LIT16: com.android.dx.dex.code.Dop;
						public static DIV_INT_LIT16: com.android.dx.dex.code.Dop;
						public static REM_INT_LIT16: com.android.dx.dex.code.Dop;
						public static AND_INT_LIT16: com.android.dx.dex.code.Dop;
						public static OR_INT_LIT16: com.android.dx.dex.code.Dop;
						public static XOR_INT_LIT16: com.android.dx.dex.code.Dop;
						public static ADD_INT_LIT8: com.android.dx.dex.code.Dop;
						public static RSUB_INT_LIT8: com.android.dx.dex.code.Dop;
						public static MUL_INT_LIT8: com.android.dx.dex.code.Dop;
						public static DIV_INT_LIT8: com.android.dx.dex.code.Dop;
						public static REM_INT_LIT8: com.android.dx.dex.code.Dop;
						public static AND_INT_LIT8: com.android.dx.dex.code.Dop;
						public static OR_INT_LIT8: com.android.dx.dex.code.Dop;
						public static XOR_INT_LIT8: com.android.dx.dex.code.Dop;
						public static SHL_INT_LIT8: com.android.dx.dex.code.Dop;
						public static SHR_INT_LIT8: com.android.dx.dex.code.Dop;
						public static USHR_INT_LIT8: com.android.dx.dex.code.Dop;
						public static INVOKE_POLYMORPHIC: com.android.dx.dex.code.Dop;
						public static INVOKE_POLYMORPHIC_RANGE: com.android.dx.dex.code.Dop;
						public static INVOKE_CUSTOM: com.android.dx.dex.code.Dop;
						public static INVOKE_CUSTOM_RANGE: com.android.dx.dex.code.Dop;
						public static getNextOrNull(opcode: com.android.dx.dex.code.Dop, options: com.android.dx.dex.DexOptions): com.android.dx.dex.code.Dop;
						public static get(opcode: number): com.android.dx.dex.code.Dop;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export abstract class FixedSizeInsn extends com.android.dx.dex.code.DalvInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.FixedSizeInsn>;
						public codeSize(): number;
						public withRegisterOffset(param0: number): com.android.dx.dex.code.DalvInsn;
						public writeTo(param0: com.android.dx.util.AnnotatedOutput): void;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public writeTo(out: com.android.dx.util.AnnotatedOutput): void;
						public listingString0(param0: boolean): string;
						public withRegisterOffset(delta: number): com.android.dx.dex.code.DalvInsn;
						public listingString0(noteIndices: boolean): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class HighRegisterPrefix extends com.android.dx.dex.code.VariableSizeInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.HighRegisterPrefix>;
						public codeSize(): number;
						public constructor(position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public writeTo(param0: com.android.dx.util.AnnotatedOutput): void;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public writeTo(out: com.android.dx.util.AnnotatedOutput): void;
						public withRegisters(param0: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public withRegisters(registers: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public listingString0(param0: boolean): string;
						public argString(): string;
						public listingString0(noteIndices: boolean): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export abstract class InsnFormat extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.code.InsnFormat>;
						public static ALLOW_EXTENDED_OPCODES: boolean;
						public static argIndex(insn: com.android.dx.dex.code.DalvInsn): number;
						public static unsignedFitsInNibble(value: number): boolean;
						public static write(out: com.android.dx.util.AnnotatedOutput, c0: number, c1: number, c2: number, c3: number, c4: number): void;
						public static write(out: com.android.dx.util.AnnotatedOutput, c0: number, c1c2: number, c3: number): void;
						public static signedFitsInShort(value: number): boolean;
						public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
						public static signedFitsInByte(value: number): boolean;
						public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
						public static branchComment(insn: com.android.dx.dex.code.DalvInsn): string;
						public codeSize(): number;
						public static codeUnit(n0: number, n1: number, n2: number, n3: number): number;
						public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
						public static unsignedFitsInByte(value: number): boolean;
						public static branchString(insn: com.android.dx.dex.code.DalvInsn): string;
						public static write(out: com.android.dx.util.AnnotatedOutput, c0: number, c1: number): void;
						public static makeByte(low: number, high: number): number;
						public constructor();
						public static write(out: com.android.dx.util.AnnotatedOutput, c0: number, c1c2: number): void;
						public static literalBitsComment(value: com.android.dx.rop.cst.CstLiteralBits, width: number): string;
						public static literalBitsString(value: com.android.dx.rop.cst.CstLiteralBits): string;
						public static write(out: com.android.dx.util.AnnotatedOutput, c0: number): void;
						public static write(out: com.android.dx.util.AnnotatedOutput, c0: number, c1: number, c2: number): void;
						public static write(out: com.android.dx.util.AnnotatedOutput, c0: number, c1c2c3c4: number): void;
						public static regRangeString(list: com.android.dx.rop.code.RegisterSpecList): string;
						public static signedFitsInNibble(value: number): boolean;
						public static codeUnit(low: number, high: number): number;
						public branchFits(insn: com.android.dx.dex.code.TargetInsn): boolean;
						public static write(out: com.android.dx.util.AnnotatedOutput, c0: number, c1c2: number, c3: number, c4: number): void;
						public listingString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
						public static regListString(list: com.android.dx.rop.code.RegisterSpecList): string;
						public static opcodeUnit(insn: com.android.dx.dex.code.DalvInsn, arg: number): number;
						public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
						public static opcodeUnit(insn: com.android.dx.dex.code.DalvInsn): number;
						public static unsignedFitsInShort(value: number): boolean;
						public static isRegListSequential(list: com.android.dx.rop.code.RegisterSpecList): boolean;
						public static write(out: com.android.dx.util.AnnotatedOutput, c0: number, c1: number, c2: number, c3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class LocalList extends com.android.dx.util.FixedSizeList {
						public static class: java.lang.Class<com.android.dx.dex.code.LocalList>;
						public static EMPTY: com.android.dx.dex.code.LocalList;
						public constructor();
						public toHuman(): string;
						public set(n: number, entry: com.android.dx.dex.code.LocalList.Entry): void;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public get(n: number): com.android.dx.dex.code.LocalList.Entry;
						public constructor(size: number);
						public static make(insns: com.android.dx.dex.code.DalvInsnList): com.android.dx.dex.code.LocalList;
						public debugPrint(out: java.io.PrintStream, prefix: string): void;
						public constructor(mutable: boolean);
					}
					export module LocalList {
						export class Disposition {
							public static class: java.lang.Class<com.android.dx.dex.code.LocalList.Disposition>;
							public static START: com.android.dx.dex.code.LocalList.Disposition;
							public static END_SIMPLY: com.android.dx.dex.code.LocalList.Disposition;
							public static END_REPLACED: com.android.dx.dex.code.LocalList.Disposition;
							public static END_MOVED: com.android.dx.dex.code.LocalList.Disposition;
							public static END_CLOBBERED_BY_PREV: com.android.dx.dex.code.LocalList.Disposition;
							public static END_CLOBBERED_BY_NEXT: com.android.dx.dex.code.LocalList.Disposition;
							public static valueOf(name: string): com.android.dx.dex.code.LocalList.Disposition;
							public static values(): com.android.dx.dex.code.LocalList.Disposition[];
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						}
						export class Entry extends java.lang.Comparable<com.android.dx.dex.code.LocalList.Entry> {
							public static class: java.lang.Class<com.android.dx.dex.code.LocalList.Entry>;
							public compareTo(other: com.android.dx.dex.code.LocalList.Entry): number;
							public getRegisterSpec(): com.android.dx.rop.code.RegisterSpec;
							public getDisposition(): com.android.dx.dex.code.LocalList.Disposition;
							public matches(other: com.android.dx.dex.code.LocalList.Entry): boolean;
							public constructor(address: number, disposition: com.android.dx.dex.code.LocalList.Disposition, spec: com.android.dx.rop.code.RegisterSpec);
							public getSignature(): com.android.dx.rop.cst.CstString;
							public equals(obj: any): boolean;
							public toString(): string;
							public getAddress(): number;
							public getType(): com.android.dx.rop.cst.CstType;
							public isStart(): boolean;
							public equals(other: any): boolean;
							public getName(): com.android.dx.rop.cst.CstString;
							public matches(otherSpec: com.android.dx.rop.code.RegisterSpec): boolean;
							public withDisposition(disposition: com.android.dx.dex.code.LocalList.Disposition): com.android.dx.dex.code.LocalList.Entry;
							public getRegister(): number;
						}
						export class MakeState extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.dex.code.LocalList.MakeState>;
							public constructor(initialSize: number);
							public startLocal(address: number, startedLocal: com.android.dx.rop.code.RegisterSpec): void;
							public endLocal(address: number, endedLocal: com.android.dx.rop.code.RegisterSpec, disposition: com.android.dx.dex.code.LocalList.Disposition): void;
							public finish(): com.android.dx.dex.code.LocalList;
							public snapshot(address: number, specs: com.android.dx.rop.code.RegisterSpecSet): void;
							public endLocal(address: number, endedLocal: com.android.dx.rop.code.RegisterSpec): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class LocalSnapshot extends com.android.dx.dex.code.ZeroSizeInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.LocalSnapshot>;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public getLocals(): com.android.dx.rop.code.RegisterSpecSet;
						public withRegisters(param0: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public withRegisters(registers: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public listingString0(param0: boolean): string;
						public withMapper(mapper: com.android.dx.ssa.RegisterMapper): com.android.dx.dex.code.DalvInsn;
						public constructor(position: com.android.dx.rop.code.SourcePosition);
						public withRegisterOffset(delta: number): com.android.dx.dex.code.DalvInsn;
						public argString(): string;
						public constructor(position: com.android.dx.rop.code.SourcePosition, locals: com.android.dx.rop.code.RegisterSpecSet);
						public listingString0(noteIndices: boolean): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class LocalStart extends com.android.dx.dex.code.ZeroSizeInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.LocalStart>;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public constructor(position: com.android.dx.rop.code.SourcePosition, local: com.android.dx.rop.code.RegisterSpec);
						public withRegisters(param0: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public static localString(spec: com.android.dx.rop.code.RegisterSpec): string;
						public withRegisters(registers: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public listingString0(param0: boolean): string;
						public withMapper(mapper: com.android.dx.ssa.RegisterMapper): com.android.dx.dex.code.DalvInsn;
						public constructor(position: com.android.dx.rop.code.SourcePosition);
						public withRegisterOffset(delta: number): com.android.dx.dex.code.DalvInsn;
						public argString(): string;
						public getLocal(): com.android.dx.rop.code.RegisterSpec;
						public listingString0(noteIndices: boolean): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class MultiCstInsn extends com.android.dx.dex.code.FixedSizeInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.MultiCstInsn>;
						public getNumberOfConstants(): number;
						public cstString(): string;
						public hasClassIndex(): boolean;
						public withOpcode(opcode: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
						public setClassIndex(index: number): void;
						public withRegisters(param0: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public withRegisters(registers: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public setIndex(position: number, index: number): void;
						public withOpcode(param0: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList, constants: com.android.dx.rop.cst.Constant[]);
						public getClassIndex(): number;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public cstComment(): string;
						public getConstant(position: number): com.android.dx.rop.cst.Constant;
						public getIndex(position: number): number;
						public hasIndex(position: number): boolean;
						public argString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class OddSpacer extends com.android.dx.dex.code.VariableSizeInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.OddSpacer>;
						public codeSize(): number;
						public constructor(position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public writeTo(param0: com.android.dx.util.AnnotatedOutput): void;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public writeTo(out: com.android.dx.util.AnnotatedOutput): void;
						public withRegisters(param0: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public withRegisters(registers: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public listingString0(param0: boolean): string;
						public constructor(position: com.android.dx.rop.code.SourcePosition);
						public argString(): string;
						public listingString0(noteIndices: boolean): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class OutputCollector extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.code.OutputCollector>;
						public add(insn: com.android.dx.dex.code.DalvInsn): void;
						public getFinisher(): com.android.dx.dex.code.OutputFinisher;
						public reverseBranch(which: number, newTarget: com.android.dx.dex.code.CodeAddress): void;
						public addSuffix(insn: com.android.dx.dex.code.DalvInsn): void;
						public constructor(dexOptions: com.android.dx.dex.DexOptions, initialCapacity: number, suffixInitialCapacity: number, regCount: number, paramSize: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class OutputFinisher extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.code.OutputFinisher>;
						public add(insn: com.android.dx.dex.code.DalvInsn): void;
						public constructor(dexOptions: com.android.dx.dex.DexOptions, initialCapacity: number, regCount: number, paramSize: number);
						public hasAnyPositionInfo(): boolean;
						public assignIndices(callback: com.android.dx.dex.code.DalvCode.AssignIndicesCallback): void;
						public finishProcessingAndGetList(): com.android.dx.dex.code.DalvInsnList;
						public reverseBranch(which: number, newTarget: com.android.dx.dex.code.CodeAddress): void;
						public hasAnyLocalInfo(): boolean;
						public insert(at: number, insn: com.android.dx.dex.code.DalvInsn): void;
						public getAllConstants(): java.util.HashSet<com.android.dx.rop.cst.Constant>;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class PositionList extends com.android.dx.util.FixedSizeList {
						public static class: java.lang.Class<com.android.dx.dex.code.PositionList>;
						public static EMPTY: com.android.dx.dex.code.PositionList;
						public static NONE: number;
						public static LINES: number;
						public static IMPORTANT: number;
						public get(n: number): com.android.dx.dex.code.PositionList.Entry;
						public constructor();
						public toHuman(): string;
						public set(n: number, entry: com.android.dx.dex.code.PositionList.Entry): void;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public constructor(size: number);
						public static make(insns: com.android.dx.dex.code.DalvInsnList, howMuch: number): com.android.dx.dex.code.PositionList;
						public constructor(mutable: boolean);
					}
					export module PositionList {
						export class Entry extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.dex.code.PositionList.Entry>;
							public getAddress(): number;
							public getPosition(): com.android.dx.rop.code.SourcePosition;
							public constructor(address: number, position: com.android.dx.rop.code.SourcePosition);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class RopToDop extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.code.RopToDop>;
						public static dopFor(insn: com.android.dx.rop.code.Insn): com.android.dx.dex.code.Dop;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class RopTranslator extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.code.RopTranslator>;
						public static translate(method: com.android.dx.rop.code.RopMethod, positionInfo: number, locals: com.android.dx.rop.code.LocalVariableInfo, paramSize: number, dexOptions: com.android.dx.dex.DexOptions): com.android.dx.dex.code.DalvCode;
					}
					export module RopTranslator {
						export class LocalVariableAwareTranslationVisitor extends com.android.dx.dex.code.RopTranslator.TranslationVisitor {
							public static class: java.lang.Class<com.android.dx.dex.code.RopTranslator.LocalVariableAwareTranslationVisitor>;
							public visitInvokePolymorphicInsn(param0: com.android.dx.rop.code.InvokePolymorphicInsn): void;
							public visitThrowingCstInsn(param0: com.android.dx.rop.code.ThrowingCstInsn): void;
							public visitPlainInsn(param0: com.android.dx.rop.code.PlainInsn): void;
							public visitPlainInsn(insn: com.android.dx.rop.code.PlainInsn): void;
							public visitSwitchInsn(insn: com.android.dx.rop.code.SwitchInsn): void;
							public visitThrowingInsn(insn: com.android.dx.rop.code.ThrowingInsn): void;
							public visitThrowingInsn(param0: com.android.dx.rop.code.ThrowingInsn): void;
							public visitFillArrayDataInsn(insn: com.android.dx.rop.code.FillArrayDataInsn): void;
							public visitPlainCstInsn(insn: com.android.dx.rop.code.PlainCstInsn): void;
							public constructor(param0: com.android.dx.dex.code.RopTranslator, output: com.android.dx.dex.code.OutputCollector, locals: com.android.dx.rop.code.LocalVariableInfo);
							public visitInvokePolymorphicInsn(insn: com.android.dx.rop.code.InvokePolymorphicInsn): void;
							public visitThrowingCstInsn(insn: com.android.dx.rop.code.ThrowingCstInsn): void;
							public visitPlainCstInsn(param0: com.android.dx.rop.code.PlainCstInsn): void;
							public constructor(param0: com.android.dx.dex.code.RopTranslator, output: com.android.dx.dex.code.OutputCollector);
							public addIntroductionIfNecessary(insn: com.android.dx.rop.code.Insn): void;
							public visitFillArrayDataInsn(param0: com.android.dx.rop.code.FillArrayDataInsn): void;
							public visitSwitchInsn(param0: com.android.dx.rop.code.SwitchInsn): void;
						}
						export class TranslationVisitor extends java.lang.Object implements com.android.dx.rop.code.Insn.Visitor {
							public static class: java.lang.Class<com.android.dx.dex.code.RopTranslator.TranslationVisitor>;
							public addOutput(insn: com.android.dx.dex.code.DalvInsn): void;
							public visitInvokePolymorphicInsn(param0: com.android.dx.rop.code.InvokePolymorphicInsn): void;
							public visitThrowingCstInsn(param0: com.android.dx.rop.code.ThrowingCstInsn): void;
							public visitPlainInsn(param0: com.android.dx.rop.code.PlainInsn): void;
							public visitPlainInsn(insn: com.android.dx.rop.code.PlainInsn): void;
							public visitSwitchInsn(insn: com.android.dx.rop.code.SwitchInsn): void;
							public visitThrowingInsn(insn: com.android.dx.rop.code.ThrowingInsn): void;
							public visitThrowingInsn(param0: com.android.dx.rop.code.ThrowingInsn): void;
							public visitFillArrayDataInsn(insn: com.android.dx.rop.code.FillArrayDataInsn): void;
							public visitPlainCstInsn(insn: com.android.dx.rop.code.PlainCstInsn): void;
							public setBlock(block: com.android.dx.rop.code.BasicBlock, lastAddress: com.android.dx.dex.code.CodeAddress): void;
							public visitInvokePolymorphicInsn(insn: com.android.dx.rop.code.InvokePolymorphicInsn): void;
							public visitThrowingCstInsn(insn: com.android.dx.rop.code.ThrowingCstInsn): void;
							public visitPlainCstInsn(param0: com.android.dx.rop.code.PlainCstInsn): void;
							public constructor(param0: com.android.dx.dex.code.RopTranslator, output: com.android.dx.dex.code.OutputCollector);
							public visitFillArrayDataInsn(param0: com.android.dx.rop.code.FillArrayDataInsn): void;
							public visitSwitchInsn(param0: com.android.dx.rop.code.SwitchInsn): void;
							public addOutputSuffix(insn: com.android.dx.dex.code.DalvInsn): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class SimpleInsn extends com.android.dx.dex.code.FixedSizeInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.SimpleInsn>;
						public withOpcode(opcode: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public withRegisters(param0: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public withRegisters(registers: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public argString(): string;
						public withOpcode(param0: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class StdCatchBuilder extends java.lang.Object implements com.android.dx.dex.code.CatchBuilder {
						public static class: java.lang.Class<com.android.dx.dex.code.StdCatchBuilder>;
						public constructor(method: com.android.dx.rop.code.RopMethod, order: number[], addresses: com.android.dx.dex.code.BlockAddresses);
						public static build(method: com.android.dx.rop.code.RopMethod, order: number[], addresses: com.android.dx.dex.code.BlockAddresses): com.android.dx.dex.code.CatchTable;
						public build(): com.android.dx.dex.code.CatchTable;
						public getCatchTypes(): java.util.HashSet<com.android.dx.rop.type.Type>;
						public hasAnyCatches(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class SwitchData extends com.android.dx.dex.code.VariableSizeInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.SwitchData>;
						public codeSize(): number;
						public constructor(position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public writeTo(param0: com.android.dx.util.AnnotatedOutput): void;
						public isPacked(): boolean;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public writeTo(out: com.android.dx.util.AnnotatedOutput): void;
						public withRegisters(param0: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public withRegisters(registers: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public listingString0(param0: boolean): string;
						public constructor(position: com.android.dx.rop.code.SourcePosition, user: com.android.dx.dex.code.CodeAddress, cases: com.android.dx.util.IntList, targets: com.android.dx.dex.code.CodeAddress[]);
						public argString(): string;
						public listingString0(noteIndices: boolean): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export class TargetInsn extends com.android.dx.dex.code.FixedSizeInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.TargetInsn>;
						public getTarget(): com.android.dx.dex.code.CodeAddress;
						public withOpcode(opcode: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public hasTargetOffset(): boolean;
						public withRegisters(param0: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public withNewTargetAndReversed(target: com.android.dx.dex.code.CodeAddress): com.android.dx.dex.code.TargetInsn;
						public withRegisters(registers: com.android.dx.rop.code.RegisterSpecList): com.android.dx.dex.code.DalvInsn;
						public getTargetOffset(): number;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList, target: com.android.dx.dex.code.CodeAddress);
						public argString(): string;
						public withOpcode(param0: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
						public getTargetAddress(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export abstract class VariableSizeInsn extends com.android.dx.dex.code.DalvInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.VariableSizeInsn>;
						public withRegisterOffset(param0: number): com.android.dx.dex.code.DalvInsn;
						public constructor(position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public withOpcode(opcode: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public withRegisterOffset(delta: number): com.android.dx.dex.code.DalvInsn;
						public withOpcode(param0: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export abstract class ZeroSizeInsn extends com.android.dx.dex.code.DalvInsn {
						public static class: java.lang.Class<com.android.dx.dex.code.ZeroSizeInsn>;
						public codeSize(): number;
						public withRegisterOffset(param0: number): com.android.dx.dex.code.DalvInsn;
						public writeTo(param0: com.android.dx.util.AnnotatedOutput): void;
						public withOpcode(opcode: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
						public constructor(opcode: com.android.dx.dex.code.Dop, position: com.android.dx.rop.code.SourcePosition, registers: com.android.dx.rop.code.RegisterSpecList);
						public writeTo(out: com.android.dx.util.AnnotatedOutput): void;
						public constructor(position: com.android.dx.rop.code.SourcePosition);
						public withRegisterOffset(delta: number): com.android.dx.dex.code.DalvInsn;
						public withOpcode(param0: com.android.dx.dex.code.Dop): com.android.dx.dex.code.DalvInsn;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form10t extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form10t>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public branchFits(insn: com.android.dx.dex.code.TargetInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form10x extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form10x>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form11n extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form11n>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form11x extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form11x>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form12x extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form12x>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form20t extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form20t>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public branchFits(insn: com.android.dx.dex.code.TargetInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form21c extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form21c>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form21h extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form21h>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form21s extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form21s>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form21t extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form21t>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public branchFits(insn: com.android.dx.dex.code.TargetInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form22b extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form22b>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form22c extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form22c>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form22s extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form22s>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form22t extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form22t>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public branchFits(insn: com.android.dx.dex.code.TargetInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form22x extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form22x>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form23x extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form23x>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form30t extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form30t>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public branchFits(insn: com.android.dx.dex.code.TargetInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form31c extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form31c>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form31i extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form31i>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form31t extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form31t>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public branchFits(insn: com.android.dx.dex.code.TargetInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form32x extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form32x>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form35c extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form35c>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form3rc extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form3rc>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form45cc extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form45cc>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form4rcc extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form4rcc>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class Form51l extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.Form51l>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public compatibleRegs(insn: com.android.dx.dex.code.DalvInsn): java.util.BitSet;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module code {
					export module form {
						export class SpecialFormat extends com.android.dx.dex.code.InsnFormat {
							public static class: java.lang.Class<com.android.dx.dex.code.form.SpecialFormat>;
							public static THE_ONE: com.android.dx.dex.code.InsnFormat;
							public insnCommentString(param0: com.android.dx.dex.code.DalvInsn, param1: boolean): string;
							public isCompatible(insn: com.android.dx.dex.code.DalvInsn): boolean;
							public insnArgString(insn: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(param0: com.android.dx.util.AnnotatedOutput, param1: com.android.dx.dex.code.DalvInsn): void;
							public codeSize(): number;
							public insnArgString(param0: com.android.dx.dex.code.DalvInsn): string;
							public writeTo(out: com.android.dx.util.AnnotatedOutput, insn: com.android.dx.dex.code.DalvInsn): void;
							public isCompatible(param0: com.android.dx.dex.code.DalvInsn): boolean;
							public insnCommentString(insn: com.android.dx.dex.code.DalvInsn, noteIndices: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class AnnotationItem extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.AnnotationItem>;
						public compareTo0(other: com.android.dx.dex.file.OffsettedItem): number;
						public static sortByTypeIdIndex(array: com.android.dx.dex.file.AnnotationItem[]): void;
						public constructor();
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public hashCode(): number;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public place0(addedTo: com.android.dx.dex.file.Section, offset: number): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public constructor(annotation: com.android.dx.rop.annotation.Annotation, dexFile: com.android.dx.dex.file.DexFile);
						public annotateTo(out: com.android.dx.util.AnnotatedOutput, prefix: string): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
					}
					export module AnnotationItem {
						export class TypeIdSorter extends java.util.Comparator<com.android.dx.dex.file.AnnotationItem> {
							public static class: java.lang.Class<com.android.dx.dex.file.AnnotationItem.TypeIdSorter>;
							public compare(param0: any, param1: any): number;
							public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public equals(obj: any): boolean;
							public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static naturalOrder(): java.util.Comparator<any>;
							public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public reversed(): java.util.Comparator<any>;
							public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public equals(param0: any): boolean;
							public compare(item1: com.android.dx.dex.file.AnnotationItem, item2: com.android.dx.dex.file.AnnotationItem): number;
							public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static reverseOrder(): java.util.Comparator<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class AnnotationSetItem extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.AnnotationSetItem>;
						public compareTo0(other: com.android.dx.dex.file.OffsettedItem): number;
						public constructor();
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public hashCode(): number;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public getAnnotations(): com.android.dx.rop.annotation.Annotations;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public place0(addedTo: com.android.dx.dex.file.Section, offset: number): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public constructor(annotations: com.android.dx.rop.annotation.Annotations, dexFile: com.android.dx.dex.file.DexFile);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class AnnotationSetRefItem extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.AnnotationSetRefItem>;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public constructor(annotations: com.android.dx.dex.file.AnnotationSetItem);
						public itemType(): com.android.dx.dex.file.ItemType;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class AnnotationUtils extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.AnnotationUtils>;
						public static makeInnerClass(name: com.android.dx.rop.cst.CstString, accessFlags: number): com.android.dx.rop.annotation.Annotation;
						public static makeEnclosingClass(clazz: com.android.dx.rop.cst.CstType): com.android.dx.rop.annotation.Annotation;
						public static makeSignature(signature: com.android.dx.rop.cst.CstString): com.android.dx.rop.annotation.Annotation;
						public static makeSourceDebugExtension(smapString: com.android.dx.rop.cst.CstString): com.android.dx.rop.annotation.Annotation;
						public static makeThrows(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.annotation.Annotation;
						public static makeEnclosingMethod(method: com.android.dx.rop.cst.CstMethodRef): com.android.dx.rop.annotation.Annotation;
						public static makeMemberClasses(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.annotation.Annotation;
						public static makeAnnotationDefault(defaults: com.android.dx.rop.annotation.Annotation): com.android.dx.rop.annotation.Annotation;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class AnnotationsDirectoryItem extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.AnnotationsDirectoryItem>;
						public compareTo0(other: com.android.dx.dex.file.OffsettedItem): number;
						public constructor();
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public getParameterAnnotations(method: com.android.dx.rop.cst.CstMethodRef): com.android.dx.rop.annotation.AnnotationsList;
						public addParameterAnnotations(method: com.android.dx.rop.cst.CstMethodRef, list: com.android.dx.rop.annotation.AnnotationsList, dexFile: com.android.dx.dex.file.DexFile): void;
						public hashCode(): number;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public setClassAnnotations(annotations: com.android.dx.rop.annotation.Annotations, dexFile: com.android.dx.dex.file.DexFile): void;
						public addFieldAnnotations(field: com.android.dx.rop.cst.CstFieldRef, annotations: com.android.dx.rop.annotation.Annotations, dexFile: com.android.dx.dex.file.DexFile): void;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public isInternable(): boolean;
						public getMethodAnnotations(method: com.android.dx.rop.cst.CstMethodRef): com.android.dx.rop.annotation.Annotations;
						public isEmpty(): boolean;
						public place0(addedTo: com.android.dx.dex.file.Section, offset: number): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public addMethodAnnotations(method: com.android.dx.rop.cst.CstMethodRef, annotations: com.android.dx.rop.annotation.Annotations, dexFile: com.android.dx.dex.file.DexFile): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class CallSiteIdItem extends com.android.dx.dex.file.IndexedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.CallSiteIdItem>;
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public compareTo(o: any): number;
						public writeTo(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public writeSize(): number;
						public constructor(invokeDynamicRef: com.android.dx.rop.cst.CstCallSiteRef);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class CallSiteIdsSection extends com.android.dx.dex.file.UniformItemSection {
						public static class: java.lang.Class<com.android.dx.dex.file.CallSiteIdsSection>;
						public get(param0: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public constructor(dexFile: com.android.dx.dex.file.DexFile);
						public get(cst: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public items(): java.util.Collection<any>;
						public orderItems(): void;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
						public intern(cstRef: com.android.dx.rop.cst.CstCallSiteRef): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class CallSiteItem extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.CallSiteItem>;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public place0(addedTo: com.android.dx.dex.file.Section, offset: number): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public constructor(value: com.android.dx.rop.cst.CstCallSite);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class CatchStructs extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.CatchStructs>;
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public constructor(code: com.android.dx.dex.code.DalvCode);
						public triesSize(): number;
						public encode(file: com.android.dx.dex.file.DexFile): void;
						public writeSize(): number;
						public debugPrint(out: java.io.PrintWriter, prefix: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class ClassDataItem extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.ClassDataItem>;
						public constructor();
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public constructor(thisClass: com.android.dx.rop.cst.CstType);
						public getStaticValuesConstant(): com.android.dx.rop.cst.CstArray;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public addDirectMethod(method: com.android.dx.dex.file.EncodedMethod): void;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public addVirtualMethod(method: com.android.dx.dex.file.EncodedMethod): void;
						public isEmpty(): boolean;
						public place0(addedTo: com.android.dx.dex.file.Section, offset: number): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public debugPrint(out: java.io.Writer, verbose: boolean): void;
						public getMethods(): java.util.ArrayList<com.android.dx.dex.file.EncodedMethod>;
						public addInstanceField(field: com.android.dx.dex.file.EncodedField): void;
						public addStaticField(field: com.android.dx.dex.file.EncodedField, value: com.android.dx.rop.cst.Constant): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class ClassDefItem extends com.android.dx.dex.file.IndexedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.ClassDefItem>;
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public getParameterAnnotations(method: com.android.dx.rop.cst.CstMethodRef): com.android.dx.rop.annotation.AnnotationsList;
						public addParameterAnnotations(method: com.android.dx.rop.cst.CstMethodRef, list: com.android.dx.rop.annotation.AnnotationsList, dexFile: com.android.dx.dex.file.DexFile): void;
						public getSuperclass(): com.android.dx.rop.cst.CstType;
						public writeSize(): number;
						public getAccessFlags(): number;
						public addFieldAnnotations(field: com.android.dx.rop.cst.CstFieldRef, annotations: com.android.dx.rop.annotation.Annotations, dexFile: com.android.dx.dex.file.DexFile): void;
						public addVirtualMethod(method: com.android.dx.dex.file.EncodedMethod): void;
						public writeTo(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public constructor(thisClass: com.android.dx.rop.cst.CstType, accessFlags: number, superclass: com.android.dx.rop.cst.CstType, interfaces: com.android.dx.rop.type.TypeList, sourceFile: com.android.dx.rop.cst.CstString);
						public debugPrint(out: java.io.Writer, verbose: boolean): void;
						public addInstanceField(field: com.android.dx.dex.file.EncodedField): void;
						public addStaticField(field: com.android.dx.dex.file.EncodedField, value: com.android.dx.rop.cst.Constant): void;
						public constructor();
						public getSourceFile(): com.android.dx.rop.cst.CstString;
						public setClassAnnotations(annotations: com.android.dx.rop.annotation.Annotations, dexFile: com.android.dx.dex.file.DexFile): void;
						public addDirectMethod(method: com.android.dx.dex.file.EncodedMethod): void;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public getThisClass(): com.android.dx.rop.cst.CstType;
						public getMethodAnnotations(method: com.android.dx.rop.cst.CstMethodRef): com.android.dx.rop.annotation.Annotations;
						public itemType(): com.android.dx.dex.file.ItemType;
						public addMethodAnnotations(method: com.android.dx.rop.cst.CstMethodRef, annotations: com.android.dx.rop.annotation.Annotations, dexFile: com.android.dx.dex.file.DexFile): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public getMethods(): java.util.ArrayList<com.android.dx.dex.file.EncodedMethod>;
						public getInterfaces(): com.android.dx.rop.type.TypeList;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class ClassDefsSection extends com.android.dx.dex.file.UniformItemSection {
						public static class: java.lang.Class<com.android.dx.dex.file.ClassDefsSection>;
						public writeHeaderPart(out: com.android.dx.util.AnnotatedOutput): void;
						public get(param0: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public get(cst: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public items(): java.util.Collection<any>;
						public orderItems(): void;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
						public constructor(file: com.android.dx.dex.file.DexFile);
						public add(clazz: com.android.dx.dex.file.ClassDefItem): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class CodeItem extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.CodeItem>;
						public constructor();
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public getRef(): com.android.dx.rop.cst.CstMethodRef;
						public toString(): string;
						public debugPrint(out: java.io.PrintWriter, prefix: string, verbose: boolean): void;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public place0(addedTo: com.android.dx.dex.file.Section, offset: number): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public constructor(ref: com.android.dx.rop.cst.CstMethodRef, code: com.android.dx.dex.code.DalvCode, isStatic: boolean, throwsList: com.android.dx.rop.type.TypeList);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class DebugInfoConstants extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.DebugInfoConstants>;
						/**
						 * Constructs a new instance of the com.android.dx.dex.file.DebugInfoConstants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static DBG_LINE_BASE: number;
						public static DBG_ADVANCE_PC: number;
						public static DBG_START_LOCAL: number;
						public static DBG_SET_PROLOGUE_END: number;
						public static DBG_LINE_RANGE: number;
						public static DBG_SET_FILE: number;
						public static DBG_END_SEQUENCE: number;
						public static DBG_FIRST_SPECIAL: number;
						public static DBG_END_LOCAL: number;
						public static DBG_SET_EPILOGUE_BEGIN: number;
						public static DBG_START_LOCAL_EXTENDED: number;
						public static DBG_RESTART_LOCAL: number;
						public static DBG_ADVANCE_LINE: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class DebugInfoDecoder extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.DebugInfoDecoder>;
						public decode(): void;
						public static validateEncode(info: number[], file: com.android.dx.dex.file.DexFile, ref: com.android.dx.rop.cst.CstMethodRef, code: com.android.dx.dex.code.DalvCode, isStatic: boolean): void;
						public getPositionList(): java.util.List<com.android.dx.dex.file.DebugInfoDecoder.PositionEntry>;
						public getLocals(): java.util.List<com.android.dx.dex.file.DebugInfoDecoder.LocalEntry>;
					}
					export module DebugInfoDecoder {
						export class LocalEntry extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.dex.file.DebugInfoDecoder.LocalEntry>;
							public address: number;
							public isStart: boolean;
							public reg: number;
							public nameIndex: number;
							public typeIndex: number;
							public signatureIndex: number;
							public constructor(address: number, isStart: boolean, reg: number, nameIndex: number, typeIndex: number, signatureIndex: number);
							public toString(): string;
						}
						export class PositionEntry extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.dex.file.DebugInfoDecoder.PositionEntry>;
							public address: number;
							public line: number;
							public constructor(address: number, line: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class DebugInfoEncoder extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.DebugInfoEncoder>;
						public convertAndAnnotate(prefix: string, debugPrint: java.io.PrintWriter, out: com.android.dx.util.AnnotatedOutput, consume: boolean): number[];
						public convert(): number[];
						public constructor(positions: com.android.dx.dex.code.PositionList, locals: com.android.dx.dex.code.LocalList, file: com.android.dx.dex.file.DexFile, codeSize: number, regSize: number, isStatic: boolean, ref: com.android.dx.rop.cst.CstMethodRef);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class DebugInfoItem extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.DebugInfoItem>;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public place0(addedTo: com.android.dx.dex.file.Section, offset: number): void;
						public annotateTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput, prefix: string): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public constructor(code: com.android.dx.dex.code.DalvCode, isStatic: boolean, ref: com.android.dx.rop.cst.CstMethodRef);
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public debugPrint(out: java.io.PrintWriter, prefix: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class DexFile extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.DexFile>;
						public getMethodIds(): com.android.dx.dex.file.MethodIdsSection;
						public writeTo(out: java.io.OutputStream, humanOut: java.io.Writer, verbose: boolean): void;
						public getClassDefs(): com.android.dx.dex.file.ClassDefsSection;
						public getCallSiteIds(): com.android.dx.dex.file.CallSiteIdsSection;
						public getStatistics(): com.android.dx.dex.file.Statistics;
						public getClassOrNull(name: string): com.android.dx.dex.file.ClassDefItem;
						public add(clazz: com.android.dx.dex.file.ClassDefItem): void;
						public getDexOptions(): com.android.dx.dex.DexOptions;
						public setDumpWidth(dumpWidth: number): void;
						public getFileSize(): number;
						public getTypeIds(): com.android.dx.dex.file.TypeIdsSection;
						public toDex(humanOut: java.io.Writer, verbose: boolean): number[];
						public getFieldIds(): com.android.dx.dex.file.FieldIdsSection;
						public constructor(dexOptions: com.android.dx.dex.DexOptions);
						public getMethodHandles(): com.android.dx.dex.file.MethodHandlesSection;
						public isEmpty(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class EncodedArrayItem extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.EncodedArrayItem>;
						public compareTo0(other: com.android.dx.dex.file.OffsettedItem): number;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public constructor(array: com.android.dx.rop.cst.CstArray);
						public hashCode(): number;
						public place0(addedTo: com.android.dx.dex.file.Section, offset: number): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class EncodedField extends com.android.dx.dex.file.EncodedMember implements java.lang.Comparable<com.android.dx.dex.file.EncodedField>  {
						public static class: java.lang.Class<com.android.dx.dex.file.EncodedField>;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public compareTo(other: com.android.dx.dex.file.EncodedField): number;
						public hashCode(): number;
						public encode(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput, param2: number, param3: number): number;
						public constructor(accessFlags: number);
						public getRef(): com.android.dx.rop.cst.CstFieldRef;
						public toString(): string;
						public encode(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput, lastIndex: number, dumpSeq: number): number;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public toHuman(): string;
						public debugPrint(out: java.io.PrintWriter, verbose: boolean): void;
						public debugPrint(param0: java.io.PrintWriter, param1: boolean): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public getName(): com.android.dx.rop.cst.CstString;
						public constructor(field: com.android.dx.rop.cst.CstFieldRef, accessFlags: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export abstract class EncodedMember extends java.lang.Object implements com.android.dx.util.ToHuman {
						public static class: java.lang.Class<com.android.dx.dex.file.EncodedMember>;
						public getAccessFlags(): number;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public toHuman(): string;
						public debugPrint(param0: java.io.PrintWriter, param1: boolean): void;
						public encode(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput, param2: number, param3: number): number;
						public getName(): com.android.dx.rop.cst.CstString;
						public constructor(accessFlags: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class EncodedMethod extends com.android.dx.dex.file.EncodedMember implements java.lang.Comparable<com.android.dx.dex.file.EncodedMethod>  {
						public static class: java.lang.Class<com.android.dx.dex.file.EncodedMethod>;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public encode(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput, param2: number, param3: number): number;
						public constructor(accessFlags: number);
						public getRef(): com.android.dx.rop.cst.CstMethodRef;
						public toString(): string;
						public encode(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput, lastIndex: number, dumpSeq: number): number;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public toHuman(): string;
						public debugPrint(out: java.io.PrintWriter, verbose: boolean): void;
						public constructor(method: com.android.dx.rop.cst.CstMethodRef, accessFlags: number, code: com.android.dx.dex.code.DalvCode, throwsList: com.android.dx.rop.type.TypeList);
						public compareTo(other: com.android.dx.dex.file.EncodedMethod): number;
						public debugPrint(param0: java.io.PrintWriter, param1: boolean): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public getName(): com.android.dx.rop.cst.CstString;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class FieldAnnotationStruct extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.FieldAnnotationStruct>;
						public constructor(field: com.android.dx.rop.cst.CstFieldRef, annotations: com.android.dx.dex.file.AnnotationSetItem);
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public getField(): com.android.dx.rop.cst.CstFieldRef;
						public compareTo(other: com.android.dx.dex.file.FieldAnnotationStruct): number;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public toHuman(): string;
						public hashCode(): number;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public getAnnotations(): com.android.dx.rop.annotation.Annotations;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class FieldIdItem extends com.android.dx.dex.file.MemberIdItem {
						public static class: java.lang.Class<com.android.dx.dex.file.FieldIdItem>;
						public getFieldRef(): com.android.dx.rop.cst.CstFieldRef;
						public getTypoidIdx(param0: com.android.dx.dex.file.DexFile): number;
						public getTypoidName(): string;
						public constructor();
						public constructor(type: com.android.dx.rop.cst.CstType);
						public itemType(): com.android.dx.dex.file.ItemType;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public constructor(cst: com.android.dx.rop.cst.CstMemberRef);
						public constructor(field: com.android.dx.rop.cst.CstFieldRef);
						public getTypoidIdx(file: com.android.dx.dex.file.DexFile): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class FieldIdsSection extends com.android.dx.dex.file.MemberIdsSection {
						public static class: java.lang.Class<com.android.dx.dex.file.FieldIdsSection>;
						public writeHeaderPart(out: com.android.dx.util.AnnotatedOutput): void;
						public get(param0: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile);
						public get(cst: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public indexOf(ref: com.android.dx.rop.cst.CstFieldRef): number;
						public items(): java.util.Collection<any>;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
						public constructor(file: com.android.dx.dex.file.DexFile);
						public intern(field: com.android.dx.rop.cst.CstFieldRef): com.android.dx.dex.file.FieldIdItem;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class HeaderItem extends com.android.dx.dex.file.IndexedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.HeaderItem>;
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public writeTo(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public writeSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class HeaderSection extends com.android.dx.dex.file.UniformItemSection {
						public static class: java.lang.Class<com.android.dx.dex.file.HeaderSection>;
						public get(param0: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public get(cst: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public items(): java.util.Collection<any>;
						public orderItems(): void;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
						public constructor(file: com.android.dx.dex.file.DexFile);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export abstract class IdItem extends com.android.dx.dex.file.IndexedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.IdItem>;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public getDefiningClass(): com.android.dx.rop.cst.CstType;
						public constructor(type: com.android.dx.rop.cst.CstType);
						public addContents(file: com.android.dx.dex.file.DexFile): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export abstract class IndexedItem extends com.android.dx.dex.file.Item {
						public static class: java.lang.Class<com.android.dx.dex.file.IndexedItem>;
						public indexString(): string;
						public constructor();
						public hasIndex(): boolean;
						public setIndex(index: number): void;
						public getIndex(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export abstract class Item extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.Item>;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public typeName(): string;
						public writeTo(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public writeSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class ItemType extends com.android.dx.util.ToHuman {
						public static class: java.lang.Class<com.android.dx.dex.file.ItemType>;
						public static TYPE_HEADER_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_STRING_ID_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_TYPE_ID_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_PROTO_ID_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_FIELD_ID_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_METHOD_ID_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_CLASS_DEF_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_CALL_SITE_ID_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_METHOD_HANDLE_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_MAP_LIST: com.android.dx.dex.file.ItemType;
						public static TYPE_TYPE_LIST: com.android.dx.dex.file.ItemType;
						public static TYPE_ANNOTATION_SET_REF_LIST: com.android.dx.dex.file.ItemType;
						public static TYPE_ANNOTATION_SET_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_CLASS_DATA_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_CODE_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_STRING_DATA_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_DEBUG_INFO_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_ANNOTATION_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_ENCODED_ARRAY_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_ANNOTATIONS_DIRECTORY_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_MAP_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_TYPE_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_EXCEPTION_HANDLER_ITEM: com.android.dx.dex.file.ItemType;
						public static TYPE_ANNOTATION_SET_REF_ITEM: com.android.dx.dex.file.ItemType;
						public static values(): com.android.dx.dex.file.ItemType[];
						public toHuman(): string;
						public getTypeName(): string;
						public getMapValue(): number;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): com.android.dx.dex.file.ItemType;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class MapItem extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.MapItem>;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public toHuman(): string;
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public static addMap(sections: com.android.dx.dex.file.Section[], mapSection: com.android.dx.dex.file.MixedItemSection): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export abstract class MemberIdItem extends com.android.dx.dex.file.IdItem {
						public static class: java.lang.Class<com.android.dx.dex.file.MemberIdItem>;
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public getTypoidIdx(param0: com.android.dx.dex.file.DexFile): number;
						public getTypoidName(): string;
						public getRef(): com.android.dx.rop.cst.CstMemberRef;
						public constructor();
						public writeTo(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public constructor(type: com.android.dx.rop.cst.CstType);
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public writeSize(): number;
						public constructor(cst: com.android.dx.rop.cst.CstMemberRef);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export abstract class MemberIdsSection extends com.android.dx.dex.file.UniformItemSection {
						public static class: java.lang.Class<com.android.dx.dex.file.MemberIdsSection>;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile);
						public orderItems(): void;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class MethodAnnotationStruct extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.MethodAnnotationStruct>;
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public toHuman(): string;
						public compareTo(other: com.android.dx.dex.file.MethodAnnotationStruct): number;
						public hashCode(): number;
						public constructor(method: com.android.dx.rop.cst.CstMethodRef, annotations: com.android.dx.dex.file.AnnotationSetItem);
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public getAnnotations(): com.android.dx.rop.annotation.Annotations;
						public getMethod(): com.android.dx.rop.cst.CstMethodRef;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class MethodHandleItem extends com.android.dx.dex.file.IndexedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.MethodHandleItem>;
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public writeTo(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public constructor(methodHandle: com.android.dx.rop.cst.CstMethodHandle);
						public itemType(): com.android.dx.dex.file.ItemType;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public writeSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class MethodHandlesSection extends com.android.dx.dex.file.UniformItemSection {
						public static class: java.lang.Class<com.android.dx.dex.file.MethodHandlesSection>;
						public get(param0: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public constructor(dexFile: com.android.dx.dex.file.DexFile);
						public get(cst: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public intern(methodHandle: com.android.dx.rop.cst.CstMethodHandle): void;
						public items(): java.util.Collection<any>;
						public orderItems(): void;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class MethodIdItem extends com.android.dx.dex.file.MemberIdItem {
						public static class: java.lang.Class<com.android.dx.dex.file.MethodIdItem>;
						public getTypoidIdx(param0: com.android.dx.dex.file.DexFile): number;
						public getTypoidName(): string;
						public constructor();
						public getMethodRef(): com.android.dx.rop.cst.CstBaseMethodRef;
						public constructor(type: com.android.dx.rop.cst.CstType);
						public itemType(): com.android.dx.dex.file.ItemType;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public constructor(cst: com.android.dx.rop.cst.CstMemberRef);
						public constructor(method: com.android.dx.rop.cst.CstBaseMethodRef);
						public getTypoidIdx(file: com.android.dx.dex.file.DexFile): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class MethodIdsSection extends com.android.dx.dex.file.MemberIdsSection {
						public static class: java.lang.Class<com.android.dx.dex.file.MethodIdsSection>;
						public writeHeaderPart(out: com.android.dx.util.AnnotatedOutput): void;
						public get(param0: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile);
						public get(cst: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public items(): java.util.Collection<any>;
						public intern(method: com.android.dx.rop.cst.CstBaseMethodRef): com.android.dx.dex.file.MethodIdItem;
						public indexOf(ref: com.android.dx.rop.cst.CstBaseMethodRef): number;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
						public constructor(file: com.android.dx.dex.file.DexFile);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class MixedItemSection extends com.android.dx.dex.file.Section {
						public static class: java.lang.Class<com.android.dx.dex.file.MixedItemSection>;
						public writeHeaderPart(out: com.android.dx.util.AnnotatedOutput): void;
						public get(item: com.android.dx.dex.file.OffsettedItem): com.android.dx.dex.file.OffsettedItem;
						public add(item: com.android.dx.dex.file.OffsettedItem): void;
						public placeItems(): void;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number, sort: com.android.dx.dex.file.MixedItemSection.SortType);
						public intern(item: com.android.dx.dex.file.OffsettedItem): com.android.dx.dex.file.OffsettedItem;
						public writeSize(): number;
						public writeTo0(out: com.android.dx.util.AnnotatedOutput): void;
						public writeIndexAnnotation(out: com.android.dx.util.AnnotatedOutput, itemType: com.android.dx.dex.file.ItemType, intro: string): void;
						public writeTo0(param0: com.android.dx.util.AnnotatedOutput): void;
						public getAbsoluteItemOffset(item: com.android.dx.dex.file.Item): number;
						public prepare0(): void;
						public getAbsoluteItemOffset(param0: com.android.dx.dex.file.Item): number;
						public items(): java.util.Collection<any>;
						public size(): number;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
					}
					export module MixedItemSection {
						export class SortType {
							public static class: java.lang.Class<com.android.dx.dex.file.MixedItemSection.SortType>;
							public static NONE: com.android.dx.dex.file.MixedItemSection.SortType;
							public static TYPE: com.android.dx.dex.file.MixedItemSection.SortType;
							public static INSTANCE: com.android.dx.dex.file.MixedItemSection.SortType;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static values(): com.android.dx.dex.file.MixedItemSection.SortType[];
							public static valueOf(name: string): com.android.dx.dex.file.MixedItemSection.SortType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export abstract class OffsettedItem extends com.android.dx.dex.file.Item implements java.lang.Comparable<com.android.dx.dex.file.OffsettedItem>  {
						public static class: java.lang.Class<com.android.dx.dex.file.OffsettedItem>;
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public compareTo0(other: com.android.dx.dex.file.OffsettedItem): number;
						public constructor();
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getAbsoluteOffset(): number;
						public compareTo(other: com.android.dx.dex.file.OffsettedItem): number;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public writeSize(): number;
						public place(addedTo: com.android.dx.dex.file.Section, offset: number): number;
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public setWriteSize(writeSize: number): void;
						public writeTo(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public getAlignment(): number;
						public static getAbsoluteOffsetOr0(item: com.android.dx.dex.file.OffsettedItem): number;
						public getRelativeOffset(): number;
						public place0(addedTo: com.android.dx.dex.file.Section, offset: number): void;
						public offsetString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class ParameterAnnotationStruct extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.ParameterAnnotationStruct>;
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public toHuman(): string;
						public hashCode(): number;
						public compareTo(other: com.android.dx.dex.file.ParameterAnnotationStruct): number;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public constructor(method: com.android.dx.rop.cst.CstMethodRef, annotationsList: com.android.dx.rop.annotation.AnnotationsList, dexFile: com.android.dx.dex.file.DexFile);
						public getAnnotationsList(): com.android.dx.rop.annotation.AnnotationsList;
						public getMethod(): com.android.dx.rop.cst.CstMethodRef;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class ProtoIdItem extends com.android.dx.dex.file.IndexedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.ProtoIdItem>;
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public constructor(prototype: com.android.dx.rop.type.Prototype);
						public writeTo(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public writeSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class ProtoIdsSection extends com.android.dx.dex.file.UniformItemSection {
						public static class: java.lang.Class<com.android.dx.dex.file.ProtoIdsSection>;
						public writeHeaderPart(out: com.android.dx.util.AnnotatedOutput): void;
						public get(param0: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public get(cst: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public indexOf(prototype: com.android.dx.rop.type.Prototype): number;
						public intern(prototype: com.android.dx.rop.type.Prototype): com.android.dx.dex.file.ProtoIdItem;
						public items(): java.util.Collection<any>;
						public orderItems(): void;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
						public constructor(file: com.android.dx.dex.file.DexFile);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export abstract class Section extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.Section>;
						public getFileOffset(): number;
						public getFile(): com.android.dx.dex.file.DexFile;
						public getAbsoluteOffset(relative: number): number;
						public throwIfPrepared(): void;
						public align(out: com.android.dx.util.AnnotatedOutput): void;
						public writeSize(): number;
						public getName(): string;
						public setFileOffset(fileOffset: number): number;
						public writeTo0(param0: com.android.dx.util.AnnotatedOutput): void;
						public static validateAlignment(alignment: number): void;
						public throwIfNotPrepared(): void;
						public getAlignment(): number;
						public writeTo(out: com.android.dx.util.AnnotatedOutput): void;
						public prepare0(): void;
						public prepare(): void;
						public getAbsoluteItemOffset(param0: com.android.dx.dex.file.Item): number;
						public items(): java.util.Collection<any>;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class Statistics extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.Statistics>;
						public constructor();
						public toHuman(): string;
						public addAll(list: com.android.dx.dex.file.Section): void;
						public add(item: com.android.dx.dex.file.Item): void;
						public writeAnnotation(out: com.android.dx.util.AnnotatedOutput): void;
					}
					export module Statistics {
						export class Data extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.dex.file.Statistics.Data>;
							public add(item: com.android.dx.dex.file.Item): void;
							public toHuman(): string;
							public constructor(item: com.android.dx.dex.file.Item, name: string);
							public writeAnnotation(out: com.android.dx.util.AnnotatedOutput): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class StringDataItem extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.StringDataItem>;
						public compareTo0(other: com.android.dx.dex.file.OffsettedItem): number;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public constructor(value: com.android.dx.rop.cst.CstString);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class StringIdItem extends com.android.dx.dex.file.IndexedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.StringIdItem>;
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public compareTo(other: any): number;
						public getData(): com.android.dx.dex.file.StringDataItem;
						public constructor();
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public hashCode(): number;
						public writeSize(): number;
						public constructor(value: com.android.dx.rop.cst.CstString);
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public getValue(): com.android.dx.rop.cst.CstString;
						public writeTo(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class StringIdsSection extends com.android.dx.dex.file.UniformItemSection {
						public static class: java.lang.Class<com.android.dx.dex.file.StringIdsSection>;
						public writeHeaderPart(out: com.android.dx.util.AnnotatedOutput): void;
						public get(param0: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public intern(string: com.android.dx.dex.file.StringIdItem): com.android.dx.dex.file.StringIdItem;
						public intern(string: com.android.dx.rop.cst.CstString): com.android.dx.dex.file.StringIdItem;
						public get(cst: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public items(): java.util.Collection<any>;
						public intern(string: string): com.android.dx.dex.file.StringIdItem;
						public indexOf(string: com.android.dx.rop.cst.CstString): number;
						public orderItems(): void;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
						public intern(nat: com.android.dx.rop.cst.CstNat): void;
						public constructor(file: com.android.dx.dex.file.DexFile);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class TypeIdItem extends com.android.dx.dex.file.IdItem {
						public static class: java.lang.Class<com.android.dx.dex.file.TypeIdItem>;
						public writeTo(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public constructor();
						public writeTo(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public constructor(type: com.android.dx.rop.cst.CstType);
						public itemType(): com.android.dx.dex.file.ItemType;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public writeSize(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class TypeIdsSection extends com.android.dx.dex.file.UniformItemSection {
						public static class: java.lang.Class<com.android.dx.dex.file.TypeIdsSection>;
						public writeHeaderPart(out: com.android.dx.util.AnnotatedOutput): void;
						public get(param0: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public intern(type: com.android.dx.rop.type.Type): com.android.dx.dex.file.TypeIdItem;
						public get(cst: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public indexOf(type: com.android.dx.rop.cst.CstType): number;
						public items(): java.util.Collection<any>;
						public intern(type: com.android.dx.rop.cst.CstType): com.android.dx.dex.file.TypeIdItem;
						public orderItems(): void;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
						public constructor(file: com.android.dx.dex.file.DexFile);
						public indexOf(type: com.android.dx.rop.type.Type): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class TypeListItem extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.TypeListItem>;
						public compareTo0(other: com.android.dx.dex.file.OffsettedItem): number;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public constructor(list: com.android.dx.rop.type.TypeList);
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public getList(): com.android.dx.rop.type.TypeList;
						public hashCode(): number;
						public itemType(): com.android.dx.dex.file.ItemType;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export abstract class UniformItemSection extends com.android.dx.dex.file.Section {
						public static class: java.lang.Class<com.android.dx.dex.file.UniformItemSection>;
						public writeTo0(param0: com.android.dx.util.AnnotatedOutput): void;
						public get(param0: com.android.dx.rop.cst.Constant): com.android.dx.dex.file.IndexedItem;
						public getAbsoluteItemOffset(item: com.android.dx.dex.file.Item): number;
						public prepare0(): void;
						public getAbsoluteItemOffset(param0: com.android.dx.dex.file.Item): number;
						public writeSize(): number;
						public orderItems(): void;
						public constructor(name: string, file: com.android.dx.dex.file.DexFile, alignment: number);
						public writeTo0(out: com.android.dx.util.AnnotatedOutput): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class UniformListItem<T>  extends com.android.dx.dex.file.OffsettedItem {
						public static class: java.lang.Class<com.android.dx.dex.file.UniformListItem<any>>;
						public addContents(param0: com.android.dx.dex.file.DexFile): void;
						public constructor();
						public constructor(itemType: com.android.dx.dex.file.ItemType, items: java.util.List<any>);
						public toHuman(): string;
						public constructor(alignment: number, writeSize: number);
						public writeTo0(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput): void;
						public place0(addedTo: com.android.dx.dex.file.Section, offset: number): void;
						public itemType(): com.android.dx.dex.file.ItemType;
						public writeTo0(param0: com.android.dx.dex.file.DexFile, param1: com.android.dx.util.AnnotatedOutput): void;
						public addContents(file: com.android.dx.dex.file.DexFile): void;
						public getItems(): java.util.List<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module dex {
				export module file {
					export class ValueEncoder extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.dex.file.ValueEncoder>;
						public writeConstant(cst: com.android.dx.rop.cst.Constant): void;
						public constructor(file: com.android.dx.dex.file.DexFile, out: com.android.dx.util.AnnotatedOutput);
						public static addContents(file: com.android.dx.dex.file.DexFile, cst: com.android.dx.rop.cst.Constant): void;
						public writeArray(array: com.android.dx.rop.cst.CstArray, topLevel: boolean): void;
						public static constantToHuman(cst: com.android.dx.rop.cst.Constant): string;
						public static addContents(file: com.android.dx.dex.file.DexFile, annotation: com.android.dx.rop.annotation.Annotation): void;
						public writeAnnotation(annotation: com.android.dx.rop.annotation.Annotation, topLevel: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export class CodeReader extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.io.CodeReader>;
					public visitAll(encodedInstructions: number[]): void;
					public setTypeVisitor(visitor: com.android.dx.io.CodeReader.Visitor): void;
					public constructor();
					public setFieldVisitor(visitor: com.android.dx.io.CodeReader.Visitor): void;
					public setCallSiteVisitor(visitor: com.android.dx.io.CodeReader.Visitor): void;
					public setAllVisitors(visitor: com.android.dx.io.CodeReader.Visitor): void;
					public setFallbackVisitor(visitor: com.android.dx.io.CodeReader.Visitor): void;
					public setMethodVisitor(visitor: com.android.dx.io.CodeReader.Visitor): void;
					public visitAll(decodedInstructions: com.android.dx.io.instructions.DecodedInstruction[]): void;
					public setStringVisitor(visitor: com.android.dx.io.CodeReader.Visitor): void;
					public setMethodAndProtoVisitor(visitor: com.android.dx.io.CodeReader.Visitor): void;
				}
				export module CodeReader {
					export class Visitor extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.io.CodeReader.Visitor>;
						/**
						 * Constructs a new instance of the com.android.dx.io.CodeReader$Visitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							visit(param0: com.android.dx.io.instructions.DecodedInstruction[], param1: com.android.dx.io.instructions.DecodedInstruction): void;
						});
						public constructor();
						public visit(param0: com.android.dx.io.instructions.DecodedInstruction[], param1: com.android.dx.io.instructions.DecodedInstruction): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export class DexIndexPrinter extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.io.DexIndexPrinter>;
					public constructor(file: java.io.File);
					public static main(args: string[]): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export class IndexType {
					public static class: java.lang.Class<com.android.dx.io.IndexType>;
					public static UNKNOWN: com.android.dx.io.IndexType;
					public static NONE: com.android.dx.io.IndexType;
					public static VARIES: com.android.dx.io.IndexType;
					public static TYPE_REF: com.android.dx.io.IndexType;
					public static STRING_REF: com.android.dx.io.IndexType;
					public static METHOD_REF: com.android.dx.io.IndexType;
					public static FIELD_REF: com.android.dx.io.IndexType;
					public static METHOD_AND_PROTO_REF: com.android.dx.io.IndexType;
					public static CALL_SITE_REF: com.android.dx.io.IndexType;
					public static INLINE_METHOD: com.android.dx.io.IndexType;
					public static VTABLE_OFFSET: com.android.dx.io.IndexType;
					public static FIELD_OFFSET: com.android.dx.io.IndexType;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.android.dx.io.IndexType[];
					public static valueOf(name: string): com.android.dx.io.IndexType;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export class OpcodeInfo extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.io.OpcodeInfo>;
					public static SPECIAL_FORMAT: com.android.dx.io.OpcodeInfo.Info;
					public static PACKED_SWITCH_PAYLOAD: com.android.dx.io.OpcodeInfo.Info;
					public static SPARSE_SWITCH_PAYLOAD: com.android.dx.io.OpcodeInfo.Info;
					public static FILL_ARRAY_DATA_PAYLOAD: com.android.dx.io.OpcodeInfo.Info;
					public static NOP: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE_FROM16: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE_16: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE_WIDE: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE_WIDE_FROM16: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE_WIDE_16: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE_OBJECT: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE_OBJECT_FROM16: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE_OBJECT_16: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE_RESULT: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE_RESULT_WIDE: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE_RESULT_OBJECT: com.android.dx.io.OpcodeInfo.Info;
					public static MOVE_EXCEPTION: com.android.dx.io.OpcodeInfo.Info;
					public static RETURN_VOID: com.android.dx.io.OpcodeInfo.Info;
					public static RETURN: com.android.dx.io.OpcodeInfo.Info;
					public static RETURN_WIDE: com.android.dx.io.OpcodeInfo.Info;
					public static RETURN_OBJECT: com.android.dx.io.OpcodeInfo.Info;
					public static CONST_4: com.android.dx.io.OpcodeInfo.Info;
					public static CONST_16: com.android.dx.io.OpcodeInfo.Info;
					public static CONST: com.android.dx.io.OpcodeInfo.Info;
					public static CONST_HIGH16: com.android.dx.io.OpcodeInfo.Info;
					public static CONST_WIDE_16: com.android.dx.io.OpcodeInfo.Info;
					public static CONST_WIDE_32: com.android.dx.io.OpcodeInfo.Info;
					public static CONST_WIDE: com.android.dx.io.OpcodeInfo.Info;
					public static CONST_WIDE_HIGH16: com.android.dx.io.OpcodeInfo.Info;
					public static CONST_STRING: com.android.dx.io.OpcodeInfo.Info;
					public static CONST_STRING_JUMBO: com.android.dx.io.OpcodeInfo.Info;
					public static CONST_CLASS: com.android.dx.io.OpcodeInfo.Info;
					public static MONITOR_ENTER: com.android.dx.io.OpcodeInfo.Info;
					public static MONITOR_EXIT: com.android.dx.io.OpcodeInfo.Info;
					public static CHECK_CAST: com.android.dx.io.OpcodeInfo.Info;
					public static INSTANCE_OF: com.android.dx.io.OpcodeInfo.Info;
					public static ARRAY_LENGTH: com.android.dx.io.OpcodeInfo.Info;
					public static NEW_INSTANCE: com.android.dx.io.OpcodeInfo.Info;
					public static NEW_ARRAY: com.android.dx.io.OpcodeInfo.Info;
					public static FILLED_NEW_ARRAY: com.android.dx.io.OpcodeInfo.Info;
					public static FILLED_NEW_ARRAY_RANGE: com.android.dx.io.OpcodeInfo.Info;
					public static FILL_ARRAY_DATA: com.android.dx.io.OpcodeInfo.Info;
					public static THROW: com.android.dx.io.OpcodeInfo.Info;
					public static GOTO: com.android.dx.io.OpcodeInfo.Info;
					public static GOTO_16: com.android.dx.io.OpcodeInfo.Info;
					public static GOTO_32: com.android.dx.io.OpcodeInfo.Info;
					public static PACKED_SWITCH: com.android.dx.io.OpcodeInfo.Info;
					public static SPARSE_SWITCH: com.android.dx.io.OpcodeInfo.Info;
					public static CMPL_FLOAT: com.android.dx.io.OpcodeInfo.Info;
					public static CMPG_FLOAT: com.android.dx.io.OpcodeInfo.Info;
					public static CMPL_DOUBLE: com.android.dx.io.OpcodeInfo.Info;
					public static CMPG_DOUBLE: com.android.dx.io.OpcodeInfo.Info;
					public static CMP_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static IF_EQ: com.android.dx.io.OpcodeInfo.Info;
					public static IF_NE: com.android.dx.io.OpcodeInfo.Info;
					public static IF_LT: com.android.dx.io.OpcodeInfo.Info;
					public static IF_GE: com.android.dx.io.OpcodeInfo.Info;
					public static IF_GT: com.android.dx.io.OpcodeInfo.Info;
					public static IF_LE: com.android.dx.io.OpcodeInfo.Info;
					public static IF_EQZ: com.android.dx.io.OpcodeInfo.Info;
					public static IF_NEZ: com.android.dx.io.OpcodeInfo.Info;
					public static IF_LTZ: com.android.dx.io.OpcodeInfo.Info;
					public static IF_GEZ: com.android.dx.io.OpcodeInfo.Info;
					public static IF_GTZ: com.android.dx.io.OpcodeInfo.Info;
					public static IF_LEZ: com.android.dx.io.OpcodeInfo.Info;
					public static AGET: com.android.dx.io.OpcodeInfo.Info;
					public static AGET_WIDE: com.android.dx.io.OpcodeInfo.Info;
					public static AGET_OBJECT: com.android.dx.io.OpcodeInfo.Info;
					public static AGET_BOOLEAN: com.android.dx.io.OpcodeInfo.Info;
					public static AGET_BYTE: com.android.dx.io.OpcodeInfo.Info;
					public static AGET_CHAR: com.android.dx.io.OpcodeInfo.Info;
					public static AGET_SHORT: com.android.dx.io.OpcodeInfo.Info;
					public static APUT: com.android.dx.io.OpcodeInfo.Info;
					public static APUT_WIDE: com.android.dx.io.OpcodeInfo.Info;
					public static APUT_OBJECT: com.android.dx.io.OpcodeInfo.Info;
					public static APUT_BOOLEAN: com.android.dx.io.OpcodeInfo.Info;
					public static APUT_BYTE: com.android.dx.io.OpcodeInfo.Info;
					public static APUT_CHAR: com.android.dx.io.OpcodeInfo.Info;
					public static APUT_SHORT: com.android.dx.io.OpcodeInfo.Info;
					public static IGET: com.android.dx.io.OpcodeInfo.Info;
					public static IGET_WIDE: com.android.dx.io.OpcodeInfo.Info;
					public static IGET_OBJECT: com.android.dx.io.OpcodeInfo.Info;
					public static IGET_BOOLEAN: com.android.dx.io.OpcodeInfo.Info;
					public static IGET_BYTE: com.android.dx.io.OpcodeInfo.Info;
					public static IGET_CHAR: com.android.dx.io.OpcodeInfo.Info;
					public static IGET_SHORT: com.android.dx.io.OpcodeInfo.Info;
					public static IPUT: com.android.dx.io.OpcodeInfo.Info;
					public static IPUT_WIDE: com.android.dx.io.OpcodeInfo.Info;
					public static IPUT_OBJECT: com.android.dx.io.OpcodeInfo.Info;
					public static IPUT_BOOLEAN: com.android.dx.io.OpcodeInfo.Info;
					public static IPUT_BYTE: com.android.dx.io.OpcodeInfo.Info;
					public static IPUT_CHAR: com.android.dx.io.OpcodeInfo.Info;
					public static IPUT_SHORT: com.android.dx.io.OpcodeInfo.Info;
					public static SGET: com.android.dx.io.OpcodeInfo.Info;
					public static SGET_WIDE: com.android.dx.io.OpcodeInfo.Info;
					public static SGET_OBJECT: com.android.dx.io.OpcodeInfo.Info;
					public static SGET_BOOLEAN: com.android.dx.io.OpcodeInfo.Info;
					public static SGET_BYTE: com.android.dx.io.OpcodeInfo.Info;
					public static SGET_CHAR: com.android.dx.io.OpcodeInfo.Info;
					public static SGET_SHORT: com.android.dx.io.OpcodeInfo.Info;
					public static SPUT: com.android.dx.io.OpcodeInfo.Info;
					public static SPUT_WIDE: com.android.dx.io.OpcodeInfo.Info;
					public static SPUT_OBJECT: com.android.dx.io.OpcodeInfo.Info;
					public static SPUT_BOOLEAN: com.android.dx.io.OpcodeInfo.Info;
					public static SPUT_BYTE: com.android.dx.io.OpcodeInfo.Info;
					public static SPUT_CHAR: com.android.dx.io.OpcodeInfo.Info;
					public static SPUT_SHORT: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_VIRTUAL: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_SUPER: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_DIRECT: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_STATIC: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_INTERFACE: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_VIRTUAL_RANGE: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_SUPER_RANGE: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_DIRECT_RANGE: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_STATIC_RANGE: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_INTERFACE_RANGE: com.android.dx.io.OpcodeInfo.Info;
					public static NEG_INT: com.android.dx.io.OpcodeInfo.Info;
					public static NOT_INT: com.android.dx.io.OpcodeInfo.Info;
					public static NEG_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static NOT_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static NEG_FLOAT: com.android.dx.io.OpcodeInfo.Info;
					public static NEG_DOUBLE: com.android.dx.io.OpcodeInfo.Info;
					public static INT_TO_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static INT_TO_FLOAT: com.android.dx.io.OpcodeInfo.Info;
					public static INT_TO_DOUBLE: com.android.dx.io.OpcodeInfo.Info;
					public static LONG_TO_INT: com.android.dx.io.OpcodeInfo.Info;
					public static LONG_TO_FLOAT: com.android.dx.io.OpcodeInfo.Info;
					public static LONG_TO_DOUBLE: com.android.dx.io.OpcodeInfo.Info;
					public static FLOAT_TO_INT: com.android.dx.io.OpcodeInfo.Info;
					public static FLOAT_TO_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static FLOAT_TO_DOUBLE: com.android.dx.io.OpcodeInfo.Info;
					public static DOUBLE_TO_INT: com.android.dx.io.OpcodeInfo.Info;
					public static DOUBLE_TO_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static DOUBLE_TO_FLOAT: com.android.dx.io.OpcodeInfo.Info;
					public static INT_TO_BYTE: com.android.dx.io.OpcodeInfo.Info;
					public static INT_TO_CHAR: com.android.dx.io.OpcodeInfo.Info;
					public static INT_TO_SHORT: com.android.dx.io.OpcodeInfo.Info;
					public static ADD_INT: com.android.dx.io.OpcodeInfo.Info;
					public static SUB_INT: com.android.dx.io.OpcodeInfo.Info;
					public static MUL_INT: com.android.dx.io.OpcodeInfo.Info;
					public static DIV_INT: com.android.dx.io.OpcodeInfo.Info;
					public static REM_INT: com.android.dx.io.OpcodeInfo.Info;
					public static AND_INT: com.android.dx.io.OpcodeInfo.Info;
					public static OR_INT: com.android.dx.io.OpcodeInfo.Info;
					public static XOR_INT: com.android.dx.io.OpcodeInfo.Info;
					public static SHL_INT: com.android.dx.io.OpcodeInfo.Info;
					public static SHR_INT: com.android.dx.io.OpcodeInfo.Info;
					public static USHR_INT: com.android.dx.io.OpcodeInfo.Info;
					public static ADD_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static SUB_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static MUL_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static DIV_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static REM_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static AND_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static OR_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static XOR_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static SHL_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static SHR_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static USHR_LONG: com.android.dx.io.OpcodeInfo.Info;
					public static ADD_FLOAT: com.android.dx.io.OpcodeInfo.Info;
					public static SUB_FLOAT: com.android.dx.io.OpcodeInfo.Info;
					public static MUL_FLOAT: com.android.dx.io.OpcodeInfo.Info;
					public static DIV_FLOAT: com.android.dx.io.OpcodeInfo.Info;
					public static REM_FLOAT: com.android.dx.io.OpcodeInfo.Info;
					public static ADD_DOUBLE: com.android.dx.io.OpcodeInfo.Info;
					public static SUB_DOUBLE: com.android.dx.io.OpcodeInfo.Info;
					public static MUL_DOUBLE: com.android.dx.io.OpcodeInfo.Info;
					public static DIV_DOUBLE: com.android.dx.io.OpcodeInfo.Info;
					public static REM_DOUBLE: com.android.dx.io.OpcodeInfo.Info;
					public static ADD_INT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static SUB_INT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static MUL_INT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static DIV_INT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static REM_INT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static AND_INT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static OR_INT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static XOR_INT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static SHL_INT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static SHR_INT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static USHR_INT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static ADD_LONG_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static SUB_LONG_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static MUL_LONG_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static DIV_LONG_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static REM_LONG_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static AND_LONG_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static OR_LONG_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static XOR_LONG_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static SHL_LONG_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static SHR_LONG_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static USHR_LONG_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static ADD_FLOAT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static SUB_FLOAT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static MUL_FLOAT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static DIV_FLOAT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static REM_FLOAT_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static ADD_DOUBLE_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static SUB_DOUBLE_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static MUL_DOUBLE_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static DIV_DOUBLE_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static REM_DOUBLE_2ADDR: com.android.dx.io.OpcodeInfo.Info;
					public static ADD_INT_LIT16: com.android.dx.io.OpcodeInfo.Info;
					public static RSUB_INT: com.android.dx.io.OpcodeInfo.Info;
					public static MUL_INT_LIT16: com.android.dx.io.OpcodeInfo.Info;
					public static DIV_INT_LIT16: com.android.dx.io.OpcodeInfo.Info;
					public static REM_INT_LIT16: com.android.dx.io.OpcodeInfo.Info;
					public static AND_INT_LIT16: com.android.dx.io.OpcodeInfo.Info;
					public static OR_INT_LIT16: com.android.dx.io.OpcodeInfo.Info;
					public static XOR_INT_LIT16: com.android.dx.io.OpcodeInfo.Info;
					public static ADD_INT_LIT8: com.android.dx.io.OpcodeInfo.Info;
					public static RSUB_INT_LIT8: com.android.dx.io.OpcodeInfo.Info;
					public static MUL_INT_LIT8: com.android.dx.io.OpcodeInfo.Info;
					public static DIV_INT_LIT8: com.android.dx.io.OpcodeInfo.Info;
					public static REM_INT_LIT8: com.android.dx.io.OpcodeInfo.Info;
					public static AND_INT_LIT8: com.android.dx.io.OpcodeInfo.Info;
					public static OR_INT_LIT8: com.android.dx.io.OpcodeInfo.Info;
					public static XOR_INT_LIT8: com.android.dx.io.OpcodeInfo.Info;
					public static SHL_INT_LIT8: com.android.dx.io.OpcodeInfo.Info;
					public static SHR_INT_LIT8: com.android.dx.io.OpcodeInfo.Info;
					public static USHR_INT_LIT8: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_POLYMORPHIC: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_POLYMORPHIC_RANGE: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_CUSTOM: com.android.dx.io.OpcodeInfo.Info;
					public static INVOKE_CUSTOM_RANGE: com.android.dx.io.OpcodeInfo.Info;
					public static get(opcode: number): com.android.dx.io.OpcodeInfo.Info;
					public static getName(opcode: number): string;
					public static getIndexType(opcode: number): com.android.dx.io.IndexType;
					public static getFormat(opcode: number): com.android.dx.io.instructions.InstructionCodec;
				}
				export module OpcodeInfo {
					export class Info extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.io.OpcodeInfo.Info>;
						public getOpcode(): number;
						public constructor(opcode: number, name: string, format: com.android.dx.io.instructions.InstructionCodec, indexType: com.android.dx.io.IndexType);
						public getFormat(): com.android.dx.io.instructions.InstructionCodec;
						public getIndexType(): com.android.dx.io.IndexType;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export class Opcodes extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.io.Opcodes>;
					public static SPECIAL_FORMAT: number;
					public static NO_NEXT: number;
					public static MIN_VALUE: number;
					public static MAX_VALUE: number;
					public static NOP: number;
					public static MOVE: number;
					public static MOVE_FROM16: number;
					public static MOVE_16: number;
					public static MOVE_WIDE: number;
					public static MOVE_WIDE_FROM16: number;
					public static MOVE_WIDE_16: number;
					public static MOVE_OBJECT: number;
					public static MOVE_OBJECT_FROM16: number;
					public static MOVE_OBJECT_16: number;
					public static MOVE_RESULT: number;
					public static MOVE_RESULT_WIDE: number;
					public static MOVE_RESULT_OBJECT: number;
					public static MOVE_EXCEPTION: number;
					public static RETURN_VOID: number;
					public static RETURN: number;
					public static RETURN_WIDE: number;
					public static RETURN_OBJECT: number;
					public static CONST_4: number;
					public static CONST_16: number;
					public static CONST: number;
					public static CONST_HIGH16: number;
					public static CONST_WIDE_16: number;
					public static CONST_WIDE_32: number;
					public static CONST_WIDE: number;
					public static CONST_WIDE_HIGH16: number;
					public static CONST_STRING: number;
					public static CONST_STRING_JUMBO: number;
					public static CONST_CLASS: number;
					public static MONITOR_ENTER: number;
					public static MONITOR_EXIT: number;
					public static CHECK_CAST: number;
					public static INSTANCE_OF: number;
					public static ARRAY_LENGTH: number;
					public static NEW_INSTANCE: number;
					public static NEW_ARRAY: number;
					public static FILLED_NEW_ARRAY: number;
					public static FILLED_NEW_ARRAY_RANGE: number;
					public static FILL_ARRAY_DATA: number;
					public static THROW: number;
					public static GOTO: number;
					public static GOTO_16: number;
					public static GOTO_32: number;
					public static PACKED_SWITCH: number;
					public static SPARSE_SWITCH: number;
					public static CMPL_FLOAT: number;
					public static CMPG_FLOAT: number;
					public static CMPL_DOUBLE: number;
					public static CMPG_DOUBLE: number;
					public static CMP_LONG: number;
					public static IF_EQ: number;
					public static IF_NE: number;
					public static IF_LT: number;
					public static IF_GE: number;
					public static IF_GT: number;
					public static IF_LE: number;
					public static IF_EQZ: number;
					public static IF_NEZ: number;
					public static IF_LTZ: number;
					public static IF_GEZ: number;
					public static IF_GTZ: number;
					public static IF_LEZ: number;
					public static AGET: number;
					public static AGET_WIDE: number;
					public static AGET_OBJECT: number;
					public static AGET_BOOLEAN: number;
					public static AGET_BYTE: number;
					public static AGET_CHAR: number;
					public static AGET_SHORT: number;
					public static APUT: number;
					public static APUT_WIDE: number;
					public static APUT_OBJECT: number;
					public static APUT_BOOLEAN: number;
					public static APUT_BYTE: number;
					public static APUT_CHAR: number;
					public static APUT_SHORT: number;
					public static IGET: number;
					public static IGET_WIDE: number;
					public static IGET_OBJECT: number;
					public static IGET_BOOLEAN: number;
					public static IGET_BYTE: number;
					public static IGET_CHAR: number;
					public static IGET_SHORT: number;
					public static IPUT: number;
					public static IPUT_WIDE: number;
					public static IPUT_OBJECT: number;
					public static IPUT_BOOLEAN: number;
					public static IPUT_BYTE: number;
					public static IPUT_CHAR: number;
					public static IPUT_SHORT: number;
					public static SGET: number;
					public static SGET_WIDE: number;
					public static SGET_OBJECT: number;
					public static SGET_BOOLEAN: number;
					public static SGET_BYTE: number;
					public static SGET_CHAR: number;
					public static SGET_SHORT: number;
					public static SPUT: number;
					public static SPUT_WIDE: number;
					public static SPUT_OBJECT: number;
					public static SPUT_BOOLEAN: number;
					public static SPUT_BYTE: number;
					public static SPUT_CHAR: number;
					public static SPUT_SHORT: number;
					public static INVOKE_VIRTUAL: number;
					public static INVOKE_SUPER: number;
					public static INVOKE_DIRECT: number;
					public static INVOKE_STATIC: number;
					public static INVOKE_INTERFACE: number;
					public static INVOKE_VIRTUAL_RANGE: number;
					public static INVOKE_SUPER_RANGE: number;
					public static INVOKE_DIRECT_RANGE: number;
					public static INVOKE_STATIC_RANGE: number;
					public static INVOKE_INTERFACE_RANGE: number;
					public static NEG_INT: number;
					public static NOT_INT: number;
					public static NEG_LONG: number;
					public static NOT_LONG: number;
					public static NEG_FLOAT: number;
					public static NEG_DOUBLE: number;
					public static INT_TO_LONG: number;
					public static INT_TO_FLOAT: number;
					public static INT_TO_DOUBLE: number;
					public static LONG_TO_INT: number;
					public static LONG_TO_FLOAT: number;
					public static LONG_TO_DOUBLE: number;
					public static FLOAT_TO_INT: number;
					public static FLOAT_TO_LONG: number;
					public static FLOAT_TO_DOUBLE: number;
					public static DOUBLE_TO_INT: number;
					public static DOUBLE_TO_LONG: number;
					public static DOUBLE_TO_FLOAT: number;
					public static INT_TO_BYTE: number;
					public static INT_TO_CHAR: number;
					public static INT_TO_SHORT: number;
					public static ADD_INT: number;
					public static SUB_INT: number;
					public static MUL_INT: number;
					public static DIV_INT: number;
					public static REM_INT: number;
					public static AND_INT: number;
					public static OR_INT: number;
					public static XOR_INT: number;
					public static SHL_INT: number;
					public static SHR_INT: number;
					public static USHR_INT: number;
					public static ADD_LONG: number;
					public static SUB_LONG: number;
					public static MUL_LONG: number;
					public static DIV_LONG: number;
					public static REM_LONG: number;
					public static AND_LONG: number;
					public static OR_LONG: number;
					public static XOR_LONG: number;
					public static SHL_LONG: number;
					public static SHR_LONG: number;
					public static USHR_LONG: number;
					public static ADD_FLOAT: number;
					public static SUB_FLOAT: number;
					public static MUL_FLOAT: number;
					public static DIV_FLOAT: number;
					public static REM_FLOAT: number;
					public static ADD_DOUBLE: number;
					public static SUB_DOUBLE: number;
					public static MUL_DOUBLE: number;
					public static DIV_DOUBLE: number;
					public static REM_DOUBLE: number;
					public static ADD_INT_2ADDR: number;
					public static SUB_INT_2ADDR: number;
					public static MUL_INT_2ADDR: number;
					public static DIV_INT_2ADDR: number;
					public static REM_INT_2ADDR: number;
					public static AND_INT_2ADDR: number;
					public static OR_INT_2ADDR: number;
					public static XOR_INT_2ADDR: number;
					public static SHL_INT_2ADDR: number;
					public static SHR_INT_2ADDR: number;
					public static USHR_INT_2ADDR: number;
					public static ADD_LONG_2ADDR: number;
					public static SUB_LONG_2ADDR: number;
					public static MUL_LONG_2ADDR: number;
					public static DIV_LONG_2ADDR: number;
					public static REM_LONG_2ADDR: number;
					public static AND_LONG_2ADDR: number;
					public static OR_LONG_2ADDR: number;
					public static XOR_LONG_2ADDR: number;
					public static SHL_LONG_2ADDR: number;
					public static SHR_LONG_2ADDR: number;
					public static USHR_LONG_2ADDR: number;
					public static ADD_FLOAT_2ADDR: number;
					public static SUB_FLOAT_2ADDR: number;
					public static MUL_FLOAT_2ADDR: number;
					public static DIV_FLOAT_2ADDR: number;
					public static REM_FLOAT_2ADDR: number;
					public static ADD_DOUBLE_2ADDR: number;
					public static SUB_DOUBLE_2ADDR: number;
					public static MUL_DOUBLE_2ADDR: number;
					public static DIV_DOUBLE_2ADDR: number;
					public static REM_DOUBLE_2ADDR: number;
					public static ADD_INT_LIT16: number;
					public static RSUB_INT: number;
					public static MUL_INT_LIT16: number;
					public static DIV_INT_LIT16: number;
					public static REM_INT_LIT16: number;
					public static AND_INT_LIT16: number;
					public static OR_INT_LIT16: number;
					public static XOR_INT_LIT16: number;
					public static ADD_INT_LIT8: number;
					public static RSUB_INT_LIT8: number;
					public static MUL_INT_LIT8: number;
					public static DIV_INT_LIT8: number;
					public static REM_INT_LIT8: number;
					public static AND_INT_LIT8: number;
					public static OR_INT_LIT8: number;
					public static XOR_INT_LIT8: number;
					public static SHL_INT_LIT8: number;
					public static SHR_INT_LIT8: number;
					public static USHR_INT_LIT8: number;
					public static INVOKE_POLYMORPHIC: number;
					public static INVOKE_POLYMORPHIC_RANGE: number;
					public static INVOKE_CUSTOM: number;
					public static INVOKE_CUSTOM_RANGE: number;
					public static PACKED_SWITCH_PAYLOAD: number;
					public static SPARSE_SWITCH_PAYLOAD: number;
					public static FILL_ARRAY_DATA_PAYLOAD: number;
					public static extractOpcodeFromUnit(opcodeUnit: number): number;
					public static isValidShape(opcode: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class AddressMap extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.io.instructions.AddressMap>;
						public constructor();
						public put(keyAddress: number, valueAddress: number): void;
						public get(keyAddress: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export abstract class BaseCodeCursor extends java.lang.Object implements com.android.dx.io.instructions.CodeCursor {
						public static class: java.lang.Class<com.android.dx.io.instructions.BaseCodeCursor>;
						public baseAddressForCursor(): number;
						public constructor();
						public setBaseAddress(param0: number, param1: number): void;
						public advance(amount: number): void;
						public setBaseAddress(targetAddress: number, baseAddress: number): void;
						public cursor(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class CodeCursor extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.io.instructions.CodeCursor>;
						/**
						 * Constructs a new instance of the com.android.dx.io.instructions.CodeCursor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							cursor(): number;
							baseAddressForCursor(): number;
							setBaseAddress(param0: number, param1: number): void;
						});
						public constructor();
						public baseAddressForCursor(): number;
						public setBaseAddress(param0: number, param1: number): void;
						public cursor(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class CodeInput extends java.lang.Object implements com.android.dx.io.instructions.CodeCursor {
						public static class: java.lang.Class<com.android.dx.io.instructions.CodeInput>;
						/**
						 * Constructs a new instance of the com.android.dx.io.instructions.CodeInput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasMore(): boolean;
							read(): number;
							readInt(): number;
							readLong(): number;
							cursor(): number;
							baseAddressForCursor(): number;
							setBaseAddress(param0: number, param1: number): void;
						});
						public constructor();
						public baseAddressForCursor(): number;
						public read(): number;
						public setBaseAddress(param0: number, param1: number): void;
						public readInt(): number;
						public hasMore(): boolean;
						public cursor(): number;
						public readLong(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class CodeOutput extends java.lang.Object implements com.android.dx.io.instructions.CodeCursor {
						public static class: java.lang.Class<com.android.dx.io.instructions.CodeOutput>;
						/**
						 * Constructs a new instance of the com.android.dx.io.instructions.CodeOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							write(param0: number): void;
							write(param0: number, param1: number): void;
							write(param0: number, param1: number, param2: number): void;
							write(param0: number, param1: number, param2: number, param3: number): void;
							write(param0: number, param1: number, param2: number, param3: number, param4: number): void;
							writeInt(param0: number): void;
							writeLong(param0: number): void;
							write(param0: number[]): void;
							write(param0: number[]): void;
							write(param0: number[]): void;
							write(param0: number[]): void;
							cursor(): number;
							baseAddressForCursor(): number;
							setBaseAddress(param0: number, param1: number): void;
						});
						public constructor();
						public write(param0: number, param1: number, param2: number): void;
						public baseAddressForCursor(): number;
						public write(param0: number, param1: number): void;
						public write(param0: number, param1: number, param2: number, param3: number): void;
						public setBaseAddress(param0: number, param1: number): void;
						public write(param0: number): void;
						public writeInt(param0: number): void;
						public write(param0: number[]): void;
						public cursor(): number;
						public write(param0: number, param1: number, param2: number, param3: number, param4: number): void;
						public writeLong(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export abstract class DecodedInstruction extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.io.instructions.DecodedInstruction>;
						public getTargetUnit(baseAddress: number): number;
						public getC(): number;
						public getAUnit(): number;
						public getRegisterCountUnit(): number;
						public getLiteral(): number;
						public getIndex(): number;
						public getCNibble(): number;
						public withProtoIndex(newIndex: number, newProtoIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public getLiteralInt(): number;
						public encode(out: com.android.dx.io.instructions.CodeOutput): void;
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
						public getTarget(): number;
						public getD(): number;
						public getOpcode(): number;
						public getFormat(): com.android.dx.io.instructions.InstructionCodec;
						public static decode(_in_: com.android.dx.io.instructions.CodeInput): com.android.dx.io.instructions.DecodedInstruction;
						public getDNibble(): number;
						public getTarget(baseAddress: number): number;
						public getTargetByte(baseAddress: number): number;
						public getCByte(): number;
						public getDUnit(): number;
						public getANibble(): number;
						public getLiteralUnit(): number;
						public getRegisterCount(): number;
						public getA(): number;
						public getCUnit(): number;
						public static decodeAll(encodedInstructions: number[]): com.android.dx.io.instructions.DecodedInstruction[];
						public getLiteralNibble(): number;
						public getE(): number;
						public getDByte(): number;
						public getENibble(): number;
						public getProtoIndex(): number;
						public getBByte(): number;
						public getIndexUnit(): number;
						public getBNibble(): number;
						public getOpcodeUnit(): number;
						public getLiteralByte(): number;
						public getB(): number;
						public getIndexType(): com.android.dx.io.IndexType;
						public getBUnit(): number;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public getAByte(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class FillArrayDataPayloadDecodedInstruction extends com.android.dx.io.instructions.DecodedInstruction {
						public static class: java.lang.Class<com.android.dx.io.instructions.FillArrayDataPayloadDecodedInstruction>;
						public getElementWidthUnit(): number;
						public getSize(): number;
						public getRegisterCount(): number;
						public getData(): any;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, data: number[]);
						public withIndex(newIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class FiveRegisterDecodedInstruction extends com.android.dx.io.instructions.DecodedInstruction {
						public static class: java.lang.Class<com.android.dx.io.instructions.FiveRegisterDecodedInstruction>;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number, param6: number, a: number, b: number, c: number, d: number);
						public getD(): number;
						public getC(): number;
						public getRegisterCount(): number;
						public getA(): number;
						public getB(): number;
						public getE(): number;
						public withIndex(newIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class FourRegisterDecodedInstruction extends com.android.dx.io.instructions.DecodedInstruction {
						public static class: java.lang.Class<com.android.dx.io.instructions.FourRegisterDecodedInstruction>;
						public getD(): number;
						public getC(): number;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number, param6: number, a: number, b: number, c: number);
						public getRegisterCount(): number;
						public getA(): number;
						public getB(): number;
						public withIndex(newIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export abstract class InstructionCodec {
						public static class: java.lang.Class<com.android.dx.io.instructions.InstructionCodec>;
						public static FORMAT_00X: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_10X: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_12X: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_11N: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_11X: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_10T: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_20T: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_20BC: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_22X: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_21T: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_21S: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_21H: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_21C: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_23X: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_22B: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_22T: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_22S: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_22C: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_22CS: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_30T: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_32X: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_31I: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_31T: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_31C: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_35C: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_35MS: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_35MI: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_3RC: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_3RMS: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_3RMI: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_51L: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_45CC: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_4RCC: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_PACKED_SWITCH_PAYLOAD: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_SPARSE_SWITCH_PAYLOAD: com.android.dx.io.instructions.InstructionCodec;
						public static FORMAT_FILL_ARRAY_DATA_PAYLOAD: com.android.dx.io.instructions.InstructionCodec;
						public static values(): com.android.dx.io.instructions.InstructionCodec[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public decode(param0: number, param1: com.android.dx.io.instructions.CodeInput): com.android.dx.io.instructions.DecodedInstruction;
						public static valueOf(name: string): com.android.dx.io.instructions.InstructionCodec;
						public encode(param0: com.android.dx.io.instructions.DecodedInstruction, param1: com.android.dx.io.instructions.CodeOutput): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class InvokePolymorphicDecodedInstruction extends com.android.dx.io.instructions.DecodedInstruction {
						public static class: java.lang.Class<com.android.dx.io.instructions.InvokePolymorphicDecodedInstruction>;
						public getD(): number;
						public getC(): number;
						public getRegisterCount(): number;
						public getG(): number;
						public withIndex(newIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public withProtoIndex(newIndex: number, newProtoIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public getE(): number;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, methodIndex: number, indexType: com.android.dx.io.IndexType, protoIndex: number, registers: number[]);
						public getF(): number;
						public getProtoIndex(): number;
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class InvokePolymorphicRangeDecodedInstruction extends com.android.dx.io.instructions.DecodedInstruction {
						public static class: java.lang.Class<com.android.dx.io.instructions.InvokePolymorphicRangeDecodedInstruction>;
						public getC(): number;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, methodIndex: number, indexType: com.android.dx.io.IndexType, c: number, registerCount: number, protoIndex: number);
						public getRegisterCount(): number;
						public withProtoIndex(newIndex: number, newProtoIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public withIndex(newIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public getProtoIndex(): number;
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class OneRegisterDecodedInstruction extends com.android.dx.io.instructions.DecodedInstruction {
						public static class: java.lang.Class<com.android.dx.io.instructions.OneRegisterDecodedInstruction>;
						public getRegisterCount(): number;
						public getA(): number;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number, param6: number);
						public withIndex(newIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class PackedSwitchPayloadDecodedInstruction extends com.android.dx.io.instructions.DecodedInstruction {
						public static class: java.lang.Class<com.android.dx.io.instructions.PackedSwitchPayloadDecodedInstruction>;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, firstKey: number, targets: number[]);
						public getTargets(): number[];
						public getRegisterCount(): number;
						public getFirstKey(): number;
						public withIndex(newIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class RegisterRangeDecodedInstruction extends com.android.dx.io.instructions.DecodedInstruction {
						public static class: java.lang.Class<com.android.dx.io.instructions.RegisterRangeDecodedInstruction>;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number, param6: number, a: number);
						public getRegisterCount(): number;
						public getA(): number;
						public withIndex(newIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class ShortArrayCodeInput extends com.android.dx.io.instructions.BaseCodeCursor implements com.android.dx.io.instructions.CodeInput {
						public static class: java.lang.Class<com.android.dx.io.instructions.ShortArrayCodeInput>;
						public baseAddressForCursor(): number;
						public read(): number;
						public constructor();
						public setBaseAddress(param0: number, param1: number): void;
						public readInt(): number;
						public constructor(array: number[]);
						public setBaseAddress(targetAddress: number, baseAddress: number): void;
						public hasMore(): boolean;
						public cursor(): number;
						public readLong(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class ShortArrayCodeOutput extends com.android.dx.io.instructions.BaseCodeCursor implements com.android.dx.io.instructions.CodeOutput {
						public static class: java.lang.Class<com.android.dx.io.instructions.ShortArrayCodeOutput>;
						public write(param0: number, param1: number): void;
						public constructor();
						public write(param0: number, param1: number, param2: number, param3: number): void;
						public write(param0: number): void;
						public getArray(): number[];
						public write(u0: number, u1: number): void;
						public writeInt(value: number): void;
						public setBaseAddress(targetAddress: number, baseAddress: number): void;
						public write(param0: number, param1: number, param2: number, param3: number, param4: number): void;
						public write(u0: number, u1: number, u2: number, u3: number): void;
						public writeLong(param0: number): void;
						public write(param0: number, param1: number, param2: number): void;
						public baseAddressForCursor(): number;
						public write(u0: number, u1: number, u2: number, u3: number, u4: number): void;
						public setBaseAddress(param0: number, param1: number): void;
						public constructor(maxSize: number);
						public writeLong(value: number): void;
						public writeInt(param0: number): void;
						public write(data: number[]): void;
						public write(param0: number[]): void;
						public cursor(): number;
						public write(u0: number, u1: number, u2: number): void;
						public write(codeUnit: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class SparseSwitchPayloadDecodedInstruction extends com.android.dx.io.instructions.DecodedInstruction {
						public static class: java.lang.Class<com.android.dx.io.instructions.SparseSwitchPayloadDecodedInstruction>;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, keys: number[], targets: number[]);
						public getTargets(): number[];
						public getRegisterCount(): number;
						public withIndex(newIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public getKeys(): number[];
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class ThreeRegisterDecodedInstruction extends com.android.dx.io.instructions.DecodedInstruction {
						public static class: java.lang.Class<com.android.dx.io.instructions.ThreeRegisterDecodedInstruction>;
						public getC(): number;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number, param6: number, a: number, b: number);
						public getRegisterCount(): number;
						public getA(): number;
						public getB(): number;
						public withIndex(newIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class TwoRegisterDecodedInstruction extends com.android.dx.io.instructions.DecodedInstruction {
						public static class: java.lang.Class<com.android.dx.io.instructions.TwoRegisterDecodedInstruction>;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number, param6: number, a: number);
						public getRegisterCount(): number;
						public getA(): number;
						public getB(): number;
						public withIndex(newIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module io {
				export module instructions {
					export class ZeroRegisterDecodedInstruction extends com.android.dx.io.instructions.DecodedInstruction {
						public static class: java.lang.Class<com.android.dx.io.instructions.ZeroRegisterDecodedInstruction>;
						public getRegisterCount(): number;
						public withIndex(newIndex: number): com.android.dx.io.instructions.DecodedInstruction;
						public constructor(format: com.android.dx.io.instructions.InstructionCodec, opcode: number, index: number, indexType: com.android.dx.io.IndexType, target: number, literal: number);
						public withIndex(param0: number): com.android.dx.io.instructions.DecodedInstruction;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module merge {
				export class CollisionPolicy {
					public static class: java.lang.Class<com.android.dx.merge.CollisionPolicy>;
					public static KEEP_FIRST: com.android.dx.merge.CollisionPolicy;
					public static FAIL: com.android.dx.merge.CollisionPolicy;
					public static values(): com.android.dx.merge.CollisionPolicy[];
					public static valueOf(name: string): com.android.dx.merge.CollisionPolicy;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module merge {
				export class DexMerger extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.merge.DexMerger>;
					public merge(): com.android.dex.Dex;
					public setCompactWasteThreshold(compactWasteThreshold: number): void;
					public static main(args: string[]): void;
					public constructor(dexes: com.android.dex.Dex[], collisionPolicy: com.android.dx.merge.CollisionPolicy, context: com.android.dx.command.dexer.DxContext);
				}
				export module DexMerger {
					export abstract class IdMerger<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.merge.DexMerger.IdMerger<any>>;
						public mergeSorted(): void;
						public constructor(this$0: com.android.dx.merge.DexMerger, out: com.android.dex.Dex.Section);
						public mergeUnsorted(): void;
					}
					export module IdMerger {
						export class UnsortedValue extends java.lang.Comparable<com.android.dx.merge.DexMerger.IdMerger.UnsortedValue> {
							public static class: java.lang.Class<com.android.dx.merge.DexMerger.IdMerger.UnsortedValue>;
							public compareTo(unsortedValue: com.android.dx.merge.DexMerger.IdMerger.UnsortedValue): number;
						}
					}
					export class WriterSizes extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.merge.DexMerger.WriterSizes>;
						public constructor(dexMerger: com.android.dx.merge.DexMerger);
						public constructor(dexes: com.android.dex.Dex[]);
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module merge {
				export class IndexMap extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.merge.IndexMap>;
					public stringIds: number[];
					public typeIds: number[];
					public protoIds: number[];
					public fieldIds: number[];
					public methodIds: number[];
					public callSiteIds: number[];
					public methodHandleIds: java.util.HashMap<java.lang.Integer,java.lang.Integer>;
					public adjust(sortableType: com.android.dx.merge.SortableType): com.android.dx.merge.SortableType;
					public adjustAnnotationDirectory(annotationDirectoryOffset: number): number;
					public putAnnotationSetOffset(oldOffset: number, newOffset: number): void;
					public adjust(callSiteId: com.android.dex.CallSiteId): com.android.dex.CallSiteId;
					public adjustAnnotationSet(annotationSetOffset: number): number;
					public putAnnotationDirectoryOffset(oldOffset: number, newOffset: number): void;
					public adjustAnnotation(annotationOffset: number): number;
					public putAnnotationOffset(oldOffset: number, newOffset: number): void;
					public adjustMethodHandle(methodHandleIndex: number): number;
					public adjustEncodedArray(encodedArray: com.android.dex.EncodedValue): com.android.dex.EncodedValue;
					public putTypeListOffset(oldOffset: number, newOffset: number): void;
					public adjustProto(protoIndex: number): number;
					public adjustType(typeIndex: number): number;
					public constructor(target: com.android.dex.Dex, tableOfContents: com.android.dex.TableOfContents);
					public adjust(annotation: com.android.dex.Annotation): com.android.dex.Annotation;
					public adjustTypeList(typeList: com.android.dex.TypeList): com.android.dex.TypeList;
					public adjustCallSite(callSiteIndex: number): number;
					public adjust(classDef: com.android.dex.ClassDef): com.android.dex.ClassDef;
					public putEncodedArrayValueOffset(oldOffset: number, newOffset: number): void;
					public adjust(protoId: com.android.dex.ProtoId): com.android.dex.ProtoId;
					public adjustEncodedValue(encodedValue: com.android.dex.EncodedValue): com.android.dex.EncodedValue;
					public adjustField(fieldIndex: number): number;
					public adjustMethod(methodIndex: number): number;
					public adjustTypeListOffset(typeListOffset: number): number;
					public adjustEncodedArray(encodedArrayAttribute: number): number;
					public adjustAnnotationSetRefList(annotationSetRefListOffset: number): number;
					public putAnnotationSetRefListOffset(oldOffset: number, newOffset: number): void;
					public adjust(methodHandle: com.android.dex.MethodHandle): com.android.dex.MethodHandle;
					public adjust(fieldId: com.android.dex.FieldId): com.android.dex.FieldId;
					public adjustString(stringIndex: number): number;
					public adjust(methodId: com.android.dex.MethodId): com.android.dex.MethodId;
				}
				export module IndexMap {
					export class EncodedValueTransformer extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.merge.IndexMap.EncodedValueTransformer>;
						public transform(reader: com.android.dex.EncodedValueReader): void;
						public constructor(param0: com.android.dx.merge.IndexMap, out: com.android.dex.util.ByteOutput);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module merge {
				export class InstructionTransformer extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.merge.InstructionTransformer>;
					public constructor();
					public transform(indexMap: com.android.dx.merge.IndexMap, encodedInstructions: number[]): number[];
				}
				export module InstructionTransformer {
					export class CallSiteVisitor extends java.lang.Object implements com.android.dx.io.CodeReader.Visitor {
						public static class: java.lang.Class<com.android.dx.merge.InstructionTransformer.CallSiteVisitor>;
						public visit(all: com.android.dx.io.instructions.DecodedInstruction[], one: com.android.dx.io.instructions.DecodedInstruction): void;
						public visit(param0: com.android.dx.io.instructions.DecodedInstruction[], param1: com.android.dx.io.instructions.DecodedInstruction): void;
					}
					export class FieldVisitor extends java.lang.Object implements com.android.dx.io.CodeReader.Visitor {
						public static class: java.lang.Class<com.android.dx.merge.InstructionTransformer.FieldVisitor>;
						public visit(all: com.android.dx.io.instructions.DecodedInstruction[], one: com.android.dx.io.instructions.DecodedInstruction): void;
						public visit(param0: com.android.dx.io.instructions.DecodedInstruction[], param1: com.android.dx.io.instructions.DecodedInstruction): void;
					}
					export class GenericVisitor extends java.lang.Object implements com.android.dx.io.CodeReader.Visitor {
						public static class: java.lang.Class<com.android.dx.merge.InstructionTransformer.GenericVisitor>;
						public visit(all: com.android.dx.io.instructions.DecodedInstruction[], one: com.android.dx.io.instructions.DecodedInstruction): void;
						public visit(param0: com.android.dx.io.instructions.DecodedInstruction[], param1: com.android.dx.io.instructions.DecodedInstruction): void;
					}
					export class MethodAndProtoVisitor extends java.lang.Object implements com.android.dx.io.CodeReader.Visitor {
						public static class: java.lang.Class<com.android.dx.merge.InstructionTransformer.MethodAndProtoVisitor>;
						public visit(all: com.android.dx.io.instructions.DecodedInstruction[], one: com.android.dx.io.instructions.DecodedInstruction): void;
						public visit(param0: com.android.dx.io.instructions.DecodedInstruction[], param1: com.android.dx.io.instructions.DecodedInstruction): void;
					}
					export class MethodVisitor extends java.lang.Object implements com.android.dx.io.CodeReader.Visitor {
						public static class: java.lang.Class<com.android.dx.merge.InstructionTransformer.MethodVisitor>;
						public visit(all: com.android.dx.io.instructions.DecodedInstruction[], one: com.android.dx.io.instructions.DecodedInstruction): void;
						public visit(param0: com.android.dx.io.instructions.DecodedInstruction[], param1: com.android.dx.io.instructions.DecodedInstruction): void;
					}
					export class StringVisitor extends java.lang.Object implements com.android.dx.io.CodeReader.Visitor {
						public static class: java.lang.Class<com.android.dx.merge.InstructionTransformer.StringVisitor>;
						public visit(all: com.android.dx.io.instructions.DecodedInstruction[], one: com.android.dx.io.instructions.DecodedInstruction): void;
						public visit(param0: com.android.dx.io.instructions.DecodedInstruction[], param1: com.android.dx.io.instructions.DecodedInstruction): void;
					}
					export class TypeVisitor extends java.lang.Object implements com.android.dx.io.CodeReader.Visitor {
						public static class: java.lang.Class<com.android.dx.merge.InstructionTransformer.TypeVisitor>;
						public visit(all: com.android.dx.io.instructions.DecodedInstruction[], one: com.android.dx.io.instructions.DecodedInstruction): void;
						public visit(param0: com.android.dx.io.instructions.DecodedInstruction[], param1: com.android.dx.io.instructions.DecodedInstruction): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module merge {
				export class SortableType extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.merge.SortableType>;
					public static NULLS_LAST_ORDER: java.util.Comparator<com.android.dx.merge.SortableType>;
					public constructor(dex: com.android.dex.Dex, indexMap: com.android.dx.merge.IndexMap, classDef: com.android.dex.ClassDef);
					public getTypeIndex(): number;
					public isDepthAssigned(): boolean;
					public getIndexMap(): com.android.dx.merge.IndexMap;
					public getDex(): com.android.dex.Dex;
					public getClassDef(): com.android.dex.ClassDef;
					public tryAssignDepth(types: com.android.dx.merge.SortableType[]): boolean;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module annotation {
					export class Annotation extends com.android.dx.util.MutabilityControl {
						public static class: java.lang.Class<com.android.dx.rop.annotation.Annotation>;
						public getNameValuePairs(): java.util.Collection<com.android.dx.rop.annotation.NameValuePair>;
						public constructor();
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getVisibility(): com.android.dx.rop.annotation.AnnotationVisibility;
						public hashCode(): number;
						public put(pair: com.android.dx.rop.annotation.NameValuePair): void;
						public toString(): string;
						public constructor(mutable: boolean);
						public toHuman(): string;
						public add(pair: com.android.dx.rop.annotation.NameValuePair): void;
						public compareTo(other: com.android.dx.rop.annotation.Annotation): number;
						public constructor(type: com.android.dx.rop.cst.CstType, visibility: com.android.dx.rop.annotation.AnnotationVisibility);
						public getType(): com.android.dx.rop.cst.CstType;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module annotation {
					export class AnnotationVisibility extends com.android.dx.util.ToHuman {
						public static class: java.lang.Class<com.android.dx.rop.annotation.AnnotationVisibility>;
						public static RUNTIME: com.android.dx.rop.annotation.AnnotationVisibility;
						public static BUILD: com.android.dx.rop.annotation.AnnotationVisibility;
						public static SYSTEM: com.android.dx.rop.annotation.AnnotationVisibility;
						public static EMBEDDED: com.android.dx.rop.annotation.AnnotationVisibility;
						public static valueOf(name: string): com.android.dx.rop.annotation.AnnotationVisibility;
						public toHuman(): string;
						public static values(): com.android.dx.rop.annotation.AnnotationVisibility[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module annotation {
					export class Annotations extends com.android.dx.util.MutabilityControl implements java.lang.Comparable<com.android.dx.rop.annotation.Annotations>  {
						public static class: java.lang.Class<com.android.dx.rop.annotation.Annotations>;
						public static EMPTY: com.android.dx.rop.annotation.Annotations;
						public constructor();
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public hashCode(): number;
						public addAll(toAdd: com.android.dx.rop.annotation.Annotations): void;
						public static combine(a1: com.android.dx.rop.annotation.Annotations, a2: com.android.dx.rop.annotation.Annotations): com.android.dx.rop.annotation.Annotations;
						public toString(): string;
						public constructor(mutable: boolean);
						public add(annotation: com.android.dx.rop.annotation.Annotation): void;
						public static combine(annotations: com.android.dx.rop.annotation.Annotations, annotation: com.android.dx.rop.annotation.Annotation): com.android.dx.rop.annotation.Annotations;
						public compareTo(other: com.android.dx.rop.annotation.Annotations): number;
						public getAnnotations(): java.util.Collection<com.android.dx.rop.annotation.Annotation>;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module annotation {
					export class AnnotationsList extends com.android.dx.util.FixedSizeList {
						public static class: java.lang.Class<com.android.dx.rop.annotation.AnnotationsList>;
						public static EMPTY: com.android.dx.rop.annotation.AnnotationsList;
						public static combine(list1: com.android.dx.rop.annotation.AnnotationsList, list2: com.android.dx.rop.annotation.AnnotationsList): com.android.dx.rop.annotation.AnnotationsList;
						public constructor();
						public toHuman(): string;
						public get(n: number): com.android.dx.rop.annotation.Annotations;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public constructor(size: number);
						public set(n: number, a: com.android.dx.rop.annotation.Annotations): void;
						public constructor(mutable: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module annotation {
					export class NameValuePair extends java.lang.Comparable<com.android.dx.rop.annotation.NameValuePair> {
						public static class: java.lang.Class<com.android.dx.rop.annotation.NameValuePair>;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public compareTo(other: com.android.dx.rop.annotation.NameValuePair): number;
						public constructor(name: com.android.dx.rop.cst.CstString, value: com.android.dx.rop.cst.Constant);
						public getValue(): com.android.dx.rop.cst.Constant;
						public hashCode(): number;
						public getName(): com.android.dx.rop.cst.CstString;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class AccessFlags extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.code.AccessFlags>;
						public static ACC_PUBLIC: number;
						public static ACC_PRIVATE: number;
						public static ACC_PROTECTED: number;
						public static ACC_STATIC: number;
						public static ACC_FINAL: number;
						public static ACC_SYNCHRONIZED: number;
						public static ACC_SUPER: number;
						public static ACC_VOLATILE: number;
						public static ACC_BRIDGE: number;
						public static ACC_TRANSIENT: number;
						public static ACC_VARARGS: number;
						public static ACC_NATIVE: number;
						public static ACC_INTERFACE: number;
						public static ACC_ABSTRACT: number;
						public static ACC_STRICT: number;
						public static ACC_SYNTHETIC: number;
						public static ACC_ANNOTATION: number;
						public static ACC_ENUM: number;
						public static ACC_CONSTRUCTOR: number;
						public static ACC_DECLARED_SYNCHRONIZED: number;
						public static CLASS_FLAGS: number;
						public static INNER_CLASS_FLAGS: number;
						public static FIELD_FLAGS: number;
						public static METHOD_FLAGS: number;
						public static isInterface(flags: number): boolean;
						public static isProtected(flags: number): boolean;
						public static isAnnotation(flags: number): boolean;
						public static fieldString(flags: number): string;
						public static isEnum(flags: number): boolean;
						public static classString(flags: number): string;
						public static isConstructor(flags: number): boolean;
						public static isDeclaredSynchronized(flags: number): boolean;
						public static isPublic(flags: number): boolean;
						public static isAbstract(flags: number): boolean;
						public static isSynchronized(flags: number): boolean;
						public static isNative(flags: number): boolean;
						public static isStatic(flags: number): boolean;
						public static methodString(flags: number): string;
						public static innerClassString(flags: number): string;
						public static isPrivate(flags: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class BasicBlock extends java.lang.Object implements com.android.dx.util.LabeledItem {
						public static class: java.lang.Class<com.android.dx.rop.code.BasicBlock>;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getInsns(): com.android.dx.rop.code.InsnList;
						public getLabel(): number;
						public getSuccessors(): com.android.dx.util.IntList;
						public getSecondarySuccessor(): number;
						public getExceptionHandlerTypes(): com.android.dx.rop.type.TypeList;
						public hashCode(): number;
						public canThrow(): boolean;
						public getFirstInsn(): com.android.dx.rop.code.Insn;
						public toString(): string;
						public getLastInsn(): com.android.dx.rop.code.Insn;
						public hasExceptionHandlers(): boolean;
						public getPrimarySuccessor(): number;
						public withRegisterOffset(delta: number): com.android.dx.rop.code.BasicBlock;
						public constructor(label: number, insns: com.android.dx.rop.code.InsnList, successors: com.android.dx.util.IntList, primarySuccessor: number);
					}
					export module BasicBlock {
						export class Visitor extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.rop.code.BasicBlock.Visitor>;
							/**
							 * Constructs a new instance of the com.android.dx.rop.code.BasicBlock$Visitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								visitBlock(param0: com.android.dx.rop.code.BasicBlock): void;
							});
							public constructor();
							public visitBlock(param0: com.android.dx.rop.code.BasicBlock): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class BasicBlockList extends com.android.dx.util.LabeledList {
						public static class: java.lang.Class<com.android.dx.rop.code.BasicBlockList>;
						public preferredSuccessorOf(block: com.android.dx.rop.code.BasicBlock): com.android.dx.rop.code.BasicBlock;
						public catchesEqual(block1: com.android.dx.rop.code.BasicBlock, block2: com.android.dx.rop.code.BasicBlock): boolean;
						public withRegisterOffset(delta: number): com.android.dx.rop.code.BasicBlockList;
						public constructor();
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public labelToBlock(label: number): com.android.dx.rop.code.BasicBlock;
						public constructor(mutable: boolean);
						public getInstructionCount(): number;
						public toHuman(): string;
						public getMutableCopy(): com.android.dx.rop.code.BasicBlockList;
						public constructor(size: number);
						public getEffectiveInstructionCount(): number;
						public get(n: number): com.android.dx.rop.code.BasicBlock;
						public set(n: number, bb: com.android.dx.rop.code.BasicBlock): void;
						public set(n: number, item: com.android.dx.util.LabeledItem): void;
						public constructor(old: com.android.dx.util.LabeledList);
						public getRegCount(): number;
						public forEachInsn(visitor: com.android.dx.rop.code.Insn.Visitor): void;
					}
					export module BasicBlockList {
						export class RegCountVisitor extends java.lang.Object implements com.android.dx.rop.code.Insn.Visitor {
							public static class: java.lang.Class<com.android.dx.rop.code.BasicBlockList.RegCountVisitor>;
							public constructor();
							public visitInvokePolymorphicInsn(param0: com.android.dx.rop.code.InvokePolymorphicInsn): void;
							public visitThrowingCstInsn(param0: com.android.dx.rop.code.ThrowingCstInsn): void;
							public visitPlainInsn(param0: com.android.dx.rop.code.PlainInsn): void;
							public visitPlainInsn(insn: com.android.dx.rop.code.PlainInsn): void;
							public visitSwitchInsn(insn: com.android.dx.rop.code.SwitchInsn): void;
							public visitThrowingInsn(insn: com.android.dx.rop.code.ThrowingInsn): void;
							public visitThrowingInsn(param0: com.android.dx.rop.code.ThrowingInsn): void;
							public getRegCount(): number;
							public visitFillArrayDataInsn(insn: com.android.dx.rop.code.FillArrayDataInsn): void;
							public visitPlainCstInsn(insn: com.android.dx.rop.code.PlainCstInsn): void;
							public visitInvokePolymorphicInsn(insn: com.android.dx.rop.code.InvokePolymorphicInsn): void;
							public visitThrowingCstInsn(insn: com.android.dx.rop.code.ThrowingCstInsn): void;
							public visitPlainCstInsn(param0: com.android.dx.rop.code.PlainCstInsn): void;
							public visitFillArrayDataInsn(param0: com.android.dx.rop.code.FillArrayDataInsn): void;
							public visitSwitchInsn(param0: com.android.dx.rop.code.SwitchInsn): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class ConservativeTranslationAdvice extends java.lang.Object implements com.android.dx.rop.code.TranslationAdvice {
						public static class: java.lang.Class<com.android.dx.rop.code.ConservativeTranslationAdvice>;
						public static THE_ONE: com.android.dx.rop.code.ConservativeTranslationAdvice;
						public hasConstantOperation(param0: com.android.dx.rop.code.Rop, param1: com.android.dx.rop.code.RegisterSpec, param2: com.android.dx.rop.code.RegisterSpec): boolean;
						public hasConstantOperation(opcode: com.android.dx.rop.code.Rop, sourceA: com.android.dx.rop.code.RegisterSpec, sourceB: com.android.dx.rop.code.RegisterSpec): boolean;
						public requiresSourcesInOrder(param0: com.android.dx.rop.code.Rop, param1: com.android.dx.rop.code.RegisterSpecList): boolean;
						public requiresSourcesInOrder(opcode: com.android.dx.rop.code.Rop, sources: com.android.dx.rop.code.RegisterSpecList): boolean;
						public getMaxOptimalRegisterCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export abstract class CstInsn extends com.android.dx.rop.code.Insn {
						public static class: java.lang.Class<com.android.dx.rop.code.CstInsn>;
						public toHuman(): string;
						public getConstant(): com.android.dx.rop.cst.Constant;
						public contentEquals(b: com.android.dx.rop.code.Insn): boolean;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList, cst: com.android.dx.rop.cst.Constant);
						public getInlineString(): string;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class DexTranslationAdvice extends java.lang.Object implements com.android.dx.rop.code.TranslationAdvice {
						public static class: java.lang.Class<com.android.dx.rop.code.DexTranslationAdvice>;
						public static THE_ONE: com.android.dx.rop.code.DexTranslationAdvice;
						public static NO_SOURCES_IN_ORDER: com.android.dx.rop.code.DexTranslationAdvice;
						public hasConstantOperation(param0: com.android.dx.rop.code.Rop, param1: com.android.dx.rop.code.RegisterSpec, param2: com.android.dx.rop.code.RegisterSpec): boolean;
						public hasConstantOperation(opcode: com.android.dx.rop.code.Rop, sourceA: com.android.dx.rop.code.RegisterSpec, sourceB: com.android.dx.rop.code.RegisterSpec): boolean;
						public requiresSourcesInOrder(param0: com.android.dx.rop.code.Rop, param1: com.android.dx.rop.code.RegisterSpecList): boolean;
						public requiresSourcesInOrder(opcode: com.android.dx.rop.code.Rop, sources: com.android.dx.rop.code.RegisterSpecList): boolean;
						public getMaxOptimalRegisterCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class Exceptions extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.code.Exceptions>;
						public static TYPE_ArithmeticException: com.android.dx.rop.type.Type;
						public static TYPE_ArrayIndexOutOfBoundsException: com.android.dx.rop.type.Type;
						public static TYPE_ArrayStoreException: com.android.dx.rop.type.Type;
						public static TYPE_ClassCastException: com.android.dx.rop.type.Type;
						public static TYPE_Error: com.android.dx.rop.type.Type;
						public static TYPE_IllegalMonitorStateException: com.android.dx.rop.type.Type;
						public static TYPE_NegativeArraySizeException: com.android.dx.rop.type.Type;
						public static TYPE_NullPointerException: com.android.dx.rop.type.Type;
						public static LIST_Error: com.android.dx.rop.type.StdTypeList;
						public static LIST_Error_ArithmeticException: com.android.dx.rop.type.StdTypeList;
						public static LIST_Error_ClassCastException: com.android.dx.rop.type.StdTypeList;
						public static LIST_Error_NegativeArraySizeException: com.android.dx.rop.type.StdTypeList;
						public static LIST_Error_NullPointerException: com.android.dx.rop.type.StdTypeList;
						public static LIST_Error_Null_ArrayIndexOutOfBounds: com.android.dx.rop.type.StdTypeList;
						public static LIST_Error_Null_ArrayIndex_ArrayStore: com.android.dx.rop.type.StdTypeList;
						public static LIST_Error_Null_IllegalMonitorStateException: com.android.dx.rop.type.StdTypeList;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class FillArrayDataInsn extends com.android.dx.rop.code.Insn {
						public static class: java.lang.Class<com.android.dx.rop.code.FillArrayDataInsn>;
						public accept(param0: com.android.dx.rop.code.Insn.Visitor): void;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, sources: com.android.dx.rop.code.RegisterSpecList, initValues: java.util.ArrayList<com.android.dx.rop.cst.Constant>, cst: com.android.dx.rop.cst.Constant);
						public withAddedCatch(type: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public accept(visitor: com.android.dx.rop.code.Insn.Visitor): void;
						public withAddedCatch(param0: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public withNewRegisters(param0: com.android.dx.rop.code.RegisterSpec, param1: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public withNewRegisters(result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public toHuman(): string;
						public getInitValues(): java.util.ArrayList<com.android.dx.rop.cst.Constant>;
						public getConstant(): com.android.dx.rop.cst.Constant;
						public getCatches(): com.android.dx.rop.type.TypeList;
						public withRegisterOffset(param0: number): com.android.dx.rop.code.Insn;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList);
						public withRegisterOffset(delta: number): com.android.dx.rop.code.Insn;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export abstract class Insn extends java.lang.Object implements com.android.dx.util.ToHuman {
						public static class: java.lang.Class<com.android.dx.rop.code.Insn>;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getPosition(): com.android.dx.rop.code.SourcePosition;
						public accept(param0: com.android.dx.rop.code.Insn.Visitor): void;
						public contentEquals(b: com.android.dx.rop.code.Insn): boolean;
						public copy(): com.android.dx.rop.code.Insn;
						public getResult(): com.android.dx.rop.code.RegisterSpec;
						public getOpcode(): com.android.dx.rop.code.Rop;
						public hashCode(): number;
						public canThrow(): boolean;
						public toString(): string;
						public withAddedCatch(param0: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public withNewRegisters(param0: com.android.dx.rop.code.RegisterSpec, param1: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public toHuman(): string;
						public getLocalAssignment(): com.android.dx.rop.code.RegisterSpec;
						public toHumanWithInline(extra: string): string;
						public getInlineString(): string;
						public getSources(): com.android.dx.rop.code.RegisterSpecList;
						public withSourceLiteral(): com.android.dx.rop.code.Insn;
						public getCatches(): com.android.dx.rop.type.TypeList;
						public withRegisterOffset(param0: number): com.android.dx.rop.code.Insn;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList);
						public toStringWithInline(extra: string): string;
					}
					export module Insn {
						export class BaseVisitor extends java.lang.Object implements com.android.dx.rop.code.Insn.Visitor {
							public static class: java.lang.Class<com.android.dx.rop.code.Insn.BaseVisitor>;
							public constructor();
							public visitInvokePolymorphicInsn(param0: com.android.dx.rop.code.InvokePolymorphicInsn): void;
							public visitThrowingCstInsn(param0: com.android.dx.rop.code.ThrowingCstInsn): void;
							public visitPlainInsn(param0: com.android.dx.rop.code.PlainInsn): void;
							public visitPlainInsn(insn: com.android.dx.rop.code.PlainInsn): void;
							public visitSwitchInsn(insn: com.android.dx.rop.code.SwitchInsn): void;
							public visitThrowingInsn(insn: com.android.dx.rop.code.ThrowingInsn): void;
							public visitThrowingInsn(param0: com.android.dx.rop.code.ThrowingInsn): void;
							public visitFillArrayDataInsn(insn: com.android.dx.rop.code.FillArrayDataInsn): void;
							public visitPlainCstInsn(insn: com.android.dx.rop.code.PlainCstInsn): void;
							public visitInvokePolymorphicInsn(insn: com.android.dx.rop.code.InvokePolymorphicInsn): void;
							public visitThrowingCstInsn(insn: com.android.dx.rop.code.ThrowingCstInsn): void;
							public visitPlainCstInsn(param0: com.android.dx.rop.code.PlainCstInsn): void;
							public visitFillArrayDataInsn(param0: com.android.dx.rop.code.FillArrayDataInsn): void;
							public visitSwitchInsn(param0: com.android.dx.rop.code.SwitchInsn): void;
						}
						export class Visitor extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.rop.code.Insn.Visitor>;
							/**
							 * Constructs a new instance of the com.android.dx.rop.code.Insn$Visitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								visitPlainInsn(param0: com.android.dx.rop.code.PlainInsn): void;
								visitPlainCstInsn(param0: com.android.dx.rop.code.PlainCstInsn): void;
								visitSwitchInsn(param0: com.android.dx.rop.code.SwitchInsn): void;
								visitThrowingCstInsn(param0: com.android.dx.rop.code.ThrowingCstInsn): void;
								visitThrowingInsn(param0: com.android.dx.rop.code.ThrowingInsn): void;
								visitFillArrayDataInsn(param0: com.android.dx.rop.code.FillArrayDataInsn): void;
								visitInvokePolymorphicInsn(param0: com.android.dx.rop.code.InvokePolymorphicInsn): void;
							});
							public constructor();
							public visitInvokePolymorphicInsn(param0: com.android.dx.rop.code.InvokePolymorphicInsn): void;
							public visitThrowingCstInsn(param0: com.android.dx.rop.code.ThrowingCstInsn): void;
							public visitPlainInsn(param0: com.android.dx.rop.code.PlainInsn): void;
							public visitPlainCstInsn(param0: com.android.dx.rop.code.PlainCstInsn): void;
							public visitThrowingInsn(param0: com.android.dx.rop.code.ThrowingInsn): void;
							public visitFillArrayDataInsn(param0: com.android.dx.rop.code.FillArrayDataInsn): void;
							public visitSwitchInsn(param0: com.android.dx.rop.code.SwitchInsn): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class InsnList extends com.android.dx.util.FixedSizeList {
						public static class: java.lang.Class<com.android.dx.rop.code.InsnList>;
						public constructor();
						public toHuman(): string;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public get(n: number): com.android.dx.rop.code.Insn;
						public forEach(visitor: com.android.dx.rop.code.Insn.Visitor): void;
						public constructor(size: number);
						public withRegisterOffset(delta: number): com.android.dx.rop.code.InsnList;
						public set(n: number, insn: com.android.dx.rop.code.Insn): void;
						public contentEquals(b: com.android.dx.rop.code.InsnList): boolean;
						public getLast(): com.android.dx.rop.code.Insn;
						public constructor(mutable: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class InvokePolymorphicInsn extends com.android.dx.rop.code.Insn {
						public static class: java.lang.Class<com.android.dx.rop.code.InvokePolymorphicInsn>;
						public accept(param0: com.android.dx.rop.code.Insn.Visitor): void;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, sources: com.android.dx.rop.code.RegisterSpecList, catches: com.android.dx.rop.type.TypeList, callSiteMethod: com.android.dx.rop.cst.CstMethodRef);
						public withAddedCatch(type: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public accept(visitor: com.android.dx.rop.code.Insn.Visitor): void;
						public withAddedCatch(param0: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public withNewRegisters(param0: com.android.dx.rop.code.RegisterSpec, param1: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public withNewRegisters(result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public toHuman(): string;
						public getCallSiteProto(): com.android.dx.rop.cst.CstProtoRef;
						public getInlineString(): string;
						public getCallSiteMethod(): com.android.dx.rop.cst.CstMethodRef;
						public getCatches(): com.android.dx.rop.type.TypeList;
						public withRegisterOffset(param0: number): com.android.dx.rop.code.Insn;
						public getInvokeMethod(): com.android.dx.rop.cst.CstMethodRef;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList);
						public withRegisterOffset(delta: number): com.android.dx.rop.code.Insn;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class LocalItem extends java.lang.Comparable<com.android.dx.rop.code.LocalItem> {
						public static class: java.lang.Class<com.android.dx.rop.code.LocalItem>;
						public getSignature(): com.android.dx.rop.cst.CstString;
						public static make(name: com.android.dx.rop.cst.CstString, signature: com.android.dx.rop.cst.CstString): com.android.dx.rop.code.LocalItem;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public hashCode(): number;
						public getName(): com.android.dx.rop.cst.CstString;
						public compareTo(local: com.android.dx.rop.code.LocalItem): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class LocalVariableExtractor extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.code.LocalVariableExtractor>;
						public static extract(method: com.android.dx.rop.code.RopMethod): com.android.dx.rop.code.LocalVariableInfo;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class LocalVariableInfo extends com.android.dx.util.MutabilityControl {
						public static class: java.lang.Class<com.android.dx.rop.code.LocalVariableInfo>;
						public constructor();
						public constructor(method: com.android.dx.rop.code.RopMethod);
						public setStarts(label: number, specs: com.android.dx.rop.code.RegisterSpecSet): void;
						public addAssignment(insn: com.android.dx.rop.code.Insn, spec: com.android.dx.rop.code.RegisterSpec): void;
						public getStarts(block: com.android.dx.rop.code.BasicBlock): com.android.dx.rop.code.RegisterSpecSet;
						public getStarts(label: number): com.android.dx.rop.code.RegisterSpecSet;
						public mutableCopyOfStarts(label: number): com.android.dx.rop.code.RegisterSpecSet;
						public debugDump(): void;
						public mergeStarts(label: number, specs: com.android.dx.rop.code.RegisterSpecSet): boolean;
						public getAssignmentCount(): number;
						public getAssignment(insn: com.android.dx.rop.code.Insn): com.android.dx.rop.code.RegisterSpec;
						public constructor(mutable: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class PlainCstInsn extends com.android.dx.rop.code.CstInsn {
						public static class: java.lang.Class<com.android.dx.rop.code.PlainCstInsn>;
						public withNewRegisters(result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public toHuman(): string;
						public accept(param0: com.android.dx.rop.code.Insn.Visitor): void;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList, cst: com.android.dx.rop.cst.Constant);
						public getCatches(): com.android.dx.rop.type.TypeList;
						public withRegisterOffset(param0: number): com.android.dx.rop.code.Insn;
						public withAddedCatch(type: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList);
						public accept(visitor: com.android.dx.rop.code.Insn.Visitor): void;
						public withRegisterOffset(delta: number): com.android.dx.rop.code.Insn;
						public withAddedCatch(param0: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public withNewRegisters(param0: com.android.dx.rop.code.RegisterSpec, param1: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class PlainInsn extends com.android.dx.rop.code.Insn {
						public static class: java.lang.Class<com.android.dx.rop.code.PlainInsn>;
						public accept(param0: com.android.dx.rop.code.Insn.Visitor): void;
						public withAddedCatch(type: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public accept(visitor: com.android.dx.rop.code.Insn.Visitor): void;
						public withAddedCatch(param0: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public withNewRegisters(param0: com.android.dx.rop.code.RegisterSpec, param1: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public withNewRegisters(result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public toHuman(): string;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, source: com.android.dx.rop.code.RegisterSpec);
						public withSourceLiteral(): com.android.dx.rop.code.Insn;
						public getCatches(): com.android.dx.rop.type.TypeList;
						public withRegisterOffset(param0: number): com.android.dx.rop.code.Insn;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList);
						public withRegisterOffset(delta: number): com.android.dx.rop.code.Insn;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class RegOps extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.code.RegOps>;
						public static NOP: number;
						public static MOVE: number;
						public static MOVE_PARAM: number;
						public static MOVE_EXCEPTION: number;
						public static CONST: number;
						public static GOTO: number;
						public static IF_EQ: number;
						public static IF_NE: number;
						public static IF_LT: number;
						public static IF_GE: number;
						public static IF_LE: number;
						public static IF_GT: number;
						public static SWITCH: number;
						public static ADD: number;
						public static SUB: number;
						public static MUL: number;
						public static DIV: number;
						public static REM: number;
						public static NEG: number;
						public static AND: number;
						public static OR: number;
						public static XOR: number;
						public static SHL: number;
						public static SHR: number;
						public static USHR: number;
						public static NOT: number;
						public static CMPL: number;
						public static CMPG: number;
						public static CONV: number;
						public static TO_BYTE: number;
						public static TO_CHAR: number;
						public static TO_SHORT: number;
						public static RETURN: number;
						public static ARRAY_LENGTH: number;
						public static THROW: number;
						public static MONITOR_ENTER: number;
						public static MONITOR_EXIT: number;
						public static AGET: number;
						public static APUT: number;
						public static NEW_INSTANCE: number;
						public static NEW_ARRAY: number;
						public static FILLED_NEW_ARRAY: number;
						public static CHECK_CAST: number;
						public static INSTANCE_OF: number;
						public static GET_FIELD: number;
						public static GET_STATIC: number;
						public static PUT_FIELD: number;
						public static PUT_STATIC: number;
						public static INVOKE_STATIC: number;
						public static INVOKE_VIRTUAL: number;
						public static INVOKE_SUPER: number;
						public static INVOKE_DIRECT: number;
						public static INVOKE_INTERFACE: number;
						public static MARK_LOCAL: number;
						public static MOVE_RESULT: number;
						public static MOVE_RESULT_PSEUDO: number;
						public static FILL_ARRAY_DATA: number;
						public static INVOKE_POLYMORPHIC: number;
						public static INVOKE_CUSTOM: number;
						public static flippedIfOpcode(opcode: number): number;
						public static opName(opcode: number): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class RegisterSpec extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.code.RegisterSpec>;
						public static PREFIX: string;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public withLocalItem(local: com.android.dx.rop.code.LocalItem): com.android.dx.rop.code.RegisterSpec;
						public hashCode(): number;
						public getTypeBearer(): com.android.dx.rop.type.TypeBearer;
						public withReg(newReg: number): com.android.dx.rop.code.RegisterSpec;
						public static make(reg: number, type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.RegisterSpec;
						public static make(reg: number, type: com.android.dx.rop.type.TypeBearer, local: com.android.dx.rop.code.LocalItem): com.android.dx.rop.code.RegisterSpec;
						public withSimpleType(): com.android.dx.rop.code.RegisterSpec;
						public getType(): com.android.dx.rop.type.Type;
						public withType(newType: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.RegisterSpec;
						public isCategory1(): boolean;
						public isCategory2(): boolean;
						public static makeLocalOptional(reg: number, type: com.android.dx.rop.type.TypeBearer, local: com.android.dx.rop.code.LocalItem): com.android.dx.rop.code.RegisterSpec;
						public getLocalItem(): com.android.dx.rop.code.LocalItem;
						public equalsUsingSimpleType(other: com.android.dx.rop.code.RegisterSpec): boolean;
						public getBasicFrameType(): number;
						public getNextReg(): number;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public matchesVariable(other: com.android.dx.rop.code.RegisterSpec): boolean;
						public compareTo(other: com.android.dx.rop.code.RegisterSpec): number;
						public toString(): string;
						public getCategory(): number;
						public toHuman(): string;
						public isConstant(): boolean;
						public regString(): string;
						public withOffset(delta: number): com.android.dx.rop.code.RegisterSpec;
						public static regString(reg: number): string;
						public getReg(): number;
						public static clearInternTable(): void;
						public intersect(other: com.android.dx.rop.code.RegisterSpec, localPrimary: boolean): com.android.dx.rop.code.RegisterSpec;
						public isEvenRegister(): boolean;
					}
					export module RegisterSpec {
						export class ForComparison extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.rop.code.RegisterSpec.ForComparison>;
							public hashCode(): number;
							public set(reg: number, type: com.android.dx.rop.type.TypeBearer, local: com.android.dx.rop.code.LocalItem): void;
							public equals(other: any): boolean;
							public equals(obj: any): boolean;
							public toRegisterSpec(): com.android.dx.rop.code.RegisterSpec;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class RegisterSpecList extends com.android.dx.util.FixedSizeList implements com.android.dx.rop.type.TypeList {
						public static class: java.lang.Class<com.android.dx.rop.code.RegisterSpecList>;
						public static EMPTY: com.android.dx.rop.code.RegisterSpecList;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public withOffset(delta: number): com.android.dx.rop.code.RegisterSpecList;
						public constructor(mutable: boolean);
						public static make(spec0: com.android.dx.rop.code.RegisterSpec, spec1: com.android.dx.rop.code.RegisterSpec, spec2: com.android.dx.rop.code.RegisterSpec, spec3: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpecList;
						public get(n: number): com.android.dx.rop.code.RegisterSpec;
						public withExpandedRegisters(base: number, duplicateFirst: boolean, compatRegs: java.util.BitSet): com.android.dx.rop.code.RegisterSpecList;
						public indexOfRegister(reg: number): number;
						public static make(spec: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpecList;
						public size(): number;
						public withoutLast(): com.android.dx.rop.code.RegisterSpecList;
						public constructor();
						public subset(exclusionSet: java.util.BitSet): com.android.dx.rop.code.RegisterSpecList;
						public getWordCount(): number;
						public withoutFirst(): com.android.dx.rop.code.RegisterSpecList;
						public withAddedType(param0: com.android.dx.rop.type.Type): com.android.dx.rop.type.TypeList;
						public isMutable(): boolean;
						public set(n: number, spec: com.android.dx.rop.code.RegisterSpec): void;
						public withFirst(spec: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpecList;
						public static make(spec0: com.android.dx.rop.code.RegisterSpec, spec1: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpecList;
						public toHuman(): string;
						public static make(spec0: com.android.dx.rop.code.RegisterSpec, spec1: com.android.dx.rop.code.RegisterSpec, spec2: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpecList;
						public withAddedType(type: com.android.dx.rop.type.Type): com.android.dx.rop.type.TypeList;
						public constructor(size: number);
						public getType(param0: number): com.android.dx.rop.type.Type;
						public getType(n: number): com.android.dx.rop.type.Type;
						public specForRegister(reg: number): com.android.dx.rop.code.RegisterSpec;
						public getRegistersSize(): number;
					}
					export module RegisterSpecList {
						export class Expander extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.rop.code.RegisterSpecList.Expander>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class RegisterSpecSet extends com.android.dx.util.MutabilityControl {
						public static class: java.lang.Class<com.android.dx.rop.code.RegisterSpecSet>;
						public static EMPTY: com.android.dx.rop.code.RegisterSpecSet;
						public constructor();
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public get(spec: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpec;
						public localItemToSpec(local: com.android.dx.rop.code.LocalItem): com.android.dx.rop.code.RegisterSpec;
						public putAll(set: com.android.dx.rop.code.RegisterSpecSet): void;
						public findMatchingLocal(spec: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpec;
						public remove(toRemove: com.android.dx.rop.code.RegisterSpec): void;
						public hashCode(): number;
						public mutableCopy(): com.android.dx.rop.code.RegisterSpecSet;
						public toString(): string;
						public constructor(mutable: boolean);
						public intersect(other: com.android.dx.rop.code.RegisterSpecSet, localPrimary: boolean): void;
						public constructor(maxSize: number);
						public get(reg: number): com.android.dx.rop.code.RegisterSpec;
						public getMaxSize(): number;
						public put(spec: com.android.dx.rop.code.RegisterSpec): void;
						public withOffset(delta: number): com.android.dx.rop.code.RegisterSpecSet;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class Rop extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.code.Rop>;
						public static BRANCH_MIN: number;
						public static BRANCH_NONE: number;
						public static BRANCH_RETURN: number;
						public static BRANCH_GOTO: number;
						public static BRANCH_IF: number;
						public static BRANCH_SWITCH: number;
						public static BRANCH_THROW: number;
						public static BRANCH_MAX: number;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public constructor(opcode: number, result: com.android.dx.rop.type.Type, sources: com.android.dx.rop.type.TypeList, exceptions: com.android.dx.rop.type.TypeList, nickname: string);
						public getResult(): com.android.dx.rop.type.Type;
						public hashCode(): number;
						public canThrow(): boolean;
						public constructor(opcode: number, result: com.android.dx.rop.type.Type, sources: com.android.dx.rop.type.TypeList, nickname: string);
						public isCallLike(): boolean;
						public toString(): string;
						public getSources(): com.android.dx.rop.type.TypeList;
						public constructor(opcode: number, result: com.android.dx.rop.type.Type, sources: com.android.dx.rop.type.TypeList, exceptions: com.android.dx.rop.type.TypeList, branchingness: number, nickname: string);
						public getOpcode(): number;
						public constructor(opcode: number, result: com.android.dx.rop.type.Type, sources: com.android.dx.rop.type.TypeList, exceptions: com.android.dx.rop.type.TypeList, branchingness: number, isCallLike: boolean, nickname: string);
						public constructor(opcode: number, sources: com.android.dx.rop.type.TypeList, exceptions: com.android.dx.rop.type.TypeList);
						public constructor(opcode: number, result: com.android.dx.rop.type.Type, sources: com.android.dx.rop.type.TypeList, branchingness: number, nickname: string);
						public getBranchingness(): number;
						public isCommutative(): boolean;
						public getExceptions(): com.android.dx.rop.type.TypeList;
						public getNickname(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class RopMethod extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.code.RopMethod>;
						public getExitPredecessors(): com.android.dx.util.IntList;
						public getBlocks(): com.android.dx.rop.code.BasicBlockList;
						public labelToPredecessors(label: number): com.android.dx.util.IntList;
						public withRegisterOffset(delta: number): com.android.dx.rop.code.RopMethod;
						public constructor(blocks: com.android.dx.rop.code.BasicBlockList, firstLabel: number);
						public getFirstLabel(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class Rops extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.code.Rops>;
						public static NOP: com.android.dx.rop.code.Rop;
						public static MOVE_INT: com.android.dx.rop.code.Rop;
						public static MOVE_LONG: com.android.dx.rop.code.Rop;
						public static MOVE_FLOAT: com.android.dx.rop.code.Rop;
						public static MOVE_DOUBLE: com.android.dx.rop.code.Rop;
						public static MOVE_OBJECT: com.android.dx.rop.code.Rop;
						public static MOVE_RETURN_ADDRESS: com.android.dx.rop.code.Rop;
						public static MOVE_PARAM_INT: com.android.dx.rop.code.Rop;
						public static MOVE_PARAM_LONG: com.android.dx.rop.code.Rop;
						public static MOVE_PARAM_FLOAT: com.android.dx.rop.code.Rop;
						public static MOVE_PARAM_DOUBLE: com.android.dx.rop.code.Rop;
						public static MOVE_PARAM_OBJECT: com.android.dx.rop.code.Rop;
						public static CONST_INT: com.android.dx.rop.code.Rop;
						public static CONST_LONG: com.android.dx.rop.code.Rop;
						public static CONST_FLOAT: com.android.dx.rop.code.Rop;
						public static CONST_DOUBLE: com.android.dx.rop.code.Rop;
						public static CONST_OBJECT: com.android.dx.rop.code.Rop;
						public static CONST_OBJECT_NOTHROW: com.android.dx.rop.code.Rop;
						public static GOTO: com.android.dx.rop.code.Rop;
						public static IF_EQZ_INT: com.android.dx.rop.code.Rop;
						public static IF_NEZ_INT: com.android.dx.rop.code.Rop;
						public static IF_LTZ_INT: com.android.dx.rop.code.Rop;
						public static IF_GEZ_INT: com.android.dx.rop.code.Rop;
						public static IF_LEZ_INT: com.android.dx.rop.code.Rop;
						public static IF_GTZ_INT: com.android.dx.rop.code.Rop;
						public static IF_EQZ_OBJECT: com.android.dx.rop.code.Rop;
						public static IF_NEZ_OBJECT: com.android.dx.rop.code.Rop;
						public static IF_EQ_INT: com.android.dx.rop.code.Rop;
						public static IF_NE_INT: com.android.dx.rop.code.Rop;
						public static IF_LT_INT: com.android.dx.rop.code.Rop;
						public static IF_GE_INT: com.android.dx.rop.code.Rop;
						public static IF_LE_INT: com.android.dx.rop.code.Rop;
						public static IF_GT_INT: com.android.dx.rop.code.Rop;
						public static IF_EQ_OBJECT: com.android.dx.rop.code.Rop;
						public static IF_NE_OBJECT: com.android.dx.rop.code.Rop;
						public static SWITCH: com.android.dx.rop.code.Rop;
						public static ADD_INT: com.android.dx.rop.code.Rop;
						public static ADD_LONG: com.android.dx.rop.code.Rop;
						public static ADD_FLOAT: com.android.dx.rop.code.Rop;
						public static ADD_DOUBLE: com.android.dx.rop.code.Rop;
						public static SUB_INT: com.android.dx.rop.code.Rop;
						public static SUB_LONG: com.android.dx.rop.code.Rop;
						public static SUB_FLOAT: com.android.dx.rop.code.Rop;
						public static SUB_DOUBLE: com.android.dx.rop.code.Rop;
						public static MUL_INT: com.android.dx.rop.code.Rop;
						public static MUL_LONG: com.android.dx.rop.code.Rop;
						public static MUL_FLOAT: com.android.dx.rop.code.Rop;
						public static MUL_DOUBLE: com.android.dx.rop.code.Rop;
						public static DIV_INT: com.android.dx.rop.code.Rop;
						public static DIV_LONG: com.android.dx.rop.code.Rop;
						public static DIV_FLOAT: com.android.dx.rop.code.Rop;
						public static DIV_DOUBLE: com.android.dx.rop.code.Rop;
						public static REM_INT: com.android.dx.rop.code.Rop;
						public static REM_LONG: com.android.dx.rop.code.Rop;
						public static REM_FLOAT: com.android.dx.rop.code.Rop;
						public static REM_DOUBLE: com.android.dx.rop.code.Rop;
						public static NEG_INT: com.android.dx.rop.code.Rop;
						public static NEG_LONG: com.android.dx.rop.code.Rop;
						public static NEG_FLOAT: com.android.dx.rop.code.Rop;
						public static NEG_DOUBLE: com.android.dx.rop.code.Rop;
						public static AND_INT: com.android.dx.rop.code.Rop;
						public static AND_LONG: com.android.dx.rop.code.Rop;
						public static OR_INT: com.android.dx.rop.code.Rop;
						public static OR_LONG: com.android.dx.rop.code.Rop;
						public static XOR_INT: com.android.dx.rop.code.Rop;
						public static XOR_LONG: com.android.dx.rop.code.Rop;
						public static SHL_INT: com.android.dx.rop.code.Rop;
						public static SHL_LONG: com.android.dx.rop.code.Rop;
						public static SHR_INT: com.android.dx.rop.code.Rop;
						public static SHR_LONG: com.android.dx.rop.code.Rop;
						public static USHR_INT: com.android.dx.rop.code.Rop;
						public static USHR_LONG: com.android.dx.rop.code.Rop;
						public static NOT_INT: com.android.dx.rop.code.Rop;
						public static NOT_LONG: com.android.dx.rop.code.Rop;
						public static ADD_CONST_INT: com.android.dx.rop.code.Rop;
						public static ADD_CONST_LONG: com.android.dx.rop.code.Rop;
						public static ADD_CONST_FLOAT: com.android.dx.rop.code.Rop;
						public static ADD_CONST_DOUBLE: com.android.dx.rop.code.Rop;
						public static SUB_CONST_INT: com.android.dx.rop.code.Rop;
						public static SUB_CONST_LONG: com.android.dx.rop.code.Rop;
						public static SUB_CONST_FLOAT: com.android.dx.rop.code.Rop;
						public static SUB_CONST_DOUBLE: com.android.dx.rop.code.Rop;
						public static MUL_CONST_INT: com.android.dx.rop.code.Rop;
						public static MUL_CONST_LONG: com.android.dx.rop.code.Rop;
						public static MUL_CONST_FLOAT: com.android.dx.rop.code.Rop;
						public static MUL_CONST_DOUBLE: com.android.dx.rop.code.Rop;
						public static DIV_CONST_INT: com.android.dx.rop.code.Rop;
						public static DIV_CONST_LONG: com.android.dx.rop.code.Rop;
						public static DIV_CONST_FLOAT: com.android.dx.rop.code.Rop;
						public static DIV_CONST_DOUBLE: com.android.dx.rop.code.Rop;
						public static REM_CONST_INT: com.android.dx.rop.code.Rop;
						public static REM_CONST_LONG: com.android.dx.rop.code.Rop;
						public static REM_CONST_FLOAT: com.android.dx.rop.code.Rop;
						public static REM_CONST_DOUBLE: com.android.dx.rop.code.Rop;
						public static AND_CONST_INT: com.android.dx.rop.code.Rop;
						public static AND_CONST_LONG: com.android.dx.rop.code.Rop;
						public static OR_CONST_INT: com.android.dx.rop.code.Rop;
						public static OR_CONST_LONG: com.android.dx.rop.code.Rop;
						public static XOR_CONST_INT: com.android.dx.rop.code.Rop;
						public static XOR_CONST_LONG: com.android.dx.rop.code.Rop;
						public static SHL_CONST_INT: com.android.dx.rop.code.Rop;
						public static SHL_CONST_LONG: com.android.dx.rop.code.Rop;
						public static SHR_CONST_INT: com.android.dx.rop.code.Rop;
						public static SHR_CONST_LONG: com.android.dx.rop.code.Rop;
						public static USHR_CONST_INT: com.android.dx.rop.code.Rop;
						public static USHR_CONST_LONG: com.android.dx.rop.code.Rop;
						public static CMPL_LONG: com.android.dx.rop.code.Rop;
						public static CMPL_FLOAT: com.android.dx.rop.code.Rop;
						public static CMPL_DOUBLE: com.android.dx.rop.code.Rop;
						public static CMPG_FLOAT: com.android.dx.rop.code.Rop;
						public static CMPG_DOUBLE: com.android.dx.rop.code.Rop;
						public static CONV_L2I: com.android.dx.rop.code.Rop;
						public static CONV_F2I: com.android.dx.rop.code.Rop;
						public static CONV_D2I: com.android.dx.rop.code.Rop;
						public static CONV_I2L: com.android.dx.rop.code.Rop;
						public static CONV_F2L: com.android.dx.rop.code.Rop;
						public static CONV_D2L: com.android.dx.rop.code.Rop;
						public static CONV_I2F: com.android.dx.rop.code.Rop;
						public static CONV_L2F: com.android.dx.rop.code.Rop;
						public static CONV_D2F: com.android.dx.rop.code.Rop;
						public static CONV_I2D: com.android.dx.rop.code.Rop;
						public static CONV_L2D: com.android.dx.rop.code.Rop;
						public static CONV_F2D: com.android.dx.rop.code.Rop;
						public static TO_BYTE: com.android.dx.rop.code.Rop;
						public static TO_CHAR: com.android.dx.rop.code.Rop;
						public static TO_SHORT: com.android.dx.rop.code.Rop;
						public static RETURN_VOID: com.android.dx.rop.code.Rop;
						public static RETURN_INT: com.android.dx.rop.code.Rop;
						public static RETURN_LONG: com.android.dx.rop.code.Rop;
						public static RETURN_FLOAT: com.android.dx.rop.code.Rop;
						public static RETURN_DOUBLE: com.android.dx.rop.code.Rop;
						public static RETURN_OBJECT: com.android.dx.rop.code.Rop;
						public static ARRAY_LENGTH: com.android.dx.rop.code.Rop;
						public static THROW: com.android.dx.rop.code.Rop;
						public static MONITOR_ENTER: com.android.dx.rop.code.Rop;
						public static MONITOR_EXIT: com.android.dx.rop.code.Rop;
						public static AGET_INT: com.android.dx.rop.code.Rop;
						public static AGET_LONG: com.android.dx.rop.code.Rop;
						public static AGET_FLOAT: com.android.dx.rop.code.Rop;
						public static AGET_DOUBLE: com.android.dx.rop.code.Rop;
						public static AGET_OBJECT: com.android.dx.rop.code.Rop;
						public static AGET_BOOLEAN: com.android.dx.rop.code.Rop;
						public static AGET_BYTE: com.android.dx.rop.code.Rop;
						public static AGET_CHAR: com.android.dx.rop.code.Rop;
						public static AGET_SHORT: com.android.dx.rop.code.Rop;
						public static APUT_INT: com.android.dx.rop.code.Rop;
						public static APUT_LONG: com.android.dx.rop.code.Rop;
						public static APUT_FLOAT: com.android.dx.rop.code.Rop;
						public static APUT_DOUBLE: com.android.dx.rop.code.Rop;
						public static APUT_OBJECT: com.android.dx.rop.code.Rop;
						public static APUT_BOOLEAN: com.android.dx.rop.code.Rop;
						public static APUT_BYTE: com.android.dx.rop.code.Rop;
						public static APUT_CHAR: com.android.dx.rop.code.Rop;
						public static APUT_SHORT: com.android.dx.rop.code.Rop;
						public static NEW_INSTANCE: com.android.dx.rop.code.Rop;
						public static NEW_ARRAY_INT: com.android.dx.rop.code.Rop;
						public static NEW_ARRAY_LONG: com.android.dx.rop.code.Rop;
						public static NEW_ARRAY_FLOAT: com.android.dx.rop.code.Rop;
						public static NEW_ARRAY_DOUBLE: com.android.dx.rop.code.Rop;
						public static NEW_ARRAY_BOOLEAN: com.android.dx.rop.code.Rop;
						public static NEW_ARRAY_BYTE: com.android.dx.rop.code.Rop;
						public static NEW_ARRAY_CHAR: com.android.dx.rop.code.Rop;
						public static NEW_ARRAY_SHORT: com.android.dx.rop.code.Rop;
						public static CHECK_CAST: com.android.dx.rop.code.Rop;
						public static INSTANCE_OF: com.android.dx.rop.code.Rop;
						public static GET_FIELD_INT: com.android.dx.rop.code.Rop;
						public static GET_FIELD_LONG: com.android.dx.rop.code.Rop;
						public static GET_FIELD_FLOAT: com.android.dx.rop.code.Rop;
						public static GET_FIELD_DOUBLE: com.android.dx.rop.code.Rop;
						public static GET_FIELD_OBJECT: com.android.dx.rop.code.Rop;
						public static GET_FIELD_BOOLEAN: com.android.dx.rop.code.Rop;
						public static GET_FIELD_BYTE: com.android.dx.rop.code.Rop;
						public static GET_FIELD_CHAR: com.android.dx.rop.code.Rop;
						public static GET_FIELD_SHORT: com.android.dx.rop.code.Rop;
						public static GET_STATIC_INT: com.android.dx.rop.code.Rop;
						public static GET_STATIC_LONG: com.android.dx.rop.code.Rop;
						public static GET_STATIC_FLOAT: com.android.dx.rop.code.Rop;
						public static GET_STATIC_DOUBLE: com.android.dx.rop.code.Rop;
						public static GET_STATIC_OBJECT: com.android.dx.rop.code.Rop;
						public static GET_STATIC_BOOLEAN: com.android.dx.rop.code.Rop;
						public static GET_STATIC_BYTE: com.android.dx.rop.code.Rop;
						public static GET_STATIC_CHAR: com.android.dx.rop.code.Rop;
						public static GET_STATIC_SHORT: com.android.dx.rop.code.Rop;
						public static PUT_FIELD_INT: com.android.dx.rop.code.Rop;
						public static PUT_FIELD_LONG: com.android.dx.rop.code.Rop;
						public static PUT_FIELD_FLOAT: com.android.dx.rop.code.Rop;
						public static PUT_FIELD_DOUBLE: com.android.dx.rop.code.Rop;
						public static PUT_FIELD_OBJECT: com.android.dx.rop.code.Rop;
						public static PUT_FIELD_BOOLEAN: com.android.dx.rop.code.Rop;
						public static PUT_FIELD_BYTE: com.android.dx.rop.code.Rop;
						public static PUT_FIELD_CHAR: com.android.dx.rop.code.Rop;
						public static PUT_FIELD_SHORT: com.android.dx.rop.code.Rop;
						public static PUT_STATIC_INT: com.android.dx.rop.code.Rop;
						public static PUT_STATIC_LONG: com.android.dx.rop.code.Rop;
						public static PUT_STATIC_FLOAT: com.android.dx.rop.code.Rop;
						public static PUT_STATIC_DOUBLE: com.android.dx.rop.code.Rop;
						public static PUT_STATIC_OBJECT: com.android.dx.rop.code.Rop;
						public static PUT_STATIC_BOOLEAN: com.android.dx.rop.code.Rop;
						public static PUT_STATIC_BYTE: com.android.dx.rop.code.Rop;
						public static PUT_STATIC_CHAR: com.android.dx.rop.code.Rop;
						public static PUT_STATIC_SHORT: com.android.dx.rop.code.Rop;
						public static MARK_LOCAL_INT: com.android.dx.rop.code.Rop;
						public static MARK_LOCAL_LONG: com.android.dx.rop.code.Rop;
						public static MARK_LOCAL_FLOAT: com.android.dx.rop.code.Rop;
						public static MARK_LOCAL_DOUBLE: com.android.dx.rop.code.Rop;
						public static MARK_LOCAL_OBJECT: com.android.dx.rop.code.Rop;
						public static FILL_ARRAY_DATA: com.android.dx.rop.code.Rop;
						public static opIfNe(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opSub(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opFilledNewArray(arrayType: com.android.dx.rop.type.TypeBearer, count: number): com.android.dx.rop.code.Rop;
						public static opAget(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opNewArray(arrayType: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opInvokeSuper(meth: com.android.dx.rop.type.Prototype): com.android.dx.rop.code.Rop;
						public static opInvokeDirect(meth: com.android.dx.rop.type.Prototype): com.android.dx.rop.code.Rop;
						public static opCmpg(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opReturn(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opAput(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opInvokeInterface(meth: com.android.dx.rop.type.Prototype): com.android.dx.rop.code.Rop;
						public static opMoveResultPseudo(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opIfGe(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opShr(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opConv(dest: com.android.dx.rop.type.TypeBearer, source: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opMarkLocal(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opMoveParam(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opMoveResult(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opDiv(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opNot(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opConst(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opIfLt(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opMul(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opShl(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opIfGt(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opRem(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opPutField(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opInvokePolymorphic(meth: com.android.dx.rop.type.Prototype): com.android.dx.rop.code.Rop;
						public static opGetStatic(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opPutStatic(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opMoveException(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opMove(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opNeg(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opOr(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opGetField(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opIfEq(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opIfLe(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opCmpl(type: com.android.dx.rop.type.TypeBearer): com.android.dx.rop.code.Rop;
						public static opInvokeVirtual(meth: com.android.dx.rop.type.Prototype): com.android.dx.rop.code.Rop;
						public static ropFor(opcode: number, dest: com.android.dx.rop.type.TypeBearer, sources: com.android.dx.rop.type.TypeList, cst: com.android.dx.rop.cst.Constant): com.android.dx.rop.code.Rop;
						public static opAdd(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opInvokeStatic(meth: com.android.dx.rop.type.Prototype): com.android.dx.rop.code.Rop;
						public static opAnd(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opUshr(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
						public static opXor(types: com.android.dx.rop.type.TypeList): com.android.dx.rop.code.Rop;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class SourcePosition extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.code.SourcePosition>;
						public static NO_INFO: com.android.dx.rop.code.SourcePosition;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getLine(): number;
						public constructor(sourceFile: com.android.dx.rop.cst.CstString, address: number, line: number);
						public sameLine(other: com.android.dx.rop.code.SourcePosition): boolean;
						public getSourceFile(): com.android.dx.rop.cst.CstString;
						public getAddress(): number;
						public hashCode(): number;
						public sameLineAndFile(other: com.android.dx.rop.code.SourcePosition): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class SwitchInsn extends com.android.dx.rop.code.Insn {
						public static class: java.lang.Class<com.android.dx.rop.code.SwitchInsn>;
						public accept(param0: com.android.dx.rop.code.Insn.Visitor): void;
						public contentEquals(b: com.android.dx.rop.code.Insn): boolean;
						public getCases(): com.android.dx.util.IntList;
						public withAddedCatch(type: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public accept(visitor: com.android.dx.rop.code.Insn.Visitor): void;
						public withAddedCatch(param0: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public withNewRegisters(param0: com.android.dx.rop.code.RegisterSpec, param1: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public withNewRegisters(result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public toHuman(): string;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList, cases: com.android.dx.util.IntList);
						public getInlineString(): string;
						public getCatches(): com.android.dx.rop.type.TypeList;
						public withRegisterOffset(param0: number): com.android.dx.rop.code.Insn;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList);
						public withRegisterOffset(delta: number): com.android.dx.rop.code.Insn;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class ThrowingCstInsn extends com.android.dx.rop.code.CstInsn {
						public static class: java.lang.Class<com.android.dx.rop.code.ThrowingCstInsn>;
						public accept(param0: com.android.dx.rop.code.Insn.Visitor): void;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList, cst: com.android.dx.rop.cst.Constant);
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, sources: com.android.dx.rop.code.RegisterSpecList, catches: com.android.dx.rop.type.TypeList, cst: com.android.dx.rop.cst.Constant);
						public withAddedCatch(type: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public accept(visitor: com.android.dx.rop.code.Insn.Visitor): void;
						public withAddedCatch(param0: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public withNewRegisters(param0: com.android.dx.rop.code.RegisterSpec, param1: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public withNewRegisters(result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public toHuman(): string;
						public getInlineString(): string;
						public getCatches(): com.android.dx.rop.type.TypeList;
						public withRegisterOffset(param0: number): com.android.dx.rop.code.Insn;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList);
						public withRegisterOffset(delta: number): com.android.dx.rop.code.Insn;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class ThrowingInsn extends com.android.dx.rop.code.Insn {
						public static class: java.lang.Class<com.android.dx.rop.code.ThrowingInsn>;
						public accept(param0: com.android.dx.rop.code.Insn.Visitor): void;
						public static toCatchString(catches: com.android.dx.rop.type.TypeList): string;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, sources: com.android.dx.rop.code.RegisterSpecList, catches: com.android.dx.rop.type.TypeList);
						public withAddedCatch(type: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public accept(visitor: com.android.dx.rop.code.Insn.Visitor): void;
						public withAddedCatch(param0: com.android.dx.rop.type.Type): com.android.dx.rop.code.Insn;
						public withNewRegisters(param0: com.android.dx.rop.code.RegisterSpec, param1: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public withNewRegisters(result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.Insn;
						public toHuman(): string;
						public getInlineString(): string;
						public getCatches(): com.android.dx.rop.type.TypeList;
						public withRegisterOffset(param0: number): com.android.dx.rop.code.Insn;
						public constructor(opcode: com.android.dx.rop.code.Rop, position: com.android.dx.rop.code.SourcePosition, result: com.android.dx.rop.code.RegisterSpec, sources: com.android.dx.rop.code.RegisterSpecList);
						public withRegisterOffset(delta: number): com.android.dx.rop.code.Insn;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module code {
					export class TranslationAdvice extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.code.TranslationAdvice>;
						/**
						 * Constructs a new instance of the com.android.dx.rop.code.TranslationAdvice interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							hasConstantOperation(param0: com.android.dx.rop.code.Rop, param1: com.android.dx.rop.code.RegisterSpec, param2: com.android.dx.rop.code.RegisterSpec): boolean;
							requiresSourcesInOrder(param0: com.android.dx.rop.code.Rop, param1: com.android.dx.rop.code.RegisterSpecList): boolean;
							getMaxOptimalRegisterCount(): number;
						});
						public constructor();
						public hasConstantOperation(param0: com.android.dx.rop.code.Rop, param1: com.android.dx.rop.code.RegisterSpec, param2: com.android.dx.rop.code.RegisterSpec): boolean;
						public requiresSourcesInOrder(param0: com.android.dx.rop.code.Rop, param1: com.android.dx.rop.code.RegisterSpecList): boolean;
						public getMaxOptimalRegisterCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export abstract class Constant extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.cst.Constant>;
						public constructor();
						public toHuman(): string;
						public typeName(): string;
						public isCategory2(): boolean;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
						public compareTo(other: com.android.dx.rop.cst.Constant): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class ConstantPool extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.cst.ConstantPool>;
						/**
						 * Constructs a new instance of the com.android.dx.rop.cst.ConstantPool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							size(): number;
							get(param0: number): com.android.dx.rop.cst.Constant;
							get0Ok(param0: number): com.android.dx.rop.cst.Constant;
							getOrNull(param0: number): com.android.dx.rop.cst.Constant;
							getEntries(): com.android.dx.rop.cst.Constant[];
						});
						public constructor();
						public getEntries(): com.android.dx.rop.cst.Constant[];
						public get(param0: number): com.android.dx.rop.cst.Constant;
						public get0Ok(param0: number): com.android.dx.rop.cst.Constant;
						public getOrNull(param0: number): com.android.dx.rop.cst.Constant;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstAnnotation extends com.android.dx.rop.cst.Constant {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstAnnotation>;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public getAnnotation(): com.android.dx.rop.annotation.Annotation;
						public constructor();
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public toHuman(): string;
						public typeName(): string;
						public isCategory2(): boolean;
						public hashCode(): number;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
						public constructor(annotation: com.android.dx.rop.annotation.Annotation);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstArray extends com.android.dx.rop.cst.Constant {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstArray>;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public constructor();
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public toHuman(): string;
						public typeName(): string;
						public constructor(list: com.android.dx.rop.cst.CstArray.List);
						public isCategory2(): boolean;
						public getList(): com.android.dx.rop.cst.CstArray.List;
						public hashCode(): number;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
						public toString(): string;
					}
					export module CstArray {
						export class List extends com.android.dx.util.FixedSizeList implements java.lang.Comparable<com.android.dx.rop.cst.CstArray.List>  {
							public static class: java.lang.Class<com.android.dx.rop.cst.CstArray.List>;
							public constructor();
							public get(n: number): com.android.dx.rop.cst.Constant;
							public constructor(mutable: boolean);
							public constructor(size: number);
							public toHuman(): string;
							public toHuman(prefix: string, separator: string, suffix: string): string;
							public compareTo(other: com.android.dx.rop.cst.CstArray.List): number;
							public set(n: number, a: com.android.dx.rop.cst.Constant): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export abstract class CstBaseMethodRef extends com.android.dx.rop.cst.CstMemberRef {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstBaseMethodRef>;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public getBasicFrameType(): number;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public isSignaturePolymorphic(): boolean;
						public getParameterWordCount(isStatic: boolean): number;
						public getPrototype(): com.android.dx.rop.type.Prototype;
						public getType(): com.android.dx.rop.type.Type;
						public toHuman(): string;
						public isConstant(): boolean;
						public isClassInit(): boolean;
						public getPrototype(isStatic: boolean): com.android.dx.rop.type.Prototype;
						public isInstanceInit(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstBoolean extends com.android.dx.rop.cst.CstLiteral32 {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstBoolean>;
						public static VALUE_FALSE: com.android.dx.rop.cst.CstBoolean;
						public static VALUE_TRUE: com.android.dx.rop.cst.CstBoolean;
						public getBasicFrameType(): number;
						public toHuman(): string;
						public isConstant(): boolean;
						public static make(value: boolean): com.android.dx.rop.cst.CstBoolean;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public static make(value: number): com.android.dx.rop.cst.CstBoolean;
						public getValue(): boolean;
						public toString(): string;
						public getType(): com.android.dx.rop.type.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstByte extends com.android.dx.rop.cst.CstLiteral32 {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstByte>;
						public static VALUE_0: com.android.dx.rop.cst.CstByte;
						public getBasicFrameType(): number;
						public static make(value: number): com.android.dx.rop.cst.CstByte;
						public toHuman(): string;
						public isConstant(): boolean;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public toString(): string;
						public getType(): com.android.dx.rop.type.Type;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstCallSite extends com.android.dx.rop.cst.CstArray {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstCallSite>;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public equals(other: any): boolean;
						public toHuman(): string;
						public typeName(): string;
						public isCategory2(): boolean;
						public hashCode(): number;
						public static make(bootstrapHandle: com.android.dx.rop.cst.CstMethodHandle, nat: com.android.dx.rop.cst.CstNat, optionalArguments: com.android.dx.cf.code.BootstrapMethodArgumentsList): com.android.dx.rop.cst.CstCallSite;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstCallSiteRef extends com.android.dx.rop.cst.Constant {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstCallSiteRef>;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public toHuman(): string;
						public getReturnType(): com.android.dx.rop.type.Type;
						public typeName(): string;
						public isCategory2(): boolean;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
						public getCallSite(): com.android.dx.rop.cst.CstCallSite;
						public getPrototype(): com.android.dx.rop.type.Prototype;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstChar extends com.android.dx.rop.cst.CstLiteral32 {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstChar>;
						public static VALUE_0: com.android.dx.rop.cst.CstChar;
						public getBasicFrameType(): number;
						public toHuman(): string;
						public isConstant(): boolean;
						public static make(value: string): com.android.dx.rop.cst.CstChar;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public static make(value: number): com.android.dx.rop.cst.CstChar;
						public getValue(): string;
						public toString(): string;
						public getType(): com.android.dx.rop.type.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstDouble extends com.android.dx.rop.cst.CstLiteral64 {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstDouble>;
						public static VALUE_0: com.android.dx.rop.cst.CstDouble;
						public static VALUE_1: com.android.dx.rop.cst.CstDouble;
						public static make(bits: number): com.android.dx.rop.cst.CstDouble;
						public getBasicFrameType(): number;
						public toHuman(): string;
						public isConstant(): boolean;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public toString(): string;
						public getType(): com.android.dx.rop.type.Type;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstEnumRef extends com.android.dx.rop.cst.CstMemberRef {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstEnumRef>;
						public getFieldRef(): com.android.dx.rop.cst.CstFieldRef;
						public getBasicFrameType(): number;
						public constructor();
						public toHuman(): string;
						public isConstant(): boolean;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public constructor(nat: com.android.dx.rop.cst.CstNat);
						public getType(): com.android.dx.rop.type.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstFieldRef extends com.android.dx.rop.cst.CstMemberRef {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstFieldRef>;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public getBasicFrameType(): number;
						public constructor();
						public constructor(definingClass: com.android.dx.rop.cst.CstType, nat: com.android.dx.rop.cst.CstNat);
						public toHuman(): string;
						public isConstant(): boolean;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public static forPrimitiveType(primitiveType: com.android.dx.rop.type.Type): com.android.dx.rop.cst.CstFieldRef;
						public getType(): com.android.dx.rop.type.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstFloat extends com.android.dx.rop.cst.CstLiteral32 {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstFloat>;
						public static VALUE_0: com.android.dx.rop.cst.CstFloat;
						public static VALUE_1: com.android.dx.rop.cst.CstFloat;
						public static VALUE_2: com.android.dx.rop.cst.CstFloat;
						public getBasicFrameType(): number;
						public toHuman(): string;
						public isConstant(): boolean;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public static make(bits: number): com.android.dx.rop.cst.CstFloat;
						public toString(): string;
						public getType(): com.android.dx.rop.type.Type;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstInteger extends com.android.dx.rop.cst.CstLiteral32 {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstInteger>;
						public static VALUE_M1: com.android.dx.rop.cst.CstInteger;
						public static VALUE_0: com.android.dx.rop.cst.CstInteger;
						public static VALUE_1: com.android.dx.rop.cst.CstInteger;
						public static VALUE_2: com.android.dx.rop.cst.CstInteger;
						public static VALUE_3: com.android.dx.rop.cst.CstInteger;
						public static VALUE_4: com.android.dx.rop.cst.CstInteger;
						public static VALUE_5: com.android.dx.rop.cst.CstInteger;
						public getBasicFrameType(): number;
						public static make(value: number): com.android.dx.rop.cst.CstInteger;
						public toHuman(): string;
						public isConstant(): boolean;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public toString(): string;
						public getType(): com.android.dx.rop.type.Type;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstInterfaceMethodRef extends com.android.dx.rop.cst.CstBaseMethodRef {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstInterfaceMethodRef>;
						public getBasicFrameType(): number;
						public constructor();
						public constructor(definingClass: com.android.dx.rop.cst.CstType, nat: com.android.dx.rop.cst.CstNat);
						public toHuman(): string;
						public isConstant(): boolean;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public toMethodRef(): com.android.dx.rop.cst.CstMethodRef;
						public getType(): com.android.dx.rop.type.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstInvokeDynamic extends com.android.dx.rop.cst.Constant {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstInvokeDynamic>;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public typeName(): string;
						public setCallSite(callSite: com.android.dx.rop.cst.CstCallSite): void;
						public getCallSite(): com.android.dx.rop.cst.CstCallSite;
						public getPrototype(): com.android.dx.rop.type.Prototype;
						public toString(): string;
						public getBootstrapMethodIndex(): number;
						public toHuman(): string;
						public getReturnType(): com.android.dx.rop.type.Type;
						public setDeclaringClass(declaringClass: com.android.dx.rop.cst.CstType): void;
						public getReferences(): java.util.List<com.android.dx.rop.cst.CstCallSiteRef>;
						public isCategory2(): boolean;
						public getNat(): com.android.dx.rop.cst.CstNat;
						public static make(bootstrapMethodIndex: number, nat: com.android.dx.rop.cst.CstNat): com.android.dx.rop.cst.CstInvokeDynamic;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
						public addReference(): com.android.dx.rop.cst.CstCallSiteRef;
						public getDeclaringClass(): com.android.dx.rop.cst.CstType;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstKnownNull extends com.android.dx.rop.cst.CstLiteralBits {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstKnownNull>;
						public static THE_ONE: com.android.dx.rop.cst.CstKnownNull;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public getBasicFrameType(): number;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getIntBits(): number;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public hashCode(): number;
						public fitsInInt(): boolean;
						public toString(): string;
						public getType(): com.android.dx.rop.type.Type;
						public toHuman(): string;
						public isConstant(): boolean;
						public isCategory2(): boolean;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
						public getLongBits(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export abstract class CstLiteral32 extends com.android.dx.rop.cst.CstLiteralBits {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstLiteral32>;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public getBasicFrameType(): number;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getIntBits(): number;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public hashCode(): number;
						public fitsInInt(): boolean;
						public getType(): com.android.dx.rop.type.Type;
						public toHuman(): string;
						public isConstant(): boolean;
						public isCategory2(): boolean;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
						public getLongBits(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export abstract class CstLiteral64 extends com.android.dx.rop.cst.CstLiteralBits {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstLiteral64>;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public getBasicFrameType(): number;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getIntBits(): number;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public hashCode(): number;
						public fitsInInt(): boolean;
						public getType(): com.android.dx.rop.type.Type;
						public toHuman(): string;
						public isConstant(): boolean;
						public isCategory2(): boolean;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
						public getLongBits(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export abstract class CstLiteralBits extends com.android.dx.rop.cst.TypedConstant {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstLiteralBits>;
						public getBasicFrameType(): number;
						public constructor();
						public toHuman(): string;
						public isConstant(): boolean;
						public getIntBits(): number;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public fitsIn8Bits(): boolean;
						public getLongBits(): number;
						public fitsInInt(): boolean;
						public fitsIn16Bits(): boolean;
						public getType(): com.android.dx.rop.type.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstLong extends com.android.dx.rop.cst.CstLiteral64 {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstLong>;
						public static VALUE_0: com.android.dx.rop.cst.CstLong;
						public static VALUE_1: com.android.dx.rop.cst.CstLong;
						public getBasicFrameType(): number;
						public toHuman(): string;
						public isConstant(): boolean;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public static make(value: number): com.android.dx.rop.cst.CstLong;
						public toString(): string;
						public getType(): com.android.dx.rop.type.Type;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export abstract class CstMemberRef extends com.android.dx.rop.cst.TypedConstant {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstMemberRef>;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public getBasicFrameType(): number;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public hashCode(): number;
						public toString(): string;
						public getType(): com.android.dx.rop.type.Type;
						public toHuman(): string;
						public isConstant(): boolean;
						public getDefiningClass(): com.android.dx.rop.cst.CstType;
						public isCategory2(): boolean;
						public getNat(): com.android.dx.rop.cst.CstNat;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstMethodHandle extends com.android.dx.rop.cst.Constant {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstMethodHandle>;
						public static METHOD_HANDLE_TYPE_STATIC_PUT: number;
						public static METHOD_HANDLE_TYPE_STATIC_GET: number;
						public static METHOD_HANDLE_TYPE_INSTANCE_PUT: number;
						public static METHOD_HANDLE_TYPE_INSTANCE_GET: number;
						public static METHOD_HANDLE_TYPE_INVOKE_STATIC: number;
						public static METHOD_HANDLE_TYPE_INVOKE_INSTANCE: number;
						public static METHOD_HANDLE_TYPE_INVOKE_CONSTRUCTOR: number;
						public static METHOD_HANDLE_TYPE_INVOKE_DIRECT: number;
						public static METHOD_HANDLE_TYPE_INVOKE_INTERFACE: number;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public typeName(): string;
						public static isInvocation(type: number): boolean;
						public getType(): number;
						public toString(): string;
						public isInvocation(): boolean;
						public static make(type: number, ref: com.android.dx.rop.cst.Constant): com.android.dx.rop.cst.CstMethodHandle;
						public toHuman(): string;
						public isAccessor(): boolean;
						public static isAccessor(type: number): boolean;
						public isCategory2(): boolean;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
						public getRef(): com.android.dx.rop.cst.Constant;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstMethodRef extends com.android.dx.rop.cst.CstBaseMethodRef {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstMethodRef>;
						public getBasicFrameType(): number;
						public constructor();
						public constructor(definingClass: com.android.dx.rop.cst.CstType, nat: com.android.dx.rop.cst.CstNat);
						public toHuman(): string;
						public isConstant(): boolean;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public getType(): com.android.dx.rop.type.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstNat extends com.android.dx.rop.cst.Constant {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstNat>;
						public static PRIMITIVE_TYPE_NAT: com.android.dx.rop.cst.CstNat;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public constructor();
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public typeName(): string;
						public isSignaturePolymorphic(): boolean;
						public hashCode(): number;
						public constructor(name: com.android.dx.rop.cst.CstString, descriptor: com.android.dx.rop.cst.CstString);
						public toString(): string;
						public toHuman(): string;
						public isClassInit(): boolean;
						public isCategory2(): boolean;
						public getFieldType(): com.android.dx.rop.type.Type;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
						public isInstanceInit(): boolean;
						public getName(): com.android.dx.rop.cst.CstString;
						public getDescriptor(): com.android.dx.rop.cst.CstString;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstProtoRef extends com.android.dx.rop.cst.Constant {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstProtoRef>;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public constructor();
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public typeName(): string;
						public hashCode(): number;
						public getPrototype(): com.android.dx.rop.type.Prototype;
						public toString(): string;
						public toHuman(): string;
						public constructor(prototype: com.android.dx.rop.type.Prototype);
						public isCategory2(): boolean;
						public static make(descriptor: com.android.dx.rop.cst.CstString): com.android.dx.rop.cst.CstProtoRef;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstShort extends com.android.dx.rop.cst.CstLiteral32 {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstShort>;
						public static VALUE_0: com.android.dx.rop.cst.CstShort;
						public getBasicFrameType(): number;
						public toHuman(): string;
						public isConstant(): boolean;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public static make(value: number): com.android.dx.rop.cst.CstShort;
						public toString(): string;
						public getType(): com.android.dx.rop.type.Type;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstString extends com.android.dx.rop.cst.TypedConstant {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstString>;
						public static EMPTY_STRING: com.android.dx.rop.cst.CstString;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getUtf16Size(): number;
						public typeName(): string;
						public constructor(string: string);
						public hashCode(): number;
						public getString(): string;
						public getType(): com.android.dx.rop.type.Type;
						public toQuoted(maxLength: number): string;
						public isCategory2(): boolean;
						public getUtf8Size(): number;
						public getBasicFrameType(): number;
						public static stringToUtf8Bytes(string: string): number[];
						public constructor();
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public getBytes(): com.android.dx.util.ByteArray;
						public constructor(bytes: com.android.dx.util.ByteArray);
						public toString(): string;
						public toHuman(): string;
						public isConstant(): boolean;
						public static utf8BytesToString(bytes: com.android.dx.util.ByteArray): string;
						public toQuoted(): string;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class CstType extends com.android.dx.rop.cst.TypedConstant {
						public static class: java.lang.Class<com.android.dx.rop.cst.CstType>;
						public static OBJECT: com.android.dx.rop.cst.CstType;
						public static BOOLEAN: com.android.dx.rop.cst.CstType;
						public static BYTE: com.android.dx.rop.cst.CstType;
						public static CHARACTER: com.android.dx.rop.cst.CstType;
						public static DOUBLE: com.android.dx.rop.cst.CstType;
						public static FLOAT: com.android.dx.rop.cst.CstType;
						public static LONG: com.android.dx.rop.cst.CstType;
						public static INTEGER: com.android.dx.rop.cst.CstType;
						public static SHORT: com.android.dx.rop.cst.CstType;
						public static VOID: com.android.dx.rop.cst.CstType;
						public static BOOLEAN_ARRAY: com.android.dx.rop.cst.CstType;
						public static BYTE_ARRAY: com.android.dx.rop.cst.CstType;
						public static CHAR_ARRAY: com.android.dx.rop.cst.CstType;
						public static DOUBLE_ARRAY: com.android.dx.rop.cst.CstType;
						public static FLOAT_ARRAY: com.android.dx.rop.cst.CstType;
						public static LONG_ARRAY: com.android.dx.rop.cst.CstType;
						public static INT_ARRAY: com.android.dx.rop.cst.CstType;
						public static SHORT_ARRAY: com.android.dx.rop.cst.CstType;
						public static METHOD_HANDLE: com.android.dx.rop.cst.CstType;
						public compareTo0(other: com.android.dx.rop.cst.Constant): number;
						public getBasicFrameType(): number;
						public constructor();
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public typeName(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public hashCode(): number;
						public toString(): string;
						public getType(): com.android.dx.rop.type.Type;
						public toHuman(): string;
						public isConstant(): boolean;
						public getPackageName(): string;
						public isCategory2(): boolean;
						public getClassType(): com.android.dx.rop.type.Type;
						public compareTo0(param0: com.android.dx.rop.cst.Constant): number;
						public static forBoxedPrimitiveType(primitiveType: com.android.dx.rop.type.Type): com.android.dx.rop.cst.CstType;
						public constructor(type: com.android.dx.rop.type.Type);
						public getDescriptor(): com.android.dx.rop.cst.CstString;
						public static clearInternTable(): void;
						public static intern(type: com.android.dx.rop.type.Type): com.android.dx.rop.cst.CstType;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class StdConstantPool extends com.android.dx.util.MutabilityControl implements com.android.dx.rop.cst.ConstantPool {
						public static class: java.lang.Class<com.android.dx.rop.cst.StdConstantPool>;
						public constructor();
						public set(n: number, cst: com.android.dx.rop.cst.Constant): void;
						public getEntries(): com.android.dx.rop.cst.Constant[];
						public getOrNull(n: number): com.android.dx.rop.cst.Constant;
						public constructor(size: number);
						public get(param0: number): com.android.dx.rop.cst.Constant;
						public get0Ok(param0: number): com.android.dx.rop.cst.Constant;
						public getOrNull(param0: number): com.android.dx.rop.cst.Constant;
						public get(n: number): com.android.dx.rop.cst.Constant;
						public size(): number;
						public get0Ok(n: number): com.android.dx.rop.cst.Constant;
						public constructor(mutable: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export abstract class TypedConstant extends com.android.dx.rop.cst.Constant implements com.android.dx.rop.type.TypeBearer {
						public static class: java.lang.Class<com.android.dx.rop.cst.TypedConstant>;
						public getBasicFrameType(): number;
						public constructor();
						public isConstant(): boolean;
						public toHuman(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public getType(): com.android.dx.rop.type.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module cst {
					export class Zeroes extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.cst.Zeroes>;
						public static zeroFor(type: com.android.dx.rop.type.Type): com.android.dx.rop.cst.Constant;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module type {
					export class Prototype extends java.lang.Comparable<com.android.dx.rop.type.Prototype> {
						public static class: java.lang.Class<com.android.dx.rop.type.Prototype>;
						public static fromDescriptor(descriptor: string): com.android.dx.rop.type.Prototype;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public getDescriptor(): string;
						public getParameterTypes(): com.android.dx.rop.type.StdTypeList;
						public static internInts(returnType: com.android.dx.rop.type.Type, count: number): com.android.dx.rop.type.Prototype;
						public hashCode(): number;
						public compareTo(other: com.android.dx.rop.type.Prototype): number;
						public toString(): string;
						public getReturnType(): com.android.dx.rop.type.Type;
						public static intern(descriptor: string, definer: com.android.dx.rop.type.Type, isStatic: boolean, isInit: boolean): com.android.dx.rop.type.Prototype;
						public static intern(descriptor: string): com.android.dx.rop.type.Prototype;
						public getParameterFrameTypes(): com.android.dx.rop.type.StdTypeList;
						public withFirstParameter(param: com.android.dx.rop.type.Type): com.android.dx.rop.type.Prototype;
						public static clearInternTable(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module type {
					export class StdTypeList extends com.android.dx.util.FixedSizeList implements com.android.dx.rop.type.TypeList {
						public static class: java.lang.Class<com.android.dx.rop.type.StdTypeList>;
						public static EMPTY: com.android.dx.rop.type.StdTypeList;
						public static INT: com.android.dx.rop.type.StdTypeList;
						public static LONG: com.android.dx.rop.type.StdTypeList;
						public static FLOAT: com.android.dx.rop.type.StdTypeList;
						public static DOUBLE: com.android.dx.rop.type.StdTypeList;
						public static OBJECT: com.android.dx.rop.type.StdTypeList;
						public static RETURN_ADDRESS: com.android.dx.rop.type.StdTypeList;
						public static THROWABLE: com.android.dx.rop.type.StdTypeList;
						public static INT_INT: com.android.dx.rop.type.StdTypeList;
						public static LONG_LONG: com.android.dx.rop.type.StdTypeList;
						public static FLOAT_FLOAT: com.android.dx.rop.type.StdTypeList;
						public static DOUBLE_DOUBLE: com.android.dx.rop.type.StdTypeList;
						public static OBJECT_OBJECT: com.android.dx.rop.type.StdTypeList;
						public static INT_OBJECT: com.android.dx.rop.type.StdTypeList;
						public static LONG_OBJECT: com.android.dx.rop.type.StdTypeList;
						public static FLOAT_OBJECT: com.android.dx.rop.type.StdTypeList;
						public static DOUBLE_OBJECT: com.android.dx.rop.type.StdTypeList;
						public static LONG_INT: com.android.dx.rop.type.StdTypeList;
						public static INTARR_INT: com.android.dx.rop.type.StdTypeList;
						public static LONGARR_INT: com.android.dx.rop.type.StdTypeList;
						public static FLOATARR_INT: com.android.dx.rop.type.StdTypeList;
						public static DOUBLEARR_INT: com.android.dx.rop.type.StdTypeList;
						public static OBJECTARR_INT: com.android.dx.rop.type.StdTypeList;
						public static BOOLEANARR_INT: com.android.dx.rop.type.StdTypeList;
						public static BYTEARR_INT: com.android.dx.rop.type.StdTypeList;
						public static CHARARR_INT: com.android.dx.rop.type.StdTypeList;
						public static SHORTARR_INT: com.android.dx.rop.type.StdTypeList;
						public static INT_INTARR_INT: com.android.dx.rop.type.StdTypeList;
						public static LONG_LONGARR_INT: com.android.dx.rop.type.StdTypeList;
						public static FLOAT_FLOATARR_INT: com.android.dx.rop.type.StdTypeList;
						public static DOUBLE_DOUBLEARR_INT: com.android.dx.rop.type.StdTypeList;
						public static OBJECT_OBJECTARR_INT: com.android.dx.rop.type.StdTypeList;
						public static INT_BOOLEANARR_INT: com.android.dx.rop.type.StdTypeList;
						public static INT_BYTEARR_INT: com.android.dx.rop.type.StdTypeList;
						public static INT_CHARARR_INT: com.android.dx.rop.type.StdTypeList;
						public static INT_SHORTARR_INT: com.android.dx.rop.type.StdTypeList;
						public constructor();
						public set(n: number, type: com.android.dx.rop.type.Type): void;
						public static make(type: com.android.dx.rop.type.Type): com.android.dx.rop.type.StdTypeList;
						public toHuman(prefix: string, separator: string, suffix: string): string;
						public static make(type0: com.android.dx.rop.type.Type, type1: com.android.dx.rop.type.Type, type2: com.android.dx.rop.type.Type, type3: com.android.dx.rop.type.Type): com.android.dx.rop.type.StdTypeList;
						public getWordCount(): number;
						public static make(type0: com.android.dx.rop.type.Type, type1: com.android.dx.rop.type.Type): com.android.dx.rop.type.StdTypeList;
						public withAddedType(param0: com.android.dx.rop.type.Type): com.android.dx.rop.type.TypeList;
						public static equalContents(list1: com.android.dx.rop.type.TypeList, list2: com.android.dx.rop.type.TypeList): boolean;
						public isMutable(): boolean;
						public withFirst(type: com.android.dx.rop.type.Type): com.android.dx.rop.type.StdTypeList;
						public static toHuman(list: com.android.dx.rop.type.TypeList): string;
						public constructor(mutable: boolean);
						public static hashContents(list: com.android.dx.rop.type.TypeList): number;
						public toHuman(): string;
						public static compareContents(list1: com.android.dx.rop.type.TypeList, list2: com.android.dx.rop.type.TypeList): number;
						public get(n: number): com.android.dx.rop.type.Type;
						public static make(type0: com.android.dx.rop.type.Type, type1: com.android.dx.rop.type.Type, type2: com.android.dx.rop.type.Type): com.android.dx.rop.type.StdTypeList;
						public withAddedType(type: com.android.dx.rop.type.Type): com.android.dx.rop.type.TypeList;
						public constructor(size: number);
						public getType(param0: number): com.android.dx.rop.type.Type;
						public getType(n: number): com.android.dx.rop.type.Type;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module type {
					export class Type extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.type.Type>;
						public static BT_VOID: number;
						public static BT_BOOLEAN: number;
						public static BT_BYTE: number;
						public static BT_CHAR: number;
						public static BT_DOUBLE: number;
						public static BT_FLOAT: number;
						public static BT_INT: number;
						public static BT_LONG: number;
						public static BT_SHORT: number;
						public static BT_OBJECT: number;
						public static BT_ADDR: number;
						public static BT_COUNT: number;
						public static BOOLEAN: com.android.dx.rop.type.Type;
						public static BYTE: com.android.dx.rop.type.Type;
						public static CHAR: com.android.dx.rop.type.Type;
						public static DOUBLE: com.android.dx.rop.type.Type;
						public static FLOAT: com.android.dx.rop.type.Type;
						public static INT: com.android.dx.rop.type.Type;
						public static LONG: com.android.dx.rop.type.Type;
						public static SHORT: com.android.dx.rop.type.Type;
						public static VOID: com.android.dx.rop.type.Type;
						public static KNOWN_NULL: com.android.dx.rop.type.Type;
						public static RETURN_ADDRESS: com.android.dx.rop.type.Type;
						public static ANNOTATION: com.android.dx.rop.type.Type;
						public static CLASS: com.android.dx.rop.type.Type;
						public static CLONEABLE: com.android.dx.rop.type.Type;
						public static METHOD_HANDLE: com.android.dx.rop.type.Type;
						public static OBJECT: com.android.dx.rop.type.Type;
						public static SERIALIZABLE: com.android.dx.rop.type.Type;
						public static STRING: com.android.dx.rop.type.Type;
						public static THROWABLE: com.android.dx.rop.type.Type;
						public static BOOLEAN_CLASS: com.android.dx.rop.type.Type;
						public static BYTE_CLASS: com.android.dx.rop.type.Type;
						public static CHARACTER_CLASS: com.android.dx.rop.type.Type;
						public static DOUBLE_CLASS: com.android.dx.rop.type.Type;
						public static FLOAT_CLASS: com.android.dx.rop.type.Type;
						public static INTEGER_CLASS: com.android.dx.rop.type.Type;
						public static LONG_CLASS: com.android.dx.rop.type.Type;
						public static SHORT_CLASS: com.android.dx.rop.type.Type;
						public static VOID_CLASS: com.android.dx.rop.type.Type;
						public static BOOLEAN_ARRAY: com.android.dx.rop.type.Type;
						public static BYTE_ARRAY: com.android.dx.rop.type.Type;
						public static CHAR_ARRAY: com.android.dx.rop.type.Type;
						public static DOUBLE_ARRAY: com.android.dx.rop.type.Type;
						public static FLOAT_ARRAY: com.android.dx.rop.type.Type;
						public static INT_ARRAY: com.android.dx.rop.type.Type;
						public static LONG_ARRAY: com.android.dx.rop.type.Type;
						public static OBJECT_ARRAY: com.android.dx.rop.type.Type;
						public static SHORT_ARRAY: com.android.dx.rop.type.Type;
						public equals(obj: any): boolean;
						public equals(other: any): boolean;
						public isArray(): boolean;
						public hashCode(): number;
						public getClassName(): string;
						public getArrayType(): com.android.dx.rop.type.Type;
						public isIntlike(): boolean;
						public getType(): com.android.dx.rop.type.Type;
						public isPrimitive(): boolean;
						public isCategory1(): boolean;
						public isCategory2(): boolean;
						public isReference(): boolean;
						public isArrayOrKnownNull(): boolean;
						public getBasicFrameType(): number;
						public getDescriptor(): string;
						public getBasicType(): number;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getFrameType(): com.android.dx.rop.type.Type;
						public toString(): string;
						public getCategory(): number;
						public static intern(descriptor: string): com.android.dx.rop.type.Type;
						public static internReturnType(descriptor: string): com.android.dx.rop.type.Type;
						public getNewAt(): number;
						public getComponentType(): com.android.dx.rop.type.Type;
						public asUninitialized(newAt: number): com.android.dx.rop.type.Type;
						public toHuman(): string;
						public isConstant(): boolean;
						public isUninitialized(): boolean;
						public compareTo(other: com.android.dx.rop.type.Type): number;
						public getInitializedType(): com.android.dx.rop.type.Type;
						public static clearInternTable(): void;
						public static internClassName(name: string): com.android.dx.rop.type.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module type {
					export class TypeBearer extends java.lang.Object implements com.android.dx.util.ToHuman {
						public static class: java.lang.Class<com.android.dx.rop.type.TypeBearer>;
						/**
						 * Constructs a new instance of the com.android.dx.rop.type.TypeBearer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getType(): com.android.dx.rop.type.Type;
							getFrameType(): com.android.dx.rop.type.TypeBearer;
							getBasicType(): number;
							getBasicFrameType(): number;
							isConstant(): boolean;
							toHuman(): string;
						});
						public constructor();
						public getBasicFrameType(): number;
						public isConstant(): boolean;
						public toHuman(): string;
						public getFrameType(): com.android.dx.rop.type.TypeBearer;
						public getBasicType(): number;
						public getType(): com.android.dx.rop.type.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module rop {
				export module type {
					export class TypeList extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.rop.type.TypeList>;
						/**
						 * Constructs a new instance of the com.android.dx.rop.type.TypeList interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isMutable(): boolean;
							size(): number;
							getType(param0: number): com.android.dx.rop.type.Type;
							getWordCount(): number;
							withAddedType(param0: com.android.dx.rop.type.Type): com.android.dx.rop.type.TypeList;
						});
						public constructor();
						public getType(param0: number): com.android.dx.rop.type.Type;
						public getWordCount(): number;
						public size(): number;
						public withAddedType(param0: com.android.dx.rop.type.Type): com.android.dx.rop.type.TypeList;
						public isMutable(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class BasicRegisterMapper extends com.android.dx.ssa.RegisterMapper {
					public static class: java.lang.Class<com.android.dx.ssa.BasicRegisterMapper>;
					public map(sources: com.android.dx.rop.code.RegisterSpecSet): com.android.dx.rop.code.RegisterSpecSet;
					public map(param0: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpec;
					public toHuman(): string;
					public constructor();
					public oldToNew(oldReg: number): number;
					public getNewRegisterCount(): number;
					public addMapping(oldReg: number, newReg: number, category: number): void;
					public constructor(countOldRegisters: number);
					public map(sources: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.RegisterSpecList;
					public map(registerSpec: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpec;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class ConstCollector extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.ConstCollector>;
					public static process(ssaMethod: com.android.dx.ssa.SsaMethod): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class DeadCodeRemover extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.DeadCodeRemover>;
					public static process(ssaMethod: com.android.dx.ssa.SsaMethod): void;
				}
				export module DeadCodeRemover {
					export class NoSideEffectVisitor extends java.lang.Object implements com.android.dx.ssa.SsaInsn.Visitor {
						public static class: java.lang.Class<com.android.dx.ssa.DeadCodeRemover.NoSideEffectVisitor>;
						public visitNonMoveInsn(insn: com.android.dx.ssa.NormalSsaInsn): void;
						public visitMoveInsn(insn: com.android.dx.ssa.NormalSsaInsn): void;
						public visitNonMoveInsn(param0: com.android.dx.ssa.NormalSsaInsn): void;
						public visitMoveInsn(param0: com.android.dx.ssa.NormalSsaInsn): void;
						public visitPhiInsn(param0: com.android.dx.ssa.PhiInsn): void;
						public constructor(noSideEffectRegs: java.util.BitSet);
						public visitPhiInsn(phi: com.android.dx.ssa.PhiInsn): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class DomFront extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.DomFront>;
					public constructor(meth: com.android.dx.ssa.SsaMethod);
					public run(): com.android.dx.ssa.DomFront.DomInfo[];
				}
				export module DomFront {
					export class DomInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.ssa.DomFront.DomInfo>;
						public dominanceFrontiers: com.android.dx.util.IntSet;
						public idom: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class Dominators extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.Dominators>;
					public static make(meth: com.android.dx.ssa.SsaMethod, domInfos: com.android.dx.ssa.DomFront.DomInfo[], postdom: boolean): com.android.dx.ssa.Dominators;
				}
				export module Dominators {
					export class DFSInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.ssa.Dominators.DFSInfo>;
						public semidom: number;
						public parent: com.android.dx.ssa.SsaBasicBlock;
						public rep: com.android.dx.ssa.SsaBasicBlock;
						public ancestor: com.android.dx.ssa.SsaBasicBlock;
						public bucket: java.util.ArrayList<com.android.dx.ssa.SsaBasicBlock>;
						public constructor();
					}
					export class DfsWalker extends java.lang.Object implements com.android.dx.ssa.SsaBasicBlock.Visitor {
						public static class: java.lang.Class<com.android.dx.ssa.Dominators.DfsWalker>;
						public visitBlock(v: com.android.dx.ssa.SsaBasicBlock, parent: com.android.dx.ssa.SsaBasicBlock): void;
						public visitBlock(param0: com.android.dx.ssa.SsaBasicBlock, param1: com.android.dx.ssa.SsaBasicBlock): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class EscapeAnalysis extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.EscapeAnalysis>;
					public static process(ssaMethod: com.android.dx.ssa.SsaMethod): void;
				}
				export module EscapeAnalysis {
					export class EscapeSet extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.ssa.EscapeAnalysis.EscapeSet>;
					}
					export class EscapeState {
						public static class: java.lang.Class<com.android.dx.ssa.EscapeAnalysis.EscapeState>;
						public static TOP: com.android.dx.ssa.EscapeAnalysis.EscapeState;
						public static NONE: com.android.dx.ssa.EscapeAnalysis.EscapeState;
						public static METHOD: com.android.dx.ssa.EscapeAnalysis.EscapeState;
						public static INTER: com.android.dx.ssa.EscapeAnalysis.EscapeState;
						public static GLOBAL: com.android.dx.ssa.EscapeAnalysis.EscapeState;
						public static valueOf(name: string): com.android.dx.ssa.EscapeAnalysis.EscapeState;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): com.android.dx.ssa.EscapeAnalysis.EscapeState[];
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class InterferenceRegisterMapper extends com.android.dx.ssa.BasicRegisterMapper {
					public static class: java.lang.Class<com.android.dx.ssa.InterferenceRegisterMapper>;
					public constructor(oldRegInterference: com.android.dx.ssa.back.InterferenceGraph, countOldRegisters: number);
					public interferes(oldSpec: com.android.dx.rop.code.RegisterSpec, newReg: number): boolean;
					public constructor();
					public addMapping(oldReg: number, newReg: number, category: number): void;
					public interferes(oldReg: number, newReg: number, category: number): boolean;
					public constructor(countOldRegisters: number);
					public areAnyPinned(oldSpecs: com.android.dx.rop.code.RegisterSpecList, newReg: number, targetCategory: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class LiteralOpUpgrader extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.LiteralOpUpgrader>;
					public static process(ssaMethod: com.android.dx.ssa.SsaMethod): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class LocalVariableExtractor extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.LocalVariableExtractor>;
					public static extract(method: com.android.dx.ssa.SsaMethod): com.android.dx.ssa.LocalVariableInfo;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class LocalVariableInfo extends com.android.dx.util.MutabilityControl {
					public static class: java.lang.Class<com.android.dx.ssa.LocalVariableInfo>;
					public setStarts(index: number, specs: com.android.dx.rop.code.RegisterSpecSet): void;
					public getAssignment(insn: com.android.dx.ssa.SsaInsn): com.android.dx.rop.code.RegisterSpec;
					public getAssignmentCount(): number;
					public constructor();
					public constructor(mutable: boolean);
					public mergeStarts(index: number, specs: com.android.dx.rop.code.RegisterSpecSet): boolean;
					public getStarts(index: number): com.android.dx.rop.code.RegisterSpecSet;
					public constructor(method: com.android.dx.ssa.SsaMethod);
					public addAssignment(insn: com.android.dx.ssa.SsaInsn, spec: com.android.dx.rop.code.RegisterSpec): void;
					public debugDump(): void;
					public mutableCopyOfStarts(index: number): com.android.dx.rop.code.RegisterSpecSet;
					public getStarts(block: com.android.dx.ssa.SsaBasicBlock): com.android.dx.rop.code.RegisterSpecSet;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class MoveParamCombiner extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.MoveParamCombiner>;
					public static process(ssaMethod: com.android.dx.ssa.SsaMethod): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class NormalSsaInsn extends com.android.dx.ssa.SsaInsn implements java.lang.Cloneable {
					public static class: java.lang.Class<com.android.dx.ssa.NormalSsaInsn>;
					public getOpcode(): com.android.dx.rop.code.Rop;
					public canThrow(): boolean;
					public mapSourceRegisters(param0: com.android.dx.ssa.RegisterMapper): void;
					public getOriginalRopInsn(): com.android.dx.rop.code.Insn;
					public mapSourceRegisters(mapper: com.android.dx.ssa.RegisterMapper): void;
					public clone(): com.android.dx.ssa.SsaInsn;
					public setNewSources(newSources: com.android.dx.rop.code.RegisterSpecList): void;
					public getSources(): com.android.dx.rop.code.RegisterSpecList;
					public isNormalMoveInsn(): boolean;
					public hasSideEffect(): boolean;
					public clone(): any;
					public isPhiOrMove(): boolean;
					public toHuman(): string;
					public isMoveException(): boolean;
					public accept(v: com.android.dx.ssa.SsaInsn.Visitor): void;
					public changeOneSource(index: number, newSpec: com.android.dx.rop.code.RegisterSpec): void;
					public clone(): com.android.dx.ssa.NormalSsaInsn;
					public toRopInsn(): com.android.dx.rop.code.Insn;
					public upgradeToLiteral(): void;
					public getLocalAssignment(): com.android.dx.rop.code.RegisterSpec;
					public accept(param0: com.android.dx.ssa.SsaInsn.Visitor): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class Optimizer extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.Optimizer>;
					public static getAdvice(): com.android.dx.rop.code.TranslationAdvice;
					public static optimize(rmeth: com.android.dx.rop.code.RopMethod, paramWidth: number, isStatic: boolean, inPreserveLocals: boolean, inAdvice: com.android.dx.rop.code.TranslationAdvice, steps: java.util.EnumSet<com.android.dx.ssa.Optimizer.OptionalStep>): com.android.dx.rop.code.RopMethod;
					public constructor();
					public static debugRenaming(rmeth: com.android.dx.rop.code.RopMethod, paramWidth: number, isStatic: boolean, inPreserveLocals: boolean, inAdvice: com.android.dx.rop.code.TranslationAdvice): com.android.dx.ssa.SsaMethod;
					public static debugNoRegisterAllocation(rmeth: com.android.dx.rop.code.RopMethod, paramWidth: number, isStatic: boolean, inPreserveLocals: boolean, inAdvice: com.android.dx.rop.code.TranslationAdvice, steps: java.util.EnumSet<com.android.dx.ssa.Optimizer.OptionalStep>): com.android.dx.ssa.SsaMethod;
					public static getPreserveLocals(): boolean;
					public static optimize(rmeth: com.android.dx.rop.code.RopMethod, paramWidth: number, isStatic: boolean, inPreserveLocals: boolean, inAdvice: com.android.dx.rop.code.TranslationAdvice): com.android.dx.rop.code.RopMethod;
					public static debugDeadCodeRemover(rmeth: com.android.dx.rop.code.RopMethod, paramWidth: number, isStatic: boolean, inPreserveLocals: boolean, inAdvice: com.android.dx.rop.code.TranslationAdvice): com.android.dx.ssa.SsaMethod;
					public static debugEdgeSplit(rmeth: com.android.dx.rop.code.RopMethod, paramWidth: number, isStatic: boolean, inPreserveLocals: boolean, inAdvice: com.android.dx.rop.code.TranslationAdvice): com.android.dx.ssa.SsaMethod;
					public static debugPhiPlacement(rmeth: com.android.dx.rop.code.RopMethod, paramWidth: number, isStatic: boolean, inPreserveLocals: boolean, inAdvice: com.android.dx.rop.code.TranslationAdvice): com.android.dx.ssa.SsaMethod;
				}
				export module Optimizer {
					export class OptionalStep {
						public static class: java.lang.Class<com.android.dx.ssa.Optimizer.OptionalStep>;
						public static MOVE_PARAM_COMBINER: com.android.dx.ssa.Optimizer.OptionalStep;
						public static SCCP: com.android.dx.ssa.Optimizer.OptionalStep;
						public static LITERAL_UPGRADE: com.android.dx.ssa.Optimizer.OptionalStep;
						public static CONST_COLLECTOR: com.android.dx.ssa.Optimizer.OptionalStep;
						public static ESCAPE_ANALYSIS: com.android.dx.ssa.Optimizer.OptionalStep;
						public static values(): com.android.dx.ssa.Optimizer.OptionalStep[];
						public static valueOf(name: string): com.android.dx.ssa.Optimizer.OptionalStep;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class PhiInsn extends com.android.dx.ssa.SsaInsn {
					public static class: java.lang.Class<com.android.dx.ssa.PhiInsn>;
					public getOpcode(): com.android.dx.rop.code.Rop;
					public removePhiRegister(registerSpec: com.android.dx.rop.code.RegisterSpec): void;
					public addPhiOperand(registerSpec: com.android.dx.rop.code.RegisterSpec, predBlock: com.android.dx.ssa.SsaBasicBlock): void;
					public getOriginalRopInsn(): com.android.dx.rop.code.Insn;
					public clone(): com.android.dx.ssa.SsaInsn;
					public mapSourceRegisters(mapper: com.android.dx.ssa.RegisterMapper): void;
					public constructor(resultReg: number, block: com.android.dx.ssa.SsaBasicBlock);
					public isRegASource(reg: number): boolean;
					public getSources(): com.android.dx.rop.code.RegisterSpecList;
					public clone(): any;
					public accept(v: com.android.dx.ssa.SsaInsn.Visitor): void;
					public changeResultType(type: com.android.dx.rop.type.TypeBearer, local: com.android.dx.rop.code.LocalItem): void;
					public predBlockIndexForSourcesIndex(sourcesIndex: number): number;
					public toRopInsn(): com.android.dx.rop.code.Insn;
					public clone(): com.android.dx.ssa.PhiInsn;
					public accept(param0: com.android.dx.ssa.SsaInsn.Visitor): void;
					public constructor(resultReg: com.android.dx.rop.code.RegisterSpec, block: com.android.dx.ssa.SsaBasicBlock);
					public canThrow(): boolean;
					public mapSourceRegisters(param0: com.android.dx.ssa.RegisterMapper): void;
					public predBlocksForReg(reg: number, ssaMeth: com.android.dx.ssa.SsaMethod): java.util.List<com.android.dx.ssa.SsaBasicBlock>;
					public updateSourcesToDefinitions(ssaMeth: com.android.dx.ssa.SsaMethod): void;
					public getRopResultReg(): number;
					public hasSideEffect(): boolean;
					public constructor(result: com.android.dx.rop.code.RegisterSpec, block: com.android.dx.ssa.SsaBasicBlock);
					public isPhiOrMove(): boolean;
					public toHuman(): string;
					public toHumanWithInline(extra: string): string;
					public areAllOperandsEqual(): boolean;
				}
				export module PhiInsn {
					export class Operand extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.ssa.PhiInsn.Operand>;
						public regSpec: com.android.dx.rop.code.RegisterSpec;
						public blockIndex: number;
						public ropLabel: number;
						public constructor(regSpec: com.android.dx.rop.code.RegisterSpec, blockIndex: number, ropLabel: number);
					}
					export class Visitor extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.ssa.PhiInsn.Visitor>;
						/**
						 * Constructs a new instance of the com.android.dx.ssa.PhiInsn$Visitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							visitPhiInsn(param0: com.android.dx.ssa.PhiInsn): void;
						});
						public constructor();
						public visitPhiInsn(param0: com.android.dx.ssa.PhiInsn): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class PhiTypeResolver extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.PhiTypeResolver>;
					public static process(ssaMeth: com.android.dx.ssa.SsaMethod): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export abstract class RegisterMapper extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.RegisterMapper>;
					public map(sources: com.android.dx.rop.code.RegisterSpecSet): com.android.dx.rop.code.RegisterSpecSet;
					public map(param0: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpec;
					public constructor();
					public getNewRegisterCount(): number;
					public map(sources: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.RegisterSpecList;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class SCCP extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.SCCP>;
					public static process(ssaMethod: com.android.dx.ssa.SsaMethod): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class SetFactory extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.SetFactory>;
					public constructor();
					public static makeInterferenceSet(countRegs: number): com.android.dx.util.IntSet;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class SsaBasicBlock extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.SsaBasicBlock>;
					public static LABEL_COMPARATOR: java.util.Comparator<com.android.dx.ssa.SsaBasicBlock>;
					public insertNewPredecessor(): com.android.dx.ssa.SsaBasicBlock;
					public getLiveInRegs(): com.android.dx.util.IntSet;
					public replaceLastInsn(insn: com.android.dx.rop.code.Insn): void;
					public getPhiInsns(): java.util.List<com.android.dx.ssa.SsaInsn>;
					public constructor(basicBlockIndex: number, ropLabel: number, parent: com.android.dx.ssa.SsaMethod);
					public getSuccessorList(): com.android.dx.util.IntList;
					public getPrimarySuccessor(): com.android.dx.ssa.SsaBasicBlock;
					public toString(): string;
					public exitBlockFixup(exitBlock: com.android.dx.ssa.SsaBasicBlock): void;
					public addLiveOut(regV: number): void;
					public addLiveIn(regV: number): void;
					public scheduleMovesFromPhis(): void;
					public addInsnToHead(insn: com.android.dx.rop.code.Insn): void;
					public insertNewSuccessor(other: com.android.dx.ssa.SsaBasicBlock): com.android.dx.ssa.SsaBasicBlock;
					public getLiveOutRegs(): com.android.dx.util.IntSet;
					public addPhiInsnForReg(resultSpec: com.android.dx.rop.code.RegisterSpec): void;
					public removeAllPhiInsns(): void;
					public getIndex(): number;
					public getPrimarySuccessorRopLabel(): number;
					public getInsns(): java.util.ArrayList<com.android.dx.ssa.SsaInsn>;
					public getPrimarySuccessorIndex(): number;
					public getRopLabelSuccessorList(): com.android.dx.util.IntList;
					public replaceSuccessor(oldIndex: number, newIndex: number): void;
					public isReachable(): boolean;
					public addPhiInsnForReg(reg: number): void;
					public getRopLabelString(): string;
					public forEachInsn(visitor: com.android.dx.ssa.SsaInsn.Visitor): void;
					public isExitBlock(): boolean;
					public forEachPhiInsn(v: com.android.dx.ssa.PhiInsn.Visitor): void;
					public getDomChildren(): java.util.ArrayList<com.android.dx.ssa.SsaBasicBlock>;
					public getSuccessors(): java.util.BitSet;
					public getParent(): com.android.dx.ssa.SsaMethod;
					public addMoveToEnd(result: com.android.dx.rop.code.RegisterSpec, source: com.android.dx.rop.code.RegisterSpec): void;
					public addDomChild(child: com.android.dx.ssa.SsaBasicBlock): void;
					public addMoveToBeginning(result: com.android.dx.rop.code.RegisterSpec, source: com.android.dx.rop.code.RegisterSpec): void;
					public getPredecessors(): java.util.BitSet;
					public static newFromRop(rmeth: com.android.dx.rop.code.RopMethod, basicBlockIndex: number, parent: com.android.dx.ssa.SsaMethod): com.android.dx.ssa.SsaBasicBlock;
					public removeSuccessor(oldIndex: number): void;
					public getRopLabel(): number;
					public setReachable(reach: number): void;
				}
				export module SsaBasicBlock {
					export class LabelComparator extends java.util.Comparator<com.android.dx.ssa.SsaBasicBlock> {
						public static class: java.lang.Class<com.android.dx.ssa.SsaBasicBlock.LabelComparator>;
						public constructor();
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
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
						public compare(b1: com.android.dx.ssa.SsaBasicBlock, b2: com.android.dx.ssa.SsaBasicBlock): number;
						public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					}
					export class Visitor extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.ssa.SsaBasicBlock.Visitor>;
						/**
						 * Constructs a new instance of the com.android.dx.ssa.SsaBasicBlock$Visitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							visitBlock(param0: com.android.dx.ssa.SsaBasicBlock, param1: com.android.dx.ssa.SsaBasicBlock): void;
						});
						public constructor();
						public visitBlock(param0: com.android.dx.ssa.SsaBasicBlock, param1: com.android.dx.ssa.SsaBasicBlock): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class SsaConverter extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.SsaConverter>;
					public static DEBUG: boolean;
					public constructor();
					public static testPhiPlacement(rmeth: com.android.dx.rop.code.RopMethod, paramWidth: number, isStatic: boolean): com.android.dx.ssa.SsaMethod;
					public static testEdgeSplit(rmeth: com.android.dx.rop.code.RopMethod, paramWidth: number, isStatic: boolean): com.android.dx.ssa.SsaMethod;
					public static convertToSsaMethod(rmeth: com.android.dx.rop.code.RopMethod, paramWidth: number, isStatic: boolean): com.android.dx.ssa.SsaMethod;
					public static updateSsaMethod(ssaMeth: com.android.dx.ssa.SsaMethod, threshold: number): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export abstract class SsaInsn extends java.lang.Object implements com.android.dx.util.ToHuman, java.lang.Cloneable {
					public static class: java.lang.Class<com.android.dx.ssa.SsaInsn>;
					public getResult(): com.android.dx.rop.code.RegisterSpec;
					public getOpcode(): com.android.dx.rop.code.Rop;
					public static makeFromRop(insn: com.android.dx.rop.code.Insn, block: com.android.dx.ssa.SsaBasicBlock): com.android.dx.ssa.SsaInsn;
					public getOriginalRopInsn(): com.android.dx.rop.code.Insn;
					public clone(): com.android.dx.ssa.SsaInsn;
					public isRegASource(reg: number): boolean;
					public getSources(): com.android.dx.rop.code.RegisterSpecList;
					public isNormalMoveInsn(): boolean;
					public mapRegisters(mapper: com.android.dx.ssa.RegisterMapper): void;
					public clone(): any;
					public getBlock(): com.android.dx.ssa.SsaBasicBlock;
					public toRopInsn(): com.android.dx.rop.code.Insn;
					public accept(param0: com.android.dx.ssa.SsaInsn.Visitor): void;
					public canThrow(): boolean;
					public mapSourceRegisters(param0: com.android.dx.ssa.RegisterMapper): void;
					public isResultReg(reg: number): boolean;
					public setResult(result: com.android.dx.rop.code.RegisterSpec): void;
					public changeResultReg(reg: number): void;
					public hasSideEffect(): boolean;
					public constructor(result: com.android.dx.rop.code.RegisterSpec, block: com.android.dx.ssa.SsaBasicBlock);
					public isPhiOrMove(): boolean;
					public isMoveException(): boolean;
					public toHuman(): string;
					public setResultLocal(local: com.android.dx.rop.code.LocalItem): void;
					public getLocalAssignment(): com.android.dx.rop.code.RegisterSpec;
				}
				export module SsaInsn {
					export class Visitor extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.ssa.SsaInsn.Visitor>;
						/**
						 * Constructs a new instance of the com.android.dx.ssa.SsaInsn$Visitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							visitMoveInsn(param0: com.android.dx.ssa.NormalSsaInsn): void;
							visitPhiInsn(param0: com.android.dx.ssa.PhiInsn): void;
							visitNonMoveInsn(param0: com.android.dx.ssa.NormalSsaInsn): void;
						});
						public constructor();
						public visitNonMoveInsn(param0: com.android.dx.ssa.NormalSsaInsn): void;
						public visitMoveInsn(param0: com.android.dx.ssa.NormalSsaInsn): void;
						public visitPhiInsn(param0: com.android.dx.ssa.PhiInsn): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class SsaMethod extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.ssa.SsaMethod>;
					public getEntryBlockIndex(): number;
					public isStatic(): boolean;
					public getDefinitionForRegister(reg: number): com.android.dx.ssa.SsaInsn;
					public deleteInsns(deletedInsns: java.util.Set<com.android.dx.ssa.SsaInsn>): void;
					public getRegCount(): number;
					public getParamWidth(): number;
					public getExitBlock(): com.android.dx.ssa.SsaBasicBlock;
					public getUseListCopy(): java.util.ArrayList<com.android.dx.ssa.SsaInsn>[];
					public getCountReachableBlocks(): number;
					public borrowSpareRegister(category: number): number;
					public forEachBlockDepthFirstDom(v: com.android.dx.ssa.SsaBasicBlock.Visitor): void;
					public getEntryBlock(): com.android.dx.ssa.SsaBasicBlock;
					public mapRegisters(mapper: com.android.dx.ssa.RegisterMapper): void;
					public static newFromRopMethod(ropMethod: com.android.dx.rop.code.RopMethod, paramWidth: number, isStatic: boolean): com.android.dx.ssa.SsaMethod;
					public onInsnsChanged(): void;
					public returnSpareRegisters(): void;
					public getUseListForRegister(reg: number): java.util.List<com.android.dx.ssa.SsaInsn>;
					public computeReachability(): void;
					public getBlocks(): java.util.ArrayList<com.android.dx.ssa.SsaBasicBlock>;
					public getExitBlockIndex(): number;
					public isRegALocal(spec: com.android.dx.rop.code.RegisterSpec): boolean;
					public makeNewSsaReg(): number;
					public forEachBlockDepthFirst(reverse: boolean, v: com.android.dx.ssa.SsaBasicBlock.Visitor): void;
					public forEachInsn(visitor: com.android.dx.ssa.SsaInsn.Visitor): void;
					public forEachPhiInsn(v: com.android.dx.ssa.PhiInsn.Visitor): void;
					public static indexListFromLabelList(ropBlocks: com.android.dx.rop.code.BasicBlockList, labelList: com.android.dx.util.IntList): com.android.dx.util.IntList;
					public makeNewGotoBlock(): com.android.dx.ssa.SsaBasicBlock;
					public blockIndexToRopLabel(bi: number): number;
					public setBackMode(): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export class SsaRenamer extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<com.android.dx.ssa.SsaRenamer>;
					public constructor(ssaMeth: com.android.dx.ssa.SsaMethod);
					public run(): void;
					public constructor(ssaMeth: com.android.dx.ssa.SsaMethod, thresh: number);
				}
				export module SsaRenamer {
					export class BlockRenamer extends java.lang.Object implements com.android.dx.ssa.SsaInsn.Visitor {
						public static class: java.lang.Class<com.android.dx.ssa.SsaRenamer.BlockRenamer>;
						public visitNonMoveInsn(insn: com.android.dx.ssa.NormalSsaInsn): void;
						public process(): void;
						public visitMoveInsn(insn: com.android.dx.ssa.NormalSsaInsn): void;
						public visitNonMoveInsn(param0: com.android.dx.ssa.NormalSsaInsn): void;
						public visitMoveInsn(param0: com.android.dx.ssa.NormalSsaInsn): void;
						public visitPhiInsn(param0: com.android.dx.ssa.PhiInsn): void;
						public visitPhiInsn(phi: com.android.dx.ssa.PhiInsn): void;
					}
					export module BlockRenamer {
						export class RenamingMapper extends com.android.dx.ssa.RegisterMapper {
							public static class: java.lang.Class<com.android.dx.ssa.SsaRenamer.BlockRenamer.RenamingMapper>;
							public constructor();
							public map(sources: com.android.dx.rop.code.RegisterSpecSet): com.android.dx.rop.code.RegisterSpecSet;
							public map(registerSpec: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpec;
							public map(sources: com.android.dx.rop.code.RegisterSpecList): com.android.dx.rop.code.RegisterSpecList;
							public constructor(param0: com.android.dx.ssa.SsaRenamer.BlockRenamer);
							public getNewRegisterCount(): number;
							public map(param0: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpec;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export module back {
					export class FirstFitAllocator extends com.android.dx.ssa.back.RegisterAllocator {
						public static class: java.lang.Class<com.android.dx.ssa.back.FirstFitAllocator>;
						public allocateRegisters(): com.android.dx.ssa.RegisterMapper;
						public wantsParamsMovedHigh(): boolean;
						public constructor(ssaMeth: com.android.dx.ssa.SsaMethod, interference: com.android.dx.ssa.back.InterferenceGraph);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export module back {
					export class FirstFitLocalCombiningAllocator extends com.android.dx.ssa.back.RegisterAllocator {
						public static class: java.lang.Class<com.android.dx.ssa.back.FirstFitLocalCombiningAllocator>;
						public constructor(ssaMeth: com.android.dx.ssa.SsaMethod, interference: com.android.dx.ssa.back.InterferenceGraph, minimizeRegisters: boolean);
						public allocateRegisters(): com.android.dx.ssa.RegisterMapper;
						public wantsParamsMovedHigh(): boolean;
						public constructor(ssaMeth: com.android.dx.ssa.SsaMethod, interference: com.android.dx.ssa.back.InterferenceGraph);
					}
					export module FirstFitLocalCombiningAllocator {
						export abstract class Alignment {
							public static class: java.lang.Class<com.android.dx.ssa.back.FirstFitLocalCombiningAllocator.Alignment>;
							public static EVEN: com.android.dx.ssa.back.FirstFitLocalCombiningAllocator.Alignment;
							public static ODD: com.android.dx.ssa.back.FirstFitLocalCombiningAllocator.Alignment;
							public static UNSPECIFIED: com.android.dx.ssa.back.FirstFitLocalCombiningAllocator.Alignment;
							public static valueOf(name: string): com.android.dx.ssa.back.FirstFitLocalCombiningAllocator.Alignment;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static values(): com.android.dx.ssa.back.FirstFitLocalCombiningAllocator.Alignment[];
						}
						export class Multiset extends java.lang.Object {
							public static class: java.lang.Class<com.android.dx.ssa.back.FirstFitLocalCombiningAllocator.Multiset>;
							public getSize(): number;
							public add(element: number): void;
							public getAndRemoveHighestCount(): number;
							public constructor(maxSize: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export module back {
					export class IdenticalBlockCombiner extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.ssa.back.IdenticalBlockCombiner>;
						public process(): com.android.dx.rop.code.RopMethod;
						public constructor(rm: com.android.dx.rop.code.RopMethod);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export module back {
					export class InterferenceGraph extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.ssa.back.InterferenceGraph>;
						public constructor(countRegs: number);
						public add(regV: number, regW: number): void;
						public mergeInterferenceSet(reg: number, set: com.android.dx.util.IntSet): void;
						public dumpToStdout(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export module back {
					export class LivenessAnalyzer extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.ssa.back.LivenessAnalyzer>;
						public run(): void;
						public static constructInterferenceGraph(ssaMeth: com.android.dx.ssa.SsaMethod): com.android.dx.ssa.back.InterferenceGraph;
					}
					export module LivenessAnalyzer {
						export class NextFunction {
							public static class: java.lang.Class<com.android.dx.ssa.back.LivenessAnalyzer.NextFunction>;
							public static LIVE_IN_AT_STATEMENT: com.android.dx.ssa.back.LivenessAnalyzer.NextFunction;
							public static LIVE_OUT_AT_STATEMENT: com.android.dx.ssa.back.LivenessAnalyzer.NextFunction;
							public static LIVE_OUT_AT_BLOCK: com.android.dx.ssa.back.LivenessAnalyzer.NextFunction;
							public static DONE: com.android.dx.ssa.back.LivenessAnalyzer.NextFunction;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): com.android.dx.ssa.back.LivenessAnalyzer.NextFunction;
							public static values(): com.android.dx.ssa.back.LivenessAnalyzer.NextFunction[];
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export module back {
					export class NullRegisterAllocator extends com.android.dx.ssa.back.RegisterAllocator {
						public static class: java.lang.Class<com.android.dx.ssa.back.NullRegisterAllocator>;
						public allocateRegisters(): com.android.dx.ssa.RegisterMapper;
						public wantsParamsMovedHigh(): boolean;
						public constructor(ssaMeth: com.android.dx.ssa.SsaMethod, interference: com.android.dx.ssa.back.InterferenceGraph);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export module back {
					export abstract class RegisterAllocator extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.ssa.back.RegisterAllocator>;
						public ssaMeth: com.android.dx.ssa.SsaMethod;
						public interference: com.android.dx.ssa.back.InterferenceGraph;
						public isDefinitionMoveParam(reg: number): boolean;
						public insertMoveBefore(insn: com.android.dx.ssa.SsaInsn, reg: com.android.dx.rop.code.RegisterSpec): com.android.dx.rop.code.RegisterSpec;
						public getCategoryForSsaReg(reg: number): number;
						public allocateRegisters(): com.android.dx.ssa.RegisterMapper;
						public getDefinitionSpecForSsaReg(reg: number): com.android.dx.rop.code.RegisterSpec;
						public wantsParamsMovedHigh(): boolean;
						public constructor(ssaMeth: com.android.dx.ssa.SsaMethod, interference: com.android.dx.ssa.back.InterferenceGraph);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module ssa {
				export module back {
					export class SsaToRop extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.ssa.back.SsaToRop>;
						public static convertToRopMethod(ssaMeth: com.android.dx.ssa.SsaMethod, minimizeRegisters: boolean): com.android.dx.rop.code.RopMethod;
						public getRegistersByFrequency(): number[];
					}
					export module SsaToRop {
						export class PhiVisitor extends java.lang.Object implements com.android.dx.ssa.PhiInsn.Visitor {
							public static class: java.lang.Class<com.android.dx.ssa.back.SsaToRop.PhiVisitor>;
							public constructor(blocks: java.util.ArrayList<com.android.dx.ssa.SsaBasicBlock>);
							public visitPhiInsn(insn: com.android.dx.ssa.PhiInsn): void;
							public visitPhiInsn(param0: com.android.dx.ssa.PhiInsn): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class AnnotatedOutput extends java.lang.Object implements com.android.dx.util.Output {
					public static class: java.lang.Class<com.android.dx.util.AnnotatedOutput>;
					/**
					 * Constructs a new instance of the com.android.dx.util.AnnotatedOutput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						annotates(): boolean;
						isVerbose(): boolean;
						annotate(param0: string): void;
						annotate(param0: number, param1: string): void;
						endAnnotation(): void;
						getAnnotationWidth(): number;
						getCursor(): number;
						assertCursor(param0: number): void;
						writeByte(param0: number): void;
						writeShort(param0: number): void;
						writeInt(param0: number): void;
						writeLong(param0: number): void;
						writeUleb128(param0: number): number;
						writeSleb128(param0: number): number;
						write(param0: com.android.dx.util.ByteArray): void;
						write(param0: number[], param1: number, param2: number): void;
						write(param0: number[]): void;
						writeZeroes(param0: number): void;
						alignTo(param0: number): void;
						writeByte(param0: number): void;
					});
					public constructor();
					public alignTo(param0: number): void;
					public isVerbose(): boolean;
					public annotates(): boolean;
					public writeShort(param0: number): void;
					public writeZeroes(param0: number): void;
					public annotate(param0: string): void;
					public write(param0: number[]): void;
					public write(param0: number[], param1: number, param2: number): void;
					public getAnnotationWidth(): number;
					public assertCursor(param0: number): void;
					public write(param0: com.android.dx.util.ByteArray): void;
					public writeByte(param0: number): void;
					public endAnnotation(): void;
					public writeUleb128(param0: number): number;
					public annotate(param0: number, param1: string): void;
					public writeInt(param0: number): void;
					public writeLong(param0: number): void;
					public getCursor(): number;
					public writeSleb128(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class BitIntSet extends java.lang.Object implements com.android.dx.util.IntSet {
					public static class: java.lang.Class<com.android.dx.util.BitIntSet>;
					public constructor(max: number);
					public toString(): string;
					public iterator(): com.android.dx.util.IntIterator;
					public add(value: number): void;
					public remove(value: number): void;
					public merge(other: com.android.dx.util.IntSet): void;
					public elements(): number;
					public add(param0: number): void;
					public has(value: number): boolean;
					public has(param0: number): boolean;
					public merge(param0: com.android.dx.util.IntSet): void;
					public remove(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class Bits extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.util.Bits>;
					public static toHuman(bits: number[]): string;
					public static get(bits: number[], idx: number): boolean;
					public static bitCount(bits: number[]): number;
					public static anyInRange(bits: number[], start: number, end: number): boolean;
					public static makeBitSet(max: number): number[];
					public static findFirst(bits: number[], idx: number): number;
					public static clear(bits: number[], idx: number): void;
					public static isEmpty(bits: number[]): boolean;
					public static or(a: number[], b: number[]): void;
					public static set(bits: number[], idx: number): void;
					public static getMax(bits: number[]): number;
					public static set(bits: number[], idx: number, value: boolean): void;
					public static findFirst(value: number, idx: number): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class ByteArray extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.util.ByteArray>;
					public getInt(off: number): number;
					public makeDataInputStream(): com.android.dx.util.ByteArray.MyDataInputStream;
					public getByte(off: number): number;
					public getBytes(out: number[], offset: number): void;
					public size(): number;
					public getShort(off: number): number;
					public getUnsignedShort(off: number): number;
					public constructor(bytes: number[]);
					public makeInputStream(): com.android.dx.util.ByteArray.MyInputStream;
					public slice(start: number, end: number): com.android.dx.util.ByteArray;
					public getUnsignedByte(off: number): number;
					public constructor(bytes: number[], start: number, end: number);
					public underlyingOffset(offset: number, bytes: number[]): number;
					public getLong(off: number): number;
				}
				export module ByteArray {
					export class GetCursor extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.util.ByteArray.GetCursor>;
						/**
						 * Constructs a new instance of the com.android.dx.util.ByteArray$GetCursor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getCursor(): number;
						});
						public constructor();
						public getCursor(): number;
					}
					export class MyDataInputStream extends java.io.DataInputStream {
						public static class: java.lang.Class<com.android.dx.util.ByteArray.MyDataInputStream>;
						public constructor();
						public readFully(b: number[], off: number, len: number): void;
						public skipBytes(param0: number): number;
						public readInt(): number;
						public close(): void;
						public readFully(param0: number[], param1: number, param2: number): void;
						public readUnsignedByte(): number;
						public readUTF(): string;
						public static readUTF(_in_: java.io.DataInput): string;
						public readChar(): string;
						public readFully(param0: number[]): void;
						public skipBytes(n: number): number;
						public readDouble(): number;
						public constructor(wrapped: com.android.dx.util.ByteArray.MyInputStream);
						public readShort(): number;
						public readByte(): number;
						public constructor(_in_: java.io.InputStream);
						public readBoolean(): boolean;
						public readUnsignedShort(): number;
						/** @deprecated */
						public readLine(): string;
						public readFully(b: number[]): void;
						public readFloat(): number;
						public readLong(): number;
						public readLine(): string;
					}
					export class MyInputStream extends java.io.InputStream {
						public static class: java.lang.Class<com.android.dx.util.ByteArray.MyInputStream>;
						public mark(reserve: number): void;
						public read(): number;
						public constructor();
						public mark(readlimit: number): void;
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public constructor(this$0: com.android.dx.util.ByteArray);
						public markSupported(): boolean;
						public read(arr: number[], offset: number, length: number): number;
						public read(b: number[]): number;
						public reset(): void;
						public available(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class ByteArrayAnnotatedOutput extends java.lang.Object implements com.android.dx.util.AnnotatedOutput, com.android.dex.util.ByteOutput {
					public static class: java.lang.Class<com.android.dx.util.ByteArrayAnnotatedOutput>;
					public write(bytes: com.android.dx.util.ByteArray): void;
					public writeShort(value: number): void;
					public alignTo(param0: number): void;
					public isVerbose(): boolean;
					public annotate(amt: number, msg: string): void;
					public write(bytes: number[]): void;
					public writeShort(param0: number): void;
					public getArray(): number[];
					public assertCursor(param0: number): void;
					public writeByte(value: number): void;
					public constructor();
					public write(bytes: number[], offset: number, length: number): void;
					public assertCursor(expectedCursor: number): void;
					public endAnnotation(): void;
					public writeUleb128(param0: number): number;
					public constructor(size: number);
					public enableAnnotations(annotationWidth: number, verbose: boolean): void;
					public annotate(param0: number, param1: string): void;
					public writeLong(param0: number): void;
					public writeInt(value: number): void;
					public finishAnnotating(): void;
					public getCursor(): number;
					public toByteArray(): number[];
					public annotates(): boolean;
					public annotate(msg: string): void;
					public writeZeroes(param0: number): void;
					public writeLong(value: number): void;
					public writeSleb128(value: number): number;
					public annotate(param0: string): void;
					public write(param0: number[]): void;
					public write(param0: number[], param1: number, param2: number): void;
					public getAnnotationWidth(): number;
					public alignTo(alignment: number): void;
					public write(param0: com.android.dx.util.ByteArray): void;
					public writeByte(param0: number): void;
					public writeZeroes(count: number): void;
					public writeInt(param0: number): void;
					public writeUleb128(value: number): number;
					public writeAnnotationsTo(out: java.io.Writer): void;
					public constructor(data: number[]);
					public writeSleb128(param0: number): number;
				}
				export module ByteArrayAnnotatedOutput {
					export class Annotation extends java.lang.Object {
						public static class: java.lang.Class<com.android.dx.util.ByteArrayAnnotatedOutput.Annotation>;
						public constructor(start: number, end: number, text: string);
						public constructor(start: number, text: string);
						public setEnd(end: number): void;
						public getStart(): number;
						public setEndIfUnset(end: number): void;
						public getText(): string;
						public getEnd(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class FixedSizeList extends com.android.dx.util.MutabilityControl implements com.android.dx.util.ToHuman {
					public static class: java.lang.Class<com.android.dx.util.FixedSizeList>;
					public shrinkToFit(): void;
					public equals(obj: any): boolean;
					public constructor(mutable: boolean);
					public equals(other: any): boolean;
					public set0(n: number, obj: any): void;
					public size(): number;
					public toHuman(prefix: string, separator: string, suffix: string): string;
					public toString(prefix: string, separator: string, suffix: string): string;
					public toString(): string;
					public toHuman(): string;
					public constructor();
					public get0(n: number): any;
					public getOrNull0(n: number): any;
					public constructor(size: number);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class Hex extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.util.Hex>;
					public static u2or4(v: number): string;
					public static s1(v: number): string;
					public static u4(v: number): string;
					public static u2(v: number): string;
					public static s8(v: number): string;
					public static uNibble(v: number): string;
					public static dump(arr: number[], offset: number, length: number, outOffset: number, bpl: number, addressLength: number): string;
					public static s2(v: number): string;
					public static u1(v: number): string;
					public static u8(v: number): string;
					public static s4(v: number): string;
					public static u3(v: number): string;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class HexParser extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.util.HexParser>;
					public static parse(src: string): number[];
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class IndentingWriter extends java.io.FilterWriter {
					public static class: java.lang.Class<com.android.dx.util.IndentingWriter>;
					public constructor(out: java.io.Writer);
					public write(c: number): void;
					public constructor(lock: any);
					public append(param0: string): java.lang.Appendable;
					public append(csq: string, start: number, end: number): java.io.Writer;
					public write(cbuf: string[]): void;
					public append(csq: string): java.io.Writer;
					public flush(): void;
					public write(str: string): void;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public constructor(out: java.io.Writer, width: number, prefix: string);
					public constructor();
					public close(): void;
					public constructor(out: java.io.Writer, width: number);
					public write(cbuf: string[], off: number, len: number): void;
					public write(str: string, off: number, len: number): void;
					public append(c: string): java.io.Writer;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class IntIterator extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.util.IntIterator>;
					/**
					 * Constructs a new instance of the com.android.dx.util.IntIterator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						hasNext(): boolean;
						next(): number;
					});
					public constructor();
					public next(): number;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class IntList extends com.android.dx.util.MutabilityControl {
					public static class: java.lang.Class<com.android.dx.util.IntList>;
					public static EMPTY: com.android.dx.util.IntList;
					public pop(n: number): void;
					public mutableCopy(): com.android.dx.util.IntList;
					public equals(obj: any): boolean;
					public constructor(mutable: boolean);
					public removeIndex(n: number): void;
					public add(value: number): void;
					public equals(other: any): boolean;
					public insert(n: number, value: number): void;
					public size(): number;
					public binarysearch(value: number): number;
					public contains(value: number): boolean;
					public top(): number;
					public static makeImmutable(value0: number, value1: number): com.android.dx.util.IntList;
					public set(n: number, value: number): void;
					public static makeImmutable(value: number): com.android.dx.util.IntList;
					public pop(): number;
					public toString(): string;
					public get(n: number): number;
					public indexOf(value: number): number;
					public constructor();
					public constructor(initialCapacity: number);
					public sort(): void;
					public shrink(newSize: number): void;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class IntSet extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.util.IntSet>;
					/**
					 * Constructs a new instance of the com.android.dx.util.IntSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						add(param0: number): void;
						remove(param0: number): void;
						has(param0: number): boolean;
						merge(param0: com.android.dx.util.IntSet): void;
						elements(): number;
						iterator(): com.android.dx.util.IntIterator;
					});
					public constructor();
					public iterator(): com.android.dx.util.IntIterator;
					public elements(): number;
					public add(param0: number): void;
					public has(param0: number): boolean;
					public merge(param0: com.android.dx.util.IntSet): void;
					public remove(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class LabeledItem extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.util.LabeledItem>;
					/**
					 * Constructs a new instance of the com.android.dx.util.LabeledItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getLabel(): number;
					});
					public constructor();
					public getLabel(): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class LabeledList extends com.android.dx.util.FixedSizeList {
					public static class: java.lang.Class<com.android.dx.util.LabeledList>;
					public constructor(old: com.android.dx.util.LabeledList);
					public shrinkToFit(): void;
					public indexOfLabel(label: number): number;
					public toHuman(): string;
					public constructor();
					public constructor(mutable: boolean);
					public set(n: number, item: com.android.dx.util.LabeledItem): void;
					public constructor(size: number);
					public getLabelsInOrder(): number[];
					public toHuman(prefix: string, separator: string, suffix: string): string;
					public getMaxLabel(): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class ListIntSet extends java.lang.Object implements com.android.dx.util.IntSet {
					public static class: java.lang.Class<com.android.dx.util.ListIntSet>;
					public toString(): string;
					public constructor();
					public iterator(): com.android.dx.util.IntIterator;
					public add(value: number): void;
					public remove(value: number): void;
					public merge(other: com.android.dx.util.IntSet): void;
					public elements(): number;
					public add(param0: number): void;
					public has(value: number): boolean;
					public has(param0: number): boolean;
					public merge(param0: com.android.dx.util.IntSet): void;
					public remove(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class MutabilityControl extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.util.MutabilityControl>;
					public constructor();
					public constructor(mutable: boolean);
					public throwIfMutable(): void;
					public setImmutable(): void;
					public isMutable(): boolean;
					public isImmutable(): boolean;
					public throwIfImmutable(): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class MutabilityException extends com.android.dex.util.ExceptionWithContext {
					public static class: java.lang.Class<com.android.dx.util.MutabilityException>;
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

declare module com {
	export module android {
		export module dx {
			export module util {
				export class Output extends java.lang.Object implements com.android.dex.util.ByteOutput {
					public static class: java.lang.Class<com.android.dx.util.Output>;
					/**
					 * Constructs a new instance of the com.android.dx.util.Output interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCursor(): number;
						assertCursor(param0: number): void;
						writeByte(param0: number): void;
						writeShort(param0: number): void;
						writeInt(param0: number): void;
						writeLong(param0: number): void;
						writeUleb128(param0: number): number;
						writeSleb128(param0: number): number;
						write(param0: com.android.dx.util.ByteArray): void;
						write(param0: number[], param1: number, param2: number): void;
						write(param0: number[]): void;
						writeZeroes(param0: number): void;
						alignTo(param0: number): void;
						writeByte(param0: number): void;
					});
					public constructor();
					public alignTo(param0: number): void;
					public writeShort(param0: number): void;
					public writeZeroes(param0: number): void;
					public write(param0: number[]): void;
					public write(param0: number[], param1: number, param2: number): void;
					public assertCursor(param0: number): void;
					public write(param0: com.android.dx.util.ByteArray): void;
					public writeByte(param0: number): void;
					public writeUleb128(param0: number): number;
					public writeInt(param0: number): void;
					public writeLong(param0: number): void;
					public getCursor(): number;
					public writeSleb128(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class ToHuman extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.util.ToHuman>;
					/**
					 * Constructs a new instance of the com.android.dx.util.ToHuman interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toHuman(): string;
					});
					public constructor();
					public toHuman(): string;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class TwoColumnOutput extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.util.TwoColumnOutput>;
					public getLeft(): java.io.Writer;
					public toString(): string;
					public constructor(out: java.io.Writer, leftWidth: number, rightWidth: number, spacer: string);
					public static toString(s1: string, width1: number, spacer: string, s2: string, width2: number): string;
					public constructor(out: java.io.OutputStream, leftWidth: number, rightWidth: number, spacer: string);
					public flush(): void;
					public getRight(): java.io.Writer;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module dx {
			export module util {
				export class Warning extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.android.dx.util.Warning>;
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

declare module com {
	export module android {
		export module dx {
			export module util {
				export class Writers extends java.lang.Object {
					public static class: java.lang.Class<com.android.dx.util.Writers>;
					public static printWriterFor(writer: java.io.Writer): java.io.PrintWriter;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module multidex {
			export class ArchivePathElement extends java.lang.Object implements com.android.multidex.ClassPathElement {
				public static class: java.lang.Class<com.android.multidex.ArchivePathElement>;
				public open(path: string): java.io.InputStream;
				public close(): void;
				public list(): java.lang.Iterable<string>;
				public constructor(archive: java.util.zip.ZipFile);
				public open(param0: string): java.io.InputStream;
			}
			export module ArchivePathElement {
				export class DirectoryEntryException extends java.io.IOException {
					public static class: java.lang.Class<com.android.multidex.ArchivePathElement.DirectoryEntryException>;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module multidex {
			export class ClassPathElement extends java.lang.Object {
				public static class: java.lang.Class<com.android.multidex.ClassPathElement>;
				/**
				 * Constructs a new instance of the com.android.multidex.ClassPathElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					open(param0: string): java.io.InputStream;
					close(): void;
					list(): java.lang.Iterable<string>;
				});
				public constructor();
				public static SEPARATOR_CHAR: string;
				public close(): void;
				public list(): java.lang.Iterable<string>;
				public open(param0: string): java.io.InputStream;
			}
		}
	}
}

declare module com {
	export module android {
		export module multidex {
			export class ClassReferenceListBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.android.multidex.ClassReferenceListBuilder>;
				/** @deprecated */
				public static main(args: string[]): void;
				public constructor(path: com.android.multidex.Path);
				public addRoots(jarOfRoots: java.util.zip.ZipFile): void;
			}
		}
	}
}

declare module com {
	export module android {
		export module multidex {
			export class FolderPathElement extends java.lang.Object implements com.android.multidex.ClassPathElement {
				public static class: java.lang.Class<com.android.multidex.FolderPathElement>;
				public constructor(baseFolder: java.io.File);
				public open(path: string): java.io.InputStream;
				public close(): void;
				public list(): java.lang.Iterable<string>;
				public open(param0: string): java.io.InputStream;
			}
		}
	}
}

declare module com {
	export module android {
		export module multidex {
			export class MainDexListBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.android.multidex.MainDexListBuilder>;
				public getMainDexList(): java.util.Set<string>;
				public constructor(keepAnnotated: boolean, rootJar: string, pathString: string);
				public static main(args: string[]): void;
			}
		}
	}
}

declare module com {
	export module android {
		export module multidex {
			export class Path extends java.lang.Object {
				public static class: java.lang.Class<com.android.multidex.Path>;
				public toString(): string;
			}
		}
	}
}

//Generics information:
//com.android.dx.dex.file.UniformListItem:1
//com.android.dx.merge.DexMerger.IdMerger:1

