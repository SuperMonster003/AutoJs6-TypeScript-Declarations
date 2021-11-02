// Type definitions for Auto.js internal module dialogs
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/__dialogs__.js
 */

declare namespace Internal {
    interface Dialogs {
        /**
         * @example
         * let input = dialogs.rawInput("Square of a number", null, function (input) {
         *     if (input === null) {
         *         return;
         *     }
         *     if (isNaN(+input)) {
         *         return toast('Please input a number');
         *     }
         *     return toastLog("Square of " + input + " is " + input * input);
         * });
         * // blocked
         * console.log(input);
         * @example
         * "ui";
         * dialogs.rawInput("请输入您的名字", "小明").then((name) => {
         *     toast("名字: " + name);
         * });
         * @example Source code summary (zh-CN: 源代码摘要)
         * dialogs.rawInput = function (title, prefill, callback) {
         *     prefill = prefill || "";
         *     if (isUiThread() && !callback) {
         *         return new Promise(function (resolve, reject) {
         *             rtDialogs().rawInput(title, prefill, function () {
         *                 resolve.apply(null, Array.prototype.slice.call(arguments));
         *             });
         *         });
         *     }
         *     return rtDialogs().rawInput(title, prefill, callback ? callback : null);
         * };
         * function isUiThread() {
         *     return android.os.Looper.myLooper() === android.os.Looper.getMainLooper();
         * }
         * function rtDialogs() {
         *     let d = __runtime__.dialogs;
         *     if (!isUiThread()) {
         *         return d.nonUiDialogs;
         *     } else {
         *         return d;
         *     }
         * }
         * @see com.stardust.autojs.runtime.api.Dialogs.rawInput
         * @see com.stardust.autojs.runtime.api.Dialogs.NonUiDialogs.rawInput
         */
        rawInput(title: string, prefill?: string, callback?: (input: string) => void): string | Promise<any>;

        /**
         * @example
         * let age = dialogs.input("请输入您的年龄", "18");
         * let year = new Date().getFullYear() - age;
         * // blocked
         * toastLog("出生年份: " + year);
         * @example
         * "ui";
         * dialogs.input("请输入您的年龄", "18").then((input) => {
         *     let year = new Date().getFullYear() - input;
         *     toastLog("出生年份: " + year);
         * });
         * @example Source code summary (zh-CN: 源代码摘要)
         * dialogs.input = function (title, prefill, callback) {
         *     prefill = prefill || "";
         *     if (isUiThread() && !callback) {
         *         return new Promise(function (resolve, reject) {
         *             rtDialogs().rawInput(title, prefill, function (str) {
         *                 resolve(eval(str));
         *             });
         *         });
         *     }
         *     if (callback) {
         *         dialogs.rawInput(title, prefill, function (str) {
         *             callback(eval(str));
         *         });
         *         return;
         *     }
         *     return eval(dialogs.rawInput(title, prefill), callback ? callback : null);
         * };
         * function isUiThread() {
         *     return android.os.Looper.myLooper() === android.os.Looper.getMainLooper();
         * }
         * function rtDialogs() {
         *     let d = __runtime__.dialogs;
         *     if (!isUiThread()) {
         *         return d.nonUiDialogs;
         *     } else {
         *         return d;
         *     }
         * }
         * @see dialogs.rawInput
         * @see com.stardust.autojs.runtime.api.Dialogs.rawInput
         * @see com.stardust.autojs.runtime.api.Dialogs.NonUiDialogs.rawInput
         */
        input(title: string, prefill?: string, callback?: (input: string) => void): Promise<any> | any;

        /**
         * @example Source code summary (zh-CN: 源代码摘要)
         * dialogs.prompt = dialogs.rawInput;
         * @see dialogs.rawInput
         */
        prompt(title: string, prefill?: string, callback?: (input: string) => void): string | Promise<any>;

