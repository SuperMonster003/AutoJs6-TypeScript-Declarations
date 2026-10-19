/// <reference path="../../declarations/autojs6/index.d.ts" />
// Compile only; these declarations must not launch processes during verification.
type ShellIsAny<T> = 0 extends 1 & T ? true : false;
const proc = shell.spawn(['echo hello', 'exit 4'], {pty:true,env:{LANG:'C',COUNT:2},cwd:'/system'});
const procNotAny:ShellIsAny<typeof proc>=false;
const code:number|null=proc.exitCode;
const line:string|null=proc.readLine();
const waited:number=proc.waitFor();
const timed:number|null=proc.waitFor(10);
const shellInput:java.io.InputStream=proc.getInputStream();
const shellOutput:java.io.OutputStream=proc.getOutputStream();
const same:Shell.Process=proc.write('a').writeLine('b').closeInput();
proc.on('output',value=>{const text:string=value;const exact:ShellIsAny<typeof value>=false;});
proc.once('errorOutput',value=>{const text:string=value;});
proc.prependListener('exit',value=>{const status:number=value;const exact:ShellIsAny<typeof value>=false;});
proc.off('output',value=>{}).removeListener('exit',value=>{}).removeAllListeners(null);
const count:number=proc.listenerCount('output');
const killed:boolean=proc.kill();
const remote:Shell.Process=shizuku.spawn('id -u',{adb:false});
const alias:Shell.Process=$shell.spawn('echo alias',false);
$shizuku.spawn('echo alias',true);
shell.setDefaultOptions({root:false,adb:false});$shell.setDefaultOptions(null);shell.setDefaultOptions(undefined);
const access:boolean=shell.checkAccess('adb');const rootPresent:boolean=$shell.isRootAvailable();
const pipe=new Shell({cmd:'sh',pty:true,env:{OWNED:'1'}});
const result:org.autojs.autojs.runtime.api.AbstractShell.Result=pipe.execForResult('echo ok');
const pipeExit:java.lang.Integer|null=pipe.exitCode();if(pipeExit!==null){const nativeCode:number=pipeExit.intValue();}
const raw:java.lang.Process|jackpal.androidterm.emulatorview.TermSession=pipe.raw();
new Shell('sh');new Shell();new Shell(false);
declare const ctx:android.content.Context;new Shell(ctx);new Shell(ctx,false);new Shell(ctx,false,true);
// @ts-expect-error spawn accepts a boolean, not shell()'s numeric root flag.
shell.spawn('echo nope',1);
// @ts-expect-error cmd belongs to the constructor only.
shizuku.spawn('echo nope',{cmd:'sh'});
// @ts-expect-error Defaults only accept root/adb.
shell.setDefaultOptions({pty:true});
// @ts-expect-error An explicit argument is required, even when clearing defaults.
shell.setDefaultOptions();
// @ts-expect-error Only root/adb access checks are implemented.
shell.checkAccess('wireless');
// @ts-expect-error Process properties are readonly.
proc.pid=42;
// @ts-expect-error Output lines are strings.
proc.on('output',(value:number)=>{});
// @ts-expect-error Exit callbacks receive numbers.
proc.on('exit',(value:string)=>{});
// @ts-expect-error No arbitrary events are accepted.
proc.on('data',()=>{});
// @ts-expect-error The native implementation has no EventEmitter.emit surface.
proc.emit('exit',0);
// @ts-expect-error Unknown constructor options are rejected by the runtime.
new Shell({timeout:100});
