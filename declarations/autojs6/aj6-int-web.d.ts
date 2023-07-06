// Type definitions for AutoJs6 internal module web
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../index.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__web__.js
 */

declare namespace Internal {

    interface Web {

        newInjectableWebView(activity?: android.app.Activity): org.autojs.autojs.core.web.InjectableWebView;

        newInjectableWebClient(): org.autojs.autojs.core.web.InjectableWebClient;

        newWebSocket(url: string): org.autojs.autojs.core.web.WebSocket;

    }

}

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.newInjectableWebClient = function () {
 *     return new org.autojs.autojs.core.web.InjectableWebClient(org.mozilla.javascript.Context.getCurrentContext(), scope);
 * };
 */
declare function newInjectableWebClient(): org.autojs.autojs.core.web.InjectableWebClient;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.newInjectableWebView = function () {
 *     return new org.autojs.autojs.core.web.InjectableWebView(scope.activity, org.mozilla.javascript.Context.getCurrentContext(), scope);
 * };
 */
declare function newInjectableWebView(activity?: android.app.Activity): org.autojs.autojs.core.web.InjectableWebView;

declare function newWebSocket(url: string): org.autojs.autojs.core.web.WebSocket;