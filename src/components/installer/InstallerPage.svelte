<script lang="ts">
  import { onMount } from 'svelte';
  import PlatformSelector from './PlatformSelector.svelte';
  import TerminalEmulator from './TerminalEmulator.svelte';
  import SkillConfigurator from './SkillConfigurator.svelte';
  import SkillCodePreview from './SkillCodePreview.svelte';
  import Badge from '../common/Badge.svelte';
  import { navigationStore } from '../../stores/navigation';
  import localTraffic from '../../../traffic/summary.json';

  let totalInstalls: number = localTraffic.total_clones || 0;

  onMount(() => {
    // 1. Fetch real-time count from hits.sh
    fetch('https://hits.sh/github.com/CodeWithTeds/dory.svg?label=installs&color=0333ff', { cache: 'no-store' })
      .then((res) => res.text())
      .then((svg) => {
        const match = svg.match(/aria-label="[^:]+:\s*([0-9]+)"/);
        if (match) {
          const hitCount = parseInt(match[1], 10);
          totalInstalls = Math.max(totalInstalls, hitCount);
        }
      })
      .catch(() => {});

    // 2. Fetch fresh live metrics from GitHub raw CDN as sync backup
    fetch('https://raw.githubusercontent.com/CodeWithTeds/dory/main/traffic/summary.json', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.total_clones === 'number') {
          totalInstalls = Math.max(totalInstalls, data.total_clones);
        }
      })
      .catch(() => {});
  });
</script>

<div class="installer-page">
  <div class="installer-container">
    <!-- Hub Header -->
    <header class="hub-header">
      <div class="header-badges">
        <Badge variant="blue" size="md">Skill Plugin Hub</Badge>
        <span class="hub-tag">v1.0.0 Specification</span>
      </div>

      <h1 class="hub-title">Install DORY into Your Workspace</h1>
      <p class="hub-subtitle">
        Deploy the Ralph Wiggum Cold-Start pressure cooker loop directly into your agent harness or IDE. Zero dependencies required outside your project's native linter, typechecker, and test runner.
      </p>

      <div class="hub-meta-strip">
        <div class="meta-pill">
          <span class="dot-green"></span>
          <span>Standard RFC Agent Skill</span>
        </div>
        <div class="meta-pill">
          <span>Tri-Gate Ready</span>
        </div>
        <div class="meta-pill">
          <span class="dot-green"></span>
          <span>{totalInstalls} Verified Installs</span>
        </div>
      </div>
    </header>

    <!-- Main Grid / Sections -->
    <div class="hub-grid">
      <!-- Section 1: Target Platform Selection & CLI Command -->
      <section class="grid-section">
        <PlatformSelector />
      </section>

      <!-- Section 2: Interactive In-Browser Live Terminal Emulator -->
      <section class="grid-section">
        <div class="section-title-bar">
          <Badge variant="green" size="sm">Live Simulation</Badge>
          <span class="bar-note">Interactive Tri-Gate Test Runner</span>
        </div>
        <TerminalEmulator />
      </section>

      <!-- Section 3: Fine-Tune Configurator -->
      <section class="grid-section">
        <SkillConfigurator />
      </section>

      <!-- Section 4: Live Generated SKILL.md Inspector & Download -->
      <section class="grid-section">
        <SkillCodePreview />
      </section>
    </div>

    <!-- Return to overview footer bar -->
    <div class="hub-footer-nav">
      <button class="back-overview-btn" on:click={() => navigationStore.navigateTo('landing')}>
        <svg class="back-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Back to Home</span>
      </button>
    </div>
  </div>
</div>

<style>
  .installer-page {
    padding: 60px 24px 100px;
    background: #0a0a0a;
    min-height: calc(100vh - 68px);
  }

  .installer-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .hub-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .header-badges {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .hub-tag {
    font-family: var(--font-family-mono);
    font-size: 11px;
    color: var(--text-muted);
  }

  .hub-title {
    font-size: clamp(34px, 4.5vw, 54px);
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -1.8px;
    line-height: 1.1;
  }

  .hub-subtitle {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  .hub-meta-strip {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8px;
  }

  .meta-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-full);
    font-size: 12px;
    font-family: var(--font-family-mono);
    color: var(--text-secondary);
  }

  .dot-green {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 6px #10b981;
  }

  /* Hub Grid */
  .hub-grid {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .grid-section {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .section-title-bar {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .bar-note {
    font-size: 12px;
    color: var(--text-muted);
    font-family: var(--font-family-mono);
  }

  /* Bottom nav back */
  .hub-footer-nav {
    margin-top: 56px;
    text-align: center;
  }

  .back-overview-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 28px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid var(--border-hover);
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 500;
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
  }

  .back-overview-btn:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: var(--border-active);
    transform: translateY(-1px);
  }

  .back-arrow {
    width: 16px;
    height: 16px;
  }
</style>
