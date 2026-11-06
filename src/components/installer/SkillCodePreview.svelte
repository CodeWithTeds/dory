<script lang="ts">
  import { skillConfig } from '../../stores/installer';
  import { generateSkillMarkdown, downloadSkillFile } from '../../services/skillGenerator';
  import CopyButton from '../common/CopyButton.svelte';
  import Badge from '../common/Badge.svelte';

  let viewMode: 'raw' | 'preview' = 'raw';

  $: skillText = generateSkillMarkdown($skillConfig);
</script>

<div class="code-preview-card glass-panel">
  <div class="preview-header">
    <div class="preview-left">
      <Badge variant="blue" size="sm">Step 03</Badge>
      <div class="file-tab">
        <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span class="file-name">dory/SKILL.md</span>
      </div>
    </div>

    <div class="preview-actions">
      <div class="mode-toggles">
        <button 
          class="mode-btn" 
          class:active={viewMode === 'raw'}
          on:click={() => viewMode = 'raw'}
        >
          YAML & Markdown
        </button>
        <button 
          class="mode-btn" 
          class:active={viewMode === 'preview'}
          on:click={() => viewMode = 'preview'}
        >
          Rendered Specs
        </button>
      </div>

      <CopyButton text={skillText} label="Copy File" copiedLabel="Copied SKILL.md!" />

      <button class="download-btn" on:click={() => downloadSkillFile($skillConfig)}>
        <svg class="dl-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>Download SKILL.md</span>
      </button>
    </div>
  </div>

  <div class="preview-content">
    {#if viewMode === 'raw'}
      <pre class="code-container"><code>{skillText}</code></pre>
    {:else}
      <div class="rendered-container">
        <div class="render-section">
          <h4>DORY Operating Axioms</h4>
          <ul>
            <li><strong>Active Until Green:</strong> Never stop until Exit 0 or hard limit ({$skillConfig.maxIterations} cycles).</li>
            <li><strong>Disk as Ground Truth:</strong> 0 token bleed between cycles. Filesystem defines durable state.</li>
            <li><strong>Zero Conversational Fluff:</strong> Strict machine-readable telemetry and git diffs only.</li>
            <li><strong>Binary Tri-Gate:</strong> Lint clean + strict typing + 100% green behavioral test assertions.</li>
          </ul>
        </div>

        <div class="render-section">
          <h4>Citadel Boundaries</h4>
          <p>
            Operating in disposable branch mode with isolated sandbox bounds. Air-gap protection is 
            <span class="highlight">{$skillConfig.airGapSandbox ? 'ENABLED' : 'DISABLED'}</span>, 
            and auto-commit on Exit 0 is 
            <span class="highlight">{$skillConfig.autoCommitOnPass ? 'ENABLED' : 'DISABLED'}</span>.
          </p>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .code-preview-card {
    border-radius: var(--radius-lg);
    background: #0e0e0e;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .preview-header {
    background: #151515;
    padding: 12px 20px;
    border-bottom: 1px solid var(--border-subtle);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
  }

  .preview-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .file-tab {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family-mono);
    font-size: 13px;
    color: var(--text-primary);
  }

  .file-icon {
    width: 16px;
    height: 16px;
    color: #60a5fa;
  }

  .preview-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .mode-toggles {
    display: flex;
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-sm);
    padding: 2px;
    border: 1px solid var(--border-subtle);
  }

  .mode-btn {
    padding: 5px 12px;
    font-size: 11px;
    color: var(--text-secondary);
    border-radius: 4px;
    transition: all var(--transition-fast);
  }

  .mode-btn.active {
    background: rgba(255, 255, 255, 0.12);
    color: var(--text-primary);
  }

  .download-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: #fafafa;
    color: #0a0a0a;
    font-weight: 600;
    font-size: 12px;
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast);
  }

  .download-btn:hover {
    background: #ffffff;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
  }

  .dl-icon {
    width: 14px;
    height: 14px;
  }

  .preview-content {
    background: #050505;
    padding: 20px;
    max-height: 440px;
    overflow-y: auto;
  }

  .code-container {
    font-family: var(--font-family-mono);
    font-size: 12px;
    line-height: 1.6;
    color: #e4e4e7;
    white-space: pre-wrap;
    word-break: break-all;
  }

  .rendered-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  .render-section h4 {
    font-size: 16px;
    color: var(--text-primary);
    margin-bottom: 12px;
  }

  .render-section ul {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .highlight {
    color: #34d399;
    font-family: var(--font-family-mono);
    font-weight: 600;
  }

  @media (max-width: 640px) {
    .preview-header {
      padding: 12px 14px;
      gap: 10px;
    }
    .preview-actions {
      width: 100%;
      justify-content: flex-start;
      gap: 8px;
    }
    .preview-content {
      padding: 14px;
    }
  }
</style>
