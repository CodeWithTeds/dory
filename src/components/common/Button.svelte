<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'pill' | 'outline' | 'ghost' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let disabled = false;
  export let href: string | undefined = undefined;
</script>

{#if href}
  <a {href} class="btn {variant} {size}" class:disabled>
    <slot />
  </a>
{:else}
  <button {disabled} class="btn {variant} {size}" on:click>
    <slot />
  </button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    text-decoration: none;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    white-space: nowrap;
    user-select: none;
  }

  .btn.sm {
    padding: 8px 14px;
    font-size: 13px;
  }

  .btn.md {
    padding: 11px 20px;
    font-size: 14px;
  }

  .btn.lg {
    padding: 14px 28px;
    font-size: 15px;
  }

  .btn.pill {
    border-radius: var(--radius-full);
    padding: 13px 30px;
    font-size: 15px;
    background: #fafafa;
    color: #0a0a0a;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.12);
  }

  .btn.pill:hover:not(:disabled) {
    background: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 6px 24px rgba(255, 255, 255, 0.22);
  }

  .btn.primary {
    background: var(--text-primary);
    color: var(--bg-canvas);
  }

  .btn.primary:hover:not(:disabled) {
    background: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(255, 255, 255, 0.15);
  }

  .btn.secondary {
    background: rgba(255, 255, 255, 0.08);
    color: var(--text-primary);
    border: 1px solid var(--border-subtle);
  }

  .btn.secondary:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.12);
    border-color: var(--border-hover);
  }

  .btn.outline {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--border-hover);
  }

  .btn.outline:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.06);
    border-color: var(--border-active);
  }

  .btn.ghost {
    background: transparent;
    color: var(--text-secondary);
  }

  .btn.ghost:hover:not(:disabled) {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.05);
  }

  .btn:disabled, .btn.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
</style>
