const speechAvailable: boolean = speech.isAvailable();
const speechCapabilities: Internal.Speech.Capabilities = $speech.capabilities();
const speechText: string = speech.recognize('./voice.wav').text;
const speechResult: Promise<Internal.Speech.Recognition> = speech.recognizeAsync(new Int16Array(16000));
const speechWav: string = speech.synthesize('Hello', './out.wav').path;
speech.synthesizeAsync('Hello', './out.wav', { speed: 1.1 });
speech.detectVoice('./voice.wav').segments.forEach(segment => segment.endMillis);
speech.listen({ source: 'external' }).on('final', event => event.text).feed(new Int16Array(16000)).stop().result();
speech.wake(['hello'], { thenListen: true }).on('wake', event => event.listen?.stop()).stop();
speech.models.installAsync('example', { onProgress(done, total) { done / total; } });
const speechDefault: Internal.Speech.ModelInfo | null = speech.models.getDefault('asr');
const speechError: Error = new speech.SpeechError('Example', 'MODEL_MISSING');
speech.speak('Hello', { speed: 1.1 });
// @ts-expect-error The engine is fixed for speech.speak.
speech.speak('Hello', { engine: 'other' });
// @ts-expect-error Only WAV output is supported.
speech.synthesize('Hello', './out.mp3', { format: 'mp3' });
// @ts-expect-error External listening is fixed to 16 kHz.
speech.listen({ source: 'external', sampleRate: 44100 });
