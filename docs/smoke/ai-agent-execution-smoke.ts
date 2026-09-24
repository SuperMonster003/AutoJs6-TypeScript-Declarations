/// <reference path="../../declarations/autojs6/index.d.ts" />

let agentContext: Internal.Ai.AgentExecutionContext | null = ai.agent.context();
if (agentContext) {
    let id: string = agentContext.runId;
    let preset: string | null = agentContext.presetName;
    let accepted: boolean = ai.agent.result({ id, preset, count: 7, nested: [true, null] });
    $ai.agent.result(accepted);
}
ai.agent.result(null);
// @ts-expect-error A result argument is required.
ai.agent.result();
// @ts-expect-error Functions are not JSON values.
ai.agent.result(() => 1);
// @ts-expect-error Context takes no arguments.
ai.agent.context('task');
