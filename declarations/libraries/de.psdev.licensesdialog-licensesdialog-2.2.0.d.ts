declare module de {
	export module psdev {
		export module licensesdialog {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<de.psdev.licensesdialog.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public static GIT_SHA: string;
				public constructor();
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export class LicenseResolver extends java.lang.Object {
				public static class: java.lang.Class<de.psdev.licensesdialog.LicenseResolver>;
				public static read(license: string): de.psdev.licensesdialog.licenses.License;
				public static registerLicense(license: de.psdev.licensesdialog.licenses.License): void;
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export class LicensesDialog extends java.lang.Object {
				public static class: java.lang.Class<de.psdev.licensesdialog.LicensesDialog>;
				public static LICENSES_DIALOG_NOTICE: de.psdev.licensesdialog.model.Notice;
				public create(): android.app.Dialog;
				public setOnDismissListener(onDismissListener: android.content.DialogInterface.OnDismissListener): de.psdev.licensesdialog.LicensesDialog;
				public show(): android.app.Dialog;
			}
			export module LicensesDialog {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<de.psdev.licensesdialog.LicensesDialog.Builder>;
					public setNoticesCssStyle(cssStyleTextId: number): de.psdev.licensesdialog.LicensesDialog.Builder;
					public constructor(context: android.content.Context);
					public setNoticesCssStyle(cssStyleText: string): de.psdev.licensesdialog.LicensesDialog.Builder;
					public setIncludeOwnLicense(includeOwnLicense: boolean): de.psdev.licensesdialog.LicensesDialog.Builder;
					public setShowFullLicenseText(showFullLicenseText: boolean): de.psdev.licensesdialog.LicensesDialog.Builder;
					public setCloseText(closeText: string): de.psdev.licensesdialog.LicensesDialog.Builder;
					public setEnableDarkMode(enableDarkMode: boolean): de.psdev.licensesdialog.LicensesDialog.Builder;
					public setThemeResourceId(themeResourceId: number): de.psdev.licensesdialog.LicensesDialog.Builder;
					public setDividerColorId(dividerColorId: number): de.psdev.licensesdialog.LicensesDialog.Builder;
					public build(): de.psdev.licensesdialog.LicensesDialog;
					public setNotices(notices: de.psdev.licensesdialog.model.Notices): de.psdev.licensesdialog.LicensesDialog.Builder;
					public setTitle(title: string): de.psdev.licensesdialog.LicensesDialog.Builder;
					public setTitle(titleId: number): de.psdev.licensesdialog.LicensesDialog.Builder;
					public setCloseText(closeId: number): de.psdev.licensesdialog.LicensesDialog.Builder;
					public setNotices(notice: de.psdev.licensesdialog.model.Notice): de.psdev.licensesdialog.LicensesDialog.Builder;
					public setDividerColor(dividerColor: number): de.psdev.licensesdialog.LicensesDialog.Builder;
					public setNotices(rawNoticesId: number): de.psdev.licensesdialog.LicensesDialog.Builder;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export class LicensesDialogFragment extends androidx.fragment.app.DialogFragment {
				public static class: java.lang.Class<de.psdev.licensesdialog.LicensesDialogFragment>;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public onSaveInstanceState(param0: android.os.Bundle): void;
				public onLowMemory(): void;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public onCreateDialog(param0: android.os.Bundle): android.app.Dialog;
				public onSaveInstanceState(outState: android.os.Bundle): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
				public onCreateDialog(savedInstanceState: android.os.Bundle): android.app.Dialog;
				public setOnDismissListener(onDismissListener: android.content.DialogInterface.OnDismissListener): void;
				public getOnDismissListener(): android.content.DialogInterface.OnDismissListener;
				public onCreate(param0: android.os.Bundle): void;
				public onCreate(savedInstanceState: android.os.Bundle): void;
				public onDismiss(dialog: android.content.DialogInterface): void;
				public constructor(param0: number);
				public onDismiss(param0: android.content.DialogInterface): void;
				public onCancel(param0: android.content.DialogInterface): void;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			}
			export module LicensesDialogFragment {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<de.psdev.licensesdialog.LicensesDialogFragment.Builder>;
					public constructor(context: android.content.Context);
					public setShowFullLicenseText(showFullLicenseText: boolean): de.psdev.licensesdialog.LicensesDialogFragment.Builder;
					public build(): de.psdev.licensesdialog.LicensesDialogFragment;
					public setNotices(rawNoticesResourceId: number): de.psdev.licensesdialog.LicensesDialogFragment.Builder;
					public setNoticesCssStyle(cssStyleText: string): de.psdev.licensesdialog.LicensesDialogFragment.Builder;
					public setDividerColor(dividerColor: number): de.psdev.licensesdialog.LicensesDialogFragment.Builder;
					public setNoticesCssStyle(cssStyleTextId: number): de.psdev.licensesdialog.LicensesDialogFragment.Builder;
					public setNotices(notices: de.psdev.licensesdialog.model.Notices): de.psdev.licensesdialog.LicensesDialogFragment.Builder;
					public setIncludeOwnLicense(includeOwnLicense: boolean): de.psdev.licensesdialog.LicensesDialogFragment.Builder;
					public setThemeResourceId(themeResourceId: number): de.psdev.licensesdialog.LicensesDialogFragment.Builder;
					public setNotice(notice: de.psdev.licensesdialog.model.Notice): de.psdev.licensesdialog.LicensesDialogFragment.Builder;
					public setDividerColorRes(dividerColor: number): de.psdev.licensesdialog.LicensesDialogFragment.Builder;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export class NoticesHtmlBuilder extends java.lang.Object {
				public static class: java.lang.Class<de.psdev.licensesdialog.NoticesHtmlBuilder>;
				public setNotices(notices: de.psdev.licensesdialog.model.Notices): de.psdev.licensesdialog.NoticesHtmlBuilder;
				public static create(context: android.content.Context): de.psdev.licensesdialog.NoticesHtmlBuilder;
				public setShowFullLicenseText(showFullLicenseText: boolean): de.psdev.licensesdialog.NoticesHtmlBuilder;
				public build(): string;
				public setNotice(notice: de.psdev.licensesdialog.model.Notice): de.psdev.licensesdialog.NoticesHtmlBuilder;
				public setStyle(style: string): de.psdev.licensesdialog.NoticesHtmlBuilder;
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export class NoticesXmlParser extends java.lang.Object {
				public static class: java.lang.Class<de.psdev.licensesdialog.NoticesXmlParser>;
				public static parse(inputStream: java.io.InputStream): de.psdev.licensesdialog.model.Notices;
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class ApacheSoftwareLicense20 extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.ApacheSoftwareLicense20>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class BSD2ClauseLicense extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.BSD2ClauseLicense>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class BSD3ClauseLicense extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.BSD3ClauseLicense>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class CreativeCommonsAttribution30Unported extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.CreativeCommonsAttribution30Unported>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class CreativeCommonsAttributionNoDerivs30Unported extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.CreativeCommonsAttributionNoDerivs30Unported>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class CreativeCommonsAttributionShareAlike30Unported extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.CreativeCommonsAttributionShareAlike30Unported>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class EclipsePublicLicense10 extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.EclipsePublicLicense10>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class GnuGeneralPublicLicense20 extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.GnuGeneralPublicLicense20>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class GnuGeneralPublicLicense30 extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.GnuGeneralPublicLicense30>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class GnuLesserGeneralPublicLicense21 extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.GnuLesserGeneralPublicLicense21>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class GnuLesserGeneralPublicLicense3 extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.GnuLesserGeneralPublicLicense3>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class ISCLicense extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.ISCLicense>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export abstract class License extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.License>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
					public getSummaryText(context: android.content.Context): string;
					public getFullText(context: android.content.Context): string;
					public getContent(context: android.content.Context, contentResourceId: number): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class MITLicense extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.MITLicense>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class MozillaPublicLicense11 extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.MozillaPublicLicense11>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class MozillaPublicLicense20 extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.MozillaPublicLicense20>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module licenses {
				export class SILOpenFontLicense11 extends de.psdev.licensesdialog.licenses.License {
					public static class: java.lang.Class<de.psdev.licensesdialog.licenses.SILOpenFontLicense11>;
					public readSummaryTextFromResources(param0: android.content.Context): string;
					public readSummaryTextFromResources(context: android.content.Context): string;
					public readFullTextFromResources(context: android.content.Context): string;
					public getVersion(): string;
					public readFullTextFromResources(param0: android.content.Context): string;
					public getUrl(): string;
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module model {
				export class Notice extends java.lang.Object implements android.os.Parcelable {
					public static class: java.lang.Class<de.psdev.licensesdialog.model.Notice>;
					public static CREATOR: android.os.Parcelable.Creator<de.psdev.licensesdialog.model.Notice>;
					public constructor(_in_: android.os.Parcel);
					public setCopyright(copyright: string): void;
					public setLicense(license: de.psdev.licensesdialog.licenses.License): void;
					public getCopyright(): string;
					public describeContents(): number;
					public setUrl(url: string): void;
					public getLicense(): de.psdev.licensesdialog.licenses.License;
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public setName(name: string): void;
					public constructor(name: string, url: string, copyright: string, license: de.psdev.licensesdialog.licenses.License);
					public getUrl(): string;
					public constructor();
					public getName(): string;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module de {
	export module psdev {
		export module licensesdialog {
			export module model {
				export class Notices extends java.lang.Object implements android.os.Parcelable {
					public static class: java.lang.Class<de.psdev.licensesdialog.model.Notices>;
					public static CREATOR: android.os.Parcelable.Creator<de.psdev.licensesdialog.model.Notices>;
					public constructor(_in_: android.os.Parcel);
					public constructor();
					public describeContents(): number;
					public addNotice(notice: de.psdev.licensesdialog.model.Notice): void;
					public getNotices(): java.util.List<de.psdev.licensesdialog.model.Notice>;
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

//Generics information:

