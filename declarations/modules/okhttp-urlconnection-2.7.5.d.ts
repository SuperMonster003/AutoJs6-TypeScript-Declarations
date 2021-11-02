/// <reference path="../android.d.ts" />

declare module com {
	export module android {
		export module okhttp {
			export class OkUrlFactory extends java.lang.Object implements java.net.URLStreamHandlerFactory, java.lang.Cloneable {
				public static class: java.lang.Class<com.android.okhttp.OkUrlFactory>;
				public open(param0: java.net.URL): java.net.HttpURLConnection;
				public createURLStreamHandler(param0: string): java.net.URLStreamHandler;
				public constructor(param0: com.android.okhttp.OkHttpClient);
				public clone(): any;
				public clone(): com.android.okhttp.OkUrlFactory;
				public client(): com.android.okhttp.OkHttpClient;
			}
		}
	}
}

declare module com {
	export module android {
		export module okhttp {
			export module internal {
				export module huc {
					export abstract class DelegatingHttpsURLConnection extends javax.net.ssl.HttpsURLConnection {
						public static class: java.lang.Class<com.android.okhttp.internal.huc.DelegatingHttpsURLConnection>;
						public getContentLength(): number;
						public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
						public setRequestMethod(param0: string): void;
						public getRequestMethod(): string;
						public getContent(): any;
						public getContentEncoding(): string;
						public setDefaultUseCaches(param0: boolean): void;
						public getLocalCertificates(): java.security.cert.Certificate[];
						public usingProxy(): boolean;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public setSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
						public getHeaderFieldKey(param0: number): string;
						public getServerCertificates(): java.security.cert.Certificate[];
						public getHeaderField(param0: number): string;
						public getContent(param0: java.lang.Class[]): any;
						public setConnectTimeout(param0: number): void;
						public getDate(): number;
						public setInstanceFollowRedirects(param0: boolean): void;
						public setChunkedStreamingMode(param0: number): void;
						public getResponseMessage(): string;
						public addRequestProperty(param0: string, param1: string): void;
						public getHeaderField(param0: string): string;
						public connect(): void;
						public getRequestProperty(param0: string): string;
						public getConnectTimeout(): number;
						public toString(): string;
						public getPermission(): java.security.Permission;
						public getIfModifiedSince(): number;
						public setUseCaches(param0: boolean): void;
						public getPeerPrincipal(): java.security.Principal;
						public getDefaultUseCaches(): boolean;
						public getDoOutput(): boolean;
						public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
						public setAllowUserInteraction(param0: boolean): void;
						public setReadTimeout(param0: number): void;
						public getInstanceFollowRedirects(): boolean;
						public getHeaderFieldInt(param0: string, param1: number): number;
						public getResponseCode(): number;
						public getCipherSuite(): string;
						public getUseCaches(): boolean;
						public getHeaderFieldDate(param0: string, param1: number): number;
						public getLastModified(): number;
						public setFixedLengthStreamingMode(param0: number): void;
						public setDoOutput(param0: boolean): void;
						public getErrorStream(): java.io.InputStream;
						public getURL(): java.net.URL;
						public setDoInput(param0: boolean): void;
						public setIfModifiedSince(param0: number): void;
						public setRequestProperty(param0: string, param1: string): void;
						public getLocalPrincipal(): java.security.Principal;
						public handshake(): com.android.okhttp.Handshake;
						public getExpiration(): number;
						public constructor(param0: java.net.HttpURLConnection);
						public getDoInput(): boolean;
						public getInputStream(): java.io.InputStream;
						public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
						public constructor(param0: java.net.URL);
						public getContentType(): string;
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public getAllowUserInteraction(): boolean;
						public getReadTimeout(): number;
						public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module okhttp {
			export module internal {
				export module huc {
					export class HttpURLConnectionImpl extends java.net.HttpURLConnection {
						public static class: java.lang.Class<com.android.okhttp.internal.huc.HttpURLConnectionImpl>;
						public httpEngineFailure: java.io.IOException;
						public httpEngine: com.android.okhttp.internal.http.HttpEngine;
						public getInstanceFollowRedirects(): boolean;
						public getResponseCode(): number;
						public setRequestMethod(param0: string): void;
						public setFixedLengthStreamingMode(param0: number): void;
						public usingProxy(): boolean;
						public disconnect(): void;
						public getOutputStream(): java.io.OutputStream;
						public getHeaderFieldKey(param0: number): string;
						public getErrorStream(): java.io.InputStream;
						public getHeaderField(param0: number): string;
						public setConnectTimeout(param0: number): void;
						public setIfModifiedSince(param0: number): void;
						public setRequestProperty(param0: string, param1: string): void;
						public setInstanceFollowRedirects(param0: boolean): void;
						public getResponseMessage(): string;
						public addRequestProperty(param0: string, param1: string): void;
						public getHeaderField(param0: string): string;
						public connect(): void;
						public getInputStream(): java.io.InputStream;
						public getRequestProperty(param0: string): string;
						public getConnectTimeout(): number;
						public getPermission(): java.security.Permission;
						public constructor(param0: java.net.URL);
						public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
						public constructor(param0: java.net.URL, param1: com.android.okhttp.OkHttpClient);
						public getReadTimeout(): number;
						public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
						public setReadTimeout(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module android {
		export module okhttp {
			export module internal {
				export module huc {
					export class HttpsURLConnectionImpl extends com.android.okhttp.internal.huc.DelegatingHttpsURLConnection {
						public static class: java.lang.Class<com.android.okhttp.internal.huc.HttpsURLConnectionImpl>;
						public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
						public getHeaderFieldLong(param0: string, param1: number): number;
						public constructor(param0: java.net.URL);
						public handshake(): com.android.okhttp.Handshake;
						public setSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
						public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
						public constructor(param0: java.net.URL, param1: com.android.okhttp.OkHttpClient);
						public constructor(param0: java.net.HttpURLConnection);
						public constructor(param0: com.android.okhttp.internal.huc.HttpURLConnectionImpl);
						public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
						public getContentLengthLong(): number;
						public setFixedLengthStreamingMode(param0: number): void;
					}
				}
			}
		}
	}
}