        /**
         * @example
         * dialogs.alert("Square of a 20", "400", function (input) {
         *     toastLog(input); // null
         * });
         * // blocked
         * console.log("ok");
         * @example
         * "ui";
         * dialogs.alert("您的名字", "小明").then((name) => {
         *     toastLog(name); // null
         * });
         * @example Source code summary (zh-CN: 源代码摘要)
         * dialogs.alert = function (title, prefill, callback) {
         *     prefill = prefill || "";
         *     if (isUiThread() && !callback) {
         *         return new Promise(function (resolve, reject) {
         *             rtDialogs().alert(title, prefill, function () {
         *                 resolve.apply(null, Array.prototype.slice.call(arguments));
         *             });
         *         });
         *     }
         *     return rtDialogs().alert(title, prefill, callback ? callback : null);
         * };
         * function isUiThread() {
         *     return android.os.Looper.myLooper() === android.os.Looper.getMainLooper();
         * }
         * function rtDialogs() {
         *     let d = __runtime__.dialogs;
         *     if (!isUiThread()) {
         *         return d.nonUiDialogs;
         *     } else {
         *         return d;
         *     }
         * }
         * @see com.stardust.autojs.runtime.api.Dialogs.alert
         * @see com.stardust.autojs.runtime.api.Dialogs.NonUiDialogs.alert
         */
        alert(title: string, content?: string, callback?: (input: null) => void): void | Promise<any>;

        /**
         * @example
         * let result = dialogs.confirm("确定要继续吗", "点击'OK/确定'按钮可继续", function (result) {
         *     toastLog(result);
         * });
         * // blocked
         * console.log(result ? "用户选择继续" : "用户选择放弃");
         * @example
         * "ui";
         * dialogs.confirm("确定吗", "点击'OK/确定'按钮可继续").then((result) => {
         *     toastLog(result);
         * });
         * @example Source code summary (zh-CN: 源代码摘要)
         * dialogs.confirm = function (title, prefill, callback) {
         *     prefill = prefill || "";
         *     if (isUiThread() && !callback) {
         *         return new Promise(function (resolve, reject) {
         *             rtDialogs().confirm(title, prefill, function () {
         *                 resolve.apply(null, Array.prototype.slice.call(arguments));
         *             });
         *         });
         *     }
         *     return rtDialogs().confirm(title, prefill, callback ? callback : null);
         * };
         * function isUiThread() {
         *     return android.os.Looper.myLooper() === android.os.Looper.getMainLooper();
         * }
         * function rtDialogs() {
         *     let d = __runtime__.dialogs;
         *     if (!isUiThread()) {
         *         return d.nonUiDialogs;
         *     } else {
         *         return d;
         *     }
         * }
         * @see com.stardust.autojs.runtime.api.Dialogs.confirm
         * @see com.stardust.autojs.runtime.api.Dialogs.NonUiDialogs.confirm
         */
        confirm(title: string, content?: string, callback?: (input: null) => void): boolean | Promise<any>;

        /**
         * @example
         * let idx = dialogs.select("选择一项", ["A", "B", "C", "D"], function(selected_index){
         *     toastLog(selected_index);
         * });
         * // blocked
         * console.log(idx);
         * @example
         * "ui";
         * dialogs.select("选择一项", ["A", "B", "C", "D"]).then((selected_index) => {
         *     console.log(selected_index);
         * });
         * @example Source code summary (zh-CN: 源代码摘要)
         * dialogs.select = function (title, items, callback) {
         *     if (items instanceof Array) {
         *         if (isUiThread() && !callback) {
         *             return new Promise(function (resolve, reject) {
         *                 rtDialogs().select(title, items, function () {
         *                     resolve.apply(null, Array.prototype.slice.call(arguments));
         *                 });
         *             });
         *         }
         *         return rtDialogs().select(title, items, callback ? callback : null);
         *     }
         *     return rtDialogs().select(title, [].slice.call(arguments, 1), null);
         * };
         * function isUiThread() {
         *     return android.os.Looper.myLooper() === android.os.Looper.getMainLooper();
         * }
         * function rtDialogs() {
         *     let d = __runtime__.dialogs;
         *     if (!isUiThread()) {
         *         return d.nonUiDialogs;
         *     } else {
         *         return d;
         *     }
         * }
         * @see com.stardust.autojs.runtime.api.Dialogs.select
         * @see com.stardust.autojs.runtime.api.Dialogs.NonUiDialogs.select
         */
        select(title: string, items: any[], callback?: (selectedIndex: number) => void): number | Promise<any>;

        /**
         * @example
         * let idx = dialogs.select("选择一项", "A", "B", "C", "D");
         * // blocked
         * console.log(idx);
         * @example Source code summary (zh-CN: 源代码摘要)
         * dialogs.select = function (title, items, callback) {
         *     if (items instanceof Array) {
         *         if (isUiThread() && !callback) {
         *             return new Promise(function (resolve, reject) {
         *                 rtDialogs().select(title, items, function () {
         *                     resolve.apply(null, Array.prototype.slice.call(arguments));
         *                 });
         *             });
         *         }
         *         return rtDialogs().select(title, items, callback ? callback : null);
         *     }
         *     return rtDialogs().select(title, [].slice.call(arguments, 1), null);
         * };
         * function isUiThread() {
         *     return android.os.Looper.myLooper() === android.os.Looper.getMainLooper();
         * }
         * function rtDialogs() {
         *     let d = __runtime__.dialogs;
         *     if (!isUiThread()) {
         *         return d.nonUiDialogs;
         *     } else {
         *         return d;
         *     }
         * }
         * @see com.stardust.autojs.runtime.api.Dialogs.select
         * @see com.stardust.autojs.runtime.api.Dialogs.NonUiDialogs.select
         */
        select(title: string, ...items: any[]): number;

        /**
         * @example
         * let idx = dialogs.singleChoice("请选择一个选项", ["A", "B", "C", "D"], null, function (idx) {
         *     toastLog(idx);
         * });
         * // blocked
         * console.log(idx);
         * @example
         * "ui";
         * dialogs.singleChoice("请选择一个选项", ["A", "B", "C", "D"]).then((idx) => {
         *     toastLog(idx);
         * });
         * @example Source code summary (zh-CN: 源代码摘要)
         * dialogs.singleChoice = function (title, items, index, callback) {
         *     index = index || 0;
         *     if (isUiThread() && !callback) {
         *         return new Promise(function (resolve, reject) {
         *             rtDialogs().singleChoice(title, index, items, function () {
         *                 resolve.apply(null, Array.prototype.slice.call(arguments));
         *             });
         *         });
         *     }
         *     return rtDialogs().singleChoice(title, index, items, callback ? callback : null);
         * };
         * function isUiThread() {
         *     return android.os.Looper.myLooper() === android.os.Looper.getMainLooper();
         * }
         * function rtDialogs() {
         *     let d = __runtime__.dialogs;
         *     if (!isUiThread()) {
         *         return d.nonUiDialogs;
         *     } else {
         *         return d;
         *     }
         * }
         * @see com.stardust.autojs.runtime.api.Dialogs.singleChoice
         * @see com.stardust.autojs.runtime.api.Dialogs.NonUiDialogs.singleChoice
         */
        singleChoice(title: string, items: any[], defaultIndex?: number, callback?: (selectedIndex: number) => void): number | Promise<any>;

        /**
         * @example
         * let indices = dialogs.multiChoice("请选择至少一个选项", ["A", "B", "C", "D"]);
         * console.log(indices);
         * @example
         * let indices = dialogs.multiChoice("请选择至少一个选项", ["A", "B", "C", "D"], [0, 2, 3]);
         * console.log(indices);
         * @example With bug(s)
         * "ui";
         * dialogs.multiChoice("请选择至少一个选项", ["A", "B", "C", "D"], [1]).then(function (indices) {
         *     console.log(indices);
         * });
         * @example Source code summary (zh-CN: 源代码摘要)
         * dialogs.multiChoice = function (title, items, index, callback) {
         *     index = index || [];
         *     if (isUiThread() && !callback) {
         *         return new Promise(function (resolve, reject) {
         *             // BUG 1/3: marked by SuperMonster005 at Jul 30, 2020
         *             // singleChoice -> multiChoice
         *             rtDialogs().singleChoice(title, index, items, function (r) {
         *                 // BUG 2/3: marked by SuperMonster005 at Jul 30, 2020
         *                 // resolve(javaArrayToJsArray(r));
         *                 resolve.apply(null, javaArrayToJsArray(r));
         *             });
         *         });
         *     }
         *     if (callback) {
         *         // BUG 3/3: marked by SuperMonster005 at Jul 30, 2020
         *         // return javaArrayToJsArray(rtDialogs().multiChoice(title, index, items, function (r) {
         *         //     callback(javaArrayToJsArray(r));
         *         // }));
         *         return rtDialogs().multiChoice(title, index, items, function (r) {
         *             callback(javaArrayToJsArray(r));
         *         });
         *     }
         *     return javaArrayToJsArray(rtDialogs().multiChoice(title, index, items, null));
         * };
         * function isUiThread() {
         *     return android.os.Looper.myLooper() === android.os.Looper.getMainLooper();
         * }
         * function rtDialogs() {
         *     let d = __runtime__.dialogs;
         *     if (!isUiThread()) {
         *         return d.nonUiDialogs;
         *     } else {
         *         return d;
         *     }
         * }
         * function javaArrayToJsArray(javaArray) {
         *     let jsArray = [];
         *     let len = javaArray.length;
         *     for (let i = 0; i < len; i++) {
         *         jsArray.push(javaArray[i]);
         *     }
         *     return jsArray;
         * }
         * @see com.stardust.autojs.runtime.api.Dialogs.multiChoice
         * @see com.stardust.autojs.runtime.api.Dialogs.NonUiDialogs.multiChoice
         */
        multiChoice(title: string, items: any[], defaultIndices?: number[]): number[] | Promise<any>;

