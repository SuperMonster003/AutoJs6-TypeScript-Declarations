// Type definitions for AutoJs6 internal module settings
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Oct 22, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/settings/Settings.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/settings/SettingsScriptExport.kt
 */

declare namespace Internal {

    interface Settings {

        isEnabled(key: Settings.Key | string): boolean;

        setEnabled(key: Settings.Key | string, enabled: boolean): void;

        /**
         * Exports AutoJs6 settings to a settings archive (a zip file), the same file as the
         * "Export settings" wizard of "Manage AutoJs6 settings" writes, which that page imports.
         * Without `path` the archive goes to `backups/settings/` in the working directory of AutoJs6,
         * named `autojs6-settings-<yyyyMMdd-HHmmss>.zip` (`-1`, `-2` and so on are appended when the
         * name is taken); so does a `path` that ends with `/` or names an existing directory. Any
         * other `path` is the archive itself, replaced when it exists. Relative paths are resolved
         * as by `files.path`. Without `categories` the categories selected by default (see
         * `defaultSelected` of {@link categories}) are exported. Credentials are never exported:
         * requested with other categories, they are reported in `skipped` (`'sensitive'`), and so is
         * a data category without entries (`'empty'`). Throws, writing nothing, on a bad `path`, an
         * empty array or unknown id in `categories`, `categories` that only names `'credentials'`,
         * or a call on the UI thread; also throws when the archive exceeds 16 MB or cannot be written.
         * @since 6.8.0
         * @example
         * let result = settings.export('./exports/', [ 'appearance', 'general', 'credentials' ]);
         * console.log(result.path);
         * result.skipped.forEach(s => console.log(`${s.id}: ${s.reason}`)); // "credentials: sensitive"
         */
        export(path?: string | null, categories?: Settings.CategoryId | string | (Settings.CategoryId | string)[] | null): Settings.ExportResult;

        /**
         * Every settings category in the order of the settings page, as the export wizard lists
         * them, with the number of entries that can be exported now. Throws on the UI thread.
         * @since 6.8.0
         */
        categories(): Settings.Category[];

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

        type CategoryId = 'appearance'
            | 'general'
            | 'explorer'
            | 'history'
            | 'editor_general'
            | 'editor_appearance'
            | 'editor_log'
            | 'editor_assistance'
            | 'editor_smart_hint'
            | 'editor_gestures'
            | 'editor_gutter'
            | 'editor_performance'
            | 'editor_keyboard'
            | 'timed_task'
            | 'a11y'
            | 'running'
            | 'record'
            | 'extensibility'
            | 'updates'
            | 'console'
            | 'connection'
            | 'layout_inspector'
            | 'floating'
            | 'developer'
            | 'plugin_center'
            | 'plugin_enable_state'
            | 'apk_build'
            | 'wizards'
            | 'data_shortcuts'
            | 'data_color_library'
            | 'credentials'
            | 'other';

        /** `'data'` for the shortcuts and the color libraries, `'settings'` for the others. */
        type CategoryKind = 'settings' | 'data';

        /** `'sensitive'`: credentials, never exported by scripts; `'empty'`: a data category without entries. */
        type SkipReason = 'sensitive' | 'empty';

        interface Category {
            /** The id that {@link Settings.export} takes. */
            id: CategoryId;
            /** The name of the category, in the language of the app. */
            title: string;
            kind: CategoryKind;
            /** The number of entries that can be exported now. */
            entries: number;
            /** Whether {@link Settings.export} exports the category when `categories` is omitted. */
            defaultSelected: boolean;
            /** Whether the category is sensitive (credentials); scripts cannot export it. */
            sensitive: boolean;
        }

        interface ExportResult {
            /** The absolute path of the archive written. */
            path: string;
            /** The categories written, in the order of the settings page. */
            categories: CategoryId[];
            /** The number of entries written. */
            entries: number;
            /** The number of setting values left out because the archive cannot hold them. */
            unexportable: number;
            /** The categories requested but not written, with the reason. */
            skipped: { id: CategoryId; reason: SkipReason }[];
        }

    }

}
