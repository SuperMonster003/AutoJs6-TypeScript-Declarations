/// <reference path="../android.d.ts" />

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
				public static getProp(param0: string): string;
				public static isMiui(): boolean;
				public static isOppo(): boolean;
				public static isQiku(): boolean;
				public static isSmartisan(): boolean;
				public static getName(): string;
				public static getVersion(): string;
				public static isVivo(): boolean;
				public static check(param0: string): boolean;
				public static isFlyme(): boolean;
				public constructor();
				public static isEmui(): boolean;
			}
		}
	}
}

declare module ezy {
	export module assist {
		export module compat {
			export class SettingsCompat extends java.lang.Object {
				public static class: java.lang.Class<ezy.assist.compat.SettingsCompat>;
				public static setDrawOverlays(param0: globalAndroid.content.Context, param1: boolean): boolean;
				public static manageDrawOverlays(param0: globalAndroid.content.Context): void;
				public static setWriteSettings(param0: globalAndroid.content.Context, param1: boolean): boolean;
				public static manageWriteSettings(param0: globalAndroid.content.Context): void;
				public static canWriteSettings(param0: globalAndroid.content.Context): boolean;
				public static canDrawOverlays(param0: globalAndroid.content.Context): boolean;
				public constructor();
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

