declare module "notifications" {
  namespace notifications {
    export type NotificationId = number;
    export type NotificationPriority = "min" | "low" | "default" | "high" | "max" | -2 | -1 | 0 | 1 | 2;

    export interface NotifyOptions {
      id?: NotificationId;
      title?: string;
      text?: string;
      channel?: string;
      channelName?: string;
      ongoing?: boolean;
      priority?: NotificationPriority;
    }

    export interface NotificationSettingsOptions extends AutoJs6Node.BridgeCallOptions {
      dryRun?: boolean;
    }

    export interface NotificationPermissionStatus {
      readonly schema: "autojs6-node-notification-permission-status-v1";
      readonly sdkInt: number;
      readonly notificationsEnabled: boolean;
      readonly postNotificationsPermissionRequired: boolean;
      readonly postNotificationsPermissionGranted: boolean;
      readonly canOpenSettings: boolean;
    }

    export interface NotificationSettingsResult extends NotificationPermissionStatus {
      readonly opened: boolean;
      readonly dryRun: boolean;
      readonly action: string;
      readonly reason: string;
    }

    /** Rhino notice.config presets: defaults of this thread (title, text, channel and channelName feed notify). */
    export interface NoticePreset {
      useScriptNameAsDefaultChannelId?: boolean | null;
      useDynamicDefaultNotificationId?: boolean | null;
      enableChannelInvalidModificationWarnings?: boolean | null;
      defaultTitle?: string | null;
      defaultContent?: string | null;
      defaultBigContent?: string | null;
      defaultAppendScriptName?: unknown;
      defaultAutoCancel?: boolean | null;
      defaultIsSilent?: boolean | null;
      defaultPriority?: unknown;
      defaultChannelId?: string | null;
      defaultChannelName?: string | null;
      defaultChannelDescription?: string | null;
      defaultImportanceForChannel?: unknown;
      defaultEnableVibrationForChannel?: boolean | null;
      defaultVibrationPatternForChannel?: unknown;
      defaultEnableLightsForChannel?: boolean | null;
      defaultLightColorForChannel?: unknown;
      defaultLockscreenVisibilityForChannel?: unknown;
    }

    export interface ChannelOptions {
      id?: string | number;
      channelId?: string | number;
      name?: string;
      description?: string;
      importance?: number;
      enableVibration?: boolean;
      vibrationPattern?: readonly number[];
      enableLights?: boolean;
      lightColor?: number;
      lockscreenVisibility?: number;
    }

    export interface Channel {
      readonly id: string;
      readonly name: string | null;
      readonly description: string | null;
      readonly importance: number;
      readonly [key: string]: AutoJs6Node.JsonValue;
    }

    /** Rhino notice.channel (Android 8+; an id defaults to "script_channel"). */
    export interface ChannelModule {
      create(channelId: string | number | ChannelOptions, options?: ChannelOptions | null, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<string>;
      createIfNeeded(channelId: string | number | ChannelOptions, options?: ChannelOptions | null, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      contains(channelId: string | number, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      get(channelId: string | number, options?: AutoJs6Node.BridgeCallOptions): Promise<Channel | null>;
      getAll(options?: AutoJs6Node.BridgeCallOptions): Promise<readonly Channel[]>;
      remove(channelId: string | number, options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
    }

    export interface NotificationsModule {
      notify(options: NotifyOptions, callOptions?: AutoJs6Node.BridgeCallOptions): Promise<NotificationId>;
      /** Posts a NotificationCompat.Builder handle of the Java facade (java_interop). */
      notify(builder: import("java").ObjectHandle, callOptions?: { id?: NotificationId }): Promise<NotificationId>;
      cancel(id: NotificationId, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      cancelAll(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      getPermissionStatus(options?: AutoJs6Node.BridgeCallOptions): Promise<NotificationPermissionStatus>;
      openSettings(options?: NotificationSettingsOptions): Promise<NotificationSettingsResult>;
      openNotificationSettings(options?: NotificationSettingsOptions): Promise<NotificationSettingsResult>;
      isEnabled(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      /** Opens the notification settings and rejects when notifications are disabled (needs notifications.settings). */
      ensureEnabled(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      launchSettings(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      config(preset: NoticePreset): void;
      /** A NotificationCompat.Builder handle (java_interop), as Rhino's notice.getBuilder. */
      getBuilder(): Promise<import("java").ObjectHandle>;
      readonly builder: Promise<import("java").ObjectHandle>;
      readonly channel: ChannelModule;
    }
  }

  const notifications: notifications.NotificationsModule;
  export = notifications;
}

declare module "autojs6:notifications" { import notifications = require("notifications"); export = notifications; }
