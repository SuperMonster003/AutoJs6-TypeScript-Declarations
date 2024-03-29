// Type definitions for AutoJs6 internal module floaty
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../index.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__floaty__.js
 */

declare namespace Internal {

    interface Floaty {

        /**
         * @example
         * let w = floaty.window(
         *     <frame>
         *         <text textSize="50" bg="@android:color/gray">悬浮文字</text>
         *     </frame>
         * );
         * setTimeout(w.close.bind(w), 1.5e3);
         */
        window(layout: org.autojs.autojs.core.floaty.BaseResizableFloatyWindow.ViewSupplier | Xml): org.autojs.autojs.runtime.api.Floaty.JsResizableWindow;

        window(layout: android.view.View): org.autojs.autojs.runtime.api.Floaty.JsResizableWindow;

        /**
         * @example
         * let w = floaty.rawWindow(
         *     <frame>
         *         <text gravity="center" textSize="50" text="悬浮文字"
         *               bg="@android:color/darkgray" color="@android:color/white"
         *         />
         *     </frame>
         * );
         * w.setSize(-1, -1);
         * setTimeout(w.close.bind(w), 1.5e3);
         */
        rawWindow(layout: org.autojs.autojs.core.floaty.RawWindow.RawFloaty | Xml): org.autojs.autojs.runtime.api.Floaty.JsRawWindow;

        rawWindow(layout: android.view.View): org.autojs.autojs.runtime.api.Floaty.JsRawWindow;

        hasPermission(): boolean;

        requestPermission(): void;

        closeAll(): void;

    }

}