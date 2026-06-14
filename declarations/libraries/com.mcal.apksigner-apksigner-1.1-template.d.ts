/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module com {
	export module android {
		export module apksig {
			export class ApkSigner extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksig.ApkSigner>;
				public sign(): void;
			}
			export module ApkSigner {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.ApkSigner.Builder>;
					public constructor(signerEngine: com.android.apksig.ApkSignerEngine);
					public setOutputApk(outputApk: com.android.apksig.util.ReadableDataSink): com.android.apksig.ApkSigner.Builder;
					public setRotationTargetsDevRelease(enabled: boolean): com.android.apksig.ApkSigner.Builder;
					public setV4SignatureOutputFile(v4SignatureOutputFile: java.io.File): com.android.apksig.ApkSigner.Builder;
					public setAlignmentPreserved(alignmentPreserved: boolean): com.android.apksig.ApkSigner.Builder;
					public setSigningCertificateLineage(signingCertificateLineage: com.android.apksig.SigningCertificateLineage): com.android.apksig.ApkSigner.Builder;
					public setV2SigningEnabled(enabled: boolean): com.android.apksig.ApkSigner.Builder;
					public setInputApk(inputApk: java.io.File): com.android.apksig.ApkSigner.Builder;
					public setCreatedBy(createdBy: string): com.android.apksig.ApkSigner.Builder;
					public setLibraryPageAlignmentBytes(libraryPageAlignmentBytes: number): com.android.apksig.ApkSigner.Builder;
					public setForceSourceStampOverwrite(force: boolean): com.android.apksig.ApkSigner.Builder;
					public setSourceStampSigningCertificateLineage(sourceStampSigningCertificateLineage: com.android.apksig.SigningCertificateLineage): com.android.apksig.ApkSigner.Builder;
					public constructor(signerConfigs: java.util.List<com.android.apksig.ApkSigner.SignerConfig>);
					public setOutputApk(outputApkOut: com.android.apksig.util.DataSink, outputApkIn: com.android.apksig.util.DataSource): com.android.apksig.ApkSigner.Builder;
					public setV4SigningEnabled(enabled: boolean): com.android.apksig.ApkSigner.Builder;
					public setDebuggableApkPermitted(permitted: boolean): com.android.apksig.ApkSigner.Builder;
					public build(): com.android.apksig.ApkSigner;
					public setV1SigningEnabled(enabled: boolean): com.android.apksig.ApkSigner.Builder;
					public setSourceStampTimestampEnabled(value: boolean): com.android.apksig.ApkSigner.Builder;
					public setAlignFileSize(alignFileSize: boolean): com.android.apksig.ApkSigner.Builder;
					public setInputApk(inputApk: com.android.apksig.util.DataSource): com.android.apksig.ApkSigner.Builder;
					public setSourceStampSignerConfig(sourceStampSignerConfig: com.android.apksig.ApkSigner.SignerConfig): com.android.apksig.ApkSigner.Builder;
					public setOutputApk(outputApk: java.io.File): com.android.apksig.ApkSigner.Builder;
					public setMinSdkVersion(minSdkVersion: number): com.android.apksig.ApkSigner.Builder;
					public setV4ErrorReportingEnabled(enabled: boolean): com.android.apksig.ApkSigner.Builder;
					public setVerityEnabled(enabled: boolean): com.android.apksig.ApkSigner.Builder;
					public setV3SigningEnabled(enabled: boolean): com.android.apksig.ApkSigner.Builder;
					public setMinSdkVersionForRotation(minSdkVersion: number): com.android.apksig.ApkSigner.Builder;
					public setOtherSignersSignaturesPreserved(preserved: boolean): com.android.apksig.ApkSigner.Builder;
				}
				export class OutputSizeAndDataOffset extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.ApkSigner.OutputSizeAndDataOffset>;
					public outputBytes: number;
					public dataOffsetBytes: number;
					public constructor(outputBytes: number, param1: number);
				}
				export class SignerConfig extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.ApkSigner.SignerConfig>;
					public getCertificates(): java.util.List<java.security.cert.X509Certificate>;
					public getSigningCertificateLineage(): com.android.apksig.SigningCertificateLineage;
					public getName(): string;
					/** @deprecated */
					public getPrivateKey(): java.security.PrivateKey;
					public getKeyConfig(): com.android.apksig.KeyConfig;
					public getMinSdkVersion(): number;
					public getDeterministicDsaSigning(): boolean;
				}
				export module SignerConfig {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.ApkSigner.SignerConfig.Builder>;
						public constructor(name: string, keyConfig: com.android.apksig.KeyConfig, certificates: java.util.List<java.security.cert.X509Certificate>);
						public setLineageForMinSdkVersion(lineage: com.android.apksig.SigningCertificateLineage, minSdkVersion: number): com.android.apksig.ApkSigner.SignerConfig.Builder;
						/** @deprecated */
						public constructor(name: string, privateKey: java.security.PrivateKey, certificates: java.util.List<java.security.cert.X509Certificate>, deterministicDsaSigning: boolean);
						public constructor(name: string, keyConfig: com.android.apksig.KeyConfig, certificates: java.util.List<java.security.cert.X509Certificate>, deterministicDsaSigning: boolean);
						public setMinSdkVersion(minSdkVersion: number): com.android.apksig.ApkSigner.SignerConfig.Builder;
						/** @deprecated */
						public constructor(name: string, privateKey: java.security.PrivateKey, certificates: java.util.List<java.security.cert.X509Certificate>);
						public build(): com.android.apksig.ApkSigner.SignerConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export class ApkSignerEngine extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<com.android.apksig.ApkSignerEngine>;
				/**
				 * Constructs a new instance of the com.android.apksig.ApkSignerEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setExecutor(executor: com.android.apksig.util.RunnablesExecutor): void;
					initWith(manifestBytes: number[], entryNames: java.util.Set<string>): java.util.Set<string>;
					inputApkSigningBlock(param0: com.android.apksig.util.DataSource): void;
					inputJarEntry(param0: string): com.android.apksig.ApkSignerEngine.InputJarEntryInstructions;
					outputJarEntry(param0: string): com.android.apksig.ApkSignerEngine.InspectJarEntryRequest;
					inputJarEntryRemoved(param0: string): com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy;
					outputJarEntryRemoved(param0: string): void;
					outputJarEntries(): com.android.apksig.ApkSignerEngine.OutputJarSignatureRequest;
					outputZipSections(param0: com.android.apksig.util.DataSource, param1: com.android.apksig.util.DataSource, param2: com.android.apksig.util.DataSource): com.android.apksig.ApkSignerEngine.OutputApkSigningBlockRequest;
					outputZipSections2(param0: com.android.apksig.util.DataSource, param1: com.android.apksig.util.DataSource, param2: com.android.apksig.util.DataSource): com.android.apksig.ApkSignerEngine.OutputApkSigningBlockRequest2;
					outputDone(): void;
					signV4(param0: com.android.apksig.util.DataSource, param1: java.io.File, param2: boolean): void;
					isEligibleForSourceStamp(): boolean;
					generateSourceStampCertificateDigest(): number[];
					close(): void;
					close(): void;
					close(): void;
				});
				public constructor();
				public inputJarEntryRemoved(param0: string): com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy;
				/** @deprecated */
				public outputZipSections(param0: com.android.apksig.util.DataSource, param1: com.android.apksig.util.DataSource, param2: com.android.apksig.util.DataSource): com.android.apksig.ApkSignerEngine.OutputApkSigningBlockRequest;
				public close(): void;
				public outputJarEntry(param0: string): com.android.apksig.ApkSignerEngine.InspectJarEntryRequest;
				public outputDone(): void;
				public outputJarEntries(): com.android.apksig.ApkSignerEngine.OutputJarSignatureRequest;
				public setExecutor(executor: com.android.apksig.util.RunnablesExecutor): void;
				public outputJarEntryRemoved(param0: string): void;
				public isEligibleForSourceStamp(): boolean;
				public inputApkSigningBlock(param0: com.android.apksig.util.DataSource): void;
				public generateSourceStampCertificateDigest(): number[];
				public initWith(manifestBytes: number[], entryNames: java.util.Set<string>): java.util.Set<string>;
				public signV4(param0: com.android.apksig.util.DataSource, param1: java.io.File, param2: boolean): void;
				public inputJarEntry(param0: string): com.android.apksig.ApkSignerEngine.InputJarEntryInstructions;
				public outputZipSections2(param0: com.android.apksig.util.DataSource, param1: com.android.apksig.util.DataSource, param2: com.android.apksig.util.DataSource): com.android.apksig.ApkSignerEngine.OutputApkSigningBlockRequest2;
			}
			export module ApkSignerEngine {
				export class InputJarEntryInstructions extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.ApkSignerEngine.InputJarEntryInstructions>;
					public constructor(outputPolicy: com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy, inspectJarEntryRequest: com.android.apksig.ApkSignerEngine.InspectJarEntryRequest);
					public getOutputPolicy(): com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy;
					public constructor(outputPolicy: com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy);
					public getInspectJarEntryRequest(): com.android.apksig.ApkSignerEngine.InspectJarEntryRequest;
				}
				export module InputJarEntryInstructions {
					export class OutputPolicy {
						public static class: java.lang.Class<com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy>;
						public static SKIP: com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy;
						public static OUTPUT: com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy;
						public static OUTPUT_BY_ENGINE: com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy;
						public static valueOf(name: string): com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy;
						public static values(): com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
				export class InspectJarEntryRequest extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.ApkSignerEngine.InspectJarEntryRequest>;
					/**
					 * Constructs a new instance of the com.android.apksig.ApkSignerEngine$InspectJarEntryRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDataSink(): com.android.apksig.util.DataSink;
						done(): void;
						getEntryName(): string;
					});
					public constructor();
					public getDataSink(): com.android.apksig.util.DataSink;
					public done(): void;
					public getEntryName(): string;
				}
				export class OutputApkSigningBlockRequest extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.ApkSignerEngine.OutputApkSigningBlockRequest>;
					/**
					 * Constructs a new instance of the com.android.apksig.ApkSignerEngine$OutputApkSigningBlockRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getApkSigningBlock(): number[];
						done(): void;
					});
					public constructor();
					public done(): void;
					public getApkSigningBlock(): number[];
				}
				export class OutputApkSigningBlockRequest2 extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.ApkSignerEngine.OutputApkSigningBlockRequest2>;
					/**
					 * Constructs a new instance of the com.android.apksig.ApkSignerEngine$OutputApkSigningBlockRequest2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getApkSigningBlock(): number[];
						done(): void;
						getPaddingSizeBeforeApkSigningBlock(): number;
					});
					public constructor();
					public done(): void;
					public getApkSigningBlock(): number[];
					public getPaddingSizeBeforeApkSigningBlock(): number;
				}
				export class OutputJarSignatureRequest extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.ApkSignerEngine.OutputJarSignatureRequest>;
					/**
					 * Constructs a new instance of the com.android.apksig.ApkSignerEngine$OutputJarSignatureRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAdditionalJarEntries(): java.util.List<com.android.apksig.ApkSignerEngine.OutputJarSignatureRequest.JarEntry>;
						done(): void;
					});
					public constructor();
					public getAdditionalJarEntries(): java.util.List<com.android.apksig.ApkSignerEngine.OutputJarSignatureRequest.JarEntry>;
					public done(): void;
				}
				export module OutputJarSignatureRequest {
					export class JarEntry extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.ApkSignerEngine.OutputJarSignatureRequest.JarEntry>;
						public getData(): number[];
						public constructor(name: string, data: number[]);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export class ApkVerificationIssue extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksig.ApkVerificationIssue>;
				public static V2_SIG_MALFORMED_SIGNERS: number;
				public static V2_SIG_NO_SIGNERS: number;
				public static V2_SIG_MALFORMED_SIGNER: number;
				public static V2_SIG_MALFORMED_SIGNATURE: number;
				public static V2_SIG_NO_SIGNATURES: number;
				public static V2_SIG_MALFORMED_CERTIFICATE: number;
				public static V2_SIG_NO_CERTIFICATES: number;
				public static V2_SIG_MALFORMED_DIGEST: number;
				public static V3_SIG_MALFORMED_SIGNERS: number;
				public static V3_SIG_NO_SIGNERS: number;
				public static V3_SIG_MALFORMED_SIGNER: number;
				public static V3_SIG_MALFORMED_SIGNATURE: number;
				public static V3_SIG_NO_SIGNATURES: number;
				public static V3_SIG_MALFORMED_CERTIFICATE: number;
				public static V3_SIG_NO_CERTIFICATES: number;
				public static V3_SIG_MALFORMED_DIGEST: number;
				public static SOURCE_STAMP_NO_SIGNATURE: number;
				public static SOURCE_STAMP_MALFORMED_CERTIFICATE: number;
				public static SOURCE_STAMP_UNKNOWN_SIG_ALGORITHM: number;
				public static SOURCE_STAMP_MALFORMED_SIGNATURE: number;
				public static SOURCE_STAMP_DID_NOT_VERIFY: number;
				public static SOURCE_STAMP_VERIFY_EXCEPTION: number;
				public static SOURCE_STAMP_EXPECTED_DIGEST_MISMATCH: number;
				public static SOURCE_STAMP_SIGNATURE_BLOCK_WITHOUT_CERT_DIGEST: number;
				public static SOURCE_STAMP_CERT_DIGEST_AND_SIG_BLOCK_MISSING: number;
				public static SOURCE_STAMP_NO_SUPPORTED_SIGNATURE: number;
				public static SOURCE_STAMP_CERTIFICATE_MISMATCH_BETWEEN_SIGNATURE_BLOCK_AND_APK: number;
				public static MALFORMED_APK: number;
				public static UNEXPECTED_EXCEPTION: number;
				public static SOURCE_STAMP_SIG_MISSING: number;
				public static SOURCE_STAMP_MALFORMED_ATTRIBUTE: number;
				public static SOURCE_STAMP_UNKNOWN_ATTRIBUTE: number;
				public static SOURCE_STAMP_MALFORMED_LINEAGE: number;
				public static SOURCE_STAMP_POR_CERT_MISMATCH: number;
				public static SOURCE_STAMP_POR_DID_NOT_VERIFY: number;
				public static JAR_SIG_NO_SIGNATURES: number;
				public static JAR_SIG_PARSE_EXCEPTION: number;
				public static SOURCE_STAMP_INVALID_TIMESTAMP: number;
				public static SOURCE_STAMP_SIGNATURE_SCHEME_NOT_AVAILABLE: number;
				public getParams(): any[];
				public getIssueId(): number;
				public toString(): string;
				public constructor(format: string, ...params: any[]);
				public constructor(issueId: number, ...params: any[]);
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export class ApkVerifier extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksig.ApkVerifier>;
				public verifySourceStamp(expectedCertDigest: string): com.android.apksig.ApkVerifier.Result;
				public static compareDigests(firstDigests: java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>, secondDigests: java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>): boolean;
				public static containsLineageErrors(result: com.android.apksig.ApkVerifier.Result): boolean;
				public verifySourceStamp(): com.android.apksig.ApkVerifier.Result;
				public static getSigningBlockResult(apk: com.android.apksig.util.DataSource, zipSections: com.android.apksig.apk.ApkUtils.ZipSections, sdkVersion: number, schemeId: number): com.android.apksig.ApkVerifier.Result;
				public verify(): com.android.apksig.ApkVerifier.Result;
				public static getLineageFromResult(result: com.android.apksig.ApkVerifier.Result, sdkVersion: number, schemeId: number): com.android.apksig.SigningCertificateLineage;
				public static getContentDigestsFromResult(result: com.android.apksig.ApkVerifier.Result, schemeId: number): java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>;
			}
			export module ApkVerifier {
				export class ApkVerificationIssueAdapter extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.ApkVerifier.ApkVerificationIssueAdapter>;
					public static getIssuesFromVerificationIssues(verificationIssues: java.util.List<any>): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
				}
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.ApkVerifier.Builder>;
					public build(): com.android.apksig.ApkVerifier;
					public setV4SignatureFile(v4SignatureFile: java.io.File): com.android.apksig.ApkVerifier.Builder;
					public constructor(apk: com.android.apksig.util.DataSource);
					public setMaxCheckedPlatformVersion(maxSdkVersion: number): com.android.apksig.ApkVerifier.Builder;
					public setMinCheckedPlatformVersion(minSdkVersion: number): com.android.apksig.ApkVerifier.Builder;
					public constructor(apk: java.io.File);
				}
				export class ByteArray extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.ApkVerifier.ByteArray>;
					public equals(obj: any): boolean;
					public hashCode(): number;
				}
				export class Issue {
					public static class: java.lang.Class<com.android.apksig.ApkVerifier.Issue>;
					public static JAR_SIG_NO_SIGNATURES: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_MAX_SIGNATURES_EXCEEDED: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_NO_SIGNED_ZIP_ENTRIES: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_DUPLICATE_ZIP_ENTRY: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_DUPLICATE_MANIFEST_SECTION: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_UNNNAMED_MANIFEST_SECTION: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_UNNNAMED_SIG_FILE_SECTION: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_NO_MANIFEST: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_MISSING_ZIP_ENTRY_REFERENCED_IN_MANIFEST: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_NO_ZIP_ENTRY_DIGEST_IN_MANIFEST: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_NO_ZIP_ENTRY_DIGEST_IN_SIG_FILE: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_ZIP_ENTRY_NOT_SIGNED: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_ZIP_ENTRY_SIGNERS_MISMATCH: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_ZIP_ENTRY_DIGEST_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_MANIFEST_MAIN_SECTION_DIGEST_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_MANIFEST_SECTION_DIGEST_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_NO_MANIFEST_DIGEST_IN_SIG_FILE: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_NO_APK_SIG_STRIP_PROTECTION: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_MISSING_FILE: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_VERIFY_EXCEPTION: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_UNSUPPORTED_SIG_ALG: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_PARSE_EXCEPTION: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_MALFORMED_CERTIFICATE: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_NO_SIGNERS: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_DUPLICATE_SIG_FILE_SECTION: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_MISSING_VERSION_ATTR_IN_SIG_FILE: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_UNKNOWN_APK_SIG_SCHEME_ID: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_MISSING_APK_SIG_REFERENCED: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_UNPROTECTED_ZIP_ENTRY: com.android.apksig.ApkVerifier.Issue;
					public static JAR_SIG_MISSING: com.android.apksig.ApkVerifier.Issue;
					public static NO_SIG_FOR_TARGET_SANDBOX_VERSION: com.android.apksig.ApkVerifier.Issue;
					public static MIN_SIG_SCHEME_FOR_TARGET_SDK_NOT_MET: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_MISSING: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_MALFORMED_SIGNERS: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_MALFORMED_SIGNER: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_MALFORMED_PUBLIC_KEY: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_MALFORMED_CERTIFICATE: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_MALFORMED_SIGNATURE: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_MALFORMED_DIGEST: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_MALFORMED_ADDITIONAL_ATTRIBUTE: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_UNKNOWN_APK_SIG_SCHEME_ID: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_MISSING_APK_SIG_REFERENCED: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_MAX_SIGNATURES_EXCEEDED: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_NO_SIGNERS: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_UNKNOWN_SIG_ALGORITHM: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_UNKNOWN_ADDITIONAL_ATTRIBUTE: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_VERIFY_EXCEPTION: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_NO_SIGNATURES: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_NO_SUPPORTED_SIGNATURES: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_NO_CERTIFICATES: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_PUBLIC_KEY_MISMATCH_BETWEEN_CERTIFICATE_AND_SIGNATURES_RECORD: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_SIG_ALG_MISMATCH_BETWEEN_SIGNATURES_AND_DIGESTS_RECORDS: com.android.apksig.ApkVerifier.Issue;
					public static V2_SIG_APK_DIGEST_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_MALFORMED_SIGNERS: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_MALFORMED_SIGNER: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_MALFORMED_PUBLIC_KEY: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_MALFORMED_CERTIFICATE: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_MALFORMED_SIGNATURE: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_MALFORMED_DIGEST: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_MALFORMED_ADDITIONAL_ATTRIBUTE: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_NO_SIGNERS: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_MULTIPLE_SIGNERS: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_MULTIPLE_PAST_SIGNERS: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_PAST_SIGNERS_MISMATCH: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_UNKNOWN_SIG_ALGORITHM: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_UNKNOWN_ADDITIONAL_ATTRIBUTE: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_VERIFY_EXCEPTION: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_INVALID_SDK_VERSIONS: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_NO_SIGNATURES: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_NO_SUPPORTED_SIGNATURES: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_NO_CERTIFICATES: com.android.apksig.ApkVerifier.Issue;
					public static V3_MIN_SDK_VERSION_MISMATCH_BETWEEN_SIGNER_AND_SIGNED_DATA_RECORD: com.android.apksig.ApkVerifier.Issue;
					public static V3_MAX_SDK_VERSION_MISMATCH_BETWEEN_SIGNER_AND_SIGNED_DATA_RECORD: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_PUBLIC_KEY_MISMATCH_BETWEEN_CERTIFICATE_AND_SIGNATURES_RECORD: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_SIG_ALG_MISMATCH_BETWEEN_SIGNATURES_AND_DIGESTS_RECORDS: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_APK_DIGEST_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_POR_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_MALFORMED_LINEAGE: com.android.apksig.ApkVerifier.Issue;
					public static V3_SIG_POR_CERT_MISMATCH: com.android.apksig.ApkVerifier.Issue;
					public static V3_INCONSISTENT_SDK_VERSIONS: com.android.apksig.ApkVerifier.Issue;
					public static V3_MISSING_SDK_VERSIONS: com.android.apksig.ApkVerifier.Issue;
					public static V3_INCONSISTENT_LINEAGES: com.android.apksig.ApkVerifier.Issue;
					public static V31_BLOCK_MISSING: com.android.apksig.ApkVerifier.Issue;
					public static V31_ROTATION_MIN_SDK_MISMATCH: com.android.apksig.ApkVerifier.Issue;
					public static V31_ROTATION_MIN_SDK_ATTR_MISSING: com.android.apksig.ApkVerifier.Issue;
					public static V31_BLOCK_FOUND_WITHOUT_V3_BLOCK: com.android.apksig.ApkVerifier.Issue;
					public static V31_ROTATION_TARGETS_DEV_RELEASE_ATTR_ON_V3_SIGNER: com.android.apksig.ApkVerifier.Issue;
					public static APK_SIG_BLOCK_UNKNOWN_ENTRY_ID: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_MALFORMED_SIGNERS: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_UNKNOWN_SIG_ALGORITHM: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_NO_SIGNATURES: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_NO_SUPPORTED_SIGNATURES: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_VERIFY_EXCEPTION: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_MALFORMED_PUBLIC_KEY: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_MALFORMED_CERTIFICATE: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_NO_CERTIFICATE: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_PUBLIC_KEY_MISMATCH_BETWEEN_CERTIFICATE_AND_SIGNATURES_RECORD: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_APK_ROOT_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_APK_TREE_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_MULTIPLE_SIGNERS: com.android.apksig.ApkVerifier.Issue;
					public static V41_SIG_NEEDS_TWO_SIGNERS: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_V2_V3_SIGNERS_MISMATCH: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_V2_V3_DIGESTS_MISMATCH: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_UNEXPECTED_DIGESTS: com.android.apksig.ApkVerifier.Issue;
					public static V4_SIG_VERSION_NOT_CURRENT: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_CERT_DIGEST_AND_SIG_BLOCK_MISSING: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_SIG_MISSING: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_MALFORMED_CERTIFICATE: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_MALFORMED_SIGNATURE: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_UNKNOWN_SIG_ALGORITHM: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_VERIFY_EXCEPTION: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_NO_SIGNATURE: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_NO_SUPPORTED_SIGNATURE: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_CERTIFICATE_MISMATCH_BETWEEN_SIGNATURE_BLOCK_AND_APK: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_SIGNATURE_BLOCK_WITHOUT_CERT_DIGEST: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_EXPECTED_DIGEST_MISMATCH: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_MALFORMED_ATTRIBUTE: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_UNKNOWN_ATTRIBUTE: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_MALFORMED_LINEAGE: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_POR_CERT_MISMATCH: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_POR_DID_NOT_VERIFY: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_INVALID_TIMESTAMP: com.android.apksig.ApkVerifier.Issue;
					public static SOURCE_STAMP_SIGNATURE_SCHEME_NOT_AVAILABLE: com.android.apksig.ApkVerifier.Issue;
					public static MALFORMED_APK: com.android.apksig.ApkVerifier.Issue;
					public static UNEXPECTED_EXCEPTION: com.android.apksig.ApkVerifier.Issue;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): com.android.apksig.ApkVerifier.Issue;
					public static values(): com.android.apksig.ApkVerifier.Issue[];
				}
				export class IssueWithParams extends com.android.apksig.ApkVerificationIssue {
					public static class: java.lang.Class<com.android.apksig.ApkVerifier.IssueWithParams>;
					public constructor(issue: com.android.apksig.ApkVerifier.Issue, params: any[]);
					public constructor(format: string, ...params: any[]);
					public toString(): string;
					public getIssue(): com.android.apksig.ApkVerifier.Issue;
					public constructor(issueId: number, ...params: any[]);
					public getParams(): any[];
				}
				export class Result extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.ApkVerifier.Result>;
					public isVerifiedUsingV3Scheme(): boolean;
					public getV3SchemeSigners(): java.util.List<com.android.apksig.ApkVerifier.Result.V3SchemeSignerInfo>;
					public isVerifiedUsingV31Scheme(): boolean;
					public getSigningCertificateLineage(): com.android.apksig.SigningCertificateLineage;
					public containsErrors(): boolean;
					public getAllErrors(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
					public isVerifiedUsingV2Scheme(): boolean;
					public getWarnings(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
					public isVerified(): boolean;
					public getV2SchemeSigners(): java.util.List<com.android.apksig.ApkVerifier.Result.V2SchemeSignerInfo>;
					public getV31SchemeSigners(): java.util.List<com.android.apksig.ApkVerifier.Result.V3SchemeSignerInfo>;
					public isVerifiedUsingV4Scheme(): boolean;
					public getErrors(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
					public isVerifiedUsingV1Scheme(): boolean;
					public getV4SchemeSigners(): java.util.List<com.android.apksig.ApkVerifier.Result.V4SchemeSignerInfo>;
					public getV1SchemeIgnoredSigners(): java.util.List<com.android.apksig.ApkVerifier.Result.V1SchemeSignerInfo>;
					public getSignerCertificates(): java.util.List<java.security.cert.X509Certificate>;
					public constructor();
					public isSourceStampVerified(): boolean;
					public getV1SchemeSigners(): java.util.List<com.android.apksig.ApkVerifier.Result.V1SchemeSignerInfo>;
					public getSourceStampInfo(): com.android.apksig.ApkVerifier.Result.SourceStampInfo;
				}
				export module Result {
					export class SourceStampInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.ApkVerifier.Result.SourceStampInfo>;
						public getErrors(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
						public getSourceStampVerificationStatus(): com.android.apksig.ApkVerifier.Result.SourceStampInfo.SourceStampVerificationStatus;
						public containsErrors(): boolean;
						public containsInfoMessages(): boolean;
						public getTimestampEpochSeconds(): number;
						public getCertificatesInLineage(): java.util.List<java.security.cert.X509Certificate>;
						public getCertificate(): java.security.cert.X509Certificate;
						public getWarnings(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
						public getInfoMessages(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
					}
					export module SourceStampInfo {
						export class SourceStampVerificationStatus {
							public static class: java.lang.Class<com.android.apksig.ApkVerifier.Result.SourceStampInfo.SourceStampVerificationStatus>;
							public static STAMP_VERIFIED: com.android.apksig.ApkVerifier.Result.SourceStampInfo.SourceStampVerificationStatus;
							public static STAMP_VERIFICATION_FAILED: com.android.apksig.ApkVerifier.Result.SourceStampInfo.SourceStampVerificationStatus;
							public static CERT_DIGEST_MISMATCH: com.android.apksig.ApkVerifier.Result.SourceStampInfo.SourceStampVerificationStatus;
							public static STAMP_MISSING: com.android.apksig.ApkVerifier.Result.SourceStampInfo.SourceStampVerificationStatus;
							public static STAMP_NOT_VERIFIED: com.android.apksig.ApkVerifier.Result.SourceStampInfo.SourceStampVerificationStatus;
							public static VERIFICATION_ERROR: com.android.apksig.ApkVerifier.Result.SourceStampInfo.SourceStampVerificationStatus;
							public static values(): com.android.apksig.ApkVerifier.Result.SourceStampInfo.SourceStampVerificationStatus[];
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static valueOf(name: string): com.android.apksig.ApkVerifier.Result.SourceStampInfo.SourceStampVerificationStatus;
						}
					}
					export class V1SchemeSignerInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.ApkVerifier.Result.V1SchemeSignerInfo>;
						public getErrors(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
						public containsErrors(): boolean;
						public getSignatureBlockFileName(): string;
						public getCertificateChain(): java.util.List<java.security.cert.X509Certificate>;
						public getSignatureFileName(): string;
						public getName(): string;
						public getCertificate(): java.security.cert.X509Certificate;
						public getWarnings(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
					}
					export class V2SchemeSignerInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.ApkVerifier.Result.V2SchemeSignerInfo>;
						public getErrors(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
						public getContentDigests(): java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.Result.SignerInfo.ContentDigest>;
						public containsErrors(): boolean;
						public getCertificates(): java.util.List<java.security.cert.X509Certificate>;
						public getIndex(): number;
						public getCertificate(): java.security.cert.X509Certificate;
						public getWarnings(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
					}
					export class V3SchemeSignerInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.ApkVerifier.Result.V3SchemeSignerInfo>;
						public getMaxSdkVersion(): number;
						public getErrors(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
						public getMinSdkVersion(): number;
						public getContentDigests(): java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.Result.SignerInfo.ContentDigest>;
						public containsErrors(): boolean;
						public getSigningCertificateLineage(): com.android.apksig.SigningCertificateLineage;
						public getCertificates(): java.util.List<java.security.cert.X509Certificate>;
						public getRotationTargetsDevRelease(): boolean;
						public getIndex(): number;
						public getCertificate(): java.security.cert.X509Certificate;
						public getWarnings(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
					}
					export class V4SchemeSignerInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.ApkVerifier.Result.V4SchemeSignerInfo>;
						public getErrors(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
						public getContentDigests(): java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.Result.SignerInfo.ContentDigest>;
						public containsErrors(): boolean;
						public getCertificates(): java.util.List<java.security.cert.X509Certificate>;
						public getIndex(): number;
						public getCertificate(): java.security.cert.X509Certificate;
						public getWarnings(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export class Constants extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksig.Constants>;
				public static VERSION_SOURCE_STAMP: number;
				public static VERSION_JAR_SIGNATURE_SCHEME: number;
				public static VERSION_APK_SIGNATURE_SCHEME_V2: number;
				public static VERSION_APK_SIGNATURE_SCHEME_V3: number;
				public static VERSION_APK_SIGNATURE_SCHEME_V31: number;
				public static VERSION_APK_SIGNATURE_SCHEME_V4: number;
				public static MAX_APK_SIGNERS: number;
				public static LIBRARY_PAGE_ALIGNMENT_BYTES: number;
				public static MANIFEST_ENTRY_NAME: string;
				public static APK_SIGNATURE_SCHEME_V2_BLOCK_ID: number;
				public static APK_SIGNATURE_SCHEME_V3_BLOCK_ID: number;
				public static APK_SIGNATURE_SCHEME_V31_BLOCK_ID: number;
				public static PROOF_OF_ROTATION_ATTR_ID: number;
				public static V1_SOURCE_STAMP_BLOCK_ID: number;
				public static V2_SOURCE_STAMP_BLOCK_ID: number;
				public static OID_RSA_ENCRYPTION: string;
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export class DefaultApkSignerEngine extends java.lang.Object implements com.android.apksig.ApkSignerEngine {
				public static class: java.lang.Class<com.android.apksig.DefaultApkSignerEngine>;
				public produceV4Signature(dataSource: com.android.apksig.util.DataSource, sigOutput: java.io.OutputStream): number[];
				public outputJarEntry(entryName: string): com.android.apksig.ApkSignerEngine.InspectJarEntryRequest;
				public close(): void;
				public inputJarEntryRemoved(param0: string): com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy;
				/** @deprecated */
				public outputZipSections(param0: com.android.apksig.util.DataSource, param1: com.android.apksig.util.DataSource, param2: com.android.apksig.util.DataSource): com.android.apksig.ApkSignerEngine.OutputApkSigningBlockRequest;
				public outputDone(): void;
				public outputJarEntry(param0: string): com.android.apksig.ApkSignerEngine.InspectJarEntryRequest;
				public outputJarEntries(): com.android.apksig.ApkSignerEngine.OutputJarSignatureRequest;
				public setExecutor(executor: com.android.apksig.util.RunnablesExecutor): void;
				public outputJarEntryRemoved(entryName: string): void;
				public inputJarEntryRemoved(entryName: string): com.android.apksig.ApkSignerEngine.InputJarEntryInstructions.OutputPolicy;
				public outputZipSections2(zipEntries: com.android.apksig.util.DataSource, zipCentralDirectory: com.android.apksig.util.DataSource, zipEocd: com.android.apksig.util.DataSource): com.android.apksig.ApkSignerEngine.OutputApkSigningBlockRequest2;
				public signV4(dataSource: com.android.apksig.util.DataSource, outputFile: java.io.File, ignoreFailures: boolean): void;
				public outputJarEntryRemoved(param0: string): void;
				public inputJarEntry(entryName: string): com.android.apksig.ApkSignerEngine.InputJarEntryInstructions;
				public isEligibleForSourceStamp(): boolean;
				public inputApkSigningBlock(apkSigningBlock: com.android.apksig.util.DataSource): void;
				public inputApkSigningBlock(param0: com.android.apksig.util.DataSource): void;
				/** @deprecated */
				public outputZipSections(zipEntries: com.android.apksig.util.DataSource, zipCentralDirectory: com.android.apksig.util.DataSource, zipEocd: com.android.apksig.util.DataSource): com.android.apksig.ApkSignerEngine.OutputApkSigningBlockRequest;
				public generateSourceStampCertificateDigest(): number[];
				public initWith(manifestBytes: number[], entryNames: java.util.Set<string>): java.util.Set<string>;
				public signV4(param0: com.android.apksig.util.DataSource, param1: java.io.File, param2: boolean): void;
				public inputJarEntry(param0: string): com.android.apksig.ApkSignerEngine.InputJarEntryInstructions;
				public outputZipSections2(param0: com.android.apksig.util.DataSource, param1: com.android.apksig.util.DataSource, param2: com.android.apksig.util.DataSource): com.android.apksig.ApkSignerEngine.OutputApkSigningBlockRequest2;
			}
			export module DefaultApkSignerEngine {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.DefaultApkSignerEngine.Builder>;
					public setDebuggableApkPermitted(permitted: boolean): com.android.apksig.DefaultApkSignerEngine.Builder;
					public setCreatedBy(createdBy: string): com.android.apksig.DefaultApkSignerEngine.Builder;
					public setStampSignerConfig(stampSignerConfig: com.android.apksig.DefaultApkSignerEngine.SignerConfig): com.android.apksig.DefaultApkSignerEngine.Builder;
					public setV3SigningEnabled(enabled: boolean): com.android.apksig.DefaultApkSignerEngine.Builder;
					public setSigningCertificateLineage(signingCertificateLineage: com.android.apksig.SigningCertificateLineage): com.android.apksig.DefaultApkSignerEngine.Builder;
					public constructor(signerConfigs: java.util.List<com.android.apksig.DefaultApkSignerEngine.SignerConfig>, minSdkVersion: number);
					public build(): com.android.apksig.DefaultApkSignerEngine;
					public setMinSdkVersionForRotation(minSdkVersion: number): com.android.apksig.DefaultApkSignerEngine.Builder;
					public setRotationTargetsDevRelease(enabled: boolean): com.android.apksig.DefaultApkSignerEngine.Builder;
					public setSourceStampSigningCertificateLineage(sourceStampSigningCertificateLineage: com.android.apksig.SigningCertificateLineage): com.android.apksig.DefaultApkSignerEngine.Builder;
					public setSourceStampTimestampEnabled(value: boolean): com.android.apksig.DefaultApkSignerEngine.Builder;
					public setVerityEnabled(enabled: boolean): com.android.apksig.DefaultApkSignerEngine.Builder;
					public setV2SigningEnabled(enabled: boolean): com.android.apksig.DefaultApkSignerEngine.Builder;
					public setOtherSignersSignaturesPreserved(preserved: boolean): com.android.apksig.DefaultApkSignerEngine.Builder;
					public setV1SigningEnabled(enabled: boolean): com.android.apksig.DefaultApkSignerEngine.Builder;
				}
				export class CompoundInspectJarEntryRequest extends java.lang.Object implements com.android.apksig.ApkSignerEngine.InspectJarEntryRequest {
					public static class: java.lang.Class<com.android.apksig.DefaultApkSignerEngine.CompoundInspectJarEntryRequest>;
					public getDataSink(): com.android.apksig.util.DataSink;
					public done(): void;
					public getEntryName(): string;
				}
				export class GetJarEntryDataDigestRequest extends java.lang.Object implements com.android.apksig.ApkSignerEngine.InspectJarEntryRequest {
					public static class: java.lang.Class<com.android.apksig.DefaultApkSignerEngine.GetJarEntryDataDigestRequest>;
					public getDataSink(): com.android.apksig.util.DataSink;
					public done(): void;
					public getEntryName(): string;
				}
				export class GetJarEntryDataRequest extends java.lang.Object implements com.android.apksig.ApkSignerEngine.InspectJarEntryRequest {
					public static class: java.lang.Class<com.android.apksig.DefaultApkSignerEngine.GetJarEntryDataRequest>;
					public getDataSink(): com.android.apksig.util.DataSink;
					public done(): void;
					public getEntryName(): string;
				}
				export class OutputApkSigningBlockRequestImpl extends java.lang.Object implements com.android.apksig.ApkSignerEngine.OutputApkSigningBlockRequest, com.android.apksig.ApkSignerEngine.OutputApkSigningBlockRequest2 {
					public static class: java.lang.Class<com.android.apksig.DefaultApkSignerEngine.OutputApkSigningBlockRequestImpl>;
					public done(): void;
					public getApkSigningBlock(): number[];
					public getPaddingSizeBeforeApkSigningBlock(): number;
				}
				export class OutputJarSignatureRequestImpl extends java.lang.Object implements com.android.apksig.ApkSignerEngine.OutputJarSignatureRequest {
					public static class: java.lang.Class<com.android.apksig.DefaultApkSignerEngine.OutputJarSignatureRequestImpl>;
					public getAdditionalJarEntries(): java.util.List<com.android.apksig.ApkSignerEngine.OutputJarSignatureRequest.JarEntry>;
					public done(): void;
				}
				export class SignerConfig extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.DefaultApkSignerEngine.SignerConfig>;
					public getCertificates(): java.util.List<java.security.cert.X509Certificate>;
					public getSigningCertificateLineage(): com.android.apksig.SigningCertificateLineage;
					public getName(): string;
					/** @deprecated */
					public getPrivateKey(): java.security.PrivateKey;
					public getKeyConfig(): com.android.apksig.KeyConfig;
					public getSignerTargetsDevRelease(): boolean;
					public getMinSdkVersion(): number;
					public getDeterministicDsaSigning(): boolean;
				}
				export module SignerConfig {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.DefaultApkSignerEngine.SignerConfig.Builder>;
						public constructor(name: string, keyConfig: com.android.apksig.KeyConfig, certificates: java.util.List<java.security.cert.X509Certificate>);
						public build(): com.android.apksig.DefaultApkSignerEngine.SignerConfig;
						/** @deprecated */
						public constructor(name: string, privateKey: java.security.PrivateKey, certificates: java.util.List<java.security.cert.X509Certificate>, deterministicDsaSigning: boolean);
						public constructor(name: string, keyConfig: com.android.apksig.KeyConfig, certificates: java.util.List<java.security.cert.X509Certificate>, deterministicDsaSigning: boolean);
						/** @deprecated */
						public constructor(name: string, privateKey: java.security.PrivateKey, certificates: java.util.List<java.security.cert.X509Certificate>);
						public setLineageForMinSdkVersion(lineage: com.android.apksig.SigningCertificateLineage, minSdkVersion: number): com.android.apksig.DefaultApkSignerEngine.SignerConfig.Builder;
						public setMinSdkVersion(minSdkVersion: number): com.android.apksig.DefaultApkSignerEngine.SignerConfig.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export class Hints extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksig.Hints>;
				public static PIN_HINT_ASSET_ZIP_ENTRY_NAME: string;
				public static PIN_BYTE_RANGE_ZIP_ENTRY_NAME: string;
				public static parsePinPatterns(patternBlob: number[]): java.util.ArrayList<com.android.apksig.Hints.PatternWithRange>;
				public static encodeByteRangeList(pinByteRanges: java.util.List<com.android.apksig.Hints.ByteRange>): number[];
				public constructor();
			}
			export module Hints {
				export class ByteRange extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.Hints.ByteRange>;
					public constructor(start: number, param1: number);
				}
				export class PatternWithRange extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.Hints.PatternWithRange>;
					public constructor(pattern: string);
					public matcher(input: string): java.util.regex.Matcher;
					public ClampToAbsoluteByteRange(rangeIn: com.android.apksig.Hints.ByteRange): com.android.apksig.Hints.ByteRange;
					public constructor(pattern: string, offset: number, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export class JcaSignerEngine extends java.lang.Object implements com.android.apksig.SignerEngine {
				public static class: java.lang.Class<com.android.apksig.JcaSignerEngine>;
				public sign(param0: number[]): number[];
				public sign(data: number[]): number[];
				public constructor(privateKey: java.security.PrivateKey, signatureAlgorithm: string, algorithmParameterSpec: java.security.spec.AlgorithmParameterSpec);
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export abstract class KeyConfig extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksig.KeyConfig>;
				public match(param0: any /* any*/, param1: any /* any*/): any;
			}
			export module KeyConfig {
				export class Jca extends com.android.apksig.KeyConfig {
					public static class: java.lang.Class<com.android.apksig.KeyConfig.Jca>;
					public privateKey: java.security.PrivateKey;
					public constructor(privateKey: java.security.PrivateKey);
					public match(param0: any /* any*/, param1: any /* any*/): any;
					public match(jca: any /* any*/, kms: any /* any*/): any;
				}
				export class Kms extends com.android.apksig.KeyConfig {
					public static class: java.lang.Class<com.android.apksig.KeyConfig.Kms>;
					public kmsType: string;
					public keyAlias: string;
					public constructor(kmsType: string, keyAlias: string);
					public match(param0: any /* any*/, param1: any /* any*/): any;
					public match(jca: any /* any*/, kms: any /* any*/): any;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export class SignerEngine extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksig.SignerEngine>;
				/**
				 * Constructs a new instance of the com.android.apksig.SignerEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					sign(param0: number[]): number[];
				});
				public constructor();
				public sign(param0: number[]): number[];
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export class SignerEngineFactory extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksig.SignerEngineFactory>;
				public static getImplementation(keyConfig: com.android.apksig.KeyConfig, jcaSignatureAlgorithm: string, algorithmParameterSpec: java.security.spec.AlgorithmParameterSpec): com.android.apksig.SignerEngine;
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export class SigningCertificateLineage extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksig.SigningCertificateLineage>;
				public static MAGIC: number;
				public getSubLineage(x509Certificate: java.security.cert.X509Certificate): com.android.apksig.SigningCertificateLineage;
				public static readFromFile(file: java.io.File): com.android.apksig.SigningCertificateLineage;
				public sortSignerConfigs(signerConfigs: java.util.List<com.android.apksig.DefaultApkSignerEngine.SignerConfig>): java.util.List<com.android.apksig.DefaultApkSignerEngine.SignerConfig>;
				public updateSignerCapabilities(config: com.android.apksig.SigningCertificateLineage.SignerConfig, capabilities: com.android.apksig.SigningCertificateLineage.SignerCapabilities): void;
				public static consolidateLineages(lineages: java.util.List<com.android.apksig.SigningCertificateLineage>): com.android.apksig.SigningCertificateLineage;
				public static readFromBytes(lineageBytes: number[]): com.android.apksig.SigningCertificateLineage;
				public writeToFile(file: java.io.File): void;
				public static readFromApkDataSource(apk: com.android.apksig.util.DataSource): com.android.apksig.SigningCertificateLineage;
				public static readV31FromApkDataSource(apk: com.android.apksig.util.DataSource): com.android.apksig.SigningCertificateLineage;
				public getSignerCapabilities(cert: java.security.cert.X509Certificate): com.android.apksig.SigningCertificateLineage.SignerCapabilities;
				public static readFromApkFile(apkFile: java.io.File): com.android.apksig.SigningCertificateLineage;
				public isSignerInLineage(config: com.android.apksig.SigningCertificateLineage.SignerConfig): boolean;
				public static readFromDataSource(dataSource: com.android.apksig.util.DataSource): com.android.apksig.SigningCertificateLineage;
				public spawnDescendant(parent: com.android.apksig.SigningCertificateLineage.SignerConfig, child: com.android.apksig.SigningCertificateLineage.SignerConfig, childCapabilities: com.android.apksig.SigningCertificateLineage.SignerCapabilities): com.android.apksig.SigningCertificateLineage;
				public static readFromV3AttributeValue(attrValue: number[]): com.android.apksig.SigningCertificateLineage;
				public writeToDataSink(dataSink: com.android.apksig.util.DataSink): void;
				public getCertificatesInLineage(): java.util.List<java.security.cert.X509Certificate>;
				public isCertificateInLineage(cert: java.security.cert.X509Certificate): boolean;
				public getSignerCapabilities(config: com.android.apksig.SigningCertificateLineage.SignerConfig): com.android.apksig.SigningCertificateLineage.SignerCapabilities;
				public size(): number;
				public mergeLineageWith(otherLineage: com.android.apksig.SigningCertificateLineage): com.android.apksig.SigningCertificateLineage;
				public static readFromSignedData(signedData: java.nio.ByteBuffer): com.android.apksig.SigningCertificateLineage;
				public getBytes(): number[];
				public spawnDescendant(parent: com.android.apksig.SigningCertificateLineage.SignerConfig, child: com.android.apksig.SigningCertificateLineage.SignerConfig): com.android.apksig.SigningCertificateLineage;
				public static checkLineagesCompatibility(oldLineage: com.android.apksig.SigningCertificateLineage, newLineage: com.android.apksig.SigningCertificateLineage): boolean;
				public isCertificateLatestInLineage(cert: java.security.cert.X509Certificate): boolean;
				public encodeSigningCertificateLineage(): number[];
				public updateSignerCapabilities(certificate: java.security.cert.X509Certificate, capabilities: com.android.apksig.SigningCertificateLineage.SignerCapabilities): void;
			}
			export module SigningCertificateLineage {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.SigningCertificateLineage.Builder>;
					public constructor(originalSignerConfig: com.android.apksig.SigningCertificateLineage.SignerConfig, newSignerConfig: com.android.apksig.SigningCertificateLineage.SignerConfig);
					public constructor(originalSignerConfig: com.android.apksig.SigningCertificateLineage.SignerConfig);
					public setMinSdkVersion(minSdkVersion: number): com.android.apksig.SigningCertificateLineage.Builder;
					public setOriginalCapabilities(signerCapabilities: com.android.apksig.SigningCertificateLineage.SignerCapabilities): com.android.apksig.SigningCertificateLineage.Builder;
					public setNewCapabilities(signerCapabilities: com.android.apksig.SigningCertificateLineage.SignerCapabilities): com.android.apksig.SigningCertificateLineage.Builder;
					public build(): com.android.apksig.SigningCertificateLineage;
				}
				export class SignerCapabilities extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.SigningCertificateLineage.SignerCapabilities>;
					public hasPermission(): boolean;
					public equals(obj: any): boolean;
					public hasSharedUid(): boolean;
					public hasRollback(): boolean;
					public equals(other: any): boolean;
					public hasAuth(): boolean;
					public hasInstalledData(): boolean;
					public hashCode(): number;
				}
				export module SignerCapabilities {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.SigningCertificateLineage.SignerCapabilities.Builder>;
						public constructor();
						public setPermission(enabled: boolean): com.android.apksig.SigningCertificateLineage.SignerCapabilities.Builder;
						public setCallerConfiguredCapabilities(capabilities: com.android.apksig.SigningCertificateLineage.SignerCapabilities): com.android.apksig.SigningCertificateLineage.SignerCapabilities.Builder;
						public setRollback(enabled: boolean): com.android.apksig.SigningCertificateLineage.SignerCapabilities.Builder;
						public build(): com.android.apksig.SigningCertificateLineage.SignerCapabilities;
						public setInstalledData(enabled: boolean): com.android.apksig.SigningCertificateLineage.SignerCapabilities.Builder;
						public constructor(flags: number);
						public setSharedUid(enabled: boolean): com.android.apksig.SigningCertificateLineage.SignerCapabilities.Builder;
						public setAuth(enabled: boolean): com.android.apksig.SigningCertificateLineage.SignerCapabilities.Builder;
					}
				}
				export class SignerConfig extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.SigningCertificateLineage.SignerConfig>;
					/** @deprecated */
					public getPrivateKey(): java.security.PrivateKey;
					public getKeyConfig(): com.android.apksig.KeyConfig;
					public getCertificate(): java.security.cert.X509Certificate;
				}
				export module SignerConfig {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.SigningCertificateLineage.SignerConfig.Builder>;
						/** @deprecated */
						public constructor(privateKey: java.security.PrivateKey, certificate: java.security.cert.X509Certificate);
						public constructor(keyConfig: com.android.apksig.KeyConfig, certificate: java.security.cert.X509Certificate);
						public build(): com.android.apksig.SigningCertificateLineage.SignerConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export class SourceStampVerifier extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksig.SourceStampVerifier>;
				public verifySourceStamp(): com.android.apksig.SourceStampVerifier.Result;
				public verifySourceStamp(expectedCertDigest: string): com.android.apksig.SourceStampVerifier.Result;
				public parseSigners(apkSignatureSchemeBlock: java.nio.ByteBuffer, apkSigSchemeVersion: number, apkContentDigests: java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>, result: com.android.apksig.SourceStampVerifier.Result): void;
			}
			export module SourceStampVerifier {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.SourceStampVerifier.Builder>;
					public constructor(apk: com.android.apksig.util.DataSource);
					public build(): com.android.apksig.SourceStampVerifier;
					public constructor(apk: java.io.File);
					public setMaxCheckedPlatformVersion(maxSdkVersion: number): com.android.apksig.SourceStampVerifier.Builder;
					public setMinCheckedPlatformVersion(minSdkVersion: number): com.android.apksig.SourceStampVerifier.Builder;
				}
				export class Result extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.SourceStampVerifier.Result>;
					public getWarnings(): java.util.List<com.android.apksig.ApkVerificationIssue>;
					public getAllWarnings(): java.util.List<com.android.apksig.ApkVerificationIssue>;
					public getV1SchemeSigners(): java.util.List<com.android.apksig.SourceStampVerifier.Result.SignerInfo>;
					public getV3SchemeSigners(): java.util.List<com.android.apksig.SourceStampVerifier.Result.SignerInfo>;
					public containsErrors(): boolean;
					public getErrors(): java.util.List<com.android.apksig.ApkVerificationIssue>;
					public constructor();
					public isVerified(): boolean;
					public getV2SchemeSigners(): java.util.List<com.android.apksig.SourceStampVerifier.Result.SignerInfo>;
					public getV31SchemeSigners(): java.util.List<com.android.apksig.SourceStampVerifier.Result.SignerInfo>;
					public getAllErrors(): java.util.List<com.android.apksig.ApkVerificationIssue>;
					public getSourceStampInfo(): com.android.apksig.SourceStampVerifier.Result.SourceStampInfo;
				}
				export module Result {
					export class SignerInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.SourceStampVerifier.Result.SignerInfo>;
						public static INVALID_SDK_VERSION: number;
						public getMaxSdkVersion(): number;
						public getMinSdkVersion(): number;
						public constructor();
						public containsErrors(): boolean;
						public getErrors(): java.util.List<com.android.apksig.ApkVerificationIssue>;
						public getSigningCertificate(): java.security.cert.X509Certificate;
						public getWarnings(): java.util.List<com.android.apksig.ApkVerificationIssue>;
					}
					export class SourceStampInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.SourceStampVerifier.Result.SourceStampInfo>;
						public getInfoMessages(): java.util.List<com.android.apksig.ApkVerificationIssue>;
						public containsErrors(): boolean;
						public containsInfoMessages(): boolean;
						public getTimestampEpochSeconds(): number;
						public getCertificatesInLineage(): java.util.List<java.security.cert.X509Certificate>;
						public getErrors(): java.util.List<com.android.apksig.ApkVerificationIssue>;
						public getWarnings(): java.util.List<com.android.apksig.ApkVerificationIssue>;
						public getCertificate(): java.security.cert.X509Certificate;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module apk {
				export class ApkFormatException extends java.lang.Exception {
					public static class: java.lang.Class<com.android.apksig.apk.ApkFormatException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module apk {
				export class ApkSigningBlockNotFoundException extends java.lang.Exception {
					public static class: java.lang.Class<com.android.apksig.apk.ApkSigningBlockNotFoundException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module apk {
				export abstract class ApkUtils extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.apk.ApkUtils>;
					public static ANDROID_MANIFEST_ZIP_ENTRY_NAME: string;
					public static SOURCE_STAMP_CERTIFICATE_HASH_ZIP_ENTRY_NAME: string;
					public static getTargetSdkVersionFromBinaryAndroidManifest(androidManifestContents: java.nio.ByteBuffer): number;
					public static computeSha256DigestBytes(data: number[]): number[];
					public static getVersionCodeFromBinaryAndroidManifest(androidManifestContents: java.nio.ByteBuffer): number;
					public static updateZipEocdCommentLen(zipEndOfCentralDirectory: java.nio.ByteBuffer): void;
					public static getPackageNameFromBinaryAndroidManifest(androidManifestContents: java.nio.ByteBuffer): string;
					public static getLongVersionCodeFromBinaryAndroidManifest(androidManifestContents: java.nio.ByteBuffer): number;
					public static getAndroidManifest(apk: com.android.apksig.util.DataSource): java.nio.ByteBuffer;
					public static getDebuggableFromBinaryAndroidManifest(androidManifestContents: java.nio.ByteBuffer): boolean;
					public static findApkSigningBlock(apk: com.android.apksig.util.DataSource, zipSections: com.android.apksig.apk.ApkUtils.ZipSections): com.android.apksig.apk.ApkUtils.ApkSigningBlock;
					public static getTargetSandboxVersionFromBinaryAndroidManifest(androidManifestContents: java.nio.ByteBuffer): number;
					public static setZipEocdCentralDirectoryOffset(zipEndOfCentralDirectory: java.nio.ByteBuffer, offset: number): void;
					public static findZipSections(apk: com.android.apksig.util.DataSource): com.android.apksig.apk.ApkUtils.ZipSections;
					public static getMinSdkVersionFromBinaryAndroidManifest(androidManifestContents: java.nio.ByteBuffer): number;
					public static findApkSigningBlock(apk: com.android.apksig.util.DataSource): com.android.apksig.apk.ApkUtils.ApkSigningBlock;
				}
				export module ApkUtils {
					export class ApkSigningBlock extends com.android.apksig.apk.ApkUtilsLite.ApkSigningBlock {
						public static class: java.lang.Class<com.android.apksig.apk.ApkUtils.ApkSigningBlock>;
						public constructor(startOffsetInApk: number, param1: com.android.apksig.util.DataSource);
					}
					export class CodenamesLazyInitializer extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.apk.ApkUtils.CodenamesLazyInitializer>;
					}
					export module CodenamesLazyInitializer {
						export class ByFirstComparator extends java.util.Comparator<com.android.apksig.internal.util.Pair<java.lang.Character,java.lang.Integer>> {
							public static class: java.lang.Class<com.android.apksig.apk.ApkUtils.CodenamesLazyInitializer.ByFirstComparator>;
							public compare(param0: any, param1: any): number;
							public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public equals(obj: any): boolean;
							public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static naturalOrder(): java.util.Comparator<any>;
							public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public reversed(): java.util.Comparator<any>;
							public compare(o1: com.android.apksig.internal.util.Pair<java.lang.Character,java.lang.Integer>, o2: com.android.apksig.internal.util.Pair<java.lang.Character,java.lang.Integer>): number;
							public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public equals(param0: any): boolean;
							public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static reverseOrder(): java.util.Comparator<any>;
						}
					}
					export class ZipSections extends com.android.apksig.zip.ZipSections {
						public static class: java.lang.Class<com.android.apksig.apk.ApkUtils.ZipSections>;
						public constructor(centralDirectoryOffset: number, param1: number, centralDirectorySizeBytes: number, param3: number, centralDirectoryRecordCount: java.nio.ByteBuffer);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module apk {
				export class ApkUtilsLite extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.apk.ApkUtilsLite>;
					public static computeSha256DigestBytes(data: number[]): number[];
					public static findZipSections(apk: com.android.apksig.util.DataSource): com.android.apksig.zip.ZipSections;
					public static findApkSigningBlock(apk: com.android.apksig.util.DataSource, zipSections: com.android.apksig.zip.ZipSections): com.android.apksig.apk.ApkUtilsLite.ApkSigningBlock;
				}
				export module ApkUtilsLite {
					export class ApkSigningBlock extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.apk.ApkUtilsLite.ApkSigningBlock>;
						public constructor(startOffsetInApk: number, param1: com.android.apksig.util.DataSource);
						public getStartOffset(): number;
						public getContents(): com.android.apksig.util.DataSource;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module apk {
				export class CodenameMinSdkVersionException extends com.android.apksig.apk.MinSdkVersionException {
					public static class: java.lang.Class<com.android.apksig.apk.CodenameMinSdkVersionException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public getCodename(): string;
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, codename: string);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module apk {
				export class MinSdkVersionException extends com.android.apksig.apk.ApkFormatException {
					public static class: java.lang.Class<com.android.apksig.apk.MinSdkVersionException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export class AndroidBinXmlParser extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.apk.AndroidBinXmlParser>;
						public static EVENT_START_DOCUMENT: number;
						public static EVENT_END_DOCUMENT: number;
						public static EVENT_START_ELEMENT: number;
						public static EVENT_END_ELEMENT: number;
						public static VALUE_TYPE_UNSUPPORTED: number;
						public static VALUE_TYPE_STRING: number;
						public static VALUE_TYPE_INT: number;
						public static VALUE_TYPE_REFERENCE: number;
						public static VALUE_TYPE_BOOLEAN: number;
						public getAttributeNameResourceId(index: number): number;
						public getAttributeName(index: number): string;
						public getAttributeStringValue(index: number): string;
						public getAttributeBooleanValue(index: number): boolean;
						public getName(): string;
						public getNamespace(): string;
						public constructor(xml: java.nio.ByteBuffer);
						public getAttributeValueType(index: number): number;
						public next(): number;
						public getAttributeIntValue(index: number): number;
						public getAttributeNamespace(index: number): string;
						public getEventType(): number;
						public getAttributeCount(): number;
						public getDepth(): number;
					}
					export module AndroidBinXmlParser {
						export class Attribute extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.AndroidBinXmlParser.Attribute>;
							public getBooleanValue(): boolean;
							public getName(): string;
							public getValueType(): number;
							public getNameResourceId(): number;
							public getNamespace(): string;
							public getIntValue(): number;
							public getStringValue(): string;
						}
						export class Chunk extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.AndroidBinXmlParser.Chunk>;
							public static TYPE_STRING_POOL: number;
							public static TYPE_RES_XML: number;
							public static RES_XML_TYPE_START_ELEMENT: number;
							public static RES_XML_TYPE_END_ELEMENT: number;
							public static RES_XML_TYPE_RESOURCE_MAP: number;
							public getType(): number;
							public constructor(type: number, header: java.nio.ByteBuffer, contents: java.nio.ByteBuffer);
							public getContents(): java.nio.ByteBuffer;
							public static get(input: java.nio.ByteBuffer): com.android.apksig.internal.apk.AndroidBinXmlParser.Chunk;
							public getHeader(): java.nio.ByteBuffer;
						}
						export class ResourceMap extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.AndroidBinXmlParser.ResourceMap>;
							public constructor(chunk: com.android.apksig.internal.apk.AndroidBinXmlParser.Chunk);
							public getResourceId(index: number): number;
						}
						export class StringPool extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.AndroidBinXmlParser.StringPool>;
							public constructor(chunk: com.android.apksig.internal.apk.AndroidBinXmlParser.Chunk);
							public getString(index: number): string;
						}
						export class XmlParserException extends java.lang.Exception {
							public static class: java.lang.Class<com.android.apksig.internal.apk.AndroidBinXmlParser.XmlParserException>;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(message: string);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export class ApkSigResult extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigResult>;
						public signatureSchemeVersion: number;
						public verified: boolean;
						public mSigners: java.util.List<com.android.apksig.internal.apk.ApkSignerInfo>;
						public getErrors(): java.util.List<any>;
						public containsErrors(): boolean;
						public addWarning(issueId: number, ...parameters: any[]): void;
						public containsWarnings(): boolean;
						public addError(issueId: number, ...parameters: any[]): void;
						public getWarnings(): java.util.List<any>;
						public constructor(signatureSchemeVersion: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export class ApkSignerInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSignerInfo>;
						public index: number;
						public timestamp: number;
						public certs: java.util.List<java.security.cert.X509Certificate>;
						public certificateLineage: java.util.List<java.security.cert.X509Certificate>;
						public constructor();
						public getErrors(): java.util.List<any>;
						public containsErrors(): boolean;
						public containsInfoMessages(): boolean;
						public containsWarnings(): boolean;
						public addError(issueId: number, ...params: any[]): void;
						public addInfoMessage(issueId: number, ...params: any[]): void;
						public addWarning(issueId: number, ...params: any[]): void;
						public getWarnings(): java.util.List<any>;
						public getInfoMessages(): java.util.List<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export class ApkSigningBlockUtils extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils>;
						public static ANDROID_COMMON_PAGE_ALIGNMENT_BYTES: number;
						public static VERITY_PADDING_BLOCK_ID: number;
						public static VERSION_SOURCE_STAMP: number;
						public static VERSION_JAR_SIGNATURE_SCHEME: number;
						public static VERSION_APK_SIGNATURE_SCHEME_V2: number;
						public static VERSION_APK_SIGNATURE_SCHEME_V3: number;
						public static VERSION_APK_SIGNATURE_SCHEME_V31: number;
						public static VERSION_APK_SIGNATURE_SCHEME_V4: number;
						public static toHex(value: number[]): string;
						public static getApkSignatureBlockSigners(signatureBlock: number[]): java.util.List<com.android.apksig.internal.util.Pair<java.util.List<java.security.cert.X509Certificate>,number[]>>;
						public static getSignaturesToVerify(signatures: java.util.List<any>, minSdkVersion: number, maxSdkVersion: number, onlyRequireJcaSupport: boolean): java.util.List<any>;
						public static getLengthPrefixedSlice(source: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public static encodeAsSequenceOfLengthPrefixedElements(sequence: number[][]): number[];
						public static computeContentDigests(executor: com.android.apksig.util.RunnablesExecutor, beforeCentralDir: com.android.apksig.util.DataSource, centralDir: com.android.apksig.util.DataSource, eocd: com.android.apksig.util.DataSource, signerConfigs: java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig>): com.android.apksig.internal.util.Pair<java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig>,java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>>;
						public static generateApkSigningBlockPadding(beforeCentralDir: com.android.apksig.util.DataSource, apkSigningBlockPaddingSupported: boolean): com.android.apksig.internal.util.Pair<com.android.apksig.util.DataSource,java.lang.Integer>;
						public static copyWithModifiedCDOffset(beforeCentralDir: com.android.apksig.util.DataSource, eocd: com.android.apksig.util.DataSource): com.android.apksig.util.DataSource;
						public static verifyIntegrity(executor: com.android.apksig.util.RunnablesExecutor, beforeApkSigningBlock: com.android.apksig.util.DataSource, centralDir: com.android.apksig.util.DataSource, eocd: java.nio.ByteBuffer, contentDigestAlgorithms: java.util.Set<com.android.apksig.internal.apk.ContentDigestAlgorithm>, result: com.android.apksig.internal.apk.ApkSigningBlockUtils.Result): void;
						public static encodeAsSequenceOfLengthPrefixedPairsOfIntAndLengthPrefixedBytes(sequence: java.util.List<com.android.apksig.internal.util.Pair<java.lang.Integer,number[]>>): number[];
						public static getSignaturesToVerify(signatures: java.util.List<any>, minSdkVersion: number, maxSdkVersion: number): java.util.List<any>;
						public static pickBestDigestForV4(contentDigests: java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>): number[];
						public static computeChunkVerityTreeAndDigest(dataSource: com.android.apksig.util.DataSource): com.android.apksig.internal.apk.ApkSigningBlockUtils.VerityTreeAndDigest;
						public static compareSignatureAlgorithm(alg1: com.android.apksig.internal.apk.SignatureAlgorithm, alg2: com.android.apksig.internal.apk.SignatureAlgorithm): number;
						public static readLengthPrefixedByteArray(buf: java.nio.ByteBuffer): number[];
						public constructor();
						public static generateSignaturesOverData(signerConfig: com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig, data: number[]): java.util.List<com.android.apksig.internal.util.Pair<java.lang.Integer,number[]>>;
						public static encodeAsLengthPrefixedElement(bytes: number[]): number[];
						public static checkByteOrderLittleEndian(buffer: java.nio.ByteBuffer): void;
						public static generateApkSigningBlock(apkSignatureSchemeBlockPairs: java.util.List<com.android.apksig.internal.util.Pair<number[],java.lang.Integer>>): number[];
						public static findApkSignatureSchemeBlock(apkSigningBlock: java.nio.ByteBuffer, blockId: number, result: com.android.apksig.internal.apk.ApkSigningBlockUtils.Result): java.nio.ByteBuffer;
						public static getApkSignatureBlocks(apkSigningBlock: com.android.apksig.util.DataSource): java.util.List<com.android.apksig.internal.util.Pair<number[],java.lang.Integer>>;
						public static encodeCertificates(certificates: java.util.List<java.security.cert.X509Certificate>): java.util.List<number[]>;
						public static computeContentDigests(executor: com.android.apksig.util.RunnablesExecutor, digestAlgorithms: java.util.Set<com.android.apksig.internal.apk.ContentDigestAlgorithm>, beforeCentralDir: com.android.apksig.util.DataSource, centralDir: com.android.apksig.util.DataSource, eocd: com.android.apksig.util.DataSource): java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>;
						public static findSignature(apk: com.android.apksig.util.DataSource, zipSections: com.android.apksig.apk.ApkUtils.ZipSections, blockId: number, result: com.android.apksig.internal.apk.ApkSigningBlockUtils.Result): com.android.apksig.internal.apk.SignatureInfo;
						public static encodePublicKey(publicKey: java.security.PublicKey): number[];
						public static encodeAsSequenceOfLengthPrefixedElements(sequence: java.util.List<number[]>): number[];
						public static generatePkcs7DerEncodedMessage(signatureBytes: number[], data: java.nio.ByteBuffer, signerCerts: java.util.List<java.security.cert.X509Certificate>, digestAlgorithmId: com.android.apksig.internal.pkcs7.AlgorithmIdentifier, signatureAlgorithmId: com.android.apksig.internal.pkcs7.AlgorithmIdentifier): number[];
					}
					export module ApkSigningBlockUtils {
						export class ChunkDigester extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.ChunkDigester>;
							public run(): void;
						}
						export class ChunkDigests extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.ChunkDigests>;
						}
						export class ChunkSupplier extends java.lang.Object /* any*/ {
							public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.ChunkSupplier>;
							public get(): com.android.apksig.internal.apk.ApkSigningBlockUtils.ChunkSupplier.Chunk;
						}
						export module ChunkSupplier {
							export class Chunk extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.ChunkSupplier.Chunk>;
							}
						}
						export class NoSupportedSignaturesException extends com.android.apksig.internal.apk.NoApkSupportedSignaturesException {
							public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.NoSupportedSignaturesException>;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(message: string);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						}
						export class Result extends com.android.apksig.internal.apk.ApkSigResult {
							public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.Result>;
							public signingCertificateLineage: com.android.apksig.SigningCertificateLineage;
							public signers: java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.Result.SignerInfo>;
							public addError(issueId: number, ...parameters: any[]): void;
							public addWarning(msg: com.android.apksig.ApkVerifier.Issue, ...parameters: any[]): void;
							public getWarnings(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
							public containsWarnings(): boolean;
							public getErrors(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
							public addWarning(issueId: number, ...parameters: any[]): void;
							public constructor(signatureSchemeVersion: number);
							public addError(msg: com.android.apksig.ApkVerifier.Issue, ...parameters: any[]): void;
							public getWarnings(): java.util.List<any>;
							public containsErrors(): boolean;
							public getErrors(): java.util.List<any>;
						}
						export module Result {
							export class SignerInfo extends com.android.apksig.internal.apk.ApkSignerInfo {
								public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.Result.SignerInfo>;
								public contentDigests: java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.Result.SignerInfo.ContentDigest>;
								public verifiedContentDigests: java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>;
								public signatures: java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.Result.SignerInfo.Signature>;
								public verifiedSignatures: java.util.Map<com.android.apksig.internal.apk.SignatureAlgorithm,number[]>;
								public additionalAttributes: java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.Result.SignerInfo.AdditionalAttribute>;
								public signedData: number[];
								public minSdkVersion: number;
								public maxSdkVersion: number;
								public signingCertificateLineage: com.android.apksig.SigningCertificateLineage;
								public addError(issueId: number, ...params: any[]): void;
								public addWarning(issueId: number, ...params: any[]): void;
								public containsErrors(): boolean;
								public getErrors(): java.util.List<any>;
								public addWarning(msg: com.android.apksig.ApkVerifier.Issue, ...parameters: any[]): void;
								public getErrors(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
								public getWarnings(): java.util.List<any>;
								public constructor();
								public addError(msg: com.android.apksig.ApkVerifier.Issue, ...parameters: any[]): void;
								public getWarnings(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
								public containsWarnings(): boolean;
							}
							export module SignerInfo {
								export class AdditionalAttribute extends java.lang.Object {
									public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.Result.SignerInfo.AdditionalAttribute>;
									public constructor(id: number, value: number[]);
									public getId(): number;
									public getValue(): number[];
								}
								export class ContentDigest extends java.lang.Object {
									public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.Result.SignerInfo.ContentDigest>;
									public getSignatureAlgorithmId(): number;
									public constructor(signatureAlgorithmId: number, value: number[]);
									public getValue(): number[];
								}
								export class Signature extends java.lang.Object {
									public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.Result.SignerInfo.Signature>;
									public getValue(): number[];
									public constructor(algorithmId: number, value: number[]);
									public getAlgorithmId(): number;
								}
							}
						}
						export class SignatureNotFoundException extends java.lang.Exception {
							public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.SignatureNotFoundException>;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(message: string);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						}
						export class SignerConfig extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig>;
							public privateKey: java.security.PrivateKey;
							public keyConfig: com.android.apksig.KeyConfig;
							public certificates: java.util.List<java.security.cert.X509Certificate>;
							public signatureAlgorithms: java.util.List<com.android.apksig.internal.apk.SignatureAlgorithm>;
							public minSdkVersion: number;
							public maxSdkVersion: number;
							public signerTargetsDevRelease: boolean;
							public signingCertificateLineage: com.android.apksig.SigningCertificateLineage;
							public constructor();
						}
						export class SigningSchemeBlockAndDigests extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.SigningSchemeBlockAndDigests>;
							public signingSchemeBlock: com.android.apksig.internal.util.Pair<number[],java.lang.Integer>;
							public digestInfo: java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>;
							public constructor(signingSchemeBlock: com.android.apksig.internal.util.Pair<number[],java.lang.Integer>, digestInfo: java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>);
						}
						export class SupportedSignature extends com.android.apksig.internal.apk.ApkSupportedSignature {
							public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.SupportedSignature>;
							public constructor(algorithm: com.android.apksig.internal.apk.SignatureAlgorithm, signature: number[]);
						}
						export class VerityTreeAndDigest extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtils.VerityTreeAndDigest>;
							public contentDigestAlgorithm: com.android.apksig.internal.apk.ContentDigestAlgorithm;
							public rootHash: number[];
							public tree: number[];
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export class ApkSigningBlockUtilsLite extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSigningBlockUtilsLite>;
						public static encodeAsSequenceOfLengthPrefixedPairsOfIntAndLengthPrefixedBytes(sequence: java.util.List<com.android.apksig.internal.util.Pair<java.lang.Integer,number[]>>): number[];
						public static readLengthPrefixedByteArray(buf: java.nio.ByteBuffer): number[];
						public static getSignaturesToVerify(signatures: java.util.List<any>, minSdkVersion: number, maxSdkVersion: number, onlyRequireJcaSupport: boolean): java.util.List<any>;
						public static toHex(value: number[]): string;
						public static findSignature(apk: com.android.apksig.util.DataSource, zipSections: com.android.apksig.zip.ZipSections, blockId: number): com.android.apksig.internal.apk.SignatureInfo;
						public static getLengthPrefixedSlice(source: java.nio.ByteBuffer): java.nio.ByteBuffer;
						public static getSignaturesToVerify(signatures: java.util.List<any>, minSdkVersion: number, maxSdkVersion: number): java.util.List<any>;
						public static checkByteOrderLittleEndian(buffer: java.nio.ByteBuffer): void;
						public static findApkSignatureSchemeBlock(apkSigningBlock: java.nio.ByteBuffer, blockId: number): java.nio.ByteBuffer;
						public static compareSignatureAlgorithm(alg1: com.android.apksig.internal.apk.SignatureAlgorithm, alg2: com.android.apksig.internal.apk.SignatureAlgorithm): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export class ApkSupportedSignature extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.apk.ApkSupportedSignature>;
						public algorithm: com.android.apksig.internal.apk.SignatureAlgorithm;
						public signature: number[];
						public constructor(algorithm: com.android.apksig.internal.apk.SignatureAlgorithm, signature: number[]);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export class ContentDigestAlgorithm {
						public static class: java.lang.Class<com.android.apksig.internal.apk.ContentDigestAlgorithm>;
						public static CHUNKED_SHA256: com.android.apksig.internal.apk.ContentDigestAlgorithm;
						public static CHUNKED_SHA512: com.android.apksig.internal.apk.ContentDigestAlgorithm;
						public static VERITY_CHUNKED_SHA256: com.android.apksig.internal.apk.ContentDigestAlgorithm;
						public static SHA256: com.android.apksig.internal.apk.ContentDigestAlgorithm;
						public static values(): com.android.apksig.internal.apk.ContentDigestAlgorithm[];
						public static valueOf(name: string): com.android.apksig.internal.apk.ContentDigestAlgorithm;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public getId(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export class NoApkSupportedSignaturesException extends java.lang.Exception {
						public static class: java.lang.Class<com.android.apksig.internal.apk.NoApkSupportedSignaturesException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export class SignatureAlgorithm {
						public static class: java.lang.Class<com.android.apksig.internal.apk.SignatureAlgorithm>;
						public static RSA_PSS_WITH_SHA256: com.android.apksig.internal.apk.SignatureAlgorithm;
						public static RSA_PSS_WITH_SHA512: com.android.apksig.internal.apk.SignatureAlgorithm;
						public static RSA_PKCS1_V1_5_WITH_SHA256: com.android.apksig.internal.apk.SignatureAlgorithm;
						public static RSA_PKCS1_V1_5_WITH_SHA512: com.android.apksig.internal.apk.SignatureAlgorithm;
						public static ECDSA_WITH_SHA256: com.android.apksig.internal.apk.SignatureAlgorithm;
						public static ECDSA_WITH_SHA512: com.android.apksig.internal.apk.SignatureAlgorithm;
						public static DSA_WITH_SHA256: com.android.apksig.internal.apk.SignatureAlgorithm;
						public static DETDSA_WITH_SHA256: com.android.apksig.internal.apk.SignatureAlgorithm;
						public static VERITY_RSA_PKCS1_V1_5_WITH_SHA256: com.android.apksig.internal.apk.SignatureAlgorithm;
						public static VERITY_ECDSA_WITH_SHA256: com.android.apksig.internal.apk.SignatureAlgorithm;
						public static VERITY_DSA_WITH_SHA256: com.android.apksig.internal.apk.SignatureAlgorithm;
						public getMinSdkVersion(): number;
						public getJcaSigAlgMinSdkVersion(): number;
						public getContentDigestAlgorithm(): com.android.apksig.internal.apk.ContentDigestAlgorithm;
						public static values(): com.android.apksig.internal.apk.SignatureAlgorithm[];
						public getJcaKeyAlgorithm(): string;
						public getJcaSignatureAlgorithmAndParams(): com.android.apksig.internal.util.Pair<string,any>;
						public static findById(id: number): com.android.apksig.internal.apk.SignatureAlgorithm;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): com.android.apksig.internal.apk.SignatureAlgorithm;
						public getId(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export class SignatureInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.apk.SignatureInfo>;
						public signatureBlock: java.nio.ByteBuffer;
						public apkSigningBlockOffset: number;
						public centralDirOffset: number;
						public eocdOffset: number;
						public eocd: java.nio.ByteBuffer;
						public constructor(signatureBlock: java.nio.ByteBuffer, apkSigningBlockOffset: number, param2: number, centralDirOffset: number, param4: java.nio.ByteBuffer);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export class SignatureNotFoundException extends java.lang.Exception {
						public static class: java.lang.Class<com.android.apksig.internal.apk.SignatureNotFoundException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module stamp {
						export class SourceStampCertificateLineage extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.stamp.SourceStampCertificateLineage>;
							public constructor();
							public static readSigningCertificateLineage(inputBytes: java.nio.ByteBuffer): java.util.List<com.android.apksig.internal.apk.stamp.SourceStampCertificateLineage.SigningCertificateNode>;
						}
						export module SourceStampCertificateLineage {
							export class SigningCertificateNode extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.stamp.SourceStampCertificateLineage.SigningCertificateNode>;
								public signingCert: java.security.cert.X509Certificate;
								public parentSigAlgorithm: com.android.apksig.internal.apk.SignatureAlgorithm;
								public sigAlgorithm: com.android.apksig.internal.apk.SignatureAlgorithm;
								public signature: number[];
								public flags: number;
								public equals(obj: any): boolean;
								public constructor(signingCert: java.security.cert.X509Certificate, parentSigAlgorithm: com.android.apksig.internal.apk.SignatureAlgorithm, sigAlgorithm: com.android.apksig.internal.apk.SignatureAlgorithm, signature: number[], flags: number);
								public equals(o: any): boolean;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module stamp {
						export class SourceStampConstants extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.stamp.SourceStampConstants>;
							public static V1_SOURCE_STAMP_BLOCK_ID: number;
							public static V2_SOURCE_STAMP_BLOCK_ID: number;
							public static SOURCE_STAMP_CERTIFICATE_HASH_ZIP_ENTRY_NAME: string;
							public static PROOF_OF_ROTATION_ATTR_ID: number;
							public static STAMP_TIME_ATTR_ID: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module stamp {
						export class SourceStampVerifier extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.stamp.SourceStampVerifier>;
							public static verifyV1SourceStamp(sourceStampBlockData: java.nio.ByteBuffer, certFactory: java.security.cert.CertificateFactory, result: com.android.apksig.internal.apk.ApkSignerInfo, apkDigest: number[], sourceStampCertificateDigest: number[], minSdkVersion: number, maxSdkVersion: number): void;
							public static verifyV2SourceStamp(sourceStampBlockData: java.nio.ByteBuffer, certFactory: java.security.cert.CertificateFactory, result: com.android.apksig.internal.apk.ApkSignerInfo, signatureSchemeApkDigests: java.util.Map<java.lang.Integer,number[]>, sourceStampCertificateDigest: number[], minSdkVersion: number, maxSdkVersion: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module stamp {
						export abstract class V1SourceStampSigner extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.stamp.V1SourceStampSigner>;
							public static V1_SOURCE_STAMP_BLOCK_ID: number;
							public static generateSourceStampBlock(sourceStampSignerConfig: com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig, digestInfo: java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>): com.android.apksig.internal.util.Pair<number[],java.lang.Integer>;
						}
						export module V1SourceStampSigner {
							export class SourceStampBlock extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.stamp.V1SourceStampSigner.SourceStampBlock>;
								public stampCertificate: number[];
								public signedDigests: java.util.List<com.android.apksig.internal.util.Pair<java.lang.Integer,number[]>>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module stamp {
						export abstract class V1SourceStampVerifier extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.stamp.V1SourceStampVerifier>;
							public static verify(apk: com.android.apksig.util.DataSource, zipSections: com.android.apksig.apk.ApkUtils.ZipSections, sourceStampCertificateDigest: number[], apkContentDigests: java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>, minSdkVersion: number, maxSdkVersion: number): com.android.apksig.internal.apk.ApkSigningBlockUtils.Result;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module stamp {
						export class V2SourceStampSigner extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.stamp.V2SourceStampSigner>;
							public static V2_SOURCE_STAMP_BLOCK_ID: number;
							public static generateSourceStampBlock(sourceStampSignerConfig: com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig, signatureSchemeDigestInfos: java.util.Map<java.lang.Integer,java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>>): com.android.apksig.internal.util.Pair<number[],java.lang.Integer>;
							public generateSourceStampBlock(): com.android.apksig.internal.util.Pair<number[],java.lang.Integer>;
						}
						export module V2SourceStampSigner {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.stamp.V2SourceStampSigner.Builder>;
								public constructor(sourceStampSignerConfig: com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig, signatureSchemeDigestInfos: java.util.Map<java.lang.Integer,java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>>);
								public setSourceStampTimestampEnabled(value: boolean): com.android.apksig.internal.apk.stamp.V2SourceStampSigner.Builder;
								public build(): com.android.apksig.internal.apk.stamp.V2SourceStampSigner;
							}
							export class SourceStampBlock extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.stamp.V2SourceStampSigner.SourceStampBlock>;
								public stampCertificate: number[];
								public signedDigests: java.util.List<com.android.apksig.internal.util.Pair<java.lang.Integer,number[]>>;
								public stampAttributes: number[];
								public signedStampAttributes: java.util.List<com.android.apksig.internal.util.Pair<java.lang.Integer,number[]>>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module stamp {
						export abstract class V2SourceStampVerifier extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.stamp.V2SourceStampVerifier>;
							public static verify(apk: com.android.apksig.util.DataSource, zipSections: com.android.apksig.zip.ZipSections, sourceStampCertificateDigest: number[], signatureSchemeApkContentDigests: java.util.Map<java.lang.Integer,java.util.Map<com.android.apksig.internal.apk.ContentDigestAlgorithm,number[]>>, minSdkVersion: number, maxSdkVersion: number): com.android.apksig.internal.apk.ApkSigResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v1 {
						export class DigestAlgorithm {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v1.DigestAlgorithm>;
							public static SHA1: com.android.apksig.internal.apk.v1.DigestAlgorithm;
							public static SHA256: com.android.apksig.internal.apk.v1.DigestAlgorithm;
							public static BY_STRENGTH_COMPARATOR: java.util.Comparator<com.android.apksig.internal.apk.v1.DigestAlgorithm>;
							public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
							public static values(): com.android.apksig.internal.apk.v1.DigestAlgorithm[];
							public static valueOf(name: string): com.android.apksig.internal.apk.v1.DigestAlgorithm;
						}
						export module DigestAlgorithm {
							export class StrengthComparator extends java.util.Comparator<com.android.apksig.internal.apk.v1.DigestAlgorithm> {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v1.DigestAlgorithm.StrengthComparator>;
								public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
								public static reverseOrder(): java.util.Comparator<any>;
								public static naturalOrder(): java.util.Comparator<any>;
								public equals(param0: any): boolean;
								public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
								public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
								public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
								public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
								public equals(obj: any): boolean;
								public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
								public compare(a1: com.android.apksig.internal.apk.v1.DigestAlgorithm, a2: com.android.apksig.internal.apk.v1.DigestAlgorithm): number;
								public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
								public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
								public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
								public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
								public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
								public compare(param0: any, param1: any): number;
								public reversed(): java.util.Comparator<any>;
								public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v1 {
						export class V1SchemeConstants extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeConstants>;
							public static MANIFEST_ENTRY_NAME: string;
							public static SF_ATTRIBUTE_NAME_ANDROID_APK_SIGNED_NAME_STR: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v1 {
						export abstract class V1SchemeSigner extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeSigner>;
							public static MANIFEST_ENTRY_NAME: string;
							public static signManifest(signerConfigs: java.util.List<com.android.apksig.internal.apk.v1.V1SchemeSigner.SignerConfig>, digestAlgorithm: com.android.apksig.internal.apk.v1.DigestAlgorithm, apkSigningSchemeIds: java.util.List<java.lang.Integer>, createdBy: string, manifest: com.android.apksig.internal.apk.v1.V1SchemeSigner.OutputManifestFile): java.util.List<com.android.apksig.internal.util.Pair<string,number[]>>;
							public static getSuggestedSignatureDigestAlgorithm(signingKey: java.security.PublicKey, minSdkVersion: number): com.android.apksig.internal.apk.v1.DigestAlgorithm;
							public static getOutputEntryNames(signerConfigs: java.util.List<com.android.apksig.internal.apk.v1.V1SchemeSigner.SignerConfig>): java.util.Set<string>;
							public static getSafeSignerName(name: string): string;
							public static isJarEntryDigestNeededInManifest(entryName: string): boolean;
							public static generateManifestFile(jarEntryDigestAlgorithm: com.android.apksig.internal.apk.v1.DigestAlgorithm, jarEntryDigests: java.util.Map<string,number[]>, sourceManifestBytes: number[]): com.android.apksig.internal.apk.v1.V1SchemeSigner.OutputManifestFile;
							public static sign(signerConfigs: java.util.List<com.android.apksig.internal.apk.v1.V1SchemeSigner.SignerConfig>, jarEntryDigestAlgorithm: com.android.apksig.internal.apk.v1.DigestAlgorithm, jarEntryDigests: java.util.Map<string,number[]>, apkSigningSchemeIds: java.util.List<java.lang.Integer>, sourceManifestBytes: number[], createdBy: string): java.util.List<com.android.apksig.internal.util.Pair<string,number[]>>;
							public static getJcaMessageDigestAlgorithm(digestAlgorithm: com.android.apksig.internal.apk.v1.DigestAlgorithm): string;
						}
						export module V1SchemeSigner {
							export class OutputManifestFile extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeSigner.OutputManifestFile>;
								public contents: number[];
								public individualSectionsContents: java.util.SortedMap<string,number[]>;
								public mainSectionAttributes: java.util.jar.Attributes;
								public constructor();
							}
							export class SignerConfig extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeSigner.SignerConfig>;
								public name: string;
								public privateKey: java.security.PrivateKey;
								public keyConfig: com.android.apksig.KeyConfig;
								public certificates: java.util.List<java.security.cert.X509Certificate>;
								public signatureDigestAlgorithm: com.android.apksig.internal.apk.v1.DigestAlgorithm;
								public deterministicDsaSigning: boolean;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v1 {
						export abstract class V1SchemeVerifier extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeVerifier>;
							public static parseManifest(manifestBytes: number[], cdEntryNames: java.util.Set<string>, result: com.android.apksig.internal.apk.v1.V1SchemeVerifier.Result): com.android.apksig.internal.util.Pair<com.android.apksig.internal.jar.ManifestParser.Section,java.util.Map<string,com.android.apksig.internal.jar.ManifestParser.Section>>;
							public static verify(apk: com.android.apksig.util.DataSource, apkSections: com.android.apksig.apk.ApkUtils.ZipSections, supportedApkSigSchemeNames: java.util.Map<java.lang.Integer,string>, foundApkSigSchemeIds: java.util.Set<java.lang.Integer>, minSdkVersion: number, maxSdkVersion: number): com.android.apksig.internal.apk.v1.V1SchemeVerifier.Result;
							public static parseZipCentralDirectory(apk: com.android.apksig.util.DataSource, apkSections: com.android.apksig.apk.ApkUtils.ZipSections): java.util.List<com.android.apksig.internal.zip.CentralDirectoryRecord>;
							public static getDigestsToVerify(section: com.android.apksig.internal.jar.ManifestParser.Section, digestAttrSuffix: string, minSdkVersion: number, maxSdkVersion: number): java.util.Collection<com.android.apksig.internal.apk.v1.V1SchemeVerifier.NamedDigest>;
							public static getMinSdkVersionFromWhichSupportedInManifestOrSignatureFile(jcaAlgorithmName: string): number;
						}
						export module V1SchemeVerifier {
							export class NamedDigest extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeVerifier.NamedDigest>;
								public jcaDigestAlgorithm: string;
								public digest: number[];
							}
							export class ObjectIdentifierChoice extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeVerifier.ObjectIdentifierChoice>;
								public value: string;
								public constructor();
							}
							export class OctetStringChoice extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeVerifier.OctetStringChoice>;
								public value: number[];
								public constructor();
							}
							export class Result extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeVerifier.Result>;
								public verified: boolean;
								public signers: java.util.List<com.android.apksig.internal.apk.v1.V1SchemeVerifier.Result.SignerInfo>;
								public ignoredSigners: java.util.List<com.android.apksig.internal.apk.v1.V1SchemeVerifier.Result.SignerInfo>;
								public getErrors(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
								public constructor();
								public getWarnings(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
							}
							export module Result {
								export class SignerInfo extends java.lang.Object {
									public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeVerifier.Result.SignerInfo>;
									public name: string;
									public signatureFileName: string;
									public signatureBlockFileName: string;
									public certChain: java.util.List<java.security.cert.X509Certificate>;
									public getErrors(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
									public getWarnings(): java.util.List<com.android.apksig.ApkVerifier.IssueWithParams>;
								}
							}
							export class SignedAttributes extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeVerifier.SignedAttributes>;
								public getSingleObjectIdentifierValue(attrOid: string): string;
								public constructor(attrs: java.util.Collection<com.android.apksig.internal.pkcs7.Attribute>);
								public getSingleOctetStringValue(attrOid: string): number[];
							}
							export class Signer extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeVerifier.Signer>;
								public getSignatureFileEntryName(): string;
								public verifySigBlockAgainstSigFile(apk: com.android.apksig.util.DataSource, cdStartOffset: number, param2: number, minSdkVersion: number): void;
								public getName(): string;
								public verifySigFileAgainstManifest(manifestBytes: number[], manifestMainSection: com.android.apksig.internal.jar.ManifestParser.Section, entryNameToManifestSection: java.util.Map<string,com.android.apksig.internal.jar.ManifestParser.Section>, supportedApkSigSchemeNames: java.util.Map<java.lang.Integer,string>, foundApkSigSchemeIds: java.util.Set<java.lang.Integer>, minSdkVersion: number, maxSdkVersion: number): void;
								public static getCertificateChain(certs: java.util.List<java.security.cert.X509Certificate>, leaf: java.security.cert.X509Certificate): java.util.List<java.security.cert.X509Certificate>;
								public getSignatureBlockEntryName(): string;
								public isIgnored(): boolean;
								public getSigFileEntryNames(): java.util.Set<string>;
								public getResult(): com.android.apksig.internal.apk.v1.V1SchemeVerifier.Result.SignerInfo;
							}
							export class Signers extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v1.V1SchemeVerifier.Signers>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v2 {
						export class V2SchemeConstants extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v2.V2SchemeConstants>;
							public static APK_SIGNATURE_SCHEME_V2_BLOCK_ID: number;
							public static STRIPPING_PROTECTION_ATTR_ID: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v2 {
						export abstract class V2SchemeSigner extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v2.V2SchemeSigner>;
							public static APK_SIGNATURE_SCHEME_V2_BLOCK_ID: number;
							public static generateApkSignatureSchemeV2Block(executor: com.android.apksig.util.RunnablesExecutor, beforeCentralDir: com.android.apksig.util.DataSource, centralDir: com.android.apksig.util.DataSource, eocd: com.android.apksig.util.DataSource, signerConfigs: java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig>, v3SigningEnabled: boolean, preservedV2SignerBlocks: java.util.List<number[]>): com.android.apksig.internal.apk.ApkSigningBlockUtils.SigningSchemeBlockAndDigests;
							public static getSuggestedSignatureAlgorithms(signingKey: java.security.PublicKey, minSdkVersion: number, verityEnabled: boolean, deterministicDsaSigning: boolean): java.util.List<com.android.apksig.internal.apk.SignatureAlgorithm>;
							public static generateApkSignatureSchemeV2Block(executor: com.android.apksig.util.RunnablesExecutor, beforeCentralDir: com.android.apksig.util.DataSource, centralDir: com.android.apksig.util.DataSource, eocd: com.android.apksig.util.DataSource, signerConfigs: java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig>, v3SigningEnabled: boolean): com.android.apksig.internal.apk.ApkSigningBlockUtils.SigningSchemeBlockAndDigests;
						}
						export module V2SchemeSigner {
							export class V2SignatureSchemeBlock extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v2.V2SchemeSigner.V2SignatureSchemeBlock>;
							}
							export module V2SignatureSchemeBlock {
								export class SignedData extends java.lang.Object {
									public static class: java.lang.Class<com.android.apksig.internal.apk.v2.V2SchemeSigner.V2SignatureSchemeBlock.SignedData>;
									public digests: java.util.List<com.android.apksig.internal.util.Pair<java.lang.Integer,number[]>>;
									public certificates: java.util.List<number[]>;
									public additionalAttributes: number[];
								}
								export class Signer extends java.lang.Object {
									public static class: java.lang.Class<com.android.apksig.internal.apk.v2.V2SchemeSigner.V2SignatureSchemeBlock.Signer>;
									public signedData: number[];
									public signatures: java.util.List<com.android.apksig.internal.util.Pair<java.lang.Integer,number[]>>;
									public publicKey: number[];
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v2 {
						export abstract class V2SchemeVerifier extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v2.V2SchemeVerifier>;
							public static parseSigners(apkSignatureSchemeV2Block: java.nio.ByteBuffer, contentDigestsToVerify: java.util.Set<com.android.apksig.internal.apk.ContentDigestAlgorithm>, supportedApkSigSchemeNames: java.util.Map<java.lang.Integer,string>, foundApkSigSchemeIds: java.util.Set<java.lang.Integer>, minSdkVersion: number, maxSdkVersion: number, result: com.android.apksig.internal.apk.ApkSigningBlockUtils.Result): void;
							public static verify(executor: com.android.apksig.util.RunnablesExecutor, apk: com.android.apksig.util.DataSource, zipSections: com.android.apksig.apk.ApkUtils.ZipSections, supportedApkSigSchemeNames: java.util.Map<java.lang.Integer,string>, foundSigSchemeIds: java.util.Set<java.lang.Integer>, minSdkVersion: number, maxSdkVersion: number): com.android.apksig.internal.apk.ApkSigningBlockUtils.Result;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v3 {
						export class V3SchemeConstants extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v3.V3SchemeConstants>;
							public static APK_SIGNATURE_SCHEME_V3_BLOCK_ID: number;
							public static APK_SIGNATURE_SCHEME_V31_BLOCK_ID: number;
							public static PROOF_OF_ROTATION_ATTR_ID: number;
							public static MIN_SDK_WITH_V3_SUPPORT: number;
							public static MIN_SDK_WITH_V31_SUPPORT: number;
							public static DEFAULT_ROTATION_MIN_SDK_VERSION: number;
							public static ROTATION_MIN_SDK_VERSION_ATTR_ID: number;
							public static ROTATION_ON_DEV_RELEASE_ATTR_ID: number;
							public static DEV_RELEASE: number;
							public static PROD_RELEASE: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v3 {
						export class V3SchemeSigner extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v3.V3SchemeSigner>;
							public static APK_SIGNATURE_SCHEME_V3_BLOCK_ID: number;
							public static PROOF_OF_ROTATION_ATTR_ID: number;
							public generateApkSignatureSchemeV3BlockAndDigests(): com.android.apksig.internal.apk.ApkSigningBlockUtils.SigningSchemeBlockAndDigests;
							public static generateV3SignerAttribute(signingCertificateLineage: com.android.apksig.SigningCertificateLineage): number[];
							public static getSuggestedSignatureAlgorithms(signingKey: java.security.PublicKey, minSdkVersion: number, verityEnabled: boolean, deterministicDsaSigning: boolean): java.util.List<com.android.apksig.internal.apk.SignatureAlgorithm>;
							public static generateApkSignatureSchemeV3Block(executor: com.android.apksig.util.RunnablesExecutor, beforeCentralDir: com.android.apksig.util.DataSource, centralDir: com.android.apksig.util.DataSource, eocd: com.android.apksig.util.DataSource, signerConfigs: java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig>): com.android.apksig.internal.apk.ApkSigningBlockUtils.SigningSchemeBlockAndDigests;
						}
						export module V3SchemeSigner {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v3.V3SchemeSigner.Builder>;
								public setMinSdkVersionForV31(minSdkVersion: number): com.android.apksig.internal.apk.v3.V3SchemeSigner.Builder;
								public setRotationTargetsDevRelease(enabled: boolean): com.android.apksig.internal.apk.v3.V3SchemeSigner.Builder;
								public build(): com.android.apksig.internal.apk.v3.V3SchemeSigner;
								public setRotationMinSdkVersion(rotationMinSdkVersion: number): com.android.apksig.internal.apk.v3.V3SchemeSigner.Builder;
								public setBlockId(blockId: number): com.android.apksig.internal.apk.v3.V3SchemeSigner.Builder;
								public constructor(beforeCentralDir: com.android.apksig.util.DataSource, centralDir: com.android.apksig.util.DataSource, eocd: com.android.apksig.util.DataSource, signerConfigs: java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig>);
								public setRunnablesExecutor(executor: com.android.apksig.util.RunnablesExecutor): com.android.apksig.internal.apk.v3.V3SchemeSigner.Builder;
							}
							export class V3SignatureSchemeBlock extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v3.V3SchemeSigner.V3SignatureSchemeBlock>;
							}
							export module V3SignatureSchemeBlock {
								export class SignedData extends java.lang.Object {
									public static class: java.lang.Class<com.android.apksig.internal.apk.v3.V3SchemeSigner.V3SignatureSchemeBlock.SignedData>;
									public digests: java.util.List<com.android.apksig.internal.util.Pair<java.lang.Integer,number[]>>;
									public certificates: java.util.List<number[]>;
									public minSdkVersion: number;
									public maxSdkVersion: number;
									public additionalAttributes: number[];
								}
								export class Signer extends java.lang.Object {
									public static class: java.lang.Class<com.android.apksig.internal.apk.v3.V3SchemeSigner.V3SignatureSchemeBlock.Signer>;
									public signedData: number[];
									public minSdkVersion: number;
									public maxSdkVersion: number;
									public signatures: java.util.List<com.android.apksig.internal.util.Pair<java.lang.Integer,number[]>>;
									public publicKey: number[];
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v3 {
						export class V3SchemeVerifier extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v3.V3SchemeVerifier>;
							public static verify(executor: com.android.apksig.util.RunnablesExecutor, apk: com.android.apksig.util.DataSource, zipSections: com.android.apksig.apk.ApkUtils.ZipSections, minSdkVersion: number, maxSdkVersion: number): com.android.apksig.internal.apk.ApkSigningBlockUtils.Result;
							public verify(): com.android.apksig.internal.apk.ApkSigningBlockUtils.Result;
							public static parseSigners(apkSignatureSchemeV3Block: java.nio.ByteBuffer, contentDigestsToVerify: java.util.Set<com.android.apksig.internal.apk.ContentDigestAlgorithm>, result: com.android.apksig.internal.apk.ApkSigningBlockUtils.Result): void;
							public static signerTargetsDevRelease(signerInfo: com.android.apksig.internal.apk.ApkSigningBlockUtils.Result.SignerInfo): boolean;
							public parseSigners(): com.android.apksig.internal.apk.ApkSigningBlockUtils.Result;
						}
						export module V3SchemeVerifier {
							export class Builder extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v3.V3SchemeVerifier.Builder>;
								public setFullVerification(fullVerification: boolean): com.android.apksig.internal.apk.v3.V3SchemeVerifier.Builder;
								public setRunnablesExecutor(executor: com.android.apksig.util.RunnablesExecutor): com.android.apksig.internal.apk.v3.V3SchemeVerifier.Builder;
								public setResult(result: com.android.apksig.internal.apk.ApkSigningBlockUtils.Result): com.android.apksig.internal.apk.v3.V3SchemeVerifier.Builder;
								public build(): com.android.apksig.internal.apk.v3.V3SchemeVerifier;
								public setBlockId(blockId: number): com.android.apksig.internal.apk.v3.V3SchemeVerifier.Builder;
								public setRotationMinSdkVersion(rotationMinSdkVersion: number): com.android.apksig.internal.apk.v3.V3SchemeVerifier.Builder;
								public setContentDigestsToVerify(contentDigestsToVerify: java.util.Set<com.android.apksig.internal.apk.ContentDigestAlgorithm>): com.android.apksig.internal.apk.v3.V3SchemeVerifier.Builder;
								public constructor(apk: com.android.apksig.util.DataSource, zipSections: com.android.apksig.apk.ApkUtils.ZipSections, minSdkVersion: number, maxSdkVersion: number);
								public constructor(apkSignatureSchemeV3Block: java.nio.ByteBuffer);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v3 {
						export class V3SigningCertificateLineage extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v3.V3SigningCertificateLineage>;
							public constructor();
							public static encodeSigningCertificateNode(node: com.android.apksig.internal.apk.v3.V3SigningCertificateLineage.SigningCertificateNode): number[];
							public static encodeSigningCertificateLineage(signingCertificateLineage: java.util.List<com.android.apksig.internal.apk.v3.V3SigningCertificateLineage.SigningCertificateNode>): number[];
							public static readSigningCertificateLineage(inputBytes: java.nio.ByteBuffer): java.util.List<com.android.apksig.internal.apk.v3.V3SigningCertificateLineage.SigningCertificateNode>;
							public static encodeSignedData(certificate: java.security.cert.X509Certificate, flags: number): number[];
						}
						export module V3SigningCertificateLineage {
							export class SigningCertificateNode extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v3.V3SigningCertificateLineage.SigningCertificateNode>;
								public signingCert: java.security.cert.X509Certificate;
								public parentSigAlgorithm: com.android.apksig.internal.apk.SignatureAlgorithm;
								public sigAlgorithm: com.android.apksig.internal.apk.SignatureAlgorithm;
								public signature: number[];
								public flags: number;
								public equals(obj: any): boolean;
								public constructor(signingCert: java.security.cert.X509Certificate, parentSigAlgorithm: com.android.apksig.internal.apk.SignatureAlgorithm, sigAlgorithm: com.android.apksig.internal.apk.SignatureAlgorithm, signature: number[], flags: number);
								public equals(o: any): boolean;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v4 {
						export abstract class V4SchemeSigner extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v4.V4SchemeSigner>;
							public static generateV4Signature(apkContent: com.android.apksig.util.DataSource, signerConfig: com.android.apksig.internal.apk.v4.V4SchemeSigner.SignerConfig, outputFile: java.io.File): void;
							public static getSuggestedSignatureAlgorithms(signingKey: java.security.PublicKey, minSdkVersion: number, apkSigningBlockPaddingSupported: boolean, deterministicDsaSigning: boolean): java.util.List<com.android.apksig.internal.apk.SignatureAlgorithm>;
							public static generateV4Signature(apkContent: com.android.apksig.util.DataSource, signerConfig: com.android.apksig.internal.apk.v4.V4SchemeSigner.SignerConfig): com.android.apksig.internal.util.Pair<com.android.apksig.internal.apk.v4.V4Signature,number[]>;
							public static digestAlgorithmSortingOrder(contentDigestAlgorithm: com.android.apksig.internal.apk.ContentDigestAlgorithm): number;
						}
						export module V4SchemeSigner {
							export class SignerConfig extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v4.V4SchemeSigner.SignerConfig>;
								public v4Config: com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig;
								public v41Config: com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig;
								public constructor(v4Configs: java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig>, v41Configs: java.util.List<com.android.apksig.internal.apk.ApkSigningBlockUtils.SignerConfig>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v4 {
						export abstract class V4SchemeVerifier extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v4.V4SchemeVerifier>;
							public static verify(apk: com.android.apksig.util.DataSource, v4SignatureFile: java.io.File): com.android.apksig.internal.apk.ApkSigningBlockUtils.Result;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module apk {
					export module v4 {
						export class V4Signature extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.apk.v4.V4Signature>;
							public static CURRENT_VERSION: number;
							public static HASHING_ALGORITHM_SHA256: number;
							public static LOG2_BLOCK_SIZE_4096_BYTES: number;
							public static MAX_SIGNING_INFOS_SIZE: number;
							public version: number;
							public hashingInfo: number[];
							public signingInfos: number[];
							public writeTo(stream: java.io.OutputStream): void;
						}
						export module V4Signature {
							export class HashingInfo extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v4.V4Signature.HashingInfo>;
								public hashAlgorithm: number;
								public log2BlockSize: number;
								public salt: number[];
								public rawRootHash: number[];
							}
							export class SigningInfo extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v4.V4Signature.SigningInfo>;
								public apkDigest: number[];
								public certificate: number[];
								public additionalData: number[];
								public publicKey: number[];
								public signatureAlgorithmId: number;
								public signature: number[];
							}
							export class SigningInfoBlock extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v4.V4Signature.SigningInfoBlock>;
								public blockId: number;
								public signingInfo: number[];
								public constructor(blockId: number, signingInfo: number[]);
							}
							export class SigningInfos extends java.lang.Object {
								public static class: java.lang.Class<com.android.apksig.internal.apk.v4.V4Signature.SigningInfos>;
								public signingInfo: com.android.apksig.internal.apk.v4.V4Signature.SigningInfo;
								public signingInfoBlocks: com.android.apksig.internal.apk.v4.V4Signature.SigningInfoBlock[];
								public constructor(signingInfo: com.android.apksig.internal.apk.v4.V4Signature.SigningInfo);
								public constructor(signingInfo: com.android.apksig.internal.apk.v4.V4Signature.SigningInfo, ...signingInfoBlocks: com.android.apksig.internal.apk.v4.V4Signature.SigningInfoBlock[]);
								public static fromByteArray(bytes: number[]): com.android.apksig.internal.apk.v4.V4Signature.SigningInfos;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export class Asn1BerParser extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1BerParser>;
						public static parse(encoded: java.nio.ByteBuffer, containerClass: java.lang.Class<any>): any;
						public static parseImplicitSetOf(encoded: java.nio.ByteBuffer, elementClass: java.lang.Class<any>): java.util.List<any>;
					}
					export module Asn1BerParser {
						export class AnnotatedField extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1BerParser.AnnotatedField>;
							public setValueFrom(dataValue: com.android.apksig.internal.asn1.ber.BerDataValue, obj: any): void;
							public getAnnotation(): com.android.apksig.internal.asn1.Asn1Field;
							public getBerTagNumber(): number;
							public getField(): java.lang.reflect.Field;
							public isOptional(): boolean;
							public constructor(field: java.lang.reflect.Field, annotation: com.android.apksig.internal.asn1.Asn1Field);
							public getBerTagClass(): number;
						}
						export class Asn1UnexpectedTagException extends com.android.apksig.internal.asn1.Asn1DecodingException {
							public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1BerParser.Asn1UnexpectedTagException>;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(message: string);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						}
						export class BerToJavaConverter extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1BerParser.BerToJavaConverter>;
							public static setFieldValue(obj: any, field: java.lang.reflect.Field, type: com.android.apksig.internal.asn1.Asn1Type, dataValue: com.android.apksig.internal.asn1.ber.BerDataValue): void;
							public static convert(sourceType: com.android.apksig.internal.asn1.Asn1Type, dataValue: com.android.apksig.internal.asn1.ber.BerDataValue, targetType: java.lang.Class<any>): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export class Asn1Class extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1Class>;
						/**
						 * Constructs a new instance of the com.android.apksig.internal.asn1.Asn1Class interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							type(): com.android.apksig.internal.asn1.Asn1Type;
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public type(): com.android.apksig.internal.asn1.Asn1Type;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export class Asn1DecodingException extends java.lang.Exception {
						public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1DecodingException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export class Asn1DerEncoder extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1DerEncoder>;
						public static ASN1_DER_NULL: com.android.apksig.internal.asn1.Asn1OpaqueObject;
						public static encode(container: any): number[];
					}
					export module Asn1DerEncoder {
						export class AnnotatedField extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1DerEncoder.AnnotatedField>;
							public getAnnotation(): com.android.apksig.internal.asn1.Asn1Field;
							public getField(): java.lang.reflect.Field;
							public toDer(): number[];
							public constructor(obj: any, field: java.lang.reflect.Field, annotation: com.android.apksig.internal.asn1.Asn1Field);
						}
						export class ByteArrayLexicographicComparator extends java.util.Comparator<number[]> {
							public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1DerEncoder.ByteArrayLexicographicComparator>;
							public compare(param0: any, param1: any): number;
							public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public compare(arr1: number[], arr2: number[]): number;
							public equals(obj: any): boolean;
							public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static naturalOrder(): java.util.Comparator<any>;
							public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public reversed(): java.util.Comparator<any>;
							public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public equals(param0: any): boolean;
							public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static reverseOrder(): java.util.Comparator<any>;
						}
						export class JavaToDerConverter extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1DerEncoder.JavaToDerConverter>;
							public static toDer(source: any, targetType: com.android.apksig.internal.asn1.Asn1Type, targetElementType: com.android.apksig.internal.asn1.Asn1Type): number[];
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export class Asn1EncodingException extends java.lang.Exception {
						public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1EncodingException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export class Asn1Field extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1Field>;
						/**
						 * Constructs a new instance of the com.android.apksig.internal.asn1.Asn1Field interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							index(): number;
							cls(): com.android.apksig.internal.asn1.Asn1TagClass;
							type(): com.android.apksig.internal.asn1.Asn1Type;
							tagging(): com.android.apksig.internal.asn1.Asn1Tagging;
							tagNumber(): number;
							optional(): boolean;
							elementType(): com.android.apksig.internal.asn1.Asn1Type;
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public cls(): com.android.apksig.internal.asn1.Asn1TagClass;
						public index(): number;
						public equals(obj: any): boolean;
						public tagging(): com.android.apksig.internal.asn1.Asn1Tagging;
						public tagNumber(): number;
						public elementType(): com.android.apksig.internal.asn1.Asn1Type;
						public type(): com.android.apksig.internal.asn1.Asn1Type;
						public optional(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export class Asn1OpaqueObject extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1OpaqueObject>;
						public constructor(encoded: number[]);
						public constructor(encoded: java.nio.ByteBuffer);
						public getEncoded(): java.nio.ByteBuffer;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export class Asn1TagClass {
						public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1TagClass>;
						public static UNIVERSAL: com.android.apksig.internal.asn1.Asn1TagClass;
						public static APPLICATION: com.android.apksig.internal.asn1.Asn1TagClass;
						public static CONTEXT_SPECIFIC: com.android.apksig.internal.asn1.Asn1TagClass;
						public static PRIVATE: com.android.apksig.internal.asn1.Asn1TagClass;
						public static AUTOMATIC: com.android.apksig.internal.asn1.Asn1TagClass;
						public static values(): com.android.apksig.internal.asn1.Asn1TagClass[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): com.android.apksig.internal.asn1.Asn1TagClass;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export class Asn1Tagging {
						public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1Tagging>;
						public static NORMAL: com.android.apksig.internal.asn1.Asn1Tagging;
						public static EXPLICIT: com.android.apksig.internal.asn1.Asn1Tagging;
						public static IMPLICIT: com.android.apksig.internal.asn1.Asn1Tagging;
						public static values(): com.android.apksig.internal.asn1.Asn1Tagging[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): com.android.apksig.internal.asn1.Asn1Tagging;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export class Asn1Type {
						public static class: java.lang.Class<com.android.apksig.internal.asn1.Asn1Type>;
						public static ANY: com.android.apksig.internal.asn1.Asn1Type;
						public static CHOICE: com.android.apksig.internal.asn1.Asn1Type;
						public static INTEGER: com.android.apksig.internal.asn1.Asn1Type;
						public static OBJECT_IDENTIFIER: com.android.apksig.internal.asn1.Asn1Type;
						public static OCTET_STRING: com.android.apksig.internal.asn1.Asn1Type;
						public static SEQUENCE: com.android.apksig.internal.asn1.Asn1Type;
						public static SEQUENCE_OF: com.android.apksig.internal.asn1.Asn1Type;
						public static SET_OF: com.android.apksig.internal.asn1.Asn1Type;
						public static BIT_STRING: com.android.apksig.internal.asn1.Asn1Type;
						public static UTC_TIME: com.android.apksig.internal.asn1.Asn1Type;
						public static GENERALIZED_TIME: com.android.apksig.internal.asn1.Asn1Type;
						public static BOOLEAN: com.android.apksig.internal.asn1.Asn1Type;
						public static UNENCODED_CONTAINER: com.android.apksig.internal.asn1.Asn1Type;
						public static values(): com.android.apksig.internal.asn1.Asn1Type[];
						public static valueOf(name: string): com.android.apksig.internal.asn1.Asn1Type;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export module ber {
						export class BerDataValue extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.asn1.ber.BerDataValue>;
							public getEncoded(): java.nio.ByteBuffer;
							public getTagNumber(): number;
							public contentsReader(): com.android.apksig.internal.asn1.ber.BerDataValueReader;
							public isConstructed(): boolean;
							public dataValueReader(): com.android.apksig.internal.asn1.ber.BerDataValueReader;
							public getEncodedContents(): java.nio.ByteBuffer;
							public getTagClass(): number;
						}
						export module BerDataValue {
							export class ParsedValueReader extends java.lang.Object implements com.android.apksig.internal.asn1.ber.BerDataValueReader {
								public static class: java.lang.Class<com.android.apksig.internal.asn1.ber.BerDataValue.ParsedValueReader>;
								public constructor(value: com.android.apksig.internal.asn1.ber.BerDataValue);
								public readDataValue(): com.android.apksig.internal.asn1.ber.BerDataValue;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export module ber {
						export class BerDataValueFormatException extends java.lang.Exception {
							public static class: java.lang.Class<com.android.apksig.internal.asn1.ber.BerDataValueFormatException>;
							public constructor();
							public constructor(message: string, cause: java.lang.Throwable);
							public constructor(cause: java.lang.Throwable);
							public constructor(message: string);
							public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export module ber {
						export class BerDataValueReader extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.asn1.ber.BerDataValueReader>;
							/**
							 * Constructs a new instance of the com.android.apksig.internal.asn1.ber.BerDataValueReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								readDataValue(): com.android.apksig.internal.asn1.ber.BerDataValue;
							});
							public constructor();
							public readDataValue(): com.android.apksig.internal.asn1.ber.BerDataValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export module ber {
						export abstract class BerEncoding extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.asn1.ber.BerEncoding>;
							public static ID_FLAG_CONSTRUCTED_ENCODING: number;
							public static TAG_CLASS_UNIVERSAL: number;
							public static TAG_CLASS_APPLICATION: number;
							public static TAG_CLASS_CONTEXT_SPECIFIC: number;
							public static TAG_CLASS_PRIVATE: number;
							public static TAG_NUMBER_BOOLEAN: number;
							public static TAG_NUMBER_INTEGER: number;
							public static TAG_NUMBER_BIT_STRING: number;
							public static TAG_NUMBER_OCTET_STRING: number;
							public static TAG_NUMBER_NULL: number;
							public static TAG_NUMBER_OBJECT_IDENTIFIER: number;
							public static TAG_NUMBER_SEQUENCE: number;
							public static TAG_NUMBER_SET: number;
							public static TAG_NUMBER_UTC_TIME: number;
							public static TAG_NUMBER_GENERALIZED_TIME: number;
							public static getTagNumber(dataType: com.android.apksig.internal.asn1.Asn1Type): number;
							public static isConstructed(firstIdentifierByte: number): boolean;
							public static tagClassAndNumberToString(tagClass: number, tagNumber: number): string;
							public static getTagNumber(firstIdentifierByte: number): number;
							public static getTagClass(tagClass: com.android.apksig.internal.asn1.Asn1TagClass): number;
							public static tagClassToString(typeClass: number): string;
							public static tagNumberToString(tagNumber: number): string;
							public static setTagClass(firstIdentifierByte: number, tagClass: number): number;
							public static getTagClass(firstIdentifierByte: number): number;
							public static setTagNumber(firstIdentifierByte: number, tagNumber: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export module ber {
						export class ByteBufferBerDataValueReader extends java.lang.Object implements com.android.apksig.internal.asn1.ber.BerDataValueReader {
							public static class: java.lang.Class<com.android.apksig.internal.asn1.ber.ByteBufferBerDataValueReader>;
							public constructor(buf: java.nio.ByteBuffer);
							public readDataValue(): com.android.apksig.internal.asn1.ber.BerDataValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module asn1 {
					export module ber {
						export class InputStreamBerDataValueReader extends java.lang.Object implements com.android.apksig.internal.asn1.ber.BerDataValueReader {
							public static class: java.lang.Class<com.android.apksig.internal.asn1.ber.InputStreamBerDataValueReader>;
							public readDataValue(): com.android.apksig.internal.asn1.ber.BerDataValue;
							public constructor(_in_: java.io.InputStream);
						}
						export module InputStreamBerDataValueReader {
							export class RecordingInputStream extends java.io.InputStream {
								public static class: java.lang.Class<com.android.apksig.internal.asn1.ber.InputStreamBerDataValueReader.RecordingInputStream>;
								public read(b: number[], off: number, len: number): number;
								public getReadByteCount(): number;
								public read(b: number[]): number;
								public getReadBytes(): number[];
								public reset(): void;
								public available(): number;
								public close(): void;
								public mark(readlimit: number): void;
								public markSupported(): boolean;
								public read(): number;
								public skip(n: number): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module jar {
					export class ManifestParser extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.jar.ManifestParser>;
						public constructor(data: number[], offset: number, length: number);
						public constructor(data: number[]);
						public readAllSections(): java.util.List<com.android.apksig.internal.jar.ManifestParser.Section>;
						public readSection(): com.android.apksig.internal.jar.ManifestParser.Section;
					}
					export module ManifestParser {
						export class Attribute extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.jar.ManifestParser.Attribute>;
							public getName(): string;
							public getValue(): string;
							public constructor(name: string, value: string);
						}
						export class Section extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.jar.ManifestParser.Section>;
							public getAttributeValue(name: string): string;
							public getStartOffset(): number;
							public getName(): string;
							public getSizeBytes(): number;
							public constructor(startOffset: number, sizeBytes: number, attrs: java.util.List<com.android.apksig.internal.jar.ManifestParser.Attribute>);
							public getAttributes(): java.util.List<com.android.apksig.internal.jar.ManifestParser.Attribute>;
							public getAttributeValue(name: java.util.jar.Attributes.Name): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module jar {
					export abstract class ManifestWriter extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.jar.ManifestWriter>;
						public static writeMainSection(out: java.io.OutputStream, attributes: java.util.jar.Attributes): void;
						public static writeIndividualSection(out: java.io.OutputStream, name: string, attributes: java.util.jar.Attributes): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module jar {
					export abstract class SignatureFileWriter extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.jar.SignatureFileWriter>;
						public static writeMainSection(out: java.io.OutputStream, attributes: java.util.jar.Attributes): void;
						public static writeSectionDelimiter(out: java.io.OutputStream): void;
						public static writeIndividualSection(out: java.io.OutputStream, name: string, attributes: java.util.jar.Attributes): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module oid {
					export class OidConstants extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.oid.OidConstants>;
						public static OID_DIGEST_MD5: string;
						public static OID_DIGEST_SHA1: string;
						public static OID_DIGEST_SHA224: string;
						public static OID_DIGEST_SHA256: string;
						public static OID_DIGEST_SHA384: string;
						public static OID_DIGEST_SHA512: string;
						public static OID_SIG_RSA: string;
						public static OID_SIG_MD5_WITH_RSA: string;
						public static OID_SIG_SHA1_WITH_RSA: string;
						public static OID_SIG_SHA224_WITH_RSA: string;
						public static OID_SIG_SHA256_WITH_RSA: string;
						public static OID_SIG_SHA384_WITH_RSA: string;
						public static OID_SIG_SHA512_WITH_RSA: string;
						public static OID_SIG_DSA: string;
						public static OID_SIG_SHA1_WITH_DSA: string;
						public static OID_SIG_SHA224_WITH_DSA: string;
						public static OID_SIG_SHA256_WITH_DSA: string;
						public static OID_SIG_SHA384_WITH_DSA: string;
						public static OID_SIG_SHA512_WITH_DSA: string;
						public static OID_SIG_EC_PUBLIC_KEY: string;
						public static OID_SIG_SHA1_WITH_ECDSA: string;
						public static OID_SIG_SHA224_WITH_ECDSA: string;
						public static OID_SIG_SHA256_WITH_ECDSA: string;
						public static OID_SIG_SHA384_WITH_ECDSA: string;
						public static OID_SIG_SHA512_WITH_ECDSA: string;
						public static SUPPORTED_SIG_ALG_OIDS: java.util.Map<string,java.util.List<com.android.apksig.internal.util.InclusiveIntRange>>;
						public static OID_TO_JCA_DIGEST_ALG: java.util.Map<string,string>;
						public static OID_TO_JCA_SIGNATURE_ALG: java.util.Map<string,string>;
						public static addSupportedSigAlg(digestAlgorithmOid: string, signatureAlgorithmOid: string, ...supportedApiLevels: com.android.apksig.internal.util.InclusiveIntRange[]): void;
						public static getSigAlgSupportedApiLevels(digestAlgorithmOid: string, signatureAlgorithmOid: string): java.util.List<com.android.apksig.internal.util.InclusiveIntRange>;
					}
					export module OidConstants {
						export class OidToUserFriendlyNameMapper extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.oid.OidConstants.OidToUserFriendlyNameMapper>;
							public static getUserFriendlyNameForOid(oid: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module pkcs7 {
					export class AlgorithmIdentifier extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.pkcs7.AlgorithmIdentifier>;
						public algorithm: string;
						public parameters: com.android.apksig.internal.asn1.Asn1OpaqueObject;
						public static getSignerInfoSignatureAlgorithm(publicKey: java.security.PublicKey, digestAlgorithm: com.android.apksig.internal.apk.v1.DigestAlgorithm, deterministicDsaSigning: boolean): com.android.apksig.internal.util.Pair<string,com.android.apksig.internal.pkcs7.AlgorithmIdentifier>;
						public constructor();
						public constructor(algorithmOid: string, parameters: com.android.apksig.internal.asn1.Asn1OpaqueObject);
						public static getJcaDigestAlgorithm(oid: string): string;
						public static getSignerInfoDigestAlgorithmOid(digestAlgorithm: com.android.apksig.internal.apk.v1.DigestAlgorithm): com.android.apksig.internal.pkcs7.AlgorithmIdentifier;
						public static getJcaSignatureAlgorithm(digestAlgorithmOid: string, signatureAlgorithmOid: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module pkcs7 {
					export class Attribute extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.pkcs7.Attribute>;
						public attrType: string;
						public attrValues: java.util.List<com.android.apksig.internal.asn1.Asn1OpaqueObject>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module pkcs7 {
					export class ContentInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.pkcs7.ContentInfo>;
						public contentType: string;
						public content: com.android.apksig.internal.asn1.Asn1OpaqueObject;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module pkcs7 {
					export class EncapsulatedContentInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.pkcs7.EncapsulatedContentInfo>;
						public contentType: string;
						public content: java.nio.ByteBuffer;
						public constructor();
						public constructor(contentTypeOid: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module pkcs7 {
					export class IssuerAndSerialNumber extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.pkcs7.IssuerAndSerialNumber>;
						public issuer: com.android.apksig.internal.asn1.Asn1OpaqueObject;
						public certificateSerialNumber: java.math.BigInteger;
						public constructor(issuer: com.android.apksig.internal.asn1.Asn1OpaqueObject, certificateSerialNumber: java.math.BigInteger);
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module pkcs7 {
					export abstract class Pkcs7Constants extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.pkcs7.Pkcs7Constants>;
						public static OID_DATA: string;
						public static OID_SIGNED_DATA: string;
						public static OID_CONTENT_TYPE: string;
						public static OID_MESSAGE_DIGEST: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module pkcs7 {
					export class Pkcs7DecodingException extends java.lang.Exception {
						public static class: java.lang.Class<com.android.apksig.internal.pkcs7.Pkcs7DecodingException>;
						public constructor();
						public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
						public constructor(message: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module pkcs7 {
					export class SignedData extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.pkcs7.SignedData>;
						public version: number;
						public digestAlgorithms: java.util.List<com.android.apksig.internal.pkcs7.AlgorithmIdentifier>;
						public encapContentInfo: com.android.apksig.internal.pkcs7.EncapsulatedContentInfo;
						public certificates: java.util.List<com.android.apksig.internal.asn1.Asn1OpaqueObject>;
						public crls: java.util.List<java.nio.ByteBuffer>;
						public signerInfos: java.util.List<com.android.apksig.internal.pkcs7.SignerInfo>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module pkcs7 {
					export class SignerIdentifier extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.pkcs7.SignerIdentifier>;
						public issuerAndSerialNumber: com.android.apksig.internal.pkcs7.IssuerAndSerialNumber;
						public subjectKeyIdentifier: java.nio.ByteBuffer;
						public constructor();
						public constructor(issuerAndSerialNumber: com.android.apksig.internal.pkcs7.IssuerAndSerialNumber);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module pkcs7 {
					export class SignerInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.pkcs7.SignerInfo>;
						public version: number;
						public sid: com.android.apksig.internal.pkcs7.SignerIdentifier;
						public digestAlgorithm: com.android.apksig.internal.pkcs7.AlgorithmIdentifier;
						public signedAttrs: com.android.apksig.internal.asn1.Asn1OpaqueObject;
						public signatureAlgorithm: com.android.apksig.internal.pkcs7.AlgorithmIdentifier;
						public signature: java.nio.ByteBuffer;
						public unsignedAttrs: java.util.List<com.android.apksig.internal.pkcs7.Attribute>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export abstract class AndroidSdkVersion extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.util.AndroidSdkVersion>;
						public static INITIAL_RELEASE: number;
						public static GINGERBREAD: number;
						public static HONEYCOMB: number;
						public static JELLY_BEAN_MR2: number;
						public static KITKAT: number;
						public static LOLLIPOP: number;
						public static M: number;
						public static N: number;
						public static O: number;
						public static P: number;
						public static Q: number;
						public static R: number;
						public static S: number;
						public static Sv2: number;
						public static T: number;
						public static U: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class ByteArrayDataSink extends java.lang.Object implements com.android.apksig.util.ReadableDataSink {
						public static class: java.lang.Class<com.android.apksig.internal.util.ByteArrayDataSink>;
						public constructor();
						public copyTo(param0: number, param1: number, param2: java.nio.ByteBuffer): void;
						public consume(buf: java.nio.ByteBuffer): void;
						public copyTo(offset: number, param1: number, size: java.nio.ByteBuffer): void;
						public slice(param0: number, param1: number): com.android.apksig.util.DataSource;
						public getByteBuffer(offset: number, param1: number): java.nio.ByteBuffer;
						public feed(param0: number, param1: number, param2: com.android.apksig.util.DataSink): void;
						public getByteBuffer(param0: number, param1: number): java.nio.ByteBuffer;
						public consume(buf: number[], offset: number, length: number): void;
						public slice(offset: number, param1: number): com.android.apksig.util.DataSource;
						public constructor(initialCapacity: number);
						public feed(offset: number, param1: number, size: com.android.apksig.util.DataSink): void;
						public size(): number;
						public consume(param0: number[], param1: number, param2: number): void;
						public consume(param0: java.nio.ByteBuffer): void;
					}
					export module ByteArrayDataSink {
						export class SliceDataSource extends java.lang.Object implements com.android.apksig.util.DataSource {
							public static class: java.lang.Class<com.android.apksig.internal.util.ByteArrayDataSink.SliceDataSource>;
							public feed(param0: number, param1: number, param2: com.android.apksig.util.DataSink): void;
							public size(): number;
							public copyTo(offset: number, param1: number, size: java.nio.ByteBuffer): void;
							public feed(offset: number, param1: number, size: com.android.apksig.util.DataSink): void;
							public copyTo(param0: number, param1: number, param2: java.nio.ByteBuffer): void;
							public slice(param0: number, param1: number): com.android.apksig.util.DataSource;
							public slice(offset: number, param1: number): com.android.apksig.util.DataSource;
							public getByteBuffer(param0: number, param1: number): java.nio.ByteBuffer;
							public getByteBuffer(offset: number, param1: number): java.nio.ByteBuffer;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class ByteBufferDataSource extends java.lang.Object implements com.android.apksig.util.DataSource {
						public static class: java.lang.Class<com.android.apksig.internal.util.ByteBufferDataSource>;
						public constructor(buffer: java.nio.ByteBuffer);
						public copyTo(offset: number, param1: number, size: java.nio.ByteBuffer): void;
						public slice(param0: number, param1: number): com.android.apksig.util.DataSource;
						public getByteBuffer(offset: number, param1: number): java.nio.ByteBuffer;
						public copyTo(param0: number, param1: number, param2: java.nio.ByteBuffer): void;
						public feed(param0: number, param1: number, param2: com.android.apksig.util.DataSink): void;
						public getByteBuffer(param0: number, param1: number): java.nio.ByteBuffer;
						public feed(offset: number, param1: number, size: com.android.apksig.util.DataSink): void;
						public size(): number;
						public slice(offset: number, param1: number): com.android.apksig.internal.util.ByteBufferDataSource;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class ByteBufferSink extends java.lang.Object implements com.android.apksig.util.DataSink {
						public static class: java.lang.Class<com.android.apksig.internal.util.ByteBufferSink>;
						public getBuffer(): java.nio.ByteBuffer;
						public constructor(buffer: java.nio.ByteBuffer);
						public consume(buf: number[], offset: number, length: number): void;
						public consume(buf: java.nio.ByteBuffer): void;
						public consume(param0: number[], param1: number, param2: number): void;
						public consume(param0: java.nio.ByteBuffer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class ByteBufferUtils extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.util.ByteBufferUtils>;
						public static toByteArray(buf: java.nio.ByteBuffer): number[];
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class ByteStreams extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.util.ByteStreams>;
						public static toByteArray(_in_: java.io.InputStream): number[];
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class ChainedDataSource extends java.lang.Object implements com.android.apksig.util.DataSource {
						public static class: java.lang.Class<com.android.apksig.internal.util.ChainedDataSource>;
						public copyTo(offset: number, param1: number, size: java.nio.ByteBuffer): void;
						public slice(param0: number, param1: number): com.android.apksig.util.DataSource;
						public getByteBuffer(offset: number, param1: number): java.nio.ByteBuffer;
						public copyTo(param0: number, param1: number, param2: java.nio.ByteBuffer): void;
						public feed(param0: number, param1: number, param2: com.android.apksig.util.DataSink): void;
						public getByteBuffer(param0: number, param1: number): java.nio.ByteBuffer;
						public constructor(...sources: com.android.apksig.util.DataSource[]);
						public slice(offset: number, param1: number): com.android.apksig.util.DataSource;
						public feed(offset: number, param1: number, size: com.android.apksig.util.DataSink): void;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class DelegatingX509Certificate extends java.security.cert.X509Certificate {
						public static class: java.lang.Class<com.android.apksig.internal.util.DelegatingX509Certificate>;
						public verify(key: java.security.PublicKey, sigProvider: java.security.Provider): void;
						public getNonCriticalExtensionOIDs(): java.util.Set<string>;
						public verify(key: java.security.PublicKey, sigProvider: string): void;
						public getBasicConstraints(): number;
						public getExtendedKeyUsage(): java.util.List<string>;
						public getIssuerUniqueID(): boolean[];
						public getExtensionValue(param0: string): number[];
						public constructor(delegate: java.security.cert.X509Certificate);
						public getSerialNumber(): java.math.BigInteger;
						public checkValidity(param0: java.util.Date): void;
						public verify(key: java.security.PublicKey): void;
						public getSubjectUniqueID(): boolean[];
						public getSubjectX500Principal(): javax.security.auth.x500.X500Principal;
						public getIssuerX500Principal(): javax.security.auth.x500.X500Principal;
						public verify(param0: java.security.PublicKey, param1: string): void;
						public checkValidity(): void;
						public getIssuerAlternativeNames(): java.util.Collection<java.util.List<any>>;
						public getIssuerDN(): java.security.Principal;
						public constructor();
						public getExtensionValue(oid: string): number[];
						public getNotAfter(): java.util.Date;
						public getTBSCertificate(): number[];
						public getVersion(): number;
						public getEncoded(): number[];
						public getSignature(): number[];
						public getKeyUsage(): boolean[];
						public getCriticalExtensionOIDs(): java.util.Set<string>;
						public toString(): string;
						public getSubjectAlternativeNames(): java.util.Collection<java.util.List<any>>;
						public hasUnsupportedCriticalExtension(): boolean;
						public constructor(type: string);
						public getPublicKey(): java.security.PublicKey;
						public getSigAlgOID(): string;
						public getSigAlgParams(): number[];
						public getSigAlgName(): string;
						public getNotBefore(): java.util.Date;
						public checkValidity(date: java.util.Date): void;
						public verify(param0: java.security.PublicKey): void;
						public getSubjectDN(): java.security.Principal;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class FileChannelDataSource extends java.lang.Object implements com.android.apksig.util.DataSource {
						public static class: java.lang.Class<com.android.apksig.internal.util.FileChannelDataSource>;
						public constructor(channel: java.nio.channels.FileChannel);
						public copyTo(offset: number, param1: number, size: java.nio.ByteBuffer): void;
						public slice(param0: number, param1: number): com.android.apksig.util.DataSource;
						public getByteBuffer(offset: number, param1: number): java.nio.ByteBuffer;
						public copyTo(param0: number, param1: number, param2: java.nio.ByteBuffer): void;
						public feed(param0: number, param1: number, param2: com.android.apksig.util.DataSink): void;
						public getByteBuffer(param0: number, param1: number): java.nio.ByteBuffer;
						public feed(offset: number, param1: number, size: com.android.apksig.util.DataSink): void;
						public slice(offset: number, param1: number): com.android.apksig.internal.util.FileChannelDataSource;
						public size(): number;
						public constructor(channel: java.nio.channels.FileChannel, offset: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class GuaranteedEncodedFormX509Certificate extends com.android.apksig.internal.util.DelegatingX509Certificate {
						public static class: java.lang.Class<com.android.apksig.internal.util.GuaranteedEncodedFormX509Certificate>;
						public constructor();
						public equals(other: any): boolean;
						public getExtensionValue(oid: string): number[];
						public getNonCriticalExtensionOIDs(): java.util.Set<string>;
						public hashCode(): number;
						public getEncoded(): number[];
						public getExtensionValue(param0: string): number[];
						public constructor(delegate: java.security.cert.X509Certificate);
						public getCriticalExtensionOIDs(): java.util.Set<string>;
						public hasUnsupportedCriticalExtension(): boolean;
						public constructor(type: string);
						public constructor(wrapped: java.security.cert.X509Certificate, encodedForm: number[]);
						public equals(o: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class InclusiveIntRange extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.util.InclusiveIntRange>;
						public getMin(): number;
						public static fromTo(min: number, max: number): com.android.apksig.internal.util.InclusiveIntRange;
						public static from(min: number): com.android.apksig.internal.util.InclusiveIntRange;
						public getMax(): number;
						public getValuesNotIn(sortedNonOverlappingRanges: java.util.List<com.android.apksig.internal.util.InclusiveIntRange>): java.util.List<com.android.apksig.internal.util.InclusiveIntRange>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class MessageDigestSink extends java.lang.Object implements com.android.apksig.util.DataSink {
						public static class: java.lang.Class<com.android.apksig.internal.util.MessageDigestSink>;
						public consume(buf: number[], offset: number, length: number): void;
						public consume(buf: java.nio.ByteBuffer): void;
						public constructor(digests: java.security.MessageDigest[]);
						public consume(param0: number[], param1: number, param2: number): void;
						public consume(param0: java.nio.ByteBuffer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class OutputStreamDataSink extends java.lang.Object implements com.android.apksig.util.DataSink {
						public static class: java.lang.Class<com.android.apksig.internal.util.OutputStreamDataSink>;
						public getOutputStream(): java.io.OutputStream;
						public consume(buf: number[], offset: number, length: number): void;
						public consume(buf: java.nio.ByteBuffer): void;
						public constructor(out: java.io.OutputStream);
						public consume(param0: number[], param1: number, param2: number): void;
						public consume(param0: java.nio.ByteBuffer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class Pair<A, B>  extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.util.Pair<any,any>>;
						public getSecond(): B;
						public getFirst(): A;
						public equals(obj: any): boolean;
						public static of(first: any, second: any): com.android.apksig.internal.util.Pair<any,any>;
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class RandomAccessFileDataSink extends java.lang.Object implements com.android.apksig.util.DataSink {
						public static class: java.lang.Class<com.android.apksig.internal.util.RandomAccessFileDataSink>;
						public constructor(file: java.io.RandomAccessFile, startPosition: number);
						public getFile(): java.io.RandomAccessFile;
						public consume(buf: number[], offset: number, length: number): void;
						public consume(buf: java.nio.ByteBuffer): void;
						public constructor(file: java.io.RandomAccessFile);
						public consume(param0: number[], param1: number, param2: number): void;
						public consume(param0: java.nio.ByteBuffer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class TeeDataSink extends java.lang.Object implements com.android.apksig.util.DataSink {
						public static class: java.lang.Class<com.android.apksig.internal.util.TeeDataSink>;
						public constructor(sinks: com.android.apksig.util.DataSink[]);
						public consume(buf: number[], offset: number, length: number): void;
						public consume(buf: java.nio.ByteBuffer): void;
						public consume(param0: number[], param1: number, param2: number): void;
						public consume(param0: java.nio.ByteBuffer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class VerityTreeBuilder extends java.lang.Object implements java.lang.AutoCloseable {
						public static class: java.lang.Class<com.android.apksig.internal.util.VerityTreeBuilder>;
						public constructor(salt: number[]);
						public generateVerityTreeRootHash(fileSource: com.android.apksig.util.DataSource): number[];
						public close(): void;
						public getRootHashFromTree(verityBuffer: java.nio.ByteBuffer): number[];
						public generateVerityTree(fileSource: com.android.apksig.util.DataSource): java.nio.ByteBuffer;
						public generateVerityTreeRootHash(beforeApkSigningBlock: com.android.apksig.util.DataSource, centralDir: com.android.apksig.util.DataSource, eocd: com.android.apksig.util.DataSource): number[];
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module util {
					export class X509CertificateUtils extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.util.X509CertificateUtils>;
						public static BEGIN_CERT_HEADER: number[];
						public static END_CERT_FOOTER: number[];
						public constructor();
						public static generateCertificates(_in_: java.io.InputStream): java.util.Collection<any>;
						public static generateCertificate(_in_: java.io.InputStream): java.security.cert.X509Certificate;
						public static generateCertificate(encodedForm: number[], certFactory: java.security.cert.CertificateFactory): java.security.cert.X509Certificate;
						public static generateCertificate(encodedForm: number[]): java.security.cert.X509Certificate;
						public static generateCertificates(_in_: java.io.InputStream, certFactory: java.security.cert.CertificateFactory): java.util.Collection<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module x509 {
					export class AttributeTypeAndValue extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.x509.AttributeTypeAndValue>;
						public attrType: string;
						public attrValue: com.android.apksig.internal.asn1.Asn1OpaqueObject;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module x509 {
					export class Certificate extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.x509.Certificate>;
						public certificate: com.android.apksig.internal.x509.TBSCertificate;
						public signatureAlgorithm: com.android.apksig.internal.pkcs7.AlgorithmIdentifier;
						public signature: java.nio.ByteBuffer;
						public static parseCertificates(encodedCertificates: java.util.List<com.android.apksig.internal.asn1.Asn1OpaqueObject>): java.util.List<java.security.cert.X509Certificate>;
						public constructor();
						public static findCertificate(certs: java.util.Collection<java.security.cert.X509Certificate>, id: com.android.apksig.internal.pkcs7.SignerIdentifier): java.security.cert.X509Certificate;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module x509 {
					export class Extension extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.x509.Extension>;
						public extensionID: string;
						public isCritial: boolean;
						public extensionValue: java.nio.ByteBuffer;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module x509 {
					export class Name extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.x509.Name>;
						public relativeDistinguishedNames: java.util.List<com.android.apksig.internal.x509.RelativeDistinguishedName>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module x509 {
					export class RSAPublicKey extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.x509.RSAPublicKey>;
						public modulus: java.math.BigInteger;
						public publicExponent: java.math.BigInteger;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module x509 {
					export class RelativeDistinguishedName extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.x509.RelativeDistinguishedName>;
						public attributes: java.util.List<com.android.apksig.internal.x509.AttributeTypeAndValue>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module x509 {
					export class SubjectPublicKeyInfo extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.x509.SubjectPublicKeyInfo>;
						public algorithmIdentifier: com.android.apksig.internal.pkcs7.AlgorithmIdentifier;
						public subjectPublicKey: java.nio.ByteBuffer;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module x509 {
					export class TBSCertificate extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.x509.TBSCertificate>;
						public version: number;
						public serialNumber: java.math.BigInteger;
						public signatureAlgorithm: com.android.apksig.internal.pkcs7.AlgorithmIdentifier;
						public issuer: com.android.apksig.internal.x509.Name;
						public validity: com.android.apksig.internal.x509.Validity;
						public subject: com.android.apksig.internal.x509.Name;
						public subjectPublicKeyInfo: com.android.apksig.internal.x509.SubjectPublicKeyInfo;
						public issuerUniqueID: java.nio.ByteBuffer;
						public subjectUniqueID: java.nio.ByteBuffer;
						public extensions: java.util.List<com.android.apksig.internal.x509.Extension>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module x509 {
					export class Time extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.x509.Time>;
						public utcTime: string;
						public generalizedTime: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module x509 {
					export class Validity extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.x509.Validity>;
						public notBefore: com.android.apksig.internal.x509.Time;
						public notAfter: com.android.apksig.internal.x509.Time;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module zip {
					export class CentralDirectoryRecord extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.zip.CentralDirectoryRecord>;
						public static BY_LOCAL_FILE_HEADER_OFFSET_COMPARATOR: java.util.Comparator<com.android.apksig.internal.zip.CentralDirectoryRecord>;
						public static createWithDeflateCompressedData(name: string, lastModifiedTime: number, lastModifiedDate: number, crc32: number, param4: number, compressedSize: number, param6: number): com.android.apksig.internal.zip.CentralDirectoryRecord;
						public getCompressionMethod(): number;
						public getNameSizeBytes(): number;
						public getLastModificationTime(): number;
						public createWithModifiedLocalFileHeaderOffset(localFileHeaderOffset: number): com.android.apksig.internal.zip.CentralDirectoryRecord;
						public getUncompressedSize(): number;
						public getName(): string;
						public getCompressedSize(): number;
						public copyTo(output: java.nio.ByteBuffer): void;
						public getSize(): number;
						public getGpFlags(): number;
						public getLocalFileHeaderOffset(): number;
						public getLastModificationDate(): number;
						public static getRecord(buf: java.nio.ByteBuffer): com.android.apksig.internal.zip.CentralDirectoryRecord;
						public getCrc32(): number;
					}
					export module CentralDirectoryRecord {
						export class ByLocalFileHeaderOffsetComparator extends java.util.Comparator<com.android.apksig.internal.zip.CentralDirectoryRecord> {
							public static class: java.lang.Class<com.android.apksig.internal.zip.CentralDirectoryRecord.ByLocalFileHeaderOffsetComparator>;
							public compare(param0: any, param1: any): number;
							public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public compare(r1: com.android.apksig.internal.zip.CentralDirectoryRecord, r2: com.android.apksig.internal.zip.CentralDirectoryRecord): number;
							public equals(obj: any): boolean;
							public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static naturalOrder(): java.util.Comparator<any>;
							public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public reversed(): java.util.Comparator<any>;
							public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public equals(param0: any): boolean;
							public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
							public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
							public static reverseOrder(): java.util.Comparator<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module zip {
					export class EocdRecord extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.zip.EocdRecord>;
						public constructor();
						public static createWithModifiedCentralDirectoryInfo(original: java.nio.ByteBuffer, centralDirectoryRecordCount: number, centralDirectorySizeBytes: number, param3: number): java.nio.ByteBuffer;
						public static createWithPaddedComment(original: java.nio.ByteBuffer, padding: number): java.nio.ByteBuffer;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module zip {
					export class LocalFileRecord extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.zip.LocalFileRecord>;
						public static outputRecordWithDeflateCompressedData(name: string, lastModifiedTime: number, lastModifiedDate: number, compressedData: number[], crc32: number, param5: number, uncompressedSize: com.android.apksig.util.DataSink): number;
						public outputUncompressedData(lfhSection: com.android.apksig.util.DataSource, sink: com.android.apksig.util.DataSink): void;
						public getExtra(): java.nio.ByteBuffer;
						public static getUncompressedData(source: com.android.apksig.util.DataSource, cdRecord: com.android.apksig.internal.zip.CentralDirectoryRecord, cdStartOffsetInArchive: number): number[];
						public outputRecord(sourceApk: com.android.apksig.util.DataSource, output: com.android.apksig.util.DataSink): number;
						public static outputUncompressedData(source: com.android.apksig.util.DataSource, cdRecord: com.android.apksig.internal.zip.CentralDirectoryRecord, cdStartOffsetInArchive: number, param3: com.android.apksig.util.DataSink): void;
						public getExtraFieldStartOffsetInsideRecord(): number;
						public getName(): string;
						public getDataStartOffsetInRecord(): number;
						public getStartOffsetInArchive(): number;
						public getSize(): number;
						public static getRecord(apk: com.android.apksig.util.DataSource, cdRecord: com.android.apksig.internal.zip.CentralDirectoryRecord, cdStartOffset: number): com.android.apksig.internal.zip.LocalFileRecord;
						public isDataCompressed(): boolean;
						public outputRecordWithModifiedExtra(sourceApk: com.android.apksig.util.DataSource, extra: java.nio.ByteBuffer, output: com.android.apksig.util.DataSink): number;
					}
					export module LocalFileRecord {
						export class InflateSinkAdapter extends java.lang.Object implements com.android.apksig.util.DataSink, java.io.Closeable {
							public static class: java.lang.Class<com.android.apksig.internal.zip.LocalFileRecord.InflateSinkAdapter>;
							public close(): void;
							public getOutputByteCount(): number;
							public consume(buf: java.nio.ByteBuffer): void;
							public consume(param0: number[], param1: number, param2: number): void;
							public consume(param0: java.nio.ByteBuffer): void;
							public consume(buf: number[], offset: number, length: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module internal {
				export module zip {
					export abstract class ZipUtils extends java.lang.Object {
						public static class: java.lang.Class<com.android.apksig.internal.zip.ZipUtils>;
						public static COMPRESSION_METHOD_STORED: number;
						public static COMPRESSION_METHOD_DEFLATED: number;
						public static GP_FLAG_DATA_DESCRIPTOR_USED: number;
						public static GP_FLAG_EFS: number;
						public static getZipEocdCentralDirectoryTotalRecordCount(zipEndOfCentralDirectory: java.nio.ByteBuffer): number;
						public static setZipEocdCentralDirectoryOffset(zipEndOfCentralDirectory: java.nio.ByteBuffer, offset: number): void;
						public static getUnsignedInt16(buffer: java.nio.ByteBuffer, offset: number): number;
						public static updateZipEocdCommentLen(zipEndOfCentralDirectory: java.nio.ByteBuffer): void;
						public static getZipEocdCentralDirectoryOffset(zipEndOfCentralDirectory: java.nio.ByteBuffer): number;
						public static deflate(input: java.nio.ByteBuffer): com.android.apksig.internal.zip.ZipUtils.DeflateResult;
						public static findZipEndOfCentralDirectoryRecord(zip: com.android.apksig.util.DataSource): com.android.apksig.internal.util.Pair<java.nio.ByteBuffer,java.lang.Long>;
						public static getZipEocdCentralDirectorySizeBytes(zipEndOfCentralDirectory: java.nio.ByteBuffer): number;
						public static putUnsignedInt16(buffer: java.nio.ByteBuffer, value: number): void;
						public static parseZipCentralDirectory(apk: com.android.apksig.util.DataSource, apkSections: com.android.apksig.zip.ZipSections): java.util.List<com.android.apksig.internal.zip.CentralDirectoryRecord>;
						public static getUnsignedInt16(buffer: java.nio.ByteBuffer): number;
					}
					export module ZipUtils {
						export class DeflateResult extends java.lang.Object {
							public static class: java.lang.Class<com.android.apksig.internal.zip.ZipUtils.DeflateResult>;
							public inputSizeBytes: number;
							public inputCrc32: number;
							public output: number[];
							public constructor(inputSizeBytes: number, inputCrc32: number, param2: number[]);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module kms {
				export class KmsException extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.android.apksig.kms.KmsException>;
					public constructor(message: string);
					public constructor(kmsType: string, cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor(kmsType: string, message: string, cause: java.lang.Throwable);
					public constructor();
					public constructor(kmsType: string, message: string);
					public constructor(cause: java.lang.Throwable);
					public getMessage(): string;
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module kms {
				export class KmsSignerEngineProvider extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.kms.KmsSignerEngineProvider>;
					/**
					 * Constructs a new instance of the com.android.apksig.kms.KmsSignerEngineProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getInstance(param0: com.android.apksig.KeyConfig.Kms, param1: string, param2: java.security.spec.AlgorithmParameterSpec): com.android.apksig.SignerEngine;
						getKmsType(): string;
					});
					public constructor();
					public getInstance(param0: com.android.apksig.KeyConfig.Kms, param1: string, param2: java.security.spec.AlgorithmParameterSpec): com.android.apksig.SignerEngine;
					public getKmsType(): string;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module kms {
				export class KmsType extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.kms.KmsType>;
					public static AWS: string;
					public static GCP: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module util {
				export class DataSink extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.util.DataSink>;
					/**
					 * Constructs a new instance of the com.android.apksig.util.DataSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						consume(param0: number[], param1: number, param2: number): void;
						consume(param0: java.nio.ByteBuffer): void;
					});
					public constructor();
					public consume(param0: number[], param1: number, param2: number): void;
					public consume(param0: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module util {
				export abstract class DataSinks extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.util.DataSinks>;
					public static asDataSink(...digests: java.security.MessageDigest[]): com.android.apksig.util.DataSink;
					public static asDataSink(file: java.io.RandomAccessFile): com.android.apksig.util.DataSink;
					public static newInMemoryDataSink(initialCapacity: number): com.android.apksig.util.ReadableDataSink;
					public static asDataSink(out: java.io.OutputStream): com.android.apksig.util.DataSink;
					public static newInMemoryDataSink(): com.android.apksig.util.ReadableDataSink;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module util {
				export class DataSource extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.util.DataSource>;
					/**
					 * Constructs a new instance of the com.android.apksig.util.DataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						size(): number;
						feed(param0: number, param1: number, param2: com.android.apksig.util.DataSink): void;
						getByteBuffer(param0: number, param1: number): java.nio.ByteBuffer;
						copyTo(param0: number, param1: number, param2: java.nio.ByteBuffer): void;
						slice(param0: number, param1: number): com.android.apksig.util.DataSource;
					});
					public constructor();
					public getByteBuffer(param0: number, param1: number): java.nio.ByteBuffer;
					public size(): number;
					public feed(param0: number, param1: number, param2: com.android.apksig.util.DataSink): void;
					public slice(param0: number, param1: number): com.android.apksig.util.DataSource;
					public copyTo(param0: number, param1: number, param2: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module util {
				export abstract class DataSources extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.util.DataSources>;
					public static asDataSource(file: java.io.RandomAccessFile, offset: number, param2: number): com.android.apksig.util.DataSource;
					public static asDataSource(channel: java.nio.channels.FileChannel, offset: number, param2: number): com.android.apksig.util.DataSource;
					public static asDataSource(channel: java.nio.channels.FileChannel): com.android.apksig.util.DataSource;
					public static asDataSource(buffer: java.nio.ByteBuffer): com.android.apksig.util.DataSource;
					public static asDataSource(file: java.io.RandomAccessFile): com.android.apksig.util.DataSource;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module util {
				export class ReadableDataSink extends java.lang.Object implements com.android.apksig.util.DataSink, com.android.apksig.util.DataSource {
					public static class: java.lang.Class<com.android.apksig.util.ReadableDataSink>;
					/**
					 * Constructs a new instance of the com.android.apksig.util.ReadableDataSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						consume(param0: number[], param1: number, param2: number): void;
						consume(param0: java.nio.ByteBuffer): void;
						size(): number;
						feed(param0: number, param1: number, param2: com.android.apksig.util.DataSink): void;
						getByteBuffer(param0: number, param1: number): java.nio.ByteBuffer;
						copyTo(param0: number, param1: number, param2: java.nio.ByteBuffer): void;
						slice(param0: number, param1: number): com.android.apksig.util.DataSource;
					});
					public constructor();
					public getByteBuffer(param0: number, param1: number): java.nio.ByteBuffer;
					public size(): number;
					public feed(param0: number, param1: number, param2: com.android.apksig.util.DataSink): void;
					public slice(param0: number, param1: number): com.android.apksig.util.DataSource;
					public consume(param0: number[], param1: number, param2: number): void;
					public copyTo(param0: number, param1: number, param2: java.nio.ByteBuffer): void;
					public consume(param0: java.nio.ByteBuffer): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module util {
				export class RunnablesExecutor extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.util.RunnablesExecutor>;
					/**
					 * Constructs a new instance of the com.android.apksig.util.RunnablesExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						execute(param0: com.android.apksig.util.RunnablesProvider): void;
						lambda$static$0(p: com.android.apksig.util.RunnablesProvider): void;
						"<clinit>"(): void;
					});
					public constructor();
					public static MULTI_THREADED: com.android.apksig.util.RunnablesExecutor;
					public static SINGLE_THREADED: com.android.apksig.util.RunnablesExecutor;
					public execute(param0: com.android.apksig.util.RunnablesProvider): void;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module util {
				export class RunnablesProvider extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.util.RunnablesProvider>;
					/**
					 * Constructs a new instance of the com.android.apksig.util.RunnablesProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createRunnable(): java.lang.Runnable;
					});
					public constructor();
					public createRunnable(): java.lang.Runnable;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module zip {
				export class ZipFormatException extends java.lang.Exception {
					public static class: java.lang.Class<com.android.apksig.zip.ZipFormatException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksig {
			export module zip {
				export class ZipSections extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksig.zip.ZipSections>;
					public getZipCentralDirectorySizeBytes(): number;
					public constructor(centralDirectoryOffset: number, param1: number, centralDirectorySizeBytes: number, param3: number, centralDirectoryRecordCount: java.nio.ByteBuffer);
					public getZipEndOfCentralDirectoryOffset(): number;
					public getZipCentralDirectoryOffset(): number;
					public getZipCentralDirectoryRecordCount(): number;
					public getZipEndOfCentralDirectory(): java.nio.ByteBuffer;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksigner {
			export class ApkSignerTool extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksigner.ApkSignerTool>;
				public static ZIP_MAGIC: number;
				public static printCapabilities(capabilities: com.android.apksig.SigningCertificateLineage.SignerCapabilities): void;
				public static lineage(params: string[]): void;
				public static main(params: string[]): void;
				public static printCertificate(cert: java.security.cert.X509Certificate, name: string, verbose: boolean): void;
				public constructor();
			}
			export module ApkSignerTool {
				export class ProviderInstallSpec extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksigner.ApkSignerTool.ProviderInstallSpec>;
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksigner {
			export class HexEncoding extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksigner.HexEncoding>;
				public static encodeRemaining(data: java.nio.ByteBuffer): string;
				public static encode(data: number[]): string;
				public static encode(data: number[], offset: number, length: number): string;
			}
		}
	}
}

declare module com {
	export module android {
		export module apksigner {
			export class OptionsParser extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksigner.OptionsParser>;
				public getRequiredValue(valueDescription: string): string;
				public getRemainingParams(): string[];
				public getOptionOriginalForm(): string;
				public getOptionalBooleanValue(defaultValue: boolean): boolean;
				public getRequiredIntValue(valueDescription: string): number;
				public nextOption(): string;
				public constructor(params: string[]);
				public putOption(): void;
			}
			export module OptionsParser {
				export class OptionsException extends java.lang.Exception {
					public static class: java.lang.Class<com.android.apksigner.OptionsParser.OptionsException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module apksigner {
			export class ParameterException extends java.lang.Exception {
				public static class: java.lang.Class<com.android.apksigner.ParameterException>;
			}
		}
	}
}

declare module com {
	export module android {
		export module apksigner {
			export class PasswordRetriever extends java.lang.Object implements java.lang.AutoCloseable {
				public static class: java.lang.Class<com.android.apksigner.PasswordRetriever>;
				public static SPEC_STDIN: string;
				public close(): void;
				public getPasswords(spec: string, description: string, ...additionalPwdEncodings: java.nio.charset.Charset[]): java.util.List<string[]>;
				public static getCharsetByName(charsetName: string): java.nio.charset.Charset;
				public constructor();
			}
		}
	}
}

declare module com {
	export module android {
		export module apksigner {
			export class SignerParams extends java.lang.Object {
				public static class: java.lang.Class<com.android.apksigner.SignerParams>;
				public loadPrivateKeyAndCerts(passwordRetriever: com.android.apksigner.PasswordRetriever): void;
				public setKeyPasswordSpec(keyPasswordSpec: string): void;
				public setKeystoreProviderClass(keystoreProviderClass: string): void;
				public setKeystoreProviderArg(keystoreProviderArg: string): void;
				public setName(name: string): void;
				public getKeystoreKeyAlias(): string;
				public getName(): string;
				public getSignerCapabilitiesBuilder(): com.android.apksig.SigningCertificateLineage.SignerCapabilities.Builder;
				public setV1SigFileBasename(v1SigFileBasename: string): void;
				public constructor();
				public setKeystoreKeyAlias(keystoreKeyAlias: string): void;
				public setKeyFile(keyFile: string): void;
				public getV1SigFileBasename(): string;
				public setCertFile(certFile: string): void;
				public setKeystoreProviderName(keystoreProviderName: string): void;
				public getCerts(): java.util.List<java.security.cert.X509Certificate>;
				public getPrivateKey(): java.security.PrivateKey;
				public setKeystoreFile(keystoreFile: string): void;
				public setKeystorePasswordSpec(keystorePasswordSpec: string): void;
				public setKeystoreType(keystoreType: string): void;
				public getKeyFile(): string;
				public setPasswordCharset(passwordCharset: java.nio.charset.Charset): void;
			}
		}
	}
}

declare module com {
	export module android {
		export module apksigner {
			export module utils {
				export class FileUtils extends java.lang.Object {
					public static class: java.lang.Class<com.android.apksigner.utils.FileUtils>;
					public constructor();
					public static moveFile(sourcePath: java.io.File, targetPath: java.io.File): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export class ApkSigner extends java.lang.Object {
				public static class: java.lang.Class<com.mcal.apksigner.ApkSigner>;
				public getV1SigningEnabled(): boolean;
				public getV3SigningEnabled(): boolean;
				public getUseDefaultSignatureVersion(): boolean;
				public setV1SigningEnabled(_set_: boolean): void;
				public setUseDefaultSignatureVersion(_set_: boolean): void;
				public signDebug(): boolean;
				public constructor(unsignedApkFile: java.io.File, signedApkFile: java.io.File);
				public getV2SigningEnabled(): boolean;
				public setV3SigningEnabled(_set_: boolean): void;
				public getV4SigningEnabled(): boolean;
				public setV2SigningEnabled(_set_: boolean): void;
				public signRelease(pk8File: java.io.File, x509File: java.io.File): boolean;
				public signRelease(keyFile: java.io.File, password: string, alias: string, aliasPassword: string): boolean;
				public validateKeystorePassword(keyFile: java.io.File, password: string): boolean;
				public setV4SigningEnabled(_set_: boolean): void;
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export class CertConverter extends java.lang.Object {
				public static class: java.lang.Class<com.mcal.apksigner.CertConverter>;
				public static INSTANCE: com.mcal.apksigner.CertConverter;
				public static convert(inputKeyFile: java.io.File, password: string, alias: string, aliasPassword: string, pk8File: java.io.File, pemFile: java.io.File): boolean;
				public static convert(inputKeyFile: java.io.File, outputKeyFile: java.io.File, password: string, alias: string, aliasPassword: string): boolean;
				public static convert(inputKeyFile: java.io.File, outputKeyFile: java.io.File, password: string, aliasPassword: string): boolean;
				public static convert(inputKeyFile: java.io.File, password: string, aliasPassword: string, pk8File: java.io.File, pemFile: java.io.File): boolean;
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export class CertCreator extends java.lang.Object {
				public static class: java.lang.Class<com.mcal.apksigner.CertCreator>;
				public static INSTANCE: com.mcal.apksigner.CertCreator;
				public static createKey(keyFile: java.io.File, storePass: string[], keyAlgorithm: string, keySize: number, keyName: string, keyPass: string[], certSignatureAlgorithm: string, certValidityYears: number, distinguishedNameValues: com.mcal.apksigner.utils.DistinguishedNameValues): com.mcal.apksigner.utils.KeySet;
				public static createKey(keyAlgorithm: string, keySize: number, keyName: string, certSignatureAlgorithm: string, certValidityYears: number, distinguishedNameValues: com.mcal.apksigner.utils.DistinguishedNameValues): com.mcal.apksigner.utils.KeySet;
				public static createKeystoreAndKey(keyFile: java.io.File, password: string[], keyName: string, distinguishedNameValues: com.mcal.apksigner.utils.DistinguishedNameValues): void;
				public static createKeystoreAndKey(keyFile: java.io.File, storePass: string[], keyAlgorithm: string, keySize: number, keyName: string, keyPass: string[], certSignatureAlgorithm: string, certValidityYears: number, distinguishedNameValues: com.mcal.apksigner.utils.DistinguishedNameValues): com.mcal.apksigner.utils.KeySet;
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export module app {
				export module filepicker {
					export class FilePickHelper extends java.lang.Object {
						public static class: java.lang.Class<com.mcal.apksigner.app.filepicker.FilePickHelper>;
						public constructor();
						public static getFileName(context: android.content.Context, uri: android.net.Uri): string;
						public static onActivityResult(context: android.content.Context, data: android.content.Intent): java.util.List<com.mcal.apksigner.app.filepicker.RequestFile>;
						public static pickFile(apk: boolean): android.content.Intent;
					}
				}
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export module app {
				export module filepicker {
					export class MimeTypeUtil extends java.lang.Object {
						public static class: java.lang.Class<com.mcal.apksigner.app.filepicker.MimeTypeUtil>;
						public static getType(nameOrExtension: string): string;
						public constructor();
						public static getExtension(name: string): string;
						public static isImage(nameOrExtension: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export module app {
				export module filepicker {
					export class RequestFile extends java.lang.Object {
						public static class: java.lang.Class<com.mcal.apksigner.app.filepicker.RequestFile>;
						public constructor(fileName: string, mimeType: string, fileStream: java.io.InputStream);
						public constructor(requestName: string, fileName: string, mimeType: string, fileStream: java.io.InputStream);
						public getMimeType(): string;
						public setRequestName(requestName: string): void;
						public getRequestName(): string;
						public getFileName(): string;
						public getFileStream(): java.io.InputStream;
						public setFileStream(fileStream: java.io.InputStream): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export module utils {
				export class Base64 extends java.lang.Object {
					public static class: java.lang.Class<com.mcal.apksigner.utils.Base64>;
					public static INSTANCE: com.mcal.apksigner.utils.Base64;
					public static decode(base64: string): number[];
					public static encode(raw: number[]): string;
				}
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export module utils {
				export class DistinguishedNameValues extends java.util.LinkedHashMap<org.spongycastle.asn1.ASN1ObjectIdentifier,string> {
					public static class: java.lang.Class<com.mcal.apksigner.utils.DistinguishedNameValues>;
					public get(key: any): any;
					public isEmpty(): boolean;
					public put(key: org.spongycastle.asn1.ASN1ObjectIdentifier, value: string): string;
					public forEach(action: any /* any<any,any>*/): void;
					public constructor(m: java.util.Map<any,any>);
					public size(): number;
					public equals(o: any): boolean;
					public getSize(): number;
					public put(param0: any, param1: any): any;
					public getKeys(): java.util.Set<org.spongycastle.asn1.ASN1ObjectIdentifier>;
					public remove(param0: any): any;
					public constructor();
					public keySet(): java.util.Set<any>;
					public remove(p0: org.spongycastle.asn1.ASN1ObjectIdentifier): string;
					public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
					public replace(key: any, oldValue: any, newValue: any): boolean;
					public getOrDefault(key: any, defaultValue: string): string;
					public containsValue(p0: string): boolean;
					public setLocality(locality: string): void;
					public setStreet(street: string): void;
					public replace(key: any, value: any): any;
					public containsKey(param0: any): boolean;
					public setCommonName(commonName: string): void;
					public setCountry(country: string): void;
					public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
					public keySet(): java.util.Set<org.spongycastle.asn1.ASN1ObjectIdentifier>;
					public containsKey(key: any): boolean;
					public containsKey(p0: org.spongycastle.asn1.ASN1ObjectIdentifier): boolean;
					public constructor(initialCapacity: number, loadFactor: number);
					public getOrDefault(p0: org.spongycastle.asn1.ASN1ObjectIdentifier, p1: string): string;
					public entrySet(): java.util.Set<java.util.Map.Entry<org.spongycastle.asn1.ASN1ObjectIdentifier,string>>;
					public setOrganizationalUnit(organizationalUnit: string): void;
					public values(): java.util.Collection<string>;
					public remove(key: any, value: any): boolean;
					public remove(p0: org.spongycastle.asn1.ASN1ObjectIdentifier, p1: string): boolean;
					public putAll(param0: java.util.Map<any,any>): void;
					public containsValue(param0: any): boolean;
					public getOrDefault(key: any, defaultValue: any): any;
					public putIfAbsent(key: any, value: any): any;
					public constructor(initialCapacity: number);
					public clear(): void;
					public get(p0: org.spongycastle.asn1.ASN1ObjectIdentifier): string;
					public hashCode(): number;
					public replaceAll(_function_: any /* any<any,any,any>*/): void;
					public getPrincipal(): org.spongycastle.jce.X509Principal;
					public remove(key: any): any;
					public setOrganization(organization: string): void;
					public get(key: any): string;
					public getValues(): java.util.Collection<string>;
					public values(): java.util.Collection<any>;
					public containsValue(value: any): boolean;
					public constructor(initialCapacity: number, loadFactor: number, accessOrder: boolean);
					public equals(param0: any): boolean;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public setState(state: string): void;
					public put(key: any, value: any): any;
					public getEntries(): java.util.Set<java.util.Map.Entry<org.spongycastle.asn1.ASN1ObjectIdentifier,string>>;
					public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
					public putAll(m: java.util.Map<any,any>): void;
					public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
					public remove(key: any): string;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export module utils {
				export class JKS extends java.security.KeyStoreSpi {
					public static class: java.lang.Class<com.mcal.apksigner.utils.JKS>;
					public engineGetCertificateChain(alias: string): java.security.cert.Certificate[];
					public engineSetKeyEntry(param0: string, param1: java.security.Key, param2: string[], param3: java.security.cert.Certificate[]): void;
					public engineStore(out: java.io.OutputStream, passwd: string[]): void;
					public engineGetCertificateAlias(param0: java.security.cert.Certificate): string;
					public engineGetCertificate(alias: string): java.security.cert.Certificate;
					public engineStore(param: java.security.KeyStore.LoadStoreParameter): void;
					public engineGetKey(param0: string, param1: string[]): java.security.Key;
					public engineSetCertificateEntry(param0: string, param1: java.security.cert.Certificate): void;
					public engineContainsAlias(param0: string): boolean;
					public engineIsCertificateEntry(param0: string): boolean;
					public engineGetCertificate(param0: string): java.security.cert.Certificate;
					public engineContainsAlias(alias: string): boolean;
					public engineSetKeyEntry(alias: string, key: java.security.Key, passwd: string[], certChain: java.security.cert.Certificate[]): void;
					public engineGetCertificateAlias(cert: java.security.cert.Certificate): string;
					public engineSize(): number;
					public constructor();
					public engineSetKeyEntry(alias: string, encodedKey: number[], certChain: java.security.cert.Certificate[]): void;
					public engineSetKeyEntry(param0: string, param1: number[], param2: java.security.cert.Certificate[]): void;
					public engineLoad(param: java.security.KeyStore.LoadStoreParameter): void;
					public engineGetKey(alias: string, password: string[]): java.security.Key;
					public engineSetCertificateEntry(alias: string, cert: java.security.cert.Certificate): void;
					public engineGetCreationDate(alias: string): java.util.Date;
					public engineAliases(): java.util.Enumeration<string>;
					public engineLoad(param0: java.io.InputStream, param1: string[]): void;
					public engineLoad(_in_: java.io.InputStream, passwd: string[]): void;
					public engineStore(param0: java.io.OutputStream, param1: string[]): void;
					public engineDeleteEntry(alias: string): void;
					public engineIsKeyEntry(param0: string): boolean;
					public engineIsKeyEntry(alias: string): boolean;
					public engineDeleteEntry(param0: string): void;
					public engineIsCertificateEntry(alias: string): boolean;
					public engineGetCertificateChain(param0: string): java.security.cert.Certificate[];
					public engineGetCreationDate(param0: string): java.util.Date;
				}
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export module utils {
				export class JksKeyStore extends java.security.KeyStore {
					public static class: java.lang.Class<com.mcal.apksigner.utils.JksKeyStore>;
					public constructor();
					public constructor(keyStoreSpi: java.security.KeyStoreSpi, provider: java.security.Provider, type: string);
				}
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export module utils {
				export class KeySet extends java.lang.Object {
					public static class: java.lang.Class<com.mcal.apksigner.utils.KeySet>;
					public constructor(name: string, publicKey: java.security.cert.X509Certificate, privateKey: java.security.PrivateKey, signatureAlgorithm: string, sigBlockTemplate: number[]);
					public setPrivateKey(privateKey: java.security.PrivateKey): void;
					public getPublicKey(): java.security.cert.X509Certificate;
					public getSigBlockTemplate(): number[];
					public setSigBlockTemplate(sigBlockTemplate: number[]): void;
					public getSignatureAlgorithm(): string;
					public setSignatureAlgorithm(signatureAlgorithm: string): void;
					public getPrivateKey(): java.security.PrivateKey;
					public setName(name: string): void;
					public constructor();
					public getName(): string;
					public setPublicKey(publicKey: java.security.cert.X509Certificate): void;
					public constructor(name: string, publicKey: java.security.cert.X509Certificate, privateKey: java.security.PrivateKey, sigBlockTemplate: number[]);
				}
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export module utils {
				export class KeyStoreHelper extends java.lang.Object {
					public static class: java.lang.Class<com.mcal.apksigner.utils.KeyStoreHelper>;
					public static INSTANCE: com.mcal.apksigner.utils.KeyStoreHelper;
					public static loadJks(jksFile: java.io.File, password: string[]): java.security.KeyStore;
					public getProvider(): org.spongycastle.jce.provider.BouncyCastleProvider;
					public static createKeyStore(keystoreFile: java.io.File, password: string[]): java.security.KeyStore;
					public static writeKeyStore(ks: java.security.KeyStore, keystorePath: java.io.File, password: string[]): void;
					public static loadKeyStore(keystoreFile: java.io.File, password: string[]): java.security.KeyStore;
					public static loadBks(bksFile: java.io.File, password: string[]): java.security.KeyStore;
					public static validateKeystorePassword(keystoreFile: java.io.File, password: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module mcal {
		export module apksigner {
			export module utils {
				export class LoadKeystoreException extends java.io.IOException {
					public static class: java.lang.Class<com.mcal.apksigner.utils.LoadKeystoreException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

//Generics information:
//com.android.apksig.internal.util.Pair:2

