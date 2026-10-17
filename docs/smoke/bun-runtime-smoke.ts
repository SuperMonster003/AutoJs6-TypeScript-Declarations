import type { HostClient, HostCapability } from 'autojs6:bun-host';

declare const host: HostClient;
const capability: HostCapability = 'screen.metrics';
host.hasCapability(capability);
const text: Promise<string> = host.pinyin.simple('北京上海');
const readings: Promise<string[][]> = host.pinyin4j.readings('重庆');
const horizontal: Promise<number> = host.coordinates.cX(360, 720);
const vertical: Promise<number> = host.coordinates.cY(0.5, true);
const cross: Promise<number> = host.coordinates.cXy(360, '16:9', false);
const stringRatio: Promise<number> = host.coordinates.cY('0.5', undefined, true);
const visible: Promise<void> = host.console.show();

// @ts-expect-error Host calls are asynchronous.
const synchronousPinyin: string = host.pinyin.simple('北京');
// @ts-expect-error Explicit undefined is not the zero-argument overload.
host.coordinates.cX(undefined);
// @ts-expect-error Explicit undefined is not the zero-argument overload.
host.coordinates.cY(undefined);
// @ts-expect-error Bun does not inject Rhino's selector global.
selector();
// @ts-expect-error Bun does not inject Node's AutoJs6 bridge global.
$autojs;
// @ts-expect-error Bun does not activate Rhino's JSOX prototype extensions.
Math.sum(1, 2);
