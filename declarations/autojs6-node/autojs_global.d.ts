declare namespace AutoJs6Node {
  /** Native module compile-cache diagnostics; Node does not expose hit/miss statistics. */
  export interface CompileCacheProfile {
    readonly requested: boolean;
    readonly enabled: boolean;
    readonly status: string;
    readonly statusCode: string;
    readonly directory: string;
    readonly loader: "node_native_cjs_esm";
    readonly customLoader: false;
    readonly flushSupported: boolean;
    readonly flushAttempted: boolean;
    readonly flushed: boolean;
    readonly hitMissStatus: "not_exposed_by_node" | "unavailable" | string;
    readonly userControlExposed: true;
    readonly appPrivateOnly: false;
    readonly [key: string]: unknown;
  }

  export interface FeatureFlagDescriptor {
    readonly id: string;
    readonly diagnosticName: string;
    readonly gradleProperty: string | null;
    readonly defaultEnabled: boolean;
    readonly enabled: boolean;
    readonly buildTimeOverrideAllowed: boolean;
    readonly projectJsonOverrideAllowed: boolean;
    readonly packagedApkOverrideAllowed: boolean;
    readonly buildOnly: boolean;
    readonly debugOnly: boolean;
    readonly projectAllowed: boolean;
    readonly packagedAllowed: boolean;
    readonly releaseForbidden: boolean;
    readonly securityLevel: "low" | "medium" | "high" | "critical" | string;
    /** Plugin support status within the documented scope, independent of upstream Node API stability. */
    readonly status: "stable" | "disabled" | "unsupported" | string;
  }

  /**
   * Since M23.3 Node's own CommonJS / ESM loaders run the module graph; the runtime only registers
   * synchronous `module.registerHooks` for the `autojs6:*` runtime modules, the request-level
   * builtin gate, host-provided module sources and the entry's inline source. The request keys
   * `esmEnabled` / `dynamicImportEnabled` no longer gate anything.
   */
  export interface EsmLoaderProfile {
    readonly status: "node_native_loader" | string;
    readonly defaultEnabled: true;
    readonly requestEnabled: true;
    readonly dynamicImportDefaultEnabled: true;
    readonly dynamicImportEnabled: true;
    readonly implementation: "node_esm_loader_with_module_register_hooks" | string;
    readonly mjsEntry: "native" | string;
    readonly packageTypeModuleEntry: "native" | string;
    readonly topLevelAwait: "native" | string;
    readonly staticImport: "native" | string;
    readonly dynamicImport: "native" | string;
    readonly liveBindings: "native" | string;
    readonly cyclicDependencies: "native" | string;
    readonly packageExports: "native" | string;
    readonly packageImports: "native" | string;
    readonly jsonImportAttributes: "native" | string;
    readonly importMeta: "native" | string;
    /** `require(esm)` is Node's own. */
    readonly cjsInterop: "native_require_esm" | string;
    readonly moduleSources: "served_by_register_hooks" | string;
    readonly packagedBehavior: "real_package_corpus" | string;
    readonly sourceMaps: "sourceURL_stack_only" | string;
    readonly loaderHooks: "module_register_hooks" | string;
    readonly rawNodeModuleLoader: "native" | string;
    readonly networkImports: "unavailable_as_node" | string;
    readonly fileUrlImports: "local_file_urls" | string;
    readonly dataUrlImports: "native" | string;
    readonly absolutePathImports: "allowed_within_android_app_permissions" | string;
    readonly workingDirectoryEscape: "allowed_within_android_app_permissions" | string;
    readonly disabledBuiltinImports: "request_gated" | string;
    readonly encryptedGraphParity: "provider_served_by_register_hooks" | string;
    readonly pendingEvaluationCleanup: "native" | string;
    readonly realEsmCorpus: "complete" | string;
    readonly rawNodeLoader: true;
    readonly customConditions: "native" | string;
  }

  /**
   * How bare specifiers meet the workspace `node_modules`: an installed package shadows only the
   * runtime modules listed in `npmShadowableModules` (the ones that stand in for real npm
   * packages); AutoJs6 capability facades, the other runtime modules, Node builtins and the
   * `node:` / `autojs6:` prefixes answer regardless, in `require`, `require.resolve` and `import`.
   */
  export interface ModuleResolutionProfile {
    readonly schema: "autojs6-node-module-resolution-v1";
    readonly status: "stable" | string;
    /** Since M23.3 Node's own resolver walks node_modules; the hooks only add host-served sources. */
    readonly nodeModulesLookup: "node_native_resolution" | string;
    readonly npmPrecedence: "npm_shims_only" | string;
    readonly npmShadowableModules: readonly string[];
    readonly runtimeModulesShadowable: false;
    readonly hostBridgeModulesShadowable: false;
    readonly nodeBuiltinsShadowable: false;
    readonly reservedPrefixes: readonly string[];
    readonly appliesTo: readonly string[];
  }

  export interface PackageManagerProfile {
    readonly status: "npm_cli_and_host_store" | "disabled_by_default" | string;
    readonly defaultEnabled: boolean;
    readonly targetProfiles: readonly string[];
    readonly hostPackageManager: "available" | string;
    readonly androidStore: "local_app_private_store" | string;
    readonly androidRuntimeInstall: "bundled_npm_cli" | string;
    readonly npmCli: "available" | "debug_only" | string;
    readonly terminalCli: "host_terminal_node_npm_corepack_launcher" | string;
    readonly npmFacade: "bundled_npm_cli" | string;
    readonly requireNpm: "bundled_npm_cli" | string;
    readonly npmInstallEquivalent: "npm_install_in_workspace" | string;
    readonly registryDownload: "npm_native" | "denied" | string;
    readonly tarballInstall: "npm_native" | string;
    readonly lockfile: "package_lock_or_host_store_lock" | string;
    readonly integrity: "sha512_required" | string;
    readonly lifecycleScripts: "npm_default" | "debug_only" | string;
    readonly debugLifecycleScripts: "same_as_release" | "debug_only" | string;
    readonly binLinks: "npm_default_android_exec_rules" | string;
    readonly symlinks: "npm_default" | string;
    readonly nativeBuild: "external_toolchain_required" | string;
    readonly nativePayloads: "android_compatible" | "signed_packaged_only" | string;
    readonly postinstallDownload: "npm_default" | string;
    readonly nodeModulesMutation: "npm_cli" | string;
    readonly transaction: "npm_native_or_host_store_transaction" | string;
    readonly sourcePolicy: "npm_cli_and_host_store" | "decision_only_no_install_authority" | string;
    readonly sourceAuthority: "npm_specifier_or_host_store" | string;
    readonly installAuthority: "npm_cli_or_host_package_manager" | "internal_substrate_only" | string;
    readonly allowedSources: readonly string[];
    readonly deniedSources: readonly string[];
    readonly planOperations: readonly string[];
    readonly mutationOperations: readonly string[];
    readonly npmFacadeOperations: readonly string[];
    readonly mutationCapability: "package_manager.mutate" | string;
    readonly mutationConfirmation: "allowMutation_for_host_store_only" | string;
    readonly operations: readonly string[];
    readonly packageKinds: readonly string[];
    readonly jsBridge: "npm_cli_and_host_store" | "diagnostic_only" | "not_exposed" | string;
    readonly requirePackageManager: "npm_cli_and_host_store" | "diagnostic_only" | "denied" | string;
    readonly diagnosticFacade: "available" | string;
    readonly packagedBehavior: "external_runtime_required" | string;
    readonly androidNetwork: "npm_default" | string;
    readonly rawExecutables: boolean;
    readonly rawRegistryAccess: boolean;
  }

  export interface StdlibProfile {
    readonly status: "native_builtins_with_host_policies" | "desktop_opt_in" | string;
    readonly defaultEnabled: boolean;
    readonly targetProfiles: readonly string[];
    readonly conformanceSet: "node24_safe_stdlib_subset" | string;
    readonly moduleStatus: Readonly<Record<string, "limited_network_gated" | "disabled" | string>>;
    readonly conformanceModules: readonly string[];
    readonly cjsAliases: "bare_and_node_prefix" | string;
    readonly esmImports: "native" | string;
    readonly shadowing: "builtin_precedence" | string;
    /** Since M23.2 `process.getBuiltinModule()` answers from Node's own builtin inventory. */
    readonly processGetBuiltinModule: "native_inventory" | string;
    readonly androidDifferences: "documented_stable" | string;
    readonly androidUnsupported: readonly string[];
    readonly resourceLimits: "bounded_callbacks_streams_crypto_zlib" | string;
    readonly npmCorpus: "real_npm_21_package_corpus" | string;
    readonly desktopDifferential: "documented_android_differences" | string;
    readonly packagedBehavior: "external_runtime_required" | string;
    readonly rawDesktopParity: boolean;
    readonly rawNativeHandles: boolean;
    readonly unrestrictedNetwork: boolean;
    readonly broadTerminal: boolean;
  }

  export interface ProcessParityProfile {
    readonly status: "native_process_with_android_denied_apis" | "desktop_opt_in" | string;
    readonly defaultEnabled: boolean;
    readonly targetProfiles: readonly string[];
    readonly argv: "autojs6_node_plus_entry" | string;
    readonly env: "controlled_string_map" | string;
    readonly envMutation: "script_local_string_coercing_mutable" | string;
    readonly envSources: "request_map_plus_safe_defaults" | string;
    readonly envDefaultKeys: readonly string[];
    readonly envFilteredKeys: readonly string[];
    /** Since M23.1 `process.cwd()` / `process.chdir()` are native; the execution enters its working directory with a real chdir. */
    readonly cwd: "native" | string;
    readonly chdir: "native" | string;
    readonly exit: "lifecycle_mapped_process_exit" | string;
    readonly signals: "native" | string;
    readonly versions: "native" | string;
    readonly resourceUsage: "native_with_fallback" | string;
    readonly timing: "native_with_fallback" | string;
    readonly permission: "autojs6_readonly_capability_query" | string;
    readonly report: "native" | string;
    readonly stdio: "bounded_non_tty" | string;
    readonly moduleAliases: readonly string[];
    readonly androidDifferences: "documented_stable" | string;
    readonly androidUnsupported: readonly string[];
    readonly packagedBehavior: "external_runtime_required" | string;
    readonly rawDesktopParity: boolean;
    readonly rawEnvInheritance: boolean;
    readonly rawSignals: boolean;
    readonly rawProcessHandles: boolean;
    readonly nativeBindings: boolean;
  }

  export interface PackagedCapabilityProfile {
    readonly status: "declaration_metadata_enforced" | string;
    readonly defaultEnabled: boolean;
    readonly targetProfiles: readonly string[];
    readonly metadataSchema: "autojs6-packaged-capability-metadata-v1" | string;
    readonly metadataSources: readonly string[];
    readonly permissionManifest: "node_permissions_enforced" | string;
    readonly androidManifestSynthesis: "bridge_android_permissions_only" | string;
    readonly profileMetadata: "diagnostic_only" | string;
    readonly nodeBuiltins: "declared_metadata_only_no_authority" | string;
    readonly nativeAssets: "declared_metadata_only_denied" | string;
    readonly filesystemRoots: "declared_metadata_only_scoped_default" | string;
    readonly network: "network_capability_maps_android_internet" | string;
    readonly longRunning: "interactive_long_running_via_execution_mode" | string;
    readonly undeclaredCapabilities: "rejected_before_dispatch" | string;
    readonly manifestConsistency: "project_package_metadata_verified" | string;
    readonly packagedRuntimeDescriptor: "version_vector_required" | string;
    readonly packagedLaunchDescriptor: "scoped_internal_metadata" | string;
    readonly rawProfilePromotion: boolean;
    readonly rawBuiltinPromotion: boolean;
    readonly nativeAssetLoading: boolean;
    readonly expandedFilesystemRoots: boolean;
    readonly unreviewedAndroidPermissions: boolean;
  }

  export interface PackagedCapabilityMetadataNetwork {
    readonly requested: boolean;
    readonly declaredCapability: boolean;
    readonly androidPermissions: readonly string[];
  }

  export interface PackagedCapabilityMetadata {
    readonly schema: "autojs6-packaged-capability-metadata-v1" | string;
    readonly status: "absent" | string;
    readonly profile: string;
    readonly requestedProfiles: readonly string[];
    readonly builtins: readonly string[];
    readonly nativeAssets: readonly string[];
    readonly filesystemRoots: readonly string[];
    readonly executionMode: string;
    readonly longRunning: boolean;
    readonly network: PackagedCapabilityMetadataNetwork;
    readonly metadataOnly: boolean;
    readonly grantsAuthority: boolean;
    readonly sources: readonly string[];
    readonly warnings: readonly string[];
  }

  export interface PluginSystemProfile {
    readonly status: "local_js_plugins" | string;
    readonly defaultEnabled: boolean;
    readonly targetProfiles: readonly string[];
    readonly manager: "js_only_local_manager_v1" | string;
    readonly pluginRoot: "project_local_plugins_directory" | string;
    readonly installMode: "already_present_current_execution" | string;
    readonly operations: readonly string[];
    readonly permissionModel: "exact_plugin_id_plus_requested_permissions" | string;
    readonly hostManifestEnforcement: "required_before_install_load_start" | string;
    readonly overDeclaredPluginCapabilities: "rejected_before_code_execution" | string;
    readonly pluginNamespacePermissions: "rejected_in_manifest" | string;
    readonly nativePlugins: "node_addon_dependencies" | string;
    readonly packagedDistribution: "local_checked_files_only" | string;
    readonly resourceOwnership: "plugin_lifecycle_context" | string;
    readonly debugReload: "debug_only" | string;
    readonly downloadInstaller: boolean;
    readonly nativeAddonLoading: boolean;
    readonly androidPluginApkBridge: boolean;
    readonly marketplaceInstall: boolean;
    readonly persistedGlobalState: boolean;
    readonly grantsHostCapabilities: boolean;
  }

  export interface PackageIntegrityProfile {
    readonly status: "host_store_integrity" | string;
    readonly defaultEnabled: boolean;
    readonly targetProfiles: readonly string[];
    readonly policySchema: "autojs6-node-package-lock-integrity-policy-v1" | string;
    readonly lockfile: "autojs6-lock.json" | string;
    readonly androidRecordSchema: "autojs6-node-android-package-record-v1" | string;
    readonly hashAlgorithm: "sha512" | string;
    readonly hashFormat: "ssri_sha512_base64" | string;
    readonly androidPackageManager: "transactional_local_store" | string;
    readonly pluginPackages: "local_checked_files" | string;
    readonly nativeAddons: "node_android_loader" | string;
    readonly signatureScheme: "autojs6-package-signature-v1" | string;
    readonly signaturePolicy: "plugin_archives_only_native_addons_use_node" | string;
    readonly rollback: "staging_restore_previous_on_failure" | string;
    readonly cacheCleanup: "staging_prune_and_reinstall_required" | string;
    readonly corruptionRecovery: "verify_mismatch_reinstall_required" | string;
    readonly lockfileAuthority: "host_managed_required" | string;
    readonly recoveryActions: readonly string[];
    readonly subjects: readonly string[];
    readonly unsafePackageExecution: boolean;
    readonly rawRegistryInstall: boolean;
    readonly unsignedPluginInstall: boolean;
    readonly unsignedNativeAddonLoad: boolean;
    readonly lifecycleScripts: boolean;
    readonly postinstallDownloads: boolean;
    readonly unverifiedCacheReuse: boolean;
  }

  export interface BridgePermissionsReport {
    readonly version: number;
    readonly enforced: boolean;
    readonly permissions: readonly string[];
    readonly normalizedPermissions: readonly string[];
    readonly sources: readonly string[];
    readonly knownCapabilities: readonly string[];
    readonly unknownPermissions: readonly string[];
    readonly androidPermissions: readonly string[];
    readonly serviceRequired: boolean;
    readonly packagedMetadata: PackagedCapabilityMetadata;
    readonly warnings: readonly string[];
  }

  export interface ProfileSelectionProfileDescriptor {
    readonly id: "safe_default" | "pro_compat_opt_in" | "desktop_compat_opt_in" | "debug_unsafe_lab" | string;
    readonly requested: boolean;
    readonly effective: boolean;
    readonly available: boolean;
    readonly status: "effective" | "diagnostic_only" | string;
    readonly description: string;
  }

  export interface ProfileSelectionHighRiskCapability {
    readonly id: string;
    readonly source: "permission_manifest" | "feature_flag" | string;
    readonly declared: boolean;
    readonly effectiveProfile: "safe_default" | string;
    readonly requiredProfile: "safe_default" | "pro_compat_opt_in" | "desktop_compat_opt_in" | "debug_unsafe_lab" | string;
    readonly profilePromoted?: boolean;
    readonly requiredAndroidPermissions?: readonly string[];
    readonly enabledByDefault?: boolean;
    readonly status?: string;
    readonly securityLevel?: "high" | "critical" | string;
    readonly releaseForbidden?: boolean;
  }

  export interface ProfileSelectionDeclarationExamples {
    readonly nodePermissions: readonly string[];
    readonly projectJson: {
      readonly node: {
        readonly permissions: readonly string[];
      };
    };
    readonly packageJson: {
      readonly autojs6: {
        readonly node: {
          readonly permissions: readonly string[];
        };
      };
    };
  }

  export interface ProfileSelectionFailureHint {
    readonly schema: "autojs6-node-profile-selection-failure-hint-v1" | string;
    readonly module: string;
    readonly method: string;
    readonly effectiveProfile: "safe_default" | string;
    readonly requiredProfiles: readonly string[];
    readonly requiredNodePermissions: readonly string[];
    readonly requiredAndroidPermissions: readonly string[];
    /** False in the current runtime: profile labels are diagnostic metadata and cannot grant capabilities. */
    readonly profileSelectionRequired: boolean;
    readonly message: string;
    readonly declarationHint: string;
    readonly declarationExamples: ProfileSelectionDeclarationExamples;
  }

  export interface ProfileSelectionFailureHints {
    readonly capabilityNotDeclared: ProfileSelectionFailureHint;
    readonly profilePromotionBlocked: string;
  }

  export interface ProfileSelectionDiagnostics {
    readonly schema: "autojs6-node-profile-selection-diagnostics-v1" | string;
    readonly status: "diagnostic_only" | string;
    readonly source: string;
    readonly defaultProfile: "safe_default" | string;
    readonly selectedProfile: "safe_default" | string;
    readonly effectiveProfile: "safe_default" | string;
    readonly declaredProfile: string;
    readonly requestedProfiles: readonly string[];
    readonly selectionMode: "safe_default_effective_metadata_only" | string;
    readonly profilePromotion: boolean;
    readonly userSelectable: boolean;
    readonly projectSettingsSupported: boolean;
    readonly packagedSettingsSupported: boolean;
    readonly debugProfileReleaseDenied: boolean;
    readonly metadataOnly: boolean;
    readonly grantsAuthority: boolean;
    readonly declaredNodePermissions: readonly string[];
    readonly declaredAndroidPermissions: readonly string[];
    readonly profileCatalog: readonly ProfileSelectionProfileDescriptor[];
    readonly highRiskCapabilities: readonly ProfileSelectionHighRiskCapability[];
    readonly blockedProfilePromotions: readonly string[];
    readonly failureHints: ProfileSelectionFailureHints;
    readonly warnings: readonly string[];
  }

  export interface ProfileRollbackState {
    readonly id: "safe_default" | "pro_compat_opt_in" | "desktop_compat_opt_in" | "debug_unsafe_lab" | string;
    readonly property: string;
    readonly enabled: boolean;
    readonly rollbackAction: string;
    readonly fallbackProfile: "safe_default" | string;
    readonly packagedAction: string;
  }

  export interface CapabilityRollbackState {
    readonly id: string;
    readonly profile: "safe_default" | "pro_compat_opt_in" | "desktop_compat_opt_in" | "debug_unsafe_lab" | "pro_or_desktop" | string;
    readonly property: string;
    readonly enabled: boolean;
    readonly rollbackAction: string;
    readonly fallbackProfile: "safe_default" | string;
  }

  export interface ProfileRollbackTrigger {
    readonly id: "native_crash" | "bridge_provider_crash" | "stress_regression" | "security_corpus_regression" | "packaged_apk_regression" | string;
    readonly evidence: string;
    readonly fallbackProfile: "safe_default" | string;
    readonly action: string;
  }

  export interface ProfileRollbackPackagedDowngrade {
    readonly strategy: "publish_safe_profile_patch_or_remove_promoted_metadata" | string;
    readonly authority: "metadata_only_no_authority" | string;
    readonly publishSafeProfilePatch: boolean;
    readonly remoteKillSwitchAvailable: boolean;
    readonly remoteKillSwitchPolicy: "rejected_v1_1_publish_safe_profile_patch" | string;
    readonly requiresUserDisclosure: boolean;
    readonly actions: readonly string[];
  }

  export interface ProfileRollbackReleasePolicy {
    readonly releaseBuildForbidsDebugUnsafeLab: boolean;
    readonly releaseBuildHasFeatureGates: boolean;
    readonly stableFeaturesIncluded: boolean;
    readonly safeProfileReleaseFallback: boolean;
    readonly runtimePoliciesRemainEnforced: boolean;
  }

  export interface ProfileRollbackPolicy {
    readonly schema: "autojs6-node-profile-rollback-policy-v1" | string;
    readonly status: "stable_features" | string;
    readonly defaultProfile: "safe_default" | string;
    readonly effectiveProfile: "safe_default" | string;
    readonly rollbackTargetProfile: "safe_default" | string;
    readonly crashFallbackProfile: "safe_default" | string;
    readonly stressFallbackProfile: "safe_default" | string;
    readonly profilePromotion: boolean;
    readonly userSelectable: boolean;
    readonly metadataOnly: boolean;
    readonly grantsAuthority: boolean;
    readonly safeDefaultAlwaysAvailable: boolean;
    readonly independentProfileDisable: boolean;
    readonly profileKillSwitches: Readonly<Record<string, string>>;
    readonly capabilityKillSwitches: Readonly<Record<string, string>>;
    readonly profileStates: readonly ProfileRollbackState[];
    readonly capabilityStates: readonly CapabilityRollbackState[];
    readonly rollbackTriggers: readonly ProfileRollbackTrigger[];
    readonly packagedDowngrade: ProfileRollbackPackagedDowngrade;
    readonly releasePolicy: ProfileRollbackReleasePolicy;
    readonly pending: readonly string[];
  }

  export interface PrivacyDisclosureSurface {
    readonly id: string;
    readonly capability: string;
    readonly profile: "safe_default" | "pro_compat_opt_in" | "desktop_compat_opt_in" | "debug_unsafe_lab" | string;
    readonly androidPermissions: readonly string[];
    readonly requiresUserPrompt: boolean;
    readonly requiresForegroundDisclosure: boolean;
    readonly requiresNotification: boolean;
    readonly requiresSettingsIntent: boolean;
    readonly promptChannel: string;
    readonly disclosureChannel: string;
    readonly settingsIntent: string | null;
    readonly packagedBehavior: "deny_without_reviewed_disclosure_manifest" | string;
    readonly runtimeStatus: "fail_closed_until_disclosure" | string;
    readonly promotionBlockedUntil: "user_prompt_and_foreground_disclosure_implemented" | string;
    readonly implicitGrantAllowed: boolean;
    readonly authority: "metadata_only_no_authority" | string;
  }

  export interface PrivacyDisclosureChannel {
    readonly id: string;
    readonly status: "platform_controlled" | "required_before_promotion" | "required_before_packaged_promotion" | "diagnostic_only" | string;
    readonly requiredFor: readonly string[];
    readonly grantsAuthority: boolean;
  }

  export interface PrivacyDisclosurePackagedPolicy {
    readonly schema: "autojs6-node-packaged-disclosure-manifest-v1" | string;
    readonly status: "host_policy_metadata" | string;
    readonly metadataOnly: boolean;
    readonly grantsAuthority: boolean;
    readonly implicitHighPrivilegeDenied: boolean;
    readonly requiresDisclosureManifest: boolean;
    readonly reviewedManifestRequiredForPromotion: boolean;
    readonly denyUndeclaredHighRiskSurfaces: boolean;
    readonly permissionSynthesisRequiresReviewedDisclosure: boolean;
    readonly defaultAction: "deny_without_reviewed_disclosure_manifest" | string;
    readonly manifestKeys: readonly string[];
  }

  export interface PrivacyDisclosureDoctorPrivacy {
    readonly scriptContentsIncluded: boolean;
    readonly environmentValuesIncluded: boolean;
    readonly pathsRedacted: boolean;
    readonly surfaceMetadataOnly: boolean;
  }

  export interface PrivacyDisclosureAutomationImplications {
    readonly automaticCrashCircuitBreaker: "future_metadata_only_safe_profile_fallback" | string;
    readonly crashEvidencePrivacy: "metadata_only_no_script_contents" | string;
    readonly remotePackagedKillSwitch: "rejected_v1_1_publish_safe_profile_patch" | string;
    readonly requiresDisclosureBeforeReenable: boolean;
    readonly grantsAuthority: boolean;
  }

  export interface PrivacyDisclosurePolicy {
    readonly schema: "autojs6-node-privacy-disclosure-policy-v1" | string;
    readonly status: "host_policy_metadata" | string;
    readonly defaultProfile: "safe_default" | string;
    readonly effectiveProfile: "safe_default" | string;
    readonly metadataOnly: boolean;
    readonly grantsAuthority: boolean;
    readonly implicitHighPrivilegeDenied: boolean;
    readonly packagedImplicitHighPrivilegeDenied: boolean;
    readonly disclosureBlocksPromotion: boolean;
    readonly foregroundDisclosureRequiredForPromotedSensitiveSurfaces: boolean;
    readonly userPromptRequiredForPromotedSensitiveSurfaces: boolean;
    readonly surfaces: readonly PrivacyDisclosureSurface[];
    readonly channels: readonly PrivacyDisclosureChannel[];
    readonly packagedPolicy: PrivacyDisclosurePackagedPolicy;
    readonly doctorPrivacy: PrivacyDisclosureDoctorPrivacy;
    readonly automationImplications: PrivacyDisclosureAutomationImplications;
    readonly pending: readonly string[];
  }

  export interface AutoJsBridgeCapabilityNotDeclaredError extends Error {
    readonly code: "ERR_AUTOJS6_BRIDGE_CAPABILITY_NOT_DECLARED";
    readonly module?: string;
    readonly method?: string;
    readonly missingCapabilities: readonly string[];
    readonly requiredProfiles: readonly string[];
    readonly requiredNodePermissions: readonly string[];
    readonly requiredAndroidPermissions: readonly string[];
    readonly profileSelectionHint: ProfileSelectionFailureHint;
  }

  export interface FilesystemAdvancedApis {
    readonly streams: "stable" | "unsupported" | string;
    readonly fileHandle: "native" | "unsupported" | string;
    readonly fd: "native" | "unsupported" | string;
    readonly opendir: "native" | "unsupported" | string;
    readonly watch: "native" | "unsupported" | string;
    readonly realpath: "native" | "unsupported" | string;
    readonly recursiveWatch: "native" | "unsupported" | string;
    readonly closeOnDestroy: "execution_owned" | "unsupported" | string;
    readonly packagedBehavior: "external_runtime_required" | "unsupported" | string;
    readonly rawFd: boolean;
  }

  /** Watchers and watch events follow native Node; only Android memory bounds them. */
  export interface FilesystemProfileLimits {
    readonly watchers: "native_unbounded" | string;
    readonly watchEvents: "native_unbounded" | string;
  }

  export interface FilesystemProfile {
    /** Since M23.1 `fs` is Node's own module: Android file access is the only boundary (no /proc, /sys, /dev denial). */
    readonly mode: "android_file_access" | string;
    readonly safeProfileScoped: boolean;
    readonly additionalRoots: readonly string[];
    readonly userAuthorizedRoots: boolean;
    readonly safRoots: boolean;
    readonly appPrivateRoots: boolean;
    readonly androidSharedStorage: boolean;
    readonly advancedApis: FilesystemAdvancedApis;
    readonly limits: FilesystemProfileLimits;
  }

  export interface WorkerThreadsFsProfile {
    readonly read: "workingDirectory" | "denied" | string;
    readonly write: "workingDirectory" | "denied" | string;
  }

  export interface WorkerThreadsWorkerProfile {
    readonly fs: WorkerThreadsFsProfile;
    readonly network: "denied" | string;
    readonly autoJsBridge: "parent_message_port" | string;
    readonly shell: "denied" | string;
    readonly javaInterop: "parent_message_port" | string;
    readonly inspector: "native" | "denied_by_request" | string;
  }

  export interface WorkerThreadsPoolPolicy {
    readonly minWorkers: number;
    readonly maxWorkers: number;
    readonly idleTimeoutMs: number;
    /** Zero leaves WorkerPool tasks without a default deadline. */
    readonly taskTimeoutMs: number;
    /** null means no default queue limit; a WorkerPool can set its own limit. */
    readonly queueLimit: number | null;
  }

  export interface WorkerThreadsResourceLimits {
    readonly maxOldGenerationSizeMb?: number;
    readonly maxYoungGenerationSizeMb?: number;
    readonly codeRangeSizeMb?: number;
    readonly stackSizeMb?: number;
  }

  /** JSON supplied as the autojs6:worker-policy runtime module in an execution request. */
  export interface WorkerThreadsRequestPolicy {
    /** Node resource defaults; individual Workers may override them in either direction. */
    readonly resourceLimits?: WorkerThreadsResourceLimits;
  }

  export interface WorkerThreadsPolicy {
    /** Message size and queue depth follow Node's structured clone; there is no AutoJs6 cap. */
    readonly messageBudget: "native_structured_clone" | string;
    readonly allowedBuiltins: readonly string[];
    readonly workerProfile: WorkerThreadsWorkerProfile;
    readonly workerPool: WorkerThreadsPoolPolicy;
    readonly resourceLimits: WorkerThreadsResourceLimits;
  }

  export interface WorkerThreadsProcessApis {
    readonly exit: "ends_worker_thread_as_node" | string;
    readonly getBuiltinModule: "native_inventory" | string;
    readonly abort: "unavailable_as_node" | string;
    readonly chdir: "unavailable_as_node" | string;
    readonly kill: "native_shared_runtime_process" | string;
    readonly dlopen: "native" | string;
  }

  export interface WorkerThreadsProfile {
    readonly status: "stable" | "disabled_by_request" | string;
    readonly defaultEnabled: boolean;
    readonly requestEnabled: boolean;
    readonly nativeAvailability: "available" | string;
    readonly messageChannel: "stable" | "unsupported" | string;
    readonly transferList: "stable" | "unsupported" | string;
    readonly workerPool: "stable" | "unsupported" | string;
    readonly bridgeModules: "parent_message_port" | string;
    readonly nestedWorkers: boolean;
    readonly rawNativeHandles: boolean;
    readonly packagedBehavior: "native_available_only" | string;
    /** Bare package specifiers resolve through the workspace node_modules as in Node. */
    readonly packageResolution: "workspace_node_modules" | string;
    /** Since M23.3 import() inside workers is Node's own loader; always true. */
    readonly dynamicImport: true;
    /** process APIs inside workers: exit ends the thread as in Node; abort/chdir are unavailable as in Node. */
    readonly processApis: WorkerThreadsProcessApis;
    readonly policy: WorkerThreadsPolicy;
  }

  export interface ProcessWorkerReplacementProfile {
    readonly status: "decided_worker_threads_and_child_process" | "ready" | string;
    readonly api: "not_introduced" | "autojs6_process_worker" | string;
    readonly facade: "not_introduced" | string;
    readonly preferredPrimitive: "worker_threads.WorkerPool" | string;
    readonly workerThreads: "stable_enabled" | string;
    readonly childProcess: "stable_enabled" | string;
    readonly shellBridge: "separate_scoped_command_bridge" | string;
    readonly executionMode: "not_applicable_runs_inside_execution" | string;
    readonly secondExecutionSlot: "process_pool_two_slots" | string;
    readonly scopedScriptPath: "android_file_access" | "workingDirectory" | string;
    readonly messageBudget: "native_structured_clone" | string;
    readonly cleanup: "worker_pool_close_or_execution_destroy" | string;
    readonly packagedBehavior: "stable" | string;
    readonly bridgeModules: "parent_message_port" | string;
    readonly nestedWorkers: boolean;
    readonly rawProcessHandles: boolean;
  }

  /** Native VM support. Node 24.21 VM Modules remain experimental upstream. */
  export interface VmProfile {
    readonly status: "native_available" | string;
    readonly defaultEnabled: boolean;
    readonly targetProfiles: readonly string[];
    readonly module: "denied" | "native_available" | string;
    readonly script: "native_available" | string;
    readonly context: "native_available" | string;
    readonly timeout: "required_before_enablement" | "native_run_options" | string;
    readonly compileFunction: "denied" | "native_available" | string;
    readonly syntheticModule: "denied" | "native_available" | string;
    readonly sourceTextModule: "denied" | "native_available" | string;
    readonly dynamicImportHooks: "denied" | "native_available" | string;
    readonly bridgeModules: "denied" | string;
    readonly processAccess: "denied_for_future_contexts" | "not_security_boundary" | string;
    readonly scopedFs: "must_preserve" | string;
    readonly privateBindings: "denied" | string;
    readonly hostObjects: "denied" | "not_injected_by_autojs6" | string;
    readonly memoryLimits: "not_defined" | "native_node_defaults" | string;
    readonly packagedBehavior: "not_promoted" | "native_builtin" | string;
    readonly rawGlobalAccess: boolean;
  }

  export interface InspectorProfile {
    readonly status: "disabled_by_default" | "explicit_localhost" | string;
    readonly defaultEnabled: boolean;
    readonly targetProfiles: readonly string[];
    readonly module: "native_with_request_gated_activation" | string;
    readonly devtools: "cdp_localhost_available" | "requires_explicit_request" | string;
    readonly inspectorProtocol: "available" | "requires_explicit_request" | string;
    readonly adbForwarding: "required_before_enablement" | string;
    readonly explicitUserAction: "required_before_enablement" | string;
    readonly releaseBuild: "explicit_request" | string;
    readonly packagedBehavior: "external_runtime_required" | string;
    readonly portBinding: "denied" | "loopback_only" | string;
    readonly remoteConnections: "denied" | string;
    readonly bridgeModules: "denied" | string;
    readonly processAccess: "denied" | string;
    readonly heapSnapshot: "denied" | "session_available" | string;
    readonly cpuProfiler: "denied" | "session_available" | string;
    readonly sensitivePathRedaction: "not_proven" | "required" | string;
    readonly rawSockets: boolean;
  }

  export interface WasiProfile {
    readonly status: "denied_by_decision" | string;
    readonly defaultEnabled: boolean;
    readonly targetProfiles: readonly string[];
    readonly pureWebAssembly: "available" | string;
    readonly rawNodeWasi: "denied" | string;
    readonly controlledFacade: "not_planned" | string;
    readonly module: "denied" | string;
    readonly preopens: "scoped_or_authorized_roots_required" | string;
    readonly workingDirectoryPreopen: "not_planned" | string;
    readonly authorizedRoots: "required_before_enablement" | string;
    readonly args: "explicit_only" | string;
    readonly env: "empty_by_default" | string;
    readonly fd: "virtualized_required" | string;
    readonly stdio: "bounded_required" | string;
    readonly clock: "limited_required" | string;
    readonly random: "limited_required" | string;
    readonly network: "denied" | string;
    readonly processExit: "denied" | string;
    readonly symlinkEscape: "must_deny" | string;
    readonly workerIntegration: "not_planned" | string;
    readonly packagedBehavior: "external_runtime_required" | string;
    readonly rawHostPaths: boolean;
    readonly rawFdNumbers: boolean;
  }

  /** Android-compatible addons use Node's loader; binaries follow the process ABI. */
  export interface NativeAddonProfile {
    readonly status: "native_available" | string;
    readonly defaultEnabled: boolean;
    readonly targetProfiles: readonly string[];
    readonly module: "native" | string;
    readonly requireExtension: "native" | string;
    readonly processDlopen: "native" | string;
    readonly processBinding: "native" | string;
    readonly nodeGyp: "npm_bundled_scripts" | string;
    readonly downloadedArtifacts: "android_compatible_prebuilds" | string;
    readonly abiSelection: "process_arch" | string;
    readonly dependencyResolution: "android_dynamic_linker" | string;
    readonly pageAlignmentBytes: number;
    readonly crashIsolation: "runtime_process" | string;
    readonly packagedBehavior: "external_runtime_required" | string;
    readonly jniBridge: "addon_owned" | string;
    readonly rawDlopen: "native" | string;
    readonly nativeMemoryAccess: "addon_owned" | string;
    readonly rawNativeHandles: boolean;
  }

  export interface ChildProcessProfile {
    readonly status: "stable" | "disabled_by_request" | string;
    readonly defaultEnabled: boolean;
    readonly targetProfiles: readonly string[];
    readonly module: "native_available" | "denied" | string;
    readonly nodePrefix: "native_available" | "denied" | string;
    readonly implementation: "native_node_builtin" | "denied" | string;
    readonly shellBridge: "separate_scoped_command_bridge" | string;
    readonly androidShellProvider: "available_with_shell_capability" | string;
    readonly appPrivateBinaryAllowlist: "not_enforced_by_native_builtin" | string;
    readonly executablePolicy: "android_app_sandbox_and_caller_validation" | "denied" | string;
    readonly cwd: "native_node_options" | "denied" | string;
    readonly env: "native_node_options" | "denied" | string;
    readonly stdin: "native_node_streams" | "denied_with_child_process" | string;
    readonly stdout: "native_node_streams_caller_bounded" | "denied" | string;
    readonly stderr: "native_node_streams_caller_bounded" | "denied" | string;
    readonly timeout: "caller_managed" | "required" | string;
    readonly cancellation: "native_node_kill" | "required_before_enablement" | string;
    readonly kill: "native_available" | "required_before_enablement" | string;
    readonly cleanup: "native_node_lifecycle" | "required_before_enablement" | string;
    readonly processHandles: "native_available" | "denied" | string;
    readonly fdStreams: "native_available" | "denied" | string;
    readonly detached: "native_node_options" | "denied" | string;
    readonly shellOperators: "native_shell_option" | "denied" | string;
    readonly packagedBehavior: "stable" | "disabled_by_request" | string;
    readonly rawProcessHandles: boolean;
    readonly rawSignals: boolean;
  }

  /** Read-only host capability diagnostics, not Node's native permission model. */
  export interface ProcessPermissionSnapshot {
    readonly version: 1;
    readonly model: "autojs6-readonly-capability-query";
    readonly exactNodePermissionModel: false;
    readonly readOnly: true;
    readonly scopeNames: readonly string[];
    readonly scopes: Readonly<Record<string, boolean>>;
    readonly scopedFs: {
      readonly root: string;
      readonly cwd: string;
      readonly read: boolean;
      readonly write: boolean;
    };
    readonly manifest: BridgePermissionsReport;
  }

  export interface AutoJsProfile {
    readonly name: string;
    readonly engineVersion: string;
    readonly node: string;
    readonly cjs: boolean;
    readonly esm: boolean;
    readonly dynamicImport: boolean;
    readonly network: boolean;
    readonly workerThreads: boolean;
    readonly javaInterop: boolean;
    readonly inspector: boolean;
    readonly nativeAddon: boolean;
    readonly scopedFs: boolean;
    readonly esmLoaderProfile: EsmLoaderProfile;
    readonly moduleResolutionProfile: ModuleResolutionProfile;
    readonly packageManagerProfile: PackageManagerProfile;
    readonly stdlibProfile: StdlibProfile;
    readonly processParityProfile: ProcessParityProfile;
    readonly packagedCapabilityProfile: PackagedCapabilityProfile;
    readonly pluginSystemProfile: PluginSystemProfile;
    readonly packageIntegrityProfile: PackageIntegrityProfile;
    readonly filesystemProfile: FilesystemProfile;
    readonly workerThreadsProfile: WorkerThreadsProfile;
    readonly processWorkerReplacementProfile: ProcessWorkerReplacementProfile;
    readonly vmProfile: VmProfile;
    readonly inspectorProfile: InspectorProfile;
    readonly wasiProfile: WasiProfile;
    readonly nativeAddonProfile: NativeAddonProfile;
    readonly childProcessProfile: ChildProcessProfile;
    readonly processPermission: ProcessPermissionSnapshot;
    /** Every alias (bare and `node:`) of Node's own builtin inventory, mapped to its builtin id (M23.2). */
    readonly directBuiltinAliases: Readonly<Record<string, string>>;
    /** Builtins that still answer through a thin runtime wrapper: `console` (stdout capture and host controls). */
    readonly limitedBuiltins: readonly string[];
    /** Node's own `module.builtinModules` as seen by this execution. */
    readonly nativeBuiltins: readonly string[];
    /** Builtins gated off for this execution: worker_threads / child_process / inspector / raw network modules only. */
    readonly disabledBuiltins: readonly string[];
    readonly networkBuiltins: readonly string[];
    readonly highRiskCapabilities: Readonly<Record<string, boolean>>;
    readonly featureStates: Readonly<Record<string, boolean>>;
    readonly featureFlags: Readonly<Record<string, FeatureFlagDescriptor>>;
    readonly enabledFeatures: readonly string[];
    readonly deniedFeatureFlags: readonly string[];
    readonly errorCodes: Readonly<Record<string, string | Readonly<Record<string, string>>>>;
    readonly compileCache: Readonly<CompileCacheProfile>;
    readonly profileSelection: ProfileSelectionDiagnostics;
    readonly profileRollbackPolicy: ProfileRollbackPolicy;
    readonly privacyDisclosurePolicy: PrivacyDisclosurePolicy;
    readonly bridgePermissions: BridgePermissionsReport;
    /** The `autojs6:bridge-limits` policy shared with the host broker. The runtime applies only `maxPendingBridgeCalls` (calls beyond that in-flight window wait in FIFO order); `runtimeEnforced` / `hostEnforced` list which side applies each field. */
    readonly bridgeLimits: Readonly<Record<string, unknown>>;
  }

  export type AutoJsJavaClassSpec = import("java").ClassSpec;
  export type AutoJsJavaPolicy = import("java").Policy;
  export type AutoJsJavaArgument = import("java").Argument;
  export type AutoJsJavaObjectHandle<TValue extends Readonly<Record<string, unknown>> = Readonly<Record<string, unknown>>> = Omit<import("java").ObjectHandle, "value"> & { readonly value?: TValue };
  export type AutoJsJavaClassDescriptor = import("java").ClassDescriptor;
  export type AutoJsJavaModule = import("java").API;

  export interface AutoJsJavaFacade extends AutoJsJavaModule {
    readonly schema: "autojs6-node-autojs-java-v1";
    readonly enabled: boolean;
    readonly stable: boolean;
    readonly mode: "disabled" | "allowlist" | string;
    readonly reason: string;
    create(
      classOrName: string | AutoJsJavaClassDescriptor,
      args?: readonly AutoJsJavaArgument[],
      threadModeOrOptions?: "default" | BridgeCallOptions,
      options?: BridgeCallOptions
    ): Promise<AutoJsJavaObjectHandle>;
    setThreadMode(obj: unknown, threadMode: string): never;
    setDefaultThreadMode(clazz: unknown, threadMode: string): never;
  }

  export interface AutoJsAndroidContextDescriptor {
    readonly schema: "autojs6-node-autojs-android-context-v1";
    readonly available: false;
    readonly proxy: true;
    readonly type: "android.content.Context";
    readonly packageName: string;
    readonly reason: string;
  }

  export interface AutoJsVersionDescriptor {
    readonly name: string;
    readonly code: number;
    readonly engine: string;
    readonly node: string;
  }

  export interface AutoJsGlobal {
    readonly schema: "autojs6-node-autojs-global-v1";
    readonly version: AutoJsVersionDescriptor;
    readonly versionName: string;
    readonly versionCode: number;
    readonly packageName: string;
    readonly profile: AutoJsProfile;
    readonly androidContext: AutoJsAndroidContextDescriptor;
    readonly speech: typeof import("speech");
    readonly tts: typeof import("tts");
    readonly java: AutoJsJavaFacade;
  }
}

declare const $autojs: AutoJs6Node.AutoJsGlobal;

declare module "autojs6:profile" {
  const profile: AutoJs6Node.AutoJsProfile;
  export = profile;
}
