<script lang="ts">
  import HeroSection from './HeroSection.svelte';
  import CitadelArchitecture from './CitadelArchitecture.svelte';
  import TriGateExplainer from './TriGateExplainer.svelte';
  import ComparisonChart from './ComparisonChart.svelte';
  import { navigationStore } from '../../stores/navigation';
</script>

<div class="landing-page">
  <!-- Hero Section matching design/image.png and design/ui.md -->
  <HeroSection />

  <!-- Citadel 4-Layer Architecture -->
  <CitadelArchitecture />

  <!-- The Non-Negotiable Tri-Gate -->
  <TriGateExplainer />

  <!-- Chat Trap vs Ralph Cold-Start -->
  <ComparisonChart />

  <!-- Bottom CTA to switch to Page 2 -->
  <section class="bottom-cta-section">
    <div class="bottom-cta-card glass-panel">
      <div class="cta-inner">
        <h2 class="bottom-cta-title">Ready for AFK Self-Healing Engineering?</h2>
        <p class="bottom-cta-desc">
          Install the DORY Agent Skill into Antigravity, Claude Code, Cursor, or your custom agent harness in under 30 seconds.
        </p>
        <button class="bottom-install-btn" on:click={() => navigationStore.navigateTo('install')}>
          <span>Open Installation Hub</span>
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </section>
</div>

<style>
  .landing-page {
    display: flex;
    flex-direction: column;
  }

  .bottom-cta-section {
    padding: 60px 24px 100px;
    background: #0a0a0a;
  }

  .bottom-cta-card {
    max-width: 1000px;
    margin: 0 auto;
    padding: 56px 32px;
    border-radius: var(--radius-lg);
    background: radial-gradient(circle at 50% 0%, rgba(3, 51, 255, 0.15) 0%, rgba(18, 18, 18, 0.85) 70%);
    border: 1px solid rgba(3, 51, 255, 0.3);
    text-align: center;
    box-shadow: 0 10px 40px rgba(3, 51, 255, 0.12);
  }

  .cta-inner {
    max-width: 640px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }

  .bottom-cta-title {
    font-size: clamp(28px, 3.6vw, 40px);
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -1px;
  }

  .bottom-cta-desc {
    font-size: 15px;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  .bottom-install-btn {
    margin-top: 10px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 32px;
    background: #fafafa;
    color: #0a0a0a;
    font-weight: 700;
    font-size: 15px;
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
  }

  .bottom-install-btn:hover {
    background: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255, 255, 255, 0.35);
  }

  .arrow {
    width: 16px;
    height: 16px;
    transition: transform var(--transition-fast);
  }

  .bottom-install-btn:hover .arrow {
    transform: translateX(4px);
  }
</style>
