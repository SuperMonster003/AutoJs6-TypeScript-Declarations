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

async function advancedImages(input: import('autojs6:bun-host').ImageHandle) {
    const mat = await host.images.imread('fixture.png');
    const size = host.images.getSize(mat);
    const image = await host.images.matToImage(mat);
    const features = await host.images.detectAndComputeFeatures(image, { method: 'ORB' });
    const frame = await host.images.matchFeatures(features, input);
    if (frame) { const summary: string = frame.summary(); const count: number = frame.inliers; void [summary, count]; }
    const quant = await host.images.quantize(input, { maxColors: 16 });
    const bytes: Uint8Array = quant.bytes;
    await host.images.recycle([mat, features, image]);
    // @ts-expect-error Mat handles require explicit conversion to image handles.
    host.images.pixel(mat, 0, 0);
    // @ts-expect-error Feature descriptors are not pixel sources.
    host.images.cvtColor(features, 'RGB2GRAY');
    void [size, bytes];
}
void advancedImages;
