// Type definitions for AutoJs6 internal module base64
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.7.3
//
// Last modified: Jul 27, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/base64/Base64.kt
 */

declare namespace Internal {

    interface Base64 {

        encode(o: Base64.Input, encoding?: Base64.Encoding): string;

        /**
         * String input is interpreted as US-ASCII Base64 data. The encoding
         * parameter controls the charset used to construct the decoded string.
         */
        decode(o: Base64.DecodeInput, encoding?: Base64.Encoding): string;

    }

    namespace Base64 {

        type Input = string | number[] | {
            toString(): string;
        };

        type DecodeInput = Input;

        /**
         * Charset canonical names and aliases are matched without case or
         * punctuation differences.
         */
        type Encoding = StandardCharset | string | java.nio.charset.Charset | {
            toString(): string;
        };

    }

}
