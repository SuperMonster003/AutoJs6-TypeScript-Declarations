/// <reference path="history/profile_versions.d.ts" />
declare namespace AutoJs6Node {
  /** Runtime profile identifiers used by Phase 13 profile-aware declarations. */
  export type RuntimeProfileId =
    | "safe_default"
    | "pro_compat_opt_in"
    | "desktop_compat_opt_in"
    | "debug_unsafe_lab";

  /** Type-level availability for a module or surface under a specific profile. */
  export type ProfileModuleMode =
    | "available"
    | "host_provider_required"

    | "profile_gated"
    | "diagnostic_only"
    | "denied"
    | "unsupported";

  export type ProfilePackagedBehavior =
    | "supported"
    | "host_provider_required"
    | "external_runtime_required"

    | "metadata_only"
    | "gated"
    | "denied";

  export interface ProfileModuleSpec<
    TModule extends string,
    TTargetProfile extends RuntimeProfileId,
    TSafeDefault extends ProfileModuleMode,
    TTargetMode extends ProfileModuleMode,
    TPackagedBehavior extends ProfilePackagedBehavior,
  > {
    readonly module: TModule;
    readonly targetProfile: TTargetProfile;
    readonly safeDefault: TSafeDefault;
    readonly targetMode: TTargetMode;
    readonly packagedBehavior: TPackagedBehavior;
    readonly grantsAuthority: false;
    readonly note: string;
  }

  /**
   * Profile-aware catalog for high-value Pro/Desktop migration surfaces.
   *
   * This catalog is declaration-only. Legacy profile names do not change runtime
   * access. Host providers and request switches determine callable operations;
   * the metadata grants no authority and packaged clients require the external runtime plugin.
   */
  export interface ProfileModuleCatalog {
    readonly "toast": ProfileModuleSpec<"toast", "safe_default", "available", "available", "external_runtime_required">;
    readonly "app": ProfileModuleSpec<"app", "safe_default", "available", "available", "external_runtime_required">;
    readonly "accessibility": ProfileModuleSpec<"accessibility", "pro_compat_opt_in", "host_provider_required", "host_provider_required", "external_runtime_required">;
    readonly "image": ProfileModuleSpec<"image", "pro_compat_opt_in", "host_provider_required", "host_provider_required", "external_runtime_required">;
    readonly "ocr": ProfileModuleSpec<"ocr", "pro_compat_opt_in", "host_provider_required", "host_provider_required", "external_runtime_required">;
    readonly "ui": ProfileModuleSpec<"ui", "pro_compat_opt_in", "host_provider_required", "host_provider_required", "external_runtime_required">;
    readonly "ui.overlay": ProfileModuleSpec<"ui.overlay", "pro_compat_opt_in", "host_provider_required", "host_provider_required", "external_runtime_required">;
    readonly "work_manager": ProfileModuleSpec<"work_manager", "pro_compat_opt_in", "host_provider_required", "host_provider_required", "external_runtime_required">;
    readonly "java": ProfileModuleSpec<"java", "pro_compat_opt_in", "available", "available", "external_runtime_required">;
    readonly "$autojs.java": ProfileModuleSpec<"$autojs.java", "pro_compat_opt_in", "available", "available", "external_runtime_required">;
    readonly "rhino.install": ProfileModuleSpec<"rhino.install", "pro_compat_opt_in", "available", "available", "external_runtime_required">;
    readonly "esm": ProfileModuleSpec<"esm", "desktop_compat_opt_in", "available", "available", "external_runtime_required">;
    readonly "worker_threads": ProfileModuleSpec<"worker_threads", "desktop_compat_opt_in", "available", "available", "external_runtime_required">;
    readonly "child_process": ProfileModuleSpec<"child_process", "desktop_compat_opt_in", "available", "available", "external_runtime_required">;
    readonly "http": ProfileModuleSpec<"http", "desktop_compat_opt_in", "available", "available", "external_runtime_required">;
    readonly "https": ProfileModuleSpec<"https", "desktop_compat_opt_in", "available", "available", "external_runtime_required">;
    readonly "raw_network": ProfileModuleSpec<"raw_network", "desktop_compat_opt_in", "available", "available", "external_runtime_required">;
    readonly "fs.advanced": ProfileModuleSpec<"fs.advanced", "desktop_compat_opt_in", "available", "available", "external_runtime_required">;
    readonly "wasi": ProfileModuleSpec<"wasi", "desktop_compat_opt_in", "available", "available", "external_runtime_required">;
    readonly "inspector": ProfileModuleSpec<"inspector", "safe_default", "available", "available", "external_runtime_required">;
    readonly "package_manager": ProfileModuleSpec<"package_manager", "desktop_compat_opt_in", "available", "available", "external_runtime_required">;
    readonly "npm.pure_js": ProfileModuleSpec<"npm.pure_js", "desktop_compat_opt_in", "available", "available", "external_runtime_required">;
  }

  export type ProfileModuleName = keyof ProfileModuleCatalog;
  export type ProfileModuleFor<TModule extends ProfileModuleName> = ProfileModuleCatalog[TModule];
  export type ProfileRequiredFor<TModule extends ProfileModuleName> = ProfileModuleFor<TModule>["targetProfile"];
  export type SafeDefaultModeFor<TModule extends ProfileModuleName> = ProfileModuleFor<TModule>["safeDefault"];
  export type TargetProfileModeFor<TModule extends ProfileModuleName> = ProfileModuleFor<TModule>["targetMode"];
  export type PackagedBehaviorFor<TModule extends ProfileModuleName> = ProfileModuleFor<TModule>["packagedBehavior"];

  export type ProfileModuleModeFor<
    TModule extends ProfileModuleName,
    TProfile extends RuntimeProfileId,
  > = TProfile extends RuntimeProfileId ? SafeDefaultModeFor<TModule> : never;

  export type ProfileModuleRequiresDeclaration<TModule extends ProfileModuleName> =
    SafeDefaultModeFor<TModule> extends "available"  ? false : true;

  export interface ProfileDeclarationMatrix {
    readonly schema: "autojs6-node-profile-declaration-matrix-v1";
    readonly status: "declaration_only";
    readonly profiles: readonly RuntimeProfileId[];
    readonly modules: ProfileModuleCatalog;
    readonly metadataOnly: true;
    readonly grantsAuthority: false;
  }

}
