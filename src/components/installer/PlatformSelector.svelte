<script lang="ts">
  import { INSTALL_PLATFORMS } from '../../config/dorySpec';
  import { selectedPlatform } from '../../stores/installer';
  import CopyButton from '../common/CopyButton.svelte';
  import Badge from '../common/Badge.svelte';

  $: currentPlatform = INSTALL_PLATFORMS.find(p => p.id === $selectedPlatform) || INSTALL_PLATFORMS[0];
</script>

<div class="platform-selector-card glass-panel">
  <div class="selector-header">
    <div class="selector-title-group">
      <Badge variant="blue" size="sm">Step 01</Badge>
      <h3 class="selector-heading">Select Target Environment</h3>
    </div>
    <span class="spec-rfc">Agent Skills RFC v1.0</span>
  </div>

  <!-- Platform Chips Grid -->
  <div class="platforms-grid">
    {#each INSTALL_PLATFORMS as platform}
      <button 
        class="platform-chip" 
        class:active={$selectedPlatform === platform.id}
        on:click={() => selectedPlatform.set(platform.id)}
      >
        <div class="chip-icon">
          {#if platform.id === 'agy'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
          {:else if platform.id === 'local-workspace'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>
          {:else if platform.id === 'claude'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></svg>
          {:else if platform.id === 'cursor'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          {:else if platform.id === 'skills-sh'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>
          {:else if platform.id === 'npm'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>
          {:else}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          {/if}
        </div>
        <span class="chip-name">{platform.name}</span>
      </button>
    {/each}
  </div>

  <!-- Command Box -->
  <div class="command-panel">
    <div class="cmd-meta">
      <span class="cmd-headline">{currentPlatform.headline}</span>
      <span class="cmd-target-path">Target: <code>{currentPlatform.installPath}</code></span>
    </div>

    <div class="command-box">
      <div class="command-prefix">$</div>
      <pre class="command-text"><code>{currentPlatform.command}</code></pre>
      <div class="command-action">
        <CopyButton text={currentPlatform.command} label="Copy Install" copiedLabel="Copied!" />
      </div>
    </div>

    <!-- Instructions list -->
    <div class="instructions-list">
      {#each currentPlatform.instructions as instruction}
        <div class="instruction-item">
          <span class="inst-bullet">→</span>
          <span>{instruction}</span>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .platform-selector-card {
    padding: 32px;
    border-radius: var(--radius-lg);
    display: flex;
    flex-direction: column;
    gap: 24px;
    background: #111111;
  }

  .selector-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .selector-title-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .selector-heading {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
  }

  .spec-rfc {
    font-family: var(--font-family-mono);
    font-size: 11px;
    color: var(--text-muted);
  }

  .platforms-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .platform-chip {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    color: var(--text-secondary);
    transition: all var(--transition-fast);
    text-align: left;
  }

  .platform-chip:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--border-hover);
    color: var(--text-primary);
  }

  .platform-chip.active {
    background: rgba(3, 51, 255, 0.15);
    border-color: rgba(3, 51, 255, 0.5);
    color: #ffffff;
    box-shadow: 0 0 16px rgba(3, 51, 255, 0.2);
  }

  .chip-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .chip-icon svg {
    width: 100%;
    height: 100%;
  }

  .chip-name {
    font-size: 13px;
    font-weight: 600;
  }

  /* Command Panel */
  .command-panel {
    background: #080808;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .cmd-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .cmd-headline {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .cmd-target-path {
    font-size: 11px;
    color: var(--text-muted);
  }

  .cmd-target-path code {
    font-family: var(--font-family-mono);
    color: #60a5fa;
  }

  .command-box {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #000000;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-sm);
    padding: 10px 14px;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  .command-prefix {
    font-family: var(--font-family-mono);
    font-size: 14px;
    color: #3875ff;
    user-select: none;
    flex-shrink: 0;
  }

  .command-text {
    flex: 1;
    min-width: 0;
    overflow-x: auto;
    font-family: var(--font-family-mono);
    font-size: 13px;
    color: #fafafa;
    white-space: nowrap;
    scrollbar-width: thin;
  }

  .instructions-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.04);
  }

  .instruction-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 12px;
    color: var(--text-secondary);
    line-height: 1.4;
  }

  .inst-bullet {
    color: #60a5fa;
    font-family: var(--font-family-mono);
    flex-shrink: 0;
  }

  @media (max-width: 900px) {
    .platforms-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 560px) {
    .platforms-grid {
      grid-template-columns: 1fr;
    }
    .platform-selector-card {
      padding: 18px 14px;
    }
    .command-box {
      padding: 8px 10px;
    }
  }
</style>
