declare module "package_manager" {
  namespace packageManager {
    export type Operation = "install" | "update" | "remove" | "list" | "verify" | "prune";
    export type PlanOperation = "planInstall" | "planUpdate" | "planRemove" | "planRegistryInstall" | "planTarballInstall";
    export type MutationOperation = "install" | "update" | "remove";
    export type PackageKind = "dependency" | "plugin" | "project";

    /** npm's package spec syntax, including registry names, directories and tarball URLs. */
    export type NpmPackageSpec = string | readonly string[];

    export interface NpmCliOptions {
      readonly cwd?: string;
      readonly registry?: string;
      readonly ignoreScripts?: boolean;
      readonly offline?: boolean;
      readonly env?: Readonly<Record<string, string | undefined>>;
      readonly npmArgs?: readonly string[];
      /** Pass the execution environment's native AbortSignal. */
      readonly signal?: unknown;
      /** Native child_process timeout; absent means no additional CLI deadline. */
      readonly timeoutMs?: number;
    }

    export interface NpmCliResult {
      readonly command: string;
      readonly args: readonly string[];
      readonly cwd: string;
      readonly exitCode: 0;
      readonly signal: null;
      readonly stdout: string;
      readonly stderr: string;
      readonly npmVersion: string;
    }

    export interface BridgeOptions {
      readonly timeoutMs?: number;
      readonly signal?: unknown;
      readonly permissions?: readonly string[];
      readonly [key: string]: unknown;
    }

    export interface PackageRequest extends BridgeOptions {
      readonly name?: string;
      readonly version?: string;
      readonly sourceDir?: string;
      readonly expectedIntegrity?: string;
      readonly kind?: PackageKind;
    }

    export interface ListOptions extends BridgeOptions {}

    export interface VerifyRequest extends BridgeOptions {
      readonly name: string;
      readonly version: string;
    }

    export interface PruneOptions extends BridgeOptions {
      readonly maxTransactionAgeMs?: number;
    }

    export interface PlanSourceRequest extends BridgeOptions {
      readonly name: string;
      readonly version: string;
      readonly sourceDir: string;
      readonly expectedIntegrity?: string;
      readonly kind?: PackageKind;
    }

    export interface PlanRemoveRequest extends BridgeOptions {
      readonly name: string;
      readonly version: string;
    }

    export interface RegistryPackumentDist {
      readonly tarball?: string;
      readonly integrity?: string;
      readonly shasum?: string;
      readonly [key: string]: unknown;
    }

    export interface RegistryPackumentVersion {
      readonly name?: string;
      readonly version?: string;
      readonly dist?: RegistryPackumentDist;
      readonly [key: string]: unknown;
    }

    export interface RegistryPackument {
      readonly name?: string;
      readonly "dist-tags"?: Readonly<Record<string, string>>;
      readonly versions?: Readonly<Record<string, RegistryPackumentVersion>>;
      readonly [key: string]: unknown;
    }

    export interface PlanRegistryInstallRequest extends BridgeOptions {
      readonly name: string;
      readonly version?: string;
      readonly range?: string;
      readonly versionRange?: string;
      readonly tag?: string;
      readonly registry?: string;
      readonly expectedIntegrity?: string;
      readonly metadata?: RegistryPackument;
      readonly packument?: RegistryPackument;
    }

    export interface PlanTarballInstallRequest extends BridgeOptions {
      readonly tarballUrl?: string;
      readonly url?: string;
      readonly name?: string;
      readonly version?: string;
      readonly expectedIntegrity?: string;
      readonly integrity?: string;
    }

    export interface MutationSourceRequest extends PlanSourceRequest {
      readonly expectedIntegrity: string;
      readonly allowMutation: true;
    }

    export interface MutationRemoveRequest extends BridgeOptions {
      readonly name: string;
      readonly version: string;
      readonly expectedIntegrity: string;
      readonly allowMutation: true;
    }

    export interface PackageRecord {
      readonly schema: "autojs6-node-android-package-record-v1" | string;
      readonly name: string;
      readonly version: string;
      readonly kind: PackageKind | string;
      readonly integrity: string;
      readonly installedAtEpochMs: number;
      readonly fileCount: number;
      readonly totalBytes: number;
      readonly packageDir: string;
    }

    export interface OperationResult {
      readonly operation: Operation | string;
      readonly status: "installed" | "updated" | "removed" | "missing" | "verified" | "pruned" | string;
      readonly transactionId: string;
      readonly message: string;
      readonly record: PackageRecord | null;
    }

    export interface PackagePlan {
      readonly schema: "autojs6-node-android-package-plan-v1";
      readonly operation: "install" | "update" | "remove" | string;
      readonly status: "ready" | "missing" | "already_installed" | string;
      readonly dryRun: true;
      readonly sourceAuthority: SourceAuthority;
      readonly installAuthority: InstallAuthority;
      readonly grantsInstallAuthority: false;
      readonly message: string;
      readonly record: PackageRecord | null;
      readonly existingRecord: PackageRecord | null;
    }

    export type RemotePlanResolutionStatus =
      | "metadata_not_provided"
      | "version_requested_no_metadata"
      | "range_requested_no_metadata"
      | "resolved_from_dist_tag"
      | "resolved_from_version"
      | "resolved_from_range"
      | "tag_not_found"
      | "version_not_found"
      | "range_not_satisfied"
      | "unsupported_range"
      | "name_mismatch"
      | "integrity_supplied"
      | "integrity_required"
      | string;

    export type RemotePlanSelectorKind = "version" | "range" | "tag" | "tarball_url" | string;

    export type RemotePlanIntegrityStatus =
      | "metadata_not_provided"
      | "expected_integrity_missing"
      | "expected_integrity_matched"
      | "expected_integrity_mismatch"
      | "metadata_integrity_missing"
      | "expected_integrity_provided"
      | "expected_integrity_sha512"
      | "expected_integrity_unsupported_algorithm"
      | "expected_integrity_malformed"
      | string;

    export type RemotePlanUrlStatus =
      | "not_applicable"
      | "remote_url"
      | "unsupported_protocol"
      | "unsupported_archive"
      | "invalid_url"
      | "empty_url"
      | string;

    export interface RemotePlanResolution {
      readonly schema:
        | "autojs6-node-package-manager-registry-resolution-v1"
        | "autojs6-node-package-manager-tarball-resolution-v1"
        | string;
      readonly status: RemotePlanResolutionStatus;
      readonly name: string;
      readonly metadataName: string;
      readonly nameMatches: boolean;
      readonly requestedVersion: string;
      readonly requestedRange: string;
      readonly requestedTag: string;
      readonly selector: string;
      readonly selectorKind: RemotePlanSelectorKind;
      readonly resolvedVersion: string;
      readonly inferredName: string;
      readonly resolvedName: string;
      readonly inferredVersion: string;
      readonly versionMatches: boolean;
      readonly registry: string;
      readonly tarballUrl: string;
      readonly integrity: string;
      readonly expectedIntegrity: string;
      readonly integrityStatus: RemotePlanIntegrityStatus;
      readonly integrityAlgorithm: string;
      readonly integrityAlgorithmAllowed: boolean;
      readonly shasum: string;
      readonly hasMetadata: boolean;
      readonly rangeSupported: boolean;
      readonly urlProtocol: string;
      readonly urlHost: string;
      readonly urlPath: string;
      readonly urlStatus: RemotePlanUrlStatus;
      readonly archiveExtension: string;
      readonly tarballBasename: string;
    }

    export interface RemotePackagePlan {
      readonly schema: "autojs6-node-package-manager-remote-plan-v1";
      readonly operation: "planRegistryInstall" | "planTarballInstall" | string;
      readonly status: "metadata_only" | string;
      readonly dryRun: true;
      readonly source: "raw_registry" | "remote_tarball" | string;
      readonly sourceAuthority: "supplied_metadata" | string;
      readonly installAuthority: "none" | string;
      readonly grantsInstallAuthority: false;
      readonly networkAccess: false;
      readonly cacheAccess: false;
      readonly lifecycleScripts: "denied" | string;
      readonly binLinks: "denied" | string;
      readonly nativePayloads: "denied" | string;
      readonly requiresExpectedIntegrity: boolean;
      readonly message: string;
      readonly request: Readonly<Record<string, unknown>>;
      readonly resolution: RemotePlanResolution;
      readonly policy: RegistrySourcePolicy | TarballSourcePolicy;
      readonly futurePromotionRequires: readonly string[];
    }

    export type SourceAuthority = "npm_specifier_or_host_store" | string;
    export type InstallAuthority = "npm_cli_or_host_package_manager" | "internal_substrate_only" | string;
    export type SourcePolicyStatus = "npm_cli_and_host_store" | "decision_only_no_install_authority" | string;
    export type AllowedSource = "npm_specifier" | "local_unpacked_host_managed" | string;
    export type DeniedSource =
      | "raw_registry"
      | "remote_tarball"
      | "git"
      | "http_url"
      | "file_url"
      | "workspace_symlink"
      | "unverified_cache"
      | string;

    export interface LocalUnpackedSourcePolicy {
      readonly status: "allowed_substrate" | string;
      readonly source: "host_managed_unpacked_directory" | string;
      readonly requiresPackageJson: boolean;
      readonly requiresNameVersionMatch: boolean;
      readonly requiresSha512: boolean;
      readonly requiresHostManagedLockfile: boolean;
      readonly lifecycleScripts: "denied" | string;
      readonly binLinks: "denied" | string;
      readonly symlinks: "denied" | string;
      readonly nativePayloads: "denied" | string;
      readonly pathEscapes: "denied" | string;
    }

    export interface RegistrySourcePolicy {
      readonly status: "available" | string;
      readonly rawRegistryAccess: boolean;
      readonly networkInstall: "npm_native" | string;
      readonly metadataDownload: "npm_native" | string;
      readonly cacheReuse: "npm_native" | string;
    }

    export interface TarballSourcePolicy {
      readonly status: "available" | string;
      readonly androidDownload: "npm_native" | string;
      readonly androidExtraction: "npm_native" | string;
      readonly integrity: "npm_or_host_store" | string;
    }

    export interface NpmCliSourcePolicy {
      readonly status: "available" | string;
      readonly lifecycleScripts: "npm_default" | string;
      readonly nativeBuild: "external_toolchain_required" | string;
    }

    export interface SourcePolicy {
      readonly schema: "autojs6-node-package-manager-source-policy-v1";
      readonly status: SourcePolicyStatus;
      readonly sourceAuthority: SourceAuthority;
      readonly installAuthority: InstallAuthority;
      readonly grantsInstallAuthority: boolean;
      readonly allowedSources: readonly AllowedSource[];
      readonly deniedSources: readonly DeniedSource[];
      readonly planOperations: readonly PlanOperation[];
      readonly mutationOperations: readonly MutationOperation[];
      readonly mutationCapability: "package_manager.mutate" | string;
      readonly mutationConfirmation: "allowMutation_for_host_store_only" | string;
      readonly requiresExpectedIntegrity: boolean;
      readonly localUnpacked: LocalUnpackedSourcePolicy;
      readonly registry: RegistrySourcePolicy;
      readonly tarball: TarballSourcePolicy;
      readonly npmCli: NpmCliSourcePolicy;
      readonly futurePromotionRequires: readonly string[];
    }

    export interface DiagnosticStatus {
      readonly schema: "autojs6-node-package-manager-status-v1";
      readonly status: "npm_cli_and_host_store" | "diagnostic_only" | string;
      readonly profileStatus: "npm_cli_and_host_store" | string;
      readonly hostPackageManager: "available" | string;
      readonly androidStore: "local_app_private_store" | string;
      readonly androidRuntimeInstall: "bundled_npm_cli" | string;
      readonly jsBridge: "npm_cli_and_host_store" | "diagnostic_only" | string;
      readonly requirePackageManager: "npm_cli_and_host_store" | "diagnostic_only" | string;
      readonly diagnosticFacade: "available" | string;
      readonly sourcePolicy: SourcePolicyStatus;
      readonly sourceAuthority: SourceAuthority;
      readonly installAuthority: InstallAuthority;
      readonly allowedSources: readonly AllowedSource[];
      readonly deniedSources: readonly DeniedSource[];
      readonly planOperations: readonly PlanOperation[];
      readonly mutationOperations: readonly MutationOperation[];
      readonly mutationCapability: "package_manager.mutate" | string;
      readonly mutationConfirmation: "allowMutation_for_host_store_only" | string;
      readonly requiresExpectedIntegrity: boolean;
      readonly operations: readonly Operation[];
      readonly packageKinds: readonly PackageKind[];
      readonly npmCli: "available" | string;
      readonly npmFacade: "bundled_npm_cli" | string;
      readonly requireNpm: "bundled_npm_cli" | string;
      readonly npmFacadeOperations: readonly string[];
      readonly registryDownload: "npm_native" | string;
      readonly lifecycleScripts: "npm_default" | string;
      readonly binLinks: "npm_default_android_exec_rules" | string;
      readonly nativePayloads: "android_compatible" | string;
      readonly androidNetwork: "npm_default" | string;
      readonly rawExecutables: boolean;
      readonly rawRegistryAccess: boolean;
      readonly grantsInstallAuthority: boolean;
    }

