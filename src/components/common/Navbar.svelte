<script lang="ts">
  import { navigationStore } from '../../stores/navigation';
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
