declare module androidx {
	export module window {
		export module core {
			export class AndroidLogger extends java.lang.Object implements androidx.window.core.Logger {
				public static class: java.lang.Class<androidx.window.core.AndroidLogger>;
				public static INSTANCE: androidx.window.core.AndroidLogger;
				public debug(tag: string, message: string): void;
				public debug(param0: string, param1: string): void;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module core {
			export class Bounds extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.core.Bounds>;
				public getHeight(): number;
				public constructor(rect: android.graphics.Rect);
				public toRect(): android.graphics.Rect;
				public getBottom(): number;
				public getRight(): number;
				public toString(): string;
				public getTop(): number;
				public getWidth(): number;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public getLeft(): number;
				public hashCode(): number;
				public isZero(): boolean;
				public isEmpty(): boolean;
				public constructor(left: number, top: number, right: number, bottom: number);
			}
		}
	}
}

declare module androidx {
	export module window {
		export module core {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.core.BuildConfig>;
				public static INSTANCE: androidx.window.core.BuildConfig;
				public getVerificationMode(): androidx.window.core.SpecificationComputer.VerificationMode;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module core {
			export class ExperimentalWindowApi extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.window.core.ExperimentalWindowApi>;
				/**
				 * Constructs a new instance of the androidx.window.core.ExperimentalWindowApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module core {
			export class FailedSpecification<T>  extends androidx.window.core.SpecificationComputer<any> {
				public static class: java.lang.Class<androidx.window.core.FailedSpecification<any>>;
				public constructor(value: any, tag: string, message: string, logger: androidx.window.core.Logger, verificationMode: androidx.window.core.SpecificationComputer.VerificationMode);
				public getLogger(): androidx.window.core.Logger;
				public getException(): androidx.window.core.WindowStrictModeException;
				public require(message: string, condition: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): androidx.window.core.SpecificationComputer<any>;
				public require(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): androidx.window.core.SpecificationComputer<any>;
				public compute(): any;
				public getTag(): string;
				public getVerificationMode(): androidx.window.core.SpecificationComputer.VerificationMode;
				public getValue(): any;
				public getMessage(): string;
				public constructor();
			}
			export module FailedSpecification {
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.core.FailedSpecification.WhenMappings>;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module core {
			export class Logger extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.core.Logger>;
				/**
				 * Constructs a new instance of the androidx.window.core.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					debug(param0: string, param1: string): void;
				});
				public constructor();
				public debug(param0: string, param1: string): void;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module core {
			export abstract class SpecificationComputer<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.core.SpecificationComputer<any>>;
				public compute(): T;
				public createMessage(value: any, message: string): string;
				public require(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): androidx.window.core.SpecificationComputer<T>;
				public constructor();
			}
			export module SpecificationComputer {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.core.SpecificationComputer.Companion>;
					public startSpecification($this$startSpecification: any, tag: string, verificationMode: androidx.window.core.SpecificationComputer.VerificationMode, logger: androidx.window.core.Logger): androidx.window.core.SpecificationComputer<any>;
				}
				export class VerificationMode {
					public static class: java.lang.Class<androidx.window.core.SpecificationComputer.VerificationMode>;
					public static STRICT: androidx.window.core.SpecificationComputer.VerificationMode;
					public static LOG: androidx.window.core.SpecificationComputer.VerificationMode;
					public static QUIET: androidx.window.core.SpecificationComputer.VerificationMode;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): androidx.window.core.SpecificationComputer.VerificationMode[];
					public static valueOf(value: string): androidx.window.core.SpecificationComputer.VerificationMode;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module core {
			export class ValidSpecification<T>  extends androidx.window.core.SpecificationComputer<any> {
				public static class: java.lang.Class<androidx.window.core.ValidSpecification<any>>;
				public getLogger(): androidx.window.core.Logger;
				public require(message: string, condition: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): androidx.window.core.SpecificationComputer<any>;
				public require(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): androidx.window.core.SpecificationComputer<any>;
				public constructor(value: any, tag: string, verificationMode: androidx.window.core.SpecificationComputer.VerificationMode, logger: androidx.window.core.Logger);
				public compute(): any;
				public getTag(): string;
				public getVerificationMode(): androidx.window.core.SpecificationComputer.VerificationMode;
				public getValue(): any;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module window {
		export module core {
			export class Version extends java.lang.Comparable<androidx.window.core.Version> {
				public static class: java.lang.Class<androidx.window.core.Version>;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public static parse(versionString: string): androidx.window.core.Version;
				public getPatch(): number;
				public compareTo(other: androidx.window.core.Version): number;
				public hashCode(): number;
				public getMinor(): number;
				public getDescription(): string;
				public toString(): string;
				public getMajor(): number;
			}
			export module Version {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.core.Version.Companion>;
					public getVERSION_0_1(): androidx.window.core.Version;
					public getVERSION_1_0(): androidx.window.core.Version;
					public parse(versionString: string): androidx.window.core.Version;
					public getUNKNOWN(): androidx.window.core.Version;
					public getCURRENT(): androidx.window.core.Version;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module core {
			export class WindowStrictModeException extends java.lang.Exception {
				public static class: java.lang.Class<androidx.window.core.WindowStrictModeException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class ActivityFilter extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.embedding.ActivityFilter>;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public matchesIntent(intent: android.content.Intent): boolean;
				public getIntentAction(): string;
				public hashCode(): number;
				public getComponentName(): android.content.ComponentName;
				public constructor(componentName: android.content.ComponentName, intentAction: string);
				public matchesActivity(activity: android.app.Activity): boolean;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class ActivityRule extends androidx.window.embedding.EmbeddingRule {
				public static class: java.lang.Class<androidx.window.embedding.ActivityRule>;
				public getFilters(): java.util.Set<androidx.window.embedding.ActivityFilter>;
				public plus$window_release(filter: androidx.window.embedding.ActivityFilter): androidx.window.embedding.ActivityRule;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public getAlwaysExpand(): boolean;
				public constructor(filters: java.util.Set<androidx.window.embedding.ActivityFilter>, alwaysExpand: boolean);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class ActivityStack extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.embedding.ActivityStack>;
				public constructor(activities: java.util.List<any>, isEmpty: boolean);
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public getActivities$window_release(): java.util.List<android.app.Activity>;
				public hashCode(): number;
				public contains(activity: android.app.Activity): boolean;
				public isEmpty(): boolean;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class EmbeddingAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.embedding.EmbeddingAdapter>;
				public translateActivityPredicates(activityFilters: java.util.Set<androidx.window.embedding.ActivityFilter>): any /* any*/;
				public translate(rules: java.util.Set<any>): java.util.Set<androidx.window.extensions.embedding.EmbeddingRule>;
				public translate(splitInfoList: java.util.List<any>): java.util.List<androidx.window.embedding.SplitInfo>;
				public translateParentMetricsPredicate(splitRule: androidx.window.embedding.SplitRule): any /* any*/;
				public translateIntentPredicates(activityFilters: java.util.Set<androidx.window.embedding.ActivityFilter>): any /* any*/;
				public translateActivityPairPredicates(splitPairFilters: java.util.Set<androidx.window.embedding.SplitPairFilter>): any /* any<android.util.Pair<android.app.Activity,android.app.Activity>>*/;
				public constructor();
				public translateActivityIntentPredicates(splitPairFilters: java.util.Set<androidx.window.embedding.SplitPairFilter>): any /* any<android.util.Pair<android.app.Activity,android.content.Intent>>*/;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class EmbeddingBackend extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.embedding.EmbeddingBackend>;
				/**
				 * Constructs a new instance of the androidx.window.embedding.EmbeddingBackend interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setSplitRules(param0: java.util.Set<any>): void;
					getSplitRules(): java.util.Set<androidx.window.embedding.EmbeddingRule>;
					registerRule(param0: androidx.window.embedding.EmbeddingRule): void;
					unregisterRule(param0: androidx.window.embedding.EmbeddingRule): void;
					registerSplitListenerForActivity(param0: android.app.Activity, param1: java.util.concurrent.Executor, param2: androidx.core.util.Consumer<java.util.List<androidx.window.embedding.SplitInfo>>): void;
					unregisterSplitListenerForActivity(param0: androidx.core.util.Consumer<java.util.List<androidx.window.embedding.SplitInfo>>): void;
					isSplitSupported(): boolean;
				});
				public constructor();
				public unregisterRule(param0: androidx.window.embedding.EmbeddingRule): void;
				public registerSplitListenerForActivity(param0: android.app.Activity, param1: java.util.concurrent.Executor, param2: androidx.core.util.Consumer<java.util.List<androidx.window.embedding.SplitInfo>>): void;
				public getSplitRules(): java.util.Set<androidx.window.embedding.EmbeddingRule>;
				public isSplitSupported(): boolean;
				public registerRule(param0: androidx.window.embedding.EmbeddingRule): void;
				public setSplitRules(param0: java.util.Set<any>): void;
				public unregisterSplitListenerForActivity(param0: androidx.core.util.Consumer<java.util.List<androidx.window.embedding.SplitInfo>>): void;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class EmbeddingCompat extends java.lang.Object implements androidx.window.embedding.EmbeddingInterfaceCompat {
				public static class: java.lang.Class<androidx.window.embedding.EmbeddingCompat>;
				public static DEBUG: boolean;
				public setSplitRules(rules: java.util.Set<any>): void;
				public setEmbeddingCallback(param0: androidx.window.embedding.EmbeddingInterfaceCompat.EmbeddingCallbackInterface): void;
				public constructor(embeddingExtension: androidx.window.extensions.embedding.ActivityEmbeddingComponent, adapter: androidx.window.embedding.EmbeddingAdapter);
				public setEmbeddingCallback(embeddingCallback: androidx.window.embedding.EmbeddingInterfaceCompat.EmbeddingCallbackInterface): void;
				public setSplitRules(param0: java.util.Set<any>): void;
				public constructor();
			}
			export module EmbeddingCompat {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.embedding.EmbeddingCompat.Companion>;
					public getExtensionApiLevel(): java.lang.Integer;
					public isEmbeddingAvailable(): boolean;
					public embeddingComponent(): androidx.window.extensions.embedding.ActivityEmbeddingComponent;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class EmbeddingInterfaceCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.embedding.EmbeddingInterfaceCompat>;
				/**
				 * Constructs a new instance of the androidx.window.embedding.EmbeddingInterfaceCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setSplitRules(param0: java.util.Set<any>): void;
					setEmbeddingCallback(param0: androidx.window.embedding.EmbeddingInterfaceCompat.EmbeddingCallbackInterface): void;
				});
				public constructor();
				public setEmbeddingCallback(param0: androidx.window.embedding.EmbeddingInterfaceCompat.EmbeddingCallbackInterface): void;
				public setSplitRules(param0: java.util.Set<any>): void;
			}
			export module EmbeddingInterfaceCompat {
				export class EmbeddingCallbackInterface extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.embedding.EmbeddingInterfaceCompat.EmbeddingCallbackInterface>;
					/**
					 * Constructs a new instance of the androidx.window.embedding.EmbeddingInterfaceCompat$EmbeddingCallbackInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSplitInfoChanged(param0: java.util.List<androidx.window.embedding.SplitInfo>): void;
					});
					public constructor();
					public onSplitInfoChanged(param0: java.util.List<androidx.window.embedding.SplitInfo>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export abstract class EmbeddingRule extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.embedding.EmbeddingRule>;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class EmbeddingTranslatingCallback extends java.lang.Object /* any*/ {
				public static class: java.lang.Class<androidx.window.embedding.EmbeddingTranslatingCallback>;
				public accept(splitInfoList: java.util.List<any>): void;
				public constructor(callback: androidx.window.embedding.EmbeddingInterfaceCompat.EmbeddingCallbackInterface, adapter: androidx.window.embedding.EmbeddingAdapter);
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class EmptyEmbeddingComponent extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.embedding.EmptyEmbeddingComponent>;
				public setSplitInfoCallback(consumer: any /* any*/): void;
				public setEmbeddingRules(splitRules: java.util.Set<androidx.window.extensions.embedding.EmbeddingRule>): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class ExtensionEmbeddingBackend extends java.lang.Object implements androidx.window.embedding.EmbeddingBackend {
				public static class: java.lang.Class<androidx.window.embedding.ExtensionEmbeddingBackend>;
				public unregisterRule(param0: androidx.window.embedding.EmbeddingRule): void;
				public registerSplitListenerForActivity(param0: android.app.Activity, param1: java.util.concurrent.Executor, param2: androidx.core.util.Consumer<java.util.List<androidx.window.embedding.SplitInfo>>): void;
				public constructor(embeddingExtension: androidx.window.embedding.EmbeddingInterfaceCompat);
				public registerSplitListenerForActivity(activity: android.app.Activity, executor: java.util.concurrent.Executor, callback: androidx.core.util.Consumer<java.util.List<androidx.window.embedding.SplitInfo>>): void;
				public registerRule(rule: androidx.window.embedding.EmbeddingRule): void;
				public getSplitRules(): java.util.Set<androidx.window.embedding.EmbeddingRule>;
				public registerRule(param0: androidx.window.embedding.EmbeddingRule): void;
				public getSplitChangeCallbacks(): java.util.concurrent.CopyOnWriteArrayList<androidx.window.embedding.ExtensionEmbeddingBackend.SplitListenerWrapper>;
				public setSplitRules(rules: java.util.Set<any>): void;
				public unregisterRule(rule: androidx.window.embedding.EmbeddingRule): void;
				public isSplitSupported(): boolean;
				public unregisterSplitListenerForActivity(consumer: androidx.core.util.Consumer<java.util.List<androidx.window.embedding.SplitInfo>>): void;
				public setEmbeddingExtension(<set-?>: androidx.window.embedding.EmbeddingInterfaceCompat): void;
				public setSplitRules(param0: java.util.Set<any>): void;
				public unregisterSplitListenerForActivity(param0: androidx.core.util.Consumer<java.util.List<androidx.window.embedding.SplitInfo>>): void;
				public getEmbeddingExtension(): androidx.window.embedding.EmbeddingInterfaceCompat;
			}
			export module ExtensionEmbeddingBackend {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.embedding.ExtensionEmbeddingBackend.Companion>;
					public getInstance(): androidx.window.embedding.ExtensionEmbeddingBackend;
					public isExtensionVersionSupported(extensionVersion: java.lang.Integer): boolean;
				}
				export class EmbeddingCallbackImpl extends java.lang.Object implements androidx.window.embedding.EmbeddingInterfaceCompat.EmbeddingCallbackInterface {
					public static class: java.lang.Class<androidx.window.embedding.ExtensionEmbeddingBackend.EmbeddingCallbackImpl>;
					public onSplitInfoChanged(param0: java.util.List<androidx.window.embedding.SplitInfo>): void;
					public getLastInfo(): java.util.List<androidx.window.embedding.SplitInfo>;
					public setLastInfo(<set-?>: java.util.List<androidx.window.embedding.SplitInfo>): void;
					public constructor(this$0: androidx.window.embedding.ExtensionEmbeddingBackend);
					public onSplitInfoChanged(splitInfo: java.util.List<androidx.window.embedding.SplitInfo>): void;
				}
				export class SplitListenerWrapper extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.embedding.ExtensionEmbeddingBackend.SplitListenerWrapper>;
					public constructor(activity: android.app.Activity, executor: java.util.concurrent.Executor, callback: androidx.core.util.Consumer<java.util.List<androidx.window.embedding.SplitInfo>>);
					public accept(splitInfoList: java.util.List<androidx.window.embedding.SplitInfo>): void;
					public getCallback(): androidx.core.util.Consumer<java.util.List<androidx.window.embedding.SplitInfo>>;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class MatcherUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.embedding.MatcherUtils>;
				public static INSTANCE: androidx.window.embedding.MatcherUtils;
				public static sDebugMatchers: boolean;
				public static sMatchersTag: string;
				public areComponentsMatching$window_release(activityComponent: android.content.ComponentName, ruleComponent: android.content.ComponentName): boolean;
				public areActivityOrIntentComponentsMatching$window_release(activity: android.app.Activity, ruleComponent: android.content.ComponentName): boolean;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class SplitController extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.embedding.SplitController>;
				public static sDebug: boolean;
				public unregisterRule(rule: androidx.window.embedding.EmbeddingRule): void;
				public clearRegisteredRules(): void;
				public registerRule(rule: androidx.window.embedding.EmbeddingRule): void;
				public getSplitRules(): java.util.Set<androidx.window.embedding.EmbeddingRule>;
				public static getInstance(): androidx.window.embedding.SplitController;
				public removeSplitListener(consumer: androidx.core.util.Consumer<java.util.List<androidx.window.embedding.SplitInfo>>): void;
				public addSplitListener(activity: android.app.Activity, executor: java.util.concurrent.Executor, consumer: androidx.core.util.Consumer<java.util.List<androidx.window.embedding.SplitInfo>>): void;
				public isSplitSupported(): boolean;
				public static initialize(context: android.content.Context, staticRuleResourceId: number): void;
			}
			export module SplitController {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.embedding.SplitController.Companion>;
					public getInstance(): androidx.window.embedding.SplitController;
					public initialize(context: android.content.Context, staticRuleResourceId: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class SplitInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.embedding.SplitInfo>;
				public getSecondaryActivityStack(): androidx.window.embedding.ActivityStack;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public constructor(primaryActivityStack: androidx.window.embedding.ActivityStack, secondaryActivityStack: androidx.window.embedding.ActivityStack, splitRatio: number);
				public getPrimaryActivityStack(): androidx.window.embedding.ActivityStack;
				public hashCode(): number;
				public contains(activity: android.app.Activity): boolean;
				public getSplitRatio(): number;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class SplitPairFilter extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.embedding.SplitPairFilter>;
				public getPrimaryActivityName(): android.content.ComponentName;
				public matchesActivityIntentPair(primaryActivity: android.app.Activity, secondaryActivityIntent: android.content.Intent): boolean;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public getSecondaryActivityName(): android.content.ComponentName;
				public constructor(primaryActivityName: android.content.ComponentName, secondaryActivityName: android.content.ComponentName, secondaryActivityIntentAction: string);
				public getSecondaryActivityIntentAction(): string;
				public toString(): string;
				public matchesActivityPair(primaryActivity: android.app.Activity, secondaryActivity: android.app.Activity): boolean;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class SplitPairRule extends androidx.window.embedding.SplitRule {
				public static class: java.lang.Class<androidx.window.embedding.SplitPairRule>;
				public getFilters(): java.util.Set<androidx.window.embedding.SplitPairFilter>;
				public getClearTop(): boolean;
				public getFinishSecondaryWithPrimary(): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public constructor(filters: java.util.Set<androidx.window.embedding.SplitPairFilter>, finishPrimaryWithSecondary: boolean, finishSecondaryWithPrimary: boolean, clearTop: boolean, minWidth: number, minSmallestWidth: number, splitRatio: number, layoutDir: number);
				public getFinishPrimaryWithSecondary(): boolean;
				public constructor(minWidth: number, minSmallestWidth: number, splitRatio: number, layoutDirection: number);
				public plus$window_release(filter: androidx.window.embedding.SplitPairFilter): androidx.window.embedding.SplitPairRule;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class SplitPlaceholderRule extends androidx.window.embedding.SplitRule {
				public static class: java.lang.Class<androidx.window.embedding.SplitPlaceholderRule>;
				public getFilters(): java.util.Set<androidx.window.embedding.ActivityFilter>;
				public constructor(filters: java.util.Set<androidx.window.embedding.ActivityFilter>, placeholderIntent: android.content.Intent, minWidth: number, minSmallestWidth: number, splitRatio: number, layoutDirection: number);
				public equals(other: any): boolean;
				public hashCode(): number;
				public constructor(minWidth: number, minSmallestWidth: number, splitRatio: number, layoutDirection: number);
				public plus$window_release(filter: androidx.window.embedding.ActivityFilter): androidx.window.embedding.SplitPlaceholderRule;
				public getPlaceholderIntent(): android.content.Intent;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class SplitRule extends androidx.window.embedding.EmbeddingRule {
				public static class: java.lang.Class<androidx.window.embedding.SplitRule>;
				public getLayoutDirection(): number;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public getMinSmallestWidth(): number;
				public getMinWidth(): number;
				public checkParentMetrics(parentMetrics: android.view.WindowMetrics): boolean;
				public hashCode(): number;
				public constructor(minWidth: number, minSmallestWidth: number, splitRatio: number, layoutDirection: number);
				public getSplitRatio(): number;
				public constructor();
			}
			export module SplitRule {
				export class Api30Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.embedding.SplitRule.Api30Impl>;
					public static INSTANCE: androidx.window.embedding.SplitRule.Api30Impl;
					public getBounds(windowMetrics: android.view.WindowMetrics): android.graphics.Rect;
				}
				export class LayoutDir extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.window.embedding.SplitRule.LayoutDir>;
					/**
					 * Constructs a new instance of the androidx.window.embedding.SplitRule$LayoutDir interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module embedding {
			export class SplitRuleParser extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.embedding.SplitRuleParser>;
				public parseSplitRules$window_release(context: android.content.Context, staticRuleResourceId: number): java.util.Set<androidx.window.embedding.EmbeddingRule>;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class ActivityCompatHelperApi24 extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.ActivityCompatHelperApi24>;
				public static INSTANCE: androidx.window.layout.ActivityCompatHelperApi24;
				public isInMultiWindowMode(activity: android.app.Activity): boolean;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class ActivityCompatHelperApi30 extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.ActivityCompatHelperApi30>;
				public static INSTANCE: androidx.window.layout.ActivityCompatHelperApi30;
				public maximumWindowBounds(activity: android.app.Activity): android.graphics.Rect;
				public currentWindowBounds(activity: android.app.Activity): android.graphics.Rect;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class DisplayCompatHelperApi17 extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.DisplayCompatHelperApi17>;
				public static INSTANCE: androidx.window.layout.DisplayCompatHelperApi17;
				public getRealSize(display: android.view.Display, point: android.graphics.Point): void;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class DisplayCompatHelperApi28 extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.DisplayCompatHelperApi28>;
				public static INSTANCE: androidx.window.layout.DisplayCompatHelperApi28;
				public safeInsetLeft(displayCutout: android.view.DisplayCutout): number;
				public safeInsetRight(displayCutout: android.view.DisplayCutout): number;
				public safeInsetBottom(displayCutout: android.view.DisplayCutout): number;
				public safeInsetTop(displayCutout: android.view.DisplayCutout): number;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class DisplayFeature extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.DisplayFeature>;
				/**
				 * Constructs a new instance of the androidx.window.layout.DisplayFeature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getBounds(): android.graphics.Rect;
				});
				public constructor();
				public getBounds(): android.graphics.Rect;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class EmptyDecorator extends java.lang.Object implements androidx.window.layout.WindowInfoTrackerDecorator {
				public static class: java.lang.Class<androidx.window.layout.EmptyDecorator>;
				public static INSTANCE: androidx.window.layout.EmptyDecorator;
				public decorate(tracker: androidx.window.layout.WindowInfoTracker): androidx.window.layout.WindowInfoTracker;
				public decorate(param0: androidx.window.layout.WindowInfoTracker): androidx.window.layout.WindowInfoTracker;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class ExtensionInterfaceCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.ExtensionInterfaceCompat>;
				/**
				 * Constructs a new instance of the androidx.window.layout.ExtensionInterfaceCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					validateExtensionInterface(): boolean;
					setExtensionCallback(param0: androidx.window.layout.ExtensionInterfaceCompat.ExtensionCallbackInterface): void;
					onWindowLayoutChangeListenerAdded(param0: android.app.Activity): void;
					onWindowLayoutChangeListenerRemoved(param0: android.app.Activity): void;
				});
				public constructor();
				public setExtensionCallback(param0: androidx.window.layout.ExtensionInterfaceCompat.ExtensionCallbackInterface): void;
				public validateExtensionInterface(): boolean;
				public onWindowLayoutChangeListenerAdded(param0: android.app.Activity): void;
				public onWindowLayoutChangeListenerRemoved(param0: android.app.Activity): void;
			}
			export module ExtensionInterfaceCompat {
				export class ExtensionCallbackInterface extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.ExtensionInterfaceCompat.ExtensionCallbackInterface>;
					/**
					 * Constructs a new instance of the androidx.window.layout.ExtensionInterfaceCompat$ExtensionCallbackInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWindowLayoutChanged(param0: android.app.Activity, param1: androidx.window.layout.WindowLayoutInfo): void;
					});
					public constructor();
					public onWindowLayoutChanged(param0: android.app.Activity, param1: androidx.window.layout.WindowLayoutInfo): void;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class ExtensionWindowLayoutInfoBackend extends java.lang.Object implements androidx.window.layout.WindowBackend {
				public static class: java.lang.Class<androidx.window.layout.ExtensionWindowLayoutInfoBackend>;
				public unregisterLayoutChangeCallback(callback: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
				public registerLayoutChangeCallback(activity: android.app.Activity, executor: java.util.concurrent.Executor, callback: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
				public registerLayoutChangeCallback(param0: android.app.Activity, param1: java.util.concurrent.Executor, param2: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
				public constructor(component: androidx.window.extensions.layout.WindowLayoutComponent);
				public unregisterLayoutChangeCallback(param0: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
			}
			export module ExtensionWindowLayoutInfoBackend {
				export class MulticastConsumer extends java.lang.Object /* any*/ {
					public static class: java.lang.Class<androidx.window.layout.ExtensionWindowLayoutInfoBackend.MulticastConsumer>;
					public accept(value: androidx.window.extensions.layout.WindowLayoutInfo): void;
					public isEmpty(): boolean;
					public removeListener(listener: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
					public addListener(listener: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
					public constructor(activity: android.app.Activity);
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class ExtensionsWindowLayoutInfoAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.ExtensionsWindowLayoutInfoAdapter>;
				public static INSTANCE: androidx.window.layout.ExtensionsWindowLayoutInfoAdapter;
				public translate$window_release(activity: android.app.Activity, oemFeature: androidx.window.extensions.layout.FoldingFeature): androidx.window.layout.FoldingFeature;
				public translate$window_release(activity: android.app.Activity, info: androidx.window.extensions.layout.WindowLayoutInfo): androidx.window.layout.WindowLayoutInfo;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class FoldingFeature extends java.lang.Object implements androidx.window.layout.DisplayFeature {
				public static class: java.lang.Class<androidx.window.layout.FoldingFeature>;
				/**
				 * Constructs a new instance of the androidx.window.layout.FoldingFeature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isSeparating(): boolean;
					getOcclusionType(): androidx.window.layout.FoldingFeature.OcclusionType;
					getOrientation(): androidx.window.layout.FoldingFeature.Orientation;
					getState(): androidx.window.layout.FoldingFeature.State;
					getBounds(): android.graphics.Rect;
				});
				public constructor();
				public getBounds(): android.graphics.Rect;
				public isSeparating(): boolean;
				public getState(): androidx.window.layout.FoldingFeature.State;
				public getOrientation(): androidx.window.layout.FoldingFeature.Orientation;
				public getOcclusionType(): androidx.window.layout.FoldingFeature.OcclusionType;
			}
			export module FoldingFeature {
				export class OcclusionType extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.FoldingFeature.OcclusionType>;
					public static NONE: androidx.window.layout.FoldingFeature.OcclusionType;
					public static FULL: androidx.window.layout.FoldingFeature.OcclusionType;
					public toString(): string;
				}
				export module OcclusionType {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<androidx.window.layout.FoldingFeature.OcclusionType.Companion>;
					}
				}
				export class Orientation extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.FoldingFeature.Orientation>;
					public static VERTICAL: androidx.window.layout.FoldingFeature.Orientation;
					public static HORIZONTAL: androidx.window.layout.FoldingFeature.Orientation;
					public toString(): string;
				}
				export module Orientation {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<androidx.window.layout.FoldingFeature.Orientation.Companion>;
					}
				}
				export class State extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.FoldingFeature.State>;
					public static FLAT: androidx.window.layout.FoldingFeature.State;
					public static HALF_OPENED: androidx.window.layout.FoldingFeature.State;
					public toString(): string;
				}
				export module State {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<androidx.window.layout.FoldingFeature.State.Companion>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class HardwareFoldingFeature extends java.lang.Object implements androidx.window.layout.FoldingFeature {
				public static class: java.lang.Class<androidx.window.layout.HardwareFoldingFeature>;
				public getBounds(): android.graphics.Rect;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public constructor(featureBounds: androidx.window.core.Bounds, type: androidx.window.layout.HardwareFoldingFeature.Type, state: androidx.window.layout.FoldingFeature.State);
				public isSeparating(): boolean;
				public getType$window_release(): androidx.window.layout.HardwareFoldingFeature.Type;
				public getState(): androidx.window.layout.FoldingFeature.State;
				public toString(): string;
				public getOrientation(): androidx.window.layout.FoldingFeature.Orientation;
				public getOcclusionType(): androidx.window.layout.FoldingFeature.OcclusionType;
			}
			export module HardwareFoldingFeature {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.HardwareFoldingFeature.Companion>;
					public validateFeatureBounds$window_release(bounds: androidx.window.core.Bounds): void;
				}
				export class Type extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.HardwareFoldingFeature.Type>;
					public toString(): string;
				}
				export module Type {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<androidx.window.layout.HardwareFoldingFeature.Type.Companion>;
						public getHINGE(): androidx.window.layout.HardwareFoldingFeature.Type;
						public getFOLD(): androidx.window.layout.HardwareFoldingFeature.Type;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class SafeWindowLayoutComponentProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.SafeWindowLayoutComponentProvider>;
				public static INSTANCE: androidx.window.layout.SafeWindowLayoutComponentProvider;
				public getWindowLayoutComponent(): androidx.window.extensions.layout.WindowLayoutComponent;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class SidecarAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.SidecarAdapter>;
				public translate(extensionInfo: androidx.window.sidecar.SidecarWindowLayoutInfo, state: androidx.window.sidecar.SidecarDeviceState): androidx.window.layout.WindowLayoutInfo;
				public constructor(verificationMode: androidx.window.core.SpecificationComputer.VerificationMode);
				public isEqualSidecarWindowLayoutInfo(first: androidx.window.sidecar.SidecarWindowLayoutInfo, second: androidx.window.sidecar.SidecarWindowLayoutInfo): boolean;
				public translate(sidecarDisplayFeatures: java.util.List<androidx.window.sidecar.SidecarDisplayFeature>, deviceState: androidx.window.sidecar.SidecarDeviceState): java.util.List<androidx.window.layout.DisplayFeature>;
				public translate$window_release(feature: androidx.window.sidecar.SidecarDisplayFeature, deviceState: androidx.window.sidecar.SidecarDeviceState): androidx.window.layout.DisplayFeature;
				public isEqualSidecarDeviceState(first: androidx.window.sidecar.SidecarDeviceState, second: androidx.window.sidecar.SidecarDeviceState): boolean;
				public constructor();
			}
			export module SidecarAdapter {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.SidecarAdapter.Companion>;
					public setSidecarDevicePosture(sidecarDeviceState: androidx.window.sidecar.SidecarDeviceState, posture: number): void;
					public setSidecarDisplayFeatures(info: androidx.window.sidecar.SidecarWindowLayoutInfo, displayFeatures: java.util.List<androidx.window.sidecar.SidecarDisplayFeature>): void;
					public getSidecarDisplayFeatures(info: androidx.window.sidecar.SidecarWindowLayoutInfo): java.util.List<androidx.window.sidecar.SidecarDisplayFeature>;
					public getRawSidecarDevicePosture(sidecarDeviceState: androidx.window.sidecar.SidecarDeviceState): number;
					public getSidecarDevicePosture$window_release(sidecarDeviceState: androidx.window.sidecar.SidecarDeviceState): number;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class SidecarCompat extends java.lang.Object implements androidx.window.layout.ExtensionInterfaceCompat {
				public static class: java.lang.Class<androidx.window.layout.SidecarCompat>;
				public setExtensionCallback(param0: androidx.window.layout.ExtensionInterfaceCompat.ExtensionCallbackInterface): void;
				public validateExtensionInterface(): boolean;
				public constructor(sidecar: androidx.window.sidecar.SidecarInterface, sidecarAdapter: androidx.window.layout.SidecarAdapter);
				public onWindowLayoutChangeListenerAdded(param0: android.app.Activity): void;
				public constructor(context: android.content.Context);
				public onWindowLayoutChangeListenerAdded(activity: android.app.Activity): void;
				public getSidecar(): androidx.window.sidecar.SidecarInterface;
				public setExtensionCallback(extensionCallback: androidx.window.layout.ExtensionInterfaceCompat.ExtensionCallbackInterface): void;
				public getWindowLayoutInfo(activity: android.app.Activity): androidx.window.layout.WindowLayoutInfo;
				public onWindowLayoutChangeListenerRemoved(param0: android.app.Activity): void;
				public register(windowToken: android.os.IBinder, activity: android.app.Activity): void;
				public onWindowLayoutChangeListenerRemoved(activity: android.app.Activity): void;
			}
			export module SidecarCompat {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.SidecarCompat.Companion>;
					public getSidecarCompat$window_release(context: android.content.Context): androidx.window.sidecar.SidecarInterface;
					public getActivityWindowToken$window_release(activity: android.app.Activity): android.os.IBinder;
					public getSidecarVersion(): androidx.window.core.Version;
				}
				export class DistinctElementCallback extends java.lang.Object implements androidx.window.layout.ExtensionInterfaceCompat.ExtensionCallbackInterface {
					public static class: java.lang.Class<androidx.window.layout.SidecarCompat.DistinctElementCallback>;
					public onWindowLayoutChanged(activity: android.app.Activity, newLayout: androidx.window.layout.WindowLayoutInfo): void;
					public constructor(callbackInterface: androidx.window.layout.ExtensionInterfaceCompat.ExtensionCallbackInterface);
					public onWindowLayoutChanged(param0: android.app.Activity, param1: androidx.window.layout.WindowLayoutInfo): void;
				}
				export class DistinctSidecarElementCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.SidecarCompat.DistinctSidecarElementCallback>;
					public onWindowLayoutChanged(token: android.os.IBinder, newLayout: androidx.window.sidecar.SidecarWindowLayoutInfo): void;
					public onDeviceStateChanged(newDeviceState: androidx.window.sidecar.SidecarDeviceState): void;
					public constructor(sidecarAdapter: androidx.window.layout.SidecarAdapter, callbackInterface: androidx.window.sidecar.SidecarInterface.SidecarCallback);
				}
				export class FirstAttachAdapter extends java.lang.Object implements android.view.View.OnAttachStateChangeListener {
					public static class: java.lang.Class<androidx.window.layout.SidecarCompat.FirstAttachAdapter>;
					public constructor(sidecarCompat: androidx.window.layout.SidecarCompat, activity: android.app.Activity);
					public onViewDetachedFromWindow(view: android.view.View): void;
					public onViewDetachedFromWindow(param0: android.view.View): void;
					public onViewAttachedToWindow(view: android.view.View): void;
					public onViewAttachedToWindow(param0: android.view.View): void;
				}
				export class TranslatingCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.SidecarCompat.TranslatingCallback>;
					public onWindowLayoutChanged(windowToken: android.os.IBinder, newLayout: androidx.window.sidecar.SidecarWindowLayoutInfo): void;
					public constructor(this$0: androidx.window.layout.SidecarCompat);
					public onDeviceStateChanged(newDeviceState: androidx.window.sidecar.SidecarDeviceState): void;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class SidecarWindowBackend extends java.lang.Object implements androidx.window.layout.WindowBackend {
				public static class: java.lang.Class<androidx.window.layout.SidecarWindowBackend>;
				public static DEBUG: boolean;
				public setWindowExtension(<set-?>: androidx.window.layout.ExtensionInterfaceCompat): void;
				public unregisterLayoutChangeCallback(callback: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
				public constructor(windowExtension: androidx.window.layout.ExtensionInterfaceCompat);
				public getWindowExtension(): androidx.window.layout.ExtensionInterfaceCompat;
				public registerLayoutChangeCallback(activity: android.app.Activity, executor: java.util.concurrent.Executor, callback: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
				public getWindowLayoutChangeCallbacks(): java.util.concurrent.CopyOnWriteArrayList<androidx.window.layout.SidecarWindowBackend.WindowLayoutChangeCallbackWrapper>;
				public registerLayoutChangeCallback(param0: android.app.Activity, param1: java.util.concurrent.Executor, param2: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
				public unregisterLayoutChangeCallback(param0: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
			}
			export module SidecarWindowBackend {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.SidecarWindowBackend.Companion>;
					public resetInstance(): void;
					public isSidecarVersionSupported(sidecarVersion: androidx.window.core.Version): boolean;
					public initAndVerifyExtension(context: android.content.Context): androidx.window.layout.ExtensionInterfaceCompat;
					public getInstance(context: android.content.Context): androidx.window.layout.SidecarWindowBackend;
				}
				export class ExtensionListenerImpl extends java.lang.Object implements androidx.window.layout.ExtensionInterfaceCompat.ExtensionCallbackInterface {
					public static class: java.lang.Class<androidx.window.layout.SidecarWindowBackend.ExtensionListenerImpl>;
					public onWindowLayoutChanged(activity: android.app.Activity, newLayout: androidx.window.layout.WindowLayoutInfo): void;
					public constructor(this$0: androidx.window.layout.SidecarWindowBackend);
					public onWindowLayoutChanged(param0: android.app.Activity, param1: androidx.window.layout.WindowLayoutInfo): void;
				}
				export class WindowLayoutChangeCallbackWrapper extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.SidecarWindowBackend.WindowLayoutChangeCallbackWrapper>;
					public setLastInfo(<set-?>: androidx.window.layout.WindowLayoutInfo): void;
					public getLastInfo(): androidx.window.layout.WindowLayoutInfo;
					public getActivity(): android.app.Activity;
					public getCallback(): androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>;
					public accept(newLayoutInfo: androidx.window.layout.WindowLayoutInfo): void;
					public constructor(activity: android.app.Activity, executor: java.util.concurrent.Executor, callback: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>);
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class WindowBackend extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.WindowBackend>;
				/**
				 * Constructs a new instance of the androidx.window.layout.WindowBackend interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					registerLayoutChangeCallback(param0: android.app.Activity, param1: java.util.concurrent.Executor, param2: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
					unregisterLayoutChangeCallback(param0: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
				});
				public constructor();
				public registerLayoutChangeCallback(param0: android.app.Activity, param1: java.util.concurrent.Executor, param2: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
				public unregisterLayoutChangeCallback(param0: androidx.core.util.Consumer<androidx.window.layout.WindowLayoutInfo>): void;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class WindowInfoTracker extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.WindowInfoTracker>;
				/**
				 * Constructs a new instance of the androidx.window.layout.WindowInfoTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					windowLayoutInfo(param0: android.app.Activity): kotlinx.coroutines.flow.Flow<androidx.window.layout.WindowLayoutInfo>;
					getOrCreate(context: android.content.Context): androidx.window.layout.WindowInfoTracker;
					overrideDecorator(overridingDecorator: androidx.window.layout.WindowInfoTrackerDecorator): void;
					reset(): void;
					"<clinit>"(): void;
				});
				public constructor();
				public windowLayoutInfo(param0: android.app.Activity): kotlinx.coroutines.flow.Flow<androidx.window.layout.WindowLayoutInfo>;
				public static getOrCreate(context: android.content.Context): androidx.window.layout.WindowInfoTracker;
				public static overrideDecorator(overridingDecorator: androidx.window.layout.WindowInfoTrackerDecorator): void;
				public static reset(): void;
			}
			export module WindowInfoTracker {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.WindowInfoTracker.Companion>;
					public overrideDecorator(overridingDecorator: androidx.window.layout.WindowInfoTrackerDecorator): void;
					public reset(): void;
					public getOrCreate(context: android.content.Context): androidx.window.layout.WindowInfoTracker;
					public windowBackend$window_release(context: android.content.Context): androidx.window.layout.WindowBackend;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class WindowInfoTrackerDecorator extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.WindowInfoTrackerDecorator>;
				/**
				 * Constructs a new instance of the androidx.window.layout.WindowInfoTrackerDecorator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					decorate(param0: androidx.window.layout.WindowInfoTracker): androidx.window.layout.WindowInfoTracker;
				});
				public constructor();
				public decorate(param0: androidx.window.layout.WindowInfoTracker): androidx.window.layout.WindowInfoTracker;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class WindowInfoTrackerImpl extends java.lang.Object implements androidx.window.layout.WindowInfoTracker {
				public static class: java.lang.Class<androidx.window.layout.WindowInfoTrackerImpl>;
				public windowLayoutInfo(param0: android.app.Activity): kotlinx.coroutines.flow.Flow<androidx.window.layout.WindowLayoutInfo>;
				public constructor(windowMetricsCalculator: androidx.window.layout.WindowMetricsCalculator, windowBackend: androidx.window.layout.WindowBackend);
				public static getOrCreate(context: android.content.Context): androidx.window.layout.WindowInfoTracker;
				public windowLayoutInfo(activity: android.app.Activity): kotlinx.coroutines.flow.Flow<androidx.window.layout.WindowLayoutInfo>;
				public static overrideDecorator(overridingDecorator: androidx.window.layout.WindowInfoTrackerDecorator): void;
				public static reset(): void;
			}
			export module WindowInfoTrackerImpl {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.WindowInfoTrackerImpl.Companion>;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class WindowLayoutInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.WindowLayoutInfo>;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public getDisplayFeatures(): java.util.List<androidx.window.layout.DisplayFeature>;
				public toString(): string;
				public constructor(displayFeatures: java.util.List<any>);
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class WindowMetrics extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.WindowMetrics>;
				public getBounds(): android.graphics.Rect;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public constructor(bounds: android.graphics.Rect);
				public hashCode(): number;
				public toString(): string;
				public constructor(_bounds: androidx.window.core.Bounds);
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class WindowMetricsCalculator extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.WindowMetricsCalculator>;
				/**
				 * Constructs a new instance of the androidx.window.layout.WindowMetricsCalculator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					computeCurrentWindowMetrics(param0: android.app.Activity): androidx.window.layout.WindowMetrics;
					computeMaximumWindowMetrics(param0: android.app.Activity): androidx.window.layout.WindowMetrics;
					getOrCreate(): androidx.window.layout.WindowMetricsCalculator;
					overrideDecorator(overridingDecorator: androidx.window.layout.WindowMetricsCalculatorDecorator): void;
					reset(): void;
					"<clinit>"(): void;
				});
				public constructor();
				public computeMaximumWindowMetrics(param0: android.app.Activity): androidx.window.layout.WindowMetrics;
				public static overrideDecorator(overridingDecorator: androidx.window.layout.WindowMetricsCalculatorDecorator): void;
				public static reset(): void;
				public computeCurrentWindowMetrics(param0: android.app.Activity): androidx.window.layout.WindowMetrics;
				public static getOrCreate(): androidx.window.layout.WindowMetricsCalculator;
			}
			export module WindowMetricsCalculator {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.window.layout.WindowMetricsCalculator.Companion>;
					public reset(): void;
					public overrideDecorator(overridingDecorator: androidx.window.layout.WindowMetricsCalculatorDecorator): void;
					public getOrCreate(): androidx.window.layout.WindowMetricsCalculator;
				}
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class WindowMetricsCalculatorCompat extends java.lang.Object implements androidx.window.layout.WindowMetricsCalculator {
				public static class: java.lang.Class<androidx.window.layout.WindowMetricsCalculatorCompat>;
				public static INSTANCE: androidx.window.layout.WindowMetricsCalculatorCompat;
				public computeMaximumWindowMetrics(activity: android.app.Activity): androidx.window.layout.WindowMetrics;
				public computeWindowBoundsQ$window_release(activity: android.app.Activity): android.graphics.Rect;
				public computeWindowBoundsIceCreamSandwich$window_release(activity: android.app.Activity): android.graphics.Rect;
				public computeMaximumWindowMetrics(param0: android.app.Activity): androidx.window.layout.WindowMetrics;
				public static overrideDecorator(overridingDecorator: androidx.window.layout.WindowMetricsCalculatorDecorator): void;
				public computeWindowBoundsP$window_release(activity: android.app.Activity): android.graphics.Rect;
				public static reset(): void;
				public computeCurrentWindowMetrics(activity: android.app.Activity): androidx.window.layout.WindowMetrics;
				public computeWindowBoundsN$window_release(activity: android.app.Activity): android.graphics.Rect;
				public getRealSizeForDisplay$window_release(display: android.view.Display): android.graphics.Point;
				public computeCurrentWindowMetrics(param0: android.app.Activity): androidx.window.layout.WindowMetrics;
				public static getOrCreate(): androidx.window.layout.WindowMetricsCalculator;
			}
		}
	}
}

declare module androidx {
	export module window {
		export module layout {
			export class WindowMetricsCalculatorDecorator extends java.lang.Object {
				public static class: java.lang.Class<androidx.window.layout.WindowMetricsCalculatorDecorator>;
				/**
				 * Constructs a new instance of the androidx.window.layout.WindowMetricsCalculatorDecorator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					decorate(param0: androidx.window.layout.WindowMetricsCalculator): androidx.window.layout.WindowMetricsCalculator;
				});
				public constructor();
				public decorate(param0: androidx.window.layout.WindowMetricsCalculator): androidx.window.layout.WindowMetricsCalculator;
			}
		}
	}
}

//Generics information:
//androidx.window.core.FailedSpecification:1
//androidx.window.core.SpecificationComputer:1
//androidx.window.core.ValidSpecification:1

