// Type definitions for AutoJs6 internal module http
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.8.4
//
// Last modified: Mar 13, 2023

/// <reference path="../autojs6.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__toast__.js
 */

declare namespace Internal {

    interface Toast {

        (text: string | any, isLong?: Toast.IsLong, isForcible?: Toast.IsForcible): void;

        dismissAll(): void;

    }

}

declare namespace Toast {

    type IsLong = 'long' | 'l' | 'short' | 's' | boolean;

    type IsForcible = 'forcible' | 'f' | boolean;

}