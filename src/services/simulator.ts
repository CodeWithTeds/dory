import { terminalLogs, triGateState } from '../stores/installer';
import { toastStore } from '../stores/toast';

let simulationRunning = false;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function addLog(message: string, type: 'info' | 'command' | 'gate' | 'success' | 'warn' | 'error' = 'info', gate?: 'A' | 'B' | 'C') {
  const timestamp = new Date().toLocaleTimeString();
  const id = Math.random().toString(36).substring(2, 9);
  terminalLogs.update((logs) => [...logs, { id, timestamp, message, type, gate }]);
}

export async function runSimulation(platformName: string) {
  if (simulationRunning) return;
  simulationRunning = true;

  try {
    // Reset state
    triGateState.set({
      gateA: 'idle',
      gateB: 'idle',
      gateC: 'idle',
      circuitBreaker: false,
      currentIteration: 1,
    });

    addLog(`>>> Initializing installation for ${platformName}...`, 'command');
    await sleep(600);
    
    addLog(`[Fetch] Downloading dory/SKILL.md from registry...`, 'info');
    await sleep(500);

    addLog(`[Verify] Validating YAML frontmatter and Agent Skill RFC conformance... [OK]`, 'info');
    await sleep(400);

    addLog(`[Citadel] Registering 4-Layer Citadel Blast Radius Sentinel...`, 'info');
    await sleep(600);

    addLog(`[DORY Engine] Armed and listening for triggers: ["dory", "/dory", "keep coding"]`, 'success');
    await sleep(500);

    addLog(`------------------------------------------------------------`, 'info');
    addLog(`Triggering test cycle: "Fix auth token expiration regression"`, 'command');
    await sleep(700);

    // Phase 1: DO
    addLog(`[DO] Step 1: Formulating task-spec.json contract & whitelisting src/auth/**`, 'info');
    await sleep(500);
    addLog(`[DO] Step 2: True TDD Pre-Flight (Red Phase). Running test suite...`, 'info');
    await sleep(600);
    addLog(`[DO] FAIL: AssertionError: Expected token to refresh before expiration (exit 1)`, 'warn');
    await sleep(600);
    addLog(`[DO] Step 3: Targeted mutation applied to auth handler (14 lines diff).`, 'info');
    await sleep(800);

    // Phase 2: OBSERVE - Tri-Gate
    addLog(`[OBSERVE] Executing Tri-Gate Verification Gateway...`, 'gate');
    await sleep(500);

    // Gate A
    triGateState.update(s => ({ ...s, gateA: 'running' }));
    addLog(`[Gate A · Style] Running ESLint/Prettier on mutated files...`, 'gate', 'A');
    await sleep(800);
    triGateState.update(s => ({ ...s, gateA: 'passed' }));
    addLog(`[Gate A · Style] PASS: 0 lint violations, 0 formatting errors (Exit 0)`, 'success', 'A');
    await sleep(600);

    // Gate B
    triGateState.update(s => ({ ...s, gateB: 'running' }));
    addLog(`[Gate B · Types] Running tsc --noEmit (strict mode)...`, 'gate', 'B');
    await sleep(900);
    triGateState.update(s => ({ ...s, gateB: 'passed' }));
    addLog(`[Gate B · Types] PASS: Strict type sound, zero missing null checks (Exit 0)`, 'success', 'B');
    await sleep(600);

    // Gate C
    triGateState.update(s => ({ ...s, gateC: 'running' }));
    addLog(`[Gate C · Tests] Running runtime behavioral assertions...`, 'gate', 'C');
    await sleep(1000);
    triGateState.update(s => ({ ...s, gateC: 'passed' }));
    addLog(`[Gate C · Tests] PASS: 42 passed, 0 failed, 100% assertions green (Exit 0)`, 'success', 'C');
    await sleep(600);

    // Phase 3 & 4: RECOGNIZE & YIELD
    addLog(`[RECOGNIZE] Senior Triage: Zero ping-pong thrashing detected.`, 'info');
    await sleep(400);
    addLog(`[YIELD] All gates returned Exit Code 0. Tabula rasa state preserved.`, 'success');
    await sleep(500);
    addLog(`[Commit] Verified mutation committed to agent branch with clean hash. Done!`, 'success');

    toastStore.show('Tri-Gate Verified!', '100% Green assertions achieved (Exit 0).', 'success');
  } catch (err) {
    console.error(err);
  } finally {
    simulationRunning = false;
  }
}
