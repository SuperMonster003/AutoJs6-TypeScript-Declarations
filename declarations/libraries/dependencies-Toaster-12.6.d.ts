/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module com {
	export module hjq {
		export module toast {
			export class ActivityStack extends java.lang.Object implements android.app.Application.ActivityLifecycleCallbacks {
				public static class: java.lang.Class<com.hjq.toast.ActivityStack>;
				public onActivityCreated(activity: android.app.Activity, savedInstanceState: android.os.Bundle): void;
				public onActivityPaused(param0: android.app.Activity): void;
				public onActivityDestroyed(param0: android.app.Activity): void;
				public getForegroundActivity(): android.app.Activity;
				public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
				public onActivitySaveInstanceState(activity: android.app.Activity, outState: android.os.Bundle): void;
				public onActivityStopped(param0: android.app.Activity): void;
				public onActivityStopped(activity: android.app.Activity): void;
				public register(application: android.app.Application): void;
				public onActivityStarted(param0: android.app.Activity): void;
				public onActivityResumed(param0: android.app.Activity): void;
				public onActivityStarted(activity: android.app.Activity): void;
				public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
				public onActivityPaused(activity: android.app.Activity): void;
				public onActivityDestroyed(activity: android.app.Activity): void;
				public static getInstance(): com.hjq.toast.ActivityStack;
				public onActivityResumed(activity: android.app.Activity): void;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class ActivityToast extends com.hjq.toast.CustomToast {
				public static class: java.lang.Class<com.hjq.toast.ActivityToast>;
				public getYOffset(): number;
				public setMargin(horizontalMargin: number, verticalMargin: number): void;
				public setText(id: number): void;
				public getDuration(): number;
				public getVerticalMargin(): number;
				public findMessageView(view: android.view.View): android.widget.TextView;
				public setGravity(param0: number, param1: number, param2: number): void;
				public setMargin(param0: number, param1: number): void;
				public constructor();
				public constructor(activity: android.app.Activity);
				public show(): void;
				public getGravity(): number;
				public getXOffset(): number;
				public setView(view: android.view.View): void;
				public setDuration(duration: number): void;
				public setText(param0: number): void;
				public cancel(): void;
				public setGravity(gravity: number, xOffset: number, yOffset: number): void;
				public getHorizontalMargin(): number;
				public setView(param0: android.view.View): void;
				public getView(): android.view.View;
				public setDuration(param0: number): void;
				public setText(text: string): void;
				public setText(param0: string): void;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export abstract class CustomToast extends java.lang.Object implements com.hjq.toast.config.IToast {
				public static class: java.lang.Class<com.hjq.toast.CustomToast>;
				public getYOffset(): number;
				public setMargin(horizontalMargin: number, verticalMargin: number): void;
				public getDuration(): number;
				public getVerticalMargin(): number;
				public getAnimationsId(): number;
				public findMessageView(view: android.view.View): android.widget.TextView;
				public setGravity(param0: number, param1: number, param2: number): void;
				public setMargin(param0: number, param1: number): void;
				public constructor();
				public show(): void;
				public getGravity(): number;
				public setLongDuration(duration: number): void;
				public setDuration(duration: number): void;
				public cancel(): void;
				public getView(): android.view.View;
				public setView(param0: android.view.View): void;
				public setDuration(param0: number): void;
				public setText(text: string): void;
				public getShortDuration(): number;
				public setAnimationsId(animationsId: number): void;
				public setText(id: number): void;
				public setShortDuration(duration: number): void;
				public getXOffset(): number;
				public setView(view: android.view.View): void;
				public setText(param0: number): void;
				public setGravity(gravity: number, xOffset: number, yOffset: number): void;
				public getHorizontalMargin(): number;
				public getLongDuration(): number;
				public setText(param0: string): void;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class GlobalToast extends com.hjq.toast.CustomToast {
				public static class: java.lang.Class<com.hjq.toast.GlobalToast>;
				public getYOffset(): number;
				public constructor(application: android.app.Application);
				public setMargin(horizontalMargin: number, verticalMargin: number): void;
				public setText(id: number): void;
				public getDuration(): number;
				public getVerticalMargin(): number;
				public findMessageView(view: android.view.View): android.widget.TextView;
				public setGravity(param0: number, param1: number, param2: number): void;
				public setMargin(param0: number, param1: number): void;
				public constructor();
				public show(): void;
				public getGravity(): number;
				public getXOffset(): number;
				public setView(view: android.view.View): void;
				public setDuration(duration: number): void;
				public setText(param0: number): void;
				public cancel(): void;
				public setGravity(gravity: number, xOffset: number, yOffset: number): void;
				public getHorizontalMargin(): number;
				public setView(param0: android.view.View): void;
				public getView(): android.view.View;
				public setDuration(param0: number): void;
				public setText(text: string): void;
				public setText(param0: string): void;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class NotificationServiceProxy extends java.lang.Object implements java.lang.reflect.InvocationHandler {
				public static class: java.lang.Class<com.hjq.toast.NotificationServiceProxy>;
				public constructor(realObject: any);
				public invoke(param0: any, param1: java.lang.reflect.Method, param2: any[]): any;
				public invoke(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class NotificationToast extends com.hjq.toast.SystemToast {
				public static class: java.lang.Class<com.hjq.toast.NotificationToast>;
				public getYOffset(): number;
				public constructor(application: android.app.Application);
				public setMargin(horizontalMargin: number, verticalMargin: number): void;
				public constructor(context: android.content.Context);
				public getDuration(): number;
				public getVerticalMargin(): number;
				public findMessageView(view: android.view.View): android.widget.TextView;
				public setGravity(param0: number, param1: number, param2: number): void;
				public setMargin(param0: number, param1: number): void;
				public show(): void;
				public setText(resId: number): void;
				public getGravity(): number;
				public getXOffset(): number;
				public setView(view: android.view.View): void;
				public setDuration(duration: number): void;
				public setText(param0: number): void;
				public cancel(): void;
				public setGravity(gravity: number, xOffset: number, yOffset: number): void;
				public getHorizontalMargin(): number;
				public setView(param0: android.view.View): void;
				public getView(): android.view.View;
				public setDuration(param0: number): void;
				public setText(text: string): void;
				public setText(param0: string): void;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class SafeHandler extends android.os.Handler {
				public static class: java.lang.Class<com.hjq.toast.SafeHandler>;
				public handleMessage(msg: android.os.Message): void;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class SafeToast extends com.hjq.toast.NotificationToast {
				public static class: java.lang.Class<com.hjq.toast.SafeToast>;
				public getYOffset(): number;
				public constructor(application: android.app.Application);
				public setMargin(horizontalMargin: number, verticalMargin: number): void;
				public constructor(context: android.content.Context);
				public getDuration(): number;
				public getVerticalMargin(): number;
				public findMessageView(view: android.view.View): android.widget.TextView;
				public setGravity(param0: number, param1: number, param2: number): void;
				public setMargin(param0: number, param1: number): void;
				public show(): void;
				public setText(resId: number): void;
				public getGravity(): number;
				public getXOffset(): number;
				public setView(view: android.view.View): void;
				public setDuration(duration: number): void;
				public setText(param0: number): void;
				public cancel(): void;
				public setGravity(gravity: number, xOffset: number, yOffset: number): void;
				public getHorizontalMargin(): number;
				public setView(param0: android.view.View): void;
				public getView(): android.view.View;
				public setDuration(param0: number): void;
				public setText(text: string): void;
				public setText(param0: string): void;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class SystemToast extends android.widget.Toast implements com.hjq.toast.config.IToast {
				public static class: java.lang.Class<com.hjq.toast.SystemToast>;
				public getYOffset(): number;
				public constructor(application: android.app.Application);
				public setMargin(horizontalMargin: number, verticalMargin: number): void;
				public getDuration(): number;
				public getVerticalMargin(): number;
				public findMessageView(view: android.view.View): android.widget.TextView;
				public setGravity(param0: number, param1: number, param2: number): void;
				public setMargin(param0: number, param1: number): void;
				public show(): void;
				public setText(resId: number): void;
				public getGravity(): number;
				public setDuration(duration: number): void;
				public cancel(): void;
				public setView(param0: android.view.View): void;
				public getView(): android.view.View;
				public setDuration(param0: number): void;
				public setText(text: string): void;
				public constructor(context: android.content.Context);
				public getXOffset(): number;
				public setView(view: android.view.View): void;
				public setText(param0: number): void;
				public setGravity(gravity: number, xOffset: number, yOffset: number): void;
				public getHorizontalMargin(): number;
				public setText(s: string): void;
				public setText(param0: string): void;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class ToastImpl extends java.lang.Object {
				public static class: java.lang.Class<com.hjq.toast.ToastImpl>;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class ToastLogInterceptor extends java.lang.Object implements com.hjq.toast.config.IToastInterceptor {
				public static class: java.lang.Class<com.hjq.toast.ToastLogInterceptor>;
				public printToast(text: string): void;
				public printLog(msg: string): void;
				public intercept(params: com.hjq.toast.ToastParams): boolean;
				public isLogEnable(): boolean;
				public intercept(param0: com.hjq.toast.ToastParams): boolean;
				public filterClass(clazz: java.lang.Class<any>): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class ToastParams extends java.lang.Object {
				public static class: java.lang.Class<com.hjq.toast.ToastParams>;
				public text: string;
				public duration: number;
				public delayMillis: number;
				public crossPageShow: boolean;
				public style: com.hjq.toast.config.IToastStyle<any>;
				public strategy: com.hjq.toast.config.IToastStrategy;
				public interceptor: com.hjq.toast.config.IToastInterceptor;
				public constructor();
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class ToastStrategy extends java.lang.Object implements com.hjq.toast.config.IToastStrategy {
				public static class: java.lang.Class<com.hjq.toast.ToastStrategy>;
				public static SHOW_STRATEGY_TYPE_IMMEDIATELY: number;
				public static SHOW_STRATEGY_TYPE_QUEUE: number;
				public cancelToast(): void;
				public getForegroundActivity(): android.app.Activity;
				public registerStrategy(application: android.app.Application): void;
				public showToast(param0: com.hjq.toast.ToastParams): void;
				public createToast(params: com.hjq.toast.ToastParams): com.hjq.toast.config.IToast;
				public generateToastWaitMillis(params: com.hjq.toast.ToastParams): number;
				public constructor();
				public areNotificationsEnabled(context: android.content.Context): boolean;
				public isActivityAvailable(activity: android.app.Activity): boolean;
				public onlyShowSystemToastStyle(): boolean;
				public createToast(param0: com.hjq.toast.ToastParams): com.hjq.toast.config.IToast;
				public showToast(params: com.hjq.toast.ToastParams): void;
				public diyToastStyle(toast: com.hjq.toast.config.IToast, style: com.hjq.toast.config.IToastStyle<any>): void;
				public isChangeEnabledCompat(changeId: number): boolean;
				public registerStrategy(param0: android.app.Application): void;
				public constructor(type: number);
				public isSupportToastStyle(toast: com.hjq.toast.config.IToast): boolean;
			}
			export module ToastStrategy {
				export class CancelToastRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<com.hjq.toast.ToastStrategy.CancelToastRunnable>;
					public run(): void;
				}
				export class ShowToastRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<com.hjq.toast.ToastStrategy.ShowToastRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class Toaster extends java.lang.Object {
				public static class: java.lang.Class<com.hjq.toast.Toaster>;
				public static setStrategy(strategy: com.hjq.toast.config.IToastStrategy): void;
				public static delayedShow(object: any, delayMillis: number): void;
				public static init(application: android.app.Application, strategy: com.hjq.toast.config.IToastStrategy): void;
				public static debugShow(id: number): void;
				public static showLong(id: number): void;
				public static setInterceptor(interceptor: com.hjq.toast.config.IToastInterceptor): void;
				public static isInit(): boolean;
				public static delayedShow(text: string, delayMillis: number): void;
				public static getStrategy(): com.hjq.toast.config.IToastStrategy;
				public static setView(id: number): void;
				public static init(application: android.app.Application, strategy: com.hjq.toast.config.IToastStrategy, style: com.hjq.toast.config.IToastStyle<any>): void;
				public static setGravity(gravity: number): void;
				public static debugShow(object: any): void;
				public static showLong(object: any): void;
				public static delayedShow(id: number, delayMillis: number): void;
				public static cancel(): void;
				public static setStyle(style: com.hjq.toast.config.IToastStyle<any>): void;
				public static showShort(id: number): void;
				public static showShort(object: any): void;
				public static show(params: com.hjq.toast.ToastParams): void;
				public static show(id: number): void;
				public static setGravity(gravity: number, xOffset: number, yOffset: number): void;
				public static showLong(text: string): void;
				public static show(object: any): void;
				public static init(application: android.app.Application, style: com.hjq.toast.config.IToastStyle<any>): void;
				public static setGravity(gravity: number, xOffset: number, yOffset: number, horizontalMargin: number, verticalMargin: number): void;
				public static showShort(text: string): void;
				public static show(text: string): void;
				public static getStyle(): com.hjq.toast.config.IToastStyle<any>;
				public static init(application: android.app.Application): void;
				public static setDebugMode(debug: boolean): void;
				public static debugShow(text: string): void;
				public static getInterceptor(): com.hjq.toast.config.IToastInterceptor;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export class WindowLifecycle extends java.lang.Object implements android.app.Application.ActivityLifecycleCallbacks {
				public static class: java.lang.Class<com.hjq.toast.WindowLifecycle>;
				public onActivityCreated(activity: android.app.Activity, savedInstanceState: android.os.Bundle): void;
				public onActivityPaused(param0: android.app.Activity): void;
				public onActivityDestroyed(param0: android.app.Activity): void;
				public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
				public getWindowManager(): android.view.WindowManager;
				public onActivitySaveInstanceState(activity: android.app.Activity, outState: android.os.Bundle): void;
				public onActivityStopped(param0: android.app.Activity): void;
				public onActivityStopped(activity: android.app.Activity): void;
				public onActivityStarted(param0: android.app.Activity): void;
				public onActivityResumed(param0: android.app.Activity): void;
				public onActivityStarted(activity: android.app.Activity): void;
				public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
				public onActivityPaused(activity: android.app.Activity): void;
				public onActivityDestroyed(activity: android.app.Activity): void;
				public onActivityResumed(activity: android.app.Activity): void;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export module config {
				export class IToast extends java.lang.Object {
					public static class: java.lang.Class<com.hjq.toast.config.IToast>;
					/**
					 * Constructs a new instance of the com.hjq.toast.config.IToast interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						show(): void;
						cancel(): void;
						setText(param0: number): void;
						setText(param0: string): void;
						setView(param0: android.view.View): void;
						getView(): android.view.View;
						setDuration(param0: number): void;
						getDuration(): number;
						setGravity(param0: number, param1: number, param2: number): void;
						getGravity(): number;
						getXOffset(): number;
						getYOffset(): number;
						setMargin(param0: number, param1: number): void;
						getHorizontalMargin(): number;
						getVerticalMargin(): number;
						findMessageView(view: android.view.View): android.widget.TextView;
					});
					public constructor();
					public getHorizontalMargin(): number;
					public getGravity(): number;
					public show(): void;
					public setView(param0: android.view.View): void;
					public findMessageView(view: android.view.View): android.widget.TextView;
					public cancel(): void;
					public setDuration(param0: number): void;
					public setText(param0: number): void;
					public getXOffset(): number;
					public getView(): android.view.View;
					public getVerticalMargin(): number;
					public getDuration(): number;
					public setText(param0: string): void;
					public getYOffset(): number;
					public setMargin(param0: number, param1: number): void;
					public setGravity(param0: number, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export module config {
				export class IToastInterceptor extends java.lang.Object {
					public static class: java.lang.Class<com.hjq.toast.config.IToastInterceptor>;
					/**
					 * Constructs a new instance of the com.hjq.toast.config.IToastInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						intercept(param0: com.hjq.toast.ToastParams): boolean;
					});
					public constructor();
					public intercept(param0: com.hjq.toast.ToastParams): boolean;
				}
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export module config {
				export class IToastStrategy extends java.lang.Object {
					public static class: java.lang.Class<com.hjq.toast.config.IToastStrategy>;
					/**
					 * Constructs a new instance of the com.hjq.toast.config.IToastStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerStrategy(param0: android.app.Application): void;
						createToast(param0: com.hjq.toast.ToastParams): com.hjq.toast.config.IToast;
						showToast(param0: com.hjq.toast.ToastParams): void;
						cancelToast(): void;
					});
					public constructor();
					public registerStrategy(param0: android.app.Application): void;
					public showToast(param0: com.hjq.toast.ToastParams): void;
					public createToast(param0: com.hjq.toast.ToastParams): com.hjq.toast.config.IToast;
					public cancelToast(): void;
				}
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export module config {
				export class IToastStyle<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.hjq.toast.config.IToastStyle<any>>;
					/**
					 * Constructs a new instance of the com.hjq.toast.config.IToastStyle<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createView(param0: android.content.Context): V;
						getGravity(): number;
						getXOffset(): number;
						getYOffset(): number;
						getHorizontalMargin(): number;
						getVerticalMargin(): number;
					});
					public constructor();
					public getHorizontalMargin(): number;
					public getVerticalMargin(): number;
					public getGravity(): number;
					public createView(param0: android.content.Context): V;
					public getYOffset(): number;
					public getXOffset(): number;
				}
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export module style {
				export class BlackToastStyle extends com.hjq.toast.config.IToastStyle<android.view.View> {
					public static class: java.lang.Class<com.hjq.toast.style.BlackToastStyle>;
					public getHorizontalMargin(): number;
					public getTextSize(context: android.content.Context): number;
					public getGravity(): number;
					public getTranslationZ(context: android.content.Context): number;
					public getBackgroundDrawable(context: android.content.Context): android.graphics.drawable.Drawable;
					public getXOffset(): number;
					public getVerticalMargin(): number;
					public getTextGravity(context: android.content.Context): number;
					public getYOffset(): number;
					public getTextColor(context: android.content.Context): number;
					public constructor();
					public createView(param0: android.content.Context): any;
					public createView(context: android.content.Context): android.view.View;
					public getVerticalPadding(context: android.content.Context): number;
					public getHorizontalPadding(context: android.content.Context): number;
				}
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export module style {
				export class CustomToastStyle extends com.hjq.toast.config.IToastStyle<android.view.View> {
					public static class: java.lang.Class<com.hjq.toast.style.CustomToastStyle>;
					public constructor(id: number, gravity: number);
					public getHorizontalMargin(): number;
					public getVerticalMargin(): number;
					public getGravity(): number;
					public getYOffset(): number;
					public constructor(id: number, gravity: number, xOffset: number, yOffset: number);
					public constructor(id: number);
					public createView(param0: android.content.Context): any;
					public createView(context: android.content.Context): android.view.View;
					public getXOffset(): number;
					public constructor(id: number, gravity: number, xOffset: number, yOffset: number, horizontalMargin: number, verticalMargin: number);
				}
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export module style {
				export class LocationToastStyle extends com.hjq.toast.config.IToastStyle<android.view.View> {
					public static class: java.lang.Class<com.hjq.toast.style.LocationToastStyle>;
					public constructor(style: com.hjq.toast.config.IToastStyle<any>, gravity: number, xOffset: number, yOffset: number, horizontalMargin: number, verticalMargin: number);
					public getHorizontalMargin(): number;
					public getVerticalMargin(): number;
					public getGravity(): number;
					public getYOffset(): number;
					public createView(param0: android.content.Context): any;
					public createView(context: android.content.Context): android.view.View;
					public getXOffset(): number;
					public constructor(style: com.hjq.toast.config.IToastStyle<any>, gravity: number);
				}
			}
		}
	}
}

declare module com {
	export module hjq {
		export module toast {
			export module style {
				export class WhiteToastStyle extends com.hjq.toast.style.BlackToastStyle {
					public static class: java.lang.Class<com.hjq.toast.style.WhiteToastStyle>;
					public getHorizontalMargin(): number;
					public getVerticalMargin(): number;
					public getGravity(): number;
					public getYOffset(): number;
					public getTextColor(context: android.content.Context): number;
					public constructor();
					public createView(param0: android.content.Context): any;
					public createView(context: android.content.Context): android.view.View;
					public getBackgroundDrawable(context: android.content.Context): android.graphics.drawable.Drawable;
					public getXOffset(): number;
				}
			}
		}
	}
}

//Generics information:
//com.hjq.toast.config.IToastStyle:1

