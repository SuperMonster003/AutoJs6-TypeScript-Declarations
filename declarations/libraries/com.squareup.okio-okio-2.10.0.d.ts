declare module okio {
	export class -Base64 extends java.lang.Object {
		public static class: java.lang.Class<okio.-Base64>;
		public static decodeBase64ToArray($this$decodeBase64ToArray: string): number[];
		public static encodeBase64($this$encodeBase64: number[], map: number[]): string;
		public static getBASE64_URL_SAFE(): number[];
		public static getBASE64(): number[];
	}
}

declare module okio {
	export class -DeflaterSinkExtensions extends java.lang.Object {
		public static class: java.lang.Class<okio.-DeflaterSinkExtensions>;
		public static deflate($this$deflate: okio.Sink, deflater: java.util.zip.Deflater): okio.DeflaterSink;
	}
}

declare module okio {
	export class -DeprecatedOkio extends java.lang.Object {
		public static class: java.lang.Class<okio.-DeprecatedOkio>;
		public static INSTANCE: okio.-DeprecatedOkio;
		/** @deprecated */
		public source(socket: java.net.Socket): okio.Source;
		/** @deprecated */
		public sink(path: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): okio.Sink;
		/** @deprecated */
		public sink(socket: java.net.Socket): okio.Sink;
		/** @deprecated */
		public buffer(sink: okio.Sink): okio.BufferedSink;
		/** @deprecated */
		public sink(file: java.io.File): okio.Sink;
		/** @deprecated */
		public appendingSink(file: java.io.File): okio.Sink;
		/** @deprecated */
		public source(inputStream: java.io.InputStream): okio.Source;
		/** @deprecated */
		public source(path: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): okio.Source;
		/** @deprecated */
		public sink(outputStream: java.io.OutputStream): okio.Sink;
		/** @deprecated */
		public blackhole(): okio.Sink;
		/** @deprecated */
		public buffer(source: okio.Source): okio.BufferedSource;
		/** @deprecated */
		public source(file: java.io.File): okio.Source;
	}
}

declare module okio {
	export class -DeprecatedUpgrade extends java.lang.Object {
		public static class: java.lang.Class<okio.-DeprecatedUpgrade>;
		public static getOkio(): okio.-DeprecatedOkio;
		public static getUtf8(): okio.-DeprecatedUtf8;
	}
}

declare module okio {
	export class -DeprecatedUtf8 extends java.lang.Object {
		public static class: java.lang.Class<okio.-DeprecatedUtf8>;
		public static INSTANCE: okio.-DeprecatedUtf8;
		/** @deprecated */
		public size(string: string): number;
		/** @deprecated */
		public size(string: string, beginIndex: number, endIndex: number): number;
	}
}

declare module okio {
	export class -GzipSinkExtensions extends java.lang.Object {
		public static class: java.lang.Class<okio.-GzipSinkExtensions>;
		public static gzip($this$gzip: okio.Sink): okio.GzipSink;
	}
}

declare module okio {
	export class -GzipSourceExtensions extends java.lang.Object {
		public static class: java.lang.Class<okio.-GzipSourceExtensions>;
		public static gzip($this$gzip: okio.Source): okio.GzipSource;
	}
}

declare module okio {
	export class -InflaterSourceExtensions extends java.lang.Object {
		public static class: java.lang.Class<okio.-InflaterSourceExtensions>;
		public static inflate($this$inflate: okio.Source, inflater: java.util.zip.Inflater): okio.InflaterSource;
	}
}

declare module okio {
	export class -Platform extends java.lang.Object {
		public static class: java.lang.Class<okio.-Platform>;
		public static asUtf8ToByteArray($this$asUtf8ToByteArray: string): number[];
		public static toUtf8String($this$toUtf8String: number[]): string;
		public static synchronized(lock: any, block: kotlin.jvm.functions.Function0): any;
	}
}

declare module okio {
	export class -Util extends java.lang.Object {
		public static class: java.lang.Class<okio.-Util>;
		public static reverseBytes($this$reverseBytes: number): number;
		public static arrayRangeEquals(a: number[], aOffset: number, b: number[], bOffset: number, byteCount: number): boolean;
		public static xor($this$xor: number, other: number): number;
		public static minOf(a: number, param1: number): number;
		public static leftRotate($this$leftRotate: number, bitCount: number): number;
		public static rightRotate($this$rightRotate: number, param1: number): number;
		public static shl($this$shl: number, other: number): number;
		public static shr($this$shr: number, other: number): number;
		public static and($this$and: number, other: number): number;
		public static minOf(a: number, b: number): number;
		public static checkOffsetAndCount(size: number, param1: number, offset: number): void;
		public static toHexString($this$toHexString: number): string;
	}
}

declare module okio {
	export class AsyncTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.AsyncTimeout>;
		public enter(): void;
		public constructor();
		public access$newTimeoutException(cause: java.io.IOException): java.io.IOException;
		public sink(sink: okio.Sink): okio.Sink;
		public withTimeout(block: kotlin.jvm.functions.Function0): any;
		public newTimeoutException(cause: java.io.IOException): java.io.IOException;
		public timedOut(): void;
		public source(source: okio.Source): okio.Source;
		public exit(): boolean;
	}
	export module AsyncTimeout {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.AsyncTimeout.Companion>;
			public awaitTimeout$okio(): okio.AsyncTimeout;
		}
		export class Watchdog extends java.lang.Thread {
			public static class: java.lang.Class<okio.AsyncTimeout.Watchdog>;
			public constructor(group: java.lang.ThreadGroup, name: string);
			public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string, stackSize: number);
			public constructor(name: string);
			public constructor(target: java.lang.Runnable);
			public run(): void;
			public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable);
			public constructor();
			public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string);
			public constructor(target: java.lang.Runnable, name: string);
		}
	}
}

