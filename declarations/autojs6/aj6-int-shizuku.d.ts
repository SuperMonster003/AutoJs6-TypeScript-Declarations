// Type definitions for AutoJs6 internal module http
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Oct 11, 2023

/// <reference path="../index.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__shizuku__.js
 */

declare namespace Internal {

    import AbstractShell = org.autojs.autojs.runtime.api.AbstractShell;

    interface Shizuku extends org.autojs.autojs.runtime.api.WrappedShizuku {

        /**
         * @alias org.autojs.autojs.runtime.api.WrappedShizuku.execCommand(cmd: string)
         */
        (cmd: string): AbstractShell.Result;

        /**
         * @alias org.autojs.autojs.runtime.api.WrappedShizuku.execCommand(cmdList: string[])
         */
        (cmdList: string[]): AbstractShell.Result;

    }

}
