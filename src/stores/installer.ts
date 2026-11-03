import { writable } from 'svelte/store';
import type { PlatformId, SkillConfig, TriGateState, TerminalLog } from '../types';

const initialConfig: SkillConfig = {
  maxIterations: 10,
  strictTypes: true,
  lintEnforced: true,
  airGapSandbox: true,
  autoCommitOnPass: true,
  selectedPlatform: 'agy',
};

const initialTriGate: TriGateState = {
  gateA: 'idle',
  gateB: 'idle',
  gateC: 'idle',
  circuitBreaker: false,
  currentIteration: 1,
};

export const selectedPlatform = writable<PlatformId>('agy');
export const skillConfig = writable<SkillConfig>(initialConfig);
export const triGateState = writable<TriGateState>(initialTriGate);
export const terminalLogs = writable<TerminalLog[]>([
  {
    id: '1',
    timestamp: '00:00:01',
    type: 'info',
    message: 'DORY Cold-Start Engine initialized. Standby for target installation.',
  },
  {
    id: '2',
    timestamp: '00:00:02',
    type: 'command',
    message: 'Tri-Gate verification matrix armed: [Gate A: Style] [Gate B: Types] [Gate C: Runtime]',
  }
]);

export function resetTerminal() {
  triGateState.set({ ...initialTriGate });
  terminalLogs.set([
    {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleTimeString(),
      type: 'info',
      message: 'Terminal reset. Ready for interactive installation & verification.',
    }
  ]);
}
