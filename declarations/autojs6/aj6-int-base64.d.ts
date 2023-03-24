// Type definitions for AutoJs6 internal module console
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.5.4
//
// Last modified: Apr 19, 2022

/// <reference path="../autojs6.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__base64__.js
 */

declare namespace Internal {
    interface Base64 {
        ();

        encode(str: string, encoding?: StandardCharset): string;

        decode(str: string, encoding?: StandardCharset): string;
    }
}
