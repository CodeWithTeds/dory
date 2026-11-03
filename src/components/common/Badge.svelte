<script lang="ts">
  export let variant: 'neutral' | 'blue' | 'green' | 'amber' = 'neutral';
  export let size: 'sm' | 'md' = 'sm';
</script>

<span class="badge {variant} {size}">
  <slot />
</span>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-family-mono);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
  }

  .badge.sm {
    font-size: 11px;
    padding: 3px 10px;
    line-height: 1.2;
  }

  .badge.md {
    font-size: 12px;
    padding: 5px 14px;
    line-height: 1.3;
  }

  .badge.neutral {
    background: rgba(255, 255, 255, 0.06);
    color: var(--text-secondary);
    border: 1px solid var(--border-subtle);
  }

  .badge.blue {
    background: rgba(3, 51, 255, 0.15);
    color: #60a5fa;
    border: 1px solid rgba(3, 51, 255, 0.4);
    box-shadow: 0 0 12px rgba(3, 51, 255, 0.2);
  }

  .badge.green {
    background: rgba(16, 185, 129, 0.12);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.35);
  }

  .badge.amber {
    background: rgba(245, 158, 11, 0.12);
    color: #fbbf24;
    border: 1px solid rgba(245, 158, 11, 0.35);
  }
</style>
