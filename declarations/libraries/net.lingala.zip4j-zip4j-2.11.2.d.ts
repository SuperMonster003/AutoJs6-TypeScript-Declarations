declare module net {
	export module lingala {
		export module zip4j {
			export class ZipFile extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<net.lingala.zip4j.ZipFile>;
				public extractFile(fileName: string, destinationPath: string, newFileName: string): void;
				public renameFile(fileNameToRename: string, newFileName: string): void;
				public setThreadFactory(threadFactory: java.util.concurrent.ThreadFactory): void;
				public getSplitZipFiles(): java.util.List<java.io.File>;
				public isRunInThread(): boolean;
				public constructor(zipFile: string);
				public extractFile(fileHeader: net.lingala.zip4j.model.FileHeader, destinationPath: string, unzipParameters: net.lingala.zip4j.model.UnzipParameters): void;
				public setRunInThread(runInThread: boolean): void;
				public createSplitZipFile(filesToAdd: java.util.List<java.io.File>, parameters: net.lingala.zip4j.model.ZipParameters, splitArchive: boolean, splitLength: number): void;
				public renameFile(fileHeader: net.lingala.zip4j.model.FileHeader, newFileName: string): void;
				public renameFiles(fileNamesMap: java.util.Map<string,string>): void;
				public setComment(comment: string): void;
				public extractAll(destinationPath: string): void;
				public addStream(inputStream: java.io.InputStream, parameters: net.lingala.zip4j.model.ZipParameters): void;
				public extractAll(destinationPath: string, unzipParameters: net.lingala.zip4j.model.UnzipParameters): void;
				public extractFile(fileHeader: net.lingala.zip4j.model.FileHeader, destinationPath: string): void;
				public getCharset(): java.nio.charset.Charset;
				public getComment(): string;
				public isSplitArchive(): boolean;
				public close(): void;
				public getExecutorService(): java.util.concurrent.ExecutorService;
				public getProgressMonitor(): net.lingala.zip4j.progress.ProgressMonitor;
				public toString(): string;
				public addFile(fileToAdd: java.io.File): void;
				public setBufferSize(bufferSize: number): void;
				public setPassword(password: string[]): void;
				public constructor(zipFile: java.io.File);
				public getBufferSize(): number;
				public mergeSplitFiles(outputZipFile: java.io.File): void;
				public constructor(zipFile: string, password: string[]);
				public setCharset(charset: java.nio.charset.Charset): void;
				public getFileHeaders(): java.util.List<net.lingala.zip4j.model.FileHeader>;
				public isUseUtf8CharsetForPasswords(): boolean;
				public extractFile(fileName: string, destinationPath: string, unzipParameters: net.lingala.zip4j.model.UnzipParameters): void;
				public setUseUtf8CharsetForPasswords(useUtf8CharsetForPasswords: boolean): void;
				public constructor(zipFile: java.io.File, password: string[]);
				public removeFile(fileHeader: net.lingala.zip4j.model.FileHeader): void;
				public removeFiles(fileNames: java.util.List<string>): void;
				public addFolder(folderToAdd: java.io.File, zipParameters: net.lingala.zip4j.model.ZipParameters): void;
				public addFile(fileToAdd: string, zipParameters: net.lingala.zip4j.model.ZipParameters): void;
				public getInputStream(fileHeader: net.lingala.zip4j.model.FileHeader): net.lingala.zip4j.io.inputstream.ZipInputStream;
				public addFiles(filesToAdd: java.util.List<java.io.File>, parameters: net.lingala.zip4j.model.ZipParameters): void;
				public extractFile(fileName: string, destinationPath: string, newFileName: string, unzipParameters: net.lingala.zip4j.model.UnzipParameters): void;
				public extractFile(fileHeader: net.lingala.zip4j.model.FileHeader, destinationPath: string, newFileName: string, unzipParameters: net.lingala.zip4j.model.UnzipParameters): void;
				public isValidZipFile(): boolean;
				public removeFile(fileName: string): void;
				public extractFile(fileName: string, destinationPath: string): void;
				public addFolder(folderToAdd: java.io.File): void;
				public addFile(fileToAdd: string): void;
				public addFile(fileToAdd: java.io.File, parameters: net.lingala.zip4j.model.ZipParameters): void;
				public extractFile(fileHeader: net.lingala.zip4j.model.FileHeader, destinationPath: string, newFileName: string): void;
				public createSplitZipFileFromFolder(folderToAdd: java.io.File, parameters: net.lingala.zip4j.model.ZipParameters, splitArchive: boolean, splitLength: number): void;
				public getFile(): java.io.File;
				public getFileHeader(fileName: string): net.lingala.zip4j.model.FileHeader;
				public addFiles(filesToAdd: java.util.List<java.io.File>): void;
				public isEncrypted(): boolean;
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class AESDecrypter extends java.lang.Object implements net.lingala.zip4j.crypto.Decrypter {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.AESDecrypter>;
					public constructor(aesExtraDataRecord: net.lingala.zip4j.model.AESExtraDataRecord, password: string[], salt: number[], passwordVerifier: number[], useUtf8ForPassword: boolean);
					public decryptData(buff: number[], start: number, len: number): number;
					public getCalculatedAuthenticationBytes(): number[];
					public decryptData(param0: number[], param1: number, param2: number): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class AESEncrypter extends java.lang.Object implements net.lingala.zip4j.crypto.Encrypter {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.AESEncrypter>;
					public getFinalMac(): number[];
					public getDerivedPasswordVerifier(): number[];
					public encryptData(buff: number[]): number;
					public getSaltBytes(): number[];
					public constructor(password: string[], aesKeyStrength: net.lingala.zip4j.model.enums.AesKeyStrength, useUtf8ForPassword: boolean);
					public encryptData(param0: number[]): number;
					public encryptData(buff: number[], start: number, len: number): number;
					public encryptData(param0: number[], param1: number, param2: number): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class AesCipherUtil extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.AesCipherUtil>;
					public static derivePasswordVerifier(derivedKey: number[], aesKeyStrength: net.lingala.zip4j.model.enums.AesKeyStrength): number[];
					public static getMacBasedPRF(derivedKey: number[], aesKeyStrength: net.lingala.zip4j.model.enums.AesKeyStrength): net.lingala.zip4j.crypto.PBKDF2.MacBasedPRF;
					public constructor();
					public static getAESEngine(derivedKey: number[], aesKeyStrength: net.lingala.zip4j.model.enums.AesKeyStrength): net.lingala.zip4j.crypto.engine.AESEngine;
					public static prepareBuffAESIVBytes(buff: number[], nonce: number): void;
					public static derivePasswordBasedKey(salt: number[], password: string[], aesKeyStrength: net.lingala.zip4j.model.enums.AesKeyStrength, useUtf8ForPassword: boolean): number[];
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class Decrypter extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.Decrypter>;
					/**
					 * Constructs a new instance of the net.lingala.zip4j.crypto.Decrypter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						decryptData(param0: number[], param1: number, param2: number): number;
					});
					public constructor();
					public decryptData(param0: number[], param1: number, param2: number): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class Encrypter extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.Encrypter>;
					/**
					 * Constructs a new instance of the net.lingala.zip4j.crypto.Encrypter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						encryptData(param0: number[]): number;
						encryptData(param0: number[], param1: number, param2: number): number;
					});
					public constructor();
					public encryptData(param0: number[]): number;
					public encryptData(param0: number[], param1: number, param2: number): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module PBKDF2 {
					export class BinTools extends java.lang.Object {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.PBKDF2.BinTools>;
						public static hex: string;
						public static bin2hex(b: number[]): string;
						public static hex2bin(c: string): number;
						public static hex2bin(s: string): number[];
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module PBKDF2 {
					export class MacBasedPRF extends java.lang.Object implements net.lingala.zip4j.crypto.PBKDF2.PRF {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.PBKDF2.MacBasedPRF>;
						public doFinal(M: number[]): number[];
						public update(U: number[], start: number, len: number): void;
						public constructor(macAlgorithm: string);
						public init(P: number[]): void;
						public doFinal(): number[];
						public update(U: number[]): void;
						public doFinal(param0: number[]): number[];
						public getHLen(): number;
						public init(param0: number[]): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module PBKDF2 {
					export class PBKDF2Engine extends java.lang.Object {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.PBKDF2.PBKDF2Engine>;
						public getParameters(): net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters;
						public constructor(parameters: net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters);
						public setParameters(parameters: net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters): void;
						public deriveKey(inputPassword: string[], dkLen: number, useUtf8ForPassword: boolean): number[];
						public constructor(parameters: net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters, prf: net.lingala.zip4j.crypto.PBKDF2.PRF);
						public INT(dest: number[], offset: number, i: number): void;
						public setPseudoRandomFunction(prf: net.lingala.zip4j.crypto.PBKDF2.PRF): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module PBKDF2 {
					export class PBKDF2HexFormatter extends java.lang.Object {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.PBKDF2.PBKDF2HexFormatter>;
						public toString(p: net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters): string;
						public fromString(p: net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters, s: string): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module PBKDF2 {
					export class PBKDF2Parameters extends java.lang.Object {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.PBKDF2.PBKDF2Parameters>;
						public salt: number[];
						public iterationCount: number;
						public hashAlgorithm: string;
						public hashCharset: string;
						public derivedKey: number[];
						public constructor();
						public getIterationCount(): number;
						public getHashCharset(): string;
						public setHashCharset(hashCharset: string): void;
						public getDerivedKey(): number[];
						public getHashAlgorithm(): string;
						public constructor(hashAlgorithm: string, hashCharset: string, salt: number[], iterationCount: number, derivedKey: number[]);
						public setSalt(salt: number[]): void;
						public setIterationCount(iterationCount: number): void;
						public constructor(hashAlgorithm: string, hashCharset: string, salt: number[], iterationCount: number);
						public setDerivedKey(derivedKey: number[]): void;
						public setHashAlgorithm(hashAlgorithm: string): void;
						public getSalt(): number[];
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module PBKDF2 {
					export class PRF extends java.lang.Object {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.PBKDF2.PRF>;
						/**
						 * Constructs a new instance of the net.lingala.zip4j.crypto.PBKDF2.PRF interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							init(param0: number[]): void;
							doFinal(param0: number[]): number[];
							getHLen(): number;
						});
						public constructor();
						public doFinal(param0: number[]): number[];
						public init(param0: number[]): void;
						public getHLen(): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class StandardDecrypter extends java.lang.Object implements net.lingala.zip4j.crypto.Decrypter {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.StandardDecrypter>;
					public decryptData(buff: number[], start: number, len: number): number;
					public decryptData(param0: number[], param1: number, param2: number): number;
					public constructor(password: string[], crc: number, param2: number, lastModifiedFileTime: number[], param4: boolean);
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export class StandardEncrypter extends java.lang.Object implements net.lingala.zip4j.crypto.Encrypter {
					public static class: java.lang.Class<net.lingala.zip4j.crypto.StandardEncrypter>;
					public encryptData(buff: number[]): number;
					public generateRandomBytes(): number[];
					public constructor(password: string[], key: number, param2: boolean);
					public getHeaderBytes(): number[];
					public encryptByte(val: number): number;
					public encryptData(param0: number[]): number;
					public encryptData(buff: number[], start: number, len: number): number;
					public encryptData(param0: number[], param1: number, param2: number): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module engine {
					export class AESEngine extends java.lang.Object {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.engine.AESEngine>;
						public constructor(key: number[]);
						public processBlock(in: number[], inOff: number, out: number[], outOff: number): number;
						public processBlock(in: number[], out: number[]): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module crypto {
				export module engine {
					export class ZipCryptoEngine extends java.lang.Object {
						public static class: java.lang.Class<net.lingala.zip4j.crypto.engine.ZipCryptoEngine>;
						public constructor();
						public initKeys(password: string[], useUtf8ForPassword: boolean): void;
						public updateKeys(charAt: number): void;
						public decryptByte(): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module exception {
				export class ZipException extends java.io.IOException {
					public static class: java.lang.Class<net.lingala.zip4j.exception.ZipException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor(message: string, rootException: java.lang.Exception);
					public constructor(message: string, type: net.lingala.zip4j.exception.ZipException.Type);
					public constructor(message: string, throwable: java.lang.Throwable, type: net.lingala.zip4j.exception.ZipException.Type);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public getType(): net.lingala.zip4j.exception.ZipException.Type;
					public constructor(message: string, cause: java.lang.Throwable);
					public constructor(rootException: java.lang.Exception);
				}
				export module ZipException {
					export class Type {
						public static class: java.lang.Class<net.lingala.zip4j.exception.ZipException.Type>;
						public static WRONG_PASSWORD: net.lingala.zip4j.exception.ZipException.Type;
						public static TASK_CANCELLED_EXCEPTION: net.lingala.zip4j.exception.ZipException.Type;
						public static CHECKSUM_MISMATCH: net.lingala.zip4j.exception.ZipException.Type;
						public static UNKNOWN_COMPRESSION_METHOD: net.lingala.zip4j.exception.ZipException.Type;
						public static FILE_NOT_FOUND: net.lingala.zip4j.exception.ZipException.Type;
						public static UNSUPPORTED_ENCRYPTION: net.lingala.zip4j.exception.ZipException.Type;
						public static UNKNOWN: net.lingala.zip4j.exception.ZipException.Type;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): net.lingala.zip4j.exception.ZipException.Type[];
						public static valueOf(name: string): net.lingala.zip4j.exception.ZipException.Type;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class FileHeaderFactory extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.headers.FileHeaderFactory>;
					public generateLocalFileHeader(fileHeader: net.lingala.zip4j.model.FileHeader): net.lingala.zip4j.model.LocalFileHeader;
					public constructor();
					public generateFileHeader(zipParameters: net.lingala.zip4j.model.ZipParameters, isSplitZip: boolean, currentDiskNumberStart: number, charset: java.nio.charset.Charset, rawIO: net.lingala.zip4j.util.RawIO): net.lingala.zip4j.model.FileHeader;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class HeaderReader extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.headers.HeaderReader>;
					public constructor();
					public readAllHeaders(zip4jRaf: java.io.RandomAccessFile, zip4jConfig: net.lingala.zip4j.model.Zip4jConfig): net.lingala.zip4j.model.ZipModel;
					public readDataDescriptor(inputStream: java.io.InputStream, isZip64Format: boolean): net.lingala.zip4j.model.DataDescriptor;
					public isDirectory(externalFileAttributes: number[], fileName: string): boolean;
					public readLocalFileHeader(inputStream: java.io.InputStream, charset: java.nio.charset.Charset): net.lingala.zip4j.model.LocalFileHeader;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class HeaderSignature {
					public static class: java.lang.Class<net.lingala.zip4j.headers.HeaderSignature>;
					public static LOCAL_FILE_HEADER: net.lingala.zip4j.headers.HeaderSignature;
					public static EXTRA_DATA_RECORD: net.lingala.zip4j.headers.HeaderSignature;
					public static CENTRAL_DIRECTORY: net.lingala.zip4j.headers.HeaderSignature;
					public static END_OF_CENTRAL_DIRECTORY: net.lingala.zip4j.headers.HeaderSignature;
					public static TEMPORARY_SPANNING_MARKER: net.lingala.zip4j.headers.HeaderSignature;
					public static DIGITAL_SIGNATURE: net.lingala.zip4j.headers.HeaderSignature;
					public static ARCEXTDATREC: net.lingala.zip4j.headers.HeaderSignature;
					public static SPLIT_ZIP: net.lingala.zip4j.headers.HeaderSignature;
					public static ZIP64_END_CENTRAL_DIRECTORY_LOCATOR: net.lingala.zip4j.headers.HeaderSignature;
					public static ZIP64_END_CENTRAL_DIRECTORY_RECORD: net.lingala.zip4j.headers.HeaderSignature;
					public static ZIP64_EXTRA_FIELD_SIGNATURE: net.lingala.zip4j.headers.HeaderSignature;
					public static AES_EXTRA_DATA_RECORD: net.lingala.zip4j.headers.HeaderSignature;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public getValue(): number;
					public static values(): net.lingala.zip4j.headers.HeaderSignature[];
					public static valueOf(name: string): net.lingala.zip4j.headers.HeaderSignature;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class HeaderUtil extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.headers.HeaderUtil>;
					public static decodeStringWithCharset(data: number[], isUtf8Encoded: boolean, charset: java.nio.charset.Charset): string;
					public static getBytesFromString(string: string, charset: java.nio.charset.Charset): number[];
					public static getTotalUncompressedSizeOfAllFileHeaders(fileHeaders: java.util.List<net.lingala.zip4j.model.FileHeader>): number;
					public constructor();
					public static getFileHeadersUnderDirectory(allFileHeaders: java.util.List<net.lingala.zip4j.model.FileHeader>, fileName: string): java.util.List<net.lingala.zip4j.model.FileHeader>;
					public static getOffsetStartOfCentralDirectory(zipModel: net.lingala.zip4j.model.ZipModel): number;
					public static getFileHeader(zipModel: net.lingala.zip4j.model.ZipModel, fileName: string): net.lingala.zip4j.model.FileHeader;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class HeaderWriter extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.headers.HeaderWriter>;
					public finalizeZipFileWithoutValidations(zipModel: net.lingala.zip4j.model.ZipModel, outputStream: java.io.OutputStream, charset: java.nio.charset.Charset): void;
					public constructor();
					public writeExtendedLocalHeader(localFileHeader: net.lingala.zip4j.model.LocalFileHeader, outputStream: java.io.OutputStream): void;
					public writeLocalFileHeader(zipModel: net.lingala.zip4j.model.ZipModel, localFileHeader: net.lingala.zip4j.model.LocalFileHeader, outputStream: java.io.OutputStream, charset: java.nio.charset.Charset): void;
					public finalizeZipFile(zipModel: net.lingala.zip4j.model.ZipModel, outputStream: java.io.OutputStream, charset: java.nio.charset.Charset): void;
					public updateLocalFileHeader(fileHeader: net.lingala.zip4j.model.FileHeader, zipModel: net.lingala.zip4j.model.ZipModel, outputStream: net.lingala.zip4j.io.outputstream.SplitOutputStream): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class VersionMadeBy {
					public static class: java.lang.Class<net.lingala.zip4j.headers.VersionMadeBy>;
					public static SPECIFICATION_VERSION: net.lingala.zip4j.headers.VersionMadeBy;
					public static WINDOWS: net.lingala.zip4j.headers.VersionMadeBy;
					public static UNIX: net.lingala.zip4j.headers.VersionMadeBy;
					public static valueOf(name: string): net.lingala.zip4j.headers.VersionMadeBy;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): net.lingala.zip4j.headers.VersionMadeBy[];
					public getCode(): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module headers {
				export class VersionNeededToExtract {
					public static class: java.lang.Class<net.lingala.zip4j.headers.VersionNeededToExtract>;
					public static DEFAULT: net.lingala.zip4j.headers.VersionNeededToExtract;
					public static DEFLATE_COMPRESSED: net.lingala.zip4j.headers.VersionNeededToExtract;
					public static ZIP_64_FORMAT: net.lingala.zip4j.headers.VersionNeededToExtract;
					public static AES_ENCRYPTED: net.lingala.zip4j.headers.VersionNeededToExtract;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): net.lingala.zip4j.headers.VersionNeededToExtract[];
					public static valueOf(name: string): net.lingala.zip4j.headers.VersionNeededToExtract;
					public getCode(): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class AesCipherInputStream extends net.lingala.zip4j.io.inputstream.CipherInputStream<net.lingala.zip4j.crypto.AESDecrypter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.AesCipherInputStream>;
						public initializeDecrypter(localFileHeader: net.lingala.zip4j.model.LocalFileHeader, password: string[], useUtf8ForPassword: boolean): net.lingala.zip4j.crypto.AESDecrypter;
						public read(): number;
						public constructor();
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: string[], param2: boolean): any;
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public read(b: number[]): number;
						public constructor(zipEntryInputStream: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, localFileHeader: net.lingala.zip4j.model.LocalFileHeader, password: string[], bufferSize: number, useUtf8ForPassword: boolean);
						public endOfEntryReached(inputStream: java.io.InputStream): void;
						public readStoredMac(inputStream: java.io.InputStream): number[];
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export abstract class CipherInputStream<T>  extends java.io.InputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.CipherInputStream<any>>;
						public read(): number;
						public constructor();
						public close(): void;
						public getNumberOfBytesReadForThisEntry(): number;
						public getDecrypter(): any;
						public read(b: number[]): number;
						public constructor(zipEntryInputStream: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, localFileHeader: net.lingala.zip4j.model.LocalFileHeader, password: string[], bufferSize: number, useUtf8ForPassword: boolean);
						public endOfEntryReached(inputStream: java.io.InputStream): void;
						public readRaw(b: number[]): number;
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: string[], param2: boolean): any;
						public read(b: number[], off: number, len: number): number;
						public getLocalFileHeader(): net.lingala.zip4j.model.LocalFileHeader;
						public getLastReadRawDataCache(): number[];
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export abstract class DecompressedInputStream extends java.io.InputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.DecompressedInputStream>;
						public oneByteBuffer: number[];
						public read(): number;
						public constructor();
						public pushBackInputStreamIfNecessary(pushbackInputStream: java.io.PushbackInputStream): void;
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public constructor(cipherInputStream: net.lingala.zip4j.io.inputstream.CipherInputStream<any>);
						public read(b: number[]): number;
						public endOfEntryReached(inputStream: java.io.InputStream): void;
						public getLastReadRawDataCache(): number[];
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class InflaterInputStream extends net.lingala.zip4j.io.inputstream.DecompressedInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.InflaterInputStream>;
						public constructor(cipherInputStream: net.lingala.zip4j.io.inputstream.CipherInputStream<any>, bufferSize: number);
						public read(): number;
						public constructor();
						public pushBackInputStreamIfNecessary(pushbackInputStream: java.io.PushbackInputStream): void;
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public constructor(cipherInputStream: net.lingala.zip4j.io.inputstream.CipherInputStream<any>);
						public read(b: number[]): number;
						public endOfEntryReached(inputStream: java.io.InputStream): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class NoCipherInputStream extends net.lingala.zip4j.io.inputstream.CipherInputStream<net.lingala.zip4j.io.inputstream.NoCipherInputStream.NoDecrypter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.NoCipherInputStream>;
						public constructor();
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: string[], param2: boolean): any;
						public close(): void;
						public initializeDecrypter(localFileHeader: net.lingala.zip4j.model.LocalFileHeader, password: string[], useUtf8ForPassword: boolean): net.lingala.zip4j.io.inputstream.NoCipherInputStream.NoDecrypter;
						public constructor(zipEntryInputStream: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, localFileHeader: net.lingala.zip4j.model.LocalFileHeader, password: string[], bufferSize: number);
						public constructor(zipEntryInputStream: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, localFileHeader: net.lingala.zip4j.model.LocalFileHeader, password: string[], bufferSize: number, useUtf8ForPassword: boolean);
					}
					export module NoCipherInputStream {
						export class NoDecrypter extends java.lang.Object implements net.lingala.zip4j.crypto.Decrypter {
							public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.NoCipherInputStream.NoDecrypter>;
							public decryptData(param0: number[], param1: number, param2: number): number;
							public decryptData(buff: number[], start: number, len: number): number;
						}
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class NumberedSplitFileInputStream extends net.lingala.zip4j.io.inputstream.SplitFileInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.NumberedSplitFileInputStream>;
						public read(): number;
						public constructor();
						public prepareExtractionForFileHeader(param0: net.lingala.zip4j.model.FileHeader): void;
						public close(): void;
						public constructor(zipFile: java.io.File);
						public read(b: number[], off: number, len: number): number;
						public prepareExtractionForFileHeader(fileHeader: net.lingala.zip4j.model.FileHeader): void;
						public read(b: number[]): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class NumberedSplitRandomAccessFile extends java.io.RandomAccessFile {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.NumberedSplitRandomAccessFile>;
						public close(): void;
						public readUTF(): string;
						public openLastSplitFileForReading(): void;
						public writeChars(s: string): void;
						public readFully(param0: number[]): void;
						public readByte(): number;
						public write(b: number[]): void;
						public read(b: number[], off: number, len: number): number;
						public writeInt(param0: number): void;
						public writeUTF(str: string): void;
						public readLong(): number;
						public writeShort(param0: number): void;
						public writeChar(param0: number): void;
						public readFully(b: number[], off: number, len: number): void;
						public skipBytes(param0: number): number;
						public length(): number;
						public seekInCurrentPart(pos: number): void;
						public readFully(param0: number[], param1: number, param2: number): void;
						public skipBytes(n: number): number;
						public readDouble(): number;
						public write(b: number): void;
						public seek(pos: number): void;
						public read(b: number[]): number;
						public writeBoolean(v: boolean): void;
						public writeByte(v: number): void;
						public getFilePointer(): number;
						public writeBytes(param0: string): void;
						public constructor(name: string, mode: string);
						public write(param0: number[], param1: number, param2: number): void;
						public writeFloat(v: number): void;
						public writeBytes(s: string): void;
						public readInt(): number;
						public writeBoolean(param0: boolean): void;
						public readUnsignedByte(): number;
						public write(param0: number): void;
						public readChar(): string;
						public writeLong(v: number): void;
						public writeFloat(param0: number): void;
						public writeLong(param0: number): void;
						public readUnsignedShort(): number;
						public writeUTF(param0: string): void;
						public readFully(b: number[]): void;
						public write(b: number[], off: number, len: number): void;
						public writeShort(v: number): void;
						public writeChars(param0: string): void;
						public readLine(): string;
						public constructor(file: java.io.File, mode: string, allSortedSplitFiles: java.io.File[]);
						public read(): number;
						public constructor(file: java.io.File, mode: string);
						public writeDouble(param0: number): void;
						public writeInt(v: number): void;
						public readShort(): number;
						public writeDouble(v: number): void;
						public readBoolean(): boolean;
						public writeByte(param0: number): void;
						public write(param0: number[]): void;
						public writeChar(v: number): void;
						public seek(offset: number): void;
						public readFloat(): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export abstract class SplitFileInputStream extends java.io.InputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.SplitFileInputStream>;
						public constructor();
						public prepareExtractionForFileHeader(param0: net.lingala.zip4j.model.FileHeader): void;
						public close(): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class StoreInputStream extends net.lingala.zip4j.io.inputstream.DecompressedInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.StoreInputStream>;
						public constructor();
						public close(): void;
						public constructor(cipherInputStream: net.lingala.zip4j.io.inputstream.CipherInputStream<any>);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class ZipEntryInputStream extends java.io.InputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.ZipEntryInputStream>;
						public read(): number;
						public constructor();
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public read(b: number[]): number;
						public constructor(inputStream: java.io.InputStream, compressedSize: number);
						public getNumberOfBytesRead(): number;
						public readRawFully(b: number[]): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class ZipInputStream extends java.io.InputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.ZipInputStream>;
						public constructor(inputStream: java.io.InputStream, password: string[], zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(inputStream: java.io.InputStream, passwordCallback: net.lingala.zip4j.util.PasswordCallback);
						public constructor(inputStream: java.io.InputStream, password: string[], charset: java.nio.charset.Charset);
						public read(): number;
						public setPassword(password: string[]): void;
						public constructor();
						public getNextEntry(): net.lingala.zip4j.model.LocalFileHeader;
						public close(): void;
						public read(b: number[]): number;
						public available(): number;
						public constructor(inputStream: java.io.InputStream, password: string[]);
						public constructor(inputStream: java.io.InputStream, passwordCallback: net.lingala.zip4j.util.PasswordCallback, charset: java.nio.charset.Charset);
						public getNextEntry(fileHeader: net.lingala.zip4j.model.FileHeader, readUntilEndOfCurrentEntryIfOpen: boolean): net.lingala.zip4j.model.LocalFileHeader;
						public read(b: number[], off: number, len: number): number;
						public constructor(inputStream: java.io.InputStream, charset: java.nio.charset.Charset);
						public constructor(inputStream: java.io.InputStream, passwordCallback: net.lingala.zip4j.util.PasswordCallback, zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(inputStream: java.io.InputStream);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class ZipStandardCipherInputStream extends net.lingala.zip4j.io.inputstream.CipherInputStream<net.lingala.zip4j.crypto.StandardDecrypter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.ZipStandardCipherInputStream>;
						public constructor();
						public initializeDecrypter(param0: net.lingala.zip4j.model.LocalFileHeader, param1: string[], param2: boolean): any;
						public close(): void;
						public initializeDecrypter(localFileHeader: net.lingala.zip4j.model.LocalFileHeader, password: string[], useUtf8ForPassword: boolean): net.lingala.zip4j.crypto.StandardDecrypter;
						public constructor(zipEntryInputStream: net.lingala.zip4j.io.inputstream.ZipEntryInputStream, localFileHeader: net.lingala.zip4j.model.LocalFileHeader, password: string[], bufferSize: number, useUtf8ForPassword: boolean);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module inputstream {
					export class ZipStandardSplitFileInputStream extends net.lingala.zip4j.io.inputstream.SplitFileInputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.inputstream.ZipStandardSplitFileInputStream>;
						public randomAccessFile: java.io.RandomAccessFile;
						public zipFile: java.io.File;
						public read(): number;
						public constructor();
						public prepareExtractionForFileHeader(param0: net.lingala.zip4j.model.FileHeader): void;
						public close(): void;
						public read(b: number[], off: number, len: number): number;
						public getNextSplitFile(zipFileIndex: number): java.io.File;
						public prepareExtractionForFileHeader(fileHeader: net.lingala.zip4j.model.FileHeader): void;
						public constructor(zipFile: java.io.File, isSplitZipArchive: boolean, lastSplitZipFileNumber: number);
						public read(b: number[]): number;
						public openRandomAccessFileForIndex(zipFileIndex: number): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class AesCipherOutputStream extends net.lingala.zip4j.io.outputstream.CipherOutputStream<net.lingala.zip4j.crypto.AESEncrypter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.AesCipherOutputStream>;
						public constructor(outputStream: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, zipParameters: net.lingala.zip4j.model.ZipParameters, password: string[], useUtf8ForPassword: boolean);
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: string[], param3: boolean): any;
						public write(b: number[]): void;
						public constructor();
						public constructor(zipEntryOutputStream: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, zipParameters: net.lingala.zip4j.model.ZipParameters, password: string[], useUtf8ForPassword: boolean);
						public close(): void;
						public initializeEncrypter(outputStream: java.io.OutputStream, zipParameters: net.lingala.zip4j.model.ZipParameters, password: string[], useUtf8ForPassword: boolean): net.lingala.zip4j.crypto.AESEncrypter;
						public write(b: number): void;
						public flush(): void;
						public closeEntry(): void;
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export abstract class CipherOutputStream<T>  extends java.io.OutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.CipherOutputStream<any>>;
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: string[], param3: boolean): any;
						public constructor();
						public writeHeaders(b: number[]): void;
						public close(): void;
						public write(param0: number): void;
						public write(b: number): void;
						public flush(): void;
						public closeEntry(): void;
						public getNumberOfBytesWrittenForThisEntry(): number;
						public getEncrypter(): any;
						public write(b: number[]): void;
						public constructor(zipEntryOutputStream: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, zipParameters: net.lingala.zip4j.model.ZipParameters, password: string[], useUtf8ForPassword: boolean);
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export abstract class CompressedOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.CompressedOutputStream>;
						public write(b: number[]): void;
						public constructor();
						public getCompressedSize(): number;
						public constructor(cipherOutputStream: net.lingala.zip4j.io.outputstream.CipherOutputStream<any>);
						public close(): void;
						public write(param0: number): void;
						public write(b: number): void;
						public flush(): void;
						public closeEntry(): void;
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class CountingOutputStream extends java.io.OutputStream implements net.lingala.zip4j.io.outputstream.OutputStreamWithSplitZipSupport {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.CountingOutputStream>;
						public constructor();
						public close(): void;
						public constructor(outputStream: java.io.OutputStream);
						public write(param0: number): void;
						public write(b: number): void;
						public flush(): void;
						public getCurrentSplitFileCounter(): number;
						public checkBuffSizeAndStartNextSplitFile(bufferSize: number): boolean;
						public getSplitLength(): number;
						public getFilePointer(): number;
						public write(b: number[]): void;
						public getNumberOfBytesWritten(): number;
						public isSplitZipFile(): boolean;
						public getOffsetForNextEntry(): number;
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class DeflaterOutputStream extends net.lingala.zip4j.io.outputstream.CompressedOutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.DeflaterOutputStream>;
						public deflater: java.util.zip.Deflater;
						public write(b: number[]): void;
						public constructor();
						public constructor(cipherOutputStream: net.lingala.zip4j.io.outputstream.CipherOutputStream<any>);
						public close(): void;
						public write(b: number): void;
						public flush(): void;
						public closeEntry(): void;
						public write(buf: number[], off: number, len: number): void;
						public write(b: number[], off: number, len: number): void;
						public write(bval: number): void;
						public constructor(cipherOutputStream: net.lingala.zip4j.io.outputstream.CipherOutputStream<any>, compressionLevel: net.lingala.zip4j.model.enums.CompressionLevel, bufferSize: number);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class NoCipherOutputStream extends net.lingala.zip4j.io.outputstream.CipherOutputStream<net.lingala.zip4j.io.outputstream.NoCipherOutputStream.NoEncrypter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.NoCipherOutputStream>;
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: string[], param3: boolean): any;
						public initializeEncrypter(outputStream: java.io.OutputStream, zipParameters: net.lingala.zip4j.model.ZipParameters, password: string[], useUtf8ForPassword: boolean): net.lingala.zip4j.io.outputstream.NoCipherOutputStream.NoEncrypter;
						public constructor();
						public constructor(zipEntryOutputStream: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, zipParameters: net.lingala.zip4j.model.ZipParameters, password: string[]);
						public constructor(zipEntryOutputStream: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, zipParameters: net.lingala.zip4j.model.ZipParameters, password: string[], useUtf8ForPassword: boolean);
						public close(): void;
						public flush(): void;
					}
					export module NoCipherOutputStream {
						export class NoEncrypter extends java.lang.Object implements net.lingala.zip4j.crypto.Encrypter {
							public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.NoCipherOutputStream.NoEncrypter>;
							public encryptData(buff: number[]): number;
							public encryptData(param0: number[]): number;
							public encryptData(param0: number[], param1: number, param2: number): number;
							public encryptData(buff: number[], start: number, len: number): number;
						}
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class OutputStreamWithSplitZipSupport extends java.lang.Object {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.OutputStreamWithSplitZipSupport>;
						/**
						 * Constructs a new instance of the net.lingala.zip4j.io.outputstream.OutputStreamWithSplitZipSupport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFilePointer(): number;
							getCurrentSplitFileCounter(): number;
						});
						public constructor();
						public getCurrentSplitFileCounter(): number;
						public getFilePointer(): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class SplitOutputStream extends java.io.OutputStream implements net.lingala.zip4j.io.outputstream.OutputStreamWithSplitZipSupport {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.SplitOutputStream>;
						public constructor();
						public close(): void;
						public write(param0: number): void;
						public skipBytes(n: number): number;
						public write(b: number): void;
						public seek(pos: number): void;
						public flush(): void;
						public getCurrentSplitFileCounter(): number;
						public getSplitLength(): number;
						public getFilePointer(): number;
						public write(b: number[]): void;
						public isSplitZipFile(): boolean;
						public constructor(file: java.io.File);
						public write(b: number[], off: number, len: number): void;
						public constructor(file: java.io.File, splitLength: number);
						public checkBufferSizeAndStartNextSplitFile(bufferSize: number): boolean;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class StoreOutputStream extends net.lingala.zip4j.io.outputstream.CompressedOutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.StoreOutputStream>;
						public constructor();
						public constructor(cipherOutputStream: net.lingala.zip4j.io.outputstream.CipherOutputStream<any>);
						public close(): void;
						public flush(): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class ZipEntryOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.ZipEntryOutputStream>;
						public write(b: number[]): void;
						public constructor();
						public close(): void;
						public constructor(outputStream: java.io.OutputStream);
						public write(param0: number): void;
						public write(b: number): void;
						public flush(): void;
						public closeEntry(): void;
						public write(b: number[], off: number, len: number): void;
						public getNumberOfBytesWrittenForThisEntry(): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class ZipOutputStream extends java.io.OutputStream {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.ZipOutputStream>;
						public constructor();
						public constructor(outputStream: java.io.OutputStream, password: string[], charset: java.nio.charset.Charset);
						public close(): void;
						public constructor(outputStream: java.io.OutputStream);
						public write(param0: number): void;
						public write(b: number): void;
						public flush(): void;
						public constructor(outputStream: java.io.OutputStream, charset: java.nio.charset.Charset);
						public constructor(outputStream: java.io.OutputStream, password: string[], zip4jConfig: net.lingala.zip4j.model.Zip4jConfig, zipModel: net.lingala.zip4j.model.ZipModel);
						public constructor(outputStream: java.io.OutputStream, password: string[]);
						public write(b: number[]): void;
						public setComment(comment: string): void;
						public putNextEntry(zipParameters: net.lingala.zip4j.model.ZipParameters): void;
						public closeEntry(): net.lingala.zip4j.model.FileHeader;
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module io {
				export module outputstream {
					export class ZipStandardCipherOutputStream extends net.lingala.zip4j.io.outputstream.CipherOutputStream<net.lingala.zip4j.crypto.StandardEncrypter> {
						public static class: java.lang.Class<net.lingala.zip4j.io.outputstream.ZipStandardCipherOutputStream>;
						public constructor(outputStream: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, zipParameters: net.lingala.zip4j.model.ZipParameters, password: string[], useUtf8ForPassword: boolean);
						public initializeEncrypter(param0: java.io.OutputStream, param1: net.lingala.zip4j.model.ZipParameters, param2: string[], param3: boolean): any;
						public write(b: number[]): void;
						public constructor();
						public constructor(zipEntryOutputStream: net.lingala.zip4j.io.outputstream.ZipEntryOutputStream, zipParameters: net.lingala.zip4j.model.ZipParameters, password: string[], useUtf8ForPassword: boolean);
						public close(): void;
						public write(b: number): void;
						public flush(): void;
						public initializeEncrypter(outputStream: java.io.OutputStream, zipParameters: net.lingala.zip4j.model.ZipParameters, password: string[], useUtf8ForPassword: boolean): net.lingala.zip4j.crypto.StandardEncrypter;
						public write(b: number[], off: number, len: number): void;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class AESExtraDataRecord extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.AESExtraDataRecord>;
					public getAesVersion(): net.lingala.zip4j.model.enums.AesVersion;
					public getAesKeyStrength(): net.lingala.zip4j.model.enums.AesKeyStrength;
					public constructor();
					public setCompressionMethod(compressionMethod: net.lingala.zip4j.model.enums.CompressionMethod): void;
					public setDataSize(dataSize: number): void;
					public getCompressionMethod(): net.lingala.zip4j.model.enums.CompressionMethod;
					public setAesVersion(aesVersion: net.lingala.zip4j.model.enums.AesVersion): void;
					public setVendorID(vendorID: string): void;
					public getDataSize(): number;
					public getVendorID(): string;
					public setAesKeyStrength(aesKeyStrength: net.lingala.zip4j.model.enums.AesKeyStrength): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export abstract class AbstractFileHeader extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.AbstractFileHeader>;
					public getAesExtraDataRecord(): net.lingala.zip4j.model.AESExtraDataRecord;
					public getCrc(): number;
					public equals(obj: any): boolean;
					public setZip64ExtendedInfo(zip64ExtendedInfo: net.lingala.zip4j.model.Zip64ExtendedInfo): void;
					public getFileNameLength(): number;
					public setFileNameUTF8Encoded(fileNameUTF8Encoded: boolean): void;
					public getUncompressedSize(): number;
					public setFileNameLength(fileNameLength: number): void;
					public setExtraDataRecords(extraDataRecords: java.util.List<net.lingala.zip4j.model.ExtraDataRecord>): void;
					public getGeneralPurposeFlag(): number[];
					public getExtraDataRecords(): java.util.List<net.lingala.zip4j.model.ExtraDataRecord>;
					public setCrc(crc: number): void;
					public isDataDescriptorExists(): boolean;
					public setEncrypted(encrypted: boolean): void;
					public setExtraFieldLength(extraFieldLength: number): void;
					public setGeneralPurposeFlag(generalPurposeFlag: number[]): void;
					public getExtraFieldLength(): number;
					public constructor();
					public getLastModifiedTimeEpoch(): number;
					public getCompressedSize(): number;
					public setFileName(fileName: string): void;
					public setUncompressedSize(uncompressedSize: number): void;
					public getVersionNeededToExtract(): number;
					public getFileName(): string;
					public setEncryptionMethod(encryptionMethod: net.lingala.zip4j.model.enums.EncryptionMethod): void;
					public isEncrypted(): boolean;
					public setCompressionMethod(compressionMethod: net.lingala.zip4j.model.enums.CompressionMethod): void;
					public setLastModifiedTime(lastModifiedTime: number): void;
					public setAesExtraDataRecord(aesExtraDataRecord: net.lingala.zip4j.model.AESExtraDataRecord): void;
					public isFileNameUTF8Encoded(): boolean;
					public setCompressedSize(compressedSize: number): void;
					public getEncryptionMethod(): net.lingala.zip4j.model.enums.EncryptionMethod;
					public isDirectory(): boolean;
					public getLastModifiedTime(): number;
					public getZip64ExtendedInfo(): net.lingala.zip4j.model.Zip64ExtendedInfo;
					public getCompressionMethod(): net.lingala.zip4j.model.enums.CompressionMethod;
					public setDirectory(directory: boolean): void;
					public setDataDescriptorExists(dataDescriptorExists: boolean): void;
					public setVersionNeededToExtract(versionNeededToExtract: number): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class ArchiveExtraDataRecord extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.ArchiveExtraDataRecord>;
					public setExtraFieldLength(extraFieldLength: number): void;
					public getExtraFieldLength(): number;
					public constructor();
					public getExtraFieldData(): string;
					public setExtraFieldData(extraFieldData: string): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class CentralDirectory extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.model.CentralDirectory>;
					public setDigitalSignature(digitalSignature: net.lingala.zip4j.model.DigitalSignature): void;
					public constructor();
					public getFileHeaders(): java.util.List<net.lingala.zip4j.model.FileHeader>;
					public setFileHeaders(fileHeaders: java.util.List<net.lingala.zip4j.model.FileHeader>): void;
					public getDigitalSignature(): net.lingala.zip4j.model.DigitalSignature;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class DataDescriptor extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.DataDescriptor>;
					public setCompressedSize(compressedSize: number): void;
					public setUncompressedSize(uncompressedSize: number): void;
					public getCrc(): number;
					public constructor();
					public getUncompressedSize(): number;
					public getCompressedSize(): number;
					public setCrc(crc: number): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class DigitalSignature extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.DigitalSignature>;
					public constructor();
					public getSignatureData(): string;
					public getSizeOfData(): number;
					public setSizeOfData(sizeOfData: number): void;
					public setSignatureData(signatureData: string): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class EndOfCentralDirectoryRecord extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.EndOfCentralDirectoryRecord>;
					public getNumberOfThisDiskStartOfCentralDir(): number;
					public getOffsetOfEndOfCentralDirectory(): number;
					public getSizeOfCentralDirectory(): number;
					public setOffsetOfStartOfCentralDirectory(offSetOfStartOfCentralDir: number): void;
					public setNumberOfThisDisk(numberOfThisDisk: number): void;
					public setNumberOfThisDiskStartOfCentralDir(numberOfThisDiskStartOfCentralDir: number): void;
					public setTotalNumberOfEntriesInCentralDirectory(totNoOfEntrisInCentralDir: number): void;
					public getTotalNumberOfEntriesInCentralDirectoryOnThisDisk(): number;
					public setComment(comment: string): void;
					public setOffsetOfEndOfCentralDirectory(offsetOfEndOfCentralDirectory: number): void;
					public constructor();
					public setSizeOfCentralDirectory(sizeOfCentralDirectory: number): void;
					public getNumberOfThisDisk(): number;
					public getTotalNumberOfEntriesInCentralDirectory(): number;
					public getOffsetOfStartOfCentralDirectory(): number;
					public getComment(): string;
					public setTotalNumberOfEntriesInCentralDirectoryOnThisDisk(totalNumberOfEntriesInCentralDirectoryOnThisDisk: number): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class ExcludeFileFilter extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.model.ExcludeFileFilter>;
					/**
					 * Constructs a new instance of the net.lingala.zip4j.model.ExcludeFileFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isExcluded(param0: java.io.File): boolean;
					});
					public constructor();
					public isExcluded(param0: java.io.File): boolean;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class ExtraDataRecord extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.ExtraDataRecord>;
					public setHeader(header: number): void;
					public getData(): number[];
					public setData(data: number[]): void;
					public constructor();
					public getHeader(): number;
					public getSizeOfData(): number;
					public setSizeOfData(sizeOfData: number): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class FileHeader extends net.lingala.zip4j.model.AbstractFileHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.FileHeader>;
					public equals(obj: any): boolean;
					public setFileCommentLength(fileCommentLength: number): void;
					public setDiskNumberStart(diskNumberStart: number): void;
					public setOffsetLocalHeader(offsetLocalHeader: number): void;
					public getFileCommentLength(): number;
					public getDiskNumberStart(): number;
					public setExternalFileAttributes(externalFileAttributes: number[]): void;
					public equals(o: any): boolean;
					public setVersionMadeBy(versionMadeBy: number): void;
					public setInternalFileAttributes(internalFileAttributes: number[]): void;
					public getInternalFileAttributes(): number[];
					public getOffsetLocalHeader(): number;
					public toString(): string;
					public constructor();
					public getExternalFileAttributes(): number[];
					public getVersionMadeBy(): number;
					public hashCode(): number;
					public setFileComment(fileComment: string): void;
					public getFileComment(): string;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class LocalFileHeader extends net.lingala.zip4j.model.AbstractFileHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.LocalFileHeader>;
					public isWriteCompressedSizeInZip64ExtraRecord(): boolean;
					public getOffsetStartOfData(): number;
					public constructor();
					public setExtraField(extraField: number[]): void;
					public setWriteCompressedSizeInZip64ExtraRecord(writeCompressedSizeInZip64ExtraRecord: boolean): void;
					public getExtraField(): number[];
					public setOffsetStartOfData(offsetStartOfData: number): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class UnzipParameters extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.model.UnzipParameters>;
					public constructor();
					public isExtractSymbolicLinks(): boolean;
					public setExtractSymbolicLinks(extractSymbolicLinks: boolean): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class Zip4jConfig extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.model.Zip4jConfig>;
					public getCharset(): java.nio.charset.Charset;
					public constructor(charset: java.nio.charset.Charset, bufferSize: number, useUtf8CharsetForPasswords: boolean);
					public getBufferSize(): number;
					public isUseUtf8CharsetForPasswords(): boolean;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class Zip64EndOfCentralDirectoryLocator extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.Zip64EndOfCentralDirectoryLocator>;
					public getOffsetZip64EndOfCentralDirectoryRecord(): number;
					public constructor();
					public setOffsetZip64EndOfCentralDirectoryRecord(offsetZip64EndOfCentralDirectoryRecord: number): void;
					public setNumberOfDiskStartOfZip64EndOfCentralDirectoryRecord(noOfDiskStartOfZip64EndOfCentralDirRec: number): void;
					public getNumberOfDiskStartOfZip64EndOfCentralDirectoryRecord(): number;
					public setTotalNumberOfDiscs(totNumberOfDiscs: number): void;
					public getTotalNumberOfDiscs(): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class Zip64EndOfCentralDirectoryRecord extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.Zip64EndOfCentralDirectoryRecord>;
					public setNumberOfThisDiskStartOfCentralDirectory(numberOfThisDiskStartOfCentralDirectory: number): void;
					public getVersionNeededToExtract(): number;
					public getExtensibleDataSector(): number[];
					public setTotalNumberOfEntriesInCentralDirectory(totalNumberOfEntriesInCentralDirectory: number): void;
					public getSizeOfCentralDirectory(): number;
					public setNumberOfThisDisk(numberOfThisDisk: number): void;
					public setVersionMadeBy(versionMadeBy: number): void;
					public getTotalNumberOfEntriesInCentralDirectoryOnThisDisk(): number;
					public constructor();
					public getNumberOfThisDiskStartOfCentralDirectory(): number;
					public setOffsetStartCentralDirectoryWRTStartDiskNumber(offsetStartCentralDirectoryWRTStartDiskNumber: number): void;
					public setExtensibleDataSector(extensibleDataSector: number[]): void;
					public getOffsetStartCentralDirectoryWRTStartDiskNumber(): number;
					public setSizeOfCentralDirectory(sizeOfCentralDirectory: number): void;
					public setSizeOfZip64EndCentralDirectoryRecord(sizeOfZip64EndCentralDirectoryRecord: number): void;
					public getVersionMadeBy(): number;
					public getNumberOfThisDisk(): number;
					public getTotalNumberOfEntriesInCentralDirectory(): number;
					public getSizeOfZip64EndCentralDirectoryRecord(): number;
					public setVersionNeededToExtract(versionNeededToExtract: number): void;
					public setTotalNumberOfEntriesInCentralDirectoryOnThisDisk(totalNumberOfEntriesInCentralDirectoryOnThisDisk: number): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class Zip64ExtendedInfo extends net.lingala.zip4j.model.ZipHeader {
					public static class: java.lang.Class<net.lingala.zip4j.model.Zip64ExtendedInfo>;
					public setCompressedSize(compressedSize: number): void;
					public setSize(size: number): void;
					public setUncompressedSize(uncompressedSize: number): void;
					public getOffsetLocalHeader(): number;
					public constructor();
					public getUncompressedSize(): number;
					public getCompressedSize(): number;
					public setOffsetLocalHeader(offsetLocalHeader: number): void;
					public setDiskNumberStart(diskNumberStart: number): void;
					public getDiskNumberStart(): number;
					public getSize(): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export abstract class ZipHeader extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.model.ZipHeader>;
					public getSignature(): net.lingala.zip4j.headers.HeaderSignature;
					public setSignature(signature: net.lingala.zip4j.headers.HeaderSignature): void;
					public constructor();
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class ZipModel extends java.lang.Object implements java.lang.Cloneable {
					public static class: java.lang.Class<net.lingala.zip4j.model.ZipModel>;
					public setDataDescriptors(dataDescriptors: java.util.List<net.lingala.zip4j.model.DataDescriptor>): void;
					public setArchiveExtraDataRecord(archiveExtraDataRecord: net.lingala.zip4j.model.ArchiveExtraDataRecord): void;
					public setZip64EndOfCentralDirectoryLocator(zip64EndOfCentralDirectoryLocator: net.lingala.zip4j.model.Zip64EndOfCentralDirectoryLocator): void;
					public getZip64EndOfCentralDirectoryRecord(): net.lingala.zip4j.model.Zip64EndOfCentralDirectoryRecord;
					public getEnd(): number;
					public isZip64Format(): boolean;
					public setStart(start: number): void;
					public getSplitLength(): number;
					public getStart(): number;
					public getCentralDirectory(): net.lingala.zip4j.model.CentralDirectory;
					public isSplitArchive(): boolean;
					public clone(): any;
					public constructor();
					public getEndOfCentralDirectoryRecord(): net.lingala.zip4j.model.EndOfCentralDirectoryRecord;
					public getArchiveExtraDataRecord(): net.lingala.zip4j.model.ArchiveExtraDataRecord;
					public setEnd(end: number): void;
					public getLocalFileHeaders(): java.util.List<net.lingala.zip4j.model.LocalFileHeader>;
					public setNestedZipFile(isNestedZipFile: boolean): void;
					public setCentralDirectory(centralDirectory: net.lingala.zip4j.model.CentralDirectory): void;
					public getZip64EndOfCentralDirectoryLocator(): net.lingala.zip4j.model.Zip64EndOfCentralDirectoryLocator;
					public getZipFile(): java.io.File;
					public setSplitArchive(splitArchive: boolean): void;
					public setZip64Format(isZip64Format: boolean): void;
					public isNestedZipFile(): boolean;
					public setZip64EndOfCentralDirectoryRecord(zip64EndOfCentralDirectoryRecord: net.lingala.zip4j.model.Zip64EndOfCentralDirectoryRecord): void;
					public setSplitLength(splitLength: number): void;
					public setEndOfCentralDirectoryRecord(endOfCentralDirectoryRecord: net.lingala.zip4j.model.EndOfCentralDirectoryRecord): void;
					public setLocalFileHeaders(localFileHeaderList: java.util.List<net.lingala.zip4j.model.LocalFileHeader>): void;
					public getDataDescriptors(): java.util.List<net.lingala.zip4j.model.DataDescriptor>;
					public setZipFile(zipFile: java.io.File): void;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export class ZipParameters extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.model.ZipParameters>;
					public isWriteExtendedLocalFileHeader(): boolean;
					public isEncryptFiles(): boolean;
					public setEntrySize(entrySize: number): void;
					public setSymbolicLinkAction(symbolicLinkAction: net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction): void;
					public isReadHiddenFolders(): boolean;
					public constructor(zipParameters: net.lingala.zip4j.model.ZipParameters);
					public setUnixMode(unixMode: boolean): void;
					public setEncryptFiles(encryptFiles: boolean): void;
					public getLastModifiedFileTime(): number;
					public setWriteExtendedLocalFileHeader(writeExtendedLocalFileHeader: boolean): void;
					public getSymbolicLinkAction(): net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction;
					public isUnixMode(): boolean;
					public getCompressionLevel(): net.lingala.zip4j.model.enums.CompressionLevel;
					public getFileNameInZip(): string;
					public setFileNameInZip(fileNameInZip: string): void;
					public constructor();
					public getDefaultFolderPath(): string;
					public setReadHiddenFiles(readHiddenFiles: boolean): void;
					public setEntryCRC(entryCRC: number): void;
					public setAesVersion(aesVersion: net.lingala.zip4j.model.enums.AesVersion): void;
					public getEntryCRC(): number;
					public getRootFolderNameInZip(): string;
					public getFileComment(): string;
					public getAesVersion(): net.lingala.zip4j.model.enums.AesVersion;
					public setCompressionLevel(compressionLevel: net.lingala.zip4j.model.enums.CompressionLevel): void;
					public setEncryptionMethod(encryptionMethod: net.lingala.zip4j.model.enums.EncryptionMethod): void;
					public setCompressionMethod(compressionMethod: net.lingala.zip4j.model.enums.CompressionMethod): void;
					public isReadHiddenFiles(): boolean;
					public setRootFolderNameInZip(rootFolderNameInZip: string): void;
					public getAesKeyStrength(): net.lingala.zip4j.model.enums.AesKeyStrength;
					public setDefaultFolderPath(defaultFolderPath: string): void;
					public getEncryptionMethod(): net.lingala.zip4j.model.enums.EncryptionMethod;
					public setExcludeFileFilter(excludeFileFilter: net.lingala.zip4j.model.ExcludeFileFilter): void;
					public getEntrySize(): number;
					public isIncludeRootFolder(): boolean;
					public getCompressionMethod(): net.lingala.zip4j.model.enums.CompressionMethod;
					public setIncludeRootFolder(includeRootFolder: boolean): void;
					public getExcludeFileFilter(): net.lingala.zip4j.model.ExcludeFileFilter;
					public setReadHiddenFolders(readHiddenFolders: boolean): void;
					public isOverrideExistingFilesInZip(): boolean;
					public setLastModifiedFileTime(lastModifiedFileTime: number): void;
					public setOverrideExistingFilesInZip(overrideExistingFilesInZip: boolean): void;
					public setFileComment(fileComment: string): void;
					public setAesKeyStrength(aesKeyStrength: net.lingala.zip4j.model.enums.AesKeyStrength): void;
				}
				export module ZipParameters {
					export class SymbolicLinkAction {
						public static class: java.lang.Class<net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction>;
						public static INCLUDE_LINK_ONLY: net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction;
						public static INCLUDE_LINKED_FILE_ONLY: net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction;
						public static INCLUDE_LINK_AND_LINKED_FILE: net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction;
						public static values(): net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export module enums {
					export class AesKeyStrength {
						public static class: java.lang.Class<net.lingala.zip4j.model.enums.AesKeyStrength>;
						public static KEY_STRENGTH_128: net.lingala.zip4j.model.enums.AesKeyStrength;
						public static KEY_STRENGTH_192: net.lingala.zip4j.model.enums.AesKeyStrength;
						public static KEY_STRENGTH_256: net.lingala.zip4j.model.enums.AesKeyStrength;
						public static getAesKeyStrengthFromRawCode(code: number): net.lingala.zip4j.model.enums.AesKeyStrength;
						public getRawCode(): number;
						public getMacLength(): number;
						public getKeyLength(): number;
						public static valueOf(name: string): net.lingala.zip4j.model.enums.AesKeyStrength;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): net.lingala.zip4j.model.enums.AesKeyStrength[];
						public getSaltLength(): number;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export module enums {
					export class AesVersion {
						public static class: java.lang.Class<net.lingala.zip4j.model.enums.AesVersion>;
						public static ONE: net.lingala.zip4j.model.enums.AesVersion;
						public static TWO: net.lingala.zip4j.model.enums.AesVersion;
						public static values(): net.lingala.zip4j.model.enums.AesVersion[];
						public getVersionNumber(): number;
						public static getFromVersionNumber(versionNumber: number): net.lingala.zip4j.model.enums.AesVersion;
						public static valueOf(name: string): net.lingala.zip4j.model.enums.AesVersion;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export module enums {
					export class CompressionLevel {
						public static class: java.lang.Class<net.lingala.zip4j.model.enums.CompressionLevel>;
						public static NO_COMPRESSION: net.lingala.zip4j.model.enums.CompressionLevel;
						public static FASTEST: net.lingala.zip4j.model.enums.CompressionLevel;
						public static FASTER: net.lingala.zip4j.model.enums.CompressionLevel;
						public static FAST: net.lingala.zip4j.model.enums.CompressionLevel;
						public static MEDIUM_FAST: net.lingala.zip4j.model.enums.CompressionLevel;
						public static NORMAL: net.lingala.zip4j.model.enums.CompressionLevel;
						public static HIGHER: net.lingala.zip4j.model.enums.CompressionLevel;
						public static MAXIMUM: net.lingala.zip4j.model.enums.CompressionLevel;
						public static PRE_ULTRA: net.lingala.zip4j.model.enums.CompressionLevel;
						public static ULTRA: net.lingala.zip4j.model.enums.CompressionLevel;
						public getLevel(): number;
						public static values(): net.lingala.zip4j.model.enums.CompressionLevel[];
						public static valueOf(name: string): net.lingala.zip4j.model.enums.CompressionLevel;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export module enums {
					export class CompressionMethod {
						public static class: java.lang.Class<net.lingala.zip4j.model.enums.CompressionMethod>;
						public static STORE: net.lingala.zip4j.model.enums.CompressionMethod;
						public static DEFLATE: net.lingala.zip4j.model.enums.CompressionMethod;
						public static AES_INTERNAL_ONLY: net.lingala.zip4j.model.enums.CompressionMethod;
						public static values(): net.lingala.zip4j.model.enums.CompressionMethod[];
						public static getCompressionMethodFromCode(code: number): net.lingala.zip4j.model.enums.CompressionMethod;
						public static valueOf(name: string): net.lingala.zip4j.model.enums.CompressionMethod;
						public getCode(): number;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export module enums {
					export class EncryptionMethod {
						public static class: java.lang.Class<net.lingala.zip4j.model.enums.EncryptionMethod>;
						public static NONE: net.lingala.zip4j.model.enums.EncryptionMethod;
						public static ZIP_STANDARD: net.lingala.zip4j.model.enums.EncryptionMethod;
						public static ZIP_STANDARD_VARIANT_STRONG: net.lingala.zip4j.model.enums.EncryptionMethod;
						public static AES: net.lingala.zip4j.model.enums.EncryptionMethod;
						public static valueOf(name: string): net.lingala.zip4j.model.enums.EncryptionMethod;
						public static values(): net.lingala.zip4j.model.enums.EncryptionMethod[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module model {
				export module enums {
					export class RandomAccessFileMode {
						public static class: java.lang.Class<net.lingala.zip4j.model.enums.RandomAccessFileMode>;
						public static READ: net.lingala.zip4j.model.enums.RandomAccessFileMode;
						public static WRITE: net.lingala.zip4j.model.enums.RandomAccessFileMode;
						public static values(): net.lingala.zip4j.model.enums.RandomAccessFileMode[];
						public static valueOf(name: string): net.lingala.zip4j.model.enums.RandomAccessFileMode;
						public getValue(): string;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module progress {
				export class ProgressMonitor extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.progress.ProgressMonitor>;
					public getWorkCompleted(): number;
					public getTotalWork(): number;
					public getFileName(): string;
					public updateWorkCompleted(workCompleted: number): void;
					public setTotalWork(totalWork: number): void;
					public setPercentDone(percentDone: number): void;
					public isPause(): boolean;
					public endProgressMonitor(): void;
					public setCurrentTask(currentTask: net.lingala.zip4j.progress.ProgressMonitor.Task): void;
					public endProgressMonitor(e: java.lang.Exception): void;
					public setState(state: net.lingala.zip4j.progress.ProgressMonitor.State): void;
					public setPause(pause: boolean): void;
					public getPercentDone(): number;
					public constructor();
					public getCurrentTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
					public setException(exception: java.lang.Exception): void;
					public getException(): java.lang.Exception;
					public fullReset(): void;
					public setResult(result: net.lingala.zip4j.progress.ProgressMonitor.Result): void;
					public setCancelAllTasks(cancelAllTasks: boolean): void;
					public getResult(): net.lingala.zip4j.progress.ProgressMonitor.Result;
					public isCancelAllTasks(): boolean;
					public getState(): net.lingala.zip4j.progress.ProgressMonitor.State;
					public setFileName(fileName: string): void;
				}
				export module ProgressMonitor {
					export class Result {
						public static class: java.lang.Class<net.lingala.zip4j.progress.ProgressMonitor.Result>;
						public static SUCCESS: net.lingala.zip4j.progress.ProgressMonitor.Result;
						public static WORK_IN_PROGRESS: net.lingala.zip4j.progress.ProgressMonitor.Result;
						public static ERROR: net.lingala.zip4j.progress.ProgressMonitor.Result;
						public static CANCELLED: net.lingala.zip4j.progress.ProgressMonitor.Result;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): net.lingala.zip4j.progress.ProgressMonitor.Result[];
						public static valueOf(name: string): net.lingala.zip4j.progress.ProgressMonitor.Result;
					}
					export class State {
						public static class: java.lang.Class<net.lingala.zip4j.progress.ProgressMonitor.State>;
						public static READY: net.lingala.zip4j.progress.ProgressMonitor.State;
						public static BUSY: net.lingala.zip4j.progress.ProgressMonitor.State;
						public static values(): net.lingala.zip4j.progress.ProgressMonitor.State[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): net.lingala.zip4j.progress.ProgressMonitor.State;
					}
					export class Task {
						public static class: java.lang.Class<net.lingala.zip4j.progress.ProgressMonitor.Task>;
						public static NONE: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static ADD_ENTRY: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static REMOVE_ENTRY: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static CALCULATE_CRC: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static EXTRACT_ENTRY: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static MERGE_ZIP_FILES: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static SET_COMMENT: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static RENAME_FILE: net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static values(): net.lingala.zip4j.progress.ProgressMonitor.Task[];
						public static valueOf(name: string): net.lingala.zip4j.progress.ProgressMonitor.Task;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export abstract class AbstractAddFileToZipTask<T>  extends net.lingala.zip4j.tasks.AsyncZipTask<any> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AbstractAddFileToZipTask<any>>;
					public getZipModel(): net.lingala.zip4j.model.ZipModel;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export abstract class AbstractExtractFileTask<T>  extends net.lingala.zip4j.tasks.AsyncZipTask<any> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AbstractExtractFileTask<any>>;
					public constructor(zipModel: net.lingala.zip4j.model.ZipModel, unzipParameters: net.lingala.zip4j.model.UnzipParameters, asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public constructor(asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public extractFile(zipInputStream: net.lingala.zip4j.io.inputstream.ZipInputStream, fileHeader: net.lingala.zip4j.model.FileHeader, outputPath: string, newFileName: string, progressMonitor: net.lingala.zip4j.progress.ProgressMonitor, readBuff: number[]): void;
					public getZipModel(): net.lingala.zip4j.model.ZipModel;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export abstract class AbstractModifyFileTask<T>  extends net.lingala.zip4j.tasks.AsyncZipTask<any> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AbstractModifyFileTask<any>>;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export abstract class AbstractZipTaskParameters extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AbstractZipTaskParameters>;
					public zip4jConfig: net.lingala.zip4j.model.Zip4jConfig;
					public constructor(zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class AddFilesToZipTask extends net.lingala.zip4j.tasks.AbstractAddFileToZipTask<net.lingala.zip4j.tasks.AddFilesToZipTask.AddFilesToZipTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AddFilesToZipTask>;
					public constructor(asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: any): number;
					public constructor(zipModel: net.lingala.zip4j.model.ZipModel, password: string[], headerWriter: net.lingala.zip4j.headers.HeaderWriter, asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(taskParameters: net.lingala.zip4j.tasks.AddFilesToZipTask.AddFilesToZipTaskParameters, progressMonitor: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(taskParameters: net.lingala.zip4j.tasks.AddFilesToZipTask.AddFilesToZipTaskParameters): number;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module AddFilesToZipTask {
					export class AddFilesToZipTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.AddFilesToZipTask.AddFilesToZipTaskParameters>;
						public constructor(zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(filesToAdd: java.util.List<java.io.File>, zipParameters: net.lingala.zip4j.model.ZipParameters, zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class AddFolderToZipTask extends net.lingala.zip4j.tasks.AbstractAddFileToZipTask<net.lingala.zip4j.tasks.AddFolderToZipTask.AddFolderToZipTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AddFolderToZipTask>;
					public constructor(asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(taskParameters: net.lingala.zip4j.tasks.AddFolderToZipTask.AddFolderToZipTaskParameters, progressMonitor: net.lingala.zip4j.progress.ProgressMonitor): void;
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: any): number;
					public constructor(zipModel: net.lingala.zip4j.model.ZipModel, password: string[], headerWriter: net.lingala.zip4j.headers.HeaderWriter, asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public calculateTotalWork(taskParameters: net.lingala.zip4j.tasks.AddFolderToZipTask.AddFolderToZipTaskParameters): number;
				}
				export module AddFolderToZipTask {
					export class AddFolderToZipTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.AddFolderToZipTask.AddFolderToZipTaskParameters>;
						public constructor(zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(folderToAdd: java.io.File, zipParameters: net.lingala.zip4j.model.ZipParameters, zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class AddStreamToZipTask extends net.lingala.zip4j.tasks.AbstractAddFileToZipTask<net.lingala.zip4j.tasks.AddStreamToZipTask.AddStreamToZipTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AddStreamToZipTask>;
					public constructor(asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: any): number;
					public constructor(zipModel: net.lingala.zip4j.model.ZipModel, password: string[], headerWriter: net.lingala.zip4j.headers.HeaderWriter, asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(taskParameters: net.lingala.zip4j.tasks.AddStreamToZipTask.AddStreamToZipTaskParameters, progressMonitor: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(taskParameters: net.lingala.zip4j.tasks.AddStreamToZipTask.AddStreamToZipTaskParameters): number;
				}
				export module AddStreamToZipTask {
					export class AddStreamToZipTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.AddStreamToZipTask.AddStreamToZipTaskParameters>;
						public constructor(zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(inputStream: java.io.InputStream, zipParameters: net.lingala.zip4j.model.ZipParameters, zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export abstract class AsyncZipTask<T>  extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.AsyncZipTask<any>>;
					public executeTask(param0: T, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public constructor(asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public calculateTotalWork(param0: T): number;
					public verifyIfTaskIsCancelled(): void;
					public execute(taskParameters: T): void;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module AsyncZipTask {
					export class AsyncTaskParameters extends java.lang.Object {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters>;
						public constructor(executorService: java.util.concurrent.ExecutorService, runInThread: boolean, progressMonitor: net.lingala.zip4j.progress.ProgressMonitor);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class ExtractAllFilesTask extends net.lingala.zip4j.tasks.AbstractExtractFileTask<net.lingala.zip4j.tasks.ExtractAllFilesTask.ExtractAllFilesTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.ExtractAllFilesTask>;
					public constructor(zipModel: net.lingala.zip4j.model.ZipModel, unzipParameters: net.lingala.zip4j.model.UnzipParameters, asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public constructor(asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: any): number;
					public calculateTotalWork(taskParameters: net.lingala.zip4j.tasks.ExtractAllFilesTask.ExtractAllFilesTaskParameters): number;
					public constructor(zipModel: net.lingala.zip4j.model.ZipModel, password: string[], unzipParameters: net.lingala.zip4j.model.UnzipParameters, asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(taskParameters: net.lingala.zip4j.tasks.ExtractAllFilesTask.ExtractAllFilesTaskParameters, progressMonitor: net.lingala.zip4j.progress.ProgressMonitor): void;
				}
				export module ExtractAllFilesTask {
					export class ExtractAllFilesTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.ExtractAllFilesTask.ExtractAllFilesTaskParameters>;
						public constructor(zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(outputPath: string, zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class ExtractFileTask extends net.lingala.zip4j.tasks.AbstractExtractFileTask<net.lingala.zip4j.tasks.ExtractFileTask.ExtractFileTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.ExtractFileTask>;
					public constructor(zipModel: net.lingala.zip4j.model.ZipModel, unzipParameters: net.lingala.zip4j.model.UnzipParameters, asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public constructor(asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: any): number;
					public calculateTotalWork(taskParameters: net.lingala.zip4j.tasks.ExtractFileTask.ExtractFileTaskParameters): number;
					public constructor(zipModel: net.lingala.zip4j.model.ZipModel, password: string[], unzipParameters: net.lingala.zip4j.model.UnzipParameters, asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(taskParameters: net.lingala.zip4j.tasks.ExtractFileTask.ExtractFileTaskParameters, progressMonitor: net.lingala.zip4j.progress.ProgressMonitor): void;
				}
				export module ExtractFileTask {
					export class ExtractFileTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.ExtractFileTask.ExtractFileTaskParameters>;
						public constructor(zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(outputPath: string, fileToExtract: string, newFileName: string, zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class MergeSplitZipFileTask extends net.lingala.zip4j.tasks.AsyncZipTask<net.lingala.zip4j.tasks.MergeSplitZipFileTask.MergeSplitZipFileTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.MergeSplitZipFileTask>;
					public calculateTotalWork(taskParameters: net.lingala.zip4j.tasks.MergeSplitZipFileTask.MergeSplitZipFileTaskParameters): number;
					public constructor(asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: any): number;
					public constructor(zipModel: net.lingala.zip4j.model.ZipModel, asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(taskParameters: net.lingala.zip4j.tasks.MergeSplitZipFileTask.MergeSplitZipFileTaskParameters, progressMonitor: net.lingala.zip4j.progress.ProgressMonitor): void;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module MergeSplitZipFileTask {
					export class MergeSplitZipFileTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.MergeSplitZipFileTask.MergeSplitZipFileTaskParameters>;
						public constructor(zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(outputZipFile: java.io.File, zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class RemoveFilesFromZipTask extends net.lingala.zip4j.tasks.AbstractModifyFileTask<net.lingala.zip4j.tasks.RemoveFilesFromZipTask.RemoveFilesFromZipTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.RemoveFilesFromZipTask>;
					public constructor(asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: any): number;
					public calculateTotalWork(taskParameters: net.lingala.zip4j.tasks.RemoveFilesFromZipTask.RemoveFilesFromZipTaskParameters): number;
					public executeTask(taskParameters: net.lingala.zip4j.tasks.RemoveFilesFromZipTask.RemoveFilesFromZipTaskParameters, progressMonitor: net.lingala.zip4j.progress.ProgressMonitor): void;
					public constructor(zipModel: net.lingala.zip4j.model.ZipModel, headerWriter: net.lingala.zip4j.headers.HeaderWriter, asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module RemoveFilesFromZipTask {
					export class RemoveFilesFromZipTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.RemoveFilesFromZipTask.RemoveFilesFromZipTaskParameters>;
						public constructor(zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(filesToRemove: java.util.List<string>, zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class RenameFilesTask extends net.lingala.zip4j.tasks.AbstractModifyFileTask<net.lingala.zip4j.tasks.RenameFilesTask.RenameFilesTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.RenameFilesTask>;
					public calculateTotalWork(taskParameters: net.lingala.zip4j.tasks.RenameFilesTask.RenameFilesTaskParameters): number;
					public constructor(asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public constructor(zipModel: net.lingala.zip4j.model.ZipModel, headerWriter: net.lingala.zip4j.headers.HeaderWriter, rawIO: net.lingala.zip4j.util.RawIO, asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: any): number;
					public executeTask(taskParameters: net.lingala.zip4j.tasks.RenameFilesTask.RenameFilesTaskParameters, progressMonitor: net.lingala.zip4j.progress.ProgressMonitor): void;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module RenameFilesTask {
					export class RenameFilesTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.RenameFilesTask.RenameFilesTaskParameters>;
						public constructor(zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(fileNamesMap: java.util.Map<string,string>, zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module tasks {
				export class SetCommentTask extends net.lingala.zip4j.tasks.AsyncZipTask<net.lingala.zip4j.tasks.SetCommentTask.SetCommentTaskTaskParameters> {
					public static class: java.lang.Class<net.lingala.zip4j.tasks.SetCommentTask>;
					public constructor(asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(param0: any, param1: net.lingala.zip4j.progress.ProgressMonitor): void;
					public calculateTotalWork(param0: any): number;
					public calculateTotalWork(taskParameters: net.lingala.zip4j.tasks.SetCommentTask.SetCommentTaskTaskParameters): number;
					public constructor(zipModel: net.lingala.zip4j.model.ZipModel, asyncTaskParameters: net.lingala.zip4j.tasks.AsyncZipTask.AsyncTaskParameters);
					public executeTask(taskParameters: net.lingala.zip4j.tasks.SetCommentTask.SetCommentTaskTaskParameters, progressMonitor: net.lingala.zip4j.progress.ProgressMonitor): void;
					public getTask(): net.lingala.zip4j.progress.ProgressMonitor.Task;
				}
				export module SetCommentTask {
					export class SetCommentTaskTaskParameters extends net.lingala.zip4j.tasks.AbstractZipTaskParameters {
						public static class: java.lang.Class<net.lingala.zip4j.tasks.SetCommentTask.SetCommentTaskTaskParameters>;
						public constructor(zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
						public constructor(comment: string, zip4jConfig: net.lingala.zip4j.model.Zip4jConfig);
					}
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class BitUtils extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.util.BitUtils>;
					public static isBitSet(b: number, pos: number): boolean;
					public constructor();
					public static unsetBit(b: number, pos: number): number;
					public static setBit(b: number, pos: number): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class CrcUtil extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.util.CrcUtil>;
					public constructor();
					public static computeFileCrc(inputFile: java.io.File, progressMonitor: net.lingala.zip4j.progress.ProgressMonitor): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class FileUtils extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.util.FileUtils>;
					public static DEFAULT_POSIX_FILE_ATTRIBUTES: number[];
					public static DEFAULT_POSIX_FOLDER_ATTRIBUTES: number[];
					public static isZipEntryDirectory(fileNameInZip: string): boolean;
					public static getSplitZipFiles(zipModel: net.lingala.zip4j.model.ZipModel): java.util.List<java.io.File>;
					public static getAllSortedNumberedSplitFiles(firstNumberedFile: java.io.File): java.io.File[];
					public static isWindows(): boolean;
					public static getFileNameWithoutExtension(fileName: string): string;
					public static assertFilesExist(files: java.util.List<java.io.File>, symLinkAction: net.lingala.zip4j.model.ZipParameters.SymbolicLinkAction): void;
					public static isNumberedSplitFile(file: java.io.File): boolean;
					public static isSymbolicLink(file: java.io.File): boolean;
					public static getDefaultFileAttributes(isDirectory: boolean): number[];
					public static getFileAttributes(file: java.io.File): number[];
					public static copyFile(randomAccessFile: java.io.RandomAccessFile, outputStream: java.io.OutputStream, start: number, param3: number, end: net.lingala.zip4j.progress.ProgressMonitor, param5: number): void;
					public static readSymbolicLink(file: java.io.File): string;
					public static setFileAttributes(file: java.nio.file.Path, fileAttributes: number[]): void;
					public static setFileLastModifiedTime(file: java.nio.file.Path, lastModifiedTime: number): void;
					public static getFilesInDirectoryRecursive(path: java.io.File, zipParameters: net.lingala.zip4j.model.ZipParameters): java.util.List<java.io.File>;
					public static setFileLastModifiedTimeWithoutNio(file: java.io.File, lastModifiedTime: number): void;
					public static getNextNumberedSplitFileCounterAsExtension(index: number): string;
					public constructor();
					public static isMac(): boolean;
					public static getRelativeFileName(fileToAdd: java.io.File, zipParameters: net.lingala.zip4j.model.ZipParameters): string;
					public static isUnix(): boolean;
					public static getZipFileNameWithoutExtension(zipFile: string): string;
					public static getFileExtension(file: java.io.File): string;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class InternalZipConstants extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.util.InternalZipConstants>;
					public static ENDHDR: number;
					public static STD_DEC_HDR_SIZE: number;
					public static MAX_COMMENT_SIZE: number;
					public static AES_AUTH_LENGTH: number;
					public static AES_BLOCK_SIZE: number;
					public static AES_EXTRA_DATA_RECORD_SIZE: number;
					public static AES_MAC_ALGORITHM: string;
					public static AES_HASH_CHARSET: string;
					public static AES_HASH_ITERATIONS: number;
					public static AES_PASSWORD_VERIFIER_LENGTH: number;
					public static MIN_SPLIT_LENGTH: number;
					public static ZIP_64_SIZE_LIMIT: number;
					public static ZIP_64_NUMBER_OF_ENTRIES_LIMIT: number;
					public static BUFF_SIZE: number;
					public static MIN_BUFF_SIZE: number;
					public static UPDATE_LFH_CRC: number;
					public static UPDATE_LFH_COMP_SIZE: number;
					public static UPDATE_LFH_UNCOMP_SIZE: number;
					public static FILE_SEPARATOR: string;
					public static ZIP_FILE_SEPARATOR: string;
					public static MAX_ALLOWED_ZIP_COMMENT_LENGTH: number;
					public static ZIP_STANDARD_CHARSET_NAME: string;
					public static CHARSET_UTF_8: java.nio.charset.Charset;
					public static ZIP4J_DEFAULT_CHARSET: java.nio.charset.Charset;
					public static SEVEN_ZIP_SPLIT_FILE_EXTENSION_PATTERN: string;
					public static USE_UTF8_FOR_PASSWORD_ENCODING_DECODING: boolean;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class PasswordCallback extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.util.PasswordCallback>;
					/**
					 * Constructs a new instance of the net.lingala.zip4j.util.PasswordCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getPassword(): string[];
					});
					public constructor();
					public getPassword(): string[];
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class RawIO extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.util.RawIO>;
					public writeIntLittleEndian(outputStream: java.io.OutputStream, value: number): void;
					public readLongLittleEndian(randomAccessFile: java.io.RandomAccessFile): number;
					public readLongLittleEndian(array: number[], pos: number): number;
					public readIntLittleEndian(inputStream: java.io.InputStream): number;
					public writeIntLittleEndian(array: number[], pos: number, value: number): void;
					public writeLongLittleEndian(outputStream: java.io.OutputStream, value: number): void;
					public writeShortLittleEndian(outputStream: java.io.OutputStream, value: number): void;
					public readShortLittleEndian(buff: number[], position: number): number;
					public readLongLittleEndian(randomAccessFile: java.io.RandomAccessFile, readLen: number): number;
					public readLongLittleEndian(inputStream: java.io.InputStream): number;
					public readIntLittleEndian(b: number[]): number;
					public readShortLittleEndian(randomAccessFile: java.io.RandomAccessFile): number;
					public writeShortLittleEndian(array: number[], pos: number, value: number): void;
					public readShortLittleEndian(inputStream: java.io.InputStream): number;
					public constructor();
					public writeLongLittleEndian(array: number[], pos: number, value: number): void;
					public readIntLittleEndian(randomAccessFile: java.io.RandomAccessFile): number;
					public readLongLittleEndian(inputStream: java.io.InputStream, readLen: number): number;
					public readIntLittleEndian(b: number[], pos: number): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class UnzipUtil extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.util.UnzipUtil>;
					public constructor();
					public static createZipInputStream(zipModel: net.lingala.zip4j.model.ZipModel, fileHeader: net.lingala.zip4j.model.FileHeader, password: string[]): net.lingala.zip4j.io.inputstream.ZipInputStream;
					public static applyFileAttributes(fileHeader: net.lingala.zip4j.model.FileHeader, file: java.io.File): void;
					public static createSplitInputStream(zipModel: net.lingala.zip4j.model.ZipModel): net.lingala.zip4j.io.inputstream.SplitFileInputStream;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class Zip4jUtil extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.util.Zip4jUtil>;
					public static getCompressionMethod(localFileHeader: net.lingala.zip4j.model.AbstractFileHeader): net.lingala.zip4j.model.enums.CompressionMethod;
					public static epochToExtendedDosTime(time: number): number;
					public static createDirectoryIfNotExists(file: java.io.File): boolean;
					public constructor();
					public static isStringNullOrEmpty(str: string): boolean;
					public static isStringNotNullAndNotEmpty(str: string): boolean;
					public static dosToExtendedEpochTme(dosTime: number): number;
					public static convertCharArrayToByteArray(charArray: string[], useUtf8Charset: boolean): number[];
					public static readFully(inputStream: java.io.InputStream, bufferToReadInto: number[]): number;
					public static readFully(inputStream: java.io.InputStream, b: number[], offset: number, length: number): number;
				}
			}
		}
	}
}

declare module net {
	export module lingala {
		export module zip4j {
			export module util {
				export class ZipVersionUtils extends java.lang.Object {
					public static class: java.lang.Class<net.lingala.zip4j.util.ZipVersionUtils>;
					public static determineVersionNeededToExtract(zipParameters: net.lingala.zip4j.model.ZipParameters): net.lingala.zip4j.headers.VersionNeededToExtract;
					public constructor();
					public static determineVersionMadeBy(zipParameters: net.lingala.zip4j.model.ZipParameters, rawIO: net.lingala.zip4j.util.RawIO): number;
				}
			}
		}
	}
}

//Generics information:
//net.lingala.zip4j.io.inputstream.CipherInputStream:1
//net.lingala.zip4j.io.outputstream.CipherOutputStream:1
//net.lingala.zip4j.tasks.AbstractAddFileToZipTask:1
//net.lingala.zip4j.tasks.AbstractExtractFileTask:1
//net.lingala.zip4j.tasks.AbstractModifyFileTask:1
//net.lingala.zip4j.tasks.AsyncZipTask:1

