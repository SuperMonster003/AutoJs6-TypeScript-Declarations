// Type definitions for AutoJs6 internal module pinyin4j
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.8.4
//
// Last modified: Sep 1, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/pinyin4j/Pinyin4j.kt
 */

declare namespace Internal {

    interface Pinyin4j {
        (source: string, options?: string | Pinyin4j.Options): string;

        of(source: string, options?: string | Pinyin4j.Options): string;

        "as"(source: string): string;

        readings(source: string, options?: Pinyin4j.ReadingsOptions): Pinyin4j.Matrix;
    }

}

declare namespace Pinyin4j {

    type RomanizationSystem = 'HANYU' | 'HANYU_PINYIN' | 'PINYIN'
        | 'TONGYONG' | 'TONGYONG_PINYIN'
        | 'WADE' | 'WADE_GILES' | 'WADEGILES' | 'WADE_GILES_PINYIN'
        | 'MPS2' | 'MANDARIN_PHONETIC_SYMBOLS_2'
        | 'YALE' | 'YALE_PINYIN'
        | 'GWOYEU' | 'GWOYEU_ROMATZYH' | 'GR'
        | string;

    type Row = string[];

    type Matrix = Row[];

    type CaseType = 'LOWERCASE' | 'LOW' | 'L' | '0' | 'UPPERCASE' | 'UP' | 'U' | '1'
        | string;

    type ToneType = 'WITH_TONE_NUMBER' | 'WITH_NUMBER' | 'NUMBER' | 'NUM'
        | 'WITHOUT_TONE' | 'NO_TONE' | 'NO' | 'FALSE' | '0'
        | 'WITH_TONE_MARK' | 'WITH_MARK' | 'MARK' | 'TRUE' | '1'
        | string;

    type VCharType = 'WITH_U_AND_COLON' | 'U_AND_COLON' | 'U_COLON' | 'U:'
        | 'WITH_V' | 'V'
        | 'WITH_U_UNICODE' | 'U_UNICODE' | 'UNICODE' | 'U'
        | string;

    interface Options {
        separator?: string;
        sep?: string;
        case?: CaseType;
        caseType?: CaseType;
        tone?: ToneType;
        toneType?: ToneType;
        v?: VCharType;
        vChar?: VCharType;
        vCharType?: VCharType;
    }

    interface ReadingsOptions {
        romanization?: RomanizationSystem;
        system?: RomanizationSystem;
        /** Hanyu Pinyin only. */
        case?: CaseType;
        /** Hanyu Pinyin only. */
        caseType?: CaseType;
        /** Hanyu Pinyin only. Defaults to WITH_TONE_NUMBER. */
        tone?: ToneType;
        /** Hanyu Pinyin only. Defaults to WITH_TONE_NUMBER. */
        toneType?: ToneType;
        /** Hanyu Pinyin only. */
        v?: VCharType;
        /** Hanyu Pinyin only. */
        vChar?: VCharType;
        /** Hanyu Pinyin only. */
        vCharType?: VCharType;
    }

}
