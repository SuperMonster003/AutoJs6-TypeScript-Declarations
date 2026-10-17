declare module "npm" {
  import packageManager = require("package_manager");

  namespace npm {
    export type NpmPackageSpec = packageManager.NpmPackageSpec;
    export type NpmCliOptions = packageManager.NpmCliOptions;
    export type NpmCliResult = packageManager.NpmCliResult;
    export type PackageRecord = packageManager.PackageRecord;
    export type OperationResult = packageManager.OperationResult;
    export type PackagePlan = packageManager.PackagePlan;
    export type RemotePackagePlan = packageManager.RemotePackagePlan;
    export type RegistryPackument = packageManager.RegistryPackument;
    export type RegistryPackumentVersion = packageManager.RegistryPackumentVersion;
    export type RegistryPackumentDist = packageManager.RegistryPackumentDist;
    export type RemotePlanResolution = packageManager.RemotePlanResolution;
    export type RemotePlanSelectorKind = packageManager.RemotePlanSelectorKind;
    export type RemotePlanIntegrityStatus = packageManager.RemotePlanIntegrityStatus;
    export type RemotePlanUrlStatus = packageManager.RemotePlanUrlStatus;
    export type SourcePolicy = packageManager.SourcePolicy;
    export type PlanSourceRequest = packageManager.PlanSourceRequest;
    export type PlanRemoveRequest = packageManager.PlanRemoveRequest;
    export type PlanRegistryInstallRequest = packageManager.PlanRegistryInstallRequest;
    export type PlanTarballInstallRequest = packageManager.PlanTarballInstallRequest;
    export type MutationSourceRequest = packageManager.MutationSourceRequest;
    export type MutationRemoveRequest = packageManager.MutationRemoveRequest;
    export type ListOptions = packageManager.ListOptions;
    export type VerifyRequest = packageManager.VerifyRequest;
    export type PruneOptions = packageManager.PruneOptions;

    export interface NpmFacadeStatus {
      readonly schema: "autojs6-node-npm-facade-status-v1";
      readonly status: "bundled_npm_cli" | string;
      readonly aliasFor: "package_manager" | string;
      readonly packageManagerStatus: "npm_cli_and_host_store" | string;
      readonly packageManagerBridge: "npm_cli_and_host_store" | string;
      readonly npmCli: "available" | string;
      readonly registryDownload: "npm_native" | string;
      readonly lifecycleScripts: "npm_default" | string;
      readonly binLinks: "npm_default_android_exec_rules" | string;
      readonly nativePayloads: "android_compatible" | string;
      readonly sourcePolicy: "npm_cli_and_host_store" | string;
      readonly sourceAuthority: "npm_specifier_or_host_store" | string;
      readonly installAuthority: "npm_cli_or_host_package_manager" | string;
      readonly operations: readonly string[];
      readonly delegatedOperations: readonly packageManager.Operation[];
      readonly planOperations: readonly packageManager.PlanOperation[];
      readonly mutationOperations: readonly packageManager.MutationOperation[];
      readonly mutationCapability: "package_manager.mutate" | string;
      readonly mutationConfirmation: "allowMutation_for_host_store_only" | string;
      readonly requiresExpectedIntegrity: boolean;
      readonly rawRegistryAccess: boolean;
      readonly rawExecutables: boolean;
      readonly packageManager: packageManager.DiagnosticStatus;
    }

    export interface NpmFacadePolicy {
      readonly schema: "autojs6-node-npm-facade-policy-v1";
      readonly status: "bundled_npm_cli" | string;
      readonly aliasFor: "package_manager" | string;
      readonly cli: "available" | string;
      readonly npmCli: "available" | string;
      readonly registryDownload: "npm_native" | string;
      readonly tarballInstall: "npm_native" | string;
      readonly lifecycleScripts: "npm_default" | string;
      readonly debugLifecycleScripts: "same_as_release" | string;
      readonly binLinks: "npm_default_android_exec_rules" | string;
      readonly symlinks: "npm_default" | string;
      readonly nativeBuild: "external_toolchain_required" | string;
      readonly nativePayloads: "android_compatible" | string;
      readonly postinstallDownload: "npm_default" | string;
      readonly sourcePolicy: "npm_cli_and_host_store" | string;
      readonly sourceAuthority: "npm_specifier_or_host_store" | string;
      readonly installAuthority: "npm_cli_or_host_package_manager" | string;
      readonly allowedSources: readonly packageManager.AllowedSource[];
      readonly deniedSources: readonly packageManager.DeniedSource[];
      readonly operations: readonly string[];
      readonly delegatedOperations: readonly packageManager.Operation[];
      readonly planOperations: readonly packageManager.PlanOperation[];
      readonly mutationOperations: readonly packageManager.MutationOperation[];
      readonly mutationCapability: "package_manager.mutate" | string;
      readonly mutationConfirmation: "allowMutation_for_host_store_only" | string;
      readonly requiresExpectedIntegrity: boolean;
      readonly rawRegistryAccess: boolean;
      readonly rawExecutables: boolean;
      readonly packageManager: packageManager.DiagnosticPolicy;
    }

    export interface NpmFacadeModule {
      status(): NpmFacadeStatus;
      policy(): NpmFacadePolicy;
      sourcePolicy(): SourcePolicy;
      packageManager(): packageManager.PackageManagerModule;
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
      cli(args: readonly string[], options?: NpmCliOptions): Promise<NpmCliResult>;
      exec(args?: readonly string[], options?: NpmCliOptions): Promise<NpmCliResult>;
      runScript(name: string, args?: readonly string[], options?: NpmCliOptions): Promise<NpmCliResult>;
      installFromRegistry(spec: NpmPackageSpec, options?: NpmCliOptions): Promise<NpmCliResult>;
      publish(spec?: NpmPackageSpec, options?: NpmCliOptions): Promise<NpmCliResult>;
      pack(spec?: NpmPackageSpec, options?: NpmCliOptions): Promise<NpmCliResult>;
    }
  }

  const npm: npm.NpmFacadeModule;
  export = npm;
}
