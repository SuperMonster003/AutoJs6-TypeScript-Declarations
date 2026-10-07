/// <reference path="../../declarations/autojs6/index.d.ts" />
// Compile-only API consumer examples, including deliberate invalid calls.
export {};

const session = terminal.open({cwd: terminal.env().home, show: false, env: {TASK: 'build'}});
const same: Internal.Terminal = $terminal;
const nullableSession: Internal.Terminal.Session | null = terminal.session(session.id);
const state: Internal.Terminal.PluginState = terminal.state();
const result: Internal.Terminal.Session = terminal.exec('echo ready', {keepOpen: false, wait: true});
const code: number | null = result.exitCode;
session.on('output', text => text.toUpperCase());
session.once('exit', status => status.toFixed());
session.on('overflow', bytes => bytes.toFixed());
session.prependListener('output', (text: string) => text.length);
session.off('output', (text: string) => text.length);
session.write('echo hi\n').show();
session.write([3]);
const asyncInput: Promise<void> = session.writeAsync('exit\n');
const asyncShow: Promise<void> = session.showAsync();
const asyncClose: Promise<boolean> = session.closeAsync();
const match: Promise<string> = session.waitForAsync(/ready/, 1000);
const text: string = session.transcript(4096);
const env: Promise<Internal.Terminal.Environment> = terminal.envAsync();
terminal.npm.run('build', null, {cwd: '/sdcard/project', keepOpen: false, wait: true});
terminal.npm.runAsync('build', '/sdcard/project').then(value => value.close());
terminal.openAsync().then(value => value.show());
terminal.openAsync('/sdcard/project').then(value => value.close());
const error: Internal.Terminal.Error = new terminal.TerminalError('failure', 'TIMEOUT', session.id);

// @ts-expect-error no stateAsync API exists
terminal.stateAsync();
// @ts-expect-error no sessionAsync API exists
terminal.sessionAsync(session.id);
// @ts-expect-error open cannot execute a command option
terminal.open({command: 'echo x'});
// @ts-expect-error env values must be strings
terminal.open({env: {TASK: 123}});
// @ts-expect-error exec options reject misspellings
terminal.exec('echo x', {waitFor: true});
// @ts-expect-error second npm.run argument is a directory, not options
terminal.npm.run('build', {wait: true});
// @ts-expect-error write accepts text or byte arrays
session.write(42);
// @ts-expect-error output events carry strings
session.on('output', (line: number) => line.toFixed());
// @ts-expect-error exit events carry numbers
session.once('exit', (status: string) => status.toUpperCase());
// @ts-expect-error async write resolves void, not a session
const wrongWrite: Promise<Internal.Terminal.Session> = session.writeAsync('hello');
// @ts-expect-error session identity is readonly
session.id = 'replacement';
// @ts-expect-error session has no isAliveAsync method
session.isAliveAsync();
