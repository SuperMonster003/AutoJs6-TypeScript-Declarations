// Type definitions for AutoJs6 internal module mail
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Sep 21, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/mail/Mail.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/mail/MailClientNativeObject.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/mail/MailWatch.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/mail/MailScriptOptions.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/mail/MailScriptArguments.kt
 * @Source %AutoJs6-Plugin-Angus-Mail%/mail-core/src/main/resources/providers.json
 */

declare namespace Internal {

    /**
     * The global `mail` object (also `$mail`), available since AutoJs6 6.8.0 through the external
     * Angus Mail plugin (AutoJs6-Plugin-Angus-Mail). Every method throws (or rejects with) a
     * `MailError` whose `code` is `PLUGIN_UNAVAILABLE` while the plugin is missing, disabled,
     * unauthorized or incompatible.
     *
     * Every client method of {@link Mail.Operations} is mirrored here and forwards to the default
     * client set by {@link Mail.setDefault}; without one it fails with `NO_DEFAULT_ACCOUNT`.
     *
     * @see https://docs.autojs6.com/#/mail
     */
    interface Mail extends Mail.Operations {

        /**
         * Opens a session with the plugin for the given account. The mail server itself is
         * contacted by the first network method; call {@link Mail.Client.test} to verify the
         * account right away.
         * @since 6.8.0
         * @example
         * let client = mail.connect({ provider: 'qq', address: 'user@qq.com', password: 'authorization-code' });
         */
        connect(options: Mail.AccountOptions): Mail.Client;

        /**
         * Opens a session for an account saved under `alias` in the plugin settings; the
         * credential never reaches the script. Unknown aliases fail with `ACCOUNT_NOT_FOUND`.
         * @since 6.8.0
         */
        connect(alias: string): Mail.Client;

        /** @since 6.8.0 */
        connectAsync(options: Mail.AccountOptions): Promise<Mail.Client>;

        /** @since 6.8.0 */
        connectAsync(alias: string): Promise<Mail.Client>;

        /**
         * Makes `client` the default client that the forwarded methods and {@link close} act on.
         * Returns the client.
         * @since 6.8.0
         */
        setDefault(client: Mail.Client): Mail.Client;

        /** `mail.setDefault(mail.connect(options))`. @since 6.8.0 */
        setDefault(options: Mail.AccountOptions): Mail.Client;

        /** `mail.setDefault(mail.connect(alias))`. @since 6.8.0 */
        setDefault(alias: string): Mail.Client;

        /** The default client, or null. @since 6.8.0 */
        readonly default: Mail.Client | null;

        /** Closes the default client (if any) and clears the default. @since 6.8.0 */
        close(): void;

        /** The provider presets bundled with the plugin. @since 6.8.0 */
        readonly providers: Mail.Providers;

        /** The accounts saved in the plugin settings (no credentials). @since 6.8.0 */
        readonly accounts: Mail.Accounts;

        /** The error class of every failure reported by this module. @since 6.8.0 */
        readonly MailError: Mail.MailErrorConstructor;

    }

    namespace Mail {

        /** An IMAP UID (number) or a POP3 UIDL (string). */
        type Uid = number | string;

        /** A bare UID or an object carrying `uid` (and optionally `folder`), such as a {@link Message}. */
        type MessageRef = Uid | { uid: Uid; folder?: string };

        /** One reference or an array of them; the folder of the first object rides along. */
        type MessageRefs = MessageRef | MessageRef[];

        /** A `Date`, UTC milliseconds, or an ISO-8601 string such as `'2026-09-01'`. */
        type DateLike = Date | number | string;

        /** `'a@b.c'`, `'Name <a@b.c>'`, a comma separated list of those, or `{ name, address }`. */
        type AddressLike = string | { name?: string | null; address: string };

        /** One address form or an array of them. */
        type AddressList = AddressLike | AddressLike[];

        type TlsMode = 'ssl' | 'starttls' | 'none';

        type AuthMethod = 'password' | 'xoauth2';

        type ReceiveProtocol = 'imap' | 'pop3';

        type ProviderId = 'gmail' | 'outlook' | 'office365' | 'qq' | '163' | '126' | 'icloud' | 'yahoo' | 'sina' | 'aliyun';

