declare module com {
	export module flurry {
		export module android {
			export abstract class Consent extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.android.Consent>;
				public static GPP_STRING_KEY: string;
				public static GPP_SID_KEY: string;
				public consentStrings: java.util.Map<string,string>;
				public idsToString(param0: java.util.Set<java.lang.Integer>): string;
				public getGppSectionIds(): java.util.Set<java.lang.Integer>;
				public isGdprScope(): boolean;
				public equals(obj: any): boolean;
				public getGppString(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getConsentStrings(): java.util.Map<string,string>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class Constants extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.android.Constants>;
				/**
				 * Constructs a new instance of the com.flurry.android.Constants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static UNKNOWN: number;
				public static MALE: number;
				public static FEMALE: number;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class FlurryAgent extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.android.FlurryAgent>;
				public static VERSION_STRING: string;
				public static setAge(param0: number): void;
				public static isSessionActive(): boolean;
				public static logEvent(param0: string, param1: java.util.Map<string,string>, param2: string): com.flurry.android.FlurryEventRecordStatus;
				public static setSslPinningEnabled(param0: boolean): void;
				public static addSessionProperty(param0: string, param1: string): void;
				public static onError(param0: string, param1: string, param2: string, param3: java.util.Map<string,string>): void;
				public static setVersionName(param0: string): void;
				public static logEvent(param0: string, param1: java.util.Map<string,string>): com.flurry.android.FlurryEventRecordStatus;
				public static addOrigin(param0: string, param1: string): void;
				public static logEvent(param0: string, param1: boolean): com.flurry.android.FlurryEventRecordStatus;
				public static setInstantAppName(param0: string): void;
				public static setLogEnabled(param0: boolean): void;
				public static onError(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
				public static logPayment(param0: string, param1: string, param2: number, param3: number, param4: string, param5: string, param6: java.util.Map<string,string>): com.flurry.android.FlurryEventRecordStatus;
				public static updateFlurryConsent(param0: com.flurry.android.Consent): boolean;
				public static logEvent(param0: com.flurry.android.FlurryEvent, param1: com.flurry.android.FlurryEvent.Params): com.flurry.android.FlurryEventRecordStatus;
				public static onEndSession(param0: android.content.Context): void;
				public static getInstantAppName(): string;
				public static getReleaseVersion(): string;
				public static setContinueSessionMillis(param0: number): void;
				public static setGender(param0: number): void;
				public static isInitialized(): boolean;
				public static setGppConsent(param0: string, param1: java.util.Set<java.lang.Integer>): boolean;
				public static deleteData(): void;
				public static setReportLocation(param0: boolean): void;
				public static onError(param0: string, param1: string, param2: string): void;
				public static onStartSession(param0: android.content.Context): void;
				public static setLogLevel(param0: number): void;
				public static getAddOnModules(): java.util.List<com.flurry.android.FlurryModule>;
				public static getFlurryConsent(): com.flurry.android.Consent;
				public static setIncludeBackgroundSessionsInMetrics(param0: boolean): void;
				public static registerListener(param0: com.flurry.android.FlurryAgentListener): void;
				public static logEvent(param0: string): com.flurry.android.FlurryEventRecordStatus;
				public static logEvent(param0: string, param1: java.util.Map<string,string>, param2: boolean): com.flurry.android.FlurryEventRecordStatus;
				public static onError(param0: string, param1: string, param2: java.lang.Throwable): void;
				public static setDataSaleOptOut(param0: boolean): void;
				public static logBreadcrumb(param0: string): void;
				public static endTimedEvent(param0: string, param1: java.util.Map<string,string>): void;
				public static setCaptureUncaughtExceptions(param0: boolean): void;
				public static endTimedEvent(param0: string): void;
				public static endTimedEvent(param0: string, param1: java.util.Map<string,string>, param2: string): void;
				public static addOrigin(param0: string, param1: string, param2: java.util.Map<string,string>): void;
				public static getAgentVersion(): number;
				public static logEvent(param0: string, param1: string): com.flurry.android.FlurryEventRecordStatus;
				public static endTimedEvent(param0: string, param1: string): void;
				public static getSessionId(): string;
				public static unregisterListener(param0: com.flurry.android.FlurryAgentListener): void;
				public static openPrivacyDashboard(param0: com.flurry.android.FlurryPrivacySession.Request): void;
				public static setUserId(param0: string): void;
				public static setSessionOrigin(param0: string, param1: string): void;
				public static logPayment(param0: number, param1: java.util.List<any>, param2: java.util.Map<string,string>): com.flurry.android.FlurryEventRecordStatus;
			}
			export module FlurryAgent {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.android.FlurryAgent.Builder>;
					public withConsent(param0: com.flurry.android.Consent): com.flurry.android.FlurryAgent.Builder;
					public withIncludeBackgroundSessionsInMetrics(param0: boolean): com.flurry.android.FlurryAgent.Builder;
					public withGppConsent(param0: string, param1: java.util.Set<java.lang.Integer>): com.flurry.android.FlurryAgent.Builder;
					public withPerformanceMetrics(param0: number): com.flurry.android.FlurryAgent.Builder;
					public withSslPinningEnabled(param0: boolean): com.flurry.android.FlurryAgent.Builder;
					public withCaptureUncaughtExceptions(param0: boolean): com.flurry.android.FlurryAgent.Builder;
					public withReportLocation(param0: boolean): com.flurry.android.FlurryAgent.Builder;
					public withPulseEnabled(param0: boolean): com.flurry.android.FlurryAgent.Builder;
					public withLogEnabled(param0: boolean): com.flurry.android.FlurryAgent.Builder;
					public withSessionForceStart(param0: boolean): com.flurry.android.FlurryAgent.Builder;
					public constructor();
					public withListener(param0: com.flurry.android.FlurryAgentListener): com.flurry.android.FlurryAgent.Builder;
					public withModule(param0: com.flurry.android.FlurryModule): com.flurry.android.FlurryAgent.Builder;
					public withLogLevel(param0: number): com.flurry.android.FlurryAgent.Builder;
					public withContinueSessionMillis(param0: number): com.flurry.android.FlurryAgent.Builder;
					public withDataSaleOptOut(param0: boolean): com.flurry.android.FlurryAgent.Builder;
					public build(param0: android.content.Context, param1: string): void;
				}
				export class UserProperties extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.android.FlurryAgent.UserProperties>;
					public static PROPERTY_CURRENCY_PREFERENCE: string;
					public static PROPERTY_PURCHASER: string;
					public static PROPERTY_REGISTERED_USER: string;
					public static PROPERTY_SUBSCRIBER: string;
					public static add(param0: string, param1: string): void;
					public constructor();
					public static set(param0: string, param1: java.util.List<string>): void;
					public static remove(param0: string): void;
					public static flag(param0: string): void;
					public static add(param0: string, param1: java.util.List<string>): void;
					public static set(param0: string, param1: string): void;
					public static remove(param0: string, param1: string): void;
					public static remove(param0: string, param1: java.util.List<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class FlurryAgentListener extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.android.FlurryAgentListener>;
				/**
				 * Constructs a new instance of the com.flurry.android.FlurryAgentListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSessionStarted(): void;
				});
				public constructor();
				public onSessionStarted(): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class FlurryConfig extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.android.FlurryConfig>;
				public registerListener(param0: com.flurry.android.FlurryConfigListener): void;
				public registerListener(param0: com.flurry.android.FlurryConfigListener, param1: android.os.Handler): void;
				public getBoolean(param0: string, param1: boolean): boolean;
				public getInt(param0: string, param1: number): number;
				public toString(): string;
				public unregisterListener(param0: com.flurry.android.FlurryConfigListener): void;
				public static getInstance(): com.flurry.android.FlurryConfig;
				public getFloat(param0: string, param1: number): number;
				public getString(param0: string, param1: string): string;
				public getLong(param0: string, param1: number): number;
				public getDouble(param0: string, param1: number): number;
				public fetchConfig(): void;
				public resetState(): void;
				public activateConfig(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class FlurryConfigListener extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.android.FlurryConfigListener>;
				/**
				 * Constructs a new instance of the com.flurry.android.FlurryConfigListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFetchSuccess(): void;
					onFetchNoChange(): void;
					onFetchError(param0: boolean): void;
					onActivateComplete(param0: boolean): void;
				});
				public constructor();
				public onFetchNoChange(): void;
				public onFetchError(param0: boolean): void;
				public onActivateComplete(param0: boolean): void;
				public onFetchSuccess(): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class FlurryConsent extends com.flurry.android.Consent {
				public static class: java.lang.Class<com.flurry.android.FlurryConsent>;
				public constructor(param0: boolean, param1: java.util.Map<string,string>);
				public constructor(param0: string, param1: java.util.Set<java.lang.Integer>);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class FlurryEvent {
				public static class: java.lang.Class<com.flurry.android.FlurryEvent>;
				public static AD_CLICK: com.flurry.android.FlurryEvent;
				public static AD_IMPRESSION: com.flurry.android.FlurryEvent;
				public static AD_REWARDED: com.flurry.android.FlurryEvent;
				public static AD_SKIPPED: com.flurry.android.FlurryEvent;
				public static CREDITS_SPENT: com.flurry.android.FlurryEvent;
				public static CREDITS_PURCHASED: com.flurry.android.FlurryEvent;
				public static CREDITS_EARNED: com.flurry.android.FlurryEvent;
				public static ACHIEVEMENT_UNLOCKED: com.flurry.android.FlurryEvent;
				public static LEVEL_COMPLETED: com.flurry.android.FlurryEvent;
				public static LEVEL_FAILED: com.flurry.android.FlurryEvent;
				public static LEVEL_UP: com.flurry.android.FlurryEvent;
				public static LEVEL_STARTED: com.flurry.android.FlurryEvent;
				public static LEVEL_SKIP: com.flurry.android.FlurryEvent;
				public static SCORE_POSTED: com.flurry.android.FlurryEvent;
				public static CONTENT_RATED: com.flurry.android.FlurryEvent;
				public static CONTENT_VIEWED: com.flurry.android.FlurryEvent;
				public static CONTENT_SAVED: com.flurry.android.FlurryEvent;
				public static PRODUCT_CUSTOMIZED: com.flurry.android.FlurryEvent;
				public static APP_ACTIVATED: com.flurry.android.FlurryEvent;
				public static APPLICATION_SUBMITTED: com.flurry.android.FlurryEvent;
				public static ADD_ITEM_TO_CART: com.flurry.android.FlurryEvent;
				public static ADD_ITEM_TO_WISH_LIST: com.flurry.android.FlurryEvent;
				public static COMPLETED_CHECKOUT: com.flurry.android.FlurryEvent;
				public static PAYMENT_INFO_ADDED: com.flurry.android.FlurryEvent;
				public static ITEM_VIEWED: com.flurry.android.FlurryEvent;
				public static ITEM_LIST_VIEWED: com.flurry.android.FlurryEvent;
				public static PURCHASED: com.flurry.android.FlurryEvent;
				public static PURCHASE_REFUNDED: com.flurry.android.FlurryEvent;
				public static REMOVE_ITEM_FROM_CART: com.flurry.android.FlurryEvent;
				public static CHECKOUT_INITIATED: com.flurry.android.FlurryEvent;
				public static FUNDS_DONATED: com.flurry.android.FlurryEvent;
				public static USER_SCHEDULED: com.flurry.android.FlurryEvent;
				public static OFFER_PRESENTED: com.flurry.android.FlurryEvent;
				public static SUBSCRIPTION_STARTED: com.flurry.android.FlurryEvent;
				public static SUBSCRIPTION_ENDED: com.flurry.android.FlurryEvent;
				public static GROUP_JOINED: com.flurry.android.FlurryEvent;
				public static GROUP_LEFT: com.flurry.android.FlurryEvent;
				public static TUTORIAL_STARTED: com.flurry.android.FlurryEvent;
				public static TUTORIAL_COMPLETED: com.flurry.android.FlurryEvent;
				public static TUTORIAL_STEP_COMPLETED: com.flurry.android.FlurryEvent;
				public static TUTORIAL_SKIPPED: com.flurry.android.FlurryEvent;
				public static LOGIN: com.flurry.android.FlurryEvent;
				public static LOGOUT: com.flurry.android.FlurryEvent;
				public static USER_REGISTERED: com.flurry.android.FlurryEvent;
				public static SEARCH_RESULT_VIEWED: com.flurry.android.FlurryEvent;
				public static KEYWORD_SEARCHED: com.flurry.android.FlurryEvent;
				public static LOCATION_SEARCHED: com.flurry.android.FlurryEvent;
				public static INVITE: com.flurry.android.FlurryEvent;
				public static SHARE: com.flurry.android.FlurryEvent;
				public static LIKE: com.flurry.android.FlurryEvent;
				public static COMMENT: com.flurry.android.FlurryEvent;
				public static MEDIA_CAPTURED: com.flurry.android.FlurryEvent;
				public static MEDIA_STARTED: com.flurry.android.FlurryEvent;
				public static MEDIA_STOPPED: com.flurry.android.FlurryEvent;
				public static MEDIA_PAUSED: com.flurry.android.FlurryEvent;
				public static PRIVACY_PROMPT_DISPLAYED: com.flurry.android.FlurryEvent;
				public static PRIVACY_OPT_IN: com.flurry.android.FlurryEvent;
				public static PRIVACY_OPT_OUT: com.flurry.android.FlurryEvent;
				public eventName: string;
				public mandatoryParams: com.flurry.android.FlurryEvent.ParamBase[];
				public recommendedParams: com.flurry.android.FlurryEvent.ParamBase[];
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(param0: string): com.flurry.android.FlurryEvent;
				public static values(): com.flurry.android.FlurryEvent[];
			}
			export module FlurryEvent {
				export class BooleanParam extends com.flurry.android.FlurryEvent.ParamBase {
					public static class: java.lang.Class<com.flurry.android.FlurryEvent.BooleanParam>;
				}
				export class DoubleParam extends com.flurry.android.FlurryEvent.ParamBase {
					public static class: java.lang.Class<com.flurry.android.FlurryEvent.DoubleParam>;
				}
				export class IntegerParam extends com.flurry.android.FlurryEvent.ParamBase {
					public static class: java.lang.Class<com.flurry.android.FlurryEvent.IntegerParam>;
				}
				export class Param extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.android.FlurryEvent.Param>;
					public static AD_TYPE: com.flurry.android.FlurryEvent.StringParam;
					public static LEVEL_NAME: com.flurry.android.FlurryEvent.StringParam;
					public static LEVEL_NUMBER: com.flurry.android.FlurryEvent.IntegerParam;
					public static CONTENT_NAME: com.flurry.android.FlurryEvent.StringParam;
					public static CONTENT_TYPE: com.flurry.android.FlurryEvent.StringParam;
					public static CONTENT_ID: com.flurry.android.FlurryEvent.StringParam;
					public static CREDIT_NAME: com.flurry.android.FlurryEvent.StringParam;
					public static CREDIT_TYPE: com.flurry.android.FlurryEvent.StringParam;
					public static CREDIT_ID: com.flurry.android.FlurryEvent.StringParam;
					public static IS_CURRENCY_SOFT: com.flurry.android.FlurryEvent.BooleanParam;
					public static CURRENCY_TYPE: com.flurry.android.FlurryEvent.StringParam;
					public static PAYMENT_TYPE: com.flurry.android.FlurryEvent.StringParam;
					public static ITEM_NAME: com.flurry.android.FlurryEvent.StringParam;
					public static ITEM_TYPE: com.flurry.android.FlurryEvent.StringParam;
					public static ITEM_ID: com.flurry.android.FlurryEvent.StringParam;
					public static ITEM_COUNT: com.flurry.android.FlurryEvent.IntegerParam;
					public static ITEM_CATEGORY: com.flurry.android.FlurryEvent.StringParam;
					public static ITEM_LIST_TYPE: com.flurry.android.FlurryEvent.StringParam;
					public static PRICE: com.flurry.android.FlurryEvent.DoubleParam;
					public static TOTAL_AMOUNT: com.flurry.android.FlurryEvent.DoubleParam;
					public static ACHIEVEMENT_ID: com.flurry.android.FlurryEvent.StringParam;
					public static SCORE: com.flurry.android.FlurryEvent.IntegerParam;
					public static RATING: com.flurry.android.FlurryEvent.StringParam;
					public static TRANSACTION_ID: com.flurry.android.FlurryEvent.StringParam;
					public static SUCCESS: com.flurry.android.FlurryEvent.BooleanParam;
					public static IS_ANNUAL_SUBSCRIPTION: com.flurry.android.FlurryEvent.BooleanParam;
					public static SUBSCRIPTION_COUNTRY: com.flurry.android.FlurryEvent.StringParam;
					public static TRIAL_DAYS: com.flurry.android.FlurryEvent.IntegerParam;
					public static PREDICTED_LTV: com.flurry.android.FlurryEvent.StringParam;
					public static GROUP_NAME: com.flurry.android.FlurryEvent.StringParam;
					public static TUTORIAL_NAME: com.flurry.android.FlurryEvent.StringParam;
					public static STEP_NUMBER: com.flurry.android.FlurryEvent.IntegerParam;
					public static USER_ID: com.flurry.android.FlurryEvent.StringParam;
					public static METHOD: com.flurry.android.FlurryEvent.StringParam;
					public static QUERY: com.flurry.android.FlurryEvent.StringParam;
					public static SEARCH_TYPE: com.flurry.android.FlurryEvent.StringParam;
					public static SOCIAL_CONTENT_NAME: com.flurry.android.FlurryEvent.StringParam;
					public static SOCIAL_CONTENT_ID: com.flurry.android.FlurryEvent.StringParam;
					public static LIKE_TYPE: com.flurry.android.FlurryEvent.StringParam;
					public static MEDIA_NAME: com.flurry.android.FlurryEvent.StringParam;
					public static MEDIA_TYPE: com.flurry.android.FlurryEvent.StringParam;
					public static MEDIA_ID: com.flurry.android.FlurryEvent.StringParam;
					public static DURATION: com.flurry.android.FlurryEvent.IntegerParam;
					public constructor();
				}
				export class ParamBase extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.android.FlurryEvent.ParamBase>;
					public paramName: string;
					public toString(): string;
				}
				export class Params extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.android.FlurryEvent.Params>;
					public putInteger(param0: string, param1: number): com.flurry.android.FlurryEvent.Params;
					public constructor(param0: com.flurry.android.FlurryEvent.Params);
					public putString(param0: string, param1: string): com.flurry.android.FlurryEvent.Params;
					public getParams(): java.util.Map<any,string>;
					public remove(param0: string): com.flurry.android.FlurryEvent.Params;
					public putAll(param0: com.flurry.android.FlurryEvent.Params): com.flurry.android.FlurryEvent.Params;
					public putLong(param0: string, param1: number): com.flurry.android.FlurryEvent.Params;
					public putBoolean(param0: string, param1: boolean): com.flurry.android.FlurryEvent.Params;
					public putInteger(param0: com.flurry.android.FlurryEvent.IntegerParam, param1: number): com.flurry.android.FlurryEvent.Params;
					public putLong(param0: com.flurry.android.FlurryEvent.IntegerParam, param1: number): com.flurry.android.FlurryEvent.Params;
					public putDouble(param0: string, param1: number): com.flurry.android.FlurryEvent.Params;
					public constructor();
					public clear(): com.flurry.android.FlurryEvent.Params;
					public remove(param0: com.flurry.android.FlurryEvent.ParamBase): com.flurry.android.FlurryEvent.Params;
					public putString(param0: com.flurry.android.FlurryEvent.StringParam, param1: string): com.flurry.android.FlurryEvent.Params;
					public putDouble(param0: com.flurry.android.FlurryEvent.DoubleParam, param1: number): com.flurry.android.FlurryEvent.Params;
					public putBoolean(param0: com.flurry.android.FlurryEvent.BooleanParam, param1: boolean): com.flurry.android.FlurryEvent.Params;
				}
				export class StringParam extends com.flurry.android.FlurryEvent.ParamBase {
					public static class: java.lang.Class<com.flurry.android.FlurryEvent.StringParam>;
				}
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.android.FlurryEvent.a>;
				}
				export class b extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.android.FlurryEvent.b>;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class FlurryEventRecordStatus {
				public static class: java.lang.Class<com.flurry.android.FlurryEventRecordStatus>;
				public static kFlurryEventFailed: com.flurry.android.FlurryEventRecordStatus;
				public static kFlurryEventRecorded: com.flurry.android.FlurryEventRecordStatus;
				public static kFlurryEventUniqueCountExceeded: com.flurry.android.FlurryEventRecordStatus;
				public static kFlurryEventParamsCountExceeded: com.flurry.android.FlurryEventRecordStatus;
				public static kFlurryEventLogCountExceeded: com.flurry.android.FlurryEventRecordStatus;
				public static kFlurryEventLoggingDelayed: com.flurry.android.FlurryEventRecordStatus;
				public static kFlurryEventAnalyticsDisabled: com.flurry.android.FlurryEventRecordStatus;
				public static kFlurryEventParamsMismatched: com.flurry.android.FlurryEventRecordStatus;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): com.flurry.android.FlurryEventRecordStatus[];
				public static valueOf(param0: string): com.flurry.android.FlurryEventRecordStatus;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class FlurryInstallReceiver extends android.content.BroadcastReceiver {
				public static class: java.lang.Class<com.flurry.android.FlurryInstallReceiver>;
				public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class FlurryModule extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.android.FlurryModule>;
				/**
				 * Constructs a new instance of the com.flurry.android.FlurryModule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class FlurryPerformance extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.android.FlurryPerformance>;
				public static PERFORMANCE_CONFIG_FLAGS: string;
				public static NONE: number;
				public static COLD_START: number;
				public static SCREEN_TIME: number;
				public static ALL: number;
				public static reportFullyDrawn(): void;
				public constructor();
				public static reportLaunched(): void;
			}
			export module FlurryPerformance {
				export class HttpEventListener extends com.flurry.sdk.di.a {
					public static class: java.lang.Class<com.flurry.android.FlurryPerformance.HttpEventListener>;
					public constructor(param0: string);
					public constructor();
					public setId(param0: string): void;
				}
				export module HttpEventListener {
					export class Factory extends com.flurry.sdk.di.a.a {
						public static class: java.lang.Class<com.flurry.android.FlurryPerformance.HttpEventListener.Factory>;
						public setId(param0: string): void;
						public create(param0: okhttp3.Call): com.flurry.sdk.di.a;
						public create(param0: okhttp3.Call): okhttp3.EventListener;
						public constructor(param0: string);
					}
				}
				export class HttpInterceptor extends com.flurry.sdk.di.b {
					public static class: java.lang.Class<com.flurry.android.FlurryPerformance.HttpInterceptor>;
					public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
					public constructor(param0: string);
					public setId(param0: string): void;
				}
				export class HttpLogger extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.android.FlurryPerformance.HttpLogger>;
					public logEvent(param0: string, param1: string, param2: number, param3: string): void;
					public constructor();
					public logEvent(param0: string, param1: okhttp3.Request, param2: okhttp3.Response): void;
				}
				export class ResourceLogger extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.android.FlurryPerformance.ResourceLogger>;
					public constructor();
					public logEvent(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class FlurryPrivacySession extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.android.FlurryPrivacySession>;
				/**
				 * Constructs a new instance of the com.flurry.android.FlurryPrivacySession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module FlurryPrivacySession {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.android.FlurryPrivacySession.Callback>;
					/**
					 * Constructs a new instance of the com.flurry.android.FlurryPrivacySession$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						success(): void;
						failure(): void;
					});
					public constructor();
					public failure(): void;
					public success(): void;
				}
				export class Request extends java.lang.Object implements com.flurry.sdk.eg.a {
					public static class: java.lang.Class<com.flurry.android.FlurryPrivacySession.Request>;
					public callback: com.flurry.android.FlurryPrivacySession.Callback;
					public verifier: string;
					public context: android.content.Context;
					public constructor(param0: android.content.Context, param1: com.flurry.android.FlurryPrivacySession.Callback);
				}
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.android.FlurryPrivacySession.a>;
					public a: android.net.Uri;
					public constructor(param0: string, param1: number, param2: com.flurry.android.FlurryPrivacySession.Request);
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export class FlurryPublisherSegmentation extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.android.FlurryPublisherSegmentation>;
				public static registerFetchListener(param0: com.flurry.android.FlurryPublisherSegmentation.FetchListener): void;
				public static isFetchFinished(): boolean;
				public static fetch(): void;
				public static getPublisherData(): java.util.Map<string,string>;
				public static unregisterFetchListener(param0: com.flurry.android.FlurryPublisherSegmentation.FetchListener): void;
				public constructor();
			}
			export module FlurryPublisherSegmentation {
				export class FetchListener extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.android.FlurryPublisherSegmentation.FetchListener>;
					/**
					 * Constructs a new instance of the com.flurry.android.FlurryPublisherSegmentation$FetchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFetched(param0: java.util.Map<string,string>): void;
					});
					public constructor();
					public onFetched(param0: java.util.Map<string,string>): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export module agent {
				export class FlurryContentProvider extends android.content.ContentProvider {
					public static class: java.lang.Class<com.flurry.android.agent.FlurryContentProvider>;
					public static PERFORMANCE_DATA_TYPE: string;
					public static START_TIME_COLUMN: number;
					public static RUNTIME_USED_MEMORY_COLUMN: number;
					public static SYSTEM_USED_MEMORY_COLUMN: number;
					public query(param0: android.net.Uri, param1: string[], param2: string, param3: string[], param4: string): android.database.Cursor;
					public query(uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string, cancellationSignal: android.os.CancellationSignal): android.database.Cursor;
					public onTrimMemory(level: number): void;
					public onTrimMemory(param0: number): void;
					public constructor();
					public onCreate(): boolean;
					public static getProviderName(param0: android.content.Context): string;
					public static getProviderUri(param0: android.content.Context, param1: string): android.net.Uri;
					public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: string[]): number;
					public getType(param0: android.net.Uri): string;
					public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
					public delete(param0: android.net.Uri, param1: string, param2: string[]): number;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export module common {
				export module revenue {
					export class BillingClientConnection extends java.lang.Object {
						public static class: java.lang.Class<com.flurry.android.common.revenue.BillingClientConnection>;
						/**
						 * Constructs a new instance of the com.flurry.android.common.revenue.BillingClientConnection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onConnected(): void;
						});
						public constructor();
						public onConnected(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export module common {
				export module revenue {
					export class BillingManager extends java.lang.Object {
						public static class: java.lang.Class<com.flurry.android.common.revenue.BillingManager>;
						public static REVENUE_PRICE_FORMAT: string;
						public static getInstance(param0: android.content.Context): com.flurry.android.common.revenue.BillingManager;
						public static isValidPurchases(param0: java.util.List<any>): boolean;
						public startConnection(param0: com.flurry.android.common.revenue.BillingClientConnection): void;
						public static getProducts(param0: any): java.util.List<string>;
						public static getPurchaseParams(param0: any): java.util.Map<string,string>;
						public static getDetailsParams(param0: java.util.List<any>, param1: string, param2: java.util.Map<string,string>): void;
						public getProductDetails(param0: java.util.Set<string>, param1: com.flurry.android.common.revenue.ProductsDetailsCallback): void;
					}
					export module BillingManager {
						export class BillingResponseCode extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.flurry.android.common.revenue.BillingManager.BillingResponseCode>;
							/**
							 * Constructs a new instance of the com.flurry.android.common.revenue.BillingManager$BillingResponseCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class<any>;
							});
							public constructor();
							public static OK: number;
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public equals(obj: any): boolean;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export class FlurryBillingClientStateListener extends java.lang.Object {
							public static class: java.lang.Class<com.flurry.android.common.revenue.BillingManager.FlurryBillingClientStateListener>;
							public onBillingSetupFinished(param0: com.android.billingclient.api.BillingResult): void;
							public constructor(param0: com.flurry.android.common.revenue.BillingManager, param1: com.flurry.android.common.revenue.BillingClientConnection);
							public onBillingServiceDisconnected(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module android {
			export module common {
				export module revenue {
					export class ProductsDetailsCallback extends java.lang.Object {
						public static class: java.lang.Class<com.flurry.android.common.revenue.ProductsDetailsCallback>;
						/**
						 * Constructs a new instance of the com.flurry.android.common.revenue.ProductsDetailsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onProductsDetails(param0: java.util.List<any>): void;
						});
						public constructor();
						public onProductsDetails(param0: java.util.List<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class a extends com.flurry.sdk.f {
				public static class: java.lang.Class<com.flurry.sdk.a>;
				public static b(): number;
				public b(param0: string, param1: java.util.Map<string,string>, param2: string): void;
				public static a(param0: com.flurry.android.Consent): void;
				public a(param0: string, param1: string, param2: string, param3: java.util.Map<string,string>, param4: java.lang.StackTraceElement[]): void;
				public static a(param0: boolean): void;
				public static g(): string;
				public static f(): boolean;
				public a(param0: string, param1: java.util.Map<string,string>, param2: string): com.flurry.android.FlurryEventRecordStatus;
				public a(param0: string, param1: com.flurry.sdk.gg.a, param2: java.util.Map<string,string>): com.flurry.android.FlurryEventRecordStatus;
				public static d(): com.flurry.android.Consent;
				public a(param0: string, param1: com.flurry.sdk.gg.a, param2: java.util.Map<string,string>, param3: boolean, param4: boolean, param5: string): com.flurry.android.FlurryEventRecordStatus;
				public constructor();
				public static a(): com.flurry.sdk.a;
				public static h(): void;
				public a(param0: android.content.Context): void;
				public static i(): boolean;
				public static c(): string;
				public a(param0: string, param1: string): com.flurry.android.FlurryEventRecordStatus;
				public static e(): string;
				public static a(param0: number): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public a(param0: string, param1: string, param2: java.util.Map<string,string>): void;
				public b(param0: string, param1: string): void;
				public a(param0: string, param1: java.util.Map<string,string>, param2: boolean, param3: boolean, param4: string): com.flurry.android.FlurryEventRecordStatus;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class aa extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.aa>;
				public a: string;
				public b: number;
				public c: string;
				public d: string;
				public e: java.lang.Throwable;
				public f: java.util.Map<string,string>;
				public g: java.util.Map<string,string>;
				public h: java.util.List<com.flurry.sdk.v>;
				public constructor(param0: string, param1: number, param2: string, param3: string, param4: java.lang.Throwable, param5: java.util.Map<string,string>, param6: java.util.Map<string,string>, param7: java.util.List<com.flurry.sdk.v>);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ab extends com.flurry.sdk.m<com.flurry.sdk.aa> implements java.lang.Thread.UncaughtExceptionHandler  {
				public static class: java.lang.Class<com.flurry.sdk.ab>;
				public b: boolean;
				public destroy(): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
				public a(param0: string, param1: number, param2: string, param3: string, param4: java.lang.Throwable, param5: java.util.Map<string,string>, param6: java.util.Map<string,string>): void;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ac extends com.flurry.sdk.m<com.flurry.sdk.ad> {
				public static class: java.lang.Class<com.flurry.sdk.ac>;
				public b: string;
				public d: boolean;
				public e: boolean;
				public destroy(): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public a(): void;
				public constructor(param0: com.flurry.sdk.an, param1: com.flurry.sdk.q);
				public constructor(param0: string);
			}
			export module ac {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.ac.a>;
					public static a: com.flurry.sdk.ac.a;
					public static b: com.flurry.sdk.ac.a;
					public static c: com.flurry.sdk.ac.a;
					public static d: com.flurry.sdk.ac.a;
					public static e: com.flurry.sdk.ac.a;
					public static f: com.flurry.sdk.ac.a;
					public static g: com.flurry.sdk.ac.a;
					public static h: com.flurry.sdk.ac.a;
					public i: number;
					public static values(): com.flurry.sdk.ac.a[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(param0: string): com.flurry.sdk.ac.a;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ad extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ad>;
				public a: string;
				public b: boolean;
				public c: com.flurry.sdk.ac.a;
				public d: com.flurry.sdk.am;
				public constructor(param0: string, param1: boolean, param2: com.flurry.sdk.ac.a, param3: com.flurry.sdk.am);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ae extends com.flurry.sdk.f {
				public static class: java.lang.Class<com.flurry.sdk.ae>;
				public a(): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class af extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.af>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ag extends com.flurry.sdk.m<com.flurry.sdk.ak> {
				public static class: java.lang.Class<com.flurry.sdk.ag>;
				public d: com.flurry.sdk.ai;
				public e: com.flurry.sdk.af;
				public f: com.flurry.sdk.ae;
				public g: java.util.concurrent.atomic.AtomicBoolean;
				public h: com.flurry.sdk.o<com.flurry.sdk.r>;
				public subscribe(param0: com.flurry.sdk.o<com.flurry.sdk.ak>): void;
				public destroy(): void;
				public b(): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public start(): void;
				public a(param0: java.util.Map<com.flurry.sdk.al,string>): void;
				public constructor(param0: com.flurry.sdk.q);
				public a(param0: com.flurry.sdk.al, param1: string): void;
				public a(): com.flurry.sdk.ak;
				public constructor(param0: string);
				public subscribe(param0: com.flurry.sdk.o<any>): void;
				public c(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ah extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ah>;
				public a: boolean;
				public b: number[];
				public c: number[];
				public d: number;
			}
			export module ah {
				export class a extends com.flurry.sdk.dr<com.flurry.sdk.ah> {
					public static class: java.lang.Class<com.flurry.sdk.ah.a>;
					public a(param0: java.io.InputStream): any;
					public a(param0: java.io.OutputStream, param1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ai extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ai>;
				public a(): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class aj extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.aj>;
				public a(): java.security.Key;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ak extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ak>;
				public b: boolean;
				public toString(): string;
				public a(): java.util.Map<com.flurry.sdk.al,string>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class al {
				public static class: java.lang.Class<com.flurry.sdk.al>;
				public static a: com.flurry.sdk.al;
				public static b: com.flurry.sdk.al;
				public static c: com.flurry.sdk.al;
				public static d: com.flurry.sdk.al;
				public static e: com.flurry.sdk.al;
				public static f: com.flurry.sdk.al;
				public g: number;
				public h: boolean;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): com.flurry.sdk.al[];
				public static valueOf(param0: string): com.flurry.sdk.al;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class am extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.am>;
				public a: boolean;
				public b: string;
				public constructor(param0: boolean, param1: string);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class an extends com.flurry.sdk.m<com.flurry.sdk.am> {
				public static class: java.lang.Class<com.flurry.sdk.an>;
				public destroy(): void;
				public a(): string;
				public b(): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public start(): void;
				public constructor(param0: com.flurry.sdk.ap);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ao extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ao>;
				public b: android.os.Bundle;
				public constructor(param0: com.flurry.sdk.ao.a, param1: android.os.Bundle);
			}
			export module ao {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.ao.a>;
					public static a: com.flurry.sdk.ao.a;
					public static b: com.flurry.sdk.ao.a;
					public static c: com.flurry.sdk.ao.a;
					public static d: com.flurry.sdk.ao.a;
					public static e: com.flurry.sdk.ao.a;
					public static f: com.flurry.sdk.ao.a;
					public static g: com.flurry.sdk.ao.a;
					public static h: com.flurry.sdk.ao.a;
					public static i: com.flurry.sdk.ao.a;
					public static j: com.flurry.sdk.ao.a;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.ao.a[];
					public static valueOf(param0: string): com.flurry.sdk.ao.a;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ap extends com.flurry.sdk.m<com.flurry.sdk.ao> {
				public static class: java.lang.Class<com.flurry.sdk.ap>;
				public a: number;
				public onActivityPaused(param0: android.app.Activity): void;
				public onLowMemory(): void;
				public onActivityDestroyed(param0: android.app.Activity): void;
				public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
				public constructor(param0: string);
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public constructor();
				public onActivityStopped(param0: android.app.Activity): void;
				public destroy(): void;
				public onActivityStarted(param0: android.app.Activity): void;
				public onActivityResumed(param0: android.app.Activity): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
				public onTrimMemory(param0: number): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class aq extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.aq>;
				public a: string;
				public b: string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ar extends com.flurry.sdk.m<com.flurry.sdk.aq> {
				public static class: java.lang.Class<com.flurry.sdk.ar>;
				public subscribe(param0: com.flurry.sdk.o<com.flurry.sdk.aq>): void;
				public destroy(): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public static a(): string;
				public static b(): com.flurry.sdk.aq;
				public constructor(param0: string);
				public subscribe(param0: com.flurry.sdk.o<any>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class as extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.as>;
				public a: number;
				public b: boolean;
				public c: boolean;
				public d: android.location.Location;
				public constructor(param0: boolean, param1: boolean, param2: android.location.Location);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class at extends com.flurry.sdk.m<com.flurry.sdk.as> {
				public static class: java.lang.Class<com.flurry.sdk.at>;
				public b: com.flurry.sdk.o<com.flurry.sdk.r>;
				public a(param0: boolean): void;
				public destroy(): void;
				public subscribe(param0: com.flurry.sdk.o<com.flurry.sdk.as>): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public refresh(): void;
				public constructor(param0: com.flurry.sdk.q);
				public constructor(param0: string);
				public subscribe(param0: com.flurry.sdk.o<any>): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class au extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.au>;
				public a: boolean;
				public b: com.flurry.sdk.au.a;
				public c: string;
				public d: string;
				public e: string;
				public f: string;
				public g: string;
				public h: string;
				public i: number;
			}
			export module au {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.au.a>;
					public static a: com.flurry.sdk.au.a;
					public static b: com.flurry.sdk.au.a;
					public static c: com.flurry.sdk.au.a;
					public static d: com.flurry.sdk.au.a;
					public e: number;
					public static valueOf(param0: string): com.flurry.sdk.au.a;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.au.a[];
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class av extends com.flurry.sdk.m<com.flurry.sdk.au> {
				public static class: java.lang.Class<com.flurry.sdk.av>;
				public static MINIMUM_REFRESH_INTERVAL: number;
				public mAppStateListener: com.flurry.sdk.o<com.flurry.sdk.r>;
				public static getCellularBand(param0: number): string;
				public constructor(param0: com.flurry.sdk.q);
				public getNetworkTypePreM(param0: android.net.ConnectivityManager): com.flurry.sdk.au.a;
				public getNetworkType(): com.flurry.sdk.au.a;
				public getCellularData(param0: android.telephony.SignalStrength): void;
				public constructor(param0: string);
				public destroy(): void;
				public getNetworkChangeReceiver(): android.content.BroadcastReceiver;
				public getPhoneStateListener(): android.telephony.PhoneStateListener;
				public getNetworkTypeM(param0: android.net.ConnectivityManager): com.flurry.sdk.au.a;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public isNetworkEnabled(): boolean;
				public refresh(): void;
				public getNetworkCallback(): android.net.ConnectivityManager.NetworkCallback;
				public subscribe(param0: com.flurry.sdk.o<com.flurry.sdk.au>): void;
				public subscribe(param0: com.flurry.sdk.o<any>): void;
			}
			export module av {
				export class a extends android.telephony.TelephonyCallback implements android.telephony.TelephonyCallback.SignalStrengthsListener {
					public static class: java.lang.Class<com.flurry.sdk.av.a>;
					public static b(): void;
					public static a(): android.telephony.TelephonyCallback;
					public constructor();
					public static a(param0: com.flurry.sdk.av): android.telephony.TelephonyCallback;
					public onSignalStrengthsChanged(param0: android.telephony.SignalStrength): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class aw extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.aw>;
				public a: string;
				public b: boolean;
				public constructor(param0: string, param1: boolean);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ax extends com.flurry.sdk.m<com.flurry.sdk.aw> {
				public static class: java.lang.Class<com.flurry.sdk.ax>;
				public a: string;
				public b: boolean;
				public d: com.flurry.sdk.o<com.flurry.sdk.r>;
				public destroy(): void;
				public subscribe(param0: com.flurry.sdk.o<com.flurry.sdk.aw>): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public constructor(param0: com.flurry.sdk.q);
				public constructor(param0: string);
				public subscribe(param0: com.flurry.sdk.o<any>): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ay extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ay>;
				public a: string;
				public b: string;
				public c: java.util.Map<string,string>;
				public constructor(param0: string, param1: string, param2: java.util.Map<string,string>);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class az extends com.flurry.sdk.m<com.flurry.sdk.ay> {
				public static class: java.lang.Class<com.flurry.sdk.az>;
				public a: java.util.Map<string,java.util.Map<string,string>>;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class b extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.b>;
				public static a(): android.content.Context;
				public static a(param0: android.content.Context): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ba extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ba>;
				public a: com.flurry.sdk.bd;
				public b: number;
				public c: number;
				public d: number;
				public e: com.flurry.sdk.bc;
				public f: boolean;
				public constructor(param0: com.flurry.sdk.bd, param1: number, param2: number, param3: number, param4: com.flurry.sdk.bc, param5: boolean);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bb extends com.flurry.sdk.m<com.flurry.sdk.ba> {
				public static class: java.lang.Class<com.flurry.sdk.bb>;
				public d: java.util.concurrent.atomic.AtomicBoolean;
				public e: number;
				public b(param0: com.flurry.android.FlurryAgentListener): void;
				public a(param0: number, param1: number): void;
				public destroy(): void;
				public a(): string;
				public a(param0: com.flurry.sdk.bd, param1: boolean): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public constructor(param0: com.flurry.sdk.q);
				public a(param0: com.flurry.android.FlurryAgentListener): void;
				public b(param0: com.flurry.sdk.bd, param1: boolean): void;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bc {
				public static class: java.lang.Class<com.flurry.sdk.bc>;
				public static a: com.flurry.sdk.bc;
				public static b: com.flurry.sdk.bc;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(param0: string): com.flurry.sdk.bc;
				public static values(): com.flurry.sdk.bc[];
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bd {
				public static class: java.lang.Class<com.flurry.sdk.bd>;
				public static a: com.flurry.sdk.bd;
				public static b: com.flurry.sdk.bd;
				public static c: com.flurry.sdk.bd;
				public d: number;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(param0: string): com.flurry.sdk.bd;
				public static values(): com.flurry.sdk.bd[];
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class be extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.be>;
				public static a(): void;
				public static d(): void;
				public static c(): void;
				public static e(): void;
				public static f(): void;
				public static b(): void;
				public static a(param0: string, param1: string, param2: java.lang.Throwable): void;
			}
			export module be {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.be.a>;
					public static a: com.flurry.sdk.be.a;
					public static b: com.flurry.sdk.be.a;
					public static c: com.flurry.sdk.be.a;
					public static d: com.flurry.sdk.be.a;
					public static e: com.flurry.sdk.be.a;
					public static f: com.flurry.sdk.be.a;
					public static g: com.flurry.sdk.be.a;
					public static h: com.flurry.sdk.be.a;
					public static i: com.flurry.sdk.be.a;
					public static j: com.flurry.sdk.be.a;
					public static k: com.flurry.sdk.be.a;
					public static l: com.flurry.sdk.be.a;
					public static m: com.flurry.sdk.be.a;
					public static n: com.flurry.sdk.be.a;
					public static o: com.flurry.sdk.be.a;
					public static p: com.flurry.sdk.be.a;
					public static q: com.flurry.sdk.be.a;
					public static r: com.flurry.sdk.be.a;
					public static s: com.flurry.sdk.be.a;
					public static t: com.flurry.sdk.be.a;
					public static u: com.flurry.sdk.be.a;
					public static v: com.flurry.sdk.be.a;
					public static w: com.flurry.sdk.be.a;
					public static values(): com.flurry.sdk.be.a[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(param0: string): com.flurry.sdk.be.a;
				}
				export class b extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.be.b>;
					public constructor();
				}
				export class c {
					public static class: java.lang.Class<com.flurry.sdk.be.c>;
					public static a: com.flurry.sdk.be.c;
					public static b: com.flurry.sdk.be.c;
					public static c: com.flurry.sdk.be.c;
					public static d: com.flurry.sdk.be.c;
					public static e: com.flurry.sdk.be.c;
					public static f: com.flurry.sdk.be.c;
					public g: string;
					public h: number;
					public i: number;
					public j: java.util.List<com.flurry.sdk.jh>;
					public k: java.util.Set<com.flurry.sdk.jh>;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.be.c[];
					public static valueOf(param0: string): com.flurry.sdk.be.c;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bf extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bf>;
				public a: boolean;
				public b: com.flurry.sdk.am;
				public constructor(param0: boolean, param1: com.flurry.sdk.am);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bg extends com.flurry.sdk.m<com.flurry.sdk.bf> {
				public static class: java.lang.Class<com.flurry.sdk.bg>;
				public destroy(): void;
				public constructor(param0: com.flurry.sdk.bb, param1: com.flurry.sdk.an);
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bh extends com.flurry.sdk.m<string> {
				public static class: java.lang.Class<com.flurry.sdk.bh>;
				public a: android.content.BroadcastReceiver;
				public destroy(): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public subscribe(param0: com.flurry.sdk.o<string>): void;
				public constructor(param0: string);
				public subscribe(param0: com.flurry.sdk.o<any>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bi extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bi>;
				public b(): string;
				public c(): void;
				public static a(): com.flurry.sdk.bi;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bj extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bj>;
				public static a(): com.flurry.sdk.bj;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bk extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bk>;
				public static a(): com.flurry.sdk.bk;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bl extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bl>;
				public static a(): com.flurry.sdk.bl;
				public b(): string;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bm extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bm>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.bm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(): void;
					b(): void;
				});
				public constructor();
				public b(): void;
				public a(): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export abstract class bn extends com.flurry.sdk.f {
				public static class: java.lang.Class<com.flurry.sdk.bn>;
				public b(): void;
				public c(): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public d(): string;
				public a(param0: number, param1: string, param2: string): void;
				public a(): void;
				public b(param0: number[], param1: string, param2: string): void;
				public a(param0: number[], param1: string, param2: string): void;
				public constructor(param0: string, param1: string);
				public a(param0: com.flurry.sdk.bm): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bo extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bo>;
				public static a(param0: string): string;
				public static b(param0: string): com.flurry.sdk.l<com.flurry.sdk.bo>;
				public constructor(param0: number[]);
			}
			export module bo {
				export class a extends com.flurry.sdk.dr<com.flurry.sdk.bo> {
					public static class: java.lang.Class<com.flurry.sdk.bo.a>;
					public a(param0: java.io.InputStream): any;
					public a(param0: java.io.OutputStream, param1: any): void;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bp extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bp>;
				public a(param0: com.flurry.sdk.bo, param1: string): void;
				public a(param0: string, param1: string): boolean;
				public f(param0: string): java.util.List<string>;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bq extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bq>;
				public constructor(param0: string);
			}
			export module bq {
				export class a extends com.flurry.sdk.dr<com.flurry.sdk.bq> {
					public static class: java.lang.Class<com.flurry.sdk.bq.a>;
					public constructor();
					public a(param0: java.io.InputStream): any;
					public a(param0: java.io.OutputStream, param1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class br extends com.flurry.sdk.bn {
				public static class: java.lang.Class<com.flurry.sdk.br>;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public d(): string;
				public a(param0: number, param1: string, param2: string): void;
				public a(): void;
				public a(param0: number[], param1: string, param2: string): void;
				public constructor(param0: string, param1: string);
				public a(param0: com.flurry.sdk.bm): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bs extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bs>;
				public static a(param0: android.content.Context): void;
			}
			export module bs {
				export abstract class a extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.bs.a>;
					public constructor();
				}
				export abstract class b extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.bs.b>;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bt extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bt>;
				public a(): java.util.Map<string,java.util.List<string>>;
				public a(param0: string): void;
				public constructor(param0: android.content.Context);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bu extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bu>;
				public constructor();
				public static a(param0: string): java.util.Map<string,java.util.List<string>>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bv extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bv>;
				public b: com.flurry.sdk.cj;
				public a(param0: string, param1: number, param2: com.flurry.sdk.cf): number;
				public constructor(param0: com.flurry.sdk.cd, param1: com.flurry.sdk.cj);
				public a(param0: string, param1: string, param2: com.flurry.sdk.cf): string;
				public a(param0: com.flurry.sdk.cf): java.util.Map<string,string>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export abstract class bw extends com.flurry.sdk.f {
				public static class: java.lang.Class<com.flurry.sdk.bw>;
				public b(): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public a(): void;
				public c(): string;
				public d(): void;
				public constructor(param0: com.flurry.sdk.co, param1: com.flurry.sdk.bw.a, param2: com.flurry.sdk.bz, param3: com.flurry.sdk.cj);
			}
			export module bw {
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.bw.a>;
					/**
					 * Constructs a new instance of the com.flurry.sdk.bw$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: com.flurry.sdk.cb, param1: boolean): void;
					});
					public constructor();
					public a(param0: com.flurry.sdk.cb, param1: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bx extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bx>;
				public a(param0: string): org.json.JSONObject;
				public constructor(param0: org.json.JSONObject);
				public a(): string;
			}
			export module bx {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.bx.a>;
					public static a: com.flurry.sdk.bx.a;
					public static b: com.flurry.sdk.bx.a;
					public static c: com.flurry.sdk.bx.a;
					public static valueOf(param0: string): com.flurry.sdk.bx.a;
					public toString(): string;
					public static values(): com.flurry.sdk.bx.a[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class by extends com.flurry.sdk.f {
				public static class: java.lang.Class<com.flurry.sdk.by>;
				public c(): com.flurry.sdk.bv;
				public static b(): com.flurry.sdk.ck;
				public a(param0: com.flurry.android.FlurryConfigListener, param1: com.flurry.sdk.cf, param2: android.os.Handler): void;
				public static a(): com.flurry.sdk.by;
				public a(param0: com.flurry.android.FlurryConfigListener): void;
				public d(): void;
				public a(param0: com.flurry.sdk.cf, param1: boolean): void;
				public e(): java.util.List<com.flurry.sdk.ci>;
				public toString(): string;
				public a(param0: com.flurry.sdk.cf): boolean;
			}
			export module by {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.by.a>;
					public static a: com.flurry.sdk.by.a;
					public static b: com.flurry.sdk.by.a;
					public static c: com.flurry.sdk.by.a;
					public static d: com.flurry.sdk.by.a;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.by.a[];
					public static valueOf(param0: string): com.flurry.sdk.by.a;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class bz extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.bz>;
				public a(param0: java.util.TimerTask, param1: number): void;
				public static d(): string;
				public b(): void;
				public c(): void;
				public static a(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class c extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.c>;
				public static a(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ca extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ca>;
				public static a(param0: org.json.JSONObject): java.util.List<com.flurry.sdk.ci>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cb extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cb>;
				public static a: com.flurry.sdk.cb;
				public static b: com.flurry.sdk.cb;
				public constructor(param0: com.flurry.sdk.cb.a, param1: string);
				public toString(): string;
			}
			export module cb {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.cb.a>;
					public static a: com.flurry.sdk.cb.a;
					public static b: com.flurry.sdk.cb.a;
					public static c: com.flurry.sdk.cb.a;
					public static d: com.flurry.sdk.cb.a;
					public static e: com.flurry.sdk.cb.a;
					public static f: com.flurry.sdk.cb.a;
					public static g: com.flurry.sdk.cb.a;
					public static valueOf(param0: string): com.flurry.sdk.cb.a;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.cb.a[];
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cc extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cc>;
				public static a(): org.json.JSONArray;
				public static a(param0: com.flurry.sdk.co, param1: com.flurry.sdk.bw.a, param2: com.flurry.sdk.bz, param3: com.flurry.sdk.cj): java.util.List<com.flurry.sdk.bw>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cd extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cd>;
				public a(param0: string): com.flurry.sdk.bx;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ce extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ce>;
				public a(param0: com.flurry.android.FlurryConfigListener, param1: com.flurry.sdk.cf, param2: android.os.Handler): void;
				public a(param0: string, param1: string, param2: com.flurry.sdk.cf): string;
				public b(param0: com.flurry.sdk.cf): java.util.Map<string,string>;
				public static a(): com.flurry.sdk.ce;
				public a(param0: com.flurry.sdk.cf): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cf extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cf>;
				public static a(param0: string): com.flurry.sdk.cf;
				public static b(): java.util.Collection<com.flurry.sdk.cf>;
				public toString(): string;
				public static a(): java.util.Map<string,com.flurry.sdk.cf>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cg extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cg>;
				public a(): number;
				public constructor(param0: com.flurry.sdk.cg.a);
			}
			export module cg {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.cg.a>;
					public static b: com.flurry.sdk.cg.a;
					public static c: com.flurry.sdk.cg.a;
					public static d: com.flurry.sdk.cg.a;
					public static values(): com.flurry.sdk.cg.a[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(param0: string): com.flurry.sdk.cg.a;
					public a(): com.flurry.sdk.cg.a;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ch extends com.flurry.sdk.bw {
				public static class: java.lang.Class<com.flurry.sdk.ch>;
				public b(): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public c(): string;
				public constructor(param0: com.flurry.sdk.co, param1: com.flurry.sdk.bw.a, param2: com.flurry.sdk.bz, param3: com.flurry.sdk.cj);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ci extends java.lang.Comparable<com.flurry.sdk.ci> {
				public static class: java.lang.Class<com.flurry.sdk.ci>;
				public b: number;
				public c: number;
				public a(param0: com.flurry.sdk.ci): void;
				public a(param0: string): com.flurry.sdk.bx;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: com.flurry.sdk.cf);
				public a(): java.util.Set<java.util.Map.Entry<string,com.flurry.sdk.bx>>;
				public toString(): string;
				public constructor(param0: com.flurry.sdk.ci);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cj extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cj>;
				public e(): number;
				public b(param0: java.util.List<com.flurry.sdk.ci>): boolean;
				public a(param0: string, param1: com.flurry.sdk.cf): com.flurry.sdk.bx;
				public a(): void;
				public a(param0: java.util.List<com.flurry.sdk.ci>): void;
				public c(): string;
				public a(param0: java.util.List<com.flurry.sdk.ci>, param1: boolean): boolean;
				public d(): java.util.List<com.flurry.sdk.cf>;
				public b(): java.util.List<com.flurry.sdk.ci>;
				public a(param0: com.flurry.sdk.cf): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ck extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ck>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cl extends com.flurry.sdk.co {
				public static class: java.lang.Class<com.flurry.sdk.cl>;
				public b(): void;
				public run(): void;
				public a(param0: string): boolean;
				public a(): java.io.InputStream;
				public c(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cm extends com.flurry.sdk.co {
				public static class: java.lang.Class<com.flurry.sdk.cm>;
				public b(): void;
				public run(): void;
				public a(param0: string): boolean;
				public a(): java.io.InputStream;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cn extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cn>;
				public static a(param0: string): string;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export abstract class co extends java.lang.Object implements java.lang.Runnable {
				public static class: java.lang.Class<com.flurry.sdk.co>;
				public b(): void;
				public run(): void;
				public e(): string;
				public h(): string;
				public a(param0: string): boolean;
				public d(): string;
				public g(): string;
				public f(): string;
				public a(): java.io.InputStream;
				public i(): com.flurry.sdk.cb;
				public c(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cp extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cp>;
				public static a(param0: android.content.Context, param1: string): com.flurry.sdk.co;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cq extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cq>;
				public static c(param0: android.content.Context): boolean;
				public static a(): boolean;
				public static a(param0: string): boolean;
				public static a(param0: android.content.Context): boolean;
				public static b(param0: string, param1: string, param2: string): boolean;
				public static b(param0: android.content.Context): string;
				public static a(param0: android.content.Context, param1: string): void;
				public static c(param0: string, param1: string, param2: string): boolean;
				public static a(param0: string, param1: string, param2: string): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cr extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cr>;
				public static a: java.util.Map<string,string>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cs extends com.flurry.sdk.cw<com.flurry.sdk.de> {
				public static class: java.lang.Class<com.flurry.sdk.cs>;
				public constructor(param0: string, param1: java.util.concurrent.TimeUnit, param2: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
				public a(param0: any, param1: any): void;
				public static a(): com.flurry.sdk.cs;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ct<K, V>  extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ct<any,any>>;
				public a(param0: K, param1: boolean): java.util.List<V>;
				public a(param0: K, param1: V): void;
				public a(): java.util.Collection<java.util.Map.Entry<K,V>>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cu extends java.util.Comparator<java.lang.Runnable> {
				public static class: java.lang.Class<com.flurry.sdk.cu>;
				public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
				public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static reverseOrder(): java.util.Comparator<any>;
				public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public compare(param0: any, param1: any): number;
				public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public constructor();
				public equals(obj: any): boolean;
				public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public reversed(): java.util.Comparator<any>;
				public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public equals(param0: any): boolean;
				public static naturalOrder(): java.util.Comparator<any>;
				public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cv<V>  extends java.util.concurrent.FutureTask<any> {
				public static class: java.lang.Class<com.flurry.sdk.cv<any>>;
				public run(): void;
				public constructor(callable: java.util.concurrent.Callable<any>);
				public constructor(param0: java.lang.Runnable, param1: any);
				public a(): java.lang.Runnable;
				public constructor(runnable: java.lang.Runnable, result: any);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cw<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cw<any>>;
				public constructor(param0: string, param1: java.util.concurrent.TimeUnit, param2: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
				public a(param0: any, param1: T): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cx extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cx>;
				public static a(): void;
				public static d(param0: string, param1: string, param2: java.lang.Throwable): void;
				public static b(param0: string, param1: string, param2: java.lang.Throwable): void;
				public static a(param0: boolean): void;
				public static a(param0: number, param1: string, param2: string, param3: java.lang.Throwable): void;
				public static d(param0: string, param1: string): void;
				public static c(param0: string, param1: string): void;
				public static a(param0: string, param1: string): void;
				public static b(param0: string, param1: string): void;
				public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
				public static e(param0: string, param1: string): void;
				public static a(param0: number): void;
				public static c(param0: string, param1: string, param2: java.lang.Throwable): void;
				public static a(param0: number, param1: string, param2: string): void;
				public static b(): void;
				public static a(param0: string, param1: string, param2: java.lang.Throwable): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cy extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.cy>;
				public constructor(param0: java.lang.Class<any>);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class cz extends java.lang.Exception {
				public static class: java.lang.Class<com.flurry.sdk.cz>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class d extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.d>;
				public static d(): void;
				public static b(): string;
				public static c(): boolean;
				public static a(param0: number): void;
				public static a(): number;
				public static a(param0: boolean): void;
				public static b(param0: string): void;
				public static c(param0: string): void;
				public static a(param0: string): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class da extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.da>;
				public static a(): void;
				public static a(param0: string): boolean;
				public static c(): void;
				public static a(param0: com.flurry.sdk.db): void;
				public static a(param0: java.lang.Class<any>): void;
				public static b(): void;
				public static a(param0: android.content.Context): void;
				public static b(param0: android.content.Context): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class db extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.db>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.db interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: android.content.Context): void;
					destroy(): void;
				});
				public constructor();
				public destroy(): void;
				public init(param0: android.content.Context): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dc<RequestObjectType, ResponseObjectType>  extends com.flurry.sdk.de {
				public static class: java.lang.Class<com.flurry.sdk.dc<any,any>>;
				public b: any;
				public c: com.flurry.sdk.dr<any>;
				public d: com.flurry.sdk.dr<any>;
				public a(param0: com.flurry.sdk.de.b): void;
				public a(param0: string, param1: string): void;
				public run(): void;
				public a(): void;
				public constructor();
			}
			export module dc {
				export class a<RequestObjectType, ResponseObjectType>  extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.dc.a<any,any>>;
					/**
					 * Constructs a new instance of the com.flurry.sdk.dc$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: com.flurry.sdk.dc<RequestObjectType,ResponseObjectType>, param1: ResponseObjectType): void;
					});
					public constructor();
					public a(param0: com.flurry.sdk.dc<RequestObjectType,ResponseObjectType>, param1: ResponseObjectType): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dd extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.dd>;
				public constructor(param0: com.flurry.sdk.de);
				public a(): void;
				public a(param0: number): void;
			}
			export module dd {
				export class a extends java.util.TimerTask {
					public static class: java.lang.Class<com.flurry.sdk.dd.a>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class de extends com.flurry.sdk.eb {
				public static class: java.lang.Class<com.flurry.sdk.de>;
				public f: string;
				public g: com.flurry.sdk.de.a;
				public l: number;
				public m: boolean;
				public a(param0: com.flurry.sdk.de.b): void;
				public a(param0: string, param1: string): void;
				public run(): void;
				public a(): void;
				public c(): boolean;
				public constructor();
			}
			export module de {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.de.a>;
					public static a: com.flurry.sdk.de.a;
					public static b: com.flurry.sdk.de.a;
					public static c: com.flurry.sdk.de.a;
					public static d: com.flurry.sdk.de.a;
					public static e: com.flurry.sdk.de.a;
					public static f: com.flurry.sdk.de.a;
					public static valueOf(param0: string): com.flurry.sdk.de.a;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.de.a[];
				}
				export class b extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.de.b>;
					/**
					 * Constructs a new instance of the com.flurry.sdk.de$b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: java.io.OutputStream): void;
						a(param0: java.io.InputStream): void;
						a(): void;
					});
					public constructor();
					public a(param0: java.io.InputStream): void;
					public a(param0: java.io.OutputStream): void;
					public a(): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class df extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.df>;
				public static a(param0: javax.net.ssl.HttpsURLConnection): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dg extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.dg>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dh extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.dh>;
				public a(param0: android.content.Context, param1: string, param2: string, param3: string, param4: string): void;
				public b(): void;
				public c(): void;
				public static a(): com.flurry.sdk.dh;
				public a(param0: android.content.Context, param1: android.database.Cursor): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class di extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.di>;
				public static a(param0: string, param1: string, param2: number, param3: string, param4: number): void;
			}
			export module di {
				export class a extends okhttp3.EventListener {
					public static class: java.lang.Class<com.flurry.sdk.di.a>;
					public dnsEnd(param0: okhttp3.Call, param1: string, param2: java.util.List<java.net.InetAddress>): void;
					public connectEnd(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol): void;
					public constructor(param0: string);
					public callFailed(param0: okhttp3.Call, param1: java.io.IOException): void;
					public requestHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Request): void;
					public dnsStart(param0: okhttp3.Call, param1: string): void;
					public responseHeadersStart(param0: okhttp3.Call): void;
					public connectStart(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy): void;
					public requestHeadersStart(param0: okhttp3.Call): void;
					public requestBodyEnd(param0: okhttp3.Call, param1: number): void;
					public responseBodyEnd(param0: okhttp3.Call, param1: number): void;
					public constructor();
					public responseBodyStart(param0: okhttp3.Call): void;
					public callStart(param0: okhttp3.Call): void;
					public setId(param0: string): void;
					public callEnd(param0: okhttp3.Call): void;
					public requestBodyStart(param0: okhttp3.Call): void;
					public responseHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Response): void;
				}
				export module a {
					export class a extends java.lang.Object implements okhttp3.EventListener.Factory {
						public static class: java.lang.Class<com.flurry.sdk.di.a.a>;
						public setId(param0: string): void;
						public create(param0: okhttp3.Call): com.flurry.sdk.di.a;
						public create(param0: okhttp3.Call): okhttp3.EventListener;
						public constructor(param0: string);
					}
				}
				export class b extends java.lang.Object implements okhttp3.Interceptor {
					public static class: java.lang.Class<com.flurry.sdk.di.b>;
					public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
					public constructor(param0: string);
					public setId(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dj extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.dj>;
				public a(param0: com.flurry.sdk.dj.a): void;
				public static a(): com.flurry.sdk.dj;
				public a(param0: android.content.Context, param1: android.database.Cursor): void;
			}
			export module dj {
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.dj.a>;
					/**
					 * Constructs a new instance of the com.flurry.sdk.dj$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: android.app.Activity): void;
						b(param0: android.app.Activity): void;
						a(): void;
						c(param0: android.app.Activity): void;
					});
					public constructor();
					public a(param0: android.app.Activity): void;
					public b(param0: android.app.Activity): void;
					public a(): void;
					public c(param0: android.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dk extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.dk>;
				public static a(): void;
				public static b(): boolean;
				public static c(): boolean;
				public static a(param0: android.content.Context): android.app.ActivityManager.MemoryInfo;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dl extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.dl>;
				public a: number;
				public b: number;
				public c: number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dm extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.dm>;
				public c: boolean;
				public b(): void;
				public static a(): com.flurry.sdk.dm;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dn extends com.flurry.sdk.dr<number[]> {
				public static class: java.lang.Class<com.flurry.sdk.dn>;
				public a(param0: java.io.OutputStream, param1: any): void;
				public a(param0: java.io.InputStream): any;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class do<ObjectType>  extends com.flurry.sdk.dr<any> {
				public static class: java.lang.Class<com.flurry.sdk.do<any>>;
				public a(param0: java.io.OutputStream, param1: any): void;
				public constructor(param0: com.flurry.sdk.dr<any>);
				public a(param0: java.io.InputStream): any;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dp<ObjectType>  extends com.flurry.sdk.do<any> {
				public static class: java.lang.Class<com.flurry.sdk.dp<any>>;
				public a(param0: java.io.OutputStream, param1: any): void;
				public constructor(param0: com.flurry.sdk.dr<any>);
				public a(param0: java.io.InputStream): any;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dq<T>  extends com.flurry.sdk.dr<java.util.List<any>> {
				public static class: java.lang.Class<com.flurry.sdk.dq<any>>;
				public a(param0: java.io.OutputStream, param1: any): void;
				public constructor(param0: com.flurry.sdk.dr<any>);
				public a(param0: java.io.InputStream): any;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dr<ObjectType>  extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.dr<any>>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.dr<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: java.io.OutputStream, param1: ObjectType): void;
					a(param0: java.io.InputStream): ObjectType;
				});
				public constructor();
				public a(param0: java.io.InputStream): ObjectType;
				public a(param0: java.io.OutputStream, param1: ObjectType): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ds extends com.flurry.sdk.dr<string> {
				public static class: java.lang.Class<com.flurry.sdk.ds>;
				public a(param0: java.io.OutputStream, param1: any): void;
				public a(param0: java.io.InputStream): any;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dt<T>  extends com.flurry.sdk.dr<any> {
				public static class: java.lang.Class<com.flurry.sdk.dt<any>>;
				public a(param0: java.io.OutputStream, param1: any): void;
				public a(param0: java.io.InputStream): any;
				public constructor(param0: string, param1: number, param2: com.flurry.sdk.du<any>);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class du<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.du<any>>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.du<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: number): com.flurry.sdk.dr<T>;
				});
				public constructor();
				public a(param0: number): com.flurry.sdk.dr<T>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dv extends java.lang.Object implements java.util.concurrent.ThreadFactory {
				public static class: java.lang.Class<com.flurry.sdk.dv>;
				public newThread(param0: java.lang.Runnable): java.lang.Thread;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dw extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.dw>;
				public static b(param0: android.content.Context): android.content.pm.PackageInfo;
				public static c(param0: android.content.Context): number;
				public static a(param0: android.content.Context): string;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dx extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.dx>;
				public static b(): java.io.File;
				public static a(param0: java.io.File, param1: string): void;
				public static a(): java.io.File;
				public static a(param0: java.io.File): boolean;
				public static a(param0: java.io.File, param1: java.util.regex.Pattern): string[];
				public static b(param0: java.io.File): boolean;
				public static c(param0: java.io.File): string;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dy extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.dy>;
				public static a(): void;
				public static a(param0: string): string;
				public static a(param0: number, param1: string, param2: string, param3: boolean): void;
				public static a(param0: java.io.Closeable): void;
				public static c(param0: string): number[];
				public static b(param0: string): string;
				public static a(param0: string, param1: string): boolean;
				public static d(param0: string): string;
				public static a(param0: number): boolean;
				public static a(param0: java.io.InputStream, param1: java.io.OutputStream): number;
				public static a(param0: number[]): string;
				public static e(param0: string): number;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class dz extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.dz>;
				public static a(param0: java.util.Map<string,string>): org.json.JSONObject;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class e extends com.flurry.sdk.g {
				public static class: java.lang.Class<com.flurry.sdk.e>;
				public constructor(param0: java.util.concurrent.Executor, param1: string);
				public onActive(param0: com.flurry.sdk.h.a): boolean;
				public runAfter(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<java.lang.Void>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export abstract class ea extends java.lang.Object implements java.lang.Runnable {
				public static class: java.lang.Class<com.flurry.sdk.ea>;
				public run(): void;
				public a(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export abstract class eb extends com.flurry.sdk.ea {
				public static class: java.lang.Class<com.flurry.sdk.eb>;
				public o: number;
				public run(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ec extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ec>;
				public static a(param0: android.content.Context): boolean;
				public static a(param0: android.content.Context, param1: androidx.browser.customtabs.CustomTabsIntent, param2: android.net.Uri, param3: com.flurry.sdk.ec.a): void;
			}
			export module ec {
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.ec.a>;
					/**
					 * Constructs a new instance of the com.flurry.sdk.ec$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: android.content.Context): void;
					});
					public constructor();
					public a(param0: android.content.Context): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ed extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ed>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export abstract class ee extends com.flurry.android.Consent {
				public static class: java.lang.Class<com.flurry.sdk.ee>;
				public isLICNEnabled(): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: boolean, param1: boolean, param2: java.util.Map<string,string>);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ef extends com.flurry.sdk.f {
				public static class: java.lang.Class<com.flurry.sdk.ef>;
				public static a(param0: com.flurry.android.FlurryPrivacySession.Request): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class eg extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.eg>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.eg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module eg {
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.eg.a>;
					/**
					 * Constructs a new instance of the com.flurry.sdk.eg$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						"<clinit>"(): void;
					});
					public constructor();
					public static e: string;
					public static d: string;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class eh extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.eh>;
			}
			export module eh {
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.eh.a>;
					public static a(param0: string): java.security.MessageDigest;
				}
				export class b extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.eh.b>;
					public static a(): string;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ei extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ei>;
				public static a(): void;
				public static a(param0: java.util.List<com.flurry.android.FlurryModule>): void;
				public static b(): void;
				public static a(param0: android.content.Context): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class eq extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.eq>;
				public static a(param0: com.flurry.sdk.eq.a): com.flurry.sdk.e;
			}
			export module eq {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.eq.a>;
					public static a: com.flurry.sdk.eq.a;
					public static b: com.flurry.sdk.eq.a;
					public static c: com.flurry.sdk.eq.a;
					public static d: com.flurry.sdk.eq.a;
					public static e: com.flurry.sdk.eq.a;
					public static f: com.flurry.sdk.eq.a;
					public static g: com.flurry.sdk.eq.a;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(param0: string): com.flurry.sdk.eq.a;
					public static values(): com.flurry.sdk.eq.a[];
				}
				export class b extends java.lang.Object implements java.util.concurrent.RejectedExecutionHandler {
					public static class: java.lang.Class<com.flurry.sdk.eq.b>;
					public rejectedExecution(param0: java.lang.Runnable, param1: java.util.concurrent.ThreadPoolExecutor): void;
				}
				export class c extends java.lang.Object implements java.util.concurrent.ThreadFactory {
					public static class: java.lang.Class<com.flurry.sdk.eq.c>;
					public newThread(param0: java.lang.Runnable): java.lang.Thread;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class er extends com.flurry.sdk.f implements com.flurry.sdk.jk {
				public static class: java.lang.Class<com.flurry.sdk.er>;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public a(param0: java.util.List<string>): void;
				public a(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class es extends com.flurry.sdk.f implements com.flurry.sdk.jk {
				public static class: java.lang.Class<com.flurry.sdk.es>;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public a(param0: java.util.List<string>): void;
				public a(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class et extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.et>;
				public static a(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class eu extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.eu>;
				public c: com.flurry.sdk.jo;
				public d: com.flurry.sdk.jk;
				public a(param0: com.flurry.sdk.jj): void;
				public static a(): com.flurry.sdk.eu;
				public static b(): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ev extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ev>;
				public static a: string;
			}
			export module ev {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.ev.a>;
					public static a: com.flurry.sdk.ev.a;
					public static b: com.flurry.sdk.ev.a;
					public static c: com.flurry.sdk.ev.a;
					public d: number;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.ev.a[];
					public static valueOf(param0: string): com.flurry.sdk.ev.a;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ew extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ew>;
				public static a(param0: string): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ex extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ex>;
				public static a(param0: string, param1: string): void;
				public static a(param0: string): boolean;
				public static b(param0: string, param1: string): string;
				public static b(param0: string): void;
				public static b(param0: string, param1: number): number;
				public static a(param0: string, param1: number): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ey extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ey>;
				public static a(): boolean;
				public static d(): string;
				public static a(param0: string): boolean;
				public static b(param0: string): boolean;
				public static c(): string;
				public static b(): string;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ez extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ez>;
				public static a(...param0: any[]): boolean;
				public static a(...param0: string[]): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class f extends com.flurry.sdk.i {
				public static class: java.lang.Class<com.flurry.sdk.f>;
				public wrapRunnable(param0: java.lang.Runnable): boolean;
				public runSync(param0: java.lang.Runnable): void;
				public postOnMainThread(param0: java.lang.Runnable): void;
				public createDeferredQueue(param0: string): com.flurry.sdk.f.a;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public flush(param0: java.lang.Runnable): void;
				public static currentActor(): com.flurry.sdk.f;
				public runAsync(param0: java.lang.Runnable): java.util.concurrent.Future<java.lang.Void>;
				public runAfter(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<java.lang.Void>;
			}
			export module f {
				export class a extends com.flurry.sdk.h {
					public static class: java.lang.Class<com.flurry.sdk.f.a>;
					public cleanupTask(param0: java.lang.Runnable): void;
					public runAfter(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<java.lang.Void>;
					public runAsync(param0: java.lang.Runnable): java.util.concurrent.Future<java.lang.Void>;
					public constructor(param0: com.flurry.sdk.f, param1: string, param2: com.flurry.sdk.f);
					public runSync(param0: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fa extends java.util.Comparator<string> {
				public static class: java.lang.Class<com.flurry.sdk.fa>;
				public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
				public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static reverseOrder(): java.util.Comparator<any>;
				public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public compare(param0: any, param1: any): number;
				public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public constructor();
				public equals(obj: any): boolean;
				public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public reversed(): java.util.Comparator<any>;
				public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
				public equals(param0: any): boolean;
				public static naturalOrder(): java.util.Comparator<any>;
				public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
				public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fb extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.fb>;
				public a(param0: com.flurry.sdk.jj): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fc extends com.flurry.sdk.fk {
				public static class: java.lang.Class<com.flurry.sdk.fc>;
				public c(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
				public b(): void;
				public c(): void;
				public a(): void;
				public a(param0: com.flurry.sdk.fg): void;
				public a(param0: com.flurry.sdk.jj): void;
				public b(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fd extends com.flurry.sdk.fk {
				public static class: java.lang.Class<com.flurry.sdk.fd>;
				public b: java.util.Map<string,java.util.List<com.flurry.sdk.jj>>;
				public d: com.flurry.sdk.be.b;
				public c(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
				public b(): void;
				public c(): void;
				public a(): void;
				public a(param0: com.flurry.sdk.fg): void;
				public a(param0: com.flurry.sdk.jj): void;
				public b(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fe extends com.flurry.sdk.fk {
				public static class: java.lang.Class<com.flurry.sdk.fe>;
				public b(): void;
				public c(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
				public c(): void;
				public a(): void;
				public a(param0: com.flurry.sdk.fg): void;
				public a(param0: com.flurry.sdk.jj): void;
				public b(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
			}
			export module fe {
				export class a extends java.util.TimerTask {
					public static class: java.lang.Class<com.flurry.sdk.fe.a>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ff extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ff>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.ff interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.flurry.sdk.fg): void;
					c(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
					b(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
					b(): void;
				});
				public constructor();
				public c(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
				public b(): void;
				public a(param0: com.flurry.sdk.fg): void;
				public b(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
			}
			export module ff {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.ff.a>;
					public static a: com.flurry.sdk.ff.a;
					public static b: com.flurry.sdk.ff.a;
					public static c: com.flurry.sdk.ff.a;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(param0: string): com.flurry.sdk.ff.a;
					public static values(): com.flurry.sdk.ff.a[];
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fg extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.fg>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.fg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(): void;
				});
				public constructor();
				public a(): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fh extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.fh>;
				public c: com.flurry.sdk.fi;
				public d: com.flurry.sdk.fd;
				public e: com.flurry.sdk.fe;
				public b(): void;
				public a(): void;
				public a(param0: com.flurry.sdk.jj): void;
				public b(param0: com.flurry.sdk.jj): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fi extends com.flurry.sdk.fk {
				public static class: java.lang.Class<com.flurry.sdk.fi>;
				public b(): void;
				public c(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
				public c(): void;
				public a(): void;
				public a(param0: com.flurry.sdk.fg): void;
				public a(param0: com.flurry.sdk.jj): void;
				public b(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fj extends com.flurry.sdk.fk {
				public static class: java.lang.Class<com.flurry.sdk.fj>;
				public static b: com.flurry.sdk.jh[];
				public c(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
				public b(): void;
				public c(): void;
				public a(): void;
				public a(param0: com.flurry.sdk.fg): void;
				public a(param0: com.flurry.sdk.jj): void;
				public b(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export abstract class fk extends com.flurry.sdk.f implements com.flurry.sdk.ff {
				public static class: java.lang.Class<com.flurry.sdk.fk>;
				public f: java.util.Queue<com.flurry.sdk.jj>;
				public g: com.flurry.sdk.fg;
				public c(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
				public b(): void;
				public c(): void;
				public a(): void;
				public a(param0: com.flurry.sdk.fg): void;
				public d(): void;
				public a(param0: com.flurry.sdk.jj): void;
				public b(param0: com.flurry.sdk.jj): com.flurry.sdk.ff.a;
				public d(param0: com.flurry.sdk.jj): void;
			}
			export module fk {
				export class a extends java.lang.Object implements com.flurry.sdk.fg {
					public static class: java.lang.Class<com.flurry.sdk.fk.a>;
					public a(): void;
				}
				export class b {
					public static class: java.lang.Class<com.flurry.sdk.fk.b>;
					public static a: number;
					public static b: number;
					public static c: number;
					public static d: number;
					public static e: number;
					public static values$5c44524b(): number[];
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fl extends java.lang.Object implements com.flurry.sdk.fn {
				public static class: java.lang.Class<com.flurry.sdk.fl>;
				public a(param0: com.flurry.sdk.jj): com.flurry.sdk.fn.a;
				public a(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fm extends java.lang.Object implements com.flurry.sdk.fn {
				public static class: java.lang.Class<com.flurry.sdk.fm>;
				public a(param0: com.flurry.sdk.jj): com.flurry.sdk.fn.a;
				public a(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fn extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.fn>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.fn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.flurry.sdk.jj): com.flurry.sdk.fn.a;
					a(): void;
					"<clinit>"(): void;
				});
				public constructor();
				public static e: com.flurry.sdk.fn.a;
				public static d: com.flurry.sdk.fn.a;
				public static g: com.flurry.sdk.fn.a;
				public static f: com.flurry.sdk.fn.a;
				public static c: com.flurry.sdk.fn.a;
				public static b: com.flurry.sdk.fn.a;
				public static m: com.flurry.sdk.fn.a;
				public static l: com.flurry.sdk.fn.a;
				public static i: com.flurry.sdk.fn.a;
				public static h: com.flurry.sdk.fn.a;
				public static k: com.flurry.sdk.fn.a;
				public static j: com.flurry.sdk.fn.a;
				public a(param0: com.flurry.sdk.jj): com.flurry.sdk.fn.a;
				public a(): void;
			}
			export module fn {
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.fn.a>;
					public a: com.flurry.sdk.fn.b;
					public b: com.flurry.sdk.jj;
				}
				export class b {
					public static class: java.lang.Class<com.flurry.sdk.fn.b>;
					public static a: com.flurry.sdk.fn.b;
					public static b: com.flurry.sdk.fn.b;
					public static c: com.flurry.sdk.fn.b;
					public static d: com.flurry.sdk.fn.b;
					public static e: com.flurry.sdk.fn.b;
					public static f: com.flurry.sdk.fn.b;
					public static g: com.flurry.sdk.fn.b;
					public static h: com.flurry.sdk.fn.b;
					public static i: com.flurry.sdk.fn.b;
					public static j: com.flurry.sdk.fn.b;
					public static k: com.flurry.sdk.fn.b;
					public static l: com.flurry.sdk.fn.b;
					public static m: com.flurry.sdk.fn.b;
					public n: string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.fn.b[];
					public static valueOf(param0: string): com.flurry.sdk.fn.b;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fo extends java.lang.Object implements com.flurry.sdk.fn {
				public static class: java.lang.Class<com.flurry.sdk.fo>;
				public a(param0: com.flurry.sdk.jj): com.flurry.sdk.fn.a;
				public a(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fp extends java.lang.Object implements com.flurry.sdk.fn {
				public static class: java.lang.Class<com.flurry.sdk.fp>;
				public static n: java.util.Set<string>;
				public a(param0: com.flurry.sdk.jj): com.flurry.sdk.fn.a;
				public a(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fq extends java.lang.Object implements com.flurry.sdk.fn {
				public static class: java.lang.Class<com.flurry.sdk.fq>;
				public a(param0: com.flurry.sdk.jj): com.flurry.sdk.fn.a;
				public a(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fr extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.fr>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.fr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.flurry.sdk.jj): void;
					b(param0: com.flurry.sdk.jj): void;
					a(param0: java.lang.Runnable): void;
				});
				public constructor();
				public a(param0: java.lang.Runnable): void;
				public a(param0: com.flurry.sdk.jj): void;
				public b(param0: com.flurry.sdk.jj): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fs extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.fs>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.fs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: com.flurry.sdk.jj): void;
					a(): void;
				});
				public constructor();
				public a(): void;
				public a(param0: com.flurry.sdk.jj): void;
			}
			export module fs {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.fs.a>;
					public static a: com.flurry.sdk.fs.a;
					public static b: com.flurry.sdk.fs.a;
					public static c: com.flurry.sdk.fs.a;
					public static d: com.flurry.sdk.fs.a;
					public static e: com.flurry.sdk.fs.a;
					public static f: com.flurry.sdk.fs.a;
					public static g: com.flurry.sdk.fs.a;
					public static h: com.flurry.sdk.fs.a;
					public static i: com.flurry.sdk.fs.a;
					public j: string;
					public static valueOf(param0: string): com.flurry.sdk.fs.a;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.fs.a[];
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ft extends java.lang.Object implements com.flurry.sdk.fs {
				public static class: java.lang.Class<com.flurry.sdk.ft>;
				public constructor(param0: com.flurry.sdk.fr);
				public a(): void;
				public a(param0: com.flurry.sdk.jj): void;
			}
			export module ft {
				export class a extends java.util.TimerTask {
					public static class: java.lang.Class<com.flurry.sdk.ft.a>;
					public constructor();
					public run(): void;
					public constructor(param0: com.flurry.sdk.ft);
				}
				export class b {
					public static class: java.lang.Class<com.flurry.sdk.ft.b>;
					public static a: com.flurry.sdk.ft.b;
					public static b: com.flurry.sdk.ft.b;
					public static c: com.flurry.sdk.ft.b;
					public static d: com.flurry.sdk.ft.b;
					public static e: com.flurry.sdk.ft.b;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.ft.b[];
					public static valueOf(param0: string): com.flurry.sdk.ft.b;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fu extends com.flurry.sdk.f {
				public static class: java.lang.Class<com.flurry.sdk.fu>;
				public a(param0: string, param1: string): boolean;
				public b(): void;
				public static c(): boolean;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public a(): void;
				public a(param0: com.flurry.sdk.jj, param1: com.flurry.sdk.fu.a): void;
				public a(param0: com.flurry.sdk.jj): void;
				public constructor();
			}
			export module fu {
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.fu.a>;
					/**
					 * Constructs a new instance of the com.flurry.sdk.fu$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(): void;
					});
					public constructor();
					public a(): void;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fv extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.fv>;
				public static a(param0: java.io.File): com.flurry.sdk.be.c;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fw extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.fw>;
				public a(param0: com.flurry.sdk.jj): number[];
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fx extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.fx>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fy extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.fy>;
				public constructor(param0: java.lang.Long);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class fz extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.fz>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class g extends com.flurry.sdk.i {
				public static class: java.lang.Class<com.flurry.sdk.g>;
				public runSync(param0: java.lang.Runnable): void;
				public runAsync(param0: java.lang.Runnable): java.util.concurrent.Future<java.lang.Void>;
				public runAfter(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<java.lang.Void>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ga extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.ga>;
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gb extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gb>;
				public d(): number;
				public e(): string;
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public static a(param0: java.util.List<com.flurry.sdk.ci>): void;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gc extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.gc>;
				public constructor(param0: java.util.List<com.flurry.sdk.gc.a>);
				public a(): org.json.JSONObject;
				public constructor();
			}
			export module gc {
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.flurry.sdk.gc.a>;
					public a: number;
					public b: number;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gd extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gd>;
				public d(): number;
				public e(): string;
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public static b(): java.util.concurrent.atomic.AtomicInteger;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public static a(param0: com.flurry.sdk.aa): com.flurry.android.FlurryEventRecordStatus;
				public h(): boolean;
				public static a(param0: com.flurry.sdk.ge): com.flurry.sdk.gd;
			}
			export module gd {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.gd.a>;
					public static a: com.flurry.sdk.gd.a;
					public static b: com.flurry.sdk.gd.a;
					public static c: com.flurry.sdk.gd.a;
					public d: number;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.gd.a[];
					public static valueOf(param0: string): com.flurry.sdk.gd.a;
				}
				export class b {
					public static class: java.lang.Class<com.flurry.sdk.gd.b>;
					public static a: com.flurry.sdk.gd.b;
					public static b: com.flurry.sdk.gd.b;
					public static c: com.flurry.sdk.gd.b;
					public d: number;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.gd.b[];
					public static valueOf(param0: string): com.flurry.sdk.gd.b;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ge extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.ge>;
				public b: string;
				public c: number;
				public d: string;
				public e: string;
				public f: string;
				public g: number;
				public h: number;
				public i: string;
				public j: string;
				public k: java.util.Map<string,string>;
				public l: java.util.Map<string,string>;
				public m: number;
				public n: java.util.List<com.flurry.sdk.v>;
				public a(): org.json.JSONObject;
				public constructor(param0: number, param1: string, param2: number, param3: string, param4: string, param5: string, param6: number, param7: number, param8: java.util.Map<string,string>, param9: java.util.Map<string,string>, param10: number, param11: java.util.List<com.flurry.sdk.v>, param12: string, param13: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gf extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gf>;
				public static a(param0: string, param1: com.flurry.sdk.gg.a, param2: java.util.Map<string,string>, param3: number, param4: number): com.flurry.android.FlurryEventRecordStatus;
				public d(): number;
				public static a(param0: string, param1: com.flurry.sdk.gg.a, param2: java.util.Map<string,string>, param3: boolean, param4: boolean, param5: string, param6: number, param7: number): com.flurry.android.FlurryEventRecordStatus;
				public e(): string;
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public static a(param0: number, param1: java.util.List<any>, param2: java.util.Map<string,string>, param3: number, param4: number): com.flurry.android.FlurryEventRecordStatus;
				public h(): boolean;
				public static a(param0: string, param1: number, param2: java.util.Map<string,string>, param3: java.util.Map<string,string>, param4: string, param5: number, param6: number): com.flurry.sdk.gf;
				public static a(param0: string, param1: string, param2: number, param3: number, param4: string, param5: string, param6: java.util.Map<string,string>, param7: number, param8: number): com.flurry.android.FlurryEventRecordStatus;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gg extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.gg>;
				public b: number;
				public c: com.flurry.sdk.gg.a;
				public d: java.util.Map<string,string>;
				public e: java.util.Map<string,string>;
				public f: boolean;
				public g: boolean;
				public h: string;
				public i: number;
				public j: number;
				public k: number;
				public constructor(param0: string, param1: number, param2: com.flurry.sdk.gg.a, param3: java.util.Map<string,string>, param4: java.util.Map<string,string>, param5: boolean, param6: boolean, param7: string, param8: number, param9: number, param10: number);
				public a(): org.json.JSONObject;
				public constructor(param0: string, param1: number, param2: com.flurry.sdk.gg.a, param3: java.util.Map<string,string>, param4: java.util.Map<string,string>, param5: java.util.List<string>, param6: boolean, param7: boolean, param8: string, param9: number, param10: number);
				public constructor();
			}
			export module gg {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.gg.a>;
					public static a: com.flurry.sdk.gg.a;
					public static b: com.flurry.sdk.gg.a;
					public static c: com.flurry.sdk.gg.a;
					public static d: com.flurry.sdk.gg.a;
					public static e: com.flurry.sdk.gg.a;
					public static f: com.flurry.sdk.gg.a;
					public static g: com.flurry.sdk.gg.a;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.gg.a[];
					public static valueOf(param0: string): com.flurry.sdk.gg.a;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gh extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gh>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gi extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.gi>;
				public b: boolean;
				public a(): org.json.JSONObject;
				public constructor(param0: number, param1: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gj extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gj>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gk extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.gk>;
				public a(): org.json.JSONObject;
				public constructor(param0: number);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gl extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gl>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
				public constructor(param0: com.flurry.sdk.gm);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gm extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.gm>;
				public b: string;
				public a(): org.json.JSONObject;
				public constructor(param0: string, param1: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gn extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gn>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class go extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.go>;
				public b: string;
				public c: string;
				public d: string;
				public e: string;
				public f: string;
				public g: string;
				public h: number;
				public a(): org.json.JSONObject;
				public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: number);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gp extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gp>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gq extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.gq>;
				public a(): org.json.JSONObject;
				public constructor(param0: number);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gr extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gr>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gs extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.gs>;
				public b: number;
				public c: number;
				public d: number;
				public e: com.flurry.sdk.bc;
				public f: boolean;
				public a(): org.json.JSONObject;
				public constructor(param0: com.flurry.sdk.ba);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gt extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gt>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gu extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.gu>;
				public b: string;
				public a(): org.json.JSONObject;
				public constructor(param0: string, param1: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gv extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gv>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gw extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.gw>;
				public b: string;
				public a(): org.json.JSONObject;
				public constructor(param0: string, param1: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gx extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gx>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public static a(param0: com.flurry.sdk.bf): java.util.Map<string,java.util.Map<string,string>>;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gy extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.gy>;
				public constructor(param0: java.util.Map<string,java.util.Map<string,string>>);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class gz extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.gz>;
				public constructor(param0: com.flurry.sdk.ha);
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export abstract class h extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.h>;
				public description: string;
				public target: com.flurry.sdk.h;
				public concurrent: boolean;
				public syncFlush: boolean;
				public wrapNextRunnable(param0: java.lang.Runnable): boolean;
				public wrapRunnable(param0: java.lang.Runnable): boolean;
				public cleanupTask(param0: java.lang.Runnable): void;
				public runSync(param0: java.lang.Runnable): void;
				public flush(param0: java.lang.Runnable): void;
				public runAsync(param0: java.lang.Runnable): java.util.concurrent.Future<java.lang.Void>;
				public runAfter(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<java.lang.Void>;
			}
			export module h {
				export class a extends java.util.concurrent.FutureTask<java.lang.Void> {
					public static class: java.lang.Class<com.flurry.sdk.h.a>;
					public b: com.flurry.sdk.h;
					public a(param0: java.util.TimerTask): void;
					public run(): void;
					public a(): boolean;
					public cancel(param0: boolean): boolean;
					public cancel(mayInterruptIfRunning: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ha extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.ha>;
				public a(): org.json.JSONObject;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hb extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.hb>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hc extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.hc>;
				public a(): org.json.JSONObject;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hd extends com.flurry.sdk.o<com.flurry.sdk.r> {
				public static class: java.lang.Class<com.flurry.sdk.hd>;
				public a(param0: any): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class he extends com.flurry.sdk.o<com.flurry.sdk.s> {
				public static class: java.lang.Class<com.flurry.sdk.he>;
				public a(param0: any): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hf extends com.flurry.sdk.o<com.flurry.android.Consent> {
				public static class: java.lang.Class<com.flurry.sdk.hf>;
				public a(param0: any): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hg extends com.flurry.sdk.o<com.flurry.sdk.aa> {
				public static class: java.lang.Class<com.flurry.sdk.hg>;
				public a(param0: any): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hh extends com.flurry.sdk.o<com.flurry.sdk.ak> {
				public static class: java.lang.Class<com.flurry.sdk.hh>;
				public a(param0: any): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hi extends com.flurry.sdk.o<com.flurry.sdk.ao> {
				public static class: java.lang.Class<com.flurry.sdk.hi>;
				public a(param0: any): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hj extends com.flurry.sdk.o<com.flurry.sdk.aq> {
				public static class: java.lang.Class<com.flurry.sdk.hj>;
				public a(param0: any): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hk extends com.flurry.sdk.o<com.flurry.sdk.as> {
				public static class: java.lang.Class<com.flurry.sdk.hk>;
				public a(param0: any): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hl extends com.flurry.sdk.o<com.flurry.sdk.au> {
				public static class: java.lang.Class<com.flurry.sdk.hl>;
				public a(param0: any): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hm extends com.flurry.sdk.o<com.flurry.sdk.aw> {
				public static class: java.lang.Class<com.flurry.sdk.hm>;
				public a(param0: any): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hn extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.hn>;
				public c: com.flurry.sdk.hp;
				public d: com.flurry.sdk.hg;
				public e: com.flurry.sdk.hh;
				public f: com.flurry.sdk.hi;
				public g: com.flurry.sdk.hj;
				public h: com.flurry.sdk.hk;
				public i: com.flurry.sdk.hl;
				public j: com.flurry.sdk.hm;
				public k: com.flurry.sdk.hq;
				public l: com.flurry.sdk.hs;
				public m: com.flurry.sdk.hf;
				public n: com.flurry.sdk.hr;
				public o: com.flurry.sdk.ho;
				public p: com.flurry.sdk.he;
				public static a(): com.flurry.sdk.hn;
				public static b(): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ho extends com.flurry.sdk.o<com.flurry.sdk.ay> {
				public static class: java.lang.Class<com.flurry.sdk.ho>;
				public a(param0: any): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hp extends com.flurry.sdk.o<com.flurry.sdk.ba> {
				public static class: java.lang.Class<com.flurry.sdk.hp>;
				public a(param0: any): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hq extends com.flurry.sdk.o<com.flurry.sdk.ad> {
				public static class: java.lang.Class<com.flurry.sdk.hq>;
				public a(param0: any): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hr extends com.flurry.sdk.o<com.flurry.sdk.bf> {
				public static class: java.lang.Class<com.flurry.sdk.hr>;
				public a(param0: any): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hs extends com.flurry.sdk.o<string> {
				public static class: java.lang.Class<com.flurry.sdk.hs>;
				public a(param0: any): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ht extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.ht>;
				public d(): number;
				public e(): string;
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
				public static b(): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hu extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.hu>;
				public b: string;
				public c: string;
				public d: string;
				public e: number;
				public constructor(param0: string, param1: string, param2: string, param3: string);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hv extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.hv>;
				public d(): number;
				public e(): string;
				public static a(param0: number): void;
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hw extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.hw>;
				public a(): org.json.JSONObject;
				public constructor(param0: number);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hx extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.hx>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hy extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.hy>;
				public b: number;
				public constructor(param0: number, param1: number);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class hz extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.hz>;
				public d(): number;
				public e(): string;
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public static a(param0: boolean): void;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class i extends com.flurry.sdk.h {
				public static class: java.lang.Class<com.flurry.sdk.i>;
				public wrapRunnable(param0: java.lang.Runnable): boolean;
				public cleanupTask(param0: java.lang.Runnable): void;
				public runSync(param0: java.lang.Runnable): void;
				public onActive(param0: com.flurry.sdk.h.a): boolean;
				public runAsync(param0: java.lang.Runnable): java.util.concurrent.Future<java.lang.Void>;
				public runAfter(param0: java.lang.Runnable, param1: number): java.util.concurrent.Future<java.lang.Void>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ia extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.ia>;
				public a(): org.json.JSONObject;
				public constructor(param0: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ib extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.ib>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ic extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.ic>;
				public b: java.util.Map<string,string>;
				public a(): org.json.JSONObject;
				public constructor(param0: boolean, param1: java.util.Map<string,string>);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class id extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.id>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ie extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.ie>;
				public constructor(param0: java.util.Map<string,string>);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class if extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.if>;
				public d(): number;
				public e(): string;
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
				public static b(): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ig extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.ig>;
				public b: string;
				public a(): org.json.JSONObject;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ih extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.ih>;
				public d(): number;
				public static a(param0: com.flurry.sdk.fs.a): com.flurry.sdk.ih;
				public static b(param0: com.flurry.sdk.fs.a): void;
				public e(): string;
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ii extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.ii>;
				public b: string;
				public constructor(param0: number, param1: string);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ij extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.ij>;
				public d(): number;
				public e(): string;
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
				public static b(): com.flurry.sdk.ij;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ik extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.ik>;
				public a(): org.json.JSONObject;
				public constructor(param0: number);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class il extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.il>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class im extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.im>;
				public b: java.util.List<string>;
				public constructor(param0: string, param1: java.util.List<string>);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class in extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.in>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class io extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.io>;
				public b: boolean;
				public c: boolean;
				public d: android.location.Location;
				public a(): org.json.JSONObject;
				public constructor();
				public constructor(param0: number, param1: boolean, param2: boolean, param3: android.location.Location);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ip extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.ip>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class iq extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.iq>;
				public b: boolean;
				public constructor(param0: string, param1: boolean);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ir extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.ir>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class is extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.is>;
				public b: java.util.Map<string,string>;
				public constructor(param0: string, param1: java.util.Map<string,string>);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class it extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.it>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class iu extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.iu>;
				public a(): org.json.JSONObject;
				public constructor(param0: boolean);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class iv extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.iv>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class iw extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.iw>;
				public constructor(param0: java.util.Map<string,java.util.List<string>>);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ix extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.ix>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class iy extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.iy>;
				public b: boolean;
				public constructor(param0: java.util.Map<com.flurry.sdk.al,string>, param1: boolean);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class iz extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.iz>;
				public d(): number;
				public e(): string;
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public static a(param0: number, param1: number, param2: number, param3: number): com.flurry.sdk.iz;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class j extends java.security.MessageDigest {
				public static class: java.lang.Class<com.flurry.sdk.j>;
				public constructor(algorithm: string);
				public engineUpdate(input: java.nio.ByteBuffer): void;
				public engineUpdate(param0: number): void;
				public a(): number;
				public engineUpdate(param0: number[], param1: number, param2: number): void;
				public engineDigest(buf: number[], offset: number, len: number): number;
				public engineReset(): void;
				public constructor();
				public engineDigest(): number[];
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ja extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.ja>;
				public b: number;
				public c: number;
				public d: number;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class jb extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.jb>;
				public d(): number;
				public constructor(param0: com.flurry.sdk.jc);
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class jc extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.jc>;
				public b: number;
				public c: string;
				public d: number;
				public e: boolean;
				public f: com.flurry.sdk.ac.a;
				public constructor(param0: string, param1: number, param2: boolean, param3: com.flurry.sdk.ac.a);
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class jd extends com.flurry.sdk.jg {
				public static class: java.lang.Class<com.flurry.sdk.jd>;
				public d(): number;
				public static b(param0: string, param1: java.util.List<string>): void;
				public static c(param0: string, param1: java.util.List<string>): void;
				public g(): number;
				public static a(param0: string, param1: java.util.List<string>): void;
				public static c(param0: string, param1: string): void;
				public static a(param0: string, param1: string): void;
				public static b(param0: string, param1: string): void;
				public e(): string;
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public static b(param0: string): void;
				public static a(param0: string): void;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class je extends com.flurry.sdk.jf {
				public static class: java.lang.Class<com.flurry.sdk.je>;
				public b: number;
				public c: string;
				public d: java.util.List<string>;
				public e: com.flurry.sdk.je.a;
				public constructor(param0: number, param1: number, param2: string, param3: java.util.List<string>, param4: com.flurry.sdk.je.a);
				public a(): org.json.JSONObject;
				public constructor();
			}
			export module je {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.je.a>;
					public static a: com.flurry.sdk.je.a;
					public static b: com.flurry.sdk.je.a;
					public static c: com.flurry.sdk.je.a;
					public static d: com.flurry.sdk.je.a;
					public static e: com.flurry.sdk.je.a;
					public static f: com.flurry.sdk.je.a;
					public static g: com.flurry.sdk.je.a;
					public static valueOf(param0: string): com.flurry.sdk.je.a;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.flurry.sdk.je.a[];
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export abstract class jf extends java.lang.Object implements com.flurry.sdk.ji {
				public static class: java.lang.Class<com.flurry.sdk.jf>;
				public o: number;
				public a(): org.json.JSONObject;
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export abstract class jg extends java.lang.Object implements com.flurry.sdk.jj {
				public static class: java.lang.Class<com.flurry.sdk.jg>;
				public d(): number;
				public e(): string;
				public constructor(param0: com.flurry.sdk.ji);
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class jh {
				public static class: java.lang.Class<com.flurry.sdk.jh>;
				public static b: com.flurry.sdk.jh;
				public static c: com.flurry.sdk.jh;
				public static d: com.flurry.sdk.jh;
				public static e: com.flurry.sdk.jh;
				public static f: com.flurry.sdk.jh;
				public static g: com.flurry.sdk.jh;
				public static h: com.flurry.sdk.jh;
				public static i: com.flurry.sdk.jh;
				public static j: com.flurry.sdk.jh;
				public static k: com.flurry.sdk.jh;
				public static l: com.flurry.sdk.jh;
				public static m: com.flurry.sdk.jh;
				public static n: com.flurry.sdk.jh;
				public static o: com.flurry.sdk.jh;
				public static p: com.flurry.sdk.jh;
				public static q: com.flurry.sdk.jh;
				public static r: com.flurry.sdk.jh;
				public static s: com.flurry.sdk.jh;
				public static t: com.flurry.sdk.jh;
				public static u: com.flurry.sdk.jh;
				public static v: com.flurry.sdk.jh;
				public static w: com.flurry.sdk.jh;
				public static x: com.flurry.sdk.jh;
				public static y: com.flurry.sdk.jh;
				public static z: com.flurry.sdk.jh;
				public static A: com.flurry.sdk.jh;
				public static B: com.flurry.sdk.jh;
				public static C: com.flurry.sdk.jh;
				public static D: com.flurry.sdk.jh;
				public static E: com.flurry.sdk.jh;
				public static F: com.flurry.sdk.jh;
				public static G: com.flurry.sdk.jh;
				public static H: com.flurry.sdk.jh;
				public static I: com.flurry.sdk.jh;
				public static J: com.flurry.sdk.jh;
				public static K: com.flurry.sdk.jh;
				public static L: com.flurry.sdk.jh;
				public static M: com.flurry.sdk.jh;
				public N: number;
				public static a(param0: number): com.flurry.sdk.jh;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): com.flurry.sdk.jh[];
				public static valueOf(param0: string): com.flurry.sdk.jh;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class ji extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.ji>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.ji interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(): org.json.JSONObject;
				});
				public constructor();
				public a(): org.json.JSONObject;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class jj extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.jj>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.jj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					e(): string;
					a(): com.flurry.sdk.jh;
					c(): number;
					d(): number;
					f(): com.flurry.sdk.ji;
					g(): number;
					h(): boolean;
				});
				public constructor();
				public d(): number;
				public e(): string;
				public c(): number;
				public f(): com.flurry.sdk.ji;
				public a(): com.flurry.sdk.jh;
				public g(): number;
				public h(): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class jk extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.jk>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.jk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: java.util.List<string>): void;
					a(): void;
				});
				public constructor();
				public a(param0: java.util.List<string>): void;
				public a(): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class jl extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.jl>;
				public a: string;
				public b: string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class jm extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.jm>;
				public static a(param0: com.flurry.sdk.jl, param1: com.flurry.sdk.jl): boolean;
				public static a(param0: com.flurry.sdk.jl): boolean;
				public static b(param0: com.flurry.sdk.jl, param1: com.flurry.sdk.jl): boolean;
				public constructor();
				public static a(param0: java.io.File, param1: java.io.File): boolean;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class jn extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.jn>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.jn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: string): void;
				});
				public constructor();
				public a(param0: string): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class jo extends com.flurry.sdk.f implements com.flurry.sdk.jn {
				public static class: java.lang.Class<com.flurry.sdk.jo>;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public a(param0: string): void;
				public constructor(param0: com.flurry.sdk.jk);
				public a(param0: java.util.List<java.io.File>): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class jp extends android.os.FileObserver {
				public static class: java.lang.Class<com.flurry.sdk.jp>;
				public constructor(path: string);
				public constructor(param0: string, param1: com.flurry.sdk.jn);
				public constructor(param0: java.io.File, param1: com.flurry.sdk.jn);
				public onEvent(param0: number, param1: string): void;
				public constructor(path: string, mask: number);
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class k<ObjectType>  extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.k<any>>;
				public a(param0: ObjectType, param1: java.security.Key, param2: javax.crypto.spec.IvParameterSpec, param3: com.flurry.sdk.k.a): number[];
				public a(param0: number[], param1: java.security.Key, param2: javax.crypto.spec.IvParameterSpec, param3: com.flurry.sdk.k.a): ObjectType;
				public constructor(param0: com.flurry.sdk.dr<ObjectType>);
			}
			export module k {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.k.a>;
					public static b: com.flurry.sdk.k.a;
					public static c: com.flurry.sdk.k.a;
					public static valueOf(param0: string): com.flurry.sdk.k.a;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static a(param0: number): com.flurry.sdk.k.a;
					public static values(): com.flurry.sdk.k.a[];
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class l<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.l<any>>;
				public b(): boolean;
				public constructor(param0: java.io.File, param1: string, param2: number, param3: com.flurry.sdk.du<T>);
				public a(): T;
				public a(param0: T): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class m<T>  extends com.flurry.sdk.f {
				public static class: java.lang.Class<com.flurry.sdk.m<any>>;
				public observers: java.util.Set<com.flurry.sdk.o<any>>;
				public destroy(): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public refresh(): void;
				public start(): void;
				public notifyObservers(param0: any): void;
				public unsubscribe(param0: com.flurry.sdk.o<any>): void;
				public constructor(param0: string);
				public subscribe(param0: com.flurry.sdk.o<any>): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class n extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.n>;
				public c: com.flurry.sdk.av;
				public d: com.flurry.sdk.ap;
				public e: com.flurry.sdk.ar;
				public f: com.flurry.sdk.bh;
				public g: com.flurry.sdk.ab;
				public h: com.flurry.sdk.ag;
				public i: com.flurry.sdk.ac;
				public j: com.flurry.sdk.q;
				public k: com.flurry.sdk.ax;
				public l: com.flurry.sdk.bb;
				public m: com.flurry.sdk.u;
				public n: com.flurry.sdk.an;
				public o: com.flurry.sdk.bg;
				public p: com.flurry.sdk.az;
				public q: com.flurry.sdk.t;
				public static a(): com.flurry.sdk.n;
				public static b(): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class o<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.o<any>>;
				/**
				 * Constructs a new instance of the com.flurry.sdk.o<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					a(param0: T): void;
				});
				public constructor();
				public a(param0: T): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class p {
				public static class: java.lang.Class<com.flurry.sdk.p>;
				public static a: com.flurry.sdk.p;
				public static b: com.flurry.sdk.p;
				public static c: com.flurry.sdk.p;
				public d: number;
				public static values(): com.flurry.sdk.p[];
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(param0: string): com.flurry.sdk.p;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class q extends com.flurry.sdk.m<com.flurry.sdk.r> {
				public static class: java.lang.Class<com.flurry.sdk.q>;
				public subscribe(param0: com.flurry.sdk.o<com.flurry.sdk.r>): void;
				public destroy(): void;
				public b(): com.flurry.sdk.p;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public a(): void;
				public constructor(param0: com.flurry.sdk.ap);
				public constructor(param0: string);
				public subscribe(param0: com.flurry.sdk.o<any>): void;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class r extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.r>;
				public a: com.flurry.sdk.p;
				public b: com.flurry.sdk.p;
				public constructor(param0: com.flurry.sdk.p, param1: com.flurry.sdk.p);
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class s extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.s>;
				public a: number;
				public constructor(param0: number);
			}
			export module s {
				export class a {
					public static class: java.lang.Class<com.flurry.sdk.s.a>;
					public static a: number;
					public static b: number;
					public static c: number;
					public static values$105ff214(): number[];
				}
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class t extends com.flurry.sdk.m<com.flurry.sdk.s> {
				public static class: java.lang.Class<com.flurry.sdk.t>;
				public a(param0: boolean): void;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class u extends com.flurry.sdk.m<com.flurry.android.Consent> {
				public static class: java.lang.Class<com.flurry.sdk.u>;
				public constructor(param0: string, param1: com.flurry.sdk.h);
				public a(param0: com.flurry.android.Consent): void;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class v extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.v>;
				public a: string;
				public b: number;
				public constructor(param0: string, param1: number);
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class w extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.w>;
				public static b(): number;
				public a(): java.util.List<com.flurry.sdk.v>;
				public constructor(param0: java.io.File);
				public a(param0: com.flurry.sdk.v): void;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class x extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.x>;
				public static a(): java.util.Map<string,string>;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class y {
				public static class: java.lang.Class<com.flurry.sdk.y>;
				public static a: com.flurry.sdk.y;
				public static b: com.flurry.sdk.y;
				public c: string;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): com.flurry.sdk.y[];
				public static valueOf(param0: string): com.flurry.sdk.y;
			}
		}
	}
}

declare module com {
	export module flurry {
		export module sdk {
			export class z extends java.lang.Object {
				public static class: java.lang.Class<com.flurry.sdk.z>;
				public static a(): com.flurry.sdk.z;
				public static b(): void;
			}
			export module z {
				export class a extends java.lang.Object implements java.lang.Thread.UncaughtExceptionHandler {
					public static class: java.lang.Class<com.flurry.sdk.z.a>;
					public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
				}
			}
		}
	}
}

//Generics information:
//com.flurry.sdk.ct:2
//com.flurry.sdk.cv:1
//com.flurry.sdk.cw:1
//com.flurry.sdk.dc:2
//com.flurry.sdk.dc.a:2
//com.flurry.sdk.do:1
//com.flurry.sdk.dp:1
//com.flurry.sdk.dq:1
//com.flurry.sdk.dr:1
//com.flurry.sdk.dt:1
//com.flurry.sdk.du:1
//com.flurry.sdk.k:1
//com.flurry.sdk.l:1
//com.flurry.sdk.m:1
//com.flurry.sdk.o:1

