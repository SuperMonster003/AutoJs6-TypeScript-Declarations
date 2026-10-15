/// <reference path="../../declarations/autojs6/aj6-jsox-extensions.d.ts" />

jsox.extendAll();
const distinctNumbers: number[] = [1, 2, 2].distinct();
const distinctKeyNumbers: number[] = [1, 2].distinctBy(value => value % 2);
const unionNumbers: number[] = [1, 2].union(3, [4]);
[1, 2].intersect(2); [1, 2].subtract([2]); [1, 2].differ(['x']);
[1, 2].sortBy(value => value); [1, 2].sortByDescending(value => value);
[1, 2].sortDescending(); [1, 2].sorted(); [1, 2].sortedDescending();
[1, 2].sortedBy(value => value); [1, 2].sortedByDescending(value => value); [1, 2].shuffle();
Array.ensureArray([]);
Number.ensureNumber(1); Number.ensureNumberLike('1'); Number.ensureNumbersLike(['1']);
Number.check(1, '<', 2); Number.parsePercent('10%'); Number.parseRatio('16:9'); Number.parseAny('1');
const numberConstant: 996 = Number.ICU;
const radixFloat: number = Number.parseFloat('ff', 16);
const globalRadixFloat: number = parseFloat('ff', 16);
(1).clamp(0, 10); (1).clampTo([0, 10]); (1).toFixedNum(2); (1).padStart(2); (1).padEnd(2);
Math.randInt(); Math.randomInt(); Math.randFloat(); Math.randomFloat(); Math.random(1, 2);
Math.sum(1, 2); Math.mean(1, 2); Math.avg(1, 2); Math.median(1, 2); Math.var(1, 2);
Math.std(1, 2); Math.cv(1, 2); Math.mode(1, 2); Math.dist([0, 0], [1, 1]);
Math.logMn(2, 8); Math.floorLog(2, 8); Math.ceilLog(2, 8); Math.roundLog(2, 8);
Math.floorPow(2, 3); Math.ceilPow(2, 3); Math.roundPow(2, 3); Math.maxi(1, 2); Math.mini(1, 2);
// @ts-expect-error Number-like parsing is not an arbitrary options object.
Number.ensureNumberLike({ invalid: true });
// @ts-expect-error Prototype selectors receive the array's element type.
[1, 2].sortedBy((value: string) => value);