        type ErrorCode =
            | 'INVALID_ARGUMENT'
            | 'NO_DEFAULT_ACCOUNT'
            | 'ACCOUNT_NOT_FOUND'
            | 'PROVIDER_UNKNOWN'
            | 'AUTH_FAILED'
            | 'AUTH_MECHANISM_UNSUPPORTED'
            | 'CONNECT_FAILED'
            | 'TLS_FAILED'
            | 'TIMEOUT'
            | 'CANCELLED'
            | 'FOLDER_NOT_FOUND'
            | 'MESSAGE_NOT_FOUND'
            | 'ATTACHMENT_NOT_FOUND'
            | 'UNSUPPORTED_OPERATION'
            | 'LIMIT_EXCEEDED'
            | 'IO_FAILED'
            | 'SESSION_CLOSED'
            | 'WATCH_CLOSED'
            | 'SEND_REJECTED'
            | 'SERVER_ERROR'
            | 'PLUGIN_UNAVAILABLE'
            | 'INTERNAL';

        /** The five system flags by name, or any IMAP keyword. */
        type FlagName = 'seen' | 'flagged' | 'answered' | 'draft' | 'deleted' | (string & {});

        type FlagMode = 'add' | 'remove' | 'set';

        type SpecialUse = 'inbox' | 'sent' | 'drafts' | 'trash' | 'junk' | 'archive' | 'all' | 'flagged' | 'important';

        /** A server endpoint; `host` may be omitted when a provider preset supplies it. */
        interface Endpoint {
            host?: string;
            /** 1..65535; defaults by protocol and `tls` (IMAP 993 / 143, POP3 995 / 110, SMTP 465 / 587 / 25). */
            port?: number;
            /** Defaults to `'ssl'`. */
            tls?: TlsMode;
        }

        /** @see https://docs.autojs6.com/#/mailAccountOptionsType */
        interface AccountOptions {
            /** Provider preset; explicit fields override it. Not inferred from `address`. */
            provider?: ProviderId | string;
            /** Required. Also the default login name and sender address. */
            address: string;
            /** Login name, defaults to `address`. */
            user?: string;
            /** Display name used in `From`. */
            name?: string;
            /** Defaults by credential: `password` -> `'password'`, `accessToken` / `tokenProvider` -> `'xoauth2'`. */
            auth?: AuthMethod;
            /** Authorization code or app password; exclusive with `accessToken`. */
            password?: string;
            /** OAuth 2.0 access token (XOAUTH2); exclusive with `password`. */
            accessToken?: string;
            /**
             * Returns a fresh access token synchronously; called before the first login when
             * `accessToken` is absent and again (with one retry) when the server answers `AUTH_FAILED`.
             */
            tokenProvider?: () => string;
            /** Defaults to `'imap'` unless only a POP3 endpoint exists. */
            receive?: ReceiveProtocol;
            imap?: Endpoint;
            pop3?: Endpoint;
            smtp?: Endpoint;
            /** Milliseconds; `connect` defaults to 15000, `read` to 60000, `write` to `read`; at most 10 minutes each. */
            timeout?: { connect?: number; read?: number; write?: number };
            /** `trustAll: true` skips certificate validation (debugging only). */
            tls?: { trustAll?: boolean };
            /** Prints a redacted protocol summary to `console.verbose`. */
            debug?: boolean;
            /** Fields of the IMAP `ID` command; sent automatically for presets that require it (163 / 126). */
            clientId?: { name?: string; version?: string };
        }

        /** `client.account`: the options without secrets (`auth: 'xoauth2'` added for token accounts), or `{ alias }`. */
        type AccountSnapshot = Partial<Omit<AccountOptions, 'password' | 'accessToken' | 'tokenProvider'>> & { alias?: string };

        interface ProviderEndpoint {
            host: string;
            port: number;
            tls: TlsMode;
        }

        interface Provider {
            id: ProviderId | string;
            name: string;
            domains: string[];
            imap: ProviderEndpoint | null;
            pop3: ProviderEndpoint | null;
            smtp: ProviderEndpoint | null;
            auth: AuthMethod[];
            authHint: string | null;
            /** The server files its own copy of sent mail, so `send` appends none. */
            autoSavesSent: boolean;
            sentFolder: string | null;
            requiresClientId: boolean;
            /** Whether IMAP IDLE really pushes new mail; null when unverified. */
            idlePush: boolean | null;
            /** Whether the POP3 server takes `AUTH XOAUTH2` only in the two-line form (Outlook.com, Microsoft 365). */
            pop3Xoauth2TwoLine: boolean;
            docsUrl: string | null;
            notes: string | null;
        }

        interface Providers {
            list(): Provider[];
            get(id: string): Provider | null;
            /** The preset whose `domains` contain the domain of `address`. */
            resolve(address: string): Provider | null;
        }

        interface SavedAccount {
            alias: string;
            address?: string;
            user?: string;
            name?: string;
            provider?: string;
            auth?: AuthMethod;
            /**
             * Present when the account was signed in through the browser on the plugin's settings page
             * (Angus Mail 1.2.0): `auth` is then `xoauth2` and the plugin renews the access token itself.
             * The tokens never appear here.
             */
            oauth?: SavedAccountOAuth;
            receive?: ReceiveProtocol;
            imap?: ProviderEndpoint;
            pop3?: ProviderEndpoint;
            smtp?: ProviderEndpoint;
            default?: boolean;
            /** UTC milliseconds. */
            updatedAt?: number;
            /** Present (with the other fields absent) when the saved data cannot be parsed. */
            error?: string;
        }

        interface SavedAccountOAuth {
            /** The identity provider of the sign-in. */
            provider: 'google' | 'microsoft';
            /** UTC milliseconds of the sign-in; 0 when unknown. */
            authorizedAt: number;
            /** UTC milliseconds after which the current access token expires; the plugin renews it before a session. */
            expiresAt: number;
            /** True when a refresh was refused: sessions fail with AUTH_FAILED until the user signs in again in the plugin settings. */
            needsReauth: boolean;
        }

        interface Accounts {
            list(): SavedAccount[];
            has(alias: string): boolean;
        }

        /** `name` is `'MailError'`; `toString()` yields `MailError [CODE]: message`. */
        interface MailError extends Error {
            readonly name: 'MailError';
            readonly code: ErrorCode | string;
            readonly details: string | null;
            /** Worth retrying as is (network hiccup, timeout, closed session). */
            readonly retryable: boolean;
        }

        interface MailErrorConstructor {
            new(message: string, code?: ErrorCode | string, details?: string | null, retryable?: boolean): MailError;
            readonly prototype: MailError;
        }

        interface Address {
            name: string | null;
            address: string;
            /** `Name <address>` or `address`. */
            toString(): string;
        }

        /** @see https://docs.autojs6.com/#/mailMessageType */
        interface Attachment {
            /** MIME part number such as `'2'` or `'1.2'`. */
            partId: string;
            fileName: string;
            mimeType: string;
            /** Encoded part size in bytes, -1 when unknown. */
            size: number;
            contentId: string | null;
            inline: boolean;
            /** The owning message. */
            uid: Uid;
            folder: string;
            /** `client.download(attachment, target, options)`; returns the file path. */
            download(target?: string, options?: DownloadOptions): string;
            downloadAsync(target?: string, options?: DownloadAsyncOptions): Promise<string>;
        }

        /** @see https://docs.autojs6.com/#/mailMessageType */
        interface Message {
            uid: Uid;
            folder: string;
            messageId: string | null;
            inReplyTo: string | null;
            references: string[];
            subject: string;
            from: Address | null;
            sender: Address | null;
            replyTo: Address[];
            to: Address[];
            cc: Address[];
            bcc: Address[];
            date: Date | null;
            receivedDate: Date | null;
            size: number;
            flags: string[];
            seen: boolean;
            flagged: boolean;
            answered: boolean;
            draft: boolean;
            deleted: boolean;
            hasAttachments: boolean;
            /** False for `fetch` / `search` envelopes; true after `get` / `load`. */
            bodyLoaded: boolean;
            text: string | null;
            html: string | null;
            /** Header name -> values, as returned by the server. */
            headers: { [name: string]: string[] };
            attachments: Attachment[];
            /** The inline body exceeded 256 KiB; the parts left out are in `bodyParts`. */
            bodyTruncated: boolean;
            bodyParts: Attachment[];
            /** RFC 822 source (ISO-8859-1 mapped), only with `includeRaw`. */
            raw: string | null;
            rawTruncated: boolean;
            /** `client.get(message, options)` on the client that produced this object. */
            load(options?: GetOptions): Message;
            loadAsync(options?: GetOptions): Promise<Message>;
        }

        interface OutgoingAttachment {
            path: string;
            fileName?: string;
            mimeType?: string;
            contentId?: string;
            inline?: boolean;
        }

        /** The message of `send` and `append`; `subject` and at least one recipient are required. */
        interface SendMessage {
            /** A single address; defaults to the account address and `name`. */
            from?: AddressLike;
            to?: AddressList;
            cc?: AddressList;
            bcc?: AddressList;
            replyTo?: AddressList;
            subject: string;
            text?: string;
            html?: string;
            /** File paths or objects; at most 64, 200 MiB each. */
            attachments?: (string | OutgoingAttachment)[];
            /** At most 32 custom headers; the headers the plugin composes are refused. */
            headers?: { [name: string]: string | string[] };
            priority?: 'high' | 'normal' | 'low';
            inReplyTo?: string;
            references?: string | string[];
            date?: DateLike;
        }

        interface SendOptions {
            /** Append a copy to the sent folder; defaults to the preset's `autoSavesSent` being false. */
            saveToSent?: boolean;
        }

        interface SendResult {
            messageId: string;
            accepted: string[];
            rejected: string[];
            savedToSent: boolean;
            sentCopy: 'server' | 'appended' | 'failed' | 'none';
            sentFolder: string | null;
            saveError: string | null;
            elapsedMs: number;
        }

        interface FoldersOptions {
            subscribedOnly?: boolean;
            /** Also read `messages` / `unseen` of every folder (one round trip each). */
            status?: boolean;
        }

        interface Folder {
            name: string;
            path: string;
            delimiter: string | null;
            specialUse: SpecialUse | null;
            selectable: boolean;
            subscribed: boolean;
            messages: number | null;
            unseen: number | null;
            children: Folder[];
        }

        interface FolderStatus {
            name: string;
            path: string;
            messages: number;
            unseen: number;
            recent: number | null;
            uidNext: number | null;
            uidValidity: number | null;
        }

        /** `client.folder(path)`: a path bound to the client, no network until a method runs. */
        interface ClientFolder {
            readonly path: string;
            readonly name: string;
            status(): FolderStatus;
            statusAsync(): Promise<FolderStatus>;
            create(): Folder;
            createAsync(): Promise<Folder>;
            delete(): boolean;
            deleteAsync(): Promise<boolean>;
            rename(newPath: string): Folder;
            renameAsync(newPath: string): Promise<Folder>;
            toString(): string;
        }

        interface FetchOptions {
            /** Defaults to `'INBOX'`. */
            folder?: string;
            /** Defaults to 50, at most 1000. */
            limit?: number;
            /** UID cursor: only messages with a smaller UID (older pages). */
            before?: Uid;
            /** UID cursor: only messages with a greater UID (increments). */
            after?: Uid;
            /** `'desc'` (default) newest first. */
            order?: 'desc' | 'asc';
            /** IMAP only. */
            unseenOnly?: boolean;
        }

        /** @see https://docs.autojs6.com/#/mailSearchQueryType */
        interface SearchQuery {
            from?: string;
            to?: string;
            cc?: string;
            bcc?: string;
            subject?: string;
            body?: string;
            /** Subject, body, from or to. */
            text?: string;
            since?: DateLike;
            before?: DateLike;
            sentSince?: DateLike;
            sentBefore?: DateLike;
            seen?: boolean;
            flagged?: boolean;
            answered?: boolean;
            draft?: boolean;
            deleted?: boolean;
            /** Bytes. */
            larger?: number;
            smaller?: number;
            /** Header name -> substring. */
            header?: { [name: string]: string };
            messageId?: string;
            /** Top level only: `4711`, `'1:50'`, `'100:*'`, `'1,5,9:12'` or an array of those. */
            uid?: number | string | (number | string)[];
            and?: SearchQuery[];
            or?: SearchQuery[];
            not?: SearchQuery;
        }

