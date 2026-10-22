import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const ts = require(process.argv[2] ? resolve(process.argv[2]) : 'typescript');
const manifest = JSON.parse(readFileSync(resolve(root, 'declarations/runtime-declarations.json'), 'utf8'));
for (const [name, expected] of Object.entries(manifest.files)) {
    const text = readFileSync(resolve(root, 'declarations', name), 'utf8').replace(/\r\n?/g, '\n');
    assert.equal(createHash('sha256').update(text).digest('hex'), expected, `Stale runtime declaration: ${name}`);
}
const bunTypes = readFileSync(resolve(root, 'declarations/autojs6-bun/host-client.d.mts'), 'utf8');
const declaredCapabilities = new Set([...bunTypes.match(/export type HostCapability = ([^;]+);/)[1].matchAll(/"([^"]+)"/g)].map(match => match[1]));
const sdk = readFileSync(resolve(root, '../AutoJs6-Plugin-Bun-Runtime/app/src/main/assets/autojs6/host-client.mjs'), 'utf8');
const methodsText = sdk.slice(sdk.indexOf('export const HOST_API_METHODS'), sdk.indexOf('});', sdk.indexOf('export const HOST_API_METHODS')));
for (const [, name] of methodsText.matchAll(/^  "([^"]+)":/gm))
    assert(declaredCapabilities.has(name), 'Bun capability literal missing: ' + name);

const result = [];
const imageMembers = new Map();
const rhinoOpencc = ts.createSourceFile('aj6-int-opencc.d.ts',
    readFileSync(resolve(root, 'declarations/autojs6/aj6-int-opencc.d.ts'), 'utf8'), ts.ScriptTarget.Latest, true);
let openccNames = [];
function collectOpencc(node) {
    if (ts.isInterfaceDeclaration(node) && node.name.text === 'OpenCC') {
        openccNames = node.members.filter(ts.isMethodSignature).map(member => member.name.getText(rhinoOpencc));
    }
    ts.forEachChild(node, collectOpencc);
}
collectOpencc(rhinoOpencc);
assert(openccNames.includes('convert') && openccNames.length >= 33, 'Canonical Rhino OpenCC methods are missing');

function verifyRuntimeTypes(program, runtime) {
    const checker = program.getTypeChecker();
    function ambient(name) {
        const symbol = checker.getAmbientModules().find(symbol => symbol.name === JSON.stringify(name));
        assert(symbol, `${runtime}: missing module ${name}`);
        return symbol;
    }
    function exportedValue(name) {
        const symbol = ambient(name);
        const assignment = symbol.declarations.flatMap(declaration => declaration.body?.statements || [])
            .find(ts.isExportAssignment);
        assert(assignment, `${name}: export assignment missing`);
        return checker.getTypeAtLocation(assignment.expression);
    }
    function property(type, name) {
        const symbol = checker.getPropertyOfType(type, name);
        assert(symbol, `${runtime}: missing member ${name}`);
        return checker.getTypeOfSymbolAtLocation(symbol,
            symbol.valueDeclaration || symbol.declarations?.[0] || program.getSourceFiles()[0]);
    }
    function returns(type, label, expectedPromise = true) {
        const signatures = checker.getSignaturesOfType(type, ts.SignatureKind.Call);
        assert(signatures.length, `${runtime}: ${label} is not callable`);
        return signatures.map(signature => {
            const value = checker.getReturnTypeOfSignature(signature);
            assert(!(value.flags & (ts.TypeFlags.Any | ts.TypeFlags.Never | ts.TypeFlags.Unknown)),
                `${runtime}: ${label} returns an unusable ${checker.typeToString(value)}`);
            if (!expectedPromise) return value;
            assert.equal(value.getSymbol()?.name, 'Promise', `${runtime}: ${label} must return Promise`);
            const awaited = checker.getAwaitedType(value);
            assert(awaited && !(awaited.flags & (ts.TypeFlags.Any | ts.TypeFlags.Never | ts.TypeFlags.Unknown)),
                `${runtime}: ${label} lost its resolved result type`);
            return awaited;
        });
    }
    let opencc, images, compose, ui, speech, epub, mail, flow, ai;
    if (runtime === 'node') {
        speech = exportedValue('speech');
        epub = exportedValue('epub');
        mail = exportedValue('mail');
        ai = exportedValue('ai');
        assert.equal(checker.typeToString(ai),checker.typeToString(exportedValue('autojs6:ai')));
        flow = exportedValue('flow');
        assert.equal(checker.typeToString(flow),checker.typeToString(exportedValue('autojs6:flow')));
        assert.equal(checker.typeToString(mail), checker.typeToString(exportedValue('autojs6:mail')), 'Mail Worker alias drift');
        assert.equal(checker.typeToString(epub), checker.typeToString(exportedValue('autojs6:epub')), 'EPUB Worker alias drift');
        assert.equal(checker.typeToString(speech), checker.typeToString(exportedValue('autojs6:speech')), 'Speech Worker alias drift');
        compose = exportedValue('compose'); ui = exportedValue('ui');
        opencc = exportedValue('opencc');
        images = exportedValue('images');
        for (const name of ['pinyin','pinyin4j','console','screen_metrics','screen_recorder','media_projection','recorder']) {
            assert.equal(checker.typeToString(exportedValue('autojs6:'+name)),checker.typeToString(exportedValue(name)),`Worker alias ${name} drift`);
        }
        const recording=exportedValue('autojs6:screen_recorder');
        for(const name of ['start','stop','cancel','getStatus']) returns(property(recording,name),'Worker recording.'+name);
        const stopped=returns(property(recording,'stop'),'Node recording.stop')[0];
        assert(stopped.isUnion()&&stopped.types.some(t=>t.flags&ts.TypeFlags.Null),'Idle Node recording stop must preserve null');
        const movie=checker.getNonNullableType(stopped);
        for(const field of ['width','height','size','durationMs']) assert(property(movie,field).flags&ts.TypeFlags.Number,field);
        assert.deepEqual(property(movie,'audioSource').types.map(t=>t.value).sort(),['microphone','mixed','none','playback']);
        const capturer=returns(property(exportedValue('media_projection'),'requestScreenCapture'),'Worker capture')[0];
        returns(property(capturer,'nextImage'),'Worker capturer.nextImage');returns(property(capturer,'stop'),'Worker capturer.stop');
        for(const name of ['start','stop','getStatus']) returns(property(exportedValue('recorder'),name),'Worker audio-only recorder.'+name);
        const pinyin=exportedValue('autojs6:pinyin');
        for(const name of ['convert','simple','compact','compare','fromCodePoint','fromPhrase']) returns(property(pinyin,name),'Worker pinyin.'+name);
        for(const name of ['cX','cY','cXy','cYx']) returns(property(exportedValue('autojs6:screen_metrics'),name),'Worker '+name);
        for(const name of ['setTitle','show','hide','clear']) returns(property(exportedValue('autojs6:console'),name),'Worker console.'+name);
        returns(exportedValue('autojs6:opencc'), 'autojs6:opencc').forEach(value =>
            assert(value.flags & ts.TypeFlags.String, 'Qualified OpenCC result is not string'));
    } else {
        const client = checker.getExportsOfModule(ambient('autojs6:bun-host')).find(symbol => symbol.name === 'HostClient');
        assert(client, 'Bun HostClient is missing');
        const hostClient = checker.getDeclaredTypeOfSymbol(client);
        speech = property(hostClient, 'speech');
        epub = property(hostClient, 'epub');
        mail = property(hostClient, 'mail');
        ai = property(hostClient, 'ai');
        flow = property(hostClient, 'flow');
        compose = property(hostClient, 'compose'); ui = property(hostClient, 'ui');
        opencc = property(hostClient, 'opencc');
        images = property(hostClient, 'images');
        const recorder=property(hostClient,'screenRecorder');
        for(const name of ['start','stop','cancel','getStatus']) returns(property(recorder,name),'screenRecorder.'+name);
        const stopped=returns(property(recorder,'stop'),'screenRecorder.stop')[0];
        assert(stopped.isUnion()&&stopped.types.some(t=>t.flags&ts.TypeFlags.Null),'Idle stop must preserve null');
        const movie=checker.getNonNullableType(stopped);
        for(const field of ['width','height','size','durationMs']) assert(property(movie,field).flags&ts.TypeFlags.Number,field);
        assert(property(movie,'audio').flags&ts.TypeFlags.BooleanLike,'Recording must indicate whether an audio track is present');
        const source=property(movie,'audioSource');
        assert.deepEqual(source.types.map(t=>t.value).sort(),['microphone','mixed','none','playback'],'Audio source literals drifted');
        assert.equal(checker.typeToString(property(movie,'audioCodec')),'"aac" | null');
        assert.equal(checker.typeToString(property(movie,'audioSampleRate')),'48000 | null');
        assert.equal(checker.typeToString(property(movie,'audioChannels')),'1 | null');
    }
    for(const name of ['ask','chat','session','catalog','hasAccess','requestAccess','close'])returns(property(ai,name),'ai.'+name);
    const agent=property(ai,'agent');
    for(const name of ['run','get','list','catalog','presets','status','context','result','hasAccess','requestAccess','close'])
        returns(property(agent,name),'ai.agent.'+name);
    const assistant=returns(property(agent,'create'),'ai.agent.create',false)[0];
    property(assistant,'options');returns(property(assistant,'run'),'AgentAssistant.run');
    const agentRun=returns(property(agent,'run'),'ai.agent.run')[0];
    for(const name of ['respond','confirm','cancel','join'])returns(property(agentRun,name),'AgentRun.'+name);
    for(const name of ['id','state','goal','startedAt','detached','error','result','on','once','off'])property(agentRun,name);
    const agentResult=returns(property(agentRun,'join'),'AgentRun.join')[0];
    for(const name of ['id','status','summary','usage','error'])property(agentResult,name);
    const aiStream=returns(property(ai,'stream'),'ai.stream',false)[0];
    for(const name of ['ready','result','on','once','off','cancel','state','isDone'])property(aiStream,name);
    const aiSession=returns(property(ai,'session'),'ai.session')[0];
    for(const name of ['ask','chat','close'])returns(property(aiSession,name),'AI session.'+name);
    const aiResponse=returns(property(ai,'chat'),'ai.chat')[0];
    for(const name of ['text','reasoning','usage','target','model','route'])property(aiResponse,name);
    for (const name of ['wait','waitAsync','waitUntil','waitWhile','waitForStable','waitForVisible','waitForHidden','waitForGone','waitForActivity','waitForPackage','of','run','sleep','delay','all','race','any','whenPresent','repeatUntil'])
        for(const value of returns(property(flow,name),'flow.'+name,false)) assert.equal(value.getSymbol()?.name,'Flow',name+' must retain chain methods');
    const chain=returns(property(flow,'sleep'),'flow.sleep',false)[0];
    for(const name of ['cancel','then','catch','else','finally','map','filter','peek','run','timeout','retry','toPromise','state','step','value','error'])property(chain,name);
    for(const name of ['sync','await'])assert(!checker.getPropertyOfType(chain,name),'Unsupported portable Flow method '+name);
    for(const name of ['within','scope','press','swipe','gesture','gestures'])assert(checker.getPropertyOfType(chain,name),'Missing portable Flow method '+name);
    for(const name of ['smartClick','smartClickBounds','findAny','clickAny','typeInto','toggle','collectList','scrollUntil','dismissPopups','waitThenClick','clickWhenStableAfter','launchAndWait','backToApp'])
        for(const value of returns(property(flow,name),'flow.'+name,false))assert.equal(value.getSymbol()?.name,'Flow',name+' preserves Flow');
    for(const name of ['click','performAction','typeInto','toggle','collectList','waitForEvent'])property(chain,name);
    for(const name of ['waitForIdle','waitForEvent','waitForToast','waitForNotification']){
        for(const value of returns(property(flow,name),'flow.'+name,false)){
            assert.equal(value.getSymbol()?.name,'EventFlow');property(value,'ready');property(value,'cancel');
        }
    }
    for (const name of ['connect','connectAsync','setDefault','close','dispose','watch'])
        returns(property(mail,name),'mail.'+name);
    const mailClient=returns(property(mail,'connect'),'mail.connect')[0];
    for(const name of ['test','send','folders','folderStatus','createFolder','deleteFolder','renameFolder',
        'fetch','search','get','fetchBody','download','raw','setFlags','markRead','markUnread','flag','unflag',
        'move','copy','delete','expunge','append']) {
        returns(property(mail,name),'mail.'+name);
        returns(property(mail,name+'Async'),'mail.'+name+'Async');
        returns(property(mailClient,name),'mail client.'+name);
    }
    for(const name of ['list','get','resolve']) returns(property(property(mail,'providers'),name),'mail.providers.'+name);
    for(const name of ['list','has']) returns(property(property(mail,'accounts'),name),'mail.accounts.'+name);
    const folder=returns(property(mailClient,'folder'),'mail client.folder',false)[0];
    for(const name of ['status','create','delete','rename']) returns(property(folder,name),'mail folder.'+name);
    const mailMessage=returns(property(mailClient,'get'),'mail client.get')[0];
    for(const name of ['uid','subject','date','attachments']) property(mailMessage,name);
    returns(property(mailMessage,'load'),'mail message.load');
    const mailWatch=returns(property(mailClient,'watch'),'mail client.watch')[0];
    returns(property(mailWatch,'stop'),'mail watch.stop');
    for(const name of ['mode','generation','state','on','off']) property(mailWatch,name);
    for (const name of ['open','metadata','toc','readingOrder','text','cover','search','annotations','read','isAvailable']) {
        returns(property(epub,name),'epub.'+name);
        returns(property(epub,name+'Async'),'epub.'+name+'Async');
    }
    const book=returns(property(epub,'open'),'epub.open')[0];
    for (const name of ['text','textAll','cover','resource','search','annotations','close'])
        returns(property(book,name),'EPUB book.'+name);
    assert(property(property(book,'metadata'),'title').flags & ts.TypeFlags.String);
    const reader=returns(property(epub,'read'),'epub.read')[0];
    for (const name of ['goTo','next','prev','nextChapter','prevChapter','setPreferences','bookmarks','close'])
        returns(property(reader,name),'EPUB reader.'+name);
    assert(property(reader,'isClosed').flags & ts.TypeFlags.BooleanLike);
    for (const name of ['isAvailable','capabilities','recognize','recognizeAsync','detectVoice','listen','wake','synthesize','synthesizeAsync','speak','close'])
        returns(property(speech,name),'speech.'+name);
    const models=property(speech,'models');
    for(const name of ['list','install','installAsync','importFile','remove','setDefault','getDefault','refreshCatalog'])
        returns(property(models,name),'speech.models.'+name);
    const speechSession=returns(property(speech,'listen'),'speech.listen')[0];
    for(const name of ['feed','stop','cancel']) returns(property(speechSession,name),'speech session.'+name);
    assert(property(returns(property(speech,'recognize'),'speech.recognize')[0],'text').flags & ts.TypeFlags.String);
    assert(returns(property(speechSession,'result'),'speech session.result',false)[0].flags & ts.TypeFlags.String);
    const composeNames = readFileSync(resolve(root, 'declarations/autojs6-node/compose.d.ts'), 'utf8')
      .match(/type Compose(?:CatalogNodeName|V2NodeName) = [^;]+/g).flatMap(line => [...line.matchAll(/"([^"\n]+)"/g)].map(match => match[1]));
    assert.equal(composeNames.length, 54);
    for (const name of composeNames) returns(property(compose,name),'compose.'+name,false);
    for (const name of ['mount','dialog','floaty','isAvailable','version']) returns(property(compose,name),'compose.'+name);
    const session=returns(property(compose,'mount'),'compose.mount')[0];
    for (const name of ['flush','render','setTheme','close']) returns(property(session,name),'Compose session.'+name);
    const layout=returns(property(ui,'showLayout'),'ui.showLayout')[0];
    for (const name of ['update','batchUpdate','close']) returns(property(layout,name),'UI handle.'+name);
    assert(property(layout,'closed').flags & ts.TypeFlags.BooleanLike,'UI closed is boolean');
    for (const name of ['()', ...openccNames]) {
        returns(name === '()' ? opencc : property(opencc, name), `opencc.${name}`).forEach(value =>
            assert(value.flags & ts.TypeFlags.String, `${runtime}: opencc.${name} must resolve to string`));
    }
    const handleMethods = new Set(['fromBase64', 'fromBytes', 'readImage', 'copy', 'clip', 'resize', 'scale',
        'rotate', 'flip', 'grayscale', 'threshold', 'blur', 'gaussianBlur', 'medianBlur', 'invert', 'captureScreen', 'read',
        'inRange','interval','adaptiveThreshold','bilateralFilter','cvtColor','concat','matToImage','compress','downsample']);
    const pointMethods = new Set(['findImage', 'findColor', 'findMultiColors', 'findColorEquals', 'findPointByColor', 'findPointByColors',
        'findPointByColorExactly','findColorInRegion','findPointByImage','findImageInRegion']);
    const pointArrayMethods = new Set(['matchTemplate', 'findAllPointsForColor', 'findPointsByColor','findPointsByColors','findCircles']);
    const booleanMethods = new Set(['detectsColor', 'detectColor', 'requestScreenCapture', 'stopScreenCapture', 'save', 'isRecycled',
        'requestScreenCaptureAsync','isGrayscale','detectMultiColors','detectsMultiColors','isEqual']);
    const voidMethods = new Set(['saveImage', 'recycle','initOpenCvIfNeeded']);
    const expectedCommon = ['fromBase64', 'fromBytes', 'readImage', 'saveImage', 'toBase64', 'toBytes', 'pixel', 'readPixels',
        'getSize', 'copy', 'clip', 'resize', 'scale', 'rotate', 'flip', 'grayscale', 'threshold', 'blur', 'gaussianBlur',
        'medianBlur', 'invert', 'findImage', 'matchTemplate', 'findColor', 'findMultiColors', 'detectsColor',
        'findAllPointsForColor', 'recycle'];
    for (const name of expectedCommon) property(images, name);
    function numericFields(value, fields, label) {
        for (const name of fields) assert(property(value, name).flags & ts.TypeFlags.Number,
            `${runtime}: ${label}.${name} must be a number`);
    }
    let imageMethods = 0;
    for (const symbol of checker.getPropertiesOfType(images)) {
        const name = symbol.name, member = property(images, name);
        if (!checker.getSignaturesOfType(member, ts.SignatureKind.Call).length) continue;
        imageMethods++;
        for (const value of returns(member, `images.${name}`, !['getSize', 'getWidth', 'getHeight', 'isRecycled','buildRegion','__buildRegion'].includes(name))) {
            if (handleMethods.has(name)) {
                assert(property(value, 'id').flags & ts.TypeFlags.String, `${runtime}: ${name} must return a handle id`);
                numericFields(value, ['width', 'height'], name);
            } else if (pointMethods.has(name)) {
                assert(value.isUnion() && value.types.some(type => type.flags & ts.TypeFlags.Null), `${name} must preserve the no-match null result`);
                numericFields(checker.getNonNullableType(value), ['x', 'y'], name);
            } else if (pointArrayMethods.has(name)) {
                const item = checker.getIndexTypeOfType(value, ts.IndexKind.Number);
                assert(item, `${name} must resolve to an array`);
                numericFields(item, ['x', 'y'], name);
                if (name === 'matchTemplate') assert(checker.getNonNullableType(property(item, 'score')).flags & ts.TypeFlags.Number);
                if (name === 'findCircles') numericFields(item,['radius'],name);
            } else if (booleanMethods.has(name)) {
                assert(value.flags & ts.TypeFlags.BooleanLike, `${name} must resolve to boolean`);
            } else if (voidMethods.has(name)) {
                assert(value.flags & ts.TypeFlags.Void, `${name} must resolve to void`);
            } else if (name === 'getSize') {
                numericFields(value, ['width', 'height'], name);
            } else if (name === 'readPixels') {
                numericFields(value, ['width', 'height'], name);
                const pixel = checker.getIndexTypeOfType(property(value, 'data'), ts.IndexKind.Number);
                assert(pixel && pixel.flags & ts.TypeFlags.Number, `${name}.data must contain ARGB32 numbers`);
            } else if (['pixel', 'getWidth', 'getHeight','countPointsByColor','getMeanColor','psnr','ssim','mssim','hist','mse','ncc','getSimilarity'].includes(name)) {
                assert(value.flags & ts.TypeFlags.Number, `${name} must resolve to an ARGB32 number`);
            } else if (name === 'toBase64') {
                assert(value.flags & ts.TypeFlags.String, `${name} must resolve to a string`);
            } else if (name === 'toBytes' || name === 'compressToBytes') {
                assert.equal(value.getSymbol()?.name, 'Uint8Array', 'Without native Node types, image bytes must retain Uint8Array methods');
            } else if (['buildRegion','__buildRegion'].includes(name)) {
                numericFields(checker.getNonNullableType(value),['x','y','width','height'],name);
            } else if (['load','loadAsync','getScreenCaptureOptions'].includes(name)) {
                assert(value.isUnion()&&value.types.some(t=>t.flags&ts.TypeFlags.Null),`${name} must preserve null`);
                numericFields(checker.getNonNullableType(value),['width','height'],name);
            } else if (name==='imread') {
                numericFields(value,['width','height','channels','depth'],name);
                assert(property(value,'__autojs6MatHandle').flags&ts.TypeFlags.String);
            } else if (name==='detectAndComputeFeatures') {
                numericFields(value,['count','scale'],name);
                numericFields(property(value,'region'),['x','y','width','height'],name+'.region');
                assert(property(value,'__autojs6ImageFeaturesHandle').flags&ts.TypeFlags.String);
            } else if (name==='matchFeatures') {
                assert(value.isUnion()&&value.types.some(t=>t.flags&ts.TypeFlags.Null),'Feature match must preserve null');
                const frame=checker.getNonNullableType(value);
                numericFields(frame,['centerX','centerY','width','height','angle','matches','inliers'],name);
                returns(property(frame,'summary'),'ObjectFrame.summary',false).forEach(result=>assert(result.flags&ts.TypeFlags.String));
            } else if (name==='quantize'||name==='quantizeToFile') {
                numericFields(value,['size','quality','quantizationError','peakWorkingMemoryBytes'],name);
                if(name==='quantize')assert.equal(property(value,'bytes').getSymbol()?.name,'Uint8Array');
                else assert(property(value,'path').flags&ts.TypeFlags.String);
            } else {
                assert.fail(`${runtime}: review the return contract of the new image method ${name}`);
            }
        }
    }
    const constructors=checker.getSignaturesOfType(property(images,'ObjectFrame'),ts.SignatureKind.Construct);
    assert.equal(constructors.length,1,'ObjectFrame must have a usable constructor');
    imageMembers.set(runtime,checker.getPropertiesOfType(images).map(symbol=>symbol.name).sort());
    for (const name of ['requestScreenCapture','captureScreen','stopScreenCapture']) property(images,name);
    return { openccMethods: openccNames.length, callableOpencc: true, imageMethods, anyOrNeverImageResults: 0 };
}
for (const runtime of ['node', 'bun']) {
    const options = { noEmit: true, strict: true, skipLibCheck: false, types: [],
        target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS,
        lib: runtime === 'bun' ? ['lib.es2022.d.ts', 'lib.dom.d.ts'] : ['lib.es2022.d.ts'] };
    if (Number(ts.version.split('.')[0]) >= 6) options.ignoreDeprecations = '6.0';
    const program = ts.createProgram([
        resolve(root, `declarations/autojs6-${runtime}/index.d.ts`),
        resolve(root, `docs/smoke/${runtime}-runtime-smoke.ts`),
    ], options);
    const diagnostics = ts.getPreEmitDiagnostics(program);
    assert.equal(diagnostics.length, 0, diagnostics.map(d => {
        const location = d.file && d.start !== undefined ? `${d.file.fileName}:${d.file.getLineAndCharacterOfPosition(d.start).line + 1}: ` : '';
        return location + ts.flattenDiagnosticMessageText(d.messageText, '\n');
    }).join('\n'));
    if (runtime === 'node') {
        assert(program.getSourceFiles().some(file => file.fileName.endsWith('/input_observer.d.ts')),
            'input_observer must be reachable from the public index');
    }
    result.push({ runtime, diagnostics: diagnostics.length, ...verifyRuntimeTypes(program, runtime) });
}
assert.deepEqual(imageMembers.get('node'),imageMembers.get('bun'),'Node and Bun image declaration names differ');
console.log(JSON.stringify({ typescript: ts.version, checkedAssets: Object.keys(manifest.files).length, results: result }, null, 2));
