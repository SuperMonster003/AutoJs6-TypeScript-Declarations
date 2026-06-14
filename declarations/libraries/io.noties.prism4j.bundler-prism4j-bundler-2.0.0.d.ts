/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module io {
	export module noties {
		export module prism4j {
			export module bundler {
				export abstract class AnnotationsInformation extends java.lang.Object {
					public static class: java.lang.Class<io.noties.prism4j.bundler.AnnotationsInformation>;
					public constructor();
					public findAliasesInformation(param0: string): java.util.List<string>;
					public static create(): io.noties.prism4j.bundler.AnnotationsInformation;
					public findExtendInformation(param0: string): string;
					public findModifyInformation(param0: string): java.util.List<string>;
				}
				export module AnnotationsInformation {
					export class Impl extends io.noties.prism4j.bundler.AnnotationsInformation {
						public static class: java.lang.Class<io.noties.prism4j.bundler.AnnotationsInformation.Impl>;
						public findAliasesInformation(source: string): java.util.List<string>;
						public findModifyInformation(source: string): java.util.List<string>;
						public findModifyInformation(param0: string): java.util.List<string>;
						public findExtendInformation(param0: string): string;
						public findExtendInformation(source: string): string;
						public findAliasesInformation(param0: string): java.util.List<string>;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export module bundler {
				export class ClassInfo extends java.lang.Object {
					public static class: java.lang.Class<io.noties.prism4j.bundler.ClassInfo>;
					public packageName: string;
					public className: string;
					public constructor(packageName: string, className: string);
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export module bundler {
				export class LanguageInfo extends java.lang.Object {
					public static class: java.lang.Class<io.noties.prism4j.bundler.LanguageInfo>;
					public name: string;
					public aliases: java.util.List<string>;
					public extend: string;
					public modify: java.util.List<string>;
					public source: string;
					public equals(obj: any): boolean;
					public toString(): string;
					public constructor(name: string, aliases: java.util.List<string>, extend: string, modify: java.util.List<string>, source: string);
					public equals(o: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export module bundler {
				export abstract class ListResources extends java.lang.Object {
					public static class: java.lang.Class<io.noties.prism4j.bundler.ListResources>;
				}
				export module ListResources {
					export class Impl extends io.noties.prism4j.bundler.ListResources {
						public static class: java.lang.Class<io.noties.prism4j.bundler.ListResources.Impl>;
					}
				}
			}
		}
	}
}

declare module io {
	export module noties {
		export module prism4j {
			export module bundler {
				export class PrismBundler {
					public static class: java.lang.Class<io.noties.prism4j.bundler.PrismBundler>;
					public getSupportedOptions(): java.util.Set<string>;
					public init(processingEnvironment: javax.annotation.processing.ProcessingEnvironment): void;
					public constructor();
					public getSupportedAnnotationTypes(): java.util.Set<string>;
					public process(set: java.util.Set<any>, roundEnvironment: javax.annotation.processing.RoundEnvironment): boolean;
					public getSupportedSourceVersion(): javax.lang.model.SourceVersion;
				}
			}
		}
	}
}

//Generics information:

