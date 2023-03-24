declare module de {
	export module mindpipe {
		export module android {
			export module logging {
				export module log4j {
					export class LogCatAppender extends org.apache.log4j.AppenderSkeleton {
						public static class: java.lang.Class<de.mindpipe.android.logging.log4j.LogCatAppender>;
						public tagLayout: org.apache.log4j.Layout;
						public constructor();
						public clearFilters(): void;
						public close(): void;
						public setName(param0: string): void;
						public append(le: org.apache.log4j.spi.LoggingEvent): void;
						public getTagLayout(): org.apache.log4j.Layout;
						public setTagLayout(tagLayout: org.apache.log4j.Layout): void;
						public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
						public activateOptions(): void;
						public getFilter(): org.apache.log4j.spi.Filter;
						public getName(): string;
						public addFilter(param0: org.apache.log4j.spi.Filter): void;
						public constructor(messageLayout: org.apache.log4j.Layout);
						public requiresLayout(): boolean;
						public append(param0: org.apache.log4j.spi.LoggingEvent): void;
						public constructor(param0: boolean);
						public constructor(messageLayout: org.apache.log4j.Layout, tagLayout: org.apache.log4j.Layout);
						public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
						public getLayout(): org.apache.log4j.Layout;
						public setLayout(param0: org.apache.log4j.Layout): void;
						public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					}
				}
			}
		}
	}
}

declare module de {
	export module mindpipe {
		export module android {
			export module logging {
				export module log4j {
					export class LogConfigurator extends java.lang.Object {
						public static class: java.lang.Class<de.mindpipe.android.logging.log4j.LogConfigurator>;
						public setRootLevel(level: org.apache.log4j.Level): void;
						public getFileName(): string;
						public isImmediateFlush(): boolean;
						public constructor(fileName: string);
						public setFilePattern(filePattern: string): void;
						public getMaxFileSize(): number;
						public constructor(fileName: string, maxBackupSize: number, maxFileSize: number, param3: string, filePattern: org.apache.log4j.Level);
						public getLogCatPattern(): string;
						public setMaxBackupSize(maxBackupSize: number): void;
						public isResetConfiguration(): boolean;
						public setLogCatPattern(logCatPattern: string): void;
						public isUseLogCatAppender(): boolean;
						public constructor(fileName: string, rootLevel: org.apache.log4j.Level, filePattern: string);
						public setImmediateFlush(immediateFlush: boolean): void;
						public constructor();
						public isUseFileAppender(): boolean;
						public setInternalDebugging(internalDebugging: boolean): void;
						public configure(): void;
						public getMaxBackupSize(): number;
						public constructor(fileName: string, rootLevel: org.apache.log4j.Level);
						public getFilePattern(): string;
						public setLevel(loggerName: string, level: org.apache.log4j.Level): void;
						public setUseFileAppender(useFileAppender: boolean): void;
						public setUseLogCatAppender(useLogCatAppender: boolean): void;
						public getRootLevel(): org.apache.log4j.Level;
						public isInternalDebugging(): boolean;
						public setMaxFileSize(maxFileSize: number): void;
						public setFileName(fileName: string): void;
						public setResetConfiguration(resetConfiguration: boolean): void;
					}
				}
			}
		}
	}
}

//Generics information:

