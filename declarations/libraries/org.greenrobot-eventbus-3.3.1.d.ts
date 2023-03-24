declare module org {
	export module greenrobot {
		export module eventbus {
			export class HandlerPoster extends android.os.Handler implements org.greenrobot.eventbus.Poster {
				public static class: java.lang.Class<org.greenrobot.eventbus.HandlerPoster>;
				public constructor(eventBus: org.greenrobot.eventbus.EventBus, looper: android.os.Looper, maxMillisInsideHandleMessage: number);
				public enqueue(subscription: org.greenrobot.eventbus.Subscription, event: any): void;
				public constructor(callback: android.os.Handler.Callback);
				public constructor(looper: android.os.Looper);
				public constructor(looper: android.os.Looper, callback: android.os.Handler.Callback);
				public handleMessage(msg: android.os.Message): void;
				public enqueue(param0: org.greenrobot.eventbus.Subscription, param1: any): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module greenrobot {
		export module eventbus {
			export module android {
				export class AndroidComponentsImpl extends org.greenrobot.eventbus.android.AndroidComponents {
					public static class: java.lang.Class<org.greenrobot.eventbus.android.AndroidComponentsImpl>;
					public constructor();
					public constructor(param0: org.greenrobot.eventbus.Logger, param1: org.greenrobot.eventbus.MainThreadSupport);
				}
			}
		}
	}
}

declare module org {
	export module greenrobot {
		export module eventbus {
			export module android {
				export class AndroidLogger extends java.lang.Object implements org.greenrobot.eventbus.Logger {
					public static class: java.lang.Class<org.greenrobot.eventbus.android.AndroidLogger>;
					public log(level: java.util.logging.Level, msg: string): void;
					public log(param0: java.util.logging.Level, param1: string, param2: java.lang.Throwable): void;
					public log(param0: java.util.logging.Level, param1: string): void;
					public constructor(tag: string);
					public log(level: java.util.logging.Level, msg: string, th: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module org {
	export module greenrobot {
		export module eventbus {
			export module android {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<org.greenrobot.eventbus.android.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module greenrobot {
		export module eventbus {
			export module android {
				export class DefaultAndroidMainThreadSupport extends java.lang.Object implements org.greenrobot.eventbus.MainThreadSupport {
					public static class: java.lang.Class<org.greenrobot.eventbus.android.DefaultAndroidMainThreadSupport>;
					public createPoster(param0: org.greenrobot.eventbus.EventBus): org.greenrobot.eventbus.Poster;
					public constructor();
					public isMainThread(): boolean;
					public createPoster(eventBus: org.greenrobot.eventbus.EventBus): org.greenrobot.eventbus.Poster;
				}
			}
		}
	}
}

//Generics information:

