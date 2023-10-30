declare module okhttp3 {
	export class Address extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Address>;
		public proxy(): java.net.Proxy;
		/** @deprecated */
		public "-deprecated_proxy"(): java.net.Proxy;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public constructor(uriHost: string, uriPort: number, dns: okhttp3.Dns, socketFactory: javax.net.SocketFactory, sslSocketFactory: javax.net.ssl.SSLSocketFactory, hostnameVerifier: javax.net.ssl.HostnameVerifier, certificatePinner: okhttp3.CertificatePinner, proxyAuthenticator: okhttp3.Authenticator, proxy: java.net.Proxy, protocols: java.util.List<any>, connectionSpecs: java.util.List<okhttp3.ConnectionSpec>, proxySelector: java.net.ProxySelector);
		/** @deprecated */
		public "-deprecated_socketFactory"(): javax.net.SocketFactory;
		/** @deprecated */
		public "-deprecated_connectionSpecs"(): java.util.List<okhttp3.ConnectionSpec>;
		/** @deprecated */
		public "-deprecated_url"(): okhttp3.HttpUrl;
		public certificatePinner(): okhttp3.CertificatePinner;
		public protocols(): java.util.List<okhttp3.Protocol>;
		/** @deprecated */
		public "-deprecated_protocols"(): java.util.List<okhttp3.Protocol>;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		/** @deprecated */
		public "-deprecated_proxyAuthenticator"(): okhttp3.Authenticator;
		public hashCode(): number;
		/** @deprecated */
		public "-deprecated_dns"(): okhttp3.Dns;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
		/** @deprecated */
		public "-deprecated_sslSocketFactory"(): javax.net.ssl.SSLSocketFactory;
		/** @deprecated */
		public "-deprecated_proxySelector"(): java.net.ProxySelector;
		public proxySelector(): java.net.ProxySelector;
		public equals(other: any): boolean;
		/** @deprecated */
		public "-deprecated_certificatePinner"(): okhttp3.CertificatePinner;
		public url(): okhttp3.HttpUrl;
		public toString(): string;
		public socketFactory(): javax.net.SocketFactory;
		public equals(obj: any): boolean;
		public equalsNonHost$okhttp(that: okhttp3.Address): boolean;
		/** @deprecated */
		public "-deprecated_hostnameVerifier"(): javax.net.ssl.HostnameVerifier;
	}
}

declare module okhttp3 {
	export class AsyncDns extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.AsyncDns>;
		/**
		 * Constructs a new instance of the okhttp3.AsyncDns interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			query(param0: string, param1: okhttp3.AsyncDns.Callback): void;
			"<clinit>"(): void;
		});
		public constructor();
		public static TYPE_A: number;
		public static TYPE_AAAA: number;
		public query(param0: string, param1: okhttp3.AsyncDns.Callback): void;
	}
	export module AsyncDns {
		export class Callback extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.AsyncDns.Callback>;
			/**
			 * Constructs a new instance of the okhttp3.AsyncDns$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onResponse(param0: string, param1: java.util.List<any>): void;
				onFailure(param0: string, param1: java.io.IOException): void;
			});
			public constructor();
			public onFailure(param0: string, param1: java.io.IOException): void;
			public onResponse(param0: string, param1: java.util.List<any>): void;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.AsyncDns.Companion>;
			public static TYPE_A: number;
			public static TYPE_AAAA: number;
			public toDns(...asyncDns: okhttp3.AsyncDns[]): okhttp3.Dns;
		}
		export class DnsClass {
			public static class: java.lang.Class<okhttp3.AsyncDns.DnsClass>;
			public static IPV4: okhttp3.AsyncDns.DnsClass;
			public static IPV6: okhttp3.AsyncDns.DnsClass;
			public getType(): number;
			public static values(): okhttp3.AsyncDns.DnsClass[];
			public static valueOf(value: string): okhttp3.AsyncDns.DnsClass;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		}
	}
}

declare module okhttp3 {
	export class Authenticator extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Authenticator>;
		/**
		 * Constructs a new instance of the okhttp3.Authenticator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
			"<clinit>"(): void;
		});
		public constructor();
		public static NONE: okhttp3.Authenticator;
		public static JAVA_NET_AUTHENTICATOR: okhttp3.Authenticator;
		public authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
	}
	export module Authenticator {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Authenticator.Companion>;
		}
		export module Companion {
			export class AuthenticatorNone extends java.lang.Object implements okhttp3.Authenticator {
				public static class: java.lang.Class<okhttp3.Authenticator.Companion.AuthenticatorNone>;
				public authenticate(route: okhttp3.Route, response: okhttp3.Response): okhttp3.Request;
				public authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export class Cache extends java.lang.Object implements java.io.Closeable, java.io.Flushable {
		public static class: java.lang.Class<okhttp3.Cache>;
		public trackConditionalCacheHit$okhttp(): void;
		public setWriteSuccessCount$okhttp(_set_: number): void;
		public get$okhttp(request: okhttp3.Request): okhttp3.Response;
		public close(): void;
		public directory(): java.io.File;
		public writeAbortCount(): number;
		public constructor(directory: okio.Path, maxSize: number, param2: okio.FileSystem);
		public isClosed(): boolean;
		public delete(): void;
		/** @deprecated */
		public "-deprecated_directory"(): java.io.File;
		public trackResponse$okhttp(cacheStrategy: okhttp3.internal.cache.CacheStrategy): void;
		public size(): number;
		public setWriteAbortCount$okhttp(_set_: number): void;
		public urls(): java.util.Iterator<string>;
		public maxSize(): number;
		public getWriteSuccessCount$okhttp(): number;
		public getCache$okhttp(): okhttp3.internal.cache.DiskLruCache;
		public remove$okhttp(request: okhttp3.Request): void;
		public evictAll(): void;
		public networkCount(): number;
		public getWriteAbortCount$okhttp(): number;
		public requestCount(): number;
		public flush(): void;
		public put$okhttp(response: okhttp3.Response): okhttp3.internal.cache.CacheRequest;
		public update$okhttp(cached: okhttp3.Response, network: okhttp3.Response): void;
		public initialize(): void;
		public directoryPath(): okio.Path;
		public static key(url: okhttp3.HttpUrl): string;
		public writeSuccessCount(): number;
		public hitCount(): number;
		public constructor(directory: java.io.File, maxSize: number);
	}
	export module Cache {
		export class CacheResponseBody extends okhttp3.ResponseBody {
			public static class: java.lang.Class<okhttp3.Cache.CacheResponseBody>;
			public getSnapshot(): okhttp3.internal.cache.DiskLruCache.Snapshot;
			public contentLength(): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
			public constructor();
			public close(): void;
			public constructor(snapshot: okhttp3.internal.cache.DiskLruCache.Snapshot, contentType: string, contentLength: string);
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Cache.Companion>;
			public key(url: okhttp3.HttpUrl): string;
			public varyMatches(cachedResponse: okhttp3.Response, cachedRequest: okhttp3.Headers, newRequest: okhttp3.Request): boolean;
			public varyHeaders($this$varyHeaders: okhttp3.Response): okhttp3.Headers;
			public hasVaryAll($this$hasVaryAll: okhttp3.Response): boolean;
			public readInt$okhttp(source: okio.BufferedSource): number;
		}
		export class Entry extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Cache.Entry>;
			public constructor(response: okhttp3.Response);
			public writeTo(editor: okhttp3.internal.cache.DiskLruCache.Editor): void;
			public matches(request: okhttp3.Request, response: okhttp3.Response): boolean;
			public response(snapshot: okhttp3.internal.cache.DiskLruCache.Snapshot): okhttp3.Response;
			public constructor(rawSource: okio.Source);
		}
		export module Entry {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.Cache.Entry.Companion>;
			}
		}
		export class RealCacheRequest extends java.lang.Object implements okhttp3.internal.cache.CacheRequest {
			public static class: java.lang.Class<okhttp3.Cache.RealCacheRequest>;
			public getDone(): boolean;
			public body(): okio.Sink;
			public setDone(_set_: boolean): void;
			public abort(): void;
			public constructor(this$0: okhttp3.internal.cache.DiskLruCache.Editor);
		}
	}
}

declare module okhttp3 {
	export class CacheControl extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.CacheControl>;
		public static FORCE_NETWORK: okhttp3.CacheControl;
		public static FORCE_CACHE: okhttp3.CacheControl;
		/** @deprecated */
		public "-deprecated_noCache"(): boolean;
		public constructor(noCache: boolean, noStore: boolean, maxAgeSeconds: number, sMaxAgeSeconds: number, isPrivate: boolean, isPublic: boolean, mustRevalidate: boolean, maxStaleSeconds: number, minFreshSeconds: number, onlyIfCached: boolean, noTransform: boolean, immutable: boolean, headerValue: string);
		public maxStaleSeconds(): number;
		public static parse(headers: okhttp3.Headers): okhttp3.CacheControl;
		public mustRevalidate(): boolean;
		public onlyIfCached(): boolean;
		public isPrivate(): boolean;
		public immutable(): boolean;
		public sMaxAgeSeconds(): number;
		/** @deprecated */
		public "-deprecated_immutable"(): boolean;
		/** @deprecated */
		public "-deprecated_onlyIfCached"(): boolean;
		/** @deprecated */
		public "-deprecated_mustRevalidate"(): boolean;
		/** @deprecated */
		public "-deprecated_noStore"(): boolean;
		/** @deprecated */
		public "-deprecated_minFreshSeconds"(): number;
		/** @deprecated */
		public "-deprecated_maxAgeSeconds"(): number;
		public toString(): string;
		public minFreshSeconds(): number;
		/** @deprecated */
		public "-deprecated_sMaxAgeSeconds"(): number;
		public noCache(): boolean;
		public noTransform(): boolean;
		/** @deprecated */
		public "-deprecated_noTransform"(): boolean;
		public setHeaderValue$okhttp(_set_: string): void;
		public getHeaderValue$okhttp(): string;
		/** @deprecated */
		public "-deprecated_maxStaleSeconds"(): number;
		public noStore(): boolean;
		public maxAgeSeconds(): number;
		public isPublic(): boolean;
	}
	export module CacheControl {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CacheControl.Builder>;
			public setNoStore$okhttp(_set_: boolean): void;
			public noCache(): okhttp3.CacheControl.Builder;
			public getNoTransform$okhttp(): boolean;
			public onlyIfCached(): okhttp3.CacheControl.Builder;
			public minFresh(minFresh: number, timeUnit: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public setNoCache$okhttp(_set_: boolean): void;
			public minFresh(minFresh: number, timeUnit: kotlin.time.DurationUnit): okhttp3.CacheControl.Builder;
			public build(): okhttp3.CacheControl;
			public setImmutable$okhttp(_set_: boolean): void;
			public maxAge(maxAge: number, timeUnit: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public setMaxStaleSeconds$okhttp(_set_: number): void;
			public immutable(): okhttp3.CacheControl.Builder;
			public getMaxAgeSeconds$okhttp(): number;
			public maxAge(maxAge: number, timeUnit: kotlin.time.DurationUnit): okhttp3.CacheControl.Builder;
			public getNoStore$okhttp(): boolean;
			public constructor();
			public noTransform(): okhttp3.CacheControl.Builder;
			public getNoCache$okhttp(): boolean;
			public setMaxAgeSeconds$okhttp(_set_: number): void;
			public setNoTransform$okhttp(_set_: boolean): void;
			public maxStale(maxStale: number, timeUnit: kotlin.time.DurationUnit): okhttp3.CacheControl.Builder;
			public getMaxStaleSeconds$okhttp(): number;
			public setMinFreshSeconds$okhttp(_set_: number): void;
			public getMinFreshSeconds$okhttp(): number;
			public maxStale(maxStale: number, timeUnit: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public noStore(): okhttp3.CacheControl.Builder;
			public setOnlyIfCached$okhttp(_set_: boolean): void;
			public getOnlyIfCached$okhttp(): boolean;
			public getImmutable$okhttp(): boolean;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CacheControl.Companion>;
			public parse(headers: okhttp3.Headers): okhttp3.CacheControl;
		}
	}
}

declare module okhttp3 {
	export class Call extends java.lang.Object implements java.lang.Cloneable {
		public static class: java.lang.Class<okhttp3.Call>;
		/**
		 * Constructs a new instance of the okhttp3.Call interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			request(): okhttp3.Request;
			execute(): okhttp3.Response;
			enqueue(param0: okhttp3.Callback): void;
			cancel(): void;
			isExecuted(): boolean;
			isCanceled(): boolean;
			timeout(): okio.Timeout;
			clone(): okhttp3.Call;
		});
		public constructor();
		public isExecuted(): boolean;
		public clone(): okhttp3.Call;
		public request(): okhttp3.Request;
		public execute(): okhttp3.Response;
		public isCanceled(): boolean;
		public clone(): any;
		public enqueue(param0: okhttp3.Callback): void;
		public cancel(): void;
		public timeout(): okio.Timeout;
	}
	export module Call {
		export class Factory extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Call.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.Call$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				newCall(param0: okhttp3.Request): okhttp3.Call;
			});
			public constructor();
			public newCall(param0: okhttp3.Request): okhttp3.Call;
		}
	}
}

declare module okhttp3 {
	export class Callback extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Callback>;
		/**
		 * Constructs a new instance of the okhttp3.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
			onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
		});
		public constructor();
		public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
		public onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
	}
}

declare module okhttp3 {
	export class CertificatePinner extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.CertificatePinner>;
		public static DEFAULT: okhttp3.CertificatePinner;
		public constructor(pins: java.util.Set<okhttp3.CertificatePinner.Pin>, certificateChainCleaner: okhttp3.internal.tls.CertificateChainCleaner);
		public equals(other: any): boolean;
		/** @deprecated */
		public check(hostname: string, ...peerCertificates: java.security.cert.Certificate[]): void;
		public static sha256Hash($this$sha256Hash: java.security.cert.X509Certificate): okio.ByteString;
		public static pin(certificate: java.security.cert.Certificate): string;
		public withCertificateChainCleaner$okhttp(certificateChainCleaner: okhttp3.internal.tls.CertificateChainCleaner): okhttp3.CertificatePinner;
		public findMatchingPins(hostname: string): java.util.List<okhttp3.CertificatePinner.Pin>;
		public getCertificateChainCleaner$okhttp(): okhttp3.internal.tls.CertificateChainCleaner;
		public equals(obj: any): boolean;
		public static sha1Hash($this$sha1Hash: java.security.cert.X509Certificate): okio.ByteString;
		public check(hostname: string, peerCertificates: java.util.List<any>): void;
		public hashCode(): number;
		public check$okhttp(hostname: string, cleanedPeerCertificatesFn: kotlin.jvm.functions.Function0<any>): void;
		public getPins(): java.util.Set<okhttp3.CertificatePinner.Pin>;
	}
	export module CertificatePinner {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Builder>;
			public build(): okhttp3.CertificatePinner;
			public constructor();
			public add(pattern: string, ...pins: string[]): okhttp3.CertificatePinner.Builder;
			public getPins(): java.util.List<okhttp3.CertificatePinner.Pin>;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Companion>;
			public sha1Hash($this$sha1Hash: java.security.cert.X509Certificate): okio.ByteString;
			public sha256Hash($this$sha256Hash: java.security.cert.X509Certificate): okio.ByteString;
			public pin(certificate: java.security.cert.Certificate): string;
		}
		export class Pin extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Pin>;
			public matchesCertificate(certificate: java.security.cert.X509Certificate): boolean;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public matchesHostname(hostname: string): boolean;
			public constructor(pattern: string, pin: string);
			public getHash(): okio.ByteString;
			public getHashAlgorithm(): string;
			public getPattern(): string;
			public hashCode(): number;
		}
	}
}

declare module okhttp3 {
	export class Challenge extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Challenge>;
		public constructor(scheme: string, realm: string);
		public equals(other: any): boolean;
		/** @deprecated */
		public "-deprecated_realm"(): string;
		public scheme(): string;
		public toString(): string;
		public withCharset(charset: java.nio.charset.Charset): okhttp3.Challenge;
		/** @deprecated */
		public "-deprecated_charset"(): java.nio.charset.Charset;
		public realm(): string;
		public authParams(): java.util.Map<string,string>;
		public charset(): java.nio.charset.Charset;
		/** @deprecated */
		public "-deprecated_scheme"(): string;
		public equals(obj: any): boolean;
		public hashCode(): number;
		public constructor(scheme: string, authParams: java.util.Map<string,string>);
		/** @deprecated */
		public "-deprecated_authParams"(): java.util.Map<string,string>;
	}
}

declare module okhttp3 {
	export class CipherSuite extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.CipherSuite>;
		public static TLS_RSA_WITH_NULL_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_DES_CBC_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_3DES_EDE_CBC_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_RC4_40_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_NULL_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_SEED_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_EMPTY_RENEGOTIATION_INFO_SCSV: okhttp3.CipherSuite;
		public static TLS_FALLBACK_SCSV: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_128_CCM_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_128_CCM_8_SHA256: okhttp3.CipherSuite;
		public javaName(): string;
		/** @deprecated */
		public "-deprecated_javaName"(): string;
		public toString(): string;
		public static forJavaName(javaName: string): okhttp3.CipherSuite;
	}
	export module CipherSuite {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CipherSuite.Companion>;
			public forJavaName(javaName: string): okhttp3.CipherSuite;
			public getORDER_BY_NAME$okhttp(): java.util.Comparator<string>;
		}
	}
}

declare module okhttp3 {
	export class Connection extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Connection>;
		/**
		 * Constructs a new instance of the okhttp3.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			route(): okhttp3.Route;
			socket(): java.net.Socket;
			handshake(): okhttp3.Handshake;
			protocol(): okhttp3.Protocol;
		});
		public constructor();
		public route(): okhttp3.Route;
		public protocol(): okhttp3.Protocol;
		public handshake(): okhttp3.Handshake;
		public socket(): java.net.Socket;
	}
}

declare module okhttp3 {
	export class ConnectionPool extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.ConnectionPool>;
		public constructor();
		public constructor(maxIdleConnections: number, keepAliveDuration: number, param2: java.util.concurrent.TimeUnit);
		public connectionCount(): number;
		public getDelegate$okhttp(): okhttp3.internal.connection.RealConnectionPool;
		public evictAll(): void;
		public idleConnectionCount(): number;
		public constructor(delegate: okhttp3.internal.connection.RealConnectionPool);
	}
}

declare module okhttp3 {
	export class ConnectionSpec extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.ConnectionSpec>;
		public static RESTRICTED_TLS: okhttp3.ConnectionSpec;
		public static MODERN_TLS: okhttp3.ConnectionSpec;
		public static COMPATIBLE_TLS: okhttp3.ConnectionSpec;
		public static CLEARTEXT: okhttp3.ConnectionSpec;
		public cipherSuites(): java.util.List<okhttp3.CipherSuite>;
		public equals(other: any): boolean;
		public supportsTlsExtensions(): boolean;
		public tlsVersions(): java.util.List<okhttp3.TlsVersion>;
		public apply$okhttp(sslSocket: javax.net.ssl.SSLSocket, isFallback: boolean): void;
		public toString(): string;
		/** @deprecated */
		public "-deprecated_supportsTlsExtensions"(): boolean;
		public getCipherSuitesAsString$okhttp(): string[];
		public constructor(isTls: boolean, supportsTlsExtensions: boolean, cipherSuitesAsString: string[], tlsVersionsAsString: string[]);
		public equals(obj: any): boolean;
		/** @deprecated */
		public "-deprecated_cipherSuites"(): java.util.List<okhttp3.CipherSuite>;
		public isCompatible(socket: javax.net.ssl.SSLSocket): boolean;
		public hashCode(): number;
		public isTls(): boolean;
		/** @deprecated */
		public "-deprecated_tlsVersions"(): java.util.List<okhttp3.TlsVersion>;
	}
	export module ConnectionSpec {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.ConnectionSpec.Builder>;
			public build(): okhttp3.ConnectionSpec;
			public getCipherSuites$okhttp(): string[];
			public getSupportsTlsExtensions$okhttp(): boolean;
			public tlsVersions(...tlsVersions: okhttp3.TlsVersion[]): okhttp3.ConnectionSpec.Builder;
			/** @deprecated */
			public supportsTlsExtensions(supportsTlsExtensions: boolean): okhttp3.ConnectionSpec.Builder;
			public cipherSuites(...cipherSuites: okhttp3.CipherSuite[]): okhttp3.ConnectionSpec.Builder;
			public constructor(tls: boolean);
			public setCipherSuites$okhttp(_set_: string[]): void;
			public getTls$okhttp(): boolean;
			public getTlsVersions$okhttp(): string[];
			public allEnabledCipherSuites(): okhttp3.ConnectionSpec.Builder;
			public setSupportsTlsExtensions$okhttp(_set_: boolean): void;
			public allEnabledTlsVersions(): okhttp3.ConnectionSpec.Builder;
			public tlsVersions(...tlsVersions: string[]): okhttp3.ConnectionSpec.Builder;
			public cipherSuites(...cipherSuites: string[]): okhttp3.ConnectionSpec.Builder;
			public constructor(connectionSpec: okhttp3.ConnectionSpec);
			public setTls$okhttp(_set_: boolean): void;
			public setTlsVersions$okhttp(_set_: string[]): void;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.ConnectionSpec.Companion>;
		}
	}
}

declare module okhttp3 {
	export class Cookie extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Cookie>;
		/** @deprecated */
		public "-deprecated_secure"(): boolean;
		public static parse(url: okhttp3.HttpUrl, setCookie: string): okhttp3.Cookie;
		public toString$okhttp(forObsoleteRfc2965: boolean): string;
		public static parseAll(url: okhttp3.HttpUrl, headers: okhttp3.Headers): java.util.List<okhttp3.Cookie>;
		public httpOnly(): boolean;
		public expiresAt(): number;
		/** @deprecated */
		public "-deprecated_path"(): string;
		public hashCode(): number;
		/** @deprecated */
		public "-deprecated_httpOnly"(): boolean;
		public secure(): boolean;
		/** @deprecated */
		public "-deprecated_value"(): string;
		public domain(): string;
		public equals(other: any): boolean;
		public matches(url: okhttp3.HttpUrl): boolean;
		/** @deprecated */
		public "-deprecated_persistent"(): boolean;
		/** @deprecated */
		public "-deprecated_domain"(): string;
		public toString(): string;
		public newBuilder(): okhttp3.Cookie.Builder;
		public persistent(): boolean;
		public hostOnly(): boolean;
		public equals(obj: any): boolean;
		/** @deprecated */
		public "-deprecated_expiresAt"(): number;
		/** @deprecated */
		public "-deprecated_hostOnly"(): boolean;
		/** @deprecated */
		public "-deprecated_name"(): string;
		public name(): string;
		public path(): string;
		public value(): string;
	}
	export module Cookie {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Cookie.Builder>;
			public httpOnly(): okhttp3.Cookie.Builder;
			public value(value: string): okhttp3.Cookie.Builder;
			public secure(): okhttp3.Cookie.Builder;
			public name(name: string): okhttp3.Cookie.Builder;
			public build(): okhttp3.Cookie;
			public expiresAt(expiresAt: number): okhttp3.Cookie.Builder;
			public domain(domain: string): okhttp3.Cookie.Builder;
			public hostOnlyDomain(domain: string): okhttp3.Cookie.Builder;
			public constructor();
			public constructor(cookie: okhttp3.Cookie);
			public path(path: string): okhttp3.Cookie.Builder;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Cookie.Companion>;
			public parse(url: okhttp3.HttpUrl, setCookie: string): okhttp3.Cookie;
			public parseAll(url: okhttp3.HttpUrl, headers: okhttp3.Headers): java.util.List<okhttp3.Cookie>;
			public parse$okhttp(currentTimeMillis: number, param1: okhttp3.HttpUrl, url: string): okhttp3.Cookie;
		}
	}
}

declare module okhttp3 {
	export class CookieJar extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.CookieJar>;
		/**
		 * Constructs a new instance of the okhttp3.CookieJar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
			loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
			"<clinit>"(): void;
		});
		public constructor();
		public static NO_COOKIES: okhttp3.CookieJar;
		public loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
		public saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
	}
	export module CookieJar {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.CookieJar.Companion>;
		}
		export module Companion {
			export class NoCookies extends java.lang.Object implements okhttp3.CookieJar {
				public static class: java.lang.Class<okhttp3.CookieJar.Companion.NoCookies>;
				public saveFromResponse(url: okhttp3.HttpUrl, cookies: java.util.List<okhttp3.Cookie>): void;
				public loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
				public saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
				public constructor();
				public loadForRequest(url: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
			}
		}
	}
}

declare module okhttp3 {
	export class Credentials extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Credentials>;
		public static INSTANCE: okhttp3.Credentials;
		public static basic(username: string, password: string, charset: java.nio.charset.Charset): string;
		public static basic(username: string, password: string): string;
	}
}

declare module okhttp3 {
	export class Dispatcher extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Dispatcher>;
		public constructor();
		public executed$okhttp(call: okhttp3.internal.connection.RealCall): void;
		public setIdleCallback(_set_: java.lang.Runnable): void;
		public finished$okhttp(call: okhttp3.internal.connection.RealCall): void;
		public constructor(executorService: java.util.concurrent.ExecutorService);
		public finished$okhttp(call: okhttp3.internal.connection.RealCall.AsyncCall): void;
		public queuedCallsCount(): number;
		public enqueue$okhttp(call: okhttp3.internal.connection.RealCall.AsyncCall): void;
		public runningCallsCount(): number;
		public runningCalls(): java.util.List<okhttp3.Call>;
		/** @deprecated */
		public "-deprecated_executorService"(): java.util.concurrent.ExecutorService;
		public setMaxRequestsPerHost(maxRequestsPerHost: number): void;
		public cancelAll(): void;
		public setMaxRequests(maxRequests: number): void;
		public queuedCalls(): java.util.List<okhttp3.Call>;
		public getMaxRequestsPerHost(): number;
		public executorService(): java.util.concurrent.ExecutorService;
		public getIdleCallback(): java.lang.Runnable;
		public getMaxRequests(): number;
	}
}

declare module okhttp3 {
	export class Dns extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Dns>;
		/**
		 * Constructs a new instance of the okhttp3.Dns interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			lookup(param0: string): java.util.List<java.net.InetAddress>;
			"<clinit>"(): void;
		});
		public constructor();
		public static SYSTEM: okhttp3.Dns;
		public lookup(param0: string): java.util.List<java.net.InetAddress>;
	}
	export module Dns {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Dns.Companion>;
		}
		export module Companion {
			export class DnsSystem extends java.lang.Object implements okhttp3.Dns {
				public static class: java.lang.Class<okhttp3.Dns.Companion.DnsSystem>;
				public lookup(param0: string): java.util.List<java.net.InetAddress>;
				public lookup(hostname: string): java.util.List<java.net.InetAddress>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export abstract class EventListener extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.EventListener>;
		public static NONE: okhttp3.EventListener;
		public connectStart(call: okhttp3.Call, inetSocketAddress: java.net.InetSocketAddress, proxy: java.net.Proxy): void;
		public cacheHit(call: okhttp3.Call, response: okhttp3.Response): void;
		public proxySelectEnd(call: okhttp3.Call, url: okhttp3.HttpUrl, proxies: java.util.List<java.net.Proxy>): void;
		public responseFailed(call: okhttp3.Call, ioe: java.io.IOException): void;
		public proxySelectStart(call: okhttp3.Call, url: okhttp3.HttpUrl): void;
		public connectEnd(call: okhttp3.Call, inetSocketAddress: java.net.InetSocketAddress, proxy: java.net.Proxy, protocol: okhttp3.Protocol): void;
		public dnsStart(call: okhttp3.Call, domainName: string): void;
		public connectionAcquired(call: okhttp3.Call, connection: okhttp3.Connection): void;
		public callEnd(call: okhttp3.Call): void;
		public callStart(call: okhttp3.Call): void;
		public responseHeadersStart(call: okhttp3.Call): void;
		public connectFailed(call: okhttp3.Call, inetSocketAddress: java.net.InetSocketAddress, proxy: java.net.Proxy, protocol: okhttp3.Protocol, ioe: java.io.IOException): void;
		public constructor();
		public dnsEnd(call: okhttp3.Call, domainName: string, inetAddressList: java.util.List<java.net.InetAddress>): void;
		public canceled(call: okhttp3.Call): void;
		public responseBodyStart(call: okhttp3.Call): void;
		public secureConnectEnd(call: okhttp3.Call, handshake: okhttp3.Handshake): void;
		public requestHeadersStart(call: okhttp3.Call): void;
		public satisfactionFailure(call: okhttp3.Call, response: okhttp3.Response): void;
		public cacheConditionalHit(call: okhttp3.Call, cachedResponse: okhttp3.Response): void;
		public secureConnectStart(call: okhttp3.Call): void;
		public requestBodyStart(call: okhttp3.Call): void;
		public responseBodyEnd(call: okhttp3.Call, byteCount: number): void;
		public requestFailed(call: okhttp3.Call, ioe: java.io.IOException): void;
		public connectionReleased(call: okhttp3.Call, connection: okhttp3.Connection): void;
		public requestBodyEnd(call: okhttp3.Call, byteCount: number): void;
		public requestHeadersEnd(call: okhttp3.Call, request: okhttp3.Request): void;
		public cacheMiss(call: okhttp3.Call): void;
		public callFailed(call: okhttp3.Call, ioe: java.io.IOException): void;
		public responseHeadersEnd(call: okhttp3.Call, response: okhttp3.Response): void;
	}
	export module EventListener {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.EventListener.Companion>;
		}
		export class Factory extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.EventListener.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.EventListener$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				create(param0: okhttp3.Call): okhttp3.EventListener;
			});
			public constructor();
			public create(param0: okhttp3.Call): okhttp3.EventListener;
		}
	}
}

declare module okhttp3 {
	export class FormBody extends okhttp3.RequestBody {
		public static class: java.lang.Class<okhttp3.FormBody>;
		public constructor();
		public encodedValue(index: number): string;
		/** @deprecated */
		public "-deprecated_size"(): number;
		public constructor(encodedNames: java.util.List<string>, encodedValues: java.util.List<string>);
		public encodedName(index: number): string;
		public value(index: number): string;
		public size(): number;
		public writeTo(sink: okio.BufferedSink): void;
		public name(index: number): string;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public contentLength(): number;
	}
	export module FormBody {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.FormBody.Builder>;
			public addEncoded(name: string, value: string): okhttp3.FormBody.Builder;
			public constructor(charset: java.nio.charset.Charset);
			public add(name: string, value: string): okhttp3.FormBody.Builder;
			public constructor();
			public build(): okhttp3.FormBody;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.FormBody.Companion>;
		}
	}
}

declare module okhttp3 {
	export class Handshake extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Handshake>;
		public equals(other: any): boolean;
		public static get(tlsVersion: okhttp3.TlsVersion, cipherSuite: okhttp3.CipherSuite, peerCertificates: java.util.List<any>, localCertificates: java.util.List<any>): okhttp3.Handshake;
		/** @deprecated */
		public "-deprecated_localPrincipal"(): java.security.Principal;
		/** @deprecated */
		public "-deprecated_cipherSuite"(): okhttp3.CipherSuite;
		public localCertificates(): java.util.List<java.security.cert.Certificate>;
		/** @deprecated */
		public "-deprecated_tlsVersion"(): okhttp3.TlsVersion;
		/** @deprecated */
		public "-deprecated_peerCertificates"(): java.util.List<java.security.cert.Certificate>;
		public peerCertificates(): java.util.List<java.security.cert.Certificate>;
		public toString(): string;
		public peerPrincipal(): java.security.Principal;
		public constructor(tlsVersion: okhttp3.TlsVersion, cipherSuite: okhttp3.CipherSuite, localCertificates: java.util.List<any>, peerCertificatesFn: kotlin.jvm.functions.Function0<any>);
		public equals(obj: any): boolean;
		public hashCode(): number;
		/** @deprecated */
		public "-deprecated_peerPrincipal"(): java.security.Principal;
		public localPrincipal(): java.security.Principal;
		public static get($this$get: javax.net.ssl.SSLSession): okhttp3.Handshake;
		public tlsVersion(): okhttp3.TlsVersion;
		/** @deprecated */
		public "-deprecated_localCertificates"(): java.util.List<java.security.cert.Certificate>;
		public cipherSuite(): okhttp3.CipherSuite;
	}
	export module Handshake {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Handshake.Companion>;
			public get($this$handshake: javax.net.ssl.SSLSession): okhttp3.Handshake;
			/** @deprecated */
			public "-deprecated_get"(sslSession: javax.net.ssl.SSLSession): okhttp3.Handshake;
			public get(tlsVersion: okhttp3.TlsVersion, cipherSuite: okhttp3.CipherSuite, peerCertificates: java.util.List<any>, localCertificates: java.util.List<any>): okhttp3.Handshake;
		}
	}
}

declare module okhttp3 {
	export class Headers extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Headers>;
		public newBuilder(): okhttp3.Headers.Builder;
		public equals(other: any): boolean;
		public iterator(): java.util.Iterator<any>;
		public toString(): string;
		public getDate(name: string): java.util.Date;
		public get(name: string): string;
		public equals(obj: any): boolean;
		/** @deprecated */
		public "-deprecated_size"(): number;
		public names(): java.util.Set<string>;
		public value(index: number): string;
		public static of(...namesAndValues: string[]): okhttp3.Headers;
		public static of($this$of: java.util.Map<string,string>): okhttp3.Headers;
		public size(): number;
		public iterator(): java.util.Iterator<kotlin.Pair<string,string>>;
		public spliterator(): java.util.Spliterator<any>;
		public hashCode(): number;
		public toMultimap(): java.util.Map<string,java.util.List<string>>;
		public getInstant(name: string): java.time.Instant;
		public byteCount(): number;
		public name(index: number): string;
		public values(name: string): java.util.List<string>;
		public forEach(action: any /* any*/): void;
		public constructor(namesAndValues: string[]);
		public getNamesAndValues$okhttp(): string[];
	}
	export module Headers {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Headers.Builder>;
			public add(line: string): okhttp3.Headers.Builder;
			public build(): okhttp3.Headers;
			public addLenient$okhttp(name: string, value: string): okhttp3.Headers.Builder;
			public removeAll(name: string): okhttp3.Headers.Builder;
			public getNamesAndValues$okhttp(): java.util.List<string>;
			public addUnsafeNonAscii(name: string, value: string): okhttp3.Headers.Builder;
			public constructor();
			public add(name: string, value: string): okhttp3.Headers.Builder;
			public set(name: string, value: string): okhttp3.Headers.Builder;
			public get(name: string): string;
			public set(name: string, value: java.util.Date): okhttp3.Headers.Builder;
			public addLenient$okhttp(line: string): okhttp3.Headers.Builder;
			public set(name: string, value: java.time.Instant): okhttp3.Headers.Builder;
			public add(name: string, value: java.time.Instant): okhttp3.Headers.Builder;
			public addAll(headers: okhttp3.Headers): okhttp3.Headers.Builder;
			public add(name: string, value: java.util.Date): okhttp3.Headers.Builder;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Headers.Companion>;
			public of($this$toHeaders: java.util.Map<string,string>): okhttp3.Headers;
			/** @deprecated */
			public "-deprecated_of"(headers: java.util.Map<string,string>): okhttp3.Headers;
			/** @deprecated */
			public "-deprecated_of"(...namesAndValues: string[]): okhttp3.Headers;
			public of(...namesAndValues: string[]): okhttp3.Headers;
		}
	}
}

declare module okhttp3 {
	export class HttpUrl extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.HttpUrl>;
		public static USERNAME_ENCODE_SET: string;
		public static PASSWORD_ENCODE_SET: string;
		public static PATH_SEGMENT_ENCODE_SET: string;
		public static PATH_SEGMENT_ENCODE_SET_URI: string;
		public static QUERY_ENCODE_SET: string;
		public static QUERY_COMPONENT_REENCODE_SET: string;
		public static QUERY_COMPONENT_ENCODE_SET: string;
		public static QUERY_COMPONENT_ENCODE_SET_URI: string;
		public static FORM_ENCODE_SET: string;
		public static FRAGMENT_ENCODE_SET: string;
		public static FRAGMENT_ENCODE_SET_URI: string;
		public topPrivateDomain(): string;
		public queryParameterName(index: number): string;
		/** @deprecated */
		public "-deprecated_query"(): string;
		public queryParameterNames(): java.util.Set<string>;
		public encodedPassword(): string;
		public query(): string;
		/** @deprecated */
		public "-deprecated_uri"(): java.net.URI;
		public pathSize(): number;
		/** @deprecated */
		public "-deprecated_encodedUsername"(): string;
		public isHttps(): boolean;
		/** @deprecated */
		public "-deprecated_encodedPathSegments"(): java.util.List<string>;
		public newBuilder(): okhttp3.HttpUrl.Builder;
		/** @deprecated */
		public "-deprecated_encodedPassword"(): string;
		public port(): number;
		/** @deprecated */
		public "-deprecated_encodedQuery"(): string;
		public encodedFragment(): string;
		public redact(): string;
		public fragment(): string;
		public toString(): string;
		public uri(): java.net.URI;
		/** @deprecated */
		public "-deprecated_port"(): number;
		/** @deprecated */
		public "-deprecated_pathSegments"(): java.util.List<string>;
		public host(): string;
		/** @deprecated */
		public "-deprecated_url"(): java.net.URL;
		/** @deprecated */
		public "-deprecated_encodedFragment"(): string;
		public url(): java.net.URL;
		public querySize(): number;
		/** @deprecated */
		public "-deprecated_username"(): string;
		public scheme(): string;
		public newBuilder(link: string): okhttp3.HttpUrl.Builder;
		/** @deprecated */
		public "-deprecated_querySize"(): number;
		public queryParameter(name: string): string;
		public password(): string;
		public hashCode(): number;
		public constructor(scheme: string, username: string, password: string, host: string, port: number, pathSegments: java.util.List<string>, queryNamesAndValues: java.util.List<string>, fragment: string, url: string);
		public encodedPathSegments(): java.util.List<string>;
		public equals(other: any): boolean;
		/** @deprecated */
		public "-deprecated_host"(): string;
		public queryParameterValue(index: number): string;
		public encodedQuery(): string;
		/** @deprecated */
		public "-deprecated_pathSize"(): number;
		public encodedPath(): string;
		/** @deprecated */
		public "-deprecated_fragment"(): string;
		/** @deprecated */
		public "-deprecated_password"(): string;
		/** @deprecated */
		public "-deprecated_encodedPath"(): string;
		public queryParameterValues(name: string): java.util.List<string>;
		public static get($this$get: java.net.URL): okhttp3.HttpUrl;
		public static get($this$get: java.net.URI): okhttp3.HttpUrl;
		public encodedUsername(): string;
		public equals(obj: any): boolean;
		/** @deprecated */
		public "-deprecated_scheme"(): string;
		/** @deprecated */
		public "-deprecated_queryParameterNames"(): java.util.Set<string>;
		public static defaultPort(scheme: string): number;
		public pathSegments(): java.util.List<string>;
		public resolve(link: string): okhttp3.HttpUrl;
		public static parse($this$parse: string): okhttp3.HttpUrl;
		public static get($this$get: string): okhttp3.HttpUrl;
		public username(): string;
	}
	export module HttpUrl {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.HttpUrl.Builder>;
			public static INVALID_HOST: string;
			public fragment(fragment: string): okhttp3.HttpUrl.Builder;
			public removeAllQueryParameters(name: string): okhttp3.HttpUrl.Builder;
			public getEncodedQueryNamesAndValues$okhttp(): java.util.List<string>;
			public removeAllEncodedQueryParameters(encodedName: string): okhttp3.HttpUrl.Builder;
			public addEncodedQueryParameter(encodedName: string, encodedValue: string): okhttp3.HttpUrl.Builder;
			public parse$okhttp(base: okhttp3.HttpUrl, input: string): okhttp3.HttpUrl.Builder;
			public getEncodedPathSegments$okhttp(): java.util.List<string>;
			public setQueryParameter(name: string, value: string): okhttp3.HttpUrl.Builder;
			public addQueryParameter(name: string, value: string): okhttp3.HttpUrl.Builder;
			public addEncodedPathSegment(encodedPathSegment: string): okhttp3.HttpUrl.Builder;
			public scheme(scheme: string): okhttp3.HttpUrl.Builder;
			public addPathSegment(pathSegment: string): okhttp3.HttpUrl.Builder;
			public host(host: string): okhttp3.HttpUrl.Builder;
			public encodedQuery(encodedQuery: string): okhttp3.HttpUrl.Builder;
			public setEncodedQueryNamesAndValues$okhttp(_set_: java.util.List<string>): void;
			public getHost$okhttp(): string;
			public getScheme$okhttp(): string;
			public setEncodedUsername$okhttp(_set_: string): void;
			public getPort$okhttp(): number;
			public encodedPassword(encodedPassword: string): okhttp3.HttpUrl.Builder;
			public encodedPath(encodedPath: string): okhttp3.HttpUrl.Builder;
			public setEncodedQueryParameter(encodedName: string, encodedValue: string): okhttp3.HttpUrl.Builder;
			public query(query: string): okhttp3.HttpUrl.Builder;
			public setPort$okhttp(_set_: number): void;
			public addPathSegments(pathSegments: string): okhttp3.HttpUrl.Builder;
			public setHost$okhttp(_set_: string): void;
			public setPathSegment(index: number, pathSegment: string): okhttp3.HttpUrl.Builder;
			public reencodeForUri$okhttp(): okhttp3.HttpUrl.Builder;
			public constructor();
			public getEncodedUsername$okhttp(): string;
			public addEncodedPathSegments(encodedPathSegments: string): okhttp3.HttpUrl.Builder;
			public getEncodedPassword$okhttp(): string;
			public getEncodedFragment$okhttp(): string;
			public port(port: number): okhttp3.HttpUrl.Builder;
			public toString(): string;
			public username(username: string): okhttp3.HttpUrl.Builder;
			public password(password: string): okhttp3.HttpUrl.Builder;
			public setEncodedPassword$okhttp(_set_: string): void;
			public encodedUsername(encodedUsername: string): okhttp3.HttpUrl.Builder;
			public encodedFragment(encodedFragment: string): okhttp3.HttpUrl.Builder;
			public setEncodedPathSegment(index: number, encodedPathSegment: string): okhttp3.HttpUrl.Builder;
			public removePathSegment(index: number): okhttp3.HttpUrl.Builder;
			public build(): okhttp3.HttpUrl;
			public setScheme$okhttp(_set_: string): void;
			public setEncodedFragment$okhttp(_set_: string): void;
		}
		export module Builder {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.HttpUrl.Builder.Companion>;
			}
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.HttpUrl.Companion>;
			public percentDecode$okhttp($this$percentDecode: string, pos: number, limit: number, plusIsSpace: boolean): string;
			public parse($this$toHttpUrlOrNull: string): okhttp3.HttpUrl;
			public defaultPort(scheme: string): number;
			public canonicalize$okhttp($this$canonicalize: string, pos: number, limit: number, encodeSet: string, alreadyEncoded: boolean, strict: boolean, plusIsSpace: boolean, unicodeAllowed: boolean, charset: java.nio.charset.Charset): string;
			public toQueryNamesAndValues$okhttp($this$toQueryNamesAndValues: string): java.util.List<string>;
			public toQueryString$okhttp($this$toQueryString: java.util.List<string>, out: java.lang.StringBuilder): void;
			public toPathString$okhttp($this$toPathString: java.util.List<string>, out: java.lang.StringBuilder): void;
			public get($this$toHttpUrlOrNull: java.net.URI): okhttp3.HttpUrl;
			/** @deprecated */
			public "-deprecated_get"(url: string): okhttp3.HttpUrl;
			public get($this$toHttpUrl: string): okhttp3.HttpUrl;
			public get($this$toHttpUrlOrNull: java.net.URL): okhttp3.HttpUrl;
			/** @deprecated */
			public "-deprecated_get"(url: java.net.URL): okhttp3.HttpUrl;
			/** @deprecated */
			public "-deprecated_parse"(url: string): okhttp3.HttpUrl;
			/** @deprecated */
			public "-deprecated_get"(uri: java.net.URI): okhttp3.HttpUrl;
		}
	}
}

declare module okhttp3 {
	export class Interceptor extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Interceptor>;
		/**
		 * Constructs a new instance of the okhttp3.Interceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			"<clinit>"(): void;
		});
		public constructor();
		public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
	}
	export module Interceptor {
		export class Chain extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Interceptor.Chain>;
			/**
			 * Constructs a new instance of the okhttp3.Interceptor$Chain interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				request(): okhttp3.Request;
				proceed(param0: okhttp3.Request): okhttp3.Response;
				connection(): okhttp3.Connection;
				call(): okhttp3.Call;
				connectTimeoutMillis(): number;
				withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				readTimeoutMillis(): number;
				withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				writeTimeoutMillis(): number;
				withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			});
			public constructor();
			public request(): okhttp3.Request;
			public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public call(): okhttp3.Call;
			public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public readTimeoutMillis(): number;
			public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public proceed(param0: okhttp3.Request): okhttp3.Response;
			public connection(): okhttp3.Connection;
			public connectTimeoutMillis(): number;
			public writeTimeoutMillis(): number;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Interceptor.Companion>;
			public invoke(block: kotlin.jvm.functions.Function1<any,okhttp3.Response>): okhttp3.Interceptor;
		}
	}
}

declare module okhttp3 {
	export class MediaType extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.MediaType>;
		public type(): string;
		public subtype(): string;
		public equals(other: any): boolean;
		public static parse($this$parse: string): okhttp3.MediaType;
		public charset(defaultValue: java.nio.charset.Charset): java.nio.charset.Charset;
		public static get($this$get: string): okhttp3.MediaType;
		/** @deprecated */
		public "-deprecated_subtype"(): string;
		public toString(): string;
		public equals(obj: any): boolean;
		public charset(): java.nio.charset.Charset;
		public parameter(name: string): string;
		public getMediaType$okhttp(): string;
		/** @deprecated */
		public "-deprecated_type"(): string;
		public hashCode(): number;
		public constructor(mediaType: string, type: string, subtype: string, parameterNamesAndValues: string[]);
		public getParameterNamesAndValues$okhttp(): string[];
	}
	export module MediaType {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.MediaType.Companion>;
			public get($this$toMediaType: string): okhttp3.MediaType;
			public parse($this$toMediaTypeOrNull: string): okhttp3.MediaType;
			/** @deprecated */
			public "-deprecated_parse"(mediaType: string): okhttp3.MediaType;
			/** @deprecated */
			public "-deprecated_get"(mediaType: string): okhttp3.MediaType;
		}
	}
}

declare module okhttp3 {
	export class MultipartBody extends okhttp3.RequestBody {
		public static class: java.lang.Class<okhttp3.MultipartBody>;
		public static MIXED: okhttp3.MediaType;
		public static ALTERNATIVE: okhttp3.MediaType;
		public static DIGEST: okhttp3.MediaType;
		public static PARALLEL: okhttp3.MediaType;
		public static FORM: okhttp3.MediaType;
		public constructor();
		public constructor(boundaryByteString: okio.ByteString, type: okhttp3.MediaType, parts: java.util.List<okhttp3.MultipartBody.Part>);
		public parts(): java.util.List<okhttp3.MultipartBody.Part>;
		public type(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public boundary(): string;
		/** @deprecated */
		public "-deprecated_size"(): number;
		public size(): number;
		/** @deprecated */
		public "-deprecated_parts"(): java.util.List<okhttp3.MultipartBody.Part>;
		/** @deprecated */
		public "-deprecated_type"(): okhttp3.MediaType;
		public part(index: number): okhttp3.MultipartBody.Part;
		public writeTo(sink: okio.BufferedSink): void;
		public contentType(): okhttp3.MediaType;
		/** @deprecated */
		public "-deprecated_boundary"(): string;
		public contentLength(): number;
	}
	export module MultipartBody {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.MultipartBody.Builder>;
			public addFormDataPart(name: string, value: string): okhttp3.MultipartBody.Builder;
			public setType(type: okhttp3.MediaType): okhttp3.MultipartBody.Builder;
			public constructor(boundary: string);
			public addPart(part: okhttp3.MultipartBody.Part): okhttp3.MultipartBody.Builder;
			public build(): okhttp3.MultipartBody;
			public addPart(headers: okhttp3.Headers, body: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public addFormDataPart(name: string, filename: string, body: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public constructor();
			public addPart(body: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.MultipartBody.Companion>;
			public appendQuotedString$okhttp($this$appendQuotedString: java.lang.StringBuilder, key: string): void;
		}
		export class Part extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.MultipartBody.Part>;
			/** @deprecated */
			public "-deprecated_headers"(): okhttp3.Headers;
			public headers(): okhttp3.Headers;
			public static createFormData(name: string, filename: string, body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static create(headers: okhttp3.Headers, body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static create(body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			/** @deprecated */
			public "-deprecated_body"(): okhttp3.RequestBody;
			public static createFormData(name: string, value: string): okhttp3.MultipartBody.Part;
			public body(): okhttp3.RequestBody;
		}
		export module Part {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.MultipartBody.Part.Companion>;
				public createFormData(name: string, value: string): okhttp3.MultipartBody.Part;
				public create(headers: okhttp3.Headers, body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
				public create(body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
				public createFormData(name: string, filename: string, body: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			}
		}
	}
}

declare module okhttp3 {
	export class MultipartReader extends java.lang.Object implements java.io.Closeable {
		public static class: java.lang.Class<okhttp3.MultipartReader>;
		public boundary(): string;
		public close(): void;
		public constructor(source: okio.BufferedSource, boundary: string);
		public nextPart(): okhttp3.MultipartReader.Part;
		public constructor(response: okhttp3.ResponseBody);
	}
	export module MultipartReader {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.MultipartReader.Companion>;
			public getAfterBoundaryOptions(): okio.Options;
		}
		export class Part extends java.lang.Object implements java.io.Closeable {
			public static class: java.lang.Class<okhttp3.MultipartReader.Part>;
			public constructor(headers: okhttp3.Headers, body: okio.BufferedSource);
			public headers(): okhttp3.Headers;
			public body(): okio.BufferedSource;
			public close(): void;
		}
		export class PartSource extends java.lang.Object implements okio.Source {
			public static class: java.lang.Class<okhttp3.MultipartReader.PartSource>;
			public timeout(): okio.Timeout;
			public read(sink: okio.Buffer, byteCount: number): number;
			public read(param0: okio.Buffer, param1: number): number;
			public constructor(this$0: okhttp3.MultipartReader);
			public close(): void;
		}
	}
}

declare module okhttp3 {
	export class OkHttp extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.OkHttp>;
		public static INSTANCE: okhttp3.OkHttp;
		public static VERSION: string;
	}
}

declare module okhttp3 {
	export class OkHttpClient extends java.lang.Object implements okhttp3.Call.Factory, okhttp3.WebSocket.Factory {
		public static class: java.lang.Class<okhttp3.OkHttpClient>;
		/** @deprecated */
		public "-deprecated_readTimeoutMillis"(): number;
		public connectionPool(): okhttp3.ConnectionPool;
		/** @deprecated */
		public "-deprecated_socketFactory"(): javax.net.SocketFactory;
		/** @deprecated */
		public "-deprecated_connectionSpecs"(): java.util.List<okhttp3.ConnectionSpec>;
		public cache(): okhttp3.Cache;
		/** @deprecated */
		public "-deprecated_writeTimeoutMillis"(): number;
		/** @deprecated */
		public "-deprecated_connectionPool"(): okhttp3.ConnectionPool;
		public fastFallback(): boolean;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public callTimeoutMillis(): number;
		/** @deprecated */
		public "-deprecated_authenticator"(): okhttp3.Authenticator;
		public newCall(request: okhttp3.Request): okhttp3.Call;
		/** @deprecated */
		public "-deprecated_retryOnConnectionFailure"(): boolean;
		/** @deprecated */
		public "-deprecated_dns"(): okhttp3.Dns;
		public connectTimeoutMillis(): number;
		/** @deprecated */
		public "-deprecated_sslSocketFactory"(): javax.net.ssl.SSLSocketFactory;
		/** @deprecated */
		public "-deprecated_callTimeoutMillis"(): number;
		public newWebSocket(request: okhttp3.Request, listener: okhttp3.WebSocketListener): okhttp3.WebSocket;
		public newBuilder(): okhttp3.OkHttpClient.Builder;
		public constructor();
		public constructor(builder: okhttp3.OkHttpClient.Builder);
		/** @deprecated */
		public "-deprecated_connectTimeoutMillis"(): number;
		/** @deprecated */
		public "-deprecated_dispatcher"(): okhttp3.Dispatcher;
		public followRedirects(): boolean;
		public interceptors(): java.util.List<okhttp3.Interceptor>;
		/** @deprecated */
		public "-deprecated_followSslRedirects"(): boolean;
		/** @deprecated */
		public "-deprecated_followRedirects"(): boolean;
		public socketFactory(): javax.net.SocketFactory;
		/** @deprecated */
		public "-deprecated_interceptors"(): java.util.List<okhttp3.Interceptor>;
		public retryOnConnectionFailure(): boolean;
		public getRouteDatabase$okhttp(): okhttp3.internal.connection.RouteDatabase;
		/** @deprecated */
		public "-deprecated_pingIntervalMillis"(): number;
		public proxy(): java.net.Proxy;
		/** @deprecated */
		public "-deprecated_proxy"(): java.net.Proxy;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		/** @deprecated */
		public "-deprecated_cookieJar"(): okhttp3.CookieJar;
		public certificatePinner(): okhttp3.CertificatePinner;
		/** @deprecated */
		public "-deprecated_cache"(): okhttp3.Cache;
		public dispatcher(): okhttp3.Dispatcher;
		public certificateChainCleaner(): okhttp3.internal.tls.CertificateChainCleaner;
		public protocols(): java.util.List<okhttp3.Protocol>;
		/** @deprecated */
		public "-deprecated_eventListenerFactory"(): okhttp3.EventListener.Factory;
		/** @deprecated */
		public "-deprecated_protocols"(): java.util.List<okhttp3.Protocol>;
		public getTaskRunner$okhttp(): okhttp3.internal.concurrent.TaskRunner;
		/** @deprecated */
		public "-deprecated_proxyAuthenticator"(): okhttp3.Authenticator;
		public minWebSocketMessageToCompress(): number;
		public cookieJar(): okhttp3.CookieJar;
		public pingIntervalMillis(): number;
		/** @deprecated */
		public "-deprecated_networkInterceptors"(): java.util.List<okhttp3.Interceptor>;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
		/** @deprecated */
		public "-deprecated_proxySelector"(): java.net.ProxySelector;
		public proxySelector(): java.net.ProxySelector;
		public readTimeoutMillis(): number;
		/** @deprecated */
		public "-deprecated_certificatePinner"(): okhttp3.CertificatePinner;
		public authenticator(): okhttp3.Authenticator;
		public writeTimeoutMillis(): number;
		public newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
		public followSslRedirects(): boolean;
		public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
		public eventListenerFactory(): okhttp3.EventListener.Factory;
		public x509TrustManager(): javax.net.ssl.X509TrustManager;
		/** @deprecated */
		public "-deprecated_hostnameVerifier"(): javax.net.ssl.HostnameVerifier;
		public newCall(param0: okhttp3.Request): okhttp3.Call;
	}
	export module OkHttpClient {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.OkHttpClient.Builder>;
			public getRetryOnConnectionFailure$okhttp(): boolean;
			public proxy(proxy: java.net.Proxy): okhttp3.OkHttpClient.Builder;
			public getDispatcher$okhttp(): okhttp3.Dispatcher;
			public setProtocols$okhttp(_set_: java.util.List<any>): void;
			public getProxyAuthenticator$okhttp(): okhttp3.Authenticator;
			public readTimeout(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public setFollowRedirects$okhttp(_set_: boolean): void;
			public getProxy$okhttp(): java.net.Proxy;
			public readTimeout(timeout: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public setWriteTimeout$okhttp(_set_: number): void;
			public getSslSocketFactoryOrNull$okhttp(): javax.net.ssl.SSLSocketFactory;
			public getFollowSslRedirects$okhttp(): boolean;
			public connectTimeout(timeout: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public setSslSocketFactoryOrNull$okhttp(_set_: javax.net.ssl.SSLSocketFactory): void;
			public constructor();
			public cookieJar(cookieJar: okhttp3.CookieJar): okhttp3.OkHttpClient.Builder;
			public setAuthenticator$okhttp(_set_: okhttp3.Authenticator): void;
			public setCertificateChainCleaner$okhttp(_set_: okhttp3.internal.tls.CertificateChainCleaner): void;
			public getTaskRunner$okhttp(): okhttp3.internal.concurrent.TaskRunner;
			public setCache$okhttp(_set_: okhttp3.Cache): void;
			public getWriteTimeout$okhttp(): number;
			public getProtocols$okhttp(): java.util.List<okhttp3.Protocol>;
			public setConnectionPool$okhttp(_set_: okhttp3.ConnectionPool): void;
			public setCookieJar$okhttp(_set_: okhttp3.CookieJar): void;
			public getReadTimeout$okhttp(): number;
			public setRetryOnConnectionFailure$okhttp(_set_: boolean): void;
			public constructor(okHttpClient: okhttp3.OkHttpClient);
			/** @deprecated */
			public sslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): okhttp3.OkHttpClient.Builder;
			public build(): okhttp3.OkHttpClient;
			public getConnectionPool$okhttp(): okhttp3.ConnectionPool;
			public authenticator(authenticator: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public getAuthenticator$okhttp(): okhttp3.Authenticator;
			public dns(dns: okhttp3.Dns): okhttp3.OkHttpClient.Builder;
			public certificatePinner(certificatePinner: okhttp3.CertificatePinner): okhttp3.OkHttpClient.Builder;
			public setSocketFactory$okhttp(_set_: javax.net.SocketFactory): void;
			public getCertificateChainCleaner$okhttp(): okhttp3.internal.tls.CertificateChainCleaner;
			public setConnectTimeout$okhttp(_set_: number): void;
			public eventListener(eventListener: okhttp3.EventListener): okhttp3.OkHttpClient.Builder;
			public setFastFallback$okhttp(_set_: boolean): void;
			public getCertificatePinner$okhttp(): okhttp3.CertificatePinner;
			public getDns$okhttp(): okhttp3.Dns;
			public "-addInterceptor"(block: kotlin.jvm.functions.Function1<any,okhttp3.Response>): okhttp3.OkHttpClient.Builder;
			public setProxyAuthenticator$okhttp(_set_: okhttp3.Authenticator): void;
			public getCookieJar$okhttp(): okhttp3.CookieJar;
			public sslSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory, trustManager: javax.net.ssl.X509TrustManager): okhttp3.OkHttpClient.Builder;
			public getNetworkInterceptors$okhttp(): java.util.List<okhttp3.Interceptor>;
			public minWebSocketMessageToCompress(bytes: number): okhttp3.OkHttpClient.Builder;
			public setProxySelector$okhttp(_set_: java.net.ProxySelector): void;
			public followSslRedirects(followProtocolRedirects: boolean): okhttp3.OkHttpClient.Builder;
			public cache(cache: okhttp3.Cache): okhttp3.OkHttpClient.Builder;
			public setTaskRunner$okhttp(_set_: okhttp3.internal.concurrent.TaskRunner): void;
			public "-addNetworkInterceptor"(block: kotlin.jvm.functions.Function1<any,okhttp3.Response>): okhttp3.OkHttpClient.Builder;
			public getCallTimeout$okhttp(): number;
			public connectionSpecs(connectionSpecs: java.util.List<okhttp3.ConnectionSpec>): okhttp3.OkHttpClient.Builder;
			public getFastFallback$okhttp(): boolean;
			public dispatcher(dispatcher: okhttp3.Dispatcher): okhttp3.OkHttpClient.Builder;
			public setHostnameVerifier$okhttp(_set_: javax.net.ssl.HostnameVerifier): void;
			public setRouteDatabase$okhttp(_set_: okhttp3.internal.connection.RouteDatabase): void;
			public setPingInterval$okhttp(_set_: number): void;
			public setReadTimeout$okhttp(_set_: number): void;
			public protocols(protocols: java.util.List<any>): okhttp3.OkHttpClient.Builder;
			public connectTimeout(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public addNetworkInterceptor(interceptor: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public connectionPool(connectionPool: okhttp3.ConnectionPool): okhttp3.OkHttpClient.Builder;
			public getCache$okhttp(): okhttp3.Cache;
			public setConnectionSpecs$okhttp(_set_: java.util.List<okhttp3.ConnectionSpec>): void;
			public socketFactory(socketFactory: javax.net.SocketFactory): okhttp3.OkHttpClient.Builder;
			public setProxy$okhttp(_set_: java.net.Proxy): void;
			public interceptors(): java.util.List<okhttp3.Interceptor>;
			public getInterceptors$okhttp(): java.util.List<okhttp3.Interceptor>;
			public fastFallback(fastFallback: boolean): okhttp3.OkHttpClient.Builder;
			public callTimeout(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public getConnectTimeout$okhttp(): number;
			public writeTimeout(timeout: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public getConnectionSpecs$okhttp(): java.util.List<okhttp3.ConnectionSpec>;
			public addInterceptor(interceptor: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public writeTimeout(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public setCertificatePinner$okhttp(_set_: okhttp3.CertificatePinner): void;
			public setCallTimeout$okhttp(_set_: number): void;
			public pingInterval(interval: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public getProxySelector$okhttp(): java.net.ProxySelector;
			public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
			public getHostnameVerifier$okhttp(): javax.net.ssl.HostnameVerifier;
			public followRedirects(followRedirects: boolean): okhttp3.OkHttpClient.Builder;
			public proxySelector(proxySelector: java.net.ProxySelector): okhttp3.OkHttpClient.Builder;
			public proxyAuthenticator(proxyAuthenticator: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public retryOnConnectionFailure(retryOnConnectionFailure: boolean): okhttp3.OkHttpClient.Builder;
			public setFollowSslRedirects$okhttp(_set_: boolean): void;
			public setDispatcher$okhttp(_set_: okhttp3.Dispatcher): void;
			public getX509TrustManagerOrNull$okhttp(): javax.net.ssl.X509TrustManager;
			public getPingInterval$okhttp(): number;
			public setEventListenerFactory$okhttp(_set_: okhttp3.EventListener.Factory): void;
			public hostnameVerifier(hostnameVerifier: javax.net.ssl.HostnameVerifier): okhttp3.OkHttpClient.Builder;
			public callTimeout(timeout: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public getEventListenerFactory$okhttp(): okhttp3.EventListener.Factory;
			public getSocketFactory$okhttp(): javax.net.SocketFactory;
			public getFollowRedirects$okhttp(): boolean;
			public getMinWebSocketMessageToCompress$okhttp(): number;
			public pingInterval(duration: java.time.Duration): okhttp3.OkHttpClient.Builder;
			public setDns$okhttp(_set_: okhttp3.Dns): void;
			public setX509TrustManagerOrNull$okhttp(_set_: javax.net.ssl.X509TrustManager): void;
			public setMinWebSocketMessageToCompress$okhttp(_set_: number): void;
			public eventListenerFactory(eventListenerFactory: okhttp3.EventListener.Factory): okhttp3.OkHttpClient.Builder;
			public getRouteDatabase$okhttp(): okhttp3.internal.connection.RouteDatabase;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.OkHttpClient.Companion>;
			public getDEFAULT_CONNECTION_SPECS$okhttp(): java.util.List<okhttp3.ConnectionSpec>;
			public getDEFAULT_PROTOCOLS$okhttp(): java.util.List<okhttp3.Protocol>;
		}
	}
}

declare module okhttp3 {
	export class Protocol {
		public static class: java.lang.Class<okhttp3.Protocol>;
		public static HTTP_1_0: okhttp3.Protocol;
		public static HTTP_1_1: okhttp3.Protocol;
		public static SPDY_3: okhttp3.Protocol;
		public static HTTP_2: okhttp3.Protocol;
		public static H2_PRIOR_KNOWLEDGE: okhttp3.Protocol;
		public static QUIC: okhttp3.Protocol;
		public static HTTP_3: okhttp3.Protocol;
		public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		public static valueOf(value: string): okhttp3.Protocol;
		public static values(): okhttp3.Protocol[];
		public toString(): string;
		public static get(protocol: string): okhttp3.Protocol;
	}
	export module Protocol {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Protocol.Companion>;
			public get(protocol: string): okhttp3.Protocol;
		}
	}
}

declare module okhttp3 {
	export class Request extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Request>;
		public headers(): okhttp3.Headers;
		public tag(): any;
		public setLazyCacheControl$okhttp(_set_: okhttp3.CacheControl): void;
		public header(name: string): string;
		public getLazyCacheControl$okhttp(): okhttp3.CacheControl;
		public newBuilder(): okhttp3.Request.Builder;
		public getTags$okhttp(): java.util.Map<kotlin.reflect.KClass<any>,any>;
		/** @deprecated */
		public "-deprecated_body"(): okhttp3.RequestBody;
		public tag(type: java.lang.Class<any>): any;
		/** @deprecated */
		public "-deprecated_url"(): okhttp3.HttpUrl;
		public url(): okhttp3.HttpUrl;
		/** @deprecated */
		public "-deprecated_headers"(): okhttp3.Headers;
		public cacheControl(): okhttp3.CacheControl;
		public method(): string;
		public toString(): string;
		public headers(name: string): java.util.List<string>;
		public tag(type: kotlin.reflect.KClass): any;
		public constructor(builder: okhttp3.Request.Builder);
		/** @deprecated */
		public "-deprecated_method"(): string;
		/** @deprecated */
		public "-deprecated_cacheControl"(): okhttp3.CacheControl;
		public body(): okhttp3.RequestBody;
		public isHttps(): boolean;
		public constructor(url: okhttp3.HttpUrl, headers: okhttp3.Headers, method: string, body: okhttp3.RequestBody);
	}
	export module Request {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Request.Builder>;
			public url(url: java.net.URL): okhttp3.Request.Builder;
			public cacheControl(cacheControl: okhttp3.CacheControl): okhttp3.Request.Builder;
			public getTags$okhttp(): java.util.Map<kotlin.reflect.KClass<any>,any>;
			public setUrl$okhttp(_set_: okhttp3.HttpUrl): void;
			public headers(headers: okhttp3.Headers): okhttp3.Request.Builder;
			public patch(body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public removeHeader(name: string): okhttp3.Request.Builder;
			public get(): okhttp3.Request.Builder;
			public setBody$okhttp(_set_: okhttp3.RequestBody): void;
			public getUrl$okhttp(): okhttp3.HttpUrl;
			public setTags$okhttp(_set_: java.util.Map<kotlin.reflect.KClass<any>,any>): void;
			public url(url: string): okhttp3.Request.Builder;
			public setMethod$okhttp(_set_: string): void;
			public head(): okhttp3.Request.Builder;
			public getMethod$okhttp(): string;
			public url(url: okhttp3.HttpUrl): okhttp3.Request.Builder;
			public setHeaders$okhttp(_set_: okhttp3.Headers.Builder): void;
			public tag(type: kotlin.reflect.KClass, tag: any): okhttp3.Request.Builder;
			public constructor(request: okhttp3.Request);
			public delete(): okhttp3.Request.Builder;
			public header(name: string, value: string): okhttp3.Request.Builder;
			public put(body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public constructor();
			public getBody$okhttp(): okhttp3.RequestBody;
			public tag(tag: any): okhttp3.Request.Builder;
			public build(): okhttp3.Request;
			public getHeaders$okhttp(): okhttp3.Headers.Builder;
			public addHeader(name: string, value: string): okhttp3.Request.Builder;
			public delete(body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public method(method: string, body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public post(body: okhttp3.RequestBody): okhttp3.Request.Builder;
			public tag(type: java.lang.Class<any>, tag: any): okhttp3.Request.Builder;
		}
	}
}

declare module okhttp3 {
	export abstract class RequestBody extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.RequestBody>;
		public constructor();
		public static create($this$create: string, contentType: okhttp3.MediaType): okhttp3.RequestBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: okio.ByteString): okhttp3.RequestBody;
		public static create($this$create: number[], contentType: okhttp3.MediaType, offset: number, byteCount: number): okhttp3.RequestBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: string): okhttp3.RequestBody;
		public static create($this$create: okio.Path, fileSystem: okio.FileSystem, contentType: okhttp3.MediaType): okhttp3.RequestBody;
		public isOneShot(): boolean;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: number[], offset: number, byteCount: number): okhttp3.RequestBody;
		public writeTo(param0: okio.BufferedSink): void;
		public static create($this$create: java.io.FileDescriptor, contentType: okhttp3.MediaType): okhttp3.RequestBody;
		public static create($this$create: okio.ByteString, contentType: okhttp3.MediaType): okhttp3.RequestBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: number[]): okhttp3.RequestBody;
		public static create($this$create: number[], contentType: okhttp3.MediaType): okhttp3.RequestBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, file: java.io.File): okhttp3.RequestBody;
		public static create($this$create: number[]): okhttp3.RequestBody;
		public static gzip($this$gzip: okhttp3.RequestBody): okhttp3.RequestBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: number[], offset: number): okhttp3.RequestBody;
		public contentType(): okhttp3.MediaType;
		public static create($this$create: java.io.File, contentType: okhttp3.MediaType): okhttp3.RequestBody;
		public static create($this$create: number[], contentType: okhttp3.MediaType, offset: number): okhttp3.RequestBody;
		public contentLength(): number;
		public isDuplex(): boolean;
	}
	export module RequestBody {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.RequestBody.Companion>;
			public create($this$toRequestBody: number[], contentType: okhttp3.MediaType): okhttp3.RequestBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: number[], offset: number, byteCount: number): okhttp3.RequestBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, file: java.io.File): okhttp3.RequestBody;
			public gzip($this$gzip: okhttp3.RequestBody): okhttp3.RequestBody;
			public create($this$toRequestBody: string, contentType: okhttp3.MediaType): okhttp3.RequestBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: number[]): okhttp3.RequestBody;
			public create($this$toRequestBody: number[], contentType: okhttp3.MediaType, offset: number): okhttp3.RequestBody;
			public create($this$toRequestBody: okio.ByteString, contentType: okhttp3.MediaType): okhttp3.RequestBody;
			public create($this$toRequestBody: java.io.FileDescriptor, contentType: okhttp3.MediaType): okhttp3.RequestBody;
			public create($this$toRequestBody: number[], contentType: okhttp3.MediaType, offset: number, byteCount: number): okhttp3.RequestBody;
			public create($this$asRequestBody: okio.Path, fileSystem: okio.FileSystem, contentType: okhttp3.MediaType): okhttp3.RequestBody;
			public create($this$toRequestBody: number[]): okhttp3.RequestBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: number[], offset: number): okhttp3.RequestBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: string): okhttp3.RequestBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: okio.ByteString): okhttp3.RequestBody;
			public create($this$asRequestBody: java.io.File, contentType: okhttp3.MediaType): okhttp3.RequestBody;
		}
	}
}

declare module okhttp3 {
	export class Response extends java.lang.Object implements java.io.Closeable {
		public static class: java.lang.Class<okhttp3.Response>;
		public peekBody(byteCount: number): okhttp3.ResponseBody;
		public headers(): okhttp3.Headers;
		/** @deprecated */
		public "-deprecated_networkResponse"(): okhttp3.Response;
		public setLazyCacheControl$okhttp(_set_: okhttp3.CacheControl): void;
		public header(name: string): string;
		public getLazyCacheControl$okhttp(): okhttp3.CacheControl;
		public close(): void;
		public sentRequestAtMillis(): number;
		/** @deprecated */
		public "-deprecated_code"(): number;
		/** @deprecated */
		public "-deprecated_priorResponse"(): okhttp3.Response;
		public cacheControl(): okhttp3.CacheControl;
		public exchange(): okhttp3.internal.connection.Exchange;
		/** @deprecated */
		public "-deprecated_receivedResponseAtMillis"(): number;
		public handshake(): okhttp3.Handshake;
		/** @deprecated */
		public "-deprecated_message"(): string;
		public constructor(request: okhttp3.Request, protocol: okhttp3.Protocol, message: string, code: number, handshake: okhttp3.Handshake, headers: okhttp3.Headers, body: okhttp3.ResponseBody, networkResponse: okhttp3.Response, cacheResponse: okhttp3.Response, priorResponse: okhttp3.Response, sentRequestAtMillis: number, param11: number, receivedResponseAtMillis: okhttp3.internal.connection.Exchange, param13: kotlin.jvm.functions.Function0<okhttp3.Headers>);
		public body(): okhttp3.ResponseBody;
		public networkResponse(): okhttp3.Response;
		public trailers(): okhttp3.Headers;
		public request(): okhttp3.Request;
		public code(): number;
		/** @deprecated */
		public "-deprecated_body"(): okhttp3.ResponseBody;
		public protocol(): okhttp3.Protocol;
		/** @deprecated */
		public "-deprecated_handshake"(): okhttp3.Handshake;
		public priorResponse(): okhttp3.Response;
		/** @deprecated */
		public "-deprecated_request"(): okhttp3.Request;
		public header(name: string, defaultValue: string): string;
		public cacheResponse(): okhttp3.Response;
		/** @deprecated */
		public "-deprecated_protocol"(): okhttp3.Protocol;
		/** @deprecated */
		public "-deprecated_headers"(): okhttp3.Headers;
		public toString(): string;
		public headers(name: string): java.util.List<string>;
		public isSuccessful(): boolean;
		/** @deprecated */
		public "-deprecated_sentRequestAtMillis"(): number;
		public newBuilder(): okhttp3.Response.Builder;
		public message(): string;
		/** @deprecated */
		public "-deprecated_cacheControl"(): okhttp3.CacheControl;
		public receivedResponseAtMillis(): number;
		public challenges(): java.util.List<okhttp3.Challenge>;
		public isRedirect(): boolean;
		/** @deprecated */
		public "-deprecated_cacheResponse"(): okhttp3.Response;
	}
	export module Response {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.Response.Builder>;
			public initExchange$okhttp(exchange: okhttp3.internal.connection.Exchange): void;
			public setExchange$okhttp(_set_: okhttp3.internal.connection.Exchange): void;
			public getExchange$okhttp(): okhttp3.internal.connection.Exchange;
			public constructor(response: okhttp3.Response);
			public setNetworkResponse$okhttp(_set_: okhttp3.Response): void;
			public getPriorResponse$okhttp(): okhttp3.Response;
			public setTrailersFn$okhttp(_set_: kotlin.jvm.functions.Function0<okhttp3.Headers>): void;
			public setPriorResponse$okhttp(_set_: okhttp3.Response): void;
			public networkResponse(networkResponse: okhttp3.Response): okhttp3.Response.Builder;
			public getProtocol$okhttp(): okhttp3.Protocol;
			public code(code: number): okhttp3.Response.Builder;
			public trailers(trailersFn: kotlin.jvm.functions.Function0<okhttp3.Headers>): okhttp3.Response.Builder;
			public header(name: string, value: string): okhttp3.Response.Builder;
			public headers(headers: okhttp3.Headers): okhttp3.Response.Builder;
			public getSentRequestAtMillis$okhttp(): number;
			public setProtocol$okhttp(_set_: okhttp3.Protocol): void;
			public getRequest$okhttp(): okhttp3.Request;
			public request(request: okhttp3.Request): okhttp3.Response.Builder;
			public getCacheResponse$okhttp(): okhttp3.Response;
			public setHeaders$okhttp(_set_: okhttp3.Headers.Builder): void;
			public setReceivedResponseAtMillis$okhttp(_set_: number): void;
			public setSentRequestAtMillis$okhttp(_set_: number): void;
			public setCacheResponse$okhttp(_set_: okhttp3.Response): void;
			public handshake(handshake: okhttp3.Handshake): okhttp3.Response.Builder;
			public getMessage$okhttp(): string;
			public priorResponse(priorResponse: okhttp3.Response): okhttp3.Response.Builder;
			public getTrailersFn$okhttp(): kotlin.jvm.functions.Function0<okhttp3.Headers>;
			public receivedResponseAtMillis(receivedResponseAtMillis: number): okhttp3.Response.Builder;
			public getBody$okhttp(): okhttp3.ResponseBody;
			public protocol(protocol: okhttp3.Protocol): okhttp3.Response.Builder;
			public removeHeader(name: string): okhttp3.Response.Builder;
			public setBody$okhttp(_set_: okhttp3.ResponseBody): void;
			public constructor();
			public setHandshake$okhttp(_set_: okhttp3.Handshake): void;
			public getReceivedResponseAtMillis$okhttp(): number;
			public message(message: string): okhttp3.Response.Builder;
			public addHeader(name: string, value: string): okhttp3.Response.Builder;
			public setRequest$okhttp(_set_: okhttp3.Request): void;
			public setMessage$okhttp(_set_: string): void;
			public getCode$okhttp(): number;
			public body(body: okhttp3.ResponseBody): okhttp3.Response.Builder;
			public setCode$okhttp(_set_: number): void;
			public getHeaders$okhttp(): okhttp3.Headers.Builder;
			public getNetworkResponse$okhttp(): okhttp3.Response;
			public cacheResponse(cacheResponse: okhttp3.Response): okhttp3.Response.Builder;
			public sentRequestAtMillis(sentRequestAtMillis: number): okhttp3.Response.Builder;
			public build(): okhttp3.Response;
			public getHandshake$okhttp(): okhttp3.Handshake;
		}
	}
}

declare module okhttp3 {
	export abstract class ResponseBody extends java.lang.Object implements java.io.Closeable {
		public static class: java.lang.Class<okhttp3.ResponseBody>;
		public constructor();
		public byteStream(): java.io.InputStream;
		public close(): void;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, contentLength: number, param2: okio.BufferedSource): okhttp3.ResponseBody;
		public static create($this$create: number[], contentType: okhttp3.MediaType): okhttp3.ResponseBody;
		public byteString(): okio.ByteString;
		public static create($this$create: string, contentType: okhttp3.MediaType): okhttp3.ResponseBody;
		public source(): okio.BufferedSource;
		public static create($this$create: okio.ByteString, contentType: okhttp3.MediaType): okhttp3.ResponseBody;
		public static create($this$create: okio.BufferedSource, contentType: okhttp3.MediaType, contentLength: number): okhttp3.ResponseBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: number[]): okhttp3.ResponseBody;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: string): okhttp3.ResponseBody;
		public charStream(): java.io.Reader;
		/** @deprecated */
		public static create(contentType: okhttp3.MediaType, content: okio.ByteString): okhttp3.ResponseBody;
		public bytes(): number[];
		public contentType(): okhttp3.MediaType;
		public string(): string;
		public contentLength(): number;
	}
	export module ResponseBody {
		export class BomAwareReader extends java.io.Reader {
			public static class: java.lang.Class<okhttp3.ResponseBody.BomAwareReader>;
			public constructor(source: okio.BufferedSource, charset: java.nio.charset.Charset);
			public read(cbuf: string[]): number;
			public constructor(lock: any);
			public read(cbuf: string[], off: number, len: number): number;
			public read(param0: java.nio.CharBuffer): number;
			public constructor();
			public read(target: java.nio.CharBuffer): number;
			public close(): void;
			public read(): number;
			public read(param0: string[], param1: number, param2: number): number;
		}
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.ResponseBody.Companion>;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: number[]): okhttp3.ResponseBody;
			public create($this$asResponseBody: okio.BufferedSource, contentType: okhttp3.MediaType, contentLength: number): okhttp3.ResponseBody;
			public create($this$toResponseBody: string, contentType: okhttp3.MediaType): okhttp3.ResponseBody;
			public create($this$toResponseBody: number[], contentType: okhttp3.MediaType): okhttp3.ResponseBody;
			public create($this$toResponseBody: okio.ByteString, contentType: okhttp3.MediaType): okhttp3.ResponseBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: string): okhttp3.ResponseBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, contentLength: number, param2: okio.BufferedSource): okhttp3.ResponseBody;
			/** @deprecated */
			public create(contentType: okhttp3.MediaType, content: okio.ByteString): okhttp3.ResponseBody;
		}
	}
}

declare module okhttp3 {
	export class Route extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.Route>;
		public proxy(): java.net.Proxy;
		/** @deprecated */
		public "-deprecated_socketAddress"(): java.net.InetSocketAddress;
		/** @deprecated */
		public "-deprecated_proxy"(): java.net.Proxy;
		public equals(obj: any): boolean;
		/** @deprecated */
		public "-deprecated_address"(): okhttp3.Address;
		public equals(other: any): boolean;
		public constructor(address: okhttp3.Address, proxy: java.net.Proxy, socketAddress: java.net.InetSocketAddress);
		public address(): okhttp3.Address;
		public hashCode(): number;
		public toString(): string;
		public requiresTunnel(): boolean;
		public socketAddress(): java.net.InetSocketAddress;
	}
}

declare module okhttp3 {
	export class TlsVersion {
		public static class: java.lang.Class<okhttp3.TlsVersion>;
		public static TLS_1_3: okhttp3.TlsVersion;
		public static TLS_1_2: okhttp3.TlsVersion;
		public static TLS_1_1: okhttp3.TlsVersion;
		public static TLS_1_0: okhttp3.TlsVersion;
		public static SSL_3_0: okhttp3.TlsVersion;
		public javaName(): string;
		public static valueOf(value: string): okhttp3.TlsVersion;
		public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		public static values(): okhttp3.TlsVersion[];
		/** @deprecated */
		public "-deprecated_javaName"(): string;
		public static forJavaName(javaName: string): okhttp3.TlsVersion;
	}
	export module TlsVersion {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.TlsVersion.Companion>;
			public forJavaName(javaName: string): okhttp3.TlsVersion;
		}
	}
}

declare module okhttp3 {
	export class WebSocket extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.WebSocket>;
		/**
		 * Constructs a new instance of the okhttp3.WebSocket interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			request(): okhttp3.Request;
			queueSize(): number;
			send(param0: string): boolean;
			send(param0: okio.ByteString): boolean;
			close(param0: number, param1: string): boolean;
			cancel(): void;
		});
		public constructor();
		public send(param0: string): boolean;
		public send(param0: okio.ByteString): boolean;
		public close(param0: number, param1: string): boolean;
		public request(): okhttp3.Request;
		public queueSize(): number;
		public cancel(): void;
	}
	export module WebSocket {
		export class Factory extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.WebSocket.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.WebSocket$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
			});
			public constructor();
			public newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
		}
	}
}

declare module okhttp3 {
	export abstract class WebSocketListener extends java.lang.Object {
		public static class: java.lang.Class<okhttp3.WebSocketListener>;
		public constructor();
		public onOpen(webSocket: okhttp3.WebSocket, response: okhttp3.Response): void;
		public onMessage(webSocket: okhttp3.WebSocket, bytes: okio.ByteString): void;
		public onClosing(webSocket: okhttp3.WebSocket, code: number, reason: string): void;
		public onClosed(webSocket: okhttp3.WebSocket, code: number, reason: string): void;
		public onMessage(webSocket: okhttp3.WebSocket, text: string): void;
		public onFailure(webSocket: okhttp3.WebSocket, t: java.lang.Throwable, response: okhttp3.Response): void;
	}
}

declare module okhttp3 {
	export module internal {
		export class Internal extends java.lang.Object {
			public static class: java.lang.Class<okhttp3.internal.Internal>;
			public static parseCookie(currentTimeMillis: number, param1: okhttp3.HttpUrl, url: string): okhttp3.Cookie;
			public static charset($this$charset: okhttp3.MediaType, defaultValue: java.nio.charset.Charset): java.nio.charset.Charset;
			public static cookieToString(cookie: okhttp3.Cookie, forObsoleteRfc2965: boolean): string;
			public static addHeaderLenient(builder: okhttp3.Headers.Builder, line: string): okhttp3.Headers.Builder;
			public static applyConnectionSpec(connectionSpec: okhttp3.ConnectionSpec, sslSocket: javax.net.ssl.SSLSocket, isFallback: boolean): void;
			public static cacheGet(cache: okhttp3.Cache, request: okhttp3.Request): okhttp3.Response;
			public static effectiveCipherSuites($this$effectiveCipherSuites: okhttp3.ConnectionSpec, socketEnabledCipherSuites: string[]): string[];
			public static addHeaderLenient(builder: okhttp3.Headers.Builder, name: string, value: string): okhttp3.Headers.Builder;
			public static getConnection($this$connection: okhttp3.Response): okhttp3.internal.connection.RealConnection;
			public static chooseCharset($this$chooseCharset: okhttp3.MediaType): kotlin.Pair<java.nio.charset.Charset,okhttp3.MediaType>;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class SuppressSignatureCheck extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<okhttp3.internal.SuppressSignatureCheck>;
			/**
			 * Constructs a new instance of the okhttp3.internal.SuppressSignatureCheck interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class UnreadableResponseBody extends okhttp3.ResponseBody implements okio.Source {
			public static class: java.lang.Class<okhttp3.internal.UnreadableResponseBody>;
			public timeout(): okio.Timeout;
			public contentLength(): number;
			public read(sink: okio.Buffer, byteCount: number): number;
			public read(param0: okio.Buffer, param1: number): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
			public constructor();
			public close(): void;
			public constructor(mediaType: okhttp3.MediaType, contentLength: number);
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module authenticator {
			export class JavaNetAuthenticator extends java.lang.Object implements okhttp3.Authenticator {
				public static class: java.lang.Class<okhttp3.internal.authenticator.JavaNetAuthenticator>;
				public authenticate(route: okhttp3.Route, response: okhttp3.Response): okhttp3.Request;
				public constructor(defaultDns: okhttp3.Dns);
				public authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
				public constructor();
			}
			export module JavaNetAuthenticator {
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.authenticator.JavaNetAuthenticator.WhenMappings>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheInterceptor extends java.lang.Object implements okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheInterceptor>;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(cache: okhttp3.Cache);
				public getCache$okhttp(): okhttp3.Cache;
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
			export module CacheInterceptor {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.CacheInterceptor.Companion>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheRequest extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheRequest>;
				/**
				 * Constructs a new instance of the okhttp3.internal.cache.CacheRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					body(): okio.Sink;
					abort(): void;
				});
				public constructor();
				public abort(): void;
				public body(): okio.Sink;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheStrategy extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy>;
				public constructor(networkRequest: okhttp3.Request, cacheResponse: okhttp3.Response);
				public getNetworkRequest(): okhttp3.Request;
				public getCacheResponse(): okhttp3.Response;
			}
			export module CacheStrategy {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy.Companion>;
					public isCacheable(response: okhttp3.Response, request: okhttp3.Request): boolean;
				}
				export class Factory extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy.Factory>;
					public constructor(nowMillis: number, param1: okhttp3.Request, request: okhttp3.Response);
					public compute(): okhttp3.internal.cache.CacheStrategy;
					public getRequest$okhttp(): okhttp3.Request;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class DiskLruCache extends java.lang.Object implements java.io.Closeable, java.io.Flushable {
				public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache>;
				public static JOURNAL_FILE: string;
				public static JOURNAL_FILE_TEMP: string;
				public static JOURNAL_FILE_BACKUP: string;
				public static MAGIC: string;
				public static VERSION_1: string;
				public static ANY_SEQUENCE_NUMBER: number;
				public static LEGAL_KEY_PATTERN: kotlin.text.Regex;
				public static CLEAN: string;
				public static DIRTY: string;
				public static REMOVE: string;
				public static READ: string;
				public getClosed$okhttp(): boolean;
				public edit(key: string): okhttp3.internal.cache.DiskLruCache.Editor;
				public getFileSystem$okhttp(): okio.FileSystem;
				public getValueCount$okhttp(): number;
				public flush(): void;
				public setClosed$okhttp(_set_: boolean): void;
				public remove(key: string): boolean;
				public trimToSize(): void;
				public get(key: string): okhttp3.internal.cache.DiskLruCache.Snapshot;
				public delete(): void;
				public getLruEntries$okhttp(): java.util.LinkedHashMap<string,okhttp3.internal.cache.DiskLruCache.Entry>;
				public constructor(fileSystem: okio.FileSystem, directory: okio.Path, appVersion: number, valueCount: number, maxSize: number, param5: okhttp3.internal.concurrent.TaskRunner);
				public completeEdit$okhttp(editor: okhttp3.internal.cache.DiskLruCache.Editor, success: boolean): void;
				public evictAll(): void;
				public edit(key: string, expectedSequenceNumber: number): okhttp3.internal.cache.DiskLruCache.Editor;
				public rebuildJournal$okhttp(): void;
				public close(): void;
				public snapshots(): java.util.Iterator<okhttp3.internal.cache.DiskLruCache.Snapshot>;
				public isClosed(): boolean;
				public size(): number;
				public getDirectory(): okio.Path;
				public setMaxSize(value: number): void;
				public initialize(): void;
				public removeEntry$okhttp(entry: okhttp3.internal.cache.DiskLruCache.Entry): boolean;
				public getMaxSize(): number;
			}
			export module DiskLruCache {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Companion>;
				}
				export class Editor extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Editor>;
					public getWritten$okhttp(): boolean[];
					public detach$okhttp(): void;
					public commit(): void;
					public newSink(index: number): okio.Sink;
					public getEntry$okhttp(): okhttp3.internal.cache.DiskLruCache.Entry;
					public newSource(index: number): okio.Source;
					public abort(): void;
					public constructor(this$0: okhttp3.internal.cache.DiskLruCache.Entry);
				}
				export class Entry extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Entry>;
					public getReadable$okhttp(): boolean;
					public setLockingSourceCount$okhttp(_set_: number): void;
					public writeLengths$okhttp(writer: okio.BufferedSink): void;
					public setCurrentEditor$okhttp(_set_: okhttp3.internal.cache.DiskLruCache.Editor): void;
					public setReadable$okhttp(_set_: boolean): void;
					public getZombie$okhttp(): boolean;
					public snapshot$okhttp(): okhttp3.internal.cache.DiskLruCache.Snapshot;
					public setZombie$okhttp(_set_: boolean): void;
					public getLengths$okhttp(): number[];
					public setSequenceNumber$okhttp(_set_: number): void;
					public getLockingSourceCount$okhttp(): number;
					public constructor(this$0: string);
					public setLengths$okhttp(strings: java.util.List<string>): void;
					public getKey$okhttp(): string;
					public getSequenceNumber$okhttp(): number;
					public getDirtyFiles$okhttp(): java.util.List<okio.Path>;
					public getCleanFiles$okhttp(): java.util.List<okio.Path>;
					public getCurrentEditor$okhttp(): okhttp3.internal.cache.DiskLruCache.Editor;
				}
				export class Snapshot extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Snapshot>;
					public getSource(index: number): okio.Source;
					public close(): void;
					public key(): string;
					public getLength(index: number): number;
					public constructor(this$0: string, key: number, sequenceNumber: java.util.List<any>, param3: number[]);
					public edit(): okhttp3.internal.cache.DiskLruCache.Editor;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class FaultHidingSink extends okio.ForwardingSink {
				public static class: java.lang.Class<okhttp3.internal.cache.FaultHidingSink>;
				public write(source: okio.Buffer, byteCount: number): void;
				public close(): void;
				public timeout(): okio.Timeout;
				public constructor(delegate: okio.Sink, onException: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
				public constructor(param0: okio.Sink);
				public getOnException(): kotlin.jvm.functions.Function1<java.io.IOException,kotlin.Unit>;
				public write(param0: okio.Buffer, param1: number): void;
				public flush(): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache2 {
			export class FileOperator extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.cache2.FileOperator>;
				public read(pos: number, param1: okio.Buffer, sink: number): void;
				public constructor(fileChannel: java.nio.channels.FileChannel);
				public write(pos: number, param1: okio.Buffer, source: number): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache2 {
			export class Relay extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.cache2.Relay>;
				public static PREFIX_CLEAN: okio.ByteString;
				public static PREFIX_DIRTY: okio.ByteString;
				public commit(upstreamSize: number): void;
				public newSource(): okio.Source;
				public setUpstreamPos(_set_: number): void;
				public getUpstreamReader(): java.lang.Thread;
				public getUpstreamBuffer(): okio.Buffer;
				public getSourceCount(): number;
				public metadata(): okio.ByteString;
				public getUpstreamPos(): number;
				public isClosed(): boolean;
				public setSourceCount(_set_: number): void;
				public setComplete(_set_: boolean): void;
				public getComplete(): boolean;
				public getFile(): java.io.RandomAccessFile;
				public setFile(_set_: java.io.RandomAccessFile): void;
				public getBufferMaxSize(): number;
				public getBuffer(): okio.Buffer;
				public setUpstream(_set_: okio.Source): void;
				public getUpstream(): okio.Source;
				public setUpstreamReader(_set_: java.lang.Thread): void;
			}
			export module Relay {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.cache2.Relay.Companion>;
					public read(file: java.io.File): okhttp3.internal.cache2.Relay;
					public edit(file: java.io.File, upstream: okio.Source, metadata: okio.ByteString, bufferMaxSize: number): okhttp3.internal.cache2.Relay;
				}
				export class RelaySource extends java.lang.Object implements okio.Source {
					public static class: java.lang.Class<okhttp3.internal.cache2.Relay.RelaySource>;
					public close(): void;
					public constructor(this$0: okhttp3.internal.cache2.Relay);
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module concurrent {
			export abstract class Task extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.concurrent.Task>;
				public getNextExecuteNanoTime$okhttp(): number;
				public runOnce(): number;
				public setNextExecuteNanoTime$okhttp(_set_: number): void;
				public initQueue$okhttp(queue: okhttp3.internal.concurrent.TaskQueue): void;
				public constructor(name: string, cancelable: boolean);
				public setQueue$okhttp(_set_: okhttp3.internal.concurrent.TaskQueue): void;
				public getCancelable(): boolean;
				public getQueue$okhttp(): okhttp3.internal.concurrent.TaskQueue;
				public getName(): string;
				public toString(): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module concurrent {
			export class TaskQueue extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.concurrent.TaskQueue>;
				public getActiveTask$okhttp(): okhttp3.internal.concurrent.Task;
				public constructor(taskRunner: okhttp3.internal.concurrent.TaskRunner, name: string);
				public setActiveTask$okhttp(_set_: okhttp3.internal.concurrent.Task): void;
				public schedule(task: okhttp3.internal.concurrent.Task, delayNanos: number): void;
				public getName$okhttp(): string;
				public toString(): string;
				public getTaskRunner$okhttp(): okhttp3.internal.concurrent.TaskRunner;
				public getFutureTasks$okhttp(): java.util.List<okhttp3.internal.concurrent.Task>;
				public scheduleAndDecide$okhttp(task: okhttp3.internal.concurrent.Task, delayNanos: number, param2: boolean): boolean;
				public schedule(name: string, delayNanos: number, param2: kotlin.jvm.functions.Function0<java.lang.Long>): void;
				public shutdown(): void;
				public getCancelActiveTask$okhttp(): boolean;
				public getScheduledTasks(): java.util.List<okhttp3.internal.concurrent.Task>;
				public cancelAll(): void;
				public getShutdown$okhttp(): boolean;
				public execute(name: string, delayNanos: number, param2: boolean, cancelable: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
				public idleLatch(): java.util.concurrent.CountDownLatch;
				public cancelAllAndDecide$okhttp(): boolean;
				public setCancelActiveTask$okhttp(_set_: boolean): void;
				public setShutdown$okhttp(_set_: boolean): void;
			}
			export module TaskQueue {
				export class AwaitIdleTask extends okhttp3.internal.concurrent.Task {
					public static class: java.lang.Class<okhttp3.internal.concurrent.TaskQueue.AwaitIdleTask>;
					public runOnce(): number;
					public constructor();
					public constructor(name: string, cancelable: boolean);
					public getLatch(): java.util.concurrent.CountDownLatch;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module concurrent {
			export class TaskRunner extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.concurrent.TaskRunner>;
				public static INSTANCE: okhttp3.internal.concurrent.TaskRunner;
				public cancelAll(): void;
				public getBackend(): okhttp3.internal.concurrent.TaskRunner.Backend;
				public activeQueues(): java.util.List<okhttp3.internal.concurrent.TaskQueue>;
				public constructor(backend: okhttp3.internal.concurrent.TaskRunner.Backend, logger: java.util.logging.Logger);
				public kickCoordinator$okhttp(taskQueue: okhttp3.internal.concurrent.TaskQueue): void;
				public getLogger$okhttp(): java.util.logging.Logger;
				public awaitTaskToRun(): okhttp3.internal.concurrent.Task;
				public newQueue(): okhttp3.internal.concurrent.TaskQueue;
			}
			export module TaskRunner {
				export class Backend extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.concurrent.TaskRunner.Backend>;
					/**
					 * Constructs a new instance of the okhttp3.internal.concurrent.TaskRunner$Backend interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						nanoTime(): number;
						coordinatorNotify(param0: okhttp3.internal.concurrent.TaskRunner): void;
						coordinatorWait(param0: okhttp3.internal.concurrent.TaskRunner, param1: number): void;
						decorate(param0: java.util.concurrent.BlockingQueue<any>): java.util.concurrent.BlockingQueue<any>;
						execute(param0: okhttp3.internal.concurrent.TaskRunner, param1: java.lang.Runnable): void;
					});
					public constructor();
					public coordinatorWait(param0: okhttp3.internal.concurrent.TaskRunner, param1: number): void;
					public decorate(param0: java.util.concurrent.BlockingQueue<any>): java.util.concurrent.BlockingQueue<any>;
					public coordinatorNotify(param0: okhttp3.internal.concurrent.TaskRunner): void;
					public execute(param0: okhttp3.internal.concurrent.TaskRunner, param1: java.lang.Runnable): void;
					public nanoTime(): number;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.concurrent.TaskRunner.Companion>;
					public getLogger(): java.util.logging.Logger;
				}
				export class RealBackend extends java.lang.Object implements okhttp3.internal.concurrent.TaskRunner.Backend {
					public static class: java.lang.Class<okhttp3.internal.concurrent.TaskRunner.RealBackend>;
					public decorate(queue: java.util.concurrent.BlockingQueue<any>): java.util.concurrent.BlockingQueue<any>;
					public coordinatorWait(param0: okhttp3.internal.concurrent.TaskRunner, param1: number): void;
					public coordinatorNotify(taskRunner: okhttp3.internal.concurrent.TaskRunner): void;
					public decorate(param0: java.util.concurrent.BlockingQueue<any>): java.util.concurrent.BlockingQueue<any>;
					public shutdown(): void;
					public execute(taskRunner: okhttp3.internal.concurrent.TaskRunner, runnable: java.lang.Runnable): void;
					public coordinatorNotify(param0: okhttp3.internal.concurrent.TaskRunner): void;
					public constructor(threadFactory: java.util.concurrent.ThreadFactory);
					public execute(param0: okhttp3.internal.concurrent.TaskRunner, param1: java.lang.Runnable): void;
					public nanoTime(): number;
					public coordinatorWait(taskRunner: okhttp3.internal.concurrent.TaskRunner, nanos: number): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ConnectInterceptor extends java.lang.Object implements okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.connection.ConnectInterceptor>;
				public static INSTANCE: okhttp3.internal.connection.ConnectInterceptor;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ConnectPlan extends java.lang.Object implements okhttp3.internal.connection.RoutePlanner.Plan, okhttp3.internal.http.ExchangeCodec.Carrier {
				public static class: java.lang.Class<okhttp3.internal.connection.ConnectPlan>;
				public isTlsFallback$okhttp(): boolean;
				public planWithCurrentOrInitialConnectionSpec$okhttp(connectionSpecs: java.util.List<okhttp3.ConnectionSpec>, sslSocket: javax.net.ssl.SSLSocket): okhttp3.internal.connection.ConnectPlan;
				public constructor(client: okhttp3.OkHttpClient, call: okhttp3.internal.connection.RealCall, routePlanner: okhttp3.internal.connection.RealRoutePlanner, route: okhttp3.Route, routes: java.util.List<okhttp3.Route>, attempt: number, tunnelRequest: okhttp3.Request, connectionSpecIndex: number, isTlsFallback: boolean);
				public setSocket$okhttp(_set_: java.net.Socket): void;
				public trackFailure(param0: okhttp3.internal.connection.RealCall, param1: java.io.IOException): void;
				public trackFailure(call: okhttp3.internal.connection.RealCall, e: java.io.IOException): void;
				public getSocket$okhttp(): java.net.Socket;
				public noNewExchanges(): void;
				public nextConnectionSpec$okhttp(connectionSpecs: java.util.List<okhttp3.ConnectionSpec>, sslSocket: javax.net.ssl.SSLSocket): okhttp3.internal.connection.ConnectPlan;
				public isReady(): boolean;
				public connectTlsEtc(): okhttp3.internal.connection.RoutePlanner.ConnectResult;
				public getRoute(): okhttp3.Route;
				public handleSuccess(): okhttp3.internal.connection.RealConnection;
				public connectTcp(): okhttp3.internal.connection.RoutePlanner.ConnectResult;
				public getConnectionSpecIndex$okhttp(): number;
				public cancel(): void;
				public closeQuietly(): void;
				public retry(): okhttp3.internal.connection.RoutePlanner.Plan;
				public getRoutes$okhttp(): java.util.List<okhttp3.Route>;
				public connectTunnel$okhttp(): okhttp3.internal.connection.RoutePlanner.ConnectResult;
			}
			export module ConnectPlan {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.ConnectPlan.Companion>;
				}
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.ConnectPlan.WhenMappings>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class Exchange extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.Exchange>;
				public constructor(call: okhttp3.internal.connection.RealCall, eventListener: okhttp3.EventListener, finder: okhttp3.internal.connection.ExchangeFinder, codec: okhttp3.internal.http.ExchangeCodec);
				public finishRequest(): void;
				public openResponseBody(response: okhttp3.Response): okhttp3.ResponseBody;
				public getCall$okhttp(): okhttp3.internal.connection.RealCall;
				public getEventListener$okhttp(): okhttp3.EventListener;
				public trailers(): okhttp3.Headers;
				public isDuplex$okhttp(): boolean;
				public getConnection$okhttp(): okhttp3.internal.connection.RealConnection;
				public getHasFailure$okhttp(): boolean;
				public responseHeadersEnd(response: okhttp3.Response): void;
				public newWebSocketStreams(): okhttp3.internal.ws.RealWebSocket.Streams;
				public createRequestBody(request: okhttp3.Request, duplex: boolean): okio.Sink;
				public responseHeadersStart(): void;
				public noRequestBody(): void;
				public getFinder$okhttp(): okhttp3.internal.connection.ExchangeFinder;
				public isCoalescedConnection$okhttp(): boolean;
				public detachWithViolence(): void;
				public readResponseHeaders(expectContinue: boolean): okhttp3.Response.Builder;
				public webSocketUpgradeFailed(): void;
				public cancel(): void;
				public writeRequestHeaders(request: okhttp3.Request): void;
				public flushRequest(): void;
				public bodyComplete(bytesRead: number, param1: boolean, responseDone: boolean, requestDone: java.io.IOException): java.io.IOException;
				public noNewExchangesOnConnection(): void;
			}
			export module Exchange {
				export class RequestBodySink extends okio.ForwardingSink {
					public static class: java.lang.Class<okhttp3.internal.connection.Exchange.RequestBodySink>;
					public close(): void;
					public constructor(param0: okio.Sink);
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
					public constructor(this$0: okio.Sink, delegate: number);
					public write(source: okio.Buffer, byteCount: number): void;
				}
				export class ResponseBodySource extends okio.ForwardingSource {
					public static class: java.lang.Class<okhttp3.internal.connection.Exchange.ResponseBodySource>;
					public complete(e: java.io.IOException): java.io.IOException;
					public constructor(param0: okio.Source);
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
					public constructor(this$0: okio.Source, delegate: number);
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ExchangeFinder extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.ExchangeFinder>;
				/**
				 * Constructs a new instance of the okhttp3.internal.connection.ExchangeFinder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getRoutePlanner(): okhttp3.internal.connection.RoutePlanner;
					find(): okhttp3.internal.connection.RealConnection;
				});
				public constructor();
				public getRoutePlanner(): okhttp3.internal.connection.RoutePlanner;
				public find(): okhttp3.internal.connection.RealConnection;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class FailedPlan extends java.lang.Object implements okhttp3.internal.connection.RoutePlanner.Plan {
				public static class: java.lang.Class<okhttp3.internal.connection.FailedPlan>;
				public connectTcp(): okhttp3.internal.connection.RoutePlanner.ConnectResult;
				public handleSuccess(): java.lang.Void;
				public getResult(): okhttp3.internal.connection.RoutePlanner.ConnectResult;
				public constructor(e: java.lang.Throwable);
				public cancel(): void;
				public isReady(): boolean;
				public connectTlsEtc(): okhttp3.internal.connection.RoutePlanner.ConnectResult;
				public retry(): java.lang.Void;
				public retry(): okhttp3.internal.connection.RoutePlanner.Plan;
				public cancel(): java.lang.Void;
				public handleSuccess(): okhttp3.internal.connection.RealConnection;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class FastFallbackExchangeFinder extends java.lang.Object implements okhttp3.internal.connection.ExchangeFinder {
				public static class: java.lang.Class<okhttp3.internal.connection.FastFallbackExchangeFinder>;
				public constructor(routePlanner: okhttp3.internal.connection.RoutePlanner, taskRunner: okhttp3.internal.concurrent.TaskRunner);
				public getRoutePlanner(): okhttp3.internal.connection.RoutePlanner;
				public find(): okhttp3.internal.connection.RealConnection;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealCall extends java.lang.Object implements okhttp3.Call, java.lang.Cloneable {
				public static class: java.lang.Class<okhttp3.internal.connection.RealCall>;
				public request(): okhttp3.Request;
				public getEventListener$okhttp(): okhttp3.EventListener;
				public timeoutEarlyExit(): void;
				public acquireConnectionNoEvents(connection: okhttp3.internal.connection.RealConnection): void;
				public constructor(client: okhttp3.OkHttpClient, originalRequest: okhttp3.Request, forWebSocket: boolean);
				public getResponseWithInterceptorChain$okhttp(): okhttp3.Response;
				public redactedUrl$okhttp(): string;
				public timeout(): okio.Timeout;
				public isCanceled(): boolean;
				public initExchange$okhttp(chain: okhttp3.internal.http.RealInterceptorChain): okhttp3.internal.connection.Exchange;
				public getPlansToCancel$okhttp(): java.util.concurrent.CopyOnWriteArrayList<okhttp3.internal.connection.RoutePlanner.Plan>;
				public clone(): any;
				public noMoreExchanges$okhttp(e: java.io.IOException): java.io.IOException;
				public releaseConnectionNoEvents$okhttp(): java.net.Socket;
				public exitNetworkInterceptorExchange$okhttp(closeExchange: boolean): void;
				public cancel(): void;
				public execute(): okhttp3.Response;
				public getForWebSocket(): boolean;
				public getConnection(): okhttp3.internal.connection.RealConnection;
				public enqueue(param0: okhttp3.Callback): void;
				public enqueue(responseCallback: okhttp3.Callback): void;
				public messageDone$okhttp(exchange: okhttp3.internal.connection.Exchange, requestDone: boolean, responseDone: boolean, e: java.io.IOException): java.io.IOException;
				public retryAfterFailure(): boolean;
				public getClient(): okhttp3.OkHttpClient;
				public clone(): okhttp3.Call;
				public getOriginalRequest(): okhttp3.Request;
				public enterNetworkInterceptorExchange(request: okhttp3.Request, newRoutePlanner: boolean, chain: okhttp3.internal.http.RealInterceptorChain): void;
				public getInterceptorScopedExchange$okhttp(): okhttp3.internal.connection.Exchange;
				public isExecuted(): boolean;
			}
			export module RealCall {
				export class AsyncCall extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<okhttp3.internal.connection.RealCall.AsyncCall>;
					public reuseCallsPerHostFrom(other: okhttp3.internal.connection.RealCall.AsyncCall): void;
					public getCallsPerHost(): java.util.concurrent.atomic.AtomicInteger;
					public constructor(this$0: okhttp3.Callback);
					public run(): void;
					public getRequest(): okhttp3.Request;
					public executeOn(executorService: java.util.concurrent.ExecutorService): void;
					public failRejected$okhttp(e: java.util.concurrent.RejectedExecutionException): void;
					public getCall(): okhttp3.internal.connection.RealCall;
					public getHost(): string;
				}
				export class CallReference extends java.lang.ref.WeakReference<okhttp3.internal.connection.RealCall> {
					public static class: java.lang.Class<okhttp3.internal.connection.RealCall.CallReference>;
					public getCallStackTrace(): any;
					public constructor(referent: okhttp3.internal.connection.RealCall, callStackTrace: any);
					public constructor(referent: any);
					public constructor(referent: any, q: java.lang.ref.ReferenceQueue<any>);
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealConnection extends okhttp3.internal.http2.Http2Connection.Listener implements okhttp3.Connection, okhttp3.internal.http.ExchangeCodec.Carrier {
				public static class: java.lang.Class<okhttp3.internal.connection.RealConnection>;
				public static IDLE_CONNECTION_HEALTHY_NS: number;
				public trackFailure(call: okhttp3.internal.connection.RealCall, e: java.io.IOException): void;
				public protocol(): okhttp3.Protocol;
				public isEligible$okhttp(address: okhttp3.Address, routes: java.util.List<okhttp3.Route>): boolean;
				public socket(): java.net.Socket;
				public constructor();
				public isHealthy(doExtensiveChecks: boolean): boolean;
				public getConnectionPool(): okhttp3.internal.connection.RealConnectionPool;
				public getIdleAtNs(): number;
				public start(): void;
				public setNoNewExchanges(_set_: boolean): void;
				public newWebSocketStreams$okhttp(exchange: okhttp3.internal.connection.Exchange): okhttp3.internal.ws.RealWebSocket.Streams;
				public cancel(): void;
				public getTaskRunner(): okhttp3.internal.concurrent.TaskRunner;
				public handshake(): okhttp3.Handshake;
				public getCalls(): java.util.List<java.lang.ref.Reference<okhttp3.internal.connection.RealCall>>;
				public onSettings(connection: okhttp3.internal.http2.Http2Connection, settings: okhttp3.internal.http2.Settings): void;
				public setIdleAtNs(_set_: number): void;
				public isMultiplexed$okhttp(): boolean;
				public trackFailure(param0: okhttp3.internal.connection.RealCall, param1: java.io.IOException): void;
				public getRouteFailureCount$okhttp(): number;
				public route(): okhttp3.Route;
				public newCodec$okhttp(client: okhttp3.OkHttpClient, chain: okhttp3.internal.http.RealInterceptorChain): okhttp3.internal.http.ExchangeCodec;
				public noNewExchanges(): void;
				public noCoalescedConnections$okhttp(): void;
				public toString(): string;
				public getRoute(): okhttp3.Route;
				public onStream(param0: okhttp3.internal.http2.Http2Stream): void;
				public connectFailed$okhttp(client: okhttp3.OkHttpClient, failedRoute: okhttp3.Route, failure: java.io.IOException): void;
				public incrementSuccessCount$okhttp(): void;
				public setRouteFailureCount$okhttp(_set_: number): void;
				public constructor(taskRunner: okhttp3.internal.concurrent.TaskRunner, connectionPool: okhttp3.internal.connection.RealConnectionPool, route: okhttp3.Route, rawSocket: java.net.Socket, socket: java.net.Socket, handshake: okhttp3.Handshake, protocol: okhttp3.Protocol, source: okio.BufferedSource, sink: okio.BufferedSink, pingIntervalMillis: number);
				public getNoNewExchanges(): boolean;
				public onStream(stream: okhttp3.internal.http2.Http2Stream): void;
			}
			export module RealConnection {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.RealConnection.Companion>;
					public newTestConnection(taskRunner: okhttp3.internal.concurrent.TaskRunner, connectionPool: okhttp3.internal.connection.RealConnectionPool, route: okhttp3.Route, socket: java.net.Socket, idleAtNs: number): okhttp3.internal.connection.RealConnection;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealConnectionPool extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.RealConnectionPool>;
				public cleanup(now: number): number;
				public connectionCount(): number;
				public put(connection: okhttp3.internal.connection.RealConnection): void;
				public callAcquirePooledConnection(doExtensiveHealthChecks: boolean, address: okhttp3.Address, call: okhttp3.internal.connection.RealCall, routes: java.util.List<okhttp3.Route>, requireMultiplexed: boolean): okhttp3.internal.connection.RealConnection;
				public constructor(taskRunner: okhttp3.internal.concurrent.TaskRunner, maxIdleConnections: number, keepAliveDuration: number, param3: java.util.concurrent.TimeUnit);
				public evictAll(): void;
				public idleConnectionCount(): number;
				public connectionBecameIdle(connection: okhttp3.internal.connection.RealConnection): boolean;
			}
			export module RealConnectionPool {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.RealConnectionPool.Companion>;
					public get(connectionPool: okhttp3.ConnectionPool): okhttp3.internal.connection.RealConnectionPool;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealRoutePlanner extends java.lang.Object implements okhttp3.internal.connection.RoutePlanner {
				public static class: java.lang.Class<okhttp3.internal.connection.RealRoutePlanner>;
				public getAddress(): okhttp3.Address;
				public planReusePooledConnection$okhttp(planToReplace: okhttp3.internal.connection.ConnectPlan, routes: java.util.List<okhttp3.Route>): okhttp3.internal.connection.ReusePlan;
				public sameHostAndPort(param0: okhttp3.HttpUrl): boolean;
				public isCanceled(): boolean;
				public plan(): okhttp3.internal.connection.RoutePlanner.Plan;
				public planConnectToRoute$okhttp(route: okhttp3.Route, routes: java.util.List<okhttp3.Route>): okhttp3.internal.connection.ConnectPlan;
				public getDeferredPlans(): kotlin.collections.ArrayDeque<okhttp3.internal.connection.RoutePlanner.Plan>;
				public sameHostAndPort(url: okhttp3.HttpUrl): boolean;
				public constructor(client: okhttp3.OkHttpClient, address: okhttp3.Address, call: okhttp3.internal.connection.RealCall, chain: okhttp3.internal.http.RealInterceptorChain);
				public hasNext(failedConnection: okhttp3.internal.connection.RealConnection): boolean;
				public hasNext(param0: okhttp3.internal.connection.RealConnection): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ReusePlan extends java.lang.Object implements okhttp3.internal.connection.RoutePlanner.Plan {
				public static class: java.lang.Class<okhttp3.internal.connection.ReusePlan>;
				public connectTcp(): okhttp3.internal.connection.RoutePlanner.ConnectResult;
				public constructor(connection: okhttp3.internal.connection.RealConnection);
				public cancel(): void;
				public isReady(): boolean;
				public connectTcp(): java.lang.Void;
				public connectTlsEtc(): okhttp3.internal.connection.RoutePlanner.ConnectResult;
				public retry(): java.lang.Void;
				public retry(): okhttp3.internal.connection.RoutePlanner.Plan;
				public connectTlsEtc(): java.lang.Void;
				public getConnection(): okhttp3.internal.connection.RealConnection;
				public handleSuccess(): okhttp3.internal.connection.RealConnection;
				public cancel(): java.lang.Void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteDatabase extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteDatabase>;
				public getFailedRoutes(): java.util.Set<okhttp3.Route>;
				public failed(failedRoute: okhttp3.Route): void;
				public connected(route: okhttp3.Route): void;
				public shouldPostpone(route: okhttp3.Route): boolean;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RoutePlanner extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.RoutePlanner>;
				/**
				 * Constructs a new instance of the okhttp3.internal.connection.RoutePlanner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getAddress(): okhttp3.Address;
					getDeferredPlans(): kotlin.collections.ArrayDeque<okhttp3.internal.connection.RoutePlanner.Plan>;
					isCanceled(): boolean;
					plan(): okhttp3.internal.connection.RoutePlanner.Plan;
					hasNext(param0: okhttp3.internal.connection.RealConnection): boolean;
					hasNext$default(param0: okhttp3.internal.connection.RoutePlanner, param1: okhttp3.internal.connection.RealConnection, param2: number, param3: any): boolean;
					sameHostAndPort(param0: okhttp3.HttpUrl): boolean;
				});
				public constructor();
				public getAddress(): okhttp3.Address;
				public sameHostAndPort(param0: okhttp3.HttpUrl): boolean;
				public isCanceled(): boolean;
				public plan(): okhttp3.internal.connection.RoutePlanner.Plan;
				public getDeferredPlans(): kotlin.collections.ArrayDeque<okhttp3.internal.connection.RoutePlanner.Plan>;
				public hasNext(param0: okhttp3.internal.connection.RealConnection): boolean;
			}
			export module RoutePlanner {
				export class ConnectResult extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.RoutePlanner.ConnectResult>;
					public component2(): okhttp3.internal.connection.RoutePlanner.Plan;
					public equals(obj: any): boolean;
					public constructor(plan: okhttp3.internal.connection.RoutePlanner.Plan, nextPlan: okhttp3.internal.connection.RoutePlanner.Plan, throwable: java.lang.Throwable);
					public getThrowable(): java.lang.Throwable;
					public component3(): java.lang.Throwable;
					public equals(other: any): boolean;
					public getNextPlan(): okhttp3.internal.connection.RoutePlanner.Plan;
					public copy(plan: okhttp3.internal.connection.RoutePlanner.Plan, nextPlan: okhttp3.internal.connection.RoutePlanner.Plan, throwable: java.lang.Throwable): okhttp3.internal.connection.RoutePlanner.ConnectResult;
					public toString(): string;
					public getPlan(): okhttp3.internal.connection.RoutePlanner.Plan;
					public hashCode(): number;
					public component1(): okhttp3.internal.connection.RoutePlanner.Plan;
					public isSuccess(): boolean;
				}
				export class Plan extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.RoutePlanner.Plan>;
					/**
					 * Constructs a new instance of the okhttp3.internal.connection.RoutePlanner$Plan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isReady(): boolean;
						connectTcp(): okhttp3.internal.connection.RoutePlanner.ConnectResult;
						connectTlsEtc(): okhttp3.internal.connection.RoutePlanner.ConnectResult;
						handleSuccess(): okhttp3.internal.connection.RealConnection;
						cancel(): void;
						retry(): okhttp3.internal.connection.RoutePlanner.Plan;
					});
					public constructor();
					public isReady(): boolean;
					public retry(): okhttp3.internal.connection.RoutePlanner.Plan;
					public connectTlsEtc(): okhttp3.internal.connection.RoutePlanner.ConnectResult;
					public handleSuccess(): okhttp3.internal.connection.RealConnection;
					public connectTcp(): okhttp3.internal.connection.RoutePlanner.ConnectResult;
					public cancel(): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteSelector extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector>;
				public next(): okhttp3.internal.connection.RouteSelector.Selection;
				public constructor(address: okhttp3.Address, routeDatabase: okhttp3.internal.connection.RouteDatabase, call: okhttp3.Call, fastFallback: boolean, eventListener: okhttp3.EventListener);
				public hasNext(): boolean;
			}
			export module RouteSelector {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector.Companion>;
					public getSocketHost($this$socketHost: java.net.InetSocketAddress): string;
				}
				export class Selection extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector.Selection>;
					public constructor(routes: java.util.List<okhttp3.Route>);
					public next(): okhttp3.Route;
					public getRoutes(): java.util.List<okhttp3.Route>;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class SequentialExchangeFinder extends java.lang.Object implements okhttp3.internal.connection.ExchangeFinder {
				public static class: java.lang.Class<okhttp3.internal.connection.SequentialExchangeFinder>;
				public getRoutePlanner(): okhttp3.internal.connection.RoutePlanner;
				public constructor(routePlanner: okhttp3.internal.connection.RoutePlanner);
				public find(): okhttp3.internal.connection.RealConnection;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module graal {
			export class OkHttpFeature extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.graal.OkHttpFeature>;
				public beforeAnalysis(access: org.graalvm.nativeimage.hosted.Feature.BeforeAnalysisAccess): void;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module graal {
			export class TargetAndroid10Platform extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.graal.TargetAndroid10Platform>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module graal {
			export class TargetAndroidPlatform extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.graal.TargetAndroidPlatform>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module graal {
			export class TargetBouncyCastlePlatform extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.graal.TargetBouncyCastlePlatform>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module graal {
			export class TargetConscryptPlatform extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.graal.TargetConscryptPlatform>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module graal {
			export class TargetJdk8WithJettyBootPlatform extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.graal.TargetJdk8WithJettyBootPlatform>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module graal {
			export class TargetOpenJSSEPlatform extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.graal.TargetOpenJSSEPlatform>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module graal {
			export class TargetPlatform extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.graal.TargetPlatform>;
				public findPlatform(): okhttp3.internal.platform.Platform;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class BridgeInterceptor extends java.lang.Object implements okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.BridgeInterceptor>;
				public constructor(cookieJar: okhttp3.CookieJar);
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class CallServerInterceptor extends java.lang.Object implements okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.CallServerInterceptor>;
				public constructor(forWebSocket: boolean);
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class ExchangeCodec extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.ExchangeCodec>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http.ExchangeCodec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCarrier(): okhttp3.internal.http.ExchangeCodec.Carrier;
					createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
					writeRequestHeaders(param0: okhttp3.Request): void;
					flushRequest(): void;
					finishRequest(): void;
					readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
					reportedContentLength(param0: okhttp3.Response): number;
					openResponseBodySource(param0: okhttp3.Response): okio.Source;
					trailers(): okhttp3.Headers;
					cancel(): void;
					"<clinit>"(): void;
				});
				public constructor();
				public static DISCARD_STREAM_TIMEOUT_MILLIS: number;
				public finishRequest(): void;
				public trailers(): okhttp3.Headers;
				public reportedContentLength(param0: okhttp3.Response): number;
				public openResponseBodySource(param0: okhttp3.Response): okio.Source;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public cancel(): void;
				public flushRequest(): void;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
				public writeRequestHeaders(param0: okhttp3.Request): void;
				public getCarrier(): okhttp3.internal.http.ExchangeCodec.Carrier;
			}
			export module ExchangeCodec {
				export class Carrier extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http.ExchangeCodec.Carrier>;
					/**
					 * Constructs a new instance of the okhttp3.internal.http.ExchangeCodec$Carrier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getRoute(): okhttp3.Route;
						trackFailure(param0: okhttp3.internal.connection.RealCall, param1: java.io.IOException): void;
						noNewExchanges(): void;
						cancel(): void;
					});
					public constructor();
					public cancel(): void;
					public getRoute(): okhttp3.Route;
					public trackFailure(param0: okhttp3.internal.connection.RealCall, param1: java.io.IOException): void;
					public noNewExchanges(): void;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http.ExchangeCodec.Companion>;
					public static DISCARD_STREAM_TIMEOUT_MILLIS: number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpHeaders extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.HttpHeaders>;
				public static promisesBody($this$promisesBody: okhttp3.Response): boolean;
				public static parseChallenges($this$parseChallenges: okhttp3.Headers, headerName: string): java.util.List<okhttp3.Challenge>;
				/** @deprecated */
				public static hasBody(response: okhttp3.Response): boolean;
				public static receiveHeaders($this$receiveHeaders: okhttp3.CookieJar, url: okhttp3.HttpUrl, headers: okhttp3.Headers): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpMethod extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.HttpMethod>;
				public static INSTANCE: okhttp3.internal.http.HttpMethod;
				public static requiresRequestBody(method: string): boolean;
				public redirectsToGet(method: string): boolean;
				public redirectsWithBody(method: string): boolean;
				public static invalidatesCache(method: string): boolean;
				public static permitsRequestBody(method: string): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RealInterceptorChain extends java.lang.Object implements okhttp3.Interceptor.Chain {
				public static class: java.lang.Class<okhttp3.internal.http.RealInterceptorChain>;
				public getConnectTimeoutMillis$okhttp(): number;
				public request(): okhttp3.Request;
				public getCall$okhttp(): okhttp3.internal.connection.RealCall;
				public getRequest$okhttp(): okhttp3.Request;
				public proceed(request: okhttp3.Request): okhttp3.Response;
				public constructor(call: okhttp3.internal.connection.RealCall, interceptors: java.util.List<any>, index: number, exchange: okhttp3.internal.connection.Exchange, request: okhttp3.Request, connectTimeoutMillis: number, readTimeoutMillis: number, writeTimeoutMillis: number);
				public copy$okhttp(index: number, exchange: okhttp3.internal.connection.Exchange, request: okhttp3.Request, connectTimeoutMillis: number, readTimeoutMillis: number, writeTimeoutMillis: number): okhttp3.internal.http.RealInterceptorChain;
				public connectTimeoutMillis(): number;
				public getReadTimeoutMillis$okhttp(): number;
				public getWriteTimeoutMillis$okhttp(): number;
				public withReadTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public withConnectTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public connection(): okhttp3.Connection;
				public writeTimeoutMillis(): number;
				public readTimeoutMillis(): number;
				public call(): okhttp3.Call;
				public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public getExchange$okhttp(): okhttp3.internal.connection.Exchange;
				public proceed(param0: okhttp3.Request): okhttp3.Response;
				public withWriteTimeout(timeout: number, unit: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RealResponseBody extends okhttp3.ResponseBody {
				public static class: java.lang.Class<okhttp3.internal.http.RealResponseBody>;
				public constructor(contentTypeString: string, contentLength: number, param2: okio.BufferedSource);
				public close(): void;
				public contentLength(): number;
				public source(): okio.BufferedSource;
				public contentType(): okhttp3.MediaType;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RequestLine extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.RequestLine>;
				public static INSTANCE: okhttp3.internal.http.RequestLine;
				public get(request: okhttp3.Request, proxyType: java.net.Proxy.Type): string;
				public requestPath(url: okhttp3.HttpUrl): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RetryAndFollowUpInterceptor extends java.lang.Object implements okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.RetryAndFollowUpInterceptor>;
				public constructor(client: okhttp3.OkHttpClient);
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
			export module RetryAndFollowUpInterceptor {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http.RetryAndFollowUpInterceptor.Companion>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class StatusLine extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http.StatusLine>;
				public protocol: okhttp3.Protocol;
				public code: number;
				public message: string;
				public constructor(protocol: okhttp3.Protocol, code: number, message: string);
				public toString(): string;
			}
			export module StatusLine {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http.StatusLine.Companion>;
					public parse(statusLine: string): okhttp3.internal.http.StatusLine;
					public get(response: okhttp3.Response): okhttp3.internal.http.StatusLine;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http1 {
			export class HeadersReader extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http1.HeadersReader>;
				public readHeaders(): okhttp3.Headers;
				public getSource(): okio.BufferedSource;
				public constructor(source: okio.BufferedSource);
				public readLine(): string;
			}
			export module HeadersReader {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http1.HeadersReader.Companion>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http1 {
			export class Http1ExchangeCodec extends java.lang.Object implements okhttp3.internal.http.ExchangeCodec {
				public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec>;
				public finishRequest(): void;
				public trailers(): okhttp3.Headers;
				public openResponseBodySource(param0: okhttp3.Response): okio.Source;
				public reportedContentLength(response: okhttp3.Response): number;
				public isClosed(): boolean;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public writeRequestHeaders(param0: okhttp3.Request): void;
				public writeRequest(headers: okhttp3.Headers, requestLine: string): void;
				public readResponseHeaders(expectContinue: boolean): okhttp3.Response.Builder;
				public reportedContentLength(param0: okhttp3.Response): number;
				public constructor(client: okhttp3.OkHttpClient, carrier: okhttp3.internal.http.ExchangeCodec.Carrier, source: okio.BufferedSource, sink: okio.BufferedSink);
				public cancel(): void;
				public createRequestBody(request: okhttp3.Request, contentLength: number): okio.Sink;
				public writeRequestHeaders(request: okhttp3.Request): void;
				public flushRequest(): void;
				public skipConnectBody(response: okhttp3.Response): void;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
				public getCarrier(): okhttp3.internal.http.ExchangeCodec.Carrier;
				public openResponseBodySource(response: okhttp3.Response): okio.Source;
			}
			export module Http1ExchangeCodec {
				export abstract class AbstractSource extends java.lang.Object implements okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource>;
					public responseBodyComplete(): void;
					public getTimeout(): okio.ForwardingTimeout;
					public setClosed(_set_: boolean): void;
					public constructor(this$0: okhttp3.internal.http1.Http1ExchangeCodec);
					public getClosed(): boolean;
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class ChunkedSink extends java.lang.Object implements okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.ChunkedSink>;
					public constructor(this$0: okhttp3.internal.http1.Http1ExchangeCodec);
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
					public write(source: okio.Buffer, byteCount: number): void;
				}
				export class ChunkedSource extends okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.ChunkedSource>;
					public constructor(this$0: okhttp3.internal.http1.Http1ExchangeCodec);
					public constructor(this$0: okhttp3.HttpUrl);
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.Companion>;
				}
				export class FixedLengthSource extends okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.FixedLengthSource>;
					public constructor(this$0: number);
					public constructor(this$0: okhttp3.internal.http1.Http1ExchangeCodec);
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class KnownLengthSink extends java.lang.Object implements okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.KnownLengthSink>;
					public constructor(this$0: okhttp3.internal.http1.Http1ExchangeCodec);
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
					public write(source: okio.Buffer, byteCount: number): void;
				}
				export class UnknownLengthSource extends okhttp3.internal.http1.Http1ExchangeCodec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1ExchangeCodec.UnknownLengthSource>;
					public constructor(this$0: okhttp3.internal.http1.Http1ExchangeCodec);
					public close(): void;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class ConnectionShutdownException extends java.io.IOException {
				public static class: java.lang.Class<okhttp3.internal.http2.ConnectionShutdownException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class ErrorCode {
				public static class: java.lang.Class<okhttp3.internal.http2.ErrorCode>;
				public static NO_ERROR: okhttp3.internal.http2.ErrorCode;
				public static PROTOCOL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static INTERNAL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static FLOW_CONTROL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static SETTINGS_TIMEOUT: okhttp3.internal.http2.ErrorCode;
				public static STREAM_CLOSED: okhttp3.internal.http2.ErrorCode;
				public static FRAME_SIZE_ERROR: okhttp3.internal.http2.ErrorCode;
				public static REFUSED_STREAM: okhttp3.internal.http2.ErrorCode;
				public static CANCEL: okhttp3.internal.http2.ErrorCode;
				public static COMPRESSION_ERROR: okhttp3.internal.http2.ErrorCode;
				public static CONNECT_ERROR: okhttp3.internal.http2.ErrorCode;
				public static ENHANCE_YOUR_CALM: okhttp3.internal.http2.ErrorCode;
				public static INADEQUATE_SECURITY: okhttp3.internal.http2.ErrorCode;
				public static HTTP_1_1_REQUIRED: okhttp3.internal.http2.ErrorCode;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): okhttp3.internal.http2.ErrorCode[];
				public static valueOf(value: string): okhttp3.internal.http2.ErrorCode;
				public getHttpCode(): number;
			}
			export module ErrorCode {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.ErrorCode.Companion>;
					public fromHttp2(code: number): okhttp3.internal.http2.ErrorCode;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Header extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Header>;
				public name: okio.ByteString;
				public value: okio.ByteString;
				public hpackSize: number;
				public static PSEUDO_PREFIX: okio.ByteString;
				public static RESPONSE_STATUS_UTF8: string;
				public static TARGET_METHOD_UTF8: string;
				public static TARGET_PATH_UTF8: string;
				public static TARGET_SCHEME_UTF8: string;
				public static TARGET_AUTHORITY_UTF8: string;
				public static RESPONSE_STATUS: okio.ByteString;
				public static TARGET_METHOD: okio.ByteString;
				public static TARGET_PATH: okio.ByteString;
				public static TARGET_SCHEME: okio.ByteString;
				public static TARGET_AUTHORITY: okio.ByteString;
				public component2(): okio.ByteString;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public constructor(name: string, value: string);
				public hashCode(): number;
				public component1(): okio.ByteString;
				public constructor(name: okio.ByteString, value: okio.ByteString);
				public toString(): string;
				public copy(name: okio.ByteString, value: okio.ByteString): okhttp3.internal.http2.Header;
				public constructor(name: okio.ByteString, value: string);
			}
			export module Header {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Header.Companion>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Hpack extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Hpack>;
				public static INSTANCE: okhttp3.internal.http2.Hpack;
				public getSTATIC_HEADER_TABLE(): okhttp3.internal.http2.Header[];
				public getNAME_TO_FIRST_INDEX(): java.util.Map<okio.ByteString,java.lang.Integer>;
				public checkLowercase(name: okio.ByteString): okio.ByteString;
			}
			export module Hpack {
				export class Reader extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Reader>;
					public dynamicTable: okhttp3.internal.http2.Header[];
					public headerCount: number;
					public dynamicTableByteCount: number;
					public maxDynamicTableByteCount(): number;
					public constructor(source: okio.Source, headerTableSizeSetting: number, maxDynamicTableByteCount: number);
					public readInt(firstByte: number, prefixMask: number): number;
					public readHeaders(): void;
					public constructor(source: okio.Source, headerTableSizeSetting: number);
					public readByteString(): okio.ByteString;
					public getAndResetHeaderList(): java.util.List<okhttp3.internal.http2.Header>;
				}
				export class Writer extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Writer>;
					public headerTableSizeSetting: number;
					public maxDynamicTableByteCount: number;
					public dynamicTable: okhttp3.internal.http2.Header[];
					public headerCount: number;
					public dynamicTableByteCount: number;
					public resizeHeaderTable(headerTableSizeSetting: number): void;
					public writeByteString(data: okio.ByteString): void;
					public constructor(out: okio.Buffer);
					public writeInt(value: number, prefixMask: number, bits: number): void;
					public writeHeaders(headerBlock: java.util.List<okhttp3.internal.http2.Header>): void;
					public constructor(headerTableSizeSetting: number, useCompression: boolean, out: okio.Buffer);
					public constructor(headerTableSizeSetting: number, out: okio.Buffer);
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2 extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2>;
				public static INSTANCE: okhttp3.internal.http2.Http2;
				public static CONNECTION_PREFACE: okio.ByteString;
				public static INITIAL_MAX_FRAME_SIZE: number;
				public static TYPE_DATA: number;
				public static TYPE_HEADERS: number;
				public static TYPE_PRIORITY: number;
				public static TYPE_RST_STREAM: number;
				public static TYPE_SETTINGS: number;
				public static TYPE_PUSH_PROMISE: number;
				public static TYPE_PING: number;
				public static TYPE_GOAWAY: number;
				public static TYPE_WINDOW_UPDATE: number;
				public static TYPE_CONTINUATION: number;
				public static FLAG_NONE: number;
				public static FLAG_ACK: number;
				public static FLAG_END_STREAM: number;
				public static FLAG_END_HEADERS: number;
				public static FLAG_END_PUSH_PROMISE: number;
				public static FLAG_PADDED: number;
				public static FLAG_PRIORITY: number;
				public static FLAG_COMPRESSED: number;
				public frameLogWindowUpdate(inbound: boolean, streamId: number, length: number, windowSizeIncrement: number): string;
				public formattedType$okhttp(type: number): string;
				public formatFlags(type: number, flags: number): string;
				public frameLog(inbound: boolean, streamId: number, length: number, type: number, flags: number): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Connection extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection>;
				public static OKHTTP_CLIENT_WINDOW_SIZE: number;
				public static INTERVAL_PING: number;
				public static DEGRADED_PING: number;
				public static AWAIT_PING: number;
				public static DEGRADED_PONG_TIMEOUT_NS: number;
				public getClient$okhttp(): boolean;
				public writePing(reply: boolean, payload1: number, payload2: number): void;
				public start(sendConnectionPreface: boolean): void;
				public setSettings(settings: okhttp3.internal.http2.Settings): void;
				public pushedStream$okhttp(streamId: number): boolean;
				public getOkHttpSettings(): okhttp3.internal.http2.Settings;
				public setPeerSettings(_set_: okhttp3.internal.http2.Settings): void;
				public pushHeadersLater$okhttp(streamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>, inFinished: boolean): void;
				public newStream(requestHeaders: java.util.List<okhttp3.internal.http2.Header>, out: boolean): okhttp3.internal.http2.Http2Stream;
				public getReaderRunnable(): okhttp3.internal.http2.Http2Connection.ReaderRunnable;
				public getListener$okhttp(): okhttp3.internal.http2.Http2Connection.Listener;
				public openStreamCount(): number;
				public setLastGoodStreamId$okhttp(_set_: number): void;
				public getStream(id: number): okhttp3.internal.http2.Http2Stream;
				public getLastGoodStreamId$okhttp(): number;
				public awaitPong(): void;
				public flush(): void;
				public pushStream(associatedStreamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>, out: boolean): okhttp3.internal.http2.Http2Stream;
				public start(): void;
				public getNextStreamId$okhttp(): number;
				public writeData(streamId: number, outFinished: boolean, buffer: okio.Buffer, byteCount: number): void;
				public getConnectionName$okhttp(): string;
				public getWriter(): okhttp3.internal.http2.Http2Writer;
				public removeStream$okhttp(streamId: number): okhttp3.internal.http2.Http2Stream;
				public close(): void;
				public constructor(builder: okhttp3.internal.http2.Http2Connection.Builder);
				public getSocket$okhttp(): java.net.Socket;
				public writePingAndAwaitPong(): void;
				public writeSynResetLater$okhttp(streamId: number, errorCode: okhttp3.internal.http2.ErrorCode): void;
				public sendDegradedPingLater$okhttp(): void;
				public pushRequestLater$okhttp(streamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>): void;
				public pushDataLater$okhttp(streamId: number, source: okio.BufferedSource, byteCount: number, inFinished: boolean): void;
				public writeWindowUpdateLater$okhttp(streamId: number, unacknowledgedBytesRead: number): void;
				public pushResetLater$okhttp(streamId: number, errorCode: okhttp3.internal.http2.ErrorCode): void;
				public getReadBytesAcknowledged(): number;
				public getStreams$okhttp(): java.util.Map<java.lang.Integer,okhttp3.internal.http2.Http2Stream>;
				public getWriteBytesTotal(): number;
				public writePing(): void;
				public updateConnectionFlowControl$okhttp(read: number): void;
				public setNextStreamId$okhttp(_set_: number): void;
				public writeSynReset$okhttp(streamId: number, statusCode: okhttp3.internal.http2.ErrorCode): void;
				public close$okhttp(connectionCode: okhttp3.internal.http2.ErrorCode, streamCode: okhttp3.internal.http2.ErrorCode, cause: java.io.IOException): void;
				public getPeerSettings(): okhttp3.internal.http2.Settings;
				public getWriteBytesMaximum(): number;
				public shutdown(statusCode: okhttp3.internal.http2.ErrorCode): void;
				public getReadBytesTotal(): number;
				public writeHeaders$okhttp(streamId: number, outFinished: boolean, alternating: java.util.List<okhttp3.internal.http2.Header>): void;
				public isHealthy(nowNs: number): boolean;
			}
			export module Http2Connection {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Builder>;
					public connectionName: string;
					public source: okio.BufferedSource;
					public sink: okio.BufferedSink;
					public build(): okhttp3.internal.http2.Http2Connection;
					public setSink$okhttp(_set_: okio.BufferedSink): void;
					public getClient$okhttp(): boolean;
					public setSource$okhttp(_set_: okio.BufferedSource): void;
					public socket(socket: java.net.Socket, peerName: string, source: okio.BufferedSource, sink: okio.BufferedSink): okhttp3.internal.http2.Http2Connection.Builder;
					public pingIntervalMillis(pingIntervalMillis: number): okhttp3.internal.http2.Http2Connection.Builder;
					public getSocket$okhttp(): java.net.Socket;
					public getListener$okhttp(): okhttp3.internal.http2.Http2Connection.Listener;
					public socket(socket: java.net.Socket): okhttp3.internal.http2.Http2Connection.Builder;
					public setPushObserver$okhttp(_set_: okhttp3.internal.http2.PushObserver): void;
					public setPingIntervalMillis$okhttp(_set_: number): void;
					public pushObserver(pushObserver: okhttp3.internal.http2.PushObserver): okhttp3.internal.http2.Http2Connection.Builder;
					public getSource$okhttp(): okio.BufferedSource;
					public socket(socket: java.net.Socket, peerName: string): okhttp3.internal.http2.Http2Connection.Builder;
					public setClient$okhttp(_set_: boolean): void;
					public constructor(client: boolean, taskRunner: okhttp3.internal.concurrent.TaskRunner);
					public getConnectionName$okhttp(): string;
					public setListener$okhttp(_set_: okhttp3.internal.http2.Http2Connection.Listener): void;
					public getPushObserver$okhttp(): okhttp3.internal.http2.PushObserver;
					public listener(listener: okhttp3.internal.http2.Http2Connection.Listener): okhttp3.internal.http2.Http2Connection.Builder;
					public setConnectionName$okhttp(_set_: string): void;
					public getSink$okhttp(): okio.BufferedSink;
					public getPingIntervalMillis$okhttp(): number;
					public getTaskRunner$okhttp(): okhttp3.internal.concurrent.TaskRunner;
					public socket(socket: java.net.Socket, peerName: string, source: okio.BufferedSource): okhttp3.internal.http2.Http2Connection.Builder;
					public setSocket$okhttp(_set_: java.net.Socket): void;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Companion>;
					public getDEFAULT_SETTINGS(): okhttp3.internal.http2.Settings;
				}
				export abstract class Listener extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Listener>;
					public static REFUSE_INCOMING_STREAMS: okhttp3.internal.http2.Http2Connection.Listener;
					public onStream(param0: okhttp3.internal.http2.Http2Stream): void;
					public onSettings(connection: okhttp3.internal.http2.Http2Connection, settings: okhttp3.internal.http2.Settings): void;
					public constructor();
				}
				export module Listener {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Listener.Companion>;
					}
				}
				export class ReaderRunnable extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.ReaderRunnable>;
					public ackSettings(): void;
					public alternateService(streamId: number, origin: string, protocol: okio.ByteString, host: string, port: number, maxAge: number): void;
					public invoke(): void;
					public headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
					public settings(clearPrevious: boolean, settings: okhttp3.internal.http2.Settings): void;
					public ping(ack: boolean, payload1: number, payload2: number): void;
					public pushPromise(streamId: number, promisedStreamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>): void;
					public settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
					public alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
					public applyAndAckSettings(clearPrevious: boolean, settings: okhttp3.internal.http2.Settings): void;
					public data(inFinished: boolean, streamId: number, source: okio.BufferedSource, length: number): void;
					public data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
					public goAway(lastGoodStreamId: number, errorCode: okhttp3.internal.http2.ErrorCode, debugData: okio.ByteString): void;
					public rstStream(streamId: number, errorCode: okhttp3.internal.http2.ErrorCode): void;
					public windowUpdate(streamId: number, windowSizeIncrement: number): void;
					public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
					public windowUpdate(param0: number, param1: number): void;
					public headers(inFinished: boolean, streamId: number, associatedStreamId: number, headerBlock: java.util.List<okhttp3.internal.http2.Header>): void;
					public priority(param0: number, param1: number, param2: number, param3: boolean): void;
					public invoke(): any;
					public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
					public priority(streamId: number, streamDependency: number, weight: number, exclusive: boolean): void;
					public getReader$okhttp(): okhttp3.internal.http2.Http2Reader;
					public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					public constructor(this$0: okhttp3.internal.http2.Http2Reader);
					public ping(param0: boolean, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2ExchangeCodec extends java.lang.Object implements okhttp3.internal.http.ExchangeCodec {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2ExchangeCodec>;
				public finishRequest(): void;
				public trailers(): okhttp3.Headers;
				public openResponseBodySource(param0: okhttp3.Response): okio.Source;
				public reportedContentLength(response: okhttp3.Response): number;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public writeRequestHeaders(param0: okhttp3.Request): void;
				public constructor(client: okhttp3.OkHttpClient, carrier: okhttp3.internal.http.ExchangeCodec.Carrier, chain: okhttp3.internal.http.RealInterceptorChain, http2Connection: okhttp3.internal.http2.Http2Connection);
				public readResponseHeaders(expectContinue: boolean): okhttp3.Response.Builder;
				public reportedContentLength(param0: okhttp3.Response): number;
				public cancel(): void;
				public createRequestBody(request: okhttp3.Request, contentLength: number): okio.Sink;
				public writeRequestHeaders(request: okhttp3.Request): void;
				public flushRequest(): void;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
				public getCarrier(): okhttp3.internal.http.ExchangeCodec.Carrier;
				public openResponseBodySource(response: okhttp3.Response): okio.Source;
			}
			export module Http2ExchangeCodec {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2ExchangeCodec.Companion>;
					public http2HeadersList(request: okhttp3.Request): java.util.List<okhttp3.internal.http2.Header>;
					public readHttp2HeadersList(headerBlock: okhttp3.Headers, protocol: okhttp3.Protocol): okhttp3.Response.Builder;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Reader extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader>;
				public constructor(source: okio.BufferedSource, client: boolean);
				public readConnectionPreface(handler: okhttp3.internal.http2.Http2Reader.Handler): void;
				public close(): void;
				public nextFrame(requireSettings: boolean, handler: okhttp3.internal.http2.Http2Reader.Handler): boolean;
			}
			export module Http2Reader {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.Companion>;
					public getLogger(): java.util.logging.Logger;
					public lengthWithoutPadding(length: number, flags: number, padding: number): number;
				}
				export class ContinuationSource extends java.lang.Object implements okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.ContinuationSource>;
					public getFlags(): number;
					public setLeft(_set_: number): void;
					public getLength(): number;
					public read(sink: okio.Buffer, byteCount: number): number;
					public setPadding(_set_: number): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
					public setStreamId(_set_: number): void;
					public setLength(_set_: number): void;
					public getStreamId(): number;
					public setFlags(_set_: number): void;
					public getPadding(): number;
					public constructor(source: okio.BufferedSource);
					public close(): void;
					public getLeft(): number;
				}
				export class Handler extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.Handler>;
					/**
					 * Constructs a new instance of the okhttp3.internal.http2.Http2Reader$Handler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
						headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
						rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
						settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
						ackSettings(): void;
						ping(param0: boolean, param1: number, param2: number): void;
						goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
						windowUpdate(param0: number, param1: number): void;
						priority(param0: number, param1: number, param2: number, param3: boolean): void;
						pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
						alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
					});
					public constructor();
					public settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
					public alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
					public ackSettings(): void;
					public data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
					public headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
					public priority(param0: number, param1: number, param2: number, param3: boolean): void;
					public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
					public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
					public windowUpdate(param0: number, param1: number): void;
					public ping(param0: boolean, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Stream extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream>;
				public static EMIT_BUFFER_SIZE: number;
				public getSource(): okio.Source;
				public setErrorException$okhttp(_set_: java.io.IOException): void;
				public trailers(): okhttp3.Headers;
				public setWriteBytesTotal$okhttp(_set_: number): void;
				public setReadBytesAcknowledged$okhttp(_set_: number): void;
				public cancelStreamIfNecessary$okhttp(): void;
				public writeHeaders(responseHeaders: java.util.List<okhttp3.internal.http2.Header>, outFinished: boolean, flushHeaders: boolean): void;
				public setErrorCode$okhttp(_set_: okhttp3.internal.http2.ErrorCode): void;
				public receiveRstStream(errorCode: okhttp3.internal.http2.ErrorCode): void;
				public setReadBytesTotal$okhttp(_set_: number): void;
				public getReadTimeout$okhttp(): okhttp3.internal.http2.Http2Stream.StreamTimeout;
				public readTimeout(): okio.Timeout;
				public getErrorCode$okhttp(): okhttp3.internal.http2.ErrorCode;
				public getSink(): okio.Sink;
				public checkOutNotClosed$okhttp(): void;
				public isLocallyInitiated(): boolean;
				public closeLater(errorCode: okhttp3.internal.http2.ErrorCode): void;
				public enqueueTrailers(trailers: okhttp3.Headers): void;
				public writeTimeout(): okio.Timeout;
				public getId(): number;
				public receiveHeaders(headers: okhttp3.Headers, inFinished: boolean): void;
				public getSource$okhttp(): okhttp3.internal.http2.Http2Stream.FramingSource;
				public getWriteTimeout$okhttp(): okhttp3.internal.http2.Http2Stream.StreamTimeout;
				public setWriteBytesMaximum$okhttp(_set_: number): void;
				public getReadBytesAcknowledged(): number;
				public close(rstStatusCode: okhttp3.internal.http2.ErrorCode, errorException: java.io.IOException): void;
				public addBytesToWriteWindow(delta: number): void;
				public getWriteBytesTotal(): number;
				public getSink$okhttp(): okhttp3.internal.http2.Http2Stream.FramingSink;
				public getErrorException$okhttp(): java.io.IOException;
				public getConnection(): okhttp3.internal.http2.Http2Connection;
				public isOpen(): boolean;
				public constructor(id: number, connection: okhttp3.internal.http2.Http2Connection, outFinished: boolean, inFinished: boolean, headers: okhttp3.Headers);
				public waitForIo$okhttp(): void;
				public getWriteBytesMaximum(): number;
				public getReadBytesTotal(): number;
				public receiveData(source: okio.BufferedSource, length: number): void;
				public takeHeaders(callerIsIdle: boolean): okhttp3.Headers;
			}
			export module Http2Stream {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.Companion>;
				}
				export class FramingSink extends java.lang.Object implements okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSink>;
					public getTrailers(): okhttp3.Headers;
					public setTrailers(_set_: okhttp3.Headers): void;
					public constructor(this$0: boolean);
					public getFinished(): boolean;
					public setFinished(_set_: boolean): void;
					public setClosed(_set_: boolean): void;
					public getClosed(): boolean;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
					public write(source: okio.Buffer, byteCount: number): void;
				}
				export class FramingSource extends java.lang.Object implements okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSource>;
					public getTrailers(): okhttp3.Headers;
					public receive$okhttp(source: okio.BufferedSource, byteCount: number): void;
					public getFinished$okhttp(): boolean;
					public read(sink: okio.Buffer, byteCount: number): number;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
					public getReadBuffer(): okio.Buffer;
					public getClosed$okhttp(): boolean;
					public setTrailers(_set_: okhttp3.Headers): void;
					public close(): void;
					public getReceiveBuffer(): okio.Buffer;
					public setFinished$okhttp(_set_: boolean): void;
					public constructor(this$0: number, maxByteCount: boolean);
					public setClosed$okhttp(_set_: boolean): void;
				}
				export class StreamTimeout extends okio.AsyncTimeout {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.StreamTimeout>;
					public timedOut(): void;
					public newTimeoutException(param0: java.io.IOException): java.io.IOException;
					public exitAndThrowIfTimedOut(): void;
					public constructor(this$0: okhttp3.internal.http2.Http2Stream);
					public constructor();
					public newTimeoutException(cause: java.io.IOException): java.io.IOException;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Writer extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Writer>;
				public ping(ack: boolean, payload1: number, payload2: number): void;
				public settings(settings: okhttp3.internal.http2.Settings): void;
				public close(): void;
				public getHpackWriter(): okhttp3.internal.http2.Hpack.Writer;
				public rstStream(streamId: number, errorCode: okhttp3.internal.http2.ErrorCode): void;
				public data(outFinished: boolean, streamId: number, source: okio.Buffer, byteCount: number): void;
				public dataFrame(streamId: number, flags: number, buffer: okio.Buffer, byteCount: number): void;
				public frameHeader(streamId: number, length: number, type: number, flags: number): void;
				public constructor(sink: okio.BufferedSink, client: boolean);
				public maxDataLength(): number;
				public flush(): void;
				public connectionPreface(): void;
				public headers(outFinished: boolean, streamId: number, headerBlock: java.util.List<okhttp3.internal.http2.Header>): void;
				public pushPromise(streamId: number, promisedStreamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>): void;
				public applyAndAckSettings(peerSettings: okhttp3.internal.http2.Settings): void;
				public goAway(lastGoodStreamId: number, errorCode: okhttp3.internal.http2.ErrorCode, debugData: number[]): void;
				public windowUpdate(streamId: number, windowSizeIncrement: number): void;
			}
			export module Http2Writer {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Writer.Companion>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Huffman extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Huffman>;
				public static INSTANCE: okhttp3.internal.http2.Huffman;
				public decode(source: okio.BufferedSource, byteCount: number, param2: okio.BufferedSink): void;
				public encodedLength(bytes: okio.ByteString): number;
				public encode(source: okio.ByteString, sink: okio.BufferedSink): void;
			}
			export module Huffman {
				export class Node extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Huffman.Node>;
					public getSymbol(): number;
					public getChildren(): okhttp3.internal.http2.Huffman.Node[];
					public constructor();
					public getTerminalBitCount(): number;
					public constructor(symbol: number, bits: number);
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class PushObserver extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.PushObserver>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http2.PushObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRequest(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): boolean;
					onHeaders(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): boolean;
					onData(param0: number, param1: okio.BufferedSource, param2: number, param3: boolean): boolean;
					onReset(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					"<clinit>"(): void;
				});
				public constructor();
				public static CANCEL: okhttp3.internal.http2.PushObserver;
				public onRequest(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): boolean;
				public onHeaders(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): boolean;
				public onData(param0: number, param1: okio.BufferedSource, param2: number, param3: boolean): boolean;
				public onReset(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
			}
			export module PushObserver {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.PushObserver.Companion>;
				}
				export module Companion {
					export class PushObserverCancel extends java.lang.Object implements okhttp3.internal.http2.PushObserver {
						public static class: java.lang.Class<okhttp3.internal.http2.PushObserver.Companion.PushObserverCancel>;
						public onRequest(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): boolean;
						public onHeaders(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): boolean;
						public constructor();
						public onReset(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
						public onHeaders(streamId: number, responseHeaders: java.util.List<okhttp3.internal.http2.Header>, last: boolean): boolean;
						public onData(param0: number, param1: okio.BufferedSource, param2: number, param3: boolean): boolean;
						public onData(streamId: number, source: okio.BufferedSource, byteCount: number, last: boolean): boolean;
						public onRequest(streamId: number, requestHeaders: java.util.List<okhttp3.internal.http2.Header>): boolean;
						public onReset(streamId: number, errorCode: okhttp3.internal.http2.ErrorCode): void;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Settings extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.http2.Settings>;
				public static DEFAULT_INITIAL_WINDOW_SIZE: number;
				public static HEADER_TABLE_SIZE: number;
				public static ENABLE_PUSH: number;
				public static MAX_CONCURRENT_STREAMS: number;
				public static MAX_FRAME_SIZE: number;
				public static MAX_HEADER_LIST_SIZE: number;
				public static INITIAL_WINDOW_SIZE: number;
				public static COUNT: number;
				public getHeaderTableSize(): number;
				public getMaxHeaderListSize(defaultValue: number): number;
				public set(id: number, value: number): okhttp3.internal.http2.Settings;
				public merge(other: okhttp3.internal.http2.Settings): void;
				public constructor();
				public getInitialWindowSize(): number;
				public size(): number;
				public getEnablePush(defaultValue: boolean): boolean;
				public getMaxFrameSize(defaultValue: number): number;
				public getMaxConcurrentStreams(): number;
				public isSet(id: number): boolean;
				public clear(): void;
				public get(id: number): number;
			}
			export module Settings {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.http2.Settings.Companion>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class StreamResetException extends java.io.IOException {
				public static class: java.lang.Class<okhttp3.internal.http2.StreamResetException>;
				public errorCode: okhttp3.internal.http2.ErrorCode;
				public constructor(cause: java.lang.Throwable);
				public constructor(errorCode: okhttp3.internal.http2.ErrorCode);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Android10Platform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Android10Platform>;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public getStackTraceForCloseable(closer: string): any;
				public isCleartextTrafficPermitted(hostname: string): boolean;
				public buildCertificateChainCleaner(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public logCloseableLeak(message: string, stackTrace: any): void;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public constructor();
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
			}
			export module Android10Platform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.Android10Platform.Companion>;
					public isSupported(): boolean;
					public buildIfSupported(): okhttp3.internal.platform.Platform;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class AndroidPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform>;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public isCleartextTrafficPermitted(hostname: string): boolean;
				public connectSocket(socket: java.net.Socket, address: java.net.InetSocketAddress, connectTimeout: number): void;
				public buildCertificateChainCleaner(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public buildTrustRootIndex(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
				public constructor();
			}
			export module AndroidPlatform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.Companion>;
					public isSupported(): boolean;
					public buildIfSupported(): okhttp3.internal.platform.Platform;
				}
				export class CustomTrustRootIndex extends java.lang.Object implements okhttp3.internal.tls.TrustRootIndex {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.CustomTrustRootIndex>;
					public toString(): string;
					public equals(obj: any): boolean;
					public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
					public constructor(trustManager: javax.net.ssl.X509TrustManager, findByIssuerAndSignatureMethod: java.lang.reflect.Method);
					public equals(other: any): boolean;
					public hashCode(): number;
					public copy(trustManager: javax.net.ssl.X509TrustManager, findByIssuerAndSignatureMethod: java.lang.reflect.Method): okhttp3.internal.platform.AndroidPlatform.CustomTrustRootIndex;
					public findByIssuerAndSignature(cert: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class BouncyCastlePlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.BouncyCastlePlatform>;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public newSSLContext(): javax.net.ssl.SSLContext;
				public platformTrustManager(): javax.net.ssl.X509TrustManager;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
			}
			export module BouncyCastlePlatform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.BouncyCastlePlatform.Companion>;
					public isSupported(): boolean;
					public buildIfSupported(): okhttp3.internal.platform.BouncyCastlePlatform;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class ConscryptPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.ConscryptPlatform>;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public newSSLContext(): javax.net.ssl.SSLContext;
				public newSslSocketFactory(trustManager: javax.net.ssl.X509TrustManager): javax.net.ssl.SSLSocketFactory;
				public platformTrustManager(): javax.net.ssl.X509TrustManager;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
			}
			export module ConscryptPlatform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.ConscryptPlatform.Companion>;
					public isSupported(): boolean;
					public buildIfSupported(): okhttp3.internal.platform.ConscryptPlatform;
					public atLeastVersion(major: number, minor: number, patch: number): boolean;
				}
				export class DisabledHostnameVerifier extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.ConscryptPlatform.DisabledHostnameVerifier>;
					public static INSTANCE: okhttp3.internal.platform.ConscryptPlatform.DisabledHostnameVerifier;
					public verify(hostname: string, session: javax.net.ssl.SSLSession): boolean;
					public verify(certs: java.security.cert.X509Certificate[], hostname: string, session: javax.net.ssl.SSLSession): boolean;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Jdk8WithJettyBootPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Jdk8WithJettyBootPlatform>;
				public constructor(putMethod: java.lang.reflect.Method, getMethod: java.lang.reflect.Method, removeMethod: java.lang.reflect.Method, clientProviderClass: java.lang.Class<any>, serverProviderClass: java.lang.Class<any>);
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public afterHandshake(sslSocket: javax.net.ssl.SSLSocket): void;
				public constructor();
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
			}
			export module Jdk8WithJettyBootPlatform {
				export class AlpnProvider extends java.lang.Object implements java.lang.reflect.InvocationHandler {
					public static class: java.lang.Class<okhttp3.internal.platform.Jdk8WithJettyBootPlatform.AlpnProvider>;
					public getSelected(): string;
					public constructor(protocols: java.util.List<string>);
					public setSelected(_set_: string): void;
					public invoke(param0: any, param1: java.lang.reflect.Method, param2: any[]): any;
					public getUnsupported(): boolean;
					public setUnsupported(_set_: boolean): void;
					public invoke(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.Jdk8WithJettyBootPlatform.Companion>;
					public buildIfSupported(): okhttp3.internal.platform.Platform;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Jdk9Platform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Jdk9Platform>;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public newSSLContext(): javax.net.ssl.SSLContext;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public constructor();
			}
			export module Jdk9Platform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.Jdk9Platform.Companion>;
					public buildIfSupported(): okhttp3.internal.platform.Jdk9Platform;
					public getMajorVersion(): java.lang.Integer;
					public isAvailable(): boolean;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class OpenJSSEPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.OpenJSSEPlatform>;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public newSSLContext(): javax.net.ssl.SSLContext;
				public platformTrustManager(): javax.net.ssl.X509TrustManager;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
			}
			export module OpenJSSEPlatform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.OpenJSSEPlatform.Companion>;
					public isSupported(): boolean;
					public buildIfSupported(): okhttp3.internal.platform.OpenJSSEPlatform;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Platform extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.platform.Platform>;
				public static INFO: number;
				public static WARN: number;
				public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<okhttp3.Protocol>): void;
				public isCleartextTrafficPermitted(hostname: string): boolean;
				public getPrefix(): string;
				public newSSLContext(): javax.net.ssl.SSLContext;
				public afterHandshake(sslSocket: javax.net.ssl.SSLSocket): void;
				public newSslSocketFactory(trustManager: javax.net.ssl.X509TrustManager): javax.net.ssl.SSLSocketFactory;
				public log(message: string, level: number, t: java.lang.Throwable): void;
				public logCloseableLeak(message: string, stackTrace: any): void;
				public toString(): string;
				public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public constructor();
				public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
				public getStackTraceForCloseable(closer: string): any;
				public connectSocket(socket: java.net.Socket, address: java.net.InetSocketAddress, connectTimeout: number): void;
				public platformTrustManager(): javax.net.ssl.X509TrustManager;
				public buildCertificateChainCleaner(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public static get(): okhttp3.internal.platform.Platform;
				public buildTrustRootIndex(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
			}
			export module Platform {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.Platform.Companion>;
					public concatLengthPrefixed(protocols: java.util.List<any>): number[];
					public isAndroid(): boolean;
					public get(): okhttp3.internal.platform.Platform;
					public resetForTests(platform: okhttp3.internal.platform.Platform): void;
					public alpnProtocolNames(protocols: java.util.List<any>): java.util.List<string>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class Android10SocketAdapter extends java.lang.Object implements okhttp3.internal.platform.android.SocketAdapter {
					public static class: java.lang.Class<okhttp3.internal.platform.android.Android10SocketAdapter>;
					public isSupported(): boolean;
					public matchesSocket(param0: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<any>): void;
					public constructor();
					public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
					public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
					public matchesSocket(sslSocket: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
				export module Android10SocketAdapter {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.Android10SocketAdapter.Companion>;
						public buildIfSupported(): okhttp3.internal.platform.android.SocketAdapter;
						public isSupported(): boolean;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class AndroidCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
					public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidCertificateChainCleaner>;
					public equals(obj: any): boolean;
					public constructor();
					public constructor(trustManager: javax.net.ssl.X509TrustManager, x509TrustManagerExtensions: android.net.http.X509TrustManagerExtensions);
					public equals(other: any): boolean;
					public clean(param0: java.util.List<any>, param1: string): java.util.List<java.security.cert.Certificate>;
					public hashCode(): number;
					public clean(chain: java.util.List<any>, hostname: string): java.util.List<java.security.cert.Certificate>;
				}
				export module AndroidCertificateChainCleaner {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidCertificateChainCleaner.Companion>;
						public buildIfSupported(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.platform.android.AndroidCertificateChainCleaner;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class AndroidLog extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidLog>;
					public static INSTANCE: okhttp3.internal.platform.android.AndroidLog;
					public androidLog$okhttp(loggerName: string, logLevel: number, message: string, t: java.lang.Throwable): void;
					public enable(): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class AndroidLogHandler extends java.util.logging.Handler {
					public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidLogHandler>;
					public static INSTANCE: okhttp3.internal.platform.android.AndroidLogHandler;
					public publish(param0: java.util.logging.LogRecord): void;
					public close(): void;
					public flush(): void;
					public publish(record: java.util.logging.LogRecord): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class AndroidSocketAdapter extends java.lang.Object implements okhttp3.internal.platform.android.SocketAdapter {
					public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidSocketAdapter>;
					public isSupported(): boolean;
					public matchesSocket(param0: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<any>): void;
					public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
					public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
					public matchesSocket(sslSocket: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
					public constructor(sslSocketClass: java.lang.Class<any>);
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
				export module AndroidSocketAdapter {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.AndroidSocketAdapter.Companion>;
						public factory(packageName: string): okhttp3.internal.platform.android.DeferredSocketAdapter.Factory;
						public getPlayProviderFactory(): okhttp3.internal.platform.android.DeferredSocketAdapter.Factory;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class BouncyCastleSocketAdapter extends java.lang.Object implements okhttp3.internal.platform.android.SocketAdapter {
					public static class: java.lang.Class<okhttp3.internal.platform.android.BouncyCastleSocketAdapter>;
					public isSupported(): boolean;
					public matchesSocket(param0: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<any>): void;
					public constructor();
					public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
					public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
					public matchesSocket(sslSocket: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
				export module BouncyCastleSocketAdapter {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.BouncyCastleSocketAdapter.Companion>;
						public getFactory(): okhttp3.internal.platform.android.DeferredSocketAdapter.Factory;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class ConscryptSocketAdapter extends java.lang.Object implements okhttp3.internal.platform.android.SocketAdapter {
					public static class: java.lang.Class<okhttp3.internal.platform.android.ConscryptSocketAdapter>;
					public isSupported(): boolean;
					public matchesSocket(param0: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<any>): void;
					public constructor();
					public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
					public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
					public matchesSocket(sslSocket: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
				export module ConscryptSocketAdapter {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.ConscryptSocketAdapter.Companion>;
						public getFactory(): okhttp3.internal.platform.android.DeferredSocketAdapter.Factory;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class DeferredSocketAdapter extends java.lang.Object implements okhttp3.internal.platform.android.SocketAdapter {
					public static class: java.lang.Class<okhttp3.internal.platform.android.DeferredSocketAdapter>;
					public isSupported(): boolean;
					public matchesSocket(param0: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<any>): void;
					public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
					public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
					public matchesSocket(sslSocket: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public constructor(socketAdapterFactory: okhttp3.internal.platform.android.DeferredSocketAdapter.Factory);
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
				export module DeferredSocketAdapter {
					export class Factory extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.DeferredSocketAdapter.Factory>;
						/**
						 * Constructs a new instance of the okhttp3.internal.platform.android.DeferredSocketAdapter$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							matchesSocket(param0: javax.net.ssl.SSLSocket): boolean;
							create(param0: javax.net.ssl.SSLSocket): okhttp3.internal.platform.android.SocketAdapter;
						});
						public constructor();
						public matchesSocket(param0: javax.net.ssl.SSLSocket): boolean;
						public create(param0: javax.net.ssl.SSLSocket): okhttp3.internal.platform.android.SocketAdapter;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class SocketAdapter extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.platform.android.SocketAdapter>;
					/**
					 * Constructs a new instance of the okhttp3.internal.platform.android.SocketAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isSupported(): boolean;
						trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
						matchesSocket(param0: javax.net.ssl.SSLSocket): boolean;
						matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
						configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<any>): void;
						getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
					});
					public constructor();
					public isSupported(): boolean;
					public matchesSocket(param0: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<any>): void;
					public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export module android {
				export class StandardAndroidSocketAdapter extends okhttp3.internal.platform.android.AndroidSocketAdapter {
					public static class: java.lang.Class<okhttp3.internal.platform.android.StandardAndroidSocketAdapter>;
					public isSupported(): boolean;
					public matchesSocket(param0: javax.net.ssl.SSLSocket): boolean;
					public constructor(sslSocketClass: java.lang.Class<any>, sslSocketFactoryClass: java.lang.Class<any>, paramClass: java.lang.Class<any>);
					public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<any>): void;
					public getSelectedProtocol(sslSocket: javax.net.ssl.SSLSocket): string;
					public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
					public matchesSocket(sslSocket: javax.net.ssl.SSLSocket): boolean;
					public configureTlsExtensions(sslSocket: javax.net.ssl.SSLSocket, hostname: string, protocols: java.util.List<any>): void;
					public constructor(sslSocketClass: java.lang.Class<any>);
					public trustManager(sslSocketFactory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
					public matchesSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): boolean;
				}
				export module StandardAndroidSocketAdapter {
					export class Companion extends java.lang.Object {
						public static class: java.lang.Class<okhttp3.internal.platform.android.StandardAndroidSocketAdapter.Companion>;
						public buildIfSupported(packageName: string): okhttp3.internal.platform.android.SocketAdapter;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module proxy {
			export class NullProxySelector extends java.net.ProxySelector {
				public static class: java.lang.Class<okhttp3.internal.proxy.NullProxySelector>;
				public static INSTANCE: okhttp3.internal.proxy.NullProxySelector;
				public select(param0: java.net.URI): java.util.List<java.net.Proxy>;
				public connectFailed(uri: java.net.URI, sa: java.net.SocketAddress, ioe: java.io.IOException): void;
				public connectFailed(param0: java.net.URI, param1: java.net.SocketAddress, param2: java.io.IOException): void;
				public select(uri: java.net.URI): java.util.List<java.net.Proxy>;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module publicsuffix {
			export class PublicSuffixDatabase extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.publicsuffix.PublicSuffixDatabase>;
				public static PUBLIC_SUFFIX_RESOURCE: string;
				public getEffectiveTldPlusOne(domain: string): string;
				public setListBytes(publicSuffixListBytes: number[], publicSuffixExceptionListBytes: number[]): void;
				public constructor();
			}
			export module PublicSuffixDatabase {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.publicsuffix.PublicSuffixDatabase.Companion>;
					public get(): okhttp3.internal.publicsuffix.PublicSuffixDatabase;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class BasicCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
				public static class: java.lang.Class<okhttp3.internal.tls.BasicCertificateChainCleaner>;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public clean(chain: java.util.List<any>, hostname: string): java.util.List<java.security.cert.Certificate>;
				public constructor(trustRootIndex: okhttp3.internal.tls.TrustRootIndex);
				public constructor();
				public clean(param0: java.util.List<any>, param1: string): java.util.List<java.security.cert.Certificate>;
			}
			export module BasicCertificateChainCleaner {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.tls.BasicCertificateChainCleaner.Companion>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class BasicTrustRootIndex extends java.lang.Object implements okhttp3.internal.tls.TrustRootIndex {
				public static class: java.lang.Class<okhttp3.internal.tls.BasicTrustRootIndex>;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public findByIssuerAndSignature(cert: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
				public constructor(...caCerts: java.security.cert.X509Certificate[]);
				public hashCode(): number;
				public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export abstract class CertificateChainCleaner extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.tls.CertificateChainCleaner>;
				public constructor();
				public clean(param0: java.util.List<any>, param1: string): java.util.List<java.security.cert.Certificate>;
			}
			export module CertificateChainCleaner {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.tls.CertificateChainCleaner.Companion>;
					public get(trustManager: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
					public get(...caCerts: java.security.cert.X509Certificate[]): okhttp3.internal.tls.CertificateChainCleaner;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class OkHostnameVerifier extends java.lang.Object implements javax.net.ssl.HostnameVerifier {
				public static class: java.lang.Class<okhttp3.internal.tls.OkHostnameVerifier>;
				public static INSTANCE: okhttp3.internal.tls.OkHostnameVerifier;
				public verify(param0: string, param1: javax.net.ssl.SSLSession): boolean;
				public allSubjectAltNames(certificate: java.security.cert.X509Certificate): java.util.List<string>;
				public verify(host: string, certificate: java.security.cert.X509Certificate): boolean;
				public verify(host: string, session: javax.net.ssl.SSLSession): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class TrustRootIndex extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.tls.TrustRootIndex>;
				/**
				 * Constructs a new instance of the okhttp3.internal.tls.TrustRootIndex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
				});
				public constructor();
				public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class MessageDeflater extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.ws.MessageDeflater>;
				public close(): void;
				public constructor(noContextTakeover: boolean);
				public deflate(buffer: okio.Buffer): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class MessageInflater extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.ws.MessageInflater>;
				public close(): void;
				public constructor(noContextTakeover: boolean);
				public inflate(buffer: okio.Buffer): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class RealWebSocket extends java.lang.Object implements okhttp3.WebSocket, okhttp3.internal.ws.WebSocketReader.FrameCallback {
				public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket>;
				public static DEFAULT_MINIMUM_DEFLATE_SIZE: number;
				public constructor(taskRunner: okhttp3.internal.concurrent.TaskRunner, originalRequest: okhttp3.Request, listener: okhttp3.WebSocketListener, random: java.util.Random, pingIntervalMillis: number, param5: okhttp3.internal.ws.WebSocketExtensions, extensions: number);
				public initReaderAndWriter(name: string, streams: okhttp3.internal.ws.RealWebSocket.Streams): void;
				public request(): okhttp3.Request;
				public send(param0: string): boolean;
				public send(bytes: okio.ByteString): boolean;
				public onReadPong(param0: okio.ByteString): void;
				public onReadMessage(text: string): void;
				public onReadClose(code: number, reason: string): void;
				public onReadPong(payload: okio.ByteString): void;
				public onReadPing(param0: okio.ByteString): void;
				public awaitTermination(timeout: number, param1: java.util.concurrent.TimeUnit): void;
				public loopReader(): void;
				public receivedPongCount(): number;
				public send(param0: okio.ByteString): boolean;
				public close(code: number, reason: string): boolean;
				public onReadMessage(param0: okio.ByteString): void;
				public onReadPing(payload: okio.ByteString): void;
				public cancel(): void;
				public onReadClose(param0: number, param1: string): void;
				public processNextFrame(): boolean;
				public onReadMessage(param0: string): void;
				public checkUpgradeSuccess$okhttp(response: okhttp3.Response, exchange: okhttp3.internal.connection.Exchange): void;
				public receivedPingCount(): number;
				public onReadMessage(bytes: okio.ByteString): void;
				public writeOneFrame$okhttp(): boolean;
				public connect(client: okhttp3.OkHttpClient): void;
				public queueSize(): number;
				public close(param0: number, param1: string): boolean;
				public tearDown(): void;
				public writePingFrame$okhttp(): void;
				public close(code: number, reason: string, cancelAfterCloseMillis: number): boolean;
				public getListener$okhttp(): okhttp3.WebSocketListener;
				public pong(payload: okio.ByteString): boolean;
				public sentPingCount(): number;
				public send(text: string): boolean;
				public failWebSocket(e: java.lang.Exception, response: okhttp3.Response): void;
			}
			export module RealWebSocket {
				export class Close extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Close>;
					public constructor(code: number, reason: okio.ByteString, cancelAfterCloseMillis: number);
					public getCancelAfterCloseMillis(): number;
					public getReason(): okio.ByteString;
					public getCode(): number;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Companion>;
				}
				export class Message extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Message>;
					public getData(): okio.ByteString;
					public constructor(formatOpcode: number, data: okio.ByteString);
					public getFormatOpcode(): number;
				}
				export abstract class Streams extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Streams>;
					public getSink(): okio.BufferedSink;
					public getClient(): boolean;
					public close(): void;
					public constructor(client: boolean, source: okio.BufferedSource, sink: okio.BufferedSink);
					public getSource(): okio.BufferedSource;
				}
				export class WriterTask extends okhttp3.internal.concurrent.Task {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.WriterTask>;
					public runOnce(): number;
					public constructor(this$0: okhttp3.internal.ws.RealWebSocket);
					public constructor(name: string, cancelable: boolean);
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketExtensions extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketExtensions>;
				public perMessageDeflate: boolean;
				public clientMaxWindowBits: java.lang.Integer;
				public clientNoContextTakeover: boolean;
				public serverMaxWindowBits: java.lang.Integer;
				public serverNoContextTakeover: boolean;
				public unknownValues: boolean;
				public copy(perMessageDeflate: boolean, clientMaxWindowBits: java.lang.Integer, clientNoContextTakeover: boolean, serverMaxWindowBits: java.lang.Integer, serverNoContextTakeover: boolean, unknownValues: boolean): okhttp3.internal.ws.WebSocketExtensions;
				public component1(): boolean;
				public component5(): boolean;
				public toString(): string;
				public component3(): boolean;
				public constructor();
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public constructor(perMessageDeflate: boolean, clientMaxWindowBits: java.lang.Integer, clientNoContextTakeover: boolean, serverMaxWindowBits: java.lang.Integer, serverNoContextTakeover: boolean, unknownValues: boolean);
				public noContextTakeover(clientOriginated: boolean): boolean;
				public hashCode(): number;
				public component6(): boolean;
				public component2(): java.lang.Integer;
				public component4(): java.lang.Integer;
			}
			export module WebSocketExtensions {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.WebSocketExtensions.Companion>;
					public parse(responseHeaders: okhttp3.Headers): okhttp3.internal.ws.WebSocketExtensions;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketProtocol extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketProtocol>;
				public static INSTANCE: okhttp3.internal.ws.WebSocketProtocol;
				public static ACCEPT_MAGIC: string;
				public static B0_FLAG_FIN: number;
				public static B0_FLAG_RSV1: number;
				public static B0_FLAG_RSV2: number;
				public static B0_FLAG_RSV3: number;
				public static B0_MASK_OPCODE: number;
				public static OPCODE_FLAG_CONTROL: number;
				public static B1_FLAG_MASK: number;
				public static B1_MASK_LENGTH: number;
				public static OPCODE_CONTINUATION: number;
				public static OPCODE_TEXT: number;
				public static OPCODE_BINARY: number;
				public static OPCODE_CONTROL_CLOSE: number;
				public static OPCODE_CONTROL_PING: number;
				public static OPCODE_CONTROL_PONG: number;
				public static PAYLOAD_BYTE_MAX: number;
				public static CLOSE_MESSAGE_MAX: number;
				public static PAYLOAD_SHORT: number;
				public static PAYLOAD_SHORT_MAX: number;
				public static PAYLOAD_LONG: number;
				public static CLOSE_CLIENT_GOING_AWAY: number;
				public static CLOSE_NO_STATUS_CODE: number;
				public validateCloseCode(code: number): void;
				public closeCodeExceptionMessage(code: number): string;
				public acceptHeader(key: string): string;
				public toggleMask(cursor: okio.Buffer.UnsafeCursor, key: number[]): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketReader extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader>;
				public processNextFrame(): void;
				public close(): void;
				public constructor(isClient: boolean, source: okio.BufferedSource, frameCallback: okhttp3.internal.ws.WebSocketReader.FrameCallback, perMessageDeflate: boolean, noContextTakeover: boolean);
				public getSource(): okio.BufferedSource;
			}
			export module WebSocketReader {
				export class FrameCallback extends java.lang.Object {
					public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader.FrameCallback>;
					/**
					 * Constructs a new instance of the okhttp3.internal.ws.WebSocketReader$FrameCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReadMessage(param0: string): void;
						onReadMessage(param0: okio.ByteString): void;
						onReadPing(param0: okio.ByteString): void;
						onReadPong(param0: okio.ByteString): void;
						onReadClose(param0: number, param1: string): void;
					});
					public constructor();
					public onReadClose(param0: number, param1: string): void;
					public onReadMessage(param0: string): void;
					public onReadMessage(param0: okio.ByteString): void;
					public onReadPing(param0: okio.ByteString): void;
					public onReadPong(param0: okio.ByteString): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketWriter extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketWriter>;
				public close(): void;
				public writeClose(code: number, reason: okio.ByteString): void;
				public writePing(payload: okio.ByteString): void;
				public constructor(isClient: boolean, sink: okio.BufferedSink, random: java.util.Random, perMessageDeflate: boolean, noContextTakeover: boolean, minimumDeflateSize: number);
				public getRandom(): java.util.Random;
				public getSink(): okio.BufferedSink;
				public writePong(payload: okio.ByteString): void;
				public writeMessageFrame(formatOpcode: number, data: okio.ByteString): void;
			}
		}
	}
}

//Generics information:

