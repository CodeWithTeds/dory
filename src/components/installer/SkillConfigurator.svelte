<script lang="ts">
  import { skillConfig } from '../../stores/installer';
  import Badge from '../common/Badge.svelte';

  function updateConfig(patch: Partial<typeof $skillConfig>) {
    skillConfig.update(c => ({ ...c, ...patch }));
  }
</script>

<div class="config-card glass-panel">
  <div class="config-header">
    <div class="config-title-group">
      <Badge variant="blue" size="sm">Step 02</Badge>
      <h3 class="config-heading">Engine Configuration</h3>
    </div>
    <span class="config-meta">Tailor the Pressure Cooker</span>
  </div>

  <div class="config-body">
    <!-- Slider for maxIterations -->
    <div class="config-item">
      <div class="item-info">
        <label for="max-iter-slider" class="item-label">Hard Iteration Circuit Breaker</label>
        <span class="item-desc">Prevents infinite loops if tests fail persistently. Default: 10</span>
      </div>
      <div class="slider-wrapper">
        <input 
          id="max-iter-slider"
          type="range" 
          min="3" 
          max="25" 
          value={$skillConfig.maxIterations}
          on:input={(e) => updateConfig({ maxIterations: parseInt(e.currentTarget.value) })}
          class="slider-input"
        />
        <span class="slider-badge">{$skillConfig.maxIterations} cycles</span>
      </div>
    </div>

    <!-- Toggles -->
    <div class="toggles-grid">
      <!-- Strict Types -->
      <label class="toggle-card" class:active={$skillConfig.strictTypes}>
        <div class="toggle-content">
          <span class="toggle-title">Strict Static Typing</span>
          <span class="toggle-subtitle">Requires PHPStan Level 8+ / TypeScript strict noEmit</span>
        </div>
        <input 
          type="checkbox" 
          checked={$skillConfig.strictTypes}
          on:change={(e) => updateConfig({ strictTypes: e.currentTarget.checked })}
          class="toggle-checkbox"
        />
      </label>

      <!-- Mandatory Linting -->
      <label class="toggle-card" class:active={$skillConfig.lintEnforced}>
        <div class="toggle-content">
          <span class="toggle-title">Mandatory Style & Linting</span>
          <span class="toggle-subtitle">Zero unused imports, PSR-12/Prettier zero warnings</span>
        </div>
        <input 
          type="checkbox" 
          checked={$skillConfig.lintEnforced}
          on:change={(e) => updateConfig({ lintEnforced: e.currentTarget.checked })}
          class="toggle-checkbox"
        />
      </label>

      <!-- Citadel Sandbox -->
      <label class="toggle-card" class:active={$skillConfig.airGapSandbox}>
        <div class="toggle-content">
          <span class="toggle-title">Citadel Blast Radius Sentinel</span>
          <span class="toggle-subtitle">Work in isolated agent/* branches and protect .env files</span>
        </div>
        <input 
          type="checkbox" 
          checked={$skillConfig.airGapSandbox}
          on:change={(e) => updateConfig({ airGapSandbox: e.currentTarget.checked })}
          class="toggle-checkbox"
        />
      </label>

      <!-- Auto Commit -->
      <label class="toggle-card" class:active={$skillConfig.autoCommitOnPass}>
        <div class="toggle-content">
          <span class="toggle-title">Auto-Commit on Exit 0</span>
          <span class="toggle-subtitle">Automatically record git commit when all gates pass</span>
        </div>
        <input 
          type="checkbox" 
          checked={$skillConfig.autoCommitOnPass}
          on:change={(e) => updateConfig({ autoCommitOnPass: e.currentTarget.checked })}
          class="toggle-checkbox"
        />
      </label>
    </div>
  </div>
</div>

<style>
  .config-card {
    padding: 32px;
    border-radius: var(--radius-lg);
    background: #111111;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .config-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .config-title-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .config-heading {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
  }

  .config-meta {
    font-family: var(--font-family-mono);
    font-size: 11px;
    color: var(--text-muted);
  }

  .config-body {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .config-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
    background: #080808;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    gap: 20px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .item-label {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .item-desc {
    font-size: 12px;
    color: var(--text-secondary);
  }

  .slider-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .slider-input {
    width: 140px;
    accent-color: #3875ff;
    cursor: pointer;
  }

  .slider-badge {
    font-family: var(--font-family-mono);
    font-size: 12px;
    font-weight: 700;
    color: #60a5fa;
    padding: 4px 10px;
    background: rgba(3, 51, 255, 0.15);
    border: 1px solid rgba(3, 51, 255, 0.4);
    border-radius: var(--radius-sm);
    min-width: 80px;
    text-align: center;
  }

  .toggles-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .toggle-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition-fast);
  }

  .toggle-card:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--border-hover);
  }

  .toggle-card.active {
    border-color: rgba(3, 51, 255, 0.4);
    background: rgba(3, 51, 255, 0.06);
  }

  .toggle-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-right: 12px;
  }

  .toggle-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .toggle-subtitle {
    font-size: 11px;
    color: var(--text-muted);
  }

  .toggle-checkbox {
    width: 18px;
    height: 18px;
    accent-color: #3875ff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .config-item {
      flex-direction: column;
      align-items: flex-start;
    }
    .slider-wrapper {
      width: 100%;
      justify-content: space-between;
    }
    .toggles-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