        interface SearchOptions {
            folder?: string;
            limit?: number;
            before?: Uid;
            /** `'client'` (default): filter on the client when the server refuses; `'none'`; `'always'`. */
            fallback?: 'client' | 'none' | 'always';
        }

        /** The matches, newest first, plus a non-enumerable `fallback` telling which path answered. */
        interface SearchResult extends Array<Message> {
            readonly fallback: 'server' | 'client';
        }

        interface GetOptions {
            folder?: string;
            /** Do not mark the message seen; defaults to true. */
            peek?: boolean;
            includeRaw?: boolean;
        }

        /** An attachment object or `{ uid, partId }`. */
        type AttachmentRef = Attachment | { uid: Uid; partId: string; folder?: string; fileName?: string };

        interface DownloadOptions {
            folder?: string;
            /** Overwrite an existing file; otherwise a numbered name is used. */
            overwrite?: boolean;
        }

        interface DownloadAsyncOptions extends DownloadOptions {
            /** `total` is null when the size is unknown. */
            onProgress?: (transferred: number, total: number | null) => void;
        }

        interface FolderOptions {
            folder?: string;
        }

        interface TransferOptions {
            /** Source folder, defaults to `'INBOX'`. */
            from?: string;
            folder?: string;
        }

        interface DeleteOptions {
            folder?: string;
            /** IMAP: expunge right away; defaults to false. */
            expunge?: boolean;
        }

        interface WatchOptions {
            /** Defaults to `'INBOX'`. */
            folder?: string;
            /** `'auto'` (default) uses IDLE when the server pushes, else polling. */
            mode?: 'auto' | 'idle' | 'poll';
            /** Defaults to 60000, at least 15000. */
            pollIntervalMs?: number;
            /** Deliver `message` events with the body loaded. */
            fetchBody?: boolean;
            /** Reconnect and keep watching after a connection loss; defaults to true. */
            reconnect?: boolean;
        }

        type WatchCloseReason = 'stopped' | 'error' | 'closed' | 'script-exit' | 'plugin-died' | 'overflow' | string;

        /** The event emitter returned by `watch`. @see https://docs.autojs6.com/#/mailClientType */
        interface Watch extends EventEmitter$ {
            readonly folder: string;
            readonly mode: 'idle' | 'poll' | null;
            /** Incremented on every reconnection. */
            readonly generation: number;
            readonly isActive: boolean;
            readonly isClosed: boolean;
            readonly state: 'active' | 'closed';
            readonly reason: WatchCloseReason | null;

            /** Stops the watch; `close` follows with reason `'stopped'`. Idempotent. */
            stop(): void;

            on(eventName: 'message', listener: (message: Message, watch: Watch) => void): this;
            on(eventName: 'mode', listener: (mode: 'idle' | 'poll') => void): this;
            on(eventName: 'resync', listener: (reason: string) => void): this;
            on(eventName: 'error', listener: (error: MailError) => void): this;
            on(eventName: 'close', listener: (reason: WatchCloseReason) => void): this;
            on(eventName: string, listener: (...args: any[]) => void): this;

            once(eventName: 'message', listener: (message: Message, watch: Watch) => void): this;
            once(eventName: 'mode', listener: (mode: 'idle' | 'poll') => void): this;
            once(eventName: 'resync', listener: (reason: string) => void): this;
            once(eventName: 'error', listener: (error: MailError) => void): this;
            once(eventName: 'close', listener: (reason: WatchCloseReason) => void): this;
            once(eventName: string, listener: (...args: any[]) => void): this;
        }

