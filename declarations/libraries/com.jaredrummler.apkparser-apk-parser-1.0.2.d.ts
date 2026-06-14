/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module com {
	export module jaredrummler {
		export module apkparser {
			export class ApkParser extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<com.jaredrummler.apkparser.ApkParser>;
				public transBinaryXml(path: string): string;
				public getPreferredLocale(): java.util.Locale;
				public getCertificateMeta(): com.jaredrummler.apkparser.model.CertificateMeta;
				public getIconFile(): com.jaredrummler.apkparser.model.Icon;
				public close(): void;
				public setPreferredLocale(locale: java.util.Locale): void;
				public verifyApk(): number;
				public getAndroidManifest(): com.jaredrummler.apkparser.model.AndroidManifest;
				/** @deprecated */
				public getDexClasses(): com.jaredrummler.apkparser.model.DexClass[];
				public getLocales(): java.util.Set<java.util.Locale>;
				public static create(path: string): com.jaredrummler.apkparser.ApkParser;
				public static create(pm: android.content.pm.PackageManager, packageName: string): com.jaredrummler.apkparser.ApkParser;
				public static create(packageInfo: android.content.pm.PackageInfo): com.jaredrummler.apkparser.ApkParser;
				public getFileData(path: string): number[];
				public static create(applicationInfo: android.content.pm.ApplicationInfo): com.jaredrummler.apkparser.ApkParser;
				public static create(file: java.io.File): com.jaredrummler.apkparser.ApkParser;
				public getDexInfo(): com.jaredrummler.apkparser.model.DexInfo;
				public getApkMeta(): com.jaredrummler.apkparser.model.ApkMeta;
				/** @deprecated */
				public getDexHeader(): com.jaredrummler.apkparser.struct.dex.DexHeader;
				public getDexInfos(): java.util.List<com.jaredrummler.apkparser.model.DexInfo>;
				public getManifestXml(): string;
			}
			export module ApkParser {
				export class ApkSignStatus extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.ApkParser.ApkSignStatus>;
					public static NOT_SIGNED: number;
					public static INCORRECT: number;
					public static SIGNED: number;
					public constructor();
				}
				export class InvalidApkException extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.jaredrummler.apkparser.ApkParser.InvalidApkException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(detailMessage: string, throwable: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.jaredrummler.apkparser.BuildConfig>;
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

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module exception {
				export class ParserException extends java.io.IOException {
					public static class: java.lang.Class<com.jaredrummler.apkparser.exception.ParserException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(detailMessage: string, throwable: java.lang.Throwable);
					public constructor(msg: string);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module model {
				export class AndroidComponent extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.model.AndroidComponent>;
					public static TYPE_ACTIVITY: number;
					public static TYPE_SERVICE: number;
					public static TYPE_CONTENT_PROVIDER: number;
					public static TYPE_BROADCAST_RECEIVER: number;
					public name: string;
					public exported: boolean;
					public process: string;
					public intentFilters: java.util.List<com.jaredrummler.apkparser.model.IntentFilter>;
					public type: number;
					public static newAndroidComponent(type: number): com.jaredrummler.apkparser.model.AndroidComponent.Builder;
				}
				export module AndroidComponent {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.model.AndroidComponent.Builder>;
						public exported(exported: boolean): com.jaredrummler.apkparser.model.AndroidComponent.Builder;
						public build(): com.jaredrummler.apkparser.model.AndroidComponent;
						public addIntentFilters(intentFilters: java.util.Collection<com.jaredrummler.apkparser.model.IntentFilter>): com.jaredrummler.apkparser.model.AndroidComponent.Builder;
						public addIntentFilter(intentFilter: com.jaredrummler.apkparser.model.IntentFilter): com.jaredrummler.apkparser.model.AndroidComponent.Builder;
						public name(name: string): com.jaredrummler.apkparser.model.AndroidComponent.Builder;
						public process(process: string): com.jaredrummler.apkparser.model.AndroidComponent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module model {
				export class AndroidManifest extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.model.AndroidManifest>;
					public activities: java.util.List<com.jaredrummler.apkparser.model.AndroidComponent>;
					public receivers: java.util.List<com.jaredrummler.apkparser.model.AndroidComponent>;
					public services: java.util.List<com.jaredrummler.apkparser.model.AndroidComponent>;
					public providers: java.util.List<com.jaredrummler.apkparser.model.AndroidComponent>;
					public apkMeta: com.jaredrummler.apkparser.model.ApkMeta;
					public xml: string;
					public constructor(apkMeta: com.jaredrummler.apkparser.model.ApkMeta, xml: string);
					public getComponents(): java.util.List<com.jaredrummler.apkparser.model.AndroidComponent>;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module model {
				export class ApkMeta extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.model.ApkMeta>;
					public packageName: string;
					public label: string;
					public icon: string;
					public versionName: string;
					public versionCode: java.lang.Long;
					public installLocation: string;
					public minSdkVersion: string;
					public targetSdkVersion: string;
					public maxSdkVersion: string;
					public glEsVersion: com.jaredrummler.apkparser.model.GlEsVersion;
					public anyDensity: boolean;
					public smallScreens: boolean;
					public normalScreens: boolean;
					public largeScreens: boolean;
					public usesPermissions: java.util.List<string>;
					public usesFeatures: java.util.List<com.jaredrummler.apkparser.model.UseFeature>;
					public permissions: java.util.List<com.jaredrummler.apkparser.model.Permission>;
					public static newApkMeta(): com.jaredrummler.apkparser.model.ApkMeta.Builder;
				}
				export module ApkMeta {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.model.ApkMeta.Builder>;
						public versionName(versionName: string): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public build(): com.jaredrummler.apkparser.model.ApkMeta;
						public versionCode(versionCode: java.lang.Long): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public maxSdkVersion(maxSdkVersion: string): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public normalScreens(normalScreens: boolean): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public installLocation(installLocation: string): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public packageName(packageName: string): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public largeScreens(largeScreens: boolean): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public label(label: string): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public addUsesPermission(permission: string): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public addUseFeatures(feature: com.jaredrummler.apkparser.model.UseFeature): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public smallScreens(smallScreens: boolean): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public minSdkVersion(minSdkVersion: string): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public glEsVersion(glEsVersion: com.jaredrummler.apkparser.model.GlEsVersion): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public targetSdkVersion(targetSdkVersion: string): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public addPermission(permissions: com.jaredrummler.apkparser.model.Permission): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public icon(icon: string): com.jaredrummler.apkparser.model.ApkMeta.Builder;
						public anyDensity(anyDensity: boolean): com.jaredrummler.apkparser.model.ApkMeta.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module model {
				export class CertificateMeta extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.model.CertificateMeta>;
					public signAlgorithm: string;
					public signAlgorithmOID: string;
					public startDate: java.util.Date;
					public endDate: java.util.Date;
					public data: number[];
					public certBase64Md5: string;
					public certMd5: string;
					public toString(): string;
					public static newCertificateMeta(): com.jaredrummler.apkparser.model.CertificateMeta.Builder;
				}
				export module CertificateMeta {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.model.CertificateMeta.Builder>;
						public data(data: number[]): com.jaredrummler.apkparser.model.CertificateMeta.Builder;
						public startDate(startDate: java.util.Date): com.jaredrummler.apkparser.model.CertificateMeta.Builder;
						public endDate(endDate: java.util.Date): com.jaredrummler.apkparser.model.CertificateMeta.Builder;
						public signAlgorithmOID(signAlgorithmOID: string): com.jaredrummler.apkparser.model.CertificateMeta.Builder;
						public certMd5(certMd5: string): com.jaredrummler.apkparser.model.CertificateMeta.Builder;
						public build(): com.jaredrummler.apkparser.model.CertificateMeta;
						public signAlgorithm(signAlgorithm: string): com.jaredrummler.apkparser.model.CertificateMeta.Builder;
						public certBase64Md5(certBase64Md5: string): com.jaredrummler.apkparser.model.CertificateMeta.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module model {
				export class DexClass extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.model.DexClass>;
					public classType: string;
					public superClass: string;
					public accessFlags: number;
					public toString(): string;
					public isStatic(): boolean;
					public isPublic(): boolean;
					public getPackageName(): string;
					public isAnnotation(): boolean;
					public isEnum(): boolean;
					public static newDexClass(): com.jaredrummler.apkparser.model.DexClass.Builder;
					public isInterface(): boolean;
					public isProtected(): boolean;
				}
				export module DexClass {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.model.DexClass.Builder>;
						public superClass(superClass: string): com.jaredrummler.apkparser.model.DexClass.Builder;
						public build(): com.jaredrummler.apkparser.model.DexClass;
						public accessFlags(accessFlags: number): com.jaredrummler.apkparser.model.DexClass.Builder;
						public classType(classType: string): com.jaredrummler.apkparser.model.DexClass.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module model {
				export class DexInfo extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.model.DexInfo>;
					public classes: com.jaredrummler.apkparser.model.DexClass[];
					public header: com.jaredrummler.apkparser.struct.dex.DexHeader;
					public constructor(classes: com.jaredrummler.apkparser.model.DexClass[], header: com.jaredrummler.apkparser.struct.dex.DexHeader);
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module model {
				export class GlEsVersion extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.model.GlEsVersion>;
					public major: number;
					public minor: number;
					public required: boolean;
					public toString(): string;
					public constructor(major: number, minor: number, required: boolean);
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module model {
				export class Icon extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.model.Icon>;
					public path: string;
					public data: number[];
					public toString(): string;
					public constructor(path: string, data: number[]);
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module model {
				export class IntentFilter extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.model.IntentFilter>;
					public actions: java.util.List<string>;
					public categories: java.util.List<string>;
					public dataList: java.util.List<com.jaredrummler.apkparser.model.IntentFilter.IntentData>;
					public constructor();
				}
				export module IntentFilter {
					export class IntentData extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.model.IntentFilter.IntentData>;
						public scheme: string;
						public host: string;
						public port: string;
						public path: string;
						public pathPattern: string;
						public pathPrefix: string;
						public mimeType: string;
						public type: string;
						public toString(): string;
						public constructor(scheme: string, host: string, port: string, path: string, pathPattern: string, pathPrefix: string, mimeType: string, type: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module model {
				export class Permission extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.model.Permission>;
					public name: string;
					public label: string;
					public icon: string;
					public description: string;
					public group: string;
					public protectionLevel: string;
					public static newPermission(): com.jaredrummler.apkparser.model.Permission.Builder;
				}
				export module Permission {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.model.Permission.Builder>;
						public description(description: string): com.jaredrummler.apkparser.model.Permission.Builder;
						public icon(icon: string): com.jaredrummler.apkparser.model.Permission.Builder;
						public name(name: string): com.jaredrummler.apkparser.model.Permission.Builder;
						public protectionLevel(protectionLevel: string): com.jaredrummler.apkparser.model.Permission.Builder;
						public label(label: string): com.jaredrummler.apkparser.model.Permission.Builder;
						public group(group: string): com.jaredrummler.apkparser.model.Permission.Builder;
						public build(): com.jaredrummler.apkparser.model.Permission;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module model {
				export class UseFeature extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.model.UseFeature>;
					public name: string;
					public required: boolean;
					public toString(): string;
					public constructor(name: string, required: boolean);
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module parser {
				export class ApkMetaTranslator extends java.lang.Object implements com.jaredrummler.apkparser.parser.XmlStreamer {
					public static class: java.lang.Class<com.jaredrummler.apkparser.parser.ApkMetaTranslator>;
					public onNamespaceEnd(param0: com.jaredrummler.apkparser.struct.xml.XmlNamespaceEndTag): void;
					public getApkMeta(): com.jaredrummler.apkparser.model.ApkMeta;
					public onNamespaceStart(tag: com.jaredrummler.apkparser.struct.xml.XmlNamespaceStartTag): void;
					public onEndTag(param0: com.jaredrummler.apkparser.struct.xml.XmlNodeEndTag): void;
					public constructor();
					public onStartTag(xmlNodeStartTag: com.jaredrummler.apkparser.struct.xml.XmlNodeStartTag): void;
					public onNamespaceStart(param0: com.jaredrummler.apkparser.struct.xml.XmlNamespaceStartTag): void;
					public onEndTag(xmlNodeEndTag: com.jaredrummler.apkparser.struct.xml.XmlNodeEndTag): void;
					public onCData(param0: com.jaredrummler.apkparser.struct.xml.XmlCData): void;
					public onCData(xmlCData: com.jaredrummler.apkparser.struct.xml.XmlCData): void;
					public onStartTag(param0: com.jaredrummler.apkparser.struct.xml.XmlNodeStartTag): void;
					public onNamespaceEnd(tag: com.jaredrummler.apkparser.struct.xml.XmlNamespaceEndTag): void;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module parser {
				export class BinaryXmlParser extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.parser.BinaryXmlParser>;
					public getXmlStreamer(): com.jaredrummler.apkparser.parser.XmlStreamer;
					public setXmlStreamer(xmlStreamer: com.jaredrummler.apkparser.parser.XmlStreamer): void;
					public constructor(buffer: java.nio.ByteBuffer, resourceTable: com.jaredrummler.apkparser.struct.resource.ResourceTable);
					public parse(): void;
					public setLocale(locale: java.util.Locale): void;
					public getLocale(): java.util.Locale;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module parser {
				export class CertificateParser extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.parser.CertificateParser>;
					public parse(): com.jaredrummler.apkparser.model.CertificateMeta;
					public constructor(_in_: java.io.InputStream);
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module parser {
				export class CompositeXmlStreamer extends java.lang.Object implements com.jaredrummler.apkparser.parser.XmlStreamer {
					public static class: java.lang.Class<com.jaredrummler.apkparser.parser.CompositeXmlStreamer>;
					public xmlStreamers: com.jaredrummler.apkparser.parser.XmlStreamer[];
					public onNamespaceEnd(param0: com.jaredrummler.apkparser.struct.xml.XmlNamespaceEndTag): void;
					public onNamespaceStart(tag: com.jaredrummler.apkparser.struct.xml.XmlNamespaceStartTag): void;
					public onEndTag(param0: com.jaredrummler.apkparser.struct.xml.XmlNodeEndTag): void;
					public constructor(...xmlStreamers: com.jaredrummler.apkparser.parser.XmlStreamer[]);
					public onStartTag(xmlNodeStartTag: com.jaredrummler.apkparser.struct.xml.XmlNodeStartTag): void;
					public onNamespaceStart(param0: com.jaredrummler.apkparser.struct.xml.XmlNamespaceStartTag): void;
					public onEndTag(xmlNodeEndTag: com.jaredrummler.apkparser.struct.xml.XmlNodeEndTag): void;
					public onCData(param0: com.jaredrummler.apkparser.struct.xml.XmlCData): void;
					public onCData(xmlCData: com.jaredrummler.apkparser.struct.xml.XmlCData): void;
					public onStartTag(param0: com.jaredrummler.apkparser.struct.xml.XmlNodeStartTag): void;
					public onNamespaceEnd(tag: com.jaredrummler.apkparser.struct.xml.XmlNamespaceEndTag): void;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module parser {
				export class DexParser extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.parser.DexParser>;
					public constructor(buffer: java.nio.ByteBuffer);
					public parse(): com.jaredrummler.apkparser.model.DexInfo;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module parser {
				export class ResourceTableParser extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.parser.ResourceTableParser>;
					public getLocales(): java.util.Set<java.util.Locale>;
					public constructor(buffer: java.nio.ByteBuffer);
					public parse(): void;
					public getResourceTable(): com.jaredrummler.apkparser.struct.resource.ResourceTable;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module parser {
				export class StringPoolEntry extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.parser.StringPoolEntry>;
					public index: number;
					public offset: number;
					public constructor(index: number, offset: number);
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module parser {
				export class XmlNamespaces extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.parser.XmlNamespaces>;
					public removeNamespace(tag: com.jaredrummler.apkparser.struct.xml.XmlNamespaceEndTag): void;
					public consumeNameSpaces(): java.util.List<com.jaredrummler.apkparser.parser.XmlNamespaces.XmlNamespace>;
					public getPrefixViaUri(uri: string): string;
					public addNamespace(tag: com.jaredrummler.apkparser.struct.xml.XmlNamespaceStartTag): void;
				}
				export module XmlNamespaces {
					export class XmlNamespace extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.parser.XmlNamespaces.XmlNamespace>;
						public equals(obj: any): boolean;
						public hashCode(): number;
						public equals(o: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module parser {
				export class XmlStreamer extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.parser.XmlStreamer>;
					/**
					 * Constructs a new instance of the com.jaredrummler.apkparser.parser.XmlStreamer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStartTag(param0: com.jaredrummler.apkparser.struct.xml.XmlNodeStartTag): void;
						onEndTag(param0: com.jaredrummler.apkparser.struct.xml.XmlNodeEndTag): void;
						onCData(param0: com.jaredrummler.apkparser.struct.xml.XmlCData): void;
						onNamespaceStart(param0: com.jaredrummler.apkparser.struct.xml.XmlNamespaceStartTag): void;
						onNamespaceEnd(param0: com.jaredrummler.apkparser.struct.xml.XmlNamespaceEndTag): void;
					});
					public constructor();
					public onNamespaceEnd(param0: com.jaredrummler.apkparser.struct.xml.XmlNamespaceEndTag): void;
					public onEndTag(param0: com.jaredrummler.apkparser.struct.xml.XmlNodeEndTag): void;
					public onNamespaceStart(param0: com.jaredrummler.apkparser.struct.xml.XmlNamespaceStartTag): void;
					public onCData(param0: com.jaredrummler.apkparser.struct.xml.XmlCData): void;
					public onStartTag(param0: com.jaredrummler.apkparser.struct.xml.XmlNodeStartTag): void;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module parser {
				export class XmlTranslator extends java.lang.Object implements com.jaredrummler.apkparser.parser.XmlStreamer {
					public static class: java.lang.Class<com.jaredrummler.apkparser.parser.XmlTranslator>;
					public onNamespaceEnd(param0: com.jaredrummler.apkparser.struct.xml.XmlNamespaceEndTag): void;
					public onNamespaceStart(tag: com.jaredrummler.apkparser.struct.xml.XmlNamespaceStartTag): void;
					public onEndTag(param0: com.jaredrummler.apkparser.struct.xml.XmlNodeEndTag): void;
					public constructor();
					public getXml(): string;
					public onStartTag(xmlNodeStartTag: com.jaredrummler.apkparser.struct.xml.XmlNodeStartTag): void;
					public onNamespaceStart(param0: com.jaredrummler.apkparser.struct.xml.XmlNamespaceStartTag): void;
					public onEndTag(xmlNodeEndTag: com.jaredrummler.apkparser.struct.xml.XmlNodeEndTag): void;
					public onCData(param0: com.jaredrummler.apkparser.struct.xml.XmlCData): void;
					public onCData(xmlCData: com.jaredrummler.apkparser.struct.xml.XmlCData): void;
					public onStartTag(param0: com.jaredrummler.apkparser.struct.xml.XmlNodeStartTag): void;
					public onNamespaceEnd(tag: com.jaredrummler.apkparser.struct.xml.XmlNamespaceEndTag): void;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export class AndroidConstants extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.struct.AndroidConstants>;
					public static RESOURCE_FILE: string;
					public static MANIFEST_FILE: string;
					public static DEX_FILE: string;
					public static RES_PREFIX: string;
					public static ASSETS_PREFIX: string;
					public static LIB_PREFIX: string;
					public static META_PREFIX: string;
					public static ARCH_ARMEABI: string;
					public static ATTR_ID_START: number;
					public static SYS_STYLE_ID_START: number;
					public static SYS_STYLE_ID_END: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export class ChunkHeader extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.struct.ChunkHeader>;
					public constructor(chunkType: number, headerSize: number, chunkSize: number);
					public getChunkType(): number;
					public setHeaderSize(headerSize: number): void;
					public getHeaderSize(): number;
					public setChunkSize(chunkSize: number): void;
					public getChunkSize(): number;
					public getBodySize(): number;
					public setChunkType(chunkType: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export class ChunkType extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.struct.ChunkType>;
					public static NULL: number;
					public static STRING_POOL: number;
					public static TABLE: number;
					public static XML: number;
					public static XML_FIRST_CHUNK: number;
					public static XML_START_NAMESPACE: number;
					public static XML_END_NAMESPACE: number;
					public static XML_START_ELEMENT: number;
					public static XML_END_ELEMENT: number;
					public static XML_CDATA: number;
					public static XML_LAST_CHUNK: number;
					public static XML_RESOURCE_MAP: number;
					public static TABLE_PACKAGE: number;
					public static TABLE_TYPE: number;
					public static TABLE_TYPE_SPEC: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export class ResValue extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.struct.ResValue>;
					public setSize(size: number): void;
					public getDataType(): number;
					public getRes0(): number;
					public setData(data: com.jaredrummler.apkparser.struct.ResourceEntity): void;
					public toString(): string;
					public constructor();
					public setDataType(dataType: number): void;
					public getData(): com.jaredrummler.apkparser.struct.ResourceEntity;
					public getSize(): number;
					public setRes0(res0: number): void;
				}
				export module ResValue {
					export class ResDataCOMPLEX extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.ResValue.ResDataCOMPLEX>;
						public static UNIT_SHIFT: number;
						public static UNIT_MASK: number;
						public static UNIT_PX: number;
						public static UNIT_DIP: number;
						public static UNIT_SP: number;
						public static UNIT_PT: number;
						public static UNIT_IN: number;
						public static UNIT_MM: number;
						public static UNIT_FRACTION: number;
						public static UNIT_FRACTION_PARENT: number;
						public static RADIX_SHIFT: number;
						public static RADIX_MASK: number;
						public static RADIX_23p0: number;
						public static RADIX_16p7: number;
						public static RADIX_8p15: number;
						public static RADIX_0p23: number;
						public static MANTISSA_SHIFT: number;
						public static MANTISSA_MASK: number;
						public constructor();
					}
					export class ResType extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.ResValue.ResType>;
						public static NULL: number;
						public static REFERENCE: number;
						public static ATTRIBUTE: number;
						public static STRING: number;
						public static FLOAT: number;
						public static DIMENSION: number;
						public static FRACTION: number;
						public static FIRST_INT: number;
						public static INT_DEC: number;
						public static INT_HEX: number;
						public static INT_BOOLEAN: number;
						public static FIRST_COLOR_INT: number;
						public static INT_COLOR_ARGB8: number;
						public static INT_COLOR_RGB8: number;
						public static INT_COLOR_ARGB4: number;
						public static INT_COLOR_RGB4: number;
						public static LAST_COLOR_INT: number;
						public static LAST_INT: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export class ResourceEntity extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.struct.ResourceEntity>;
					public constructor(b: boolean);
					public getValue(): string;
					public toString(): string;
					public constructor(s: string);
					public constructor(resourceId: number);
					public setValue(value: string): void;
					public constructor(i: number);
					public getResourceId(): number;
					public setResourceId(resourceId: number): void;
					public toStringValue(resourceTable: com.jaredrummler.apkparser.struct.resource.ResourceTable, locale: java.util.Locale): string;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export class StringPool extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.struct.StringPool>;
					public get(idx: number): string;
					public set(idx: number, value: string): void;
					public constructor(poolSize: number);
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export class StringPoolHeader extends com.jaredrummler.apkparser.struct.ChunkHeader {
					public static class: java.lang.Class<com.jaredrummler.apkparser.struct.StringPoolHeader>;
					public static SORTED_FLAG: number;
					public static UTF8_FLAG: number;
					public constructor(chunkType: number, headerSize: number, chunkSize: number);
					public setFlags(flags: number): void;
					public setStyleCount(styleCount: number): void;
					public getFlags(): number;
					public setStringCount(stringCount: number): void;
					public setStringsStart(stringsStart: number): void;
					public getStringsStart(): number;
					public getStringCount(): number;
					public setStylesStart(stylesStart: number): void;
					public getStyleCount(): number;
					public getStylesStart(): number;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module dex {
					export class DexClassStruct extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.dex.DexClassStruct>;
						public static ACC_PUBLIC: number;
						public static ACC_PRIVATE: number;
						public static ACC_PROTECTED: number;
						public static ACC_STATIC: number;
						public static ACC_FINAL: number;
						public static ACC_SYNCHRONIZED: number;
						public static ACC_VOLATILE: number;
						public static ACC_BRIDGE: number;
						public static ACC_TRANSIENT: number;
						public static ACC_VARARGS: number;
						public static ACC_NATIVE: number;
						public static ACC_INTERFACE: number;
						public static ACC_ABSTRACT: number;
						public static ACC_STRICT: number;
						public static ACC_SYNTHETIC: number;
						public static ACC_ANNOTATION: number;
						public static ACC_ENUM: number;
						public static ACC_CONSTRUCTOR: number;
						public static ACC_DECLARED_SYNCHRONIZED: number;
						public classIdx: number;
						public accessFlags: number;
						public superclassIdx: number;
						public interfacesOff: number;
						public sourceFileIdx: number;
						public annotationsOff: number;
						public classDataOff: number;
						public staticValuesOff: number;
						public static newDexClassStruct(): com.jaredrummler.apkparser.struct.dex.DexClassStruct.Builder;
					}
					export module DexClassStruct {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.jaredrummler.apkparser.struct.dex.DexClassStruct.Builder>;
							public staticValuesOff(staticValuesOff: number): com.jaredrummler.apkparser.struct.dex.DexClassStruct.Builder;
							public classIdx(classIdx: number): com.jaredrummler.apkparser.struct.dex.DexClassStruct.Builder;
							public sourceFileIdx(sourceFileIdx: number): com.jaredrummler.apkparser.struct.dex.DexClassStruct.Builder;
							public superclassIdx(superclassIdx: number): com.jaredrummler.apkparser.struct.dex.DexClassStruct.Builder;
							public build(): com.jaredrummler.apkparser.struct.dex.DexClassStruct;
							public annotationsOff(annotationsOff: number): com.jaredrummler.apkparser.struct.dex.DexClassStruct.Builder;
							public interfacesOff(interfacesOff: number): com.jaredrummler.apkparser.struct.dex.DexClassStruct.Builder;
							public accessFlags(accessFlags: number): com.jaredrummler.apkparser.struct.dex.DexClassStruct.Builder;
							public classDataOff(classDataOff: number): com.jaredrummler.apkparser.struct.dex.DexClassStruct.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module dex {
					export class DexHeader extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.dex.DexHeader>;
						public static K_SHA_1_DIGEST_LEN: number;
						public version: number;
						public signature: number[];
						public fileSize: number;
						public headerSize: number;
						public linkSize: number;
						public linkOff: number;
						public mapOff: number;
						public stringIdsSize: number;
						public stringIdsOff: number;
						public typeIdsSize: number;
						public typeIdsOff: number;
						public protoIdsSize: number;
						public protoIdsOff: number;
						public fieldIdsSize: number;
						public fieldIdsOff: number;
						public methodIdsSize: number;
						public methodIdsOff: number;
						public classDefsSize: number;
						public classDefsOff: number;
						public dataSize: number;
						public dataOff: number;
						public static newDexHeader(): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
					}
					export module DexHeader {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.jaredrummler.apkparser.struct.dex.DexHeader.Builder>;
							public classDefsOff(classDefsOff: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public linkSize(linkSize: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public methodIdsOff(methodIdsOff: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public typeIdsOff(typeIdsOff: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public mapOff(mapOff: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public dataOff(dataOff: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public fieldIdsOff(fieldIdsOff: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public fileSize(fileSize: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public signature(signature: number[]): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public build(): com.jaredrummler.apkparser.struct.dex.DexHeader;
							public linkOff(linkOff: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public stringIdsSize(stringIdsSize: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public stringIdsOff(stringIdsOff: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public dataSize(dataSize: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public protoIdsSize(protoIdsSize: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public classDefsSize(classDefsSize: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public version(version: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public methodIdsSize(methodIdsSize: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public protoIdsOff(protoIdsOff: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public fieldIdsSize(fieldIdsSize: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public typeIdsSize(typeIdsSize: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
							public headerSize(headerSize: number): com.jaredrummler.apkparser.struct.dex.DexHeader.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module resource {
					export class PackageHeader extends com.jaredrummler.apkparser.struct.ChunkHeader {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.PackageHeader>;
						public setLastPublicKey(lastPublicKey: number): void;
						public getKeyStrings(): number;
						public getLastPublicKey(): number;
						public setKeyStrings(keyStrings: number): void;
						public getName(): string;
						public getId(): number;
						public setId(id: number): void;
						public getTypeStrings(): number;
						public constructor(chunkType: number, headerSize: number, chunkSize: number);
						public setLastPublicType(lastPublicType: number): void;
						public setTypeStrings(typeStrings: number): void;
						public getLastPublicType(): number;
						public setName(name: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module resource {
					export class ResTableConfig extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.ResTableConfig>;
						public getScreenHeight(): number;
						public getTouchscreen(): number;
						public getInputFlags(): number;
						public setOrientation(orientation: number): void;
						public getInputPad0(): number;
						public getUiMode(): number;
						public setScreenHeight(screenHeight: number): void;
						public setLanguage(language: string): void;
						public setMinorVersion(minorVersion: number): void;
						public setScreenConfigPad1(screenConfigPad1: number): void;
						public setSize(size: number): void;
						public setMcc(mcc: number): void;
						public getScreenConfigPad1(): number;
						public setDensity(density: number): void;
						public setMnc(mnc: number): void;
						public getScreenWidth(): number;
						public setScreenWidth(screenWidth: number): void;
						public getScreenConfigPad2(): number;
						public getLanguage(): string;
						public getNavigation(): number;
						public setCountry(country: string): void;
						public setKeyboard(keyboard: number): void;
						public setInputPad0(inputPad0: number): void;
						public getOrientation(): number;
						public getDensity(): number;
						public constructor();
						public getMnc(): number;
						public setScreenLayout(screenLayout: number): void;
						public setTouchscreen(touchscreen: number): void;
						public setNavigation(navigation: number): void;
						public setSdkVersion(sdkVersion: number): void;
						public getSdkVersion(): number;
						public getCountry(): string;
						public getScreenLayout(): number;
						public getMinorVersion(): number;
						public setInputFlags(inputFlags: number): void;
						public getSize(): number;
						public getMcc(): number;
						public getKeyboard(): number;
						public setScreenConfigPad2(screenConfigPad2: number): void;
						public setUiMode(uiMode: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module resource {
					export class ResourceEntry extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.ResourceEntry>;
						public static FLAG_COMPLEX: number;
						public static FLAG_PUBLIC: number;
						public constructor();
						public getSize(): number;
						public setFlags(flags: number): void;
						public getValue(): com.jaredrummler.apkparser.struct.ResourceEntity;
						public getFlags(): number;
						public toStringValue(resourceTable: com.jaredrummler.apkparser.struct.resource.ResourceTable, locale: java.util.Locale): string;
						public setKey(key: string): void;
						public getKey(): string;
						public toString(): string;
						public setSize(size: number): void;
						public setValue(value: com.jaredrummler.apkparser.struct.ResourceEntity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module resource {
					export class ResourceMapEntry extends com.jaredrummler.apkparser.struct.resource.ResourceEntry {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.ResourceMapEntry>;
						public getParent(): number;
						public setParent(parent: number): void;
						public setCount(count: number): void;
						public constructor();
						public getResourceTableMaps(): com.jaredrummler.apkparser.struct.resource.ResourceTableMap[];
						public getCount(): number;
						public toStringValue(resourceTable: com.jaredrummler.apkparser.struct.resource.ResourceTable, locale: java.util.Locale): string;
						public setResourceTableMaps(resourceTableMaps: com.jaredrummler.apkparser.struct.resource.ResourceTableMap[]): void;
						public toString(): string;
						public constructor(resourceEntry: com.jaredrummler.apkparser.struct.resource.ResourceEntry);
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module resource {
					export class ResourcePackage extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.ResourcePackage>;
						public getTypeSpec(id: java.lang.Short): com.jaredrummler.apkparser.struct.resource.TypeSpec;
						public setTypesMap(typesMap: java.util.Map<java.lang.Short,java.util.List<com.jaredrummler.apkparser.struct.resource.Type>>): void;
						public setTypeSpecMap(typeSpecMap: java.util.Map<java.lang.Short,com.jaredrummler.apkparser.struct.resource.TypeSpec>): void;
						public addType(type: com.jaredrummler.apkparser.struct.resource.Type): void;
						public getName(): string;
						public setKeyStringPool(keyStringPool: com.jaredrummler.apkparser.struct.StringPool): void;
						public getId(): number;
						public setId(id: number): void;
						public constructor(header: com.jaredrummler.apkparser.struct.resource.PackageHeader);
						public addTypeSpec(typeSpec: com.jaredrummler.apkparser.struct.resource.TypeSpec): void;
						public getTypes(id: java.lang.Short): java.util.List<com.jaredrummler.apkparser.struct.resource.Type>;
						public getKeyStringPool(): com.jaredrummler.apkparser.struct.StringPool;
						public getTypeSpecMap(): java.util.Map<java.lang.Short,com.jaredrummler.apkparser.struct.resource.TypeSpec>;
						public setTypeStringPool(typeStringPool: com.jaredrummler.apkparser.struct.StringPool): void;
						public getTypesMap(): java.util.Map<java.lang.Short,java.util.List<com.jaredrummler.apkparser.struct.resource.Type>>;
						public setName(name: string): void;
						public getTypeStringPool(): com.jaredrummler.apkparser.struct.StringPool;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module resource {
					export class ResourceTable extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.ResourceTable>;
						public static sysStyle: java.util.Map<java.lang.Integer,string>;
						public constructor();
						public addPackage(resourcePackage: com.jaredrummler.apkparser.struct.resource.ResourcePackage): void;
						public getStringPool(): com.jaredrummler.apkparser.struct.StringPool;
						public getPackage(id: number): com.jaredrummler.apkparser.struct.resource.ResourcePackage;
						public setStringPool(stringPool: com.jaredrummler.apkparser.struct.StringPool): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module resource {
					export class ResourceTableHeader extends com.jaredrummler.apkparser.struct.ChunkHeader {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.ResourceTableHeader>;
						public constructor(chunkType: number, headerSize: number, chunkSize: number);
						public setPackageCount(packageCount: number): void;
						public getPackageCount(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module resource {
					export class ResourceTableMap extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.ResourceTableMap>;
						public getNameRef(): number;
						public constructor();
						public setData(data: string): void;
						public setNameRef(nameRef: number): void;
						public getData(): string;
						public setResValue(resValue: com.jaredrummler.apkparser.struct.ResourceEntity): void;
						public getResValue(): com.jaredrummler.apkparser.struct.ResourceEntity;
						public toString(): string;
					}
					export module ResourceTableMap {
						export class AttributeType extends java.lang.Object {
							public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.ResourceTableMap.AttributeType>;
							public static ANY: number;
							public static REFERENCE: number;
							public static STRING: number;
							public static INTEGER: number;
							public static BOOLEAN: number;
							public static COLOR: number;
							public static FLOAT: number;
							public static DIMENSION: number;
							public static FRACTION: number;
							public static ENUM: number;
							public static FLAGS: number;
							public constructor();
						}
						export class MapAttr extends java.lang.Object {
							public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.ResourceTableMap.MapAttr>;
							public static TYPE: number;
							public static MIN: number;
							public static MAX: number;
							public static L10N: number;
							public static OTHER: number;
							public static ZERO: number;
							public static ONE: number;
							public static TWO: number;
							public static FEW: number;
							public static MANY: number;
							public constructor();
							public static makeArray(entry: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module resource {
					export class Type extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.Type>;
						public getBuffer(): java.nio.ByteBuffer;
						public constructor(header: com.jaredrummler.apkparser.struct.resource.TypeHeader);
						public getLocale(): java.util.Locale;
						public getStringPool(): com.jaredrummler.apkparser.struct.StringPool;
						public getResourceEntry(id: number): com.jaredrummler.apkparser.struct.resource.ResourceEntry;
						public setStringPool(stringPool: com.jaredrummler.apkparser.struct.StringPool): void;
						public setOffsets(offsets: number[]): void;
						public getName(): string;
						public setKeyStringPool(keyStringPool: com.jaredrummler.apkparser.struct.StringPool): void;
						public toString(): string;
						public getId(): number;
						public setId(id: number): void;
						public setLocale(locale: java.util.Locale): void;
						public getOffsets(): number[];
						public getKeyStringPool(): com.jaredrummler.apkparser.struct.StringPool;
						public setBuffer(buffer: java.nio.ByteBuffer): void;
						public setName(name: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module resource {
					export class TypeHeader extends com.jaredrummler.apkparser.struct.ChunkHeader {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.TypeHeader>;
						public static NO_ENTRY: number;
						public setEntriesStart(entriesStart: number): void;
						public setRes1(res1: number): void;
						public getEntryCount(): number;
						public getRes0(): number;
						public getId(): number;
						public getEntriesStart(): number;
						public setId(id: number): void;
						public constructor(chunkType: number, headerSize: number, chunkSize: number);
						public setRes0(res0: number): void;
						public setConfig(config: com.jaredrummler.apkparser.struct.resource.ResTableConfig): void;
						public setEntryCount(entryCount: number): void;
						public getRes1(): number;
						public getConfig(): com.jaredrummler.apkparser.struct.resource.ResTableConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module resource {
					export class TypeSpec extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.TypeSpec>;
						public setId(id: number): void;
						public setEntryFlags(entryFlags: number[]): void;
						public exists(id: number): boolean;
						public getEntryFlags(): number[];
						public getName(): string;
						public toString(): string;
						public constructor(header: com.jaredrummler.apkparser.struct.resource.TypeSpecHeader);
						public setName(name: string): void;
						public getId(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module resource {
					export class TypeSpecHeader extends com.jaredrummler.apkparser.struct.ChunkHeader {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.resource.TypeSpecHeader>;
						public setId(id: number): void;
						public constructor(chunkType: number, headerSize: number, chunkSize: number);
						public setRes0(res0: number): void;
						public setRes1(res1: number): void;
						public setEntryCount(entryCount: number): void;
						public getRes1(): number;
						public getEntryCount(): number;
						public getRes0(): number;
						public getId(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module xml {
					export class Attribute extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.xml.Attribute>;
						public constructor();
						public getValue(): string;
						public getName(): string;
						public getNamespace(): string;
						public toString(): string;
						public getTypedValue(): com.jaredrummler.apkparser.struct.ResourceEntity;
						public getRawValue(): string;
						public setTypedValue(typedValue: com.jaredrummler.apkparser.struct.ResourceEntity): void;
						public setRawValue(rawValue: string): void;
						public setNamespace(namespace: string): void;
						public toStringValue(resourceTable: com.jaredrummler.apkparser.struct.resource.ResourceTable, locale: java.util.Locale): string;
						public setValue(value: string): void;
						public setName(name: string): void;
					}
					export module Attribute {
						export class AttrIds extends java.lang.Object {
							public static class: java.lang.Class<com.jaredrummler.apkparser.struct.xml.Attribute.AttrIds>;
							public constructor();
							public static getString(id: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module xml {
					export class Attributes extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.xml.Attributes>;
						public getBoolean(name: string, b: boolean): boolean;
						public get(name: string): string;
						public getInt(name: string): java.lang.Integer;
						public constructor(size: number);
						public size(): number;
						public set(i: number, attribute: com.jaredrummler.apkparser.struct.xml.Attribute): void;
						public value(): com.jaredrummler.apkparser.struct.xml.Attribute[];
						public getLong(name: string): java.lang.Long;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module xml {
					export class XmlCData extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.xml.XmlCData>;
						public static CDATA_START: string;
						public static CDATA_END: string;
						public constructor();
						public setData(data: string): void;
						public getTypedData(): com.jaredrummler.apkparser.struct.ResourceEntity;
						public getData(): string;
						public getValue(): string;
						public toStringValue(resourceTable: com.jaredrummler.apkparser.struct.resource.ResourceTable, locale: java.util.Locale): string;
						public setTypedData(typedData: com.jaredrummler.apkparser.struct.ResourceEntity): void;
						public setValue(value: string): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module xml {
					export class XmlHeader extends com.jaredrummler.apkparser.struct.ChunkHeader {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.xml.XmlHeader>;
						public constructor(chunkType: number, headerSize: number, chunkSize: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module xml {
					export class XmlNamespaceEndTag extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.xml.XmlNamespaceEndTag>;
						public constructor();
						public setPrefix(prefix: string): void;
						public getUri(): string;
						public getPrefix(): string;
						public setUri(uri: string): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module xml {
					export class XmlNamespaceStartTag extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.xml.XmlNamespaceStartTag>;
						public constructor();
						public setPrefix(prefix: string): void;
						public getUri(): string;
						public getPrefix(): string;
						public setUri(uri: string): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module xml {
					export class XmlNodeEndTag extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.xml.XmlNodeEndTag>;
						public constructor();
						public setNamespace(namespace: string): void;
						public getName(): string;
						public getNamespace(): string;
						public toString(): string;
						public setName(name: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module xml {
					export class XmlNodeHeader extends com.jaredrummler.apkparser.struct.ChunkHeader {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.xml.XmlNodeHeader>;
						public constructor(chunkType: number, headerSize: number, chunkSize: number);
						public setCommentRef(commentRef: number): void;
						public setLineNum(lineNum: number): void;
						public getCommentRef(): number;
						public getLineNum(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module xml {
					export class XmlNodeStartTag extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.xml.XmlNodeStartTag>;
						public setAttributes(attributes: com.jaredrummler.apkparser.struct.xml.Attributes): void;
						public constructor();
						public getAttributes(): com.jaredrummler.apkparser.struct.xml.Attributes;
						public setNamespace(namespace: string): void;
						public getName(): string;
						public getNamespace(): string;
						public toString(): string;
						public setName(name: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module struct {
				export module xml {
					export class XmlResourceMapHeader extends com.jaredrummler.apkparser.struct.ChunkHeader {
						public static class: java.lang.Class<com.jaredrummler.apkparser.struct.xml.XmlResourceMapHeader>;
						public constructor(chunkType: number, headerSize: number, chunkSize: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export class AttributeValues extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.utils.AttributeValues>;
					public static getScreenOrientation(value: number): string;
					public static getConfigChanges(value: number): string;
					public constructor();
					public static getProtectionLevel(value: number): string;
					public static getInstallLocation(value: number): string;
					public static getLaunchMode(value: number): string;
					public static getWindowSoftInputMode(value: number): string;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export class Buffers extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.utils.Buffers>;
					public static readBytes(buffer: java.nio.ByteBuffer, size: number): number[];
					public static skip(buffer: java.nio.ByteBuffer, count: number): void;
					public constructor();
					public static readUInt(buffer: java.nio.ByteBuffer): number;
					public static readUByte(buffer: java.nio.ByteBuffer): number;
					public static readString(buffer: java.nio.ByteBuffer, strLen: number): string;
					public static readUShort(buffer: java.nio.ByteBuffer): number;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export class Locales extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.utils.Locales>;
					public static ANY_LOCALE: java.util.Locale;
					public constructor();
					public static match(locale: java.util.Locale, targetLocale: java.util.Locale): number;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export class Pair<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.utils.Pair<any,any>>;
					public getRight(): V;
					public constructor();
					public constructor(left: K, right: V);
					public getLeft(): K;
					public setLeft(left: K): void;
					public setRight(right: V): void;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export class ParseUtils extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.utils.ParseUtils>;
					public static CHARSET_UTF_8: java.nio.charset.Charset;
					public static readRGBs(buffer: java.nio.ByteBuffer, strLen: number): string;
					public static readString(buffer: java.nio.ByteBuffer, utf8: boolean): string;
					public static checkChunkType(expected: number, real: number): void;
					public constructor();
					public static readStringPool(buffer: java.nio.ByteBuffer, stringPoolHeader: com.jaredrummler.apkparser.struct.StringPoolHeader): com.jaredrummler.apkparser.struct.StringPool;
					public static readStringUTF16(buffer: java.nio.ByteBuffer, strLen: number): string;
					public static readResValue(buffer: java.nio.ByteBuffer, stringPool: com.jaredrummler.apkparser.struct.StringPool): com.jaredrummler.apkparser.struct.ResourceEntity;
					public static getResourceById(resourceId: number, param1: com.jaredrummler.apkparser.struct.resource.ResourceTable, table: java.util.Locale): string;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export class ResourceLoader extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.utils.ResourceLoader>;
					public constructor();
					public static loadSystemAttrIds(): java.util.Map<java.lang.Integer,string>;
					public static loadSystemStyles(): java.util.Map<java.lang.Integer,string>;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export class Utils extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.utils.Utils>;
					public static isEmpty(cs: string): boolean;
					public static substringBefore(str: string, separator: string): string;
					public static join(iterator: java.util.Iterator<any>, separator: string): string;
					public equals(obj: any): boolean;
					public static join(iterable: java.lang.Iterable<any>, separator: string): string;
					public constructor();
					public static getEntry(zf: java.util.zip.ZipFile, path: string): java.util.zip.ZipEntry;
					public static isNumeric(cs: string): boolean;
					public static toByteArray(_in_: java.io.InputStream): number[];
					public static equals(a: any, b: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export class XmlUtils extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.apkparser.utils.XmlUtils>;
					public static getBoolAttribute(namedNodeMap: org.w3c.dom.NamedNodeMap, name: string): java.lang.Boolean;
					public static getAttribute(namedNodeMap: org.w3c.dom.NamedNodeMap, name: string): string;
					public constructor();
					public static getIntAttribute(namedNodeMap: org.w3c.dom.NamedNodeMap, name: string): java.lang.Integer;
					public static getLongAttribute(namedNodeMap: org.w3c.dom.NamedNodeMap, name: string): java.lang.Long;
					public static getBoolAttribute(namedNodeMap: org.w3c.dom.NamedNodeMap, name: string, defaultValue: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export module xml {
					export class AggregateTranslator extends com.jaredrummler.apkparser.utils.xml.CharSequenceTranslator {
						public static class: java.lang.Class<com.jaredrummler.apkparser.utils.xml.AggregateTranslator>;
						public translate(input: string, index: number, out: java.io.Writer): number;
						public constructor(...translators: com.jaredrummler.apkparser.utils.xml.CharSequenceTranslator[]);
						public translate(input: string, out: java.io.Writer): void;
						public translate(input: string): string;
						public translate(param0: string, param1: number, param2: java.io.Writer): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export module xml {
					export abstract class CharSequenceTranslator extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.utils.xml.CharSequenceTranslator>;
						public static hex(codepoint: number): string;
						public with(...translators: com.jaredrummler.apkparser.utils.xml.CharSequenceTranslator[]): com.jaredrummler.apkparser.utils.xml.CharSequenceTranslator;
						public translate(input: string, out: java.io.Writer): void;
						public translate(input: string): string;
						public translate(param0: string, param1: number, param2: java.io.Writer): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export module xml {
					export abstract class CodePointTranslator extends com.jaredrummler.apkparser.utils.xml.CharSequenceTranslator {
						public static class: java.lang.Class<com.jaredrummler.apkparser.utils.xml.CodePointTranslator>;
						public translate(input: string, index: number, out: java.io.Writer): number;
						public translate(input: string, out: java.io.Writer): void;
						public translate(input: string): string;
						public translate(param0: string, param1: number, param2: java.io.Writer): number;
						public translate(param0: number, param1: java.io.Writer): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export module xml {
					export class EntityArrays extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.utils.xml.EntityArrays>;
						public constructor();
						public static APOS_ESCAPE(): string[][];
						public static BASIC_ESCAPE(): string[][];
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export module xml {
					export class LookupTranslator extends com.jaredrummler.apkparser.utils.xml.CharSequenceTranslator {
						public static class: java.lang.Class<com.jaredrummler.apkparser.utils.xml.LookupTranslator>;
						public translate(input: string, index: number, out: java.io.Writer): number;
						public translate(input: string, out: java.io.Writer): void;
						public constructor(...lookup: string[][]);
						public translate(input: string): string;
						public translate(param0: string, param1: number, param2: java.io.Writer): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export module xml {
					export class NumericEntityEscaper extends com.jaredrummler.apkparser.utils.xml.CodePointTranslator {
						public static class: java.lang.Class<com.jaredrummler.apkparser.utils.xml.NumericEntityEscaper>;
						public static below(codepoint: number): com.jaredrummler.apkparser.utils.xml.NumericEntityEscaper;
						public translate(input: string, index: number, out: java.io.Writer): number;
						public constructor();
						public static above(codepoint: number): com.jaredrummler.apkparser.utils.xml.NumericEntityEscaper;
						public static between(codepointLow: number, codepointHigh: number): com.jaredrummler.apkparser.utils.xml.NumericEntityEscaper;
						public static outsideOf(codepointLow: number, codepointHigh: number): com.jaredrummler.apkparser.utils.xml.NumericEntityEscaper;
						public translate(input: string, out: java.io.Writer): void;
						public translate(codepoint: number, out: java.io.Writer): boolean;
						public translate(input: string): string;
						public translate(param0: number, param1: java.io.Writer): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export module xml {
					export class UnicodeUnpairedSurrogateRemover extends com.jaredrummler.apkparser.utils.xml.CodePointTranslator {
						public static class: java.lang.Class<com.jaredrummler.apkparser.utils.xml.UnicodeUnpairedSurrogateRemover>;
						public translate(input: string, index: number, out: java.io.Writer): number;
						public translate(input: string, out: java.io.Writer): void;
						public translate(codepoint: number, out: java.io.Writer): boolean;
						public translate(input: string): string;
						public translate(param0: number, param1: java.io.Writer): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module apkparser {
			export module utils {
				export module xml {
					export class XmlEscaper extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.apkparser.utils.xml.XmlEscaper>;
						public static ESCAPE_XML10: com.jaredrummler.apkparser.utils.xml.CharSequenceTranslator;
						public constructor();
						public static escapeXml10(input: string): string;
					}
				}
			}
		}
	}
}

//Generics information:
//com.jaredrummler.apkparser.utils.Pair:2

