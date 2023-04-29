// Type definitions for AutoJs6 internal module http
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.8.4
//
// Last modified: Mar 13, 2023

/// <reference path="../autojs6.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__notice__.js
 */

declare namespace Internal {

    interface Notice {

        (title: string, content: string, options?: Notice.Options): number;
        (content: string, options?: Notice.Options): number;
        (options?: Notice.Options): number;
        (builder: androidx.core.app.NotificationCompat.Builder, options?: Notice.Options): number;

        channel: Notice.Channel;

        getBuilder(): androidx.core.app.NotificationCompat.Builder;

        isEnabled(): boolean;

        ensureEnabled(): void;

        launchSettings(): void;

        config(preset: Notice.Config): void;

        cancel(id: number): void;

    }

}

declare namespace Notice {

    namespace Channel {

        namespace Options {

            /**
             * @enum
             * * NotificationManager.IMPORTANCE_UNSPECIFIED = -1000
             * * NotificationManager.IMPORTANCE_NONE = 0
             * * NotificationManager.IMPORTANCE_MIN = 1
             * * NotificationManager.IMPORTANCE_LOW = 2
             * * NotificationManager.IMPORTANCE_DEFAULT = 3
             * * NotificationManager.IMPORTANCE_HIGH = 4
             * * NotificationManager.IMPORTANCE_MAX = 5
             */
            type Importance = number | 'unspecified' | 'none' | 'min' | 'low' | 'default' | 'high' | 'max';

            /**
             * @enum
             * * NotificationManager.VISIBILITY_NO_OVERRIDE = -1000
             * * Notification.VISIBILITY_PUBLIC = 1
             * * Notification.VISIBILITY_PRIVATE = 0
             * * Notification.VISIBILITY_SECRET = -1
             */
            type LockscreenVisibility = number | 'no_override' | 'public' | 'private' | 'secret';

        }

        interface Options {

            id?: string | number;
            /**
             * @default string of R.string.default_script_notification_channel_name
             */
            name?: string;
            /**
             * @default string of R.string.default_script_notification_channel_description
             */
            description?: string;
            /**
             * Property importance only takes effect when create a channel at the first time.
             *
             * @default NotificationManager.IMPORTANCE_HIGH (4)
             */
            importance?: Options.Importance;
            enableVibration?: boolean;
            vibrationPattern?: number[] | string;
            enableLights?: boolean;
            lightColor?: OmniColor;
            lockscreenVisibility?: Options.LockscreenVisibility;

        }

    }

    interface Channel {

        create(channelId: Options.Id, options?: Notice.Channel.Options): string;
        create(options?: Notice.Channel.Options): string;

        createIfNeeded(channelId: Options.Id, options?: Notice.Channel.Options): string;
        createIfNeeded(options?: Notice.Channel.Options): string;

        remove(channelId: Options.Id): boolean;

        contains(channelId: Options.Id): boolean;

        get(channelId: Options.Id): android.app.NotificationChannel;

        getAll(): android.app.NotificationChannel[];

    }

    namespace Options {

        type Id = string | number;

        /**
         * @enum
         * * NotificationCompat.PRIORITY_DEFAULT = 0;
         * * NotificationCompat.PRIORITY_LOW = -1;
         * * NotificationCompat.PRIORITY_MIN = -2;
         * * NotificationCompat.PRIORITY_HIGH = 1;
         * * NotificationCompat.PRIORITY_MAX = 2;
         */
        type Priority = number | 'default' | 'low' | 'min' | 'high' | 'max';

        type AppendScriptName = Boolean | 'auto' | 'title' | 'content' | 'bigContent';

    }

    interface Options {

        channelId?: Notice.Options.Id | null;

        /**
         * Will override argument title if specified.
         *
         * @default string of R.string.default_script_notification_title (only when both title and content are null)
         */
        title?: string | null;
        /**
         * Will override argument content if specified.
         *
         * @default string of R.string.default_script_notification_content (only when both title and content are null)
         */
        content?: string | null;
        /**
         * @default null
         */
        bigContent?: string | null;
        /**
         * @default false
         */
        appendScriptName?: Options.AppendScriptName;
        /**
         * @default null
         */
        intent?: Intent.Common | Intent | Intent.ShortForm.Activity | Intent.UriString | null;
        /**
         * @default varies by (System.currentTimeMillis() % Int.MAX_VALUE).toInt()
         */
        notificationId?: number;
        /**
         * @default false
         */
        autoCancel?: boolean;
        /**
         * @default false
         */
        isSilent?: boolean;
        /**
         * @default NotificationCompat.PRIORITY_HIGH (1)
         */
        priority?: Options.Priority;
    }

    interface Config {

        useScriptNameAsDefaultChannelId: boolean;
        useDynamicDefaultNotificationId: boolean;
        enableChannelInvalidModificationWarnings: boolean;

        defaultTitle: string;
        defaultContent: string;
        defaultBigContent: string;
        defaultAppendScriptName: Options.AppendScriptName;
        defaultAutoCancel: boolean,
        defaultIsSilent: boolean,
        defaultPriority: Options.Priority;

        defaultChannelName: string;
        defaultChannelDescription: string;

        /**
         * @default NotificationManager.IMPORTANCE_HIGH (4)
         */
        defaultImportanceForChannel: Channel.Options.Importance;
        defaultEnableVibrationForChannel: boolean;
        defaultVibrationPatternForChannel: number[];
        defaultEnableLightsForChannel: boolean;
        defaultLightColorForChannel: OmniColor;
        /**
         * @default Notification.VISIBILITY_PUBLIC (1)
         */
        defaultLockscreenVisibilityForChannel: Channel.Options.LockscreenVisibility;

    }

}