<script lang="ts">
  import { navigationStore } from '../../stores/navigation';

  export let currentRoute: 'landing' | 'install';
</script>

<header class="navbar">
  <div class="nav-inner">
    <!-- Brand -->
    <div 
      class="brand-group" 
      on:click={() => navigationStore.navigateTo('landing')} 
      role="button" 
      tabindex="0" 
      on:keydown={(e) => e.key === 'Enter' && navigationStore.navigateTo('landing')}
    >
      <span class="brand-name">dory</span>
    </div>

    <!-- Right Actions -->
    <div class="nav-actions">
      <div class="user-badge">
        <span class="user-name">Prof Alex</span>
        <span class="user-separator">·</span>
        <span class="user-role">Software Dev</span>
      </div>

      <button 
        class="icon-control-btn" 
        title={currentRoute === 'landing' ? 'Open Installation Hub' : 'Back to Home'}
        on:click={() => navigationStore.toggle()}
        aria-label="Toggle Page"
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
    cursor: pointer;
    user-select: none;
  }

  .brand-name {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.5px;
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .user-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-full);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: -0.2px;
    user-select: none;
    transition: all var(--transition-fast);
  }

  .user-badge:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: var(--border-hover);
  }

  .user-name {
    color: var(--text-primary);
    font-weight: 600;
  }

  .user-separator {
    color: var(--text-muted);
    font-size: 11px;
  }

  .user-role {
    color: var(--text-secondary);
  }

  .icon-control-btn {
    width: 38px;
    height: 38px;
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
    width: 17px;
    height: 17px;
  }

  @media (max-width: 768px) {
    .nav-inner {
      padding: 0 16px;
    }

    .user-badge {
      padding: 5px 10px;
      font-size: 12px;
      gap: 4px;
    }
  }

  @media (max-width: 480px) {
    .user-role, .user-separator {
      display: none;
    }
  }
</style>
