/// <reference path="../android.d.ts" />

declare module org {
	export module apache {
		export module log4j {
			export class Appender extends java.lang.Object {
				public static class: java.lang.Class<org.apache.log4j.Appender>;
				/**
				 * Constructs a new instance of the org.apache.log4j.Appender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					addFilter(param0: org.apache.log4j.spi.Filter): void;
					getFilter(): org.apache.log4j.spi.Filter;
					clearFilters(): void;
					close(): void;
					doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					getName(): string;
					setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					setLayout(param0: org.apache.log4j.Layout): void;
					getLayout(): org.apache.log4j.Layout;
					setName(param0: string): void;
					requiresLayout(): boolean;
				});
				public constructor();
				public setName(param0: string): void;
				public close(): void;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public requiresLayout(): boolean;
				public getFilter(): org.apache.log4j.spi.Filter;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public clearFilters(): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export abstract class AppenderSkeleton extends java.lang.Object implements org.apache.log4j.Appender, org.apache.log4j.spi.OptionHandler {
				public static class: java.lang.Class<org.apache.log4j.AppenderSkeleton>;
				public layout: org.apache.log4j.Layout;
				public name: string;
				public threshold: org.apache.log4j.Priority;
				public errorHandler: org.apache.log4j.spi.ErrorHandler;
				public headFilter: org.apache.log4j.spi.Filter;
				public tailFilter: org.apache.log4j.spi.Filter;
				public closed: boolean;
				public setName(param0: string): void;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public close(): void;
				public requiresLayout(): boolean;
				public setThreshold(param0: org.apache.log4j.Priority): void;
				public getFilter(): org.apache.log4j.spi.Filter;
				public finalize(): void;
				public constructor(param0: boolean);
				public isAsSevereAsThreshold(param0: org.apache.log4j.Priority): boolean;
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public constructor();
				public getFirstFilter(): org.apache.log4j.spi.Filter;
				public append(param0: org.apache.log4j.spi.LoggingEvent): void;
				public getThreshold(): org.apache.log4j.Priority;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
				public clearFilters(): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class AsyncAppender extends org.apache.log4j.AppenderSkeleton implements org.apache.log4j.spi.AppenderAttachable {
				public static class: java.lang.Class<org.apache.log4j.AsyncAppender>;
				public static DEFAULT_BUFFER_SIZE: number;
				public removeAllAppenders(): void;
				public getAllAppenders(): java.util.Enumeration<any>;
				public setLocationInfo(param0: boolean): void;
				public constructor(param0: boolean);
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public getLocationInfo(): boolean;
				public setBufferSize(param0: number): void;
				public constructor();
				public append(param0: org.apache.log4j.spi.LoggingEvent): void;
				public clearFilters(): void;
				public removeAppender(param0: org.apache.log4j.Appender): void;
				public removeAppender(param0: string): void;
				public setName(param0: string): void;
				public close(): void;
				public requiresLayout(): boolean;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public isAttached(param0: org.apache.log4j.Appender): boolean;
				public getFilter(): org.apache.log4j.spi.Filter;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
				public getAppender(param0: string): org.apache.log4j.Appender;
				public getBufferSize(): number;
				public setBlocking(param0: boolean): void;
				public addAppender(param0: org.apache.log4j.Appender): void;
				public getBlocking(): boolean;
			}
			export module AsyncAppender {
				export class DiscardSummary extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.AsyncAppender.DiscardSummary>;
					public add(param0: org.apache.log4j.spi.LoggingEvent): void;
					public createEvent(): org.apache.log4j.spi.LoggingEvent;
					public constructor(param0: org.apache.log4j.spi.LoggingEvent);
				}
				export class Dispatcher extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<org.apache.log4j.AsyncAppender.Dispatcher>;
					public run(): void;
					public constructor(param0: org.apache.log4j.AsyncAppender, param1: java.util.List<any>, param2: java.util.Map<any,any>, param3: org.apache.log4j.helpers.AppenderAttachableImpl);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class BasicConfigurator extends java.lang.Object {
				public static class: java.lang.Class<org.apache.log4j.BasicConfigurator>;
				public static configure(): void;
				public static configure(param0: org.apache.log4j.Appender): void;
				public static resetConfiguration(): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class Category extends java.lang.Object implements org.apache.log4j.spi.AppenderAttachable {
				public static class: java.lang.Class<org.apache.log4j.Category>;
				public name: string;
				public level: org.apache.log4j.Level;
				public parent: org.apache.log4j.Category;
				public resourceBundle: java.util.ResourceBundle;
				public repository: org.apache.log4j.spi.LoggerRepository;
				public additive: boolean;
				/** @deprecated */
				public getPriority(): org.apache.log4j.Level;
				public assertLog(param0: boolean, param1: string): void;
				public l7dlog(param0: org.apache.log4j.Priority, param1: string, param2: any[], param3: java.lang.Throwable): void;
				/** @deprecated */
				public static getInstance(param0: string): org.apache.log4j.Category;
				public getAdditivity(): boolean;
				public callAppenders(param0: org.apache.log4j.spi.LoggingEvent): void;
				public setLevel(param0: org.apache.log4j.Level): void;
				public error(param0: any, param1: java.lang.Throwable): void;
				/** @deprecated */
				public static getRoot(): org.apache.log4j.Category;
				/** @deprecated */
				public static getDefaultHierarchy(): org.apache.log4j.spi.LoggerRepository;
				public removeAppender(param0: org.apache.log4j.Appender): void;
				public getLevel(): org.apache.log4j.Level;
				public getResourceBundleString(param0: string): string;
				/** @deprecated */
				public getChainedPriority(): org.apache.log4j.Priority;
				public getName(): string;
				/** @deprecated */
				public static exists(param0: string): org.apache.log4j.Logger;
				public forcedLog(param0: string, param1: org.apache.log4j.Priority, param2: any, param3: java.lang.Throwable): void;
				public isDebugEnabled(): boolean;
				public debug(param0: any): void;
				public getAppender(param0: string): org.apache.log4j.Appender;
				public log(param0: org.apache.log4j.Priority, param1: any, param2: java.lang.Throwable): void;
				public warn(param0: any): void;
				public getLoggerRepository(): org.apache.log4j.spi.LoggerRepository;
				public removeAllAppenders(): void;
				public warn(param0: any, param1: java.lang.Throwable): void;
				public getAllAppenders(): java.util.Enumeration<any>;
				public log(param0: string, param1: org.apache.log4j.Priority, param2: any, param3: java.lang.Throwable): void;
				public fatal(param0: any, param1: java.lang.Throwable): void;
				/** @deprecated */
				public static getInstance(param0: java.lang.Class<any>): org.apache.log4j.Category;
				public error(param0: any): void;
				public constructor(param0: string);
				public debug(param0: any, param1: java.lang.Throwable): void;
				/** @deprecated */
				public static getCurrentCategories(): java.util.Enumeration<any>;
				public setAdditivity(param0: boolean): void;
				public info(param0: any): void;
				/** @deprecated */
				public static shutdown(): void;
				public getParent(): org.apache.log4j.Category;
				public fatal(param0: any): void;
				public getEffectiveLevel(): org.apache.log4j.Level;
				public l7dlog(param0: org.apache.log4j.Priority, param1: string, param2: java.lang.Throwable): void;
				public info(param0: any, param1: java.lang.Throwable): void;
				public removeAppender(param0: string): void;
				public isAttached(param0: org.apache.log4j.Appender): boolean;
				public isInfoEnabled(): boolean;
				public setResourceBundle(param0: java.util.ResourceBundle): void;
				/** @deprecated */
				public getHierarchy(): org.apache.log4j.spi.LoggerRepository;
				public log(param0: org.apache.log4j.Priority, param1: any): void;
				/** @deprecated */
				public setPriority(param0: org.apache.log4j.Priority): void;
				public getResourceBundle(): java.util.ResourceBundle;
				public isEnabledFor(param0: org.apache.log4j.Priority): boolean;
				public addAppender(param0: org.apache.log4j.Appender): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class CategoryKey extends java.lang.Object {
				public static class: java.lang.Class<org.apache.log4j.CategoryKey>;
				public hashCode(): number;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class ConsoleAppender extends org.apache.log4j.WriterAppender {
				public static class: java.lang.Class<org.apache.log4j.ConsoleAppender>;
				public static SYSTEM_OUT: string;
				public static SYSTEM_ERR: string;
				public target: string;
				public setName(param0: string): void;
				public setFollow(param0: boolean): void;
				public close(): void;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public requiresLayout(): boolean;
				public getTarget(): string;
				public getFilter(): org.apache.log4j.spi.Filter;
				public constructor(param0: org.apache.log4j.Layout, param1: string);
				public constructor(param0: boolean);
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public constructor(param0: org.apache.log4j.Layout, param1: java.io.OutputStream);
				public setTarget(param0: string): void;
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public constructor();
				public constructor(param0: org.apache.log4j.Layout, param1: java.io.Writer);
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
				public constructor(param0: org.apache.log4j.Layout);
				public getFollow(): boolean;
				public clearFilters(): void;
				public closeWriter(): void;
			}
			export module ConsoleAppender {
				export class SystemErrStream extends java.io.OutputStream {
					public static class: java.lang.Class<org.apache.log4j.ConsoleAppender.SystemErrStream>;
					public write(param0: number[], param1: number, param2: number): void;
					public write(param0: number[]): void;
					public constructor();
					public close(): void;
					public flush(): void;
					public write(param0: number): void;
				}
				export class SystemOutStream extends java.io.OutputStream {
					public static class: java.lang.Class<org.apache.log4j.ConsoleAppender.SystemOutStream>;
					public write(param0: number[], param1: number, param2: number): void;
					public write(param0: number[]): void;
					public constructor();
					public close(): void;
					public flush(): void;
					public write(param0: number): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class DailyRollingFileAppender extends org.apache.log4j.FileAppender {
				public static class: java.lang.Class<org.apache.log4j.DailyRollingFileAppender>;
				public constructor(param0: org.apache.log4j.Layout, param1: string, param2: boolean);
				public setName(param0: string): void;
				public constructor(param0: org.apache.log4j.Layout, param1: string, param2: string);
				public close(): void;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public requiresLayout(): boolean;
				public getFilter(): org.apache.log4j.spi.Filter;
				public constructor(param0: org.apache.log4j.Layout, param1: string);
				public constructor(param0: boolean);
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public constructor(param0: org.apache.log4j.Layout, param1: string, param2: boolean, param3: boolean, param4: number);
				public getDatePattern(): string;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public constructor(param0: org.apache.log4j.Layout, param1: java.io.OutputStream);
				public subAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public constructor();
				public constructor(param0: org.apache.log4j.Layout, param1: java.io.Writer);
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
				public setDatePattern(param0: string): void;
				public clearFilters(): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class DefaultCategoryFactory extends java.lang.Object implements org.apache.log4j.spi.LoggerFactory {
				public static class: java.lang.Class<org.apache.log4j.DefaultCategoryFactory>;
				public makeNewLoggerInstance(param0: string): org.apache.log4j.Logger;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class DefaultThrowableRenderer extends java.lang.Object implements org.apache.log4j.spi.ThrowableRenderer {
				public static class: java.lang.Class<org.apache.log4j.DefaultThrowableRenderer>;
				public static render(param0: java.lang.Throwable): string[];
				public doRender(param0: java.lang.Throwable): string[];
				public constructor();
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class Dispatcher extends java.lang.Thread {
				public static class: java.lang.Class<org.apache.log4j.Dispatcher>;
				public run(): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class EnhancedPatternLayout extends org.apache.log4j.Layout {
				public static class: java.lang.Class<org.apache.log4j.EnhancedPatternLayout>;
				public static DEFAULT_CONVERSION_PATTERN: string;
				public static TTCC_CONVERSION_PATTERN: string;
				public BUF_SIZE: number;
				public MAX_CAPACITY: number;
				public static PATTERN_RULE_REGISTRY: string;
				public format(param0: org.apache.log4j.spi.LoggingEvent): string;
				public ignoresThrowable(): boolean;
				public setConversionPattern(param0: string): void;
				public getConversionPattern(): string;
				public constructor(param0: string);
				public createPatternParser(param0: string): org.apache.log4j.helpers.PatternParser;
				public activateOptions(): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class EnhancedThrowableRenderer extends java.lang.Object implements org.apache.log4j.spi.ThrowableRenderer {
				public static class: java.lang.Class<org.apache.log4j.EnhancedThrowableRenderer>;
				public doRender(param0: java.lang.Throwable): string[];
				public constructor();
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class FileAppender extends org.apache.log4j.WriterAppender {
				public static class: java.lang.Class<org.apache.log4j.FileAppender>;
				public fileAppend: boolean;
				public fileName: string;
				public bufferedIO: boolean;
				public bufferSize: number;
				public constructor(param0: org.apache.log4j.Layout, param1: string, param2: boolean);
				public setBufferedIO(param0: boolean): void;
				public setFile(param0: string): void;
				public constructor(param0: org.apache.log4j.Layout, param1: string);
				public getAppend(): boolean;
				public constructor(param0: boolean);
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public constructor(param0: org.apache.log4j.Layout, param1: string, param2: boolean, param3: boolean, param4: number);
				public getFile(): string;
				public setBufferSize(param0: number): void;
				public constructor();
				public reset(): void;
				public constructor(param0: org.apache.log4j.Layout, param1: java.io.Writer);
				public getBufferedIO(): boolean;
				public clearFilters(): void;
				public setName(param0: string): void;
				public close(): void;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public requiresLayout(): boolean;
				public setAppend(param0: boolean): void;
				public closeFile(): void;
				public getFilter(): org.apache.log4j.spi.Filter;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public constructor(param0: org.apache.log4j.Layout, param1: java.io.OutputStream);
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public setFile(param0: string, param1: boolean, param2: boolean, param3: number): void;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
				public setQWForFiles(param0: java.io.Writer): void;
				public getBufferSize(): number;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class HTMLLayout extends org.apache.log4j.Layout {
				public static class: java.lang.Class<org.apache.log4j.HTMLLayout>;
				public BUF_SIZE: number;
				public MAX_CAPACITY: number;
				public static LOCATION_INFO_OPTION: string;
				public static TITLE_OPTION: string;
				public getContentType(): string;
				public format(param0: org.apache.log4j.spi.LoggingEvent): string;
				public setLocationInfo(param0: boolean): void;
				public getLocationInfo(): boolean;
				public ignoresThrowable(): boolean;
				public getFooter(): string;
				public getHeader(): string;
				public setTitle(param0: string): void;
				public getTitle(): string;
				public activateOptions(): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class Hierarchy extends java.lang.Object implements org.apache.log4j.spi.LoggerRepository, org.apache.log4j.spi.RendererSupport, org.apache.log4j.spi.ThrowableRendererSupport {
				public static class: java.lang.Class<org.apache.log4j.Hierarchy>;
				public getRootLogger(): org.apache.log4j.Logger;
				public getLogger(param0: string): org.apache.log4j.Logger;
				/** @deprecated */
				public getCurrentCategories(): java.util.Enumeration<any>;
				public setThreshold(param0: string): void;
				public setThrowableRenderer(param0: org.apache.log4j.spi.ThrowableRenderer): void;
				public constructor(param0: org.apache.log4j.Logger);
				public shutdown(): void;
				public getThreshold(): org.apache.log4j.Level;
				public clear(): void;
				public addRenderer(param0: java.lang.Class<any>, param1: org.apache.log4j.or.ObjectRenderer): void;
				public addHierarchyEventListener(param0: org.apache.log4j.spi.HierarchyEventListener): void;
				public getRendererMap(): org.apache.log4j.or.RendererMap;
				/** @deprecated */
				public setDisableOverride(param0: string): void;
				public fireAddAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
				public exists(param0: string): org.apache.log4j.Logger;
				/** @deprecated */
				public overrideAsNeeded(param0: string): void;
				public setThreshold(param0: org.apache.log4j.Level): void;
				public emitNoAppenderWarning(param0: org.apache.log4j.Category): void;
				public getThrowableRenderer(): org.apache.log4j.spi.ThrowableRenderer;
				public resetConfiguration(): void;
				public getLogger(param0: string, param1: org.apache.log4j.spi.LoggerFactory): org.apache.log4j.Logger;
				public isDisabled(param0: number): boolean;
				public getCurrentCategories(): java.util.Enumeration<any>;
				public getCurrentLoggers(): java.util.Enumeration<any>;
				public setRenderer(param0: java.lang.Class<any>, param1: org.apache.log4j.or.ObjectRenderer): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export abstract class Layout extends java.lang.Object implements org.apache.log4j.spi.OptionHandler {
				public static class: java.lang.Class<org.apache.log4j.Layout>;
				public static LINE_SEP: string;
				public static LINE_SEP_LEN: number;
				public getContentType(): string;
				public format(param0: org.apache.log4j.spi.LoggingEvent): string;
				public ignoresThrowable(): boolean;
				public getFooter(): string;
				public getHeader(): string;
				public activateOptions(): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class Level extends org.apache.log4j.Priority implements java.io.Serializable {
				public static class: java.lang.Class<org.apache.log4j.Level>;
				public static TRACE_INT: number;
				public static OFF: org.apache.log4j.Level;
				public static FATAL: org.apache.log4j.Level;
				public static ERROR: org.apache.log4j.Level;
				public static WARN: org.apache.log4j.Level;
				public static INFO: org.apache.log4j.Level;
				public static DEBUG: org.apache.log4j.Level;
				public static TRACE: org.apache.log4j.Level;
				public static ALL: org.apache.log4j.Level;
				public static toLevel(param0: number): org.apache.log4j.Level;
				public static toLevel(param0: string): org.apache.log4j.Level;
				public static toLevel(param0: number, param1: org.apache.log4j.Level): org.apache.log4j.Level;
				public static toLevel(param0: string, param1: org.apache.log4j.Level): org.apache.log4j.Level;
				public constructor(param0: number, param1: string, param2: number);
				public constructor();
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class LogMF extends org.apache.log4j.LogXF {
				public static class: java.lang.Class<org.apache.log4j.LogMF>;
				public static trace(param0: org.apache.log4j.Logger, param1: java.lang.Throwable, param2: string, param3: any[]): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: number): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: any): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: number): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: number): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: string): void;
				public static fatal(param0: org.apache.log4j.Logger, param1: java.lang.Throwable, param2: string, param3: any[]): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: java.lang.Throwable, param3: string, param4: any[]): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: any, param4: any): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: any): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any, param5: any): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: string): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: any, param4: any, param5: any): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: any, param5: any, param6: any): void;
				public static error(param0: org.apache.log4j.Logger, param1: java.lang.Throwable, param2: string, param3: any[]): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any, param5: any): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any, param5: any): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: any[]): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: string): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: boolean): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: any, param5: any): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: boolean): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: number): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: number): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: any[]): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: any[]): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any): void;
				public static fatal(param0: org.apache.log4j.Logger, param1: string, param2: any[]): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: boolean): void;
				public static warn(param0: org.apache.log4j.Logger, param1: java.lang.Throwable, param2: string, param3: any[]): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: any): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any, param5: any): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: java.lang.Throwable, param3: string, param4: string, param5: any[]): void;
				public static error(param0: org.apache.log4j.Logger, param1: string, param2: any[]): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: number): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: any): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: boolean): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: any[]): void;
				public static debug(param0: org.apache.log4j.Logger, param1: java.lang.Throwable, param2: string, param3: any[]): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: any): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: boolean): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: any[]): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: boolean): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: string): void;
				public static info(param0: org.apache.log4j.Logger, param1: java.lang.Throwable, param2: string, param3: any[]): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: any, param5: any, param6: any, param7: any): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: any): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: string): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: any[]): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: any, param4: any, param5: any, param6: any): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class LogManager extends java.lang.Object {
				public static class: java.lang.Class<org.apache.log4j.LogManager>;
				public static DEFAULT_CONFIGURATION_FILE: string;
				public static DEFAULT_CONFIGURATION_KEY: string;
				public static CONFIGURATOR_CLASS_KEY: string;
				public static DEFAULT_INIT_OVERRIDE_KEY: string;
				public static getLogger(param0: string): org.apache.log4j.Logger;
				public static getRootLogger(): org.apache.log4j.Logger;
				public static shutdown(): void;
				public static getLogger(param0: java.lang.Class<any>): org.apache.log4j.Logger;
				public static getCurrentLoggers(): java.util.Enumeration<any>;
				public static exists(param0: string): org.apache.log4j.Logger;
				public static getLogger(param0: string, param1: org.apache.log4j.spi.LoggerFactory): org.apache.log4j.Logger;
				public static resetConfiguration(): void;
				public static setRepositorySelector(param0: org.apache.log4j.spi.RepositorySelector, param1: any): void;
				public constructor();
				public static getLoggerRepository(): org.apache.log4j.spi.LoggerRepository;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class LogSF extends org.apache.log4j.LogXF {
				public static class: java.lang.Class<org.apache.log4j.LogSF>;
				public static trace(param0: org.apache.log4j.Logger, param1: java.lang.Throwable, param2: string, param3: any[]): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: number): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: any): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: number): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: number): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: string): void;
				public static fatal(param0: org.apache.log4j.Logger, param1: java.lang.Throwable, param2: string, param3: any[]): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: java.lang.Throwable, param3: string, param4: any[]): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: any, param4: any): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: any): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any, param5: any): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: string): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: any, param4: any, param5: any): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: any, param5: any, param6: any): void;
				public static error(param0: org.apache.log4j.Logger, param1: java.lang.Throwable, param2: string, param3: any[]): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any, param5: any): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any, param5: any): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: any[]): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: string): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: boolean): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: any, param5: any): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: boolean): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: number): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: number): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: any[]): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: any[]): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any): void;
				public static fatal(param0: org.apache.log4j.Logger, param1: string, param2: any[]): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: boolean): void;
				public static warn(param0: org.apache.log4j.Logger, param1: java.lang.Throwable, param2: string, param3: any[]): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: any): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any, param5: any): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: java.lang.Throwable, param3: string, param4: string, param5: any[]): void;
				public static error(param0: org.apache.log4j.Logger, param1: string, param2: any[]): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: number): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: any): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: boolean): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: any[]): void;
				public static debug(param0: org.apache.log4j.Logger, param1: java.lang.Throwable, param2: string, param3: any[]): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: any): void;
				public static info(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any, param4: any): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: boolean): void;
				public static debug(param0: org.apache.log4j.Logger, param1: string, param2: any[]): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: boolean): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: any, param3: any): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: string): void;
				public static info(param0: org.apache.log4j.Logger, param1: java.lang.Throwable, param2: string, param3: any[]): void;
				public static logrb(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: string, param4: any, param5: any, param6: any, param7: any): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: any): void;
				public static trace(param0: org.apache.log4j.Logger, param1: string, param2: string): void;
				public static warn(param0: org.apache.log4j.Logger, param1: string, param2: any[]): void;
				public static log(param0: org.apache.log4j.Logger, param1: org.apache.log4j.Level, param2: string, param3: any, param4: any, param5: any, param6: any): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export abstract class LogXF extends java.lang.Object {
				public static class: java.lang.Class<org.apache.log4j.LogXF>;
				public static TRACE: org.apache.log4j.Level;
				public static valueOf(param0: number): java.lang.Double;
				public static exiting(param0: org.apache.log4j.Logger, param1: string, param2: string, param3: any): void;
				public static valueOf(param0: number): java.lang.Float;
				public static toArray(param0: any, param1: any): any[];
				public static entering(param0: org.apache.log4j.Logger, param1: string, param2: string, param3: string): void;
				public constructor();
				public static entering(param0: org.apache.log4j.Logger, param1: string, param2: string, param3: any[]): void;
				public static valueOf(param0: number): java.lang.Integer;
				public static valueOf(param0: number): java.lang.Byte;
				public static valueOf(param0: boolean): java.lang.Boolean;
				public static exiting(param0: org.apache.log4j.Logger, param1: string, param2: string): void;
				public static toArray(param0: any, param1: any, param2: any): any[];
				public static valueOf(param0: number): java.lang.Short;
				public static entering(param0: org.apache.log4j.Logger, param1: string, param2: string, param3: any): void;
				public static toArray(param0: any): any[];
				public static entering(param0: org.apache.log4j.Logger, param1: string, param2: string): void;
				public static toArray(param0: any, param1: any, param2: any, param3: any): any[];
				public static throwing(param0: org.apache.log4j.Logger, param1: string, param2: string, param3: java.lang.Throwable): void;
				public static valueOf(param0: string): java.lang.Character;
				public static exiting(param0: org.apache.log4j.Logger, param1: string, param2: string, param3: string): void;
				public static valueOf(param0: number): java.lang.Long;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class Logger extends org.apache.log4j.Category {
				public static class: java.lang.Class<org.apache.log4j.Logger>;
				public removeAppender(param0: org.apache.log4j.Appender): void;
				public removeAppender(param0: string): void;
				public trace(param0: any, param1: java.lang.Throwable): void;
				public removeAllAppenders(): void;
				public getAllAppenders(): java.util.Enumeration<any>;
				public isAttached(param0: org.apache.log4j.Appender): boolean;
				public trace(param0: any): void;
				public constructor(param0: string);
				public static getLogger(param0: string): org.apache.log4j.Logger;
				public static getRootLogger(): org.apache.log4j.Logger;
				public static getLogger(param0: java.lang.Class<any>): org.apache.log4j.Logger;
				public getAppender(param0: string): org.apache.log4j.Appender;
				public static getLogger(param0: string, param1: org.apache.log4j.spi.LoggerFactory): org.apache.log4j.Logger;
				public isTraceEnabled(): boolean;
				public addAppender(param0: org.apache.log4j.Appender): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class MDC extends java.lang.Object {
				public static class: java.lang.Class<org.apache.log4j.MDC>;
				public static clear(): void;
				public static put(param0: string, param1: any): void;
				public static getContext(): java.util.Hashtable<any,any>;
				public static get(param0: string): any;
				public static remove(param0: string): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class NDC extends java.lang.Object {
				public static class: java.lang.Class<org.apache.log4j.NDC>;
				public static cloneStack(): java.util.Stack<any>;
				public static clear(): void;
				public static get(): string;
				public static remove(): void;
				public static inherit(param0: java.util.Stack<any>): void;
				public static setMaxDepth(param0: number): void;
				public static getDepth(): number;
				public static push(param0: string): void;
				public static pop(): string;
				public static peek(): string;
			}
			export module NDC {
				export class DiagnosticContext extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.NDC.DiagnosticContext>;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class NameValue extends java.lang.Object {
				public static class: java.lang.Class<org.apache.log4j.NameValue>;
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class PatternLayout extends org.apache.log4j.Layout {
				public static class: java.lang.Class<org.apache.log4j.PatternLayout>;
				public static DEFAULT_CONVERSION_PATTERN: string;
				public static TTCC_CONVERSION_PATTERN: string;
				public BUF_SIZE: number;
				public MAX_CAPACITY: number;
				public format(param0: org.apache.log4j.spi.LoggingEvent): string;
				public ignoresThrowable(): boolean;
				public setConversionPattern(param0: string): void;
				public getConversionPattern(): string;
				public constructor(param0: string);
				public activateOptions(): void;
				public createPatternParser(param0: string): org.apache.log4j.helpers.PatternParser;
				public constructor();
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class Priority extends java.lang.Object {
				public static class: java.lang.Class<org.apache.log4j.Priority>;
				public static OFF_INT: number;
				public static FATAL_INT: number;
				public static ERROR_INT: number;
				public static WARN_INT: number;
				public static INFO_INT: number;
				public static DEBUG_INT: number;
				public static ALL_INT: number;
				public static FATAL: org.apache.log4j.Priority;
				public static ERROR: org.apache.log4j.Priority;
				public static WARN: org.apache.log4j.Priority;
				public static INFO: org.apache.log4j.Priority;
				public static DEBUG: org.apache.log4j.Priority;
				/** @deprecated */
				public static getAllPossiblePriorities(): Array<org.apache.log4j.Priority>;
				public toInt(): number;
				public isGreaterOrEqual(param0: org.apache.log4j.Priority): boolean;
				public equals(param0: any): boolean;
				public constructor(param0: number, param1: string, param2: number);
				/** @deprecated */
				public static toPriority(param0: number, param1: org.apache.log4j.Priority): org.apache.log4j.Priority;
				public toString(): string;
				/** @deprecated */
				public static toPriority(param0: string): org.apache.log4j.Priority;
				/** @deprecated */
				public static toPriority(param0: number): org.apache.log4j.Priority;
				/** @deprecated */
				public static toPriority(param0: string, param1: org.apache.log4j.Priority): org.apache.log4j.Priority;
				public constructor();
				public getSyslogEquivalent(): number;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class PropertyConfigurator extends java.lang.Object implements org.apache.log4j.spi.Configurator {
				public static class: java.lang.Class<org.apache.log4j.PropertyConfigurator>;
				public registry: java.util.Hashtable<any,any>;
				public loggerFactory: org.apache.log4j.spi.LoggerFactory;
				public static LOGGER_FACTORY_KEY: string;
				public static configure(param0: java.io.InputStream): void;
				public static configure(param0: java.net.URL): void;
				public doConfigure(param0: string, param1: org.apache.log4j.spi.LoggerRepository): void;
				public configureLoggerFactory(param0: java.util.Properties): void;
				public static configure(param0: string): void;
				public static configureAndWatch(param0: string): void;
				public static configure(param0: java.util.Properties): void;
				public doConfigure(param0: java.util.Properties, param1: org.apache.log4j.spi.LoggerRepository): void;
				public doConfigure(param0: java.io.InputStream, param1: org.apache.log4j.spi.LoggerRepository): void;
				public constructor();
				public static configureAndWatch(param0: string, param1: number): void;
				public doConfigure(param0: java.net.URL, param1: org.apache.log4j.spi.LoggerRepository): void;
				public parseCatsAndRenderers(param0: java.util.Properties, param1: org.apache.log4j.spi.LoggerRepository): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class PropertyWatchdog extends org.apache.log4j.helpers.FileWatchdog {
				public static class: java.lang.Class<org.apache.log4j.PropertyWatchdog>;
				public doOnChange(): void;
				public run(): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class ProvisionNode extends java.util.Vector {
				public static class: java.lang.Class<org.apache.log4j.ProvisionNode>;
				public parallelStream(): java.util.stream.Stream<any>;
				public indexOf(param0: any): number;
				public remove(param0: number): any;
				public addAll(param0: java.util.Collection<any>): boolean;
				public listIterator(): java.util.ListIterator<any>;
				public removeIf(param0: any /* any*/): boolean;
				public add(param0: number, param1: any): void;
				public toArray(): any[];
				public set(param0: number, param1: any): any;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public addAll(param0: number, param1: java.util.Collection<any>): boolean;
				public indexOf(param0: any, param1: number): number;
				public isEmpty(): boolean;
				public sort(param0: java.util.Comparator<any>): void;
				public lastIndexOf(param0: any): number;
				public listIterator(param0: number): java.util.ListIterator<any>;
				public remove(param0: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public subList(param0: number, param1: number): java.util.List<any>;
				public stream(): java.util.stream.Stream<any>;
				public toArray(param0: any[]): any[];
				public iterator(): java.util.Iterator<any>;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public lastIndexOf(param0: any, param1: number): number;
				public get(param0: number): any;
				public size(): number;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public replaceAll(param0: any /* any*/): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class RollingCalendar extends java.util.GregorianCalendar {
				public static class: java.lang.Class<org.apache.log4j.RollingCalendar>;
				public getNextCheckDate(param0: java.util.Date): java.util.Date;
				public getNextCheckMillis(param0: java.util.Date): number;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class RollingFileAppender extends org.apache.log4j.FileAppender {
				public static class: java.lang.Class<org.apache.log4j.RollingFileAppender>;
				public maxFileSize: number;
				public maxBackupIndex: number;
				public constructor(param0: org.apache.log4j.Layout, param1: string, param2: boolean);
				public setMaxBackupIndex(param0: number): void;
				public rollOver(): void;
				public setFile(param0: string): void;
				public setMaxFileSize(param0: string): void;
				public constructor(param0: org.apache.log4j.Layout, param1: string);
				public constructor(param0: boolean);
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public constructor(param0: org.apache.log4j.Layout, param1: string, param2: boolean, param3: boolean, param4: number);
				public constructor();
				public constructor(param0: org.apache.log4j.Layout, param1: java.io.Writer);
				public setMaximumFileSize(param0: number): void;
				public getMaxBackupIndex(): number;
				public clearFilters(): void;
				public setName(param0: string): void;
				public close(): void;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public requiresLayout(): boolean;
				public getFilter(): org.apache.log4j.spi.Filter;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public constructor(param0: org.apache.log4j.Layout, param1: java.io.OutputStream);
				public subAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public setFile(param0: string, param1: boolean, param2: boolean, param3: number): void;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
				public setQWForFiles(param0: java.io.Writer): void;
				public getMaximumFileSize(): number;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class SimpleLayout extends org.apache.log4j.Layout {
				public static class: java.lang.Class<org.apache.log4j.SimpleLayout>;
				public format(param0: org.apache.log4j.spi.LoggingEvent): string;
				public ignoresThrowable(): boolean;
				public activateOptions(): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class SortedKeyEnumeration extends java.lang.Object implements java.util.Enumeration<any> {
				public static class: java.lang.Class<org.apache.log4j.SortedKeyEnumeration>;
				public hasMoreElements(): boolean;
				public constructor(param0: java.util.Hashtable<any,any>);
				public nextElement(): any;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class TTCCLayout extends org.apache.log4j.helpers.DateLayout {
				public static class: java.lang.Class<org.apache.log4j.TTCCLayout>;
				public buf: java.lang.StringBuffer;
				public getThreadPrinting(): boolean;
				public setContextPrinting(param0: boolean): void;
				public format(param0: org.apache.log4j.spi.LoggingEvent): string;
				public setThreadPrinting(param0: boolean): void;
				public ignoresThrowable(): boolean;
				public getCategoryPrefixing(): boolean;
				public getContextPrinting(): boolean;
				public setCategoryPrefixing(param0: boolean): void;
				public constructor(param0: string);
				public activateOptions(): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class WriterAppender extends org.apache.log4j.AppenderSkeleton {
				public static class: java.lang.Class<org.apache.log4j.WriterAppender>;
				public immediateFlush: boolean;
				public encoding: string;
				public qw: org.apache.log4j.helpers.QuietWriter;
				public writeFooter(): void;
				public constructor(param0: boolean);
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public shouldFlush(param0: org.apache.log4j.spi.LoggingEvent): boolean;
				public constructor();
				public writeHeader(): void;
				public reset(): void;
				public setImmediateFlush(param0: boolean): void;
				public getImmediateFlush(): boolean;
				public append(param0: org.apache.log4j.spi.LoggingEvent): void;
				public checkEntryConditions(): boolean;
				public constructor(param0: org.apache.log4j.Layout, param1: java.io.Writer);
				public clearFilters(): void;
				public closeWriter(): void;
				public setEncoding(param0: string): void;
				public getEncoding(): string;
				public setName(param0: string): void;
				public close(): void;
				public requiresLayout(): boolean;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public getFilter(): org.apache.log4j.spi.Filter;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public constructor(param0: org.apache.log4j.Layout, param1: java.io.OutputStream);
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public subAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public activateOptions(): void;
				public createWriter(param0: java.io.OutputStream): java.io.OutputStreamWriter;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
				public setWriter(param0: java.io.Writer): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class ControlPanel extends javax.swing.JPanel {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.ControlPanel>;
					public getAccessibleContext(): javax.accessibility.AccessibleContext;
					/** @deprecated */
					public postEvent(param0: java.awt.Event): boolean;
					public remove(param0: java.awt.MenuComponent): void;
					public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
					public getTransferHandler(): javax.swing.TransferHandler;
					public remove(param0: number): void;
					public remove(param0: java.awt.Component): void;
					public getFont(): java.awt.Font;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class DetailPanel extends javax.swing.JPanel implements javax.swing.event.ListSelectionListener {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.DetailPanel>;
					public valueChanged(param0: javax.swing.event.ListSelectionEvent): void;
					public getAccessibleContext(): javax.accessibility.AccessibleContext;
					/** @deprecated */
					public postEvent(param0: java.awt.Event): boolean;
					public remove(param0: java.awt.MenuComponent): void;
					public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
					public getTransferHandler(): javax.swing.TransferHandler;
					public remove(param0: number): void;
					public remove(param0: java.awt.Component): void;
					public getFont(): java.awt.Font;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class EventDetails extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.EventDetails>;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class ExitAction extends javax.swing.AbstractAction {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.ExitAction>;
					public static INSTANCE: org.apache.log4j.chainsaw.ExitAction;
					public setEnabled(param0: boolean): void;
					public removePropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
					public addPropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
					public actionPerformed(param0: java.awt.event.ActionEvent): void;
					public getValue(param0: string): any;
					public putValue(param0: string, param1: any): void;
					public isEnabled(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class LoadXMLAction extends javax.swing.AbstractAction {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.LoadXMLAction>;
					public setEnabled(param0: boolean): void;
					public removePropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
					public addPropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
					public actionPerformed(param0: java.awt.event.ActionEvent): void;
					public getValue(param0: string): any;
					public putValue(param0: string, param1: any): void;
					public isEnabled(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class LoggingReceiver extends java.lang.Thread {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.LoggingReceiver>;
					public run(): void;
				}
				export module LoggingReceiver {
					export class Slurper extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<org.apache.log4j.chainsaw.LoggingReceiver.Slurper>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class Main extends javax.swing.JFrame {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.Main>;
					public static PORT_PROP_NAME: string;
					public setGlassPane(param0: java.awt.Component): void;
					public setLayeredPane(param0: javax.swing.JLayeredPane): void;
					public getContentPane(): java.awt.Container;
					public getGlassPane(): java.awt.Component;
					public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
					public getTransferHandler(): javax.swing.TransferHandler;
					public getLayeredPane(): javax.swing.JLayeredPane;
					public static main(param0: string[]): void;
					public setContentPane(param0: java.awt.Container): void;
					public getAccessibleContext(): javax.accessibility.AccessibleContext;
					/** @deprecated */
					public postEvent(param0: java.awt.Event): boolean;
					public remove(param0: java.awt.MenuComponent): void;
					public getRootPane(): javax.swing.JRootPane;
					public remove(param0: number): void;
					public remove(param0: java.awt.Component): void;
					public getFont(): java.awt.Font;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class MyTableModel extends javax.swing.table.AbstractTableModel {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.MyTableModel>;
					public getColumnCount(): number;
					public setThreadFilter(param0: string): void;
					public isCellEditable(param0: number, param1: number): boolean;
					public isPaused(): boolean;
					public getValueAt(param0: number, param1: number): any;
					public setCategoryFilter(param0: string): void;
					public setPriorityFilter(param0: org.apache.log4j.Priority): void;
					public toggle(): void;
					public getEventDetails(param0: number): org.apache.log4j.chainsaw.EventDetails;
					public getRowCount(): number;
					public getColumnName(param0: number): string;
					public getColumnClass(param0: number): java.lang.Class<any>;
					public setMessageFilter(param0: string): void;
					public addEvent(param0: org.apache.log4j.chainsaw.EventDetails): void;
					public setNDCFilter(param0: string): void;
					public clear(): void;
					public setValueAt(param0: any, param1: number, param2: number): void;
					public addTableModelListener(param0: javax.swing.event.TableModelListener): void;
					public removeTableModelListener(param0: javax.swing.event.TableModelListener): void;
					public getColumnClass(param0: number): java.lang.Class<any>;
				}
				export module MyTableModel {
					export class Processor extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<org.apache.log4j.chainsaw.MyTableModel.Processor>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class XMLFileHandler extends org.xml.sax.helpers.DefaultHandler {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.XMLFileHandler>;
					public startPrefixMapping(param0: string, param1: string): void;
					public skippedEntity(param0: string): void;
					public endDocument(): void;
					public startElement(param0: string, param1: string, param2: string, param3: org.xml.sax.Attributes): void;
					public error(param0: org.xml.sax.SAXParseException): void;
					public endElement(param0: string, param1: string, param2: string): void;
					public characters(param0: string[], param1: number, param2: number): void;
					public startDocument(): void;
					public warning(param0: org.xml.sax.SAXParseException): void;
					public ignorableWhitespace(param0: string[], param1: number, param2: number): void;
					public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;
					public processingInstruction(param0: string, param1: string): void;
					public fatalError(param0: org.xml.sax.SAXParseException): void;
					public endPrefixMapping(param0: string): void;
					public notationDecl(param0: string, param1: string, param2: string): void;
					public unparsedEntityDecl(param0: string, param1: string, param2: string, param3: string): void;
					public setDocumentLocator(param0: org.xml.sax.Locator): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module config {
				export class PropertyGetter extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.config.PropertyGetter>;
					public static NULL_ARG: any[];
					public obj: any;
					public props: Array<java.beans.PropertyDescriptor>;
					public static getProperties(param0: any, param1: org.apache.log4j.config.PropertyGetter.PropertyCallback, param2: string): void;
					public isHandledType(param0: java.lang.Class<any>): boolean;
					public constructor(param0: any);
					public getProperties(param0: org.apache.log4j.config.PropertyGetter.PropertyCallback, param1: string): void;
				}
				export module PropertyGetter {
					export class PropertyCallback extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.config.PropertyGetter.PropertyCallback>;
						/**
						 * Constructs a new instance of the org.apache.log4j.config.PropertyGetter$PropertyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							foundProperty(param0: any, param1: string, param2: string, param3: any): void;
						});
						public constructor();
						public foundProperty(param0: any, param1: string, param2: string, param3: any): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module config {
				export class PropertyPrinter extends java.lang.Object implements org.apache.log4j.config.PropertyGetter.PropertyCallback {
					public static class: java.lang.Class<org.apache.log4j.config.PropertyPrinter>;
					public numAppenders: number;
					public appenderNames: java.util.Hashtable<any,any>;
					public layoutNames: java.util.Hashtable<any,any>;
					public out: java.io.PrintWriter;
					public doCapitalize: boolean;
					public printOptions(param0: java.io.PrintWriter, param1: org.apache.log4j.Category): void;
					public genAppName(): string;
					public printOptions(param0: java.io.PrintWriter, param1: any, param2: string): void;
					public foundProperty(param0: any, param1: string, param2: string, param3: any): void;
					public print(param0: java.io.PrintWriter): void;
					public constructor(param0: java.io.PrintWriter);
					public constructor(param0: java.io.PrintWriter, param1: boolean);
					public static capitalize(param0: string): string;
					public isGenAppName(param0: string): boolean;
					public printOptions(param0: java.io.PrintWriter, param1: org.apache.log4j.Logger): void;
					public static main(param0: string[]): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module config {
				export class PropertySetter extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.config.PropertySetter>;
					public obj: any;
					public props: Array<java.beans.PropertyDescriptor>;
					public activate(): void;
					public static setProperties(param0: any, param1: java.util.Properties, param2: string): void;
					public setProperty(param0: string, param1: string): void;
					public convertArg(param0: string, param1: java.lang.Class<any>): any;
					public getPropertyDescriptor(param0: string): java.beans.PropertyDescriptor;
					public constructor(param0: any);
					public setProperties(param0: java.util.Properties, param1: string): void;
					public introspect(): void;
					public setProperty(param0: java.beans.PropertyDescriptor, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module config {
				export class PropertySetterException extends java.lang.Exception {
					public static class: java.lang.Class<org.apache.log4j.config.PropertySetterException>;
					public rootCause: java.lang.Throwable;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
					public getMessage(): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class AbsoluteTimeDateFormat extends java.text.DateFormat {
					public static class: java.lang.Class<org.apache.log4j.helpers.AbsoluteTimeDateFormat>;
					public static ABS_TIME_DATE_FORMAT: string;
					public static DATE_AND_TIME_DATE_FORMAT: string;
					public static ISO8601_DATE_FORMAT: string;
					public constructor();
					public format(param0: java.util.Date): string;
					public constructor(param0: java.util.TimeZone);
					public format(param0: any, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
					public parse(param0: string): java.util.Date;
					public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
					public format(param0: java.util.Date, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
					public format(param0: any): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class AppenderAttachableImpl extends java.lang.Object implements org.apache.log4j.spi.AppenderAttachable {
					public static class: java.lang.Class<org.apache.log4j.helpers.AppenderAttachableImpl>;
					public appenderList: java.util.Vector;
					public getAppender(param0: string): org.apache.log4j.Appender;
					public removeAllAppenders(): void;
					public addAppender(param0: org.apache.log4j.Appender): void;
					public isAttached(param0: org.apache.log4j.Appender): boolean;
					public constructor();
					public removeAppender(param0: org.apache.log4j.Appender): void;
					public appendLoopOnAppenders(param0: org.apache.log4j.spi.LoggingEvent): number;
					public getAllAppenders(): java.util.Enumeration<any>;
					public removeAppender(param0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class BoundedFIFO extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.helpers.BoundedFIFO>;
					public get(): org.apache.log4j.spi.LoggingEvent;
					public isFull(): boolean;
					public put(param0: org.apache.log4j.spi.LoggingEvent): void;
					public wasFull(): boolean;
					public getMaxSize(): number;
					public resize(param0: number): void;
					public wasEmpty(): boolean;
					public constructor(param0: number);
					public length(): number;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class CountingQuietWriter extends org.apache.log4j.helpers.QuietWriter {
					public static class: java.lang.Class<org.apache.log4j.helpers.CountingQuietWriter>;
					public count: number;
					public setCount(param0: number): void;
					public write(param0: string[]): void;
					public append(param0: string): java.lang.Appendable;
					public getCount(): number;
					public constructor(param0: any);
					public write(param0: number): void;
					public append(param0: string): java.io.Writer;
					public flush(): void;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public constructor(param0: java.io.Writer, param1: org.apache.log4j.spi.ErrorHandler);
					public write(param0: string, param1: number, param2: number): void;
					public append(param0: string, param1: number, param2: number): java.io.Writer;
					public write(param0: string): void;
					public constructor();
					public constructor(param0: java.io.Writer);
					public write(param0: string[], param1: number, param2: number): void;
					public close(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class CyclicBuffer extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.helpers.CyclicBuffer>;
					public get(): org.apache.log4j.spi.LoggingEvent;
					public add(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getMaxSize(): number;
					public get(param0: number): org.apache.log4j.spi.LoggingEvent;
					public resize(param0: number): void;
					public constructor(param0: number);
					public length(): number;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export abstract class DateLayout extends org.apache.log4j.Layout {
					public static class: java.lang.Class<org.apache.log4j.helpers.DateLayout>;
					public static NULL_DATE_FORMAT: string;
					public static RELATIVE_TIME_DATE_FORMAT: string;
					public pos: java.text.FieldPosition;
					public static DATE_FORMAT_OPTION: string;
					public static TIMEZONE_OPTION: string;
					public date: java.util.Date;
					public dateFormat(param0: java.lang.StringBuffer, param1: org.apache.log4j.spi.LoggingEvent): void;
					public constructor();
					/** @deprecated */
					public setOption(param0: string, param1: string): void;
					public getDateFormat(): string;
					public setDateFormat(param0: string, param1: java.util.TimeZone): void;
					public setTimeZone(param0: string): void;
					public setDateFormat(param0: string): void;
					public activateOptions(): void;
					public getTimeZone(): string;
					/** @deprecated */
					public getOptionStrings(): string[];
					public setDateFormat(param0: java.text.DateFormat, param1: java.util.TimeZone): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class DateTimeDateFormat extends org.apache.log4j.helpers.AbsoluteTimeDateFormat {
					public static class: java.lang.Class<org.apache.log4j.helpers.DateTimeDateFormat>;
					public constructor();
					public format(param0: java.util.Date): string;
					public constructor(param0: java.util.TimeZone);
					public format(param0: any, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
					public parse(param0: string): java.util.Date;
					public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
					public format(param0: java.util.Date, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
					public format(param0: any): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export abstract class FileWatchdog extends java.lang.Thread {
					public static class: java.lang.Class<org.apache.log4j.helpers.FileWatchdog>;
					public static DEFAULT_DELAY: number;
					public filename: string;
					public delay: number;
					public constructor(param0: java.lang.ThreadGroup, param1: string);
					public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string, param3: number);
					public checkAndConfigure(): void;
					public constructor(param0: java.lang.Runnable);
					public doOnChange(): void;
					public constructor(param0: string);
					public constructor();
					public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable);
					public run(): void;
					public constructor(param0: java.lang.Runnable, param1: string);
					public setDelay(param0: number): void;
					public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class FormattingInfo extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.helpers.FormattingInfo>;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class ISO8601DateFormat extends org.apache.log4j.helpers.AbsoluteTimeDateFormat {
					public static class: java.lang.Class<org.apache.log4j.helpers.ISO8601DateFormat>;
					public constructor();
					public format(param0: java.util.Date): string;
					public constructor(param0: java.util.TimeZone);
					public format(param0: any, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
					public parse(param0: string): java.util.Date;
					public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
					public format(param0: java.util.Date, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
					public format(param0: any): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class Loader extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.helpers.Loader>;
					public static getResource(param0: string): java.net.URL;
					public constructor();
					public static loadClass(param0: string): java.lang.Class<any>;
					/** @deprecated */
					public static getResource(param0: string, param1: java.lang.Class<any>): java.net.URL;
					public static isJava1(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class LogLog extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.helpers.LogLog>;
					public static DEBUG_KEY: string;
					public static CONFIG_DEBUG_KEY: string;
					public static debugEnabled: boolean;
					public static warn(param0: string, param1: java.lang.Throwable): void;
					public static debug(param0: string): void;
					public static error(param0: string): void;
					public constructor();
					public static debug(param0: string, param1: java.lang.Throwable): void;
					public static setInternalDebugging(param0: boolean): void;
					public static warn(param0: string): void;
					public static error(param0: string, param1: java.lang.Throwable): void;
					public static setQuietMode(param0: boolean): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class MDCKeySetExtractor extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.helpers.MDCKeySetExtractor>;
					public static INSTANCE: org.apache.log4j.helpers.MDCKeySetExtractor;
					public getPropertyKeySet(param0: org.apache.log4j.spi.LoggingEvent): java.util.Set<any>;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class NullEnumeration extends java.lang.Object implements java.util.Enumeration<any> {
					public static class: java.lang.Class<org.apache.log4j.helpers.NullEnumeration>;
					public static getInstance(): org.apache.log4j.helpers.NullEnumeration;
					public hasMoreElements(): boolean;
					public nextElement(): any;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class OnlyOnceErrorHandler extends java.lang.Object implements org.apache.log4j.spi.ErrorHandler {
					public static class: java.lang.Class<org.apache.log4j.helpers.OnlyOnceErrorHandler>;
					public error(param0: string, param1: java.lang.Exception, param2: number): void;
					public constructor();
					public setLogger(param0: org.apache.log4j.Logger): void;
					public activateOptions(): void;
					public setAppender(param0: org.apache.log4j.Appender): void;
					public error(param0: string, param1: java.lang.Exception, param2: number, param3: org.apache.log4j.spi.LoggingEvent): void;
					public setBackupAppender(param0: org.apache.log4j.Appender): void;
					public error(param0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class OptionConverter extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.helpers.OptionConverter>;
					public static selectAndConfigure(param0: java.net.URL, param1: string, param2: org.apache.log4j.spi.LoggerRepository): void;
					public static instantiateByClassName(param0: string, param1: java.lang.Class<any>, param2: any): any;
					public static instantiateByKey(param0: java.util.Properties, param1: string, param2: java.lang.Class<any>, param3: any): any;
					public static convertSpecialChars(param0: string): string;
					public static concatanateArrays(param0: string[], param1: string[]): string[];
					public static substVars(param0: string, param1: java.util.Properties): string;
					public static findAndSubst(param0: string, param1: java.util.Properties): string;
					public static toFileSize(param0: string, param1: number): number;
					public static toBoolean(param0: string, param1: boolean): boolean;
					public static getSystemProperty(param0: string, param1: string): string;
					public static toLevel(param0: string, param1: org.apache.log4j.Level): org.apache.log4j.Level;
					public static toInt(param0: string, param1: number): number;
					public static selectAndConfigure(param0: java.io.InputStream, param1: string, param2: org.apache.log4j.spi.LoggerRepository): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export abstract class PatternConverter extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.helpers.PatternConverter>;
					public next: org.apache.log4j.helpers.PatternConverter;
					public constructor(param0: org.apache.log4j.helpers.FormattingInfo);
					public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					public constructor();
					public spacePad(param0: java.lang.StringBuffer, param1: number): void;
					public format(param0: java.lang.StringBuffer, param1: org.apache.log4j.spi.LoggingEvent): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class PatternParser extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser>;
					public currentLiteral: java.lang.StringBuffer;
					public patternLength: number;
					public i: number;
					public formattingInfo: org.apache.log4j.helpers.FormattingInfo;
					public pattern: string;
					public extractPrecisionOption(): number;
					public parse(): org.apache.log4j.helpers.PatternConverter;
					public finalizeConverter(param0: string): void;
					public constructor(param0: string);
					public extractOption(): string;
					public addConverter(param0: org.apache.log4j.helpers.PatternConverter): void;
				}
				export module PatternParser {
					export class BasicPatternConverter extends org.apache.log4j.helpers.PatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.BasicPatternConverter>;
						public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					}
					export class CategoryPatternConverter extends org.apache.log4j.helpers.PatternParser.NamedPatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.CategoryPatternConverter>;
					}
					export class ClassNamePatternConverter extends org.apache.log4j.helpers.PatternParser.NamedPatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.ClassNamePatternConverter>;
					}
					export class DatePatternConverter extends org.apache.log4j.helpers.PatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.DatePatternConverter>;
						public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					}
					export class LiteralPatternConverter extends org.apache.log4j.helpers.PatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.LiteralPatternConverter>;
						public format(param0: java.lang.StringBuffer, param1: org.apache.log4j.spi.LoggingEvent): void;
						public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					}
					export class LocationPatternConverter extends org.apache.log4j.helpers.PatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.LocationPatternConverter>;
						public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					}
					export class MDCPatternConverter extends org.apache.log4j.helpers.PatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.MDCPatternConverter>;
						public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					}
					export abstract class NamedPatternConverter extends org.apache.log4j.helpers.PatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.NamedPatternConverter>;
						public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class QuietWriter extends java.io.FilterWriter {
					public static class: java.lang.Class<org.apache.log4j.helpers.QuietWriter>;
					public errorHandler: org.apache.log4j.spi.ErrorHandler;
					public write(param0: string[]): void;
					public append(param0: string): java.lang.Appendable;
					public constructor(param0: any);
					public write(param0: number): void;
					public flush(): void;
					public append(param0: string): java.io.Writer;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public constructor(param0: java.io.Writer, param1: org.apache.log4j.spi.ErrorHandler);
					public write(param0: string, param1: number, param2: number): void;
					public append(param0: string, param1: number, param2: number): java.io.Writer;
					public write(param0: string): void;
					public constructor();
					public constructor(param0: java.io.Writer);
					public write(param0: string[], param1: number, param2: number): void;
					public close(): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class RelativeTimeDateFormat extends java.text.DateFormat {
					public static class: java.lang.Class<org.apache.log4j.helpers.RelativeTimeDateFormat>;
					public startTime: number;
					public constructor();
					public format(param0: java.util.Date): string;
					public format(param0: any, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
					public parse(param0: string): java.util.Date;
					public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
					public format(param0: java.util.Date, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
					public format(param0: any): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class SyslogQuietWriter extends org.apache.log4j.helpers.QuietWriter {
					public static class: java.lang.Class<org.apache.log4j.helpers.SyslogQuietWriter>;
					public write(param0: string[]): void;
					public append(param0: string): java.lang.Appendable;
					public constructor(param0: any);
					public write(param0: number): void;
					public append(param0: string): java.io.Writer;
					public flush(): void;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public constructor(param0: java.io.Writer, param1: org.apache.log4j.spi.ErrorHandler);
					public write(param0: string, param1: number, param2: number): void;
					public append(param0: string, param1: number, param2: number): java.io.Writer;
					public write(param0: string): void;
					public constructor();
					public constructor(param0: java.io.Writer);
					public write(param0: string[], param1: number, param2: number): void;
					public close(): void;
					public setSyslogFacility(param0: number): void;
					public constructor(param0: java.io.Writer, param1: number, param2: org.apache.log4j.spi.ErrorHandler);
					public setLevel(param0: number): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class SyslogWriter extends java.io.Writer {
					public static class: java.lang.Class<org.apache.log4j.helpers.SyslogWriter>;
					public write(param0: string[]): void;
					public append(param0: string): java.lang.Appendable;
					public constructor(param0: string);
					public constructor(param0: any);
					public write(param0: number): void;
					public flush(): void;
					public append(param0: string): java.io.Writer;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public write(param0: string, param1: number, param2: number): void;
					public append(param0: string, param1: number, param2: number): java.io.Writer;
					public write(param0: string): void;
					public constructor();
					public write(param0: string[], param1: number, param2: number): void;
					public close(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class ThreadLocalMap extends java.lang.InheritableThreadLocal {
					public static class: java.lang.Class<org.apache.log4j.helpers.ThreadLocalMap>;
					public constructor();
					public childValue(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class Transform extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.helpers.Transform>;
					public constructor();
					public static escapeTags(param0: string): string;
					public static appendEscapingCDATA(param0: java.lang.StringBuffer, param1: string): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class UtilLoggingLevel extends org.apache.log4j.Level {
					public static class: java.lang.Class<org.apache.log4j.helpers.UtilLoggingLevel>;
					public static SEVERE_INT: number;
					public static WARNING_INT: number;
					public static CONFIG_INT: number;
					public static FINE_INT: number;
					public static FINER_INT: number;
					public static FINEST_INT: number;
					public static UNKNOWN_INT: number;
					public static SEVERE: org.apache.log4j.helpers.UtilLoggingLevel;
					public static WARNING: org.apache.log4j.helpers.UtilLoggingLevel;
					public static INFO: org.apache.log4j.helpers.UtilLoggingLevel;
					public static CONFIG: org.apache.log4j.helpers.UtilLoggingLevel;
					public static FINE: org.apache.log4j.helpers.UtilLoggingLevel;
					public static FINER: org.apache.log4j.helpers.UtilLoggingLevel;
					public static FINEST: org.apache.log4j.helpers.UtilLoggingLevel;
					public static toLevel(param0: string): org.apache.log4j.Level;
					public static toLevel(param0: number, param1: org.apache.log4j.Level): org.apache.log4j.Level;
					public static toLevel(param0: string, param1: org.apache.log4j.Level): org.apache.log4j.Level;
					public static toLevel(param0: number, param1: org.apache.log4j.helpers.UtilLoggingLevel): org.apache.log4j.helpers.UtilLoggingLevel;
					public constructor();
					public static getAllPossibleLevels(): java.util.List<any>;
					public static toLevel(param0: number): org.apache.log4j.Level;
					public constructor(param0: number, param1: string, param2: number);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module jdbc {
				export class JDBCAppender extends org.apache.log4j.AppenderSkeleton implements org.apache.log4j.Appender {
					public static class: java.lang.Class<org.apache.log4j.jdbc.JDBCAppender>;
					public databaseURL: string;
					public databaseUser: string;
					public databasePassword: string;
					public connection: java.sql.Connection;
					public sqlStatement: string;
					public bufferSize: number;
					public buffer: java.util.ArrayList;
					public removes: java.util.ArrayList;
					public getConnection(): java.sql.Connection;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public finalize(): void;
					public setSql(param0: string): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public flushBuffer(): void;
					public setURL(param0: string): void;
					public getBufferSize(): number;
					public closeConnection(param0: java.sql.Connection): void;
					public getSql(): string;
					public constructor();
					public execute(param0: string): void;
					public close(): void;
					public setLocationInfo(param0: boolean): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public setUser(param0: string): void;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public setPassword(param0: string): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public getURL(): string;
					public getLogStatement(param0: org.apache.log4j.spi.LoggingEvent): string;
					public setName(param0: string): void;
					public getPassword(): string;
					public requiresLayout(): boolean;
					public constructor(param0: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public getName(): string;
					public setBufferSize(param0: number): void;
					public activateOptions(): void;
					public getUser(): string;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public getLocationInfo(): boolean;
					public setDriver(param0: string): void;
					public clearFilters(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module jmx {
				export abstract class AbstractDynamicMBean extends java.lang.Object implements javax.management.DynamicMBean, javax.management.MBeanRegistration {
					public static class: java.lang.Class<org.apache.log4j.jmx.AbstractDynamicMBean>;
					public registerMBean(param0: any, param1: javax.management.ObjectName): void;
					public getAttribute(param0: string): any;
					public static getAppenderName(param0: org.apache.log4j.Appender): string;
					public preRegister(param0: javax.management.MBeanServer, param1: javax.management.ObjectName): javax.management.ObjectName;
					public invoke(param0: string, param1: any[], param2: string[]): any;
					public getLogger(): org.apache.log4j.Logger;
					public getMBeanInfo(): javax.management.MBeanInfo;
					public postDeregister(): void;
					public preDeregister(): void;
					public constructor();
					public postRegister(param0: java.lang.Boolean): void;
					public getAttributes(param0: string[]): javax.management.AttributeList;
					public setAttribute(param0: javax.management.Attribute): void;
					public setAttributes(param0: javax.management.AttributeList): javax.management.AttributeList;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module jmx {
				export class Agent extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.jmx.Agent>;
					/** @deprecated */
					public constructor();
					/** @deprecated */
					public start(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module jmx {
				export class AppenderDynamicMBean extends org.apache.log4j.jmx.AbstractDynamicMBean {
					public static class: java.lang.Class<org.apache.log4j.jmx.AppenderDynamicMBean>;
					public getAttribute(param0: string): any;
					public preRegister(param0: javax.management.MBeanServer, param1: javax.management.ObjectName): javax.management.ObjectName;
					public invoke(param0: string, param1: any[], param2: string[]): any;
					public constructor(param0: org.apache.log4j.Appender);
					public getLogger(): org.apache.log4j.Logger;
					public getMBeanInfo(): javax.management.MBeanInfo;
					public preDeregister(): void;
					public postDeregister(): void;
					public constructor();
					public postRegister(param0: java.lang.Boolean): void;
					public getAttributes(param0: string[]): javax.management.AttributeList;
					public setAttribute(param0: javax.management.Attribute): void;
					public setAttributes(param0: javax.management.AttributeList): javax.management.AttributeList;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module jmx {
				export class HierarchyDynamicMBean extends org.apache.log4j.jmx.AbstractDynamicMBean implements org.apache.log4j.spi.HierarchyEventListener, javax.management.NotificationBroadcaster {
					public static class: java.lang.Class<org.apache.log4j.jmx.HierarchyDynamicMBean>;
					public getNotificationInfo(): Array<javax.management.MBeanNotificationInfo>;
					public getAttribute(param0: string): any;
					public preRegister(param0: javax.management.MBeanServer, param1: javax.management.ObjectName): javax.management.ObjectName;
					public addAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
					public addNotificationListener(param0: javax.management.NotificationListener, param1: javax.management.NotificationFilter, param2: any): void;
					public invoke(param0: string, param1: any[], param2: string[]): any;
					public getLogger(): org.apache.log4j.Logger;
					public getMBeanInfo(): javax.management.MBeanInfo;
					public preDeregister(): void;
					public postDeregister(): void;
					public constructor();
					public postRegister(param0: java.lang.Boolean): void;
					public removeNotificationListener(param0: javax.management.NotificationListener): void;
					public getAttributes(param0: string[]): javax.management.AttributeList;
					public setAttribute(param0: javax.management.Attribute): void;
					public addLoggerMBean(param0: string): javax.management.ObjectName;
					public removeAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
					public setAttributes(param0: javax.management.AttributeList): javax.management.AttributeList;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module jmx {
				export class LayoutDynamicMBean extends org.apache.log4j.jmx.AbstractDynamicMBean {
					public static class: java.lang.Class<org.apache.log4j.jmx.LayoutDynamicMBean>;
					public getAttribute(param0: string): any;
					public preRegister(param0: javax.management.MBeanServer, param1: javax.management.ObjectName): javax.management.ObjectName;
					public invoke(param0: string, param1: any[], param2: string[]): any;
					public getLogger(): org.apache.log4j.Logger;
					public getMBeanInfo(): javax.management.MBeanInfo;
					public preDeregister(): void;
					public postDeregister(): void;
					public constructor();
					public postRegister(param0: java.lang.Boolean): void;
					public getAttributes(param0: string[]): javax.management.AttributeList;
					public constructor(param0: org.apache.log4j.Layout);
					public setAttribute(param0: javax.management.Attribute): void;
					public setAttributes(param0: javax.management.AttributeList): javax.management.AttributeList;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module jmx {
				export class LoggerDynamicMBean extends org.apache.log4j.jmx.AbstractDynamicMBean implements javax.management.NotificationListener {
					public static class: java.lang.Class<org.apache.log4j.jmx.LoggerDynamicMBean>;
					public getAttribute(param0: string): any;
					public preRegister(param0: javax.management.MBeanServer, param1: javax.management.ObjectName): javax.management.ObjectName;
					public constructor(param0: org.apache.log4j.Logger);
					public invoke(param0: string, param1: any[], param2: string[]): any;
					public getLogger(): org.apache.log4j.Logger;
					public handleNotification(param0: javax.management.Notification, param1: any): void;
					public getMBeanInfo(): javax.management.MBeanInfo;
					public preDeregister(): void;
					public postDeregister(): void;
					public constructor();
					public postRegister(param0: java.lang.Boolean): void;
					public getAttributes(param0: string[]): javax.management.AttributeList;
					public setAttribute(param0: javax.management.Attribute): void;
					public setAttributes(param0: javax.management.AttributeList): javax.management.AttributeList;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module jmx {
				export class MethodUnion extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.jmx.MethodUnion>;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export class AppenderFinalizer extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.lf5.AppenderFinalizer>;
					public _defaultMonitor: org.apache.log4j.lf5.viewer.LogBrokerMonitor;
					public constructor(param0: org.apache.log4j.lf5.viewer.LogBrokerMonitor);
					public finalize(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export class DefaultLF5Configurator extends java.lang.Object implements org.apache.log4j.spi.Configurator {
					public static class: java.lang.Class<org.apache.log4j.lf5.DefaultLF5Configurator>;
					public static configure(): void;
					public doConfigure(param0: java.io.InputStream, param1: org.apache.log4j.spi.LoggerRepository): void;
					public doConfigure(param0: java.net.URL, param1: org.apache.log4j.spi.LoggerRepository): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export class LF5Appender extends org.apache.log4j.AppenderSkeleton {
					public static class: java.lang.Class<org.apache.log4j.lf5.LF5Appender>;
					public _logMonitor: org.apache.log4j.lf5.viewer.LogBrokerMonitor;
					public static _defaultLogMonitor: org.apache.log4j.lf5.viewer.LogBrokerMonitor;
					public static _finalizer: org.apache.log4j.lf5.AppenderFinalizer;
					public setMaxNumberOfRecords(param0: number): void;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getLogBrokerMonitor(): org.apache.log4j.lf5.viewer.LogBrokerMonitor;
					public static getDefaultMonitorHeight(): number;
					public setCallSystemExitOnClose(param0: boolean): void;
					public static main(param0: string[]): void;
					public constructor();
					public close(): void;
					public equals(param0: org.apache.log4j.lf5.LF5Appender): boolean;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getFilter(): org.apache.log4j.spi.Filter;
					public static getScreenHeight(): number;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public constructor(param0: org.apache.log4j.lf5.viewer.LogBrokerMonitor);
					public static getScreenWidth(): number;
					public static getDefaultMonitorWidth(): number;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public equals(param0: any): boolean;
					public requiresLayout(): boolean;
					public constructor(param0: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public static getDefaultInstance(): org.apache.log4j.lf5.viewer.LogBrokerMonitor;
					public getName(): string;
					public activateOptions(): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public clearFilters(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export class Log4JLogRecord extends org.apache.log4j.lf5.LogRecord {
					public static class: java.lang.Class<org.apache.log4j.lf5.Log4JLogRecord>;
					public setThrownStackTrace(param0: string): void;
					public constructor();
					public isSevereLevel(): boolean;
					public setThrownStackTrace(param0: org.apache.log4j.spi.ThrowableInformation): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export class LogLevel extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.apache.log4j.lf5.LogLevel>;
					public static FATAL: org.apache.log4j.lf5.LogLevel;
					public static ERROR: org.apache.log4j.lf5.LogLevel;
					public static WARN: org.apache.log4j.lf5.LogLevel;
					public static INFO: org.apache.log4j.lf5.LogLevel;
					public static DEBUG: org.apache.log4j.lf5.LogLevel;
					public static SEVERE: org.apache.log4j.lf5.LogLevel;
					public static WARNING: org.apache.log4j.lf5.LogLevel;
					public static CONFIG: org.apache.log4j.lf5.LogLevel;
					public static FINE: org.apache.log4j.lf5.LogLevel;
					public static FINER: org.apache.log4j.lf5.LogLevel;
					public static FINEST: org.apache.log4j.lf5.LogLevel;
					public _label: string;
					public _precedence: number;
					public getLabel(): string;
					public static register(param0: Array<org.apache.log4j.lf5.LogLevel>): void;
					public encompasses(param0: org.apache.log4j.lf5.LogLevel): boolean;
					public static getLog4JLevels(): java.util.List<any>;
					public static getAllDefaultLevels(): java.util.List<any>;
					public static getLogLevelColorMap(): java.util.Map<any,any>;
					public static register(param0: org.apache.log4j.lf5.LogLevel): org.apache.log4j.lf5.LogLevel;
					public equals(param0: any): boolean;
					public toString(): string;
					public getPrecedence(): number;
					public static getJdk14Levels(): java.util.List<any>;
					public static resetLogLevelColorMap(): void;
					public constructor(param0: string, param1: number);
					public static valueOf(param0: string): org.apache.log4j.lf5.LogLevel;
					public hashCode(): number;
					public setLogLevelColorMap(param0: org.apache.log4j.lf5.LogLevel, param1: java.awt.Color): void;
					public static register(param0: java.util.List<any>): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export class LogLevelFormatException extends java.lang.Exception {
					public static class: java.lang.Class<org.apache.log4j.lf5.LogLevelFormatException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export abstract class LogRecord extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.apache.log4j.lf5.LogRecord>;
					public static _seqCount: number;
					public _level: org.apache.log4j.lf5.LogLevel;
					public _message: string;
					public _sequenceNumber: number;
					public _millis: number;
					public _category: string;
					public _thread: string;
					public _thrownStackTrace: string;
					public _thrown: java.lang.Throwable;
					public _ndc: string;
					public _location: string;
					public setThreadDescription(param0: string): void;
					public setCategory(param0: string): void;
					public setNDC(param0: string): void;
					public setMessage(param0: string): void;
					public setLocation(param0: string): void;
					public toString(): string;
					public constructor();
					public static resetSequenceNumber(): void;
					public getMillis(): number;
					public setSequenceNumber(param0: number): void;
					public setMillis(param0: number): void;
					public setLevel(param0: org.apache.log4j.lf5.LogLevel): void;
					public isSevereLevel(): boolean;
					public getSequenceNumber(): number;
					public setThrownStackTrace(param0: string): void;
					public getLocation(): string;
					public getLevel(): org.apache.log4j.lf5.LogLevel;
					public getThrown(): java.lang.Throwable;
					public getNDC(): string;
					public getCategory(): string;
					public isFatal(): boolean;
					public static getNextId(): number;
					public getThreadDescription(): string;
					public setThrown(param0: java.lang.Throwable): void;
					public getMessage(): string;
					public hasThrown(): boolean;
					public getThrownStackTrace(): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export class LogRecordFilter extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.lf5.LogRecordFilter>;
					/**
					 * Constructs a new instance of the org.apache.log4j.lf5.LogRecordFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						passes(param0: org.apache.log4j.lf5.LogRecord): boolean;
					});
					public constructor();
					public passes(param0: org.apache.log4j.lf5.LogRecord): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export class PassingLogRecordFilter extends java.lang.Object implements org.apache.log4j.lf5.LogRecordFilter {
					public static class: java.lang.Class<org.apache.log4j.lf5.PassingLogRecordFilter>;
					public reset(): void;
					public constructor();
					public passes(param0: org.apache.log4j.lf5.LogRecord): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export class StartLogFactor5 extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.lf5.StartLogFactor5>;
					public constructor();
					public static main(param0: string[]): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module util {
					export class AdapterLogRecord extends org.apache.log4j.lf5.LogRecord {
						public static class: java.lang.Class<org.apache.log4j.lf5.util.AdapterLogRecord>;
						public static setSevereLevel(param0: org.apache.log4j.lf5.LogLevel): void;
						public constructor();
						public static getSevereLevel(): org.apache.log4j.lf5.LogLevel;
						public getLocationInfo(param0: string): string;
						public setCategory(param0: string): void;
						public isSevereLevel(): boolean;
						public stackTraceToString(param0: java.lang.Throwable): string;
						public parseLine(param0: string, param1: string): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module util {
					export class DateFormatManager extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.lf5.util.DateFormatManager>;
						public constructor();
						public constructor(param0: java.util.Locale, param1: string);
						public constructor(param0: java.util.TimeZone);
						/** @deprecated */
						public setOutputFormat(param0: string): void;
						public getLocale(): java.util.Locale;
						public getDateFormatInstance(): java.text.DateFormat;
						public setDateFormatInstance(param0: java.text.DateFormat): void;
						public constructor(param0: java.util.TimeZone, param1: string);
						public constructor(param0: java.util.TimeZone, param1: java.util.Locale);
						public setLocale(param0: java.util.Locale): void;
						public setTimeZone(param0: java.util.TimeZone): void;
						public format(param0: java.util.Date, param1: string): string;
						public parse(param0: string): java.util.Date;
						/** @deprecated */
						public getOutputFormat(): string;
						public getTimeZone(): java.util.TimeZone;
						public format(param0: java.util.Date): string;
						public constructor(param0: java.util.Locale);
						public constructor(param0: java.util.TimeZone, param1: java.util.Locale, param2: string);
						public setPattern(param0: string): void;
						public parse(param0: string, param1: string): java.util.Date;
						public constructor(param0: string);
						public getPattern(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module util {
					export class LogFileParser extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<org.apache.log4j.lf5.util.LogFileParser>;
						public static RECORD_DELIMITER: string;
						public static ATTRIBUTE_DELIMITER: string;
						public static DATE_DELIMITER: string;
						public static THREAD_DELIMITER: string;
						public static CATEGORY_DELIMITER: string;
						public static LOCATION_DELIMITER: string;
						public static MESSAGE_DELIMITER: string;
						public static PRIORITY_DELIMITER: string;
						public static NDC_DELIMITER: string;
						public constructor(param0: java.io.File);
						public constructor(param0: java.io.InputStream);
						public run(): void;
						public parse(param0: org.apache.log4j.lf5.viewer.LogBrokerMonitor): void;
						public displayError(param0: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module util {
					export class LogMonitorAdapter extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.lf5.util.LogMonitorAdapter>;
						public static LOG4J_LOG_LEVELS: number;
						public static JDK14_LOG_LEVELS: number;
						public static getScreenWidth(): number;
						public addMessage(param0: org.apache.log4j.lf5.LogRecord): void;
						public setDefaultLevel(param0: org.apache.log4j.lf5.LogLevel): void;
						public log(param0: string, param1: string): void;
						public static getScreenHeight(): number;
						public log(param0: string, param1: org.apache.log4j.lf5.LogLevel, param2: string, param3: java.lang.Throwable, param4: string): void;
						public log(param0: string, param1: org.apache.log4j.lf5.LogLevel, param2: string): void;
						public getDefaultLevel(): org.apache.log4j.lf5.LogLevel;
						public static newInstance(param0: Array<org.apache.log4j.lf5.LogLevel>): org.apache.log4j.lf5.util.LogMonitorAdapter;
						public setMaxNumberOfRecords(param0: number): void;
						public setSevereLevel(param0: org.apache.log4j.lf5.LogLevel): void;
						public log(param0: string, param1: org.apache.log4j.lf5.LogLevel, param2: string, param3: java.lang.Throwable): void;
						public static getDefaultMonitorWidth(): number;
						public static newInstance(param0: java.util.List<any>): org.apache.log4j.lf5.util.LogMonitorAdapter;
						public static getDefaultMonitorHeight(): number;
						public static newInstance(param0: number): org.apache.log4j.lf5.util.LogMonitorAdapter;
						public getSevereLevel(): org.apache.log4j.lf5.LogLevel;
						public log(param0: string, param1: org.apache.log4j.lf5.LogLevel, param2: string, param3: string): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module util {
					export class Resource extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.lf5.util.Resource>;
						public _name: string;
						public getInputStreamReader(): java.io.InputStreamReader;
						public constructor();
						public setName(param0: string): void;
						public getURL(): java.net.URL;
						public getInputStream(): java.io.InputStream;
						public getName(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module util {
					export class ResourceUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.lf5.util.ResourceUtils>;
						public static getResourceAsURL(param0: any, param1: org.apache.log4j.lf5.util.Resource): java.net.URL;
						public constructor();
						public static getResourceAsStream(param0: any, param1: org.apache.log4j.lf5.util.Resource): java.io.InputStream;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module util {
					export abstract class StreamUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.lf5.util.StreamUtils>;
						public static DEFAULT_BUFFER_SIZE: number;
						public constructor();
						public static copyThenClose(param0: java.io.InputStream, param1: java.io.OutputStream): void;
						public static getBytes(param0: java.io.InputStream): number[];
						public static copy(param0: java.io.InputStream, param1: java.io.OutputStream): void;
						public static copy(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export class FilteredLogTableModel extends javax.swing.table.AbstractTableModel {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.FilteredLogTableModel>;
						public _filter: org.apache.log4j.lf5.LogRecordFilter;
						public _allRecords: java.util.List<any>;
						public _filteredRecords: java.util.List<any>;
						public _maxNumberOfLogRecords: number;
						public _colNames: string[];
						public removeTableModelListener(param0: javax.swing.event.TableModelListener): void;
						public getTotalRowCount(): number;
						public getColumnName(param0: number): string;
						public getValueAt(param0: number, param1: number): any;
						public addTableModelListener(param0: javax.swing.event.TableModelListener): void;
						public getColumn(param0: number, param1: org.apache.log4j.lf5.LogRecord): any;
						public trimOldestRecords(): void;
						public addLogRecord(param0: org.apache.log4j.lf5.LogRecord): boolean;
						public setLogRecordFilter(param0: org.apache.log4j.lf5.LogRecordFilter): void;
						public constructor();
						public trimRecords(): void;
						public fastRefresh(): void;
						public needsTrimming(): boolean;
						public getRowCount(): number;
						public getFilteredRecord(param0: number): org.apache.log4j.lf5.LogRecord;
						public setMaxNumberOfLogRecords(param0: number): void;
						public getColumnCount(): number;
						public refresh(): void;
						public getColumnClass(param0: number): java.lang.Class<any>;
						public createFilteredRecordsList(): java.util.List<any>;
						public setValueAt(param0: any, param1: number, param2: number): void;
						public getLogRecordFilter(): org.apache.log4j.lf5.LogRecordFilter;
						public clear(): void;
						public getFilteredRecords(): java.util.List<any>;
						public isCellEditable(param0: number, param1: number): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export class LF5SwingUtils extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LF5SwingUtils>;
						public static selectRow(param0: number, param1: javax.swing.ListSelectionModel): void;
						public static makeScrollBarTrack(param0: java.awt.Adjustable): void;
						public static moveAdjustable(param0: number, param1: java.awt.Adjustable): void;
						public constructor();
						public static contains(param0: number, param1: javax.swing.table.TableModel): boolean;
						public static makeVerticalScrollBarTrack(param0: javax.swing.JScrollPane): void;
						public static selectRow(param0: number, param1: javax.swing.JTable, param2: javax.swing.JScrollPane): void;
						public static repaintLater(param0: javax.swing.JComponent): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export class LogBrokerMonitor extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogBrokerMonitor>;
						public static DETAILED_VIEW: string;
						public _logMonitorFrame: javax.swing.JFrame;
						public _logMonitorFrameWidth: number;
						public _logMonitorFrameHeight: number;
						public _table: org.apache.log4j.lf5.viewer.LogTable;
						public _categoryExplorerTree: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerTree;
						public _searchText: string;
						public _NDCTextFilter: string;
						public _leastSevereDisplayedLogLevel: org.apache.log4j.lf5.LogLevel;
						public _logTableScrollPane: javax.swing.JScrollPane;
						public _statusLabel: javax.swing.JLabel;
						public _lock: any;
						public _fontSizeCombo: javax.swing.JComboBox;
						public _fontSize: number;
						public _fontName: string;
						public _currentView: string;
						public _loadSystemFonts: boolean;
						public _trackTableScrollPane: boolean;
						public _lastTableViewportSize: java.awt.Dimension;
						public _callSystemExitOnClose: boolean;
						public _displayedLogBrokerProperties: java.util.List<any>;
						public _logLevelMenuItems: java.util.Map<any,any>;
						public _logTableColumnMenuItems: java.util.Map<any,any>;
						public _levels: java.util.List<any>;
						public _columns: java.util.List<any>;
						public _isDisposed: boolean;
						public _configurationManager: org.apache.log4j.lf5.viewer.configure.ConfigurationManager;
						public _mruFileManager: org.apache.log4j.lf5.viewer.configure.MRUFileManager;
						public _fileLocation: java.io.File;
						public createHelpProperties(): javax.swing.JMenuItem;
						public requestOpenURL(): void;
						public getDateFormatManager(): org.apache.log4j.lf5.util.DateFormatManager;
						public createHelpMenu(): javax.swing.JMenu;
						public updateStatusLabel(): void;
						public createLogLevelMenu(): javax.swing.JMenu;
						public createEditMenu(): javax.swing.JMenu;
						public createLogLevelColorMenu(): javax.swing.JMenu;
						public createConfigureMaxRecords(): javax.swing.JMenuItem;
						public updateFrameSize(): void;
						public getStatusText(param0: number, param1: number): string;
						public getTableColumnMenuItem(param0: org.apache.log4j.lf5.viewer.LogTableColumn): javax.swing.JCheckBoxMenuItem;
						public initComponents(): void;
						public addMessage(param0: org.apache.log4j.lf5.LogRecord): void;
						public createConfigureSave(): javax.swing.JMenuItem;
						public resetConfiguration(): void;
						public createResetLogLevelColorMenuItem(): javax.swing.JMenuItem;
						public createEditSortNDCMI(): javax.swing.JMenuItem;
						public requestClose(): void;
						public getCallSystemExitOnClose(): boolean;
						public setMaxNumberOfLogRecords(param0: number): void;
						public createDetailTextArea(): javax.swing.JTextArea;
						public requestOpenMRU(param0: java.awt.event.ActionEvent): void;
						public setNDCTextFilter(param0: string): void;
						public getFirstSelectedRow(): number;
						public setCallSystemExitOnClose(param0: boolean): void;
						public addTableModelProperties(): void;
						public createConfigureMenu(): javax.swing.JMenu;
						public createViewMenu(): javax.swing.JMenu;
						public createLogTableColumnMenuItem(param0: org.apache.log4j.lf5.viewer.LogTableColumn): javax.swing.JCheckBoxMenuItem;
						public getLogTableColumnMenuItems(): java.util.Map<any,any>;
						public createSubMenuItem(param0: org.apache.log4j.lf5.LogLevel): javax.swing.JMenuItem;
						public requestExit(): void;
						public clearDetailTextArea(): void;
						public createEditFindMI(): javax.swing.JMenuItem;
						public selectRow(param0: number): void;
						public showPropertiesDialog(param0: string): void;
						public getNDCTextFilter(): string;
						public saveConfiguration(): void;
						public findRecord(param0: number, param1: string, param2: java.util.List<any>): number;
						public setNDCLogRecordFilter(param0: string): void;
						public findSearchText(): void;
						public setFontSize(param0: java.awt.Component, param1: number): void;
						public constructor(param0: java.util.List<any>);
						public setFontSizeSilently(param0: number): void;
						public createNDCLogRecordFilter(param0: string): org.apache.log4j.lf5.LogRecordFilter;
						public createNoLogLevelsMenuItem(): javax.swing.JMenuItem;
						public createEditFindNextMI(): javax.swing.JMenuItem;
						public createFileMenu(): javax.swing.JMenu;
						public createOpenURLMI(): javax.swing.JMenuItem;
						public show(): void;
						public getRecordsDisplayedMessage(): string;
						public createNoLogTableColumnsMenuItem(): javax.swing.JMenuItem;
						public sortByNDC(): void;
						public loadLogFile(param0: java.io.File): boolean;
						public refreshDetailTextArea(): void;
						public updateMRUList(): void;
						public getMenuItem(param0: org.apache.log4j.lf5.LogLevel): javax.swing.JCheckBoxMenuItem;
						public createLogLevelCombo(): javax.swing.JComboBox;
						public refresh(param0: javax.swing.JTextArea): void;
						public createExitMI(): javax.swing.JMenuItem;
						public setFrameSize(param0: number, param1: number): void;
						public setView(param0: string, param1: org.apache.log4j.lf5.viewer.LogTable): void;
						public setDateFormatManager(param0: org.apache.log4j.lf5.util.DateFormatManager): void;
						public getBaseFrame(): javax.swing.JFrame;
						public pause(param0: number): void;
						public createLogRecordFilter(): org.apache.log4j.lf5.LogRecordFilter;
						public createConfigureReset(): javax.swing.JMenuItem;
						public getLogTableColumns(): java.util.Iterator;
						public loadLogFile(param0: java.net.URL): boolean;
						public getLogTableColumnMenuItem(param0: org.apache.log4j.lf5.viewer.LogTableColumn): javax.swing.JCheckBoxMenuItem;
						public dispose(): void;
						public setTitle(param0: string): void;
						public updateView(): java.util.List<any>;
						public closeAfterConfirm(): void;
						public createStatusArea(): javax.swing.JPanel;
						public addDisplayedProperty(param0: any): void;
						public getLogLevelMenuItems(): java.util.Map<any,any>;
						public changeFontSizeCombo(param0: javax.swing.JComboBox, param1: number): number;
						public setMaxRecordConfiguration(): void;
						public createMRUFileListMI(param0: javax.swing.JMenu): void;
						public selectAllLogTableColumns(param0: boolean): void;
						public createEditRestoreAllNDCMI(): javax.swing.JMenuItem;
						public createMenuItem(param0: org.apache.log4j.lf5.LogLevel): javax.swing.JCheckBoxMenuItem;
						public createAllLogLevelsMenuItem(): javax.swing.JMenuItem;
						/** @deprecated */
						public trackTableScrollPane(): void;
						public getLogLevels(): java.util.Iterator;
						public requestOpen(): void;
						public createOpenMI(): javax.swing.JMenuItem;
						public show(param0: number): void;
						public showLogLevelColorChangeDialog(param0: javax.swing.JMenuItem, param1: org.apache.log4j.lf5.LogLevel): void;
						public getCategoryExplorerTree(): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerTree;
						public createMenuBar(): javax.swing.JMenuBar;
						public createCloseMI(): javax.swing.JMenuItem;
						public hide(): void;
						public matches(param0: org.apache.log4j.lf5.LogRecord, param1: string): boolean;
						public createAllLogTableColumnsMenuItem(): javax.swing.JMenuItem;
						public setLeastSevereDisplayedLogLevel(param0: org.apache.log4j.lf5.LogLevel): void;
						public selectAllLogLevels(param0: boolean): void;
						public makeLogTableListenToCategoryExplorer(): void;
						public createToolBar(): javax.swing.JToolBar;
						public setFontSize(param0: number): void;
						public setSearchText(param0: string): void;
						public centerFrame(param0: javax.swing.JFrame): void;
					}
					export module LogBrokerMonitor {
						export class LogBrokerMonitorWindowAdaptor extends java.awt.event.WindowAdapter {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogBrokerMonitor.LogBrokerMonitorWindowAdaptor>;
							public _monitor: org.apache.log4j.lf5.viewer.LogBrokerMonitor;
							public constructor();
							public windowOpened(param0: java.awt.event.WindowEvent): void;
							public windowClosing(param0: java.awt.event.WindowEvent): void;
							public windowDeiconified(param0: java.awt.event.WindowEvent): void;
							public windowIconified(param0: java.awt.event.WindowEvent): void;
							public windowLostFocus(param0: java.awt.event.WindowEvent): void;
							public windowStateChanged(param0: java.awt.event.WindowEvent): void;
							public windowActivated(param0: java.awt.event.WindowEvent): void;
							public windowDeactivated(param0: java.awt.event.WindowEvent): void;
							public constructor(param0: org.apache.log4j.lf5.viewer.LogBrokerMonitor, param1: org.apache.log4j.lf5.viewer.LogBrokerMonitor);
							public windowClosed(param0: java.awt.event.WindowEvent): void;
							public windowGainedFocus(param0: java.awt.event.WindowEvent): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export abstract class LogFactor5Dialog extends javax.swing.JDialog {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogFactor5Dialog>;
						public static DISPLAY_FONT: java.awt.Font;
						public constructor(param0: java.awt.Frame);
						public centerWindow(param0: java.awt.Window): void;
						public constructor(param0: java.awt.Dialog, param1: string);
						/** @deprecated */
						public show(): void;
						public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
						public constructor(param0: java.awt.Window, param1: string, param2: java.awt.Dialog.ModalityType);
						public constructor(param0: javax.swing.JFrame, param1: string, param2: boolean);
						public constructor(param0: java.awt.Dialog, param1: boolean);
						public constructor(param0: java.awt.Frame, param1: string, param2: boolean);
						public constructor(param0: java.awt.Window);
						public getAccessibleContext(): javax.accessibility.AccessibleContext;
						public constructor(param0: java.awt.Window, param1: string);
						public constructor(param0: java.awt.Window, param1: java.awt.GraphicsConfiguration);
						public remove(param0: number): void;
						public getGlassPane(): java.awt.Component;
						public constructor(param0: java.awt.Window, param1: string, param2: java.awt.Dialog.ModalityType, param3: java.awt.GraphicsConfiguration);
						public getContentPane(): java.awt.Container;
						public constructor();
						public getDefaultConstraints(): java.awt.GridBagConstraints;
						public constructor(param0: java.awt.Frame, param1: string);
						public wrapStringOnPanel(param0: string, param1: java.awt.Container): void;
						public setLayeredPane(param0: javax.swing.JLayeredPane): void;
						public getLayeredPane(): javax.swing.JLayeredPane;
						public constructor(param0: java.awt.Window, param1: java.awt.Dialog.ModalityType);
						public setGlassPane(param0: java.awt.Component): void;
						public constructor(param0: java.awt.Dialog, param1: string, param2: boolean, param3: java.awt.GraphicsConfiguration);
						public remove(param0: java.awt.Component): void;
						/** @deprecated */
						public postEvent(param0: java.awt.Event): boolean;
						public constructor(param0: java.awt.Frame, param1: boolean);
						public getRootPane(): javax.swing.JRootPane;
						public remove(param0: java.awt.MenuComponent): void;
						/** @deprecated */
						public show(param0: boolean): void;
						public show(): void;
						public constructor(param0: java.awt.Frame, param1: string, param2: boolean, param3: java.awt.GraphicsConfiguration);
						public constructor(param0: java.awt.Dialog);
						public constructor(param0: java.awt.Dialog, param1: string, param2: boolean);
						public setContentPane(param0: java.awt.Container): void;
						public minimumSizeDialog(param0: java.awt.Component, param1: number, param2: number): void;
						public getFont(): java.awt.Font;
						public getTransferHandler(): javax.swing.TransferHandler;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export class LogFactor5ErrorDialog extends org.apache.log4j.lf5.viewer.LogFactor5Dialog {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogFactor5ErrorDialog>;
						public constructor(param0: java.awt.Frame);
						public constructor(param0: java.awt.Dialog, param1: string);
						public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
						public constructor(param0: java.awt.Window, param1: string, param2: java.awt.Dialog.ModalityType);
						public constructor(param0: javax.swing.JFrame, param1: string, param2: boolean);
						public constructor(param0: java.awt.Dialog, param1: boolean);
						public constructor(param0: java.awt.Frame, param1: string, param2: boolean);
						public constructor(param0: java.awt.Window);
						public getAccessibleContext(): javax.accessibility.AccessibleContext;
						public constructor(param0: java.awt.Window, param1: string);
						public constructor(param0: java.awt.Window, param1: java.awt.GraphicsConfiguration);
						public remove(param0: number): void;
						public getGlassPane(): java.awt.Component;
						public constructor(param0: java.awt.Window, param1: string, param2: java.awt.Dialog.ModalityType, param3: java.awt.GraphicsConfiguration);
						public getContentPane(): java.awt.Container;
						public constructor();
						public constructor(param0: java.awt.Frame, param1: string);
						public constructor(param0: javax.swing.JFrame, param1: string);
						public setLayeredPane(param0: javax.swing.JLayeredPane): void;
						public getLayeredPane(): javax.swing.JLayeredPane;
						public constructor(param0: java.awt.Window, param1: java.awt.Dialog.ModalityType);
						public setGlassPane(param0: java.awt.Component): void;
						public constructor(param0: java.awt.Dialog, param1: string, param2: boolean, param3: java.awt.GraphicsConfiguration);
						public remove(param0: java.awt.Component): void;
						/** @deprecated */
						public postEvent(param0: java.awt.Event): boolean;
						public constructor(param0: java.awt.Frame, param1: boolean);
						public getRootPane(): javax.swing.JRootPane;
						public remove(param0: java.awt.MenuComponent): void;
						public constructor(param0: java.awt.Frame, param1: string, param2: boolean, param3: java.awt.GraphicsConfiguration);
						public constructor(param0: java.awt.Dialog);
						public constructor(param0: java.awt.Dialog, param1: string, param2: boolean);
						public setContentPane(param0: java.awt.Container): void;
						public getFont(): java.awt.Font;
						public getTransferHandler(): javax.swing.TransferHandler;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export class LogFactor5InputDialog extends org.apache.log4j.lf5.viewer.LogFactor5Dialog {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogFactor5InputDialog>;
						public static SIZE: number;
						public constructor(param0: java.awt.Frame);
						public constructor(param0: java.awt.Dialog, param1: string);
						public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
						public constructor(param0: java.awt.Window, param1: string, param2: java.awt.Dialog.ModalityType);
						public getText(): string;
						public constructor(param0: javax.swing.JFrame, param1: string, param2: boolean);
						public constructor(param0: java.awt.Dialog, param1: boolean);
						public constructor(param0: java.awt.Frame, param1: string, param2: boolean);
						public constructor(param0: java.awt.Window);
						public getAccessibleContext(): javax.accessibility.AccessibleContext;
						public constructor(param0: java.awt.Window, param1: string);
						public constructor(param0: java.awt.Window, param1: java.awt.GraphicsConfiguration);
						public remove(param0: number): void;
						public constructor(param0: javax.swing.JFrame, param1: string, param2: string);
						public constructor(param0: javax.swing.JFrame, param1: string, param2: string, param3: number);
						public getGlassPane(): java.awt.Component;
						public constructor(param0: java.awt.Window, param1: string, param2: java.awt.Dialog.ModalityType, param3: java.awt.GraphicsConfiguration);
						public getContentPane(): java.awt.Container;
						public constructor();
						public constructor(param0: java.awt.Frame, param1: string);
						public setLayeredPane(param0: javax.swing.JLayeredPane): void;
						public getLayeredPane(): javax.swing.JLayeredPane;
						public constructor(param0: java.awt.Window, param1: java.awt.Dialog.ModalityType);
						public setGlassPane(param0: java.awt.Component): void;
						public constructor(param0: java.awt.Dialog, param1: string, param2: boolean, param3: java.awt.GraphicsConfiguration);
						public remove(param0: java.awt.Component): void;
						/** @deprecated */
						public postEvent(param0: java.awt.Event): boolean;
						public constructor(param0: java.awt.Frame, param1: boolean);
						public getRootPane(): javax.swing.JRootPane;
						public remove(param0: java.awt.MenuComponent): void;
						public constructor(param0: java.awt.Frame, param1: string, param2: boolean, param3: java.awt.GraphicsConfiguration);
						public constructor(param0: java.awt.Dialog);
						public constructor(param0: java.awt.Dialog, param1: string, param2: boolean);
						public setContentPane(param0: java.awt.Container): void;
						public getFont(): java.awt.Font;
						public getTransferHandler(): javax.swing.TransferHandler;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export class LogFactor5LoadingDialog extends org.apache.log4j.lf5.viewer.LogFactor5Dialog {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogFactor5LoadingDialog>;
						public constructor(param0: java.awt.Frame);
						public constructor(param0: java.awt.Dialog, param1: string);
						public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
						public constructor(param0: java.awt.Window, param1: string, param2: java.awt.Dialog.ModalityType);
						public constructor(param0: javax.swing.JFrame, param1: string, param2: boolean);
						public constructor(param0: java.awt.Dialog, param1: boolean);
						public constructor(param0: java.awt.Frame, param1: string, param2: boolean);
						public constructor(param0: java.awt.Window);
						public getAccessibleContext(): javax.accessibility.AccessibleContext;
						public constructor(param0: java.awt.Window, param1: string);
						public constructor(param0: java.awt.Window, param1: java.awt.GraphicsConfiguration);
						public remove(param0: number): void;
						public getGlassPane(): java.awt.Component;
						public constructor(param0: java.awt.Window, param1: string, param2: java.awt.Dialog.ModalityType, param3: java.awt.GraphicsConfiguration);
						public getContentPane(): java.awt.Container;
						public constructor();
						public constructor(param0: java.awt.Frame, param1: string);
						public constructor(param0: javax.swing.JFrame, param1: string);
						public setLayeredPane(param0: javax.swing.JLayeredPane): void;
						public getLayeredPane(): javax.swing.JLayeredPane;
						public constructor(param0: java.awt.Window, param1: java.awt.Dialog.ModalityType);
						public setGlassPane(param0: java.awt.Component): void;
						public constructor(param0: java.awt.Dialog, param1: string, param2: boolean, param3: java.awt.GraphicsConfiguration);
						public remove(param0: java.awt.Component): void;
						/** @deprecated */
						public postEvent(param0: java.awt.Event): boolean;
						public constructor(param0: java.awt.Frame, param1: boolean);
						public getRootPane(): javax.swing.JRootPane;
						public remove(param0: java.awt.MenuComponent): void;
						public constructor(param0: java.awt.Frame, param1: string, param2: boolean, param3: java.awt.GraphicsConfiguration);
						public constructor(param0: java.awt.Dialog);
						public constructor(param0: java.awt.Dialog, param1: string, param2: boolean);
						public setContentPane(param0: java.awt.Container): void;
						public getFont(): java.awt.Font;
						public getTransferHandler(): javax.swing.TransferHandler;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export class LogTable extends javax.swing.JTable {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogTable>;
						public _rowHeight: number;
						public _detailTextArea: javax.swing.JTextArea;
						public _numCols: number;
						public _tableColumns: Array<javax.swing.table.TableColumn>;
						public _colWidths: number[];
						public _colNames: Array<org.apache.log4j.lf5.viewer.LogTableColumn>;
						public _colDate: number;
						public _colThread: number;
						public _colMessageNum: number;
						public _colLevel: number;
						public _colNDC: number;
						public _colCategory: number;
						public _colMessage: number;
						public _colLocation: number;
						public _colThrown: number;
						public _dateFormatManager: org.apache.log4j.lf5.util.DateFormatManager;
						public constructor(param0: javax.swing.JTextArea);
						public constructor(param0: javax.swing.table.TableModel, param1: javax.swing.table.TableColumnModel, param2: javax.swing.ListSelectionModel);
						public getFilteredLogTableModel(): org.apache.log4j.lf5.viewer.FilteredLogTableModel;
						public tableChanged(param0: javax.swing.event.TableModelEvent): void;
						public getDateFormatManager(): org.apache.log4j.lf5.util.DateFormatManager;
						public columnMarginChanged(param0: javax.swing.event.ChangeEvent): void;
						public valueChanged(param0: javax.swing.event.ListSelectionEvent): void;
						public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
						public getScrollableTracksViewportHeight(): boolean;
						public constructor(param0: java.util.Vector, param1: java.util.Vector);
						public constructor(param0: javax.swing.table.TableModel);
						public getColumnNameAndNumber(): java.util.Vector;
						public columnAdded(param0: javax.swing.event.TableColumnModelEvent): void;
						public getPreferredScrollableViewportSize(): java.awt.Dimension;
						public init(): void;
						public columnSelectionChanged(param0: javax.swing.event.ListSelectionEvent): void;
						public editingCanceled(param0: javax.swing.event.ChangeEvent): void;
						public getAccessibleContext(): javax.accessibility.AccessibleContext;
						public setFont(param0: java.awt.Font): void;
						public setDateFormatManager(param0: org.apache.log4j.lf5.util.DateFormatManager): void;
						public constructor(param0: number, param1: number);
						public remove(param0: number): void;
						public constructor();
						public getScrollableUnitIncrement(param0: java.awt.Rectangle, param1: number, param2: number): number;
						public constructor(param0: javax.swing.table.TableModel, param1: javax.swing.table.TableColumnModel);
						public constructor(param0: Array<any[]>, param1: any[]);
						public clearLogRecords(): void;
						public getScrollableTracksViewportWidth(): boolean;
						public getScrollableBlockIncrement(param0: java.awt.Rectangle, param1: number, param2: number): number;
						public sorterChanged(param0: javax.swing.event.RowSorterEvent): void;
						public columnMoved(param0: javax.swing.event.TableColumnModelEvent): void;
						public remove(param0: java.awt.Component): void;
						/** @deprecated */
						public postEvent(param0: java.awt.Event): boolean;
						public setDetailedView(): void;
						public remove(param0: java.awt.MenuComponent): void;
						public columnRemoved(param0: javax.swing.event.TableColumnModelEvent): void;
						public setView(param0: java.util.List<any>): void;
						public getFont(): java.awt.Font;
						public editingStopped(param0: javax.swing.event.ChangeEvent): void;
						public getTransferHandler(): javax.swing.TransferHandler;
					}
					export module LogTable {
						export class LogTableListSelectionListener extends java.lang.Object implements javax.swing.event.ListSelectionListener {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogTable.LogTableListSelectionListener>;
							public _table: javax.swing.JTable;
							public constructor(param0: org.apache.log4j.lf5.viewer.LogTable, param1: javax.swing.JTable);
							public valueChanged(param0: javax.swing.event.ListSelectionEvent): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export class LogTableColumn extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogTableColumn>;
						public static DATE: org.apache.log4j.lf5.viewer.LogTableColumn;
						public static THREAD: org.apache.log4j.lf5.viewer.LogTableColumn;
						public static MESSAGE_NUM: org.apache.log4j.lf5.viewer.LogTableColumn;
						public static LEVEL: org.apache.log4j.lf5.viewer.LogTableColumn;
						public static NDC: org.apache.log4j.lf5.viewer.LogTableColumn;
						public static CATEGORY: org.apache.log4j.lf5.viewer.LogTableColumn;
						public static MESSAGE: org.apache.log4j.lf5.viewer.LogTableColumn;
						public static LOCATION: org.apache.log4j.lf5.viewer.LogTableColumn;
						public static THROWN: org.apache.log4j.lf5.viewer.LogTableColumn;
						public _label: string;
						public static getLogTableColumns(): java.util.List<any>;
						public getLabel(): string;
						public static valueOf(param0: string): org.apache.log4j.lf5.viewer.LogTableColumn;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public static getLogTableColumnArray(): Array<org.apache.log4j.lf5.viewer.LogTableColumn>;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export class LogTableColumnFormatException extends java.lang.Exception {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogTableColumnFormatException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export class LogTableModel extends javax.swing.table.DefaultTableModel {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogTableModel>;
						public constructor();
						public constructor(param0: any[], param1: number);
						public constructor(param0: Array<any[]>, param1: any[]);
						public constructor(param0: java.util.Vector, param1: number);
						public getRowCount(): number;
						public constructor(param0: java.util.Vector, param1: java.util.Vector);
						public getColumnCount(): number;
						public removeTableModelListener(param0: javax.swing.event.TableModelListener): void;
						public getColumnClass(param0: number): java.lang.Class<any>;
						public getColumnName(param0: number): string;
						public getValueAt(param0: number, param1: number): any;
						public addTableModelListener(param0: javax.swing.event.TableModelListener): void;
						public setValueAt(param0: any, param1: number, param2: number): void;
						public constructor(param0: number, param1: number);
						public isCellEditable(param0: number, param1: number): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export class LogTableRowRenderer extends javax.swing.table.DefaultTableCellRenderer {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogTableRowRenderer>;
						public _highlightFatal: boolean;
						public _color: java.awt.Color;
						public getTableCellRendererComponent(param0: javax.swing.JTable, param1: any, param2: boolean, param3: boolean, param4: number, param5: number): java.awt.Component;
						public constructor();
						public constructor(param0: string, param1: javax.swing.Icon, param2: number);
						public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
						public constructor(param0: javax.swing.Icon);
						public getLogLevelColor(param0: org.apache.log4j.lf5.LogLevel): java.awt.Color;
						public remove(param0: java.awt.Component): void;
						/** @deprecated */
						public postEvent(param0: java.awt.Event): boolean;
						public constructor(param0: string, param1: number);
						public remove(param0: java.awt.MenuComponent): void;
						public getAccessibleContext(): javax.accessibility.AccessibleContext;
						public getFont(): java.awt.Font;
						public constructor(param0: javax.swing.Icon, param1: number);
						public getTransferHandler(): javax.swing.TransferHandler;
						public remove(param0: number): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export class TrackingAdjustmentListener extends java.lang.Object implements java.awt.event.AdjustmentListener {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.TrackingAdjustmentListener>;
						public _lastMaximum: number;
						public constructor();
						public adjustmentValueChanged(param0: java.awt.event.AdjustmentEvent): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module categoryexplorer {
						export class CategoryAbstractCellEditor extends java.lang.Object implements javax.swing.table.TableCellEditor, javax.swing.tree.TreeCellEditor {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryAbstractCellEditor>;
							public _listenerList: javax.swing.event.EventListenerList;
							public _value: any;
							public _changeEvent: javax.swing.event.ChangeEvent;
							public _clickCountToStart: number;
							public constructor();
							public isCellEditable(param0: java.util.EventObject): boolean;
							public getTreeCellEditorComponent(param0: javax.swing.JTree, param1: any, param2: boolean, param3: boolean, param4: boolean, param5: number): java.awt.Component;
							public stopCellEditing(): boolean;
							public removeCellEditorListener(param0: javax.swing.event.CellEditorListener): void;
							public shouldSelectCell(param0: java.util.EventObject): boolean;
							public addCellEditorListener(param0: javax.swing.event.CellEditorListener): void;
							public fireEditingCanceled(): void;
							public getClickCountToStart(): number;
							public cancelCellEditing(): void;
							public getCellEditorValue(): any;
							public setClickCountToStart(param0: number): void;
							public getTableCellEditorComponent(param0: javax.swing.JTable, param1: any, param2: boolean, param3: number, param4: number): java.awt.Component;
							public setCellEditorValue(param0: any): void;
							public fireEditingStopped(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module categoryexplorer {
						export class CategoryElement extends java.lang.Object {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryElement>;
							public _categoryTitle: string;
							public constructor();
							public setTitle(param0: string): void;
							public constructor(param0: string);
							public getTitle(): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module categoryexplorer {
						export class CategoryExplorerLogRecordFilter extends java.lang.Object implements org.apache.log4j.lf5.LogRecordFilter {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerLogRecordFilter>;
							public _model: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel;
							public passes(param0: org.apache.log4j.lf5.LogRecord): boolean;
							public constructor(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel);
							public reset(): void;
							public resetAllNodes(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module categoryexplorer {
						export class CategoryExplorerModel extends javax.swing.tree.DefaultTreeModel {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel>;
							public _renderFatal: boolean;
							public _listener: java.awt.event.ActionListener;
							public _event: java.awt.event.ActionEvent;
							public addLogRecord(param0: org.apache.log4j.lf5.LogRecord): void;
							public addTreeModelListener(param0: javax.swing.event.TreeModelListener): void;
							public resetAllNodeCounts(): void;
							public valueForPathChanged(param0: javax.swing.tree.TreePath, param1: any): void;
							public update(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode, param1: boolean): void;
							public notifyActionListeners(): void;
							public setDescendantSelection(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode, param1: boolean): void;
							public addCategory(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryPath): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode;
							public isLeaf(param0: any): boolean;
							public getIndexOfChild(param0: any, param1: any): number;
							public constructor(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode);
							public getCategoryNode(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryPath): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode;
							public getRootCategoryNode(): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode;
							public getTreePathToRoot(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.tree.TreePath;
							public getChildCount(param0: any): number;
							public getChild(param0: any, param1: number): any;
							public removeTreeModelListener(param0: javax.swing.event.TreeModelListener): void;
							public addActionListener(param0: java.awt.event.ActionListener): void;
							public removeActionListener(param0: java.awt.event.ActionListener): void;
							public getRoot(): any;
							public getCategoryNode(param0: string): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode;
							public constructor(param0: javax.swing.tree.TreeNode);
							public constructor(param0: javax.swing.tree.TreeNode, param1: boolean);
							public setParentSelection(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode, param1: boolean): void;
							public refresh(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): void;
							public isCategoryPathActive(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryPath): boolean;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module categoryexplorer {
						export class CategoryExplorerTree extends javax.swing.JTree {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerTree>;
							public _model: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel;
							public _rootAlreadyExpanded: boolean;
							public constructor(param0: java.util.Hashtable<any,any>);
							public init(): void;
							public expandRootNode(): void;
							/** @deprecated */
							public postEvent(param0: java.awt.Event): boolean;
							public getToolTipText(): string;
							public getFont(): java.awt.Font;
							public getScrollableBlockIncrement(param0: java.awt.Rectangle, param1: number, param2: number): number;
							public remove(param0: java.awt.MenuComponent): void;
							public constructor(param0: javax.swing.tree.TreeModel);
							public getExplorerModel(): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel;
							public ensureRootExpansion(): void;
							public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
							public constructor(param0: any[]);
							public getScrollableTracksViewportWidth(): boolean;
							public getScrollableTracksViewportHeight(): boolean;
							public constructor(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel);
							public constructor(param0: java.util.Vector<any>);
							public constructor();
							public getAccessibleContext(): javax.accessibility.AccessibleContext;
							public remove(param0: java.awt.Component): void;
							public getPreferredScrollableViewportSize(): java.awt.Dimension;
							public constructor(param0: javax.swing.tree.TreeNode);
							public constructor(param0: javax.swing.tree.TreeNode, param1: boolean);
							public getToolTipText(param0: java.awt.event.MouseEvent): string;
							public remove(param0: number): void;
							public getScrollableUnitIncrement(param0: java.awt.Rectangle, param1: number, param2: number): number;
							public getTransferHandler(): javax.swing.TransferHandler;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module categoryexplorer {
						export class CategoryImmediateEditor extends javax.swing.tree.DefaultTreeCellEditor {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryImmediateEditor>;
							public editingIcon: javax.swing.Icon;
							public constructor(param0: javax.swing.JTree, param1: javax.swing.tree.DefaultTreeCellRenderer);
							public determineOffset(param0: javax.swing.JTree, param1: any, param2: boolean, param3: boolean, param4: boolean, param5: number): void;
							public getTreeCellEditorComponent(param0: javax.swing.JTree, param1: any, param2: boolean, param3: boolean, param4: boolean, param5: number): java.awt.Component;
							public shouldSelectCell(param0: java.util.EventObject): boolean;
							public canEditImmediately(param0: java.util.EventObject): boolean;
							public inCheckBoxHitRegion(param0: java.awt.event.MouseEvent): boolean;
							public valueChanged(param0: javax.swing.event.TreeSelectionEvent): void;
							public constructor(param0: javax.swing.JTree, param1: javax.swing.tree.DefaultTreeCellRenderer, param2: javax.swing.tree.TreeCellEditor);
							public constructor(param0: javax.swing.JTree, param1: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNodeRenderer, param2: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNodeEditor);
							public actionPerformed(param0: java.awt.event.ActionEvent): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module categoryexplorer {
						export class CategoryNode extends javax.swing.tree.DefaultMutableTreeNode {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode>;
							public _selected: boolean;
							public _numberOfContainedRecords: number;
							public _numberOfRecordsFromChildren: number;
							public _hasFatalChildren: boolean;
							public _hasFatalRecords: boolean;
							public constructor(param0: any, param1: boolean);
							public hashCode(): number;
							public toString(): string;
							public setHasFatalChildren(param0: boolean): void;
							public addRecord(): void;
							public insert(param0: javax.swing.tree.MutableTreeNode, param1: number): void;
							public constructor(param0: string);
							public hasFatalRecords(): boolean;
							public removeFromParent(): void;
							public remove(param0: javax.swing.tree.MutableTreeNode): void;
							public constructor();
							public addRecordFromChild(): void;
							public setParent(param0: javax.swing.tree.MutableTreeNode): void;
							public getTotalNumberOfRecords(): number;
							public isSelected(): boolean;
							public getTitle(): string;
							public setHasFatalRecords(param0: boolean): void;
							public getNumberOfContainedRecords(): number;
							public hasFatalChildren(): boolean;
							public setUserObject(param0: any): void;
							public remove(param0: number): void;
							/** @deprecated */
							public setAllDescendantsSelected(): void;
							public addRecordToParent(): void;
							public equals(param0: any): boolean;
							public resetNumberOfContainedRecords(): void;
							public constructor(param0: any);
							public setSelected(param0: boolean): void;
							/** @deprecated */
							public setAllDescendantsDeSelected(): void;
							public getNumberOfRecordsFromChildren(): number;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module categoryexplorer {
						export class CategoryNodeEditor extends org.apache.log4j.lf5.viewer.categoryexplorer.CategoryAbstractCellEditor {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNodeEditor>;
							public _renderer: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNodeEditorRenderer;
							public _lastEditedNode: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode;
							public _checkBox: javax.swing.JCheckBox;
							public _categoryModel: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel;
							public _tree: javax.swing.JTree;
							public constructor();
							public getDisplayedProperties(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): any;
							public createSelectDescendantsMenuItem(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.JMenuItem;
							public getTreeCellEditorComponent(param0: javax.swing.JTree, param1: any, param2: boolean, param3: boolean, param4: boolean, param5: number): java.awt.Component;
							public createCollapseMenuItem(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.JMenuItem;
							public createRemoveMenuItem(): javax.swing.JMenuItem;
							public createUnselectDescendantsMenuItem(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.JMenuItem;
							public getTreePath(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.tree.TreePath;
							public removeUnusedNodes(): number;
							public showPopup(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode, param1: number, param2: number): void;
							public getCellEditorValue(): any;
							public collapse(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): void;
							public createExpandMenuItem(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.JMenuItem;
							public showPropertiesDialog(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): void;
							public expand(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): void;
							public collapseDescendants(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): void;
							public getTableCellEditorComponent(param0: javax.swing.JTable, param1: any, param2: boolean, param3: number, param4: number): java.awt.Component;
							public constructor(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel);
							public createPropertiesMenuItem(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.JMenuItem;
							public expandDescendants(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module categoryexplorer {
						export class CategoryNodeEditorRenderer extends org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNodeRenderer {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNodeEditorRenderer>;
							public constructor();
							public getAccessibleContext(): javax.accessibility.AccessibleContext;
							public constructor(param0: string, param1: javax.swing.Icon, param2: number);
							/** @deprecated */
							public postEvent(param0: java.awt.Event): boolean;
							public constructor(param0: string, param1: number);
							public constructor(param0: javax.swing.Icon, param1: number);
							public remove(param0: java.awt.Component): void;
							public getFont(): java.awt.Font;
							public remove(param0: java.awt.MenuComponent): void;
							public constructor(param0: javax.swing.Icon);
							public constructor(param0: string);
							public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
							public remove(param0: number): void;
							public getCheckBox(): javax.swing.JCheckBox;
							public getTransferHandler(): javax.swing.TransferHandler;
							public getTreeCellRendererComponent(param0: javax.swing.JTree, param1: any, param2: boolean, param3: boolean, param4: boolean, param5: number, param6: boolean): java.awt.Component;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module categoryexplorer {
						export class CategoryNodeRenderer extends javax.swing.tree.DefaultTreeCellRenderer {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNodeRenderer>;
							public static FATAL_CHILDREN: java.awt.Color;
							public _checkBox: javax.swing.JCheckBox;
							public _panel: javax.swing.JPanel;
							public static _sat: javax.swing.ImageIcon;
							public constructor();
							public getAccessibleContext(): javax.accessibility.AccessibleContext;
							public constructor(param0: string, param1: javax.swing.Icon, param2: number);
							/** @deprecated */
							public postEvent(param0: java.awt.Event): boolean;
							public constructor(param0: string, param1: number);
							public constructor(param0: javax.swing.Icon, param1: number);
							public remove(param0: java.awt.Component): void;
							public getFont(): java.awt.Font;
							public getCheckBoxOffset(): java.awt.Dimension;
							public remove(param0: java.awt.MenuComponent): void;
							public constructor(param0: javax.swing.Icon);
							public constructor(param0: string);
							public imageUpdate(param0: java.awt.Image, param1: number, param2: number, param3: number, param4: number, param5: number): boolean;
							public buildToolTip(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): string;
							public remove(param0: number): void;
							public getTransferHandler(): javax.swing.TransferHandler;
							public getTreeCellRendererComponent(param0: javax.swing.JTree, param1: any, param2: boolean, param3: boolean, param4: boolean, param5: number, param6: boolean): java.awt.Component;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module categoryexplorer {
						export class CategoryPath extends java.lang.Object {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryPath>;
							public _categoryElements: java.util.LinkedList;
							public constructor();
							public removeAllCategoryElements(): void;
							public size(): number;
							public constructor(param0: string);
							public toString(): string;
							public isEmpty(): boolean;
							public categoryElementAt(param0: number): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryElement;
							public addCategoryElement(param0: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryElement): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module categoryexplorer {
						export class TreeModelAdapter extends java.lang.Object implements javax.swing.event.TreeModelListener {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.TreeModelAdapter>;
							public constructor();
							public treeNodesInserted(param0: javax.swing.event.TreeModelEvent): void;
							public treeNodesChanged(param0: javax.swing.event.TreeModelEvent): void;
							public treeStructureChanged(param0: javax.swing.event.TreeModelEvent): void;
							public treeNodesRemoved(param0: javax.swing.event.TreeModelEvent): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module configure {
						export class ConfigurationManager extends java.lang.Object {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.configure.ConfigurationManager>;
							public static treePathToString(param0: javax.swing.tree.TreePath): string;
							public processLogTableColumns(param0: org.w3c.dom.Document): void;
							public constructor(param0: org.apache.log4j.lf5.viewer.LogBrokerMonitor, param1: org.apache.log4j.lf5.viewer.LogTable);
							public store(param0: string): void;
							public processRecordFilter(param0: org.w3c.dom.Document): void;
							public load(): void;
							public reset(): void;
							public getFilename(): string;
							public collapseTree(): void;
							public deleteConfigurationFile(): void;
							public save(): void;
							public selectAllNodes(): void;
							public processCategories(param0: org.w3c.dom.Document): void;
							public getValue(param0: org.w3c.dom.NamedNodeMap, param1: string): string;
							public processLogLevels(param0: org.w3c.dom.Document): void;
							public processLogLevelColors(param0: org.w3c.dom.Document): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module lf5 {
				export module viewer {
					export module configure {
						export class MRUFileManager extends java.lang.Object {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.configure.MRUFileManager>;
							public constructor();
							public getFile(param0: number): any;
							public set(param0: java.io.File): void;
							public moveToTop(param0: number): void;
							public size(): number;
							public getMRUFileList(): string[];
							public setMRU(param0: any): void;
							public load(): void;
							public constructor(param0: number);
							public setMaxSize(param0: number): void;
							public getFilename(): string;
							public set(param0: java.net.URL): void;
							public getInputStream(param0: java.io.File): java.io.InputStream;
							public getInputStream(param0: number): java.io.InputStream;
							public getInputStream(param0: java.net.URL): java.io.InputStream;
							public save(): void;
							public static createConfigurationDirectory(): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module net {
				export class DefaultEvaluator extends java.lang.Object implements org.apache.log4j.spi.TriggeringEventEvaluator {
					public static class: java.lang.Class<org.apache.log4j.net.DefaultEvaluator>;
					public isTriggeringEvent(param0: org.apache.log4j.spi.LoggingEvent): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module net {
				export class JMSAppender extends org.apache.log4j.AppenderSkeleton {
					public static class: java.lang.Class<org.apache.log4j.net.JMSAppender>;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getTopicPublisher(): javax.jms.TopicPublisher;
					public getTopicConnection(): javax.jms.TopicConnection;
					public setSecurityCredentials(param0: string): void;
					public getUserName(): string;
					public setTopicBindingName(param0: string): void;
					public constructor();
					public close(): void;
					public getTopicSession(): javax.jms.TopicSession;
					public setLocationInfo(param0: boolean): void;
					public lookup(param0: javax.naming.Context, param1: string): any;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public getProviderURL(): string;
					public getInitialContextFactoryName(): string;
					public setPassword(param0: string): void;
					public setURLPkgPrefixes(param0: string): void;
					public setSecurityPrincipalName(param0: string): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public setUserName(param0: string): void;
					public setProviderURL(param0: string): void;
					public getPassword(): string;
					public requiresLayout(): boolean;
					public constructor(param0: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public getName(): string;
					public getTopicBindingName(): string;
					public setTopicConnectionFactoryBindingName(param0: string): void;
					public activateOptions(): void;
					public getSecurityCredentials(): string;
					public getSecurityPrincipalName(): string;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public getLocationInfo(): boolean;
					public setInitialContextFactoryName(param0: string): void;
					public getTopicConnectionFactoryBindingName(): string;
					public checkEntryConditions(): boolean;
					public clearFilters(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module net {
				export class JMSSink extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.net.JMSSink>;
					public constructor(param0: string, param1: string, param2: string, param3: string);
					public onMessage(param0: javax.jms.Message): void;
					public static lookup(param0: javax.naming.Context, param1: string): any;
					public static main(param0: string[]): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module net {
				export class SMTPAppender extends org.apache.log4j.AppenderSkeleton implements org.apache.log4j.xml.UnrecognizedElementHandler {
					public static class: java.lang.Class<org.apache.log4j.net.SMTPAppender>;
					public cb: org.apache.log4j.helpers.CyclicBuffer;
					public msg: javax.mail.Message;
					public evaluator: org.apache.log4j.spi.TriggeringEventEvaluator;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public getBcc(): string;
					public constructor();
					public close(): void;
					public setLocationInfo(param0: boolean): void;
					public setFrom(param0: string): void;
					public formatBody(): string;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public getEvaluator(): org.apache.log4j.spi.TriggeringEventEvaluator;
					public getReplyTo(): string;
					public setEvaluatorClass(param0: string): void;
					public setSMTPUsername(param0: string): void;
					public setSMTPProtocol(param0: string): void;
					public getSMTPPort(): number;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public setSMTPPort(param0: number): void;
					public setTo(param0: string): void;
					public clearFilters(): void;
					public sendBuffer(): void;
					public getFrom(): string;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public setSendOnClose(param0: boolean): void;
					public getSMTPProtocol(): string;
					public getSubject(): string;
					public getSMTPPassword(): string;
					public getBufferSize(): number;
					public setReplyTo(param0: string): void;
					public setSubject(param0: string): void;
					public constructor(param0: org.apache.log4j.spi.TriggeringEventEvaluator);
					public parseUnrecognizedElement(param0: org.w3c.dom.Element, param1: java.util.Properties): boolean;
					public setSMTPHost(param0: string): void;
					public getCc(): string;
					public setEvaluator(param0: org.apache.log4j.spi.TriggeringEventEvaluator): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getSendOnClose(): boolean;
					public setSMTPPassword(param0: string): void;
					public createSession(): javax.mail.Session;
					public getSMTPHost(): string;
					public getSMTPDebug(): boolean;
					public getSMTPUsername(): string;
					public getTo(): string;
					public setBcc(param0: string): void;
					public setCc(param0: string): void;
					public requiresLayout(): boolean;
					public constructor(param0: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public getEvaluatorClass(): string;
					public getName(): string;
					public setBufferSize(param0: number): void;
					public activateOptions(): void;
					public addressMessage(param0: javax.mail.Message): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public getLocationInfo(): boolean;
					public checkEntryConditions(): boolean;
					public setSMTPDebug(param0: boolean): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module net {
				export class SimpleSocketServer extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.net.SimpleSocketServer>;
					public constructor();
					public static main(param0: string[]): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module net {
				export class SocketAppender extends org.apache.log4j.AppenderSkeleton {
					public static class: java.lang.Class<org.apache.log4j.net.SocketAppender>;
					public static DEFAULT_PORT: number;
					public static ZONE: string;
					public setReconnectionDelay(param0: number): void;
					public getPort(): number;
					public isAdvertiseViaMulticastDNS(): boolean;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public cleanUp(): void;
					public setPort(param0: number): void;
					public getReconnectionDelay(): number;
					public constructor();
					public constructor(param0: string, param1: number);
					public close(): void;
					public setLocationInfo(param0: boolean): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public setApplication(param0: string): void;
					public getApplication(): string;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public setAdvertiseViaMulticastDNS(param0: boolean): void;
					public getRemoteHost(): string;
					public setRemoteHost(param0: string): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public requiresLayout(): boolean;
					public constructor(param0: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public getName(): string;
					public activateOptions(): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public getLocationInfo(): boolean;
					public constructor(param0: java.net.InetAddress, param1: number);
					public clearFilters(): void;
				}
				export module SocketAppender {
					export class Connector extends java.lang.Thread {
						public static class: java.lang.Class<org.apache.log4j.net.SocketAppender.Connector>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module net {
				export class SocketHubAppender extends org.apache.log4j.AppenderSkeleton {
					public static class: java.lang.Class<org.apache.log4j.net.SocketHubAppender>;
					public static ZONE: string;
					public getPort(): number;
					public isAdvertiseViaMulticastDNS(): boolean;
					public createServerSocket(param0: number): java.net.ServerSocket;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public cleanUp(): void;
					public setPort(param0: number): void;
					public getBufferSize(): number;
					public constructor();
					public close(): void;
					public setLocationInfo(param0: boolean): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public setApplication(param0: string): void;
					public constructor(param0: number);
					public getApplication(): string;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public setAdvertiseViaMulticastDNS(param0: boolean): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public requiresLayout(): boolean;
					public constructor(param0: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public getName(): string;
					public setBufferSize(param0: number): void;
					public activateOptions(): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public getLocationInfo(): boolean;
					public clearFilters(): void;
				}
				export module SocketHubAppender {
					export class ServerMonitor extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<org.apache.log4j.net.SocketHubAppender.ServerMonitor>;
						public stopMonitor(): void;
						public run(): void;
						public constructor(param0: org.apache.log4j.net.SocketHubAppender, param1: number, param2: java.util.Vector);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module net {
				export class SocketNode extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<org.apache.log4j.net.SocketNode>;
					public run(): void;
					public constructor(param0: java.net.Socket, param1: org.apache.log4j.spi.LoggerRepository);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module net {
				export class SocketServer extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.net.SocketServer>;
					public static main(param0: string[]): void;
					public constructor(param0: java.io.File);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module net {
				export class SyslogAppender extends org.apache.log4j.AppenderSkeleton {
					public static class: java.lang.Class<org.apache.log4j.net.SyslogAppender>;
					public static LOG_KERN: number;
					public static LOG_USER: number;
					public static LOG_MAIL: number;
					public static LOG_DAEMON: number;
					public static LOG_AUTH: number;
					public static LOG_SYSLOG: number;
					public static LOG_LPR: number;
					public static LOG_NEWS: number;
					public static LOG_UUCP: number;
					public static LOG_CRON: number;
					public static LOG_AUTHPRIV: number;
					public static LOG_FTP: number;
					public static LOG_LOCAL0: number;
					public static LOG_LOCAL1: number;
					public static LOG_LOCAL2: number;
					public static LOG_LOCAL3: number;
					public static LOG_LOCAL4: number;
					public static LOG_LOCAL5: number;
					public static LOG_LOCAL6: number;
					public static LOG_LOCAL7: number;
					public static SYSLOG_HOST_OI: number;
					public static FACILITY_OI: number;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public setHeader(param0: boolean): void;
					public getFacility(): string;
					public constructor();
					public close(): void;
					public setFacility(param0: string): void;
					public static getFacility(param0: string): number;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getHeader(): boolean;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public getSyslogHost(): string;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public static getFacilityString(param0: number): string;
					public requiresLayout(): boolean;
					public constructor(param0: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public constructor(param0: org.apache.log4j.Layout, param1: string, param2: number);
					public getFacilityPrinting(): boolean;
					public constructor(param0: org.apache.log4j.Layout, param1: number);
					public setSyslogHost(param0: string): void;
					public getName(): string;
					public activateOptions(): void;
					public setFacilityPrinting(param0: boolean): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public clearFilters(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module net {
				export class TelnetAppender extends org.apache.log4j.AppenderSkeleton {
					public static class: java.lang.Class<org.apache.log4j.net.TelnetAppender>;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public getPort(): number;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setPort(param0: number): void;
					public setName(param0: string): void;
					public requiresLayout(): boolean;
					public constructor(param0: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public constructor();
					public getName(): string;
					public close(): void;
					public activateOptions(): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public clearFilters(): void;
					public getFilter(): org.apache.log4j.spi.Filter;
				}
				export module TelnetAppender {
					export class SocketHandler extends java.lang.Thread {
						public static class: java.lang.Class<org.apache.log4j.net.TelnetAppender.SocketHandler>;
						public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string);
						public constructor();
						public close(): void;
						public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable);
						public constructor(param0: java.lang.Runnable);
						public constructor(param0: java.lang.Runnable, param1: string);
						public send(param0: string): void;
						public finalize(): void;
						public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string, param3: number);
						public run(): void;
						public constructor(param0: java.lang.ThreadGroup, param1: string);
						public constructor(param0: org.apache.log4j.net.TelnetAppender, param1: number);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module net {
				export class ZeroConfSupport extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.net.ZeroConfSupport>;
					public unadvertise(): void;
					public constructor(param0: string, param1: number, param2: string, param3: java.util.Map<any,any>);
					public advertise(): void;
					public constructor(param0: string, param1: number, param2: string);
					public static getJMDNSInstance(): any;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module nt {
				export class NTEventLogAppender extends org.apache.log4j.AppenderSkeleton {
					public static class: java.lang.Class<org.apache.log4j.nt.NTEventLogAppender>;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public constructor(param0: string);
					public getSource(): string;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public constructor(param0: string, param1: org.apache.log4j.Layout);
					public finalize(): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public constructor(param0: string, param1: string, param2: org.apache.log4j.Layout);
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public constructor(param0: string, param1: string);
					public requiresLayout(): boolean;
					public constructor(param0: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public constructor();
					public getName(): string;
					public close(): void;
					public constructor(param0: org.apache.log4j.Layout);
					public activateOptions(): void;
					public setSource(param0: string): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public clearFilters(): void;
					public getFilter(): org.apache.log4j.spi.Filter;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module or {
				export class DefaultRenderer extends java.lang.Object implements org.apache.log4j.or.ObjectRenderer {
					public static class: java.lang.Class<org.apache.log4j.or.DefaultRenderer>;
					public doRender(param0: any): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module or {
				export class ObjectRenderer extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.or.ObjectRenderer>;
					/**
					 * Constructs a new instance of the org.apache.log4j.or.ObjectRenderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						doRender(param0: any): string;
					});
					public constructor();
					public doRender(param0: any): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module or {
				export class RendererMap extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.or.RendererMap>;
					public get(param0: any): org.apache.log4j.or.ObjectRenderer;
					public constructor();
					public findAndRender(param0: any): string;
					public static addRenderer(param0: org.apache.log4j.spi.RendererSupport, param1: string, param2: string): void;
					public clear(): void;
					public get(param0: java.lang.Class<any>): org.apache.log4j.or.ObjectRenderer;
					public getDefaultRenderer(): org.apache.log4j.or.ObjectRenderer;
					public put(param0: java.lang.Class<any>, param1: org.apache.log4j.or.ObjectRenderer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module or {
				export class ThreadGroupRenderer extends java.lang.Object implements org.apache.log4j.or.ObjectRenderer {
					public static class: java.lang.Class<org.apache.log4j.or.ThreadGroupRenderer>;
					public constructor();
					public doRender(param0: any): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module or {
				export module jms {
					export class MessageRenderer extends java.lang.Object implements org.apache.log4j.or.ObjectRenderer {
						public static class: java.lang.Class<org.apache.log4j.or.jms.MessageRenderer>;
						public constructor();
						public doRender(param0: any): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module or {
				export module sax {
					export class AttributesRenderer extends java.lang.Object implements org.apache.log4j.or.ObjectRenderer {
						public static class: java.lang.Class<org.apache.log4j.or.sax.AttributesRenderer>;
						public constructor();
						public doRender(param0: any): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class BridgePatternConverter extends org.apache.log4j.helpers.PatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.BridgePatternConverter>;
					public constructor(param0: org.apache.log4j.helpers.FormattingInfo);
					public constructor(param0: string);
					public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					public constructor();
					public format(param0: java.lang.StringBuffer, param1: org.apache.log4j.spi.LoggingEvent): void;
					public ignoresThrowable(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class BridgePatternParser extends org.apache.log4j.helpers.PatternParser {
					public static class: java.lang.Class<org.apache.log4j.pattern.BridgePatternParser>;
					public parse(): org.apache.log4j.helpers.PatternConverter;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class CachedDateFormat extends java.text.DateFormat {
					public static class: java.lang.Class<org.apache.log4j.pattern.CachedDateFormat>;
					public static NO_MILLISECONDS: number;
					public static UNRECOGNIZED_MILLISECONDS: number;
					public constructor(param0: java.text.DateFormat, param1: number);
					public static findMillisecondStart(param0: number, param1: string, param2: java.text.DateFormat): number;
					public format(param0: java.util.Date): string;
					public parse(param0: string): java.util.Date;
					public format(param0: java.util.Date, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
					public format(param0: any): string;
					public getNumberFormat(): java.text.NumberFormat;
					public format(param0: number, param1: java.lang.StringBuffer): java.lang.StringBuffer;
					public constructor();
					public setTimeZone(param0: java.util.TimeZone): void;
					public format(param0: any, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
					public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
					public static getMaximumCacheValidity(param0: string): number;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class ClassNamePatternConverter extends org.apache.log4j.pattern.NamePatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.ClassNamePatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.ClassNamePatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class DatePatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.DatePatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.DatePatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
					public format(param0: java.util.Date, param1: java.lang.StringBuffer): void;
				}
				export module DatePatternConverter {
					export class DefaultZoneDateFormat extends java.text.DateFormat {
						public static class: java.lang.Class<org.apache.log4j.pattern.DatePatternConverter.DefaultZoneDateFormat>;
						public parse(param0: string): java.util.Date;
						public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
						public constructor(param0: java.text.DateFormat);
						public format(param0: java.util.Date, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
						public format(param0: any): string;
						public constructor();
						public format(param0: java.util.Date): string;
						public format(param0: any, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class FileDatePatternConverter extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.pattern.FileDatePatternConverter>;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.PatternConverter;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class FileLocationPatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.FileLocationPatternConverter>;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.FileLocationPatternConverter;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class FormattingInfo extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.pattern.FormattingInfo>;
					public constructor(param0: boolean, param1: number, param2: number);
					public static getDefault(): org.apache.log4j.pattern.FormattingInfo;
					public isLeftAligned(): boolean;
					public getMinLength(): number;
					public getMaxLength(): number;
					public format(param0: number, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class FullLocationPatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.FullLocationPatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.FullLocationPatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class IntegerPatternConverter extends org.apache.log4j.pattern.PatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.IntegerPatternConverter>;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.IntegerPatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class LevelPatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.LevelPatternConverter>;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.LevelPatternConverter;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public format(param0: any, param1: java.lang.StringBuffer): void;
					public getStyleClass(param0: any): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class LineLocationPatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.LineLocationPatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.LineLocationPatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class LineSeparatorPatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.LineSeparatorPatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.LineSeparatorPatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class LiteralPatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.LiteralPatternConverter>;
					public constructor(param0: string, param1: string);
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public constructor(param0: string);
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class LogEvent extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.apache.log4j.pattern.LogEvent>;
					public fqnOfCategoryClass: string;
					public categoryName: string;
					public level: org.apache.log4j.Priority;
					public timeStamp: number;
					public getMDC(param0: string): any;
					public getPropertyKeySet(): java.util.Set<any>;
					public static getStartTime(): number;
					public setProperty(param0: string, param1: string): void;
					public getProperties(): java.util.Map<any,any>;
					public getNDC(): string;
					public getMDCCopy(): void;
					public getThrowableInformation(): org.apache.log4j.spi.ThrowableInformation;
					public constructor(param0: string, param1: org.apache.log4j.Category, param2: number, param3: org.apache.log4j.Priority, param4: any, param5: java.lang.Throwable);
					public getFQNOfLoggerClass(): string;
					public getMessage(): any;
					public getRenderedMessage(): string;
					public getLoggerName(): string;
					public getTimeStamp(): number;
					public constructor(param0: string, param1: org.apache.log4j.Logger, param2: number, param3: org.apache.log4j.Level, param4: any, param5: string, param6: org.apache.log4j.spi.ThrowableInformation, param7: string, param8: org.apache.log4j.spi.LocationInfo, param9: java.util.Map<any,any>);
					public getLocationInformation(): org.apache.log4j.spi.LocationInfo;
					public constructor(param0: string, param1: org.apache.log4j.Category, param2: org.apache.log4j.Priority, param3: any, param4: java.lang.Throwable);
					public getThrowableStrRep(): string[];
					public getProperty(param0: string): string;
					public locationInformationExists(): boolean;
					public getThreadName(): string;
					public getLevel(): org.apache.log4j.Level;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class LoggerPatternConverter extends org.apache.log4j.pattern.NamePatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.LoggerPatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.LoggerPatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export abstract class LoggingEventPatternConverter extends org.apache.log4j.pattern.PatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.LoggingEventPatternConverter>;
					public constructor(param0: string, param1: string);
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public handlesThrowable(): boolean;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class MessagePatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.MessagePatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.MessagePatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class MethodLocationPatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.MethodLocationPatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public format(param0: any, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.MethodLocationPatternConverter;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class NDCPatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.NDCPatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.NDCPatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export abstract class NameAbbreviator extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.pattern.NameAbbreviator>;
					public abbreviate(param0: number, param1: java.lang.StringBuffer): void;
					public constructor();
					public static getAbbreviator(param0: string): org.apache.log4j.pattern.NameAbbreviator;
					public static getDefaultAbbreviator(): org.apache.log4j.pattern.NameAbbreviator;
				}
				export module NameAbbreviator {
					export class DropElementAbbreviator extends org.apache.log4j.pattern.NameAbbreviator {
						public static class: java.lang.Class<org.apache.log4j.pattern.NameAbbreviator.DropElementAbbreviator>;
						public constructor();
						public constructor(param0: number);
						public abbreviate(param0: number, param1: java.lang.StringBuffer): void;
					}
					export class MaxElementAbbreviator extends org.apache.log4j.pattern.NameAbbreviator {
						public static class: java.lang.Class<org.apache.log4j.pattern.NameAbbreviator.MaxElementAbbreviator>;
						public constructor();
						public constructor(param0: number);
						public abbreviate(param0: number, param1: java.lang.StringBuffer): void;
					}
					export class NOPAbbreviator extends org.apache.log4j.pattern.NameAbbreviator {
						public static class: java.lang.Class<org.apache.log4j.pattern.NameAbbreviator.NOPAbbreviator>;
						public constructor();
						public abbreviate(param0: number, param1: java.lang.StringBuffer): void;
					}
					export class PatternAbbreviator extends org.apache.log4j.pattern.NameAbbreviator {
						public static class: java.lang.Class<org.apache.log4j.pattern.NameAbbreviator.PatternAbbreviator>;
						public constructor();
						public abbreviate(param0: number, param1: java.lang.StringBuffer): void;
						public constructor(param0: java.util.List<any>);
					}
					export class PatternAbbreviatorFragment extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.pattern.NameAbbreviator.PatternAbbreviatorFragment>;
						public constructor(param0: number, param1: string);
						public abbreviate(param0: java.lang.StringBuffer, param1: number): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export abstract class NamePatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.NamePatternConverter>;
					public constructor(param0: string, param1: string);
					public abbreviate(param0: number, param1: java.lang.StringBuffer): void;
					public constructor(param0: string, param1: string, param2: string[]);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export abstract class PatternConverter extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.pattern.PatternConverter>;
					public constructor(param0: string, param1: string);
					public getName(): string;
					public format(param0: any, param1: java.lang.StringBuffer): void;
					public getStyleClass(param0: any): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class PatternParser extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.pattern.PatternParser>;
					public static getPatternLayoutRules(): java.util.Map<any,any>;
					public static parse(param0: string, param1: java.util.List<any>, param2: java.util.List<any>, param3: java.util.Map<any,any>, param4: java.util.Map<any,any>): void;
					public static getFileNamePatternRules(): java.util.Map<any,any>;
				}
				export module PatternParser {
					export class ReadOnlyMap extends java.lang.Object implements java.util.Map<any,any> {
						public static class: java.lang.Class<org.apache.log4j.pattern.PatternParser.ReadOnlyMap>;
						public keySet(): java.util.Set<any>;
						public put(param0: any, param1: any): any;
						public remove(param0: any): any;
						public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
						public replace(param0: any, param1: any): any;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getOrDefault(param0: any, param1: any): any;
						public values(): java.util.Collection<any>;
						public values(): java.util.Collection<any>;
						public putAll(param0: java.util.Map<any,any>): void;
						public putAll(param0: java.util.Map<any,any>): void;
						public isEmpty(): boolean;
						public remove(param0: any, param1: any): boolean;
						public size(): number;
						public putIfAbsent(param0: any, param1: any): any;
						public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
						public forEach(param0: any /* any<any,any>*/): void;
						public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
						public get(param0: any): any;
						public constructor(param0: java.util.Map<any,any>);
						public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
						public containsValue(param0: any): boolean;
						public containsKey(param0: any): boolean;
						public compute(param0: any, param1: any /* any<any,any,any>*/): any;
						public replaceAll(param0: any /* any<any,any,any>*/): void;
						public clear(): void;
						public replace(param0: any, param1: any, param2: any): boolean;
						public entrySet(): java.util.Set<any>;
						public keySet(): java.util.Set<any>;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class PropertiesPatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.PropertiesPatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.PropertiesPatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class RelativeTimePatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.RelativeTimePatternConverter>;
					public constructor(param0: string, param1: string);
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.RelativeTimePatternConverter;
					public constructor();
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
				export module RelativeTimePatternConverter {
					export class CachedTimestamp extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.pattern.RelativeTimePatternConverter.CachedTimestamp>;
						public constructor(param0: number, param1: string);
						public format(param0: number, param1: java.lang.StringBuffer): boolean;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class SequenceNumberPatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.SequenceNumberPatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.SequenceNumberPatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class ThreadPatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.ThreadPatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.ThreadPatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module pattern {
				export class ThrowableInformationPatternConverter extends org.apache.log4j.pattern.LoggingEventPatternConverter {
					public static class: java.lang.Class<org.apache.log4j.pattern.ThrowableInformationPatternConverter>;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public handlesThrowable(): boolean;
					public static newInstance(param0: string[]): org.apache.log4j.pattern.ThrowableInformationPatternConverter;
					public format(param0: any, param1: java.lang.StringBuffer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module rewrite {
				export class MapRewritePolicy extends java.lang.Object implements org.apache.log4j.rewrite.RewritePolicy {
					public static class: java.lang.Class<org.apache.log4j.rewrite.MapRewritePolicy>;
					public constructor();
					public rewrite(param0: org.apache.log4j.spi.LoggingEvent): org.apache.log4j.spi.LoggingEvent;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module rewrite {
				export class PropertyRewritePolicy extends java.lang.Object implements org.apache.log4j.rewrite.RewritePolicy {
					public static class: java.lang.Class<org.apache.log4j.rewrite.PropertyRewritePolicy>;
					public constructor();
					public setProperties(param0: string): void;
					public rewrite(param0: org.apache.log4j.spi.LoggingEvent): org.apache.log4j.spi.LoggingEvent;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module rewrite {
				export class ReflectionRewritePolicy extends java.lang.Object implements org.apache.log4j.rewrite.RewritePolicy {
					public static class: java.lang.Class<org.apache.log4j.rewrite.ReflectionRewritePolicy>;
					public constructor();
					public rewrite(param0: org.apache.log4j.spi.LoggingEvent): org.apache.log4j.spi.LoggingEvent;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module rewrite {
				export class RewriteAppender extends org.apache.log4j.AppenderSkeleton implements org.apache.log4j.spi.AppenderAttachable, org.apache.log4j.xml.UnrecognizedElementHandler {
					public static class: java.lang.Class<org.apache.log4j.rewrite.RewriteAppender>;
					public removeAllAppenders(): void;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getAppender(param0: string): org.apache.log4j.Appender;
					public constructor();
					public parseUnrecognizedElement(param0: org.w3c.dom.Element, param1: java.util.Properties): boolean;
					public close(): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getAllAppenders(): java.util.Enumeration<any>;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public addAppender(param0: org.apache.log4j.Appender): void;
					public isAttached(param0: org.apache.log4j.Appender): boolean;
					public removeAppender(param0: org.apache.log4j.Appender): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public removeAppender(param0: string): void;
					public setName(param0: string): void;
					public requiresLayout(): boolean;
					public constructor(param0: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public getName(): string;
					public activateOptions(): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public setRewritePolicy(param0: org.apache.log4j.rewrite.RewritePolicy): void;
					public clearFilters(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module rewrite {
				export class RewritePolicy extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.rewrite.RewritePolicy>;
					/**
					 * Constructs a new instance of the org.apache.log4j.rewrite.RewritePolicy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						rewrite(param0: org.apache.log4j.spi.LoggingEvent): org.apache.log4j.spi.LoggingEvent;
					});
					public constructor();
					public rewrite(param0: org.apache.log4j.spi.LoggingEvent): org.apache.log4j.spi.LoggingEvent;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class AppenderAttachable extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.spi.AppenderAttachable>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.AppenderAttachable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addAppender(param0: org.apache.log4j.Appender): void;
						getAllAppenders(): java.util.Enumeration<any>;
						getAppender(param0: string): org.apache.log4j.Appender;
						isAttached(param0: org.apache.log4j.Appender): boolean;
						removeAllAppenders(): void;
						removeAppender(param0: org.apache.log4j.Appender): void;
						removeAppender(param0: string): void;
					});
					public constructor();
					public getAppender(param0: string): org.apache.log4j.Appender;
					public removeAllAppenders(): void;
					public addAppender(param0: org.apache.log4j.Appender): void;
					public isAttached(param0: org.apache.log4j.Appender): boolean;
					public removeAppender(param0: org.apache.log4j.Appender): void;
					public getAllAppenders(): java.util.Enumeration<any>;
					public removeAppender(param0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class Configurator extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.spi.Configurator>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.Configurator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						doConfigure(param0: java.io.InputStream, param1: org.apache.log4j.spi.LoggerRepository): void;
						doConfigure(param0: java.net.URL, param1: org.apache.log4j.spi.LoggerRepository): void;
					});
					public constructor();
					public static NULL: string;
					public static INHERITED: string;
					public doConfigure(param0: java.io.InputStream, param1: org.apache.log4j.spi.LoggerRepository): void;
					public doConfigure(param0: java.net.URL, param1: org.apache.log4j.spi.LoggerRepository): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class DefaultRepositorySelector extends java.lang.Object implements org.apache.log4j.spi.RepositorySelector {
					public static class: java.lang.Class<org.apache.log4j.spi.DefaultRepositorySelector>;
					public getLoggerRepository(): org.apache.log4j.spi.LoggerRepository;
					public constructor(param0: org.apache.log4j.spi.LoggerRepository);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class ErrorCode extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.spi.ErrorCode>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.ErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static FLUSH_FAILURE: number;
					public static ADDRESS_PARSE_FAILURE: number;
					public static WRITE_FAILURE: number;
					public static MISSING_LAYOUT: number;
					public static GENERIC_FAILURE: number;
					public static CLOSE_FAILURE: number;
					public static FILE_OPEN_FAILURE: number;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class ErrorHandler extends java.lang.Object implements org.apache.log4j.spi.OptionHandler {
					public static class: java.lang.Class<org.apache.log4j.spi.ErrorHandler>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.ErrorHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setLogger(param0: org.apache.log4j.Logger): void;
						error(param0: string, param1: java.lang.Exception, param2: number): void;
						error(param0: string): void;
						error(param0: string, param1: java.lang.Exception, param2: number, param3: org.apache.log4j.spi.LoggingEvent): void;
						setAppender(param0: org.apache.log4j.Appender): void;
						setBackupAppender(param0: org.apache.log4j.Appender): void;
						activateOptions(): void;
					});
					public constructor();
					public error(param0: string, param1: java.lang.Exception, param2: number): void;
					public setLogger(param0: org.apache.log4j.Logger): void;
					public setAppender(param0: org.apache.log4j.Appender): void;
					public activateOptions(): void;
					public error(param0: string, param1: java.lang.Exception, param2: number, param3: org.apache.log4j.spi.LoggingEvent): void;
					public setBackupAppender(param0: org.apache.log4j.Appender): void;
					public error(param0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export abstract class Filter extends java.lang.Object implements org.apache.log4j.spi.OptionHandler {
					public static class: java.lang.Class<org.apache.log4j.spi.Filter>;
					public next: org.apache.log4j.spi.Filter;
					public static DENY: number;
					public static NEUTRAL: number;
					public static ACCEPT: number;
					public getNext(): org.apache.log4j.spi.Filter;
					public constructor();
					public decide(param0: org.apache.log4j.spi.LoggingEvent): number;
					public activateOptions(): void;
					public setNext(param0: org.apache.log4j.spi.Filter): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class HierarchyEventListener extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.spi.HierarchyEventListener>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.HierarchyEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
						removeAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
					});
					public constructor();
					public addAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
					public removeAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class LocationInfo extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.apache.log4j.spi.LocationInfo>;
					public fullInfo: string;
					public static NA: string;
					public static NA_LOCATION_INFO: org.apache.log4j.spi.LocationInfo;
					public getFileName(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string);
					public getClassName(): string;
					public getLineNumber(): string;
					public getMethodName(): string;
					public constructor(param0: java.lang.Throwable, param1: string);
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class LoggerFactory extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.spi.LoggerFactory>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.LoggerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						makeNewLoggerInstance(param0: string): org.apache.log4j.Logger;
					});
					public constructor();
					public makeNewLoggerInstance(param0: string): org.apache.log4j.Logger;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class LoggerRepository extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.spi.LoggerRepository>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.LoggerRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addHierarchyEventListener(param0: org.apache.log4j.spi.HierarchyEventListener): void;
						isDisabled(param0: number): boolean;
						setThreshold(param0: org.apache.log4j.Level): void;
						setThreshold(param0: string): void;
						emitNoAppenderWarning(param0: org.apache.log4j.Category): void;
						getThreshold(): org.apache.log4j.Level;
						getLogger(param0: string): org.apache.log4j.Logger;
						getLogger(param0: string, param1: org.apache.log4j.spi.LoggerFactory): org.apache.log4j.Logger;
						getRootLogger(): org.apache.log4j.Logger;
						exists(param0: string): org.apache.log4j.Logger;
						shutdown(): void;
						getCurrentLoggers(): java.util.Enumeration<any>;
						getCurrentCategories(): java.util.Enumeration<any>;
						fireAddAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
						resetConfiguration(): void;
					});
					public constructor();
					public setThreshold(param0: string): void;
					public getCurrentLoggers(): java.util.Enumeration<any>;
					public fireAddAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
					public getThreshold(): org.apache.log4j.Level;
					public getRootLogger(): org.apache.log4j.Logger;
					public isDisabled(param0: number): boolean;
					public getLogger(param0: string): org.apache.log4j.Logger;
					public emitNoAppenderWarning(param0: org.apache.log4j.Category): void;
					public shutdown(): void;
					public getCurrentCategories(): java.util.Enumeration<any>;
					public getLogger(param0: string, param1: org.apache.log4j.spi.LoggerFactory): org.apache.log4j.Logger;
					public exists(param0: string): org.apache.log4j.Logger;
					public setThreshold(param0: org.apache.log4j.Level): void;
					public resetConfiguration(): void;
					public addHierarchyEventListener(param0: org.apache.log4j.spi.HierarchyEventListener): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class LoggingEvent extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.apache.log4j.spi.LoggingEvent>;
					public fqnOfCategoryClass: string;
					public categoryName: string;
					public level: org.apache.log4j.Priority;
					public timeStamp: number;
					public getMDC(param0: string): any;
					public getPropertyKeySet(): java.util.Set<any>;
					public static getStartTime(): number;
					public setProperty(param0: string, param1: string): void;
					public getProperties(): java.util.Map<any,any>;
					public getNDC(): string;
					public getMDCCopy(): void;
					public getThrowableInformation(): org.apache.log4j.spi.ThrowableInformation;
					public constructor(param0: string, param1: org.apache.log4j.Category, param2: number, param3: org.apache.log4j.Priority, param4: any, param5: java.lang.Throwable);
					public getFQNOfLoggerClass(): string;
					public getMessage(): any;
					public getRenderedMessage(): string;
					public getLoggerName(): string;
					public getTimeStamp(): number;
					public removeProperty(param0: string): any;
					public constructor(param0: string, param1: org.apache.log4j.Category, param2: number, param3: org.apache.log4j.Level, param4: any, param5: string, param6: org.apache.log4j.spi.ThrowableInformation, param7: string, param8: org.apache.log4j.spi.LocationInfo, param9: java.util.Map<any,any>);
					public getLocationInformation(): org.apache.log4j.spi.LocationInfo;
					public getLogger(): org.apache.log4j.Category;
					public constructor(param0: string, param1: org.apache.log4j.Category, param2: org.apache.log4j.Priority, param3: any, param4: java.lang.Throwable);
					public getThrowableStrRep(): string[];
					public getProperty(param0: string): string;
					public locationInformationExists(): boolean;
					public getThreadName(): string;
					public getLevel(): org.apache.log4j.Level;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class NOPLogger extends org.apache.log4j.Logger {
					public static class: java.lang.Class<org.apache.log4j.spi.NOPLogger>;
					public getChainedPriority(): org.apache.log4j.Priority;
					public removeAllAppenders(): void;
					public error(param0: any, param1: java.lang.Throwable): void;
					public isDebugEnabled(): boolean;
					public warn(param0: any): void;
					public constructor(param0: string);
					public isInfoEnabled(): boolean;
					/** @deprecated */
					public getChainedPriority(): org.apache.log4j.Priority;
					public fatal(param0: any): void;
					public log(param0: org.apache.log4j.Priority, param1: any, param2: java.lang.Throwable): void;
					public debug(param0: any, param1: java.lang.Throwable): void;
					public getAppender(param0: string): org.apache.log4j.Appender;
					public warn(param0: any, param1: java.lang.Throwable): void;
					public getEffectiveLevel(): org.apache.log4j.Level;
					public isTraceEnabled(): boolean;
					public info(param0: any, param1: java.lang.Throwable): void;
					public getAllAppenders(): java.util.Enumeration<any>;
					public trace(param0: any, param1: java.lang.Throwable): void;
					/** @deprecated */
					public setPriority(param0: org.apache.log4j.Priority): void;
					public isEnabledFor(param0: org.apache.log4j.Priority): boolean;
					public addAppender(param0: org.apache.log4j.Appender): void;
					public isAttached(param0: org.apache.log4j.Appender): boolean;
					public l7dlog(param0: org.apache.log4j.Priority, param1: string, param2: any[], param3: java.lang.Throwable): void;
					public info(param0: any): void;
					public log(param0: org.apache.log4j.Priority, param1: any): void;
					public removeAppender(param0: org.apache.log4j.Appender): void;
					public assertLog(param0: boolean, param1: string): void;
					public setLevel(param0: org.apache.log4j.Level): void;
					public l7dlog(param0: org.apache.log4j.Priority, param1: string, param2: java.lang.Throwable): void;
					public log(param0: string, param1: org.apache.log4j.Priority, param2: any, param3: java.lang.Throwable): void;
					public removeAppender(param0: string): void;
					public setResourceBundle(param0: java.util.ResourceBundle): void;
					public fatal(param0: any, param1: java.lang.Throwable): void;
					public constructor(param0: org.apache.log4j.spi.NOPLoggerRepository, param1: string);
					public setPriority(param0: org.apache.log4j.Priority): void;
					public debug(param0: any): void;
					public trace(param0: any): void;
					public callAppenders(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getResourceBundle(): java.util.ResourceBundle;
					public error(param0: any): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class NOPLoggerRepository extends java.lang.Object implements org.apache.log4j.spi.LoggerRepository {
					public static class: java.lang.Class<org.apache.log4j.spi.NOPLoggerRepository>;
					public setThreshold(param0: string): void;
					public getCurrentLoggers(): java.util.Enumeration<any>;
					public fireAddAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
					public getThreshold(): org.apache.log4j.Level;
					public getRootLogger(): org.apache.log4j.Logger;
					public isDisabled(param0: number): boolean;
					public getLogger(param0: string): org.apache.log4j.Logger;
					public emitNoAppenderWarning(param0: org.apache.log4j.Category): void;
					public shutdown(): void;
					public getCurrentCategories(): java.util.Enumeration<any>;
					public constructor();
					public getLogger(param0: string, param1: org.apache.log4j.spi.LoggerFactory): org.apache.log4j.Logger;
					public exists(param0: string): org.apache.log4j.Logger;
					public setThreshold(param0: org.apache.log4j.Level): void;
					public resetConfiguration(): void;
					public addHierarchyEventListener(param0: org.apache.log4j.spi.HierarchyEventListener): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class NullWriter extends java.io.Writer {
					public static class: java.lang.Class<org.apache.log4j.spi.NullWriter>;
					public write(param0: string, param1: number, param2: number): void;
					public append(param0: string, param1: number, param2: number): java.io.Writer;
					public write(param0: string[]): void;
					public write(param0: string): void;
					public append(param0: string): java.lang.Appendable;
					public close(): void;
					public write(param0: string[], param1: number, param2: number): void;
					public flush(): void;
					public write(param0: number): void;
					public append(param0: string): java.io.Writer;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class OptionHandler extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.spi.OptionHandler>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.OptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						activateOptions(): void;
					});
					public constructor();
					public activateOptions(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class RendererSupport extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.spi.RendererSupport>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.RendererSupport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getRendererMap(): org.apache.log4j.or.RendererMap;
						setRenderer(param0: java.lang.Class<any>, param1: org.apache.log4j.or.ObjectRenderer): void;
					});
					public constructor();
					public setRenderer(param0: java.lang.Class<any>, param1: org.apache.log4j.or.ObjectRenderer): void;
					public getRendererMap(): org.apache.log4j.or.RendererMap;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class RepositorySelector extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.spi.RepositorySelector>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.RepositorySelector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getLoggerRepository(): org.apache.log4j.spi.LoggerRepository;
					});
					public constructor();
					public getLoggerRepository(): org.apache.log4j.spi.LoggerRepository;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class RootCategory extends org.apache.log4j.Logger {
					public static class: java.lang.Class<org.apache.log4j.spi.RootCategory>;
					public removeAllAppenders(): void;
					public addAppender(param0: org.apache.log4j.Appender): void;
					public isAttached(param0: org.apache.log4j.Appender): boolean;
					public constructor(param0: string);
					public removeAppender(param0: org.apache.log4j.Appender): void;
					public getChainedLevel(): org.apache.log4j.Level;
					public setLevel(param0: org.apache.log4j.Level): void;
					public removeAppender(param0: string): void;
					public getAppender(param0: string): org.apache.log4j.Appender;
					public setPriority(param0: org.apache.log4j.Level): void;
					public constructor(param0: org.apache.log4j.Level);
					public getAllAppenders(): java.util.Enumeration<any>;
					/** @deprecated */
					public setPriority(param0: org.apache.log4j.Priority): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class RootLogger extends org.apache.log4j.Logger {
					public static class: java.lang.Class<org.apache.log4j.spi.RootLogger>;
					public getAppender(param0: string): org.apache.log4j.Appender;
					public removeAllAppenders(): void;
					public addAppender(param0: org.apache.log4j.Appender): void;
					public isAttached(param0: org.apache.log4j.Appender): boolean;
					public constructor(param0: string);
					public removeAppender(param0: org.apache.log4j.Appender): void;
					public constructor(param0: org.apache.log4j.Level);
					public getChainedLevel(): org.apache.log4j.Level;
					public setLevel(param0: org.apache.log4j.Level): void;
					public getAllAppenders(): java.util.Enumeration<any>;
					public removeAppender(param0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class ThrowableInformation extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<org.apache.log4j.spi.ThrowableInformation>;
					public constructor(param0: java.lang.Throwable);
					public constructor(param0: java.lang.Throwable, param1: org.apache.log4j.Category);
					public getThrowable(): java.lang.Throwable;
					public constructor(param0: string[]);
					public getThrowableStrRep(): string[];
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class ThrowableRenderer extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.spi.ThrowableRenderer>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.ThrowableRenderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						doRender(param0: java.lang.Throwable): string[];
					});
					public constructor();
					public doRender(param0: java.lang.Throwable): string[];
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class ThrowableRendererSupport extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.spi.ThrowableRendererSupport>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.ThrowableRendererSupport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getThrowableRenderer(): org.apache.log4j.spi.ThrowableRenderer;
						setThrowableRenderer(param0: org.apache.log4j.spi.ThrowableRenderer): void;
					});
					public constructor();
					public getThrowableRenderer(): org.apache.log4j.spi.ThrowableRenderer;
					public setThrowableRenderer(param0: org.apache.log4j.spi.ThrowableRenderer): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class TriggeringEventEvaluator extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.spi.TriggeringEventEvaluator>;
					/**
					 * Constructs a new instance of the org.apache.log4j.spi.TriggeringEventEvaluator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isTriggeringEvent(param0: org.apache.log4j.spi.LoggingEvent): boolean;
					});
					public constructor();
					public isTriggeringEvent(param0: org.apache.log4j.spi.LoggingEvent): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module spi {
				export class VectorWriter extends java.io.PrintWriter {
					public static class: java.lang.Class<org.apache.log4j.spi.VectorWriter>;
					public println(param0: number): void;
					public print(param0: any): void;
					public append(param0: string): java.lang.Appendable;
					public print(param0: string[]): void;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public write(param0: string, param1: number, param2: number): void;
					public append(param0: string, param1: number, param2: number): java.io.Writer;
					public write(param0: string): void;
					public append(param0: string): java.io.PrintWriter;
					public close(): void;
					public print(param0: number): void;
					public println(param0: string): void;
					public print(param0: boolean): void;
					public print(param0: string): void;
					public write(param0: string[]): void;
					public write(param0: number): void;
					public append(param0: string): java.io.Writer;
					public flush(): void;
					public println(): void;
					public println(param0: boolean): void;
					public println(param0: string[]): void;
					public toStringArray(): string[];
					public append(param0: string, param1: number, param2: number): java.io.PrintWriter;
					public write(param0: string[], param1: number, param2: number): void;
					public println(param0: any): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module varia {
				export class DenyAllFilter extends org.apache.log4j.spi.Filter {
					public static class: java.lang.Class<org.apache.log4j.varia.DenyAllFilter>;
					public constructor();
					/** @deprecated */
					public setOption(param0: string, param1: string): void;
					public decide(param0: org.apache.log4j.spi.LoggingEvent): number;
					public activateOptions(): void;
					/** @deprecated */
					public getOptionStrings(): string[];
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module varia {
				export class ExternallyRolledFileAppender extends org.apache.log4j.RollingFileAppender {
					public static class: java.lang.Class<org.apache.log4j.varia.ExternallyRolledFileAppender>;
					public static ROLL_OVER: string;
					public static OK: string;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public getPort(): number;
					public constructor(param0: org.apache.log4j.Layout, param1: string, param2: boolean);
					public constructor(param0: org.apache.log4j.Layout, param1: java.io.OutputStream);
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setPort(param0: number): void;
					public setName(param0: string): void;
					public requiresLayout(): boolean;
					public constructor(param0: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public constructor();
					public getName(): string;
					public close(): void;
					public activateOptions(): void;
					public constructor(param0: org.apache.log4j.Layout, param1: string, param2: boolean, param3: boolean, param4: number);
					public constructor(param0: org.apache.log4j.Layout, param1: java.io.Writer);
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public constructor(param0: org.apache.log4j.Layout, param1: string);
					public clearFilters(): void;
					public getFilter(): org.apache.log4j.spi.Filter;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module varia {
				export class FallbackErrorHandler extends java.lang.Object implements org.apache.log4j.spi.ErrorHandler {
					public static class: java.lang.Class<org.apache.log4j.varia.FallbackErrorHandler>;
					public error(param0: string, param1: java.lang.Exception, param2: number): void;
					public constructor();
					public setLogger(param0: org.apache.log4j.Logger): void;
					public activateOptions(): void;
					public setAppender(param0: org.apache.log4j.Appender): void;
					public error(param0: string, param1: java.lang.Exception, param2: number, param3: org.apache.log4j.spi.LoggingEvent): void;
					public setBackupAppender(param0: org.apache.log4j.Appender): void;
					public error(param0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module varia {
				export class HUP extends java.lang.Thread {
					public static class: java.lang.Class<org.apache.log4j.varia.HUP>;
					public run(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module varia {
				export class HUPNode extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<org.apache.log4j.varia.HUPNode>;
					public constructor(param0: java.net.Socket, param1: org.apache.log4j.varia.ExternallyRolledFileAppender);
					public run(): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module varia {
				export class LevelMatchFilter extends org.apache.log4j.spi.Filter {
					public static class: java.lang.Class<org.apache.log4j.varia.LevelMatchFilter>;
					public getAcceptOnMatch(): boolean;
					public constructor();
					public setLevelToMatch(param0: string): void;
					public decide(param0: org.apache.log4j.spi.LoggingEvent): number;
					public activateOptions(): void;
					public setAcceptOnMatch(param0: boolean): void;
					public getLevelToMatch(): string;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module varia {
				export class LevelRangeFilter extends org.apache.log4j.spi.Filter {
					public static class: java.lang.Class<org.apache.log4j.varia.LevelRangeFilter>;
					public getLevelMin(): org.apache.log4j.Level;
					public getAcceptOnMatch(): boolean;
					public constructor();
					public decide(param0: org.apache.log4j.spi.LoggingEvent): number;
					public setLevelMax(param0: org.apache.log4j.Level): void;
					public activateOptions(): void;
					public getLevelMax(): org.apache.log4j.Level;
					public setAcceptOnMatch(param0: boolean): void;
					public setLevelMin(param0: org.apache.log4j.Level): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module varia {
				export class NullAppender extends org.apache.log4j.AppenderSkeleton {
					public static class: java.lang.Class<org.apache.log4j.varia.NullAppender>;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					/** @deprecated */
					public getInstance(): org.apache.log4j.varia.NullAppender;
					public static getNullAppender(): org.apache.log4j.varia.NullAppender;
					public setName(param0: string): void;
					public requiresLayout(): boolean;
					public constructor(param0: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public constructor();
					public getName(): string;
					public close(): void;
					public activateOptions(): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public clearFilters(): void;
					public getFilter(): org.apache.log4j.spi.Filter;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module varia {
				export class ReloadingPropertyConfigurator extends java.lang.Object implements org.apache.log4j.spi.Configurator {
					public static class: java.lang.Class<org.apache.log4j.varia.ReloadingPropertyConfigurator>;
					public doConfigure(param0: java.io.InputStream, param1: org.apache.log4j.spi.LoggerRepository): void;
					public constructor();
					public doConfigure(param0: java.net.URL, param1: org.apache.log4j.spi.LoggerRepository): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module varia {
				export class Roller extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.varia.Roller>;
					public static main(param0: string[]): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module varia {
				export class StringMatchFilter extends org.apache.log4j.spi.Filter {
					public static class: java.lang.Class<org.apache.log4j.varia.StringMatchFilter>;
					public static STRING_TO_MATCH_OPTION: string;
					public static ACCEPT_ON_MATCH_OPTION: string;
					public getAcceptOnMatch(): boolean;
					public constructor();
					/** @deprecated */
					public setOption(param0: string, param1: string): void;
					public decide(param0: org.apache.log4j.spi.LoggingEvent): number;
					public activateOptions(): void;
					public getStringToMatch(): string;
					public setAcceptOnMatch(param0: boolean): void;
					/** @deprecated */
					public getOptionStrings(): string[];
					public setStringToMatch(param0: string): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module xml {
				export class DOMConfigurator extends java.lang.Object implements org.apache.log4j.spi.Configurator {
					public static class: java.lang.Class<org.apache.log4j.xml.DOMConfigurator>;
					public catFactory: org.apache.log4j.spi.LoggerFactory;
					public parseLevel(param0: org.w3c.dom.Element, param1: org.apache.log4j.Logger, param2: boolean): void;
					public parseCategoryFactory(param0: org.w3c.dom.Element): void;
					public parseRenderer(param0: org.w3c.dom.Element): void;
					public static setParameter(param0: org.w3c.dom.Element, param1: org.apache.log4j.config.PropertySetter, param2: java.util.Properties): void;
					public parseFilters(param0: org.w3c.dom.Element, param1: org.apache.log4j.Appender): void;
					public static configureAndWatch(param0: string, param1: number): void;
					public doConfigure(param0: java.io.InputStream, param1: org.apache.log4j.spi.LoggerRepository): void;
					public static configureAndWatch(param0: string): void;
					public static configure(param0: string): void;
					public constructor();
					public findAppenderByName(param0: org.w3c.dom.Document, param1: string): org.apache.log4j.Appender;
					public parse(param0: org.w3c.dom.Element): void;
					public static subst(param0: string, param1: java.util.Properties): string;
					public parseChildrenOfLoggerElement(param0: org.w3c.dom.Element, param1: org.apache.log4j.Logger, param2: boolean): void;
					public static parseElement(param0: org.w3c.dom.Element, param1: java.util.Properties, param2: java.lang.Class<any>): any;
					public setParameter(param0: org.w3c.dom.Element, param1: org.apache.log4j.config.PropertySetter): void;
					public doConfigure(param0: org.w3c.dom.Element, param1: org.apache.log4j.spi.LoggerRepository): void;
					public parseLayout(param0: org.w3c.dom.Element): org.apache.log4j.Layout;
					public parseRoot(param0: org.w3c.dom.Element): void;
					public doConfigure(param0: string, param1: org.apache.log4j.spi.LoggerRepository): void;
					public parseErrorHandler(param0: org.w3c.dom.Element, param1: org.apache.log4j.Appender): void;
					public parseThrowableRenderer(param0: org.w3c.dom.Element): org.apache.log4j.spi.ThrowableRenderer;
					public parseCategory(param0: org.w3c.dom.Element): void;
					public doConfigure(param0: java.net.URL, param1: org.apache.log4j.spi.LoggerRepository): void;
					public static configure(param0: java.net.URL): void;
					public parseAppender(param0: org.w3c.dom.Element): org.apache.log4j.Appender;
					public doConfigure(param0: org.xml.sax.InputSource, param1: org.apache.log4j.spi.LoggerRepository): void;
					public static configure(param0: org.w3c.dom.Element): void;
					public findAppenderByReference(param0: org.w3c.dom.Element): org.apache.log4j.Appender;
					public subst(param0: string): string;
					public doConfigure(param0: java.io.Reader, param1: org.apache.log4j.spi.LoggerRepository): void;
				}
				export module DOMConfigurator {
					export class ParseAction extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.xml.DOMConfigurator.ParseAction>;
						/**
						 * Constructs a new instance of the org.apache.log4j.xml.DOMConfigurator$ParseAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							parse(param0: javax.xml.parsers.DocumentBuilder): org.w3c.dom.Document;
						});
						public constructor();
						public parse(param0: javax.xml.parsers.DocumentBuilder): org.w3c.dom.Document;
					}
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module xml {
				export class Log4jEntityResolver extends java.lang.Object implements org.xml.sax.EntityResolver {
					public static class: java.lang.Class<org.apache.log4j.xml.Log4jEntityResolver>;
					public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module xml {
				export class SAXErrorHandler extends java.lang.Object implements org.xml.sax.ErrorHandler {
					public static class: java.lang.Class<org.apache.log4j.xml.SAXErrorHandler>;
					public warning(param0: org.xml.sax.SAXParseException): void;
					public fatalError(param0: org.xml.sax.SAXParseException): void;
					public constructor();
					public error(param0: org.xml.sax.SAXParseException): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module xml {
				export class UnrecognizedElementHandler extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.xml.UnrecognizedElementHandler>;
					/**
					 * Constructs a new instance of the org.apache.log4j.xml.UnrecognizedElementHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						parseUnrecognizedElement(param0: org.w3c.dom.Element, param1: java.util.Properties): boolean;
					});
					public constructor();
					public parseUnrecognizedElement(param0: org.w3c.dom.Element, param1: java.util.Properties): boolean;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module xml {
				export class XMLLayout extends org.apache.log4j.Layout {
					public static class: java.lang.Class<org.apache.log4j.xml.XMLLayout>;
					public constructor();
					public getProperties(): boolean;
					public setLocationInfo(param0: boolean): void;
					public activateOptions(): void;
					public format(param0: org.apache.log4j.spi.LoggingEvent): string;
					public getLocationInfo(): boolean;
					public ignoresThrowable(): boolean;
					public setProperties(param0: boolean): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module xml {
				export class XMLWatchdog extends org.apache.log4j.helpers.FileWatchdog {
					public static class: java.lang.Class<org.apache.log4j.xml.XMLWatchdog>;
					public doOnChange(): void;
					public run(): void;
				}
			}
		}
	}
}