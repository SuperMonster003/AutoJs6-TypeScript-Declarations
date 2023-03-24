declare module androidx {
	export module core {
		export module app {
			export abstract class SafeJobIntentService extends androidx.core.app.JobIntentService {
				public static class: java.lang.Class<androidx.core.app.SafeJobIntentService>;
				public onTrimMemory(level: number): void;
				public onCreate(): void;
				public onTrimMemory(param0: number): void;
				public constructor();
				public constructor(base: android.content.Context);
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class SafeJobServiceEngineImpl extends java.lang.Object implements androidx.core.app.JobIntentService.CompatJobEngine {
				public static class: java.lang.Class<androidx.core.app.SafeJobServiceEngineImpl>;
				public onStartJob(params: any): boolean;
				public onStartJob(param0: any): boolean;
				public onStopJob(param0: any): boolean;
				public onStopJob(params: any): boolean;
				public dequeueWork(): androidx.core.app.JobIntentService.GenericWorkItem;
				public compatGetBinder(): android.os.IBinder;
			}
			export module SafeJobServiceEngineImpl {
				export class WrapperWorkItem extends java.lang.Object implements androidx.core.app.JobIntentService.GenericWorkItem {
					public static class: java.lang.Class<androidx.core.app.SafeJobServiceEngineImpl.WrapperWorkItem>;
					public complete(): void;
					public getIntent(): android.content.Intent;
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export abstract class DailyJob extends com.evernote.android.job.Job {
					public static class: java.lang.Class<com.evernote.android.job.DailyJob>;
					public onRunDailyJob(param0: com.evernote.android.job.Job.Params): com.evernote.android.job.DailyJob.DailyJobResult;
					public onRunJob(param0: com.evernote.android.job.Job.Params): com.evernote.android.job.Job.Result;
					public onRunJob(params: com.evernote.android.job.Job.Params): com.evernote.android.job.Job.Result;
					public constructor();
					public static scheduleAsync(baseBuilder: com.evernote.android.job.JobRequest.Builder, startMs: number, param2: number, endMs: com.evernote.android.job.JobRequest.JobScheduledCallback): void;
					public static startNowOnce(baseBuilder: com.evernote.android.job.JobRequest.Builder): number;
					public static scheduleAsync(baseBuilder: com.evernote.android.job.JobRequest.Builder, startMs: number, param2: number): void;
					public static schedule(baseBuilder: com.evernote.android.job.JobRequest.Builder, startMs: number, param2: number): number;
				}
				export module DailyJob {
					export class DailyJobResult {
						public static class: java.lang.Class<com.evernote.android.job.DailyJob.DailyJobResult>;
						public static SUCCESS: com.evernote.android.job.DailyJob.DailyJobResult;
						public static CANCEL: com.evernote.android.job.DailyJob.DailyJobResult;
						public static values(): com.evernote.android.job.DailyJob.DailyJobResult[];
						public static valueOf(name: string): com.evernote.android.job.DailyJob.DailyJobResult;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export abstract class Job extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.Job>;
					public isFinished(): boolean;
					public getParams(): com.evernote.android.job.Job.Params;
					public equals(obj: any): boolean;
					public meetsRequirements(): boolean;
					public isRequirementStorageNotLowMet(): boolean;
					public isRequirementBatteryNotLowMet(): boolean;
					public cancel(): void;
					public isRequirementDeviceIdleMet(): boolean;
					public equals(o: any): boolean;
					public getContext(): android.content.Context;
					public isCanceled(): boolean;
					public toString(): string;
					public onRunJob(param0: com.evernote.android.job.Job.Params): com.evernote.android.job.Job.Result;
					public constructor();
					public isRequirementChargingMet(): boolean;
					public isRequirementNetworkTypeMet(): boolean;
					public onReschedule(newJobId: number): void;
					public onCancel(): void;
					public hashCode(): number;
				}
				export module Job {
					export class Params extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.Job.Params>;
						public equals(obj: any): boolean;
						public isPeriodic(): boolean;
						public getScheduledAt(): number;
						public getStartMs(): number;
						public isExact(): boolean;
						public isTransient(): boolean;
						public getLastRun(): number;
						public hashCode(): number;
						public getIntervalMs(): number;
						public getFlexMs(): number;
						public requirementsEnforced(): boolean;
						public requiresCharging(): boolean;
						public getBackoffPolicy(): com.evernote.android.job.JobRequest.BackoffPolicy;
						public requiredNetworkType(): com.evernote.android.job.JobRequest.NetworkType;
						public equals(o: any): boolean;
						public getFailureCount(): number;
						public getEndMs(): number;
						public getExtras(): com.evernote.android.job.util.support.PersistableBundleCompat;
						public requiresDeviceIdle(): boolean;
						public requiresStorageNotLow(): boolean;
						public getBackoffMs(): number;
						public getId(): number;
						public requiresBatteryNotLow(): boolean;
						public getTransientExtras(): android.os.Bundle;
						public getTag(): string;
					}
					export class Result {
						public static class: java.lang.Class<com.evernote.android.job.Job.Result>;
						public static SUCCESS: com.evernote.android.job.Job.Result;
						public static FAILURE: com.evernote.android.job.Job.Result;
						public static RESCHEDULE: com.evernote.android.job.Job.Result;
						public static values(): com.evernote.android.job.Job.Result[];
						public static valueOf(name: string): com.evernote.android.job.Job.Result;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobApi {
					public static class: java.lang.Class<com.evernote.android.job.JobApi>;
					public static ALARM: com.evernote.android.job.JobApi;
					public isSupported(context: android.content.Context): boolean;
					public static getDefault(context: android.content.Context): com.evernote.android.job.JobApi;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): com.evernote.android.job.JobApi;
					public static values(): com.evernote.android.job.JobApi[];
					public invalidateCachedProxy(): void;
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobBootReceiver extends android.content.BroadcastReceiver {
					public static class: java.lang.Class<com.evernote.android.job.JobBootReceiver>;
					public onReceive(context: android.content.Context, intent: android.content.Intent): void;
					public constructor();
					public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobConfig extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.JobConfig>;
					public static setExecutorService(executorService: java.util.concurrent.ExecutorService): void;
					public static setForceAllowApi14(forceAllowApi14: boolean): void;
					public static setApiEnabled(api: com.evernote.android.job.JobApi, enabled: boolean): void;
					public static isApiEnabled(api: com.evernote.android.job.JobApi): boolean;
					public static getJobReschedulePause(): number;
					public static isForceRtc(): boolean;
					public static isForceAllowApi14(): boolean;
					public static isLogcatEnabled(): boolean;
					public static getJobIdOffset(): number;
					public static removeLogger(logger: com.evernote.android.job.util.JobLogger): void;
					public static isCloseDatabase(): boolean;
					public static forceApi(api: com.evernote.android.job.JobApi): void;
					public static setJobReschedulePause(pause: number, param1: java.util.concurrent.TimeUnit): void;
					public static reset(): void;
					public static setJobIdOffset(jobIdOffset: number): void;
					public static getClock(): com.evernote.android.job.util.Clock;
					public static getExecutorService(): java.util.concurrent.ExecutorService;
					public static setLogcatEnabled(enabled: boolean): void;
					public static addLogger(logger: com.evernote.android.job.util.JobLogger): boolean;
					public static isAllowSmallerIntervalsForMarshmallow(): boolean;
					public static setAllowSmallerIntervalsForMarshmallow(allowSmallerIntervals: boolean): void;
					public static setForceRtc(forceRtc: boolean): void;
					public static setCloseDatabase(closeDatabase: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobCreator extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.JobCreator>;
					/**
					 * Constructs a new instance of the com.evernote.android.job.JobCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: string): com.evernote.android.job.Job;
					});
					public constructor();
					public static ACTION_ADD_JOB_CREATOR: string;
					public create(param0: string): com.evernote.android.job.Job;
				}
				export module JobCreator {
					export abstract class AddJobCreatorReceiver extends android.content.BroadcastReceiver {
						public static class: java.lang.Class<com.evernote.android.job.JobCreator.AddJobCreatorReceiver>;
						public constructor();
						public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
						public onReceive(context: android.content.Context, intent: android.content.Intent): void;
						public addJobCreator(param0: android.content.Context, param1: com.evernote.android.job.JobManager): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobCreatorHolder extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.JobCreatorHolder>;
					public isEmpty(): boolean;
					public constructor();
					public removeJobCreator(creator: com.evernote.android.job.JobCreator): void;
					public addJobCreator(creator: com.evernote.android.job.JobCreator): void;
					public createJob(tag: string): com.evernote.android.job.Job;
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobExecutor extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.JobExecutor>;
					public getAllJobs(): java.util.Set<com.evernote.android.job.Job>;
					public getAllJobsForTag(tag: string): java.util.Set<com.evernote.android.job.Job>;
					public constructor();
					public getAllJobResults(): android.util.SparseArray<com.evernote.android.job.Job.Result>;
					public getJob(jobId: number): com.evernote.android.job.Job;
					public isRequestStarting(request: com.evernote.android.job.JobRequest): boolean;
					public markJobRequestStarting(request: com.evernote.android.job.JobRequest): void;
					public execute(context: android.content.Context, request: com.evernote.android.job.JobRequest, job: com.evernote.android.job.Job, transientExtras: android.os.Bundle): java.util.concurrent.Future<com.evernote.android.job.Job.Result>;
				}
				export module JobExecutor {
					export class JobCallable extends java.util.concurrent.Callable<com.evernote.android.job.Job.Result> {
						public static class: java.lang.Class<com.evernote.android.job.JobExecutor.JobCallable>;
						public call(): any;
						public call(): com.evernote.android.job.Job.Result;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobIdsInternal extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.JobIdsInternal>;
					public static RESERVED_JOB_ID_RANGE_START: number;
					public static JOB_ID_JOB_RESCHEDULE_SERVICE: number;
					public static JOB_ID_PLATFORM_ALARM_SERVICE: number;
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobManager extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.JobManager>;
					public static instance(): com.evernote.android.job.JobManager;
					public cancelAllForTag(tag: string): number;
					public getAllJobsForTag(tag: string): java.util.Set<com.evernote.android.job.Job>;
					public cancel(jobId: number): boolean;
					public getAllJobRequests(): java.util.Set<com.evernote.android.job.JobRequest>;
					public getAllJobs(): java.util.Set<com.evernote.android.job.Job>;
					public schedule(request: com.evernote.android.job.JobRequest): void;
					public removeJobCreator(jobCreator: com.evernote.android.job.JobCreator): void;
					public addJobCreator(jobCreator: com.evernote.android.job.JobCreator): void;
					public getAllJobResults(): android.util.SparseArray<com.evernote.android.job.Job.Result>;
					public getAllJobRequestsForTag(tag: string): java.util.Set<com.evernote.android.job.JobRequest>;
					public getJob(jobId: number): com.evernote.android.job.Job;
					public static create(context: android.content.Context): com.evernote.android.job.JobManager;
					public getJobRequest(jobId: number): com.evernote.android.job.JobRequest;
					public cancelAll(): number;
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobManagerCreateException extends java.lang.IllegalStateException {
					public static class: java.lang.Class<com.evernote.android.job.JobManagerCreateException>;
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(s: string);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobProxy extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.JobProxy>;
					/**
					 * Constructs a new instance of the com.evernote.android.job.JobProxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						plantOneOff(param0: com.evernote.android.job.JobRequest): void;
						plantPeriodic(param0: com.evernote.android.job.JobRequest): void;
						plantPeriodicFlexSupport(param0: com.evernote.android.job.JobRequest): void;
						cancel(param0: number): void;
						isPlatformJobScheduled(param0: com.evernote.android.job.JobRequest): boolean;
					});
					public constructor();
					public plantPeriodicFlexSupport(param0: com.evernote.android.job.JobRequest): void;
					public plantOneOff(param0: com.evernote.android.job.JobRequest): void;
					public cancel(param0: number): void;
					public plantPeriodic(param0: com.evernote.android.job.JobRequest): void;
					public isPlatformJobScheduled(param0: com.evernote.android.job.JobRequest): boolean;
				}
				export module JobProxy {
					export class Common extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.JobProxy.Common>;
						public static startWakefulService(context: android.content.Context, intent: android.content.Intent): android.content.ComponentName;
						public constructor(context: android.content.Context, cat: com.evernote.android.job.util.JobCat, jobId: number);
						public static getStartMs(request: com.evernote.android.job.JobRequest): number;
						public getPendingRequest(cleanUpOrphanedJob: boolean, markStarting: boolean): com.evernote.android.job.JobRequest;
						public static getAverageDelayMsSupportFlex(request: com.evernote.android.job.JobRequest): number;
						public executeJobRequest(request: com.evernote.android.job.JobRequest, transientExtras: android.os.Bundle): com.evernote.android.job.Job.Result;
						public markStarting(request: com.evernote.android.job.JobRequest): void;
						public static getEndMs(request: com.evernote.android.job.JobRequest): number;
						public static getAverageDelayMs(request: com.evernote.android.job.JobRequest): number;
						public static getEndMs(request: com.evernote.android.job.JobRequest, shiftEnd: boolean): number;
						public static getEndMsSupportFlex(request: com.evernote.android.job.JobRequest): number;
						public static completeWakefulIntent(intent: android.content.Intent): boolean;
						public static getStartMsSupportFlex(request: com.evernote.android.job.JobRequest): number;
						public static getRescheduleCount(request: com.evernote.android.job.JobRequest): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobProxyIllegalStateException extends java.lang.IllegalStateException {
					public static class: java.lang.Class<com.evernote.android.job.JobProxyIllegalStateException>;
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(s: string);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobRequest extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.JobRequest>;
					public static DEFAULT_BACKOFF_MS: number;
					public static DEFAULT_BACKOFF_POLICY: com.evernote.android.job.JobRequest.BackoffPolicy;
					public static DEFAULT_NETWORK_TYPE: com.evernote.android.job.JobRequest.NetworkType;
					public static DEFAULT_JOB_SCHEDULED_CALLBACK: com.evernote.android.job.JobRequest.JobScheduledCallback;
					public static MIN_INTERVAL: number;
					public static MIN_FLEX: number;
					public getStartMs(): number;
					public equals(obj: any): boolean;
					public getExtras(): com.evernote.android.job.util.support.PersistableBundleCompat;
					public getJobId(): number;
					public getEndMs(): number;
					public getLastRun(): number;
					public equals(o: any): boolean;
					public isUpdateCurrent(): boolean;
					public requirementsEnforced(): boolean;
					public requiresBatteryNotLow(): boolean;
					public toString(): string;
					public cancelAndEdit(): com.evernote.android.job.JobRequest.Builder;
					public getScheduledAt(): number;
					public requiresCharging(): boolean;
					public getIntervalMs(): number;
					public getTransientExtras(): android.os.Bundle;
					public hashCode(): number;
					public isTransient(): boolean;
					public schedule(): number;
					public requiresDeviceIdle(): boolean;
					public scheduleAsync(): void;
					public getBackoffPolicy(): com.evernote.android.job.JobRequest.BackoffPolicy;
					public getFlexMs(): number;
					public requiredNetworkType(): com.evernote.android.job.JobRequest.NetworkType;
					public isExact(): boolean;
					public getFailureCount(): number;
					public getTag(): string;
					public hasRequirements(): boolean;
					public scheduleAsync(callback: com.evernote.android.job.JobRequest.JobScheduledCallback): void;
					public getBackoffMs(): number;
					public isPeriodic(): boolean;
					public requiresStorageNotLow(): boolean;
				}
				export module JobRequest {
					export class BackoffPolicy {
						public static class: java.lang.Class<com.evernote.android.job.JobRequest.BackoffPolicy>;
						public static LINEAR: com.evernote.android.job.JobRequest.BackoffPolicy;
						public static EXPONENTIAL: com.evernote.android.job.JobRequest.BackoffPolicy;
						public static values(): com.evernote.android.job.JobRequest.BackoffPolicy[];
						public static valueOf(name: string): com.evernote.android.job.JobRequest.BackoffPolicy;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.JobRequest.Builder>;
						public setRequiresDeviceIdle(requiresDeviceIdle: boolean): com.evernote.android.job.JobRequest.Builder;
						public setPeriodic(intervalMs: number): com.evernote.android.job.JobRequest.Builder;
						public equals(obj: any): boolean;
						public setUpdateCurrent(updateCurrent: boolean): com.evernote.android.job.JobRequest.Builder;
						public setExecutionWindow(startInMs: number, param1: number): com.evernote.android.job.JobRequest.Builder;
						public setBackoffCriteria(backoffMs: number, param1: com.evernote.android.job.JobRequest.BackoffPolicy): com.evernote.android.job.JobRequest.Builder;
						public setRequiresCharging(requiresCharging: boolean): com.evernote.android.job.JobRequest.Builder;
						public hashCode(): number;
						public startNow(): com.evernote.android.job.JobRequest.Builder;
						public setTransientExtras(extras: android.os.Bundle): com.evernote.android.job.JobRequest.Builder;
						public setRequiresBatteryNotLow(requiresBatteryNotLow: boolean): com.evernote.android.job.JobRequest.Builder;
						public build(): com.evernote.android.job.JobRequest;
						public setRequirementsEnforced(enforced: boolean): com.evernote.android.job.JobRequest.Builder;
						public setExact(exactInMs: number): com.evernote.android.job.JobRequest.Builder;
						public setPeriodic(intervalMs: number, param1: number): com.evernote.android.job.JobRequest.Builder;
						public setRequiredNetworkType(networkType: com.evernote.android.job.JobRequest.NetworkType): com.evernote.android.job.JobRequest.Builder;
						public addExtras(extras: com.evernote.android.job.util.support.PersistableBundleCompat): com.evernote.android.job.JobRequest.Builder;
						public setRequiresStorageNotLow(requiresStorageNotLow: boolean): com.evernote.android.job.JobRequest.Builder;
						public constructor(tag: string);
						public equals(o: any): boolean;
						public setExtras(extras: com.evernote.android.job.util.support.PersistableBundleCompat): com.evernote.android.job.JobRequest.Builder;
					}
					export class JobScheduledCallback extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.JobRequest.JobScheduledCallback>;
						/**
						 * Constructs a new instance of the com.evernote.android.job.JobRequest$JobScheduledCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onJobScheduled(param0: number, param1: string, param2: java.lang.Exception): void;
						});
						public constructor();
						public static JOB_ID_ERROR: number;
						public onJobScheduled(param0: number, param1: string, param2: java.lang.Exception): void;
					}
					export class NetworkType {
						public static class: java.lang.Class<com.evernote.android.job.JobRequest.NetworkType>;
						public static ANY: com.evernote.android.job.JobRequest.NetworkType;
						public static CONNECTED: com.evernote.android.job.JobRequest.NetworkType;
						public static UNMETERED: com.evernote.android.job.JobRequest.NetworkType;
						public static NOT_ROAMING: com.evernote.android.job.JobRequest.NetworkType;
						public static METERED: com.evernote.android.job.JobRequest.NetworkType;
						public static valueOf(name: string): com.evernote.android.job.JobRequest.NetworkType;
						public static values(): com.evernote.android.job.JobRequest.NetworkType[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobRescheduleService extends androidx.core.app.SafeJobIntentService {
					public static class: java.lang.Class<com.evernote.android.job.JobRescheduleService>;
					public onTrimMemory(level: number): void;
					public onTrimMemory(param0: number): void;
					public onHandleWork(param0: android.content.Intent): void;
					public constructor();
					public onHandleWork(intent: android.content.Intent): void;
					public constructor(base: android.content.Context);
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobStorage extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.JobStorage>;
					public static JOB_ID_COUNTER: string;
					public static PREF_FILE_NAME: string;
					public static DATABASE_NAME: string;
					public static DATABASE_VERSION: number;
					public static JOB_TABLE_NAME: string;
					public static COLUMN_ID: string;
					public static COLUMN_TAG: string;
					public static COLUMN_START_MS: string;
					public static COLUMN_END_MS: string;
					public static COLUMN_BACKOFF_MS: string;
					public static COLUMN_BACKOFF_POLICY: string;
					public static COLUMN_INTERVAL_MS: string;
					public static COLUMN_REQUIREMENTS_ENFORCED: string;
					public static COLUMN_REQUIRES_CHARGING: string;
					public static COLUMN_REQUIRES_DEVICE_IDLE: string;
					public static COLUMN_EXACT: string;
					public static COLUMN_NETWORK_TYPE: string;
					public static COLUMN_EXTRAS: string;
					public static COLUMN_NUM_FAILURES: string;
					public static COLUMN_SCHEDULED_AT: string;
					public static COLUMN_STARTED: string;
					public static COLUMN_FLEX_MS: string;
					public static COLUMN_FLEX_SUPPORT: string;
					public static COLUMN_LAST_RUN: string;
					public static COLUMN_TRANSIENT: string;
					public static COLUMN_REQUIRES_BATTERY_NOT_LOW: string;
					public static COLUMN_REQUIRES_STORAGE_NOT_LOW: string;
					public nextJobId(): number;
					public remove(request: com.evernote.android.job.JobRequest): void;
					public update(request: com.evernote.android.job.JobRequest, contentValues: android.content.ContentValues): void;
					public constructor(context: android.content.Context);
					public constructor(context: android.content.Context, databasePath: string);
					public get(id: number): com.evernote.android.job.JobRequest;
					public getAllJobRequests(tag: string, includeStarted: boolean): java.util.Set<com.evernote.android.job.JobRequest>;
					public put(request: com.evernote.android.job.JobRequest): void;
				}
				export module JobStorage {
					export class JobCacheId extends android.util.LruCache<java.lang.Integer,com.evernote.android.job.JobRequest> {
						public static class: java.lang.Class<com.evernote.android.job.JobStorage.JobCacheId>;
						public constructor(maxSize: number);
						public create(key: any): any;
						public constructor(param0: com.evernote.android.job.JobStorage);
						public create(id: java.lang.Integer): com.evernote.android.job.JobRequest;
					}
					export class JobOpenHelper extends android.database.sqlite.SQLiteOpenHelper {
						public static class: java.lang.Class<com.evernote.android.job.JobStorage.JobOpenHelper>;
						public onCreate(param0: android.database.sqlite.SQLiteDatabase): void;
						public onUpgrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public onCreate(db: android.database.sqlite.SQLiteDatabase): void;
						public onUpgrade(db: android.database.sqlite.SQLiteDatabase, oldVersion: number, newVersion: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class JobStorageDatabaseErrorHandler extends java.lang.Object implements android.database.DatabaseErrorHandler {
					public static class: java.lang.Class<com.evernote.android.job.JobStorageDatabaseErrorHandler>;
					public onCorruption(dbObj: android.database.sqlite.SQLiteDatabase): void;
					public onCorruption(param0: android.database.sqlite.SQLiteDatabase): void;
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class PendingIntentUtil extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.PendingIntentUtil>;
					public static flagImmutable(): number;
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export class WakeLockUtil extends java.lang.Object {
					public static class: java.lang.Class<com.evernote.android.job.WakeLockUtil>;
					public static startWakefulService(context: android.content.Context, intent: android.content.Intent): android.content.ComponentName;
					public static completeWakefulIntent(intent: android.content.Intent): boolean;
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module util {
					export class BatteryStatus extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.util.BatteryStatus>;
						public static DEFAULT: com.evernote.android.job.util.BatteryStatus;
						public isCharging(): boolean;
						public getBatteryPercent(): number;
						public isBatteryLow(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module util {
					export class Clock extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.util.Clock>;
						/**
						 * Constructs a new instance of the com.evernote.android.job.util.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							currentTimeMillis(): number;
							elapsedRealtime(): number;
							"<clinit>"(): void;
						});
						public constructor();
						public static DEFAULT: com.evernote.android.job.util.Clock;
						public currentTimeMillis(): number;
						public elapsedRealtime(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module util {
					export class Device extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.util.Device>;
						public static getNetworkType(context: android.content.Context): com.evernote.android.job.JobRequest.NetworkType;
						public static isIdle(context: android.content.Context): boolean;
						public static getBatteryStatus(context: android.content.Context): com.evernote.android.job.util.BatteryStatus;
						public static isStorageLow(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module util {
					export class JobCat extends java.lang.Object implements com.evernote.android.job.util.JobLogger {
						public static class: java.lang.Class<com.evernote.android.job.util.JobCat>;
						public mTag: string;
						public mEnabled: boolean;
						public constructor(clazz: java.lang.Class<any>);
						public w(message: string): void;
						public i(message: string): void;
						public d(message: string, ...args: any[]): void;
						public w(t: java.lang.Throwable, message: string, ...args: any[]): void;
						public e(t: java.lang.Throwable): void;
						public e(message: string, ...args: any[]): void;
						public static clearLogger(): void;
						public log(priority: number, tag: string, message: string, t: java.lang.Throwable): void;
						public d(message: string): void;
						public d(t: java.lang.Throwable, message: string, ...args: any[]): void;
						public e(t: java.lang.Throwable, message: string, ...args: any[]): void;
						public w(message: string, ...args: any[]): void;
						public log(param0: number, param1: string, param2: string, param3: java.lang.Throwable): void;
						public static setLogcatEnabled(enabled: boolean): void;
						public static addLogger(logger: com.evernote.android.job.util.JobLogger): boolean;
						public static removeLogger(logger: com.evernote.android.job.util.JobLogger): void;
						public constructor(tag: string, enabled: boolean);
						public e(message: string): void;
						public static isLogcatEnabled(): boolean;
						public constructor(tag: string);
						public i(message: string, ...args: any[]): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module util {
					export class JobLogger extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.util.JobLogger>;
						/**
						 * Constructs a new instance of the com.evernote.android.job.util.JobLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							log(param0: number, param1: string, param2: string, param3: java.lang.Throwable): void;
						});
						public constructor();
						public log(param0: number, param1: string, param2: string, param3: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module util {
					export class JobPreconditions extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.util.JobPreconditions>;
						public static checkFlagsArgument(requestedFlags: number, allowedFlags: number): void;
						public static checkNotNull(reference: any, errorMessage: any): any;
						public static checkArgumentNonnegative(value: number, errorMessage: string): number;
						public static checkArgumentFinite(value: number, valueName: string): number;
						public static checkArgumentPositive(value: number, param1: string): number;
						public static checkArrayElementsNotNull(value: any[], valueName: string): any[];
						public static checkNotNull(reference: any): any;
						public static checkArgumentNonnegative(value: number, param1: string): number;
						public static checkArgumentInRange(value: number, lower: number, upper: number, valueName: string): number;
						public static checkArgumentInRange(value: number, param1: number, lower: number, param3: string): number;
						public static checkCollectionNotEmpty(value: java.util.Collection<any>, valueName: string): java.util.Collection<any>;
						public static checkNotEmpty(reference: string): string;
						public static checkArgumentPositive(value: number, errorMessage: string): number;
						public static checkState(expression: boolean): void;
						public static checkArrayElementsInRange(value: number[], lower: number, upper: number, valueName: string): number[];
						public static checkCollectionElementsNotNull(value: java.util.Collection<any>, valueName: string): java.util.Collection<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module util {
					export class JobUtil extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.util.JobUtil>;
						public static timeToString(timeMs: number): string;
						public static hasBootPermission(context: android.content.Context): boolean;
						public static hasWakeLockPermission(context: android.content.Context): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module util {
					export module support {
						export class FastXmlSerializer extends java.lang.Object implements org.xmlpull.v1.XmlSerializer {
							public static class: java.lang.Class<com.evernote.android.job.util.support.FastXmlSerializer>;
							public text(buf: string[], start: number, len: number): org.xmlpull.v1.XmlSerializer;
							public text(param0: string): org.xmlpull.v1.XmlSerializer;
							public getDepth(): number;
							public setPrefix(prefix: string, namespace: string): void;
							public endTag(param0: string, param1: string): org.xmlpull.v1.XmlSerializer;
							public getPrefix(param0: string, param1: boolean): string;
							public text(param0: string[], param1: number, param2: number): org.xmlpull.v1.XmlSerializer;
							public comment(param0: string): void;
							public getProperty(param0: string): any;
							public setPrefix(param0: string, param1: string): void;
							public startTag(param0: string, param1: string): org.xmlpull.v1.XmlSerializer;
							public getPrefix(namespace: string, generatePrefix: boolean): string;
							public entityRef(param0: string): void;
							public attribute(namespace: string, name: string, value: string): org.xmlpull.v1.XmlSerializer;
							public ignorableWhitespace(param0: string): void;
							public processingInstruction(text: string): void;
							public setOutput(os: java.io.OutputStream, encoding: string): void;
							public cdsect(text: string): void;
							public setProperty(name: string, value: any): void;
							public setFeature(param0: string, param1: boolean): void;
							public getNamespace(): string;
							public getProperty(name: string): any;
							public docdecl(text: string): void;
							public attribute(param0: string, param1: string, param2: string): org.xmlpull.v1.XmlSerializer;
							public getFeature(param0: string): boolean;
							public text(text: string): org.xmlpull.v1.XmlSerializer;
							public endTag(namespace: string, name: string): org.xmlpull.v1.XmlSerializer;
							public endDocument(): void;
							public comment(text: string): void;
							public setFeature(name: string, state: boolean): void;
							public setOutput(param0: java.io.Writer): void;
							public docdecl(param0: string): void;
							public startDocument(param0: string, param1: java.lang.Boolean): void;
							public getName(): string;
							public flush(): void;
							public ignorableWhitespace(text: string): void;
							public startTag(namespace: string, name: string): org.xmlpull.v1.XmlSerializer;
							public setProperty(param0: string, param1: any): void;
							public cdsect(param0: string): void;
							public getFeature(name: string): boolean;
							public setOutput(writer: java.io.Writer): void;
							public setOutput(param0: java.io.OutputStream, param1: string): void;
							public entityRef(text: string): void;
							public startDocument(encoding: string, standalone: java.lang.Boolean): void;
							public processingInstruction(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module util {
					export module support {
						export class PersistableBundleCompat extends java.lang.Object {
							public static class: java.lang.Class<com.evernote.android.job.util.support.PersistableBundleCompat>;
							public putPersistableBundleCompat(key: string, value: com.evernote.android.job.util.support.PersistableBundleCompat): void;
							public size(): number;
							public putAll(bundle: com.evernote.android.job.util.support.PersistableBundleCompat): void;
							public containsKey(key: string): boolean;
							public putLong(key: string, value: number): void;
							public getLong(key: string, defaultValue: number): number;
							public getDouble(key: string, defaultValue: number): number;
							public get(key: string): any;
							public getStringArray(key: string): string[];
							public static fromXml(xml: string): com.evernote.android.job.util.support.PersistableBundleCompat;
							public getInt(key: string, defaultValue: number): number;
							public putInt(key: string, value: number): void;
							public getPersistableBundleCompat(key: string): com.evernote.android.job.util.support.PersistableBundleCompat;
							public putString(key: string, value: string): void;
							public putIntArray(key: string, value: number[]): void;
							public getString(key: string, defaultValue: string): string;
							public getBoolean(key: string, defaultValue: boolean): boolean;
							public constructor();
							public putDouble(key: string, value: number): void;
							public constructor(bundle: com.evernote.android.job.util.support.PersistableBundleCompat);
							public clear(): void;
							public remove(key: string): void;
							public getIntArray(key: string): number[];
							public putDoubleArray(key: string, value: number[]): void;
							public saveToXml(): string;
							public putStringArray(key: string, value: string[]): void;
							public keySet(): java.util.Set<string>;
							public putLongArray(key: string, value: number[]): void;
							public getLongArray(key: string): number[];
							public isEmpty(): boolean;
							public putBoolean(key: string, value: boolean): void;
							public getDoubleArray(key: string): number[];
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module util {
					export module support {
						export class XmlUtils extends java.lang.Object {
							public static class: java.lang.Class<com.evernote.android.job.util.support.XmlUtils>;
							public static readThisDoubleArrayXml(parser: org.xmlpull.v1.XmlPullParser, endTag: string, name: string[]): number[];
							public static readIntAttribute(in: org.xmlpull.v1.XmlPullParser, name: string, defaultValue: number): number;
							public static readStringAttribute(in: org.xmlpull.v1.XmlPullParser, name: string): string;
							public static readThisStringArrayXml(parser: org.xmlpull.v1.XmlPullParser, endTag: string, name: string[]): string[];
							public static nextElementWithin(parser: org.xmlpull.v1.XmlPullParser, outerDepth: number): boolean;
							public static writeValueXml(v: any, name: string, out: org.xmlpull.v1.XmlSerializer): void;
							public static writeUriAttribute(out: org.xmlpull.v1.XmlSerializer, name: string, value: android.net.Uri): void;
							public static readThisListXml(parser: org.xmlpull.v1.XmlPullParser, endTag: string, name: string[]): java.util.ArrayList<any>;
							public static writeMapXml(val: java.util.Map<any,any>, name: string, out: org.xmlpull.v1.XmlSerializer, callback: com.evernote.android.job.util.support.XmlUtils.WriteMapCallback): void;
							public static writeBooleanAttribute(out: org.xmlpull.v1.XmlSerializer, name: string, value: boolean): void;
							public static convertValueToInt(charSeq: string, defaultValue: number): number;
							public static writeByteArrayXml(val: number[], name: string, out: org.xmlpull.v1.XmlSerializer): void;
							public static nextElement(parser: org.xmlpull.v1.XmlPullParser): void;
							public static convertValueToUnsignedInt(value: string, defaultValue: number): number;
							public static writeStringAttribute(out: org.xmlpull.v1.XmlSerializer, name: string, value: string): void;
							public static writeIntArrayXml(val: number[], name: string, out: org.xmlpull.v1.XmlSerializer): void;
							public static writeLongArrayXml(val: number[], name: string, out: org.xmlpull.v1.XmlSerializer): void;
							public static writeStringArrayXml(val: string[], name: string, out: org.xmlpull.v1.XmlSerializer): void;
							public static readListXml(in: java.io.InputStream): java.util.ArrayList<any>;
							public static parseUnsignedIntAttribute(charSeq: string): number;
							public static writeListXml(val: java.util.List<any>, out: java.io.OutputStream): void;
							public static readValueXml(parser: org.xmlpull.v1.XmlPullParser, name: string[]): any;
							public static readBooleanAttribute(in: org.xmlpull.v1.XmlPullParser, name: string, defaultValue: boolean): boolean;
							public static writeFloatAttribute(out: org.xmlpull.v1.XmlSerializer, name: string, value: number): void;
							public static writeByteArrayAttribute(out: org.xmlpull.v1.XmlSerializer, name: string, value: number[]): void;
							public static beginDocument(parser: org.xmlpull.v1.XmlPullParser, firstElementName: string): void;
							public static readIntAttribute(in: org.xmlpull.v1.XmlPullParser, name: string): number;
							public static readLongAttribute(in: org.xmlpull.v1.XmlPullParser, name: string, defaultValue: number): number;
							public static writeMapXml(val: java.util.Map<any,any>, out: org.xmlpull.v1.XmlSerializer, callback: com.evernote.android.job.util.support.XmlUtils.WriteMapCallback): void;
							public static readLongAttribute(in: org.xmlpull.v1.XmlPullParser, name: string): number;
							public static readBitmapAttribute(in: org.xmlpull.v1.XmlPullParser, name: string): android.graphics.Bitmap;
							public static readByteArrayAttribute(in: org.xmlpull.v1.XmlPullParser, name: string): number[];
							public static writeIntAttribute(out: org.xmlpull.v1.XmlSerializer, name: string, value: number): void;
							public static writeDoubleArrayXml(val: number[], name: string, out: org.xmlpull.v1.XmlSerializer): void;
							public static readThisMapXml(parser: org.xmlpull.v1.XmlPullParser, endTag: string, name: string[]): java.util.HashMap<string,any>;
							public static writeMapXml(val: java.util.Map<any,any>, name: string, out: org.xmlpull.v1.XmlSerializer): void;
							public static readMapXml(in: java.io.InputStream): java.util.HashMap<string,any>;
							public static writeLongAttribute(out: org.xmlpull.v1.XmlSerializer, name: string, value: number): void;
							public static convertValueToBoolean(value: string, defaultValue: boolean): boolean;
							public static writeSetXml(val: java.util.Set<any>, name: string, out: org.xmlpull.v1.XmlSerializer): void;
							public static readThisIntArrayXml(parser: org.xmlpull.v1.XmlPullParser, endTag: string, name: string[]): number[];
							public static readSetXml(in: java.io.InputStream): java.util.HashSet<any>;
							public static readThisSetXml(parser: org.xmlpull.v1.XmlPullParser, endTag: string, name: string[]): java.util.HashSet<any>;
							public static convertValueToList(value: string, options: string[], defaultValue: number): number;
							public static readThisMapXml(parser: org.xmlpull.v1.XmlPullParser, endTag: string, name: string[], callback: com.evernote.android.job.util.support.XmlUtils.ReadMapCallback): java.util.HashMap<string,any>;
							public static skipCurrentTag(parser: org.xmlpull.v1.XmlPullParser): void;
							public static readThisLongArrayXml(parser: org.xmlpull.v1.XmlPullParser, endTag: string, name: string[]): number[];
							public static readFloatAttribute(in: org.xmlpull.v1.XmlPullParser, name: string): number;
							public static readBooleanAttribute(in: org.xmlpull.v1.XmlPullParser, name: string): boolean;
							public static readUriAttribute(in: org.xmlpull.v1.XmlPullParser, name: string): android.net.Uri;
							public static writeListXml(val: java.util.List<any>, name: string, out: org.xmlpull.v1.XmlSerializer): void;
							public static writeMapXml(val: java.util.Map<any,any>, out: java.io.OutputStream): void;
						}
						export module XmlUtils {
							export class ReadMapCallback extends java.lang.Object {
								public static class: java.lang.Class<com.evernote.android.job.util.support.XmlUtils.ReadMapCallback>;
								/**
								 * Constructs a new instance of the com.evernote.android.job.util.support.XmlUtils$ReadMapCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									readThisUnknownObjectXml(param0: org.xmlpull.v1.XmlPullParser, param1: string): any;
								});
								public constructor();
								public readThisUnknownObjectXml(param0: org.xmlpull.v1.XmlPullParser, param1: string): any;
							}
							export class WriteMapCallback extends java.lang.Object {
								public static class: java.lang.Class<com.evernote.android.job.util.support.XmlUtils.WriteMapCallback>;
								/**
								 * Constructs a new instance of the com.evernote.android.job.util.support.XmlUtils$WriteMapCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									writeUnknownObject(param0: any, param1: string, param2: org.xmlpull.v1.XmlSerializer): void;
								});
								public constructor();
								public writeUnknownObject(param0: any, param1: string, param2: org.xmlpull.v1.XmlSerializer): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module v14 {
					export class JobProxy14 extends java.lang.Object implements com.evernote.android.job.JobProxy {
						public static class: java.lang.Class<com.evernote.android.job.v14.JobProxy14>;
						public mContext: android.content.Context;
						public mCat: com.evernote.android.job.util.JobCat;
						public isPlatformJobScheduled(request: com.evernote.android.job.JobRequest): boolean;
						public constructor(context: android.content.Context);
						public plantPeriodicFlexSupport(request: com.evernote.android.job.JobRequest): void;
						public getPendingIntent(request: com.evernote.android.job.JobRequest, flags: number): android.app.PendingIntent;
						public getType(wakeup: boolean): number;
						public plantOneOff(param0: com.evernote.android.job.JobRequest): void;
						public plantPeriodicFlexSupport(param0: com.evernote.android.job.JobRequest): void;
						public cancel(param0: number): void;
						public plantOneOffInexact(request: com.evernote.android.job.JobRequest, alarmManager: android.app.AlarmManager, pendingIntent: android.app.PendingIntent): void;
						public plantPeriodic(param0: com.evernote.android.job.JobRequest): void;
						public plantOneOffExact(request: com.evernote.android.job.JobRequest, alarmManager: android.app.AlarmManager, pendingIntent: android.app.PendingIntent): void;
						public plantPeriodic(request: com.evernote.android.job.JobRequest): void;
						public getTriggerAtMillis(request: com.evernote.android.job.JobRequest): number;
						public getAlarmManager(): android.app.AlarmManager;
						public constructor(context: android.content.Context, logTag: string);
						public plantOneOff(request: com.evernote.android.job.JobRequest): void;
						public plantOneOffFlexSupport(request: com.evernote.android.job.JobRequest, alarmManager: android.app.AlarmManager, pendingIntent: android.app.PendingIntent): void;
						public getPendingIntent(request: com.evernote.android.job.JobRequest, repeating: boolean): android.app.PendingIntent;
						public cancel(jobId: number): void;
						public getPendingIntent(jobId: number, exact: boolean, transientExtras: android.os.Bundle, flags: number): android.app.PendingIntent;
						public createPendingIntentFlags(repeating: boolean): number;
						public isPlatformJobScheduled(param0: com.evernote.android.job.JobRequest): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module v14 {
					export class PlatformAlarmReceiver extends android.content.BroadcastReceiver {
						public static class: java.lang.Class<com.evernote.android.job.v14.PlatformAlarmReceiver>;
						public constructor();
						public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
						public onReceive(context: android.content.Context, intent: android.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module v14 {
					export class PlatformAlarmService extends androidx.core.app.SafeJobIntentService {
						public static class: java.lang.Class<com.evernote.android.job.v14.PlatformAlarmService>;
						public onHandleWork(intent: android.content.Intent): void;
						public constructor();
						public onTrimMemory(level: number): void;
						public onTrimMemory(param0: number): void;
						public onHandleWork(param0: android.content.Intent): void;
						public constructor(base: android.content.Context);
						public static start(context: android.content.Context, jobId: number, transientExtras: android.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module v14 {
					export class PlatformAlarmServiceExact extends android.app.Service {
						public static class: java.lang.Class<com.evernote.android.job.v14.PlatformAlarmServiceExact>;
						public constructor();
						public onDestroy(): void;
						public onCreate(): void;
						public onTrimMemory(level: number): void;
						public static createIntent(context: android.content.Context, jobId: number, transientExtras: android.os.Bundle): android.content.Intent;
						public onBind(param0: android.content.Intent): android.os.IBinder;
						public onTrimMemory(param0: number): void;
						public onStartCommand(intent: android.content.Intent, flags: number, startId: number): number;
						public constructor(base: android.content.Context);
						public onBind(intent: android.content.Intent): android.os.IBinder;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module v19 {
					export class JobProxy19 extends com.evernote.android.job.v14.JobProxy14 {
						public static class: java.lang.Class<com.evernote.android.job.v19.JobProxy19>;
						public isPlatformJobScheduled(request: com.evernote.android.job.JobRequest): boolean;
						public constructor(context: android.content.Context);
						public plantPeriodicFlexSupport(request: com.evernote.android.job.JobRequest): void;
						public plantOneOff(param0: com.evernote.android.job.JobRequest): void;
						public plantPeriodicFlexSupport(param0: com.evernote.android.job.JobRequest): void;
						public cancel(param0: number): void;
						public plantOneOffInexact(request: com.evernote.android.job.JobRequest, alarmManager: android.app.AlarmManager, pendingIntent: android.app.PendingIntent): void;
						public plantPeriodic(param0: com.evernote.android.job.JobRequest): void;
						public plantPeriodic(request: com.evernote.android.job.JobRequest): void;
						public constructor(context: android.content.Context, logTag: string);
						public plantOneOff(request: com.evernote.android.job.JobRequest): void;
						public plantOneOffFlexSupport(request: com.evernote.android.job.JobRequest, alarmManager: android.app.AlarmManager, pendingIntent: android.app.PendingIntent): void;
						public cancel(jobId: number): void;
						public isPlatformJobScheduled(param0: com.evernote.android.job.JobRequest): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module v21 {
					export class PlatformJobService extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.v21.PlatformJobService>;
						public constructor();
						public onTrimMemory(level: number): void;
						public onStartJob(params: any): boolean;
						public onStopJob(param0: any): boolean;
						public onTrimMemory(param0: number): void;
						public onStopJob(params: any): boolean;
						public onStartJob(param0: any): boolean;
						public constructor(base: android.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module v21 {
					export class TransientBundleCompat extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.v21.TransientBundleCompat>;
						public static startWithTransientBundle(context: android.content.Context, request: com.evernote.android.job.JobRequest): boolean;
						public static isScheduled(context: android.content.Context, jobId: number): boolean;
						public static persistBundle(context: android.content.Context, request: com.evernote.android.job.JobRequest): void;
						public static cancel(context: android.content.Context, jobId: number, pendingIntent: android.app.PendingIntent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module evernote {
		export module android {
			export module job {
				export module work {
					export class TransientBundleHolder extends java.lang.Object {
						public static class: java.lang.Class<com.evernote.android.job.work.TransientBundleHolder>;
						public static putBundle(jobId: number, bundle: android.os.Bundle): void;
						public static getBundle(jobId: number): android.os.Bundle;
						public static cleanUpBundle(jobId: number): void;
					}
				}
			}
		}
	}
}

//Generics information:

