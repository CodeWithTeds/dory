export type PageRoute = 'landing' | 'install';

export type PlatformId = 'agy' | 'local-workspace' | 'claude' | 'cursor' | 'skills-sh' | 'curl' | 'npm';

export interface InstallPlatform {
  id: PlatformId;
  name: string;
  category: 'agent-cli' | 'ide' | 'registry' | 'manual';
  icon: string;
  headline: string;
  command: string;
  installPath: string;
  instructions: string[];
}

export interface SkillConfig {
  maxIterations: number;
  strictTypes: boolean;
  lintEnforced: boolean;
  airGapSandbox: boolean;
  autoCommitOnPass: boolean;
  selectedPlatform: PlatformId;
}

export type GateStatus = 'idle' | 'running' | 'passed' | 'failed';

export interface TriGateState {
  gateA: GateStatus; // Style & Lint
  gateB: GateStatus; // Static Analysis & Strict Types
  gateC: GateStatus; // Runtime Behavioral Tests
  circuitBreaker: boolean;
  currentIteration: number;
}

export interface TerminalLog {
  id: string;
  timestamp: string;
  type: 'info' | 'command' | 'gate' | 'success' | 'warn' | 'error';
  gate?: 'A' | 'B' | 'C';
  message: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'warning';
}
