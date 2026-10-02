/// <reference path="../../declarations/autojs6/index.d.ts" />

// Compile only: tsc --noEmit --strictNullChecks --skipLibCheck --target ES2020 --lib ES2020.
// No package operation is executed by this type smoke test.
function installerApiSmoke(file: java.io.File, uri: android.net.Uri) {
    let ready: boolean = installer.isAvailable();
    let status: Internal.Installer.Status = $installer.status;
    let reason: string | undefined = status.reason;
    let pluginVersion: string | undefined = status.pluginVersion;
    let contract: number | undefined = status.contractVersion;
    let source: Internal.Installer.InstallSource = { splits: [file, uri, './base.apk'] };
    let options: Internal.Installer.InstallOptions = {
        authorizer: 'shizuku', interaction: 'silent', allowDowngrade: true, allowTestOnly: true,
        bypassLowTargetSdk: true, installer: 'com.example.store', user: 10, deleteSource: false,
        continueOnError: true, timeout: 1800000,
    };
    let one: Internal.Installer.InstallResult = installer.install(source, options);
    let batch: Internal.Installer.InstallResult[] = installer.install([file, uri, source]);
    let asyncOne: Promise<Internal.Installer.InstallResult> = installer.installAsync(file);
    let asyncBatch: Promise<Internal.Installer.InstallResult[]> = $installer.installAsync([uri], options);
    let union: Internal.Installer.InstallSource | Internal.Installer.InstallSource[] = ready ? file : [uri];
    let unionResult: Internal.Installer.InstallResult | Internal.Installer.InstallResult[] = installer.install(union);
    let unionAsync: Promise<Internal.Installer.InstallResult | Internal.Installer.InstallResult[]> = installer.installAsync(union);
    let session = installer.session([source]);
    let sessionResult: Internal.Installer.InstallResult[] | undefined = session.result;
    let emitter: Pick<EventEmitter$, 'emit' | 'eventNames' | 'listenerCount'> = session;
    let state: Internal.Installer.SessionState = session.state;
    session.on('stage', (stage, detail) => {
        let name: Internal.Installer.SessionState = stage;
        let index: number | undefined = detail.index;
    }).on('progress', (progress, detail) => {
        let fraction: number = progress;
        let bytes: number = detail.bytesWritten;
    }).on('complete', results => {
        let values: Internal.Installer.InstallResult[] = results;
    }).once('error', error => {
        let code: string = error.code;
    }).once('cancel', () => {});
    let cancelled: boolean = session.cancel();
    let awaited: Internal.Installer.InstallResult[] = session.wait(1000);
    let singleSession = installer.session(file);
    let awaitedSingle: Internal.Installer.InstallResult = singleSession.wait();
    let genericSession: Internal.Installer.InstallSession = installer.session(union);
    let uninstall: Internal.Installer.UninstallResult = installer.uninstall('com.example.app', { authorizer: 'root', interaction: 'silent', keepData: true, user: 'all', timeout: 5000 });
    let uninstallAsync: Promise<Internal.Installer.UninstallResult> = installer.uninstallAsync('com.example.app');
    let info: Internal.Installer.PackageArchiveInfo = installer.inspect(uri);
    let bitmap: android.graphics.Bitmap | undefined = info.icon;
    let modules: string[] | undefined = info.modules;
    let inspected: Promise<Internal.Installer.PackageArchiveInfo> = installer.inspectAsync(file);
    let names: Internal.Installer.ActualAuthorizer[] = installer.authorizer.available;
    let authorizerState: Internal.Installer.AuthorizerState = installer.authorizer.state('auto');
    let granted: boolean = installer.authorizer.request('shizuku', 300000);
    let grantedAsync: Promise<boolean> = installer.authorizer.requestAsync('root');
    let isDefault: boolean = installer.isDefault();
    let setDefault: boolean = installer.setDefault();
    let setDefaultAsync: Promise<boolean> = installer.setDefaultAsync(true, { authorizer: 'root' });
    let ownerGrant: Promise<boolean> = installer.authorizer.requestAsync('dhizuku');
    let notificationInstall: Promise<Internal.Installer.InstallResult> = installer.installAsync(file, { authorizer: 'dhizuku', interaction: 'notification' });
    let persistentDefault: Promise<boolean> = installer.setDefaultAsync(true, { authorizer: 'dhizuku', mode: 'persistent' });
    let persistentRemoved: boolean = installer.setDefault(false, { authorizer: 'dhizuku', mode: 'persistent' });
    let rootPersistent: boolean = installer.setDefault(true, { authorizer: 'root', mode: 'persistent' });
    let automaticPersistent: Promise<boolean> = installer.setDefaultAsync(true, { mode: 'persistent' });
    let preferredDefault: boolean = installer.setDefault(true, { authorizer: 'root', mode: 'preferred' });
    let notificationError: Internal.Installer.ErrorCode = 'NOTIFICATION_UNAVAILABLE';
    let advanced: Internal.Installer.InstallOptions = {
        authorizer: 'root', grantAllRequestedPermissions: true, requestUpdateOwnership: false,
        dexopt: 'speed-profile', installReason: 'user', packageSource: 'local-file',
    };
    let advancedResult: Promise<Internal.Installer.InstallResult> = installer.installAsync(file, advanced);
    let explicitNoOp = installer.install(file, { grantAllRequestedPermissions: false, dexopt: 'none' });
    let profileResets = installer.install(file, {
        authorizer: 'auto', user: 'current', deleteSource: false, dexopt: 'none',
        installer: null, installReason: null, packageSource: null,
    });
    let requestedDeletion: boolean | undefined = profileResets.sourceDeleteRequested;
    let actualUpdateOwner: string | null | undefined = one.updateOwner;
    let dexoptResult: Internal.Installer.DexoptResult | undefined = one.dexopt;
    let dexoptStatus: Internal.Installer.DexoptStatus | undefined = one.dexopt?.status;
    let optimizing: Internal.Installer.SessionState = 'optimizing';
    let users: Internal.Installer.DeviceUser[] = installer.users();
    let asyncUsers: Promise<Internal.Installer.DeviceUser[]> = installer.usersAsync();
    let failure: Internal.Installer.InstallerError = new installer.InstallerError('failed', 'INSTALL_FAILED', -1, 'INSTALL_FAILED_TEST_ONLY', 'com.example.app', 'shizuku', false);
    let constructedWithoutNew: Internal.Installer.InstallerError = installer.InstallerError();
    if (one.error instanceof installer.InstallerError) {
        let systemMessage: string | undefined = one.error.systemMessage;
        let retryable: boolean = one.error.retryable;
    }

    // @ts-expect-error A batch always returns an array, even with one source.
    let wrongResult: Internal.Installer.InstallResult = installer.install([file]);
    // @ts-expect-error Nested arrays are not split sets.
    installer.install([[file]]);
    // @ts-expect-error Splits belong in the source object, not the options.
    installer.install(file, { splits: [uri] });
    // @ts-expect-error Inspect accepts one ordinary source, not an explicit split set.
    installer.inspect({ splits: [file] });
    // @ts-expect-error Inspect does not accept an array.
    installer.inspectAsync([file]);
    // @ts-expect-error Null is not a source.
    installer.install(null);
    // @ts-expect-error Explicit null does not select option defaults.
    installer.install(file, null);
    // @ts-expect-error Numeric user IDs are numbers, not numeric strings.
    installer.install(file, { user: '10' });
    // @ts-expect-error Unknown authorizers remain invalid.
    installer.authorizer.request('dhizuku-unknown');
    // @ts-expect-error Notification is installation-only.
    installer.uninstall('com.example.app', { interaction: 'notification' });
    // @ts-expect-error Unknown default scopes remain invalid.
    installer.setDefault(true, { mode: 'all' });
    // @ts-expect-error The local protocol receipt is not a public script property.
    installer.persistentConfigured;
    // @ts-expect-error Android numeric constants are not public install reason values.
    installer.install(file, { installReason: 4 });
    // @ts-expect-error Unknown compilation filters are rejected.
    installer.install(file, { dexopt: 'everything' });
    // @ts-expect-error Explicit null is not omission.
    installer.install(file, { requestUpdateOwnership: null });
    // @ts-expect-error Null resets are limited to the three nullable fields.
    installer.install(file, { dexopt: null });
    // @ts-expect-error Explicit false is valid, but null does not request profile inheritance.
    installer.install(file, { deleteSource: null });
    // @ts-expect-error Profile selection and capability markers are not public script options.
    installer.install(file, { applySourceProfiles: true });
    // @ts-expect-error Advanced options are installation-only.
    installer.uninstall('com.example.app', { dexopt: 'none' });
    // @ts-expect-error Local policy cannot be bypassed by a script option.
    installer.install(file, { overrideSignaturePolicy: true });
    // @ts-expect-error The enabled parameter precedes default-installer options.
    installer.setDefault({ authorizer: 'root' });
    // @ts-expect-error Session result is readonly.
    session.result = [];
    // @ts-expect-error The session exposes the documented emitter methods, not Java EventEmitter extensions.
    session.emitSticky('complete', []);
}
