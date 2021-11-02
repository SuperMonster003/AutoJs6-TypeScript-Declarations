/// <reference path="../android.d.ts" />

declare module okio {
	export class AsyncTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.AsyncTimeout>;
		public constructor();
		public enter(): void;
		public sink(param0: okio.Sink): okio.Sink;
		public timedOut(): void;
		public newTimeoutException(param0: java.io.IOException): java.io.IOException;
		public source(param0: okio.Source): okio.Source;
		public exit(): boolean;
	}
	export module AsyncTimeout {
		export class Watchdog extends java.lang.Thread {
			public static class: java.lang.Class<okio.AsyncTimeout.Watchdog>;
			public constructor(param0: java.lang.Runnable);
			public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string);
			public constructor(param0: java.lang.Runnable, param1: string);
			public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string, param3: number);
			public run(): void;
			public constructor();
			public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable);
			public constructor(param0: java.lang.ThreadGroup, param1: string);
			public constructor(param0: string);
		}
	}
}

declare module okio {
	export class Base64 extends java.lang.Object {
		public static class: java.lang.Class<okio.Base64>;
		public static encodeUrl(param0: number[]): string;
		public static decode(param0: string): number[];
		public static encode(param0: number[]): string;
	}
}

declare module okio {
	export class Buffer extends java.lang.Object implements okio.BufferedSource, okio.BufferedSink, java.lang.Cloneable {
		public static class: java.lang.Class<okio.Buffer>;
		public readIntLe(): number;
		public writeUtf8(param0: string): okio.Buffer;
		public writeDecimalLong(param0: number): okio.Buffer;
		public readFrom(param0: java.io.InputStream, param1: number): okio.Buffer;
		public writeUtf8(param0: string, param1: number, param2: number): okio.Buffer;
		public readUtf8(param0: number): string;
		public copyTo(param0: java.io.OutputStream): okio.Buffer;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public indexOf(param0: number): number;
		public readByte(): number;
		public emitCompleteSegments(): okio.BufferedSink;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public writeIntLe(param0: number): okio.BufferedSink;
		public copyTo(param0: okio.Buffer, param1: number, param2: number): okio.Buffer;
		public indexOfElement(param0: okio.ByteString): number;
		public write(param0: number[], param1: number, param2: number): okio.BufferedSink;
		public readAll(param0: okio.Sink): number;
		public readByteArray(param0: number): number[];
		public write(param0: okio.ByteString): okio.BufferedSink;
		public readFrom(param0: java.io.InputStream): okio.Buffer;
		public writeTo(param0: java.io.OutputStream): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public clear(): void;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public writeLongLe(param0: number): okio.Buffer;
		public writeLong(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.Buffer;
		public writeByte(param0: number): okio.BufferedSink;
		public readUtf8LineStrict(): string;
		public writeUtf8CodePoint(param0: number): okio.Buffer;
		public writeInt(param0: number): okio.BufferedSink;
		public write(param0: number[]): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public skip(param0: number): void;
		public getByte(param0: number): number;
		public readInt(): number;
		public read(param0: number[], param1: number, param2: number): number;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.Buffer;
		public copyTo(param0: java.io.OutputStream, param1: number, param2: number): okio.Buffer;
		public writeTo(param0: java.io.OutputStream, param1: number): okio.Buffer;
		public writeAll(param0: okio.Source): number;
		public readFully(param0: number[]): void;
		public timeout(): okio.Timeout;
		public equals(param0: any): boolean;
		public close(): void;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public inputStream(): java.io.InputStream;
		public write(param0: okio.ByteString): okio.Buffer;
		public writeHexadecimalUnsignedLong(param0: number): okio.Buffer;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public readUtf8CodePoint(): number;
		public writeShortLe(param0: number): okio.Buffer;
		public snapshot(param0: number): okio.ByteString;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public readHexadecimalUnsignedLong(): number;
		public emit(): okio.BufferedSink;
		public writeInt(param0: number): okio.Buffer;
		public constructor();
		public readUtf8(): string;
		public write(param0: okio.Buffer, param1: number): void;
		public readByteString(param0: number): okio.ByteString;
		public writeShort(param0: number): okio.Buffer;
		public completeSegmentByteCount(): number;
		public toString(): string;
		public read(param0: number[]): number;
		public flush(): void;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public readShort(): number;
		public readShortLe(): number;
		public readUtf8Line(): string;
		public write(param0: number[], param1: number, param2: number): okio.Buffer;
		public readByteString(): okio.ByteString;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeIntLe(param0: number): okio.Buffer;
		public clone(): any;
		public size(): number;
		public hashCode(): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public snapshot(): okio.ByteString;
		public write(param0: number[]): okio.Buffer;
		public clone(): okio.Buffer;
		public emitCompleteSegments(): okio.Buffer;
		public readDecimalLong(): number;
		public writeByte(param0: number): okio.Buffer;
		public readByteArray(): number[];
		public writeLong(param0: number): okio.Buffer;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public exhausted(): boolean;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public indexOf(param0: number, param1: number): number;
		public indexOf(param0: okio.ByteString): number;
	}
}

declare module okio {
	export class BufferedSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.BufferedSink>;
		/**
		 * Constructs a new instance of the okio.BufferedSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			write(param0: okio.ByteString): okio.BufferedSink;
			write(param0: number[]): okio.BufferedSink;
			write(param0: number[], param1: number, param2: number): okio.BufferedSink;
			writeAll(param0: okio.Source): number;
			write(param0: okio.Source, param1: number): okio.BufferedSink;
			writeUtf8(param0: string): okio.BufferedSink;
			writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
			writeUtf8CodePoint(param0: number): okio.BufferedSink;
			writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
			writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
			writeByte(param0: number): okio.BufferedSink;
			writeShort(param0: number): okio.BufferedSink;
			writeShortLe(param0: number): okio.BufferedSink;
			writeInt(param0: number): okio.BufferedSink;
			writeIntLe(param0: number): okio.BufferedSink;
			writeLong(param0: number): okio.BufferedSink;
			writeLongLe(param0: number): okio.BufferedSink;
			writeDecimalLong(param0: number): okio.BufferedSink;
			writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
			emitCompleteSegments(): okio.BufferedSink;
			emit(): okio.BufferedSink;
			outputStream(): java.io.OutputStream;
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
			close(): void;
			flush(): void;
			close(): void;
		});
		public constructor();
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public write(param0: number[]): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeIntLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: number[], param1: number, param2: number): okio.BufferedSink;
		public flush(): void;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class BufferedSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.BufferedSource>;
		/**
		 * Constructs a new instance of the okio.BufferedSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			exhausted(): boolean;
			require(param0: number): void;
			request(param0: number): boolean;
			readByte(): number;
			readShort(): number;
			readShortLe(): number;
			readInt(): number;
			readIntLe(): number;
			readLong(): number;
			readLongLe(): number;
			readDecimalLong(): number;
			readHexadecimalUnsignedLong(): number;
			skip(param0: number): void;
			readByteString(): okio.ByteString;
			readByteString(param0: number): okio.ByteString;
			readByteArray(): number[];
			readByteArray(param0: number): number[];
			read(param0: number[]): number;
			readFully(param0: number[]): void;
			read(param0: number[], param1: number, param2: number): number;
			readFully(param0: okio.Buffer, param1: number): void;
			readAll(param0: okio.Sink): number;
			readUtf8(): string;
			readUtf8(param0: number): string;
			readUtf8Line(): string;
			readUtf8LineStrict(): string;
			readUtf8CodePoint(): number;
			readString(param0: java.nio.charset.Charset): string;
			readString(param0: number, param1: java.nio.charset.Charset): string;
			indexOf(param0: number): number;
			indexOf(param0: number, param1: number): number;
			indexOf(param0: okio.ByteString): number;
			indexOf(param0: okio.ByteString, param1: number): number;
			indexOfElement(param0: okio.ByteString): number;
			indexOfElement(param0: okio.ByteString, param1: number): number;
			inputStream(): java.io.InputStream;
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
			close(): void;
			close(): void;
		});
		public constructor();
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readIntLe(): number;
		public readByteString(): okio.ByteString;
		public readUtf8LineStrict(): string;
		public readUtf8(param0: number): string;
		public readUtf8CodePoint(): number;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public readUtf8(): string;
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public read(param0: number[]): number;
		public readAll(param0: okio.Sink): number;
		public readInt(): number;
		public readByteArray(param0: number): number[];
		public read(param0: number[], param1: number, param2: number): number;
		public readByteArray(): number[];
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public exhausted(): boolean;
		public readShort(): number;
		public buffer(): okio.Buffer;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public readShortLe(): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: number[]): void;
		public readUtf8Line(): string;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ByteString extends java.lang.Object {
		public static class: java.lang.Class<okio.ByteString>;
		public static EMPTY: okio.ByteString;
		public static of(param0: number[]): okio.ByteString;
		public base64(): string;
		public substring(param0: number): okio.ByteString;
		public equals(param0: any): boolean;
		public base64Url(): string;
		public static read(param0: java.io.InputStream, param1: number): okio.ByteString;
		public size(): number;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public static decodeBase64(param0: string): okio.ByteString;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public static decodeHex(param0: string): okio.ByteString;
		public compareTo(param0: okio.ByteString): number;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public toString(): string;
		public static encodeUtf8(param0: string): okio.ByteString;
		public md5(): okio.ByteString;
		public toAsciiLowercase(): okio.ByteString;
		public write(param0: java.io.OutputStream): void;
		public static of(param0: number[], param1: number, param2: number): okio.ByteString;
		public rangeEquals(param0: number, param1: number[], param2: number, param3: number): boolean;
		public utf8(): string;
		public substring(param0: number, param1: number): okio.ByteString;
		public toByteArray(): number[];
	}
}

declare module okio {
	export class DeflaterSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.DeflaterSink>;
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public constructor(param0: okio.Sink, param1: java.util.zip.Deflater);
		public toString(): string;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export abstract class ForwardingSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.ForwardingSink>;
		public delegate(): okio.Sink;
		public close(): void;
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public toString(): string;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export abstract class ForwardingSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.ForwardingSource>;
		public close(): void;
		public constructor(param0: okio.Source);
		public delegate(): okio.Source;
		public toString(): string;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ForwardingTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.ForwardingTimeout>;
		public constructor();
		public throwIfReached(): void;
		public setDelegate(param0: okio.Timeout): okio.ForwardingTimeout;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public delegate(): okio.Timeout;
		public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public timeoutNanos(): number;
		public deadlineNanoTime(): number;
		public deadlineNanoTime(param0: number): okio.Timeout;
		public constructor(param0: okio.Timeout);
		public clearTimeout(): okio.Timeout;
	}
}

declare module okio {
	export class GzipSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.GzipSink>;
		public close(): void;
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class GzipSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.GzipSource>;
		public close(): void;
		public constructor(param0: okio.Source);
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class InflaterSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.InflaterSource>;
		public close(): void;
		public refill(): boolean;
		public constructor(param0: okio.Source, param1: java.util.zip.Inflater);
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Okio extends java.lang.Object {
		public static class: java.lang.Class<okio.Okio>;
		public static buffer(param0: okio.Source): okio.BufferedSource;
		public static source(param0: java.io.InputStream): okio.Source;
		public static appendingSink(param0: java.io.File): okio.Sink;
		public static sink(param0: java.io.OutputStream): okio.Sink;
		public static source(param0: java.io.File): okio.Source;
		public static sink(param0: java.io.File): okio.Sink;
		public static source(param0: java.net.Socket): okio.Source;
		public static sink(param0: java.nio.file.Path, param1: Array<java.nio.file.OpenOption>): okio.Sink;
		public static buffer(param0: okio.Sink): okio.BufferedSink;
		public static sink(param0: java.net.Socket): okio.Sink;
		public static source(param0: java.nio.file.Path, param1: Array<java.nio.file.OpenOption>): okio.Source;
	}
}

declare module okio {
	export class RealBufferedSink extends java.lang.Object implements okio.BufferedSink {
		public static class: java.lang.Class<okio.RealBufferedSink>;
		public sink: okio.Sink;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public write(param0: number[]): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeIntLe(param0: number): okio.BufferedSink;
		public constructor(param0: okio.Sink, param1: okio.Buffer);
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: number[], param1: number, param2: number): okio.BufferedSink;
		public toString(): string;
		public flush(): void;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class RealBufferedSource extends java.lang.Object implements okio.BufferedSource {
		public static class: java.lang.Class<okio.RealBufferedSource>;
		public source: okio.Source;
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readByteString(): okio.ByteString;
		public readIntLe(): number;
		public readUtf8LineStrict(): string;
		public readUtf8(param0: number): string;
		public readUtf8CodePoint(): number;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public read(param0: okio.Buffer, param1: number): number;
		public readLong(): number;
		public readUtf8(): string;
		public constructor(param0: okio.Source);
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public toString(): string;
		public read(param0: number[]): number;
		public readAll(param0: okio.Sink): number;
		public readInt(): number;
		public readByteArray(param0: number): number[];
		public read(param0: number[], param1: number, param2: number): number;
		public readByteArray(): number[];
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public exhausted(): boolean;
		public readShort(): number;
		public buffer(): okio.Buffer;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public constructor(param0: okio.Source, param1: okio.Buffer);
		public readString(param0: java.nio.charset.Charset): string;
		public readShortLe(): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: number[]): void;
		public readUtf8Line(): string;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Segment extends java.lang.Object {
		public static class: java.lang.Class<okio.Segment>;
		public push(param0: okio.Segment): okio.Segment;
		public writeTo(param0: okio.Segment, param1: number): void;
		public compact(): void;
		public pop(): okio.Segment;
		public split(param0: number): okio.Segment;
	}
}

declare module okio {
	export class SegmentPool extends java.lang.Object {
		public static class: java.lang.Class<okio.SegmentPool>;
	}
}

declare module okio {
	export class SegmentedByteString extends okio.ByteString {
		public static class: java.lang.Class<okio.SegmentedByteString>;
		public base64(): string;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public substring(param0: number): okio.ByteString;
		public equals(param0: any): boolean;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public toString(): string;
		public md5(): okio.ByteString;
		public base64Url(): string;
		public toAsciiLowercase(): okio.ByteString;
		public size(): number;
		public write(param0: java.io.OutputStream): void;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public rangeEquals(param0: number, param1: number[], param2: number, param3: number): boolean;
		public utf8(): string;
		public substring(param0: number, param1: number): okio.ByteString;
		public toByteArray(): number[];
	}
}

declare module okio {
	export class Sink extends java.lang.Object implements java.io.Closeable, java.io.Flushable {
		public static class: java.lang.Class<okio.Sink>;
		/**
		 * Constructs a new instance of the okio.Sink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
			close(): void;
			flush(): void;
			close(): void;
		});
		public constructor();
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Source extends java.lang.Object implements java.io.Closeable {
		public static class: java.lang.Class<okio.Source>;
		/**
		 * Constructs a new instance of the okio.Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
			close(): void;
			close(): void;
		});
		public constructor();
		public close(): void;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Timeout extends java.lang.Object {
		public static class: java.lang.Class<okio.Timeout>;
		public static NONE: okio.Timeout;
		public constructor();
		public throwIfReached(): void;
		public deadline(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public timeoutNanos(): number;
		public deadlineNanoTime(): number;
		public deadlineNanoTime(param0: number): okio.Timeout;
		public clearTimeout(): okio.Timeout;
	}
}

declare module okio {
	export class Util extends java.lang.Object {
		public static class: java.lang.Class<okio.Util>;
		public static UTF_8: java.nio.charset.Charset;
		public static reverseBytesShort(param0: number): number;
		public static reverseBytesLong(param0: number): number;
		public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
		public static reverseBytesInt(param0: number): number;
		public static sneakyRethrow(param0: java.lang.Throwable): void;
		public static arrayRangeEquals(param0: number[], param1: number, param2: number[], param3: number, param4: number): boolean;
	}
}