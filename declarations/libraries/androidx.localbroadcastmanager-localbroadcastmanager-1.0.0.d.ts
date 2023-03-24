declare module androidx {
	export module localbroadcastmanager {
		export module content {
			export class LocalBroadcastManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.localbroadcastmanager.content.LocalBroadcastManager>;
				public sendBroadcast(intent: android.content.Intent): boolean;
				public registerReceiver(receiver: android.content.BroadcastReceiver, filter: android.content.IntentFilter): void;
				public unregisterReceiver(receiver: android.content.BroadcastReceiver): void;
				public sendBroadcastSync(intent: android.content.Intent): void;
				public static getInstance(context: android.content.Context): androidx.localbroadcastmanager.content.LocalBroadcastManager;
			}
			export module LocalBroadcastManager {
				export class BroadcastRecord extends java.lang.Object {
					public static class: java.lang.Class<androidx.localbroadcastmanager.content.LocalBroadcastManager.BroadcastRecord>;
				}
				export class ReceiverRecord extends java.lang.Object {
					public static class: java.lang.Class<androidx.localbroadcastmanager.content.LocalBroadcastManager.ReceiverRecord>;
					public toString(): string;
				}
			}
		}
	}
}

//Generics information:

