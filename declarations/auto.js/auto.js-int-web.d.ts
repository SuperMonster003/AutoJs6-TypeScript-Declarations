// Type definitions for Auto.js internal module web
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/__web__.js
 */

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.newInjectableWebClient = function () {
 *     return new com.stardust.autojs.core.web.InjectableWebClient(org.mozilla.javascript.Context.getCurrentContext(), scope);
 * };
 */
declare function newInjectableWebClient(): com.stardust.autojs.core.web.InjectableWebClient;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.newInjectableWebView = function () {
 *     return new com.stardust.autojs.core.web.InjectableWebView(scope.activity, org.mozilla.javascript.Context.getCurrentContext(), scope);
 * };
 */
declare function newInjectableWebView(): com.stardust.autojs.core.web.InjectableWebView;