        /**
         * The argument a script started by the "On mail arrived" task of AutoJs6 receives as
         * `engines.myEngine().execArgv.mail` (Angus Mail plugin 1.1.0, mail contract version 2):
         * one new message seen by a background watch configured on the plugin's Watches page. The
         * message is the envelope only (`bodyLoaded` is false); load the body through a client
         * connected by the alias, for example `mail.connect(argv.mail.alias).get(argv.mail.message)`.
         *
         * @example
         * let argv = engines.myEngine().execArgv;
         * if (argv.mail) {
         *     console.log(argv.mail.triggerId, argv.mail.message.subject);
         *     let client = mail.connect(argv.mail.alias);
         *     console.log(client.get(argv.mail.message).text);
         *     client.close();
         * }
         */
        interface TriggerEvent {
            readonly type: 'mail';
            /** The watch on the plugin's Watches page that saw the message. */
            readonly triggerId: string;
            /** The alias of the saved account the watch runs on; `mail.connect(alias)` opens it. */
            readonly alias: string;
            /** The address of that account. */
            readonly address: string;
            readonly folder: string;
            /** The envelope of the new message, as delivered by `watch` (`bodyLoaded` is false). */
            readonly message: Message;
            /** UTC milliseconds of the plugin's clock when the watch reported the message. */
            readonly receivedAt: number;
        }

        interface EndpointReport {
            protocol: 'imap' | 'pop3' | 'smtp';
            host: string;
            port: number;
            tls: TlsMode;
            ok: boolean;
            elapsedMs: number;
            /** Advertised capabilities or extensions, such as `'IDLE'`, `'UIDPLUS'`, `'SIZE'`. */
            capabilities: string[];
            error: { code: ErrorCode | string; message: string; details: string | null; retryable: boolean } | null;
        }

        interface SessionTestResult {
            ok: boolean;
            /** The normalized account without secrets. */
            account: {
                address: string;
                user: string;
                name: string | null;
                auth: AuthMethod;
                receive: ReceiveProtocol;
                provider: string | null;
                imap: ProviderEndpoint | null;
                pop3: ProviderEndpoint | null;
                smtp: ProviderEndpoint | null;
                insecure: boolean;
                debug: boolean;
            };
            imap: EndpointReport | null;
            pop3: EndpointReport | null;
            smtp: EndpointReport | null;
            elapsedMs: number;
        }

        /**
         * The network methods shared by {@link Client} and the global `mail` object. Synchronous
         * forms block the script thread (stopping the script cancels them); `Async` forms return
         * a Promise settled on the script thread. `folder` and `watch` have no `Async` form.
         */
        interface Operations {

            /** Probes the receive endpoint and SMTP; endpoint failures land in the report, not as exceptions. */
            test(): SessionTestResult;
            testAsync(): Promise<SessionTestResult>;

            /** Sends through SMTP; `SEND_REJECTED` when the server refuses the message or every recipient. */
            send(message: SendMessage, options?: SendOptions): SendResult;
            sendAsync(message: SendMessage, options?: SendOptions): Promise<SendResult>;

            /** The folder tree (POP3: `INBOX` only). */
            folders(options?: FoldersOptions): Folder[];
            foldersAsync(options?: FoldersOptions): Promise<Folder[]>;

            /** A path bound to the client; no network access. */
            folder(path: string): ClientFolder;

            /** IMAP only. */
            folderStatus(path: string): FolderStatus;
            folderStatusAsync(path: string): Promise<FolderStatus>;

            /** IMAP only. */
            createFolder(path: string): Folder;
            createFolderAsync(path: string): Promise<Folder>;

            /** IMAP only; always true. */
            deleteFolder(path: string): boolean;
            deleteFolderAsync(path: string): Promise<boolean>;

            /** IMAP only. */
            renameFolder(path: string, newPath: string): Folder;
            renameFolderAsync(path: string, newPath: string): Promise<Folder>;

            /** Envelopes (no body), newest first by default. */
            fetch(options?: FetchOptions): Message[];
            fetchAsync(options?: FetchOptions): Promise<Message[]>;

            /** Envelopes matching `query`; the array carries `fallback`. */
            search(query: SearchQuery, options?: SearchOptions): SearchResult;
            searchAsync(query: SearchQuery, options?: SearchOptions): Promise<SearchResult>;

            /** The message with body, headers and attachment metadata. */
            get(uid: MessageRef, options?: GetOptions): Message;
            getAsync(uid: MessageRef, options?: GetOptions): Promise<Message>;

            /** Alias of `get`. */
            fetchBody(uid: MessageRef, options?: GetOptions): Message;
            fetchBodyAsync(uid: MessageRef, options?: GetOptions): Promise<Message>;

            /** Streams an attachment into `target` (directory or file path, default cwd); returns the file path. */
            download(attachment: AttachmentRef, target?: string, options?: DownloadOptions): string;
            downloadAsync(attachment: AttachmentRef, target?: string, options?: DownloadAsyncOptions): Promise<string>;

            /** Writes the RFC 822 source to `target` (directory: `<uid>.eml`); returns the file path. */
            raw(uid: MessageRef, target?: string, options?: DownloadOptions): string;
            rawAsync(uid: MessageRef, target?: string, options?: DownloadAsyncOptions): Promise<string>;

            /** IMAP only; returns the affected UIDs. */
            setFlags(uids: MessageRefs, flags: FlagName | FlagName[], mode?: FlagMode, options?: FolderOptions): Uid[];
            setFlagsAsync(uids: MessageRefs, flags: FlagName | FlagName[], mode?: FlagMode, options?: FolderOptions): Promise<Uid[]>;

            /** `setFlags(uids, 'seen', 'add')`. */
            markRead(uids: MessageRefs, options?: FolderOptions): Uid[];
            markReadAsync(uids: MessageRefs, options?: FolderOptions): Promise<Uid[]>;

            /** `setFlags(uids, 'seen', 'remove')`. */
            markUnread(uids: MessageRefs, options?: FolderOptions): Uid[];
            markUnreadAsync(uids: MessageRefs, options?: FolderOptions): Promise<Uid[]>;

            /** `setFlags(uids, 'flagged', 'add')`. */
            flag(uids: MessageRefs, options?: FolderOptions): Uid[];
            flagAsync(uids: MessageRefs, options?: FolderOptions): Promise<Uid[]>;

            /** `setFlags(uids, 'flagged', 'remove')`. */
            unflag(uids: MessageRefs, options?: FolderOptions): Uid[];
            unflagAsync(uids: MessageRefs, options?: FolderOptions): Promise<Uid[]>;

            /** IMAP only; the new UIDs when the server reports them (UIDPLUS), else true. */
            move(uids: MessageRefs, folder: string, options?: TransferOptions): number[] | true;
            moveAsync(uids: MessageRefs, folder: string, options?: TransferOptions): Promise<number[] | true>;

            /** IMAP only; like `move` but keeps the source. */
            copy(uids: MessageRefs, folder: string, options?: TransferOptions): number[] | true;
            copyAsync(uids: MessageRefs, folder: string, options?: TransferOptions): Promise<number[] | true>;

            /** IMAP: marks `deleted` (expunge on request); POP3: `DELE`, committed when the call ends. */
            delete(uids: MessageRefs, options?: DeleteOptions): Uid[];
            deleteAsync(uids: MessageRefs, options?: DeleteOptions): Promise<Uid[]>;

            /** IMAP only; the number of messages removed. */
            expunge(folder?: string): number;
            expungeAsync(folder?: string): Promise<number>;

            /** IMAP only; the new UID when the server reports it (APPENDUID), else null. */
            append(folder: string, message: SendMessage, flags?: FlagName | FlagName[]): number | null;
            appendAsync(folder: string, message: SendMessage, flags?: FlagName | FlagName[]): Promise<number | null>;

            /** Starts watching `folder` (default `'INBOX'`) for new mail; at most 4 watches per client. */
            watch(folder?: string, options?: WatchOptions): Watch;
            watch(options: WatchOptions): Watch;

        }

        /**
         * The session object returned by {@link Mail.connect}.
         * @see https://docs.autojs6.com/#/mailClientType
         */
        interface Client extends Operations {

            /** The connect options without secrets, or `{ alias }`. */
            readonly account: AccountSnapshot;

            /** Whether the plugin session is currently usable (reopened automatically by the next call). */
            readonly isConnected: boolean;

            readonly isClosed: boolean;

            /** Stops every watch and closes the connections; later calls fail with `SESSION_CLOSED`. */
            close(): void;

            /** `MailClient { provider=qq, address=user@qq.com }`. */
            toString(): string;

        }

    }

}
