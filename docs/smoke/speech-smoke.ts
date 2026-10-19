const speechAvailable: boolean = speech.isAvailable();
const speechCapabilities: Internal.Speech.Capabilities = $speech.capabilities();
const speechFeatures: boolean = speechCapabilities.features.includes('asrStreaming');
const speechText: string = speech.recognize('./voice.wav').text;
const speechLanguage: string | undefined = speech.recognize('./voice.wav', { language: 'zh', hotwords: ['AutoJs6'] }).language;
const speechResult: Promise<Internal.Speech.Recognition> = speech.recognizeAsync(new Int16Array(16000), { sampleRate: 8000 });
speech.recognize(files.readBytes('./voice.pcm'), { sampleRate: 48000 }).warnings.forEach(warning => warning.code === 'LIMIT_EXCEEDED');
const speechWav: string = speech.synthesize('Hello', './out.wav').path;
speech.synthesizeAsync('Hello', './out.wav', { speed: 1.1, speaker: 'SSB0005' }).then(result => result.warnings.length + result.speakerId);
const speechVoice: number = speech.detectVoice('./voice.wav', { threshold: 0.5 }).segments.reduce((sum, segment) => sum + segment.endMillis - segment.startMillis, 0);
const speechSession: Internal.Speech.Session = speech.listen({ source: 'external' })
    .on('partial', event => event.segmentIndex)
    .on('final', event => event.tags?.emotion ?? event.endMillis)
    .on('endpoint', () => undefined)
    .on('vad', event => event.active)
    .on('warning', warning => warning.code === 'PERMISSION_DENIED')
    .on('error', error => error.code === 'SESSION_CLOSED' && error.name === 'SpeechError')
    .on('end', event => event.reason === 'overflow' || event.text)
    .feed(new Int16Array(16000)).stop();
const speechReason: Internal.Speech.EndReason | 'script-exit' | null = speechSession.reason;
const speechRound: number = speechSession.round;
speech.wake(['hello'], { thenListen: true }).on('wake', event => event.listen?.stop()).stop();
speech.wake({ keyword: 'hello', boost: 1, threshold: 0.2 }, { minIntervalMillis: 3000, thenListen: { silenceEndMillis: 800 } })
    .on('wake', event => event.score ?? event.timestampMillis)
    .on('end', event => event.reason);
speech.models.installAsync('example', { onProgress(done, total) { done / total; } });
const speechDefault: Internal.Speech.ModelInfo | null = speech.models.getDefault('asr');
const speechCatalog: boolean = speech.models.refreshCatalog().updated;
speech.models.importFile('./model.tar.bz2', { id: 'asr.custom', kind: 'asr', languages: ['zh'], acceptLicense: true });
const speechLicense: boolean = speech.models.list({ kind: 'tts', installed: true })[0].license.commercialUse;
const speechError: Error = new speech.SpeechError('Example', 'MODEL_MISSING');
const speechCode: Internal.Speech.ErrorCode | (string & {}) = speech.SpeechError('Example').code;
speech.speak('Hello', { speed: 1.1 });
speech.speak('Hello', { model: 'tts.kokoro.multi-lang.v1_1', speaker: 3, language: 'zh', pitch: 1.2 });
// @ts-expect-error The engine is fixed for speech.speak.
speech.speak('Hello', { engine: 'other' });
// @ts-expect-error The rate comes from speed.
speech.speak('Hello', { speechRate: 1.5 });
// @ts-expect-error Only WAV output is supported.
speech.synthesize('Hello', './out.mp3', { format: 'mp3' });
// @ts-expect-error External listening is fixed to 16 kHz.
speech.listen({ source: 'external', sampleRate: 44100 });
// @ts-expect-error Dictation rounds of a wake session always record the microphone.
speech.wake('hello', { thenListen: { source: 'external' } });
// @ts-expect-error The voice activity result carries no model id.
speech.detectVoice('./voice.wav').modelId;
