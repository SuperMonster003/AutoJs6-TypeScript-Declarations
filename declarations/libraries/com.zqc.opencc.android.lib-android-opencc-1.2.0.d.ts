declare module com {
	export module zqc {
		export module opencc {
			export module android {
				export module lib {
					export class BuildConfig extends java.lang.Object {
						public static class: java.lang.Class<com.zqc.opencc.android.lib.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static BUILD_TYPE: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module zqc {
		export module opencc {
			export module android {
				export module lib {
					export class ChineseConverter extends java.lang.Object {
						public static class: java.lang.Class<com.zqc.opencc.android.lib.ChineseConverter>;
						public constructor();
						public static convert(text: string, conversionType: com.zqc.opencc.android.lib.ConversionType, context: android.content.Context): string;
						public static clearDictDataFolder(context: android.content.Context): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zqc {
		export module opencc {
			export module android {
				export module lib {
					export class ConversionType {
						public static class: java.lang.Class<com.zqc.opencc.android.lib.ConversionType>;
						public static HK2S: com.zqc.opencc.android.lib.ConversionType;
						public static HK2T: com.zqc.opencc.android.lib.ConversionType;
						public static JP2T: com.zqc.opencc.android.lib.ConversionType;
						public static S2HK: com.zqc.opencc.android.lib.ConversionType;
						public static S2T: com.zqc.opencc.android.lib.ConversionType;
						public static S2TW: com.zqc.opencc.android.lib.ConversionType;
						public static S2TWP: com.zqc.opencc.android.lib.ConversionType;
						public static T2HK: com.zqc.opencc.android.lib.ConversionType;
						public static T2S: com.zqc.opencc.android.lib.ConversionType;
						public static T2TW: com.zqc.opencc.android.lib.ConversionType;
						public static T2JP: com.zqc.opencc.android.lib.ConversionType;
						public static TW2S: com.zqc.opencc.android.lib.ConversionType;
						public static TW2T: com.zqc.opencc.android.lib.ConversionType;
						public static TW2SP: com.zqc.opencc.android.lib.ConversionType;
						public static values(): com.zqc.opencc.android.lib.ConversionType[];
						public getValue(): string;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): com.zqc.opencc.android.lib.ConversionType;
					}
				}
			}
		}
	}
}

//Generics information:

