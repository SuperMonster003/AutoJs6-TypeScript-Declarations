// Type definitions for AutoJs6 internal module settings
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Jul 27, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/settings/Settings.kt
 */

declare namespace Internal {

    interface Settings {

        isEnabled(key: Settings.Key | string): boolean;

        setEnabled(key: Settings.Key | string, enabled: boolean): void;

    }

    namespace Settings {

        type Key = 'stable_mode'
            | 'key_stable_mode'
            | 'enable_accessibility_service_by_root'
            | 'key_enable_accessibility_service_by_root'
            | 'key_enable_a11y_service_with_root_access'
            | 'stop_all_on_volume_up'
            | 'key_use_volume_control_running'
            | 'not_show_console'
            | 'key_dont_show_main_activity'
            | 'key_not_showing_main_activity'
            | 'foreground_service'
            | 'key_foreground_service';

    }

}
