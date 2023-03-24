declare module org {
	export module kohsuke {
		export module github {
			export module extras {
				export class HttpClientGitHubConnector extends java.lang.Object implements org.kohsuke.github.connector.GitHubConnector {
					public static class: java.lang.Class<org.kohsuke.github.extras.HttpClientGitHubConnector>;
					public send(connectorRequest: org.kohsuke.github.connector.GitHubConnectorRequest): org.kohsuke.github.connector.GitHubConnectorResponse;
					public send(param0: org.kohsuke.github.connector.GitHubConnectorRequest): org.kohsuke.github.connector.GitHubConnectorResponse;
					public constructor(client: java.net.http.HttpClient);
					public constructor();
				}
				export module HttpClientGitHubConnector {
					export class HttpClientGitHubConnectorResponse extends org.kohsuke.github.connector.GitHubConnectorResponse.ByteArrayResponse {
						public static class: java.lang.Class<org.kohsuke.github.extras.HttpClientGitHubConnector.HttpClientGitHubConnectorResponse>;
						public constructor(request: org.kohsuke.github.connector.GitHubConnectorRequest, response: java.net.http.HttpResponse<java.io.InputStream>);
						public rawBodyStream(): java.io.InputStream;
						public constructor(request: org.kohsuke.github.connector.GitHubConnectorRequest, statusCode: number, headers: java.util.Map<string,java.util.List<string>>);
						public close(): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class AbstractBuilder<R, S>  extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.AbstractBuilder<any,any>>;
				public requester: org.kohsuke.github.Requester;
				public updateInPlace: boolean;
				public continueOrDone(): any;
				public with(name: string, value: any): any;
				public done(): any;
				public constructor(finalReturnType: java.lang.Class<any>, intermediateReturnType: java.lang.Class<any>, root: org.kohsuke.github.GitHub, baseInstance: any);
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class AbuseLimitHandler extends org.kohsuke.github.GitHubAbuseLimitHandler {
				public static class: java.lang.Class<org.kohsuke.github.AbuseLimitHandler>;
				public static WAIT: org.kohsuke.github.AbuseLimitHandler;
				public static FAIL: org.kohsuke.github.AbuseLimitHandler;
				public onError(connectorResponse: org.kohsuke.github.connector.GitHubConnectorResponse): void;
				public onError(param0: org.kohsuke.github.connector.GitHubConnectorResponse): void;
				/** @deprecated */
				public onError(param0: java.io.IOException, param1: java.net.HttpURLConnection): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class BetaApi extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.kohsuke.github.BetaApi>;
				/**
				 * Constructs a new instance of the org.kohsuke.github.BetaApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class EnforcementLevel {
				public static class: java.lang.Class<org.kohsuke.github.EnforcementLevel>;
				public static OFF: org.kohsuke.github.EnforcementLevel;
				public static NON_ADMINS: org.kohsuke.github.EnforcementLevel;
				public static EVERYONE: org.kohsuke.github.EnforcementLevel;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): org.kohsuke.github.EnforcementLevel;
				public toString(): string;
				public static values(): org.kohsuke.github.EnforcementLevel[];
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHApp extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHApp>;
				public getExternalUrl(): string;
				/** @deprecated */
				public setEvents(events: java.util.List<org.kohsuke.github.GHEvent>): void;
				public getHtmlUrl(): java.net.URL;
				public getInstallationByUser(name: string): org.kohsuke.github.GHAppInstallation;
				/** @deprecated */
				public setDescription(description: string): void;
				/** @deprecated */
				public setOwner(owner: org.kohsuke.github.GHUser): void;
				public getName(): string;
				public getDescription(): string;
				/** @deprecated */
				public setName(name: string): void;
				/** @deprecated */
				public setPermissions(permissions: java.util.Map<string,string>): void;
				public constructor();
				/** @deprecated */
				public setExternalUrl(externalUrl: string): void;
				public getOwner(): org.kohsuke.github.GHUser;
				/** @deprecated */
				public setInstallationsCount(installationsCount: number): void;
				public getInstallationsCount(): number;
				public getPermissions(): java.util.Map<string,string>;
				public listInstallations(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHAppInstallation>;
				public getInstallationByOrganization(name: string): org.kohsuke.github.GHAppInstallation;
				public getInstallationById(id: number): org.kohsuke.github.GHAppInstallation;
				public getInstallationByRepository(ownerName: string, repositoryName: string): org.kohsuke.github.GHAppInstallation;
				public getEvents(): java.util.List<org.kohsuke.github.GHEvent>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHAppCreateTokenBuilder extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHAppCreateTokenBuilder>;
				public builder: org.kohsuke.github.Requester;
				public permissions(permissions: java.util.Map<string,org.kohsuke.github.GHPermissionType>): org.kohsuke.github.GHAppCreateTokenBuilder;
				public create(): org.kohsuke.github.GHAppInstallationToken;
				public repositoryIds(repositoryIds: java.util.List<java.lang.Long>): org.kohsuke.github.GHAppCreateTokenBuilder;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHAppInstallation extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHAppInstallation>;
				/** @deprecated */
				public setEvents(events: java.util.List<org.kohsuke.github.GHEvent>): void;
				public deleteInstallation(): void;
				/** @deprecated */
				public createToken(permissions: java.util.Map<string,org.kohsuke.github.GHPermissionType>): org.kohsuke.github.GHAppCreateTokenBuilder;
				/** @deprecated */
				public setRepositoriesUrl(repositoriesUrl: string): void;
				public constructor();
				/** @deprecated */
				public setTargetId(targetId: number): void;
				public getPermissions(): java.util.Map<string,org.kohsuke.github.GHPermissionType>;
				/** @deprecated */
				public setRepositorySelection(repositorySelection: org.kohsuke.github.GHRepositorySelection): void;
				/** @deprecated */
				public setPermissions(permissions: java.util.Map<string,org.kohsuke.github.GHPermissionType>): void;
				public getAppId(): number;
				/** @deprecated */
				public setTargetType(targetType: org.kohsuke.github.GHTargetType): void;
				public getHtmlUrl(): java.net.URL;
				public listRepositories(): org.kohsuke.github.PagedSearchIterable<org.kohsuke.github.GHRepository>;
				public getSingleFileName(): string;
				/** @deprecated */
				public setSingleFileName(singleFileName: string): void;
				/** @deprecated */
				public setRoot(root: org.kohsuke.github.GitHub): void;
				public getTargetType(): org.kohsuke.github.GHTargetType;
				public getRepositoriesUrl(): string;
				/** @deprecated */
				public setAccount(account: org.kohsuke.github.GHUser): void;
				public getAccessTokenUrl(): string;
				public getTargetId(): number;
				public getRepositorySelection(): org.kohsuke.github.GHRepositorySelection;
				public getAccount(): org.kohsuke.github.GHUser;
				/** @deprecated */
				public setAccessTokenUrl(accessTokenUrl: string): void;
				/** @deprecated */
				public setAppId(appId: number): void;
				public getEvents(): java.util.List<org.kohsuke.github.GHEvent>;
				public createToken(): org.kohsuke.github.GHAppCreateTokenBuilder;
			}
			export module GHAppInstallation {
				export class GHAppInstallationRepositoryResult extends org.kohsuke.github.SearchResult<org.kohsuke.github.GHRepository> {
					public static class: java.lang.Class<org.kohsuke.github.GHAppInstallation.GHAppInstallationRepositoryResult>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHAppInstallationToken extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHAppInstallationToken>;
				public expires_at: string;
				public getRepositories(): java.util.List<org.kohsuke.github.GHRepository>;
				public getRepositorySelection(): org.kohsuke.github.GHRepositorySelection;
				public getPermissions(): java.util.Map<string,string>;
				/** @deprecated */
				public setRoot(root: org.kohsuke.github.GitHub): void;
				public getExpiresAt(): java.util.Date;
				/** @deprecated */
				public setRepositories(repositories: java.util.List<org.kohsuke.github.GHRepository>): void;
				/** @deprecated */
				public setRepositorySelection(repositorySelection: org.kohsuke.github.GHRepositorySelection): void;
				/** @deprecated */
				public setToken(token: string): void;
				/** @deprecated */
				public setPermissions(permissions: java.util.Map<string,string>): void;
				public constructor();
				public getToken(): string;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHAppInstallationsIterable extends org.kohsuke.github.PagedIterable<org.kohsuke.github.GHAppInstallation> {
				public static class: java.lang.Class<org.kohsuke.github.GHAppInstallationsIterable>;
				public static APP_INSTALLATIONS_URL: string;
				public constructor(root: org.kohsuke.github.GitHub);
				public adapt(base: java.util.Iterator<org.kohsuke.github.GHAppInstallationsPage>): java.util.Iterator<org.kohsuke.github.GHAppInstallation[]>;
				public iterator(): org.kohsuke.github.PagedIterator<any>;
				public spliterator(): java.util.Spliterator<any>;
				public _iterator(param0: number): org.kohsuke.github.PagedIterator<any>;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public _iterator(pageSize: number): org.kohsuke.github.PagedIterator<org.kohsuke.github.GHAppInstallation>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHAppInstallationsPage extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHAppInstallationsPage>;
				public getTotalCount(): number;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHArtifact extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHArtifact>;
				/** @deprecated */
				public getHtmlUrl(): java.net.URL;
				public isExpired(): boolean;
				public delete(): void;
				public getArchiveDownloadUrl(): java.net.URL;
				public getHtmlUrl(): java.net.URL;
				public getSizeInBytes(): number;
				public getExpiresAt(): java.util.Date;
				public getName(): string;
				public getRepository(): org.kohsuke.github.GHRepository;
				public download(streamFunction: org.kohsuke.github.function.InputStreamFunction<any>): any;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHArtifactsIterable extends org.kohsuke.github.PagedIterable<org.kohsuke.github.GHArtifact> {
				public static class: java.lang.Class<org.kohsuke.github.GHArtifactsIterable>;
				public iterator(): org.kohsuke.github.PagedIterator<any>;
				public spliterator(): java.util.Spliterator<any>;
				public _iterator(param0: number): org.kohsuke.github.PagedIterator<any>;
				public iterator(): java.util.Iterator<any>;
				public _iterator(pageSize: number): org.kohsuke.github.PagedIterator<org.kohsuke.github.GHArtifact>;
				public forEach(action: any /* any*/): void;
				public adapt(base: java.util.Iterator<org.kohsuke.github.GHArtifactsPage>): java.util.Iterator<org.kohsuke.github.GHArtifact[]>;
				public constructor(owner: org.kohsuke.github.GHRepository, requestBuilder: org.kohsuke.github.GitHubRequest.Builder<any>);
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHArtifactsPage extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHArtifactsPage>;
				public getTotalCount(): number;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHAsset extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHAsset>;
				public getContentType(): string;
				public getDownloadCount(): number;
				/** @deprecated */
				public getHtmlUrl(): java.net.URL;
				public getLabel(): string;
				public getHtmlUrl(): java.net.URL;
				public getName(): string;
				public getBrowserDownloadUrl(): string;
				public static wrap(assets: org.kohsuke.github.GHAsset[], release: org.kohsuke.github.GHRelease): org.kohsuke.github.GHAsset[];
				public constructor();
				public getState(): string;
				public delete(): void;
				public getSize(): number;
				public getOwner(): org.kohsuke.github.GHRepository;
				public setLabel(label: string): void;
				public setContentType(contentType: string): void;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHAuthorization extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHAuthorization>;
				public static USER: string;
				public static USER_EMAIL: string;
				public static USER_FOLLOW: string;
				public static PUBLIC_REPO: string;
				public static REPO: string;
				public static REPO_STATUS: string;
				public static DELETE_REPO: string;
				public static NOTIFICATIONS: string;
				public static GIST: string;
				public static READ_HOOK: string;
				public static WRITE_HOOK: string;
				public static AMIN_HOOK: string;
				public static READ_ORG: string;
				public static WRITE_ORG: string;
				public static ADMIN_ORG: string;
				public static READ_KEY: string;
				public static WRITE_KEY: string;
				public static ADMIN_KEY: string;
				public getNoteUrl(): java.net.URL;
				public getFingerprint(): string;
				public getTokenLastEight(): string;
				/** @deprecated */
				public getHtmlUrl(): java.net.URL;
				public getHtmlUrl(): java.net.URL;
				public getHashedToken(): string;
				/** @deprecated */
				public getApiURL(): java.net.URL;
				public constructor();
				public getScopes(): java.util.List<string>;
				public getToken(): string;
				public getAppUrl(): java.net.URL;
				public getAppName(): string;
				public getNote(): string;
			}
			export module GHAuthorization {
				export class App extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHAuthorization.App>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHBlob extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHBlob>;
				public getEncoding(): string;
				public getSize(): number;
				public getUrl(): java.net.URL;
				public getContent(): string;
				public getSha(): string;
				public read(): java.io.InputStream;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHBlobBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHBlobBuilder>;
				public binaryContent(content: number[]): org.kohsuke.github.GHBlobBuilder;
				public create(): org.kohsuke.github.GHBlob;
				public textContent(content: string): org.kohsuke.github.GHBlobBuilder;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHBranch extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHBranch>;
				/** @deprecated */
				public enableProtection(level: org.kohsuke.github.EnforcementLevel, contexts: java.util.Collection<string>): void;
				public merge(headBranch: org.kohsuke.github.GHBranch, commitMessage: string): org.kohsuke.github.GHCommit;
				public getSHA1(): string;
				public isProtected(): boolean;
				public getProtection(): org.kohsuke.github.GHBranchProtection;
				public enableProtection(): org.kohsuke.github.GHBranchProtectionBuilder;
				public getOwner(): org.kohsuke.github.GHRepository;
				public getProtectionUrl(): java.net.URL;
				public getName(): string;
				public toString(): string;
				public merge(head: string, commitMessage: string): org.kohsuke.github.GHCommit;
				public disableProtection(): void;
			}
			export module GHBranch {
				export class Commit extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHBranch.Commit>;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHBranchProtection extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHBranchProtection>;
				public getRequiredSignatures(): boolean;
				public enabledSignedCommits(): void;
				public getRequiredReviews(): org.kohsuke.github.GHBranchProtection.RequiredReviews;
				public getEnforceAdmins(): org.kohsuke.github.GHBranchProtection.EnforceAdmins;
				public getRestrictions(): org.kohsuke.github.GHBranchProtection.Restrictions;
				public disableSignedCommits(): void;
				public getUrl(): string;
				public getRequiredStatusChecks(): org.kohsuke.github.GHBranchProtection.RequiredStatusChecks;
				public constructor();
			}
			export module GHBranchProtection {
				export class EnforceAdmins extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHBranchProtection.EnforceAdmins>;
					public getUrl(): string;
					public constructor();
					public isEnabled(): boolean;
				}
				export class RequiredReviews extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHBranchProtection.RequiredReviews>;
					public isRequireCodeOwnerReviews(): boolean;
					public getUrl(): string;
					public constructor();
					public getDismissalRestrictions(): org.kohsuke.github.GHBranchProtection.Restrictions;
					public getRequiredReviewers(): number;
					public isDismissStaleReviews(): boolean;
				}
				export class RequiredSignatures extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHBranchProtection.RequiredSignatures>;
					public getUrl(): string;
					public isEnabled(): boolean;
				}
				export class RequiredStatusChecks extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHBranchProtection.RequiredStatusChecks>;
					public getUrl(): string;
					public constructor();
					public getContexts(): java.util.Collection<string>;
					public isRequiresBranchUpToDate(): boolean;
				}
				export class Restrictions extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHBranchProtection.Restrictions>;
					public getUrl(): string;
					public constructor();
					public getUsersUrl(): string;
					public getUsers(): java.util.Collection<org.kohsuke.github.GHUser>;
					public getTeamsUrl(): string;
					public getTeams(): java.util.Collection<org.kohsuke.github.GHTeam>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHBranchProtectionBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHBranchProtectionBuilder>;
				public restrictReviewDismissals(): org.kohsuke.github.GHBranchProtectionBuilder;
				public includeAdmins(): org.kohsuke.github.GHBranchProtectionBuilder;
				public requireBranchIsUpToDate(): org.kohsuke.github.GHBranchProtectionBuilder;
				public restrictPushAccess(): org.kohsuke.github.GHBranchProtectionBuilder;
				public requireCodeOwnReviews(): org.kohsuke.github.GHBranchProtectionBuilder;
				public requireCodeOwnReviews(v: boolean): org.kohsuke.github.GHBranchProtectionBuilder;
				public userPushAccess(users: java.util.Collection<org.kohsuke.github.GHUser>): org.kohsuke.github.GHBranchProtectionBuilder;
				public teamReviewDismissals(teams: java.util.Collection<org.kohsuke.github.GHTeam>): org.kohsuke.github.GHBranchProtectionBuilder;
				public userReviewDismissals(users: java.util.Collection<org.kohsuke.github.GHUser>): org.kohsuke.github.GHBranchProtectionBuilder;
				public requireReviews(): org.kohsuke.github.GHBranchProtectionBuilder;
				public teamReviewDismissals(...teams: org.kohsuke.github.GHTeam[]): org.kohsuke.github.GHBranchProtectionBuilder;
				public enable(): org.kohsuke.github.GHBranchProtection;
				public teamPushAccess(...teams: org.kohsuke.github.GHTeam[]): org.kohsuke.github.GHBranchProtectionBuilder;
				public teamPushAccess(teams: java.util.Collection<org.kohsuke.github.GHTeam>): org.kohsuke.github.GHBranchProtectionBuilder;
				public dismissStaleReviews(v: boolean): org.kohsuke.github.GHBranchProtectionBuilder;
				public requireBranchIsUpToDate(v: boolean): org.kohsuke.github.GHBranchProtectionBuilder;
				public userReviewDismissals(...users: org.kohsuke.github.GHUser[]): org.kohsuke.github.GHBranchProtectionBuilder;
				public userPushAccess(...users: org.kohsuke.github.GHUser[]): org.kohsuke.github.GHBranchProtectionBuilder;
				public addRequiredChecks(checks: java.util.Collection<string>): org.kohsuke.github.GHBranchProtectionBuilder;
				public dismissStaleReviews(): org.kohsuke.github.GHBranchProtectionBuilder;
				public includeAdmins(v: boolean): org.kohsuke.github.GHBranchProtectionBuilder;
				public requiredReviewers(v: number): org.kohsuke.github.GHBranchProtectionBuilder;
				public addRequiredChecks(...checks: string[]): org.kohsuke.github.GHBranchProtectionBuilder;
			}
			export module GHBranchProtectionBuilder {
				export class Restrictions extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHBranchProtectionBuilder.Restrictions>;
				}
				export class StatusChecks extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHBranchProtectionBuilder.StatusChecks>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCheckRun extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHCheckRun>;
				public getCompletedAt(): java.util.Date;
				public getApp(): org.kohsuke.github.GHApp;
				public getStatus(): org.kohsuke.github.GHCheckRun.Status;
				public getHtmlUrl(): java.net.URL;
				public getName(): string;
				public getNodeId(): string;
				public constructor();
				public getOutput(): org.kohsuke.github.GHCheckRun.Output;
				public getStartedAt(): java.util.Date;
				public getDetailsUrl(): java.net.URL;
				public getExternalId(): string;
				public getHeadSha(): string;
				public getPullRequests(): java.util.List<org.kohsuke.github.GHPullRequest>;
				public getCheckSuite(): org.kohsuke.github.GHCheckSuite;
				public update(): org.kohsuke.github.GHCheckRunBuilder;
				public getConclusion(): org.kohsuke.github.GHCheckRun.Conclusion;
			}
			export module GHCheckRun {
				export class AnnotationLevel {
					public static class: java.lang.Class<org.kohsuke.github.GHCheckRun.AnnotationLevel>;
					public static NOTICE: org.kohsuke.github.GHCheckRun.AnnotationLevel;
					public static WARNING: org.kohsuke.github.GHCheckRun.AnnotationLevel;
					public static FAILURE: org.kohsuke.github.GHCheckRun.AnnotationLevel;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHCheckRun.AnnotationLevel;
					public static values(): org.kohsuke.github.GHCheckRun.AnnotationLevel[];
				}
				export class Conclusion {
					public static class: java.lang.Class<org.kohsuke.github.GHCheckRun.Conclusion>;
					public static ACTION_REQUIRED: org.kohsuke.github.GHCheckRun.Conclusion;
					public static CANCELLED: org.kohsuke.github.GHCheckRun.Conclusion;
					public static FAILURE: org.kohsuke.github.GHCheckRun.Conclusion;
					public static NEUTRAL: org.kohsuke.github.GHCheckRun.Conclusion;
					public static SUCCESS: org.kohsuke.github.GHCheckRun.Conclusion;
					public static SKIPPED: org.kohsuke.github.GHCheckRun.Conclusion;
					public static STALE: org.kohsuke.github.GHCheckRun.Conclusion;
					public static TIMED_OUT: org.kohsuke.github.GHCheckRun.Conclusion;
					public static UNKNOWN: org.kohsuke.github.GHCheckRun.Conclusion;
					public static from(value: string): org.kohsuke.github.GHCheckRun.Conclusion;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.kohsuke.github.GHCheckRun.Conclusion[];
					public static valueOf(name: string): org.kohsuke.github.GHCheckRun.Conclusion;
				}
				export class Output extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCheckRun.Output>;
					public getTitle(): string;
					public getAnnotationsUrl(): java.net.URL;
					public getText(): string;
					public getAnnotationsCount(): number;
					public constructor();
					public getSummary(): string;
				}
				export class Status {
					public static class: java.lang.Class<org.kohsuke.github.GHCheckRun.Status>;
					public static QUEUED: org.kohsuke.github.GHCheckRun.Status;
					public static IN_PROGRESS: org.kohsuke.github.GHCheckRun.Status;
					public static COMPLETED: org.kohsuke.github.GHCheckRun.Status;
					public static UNKNOWN: org.kohsuke.github.GHCheckRun.Status;
					public toString(): string;
					public static values(): org.kohsuke.github.GHCheckRun.Status[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static from(value: string): org.kohsuke.github.GHCheckRun.Status;
					public static valueOf(name: string): org.kohsuke.github.GHCheckRun.Status;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCheckRunBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHCheckRunBuilder>;
				public repo: org.kohsuke.github.GHRepository;
				public requester: org.kohsuke.github.Requester;
				public withConclusion(conclusion: org.kohsuke.github.GHCheckRun.Conclusion): org.kohsuke.github.GHCheckRunBuilder;
				public withDetailsURL(detailsURL: string): org.kohsuke.github.GHCheckRunBuilder;
				public withStatus(status: org.kohsuke.github.GHCheckRun.Status): org.kohsuke.github.GHCheckRunBuilder;
				public add(output: org.kohsuke.github.GHCheckRunBuilder.Output): org.kohsuke.github.GHCheckRunBuilder;
				public withExternalID(externalID: string): org.kohsuke.github.GHCheckRunBuilder;
				public create(): org.kohsuke.github.GHCheckRun;
				public add(action: org.kohsuke.github.GHCheckRunBuilder.Action): org.kohsuke.github.GHCheckRunBuilder;
				public withCompletedAt(completedAt: java.util.Date): org.kohsuke.github.GHCheckRunBuilder;
				public withStartedAt(startedAt: java.util.Date): org.kohsuke.github.GHCheckRunBuilder;
			}
			export module GHCheckRunBuilder {
				export class Action extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCheckRunBuilder.Action>;
					public constructor(label: string, description: string, identifier: string);
				}
				export class Annotation extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCheckRunBuilder.Annotation>;
					public withRawDetails(rawDetails: string): org.kohsuke.github.GHCheckRunBuilder.Annotation;
					public withEndColumn(endColumn: java.lang.Integer): org.kohsuke.github.GHCheckRunBuilder.Annotation;
					public constructor(path: string, startLine: number, endLine: number, annotationLevel: org.kohsuke.github.GHCheckRun.AnnotationLevel, message: string);
					public withStartColumn(startColumn: java.lang.Integer): org.kohsuke.github.GHCheckRunBuilder.Annotation;
					public constructor(path: string, line: number, annotationLevel: org.kohsuke.github.GHCheckRun.AnnotationLevel, message: string);
					public withTitle(title: string): org.kohsuke.github.GHCheckRunBuilder.Annotation;
				}
				export class Image extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCheckRunBuilder.Image>;
					public withCaption(caption: string): org.kohsuke.github.GHCheckRunBuilder.Image;
					public constructor(alt: string, imageURL: string);
				}
				export class Output extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCheckRunBuilder.Output>;
					public constructor(title: string, summary: string);
					public withText(text: string): org.kohsuke.github.GHCheckRunBuilder.Output;
					public add(image: org.kohsuke.github.GHCheckRunBuilder.Image): org.kohsuke.github.GHCheckRunBuilder.Output;
					public add(annotation: org.kohsuke.github.GHCheckRunBuilder.Annotation): org.kohsuke.github.GHCheckRunBuilder.Output;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCheckRunsIterable extends org.kohsuke.github.PagedIterable<org.kohsuke.github.GHCheckRun> {
				public static class: java.lang.Class<org.kohsuke.github.GHCheckRunsIterable>;
				public iterator(): org.kohsuke.github.PagedIterator<any>;
				public adapt(base: java.util.Iterator<org.kohsuke.github.GHCheckRunsPage>): java.util.Iterator<org.kohsuke.github.GHCheckRun[]>;
				public spliterator(): java.util.Spliterator<any>;
				public _iterator(param0: number): org.kohsuke.github.PagedIterator<any>;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public _iterator(pageSize: number): org.kohsuke.github.PagedIterator<org.kohsuke.github.GHCheckRun>;
				public constructor(owner: org.kohsuke.github.GHRepository, request: org.kohsuke.github.GitHubRequest);
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCheckRunsPage extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHCheckRunsPage>;
				public getTotalCount(): number;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCheckSuite extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHCheckSuite>;
				public getStatus(): string;
				public getApp(): org.kohsuke.github.GHApp;
				public getHeadCommit(): org.kohsuke.github.GHCheckSuite.HeadCommit;
				public getHtmlUrl(): java.net.URL;
				public getAfter(): string;
				public getNodeId(): string;
				public constructor();
				public getBefore(): string;
				public getHeadBranch(): string;
				public getConclusion(): string;
				public getHeadSha(): string;
				public getPullRequests(): java.util.List<org.kohsuke.github.GHPullRequest>;
				public getLatestCheckRunsCount(): number;
				public getCheckRunsUrl(): java.net.URL;
			}
			export module GHCheckSuite {
				export class HeadCommit extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCheckSuite.HeadCommit>;
					public getCommitter(): org.kohsuke.github.GitUser;
					public getId(): string;
					public getTimestamp(): java.util.Date;
					public constructor();
					public getAuthor(): org.kohsuke.github.GitUser;
					public getTreeId(): string;
					public getMessage(): string;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCommentAuthorAssociation {
				public static class: java.lang.Class<org.kohsuke.github.GHCommentAuthorAssociation>;
				public static COLLABORATOR: org.kohsuke.github.GHCommentAuthorAssociation;
				public static CONTRIBUTOR: org.kohsuke.github.GHCommentAuthorAssociation;
				public static FIRST_TIMER: org.kohsuke.github.GHCommentAuthorAssociation;
				public static FIRST_TIME_CONTRIBUTOR: org.kohsuke.github.GHCommentAuthorAssociation;
				public static MEMBER: org.kohsuke.github.GHCommentAuthorAssociation;
				public static NONE: org.kohsuke.github.GHCommentAuthorAssociation;
				public static OWNER: org.kohsuke.github.GHCommentAuthorAssociation;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): org.kohsuke.github.GHCommentAuthorAssociation[];
				public static valueOf(name: string): org.kohsuke.github.GHCommentAuthorAssociation;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCommit extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHCommit>;
				public getLastStatus(): org.kohsuke.github.GHCommitStatus;
				public getCommitter(): org.kohsuke.github.GHUser;
				public getCommitDate(): java.util.Date;
				public getUrl(): java.net.URL;
				public getCheckRuns(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHCheckRun>;
				public constructor();
				public getLinesChanged(): number;
				public listStatuses(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHCommitStatus>;
				public getFiles(): java.util.List<org.kohsuke.github.GHCommit.File>;
				public listPullRequests(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHPullRequest>;
				public getTree(): org.kohsuke.github.GHTree;
				public getAuthoredDate(): java.util.Date;
				public createComment(body: string): org.kohsuke.github.GHCommitComment;
				public getHtmlUrl(): java.net.URL;
				public getSHA1(): string;
				public getCommitShortInfo(): org.kohsuke.github.GHCommit.ShortInfo;
				public getLinesAdded(): number;
				public getLinesDeleted(): number;
				public getParentSHA1s(): java.util.List<string>;
				public listBranchesWhereHead(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHBranch>;
				public listComments(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHCommitComment>;
				public getOwner(): org.kohsuke.github.GHRepository;
				public getAuthor(): org.kohsuke.github.GHUser;
				public createComment(body: string, path: string, line: java.lang.Integer, position: java.lang.Integer): org.kohsuke.github.GHCommitComment;
				public getParents(): java.util.List<org.kohsuke.github.GHCommit>;
			}
			export module GHCommit {
				export class File extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCommit.File>;
					public getRawUrl(): java.net.URL;
					public getLinesAdded(): number;
					public getFileName(): string;
					public getSha(): string;
					public constructor();
					public getBlobUrl(): java.net.URL;
					public getPreviousFilename(): string;
					public getPatch(): string;
					public getStatus(): string;
					public getLinesDeleted(): number;
					public getLinesChanged(): number;
				}
				export class GHAuthor extends org.kohsuke.github.GitUser {
					public static class: java.lang.Class<org.kohsuke.github.GHCommit.GHAuthor>;
					public constructor();
					public constructor(user: org.kohsuke.github.GitUser);
				}
				export class Parent extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCommit.Parent>;
					public constructor();
				}
				export class ShortInfo extends org.kohsuke.github.GitCommit {
					public static class: java.lang.Class<org.kohsuke.github.GHCommit.ShortInfo>;
					public constructor();
					public getParentSHA1s(): java.util.List<string>;
					public getCommentCount(): number;
				}
				export class Stats extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCommit.Stats>;
					public constructor();
				}
				export class User extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCommit.User>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCommitBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHCommitBuilder>;
				public message(message: string): org.kohsuke.github.GHCommitBuilder;
				public create(): org.kohsuke.github.GHCommit;
				public parent(parent: string): org.kohsuke.github.GHCommitBuilder;
				public committer(name: string, email: string, date: java.util.Date): org.kohsuke.github.GHCommitBuilder;
				public author(name: string, email: string, date: java.util.Date): org.kohsuke.github.GHCommitBuilder;
				public withSignature(signature: string): org.kohsuke.github.GHCommitBuilder;
				public tree(tree: string): org.kohsuke.github.GHCommitBuilder;
			}
			export module GHCommitBuilder {
				export class UserInfo extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCommitBuilder.UserInfo>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCommitComment extends org.kohsuke.github.GHObject implements org.kohsuke.github.Reactable {
				public static class: java.lang.Class<org.kohsuke.github.GHCommitComment>;
				public getLine(): number;
				public deleteReaction(param0: org.kohsuke.github.GHReaction): void;
				public getHtmlUrl(): java.net.URL;
				public getSHA1(): string;
				public update(body: string): void;
				public deleteReaction(reaction: org.kohsuke.github.GHReaction): void;
				public getUser(): org.kohsuke.github.GHUser;
				public getPath(): string;
				public createReaction(content: org.kohsuke.github.ReactionContent): org.kohsuke.github.GHReaction;
				public constructor();
				public getCommit(): org.kohsuke.github.GHCommit;
				public getBody(): string;
				public listReactions(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHReaction>;
				public delete(): void;
				public getOwner(): org.kohsuke.github.GHRepository;
				public createReaction(param0: org.kohsuke.github.ReactionContent): org.kohsuke.github.GHReaction;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCommitPointer extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHCommitPointer>;
				public getRef(): string;
				public getCommit(): org.kohsuke.github.GHCommit;
				public getLabel(): string;
				public getUser(): org.kohsuke.github.GHUser;
				public getRepository(): org.kohsuke.github.GHRepository;
				public getSha(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCommitQueryBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHCommitQueryBuilder>;
				public pageSize(pageSize: number): org.kohsuke.github.GHCommitQueryBuilder;
				public list(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHCommit>;
				public until(timestamp: number): org.kohsuke.github.GHCommitQueryBuilder;
				public from(ref: string): org.kohsuke.github.GHCommitQueryBuilder;
				public path(path: string): org.kohsuke.github.GHCommitQueryBuilder;
				public since(timestamp: number): org.kohsuke.github.GHCommitQueryBuilder;
				public until(dt: java.util.Date): org.kohsuke.github.GHCommitQueryBuilder;
				public since(dt: java.util.Date): org.kohsuke.github.GHCommitQueryBuilder;
				public author(author: string): org.kohsuke.github.GHCommitQueryBuilder;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCommitSearchBuilder extends org.kohsuke.github.GHSearchBuilder<org.kohsuke.github.GHCommit> {
				public static class: java.lang.Class<org.kohsuke.github.GHCommitSearchBuilder>;
				public merge(merge: boolean): org.kohsuke.github.GHCommitSearchBuilder;
				public is(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public committerEmail(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public hash(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public user(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public q(term: string): org.kohsuke.github.GHQueryBuilder<any>;
				public org(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public committerName(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public committerDate(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public author(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public parent(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public sort(sort: org.kohsuke.github.GHCommitSearchBuilder.Sort): org.kohsuke.github.GHCommitSearchBuilder;
				public order(v: org.kohsuke.github.GHDirection): org.kohsuke.github.GHCommitSearchBuilder;
				public authorEmail(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public repo(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public q(term: string): org.kohsuke.github.GHCommitSearchBuilder;
				public tree(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public committer(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public getApiUrl(): string;
				public authorName(v: string): org.kohsuke.github.GHCommitSearchBuilder;
				public authorDate(v: string): org.kohsuke.github.GHCommitSearchBuilder;
			}
			export module GHCommitSearchBuilder {
				export class CommitSearchResult extends org.kohsuke.github.SearchResult<org.kohsuke.github.GHCommit> {
					public static class: java.lang.Class<org.kohsuke.github.GHCommitSearchBuilder.CommitSearchResult>;
				}
				export class Sort {
					public static class: java.lang.Class<org.kohsuke.github.GHCommitSearchBuilder.Sort>;
					public static AUTHOR_DATE: org.kohsuke.github.GHCommitSearchBuilder.Sort;
					public static COMMITTER_DATE: org.kohsuke.github.GHCommitSearchBuilder.Sort;
					public static valueOf(name: string): org.kohsuke.github.GHCommitSearchBuilder.Sort;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.kohsuke.github.GHCommitSearchBuilder.Sort[];
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCommitState {
				public static class: java.lang.Class<org.kohsuke.github.GHCommitState>;
				public static PENDING: org.kohsuke.github.GHCommitState;
				public static SUCCESS: org.kohsuke.github.GHCommitState;
				public static ERROR: org.kohsuke.github.GHCommitState;
				public static FAILURE: org.kohsuke.github.GHCommitState;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): org.kohsuke.github.GHCommitState;
				public static values(): org.kohsuke.github.GHCommitState[];
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCommitStatus extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHCommitStatus>;
				public getTargetUrl(): string;
				/** @deprecated */
				public getHtmlUrl(): java.net.URL;
				public getCreator(): org.kohsuke.github.GHUser;
				public getHtmlUrl(): java.net.URL;
				public getState(): org.kohsuke.github.GHCommitState;
				public getDescription(): string;
				public constructor();
				public getContext(): string;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCompare extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHCompare>;
				public getPermalinkUrl(): java.net.URL;
				public getDiffUrl(): java.net.URL;
				public getBehindBy(): number;
				public getPatchUrl(): java.net.URL;
				public getHtmlUrl(): java.net.URL;
				public getUrl(): java.net.URL;
				public getMergeBaseCommit(): org.kohsuke.github.GHCompare.Commit;
				public getFiles(): org.kohsuke.github.GHCommit.File[];
				public getTotalCommits(): number;
				public getCommits(): org.kohsuke.github.GHCompare.Commit[];
				public getAheadBy(): number;
				public constructor();
				public getBaseCommit(): org.kohsuke.github.GHCompare.Commit;
				public listCommits(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHCompare.Commit>;
				public getStatus(): org.kohsuke.github.GHCompare.Status;
				/** @deprecated */
				public wrap(owner: org.kohsuke.github.GHRepository): org.kohsuke.github.GHCompare;
			}
			export module GHCompare {
				export class Commit extends org.kohsuke.github.GHCommit {
					public static class: java.lang.Class<org.kohsuke.github.GHCompare.Commit>;
					public constructor();
					public getCommit(): org.kohsuke.github.GHCompare.InnerCommit;
				}
				export class GHCompareCommitsIterable extends org.kohsuke.github.PagedIterable<org.kohsuke.github.GHCompare.Commit> {
					public static class: java.lang.Class<org.kohsuke.github.GHCompare.GHCompareCommitsIterable>;
					public adapt(base: java.util.Iterator<org.kohsuke.github.GHCompare>): java.util.Iterator<org.kohsuke.github.GHCompare.Commit[]>;
					public constructor(this$0: org.kohsuke.github.GHCompare);
					public iterator(): java.util.Iterator<any>;
					public _iterator(param0: number): org.kohsuke.github.PagedIterator<any>;
					public constructor();
					public spliterator(): java.util.Spliterator<any>;
					public _iterator(pageSize: number): org.kohsuke.github.PagedIterator<org.kohsuke.github.GHCompare.Commit>;
					public iterator(): org.kohsuke.github.PagedIterator<any>;
					public forEach(action: any /* any*/): void;
				}
				export class InnerCommit extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCompare.InnerCommit>;
					public getCommitter(): org.kohsuke.github.GitUser;
					public getSha(): string;
					public getUrl(): string;
					public constructor();
					public getAuthor(): org.kohsuke.github.GitUser;
					public getMessage(): string;
					public getTree(): org.kohsuke.github.GHCompare.Tree;
				}
				export class Status {
					public static class: java.lang.Class<org.kohsuke.github.GHCompare.Status>;
					public static behind: org.kohsuke.github.GHCompare.Status;
					public static ahead: org.kohsuke.github.GHCompare.Status;
					public static identical: org.kohsuke.github.GHCompare.Status;
					public static diverged: org.kohsuke.github.GHCompare.Status;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.kohsuke.github.GHCompare.Status[];
					public static valueOf(name: string): org.kohsuke.github.GHCompare.Status;
				}
				export class Tree extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHCompare.Tree>;
					public getSha(): string;
					public getUrl(): string;
					public constructor();
				}
				export class User extends org.kohsuke.github.GitUser {
					public static class: java.lang.Class<org.kohsuke.github.GHCompare.User>;
					public constructor();
					public constructor(user: org.kohsuke.github.GitUser);
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHContent extends org.kohsuke.github.GitHubInteractiveObject implements org.kohsuke.github.Refreshable {
				public static class: java.lang.Class<org.kohsuke.github.GHContent>;
				public getSha(): string;
				public populate(): void;
				public constructor();
				public update(newContentBytes: number[], commitMessage: string): org.kohsuke.github.GHContentUpdateResponse;
				public getSize(): number;
				public listDirectoryContent(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHContent>;
				public delete(message: string): org.kohsuke.github.GHContentUpdateResponse;
				public isDirectory(): boolean;
				public delete(commitMessage: string, branch: string): org.kohsuke.github.GHContentUpdateResponse;
				public getEncoding(): string;
				public getType(): string;
				/** @deprecated */
				public getContent(): string;
				public getTarget(): string;
				public getDownloadUrl(): string;
				public isFile(): boolean;
				public getName(): string;
				public getUrl(): string;
				public getPath(): string;
				public getHtmlUrl(): string;
				/** @deprecated */
				public getEncodedContent(): string;
				public update(newContent: string, commitMessage: string, branch: string): org.kohsuke.github.GHContentUpdateResponse;
				public update(newContent: string, commitMessage: string): org.kohsuke.github.GHContentUpdateResponse;
				public refresh(): void;
				public refresh(value: any): void;
				public getOwner(): org.kohsuke.github.GHRepository;
				public getGitUrl(): string;
				public update(newContentBytes: number[], commitMessage: string, branch: string): org.kohsuke.github.GHContentUpdateResponse;
				public read(): java.io.InputStream;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHContentBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHContentBuilder>;
				public branch(branch: string): org.kohsuke.github.GHContentBuilder;
				public content(content: number[]): org.kohsuke.github.GHContentBuilder;
				public commit(): org.kohsuke.github.GHContentUpdateResponse;
				public content(content: string): org.kohsuke.github.GHContentBuilder;
				public message(commitMessage: string): org.kohsuke.github.GHContentBuilder;
				public path(path: string): org.kohsuke.github.GHContentBuilder;
				public sha(sha: string): org.kohsuke.github.GHContentBuilder;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHContentSearchBuilder extends org.kohsuke.github.GHSearchBuilder<org.kohsuke.github.GHContent> {
				public static class: java.lang.Class<org.kohsuke.github.GHContentSearchBuilder>;
				public sort(sort: org.kohsuke.github.GHContentSearchBuilder.Sort): org.kohsuke.github.GHContentSearchBuilder;
				public in(v: string): org.kohsuke.github.GHContentSearchBuilder;
				public fork(fork: org.kohsuke.github.GHFork): org.kohsuke.github.GHContentSearchBuilder;
				public filename(v: string): org.kohsuke.github.GHContentSearchBuilder;
				public user(v: string): org.kohsuke.github.GHContentSearchBuilder;
				public q(term: string): org.kohsuke.github.GHQueryBuilder<any>;
				public order(v: org.kohsuke.github.GHDirection): org.kohsuke.github.GHContentSearchBuilder;
				public q(term: string): org.kohsuke.github.GHContentSearchBuilder;
				public language(v: string): org.kohsuke.github.GHContentSearchBuilder;
				public path(v: string): org.kohsuke.github.GHContentSearchBuilder;
				public size(v: string): org.kohsuke.github.GHContentSearchBuilder;
				/** @deprecated */
				public fork(v: string): org.kohsuke.github.GHContentSearchBuilder;
				public repo(v: string): org.kohsuke.github.GHContentSearchBuilder;
				public extension(v: string): org.kohsuke.github.GHContentSearchBuilder;
				public getApiUrl(): string;
			}
			export module GHContentSearchBuilder {
				export class ContentSearchResult extends org.kohsuke.github.SearchResult<org.kohsuke.github.GHContent> {
					public static class: java.lang.Class<org.kohsuke.github.GHContentSearchBuilder.ContentSearchResult>;
				}
				export class Sort {
					public static class: java.lang.Class<org.kohsuke.github.GHContentSearchBuilder.Sort>;
					public static BEST_MATCH: org.kohsuke.github.GHContentSearchBuilder.Sort;
					public static INDEXED: org.kohsuke.github.GHContentSearchBuilder.Sort;
					public static valueOf(name: string): org.kohsuke.github.GHContentSearchBuilder.Sort;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.kohsuke.github.GHContentSearchBuilder.Sort[];
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHContentUpdateResponse extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHContentUpdateResponse>;
				public getCommit(): org.kohsuke.github.GitCommit;
				public getContent(): org.kohsuke.github.GHContent;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHContentWithLicense extends org.kohsuke.github.GHContent {
				public static class: java.lang.Class<org.kohsuke.github.GHContentWithLicense>;
				public refresh(): void;
				public refresh(value: any): void;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHCreateRepositoryBuilder extends org.kohsuke.github.GHRepositoryBuilder<org.kohsuke.github.GHCreateRepositoryBuilder> {
				public static class: java.lang.Class<org.kohsuke.github.GHCreateRepositoryBuilder>;
				public owner(owner: string): org.kohsuke.github.GHCreateRepositoryBuilder;
				public constructor(intermediateReturnType: java.lang.Class<any>, root: org.kohsuke.github.GitHub, baseInstance: org.kohsuke.github.GHRepository);
				public autoInit(enabled: boolean): org.kohsuke.github.GHCreateRepositoryBuilder;
				public create(): org.kohsuke.github.GHRepository;
				public licenseTemplate(license: string): org.kohsuke.github.GHCreateRepositoryBuilder;
				/** @deprecated */
				public templateRepository(enabled: boolean): org.kohsuke.github.GHCreateRepositoryBuilder;
				public fromTemplateRepository(templateOwner: string, templateRepo: string): org.kohsuke.github.GHCreateRepositoryBuilder;
				public constructor(name: string, root: org.kohsuke.github.GitHub, apiTail: string);
				public team(team: org.kohsuke.github.GHTeam): org.kohsuke.github.GHCreateRepositoryBuilder;
				public gitignoreTemplate(language: string): org.kohsuke.github.GHCreateRepositoryBuilder;
				public constructor(finalReturnType: java.lang.Class<any>, intermediateReturnType: java.lang.Class<any>, root: org.kohsuke.github.GitHub, baseInstance: any);
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHDeployKey extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHDeployKey>;
				public url: string;
				public key: string;
				public title: string;
				public verified: boolean;
				public id: number;
				/** @deprecated */
				public wrap(repo: org.kohsuke.github.GHRepository): org.kohsuke.github.GHDeployKey;
				public delete(): void;
				public isVerified(): boolean;
				public getId(): number;
				public getUrl(): string;
				public toString(): string;
				public getKey(): string;
				public getTitle(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHDeployment extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHDeployment>;
				public sha: string;
				public ref: string;
				public task: string;
				public payload: any;
				public environment: string;
				public description: string;
				public statuses_url: string;
				public repository_url: string;
				public creator: org.kohsuke.github.GHUser;
				public original_environment: string;
				public transient_environment: boolean;
				public production_environment: boolean;
				/** @deprecated */
				public isTransientEnvironment(): boolean;
				public getRef(): string;
				/** @deprecated */
				public getHtmlUrl(): java.net.URL;
				public getPayloadObject(): any;
				public getHtmlUrl(): java.net.URL;
				/** @deprecated */
				public getOriginalEnvironment(): string;
				/** @deprecated */
				public isProductionEnvironment(): boolean;
				public createStatus(state: org.kohsuke.github.GHDeploymentState): org.kohsuke.github.GHDeploymentStatusBuilder;
				public getPayload(): string;
				public listStatuses(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHDeploymentStatus>;
				public getSha(): string;
				public getTask(): string;
				public constructor();
				public getEnvironment(): string;
				public getStatusesUrl(): java.net.URL;
				public getCreator(): org.kohsuke.github.GHUser;
				public getRepositoryUrl(): java.net.URL;
				public getPayloadMap(): java.util.Map<string,any>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHDeploymentBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHDeploymentBuilder>;
				public create(): org.kohsuke.github.GHDeployment;
				public ref(branch: string): org.kohsuke.github.GHDeploymentBuilder;
				public requiredContexts(requiredContexts: java.util.List<string>): org.kohsuke.github.GHDeploymentBuilder;
				/** @deprecated */
				public transientEnvironment(transientEnvironment: boolean): org.kohsuke.github.GHDeploymentBuilder;
				public environment(environment: string): org.kohsuke.github.GHDeploymentBuilder;
				public payload(payload: string): org.kohsuke.github.GHDeploymentBuilder;
				/** @deprecated */
				public productionEnvironment(productionEnvironment: boolean): org.kohsuke.github.GHDeploymentBuilder;
				public constructor(repo: org.kohsuke.github.GHRepository, ref: string);
				public autoMerge(autoMerge: boolean): org.kohsuke.github.GHDeploymentBuilder;
				public task(task: string): org.kohsuke.github.GHDeploymentBuilder;
				public constructor(repo: org.kohsuke.github.GHRepository);
				public description(description: string): org.kohsuke.github.GHDeploymentBuilder;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHDeploymentState {
				public static class: java.lang.Class<org.kohsuke.github.GHDeploymentState>;
				public static PENDING: org.kohsuke.github.GHDeploymentState;
				public static SUCCESS: org.kohsuke.github.GHDeploymentState;
				public static ERROR: org.kohsuke.github.GHDeploymentState;
				public static FAILURE: org.kohsuke.github.GHDeploymentState;
				public static IN_PROGRESS: org.kohsuke.github.GHDeploymentState;
				public static QUEUED: org.kohsuke.github.GHDeploymentState;
				public static INACTIVE: org.kohsuke.github.GHDeploymentState;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): org.kohsuke.github.GHDeploymentState[];
				public static valueOf(name: string): org.kohsuke.github.GHDeploymentState;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHDeploymentStatus extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHDeploymentStatus>;
				public creator: org.kohsuke.github.GHUser;
				public state: string;
				public description: string;
				public target_url: string;
				public log_url: string;
				public deployment_url: string;
				public repository_url: string;
				public environment_url: string;
				/** @deprecated */
				public getHtmlUrl(): java.net.URL;
				public getHtmlUrl(): java.net.URL;
				public getRepositoryUrl(): java.net.URL;
				/** @deprecated */
				public getEnvironmentUrl(): java.net.URL;
				/** @deprecated */
				public getTargetUrl(): java.net.URL;
				/** @deprecated */
				public getLogUrl(): java.net.URL;
				/** @deprecated */
				public wrap(owner: org.kohsuke.github.GHRepository): org.kohsuke.github.GHDeploymentStatus;
				public getState(): org.kohsuke.github.GHDeploymentState;
				public constructor();
				public getDeploymentUrl(): java.net.URL;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHDeploymentStatusBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHDeploymentStatusBuilder>;
				/** @deprecated */
				public logUrl(logUrl: string): org.kohsuke.github.GHDeploymentStatusBuilder;
				/** @deprecated */
				public constructor(repo: org.kohsuke.github.GHRepository, deploymentId: number, state: org.kohsuke.github.GHDeploymentState);
				/** @deprecated */
				public environmentUrl(environmentUrl: string): org.kohsuke.github.GHDeploymentStatusBuilder;
				/** @deprecated */
				public environment(environment: string): org.kohsuke.github.GHDeploymentStatusBuilder;
				/** @deprecated */
				public targetUrl(targetUrl: string): org.kohsuke.github.GHDeploymentStatusBuilder;
				/** @deprecated */
				public autoInactive(autoInactive: boolean): org.kohsuke.github.GHDeploymentStatusBuilder;
				public description(description: string): org.kohsuke.github.GHDeploymentStatusBuilder;
				public create(): org.kohsuke.github.GHDeploymentStatus;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHDirection {
				public static class: java.lang.Class<org.kohsuke.github.GHDirection>;
				public static ASC: org.kohsuke.github.GHDirection;
				public static DESC: org.kohsuke.github.GHDirection;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): org.kohsuke.github.GHDirection[];
				public static valueOf(name: string): org.kohsuke.github.GHDirection;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHDiscussion extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHDiscussion>;
				public set(): org.kohsuke.github.GHDiscussion.Setter;
				public getHtmlUrl(): java.net.URL;
				public getId(): number;
				public getTitle(): string;
				public constructor();
				public getNumber(): number;
				public getBody(): string;
				public equals(obj: any): boolean;
				public delete(): void;
				public hashCode(): number;
				public update(): org.kohsuke.github.GHDiscussion.Updater;
				public isPrivate(): boolean;
				public getTeam(): org.kohsuke.github.GHTeam;
				public equals(o: any): boolean;
			}
			export module GHDiscussion {
				export class Creator extends org.kohsuke.github.GHDiscussionBuilder<org.kohsuke.github.GHDiscussion.Creator> {
					public static class: java.lang.Class<org.kohsuke.github.GHDiscussion.Creator>;
					public private_(value: boolean): org.kohsuke.github.GHDiscussion.Creator;
				}
				export class Setter extends org.kohsuke.github.GHDiscussionBuilder<org.kohsuke.github.GHDiscussion> {
					public static class: java.lang.Class<org.kohsuke.github.GHDiscussion.Setter>;
				}
				export class Updater extends org.kohsuke.github.GHDiscussionBuilder<org.kohsuke.github.GHDiscussion.Updater> {
					public static class: java.lang.Class<org.kohsuke.github.GHDiscussion.Updater>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHDiscussionBuilder<S>  extends org.kohsuke.github.AbstractBuilder<org.kohsuke.github.GHDiscussion,any> {
				public static class: java.lang.Class<org.kohsuke.github.GHDiscussionBuilder<any>>;
				public constructor(intermediateReturnType: java.lang.Class<any>, team: org.kohsuke.github.GHTeam, baseInstance: org.kohsuke.github.GHDiscussion);
				public title(value: string): any;
				public done(): org.kohsuke.github.GHDiscussion;
				public done(): any;
				public constructor(finalReturnType: java.lang.Class<any>, intermediateReturnType: java.lang.Class<any>, root: org.kohsuke.github.GitHub, baseInstance: any);
				public body(value: string): any;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHEmail extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHEmail>;
				public email: string;
				public primary: boolean;
				public verified: boolean;
				public equals(obj: any): boolean;
				public getEmail(): string;
				public isVerified(): boolean;
				public hashCode(): number;
				public toString(): string;
				public isPrimary(): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHEvent {
				public static class: java.lang.Class<org.kohsuke.github.GHEvent>;
				public static BRANCH_PROTECTION_RULE: org.kohsuke.github.GHEvent;
				public static CHECK_RUN: org.kohsuke.github.GHEvent;
				public static CHECK_SUITE: org.kohsuke.github.GHEvent;
				public static CODE_SCANNING_ALERT: org.kohsuke.github.GHEvent;
				public static COMMIT_COMMENT: org.kohsuke.github.GHEvent;
				public static CONTENT_REFERENCE: org.kohsuke.github.GHEvent;
				public static CREATE: org.kohsuke.github.GHEvent;
				public static DELETE: org.kohsuke.github.GHEvent;
				public static DEPLOY_KEY: org.kohsuke.github.GHEvent;
				public static DEPLOYMENT: org.kohsuke.github.GHEvent;
				public static DEPLOYMENT_STATUS: org.kohsuke.github.GHEvent;
				public static DISCUSSION: org.kohsuke.github.GHEvent;
				public static DISCUSSION_COMMENT: org.kohsuke.github.GHEvent;
				public static DOWNLOAD: org.kohsuke.github.GHEvent;
				public static FOLLOW: org.kohsuke.github.GHEvent;
				public static FORK: org.kohsuke.github.GHEvent;
				public static FORK_APPLY: org.kohsuke.github.GHEvent;
				public static GITHUB_APP_AUTHORIZATION: org.kohsuke.github.GHEvent;
				public static GIST: org.kohsuke.github.GHEvent;
				public static GOLLUM: org.kohsuke.github.GHEvent;
				public static INSTALLATION: org.kohsuke.github.GHEvent;
				public static INSTALLATION_REPOSITORIES: org.kohsuke.github.GHEvent;
				public static INTEGRATION_INSTALLATION_REPOSITORIES: org.kohsuke.github.GHEvent;
				public static ISSUE_COMMENT: org.kohsuke.github.GHEvent;
				public static ISSUES: org.kohsuke.github.GHEvent;
				public static LABEL: org.kohsuke.github.GHEvent;
				public static MARKETPLACE_PURCHASE: org.kohsuke.github.GHEvent;
				public static MEMBER: org.kohsuke.github.GHEvent;
				public static MEMBERSHIP: org.kohsuke.github.GHEvent;
				public static MERGE_QUEUE_ENTRY: org.kohsuke.github.GHEvent;
				public static META: org.kohsuke.github.GHEvent;
				public static MILESTONE: org.kohsuke.github.GHEvent;
				public static ORGANIZATION: org.kohsuke.github.GHEvent;
				public static ORG_BLOCK: org.kohsuke.github.GHEvent;
				public static PACKAGE: org.kohsuke.github.GHEvent;
				public static PAGE_BUILD: org.kohsuke.github.GHEvent;
				public static PROJECT_CARD: org.kohsuke.github.GHEvent;
				public static PROJECT_COLUMN: org.kohsuke.github.GHEvent;
				public static PROJECT: org.kohsuke.github.GHEvent;
				public static PING: org.kohsuke.github.GHEvent;
				public static PUBLIC: org.kohsuke.github.GHEvent;
				public static PULL_REQUEST: org.kohsuke.github.GHEvent;
				public static PULL_REQUEST_REVIEW: org.kohsuke.github.GHEvent;
				public static PULL_REQUEST_REVIEW_COMMENT: org.kohsuke.github.GHEvent;
				public static PULL_REQUEST_REVIEW_THREAD: org.kohsuke.github.GHEvent;
				public static PUSH: org.kohsuke.github.GHEvent;
				public static REGISTRY_PACKAGE: org.kohsuke.github.GHEvent;
				public static RELEASE: org.kohsuke.github.GHEvent;
				public static REPOSITORY_DISPATCH: org.kohsuke.github.GHEvent;
				public static REPOSITORY: org.kohsuke.github.GHEvent;
				public static REPOSITORY_IMPORT: org.kohsuke.github.GHEvent;
				public static REPOSITORY_VULNERABILITY_ALERT: org.kohsuke.github.GHEvent;
				public static SCHEDULE: org.kohsuke.github.GHEvent;
				public static SECURITY_ADVISORY: org.kohsuke.github.GHEvent;
				public static STAR: org.kohsuke.github.GHEvent;
				public static STATUS: org.kohsuke.github.GHEvent;
				public static TEAM: org.kohsuke.github.GHEvent;
				public static TEAM_ADD: org.kohsuke.github.GHEvent;
				public static WATCH: org.kohsuke.github.GHEvent;
				public static WORKFLOW_JOB: org.kohsuke.github.GHEvent;
				public static WORKFLOW_DISPATCH: org.kohsuke.github.GHEvent;
				public static WORKFLOW_RUN: org.kohsuke.github.GHEvent;
				public static UNKNOWN: org.kohsuke.github.GHEvent;
				public static ALL: org.kohsuke.github.GHEvent;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): org.kohsuke.github.GHEvent[];
				public static valueOf(name: string): org.kohsuke.github.GHEvent;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHEventInfo extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHEventInfo>;
				public getPayload(type: java.lang.Class<any>): org.kohsuke.github.GHEventPayload;
				public getType(): org.kohsuke.github.GHEvent;
				public getId(): number;
				public getCreatedAt(): java.util.Date;
				public getOrganization(): org.kohsuke.github.GHOrganization;
				public getRepository(): org.kohsuke.github.GHRepository;
				public getActor(): org.kohsuke.github.GHUser;
				public getActorLogin(): string;
				public constructor();
			}
			export module GHEventInfo {
				export class GHEventRepository extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHEventInfo.GHEventRepository>;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GHEventPayload extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHEventPayload>;
				public getInstallation(): org.kohsuke.github.GHAppInstallation;
				/** @deprecated */
				public setOrganization(organization: org.kohsuke.github.GHOrganization): void;
				public getAction(): string;
				public getOrganization(): org.kohsuke.github.GHOrganization;
				/** @deprecated */
				public setSender(sender: org.kohsuke.github.GHUser): void;
				public getRepository(): org.kohsuke.github.GHRepository;
				public getSender(): org.kohsuke.github.GHUser;
				/** @deprecated */
				public setRepository(repository: org.kohsuke.github.GHRepository): void;
			}
			export module GHEventPayload {
				export class CheckRun extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.CheckRun>;
					public getCheckRun(): org.kohsuke.github.GHCheckRun;
					public getNumber(): number;
					public constructor();
					/** @deprecated */
					public setRequestedAction(currentRequestedAction: org.kohsuke.github.GHRequestedAction): void;
					/** @deprecated */
					public setCheckRun(currentCheckRun: org.kohsuke.github.GHCheckRun): void;
					public getRequestedAction(): org.kohsuke.github.GHRequestedAction;
				}
				export class CheckSuite extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.CheckSuite>;
					public constructor();
					public getCheckSuite(): org.kohsuke.github.GHCheckSuite;
				}
				export class CommentChanges extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.CommentChanges>;
					public constructor();
					public getBody(): org.kohsuke.github.GHEventPayload.CommentChanges.GHFrom;
				}
				export module CommentChanges {
					export class GHFrom extends java.lang.Object {
						public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.CommentChanges.GHFrom>;
						public constructor();
						public getFrom(): string;
					}
				}
				export class CommitComment extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.CommitComment>;
					/** @deprecated */
					public setComment(comment: org.kohsuke.github.GHCommitComment): void;
					public getComment(): org.kohsuke.github.GHCommitComment;
					public constructor();
				}
				export class Create extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Create>;
					public constructor();
					public getRef(): string;
					public getMasterBranch(): string;
					public getRefType(): string;
					public getDescription(): string;
				}
				export class Delete extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Delete>;
					public constructor();
					public getRef(): string;
					public getRefType(): string;
				}
				export class Deployment extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Deployment>;
					/** @deprecated */
					public setDeployment(deployment: org.kohsuke.github.GHDeployment): void;
					public getDeployment(): org.kohsuke.github.GHDeployment;
					public constructor();
				}
				export class DeploymentStatus extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.DeploymentStatus>;
					/** @deprecated */
					public setDeployment(deployment: org.kohsuke.github.GHDeployment): void;
					public getDeployment(): org.kohsuke.github.GHDeployment;
					public constructor();
					public getDeploymentStatus(): org.kohsuke.github.GHDeploymentStatus;
					/** @deprecated */
					public setDeploymentStatus(deploymentStatus: org.kohsuke.github.GHDeploymentStatus): void;
				}
				export class Discussion extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Discussion>;
					public constructor();
					public getDiscussion(): org.kohsuke.github.GHRepositoryDiscussion;
					public getLabel(): org.kohsuke.github.GHLabel;
				}
				export class Fork extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Fork>;
					public constructor();
					public getForkee(): org.kohsuke.github.GHRepository;
					/** @deprecated */
					public setForkee(forkee: org.kohsuke.github.GHRepository): void;
				}
				export class Installation extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Installation>;
					public constructor();
					public getRepositories(): java.util.List<org.kohsuke.github.GHRepository>;
				}
				export class InstallationRepositories extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.InstallationRepositories>;
					public getRepositoriesRemoved(): java.util.List<org.kohsuke.github.GHRepository>;
					public constructor();
					public getRepositorySelection(): string;
					public getRepositoriesAdded(): java.util.List<org.kohsuke.github.GHRepository>;
				}
				export class Issue extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Issue>;
					public constructor();
					/** @deprecated */
					public setIssue(issue: org.kohsuke.github.GHIssue): void;
					public getChanges(): org.kohsuke.github.GHIssueChanges;
					public getIssue(): org.kohsuke.github.GHIssue;
					public getLabel(): org.kohsuke.github.GHLabel;
				}
				export class IssueComment extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.IssueComment>;
					public getComment(): org.kohsuke.github.GHIssueComment;
					public constructor();
					/** @deprecated */
					public setIssue(issue: org.kohsuke.github.GHIssue): void;
					/** @deprecated */
					public setComment(comment: org.kohsuke.github.GHIssueComment): void;
					public getIssue(): org.kohsuke.github.GHIssue;
					public getChanges(): org.kohsuke.github.GHEventPayload.CommentChanges;
				}
				export class Label extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Label>;
					public getChanges(): org.kohsuke.github.GHLabelChanges;
					public constructor();
					public getLabel(): org.kohsuke.github.GHLabel;
				}
				export class Ping extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Ping>;
					public constructor();
				}
				export class Public extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Public>;
					public constructor();
				}
				export class PullRequest extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.PullRequest>;
					public getNumber(): number;
					public getPullRequest(): org.kohsuke.github.GHPullRequest;
					public constructor();
					public getChanges(): org.kohsuke.github.GHPullRequestChanges;
					public getLabel(): org.kohsuke.github.GHLabel;
				}
				export class PullRequestReview extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.PullRequestReview>;
					public getPullRequest(): org.kohsuke.github.GHPullRequest;
					public constructor();
					public getReview(): org.kohsuke.github.GHPullRequestReview;
				}
				export class PullRequestReviewComment extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.PullRequestReviewComment>;
					public getComment(): org.kohsuke.github.GHPullRequestReviewComment;
					public getPullRequest(): org.kohsuke.github.GHPullRequest;
					public constructor();
					public getChanges(): org.kohsuke.github.GHEventPayload.CommentChanges;
				}
				export class Push extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Push>;
					public isDeleted(): boolean;
					public constructor();
					public getRef(): string;
					public isCreated(): boolean;
					public getPusher(): org.kohsuke.github.GHEventPayload.Push.Pusher;
					public getCompare(): string;
					public isForced(): boolean;
					public getHead(): string;
					public getCommits(): java.util.List<org.kohsuke.github.GHEventPayload.Push.PushCommit>;
					public getSize(): number;
					/** @deprecated */
					public setPusher(pusher: org.kohsuke.github.GHEventPayload.Push.Pusher): void;
					public getBefore(): string;
				}
				export module Push {
					export class PushCommit extends java.lang.Object {
						public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Push.PushCommit>;
						public getMessage(): string;
						public constructor();
						public getAuthor(): org.kohsuke.github.GitUser;
						public getTimestamp(): java.util.Date;
						public getSha(): string;
						public getAdded(): java.util.List<string>;
						public getUrl(): string;
						public getRemoved(): java.util.List<string>;
						public getModified(): java.util.List<string>;
						public isDistinct(): boolean;
						public getCommitter(): org.kohsuke.github.GitUser;
					}
					export class Pusher extends java.lang.Object {
						public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Push.Pusher>;
						public constructor();
						public getEmail(): string;
						/** @deprecated */
						public setName(name: string): void;
						public getName(): string;
						/** @deprecated */
						public setEmail(email: string): void;
					}
				}
				export class Release extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Release>;
					public getRelease(): org.kohsuke.github.GHRelease;
					public constructor();
					/** @deprecated */
					public setRelease(release: org.kohsuke.github.GHRelease): void;
				}
				export class Repository extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Repository>;
					public constructor();
				}
				export class Status extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.Status>;
					public getTargetUrl(): string;
					public constructor();
					public getCommit(): org.kohsuke.github.GHCommit;
					public getState(): org.kohsuke.github.GHCommitState;
					/** @deprecated */
					public setCommit(commit: org.kohsuke.github.GHCommit): void;
					public getDescription(): string;
					public getContext(): string;
					/** @deprecated */
					public setState(state: org.kohsuke.github.GHCommitState): void;
				}
				export class WorkflowDispatch extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.WorkflowDispatch>;
					public constructor();
					public getRef(): string;
					public getInputs(): java.util.Map<string,any>;
					public getWorkflow(): string;
				}
				export class WorkflowRun extends org.kohsuke.github.GHEventPayload {
					public static class: java.lang.Class<org.kohsuke.github.GHEventPayload.WorkflowRun>;
					public constructor();
					public getWorkflow(): org.kohsuke.github.GHWorkflow;
					public getWorkflowRun(): org.kohsuke.github.GHWorkflowRun;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHException extends java.lang.RuntimeException {
				public static class: java.lang.Class<org.kohsuke.github.GHException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHFileNotFoundException extends java.io.FileNotFoundException {
				public static class: java.lang.Class<org.kohsuke.github.GHFileNotFoundException>;
				public responseHeaderFields: java.util.Map<string,java.util.List<string>>;
				public constructor(s: string);
				public constructor(cause: java.lang.Throwable);
				public getResponseHeaderFields(): java.util.Map<string,java.util.List<string>>;
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(message: string);
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHFork {
				public static class: java.lang.Class<org.kohsuke.github.GHFork>;
				public static PARENT_AND_FORKS: org.kohsuke.github.GHFork;
				public static FORKS_ONLY: org.kohsuke.github.GHFork;
				public static PARENT_ONLY: org.kohsuke.github.GHFork;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): org.kohsuke.github.GHFork;
				public static values(): org.kohsuke.github.GHFork[];
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHGist extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHGist>;
				public getCommentsUrl(): string;
				public getGitPullUrl(): string;
				public getDescription(): string;
				public getCommentCount(): number;
				public getOwner(): org.kohsuke.github.GHUser;
				public getFiles(): java.util.Map<string,org.kohsuke.github.GHGistFile>;
				public getGistId(): string;
				public delete(): void;
				public getCommitsUrl(): string;
				public hashCode(): number;
				public update(): org.kohsuke.github.GHGistUpdater;
				public isPublic(): boolean;
				public equals(o: any): boolean;
				public fork(): org.kohsuke.github.GHGist;
				public listForks(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHGist>;
				public getForksUrl(): string;
				public getHtmlUrl(): java.net.URL;
				public getId(): number;
				/** @deprecated */
				public getId(): number;
				public star(): void;
				public equals(obj: any): boolean;
				public unstar(): void;
				public getGitPushUrl(): string;
				public isStarred(): boolean;
				public getFile(name: string): org.kohsuke.github.GHGistFile;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHGistBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHGistBuilder>;
				public constructor(root: org.kohsuke.github.GitHub);
				public create(): org.kohsuke.github.GHGist;
				public file(fileName: string, content: string): org.kohsuke.github.GHGistBuilder;
				public description(desc: string): org.kohsuke.github.GHGistBuilder;
				public public_(v: boolean): org.kohsuke.github.GHGistBuilder;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHGistFile extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHGistFile>;
				public getType(): string;
				public getRawUrl(): string;
				public getFileName(): string;
				public getSize(): number;
				public getLanguage(): string;
				public getContent(): string;
				public isTruncated(): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHGistUpdater extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHGistUpdater>;
				public updateFile(fileName: string, content: string): org.kohsuke.github.GHGistUpdater;
				public addFile(fileName: string, content: string): org.kohsuke.github.GHGistUpdater;
				public deleteFile(fileName: string): org.kohsuke.github.GHGistUpdater;
				public description(desc: string): org.kohsuke.github.GHGistUpdater;
				public update(): org.kohsuke.github.GHGist;
				public renameFile(fileName: string, newFileName: string): org.kohsuke.github.GHGistUpdater;
				public updateFile(fileName: string, newFileName: string, content: string): org.kohsuke.github.GHGistUpdater;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GHHook extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHHook>;
				public getEvents(): java.util.EnumSet<org.kohsuke.github.GHEvent>;
				public getConfig(): java.util.Map<string,string>;
				/** @deprecated */
				public getHtmlUrl(): java.net.URL;
				public delete(): void;
				public getHtmlUrl(): java.net.URL;
				public isActive(): boolean;
				public ping(): void;
				public getName(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHHooks extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHHooks>;
			}
			export module GHHooks {
				export abstract class Context extends org.kohsuke.github.GitHubInteractiveObject {
					public static class: java.lang.Class<org.kohsuke.github.GHHooks.Context>;
					public getHook(id: number): org.kohsuke.github.GHHook;
					public createHook(name: string, config: java.util.Map<string,string>, events: java.util.Collection<org.kohsuke.github.GHEvent>, active: boolean): org.kohsuke.github.GHHook;
					public deleteHook(id: number): void;
					public getHooks(): java.util.List<org.kohsuke.github.GHHook>;
				}
				export class OrgContext extends org.kohsuke.github.GHHooks.Context {
					public static class: java.lang.Class<org.kohsuke.github.GHHooks.OrgContext>;
				}
				export class RepoContext extends org.kohsuke.github.GHHooks.Context {
					public static class: java.lang.Class<org.kohsuke.github.GHHooks.RepoContext>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHIOException extends java.io.IOException {
				public static class: java.lang.Class<org.kohsuke.github.GHIOException>;
				public responseHeaderFields: java.util.Map<string,java.util.List<string>>;
				public constructor(cause: java.lang.Throwable);
				public getResponseHeaderFields(): java.util.Map<string,java.util.List<string>>;
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHInvitation extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHInvitation>;
				public decline(): void;
				public getHtmlUrl(): java.net.URL;
				public accept(): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHIssue extends org.kohsuke.github.GHObject implements org.kohsuke.github.Reactable {
				public static class: java.lang.Class<org.kohsuke.github.GHIssue>;
				public assignee: org.kohsuke.github.GHUser;
				public assignees: org.kohsuke.github.GHUser[];
				public state: string;
				public number: number;
				public closed_at: string;
				public comments: number;
				public body: string;
				public labels: java.util.List<org.kohsuke.github.GHLabel>;
				public user: org.kohsuke.github.GHUser;
				public title: string;
				public html_url: string;
				public pull_request: org.kohsuke.github.GHIssue.PullRequest;
				public milestone: org.kohsuke.github.GHMilestone;
				public closed_by: org.kohsuke.github.GHUser;
				public locked: boolean;
				public removeLabel(name: string): java.util.List<org.kohsuke.github.GHLabel>;
				public addAssignees(assignees: java.util.Collection<org.kohsuke.github.GHUser>): void;
				public listEvents(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHIssueEvent>;
				public removeLabels(labels: java.util.Collection<org.kohsuke.github.GHLabel>): java.util.List<org.kohsuke.github.GHLabel>;
				public addLabels(labels: java.util.Collection<org.kohsuke.github.GHLabel>): java.util.List<org.kohsuke.github.GHLabel>;
				public unlock(): void;
				public addLabels(...labels: org.kohsuke.github.GHLabel[]): java.util.List<org.kohsuke.github.GHLabel>;
				public listComments(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHIssueComment>;
				public getComments(): java.util.List<org.kohsuke.github.GHIssueComment>;
				public getAssignees(): java.util.List<org.kohsuke.github.GHUser>;
				public constructor();
				public getMilestone(): org.kohsuke.github.GHMilestone;
				public static getLogins(users: java.util.Collection<org.kohsuke.github.GHUser>): java.util.List<string>;
				public createReaction(param0: org.kohsuke.github.ReactionContent): org.kohsuke.github.GHReaction;
				public close(): void;
				public setLabels(...labels: string[]): void;
				public deleteReaction(param0: org.kohsuke.github.GHReaction): void;
				public reopen(): void;
				public deleteReaction(reaction: org.kohsuke.github.GHReaction): void;
				public getUser(): org.kohsuke.github.GHUser;
				public removeAssignees(assignees: java.util.Collection<org.kohsuke.github.GHUser>): void;
				public getNumber(): number;
				public addAssignees(...assignees: org.kohsuke.github.GHUser[]): void;
				public listReactions(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHReaction>;
				public getApiRoute(): string;
				public getState(): org.kohsuke.github.GHIssueState;
				public addLabels(...names: string[]): java.util.List<org.kohsuke.github.GHLabel>;
				public isLocked(): boolean;
				public lock(): void;
				public isPullRequest(): boolean;
				public setBody(body: string): void;
				public assignTo(user: org.kohsuke.github.GHUser): void;
				public removeLabels(...names: string[]): java.util.List<org.kohsuke.github.GHLabel>;
				public removeAssignees(...assignees: org.kohsuke.github.GHUser[]): void;
				public removeLabels(...labels: org.kohsuke.github.GHLabel[]): java.util.List<org.kohsuke.github.GHLabel>;
				public getCommentsCount(): number;
				public getLabels(): java.util.Collection<org.kohsuke.github.GHLabel>;
				public getRepository(): org.kohsuke.github.GHRepository;
				public setTitle(title: string): void;
				public setMilestone(milestone: org.kohsuke.github.GHMilestone): void;
				public comment(message: string): org.kohsuke.github.GHIssueComment;
				public getHtmlUrl(): java.net.URL;
				public getIssuesApiRoute(): string;
				public createReaction(content: org.kohsuke.github.ReactionContent): org.kohsuke.github.GHReaction;
				/** @deprecated */
				public getApiURL(): java.net.URL;
				public getTitle(): string;
				public getClosedAt(): java.util.Date;
				public getBody(): string;
				public getAssignee(): org.kohsuke.github.GHUser;
				public getClosedBy(): org.kohsuke.github.GHUser;
				public setAssignees(...assignees: org.kohsuke.github.GHUser[]): void;
				public setAssignees(assignees: java.util.Collection<org.kohsuke.github.GHUser>): void;
				public getPullRequest(): org.kohsuke.github.GHIssue.PullRequest;
			}
			export module GHIssue {
				export class PullRequest extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHIssue.PullRequest>;
					public getPatchUrl(): java.net.URL;
					public constructor();
					public getDiffUrl(): java.net.URL;
					public getUrl(): java.net.URL;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHIssueBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHIssueBuilder>;
				public body(str: string): org.kohsuke.github.GHIssueBuilder;
				public create(): org.kohsuke.github.GHIssue;
				public assignee(user: string): org.kohsuke.github.GHIssueBuilder;
				public milestone(milestone: org.kohsuke.github.GHMilestone): org.kohsuke.github.GHIssueBuilder;
				public assignee(user: org.kohsuke.github.GHUser): org.kohsuke.github.GHIssueBuilder;
				public label(label: string): org.kohsuke.github.GHIssueBuilder;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHIssueChanges extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHIssueChanges>;
				public getBody(): org.kohsuke.github.GHIssueChanges.GHFrom;
				public getTitle(): org.kohsuke.github.GHIssueChanges.GHFrom;
				public constructor();
			}
			export module GHIssueChanges {
				export class GHFrom extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHIssueChanges.GHFrom>;
					public constructor();
					public getFrom(): string;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHIssueComment extends org.kohsuke.github.GHObject implements org.kohsuke.github.Reactable {
				public static class: java.lang.Class<org.kohsuke.github.GHIssueComment>;
				public getAuthorAssociation(): org.kohsuke.github.GHCommentAuthorAssociation;
				public deleteReaction(param0: org.kohsuke.github.GHReaction): void;
				public getHtmlUrl(): java.net.URL;
				public update(body: string): void;
				public deleteReaction(reaction: org.kohsuke.github.GHReaction): void;
				public getUser(): org.kohsuke.github.GHUser;
				public createReaction(content: org.kohsuke.github.ReactionContent): org.kohsuke.github.GHReaction;
				public constructor();
				/** @deprecated */
				public getUserName(): string;
				public getBody(): string;
				public listReactions(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHReaction>;
				public delete(): void;
				public getParent(): org.kohsuke.github.GHIssue;
				public createReaction(param0: org.kohsuke.github.ReactionContent): org.kohsuke.github.GHReaction;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHIssueEvent extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHIssueEvent>;
				public getEvent(): string;
				public getId(): number;
				public getCreatedAt(): java.util.Date;
				public getUrl(): string;
				public getNodeId(): string;
				public getCommitId(): string;
				public toString(): string;
				public getRename(): org.kohsuke.github.GHIssueRename;
				public constructor();
				public getCommitUrl(): string;
				public getMilestone(): org.kohsuke.github.GHMilestone;
				public getAssignee(): org.kohsuke.github.GHUser;
				public getActor(): org.kohsuke.github.GHUser;
				public getIssue(): org.kohsuke.github.GHIssue;
				public getRequestedReviewer(): org.kohsuke.github.GHUser;
				public getLabel(): org.kohsuke.github.GHLabel;
				public getReviewRequester(): org.kohsuke.github.GHUser;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GHIssueQueryBuilder extends org.kohsuke.github.GHQueryBuilder<org.kohsuke.github.GHIssue> {
				public static class: java.lang.Class<org.kohsuke.github.GHIssueQueryBuilder>;
				public state(state: org.kohsuke.github.GHIssueState): org.kohsuke.github.GHIssueQueryBuilder;
				public since(timestamp: number): org.kohsuke.github.GHIssueQueryBuilder;
				public sort(sort: org.kohsuke.github.GHIssueQueryBuilder.Sort): org.kohsuke.github.GHIssueQueryBuilder;
				public pageSize(pageSize: number): org.kohsuke.github.GHIssueQueryBuilder;
				public since(date: java.util.Date): org.kohsuke.github.GHIssueQueryBuilder;
				public label(label: string): org.kohsuke.github.GHIssueQueryBuilder;
				public getApiUrl(): string;
				public direction(direction: org.kohsuke.github.GHDirection): org.kohsuke.github.GHIssueQueryBuilder;
			}
			export module GHIssueQueryBuilder {
				export class ForRepository extends org.kohsuke.github.GHIssueQueryBuilder {
					public static class: java.lang.Class<org.kohsuke.github.GHIssueQueryBuilder.ForRepository>;
					public assignee(assignee: string): org.kohsuke.github.GHIssueQueryBuilder.ForRepository;
					public getApiUrl(): string;
					public list(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHIssue>;
					public milestone(milestone: string): org.kohsuke.github.GHIssueQueryBuilder.ForRepository;
					public mentioned(mentioned: string): org.kohsuke.github.GHIssueQueryBuilder.ForRepository;
					public list(): org.kohsuke.github.PagedIterable<any>;
					public creator(creator: string): org.kohsuke.github.GHIssueQueryBuilder.ForRepository;
				}
				export class Sort {
					public static class: java.lang.Class<org.kohsuke.github.GHIssueQueryBuilder.Sort>;
					public static CREATED: org.kohsuke.github.GHIssueQueryBuilder.Sort;
					public static UPDATED: org.kohsuke.github.GHIssueQueryBuilder.Sort;
					public static COMMENTS: org.kohsuke.github.GHIssueQueryBuilder.Sort;
					public static values(): org.kohsuke.github.GHIssueQueryBuilder.Sort[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHIssueQueryBuilder.Sort;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHIssueRename extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHIssueRename>;
				public getTo(): string;
				public constructor();
				public getFrom(): string;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHIssueSearchBuilder extends org.kohsuke.github.GHSearchBuilder<org.kohsuke.github.GHIssue> {
				public static class: java.lang.Class<org.kohsuke.github.GHIssueSearchBuilder>;
				public isClosed(): org.kohsuke.github.GHIssueSearchBuilder;
				public mentions(login: string): org.kohsuke.github.GHIssueSearchBuilder;
				public mentions(u: org.kohsuke.github.GHUser): org.kohsuke.github.GHIssueSearchBuilder;
				public isMerged(): org.kohsuke.github.GHIssueSearchBuilder;
				public order(v: org.kohsuke.github.GHDirection): org.kohsuke.github.GHIssueSearchBuilder;
				public isOpen(): org.kohsuke.github.GHIssueSearchBuilder;
				public q(term: string): org.kohsuke.github.GHQueryBuilder<any>;
				public sort(sort: org.kohsuke.github.GHIssueSearchBuilder.Sort): org.kohsuke.github.GHIssueSearchBuilder;
				public getApiUrl(): string;
				public q(term: string): org.kohsuke.github.GHIssueSearchBuilder;
			}
			export module GHIssueSearchBuilder {
				export class IssueSearchResult extends org.kohsuke.github.SearchResult<org.kohsuke.github.GHIssue> {
					public static class: java.lang.Class<org.kohsuke.github.GHIssueSearchBuilder.IssueSearchResult>;
				}
				export class Sort {
					public static class: java.lang.Class<org.kohsuke.github.GHIssueSearchBuilder.Sort>;
					public static COMMENTS: org.kohsuke.github.GHIssueSearchBuilder.Sort;
					public static CREATED: org.kohsuke.github.GHIssueSearchBuilder.Sort;
					public static UPDATED: org.kohsuke.github.GHIssueSearchBuilder.Sort;
					public static values(): org.kohsuke.github.GHIssueSearchBuilder.Sort[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHIssueSearchBuilder.Sort;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHIssueState {
				public static class: java.lang.Class<org.kohsuke.github.GHIssueState>;
				public static OPEN: org.kohsuke.github.GHIssueState;
				public static CLOSED: org.kohsuke.github.GHIssueState;
				public static ALL: org.kohsuke.github.GHIssueState;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): org.kohsuke.github.GHIssueState;
				public static values(): org.kohsuke.github.GHIssueState[];
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHKey extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHKey>;
				public url: string;
				public key: string;
				public title: string;
				public verified: boolean;
				public id: number;
				public isVerified(): boolean;
				public getId(): number;
				public getUrl(): string;
				public toString(): string;
				public getKey(): string;
				public getTitle(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHLabel extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHLabel>;
				public getColor(): string;
				public getId(): number;
				/** @deprecated */
				public setColor(newColor: string): void;
				public getUrl(): string;
				public getName(): string;
				public getDescription(): string;
				public getNodeId(): string;
				public update(): org.kohsuke.github.GHLabel.Updater;
				public equals(obj: any): boolean;
				public isDefault(): boolean;
				public delete(): void;
				public hashCode(): number;
				/** @deprecated */
				public setDescription(newDescription: string): void;
				public equals(o: any): boolean;
				public set(): org.kohsuke.github.GHLabel.Setter;
			}
			export module GHLabel {
				export class Creator extends org.kohsuke.github.GHLabelBuilder<org.kohsuke.github.GHLabel.Creator> {
					public static class: java.lang.Class<org.kohsuke.github.GHLabel.Creator>;
				}
				export class Setter extends org.kohsuke.github.GHLabelBuilder<org.kohsuke.github.GHLabel> {
					public static class: java.lang.Class<org.kohsuke.github.GHLabel.Setter>;
				}
				export class Updater extends org.kohsuke.github.GHLabelBuilder<org.kohsuke.github.GHLabel.Updater> {
					public static class: java.lang.Class<org.kohsuke.github.GHLabel.Updater>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHLabelBuilder<S>  extends org.kohsuke.github.AbstractBuilder<org.kohsuke.github.GHLabel,any> {
				public static class: java.lang.Class<org.kohsuke.github.GHLabelBuilder<any>>;
				public description(value: string): any;
				public color(value: string): any;
				public name(value: string): any;
				public constructor(finalReturnType: java.lang.Class<any>, intermediateReturnType: java.lang.Class<any>, root: org.kohsuke.github.GitHub, baseInstance: any);
				public constructor(intermediateReturnType: java.lang.Class<any>, root: org.kohsuke.github.GitHub, baseInstance: org.kohsuke.github.GHLabel);
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHLabelChanges extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHLabelChanges>;
				public getName(): org.kohsuke.github.GHLabelChanges.GHFrom;
				public getColor(): org.kohsuke.github.GHLabelChanges.GHFrom;
				public constructor();
			}
			export module GHLabelChanges {
				export class GHFrom extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHLabelChanges.GHFrom>;
					public constructor();
					public getFrom(): string;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHLicense extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHLicense>;
				public key: string;
				public name: string;
				public featured: java.lang.Boolean;
				public html_url: string;
				public description: string;
				public category: string;
				public implementation: string;
				public body: string;
				public required: java.util.List<string>;
				public permitted: java.util.List<string>;
				public forbidden: java.util.List<string>;
				public isFeatured(): java.lang.Boolean;
				public getForbidden(): java.util.List<string>;
				public getHtmlUrl(): java.net.URL;
				public getRequired(): java.util.List<string>;
				public getName(): string;
				public getDescription(): string;
				public getImplementation(): string;
				public populate(): void;
				public getKey(): string;
				public constructor();
				public getCategory(): string;
				public getBody(): string;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public getPermitted(): java.util.List<string>;
				public equals(o: any): boolean;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMarketplaceAccount extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHMarketplaceAccount>;
				public getEmail(): string;
				public getLogin(): string;
				public getUrl(): java.net.URL;
				public getId(): number;
				public getOrganizationBillingEmail(): string;
				public getType(): org.kohsuke.github.GHMarketplaceAccountType;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMarketplaceAccountPlan extends org.kohsuke.github.GHMarketplaceAccount {
				public static class: java.lang.Class<org.kohsuke.github.GHMarketplaceAccountPlan>;
				public getMarketplacePendingChange(): org.kohsuke.github.GHMarketplacePendingChange;
				public getMarketplacePurchase(): org.kohsuke.github.GHMarketplacePurchase;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMarketplaceAccountType {
				public static class: java.lang.Class<org.kohsuke.github.GHMarketplaceAccountType>;
				public static ORGANIZATION: org.kohsuke.github.GHMarketplaceAccountType;
				public static USER: org.kohsuke.github.GHMarketplaceAccountType;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): org.kohsuke.github.GHMarketplaceAccountType[];
				public static valueOf(name: string): org.kohsuke.github.GHMarketplaceAccountType;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMarketplaceListAccountBuilder extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHMarketplaceListAccountBuilder>;
				public sort(sort: org.kohsuke.github.GHMarketplaceListAccountBuilder.Sort): org.kohsuke.github.GHMarketplaceListAccountBuilder;
				public direction(direction: org.kohsuke.github.GHDirection): org.kohsuke.github.GHMarketplaceListAccountBuilder;
				public createRequest(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHMarketplaceAccountPlan>;
			}
			export module GHMarketplaceListAccountBuilder {
				export class Sort {
					public static class: java.lang.Class<org.kohsuke.github.GHMarketplaceListAccountBuilder.Sort>;
					public static CREATED: org.kohsuke.github.GHMarketplaceListAccountBuilder.Sort;
					public static UPDATED: org.kohsuke.github.GHMarketplaceListAccountBuilder.Sort;
					public static values(): org.kohsuke.github.GHMarketplaceListAccountBuilder.Sort[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHMarketplaceListAccountBuilder.Sort;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMarketplacePendingChange extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHMarketplacePendingChange>;
				public getUnitCount(): java.lang.Long;
				public getId(): number;
				public getEffectiveDate(): java.util.Date;
				public getPlan(): org.kohsuke.github.GHMarketplacePlan;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMarketplacePlan extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHMarketplacePlan>;
				public getMonthlyPriceInCents(): number;
				public listAccounts(): org.kohsuke.github.GHMarketplaceListAccountBuilder;
				public getUrl(): java.net.URL;
				public getId(): number;
				public getUnitName(): string;
				public getName(): string;
				public getDescription(): string;
				public constructor();
				public getNumber(): number;
				public getBullets(): java.util.List<string>;
				public getPriceModel(): org.kohsuke.github.GHMarketplacePriceModel;
				public getState(): string;
				public getYearlyPriceInCents(): number;
				public getAccountsUrl(): string;
				public isFreeTrial(): boolean;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMarketplacePriceModel {
				public static class: java.lang.Class<org.kohsuke.github.GHMarketplacePriceModel>;
				public static FREE: org.kohsuke.github.GHMarketplacePriceModel;
				public static PER_UNIT: org.kohsuke.github.GHMarketplacePriceModel;
				public static FLAT_RATE: org.kohsuke.github.GHMarketplacePriceModel;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): org.kohsuke.github.GHMarketplacePriceModel;
				public symbol(): string;
				public static values(): org.kohsuke.github.GHMarketplacePriceModel[];
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMarketplacePurchase extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHMarketplacePurchase>;
				public getFreeTrialEndsOn(): java.util.Date;
				public getUnitCount(): java.lang.Long;
				public getBillingCycle(): string;
				public isOnFreeTrial(): boolean;
				public getNextBillingDate(): java.util.Date;
				public getPlan(): org.kohsuke.github.GHMarketplacePlan;
				public getUpdatedAt(): java.util.Date;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMarketplaceUserPurchase extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHMarketplaceUserPurchase>;
				public getFreeTrialEndsOn(): java.util.Date;
				public getUnitCount(): java.lang.Long;
				public getBillingCycle(): string;
				public isOnFreeTrial(): boolean;
				public getNextBillingDate(): java.util.Date;
				public getPlan(): org.kohsuke.github.GHMarketplacePlan;
				public getUpdatedAt(): java.util.Date;
				public getAccount(): org.kohsuke.github.GHMarketplaceAccount;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMembership extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHMembership>;
				public getState(): org.kohsuke.github.GHMembership.State;
				public getUrl(): java.net.URL;
				public activate(): void;
				public getUser(): org.kohsuke.github.GHUser;
				public getOrganization(): org.kohsuke.github.GHOrganization;
				public getRole(): org.kohsuke.github.GHMembership.Role;
				public constructor();
			}
			export module GHMembership {
				export class Role {
					public static class: java.lang.Class<org.kohsuke.github.GHMembership.Role>;
					public static ADMIN: org.kohsuke.github.GHMembership.Role;
					public static MEMBER: org.kohsuke.github.GHMembership.Role;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHMembership.Role;
					public static values(): org.kohsuke.github.GHMembership.Role[];
				}
				export class State {
					public static class: java.lang.Class<org.kohsuke.github.GHMembership.State>;
					public static ACTIVE: org.kohsuke.github.GHMembership.State;
					public static PENDING: org.kohsuke.github.GHMembership.State;
					public static values(): org.kohsuke.github.GHMembership.State[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHMembership.State;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMeta extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHMeta>;
				public getPages(): java.util.List<string>;
				public getGit(): java.util.List<string>;
				public getApi(): java.util.List<string>;
				public getPackages(): java.util.List<string>;
				public getDependabot(): java.util.List<string>;
				public isVerifiablePasswordAuthentication(): boolean;
				public getImporter(): java.util.List<string>;
				public getHooks(): java.util.List<string>;
				public getWeb(): java.util.List<string>;
				public constructor();
				public getActions(): java.util.List<string>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMilestone extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHMilestone>;
				public closed_at: string;
				/** @deprecated */
				public wrap(repo: org.kohsuke.github.GHRepository): org.kohsuke.github.GHMilestone;
				public close(): void;
				public getHtmlUrl(): java.net.URL;
				public reopen(): void;
				public getDescription(): string;
				public setDueOn(dueOn: java.util.Date): void;
				public getTitle(): string;
				public constructor();
				public getDueOn(): java.util.Date;
				public getClosedAt(): java.util.Date;
				public getNumber(): number;
				public setDescription(description: string): void;
				public getCreator(): org.kohsuke.github.GHUser;
				public delete(): void;
				public getOpenIssues(): number;
				public getApiRoute(): string;
				public getOwner(): org.kohsuke.github.GHRepository;
				public getState(): org.kohsuke.github.GHMilestoneState;
				public getClosedIssues(): number;
				public setTitle(title: string): void;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMilestoneState {
				public static class: java.lang.Class<org.kohsuke.github.GHMilestoneState>;
				public static OPEN: org.kohsuke.github.GHMilestoneState;
				public static CLOSED: org.kohsuke.github.GHMilestoneState;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): org.kohsuke.github.GHMilestoneState[];
				public static valueOf(name: string): org.kohsuke.github.GHMilestoneState;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHMyself extends org.kohsuke.github.GHUser {
				public static class: java.lang.Class<org.kohsuke.github.GHMyself>;
				public getEmails2(): java.util.List<org.kohsuke.github.GHEmail>;
				public getAppInstallations(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHAppInstallation>;
				public listRepositories(pageSize: number): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				/** @deprecated */
				public getEmails(): java.util.List<string>;
				public getPublicKeys(): java.util.List<org.kohsuke.github.GHKey>;
				public listOrgMemberships(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHMembership>;
				public listRepositories(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				public constructor();
				public getAllOrganizations(): org.kohsuke.github.GHPersonSet<org.kohsuke.github.GHOrganization>;
				public getMembership(o: org.kohsuke.github.GHOrganization): org.kohsuke.github.GHMembership;
				public getAllRepositories(): java.util.Map<string,org.kohsuke.github.GHRepository>;
				public listOrgMemberships(state: org.kohsuke.github.GHMembership.State): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHMembership>;
				public listRepositories(pageSize: number, repoType: org.kohsuke.github.GHMyself.RepositoryListFilter): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				public getPublicVerifiedKeys(): java.util.List<org.kohsuke.github.GHVerifiedKey>;
				/** @deprecated */
				public listAllRepositories(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
			}
			export module GHMyself {
				export class RepositoryListFilter {
					public static class: java.lang.Class<org.kohsuke.github.GHMyself.RepositoryListFilter>;
					public static ALL: org.kohsuke.github.GHMyself.RepositoryListFilter;
					public static OWNER: org.kohsuke.github.GHMyself.RepositoryListFilter;
					public static PUBLIC: org.kohsuke.github.GHMyself.RepositoryListFilter;
					public static PRIVATE: org.kohsuke.github.GHMyself.RepositoryListFilter;
					public static MEMBER: org.kohsuke.github.GHMyself.RepositoryListFilter;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHMyself.RepositoryListFilter;
					public static values(): org.kohsuke.github.GHMyself.RepositoryListFilter[];
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHNotificationStream extends org.kohsuke.github.GitHubInteractiveObject implements java.lang.Iterable<org.kohsuke.github.GHThread>  {
				public static class: java.lang.Class<org.kohsuke.github.GHNotificationStream>;
				public iterator(): java.util.Iterator<org.kohsuke.github.GHThread>;
				public since(timestamp: number): org.kohsuke.github.GHNotificationStream;
				public markAsRead(timestamp: number): void;
				public spliterator(): java.util.Spliterator<any>;
				public markAsRead(): void;
				public participating(v: boolean): org.kohsuke.github.GHNotificationStream;
				public read(v: boolean): org.kohsuke.github.GHNotificationStream;
				public since(dt: java.util.Date): org.kohsuke.github.GHNotificationStream;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public nonBlocking(v: boolean): org.kohsuke.github.GHNotificationStream;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHOTPRequiredException extends org.kohsuke.github.GHIOException {
				public static class: java.lang.Class<org.kohsuke.github.GHOTPRequiredException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GHObject extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHObject>;
				public responseHeaderFields: java.util.Map<string,java.util.List<string>>;
				public getHtmlUrl(): java.net.URL;
				public getUrl(): java.net.URL;
				public getId(): number;
				public getCreatedAt(): java.util.Date;
				public setResponseHeaderFields(connectorResponse: org.kohsuke.github.connector.GitHubConnectorResponse): void;
				public getNodeId(): string;
				public toString(): string;
				public getUpdatedAt(): java.util.Date;
				/** @deprecated */
				public getResponseHeaderFields(): java.util.Map<string,java.util.List<string>>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHOrgHook extends org.kohsuke.github.GHHook {
				public static class: java.lang.Class<org.kohsuke.github.GHOrgHook>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHOrganization extends org.kohsuke.github.GHPerson {
				public static class: java.lang.Class<org.kohsuke.github.GHOrganization>;
				public getTeams(): java.util.Map<string,org.kohsuke.github.GHTeam>;
				public listMembersWithRole(role: string): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				public listRepositories(pageSize: number): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				/** @deprecated */
				public getMembers(): java.util.List<org.kohsuke.github.GHUser>;
				/** @deprecated */
				public createTeam(name: string, p: org.kohsuke.github.GHOrganization.Permission, ...repositories: org.kohsuke.github.GHRepository[]): org.kohsuke.github.GHTeam;
				public listEvents(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHEventInfo>;
				public getHook(id: number): org.kohsuke.github.GHHook;
				public createWebHook(url: java.net.URL, events: java.util.Collection<org.kohsuke.github.GHEvent>): org.kohsuke.github.GHHook;
				public getRepositoriesWithOpenPullRequests(): java.util.List<org.kohsuke.github.GHRepository>;
				public conceal(u: org.kohsuke.github.GHUser): void;
				public areOrganizationProjectsEnabled(): boolean;
				public createTeam(name: string): org.kohsuke.github.GHTeamBuilder;
				public createWebHook(url: java.net.URL): org.kohsuke.github.GHHook;
				/** @deprecated */
				public createRepository(name: string, description: string, homepage: string, team: string, isPublic: boolean): org.kohsuke.github.GHRepository;
				public listRepositories(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				public constructor();
				public listProjects(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHProject>;
				public deleteHook(id: number): void;
				public remove(user: org.kohsuke.github.GHUser): void;
				public getTeamByName(name: string): org.kohsuke.github.GHTeam;
				public getTeamBySlug(slug: string): org.kohsuke.github.GHTeam;
				/** @deprecated */
				public createTeam(name: string, p: org.kohsuke.github.GHOrganization.Permission, repositories: java.util.Collection<org.kohsuke.github.GHRepository>): org.kohsuke.github.GHTeam;
				/** @deprecated */
				public createTeam(name: string, repositories: java.util.Collection<org.kohsuke.github.GHRepository>): org.kohsuke.github.GHTeam;
				public getPullRequests(): java.util.List<org.kohsuke.github.GHPullRequest>;
				public hasMember(user: org.kohsuke.github.GHUser): boolean;
				public listMembers(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				public listTeams(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHTeam>;
				public publicize(u: org.kohsuke.github.GHUser): void;
				public add(user: org.kohsuke.github.GHUser, role: org.kohsuke.github.GHOrganization.Role): void;
				public hasPublicMember(user: org.kohsuke.github.GHUser): boolean;
				public createRepository(name: string): org.kohsuke.github.GHCreateRepositoryBuilder;
				public createProject(name: string, body: string): org.kohsuke.github.GHProject;
				public enableOrganizationProjects(newStatus: boolean): void;
				/** @deprecated */
				public getTeam(teamId: number): org.kohsuke.github.GHTeam;
				public listMembersWithFilter(filter: string): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				/** @deprecated */
				public createRepository(name: string, description: string, homepage: string, team: org.kohsuke.github.GHTeam, isPublic: boolean): org.kohsuke.github.GHRepository;
				public listProjects(status: org.kohsuke.github.GHProject.ProjectStateFilter): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHProject>;
				public getHooks(): java.util.List<org.kohsuke.github.GHHook>;
				public getTeam(teamId: number): org.kohsuke.github.GHTeam;
				public listPublicMembers(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				/** @deprecated */
				public createTeam(name: string, ...repositories: org.kohsuke.github.GHRepository[]): org.kohsuke.github.GHTeam;
				public createHook(name: string, config: java.util.Map<string,string>, events: java.util.Collection<org.kohsuke.github.GHEvent>, active: boolean): org.kohsuke.github.GHHook;
			}
			export module GHOrganization {
				export class Permission {
					public static class: java.lang.Class<org.kohsuke.github.GHOrganization.Permission>;
					public static ADMIN: org.kohsuke.github.GHOrganization.Permission;
					public static MAINTAIN: org.kohsuke.github.GHOrganization.Permission;
					public static PUSH: org.kohsuke.github.GHOrganization.Permission;
					public static TRIAGE: org.kohsuke.github.GHOrganization.Permission;
					public static PULL: org.kohsuke.github.GHOrganization.Permission;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHOrganization.Permission;
					public static values(): org.kohsuke.github.GHOrganization.Permission[];
				}
				export class RepositoryRole extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHOrganization.RepositoryRole>;
					public toString(): string;
					public static from(permission: org.kohsuke.github.GHOrganization.Permission): org.kohsuke.github.GHOrganization.RepositoryRole;
					public static custom(permission: string): org.kohsuke.github.GHOrganization.RepositoryRole;
				}
				export class Role {
					public static class: java.lang.Class<org.kohsuke.github.GHOrganization.Role>;
					public static ADMIN: org.kohsuke.github.GHOrganization.Role;
					public static MEMBER: org.kohsuke.github.GHOrganization.Role;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHOrganization.Role;
					public static values(): org.kohsuke.github.GHOrganization.Role[];
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPermission extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHPermission>;
				public getPermissionType(): org.kohsuke.github.GHPermissionType;
				public getUser(): org.kohsuke.github.GHUser;
				public getPermission(): string;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPermissionType {
				public static class: java.lang.Class<org.kohsuke.github.GHPermissionType>;
				public static ADMIN: org.kohsuke.github.GHPermissionType;
				public static WRITE: org.kohsuke.github.GHPermissionType;
				public static READ: org.kohsuke.github.GHPermissionType;
				public static NONE: org.kohsuke.github.GHPermissionType;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): org.kohsuke.github.GHPermissionType;
				public static values(): org.kohsuke.github.GHPermissionType[];
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GHPerson extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHPerson>;
				public login: string;
				public avatar_url: string;
				public location: string;
				public blog: string;
				public email: string;
				public bio: string;
				public name: string;
				public company: string;
				public type: string;
				public twitter_username: string;
				public html_url: string;
				public followers: number;
				public following: number;
				public public_repos: number;
				public public_gists: number;
				public site_admin: boolean;
				public hireable: boolean;
				public total_private_repos: java.lang.Integer;
				public listRepositories(pageSize: number): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				public getPublicRepoCount(): number;
				public listEvents(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHEventInfo>;
				public getAvatarUrl(): string;
				public getRepositories(): java.util.Map<string,org.kohsuke.github.GHRepository>;
				public getCreatedAt(): java.util.Date;
				public getCompany(): string;
				public listRepositories(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				public populate(): void;
				public constructor();
				public getTwitterUsername(): string;
				public getFollowingCount(): number;
				public getType(): string;
				/** @deprecated */
				public iterateRepositories(pageSize: number): java.lang.Iterable<java.util.List<org.kohsuke.github.GHRepository>>;
				public getRepository(name: string): org.kohsuke.github.GHRepository;
				public getEmail(): string;
				public getHtmlUrl(): java.net.URL;
				public getLocation(): string;
				public getName(): string;
				/** @deprecated */
				public getGravatarId(): string;
				public getUpdatedAt(): java.util.Date;
				public getLogin(): string;
				public getPublicGistCount(): number;
				public isSiteAdmin(): boolean;
				public getBlog(): string;
				public getFollowersCount(): number;
				public getTotalPrivateRepoCount(): java.util.Optional<java.lang.Integer>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPersonSet<T>  extends java.util.HashSet<any> {
				public static class: java.lang.Class<org.kohsuke.github.GHPersonSet<any>>;
				public parallelStream(): java.util.stream.Stream<any>;
				public addAll(param0: java.util.Collection<any>): boolean;
				public toArray(a: any[]): any[];
				public removeAll(c: java.util.Collection<any>): boolean;
				public constructor();
				public add(e: any): boolean;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public constructor(...c: any[]);
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public constructor(c: java.util.Collection<any>);
				public addAll(c: java.util.Collection<any>): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
				public byLogin(login: string): any;
				public contains(o: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public constructor(initialCapacity: number, loadFactor: number);
				public iterator(): java.util.Iterator<any>;
				public remove(o: any): boolean;
				public toArray(): any[];
				public retainAll(param0: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public toArray(param0: any[]): any[];
				public removeIf(filter: any /* any*/): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public constructor(initialCapacity: number);
				public retainAll(c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHProject extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHProject>;
				public owner: org.kohsuke.github.GHObject;
				public getOwnerUrl(): java.net.URL;
				/** @deprecated */
				public wrap(root: org.kohsuke.github.GitHub): org.kohsuke.github.GHProject;
				public getOwner(): org.kohsuke.github.GHObject;
				public getHtmlUrl(): java.net.URL;
				public setBody(body: string): void;
				/** @deprecated */
				public wrap(repo: org.kohsuke.github.GHRepository): org.kohsuke.github.GHProject;
				public setState(state: org.kohsuke.github.GHProject.ProjectState): void;
				public setName(name: string): void;
				public setPublic(isPublic: boolean): void;
				public getName(): string;
				public setOrganizationPermission(permission: org.kohsuke.github.GHPermissionType): void;
				public constructor();
				public getNumber(): number;
				public getState(): org.kohsuke.github.GHProject.ProjectState;
				public getBody(): string;
				public listColumns(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHProjectColumn>;
				public getCreator(): org.kohsuke.github.GHUser;
				public delete(): void;
				public getApiRoute(): string;
				/** @deprecated */
				public getNode_id(): string;
				public createColumn(name: string): org.kohsuke.github.GHProjectColumn;
			}
			export module GHProject {
				export class ProjectState {
					public static class: java.lang.Class<org.kohsuke.github.GHProject.ProjectState>;
					public static OPEN: org.kohsuke.github.GHProject.ProjectState;
					public static CLOSED: org.kohsuke.github.GHProject.ProjectState;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.kohsuke.github.GHProject.ProjectState[];
					public static valueOf(name: string): org.kohsuke.github.GHProject.ProjectState;
				}
				export class ProjectStateFilter {
					public static class: java.lang.Class<org.kohsuke.github.GHProject.ProjectStateFilter>;
					public static ALL: org.kohsuke.github.GHProject.ProjectStateFilter;
					public static OPEN: org.kohsuke.github.GHProject.ProjectStateFilter;
					public static CLOSED: org.kohsuke.github.GHProject.ProjectStateFilter;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.kohsuke.github.GHProject.ProjectStateFilter[];
					public static valueOf(name: string): org.kohsuke.github.GHProject.ProjectStateFilter;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHProjectCard extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHProjectCard>;
				public isArchived(): boolean;
				public setArchived(archived: boolean): void;
				public getHtmlUrl(): java.net.URL;
				public getColumnUrl(): java.net.URL;
				public constructor();
				public setNote(note: string): void;
				public getProjectUrl(): java.net.URL;
				/** @deprecated */
				public wrap(root: org.kohsuke.github.GitHub): org.kohsuke.github.GHProjectCard;
				public getCreator(): org.kohsuke.github.GHUser;
				public delete(): void;
				public getApiRoute(): string;
				public getContentUrl(): java.net.URL;
				public getProject(): org.kohsuke.github.GHProject;
				public getColumn(): org.kohsuke.github.GHProjectColumn;
				public getNote(): string;
				public getContent(): org.kohsuke.github.GHIssue;
				/** @deprecated */
				public wrap(column: org.kohsuke.github.GHProjectColumn): org.kohsuke.github.GHProjectCard;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHProjectColumn extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHProjectColumn>;
				public project: org.kohsuke.github.GHProject;
				/** @deprecated */
				public wrap(root: org.kohsuke.github.GitHub): org.kohsuke.github.GHProjectColumn;
				/** @deprecated */
				public wrap(project: org.kohsuke.github.GHProject): org.kohsuke.github.GHProjectColumn;
				public getHtmlUrl(): java.net.URL;
				public setName(name: string): void;
				public getName(): string;
				public createCard(issue: org.kohsuke.github.GHIssue): org.kohsuke.github.GHProjectCard;
				public createCard(note: string): org.kohsuke.github.GHProjectCard;
				public constructor();
				public listCards(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHProjectCard>;
				public getProjectUrl(): java.net.URL;
				public delete(): void;
				public getApiRoute(): string;
				public getProject(): org.kohsuke.github.GHProject;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPullRequest extends org.kohsuke.github.GHIssue implements org.kohsuke.github.Refreshable {
				public static class: java.lang.Class<org.kohsuke.github.GHPullRequest>;
				public getRequestedTeams(): java.util.List<org.kohsuke.github.GHTeam>;
				public updateBranch(): void;
				public canMaintainerModify(): boolean;
				public getPatchUrl(): java.net.URL;
				public getAdditions(): number;
				public getMergeCommitSha(): string;
				public getMergeable(): java.lang.Boolean;
				public getAutoMerge(): org.kohsuke.github.GHPullRequest.AutoMerge;
				public listReviewComments(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHPullRequestReviewComment>;
				public constructor();
				/** @deprecated */
				public createReview(body: string, event: org.kohsuke.github.GHPullRequestReviewState, comments: java.util.List<org.kohsuke.github.GHPullRequestReviewComment>): org.kohsuke.github.GHPullRequestReview;
				public getMergedAt(): java.util.Date;
				public createReview(): org.kohsuke.github.GHPullRequestReviewBuilder;
				public setBaseBranch(newBaseBranch: string): org.kohsuke.github.GHPullRequest;
				public merge(msg: string, sha: string): void;
				public getBase(): org.kohsuke.github.GHCommitPointer;
				public isDraft(): boolean;
				public requestTeamReviewers(teams: java.util.List<org.kohsuke.github.GHTeam>): void;
				public merge(msg: string, sha: string, method: org.kohsuke.github.GHPullRequest.MergeMethod): void;
				public createReaction(param0: org.kohsuke.github.ReactionContent): org.kohsuke.github.GHReaction;
				public getDiffUrl(): java.net.URL;
				public getIssueUrl(): java.net.URL;
				public deleteReaction(param0: org.kohsuke.github.GHReaction): void;
				public getHead(): org.kohsuke.github.GHCommitPointer;
				public getChangedFiles(): number;
				public getDeletions(): number;
				public deleteReaction(reaction: org.kohsuke.github.GHReaction): void;
				public listFiles(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHPullRequestFileDetail>;
				public createReaction(content: org.kohsuke.github.ReactionContent): org.kohsuke.github.GHReaction;
				public listReviews(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHPullRequestReview>;
				public isMerged(): boolean;
				public listCommits(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHPullRequestCommitDetail>;
				public createReviewComment(body: string, sha: string, path: string, position: number): org.kohsuke.github.GHPullRequestReviewComment;
				/** @deprecated */
				public getIssueUpdatedAt(): java.util.Date;
				public getMergedBy(): org.kohsuke.github.GHUser;
				public getCommits(): number;
				public getMergeableState(): string;
				public getRequestedReviewers(): java.util.List<org.kohsuke.github.GHUser>;
				public merge(msg: string): void;
				public requestReviewers(reviewers: java.util.List<org.kohsuke.github.GHUser>): void;
				public listReactions(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHReaction>;
				public refresh(): void;
				public getApiRoute(): string;
				public refresh(value: any): void;
				public getClosedBy(): org.kohsuke.github.GHUser;
				/** @deprecated */
				public createReview(body: string, event: org.kohsuke.github.GHPullRequestReviewState, ...comments: org.kohsuke.github.GHPullRequestReviewComment[]): org.kohsuke.github.GHPullRequestReview;
				public getReviewComments(): number;
				public getPullRequest(): org.kohsuke.github.GHIssue.PullRequest;
			}
			export module GHPullRequest {
				export class AutoMerge extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHPullRequest.AutoMerge>;
					public getEnabledBy(): org.kohsuke.github.GHUser;
					public constructor();
					public getCommitTitle(): string;
					public getCommitMessage(): string;
					public getMergeMethod(): org.kohsuke.github.GHPullRequest.MergeMethod;
				}
				export class MergeMethod {
					public static class: java.lang.Class<org.kohsuke.github.GHPullRequest.MergeMethod>;
					public static MERGE: org.kohsuke.github.GHPullRequest.MergeMethod;
					public static SQUASH: org.kohsuke.github.GHPullRequest.MergeMethod;
					public static REBASE: org.kohsuke.github.GHPullRequest.MergeMethod;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHPullRequest.MergeMethod;
					public static values(): org.kohsuke.github.GHPullRequest.MergeMethod[];
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPullRequestChanges extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHPullRequestChanges>;
				public getTitle(): org.kohsuke.github.GHPullRequestChanges.GHFrom;
				public getBase(): org.kohsuke.github.GHPullRequestChanges.GHCommitPointer;
				public getBody(): org.kohsuke.github.GHPullRequestChanges.GHFrom;
				public constructor();
			}
			export module GHPullRequestChanges {
				export class GHCommitPointer extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHPullRequestChanges.GHCommitPointer>;
					public getRef(): org.kohsuke.github.GHPullRequestChanges.GHFrom;
					public constructor();
					public getSha(): org.kohsuke.github.GHPullRequestChanges.GHFrom;
				}
				export class GHFrom extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHPullRequestChanges.GHFrom>;
					public constructor();
					public getFrom(): string;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPullRequestCommitDetail extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHPullRequestCommitDetail>;
				public getApiUrl(): java.net.URL;
				public getUrl(): java.net.URL;
				public getParents(): org.kohsuke.github.GHPullRequestCommitDetail.CommitPointer[];
				public getSha(): string;
				public getCommentsUrl(): java.net.URL;
				public constructor();
				public getCommit(): org.kohsuke.github.GHPullRequestCommitDetail.Commit;
			}
			export module GHPullRequestCommitDetail {
				export class Authorship extends org.kohsuke.github.GitUser {
					public static class: java.lang.Class<org.kohsuke.github.GHPullRequestCommitDetail.Authorship>;
					public constructor();
					public constructor(user: org.kohsuke.github.GitUser);
				}
				export class Commit extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHPullRequestCommitDetail.Commit>;
					public getCommitter(): org.kohsuke.github.GitUser;
					public constructor();
					public getAuthor(): org.kohsuke.github.GitUser;
					public getMessage(): string;
					public getComment_count(): number;
					public getTree(): org.kohsuke.github.GHPullRequestCommitDetail.Tree;
					public getUrl(): java.net.URL;
				}
				export class CommitPointer extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHPullRequestCommitDetail.CommitPointer>;
					public getSha(): string;
					public constructor();
					public getHtml_url(): java.net.URL;
					public getUrl(): java.net.URL;
				}
				export class Tree extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHPullRequestCommitDetail.Tree>;
					public getSha(): string;
					public constructor();
					public getUrl(): java.net.URL;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPullRequestFileDetail extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHPullRequestFileDetail>;
				public getChanges(): number;
				public getPatch(): string;
				public getStatus(): string;
				public getPreviousFilename(): string;
				public getAdditions(): number;
				public getContentsUrl(): java.net.URL;
				public getRawUrl(): java.net.URL;
				public getFilename(): string;
				public getDeletions(): number;
				public getBlobUrl(): java.net.URL;
				public getSha(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPullRequestQueryBuilder extends org.kohsuke.github.GHQueryBuilder<org.kohsuke.github.GHPullRequest> {
				public static class: java.lang.Class<org.kohsuke.github.GHPullRequestQueryBuilder>;
				public base(base: string): org.kohsuke.github.GHPullRequestQueryBuilder;
				public list(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHPullRequest>;
				public list(): org.kohsuke.github.PagedIterable<any>;
				public direction(d: org.kohsuke.github.GHDirection): org.kohsuke.github.GHPullRequestQueryBuilder;
				public sort(sort: org.kohsuke.github.GHPullRequestQueryBuilder.Sort): org.kohsuke.github.GHPullRequestQueryBuilder;
				public head(head: string): org.kohsuke.github.GHPullRequestQueryBuilder;
				public state(state: org.kohsuke.github.GHIssueState): org.kohsuke.github.GHPullRequestQueryBuilder;
			}
			export module GHPullRequestQueryBuilder {
				export class Sort {
					public static class: java.lang.Class<org.kohsuke.github.GHPullRequestQueryBuilder.Sort>;
					public static CREATED: org.kohsuke.github.GHPullRequestQueryBuilder.Sort;
					public static UPDATED: org.kohsuke.github.GHPullRequestQueryBuilder.Sort;
					public static POPULARITY: org.kohsuke.github.GHPullRequestQueryBuilder.Sort;
					public static LONG_RUNNING: org.kohsuke.github.GHPullRequestQueryBuilder.Sort;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHPullRequestQueryBuilder.Sort;
					public static values(): org.kohsuke.github.GHPullRequestQueryBuilder.Sort[];
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPullRequestReview extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHPullRequestReview>;
				public submit(body: string, event: org.kohsuke.github.GHPullRequestReviewEvent): void;
				public getHtmlUrl(): java.net.URL;
				/** @deprecated */
				public submit(body: string, state: org.kohsuke.github.GHPullRequestReviewState): void;
				public dismiss(message: string): void;
				public getState(): org.kohsuke.github.GHPullRequestReviewState;
				public getUser(): org.kohsuke.github.GHUser;
				public getCreatedAt(): java.util.Date;
				public getCommitId(): string;
				public listReviewComments(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHPullRequestReviewComment>;
				public constructor();
				public getBody(): string;
				public delete(): void;
				public getApiRoute(): string;
				public getParent(): org.kohsuke.github.GHPullRequest;
				public getSubmittedAt(): java.util.Date;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPullRequestReviewBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHPullRequestReviewBuilder>;
				public comment(body: string, path: string, position: number): org.kohsuke.github.GHPullRequestReviewBuilder;
				public event(event: org.kohsuke.github.GHPullRequestReviewEvent): org.kohsuke.github.GHPullRequestReviewBuilder;
				public commitId(commitId: string): org.kohsuke.github.GHPullRequestReviewBuilder;
				public create(): org.kohsuke.github.GHPullRequestReview;
				public body(body: string): org.kohsuke.github.GHPullRequestReviewBuilder;
			}
			export module GHPullRequestReviewBuilder {
				export class DraftReviewComment extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHPullRequestReviewBuilder.DraftReviewComment>;
					public getPath(): string;
					public getBody(): string;
					public getPosition(): number;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPullRequestReviewComment extends org.kohsuke.github.GHObject implements org.kohsuke.github.Reactable {
				public static class: java.lang.Class<org.kohsuke.github.GHPullRequestReviewComment>;
				public getAuthorAssociation(): org.kohsuke.github.GHCommentAuthorAssociation;
				public getDiffHunk(): string;
				public deleteReaction(param0: org.kohsuke.github.GHReaction): void;
				public getInReplyToId(): number;
				public getApiRoute(includePullNumber: boolean): string;
				public getHtmlUrl(): java.net.URL;
				public update(body: string): void;
				public deleteReaction(reaction: org.kohsuke.github.GHReaction): void;
				public getUser(): org.kohsuke.github.GHUser;
				public getPosition(): number;
				public getPath(): string;
				public getCommitId(): string;
				public createReaction(content: org.kohsuke.github.ReactionContent): org.kohsuke.github.GHReaction;
				public getOriginalCommitId(): string;
				public getOriginalPosition(): number;
				public constructor();
				/** @deprecated */
				public static draft(body: string, path: string, position: number): org.kohsuke.github.GHPullRequestReviewComment;
				public reply(body: string): org.kohsuke.github.GHPullRequestReviewComment;
				public getBody(): string;
				public listReactions(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHReaction>;
				public delete(): void;
				public getApiRoute(): string;
				public getParent(): org.kohsuke.github.GHPullRequest;
				public createReaction(param0: org.kohsuke.github.ReactionContent): org.kohsuke.github.GHReaction;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPullRequestReviewEvent {
				public static class: java.lang.Class<org.kohsuke.github.GHPullRequestReviewEvent>;
				public static PENDING: org.kohsuke.github.GHPullRequestReviewEvent;
				public static APPROVE: org.kohsuke.github.GHPullRequestReviewEvent;
				public static REQUEST_CHANGES: org.kohsuke.github.GHPullRequestReviewEvent;
				public static COMMENT: org.kohsuke.github.GHPullRequestReviewEvent;
				public static values(): org.kohsuke.github.GHPullRequestReviewEvent[];
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): org.kohsuke.github.GHPullRequestReviewEvent;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHPullRequestReviewState {
				public static class: java.lang.Class<org.kohsuke.github.GHPullRequestReviewState>;
				public static PENDING: org.kohsuke.github.GHPullRequestReviewState;
				public static APPROVED: org.kohsuke.github.GHPullRequestReviewState;
				public static CHANGES_REQUESTED: org.kohsuke.github.GHPullRequestReviewState;
				public static REQUEST_CHANGES: org.kohsuke.github.GHPullRequestReviewState;
				public static COMMENTED: org.kohsuke.github.GHPullRequestReviewState;
				public static DISMISSED: org.kohsuke.github.GHPullRequestReviewState;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): org.kohsuke.github.GHPullRequestReviewState[];
				/** @deprecated */
				public action(): string;
				public static valueOf(name: string): org.kohsuke.github.GHPullRequestReviewState;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GHQueryBuilder<T>  extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHQueryBuilder<any>>;
				public req: org.kohsuke.github.Requester;
				public list(): org.kohsuke.github.PagedIterable<any>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHRateLimit extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHRateLimit>;
				public remaining: number;
				public limit: number;
				public reset: java.util.Date;
				public getSearch(): org.kohsuke.github.GHRateLimit.Record;
				public getIntegrationManifest(): org.kohsuke.github.GHRateLimit.Record;
				public getRemaining(): number;
				public getResetDate(): java.util.Date;
				public getGraphQL(): org.kohsuke.github.GHRateLimit.Record;
				public toString(): string;
				public equals(obj: any): boolean;
				public isExpired(): boolean;
				public getCore(): org.kohsuke.github.GHRateLimit.Record;
				public hashCode(): number;
				public getResetEpochSeconds(): number;
				public equals(o: any): boolean;
				public getLimit(): number;
			}
			export module GHRateLimit {
				export class Record extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHRateLimit.Record>;
					public toString(): string;
					public equals(obj: any): boolean;
					public getRemaining(): number;
					public getResetEpochSeconds(): number;
					public isExpired(): boolean;
					public getLimit(): number;
					public constructor(limit: number, remaining: number, resetEpochSeconds: number);
					public equals(o: any): boolean;
					public hashCode(): number;
					public getResetDate(): java.util.Date;
				}
				export class UnknownLimitRecord extends org.kohsuke.github.GHRateLimit.Record {
					public static class: java.lang.Class<org.kohsuke.github.GHRateLimit.UnknownLimitRecord>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHReaction extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHReaction>;
				/** @deprecated */
				public getHtmlUrl(): java.net.URL;
				public getContent(): org.kohsuke.github.ReactionContent;
				/** @deprecated */
				public delete(): void;
				public getHtmlUrl(): java.net.URL;
				public getUser(): org.kohsuke.github.GHUser;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHRef extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHRef>;
				public getRef(): string;
				public delete(): void;
				public getObject(): org.kohsuke.github.GHRef.GHObject;
				public getUrl(): java.net.URL;
				public updateTo(sha: string): void;
				public updateTo(sha: string, force: java.lang.Boolean): void;
				public constructor();
			}
			export module GHRef {
				export class GHObject extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHRef.GHObject>;
					public getSha(): string;
					public constructor();
					public getType(): string;
					public getUrl(): java.net.URL;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHRelease extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHRelease>;
				public getZipballUrl(): string;
				/** @deprecated */
				public assets(): java.util.List<org.kohsuke.github.GHAsset>;
				public setName(name: string): void;
				public listAssets(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHAsset>;
				public constructor();
				public isPrerelease(): boolean;
				public delete(): void;
				public getUploadUrl(): string;
				public isDraft(): boolean;
				public getTarballUrl(): string;
				public getPublished_at(): java.util.Date;
				public getHtmlUrl(): java.net.URL;
				public uploadAsset(file: java.io.File, contentType: string): org.kohsuke.github.GHAsset;
				public getName(): string;
				public getTargetCommitish(): string;
				public getDiscussionUrl(): string;
				public uploadAsset(filename: string, stream: java.io.InputStream, contentType: string): org.kohsuke.github.GHAsset;
				public getAssetsUrl(): string;
				/** @deprecated */
				public setDraft(draft: boolean): org.kohsuke.github.GHRelease;
				public getBody(): string;
				public update(): org.kohsuke.github.GHReleaseUpdater;
				public getOwner(): org.kohsuke.github.GHRepository;
				/** @deprecated */
				public setOwner(owner: org.kohsuke.github.GHRepository): void;
				public getTagName(): string;
				/** @deprecated */
				public getAssets(): java.util.List<org.kohsuke.github.GHAsset>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHReleaseBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHReleaseBuilder>;
				public body(body: string): org.kohsuke.github.GHReleaseBuilder;
				public draft(draft: boolean): org.kohsuke.github.GHReleaseBuilder;
				public commitish(commitish: string): org.kohsuke.github.GHReleaseBuilder;
				public name(name: string): org.kohsuke.github.GHReleaseBuilder;
				public constructor(ghRepository: org.kohsuke.github.GHRepository, tag: string);
				public categoryName(categoryName: string): org.kohsuke.github.GHReleaseBuilder;
				public prerelease(prerelease: boolean): org.kohsuke.github.GHReleaseBuilder;
				public create(): org.kohsuke.github.GHRelease;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHReleaseUpdater extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHReleaseUpdater>;
				public draft(draft: boolean): org.kohsuke.github.GHReleaseUpdater;
				public update(): org.kohsuke.github.GHRelease;
				public body(body: string): org.kohsuke.github.GHReleaseUpdater;
				public name(name: string): org.kohsuke.github.GHReleaseUpdater;
				public commitish(commitish: string): org.kohsuke.github.GHReleaseUpdater;
				public prerelease(prerelease: boolean): org.kohsuke.github.GHReleaseUpdater;
				public tag(tag: string): org.kohsuke.github.GHReleaseUpdater;
				public categoryName(categoryName: string): org.kohsuke.github.GHReleaseUpdater;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHRepoHook extends org.kohsuke.github.GHHook {
				public static class: java.lang.Class<org.kohsuke.github.GHRepoHook>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHRepository extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHRepository>;
				public renderMarkdown(text: string, mode: org.kohsuke.github.MarkdownMode): java.io.Reader;
				public listLanguages(): java.util.Map<string,java.lang.Long>;
				public getHttpTransportUrl(): string;
				public renameTo(name: string): void;
				public listStargazers(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				/** @deprecated */
				public getDeploymentStatuses(id: number): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHDeploymentStatus>;
				public listProjects(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHProject>;
				public hasPushAccess(): boolean;
				public getSvnUrl(): string;
				public createRelease(tag: string): org.kohsuke.github.GHReleaseBuilder;
				public getPermission(u: org.kohsuke.github.GHUser): org.kohsuke.github.GHPermissionType;
				public hasIssues(): boolean;
				/** @deprecated */
				public createContent(content: string, commitMessage: string, path: string, branch: string): org.kohsuke.github.GHContentUpdateResponse;
				/** @deprecated */
				public listIssues(state: org.kohsuke.github.GHIssueState): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHIssue>;
				public getWorkflowJob(id: number): org.kohsuke.github.GHWorkflowJob;
				public getFileContent(path: string, ref: string): org.kohsuke.github.GHContent;
				/** @deprecated */
				public createContent(content: string, commitMessage: string, path: string): org.kohsuke.github.GHContentUpdateResponse;
				public getWatchersCount(): number;
				/** @deprecated */
				public listPullRequests(state: org.kohsuke.github.GHIssueState): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHPullRequest>;
				public hasPermission(user: string, permission: org.kohsuke.github.GHPermissionType): boolean;
				public getCollaborators(): org.kohsuke.github.GHPersonSet<org.kohsuke.github.GHUser>;
				/** @deprecated */
				public getMilestones(): java.util.Map<java.lang.Integer,org.kohsuke.github.GHMilestone>;
				public listReleases(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRelease>;
				public getHomepage(): string;
				public hasDownloads(): boolean;
				public getTreeRecursive(sha: string, recursive: number): org.kohsuke.github.GHTree;
				public listMilestones(state: org.kohsuke.github.GHIssueState): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHMilestone>;
				public createRef(name: string, sha: string): org.kohsuke.github.GHRef;
				public readTar(streamFunction: org.kohsuke.github.function.InputStreamFunction<any>, ref: string): any;
				public getOwner(): org.kohsuke.github.GHUser;
				public getCollaboratorNames(affiliation: org.kohsuke.github.GHRepository.CollaboratorAffiliation): java.util.Set<string>;
				public delete(): void;
				public archive(): void;
				public getPermission(user: string): org.kohsuke.github.GHPermissionType;
				public getFileContent(path: string): org.kohsuke.github.GHContent;
				public getRelease(id: number): org.kohsuke.github.GHRelease;
				public hasPermission(user: org.kohsuke.github.GHUser, permission: org.kohsuke.github.GHPermissionType): boolean;
				public getStargazersCount(): number;
				public isArchived(): boolean;
				public getHtmlUrl(): java.net.URL;
				public getSubscription(): org.kohsuke.github.GHSubscription;
				public listCollaborators(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				public removeCollaborators(users: java.util.Collection<org.kohsuke.github.GHUser>): void;
				public getLabel(name: string): org.kohsuke.github.GHLabel;
				public listRefs(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRef>;
				public set(): org.kohsuke.github.GHRepository.Setter;
				public dispatch(eventType: string, clientPayload: any): void;
				public getWorkflow(id: number): org.kohsuke.github.GHWorkflow;
				public listEvents(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHEventInfo>;
				public isFork(): boolean;
				public getIssueEvent(id: number): org.kohsuke.github.GHIssueEvent;
				public fork(): org.kohsuke.github.GHRepository;
				public listAssignees(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				public getCollaboratorNames(): java.util.Set<string>;
				public getRef(refName: string): org.kohsuke.github.GHRef;
				/** @deprecated */
				public getPostCommitHooks(): java.util.Set<java.net.URL>;
				public hashCode(): number;
				public getCompare(id1: org.kohsuke.github.GHBranch, id2: org.kohsuke.github.GHBranch): org.kohsuke.github.GHCompare;
				public getLastCommitStatus(sha1: string): org.kohsuke.github.GHCommitStatus;
				public getIssues(state: org.kohsuke.github.GHIssueState): java.util.List<org.kohsuke.github.GHIssue>;
				public hasWiki(): boolean;
				public listCommits(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHCommit>;
				public getTagObject(sha: string): org.kohsuke.github.GHTagObject;
				public getMilestone(number: number): org.kohsuke.github.GHMilestone;
				public getFullName(): string;
				/** @deprecated */
				public addCollaborators(permission: org.kohsuke.github.GHOrganization.Permission, ...users: org.kohsuke.github.GHUser[]): void;
				public createIssue(title: string): org.kohsuke.github.GHIssueBuilder;
				public forkTo(org: org.kohsuke.github.GHOrganization): org.kohsuke.github.GHRepository;
				/** @deprecated */
				public createDeployStatus(deploymentId: number, ghDeploymentState: org.kohsuke.github.GHDeploymentState): org.kohsuke.github.GHDeploymentStatusBuilder;
				public getDeployment(id: number): org.kohsuke.github.GHDeployment;
				public getOpenIssueCount(): number;
				public isAllowSquashMerge(): boolean;
				public listCommitComments(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHCommitComment>;
				public hasAdminAccess(): boolean;
				public getArtifact(id: number): org.kohsuke.github.GHArtifact;
				public setHomepage(value: string): void;
				public getSource(): org.kohsuke.github.GHRepository;
				public getReleaseByTagName(tag: string): org.kohsuke.github.GHRelease;
				public setDefaultBranch(value: string): void;
				public hasPullAccess(): boolean;
				/** @deprecated */
				public getReleases(): java.util.List<org.kohsuke.github.GHRelease>;
				public hasPages(): boolean;
				public createMilestone(title: string, description: string): org.kohsuke.github.GHMilestone;
				/** @deprecated */
				public createContent(contentBytes: number[], commitMessage: string, path: string, branch: string): org.kohsuke.github.GHContentUpdateResponse;
				public getLicenseContent(): org.kohsuke.github.GHContent;
				public getTree(sha: string): org.kohsuke.github.GHTree;
				public createContent(): org.kohsuke.github.GHContentBuilder;
				public removeCollaborators(...users: org.kohsuke.github.GHUser[]): void;
				public listStargazers2(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHStargazer>;
				public listForks(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				public getLatestRelease(): org.kohsuke.github.GHRelease;
				/** @deprecated */
				public addCollaborators(users: java.util.Collection<org.kohsuke.github.GHUser>, permission: org.kohsuke.github.GHOrganization.Permission): void;
				public isAllowMergeCommit(): boolean;
				public listRefs(refType: string): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRef>;
				public getBranches(): java.util.Map<string,org.kohsuke.github.GHBranch>;
				public getPushedAt(): java.util.Date;
				public addDeployKey(title: string, key: string): org.kohsuke.github.GHDeployKey;
				public createWebHook(url: java.net.URL, events: java.util.Collection<org.kohsuke.github.GHEvent>): org.kohsuke.github.GHHook;
				public setTopics(topics: java.util.List<string>): void;
				public listTopics(): java.util.List<string>;
				public createWebHook(url: java.net.URL): org.kohsuke.github.GHHook;
				public deleteBranchOnMerge(value: boolean): void;
				public createCommitStatus(sha1: string, state: org.kohsuke.github.GHCommitState, targetUrl: string, description: string, context: string): org.kohsuke.github.GHCommitStatus;
				public readBlob(blobSha: string): java.io.InputStream;
				public getCheckRuns(ref: string): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHCheckRun>;
				public getDeployKeys(): java.util.List<org.kohsuke.github.GHDeployKey>;
				public listForks(sort: org.kohsuke.github.GHRepository.ForkSort): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				public listContributors(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository.Contributor>;
				public listLabels(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHLabel>;
				public createLabel(name: string, color: string, description: string): org.kohsuke.github.GHLabel;
				public subscribe(subscribed: boolean, ignored: boolean): org.kohsuke.github.GHSubscription;
				public readZip(streamFunction: org.kohsuke.github.function.InputStreamFunction<any>, ref: string): any;
				public enableIssueTracker(v: boolean): void;
				public listWorkflows(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHWorkflow>;
				public listDeployments(sha: string, ref: string, task: string, environment: string): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHDeployment>;
				public listProjects(status: org.kohsuke.github.GHProject.ProjectStateFilter): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHProject>;
				public createTree(): org.kohsuke.github.GHTreeBuilder;
				public getLanguage(): string;
				public listArtifacts(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHArtifact>;
				public addCollaborators(...users: org.kohsuke.github.GHUser[]): void;
				public getGitTransportUrl(): string;
				public getPullRequests(state: org.kohsuke.github.GHIssueState): java.util.List<org.kohsuke.github.GHPullRequest>;
				public listCommitComments(commitSha: string): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHCommitComment>;
				public getRefs(): org.kohsuke.github.GHRef[];
				public createHook(name: string, config: java.util.Map<string,string>, events: java.util.Collection<org.kohsuke.github.GHEvent>, active: boolean): org.kohsuke.github.GHHook;
				public enableDownloads(v: boolean): void;
				public listIssueEvents(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHIssueEvent>;
				public queryCommits(): org.kohsuke.github.GHCommitQueryBuilder;
				public allowSquashMerge(value: boolean): void;
				public getDescription(): string;
				public listTags(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHTag>;
				public allowRebaseMerge(value: boolean): void;
				public hasAssignee(u: org.kohsuke.github.GHUser): boolean;
				public update(): org.kohsuke.github.GHRepository.Updater;
				public isPrivate(): boolean;
				public getCloneTraffic(): org.kohsuke.github.GHRepositoryCloneTraffic;
				public isDeleteBranchOnMerge(): boolean;
				public getDirectoryContent(path: string, ref: string): java.util.List<org.kohsuke.github.GHContent>;
				public createLabel(name: string, color: string): org.kohsuke.github.GHLabel;
				public createPullRequest(title: string, head: string, base: string, body: string, maintainerCanModify: boolean, draft: boolean): org.kohsuke.github.GHPullRequest;
				public getRefs(refType: string): org.kohsuke.github.GHRef[];
				public createPullRequest(title: string, head: string, base: string, body: string, maintainerCanModify: boolean): org.kohsuke.github.GHPullRequest;
				public getDirectoryContent(path: string): java.util.List<org.kohsuke.github.GHContent>;
				public listCommitStatuses(sha1: string): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHCommitStatus>;
				/** @deprecated */
				public createContent(contentBytes: number[], commitMessage: string, path: string): org.kohsuke.github.GHContentUpdateResponse;
				public getSubscribersCount(): number;
				public enableProjects(v: boolean): void;
				public equals(obj: any): boolean;
				public listCollaborators(affiliation: org.kohsuke.github.GHRepository.CollaboratorAffiliation): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				public addCollaborators(users: java.util.Collection<org.kohsuke.github.GHUser>, permission: org.kohsuke.github.GHOrganization.RepositoryRole): void;
				public getWorkflow(nameOrId: string): org.kohsuke.github.GHWorkflow;
				public createBlob(): org.kohsuke.github.GHBlobBuilder;
				public getBlob(blobSha: string): org.kohsuke.github.GHBlob;
				public createPullRequest(title: string, head: string, base: string, body: string): org.kohsuke.github.GHPullRequest;
				public listInvitations(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHInvitation>;
				public getStatistics(): org.kohsuke.github.GHRepositoryStatistics;
				public addCollaborators(users: java.util.Collection<org.kohsuke.github.GHUser>): void;
				public getWorkflowRun(id: number): org.kohsuke.github.GHWorkflowRun;
				public createTag(tag: string, message: string, object: string, type: string): org.kohsuke.github.GHTagObject;
				public listNotifications(): org.kohsuke.github.GHNotificationStream;
				public constructor();
				public deleteHook(id: number): void;
				public getOwnerName(): string;
				public getSize(): number;
				/** @deprecated */
				public getMasterBranch(): string;
				public getCompare(id1: string, id2: string): org.kohsuke.github.GHCompare;
				public getBranch(name: string): org.kohsuke.github.GHBranch;
				public getPullRequest(i: number): org.kohsuke.github.GHPullRequest;
				public getVisibility(): org.kohsuke.github.GHRepository.Visibility;
				public getSshUrl(): string;
				public listSubscribers(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				public getName(): string;
				public setVisibility(value: org.kohsuke.github.GHRepository.Visibility): void;
				/** @deprecated */
				public getWatchers(): number;
				public enableWiki(v: boolean): void;
				public getParent(): org.kohsuke.github.GHRepository;
				public getHooks(): java.util.List<org.kohsuke.github.GHHook>;
				public queryWorkflowRuns(): org.kohsuke.github.GHWorkflowRunQueryBuilder;
				public queryPullRequests(): org.kohsuke.github.GHPullRequestQueryBuilder;
				public getViewTraffic(): org.kohsuke.github.GHRepositoryViewTraffic;
				public getIssues(state: org.kohsuke.github.GHIssueState, milestone: org.kohsuke.github.GHMilestone): java.util.List<org.kohsuke.github.GHIssue>;
				public isTemplate(): boolean;
				public getTeams(): java.util.Set<org.kohsuke.github.GHTeam>;
				public createCommitStatus(sha1: string, state: org.kohsuke.github.GHCommitState, targetUrl: string, description: string): org.kohsuke.github.GHCommitStatus;
				public getMirrorUrl(): string;
				public setDescription(value: string): void;
				public getCompare(id1: org.kohsuke.github.GHCommit, id2: org.kohsuke.github.GHCommit): org.kohsuke.github.GHCompare;
				/** @deprecated */
				public getForks(): number;
				public getHook(id: number): org.kohsuke.github.GHHook;
				public isAllowRebaseMerge(): boolean;
				public getDefaultBranch(): string;
				public queryIssues(): org.kohsuke.github.GHIssueQueryBuilder.ForRepository;
				public updateCheckRun(checkId: number): org.kohsuke.github.GHCheckRunBuilder;
				public addCollaborators(permission: org.kohsuke.github.GHOrganization.RepositoryRole, ...users: org.kohsuke.github.GHUser[]): void;
				public setEmailServiceHook(address: string): void;
				public getReadme(): org.kohsuke.github.GHContent;
				public hasProjects(): boolean;
				public getIssue(id: number): org.kohsuke.github.GHIssue;
				public allowMergeCommit(value: boolean): void;
				public setCompareUsePaginatedCommits(value: boolean): void;
				public setPrivate(value: boolean): void;
				public createProject(name: string, body: string): org.kohsuke.github.GHProject;
				public getNodeId(): string;
				public createCheckRun(name: string, headSHA: string): org.kohsuke.github.GHCheckRunBuilder;
				public getCommit(sha1: string): org.kohsuke.github.GHCommit;
				public getLicense(): org.kohsuke.github.GHLicense;
				/** @deprecated */
				public gitHttpTransportUrl(): string;
				public createCommit(): org.kohsuke.github.GHCommitBuilder;
				public createDeployment(ref: string): org.kohsuke.github.GHDeploymentBuilder;
				public getForksCount(): number;
			}
			export module GHRepository {
				export class CollaboratorAffiliation {
					public static class: java.lang.Class<org.kohsuke.github.GHRepository.CollaboratorAffiliation>;
					public static ALL: org.kohsuke.github.GHRepository.CollaboratorAffiliation;
					public static DIRECT: org.kohsuke.github.GHRepository.CollaboratorAffiliation;
					public static OUTSIDE: org.kohsuke.github.GHRepository.CollaboratorAffiliation;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.kohsuke.github.GHRepository.CollaboratorAffiliation[];
					public static valueOf(name: string): org.kohsuke.github.GHRepository.CollaboratorAffiliation;
				}
				export class Contributor extends org.kohsuke.github.GHUser {
					public static class: java.lang.Class<org.kohsuke.github.GHRepository.Contributor>;
					public getContributions(): number;
					public equals(obj: any): boolean;
					public constructor();
					public hashCode(): number;
				}
				export class ForkSort {
					public static class: java.lang.Class<org.kohsuke.github.GHRepository.ForkSort>;
					public static NEWEST: org.kohsuke.github.GHRepository.ForkSort;
					public static OLDEST: org.kohsuke.github.GHRepository.ForkSort;
					public static STARGAZERS: org.kohsuke.github.GHRepository.ForkSort;
					public static valueOf(name: string): org.kohsuke.github.GHRepository.ForkSort;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.kohsuke.github.GHRepository.ForkSort[];
				}
				export class GHRepoPermission extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHRepository.GHRepoPermission>;
				}
				export class Setter extends org.kohsuke.github.GHRepositoryBuilder<org.kohsuke.github.GHRepository> {
					public static class: java.lang.Class<org.kohsuke.github.GHRepository.Setter>;
					public constructor(repository: org.kohsuke.github.GHRepository);
					public constructor(intermediateReturnType: java.lang.Class<any>, root: org.kohsuke.github.GitHub, baseInstance: org.kohsuke.github.GHRepository);
					public constructor(finalReturnType: java.lang.Class<any>, intermediateReturnType: java.lang.Class<any>, root: org.kohsuke.github.GitHub, baseInstance: any);
				}
				export class Topics extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHRepository.Topics>;
					public names: java.util.List<string>;
				}
				export class Updater extends org.kohsuke.github.GHRepositoryBuilder<org.kohsuke.github.GHRepository.Updater> {
					public static class: java.lang.Class<org.kohsuke.github.GHRepository.Updater>;
					public constructor(repository: org.kohsuke.github.GHRepository);
					public constructor(intermediateReturnType: java.lang.Class<any>, root: org.kohsuke.github.GitHub, baseInstance: org.kohsuke.github.GHRepository);
					public constructor(finalReturnType: java.lang.Class<any>, intermediateReturnType: java.lang.Class<any>, root: org.kohsuke.github.GitHub, baseInstance: any);
				}
				export class Visibility {
					public static class: java.lang.Class<org.kohsuke.github.GHRepository.Visibility>;
					public static PUBLIC: org.kohsuke.github.GHRepository.Visibility;
					public static INTERNAL: org.kohsuke.github.GHRepository.Visibility;
					public static PRIVATE: org.kohsuke.github.GHRepository.Visibility;
					public static UNKNOWN: org.kohsuke.github.GHRepository.Visibility;
					public static valueOf(name: string): org.kohsuke.github.GHRepository.Visibility;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.kohsuke.github.GHRepository.Visibility[];
					public static from(value: string): org.kohsuke.github.GHRepository.Visibility;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GHRepositoryBuilder<S>  extends org.kohsuke.github.AbstractBuilder<org.kohsuke.github.GHRepository,any> {
				public static class: java.lang.Class<org.kohsuke.github.GHRepositoryBuilder<any>>;
				public description(description: string): any;
				public issues(enabled: boolean): any;
				public private_(enabled: boolean): any;
				public allowMergeCommit(enabled: boolean): any;
				public homepage(homepage: java.net.URL): any;
				public done(): any;
				public visibility(visibility: org.kohsuke.github.GHRepository.Visibility): any;
				public defaultBranch(branch: string): any;
				public downloads(enabled: boolean): any;
				public constructor(intermediateReturnType: java.lang.Class<any>, root: org.kohsuke.github.GitHub, baseInstance: org.kohsuke.github.GHRepository);
				public allowSquashMerge(enabled: boolean): any;
				public homepage(homepage: string): any;
				public deleteBranchOnMerge(enabled: boolean): any;
				public projects(enabled: boolean): any;
				public done(): org.kohsuke.github.GHRepository;
				public constructor(finalReturnType: java.lang.Class<any>, intermediateReturnType: java.lang.Class<any>, root: org.kohsuke.github.GitHub, baseInstance: any);
				public allowRebaseMerge(enabled: boolean): any;
				public wiki(enabled: boolean): any;
				public isTemplate(enabled: boolean): any;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHRepositoryCloneTraffic extends org.kohsuke.github.GHRepositoryTraffic {
				public static class: java.lang.Class<org.kohsuke.github.GHRepositoryCloneTraffic>;
				public getClones(): java.util.List<org.kohsuke.github.GHRepositoryCloneTraffic.DailyInfo>;
				public getDailyInfo(): java.util.List<any>;
				public getCount(): number;
				public getDailyInfo(): java.util.List<org.kohsuke.github.GHRepositoryCloneTraffic.DailyInfo>;
				public getUniques(): number;
			}
			export module GHRepositoryCloneTraffic {
				export class DailyInfo extends org.kohsuke.github.GHRepositoryTraffic.DailyInfo {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositoryCloneTraffic.DailyInfo>;
					public getCount(): number;
					public getUniques(): number;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHRepositoryDiscussion extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHRepositoryDiscussion>;
				public getAuthorAssociation(): org.kohsuke.github.GHCommentAuthorAssociation;
				public getHtmlUrl(): java.net.URL;
				public getUser(): org.kohsuke.github.GHUser;
				public getAnswerChosenBy(): org.kohsuke.github.GHUser;
				public getTimelineUrl(): string;
				public getTitle(): string;
				public constructor();
				public getNumber(): number;
				public getBody(): string;
				public getCategory(): org.kohsuke.github.GHRepositoryDiscussion.Category;
				public getComments(): number;
				public getActiveLockReason(): string;
				public getAnswerHtmlUrl(): java.net.URL;
				public getAnswerChosenAt(): java.util.Date;
				public getState(): org.kohsuke.github.GHRepositoryDiscussion.State;
				public isLocked(): boolean;
			}
			export module GHRepositoryDiscussion {
				export class Category extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositoryDiscussion.Category>;
					public getNodeId(): string;
					public getSlug(): string;
					public isAnswerable(): boolean;
					public getCreatedAt(): java.util.Date;
					public constructor();
					public getEmoji(): string;
					public getName(): string;
					public getId(): number;
					public getUpdatedAt(): java.util.Date;
					public getDescription(): string;
					public getRepositoryId(): number;
				}
				export class State {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositoryDiscussion.State>;
					public static OPEN: org.kohsuke.github.GHRepositoryDiscussion.State;
					public static LOCKED: org.kohsuke.github.GHRepositoryDiscussion.State;
					public static UNKNOWN: org.kohsuke.github.GHRepositoryDiscussion.State;
					public static values(): org.kohsuke.github.GHRepositoryDiscussion.State[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHRepositoryDiscussion.State;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHRepositorySearchBuilder extends org.kohsuke.github.GHSearchBuilder<org.kohsuke.github.GHRepository> {
				public static class: java.lang.Class<org.kohsuke.github.GHRepositorySearchBuilder>;
				public q(term: string): org.kohsuke.github.GHRepositorySearchBuilder;
				public created(v: string): org.kohsuke.github.GHRepositorySearchBuilder;
				public sort(sort: org.kohsuke.github.GHRepositorySearchBuilder.Sort): org.kohsuke.github.GHRepositorySearchBuilder;
				public stars(v: string): org.kohsuke.github.GHRepositorySearchBuilder;
				public org(v: string): org.kohsuke.github.GHRepositorySearchBuilder;
				public pushed(v: string): org.kohsuke.github.GHRepositorySearchBuilder;
				public q(term: string): org.kohsuke.github.GHQueryBuilder<any>;
				public in(v: string): org.kohsuke.github.GHRepositorySearchBuilder;
				public topic(v: string): org.kohsuke.github.GHRepositorySearchBuilder;
				public repo(v: string): org.kohsuke.github.GHRepositorySearchBuilder;
				public language(v: string): org.kohsuke.github.GHRepositorySearchBuilder;
				public visibility(visibility: org.kohsuke.github.GHRepository.Visibility): org.kohsuke.github.GHRepositorySearchBuilder;
				/** @deprecated */
				public fork(fork: org.kohsuke.github.GHRepositorySearchBuilder.Fork): org.kohsuke.github.GHRepositorySearchBuilder;
				public fork(fork: org.kohsuke.github.GHFork): org.kohsuke.github.GHRepositorySearchBuilder;
				/** @deprecated */
				public forks(v: string): org.kohsuke.github.GHRepositorySearchBuilder;
				public user(v: string): org.kohsuke.github.GHRepositorySearchBuilder;
				public order(v: org.kohsuke.github.GHDirection): org.kohsuke.github.GHRepositorySearchBuilder;
				public getApiUrl(): string;
				public size(v: string): org.kohsuke.github.GHRepositorySearchBuilder;
			}
			export module GHRepositorySearchBuilder {
				export class Fork {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositorySearchBuilder.Fork>;
					public static PARENT_AND_FORKS: org.kohsuke.github.GHRepositorySearchBuilder.Fork;
					public static FORKS_ONLY: org.kohsuke.github.GHRepositorySearchBuilder.Fork;
					public static PARENT_ONLY: org.kohsuke.github.GHRepositorySearchBuilder.Fork;
					public toString(): string;
					public static values(): org.kohsuke.github.GHRepositorySearchBuilder.Fork[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHRepositorySearchBuilder.Fork;
				}
				export class RepositorySearchResult extends org.kohsuke.github.SearchResult<org.kohsuke.github.GHRepository> {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositorySearchBuilder.RepositorySearchResult>;
				}
				export class Sort {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositorySearchBuilder.Sort>;
					public static STARS: org.kohsuke.github.GHRepositorySearchBuilder.Sort;
					public static FORKS: org.kohsuke.github.GHRepositorySearchBuilder.Sort;
					public static UPDATED: org.kohsuke.github.GHRepositorySearchBuilder.Sort;
					public static values(): org.kohsuke.github.GHRepositorySearchBuilder.Sort[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHRepositorySearchBuilder.Sort;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHRepositorySelection {
				public static class: java.lang.Class<org.kohsuke.github.GHRepositorySelection>;
				public static SELECTED: org.kohsuke.github.GHRepositorySelection;
				public static ALL: org.kohsuke.github.GHRepositorySelection;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): org.kohsuke.github.GHRepositorySelection[];
				public static valueOf(name: string): org.kohsuke.github.GHRepositorySelection;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHRepositoryStatistics extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHRepositoryStatistics>;
				public getPunchCard(): java.util.List<org.kohsuke.github.GHRepositoryStatistics.PunchCardItem>;
				public getCommitActivity(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepositoryStatistics.CommitActivity>;
				public getContributorStats(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepositoryStatistics.ContributorStats>;
				public getContributorStats(waitTillReady: boolean): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepositoryStatistics.ContributorStats>;
				public constructor(repo: org.kohsuke.github.GHRepository);
				public getCodeFrequency(): java.util.List<org.kohsuke.github.GHRepositoryStatistics.CodeFrequency>;
				public getParticipation(): org.kohsuke.github.GHRepositoryStatistics.Participation;
			}
			export module GHRepositoryStatistics {
				export class CodeFrequency extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositoryStatistics.CodeFrequency>;
					public getWeekTimestamp(): number;
					public getDeletions(): number;
					public toString(): string;
					public getAdditions(): number;
				}
				export class CommitActivity extends org.kohsuke.github.GHObject {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositoryStatistics.CommitActivity>;
					public getTotal(): number;
					public constructor();
					public getHtmlUrl(): java.net.URL;
					public getDays(): java.util.List<java.lang.Integer>;
					public getWeek(): number;
				}
				export class ContributorStats extends org.kohsuke.github.GHObject {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositoryStatistics.ContributorStats>;
					public getWeeks(): java.util.List<org.kohsuke.github.GHRepositoryStatistics.ContributorStats.Week>;
					public getTotal(): number;
					public toString(): string;
					public constructor();
					public getHtmlUrl(): java.net.URL;
					public getWeek(timestamp: number): org.kohsuke.github.GHRepositoryStatistics.ContributorStats.Week;
					public getAuthor(): org.kohsuke.github.GHUser;
				}
				export module ContributorStats {
					export class Week extends java.lang.Object {
						public static class: java.lang.Class<org.kohsuke.github.GHRepositoryStatistics.ContributorStats.Week>;
						public constructor();
						public getNumberOfAdditions(): number;
						public getWeekTimestamp(): number;
						public getNumberOfDeletions(): number;
						public getNumberOfCommits(): number;
						public toString(): string;
					}
				}
				export class Participation extends org.kohsuke.github.GHObject {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositoryStatistics.Participation>;
					public getAllCommits(): java.util.List<java.lang.Integer>;
					public constructor();
					public getHtmlUrl(): java.net.URL;
					public getOwnerCommits(): java.util.List<java.lang.Integer>;
				}
				export class PunchCardItem extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositoryStatistics.PunchCardItem>;
					public getNumberOfCommits(): number;
					public toString(): string;
					public getDayOfWeek(): number;
					public getHourOfDay(): number;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GHRepositoryTraffic extends java.lang.Object implements org.kohsuke.github.TrafficInfo {
				public static class: java.lang.Class<org.kohsuke.github.GHRepositoryTraffic>;
				public getDailyInfo(): java.util.List<any>;
				public getCount(): number;
				public getUniques(): number;
			}
			export module GHRepositoryTraffic {
				export abstract class DailyInfo extends java.lang.Object implements org.kohsuke.github.TrafficInfo {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositoryTraffic.DailyInfo>;
					public getTimestamp(): java.util.Date;
					public getCount(): number;
					public getUniques(): number;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHRepositoryViewTraffic extends org.kohsuke.github.GHRepositoryTraffic {
				public static class: java.lang.Class<org.kohsuke.github.GHRepositoryViewTraffic>;
				public getDailyInfo(): java.util.List<org.kohsuke.github.GHRepositoryViewTraffic.DailyInfo>;
				public getDailyInfo(): java.util.List<any>;
				public getCount(): number;
				public getViews(): java.util.List<org.kohsuke.github.GHRepositoryViewTraffic.DailyInfo>;
				public getUniques(): number;
			}
			export module GHRepositoryViewTraffic {
				export class DailyInfo extends org.kohsuke.github.GHRepositoryTraffic.DailyInfo {
					public static class: java.lang.Class<org.kohsuke.github.GHRepositoryViewTraffic.DailyInfo>;
					public getCount(): number;
					public getUniques(): number;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHRequestedAction extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHRequestedAction>;
				/** @deprecated */
				public getHtmlUrl(): java.net.URL;
				public getHtmlUrl(): java.net.URL;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GHSearchBuilder<T>  extends org.kohsuke.github.GHQueryBuilder<any> {
				public static class: java.lang.Class<org.kohsuke.github.GHSearchBuilder<any>>;
				public terms: java.util.List<string>;
				public list(): org.kohsuke.github.PagedIterable<any>;
				public q(term: string): org.kohsuke.github.GHQueryBuilder<any>;
				public getApiUrl(): string;
				public list(): org.kohsuke.github.PagedSearchIterable<any>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHStargazer extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHStargazer>;
				public getStarredAt(): java.util.Date;
				public getUser(): org.kohsuke.github.GHUser;
				public getRepository(): org.kohsuke.github.GHRepository;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHSubscription extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHSubscription>;
				public isSubscribed(): boolean;
				public getReason(): string;
				public getRepositoryUrl(): string;
				public delete(): void;
				public isIgnored(): boolean;
				public getCreatedAt(): java.util.Date;
				public getUrl(): string;
				public getRepository(): org.kohsuke.github.GHRepository;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHTag extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHTag>;
				public getCommit(): org.kohsuke.github.GHCommit;
				public getOwner(): org.kohsuke.github.GHRepository;
				public getName(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHTagObject extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHTagObject>;
				public getObject(): org.kohsuke.github.GHRef.GHObject;
				public getTag(): string;
				public getOwner(): org.kohsuke.github.GHRepository;
				public getUrl(): string;
				public getSha(): string;
				public getTagger(): org.kohsuke.github.GitUser;
				public getMessage(): string;
				public getVerification(): org.kohsuke.github.GHVerification;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHTargetType {
				public static class: java.lang.Class<org.kohsuke.github.GHTargetType>;
				public static ORGANIZATION: org.kohsuke.github.GHTargetType;
				public static USER: org.kohsuke.github.GHTargetType;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): org.kohsuke.github.GHTargetType;
				public static values(): org.kohsuke.github.GHTargetType[];
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHTeam extends org.kohsuke.github.GHObject implements org.kohsuke.github.Refreshable {
				public static class: java.lang.Class<org.kohsuke.github.GHTeam>;
				public listChildTeams(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHTeam>;
				public getPrivacy(): org.kohsuke.github.GHTeam.Privacy;
				public getSlug(): string;
				public getRepositories(): java.util.Map<string,org.kohsuke.github.GHRepository>;
				public getOrganization(): org.kohsuke.github.GHOrganization;
				public getDescription(): string;
				public listDiscussions(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHDiscussion>;
				public getDiscussion(discussionNumber: number): org.kohsuke.github.GHDiscussion;
				public listRepositories(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				public constructor();
				public delete(): void;
				public hashCode(): number;
				public listMembers(role: string): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				public equals(o: any): boolean;
				public hasMember(user: org.kohsuke.github.GHUser): boolean;
				public add(r: org.kohsuke.github.GHRepository): void;
				public getPermission(): string;
				public remove(u: org.kohsuke.github.GHUser): void;
				/** @deprecated */
				public add(r: org.kohsuke.github.GHRepository, permission: org.kohsuke.github.GHOrganization.Permission): void;
				public listMembers(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				public remove(r: org.kohsuke.github.GHRepository): void;
				public setPrivacy(privacy: org.kohsuke.github.GHTeam.Privacy): void;
				public add(user: org.kohsuke.github.GHUser, role: org.kohsuke.github.GHTeam.Role): void;
				public add(r: org.kohsuke.github.GHRepository, permission: org.kohsuke.github.GHOrganization.RepositoryRole): void;
				public getHtmlUrl(): java.net.URL;
				public getName(): string;
				public add(u: org.kohsuke.github.GHUser): void;
				public setDescription(description: string): void;
				public equals(obj: any): boolean;
				public refresh(): void;
				public refresh(value: any): void;
				public listMembers(role: org.kohsuke.github.GHTeam.Role): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				public createDiscussion(title: string): org.kohsuke.github.GHDiscussion.Creator;
				public getMembers(): java.util.Set<org.kohsuke.github.GHUser>;
			}
			export module GHTeam {
				export class Privacy {
					public static class: java.lang.Class<org.kohsuke.github.GHTeam.Privacy>;
					public static SECRET: org.kohsuke.github.GHTeam.Privacy;
					public static CLOSED: org.kohsuke.github.GHTeam.Privacy;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHTeam.Privacy;
					public static values(): org.kohsuke.github.GHTeam.Privacy[];
				}
				export class Role {
					public static class: java.lang.Class<org.kohsuke.github.GHTeam.Role>;
					public static MEMBER: org.kohsuke.github.GHTeam.Role;
					public static MAINTAINER: org.kohsuke.github.GHTeam.Role;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): org.kohsuke.github.GHTeam.Role[];
					public static valueOf(name: string): org.kohsuke.github.GHTeam.Role;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHTeamBuilder extends org.kohsuke.github.GitHubInteractiveObject {
				public static class: java.lang.Class<org.kohsuke.github.GHTeamBuilder>;
				public builder: org.kohsuke.github.Requester;
				public privacy(privacy: org.kohsuke.github.GHTeam.Privacy): org.kohsuke.github.GHTeamBuilder;
				public maintainers(...maintainers: string[]): org.kohsuke.github.GHTeamBuilder;
				public repositories(...repoNames: string[]): org.kohsuke.github.GHTeamBuilder;
				public create(): org.kohsuke.github.GHTeam;
				public constructor(root: org.kohsuke.github.GitHub, orgName: string, name: string);
				public description(description: string): org.kohsuke.github.GHTeamBuilder;
				public parentTeamId(parentTeamId: number): org.kohsuke.github.GHTeamBuilder;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHThread extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHThread>;
				public isRead(): boolean;
				public getType(): string;
				public getBoundPullRequest(): org.kohsuke.github.GHPullRequest;
				/** @deprecated */
				public getHtmlUrl(): java.net.URL;
				public getHtmlUrl(): java.net.URL;
				public subscribe(subscribed: boolean, ignored: boolean): org.kohsuke.github.GHSubscription;
				public getSubscription(): org.kohsuke.github.GHSubscription;
				public getLastCommentUrl(): string;
				public getLastReadAt(): java.util.Date;
				public getTitle(): string;
				public getBoundIssue(): org.kohsuke.github.GHIssue;
				public getReason(): string;
				public getBoundCommit(): org.kohsuke.github.GHCommit;
				public markAsRead(): void;
				public getRepository(): org.kohsuke.github.GHRepository;
			}
			export module GHThread {
				export class Subject extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHThread.Subject>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHTree extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHTree>;
				public getEntry(path: string): org.kohsuke.github.GHTreeEntry;
				public getUrl(): java.net.URL;
				public isTruncated(): boolean;
				public getSha(): string;
				public getTree(): java.util.List<org.kohsuke.github.GHTreeEntry>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHTreeBuilder extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHTreeBuilder>;
				public add(path: string, content: string, executable: boolean): org.kohsuke.github.GHTreeBuilder;
				/** @deprecated */
				public textEntry(path: string, content: string, executable: boolean): org.kohsuke.github.GHTreeBuilder;
				public baseTree(baseTree: string): org.kohsuke.github.GHTreeBuilder;
				public create(): org.kohsuke.github.GHTree;
				/** @deprecated */
				public shaEntry(path: string, sha: string, executable: boolean): org.kohsuke.github.GHTreeBuilder;
				public add(path: string, content: number[], executable: boolean): org.kohsuke.github.GHTreeBuilder;
				/** @deprecated */
				public entry(path: string, mode: string, type: string, sha: string, content: string): org.kohsuke.github.GHTreeBuilder;
			}
			export module GHTreeBuilder {
				export class TreeEntry extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHTreeBuilder.TreeEntry>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHTreeEntry extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHTreeEntry>;
				public getType(): string;
				public asTree(): org.kohsuke.github.GHTree;
				public asBlob(): org.kohsuke.github.GHBlob;
				public getSize(): number;
				public getUrl(): java.net.URL;
				public getPath(): string;
				public getSha(): string;
				public getMode(): string;
				public readAsBlob(): java.io.InputStream;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHUser extends org.kohsuke.github.GHPerson {
				public static class: java.lang.Class<org.kohsuke.github.GHUser>;
				public ldap_dn: string;
				public follow(): void;
				public listEvents(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHEventInfo>;
				public listSubscriptions(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				public getFollowers(): org.kohsuke.github.GHPersonSet<org.kohsuke.github.GHUser>;
				public getBio(): string;
				public getFollows(): org.kohsuke.github.GHPersonSet<org.kohsuke.github.GHUser>;
				public getOrganizations(): org.kohsuke.github.GHPersonSet<org.kohsuke.github.GHOrganization>;
				public listFollowers(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				public listStarredRepositories(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				public constructor();
				public listFollows(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
				public listProjects(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHProject>;
				public getLdapDn(): java.util.Optional<string>;
				public isMemberOf(team: org.kohsuke.github.GHTeam): boolean;
				public equals(obj: any): boolean;
				public getKeys(): java.util.List<org.kohsuke.github.GHKey>;
				public hashCode(): number;
				public listGists(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHGist>;
				public isMemberOf(org: org.kohsuke.github.GHOrganization): boolean;
				public isPublicMemberOf(org: org.kohsuke.github.GHOrganization): boolean;
				public unfollow(): void;
				public isHireable(): boolean;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHUserSearchBuilder extends org.kohsuke.github.GHSearchBuilder<org.kohsuke.github.GHUser> {
				public static class: java.lang.Class<org.kohsuke.github.GHUserSearchBuilder>;
				public type(v: string): org.kohsuke.github.GHUserSearchBuilder;
				public q(term: string): org.kohsuke.github.GHUserSearchBuilder;
				public q(term: string): org.kohsuke.github.GHQueryBuilder<any>;
				public created(v: string): org.kohsuke.github.GHUserSearchBuilder;
				public sort(sort: org.kohsuke.github.GHUserSearchBuilder.Sort): org.kohsuke.github.GHUserSearchBuilder;
				public order(v: org.kohsuke.github.GHDirection): org.kohsuke.github.GHUserSearchBuilder;
				public getApiUrl(): string;
				public in(v: string): org.kohsuke.github.GHUserSearchBuilder;
				public location(v: string): org.kohsuke.github.GHUserSearchBuilder;
				public repos(v: string): org.kohsuke.github.GHUserSearchBuilder;
				public language(v: string): org.kohsuke.github.GHUserSearchBuilder;
				public followers(v: string): org.kohsuke.github.GHUserSearchBuilder;
			}
			export module GHUserSearchBuilder {
				export class Sort {
					public static class: java.lang.Class<org.kohsuke.github.GHUserSearchBuilder.Sort>;
					public static FOLLOWERS: org.kohsuke.github.GHUserSearchBuilder.Sort;
					public static REPOSITORIES: org.kohsuke.github.GHUserSearchBuilder.Sort;
					public static JOINED: org.kohsuke.github.GHUserSearchBuilder.Sort;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHUserSearchBuilder.Sort;
					public static values(): org.kohsuke.github.GHUserSearchBuilder.Sort[];
				}
				export class UserSearchResult extends org.kohsuke.github.SearchResult<org.kohsuke.github.GHUser> {
					public static class: java.lang.Class<org.kohsuke.github.GHUserSearchBuilder.UserSearchResult>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHVerification extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHVerification>;
				public getSignature(): string;
				public getReason(): org.kohsuke.github.GHVerification.Reason;
				public isVerified(): boolean;
				public getPayload(): string;
				public constructor();
			}
			export module GHVerification {
				export class Reason {
					public static class: java.lang.Class<org.kohsuke.github.GHVerification.Reason>;
					public static EXPIRED_KEY: org.kohsuke.github.GHVerification.Reason;
					public static NOT_SIGNING_KEY: org.kohsuke.github.GHVerification.Reason;
					public static GPGVERIFY_ERROR: org.kohsuke.github.GHVerification.Reason;
					public static GPGVERIFY_UNAVAILABLE: org.kohsuke.github.GHVerification.Reason;
					public static UNSIGNED: org.kohsuke.github.GHVerification.Reason;
					public static UNKNOWN_SIGNATURE_TYPE: org.kohsuke.github.GHVerification.Reason;
					public static NO_USER: org.kohsuke.github.GHVerification.Reason;
					public static UNVERIFIED_EMAIL: org.kohsuke.github.GHVerification.Reason;
					public static BAD_EMAIL: org.kohsuke.github.GHVerification.Reason;
					public static UNKNOWN_KEY: org.kohsuke.github.GHVerification.Reason;
					public static MALFORMED_SIGNATURE: org.kohsuke.github.GHVerification.Reason;
					public static INVALID: org.kohsuke.github.GHVerification.Reason;
					public static VALID: org.kohsuke.github.GHVerification.Reason;
					public static values(): org.kohsuke.github.GHVerification.Reason[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): org.kohsuke.github.GHVerification.Reason;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHVerifiedKey extends org.kohsuke.github.GHKey {
				public static class: java.lang.Class<org.kohsuke.github.GHVerifiedKey>;
				public getTitle(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHWorkflow extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHWorkflow>;
				public enable(): void;
				public getState(): string;
				public disable(): void;
				public getHtmlUrl(): java.net.URL;
				public listRuns(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHWorkflowRun>;
				public getName(): string;
				public dispatch(ref: string): void;
				public getPath(): string;
				public getRepository(): org.kohsuke.github.GHRepository;
				public dispatch(ref: string, inputs: java.util.Map<string,any>): void;
				public constructor();
				public getBadgeUrl(): java.net.URL;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHWorkflowJob extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHWorkflowJob>;
				public getSteps(): java.util.List<org.kohsuke.github.GHWorkflowJob.Step>;
				public getCompletedAt(): java.util.Date;
				public getRunId(): number;
				public downloadLogs(streamFunction: org.kohsuke.github.function.InputStreamFunction<any>): any;
				public getHtmlUrl(): java.net.URL;
				public getName(): string;
				public getCheckRunUrl(): java.net.URL;
				public constructor();
				public getStatus(): org.kohsuke.github.GHWorkflowRun.Status;
				public getStartedAt(): java.util.Date;
				public getConclusion(): org.kohsuke.github.GHWorkflowRun.Conclusion;
				public getHeadSha(): string;
				public getRepository(): org.kohsuke.github.GHRepository;
			}
			export module GHWorkflowJob {
				export class Step extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHWorkflowJob.Step>;
					public getNumber(): number;
					public constructor();
					public getName(): string;
					public getStatus(): org.kohsuke.github.GHWorkflowRun.Status;
					public getStartedAt(): java.util.Date;
					public getCompletedAt(): java.util.Date;
					public getConclusion(): org.kohsuke.github.GHWorkflowRun.Conclusion;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHWorkflowJobQueryBuilder extends org.kohsuke.github.GHQueryBuilder<org.kohsuke.github.GHWorkflowJob> {
				public static class: java.lang.Class<org.kohsuke.github.GHWorkflowJobQueryBuilder>;
				public latest(): org.kohsuke.github.GHWorkflowJobQueryBuilder;
				public list(): org.kohsuke.github.PagedIterable<any>;
				public all(): org.kohsuke.github.GHWorkflowJobQueryBuilder;
				public list(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHWorkflowJob>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHWorkflowJobsIterable extends org.kohsuke.github.PagedIterable<org.kohsuke.github.GHWorkflowJob> {
				public static class: java.lang.Class<org.kohsuke.github.GHWorkflowJobsIterable>;
				public iterator(): org.kohsuke.github.PagedIterator<any>;
				public spliterator(): java.util.Spliterator<any>;
				public constructor(repo: org.kohsuke.github.GHRepository, request: org.kohsuke.github.GitHubRequest);
				public _iterator(pageSize: number): org.kohsuke.github.PagedIterator<org.kohsuke.github.GHWorkflowJob>;
				public _iterator(param0: number): org.kohsuke.github.PagedIterator<any>;
				public iterator(): java.util.Iterator<any>;
				public adapt(base: java.util.Iterator<org.kohsuke.github.GHWorkflowJobsPage>): java.util.Iterator<org.kohsuke.github.GHWorkflowJob[]>;
				public forEach(action: any /* any*/): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHWorkflowJobsPage extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHWorkflowJobsPage>;
				public getTotalCount(): number;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHWorkflowRun extends org.kohsuke.github.GHObject {
				public static class: java.lang.Class<org.kohsuke.github.GHWorkflowRun>;
				public getRunAttempt(): number;
				public downloadLogs(streamFunction: org.kohsuke.github.function.InputStreamFunction<any>): any;
				public listAllJobs(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHWorkflowJob>;
				public getWorkflowUrl(): java.net.URL;
				public rerun(): void;
				public getHeadCommit(): org.kohsuke.github.GHWorkflowRun.HeadCommit;
				public deleteLogs(): void;
				public getEvent(): org.kohsuke.github.GHEvent;
				public constructor();
				public getHeadBranch(): string;
				public delete(): void;
				public getRerunUrl(): java.net.URL;
				public getHeadRepository(): org.kohsuke.github.GHRepository;
				public getRunStartedAt(): java.util.Date;
				public cancel(): void;
				public getPullRequests(): java.util.List<org.kohsuke.github.GHPullRequest>;
				public getRepository(): org.kohsuke.github.GHRepository;
				public getCancelUrl(): java.net.URL;
				public getHtmlUrl(): java.net.URL;
				public getRunNumber(): number;
				public getName(): string;
				public listJobs(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHWorkflowJob>;
				public getStatus(): org.kohsuke.github.GHWorkflowRun.Status;
				public getLogsUrl(): java.net.URL;
				public getConclusion(): org.kohsuke.github.GHWorkflowRun.Conclusion;
				public getCheckSuiteUrl(): java.net.URL;
				public listArtifacts(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHArtifact>;
				public getWorkflowId(): number;
				public getHeadSha(): string;
				public getArtifactsUrl(): java.net.URL;
				public getJobsUrl(): java.net.URL;
			}
			export module GHWorkflowRun {
				export class Conclusion {
					public static class: java.lang.Class<org.kohsuke.github.GHWorkflowRun.Conclusion>;
					public static ACTION_REQUIRED: org.kohsuke.github.GHWorkflowRun.Conclusion;
					public static CANCELLED: org.kohsuke.github.GHWorkflowRun.Conclusion;
					public static FAILURE: org.kohsuke.github.GHWorkflowRun.Conclusion;
					public static NEUTRAL: org.kohsuke.github.GHWorkflowRun.Conclusion;
					public static SUCCESS: org.kohsuke.github.GHWorkflowRun.Conclusion;
					public static SKIPPED: org.kohsuke.github.GHWorkflowRun.Conclusion;
					public static STALE: org.kohsuke.github.GHWorkflowRun.Conclusion;
					public static TIMED_OUT: org.kohsuke.github.GHWorkflowRun.Conclusion;
					public static UNKNOWN: org.kohsuke.github.GHWorkflowRun.Conclusion;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static from(value: string): org.kohsuke.github.GHWorkflowRun.Conclusion;
					public static values(): org.kohsuke.github.GHWorkflowRun.Conclusion[];
					public static valueOf(name: string): org.kohsuke.github.GHWorkflowRun.Conclusion;
				}
				export class HeadCommit extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GHWorkflowRun.HeadCommit>;
					public getCommitter(): org.kohsuke.github.GitUser;
					public getId(): string;
					public getTimestamp(): java.util.Date;
					public constructor();
					public getAuthor(): org.kohsuke.github.GitUser;
					public getTreeId(): string;
					public getMessage(): string;
				}
				export class Status {
					public static class: java.lang.Class<org.kohsuke.github.GHWorkflowRun.Status>;
					public static QUEUED: org.kohsuke.github.GHWorkflowRun.Status;
					public static IN_PROGRESS: org.kohsuke.github.GHWorkflowRun.Status;
					public static COMPLETED: org.kohsuke.github.GHWorkflowRun.Status;
					public static UNKNOWN: org.kohsuke.github.GHWorkflowRun.Status;
					public static valueOf(name: string): org.kohsuke.github.GHWorkflowRun.Status;
					public toString(): string;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static from(value: string): org.kohsuke.github.GHWorkflowRun.Status;
					public static values(): org.kohsuke.github.GHWorkflowRun.Status[];
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHWorkflowRunQueryBuilder extends org.kohsuke.github.GHQueryBuilder<org.kohsuke.github.GHWorkflowRun> {
				public static class: java.lang.Class<org.kohsuke.github.GHWorkflowRunQueryBuilder>;
				public status(status: org.kohsuke.github.GHWorkflowRun.Status): org.kohsuke.github.GHWorkflowRunQueryBuilder;
				public actor(actor: string): org.kohsuke.github.GHWorkflowRunQueryBuilder;
				public list(): org.kohsuke.github.PagedIterable<any>;
				public event(event: string): org.kohsuke.github.GHWorkflowRunQueryBuilder;
				public branch(branch: string): org.kohsuke.github.GHWorkflowRunQueryBuilder;
				public list(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHWorkflowRun>;
				public event(event: org.kohsuke.github.GHEvent): org.kohsuke.github.GHWorkflowRunQueryBuilder;
				public actor(actor: org.kohsuke.github.GHUser): org.kohsuke.github.GHWorkflowRunQueryBuilder;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHWorkflowRunsIterable extends org.kohsuke.github.PagedIterable<org.kohsuke.github.GHWorkflowRun> {
				public static class: java.lang.Class<org.kohsuke.github.GHWorkflowRunsIterable>;
				public iterator(): org.kohsuke.github.PagedIterator<any>;
				public _iterator(pageSize: number): org.kohsuke.github.PagedIterator<org.kohsuke.github.GHWorkflowRun>;
				public spliterator(): java.util.Spliterator<any>;
				public adapt(base: java.util.Iterator<org.kohsuke.github.GHWorkflowRunsPage>): java.util.Iterator<org.kohsuke.github.GHWorkflowRun[]>;
				public _iterator(param0: number): org.kohsuke.github.PagedIterator<any>;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public constructor(owner: org.kohsuke.github.GHRepository, requestBuilder: org.kohsuke.github.GitHubRequest.Builder<any>);
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHWorkflowRunsPage extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHWorkflowRunsPage>;
				public getTotalCount(): number;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHWorkflowsIterable extends org.kohsuke.github.PagedIterable<org.kohsuke.github.GHWorkflow> {
				public static class: java.lang.Class<org.kohsuke.github.GHWorkflowsIterable>;
				public iterator(): org.kohsuke.github.PagedIterator<any>;
				public adapt(base: java.util.Iterator<org.kohsuke.github.GHWorkflowsPage>): java.util.Iterator<org.kohsuke.github.GHWorkflow[]>;
				public spliterator(): java.util.Spliterator<any>;
				public _iterator(pageSize: number): org.kohsuke.github.PagedIterator<org.kohsuke.github.GHWorkflow>;
				public _iterator(param0: number): org.kohsuke.github.PagedIterator<any>;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public constructor(owner: org.kohsuke.github.GHRepository);
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GHWorkflowsPage extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GHWorkflowsPage>;
				public getTotalCount(): number;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GitCommit extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GitCommit>;
				public getAuthoredDate(): java.util.Date;
				public getAuthor(): org.kohsuke.github.GitUser;
				public getSHA1(): string;
				public getCommitDate(): java.util.Date;
				public getUrl(): string;
				public getTreeSHA1(): string;
				public getSha(): string;
				public getNodeId(): string;
				public getCommitter(): org.kohsuke.github.GitUser;
				public constructor();
				public getTreeUrl(): string;
				public getParentSHA1s(): java.util.List<string>;
				public getHtmlUrl(): string;
				public getOwner(): org.kohsuke.github.GHRepository;
				public getMessage(): string;
				public getVerification(): org.kohsuke.github.GHVerification;
			}
			export module GitCommit {
				export class Tree extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GitCommit.Tree>;
					public getSha(): string;
					public getUrl(): string;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GitHub extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GitHub>;
				public searchIssues(): org.kohsuke.github.GHIssueSearchBuilder;
				/** @deprecated */
				public lastRateLimit(): org.kohsuke.github.GHRateLimit;
				/** @deprecated */
				public static connectUsingPassword(login: string, password: string): org.kohsuke.github.GitHub;
				public static connectUsingOAuth(githubServer: string, oauthAccessToken: string): org.kohsuke.github.GitHub;
				public searchUsers(): org.kohsuke.github.GHUserSearchBuilder;
				public static connectToEnterpriseWithOAuth(apiUrl: string, login: string, oauthAccessToken: string): org.kohsuke.github.GitHub;
				public listNotifications(): org.kohsuke.github.GHNotificationStream;
				public getUserPublicOrganizations(login: string): java.util.Map<string,org.kohsuke.github.GHOrganization>;
				public static connectAnonymously(): org.kohsuke.github.GitHub;
				public getMeta(): org.kohsuke.github.GHMeta;
				public searchRepositories(): org.kohsuke.github.GHRepositorySearchBuilder;
				/** @deprecated */
				public setConnector(connector: org.kohsuke.github.HttpConnector): void;
				public createToken(scope: java.util.Collection<string>, note: string, noteUrl: string, OTP: any /* any*/): org.kohsuke.github.GHAuthorization;
				public listOrganizations(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHOrganization>;
				public listOrganizations(since: string): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHOrganization>;
				public deleteAuth(id: number): void;
				public getUser(orig: org.kohsuke.github.GHUser): org.kohsuke.github.GHUser;
				public getProject(id: number): org.kohsuke.github.GHProject;
				public isCredentialValid(): boolean;
				public getProjectCard(id: number): org.kohsuke.github.GHProjectCard;
				public searchCommits(): org.kohsuke.github.GHCommitSearchBuilder;
				public getOrganization(name: string): org.kohsuke.github.GHOrganization;
				public getApiUrl(): string;
				/** @deprecated */
				public rateLimit(): org.kohsuke.github.GHRateLimit;
				public getMyself(): org.kohsuke.github.GHMyself;
				public getMyOrganizations(): java.util.Map<string,org.kohsuke.github.GHOrganization>;
				public listMyAuthorizations(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHAuthorization>;
				public getUser(login: string): org.kohsuke.github.GHUser;
				public getRepository(name: string): org.kohsuke.github.GHRepository;
				public getApp(): org.kohsuke.github.GHApp;
				public createRepository(name: string): org.kohsuke.github.GHCreateRepositoryBuilder;
				public getMyMarketplacePurchases(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHMarketplaceUserPurchase>;
				public listLicenses(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHLicense>;
				public getLicense(key: string): org.kohsuke.github.GHLicense;
				public listMarketplacePlans(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHMarketplacePlan>;
				public static connectUsingOAuth(oauthAccessToken: string): org.kohsuke.github.GitHub;
				public static connect(login: string, oauthAccessToken: string): org.kohsuke.github.GitHub;
				public getProjectColumn(id: number): org.kohsuke.github.GHProjectColumn;
				public refreshCache(): void;
				public isOffline(): boolean;
				public getMyTeams(): java.util.Map<string,java.util.Set<org.kohsuke.github.GHTeam>>;
				/** @deprecated */
				public createRepository(name: string, description: string, homepage: string, isPublic: boolean): org.kohsuke.github.GHRepository;
				public isAnonymous(): boolean;
				public renderMarkdown(text: string): java.io.Reader;
				public checkApiUrlValidity(): void;
				public static getMappingObjectWriter(): com.fasterxml.jackson.databind.ObjectWriter;
				/** @deprecated */
				public getConnector(): org.kohsuke.github.HttpConnector;
				public listAllPublicRepositories(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				public getMyInvitations(): java.util.List<org.kohsuke.github.GHInvitation>;
				public getEvents(): java.util.List<org.kohsuke.github.GHEventInfo>;
				public static connect(): org.kohsuke.github.GitHub;
				public getRateLimit(): org.kohsuke.github.GHRateLimit;
				public getRepositoryById(id: number): org.kohsuke.github.GHRepository;
				public resetAuth(clientId: string, accessToken: string): org.kohsuke.github.GHAuthorization;
				public getGist(id: string): org.kohsuke.github.GHGist;
				public createGist(): org.kohsuke.github.GHGistBuilder;
				public searchContent(): org.kohsuke.github.GHContentSearchBuilder;
				public listAllPublicRepositories(since: string): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHRepository>;
				/** @deprecated */
				public static connectToEnterprise(apiUrl: string, oauthAccessToken: string): org.kohsuke.github.GitHub;
				public checkAuth(clientId: string, accessToken: string): org.kohsuke.github.GHAuthorization;
				public static connectToEnterpriseAnonymously(apiUrl: string): org.kohsuke.github.GitHub;
				/** @deprecated */
				public getRepositoryById(id: string): org.kohsuke.github.GHRepository;
				public static getMappingObjectReader(): com.fasterxml.jackson.databind.ObjectReader;
				public static offline(): org.kohsuke.github.GitHub;
				public createOrGetAuth(clientId: string, clientSecret: string, scopes: java.util.List<string>, note: string, note_url: string): org.kohsuke.github.GHAuthorization;
				/** @deprecated */
				public static connectToEnterprise(apiUrl: string, login: string, password: string): org.kohsuke.github.GitHub;
				public parseEventPayload(r: java.io.Reader, type: java.lang.Class<any>): org.kohsuke.github.GHEventPayload;
				/** @deprecated */
				public getTeam(id: number): org.kohsuke.github.GHTeam;
				public createToken(scope: java.util.Collection<string>, note: string, noteUrl: string): org.kohsuke.github.GHAuthorization;
				/** @deprecated */
				public static connect(login: string, oauthAccessToken: string, password: string): org.kohsuke.github.GitHub;
				public getUserPublicOrganizations(user: org.kohsuke.github.GHUser): java.util.Map<string,org.kohsuke.github.GHOrganization>;
				public listUsers(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHUser>;
			}
			export module GitHub {
				export class AuthorizationRefreshGitHubWrapper extends org.kohsuke.github.GitHub {
					public static class: java.lang.Class<org.kohsuke.github.GitHub.AuthorizationRefreshGitHubWrapper>;
				}
				export abstract class DependentAuthorizationProvider extends java.lang.Object implements org.kohsuke.github.authorization.AuthorizationProvider {
					public static class: java.lang.Class<org.kohsuke.github.GitHub.DependentAuthorizationProvider>;
					public gitHub(): org.kohsuke.github.GitHub;
					public getEncodedAuthorization(): string;
					public constructor(authorizationProvider: org.kohsuke.github.authorization.AuthorizationProvider);
				}
				export class LoginLoadingUserAuthorizationProvider extends java.lang.Object implements org.kohsuke.github.authorization.UserAuthorizationProvider {
					public static class: java.lang.Class<org.kohsuke.github.GitHub.LoginLoadingUserAuthorizationProvider>;
					public getLogin(): string;
					public getEncodedAuthorization(): string;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GitHubAbuseLimitHandler extends org.kohsuke.github.GitHubConnectorResponseErrorHandler {
				public static class: java.lang.Class<org.kohsuke.github.GitHubAbuseLimitHandler>;
				public onError(param0: org.kohsuke.github.connector.GitHubConnectorResponse): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GitHubBuilder extends java.lang.Object implements java.lang.Cloneable {
				public static class: java.lang.Class<org.kohsuke.github.GitHubBuilder>;
				public withJwtToken(jwtToken: string): org.kohsuke.github.GitHubBuilder;
				/** @deprecated */
				public withConnector(connector: org.kohsuke.github.HttpConnector): org.kohsuke.github.GitHubBuilder;
				public withRateLimitHandler(handler: org.kohsuke.github.RateLimitHandler): org.kohsuke.github.GitHubBuilder;
				/** @deprecated */
				public static fromEnvironment(loginVariableName: string, passwordVariableName: string, oauthVariableName: string): org.kohsuke.github.GitHubBuilder;
				public static fromPropertyFile(): org.kohsuke.github.GitHubBuilder;
				public static fromProperties(props: java.util.Properties): org.kohsuke.github.GitHubBuilder;
				public withConnector(connector: org.kohsuke.github.connector.GitHubConnector): org.kohsuke.github.GitHubBuilder;
				public clone(): org.kohsuke.github.GitHubBuilder;
				public constructor();
				public static fromPropertyFile(propertyFileName: string): org.kohsuke.github.GitHubBuilder;
				public withAppInstallationToken(appInstallationToken: string): org.kohsuke.github.GitHubBuilder;
				public clone(): any;
				public withEndpoint(endpoint: string): org.kohsuke.github.GitHubBuilder;
				public withRateLimitHandler(handler: org.kohsuke.github.GitHubRateLimitHandler): org.kohsuke.github.GitHubBuilder;
				public build(): org.kohsuke.github.GitHub;
				public withAbuseLimitHandler(handler: org.kohsuke.github.GitHubAbuseLimitHandler): org.kohsuke.github.GitHubBuilder;
				public static fromEnvironment(): org.kohsuke.github.GitHubBuilder;
				public withOAuthToken(oauthToken: string, user: string): org.kohsuke.github.GitHubBuilder;
				public withAuthorizationProvider(authorizationProvider: org.kohsuke.github.authorization.AuthorizationProvider): org.kohsuke.github.GitHubBuilder;
				public withPassword(user: string, password: string): org.kohsuke.github.GitHubBuilder;
				/** @deprecated */
				public withAbuseLimitHandler(handler: org.kohsuke.github.AbuseLimitHandler): org.kohsuke.github.GitHubBuilder;
				public withOAuthToken(oauthToken: string): org.kohsuke.github.GitHubBuilder;
				public withProxy(p: java.net.Proxy): org.kohsuke.github.GitHubBuilder;
				public withRateLimitChecker(coreRateLimitChecker: org.kohsuke.github.RateLimitChecker): org.kohsuke.github.GitHubBuilder;
				/** @deprecated */
				public static fromEnvironment(loginVariableName: string, passwordVariableName: string, oauthVariableName: string, endpointVariableName: string): org.kohsuke.github.GitHubBuilder;
				public withRateLimitChecker(rateLimitChecker: org.kohsuke.github.RateLimitChecker, rateLimitTarget: org.kohsuke.github.RateLimitTarget): org.kohsuke.github.GitHubBuilder;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GitHubClient extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GitHubClient>;
				public isOffline(): boolean;
				public sendRequest(request: org.kohsuke.github.GitHubRequest, handler: org.kohsuke.github.GitHubClient.BodyHandler<any>): org.kohsuke.github.GitHubResponse<any>;
				public isAnonymous(): boolean;
				public isCredentialValid(): boolean;
				/** @deprecated */
				public setConnector(connector: org.kohsuke.github.connector.GitHubConnector): void;
				public getRateLimit(): org.kohsuke.github.GHRateLimit;
				public sendRequest(builder: org.kohsuke.github.GitHubRequest.Builder<any>, handler: org.kohsuke.github.GitHubClient.BodyHandler<any>): org.kohsuke.github.GitHubResponse<any>;
				public checkApiUrlValidity(): void;
				public getApiUrl(): string;
				/** @deprecated */
				public getConnector(): org.kohsuke.github.HttpConnector;
			}
			export module GitHubClient {
				export class BodyHandler<T>  extends org.kohsuke.github.function.FunctionThrows<org.kohsuke.github.connector.GitHubConnectorResponse,any,java.io.IOException> {
					public static class: java.lang.Class<org.kohsuke.github.GitHubClient.BodyHandler<any>>;
					/**
					 * Constructs a new instance of the org.kohsuke.github.GitHubClient$BodyHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: any): any;
					});
					public constructor();
					public apply(param0: any): any;
				}
				export class GHApiInfo extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GitHubClient.GHApiInfo>;
				}
				export class RetryRequestException extends java.io.IOException {
					public static class: java.lang.Class<org.kohsuke.github.GitHubClient.RetryRequestException>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GitHubConnectorResponseErrorHandler extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GitHubConnectorResponseErrorHandler>;
				public onError(param0: org.kohsuke.github.connector.GitHubConnectorResponse): void;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GitHubInteractiveObject extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GitHubInteractiveObject>;
				/** @deprecated */
				public getRoot(): org.kohsuke.github.GitHub;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GitHubPageContentsIterable<T>  extends org.kohsuke.github.PagedIterable<any> {
				public static class: java.lang.Class<org.kohsuke.github.GitHubPageContentsIterable<any>>;
				public iterator(): org.kohsuke.github.PagedIterator<any>;
				public spliterator(): java.util.Spliterator<any>;
				public _iterator(param0: number): org.kohsuke.github.PagedIterator<any>;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public _iterator(pageSize: number): org.kohsuke.github.PagedIterator<any>;
			}
			export module GitHubPageContentsIterable {
				export class GitHubPageContentsIterator extends org.kohsuke.github.PagedIterator<any> {
					public static class: java.lang.Class<org.kohsuke.github.GitHubPageContentsIterable.GitHubPageContentsIterator>;
					public constructor(param0: org.kohsuke.github.GitHubPageIterator<any[]>, iterator: any /* any*/);
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GitHubPageIterator<T>  extends java.util.Iterator<any> {
				public static class: java.lang.Class<org.kohsuke.github.GitHubPageIterator<any>>;
				public next(): any;
				public hasNext(): boolean;
				public finalResponse(): org.kohsuke.github.GitHubResponse<any>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GitHubRateLimitChecker extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GitHubRateLimitChecker>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class GitHubRateLimitHandler extends org.kohsuke.github.GitHubConnectorResponseErrorHandler {
				public static class: java.lang.Class<org.kohsuke.github.GitHubRateLimitHandler>;
				public onError(param0: org.kohsuke.github.connector.GitHubConnectorResponse): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GitHubRequest extends java.lang.Object implements org.kohsuke.github.connector.GitHubConnectorRequest {
				public static class: java.lang.Class<org.kohsuke.github.GitHubRequest>;
				public header(param0: string): string;
				public hasBody(): boolean;
				public rateLimitTarget(): org.kohsuke.github.RateLimitTarget;
				public apiUrl(): string;
				public injectedMappingValues(): java.util.Map<string,any>;
				public args(): java.util.List<org.kohsuke.github.GitHubRequest.Entry>;
				public allHeaders(): java.util.Map<string,java.util.List<string>>;
				public header(name: string): string;
				public urlPath(): string;
				public contentType(): string;
				public url(): java.net.URL;
				public body(): java.io.InputStream;
				public method(): string;
			}
			export module GitHubRequest {
				export class Builder<B>  extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GitHubRequest.Builder<any>>;
					public injectMappingValue(value: any): B;
					public remove(key: string): B;
					public with(key: string, value: boolean): B;
					public contentType(contentType: string): B;
					public with(body: java.io.InputStream): B;
					public withUrlPath(urlPath: string, ...urlPathItems: string[]): B;
					public with(key: string, value: string): B;
					public withPreview(name: string): B;
					public constructor();
					public inBody(): B;
					public with(key: string, value: number): B;
					public setHeader(name: string, value: string): B;
					public with(key: string, value: java.util.Collection<any>): B;
					public method(method: string): B;
					public withPreview(preview: org.kohsuke.github.internal.Previews): B;
					public with(key: string, value: java.util.Map<any,any>): B;
					public rateLimit(rateLimitTarget: org.kohsuke.github.RateLimitTarget): B;
					public withApiUrl(url: string): B;
					public injectMappingValue(name: string, value: any): B;
					public withNullable(key: string, value: any): B;
					public build(): org.kohsuke.github.GitHubRequest;
					public with(map: java.util.Map<string,any>): B;
					public set(key: string, value: any): B;
					public withHeader(name: string, value: string): B;
					public with(key: string, e: java.lang.Enum<any>): B;
					public with(key: string, value: any): B;
				}
				export class Entry extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.GitHubRequest.Entry>;
					public constructor(key: string, value: any);
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GitHubResponse<T>  extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GitHubResponse<any>>;
				public headers(field: string): java.util.List<string>;
				public statusCode(): number;
				public body(): T;
				public header(name: string): string;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class GitUser extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.GitUser>;
				public getEmail(): string;
				public getDate(): java.util.Date;
				public getUsername(): string;
				public getName(): string;
				public constructor(user: org.kohsuke.github.GitUser);
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class HttpConnector extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.HttpConnector>;
				/**
				 * Constructs a new instance of the org.kohsuke.github.HttpConnector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					connect(param0: java.net.URL): java.net.HttpURLConnection;
					lambda$static$1(url: java.net.URL): java.net.HttpURLConnection;
					lambda$static$0(url: java.net.URL): java.net.HttpURLConnection;
					"<clinit>"(): void;
				});
				public constructor();
				public static DEFAULT: org.kohsuke.github.HttpConnector;
				public static OFFLINE: org.kohsuke.github.HttpConnector;
				public connect(param0: java.net.URL): java.net.HttpURLConnection;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class HttpException extends org.kohsuke.github.GHIOException {
				public static class: java.lang.Class<org.kohsuke.github.HttpException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string, responseCode: number, responseMessage: string, url: string);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public getUrl(): string;
				public constructor(connectorResponse: org.kohsuke.github.connector.GitHubConnectorResponse);
				public constructor();
				public getResponseMessage(): string;
				public getResponseCode(): number;
				public constructor(message: string, responseCode: number, responseMessage: string, url: string, cause: java.lang.Throwable);
				public constructor(responseCode: number, responseMessage: string, url: string, cause: java.lang.Throwable);
				public constructor(responseCode: number, responseMessage: string, url: java.net.URL, cause: java.lang.Throwable);
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class JsonRateLimit extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.JsonRateLimit>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class MarkdownMode {
				public static class: java.lang.Class<org.kohsuke.github.MarkdownMode>;
				public static MARKDOWN: org.kohsuke.github.MarkdownMode;
				public static GFM: org.kohsuke.github.MarkdownMode;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): org.kohsuke.github.MarkdownMode;
				public toString(): string;
				public static values(): org.kohsuke.github.MarkdownMode[];
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class PagedIterable<T>  extends java.lang.Iterable<any> {
				public static class: java.lang.Class<org.kohsuke.github.PagedIterable<any>>;
				public toSet(): java.util.Set<any>;
				public withPageSize(size: number): org.kohsuke.github.PagedIterable<any>;
				public spliterator(): java.util.Spliterator<any>;
				public toArray(iterator: org.kohsuke.github.PagedIterator<any>): any[];
				/** @deprecated */
				public asSet(): java.util.Set<any>;
				public _iterator(param0: number): org.kohsuke.github.PagedIterator<any>;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public toArray(): any[];
				public constructor();
				public iterator(): org.kohsuke.github.PagedIterator<any>;
				public toList(): java.util.List<any>;
				/** @deprecated */
				public asList(): java.util.List<any>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class PagedIterator<T>  extends java.util.Iterator<any> {
				public static class: java.lang.Class<org.kohsuke.github.PagedIterator<any>>;
				public base: java.util.Iterator<any[]>;
				public next(): any;
				public wrapUp(page: any[]): void;
				public hasNext(): boolean;
				public nextPage(): java.util.List<any>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class PagedSearchIterable<T>  extends org.kohsuke.github.PagedIterable<any> {
				public static class: java.lang.Class<org.kohsuke.github.PagedSearchIterable<any>>;
				public iterator(): org.kohsuke.github.PagedIterator<any>;
				public withPageSize(size: number): org.kohsuke.github.PagedIterable<any>;
				public isIncomplete(): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public adapt(base: java.util.Iterator<any>): java.util.Iterator<any[]>;
				public withPageSize(size: number): org.kohsuke.github.PagedSearchIterable<any>;
				public _iterator(param0: number): org.kohsuke.github.PagedIterator<any>;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public _iterator(pageSize: number): org.kohsuke.github.PagedIterator<any>;
				public getTotalCount(): number;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class Preview extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.kohsuke.github.Preview>;
				/**
				 * Constructs a new instance of the org.kohsuke.github.Preview interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					value(): org.kohsuke.github.internal.Previews[];
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
				public value(): org.kohsuke.github.internal.Previews[];
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class RateLimitChecker extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.RateLimitChecker>;
				public static NONE: org.kohsuke.github.RateLimitChecker;
				public checkRateLimit(rateLimitRecord: org.kohsuke.github.GHRateLimit.Record, count: number): boolean;
				public sleepUntilReset(record: org.kohsuke.github.GHRateLimit.Record): boolean;
				public constructor();
			}
			export module RateLimitChecker {
				export class LiteralValue extends org.kohsuke.github.RateLimitChecker {
					public static class: java.lang.Class<org.kohsuke.github.RateLimitChecker.LiteralValue>;
					public constructor(sleepAtOrBelow: number);
					public constructor();
					public checkRateLimit(rateLimitRecord: org.kohsuke.github.GHRateLimit.Record, count: number): boolean;
					public checkRateLimit(record: org.kohsuke.github.GHRateLimit.Record, count: number): boolean;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class RateLimitHandler extends org.kohsuke.github.GitHubRateLimitHandler {
				public static class: java.lang.Class<org.kohsuke.github.RateLimitHandler>;
				public static WAIT: org.kohsuke.github.RateLimitHandler;
				public static FAIL: org.kohsuke.github.RateLimitHandler;
				public onError(connectorResponse: org.kohsuke.github.connector.GitHubConnectorResponse): void;
				public onError(param0: org.kohsuke.github.connector.GitHubConnectorResponse): void;
				/** @deprecated */
				public onError(param0: java.io.IOException, param1: java.net.HttpURLConnection): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class RateLimitTarget {
				public static class: java.lang.Class<org.kohsuke.github.RateLimitTarget>;
				public static CORE: org.kohsuke.github.RateLimitTarget;
				public static SEARCH: org.kohsuke.github.RateLimitTarget;
				public static GRAPHQL: org.kohsuke.github.RateLimitTarget;
				public static INTEGRATION_MANIFEST: org.kohsuke.github.RateLimitTarget;
				public static NONE: org.kohsuke.github.RateLimitTarget;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): org.kohsuke.github.RateLimitTarget[];
				public static valueOf(name: string): org.kohsuke.github.RateLimitTarget;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class Reactable extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.Reactable>;
				/**
				 * Constructs a new instance of the org.kohsuke.github.Reactable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					listReactions(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHReaction>;
					createReaction(param0: org.kohsuke.github.ReactionContent): org.kohsuke.github.GHReaction;
					deleteReaction(param0: org.kohsuke.github.GHReaction): void;
				});
				public constructor();
				public deleteReaction(param0: org.kohsuke.github.GHReaction): void;
				public listReactions(): org.kohsuke.github.PagedIterable<org.kohsuke.github.GHReaction>;
				public createReaction(param0: org.kohsuke.github.ReactionContent): org.kohsuke.github.GHReaction;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class ReactionContent {
				public static class: java.lang.Class<org.kohsuke.github.ReactionContent>;
				public static PLUS_ONE: org.kohsuke.github.ReactionContent;
				public static MINUS_ONE: org.kohsuke.github.ReactionContent;
				public static LAUGH: org.kohsuke.github.ReactionContent;
				public static CONFUSED: org.kohsuke.github.ReactionContent;
				public static HEART: org.kohsuke.github.ReactionContent;
				public static HOORAY: org.kohsuke.github.ReactionContent;
				public static ROCKET: org.kohsuke.github.ReactionContent;
				public static EYES: org.kohsuke.github.ReactionContent;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): org.kohsuke.github.ReactionContent;
				public static forContent(content: string): org.kohsuke.github.ReactionContent;
				public getContent(): string;
				public static values(): org.kohsuke.github.ReactionContent[];
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class Refreshable extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.Refreshable>;
				/**
				 * Constructs a new instance of the org.kohsuke.github.Refreshable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					refresh(): void;
					refresh(value: any): void;
				});
				public constructor();
				public refresh(): void;
				public refresh(value: any): void;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class Requester extends org.kohsuke.github.GitHubRequest.Builder<org.kohsuke.github.Requester> {
				public static class: java.lang.Class<org.kohsuke.github.Requester>;
				public static copyInputStream(inputStream: java.io.InputStream): java.io.InputStream;
				public fetchHttpStatusCode(): number;
				public fetch(type: java.lang.Class<any>): any;
				public send(): void;
				public fetchStream(handler: org.kohsuke.github.function.InputStreamFunction<any>): any;
				public toIterable(type: java.lang.Class<any>, itemInitializer: any /* any*/): org.kohsuke.github.PagedIterable<any>;
				public fetchInto(existingInstance: any): any;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export abstract class SearchResult<T>  extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.SearchResult<any>>;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class SkipFromToString extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<org.kohsuke.github.SkipFromToString>;
				/**
				 * Constructs a new instance of the org.kohsuke.github.SkipFromToString interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export class TrafficInfo extends java.lang.Object {
				public static class: java.lang.Class<org.kohsuke.github.TrafficInfo>;
				/**
				 * Constructs a new instance of the org.kohsuke.github.TrafficInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCount(): number;
					getUniques(): number;
				});
				public constructor();
				public getCount(): number;
				public getUniques(): number;
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module authorization {
				export class AnonymousAuthorizationProvider extends java.lang.Object implements org.kohsuke.github.authorization.AuthorizationProvider {
					public static class: java.lang.Class<org.kohsuke.github.authorization.AnonymousAuthorizationProvider>;
					public constructor();
					public getEncodedAuthorization(): string;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module authorization {
				export class AuthorizationProvider extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.authorization.AuthorizationProvider>;
					/**
					 * Constructs a new instance of the org.kohsuke.github.authorization.AuthorizationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getEncodedAuthorization(): string;
						"<clinit>"(): void;
					});
					public constructor();
					public static ANONYMOUS: org.kohsuke.github.authorization.AuthorizationProvider;
					public getEncodedAuthorization(): string;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module authorization {
				export class ImmutableAuthorizationProvider extends java.lang.Object implements org.kohsuke.github.authorization.AuthorizationProvider {
					public static class: java.lang.Class<org.kohsuke.github.authorization.ImmutableAuthorizationProvider>;
					public static fromAppInstallationToken(appInstallationToken: string): org.kohsuke.github.authorization.AuthorizationProvider;
					/** @deprecated */
					public static fromLoginAndPassword(login: string, password: string): org.kohsuke.github.authorization.AuthorizationProvider;
					public static fromOauthToken(oauthAccessToken: string): org.kohsuke.github.authorization.AuthorizationProvider;
					public static fromJwtToken(jwtToken: string): org.kohsuke.github.authorization.AuthorizationProvider;
					public static fromOauthToken(oauthAccessToken: string, login: string): org.kohsuke.github.authorization.AuthorizationProvider;
					public constructor(authorization: string);
					public getEncodedAuthorization(): string;
				}
				export module ImmutableAuthorizationProvider {
					export class UserProvider extends org.kohsuke.github.authorization.ImmutableAuthorizationProvider implements org.kohsuke.github.authorization.UserAuthorizationProvider {
						public static class: java.lang.Class<org.kohsuke.github.authorization.ImmutableAuthorizationProvider.UserProvider>;
						public getEncodedAuthorization(): string;
						public getLogin(): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module authorization {
				export class OrgAppInstallationAuthorizationProvider extends org.kohsuke.github.GitHub.DependentAuthorizationProvider {
					public static class: java.lang.Class<org.kohsuke.github.authorization.OrgAppInstallationAuthorizationProvider>;
					public constructor(organizationName: string, authorizationProvider: org.kohsuke.github.authorization.AuthorizationProvider);
					public getEncodedAuthorization(): string;
					public constructor(authorizationProvider: org.kohsuke.github.authorization.AuthorizationProvider);
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module authorization {
				export class UserAuthorizationProvider extends java.lang.Object implements org.kohsuke.github.authorization.AuthorizationProvider {
					public static class: java.lang.Class<org.kohsuke.github.authorization.UserAuthorizationProvider>;
					/**
					 * Constructs a new instance of the org.kohsuke.github.authorization.UserAuthorizationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getLogin(): string;
						getEncodedAuthorization(): string;
						"<clinit>"(): void;
					});
					public constructor();
					public static ANONYMOUS: org.kohsuke.github.authorization.AuthorizationProvider;
					public getLogin(): string;
					public getEncodedAuthorization(): string;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module connector {
				export class GitHubConnector extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.connector.GitHubConnector>;
					/**
					 * Constructs a new instance of the org.kohsuke.github.connector.GitHubConnector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						send(param0: org.kohsuke.github.connector.GitHubConnectorRequest): org.kohsuke.github.connector.GitHubConnectorResponse;
						"<clinit>"(): void;
					});
					public constructor();
					public static DEFAULT: org.kohsuke.github.connector.GitHubConnector;
					public static OFFLINE: org.kohsuke.github.connector.GitHubConnector;
					public send(param0: org.kohsuke.github.connector.GitHubConnectorRequest): org.kohsuke.github.connector.GitHubConnectorResponse;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module connector {
				export class GitHubConnectorRequest extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.connector.GitHubConnectorRequest>;
					/**
					 * Constructs a new instance of the org.kohsuke.github.connector.GitHubConnectorRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						method(): string;
						allHeaders(): java.util.Map<string,java.util.List<string>>;
						header(param0: string): string;
						contentType(): string;
						body(): java.io.InputStream;
						url(): java.net.URL;
						hasBody(): boolean;
					});
					public constructor();
					public body(): java.io.InputStream;
					public contentType(): string;
					public allHeaders(): java.util.Map<string,java.util.List<string>>;
					public header(param0: string): string;
					public url(): java.net.URL;
					public hasBody(): boolean;
					public method(): string;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module connector {
				export abstract class GitHubConnectorResponse extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<org.kohsuke.github.connector.GitHubConnectorResponse>;
					public header(name: string): string;
					public request(): org.kohsuke.github.connector.GitHubConnectorRequest;
					public wrapStream(stream: java.io.InputStream): java.io.InputStream;
					public allHeaders(): java.util.Map<string,java.util.List<string>>;
					public constructor(request: org.kohsuke.github.connector.GitHubConnectorRequest, statusCode: number, headers: java.util.Map<string,java.util.List<string>>);
					public parseInt(name: string): number;
					public close(): void;
					public statusCode(): number;
					public bodyStream(): java.io.InputStream;
					/** @deprecated */
					public toHttpURLConnection(): java.net.HttpURLConnection;
				}
				export module GitHubConnectorResponse {
					export abstract class ByteArrayResponse extends org.kohsuke.github.connector.GitHubConnectorResponse {
						public static class: java.lang.Class<org.kohsuke.github.connector.GitHubConnectorResponse.ByteArrayResponse>;
						public rawBodyStream(): java.io.InputStream;
						public constructor(request: org.kohsuke.github.connector.GitHubConnectorRequest, statusCode: number, headers: java.util.Map<string,java.util.List<string>>);
						public close(): void;
						public bodyStream(): java.io.InputStream;
					}
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module connector {
				export class GitHubConnectorResponseHttpUrlConnectionAdapter extends java.net.HttpURLConnection {
					public static class: java.lang.Class<org.kohsuke.github.connector.GitHubConnectorResponseHttpUrlConnectionAdapter>;
					public getAllowUserInteraction(): boolean;
					public getExpiration(): number;
					public getDate(): number;
					public constructor(u: java.net.URL);
					public setInstanceFollowRedirects(followRedirects: boolean): void;
					public getResponseCode(): number;
					public getDoInput(): boolean;
					public constructor(connectorResponse: org.kohsuke.github.connector.GitHubConnectorResponse);
					public getContentLengthLong(): number;
					public setConnectTimeout(timeout: number): void;
					public getContentLength(): number;
					public setDefaultUseCaches(defaultusecaches: boolean): void;
					public setReadTimeout(timeout: number): void;
					public toString(): string;
					public connect(): void;
					public getHeaderFieldKey(n: number): string;
					public getInputStream(): java.io.InputStream;
					public getConnectTimeout(): number;
					public disconnect(): void;
					public getHeaderFieldDate(name: string, defaultValue: number): number;
					public getHeaderFieldDate(name: string, Default: number): number;
					public getDefaultUseCaches(): boolean;
					public getPermission(): java.security.Permission;
					public getHeaderField(name: string): string;
					public getRequestProperty(key: string): string;
					public getIfModifiedSince(): number;
					public getInstanceFollowRedirects(): boolean;
					public getContentType(): string;
					public getContent(): any;
					public getResponseMessage(): string;
					public getDoOutput(): boolean;
					public getRequestMethod(): string;
					public getContent(classes: java.lang.Class<any>[]): any;
					public getErrorStream(): java.io.InputStream;
					public getContentEncoding(): string;
					public getReadTimeout(): number;
					public getHeaderFieldInt(name: string, defaultValue: number): number;
					public getHeaderField(n: number): string;
					public getHeaderFieldLong(name: string, defaultValue: number): number;
					public getOutputStream(): java.io.OutputStream;
					public getUseCaches(): boolean;
					public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
					public getHeaderFieldLong(name: string, Default: number): number;
					public getHeaderFieldInt(name: string, Default: number): number;
					public getLastModified(): number;
					public usingProxy(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module example {
				export module dataobject {
					export class ReadOnlyObjects extends java.lang.Object {
						public static class: java.lang.Class<org.kohsuke.github.example.dataobject.ReadOnlyObjects>;
						public constructor();
					}
					export module ReadOnlyObjects {
						export class GHMetaExample extends java.lang.Object {
							public static class: java.lang.Class<org.kohsuke.github.example.dataobject.ReadOnlyObjects.GHMetaExample>;
							/**
							 * Constructs a new instance of the org.kohsuke.github.example.dataobject.ReadOnlyObjects$GHMetaExample interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								isVerifiablePasswordAuthentication(): boolean;
								getHooks(): java.util.List<string>;
								getGit(): java.util.List<string>;
								getWeb(): java.util.List<string>;
								getApi(): java.util.List<string>;
								getPages(): java.util.List<string>;
								getImporter(): java.util.List<string>;
							});
							public constructor();
							public getHooks(): java.util.List<string>;
							public getGit(): java.util.List<string>;
							public getPages(): java.util.List<string>;
							public getWeb(): java.util.List<string>;
							public getApi(): java.util.List<string>;
							public isVerifiablePasswordAuthentication(): boolean;
							public getImporter(): java.util.List<string>;
						}
						export class GHMetaGettersFinal extends java.lang.Object implements org.kohsuke.github.example.dataobject.ReadOnlyObjects.GHMetaExample {
							public static class: java.lang.Class<org.kohsuke.github.example.dataobject.ReadOnlyObjects.GHMetaGettersFinal>;
							public getHooks(): java.util.List<string>;
							public getGit(): java.util.List<string>;
							public getPages(): java.util.List<string>;
							public getWeb(): java.util.List<string>;
							public getApi(): java.util.List<string>;
							public isVerifiablePasswordAuthentication(): boolean;
							public getImporter(): java.util.List<string>;
						}
						export class GHMetaGettersFinalCreator extends java.lang.Object implements org.kohsuke.github.example.dataobject.ReadOnlyObjects.GHMetaExample {
							public static class: java.lang.Class<org.kohsuke.github.example.dataobject.ReadOnlyObjects.GHMetaGettersFinalCreator>;
							public getHooks(): java.util.List<string>;
							public getGit(): java.util.List<string>;
							public getPages(): java.util.List<string>;
							public getWeb(): java.util.List<string>;
							public getApi(): java.util.List<string>;
							public isVerifiablePasswordAuthentication(): boolean;
							public getImporter(): java.util.List<string>;
						}
						export class GHMetaGettersUnmodifiable extends java.lang.Object implements org.kohsuke.github.example.dataobject.ReadOnlyObjects.GHMetaExample {
							public static class: java.lang.Class<org.kohsuke.github.example.dataobject.ReadOnlyObjects.GHMetaGettersUnmodifiable>;
							public constructor();
							public getHooks(): java.util.List<string>;
							public getGit(): java.util.List<string>;
							public getPages(): java.util.List<string>;
							public getWeb(): java.util.List<string>;
							public getApi(): java.util.List<string>;
							public isVerifiablePasswordAuthentication(): boolean;
							public getImporter(): java.util.List<string>;
						}
						export class GHMetaPackage extends java.lang.Object implements org.kohsuke.github.example.dataobject.ReadOnlyObjects.GHMetaExample {
							public static class: java.lang.Class<org.kohsuke.github.example.dataobject.ReadOnlyObjects.GHMetaPackage>;
							public constructor();
							public getHooks(): java.util.List<string>;
							public getGit(): java.util.List<string>;
							public getPages(): java.util.List<string>;
							public getWeb(): java.util.List<string>;
							public getApi(): java.util.List<string>;
							public isVerifiablePasswordAuthentication(): boolean;
							public getImporter(): java.util.List<string>;
						}
						export class GHMetaPublic extends java.lang.Object implements org.kohsuke.github.example.dataobject.ReadOnlyObjects.GHMetaExample {
							public static class: java.lang.Class<org.kohsuke.github.example.dataobject.ReadOnlyObjects.GHMetaPublic>;
							public constructor();
							public setVerifiablePasswordAuthentication(verifiablePasswordAuthentication: boolean): void;
							public getHooks(): java.util.List<string>;
							public setGit(git: java.util.List<string>): void;
							public setHooks(hooks: java.util.List<string>): void;
							public setApi(api: java.util.List<string>): void;
							public setWeb(web: java.util.List<string>): void;
							public getPages(): java.util.List<string>;
							public setImporter(importer: java.util.List<string>): void;
							public isVerifiablePasswordAuthentication(): boolean;
							public getImporter(): java.util.List<string>;
							public getGit(): java.util.List<string>;
							public getWeb(): java.util.List<string>;
							public getApi(): java.util.List<string>;
							public setPages(pages: java.util.List<string>): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module extras {
				export class HttpClientGitHubConnector extends java.lang.Object implements org.kohsuke.github.connector.GitHubConnector {
					public static class: java.lang.Class<org.kohsuke.github.extras.HttpClientGitHubConnector>;
					public send(connectorRequest: org.kohsuke.github.connector.GitHubConnectorRequest): org.kohsuke.github.connector.GitHubConnectorResponse;
					public send(param0: org.kohsuke.github.connector.GitHubConnectorRequest): org.kohsuke.github.connector.GitHubConnectorResponse;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module extras {
				export class ImpatientHttpConnector extends java.lang.Object implements org.kohsuke.github.HttpConnector {
					public static class: java.lang.Class<org.kohsuke.github.extras.ImpatientHttpConnector>;
					public static CONNECT_TIMEOUT: number;
					public static READ_TIMEOUT: number;
					public constructor(base: org.kohsuke.github.HttpConnector, connectTimeout: number, readTimeout: number);
					public connect(url: java.net.URL): java.net.HttpURLConnection;
					public constructor(base: org.kohsuke.github.HttpConnector);
					public connect(param0: java.net.URL): java.net.HttpURLConnection;
					public constructor(base: org.kohsuke.github.HttpConnector, timeout: number);
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module extras {
				export class OkHttp3Connector extends java.lang.Object implements org.kohsuke.github.HttpConnector {
					public static class: java.lang.Class<org.kohsuke.github.extras.OkHttp3Connector>;
					/** @deprecated */
					public constructor(urlFactory: okhttp3.OkUrlFactory);
					public connect(url: java.net.URL): java.net.HttpURLConnection;
					public connect(param0: java.net.URL): java.net.HttpURLConnection;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module extras {
				export class OkHttpConnector extends java.lang.Object implements org.kohsuke.github.HttpConnector {
					public static class: java.lang.Class<org.kohsuke.github.extras.OkHttpConnector>;
					public connect(url: java.net.URL): java.net.HttpURLConnection;
					public constructor(urlFactory: com.squareup.okhttp.OkUrlFactory);
					public connect(param0: java.net.URL): java.net.HttpURLConnection;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module extras {
				export module authorization {
					export class JWTTokenProvider extends java.lang.Object implements org.kohsuke.github.authorization.AuthorizationProvider {
						public static class: java.lang.Class<org.kohsuke.github.extras.authorization.JWTTokenProvider>;
						public getEncodedAuthorization(): string;
						public constructor(applicationId: string, keyPath: java.nio.file.Path);
						public constructor(applicationId: string, keyString: string);
						public constructor(applicationId: string, privateKey: java.security.PrivateKey);
						public constructor(applicationId: string, keyFile: java.io.File);
					}
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module extras {
				export module okhttp3 {
					export class ObsoleteUrlFactory extends java.lang.Object implements java.net.URLStreamHandlerFactory, java.lang.Cloneable {
						public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory>;
						public createURLStreamHandler(protocol: string): java.net.URLStreamHandler;
						public clone(): any;
						public createURLStreamHandler(param0: string): java.net.URLStreamHandler;
						public constructor(client: okhttp3.OkHttpClient);
						public client(): okhttp3.OkHttpClient;
						public open(url: java.net.URL): java.net.HttpURLConnection;
						public setClient(client: okhttp3.OkHttpClient): org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory;
						public clone(): org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory;
					}
					export module ObsoleteUrlFactory {
						export class BufferedRequestBody extends org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory.OutputStreamRequestBody {
							public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory.BufferedRequestBody>;
							public writeTo(param0: okio.BufferedSink): void;
							public contentLength(): number;
							public prepareToSendRequest(request: okhttp3.Request): okhttp3.Request;
							public writeTo(sink: okio.BufferedSink): void;
						}
						export abstract class DelegatingHttpsURLConnection extends javax.net.ssl.HttpsURLConnection {
							public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory.DelegatingHttpsURLConnection>;
							public setChunkedStreamingMode(chunklen: number): void;
							public getReadTimeout(): number;
							public getHeaderField(key: string): string;
							public getDefaultUseCaches(): boolean;
							public setAllowUserInteraction(allowuserinteraction: boolean): void;
							public getHeaderFieldDate(field: string, defaultValue: number): number;
							public getInstanceFollowRedirects(): boolean;
							public getResponseCode(): number;
							public setChunkedStreamingMode(chunkLength: number): void;
							public getAllowUserInteraction(): boolean;
							public getExpiration(): number;
							public getContentType(): string;
							public setConnectTimeout(timeout: number): void;
							public getHeaderFieldInt(field: string, defaultValue: number): number;
							public getErrorStream(): java.io.InputStream;
							public getDoInput(): boolean;
							public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
							public getRequestProperty(field: string): string;
							public setUseCaches(usecaches: boolean): void;
							public setAllowUserInteraction(newValue: boolean): void;
							public getRequestMethod(): string;
							public setDefaultUseCaches(defaultusecaches: boolean): void;
							public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
							public getHeaderFieldDate(name: string, Default: number): number;
							public getContent(classes: java.lang.Class<any>[]): any;
							public getIfModifiedSince(): number;
							public setUseCaches(newValue: boolean): void;
							public getContent(types: java.lang.Class<any>[]): any;
							public setConnectTimeout(timeoutMillis: number): void;
							public setHostnameVerifier(v: javax.net.ssl.HostnameVerifier): void;
							public getDoOutput(): boolean;
							public getHeaderFieldLong(name: string, Default: number): number;
							public getURL(): java.net.URL;
							public setReadTimeout(timeout: number): void;
							public getCipherSuite(): string;
							public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
							public getContentLength(): number;
							public getContentLengthLong(): number;
							public getDate(): number;
							public setIfModifiedSince(ifmodifiedsince: number): void;
							public getHeaderFieldLong(field: string, defaultValue: number): number;
							public setRequestProperty(field: string, newValue: string): void;
							public getHeaderFieldKey(position: number): string;
							public setSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
							public getPeerPrincipal(): java.security.Principal;
							public addRequestProperty(field: string, newValue: string): void;
							public toString(): string;
							public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
							public getLocalPrincipal(): java.security.Principal;
							public getRequestProperty(key: string): string;
							public setFixedLengthStreamingMode(contentLength: number): void;
							public setIfModifiedSince(newValue: number): void;
							public setReadTimeout(timeoutMillis: number): void;
							public getOutputStream(): java.io.OutputStream;
							public getHeaderFieldKey(n: number): string;
							public setDoOutput(newValue: boolean): void;
							public setDoOutput(dooutput: boolean): void;
							public connect(): void;
							public setInstanceFollowRedirects(followRedirects: boolean): void;
							public setRequestProperty(key: string, value: string): void;
							public setDefaultUseCaches(newValue: boolean): void;
							public setSSLSocketFactory(sf: javax.net.ssl.SSLSocketFactory): void;
							public setDoInput(doinput: boolean): void;
							public getHeaderField(name: string): string;
							public addRequestProperty(key: string, value: string): void;
							public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
							public getPermission(): java.security.Permission;
							public getResponseMessage(): string;
							public disconnect(): void;
							public getLocalCertificates(): java.security.cert.Certificate[];
							public getInputStream(): java.io.InputStream;
							public handshake(): okhttp3.Handshake;
							public getContent(): any;
							public getUseCaches(): boolean;
							public getConnectTimeout(): number;
							public getServerCertificates(): java.security.cert.Certificate[];
							public setRequestMethod(method: string): void;
							public getHeaderFieldInt(name: string, Default: number): number;
							public getLastModified(): number;
							public usingProxy(): boolean;
							public getContentEncoding(): string;
							public getHeaderField(n: number): string;
							public getHeaderField(pos: number): string;
							public setDoInput(newValue: boolean): void;
						}
						export class OkHttpURLConnection extends java.net.HttpURLConnection implements okhttp3.Callback {
							public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory.OkHttpURLConnection>;
							public setIfModifiedSince(ifmodifiedsince: number): void;
							public onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
							public setRequestProperty(field: string, newValue: string): void;
							public getHeaderFieldKey(position: number): string;
							public getReadTimeout(): number;
							public getHeaderFields(): java.util.Map<string,java.util.List<string>>;
							public getRequestProperty(key: string): string;
							public setIfModifiedSince(newValue: number): void;
							public setFixedLengthStreamingMode(contentLength: number): void;
							public getInstanceFollowRedirects(): boolean;
							public setReadTimeout(timeoutMillis: number): void;
							public getOutputStream(): java.io.OutputStream;
							public getHeaderFieldKey(n: number): string;
							public getResponseCode(): number;
							public connect(): void;
							public setInstanceFollowRedirects(followRedirects: boolean): void;
							public setRequestProperty(key: string, value: string): void;
							public setConnectTimeout(timeout: number): void;
							public getErrorStream(): java.io.InputStream;
							public getRequestProperties(): java.util.Map<string,java.util.List<string>>;
							public getRequestProperty(field: string): string;
							public getHeaderField(name: string): string;
							public addRequestProperty(key: string, value: string): void;
							public getPermission(): java.security.Permission;
							public getResponseMessage(): string;
							public disconnect(): void;
							public getInputStream(): java.io.InputStream;
							public getHeaderField(fieldName: string): string;
							public getConnectTimeout(): number;
							public setConnectTimeout(timeoutMillis: number): void;
							public onResponse(call: okhttp3.Call, response: okhttp3.Response): void;
							public addRequestProperty(field: string, value: string): void;
							public setRequestMethod(method: string): void;
							public setReadTimeout(timeout: number): void;
							public getHeaderField(position: number): string;
							public usingProxy(): boolean;
							public onFailure(call: okhttp3.Call, e: java.io.IOException): void;
							public getHeaderField(n: number): string;
							public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
						}
						export module OkHttpURLConnection {
							export class NetworkInterceptor extends java.lang.Object implements okhttp3.Interceptor {
								public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory.OkHttpURLConnection.NetworkInterceptor>;
								public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
								public proceed(): void;
								public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
							}
						}
						export class OkHttpsURLConnection extends org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory.DelegatingHttpsURLConnection {
							public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory.OkHttpsURLConnection>;
							public setSSLSocketFactory(sslSocketFactory: javax.net.ssl.SSLSocketFactory): void;
							public getSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
							public getHostnameVerifier(): javax.net.ssl.HostnameVerifier;
							public handshake(): okhttp3.Handshake;
							public setSSLSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
							public setHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;
							public setHostnameVerifier(hostnameVerifier: javax.net.ssl.HostnameVerifier): void;
						}
						export abstract class OutputStreamRequestBody extends okhttp3.RequestBody {
							public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory.OutputStreamRequestBody>;
							public contentType(): okhttp3.MediaType;
							public contentLength(): number;
							public prepareToSendRequest(request: okhttp3.Request): okhttp3.Request;
						}
						export class ResponseBodyInputStream extends java.io.InputStream {
							public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory.ResponseBodyInputStream>;
							public markSupported(): boolean;
							public mark(readlimit: number): void;
							public close(): void;
							public available(): number;
							public read(): number;
							public read(b: number[], off: number, len: number): number;
							public skip(n: number): number;
							public read(b: number[]): number;
							public reset(): void;
						}
						export class StreamedRequestBody extends org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory.OutputStreamRequestBody {
							public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory.StreamedRequestBody>;
							public writeTo(param0: okio.BufferedSink): void;
							public isOneShot(): boolean;
							public writeTo(sink: okio.BufferedSink): void;
						}
						export class UnexpectedException extends java.io.IOException {
							public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.ObsoleteUrlFactory.UnexpectedException>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module extras {
				export module okhttp3 {
					export class OkHttpConnector extends java.lang.Object implements org.kohsuke.github.HttpConnector {
						public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.OkHttpConnector>;
						public constructor(client: okhttp3.OkHttpClient);
						public constructor(client: okhttp3.OkHttpClient, cacheMaxAge: number);
						public connect(param0: java.net.URL): java.net.HttpURLConnection;
						public connect(url: java.net.URL): java.net.HttpURLConnection;
					}
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module extras {
				export module okhttp3 {
					export class OkHttpGitHubConnector extends java.lang.Object implements org.kohsuke.github.connector.GitHubConnector {
						public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.OkHttpGitHubConnector>;
						public send(request: org.kohsuke.github.connector.GitHubConnectorRequest): org.kohsuke.github.connector.GitHubConnectorResponse;
						public send(param0: org.kohsuke.github.connector.GitHubConnectorRequest): org.kohsuke.github.connector.GitHubConnectorResponse;
						public constructor(client: okhttp3.OkHttpClient);
						public constructor(client: okhttp3.OkHttpClient, cacheMaxAge: number);
					}
					export module OkHttpGitHubConnector {
						export class OkHttpGitHubConnectorResponse extends org.kohsuke.github.connector.GitHubConnectorResponse.ByteArrayResponse {
							public static class: java.lang.Class<org.kohsuke.github.extras.okhttp3.OkHttpGitHubConnector.OkHttpGitHubConnectorResponse>;
							public close(): void;
							public rawBodyStream(): java.io.InputStream;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module function {
				export class FunctionThrows<T, R, E>  extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.function.FunctionThrows<any,any,any>>;
					/**
					 * Constructs a new instance of the org.kohsuke.github.function.FunctionThrows<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: T): R;
					});
					public constructor();
					public apply(param0: T): R;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module function {
				export class InputStreamFunction<R>  extends org.kohsuke.github.function.FunctionThrows<java.io.InputStream,any,java.io.IOException> {
					public static class: java.lang.Class<org.kohsuke.github.function.InputStreamFunction<any>>;
					/**
					 * Constructs a new instance of the org.kohsuke.github.function.InputStreamFunction<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: any): any;
					});
					public constructor();
					public apply(param0: any): any;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module internal {
				export class DefaultGitHubConnector extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.internal.DefaultGitHubConnector>;
					public static create(): org.kohsuke.github.connector.GitHubConnector;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module internal {
				export class EnumUtils extends java.lang.Object {
					public static class: java.lang.Class<org.kohsuke.github.internal.EnumUtils>;
					public static getNullableEnumOrDefault(enumClass: java.lang.Class<any>, value: string, defaultEnum: java.lang.Enum<any>): java.lang.Enum<any>;
					public static getEnumOrDefault(enumClass: java.lang.Class<any>, value: string, defaultEnum: java.lang.Enum<any>): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module internal {
				export class GitHubConnectorHttpConnectorAdapter extends java.lang.Object implements org.kohsuke.github.connector.GitHubConnector, org.kohsuke.github.HttpConnector {
					public static class: java.lang.Class<org.kohsuke.github.internal.GitHubConnectorHttpConnectorAdapter>;
					public send(param0: org.kohsuke.github.connector.GitHubConnectorRequest): org.kohsuke.github.connector.GitHubConnectorResponse;
					public connect(url: java.net.URL): java.net.HttpURLConnection;
					public static adapt(connector: org.kohsuke.github.HttpConnector): org.kohsuke.github.connector.GitHubConnector;
					public constructor(httpConnector: org.kohsuke.github.HttpConnector);
					public send(request: org.kohsuke.github.connector.GitHubConnectorRequest): org.kohsuke.github.connector.GitHubConnectorResponse;
					public connect(param0: java.net.URL): java.net.HttpURLConnection;
				}
				export module GitHubConnectorHttpConnectorAdapter {
					export class HttpURLConnectionGitHubConnectorResponse extends org.kohsuke.github.connector.GitHubConnectorResponse.ByteArrayResponse {
						public static class: java.lang.Class<org.kohsuke.github.internal.GitHubConnectorHttpConnectorAdapter.HttpURLConnectionGitHubConnectorResponse>;
						public rawBodyStream(): java.io.InputStream;
						public close(): void;
						/** @deprecated */
						public toHttpURLConnection(): java.net.HttpURLConnection;
					}
				}
			}
		}
	}
}

declare module org {
	export module kohsuke {
		export module github {
			export module internal {
				export class Previews {
					public static class: java.lang.Class<org.kohsuke.github.internal.Previews>;
					public static ANTIOPE: org.kohsuke.github.internal.Previews;
					public static ANT_MAN: org.kohsuke.github.internal.Previews;
					public static BAPTISTE: org.kohsuke.github.internal.Previews;
					public static CLOAK: org.kohsuke.github.internal.Previews;
					public static FLASH: org.kohsuke.github.internal.Previews;
					public static GAMBIT: org.kohsuke.github.internal.Previews;
					public static GROOT: org.kohsuke.github.internal.Previews;
					public static INERTIA: org.kohsuke.github.internal.Previews;
					public static LYDIAN: org.kohsuke.github.internal.Previews;
					public static LUKE_CAGE: org.kohsuke.github.internal.Previews;
					public static MACHINE_MAN: org.kohsuke.github.internal.Previews;
					public static MERCY: org.kohsuke.github.internal.Previews;
					public static NEBULA: org.kohsuke.github.internal.Previews;
					public static SHADOW_CAT: org.kohsuke.github.internal.Previews;
					public static SQUIRREL_GIRL: org.kohsuke.github.internal.Previews;
					public static ZZZAX: org.kohsuke.github.internal.Previews;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public mediaType(): string;
					public static values(): org.kohsuke.github.internal.Previews[];
					public static valueOf(name: string): org.kohsuke.github.internal.Previews;
				}
			}
		}
	}
}

//Generics information:
//org.kohsuke.github.AbstractBuilder:2
//org.kohsuke.github.GHDiscussionBuilder:1
//org.kohsuke.github.GHLabelBuilder:1
//org.kohsuke.github.GHPersonSet:1
//org.kohsuke.github.GHQueryBuilder:1
//org.kohsuke.github.GHRepositoryBuilder:1
//org.kohsuke.github.GHSearchBuilder:1
//org.kohsuke.github.GitHubClient.BodyHandler:1
//org.kohsuke.github.GitHubPageContentsIterable:1
//org.kohsuke.github.GitHubPageIterator:1
//org.kohsuke.github.GitHubRequest.Builder:1
//org.kohsuke.github.GitHubResponse:1
//org.kohsuke.github.PagedIterable:1
//org.kohsuke.github.PagedIterator:1
//org.kohsuke.github.PagedSearchIterable:1
//org.kohsuke.github.SearchResult:1
//org.kohsuke.github.function.FunctionThrows:3
//org.kohsuke.github.function.InputStreamFunction:1

