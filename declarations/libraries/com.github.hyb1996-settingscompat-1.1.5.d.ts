declare module ezy {
	export module assist {
		export module compat {
			export class RomUtil extends java.lang.Object {
				public static class: java.lang.Class<ezy.assist.compat.RomUtil>;
				public static ROM_MIUI: string;
				public static ROM_EMUI: string;
				public static ROM_FLYME: string;
				public static ROM_OPPO: string;
				public static ROM_SMARTISAN: string;
				public static ROM_VIVO: string;
				public static ROM_QIKU: string;
				public static ROM_LENOVO: string;
				public static ROM_SAMSUNG: string;
				public static check(rom: string): boolean;
				public static isMiui(): boolean;
				public static isOppo(): boolean;
				public static isQiku(): boolean;
				public static isSmartisan(): boolean;
				public static getName(): string;
				public static getVersion(): string;
				public static isVivo(): boolean;
				public static isFlyme(): boolean;
				public constructor();
				public static isEmui(): boolean;
				public static getProp(name: string): string;
			}
		}
	}
}

declare module ezy {
	export module assist {
		export module compat {
			export class SettingsCompat extends java.lang.Object {
				public static class: java.lang.Class<ezy.assist.compat.SettingsCompat>;
				public static manageWriteSettings(context: android.content.Context): void;
				public static canDrawOverlays(context: android.content.Context): boolean;
				public static setWriteSettings(context: android.content.Context, allowed: boolean): boolean;
				public static manageDrawOverlays(context: android.content.Context): void;
				public constructor();
				public static canWriteSettings(context: android.content.Context): boolean;
				public static setDrawOverlays(context: android.content.Context, allowed: boolean): boolean;
			}
		}
	}
}

declare module ezy {
	export module assist {
		export module settingscompat {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<ezy.assist.settingscompat.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

//Generics information:

