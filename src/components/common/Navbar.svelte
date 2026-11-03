<script lang="ts">
  import { navigationStore } from '../../stores/navigation';
  import Badge from './Badge.svelte';

  export let currentRoute: 'landing' | 'install';
</script>

<header class="navbar">
  <div class="nav-inner">
    <!-- Brand -->
    <div class="brand-group" on:click={() => navigationStore.navigateTo('landing')} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && navigationStore.navigateTo('landing')}>
      <div class="brand-mark">
        <img src="/dory-fish.png" alt="Dory" class="brand-fish" />
      </div>
      <div class="brand-text">
        <span class="brand-name">dory</span>
        <span class="brand-edition">Citadel v1.0</span>
      </div>
      <Badge variant="blue" size="sm">0 Token Bleed</Badge>
    </div>

    <!-- 2-Page Navigation Switcher -->
    <nav class="nav-tabs">
      <button 
        class="tab-btn" 
        class:active={currentRoute === 'landing'}
        on:click={() => navigationStore.navigateTo('landing')}
      >
        <span class="tab-num">01</span>
        <span class="tab-text">Overview & Manifesto</span>
      </button>

      <button 
        class="tab-btn" 
        class:active={currentRoute === 'install'}
        on:click={() => navigationStore.navigateTo('install')}
      >
        <span class="tab-num">02</span>
        <span class="tab-text">Install Plugin Hub</span>
        <span class="tab-dot"></span>
      </button>
    </nav>

    <!-- Right Actions -->
    <div class="nav-actions">
      {#if currentRoute === 'landing'}
        <button class="cta-install-btn" on:click={() => navigationStore.navigateTo('install')}>
          <span>Install Dory</span>
          <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      {:else}
        <button class="cta-return-btn" on:click={() => navigationStore.navigateTo('landing')}>
          <svg class="arrow-back" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Manifesto</span>
        </button>
      {/if}

      <!-- Sliders / Control Icon directly referencing design/image.png -->
      <button 
        class="icon-control-btn" 
        title="Switch Page ({currentRoute === 'landing' ? 'Open Install Hub' : 'Open Manifesto'})"
        on:click={() => navigationStore.toggle()}
        aria-label="Switch Page"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sliders-icon">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
      </button>
    </div>
  </div>
</header>

<style>
  .navbar {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: rgba(10, 10, 10, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-subtle);
    height: 68px;
  }

  .nav-inner {
    max-width: 1400px;
    margin: 0 auto;
    height: 100%;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .brand-group {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    user-select: none;
  }

  .brand-mark {
    width: 32px;
    height: 32px;
    border-radius: var(--radius-sm);
    background: rgba(3, 51, 255, 0.15);
    border: 1px solid rgba(3, 51, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .brand-fish {
    width: 26px;
    height: 26px;
    object-fit: cover;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }

  .brand-name {
    font-size: 17px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.5px;
  }

  .brand-edition {
    font-size: 10px;
    font-family: var(--font-family-mono);
    color: var(--text-muted);
  }

  /* 2-Page Navigation Pills */
  .nav-tabs {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-full);
  }

  .tab-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
  }

  .tab-btn:hover {
    color: var(--text-primary);
  }

  .tab-btn.active {
    background: rgba(255, 255, 255, 0.12);
    color: var(--text-primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  }

  .tab-num {
    font-family: var(--font-family-mono);
    font-size: 10px;
    color: var(--text-muted);
  }

  .tab-btn.active .tab-num {
    color: #60a5fa;
  }

  .tab-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
  }

  /* Right CTA */
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .cta-install-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: #fafafa;
    color: #0a0a0a;
    font-weight: 600;
    font-size: 13px;
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
  }

  .cta-install-btn:hover {
    background: #ffffff;
    box-shadow: 0 0 16px rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }

  .cta-return-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.08);
    color: var(--text-primary);
    border: 1px solid var(--border-subtle);
    font-weight: 500;
    font-size: 13px;
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
  }

  .cta-return-btn:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: var(--border-hover);
  }

  .icon-control-btn {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-full);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-subtle);
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-fast);
    cursor: pointer;
  }

  .icon-control-btn:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: var(--border-hover);
    color: var(--text-primary);
    transform: rotate(15deg);
  }

  .sliders-icon {
    width: 16px;
    height: 16px;
  }

  .arrow, .arrow-back {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 768px) {
    .nav-inner {
      padding: 0 16px;
    }
    .brand-edition, .tab-num {
      display: none;
    }
    .nav-tabs {
      gap: 2px;
    }
    .tab-btn {
      padding: 6px 10px;
      font-size: 12px;
    }
  }
</style>
