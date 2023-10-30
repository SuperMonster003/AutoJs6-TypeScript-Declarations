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
				public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
				public finalize(): void;
				public setName(name: string): void;
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public constructor();
				public constructor(isActive: boolean);
				public getFirstFilter(): org.apache.log4j.spi.Filter;
				public append(param0: org.apache.log4j.spi.LoggingEvent): void;
				public getThreshold(): org.apache.log4j.Priority;
				public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
				public setThreshold(threshold: org.apache.log4j.Priority): void;
				public clearFilters(): void;
				public setName(param0: string): void;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public close(): void;
				public requiresLayout(): boolean;
				public getFilter(): org.apache.log4j.spi.Filter;
				public isAsSevereAsThreshold(priority: org.apache.log4j.Priority): boolean;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public setLayout(layout: org.apache.log4j.Layout): void;
				public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
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
				public setBlocking(value: boolean): void;
				public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
				public getAllAppenders(): java.util.Enumeration<any>;
				public setName(name: string): void;
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public getLocationInfo(): boolean;
				public constructor();
				public constructor(isActive: boolean);
				public append(param0: org.apache.log4j.spi.LoggingEvent): void;
				public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
				public clearFilters(): void;
				public removeAppender(param0: org.apache.log4j.Appender): void;
				public removeAppender(param0: string): void;
				public setName(param0: string): void;
				public close(): void;
				public requiresLayout(): boolean;
				public setBufferSize(size: number): void;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public append(event: org.apache.log4j.spi.LoggingEvent): void;
				public isAttached(param0: org.apache.log4j.Appender): boolean;
				public getFilter(): org.apache.log4j.spi.Filter;
				public removeAppender(appender: org.apache.log4j.Appender): void;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public isAttached(appender: org.apache.log4j.Appender): boolean;
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public setLocationInfo(flag: boolean): void;
				public removeAppender(name: string): void;
				public setLayout(layout: org.apache.log4j.Layout): void;
				public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
				public addAppender(newAppender: org.apache.log4j.Appender): void;
				public getAppender(name: string): org.apache.log4j.Appender;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
				public getAppender(param0: string): org.apache.log4j.Appender;
				public getBufferSize(): number;
				public addAppender(param0: org.apache.log4j.Appender): void;
				public getBlocking(): boolean;
			}
			export module AsyncAppender {
				export class DiscardSummary extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.AsyncAppender.DiscardSummary>;
					public createEvent(): org.apache.log4j.spi.LoggingEvent;
					public constructor(event: org.apache.log4j.spi.LoggingEvent);
					public add(event: org.apache.log4j.spi.LoggingEvent): void;
				}
				export class Dispatcher extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<org.apache.log4j.AsyncAppender.Dispatcher>;
					public run(): void;
					public constructor(parent: org.apache.log4j.AsyncAppender, buffer: java.util.List<any>, discardMap: java.util.Map<any,any>, appenders: org.apache.log4j.helpers.AppenderAttachableImpl);
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
				public static configure(appender: org.apache.log4j.Appender): void;
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
				public info(message: any, t: java.lang.Throwable): void;
				public debug(message: any): void;
				public fatal(message: any, t: java.lang.Throwable): void;
				public getAdditivity(): boolean;
				public getResourceBundleString(key: string): string;
				/** @deprecated */
				public static getInstance(name: string): org.apache.log4j.Category;
				public warn(message: any): void;
				/** @deprecated */
				public static getRoot(): org.apache.log4j.Category;
				/** @deprecated */
				public static getDefaultHierarchy(): org.apache.log4j.spi.LoggerRepository;
				public log(priority: org.apache.log4j.Priority, message: any): void;
				public removeAppender(param0: org.apache.log4j.Appender): void;
				public getLevel(): org.apache.log4j.Level;
				public callAppenders(event: org.apache.log4j.spi.LoggingEvent): void;
				/** @deprecated */
				public getChainedPriority(): org.apache.log4j.Priority;
				public setResourceBundle(bundle: java.util.ResourceBundle): void;
				public getName(): string;
				public l7dlog(priority: org.apache.log4j.Priority, key: string, params: any[], t: java.lang.Throwable): void;
				public error(message: any): void;
				public removeAppender(name: string): void;
				public getAppender(name: string): org.apache.log4j.Appender;
				public isDebugEnabled(): boolean;
				public setLevel(level: org.apache.log4j.Level): void;
				public getAppender(param0: string): org.apache.log4j.Appender;
				public getLoggerRepository(): org.apache.log4j.spi.LoggerRepository;
				public isEnabledFor(level: org.apache.log4j.Priority): boolean;
				public constructor(name: string);
				public removeAllAppenders(): void;
				public getAllAppenders(): java.util.Enumeration<any>;
				public debug(message: any, t: java.lang.Throwable): void;
				public log(callerFQCN: string, level: org.apache.log4j.Priority, message: any, t: java.lang.Throwable): void;
				/** @deprecated */
				public setPriority(priority: org.apache.log4j.Priority): void;
				public assertLog(assertion: boolean, msg: string): void;
				/** @deprecated */
				public static getCurrentCategories(): java.util.Enumeration<any>;
				public setAdditivity(additive: boolean): void;
				/** @deprecated */
				public static getInstance(clazz: java.lang.Class<any>): org.apache.log4j.Category;
				/** @deprecated */
				public static shutdown(): void;
				/** @deprecated */
				public static exists(name: string): org.apache.log4j.Logger;
				public getParent(): org.apache.log4j.Category;
				public getEffectiveLevel(): org.apache.log4j.Level;
				public fatal(message: any): void;
				public removeAppender(param0: string): void;
				public error(message: any, t: java.lang.Throwable): void;
				public info(message: any): void;
				public isInfoEnabled(): boolean;
				public isAttached(param0: org.apache.log4j.Appender): boolean;
				/** @deprecated */
				public getHierarchy(): org.apache.log4j.spi.LoggerRepository;
				public removeAppender(appender: org.apache.log4j.Appender): void;
				public warn(message: any, t: java.lang.Throwable): void;
				public isAttached(appender: org.apache.log4j.Appender): boolean;
				public forcedLog(fqcn: string, level: org.apache.log4j.Priority, message: any, t: java.lang.Throwable): void;
				public getResourceBundle(): java.util.ResourceBundle;
				public addAppender(newAppender: org.apache.log4j.Appender): void;
				public log(priority: org.apache.log4j.Priority, message: any, t: java.lang.Throwable): void;
				public addAppender(param0: org.apache.log4j.Appender): void;
				public l7dlog(priority: org.apache.log4j.Priority, key: string, t: java.lang.Throwable): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class CategoryKey extends java.lang.Object {
				public static class: java.lang.Class<org.apache.log4j.CategoryKey>;
				public equals(obj: any): boolean;
				public equals(rArg: any): boolean;
				public hashCode(): number;
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
				public setFollow(newValue: boolean): void;
				public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
				public setName(name: string): void;
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public constructor();
				public constructor(layout: org.apache.log4j.Layout, os: java.io.OutputStream);
				public constructor(isActive: boolean);
				public setTarget(value: string): void;
				public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
				public clearFilters(): void;
				public closeWriter(): void;
				public setName(param0: string): void;
				public close(): void;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public requiresLayout(): boolean;
				public getTarget(): string;
				public getFilter(): org.apache.log4j.spi.Filter;
				public constructor(layout: org.apache.log4j.Layout);
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public setLayout(layout: org.apache.log4j.Layout): void;
				public constructor(layout: org.apache.log4j.Layout, writer: java.io.Writer);
				public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
				public constructor(layout: org.apache.log4j.Layout, target: string);
				public getFollow(): boolean;
			}
			export module ConsoleAppender {
				export class SystemErrStream extends java.io.OutputStream {
					public static class: java.lang.Class<org.apache.log4j.ConsoleAppender.SystemErrStream>;
					public constructor();
					public write(b: number): void;
					public write(b: number[]): void;
					public close(): void;
					public write(b: number[], off: number, len: number): void;
					public flush(): void;
					public write(param0: number): void;
				}
				export class SystemOutStream extends java.io.OutputStream {
					public static class: java.lang.Class<org.apache.log4j.ConsoleAppender.SystemOutStream>;
					public constructor();
					public write(b: number): void;
					public write(b: number[]): void;
					public close(): void;
					public write(b: number[], off: number, len: number): void;
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
				public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
				public setName(name: string): void;
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public getDatePattern(): string;
				public constructor(layout: org.apache.log4j.Layout, filename: string);
				public setDatePattern(pattern: string): void;
				public subAppend(event: org.apache.log4j.spi.LoggingEvent): void;
				public constructor();
				public constructor(layout: org.apache.log4j.Layout, os: java.io.OutputStream);
				public constructor(isActive: boolean);
				public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
				public constructor(layout: org.apache.log4j.Layout, filename: string, datePattern: string);
				public clearFilters(): void;
				public setName(param0: string): void;
				public close(): void;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public requiresLayout(): boolean;
				public constructor(layout: org.apache.log4j.Layout, filename: string, append: boolean);
				public getFilter(): org.apache.log4j.spi.Filter;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public constructor(layout: org.apache.log4j.Layout, filename: string, append: boolean, bufferedIO: boolean, bufferSize: number);
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public setLayout(layout: org.apache.log4j.Layout): void;
				public constructor(layout: org.apache.log4j.Layout, writer: java.io.Writer);
				public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class DefaultCategoryFactory extends java.lang.Object implements org.apache.log4j.spi.LoggerFactory {
				public static class: java.lang.Class<org.apache.log4j.DefaultCategoryFactory>;
				public makeNewLoggerInstance(name: string): org.apache.log4j.Logger;
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
				public static render(throwable: java.lang.Throwable): string[];
				public doRender(throwable: java.lang.Throwable): string[];
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
				public format(event: org.apache.log4j.spi.LoggingEvent): string;
				public setConversionPattern(conversionPattern: string): void;
				public ignoresThrowable(): boolean;
				public createPatternParser(pattern: string): org.apache.log4j.helpers.PatternParser;
				public getConversionPattern(): string;
				public constructor(pattern: string);
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
				public doRender(throwable: java.lang.Throwable): string[];
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
				public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
				public getAppend(): boolean;
				public setName(name: string): void;
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public getFile(): string;
				public constructor(layout: org.apache.log4j.Layout, filename: string);
				public constructor();
				public setFile(fileName: string, append: boolean, bufferedIO: boolean, bufferSize: number): void;
				public constructor(layout: org.apache.log4j.Layout, os: java.io.OutputStream);
				public constructor(isActive: boolean);
				public reset(): void;
				public setAppend(flag: boolean): void;
				public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
				public getBufferedIO(): boolean;
				public clearFilters(): void;
				public setName(param0: string): void;
				public close(): void;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public requiresLayout(): boolean;
				public constructor(layout: org.apache.log4j.Layout, filename: string, append: boolean);
				public setFile(file: string): void;
				public closeFile(): void;
				public getFilter(): org.apache.log4j.spi.Filter;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public constructor(layout: org.apache.log4j.Layout, filename: string, append: boolean, bufferedIO: boolean, bufferSize: number);
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public setBufferedIO(bufferedIO: boolean): void;
				public setLayout(layout: org.apache.log4j.Layout): void;
				public constructor(layout: org.apache.log4j.Layout, writer: java.io.Writer);
				public setBufferSize(bufferSize: number): void;
				public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
				public setQWForFiles(writer: java.io.Writer): void;
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
				public format(event: org.apache.log4j.spi.LoggingEvent): string;
				public getLocationInfo(): boolean;
				public ignoresThrowable(): boolean;
				public setTitle(title: string): void;
				public getFooter(): string;
				public getHeader(): string;
				public getTitle(): string;
				public activateOptions(): void;
				public constructor();
				public setLocationInfo(flag: boolean): void;
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
				public addRenderer(classToRender: java.lang.Class<any>, or: org.apache.log4j.or.ObjectRenderer): void;
				public getLogger(param0: string): org.apache.log4j.Logger;
				/** @deprecated */
				public getCurrentCategories(): java.util.Enumeration<any>;
				public fireAddAppenderEvent(logger: org.apache.log4j.Category, appender: org.apache.log4j.Appender): void;
				public emitNoAppenderWarning(cat: org.apache.log4j.Category): void;
				public isDisabled(level: number): boolean;
				public setThreshold(param0: string): void;
				public exists(name: string): org.apache.log4j.Logger;
				public setThrowableRenderer(param0: org.apache.log4j.spi.ThrowableRenderer): void;
				public shutdown(): void;
				public getThreshold(): org.apache.log4j.Level;
				public clear(): void;
				public addHierarchyEventListener(param0: org.apache.log4j.spi.HierarchyEventListener): void;
				public setThreshold(l: org.apache.log4j.Level): void;
				public getLogger(name: string, factory: org.apache.log4j.spi.LoggerFactory): org.apache.log4j.Logger;
				public getRendererMap(): org.apache.log4j.or.RendererMap;
				public fireAddAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
				/** @deprecated */
				public overrideAsNeeded(override: string): void;
				public exists(param0: string): org.apache.log4j.Logger;
				public getLogger(name: string): org.apache.log4j.Logger;
				public setRenderer(renderedClass: java.lang.Class<any>, renderer: org.apache.log4j.or.ObjectRenderer): void;
				public setThreshold(param0: org.apache.log4j.Level): void;
				public setThrowableRenderer(renderer: org.apache.log4j.spi.ThrowableRenderer): void;
				public addHierarchyEventListener(listener: org.apache.log4j.spi.HierarchyEventListener): void;
				public emitNoAppenderWarning(param0: org.apache.log4j.Category): void;
				public getThrowableRenderer(): org.apache.log4j.spi.ThrowableRenderer;
				public resetConfiguration(): void;
				public getLogger(param0: string, param1: org.apache.log4j.spi.LoggerFactory): org.apache.log4j.Logger;
				/** @deprecated */
				public setDisableOverride(override: string): void;
				public isDisabled(param0: number): boolean;
				public getCurrentCategories(): java.util.Enumeration<any>;
				public getCurrentLoggers(): java.util.Enumeration<any>;
				public setThreshold(levelStr: string): void;
				public setRenderer(param0: java.lang.Class<any>, param1: org.apache.log4j.or.ObjectRenderer): void;
				public constructor(root: org.apache.log4j.Logger);
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
				public static toLevel(val: number, defaultLevel: org.apache.log4j.Level): org.apache.log4j.Level;
				public static toLevel(sArg: string): org.apache.log4j.Level;
				public constructor(level: number, levelStr: string, syslogEquivalent: number);
				public static toLevel(sArg: string, defaultLevel: org.apache.log4j.Level): org.apache.log4j.Level;
				public static toLevel(val: number): org.apache.log4j.Level;
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
				public static trace(logger: org.apache.log4j.Logger, pattern: string, argument: any): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, argument: string): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, argument: any): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, arg0: any, arg1: any, arg2: any): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, arguments: any[]): void;
				public static info(logger: org.apache.log4j.Logger, t: java.lang.Throwable, pattern: string, arguments: any[]): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param1: string): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, arguments: any[]): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param1: number): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any, arg3: any): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any, arg3: any): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, argument: number): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, arguments: any[]): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param0: any, param1: any, param2: any, param3: any): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, argument: any): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, argument: number): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, parameters: any[]): void;
				public static trace(logger: org.apache.log4j.Logger, t: java.lang.Throwable, pattern: string, arguments: any[]): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, argument: boolean): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any, arg3: any): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, arg0: any, arg1: any): void;
				public static warn(logger: org.apache.log4j.Logger, t: java.lang.Throwable, pattern: string, arguments: any[]): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, argument: string): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, argument: boolean): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, parameters: any[]): void;
				public static error(logger: org.apache.log4j.Logger, pattern: string, arguments: any[]): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, t: java.lang.Throwable, pattern: string, parameters: any[]): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, argument: any): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, param1: boolean): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, arg0: any, arg1: any, arg2: any, arg3: any): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, t: java.lang.Throwable, bundleName: string, key: string, parameters: any[]): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, arguments: any[]): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, argument: string): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, param1: any): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param1: boolean): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, argument: boolean): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, argument: string): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, param1: string): void;
				public static fatal(logger: org.apache.log4j.Logger, t: java.lang.Throwable, pattern: string, arguments: any[]): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any, arg3: any): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, argument: boolean): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, argument: number): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param1: any): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any): void;
				public static fatal(logger: org.apache.log4j.Logger, pattern: string, arguments: any[]): void;
				public static error(logger: org.apache.log4j.Logger, t: java.lang.Throwable, pattern: string, arguments: any[]): void;
				public static debug(logger: org.apache.log4j.Logger, t: java.lang.Throwable, pattern: string, arguments: any[]): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, argument: number): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param0: any, param1: any, param2: any): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, param1: number): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param0: any, param1: any): void;
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
				public static getLogger(name: string): org.apache.log4j.Logger;
				public static getLogger(name: string, factory: org.apache.log4j.spi.LoggerFactory): org.apache.log4j.Logger;
				public static getRootLogger(): org.apache.log4j.Logger;
				public static getLogger(clazz: java.lang.Class<any>): org.apache.log4j.Logger;
				public static exists(name: string): org.apache.log4j.Logger;
				public static shutdown(): void;
				public static getCurrentLoggers(): java.util.Enumeration<any>;
				public static setRepositorySelector(selector: org.apache.log4j.spi.RepositorySelector, guard: any): void;
				public static resetConfiguration(): void;
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
				public static trace(logger: org.apache.log4j.Logger, pattern: string, argument: any): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, argument: string): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, argument: any): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, arg0: any, arg1: any, arg2: any): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, arguments: any[]): void;
				public static info(logger: org.apache.log4j.Logger, t: java.lang.Throwable, pattern: string, arguments: any[]): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param1: string): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, arguments: any[]): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param1: number): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any, arg3: any): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any, arg3: any): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, argument: number): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, arguments: any[]): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param0: any, param1: any, param2: any, param3: any): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, argument: any): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, argument: number): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, parameters: any[]): void;
				public static trace(logger: org.apache.log4j.Logger, t: java.lang.Throwable, pattern: string, arguments: any[]): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, argument: boolean): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any, arg3: any): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, arg0: any, arg1: any): void;
				public static warn(logger: org.apache.log4j.Logger, t: java.lang.Throwable, pattern: string, arguments: any[]): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, argument: string): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, argument: boolean): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, parameters: any[]): void;
				public static error(logger: org.apache.log4j.Logger, pattern: string, arguments: any[]): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, t: java.lang.Throwable, pattern: string, parameters: any[]): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, argument: any): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, param1: boolean): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, arg0: any, arg1: any, arg2: any, arg3: any): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, t: java.lang.Throwable, bundleName: string, key: string, parameters: any[]): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, arguments: any[]): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, argument: string): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, param1: any): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param1: boolean): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, argument: boolean): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, argument: string): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, param1: string): void;
				public static fatal(logger: org.apache.log4j.Logger, t: java.lang.Throwable, pattern: string, arguments: any[]): void;
				public static debug(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any, arg3: any): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, argument: boolean): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, argument: number): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param1: any): void;
				public static warn(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any): void;
				public static fatal(logger: org.apache.log4j.Logger, pattern: string, arguments: any[]): void;
				public static error(logger: org.apache.log4j.Logger, t: java.lang.Throwable, pattern: string, arguments: any[]): void;
				public static debug(logger: org.apache.log4j.Logger, t: java.lang.Throwable, pattern: string, arguments: any[]): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any): void;
				public static info(logger: org.apache.log4j.Logger, pattern: string, argument: number): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param0: any, param1: any, param2: any): void;
				public static trace(logger: org.apache.log4j.Logger, pattern: string, arg0: any, arg1: any, arg2: any): void;
				public static log(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, pattern: string, param1: number): void;
				public static logrb(logger: org.apache.log4j.Logger, level: org.apache.log4j.Level, bundleName: string, key: string, param0: any, param1: any): void;
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
				public static valueOf(b: number): java.lang.Integer;
				public static valueOf(b: number): java.lang.Float;
				public static exiting(logger: org.apache.log4j.Logger, sourceClass: string, sourceMethod: string): void;
				public static entering(logger: org.apache.log4j.Logger, sourceClass: string, sourceMethod: string, param: any): void;
				public static valueOf(b: number): java.lang.Byte;
				public static valueOf(b: number): java.lang.Double;
				public static valueOf(b: number): java.lang.Short;
				public static toArray(param1: any, param2: any, param3: any): any[];
				public static exiting(logger: org.apache.log4j.Logger, sourceClass: string, sourceMethod: string, result: string): void;
				public constructor();
				public static valueOf(c: string): java.lang.Character;
				public static valueOf(b: boolean): java.lang.Boolean;
				public static entering(logger: org.apache.log4j.Logger, sourceClass: string, sourceMethod: string, param: string): void;
				public static exiting(logger: org.apache.log4j.Logger, sourceClass: string, sourceMethod: string, result: any): void;
				public static toArray(param1: any, param2: any): any[];
				public static entering(logger: org.apache.log4j.Logger, sourceClass: string, sourceMethod: string, params: any[]): void;
				public static toArray(param1: any): any[];
				public static throwing(logger: org.apache.log4j.Logger, sourceClass: string, sourceMethod: string, thrown: java.lang.Throwable): void;
				public static valueOf(b: number): java.lang.Long;
				public static entering(logger: org.apache.log4j.Logger, sourceClass: string, sourceMethod: string): void;
				public static toArray(param1: any, param2: any, param3: any, param4: any): any[];
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
				public constructor(name: string);
				public removeAllAppenders(): void;
				public getAllAppenders(): java.util.Enumeration<any>;
				public isAttached(param0: org.apache.log4j.Appender): boolean;
				public removeAppender(appender: org.apache.log4j.Appender): void;
				public isAttached(appender: org.apache.log4j.Appender): boolean;
				public trace(message: any, t: java.lang.Throwable): void;
				public removeAppender(name: string): void;
				public static getLogger(name: string): org.apache.log4j.Logger;
				public static getLogger(name: string, factory: org.apache.log4j.spi.LoggerFactory): org.apache.log4j.Logger;
				public addAppender(newAppender: org.apache.log4j.Appender): void;
				public getAppender(name: string): org.apache.log4j.Appender;
				public static getLogger(clazz: java.lang.Class<any>): org.apache.log4j.Logger;
				public static getRootLogger(): org.apache.log4j.Logger;
				public trace(message: any): void;
				public getAppender(param0: string): org.apache.log4j.Appender;
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
				public static get(key: string): any;
				public static put(key: string, o: any): void;
				public static remove(key: string): void;
				public static getContext(): java.util.Hashtable<any,any>;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class NDC extends java.lang.Object {
				public static class: java.lang.Class<org.apache.log4j.NDC>;
				public static inherit(stack: java.util.Stack<any>): void;
				public static cloneStack(): java.util.Stack<any>;
				public static clear(): void;
				public static get(): string;
				public static remove(): void;
				public static setMaxDepth(maxDepth: number): void;
				public static getDepth(): number;
				public static push(message: string): void;
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
				public constructor(key: string, value: string);
				public toString(): string;
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
				public format(event: org.apache.log4j.spi.LoggingEvent): string;
				public setConversionPattern(conversionPattern: string): void;
				public ignoresThrowable(): boolean;
				public createPatternParser(pattern: string): org.apache.log4j.helpers.PatternParser;
				public getConversionPattern(): string;
				public constructor(pattern: string);
				public activateOptions(): void;
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
				public static toPriority(sArg: string): org.apache.log4j.Priority;
				/** @deprecated */
				public static getAllPossiblePriorities(): org.apache.log4j.Priority[];
				public toString(): string;
				/** @deprecated */
				public static toPriority(sArg: string, defaultPriority: org.apache.log4j.Priority): org.apache.log4j.Priority;
				public constructor();
				public getSyslogEquivalent(): number;
				public isGreaterOrEqual(r: org.apache.log4j.Priority): boolean;
				public constructor(level: number, levelStr: string, syslogEquivalent: number);
				public equals(obj: any): boolean;
				public toInt(): number;
				/** @deprecated */
				public static toPriority(val: number, defaultPriority: org.apache.log4j.Priority): org.apache.log4j.Priority;
				/** @deprecated */
				public static toPriority(val: number): org.apache.log4j.Priority;
				public equals(o: any): boolean;
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
				public doConfigure(inputStream: java.io.InputStream, hierarchy: org.apache.log4j.spi.LoggerRepository): void;
				public configureLoggerFactory(props: java.util.Properties): void;
				public doConfigure(configURL: java.net.URL, hierarchy: org.apache.log4j.spi.LoggerRepository): void;
				public static configureAndWatch(configFilename: string): void;
				public static configure(configFilename: string): void;
				public doConfigure(param0: java.io.InputStream, param1: org.apache.log4j.spi.LoggerRepository): void;
				public constructor();
				public static configureAndWatch(configFilename: string, delay: number): void;
				public static configure(inputStream: java.io.InputStream): void;
				public doConfigure(param0: java.net.URL, param1: org.apache.log4j.spi.LoggerRepository): void;
				public parseCatsAndRenderers(props: java.util.Properties, hierarchy: org.apache.log4j.spi.LoggerRepository): void;
				public static configure(configURL: java.net.URL): void;
				public doConfigure(configFileName: string, hierarchy: org.apache.log4j.spi.LoggerRepository): void;
				public static configure(properties: java.util.Properties): void;
				public doConfigure(properties: java.util.Properties, hierarchy: org.apache.log4j.spi.LoggerRepository): void;
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
			export class ProvisionNode extends java.util.Vector<any> {
				public static class: java.lang.Class<org.apache.log4j.ProvisionNode>;
				public subList(fromIndex: number, toIndex: number): java.util.List<any>;
				public indexOf(o: any): number;
				public indexOf(param0: any): number;
				public addAll(param0: java.util.Collection<any>): boolean;
				public remove(param0: number): any;
				public toArray(a: any[]): any[];
				public add(param0: number, param1: any): void;
				public set(param0: number, param1: any): any;
				public add(param0: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public set(index: number, element: any): any;
				public addAll(c: java.util.Collection<any>): boolean;
				public addAll(param0: number, param1: java.util.Collection<any>): boolean;
				public isEmpty(): boolean;
				public lastIndexOf(param0: any): number;
				public listIterator(param0: number): java.util.ListIterator<any>;
				public remove(index: number): any;
				public replaceAll(operator: any /* any*/): void;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public get(index: number): any;
				public stream(): java.util.stream.Stream<any>;
				public iterator(): java.util.Iterator<any>;
				public toArray(): any[];
				public retainAll(param0: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public removeIf(filter: any /* any*/): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public listIterator(index: number): java.util.ListIterator<any>;
				public retainAll(c: java.util.Collection<any>): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public lastIndexOf(o: any): number;
				public listIterator(): java.util.ListIterator<any>;
				public removeAll(c: java.util.Collection<any>): boolean;
				public add(e: any): boolean;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public indexOf(o: any, index: number): number;
				public clear(): void;
				public equals(o: any): boolean;
				public remove(param0: any): boolean;
				public contains(o: any): boolean;
				public sort(c: java.util.Comparator<any>): void;
				public subList(param0: number, param1: number): java.util.List<any>;
				public lastIndexOf(o: any, index: number): number;
				public remove(o: any): boolean;
				public get(param0: number): any;
				public toArray(param0: any[]): any[];
				public add(index: number, element: any): void;
				public addAll(index: number, c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export class RollingCalendar extends java.util.GregorianCalendar {
				public static class: java.lang.Class<org.apache.log4j.RollingCalendar>;
				public getNextCheckMillis(now: java.util.Date): number;
				public getNextCheckDate(now: java.util.Date): java.util.Date;
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
				public rollOver(): void;
				public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
				public setName(name: string): void;
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public constructor(layout: org.apache.log4j.Layout, filename: string);
				public subAppend(event: org.apache.log4j.spi.LoggingEvent): void;
				public constructor();
				public setFile(fileName: string, append: boolean, bufferedIO: boolean, bufferSize: number): void;
				public constructor(layout: org.apache.log4j.Layout, os: java.io.OutputStream);
				public constructor(isActive: boolean);
				public setMaxFileSize(value: string): void;
				public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
				public getMaxBackupIndex(): number;
				public clearFilters(): void;
				public setName(param0: string): void;
				public close(): void;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public requiresLayout(): boolean;
				public constructor(layout: org.apache.log4j.Layout, filename: string, append: boolean);
				public setFile(file: string): void;
				public getFilter(): org.apache.log4j.spi.Filter;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public constructor(layout: org.apache.log4j.Layout, filename: string, append: boolean, bufferedIO: boolean, bufferSize: number);
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public setLayout(layout: org.apache.log4j.Layout): void;
				public constructor(layout: org.apache.log4j.Layout, writer: java.io.Writer);
				public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
				public setMaxBackupIndex(maxBackups: number): void;
				public setQWForFiles(writer: java.io.Writer): void;
				public getMaximumFileSize(): number;
				public setMaximumFileSize(maxFileSize: number): void;
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
				public format(event: org.apache.log4j.spi.LoggingEvent): string;
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
				public constructor(ht: java.util.Hashtable<any,any>);
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
				public format(param0: org.apache.log4j.spi.LoggingEvent): string;
				public constructor(dateFormatType: string);
				public setContextPrinting(contextPrinting: boolean): void;
				public format(event: org.apache.log4j.spi.LoggingEvent): string;
				public ignoresThrowable(): boolean;
				public setThreadPrinting(threadPrinting: boolean): void;
				public getCategoryPrefixing(): boolean;
				public getContextPrinting(): boolean;
				public setCategoryPrefixing(categoryPrefixing: boolean): void;
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
				public shouldFlush(event: org.apache.log4j.spi.LoggingEvent): boolean;
				public writeFooter(): void;
				public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
				public setName(name: string): void;
				public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
				public setImmediateFlush(value: boolean): void;
				public subAppend(event: org.apache.log4j.spi.LoggingEvent): void;
				public constructor();
				public writeHeader(): void;
				public constructor(layout: org.apache.log4j.Layout, os: java.io.OutputStream);
				public constructor(isActive: boolean);
				public reset(): void;
				public getImmediateFlush(): boolean;
				public append(param0: org.apache.log4j.spi.LoggingEvent): void;
				public checkEntryConditions(): boolean;
				public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
				public clearFilters(): void;
				public closeWriter(): void;
				public getEncoding(): string;
				public setName(param0: string): void;
				public close(): void;
				public requiresLayout(): boolean;
				public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
				public append(event: org.apache.log4j.spi.LoggingEvent): void;
				public getFilter(): org.apache.log4j.spi.Filter;
				public getName(): string;
				public setLayout(param0: org.apache.log4j.Layout): void;
				public getLayout(): org.apache.log4j.Layout;
				public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
				public activateOptions(): void;
				public setLayout(layout: org.apache.log4j.Layout): void;
				public constructor(layout: org.apache.log4j.Layout, writer: java.io.Writer);
				public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
				public setEncoding(value: string): void;
				public createWriter(os: java.io.OutputStream): java.io.OutputStreamWriter;
				public setWriter(writer: java.io.Writer): void;
				public addFilter(param0: org.apache.log4j.spi.Filter): void;
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class ControlPanel {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.ControlPanel>;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class DetailPanel {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.DetailPanel>;
					public valueChanged(aEvent: javax.swing.event.ListSelectionEvent): void;
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
				export class ExitAction {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.ExitAction>;
					public static INSTANCE: org.apache.log4j.chainsaw.ExitAction;
					public actionPerformed(aIgnore: java.awt.event.ActionEvent): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class LoadXMLAction {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.LoadXMLAction>;
					public actionPerformed(aIgnore: java.awt.event.ActionEvent): void;
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
				export class Main {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.Main>;
					public static PORT_PROP_NAME: string;
					public static main(aArgs: string[]): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module chainsaw {
				export class MyTableModel {
					public static class: java.lang.Class<org.apache.log4j.chainsaw.MyTableModel>;
					public getColumnName(aCol: number): string;
					public getColumnCount(): number;
					public setNDCFilter(aStr: string): void;
					public getValueAt(aRow: number, aCol: number): any;
					public isPaused(): boolean;
					public setMessageFilter(aStr: string): void;
					public setCategoryFilter(aStr: string): void;
					public addEvent(aEvent: org.apache.log4j.chainsaw.EventDetails): void;
					public setThreadFilter(aStr: string): void;
					public toggle(): void;
					public getRowCount(): number;
					public setPriorityFilter(aPriority: org.apache.log4j.Priority): void;
					public clear(): void;
					public getColumnClass(aCol: number): java.lang.Class<any>;
					public getEventDetails(aRow: number): org.apache.log4j.chainsaw.EventDetails;
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
					public endElement(aNamespaceURI: string, aLocalName: string, aQName: string): void;
					public startElement(aNamespaceURI: string, aLocalName: string, aQName: string, aAtts: org.xml.sax.Attributes): void;
					public startPrefixMapping(param0: string, param1: string): void;
					public skippedEntity(name: string): void;
					public characters(aChars: string[], aStart: number, aLength: number): void;
					public notationDecl(name: string, publicId: string, systemId: string): void;
					public skippedEntity(param0: string): void;
					public warning(e: org.xml.sax.SAXParseException): void;
					public endDocument(): void;
					public endElement(uri: string, localName: string, qName: string): void;
					public fatalError(e: org.xml.sax.SAXParseException): void;
					public startElement(param0: string, param1: string, param2: string, param3: org.xml.sax.Attributes): void;
					public ignorableWhitespace(param0: string[], param1: number, param2: number): void;
					public processingInstruction(param0: string, param1: string): void;
					public fatalError(param0: org.xml.sax.SAXParseException): void;
					public endPrefixMapping(prefix: string): void;
					public characters(ch: string[], start: number, length: number): void;
					public startElement(uri: string, localName: string, qName: string, attributes: org.xml.sax.Attributes): void;
					public error(e: org.xml.sax.SAXParseException): void;
					public error(param0: org.xml.sax.SAXParseException): void;
					public endElement(param0: string, param1: string, param2: string): void;
					public unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
					public processingInstruction(target: string, data: string): void;
					public characters(param0: string[], param1: number, param2: number): void;
					public startDocument(): void;
					public warning(param0: org.xml.sax.SAXParseException): void;
					public startPrefixMapping(prefix: string, uri: string): void;
					public ignorableWhitespace(ch: string[], start: number, length: number): void;
					public resolveEntity(param0: string, param1: string): org.xml.sax.InputSource;
					public endPrefixMapping(param0: string): void;
					public setDocumentLocator(locator: org.xml.sax.Locator): void;
					public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
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
					public props: java.beans.PropertyDescriptor[];
					public getProperties(callback: org.apache.log4j.config.PropertyGetter.PropertyCallback, prefix: string): void;
					public isHandledType(type: java.lang.Class<any>): boolean;
					public static getProperties(obj: any, callback: org.apache.log4j.config.PropertyGetter.PropertyCallback, prefix: string): void;
					public constructor(obj: any);
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
					public genAppName(): string;
					public printOptions(out: java.io.PrintWriter, obj: any, fullname: string): void;
					public static capitalize(name: string): string;
					public foundProperty(param0: any, param1: string, param2: string, param3: any): void;
					public constructor(out: java.io.PrintWriter);
					public static main(args: string[]): void;
					public printOptions(out: java.io.PrintWriter, cat: org.apache.log4j.Logger): void;
					public print(out: java.io.PrintWriter): void;
					public isGenAppName(name: string): boolean;
					public constructor(out: java.io.PrintWriter, doCapitalize: boolean);
					public printOptions(out: java.io.PrintWriter, cat: org.apache.log4j.Category): void;
					public foundProperty(obj: any, prefix: string, name: string, value: any): void;
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
					public props: java.beans.PropertyDescriptor[];
					public activate(): void;
					public static setProperties(obj: any, properties: java.util.Properties, prefix: string): void;
					public getPropertyDescriptor(name: string): java.beans.PropertyDescriptor;
					public setProperty(name: string, value: string): void;
					public convertArg(val: string, type: java.lang.Class<any>): any;
					public constructor(obj: any);
					public introspect(): void;
					public setProperty(prop: java.beans.PropertyDescriptor, name: string, value: string): void;
					public setProperties(properties: java.util.Properties, prefix: string): void;
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
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(rootCause: java.lang.Throwable);
					public constructor(cause: java.lang.Throwable);
					public getMessage(): string;
					public constructor(msg: string);
					public constructor(message: string, cause: java.lang.Throwable);
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
					public format(obj: any, toAppendTo: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
					public format(date: java.util.Date): string;
					public parse(s: string, pos: java.text.ParsePosition): java.util.Date;
					public constructor();
					public constructor(timeZone: java.util.TimeZone);
					public format(obj: any): string;
					public format(date: java.util.Date, sbuf: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
					public parse(source: string): java.util.Date;
					public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
					public format(param0: java.util.Date, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
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
					public appenderList: java.util.Vector<any>;
					public isAttached(appender: org.apache.log4j.Appender): boolean;
					public removeAllAppenders(): void;
					public appendLoopOnAppenders(event: org.apache.log4j.spi.LoggingEvent): number;
					public addAppender(param0: org.apache.log4j.Appender): void;
					public isAttached(param0: org.apache.log4j.Appender): boolean;
					public removeAppender(param0: org.apache.log4j.Appender): void;
					public addAppender(newAppender: org.apache.log4j.Appender): void;
					public removeAppender(param0: string): void;
					public getAppender(param0: string): org.apache.log4j.Appender;
					public removeAppender(appender: org.apache.log4j.Appender): void;
					public constructor();
					public removeAppender(name: string): void;
					public getAllAppenders(): java.util.Enumeration<any>;
					public getAppender(name: string): org.apache.log4j.Appender;
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
					public wasFull(): boolean;
					public getMaxSize(): number;
					public put(o: org.apache.log4j.spi.LoggingEvent): void;
					public resize(newSize: number): void;
					public wasEmpty(): boolean;
					public constructor(maxSize: number);
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
					public constructor(out: java.io.Writer);
					public write(c: number): void;
					public constructor(lock: any);
					public append(param0: string): java.lang.Appendable;
					public getCount(): number;
					public append(csq: string, start: number, end: number): java.io.Writer;
					public constructor(writer: java.io.Writer, eh: org.apache.log4j.spi.ErrorHandler);
					public write(cbuf: string[]): void;
					public append(csq: string): java.io.Writer;
					public flush(): void;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public constructor(writer: java.io.Writer, errorHandler: org.apache.log4j.spi.ErrorHandler);
					public setCount(count: number): void;
					public constructor();
					public close(): void;
					public write(string: string): void;
					public write(cbuf: string[], off: number, len: number): void;
					public write(str: string, off: number, len: number): void;
					public append(c: string): java.io.Writer;
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
					public get(i: number): org.apache.log4j.spi.LoggingEvent;
					public get(): org.apache.log4j.spi.LoggingEvent;
					public add(event: org.apache.log4j.spi.LoggingEvent): void;
					public getMaxSize(): number;
					public resize(newSize: number): void;
					public constructor(maxSize: number);
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
					public dateFormat(buf: java.lang.StringBuffer, event: org.apache.log4j.spi.LoggingEvent): void;
					public constructor();
					public setDateFormat(dateFormat: java.text.DateFormat, timeZone: java.util.TimeZone): void;
					/** @deprecated */
					public getOptionStrings(): string[];
					public getDateFormat(): string;
					public setTimeZone(timeZone: string): void;
					public activateOptions(): void;
					/** @deprecated */
					public setOption(option: string, value: string): void;
					public getTimeZone(): string;
					public setDateFormat(dateFormat: string): void;
					public setDateFormat(dateFormatType: string, timeZone: java.util.TimeZone): void;
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
					public format(obj: any, toAppendTo: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
					public format(date: java.util.Date): string;
					public parse(s: string, pos: java.text.ParsePosition): java.util.Date;
					public constructor();
					public constructor(timeZone: java.util.TimeZone);
					public format(obj: any): string;
					public format(date: java.util.Date, sbuf: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
					public parse(source: string): java.util.Date;
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
					public constructor(target: java.lang.Runnable, name: string);
					public run(): void;
					public constructor(target: java.lang.Runnable);
					public constructor(filename: string);
					public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable);
					public constructor(group: java.lang.ThreadGroup, name: string);
					public setDelay(delay: number): void;
					public checkAndConfigure(): void;
					public doOnChange(): void;
					public constructor(name: string);
					public constructor();
					public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string);
					public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string, stackSize: number);
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
					public format(obj: any, toAppendTo: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
					public format(date: java.util.Date): string;
					public parse(s: string, pos: java.text.ParsePosition): java.util.Date;
					public constructor();
					public constructor(timeZone: java.util.TimeZone);
					public format(obj: any): string;
					public format(date: java.util.Date, sbuf: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
					public parse(source: string): java.util.Date;
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
					public static getResource(resource: string): java.net.URL;
					/** @deprecated */
					public static getResource(resource: string, clazz: java.lang.Class<any>): java.net.URL;
					public constructor();
					public static loadClass(clazz: string): java.lang.Class<any>;
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
					public static setQuietMode(quietMode: boolean): void;
					public static warn(msg: string): void;
					public static error(msg: string, t: java.lang.Throwable): void;
					public constructor();
					public static error(msg: string): void;
					public static warn(msg: string, t: java.lang.Throwable): void;
					public static debug(msg: string, t: java.lang.Throwable): void;
					public static debug(msg: string): void;
					public static setInternalDebugging(enabled: boolean): void;
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
					public getPropertyKeySet(event: org.apache.log4j.spi.LoggingEvent): java.util.Set<any>;
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
					public setBackupAppender(appender: org.apache.log4j.Appender): void;
					public setAppender(param0: org.apache.log4j.Appender): void;
					public error(message: string, e: java.lang.Exception, errorCode: number): void;
					public setBackupAppender(param0: org.apache.log4j.Appender): void;
					public error(param0: string): void;
					public error(param0: string, param1: java.lang.Exception, param2: number): void;
					public constructor();
					public setLogger(param0: org.apache.log4j.Logger): void;
					public setLogger(logger: org.apache.log4j.Logger): void;
					public activateOptions(): void;
					public error(message: string): void;
					public error(param0: string, param1: java.lang.Exception, param2: number, param3: org.apache.log4j.spi.LoggingEvent): void;
					public error(message: string, e: java.lang.Exception, errorCode: number, event: org.apache.log4j.spi.LoggingEvent): void;
					public setAppender(appender: org.apache.log4j.Appender): void;
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
					public static toLevel(value: string, defaultValue: org.apache.log4j.Level): org.apache.log4j.Level;
					public static concatanateArrays(l: string[], r: string[]): string[];
					public static toBoolean(value: string, dEfault: boolean): boolean;
					public static instantiateByClassName(className: string, superClass: java.lang.Class<any>, defaultValue: any): any;
					public static substVars(val: string, props: java.util.Properties): string;
					public static toFileSize(value: string, dEfault: number): number;
					public static instantiateByKey(props: java.util.Properties, key: string, superClass: java.lang.Class<any>, defaultValue: any): any;
					public static selectAndConfigure(inputStream: java.io.InputStream, clazz: string, hierarchy: org.apache.log4j.spi.LoggerRepository): void;
					public static toInt(value: string, dEfault: number): number;
					public static convertSpecialChars(s: string): string;
					public static getSystemProperty(key: string, def: string): string;
					public static findAndSubst(key: string, props: java.util.Properties): string;
					public static selectAndConfigure(url: java.net.URL, clazz: string, hierarchy: org.apache.log4j.spi.LoggerRepository): void;
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
					public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					public constructor();
					public spacePad(sbuf: java.lang.StringBuffer, length: number): void;
					public format(sbuf: java.lang.StringBuffer, e: org.apache.log4j.spi.LoggingEvent): void;
					public constructor(fi: org.apache.log4j.helpers.FormattingInfo);
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
					public constructor(pattern: string);
					public parse(): org.apache.log4j.helpers.PatternConverter;
					public addConverter(pc: org.apache.log4j.helpers.PatternConverter): void;
					public finalizeConverter(c: string): void;
					public extractOption(): string;
				}
				export module PatternParser {
					export class BasicPatternConverter extends org.apache.log4j.helpers.PatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.BasicPatternConverter>;
						public convert(event: org.apache.log4j.spi.LoggingEvent): string;
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
						public convert(event: org.apache.log4j.spi.LoggingEvent): string;
						public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					}
					export class LiteralPatternConverter extends org.apache.log4j.helpers.PatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.LiteralPatternConverter>;
						public format(sbuf: java.lang.StringBuffer, e: org.apache.log4j.spi.LoggingEvent): void;
						public convert(event: org.apache.log4j.spi.LoggingEvent): string;
						public format(sbuf: java.lang.StringBuffer, event: org.apache.log4j.spi.LoggingEvent): void;
						public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					}
					export class LocationPatternConverter extends org.apache.log4j.helpers.PatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.LocationPatternConverter>;
						public convert(event: org.apache.log4j.spi.LoggingEvent): string;
						public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					}
					export class MDCPatternConverter extends org.apache.log4j.helpers.PatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.MDCPatternConverter>;
						public convert(event: org.apache.log4j.spi.LoggingEvent): string;
						public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					}
					export abstract class NamedPatternConverter extends org.apache.log4j.helpers.PatternConverter {
						public static class: java.lang.Class<org.apache.log4j.helpers.PatternParser.NamedPatternConverter>;
						public convert(event: org.apache.log4j.spi.LoggingEvent): string;
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
					public constructor(out: java.io.Writer);
					public write(c: number): void;
					public constructor(lock: any);
					public append(param0: string): java.lang.Appendable;
					public append(csq: string, start: number, end: number): java.io.Writer;
					public write(cbuf: string[]): void;
					public flush(): void;
					public append(csq: string): java.io.Writer;
					public write(str: string): void;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public constructor(writer: java.io.Writer, errorHandler: org.apache.log4j.spi.ErrorHandler);
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public constructor();
					public close(): void;
					public write(cbuf: string[], off: number, len: number): void;
					public write(str: string, off: number, len: number): void;
					public write(string: string): void;
					public append(c: string): java.io.Writer;
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
					public format(obj: any, toAppendTo: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
					public format(date: java.util.Date): string;
					public parse(s: string, pos: java.text.ParsePosition): java.util.Date;
					public constructor();
					public format(obj: any): string;
					public format(date: java.util.Date, sbuf: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
					public parse(source: string): java.util.Date;
					public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
					public format(param0: java.util.Date, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
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
					public constructor(out: java.io.Writer);
					public write(c: number): void;
					public constructor(lock: any);
					public append(param0: string): java.lang.Appendable;
					public append(csq: string, start: number, end: number): java.io.Writer;
					public write(cbuf: string[]): void;
					public append(csq: string): java.io.Writer;
					public flush(): void;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public constructor(writer: java.io.Writer, errorHandler: org.apache.log4j.spi.ErrorHandler);
					public constructor(writer: java.io.Writer, syslogFacility: number, eh: org.apache.log4j.spi.ErrorHandler);
					public setLevel(level: number): void;
					public constructor();
					public setSyslogFacility(syslogFacility: number): void;
					public close(): void;
					public write(string: string): void;
					public write(cbuf: string[], off: number, len: number): void;
					public write(str: string, off: number, len: number): void;
					public append(c: string): java.io.Writer;
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
					public constructor(syslogHost: string);
					public write(c: number): void;
					public constructor(lock: any);
					public append(param0: string): java.lang.Appendable;
					public append(csq: string, start: number, end: number): java.io.Writer;
					public write(buf: string[], off: number, len: number): void;
					public write(cbuf: string[]): void;
					public write(param0: string[], param1: number, param2: number): void;
					public flush(): void;
					public append(csq: string): java.io.Writer;
					public write(str: string): void;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public constructor();
					public close(): void;
					public write(str: string, off: number, len: number): void;
					public write(string: string): void;
					public append(c: string): java.io.Writer;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module helpers {
				export class ThreadLocalMap extends java.lang.InheritableThreadLocal<any> {
					public static class: java.lang.Class<org.apache.log4j.helpers.ThreadLocalMap>;
					public constructor();
					public childValue(parentValue: any): any;
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
					public static escapeTags(input: string): string;
					public constructor();
					public static appendEscapingCDATA(buf: java.lang.StringBuffer, str: string): void;
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
					public static toLevel(sArg: string): org.apache.log4j.Level;
					public static toLevel(val: number): org.apache.log4j.Level;
					public static toLevel(sArg: string, defaultLevel: org.apache.log4j.Level): org.apache.log4j.Level;
					public static toLevel(val: number, defaultLevel: org.apache.log4j.helpers.UtilLoggingLevel): org.apache.log4j.helpers.UtilLoggingLevel;
					public constructor();
					public static toLevel(val: number, defaultLevel: org.apache.log4j.Level): org.apache.log4j.Level;
					public static toLevel(s: string): org.apache.log4j.Level;
					public static getAllPossibleLevels(): java.util.List<any>;
					public constructor(level: number, levelStr: string, syslogEquivalent: number);
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
					public buffer: java.util.ArrayList<any>;
					public removes: java.util.ArrayList<any>;
					public getConnection(): java.sql.Connection;
					public setPassword(password: string): void;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public finalize(): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public setLayout(layout: org.apache.log4j.Layout): void;
					public setLocationInfo(flag: boolean): void;
					public flushBuffer(): void;
					public setSql(s: string): void;
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public getBufferSize(): number;
					public getSql(): string;
					public constructor();
					public setUser(user: string): void;
					public close(): void;
					public setURL(url: string): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public append(event: org.apache.log4j.spi.LoggingEvent): void;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
					public execute(sql: string): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public getURL(): string;
					public setName(param0: string): void;
					public getPassword(): string;
					public requiresLayout(): boolean;
					public setName(name: string): void;
					public constructor(isActive: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public getName(): string;
					public closeConnection(con: java.sql.Connection): void;
					public getLogStatement(event: org.apache.log4j.spi.LoggingEvent): string;
					public activateOptions(): void;
					public getUser(): string;
					public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public getLocationInfo(): boolean;
					public setBufferSize(newBufferSize: number): void;
					public clearFilters(): void;
					public setDriver(driverClass: string): void;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module jmx {
				export abstract class AbstractDynamicMBean extends java.lang.Object {
					public static class: java.lang.Class<org.apache.log4j.jmx.AbstractDynamicMBean>;
					public postDeregister(): void;
					public preDeregister(): void;
					public constructor();
					public getAttributes(attributeNames: string[]): javax.management.AttributeList;
					public registerMBean(mbean: any, objectName: javax.management.ObjectName): void;
					public static getAppenderName(appender: org.apache.log4j.Appender): string;
					public setAttributes(attributes: javax.management.AttributeList): javax.management.AttributeList;
					public postRegister(registrationDone: java.lang.Boolean): void;
					public getLogger(): org.apache.log4j.Logger;
					public preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName;
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
					public setAttribute(attribute: javax.management.Attribute): void;
					public getMBeanInfo(): javax.management.MBeanInfo;
					public constructor(appender: org.apache.log4j.Appender);
					public constructor();
					public getAttribute(attributeName: string): any;
					public invoke(operationName: string, params: any[], signature: string[]): any;
					public getLogger(): org.apache.log4j.Logger;
					public preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module jmx {
				export class HierarchyDynamicMBean extends org.apache.log4j.jmx.AbstractDynamicMBean implements org.apache.log4j.spi.HierarchyEventListener {
					public static class: java.lang.Class<org.apache.log4j.jmx.HierarchyDynamicMBean>;
					public removeNotificationListener(listener: javax.management.NotificationListener): void;
					public addLoggerMBean(name: string): javax.management.ObjectName;
					public addAppenderEvent(logger: org.apache.log4j.Category, appender: org.apache.log4j.Appender): void;
					public addAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
					public addNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
					public invoke(operationName: string, params: any[], signature: string[]): any;
					public getNotificationInfo(): javax.management.MBeanNotificationInfo[];
					public getLogger(): org.apache.log4j.Logger;
					public setAttribute(attribute: javax.management.Attribute): void;
					public getMBeanInfo(): javax.management.MBeanInfo;
					public constructor();
					public removeAppenderEvent(cat: org.apache.log4j.Category, appender: org.apache.log4j.Appender): void;
					public getAttribute(attributeName: string): any;
					public postRegister(registrationDone: java.lang.Boolean): void;
					public removeAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
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
					public setAttribute(attribute: javax.management.Attribute): void;
					public getMBeanInfo(): javax.management.MBeanInfo;
					public constructor(layout: org.apache.log4j.Layout);
					public constructor();
					public getAttribute(attributeName: string): any;
					public invoke(operationName: string, params: any[], signature: string[]): any;
					public getLogger(): org.apache.log4j.Logger;
				}
			}
		}
	}
}

declare module org {
	export module apache {
		export module log4j {
			export module jmx {
				export class LoggerDynamicMBean extends org.apache.log4j.jmx.AbstractDynamicMBean {
					public static class: java.lang.Class<org.apache.log4j.jmx.LoggerDynamicMBean>;
					public setAttribute(attribute: javax.management.Attribute): void;
					public handleNotification(notification: javax.management.Notification, handback: any): void;
					public getMBeanInfo(): javax.management.MBeanInfo;
					public constructor();
					public getAttribute(attributeName: string): any;
					public invoke(operationName: string, params: any[], signature: string[]): any;
					public postRegister(registrationDone: java.lang.Boolean): void;
					public getLogger(): org.apache.log4j.Logger;
					public constructor(logger: org.apache.log4j.Logger);
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
					public constructor(defaultMonitor: org.apache.log4j.lf5.viewer.LogBrokerMonitor);
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
					public doConfigure(configURL: java.net.URL, repository: org.apache.log4j.spi.LoggerRepository): void;
					public doConfigure(param0: java.io.InputStream, param1: org.apache.log4j.spi.LoggerRepository): void;
					public doConfigure(inputStream: java.io.InputStream, repository: org.apache.log4j.spi.LoggerRepository): void;
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
					public equals(compareTo: org.apache.log4j.lf5.LF5Appender): boolean;
					public equals(obj: any): boolean;
					public setCallSystemExitOnClose(callSystemExitOnClose: boolean): void;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public constructor(monitor: org.apache.log4j.lf5.viewer.LogBrokerMonitor);
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getLogBrokerMonitor(): org.apache.log4j.lf5.viewer.LogBrokerMonitor;
					public setLayout(layout: org.apache.log4j.Layout): void;
					public static getDefaultMonitorHeight(): number;
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public constructor();
					public close(): void;
					public setMaxNumberOfRecords(maxNumberOfRecords: number): void;
					public static main(args: string[]): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public append(event: org.apache.log4j.spi.LoggingEvent): void;
					public getFilter(): org.apache.log4j.spi.Filter;
					public static getScreenHeight(): number;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
					public static getScreenWidth(): number;
					public static getDefaultMonitorWidth(): number;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public requiresLayout(): boolean;
					public setName(name: string): void;
					public constructor(isActive: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public static getDefaultInstance(): org.apache.log4j.lf5.viewer.LogBrokerMonitor;
					public getName(): string;
					public activateOptions(): void;
					public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
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
					public setThrownStackTrace(throwableInfo: org.apache.log4j.spi.ThrowableInformation): void;
					public constructor();
					public setThrownStackTrace(trace: string): void;
					public isSevereLevel(): boolean;
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
					public static register(logLevels: java.util.List<any>): void;
					public equals(obj: any): boolean;
					public static register(logLevels: org.apache.log4j.lf5.LogLevel[]): void;
					public static getLog4JLevels(): java.util.List<any>;
					public encompasses(level: org.apache.log4j.lf5.LogLevel): boolean;
					public static getAllDefaultLevels(): java.util.List<any>;
					public setLogLevelColorMap(level: org.apache.log4j.lf5.LogLevel, color: java.awt.Color): void;
					public static getLogLevelColorMap(): java.util.Map<any,any>;
					public equals(o: any): boolean;
					public constructor(label: string, precedence: number);
					public static register(logLevel: org.apache.log4j.lf5.LogLevel): org.apache.log4j.lf5.LogLevel;
					public toString(): string;
					public getPrecedence(): number;
					public static getJdk14Levels(): java.util.List<any>;
					public static resetLogLevelColorMap(): void;
					public static valueOf(level: string): org.apache.log4j.lf5.LogLevel;
					public hashCode(): number;
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
					public setThreadDescription(threadDescription: string): void;
					public setThrownStackTrace(trace: string): void;
					public toString(): string;
					public constructor();
					public setMessage(message: string): void;
					public static resetSequenceNumber(): void;
					public getMillis(): number;
					public setLevel(level: org.apache.log4j.lf5.LogLevel): void;
					public setCategory(category: string): void;
					public isSevereLevel(): boolean;
					public getSequenceNumber(): number;
					public setThrown(thrown: java.lang.Throwable): void;
					public getLocation(): string;
					public getLevel(): org.apache.log4j.lf5.LogLevel;
					public getThrown(): java.lang.Throwable;
					public getNDC(): string;
					public setLocation(location: string): void;
					public getCategory(): string;
					public setSequenceNumber(number: number): void;
					public isFatal(): boolean;
					public setNDC(ndc: string): void;
					public static getNextId(): number;
					public getThreadDescription(): string;
					public setMillis(millis: number): void;
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
					public passes(record: org.apache.log4j.lf5.LogRecord): boolean;
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
					public static main(args: string[]): void;
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
						public constructor();
						public static setSevereLevel(level: org.apache.log4j.lf5.LogLevel): void;
						public static getSevereLevel(): org.apache.log4j.lf5.LogLevel;
						public setCategory(category: string): void;
						public isSevereLevel(): boolean;
						public getLocationInfo(category: string): string;
						public stackTraceToString(t: java.lang.Throwable): string;
						public parseLine(trace: string, category: string): string;
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
						public format(date: java.util.Date): string;
						public constructor();
						public setTimeZone(timeZone: java.util.TimeZone): void;
						public getLocale(): java.util.Locale;
						public constructor(timeZone: java.util.TimeZone, locale: java.util.Locale, pattern: string);
						public getDateFormatInstance(): java.text.DateFormat;
						public constructor(timeZone: java.util.TimeZone);
						/** @deprecated */
						public setOutputFormat(pattern: string): void;
						public constructor(locale: java.util.Locale, pattern: string);
						public setPattern(pattern: string): void;
						public constructor(locale: java.util.Locale);
						public format(date: java.util.Date, pattern: string): string;
						public setDateFormatInstance(dateFormat: java.text.DateFormat): void;
						public constructor(pattern: string);
						public constructor(timeZone: java.util.TimeZone, pattern: string);
						public setLocale(locale: java.util.Locale): void;
						public constructor(timeZone: java.util.TimeZone, locale: java.util.Locale);
						/** @deprecated */
						public getOutputFormat(): string;
						public parse(date: string, pattern: string): java.util.Date;
						public getTimeZone(): java.util.TimeZone;
						public parse(date: string): java.util.Date;
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
						public parse(monitor: org.apache.log4j.lf5.viewer.LogBrokerMonitor): void;
						public run(): void;
						public constructor(file: java.io.File);
						public displayError(message: string): void;
						public constructor(stream: java.io.InputStream);
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
						public log(category: string, message: string): void;
						public addMessage(record: org.apache.log4j.lf5.LogRecord): void;
						public setSevereLevel(level: org.apache.log4j.lf5.LogLevel): void;
						public setMaxNumberOfRecords(maxNumberOfRecords: number): void;
						public static getScreenHeight(): number;
						public log(category: string, level: org.apache.log4j.lf5.LogLevel, message: string): void;
						public getDefaultLevel(): org.apache.log4j.lf5.LogLevel;
						public log(category: string, level: org.apache.log4j.lf5.LogLevel, message: string, t: java.lang.Throwable, NDC: string): void;
						public static newInstance(userDefined: org.apache.log4j.lf5.LogLevel[]): org.apache.log4j.lf5.util.LogMonitorAdapter;
						public static newInstance(loglevels: number): org.apache.log4j.lf5.util.LogMonitorAdapter;
						public setDefaultLevel(level: org.apache.log4j.lf5.LogLevel): void;
						public static newInstance(userDefinedLevels: java.util.List<any>): org.apache.log4j.lf5.util.LogMonitorAdapter;
						public static getDefaultMonitorWidth(): number;
						public log(category: string, level: org.apache.log4j.lf5.LogLevel, message: string, t: java.lang.Throwable): void;
						public static getDefaultMonitorHeight(): number;
						public getSevereLevel(): org.apache.log4j.lf5.LogLevel;
						public log(category: string, level: org.apache.log4j.lf5.LogLevel, message: string, NDC: string): void;
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
						public constructor(name: string);
						public getURL(): java.net.URL;
						public getInputStream(): java.io.InputStream;
						public getName(): string;
						public setName(name: string): void;
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
						public constructor();
						public static getResourceAsStream(object: any, resource: org.apache.log4j.lf5.util.Resource): java.io.InputStream;
						public static getResourceAsURL(object: any, resource: org.apache.log4j.lf5.util.Resource): java.net.URL;
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
						public static copy(input: java.io.InputStream, output: java.io.OutputStream, bufferSize: number): void;
						public static getBytes(input: java.io.InputStream): number[];
						public static copy(input: java.io.InputStream, output: java.io.OutputStream): void;
						public static copyThenClose(input: java.io.InputStream, output: java.io.OutputStream): void;
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
					export class FilteredLogTableModel {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.FilteredLogTableModel>;
						public _filter: org.apache.log4j.lf5.LogRecordFilter;
						public _allRecords: java.util.List<any>;
						public _filteredRecords: java.util.List<any>;
						public _maxNumberOfLogRecords: number;
						public _colNames: string[];
						public constructor();
						public trimRecords(): void;
						public fastRefresh(): void;
						public needsTrimming(): boolean;
						public getRowCount(): number;
						public getColumnName(i: number): string;
						public getValueAt(row: number, col: number): any;
						public getColumnCount(): number;
						public refresh(): void;
						public getFilteredRecord(row: number): org.apache.log4j.lf5.LogRecord;
						public addLogRecord(record: org.apache.log4j.lf5.LogRecord): boolean;
						public createFilteredRecordsList(): java.util.List<any>;
						public setLogRecordFilter(filter: org.apache.log4j.lf5.LogRecordFilter): void;
						public getTotalRowCount(): number;
						public getColumn(col: number, lr: org.apache.log4j.lf5.LogRecord): any;
						public setMaxNumberOfLogRecords(maxNumRecords: number): void;
						public getLogRecordFilter(): org.apache.log4j.lf5.LogRecordFilter;
						public trimOldestRecords(): void;
						public clear(): void;
						public getFilteredRecords(): java.util.List<any>;
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
						public static makeVerticalScrollBarTrack(pane: javax.swing.JScrollPane): void;
						public constructor();
						public static selectRow(row: number, table: javax.swing.JTable, pane: javax.swing.JScrollPane): void;
						public static contains(row: number, model: javax.swing.table.TableModel): boolean;
						public static moveAdjustable(location: number, scrollBar: java.awt.Adjustable): void;
						public static repaintLater(component: javax.swing.JComponent): void;
						public static makeScrollBarTrack(scrollBar: java.awt.Adjustable): void;
						public static selectRow(row: number, model: javax.swing.ListSelectionModel): void;
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
						public getTableColumnMenuItem(column: org.apache.log4j.lf5.viewer.LogTableColumn): javax.swing.JCheckBoxMenuItem;
						public setSearchText(text: string): void;
						public refresh(textArea: javax.swing.JTextArea): void;
						public getDateFormatManager(): org.apache.log4j.lf5.util.DateFormatManager;
						public createHelpMenu(): javax.swing.JMenu;
						public createLogTableColumnMenuItem(column: org.apache.log4j.lf5.viewer.LogTableColumn): javax.swing.JCheckBoxMenuItem;
						public selectAllLogTableColumns(selected: boolean): void;
						public createMRUFileListMI(menu: javax.swing.JMenu): void;
						public updateStatusLabel(): void;
						public createLogLevelMenu(): javax.swing.JMenu;
						public createEditMenu(): javax.swing.JMenu;
						public addMessage(lr: org.apache.log4j.lf5.LogRecord): void;
						public createLogLevelColorMenu(): javax.swing.JMenu;
						public showLogLevelColorChangeDialog(result: javax.swing.JMenuItem, level: org.apache.log4j.lf5.LogLevel): void;
						public createConfigureMaxRecords(): javax.swing.JMenuItem;
						public updateFrameSize(): void;
						public show(delay: number): void;
						public initComponents(): void;
						public createConfigureSave(): javax.swing.JMenuItem;
						public resetConfiguration(): void;
						public createResetLogLevelColorMenuItem(): javax.swing.JMenuItem;
						public createEditSortNDCMI(): javax.swing.JMenuItem;
						public requestClose(): void;
						public getCallSystemExitOnClose(): boolean;
						public createDetailTextArea(): javax.swing.JTextArea;
						public constructor(logLevels: java.util.List<any>);
						public addDisplayedProperty(messageLine: any): void;
						public getFirstSelectedRow(): number;
						public setFrameSize(width: number, height: number): void;
						public addTableModelProperties(): void;
						public selectAllLogLevels(selected: boolean): void;
						public createConfigureMenu(): javax.swing.JMenu;
						public createViewMenu(): javax.swing.JMenu;
						public setTitle(title: string): void;
						public getLogTableColumnMenuItems(): java.util.Map<any,any>;
						public requestExit(): void;
						public changeFontSizeCombo(box: javax.swing.JComboBox, requestedSize: number): number;
						public clearDetailTextArea(): void;
						public setNDCLogRecordFilter(textFilter: string): void;
						public createEditFindMI(): javax.swing.JMenuItem;
						public setFontSizeSilently(fontSize: number): void;
						public getNDCTextFilter(): string;
						public saveConfiguration(): void;
						public findSearchText(): void;
						public requestOpenMRU(e: java.awt.event.ActionEvent): void;
						public createNoLogLevelsMenuItem(): javax.swing.JMenuItem;
						public createEditFindNextMI(): javax.swing.JMenuItem;
						public createFileMenu(): javax.swing.JMenu;
						public loadLogFile(url: java.net.URL): boolean;
						public selectRow(foundRow: number): void;
						public createOpenURLMI(): javax.swing.JMenuItem;
						public show(): void;
						public getRecordsDisplayedMessage(): string;
						public matches(record: org.apache.log4j.lf5.LogRecord, text: string): boolean;
						public createNoLogTableColumnsMenuItem(): javax.swing.JMenuItem;
						public sortByNDC(): void;
						public getMenuItem(level: org.apache.log4j.lf5.LogLevel): javax.swing.JCheckBoxMenuItem;
						public setFontSize(fontSize: number): void;
						public refreshDetailTextArea(): void;
						public loadLogFile(file: java.io.File): boolean;
						public updateMRUList(): void;
						public getLogTableColumnMenuItem(column: org.apache.log4j.lf5.viewer.LogTableColumn): javax.swing.JCheckBoxMenuItem;
						public setNDCTextFilter(text: string): void;
						public pause(millis: number): void;
						public createLogLevelCombo(): javax.swing.JComboBox;
						public createExitMI(): javax.swing.JMenuItem;
						public setFontSize(component: java.awt.Component, fontSize: number): void;
						public getBaseFrame(): javax.swing.JFrame;
						public setMaxNumberOfLogRecords(maxNumberOfLogRecords: number): void;
						public createLogRecordFilter(): org.apache.log4j.lf5.LogRecordFilter;
						public createConfigureReset(): javax.swing.JMenuItem;
						public findRecord(startRow: number, searchText: string, records: java.util.List<any>): number;
						public getLogTableColumns(): java.util.Iterator<any>;
						public dispose(): void;
						public updateView(): java.util.List<any>;
						public setLeastSevereDisplayedLogLevel(level: org.apache.log4j.lf5.LogLevel): void;
						public closeAfterConfirm(): void;
						public createStatusArea(): javax.swing.JPanel;
						public showPropertiesDialog(title: string): void;
						public createSubMenuItem(level: org.apache.log4j.lf5.LogLevel): javax.swing.JMenuItem;
						public getLogLevelMenuItems(): java.util.Map<any,any>;
						public getStatusText(displayedRows: number, totalRows: number): string;
						public setMaxRecordConfiguration(): void;
						public setDateFormatManager(dfm: org.apache.log4j.lf5.util.DateFormatManager): void;
						public createEditRestoreAllNDCMI(): javax.swing.JMenuItem;
						public createAllLogLevelsMenuItem(): javax.swing.JMenuItem;
						/** @deprecated */
						public trackTableScrollPane(): void;
						public getLogLevels(): java.util.Iterator<any>;
						public setCallSystemExitOnClose(callSystemExitOnClose: boolean): void;
						public requestOpen(): void;
						public createMenuItem(level: org.apache.log4j.lf5.LogLevel): javax.swing.JCheckBoxMenuItem;
						public createOpenMI(): javax.swing.JMenuItem;
						public setView(viewString: string, table: org.apache.log4j.lf5.viewer.LogTable): void;
						public getCategoryExplorerTree(): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerTree;
						public centerFrame(frame: javax.swing.JFrame): void;
						public createMenuBar(): javax.swing.JMenuBar;
						public createCloseMI(): javax.swing.JMenuItem;
						public hide(): void;
						public createNDCLogRecordFilter(text: string): org.apache.log4j.lf5.LogRecordFilter;
						public createAllLogTableColumnsMenuItem(): javax.swing.JMenuItem;
						public makeLogTableListenToCategoryExplorer(): void;
						public createToolBar(): javax.swing.JToolBar;
					}
					export module LogBrokerMonitor {
						export class LogBrokerMonitorWindowAdaptor {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogBrokerMonitor.LogBrokerMonitorWindowAdaptor>;
							public _monitor: org.apache.log4j.lf5.viewer.LogBrokerMonitor;
							public constructor(param0: org.apache.log4j.lf5.viewer.LogBrokerMonitor, monitor: org.apache.log4j.lf5.viewer.LogBrokerMonitor);
							public windowClosing(ev: java.awt.event.WindowEvent): void;
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
					export abstract class LogFactor5Dialog {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogFactor5Dialog>;
						public static DISPLAY_FONT: java.awt.Font;
						public wrapStringOnPanel(message: string, container: java.awt.Container): void;
						public getDefaultConstraints(): java.awt.GridBagConstraints;
						public constructor(jframe: javax.swing.JFrame, message: string, modal: boolean);
						public show(): void;
						public minimumSizeDialog(component: java.awt.Component, minWidth: number, minHeight: number): void;
						public centerWindow(win: java.awt.Window): void;
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
						public constructor(jframe: javax.swing.JFrame, message: string, modal: boolean);
						public constructor(jframe: javax.swing.JFrame, message: string);
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
						public constructor(jframe: javax.swing.JFrame, message: string, modal: boolean);
						public constructor(jframe: javax.swing.JFrame, title: string, label: string);
						public constructor(jframe: javax.swing.JFrame, title: string, label: string, size: number);
						public getText(): string;
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
						public constructor(jframe: javax.swing.JFrame, message: string, modal: boolean);
						public constructor(jframe: javax.swing.JFrame, message: string);
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
					export class LogTable {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogTable>;
						public _rowHeight: number;
						public _detailTextArea: javax.swing.JTextArea;
						public _numCols: number;
						public _tableColumns: javax.swing.table.TableColumn[];
						public _colWidths: number[];
						public _colNames: org.apache.log4j.lf5.viewer.LogTableColumn[];
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
						public setDetailedView(): void;
						public getFilteredLogTableModel(): org.apache.log4j.lf5.viewer.FilteredLogTableModel;
						public setFont(font: java.awt.Font): void;
						public init(): void;
						public constructor(detailTextArea: javax.swing.JTextArea);
						public getDateFormatManager(): org.apache.log4j.lf5.util.DateFormatManager;
						public setDateFormatManager(dfm: org.apache.log4j.lf5.util.DateFormatManager): void;
						public clearLogRecords(): void;
						public getColumnNameAndNumber(): java.util.Vector<any>;
						public setView(columns: java.util.List<any>): void;
					}
					export module LogTable {
						export class LogTableListSelectionListener extends java.lang.Object {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogTable.LogTableListSelectionListener>;
							public _table: javax.swing.JTable;
							public constructor(param0: org.apache.log4j.lf5.viewer.LogTable, table: javax.swing.JTable);
							public valueChanged(e: javax.swing.event.ListSelectionEvent): void;
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
						public static valueOf(column: string): org.apache.log4j.lf5.viewer.LogTableColumn;
						public equals(obj: any): boolean;
						public static getLogTableColumns(): java.util.List<any>;
						public getLabel(): string;
						public hashCode(): number;
						public equals(o: any): boolean;
						public constructor(label: string);
						public toString(): string;
						public static getLogTableColumnArray(): org.apache.log4j.lf5.viewer.LogTableColumn[];
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
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
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
					export class LogTableModel {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogTableModel>;
						public isCellEditable(row: number, column: number): boolean;
						public constructor(colNames: any[], numRows: number);
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
					export class LogTableRowRenderer {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.LogTableRowRenderer>;
						public _highlightFatal: boolean;
						public _color: java.awt.Color;
						public getLogLevelColor(level: org.apache.log4j.lf5.LogLevel): java.awt.Color;
						public constructor();
						public getTableCellRendererComponent(table: javax.swing.JTable, value: any, isSelected: boolean, hasFocus: boolean, row: number, col: number): java.awt.Component;
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
					export class TrackingAdjustmentListener extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.lf5.viewer.TrackingAdjustmentListener>;
						public _lastMaximum: number;
						public constructor();
						public adjustmentValueChanged(e: java.awt.event.AdjustmentEvent): void;
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
						export class CategoryAbstractCellEditor extends java.lang.Object {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryAbstractCellEditor>;
							public _listenerList: javax.swing.event.EventListenerList;
							public _value: any;
							public _changeEvent: javax.swing.event.ChangeEvent;
							public _clickCountToStart: number;
							public constructor();
							public shouldSelectCell(anEvent: java.util.EventObject): boolean;
							public isCellEditable(anEvent: java.util.EventObject): boolean;
							public stopCellEditing(): boolean;
							public removeCellEditorListener(l: javax.swing.event.CellEditorListener): void;
							public setClickCountToStart(count: number): void;
							public fireEditingCanceled(): void;
							public getClickCountToStart(): number;
							public cancelCellEditing(): void;
							public addCellEditorListener(l: javax.swing.event.CellEditorListener): void;
							public getTreeCellEditorComponent(tree: javax.swing.JTree, value: any, isSelected: boolean, expanded: boolean, leaf: boolean, row: number): java.awt.Component;
							public getTableCellEditorComponent(table: javax.swing.JTable, value: any, isSelected: boolean, row: number, column: number): java.awt.Component;
							public getCellEditorValue(): any;
							public setCellEditorValue(value: any): void;
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
							public constructor(title: string);
							public getTitle(): string;
							public setTitle(title: string): void;
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
							public constructor(model: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel);
							public passes(param0: org.apache.log4j.lf5.LogRecord): boolean;
							public passes(record: org.apache.log4j.lf5.LogRecord): boolean;
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
						export class CategoryExplorerModel {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel>;
							public _renderFatal: boolean;
							public _listener: java.awt.event.ActionListener;
							public _event: java.awt.event.ActionEvent;
							public setDescendantSelection(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode, selected: boolean): void;
							public getCategoryNode(category: string): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode;
							public isCategoryPathActive(path: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryPath): boolean;
							public update(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode, selected: boolean): void;
							public resetAllNodeCounts(): void;
							public getRootCategoryNode(): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode;
							public addCategory(path: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryPath): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode;
							public addActionListener(l: java.awt.event.ActionListener): void;
							public getCategoryNode(path: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryPath): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode;
							public removeActionListener(l: java.awt.event.ActionListener): void;
							public notifyActionListeners(): void;
							public refresh(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): void;
							public constructor(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode);
							public getTreePathToRoot(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.tree.TreePath;
							public setParentSelection(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode, selected: boolean): void;
							public addLogRecord(lr: org.apache.log4j.lf5.LogRecord): void;
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
						export class CategoryExplorerTree {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerTree>;
							public _model: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel;
							public _rootAlreadyExpanded: boolean;
							public constructor(model: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel);
							public constructor();
							public getExplorerModel(): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel;
							public ensureRootExpansion(): void;
							public init(): void;
							public expandRootNode(): void;
							public getToolTipText(e: java.awt.event.MouseEvent): string;
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
						export class CategoryImmediateEditor {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryImmediateEditor>;
							public editingIcon: javax.swing.Icon;
							public determineOffset(tree: javax.swing.JTree, value: any, isSelected: boolean, expanded: boolean, leaf: boolean, row: number): void;
							public shouldSelectCell(e: java.util.EventObject): boolean;
							public inCheckBoxHitRegion(e: java.awt.event.MouseEvent): boolean;
							public canEditImmediately(e: java.util.EventObject): boolean;
							public constructor(tree: javax.swing.JTree, renderer: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNodeRenderer, editor: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNodeEditor);
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
						export class CategoryNode {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode>;
							public _selected: boolean;
							public _numberOfContainedRecords: number;
							public _numberOfRecordsFromChildren: number;
							public _hasFatalChildren: boolean;
							public _hasFatalRecords: boolean;
							public addRecordFromChild(): void;
							public hashCode(): number;
							public getTotalNumberOfRecords(): number;
							public isSelected(): boolean;
							public getTitle(): string;
							public equals(obj: any): boolean;
							public toString(): string;
							public setHasFatalChildren(flag: boolean): void;
							public setSelected(s: boolean): void;
							public getNumberOfContainedRecords(): number;
							public addRecord(): void;
							public setHasFatalRecords(flag: boolean): void;
							public hasFatalChildren(): boolean;
							public constructor(title: string);
							public hasFatalRecords(): boolean;
							/** @deprecated */
							public setAllDescendantsSelected(): void;
							public addRecordToParent(): void;
							public resetNumberOfContainedRecords(): void;
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
							public createSelectDescendantsMenuItem(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.JMenuItem;
							public createExpandMenuItem(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.JMenuItem;
							public expandDescendants(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): void;
							public getTreePath(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.tree.TreePath;
							public expand(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): void;
							public createCollapseMenuItem(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.JMenuItem;
							public createRemoveMenuItem(): javax.swing.JMenuItem;
							public collapseDescendants(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): void;
							public constructor(model: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryExplorerModel);
							public getTreeCellEditorComponent(tree: javax.swing.JTree, value: any, isSelected: boolean, expanded: boolean, leaf: boolean, row: number): java.awt.Component;
							public showPropertiesDialog(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): void;
							public removeUnusedNodes(): number;
							public getDisplayedProperties(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): any;
							public showPopup(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode, x: number, y: number): void;
							public createUnselectDescendantsMenuItem(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.JMenuItem;
							public getCellEditorValue(): any;
							public createPropertiesMenuItem(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): javax.swing.JMenuItem;
							public collapse(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): void;
							public getTreeCellEditorComponent(tree: javax.swing.JTree, value: any, selected: boolean, expanded: boolean, leaf: boolean, row: number): java.awt.Component;
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
							public getTreeCellRendererComponent(tree: javax.swing.JTree, value: any, selected: boolean, expanded: boolean, leaf: boolean, row: number, hasFocus: boolean): java.awt.Component;
							public getCheckBox(): javax.swing.JCheckBox;
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
						export class CategoryNodeRenderer {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNodeRenderer>;
							public static FATAL_CHILDREN: java.awt.Color;
							public _checkBox: javax.swing.JCheckBox;
							public _panel: javax.swing.JPanel;
							public static _sat: javax.swing.ImageIcon;
							public constructor();
							public getCheckBoxOffset(): java.awt.Dimension;
							public buildToolTip(node: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryNode): string;
							public getTreeCellRendererComponent(tree: javax.swing.JTree, value: any, selected: boolean, expanded: boolean, leaf: boolean, row: number, hasFocus: boolean): java.awt.Component;
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
							public _categoryElements: java.util.LinkedList<any>;
							public constructor();
							public removeAllCategoryElements(): void;
							public size(): number;
							public categoryElementAt(index: number): org.apache.log4j.lf5.viewer.categoryexplorer.CategoryElement;
							public toString(): string;
							public isEmpty(): boolean;
							public addCategoryElement(categoryElement: org.apache.log4j.lf5.viewer.categoryexplorer.CategoryElement): void;
							public constructor(category: string);
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
						export class TreeModelAdapter extends java.lang.Object {
							public static class: java.lang.Class<org.apache.log4j.lf5.viewer.categoryexplorer.TreeModelAdapter>;
							public constructor();
							public treeStructureChanged(e: javax.swing.event.TreeModelEvent): void;
							public treeNodesRemoved(e: javax.swing.event.TreeModelEvent): void;
							public treeNodesChanged(e: javax.swing.event.TreeModelEvent): void;
							public treeNodesInserted(e: javax.swing.event.TreeModelEvent): void;
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
							public getValue(map: org.w3c.dom.NamedNodeMap, attr: string): string;
							public load(): void;
							public processCategories(doc: org.w3c.dom.Document): void;
							public processLogLevelColors(doc: org.w3c.dom.Document): void;
							public static treePathToString(path: javax.swing.tree.TreePath): string;
							public reset(): void;
							public getFilename(): string;
							public collapseTree(): void;
							public processLogLevels(doc: org.w3c.dom.Document): void;
							public deleteConfigurationFile(): void;
							public processLogTableColumns(doc: org.w3c.dom.Document): void;
							public constructor(monitor: org.apache.log4j.lf5.viewer.LogBrokerMonitor, table: org.apache.log4j.lf5.viewer.LogTable);
							public store(s: string): void;
							public save(): void;
							public processRecordFilter(doc: org.w3c.dom.Document): void;
							public selectAllNodes(): void;
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
							public setMRU(o: any): void;
							public size(): number;
							public getInputStream(url: java.net.URL): java.io.InputStream;
							public getFile(index: number): any;
							public getMRUFileList(): string[];
							public getInputStream(file: java.io.File): java.io.InputStream;
							public load(): void;
							public constructor(maxSize: number);
							public getFilename(): string;
							public getInputStream(index: number): java.io.InputStream;
							public save(): void;
							public set(url: java.net.URL): void;
							public static createConfigurationDirectory(): void;
							public setMaxSize(maxSize: number): void;
							public set(file: java.io.File): void;
							public moveToTop(index: number): void;
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
					public isTriggeringEvent(event: org.apache.log4j.spi.LoggingEvent): boolean;
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
					public setPassword(password: string): void;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getTopicPublisher(): javax.jms.TopicPublisher;
					public setLayout(layout: org.apache.log4j.Layout): void;
					public getTopicConnection(): javax.jms.TopicConnection;
					public getUserName(): string;
					public setUserName(userName: string): void;
					public lookup(ctx: javax.naming.Context, name: string): any;
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public setTopicConnectionFactoryBindingName(tcfBindingName: string): void;
					public constructor();
					public setInitialContextFactoryName(initialContextFactoryName: string): void;
					public close(): void;
					public setSecurityPrincipalName(securityPrincipalName: string): void;
					public getTopicSession(): javax.jms.TopicSession;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public append(event: org.apache.log4j.spi.LoggingEvent): void;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
					public getProviderURL(): string;
					public setProviderURL(providerURL: string): void;
					public getInitialContextFactoryName(): string;
					public setTopicBindingName(topicBindingName: string): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setURLPkgPrefixes(urlPkgPrefixes: string): void;
					public setSecurityCredentials(securityCredentials: string): void;
					public setName(param0: string): void;
					public getPassword(): string;
					public requiresLayout(): boolean;
					public setName(name: string): void;
					public constructor(isActive: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public getName(): string;
					public getTopicBindingName(): string;
					public activateOptions(): void;
					public getSecurityCredentials(): string;
					public getSecurityPrincipalName(): string;
					public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public getLocationInfo(): boolean;
					public getTopicConnectionFactoryBindingName(): string;
					public checkEntryConditions(): boolean;
					public clearFilters(): void;
					public setLocationInfo(locationInfo: boolean): void;
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
					public constructor(tcfBindingName: string, topicBindingName: string, username: string, password: string);
					public static lookup(ctx: javax.naming.Context, name: string): any;
					public static main(args: string[]): void;
					public onMessage(message: javax.jms.Message): void;
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
					public setSMTPProtocol(val: string): void;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public setReplyTo(addresses: string): void;
					public setBufferSize(bufferSize: number): void;
					public getBcc(): string;
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public setSMTPPassword(password: string): void;
					public addressMessage(msg: javax.mail.Message): void;
					public constructor();
					public setTo(to: string): void;
					public close(): void;
					public append(event: org.apache.log4j.spi.LoggingEvent): void;
					public formatBody(): string;
					public setCc(addresses: string): void;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
					public getEvaluator(): org.apache.log4j.spi.TriggeringEventEvaluator;
					public getReplyTo(): string;
					public constructor(evaluator: org.apache.log4j.spi.TriggeringEventEvaluator);
					public setSMTPUsername(username: string): void;
					public getSMTPPort(): number;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public setName(name: string): void;
					public parseUnrecognizedElement(element: org.w3c.dom.Element, props: java.util.Properties): boolean;
					public clearFilters(): void;
					public sendBuffer(): void;
					public getFrom(): string;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public setLayout(layout: org.apache.log4j.Layout): void;
					public getSMTPProtocol(): string;
					public getSubject(): string;
					public getSMTPPassword(): string;
					public getBufferSize(): number;
					public parseUnrecognizedElement(param0: org.w3c.dom.Element, param1: java.util.Properties): boolean;
					public getCc(): string;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public getSendOnClose(): boolean;
					public createSession(): javax.mail.Session;
					public setEvaluatorClass(value: string): void;
					public setEvaluator(trigger: org.apache.log4j.spi.TriggeringEventEvaluator): void;
					public getSMTPHost(): string;
					public getSMTPDebug(): boolean;
					public getSMTPUsername(): string;
					public getTo(): string;
					public setSubject(subject: string): void;
					public setFrom(from: string): void;
					public requiresLayout(): boolean;
					public constructor(isActive: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public getEvaluatorClass(): string;
					public setBcc(addresses: string): void;
					public getName(): string;
					public activateOptions(): void;
					public setSMTPDebug(debug: boolean): void;
					public setSMTPPort(val: number): void;
					public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public getLocationInfo(): boolean;
					public setSendOnClose(val: boolean): void;
					public checkEntryConditions(): boolean;
					public setSMTPHost(smtpHost: string): void;
					public setLocationInfo(locationInfo: boolean): void;
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
					public static main(argv: string[]): void;
					public constructor();
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
					public setRemoteHost(host: string): void;
					public getPort(): number;
					public setAdvertiseViaMulticastDNS(advertiseViaMulticastDNS: boolean): void;
					public isAdvertiseViaMulticastDNS(): boolean;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public setLayout(layout: org.apache.log4j.Layout): void;
					public setApplication(lapp: string): void;
					public cleanUp(): void;
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public setPort(port: number): void;
					public getReconnectionDelay(): number;
					public constructor();
					public close(): void;
					public constructor(host: string, port: number);
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public append(event: org.apache.log4j.spi.LoggingEvent): void;
					public getApplication(): string;
					public setReconnectionDelay(delay: number): void;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
					public getRemoteHost(): string;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public requiresLayout(): boolean;
					public setName(name: string): void;
					public constructor(isActive: boolean);
					public constructor(address: java.net.InetAddress, port: number);
					public getLayout(): org.apache.log4j.Layout;
					public getName(): string;
					public activateOptions(): void;
					public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public getLocationInfo(): boolean;
					public clearFilters(): void;
					public setLocationInfo(locationInfo: boolean): void;
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
					public setLocationInfo(_locationInfo: boolean): void;
					public getPort(): number;
					public constructor(_port: number);
					public setAdvertiseViaMulticastDNS(advertiseViaMulticastDNS: boolean): void;
					public isAdvertiseViaMulticastDNS(): boolean;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public setLayout(layout: org.apache.log4j.Layout): void;
					public setApplication(lapp: string): void;
					public cleanUp(): void;
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public getBufferSize(): number;
					public createServerSocket(socketPort: number): java.net.ServerSocket;
					public setBufferSize(_bufferSize: number): void;
					public constructor();
					public close(): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public append(event: org.apache.log4j.spi.LoggingEvent): void;
					public getApplication(): string;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public setPort(_port: number): void;
					public requiresLayout(): boolean;
					public setName(name: string): void;
					public constructor(isActive: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public getName(): string;
					public activateOptions(): void;
					public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public getLocationInfo(): boolean;
					public clearFilters(): void;
				}
				export module SocketHubAppender {
					export class ServerMonitor extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<org.apache.log4j.net.SocketHubAppender.ServerMonitor>;
						public stopMonitor(): void;
						public run(): void;
						public constructor(param0: org.apache.log4j.net.SocketHubAppender, _port: number, _oosList: java.util.Vector<any>);
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
					public constructor(socket: java.net.Socket, hierarchy: org.apache.log4j.spi.LoggerRepository);
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
					public static main(argv: string[]): void;
					public constructor(directory: java.io.File);
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
					public static getFacilityString(syslogFacility: number): string;
					public setLayout(layout: org.apache.log4j.Layout): void;
					public constructor(layout: org.apache.log4j.Layout, syslogFacility: number);
					public getFacility(): string;
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public setSyslogHost(syslogHost: string): void;
					public constructor();
					public setHeader(val: boolean): void;
					public close(): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public append(event: org.apache.log4j.spi.LoggingEvent): void;
					public getHeader(): boolean;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public getSyslogHost(): string;
					public setFacilityPrinting(on: boolean): void;
					public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
					public static getFacility(facilityName: string): number;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public constructor(layout: org.apache.log4j.Layout, syslogHost: string, syslogFacility: number);
					public setFacility(facilityName: string): void;
					public setName(param0: string): void;
					public requiresLayout(): boolean;
					public setName(name: string): void;
					public constructor(isActive: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public getFacilityPrinting(): boolean;
					public getName(): string;
					public activateOptions(): void;
					public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
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
					public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
					public getPort(): number;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public setLayout(layout: org.apache.log4j.Layout): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public requiresLayout(): boolean;
					public setPort(port: number): void;
					public setName(name: string): void;
					public constructor(isActive: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public constructor();
					public getName(): string;
					public close(): void;
					public activateOptions(): void;
					public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public append(event: org.apache.log4j.spi.LoggingEvent): void;
					public clearFilters(): void;
					public getFilter(): org.apache.log4j.spi.Filter;
				}
				export module TelnetAppender {
					export class SocketHandler extends java.lang.Thread {
						public static class: java.lang.Class<org.apache.log4j.net.TelnetAppender.SocketHandler>;
						public constructor();
						public constructor(group: java.lang.ThreadGroup, name: string);
						public constructor(target: java.lang.Runnable, name: string);
						public close(): void;
						public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable);
						public finalize(): void;
						public constructor(param0: org.apache.log4j.net.TelnetAppender, port: number);
						public run(): void;
						public constructor(name: string);
						public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string);
						public send(message: string): void;
						public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string, stackSize: number);
						public constructor(target: java.lang.Runnable);
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
					public advertise(): void;
					public constructor(zone: string, port: number, name: string, properties: java.util.Map<any,any>);
					public static getJMDNSInstance(): any;
					public constructor(zone: string, port: number, name: string);
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
					public constructor(server: string, source: string);
					public getSource(): string;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public finalize(): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public constructor(source: string, layout: org.apache.log4j.Layout);
					public setLayout(layout: org.apache.log4j.Layout): void;
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public setSource(source: string): void;
					public constructor();
					public constructor(source: string);
					public close(): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public append(event: org.apache.log4j.spi.LoggingEvent): void;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public requiresLayout(): boolean;
					public setName(name: string): void;
					public constructor(isActive: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public constructor(layout: org.apache.log4j.Layout);
					public getName(): string;
					public activateOptions(): void;
					public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public constructor(server: string, source: string, layout: org.apache.log4j.Layout);
					public clearFilters(): void;
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
					public doRender(o: any): string;
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
					public static addRenderer(repository: org.apache.log4j.spi.RendererSupport, renderedClassName: string, renderingClassName: string): void;
					public get(clazz: java.lang.Class<any>): org.apache.log4j.or.ObjectRenderer;
					public constructor();
					public put(clazz: java.lang.Class<any>, or: org.apache.log4j.or.ObjectRenderer): void;
					public get(o: any): org.apache.log4j.or.ObjectRenderer;
					public clear(): void;
					public getDefaultRenderer(): org.apache.log4j.or.ObjectRenderer;
					public findAndRender(o: any): string;
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
					public doRender(o: any): string;
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
						public doRender(o: any): string;
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
						public doRender(o: any): string;
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
					public constructor(pattern: string);
					public convert(param0: org.apache.log4j.spi.LoggingEvent): string;
					public constructor();
					public format(sbuf: java.lang.StringBuffer, e: org.apache.log4j.spi.LoggingEvent): void;
					public convert(event: org.apache.log4j.spi.LoggingEvent): string;
					public constructor(fi: org.apache.log4j.helpers.FormattingInfo);
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
					public constructor(pattern: string);
					public parse(): org.apache.log4j.helpers.PatternConverter;
					public constructor(conversionPattern: string);
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
					public format(obj: any, toAppendTo: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
					public format(date: java.util.Date): string;
					public setTimeZone(timeZone: java.util.TimeZone): void;
					public format(obj: any): string;
					public static getMaximumCacheValidity(pattern: string): number;
					public setTimeZone(zone: java.util.TimeZone): void;
					public format(param0: java.util.Date, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
					public getNumberFormat(): java.text.NumberFormat;
					public parse(s: string, pos: java.text.ParsePosition): java.util.Date;
					public constructor();
					public format(now: number, param1: java.lang.StringBuffer): java.lang.StringBuffer;
					public static findMillisecondStart(time: number, param1: string, formatted: java.text.DateFormat): number;
					public constructor(dateFormat: java.text.DateFormat, expiration: number);
					public format(date: java.util.Date, sbuf: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
					public parse(source: string): java.util.Date;
					public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
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
					public format(obj: any, output: java.lang.StringBuffer): void;
					public static newInstance(options: string[]): org.apache.log4j.pattern.ClassNamePatternConverter;
					public format(event: org.apache.log4j.spi.LoggingEvent, toAppendTo: java.lang.StringBuffer): void;
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
					public static newInstance(options: string[]): org.apache.log4j.pattern.DatePatternConverter;
					public format(event: org.apache.log4j.spi.LoggingEvent, output: java.lang.StringBuffer): void;
					public format(obj: any, output: java.lang.StringBuffer): void;
					public format(date: java.util.Date, toAppendTo: java.lang.StringBuffer): void;
				}
				export module DatePatternConverter {
					export class DefaultZoneDateFormat extends java.text.DateFormat {
						public static class: java.lang.Class<org.apache.log4j.pattern.DatePatternConverter.DefaultZoneDateFormat>;
						public format(date: java.util.Date): string;
						public parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
						public format(obj: any, toAppendTo: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
						public format(param0: java.util.Date, param1: java.lang.StringBuffer, param2: java.text.FieldPosition): java.lang.StringBuffer;
						public constructor();
						public constructor(format: java.text.DateFormat);
						public format(date: java.util.Date, toAppendTo: java.lang.StringBuffer, fieldPosition: java.text.FieldPosition): java.lang.StringBuffer;
						public format(obj: any): string;
						public parse(source: string, pos: java.text.ParsePosition): java.util.Date;
						public parse(source: string): java.util.Date;
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
					public static newInstance(options: string[]): org.apache.log4j.pattern.PatternConverter;
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
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(options: string[]): org.apache.log4j.pattern.FileLocationPatternConverter;
					public format(event: org.apache.log4j.spi.LoggingEvent, output: java.lang.StringBuffer): void;
					public format(obj: any, output: java.lang.StringBuffer): void;
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
					public static getDefault(): org.apache.log4j.pattern.FormattingInfo;
					public isLeftAligned(): boolean;
					public constructor(leftAlign: boolean, minLength: number, maxLength: number);
					public getMinLength(): number;
					public getMaxLength(): number;
					public format(fieldStart: number, buffer: java.lang.StringBuffer): void;
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
					public static newInstance(options: string[]): org.apache.log4j.pattern.FullLocationPatternConverter;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public format(event: org.apache.log4j.spi.LoggingEvent, output: java.lang.StringBuffer): void;
					public format(obj: any, output: java.lang.StringBuffer): void;
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
					public static newInstance(options: string[]): org.apache.log4j.pattern.IntegerPatternConverter;
					public format(obj: any, toAppendTo: java.lang.StringBuffer): void;
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
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public static newInstance(options: string[]): org.apache.log4j.pattern.LevelPatternConverter;
					public format(event: org.apache.log4j.spi.LoggingEvent, output: java.lang.StringBuffer): void;
					public format(obj: any, output: java.lang.StringBuffer): void;
					public getStyleClass(e: any): string;
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
					public format(event: org.apache.log4j.spi.LoggingEvent, output: java.lang.StringBuffer): void;
					public format(obj: any, output: java.lang.StringBuffer): void;
					public static newInstance(options: string[]): org.apache.log4j.pattern.LineLocationPatternConverter;
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
					public static newInstance(options: string[]): org.apache.log4j.pattern.LineSeparatorPatternConverter;
					public format(obj: any, output: java.lang.StringBuffer): void;
					public format(obj: any, toAppendTo: java.lang.StringBuffer): void;
					public format(event: org.apache.log4j.spi.LoggingEvent, toAppendTo: java.lang.StringBuffer): void;
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
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public format(obj: any, output: java.lang.StringBuffer): void;
					public format(obj: any, toAppendTo: java.lang.StringBuffer): void;
					public constructor(literal: string);
					public format(event: org.apache.log4j.spi.LoggingEvent, toAppendTo: java.lang.StringBuffer): void;
					public constructor(name: string, style: string);
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
					public getPropertyKeySet(): java.util.Set<any>;
					public constructor(fqnOfCategoryClass: string, logger: org.apache.log4j.Category, level: org.apache.log4j.Priority, message: any, throwable: java.lang.Throwable);
					public static getStartTime(): number;
					public getProperties(): java.util.Map<any,any>;
					public getNDC(): string;
					public getMDCCopy(): void;
					public constructor(fqnOfCategoryClass: string, logger: org.apache.log4j.Category, timeStamp: number, param3: org.apache.log4j.Priority, level: any, message: java.lang.Throwable);
					public getThrowableInformation(): org.apache.log4j.spi.ThrowableInformation;
					public setProperty(propName: string, propValue: string): void;
					public getFQNOfLoggerClass(): string;
					public getProperty(key: string): string;
					public getMessage(): any;
					public getRenderedMessage(): string;
					public getLoggerName(): string;
					public getTimeStamp(): number;
					public getThrowableStrRep(): string[];
					public constructor(fqnOfCategoryClass: string, logger: org.apache.log4j.Logger, timeStamp: number, param3: org.apache.log4j.Level, level: any, message: string, threadName: org.apache.log4j.spi.ThrowableInformation, throwable: string, ndc: org.apache.log4j.spi.LocationInfo, info: java.util.Map<any,any>);
					public getMDC(key: string): any;
					public getLocationInformation(): org.apache.log4j.spi.LocationInfo;
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
					public static newInstance(options: string[]): org.apache.log4j.pattern.LoggerPatternConverter;
					public format(obj: any, output: java.lang.StringBuffer): void;
					public format(event: org.apache.log4j.spi.LoggingEvent, toAppendTo: java.lang.StringBuffer): void;
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
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public format(obj: any, output: java.lang.StringBuffer): void;
					public handlesThrowable(): boolean;
					public format(param0: any, param1: java.lang.StringBuffer): void;
					public constructor(name: string, style: string);
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
					public format(obj: any, output: java.lang.StringBuffer): void;
					public static newInstance(options: string[]): org.apache.log4j.pattern.MessagePatternConverter;
					public format(event: org.apache.log4j.spi.LoggingEvent, toAppendTo: java.lang.StringBuffer): void;
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
					public format(obj: any, output: java.lang.StringBuffer): void;
					public format(event: org.apache.log4j.spi.LoggingEvent, toAppendTo: java.lang.StringBuffer): void;
					public static newInstance(options: string[]): org.apache.log4j.pattern.MethodLocationPatternConverter;
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
					public format(obj: any, output: java.lang.StringBuffer): void;
					public static newInstance(options: string[]): org.apache.log4j.pattern.NDCPatternConverter;
					public format(event: org.apache.log4j.spi.LoggingEvent, toAppendTo: java.lang.StringBuffer): void;
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
					public static getAbbreviator(pattern: string): org.apache.log4j.pattern.NameAbbreviator;
					public static getDefaultAbbreviator(): org.apache.log4j.pattern.NameAbbreviator;
				}
				export module NameAbbreviator {
					export class DropElementAbbreviator extends org.apache.log4j.pattern.NameAbbreviator {
						public static class: java.lang.Class<org.apache.log4j.pattern.NameAbbreviator.DropElementAbbreviator>;
						public abbreviate(nameStart: number, buf: java.lang.StringBuffer): void;
						public constructor();
						public constructor(count: number);
						public abbreviate(param0: number, param1: java.lang.StringBuffer): void;
					}
					export class MaxElementAbbreviator extends org.apache.log4j.pattern.NameAbbreviator {
						public static class: java.lang.Class<org.apache.log4j.pattern.NameAbbreviator.MaxElementAbbreviator>;
						public abbreviate(nameStart: number, buf: java.lang.StringBuffer): void;
						public constructor();
						public constructor(count: number);
						public abbreviate(param0: number, param1: java.lang.StringBuffer): void;
					}
					export class NOPAbbreviator extends org.apache.log4j.pattern.NameAbbreviator {
						public static class: java.lang.Class<org.apache.log4j.pattern.NameAbbreviator.NOPAbbreviator>;
						public abbreviate(nameStart: number, buf: java.lang.StringBuffer): void;
						public constructor();
						public abbreviate(param0: number, param1: java.lang.StringBuffer): void;
					}
					export class PatternAbbreviator extends org.apache.log4j.pattern.NameAbbreviator {
						public static class: java.lang.Class<org.apache.log4j.pattern.NameAbbreviator.PatternAbbreviator>;
						public abbreviate(nameStart: number, buf: java.lang.StringBuffer): void;
						public constructor();
						public abbreviate(param0: number, param1: java.lang.StringBuffer): void;
						public constructor(fragments: java.util.List<any>);
					}
					export class PatternAbbreviatorFragment extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.pattern.NameAbbreviator.PatternAbbreviatorFragment>;
						public abbreviate(buf: java.lang.StringBuffer, startPos: number): number;
						public constructor(charCount: number, ellipsis: string);
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
					public constructor(name: string, style: string, options: string[]);
					public constructor(name: string, style: string);
					public abbreviate(nameStart: number, buf: java.lang.StringBuffer): void;
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
					public getName(): string;
					public format(param0: any, param1: java.lang.StringBuffer): void;
					public getStyleClass(e: any): string;
					public constructor(name: string, style: string);
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
					public static parse(pattern: string, patternConverters: java.util.List<any>, formattingInfos: java.util.List<any>, converterRegistry: java.util.Map<any,any>, rules: java.util.Map<any,any>): void;
					public static getFileNamePatternRules(): java.util.Map<any,any>;
				}
				export module PatternParser {
					export class ReadOnlyMap extends java.lang.Object implements java.util.Map<any,any> {
						public static class: java.lang.Class<org.apache.log4j.pattern.PatternParser.ReadOnlyMap>;
						public keySet(): java.util.Set<any>;
						public put(param0: any, param1: any): any;
						public equals(obj: any): boolean;
						public remove(param0: any): any;
						public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public containsKey(key: any): boolean;
						public values(): java.util.Collection<any>;
						public values(): java.util.Collection<any>;
						public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
						public getOrDefault(key: any, defaultValue: any): any;
						public putAll(param0: java.util.Map<any,any>): void;
						public remove(key: any, value: any): boolean;
						public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
						public putIfAbsent(key: any, value: any): any;
						public replace(key: any, oldValue: any, newValue: any): boolean;
						public isEmpty(): boolean;
						public forEach(action: any /* any<any,any>*/): void;
						public size(): number;
						public replace(key: any, value: any): any;
						public put(key: any, value: any): any;
						public replaceAll(_function_: any /* any<any,any,any>*/): void;
						public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
						public containsValue(value: any): boolean;
						public get(param0: any): any;
						public get(key: any): any;
						public putAll(t: java.util.Map<any,any>): void;
						public containsValue(param0: any): boolean;
						public containsKey(param0: any): boolean;
						public constructor(src: java.util.Map<any,any>);
						public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
						public remove(key: any): any;
						public clear(): void;
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
					public format(obj: any, output: java.lang.StringBuffer): void;
					public static newInstance(options: string[]): org.apache.log4j.pattern.PropertiesPatternConverter;
					public format(event: org.apache.log4j.spi.LoggingEvent, toAppendTo: java.lang.StringBuffer): void;
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
					public static newInstance(options: string[]): org.apache.log4j.pattern.RelativeTimePatternConverter;
					public format(param0: org.apache.log4j.spi.LoggingEvent, param1: java.lang.StringBuffer): void;
					public constructor();
					public format(obj: any, output: java.lang.StringBuffer): void;
					public format(event: org.apache.log4j.spi.LoggingEvent, toAppendTo: java.lang.StringBuffer): void;
					public constructor(name: string, style: string);
				}
				export module RelativeTimePatternConverter {
					export class CachedTimestamp extends java.lang.Object {
						public static class: java.lang.Class<org.apache.log4j.pattern.RelativeTimePatternConverter.CachedTimestamp>;
						public format(newTimestamp: number, param1: java.lang.StringBuffer): boolean;
						public constructor(timestamp: number, param1: string);
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
					public format(obj: any, output: java.lang.StringBuffer): void;
					public static newInstance(options: string[]): org.apache.log4j.pattern.SequenceNumberPatternConverter;
					public format(event: org.apache.log4j.spi.LoggingEvent, toAppendTo: java.lang.StringBuffer): void;
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
					public format(obj: any, output: java.lang.StringBuffer): void;
					public static newInstance(options: string[]): org.apache.log4j.pattern.ThreadPatternConverter;
					public format(event: org.apache.log4j.spi.LoggingEvent, toAppendTo: java.lang.StringBuffer): void;
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
					public format(obj: any, output: java.lang.StringBuffer): void;
					public handlesThrowable(): boolean;
					public static newInstance(options: string[]): org.apache.log4j.pattern.ThrowableInformationPatternConverter;
					public format(event: org.apache.log4j.spi.LoggingEvent, toAppendTo: java.lang.StringBuffer): void;
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
					public rewrite(source: org.apache.log4j.spi.LoggingEvent): org.apache.log4j.spi.LoggingEvent;
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
					public rewrite(source: org.apache.log4j.spi.LoggingEvent): org.apache.log4j.spi.LoggingEvent;
					public constructor();
					public setProperties(props: string): void;
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
					public rewrite(source: org.apache.log4j.spi.LoggingEvent): org.apache.log4j.spi.LoggingEvent;
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
					public isAttached(appender: org.apache.log4j.Appender): boolean;
					public removeAllAppenders(): void;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public setLayout(layout: org.apache.log4j.Layout): void;
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public getAppender(param0: string): org.apache.log4j.Appender;
					public constructor();
					public parseUnrecognizedElement(param0: org.w3c.dom.Element, param1: java.util.Properties): boolean;
					public close(): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public append(event: org.apache.log4j.spi.LoggingEvent): void;
					public getAllAppenders(): java.util.Enumeration<any>;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
					public addAppender(param0: org.apache.log4j.Appender): void;
					public isAttached(param0: org.apache.log4j.Appender): boolean;
					public removeAppender(param0: org.apache.log4j.Appender): void;
					public addAppender(newAppender: org.apache.log4j.Appender): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public removeAppender(param0: string): void;
					public setName(param0: string): void;
					public setRewritePolicy(rewritePolicy: org.apache.log4j.rewrite.RewritePolicy): void;
					public requiresLayout(): boolean;
					public removeAppender(appender: org.apache.log4j.Appender): void;
					public setName(name: string): void;
					public constructor(isActive: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public parseUnrecognizedElement(element: org.w3c.dom.Element, props: java.util.Properties): boolean;
					public removeAppender(name: string): void;
					public getName(): string;
					public activateOptions(): void;
					public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public clearFilters(): void;
					public getAppender(name: string): org.apache.log4j.Appender;
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
					public constructor(repository: org.apache.log4j.spi.LoggerRepository);
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
					public setNext(next: org.apache.log4j.spi.Filter): void;
					public getNext(): org.apache.log4j.spi.Filter;
					public constructor();
					public decide(param0: org.apache.log4j.spi.LoggingEvent): number;
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
					public getClassName(): string;
					public getLineNumber(): string;
					public getMethodName(): string;
					public constructor(t: java.lang.Throwable, fqnOfCallingClass: string);
					public constructor(file: string, classname: string, method: string, line: string);
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
					public constructor(fqnOfCategoryClass: string, logger: org.apache.log4j.Category, timeStamp: number, param3: org.apache.log4j.Level, level: any, message: string, threadName: org.apache.log4j.spi.ThrowableInformation, throwable: string, ndc: org.apache.log4j.spi.LocationInfo, info: java.util.Map<any,any>);
					public getPropertyKeySet(): java.util.Set<any>;
					public constructor(fqnOfCategoryClass: string, logger: org.apache.log4j.Category, level: org.apache.log4j.Priority, message: any, throwable: java.lang.Throwable);
					public static getStartTime(): number;
					public getProperties(): java.util.Map<any,any>;
					public getNDC(): string;
					public getMDCCopy(): void;
					public constructor(fqnOfCategoryClass: string, logger: org.apache.log4j.Category, timeStamp: number, param3: org.apache.log4j.Priority, level: any, message: java.lang.Throwable);
					public getThrowableInformation(): org.apache.log4j.spi.ThrowableInformation;
					public setProperty(propName: string, propValue: string): void;
					public getFQNOfLoggerClass(): string;
					public getProperty(key: string): string;
					public getMessage(): any;
					public getRenderedMessage(): string;
					public getLoggerName(): string;
					public getTimeStamp(): number;
					public getThrowableStrRep(): string[];
					public getMDC(key: string): any;
					public getLocationInformation(): org.apache.log4j.spi.LocationInfo;
					public getLogger(): org.apache.log4j.Category;
					public removeProperty(propName: string): any;
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
					public isAttached(appender: org.apache.log4j.Appender): boolean;
					public removeAllAppenders(): void;
					public isDebugEnabled(): boolean;
					public l7dlog(priority: org.apache.log4j.Priority, key: string, t: java.lang.Throwable): void;
					public error(message: any, t: java.lang.Throwable): void;
					public isInfoEnabled(): boolean;
					public trace(message: any): void;
					/** @deprecated */
					public getChainedPriority(): org.apache.log4j.Priority;
					public callAppenders(event: org.apache.log4j.spi.LoggingEvent): void;
					public l7dlog(priority: org.apache.log4j.Priority, key: string, params: any[], t: java.lang.Throwable): void;
					public isEnabledFor(level: org.apache.log4j.Priority): boolean;
					public getAppender(param0: string): org.apache.log4j.Appender;
					public debug(message: any, t: java.lang.Throwable): void;
					public setPriority(priority: org.apache.log4j.Priority): void;
					public warn(message: any, t: java.lang.Throwable): void;
					public trace(message: any, t: java.lang.Throwable): void;
					public getEffectiveLevel(): org.apache.log4j.Level;
					public isTraceEnabled(): boolean;
					public assertLog(assertion: boolean, msg: string): void;
					public getAllAppenders(): java.util.Enumeration<any>;
					public addAppender(param0: org.apache.log4j.Appender): void;
					public isAttached(param0: org.apache.log4j.Appender): boolean;
					public fatal(message: any, t: java.lang.Throwable): void;
					public removeAppender(param0: org.apache.log4j.Appender): void;
					public addAppender(newAppender: org.apache.log4j.Appender): void;
					public setResourceBundle(bundle: java.util.ResourceBundle): void;
					public error(message: any): void;
					public removeAppender(param0: string): void;
					public info(message: any, t: java.lang.Throwable): void;
					public fatal(message: any): void;
					/** @deprecated */
					public setPriority(priority: org.apache.log4j.Priority): void;
					public removeAppender(appender: org.apache.log4j.Appender): void;
					public constructor(name: string);
					public constructor(repo: org.apache.log4j.spi.NOPLoggerRepository, name: string);
					public debug(message: any): void;
					public removeAppender(name: string): void;
					public setLevel(level: org.apache.log4j.Level): void;
					public warn(message: any): void;
					public log(callerFQCN: string, level: org.apache.log4j.Priority, message: any, t: java.lang.Throwable): void;
					public getResourceBundle(): java.util.ResourceBundle;
					public info(message: any): void;
					public log(priority: org.apache.log4j.Priority, message: any, t: java.lang.Throwable): void;
					public log(priority: org.apache.log4j.Priority, message: any): void;
					public getAppender(name: string): org.apache.log4j.Appender;
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
					public getLogger(name: string): org.apache.log4j.Logger;
					public getRootLogger(): org.apache.log4j.Logger;
					public isDisabled(param0: number): boolean;
					public getLogger(param0: string): org.apache.log4j.Logger;
					public shutdown(): void;
					public getCurrentCategories(): java.util.Enumeration<any>;
					public constructor();
					public fireAddAppenderEvent(logger: org.apache.log4j.Category, appender: org.apache.log4j.Appender): void;
					public exists(param0: string): org.apache.log4j.Logger;
					public exists(name: string): org.apache.log4j.Logger;
					public addHierarchyEventListener(param0: org.apache.log4j.spi.HierarchyEventListener): void;
					public getCurrentLoggers(): java.util.Enumeration<any>;
					public setThreshold(val: string): void;
					public fireAddAppenderEvent(param0: org.apache.log4j.Category, param1: org.apache.log4j.Appender): void;
					public addHierarchyEventListener(listener: org.apache.log4j.spi.HierarchyEventListener): void;
					public getLogger(name: string, factory: org.apache.log4j.spi.LoggerFactory): org.apache.log4j.Logger;
					public getThreshold(): org.apache.log4j.Level;
					public setThreshold(level: org.apache.log4j.Level): void;
					public emitNoAppenderWarning(param0: org.apache.log4j.Category): void;
					public emitNoAppenderWarning(cat: org.apache.log4j.Category): void;
					public getLogger(param0: string, param1: org.apache.log4j.spi.LoggerFactory): org.apache.log4j.Logger;
					public isDisabled(level: number): boolean;
					public setThreshold(param0: org.apache.log4j.Level): void;
					public resetConfiguration(): void;
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
					public write(c: number): void;
					public append(param0: string): java.lang.Appendable;
					public append(csq: string, start: number, end: number): java.io.Writer;
					public write(cbuf: string[]): void;
					public write(param0: string[], param1: number, param2: number): void;
					public flush(): void;
					public append(csq: string): java.io.Writer;
					public write(str: string): void;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public close(): void;
					public write(str: string, off: number, len: number): void;
					public write(cbuf: string[], off: number, len: number): void;
					public append(c: string): java.io.Writer;
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
					public isAttached(appender: org.apache.log4j.Appender): boolean;
					public removeAllAppenders(): void;
					public constructor(level: org.apache.log4j.Level);
					public addAppender(param0: org.apache.log4j.Appender): void;
					public isAttached(param0: org.apache.log4j.Appender): boolean;
					public setPriority(level: org.apache.log4j.Level): void;
					public removeAppender(param0: org.apache.log4j.Appender): void;
					public addAppender(newAppender: org.apache.log4j.Appender): void;
					public getChainedLevel(): org.apache.log4j.Level;
					public removeAppender(param0: string): void;
					/** @deprecated */
					public setPriority(priority: org.apache.log4j.Priority): void;
					public getAppender(param0: string): org.apache.log4j.Appender;
					public removeAppender(appender: org.apache.log4j.Appender): void;
					public constructor(name: string);
					public setLevel(level: org.apache.log4j.Level): void;
					public removeAppender(name: string): void;
					public getAllAppenders(): java.util.Enumeration<any>;
					public getAppender(name: string): org.apache.log4j.Appender;
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
					public isAttached(appender: org.apache.log4j.Appender): boolean;
					public removeAllAppenders(): void;
					public constructor(level: org.apache.log4j.Level);
					public addAppender(param0: org.apache.log4j.Appender): void;
					public isAttached(param0: org.apache.log4j.Appender): boolean;
					public removeAppender(param0: org.apache.log4j.Appender): void;
					public addAppender(newAppender: org.apache.log4j.Appender): void;
					public getChainedLevel(): org.apache.log4j.Level;
					public removeAppender(param0: string): void;
					public getAppender(param0: string): org.apache.log4j.Appender;
					public removeAppender(appender: org.apache.log4j.Appender): void;
					public constructor(name: string);
					public setLevel(level: org.apache.log4j.Level): void;
					public removeAppender(name: string): void;
					public getAllAppenders(): java.util.Enumeration<any>;
					public getAppender(name: string): org.apache.log4j.Appender;
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
					public getThrowableStrRep(): string[];
					public constructor(throwable: java.lang.Throwable);
					public getThrowable(): java.lang.Throwable;
					public constructor(r: string[]);
					public constructor(throwable: java.lang.Throwable, category: org.apache.log4j.Category);
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
					public write(chars: string[]): void;
					public print(s: string[]): void;
					public append(param0: string): java.lang.Appendable;
					public print(chars: string[]): void;
					public write(buf: string[], off: number, len: number): void;
					public print(o: any): void;
					public toStringArray(): string[];
					public append(c: string): java.io.PrintWriter;
					public append(param0: string, param1: number, param2: number): java.lang.Appendable;
					public append(csq: string): java.io.PrintWriter;
					public write(chars: string[], off: number, len: number): void;
					public print(obj: any): void;
					public print(d: number): void;
					public println(x: number): void;
					public print(l: number): void;
					public println(x: any): void;
					public write(s: string): void;
					public close(): void;
					public println(x: string): void;
					public write(s: string, off: number, len: number): void;
					public print(c: string): void;
					public append(c: string): java.io.Writer;
					public append(csq: string, start: number, end: number): java.io.PrintWriter;
					public print(f: number): void;
					public write(c: number): void;
					public println(x: string[]): void;
					public append(csq: string, start: number, end: number): java.io.Writer;
					public print(i: number): void;
					public print(s: string): void;
					public append(csq: string): java.io.Writer;
					public flush(): void;
					public println(): void;
					public write(buf: string[]): void;
					public println(x: boolean): void;
					public println(s: string): void;
					public println(chars: string[]): void;
					public println(o: any): void;
					public print(b: boolean): void;
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
					public decide(event: org.apache.log4j.spi.LoggingEvent): number;
					public constructor();
					public decide(param0: org.apache.log4j.spi.LoggingEvent): number;
					/** @deprecated */
					public getOptionStrings(): string[];
					/** @deprecated */
					public setOption(key: string, value: string): void;
					public activateOptions(): void;
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
					public getPort(): number;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public constructor(layout: org.apache.log4j.Layout, filename: string, append: boolean, bufferedIO: boolean, bufferSize: number);
					public setLayout(layout: org.apache.log4j.Layout): void;
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public setPort(port: number): void;
					public constructor();
					public constructor(layout: org.apache.log4j.Layout, writer: java.io.Writer);
					public close(): void;
					public getFilter(): org.apache.log4j.spi.Filter;
					public addFilter(param0: org.apache.log4j.spi.Filter): void;
					public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
					public constructor(layout: org.apache.log4j.Layout, filename: string);
					public constructor(layout: org.apache.log4j.Layout, os: java.io.OutputStream);
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					public setName(param0: string): void;
					public setName(name: string): void;
					public requiresLayout(): boolean;
					public constructor(isActive: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public getName(): string;
					public activateOptions(): void;
					public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public constructor(layout: org.apache.log4j.Layout, filename: string, append: boolean);
					public clearFilters(): void;
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
					public setAppender(param0: org.apache.log4j.Appender): void;
					public setAppender(primary: org.apache.log4j.Appender): void;
					public error(message: string, e: java.lang.Exception, errorCode: number): void;
					public setBackupAppender(param0: org.apache.log4j.Appender): void;
					public error(param0: string): void;
					public error(param0: string, param1: java.lang.Exception, param2: number): void;
					public constructor();
					public setLogger(param0: org.apache.log4j.Logger): void;
					public setLogger(logger: org.apache.log4j.Logger): void;
					public activateOptions(): void;
					public error(message: string): void;
					public setBackupAppender(backup: org.apache.log4j.Appender): void;
					public error(param0: string, param1: java.lang.Exception, param2: number, param3: org.apache.log4j.spi.LoggingEvent): void;
					public error(message: string, e: java.lang.Exception, errorCode: number, event: org.apache.log4j.spi.LoggingEvent): void;
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
					public run(): void;
					public constructor(socket: java.net.Socket, er: org.apache.log4j.varia.ExternallyRolledFileAppender);
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
					public decide(event: org.apache.log4j.spi.LoggingEvent): number;
					public getAcceptOnMatch(): boolean;
					public constructor();
					public decide(param0: org.apache.log4j.spi.LoggingEvent): number;
					public setLevelToMatch(level: string): void;
					public activateOptions(): void;
					public setAcceptOnMatch(acceptOnMatch: boolean): void;
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
					public decide(event: org.apache.log4j.spi.LoggingEvent): number;
					public getLevelMin(): org.apache.log4j.Level;
					public getAcceptOnMatch(): boolean;
					public constructor();
					public decide(param0: org.apache.log4j.spi.LoggingEvent): number;
					public setLevelMax(levelMax: org.apache.log4j.Level): void;
					public activateOptions(): void;
					public getLevelMax(): org.apache.log4j.Level;
					public setAcceptOnMatch(acceptOnMatch: boolean): void;
					public setLevelMin(levelMin: org.apache.log4j.Level): void;
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
					public addFilter(newFilter: org.apache.log4j.spi.Filter): void;
					public setLayout(param0: org.apache.log4j.Layout): void;
					public doAppend(param0: org.apache.log4j.spi.LoggingEvent): void;
					public setLayout(layout: org.apache.log4j.Layout): void;
					public getErrorHandler(): org.apache.log4j.spi.ErrorHandler;
					/** @deprecated */
					public getInstance(): org.apache.log4j.varia.NullAppender;
					public static getNullAppender(): org.apache.log4j.varia.NullAppender;
					public setName(param0: string): void;
					public setErrorHandler(eh: org.apache.log4j.spi.ErrorHandler): void;
					public requiresLayout(): boolean;
					public setName(name: string): void;
					public constructor(isActive: boolean);
					public getLayout(): org.apache.log4j.Layout;
					public constructor();
					public getName(): string;
					public close(): void;
					public activateOptions(): void;
					public doAppend(event: org.apache.log4j.spi.LoggingEvent): void;
					public setErrorHandler(param0: org.apache.log4j.spi.ErrorHandler): void;
					public append(param0: org.apache.log4j.spi.LoggingEvent): void;
					public append(event: org.apache.log4j.spi.LoggingEvent): void;
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
					public doConfigure(inputStream: java.io.InputStream, repository: org.apache.log4j.spi.LoggerRepository): void;
					public doConfigure(url: java.net.URL, repository: org.apache.log4j.spi.LoggerRepository): void;
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
					public static main(argv: string[]): void;
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
					public decide(event: org.apache.log4j.spi.LoggingEvent): number;
					public getAcceptOnMatch(): boolean;
					public constructor();
					public decide(param0: org.apache.log4j.spi.LoggingEvent): number;
					/** @deprecated */
					public getOptionStrings(): string[];
					/** @deprecated */
					public setOption(key: string, value: string): void;
					public activateOptions(): void;
					public getStringToMatch(): string;
					public setAcceptOnMatch(acceptOnMatch: boolean): void;
					public setStringToMatch(s: string): void;
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
					public static configureAndWatch(configFilename: string): void;
					public doConfigure(element: org.w3c.dom.Element, repository: org.apache.log4j.spi.LoggerRepository): void;
					public parseChildrenOfLoggerElement(catElement: org.w3c.dom.Element, cat: org.apache.log4j.Logger, isRoot: boolean): void;
					public static configure(filename: string): void;
					public static configure(url: java.net.URL): void;
					public parseRoot(rootElement: org.w3c.dom.Element): void;
					public doConfigure(url: java.net.URL, repository: org.apache.log4j.spi.LoggerRepository): void;
					public parseErrorHandler(element: org.w3c.dom.Element, appender: org.apache.log4j.Appender): void;
					public parseThrowableRenderer(element: org.w3c.dom.Element): org.apache.log4j.spi.ThrowableRenderer;
					public doConfigure(param0: java.io.InputStream, param1: org.apache.log4j.spi.LoggerRepository): void;
					public static configure(element: org.w3c.dom.Element): void;
					public constructor();
					public subst(value: string): string;
					public parseLayout(layout_element: org.w3c.dom.Element): org.apache.log4j.Layout;
					public parseFilters(element: org.w3c.dom.Element, appender: org.apache.log4j.Appender): void;
					public doConfigure(reader: java.io.Reader, repository: org.apache.log4j.spi.LoggerRepository): void;
					public doConfigure(inputSource: org.xml.sax.InputSource, repository: org.apache.log4j.spi.LoggerRepository): void;
					public static parseElement(element: org.w3c.dom.Element, props: java.util.Properties, expectedClass: java.lang.Class<any>): any;
					public parseRenderer(element: org.w3c.dom.Element): void;
					public static setParameter(elem: org.w3c.dom.Element, propSetter: org.apache.log4j.config.PropertySetter, props: java.util.Properties): void;
					public findAppenderByReference(appenderRef: org.w3c.dom.Element): org.apache.log4j.Appender;
					public doConfigure(filename: string, repository: org.apache.log4j.spi.LoggerRepository): void;
					public setParameter(elem: org.w3c.dom.Element, propSetter: org.apache.log4j.config.PropertySetter): void;
					public parseAppender(appenderElement: org.w3c.dom.Element): org.apache.log4j.Appender;
					public doConfigure(param0: java.net.URL, param1: org.apache.log4j.spi.LoggerRepository): void;
					public doConfigure(inputStream: java.io.InputStream, repository: org.apache.log4j.spi.LoggerRepository): void;
					public parse(element: org.w3c.dom.Element): void;
					public static configureAndWatch(configFilename: string, delay: number): void;
					public parseCategoryFactory(factoryElement: org.w3c.dom.Element): void;
					public static subst(value: string, props: java.util.Properties): string;
					public findAppenderByName(doc: org.w3c.dom.Document, appenderName: string): org.apache.log4j.Appender;
					public parseCategory(loggerElement: org.w3c.dom.Element): void;
					public parseLevel(element: org.w3c.dom.Element, logger: org.apache.log4j.Logger, isRoot: boolean): void;
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
					public resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
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
					public error(ex: org.xml.sax.SAXParseException): void;
					public warning(param0: org.xml.sax.SAXParseException): void;
					public fatalError(param0: org.xml.sax.SAXParseException): void;
					public constructor();
					public warning(ex: org.xml.sax.SAXParseException): void;
					public fatalError(ex: org.xml.sax.SAXParseException): void;
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
					public activateOptions(): void;
					public format(param0: org.apache.log4j.spi.LoggingEvent): string;
					public getLocationInfo(): boolean;
					public setLocationInfo(flag: boolean): void;
					public format(event: org.apache.log4j.spi.LoggingEvent): string;
					public ignoresThrowable(): boolean;
					public setProperties(flag: boolean): void;
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

//Generics information:

