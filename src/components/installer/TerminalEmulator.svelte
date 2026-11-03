<script lang="ts">
  import { terminalLogs, triGateState, resetTerminal } from '../../stores/installer';
  import { runSimulation } from '../../services/simulator';
  import { selectedPlatform } from '../../stores/installer';
  import { INSTALL_PLATFORMS } from '../../config/dorySpec';
  import Badge from '../common/Badge.svelte';
  import { afterUpdate } from 'svelte';

  let terminalBody: HTMLDivElement;
  let isRunning = false;

  $: currentPlatform = INSTALL_PLATFORMS.find(p => p.id === $selectedPlatform) || INSTALL_PLATFORMS[0];

  afterUpdate(() => {
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });

  async function handleRun() {
    isRunning = true;
    await runSimulation(currentPlatform.name);
    isRunning = false;
  }
</script>

<div class="terminal-card">
  <!-- Terminal Window Title Bar -->
  <div class="terminal-bar">
    <div class="window-controls">
      <span class="control-dot close"></span>
      <span class="control-dot minimize"></span>
      <span class="control-dot expand"></span>
    </div>

    <div class="bar-title">
      <span class="pulse-live"></span>
      <span>dory@citadel: ~/{currentPlatform.id}/verify-gateway</span>
    </div>

    <div class="bar-actions">
      <button class="bar-btn" on:click={resetTerminal} title="Clear Terminal">
        Clear
      </button>
    </div>
  </div>

  <!-- Real-time Tri-Gate Status Strip -->
  <div class="trigate-strip">
    <div class="strip-label">TRI-GATE GATEKEEPERS:</div>
    <div class="strip-gates">
      <div class="gate-indicator" class:passed={$triGateState.gateA === 'passed'} class:running={$triGateState.gateA === 'running'}>
        <span class="gate-tag">GATE A</span>
        <span class="gate-name">Style / Lint</span>
        <span class="gate-status">
          {#if $triGateState.gateA === 'passed'}PASS{:else if $triGateState.gateA === 'running'}RUNNING{:else}ARMED{/if}
        </span>
      </div>

      <div class="gate-indicator" class:passed={$triGateState.gateB === 'passed'} class:running={$triGateState.gateB === 'running'}>
        <span class="gate-tag">GATE B</span>
        <span class="gate-name">Strict Types</span>
        <span class="gate-status">
          {#if $triGateState.gateB === 'passed'}PASS{:else if $triGateState.gateB === 'running'}RUNNING{:else}ARMED{/if}
        </span>
      </div>

      <div class="gate-indicator" class:passed={$triGateState.gateC === 'passed'} class:running={$triGateState.gateC === 'running'}>
        <span class="gate-tag">GATE C</span>
        <span class="gate-name">Runtime Tests</span>
        <span class="gate-status">
          {#if $triGateState.gateC === 'passed'}PASS{:else if $triGateState.gateC === 'running'}RUNNING{:else}ARMED{/if}
        </span>
      </div>
    </div>
  </div>

  <!-- Terminal Output Logs -->
  <div class="terminal-body" bind:this={terminalBody}>
    {#each $terminalLogs as log (log.id)}
      <div class="log-row {log.type}">
        <span class="log-time">[{log.timestamp}]</span>
        <span class="log-msg">{log.message}</span>
      </div>
    {/each}
  </div>

  <!-- Terminal Bottom Action Bar -->
  <div class="terminal-footer">
    <div class="footer-info">
      <span class="info-tag">Axiom:</span>
      <span class="info-text">Disk Ground Truth · Exit 0 Required</span>
    </div>

    <div class="footer-controls">
      <button 
        class="test-run-btn" 
        on:click={handleRun}
        disabled={isRunning}
      >
        {#if isRunning}
          <svg class="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
          </svg>
          <span>Executing Tri-Gate Loop...</span>
        {:else}
          <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span>Test-Run Dory Installation</span>
        {/if}
      </button>
    </div>
  </div>
</div>

<style>
  .terminal-card {
    background: #0d0d0d;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
  }

  .terminal-bar {
    background: #171717;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .window-controls {
    display: flex;
    gap: 7px;
  }

  .control-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .control-dot.close { background: #ff5f56; }
  .control-dot.minimize { background: #ffbd2e; }
  .control-dot.expand { background: #27c93f; }

  .bar-title {
    font-family: var(--font-family-mono);
    font-size: 12px;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .pulse-live {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 6px #10b981;
  }

  .bar-btn {
    font-size: 11px;
    color: var(--text-muted);
    padding: 2px 8px;
    border-radius: var(--radius-sm);
    background: rgba(255, 255, 255, 0.05);
  }

  .bar-btn:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.1);
  }

  /* Tri-Gate Strip */
  .trigate-strip {
    background: #090909;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .strip-label {
    font-family: var(--font-family-mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }

  .strip-gates {
    display: flex;
    gap: 12px;
    flex: 1;
    flex-wrap: wrap;
  }

  .gate-indicator {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-sm);
    font-size: 11px;
    font-family: var(--font-family-mono);
    color: var(--text-muted);
    transition: all var(--transition-fast);
  }

  .gate-tag {
    font-weight: 700;
  }

  .gate-indicator.running {
    border-color: rgba(245, 158, 11, 0.5);
    background: rgba(245, 158, 11, 0.1);
    color: #fbbf24;
  }

  .gate-indicator.passed {
    border-color: rgba(16, 185, 129, 0.5);
    background: rgba(16, 185, 129, 0.12);
    color: #34d399;
  }

  .gate-status {
    font-size: 9px;
    padding: 1px 4px;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.4);
  }

  /* Terminal Body */
  .terminal-body {
    padding: 18px 20px;
    min-height: 260px;
    max-height: 360px;
    overflow-y: auto;
    font-family: var(--font-family-mono);
    font-size: 12px;
    line-height: 1.6;
    background: #050505;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .log-row {
    display: flex;
    gap: 10px;
    word-break: break-all;
  }

  .log-time {
    color: #52525b;
    flex-shrink: 0;
  }

  .log-row.info .log-msg { color: #d4d4d8; }
  .log-row.command .log-msg { color: #60a5fa; font-weight: 600; }
  .log-row.gate .log-msg { color: #c084fc; }
  .log-row.success .log-msg { color: #34d399; font-weight: 600; }
  .log-row.warn .log-msg { color: #fbbf24; }
  .log-row.error .log-msg { color: #f87171; }

  /* Terminal Footer */
  .terminal-footer {
    background: #111111;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 12px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .footer-info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family-mono);
    font-size: 11px;
  }

  .info-tag {
    color: #60a5fa;
  }

  .info-text {
    color: var(--text-muted);
  }

  .test-run-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: #10b981;
    color: #042f2e;
    font-weight: 700;
    font-size: 13px;
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast);
  }

  .test-run-btn:hover:not(:disabled) {
    background: #34d399;
    box-shadow: 0 0 16px rgba(16, 185, 129, 0.4);
  }

  .test-run-btn:disabled {
    opacity: 0.6;
    cursor: wait;
  }

  .play-icon {
    width: 12px;
    height: 12px;
  }

  .spinner {
    width: 14px;
    height: 14px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
