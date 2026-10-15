/// <reference path="./index.d.ts" />

/** Opt in only in scripts that call jsox.extend('Number') or jsox.extendAll(). */
interface NumberConstructor {
    readonly ICU: 996;
    ensureNumber: Internal.Numberx['ensureNumber'];
    ensureNumberLike: Internal.Numberx['ensureNumberLike'];
    ensureNumbersLike: Internal.Numberx['ensureNumbersLike'];
    check: Internal.Numberx['check'];
    parseFloat(value: string, radix?: number): number;
    parsePercent: Internal.Numberx['parsePercent'];
    parseRatio: Internal.Numberx['parseRatio'];
    parseAny: Internal.Numberx['parseAny'];
}

interface Number {
    clamp(...bounds: (number | number[])[]): number;
    clampTo(range: number[], cycle?: number): number;
    toFixedNum(fraction: number): number;
    padStart(targetLength: number, pad?: number | string): string;
    padEnd(targetLength: number, pad?: number | string): string;
}

/** The Number extension also installs the radix-aware global parseFloat. */
declare function parseFloat(value: string, radix?: number): number;