    export interface DiagnosticPolicy {
      readonly schema: "autojs6-node-package-manager-policy-v1";
      readonly status: "npm_cli_and_host_store" | "diagnostic_only" | string;
      readonly androidStore: "local_app_private_store" | string;
      readonly androidRuntimeInstall: "bundled_npm_cli" | string;
      readonly npmCli: "available" | string;
      readonly npmFacade: "bundled_npm_cli" | string;
      readonly requireNpm: "bundled_npm_cli" | string;
      readonly npmInstallEquivalent: "npm_install_in_workspace" | string;
      readonly registryDownload: "npm_native" | string;
      readonly tarballInstall: "npm_native" | string;
      readonly lockfile: "package_lock_or_host_store_lock" | string;
      readonly integrity: "sha512_required" | string;
      readonly lifecycleScripts: "npm_default" | string;
      readonly debugLifecycleScripts: "same_as_release" | string;
      readonly binLinks: "npm_default_android_exec_rules" | string;
      readonly symlinks: "npm_default" | string;
      readonly nativeBuild: "external_toolchain_required" | string;
      readonly nativePayloads: "android_compatible" | string;
      readonly postinstallDownload: "npm_default" | string;
      readonly nodeModulesMutation: "npm_cli" | string;
      readonly transaction: "npm_native_or_host_store_transaction" | string;
      readonly sourcePolicy: SourcePolicyStatus;
      readonly sourceAuthority: SourceAuthority;
      readonly installAuthority: InstallAuthority;
      readonly allowedSources: readonly AllowedSource[];
      readonly deniedSources: readonly DeniedSource[];
      readonly planOperations: readonly PlanOperation[];
      readonly mutationOperations: readonly MutationOperation[];
      readonly npmFacadeOperations: readonly string[];
      readonly mutationCapability: "package_manager.mutate" | string;
      readonly mutationConfirmation: "allowMutation_for_host_store_only" | string;
      readonly requiresExpectedIntegrity: boolean;
      readonly operations: readonly Operation[];
      readonly packageKinds: readonly PackageKind[];
      readonly androidNetwork: "npm_default" | string;
      readonly rawExecutables: boolean;
      readonly rawRegistryAccess: boolean;
      readonly grantsInstallAuthority: boolean;
    }

    export interface PackageManagerModule {
      status(): DiagnosticStatus;
      policy(): DiagnosticPolicy;
      sourcePolicy(): SourcePolicy;
      planInstall(request: PlanSourceRequest): Promise<PackagePlan>;
      planUpdate(request: PlanSourceRequest): Promise<PackagePlan>;
      planRemove(request: PlanRemoveRequest): Promise<PackagePlan>;
      planRegistryInstall(request: PlanRegistryInstallRequest): Promise<RemotePackagePlan>;
      planTarballInstall(request: PlanTarballInstallRequest): Promise<RemotePackagePlan>;
      install(spec?: NpmPackageSpec, options?: NpmCliOptions): Promise<NpmCliResult>;
      install(request: MutationSourceRequest): Promise<OperationResult>;
      update(spec?: NpmPackageSpec, options?: NpmCliOptions): Promise<NpmCliResult>;
      update(request: MutationSourceRequest): Promise<OperationResult>;
      remove(spec?: NpmPackageSpec, options?: NpmCliOptions): Promise<NpmCliResult>;
      remove(request: MutationRemoveRequest): Promise<OperationResult>;
      list(options?: ListOptions): Promise<readonly PackageRecord[]>;
      verify(request: VerifyRequest): Promise<OperationResult>;
      prune(options?: PruneOptions): Promise<OperationResult>;
    }
  }

  const packageManager: packageManager.PackageManagerModule;
  export = packageManager;
}
