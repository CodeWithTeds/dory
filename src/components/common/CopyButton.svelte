<script lang="ts">
  import { copyToClipboard } from '../../services/clipboard';

  export let text: string;
  export let label: string = 'Copy';
  export let copiedLabel: string = 'Copied!';
  export let toastDescription: string = 'Copied to clipboard';

  let copied = false;
  let timer: any;

  async function handleCopy() {
    const success = await copyToClipboard(text, toastDescription);
    if (success) {
      copied = true;
      clearTimeout(timer);
      timer = setTimeout(() => {
        copied = false;
      }, 2000);
    }
  }
</script>

<button class="copy-btn" class:copied on:click={handleCopy} title="Copy to clipboard">
  {#if copied}
    <svg class="icon check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span class="label">{copiedLabel}</span>
  {:else}
    <svg class="icon copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
    <span class="label">{label}</span>
  {/if}
</button>

<style>
  .copy-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: var(--radius-sm);
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid var(--border-subtle);
    color: var(--text-secondary);
    font-size: 12px;
    font-weight: 500;
    transition: all var(--transition-fast);
  }

  .copy-btn:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: var(--border-hover);
    color: var(--text-primary);
  }

  .copy-btn.copied {
    background: rgba(16, 185, 129, 0.15);
    border-color: rgba(16, 185, 129, 0.4);
    color: #34d399;
  }

  .icon {
    width: 14px;
    height: 14px;
  }
</style>
