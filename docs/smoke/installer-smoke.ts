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
    // @ts-expect-error Dhizuku is not an implemented authorizer.
    installer.authorizer.request('dhizuku');
    // @ts-expect-error Notification is not an interaction mode.
    installer.install(file, { interaction: 'notification' });
    // @ts-expect-error The enabled parameter precedes default-installer options.
    installer.setDefault({ authorizer: 'root' });
    // @ts-expect-error Session result is readonly.
    session.result = [];
    // @ts-expect-error The session exposes the documented emitter methods, not Java EventEmitter extensions.
    session.emitSticky('complete', []);
}
