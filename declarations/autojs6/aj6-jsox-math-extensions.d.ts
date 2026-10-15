/// <reference path="./index.d.ts" />

/** Opt in only in scripts that call jsox.extend('Math') or jsox.extendAll(). */
interface Math {
    randInt: Internal.Mathx['randInt'];
    randomInt: Internal.Mathx['randomInt'];
    randFloat: Internal.Mathx['randFloat'];
    randomFloat: Internal.Mathx['randomFloat'];
    random(...range: Internal.Mathx.NumberInput[]): number;
    sum: Internal.Mathx['sum'];
    mean: Internal.Mathx['mean'];
    avg: Internal.Mathx['avg'];
    median: Internal.Mathx['median'];
    var: Internal.Mathx['var'];
    std: Internal.Mathx['std'];
    cv: Internal.Mathx['cv'];
    mode: Internal.Mathx['mode'];
    dist: Internal.Mathx['dist'];
    logMn: Internal.Mathx['logMn'];
    floorLog: Internal.Mathx['floorLog'];
    ceilLog: Internal.Mathx['ceilLog'];
    roundLog: Internal.Mathx['roundLog'];
    floorPow: Internal.Mathx['floorPow'];
    ceilPow: Internal.Mathx['ceilPow'];
    roundPow: Internal.Mathx['roundPow'];
    maxi: Internal.Mathx['max'];
    mini: Internal.Mathx['min'];
}