declare module okio {
	export class BlackholeSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.BlackholeSink>;
		public constructor();
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Buffer extends java.lang.Object implements okio.BufferedSource, okio.BufferedSink, java.lang.Cloneable, java.nio.channels.ByteChannel {
		public static class: java.lang.Class<okio.Buffer>;
		public head: okio.Segment;
		public require(byteCount: number): void;
		public readUtf8(byteCount: number): string;
		public rangeEquals(offset: number, param1: okio.ByteString, bytes: number, bytesOffset: number): boolean;
		public write(source: number[], offset: number, byteCount: number): okio.Buffer;
		public readIntLe(): number;
		public writeString(string: string, beginIndex: number, endIndex: number, charset: java.nio.charset.Charset): okio.Buffer;
		public write(source: okio.Source, byteCount: number): okio.Buffer;
		public readUtf8(param0: number): string;
		public writeHexadecimalUnsignedLong(v: number): okio.Buffer;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public request(byteCount: number): boolean;
		public copyTo(out: java.io.OutputStream, offset: number, param2: number): okio.Buffer;
		public writeTo(out: java.io.OutputStream, byteCount: number): okio.Buffer;
		public readFully(sink: number[]): void;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public write(source: number[]): okio.Buffer;
		public copy(): okio.Buffer;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readByteArray(): number[];
		public readUnsafe(unsafeCursor: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
		public emitCompleteSegments(): okio.BufferedSink;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public writeIntLe(param0: number): okio.BufferedSink;
		public setSize$okio(<set-?>: number): void;
		public indexOfElement(param0: okio.ByteString): number;
		public write(param0: java.nio.ByteBuffer): number;
		public writeTo(out: java.io.OutputStream): okio.Buffer;
		public indexOfElement(targetBytes: okio.ByteString, fromIndex: number): number;
		public readAll(param0: okio.Sink): number;
		public getByte(pos: number): number;
		public write(source: okio.Buffer, byteCount: number): void;
		public read(sink: java.nio.ByteBuffer): number;
		public writeUtf8(string: string, beginIndex: number, endIndex: number): okio.Buffer;
		public sha1(): okio.ByteString;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public readString(charset: java.nio.charset.Charset): string;
		public indexOf(bytes: okio.ByteString): number;
		public select(param0: okio.Options): number;
		public writeLong(v: number): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public clear(): void;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public writeLong(param0: number): okio.BufferedSink;
		public readString(byteCount: number, param1: java.nio.charset.Charset): string;
		public read(sink: number[], offset: number, byteCount: number): number;
		public writeLongLe(v: number): okio.Buffer;
		public writeByte(param0: number): okio.BufferedSink;
		public readUtf8LineStrict(): string;
		public writeInt(param0: number): okio.BufferedSink;
		public getBuffer(): okio.Buffer;
		public sha512(): okio.ByteString;
		public writeShort(param0: number): okio.BufferedSink;
		public writeIntLe(i: number): okio.Buffer;
		public skip(byteCount: number): void;
		public indexOf(b: number): number;
		public readFully(sink: okio.Buffer, byteCount: number): void;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public equals(other: any): boolean;
		public copyTo(out: okio.Buffer, offset: number): okio.Buffer;
		public copyTo(out: okio.Buffer, offset: number, param2: number): okio.Buffer;
		public skip(param0: number): void;
		public write(param0: okio.ByteString, param1: number, param2: number): okio.BufferedSink;
		public readInt(): number;
		public writeUtf8CodePoint(codePoint: number): okio.Buffer;
		public writeByte(b: number): okio.Buffer;
		public equals(obj: any): boolean;
		public rangeEquals(offset: number, param1: okio.ByteString): boolean;
		public write(source: java.nio.ByteBuffer): number;
		public write(byteString: okio.ByteString, offset: number, byteCount: number): okio.Buffer;
		/** @deprecated */
		public "-deprecated_getByte"(index: number): number;
		public readFully(param0: number[]): void;
		public writeAll(param0: okio.Source): number;
		public timeout(): okio.Timeout;
		public writableSegment$okio(minimumCapacity: number): okio.Segment;
		public close(): void;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public inputStream(): java.io.InputStream;
		public readUtf8LineStrict(param0: number): string;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public readUtf8CodePoint(): number;
		public hmacSha256(key: okio.ByteString): okio.ByteString;
		public read(sink: okio.Buffer, byteCount: number): number;
		public readAndWriteUnsafe(): okio.Buffer.UnsafeCursor;
		/** @deprecated */
		public "-deprecated_size"(): number;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public writeString(string: string, charset: java.nio.charset.Charset): okio.Buffer;
		public writeInt(i: number): okio.Buffer;
		public readHexadecimalUnsignedLong(): number;
		public select(options: okio.Options): number;
		public indexOfElement(targetBytes: okio.ByteString): number;
		public readAndWriteUnsafe(unsafeCursor: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
		public emit(): okio.BufferedSink;
		public readUtf8LineStrict(limit: number): string;
		public hmacSha1(key: okio.ByteString): okio.ByteString;
		public constructor();
		public readUtf8(): string;
		public read(param0: number[], param1: number, param2: number): number;
		public indexOf(b: number, fromIndex: number): number;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public write(param0: okio.Buffer, param1: number): void;
		public writeAll(source: okio.Source): number;
		public writeShort(s: number): okio.Buffer;
		public readByteString(param0: number): okio.ByteString;
		public readUnsafe(): okio.Buffer.UnsafeCursor;
		public completeSegmentByteCount(): number;
		public toString(): string;
		public md5(): okio.ByteString;
		public flush(): void;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public readShort(): number;
		public peek(): okio.BufferedSource;
		public readFrom(input: java.io.InputStream, byteCount: number): okio.Buffer;
		public readShortLe(): number;
		public copyTo(out: java.io.OutputStream): okio.Buffer;
		public readFrom(input: java.io.InputStream): okio.Buffer;
		public readUtf8Line(): string;
		public write(param0: number[], param1: number, param2: number): okio.BufferedSink;
		public readByteString(): okio.ByteString;
		public writeShortLe(s: number): okio.Buffer;
		public readByteArray(param0: number): number[];
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public clone(): any;
		public indexOf(b: number, fromIndex: number, param2: number): number;
		public copyTo(out: java.io.OutputStream, offset: number): okio.Buffer;
		public writeUtf8(string: string): okio.Buffer;
		public size(): number;
		public emit(): okio.Buffer;
		public hashCode(): number;
		public indexOf(param0: number, param1: number, param2: number): number;
		public read(sink: number[]): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public writeDecimalLong(v: number): okio.Buffer;
		public readFully(param0: okio.Buffer, param1: number): void;
		public indexOf(bytes: okio.ByteString, fromIndex: number): number;
		public snapshot(): okio.ByteString;
		public write(param0: number[]): okio.BufferedSink;
		public read(param0: java.nio.ByteBuffer): number;
		public clone(): okio.Buffer;
		public emitCompleteSegments(): okio.Buffer;
		public readDecimalLong(): number;
		public sha256(): okio.ByteString;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public isOpen(): boolean;
		public readByteString(byteCount: number): okio.ByteString;
		public readByteArray(byteCount: number): number[];
		public snapshot(byteCount: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public readAll(sink: okio.Sink): number;
		public exhausted(): boolean;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public write(byteString: okio.ByteString): okio.Buffer;
		public read(param0: number[]): number;
		public indexOf(param0: number, param1: number): number;
		public hmacSha512(key: okio.ByteString): okio.ByteString;
		public indexOf(param0: okio.ByteString): number;
	}
	export module Buffer {
		export class UnsafeCursor extends java.lang.Object implements java.io.Closeable {
			public static class: java.lang.Class<okio.Buffer.UnsafeCursor>;
			public buffer: okio.Buffer;
			public readWrite: boolean;
			public offset: number;
			public data: number[];
			public start: number;
			public end: number;
			public next(): number;
			public seek(offset: number): number;
			public expandBuffer(minByteCount: number): number;
			public setSegment$okio(<set-?>: okio.Segment): void;
			public resizeBuffer(newSize: number): number;
			public constructor();
			public getSegment$okio(): okio.Segment;
			public close(): void;
		}
	}
}

declare module okio {
	export class BufferedSink extends java.lang.Object implements okio.Sink, java.nio.channels.WritableByteChannel {
		public static class: java.lang.Class<okio.BufferedSink>;
		/**
		 * Constructs a new instance of the okio.BufferedSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			getBuffer(): okio.Buffer;
			write(param0: okio.ByteString): okio.BufferedSink;
			write(param0: okio.ByteString, param1: number, param2: number): okio.BufferedSink;
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
			flush(): void;
			emit(): okio.BufferedSink;
			emitCompleteSegments(): okio.BufferedSink;
			outputStream(): java.io.OutputStream;
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
			write(param0: java.nio.ByteBuffer): number;
			close(): void;
			flush(): void;
			isOpen(): boolean;
			close(): void;
			close(): void;
			close(): void;
			close(): void;
		});
		public constructor();
		public write(param0: number[], param1: number, param2: number): okio.BufferedSink;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public getBuffer(): okio.Buffer;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public write(param0: number[]): okio.BufferedSink;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public writeIntLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: java.nio.ByteBuffer): number;
		public write(param0: okio.ByteString, param1: number, param2: number): okio.BufferedSink;
		public flush(): void;
		public isOpen(): boolean;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public outputStream(): java.io.OutputStream;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class BufferedSource extends java.lang.Object implements okio.Source, java.nio.channels.ReadableByteChannel {
		public static class: java.lang.Class<okio.BufferedSource>;
		/**
		 * Constructs a new instance of the okio.BufferedSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			getBuffer(): okio.Buffer;
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
			select(param0: okio.Options): number;
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
			readUtf8LineStrict(param0: number): string;
			readUtf8CodePoint(): number;
			readString(param0: java.nio.charset.Charset): string;
			readString(param0: number, param1: java.nio.charset.Charset): string;
			indexOf(param0: number): number;
			indexOf(param0: number, param1: number): number;
			indexOf(param0: number, param1: number, param2: number): number;
			indexOf(param0: okio.ByteString): number;
			indexOf(param0: okio.ByteString, param1: number): number;
			indexOfElement(param0: okio.ByteString): number;
			indexOfElement(param0: okio.ByteString, param1: number): number;
			rangeEquals(param0: number, param1: okio.ByteString): boolean;
			rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
			peek(): okio.BufferedSource;
			inputStream(): java.io.InputStream;
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
			read(param0: java.nio.ByteBuffer): number;
			close(): void;
			isOpen(): boolean;
			close(): void;
			close(): void;
			close(): void;
			close(): void;
		});
		public constructor();
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readIntLe(): number;
		public readUtf8LineStrict(param0: number): string;
		public readUtf8(param0: number): string;
		public readUtf8CodePoint(): number;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public readByteArray(): number[];
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public read(param0: number[], param1: number, param2: number): number;
		public readUtf8(): string;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public readAll(param0: okio.Sink): number;
		public select(param0: okio.Options): number;
		public readShort(): number;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public peek(): okio.BufferedSource;
		public readString(param0: java.nio.charset.Charset): string;
		public readShortLe(): number;
		public readUtf8Line(): string;
		public readByteString(): okio.ByteString;
		public readByteArray(param0: number): number[];
		public readUtf8LineStrict(): string;
		public getBuffer(): okio.Buffer;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public read(param0: java.nio.ByteBuffer): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public readInt(): number;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public isOpen(): boolean;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public exhausted(): boolean;
		public read(param0: number[]): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: number[]): void;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ByteString extends java.lang.Object {
		public static class: java.lang.Class<okio.ByteString>;
		public static EMPTY: okio.ByteString;
		public base64(): string;
		public endsWith(suffix: number[]): boolean;
		public static of($this$toByteString: java.nio.ByteBuffer): okio.ByteString;
		public base64Url(): string;
		public indexOf(other: number[], fromIndex: number): number;
		public lastIndexOf(other: number[], fromIndex: number): number;
		public digest$okio(algorithm: string): okio.ByteString;
		public hmacSha256(key: okio.ByteString): okio.ByteString;
		public getHashCode$okio(): number;
		public asByteBuffer(): java.nio.ByteBuffer;
		/** @deprecated */
		public "-deprecated_size"(): number;
		public indexOf(other: okio.ByteString, fromIndex: number): number;
		public write$okio(buffer: okio.Buffer, offset: number, byteCount: number): void;
		public hmacSha1(key: okio.ByteString): okio.ByteString;
		public toByteArray(): number[];
		public indexOf(other: number[]): number;
		public toString(): string;
		public static encodeString($this$encode: string, charset: java.nio.charset.Charset): okio.ByteString;
		public md5(): okio.ByteString;
		public startsWith(prefix: okio.ByteString): boolean;
		public internalGet$okio(pos: number): number;
		public toAsciiLowercase(): okio.ByteString;
		public static read($this$readByteString: java.io.InputStream, byteCount: number): okio.ByteString;
		public sha1(): okio.ByteString;
		public setHashCode$okio(<set-?>: number): void;
		public getData$okio(): number[];
		public startsWith(prefix: number[]): boolean;
		public rangeEquals(offset: number, other: okio.ByteString, otherOffset: number, byteCount: number): boolean;
		public substring(): okio.ByteString;
		public static decodeBase64($this$decodeBase64: string): okio.ByteString;
		public internalArray$okio(): number[];
		public lastIndexOf(other: number[]): number;
		public rangeEquals(offset: number, other: number[], otherOffset: number, byteCount: number): boolean;
		public static encodeUtf8($this$encodeUtf8: string): okio.ByteString;
		public sha512(): okio.ByteString;
		public setUtf8$okio(<set-?>: string): void;
		public size(): number;
		public static of($this$toByteString: number[], offset: number, byteCount: number): okio.ByteString;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public getByte(index: number): number;
		public endsWith(suffix: okio.ByteString): boolean;
		public getSize$okio(): number;
		public lastIndexOf(other: okio.ByteString): number;
		public compareTo(other: okio.ByteString): number;
		public equals(other: any): boolean;
		public string(charset: java.nio.charset.Charset): string;
		public hmac$okio(algorithm: string, key: okio.ByteString): okio.ByteString;
		public getUtf8$okio(): string;
		public constructor(data: number[]);
		public sha256(): okio.ByteString;
		public write(out: java.io.OutputStream): void;
		public lastIndexOf(other: okio.ByteString, fromIndex: number): number;
		public substring(beginIndex: number, endIndex: number): okio.ByteString;
		public substring(beginIndex: number): okio.ByteString;
		public equals(obj: any): boolean;
		public static of(...data: number[]): okio.ByteString;
		public static decodeHex($this$decodeHex: string): okio.ByteString;
		public utf8(): string;
		/** @deprecated */
		public "-deprecated_getByte"(index: number): number;
		public hmacSha512(key: okio.ByteString): okio.ByteString;
		public indexOf(other: okio.ByteString): number;
	}
	export module ByteString {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.ByteString.Companion>;
			public of($this$toByteString: java.nio.ByteBuffer): okio.ByteString;
			/** @deprecated */
			public "-deprecated_encodeString"(string: string, charset: java.nio.charset.Charset): okio.ByteString;
			/** @deprecated */
			public "-deprecated_of"(buffer: java.nio.ByteBuffer): okio.ByteString;
			/** @deprecated */
			public "-deprecated_decodeBase64"(string: string): okio.ByteString;
			public encodeString($this$encode: string, charset: java.nio.charset.Charset): okio.ByteString;
			public decodeBase64($this$decodeBase64: string): okio.ByteString;
			/** @deprecated */
			public "-deprecated_read"(inputstream: java.io.InputStream, byteCount: number): okio.ByteString;
			/** @deprecated */
			public "-deprecated_of"(array: number[], offset: number, byteCount: number): okio.ByteString;
			public of($this$toByteString: number[], offset: number, byteCount: number): okio.ByteString;
			/** @deprecated */
			public "-deprecated_decodeHex"(string: string): okio.ByteString;
			public decodeHex($this$decodeHex: string): okio.ByteString;
			public read($this$readByteString: java.io.InputStream, byteCount: number): okio.ByteString;
			public encodeUtf8($this$encodeUtf8: string): okio.ByteString;
			/** @deprecated */
			public "-deprecated_encodeUtf8"(string: string): okio.ByteString;
			public of(...data: number[]): okio.ByteString;
		}
	}
}

declare module okio {
	export class CipherSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.CipherSink>;
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public getCipher(): javax.crypto.Cipher;
		public constructor(sink: okio.BufferedSink, cipher: javax.crypto.Cipher);
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class CipherSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.CipherSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public close(): void;
		public getCipher(): javax.crypto.Cipher;
		public timeout(): okio.Timeout;
		public constructor(source: okio.BufferedSource, cipher: javax.crypto.Cipher);
		public read(param0: okio.Buffer, param1: number): number;
	}
}

declare module okio {
	export class DeflaterSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.DeflaterSink>;
		public finishDeflate$okio(): void;
		public constructor(sink: okio.BufferedSink, deflater: java.util.zip.Deflater);
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public toString(): string;
		public write(source: okio.Buffer, byteCount: number): void;
		public constructor(sink: okio.Sink, deflater: java.util.zip.Deflater);
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ExperimentalFileSystem extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<okio.ExperimentalFileSystem>;
		/**
		 * Constructs a new instance of the okio.ExperimentalFileSystem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module okio {
	export abstract class ForwardingSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.ForwardingSink>;
		public constructor(delegate: okio.Sink);
		public close(): void;
		public delegate(): okio.Sink;
		public write(param0: okio.Buffer, param1: number): void;
		public toString(): string;
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
		/** @deprecated */
		public "-deprecated_delegate"(): okio.Sink;
	}
}

