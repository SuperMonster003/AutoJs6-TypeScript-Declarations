// Type definitions for AutoJs6 internal module pinyin
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.7.3
//
// Last modified: Sep 1, 2026
//
// noinspection JSUnusedGlobalSymbols

/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>
/// <reference path="./index.d.ts" />

/**
 * @Source /src/main/java/org/autojs/autojs/runtime/api/augment/pinyin/Pinyin.kt
 * @Source /src/main/java/org/autojs/autojs/runtime/api/augment/pinyin/PinyinCore.kt
 * @Source /src/main/java/org/autojs/autojs/runtime/api/augment/pinyin/Dict.kt
 * @Source /src/main/java/org/autojs/autojs/runtime/api/augment/pinyin/Util.kt
 */

declare namespace Internal {

    import PinyinMode = org.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinMode;
    import PinyinStyle = org.autojs.autojs.runtime.api.augment.pinyin.PinyinCore.PinyinStyle;

    interface Pinyin {

        (hansArg: string, options?: Pinyin.ConvertOptions): Pinyin.ResultList;

        readonly STYLE_NORMAL: PinyinStyle;
        readonly STYLE_TONE: PinyinStyle;
        readonly STYLE_TONE2: PinyinStyle;
        readonly STYLE_TO3NE: PinyinStyle;
        readonly STYLE_INITIALS: PinyinStyle;
        readonly STYLE_FIRST_LETTER: PinyinStyle;

        readonly MODE_NORMAL: PinyinMode;
        readonly MODE_SURNAME: PinyinMode;
        readonly MODE_PLACENAME: PinyinMode;
        readonly MODE_PLACE_NAME: PinyinMode;

        convert(hansArg: string, options?: Pinyin.ConvertOptions): Pinyin.ResultList;

        simple(str: string, enableNumericTone?: boolean, enableSegment?: boolean): string;

        /**
         * Compares the default tone-marked conversion with locale-aware ordering.
         * The sign of the result indicates ordering; its exact magnitude is unspecified.
         */
        compare(hanA: string, hanB: string): number;

        /**
         * Expands the Cartesian product of a two-dimensional candidate matrix.
         */
        compact(arr: Pinyin.Matrix): Pinyin.Matrix;

        fromCodePoint(codePoint: number): string | null;

        fromPhrase(phrase: string): Pinyin.Matrix;

    }

    declare namespace Pinyin {

        interface ConvertOptions {

            /**
             * @default pinyin.MODE_NORMAL
             */
            mode?: ModeLike | null;

            /**
             * @default pinyin.STYLE_TONE
             */
            style?: StyleLike | null;

            /**
             * Group every converted phrase into one pinyin combination list.
             *
             * @default false
             */
            group?: boolean;

            /**
             * Enable Jieba word segmentation before conversion.
             *
             * @default false
             */
            segment?: boolean;

            /**
             * Keep heteronym candidates instead of taking the first pinyin item.
             *
             * @default false
             */
            heteronym?: boolean;

            /**
             * Per-call Han reading overrides. Keys contain 1-32 Han code points;
             * each value has one tone-marked candidate row per code point.
             *
             * Longest matches win. The normalized dictionary is limited to 1,024
             * entries and 64 KiB and is never persisted across calls.
             *
             * @default undefined
             */
            customDictionary?: CustomDictionary | null;

        }

        interface ResultList extends Matrix {

            /**
             * Bound by `Pinyin.convert` on the returned NativeArray.
             */
            readonly compact: () => Matrix;

        }

        type Matrix = SyllableList[];

        type SyllableList = string[];

        type CustomDictionary = Readonly<Record<string, readonly (readonly string[])[]>>;

        type ModeLike = PinyinMode | ModeValue | ModeName;

        type ModeValue = 0 | 1 | 2;

        type ModeName =
            | 'NORMAL' | 'normal'
            | 'SURNAME' | 'surname'
            | 'PLACE_NAME' | 'place_name'
            | 'PLACENAME' | 'placename';

        type StyleLike = PinyinStyle | StyleValue | StyleName;

        type StyleValue = 0 | 1 | 2 | 3 | 4 | 5;

        type StyleName =
            | 'NORMAL' | 'normal'
            | 'TONE' | 'tone'
            | 'TONE2' | 'tone2'
            | 'TO3NE' | 'to3ne'
            | 'INITIALS' | 'initials'
            | 'FIRST_LETTER' | 'first_letter';

    }

    interface PinyinResultList extends Pinyin.ResultList {
    }

    type ConvertOptions = Pinyin.ConvertOptions;

    type OmniPinyinMode = Pinyin.ModeLike;

    type OmniPinyinStyle = Pinyin.StyleLike;

}
