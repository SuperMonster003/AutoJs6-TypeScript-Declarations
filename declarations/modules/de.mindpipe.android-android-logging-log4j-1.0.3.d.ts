/// <reference path="../android.d.ts" />

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
						public constructor(param0: org.apache.log4j.Layout, param1: org.apache.log4j.Layout);
						public close(): void;
						public setTagLayout(param0: org.apache.log4j.Layout): void;
						public setName(param0: string): void;
						public getTagLayout(): org.apache.log4j.Layout;
						public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
						public activateOptions(): void;
						public getFilter(): org.apache.log4j.spi.Filter;
						public getName(): string;
						public addFilter(param0: org.apache.log4j.spi.Filter): void;
						public requiresLayout(): boolean;
						public constructor(param0: org.apache.log4j.Layout);
						public append(param0: org.apache.log4j.spi.LoggingEvent): void;
						public constructor(param0: boolean);
						public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
						public setLayout(param0: org.apache.log4j.Layout): void;
						public getLayout(): org.apache.log4j.Layout;
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
						public constructor();
						public constructor(param0: string);
						public constructor(param0: string, param1: number, param2: number, param3: string, param4: org.apache.log4j.Level);
						public constructor(param0: string, param1: org.apache.log4j.Level);
						public constructor(param0: string, param1: org.apache.log4j.Level, param2: string);
						public configure(): void;
						public getFileName(): string;
						public getFilePattern(): string;
						public getLogCatPattern(): string;
						public getMaxBackupSize(): number;
						public getMaxFileSize(): number;
						public getRootLevel(): org.apache.log4j.Level;
						public isImmediateFlush(): boolean;
						public isInternalDebugging(): boolean;
						public isResetConfiguration(): boolean;
						public isUseFileAppender(): boolean;
						public isUseLogCatAppender(): boolean;
						public setFileName(param0: string): void;
						public setFilePattern(param0: string): void;
						public setImmediateFlush(param0: boolean): void;
						public setInternalDebugging(param0: boolean): void;
						public setLevel(param0: string, param1: org.apache.log4j.Level): void;
						public setLogCatPattern(param0: string): void;
						public setMaxBackupSize(param0: number): void;
						public setMaxFileSize(param0: number): void;
						public setResetConfiguration(param0: boolean): void;
						public setRootLevel(param0: org.apache.log4j.Level): void;
						public setUseFileAppender(param0: boolean): void;
						public setUseLogCatAppender(param0: boolean): void;
					}
				}
			}
		}
	}
}