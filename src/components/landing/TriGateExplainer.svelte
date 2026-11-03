<script lang="ts">
  import { TRI_GATES } from '../../config/dorySpec';
  import Badge from '../common/Badge.svelte';
  import { navigationStore } from '../../stores/navigation';
</script>

<section id="trigate" class="trigate-section">
  <div class="trigate-container">
    <div class="header-center">
      <Badge variant="green" size="md">Binary Gatekeepers</Badge>
      <h2 class="title">The Non-Negotiable Tri-Gate</h2>
      <p class="subtitle">
        Code is never complete because an LLM says it "looks good". Completion requires unanimous Exit Code 0 from three deterministic tools.
      </p>
    </div>

    <!-- 3 Gate Cards Flow -->
    <div class="gates-flow">
      {#each TRI_GATES as gate, idx}
        <div class="gate-step-card glass-panel">
          <div class="gate-header">
            <span class="gate-pill">GATE {gate.id}</span>
            <span class="gate-status-pill">Exit 0 Required</span>
          </div>

          <h3 class="gate-title">{gate.name}</h3>
          
          <div class="gate-detail">
            <span class="detail-label">Standard</span>
            <p class="detail-text">{gate.standard}</p>
          </div>

          <div class="gate-detail">
            <span class="detail-label">Supported Tooling</span>
            <p class="detail-mono">{gate.tooling}</p>
          </div>

          <div class="gate-cmd-box">
            <code>{gate.command}</code>
          </div>
        </div>

        {#if idx < TRI_GATES.length - 1}
          <div class="connector-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        {/if}
      {/each}
    </div>

    <!-- Central Intersection Banner -->
    <div class="intersection-banner">
      <div class="banner-badge">
        <span class="green-indicator"></span>
        <span>CENTRAL INTERSECTION</span>
      </div>
      <h3 class="intersection-heading">Zero Hallucination · Production Verified · Exit 0</h3>
      <p class="intersection-text">
        If any gate returns != 0, DORY does not apologize or guess. It captures the raw compiler diagnostics, isolates the mutation, and loops deterministically until green.
      </p>
      <div class="banner-actions">
        <button class="banner-btn" on:click={() => navigationStore.navigateTo('install')}>
          Install Dory with Tri-Gate →
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  .trigate-section {
    padding: 100px 24px;
    background: #0d0d0d;
    border-top: 1px solid var(--border-subtle);
    border-bottom: 1px solid var(--border-subtle);
  }

  .trigate-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .header-center {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .title {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 700;
    letter-spacing: -1.5px;
    color: var(--text-primary);
  }

  .subtitle {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  .gates-flow {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 60px;
  }

  .gate-step-card {
    flex: 1;
    padding: 28px;
    border-radius: var(--radius-lg);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .gate-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .gate-pill {
    font-family: var(--font-family-mono);
    font-size: 11px;
    font-weight: 700;
    padding: 3px 8px;
    background: rgba(3, 51, 255, 0.2);
    border: 1px solid rgba(3, 51, 255, 0.4);
    color: #60a5fa;
    border-radius: var(--radius-sm);
  }

  .gate-status-pill {
    font-family: var(--font-family-mono);
    font-size: 11px;
    color: #34d399;
  }

  .gate-title {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
  }

  .gate-detail {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .detail-label {
    font-size: 11px;
    font-family: var(--font-family-mono);
    text-transform: uppercase;
    color: var(--text-muted);
  }

  .detail-text {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text-secondary);
  }

  .detail-mono {
    font-size: 12px;
    font-family: var(--font-family-mono);
    color: #d4d4d8;
  }

  .gate-cmd-box {
    margin-top: auto;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 8px 12px;
    border-radius: var(--radius-sm);
    font-size: 11px;
    color: #93c5fd;
    overflow-x: auto;
  }

  .connector-arrow {
    display: flex;
    align-items: center;
    color: var(--text-muted);
    width: 24px;
    flex-shrink: 0;
  }

  .connector-arrow svg {
    width: 100%;
    height: auto;
  }

  /* Intersection Banner */
  .intersection-banner {
    background: radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.12) 0%, rgba(18, 18, 18, 0.8) 70%);
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: var(--radius-lg);
    padding: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    box-shadow: 0 0 40px rgba(16, 185, 129, 0.08);
  }

  .banner-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #34d399;
  }

  .green-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 10px #10b981;
  }

  .intersection-heading {
    font-size: clamp(20px, 2.8vw, 32px);
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.8px;
  }

  .intersection-text {
    max-width: 680px;
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  .banner-actions {
    margin-top: 8px;
  }

  .banner-btn {
    padding: 10px 24px;
    background: #fafafa;
    color: #0a0a0a;
    font-weight: 600;
    font-size: 14px;
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
  }

  .banner-btn:hover {
    background: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 900px) {
    .gates-flow {
      flex-direction: column;
    }
    .connector-arrow {
      transform: rotate(90deg);
      margin: 0 auto;
    }
    .intersection-banner {
      padding: 24px;
    }
  }
</style>
