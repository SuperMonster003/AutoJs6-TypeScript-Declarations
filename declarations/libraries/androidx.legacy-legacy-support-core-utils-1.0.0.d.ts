declare module androidx {
	export module legacy {
		export module content {
			export abstract class WakefulBroadcastReceiver extends android.content.BroadcastReceiver {
				public static class: java.lang.Class<androidx.legacy.content.WakefulBroadcastReceiver>;
				public static completeWakefulIntent(intent: android.content.Intent): boolean;
				public static startWakefulService(context: android.content.Context, intent: android.content.Intent): android.content.ComponentName;
				public constructor();
			}
		}
	}
}

//Generics information:

