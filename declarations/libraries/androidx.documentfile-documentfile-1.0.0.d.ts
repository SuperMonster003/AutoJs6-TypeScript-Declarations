declare module androidx {
	export module documentfile {
		export module provider {
			export abstract class DocumentFile extends java.lang.Object {
				public static class: java.lang.Class<androidx.documentfile.provider.DocumentFile>;
				public canWrite(): boolean;
				public findFile(displayName: string): androidx.documentfile.provider.DocumentFile;
				public getType(): string;
				public canRead(): boolean;
				public isFile(): boolean;
				public static fromTreeUri(context: android.content.Context, treeUri: android.net.Uri): androidx.documentfile.provider.DocumentFile;
				public lastModified(): number;
				public length(): number;
				public createDirectory(param0: string): androidx.documentfile.provider.DocumentFile;
				public getName(): string;
				public delete(): boolean;
				public static fromSingleUri(context: android.content.Context, singleUri: android.net.Uri): androidx.documentfile.provider.DocumentFile;
				public static fromFile(file: java.io.File): androidx.documentfile.provider.DocumentFile;
				public createFile(param0: string, param1: string): androidx.documentfile.provider.DocumentFile;
				public getUri(): android.net.Uri;
				public renameTo(param0: string): boolean;
				public exists(): boolean;
				public static isDocumentUri(context: android.content.Context, uri: android.net.Uri): boolean;
				public listFiles(): androidx.documentfile.provider.DocumentFile[];
				public isDirectory(): boolean;
				public getParentFile(): androidx.documentfile.provider.DocumentFile;
				public isVirtual(): boolean;
			}
		}
	}
}

declare module androidx {
	export module documentfile {
		export module provider {
			export class DocumentsContractApi19 extends java.lang.Object {
				public static class: java.lang.Class<androidx.documentfile.provider.DocumentsContractApi19>;
				public static lastModified(context: android.content.Context, self: android.net.Uri): number;
				public static canWrite(context: android.content.Context, self: android.net.Uri): boolean;
				public static canRead(context: android.content.Context, self: android.net.Uri): boolean;
				public static getName(context: android.content.Context, self: android.net.Uri): string;
				public static getFlags(context: android.content.Context, self: android.net.Uri): number;
				public static isVirtual(context: android.content.Context, self: android.net.Uri): boolean;
				public static getType(context: android.content.Context, self: android.net.Uri): string;
				public static exists(context: android.content.Context, self: android.net.Uri): boolean;
				public static isFile(context: android.content.Context, self: android.net.Uri): boolean;
				public static isDirectory(context: android.content.Context, self: android.net.Uri): boolean;
				public static length(context: android.content.Context, self: android.net.Uri): number;
			}
		}
	}
}

declare module androidx {
	export module documentfile {
		export module provider {
			export class RawDocumentFile extends androidx.documentfile.provider.DocumentFile {
				public static class: java.lang.Class<androidx.documentfile.provider.RawDocumentFile>;
				public canWrite(): boolean;
				public getType(): string;
				public canRead(): boolean;
				public isFile(): boolean;
				public lastModified(): number;
				public length(): number;
				public createDirectory(param0: string): androidx.documentfile.provider.DocumentFile;
				public getName(): string;
				public delete(): boolean;
				public createFile(mimeType: string, displayName: string): androidx.documentfile.provider.DocumentFile;
				public createFile(param0: string, param1: string): androidx.documentfile.provider.DocumentFile;
				public getUri(): android.net.Uri;
				public renameTo(param0: string): boolean;
				public exists(): boolean;
				public createDirectory(displayName: string): androidx.documentfile.provider.DocumentFile;
				public listFiles(): androidx.documentfile.provider.DocumentFile[];
				public renameTo(displayName: string): boolean;
				public isDirectory(): boolean;
				public isVirtual(): boolean;
			}
		}
	}
}

declare module androidx {
	export module documentfile {
		export module provider {
			export class SingleDocumentFile extends androidx.documentfile.provider.DocumentFile {
				public static class: java.lang.Class<androidx.documentfile.provider.SingleDocumentFile>;
				public canWrite(): boolean;
				public getType(): string;
				public canRead(): boolean;
				public isFile(): boolean;
				public lastModified(): number;
				public length(): number;
				public createDirectory(param0: string): androidx.documentfile.provider.DocumentFile;
				public getName(): string;
				public delete(): boolean;
				public createFile(mimeType: string, displayName: string): androidx.documentfile.provider.DocumentFile;
				public createFile(param0: string, param1: string): androidx.documentfile.provider.DocumentFile;
				public getUri(): android.net.Uri;
				public renameTo(param0: string): boolean;
				public exists(): boolean;
				public createDirectory(displayName: string): androidx.documentfile.provider.DocumentFile;
				public listFiles(): androidx.documentfile.provider.DocumentFile[];
				public renameTo(displayName: string): boolean;
				public isDirectory(): boolean;
				public isVirtual(): boolean;
			}
		}
	}
}

declare module androidx {
	export module documentfile {
		export module provider {
			export class TreeDocumentFile extends androidx.documentfile.provider.DocumentFile {
				public static class: java.lang.Class<androidx.documentfile.provider.TreeDocumentFile>;
				public canWrite(): boolean;
				public getType(): string;
				public canRead(): boolean;
				public isFile(): boolean;
				public lastModified(): number;
				public length(): number;
				public createDirectory(param0: string): androidx.documentfile.provider.DocumentFile;
				public getName(): string;
				public delete(): boolean;
				public createFile(mimeType: string, displayName: string): androidx.documentfile.provider.DocumentFile;
				public createFile(param0: string, param1: string): androidx.documentfile.provider.DocumentFile;
				public getUri(): android.net.Uri;
				public renameTo(param0: string): boolean;
				public exists(): boolean;
				public createDirectory(displayName: string): androidx.documentfile.provider.DocumentFile;
				public listFiles(): androidx.documentfile.provider.DocumentFile[];
				public renameTo(displayName: string): boolean;
				public isDirectory(): boolean;
				public isVirtual(): boolean;
			}
		}
	}
}

//Generics information:

