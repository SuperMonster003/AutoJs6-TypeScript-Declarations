// Type definitions for Auto.js internal module floaty
//
// Project: https://github.com/SuperMonster003/Auto.js-TypeScript-Declarations
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.3.5
//
// Last modified: Oct 21, 2021

/// <reference path="../auto.js.d.ts" />

/**
 * @Source %autojs%/assets/modules/__floaty__.js
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
        window(layout: com.stardust.autojs.core.floaty.BaseResizableFloatyWindow.ViewSupplier | Xml): com.stardust.autojs.runtime.api.Floaty.JsResizableWindow;

        window(layout: android.view.View): com.stardust.autojs.runtime.api.Floaty.JsResizableWindow;

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
        rawWindow(layout: com.stardust.autojs.core.floaty.RawWindow.RawFloaty | Xml): com.stardust.autojs.runtime.api.Floaty.JsRawWindow;

        rawWindow(layout: android.view.View): com.stardust.autojs.runtime.api.Floaty.JsRawWindow;

        closeAll(): void;
    }
}