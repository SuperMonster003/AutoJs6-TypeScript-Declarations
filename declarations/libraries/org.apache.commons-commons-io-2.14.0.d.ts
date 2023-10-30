declare module org {
	export module apache {
		export module commons {
			export module io {
				export class ByteOrderMark extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.apache.commons.io.ByteOrderMark>;
					public static UTF_8: org.apache.commons.io.ByteOrderMark;
					public static UTF_16BE: org.apache.commons.io.ByteOrderMark;
					public static UTF_16LE: org.apache.commons.io.ByteOrderMark;
					public static UTF_32BE: org.apache.commons.io.ByteOrderMark;
					public static UTF_32LE: org.apache.commons.io.ByteOrderMark;
					public static UTF_BOM: string;
					public equals(obj: any): boolean;
					public toString(): string;
					public getCharsetName(): string;
					public getBytes(): number[];
					public get(pos: number): number;
					public hashCode(): number;
					public constructor(charsetName: string, ...bytes: number[]);
					public length(): number;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class ByteOrderParser extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.ByteOrderParser>;
					public static parseByteOrder(value: string): java.nio.ByteOrder;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class Charsets extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.Charsets>;
					public static ISO_8859_1: java.nio.charset.Charset;
					public static US_ASCII: java.nio.charset.Charset;
					public static UTF_16: java.nio.charset.Charset;
					public static UTF_16BE: java.nio.charset.Charset;
					public static UTF_16LE: java.nio.charset.Charset;
					public static UTF_8: java.nio.charset.Charset;
					public constructor();
					public static toCharset(charsetName: string, defaultCharset: java.nio.charset.Charset): java.nio.charset.Charset;
					public static requiredCharsets(): java.util.SortedMap<string,java.nio.charset.Charset>;
					public static toCharset(charset: java.nio.charset.Charset): java.nio.charset.Charset;
					public static toCharset(charset: java.nio.charset.Charset, defaultCharset: java.nio.charset.Charset): java.nio.charset.Charset;
					public static toCharset(charsetName: string): java.nio.charset.Charset;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class CloseableURLConnection extends java.net.URLConnection implements java.lang.AutoCloseable {
					public static class: java.lang.Class<org.apache.commons.io.CloseableURLConnection>;
					public getAllowUserInteraction(): boolean;
					public getDate(): number;
					public setConnectTimeout(timeout: number): void;
					public connect(): void;
					public close(): void;
					public getInputStream(): java.io.InputStream;
					public getConnectTimeout(): number;
					public addRequestProperty(key: string, value: string): void;
					public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
					public getHeaderField(name: string): string;
					public setAllowUserInteraction(allowUserInteraction: boolean): void;
					public getDoOutput(): boolean;
					public getURL(): java.net.URL;
					public setIfModifiedSince(ifModifiedSince: number): void;
					public setUseCaches(useCaches: boolean): void;
					public setRequestProperty(key: string, value: string): void;
					public getContentEncoding(): string;
					public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
					public setDoInput(doinput: boolean): void;
					public getHeaderFieldInt(name: string, Default: number): number;
					public getLastModified(): number;
					public getExpiration(): number;
					public equals(obj: any): boolean;
					public setDoOutput(doOutput: boolean): void;
					public getDoInput(): boolean;
					public getContentLengthLong(): number;
					public setUseCaches(usecaches: boolean): void;
					public getContentLength(): number;
					public setDefaultUseCaches(defaultusecaches: boolean): void;
					public setAllowUserInteraction(allowuserinteraction: boolean): void;
					public setDoOutput(dooutput: boolean): void;
					public setReadTimeout(timeout: number): void;
					public setDoInput(doInput: boolean): void;
					public toString(): string;
					public getHeaderFieldKey(n: number): string;
					public hashCode(): number;
					public getHeaderFieldDate(name: string, Default: number): number;
					public getDefaultUseCaches(): boolean;
					public getPermission(): java.security.Permission;
					public getRequestProperty(key: string): string;
					public getIfModifiedSince(): number;
					public getContentType(): string;
					public setDefaultUseCaches(defaultUseCaches: boolean): void;
					public getContent(): any;
					public setIfModifiedSince(ifmodifiedsince: number): void;
					public getContent(classes: java.lang.Class<any>[]): any;
					public getReadTimeout(): number;
					public getHeaderField(n: number): string;
					public getOutputStream(): java.io.OutputStream;
					public getUseCaches(): boolean;
					public getHeaderFieldLong(name: string, Default: number): number;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class CopyUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.CopyUtils>;
					public static copy(input: string, output: java.io.Writer): void;
					/** @deprecated */
					public static copy(input: number[], output: java.io.Writer): void;
					/** @deprecated */
					public static copy(input: java.io.InputStream, output: java.io.Writer): void;
					/** @deprecated */
					public static copy(input: string, output: java.io.OutputStream): void;
					public static copy(input: java.io.Reader, output: java.io.OutputStream, encoding: string): void;
					public static copy(input: java.io.Reader, output: java.io.Writer): number;
					/** @deprecated */
					public static copy(input: java.io.Reader, output: java.io.OutputStream): void;
					public static copy(input: string, output: java.io.OutputStream, encoding: string): void;
					public static copy(input: java.io.InputStream, output: java.io.OutputStream): number;
					public constructor();
					public static copy(input: java.io.InputStream, output: java.io.Writer, encoding: string): void;
					public static copy(input: number[], output: java.io.Writer, encoding: string): void;
					public static copy(input: number[], output: java.io.OutputStream): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export abstract class DirectoryWalker<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.DirectoryWalker<any>>;
					public handleStart(startDirectory: java.io.File, results: java.util.Collection<T>): void;
					public constructor(filter: java.io.FileFilter, depthLimit: number);
					public handleEnd(results: java.util.Collection<T>): void;
					public handleDirectoryEnd(directory: java.io.File, depth: number, results: java.util.Collection<T>): void;
					public handleIsCancelled(file: java.io.File, depth: number, results: java.util.Collection<T>): boolean;
					public handleFile(file: java.io.File, depth: number, results: java.util.Collection<T>): void;
					public walk(startDirectory: java.io.File, results: java.util.Collection<T>): void;
					public constructor();
					public constructor(directoryFilter: org.apache.commons.io.filefilter.IOFileFilter, fileFilter: org.apache.commons.io.filefilter.IOFileFilter, depthLimit: number);
					public filterDirectoryContents(directory: java.io.File, depth: number, ...files: java.io.File[]): java.io.File[];
					public handleRestricted(directory: java.io.File, depth: number, results: java.util.Collection<T>): void;
					public handleCancelled(startDirectory: java.io.File, results: java.util.Collection<T>, cancel: org.apache.commons.io.DirectoryWalker.CancelException): void;
					public checkIfCancelled(file: java.io.File, depth: number, results: java.util.Collection<T>): void;
					public handleDirectory(directory: java.io.File, depth: number, results: java.util.Collection<T>): boolean;
					public handleDirectoryStart(directory: java.io.File, depth: number, results: java.util.Collection<T>): void;
				}
				export module DirectoryWalker {
					export class CancelException extends java.io.IOException {
						public static class: java.lang.Class<org.apache.commons.io.DirectoryWalker.CancelException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, file: java.io.File, depth: number);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
						public getFile(): java.io.File;
						public getDepth(): number;
						public constructor(file: java.io.File, depth: number);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class EndianUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.EndianUtils>;
					public static writeSwappedInteger(output: java.io.OutputStream, value: number): void;
					public static writeSwappedInteger(data: number[], offset: number, value: number): void;
					public static readSwappedDouble(data: number[], offset: number): number;
					public static writeSwappedDouble(data: number[], offset: number, value: number): void;
					public static readSwappedFloat(input: java.io.InputStream): number;
					public static readSwappedFloat(data: number[], offset: number): number;
					public static swapFloat(value: number): number;
					public static writeSwappedLong(data: number[], offset: number, value: number): void;
					public static writeSwappedShort(output: java.io.OutputStream, value: number): void;
					public static readSwappedShort(data: number[], offset: number): number;
					public static readSwappedUnsignedShort(data: number[], offset: number): number;
					public static swapDouble(value: number): number;
					public constructor();
					public static readSwappedShort(input: java.io.InputStream): number;
					public static swapInteger(value: number): number;
					public static writeSwappedLong(output: java.io.OutputStream, value: number): void;
					public static writeSwappedDouble(output: java.io.OutputStream, value: number): void;
					public static swapShort(value: number): number;
					public static readSwappedInteger(data: number[], offset: number): number;
					public static readSwappedUnsignedInteger(input: java.io.InputStream): number;
					public static swapLong(value: number): number;
					public static readSwappedUnsignedInteger(data: number[], offset: number): number;
					public static readSwappedLong(input: java.io.InputStream): number;
					public static readSwappedLong(data: number[], offset: number): number;
					public static writeSwappedFloat(output: java.io.OutputStream, value: number): void;
					public static writeSwappedShort(data: number[], offset: number, value: number): void;
					public static writeSwappedFloat(data: number[], offset: number, value: number): void;
					public static readSwappedInteger(input: java.io.InputStream): number;
					public static readSwappedUnsignedShort(input: java.io.InputStream): number;
					public static readSwappedDouble(input: java.io.InputStream): number;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class FileCleaner extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.FileCleaner>;
					/** @deprecated */
					public static exitWhenFinished(): void;
					/** @deprecated */
					public static track(file: java.io.File, marker: any): void;
					public constructor();
					public static getInstance(): org.apache.commons.io.FileCleaningTracker;
					/** @deprecated */
					public static track(path: string, marker: any): void;
					/** @deprecated */
					public static track(path: string, marker: any, deleteStrategy: org.apache.commons.io.FileDeleteStrategy): void;
					/** @deprecated */
					public static getTrackCount(): number;
					/** @deprecated */
					public static track(file: java.io.File, marker: any, deleteStrategy: org.apache.commons.io.FileDeleteStrategy): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class FileCleaningTracker extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.FileCleaningTracker>;
					public getTrackCount(): number;
					public exitWhenFinished(): void;
					public constructor();
					public track(file: java.io.File, marker: any, deleteStrategy: org.apache.commons.io.FileDeleteStrategy): void;
					public track(file: java.io.File, marker: any): void;
					public track(path: string, marker: any, deleteStrategy: org.apache.commons.io.FileDeleteStrategy): void;
					public track(path: string, marker: any): void;
					public getDeleteFailures(): java.util.List<string>;
					public track(file: java.nio.file.Path, marker: any, deleteStrategy: org.apache.commons.io.FileDeleteStrategy): void;
					public track(file: java.nio.file.Path, marker: any): void;
				}
				export module FileCleaningTracker {
					export class Reaper extends java.lang.Thread {
						public static class: java.lang.Class<org.apache.commons.io.FileCleaningTracker.Reaper>;
						public run(): void;
					}
					export class Tracker extends java.lang.ref.PhantomReference<any> {
						public static class: java.lang.Class<org.apache.commons.io.FileCleaningTracker.Tracker>;
						public getPath(): string;
						public delete(): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class FileDeleteStrategy extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.FileDeleteStrategy>;
					public static NORMAL: org.apache.commons.io.FileDeleteStrategy;
					public static FORCE: org.apache.commons.io.FileDeleteStrategy;
					public toString(): string;
					public constructor(name: string);
					public delete(fileToDelete: java.io.File): void;
					public doDelete(file: java.io.File): boolean;
					public deleteQuietly(fileToDelete: java.io.File): boolean;
				}
				export module FileDeleteStrategy {
					export class ForceFileDeleteStrategy extends org.apache.commons.io.FileDeleteStrategy {
						public static class: java.lang.Class<org.apache.commons.io.FileDeleteStrategy.ForceFileDeleteStrategy>;
						public doDelete(fileToDelete: java.io.File): boolean;
						public doDelete(file: java.io.File): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class FileExistsException extends java.io.IOException {
					public static class: java.lang.Class<org.apache.commons.io.FileExistsException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(file: java.io.File);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class FileSystem {
					public static class: java.lang.Class<org.apache.commons.io.FileSystem>;
					public static GENERIC: org.apache.commons.io.FileSystem;
					public static LINUX: org.apache.commons.io.FileSystem;
					public static MAC_OSX: org.apache.commons.io.FileSystem;
					public static WINDOWS: org.apache.commons.io.FileSystem;
					public static values(): org.apache.commons.io.FileSystem[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public getReservedFileNames(): string[];
					public static getCurrent(): org.apache.commons.io.FileSystem;
					public isCasePreserving(): boolean;
					public supportsDriveLetter(): boolean;
					public getNameSeparator(): string;
					public getMaxPathLength(): number;
					public getIllegalFileNameChars(): string[];
					public getIllegalFileNameCodePoints(): number[];
					public isCaseSensitive(): boolean;
					public normalizeSeparators(path: string): string;
					public getBlockSize(): number;
					public isLegalFileName(candidate: string): boolean;
					public isReservedFileName(candidate: string): boolean;
					public toLegalFileName(candidate: string, replacement: string): string;
					public getMaxFileNameLength(): number;
					public static valueOf(name: string): org.apache.commons.io.FileSystem;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class FileSystemUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.FileSystemUtils>;
					/** @deprecated */
					public static freeSpaceKb(path: string): number;
					/** @deprecated */
					public static freeSpace(path: string): number;
					public constructor();
					/** @deprecated */
					public static freeSpaceKb(): number;
					/** @deprecated */
					public static freeSpaceKb(timeout: number): number;
					/** @deprecated */
					public static freeSpaceKb(path: string, timeout: number): number;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class FileUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.FileUtils>;
					public static ONE_KB: number;
					public static ONE_KB_BI: java.math.BigInteger;
					public static ONE_MB: number;
					public static ONE_MB_BI: java.math.BigInteger;
					public static ONE_GB: number;
					public static ONE_GB_BI: java.math.BigInteger;
					public static ONE_TB: number;
					public static ONE_TB_BI: java.math.BigInteger;
					public static ONE_PB: number;
					public static ONE_PB_BI: java.math.BigInteger;
					public static ONE_EB: number;
					public static ONE_EB_BI: java.math.BigInteger;
					public static ONE_ZB: java.math.BigInteger;
					public static ONE_YB: java.math.BigInteger;
					public static EMPTY_FILE_ARRAY: java.io.File[];
					/** @deprecated */
					public static write(file: java.io.File, data: string, append: boolean): void;
					public static isFileNewer(file: java.io.File, chronoLocalDate: java.time.chrono.ChronoLocalDate): boolean;
					public static listFiles(directory: java.io.File, fileFilter: org.apache.commons.io.filefilter.IOFileFilter, dirFilter: org.apache.commons.io.filefilter.IOFileFilter): java.util.Collection<java.io.File>;
					public static write(file: java.io.File, data: string, charset: java.nio.charset.Charset, append: boolean): void;
					public static copyFile(input: java.io.File, output: java.io.OutputStream): number;
					public static moveFile(srcFile: java.io.File, destFile: java.io.File, ...copyOptions: java.nio.file.CopyOption[]): void;
					public static moveFileToDirectory(srcFile: java.io.File, destDir: java.io.File, createDestDir: boolean): void;
					public static toFiles(...urls: java.net.URL[]): java.io.File[];
					public static writeLines(file: java.io.File, lines: java.util.Collection<any>, lineEnding: string, append: boolean): void;
					public static toURLs(...files: java.io.File[]): java.net.URL[];
					public static copyToDirectory(sourceIterable: java.lang.Iterable<java.io.File>, destinationDir: java.io.File): void;
					public static isFileOlder(file: java.io.File, chronoLocalDate: java.time.chrono.ChronoLocalDate): boolean;
					public static readFileToString(file: java.io.File, charsetName: string): string;
					public static copyDirectory(srcDir: java.io.File, destDir: java.io.File, fileFilter: java.io.FileFilter, preserveFileDate: boolean, ...copyOptions: java.nio.file.CopyOption[]): void;
					public static isFileOlder(file: java.io.File, chronoLocalDate: java.time.chrono.ChronoLocalDate, offsetTime: java.time.OffsetTime): boolean;
					public static getUserDirectoryPath(): string;
					public static lastModifiedFileTime(file: java.io.File): java.nio.file.attribute.FileTime;
					public static write(file: java.io.File, data: string, charsetName: string): void;
					public static cleanDirectory(directory: java.io.File): void;
					public static copyFile(srcFile: java.io.File, destFile: java.io.File, preserveFileDate: boolean): void;
					public static isDirectory(file: java.io.File, ...options: java.nio.file.LinkOption[]): boolean;
					public static newOutputStream(file: java.io.File, append: boolean): java.io.OutputStream;
					public static isFileNewer(file: java.io.File, chronoLocalDateTime: java.time.chrono.ChronoLocalDateTime<any>): boolean;
					public static byteCountToDisplaySize(size: java.math.BigInteger): string;
					public static getFile(...names: string[]): java.io.File;
					public static forceMkdir(directory: java.io.File): void;
					public static writeByteArrayToFile(file: java.io.File, data: number[]): void;
					public static copyDirectory(srcDir: java.io.File, destDir: java.io.File, preserveFileDate: boolean): void;
					public static deleteQuietly(file: java.io.File): boolean;
					public static toFile(url: java.net.URL): java.io.File;
					/** @deprecated */
					public static writeStringToFile(file: java.io.File, data: string): void;
					public static copyToFile(inputStream: java.io.InputStream, file: java.io.File): void;
					public static isSymlink(file: java.io.File): boolean;
					public static lineIterator(file: java.io.File, charsetName: string): org.apache.commons.io.LineIterator;
					public static forceDelete(file: java.io.File): void;
					public static writeStringToFile(file: java.io.File, data: string, charsetName: string, append: boolean): void;
					public static openOutputStream(file: java.io.File, append: boolean): java.io.FileOutputStream;
					public static copyURLToFile(source: java.net.URL, destination: java.io.File, connectionTimeoutMillis: number, readTimeoutMillis: number): void;
					public static getFile(directory: java.io.File, ...names: string[]): java.io.File;
					public static isFileNewer(file: java.io.File, chronoZonedDateTime: java.time.chrono.ChronoZonedDateTime<any>): boolean;
					public static isFileOlder(file: java.io.File, chronoLocalDateTime: java.time.chrono.ChronoLocalDateTime<any>): boolean;
					public static writeLines(file: java.io.File, charsetName: string, lines: java.util.Collection<any>, lineEnding: string): void;
					public static getTempDirectory(): java.io.File;
					public static writeLines(file: java.io.File, charsetName: string, lines: java.util.Collection<any>, lineEnding: string, append: boolean): void;
					public static iterateFiles(directory: java.io.File, fileFilter: org.apache.commons.io.filefilter.IOFileFilter, dirFilter: org.apache.commons.io.filefilter.IOFileFilter): java.util.Iterator<java.io.File>;
					public static byteCountToDisplaySize(size: number): string;
					/** @deprecated */
					public static write(file: java.io.File, data: string): void;
					public static copyFile(srcFile: java.io.File, destFile: java.io.File, preserveFileDate: boolean, ...copyOptions: java.nio.file.CopyOption[]): void;
					public static forceDeleteOnExit(file: java.io.File): void;
					public static getTempDirectoryPath(): string;
					public static readFileToByteArray(file: java.io.File): number[];
					public static touch(file: java.io.File): void;
					public static isFileOlder(file: java.io.File, reference: java.io.File): boolean;
					public static writeByteArrayToFile(file: java.io.File, data: number[], off: number, len: number): void;
					public static moveFile(srcFile: java.io.File, destFile: java.io.File): void;
					/** @deprecated */
					public static readFileToString(file: java.io.File): string;
					public static writeLines(file: java.io.File, lines: java.util.Collection<any>): void;
					public static readLines(file: java.io.File, charsetName: string): java.util.List<string>;
					public static isFileOlder(file: java.io.File, fileTime: java.nio.file.attribute.FileTime): boolean;
					public static writeStringToFile(file: java.io.File, data: string, charset: java.nio.charset.Charset): void;
					public static moveDirectoryToDirectory(source: java.io.File, destDir: java.io.File, createDestDir: boolean): void;
					public static isFileNewer(file: java.io.File, fileTime: java.nio.file.attribute.FileTime): boolean;
					public static isFileOlder(file: java.io.File, date: java.util.Date): boolean;
					public static copyDirectory(srcDir: java.io.File, destDir: java.io.File, filter: java.io.FileFilter): void;
					public static createParentDirectories(file: java.io.File): java.io.File;
					public static current(): java.io.File;
					public static isFileNewer(file: java.io.File, chronoLocalDate: java.time.chrono.ChronoLocalDate, localTime: java.time.LocalTime): boolean;
					public static checksum(file: java.io.File, checksum: java.util.zip.Checksum): java.util.zip.Checksum;
					public static convertFileCollectionToFileArray(files: java.util.Collection<java.io.File>): java.io.File[];
					public static moveToDirectory(src: java.io.File, destDir: java.io.File, createDestDir: boolean): void;
					public static isFileNewer(file: java.io.File, chronoLocalDateTime: java.time.chrono.ChronoLocalDateTime<any>, zoneId: java.time.ZoneId): boolean;
					public static contentEqualsIgnoreEOL(file1: java.io.File, file2: java.io.File, charsetName: string): boolean;
					public static copyToDirectory(sourceFile: java.io.File, destinationDir: java.io.File): void;
					public static writeLines(file: java.io.File, lines: java.util.Collection<any>, append: boolean): void;
					public static byteCountToDisplaySize(size: java.lang.Number): string;
					public static forceMkdirParent(file: java.io.File): void;
					public static waitFor(file: java.io.File, seconds: number): boolean;
					public static writeByteArrayToFile(file: java.io.File, data: number[], append: boolean): void;
					public static deleteDirectory(directory: java.io.File): void;
					public static isRegularFile(file: java.io.File, ...options: java.nio.file.LinkOption[]): boolean;
					/** @deprecated */
					public static writeStringToFile(file: java.io.File, data: string, append: boolean): void;
					public static copyFileToDirectory(srcFile: java.io.File, destDir: java.io.File): void;
					public static lastModifiedUnchecked(file: java.io.File): number;
					public static sizeOf(file: java.io.File): number;
					public static isFileOlder(file: java.io.File, timeMillis: number): boolean;
					public static listFiles(directory: java.io.File, extensions: string[], recursive: boolean): java.util.Collection<java.io.File>;
					public static copyDirectoryToDirectory(sourceDir: java.io.File, destinationDir: java.io.File): void;
					public static writeByteArrayToFile(file: java.io.File, data: number[], off: number, len: number, append: boolean): void;
					public static copyDirectory(srcDir: java.io.File, destDir: java.io.File): void;
					/** @deprecated */
					public constructor();
					public static isFileOlder(file: java.io.File, instant: java.time.Instant): boolean;
					public static isFileOlder(file: java.io.File, offsetDateTime: java.time.OffsetDateTime): boolean;
					public static isFileNewer(file: java.io.File, date: java.util.Date): boolean;
					public static streamFiles(directory: java.io.File, recursive: boolean, ...extensions: string[]): java.util.stream.Stream<java.io.File>;
					public static contentEquals(file1: java.io.File, file2: java.io.File): boolean;
					public static copyFile(srcFile: java.io.File, destFile: java.io.File, ...copyOptions: java.nio.file.CopyOption[]): void;
					public static copyURLToFile(source: java.net.URL, destination: java.io.File): void;
					public static isFileOlder(file: java.io.File, chronoLocalDate: java.time.chrono.ChronoLocalDate, localTime: java.time.LocalTime): boolean;
					public static sizeOfAsBigInteger(file: java.io.File): java.math.BigInteger;
					public static writeLines(file: java.io.File, charsetName: string, lines: java.util.Collection<any>, append: boolean): void;
					public static directoryContains(directory: java.io.File, child: java.io.File): boolean;
					public static isEmptyDirectory(directory: java.io.File): boolean;
					public static lastModified(file: java.io.File): number;
					public static isFileNewer(file: java.io.File, chronoLocalDate: java.time.chrono.ChronoLocalDate, offsetTime: java.time.OffsetTime): boolean;
					public static writeLines(file: java.io.File, charsetName: string, lines: java.util.Collection<any>): void;
					public static isFileOlder(file: java.io.File, chronoZonedDateTime: java.time.chrono.ChronoZonedDateTime<any>): boolean;
					public static openOutputStream(file: java.io.File): java.io.FileOutputStream;
					public static readLines(file: java.io.File, charset: java.nio.charset.Charset): java.util.List<string>;
					public static readFileToString(file: java.io.File, charsetName: java.nio.charset.Charset): string;
					public static isFileOlder(file: java.io.File, chronoLocalDateTime: java.time.chrono.ChronoLocalDateTime<any>, zoneId: java.time.ZoneId): boolean;
					public static writeLines(file: java.io.File, lines: java.util.Collection<any>, lineEnding: string): void;
					public static sizeOfDirectory(directory: java.io.File): number;
					public static writeStringToFile(file: java.io.File, data: string, charsetName: string): void;
					public static moveDirectory(srcDir: java.io.File, destDir: java.io.File): void;
					public static listFilesAndDirs(directory: java.io.File, fileFilter: org.apache.commons.io.filefilter.IOFileFilter, dirFilter: org.apache.commons.io.filefilter.IOFileFilter): java.util.Collection<java.io.File>;
					/** @deprecated */
					public static readLines(file: java.io.File): java.util.List<string>;
					public static copyDirectory(srcDir: java.io.File, destDir: java.io.File, filter: java.io.FileFilter, preserveFileDate: boolean): void;
					public static isFileNewer(file: java.io.File, reference: java.io.File): boolean;
					public static isFileNewer(file: java.io.File, offsetDateTime: java.time.OffsetDateTime): boolean;
					public static sizeOfDirectoryAsBigInteger(directory: java.io.File): java.math.BigInteger;
					public static write(file: java.io.File, data: string, charset: java.nio.charset.Charset): void;
					public static openInputStream(file: java.io.File): java.io.FileInputStream;
					public static checksumCRC32(file: java.io.File): number;
					public static delete(file: java.io.File): java.io.File;
					public static isFileNewer(file: java.io.File, timeMillis: number): boolean;
					public static copyFile(srcFile: java.io.File, destFile: java.io.File): void;
					public static isFileNewer(file: java.io.File, instant: java.time.Instant): boolean;
					public static write(file: java.io.File, data: string, charsetName: string, append: boolean): void;
					public static lineIterator(file: java.io.File): org.apache.commons.io.LineIterator;
					public static copyFileToDirectory(sourceFile: java.io.File, destinationDir: java.io.File, preserveFileDate: boolean): void;
					public static iterateFilesAndDirs(directory: java.io.File, fileFilter: org.apache.commons.io.filefilter.IOFileFilter, dirFilter: org.apache.commons.io.filefilter.IOFileFilter): java.util.Iterator<java.io.File>;
					public static getUserDirectory(): java.io.File;
					public static iterateFiles(directory: java.io.File, extensions: string[], recursive: boolean): java.util.Iterator<java.io.File>;
					public static writeStringToFile(file: java.io.File, data: string, charset: java.nio.charset.Charset, append: boolean): void;
					public static copyInputStreamToFile(source: java.io.InputStream, destination: java.io.File): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class FilenameUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.FilenameUtils>;
					public static EXTENSION_SEPARATOR: string;
					public static EXTENSION_SEPARATOR_STR: string;
					public static getFullPathNoEndSeparator(fileName: string): string;
					public equals(obj: any): boolean;
					public static normalize(fileName: string, unixSeparator: boolean): string;
					public static getPrefixLength(fileName: string): number;
					public static removeExtension(fileName: string): string;
					public static wildcardMatch(fileName: string, wildcardMatcher: string, ioCase: org.apache.commons.io.IOCase): boolean;
					public static separatorsToWindows(path: string): string;
					public static getBaseName(fileName: string): string;
					public static isExtension(fileName: string, extension: string): boolean;
					public static indexOfLastSeparator(fileName: string): number;
					public static normalizeNoEndSeparator(fileName: string): string;
					public static equals(fileName1: string, fileName2: string): boolean;
					public constructor();
					public static getExtension(fileName: string): string;
					public static indexOfExtension(fileName: string): number;
					public static isExtension(fileName: string, ...extensions: string[]): boolean;
					public static separatorsToUnix(path: string): string;
					public static equalsNormalized(fileName1: string, fileName2: string): boolean;
					public static directoryContains(canonicalParent: string, canonicalChild: string): boolean;
					public static equalsOnSystem(fileName1: string, fileName2: string): boolean;
					public static concat(basePath: string, fullFileNameToAdd: string): string;
					public static getName(fileName: string): string;
					public static getPath(fileName: string): string;
					public static getPathNoEndSeparator(fileName: string): string;
					public static wildcardMatch(fileName: string, wildcardMatcher: string): boolean;
					public static separatorsToSystem(path: string): string;
					public static equals(fileName1: string, fileName2: string, normalize: boolean, ioCase: org.apache.commons.io.IOCase): boolean;
					public static isExtension(fileName: string, extensions: java.util.Collection<string>): boolean;
					public static normalizeNoEndSeparator(fileName: string, unixSeparator: boolean): string;
					public static wildcardMatchOnSystem(fileName: string, wildcardMatcher: string): boolean;
					public static equalsNormalizedOnSystem(fileName1: string, fileName2: string): boolean;
					public static getPrefix(fileName: string): string;
					public static getFullPath(fileName: string): string;
					public static normalize(fileName: string): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class HexDump extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.HexDump>;
					public static EOL: string;
					public static dump(data: number[], appendable: java.lang.Appendable): void;
					public static dump(data: number[], offset: number, param2: java.io.OutputStream, stream: number): void;
					public constructor();
					public static dump(data: number[], offset: number, param2: java.lang.Appendable, appendable: number, index: number): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class IO extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.IO>;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class IOCase {
					public static class: java.lang.Class<org.apache.commons.io.IOCase>;
					public static SENSITIVE: org.apache.commons.io.IOCase;
					public static INSENSITIVE: org.apache.commons.io.IOCase;
					public static SYSTEM: org.apache.commons.io.IOCase;
					public static isCaseSensitive(ioCase: org.apache.commons.io.IOCase): boolean;
					public checkRegionMatches(str: string, strStartIndex: number, search: string): boolean;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static value(value: org.apache.commons.io.IOCase, defaultValue: org.apache.commons.io.IOCase): org.apache.commons.io.IOCase;
					public static valueOf(name: string): org.apache.commons.io.IOCase;
					public checkEndsWith(str: string, end: string): boolean;
					public checkStartsWith(str: string, start: string): boolean;
					public checkIndexOf(str: string, strStartIndex: number, search: string): number;
					public static values(): org.apache.commons.io.IOCase[];
					public toString(): string;
					public getName(): string;
					public isCaseSensitive(): boolean;
					public static forName(name: string): org.apache.commons.io.IOCase;
					public checkCompareTo(str1: string, str2: string): number;
					public checkEquals(str1: string, str2: string): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class IOExceptionList extends java.io.IOException implements java.lang.Iterable<java.lang.Throwable>  {
					public static class: java.lang.Class<org.apache.commons.io.IOExceptionList>;
					public spliterator(): java.util.Spliterator<any>;
					public getCause(): java.lang.Throwable;
					public iterator(): java.util.Iterator<java.lang.Throwable>;
					public constructor(causeList: java.util.List<any>);
					public static checkEmpty(causeList: java.util.List<any>, message: any): void;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public iterator(): java.util.Iterator<any>;
					public constructor();
					public getCauseList(clazz: java.lang.Class<any>): java.util.List<any>;
					public constructor(cause: java.lang.Throwable);
					public getCause(index: number, clazz: java.lang.Class<any>): java.lang.Throwable;
					public constructor(message: string, cause: java.lang.Throwable);
					public getCauseList(): java.util.List<any>;
					public constructor(message: string, causeList: java.util.List<any>);
					public getCause(index: number): java.lang.Throwable;
					public forEach(action: any /* any*/): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class IOExceptionWithCause extends java.io.IOException {
					public static class: java.lang.Class<org.apache.commons.io.IOExceptionWithCause>;
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

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class IOIndexedException extends java.io.IOException {
					public static class: java.lang.Class<org.apache.commons.io.IOIndexedException>;
					public constructor(message: string);
					public getIndex(): number;
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public static toMessage(index: number, cause: java.lang.Throwable): string;
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(index: number, cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class IOUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.IOUtils>;
					public static CR: number;
					public static DEFAULT_BUFFER_SIZE: number;
					public static DIR_SEPARATOR: string;
					public static DIR_SEPARATOR_UNIX: string;
					public static DIR_SEPARATOR_WINDOWS: string;
					public static EMPTY_BYTE_ARRAY: number[];
					public static EOF: number;
					public static LF: number;
					public static LINE_SEPARATOR: string;
					public static LINE_SEPARATOR_UNIX: string;
					public static LINE_SEPARATOR_WINDOWS: string;
					public static skip(input: java.io.InputStream, toSkip: number, param2: any /* any<number[]>*/): number;
					public static buffer(reader: java.io.Reader, size: number): java.io.BufferedReader;
					public static write(data: string[], writer: java.io.Writer): void;
					public static toBufferedReader(reader: java.io.Reader, size: number): java.io.BufferedReader;
					/** @deprecated */
					public static write(data: string[], output: java.io.OutputStream): void;
					/** @deprecated */
					public static toString(input: java.io.InputStream): string;
					public static skipFully(input: java.io.InputStream, toSkip: number): void;
					public static length(array: any[]): number;
					public static write(data: string, output: java.io.OutputStream, charsetName: string): void;
					public static length(array: number[]): number;
					public static write(data: string, output: java.io.OutputStream, charset: java.nio.charset.Charset): void;
					public static closeQuietly(closeables: java.util.stream.Stream<java.io.Closeable>): void;
					public static closeQuietly(input: java.io.InputStream): void;
					public static copyLarge(inputStream: java.io.InputStream, outputStream: java.io.OutputStream, buffer: number[]): number;
					public static resourceToURL(name: string, classLoader: java.lang.ClassLoader): java.net.URL;
					public static readFully(input: java.io.InputStream, buffer: number[]): void;
					public static resourceToByteArray(name: string, classLoader: java.lang.ClassLoader): number[];
					public static skip(reader: java.io.Reader, toSkip: number): number;
					public static skip(input: java.nio.channels.ReadableByteChannel, toSkip: number): number;
					public static closeQuietly(reader: java.io.Reader): void;
					public static writeChunked(data: string[], writer: java.io.Writer): void;
					/** @deprecated */
					public static toByteArray(reader: java.io.Reader): number[];
					public static consume(input: java.io.Reader): number;
					public static readFully(reader: java.io.Reader, buffer: string[], offset: number, length: number): void;
					public static toString(uri: java.net.URI, encoding: java.nio.charset.Charset): string;
					public static copyLarge(input: java.io.InputStream, output: java.io.OutputStream, inputOffset: number, param3: number, length: number[]): number;
					public static contentEqualsIgnoreEOL(reader1: java.io.Reader, reader2: java.io.Reader): boolean;
					public static copyLarge(input: java.io.InputStream, output: java.io.OutputStream, inputOffset: number, param3: number): number;
					/** @deprecated */
					public static writeLines(lines: java.util.Collection<any>, lineEnding: string, output: java.io.OutputStream): void;
					public static copyLarge(reader: java.io.Reader, writer: java.io.Writer, buffer: string[]): number;
					public static writeLines(lines: java.util.Collection<any>, lineEnding: string, writer: java.io.Writer): void;
					public static read(reader: java.io.Reader, buffer: string[], offset: number, length: number): number;
					public static resourceToString(name: string, charset: java.nio.charset.Charset, classLoader: java.lang.ClassLoader): string;
					public static toString(input: number[], charsetName: string): string;
					/** @deprecated */
					public static write(data: java.lang.StringBuffer, output: java.io.OutputStream): void;
					public static contentEquals(input1: java.io.Reader, input2: java.io.Reader): boolean;
					public static toByteArray(url: java.net.URL): number[];
					public static skip(input: java.io.InputStream, toSkip: number): number;
					/** @deprecated */
					public static toString(input: number[]): string;
					public static closeQuietly(closeables: java.lang.Iterable<java.io.Closeable>): void;
					/** @deprecated */
					public static write(data: number[], writer: java.io.Writer): void;
					public static toBufferedInputStream(input: java.io.InputStream): java.io.InputStream;
					public static contentEquals(input1: java.io.InputStream, input2: java.io.InputStream): boolean;
					public static write(data: number[], writer: java.io.Writer, charset: java.nio.charset.Charset): void;
					public static toBufferedInputStream(input: java.io.InputStream, size: number): java.io.InputStream;
					public static writeChunked(data: number[], output: java.io.OutputStream): void;
					public static copy(reader: java.io.Reader, output: java.lang.Appendable, buffer: java.nio.CharBuffer): number;
					public static write(data: string[], output: java.io.OutputStream, charsetName: string): void;
					public static byteArray(size: number): number[];
					public static toString(input: java.io.InputStream, charsetName: string): string;
					/** @deprecated */
					public static write(data: java.lang.StringBuffer, writer: java.io.Writer): void;
					public static copy(outputStream: java.io.ByteArrayOutputStream): org.apache.commons.io.input.QueueInputStream;
					/** @deprecated */
					public static write(data: string, output: java.io.OutputStream): void;
					public static readLines(reader: java.io.Reader): java.util.List<string>;
					/** @deprecated */
					public static readLines(input: java.io.InputStream): java.util.List<string>;
					public static read(input: java.io.InputStream, buffer: number[]): number;
					/** @deprecated */
					public static toInputStream(input: string): java.io.InputStream;
					public static toString(uri: java.net.URI, charsetName: string): string;
					public static consume(input: java.io.InputStream): number;
					public static writer(appendable: java.lang.Appendable): java.io.Writer;
					public static copy(inputStream: java.io.InputStream, outputStream: java.io.OutputStream): number;
					public static copyLarge(reader: java.io.Reader, writer: java.io.Writer): number;
					public static buffer(outputStream: java.io.OutputStream): java.io.BufferedOutputStream;
					public static close(conn: java.net.URLConnection): void;
					public static readFully(input: java.nio.channels.ReadableByteChannel, buffer: java.nio.ByteBuffer): void;
					public static length(array: string[]): number;
					public static toCharArray(inputStream: java.io.InputStream, charset: java.nio.charset.Charset): string[];
					public static toInputStream(input: string, charsetName: string): java.io.InputStream;
					public static copy(reader: java.io.Reader, output: java.io.OutputStream, outputCharsetName: string): void;
					public static resourceToString(name: string, charset: java.nio.charset.Charset): string;
					public static toBufferedReader(reader: java.io.Reader): java.io.BufferedReader;
					/** @deprecated */
					public static toCharArray(inputStream: java.io.InputStream): string[];
					public static toInputStream(input: string, charset: java.nio.charset.Charset): java.io.InputStream;
					public static readFully(input: java.io.InputStream, length: number): number[];
					public static read(input: java.nio.channels.ReadableByteChannel, buffer: java.nio.ByteBuffer): number;
					public static write(data: string[], output: java.io.OutputStream, charset: java.nio.charset.Charset): void;
					public static copy(reader: java.io.Reader, writer: java.io.Writer): number;
					public static copy(url: java.net.URL, outputStream: java.io.OutputStream): number;
					public static byteArray(): number[];
					public static lineIterator(input: java.io.InputStream, charset: java.nio.charset.Charset): org.apache.commons.io.LineIterator;
					public static readFully(reader: java.io.Reader, buffer: string[]): void;
					public static toByteArray(input: java.io.InputStream, size: number): number[];
					public static close(closeable: java.io.Closeable): void;
					public static readFully(input: java.io.InputStream, buffer: number[], offset: number, length: number): void;
					public static skipFully(reader: java.io.Reader, toSkip: number): void;
					public static toString(input: org.apache.commons.io.function.IOSupplier<java.io.InputStream>, charset: java.nio.charset.Charset, defaultString: org.apache.commons.io.function.IOSupplier<string>): string;
					/** @deprecated */
					public constructor();
					/** @deprecated */
					public static toString(uri: java.net.URI): string;
					public static closeQuietly(selector: java.nio.channels.Selector): void;
					public static lineIterator(reader: java.io.Reader): org.apache.commons.io.LineIterator;
					/** @deprecated */
					public static toString(url: java.net.URL): string;
					public static toString(url: java.net.URL, encoding: java.nio.charset.Charset): string;
					public static close(closeable: java.io.Closeable, consumer: org.apache.commons.io.function.IOConsumer<java.io.IOException>): void;
					public static copyLarge(reader: java.io.Reader, writer: java.io.Writer, inputOffset: number, param3: number): number;
					public static copy(input: java.io.InputStream, writer: java.io.Writer, inputCharset: java.nio.charset.Charset): void;
					public static buffer(inputStream: java.io.InputStream): java.io.BufferedInputStream;
					public static toByteArray(inputStream: java.io.InputStream): number[];
					public static toString(input: java.io.InputStream, charset: java.nio.charset.Charset): string;
					public static copy(url: java.net.URL, file: java.io.File): number;
					public static writeLines(lines: java.util.Collection<any>, lineEnding: string, output: java.io.OutputStream, charsetName: string): void;
					public static length(csq: string): number;
					public static buffer(outputStream: java.io.OutputStream, size: number): java.io.BufferedOutputStream;
					public static closeQuietly(closeable: java.io.Closeable): void;
					/** @deprecated */
					public static write(data: java.lang.StringBuffer, output: java.io.OutputStream, charsetName: string): void;
					public static readLines(input: java.io.InputStream, charset: java.nio.charset.Charset): java.util.List<string>;
					public static write(data: number[], writer: java.io.Writer, charsetName: string): void;
					public static writeLines(lines: java.util.Collection<any>, lineEnding: string, output: java.io.OutputStream, charset: java.nio.charset.Charset): void;
					public static write(data: string, writer: java.io.Writer): void;
					public static copy(inputStream: java.io.InputStream, outputStream: java.io.OutputStream, bufferSize: number): number;
					public static copy(input: java.io.InputStream, writer: java.io.Writer, inputCharsetName: string): void;
					public static copy(reader: java.io.Reader, output: java.io.OutputStream, outputCharset: java.nio.charset.Charset): void;
					public static lineIterator(input: java.io.InputStream, charsetName: string): org.apache.commons.io.LineIterator;
					public static toByteArray(urlConnection: java.net.URLConnection): number[];
					public static resourceToURL(name: string): java.net.URL;
					public static copyLarge(inputStream: java.io.InputStream, outputStream: java.io.OutputStream): number;
					public static skipFully(input: java.io.InputStream, toSkip: number, param2: any /* any<number[]>*/): void;
					public static toByteArray(reader: java.io.Reader, charsetName: string): number[];
					public static toCharArray(inputStream: java.io.InputStream, charsetName: string): string[];
					public toString(): string;
					public static toByteArray(reader: java.io.Reader, charset: java.nio.charset.Charset): number[];
					public static closeQuietly(socket: java.net.Socket): void;
					public static toCharArray(reader: java.io.Reader): string[];
					public static copy(reader: java.io.Reader, output: java.lang.Appendable): number;
					public static buffer(reader: java.io.Reader): java.io.BufferedReader;
					public static toString(url: java.net.URL, charsetName: string): string;
					public static closeQuietly(serverSocket: java.net.ServerSocket): void;
					public static toString(reader: java.io.Reader): string;
					public static buffer(writer: java.io.Writer, size: number): java.io.BufferedWriter;
					/** @deprecated */
					public static toByteArray(input: string): number[];
					/** @deprecated */
					public static copy(input: java.io.InputStream, writer: java.io.Writer): void;
					public static closeQuietly(writer: java.io.Writer): void;
					public static close(...closeables: java.io.Closeable[]): void;
					public static resourceToByteArray(name: string): number[];
					public static write(data: number[], output: java.io.OutputStream): void;
					public static closeQuietly(closeable: java.io.Closeable, consumer: any /* any*/): void;
					public static closeQuietly(output: java.io.OutputStream): void;
					public static readLines(input: java.io.InputStream, charsetName: string): java.util.List<string>;
					public static buffer(writer: java.io.Writer): java.io.BufferedWriter;
					/** @deprecated */
					public static copy(reader: java.io.Reader, output: java.io.OutputStream): void;
					public static copyLarge(reader: java.io.Reader, writer: java.io.Writer, inputOffset: number, param3: number, length: string[]): number;
					public static read(reader: java.io.Reader, buffer: string[]): number;
					public static read(input: java.io.InputStream, buffer: number[], offset: number, length: number): number;
					public static toString(input: org.apache.commons.io.function.IOSupplier<java.io.InputStream>, charset: java.nio.charset.Charset): string;
					public static skipFully(input: java.nio.channels.ReadableByteChannel, toSkip: number): void;
					public static buffer(inputStream: java.io.InputStream, size: number): java.io.BufferedInputStream;
					public static closeQuietly(...closeables: java.io.Closeable[]): void;
					public static toByteArray(uri: java.net.URI): number[];
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class LineIterator extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.LineIterator>;
					public constructor(reader: java.io.Reader);
					public close(): void;
					public isValidLine(line: string): boolean;
					public nextLine(): string;
					/** @deprecated */
					public static closeQuietly(iterator: org.apache.commons.io.LineIterator): void;
					public next(): string;
					public hasNext(): boolean;
					public remove(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class RandomAccessFileMode {
					public static class: java.lang.Class<org.apache.commons.io.RandomAccessFileMode>;
					public static READ_ONLY: org.apache.commons.io.RandomAccessFileMode;
					public static READ_WRITE: org.apache.commons.io.RandomAccessFileMode;
					public static READ_WRITE_SYNC_ALL: org.apache.commons.io.RandomAccessFileMode;
					public static READ_WRITE_SYNC_CONTENT: org.apache.commons.io.RandomAccessFileMode;
					public static values(): org.apache.commons.io.RandomAccessFileMode[];
					public create(file: java.io.File): java.io.RandomAccessFile;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.apache.commons.io.RandomAccessFileMode;
					public create(file: string): java.io.RandomAccessFile;
					public create(file: java.nio.file.Path): java.io.RandomAccessFile;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class RandomAccessFiles extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.RandomAccessFiles>;
					public static read(input: java.io.RandomAccessFile, position: number, param2: number): number[];
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class StandardLineSeparator {
					public static class: java.lang.Class<org.apache.commons.io.StandardLineSeparator>;
					public static CR: org.apache.commons.io.StandardLineSeparator;
					public static CRLF: org.apache.commons.io.StandardLineSeparator;
					public static LF: org.apache.commons.io.StandardLineSeparator;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.apache.commons.io.StandardLineSeparator;
					public getBytes(charset: java.nio.charset.Charset): number[];
					public static values(): org.apache.commons.io.StandardLineSeparator[];
					public getString(): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class StreamIterator<E>  extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.StreamIterator<any>>;
					public close(): void;
					public static iterator(stream: java.util.stream.Stream): java.util.Iterator<any>;
					public next(): E;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class TaggedIOException extends org.apache.commons.io.IOExceptionWithCause {
					public static class: java.lang.Class<org.apache.commons.io.TaggedIOException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public static isTaggedWith(throwable: java.lang.Throwable, tag: any): boolean;
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public getTag(): java.io.Serializable;
					public static throwCauseIfTaggedWith(throwable: java.lang.Throwable, tag: any): void;
					public getCause(): java.lang.Throwable;
					public constructor(original: java.io.IOException, tag: java.io.Serializable);
					public constructor(message: string, cause: java.lang.Throwable);
					public getCause(): java.io.IOException;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class ThreadMonitor extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<org.apache.commons.io.ThreadMonitor>;
					public run(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class ThreadUtils extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.ThreadUtils>;
					public static sleep(duration: java.time.Duration): void;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export class UncheckedIOExceptions extends java.lang.Object {
					public static class: java.lang.Class<org.apache.commons.io.UncheckedIOExceptions>;
					public static wrap(e: java.io.IOException, message: any): java.io.UncheckedIOException;
					public static create(message: any): java.io.UncheckedIOException;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module build {
					export abstract class AbstractOrigin<T, B>  extends org.apache.commons.io.build.AbstractSupplier<any,any> {
						public static class: java.lang.Class<org.apache.commons.io.build.AbstractOrigin<any,any>>;
						public getCharSequence(charset: java.nio.charset.Charset): string;
						public constructor();
						public constructor(origin: any);
						public getOutputStream(...options: java.nio.file.OpenOption[]): java.io.OutputStream;
						public getByteArray(position: number, param1: number): number[];
						public getPath(): java.nio.file.Path;
						public getByteArray(): number[];
						public get(): any;
						public getWriter(charset: java.nio.charset.Charset, ...options: java.nio.file.OpenOption[]): java.io.Writer;
						public toString(): string;
						public getReader(charset: java.nio.charset.Charset): java.io.Reader;
						public asSupplier(): any /* any*/;
						public getInputStream(...options: java.nio.file.OpenOption[]): java.io.InputStream;
						public getFile(): java.io.File;
						public size(): number;
					}
					export module AbstractOrigin {
						export class ByteArrayOrigin extends org.apache.commons.io.build.AbstractOrigin<number[],org.apache.commons.io.build.AbstractOrigin.ByteArrayOrigin> {
							public static class: java.lang.Class<org.apache.commons.io.build.AbstractOrigin.ByteArrayOrigin>;
							public constructor();
							public get(): any;
							public size(): number;
							public constructor(origin: any);
							public getByteArray(): number[];
							public getByteArray(position: number, param1: number): number[];
							public getInputStream(...options: java.nio.file.OpenOption[]): java.io.InputStream;
							public getReader(charset: java.nio.charset.Charset): java.io.Reader;
							public asSupplier(): any /* any*/;
							public constructor(origin: number[]);
						}
						export class CharSequenceOrigin extends org.apache.commons.io.build.AbstractOrigin<string,org.apache.commons.io.build.AbstractOrigin.CharSequenceOrigin> {
							public static class: java.lang.Class<org.apache.commons.io.build.AbstractOrigin.CharSequenceOrigin>;
							public constructor();
							public get(): any;
							public getCharSequence(charset: java.nio.charset.Charset): string;
							public size(): number;
							public constructor(origin: any);
							public getByteArray(): number[];
							public getByteArray(position: number, param1: number): number[];
							public getInputStream(...options: java.nio.file.OpenOption[]): java.io.InputStream;
							public constructor(origin: string);
							public getReader(charset: java.nio.charset.Charset): java.io.Reader;
							public asSupplier(): any /* any*/;
						}
						export class FileOrigin extends org.apache.commons.io.build.AbstractOrigin<java.io.File,org.apache.commons.io.build.AbstractOrigin.FileOrigin> {
							public static class: java.lang.Class<org.apache.commons.io.build.AbstractOrigin.FileOrigin>;
							public constructor();
							public get(): any;
							public getPath(): java.nio.file.Path;
							public constructor(origin: any);
							public getByteArray(): number[];
							public getByteArray(position: number, param1: number): number[];
							public getFile(): java.io.File;
							public constructor(origin: java.io.File);
							public asSupplier(): any /* any*/;
						}
						export class InputStreamOrigin extends org.apache.commons.io.build.AbstractOrigin<java.io.InputStream,org.apache.commons.io.build.AbstractOrigin.InputStreamOrigin> {
							public static class: java.lang.Class<org.apache.commons.io.build.AbstractOrigin.InputStreamOrigin>;
							public constructor();
							public get(): any;
							public constructor(origin: any);
							public constructor(origin: java.io.InputStream);
							public getByteArray(): number[];
							public getByteArray(position: number, param1: number): number[];
							public getInputStream(...options: java.nio.file.OpenOption[]): java.io.InputStream;
							public getReader(charset: java.nio.charset.Charset): java.io.Reader;
							public asSupplier(): any /* any*/;
						}
						export class OutputStreamOrigin extends org.apache.commons.io.build.AbstractOrigin<java.io.OutputStream,org.apache.commons.io.build.AbstractOrigin.OutputStreamOrigin> {
							public static class: java.lang.Class<org.apache.commons.io.build.AbstractOrigin.OutputStreamOrigin>;
							public constructor();
							public get(): any;
							public constructor(origin: any);
							public constructor(origin: java.io.OutputStream);
							public getOutputStream(...options: java.nio.file.OpenOption[]): java.io.OutputStream;
							public getWriter(charset: java.nio.charset.Charset, ...options: java.nio.file.OpenOption[]): java.io.Writer;
							public asSupplier(): any /* any*/;
						}
						export class PathOrigin extends org.apache.commons.io.build.AbstractOrigin<java.nio.file.Path,org.apache.commons.io.build.AbstractOrigin.PathOrigin> {
							public static class: java.lang.Class<org.apache.commons.io.build.AbstractOrigin.PathOrigin>;
							public constructor();
							public get(): any;
							public constructor(origin: java.nio.file.Path);
							public getPath(): java.nio.file.Path;
							public constructor(origin: any);
							public getByteArray(): number[];
							public getByteArray(position: number, param1: number): number[];
							public getFile(): java.io.File;
							public asSupplier(): any /* any*/;
						}
						export class ReaderOrigin extends org.apache.commons.io.build.AbstractOrigin<java.io.Reader,org.apache.commons.io.build.AbstractOrigin.ReaderOrigin> {
							public static class: java.lang.Class<org.apache.commons.io.build.AbstractOrigin.ReaderOrigin>;
							public constructor();
							public get(): any;
							public getCharSequence(charset: java.nio.charset.Charset): string;
							public constructor(origin: any);
							public getByteArray(): number[];
							public getByteArray(position: number, param1: number): number[];
							public getInputStream(...options: java.nio.file.OpenOption[]): java.io.InputStream;
							public getReader(charset: java.nio.charset.Charset): java.io.Reader;
							public asSupplier(): any /* any*/;
							public constructor(origin: java.io.Reader);
						}
						export class URIOrigin extends org.apache.commons.io.build.AbstractOrigin<java.net.URI,org.apache.commons.io.build.AbstractOrigin.URIOrigin> {
							public static class: java.lang.Class<org.apache.commons.io.build.AbstractOrigin.URIOrigin>;
							public constructor();
							public get(): any;
							public getPath(): java.nio.file.Path;
							public constructor(origin: any);
							public constructor(origin: java.net.URI);
							public getFile(): java.io.File;
							public asSupplier(): any /* any*/;
						}
						export class WriterOrigin extends org.apache.commons.io.build.AbstractOrigin<java.io.Writer,org.apache.commons.io.build.AbstractOrigin.WriterOrigin> {
							public static class: java.lang.Class<org.apache.commons.io.build.AbstractOrigin.WriterOrigin>;
							public constructor();
							public get(): any;
							public constructor(origin: any);
							public getOutputStream(...options: java.nio.file.OpenOption[]): java.io.OutputStream;
							public getWriter(charset: java.nio.charset.Charset, ...options: java.nio.file.OpenOption[]): java.io.Writer;
							public asSupplier(): any /* any*/;
							public constructor(origin: java.io.Writer);
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module build {
					export abstract class AbstractOriginSupplier<T, B>  extends org.apache.commons.io.build.AbstractSupplier<any,any> {
						public static class: java.lang.Class<org.apache.commons.io.build.AbstractOriginSupplier<any,any>>;
						public setByteArray(origin: number[]): any;
						public setPath(origin: string): any;
						public static newPathOrigin(origin: string): org.apache.commons.io.build.AbstractOrigin.PathOrigin;
						public hasOrigin(): boolean;
						public setURI(origin: java.net.URI): any;
						public setFile(origin: java.io.File): any;
						public static newURIOrigin(origin: java.net.URI): org.apache.commons.io.build.AbstractOrigin.URIOrigin;
						public setInputStream(origin: java.io.InputStream): any;
						public setFile(origin: string): any;
						public get(): any;
						public setOrigin(origin: org.apache.commons.io.build.AbstractOrigin<any,any>): any;
						public setPath(origin: java.nio.file.Path): any;
						public static newReaderOrigin(origin: java.io.Reader): org.apache.commons.io.build.AbstractOrigin.ReaderOrigin;
						public asSupplier(): any /* any*/;
						public static newCharSequenceOrigin(origin: string): org.apache.commons.io.build.AbstractOrigin.CharSequenceOrigin;
						public setOutputStream(origin: java.io.OutputStream): any;
						public static newWriterOrigin(origin: java.io.Writer): org.apache.commons.io.build.AbstractOrigin.WriterOrigin;
						public setWriter(origin: java.io.Writer): any;
						public static newInputStreamOrigin(origin: java.io.InputStream): org.apache.commons.io.build.AbstractOrigin.InputStreamOrigin;
						public static newFileOrigin(origin: string): org.apache.commons.io.build.AbstractOrigin.FileOrigin;
						public constructor();
						public static newOutputStreamOrigin(origin: java.io.OutputStream): org.apache.commons.io.build.AbstractOrigin.OutputStreamOrigin;
						public setReader(origin: java.io.Reader): any;
						public static newPathOrigin(origin: java.nio.file.Path): org.apache.commons.io.build.AbstractOrigin.PathOrigin;
						public static newFileOrigin(origin: java.io.File): org.apache.commons.io.build.AbstractOrigin.FileOrigin;
						public static newByteArrayOrigin(origin: number[]): org.apache.commons.io.build.AbstractOrigin.ByteArrayOrigin;
						public checkOrigin(): org.apache.commons.io.build.AbstractOrigin<any,any>;
						public getOrigin(): org.apache.commons.io.build.AbstractOrigin<any,any>;
						public setCharSequence(origin: string): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module build {
					export abstract class AbstractStreamBuilder<T, B>  extends org.apache.commons.io.build.AbstractOriginSupplier<any,any> {
						public static class: java.lang.Class<org.apache.commons.io.build.AbstractStreamBuilder<any,any>>;
						public constructor();
						public setBufferSize(bufferSize: number): any;
						public setBufferSize(bufferSize: java.lang.Integer): any;
						public getWriter(): java.io.Writer;
						public setBufferSizeDefault(bufferSizeDefault: number): any;
						public getPath(): java.nio.file.Path;
						public getCharsetDefault(): java.nio.charset.Charset;
						public getInputStream(): java.io.InputStream;
						public setCharsetDefault(defaultCharset: java.nio.charset.Charset): any;
						public getCharSequence(): string;
						public get(): any;
						public setBufferSizeMax(bufferSizeMax: number): any;
						public getOutputStream(): java.io.OutputStream;
						public getOpenOptions(): java.nio.file.OpenOption[];
						public setCharset(charset: java.nio.charset.Charset): any;
						public asSupplier(): any /* any*/;
						public setOpenOptions(...openOptions: java.nio.file.OpenOption[]): any;
						public getCharset(): java.nio.charset.Charset;
						public setCharset(charset: string): any;
						public getBufferSize(): number;
						public setBufferSizeChecker(bufferSizeChecker: any /* any*/): any;
						public getBufferSizeDefault(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module build {
					export abstract class AbstractSupplier<T, B>  extends org.apache.commons.io.function.IOSupplier<any> {
						public static class: java.lang.Class<org.apache.commons.io.build.AbstractSupplier<any,any>>;
						public constructor();
						public asSupplier(): any /* any*/;
						public asThis(): any;
						public get(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module charset {
					export class CharsetDecoders extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.charset.CharsetDecoders>;
						public static toCharsetDecoder(charsetDecoder: java.nio.charset.CharsetDecoder): java.nio.charset.CharsetDecoder;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module charset {
					export class CharsetEncoders extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.charset.CharsetEncoders>;
						public static toCharsetEncoder(charsetEncoder: java.nio.charset.CharsetEncoder, defaultSupplier: any /* any*/): java.nio.charset.CharsetEncoder;
						public static toCharsetEncoder(charsetEncoder: java.nio.charset.CharsetEncoder): java.nio.charset.CharsetEncoder;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module comparator {
					export abstract class AbstractFileComparator extends java.util.Comparator<java.io.File> {
						public static class: java.lang.Class<org.apache.commons.io.comparator.AbstractFileComparator>;
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public sort(files: java.util.List<java.io.File>): java.util.List<java.io.File>;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public toString(): string;
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
						public sort(...files: java.io.File[]): java.io.File[];
						public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module comparator {
					export class CompositeFileComparator extends org.apache.commons.io.comparator.AbstractFileComparator implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.comparator.CompositeFileComparator>;
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(file1: java.io.File, file2: java.io.File): number;
						public equals(param0: any): boolean;
						public constructor(...delegates: java.util.Comparator<java.io.File>[]);
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public toString(): string;
						public constructor(delegates: java.lang.Iterable<java.util.Comparator<java.io.File>>);
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
		export module commons {
			export module io {
				export module comparator {
					export class DefaultFileComparator extends org.apache.commons.io.comparator.AbstractFileComparator implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.comparator.DefaultFileComparator>;
						public static DEFAULT_COMPARATOR: java.util.Comparator<java.io.File>;
						public static DEFAULT_REVERSE: java.util.Comparator<java.io.File>;
						public constructor();
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(file1: java.io.File, file2: java.io.File): number;
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
						public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module comparator {
					export class DirectoryFileComparator extends org.apache.commons.io.comparator.AbstractFileComparator implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.comparator.DirectoryFileComparator>;
						public static DIRECTORY_COMPARATOR: java.util.Comparator<java.io.File>;
						public static DIRECTORY_REVERSE: java.util.Comparator<java.io.File>;
						public constructor();
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(file1: java.io.File, file2: java.io.File): number;
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
						public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module comparator {
					export class ExtensionFileComparator extends org.apache.commons.io.comparator.AbstractFileComparator implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.comparator.ExtensionFileComparator>;
						public static EXTENSION_COMPARATOR: java.util.Comparator<java.io.File>;
						public static EXTENSION_REVERSE: java.util.Comparator<java.io.File>;
						public static EXTENSION_INSENSITIVE_COMPARATOR: java.util.Comparator<java.io.File>;
						public static EXTENSION_INSENSITIVE_REVERSE: java.util.Comparator<java.io.File>;
						public static EXTENSION_SYSTEM_COMPARATOR: java.util.Comparator<java.io.File>;
						public static EXTENSION_SYSTEM_REVERSE: java.util.Comparator<java.io.File>;
						public constructor();
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(file1: java.io.File, file2: java.io.File): number;
						public equals(param0: any): boolean;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public toString(): string;
						public reversed(): java.util.Comparator<any>;
						public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public constructor(ioCase: org.apache.commons.io.IOCase);
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
		export module commons {
			export module io {
				export module comparator {
					export class LastModifiedFileComparator extends org.apache.commons.io.comparator.AbstractFileComparator implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.comparator.LastModifiedFileComparator>;
						public static LASTMODIFIED_COMPARATOR: java.util.Comparator<java.io.File>;
						public static LASTMODIFIED_REVERSE: java.util.Comparator<java.io.File>;
						public constructor();
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(file1: java.io.File, file2: java.io.File): number;
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
						public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module comparator {
					export class NameFileComparator extends org.apache.commons.io.comparator.AbstractFileComparator implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.comparator.NameFileComparator>;
						public static NAME_COMPARATOR: java.util.Comparator<java.io.File>;
						public static NAME_REVERSE: java.util.Comparator<java.io.File>;
						public static NAME_INSENSITIVE_COMPARATOR: java.util.Comparator<java.io.File>;
						public static NAME_INSENSITIVE_REVERSE: java.util.Comparator<java.io.File>;
						public static NAME_SYSTEM_COMPARATOR: java.util.Comparator<java.io.File>;
						public static NAME_SYSTEM_REVERSE: java.util.Comparator<java.io.File>;
						public constructor();
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(file1: java.io.File, file2: java.io.File): number;
						public equals(param0: any): boolean;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public toString(): string;
						public reversed(): java.util.Comparator<any>;
						public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public constructor(ioCase: org.apache.commons.io.IOCase);
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
		export module commons {
			export module io {
				export module comparator {
					export class PathFileComparator extends org.apache.commons.io.comparator.AbstractFileComparator implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.comparator.PathFileComparator>;
						public static PATH_COMPARATOR: java.util.Comparator<java.io.File>;
						public static PATH_REVERSE: java.util.Comparator<java.io.File>;
						public static PATH_INSENSITIVE_COMPARATOR: java.util.Comparator<java.io.File>;
						public static PATH_INSENSITIVE_REVERSE: java.util.Comparator<java.io.File>;
						public static PATH_SYSTEM_COMPARATOR: java.util.Comparator<java.io.File>;
						public static PATH_SYSTEM_REVERSE: java.util.Comparator<java.io.File>;
						public constructor();
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(file1: java.io.File, file2: java.io.File): number;
						public equals(param0: any): boolean;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public toString(): string;
						public reversed(): java.util.Comparator<any>;
						public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public constructor(ioCase: org.apache.commons.io.IOCase);
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
		export module commons {
			export module io {
				export module comparator {
					export class ReverseFileComparator extends org.apache.commons.io.comparator.AbstractFileComparator implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.comparator.ReverseFileComparator>;
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(file1: java.io.File, file2: java.io.File): number;
						public equals(param0: any): boolean;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public toString(): string;
						public reversed(): java.util.Comparator<any>;
						public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public constructor(delegate: java.util.Comparator<java.io.File>);
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
		export module commons {
			export module io {
				export module comparator {
					export class SizeFileComparator extends org.apache.commons.io.comparator.AbstractFileComparator implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.comparator.SizeFileComparator>;
						public static SIZE_COMPARATOR: java.util.Comparator<java.io.File>;
						public static SIZE_REVERSE: java.util.Comparator<java.io.File>;
						public static SIZE_SUMDIR_COMPARATOR: java.util.Comparator<java.io.File>;
						public static SIZE_SUMDIR_REVERSE: java.util.Comparator<java.io.File>;
						public constructor();
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public compare(file1: java.io.File, file2: java.io.File): number;
						public equals(param0: any): boolean;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public constructor(sumDirectoryContents: boolean);
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public toString(): string;
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
		export module commons {
			export module io {
				export module file {
					export class AccumulatorPathVisitor extends org.apache.commons.io.file.CountingPathVisitor {
						public static class: java.lang.Class<org.apache.commons.io.file.AccumulatorPathVisitor>;
						public updateDirCounter(dir: java.nio.file.Path, exc: java.io.IOException): void;
						public postVisitDirectory(dir: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public equals(obj: any): boolean;
						public getDirList(): java.util.List<java.nio.file.Path>;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public hashCode(): number;
						public relativizeDirectories(parent: java.nio.file.Path, sort: boolean, comparator: java.util.Comparator<any>): java.util.List<java.nio.file.Path>;
						public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public getFileList(): java.util.List<java.nio.file.Path>;
						public static withLongCounters(fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter): org.apache.commons.io.file.AccumulatorPathVisitor;
						public constructor(visitFileFailed: org.apache.commons.io.function.IOBiFunction<java.nio.file.Path,java.io.IOException,java.nio.file.FileVisitResult>);
						public visitFile(file: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public static withBigIntegerCounters(): org.apache.commons.io.file.AccumulatorPathVisitor;
						public static withBigIntegerCounters(fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter): org.apache.commons.io.file.AccumulatorPathVisitor;
						public constructor();
						public visitFileFailed(file: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter, visitFileFailed: org.apache.commons.io.function.IOBiFunction<java.nio.file.Path,java.io.IOException,java.nio.file.FileVisitResult>);
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter);
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(dir: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public relativizeFiles(parent: java.nio.file.Path, sort: boolean, comparator: java.util.Comparator<any>): java.util.List<java.nio.file.Path>;
						public static withLongCounters(): org.apache.commons.io.file.AccumulatorPathVisitor;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters);
						public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public static withLongCounters(): org.apache.commons.io.file.CountingPathVisitor;
						public static withBigIntegerCounters(): org.apache.commons.io.file.CountingPathVisitor;
						public visitFile(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public updateFileCounters(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class CleaningPathVisitor extends org.apache.commons.io.file.CountingPathVisitor {
						public static class: java.lang.Class<org.apache.commons.io.file.CleaningPathVisitor>;
						public postVisitDirectory(dir: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor();
						public equals(obj: any): boolean;
						public visitFileFailed(file: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public hashCode(): number;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, ...skip: string[]);
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter, visitFileFailed: org.apache.commons.io.function.IOBiFunction<java.nio.file.Path,java.io.IOException,java.nio.file.FileVisitResult>);
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter);
						public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, deleteOption: org.apache.commons.io.file.DeleteOption[], ...skip: string[]);
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(dir: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters);
						public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public static withLongCounters(): org.apache.commons.io.file.CountingPathVisitor;
						public constructor(visitFileFailed: org.apache.commons.io.function.IOBiFunction<java.nio.file.Path,java.io.IOException,java.nio.file.FileVisitResult>);
						public static withBigIntegerCounters(): org.apache.commons.io.file.CountingPathVisitor;
						public visitFile(file: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class CopyDirectoryVisitor extends org.apache.commons.io.file.CountingPathVisitor {
						public static class: java.lang.Class<org.apache.commons.io.file.CopyDirectoryVisitor>;
						public postVisitDirectory(dir: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public equals(obj: any): boolean;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public hashCode(): number;
						public getCopyOptions(): java.nio.file.CopyOption[];
						public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public preVisitDirectory(directory: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(visitFileFailed: org.apache.commons.io.function.IOBiFunction<java.nio.file.Path,java.io.IOException,java.nio.file.FileVisitResult>);
						public visitFile(file: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor();
						public visitFileFailed(file: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public getTargetDirectory(): java.nio.file.Path;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter, visitFileFailed: org.apache.commons.io.function.IOBiFunction<java.nio.file.Path,java.io.IOException,java.nio.file.FileVisitResult>);
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter);
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter, sourceDirectory: java.nio.file.Path, targetDirectory: java.nio.file.Path, ...copyOptions: java.nio.file.CopyOption[]);
						public copy(sourceFile: java.nio.file.Path, targetFile: java.nio.file.Path): void;
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(dir: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(sourceFile: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, sourceDirectory: java.nio.file.Path, targetDirectory: java.nio.file.Path, ...copyOptions: java.nio.file.CopyOption[]);
						public getSourceDirectory(): java.nio.file.Path;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters);
						public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public visitFile(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class Counters extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.file.Counters>;
						public static bigIntegerCounter(): org.apache.commons.io.file.Counters.Counter;
						public static bigIntegerPathCounters(): org.apache.commons.io.file.Counters.PathCounters;
						public constructor();
						public static noopPathCounters(): org.apache.commons.io.file.Counters.PathCounters;
						public static noopCounter(): org.apache.commons.io.file.Counters.Counter;
						public static longCounter(): org.apache.commons.io.file.Counters.Counter;
						public static longPathCounters(): org.apache.commons.io.file.Counters.PathCounters;
					}
					export module Counters {
						export class AbstractPathCounters extends java.lang.Object implements org.apache.commons.io.file.Counters.PathCounters {
							public static class: java.lang.Class<org.apache.commons.io.file.Counters.AbstractPathCounters>;
							public getFileCounter(): org.apache.commons.io.file.Counters.Counter;
							public hashCode(): number;
							public getByteCounter(): org.apache.commons.io.file.Counters.Counter;
							public equals(obj: any): boolean;
							public toString(): string;
							public constructor(byteCounter: org.apache.commons.io.file.Counters.Counter, directoryCounter: org.apache.commons.io.file.Counters.Counter, fileCounter: org.apache.commons.io.file.Counters.Counter);
							public getDirectoryCounter(): org.apache.commons.io.file.Counters.Counter;
							public reset(): void;
						}
						export class BigIntegerCounter extends java.lang.Object implements org.apache.commons.io.file.Counters.Counter {
							public static class: java.lang.Class<org.apache.commons.io.file.Counters.BigIntegerCounter>;
							public increment(): void;
							public add(param0: number): void;
							public get(): number;
							public hashCode(): number;
							public equals(obj: any): boolean;
							public add(val: number): void;
							public toString(): string;
							public getBigInteger(): java.math.BigInteger;
							public getLong(): java.lang.Long;
							public reset(): void;
						}
						export class BigIntegerPathCounters extends org.apache.commons.io.file.Counters.AbstractPathCounters {
							public static class: java.lang.Class<org.apache.commons.io.file.Counters.BigIntegerPathCounters>;
							public constructor();
							public getFileCounter(): org.apache.commons.io.file.Counters.Counter;
							public getByteCounter(): org.apache.commons.io.file.Counters.Counter;
							public constructor(byteCounter: org.apache.commons.io.file.Counters.Counter, directoryCounter: org.apache.commons.io.file.Counters.Counter, fileCounter: org.apache.commons.io.file.Counters.Counter);
							public getDirectoryCounter(): org.apache.commons.io.file.Counters.Counter;
							public reset(): void;
						}
						export class Counter extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.io.file.Counters.Counter>;
							/**
							 * Constructs a new instance of the org.apache.commons.io.file.Counters$Counter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								add(param0: number): void;
								get(): number;
								getBigInteger(): java.math.BigInteger;
								getLong(): java.lang.Long;
								increment(): void;
								reset(): void;
							});
							public constructor();
							public increment(): void;
							public add(param0: number): void;
							public get(): number;
							public getBigInteger(): java.math.BigInteger;
							public getLong(): java.lang.Long;
							public reset(): void;
						}
						export class LongCounter extends java.lang.Object implements org.apache.commons.io.file.Counters.Counter {
							public static class: java.lang.Class<org.apache.commons.io.file.Counters.LongCounter>;
							public increment(): void;
							public add(param0: number): void;
							public get(): number;
							public hashCode(): number;
							public add(add: number): void;
							public equals(obj: any): boolean;
							public toString(): string;
							public getBigInteger(): java.math.BigInteger;
							public getLong(): java.lang.Long;
							public reset(): void;
						}
						export class LongPathCounters extends org.apache.commons.io.file.Counters.AbstractPathCounters {
							public static class: java.lang.Class<org.apache.commons.io.file.Counters.LongPathCounters>;
							public constructor();
							public getFileCounter(): org.apache.commons.io.file.Counters.Counter;
							public getByteCounter(): org.apache.commons.io.file.Counters.Counter;
							public constructor(byteCounter: org.apache.commons.io.file.Counters.Counter, directoryCounter: org.apache.commons.io.file.Counters.Counter, fileCounter: org.apache.commons.io.file.Counters.Counter);
							public getDirectoryCounter(): org.apache.commons.io.file.Counters.Counter;
							public reset(): void;
						}
						export class NoopCounter extends java.lang.Object implements org.apache.commons.io.file.Counters.Counter {
							public static class: java.lang.Class<org.apache.commons.io.file.Counters.NoopCounter>;
							public increment(): void;
							public add(param0: number): void;
							public get(): number;
							public add(add: number): void;
							public toString(): string;
							public getBigInteger(): java.math.BigInteger;
							public getLong(): java.lang.Long;
							public reset(): void;
						}
						export class NoopPathCounters extends org.apache.commons.io.file.Counters.AbstractPathCounters {
							public static class: java.lang.Class<org.apache.commons.io.file.Counters.NoopPathCounters>;
							public getFileCounter(): org.apache.commons.io.file.Counters.Counter;
							public getByteCounter(): org.apache.commons.io.file.Counters.Counter;
							public getDirectoryCounter(): org.apache.commons.io.file.Counters.Counter;
							public reset(): void;
						}
						export class PathCounters extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.io.file.Counters.PathCounters>;
							/**
							 * Constructs a new instance of the org.apache.commons.io.file.Counters$PathCounters interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getByteCounter(): org.apache.commons.io.file.Counters.Counter;
								getDirectoryCounter(): org.apache.commons.io.file.Counters.Counter;
								getFileCounter(): org.apache.commons.io.file.Counters.Counter;
								reset(): void;
							});
							public constructor();
							public getFileCounter(): org.apache.commons.io.file.Counters.Counter;
							public getByteCounter(): org.apache.commons.io.file.Counters.Counter;
							public getDirectoryCounter(): org.apache.commons.io.file.Counters.Counter;
							public reset(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class CountingPathVisitor extends org.apache.commons.io.file.SimplePathVisitor {
						public static class: java.lang.Class<org.apache.commons.io.file.CountingPathVisitor>;
						public postVisitDirectory(dir: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public updateDirCounter(dir: java.nio.file.Path, exc: java.io.IOException): void;
						public equals(obj: any): boolean;
						public getPathCounters(): org.apache.commons.io.file.Counters.PathCounters;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public hashCode(): number;
						public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(visitFileFailed: org.apache.commons.io.function.IOBiFunction<java.nio.file.Path,java.io.IOException,java.nio.file.FileVisitResult>);
						public visitFile(file: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor();
						public visitFileFailed(file: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter, visitFileFailed: org.apache.commons.io.function.IOBiFunction<java.nio.file.Path,java.io.IOException,java.nio.file.FileVisitResult>);
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter);
						public toString(): string;
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(dir: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters);
						public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public static withLongCounters(): org.apache.commons.io.file.CountingPathVisitor;
						public static withBigIntegerCounters(): org.apache.commons.io.file.CountingPathVisitor;
						public visitFile(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public updateFileCounters(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class DeleteOption extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.file.DeleteOption>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.file.DeleteOption interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class DeletingPathVisitor extends org.apache.commons.io.file.CountingPathVisitor {
						public static class: java.lang.Class<org.apache.commons.io.file.DeletingPathVisitor>;
						public postVisitDirectory(dir: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public equals(obj: any): boolean;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public hashCode(): number;
						public static withLongCounters(): org.apache.commons.io.file.DeletingPathVisitor;
						public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, deleteOption: org.apache.commons.io.file.DeleteOption[], ...skip: string[]);
						public static withBigIntegerCounters(): org.apache.commons.io.file.DeletingPathVisitor;
						public constructor(visitFileFailed: org.apache.commons.io.function.IOBiFunction<java.nio.file.Path,java.io.IOException,java.nio.file.FileVisitResult>);
						public visitFile(file: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor();
						public visitFileFailed(file: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, linkOptions: java.nio.file.LinkOption[], deleteOption: org.apache.commons.io.file.DeleteOption[], ...skip: string[]);
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, ...skip: string[]);
						public preVisitDirectory(dir: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter, visitFileFailed: org.apache.commons.io.function.IOBiFunction<java.nio.file.Path,java.io.IOException,java.nio.file.FileVisitResult>);
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, fileFilter: org.apache.commons.io.file.PathFilter, dirFilter: org.apache.commons.io.file.PathFilter);
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(dir: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters);
						public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public static withLongCounters(): org.apache.commons.io.file.CountingPathVisitor;
						public static withBigIntegerCounters(): org.apache.commons.io.file.CountingPathVisitor;
						public visitFile(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class DirectoryStreamFilter extends java.nio.file.DirectoryStream.Filter<java.nio.file.Path> {
						public static class: java.lang.Class<org.apache.commons.io.file.DirectoryStreamFilter>;
						public constructor(pathFilter: org.apache.commons.io.file.PathFilter);
						public accept(param0: any): boolean;
						public getPathFilter(): org.apache.commons.io.file.PathFilter;
						public accept(path: java.nio.file.Path): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class FilesUncheck extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.file.FilesUncheck>;
						public static readAllLines(path: java.nio.file.Path, cs: java.nio.charset.Charset): java.util.List<string>;
						public static readSymbolicLink(link: java.nio.file.Path): java.nio.file.Path;
						public static createTempFile(prefix: string, suffix: string, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path;
						public static write(path: java.nio.file.Path, bytes: number[], ...options: java.nio.file.OpenOption[]): java.nio.file.Path;
						public static newBufferedReader(path: java.nio.file.Path, cs: java.nio.charset.Charset): java.io.BufferedReader;
						public static isHidden(path: java.nio.file.Path): boolean;
						public static newInputStream(path: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): java.io.InputStream;
						public static delete(path: java.nio.file.Path): void;
						public static setOwner(path: java.nio.file.Path, owner: java.nio.file.attribute.UserPrincipal): java.nio.file.Path;
						public static newBufferedWriter(path: java.nio.file.Path, cs: java.nio.charset.Charset, ...options: java.nio.file.OpenOption[]): java.io.BufferedWriter;
						public static createLink(link: java.nio.file.Path, existing: java.nio.file.Path): java.nio.file.Path;
						public static list(dir: java.nio.file.Path): java.util.stream.Stream<java.nio.file.Path>;
						public static newDirectoryStream(dir: java.nio.file.Path, filter: java.nio.file.DirectoryStream.Filter<any>): java.nio.file.DirectoryStream<java.nio.file.Path>;
						public static walk(start: java.nio.file.Path, maxDepth: number, ...options: java.nio.file.FileVisitOption[]): java.util.stream.Stream<java.nio.file.Path>;
						public static getLastModifiedTime(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.FileTime;
						public static walkFileTree(start: java.nio.file.Path, visitor: java.nio.file.FileVisitor<any>): java.nio.file.Path;
						public static copy(_in_: java.io.InputStream, target: java.nio.file.Path, ...options: java.nio.file.CopyOption[]): number;
						public static setLastModifiedTime(path: java.nio.file.Path, time: java.nio.file.attribute.FileTime): java.nio.file.Path;
						public static copy(source: java.nio.file.Path, target: java.nio.file.Path, ...options: java.nio.file.CopyOption[]): java.nio.file.Path;
						public static newByteChannel(path: java.nio.file.Path, options: java.util.Set<any>, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel;
						public static readAllBytes(path: java.nio.file.Path): number[];
						public static move(source: java.nio.file.Path, target: java.nio.file.Path, ...options: java.nio.file.CopyOption[]): java.nio.file.Path;
						public static write(path: java.nio.file.Path, lines: java.lang.Iterable<any>, ...options: java.nio.file.OpenOption[]): java.nio.file.Path;
						public static newByteChannel(path: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): java.nio.channels.SeekableByteChannel;
						public static createSymbolicLink(link: java.nio.file.Path, target: java.nio.file.Path, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path;
						public static readAllLines(path: java.nio.file.Path): java.util.List<string>;
						public static getOwner(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.UserPrincipal;
						public static readAttributes(path: java.nio.file.Path, attributes: string, ...options: java.nio.file.LinkOption[]): java.util.Map<string,any>;
						public static createFile(path: java.nio.file.Path, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path;
						public static createTempFile(dir: java.nio.file.Path, prefix: string, suffix: string, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path;
						public static walk(start: java.nio.file.Path, ...options: java.nio.file.FileVisitOption[]): java.util.stream.Stream<java.nio.file.Path>;
						public static find(start: java.nio.file.Path, maxDepth: number, matcher: any /* any<java.nio.file.Path,java.nio.file.attribute.BasicFileAttributes>*/, ...options: java.nio.file.FileVisitOption[]): java.util.stream.Stream<java.nio.file.Path>;
						public static newDirectoryStream(dir: java.nio.file.Path): java.nio.file.DirectoryStream<java.nio.file.Path>;
						public static createDirectories(dir: java.nio.file.Path, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path;
						public static getFileStore(path: java.nio.file.Path): java.nio.file.FileStore;
						public static newOutputStream(path: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): java.io.OutputStream;
						public static deleteIfExists(path: java.nio.file.Path): boolean;
						public static getPosixFilePermissions(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): java.util.Set<java.nio.file.attribute.PosixFilePermission>;
						public static createTempDirectory(dir: java.nio.file.Path, prefix: string, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path;
						public static lines(path: java.nio.file.Path): java.util.stream.Stream<string>;
						public static createDirectory(dir: java.nio.file.Path, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path;
						public static copy(source: java.nio.file.Path, out: java.io.OutputStream): number;
						public static probeContentType(path: java.nio.file.Path): string;
						public static size(path: java.nio.file.Path): number;
						public static getAttribute(path: java.nio.file.Path, attribute: string, ...options: java.nio.file.LinkOption[]): any;
						public static lines(path: java.nio.file.Path, cs: java.nio.charset.Charset): java.util.stream.Stream<string>;
						public static write(path: java.nio.file.Path, lines: java.lang.Iterable<any>, cs: java.nio.charset.Charset, ...options: java.nio.file.OpenOption[]): java.nio.file.Path;
						public static isSameFile(path: java.nio.file.Path, path2: java.nio.file.Path): boolean;
						public static setAttribute(path: java.nio.file.Path, attribute: string, value: any, ...options: java.nio.file.LinkOption[]): java.nio.file.Path;
						public static newDirectoryStream(dir: java.nio.file.Path, glob: string): java.nio.file.DirectoryStream<java.nio.file.Path>;
						public static setPosixFilePermissions(path: java.nio.file.Path, perms: java.util.Set<java.nio.file.attribute.PosixFilePermission>): java.nio.file.Path;
						public static walkFileTree(start: java.nio.file.Path, options: java.util.Set<java.nio.file.FileVisitOption>, maxDepth: number, visitor: java.nio.file.FileVisitor<any>): java.nio.file.Path;
						public static createTempDirectory(prefix: string, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path;
						public static newBufferedReader(path: java.nio.file.Path): java.io.BufferedReader;
						public static newBufferedWriter(path: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): java.io.BufferedWriter;
						public static readAttributes(path: java.nio.file.Path, type: java.lang.Class<any>, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.BasicFileAttributes;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class NoopPathVisitor extends org.apache.commons.io.file.SimplePathVisitor {
						public static class: java.lang.Class<org.apache.commons.io.file.NoopPathVisitor>;
						public static INSTANCE: org.apache.commons.io.file.NoopPathVisitor;
						public postVisitDirectory(dir: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor();
						public visitFileFailed(file: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor(visitFileFailed: org.apache.commons.io.function.IOBiFunction<java.nio.file.Path,java.io.IOException,java.nio.file.FileVisitResult>);
						public visitFile(file: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class PathFilter extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.file.PathFilter>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.file.PathFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: java.nio.file.Path, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						});
						public constructor();
						public accept(param0: java.nio.file.Path, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class PathUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.file.PathUtils>;
						public static EMPTY_COPY_OPTIONS: java.nio.file.CopyOption[];
						public static EMPTY_DELETE_OPTION_ARRAY: org.apache.commons.io.file.DeleteOption[];
						public static EMPTY_FILE_ATTRIBUTE_ARRAY: java.nio.file.attribute.FileAttribute<any>[];
						public static EMPTY_FILE_VISIT_OPTION_ARRAY: java.nio.file.FileVisitOption[];
						public static EMPTY_LINK_OPTION_ARRAY: java.nio.file.LinkOption[];
						public static NOFOLLOW_LINK_OPTION_ARRAY: java.nio.file.LinkOption[];
						public static EMPTY_OPEN_OPTION_ARRAY: java.nio.file.OpenOption[];
						public static EMPTY_PATH_ARRAY: java.nio.file.Path[];
						public static getLastModifiedFileTime(path: java.nio.file.Path, defaultIfAbsent: java.nio.file.attribute.FileTime, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.FileTime;
						public static isDirectory(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): boolean;
						public static sizeOfDirectoryAsBigInteger(directory: java.nio.file.Path): java.math.BigInteger;
						public static copyFile(sourceFile: java.net.URL, targetFile: java.nio.file.Path, ...copyOptions: java.nio.file.CopyOption[]): java.nio.file.Path;
						public static isNewer(file: java.nio.file.Path, instant: java.time.Instant, ...options: java.nio.file.LinkOption[]): boolean;
						public static visitFileTree(visitor: java.nio.file.FileVisitor, first: string, ...more: string[]): java.nio.file.FileVisitor;
						/** @deprecated */
						public static readBasicFileAttributes(path: java.nio.file.Path): java.nio.file.attribute.BasicFileAttributes;
						public static isOlder(file: java.nio.file.Path, timeMillis: number, ...param2: java.nio.file.LinkOption[]): boolean;
						public static copyFileToDirectory(sourceFile: java.nio.file.Path, targetDirectory: java.nio.file.Path, ...copyOptions: java.nio.file.CopyOption[]): java.nio.file.Path;
						public static isNewer(file: java.nio.file.Path, czdt: java.time.chrono.ChronoZonedDateTime<any>, ...options: java.nio.file.LinkOption[]): boolean;
						public static setReadOnly(path: java.nio.file.Path, readOnly: boolean, ...linkOptions: java.nio.file.LinkOption[]): java.nio.file.Path;
						public static getLastModifiedFileTime(url: java.net.URL): java.nio.file.attribute.FileTime;
						public static setLastModifiedTime(sourceFile: java.nio.file.Path, targetFile: java.nio.file.Path): void;
						public static delete(path: java.nio.file.Path, linkOptions: java.nio.file.LinkOption[], ...deleteOptions: org.apache.commons.io.file.DeleteOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static getTempDirectory(): java.nio.file.Path;
						public static waitFor(file: java.nio.file.Path, timeout: java.time.Duration, ...options: java.nio.file.LinkOption[]): boolean;
						public static deleteDirectory(directory: java.nio.file.Path, ...deleteOptions: org.apache.commons.io.file.DeleteOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static readDosFileAttributes(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.DosFileAttributes;
						public static readOsFileAttributes(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.BasicFileAttributes;
						public static readPosixFileAttributes(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.PosixFileAttributes;
						public static countDirectoryAsBigInteger(directory: java.nio.file.Path): org.apache.commons.io.file.Counters.PathCounters;
						public static filter(filter: org.apache.commons.io.file.PathFilter, ...paths: java.nio.file.Path[]): java.nio.file.Path[];
						public static sizeOfDirectory(directory: java.nio.file.Path): number;
						public static copyDirectory(sourceDirectory: java.nio.file.Path, targetDirectory: java.nio.file.Path, ...copyOptions: java.nio.file.CopyOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static deleteDirectory(directory: java.nio.file.Path, linkOptions: java.nio.file.LinkOption[], ...deleteOptions: org.apache.commons.io.file.DeleteOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static visitFileTree(visitor: java.nio.file.FileVisitor, directory: java.nio.file.Path): java.nio.file.FileVisitor;
						public static createParentDirectories(path: java.nio.file.Path, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path;
						public static walk(start: java.nio.file.Path, pathFilter: org.apache.commons.io.file.PathFilter, maxDepth: number, readAttributes: boolean, ...options: java.nio.file.FileVisitOption[]): java.util.stream.Stream<java.nio.file.Path>;
						public static delete(path: java.nio.file.Path): org.apache.commons.io.file.Counters.PathCounters;
						public static isEmpty(path: java.nio.file.Path): boolean;
						public static copyFileToDirectory(sourceFile: java.net.URL, targetDirectory: java.nio.file.Path, ...copyOptions: java.nio.file.CopyOption[]): java.nio.file.Path;
						public static isEmptyFile(file: java.nio.file.Path): boolean;
						public static touch(file: java.nio.file.Path): java.nio.file.Path;
						public static visitFileTree(visitor: java.nio.file.FileVisitor, start: java.nio.file.Path, options: java.util.Set<any>, maxDepth: number): java.nio.file.FileVisitor;
						public static getLastModifiedFileTime(file: java.io.File): java.nio.file.attribute.FileTime;
						public static getPosixFileAttributeView(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.PosixFileAttributeView;
						public static visitFileTree(visitor: java.nio.file.FileVisitor, uri: java.net.URI): java.nio.file.FileVisitor;
						public static directoryAndFileContentEquals(path1: java.nio.file.Path, path2: java.nio.file.Path): boolean;
						public static isRegularFile(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): boolean;
						public static getLastModifiedFileTime(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.FileTime;
						public static deleteDirectory(directory: java.nio.file.Path): org.apache.commons.io.file.Counters.PathCounters;
						public static isOlder(file: java.nio.file.Path, reference: java.nio.file.Path): boolean;
						public static getAclEntryList(sourcePath: java.nio.file.Path): java.util.List<java.nio.file.attribute.AclEntry>;
						public static isNewer(file: java.nio.file.Path, reference: java.nio.file.Path): boolean;
						public static getLastModifiedFileTime(uri: java.net.URI): java.nio.file.attribute.FileTime;
						public static deleteFile(file: java.nio.file.Path, linkOptions: java.nio.file.LinkOption[], ...deleteOptions: org.apache.commons.io.file.DeleteOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static delete(path: java.nio.file.Path, ...deleteOptions: org.apache.commons.io.file.DeleteOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static directoryContentEquals(path1: java.nio.file.Path, path2: java.nio.file.Path): boolean;
						public static writeString(path: java.nio.file.Path, charSequence: string, charset: java.nio.charset.Charset, ...openOptions: java.nio.file.OpenOption[]): java.nio.file.Path;
						public static cleanDirectory(directory: java.nio.file.Path): org.apache.commons.io.file.Counters.PathCounters;
						public static directoryContentEquals(path1: java.nio.file.Path, path2: java.nio.file.Path, maxDepth: number, linkOptions: java.nio.file.LinkOption[], fileVisitOptions: java.nio.file.FileVisitOption[]): boolean;
						public static sizeOfAsBigInteger(path: java.nio.file.Path): java.math.BigInteger;
						public static deleteOnExit(path: java.nio.file.Path): void;
						public static getDosFileAttributeView(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.DosFileAttributeView;
						public static fileContentEquals(path1: java.nio.file.Path, path2: java.nio.file.Path, linkOptions: java.nio.file.LinkOption[], openOptions: java.nio.file.OpenOption[]): boolean;
						public static cleanDirectory(directory: java.nio.file.Path, ...deleteOptions: org.apache.commons.io.file.DeleteOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static countDirectory(directory: java.nio.file.Path): org.apache.commons.io.file.Counters.PathCounters;
						public static isNewer(file: java.nio.file.Path, fileTime: java.nio.file.attribute.FileTime, ...options: java.nio.file.LinkOption[]): boolean;
						public static newDirectoryStream(dir: java.nio.file.Path, pathFilter: org.apache.commons.io.file.PathFilter): java.nio.file.DirectoryStream<java.nio.file.Path>;
						public static isNewer(file: java.nio.file.Path, timeMillis: number, ...param2: java.nio.file.LinkOption[]): boolean;
						public static isOlder(file: java.nio.file.Path, fileTime: java.nio.file.attribute.FileTime, ...options: java.nio.file.LinkOption[]): boolean;
						public static getAclFileAttributeView(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.AclFileAttributeView;
						public static deleteFile(file: java.nio.file.Path, ...deleteOptions: org.apache.commons.io.file.DeleteOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static copy(_in_: org.apache.commons.io.function.IOSupplier<java.io.InputStream>, target: java.nio.file.Path, ...copyOptions: java.nio.file.CopyOption[]): number;
						public static isOlder(file: java.nio.file.Path, instant: java.time.Instant, ...options: java.nio.file.LinkOption[]): boolean;
						public static directoryAndFileContentEquals(path1: java.nio.file.Path, path2: java.nio.file.Path, linkOptions: java.nio.file.LinkOption[], openOptions: java.nio.file.OpenOption[], fileVisitOption: java.nio.file.FileVisitOption[]): boolean;
						public static newOutputStream(path: java.nio.file.Path, append: boolean): java.io.OutputStream;
						public static isEmptyDirectory(directory: java.nio.file.Path): boolean;
						public static deleteFile(file: java.nio.file.Path): org.apache.commons.io.file.Counters.PathCounters;
						public static readString(path: java.nio.file.Path, charset: java.nio.charset.Charset): string;
						public static createParentDirectories(path: java.nio.file.Path, linkOption: java.nio.file.LinkOption, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.file.Path;
						public static noFollowLinkOptionArray(): java.nio.file.LinkOption[];
						public static fileContentEquals(path1: java.nio.file.Path, path2: java.nio.file.Path): boolean;
						public static current(): java.nio.file.Path;
						public static readBasicFileAttributes(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.BasicFileAttributes;
						public static sizeOf(path: java.nio.file.Path): number;
						public static isPosix(test: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): boolean;
						/** @deprecated */
						public static readBasicFileAttributesUnchecked(path: java.nio.file.Path): java.nio.file.attribute.BasicFileAttributes;
						public static readAttributes(path: java.nio.file.Path, type: java.lang.Class<any>, ...options: java.nio.file.LinkOption[]): java.nio.file.attribute.BasicFileAttributes;
					}
					export module PathUtils {
						export class RelativeSortedPaths extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.io.file.PathUtils.RelativeSortedPaths>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class PathVisitor extends java.nio.file.FileVisitor<java.nio.file.Path> {
						public static class: java.lang.Class<org.apache.commons.io.file.PathVisitor>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.file.PathVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
							visitFile(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
							visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
							postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						});
						public constructor();
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public visitFile(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export abstract class SimplePathVisitor extends java.nio.file.SimpleFileVisitor<java.nio.file.Path> implements org.apache.commons.io.file.PathVisitor  {
						public static class: java.lang.Class<org.apache.commons.io.file.SimplePathVisitor>;
						public postVisitDirectory(dir: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor();
						public visitFileFailed(file: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor(visitFileFailed: org.apache.commons.io.function.IOBiFunction<java.nio.file.Path,java.io.IOException,java.nio.file.FileVisitResult>);
						public visitFile(file: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export class StandardDeleteOption extends org.apache.commons.io.file.DeleteOption {
						public static class: java.lang.Class<org.apache.commons.io.file.StandardDeleteOption>;
						public static OVERRIDE_READ_ONLY: org.apache.commons.io.file.StandardDeleteOption;
						public static values(): org.apache.commons.io.file.StandardDeleteOption[];
						public static valueOf(name: string): org.apache.commons.io.file.StandardDeleteOption;
						public static overrideReadOnly(options: org.apache.commons.io.file.DeleteOption[]): boolean;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export module attribute {
						export class FileTimes extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.io.file.attribute.FileTimes>;
							public static EPOCH: java.nio.file.attribute.FileTime;
							public static now(): java.nio.file.attribute.FileTime;
							public static ntfsTimeToFileTime(ntfsTime: number): java.nio.file.attribute.FileTime;
							public static toFileTime(date: java.util.Date): java.nio.file.attribute.FileTime;
							public static minusSeconds(fileTime: java.nio.file.attribute.FileTime, secondsToSubtract: number): java.nio.file.attribute.FileTime;
							public static ntfsTimeToDate(ntfsTime: number): java.util.Date;
							public static plusNanos(fileTime: java.nio.file.attribute.FileTime, nanosToSubtract: number): java.nio.file.attribute.FileTime;
							public static plusSeconds(fileTime: java.nio.file.attribute.FileTime, secondsToAdd: number): java.nio.file.attribute.FileTime;
							public static toDate(fileTime: java.nio.file.attribute.FileTime): java.util.Date;
							public static toNtfsTime(date: java.util.Date): number;
							public static plusMillis(fileTime: java.nio.file.attribute.FileTime, millisToAdd: number): java.nio.file.attribute.FileTime;
							public static toNtfsTime(fileTime: java.nio.file.attribute.FileTime): number;
							public static minusNanos(fileTime: java.nio.file.attribute.FileTime, nanosToSubtract: number): java.nio.file.attribute.FileTime;
							public static setLastModifiedTime(path: java.nio.file.Path): void;
							public static minusMillis(fileTime: java.nio.file.attribute.FileTime, millisToSubtract: number): java.nio.file.attribute.FileTime;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module file {
					export module spi {
						export class FileSystemProviders extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.io.file.spi.FileSystemProviders>;
							public getFileSystemProvider(scheme: string): java.nio.file.spi.FileSystemProvider;
							public getFileSystemProvider(uri: java.net.URI): java.nio.file.spi.FileSystemProvider;
							public static installed(): org.apache.commons.io.file.spi.FileSystemProviders;
							public static getFileSystemProvider(path: java.nio.file.Path): java.nio.file.spi.FileSystemProvider;
							public getFileSystemProvider(url: java.net.URL): java.nio.file.spi.FileSystemProvider;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export abstract class AbstractFileFilter extends java.lang.Object implements org.apache.commons.io.filefilter.IOFileFilter, org.apache.commons.io.file.PathVisitor {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.AbstractFileFilter>;
						public constructor();
						public visitFileFailed(file: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public handle(t: java.lang.Throwable): java.nio.file.FileVisitResult;
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(param0: java.nio.file.Path): boolean;
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public matches(path: java.nio.file.Path): boolean;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public accept(param0: java.nio.file.Path, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public preVisitDirectory(dir: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(dir: java.io.File, name: string): boolean;
						public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public visitFile(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class AgeFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.AgeFileFilter>;
						public constructor(cutoffInstant: java.time.Instant);
						public constructor(cutoffMillis: number, param1: boolean);
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(path: java.nio.file.Path): boolean;
						public constructor(cutoffDate: java.util.Date);
						public constructor(cutoffReference: java.io.File);
						public constructor(cutoffReference: java.io.File, acceptOlder: boolean);
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(cutoffMillis: number);
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public constructor(cutoffDate: java.util.Date, acceptOlder: boolean);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public constructor(cutoffInstant: java.time.Instant, acceptOlder: boolean);
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class AndFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements org.apache.commons.io.filefilter.ConditionalFileFilter, java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.AndFileFilter>;
						public addFileFilter(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): void;
						public accept(file: java.io.File, name: string): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public constructor(...fileFilters: org.apache.commons.io.filefilter.IOFileFilter[]);
						public constructor(fileFilters: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>);
						public setFileFilters(param0: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>): void;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(filter1: org.apache.commons.io.filefilter.IOFileFilter, filter2: org.apache.commons.io.filefilter.IOFileFilter);
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(path: java.nio.file.Path): boolean;
						public getFileFilters(): java.util.List<org.apache.commons.io.filefilter.IOFileFilter>;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public removeFileFilter(param0: org.apache.commons.io.filefilter.IOFileFilter): boolean;
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public removeFileFilter(ioFileFilter: org.apache.commons.io.filefilter.IOFileFilter): boolean;
						public addFileFilter(...fileFilters: org.apache.commons.io.filefilter.IOFileFilter[]): void;
						public addFileFilter(param0: org.apache.commons.io.filefilter.IOFileFilter): void;
						public accept(dir: java.io.File, name: string): boolean;
						public setFileFilters(fileFilters: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>): void;
						public accept(file: java.io.File): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class CanExecuteFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.CanExecuteFileFilter>;
						public static CAN_EXECUTE: org.apache.commons.io.filefilter.IOFileFilter;
						public static CANNOT_EXECUTE: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(dir: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(file: java.io.File): boolean;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class CanReadFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.CanReadFileFilter>;
						public static CAN_READ: org.apache.commons.io.filefilter.IOFileFilter;
						public static CANNOT_READ: org.apache.commons.io.filefilter.IOFileFilter;
						public static READ_ONLY: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(dir: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(file: java.io.File): boolean;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class CanWriteFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.CanWriteFileFilter>;
						public static CAN_WRITE: org.apache.commons.io.filefilter.IOFileFilter;
						public static CANNOT_WRITE: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(dir: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(file: java.io.File): boolean;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class ConditionalFileFilter extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.ConditionalFileFilter>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.filefilter.ConditionalFileFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addFileFilter(param0: org.apache.commons.io.filefilter.IOFileFilter): void;
							getFileFilters(): java.util.List<org.apache.commons.io.filefilter.IOFileFilter>;
							removeFileFilter(param0: org.apache.commons.io.filefilter.IOFileFilter): boolean;
							setFileFilters(param0: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>): void;
						});
						public constructor();
						public addFileFilter(param0: org.apache.commons.io.filefilter.IOFileFilter): void;
						public setFileFilters(param0: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>): void;
						public getFileFilters(): java.util.List<org.apache.commons.io.filefilter.IOFileFilter>;
						public removeFileFilter(param0: org.apache.commons.io.filefilter.IOFileFilter): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class DelegateFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.DelegateFileFilter>;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public constructor(fileFilter: java.io.FileFilter);
						public constructor(filenameFilter: java.io.FilenameFilter);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class DirectoryFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.DirectoryFileFilter>;
						public static DIRECTORY: org.apache.commons.io.filefilter.IOFileFilter;
						public static INSTANCE: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(dir: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(file: java.io.File): boolean;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class EmptyFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.EmptyFileFilter>;
						public static EMPTY: org.apache.commons.io.filefilter.IOFileFilter;
						public static NOT_EMPTY: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(dir: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(file: java.io.File): boolean;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class FalseFileFilter extends java.lang.Object implements org.apache.commons.io.filefilter.IOFileFilter, java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.FalseFileFilter>;
						public static FALSE: org.apache.commons.io.filefilter.IOFileFilter;
						public static INSTANCE: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(param0: java.nio.file.Path): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public accept(param0: java.nio.file.Path, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class FileEqualsFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.FileEqualsFileFilter>;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(file: java.io.File);
						public accept(dir: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(file: java.io.File): boolean;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class FileFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.FileFileFilter>;
						public static INSTANCE: org.apache.commons.io.filefilter.IOFileFilter;
						public static FILE: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(dir: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(file: java.io.File): boolean;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class FileFilterUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.FileFilterUtils>;
						public static fileFileFilter(): org.apache.commons.io.filefilter.IOFileFilter;
						/** @deprecated */
						public static orFileFilter(filter1: org.apache.commons.io.filefilter.IOFileFilter, filter2: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static prefixFileFilter(prefix: string): org.apache.commons.io.filefilter.IOFileFilter;
						public static ageFileFilter(cutoffReference: java.io.File): org.apache.commons.io.filefilter.IOFileFilter;
						public static nameFileFilter(name: string, ioCase: org.apache.commons.io.IOCase): org.apache.commons.io.filefilter.IOFileFilter;
						public static trueFileFilter(): org.apache.commons.io.filefilter.IOFileFilter;
						public static filterList(filter: org.apache.commons.io.filefilter.IOFileFilter, ...files: java.io.File[]): java.util.List<java.io.File>;
						public static makeDirectoryOnly(filter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static sizeFileFilter(threshold: number): org.apache.commons.io.filefilter.IOFileFilter;
						public static notFileFilter(filter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static asFileFilter(filter: java.io.FileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static directoryFileFilter(): org.apache.commons.io.filefilter.IOFileFilter;
						public static magicNumberFileFilter(magicNumber: string, offset: number): org.apache.commons.io.filefilter.IOFileFilter;
						public static ageFileFilter(cutoffDate: java.util.Date): org.apache.commons.io.filefilter.IOFileFilter;
						public static falseFileFilter(): org.apache.commons.io.filefilter.IOFileFilter;
						public static magicNumberFileFilter(magicNumber: number[]): org.apache.commons.io.filefilter.IOFileFilter;
						public static makeCVSAware(filter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static makeSVNAware(filter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static prefixFileFilter(prefix: string, ioCase: org.apache.commons.io.IOCase): org.apache.commons.io.filefilter.IOFileFilter;
						public static magicNumberFileFilter(magicNumber: string): org.apache.commons.io.filefilter.IOFileFilter;
						/** @deprecated */
						public static andFileFilter(filter1: org.apache.commons.io.filefilter.IOFileFilter, filter2: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static asFileFilter(filter: java.io.FilenameFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static makeFileOnly(filter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static suffixFileFilter(suffix: string): org.apache.commons.io.filefilter.IOFileFilter;
						public static toList(...filters: org.apache.commons.io.filefilter.IOFileFilter[]): java.util.List<org.apache.commons.io.filefilter.IOFileFilter>;
						public constructor();
						public static suffixFileFilter(suffix: string, ioCase: org.apache.commons.io.IOCase): org.apache.commons.io.filefilter.IOFileFilter;
						public static filterSet(filter: org.apache.commons.io.filefilter.IOFileFilter, files: java.lang.Iterable<java.io.File>): java.util.Set<java.io.File>;
						public static filter(filter: org.apache.commons.io.filefilter.IOFileFilter, files: java.lang.Iterable<java.io.File>): java.io.File[];
						public static ageFileFilter(cutoffMillis: number): org.apache.commons.io.filefilter.IOFileFilter;
						public static filterList(filter: org.apache.commons.io.filefilter.IOFileFilter, files: java.lang.Iterable<java.io.File>): java.util.List<java.io.File>;
						public static sizeFileFilter(threshold: number, param1: boolean): org.apache.commons.io.filefilter.IOFileFilter;
						public static or(...filters: org.apache.commons.io.filefilter.IOFileFilter[]): org.apache.commons.io.filefilter.IOFileFilter;
						public static filterSet(filter: org.apache.commons.io.filefilter.IOFileFilter, ...files: java.io.File[]): java.util.Set<java.io.File>;
						public static nameFileFilter(name: string): org.apache.commons.io.filefilter.IOFileFilter;
						public static ageFileFilter(cutoffDate: java.util.Date, acceptOlder: boolean): org.apache.commons.io.filefilter.IOFileFilter;
						public static filter(filter: org.apache.commons.io.filefilter.IOFileFilter, ...files: java.io.File[]): java.io.File[];
						public static ageFileFilter(cutoffReference: java.io.File, acceptOlder: boolean): org.apache.commons.io.filefilter.IOFileFilter;
						public static ageFileFilter(cutoffMillis: number, param1: boolean): org.apache.commons.io.filefilter.IOFileFilter;
						public static and(...filters: org.apache.commons.io.filefilter.IOFileFilter[]): org.apache.commons.io.filefilter.IOFileFilter;
						public static magicNumberFileFilter(magicNumber: number[], offset: number): org.apache.commons.io.filefilter.IOFileFilter;
						public static sizeRangeFileFilter(minSizeInclusive: number, param1: number): org.apache.commons.io.filefilter.IOFileFilter;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class HiddenFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.HiddenFileFilter>;
						public static HIDDEN: org.apache.commons.io.filefilter.IOFileFilter;
						public static VISIBLE: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(dir: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(file: java.io.File): boolean;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class IOFileFilter extends java.lang.Object implements java.io.FileFilter, java.io.FilenameFilter, org.apache.commons.io.file.PathFilter, java.nio.file.PathMatcher {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.IOFileFilter>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.filefilter.IOFileFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: java.io.File): boolean;
							accept(param0: java.io.File, param1: string): boolean;
							accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
							and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
							matches(path: java.nio.file.Path): boolean;
							negate(): org.apache.commons.io.filefilter.IOFileFilter;
							or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
							"<clinit>"(): void;
							accept(param0: java.io.File): boolean;
							accept(param0: java.io.File, param1: string): boolean;
							accept(param0: java.nio.file.Path, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
							matches(param0: java.nio.file.Path): boolean;
						});
						public constructor();
						public static EMPTY_STRING_ARRAY: string[];
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(param0: java.nio.file.Path): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(param0: java.io.File): boolean;
						public accept(param0: java.nio.file.Path, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class MagicNumberFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.MagicNumberFileFilter>;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public constructor(magicNumber: string, offset: number);
						public constructor(magicNumber: string);
						public constructor(magicNumbers: number[], offset: number);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public constructor(magicNumber: number[]);
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class NameFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.NameFileFilter>;
						public constructor(name: string, ioCase: org.apache.commons.io.IOCase);
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public constructor(names: java.util.List<string>);
						public constructor(names: java.util.List<string>, ioCase: org.apache.commons.io.IOCase);
						public constructor(name: string);
						public accept(dir: java.io.File, name: string): boolean;
						public constructor(...names: string[]);
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(names: string[], ioCase: org.apache.commons.io.IOCase);
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class NotFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.NotFileFilter>;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(file: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public constructor(filter: org.apache.commons.io.filefilter.IOFileFilter);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class OrFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements org.apache.commons.io.filefilter.ConditionalFileFilter, java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.OrFileFilter>;
						public addFileFilter(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): void;
						public accept(file: java.io.File, name: string): boolean;
						public removeFileFilter(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public constructor(...fileFilters: org.apache.commons.io.filefilter.IOFileFilter[]);
						public constructor(fileFilters: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>);
						public setFileFilters(param0: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>): void;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(filter1: org.apache.commons.io.filefilter.IOFileFilter, filter2: org.apache.commons.io.filefilter.IOFileFilter);
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(path: java.nio.file.Path): boolean;
						public getFileFilters(): java.util.List<org.apache.commons.io.filefilter.IOFileFilter>;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public removeFileFilter(param0: org.apache.commons.io.filefilter.IOFileFilter): boolean;
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public addFileFilter(...fileFilters: org.apache.commons.io.filefilter.IOFileFilter[]): void;
						public addFileFilter(param0: org.apache.commons.io.filefilter.IOFileFilter): void;
						public accept(dir: java.io.File, name: string): boolean;
						public setFileFilters(fileFilters: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>): void;
						public accept(file: java.io.File): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class PathEqualsFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.PathEqualsFileFilter>;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(file: java.nio.file.Path);
						public accept(dir: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(file: java.io.File): boolean;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class PathMatcherFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.PathMatcherFileFilter>;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(dir: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(file: java.io.File): boolean;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public constructor(pathMatcher: java.nio.file.PathMatcher);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class PathVisitorFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.PathVisitorFileFilter>;
						public constructor();
						public constructor(pathVisitor: org.apache.commons.io.file.PathVisitor);
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public visitFile(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class PrefixFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.PrefixFileFilter>;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(file: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(prefixes: string[], ioCase: org.apache.commons.io.IOCase);
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(prefix: string, ioCase: org.apache.commons.io.IOCase);
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public constructor(prefixes: java.util.List<string>, ioCase: org.apache.commons.io.IOCase);
						public constructor(prefix: string);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(prefixes: java.util.List<string>);
						public constructor(...prefixes: string[]);
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class RegexFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.RegexFileFilter>;
						public constructor(pattern: string, ioCase: org.apache.commons.io.IOCase);
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(path: java.nio.file.Path): boolean;
						public constructor(pattern: string, flags: number);
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(pattern: java.util.regex.Pattern, pathToString: any /* any<java.nio.file.Path,string>*/);
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public constructor(pattern: java.util.regex.Pattern);
						public toString(): string;
						public constructor(pattern: string);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class SizeFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.SizeFileFilter>;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public constructor(size: number, param1: boolean);
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(size: number);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class SuffixFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.SuffixFileFilter>;
						public constructor();
						public constructor(suffix: string);
						public constructor(suffixes: java.util.List<string>);
						public constructor(suffixes: string[], ioCase: org.apache.commons.io.IOCase);
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(suffix: string, ioCase: org.apache.commons.io.IOCase);
						public accept(file: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public constructor(suffixes: java.util.List<string>, ioCase: org.apache.commons.io.IOCase);
						public toString(): string;
						public constructor(...suffixes: string[]);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class SymbolicLinkFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.SymbolicLinkFileFilter>;
						public static INSTANCE: org.apache.commons.io.filefilter.SymbolicLinkFileFilter;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(dir: java.io.File, name: string): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(file: java.io.File): boolean;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class TrueFileFilter extends java.lang.Object implements org.apache.commons.io.filefilter.IOFileFilter, java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.TrueFileFilter>;
						public static TRUE: org.apache.commons.io.filefilter.IOFileFilter;
						public static INSTANCE: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(param0: java.nio.file.Path): boolean;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public accept(param0: java.nio.file.Path, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class WildcardFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.WildcardFileFilter>;
						public constructor();
						/** @deprecated */
						public constructor(wildcards: java.util.List<string>, ioCase: org.apache.commons.io.IOCase);
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						/** @deprecated */
						public constructor(wildcard: string, ioCase: org.apache.commons.io.IOCase);
						/** @deprecated */
						public constructor(wildcards: string[], ioCase: org.apache.commons.io.IOCase);
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public static builder(): org.apache.commons.io.filefilter.WildcardFileFilter.Builder;
						public toString(): string;
						/** @deprecated */
						public constructor(wildcards: java.util.List<string>);
						/** @deprecated */
						public constructor(...wildcards: string[]);
						/** @deprecated */
						public constructor(wildcard: string);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
					export module WildcardFileFilter {
						export class Builder extends org.apache.commons.io.build.AbstractSupplier<org.apache.commons.io.filefilter.WildcardFileFilter,org.apache.commons.io.filefilter.WildcardFileFilter.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.filefilter.WildcardFileFilter.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.filefilter.WildcardFileFilter;
							public setIoCase(ioCase: org.apache.commons.io.IOCase): org.apache.commons.io.filefilter.WildcardFileFilter.Builder;
							public setWildcards(wildcards: java.util.List<string>): org.apache.commons.io.filefilter.WildcardFileFilter.Builder;
							public asSupplier(): any /* any*/;
							public setWildcards(...wildcards: string[]): org.apache.commons.io.filefilter.WildcardFileFilter.Builder;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module filefilter {
					export class WildcardFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.WildcardFilter>;
						public constructor();
						public negate(): org.apache.commons.io.filefilter.IOFileFilter;
						public matches(path: java.nio.file.Path): boolean;
						public accept(path: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public and(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public or(fileFilter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor(onAccept: java.nio.file.FileVisitResult, onReject: java.nio.file.FileVisitResult);
						public accept(param0: java.io.File): boolean;
						public constructor(wildcards: java.util.List<string>);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public constructor(wildcard: string);
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(...wildcards: string[]);
						public accept(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class Constants extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.Constants>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class Erase extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.Erase>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOBaseStream<T, S, B>  extends java.io.Closeable {
						public static class: java.lang.Class<org.apache.commons.io.function.IOBaseStream<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOBaseStream<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							asBaseStream(): java.util.stream.BaseStream<any,any>;
							close(): void;
							isParallel(): boolean;
							iterator(): org.apache.commons.io.function.IOIterator<any>;
							onClose(closeHandler: org.apache.commons.io.function.IORunnable): any;
							parallel(): any;
							sequential(): any;
							spliterator(): org.apache.commons.io.function.IOSpliterator<any>;
							unordered(): any;
							unwrap(): any;
							wrap(param0: any): any;
							lambda$onClose$0(closeHandler: org.apache.commons.io.function.IORunnable): void;
							close(): void;
							close(): void;
						});
						public constructor();
						public asBaseStream(): java.util.stream.BaseStream<any,any>;
						public isParallel(): boolean;
						public onClose(closeHandler: org.apache.commons.io.function.IORunnable): any;
						public parallel(): any;
						public close(): void;
						public wrap(param0: any): any;
						public spliterator(): org.apache.commons.io.function.IOSpliterator<any>;
						public unwrap(): any;
						public iterator(): org.apache.commons.io.function.IOIterator<any>;
						public sequential(): any;
						public unordered(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export abstract class IOBaseStreamAdapter<T, S, B>  extends org.apache.commons.io.function.IOBaseStream<any,any,any> {
						public static class: java.lang.Class<org.apache.commons.io.function.IOBaseStreamAdapter<any,any,any>>;
						public asBaseStream(): java.util.stream.BaseStream<any,any>;
						public isParallel(): boolean;
						public onClose(closeHandler: org.apache.commons.io.function.IORunnable): any;
						public parallel(): any;
						public close(): void;
						public wrap(param0: any): any;
						public spliterator(): org.apache.commons.io.function.IOSpliterator<any>;
						public unwrap(): any;
						public iterator(): org.apache.commons.io.function.IOIterator<any>;
						public sequential(): any;
						public unordered(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOBiConsumer<T, U>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOBiConsumer<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOBiConsumer<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							noop(): org.apache.commons.io.function.IOBiConsumer<any,any>;
							accept(param0: T, param1: U): void;
							andThen(after: org.apache.commons.io.function.IOBiConsumer<any,any>): org.apache.commons.io.function.IOBiConsumer<T,U>;
							asBiConsumer(): any /* any<T,U>*/;
							lambda$asBiConsumer$1(t: any, u: any): void;
							lambda$andThen$0(after: org.apache.commons.io.function.IOBiConsumer<any,any>, t: any, u: any): void;
						});
						public constructor();
						public accept(param0: T, param1: U): void;
						public andThen(after: org.apache.commons.io.function.IOBiConsumer<any,any>): org.apache.commons.io.function.IOBiConsumer<T,U>;
						public asBiConsumer(): any /* any<T,U>*/;
						public static noop(): org.apache.commons.io.function.IOBiConsumer<any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOBiFunction<T, U, R>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOBiFunction<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOBiFunction<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOBiFunction<any,any,any>;
							apply(param0: T, param1: U): R;
							asBiFunction(): any /* any<T,U,R>*/;
							lambda$asBiFunction$1(t: any, u: any): any;
							lambda$andThen$0(after: org.apache.commons.io.function.IOFunction<any,any>, t: any, u: any): any;
						});
						public constructor();
						public apply(param0: T, param1: U): R;
						public asBiFunction(): any /* any<T,U,R>*/;
						public andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOBiFunction<any,any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOBinaryOperator<T>  extends org.apache.commons.io.function.IOBiFunction<any,any,any> {
						public static class: java.lang.Class<org.apache.commons.io.function.IOBinaryOperator<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOBinaryOperator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							maxBy(comparator: org.apache.commons.io.function.IOComparator<any>): org.apache.commons.io.function.IOBinaryOperator<any>;
							minBy(comparator: org.apache.commons.io.function.IOComparator<any>): org.apache.commons.io.function.IOBinaryOperator<any>;
							asBinaryOperator(): any /* any*/;
							lambda$asBinaryOperator$2(t: any, u: any): any;
							lambda$minBy$1(comparator: org.apache.commons.io.function.IOComparator<any>, a: any, b: any): any;
							lambda$maxBy$0(comparator: org.apache.commons.io.function.IOComparator<any>, a: any, b: any): any;
							andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOBiFunction<any,any,any>;
							apply(param0: any, param1: any): any;
							asBiFunction(): any /* any<any,any,any>*/;
							lambda$asBiFunction$1(t: any, u: any): any;
							lambda$andThen$0(after: org.apache.commons.io.function.IOFunction<any,any>, t: any, u: any): any;
						});
						public constructor();
						public static minBy(comparator: org.apache.commons.io.function.IOComparator<any>): org.apache.commons.io.function.IOBinaryOperator<any>;
						public apply(param0: any, param1: any): any;
						public static maxBy(comparator: org.apache.commons.io.function.IOComparator<any>): org.apache.commons.io.function.IOBinaryOperator<any>;
						public asBinaryOperator(): any /* any*/;
						public andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOBiFunction<any,any,any>;
						public asBiFunction(): any /* any<any,any,any>*/;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOComparator<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOComparator<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOComparator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							asComparator(): java.util.Comparator<T>;
							compare(param0: T, param1: T): number;
							lambda$asComparator$0(t: any, u: any): number;
						});
						public constructor();
						public asComparator(): java.util.Comparator<T>;
						public compare(param0: T, param1: T): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOConsumer<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOConsumer<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOConsumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							forAll(action: org.apache.commons.io.function.IOConsumer<any>, iterable: java.lang.Iterable<any>): void;
							forAll(action: org.apache.commons.io.function.IOConsumer<any>, stream: java.util.stream.Stream): void;
							forAll(action: org.apache.commons.io.function.IOConsumer<any>, ...array: any[]): void;
							forEach(iterable: java.lang.Iterable<any>, action: org.apache.commons.io.function.IOConsumer<any>): void;
							forEach(stream: java.util.stream.Stream, action: org.apache.commons.io.function.IOConsumer<any>): void;
							forEach(array: any[], action: org.apache.commons.io.function.IOConsumer<any>): void;
							noop(): org.apache.commons.io.function.IOConsumer<any>;
							accept(param0: T): void;
							andThen(after: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOConsumer<T>;
							asConsumer(): any /* any*/;
							lambda$asConsumer$2(t: any): void;
							lambda$andThen$1(after: org.apache.commons.io.function.IOConsumer<any>, t: any): void;
							lambda$static$0(t: any): void;
							"<clinit>"(): void;
						});
						public constructor();
						public static NOOP_IO_CONSUMER: org.apache.commons.io.function.IOConsumer<any>;
						public accept(param0: T): void;
						public andThen(after: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOConsumer<T>;
						public static forAll(action: org.apache.commons.io.function.IOConsumer<any>, ...array: any[]): void;
						public static forEach(stream: java.util.stream.Stream, action: org.apache.commons.io.function.IOConsumer<any>): void;
						public static forAll(action: org.apache.commons.io.function.IOConsumer<any>, stream: java.util.stream.Stream): void;
						public asConsumer(): any /* any*/;
						public static forAll(action: org.apache.commons.io.function.IOConsumer<any>, iterable: java.lang.Iterable<any>): void;
						public static forEach(iterable: java.lang.Iterable<any>, action: org.apache.commons.io.function.IOConsumer<any>): void;
						public static noop(): org.apache.commons.io.function.IOConsumer<any>;
						public static forEach(array: any[], action: org.apache.commons.io.function.IOConsumer<any>): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOFunction<T, R>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOFunction<any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOFunction<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							identity(): org.apache.commons.io.function.IOFunction<any,any>;
							andThen(after: any /* any*/): org.apache.commons.io.function.IOConsumer<T>;
							andThen(after: any /* any*/): org.apache.commons.io.function.IOFunction<any,any>;
							andThen(after: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOConsumer<T>;
							andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOFunction<any,any>;
							apply(param0: T): R;
							asFunction(): any /* any<T,R>*/;
							compose(before: any /* any*/): org.apache.commons.io.function.IOFunction<any,any>;
							compose(before: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOFunction<any,any>;
							compose(before: org.apache.commons.io.function.IOSupplier<any>): org.apache.commons.io.function.IOSupplier<R>;
							compose(before: any /* any*/): org.apache.commons.io.function.IOSupplier<R>;
							lambda$compose$8(before: any /* any*/): any;
							lambda$compose$7(before: org.apache.commons.io.function.IOSupplier<any>): any;
							lambda$compose$6(before: org.apache.commons.io.function.IOFunction<any,any>, v: any): any;
							lambda$compose$5(before: any /* any*/, v: any): any;
							lambda$asFunction$4(t: any): any;
							lambda$andThen$3(after: org.apache.commons.io.function.IOFunction<any,any>, t: any): any;
							lambda$andThen$2(after: org.apache.commons.io.function.IOConsumer<any>, t: any): void;
							lambda$andThen$1(after: any /* any*/, t: any): any;
							lambda$andThen$0(after: any /* any*/, t: any): void;
						});
						public constructor();
						public andThen(after: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOConsumer<T>;
						public apply(param0: T): R;
						public static identity(): org.apache.commons.io.function.IOFunction<any,any>;
						public compose(before: org.apache.commons.io.function.IOSupplier<any>): org.apache.commons.io.function.IOSupplier<R>;
						public andThen(after: any /* any*/): org.apache.commons.io.function.IOConsumer<T>;
						public andThen(after: any /* any*/): org.apache.commons.io.function.IOFunction<any,any>;
						public asFunction(): any /* any<T,R>*/;
						public compose(before: any /* any*/): org.apache.commons.io.function.IOSupplier<R>;
						public andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOFunction<any,any>;
						public compose(before: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOFunction<any,any>;
						public compose(before: any /* any*/): org.apache.commons.io.function.IOFunction<any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOIntSupplier extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOIntSupplier>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOIntSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							asIntSupplier(): any /* any*/;
							getAsInt(): number;
							lambda$asIntSupplier$0(): number;
						});
						public constructor();
						public getAsInt(): number;
						public asIntSupplier(): any /* any*/;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOIterator<E>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOIterator<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOIterator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							adapt(iterator: java.util.Iterator<any>): org.apache.commons.io.function.IOIterator<any>;
							asIterator(): java.util.Iterator<E>;
							forEachRemaining(action: org.apache.commons.io.function.IOConsumer<any>): void;
							hasNext(): boolean;
							next(): E;
							remove(): void;
							unwrap(): java.util.Iterator<E>;
						});
						public constructor();
						public forEachRemaining(action: org.apache.commons.io.function.IOConsumer<any>): void;
						public next(): E;
						public hasNext(): boolean;
						public static adapt(iterator: java.util.Iterator<any>): org.apache.commons.io.function.IOIterator<any>;
						public asIterator(): java.util.Iterator<E>;
						public unwrap(): java.util.Iterator<E>;
						public remove(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOIteratorAdapter<E>  extends org.apache.commons.io.function.IOIterator<any> {
						public static class: java.lang.Class<org.apache.commons.io.function.IOIteratorAdapter<any>>;
						public forEachRemaining(action: org.apache.commons.io.function.IOConsumer<any>): void;
						public unwrap(): java.util.Iterator<any>;
						public next(): any;
						public hasNext(): boolean;
						public asIterator(): java.util.Iterator<any>;
						public static adapt(iterator: java.util.Iterator<any>): org.apache.commons.io.function.IOIterator<any>;
						public remove(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOLongSupplier extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOLongSupplier>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOLongSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							asSupplier(): any /* any*/;
							getAsLong(): number;
							lambda$asSupplier$0(): number;
						});
						public constructor();
						public asSupplier(): any /* any*/;
						public getAsLong(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOPredicate<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOPredicate<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOPredicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							alwaysFalse(): org.apache.commons.io.function.IOPredicate<any>;
							alwaysTrue(): org.apache.commons.io.function.IOPredicate<any>;
							isEqual(target: any): org.apache.commons.io.function.IOPredicate<any>;
							and(other: org.apache.commons.io.function.IOPredicate<any>): org.apache.commons.io.function.IOPredicate<T>;
							asPredicate(): any /* any*/;
							negate(): org.apache.commons.io.function.IOPredicate<T>;
							or(other: org.apache.commons.io.function.IOPredicate<any>): org.apache.commons.io.function.IOPredicate<T>;
							test(param0: T): boolean;
							lambda$or$4(other: org.apache.commons.io.function.IOPredicate<any>, t: any): boolean;
							lambda$negate$3(t: any): boolean;
							lambda$asPredicate$2(t: any): boolean;
							lambda$and$1(other: org.apache.commons.io.function.IOPredicate<any>, t: any): boolean;
							lambda$isEqual$0(target: any, object: any): boolean;
						});
						public constructor();
						public asPredicate(): any /* any*/;
						public static alwaysTrue(): org.apache.commons.io.function.IOPredicate<any>;
						public static isEqual(target: any): org.apache.commons.io.function.IOPredicate<any>;
						public and(other: org.apache.commons.io.function.IOPredicate<any>): org.apache.commons.io.function.IOPredicate<T>;
						public or(other: org.apache.commons.io.function.IOPredicate<any>): org.apache.commons.io.function.IOPredicate<T>;
						public test(param0: T): boolean;
						public negate(): org.apache.commons.io.function.IOPredicate<T>;
						public static alwaysFalse(): org.apache.commons.io.function.IOPredicate<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOQuadFunction<T, U, V, W, R>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOQuadFunction<any,any,any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOQuadFunction<any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOQuadFunction<any,any,any,any,any>;
							apply(param0: T, param1: U, param2: V, param3: W): R;
							lambda$andThen$0(after: org.apache.commons.io.function.IOFunction<any,any>, t: any, u: any, v: any, w: any): any;
						});
						public constructor();
						public apply(param0: T, param1: U, param2: V, param3: W): R;
						public andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOQuadFunction<any,any,any,any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IORunnable extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IORunnable>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IORunnable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							asRunnable(): java.lang.Runnable;
							run(): void;
							lambda$asRunnable$0(): void;
						});
						public constructor();
						public run(): void;
						public asRunnable(): java.lang.Runnable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOSpliterator<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOSpliterator<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOSpliterator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							adapt(iterator: java.util.Spliterator): org.apache.commons.io.function.IOSpliterator<any>;
							asSpliterator(): java.util.Spliterator<T>;
							characteristics(): number;
							estimateSize(): number;
							forEachRemaining(action: org.apache.commons.io.function.IOConsumer<any>): void;
							getComparator(): org.apache.commons.io.function.IOComparator<any>;
							getExactSizeIfKnown(): number;
							hasCharacteristics(characteristics: number): boolean;
							tryAdvance(action: org.apache.commons.io.function.IOConsumer<any>): boolean;
							trySplit(): org.apache.commons.io.function.IOSpliterator<T>;
							unwrap(): java.util.Spliterator<T>;
						});
						public constructor();
						public forEachRemaining(action: org.apache.commons.io.function.IOConsumer<any>): void;
						public getExactSizeIfKnown(): number;
						public trySplit(): org.apache.commons.io.function.IOSpliterator<T>;
						public unwrap(): java.util.Spliterator<T>;
						public estimateSize(): number;
						public static adapt(iterator: java.util.Spliterator): org.apache.commons.io.function.IOSpliterator<any>;
						public hasCharacteristics(characteristics: number): boolean;
						public asSpliterator(): java.util.Spliterator<T>;
						public tryAdvance(action: org.apache.commons.io.function.IOConsumer<any>): boolean;
						public getComparator(): org.apache.commons.io.function.IOComparator<any>;
						public characteristics(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOSpliteratorAdapter<T>  extends org.apache.commons.io.function.IOSpliterator<any> {
						public static class: java.lang.Class<org.apache.commons.io.function.IOSpliteratorAdapter<any>>;
						public asSpliterator(): java.util.Spliterator<any>;
						public forEachRemaining(action: org.apache.commons.io.function.IOConsumer<any>): void;
						public getExactSizeIfKnown(): number;
						public unwrap(): java.util.Spliterator<any>;
						public estimateSize(): number;
						public static adapt(iterator: java.util.Spliterator): org.apache.commons.io.function.IOSpliterator<any>;
						public hasCharacteristics(characteristics: number): boolean;
						public tryAdvance(action: org.apache.commons.io.function.IOConsumer<any>): boolean;
						public getComparator(): org.apache.commons.io.function.IOComparator<any>;
						public characteristics(): number;
						public trySplit(): org.apache.commons.io.function.IOSpliterator<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOStream<T>  extends org.apache.commons.io.function.IOBaseStream<any,org.apache.commons.io.function.IOStream<any>,java.util.stream.Stream<any>> {
						public static class: java.lang.Class<org.apache.commons.io.function.IOStream<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOStream<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							adapt(stream: java.util.stream.Stream): org.apache.commons.io.function.IOStream<any>;
							empty(): org.apache.commons.io.function.IOStream<any>;
							iterate(seed: any, f: org.apache.commons.io.function.IOUnaryOperator<any>): org.apache.commons.io.function.IOStream<any>;
							of(values: java.lang.Iterable<any>): org.apache.commons.io.function.IOStream<any>;
							of(...values: any[]): org.apache.commons.io.function.IOStream<any>;
							of(t: any): org.apache.commons.io.function.IOStream<any>;
							allMatch(predicate: org.apache.commons.io.function.IOPredicate<any>): boolean;
							anyMatch(predicate: org.apache.commons.io.function.IOPredicate<any>): boolean;
							collect(collector: java.util.stream.Collector): any;
							collect(supplier: org.apache.commons.io.function.IOSupplier<any>, accumulator: org.apache.commons.io.function.IOBiConsumer<any,any>, combiner: org.apache.commons.io.function.IOBiConsumer<any,any>): any;
							count(): number;
							distinct(): org.apache.commons.io.function.IOStream<any>;
							filter(predicate: org.apache.commons.io.function.IOPredicate<any>): org.apache.commons.io.function.IOStream<any>;
							findAny(): java.util.Optional<any>;
							findFirst(): java.util.Optional<any>;
							flatMap(mapper: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOStream<any>;
							flatMapToDouble(mapper: org.apache.commons.io.function.IOFunction<any,any>): java.util.stream.DoubleStream;
							flatMapToInt(mapper: org.apache.commons.io.function.IOFunction<any,any>): java.util.stream.IntStream;
							flatMapToLong(mapper: org.apache.commons.io.function.IOFunction<any,any>): java.util.stream.LongStream;
							forAll(action: org.apache.commons.io.function.IOConsumer<any>): void;
							forAll(action: org.apache.commons.io.function.IOConsumer<any>, exSupplier: any /* any<java.lang.Integer,java.io.IOException,java.io.IOException>*/): void;
							forEach(action: org.apache.commons.io.function.IOConsumer<any>): void;
							forEachOrdered(action: org.apache.commons.io.function.IOConsumer<any>): void;
							limit(maxSize: number): org.apache.commons.io.function.IOStream<any>;
							map(mapper: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOStream<any>;
							mapToDouble(mapper: any /* any*/): java.util.stream.DoubleStream;
							mapToInt(mapper: any /* any*/): java.util.stream.IntStream;
							mapToLong(mapper: any /* any*/): java.util.stream.LongStream;
							max(comparator: org.apache.commons.io.function.IOComparator<any>): java.util.Optional<any>;
							min(comparator: org.apache.commons.io.function.IOComparator<any>): java.util.Optional<any>;
							noneMatch(predicate: org.apache.commons.io.function.IOPredicate<any>): boolean;
							peek(action: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOStream<any>;
							reduce(accumulator: org.apache.commons.io.function.IOBinaryOperator<any>): java.util.Optional<any>;
							reduce(identity: any, accumulator: org.apache.commons.io.function.IOBinaryOperator<any>): any;
							reduce(identity: any, accumulator: org.apache.commons.io.function.IOBiFunction<any,any,any>, combiner: org.apache.commons.io.function.IOBinaryOperator<any>): any;
							skip(n: number): org.apache.commons.io.function.IOStream<any>;
							sorted(): org.apache.commons.io.function.IOStream<any>;
							sorted(comparator: org.apache.commons.io.function.IOComparator<any>): org.apache.commons.io.function.IOStream<any>;
							toArray(): any[];
							toArray(generator: any /* any*/): any[];
							lambda$sorted$23(comparator: org.apache.commons.io.function.IOComparator<any>, t: any, u: any): number;
							lambda$reduce$22(combiner: org.apache.commons.io.function.IOBinaryOperator<any>, t: any, u: any): any;
							lambda$reduce$21(accumulator: org.apache.commons.io.function.IOBiFunction<any,any,any>, t: any, u: any): any;
							lambda$reduce$20(accumulator: org.apache.commons.io.function.IOBinaryOperator<any>, t: any, u: any): any;
							lambda$reduce$19(accumulator: org.apache.commons.io.function.IOBinaryOperator<any>, t: any, u: any): any;
							lambda$peek$18(action: org.apache.commons.io.function.IOConsumer<any>, t: any): void;
							lambda$noneMatch$17(predicate: org.apache.commons.io.function.IOPredicate<any>, t: any): boolean;
							lambda$min$16(comparator: org.apache.commons.io.function.IOComparator<any>, t: any, u: any): number;
							lambda$max$15(comparator: org.apache.commons.io.function.IOComparator<any>, t: any, u: any): number;
							lambda$map$14(mapper: org.apache.commons.io.function.IOFunction<any,any>, t: any): any;
							lambda$forEachOrdered$13(action: org.apache.commons.io.function.IOConsumer<any>, e: any): void;
							lambda$forEach$12(action: org.apache.commons.io.function.IOConsumer<any>, e: any): void;
							lambda$forAll$11(safeAction: org.apache.commons.io.function.IOConsumer<any>, causeList: java.util.concurrent.atomic.AtomicReference<any>, exSupplier: any /* any*/, index: java.util.concurrent.atomic.AtomicInteger, e: any): void;
							lambda$forAll$10(i: java.lang.Integer, e: java.io.IOException): java.io.IOException;
							lambda$flatMapToLong$9(mapper: org.apache.commons.io.function.IOFunction<any,any>, t: any): java.util.stream.LongStream;
							lambda$flatMapToInt$8(mapper: org.apache.commons.io.function.IOFunction<any,any>, t: any): java.util.stream.IntStream;
							lambda$flatMapToDouble$7(mapper: org.apache.commons.io.function.IOFunction<any,any>, t: any): java.util.stream.DoubleStream;
							lambda$flatMap$6(mapper: org.apache.commons.io.function.IOFunction<any,any>, t: any): java.util.stream.Stream;
							lambda$filter$5(predicate: org.apache.commons.io.function.IOPredicate<any>, t: any): boolean;
							lambda$collect$4(combiner: org.apache.commons.io.function.IOBiConsumer<any,any>, t: any, u: any): void;
							lambda$collect$3(accumulator: org.apache.commons.io.function.IOBiConsumer<any,any>, t: any, u: any): void;
							lambda$collect$2(supplier: org.apache.commons.io.function.IOSupplier<any>): any;
							lambda$anyMatch$1(predicate: org.apache.commons.io.function.IOPredicate<any>, t: any): boolean;
							lambda$allMatch$0(predicate: org.apache.commons.io.function.IOPredicate<any>, t: any): boolean;
							asBaseStream(): java.util.stream.BaseStream<any,any>;
							close(): void;
							isParallel(): boolean;
							iterator(): org.apache.commons.io.function.IOIterator<any>;
							onClose(closeHandler: org.apache.commons.io.function.IORunnable): any;
							parallel(): any;
							sequential(): any;
							spliterator(): org.apache.commons.io.function.IOSpliterator<any>;
							unordered(): any;
							unwrap(): any;
							wrap(param0: any): any;
							lambda$onClose$0(closeHandler: org.apache.commons.io.function.IORunnable): void;
							close(): void;
							close(): void;
						});
						public constructor();
						public anyMatch(predicate: org.apache.commons.io.function.IOPredicate<any>): boolean;
						public parallel(): any;
						public close(): void;
						public static iterate(seed: any, f: org.apache.commons.io.function.IOUnaryOperator<any>): org.apache.commons.io.function.IOStream<any>;
						public flatMapToLong(mapper: org.apache.commons.io.function.IOFunction<any,any>): java.util.stream.LongStream;
						public static of(values: java.lang.Iterable<any>): org.apache.commons.io.function.IOStream<any>;
						public collect(collector: java.util.stream.Collector): any;
						public peek(action: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOStream<any>;
						public sorted(comparator: org.apache.commons.io.function.IOComparator<any>): org.apache.commons.io.function.IOStream<any>;
						public allMatch(predicate: org.apache.commons.io.function.IOPredicate<any>): boolean;
						public isParallel(): boolean;
						public toArray(): any[];
						public max(comparator: org.apache.commons.io.function.IOComparator<any>): java.util.Optional<any>;
						public sequential(): any;
						public unordered(): any;
						public onClose(closeHandler: org.apache.commons.io.function.IORunnable): any;
						public static empty(): org.apache.commons.io.function.IOStream<any>;
						public static of(...values: any[]): org.apache.commons.io.function.IOStream<any>;
						public mapToDouble(mapper: any /* any*/): java.util.stream.DoubleStream;
						public flatMap(mapper: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOStream<any>;
						public toArray(generator: any /* any*/): any[];
						public distinct(): org.apache.commons.io.function.IOStream<any>;
						public findFirst(): java.util.Optional<any>;
						public limit(maxSize: number): org.apache.commons.io.function.IOStream<any>;
						public skip(n: number): org.apache.commons.io.function.IOStream<any>;
						public sorted(): org.apache.commons.io.function.IOStream<any>;
						public reduce(identity: any, accumulator: org.apache.commons.io.function.IOBiFunction<any,any,any>, combiner: org.apache.commons.io.function.IOBinaryOperator<any>): any;
						public iterator(): org.apache.commons.io.function.IOIterator<any>;
						public filter(predicate: org.apache.commons.io.function.IOPredicate<any>): org.apache.commons.io.function.IOStream<any>;
						public findAny(): java.util.Optional<any>;
						public asBaseStream(): java.util.stream.BaseStream<any,any>;
						public forEachOrdered(action: org.apache.commons.io.function.IOConsumer<any>): void;
						public reduce(accumulator: org.apache.commons.io.function.IOBinaryOperator<any>): java.util.Optional<any>;
						public static of(t: any): org.apache.commons.io.function.IOStream<any>;
						public static adapt(stream: java.util.stream.Stream): org.apache.commons.io.function.IOStream<any>;
						public map(mapper: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOStream<any>;
						public mapToLong(mapper: any /* any*/): java.util.stream.LongStream;
						public count(): number;
						public reduce(identity: any, accumulator: org.apache.commons.io.function.IOBinaryOperator<any>): any;
						public min(comparator: org.apache.commons.io.function.IOComparator<any>): java.util.Optional<any>;
						public wrap(param0: any): any;
						public mapToInt(mapper: any /* any*/): java.util.stream.IntStream;
						public collect(supplier: org.apache.commons.io.function.IOSupplier<any>, accumulator: org.apache.commons.io.function.IOBiConsumer<any,any>, combiner: org.apache.commons.io.function.IOBiConsumer<any,any>): any;
						public forAll(action: org.apache.commons.io.function.IOConsumer<any>): void;
						public flatMapToDouble(mapper: org.apache.commons.io.function.IOFunction<any,any>): java.util.stream.DoubleStream;
						public forAll(action: org.apache.commons.io.function.IOConsumer<any>, exSupplier: any /* any<java.lang.Integer,java.io.IOException,java.io.IOException>*/): void;
						public forEach(action: org.apache.commons.io.function.IOConsumer<any>): void;
						public noneMatch(predicate: org.apache.commons.io.function.IOPredicate<any>): boolean;
						public flatMapToInt(mapper: org.apache.commons.io.function.IOFunction<any,any>): java.util.stream.IntStream;
						public spliterator(): org.apache.commons.io.function.IOSpliterator<any>;
						public unwrap(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOStreamAdapter<T>  extends org.apache.commons.io.function.IOBaseStreamAdapter<any,org.apache.commons.io.function.IOStream<any>,java.util.stream.Stream<any>> implements org.apache.commons.io.function.IOStream<any>  {
						public static class: java.lang.Class<org.apache.commons.io.function.IOStreamAdapter<any>>;
						public anyMatch(predicate: org.apache.commons.io.function.IOPredicate<any>): boolean;
						public parallel(): any;
						public close(): void;
						public static iterate(seed: any, f: org.apache.commons.io.function.IOUnaryOperator<any>): org.apache.commons.io.function.IOStream<any>;
						public flatMapToLong(mapper: org.apache.commons.io.function.IOFunction<any,any>): java.util.stream.LongStream;
						public static of(values: java.lang.Iterable<any>): org.apache.commons.io.function.IOStream<any>;
						public collect(collector: java.util.stream.Collector): any;
						public peek(action: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOStream<any>;
						public sorted(comparator: org.apache.commons.io.function.IOComparator<any>): org.apache.commons.io.function.IOStream<any>;
						public allMatch(predicate: org.apache.commons.io.function.IOPredicate<any>): boolean;
						public isParallel(): boolean;
						public toArray(): any[];
						public max(comparator: org.apache.commons.io.function.IOComparator<any>): java.util.Optional<any>;
						public sequential(): any;
						public unordered(): any;
						public onClose(closeHandler: org.apache.commons.io.function.IORunnable): any;
						public static empty(): org.apache.commons.io.function.IOStream<any>;
						public static of(...values: any[]): org.apache.commons.io.function.IOStream<any>;
						public mapToDouble(mapper: any /* any*/): java.util.stream.DoubleStream;
						public flatMap(mapper: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOStream<any>;
						public toArray(generator: any /* any*/): any[];
						public distinct(): org.apache.commons.io.function.IOStream<any>;
						public findFirst(): java.util.Optional<any>;
						public limit(maxSize: number): org.apache.commons.io.function.IOStream<any>;
						public skip(n: number): org.apache.commons.io.function.IOStream<any>;
						public sorted(): org.apache.commons.io.function.IOStream<any>;
						public reduce(identity: any, accumulator: org.apache.commons.io.function.IOBiFunction<any,any,any>, combiner: org.apache.commons.io.function.IOBinaryOperator<any>): any;
						public iterator(): org.apache.commons.io.function.IOIterator<any>;
						public filter(predicate: org.apache.commons.io.function.IOPredicate<any>): org.apache.commons.io.function.IOStream<any>;
						public findAny(): java.util.Optional<any>;
						public asBaseStream(): java.util.stream.BaseStream<any,any>;
						public forEachOrdered(action: org.apache.commons.io.function.IOConsumer<any>): void;
						public reduce(accumulator: org.apache.commons.io.function.IOBinaryOperator<any>): java.util.Optional<any>;
						public static of(t: any): org.apache.commons.io.function.IOStream<any>;
						public wrap(delegate: java.util.stream.Stream<any>): org.apache.commons.io.function.IOStream<any>;
						public static adapt(stream: java.util.stream.Stream): org.apache.commons.io.function.IOStream<any>;
						public map(mapper: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOStream<any>;
						public mapToLong(mapper: any /* any*/): java.util.stream.LongStream;
						public count(): number;
						public reduce(identity: any, accumulator: org.apache.commons.io.function.IOBinaryOperator<any>): any;
						public min(comparator: org.apache.commons.io.function.IOComparator<any>): java.util.Optional<any>;
						public wrap(param0: any): any;
						public mapToInt(mapper: any /* any*/): java.util.stream.IntStream;
						public collect(supplier: org.apache.commons.io.function.IOSupplier<any>, accumulator: org.apache.commons.io.function.IOBiConsumer<any,any>, combiner: org.apache.commons.io.function.IOBiConsumer<any,any>): any;
						public forAll(action: org.apache.commons.io.function.IOConsumer<any>): void;
						public flatMapToDouble(mapper: org.apache.commons.io.function.IOFunction<any,any>): java.util.stream.DoubleStream;
						public forAll(action: org.apache.commons.io.function.IOConsumer<any>, exSupplier: any /* any<java.lang.Integer,java.io.IOException,java.io.IOException>*/): void;
						public forEach(action: org.apache.commons.io.function.IOConsumer<any>): void;
						public noneMatch(predicate: org.apache.commons.io.function.IOPredicate<any>): boolean;
						public flatMapToInt(mapper: org.apache.commons.io.function.IOFunction<any,any>): java.util.stream.IntStream;
						public spliterator(): org.apache.commons.io.function.IOSpliterator<any>;
						public unwrap(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOStreams extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOStreams>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOSupplier<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOSupplier<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOSupplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							asSupplier(): any /* any*/;
							get(): T;
							lambda$asSupplier$0(): any;
						});
						public constructor();
						public asSupplier(): any /* any*/;
						public get(): T;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOTriConsumer<T, U, V>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOTriConsumer<any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOTriConsumer<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							noop(): org.apache.commons.io.function.IOTriConsumer<any,any,any>;
							accept(param0: T, param1: U, param2: V): void;
							andThen(after: org.apache.commons.io.function.IOTriConsumer<any,any,any>): org.apache.commons.io.function.IOTriConsumer<T,U,V>;
							lambda$andThen$0(after: org.apache.commons.io.function.IOTriConsumer<any,any,any>, t: any, u: any, v: any): void;
						});
						public constructor();
						public accept(param0: T, param1: U, param2: V): void;
						public andThen(after: org.apache.commons.io.function.IOTriConsumer<any,any,any>): org.apache.commons.io.function.IOTriConsumer<T,U,V>;
						public static noop(): org.apache.commons.io.function.IOTriConsumer<any,any,any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOTriFunction<T, U, V, R>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOTriFunction<any,any,any,any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOTriFunction<any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOTriFunction<any,any,any,any>;
							apply(param0: T, param1: U, param2: V): R;
							lambda$andThen$0(after: org.apache.commons.io.function.IOFunction<any,any>, t: any, u: any, v: any): any;
						});
						public constructor();
						public andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOTriFunction<any,any,any,any>;
						public apply(param0: T, param1: U, param2: V): R;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class IOUnaryOperator<T>  extends org.apache.commons.io.function.IOFunction<any,any> {
						public static class: java.lang.Class<org.apache.commons.io.function.IOUnaryOperator<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOUnaryOperator<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							identity(): org.apache.commons.io.function.IOUnaryOperator<any>;
							asUnaryOperator(): any /* any*/;
							lambda$asUnaryOperator$1(t: any): any;
							lambda$identity$0(t: any): any;
							identity(): org.apache.commons.io.function.IOFunction<any,any>;
							andThen(after: any /* any*/): org.apache.commons.io.function.IOConsumer<any>;
							andThen(after: any /* any*/): org.apache.commons.io.function.IOFunction<any,any>;
							andThen(after: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOConsumer<any>;
							andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOFunction<any,any>;
							apply(param0: any): any;
							asFunction(): any /* any<any,any>*/;
							compose(before: any /* any*/): org.apache.commons.io.function.IOFunction<any,any>;
							compose(before: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOFunction<any,any>;
							compose(before: org.apache.commons.io.function.IOSupplier<any>): org.apache.commons.io.function.IOSupplier<any>;
							compose(before: any /* any*/): org.apache.commons.io.function.IOSupplier<any>;
							lambda$compose$8(before: any /* any*/): any;
							lambda$compose$7(before: org.apache.commons.io.function.IOSupplier<any>): any;
							lambda$compose$6(before: org.apache.commons.io.function.IOFunction<any,any>, v: any): any;
							lambda$compose$5(before: any /* any*/, v: any): any;
							lambda$asFunction$4(t: any): any;
							lambda$andThen$3(after: org.apache.commons.io.function.IOFunction<any,any>, t: any): any;
							lambda$andThen$2(after: org.apache.commons.io.function.IOConsumer<any>, t: any): void;
							lambda$andThen$1(after: any /* any*/, t: any): any;
							lambda$andThen$0(after: any /* any*/, t: any): void;
						});
						public constructor();
						public andThen(after: any /* any*/): org.apache.commons.io.function.IOConsumer<any>;
						public asFunction(): any /* any<any,any>*/;
						public andThen(after: any /* any*/): org.apache.commons.io.function.IOFunction<any,any>;
						public compose(before: org.apache.commons.io.function.IOSupplier<any>): org.apache.commons.io.function.IOSupplier<any>;
						public compose(before: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOFunction<any,any>;
						public apply(param0: any): any;
						public static identity(): org.apache.commons.io.function.IOUnaryOperator<any>;
						public compose(before: any /* any*/): org.apache.commons.io.function.IOFunction<any,any>;
						public static identity(): org.apache.commons.io.function.IOFunction<any,any>;
						public andThen(after: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOConsumer<any>;
						public andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOFunction<any,any>;
						public compose(before: any /* any*/): org.apache.commons.io.function.IOSupplier<any>;
						public asUnaryOperator(): any /* any*/;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class Uncheck extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.Uncheck>;
						public static accept(consumer: org.apache.commons.io.function.IOTriConsumer<any,any,any>, t: any, u: any, v: any): void;
						public static apply(_function_: org.apache.commons.io.function.IOFunction<any,any>, t: any): any;
						public static run(runnable: org.apache.commons.io.function.IORunnable, message: any /* any*/): void;
						public static apply(_function_: org.apache.commons.io.function.IOQuadFunction<any,any,any,any,any>, t: any, u: any, v: any, w: any): any;
						public static getAsInt(supplier: org.apache.commons.io.function.IOIntSupplier, message: any /* any*/): number;
						public static accept(consumer: org.apache.commons.io.function.IOConsumer<any>, t: any): void;
						public static apply(_function_: org.apache.commons.io.function.IOTriFunction<any,any,any,any>, t: any, u: any, v: any): any;
						public static get(supplier: org.apache.commons.io.function.IOSupplier<any>, message: any /* any*/): any;
						public static getAsInt(supplier: org.apache.commons.io.function.IOIntSupplier): number;
						public static getAsLong(supplier: org.apache.commons.io.function.IOLongSupplier): number;
						public static run(runnable: org.apache.commons.io.function.IORunnable): void;
						public static test(predicate: org.apache.commons.io.function.IOPredicate<any>, t: any): boolean;
						public static accept(consumer: org.apache.commons.io.function.IOBiConsumer<any,any>, t: any, u: any): void;
						public static apply(_function_: org.apache.commons.io.function.IOBiFunction<any,any,any>, t: any, u: any): any;
						public static compare(comparator: org.apache.commons.io.function.IOComparator<any>, t: any, u: any): number;
						public static get(supplier: org.apache.commons.io.function.IOSupplier<any>): any;
						public static getAsLong(supplier: org.apache.commons.io.function.IOLongSupplier, message: any /* any*/): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class UncheckedIOBaseStream<T, S, B>  extends java.util.stream.BaseStream<any,any> {
						public static class: java.lang.Class<org.apache.commons.io.function.UncheckedIOBaseStream<any,any,any>>;
						public isParallel(): boolean;
						public iterator(): java.util.Iterator<any>;
						public parallel(): any;
						public onClose(param0: java.lang.Runnable): any;
						public close(): void;
						public spliterator(): java.util.Spliterator<any>;
						public onClose(closeHandler: java.lang.Runnable): any;
						public sequential(): any;
						public unordered(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class UncheckedIOIterator<E>  extends java.util.Iterator<any> {
						public static class: java.lang.Class<org.apache.commons.io.function.UncheckedIOIterator<any>>;
						public next(): any;
						public hasNext(): boolean;
						public remove(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module function {
					export class UncheckedIOSpliterator<T>  extends java.util.Spliterator<any> {
						public static class: java.lang.Class<org.apache.commons.io.function.UncheckedIOSpliterator<any>>;
						public tryAdvance(action: any /* any*/): boolean;
						public getExactSizeIfKnown(): number;
						public trySplit(): java.util.Spliterator<any>;
						public estimateSize(): number;
						public tryAdvance(param0: any /* any*/): boolean;
						public getComparator(): java.util.Comparator<any>;
						public hasCharacteristics(characteristics: number): boolean;
						public characteristics(): number;
						public forEachRemaining(action: any /* any*/): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export abstract class AbstractCharacterFilterReader extends java.io.FilterReader {
						public static class: java.lang.Class<org.apache.commons.io.input.AbstractCharacterFilterReader>;
						public static SKIP_NONE: any /* any*/;
						public read(): number;
						public constructor();
						public constructor(lock: any);
						public filter(ch: number): boolean;
						public constructor(reader: java.io.Reader);
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public read(cbuf: string[]): number;
						public constructor(reader: java.io.Reader, skip: any /* any*/);
						public read(target: java.nio.CharBuffer): number;
						public constructor(_in_: java.io.Reader);
						public read(param0: java.nio.CharBuffer): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class AutoCloseInputStream extends org.apache.commons.io.input.ProxyInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.AutoCloseInputStream>;
						/** @deprecated */
						public constructor(_in_: java.io.InputStream);
						public constructor();
						public close(): void;
						public afterRead(n: number): void;
						public static builder(): org.apache.commons.io.input.AutoCloseInputStream.Builder;
						public constructor(proxy: java.io.InputStream);
						public finalize(): void;
					}
					export module AutoCloseInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.AutoCloseInputStream,org.apache.commons.io.input.AutoCloseInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.AutoCloseInputStream.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.input.AutoCloseInputStream;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class BOMInputStream extends org.apache.commons.io.input.ProxyInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.BOMInputStream>;
						public hasBOM(bom: org.apache.commons.io.ByteOrderMark): boolean;
						public read(): number;
						public constructor();
						/** @deprecated */
						public constructor(delegate: java.io.InputStream, include: boolean);
						public read(bts: number[]): number;
						public read(buf: number[], off: number, len: number): number;
						public getBOMCharsetName(): string;
						public close(): void;
						public hasBOM(): boolean;
						public constructor(proxy: java.io.InputStream);
						public skip(ln: number): number;
						public skip(n: number): number;
						public static builder(): org.apache.commons.io.input.BOMInputStream.Builder;
						/** @deprecated */
						public constructor(delegate: java.io.InputStream, ...boms: org.apache.commons.io.ByteOrderMark[]);
						public mark(readlimit: number): void;
						public read(buf: number[]): number;
						/** @deprecated */
						public constructor(delegate: java.io.InputStream);
						public read(bts: number[], off: number, len: number): number;
						/** @deprecated */
						public constructor(delegate: java.io.InputStream, include: boolean, ...boms: org.apache.commons.io.ByteOrderMark[]);
						public getBOM(): org.apache.commons.io.ByteOrderMark;
						public reset(): void;
					}
					export module BOMInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.BOMInputStream,org.apache.commons.io.input.BOMInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.BOMInputStream.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.input.BOMInputStream;
							public setInclude(include: boolean): org.apache.commons.io.input.BOMInputStream.Builder;
							public asSupplier(): any /* any*/;
							public setByteOrderMarks(...byteOrderMarks: org.apache.commons.io.ByteOrderMark[]): org.apache.commons.io.input.BOMInputStream.Builder;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class BoundedInputStream extends java.io.FilterInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.BoundedInputStream>;
						public read(): number;
						public constructor();
						public close(): void;
						public constructor(inputStream: java.io.InputStream, maxLength: number);
						public getCount(): number;
						public getMaxLength(): number;
						public read(b: number[]): number;
						public toString(): string;
						public available(): number;
						public skip(n: number): number;
						public constructor(_in_: java.io.InputStream);
						public onMaxLength(maxLength: number, param1: number): void;
						public isPropagateClose(): boolean;
						public mark(readlimit: number): void;
						public read(b: number[], off: number, len: number): number;
						public setPropagateClose(propagateClose: boolean): void;
						public markSupported(): boolean;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class BoundedReader extends java.io.Reader {
						public static class: java.lang.Class<org.apache.commons.io.input.BoundedReader>;
						public mark(readAheadLimit: number): void;
						public read(): number;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public read(cbuf: string[]): number;
						public read(target: java.nio.CharBuffer): number;
						public constructor(target: java.io.Reader, maxCharsFromTargetReader: number);
						public read(param0: java.nio.CharBuffer): number;
						public reset(): void;
						public read(param0: string[], param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class BrokenInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.BrokenInputStream>;
						public static INSTANCE: org.apache.commons.io.input.BrokenInputStream;
						public constructor(exception: java.io.IOException);
						public read(): number;
						public constructor();
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public read(b: number[]): number;
						public constructor(exceptionSupplier: any /* any*/);
						public reset(): void;
						public available(): number;
						public skip(n: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class BrokenReader extends java.io.Reader {
						public static class: java.lang.Class<org.apache.commons.io.input.BrokenReader>;
						public static INSTANCE: org.apache.commons.io.input.BrokenReader;
						public constructor(exception: java.io.IOException);
						public read(): number;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public read(cbuf: string[]): number;
						public ready(): boolean;
						public skip(n: number): number;
						public mark(readAheadLimit: number): void;
						public read(target: java.nio.CharBuffer): number;
						public constructor(exceptionSupplier: any /* any*/);
						public read(param0: java.nio.CharBuffer): number;
						public reset(): void;
						public read(param0: string[], param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class BufferedFileChannelInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.BufferedFileChannelInputStream>;
						public read(): number;
						public constructor();
						public close(): void;
						/** @deprecated */
						public constructor(file: java.io.File, bufferSize: number);
						public read(b: number[]): number;
						/** @deprecated */
						public constructor(path: java.nio.file.Path, bufferSize: number);
						public available(): number;
						public skip(n: number): number;
						/** @deprecated */
						public constructor(file: java.io.File);
						public read(b: number[], offset: number, len: number): number;
						/** @deprecated */
						public constructor(path: java.nio.file.Path);
						public read(b: number[], off: number, len: number): number;
						public static builder(): org.apache.commons.io.input.BufferedFileChannelInputStream.Builder;
					}
					export module BufferedFileChannelInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.BufferedFileChannelInputStream,org.apache.commons.io.input.BufferedFileChannelInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.BufferedFileChannelInputStream.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.input.BufferedFileChannelInputStream;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class ByteBufferCleaner extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.input.ByteBufferCleaner>;
					}
					export module ByteBufferCleaner {
						export class Cleaner extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.io.input.ByteBufferCleaner.Cleaner>;
							/**
							 * Constructs a new instance of the org.apache.commons.io.input.ByteBufferCleaner$Cleaner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								clean(param0: java.nio.ByteBuffer): void;
							});
							public constructor();
							public clean(param0: java.nio.ByteBuffer): void;
						}
						export class Java8Cleaner extends java.lang.Object implements org.apache.commons.io.input.ByteBufferCleaner.Cleaner {
							public static class: java.lang.Class<org.apache.commons.io.input.ByteBufferCleaner.Java8Cleaner>;
							public clean(param0: java.nio.ByteBuffer): void;
							public clean(buffer: java.nio.ByteBuffer): void;
						}
						export class Java9Cleaner extends java.lang.Object implements org.apache.commons.io.input.ByteBufferCleaner.Cleaner {
							public static class: java.lang.Class<org.apache.commons.io.input.ByteBufferCleaner.Java9Cleaner>;
							public clean(param0: java.nio.ByteBuffer): void;
							public clean(buffer: java.nio.ByteBuffer): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class CharSequenceInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.CharSequenceInputStream>;
						public read(): number;
						public constructor();
						/** @deprecated */
						public constructor(cs: string, charset: java.nio.charset.Charset, bufferSize: number);
						public close(): void;
						public read(array: number[], off: number, len: number): number;
						public read(b: number[]): number;
						public static builder(): org.apache.commons.io.input.CharSequenceInputStream.Builder;
						public available(): number;
						public skip(n: number): number;
						public mark(readlimit: number): void;
						public read(b: number[], off: number, len: number): number;
						public markSupported(): boolean;
						/** @deprecated */
						public constructor(cs: string, charset: java.nio.charset.Charset);
						/** @deprecated */
						public constructor(cs: string, charset: string, bufferSize: number);
						public reset(): void;
						/** @deprecated */
						public constructor(cs: string, charset: string);
					}
					export module CharSequenceInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.CharSequenceInputStream,org.apache.commons.io.input.CharSequenceInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.CharSequenceInputStream.Builder>;
							public constructor();
							public setCharset(charset: java.nio.charset.Charset): any;
							public setCharset(charset: java.nio.charset.Charset): org.apache.commons.io.input.CharSequenceInputStream.Builder;
							public get(): any;
							public setCharsetEncoder(newEncoder: java.nio.charset.CharsetEncoder): org.apache.commons.io.input.CharSequenceInputStream.Builder;
							public asSupplier(): any /* any*/;
							public get(): org.apache.commons.io.input.CharSequenceInputStream;
							public setCharset(charset: string): any;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class CharSequenceReader extends java.io.Reader implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.input.CharSequenceReader>;
						public read(): number;
						public constructor();
						public constructor(lock: any);
						public read(array: string[], offset: number, length: number): number;
						public close(): void;
						public read(cbuf: string[]): number;
						public constructor(charSequence: string);
						public toString(): string;
						public ready(): boolean;
						public skip(n: number): number;
						public mark(readAheadLimit: number): void;
						public constructor(charSequence: string, start: number, end: number);
						public markSupported(): boolean;
						public read(target: java.nio.CharBuffer): number;
						public read(param0: java.nio.CharBuffer): number;
						public reset(): void;
						public constructor(charSequence: string, start: number);
						public read(param0: string[], param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class CharacterFilterReader extends org.apache.commons.io.input.AbstractCharacterFilterReader {
						public static class: java.lang.Class<org.apache.commons.io.input.CharacterFilterReader>;
						public read(): number;
						public constructor();
						public constructor(lock: any);
						public constructor(reader: java.io.Reader);
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public constructor(reader: java.io.Reader, skip: number);
						public read(cbuf: string[]): number;
						public constructor(reader: java.io.Reader, skip: any /* any*/);
						public read(target: java.nio.CharBuffer): number;
						public read(param0: java.nio.CharBuffer): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class CharacterSetFilterReader extends org.apache.commons.io.input.AbstractCharacterFilterReader {
						public static class: java.lang.Class<org.apache.commons.io.input.CharacterSetFilterReader>;
						public read(): number;
						public constructor();
						public constructor(reader: java.io.Reader, ...skip: java.lang.Integer[]);
						public constructor(lock: any);
						public constructor(reader: java.io.Reader);
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public read(cbuf: string[]): number;
						public constructor(reader: java.io.Reader, skip: any /* any*/);
						public read(target: java.nio.CharBuffer): number;
						public read(param0: java.nio.CharBuffer): number;
						public constructor(reader: java.io.Reader, skip: java.util.Set<java.lang.Integer>);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class CircularInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.CircularInputStream>;
						public read(): number;
						public constructor();
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public read(b: number[]): number;
						public constructor(repeatContent: number[], targetByteCount: number);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class ClassLoaderObjectInputStream extends java.io.ObjectInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.ClassLoaderObjectInputStream>;
						public resolveClass(desc: java.io.ObjectStreamClass): java.lang.Class<any>;
						public read(): number;
						public skip(param0: number): number;
						public constructor();
						public read(buf: number[], off: number, len: number): number;
						public close(): void;
						public resolveClass(objectStreamClass: java.io.ObjectStreamClass): java.lang.Class<any>;
						public resolveProxyClass(interfaces: string[]): java.lang.Class<any>;
						public read(b: number[]): number;
						public read(param0: number[]): number;
						public skip(n: number): number;
						public available(): number;
						public constructor(_in_: java.io.InputStream);
						public constructor(classLoader: java.lang.ClassLoader, inputStream: java.io.InputStream);
						public read(param0: number[], param1: number, param2: number): number;
						public readObject(): any;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class CloseShieldInputStream extends org.apache.commons.io.input.ProxyInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.CloseShieldInputStream>;
						public constructor();
						public close(): void;
						public static wrap(inputStream: java.io.InputStream): org.apache.commons.io.input.CloseShieldInputStream;
						/** @deprecated */
						public constructor(inputStream: java.io.InputStream);
						public constructor(proxy: java.io.InputStream);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class CloseShieldReader extends org.apache.commons.io.input.ProxyReader {
						public static class: java.lang.Class<org.apache.commons.io.input.CloseShieldReader>;
						public read(): number;
						public constructor();
						/** @deprecated */
						public constructor(reader: java.io.Reader);
						public constructor(lock: any);
						public close(): void;
						public static wrap(reader: java.io.Reader): org.apache.commons.io.input.CloseShieldReader;
						public constructor(proxy: java.io.Reader);
						public read(chr: string[], st: number, len: number): number;
						public read(target: java.nio.CharBuffer): number;
						public read(param0: java.nio.CharBuffer): number;
						public read(chr: string[]): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class ClosedInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.ClosedInputStream>;
						public static INSTANCE: org.apache.commons.io.input.ClosedInputStream;
						public static CLOSED_INPUT_STREAM: org.apache.commons.io.input.ClosedInputStream;
						public read(): number;
						public constructor();
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public read(b: number[]): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class ClosedReader extends java.io.Reader {
						public static class: java.lang.Class<org.apache.commons.io.input.ClosedReader>;
						public static INSTANCE: org.apache.commons.io.input.ClosedReader;
						public static CLOSED_READER: org.apache.commons.io.input.ClosedReader;
						public read(): number;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public read(cbuf: string[]): number;
						public read(target: java.nio.CharBuffer): number;
						public read(param0: java.nio.CharBuffer): number;
						public read(param0: string[], param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class CountingInputStream extends org.apache.commons.io.input.ProxyInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.CountingInputStream>;
						public constructor();
						public constructor(_in_: java.io.InputStream);
						public close(): void;
						public afterRead(n: number): void;
						public getCount(): number;
						public constructor(proxy: java.io.InputStream);
						public getByteCount(): number;
						public resetByteCount(): number;
						public skip(ln: number): number;
						public skip(length: number): number;
						public resetCount(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class DemuxInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.DemuxInputStream>;
						public read(): number;
						public constructor();
						public bindStream(input: java.io.InputStream): java.io.InputStream;
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public read(b: number[]): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class InfiniteCircularInputStream extends org.apache.commons.io.input.CircularInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.InfiniteCircularInputStream>;
						public constructor();
						public close(): void;
						public constructor(repeatContent: number[]);
						public constructor(repeatContent: number[], targetByteCount: number);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class MarkShieldInputStream extends org.apache.commons.io.input.ProxyInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.MarkShieldInputStream>;
						public constructor();
						public constructor(_in_: java.io.InputStream);
						public mark(readlimit: number): void;
						public close(): void;
						public markSupported(): boolean;
						public constructor(proxy: java.io.InputStream);
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class MemoryMappedFileInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.MemoryMappedFileInputStream>;
						public read(): number;
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public static builder(): org.apache.commons.io.input.MemoryMappedFileInputStream.Builder;
						public read(b: number[]): number;
						public available(): number;
						public skip(n: number): number;
					}
					export module MemoryMappedFileInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.MemoryMappedFileInputStream,org.apache.commons.io.input.MemoryMappedFileInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.MemoryMappedFileInputStream.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.input.MemoryMappedFileInputStream;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class MessageDigestCalculatingInputStream extends org.apache.commons.io.input.ObservableInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.MessageDigestCalculatingInputStream>;
						/** @deprecated */
						public constructor(inputStream: java.io.InputStream, algorithm: string);
						public constructor();
						public close(): void;
						public getMessageDigest(): java.security.MessageDigest;
						/** @deprecated */
						public constructor(inputStream: java.io.InputStream, messageDigest: java.security.MessageDigest);
						public static builder(): org.apache.commons.io.input.MessageDigestCalculatingInputStream.Builder;
						/** @deprecated */
						public constructor(inputStream: java.io.InputStream);
						public constructor(inputStream: java.io.InputStream);
						public constructor(inputStream: java.io.InputStream, ...observers: org.apache.commons.io.input.ObservableInputStream.Observer[]);
					}
					export module MessageDigestCalculatingInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.MessageDigestCalculatingInputStream,org.apache.commons.io.input.MessageDigestCalculatingInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.MessageDigestCalculatingInputStream.Builder>;
							public constructor();
							public get(): any;
							public setMessageDigest(algorithm: string): void;
							public setMessageDigest(messageDigest: java.security.MessageDigest): void;
							public get(): org.apache.commons.io.input.MessageDigestCalculatingInputStream;
							public asSupplier(): any /* any*/;
						}
						export class MessageDigestMaintainingObserver extends org.apache.commons.io.input.ObservableInputStream.Observer {
							public static class: java.lang.Class<org.apache.commons.io.input.MessageDigestCalculatingInputStream.MessageDigestMaintainingObserver>;
							public constructor();
							public data(value: number): void;
							public constructor(messageDigest: java.security.MessageDigest);
							public data(buffer: number[], offset: number, length: number): void;
							public data(input: number[], offset: number, length: number): void;
							public data(input: number): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class NullInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.NullInputStream>;
						public static INSTANCE: org.apache.commons.io.input.NullInputStream;
						public processByte(): number;
						public read(bytes: number[], offset: number, length: number): number;
						public read(): number;
						public constructor();
						public skip(numberOfBytes: number): number;
						public close(): void;
						public constructor(size: number, param1: boolean, markSupported: boolean);
						public getPosition(): number;
						public read(b: number[]): number;
						public available(): number;
						public skip(n: number): number;
						public read(bytes: number[]): number;
						public getSize(): number;
						public mark(readlimit: number): void;
						public read(b: number[], off: number, len: number): number;
						public constructor(size: number);
						public markSupported(): boolean;
						public processBytes(bytes: number[], offset: number, length: number): void;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class NullReader extends java.io.Reader {
						public static class: java.lang.Class<org.apache.commons.io.input.NullReader>;
						public static INSTANCE: org.apache.commons.io.input.NullReader;
						public read(chars: string[], offset: number, length: number): number;
						public read(): number;
						public constructor();
						public read(chars: string[]): number;
						public constructor(lock: any);
						public close(): void;
						public processChar(): number;
						public constructor(size: number, param1: boolean, markSupported: boolean);
						public getPosition(): number;
						public read(cbuf: string[]): number;
						public skip(numberOfChars: number): number;
						public skip(n: number): number;
						public mark(readAheadLimit: number): void;
						public getSize(): number;
						public mark(readlimit: number): void;
						public constructor(size: number);
						public markSupported(): boolean;
						public processChars(chars: string[], offset: number, length: number): void;
						public read(target: java.nio.CharBuffer): number;
						public read(param0: java.nio.CharBuffer): number;
						public reset(): void;
						public read(param0: string[], param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class ObservableInputStream extends org.apache.commons.io.input.ProxyInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.ObservableInputStream>;
						public noteDataBytes(buffer: number[], offset: number, length: number): void;
						public read(): number;
						public constructor();
						public getObservers(): java.util.List<org.apache.commons.io.input.ObservableInputStream.Observer>;
						public read(bts: number[]): number;
						public close(): void;
						public noteError(exception: java.io.IOException): void;
						public noteDataByte(value: number): void;
						public read(buffer: number[]): number;
						public remove(observer: org.apache.commons.io.input.ObservableInputStream.Observer): void;
						public removeAllObservers(): void;
						public constructor(proxy: java.io.InputStream);
						public noteFinished(): void;
						public read(buffer: number[], offset: number, length: number): number;
						public noteClosed(): void;
						public consume(): void;
						public read(bts: number[], off: number, len: number): number;
						public constructor(inputStream: java.io.InputStream);
						public add(observer: org.apache.commons.io.input.ObservableInputStream.Observer): void;
						public constructor(inputStream: java.io.InputStream, ...observers: org.apache.commons.io.input.ObservableInputStream.Observer[]);
					}
					export module ObservableInputStream {
						export abstract class Observer extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.io.input.ObservableInputStream.Observer>;
							public constructor();
							public data(value: number): void;
							public error(exception: java.io.IOException): void;
							public closed(): void;
							public data(buffer: number[], offset: number, length: number): void;
							public finished(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export abstract class ProxyInputStream extends java.io.FilterInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.ProxyInputStream>;
						public read(): number;
						public constructor();
						public beforeRead(n: number): void;
						public read(bts: number[]): number;
						public close(): void;
						public afterRead(n: number): void;
						public read(b: number[]): number;
						public constructor(proxy: java.io.InputStream);
						public skip(ln: number): number;
						public available(): number;
						public skip(n: number): number;
						public constructor(_in_: java.io.InputStream);
						public handleIOException(e: java.io.IOException): void;
						public mark(readlimit: number): void;
						public read(b: number[], off: number, len: number): number;
						public markSupported(): boolean;
						public read(bts: number[], off: number, len: number): number;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export abstract class ProxyReader extends java.io.FilterReader {
						public static class: java.lang.Class<org.apache.commons.io.input.ProxyReader>;
						public read(): number;
						public constructor();
						public beforeRead(n: number): void;
						public constructor(lock: any);
						public close(): void;
						public constructor(proxy: java.io.Reader);
						public afterRead(n: number): void;
						public read(cbuf: string[], off: number, len: number): number;
						public read(cbuf: string[]): number;
						public read(chr: string[], st: number, len: number): number;
						public mark(idx: number): void;
						public skip(ln: number): number;
						public read(chr: string[]): number;
						public ready(): boolean;
						public skip(n: number): number;
						public mark(readAheadLimit: number): void;
						public handleIOException(e: java.io.IOException): void;
						public markSupported(): boolean;
						public read(target: java.nio.CharBuffer): number;
						public constructor(_in_: java.io.Reader);
						public read(param0: java.nio.CharBuffer): number;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class QueueInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.QueueInputStream>;
						public read(): number;
						public constructor();
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public static builder(): org.apache.commons.io.input.QueueInputStream.Builder;
						public read(b: number[]): number;
						public newQueueOutputStream(): org.apache.commons.io.output.QueueOutputStream;
						/** @deprecated */
						public constructor(blockingQueue: java.util.concurrent.BlockingQueue<java.lang.Integer>);
					}
					export module QueueInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.QueueInputStream,org.apache.commons.io.input.QueueInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.QueueInputStream.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.input.QueueInputStream;
							public setTimeout(timeout: java.time.Duration): org.apache.commons.io.input.QueueInputStream.Builder;
							public setBlockingQueue(blockingQueue: java.util.concurrent.BlockingQueue<java.lang.Integer>): org.apache.commons.io.input.QueueInputStream.Builder;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class RandomAccessFileInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.RandomAccessFileInputStream>;
						public read(bytes: number[], offset: number, length: number): number;
						public availableLong(): number;
						public read(): number;
						public constructor();
						public skip(skipCount: number): number;
						public close(): void;
						public getRandomAccessFile(): java.io.RandomAccessFile;
						public read(b: number[]): number;
						public static builder(): org.apache.commons.io.input.RandomAccessFileInputStream.Builder;
						/** @deprecated */
						public constructor(file: java.io.RandomAccessFile, closeOnClose: boolean);
						public available(): number;
						public skip(n: number): number;
						public read(bytes: number[]): number;
						public read(b: number[], off: number, len: number): number;
						/** @deprecated */
						public constructor(file: java.io.RandomAccessFile);
						public isCloseOnClose(): boolean;
					}
					export module RandomAccessFileInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.RandomAccessFileInputStream,org.apache.commons.io.input.RandomAccessFileInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.RandomAccessFileInputStream.Builder>;
							public constructor();
							public get(): any;
							public setCloseOnClose(closeOnClose: boolean): org.apache.commons.io.input.RandomAccessFileInputStream.Builder;
							public get(): org.apache.commons.io.input.RandomAccessFileInputStream;
							public asSupplier(): any /* any*/;
							public setRandomAccessFile(randomAccessFile: java.io.RandomAccessFile): org.apache.commons.io.input.RandomAccessFileInputStream.Builder;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class ReadAheadInputStream extends java.io.FilterInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.ReadAheadInputStream>;
						public read(): number;
						public static builder(): org.apache.commons.io.input.ReadAheadInputStream.Builder;
						public constructor(_in_: java.io.InputStream);
						public constructor();
						/** @deprecated */
						public constructor(inputStream: java.io.InputStream, bufferSizeInBytes: number);
						public read(b: number[], offset: number, len: number): number;
						/** @deprecated */
						public constructor(inputStream: java.io.InputStream, bufferSizeInBytes: number, executorService: java.util.concurrent.ExecutorService);
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public read(b: number[]): number;
						public available(): number;
						public skip(n: number): number;
					}
					export module ReadAheadInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.ReadAheadInputStream,org.apache.commons.io.input.ReadAheadInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.ReadAheadInputStream.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.input.ReadAheadInputStream;
							public setExecutorService(executorService: java.util.concurrent.ExecutorService): org.apache.commons.io.input.ReadAheadInputStream.Builder;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class ReaderInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.ReaderInputStream>;
						public read(): number;
						public constructor();
						/** @deprecated */
						public constructor(reader: java.io.Reader);
						public close(): void;
						public read(array: number[], off: number, len: number): number;
						/** @deprecated */
						public constructor(reader: java.io.Reader, charsetName: string);
						public read(b: number[]): number;
						/** @deprecated */
						public constructor(reader: java.io.Reader, charset: java.nio.charset.Charset, bufferSize: number);
						/** @deprecated */
						public constructor(reader: java.io.Reader, charsetName: string, bufferSize: number);
						public static builder(): org.apache.commons.io.input.ReaderInputStream.Builder;
						/** @deprecated */
						public constructor(reader: java.io.Reader, charsetEncoder: java.nio.charset.CharsetEncoder);
						public read(b: number[], off: number, len: number): number;
						/** @deprecated */
						public constructor(reader: java.io.Reader, charset: java.nio.charset.Charset);
						/** @deprecated */
						public constructor(reader: java.io.Reader, charsetEncoder: java.nio.charset.CharsetEncoder, bufferSize: number);
					}
					export module ReaderInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.ReaderInputStream,org.apache.commons.io.input.ReaderInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.ReaderInputStream.Builder>;
							public constructor();
							public setCharset(charset: java.nio.charset.Charset): any;
							public get(): any;
							public setCharsetEncoder(newEncoder: java.nio.charset.CharsetEncoder): org.apache.commons.io.input.ReaderInputStream.Builder;
							public setCharset(charset: java.nio.charset.Charset): org.apache.commons.io.input.ReaderInputStream.Builder;
							public get(): org.apache.commons.io.input.ReaderInputStream;
							public asSupplier(): any /* any*/;
							public setCharset(charset: string): any;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class ReversedLinesFileReader extends java.lang.Object implements java.io.Closeable {
						public static class: java.lang.Class<org.apache.commons.io.input.ReversedLinesFileReader>;
						/** @deprecated */
						public constructor(file: java.nio.file.Path, charset: java.nio.charset.Charset);
						/** @deprecated */
						public constructor(file: java.nio.file.Path, blockSize: number, charsetName: string);
						public close(): void;
						public readLines(lineCount: number): java.util.List<string>;
						/** @deprecated */
						public constructor(file: java.io.File, charset: java.nio.charset.Charset);
						public toString(lineCount: number): string;
						public toString(): string;
						/** @deprecated */
						public constructor(file: java.io.File, blockSize: number, charsetName: string);
						/** @deprecated */
						public constructor(file: java.io.File);
						public static builder(): org.apache.commons.io.input.ReversedLinesFileReader.Builder;
						/** @deprecated */
						public constructor(file: java.io.File, blockSize: number, charset: java.nio.charset.Charset);
						/** @deprecated */
						public constructor(file: java.nio.file.Path, blockSize: number, charset: java.nio.charset.Charset);
						public readLine(): string;
					}
					export module ReversedLinesFileReader {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.ReversedLinesFileReader,org.apache.commons.io.input.ReversedLinesFileReader.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.ReversedLinesFileReader.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.input.ReversedLinesFileReader;
							public asSupplier(): any /* any*/;
						}
						export class FilePart extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.io.input.ReversedLinesFileReader.FilePart>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class SequenceReader extends java.io.Reader {
						public static class: java.lang.Class<org.apache.commons.io.input.SequenceReader>;
						public read(): number;
						public constructor();
						public constructor(readers: java.lang.Iterable<any>);
						public constructor(lock: any);
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public read(cbuf: string[]): number;
						public read(target: java.nio.CharBuffer): number;
						public constructor(...readers: java.io.Reader[]);
						public read(param0: java.nio.CharBuffer): number;
						public read(param0: string[], param1: number, param2: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class SwappedDataInputStream extends org.apache.commons.io.input.ProxyInputStream implements java.io.DataInput {
						public static class: java.lang.Class<org.apache.commons.io.input.SwappedDataInputStream>;
						public constructor();
						public skipBytes(param0: number): number;
						public readInt(): number;
						public readUnsignedByte(): number;
						public readUTF(): string;
						public readFully(param0: number[], param1: number, param2: number): void;
						public close(): void;
						public readChar(): string;
						public readDouble(): number;
						public readFully(param0: number[]): void;
						public constructor(proxy: java.io.InputStream);
						public readShort(): number;
						public skipBytes(count: number): number;
						public readByte(): number;
						public readFully(data: number[]): void;
						public readBoolean(): boolean;
						public readUnsignedShort(): number;
						public constructor(input: java.io.InputStream);
						public readFloat(): number;
						public readFully(data: number[], offset: number, length: number): void;
						public readLong(): number;
						public readLine(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class TaggedInputStream extends org.apache.commons.io.input.ProxyInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.TaggedInputStream>;
						public constructor();
						public isCauseOf(exception: java.lang.Throwable): boolean;
						public handleIOException(e: java.io.IOException): void;
						public close(): void;
						public constructor(proxy: java.io.InputStream);
						public throwIfCauseOf(throwable: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class TaggedReader extends org.apache.commons.io.input.ProxyReader {
						public static class: java.lang.Class<org.apache.commons.io.input.TaggedReader>;
						public read(): number;
						public constructor();
						public constructor(lock: any);
						public isCauseOf(exception: java.lang.Throwable): boolean;
						public handleIOException(e: java.io.IOException): void;
						public close(): void;
						public constructor(proxy: java.io.Reader);
						public read(chr: string[], st: number, len: number): number;
						public read(target: java.nio.CharBuffer): number;
						public read(param0: java.nio.CharBuffer): number;
						public throwIfCauseOf(throwable: java.lang.Throwable): void;
						public read(chr: string[]): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class Tailer extends java.lang.Object implements java.lang.Runnable, java.lang.AutoCloseable {
						public static class: java.lang.Class<org.apache.commons.io.input.Tailer>;
						/** @deprecated */
						public stop(): void;
						public close(): void;
						/** @deprecated */
						public constructor(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean, end: number);
						public getTailable(): org.apache.commons.io.input.Tailer.Tailable;
						public getRun(): boolean;
						/** @deprecated */
						public static create(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean, end: number): org.apache.commons.io.input.Tailer;
						public getDelayDuration(): java.time.Duration;
						/** @deprecated */
						public constructor(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean, end: boolean, reOpen: number);
						/** @deprecated */
						public static create(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean, end: boolean, reOpen: number): org.apache.commons.io.input.Tailer;
						/** @deprecated */
						public constructor(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean, end: boolean);
						public run(): void;
						/** @deprecated */
						public static create(file: java.io.File, charset: java.nio.charset.Charset, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param4: boolean, end: boolean, reOpen: number): org.apache.commons.io.input.Tailer;
						/** @deprecated */
						public getDelay(): number;
						public static builder(): org.apache.commons.io.input.Tailer.Builder;
						/** @deprecated */
						public constructor(file: java.io.File, charset: java.nio.charset.Charset, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param4: boolean, end: boolean, reOpen: number);
						/** @deprecated */
						public constructor(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean);
						public getFile(): java.io.File;
						/** @deprecated */
						public static create(file: java.io.File, listener: org.apache.commons.io.input.TailerListener): org.apache.commons.io.input.Tailer;
						/** @deprecated */
						public static create(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number): org.apache.commons.io.input.Tailer;
						/** @deprecated */
						public static create(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean): org.apache.commons.io.input.Tailer;
						/** @deprecated */
						public constructor(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number);
						/** @deprecated */
						public constructor(file: java.io.File, listener: org.apache.commons.io.input.TailerListener);
						/** @deprecated */
						public static create(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean, end: boolean): org.apache.commons.io.input.Tailer;
					}
					export module Tailer {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.Tailer,org.apache.commons.io.input.Tailer.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.Tailer.Builder>;
							public constructor();
							public setTailFromEnd(end: boolean): org.apache.commons.io.input.Tailer.Builder;
							public setTailable(tailable: org.apache.commons.io.input.Tailer.Tailable): org.apache.commons.io.input.Tailer.Builder;
							public setReOpen(reOpen: boolean): org.apache.commons.io.input.Tailer.Builder;
							public setDelayDuration(delayDuration: java.time.Duration): org.apache.commons.io.input.Tailer.Builder;
							public asSupplier(): any /* any*/;
							public setStartThread(startThread: boolean): org.apache.commons.io.input.Tailer.Builder;
							public get(): any;
							public setOrigin(origin: org.apache.commons.io.build.AbstractOrigin<any,any>): any;
							public get(): org.apache.commons.io.input.Tailer;
							public setOrigin(origin: org.apache.commons.io.build.AbstractOrigin<any,any>): org.apache.commons.io.input.Tailer.Builder;
							public setExecutorService(executorService: java.util.concurrent.ExecutorService): org.apache.commons.io.input.Tailer.Builder;
							public setTailerListener(tailerListener: org.apache.commons.io.input.TailerListener): org.apache.commons.io.input.Tailer.Builder;
						}
						export class RandomAccessFileBridge extends java.lang.Object implements org.apache.commons.io.input.Tailer.RandomAccessResourceBridge {
							public static class: java.lang.Class<org.apache.commons.io.input.Tailer.RandomAccessFileBridge>;
							public getPointer(): number;
							public close(): void;
							public seek(param0: number): void;
							public read(param0: number[]): number;
							public seek(position: number): void;
							public read(b: number[]): number;
						}
						export class RandomAccessResourceBridge extends java.lang.Object implements java.io.Closeable {
							public static class: java.lang.Class<org.apache.commons.io.input.Tailer.RandomAccessResourceBridge>;
							/**
							 * Constructs a new instance of the org.apache.commons.io.input.Tailer$RandomAccessResourceBridge interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getPointer(): number;
								read(param0: number[]): number;
								seek(param0: number): void;
								close(): void;
								close(): void;
							});
							public constructor();
							public getPointer(): number;
							public close(): void;
							public seek(param0: number): void;
							public read(param0: number[]): number;
						}
						export class Tailable extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.io.input.Tailer.Tailable>;
							/**
							 * Constructs a new instance of the org.apache.commons.io.input.Tailer$Tailable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getRandomAccess(param0: string): org.apache.commons.io.input.Tailer.RandomAccessResourceBridge;
								isNewer(param0: java.nio.file.attribute.FileTime): boolean;
								lastModifiedFileTime(): java.nio.file.attribute.FileTime;
								size(): number;
							});
							public constructor();
							public size(): number;
							public isNewer(param0: java.nio.file.attribute.FileTime): boolean;
							public getRandomAccess(param0: string): org.apache.commons.io.input.Tailer.RandomAccessResourceBridge;
							public lastModifiedFileTime(): java.nio.file.attribute.FileTime;
						}
						export class TailablePath extends java.lang.Object implements org.apache.commons.io.input.Tailer.Tailable {
							public static class: java.lang.Class<org.apache.commons.io.input.Tailer.TailablePath>;
							public size(): number;
							public isNewer(param0: java.nio.file.attribute.FileTime): boolean;
							public getRandomAccess(mode: string): org.apache.commons.io.input.Tailer.RandomAccessResourceBridge;
							public toString(): string;
							public lastModifiedFileTime(): java.nio.file.attribute.FileTime;
							public getRandomAccess(param0: string): org.apache.commons.io.input.Tailer.RandomAccessResourceBridge;
							public isNewer(fileTime: java.nio.file.attribute.FileTime): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class TailerListener extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.input.TailerListener>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.input.TailerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							fileNotFound(): void;
							fileRotated(): void;
							handle(param0: java.lang.Exception): void;
							handle(param0: string): void;
							init(param0: org.apache.commons.io.input.Tailer): void;
						});
						public constructor();
						public handle(param0: java.lang.Exception): void;
						public handle(param0: string): void;
						public init(param0: org.apache.commons.io.input.Tailer): void;
						public fileRotated(): void;
						public fileNotFound(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class TailerListenerAdapter extends java.lang.Object implements org.apache.commons.io.input.TailerListener {
						public static class: java.lang.Class<org.apache.commons.io.input.TailerListenerAdapter>;
						public constructor();
						public endOfFileReached(): void;
						public handle(line: string): void;
						public handle(param0: java.lang.Exception): void;
						public handle(param0: string): void;
						public handle(ex: java.lang.Exception): void;
						public init(param0: org.apache.commons.io.input.Tailer): void;
						public fileRotated(): void;
						public init(tailer: org.apache.commons.io.input.Tailer): void;
						public fileNotFound(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class TeeInputStream extends org.apache.commons.io.input.ProxyInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.TeeInputStream>;
						public read(): number;
						public constructor();
						public read(bts: number[]): number;
						public read(bts: number[], st: number, end: number): number;
						public constructor(input: java.io.InputStream, branch: java.io.OutputStream, closeBranch: boolean);
						public close(): void;
						public read(bts: number[], off: number, len: number): number;
						public constructor(proxy: java.io.InputStream);
						public constructor(input: java.io.InputStream, branch: java.io.OutputStream);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class TeeReader extends org.apache.commons.io.input.ProxyReader {
						public static class: java.lang.Class<org.apache.commons.io.input.TeeReader>;
						public constructor(input: java.io.Reader, branch: java.io.Writer);
						public read(): number;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public constructor(proxy: java.io.Reader);
						public constructor(input: java.io.Reader, branch: java.io.Writer, closeBranch: boolean);
						public read(chr: string[], st: number, len: number): number;
						public read(target: java.nio.CharBuffer): number;
						public read(chr: string[], st: number, end: number): number;
						public read(param0: java.nio.CharBuffer): number;
						public read(chr: string[]): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class TimestampedObserver extends org.apache.commons.io.input.ObservableInputStream.Observer {
						public static class: java.lang.Class<org.apache.commons.io.input.TimestampedObserver>;
						public getCloseInstant(): java.time.Instant;
						public isClosed(): boolean;
						public constructor();
						public getOpenToCloseDuration(): java.time.Duration;
						public getOpenInstant(): java.time.Instant;
						public getOpenToNowDuration(): java.time.Duration;
						public closed(): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class UncheckedBufferedReader extends java.io.BufferedReader {
						public static class: java.lang.Class<org.apache.commons.io.input.UncheckedBufferedReader>;
						public mark(readAheadLimit: number): void;
						public read(): number;
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public read(cbuf: string[]): number;
						public read(target: java.nio.CharBuffer): number;
						public static builder(): org.apache.commons.io.input.UncheckedBufferedReader.Builder;
						public read(param0: java.nio.CharBuffer): number;
						public reset(): void;
						public readLine(): string;
						public ready(): boolean;
						public skip(n: number): number;
					}
					export module UncheckedBufferedReader {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.UncheckedBufferedReader,org.apache.commons.io.input.UncheckedBufferedReader.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.UncheckedBufferedReader.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.input.UncheckedBufferedReader;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class UncheckedFilterInputStream extends java.io.FilterInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.UncheckedFilterInputStream>;
						public read(): number;
						public close(): void;
						public static builder(): org.apache.commons.io.input.UncheckedFilterInputStream.Builder;
						public read(b: number[], off: number, len: number): number;
						public read(b: number[]): number;
						public reset(): void;
						public available(): number;
						public skip(n: number): number;
					}
					export module UncheckedFilterInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.UncheckedFilterInputStream,org.apache.commons.io.input.UncheckedFilterInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.UncheckedFilterInputStream.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.input.UncheckedFilterInputStream;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class UncheckedFilterReader extends java.io.FilterReader {
						public static class: java.lang.Class<org.apache.commons.io.input.UncheckedFilterReader>;
						public mark(readAheadLimit: number): void;
						public read(): number;
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public read(cbuf: string[]): number;
						public read(target: java.nio.CharBuffer): number;
						public read(param0: java.nio.CharBuffer): number;
						public reset(): void;
						public static builder(): org.apache.commons.io.input.UncheckedFilterReader.Builder;
						public ready(): boolean;
						public skip(n: number): number;
					}
					export module UncheckedFilterReader {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.UncheckedFilterReader,org.apache.commons.io.input.UncheckedFilterReader.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.UncheckedFilterReader.Builder>;
							public constructor();
							public get(): any;
							public asSupplier(): any /* any*/;
							public get(): org.apache.commons.io.input.UncheckedFilterReader;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class UnixLineEndingInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.UnixLineEndingInputStream>;
						public read(): number;
						public constructor();
						public constructor(inputStream: java.io.InputStream, ensureLineFeedAtEndOfFile: boolean);
						public close(): void;
						public mark(readlimit: number): void;
						public read(b: number[], off: number, len: number): number;
						public read(b: number[]): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class UnsupportedOperationExceptions extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.input.UnsupportedOperationExceptions>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class UnsynchronizedBufferedInputStream extends org.apache.commons.io.input.UnsynchronizedFilterInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.UnsynchronizedBufferedInputStream>;
						public buffer: number[];
						public count: number;
						public markLimit: number;
						public markPos: number;
						public pos: number;
						public read(): number;
						public close(): void;
						public mark(readlimit: number): void;
						public markSupported(): boolean;
						public read(buffer: number[]): number;
						public read(buffer: number[], offset: number, count: number): number;
						public skip(amount: number): number;
						public read(buffer: number[], offset: number, length: number): number;
						public reset(): void;
						public available(): number;
						public skip(count: number): number;
					}
					export module UnsynchronizedBufferedInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.UnsynchronizedBufferedInputStream,org.apache.commons.io.input.UnsynchronizedBufferedInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.UnsynchronizedBufferedInputStream.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.input.UnsynchronizedBufferedInputStream;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class UnsynchronizedByteArrayInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.UnsynchronizedByteArrayInputStream>;
						public static END_OF_STREAM: number;
						/** @deprecated */
						public constructor(data: number[], offset: number);
						public read(): number;
						public constructor();
						public close(): void;
						/** @deprecated */
						public constructor(data: number[], offset: number, length: number);
						public read(b: number[]): number;
						/** @deprecated */
						public constructor(data: number[]);
						public available(): number;
						public skip(n: number): number;
						public mark(readlimit: number): void;
						public read(dest: number[]): number;
						public read(b: number[], off: number, len: number): number;
						public markSupported(): boolean;
						public read(dest: number[], off: number, len: number): number;
						public static builder(): org.apache.commons.io.input.UnsynchronizedByteArrayInputStream.Builder;
						public reset(): void;
					}
					export module UnsynchronizedByteArrayInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.UnsynchronizedByteArrayInputStream,org.apache.commons.io.input.UnsynchronizedByteArrayInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.UnsynchronizedByteArrayInputStream.Builder>;
							public constructor();
							public setByteArray(origin: number[]): any;
							public get(): any;
							public setByteArray(origin: number[]): org.apache.commons.io.input.UnsynchronizedByteArrayInputStream.Builder;
							public setOffset(offset: number): org.apache.commons.io.input.UnsynchronizedByteArrayInputStream.Builder;
							public setLength(length: number): org.apache.commons.io.input.UnsynchronizedByteArrayInputStream.Builder;
							public get(): org.apache.commons.io.input.UnsynchronizedByteArrayInputStream;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class UnsynchronizedFilterInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.UnsynchronizedFilterInputStream>;
						public inputStream: java.io.InputStream;
						public read(): number;
						public close(): void;
						public read(buffer: number[]): number;
						public read(buffer: number[], offset: number, count: number): number;
						public read(b: number[]): number;
						public available(): number;
						public skip(n: number): number;
						public static builder(): org.apache.commons.io.input.UnsynchronizedFilterInputStream.Builder;
						public mark(readlimit: number): void;
						public read(b: number[], off: number, len: number): number;
						public markSupported(): boolean;
						public reset(): void;
						public skip(count: number): number;
					}
					export module UnsynchronizedFilterInputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.UnsynchronizedFilterInputStream,org.apache.commons.io.input.UnsynchronizedFilterInputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.UnsynchronizedFilterInputStream.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.input.UnsynchronizedFilterInputStream;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class WindowsLineEndingInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.WindowsLineEndingInputStream>;
						public read(): number;
						public constructor();
						public close(): void;
						public mark(readlimit: number): void;
						public read(b: number[], off: number, len: number): number;
						public constructor(_in_: java.io.InputStream, ensureLineFeedAtEndOfFile: boolean);
						public read(b: number[]): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class XmlStreamReader extends java.io.Reader {
						public static class: java.lang.Class<org.apache.commons.io.input.XmlStreamReader>;
						public static ENCODING_PATTERN: java.util.regex.Pattern;
						/** @deprecated */
						public constructor(inputStream: java.io.InputStream, lenient: boolean);
						public constructor(urlConnection: java.net.URLConnection, defaultEncoding: string);
						public read(): number;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						/** @deprecated */
						public constructor(inputStream: java.io.InputStream, lenient: boolean, defaultEncoding: string);
						/** @deprecated */
						public constructor(inputStream: java.io.InputStream, httpContentType: string, lenient: boolean);
						public read(buf: string[], offset: number, len: number): number;
						public read(cbuf: string[]): number;
						/** @deprecated */
						public constructor(inputStream: java.io.InputStream, httpContentType: string);
						/** @deprecated */
						public constructor(inputStream: java.io.InputStream);
						/** @deprecated */
						public constructor(inputStream: java.io.InputStream, httpContentType: string, lenient: boolean, defaultEncoding: string);
						public constructor(url: java.net.URL);
						/** @deprecated */
						public constructor(file: java.io.File);
						public getDefaultEncoding(): string;
						public read(target: java.nio.CharBuffer): number;
						public static builder(): org.apache.commons.io.input.XmlStreamReader.Builder;
						public getEncoding(): string;
						/** @deprecated */
						public constructor(file: java.nio.file.Path);
						public read(param0: java.nio.CharBuffer): number;
						public read(param0: string[], param1: number, param2: number): number;
					}
					export module XmlStreamReader {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.input.XmlStreamReader,org.apache.commons.io.input.XmlStreamReader.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.input.XmlStreamReader.Builder>;
							public constructor();
							public get(): org.apache.commons.io.input.XmlStreamReader;
							public setCharset(charset: java.nio.charset.Charset): any;
							public get(): any;
							public setCharset(charset: java.nio.charset.Charset): org.apache.commons.io.input.XmlStreamReader.Builder;
							public setLenient(lenient: boolean): org.apache.commons.io.input.XmlStreamReader.Builder;
							public setHttpContentType(httpContentType: string): org.apache.commons.io.input.XmlStreamReader.Builder;
							public setCharset(charset: string): org.apache.commons.io.input.XmlStreamReader.Builder;
							public asSupplier(): any /* any*/;
							public setCharset(charset: string): any;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export class XmlStreamReaderException extends java.io.IOException {
						public static class: java.lang.Class<org.apache.commons.io.input.XmlStreamReaderException>;
						public getContentTypeMime(): string;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public getBomEncoding(): string;
						public constructor(msg: string, ctMime: string, ctEnc: string, bomEnc: string, xmlGuessEnc: string, xmlEnc: string);
						public getContentTypeEncoding(): string;
						public getXmlGuessEncoding(): string;
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
						public constructor(msg: string, bomEnc: string, xmlGuessEnc: string, xmlEnc: string);
						public getXmlEncoding(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export module buffer {
						export class CircularBufferInputStream extends java.io.FilterInputStream {
							public static class: java.lang.Class<org.apache.commons.io.input.buffer.CircularBufferInputStream>;
							public buffer: org.apache.commons.io.input.buffer.CircularByteBuffer;
							public bufferSize: number;
							public constructor();
							public constructor(inputStream: java.io.InputStream);
							public close(): void;
							public read(): number;
							public constructor(inputStream: java.io.InputStream, bufferSize: number);
							public read(b: number[], off: number, len: number): number;
							public fillBuffer(): void;
							public haveBytes(count: number): boolean;
							public read(targetBuffer: number[], offset: number, length: number): number;
							public constructor(_in_: java.io.InputStream);
							public read(b: number[]): number;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export module buffer {
						export class CircularByteBuffer extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.io.input.buffer.CircularByteBuffer>;
							public constructor();
							public constructor(size: number);
							public getCurrentNumberOfBytes(): number;
							public hasSpace(count: number): boolean;
							public clear(): void;
							public getSpace(): number;
							public read(): number;
							public peek(sourceBuffer: number[], offset: number, length: number): boolean;
							public read(targetBuffer: number[], targetOffset: number, length: number): void;
							public hasSpace(): boolean;
							public add(targetBuffer: number[], offset: number, length: number): void;
							public add(value: number): void;
							public hasBytes(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module input {
					export module buffer {
						export class PeekableInputStream extends org.apache.commons.io.input.buffer.CircularBufferInputStream {
							public static class: java.lang.Class<org.apache.commons.io.input.buffer.PeekableInputStream>;
							public constructor();
							public constructor(inputStream: java.io.InputStream);
							public close(): void;
							public peek(sourceBuffer: number[]): boolean;
							public constructor(inputStream: java.io.InputStream, bufferSize: number);
							public peek(sourceBuffer: number[], offset: number, length: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module monitor {
					export class FileAlterationListener extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.monitor.FileAlterationListener>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.monitor.FileAlterationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDirectoryChange(param0: java.io.File): void;
							onDirectoryCreate(param0: java.io.File): void;
							onDirectoryDelete(param0: java.io.File): void;
							onFileChange(param0: java.io.File): void;
							onFileCreate(param0: java.io.File): void;
							onFileDelete(param0: java.io.File): void;
							onStart(param0: org.apache.commons.io.monitor.FileAlterationObserver): void;
							onStop(param0: org.apache.commons.io.monitor.FileAlterationObserver): void;
						});
						public constructor();
						public onStop(param0: org.apache.commons.io.monitor.FileAlterationObserver): void;
						public onFileDelete(param0: java.io.File): void;
						public onStart(param0: org.apache.commons.io.monitor.FileAlterationObserver): void;
						public onDirectoryDelete(param0: java.io.File): void;
						public onDirectoryChange(param0: java.io.File): void;
						public onDirectoryCreate(param0: java.io.File): void;
						public onFileChange(param0: java.io.File): void;
						public onFileCreate(param0: java.io.File): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module monitor {
					export class FileAlterationListenerAdaptor extends java.lang.Object implements org.apache.commons.io.monitor.FileAlterationListener {
						public static class: java.lang.Class<org.apache.commons.io.monitor.FileAlterationListenerAdaptor>;
						public constructor();
						public onFileDelete(param0: java.io.File): void;
						public onStart(param0: org.apache.commons.io.monitor.FileAlterationObserver): void;
						public onStart(observer: org.apache.commons.io.monitor.FileAlterationObserver): void;
						public onStop(observer: org.apache.commons.io.monitor.FileAlterationObserver): void;
						public onDirectoryCreate(directory: java.io.File): void;
						public onDirectoryDelete(param0: java.io.File): void;
						public onDirectoryChange(param0: java.io.File): void;
						public onFileCreate(param0: java.io.File): void;
						public onDirectoryDelete(directory: java.io.File): void;
						public onStop(param0: org.apache.commons.io.monitor.FileAlterationObserver): void;
						public onFileDelete(file: java.io.File): void;
						public onFileCreate(file: java.io.File): void;
						public onDirectoryChange(directory: java.io.File): void;
						public onFileChange(file: java.io.File): void;
						public onDirectoryCreate(param0: java.io.File): void;
						public onFileChange(param0: java.io.File): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module monitor {
					export class FileAlterationMonitor extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<org.apache.commons.io.monitor.FileAlterationMonitor>;
						public constructor(interval: number, param1: java.util.Collection<org.apache.commons.io.monitor.FileAlterationObserver>);
						public getObservers(): java.lang.Iterable<org.apache.commons.io.monitor.FileAlterationObserver>;
						public constructor();
						public constructor(intervalMillis: number);
						public constructor(interval: number, ...param1: org.apache.commons.io.monitor.FileAlterationObserver[]);
						public getInterval(): number;
						public stop(): void;
						public removeObserver(observer: org.apache.commons.io.monitor.FileAlterationObserver): void;
						public run(): void;
						public start(): void;
						public setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): void;
						public addObserver(observer: org.apache.commons.io.monitor.FileAlterationObserver): void;
						public stop(stopInterval: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module monitor {
					export class FileAlterationObserver extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.monitor.FileAlterationObserver>;
						public constructor(rootEntry: org.apache.commons.io.monitor.FileEntry, fileFilter: java.io.FileFilter, ioCase: org.apache.commons.io.IOCase);
						public constructor(directoryName: string);
						public constructor(directoryName: string, fileFilter: java.io.FileFilter, ioCase: org.apache.commons.io.IOCase);
						public destroy(): void;
						public constructor(directory: java.io.File, fileFilter: java.io.FileFilter, ioCase: org.apache.commons.io.IOCase);
						public removeListener(listener: org.apache.commons.io.monitor.FileAlterationListener): void;
						public constructor(directoryName: string, fileFilter: java.io.FileFilter);
						public toString(): string;
						public getFileFilter(): java.io.FileFilter;
						public getListeners(): java.lang.Iterable<org.apache.commons.io.monitor.FileAlterationListener>;
						public initialize(): void;
						public constructor(directory: java.io.File);
						public constructor(directory: java.io.File, fileFilter: java.io.FileFilter);
						public getDirectory(): java.io.File;
						public addListener(listener: org.apache.commons.io.monitor.FileAlterationListener): void;
						public checkAndNotify(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module monitor {
					export class FileEntry extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.monitor.FileEntry>;
						public setLength(length: number): void;
						public isExists(): boolean;
						public newChildInstance(file: java.io.File): org.apache.commons.io.monitor.FileEntry;
						public setLastModified(lastModified: java.nio.file.attribute.FileTime): void;
						public getChildren(): org.apache.commons.io.monitor.FileEntry[];
						public getLength(): number;
						public getParent(): org.apache.commons.io.monitor.FileEntry;
						public refresh(file: java.io.File): boolean;
						public getName(): string;
						public setDirectory(directory: boolean): void;
						public getLastModified(): number;
						public setLastModified(lastModified: number): void;
						public getLevel(): number;
						public setChildren(...children: org.apache.commons.io.monitor.FileEntry[]): void;
						public isDirectory(): boolean;
						public constructor(file: java.io.File);
						public getFile(): java.io.File;
						public getLastModifiedFileTime(): java.nio.file.attribute.FileTime;
						public constructor(parent: org.apache.commons.io.monitor.FileEntry, file: java.io.File);
						public setExists(exists: boolean): void;
						public setName(name: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module monitor {
					export class SerializableFileTime extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.monitor.SerializableFileTime>;
						public constructor(fileTime: java.nio.file.attribute.FileTime);
						public equals(obj: any): boolean;
						public compareTo(other: java.nio.file.attribute.FileTime): number;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export abstract class AbstractByteArrayOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.AbstractByteArrayOutputStream>;
						public count: number;
						public write(param0: number[], param1: number, param2: number): void;
						public write(param0: java.io.InputStream): number;
						public close(): void;
						public write(param0: number): void;
						/** @deprecated */
						public toString(): string;
						public writeImpl(b: number): void;
						public toByteArray(): number[];
						public write(b: number[]): void;
						public writeImpl(b: number[], off: number, len: number): void;
						public toString(charset: java.nio.charset.Charset): string;
						public size(): number;
						public toInputStream(isConstructor: org.apache.commons.io.output.AbstractByteArrayOutputStream.InputStreamConstructor<any>): java.io.InputStream;
						public write(b: number[], off: number, len: number): void;
						public writeToImpl(out: java.io.OutputStream): void;
						public toString(enc: string): string;
						public constructor();
						public toInputStream(): java.io.InputStream;
						public toByteArrayImpl(): number[];
						public needNewBuffer(newCount: number): void;
						public flush(): void;
						public toString(): string;
						public resetImpl(): void;
						public reset(): void;
						public writeImpl(_in_: java.io.InputStream): number;
						public writeTo(param0: java.io.OutputStream): void;
					}
					export module AbstractByteArrayOutputStream {
						export class InputStreamConstructor<T>  extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.io.output.AbstractByteArrayOutputStream.InputStreamConstructor<any>>;
							/**
							 * Constructs a new instance of the org.apache.commons.io.output.AbstractByteArrayOutputStream$InputStreamConstructor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								construct(param0: number[], param1: number, param2: number): T;
							});
							public constructor();
							public construct(param0: number[], param1: number, param2: number): T;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class AppendableOutputStream<T>  extends java.io.OutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.AppendableOutputStream<any>>;
						public write(b: number[]): void;
						public constructor();
						public close(): void;
						public write(param0: number): void;
						public write(b: number): void;
						public flush(): void;
						public getAppendable(): any;
						public write(b: number[], off: number, len: number): void;
						public constructor(appendable: any);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class AppendableWriter<T>  extends java.io.Writer {
						public static class: java.lang.Class<org.apache.commons.io.output.AppendableWriter<any>>;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public write(str: string): void;
						public write(cbuf: string[], off: number, len: number): void;
						public append(csq: string): java.io.Writer;
						public write(param0: string[], param1: number, param2: number): void;
						public append(c: string): java.io.Writer;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public getAppendable(): any;
						public write(str: string, off: number, len: number): void;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
						public constructor(appendable: any);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class BrokenOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.BrokenOutputStream>;
						public static INSTANCE: org.apache.commons.io.output.BrokenOutputStream;
						public constructor(exception: java.io.IOException);
						public write(b: number[]): void;
						public constructor();
						public close(): void;
						public write(param0: number): void;
						public flush(): void;
						public write(b: number): void;
						public constructor(exceptionSupplier: any /* any*/);
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class BrokenWriter extends java.io.Writer {
						public static class: java.lang.Class<org.apache.commons.io.output.BrokenWriter>;
						public static INSTANCE: org.apache.commons.io.output.BrokenWriter;
						public write(c: number): void;
						public constructor(exception: java.io.IOException);
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public write(str: string): void;
						public write(cbuf: string[], off: number, len: number): void;
						public append(csq: string): java.io.Writer;
						public write(param0: string[], param1: number, param2: number): void;
						public append(c: string): java.io.Writer;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public write(str: string, off: number, len: number): void;
						public constructor(exceptionSupplier: any /* any*/);
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class ByteArrayOutputStream extends org.apache.commons.io.output.AbstractByteArrayOutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.ByteArrayOutputStream>;
						public write(param0: number[], param1: number, param2: number): void;
						public constructor();
						public toInputStream(): java.io.InputStream;
						public write(param0: java.io.InputStream): number;
						public write(_in_: java.io.InputStream): number;
						public close(): void;
						public write(param0: number): void;
						public write(b: number): void;
						public flush(): void;
						public writeTo(out: java.io.OutputStream): void;
						public toByteArray(): number[];
						public static toBufferedInputStream(input: java.io.InputStream): java.io.InputStream;
						public write(b: number[]): void;
						public constructor(size: number);
						public static toBufferedInputStream(input: java.io.InputStream, size: number): java.io.InputStream;
						public size(): number;
						public toInputStream(isConstructor: org.apache.commons.io.output.AbstractByteArrayOutputStream.InputStreamConstructor<any>): java.io.InputStream;
						public write(b: number[], off: number, len: number): void;
						public reset(): void;
						public writeTo(param0: java.io.OutputStream): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class ChunkedOutputStream extends java.io.FilterOutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.ChunkedOutputStream>;
						/** @deprecated */
						public constructor(stream: java.io.OutputStream);
						public write(b: number[]): void;
						public constructor();
						public static builder(): org.apache.commons.io.output.ChunkedOutputStream.Builder;
						/** @deprecated */
						public constructor(stream: java.io.OutputStream, chunkSize: number);
						public close(): void;
						public constructor(out: java.io.OutputStream);
						public write(b: number): void;
						public flush(): void;
						public write(b: number[], off: number, len: number): void;
						public write(data: number[], srcOffset: number, length: number): void;
					}
					export module ChunkedOutputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.output.ChunkedOutputStream,org.apache.commons.io.output.ChunkedOutputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.output.ChunkedOutputStream.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.output.ChunkedOutputStream;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class ChunkedWriter extends java.io.FilterWriter {
						public static class: java.lang.Class<org.apache.commons.io.output.ChunkedWriter>;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public constructor(writer: java.io.Writer, chunkSize: number);
						public append(param0: string): java.lang.Appendable;
						public write(str: string): void;
						public flush(): void;
						public write(cbuf: string[], off: number, len: number): void;
						public append(csq: string): java.io.Writer;
						public append(c: string): java.io.Writer;
						public write(data: string[], srcOffset: number, length: number): void;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public constructor(writer: java.io.Writer);
						public write(str: string, off: number, len: number): void;
						public constructor(out: java.io.Writer);
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class CloseShieldOutputStream extends org.apache.commons.io.output.ProxyOutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.CloseShieldOutputStream>;
						/** @deprecated */
						public constructor(outputStream: java.io.OutputStream);
						public constructor();
						public static wrap(outputStream: java.io.OutputStream): org.apache.commons.io.output.CloseShieldOutputStream;
						public constructor(proxy: java.io.OutputStream);
						public close(): void;
						public flush(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class CloseShieldWriter extends org.apache.commons.io.output.ProxyWriter {
						public static class: java.lang.Class<org.apache.commons.io.output.CloseShieldWriter>;
						public static wrap(writer: java.io.Writer): org.apache.commons.io.output.CloseShieldWriter;
						public constructor();
						public constructor(lock: any);
						public append(c: string): java.io.Writer;
						public constructor(proxy: java.io.Writer);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						/** @deprecated */
						public constructor(writer: java.io.Writer);
						public append(csq: string): java.io.Writer;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class ClosedOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.ClosedOutputStream>;
						public static INSTANCE: org.apache.commons.io.output.ClosedOutputStream;
						public static CLOSED_OUTPUT_STREAM: org.apache.commons.io.output.ClosedOutputStream;
						public write(b: number[]): void;
						public constructor();
						public close(): void;
						public write(param0: number): void;
						public flush(): void;
						public write(b: number): void;
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class ClosedWriter extends java.io.Writer {
						public static class: java.lang.Class<org.apache.commons.io.output.ClosedWriter>;
						public static INSTANCE: org.apache.commons.io.output.ClosedWriter;
						public static CLOSED_WRITER: org.apache.commons.io.output.ClosedWriter;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public write(str: string): void;
						public write(cbuf: string[], off: number, len: number): void;
						public append(csq: string): java.io.Writer;
						public write(param0: string[], param1: number, param2: number): void;
						public append(c: string): java.io.Writer;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public write(str: string, off: number, len: number): void;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class CountingOutputStream extends org.apache.commons.io.output.ProxyOutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.CountingOutputStream>;
						public constructor();
						public constructor(proxy: java.io.OutputStream);
						public close(): void;
						public beforeWrite(n: number): void;
						public constructor(out: java.io.OutputStream);
						public getCount(): number;
						public flush(): void;
						public getByteCount(): number;
						public resetByteCount(): number;
						public resetCount(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class DeferredFileOutputStream extends org.apache.commons.io.output.ThresholdingOutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.DeferredFileOutputStream>;
						/** @deprecated */
						public constructor(threshold: number, initialBufferSize: number, outputFile: java.io.File);
						public constructor();
						public toInputStream(): java.io.InputStream;
						public close(): void;
						public getStream(): java.io.OutputStream;
						/** @deprecated */
						public constructor(threshold: number, prefix: string, suffix: string, directory: java.io.File);
						public getPath(): java.nio.file.Path;
						public flush(): void;
						/** @deprecated */
						public constructor(threshold: number, initialBufferSize: number, prefix: string, suffix: string, directory: java.io.File);
						/** @deprecated */
						public getStream(): java.io.OutputStream;
						public thresholdReached(): void;
						public writeTo(outputStream: java.io.OutputStream): void;
						public static builder(): org.apache.commons.io.output.DeferredFileOutputStream.Builder;
						public constructor(threshold: number);
						public constructor(threshold: number, thresholdConsumer: org.apache.commons.io.function.IOConsumer<org.apache.commons.io.output.ThresholdingOutputStream>, outputStreamGetter: org.apache.commons.io.function.IOFunction<org.apache.commons.io.output.ThresholdingOutputStream,java.io.OutputStream>);
						/** @deprecated */
						public constructor(threshold: number, outputFile: java.io.File);
						public getFile(): java.io.File;
						public getData(): number[];
						public isInMemory(): boolean;
					}
					export module DeferredFileOutputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.output.DeferredFileOutputStream,org.apache.commons.io.output.DeferredFileOutputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.output.DeferredFileOutputStream.Builder>;
							public constructor();
							public get(): any;
							public setOutputFile(outputFile: java.nio.file.Path): org.apache.commons.io.output.DeferredFileOutputStream.Builder;
							public setDirectory(directory: java.io.File): org.apache.commons.io.output.DeferredFileOutputStream.Builder;
							public setOutputFile(outputFile: java.io.File): org.apache.commons.io.output.DeferredFileOutputStream.Builder;
							public setSuffix(suffix: string): org.apache.commons.io.output.DeferredFileOutputStream.Builder;
							public setThreshold(threshold: number): org.apache.commons.io.output.DeferredFileOutputStream.Builder;
							public get(): org.apache.commons.io.output.DeferredFileOutputStream;
							public setDirectory(directory: java.nio.file.Path): org.apache.commons.io.output.DeferredFileOutputStream.Builder;
							public asSupplier(): any /* any*/;
							public setPrefix(prefix: string): org.apache.commons.io.output.DeferredFileOutputStream.Builder;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class DemuxOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.DemuxOutputStream>;
						public write(b: number[]): void;
						public constructor();
						public write(ch: number): void;
						public close(): void;
						public write(param0: number): void;
						public flush(): void;
						public bindStream(output: java.io.OutputStream): java.io.OutputStream;
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class FileWriterWithEncoding extends org.apache.commons.io.output.ProxyWriter {
						public static class: java.lang.Class<org.apache.commons.io.output.FileWriterWithEncoding>;
						/** @deprecated */
						public constructor(fileName: string, charsetName: string, append: boolean);
						public constructor();
						/** @deprecated */
						public constructor(fileName: string, encoding: java.nio.charset.CharsetEncoder);
						public constructor(lock: any);
						/** @deprecated */
						public constructor(file: java.io.File, charsetName: string);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public append(csq: string): java.io.Writer;
						/** @deprecated */
						public constructor(file: java.io.File, charset: java.nio.charset.Charset);
						/** @deprecated */
						public constructor(fileName: string, charsetEncoder: java.nio.charset.CharsetEncoder, append: boolean);
						/** @deprecated */
						public constructor(file: java.io.File, encoding: java.nio.charset.Charset, append: boolean);
						/** @deprecated */
						public constructor(file: java.io.File, charsetName: string, append: boolean);
						/** @deprecated */
						public constructor(fileName: string, charset: java.nio.charset.Charset, append: boolean);
						/** @deprecated */
						public constructor(fileName: string, charsetName: string);
						public append(c: string): java.io.Writer;
						public static builder(): org.apache.commons.io.output.FileWriterWithEncoding.Builder;
						public constructor(proxy: java.io.Writer);
						/** @deprecated */
						public constructor(file: java.io.File, charsetEncoder: java.nio.charset.CharsetEncoder, append: boolean);
						/** @deprecated */
						public constructor(file: java.io.File, charsetEncoder: java.nio.charset.CharsetEncoder);
						public append(csq: string, start: number, end: number): java.io.Writer;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
						/** @deprecated */
						public constructor(fileName: string, charset: java.nio.charset.Charset);
					}
					export module FileWriterWithEncoding {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.output.FileWriterWithEncoding,org.apache.commons.io.output.FileWriterWithEncoding.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.output.FileWriterWithEncoding.Builder>;
							public constructor();
							public setCharsetEncoder(charsetEncoder: java.nio.charset.CharsetEncoder): org.apache.commons.io.output.FileWriterWithEncoding.Builder;
							public get(): any;
							public setAppend(append: boolean): org.apache.commons.io.output.FileWriterWithEncoding.Builder;
							public get(): org.apache.commons.io.output.FileWriterWithEncoding;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class FilterCollectionWriter extends java.io.Writer {
						public static class: java.lang.Class<org.apache.commons.io.output.FilterCollectionWriter>;
						public EMPTY_WRITERS: java.util.Collection<java.io.Writer>;
						public writers: java.util.Collection<java.io.Writer>;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public write(str: string): void;
						public write(cbuf: string[], off: number, len: number): void;
						public append(csq: string): java.io.Writer;
						public constructor(writers: java.util.Collection<java.io.Writer>);
						public constructor(...writers: java.io.Writer[]);
						public write(param0: string[], param1: number, param2: number): void;
						public append(c: string): java.io.Writer;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public write(str: string, off: number, len: number): void;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class LockableFileWriter extends java.io.Writer {
						public static class: java.lang.Class<org.apache.commons.io.output.LockableFileWriter>;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public constructor(lock: any);
						/** @deprecated */
						public constructor(file: java.io.File, charsetName: string);
						public close(): void;
						/** @deprecated */
						public constructor(file: java.io.File, append: boolean, lockDir: string);
						public append(param0: string): java.lang.Appendable;
						/** @deprecated */
						public constructor(fileName: string, append: boolean, lockDir: string);
						public write(cbuf: string[], off: number, len: number): void;
						public append(csq: string): java.io.Writer;
						/** @deprecated */
						public constructor(file: java.io.File, charset: java.nio.charset.Charset);
						/** @deprecated */
						public constructor(file: java.io.File);
						/** @deprecated */
						public constructor(file: java.io.File, charset: java.nio.charset.Charset, append: boolean, lockDir: string);
						/** @deprecated */
						public constructor(file: java.io.File, charsetName: string, append: boolean, lockDir: string);
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
						/** @deprecated */
						public constructor(file: java.io.File, append: boolean);
						/** @deprecated */
						public constructor(fileName: string, append: boolean);
						public constructor();
						public static builder(): org.apache.commons.io.output.LockableFileWriter.Builder;
						public flush(): void;
						public write(str: string): void;
						public write(param0: string[], param1: number, param2: number): void;
						public append(c: string): java.io.Writer;
						/** @deprecated */
						public constructor(fileName: string);
						public append(csq: string, start: number, end: number): java.io.Writer;
						public write(str: string, off: number, len: number): void;
					}
					export module LockableFileWriter {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.output.LockableFileWriter,org.apache.commons.io.output.LockableFileWriter.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.output.LockableFileWriter.Builder>;
							public constructor();
							public get(): any;
							public setLockDirectory(lockDirectory: java.io.File): org.apache.commons.io.output.LockableFileWriter.Builder;
							public get(): org.apache.commons.io.output.LockableFileWriter;
							public setLockDirectory(lockDirectory: string): org.apache.commons.io.output.LockableFileWriter.Builder;
							public asSupplier(): any /* any*/;
							public setAppend(append: boolean): org.apache.commons.io.output.LockableFileWriter.Builder;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class NullAppendable extends java.lang.Object implements java.lang.Appendable {
						public static class: java.lang.Class<org.apache.commons.io.output.NullAppendable>;
						public static INSTANCE: org.apache.commons.io.output.NullAppendable;
						public append(csq: string, start: number, end: number): java.lang.Appendable;
						public append(c: string): java.lang.Appendable;
						public append(param0: string): java.lang.Appendable;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
						public append(csq: string): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class NullOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.NullOutputStream>;
						public static INSTANCE: org.apache.commons.io.output.NullOutputStream;
						public static NULL_OUTPUT_STREAM: org.apache.commons.io.output.NullOutputStream;
						public write(b: number[]): void;
						public constructor();
						/** @deprecated */
						public constructor();
						public close(): void;
						public write(param0: number): void;
						public write(b: number): void;
						public flush(): void;
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class NullPrintStream extends java.io.PrintStream {
						public static class: java.lang.Class<org.apache.commons.io.output.NullPrintStream>;
						public static INSTANCE: org.apache.commons.io.output.NullPrintStream;
						public static NULL_PRINT_STREAM: org.apache.commons.io.output.NullPrintStream;
						public constructor();
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public constructor(out: java.io.OutputStream);
						public flush(): void;
						public constructor(fileName: string);
						public append(csq: string, start: number, end: number): java.io.PrintStream;
						public constructor(out: java.io.OutputStream, autoFlush: boolean);
						public constructor(out: java.io.OutputStream, autoFlush: boolean, encoding: string);
						/** @deprecated */
						public constructor();
						public constructor(fileName: string, csn: string);
						public constructor(file: java.io.File);
						public constructor(file: java.io.File, csn: string);
						public append(csq: string): java.io.PrintStream;
						public append(c: string): java.io.PrintStream;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class NullWriter extends java.io.Writer {
						public static class: java.lang.Class<org.apache.commons.io.output.NullWriter>;
						public static INSTANCE: org.apache.commons.io.output.NullWriter;
						public static NULL_WRITER: org.apache.commons.io.output.NullWriter;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public write(str: string): void;
						public write(str: string, st: number, end: number): void;
						public append(csq: string): java.io.Writer;
						public write(idx: number): void;
						public write(param0: string[], param1: number, param2: number): void;
						/** @deprecated */
						public constructor();
						public append(c: string): java.io.Writer;
						public write(chr: string[]): void;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public write(chr: string[], st: number, end: number): void;
						public write(str: string, off: number, len: number): void;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class ProxyCollectionWriter extends org.apache.commons.io.output.FilterCollectionWriter {
						public static class: java.lang.Class<org.apache.commons.io.output.ProxyCollectionWriter>;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public write(str: string): void;
						public afterWrite(n: number): void;
						public write(cbuf: string[], off: number, len: number): void;
						public append(csq: string): java.io.Writer;
						public constructor(writers: java.util.Collection<java.io.Writer>);
						public constructor(...writers: java.io.Writer[]);
						public append(c: string): java.io.Writer;
						public handleIOException(e: java.io.IOException): void;
						public beforeWrite(n: number): void;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public write(str: string, off: number, len: number): void;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class ProxyOutputStream extends java.io.FilterOutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.ProxyOutputStream>;
						public constructor();
						public close(): void;
						public constructor(out: java.io.OutputStream);
						public flush(): void;
						public write(b: number): void;
						public afterWrite(n: number): void;
						public write(bts: number[]): void;
						public write(idx: number): void;
						public write(b: number[]): void;
						public constructor(proxy: java.io.OutputStream);
						public handleIOException(e: java.io.IOException): void;
						public beforeWrite(n: number): void;
						public write(bts: number[], st: number, end: number): void;
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class ProxyWriter extends java.io.FilterWriter {
						public static class: java.lang.Class<org.apache.commons.io.output.ProxyWriter>;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public write(str: string): void;
						public afterWrite(n: number): void;
						public write(cbuf: string[], off: number, len: number): void;
						public append(csq: string): java.io.Writer;
						public append(c: string): java.io.Writer;
						public handleIOException(e: java.io.IOException): void;
						public constructor(proxy: java.io.Writer);
						public beforeWrite(n: number): void;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public write(str: string, off: number, len: number): void;
						public constructor(out: java.io.Writer);
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class QueueOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.QueueOutputStream>;
						public write(b: number[]): void;
						public constructor();
						public close(): void;
						public write(param0: number): void;
						public constructor(blockingQueue: java.util.concurrent.BlockingQueue<java.lang.Integer>);
						public newQueueInputStream(): org.apache.commons.io.input.QueueInputStream;
						public write(b: number): void;
						public flush(): void;
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class StringBuilderWriter extends java.io.Writer implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.output.StringBuilderWriter>;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public constructor(capacity: number);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public write(str: string): void;
						public append(csq: string): java.io.Writer;
						public append(value: string): java.io.Writer;
						public toString(): string;
						public write(param0: string[], param1: number, param2: number): void;
						public constructor(builder: java.lang.StringBuilder);
						public write(value: string[], offset: number, length: number): void;
						public append(c: string): java.io.Writer;
						public write(value: string): void;
						public append(value: string, start: number, end: number): java.io.Writer;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public getBuilder(): java.lang.StringBuilder;
						public write(str: string, off: number, len: number): void;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class TaggedOutputStream extends org.apache.commons.io.output.ProxyOutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.TaggedOutputStream>;
						public constructor();
						public isCauseOf(exception: java.lang.Exception): boolean;
						public constructor(proxy: java.io.OutputStream);
						public handleIOException(e: java.io.IOException): void;
						public close(): void;
						public flush(): void;
						public throwIfCauseOf(exception: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class TaggedWriter extends org.apache.commons.io.output.ProxyWriter {
						public static class: java.lang.Class<org.apache.commons.io.output.TaggedWriter>;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public append(csq: string): java.io.Writer;
						public throwIfCauseOf(exception: java.lang.Exception): void;
						public isCauseOf(exception: java.lang.Exception): boolean;
						public handleIOException(e: java.io.IOException): void;
						public append(c: string): java.io.Writer;
						public constructor(proxy: java.io.Writer);
						public append(csq: string, start: number, end: number): java.io.Writer;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class TeeOutputStream extends org.apache.commons.io.output.ProxyOutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.TeeOutputStream>;
						public branch: java.io.OutputStream;
						public write(b: number[]): void;
						public constructor();
						public constructor(proxy: java.io.OutputStream);
						public close(): void;
						public constructor(out: java.io.OutputStream, branch: java.io.OutputStream);
						public flush(): void;
						public write(b: number): void;
						public write(bts: number[]): void;
						public write(idx: number): void;
						public write(bts: number[], st: number, end: number): void;
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class TeeWriter extends org.apache.commons.io.output.ProxyCollectionWriter {
						public static class: java.lang.Class<org.apache.commons.io.output.TeeWriter>;
						public constructor();
						public constructor(lock: any);
						public append(c: string): java.io.Writer;
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public append(csq: string): java.io.Writer;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public constructor(writers: java.util.Collection<java.io.Writer>);
						public constructor(...writers: java.io.Writer[]);
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class ThresholdingOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.ThresholdingOutputStream>;
						public constructor();
						public resetByteCount(): void;
						public close(): void;
						public write(param0: number): void;
						public flush(): void;
						public write(b: number): void;
						/** @deprecated */
						public getStream(): java.io.OutputStream;
						public thresholdReached(): void;
						public checkThreshold(count: number): void;
						public getThreshold(): number;
						public getOutputStream(): java.io.OutputStream;
						public write(b: number[]): void;
						public isThresholdExceeded(): boolean;
						public constructor(threshold: number);
						public constructor(threshold: number, thresholdConsumer: org.apache.commons.io.function.IOConsumer<org.apache.commons.io.output.ThresholdingOutputStream>, outputStreamGetter: org.apache.commons.io.function.IOFunction<org.apache.commons.io.output.ThresholdingOutputStream,java.io.OutputStream>);
						public setByteCount(count: number): void;
						public getByteCount(): number;
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class UncheckedAppendable extends java.lang.Object implements java.lang.Appendable {
						public static class: java.lang.Class<org.apache.commons.io.output.UncheckedAppendable>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.output.UncheckedAppendable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							on(appendable: java.lang.Appendable): org.apache.commons.io.output.UncheckedAppendable;
							append(param0: string): org.apache.commons.io.output.UncheckedAppendable;
							append(param0: string): org.apache.commons.io.output.UncheckedAppendable;
							append(param0: string, param1: number, param2: number): org.apache.commons.io.output.UncheckedAppendable;
							append(param0: string): java.lang.Appendable;
							append(param0: string, param1: number, param2: number): java.lang.Appendable;
							append(param0: string): java.lang.Appendable;
							append(param0: string): java.lang.Appendable;
							append(param0: string, param1: number, param2: number): java.lang.Appendable;
							append(param0: string): java.lang.Appendable;
						});
						public constructor();
						public append(param0: string, param1: number, param2: number): org.apache.commons.io.output.UncheckedAppendable;
						public append(param0: string): java.lang.Appendable;
						public static on(appendable: java.lang.Appendable): org.apache.commons.io.output.UncheckedAppendable;
						public append(param0: string): org.apache.commons.io.output.UncheckedAppendable;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class UncheckedAppendableImpl extends java.lang.Object implements org.apache.commons.io.output.UncheckedAppendable {
						public static class: java.lang.Class<org.apache.commons.io.output.UncheckedAppendableImpl>;
						public append(c: string): org.apache.commons.io.output.UncheckedAppendable;
						public append(csq: string, start: number, end: number): org.apache.commons.io.output.UncheckedAppendable;
						public append(param0: string, param1: number, param2: number): org.apache.commons.io.output.UncheckedAppendable;
						public append(param0: string): java.lang.Appendable;
						public static on(appendable: java.lang.Appendable): org.apache.commons.io.output.UncheckedAppendable;
						public append(param0: string): org.apache.commons.io.output.UncheckedAppendable;
						public append(csq: string): org.apache.commons.io.output.UncheckedAppendable;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class UncheckedFilterOutputStream extends java.io.FilterOutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.UncheckedFilterOutputStream>;
						public write(b: number[]): void;
						public close(): void;
						public static builder(): org.apache.commons.io.output.UncheckedFilterOutputStream.Builder;
						public flush(): void;
						public write(b: number): void;
						public write(b: number[], off: number, len: number): void;
					}
					export module UncheckedFilterOutputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.output.UncheckedFilterOutputStream,org.apache.commons.io.output.UncheckedFilterOutputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.output.UncheckedFilterOutputStream.Builder>;
							public constructor();
							public get(): any;
							public asSupplier(): any /* any*/;
							public get(): org.apache.commons.io.output.UncheckedFilterOutputStream;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class UncheckedFilterWriter extends java.io.FilterWriter {
						public static class: java.lang.Class<org.apache.commons.io.output.UncheckedFilterWriter>;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public write(str: string): void;
						public write(cbuf: string[], off: number, len: number): void;
						public append(csq: string): java.io.Writer;
						public static builder(): org.apache.commons.io.output.UncheckedFilterWriter.Builder;
						public append(c: string): java.io.Writer;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public write(str: string, off: number, len: number): void;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
					export module UncheckedFilterWriter {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.output.UncheckedFilterWriter,org.apache.commons.io.output.UncheckedFilterWriter.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.output.UncheckedFilterWriter.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.output.UncheckedFilterWriter;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class UnsynchronizedByteArrayOutputStream extends org.apache.commons.io.output.AbstractByteArrayOutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.UnsynchronizedByteArrayOutputStream>;
						public write(param0: number[], param1: number, param2: number): void;
						public constructor();
						public toInputStream(): java.io.InputStream;
						public write(param0: java.io.InputStream): number;
						public write(_in_: java.io.InputStream): number;
						public close(): void;
						public write(param0: number): void;
						public write(b: number): void;
						public flush(): void;
						/** @deprecated */
						public constructor(size: number);
						public writeTo(out: java.io.OutputStream): void;
						public toByteArray(): number[];
						public static toBufferedInputStream(input: java.io.InputStream): java.io.InputStream;
						public static builder(): org.apache.commons.io.output.UnsynchronizedByteArrayOutputStream.Builder;
						public write(b: number[]): void;
						/** @deprecated */
						public constructor();
						public static toBufferedInputStream(input: java.io.InputStream, size: number): java.io.InputStream;
						public size(): number;
						public toInputStream(isConstructor: org.apache.commons.io.output.AbstractByteArrayOutputStream.InputStreamConstructor<any>): java.io.InputStream;
						public write(b: number[], off: number, len: number): void;
						public reset(): void;
						public writeTo(param0: java.io.OutputStream): void;
					}
					export module UnsynchronizedByteArrayOutputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.output.UnsynchronizedByteArrayOutputStream,org.apache.commons.io.output.UnsynchronizedByteArrayOutputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.output.UnsynchronizedByteArrayOutputStream.Builder>;
							public constructor();
							public get(): any;
							public get(): org.apache.commons.io.output.UnsynchronizedByteArrayOutputStream;
							public asSupplier(): any /* any*/;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class WriterOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.WriterOutputStream>;
						/** @deprecated */
						public constructor(writer: java.io.Writer, decoder: java.nio.charset.CharsetDecoder);
						public constructor();
						public close(): void;
						public write(param0: number): void;
						public static builder(): org.apache.commons.io.output.WriterOutputStream.Builder;
						public flush(): void;
						public write(b: number): void;
						/** @deprecated */
						public constructor(writer: java.io.Writer, decoder: java.nio.charset.CharsetDecoder, bufferSize: number, writeImmediately: boolean);
						/** @deprecated */
						public constructor(writer: java.io.Writer, charset: java.nio.charset.Charset);
						public write(b: number[]): void;
						/** @deprecated */
						public constructor(writer: java.io.Writer, charset: java.nio.charset.Charset, bufferSize: number, writeImmediately: boolean);
						/** @deprecated */
						public constructor(writer: java.io.Writer);
						/** @deprecated */
						public constructor(writer: java.io.Writer, charsetName: string);
						public write(b: number[], off: number, len: number): void;
						/** @deprecated */
						public constructor(writer: java.io.Writer, charsetName: string, bufferSize: number, writeImmediately: boolean);
					}
					export module WriterOutputStream {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.output.WriterOutputStream,org.apache.commons.io.output.WriterOutputStream.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.output.WriterOutputStream.Builder>;
							public constructor();
							public setCharset(charset: java.nio.charset.Charset): any;
							public get(): any;
							public setCharsetDecoder(charsetDecoder: java.nio.charset.CharsetDecoder): org.apache.commons.io.output.WriterOutputStream.Builder;
							public get(): org.apache.commons.io.output.WriterOutputStream;
							public setCharset(charset: java.nio.charset.Charset): org.apache.commons.io.output.WriterOutputStream.Builder;
							public setWriteImmediately(writeImmediately: boolean): org.apache.commons.io.output.WriterOutputStream.Builder;
							public asSupplier(): any /* any*/;
							public setCharset(charset: string): org.apache.commons.io.output.WriterOutputStream.Builder;
							public setCharset(charset: string): any;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module output {
					export class XmlStreamWriter extends java.io.Writer {
						public static class: java.lang.Class<org.apache.commons.io.output.XmlStreamWriter>;
						public write(c: number): void;
						public static builder(): org.apache.commons.io.output.XmlStreamWriter.Builder;
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public write(str: string): void;
						/** @deprecated */
						public constructor(file: java.io.File, defaultEncoding: string);
						public write(cbuf: string[], off: number, len: number): void;
						/** @deprecated */
						public constructor(out: java.io.OutputStream, defaultEncoding: string);
						public append(csq: string): java.io.Writer;
						/** @deprecated */
						public constructor(file: java.io.File);
						public getDefaultEncoding(): string;
						public write(param0: string[], param1: number, param2: number): void;
						public append(c: string): java.io.Writer;
						/** @deprecated */
						public constructor(out: java.io.OutputStream);
						public append(csq: string, start: number, end: number): java.io.Writer;
						public getEncoding(): string;
						public write(str: string, off: number, len: number): void;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					}
					export module XmlStreamWriter {
						export class Builder extends org.apache.commons.io.build.AbstractStreamBuilder<org.apache.commons.io.output.XmlStreamWriter,org.apache.commons.io.output.XmlStreamWriter.Builder> {
							public static class: java.lang.Class<org.apache.commons.io.output.XmlStreamWriter.Builder>;
							public constructor();
							public get(): any;
							public asSupplier(): any /* any*/;
							public get(): org.apache.commons.io.output.XmlStreamWriter;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module serialization {
					export class ClassNameMatcher extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.serialization.ClassNameMatcher>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.serialization.ClassNameMatcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							matches(param0: string): boolean;
						});
						public constructor();
						public matches(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module serialization {
					export class FullClassNameMatcher extends java.lang.Object implements org.apache.commons.io.serialization.ClassNameMatcher {
						public static class: java.lang.Class<org.apache.commons.io.serialization.FullClassNameMatcher>;
						public constructor(...classes: string[]);
						public matches(className: string): boolean;
						public matches(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module serialization {
					export class RegexpClassNameMatcher extends java.lang.Object implements org.apache.commons.io.serialization.ClassNameMatcher {
						public static class: java.lang.Class<org.apache.commons.io.serialization.RegexpClassNameMatcher>;
						public constructor(regex: string);
						public matches(className: string): boolean;
						public matches(param0: string): boolean;
						public constructor(pattern: java.util.regex.Pattern);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module serialization {
					export class ValidatingObjectInputStream extends java.io.ObjectInputStream {
						public static class: java.lang.Class<org.apache.commons.io.serialization.ValidatingObjectInputStream>;
						public resolveClass(desc: java.io.ObjectStreamClass): java.lang.Class<any>;
						public read(): number;
						public skip(param0: number): number;
						public constructor();
						public read(buf: number[], off: number, len: number): number;
						public close(): void;
						public invalidClassNameFound(className: string): void;
						public resolveClass(osc: java.io.ObjectStreamClass): java.lang.Class<any>;
						public reject(pattern: java.util.regex.Pattern): org.apache.commons.io.serialization.ValidatingObjectInputStream;
						public accept(pattern: java.util.regex.Pattern): org.apache.commons.io.serialization.ValidatingObjectInputStream;
						public read(b: number[]): number;
						public read(param0: number[]): number;
						public skip(n: number): number;
						public available(): number;
						public accept(m: org.apache.commons.io.serialization.ClassNameMatcher): org.apache.commons.io.serialization.ValidatingObjectInputStream;
						public constructor(_in_: java.io.InputStream);
						public reject(...patterns: string[]): org.apache.commons.io.serialization.ValidatingObjectInputStream;
						public reject(...classes: java.lang.Class<any>[]): org.apache.commons.io.serialization.ValidatingObjectInputStream;
						public read(param0: number[], param1: number, param2: number): number;
						public constructor(input: java.io.InputStream);
						public reject(m: org.apache.commons.io.serialization.ClassNameMatcher): org.apache.commons.io.serialization.ValidatingObjectInputStream;
						public readObject(): any;
						public accept(...classes: java.lang.Class<any>[]): org.apache.commons.io.serialization.ValidatingObjectInputStream;
						public accept(...patterns: string[]): org.apache.commons.io.serialization.ValidatingObjectInputStream;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module commons {
			export module io {
				export module serialization {
					export class WildcardClassNameMatcher extends java.lang.Object implements org.apache.commons.io.serialization.ClassNameMatcher {
						public static class: java.lang.Class<org.apache.commons.io.serialization.WildcardClassNameMatcher>;
						public matches(className: string): boolean;
						public matches(param0: string): boolean;
						public constructor(pattern: string);
					}
				}
			}
		}
	}
}

//Generics information:
//org.apache.commons.io.DirectoryWalker:1
//org.apache.commons.io.StreamIterator:1
//org.apache.commons.io.build.AbstractOrigin:2
//org.apache.commons.io.build.AbstractOriginSupplier:2
//org.apache.commons.io.build.AbstractStreamBuilder:2
//org.apache.commons.io.build.AbstractSupplier:2
//org.apache.commons.io.function.IOBaseStream:3
//org.apache.commons.io.function.IOBaseStreamAdapter:3
//org.apache.commons.io.function.IOBiConsumer:2
//org.apache.commons.io.function.IOBiFunction:3
//org.apache.commons.io.function.IOBinaryOperator:1
//org.apache.commons.io.function.IOComparator:1
//org.apache.commons.io.function.IOConsumer:1
//org.apache.commons.io.function.IOFunction:2
//org.apache.commons.io.function.IOIterator:1
//org.apache.commons.io.function.IOIteratorAdapter:1
//org.apache.commons.io.function.IOPredicate:1
//org.apache.commons.io.function.IOQuadFunction:5
//org.apache.commons.io.function.IOSpliterator:1
//org.apache.commons.io.function.IOSpliteratorAdapter:1
//org.apache.commons.io.function.IOStream:1
//org.apache.commons.io.function.IOStreamAdapter:1
//org.apache.commons.io.function.IOSupplier:1
//org.apache.commons.io.function.IOTriConsumer:3
//org.apache.commons.io.function.IOTriFunction:4
//org.apache.commons.io.function.IOUnaryOperator:1
//org.apache.commons.io.function.UncheckedIOBaseStream:3
//org.apache.commons.io.function.UncheckedIOIterator:1
//org.apache.commons.io.function.UncheckedIOSpliterator:1
//org.apache.commons.io.output.AbstractByteArrayOutputStream.InputStreamConstructor:1
//org.apache.commons.io.output.AppendableOutputStream:1
//org.apache.commons.io.output.AppendableWriter:1