declare module okio {
	export abstract class ForwardingSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.ForwardingSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public constructor(delegate: okio.Source);
		public close(): void;
		/** @deprecated */
		public "-deprecated_delegate"(): okio.Source;
		public delegate(): okio.Source;
		public toString(): string;
		public timeout(): okio.Timeout;
		public read(param0: okio.Buffer, param1: number): number;
	}
}

declare module okio {
	export class ForwardingTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.ForwardingTimeout>;
		public setDelegate(delegate: okio.Timeout): okio.ForwardingTimeout;
		public throwIfReached(): void;
		public constructor();
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public delegate(): okio.Timeout;
		public timeoutNanos(): number;
		public constructor(delegate: okio.Timeout);
		public deadlineNanoTime(): number;
		public timeout(timeout: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public clearTimeout(): okio.Timeout;
		public deadlineNanoTime(deadlineNanoTime: number): okio.Timeout;
	}
}

declare module okio {
	export class GzipSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.GzipSink>;
		public deflater(): java.util.zip.Deflater;
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public constructor(sink: okio.Sink);
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
		/** @deprecated */
		public "-deprecated_deflater"(): java.util.zip.Deflater;
	}
}

declare module okio {
	export class GzipSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.GzipSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public constructor(source: okio.Source);
		public close(): void;
		public timeout(): okio.Timeout;
		public read(param0: okio.Buffer, param1: number): number;
	}
}

