// Type definitions for AutoJs6 gradle wrapper
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.6.3
//
// Last modified: May 22, 2022

/// <reference path="../index.d.ts" />

// @ts-ignore
declare module org {
	export module gradle {
		export module cli {
			export abstract class AbstractCommandLineConverter<T>  extends org.gradle.cli.CommandLineConverter<any> {
				public static class: java.lang.Class<org.gradle.cli.AbstractCommandLineConverter<any>>;
				public configure(param0: org.gradle.cli.CommandLineParser): void;
				public convert(param0: org.gradle.cli.ParsedCommandLine, param1: any): any;
				public convert(param0: java.lang.Iterable<string>, param1: any): any;
				public constructor();
			}
		}
	}
}

declare module org {
	export module gradle {
		export module cli {
			export abstract class AbstractPropertiesCommandLineConverter extends org.gradle.cli.AbstractCommandLineConverter<java.util.Map<string,string>> {
				public static class: java.lang.Class<org.gradle.cli.AbstractPropertiesCommandLineConverter>;
				public getPropertyOptionDescription(): string;
				public configure(param0: org.gradle.cli.CommandLineParser): void;
				public getPropertyOptionDetailed(): string;
				public convert(param0: org.gradle.cli.ParsedCommandLine, param1: java.util.Map<string,string>): java.util.Map<string,string>;
				public convert(param0: org.gradle.cli.ParsedCommandLine, param1: any): any;
				public convert(param0: java.lang.Iterable<string>, param1: any): any;
				public getPropertyOption(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module gradle {
		export module cli {
			export class CommandLineArgumentException extends java.lang.RuntimeException {
				public static class: java.lang.Class<org.gradle.cli.CommandLineArgumentException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module org {
	export module gradle {
		export module cli {
			export class CommandLineConverter<T>  extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.cli.CommandLineConverter<any>>;
				/**
				 * Constructs a new instance of the org.gradle.cli.CommandLineConverter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					convert(param0: java.lang.Iterable<string>, param1: T): T;
					convert(param0: org.gradle.cli.ParsedCommandLine, param1: T): T;
					configure(param0: org.gradle.cli.CommandLineParser): void;
				});
				public constructor();
				public convert(param0: org.gradle.cli.ParsedCommandLine, param1: T): T;
				public configure(param0: org.gradle.cli.CommandLineParser): void;
				public convert(param0: java.lang.Iterable<string>, param1: T): T;
			}
		}
	}
}

declare module org {
	export module gradle {
		export module cli {
			export class CommandLineOption extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.cli.CommandLineOption>;
				public incubating(): org.gradle.cli.CommandLineOption;
				public hasArgument(param0: java.lang.Class<any>): org.gradle.cli.CommandLineOption;
				public getAllowsArguments(): boolean;
				public getDeprecationWarning(): string;
				public getOptions(): java.util.Set<string>;
				public hasArgument(): org.gradle.cli.CommandLineOption;
				public hasArguments(): org.gradle.cli.CommandLineOption;
				public getDescription(): string;
				public constructor(param0: java.lang.Iterable<string>);
				public getAllowsMultipleArguments(): boolean;
				public deprecated(param0: string): org.gradle.cli.CommandLineOption;
				public hasDescription(param0: string): org.gradle.cli.CommandLineOption;
			}
		}
	}
}

declare module org {
	export module gradle {
		export module cli {
			export class CommandLineParser extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.cli.CommandLineParser>;
				public printUsage(param0: java.lang.Appendable): void;
				public option(param0: string[]): org.gradle.cli.CommandLineOption;
				public parse(param0: string[]): org.gradle.cli.ParsedCommandLine;
				public allowUnknownOptions(): org.gradle.cli.CommandLineParser;
				public allowOneOf(param0: string[]): org.gradle.cli.CommandLineParser;
				public constructor(param0: java.io.Writer);
				public parse(param0: java.lang.Iterable<string>): org.gradle.cli.ParsedCommandLine;
				public allowMixedSubcommandsAndOptions(): org.gradle.cli.CommandLineParser;
				public constructor();
			}
			export module CommandLineParser {
				export class AfterFirstSubCommand extends org.gradle.cli.CommandLineParser.OptionAwareParserState {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.AfterFirstSubCommand>;
					public onStartOption(param0: string, param1: string): org.gradle.cli.CommandLineParser.OptionParserState;
				}
				export class AfterOptions extends org.gradle.cli.CommandLineParser.ParserState {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.AfterOptions>;
					public onStartOption(param0: string, param1: string): org.gradle.cli.CommandLineParser.OptionParserState;
					public onNonOption(param0: string): org.gradle.cli.CommandLineParser.ParserState;
					public maybeStartOption(param0: string): boolean;
				}
				export class BeforeFirstSubCommand extends org.gradle.cli.CommandLineParser.OptionAwareParserState {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.BeforeFirstSubCommand>;
					public onStartOption(param0: string, param1: string): org.gradle.cli.CommandLineParser.OptionParserState;
				}
				export class CaseInsensitiveStringComparator extends java.util.Comparator<string> {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.CaseInsensitiveStringComparator>;
					public compare(param0: any, param1: any): number;
					public static comparing(param0: any /* any*/): java.util.Comparator<any>;
					public compare(param0: string, param1: string): number;
					public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public reversed(): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
				}
				export class KnownOptionParserState extends org.gradle.cli.CommandLineParser.OptionParserState {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.KnownOptionParserState>;
					public onArgument(param0: string): org.gradle.cli.CommandLineParser.ParserState;
					public onComplete(): org.gradle.cli.CommandLineParser.ParserState;
					public onStartNextArg(): org.gradle.cli.CommandLineParser.ParserState;
					public getHasArgument(): boolean;
				}
				export class MissingOptionArgState extends org.gradle.cli.CommandLineParser.ParserState {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.MissingOptionArgState>;
					public onStartOption(param0: string, param1: string): org.gradle.cli.CommandLineParser.OptionParserState;
					public onNonOption(param0: string): org.gradle.cli.CommandLineParser.ParserState;
					public maybeStartOption(param0: string): boolean;
					public onCommandLineEnd(): void;
				}
				export abstract class OptionAwareParserState extends org.gradle.cli.CommandLineParser.ParserState {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.OptionAwareParserState>;
					public commandLine: org.gradle.cli.ParsedCommandLine;
					public onNonOption(param0: string): org.gradle.cli.CommandLineParser.ParserState;
					public maybeStartOption(param0: string): boolean;
					public constructor(param0: org.gradle.cli.CommandLineParser, param1: org.gradle.cli.ParsedCommandLine);
				}
				export class OptionComparator extends java.util.Comparator<org.gradle.cli.CommandLineOption> {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.OptionComparator>;
					public compare(param0: any, param1: any): number;
					public static comparing(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public reversed(): java.util.Comparator<any>;
					public compare(param0: org.gradle.cli.CommandLineOption, param1: org.gradle.cli.CommandLineOption): number;
					public static naturalOrder(): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
				}
				export abstract class OptionParserState extends java.lang.Object {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.OptionParserState>;
					public onArgument(param0: string): org.gradle.cli.CommandLineParser.ParserState;
					public onComplete(): org.gradle.cli.CommandLineParser.ParserState;
					public onStartNextArg(): org.gradle.cli.CommandLineParser.ParserState;
					public getHasArgument(): boolean;
				}
				export class OptionString extends java.lang.Object {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.OptionString>;
					public getDisplayName(): string;
					public toString(): string;
				}
				export class OptionStringComparator extends java.util.Comparator<string> {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.OptionStringComparator>;
					public compare(param0: any, param1: any): number;
					public static comparing(param0: any /* any*/): java.util.Comparator<any>;
					public compare(param0: string, param1: string): number;
					public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
					public reversed(): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
					public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
				}
				export abstract class ParserState extends java.lang.Object {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.ParserState>;
					public onStartOption(param0: string, param1: string): org.gradle.cli.CommandLineParser.OptionParserState;
					public onNonOption(param0: string): org.gradle.cli.CommandLineParser.ParserState;
					public maybeStartOption(param0: string): boolean;
					public onCommandLineEnd(): void;
				}
				export class UnknownOptionParserState extends org.gradle.cli.CommandLineParser.OptionParserState {
					public static class: java.lang.Class<org.gradle.cli.CommandLineParser.UnknownOptionParserState>;
					public onArgument(param0: string): org.gradle.cli.CommandLineParser.ParserState;
					public onComplete(): org.gradle.cli.CommandLineParser.ParserState;
					public onStartNextArg(): org.gradle.cli.CommandLineParser.ParserState;
					public getHasArgument(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module gradle {
		export module cli {
			export class ParsedCommandLine extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.cli.ParsedCommandLine>;
				public hadOptionRemoved(param0: string): boolean;
				public hasAnyOption(param0: java.util.Collection<string>): boolean;
				public toString(): string;
				public hasOption(param0: string): boolean;
				public option(param0: string): org.gradle.cli.ParsedCommandLineOption;
				public getExtraArguments(): java.util.List<string>;
			}
		}
	}
}

declare module org {
	export module gradle {
		export module cli {
			export class ParsedCommandLineOption extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.cli.ParsedCommandLineOption>;
				public getValues(): java.util.List<string>;
				public hasValue(): boolean;
				public getValue(): string;
				public addArgument(param0: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module gradle {
		export module cli {
			export class ProjectPropertiesCommandLineConverter extends org.gradle.cli.AbstractPropertiesCommandLineConverter {
				public static class: java.lang.Class<org.gradle.cli.ProjectPropertiesCommandLineConverter>;
				public getPropertyOptionDescription(): string;
				public configure(param0: org.gradle.cli.CommandLineParser): void;
				public getPropertyOptionDetailed(): string;
				public convert(param0: org.gradle.cli.ParsedCommandLine, param1: java.util.Map<string,string>): java.util.Map<string,string>;
				public convert(param0: org.gradle.cli.ParsedCommandLine, param1: any): any;
				public convert(param0: java.lang.Iterable<string>, param1: any): any;
				public getPropertyOption(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module gradle {
		export module cli {
			export class SystemPropertiesCommandLineConverter extends org.gradle.cli.AbstractPropertiesCommandLineConverter {
				public static class: java.lang.Class<org.gradle.cli.SystemPropertiesCommandLineConverter>;
				public getPropertyOptionDescription(): string;
				public configure(param0: org.gradle.cli.CommandLineParser): void;
				public getPropertyOptionDetailed(): string;
				public convert(param0: org.gradle.cli.ParsedCommandLine, param1: java.util.Map<string,string>): java.util.Map<string,string>;
				public convert(param0: org.gradle.cli.ParsedCommandLine, param1: any): any;
				public convert(param0: java.lang.Iterable<string>, param1: any): any;
				public getPropertyOption(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module gradle {
		export module wrapper {
			export class BootstrapMainStarter extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.wrapper.BootstrapMainStarter>;
				public start(param0: string[], param1: java.io.File): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module gradle {
		export module wrapper {
			export class Download extends java.lang.Object implements org.gradle.wrapper.IDownload {
				public static class: java.lang.Class<org.gradle.wrapper.Download>;
				public download(param0: java.net.URI, param1: java.io.File): void;
				public constructor(param0: org.gradle.wrapper.Logger, param1: string, param2: string);
			}
			export module Download {
				export class SystemPropertiesProxyAuthenticator extends java.net.Authenticator {
					public static class: java.lang.Class<org.gradle.wrapper.Download.SystemPropertiesProxyAuthenticator>;
					public getPasswordAuthentication(): java.net.PasswordAuthentication;
				}
			}
		}
	}
}

declare module org {
	export module gradle {
		export module wrapper {
			export class ExclusiveFileAccessManager extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.wrapper.ExclusiveFileAccessManager>;
				public static LOCK_FILE_SUFFIX: string;
				public constructor(param0: number, param1: number);
				public access(param0: java.io.File, param1: java.util.concurrent.Callable<any>): any;
			}
		}
	}
}

declare module org {
	export module gradle {
		export module wrapper {
			export class GradleUserHomeLookup extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.wrapper.GradleUserHomeLookup>;
				public static DEFAULT_GRADLE_USER_HOME: string;
				public static GRADLE_USER_HOME_PROPERTY_KEY: string;
				public static GRADLE_USER_HOME_ENV_KEY: string;
				public static gradleUserHome(): java.io.File;
				public constructor();
			}
		}
	}
}

declare module org {
	export module gradle {
		export module wrapper {
			export class GradleWrapperMain extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.wrapper.GradleWrapperMain>;
				public static GRADLE_USER_HOME_OPTION: string;
				public static GRADLE_USER_HOME_DETAILED_OPTION: string;
				public static GRADLE_QUIET_OPTION: string;
				public static GRADLE_QUIET_DETAILED_OPTION: string;
				public static main(param0: string[]): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module gradle {
		export module wrapper {
			export class IDownload extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.wrapper.IDownload>;
				/**
				 * Constructs a new instance of the org.gradle.wrapper.IDownload interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					download(param0: java.net.URI, param1: java.io.File): void;
				});
				public constructor();
				public download(param0: java.net.URI, param1: java.io.File): void;
			}
		}
	}
}

declare module org {
	export module gradle {
		export module wrapper {
			export class Install extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.wrapper.Install>;
				public static DEFAULT_DISTRIBUTION_PATH: string;
				public createDist(param0: org.gradle.wrapper.WrapperConfiguration): java.io.File;
				public constructor(param0: org.gradle.wrapper.Logger, param1: org.gradle.wrapper.IDownload, param2: org.gradle.wrapper.PathAssembler);
			}
		}
	}
}

declare module org {
	export module gradle {
		export module wrapper {
			export class Logger extends java.lang.Object implements java.lang.Appendable {
				public static class: java.lang.Class<org.gradle.wrapper.Logger>;
				public log(param0: string): void;
				public constructor(param0: boolean);
				public append(param0: string): java.lang.Appendable;
				public append(param0: string, param1: number, param2: number): java.lang.Appendable;
			}
		}
	}
}

declare module org {
	export module gradle {
		export module wrapper {
			export class PathAssembler extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.wrapper.PathAssembler>;
				public static GRADLE_USER_HOME_STRING: string;
				public static PROJECT_STRING: string;
				public getDistribution(param0: org.gradle.wrapper.WrapperConfiguration): org.gradle.wrapper.PathAssembler.LocalDistribution;
				public constructor(param0: java.io.File);
				public constructor();
			}
			export module PathAssembler {
				export class LocalDistribution extends java.lang.Object {
					public static class: java.lang.Class<org.gradle.wrapper.PathAssembler.LocalDistribution>;
					public getZipFile(): java.io.File;
					public constructor(param0: org.gradle.wrapper.PathAssembler, param1: java.io.File, param2: java.io.File);
					public getDistributionDir(): java.io.File;
				}
			}
		}
	}
}

declare module org {
	export module gradle {
		export module wrapper {
			export class SystemPropertiesHandler extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.wrapper.SystemPropertiesHandler>;
				public static getSystemProperties(param0: java.io.File): java.util.Map<string,string>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module gradle {
		export module wrapper {
			export class WrapperConfiguration extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.wrapper.WrapperConfiguration>;
				public getZipPath(): string;
				public setDistributionSha256Sum(param0: string): void;
				public setZipBase(param0: string): void;
				public setZipPath(param0: string): void;
				public getDistribution(): java.net.URI;
				public constructor();
				public getDistributionPath(): string;
				public setDistributionBase(param0: string): void;
				public setDistributionPath(param0: string): void;
				public getZipBase(): string;
				public getDistributionSha256Sum(): string;
				public setDistribution(param0: java.net.URI): void;
				public getDistributionBase(): string;
			}
		}
	}
}

declare module org {
	export module gradle {
		export module wrapper {
			export class WrapperExecutor extends java.lang.Object {
				public static class: java.lang.Class<org.gradle.wrapper.WrapperExecutor>;
				public static DISTRIBUTION_URL_PROPERTY: string;
				public static DISTRIBUTION_BASE_PROPERTY: string;
				public static DISTRIBUTION_PATH_PROPERTY: string;
				public static DISTRIBUTION_SHA_256_SUM: string;
				public static ZIP_STORE_BASE_PROPERTY: string;
				public static ZIP_STORE_PATH_PROPERTY: string;
				public static forProjectDirectory(param0: java.io.File, param1: java.lang.Appendable): org.gradle.wrapper.WrapperExecutor;
				public getConfiguration(): org.gradle.wrapper.WrapperConfiguration;
				public execute(param0: string[], param1: org.gradle.wrapper.Install, param2: org.gradle.wrapper.BootstrapMainStarter): void;
				public getDistribution(): java.net.URI;
				public static forWrapperPropertiesFile(param0: java.io.File, param1: java.lang.Appendable): org.gradle.wrapper.WrapperExecutor;
			}
		}
	}
}

//Generics information:
//org.gradle.cli.AbstractCommandLineConverter:1
//org.gradle.cli.CommandLineConverter:1

