import pinyin = require('pinyin');
import pinyin4j = require('pinyin4j');
import screen = require('screen_metrics');
import console = require('console');
import accessibility = require('accessibility');
import observer = require('input_observer');
import compat = require('autojs6:compat');
import fetch = require('fetch');
import axios = require('axios');

const text: Promise<string> = pinyin.simple('北京上海');
const reading: Promise<string[][]> = pinyin4j.readings('重庆');
const horizontal: Promise<number> = screen.cX(360, 720);
const vertical: Promise<number> = screen.cY(0.5, true);
const crossX: Promise<number> = screen.cXy(360, '16:9', false);
const crossY: Promise<number> = screen.cYx(0.5, true);
const stringRatio: Promise<number> = screen.cX('0.5', undefined, true);
const windowChange: Promise<void> = console.setTitle('Runtime API');
const windowVisible: Promise<void> = console.show();
accessibility.swipe;
accessibility.gesture;
observer.observeKeys;
compat.cX;
compat.cYx;
fetch.request('https://example.invalid');
const error: Error = new axios.AxiosError('example');
const inspector: boolean = $autojs.profile.inspector;
const processPermission: AutoJs6Node.ProcessPermissionSnapshot = $autojs.profile.processPermission;

// @ts-expect-error Host conversion is asynchronous.
const synchronousPinyin: string = pinyin.simple('北京');
// @ts-expect-error No argument is supported; explicitly passing undefined is not.
screen.cX(undefined);
// @ts-expect-error No argument is supported; explicitly passing undefined is not.
screen.cY(undefined);
// @ts-expect-error Runtime APIs do not install Rhino globals automatically.
selector();
// @ts-expect-error Runtime declarations do not enable Rhino JSOX prototype extensions.
Math.sum(1, 2);