declare module okio {
	export class HashingSink extends okio.ForwardingSink implements okio.Sink {
		public static class: java.lang.Class<okio.HashingSink>;
		public constructor(delegate: okio.Sink);
		public static md5(sink: okio.Sink): okio.HashingSink;
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public static sha512(sink: okio.Sink): okio.HashingSink;
		public static hmacSha256(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
		public static hmacSha512(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
		public static sha256(sink: okio.Sink): okio.HashingSink;
		public write(source: okio.Buffer, byteCount: number): void;
		public constructor(sink: okio.Sink, mac: javax.crypto.Mac);
		public flush(): void;
		/** @deprecated */
		public "-deprecated_hash"(): okio.ByteString;
		public constructor(sink: okio.Sink, digest: java.security.MessageDigest);
		public static sha1(sink: okio.Sink): okio.HashingSink;
		public hash(): okio.ByteString;
		public constructor(sink: okio.Sink, algorithm: string);
		public constructor(sink: okio.Sink, key: okio.ByteString, algorithm: string);
		public static hmacSha1(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
		public timeout(): okio.Timeout;
	}
	export module HashingSink {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.HashingSink.Companion>;
			public hmacSha512(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
			public md5(sink: okio.Sink): okio.HashingSink;
			public sha256(sink: okio.Sink): okio.HashingSink;
			public hmacSha256(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
			public sha1(sink: okio.Sink): okio.HashingSink;
			public hmacSha1(sink: okio.Sink, key: okio.ByteString): okio.HashingSink;
			public sha512(sink: okio.Sink): okio.HashingSink;
		}
	}
}

declare module okio {
	export class HashingSource extends okio.ForwardingSource implements okio.Source {
		public static class: java.lang.Class<okio.HashingSource>;
		public constructor(delegate: okio.Source);
		public close(): void;
		public constructor(source: okio.Source, algorithm: string);
		public static hmacSha1(source: okio.Source, key: okio.ByteString): okio.HashingSource;
		public static hmacSha256(source: okio.Source, key: okio.ByteString): okio.HashingSource;
		public constructor(source: okio.Source, digest: java.security.MessageDigest);
		public constructor(source: okio.Source, key: okio.ByteString, algorithm: string);
		public static hmacSha512(source: okio.Source, key: okio.ByteString): okio.HashingSource;
		public read(sink: okio.Buffer, byteCount: number): number;
		/** @deprecated */
		public "-deprecated_hash"(): okio.ByteString;
		public static sha512(source: okio.Source): okio.HashingSource;
		public static sha1(source: okio.Source): okio.HashingSource;
		public static sha256(source: okio.Source): okio.HashingSource;
		public constructor(source: okio.Source, mac: javax.crypto.Mac);
		public hash(): okio.ByteString;
		public static md5(source: okio.Source): okio.HashingSource;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
	export module HashingSource {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.HashingSource.Companion>;
			public sha512(source: okio.Source): okio.HashingSource;
			public hmacSha1(source: okio.Source, key: okio.ByteString): okio.HashingSource;
			public md5(source: okio.Source): okio.HashingSource;
			public sha1(source: okio.Source): okio.HashingSource;
			public sha256(source: okio.Source): okio.HashingSource;
			public hmacSha256(source: okio.Source, key: okio.ByteString): okio.HashingSource;
			public hmacSha512(source: okio.Source, key: okio.ByteString): okio.HashingSource;
		}
	}
}

declare module okio {
	export class InflaterSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.InflaterSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public close(): void;
		public refill(): boolean;
		public constructor(source: okio.BufferedSource, inflater: java.util.zip.Inflater);
		public readOrInflate(sink: okio.Buffer, byteCount: number): number;
		public timeout(): okio.Timeout;
		public constructor(source: okio.Source, inflater: java.util.zip.Inflater);
		public read(param0: okio.Buffer, param1: number): number;
	}
}

declare module okio {
	export class InputStreamSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.InputStreamSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public close(): void;
		public constructor(input: java.io.InputStream, timeout: okio.Timeout);
		public toString(): string;
		public timeout(): okio.Timeout;
		public read(param0: okio.Buffer, param1: number): number;
	}
}

declare module okio {
	export class Okio extends java.lang.Object {
		public static class: java.lang.Class<okio.Okio>;
		public static source($this$source: java.net.Socket): okio.Source;
		public static sink($this$sink: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): okio.Sink;
		public static isAndroidGetsocknameError($this$isAndroidGetsocknameError: java.lang.AssertionError): boolean;
		public static buffer($this$buffer: okio.Sink): okio.BufferedSink;
		public static sink($this$sink: java.io.OutputStream): okio.Sink;
		public static blackhole(): okio.Sink;
		public static cipherSink($this$cipherSink: okio.Sink, cipher: javax.crypto.Cipher): okio.CipherSink;
		public static sink($this$sink: java.io.File): okio.Sink;
		public static appendingSink($this$appendingSink: java.io.File): okio.Sink;
		public static sink($this$sink: java.io.File, append: boolean): okio.Sink;
		public static buffer($this$buffer: okio.Source): okio.BufferedSource;
		public static source($this$source: java.io.File): okio.Source;
		public static hashingSink($this$hashingSink: okio.Sink, digest: java.security.MessageDigest): okio.HashingSink;
		public static hashingSource($this$hashingSource: okio.Source, digest: java.security.MessageDigest): okio.HashingSource;
		public static source($this$source: java.io.InputStream): okio.Source;
		public static use($this$use: java.io.Closeable, block: kotlin.jvm.functions.Function1): any;
		public static source($this$source: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): okio.Source;
		public static hashingSource($this$hashingSource: okio.Source, mac: javax.crypto.Mac): okio.HashingSource;
		public static sink($this$sink: java.net.Socket): okio.Sink;
		public static hashingSink($this$hashingSink: okio.Sink, mac: javax.crypto.Mac): okio.HashingSink;
		public static cipherSource($this$cipherSource: okio.Source, cipher: javax.crypto.Cipher): okio.CipherSource;
	}
}

declare module okio {
	export class Options extends kotlin.collections.AbstractList<okio.ByteString> implements java.util.RandomAccess  {
		public static class: java.lang.Class<okio.Options>;
		public static of(...byteStrings: okio.ByteString[]): okio.Options;
		public toArray(param0: any[]): any[];
		public equals(param0: any): boolean;
		public replaceAll(operator: any /* any*/): void;
		public addAll(param0: number, param1: java.util.Collection<any>): boolean;
		public iterator(): java.util.Iterator<any>;
		public indexOf(param0: any): number;
		public sort(c: java.util.Comparator<any>): void;
		public remove(param0: any): boolean;
		public getTrie$okio(): number[];
		public stream(): java.util.stream.Stream<any>;
		public add(param0: any): boolean;
		public size(): number;
		public remove(param0: number): any;
		public hashCode(): number;
		public addAll(param0: java.util.Collection<any>): boolean;
		public isEmpty(): boolean;
		public subList(param0: number, param1: number): java.util.List<any>;
		public getSize(): number;
		public lastIndexOf(param0: any): number;
		public listIterator(param0: number): java.util.ListIterator<any>;
		public lastIndexOf(param0: okio.ByteString): number;
		public set(param0: number, param1: any): any;
		public getByteStrings$okio(): okio.ByteString[];
		public containsAll(param0: java.util.Collection<any>): boolean;
		public retainAll(param0: java.util.Collection<any>): boolean;
		public contains(param0: okio.ByteString): boolean;
		public get(param0: number): any;
		public contains(param0: any): boolean;
		public listIterator(): java.util.ListIterator<any>;
		public spliterator(): java.util.Spliterator<any>;
		public removeAll(param0: java.util.Collection<any>): boolean;
		public clear(): void;
		public get(index: number): okio.ByteString;
		public parallelStream(): java.util.stream.Stream<any>;
		public add(param0: number, param1: any): void;
		public removeIf(filter: any /* any*/): boolean;
		public indexOf(param0: okio.ByteString): number;
		public toArray(): any[];
	}
	export module Options {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.Options.Companion>;
			public of(...byteStrings: okio.ByteString[]): okio.Options;
		}
	}
}

declare module okio {
	export class OutputStreamSink extends java.lang.Object implements okio.Sink {
		public static class: java.lang.Class<okio.OutputStreamSink>;
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public constructor(out: java.io.OutputStream, timeout: okio.Timeout);
		public toString(): string;
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class PeekSource extends java.lang.Object implements okio.Source {
		public static class: java.lang.Class<okio.PeekSource>;
		public read(sink: okio.Buffer, byteCount: number): number;
		public close(): void;
		public timeout(): okio.Timeout;
		public constructor(upstream: okio.BufferedSource);
		public read(param0: okio.Buffer, param1: number): number;
	}
}

declare module okio {
	export class Pipe extends java.lang.Object {
		public static class: java.lang.Class<okio.Pipe>;
		public setSinkClosed$okio(<set-?>: boolean): void;
		public getSourceClosed$okio(): boolean;
		public sink(): okio.Sink;
		/** @deprecated */
		public "-deprecated_source"(): okio.Source;
		public setCanceled$okio(<set-?>: boolean): void;
		public getSinkClosed$okio(): boolean;
		public source(): okio.Source;
		public fold(sink: okio.Sink): void;
		public cancel(): void;
		public getBuffer$okio(): okio.Buffer;
		public getFoldedSink$okio(): okio.Sink;
		public getCanceled$okio(): boolean;
		public setFoldedSink$okio(<set-?>: okio.Sink): void;
		public getMaxBufferSize$okio(): number;
		/** @deprecated */
		public "-deprecated_sink"(): okio.Sink;
		public constructor(maxBufferSize: number);
		public setSourceClosed$okio(<set-?>: boolean): void;
	}
}

declare module okio {
	export class RealBufferedSink extends java.lang.Object implements okio.BufferedSink {
		public static class: java.lang.Class<okio.RealBufferedSink>;
		public bufferField: okio.Buffer;
		public closed: boolean;
		public sink: okio.Sink;
		public writeString(string: string, charset: java.nio.charset.Charset): okio.BufferedSink;
		public writeUtf8(string: string): okio.BufferedSink;
		public close(): void;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(v: number): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public write(source: number[]): okio.BufferedSink;
		public writeLong(v: number): okio.BufferedSink;
		public writeUtf8(string: string, beginIndex: number, endIndex: number): okio.BufferedSink;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public writeIntLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Buffer, param1: number): void;
		public writeAll(source: okio.Source): number;
		public write(byteString: okio.ByteString): okio.BufferedSink;
		public toString(): string;
		public write(param0: java.nio.ByteBuffer): number;
		public write(byteString: okio.ByteString, offset: number, byteCount: number): okio.BufferedSink;
		public write(source: okio.Buffer, byteCount: number): void;
		public flush(): void;
		public writeByte(b: number): okio.BufferedSink;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public writeDecimalLong(v: number): okio.BufferedSink;
		public outputStream(): java.io.OutputStream;
		public write(source: okio.Source, byteCount: number): okio.BufferedSink;
		public writeShort(s: number): okio.BufferedSink;
		public writeLong(param0: number): okio.BufferedSink;
		public write(param0: number[], param1: number, param2: number): okio.BufferedSink;
		public writeByte(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public constructor(sink: okio.Sink);
		public getBuffer(): okio.Buffer;
		public writeInt(i: number): okio.BufferedSink;
		public writeString(string: string, beginIndex: number, endIndex: number, charset: java.nio.charset.Charset): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeShortLe(s: number): okio.BufferedSink;
		public writeIntLe(i: number): okio.BufferedSink;
		public write(param0: number[]): okio.BufferedSink;
		public writeLongLe(v: number): okio.BufferedSink;
		public write(param0: okio.ByteString, param1: number, param2: number): okio.BufferedSink;
		public isOpen(): boolean;
		public write(source: java.nio.ByteBuffer): number;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public writeUtf8CodePoint(codePoint: number): okio.BufferedSink;
		public write(source: number[], offset: number, byteCount: number): okio.BufferedSink;
		public writeAll(param0: okio.Source): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class RealBufferedSource extends java.lang.Object implements okio.BufferedSource {
		public static class: java.lang.Class<okio.RealBufferedSource>;
		public bufferField: okio.Buffer;
		public closed: boolean;
		public source: okio.Source;
		public require(byteCount: number): void;
		public readUtf8(byteCount: number): string;
		public rangeEquals(offset: number, param1: okio.ByteString, bytes: number, bytesOffset: number): boolean;
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readIntLe(): number;
		public readUtf8LineStrict(param0: number): string;
		public readUtf8(param0: number): string;
		public request(byteCount: number): boolean;
		public readUtf8CodePoint(): number;
		public read(sink: okio.Buffer, byteCount: number): number;
		public readFully(sink: number[]): void;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public select(options: okio.Options): number;
		public indexOfElement(targetBytes: okio.ByteString): number;
		public readByteArray(): number[];
		public readUtf8LineStrict(limit: number): string;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public constructor(source: okio.Source);
		public readUtf8(): string;
		public read(param0: number[], param1: number, param2: number): number;
		public indexOf(b: number, fromIndex: number): number;
		/** @deprecated */
		public buffer(): okio.Buffer;
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public toString(): string;
		public indexOfElement(targetBytes: okio.ByteString, fromIndex: number): number;
		public readAll(param0: okio.Sink): number;
		public read(sink: java.nio.ByteBuffer): number;
		public readString(charset: java.nio.charset.Charset): string;
		public indexOf(bytes: okio.ByteString): number;
		public select(param0: okio.Options): number;
		public readShort(): number;
		public peek(): okio.BufferedSource;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public readShortLe(): number;
		public readUtf8Line(): string;
		public readString(byteCount: number, param1: java.nio.charset.Charset): string;
		public read(sink: number[], offset: number, byteCount: number): number;
		public readByteString(): okio.ByteString;
		public readUtf8LineStrict(): string;
		public readByteArray(param0: number): number[];
		public indexOf(b: number, fromIndex: number, param2: number): number;
		public getBuffer(): okio.Buffer;
		public indexOf(param0: number, param1: number, param2: number): number;
		public read(sink: number[]): number;
		public skip(byteCount: number): void;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public indexOf(b: number): number;
		public indexOf(bytes: okio.ByteString, fromIndex: number): number;
		public readFully(sink: okio.Buffer, byteCount: number): void;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public read(param0: java.nio.ByteBuffer): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public readInt(): number;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public isOpen(): boolean;
		public readByteString(byteCount: number): okio.ByteString;
		public readByteArray(byteCount: number): number[];
		public rangeEquals(offset: number, param1: okio.ByteString): boolean;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public readAll(sink: okio.Sink): number;
		public exhausted(): boolean;
		public buffer(): okio.Buffer;
		public read(param0: number[]): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: number[]): void;
		public timeout(): okio.Timeout;
		public indexOf(param0: okio.ByteString): number;
	}
}

declare module okio {
	export class Segment extends java.lang.Object {
		public static class: java.lang.Class<okio.Segment>;
		public data: number[];
		public pos: number;
		public limit: number;
		public shared: boolean;
		public owner: boolean;
		public next: okio.Segment;
		public prev: okio.Segment;
		public static SIZE: number;
		public static SHARE_MINIMUM: number;
		public writeTo(sink: okio.Segment, byteCount: number): void;
		public constructor();
		public unsharedCopy(): okio.Segment;
		public compact(): void;
		public constructor(data: number[], pos: number, limit: number, shared: boolean, owner: boolean);
		public pop(): okio.Segment;
		public split(byteCount: number): okio.Segment;
		public sharedCopy(): okio.Segment;
		public push(segment: okio.Segment): okio.Segment;
	}
	export module Segment {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.Segment.Companion>;
		}
	}
}

declare module okio {
	export class SegmentPool extends java.lang.Object {
		public static class: java.lang.Class<okio.SegmentPool>;
		public static INSTANCE: okio.SegmentPool;
		public getByteCount(): number;
		public getMAX_SIZE(): number;
		public static recycle(segment: okio.Segment): void;
		public static take(): okio.Segment;
	}
}

declare module okio {
	export class SegmentedByteString extends okio.ByteString {
		public static class: java.lang.Class<okio.SegmentedByteString>;
		public base64(): string;
		public rangeEquals(offset: number, other: okio.ByteString, otherOffset: number, byteCount: number): boolean;
		public substring(): okio.ByteString;
		public internalArray$okio(): number[];
		public lastIndexOf(other: number[]): number;
		public base64Url(): string;
		public indexOf(other: number[], fromIndex: number): number;
		public rangeEquals(offset: number, other: number[], otherOffset: number, byteCount: number): boolean;
		public lastIndexOf(other: number[], fromIndex: number): number;
		public digest$okio(algorithm: string): okio.ByteString;
		public getDirectory$okio(): number[];
		public asByteBuffer(): java.nio.ByteBuffer;
		public hex(): string;
		public indexOf(other: okio.ByteString, fromIndex: number): number;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public getSize$okio(): number;
		public lastIndexOf(other: okio.ByteString): number;
		public getSegments$okio(): number[][];
		public write$okio(buffer: okio.Buffer, offset: number, byteCount: number): void;
		public toByteArray(): number[];
		public equals(other: any): boolean;
		public string(charset: java.nio.charset.Charset): string;
		public indexOf(other: number[]): number;
		public hmac$okio(algorithm: string, key: okio.ByteString): okio.ByteString;
		public constructor(data: number[]);
		public write(out: java.io.OutputStream): void;
		public toString(): string;
		public lastIndexOf(other: okio.ByteString, fromIndex: number): number;
		public substring(beginIndex: number, endIndex: number): okio.ByteString;
		public internalGet$okio(pos: number): number;
		public toAsciiLowercase(): okio.ByteString;
		public substring(beginIndex: number): okio.ByteString;
		public constructor(segments: number[][], directory: number[]);
		public indexOf(other: okio.ByteString): number;
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
	export class SocketAsyncTimeout extends okio.AsyncTimeout {
		public static class: java.lang.Class<okio.SocketAsyncTimeout>;
		public constructor();
		public constructor(socket: java.net.Socket);
		public newTimeoutException(cause: java.io.IOException): java.io.IOException;
		public timedOut(): void;
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
	export class Throttler extends java.lang.Object {
		public static class: java.lang.Class<okio.Throttler>;
		public constructor();
		public take$okio(byteCount: number): number;
		public byteCountOrWaitNanos$okio(now: number, param1: number): number;
		public sink(sink: okio.Sink): okio.Sink;
		public constructor(allocatedUntil: number);
		public bytesPerSecond(bytesPerSecond: number, param1: number, waitByteCount: number): void;
		public bytesPerSecond(bytesPerSecond: number): void;
		public bytesPerSecond(bytesPerSecond: number, param1: number): void;
		public source(source: okio.Source): okio.Source;
	}
}

declare module okio {
	export class Timeout extends java.lang.Object {
		public static class: java.lang.Class<okio.Timeout>;
		public static NONE: okio.Timeout;
		public throwIfReached(): void;
		public waitUntilNotified(monitor: any): void;
		public constructor();
		public deadline(duration: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public timeoutNanos(): number;
		public deadlineNanoTime(): number;
		public intersectWith(other: okio.Timeout, block: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
		public timeout(timeout: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public clearTimeout(): okio.Timeout;
		public deadlineNanoTime(deadlineNanoTime: number): okio.Timeout;
	}
	export module Timeout {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okio.Timeout.Companion>;
			public minTimeout(aNanos: number, param1: number): number;
		}
	}
}

declare module okio {
	export class Utf8 extends java.lang.Object {
		public static class: java.lang.Class<okio.Utf8>;
		public static REPLACEMENT_BYTE: number;
		public static REPLACEMENT_CHARACTER: string;
		public static REPLACEMENT_CODE_POINT: number;
		public static HIGH_SURROGATE_HEADER: number;
		public static LOG_SURROGATE_HEADER: number;
		public static MASK_2BYTES: number;
		public static MASK_3BYTES: number;
		public static MASK_4BYTES: number;
		public static size($this$utf8Size: string, beginIndex: number, endIndex: number): number;
		public static isUtf8Continuation(byte: number): boolean;
		public static processUtf16Chars($this$processUtf16Chars: number[], beginIndex: number, endIndex: number, yield: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
		public static processUtf8Bytes($this$processUtf8Bytes: string, beginIndex: number, endIndex: number, yield: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
		public static process3Utf8Bytes($this$process3Utf8Bytes: number[], beginIndex: number, endIndex: number, yield: kotlin.jvm.functions.Function1<any,kotlin.Unit>): number;
		public static process2Utf8Bytes($this$process2Utf8Bytes: number[], beginIndex: number, endIndex: number, yield: kotlin.jvm.functions.Function1<any,kotlin.Unit>): number;
		public static isIsoControl(codePoint: number): boolean;
		public static size($this$utf8Size: string, beginIndex: number): number;
		public static size($this$utf8Size: string): number;
		public static processUtf8CodePoints($this$processUtf8CodePoints: number[], beginIndex: number, endIndex: number, yield: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
		public static process4Utf8Bytes($this$process4Utf8Bytes: number[], beginIndex: number, endIndex: number, yield: kotlin.jvm.functions.Function1<any,kotlin.Unit>): number;
	}
}

//Generics information:

