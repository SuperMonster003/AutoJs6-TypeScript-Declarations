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
					public static requiredCharsets(): java.util.SortedMap<string,java.nio.charset.Charset>;
					public static toCharset(charset: java.nio.charset.Charset): java.nio.charset.Charset;
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
					public constructor();
					public static copy(input: java.io.InputStream, output: java.io.OutputStream): number;
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
					public walk(startDirectory: java.io.File, results: java.util.Collection<T>): void;
					public handleFile(file: java.io.File, depth: number, results: java.util.Collection<T>): void;
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
					public static writeSwappedDouble(data: number[], offset: number, value: number): void;
					public static readSwappedDouble(data: number[], offset: number): number;
					public static readSwappedFloat(input: java.io.InputStream): number;
					public static swapFloat(value: number): number;
					public static readSwappedFloat(data: number[], offset: number): number;
					public static writeSwappedLong(data: number[], offset: number, value: number): void;
					public static writeSwappedShort(output: java.io.OutputStream, value: number): void;
					public static readSwappedShort(data: number[], offset: number): number;
					public static readSwappedUnsignedShort(data: number[], offset: number): number;
					public static swapDouble(value: number): number;
					public constructor();
					public static swapInteger(value: number): number;
					public static readSwappedShort(input: java.io.InputStream): number;
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
					public static track(file: java.io.File, marker: any): void;
					/** @deprecated */
					public static exitWhenFinished(): void;
					public constructor();
					public static getInstance(): org.apache.commons.io.FileCleaningTracker;
					/** @deprecated */
					public static track(path: string, marker: any): void;
					/** @deprecated */
					public static track(path: string, marker: any, deleteStrategy: org.apache.commons.io.FileDeleteStrategy): void;
					/** @deprecated */
					public static track(file: java.io.File, marker: any, deleteStrategy: org.apache.commons.io.FileDeleteStrategy): void;
					/** @deprecated */
					public static getTrackCount(): number;
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
					public doDelete(fileToDelete: java.io.File): boolean;
					public toString(): string;
					public constructor(name: string);
					public delete(fileToDelete: java.io.File): void;
					public deleteQuietly(fileToDelete: java.io.File): boolean;
				}
				export module FileDeleteStrategy {
					export class ForceFileDeleteStrategy extends org.apache.commons.io.FileDeleteStrategy {
						public static class: java.lang.Class<org.apache.commons.io.FileDeleteStrategy.ForceFileDeleteStrategy>;
						public doDelete(fileToDelete: java.io.File): boolean;
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
					public getMaxPathLength(): number;
					public getIllegalFileNameChars(): string[];
					public isCaseSensitive(): boolean;
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
					public static copyDirectory(srcDir: java.io.File, destDir: java.io.File, filter: java.io.FileFilter, preserveFileDate: boolean, ...copyOptions: java.nio.file.CopyOption[]): void;
					public static copyFile(input: java.io.File, output: java.io.OutputStream): number;
					public static moveFileToDirectory(srcFile: java.io.File, destDir: java.io.File, createDestDir: boolean): void;
					public static toFiles(...urls: java.net.URL[]): java.io.File[];
					public static writeLines(file: java.io.File, lines: java.util.Collection<any>, lineEnding: string, append: boolean): void;
					public static toURLs(...files: java.io.File[]): java.net.URL[];
					public static copyToDirectory(sourceIterable: java.lang.Iterable<java.io.File>, destinationDir: java.io.File): void;
					public static isFileOlder(file: java.io.File, chronoLocalDate: java.time.chrono.ChronoLocalDate): boolean;
					public static readFileToString(file: java.io.File, charsetName: string): string;
					public static getUserDirectoryPath(): string;
					public static write(file: java.io.File, data: string, charsetName: string): void;
					public static cleanDirectory(directory: java.io.File): void;
					public constructor();
					public static copyFile(srcFile: java.io.File, destFile: java.io.File, preserveFileDate: boolean): void;
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
					public static isSymlink(file: java.io.File): boolean;
					public static lineIterator(file: java.io.File, charsetName: string): org.apache.commons.io.LineIterator;
					public static forceDelete(file: java.io.File): void;
					public static writeStringToFile(file: java.io.File, data: string, charsetName: string, append: boolean): void;
					public static openOutputStream(file: java.io.File, append: boolean): java.io.FileOutputStream;
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
					public static copyToFile(source: java.io.InputStream, destination: java.io.File): void;
					public static writeLines(file: java.io.File, lines: java.util.Collection<any>): void;
					public static readLines(file: java.io.File, charsetName: string): java.util.List<string>;
					public static writeStringToFile(file: java.io.File, data: string, charset: java.nio.charset.Charset): void;
					public static isFileOlder(file: java.io.File, date: java.util.Date): boolean;
					public static copyDirectory(srcDir: java.io.File, destDir: java.io.File, filter: java.io.FileFilter): void;
					public static isFileNewer(file: java.io.File, chronoLocalDate: java.time.chrono.ChronoLocalDate, localTime: java.time.LocalTime): boolean;
					public static checksum(file: java.io.File, checksum: java.util.zip.Checksum): java.util.zip.Checksum;
					public static convertFileCollectionToFileArray(files: java.util.Collection<java.io.File>): java.io.File[];
					public static moveToDirectory(src: java.io.File, destDir: java.io.File, createDestDir: boolean): void;
					public static isFileNewer(file: java.io.File, chronoLocalDateTime: java.time.chrono.ChronoLocalDateTime<any>, zoneId: java.time.ZoneId): boolean;
					public static contentEqualsIgnoreEOL(file1: java.io.File, file2: java.io.File, charsetName: string): boolean;
					public static copyToDirectory(sourceFile: java.io.File, destinationDir: java.io.File): void;
					public static writeLines(file: java.io.File, lines: java.util.Collection<any>, append: boolean): void;
					public static forceMkdirParent(file: java.io.File): void;
					public static waitFor(file: java.io.File, seconds: number): boolean;
					public static copyURLToFile(source: java.net.URL, destination: java.io.File, connectionTimeout: number, readTimeout: number): void;
					public static writeByteArrayToFile(file: java.io.File, data: number[], append: boolean): void;
					public static deleteDirectory(directory: java.io.File): void;
					/** @deprecated */
					public static writeStringToFile(file: java.io.File, data: string, append: boolean): void;
					public static copyFileToDirectory(srcFile: java.io.File, destDir: java.io.File): void;
					public static sizeOf(file: java.io.File): number;
					public static isFileOlder(file: java.io.File, timeMillis: number): boolean;
					public static listFiles(directory: java.io.File, extensions: string[], recursive: boolean): java.util.Collection<java.io.File>;
					public static copyDirectoryToDirectory(sourceDir: java.io.File, destinationDir: java.io.File): void;
					public static writeByteArrayToFile(file: java.io.File, data: number[], off: number, len: number, append: boolean): void;
					public static copyDirectory(srcDir: java.io.File, destDir: java.io.File): void;
					public static isFileOlder(file: java.io.File, instant: java.time.Instant): boolean;
					public static isFileNewer(file: java.io.File, date: java.util.Date): boolean;
					public static contentEquals(file1: java.io.File, file2: java.io.File): boolean;
					public static copyURLToFile(source: java.net.URL, destination: java.io.File): void;
					public static isFileOlder(file: java.io.File, chronoLocalDate: java.time.chrono.ChronoLocalDate, localTime: java.time.LocalTime): boolean;
					public static sizeOfAsBigInteger(file: java.io.File): java.math.BigInteger;
					public static writeLines(file: java.io.File, charsetName: string, lines: java.util.Collection<any>, append: boolean): void;
					public static directoryContains(directory: java.io.File, child: java.io.File): boolean;
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
					public static sizeOfDirectoryAsBigInteger(directory: java.io.File): java.math.BigInteger;
					public static moveDirectoryToDirectory(src: java.io.File, destDir: java.io.File, createDestDir: boolean): void;
					public static write(file: java.io.File, data: string, charset: java.nio.charset.Charset): void;
					public static openInputStream(file: java.io.File): java.io.FileInputStream;
					public static checksumCRC32(file: java.io.File): number;
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
					public static normalize(fileName: string, unixSeparator: boolean): string;
					public equals(obj: any): boolean;
					public static getPrefixLength(fileName: string): number;
					public static removeExtension(fileName: string): string;
					public static separatorsToWindows(path: string): string;
					public static getBaseName(fileName: string): string;
					public static isExtension(fileName: string, extension: string): boolean;
					public static normalizeNoEndSeparator(fileName: string): string;
					public static indexOfLastSeparator(fileName: string): number;
					public static equals(fileName1: string, fileName2: string): boolean;
					public constructor();
					public static indexOfExtension(fileName: string): number;
					public static getExtension(fileName: string): string;
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
					public static isExtension(fileName: string, extensions: java.util.Collection<string>): boolean;
					public static normalizeNoEndSeparator(fileName: string, unixSeparator: boolean): string;
					public static wildcardMatchOnSystem(fileName: string, wildcardMatcher: string): boolean;
					public static equals(fileName1: string, fileName2: string, normalized: boolean, caseSensitivity: org.apache.commons.io.IOCase): boolean;
					public static wildcardMatch(fileName: string, wildcardMatcher: string, caseSensitivity: org.apache.commons.io.IOCase): boolean;
					public static equalsNormalizedOnSystem(fileName1: string, fileName2: string): boolean;
					public static getPrefix(fileName: string): string;
					public static normalize(fileName: string): string;
					public static getFullPath(fileName: string): string;
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
					public static dump(data: number[], offset: number, param2: java.io.OutputStream, stream: number): void;
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
				export class IOCase {
					public static class: java.lang.Class<org.apache.commons.io.IOCase>;
					public static SENSITIVE: org.apache.commons.io.IOCase;
					public static INSENSITIVE: org.apache.commons.io.IOCase;
					public static SYSTEM: org.apache.commons.io.IOCase;
					public checkRegionMatches(str: string, strStartIndex: number, search: string): boolean;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.apache.commons.io.IOCase;
					public checkStartsWith(str: string, start: string): boolean;
					public checkEndsWith(str: string, end: string): boolean;
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
				export class IOExceptionList extends java.io.IOException {
					public static class: java.lang.Class<org.apache.commons.io.IOExceptionList>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public getCauseList(clazz: java.lang.Class<any>): java.util.List<any>;
					public constructor(cause: java.lang.Throwable);
					public getCause(): java.lang.Throwable;
					public getCause(index: number, clazz: java.lang.Class<any>): java.lang.Throwable;
					public constructor(causeList: java.util.List<any>);
					public constructor(message: string, cause: java.lang.Throwable);
					public getCauseList(): java.util.List<any>;
					public getCause(index: number): java.lang.Throwable;
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
					public constructor();
					public static toMessage(index: number, cause: java.lang.Throwable): string;
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
					public static DEFAULT_BUFFER_SIZE: number;
					public static DIR_SEPARATOR: string;
					public static DIR_SEPARATOR_UNIX: string;
					public static DIR_SEPARATOR_WINDOWS: string;
					public static EOF: number;
					public static LINE_SEPARATOR: string;
					public static LINE_SEPARATOR_UNIX: string;
					public static LINE_SEPARATOR_WINDOWS: string;
					public static copyLarge(input: java.io.Reader, output: java.io.Writer, buffer: string[]): number;
					public static toByteArray(input: java.io.Reader, charset: java.nio.charset.Charset): number[];
					public static buffer(reader: java.io.Reader, size: number): java.io.BufferedReader;
					public static toBufferedReader(reader: java.io.Reader, size: number): java.io.BufferedReader;
					/** @deprecated */
					public static write(data: string[], output: java.io.OutputStream): void;
					/** @deprecated */
					public static toString(input: java.io.InputStream): string;
					public static toString(input: java.io.Reader): string;
					public static skipFully(input: java.io.InputStream, toSkip: number): void;
					public static length(array: any[]): number;
					public static write(data: string, output: java.io.OutputStream, charsetName: string): void;
					public static length(array: number[]): number;
					public static write(data: string, output: java.io.OutputStream, charset: java.nio.charset.Charset): void;
					public static copy(input: java.io.Reader, output: java.io.OutputStream, outputCharset: java.nio.charset.Charset): void;
					public static toByteArray(urlConn: java.net.URLConnection): number[];
					public static resourceToURL(name: string, classLoader: java.lang.ClassLoader): java.net.URL;
					public constructor();
					public static readFully(input: java.io.InputStream, buffer: number[]): void;
					public static readFully(input: java.io.Reader, buffer: string[]): void;
					public static resourceToByteArray(name: string, classLoader: java.lang.ClassLoader): number[];
					public static readFully(input: java.io.Reader, buffer: string[], offset: number, length: number): void;
					public static skip(input: java.nio.channels.ReadableByteChannel, toSkip: number): number;
					public static write(data: string, output: java.io.Writer): void;
					public static contentEqualsIgnoreEOL(input1: java.io.Reader, input2: java.io.Reader): boolean;
					public static toString(uri: java.net.URI, encoding: java.nio.charset.Charset): string;
					public static copyLarge(input: java.io.InputStream, output: java.io.OutputStream, inputOffset: number, param3: number, length: number[]): number;
					public static copy(input: java.io.InputStream, output: java.io.Writer, inputCharset: java.nio.charset.Charset): void;
					public static copyLarge(input: java.io.InputStream, output: java.io.OutputStream, inputOffset: number, param3: number): number;
					/** @deprecated */
					public static toByteArray(input: java.io.Reader): number[];
					public static skipFully(input: java.io.Reader, toSkip: number): void;
					/** @deprecated */
					public static writeLines(lines: java.util.Collection<any>, lineEnding: string, output: java.io.OutputStream): void;
					public static writeLines(lines: java.util.Collection<any>, lineEnding: string, writer: java.io.Writer): void;
					public static resourceToString(name: string, charset: java.nio.charset.Charset, classLoader: java.lang.ClassLoader): string;
					public static toString(input: number[], charsetName: string): string;
					/** @deprecated */
					public static write(data: java.lang.StringBuffer, output: java.io.OutputStream): void;
					public static contentEquals(input1: java.io.Reader, input2: java.io.Reader): boolean;
					public static toByteArray(url: java.net.URL): number[];
					public static skip(input: java.io.InputStream, toSkip: number): number;
					public static skip(input: java.io.Reader, toSkip: number): number;
					/** @deprecated */
					public static toString(input: number[]): string;
					public static toBufferedInputStream(input: java.io.InputStream): java.io.InputStream;
					public static contentEquals(input1: java.io.InputStream, input2: java.io.InputStream): boolean;
					public static toBufferedInputStream(input: java.io.InputStream, size: number): java.io.InputStream;
					public static writeChunked(data: number[], output: java.io.OutputStream): void;
					/** @deprecated */
					public static closeQuietly(selector: java.nio.channels.Selector): void;
					public static write(data: string[], output: java.io.OutputStream, charsetName: string): void;
					/** @deprecated */
					public static copy(input: java.io.Reader, output: java.io.OutputStream): void;
					/** @deprecated */
					public static closeQuietly(input: java.io.Reader): void;
					public static toString(input: java.io.InputStream, charsetName: string): string;
					public static copy(input: java.io.InputStream, output: java.io.OutputStream): number;
					/** @deprecated */
					public static write(data: string, output: java.io.OutputStream): void;
					/** @deprecated */
					public static readLines(input: java.io.InputStream): java.util.List<string>;
					public static read(input: java.io.InputStream, buffer: number[]): number;
					/** @deprecated */
					public static toInputStream(input: string): java.io.InputStream;
					public static toString(uri: java.net.URI, charsetName: string): string;
					public static consume(input: java.io.InputStream): number;
					public static writer(appendable: java.lang.Appendable): java.io.Writer;
					/** @deprecated */
					public static write(data: java.lang.StringBuffer, output: java.io.Writer): void;
					public static buffer(outputStream: java.io.OutputStream): java.io.BufferedOutputStream;
					public static close(conn: java.net.URLConnection): void;
					public static readFully(input: java.nio.channels.ReadableByteChannel, buffer: java.nio.ByteBuffer): void;
					public static copy(input: java.io.InputStream, output: java.io.Writer, inputCharsetName: string): void;
					public static length(array: string[]): number;
					public static toInputStream(input: string, charsetName: string): java.io.InputStream;
					public static resourceToString(name: string, charset: java.nio.charset.Charset): string;
					public static toBufferedReader(reader: java.io.Reader): java.io.BufferedReader;
					/** @deprecated */
					public static toCharArray(is: java.io.InputStream): string[];
					public static toInputStream(input: string, charset: java.nio.charset.Charset): java.io.InputStream;
					public static read(input: java.io.Reader, buffer: string[]): number;
					public static readFully(input: java.io.InputStream, length: number): number[];
					public static read(input: java.nio.channels.ReadableByteChannel, buffer: java.nio.ByteBuffer): number;
					public static writeChunked(data: string[], output: java.io.Writer): void;
					public static write(data: string[], output: java.io.OutputStream, charset: java.nio.charset.Charset): void;
					public static lineIterator(input: java.io.InputStream, charset: java.nio.charset.Charset): org.apache.commons.io.LineIterator;
					/** @deprecated */
					public static closeQuietly(closeable: java.io.Closeable): void;
					/** @deprecated */
					public static copy(input: java.io.InputStream, output: java.io.Writer): void;
					/** @deprecated */
					public static closeQuietly(serverSocket: java.net.ServerSocket): void;
					public static copyLarge(input: java.io.Reader, output: java.io.Writer): number;
					public static toByteArray(input: java.io.InputStream, size: number): number[];
					public static close(closeable: java.io.Closeable): void;
					public static readFully(input: java.io.InputStream, buffer: number[], offset: number, length: number): void;
					/** @deprecated */
					public static closeQuietly(socket: java.net.Socket): void;
					/** @deprecated */
					public static toString(uri: java.net.URI): string;
					public static lineIterator(reader: java.io.Reader): org.apache.commons.io.LineIterator;
					public static readLines(input: java.io.Reader): java.util.List<string>;
					/** @deprecated */
					public static toString(url: java.net.URL): string;
					public static toString(url: java.net.URL, encoding: java.nio.charset.Charset): string;
					public static close(closeable: java.io.Closeable, consumer: org.apache.commons.io.function.IOConsumer<java.io.IOException>): void;
					/** @deprecated */
					public static closeQuietly(output: java.io.OutputStream): void;
					public static buffer(inputStream: java.io.InputStream): java.io.BufferedInputStream;
					public static toString(input: java.io.InputStream, charset: java.nio.charset.Charset): string;
					public static write(data: string[], output: java.io.Writer): void;
					public static writeLines(lines: java.util.Collection<any>, lineEnding: string, output: java.io.OutputStream, charsetName: string): void;
					public static length(csq: string): number;
					public static copyLarge(input: java.io.Reader, output: java.io.Writer, inputOffset: number, param3: number): number;
					public static buffer(outputStream: java.io.OutputStream, size: number): java.io.BufferedOutputStream;
					public static copy(input: java.io.Reader, output: java.lang.Appendable, buffer: java.nio.CharBuffer): number;
					public static copy(input: java.io.Reader, output: java.io.Writer): number;
					public static copy(input: java.io.Reader, output: java.lang.Appendable): number;
					public static read(input: java.io.Reader, buffer: string[], offset: number, length: number): number;
					/** @deprecated */
					public static write(data: java.lang.StringBuffer, output: java.io.OutputStream, charsetName: string): void;
					/** @deprecated */
					public static closeQuietly(...closeables: java.io.Closeable[]): void;
					public static copy(input: java.io.Reader, output: java.io.OutputStream, outputCharsetName: string): void;
					public static readLines(input: java.io.InputStream, charset: java.nio.charset.Charset): java.util.List<string>;
					public static writeLines(lines: java.util.Collection<any>, lineEnding: string, output: java.io.OutputStream, charset: java.nio.charset.Charset): void;
					public static toCharArray(input: java.io.Reader): string[];
					public static toByteArray(input: java.io.Reader, charsetName: string): number[];
					/** @deprecated */
					public static write(data: number[], output: java.io.Writer): void;
					public static write(data: number[], output: java.io.Writer, charset: java.nio.charset.Charset): void;
					/** @deprecated */
					public static closeQuietly(output: java.io.Writer): void;
					public static lineIterator(input: java.io.InputStream, charsetName: string): org.apache.commons.io.LineIterator;
					public static resourceToURL(name: string): java.net.URL;
					public static copyLarge(input: java.io.Reader, output: java.io.Writer, inputOffset: number, param3: number, length: string[]): number;
					public toString(): string;
					public static copyLarge(input: java.io.InputStream, output: java.io.OutputStream, buffer: number[]): number;
					public static copyLarge(input: java.io.InputStream, output: java.io.OutputStream): number;
					public static toCharArray(is: java.io.InputStream, charset: java.nio.charset.Charset): string[];
					public static toCharArray(is: java.io.InputStream, charsetName: string): string[];
					public static buffer(reader: java.io.Reader): java.io.BufferedReader;
					public static copy(input: java.io.InputStream, output: java.io.OutputStream, bufferSize: number): number;
					public static toString(url: java.net.URL, charsetName: string): string;
					public static buffer(writer: java.io.Writer, size: number): java.io.BufferedWriter;
					/** @deprecated */
					public static toByteArray(input: string): number[];
					public static write(data: number[], output: java.io.Writer, charsetName: string): void;
					/** @deprecated */
					public static closeQuietly(input: java.io.InputStream): void;
					public static toByteArray(input: java.io.InputStream): number[];
					public static close(...closeables: java.io.Closeable[]): void;
					public static resourceToByteArray(name: string): number[];
					public static write(data: number[], output: java.io.OutputStream): void;
					public static closeQuietly(closeable: java.io.Closeable, consumer: any /* any*/): void;
					public static readLines(input: java.io.InputStream, charsetName: string): java.util.List<string>;
					public static buffer(writer: java.io.Writer): java.io.BufferedWriter;
					public static read(input: java.io.InputStream, buffer: number[], offset: number, length: number): number;
					public static skipFully(input: java.nio.channels.ReadableByteChannel, toSkip: number): void;
					public static buffer(inputStream: java.io.InputStream, size: number): java.io.BufferedInputStream;
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
					public isValidLine(line: string): boolean;
					public close(): void;
					public nextLine(): string;
					public next(): string;
					/** @deprecated */
					public static closeQuietly(iterator: org.apache.commons.io.LineIterator): void;
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
					public static stop(thread: java.lang.Thread): void;
					public run(): void;
					public static start(timeout: number): java.lang.Thread;
					public static start(thread: java.lang.Thread, timeout: number): java.lang.Thread;
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
						public constructor(caseSensitivity: org.apache.commons.io.IOCase);
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
						public constructor(caseSensitivity: org.apache.commons.io.IOCase);
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
						public constructor(caseSensitivity: org.apache.commons.io.IOCase);
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
						public static withBigIntegerCounters(): org.apache.commons.io.file.AccumulatorPathVisitor;
						public postVisitDirectory(dir: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor();
						public equals(obj: any): boolean;
						public getDirList(): java.util.List<java.nio.file.Path>;
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public hashCode(): number;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public relativizeDirectories(parent: java.nio.file.Path, sort: boolean, comparator: java.util.Comparator<any>): java.util.List<java.nio.file.Path>;
						public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public getFileList(): java.util.List<java.nio.file.Path>;
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public relativizeFiles(parent: java.nio.file.Path, sort: boolean, comparator: java.util.Comparator<any>): java.util.List<java.nio.file.Path>;
						public static withLongCounters(): org.apache.commons.io.file.AccumulatorPathVisitor;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters);
						public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public static withLongCounters(): org.apache.commons.io.file.CountingPathVisitor;
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
					export class CleaningPathVisitor extends org.apache.commons.io.file.CountingPathVisitor {
						public static class: java.lang.Class<org.apache.commons.io.file.CleaningPathVisitor>;
						public postVisitDirectory(dir: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor();
						public equals(obj: any): boolean;
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public hashCode(): number;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, ...skip: string[]);
						public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, deleteOption: org.apache.commons.io.file.DeleteOption[], ...skip: string[]);
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(dir: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters);
						public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public static withLongCounters(): org.apache.commons.io.file.CountingPathVisitor;
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
						public constructor();
						public equals(obj: any): boolean;
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public getTargetDirectory(): java.nio.file.Path;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public hashCode(): number;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public getCopyOptions(): java.nio.file.CopyOption[];
						public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public copy(sourceFile: java.nio.file.Path, targetFile: java.nio.file.Path): void;
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(sourceFile: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, sourceDirectory: java.nio.file.Path, targetDirectory: java.nio.file.Path, ...copyOptions: java.nio.file.CopyOption[]);
						public getSourceDirectory(): java.nio.file.Path;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters);
						public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(directory: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
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
					export class Counters extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.file.Counters>;
						public static bigIntegerCounter(): org.apache.commons.io.file.Counters.Counter;
						public static bigIntegerPathCounters(): org.apache.commons.io.file.Counters.PathCounters;
						public constructor();
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
						}
						export class BigIntegerPathCounters extends org.apache.commons.io.file.Counters.AbstractPathCounters {
							public static class: java.lang.Class<org.apache.commons.io.file.Counters.BigIntegerPathCounters>;
							public constructor();
							public getFileCounter(): org.apache.commons.io.file.Counters.Counter;
							public getByteCounter(): org.apache.commons.io.file.Counters.Counter;
							public constructor(byteCounter: org.apache.commons.io.file.Counters.Counter, directoryCounter: org.apache.commons.io.file.Counters.Counter, fileCounter: org.apache.commons.io.file.Counters.Counter);
							public getDirectoryCounter(): org.apache.commons.io.file.Counters.Counter;
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
							});
							public constructor();
							public increment(): void;
							public add(param0: number): void;
							public get(): number;
							public getBigInteger(): java.math.BigInteger;
							public getLong(): java.lang.Long;
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
						}
						export class LongPathCounters extends org.apache.commons.io.file.Counters.AbstractPathCounters {
							public static class: java.lang.Class<org.apache.commons.io.file.Counters.LongPathCounters>;
							public constructor();
							public getFileCounter(): org.apache.commons.io.file.Counters.Counter;
							public getByteCounter(): org.apache.commons.io.file.Counters.Counter;
							public constructor(byteCounter: org.apache.commons.io.file.Counters.Counter, directoryCounter: org.apache.commons.io.file.Counters.Counter, fileCounter: org.apache.commons.io.file.Counters.Counter);
							public getDirectoryCounter(): org.apache.commons.io.file.Counters.Counter;
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
							});
							public constructor();
							public getFileCounter(): org.apache.commons.io.file.Counters.Counter;
							public getByteCounter(): org.apache.commons.io.file.Counters.Counter;
							public getDirectoryCounter(): org.apache.commons.io.file.Counters.Counter;
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
						public constructor();
						public equals(obj: any): boolean;
						public getPathCounters(): org.apache.commons.io.file.Counters.PathCounters;
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public hashCode(): number;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public toString(): string;
						public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters);
						public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public static withLongCounters(): org.apache.commons.io.file.CountingPathVisitor;
						public static withBigIntegerCounters(): org.apache.commons.io.file.CountingPathVisitor;
						public visitFile(file: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
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
						public constructor();
						public equals(obj: any): boolean;
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public hashCode(): number;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, ...skip: string[]);
						public preVisitDirectory(dir: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public static withLongCounters(): org.apache.commons.io.file.DeletingPathVisitor;
						public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters, deleteOption: org.apache.commons.io.file.DeleteOption[], ...skip: string[]);
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public static withBigIntegerCounters(): org.apache.commons.io.file.DeletingPathVisitor;
						public visitFile(file: java.nio.file.Path, attributes: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFile(file: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public constructor(pathCounter: org.apache.commons.io.file.Counters.PathCounters);
						public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public static withLongCounters(): org.apache.commons.io.file.CountingPathVisitor;
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
					export class PathUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.file.PathUtils>;
						public static EMPTY_DELETE_OPTION_ARRAY: org.apache.commons.io.file.DeleteOption[];
						public static EMPTY_FILE_VISIT_OPTION_ARRAY: java.nio.file.FileVisitOption[];
						public static EMPTY_LINK_OPTION_ARRAY: java.nio.file.LinkOption[];
						public static EMPTY_OPEN_OPTION_ARRAY: java.nio.file.OpenOption[];
						public static delete(path: java.nio.file.Path, ...options: org.apache.commons.io.file.DeleteOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static directoryContentEquals(path1: java.nio.file.Path, path2: java.nio.file.Path): boolean;
						public static cleanDirectory(directory: java.nio.file.Path): org.apache.commons.io.file.Counters.PathCounters;
						public static directoryContentEquals(path1: java.nio.file.Path, path2: java.nio.file.Path, maxDepth: number, linkOptions: java.nio.file.LinkOption[], fileVisitOptions: java.nio.file.FileVisitOption[]): boolean;
						public static copyFile(sourceFile: java.net.URL, targetFile: java.nio.file.Path, ...copyOptions: java.nio.file.CopyOption[]): java.nio.file.Path;
						public static fileContentEquals(path1: java.nio.file.Path, path2: java.nio.file.Path, linkOptions: java.nio.file.LinkOption[], openOptions: java.nio.file.OpenOption[]): boolean;
						public static visitFileTree(visitor: java.nio.file.FileVisitor, first: string, ...more: string[]): java.nio.file.FileVisitor;
						public static countDirectory(directory: java.nio.file.Path): org.apache.commons.io.file.Counters.PathCounters;
						public static copyFileToDirectory(sourceFile: java.nio.file.Path, targetDirectory: java.nio.file.Path, ...copyOptions: java.nio.file.CopyOption[]): java.nio.file.Path;
						public static cleanDirectory(directory: java.nio.file.Path, ...options: org.apache.commons.io.file.DeleteOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static setReadOnly(path: java.nio.file.Path, readOnly: boolean, ...options: java.nio.file.LinkOption[]): java.nio.file.Path;
						public static copyDirectory(sourceDirectory: java.nio.file.Path, targetDirectory: java.nio.file.Path, ...copyOptions: java.nio.file.CopyOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static directoryAndFileContentEquals(path1: java.nio.file.Path, path2: java.nio.file.Path, linkOptions: java.nio.file.LinkOption[], openOptions: java.nio.file.OpenOption[], fileVisitOption: java.nio.file.FileVisitOption[]): boolean;
						public static visitFileTree(visitor: java.nio.file.FileVisitor, directory: java.nio.file.Path): java.nio.file.FileVisitor;
						public static delete(path: java.nio.file.Path): org.apache.commons.io.file.Counters.PathCounters;
						public static isEmpty(path: java.nio.file.Path): boolean;
						public static copyFileToDirectory(sourceFile: java.net.URL, targetDirectory: java.nio.file.Path, ...copyOptions: java.nio.file.CopyOption[]): java.nio.file.Path;
						public static isEmptyDirectory(directory: java.nio.file.Path): boolean;
						public static isEmptyFile(file: java.nio.file.Path): boolean;
						public static deleteFile(file: java.nio.file.Path): org.apache.commons.io.file.Counters.PathCounters;
						public static visitFileTree(visitor: java.nio.file.FileVisitor, start: java.nio.file.Path, options: java.util.Set<any>, maxDepth: number): java.nio.file.FileVisitor;
						public static fileContentEquals(path1: java.nio.file.Path, path2: java.nio.file.Path): boolean;
						public static visitFileTree(visitor: java.nio.file.FileVisitor, uri: java.net.URI): java.nio.file.FileVisitor;
						public static directoryAndFileContentEquals(path1: java.nio.file.Path, path2: java.nio.file.Path): boolean;
						public static deleteDirectory(directory: java.nio.file.Path): org.apache.commons.io.file.Counters.PathCounters;
						public static deleteFile(file: java.nio.file.Path, ...options: org.apache.commons.io.file.DeleteOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static deleteDirectory(directory: java.nio.file.Path, ...options: org.apache.commons.io.file.DeleteOption[]): org.apache.commons.io.file.Counters.PathCounters;
						public static getAclEntryList(sourcePath: java.nio.file.Path): java.util.List<java.nio.file.attribute.AclEntry>;
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
					export abstract class SimplePathVisitor extends java.nio.file.SimpleFileVisitor<java.nio.file.Path> {
						public static class: java.lang.Class<org.apache.commons.io.file.SimplePathVisitor>;
						public postVisitDirectory(dir: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
						public constructor();
						public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
						public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
						public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
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
				export module filefilter {
					export abstract class AbstractFileFilter extends java.lang.Object implements org.apache.commons.io.filefilter.IOFileFilter {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.AbstractFileFilter>;
						public constructor();
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(param0: java.io.File): boolean;
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
				export module filefilter {
					export class AgeFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.AgeFileFilter>;
						public constructor();
						public constructor(cutoff: number);
						public accept(dir: java.io.File, name: string): boolean;
						public constructor(cutoffDate: java.util.Date);
						public constructor(cutoffReference: java.io.File);
						public constructor(cutoffReference: java.io.File, acceptOlder: boolean);
						public accept(file: java.io.File): boolean;
						public constructor(cutoff: number, param1: boolean);
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public constructor(cutoffDate: java.util.Date, acceptOlder: boolean);
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
						public constructor();
						public accept(file: java.io.File, name: string): boolean;
						public getFileFilters(): java.util.List<org.apache.commons.io.filefilter.IOFileFilter>;
						public removeFileFilter(param0: org.apache.commons.io.filefilter.IOFileFilter): boolean;
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public removeFileFilter(ioFileFilter: org.apache.commons.io.filefilter.IOFileFilter): boolean;
						public constructor(fileFilters: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>);
						public addFileFilter(param0: org.apache.commons.io.filefilter.IOFileFilter): void;
						public setFileFilters(param0: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>): void;
						public accept(dir: java.io.File, name: string): boolean;
						public setFileFilters(fileFilters: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>): void;
						public addFileFilter(ioFileFilter: org.apache.commons.io.filefilter.IOFileFilter): void;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(filter1: org.apache.commons.io.filefilter.IOFileFilter, filter2: org.apache.commons.io.filefilter.IOFileFilter);
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
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
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
					export class CanReadFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.CanReadFileFilter>;
						public static CAN_READ: org.apache.commons.io.filefilter.IOFileFilter;
						public static CANNOT_READ: org.apache.commons.io.filefilter.IOFileFilter;
						public static READ_ONLY: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
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
					export class CanWriteFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.CanWriteFileFilter>;
						public static CAN_WRITE: org.apache.commons.io.filefilter.IOFileFilter;
						public static CANNOT_WRITE: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
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
						public constructor(filter: java.io.FileFilter);
						public constructor(filter: java.io.FilenameFilter);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(param0: java.io.File): boolean;
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
				export module filefilter {
					export class DirectoryFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.DirectoryFileFilter>;
						public static DIRECTORY: org.apache.commons.io.filefilter.IOFileFilter;
						public static INSTANCE: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
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
					export class EmptyFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.EmptyFileFilter>;
						public static EMPTY: org.apache.commons.io.filefilter.IOFileFilter;
						public static NOT_EMPTY: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
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
					export class FalseFileFilter extends java.lang.Object implements org.apache.commons.io.filefilter.IOFileFilter, java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.FalseFileFilter>;
						public static FALSE: org.apache.commons.io.filefilter.IOFileFilter;
						public static INSTANCE: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
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
						public static FILE: org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
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
					export class FileFilterUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.FileFilterUtils>;
						public static prefixFileFilter(prefix: string): org.apache.commons.io.filefilter.IOFileFilter;
						public static fileFileFilter(): org.apache.commons.io.filefilter.IOFileFilter;
						/** @deprecated */
						public static orFileFilter(filter1: org.apache.commons.io.filefilter.IOFileFilter, filter2: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static nameFileFilter(name: string, caseSensitivity: org.apache.commons.io.IOCase): org.apache.commons.io.filefilter.IOFileFilter;
						public static trueFileFilter(): org.apache.commons.io.filefilter.IOFileFilter;
						public static ageFileFilter(cutoffReference: java.io.File): org.apache.commons.io.filefilter.IOFileFilter;
						public static filterList(filter: org.apache.commons.io.filefilter.IOFileFilter, ...files: java.io.File[]): java.util.List<java.io.File>;
						public static makeDirectoryOnly(filter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static sizeFileFilter(threshold: number): org.apache.commons.io.filefilter.IOFileFilter;
						public static notFileFilter(filter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static directoryFileFilter(): org.apache.commons.io.filefilter.IOFileFilter;
						public static asFileFilter(filter: java.io.FileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static magicNumberFileFilter(magicNumber: string, offset: number): org.apache.commons.io.filefilter.IOFileFilter;
						public static falseFileFilter(): org.apache.commons.io.filefilter.IOFileFilter;
						public static ageFileFilter(cutoff: number, param1: boolean): org.apache.commons.io.filefilter.IOFileFilter;
						public static ageFileFilter(cutoffDate: java.util.Date): org.apache.commons.io.filefilter.IOFileFilter;
						public static magicNumberFileFilter(magicNumber: number[]): org.apache.commons.io.filefilter.IOFileFilter;
						public static makeCVSAware(filter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static makeSVNAware(filter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static magicNumberFileFilter(magicNumber: string): org.apache.commons.io.filefilter.IOFileFilter;
						/** @deprecated */
						public static andFileFilter(filter1: org.apache.commons.io.filefilter.IOFileFilter, filter2: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public constructor();
						public static suffixFileFilter(suffix: string): org.apache.commons.io.filefilter.IOFileFilter;
						public static toList(...filters: org.apache.commons.io.filefilter.IOFileFilter[]): java.util.List<org.apache.commons.io.filefilter.IOFileFilter>;
						public static asFileFilter(filter: java.io.FilenameFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static makeFileOnly(filter: org.apache.commons.io.filefilter.IOFileFilter): org.apache.commons.io.filefilter.IOFileFilter;
						public static filterSet(filter: org.apache.commons.io.filefilter.IOFileFilter, files: java.lang.Iterable<java.io.File>): java.util.Set<java.io.File>;
						public static filter(filter: org.apache.commons.io.filefilter.IOFileFilter, files: java.lang.Iterable<java.io.File>): java.io.File[];
						public static filterList(filter: org.apache.commons.io.filefilter.IOFileFilter, files: java.lang.Iterable<java.io.File>): java.util.List<java.io.File>;
						public static prefixFileFilter(prefix: string, caseSensitivity: org.apache.commons.io.IOCase): org.apache.commons.io.filefilter.IOFileFilter;
						public static sizeFileFilter(threshold: number, param1: boolean): org.apache.commons.io.filefilter.IOFileFilter;
						public static or(...filters: org.apache.commons.io.filefilter.IOFileFilter[]): org.apache.commons.io.filefilter.IOFileFilter;
						public static filterSet(filter: org.apache.commons.io.filefilter.IOFileFilter, ...files: java.io.File[]): java.util.Set<java.io.File>;
						public static nameFileFilter(name: string): org.apache.commons.io.filefilter.IOFileFilter;
						public static filter(filter: org.apache.commons.io.filefilter.IOFileFilter, ...files: java.io.File[]): java.io.File[];
						public static ageFileFilter(cutoffDate: java.util.Date, acceptOlder: boolean): org.apache.commons.io.filefilter.IOFileFilter;
						public static ageFileFilter(cutoffReference: java.io.File, acceptOlder: boolean): org.apache.commons.io.filefilter.IOFileFilter;
						public static suffixFileFilter(suffix: string, caseSensitivity: org.apache.commons.io.IOCase): org.apache.commons.io.filefilter.IOFileFilter;
						public static and(...filters: org.apache.commons.io.filefilter.IOFileFilter[]): org.apache.commons.io.filefilter.IOFileFilter;
						public static ageFileFilter(cutoff: number): org.apache.commons.io.filefilter.IOFileFilter;
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
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
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
					export class IOFileFilter extends java.lang.Object implements java.io.FileFilter, java.io.FilenameFilter {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.IOFileFilter>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.filefilter.IOFileFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: java.io.File): boolean;
							accept(param0: java.io.File, param1: string): boolean;
							"<clinit>"(): void;
							accept(param0: java.io.File): boolean;
							accept(param0: java.io.File, param1: string): boolean;
						});
						public constructor();
						public static EMPTY_STRING_ARRAY: string[];
						public accept(param0: java.io.File, param1: string): boolean;
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
					export class MagicNumberFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.MagicNumberFileFilter>;
						public constructor(magicNumber: string, offset: number);
						public constructor();
						public constructor(magicNumber: string);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public constructor(magicNumber: number[]);
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(param0: java.io.File): boolean;
						public constructor(magicNumber: number[], offset: number);
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
				export module filefilter {
					export class NameFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.NameFileFilter>;
						public constructor(names: java.util.List<string>);
						public constructor();
						public constructor(name: string);
						public accept(dir: java.io.File, name: string): boolean;
						public constructor(...names: string[]);
						public constructor(names: string[], caseSensitivity: org.apache.commons.io.IOCase);
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(name: string, caseSensitivity: org.apache.commons.io.IOCase);
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public constructor(names: java.util.List<string>, caseSensitivity: org.apache.commons.io.IOCase);
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
						public accept(file: java.io.File, name: string): boolean;
						public constructor(filter: org.apache.commons.io.filefilter.IOFileFilter);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(param0: java.io.File): boolean;
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
				export module filefilter {
					export class OrFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements org.apache.commons.io.filefilter.ConditionalFileFilter, java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.OrFileFilter>;
						public constructor();
						public accept(file: java.io.File, name: string): boolean;
						public getFileFilters(): java.util.List<org.apache.commons.io.filefilter.IOFileFilter>;
						public removeFileFilter(param0: org.apache.commons.io.filefilter.IOFileFilter): boolean;
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public removeFileFilter(ioFileFilter: org.apache.commons.io.filefilter.IOFileFilter): boolean;
						public constructor(fileFilters: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>);
						public addFileFilter(param0: org.apache.commons.io.filefilter.IOFileFilter): void;
						public setFileFilters(param0: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>): void;
						public accept(dir: java.io.File, name: string): boolean;
						public setFileFilters(fileFilters: java.util.List<org.apache.commons.io.filefilter.IOFileFilter>): void;
						public addFileFilter(ioFileFilter: org.apache.commons.io.filefilter.IOFileFilter): void;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(filter1: org.apache.commons.io.filefilter.IOFileFilter, filter2: org.apache.commons.io.filefilter.IOFileFilter);
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
						public accept(file: java.io.File, name: string): boolean;
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public constructor(prefix: string, caseSensitivity: org.apache.commons.io.IOCase);
						public constructor(prefix: string);
						public accept(dir: java.io.File, name: string): boolean;
						public constructor(prefixes: string[], caseSensitivity: org.apache.commons.io.IOCase);
						public accept(file: java.io.File): boolean;
						public constructor(prefixes: java.util.List<string>, caseSensitivity: org.apache.commons.io.IOCase);
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(prefixes: java.util.List<string>);
						public constructor(...prefixes: string[]);
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
						public constructor(pattern: string, caseSensitivity: org.apache.commons.io.IOCase);
						public constructor();
						public accept(dir: java.io.File, name: string): boolean;
						public constructor(pattern: string, flags: number);
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public accept(param0: java.io.File): boolean;
						public constructor(pattern: java.util.regex.Pattern);
						public constructor(pattern: string);
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
						public constructor(size: number);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(size: number, param1: boolean);
						public accept(param0: java.io.File): boolean;
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
				export module filefilter {
					export class SuffixFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.SuffixFileFilter>;
						public constructor();
						public constructor(suffix: string);
						public constructor(suffixes: java.util.List<string>);
						public accept(file: java.io.File, name: string): boolean;
						public constructor(suffixes: java.util.List<string>, caseSensitivity: org.apache.commons.io.IOCase);
						public accept(param0: java.io.File): boolean;
						public toString(): string;
						public constructor(...suffixes: string[]);
						public accept(dir: java.io.File, name: string): boolean;
						public constructor(suffixes: string[], caseSensitivity: org.apache.commons.io.IOCase);
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(suffix: string, caseSensitivity: org.apache.commons.io.IOCase);
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
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public accept(param0: java.io.File, param1: string): boolean;
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
					export class WildcardFileFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.WildcardFileFilter>;
						public constructor(wildcards: string[], caseSensitivity: org.apache.commons.io.IOCase);
						public constructor();
						public constructor(wildcards: java.util.List<string>);
						public accept(dir: java.io.File, name: string): boolean;
						public constructor(wildcard: string, caseSensitivity: org.apache.commons.io.IOCase);
						public accept(file: java.io.File): boolean;
						public constructor(wildcard: string);
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(...wildcards: string[]);
						public accept(param0: java.io.File): boolean;
						public constructor(wildcards: java.util.List<string>, caseSensitivity: org.apache.commons.io.IOCase);
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
				export module filefilter {
					export class WildcardFilter extends org.apache.commons.io.filefilter.AbstractFileFilter implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.commons.io.filefilter.WildcardFilter>;
						public constructor();
						public constructor(wildcards: java.util.List<string>);
						public accept(dir: java.io.File, name: string): boolean;
						public accept(file: java.io.File): boolean;
						public constructor(wildcard: string);
						public accept(param0: java.io.File, param1: string): boolean;
						public constructor(...wildcards: string[]);
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
				export module function {
					export class IOConsumer<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOConsumer<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOConsumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: T): void;
							andThen(after: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOConsumer<T>;
							lambda$andThen$0(after: org.apache.commons.io.function.IOConsumer<any>, t: any): void;
						});
						public constructor();
						public accept(param0: T): void;
						public andThen(after: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOConsumer<T>;
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
							apply(param0: T): R;
							compose(before: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOFunction<any,any>;
							compose(before: any /* any*/): org.apache.commons.io.function.IOFunction<any,any>;
							compose(before: org.apache.commons.io.function.IOSupplier<any>): org.apache.commons.io.function.IOSupplier<R>;
							compose(before: any /* any*/): org.apache.commons.io.function.IOSupplier<R>;
							andThen(after: org.apache.commons.io.function.IOFunction<any,any>): org.apache.commons.io.function.IOFunction<any,any>;
							andThen(after: any /* any*/): org.apache.commons.io.function.IOFunction<any,any>;
							andThen(after: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOConsumer<T>;
							andThen(after: any /* any*/): org.apache.commons.io.function.IOConsumer<T>;
							identity(): org.apache.commons.io.function.IOFunction<any,any>;
							lambda$identity$8(t: any): any;
							lambda$andThen$7(after: any /* any*/, t: any): void;
							lambda$andThen$6(after: org.apache.commons.io.function.IOConsumer<any>, t: any): void;
							lambda$andThen$5(after: any /* any*/, t: any): any;
							lambda$andThen$4(after: org.apache.commons.io.function.IOFunction<any,any>, t: any): any;
							lambda$compose$3(before: any /* any*/): any;
							lambda$compose$2(before: org.apache.commons.io.function.IOSupplier<any>): any;
							lambda$compose$1(before: any /* any*/, v: any): any;
							lambda$compose$0(before: org.apache.commons.io.function.IOFunction<any,any>, v: any): any;
						});
						public constructor();
						public apply(param0: T): R;
						public andThen(after: org.apache.commons.io.function.IOConsumer<any>): org.apache.commons.io.function.IOConsumer<T>;
						public static identity(): org.apache.commons.io.function.IOFunction<any,any>;
						public compose(before: org.apache.commons.io.function.IOSupplier<any>): org.apache.commons.io.function.IOSupplier<R>;
						public andThen(after: any /* any*/): org.apache.commons.io.function.IOFunction<any,any>;
						public andThen(after: any /* any*/): org.apache.commons.io.function.IOConsumer<T>;
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
					export class IOSupplier<T>  extends java.lang.Object {
						public static class: java.lang.Class<org.apache.commons.io.function.IOSupplier<any>>;
						/**
						 * Constructs a new instance of the org.apache.commons.io.function.IOSupplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(): T;
						});
						public constructor();
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
				export module input {
					export abstract class AbstractCharacterFilterReader extends java.io.FilterReader {
						public static class: java.lang.Class<org.apache.commons.io.input.AbstractCharacterFilterReader>;
						public read(): number;
						public constructor();
						public constructor(lock: any);
						public constructor(reader: java.io.Reader);
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public read(cbuf: string[]): number;
						public read(target: java.nio.CharBuffer): number;
						public filter(param0: number): boolean;
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
						public constructor();
						public constructor(_in_: java.io.InputStream);
						public close(): void;
						public afterRead(n: number): void;
						public constructor(proxy: java.io.InputStream);
						public finalize(): void;
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
						public constructor(delegate: java.io.InputStream, ...boms: org.apache.commons.io.ByteOrderMark[]);
						public constructor(delegate: java.io.InputStream, include: boolean);
						public read(bts: number[]): number;
						public read(buf: number[], off: number, len: number): number;
						public getBOMCharsetName(): string;
						public close(): void;
						public hasBOM(): boolean;
						public constructor(proxy: java.io.InputStream);
						public skip(ln: number): number;
						public constructor(delegate: java.io.InputStream, include: boolean, ...boms: org.apache.commons.io.ByteOrderMark[]);
						public skip(n: number): number;
						public mark(readlimit: number): void;
						public read(buf: number[]): number;
						public read(bts: number[], off: number, len: number): number;
						public getBOM(): org.apache.commons.io.ByteOrderMark;
						public reset(): void;
						public constructor(delegate: java.io.InputStream);
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
					export class BoundedInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.BoundedInputStream>;
						public constructor(_in_: java.io.InputStream, size: number);
						public read(): number;
						public constructor();
						public close(): void;
						public read(b: number[]): number;
						public toString(): string;
						public skip(n: number): number;
						public available(): number;
						public constructor(_in_: java.io.InputStream);
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
						public constructor(exception: java.io.IOException);
						public read(): number;
						public constructor();
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public read(b: number[]): number;
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
						public constructor(exception: java.io.IOException);
						public read(): number;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public read(cbuf: string[]): number;
						public skip(n: number): number;
						public ready(): boolean;
						public mark(readAheadLimit: number): void;
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
					export class CharSequenceInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.CharSequenceInputStream>;
						public read(): number;
						public constructor();
						public constructor(cs: string, charset: java.nio.charset.Charset, bufferSize: number);
						public constructor(cs: string, charset: java.nio.charset.Charset);
						public read(array: number[], off: number, len: number): number;
						public close(): void;
						public constructor(cs: string, charset: string, bufferSize: number);
						public read(b: number[]): number;
						public skip(n: number): number;
						public available(): number;
						public constructor(cs: string, charset: string);
						public mark(readlimit: number): void;
						public read(b: number[], off: number, len: number): number;
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
						public filter(ch: number): boolean;
						public constructor(reader: java.io.Reader);
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public constructor(reader: java.io.Reader, skip: number);
						public read(cbuf: string[]): number;
						public filter(param0: number): boolean;
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
						public constructor(lock: any);
						public filter(ch: number): boolean;
						public constructor(reader: java.io.Reader);
						public close(): void;
						public read(cbuf: string[], off: number, len: number): number;
						public read(cbuf: string[]): number;
						public filter(param0: number): boolean;
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
						public constructor(_in_: java.io.InputStream);
						public close(): void;
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
						public constructor(lock: any);
						public close(): void;
						public constructor(proxy: java.io.Reader);
						public read(chr: string[], st: number, len: number): number;
						public read(target: java.nio.CharBuffer): number;
						public constructor(_in_: java.io.Reader);
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
						public skip(ln: number): number;
						public skip(length: number): number;
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
					export class MessageDigestCalculatingInputStream extends org.apache.commons.io.input.ObservableInputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.MessageDigestCalculatingInputStream>;
						public constructor();
						public close(): void;
						public getMessageDigest(): java.security.MessageDigest;
						public constructor(inputStream: java.io.InputStream, MessageDigest: java.security.MessageDigest);
						public constructor(pProxy: java.io.InputStream);
						public constructor(inputStream: java.io.InputStream, algorithm: string);
						public constructor(inputStream: java.io.InputStream);
					}
					export module MessageDigestCalculatingInputStream {
						export class MessageDigestMaintainingObserver extends org.apache.commons.io.input.ObservableInputStream.Observer {
							public static class: java.lang.Class<org.apache.commons.io.input.MessageDigestCalculatingInputStream.MessageDigestMaintainingObserver>;
							public constructor();
							public constructor(messageDigest: java.security.MessageDigest);
							public data(pBuffer: number[], pOffset: number, pLength: number): void;
							public data(input: number[], offset: number, length: number): void;
							public data(input: number): void;
							public data(pByte: number): void;
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
						public read(bytes: number[], offset: number, length: number): number;
						public processByte(): number;
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
						public reset(): void;
						public processBytes(bytes: number[], offset: number, length: number): void;
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
						public read(): number;
						public constructor();
						public read(bts: number[]): number;
						public read(pBuffer: number[], pOffset: number, pLength: number): number;
						public getObservers(): java.util.List<org.apache.commons.io.input.ObservableInputStream.Observer>;
						public noteDataBytes(pBuffer: number[], pOffset: number, pLength: number): void;
						public close(): void;
						public removeAllObservers(): void;
						public constructor(proxy: java.io.InputStream);
						public noteFinished(): void;
						public noteClosed(): void;
						public noteDataByte(pDataByte: number): void;
						public add(pObserver: org.apache.commons.io.input.ObservableInputStream.Observer): void;
						public remove(pObserver: org.apache.commons.io.input.ObservableInputStream.Observer): void;
						public consume(): void;
						public read(bts: number[], off: number, len: number): number;
						public constructor(pProxy: java.io.InputStream);
						public noteError(pException: java.io.IOException): void;
						public read(pBuffer: number[]): number;
					}
					export module ObservableInputStream {
						export abstract class Observer extends java.lang.Object {
							public static class: java.lang.Class<org.apache.commons.io.input.ObservableInputStream.Observer>;
							public constructor();
							public error(pException: java.io.IOException): void;
							public closed(): void;
							public data(pBuffer: number[], pOffset: number, pLength: number): void;
							public finished(): void;
							public data(pByte: number): void;
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
						public skip(n: number): number;
						public available(): number;
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
						public read(cbuf: string[], off: number, len: number): number;
						public afterRead(n: number): void;
						public read(cbuf: string[]): number;
						public read(chr: string[], st: number, len: number): number;
						public mark(idx: number): void;
						public skip(ln: number): number;
						public read(chr: string[]): number;
						public skip(n: number): number;
						public ready(): boolean;
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
					export class RandomAccessFileInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.RandomAccessFileInputStream>;
						public read(bytes: number[], offset: number, length: number): number;
						public availableLong(): number;
						public read(): number;
						public constructor();
						public skip(skipCount: number): number;
						public close(): void;
						public constructor(file: java.io.RandomAccessFile, closeOnClose: boolean);
						public getRandomAccessFile(): java.io.RandomAccessFile;
						public read(b: number[]): number;
						public available(): number;
						public skip(n: number): number;
						public read(bytes: number[]): number;
						public read(b: number[], off: number, len: number): number;
						public constructor(file: java.io.RandomAccessFile);
						public isCloseOnClose(): boolean;
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
						public constructor(reader: java.io.Reader, charset: java.nio.charset.Charset, bufferSize: number);
						public read(array: number[], off: number, len: number): number;
						public close(): void;
						public constructor(reader: java.io.Reader, charsetName: string);
						public read(b: number[]): number;
						public constructor(reader: java.io.Reader, charset: java.nio.charset.Charset);
						public constructor(reader: java.io.Reader, encoder: java.nio.charset.CharsetEncoder, bufferSize: number);
						public constructor(reader: java.io.Reader, encoder: java.nio.charset.CharsetEncoder);
						public read(b: number[], off: number, len: number): number;
						public constructor(reader: java.io.Reader, charsetName: string, bufferSize: number);
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
						public constructor(file: java.io.File);
						public constructor(file: java.io.File, blockSize: number, charset: java.nio.charset.Charset);
						public constructor(file: java.io.File, charset: java.nio.charset.Charset);
						public constructor(file: java.nio.file.Path, charset: java.nio.charset.Charset);
						public close(): void;
						public constructor(file: java.nio.file.Path, blockSize: number, charset: java.nio.charset.Charset);
						public readLines(lineCount: number): java.util.List<string>;
						public constructor(file: java.nio.file.Path, blockSize: number, charsetName: string);
						public constructor(file: java.io.File, blockSize: number, charsetName: string);
						public toString(lineCount: number): string;
						public toString(): string;
						public readLine(): string;
					}
					export module ReversedLinesFileReader {
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
					export class Tailer extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<org.apache.commons.io.input.Tailer>;
						public constructor(file: java.io.File, charset: java.nio.charset.Charset, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param4: boolean, end: boolean, reOpen: number);
						public static create(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number): org.apache.commons.io.input.Tailer;
						public static create(file: java.io.File, listener: org.apache.commons.io.input.TailerListener): org.apache.commons.io.input.Tailer;
						public static create(file: java.io.File, charset: java.nio.charset.Charset, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param4: boolean, end: boolean, reOpen: number): org.apache.commons.io.input.Tailer;
						public constructor(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number);
						public static create(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean, end: boolean, reOpen: number): org.apache.commons.io.input.Tailer;
						public constructor(file: java.io.File, listener: org.apache.commons.io.input.TailerListener);
						public static create(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean): org.apache.commons.io.input.Tailer;
						public getRun(): boolean;
						public stop(): void;
						public static create(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean, end: boolean): org.apache.commons.io.input.Tailer;
						public static create(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean, end: number): org.apache.commons.io.input.Tailer;
						public getDelay(): number;
						public run(): void;
						public constructor(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean, end: number);
						public constructor(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean, end: boolean, reOpen: number);
						public getFile(): java.io.File;
						public constructor(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean, end: boolean);
						public constructor(file: java.io.File, listener: org.apache.commons.io.input.TailerListener, delayMillis: number, param3: boolean);
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
							init(param0: org.apache.commons.io.input.Tailer): void;
							fileNotFound(): void;
							fileRotated(): void;
							handle(param0: string): void;
							handle(param0: java.lang.Exception): void;
						});
						public constructor();
						public handle(param0: string): void;
						public handle(param0: java.lang.Exception): void;
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
						public handle(param0: string): void;
						public handle(param0: java.lang.Exception): void;
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
					export class UnixLineEndingInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.UnixLineEndingInputStream>;
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
					export class UnsynchronizedByteArrayInputStream extends java.io.InputStream {
						public static class: java.lang.Class<org.apache.commons.io.input.UnsynchronizedByteArrayInputStream>;
						public static END_OF_STREAM: number;
						public read(): number;
						public constructor();
						public close(): void;
						public constructor(data: number[]);
						public read(b: number[]): number;
						public available(): number;
						public skip(n: number): number;
						public constructor(data: number[], offset: number, length: number);
						public mark(readlimit: number): void;
						public read(b: number[], off: number, len: number): number;
						public markSupported(): boolean;
						public reset(): void;
						public constructor(data: number[], offset: number);
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
						public read(): number;
						public constructor();
						public constructor(lock: any);
						public constructor(inputStream: java.io.InputStream, httpContentType: string, lenient: boolean, defaultEncoding: string);
						public close(): void;
						public read(buf: string[], offset: number, len: number): number;
						public read(cbuf: string[]): number;
						public constructor(inputStream: java.io.InputStream, lenient: boolean, defaultEncoding: string);
						public constructor(url: java.net.URL);
						public getDefaultEncoding(): string;
						public constructor(conn: java.net.URLConnection, defaultEncoding: string);
						public constructor(file: java.io.File);
						public constructor(inputStream: java.io.InputStream, httpContentType: string, lenient: boolean);
						public constructor(inputStream: java.io.InputStream, lenient: boolean);
						public read(target: java.nio.CharBuffer): number;
						public getEncoding(): string;
						public constructor(inputStream: java.io.InputStream, httpContentType: string);
						public read(param0: java.nio.CharBuffer): number;
						public constructor(inputStream: java.io.InputStream);
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
					export class XmlStreamReaderException extends java.io.IOException {
						public static class: java.lang.Class<org.apache.commons.io.input.XmlStreamReaderException>;
						public getContentTypeMime(): string;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public getBomEncoding(): string;
						public constructor(msg: string, ctMime: string, ctEnc: string, bomEnc: string, xmlGuessEnc: string, xmlEnc: string);
						public getXmlGuessEncoding(): string;
						public getContentTypeEncoding(): string;
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
						export class CircularBufferInputStream extends java.io.InputStream {
							public static class: java.lang.Class<org.apache.commons.io.input.buffer.CircularBufferInputStream>;
							public _in_: java.io.InputStream;
							public buffer: org.apache.commons.io.input.buffer.CircularByteBuffer;
							public bufferSize: number;
							public constructor();
							public constructor(inputStream: java.io.InputStream);
							public close(): void;
							public read(buffer: number[]): number;
							public read(): number;
							public constructor(inputStream: java.io.InputStream, bufferSize: number);
							public read(b: number[], off: number, len: number): number;
							public fillBuffer(): void;
							public haveBytes(count: number): boolean;
							public read(targetBuffer: number[], offset: number, length: number): number;
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
							public getCurrentNumberOfBytes(): number;
							public hasSpace(count: number): boolean;
							public clear(): void;
							public read(): number;
							public getSpace(): number;
							public constructor(pSize: number);
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
							onStart(param0: org.apache.commons.io.monitor.FileAlterationObserver): void;
							onDirectoryCreate(param0: java.io.File): void;
							onDirectoryChange(param0: java.io.File): void;
							onDirectoryDelete(param0: java.io.File): void;
							onFileCreate(param0: java.io.File): void;
							onFileChange(param0: java.io.File): void;
							onFileDelete(param0: java.io.File): void;
							onStop(param0: org.apache.commons.io.monitor.FileAlterationObserver): void;
						});
						public constructor();
						public onStop(param0: org.apache.commons.io.monitor.FileAlterationObserver): void;
						public onFileDelete(param0: java.io.File): void;
						public onStart(param0: org.apache.commons.io.monitor.FileAlterationObserver): void;
						public onDirectoryDelete(param0: java.io.File): void;
						public onDirectoryCreate(param0: java.io.File): void;
						public onDirectoryChange(param0: java.io.File): void;
						public onFileCreate(param0: java.io.File): void;
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
						public getObservers(): java.lang.Iterable<org.apache.commons.io.monitor.FileAlterationObserver>;
						public constructor();
						public start(): void;
						public run(): void;
						public setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): void;
						public constructor(interval: number);
						public addObserver(observer: org.apache.commons.io.monitor.FileAlterationObserver): void;
						public constructor(interval: number, ...param1: org.apache.commons.io.monitor.FileAlterationObserver[]);
						public getInterval(): number;
						public stop(): void;
						public removeObserver(observer: org.apache.commons.io.monitor.FileAlterationObserver): void;
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
						public constructor(directoryName: string);
						public destroy(): void;
						public removeListener(listener: org.apache.commons.io.monitor.FileAlterationListener): void;
						public constructor(directoryName: string, fileFilter: java.io.FileFilter);
						public constructor(directoryName: string, fileFilter: java.io.FileFilter, caseSensitivity: org.apache.commons.io.IOCase);
						public constructor(directory: java.io.File, fileFilter: java.io.FileFilter, caseSensitivity: org.apache.commons.io.IOCase);
						public toString(): string;
						public getFileFilter(): java.io.FileFilter;
						public getListeners(): java.lang.Iterable<org.apache.commons.io.monitor.FileAlterationListener>;
						public constructor(rootEntry: org.apache.commons.io.monitor.FileEntry, fileFilter: java.io.FileFilter, caseSensitivity: org.apache.commons.io.IOCase);
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
						public newChildInstance(file: java.io.File): org.apache.commons.io.monitor.FileEntry;
						public isExists(): boolean;
						public getChildren(): org.apache.commons.io.monitor.FileEntry[];
						public getLength(): number;
						public refresh(file: java.io.File): boolean;
						public getParent(): org.apache.commons.io.monitor.FileEntry;
						public getName(): string;
						public setDirectory(directory: boolean): void;
						public getLastModified(): number;
						public setLastModified(lastModified: number): void;
						public getLevel(): number;
						public setChildren(...children: org.apache.commons.io.monitor.FileEntry[]): void;
						public isDirectory(): boolean;
						public constructor(file: java.io.File);
						public getFile(): java.io.File;
						public constructor(parent: org.apache.commons.io.monitor.FileEntry, file: java.io.File);
						public setName(name: string): void;
						public setExists(exists: boolean): void;
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
						public write(b: number[], off: number, len: number): void;
						public toInputStream(isConstructor: org.apache.commons.io.output.AbstractByteArrayOutputStream.InputStreamConstructor<any>): java.io.InputStream;
						public writeToImpl(out: java.io.OutputStream): void;
						public toString(enc: string): string;
						public constructor();
						public toInputStream(): java.io.InputStream;
						public toByteArrayImpl(): number[];
						public needNewBuffer(newcount: number): void;
						public flush(): void;
						public toString(): string;
						public resetImpl(): void;
						public writeImpl(_in_: java.io.InputStream): number;
						public reset(): void;
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
						public constructor(exception: java.io.IOException);
						public write(b: number[]): void;
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
					export class BrokenWriter extends java.io.Writer {
						public static class: java.lang.Class<org.apache.commons.io.output.BrokenWriter>;
						public write(c: number): void;
						public constructor(exception: java.io.IOException);
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public write(str: string): void;
						public flush(): void;
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
						public write(b: number[], off: number, len: number): void;
						public toInputStream(isConstructor: org.apache.commons.io.output.AbstractByteArrayOutputStream.InputStreamConstructor<any>): java.io.InputStream;
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
						public write(b: number[]): void;
						public constructor();
						public constructor(stream: java.io.OutputStream, chunkSize: number);
						public close(): void;
						public constructor(out: java.io.OutputStream);
						public write(b: number): void;
						public flush(): void;
						public constructor(stream: java.io.OutputStream);
						public write(b: number[], off: number, len: number): void;
						public write(data: number[], srcOffset: number, length: number): void;
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
						public constructor();
						public constructor(proxy: java.io.OutputStream);
						public close(): void;
						public constructor(out: java.io.OutputStream);
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
						public constructor();
						public constructor(lock: any);
						public append(c: string): java.io.Writer;
						public constructor(proxy: java.io.Writer);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public flush(): void;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public append(csq: string): java.io.Writer;
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
					export class ClosedOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.ClosedOutputStream>;
						public static CLOSED_OUTPUT_STREAM: org.apache.commons.io.output.ClosedOutputStream;
						public write(b: number[]): void;
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
					export class ClosedWriter extends java.io.Writer {
						public static class: java.lang.Class<org.apache.commons.io.output.ClosedWriter>;
						public static CLOSED_WRITER: org.apache.commons.io.output.ClosedWriter;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public write(str: string): void;
						public flush(): void;
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
						public constructor();
						public close(): void;
						public getStream(): java.io.OutputStream;
						public flush(): void;
						public thresholdReached(): void;
						public writeTo(out: java.io.OutputStream): void;
						public constructor(threshold: number);
						public constructor(threshold: number, prefix: string, suffix: string, directory: java.io.File);
						public constructor(threshold: number, initialBufferSize: number, prefix: string, suffix: string, directory: java.io.File);
						public getFile(): java.io.File;
						public constructor(threshold: number, outputFile: java.io.File);
						public getData(): number[];
						public constructor(threshold: number, initialBufferSize: number, outputFile: java.io.File);
						public isInMemory(): boolean;
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
					export class FileWriterWithEncoding extends java.io.Writer {
						public static class: java.lang.Class<org.apache.commons.io.output.FileWriterWithEncoding>;
						public write(c: number): void;
						public constructor(file: java.io.File, encoding: java.nio.charset.Charset, append: boolean);
						public write(cbuf: string[]): void;
						public constructor(fileName: string, encoding: java.nio.charset.CharsetEncoder);
						public constructor(lock: any);
						public constructor(fileName: string, charsetName: string, append: boolean);
						public close(): void;
						public constructor(fileName: string, charsetEncoder: java.nio.charset.CharsetEncoder, append: boolean);
						public constructor(file: java.io.File, charsetName: string);
						public append(param0: string): java.lang.Appendable;
						public constructor(file: java.io.File, charsetName: string, append: boolean);
						public append(csq: string): java.io.Writer;
						public write(chr: string[]): void;
						public constructor(fileName: string, charset: java.nio.charset.Charset);
						public write(chr: string[], st: number, end: number): void;
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
						public constructor();
						public constructor(file: java.io.File, charset: java.nio.charset.Charset);
						public write(str: string): void;
						public flush(): void;
						public constructor(fileName: string, charsetName: string);
						public write(str: string, st: number, end: number): void;
						public write(idx: number): void;
						public write(param0: string[], param1: number, param2: number): void;
						public constructor(fileName: string, charset: java.nio.charset.Charset, append: boolean);
						public append(c: string): java.io.Writer;
						public constructor(file: java.io.File, charsetEncoder: java.nio.charset.CharsetEncoder);
						public constructor(file: java.io.File, charsetEncoder: java.nio.charset.CharsetEncoder, append: boolean);
						public append(csq: string, start: number, end: number): java.io.Writer;
						public write(str: string, off: number, len: number): void;
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
						public close(): void;
						/** @deprecated */
						public constructor(file: java.io.File, append: boolean, lockDir: string);
						public constructor(file: java.io.File, charsetName: string);
						public append(param0: string): java.lang.Appendable;
						public append(csq: string): java.io.Writer;
						public constructor(fileName: string);
						public constructor(fileName: string, append: boolean);
						public constructor(fileName: string, append: boolean, lockDir: string);
						public constructor(file: java.io.File, charset: java.nio.charset.Charset, append: boolean, lockDir: string);
						public write(chr: string[]): void;
						public constructor(file: java.io.File);
						public write(chr: string[], st: number, end: number): void;
						public constructor(file: java.io.File, append: boolean);
						public append(param0: string, param1: number, param2: number): java.lang.Appendable;
						public constructor();
						public constructor(file: java.io.File, charset: java.nio.charset.Charset);
						public write(str: string): void;
						public flush(): void;
						public write(str: string, st: number, end: number): void;
						public write(idx: number): void;
						public constructor(file: java.io.File, charsetName: string, append: boolean, lockDir: string);
						public write(param0: string[], param1: number, param2: number): void;
						public append(c: string): java.io.Writer;
						public append(csq: string, start: number, end: number): java.io.Writer;
						public write(str: string, off: number, len: number): void;
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
						public static NULL_WRITER: org.apache.commons.io.output.NullWriter;
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public write(str: string): void;
						public flush(): void;
						public write(str: string, st: number, end: number): void;
						public append(csq: string): java.io.Writer;
						public write(idx: number): void;
						public write(param0: string[], param1: number, param2: number): void;
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
						public write(b: number): void;
						public flush(): void;
						public write(bts: number[]): void;
						public afterWrite(n: number): void;
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
						public write(str: string): void;
						public flush(): void;
						public write(cbuf: string[], off: number, len: number): void;
						public afterWrite(n: number): void;
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
						public write(str: string, off: number, len: number): void;
						public getBuilder(): java.lang.StringBuilder;
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
						public write(b: number): void;
						public flush(): void;
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
					export abstract class ThresholdingOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.ThresholdingOutputStream>;
						public constructor();
						public resetByteCount(): void;
						public close(): void;
						public write(param0: number): void;
						public getStream(): java.io.OutputStream;
						public write(b: number): void;
						public flush(): void;
						public thresholdReached(): void;
						public checkThreshold(count: number): void;
						public getThreshold(): number;
						public write(b: number[]): void;
						public isThresholdExceeded(): boolean;
						public constructor(threshold: number);
						public setByteCount(count: number): void;
						public write(b: number[], off: number, len: number): void;
						public getByteCount(): number;
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
						public writeTo(out: java.io.OutputStream): void;
						public toByteArray(): number[];
						public static toBufferedInputStream(input: java.io.InputStream): java.io.InputStream;
						public write(b: number[]): void;
						public constructor(size: number);
						public static toBufferedInputStream(input: java.io.InputStream, size: number): java.io.InputStream;
						public size(): number;
						public write(b: number[], off: number, len: number): void;
						public toInputStream(isConstructor: org.apache.commons.io.output.AbstractByteArrayOutputStream.InputStreamConstructor<any>): java.io.InputStream;
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
					export class WriterOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<org.apache.commons.io.output.WriterOutputStream>;
						public constructor();
						public constructor(writer: java.io.Writer, charset: java.nio.charset.Charset, bufferSize: number, writeImmediately: boolean);
						public close(): void;
						public constructor(writer: java.io.Writer, decoder: java.nio.charset.CharsetDecoder);
						public constructor(writer: java.io.Writer, charsetName: string, bufferSize: number, writeImmediately: boolean);
						public write(param0: number): void;
						public write(b: number): void;
						public flush(): void;
						public constructor(writer: java.io.Writer, decoder: java.nio.charset.CharsetDecoder, bufferSize: number, writeImmediately: boolean);
						public write(b: number[]): void;
						public constructor(writer: java.io.Writer, charset: java.nio.charset.Charset);
						public constructor(writer: java.io.Writer, charsetName: string);
						/** @deprecated */
						public constructor(writer: java.io.Writer);
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
					export class XmlStreamWriter extends java.io.Writer {
						public static class: java.lang.Class<org.apache.commons.io.output.XmlStreamWriter>;
						public constructor(out: java.io.OutputStream, defaultEncoding: string);
						public write(c: number): void;
						public write(cbuf: string[]): void;
						public constructor();
						public constructor(lock: any);
						public close(): void;
						public append(param0: string): java.lang.Appendable;
						public constructor(out: java.io.OutputStream);
						public flush(): void;
						public write(str: string): void;
						public write(cbuf: string[], off: number, len: number): void;
						public append(csq: string): java.io.Writer;
						public constructor(file: java.io.File, defaultEncoding: string);
						public getDefaultEncoding(): string;
						public write(param0: string[], param1: number, param2: number): void;
						public append(c: string): java.io.Writer;
						public constructor(file: java.io.File);
						public append(csq: string, start: number, end: number): java.io.Writer;
						public getEncoding(): string;
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
//org.apache.commons.io.function.IOConsumer:1
//org.apache.commons.io.function.IOFunction:2
//org.apache.commons.io.function.IOSupplier:1
//org.apache.commons.io.output.AbstractByteArrayOutputStream.InputStreamConstructor:1
//org.apache.commons.io.output.AppendableOutputStream:1
//org.apache.commons.io.output.AppendableWriter:1

