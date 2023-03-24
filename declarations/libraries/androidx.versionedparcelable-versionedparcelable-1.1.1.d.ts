declare module androidx {
	export module versionedparcelable {
		export abstract class CustomVersionedParcelable extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
			public static class: java.lang.Class<androidx.versionedparcelable.CustomVersionedParcelable>;
			public onPostParceling(): void;
			public constructor();
			public onPreParceling(isStream: boolean): void;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class NonParcelField extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.versionedparcelable.NonParcelField>;
			/**
			 * Constructs a new instance of the androidx.versionedparcelable.NonParcelField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class ParcelField extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.versionedparcelable.ParcelField>;
			/**
			 * Constructs a new instance of the androidx.versionedparcelable.ParcelField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): number;
				defaultValue(): string;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public defaultValue(): string;
			public value(): number;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class ParcelImpl extends java.lang.Object implements android.os.Parcelable {
			public static class: java.lang.Class<androidx.versionedparcelable.ParcelImpl>;
			public static CREATOR: android.os.Parcelable.Creator<androidx.versionedparcelable.ParcelImpl>;
			public constructor(parcel: androidx.versionedparcelable.VersionedParcelable);
			public writeToParcel(dest: android.os.Parcel, flags: number): void;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public getVersionedParcel(): androidx.versionedparcelable.VersionedParcelable;
			public constructor(in: android.os.Parcel);
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class ParcelUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.versionedparcelable.ParcelUtils>;
			public static fromInputStream(input: java.io.InputStream): androidx.versionedparcelable.VersionedParcelable;
			public static toParcelable(obj: androidx.versionedparcelable.VersionedParcelable): android.os.Parcelable;
			public static fromParcelable(p: android.os.Parcelable): androidx.versionedparcelable.VersionedParcelable;
			public static getVersionedParcelableList(bundle: android.os.Bundle, key: string): java.util.List<any>;
			public static toOutputStream(obj: androidx.versionedparcelable.VersionedParcelable, output: java.io.OutputStream): void;
			public static putVersionedParcelable(b: android.os.Bundle, key: string, obj: androidx.versionedparcelable.VersionedParcelable): void;
			public static putVersionedParcelableList(b: android.os.Bundle, key: string, list: java.util.List<any>): void;
			public static getVersionedParcelable(bundle: android.os.Bundle, key: string): androidx.versionedparcelable.VersionedParcelable;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export abstract class VersionedParcel extends java.lang.Object {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcel>;
			public mReadCache: androidx.collection.ArrayMap<string,java.lang.reflect.Method>;
			public mWriteCache: androidx.collection.ArrayMap<string,java.lang.reflect.Method>;
			public mParcelizerCache: androidx.collection.ArrayMap<string,java.lang.Class<any>>;
			public writeMap(val: java.util.Map<any,any>, fieldId: number): void;
			public readSize(def: any, fieldId: number): any;
			public readString(): string;
			public readParcelable(): android.os.Parcelable;
			public writeStrongBinder(val: android.os.IBinder, fieldId: number): void;
			public readByteArray(): number[];
			public writeBoolean(val: boolean, fieldId: number): void;
			public readCharSequence(): string;
			public writeFloatArray(val: number[]): void;
			public readVersionedParcelable(def: androidx.versionedparcelable.VersionedParcelable, fieldId: number): androidx.versionedparcelable.VersionedParcelable;
			public writeFloat(param0: number): void;
			public writeCharArray(val: string[], fieldId: number): void;
			public readByte(def: number, fieldId: number): number;
			public isStream(): boolean;
			public readDouble(def: number, param1: number): number;
			public writeLongArray(val: number[]): void;
			public readInt(): number;
			public readFloat(): number;
			public readFromParcel(parcelCls: string, versionedParcel: androidx.versionedparcelable.VersionedParcel): androidx.versionedparcelable.VersionedParcelable;
			public writeInt(val: number, fieldId: number): void;
			public writeLong(param0: number): void;
			public readBooleanArray(): boolean[];
			public writeArray(val: any[], fieldId: number): void;
			public writeVersionedParcelable(p: androidx.versionedparcelable.VersionedParcelable): void;
			public writeStrongInterface(param0: android.os.IInterface): void;
			public readBoolean(): boolean;
			public readSet(def: java.util.Set<any>, fieldId: number): java.util.Set<any>;
			public writeParcelable(p: android.os.Parcelable, fieldId: number): void;
			public writeIntArray(val: number[], fieldId: number): void;
			public writeFloat(val: number, fieldId: number): void;
			public readDoubleArray(def: number[], fieldId: number): number[];
			public writeByteArray(b: number[], offset: number, len: number, fieldId: number): void;
			public writeByteArray(param0: number[], param1: number, param2: number): void;
			public readMap(def: java.util.Map<any,any>, fieldId: number): java.util.Map<any,any>;
			public readField(param0: number): boolean;
			public readVersionedParcelable(): androidx.versionedparcelable.VersionedParcelable;
			public readSerializable(): java.io.Serializable;
			public readLongArray(): number[];
			public readLong(def: number, param1: number): number;
			public constructor(readCache: androidx.collection.ArrayMap<string,java.lang.reflect.Method>, writeCache: androidx.collection.ArrayMap<string,java.lang.reflect.Method>, parcelizerCache: androidx.collection.ArrayMap<string,java.lang.Class<any>>);
			public writeByteArray(param0: number[]): void;
			public writeByteArray(b: number[], fieldId: number): void;
			public writeByte(val: number, fieldId: number): void;
			public readLongArray(def: number[], fieldId: number): number[];
			public readCharSequence(def: string, fieldId: number): string;
			public writeArray(val: any[]): void;
			public readStrongBinder(): android.os.IBinder;
			public setSerializationFlags(allowSerialization: boolean, ignoreParcelables: boolean): void;
			public setOutputField(param0: number): void;
			public writeDoubleArray(val: number[]): void;
			public writeToParcel(val: androidx.versionedparcelable.VersionedParcelable, versionedParcel: androidx.versionedparcelable.VersionedParcel): void;
			public writeException(e: java.lang.Exception, fieldId: number): void;
			public readStrongBinder(def: android.os.IBinder, fieldId: number): android.os.IBinder;
			public readArray(def: any[]): any[];
			public readException(def: java.lang.Exception, fieldId: number): java.lang.Exception;
			public readFloatArray(def: number[], fieldId: number): number[];
			public readDoubleArray(): number[];
			public writeBundle(param0: android.os.Bundle): void;
			public writeIntArray(val: number[]): void;
			public readFloat(def: number, fieldId: number): number;
			public readInt(def: number, fieldId: number): number;
			public writeSet(val: java.util.Set<any>, fieldId: number): void;
			public writeString(val: string, fieldId: number): void;
			public closeField(): void;
			public readBundle(): android.os.Bundle;
			public readIntArray(def: number[], fieldId: number): number[];
			public writeStrongBinder(param0: android.os.IBinder): void;
			public writeBooleanArray(val: boolean[]): void;
			public writeVersionedParcelable(p: androidx.versionedparcelable.VersionedParcelable, fieldId: number): void;
			public readString(def: string, fieldId: number): string;
			public readBooleanArray(def: boolean[], fieldId: number): boolean[];
			public writeList(val: java.util.List<any>, fieldId: number): void;
			public createSubParcel(): androidx.versionedparcelable.VersionedParcel;
			public readBundle(def: android.os.Bundle, fieldId: number): android.os.Bundle;
			public readCharArray(def: string[], fieldId: number): string[];
			public writeBoolean(param0: boolean): void;
			public writeSize(val: any, fieldId: number): void;
			public static getRootCause(t: java.lang.Throwable): java.lang.Throwable;
			public readArray(def: any[], fieldId: number): any[];
			public writeParcelable(param0: android.os.Parcelable): void;
			public writeLong(val: number, param1: number): void;
			public readList(def: java.util.List<any>, fieldId: number): java.util.List<any>;
			public writeBundle(val: android.os.Bundle, fieldId: number): void;
			public readParcelable(def: android.os.Parcelable, fieldId: number): android.os.Parcelable;
			public writeCharSequence(param0: string): void;
			public writeSerializable(s: java.io.Serializable, fieldId: number): void;
			public readSizeF(def: any, fieldId: number): any;
			public writeString(param0: string): void;
			public readDouble(): number;
			public writeDouble(val: number, param1: number): void;
			public readSparseBooleanArray(def: android.util.SparseBooleanArray, fieldId: number): android.util.SparseBooleanArray;
			public writeBooleanArray(val: boolean[], fieldId: number): void;
			public readBoolean(def: boolean, fieldId: number): boolean;
			public readFloatArray(): number[];
			public writeNoException(): void;
			public readByteArray(def: number[], fieldId: number): number[];
			public writeLongArray(val: number[], fieldId: number): void;
			public writeInt(param0: number): void;
			public readLong(): number;
			public writeFloatArray(val: number[], fieldId: number): void;
			public writeDouble(param0: number): void;
			public writeSizeF(val: any, fieldId: number): void;
			public writeCharSequence(val: string, fieldId: number): void;
			public writeSparseBooleanArray(val: android.util.SparseBooleanArray, fieldId: number): void;
			public writeStrongInterface(val: android.os.IInterface, fieldId: number): void;
			public readIntArray(): number[];
			public writeDoubleArray(val: number[], fieldId: number): void;
		}
		export module VersionedParcel {
			export class ParcelException extends java.lang.RuntimeException {
				public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcel.ParcelException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(source: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class VersionedParcelParcel extends androidx.versionedparcelable.VersionedParcel {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelParcel>;
			public writeString(val: string): void;
			public writeParcelable(p: android.os.Parcelable): void;
			public writeFloat(val: number): void;
			public writeString(val: string, fieldId: number): void;
			public closeField(): void;
			public readString(): string;
			public readParcelable(): android.os.Parcelable;
			public readBundle(): android.os.Bundle;
			public writeStrongBinder(val: android.os.IBinder, fieldId: number): void;
			public readByteArray(): number[];
			public writeBoolean(val: boolean, fieldId: number): void;
			public readCharSequence(): string;
			public writeBundle(val: android.os.Bundle): void;
			public writeFloat(param0: number): void;
			public writeStrongBinder(param0: android.os.IBinder): void;
			public setOutputField(fieldId: number): void;
			public writeDouble(val: number): void;
			public readDouble(def: number, param1: number): number;
			public readInt(): number;
			public readFloat(): number;
			public readString(def: string, fieldId: number): string;
			public createSubParcel(): androidx.versionedparcelable.VersionedParcel;
			public writeInt(val: number, fieldId: number): void;
			public writeLong(param0: number): void;
			public readBundle(def: android.os.Bundle, fieldId: number): android.os.Bundle;
			public writeBoolean(param0: boolean): void;
			public writeStrongInterface(param0: android.os.IInterface): void;
			public readBoolean(): boolean;
			public writeParcelable(p: android.os.Parcelable, fieldId: number): void;
			public writeFloat(val: number, fieldId: number): void;
			public writeParcelable(param0: android.os.Parcelable): void;
			public writeByteArray(b: number[], offset: number, len: number, fieldId: number): void;
			public writeStrongInterface(val: android.os.IInterface): void;
			public writeByteArray(param0: number[], param1: number, param2: number): void;
			public writeLong(val: number, param1: number): void;
			public writeBundle(val: android.os.Bundle, fieldId: number): void;
			public readParcelable(def: android.os.Parcelable, fieldId: number): android.os.Parcelable;
			public writeBoolean(val: boolean): void;
			public writeInt(val: number): void;
			public readField(param0: number): boolean;
			public writeByteArray(b: number[]): void;
			public writeCharSequence(param0: string): void;
			public writeStrongBinder(val: android.os.IBinder): void;
			public readField(fieldId: number): boolean;
			public readLong(def: number, param1: number): number;
			public writeByteArray(param0: number[]): void;
			public writeString(param0: string): void;
			public writeDouble(val: number, param1: number): void;
			public readDouble(): number;
			public writeByteArray(b: number[], fieldId: number): void;
			public readBoolean(def: boolean, fieldId: number): boolean;
			public readCharSequence(def: string, fieldId: number): string;
			public readStrongBinder(): android.os.IBinder;
			public setOutputField(param0: number): void;
			public writeLong(val: number): void;
			public readByteArray(def: number[], fieldId: number): number[];
			public writeInt(param0: number): void;
			public writeCharSequence(charSequence: string): void;
			public readLong(): number;
			public writeDouble(param0: number): void;
			public readStrongBinder(def: android.os.IBinder, fieldId: number): android.os.IBinder;
			public writeByteArray(b: number[], offset: number, len: number): void;
			public writeBundle(param0: android.os.Bundle): void;
			public writeCharSequence(val: string, fieldId: number): void;
			public readFloat(def: number, fieldId: number): number;
			public readInt(def: number, fieldId: number): number;
			public writeStrongInterface(val: android.os.IInterface, fieldId: number): void;
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class VersionedParcelStream extends androidx.versionedparcelable.VersionedParcel {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelStream>;
			public writeString(val: string): void;
			public writeParcelable(p: android.os.Parcelable): void;
			public writeFloat(val: number): void;
			public writeString(val: string, fieldId: number): void;
			public closeField(): void;
			public readParcelable(): android.os.Parcelable;
			public readString(): string;
			public readBundle(): android.os.Bundle;
			public writeStrongBinder(val: android.os.IBinder, fieldId: number): void;
			public readByteArray(): number[];
			public constructor(input: java.io.InputStream, output: java.io.OutputStream);
			public writeBoolean(val: boolean, fieldId: number): void;
			public readCharSequence(): string;
			public writeBundle(val: android.os.Bundle): void;
			public writeFloat(param0: number): void;
			public isStream(): boolean;
			public writeStrongBinder(param0: android.os.IBinder): void;
			public setOutputField(fieldId: number): void;
			public writeDouble(val: number): void;
			public readDouble(def: number, param1: number): number;
			public readInt(): number;
			public readFloat(): number;
			public readString(def: string, fieldId: number): string;
			public createSubParcel(): androidx.versionedparcelable.VersionedParcel;
			public writeInt(val: number, fieldId: number): void;
			public writeLong(param0: number): void;
			public readBundle(def: android.os.Bundle, fieldId: number): android.os.Bundle;
			public writeBoolean(param0: boolean): void;
			public writeStrongInterface(param0: android.os.IInterface): void;
			public readBoolean(): boolean;
			public writeParcelable(p: android.os.Parcelable, fieldId: number): void;
			public writeFloat(val: number, fieldId: number): void;
			public writeParcelable(param0: android.os.Parcelable): void;
			public writeByteArray(b: number[], offset: number, len: number, fieldId: number): void;
			public writeStrongInterface(val: android.os.IInterface): void;
			public writeByteArray(param0: number[], param1: number, param2: number): void;
			public writeLong(val: number, param1: number): void;
			public writeBundle(val: android.os.Bundle, fieldId: number): void;
			public readParcelable(def: android.os.Parcelable, fieldId: number): android.os.Parcelable;
			public writeBoolean(val: boolean): void;
			public writeInt(val: number): void;
			public readField(param0: number): boolean;
			public writeByteArray(b: number[]): void;
			public writeCharSequence(param0: string): void;
			public writeStrongBinder(val: android.os.IBinder): void;
			public readField(fieldId: number): boolean;
			public readLong(def: number, param1: number): number;
			public constructor(readCache: androidx.collection.ArrayMap<string,java.lang.reflect.Method>, writeCache: androidx.collection.ArrayMap<string,java.lang.reflect.Method>, parcelizerCache: androidx.collection.ArrayMap<string,java.lang.Class<any>>);
			public writeByteArray(param0: number[]): void;
			public writeString(param0: string): void;
			public writeDouble(val: number, param1: number): void;
			public readDouble(): number;
			public writeByteArray(b: number[], fieldId: number): void;
			public readBoolean(def: boolean, fieldId: number): boolean;
			public readCharSequence(def: string, fieldId: number): string;
			public readStrongBinder(): android.os.IBinder;
			public setSerializationFlags(allowSerialization: boolean, ignoreParcelables: boolean): void;
			public setOutputField(param0: number): void;
			public writeLong(val: number): void;
			public readByteArray(def: number[], fieldId: number): number[];
			public writeInt(param0: number): void;
			public writeCharSequence(charSequence: string): void;
			public readLong(): number;
			public writeDouble(param0: number): void;
			public readStrongBinder(def: android.os.IBinder, fieldId: number): android.os.IBinder;
			public writeByteArray(b: number[], offset: number, len: number): void;
			public writeCharSequence(val: string, fieldId: number): void;
			public writeBundle(param0: android.os.Bundle): void;
			public readFloat(def: number, fieldId: number): number;
			public readInt(def: number, fieldId: number): number;
			public writeStrongInterface(val: android.os.IInterface, fieldId: number): void;
		}
		export module VersionedParcelStream {
			export class FieldBuffer extends java.lang.Object {
				public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelStream.FieldBuffer>;
			}
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class VersionedParcelable extends java.lang.Object {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelable>;
			/**
			 * Constructs a new instance of the androidx.versionedparcelable.VersionedParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module androidx {
	export module versionedparcelable {
		export class VersionedParcelize extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.versionedparcelable.VersionedParcelize>;
			/**
			 * Constructs a new instance of the androidx.versionedparcelable.VersionedParcelize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				allowSerialization(): boolean;
				ignoreParcelables(): boolean;
				isCustom(): boolean;
				deprecatedIds(): number[];
				jetifyAs(): string;
				factory(): java.lang.Class<any>;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public jetifyAs(): string;
			public equals(param0: any): boolean;
			public ignoreParcelables(): boolean;
			public isCustom(): boolean;
			public factory(): java.lang.Class<any>;
			public toString(): string;
			public equals(obj: any): boolean;
			public allowSerialization(): boolean;
			public deprecatedIds(): number[];
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

//Generics information:

