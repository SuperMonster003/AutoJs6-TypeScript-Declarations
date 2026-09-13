// Type definitions for AutoJs6 internal module pangu
// Last modified: Sep 13, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/pangu.min.js
 * @see https://github.com/vinta/pangu.js
 */
declare namespace Internal {

    /** The pangu.js 10.1.0 text API bundled with AutoJs6 6.8.0. */
    interface Pangu {

        /** Upstream library version, initially "10.1.0". */
        version: string;

        /**
         * Insert spacing between CJK and Latin letters, numbers and symbols.
         * Accepts plain text. Does not mutate the input or process a browser DOM.
         * @since 6.8.0
         * @example pangu.spaceText('使用AutoJs6处理文本'); // '使用 AutoJs6 处理文本'
         */
        spaceText(text: string): string;

        /**
         * Whether spaceText(text) would leave the text unchanged.
         * @since 6.8.0
         */
        hasProperSpacing(text: string): boolean;

    }

}
