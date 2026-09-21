/// <reference path="../../declarations/autojs6/index.d.ts" />

// Run with tsc --noEmit --strictNullChecks --skipLibCheck --target ES2020 --lib ES2020.

let inlineClient: Internal.Mail.Client = mail.connect({ provider: 'qq', address: 'user@qq.com', password: 'authorization-code' });
let aliasClient: Internal.Mail.Client = mail.connect('work');
let tokenClient: Internal.Mail.Client = mail.connect({
    provider: 'gmail',
    address: 'me@gmail.com',
    tokenProvider: () => 'token',
    timeout: { connect: 10000, read: 30000 },
    imap: { port: 993 },
});
let snapshot: Internal.Mail.AccountSnapshot = tokenClient.account;
let connected: boolean = inlineClient.isConnected && !inlineClient.isClosed;

mail.connectAsync('work')
    .then(client => client.fetchAsync({ unseenOnly: true, limit: 3 }))
    .then(list => list.forEach(m => console.log(m.subject)));

let report: Internal.Mail.SessionTestResult = inlineClient.test();
let idle: boolean = report.imap !== null && report.imap.capabilities.includes('IDLE');
let smtpError: string | undefined = report.smtp?.error?.message;

let envelopes: Internal.Mail.Message[] = inlineClient.fetch({ limit: 20, before: 5000, order: 'asc' });
let hits: Internal.Mail.SearchResult = inlineClient.search({
    from: 'boss@example.com',
    subject: 'report',
    since: '2026-09-01',
    or: [{ seen: false }, { flagged: true }],
    not: { deleted: true },
    uid: '5001:*',
}, { limit: 20, fallback: 'always' });
let fallback: 'server' | 'client' = hits.fallback;
let firstHit: Internal.Mail.Message | undefined = hits[0];

let full: Internal.Mail.Message = inlineClient.get(4711, { peek: false, includeRaw: true });
let loaded: Internal.Mail.Message = envelopes[0].load();
let sent: Date | null = full.date;
let body: string | null = full.text ?? full.html;
let headerValues: string[] | undefined = full.headers['message-id'];
let attachment: Internal.Mail.Attachment | undefined = full.attachments[0];
let savedPath: string = inlineClient.download({ uid: 4711, partId: '2' }, '/sdcard/Download/');
let rawPath: string = inlineClient.raw(full, '/sdcard/Download/', { overwrite: true });
inlineClient.downloadAsync(attachment!, '/sdcard/Download/', { onProgress: (done, total) => console.log(done, total) })
    .then(path => console.log(path));
attachment?.downloadAsync().then(path => console.log(path));

let affected: Internal.Mail.Uid[] = inlineClient.setFlags([4711, 4712], ['seen', 'Project-X'], 'set', { folder: 'Archive' });
let marked: Internal.Mail.Uid[] = inlineClient.markRead(envelopes);
let moved: number[] | true = inlineClient.move(hits, 'Archive', { from: 'INBOX' });
let copied: number[] | true = inlineClient.copy(4711, 'Backup');
let deleted: Internal.Mail.Uid[] = inlineClient.delete('0000012345abcdef', { expunge: true });
let expunged: number = inlineClient.expunge('Archive');
let appended: number | null = inlineClient.append('Drafts', { to: 'you@example.com', subject: 'draft' }, ['draft']);

let folders: Internal.Mail.Folder[] = inlineClient.folders({ status: true });
let specialUse: Internal.Mail.SpecialUse | null = folders[0].specialUse;
let archive: Internal.Mail.ClientFolder = inlineClient.folder('Archive/2026');
let status: Internal.Mail.FolderStatus = archive.status();
let created: Internal.Mail.Folder = inlineClient.createFolder('Work');
let renamed: Internal.Mail.Folder = archive.rename('Archive/2025');
let removed: boolean = inlineClient.deleteFolder('Work');

let result: Internal.Mail.SendResult = inlineClient.send({
    to: [{ name: 'A', address: 'a@example.com' }, 'B <b@example.com>'],
    cc: 'c@example.com',
    subject: 'weekly',
    text: 'plain',
    html: '<p>html</p><img src="cid:logo">',
    attachments: ['/sdcard/Download/report.pdf', { path: './logo.png', contentId: 'logo', inline: true }],
    headers: { 'X-Auto-Reply': 'AutoJs6' },
    priority: 'high',
}, { saveToSent: false });
let sentCopy: 'server' | 'appended' | 'failed' | 'none' = result.sentCopy;

let watch: Internal.Mail.Watch = inlineClient.watch('INBOX', { mode: 'auto', fetchBody: true, pollIntervalMs: 30000 });
let optionsOnlyWatch: Internal.Mail.Watch = inlineClient.watch({ folder: 'INBOX' });
watch
    .on('message', (message, source) => console.log(source.folder, message.uid, message.subject))
    .on('mode', mode => console.log(mode === 'idle'))
    .on('resync', reason => console.log(reason))
    .on('error', error => console.warn(error.code, error.retryable))
    .once('close', reason => console.log(reason));
let generation: number = watch.generation;
let watchState: 'active' | 'closed' = watch.state;
watch.stop();
optionsOnlyWatch.stop();

mail.setDefault(inlineClient);
let defaultClient: Internal.Mail.Client | null = mail.default;
let forwarded: Internal.Mail.Message[] = mail.fetch({ limit: 1 });
let forwardedSearch: Promise<Internal.Mail.SearchResult> = mail.searchAsync({ subject: 'invoice' });
let forwardedWatch: Internal.Mail.Watch = mail.watch();
forwardedWatch.stop();
mail.close();
$mail.close();

let providers: Internal.Mail.Provider[] = mail.providers.list();
let resolved: Internal.Mail.Provider | null = mail.providers.resolve('someone@foxmail.com');
let providerId: string | undefined = resolved?.id;
let saved: Internal.Mail.SavedAccount[] = mail.accounts.list();
let hasWork: boolean = mail.accounts.has('work');

let failure: Internal.Mail.MailError = new mail.MailError('boom', 'TIMEOUT', null, true);
let code: string = failure.code;
let retryable: boolean = failure.retryable;
try {
    inlineClient.fetch();
} catch (e) {
    if (e instanceof mail.MailError) {
        let name: 'MailError' = e.name;
        console.log(name, e.code, e.details);
    }
}

let trigger: Internal.Mail.TriggerEvent | undefined = engines.myEngine().execArgv.mail;
if (trigger) {
    let kind: 'mail' = trigger.type;
    let arrived: Internal.Mail.Message = trigger.message;
    console.log(kind, trigger.triggerId, trigger.alias, trigger.folder, arrived.subject, trigger.receivedAt);
}

// @ts-expect-error address is required.
mail.connect({ provider: 'qq', password: 'authorization-code' });
// @ts-expect-error The fallback option only accepts client, none or always.
inlineClient.search({}, { fallback: 'server' });
// @ts-expect-error The flag mode is add, remove or set.
inlineClient.setFlags(4711, 'seen', 'toggle');
// @ts-expect-error subject is required.
inlineClient.send({ to: 'a@example.com' });
// @ts-expect-error watch has no Async form.
inlineClient.watchAsync();
// @ts-expect-error The watch mode is auto, idle or poll.
inlineClient.watch('INBOX', { mode: 'push' });
// @ts-expect-error The order is desc or asc.
inlineClient.fetch({ order: 'newest' });