        /**
         * @example With bug(s)
         * let indices = dialogs.multiChoice("请选择至少一个选项", ["A", "B", "C", "D"], [], function(indices) {
         *     console.log(indices); // indices: JavaScript Array
         * });
         * // BUG
         * console.log(indices); // indices: Java Array
         * @example Source code summary (zh-CN: 源代码摘要)
         * dialogs.multiChoice = function (title, items, index, callback) {
         *     index = index || [];
         *     if (isUiThread() && !callback) {
         *         return new Promise(function (resolve, reject) {
         *             // BUG 1/2: marked by SuperMonster005 at Jul 30, 2020
         *             // singleChoice -> multiChoice
         *             rtDialogs().singleChoice(title, index, items, function (r) {
         *                 resolve.apply(null, javaArrayToJsArray(r));
         *             });
         *         });
         *     }
         *     if (callback) {
         *         // BUG 2/2: marked by SuperMonster005 at Jul 30, 2020
         *         // return javaArrayToJsArray(rtDialogs().multiChoice(title, index, items, function (r) {
         *         //     callback(javaArrayToJsArray(r));
         *         // }));
         *         return rtDialogs().multiChoice(title, index, items, function (r) {
         *             callback(javaArrayToJsArray(r));
         *         });
         *     }
         *     return javaArrayToJsArray(rtDialogs().multiChoice(title, index, items, null));
         * };
         * function isUiThread() {
         *     return android.os.Looper.myLooper() === android.os.Looper.getMainLooper();
         * }
         * function rtDialogs() {
         *     let d = __runtime__.dialogs;
         *     if (!isUiThread()) {
         *         return d.nonUiDialogs;
         *     } else {
         *         return d;
         *     }
         * }
         * function javaArrayToJsArray(javaArray) {
         *     let jsArray = [];
         *     let len = javaArray.length;
         *     for (let i = 0; i < len; i++) {
         *         jsArray.push(javaArray[i]);
         *     }
         *     return jsArray;
         * }
         * @see com.stardust.autojs.runtime.api.Dialogs.multiChoice
         * @see com.stardust.autojs.runtime.api.Dialogs.NonUiDialogs.multiChoice
         */
        multiChoice(title: string, items: any[], defaultIndices: number[] | any, callback: (selectedIndices: number[]) => void): number[];

        /**
         * @example Event of action buttons sample
         * let diag = dialogs.build({
         *     title: "提示",
         *     content: "确定吗",
         *     contentColor: "#FF3300",
         *     positive: "确定",
         *     negative: "取消",
         *     neutral: "了解详情",
         *     neutralColor: "#BB44FF",
         *     autoDismiss: false,
         * }).on("positive", (d) => {
         *     toast('用户点击了\'确定\'按钮');
         *     d.dismiss();
         * }).on("negative", (d) => {
         *     toast('用户点击了\'取消\'按钮');
         *     d.dismiss();
         * }).on("neutral", (d) => {
         *     let d_about = dialogs.build({
         *         title: "详情",
         *         content: "示例:\n\n" +
         *             "Auto.js开源项目地址:\n" +
         *             "https://github.com/hyb1996/Auto.js",
         *         positive: "返回",
         *     }).show();
         *     let content_view = d_about.getContentView();
         *     content_view.setAutoLinkMask(android.text.util.Linkify.WEB_URLS);
         *     content_view.setText(content_view.getText().toString());
         * }).show();
         * // non-blocked
         * console.log(diag.toString());
         * @example Event "input_change" sample
         * // CAUTION: use this sample after fixing bugs about "input_change" event
         * // by importing fixed modules (e.g. ext-dialogs.js by SuperMonster005)
         * // or by overriding dialogs.build (code fixing reference could be found in 'source code example' below)
         * dialogs.build({
         *     title: "平方计算",
         *     content: "计算结果将显示在此处",
         *     contentColor: "#6B0069",
         *     inputHint: "输入需要被平方的数字",
         *     positive: "退出",
         *     autoDismiss: false,
         * }).on("input_change", (dialog, inputValue) => {
         *     let result = inputValue * inputValue;
         *     dialog.setContent("计算结果: " + (isNaN(result) ? "无效" : result));
         * }).on("positive", (d) => {
         *     d.dismiss();
         * }).show();
         * @example Action buttons with "any" event
         * dialogs.build({
         *     title: "标题",
         *     content: "确定吗",
         *     positive: "确定",
         *     negative: "取消",
         *     neutral: "稍后提示"
         * }).on("any", (action, dialog) => {
         *     switch (action) {
         *         case "positive": return toast('用户点击确定');
         *         case "negative": return toast('用户点击取消');
         *         case "neutral": return toast('用户点击稍后提示');
         *     }
         * }).show();
         * @example Event "item_select" sample
         * dialogs.build({
         *     title: "请选择",
         *     positive: "确定",
         *     negative: "取消",
         *     items: ["A", "B", "C", "D"],
         *     itemsSelectMode: "select", // optional
         * }).on("item_select", (index, item, dialog) => {
         *     toast("选项索引: " + index + "\n选项内容: " + item);
         * }).show();
         * @example Event "single_choice" sample
         * dialogs.build({
         *     title: "请选择",
         *     positive: "确定",
         *     negative: "取消",
         *     items: ["A", "B", "C", "D"],
         *     itemsSelectMode: "single",
         * }).on("single_choice", (index, item, dialog) => {
         *     toast("选项索引: " + index + "\n选项内容: " + item);
         * }).show();
         * @example Event "multi_choice" sample
         * // CAUTION: use this sample after fixing bugs about "input_change" event
         * // by importing fixed modules (e.g. ext-dialogs.js by SuperMonster005)
         * // or by overriding dialogs.build (code fixing reference could be found in 'source code example' below)
         * dialogs.build({
         *     title: "请选择",
         *     positive: "确定",
         *     negative: "取消",
         *     items: ["A", "B", "C", "D"],
         *     itemsSelectMode: "multi",
         * }).on("multi_choice", (index, item, dialog) => {
         *     toast("选项索引: " + index + "\n选项内容: " + item);
         * }).show();
         * @example Event "input" sample
         * dialogs.build({
         *     title: "请输入",
         *     positive: "确定",
         *     negative: "取消",
         *     inputPrefill: ""
         * }).on("input", (text, dialog) => {
         *     text === "" || toast("输入的内容: " + text);
         * }).show();
         * @example Event "check" sample
         * dialogs.build({
         *     title: "确定吗",
         *     positive: "确定",
         *     negative: "取消",
         *     checkBoxPrompt: "不再提示",
         * }).on("check", (checked, dialog) => {
         *     toast(checked ? "已勾选" : "已取消勾选");
         * }).show();
         * @example Progress sample
         * let diag = dialogs.build({
         *     title: "正在备份",
         *     content: "此过程可能需要一些时间",
         *     positive: "终止",
         *     progress: {
         *         max: 100,
         *         showMinMax: false,
         *     },
         * }).show();
         * Promise.resolve().then(() => {
         *     sleep(.3e3);
         *     diag.setProgress(33);
         * }).then(() => {
         *     sleep(.5e3);
         *     diag.setProgress(66);
         * }).then(() => {
         *     sleep(.5e3)
         *     diag.setProgress(100);
         * }).then(() => {
         *     diag.setContent('备份完成');
         * });
         * @example CustomView sample
         * dialogs.build({
         *     title: "确定吗",
         *     positive: "确定",
         *     negative: "取消",
         *     customView: <vertical>
         *         <text text="R U Sure? {{'\ud83d\ude0f'}}" bg="#FF5555" textSize="36" textColor="#FFFFFF"></text>
         *         <text text="Show me your choice now." bg="#558855" textSize="16" textColor="#FFFFFF"></text>
         *     </vertical>,
         * }).show();
         * @example Icon sample
         * let icon_1 = new com.stardust.autojs.core.ui.inflater.util.Drawables().parse(context, "@drawable/ic_save_black_48dp");
         * let icon_2 = new com.stardust.autojs.core.ui.inflater.util.Drawables().parse(context, "@android:color/black");
         * let icon_3 = new com.stardust.autojs.core.ui.inflater.util.Drawables().parse(context, "file://" + files.path("./test.png"));
         * dialogs.build({
         *     title: "确定吗",
         *     positive: "确定",
         *     negative: "取消",
         *     icon: icon_1, // try icon_2 or icon_3 if you like :)
         * }).show();
         * @example Source code summary (zh-CN: 源代码摘要)
         * let propertySetters = {
         *     title: null,
         *     titleColor: {adapter: parseColor},
         *     buttonRippleColor: {adapter: parseColor},
         *     icon: null,
         *     content: null,
         *     contentColor: {adapter: parseColor},
         *     contentLineSpacing: null,
         *     items: null,
         *     itemsColor: {adapter: parseColor},
         *     positive: {method: "positiveText"},
         *     positiveColor: {adapter: parseColor},
         *     neutral: {method: "neutralText"},
         *     neutralColor: {adapter: parseColor},
         *     negative: {method: "negativeText"},
         *     negativeColor: {adapter: parseColor},
         *     cancelable: null,
         *     canceledOnTouchOutside: null,
         *     autoDismiss: null,
         * };
         * dialogs.build = function (properties) {
         *     let builder = Object.create(__runtime__.dialogs.newBuilder());
         *     builder.thread = threads.currentThread();
         *     for (let name in properties) {
         *         if (!properties.hasOwnProperty(name)) {
         *             continue;
         *         }
         *         applyDialogProperty(builder, name, properties[name]);
         *     }
         *     applyOtherDialogProperties(builder, properties);
         *     return ui.run(() => builder.buildDialog());
         * };
         * function applyDialogProperty(builder, name, value) {
         *     if (!propertySetters.hasOwnProperty(name)) {
         *         return;
         *     }
         *     let propertySetter = propertySetters[name] || {};
         *     if (propertySetter.method === undefined) {
         *         propertySetter.method = name;
         *     }
         *     if (propertySetter.adapter) {
         *         value = propertySetter.adapter(value);
         *     }
         *     builder[propertySetter.method].call(builder, value);
         * }
         * function applyOtherDialogProperties(builder, properties) {
         *     if (properties.inputHint !== undefined || properties.inputPrefill !== undefined) {
         *         builder.input(wrapNonNullString(properties.inputHint), wrapNonNullString(properties.inputPrefill),
         *             function (dialog, input) {
         *                 input = input.toString();
         *                 // BUG 1/3: marked by SuperMonster005 at Jul 31, 2020
         *                 // builder.dialog.emit -> dialog.emit
         *                 builder.dialog.emit("input_change", builder.dialog, input);
         *             })
         *             .alwaysCallInputCallback();
         *     }
         *     if (properties.items !== undefined) {
         *         let itemsSelectMode = properties.itemsSelectMode;
         *         if (itemsSelectMode === undefined || itemsSelectMode === 'select') {
         *             builder.itemsCallback(function (dialog, view, position, text) {
         *                 builder.dialog.emit("item_select", position, text.toString(), builder.dialog);
         *             });
         *         } else if (itemsSelectMode === 'single') {
         *             builder.itemsCallbackSingleChoice(properties.itemsSelectedIndex === undefined ? -1 : properties.itemsSelectedIndex,
         *                 function (dialog, view, which, text) {
         *                     builder.dialog.emit("single_choice", which, text.toString(), builder.dialog);
         *                     return true;
         *                 });
         *         } else if (itemsSelectMode === 'multi') {
         *             builder.itemsCallbackMultiChoice(properties.itemsSelectedIndex === undefined ? null : properties.itemsSelectedIndex,
         *                 // BUG 2/3: marked by SuperMonster005 at Jul 31, 2020
         *                 // function (dialog, indices, texts) {
         *                 //     builder.emit("multi_choice",
         *                 //         toJsArray(indices, (l, i) => parseInt(l[i])),
         *                 //         toJsArray(texts, (l, i) => l[i].toString()),
         *                 //         builder.dialog);
         *                 //     return true;
         *                 // });
         *                 function (dialog, view, indices, texts) {
         *                     builder.dialog.emit("multi_choice", toJsArray(indices, (l, i) => parseInt(l.get(i)),
         *                         toJsArray(texts, (l, i) => l.get(i).toString())), builder.dialog);
         *                     return true;
         *                 });
         *         } else {
         *             throw new Error("unknown itemsSelectMode " + itemsSelectMode);
         *         }
         *     }
         *     if (properties.progress !== undefined) {
         *         let progress = properties.progress;
         *         let indeterminate = (progress.max === -1);
         *         builder.progress(indeterminate, progress.max, !!progress.showMinMax);
         *         builder.progressIndeterminateStyle(!!progress.horizontal);
         *     }
         *     if (properties.checkBoxPrompt !== undefined || properties.checkBoxChecked !== undefined) {
         *         builder.checkBoxPrompt(wrapNonNullString(properties.checkBoxPrompt), !!properties.checkBoxChecked,
         *             function (view, checked) {
         *                 builder.getDialog().emit("check", checked, builder.getDialog());
         *             });
         *     }
         *     if (properties.customView !== undefined) {
         *         let customView = properties.customView;
         *         if (typeof (customView) === 'xml' || typeof (customView) === 'string') {
         *             customView = ui.run(() => ui.inflate(customView));
         *         }
         *         let wrapInScrollView = (properties.wrapInScrollView === undefined) ? true : properties.wrapInScrollView;
         *         builder.customView(customView, wrapInScrollView);
         *     }
         * }
         * function wrapNonNullString(str) {
         *     if (str === null || str === undefined) {
         *         return "";
         *     }
         *     return str;
         * }
         * function toJsArray(object, adapter) {
         *     let jsArray = [];
         *     // BUG 3/3: marked by SuperMonster005 at Jul 31, 2020
         *     // let len = object.length;
         *     let len = javaArray.length;
         *     for (let i = 0; i < len; i++) {
         *         jsArray.push(adapter(object, i));
         *     }
         *     return jsArray;
         * }
         * function parseColor(c) {
         *     if (typeof (c) == 'string') {
         *         return colors.parseColor(c);
         *     }
         *     return c;
         * }
         */
        build(properties: Dialogs.Build.Property): JsDialog$;
    }
}

declare namespace Dialogs {
    type ActionButton = 'positive' | 'negative' | 'neutral';
    namespace Build {
        type Property = {
            title?: string;
            titleColor?: Color$;
            buttonRippleColor?: Color$;
            icon?: android.graphics.drawable.Drawable;
            content?: string;
            contentColor?: Color$;
            contentLineSpacing?: number;
            items?: any[];
            itemsColor?: Color$;
            itemsSelectMode?: 'select' | 'single' | 'multi';
            itemsSelectedIndex?: number | number[];
            positive?: string;
            positiveColor?: Color$;
            neutral?: string;
            neutralColor?: Color$;
            negative?: string;
            negativeColor?: Color$;
            checkBoxPrompt?: string;
            checkBoxChecked?: boolean;
            progress?: {
                max?: number;
                horizontal?: boolean;
                showMinMax?: boolean;
            };
            cancelable?: boolean;
            canceledOnTouchOutside?: boolean;
            inputHint?: string;
            inputPrefill?: string;
            autoDismiss?: boolean;
            customView?: string | Xml | android.view.View;
            wrapInScrollView?: boolean;
        };
    }
}

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.rawInput = dialogs.rawInput.bind(dialogs);
 * @see dialogs.rawInput
 */
declare function rawInput(title: string, prefill?: string, callback?: (input: string) => void): string | Promise<any>;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.alert = dialogs.alert.bind(dialogs);
 * @see dialogs.alert
 */
declare function alert(title: string, content?: string, callback?: (input: null) => void): void | Promise<any>;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.confirm = dialogs.confirm.bind(dialogs);
 * @see dialogs.confirm
 */
declare function confirm(title: string, content?: string, callback?: (input: null) => void): boolean | Promise<any>;

/**
 * @example Source code summary (zh-CN: 源代码摘要)
 * scope.prompt = dialogs.prompt.bind(dialogs);
 * @see dialogs.prompt
 */
declare function prompt(title: string, prefill?: string, callback?: (input: string) => void): string | Promise<any>;

declare type JsDialog$ = com.stardust.autojs.core.ui.dialog.JsDialog;
declare type MaterialDialog$ = com.afollestad.materialdialogs.MaterialDialog;