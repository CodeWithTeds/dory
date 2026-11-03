<script lang="ts">
  import { toastStore } from '../../stores/toast';
</script>

{#if $toastStore.length > 0}
  <div class="toast-container" aria-live="polite">
    {#each $toastStore as toast (toast.id)}
      <div class="toast-item {toast.type || 'info'}">
        <div class="toast-icon">
          {#if toast.type === 'success'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          {:else if toast.type === 'warning'}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          {:else}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          {/if}
        </div>
        <div class="toast-content">
          <div class="toast-title">{toast.title}</div>
          {#if toast.description}
            <div class="toast-desc">{toast.description}</div>
          {/if}
        </div>
        <button class="toast-close" on:click={() => toastStore.remove(toast.id)}>
          &times;
        </button>
      </div>
    {/each}
  </div>
{/if}

<style>
  .toast-container {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 10px;
    pointer-events: none;
  }

  .toast-item {
    pointer-events: auto;
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 280px;
    max-width: 420px;
    padding: 12px 16px;
    background: #141414;
    border: 1px solid var(--border-hover);
    border-radius: var(--radius-md);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    color: var(--text-primary);
    animation: slideUp 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .toast-item.success {
    border-color: rgba(16, 185, 129, 0.4);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.15);
  }

  .toast-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .toast-item.success .toast-icon {
    color: #10b981;
  }

  .toast-icon svg {
    width: 100%;
    height: 100%;
  }

  .toast-content {
    flex: 1;
  }

  .toast-title {
    font-size: 13px;
    font-weight: 600;
  }

  .toast-desc {
    font-size: 12px;
    color: var(--text-secondary);
    margin-top: 2px;
  }

  .toast-close {
    background: none;
    border: none;
    color: var(--text-muted);
    font-size: 18px;
    cursor: pointer;
    padding: 0 4px;
    line-height: 1;
  }

  .toast-close:hover {
    color: var(--text-primary);
  }
</style>
