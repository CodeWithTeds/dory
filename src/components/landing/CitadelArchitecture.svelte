<script lang="ts">
  import { CITADEL_LAYERS } from '../../config/dorySpec';
  import Badge from '../common/Badge.svelte';
</script>

<section id="citadel" class="citadel-section">
  <div class="section-container">
    <div class="section-header">
      <Badge variant="blue" size="md">Core Architecture</Badge>
      <h2 class="section-title">The 4-Layer Citadel Framework</h2>
      <p class="section-subtitle">
        Eliminates the horizontal context collapse common in conversational agents through strict structural boundaries.
      </p>
    </div>

    <div class="citadel-grid">
      {#each CITADEL_LAYERS as layer}
        <div class="citadel-card glass-panel">
          <div class="card-top">
            <span class="layer-number">BLOCK {layer.layer}</span>
            <Badge variant="neutral" size="sm">{layer.badge}</Badge>
          </div>

          <h3 class="layer-title">{layer.name}</h3>
          <p class="layer-desc">{layer.desc}</p>

          <div class="layer-rule">
            <span class="rule-icon">🛡️</span>
            <span class="rule-text">{layer.rule}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .citadel-section {
    padding: 100px 24px;
    background: #0a0a0a;
    position: relative;
  }

  .section-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .section-title {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 700;
    letter-spacing: -1.5px;
    color: var(--text-primary);
  }

  .section-subtitle {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  .citadel-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .citadel-card {
    padding: 32px;
    border-radius: var(--radius-lg);
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: transform var(--transition-normal), border-color var(--transition-normal);
  }

  .citadel-card:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .layer-number {
    font-family: var(--font-family-mono);
    font-size: 12px;
    color: #60a5fa;
    letter-spacing: 0.1em;
    font-weight: 600;
  }

  .layer-title {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.4px;
  }

  .layer-desc {
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  .layer-rule {
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .rule-icon {
    font-size: 14px;
    flex-shrink: 0;
  }

  .rule-text {
    font-size: 12px;
    font-family: var(--font-family-mono);
    color: #a1a1aa;
    line-height: 1.5;
  }

  @media (max-width: 860px) {
    .citadel-grid {
      grid-template-columns: 1fr;
    }
    .citadel-card {
      padding: 24px;
    }
  }
</style>
