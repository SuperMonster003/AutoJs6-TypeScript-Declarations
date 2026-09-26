/// <reference path="../../declarations/autojs6/index.d.ts" />

let assistant = ai.agent.create({ tools: ['user'], interaction: 'script', budget: { maxSteps: 6 } });
let task: Internal.Ai.AgentRun = assistant.run('Ask for a display name.');
let taskId: string = task.id;
task.on('input', event => {
    let prompt: string = event.question;
    if (!event.readOnly) task.respond(event.requestId, event.kind === 'confirm' ? false : 'Reader');
    void prompt;
}).once('confirmation', event => task.confirm(event.requestId, false));
task.on('step', event => { let index: number = event.index; void index; });
task.on('state', event => { let state: Internal.Ai.AgentState = event.to; void state; });
task.on('error', error => { let code: string = error.code; void code; });
let result: Promise<Internal.Ai.AgentResult> = task.result;
let joined: Internal.Ai.AgentResult = task.join(1000);
let observed: Internal.Ai.AgentRun | null = ai.agent.get(taskId);
let recent: Promise<Internal.Ai.AgentRunSummary[]> = ai.agent.list({ state: ['completed', 'failed'], limit: 10 });
let registered: Promise<Internal.Ai.AgentScriptEntry[]> = ai.agent.catalog('downloads');
let presets: Promise<string[]> = ai.agent.presets();
let link: Internal.Ai.AgentLinkStatus = ai.agent.status();

// AI Agent 1.1.0 development: the global setting must explicitly enable this group first.
let dynamicAssistant = ai.agent.create({ tools: ['script_dynamic', 'user'], interaction: 'plugin' });
let narrowDynamic: Internal.Ai.AgentRunOptions = { tools: { disable: ['script_dynamic'] } };
void dynamicAssistant;
void narrowDynamic;
// @ts-expect-error Model tool names are not public JavaScript methods.
ai.agent.script_run_source('console.log(1 + 1);');
// @ts-expect-error A tool name is not a tool group.
ai.agent.run('goal', { tools: ['script_run_source'] });
task.cancel('finished');
// @ts-expect-error Handle metadata is read-only.
task.id = 'different';
// @ts-expect-error Unknown event names are rejected.
task.on('message', () => {});
// @ts-expect-error Input answers are text or boolean.
task.respond('request', 42);
// @ts-expect-error Unknown options are rejected.
ai.agent.run('goal', { plugin: true });
// @ts-expect-error Tool groups are enumerated.
ai.agent.run('goal', { tools: ['payment'] });
// @ts-expect-error Progress events do not contain an input request ID.
task.on('progress', event => task.respond(event.requestId, 'answer'));
// @ts-expect-error Confirmation scope is once or run.
task.confirm('request', true, 'always');
