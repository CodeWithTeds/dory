<script lang="ts">
  import { copyToClipboard } from '../../services/clipboard';

  let copied = false;
  const commandText = 'npx skills add <owner/repo>';

  async function handleCopy() {
    const success = await copyToClipboard(commandText, 'Copied: npx skills add <owner/repo>');
    if (success) {
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    }
  }
</script>

<section class="hero-section">
  <!-- Subtle ambient glow matching Dory blue (#0333ff) -->
  <div class="ambient-glow" aria-hidden="true"></div>

  <div class="hero-content">
    <!-- Massive typography strictly adhering to design/ui.md without cluttering icons -->
    <h1 class="hero-title">
      <span class="line">Do the task.</span>
      <span class="line">Yield improvements.</span>
      <span class="line accent-now">Now.</span>
    </h1>

    <!-- Core DORY Definition Subtitle -->
    <p class="hero-subline">
      <strong class="dory-highlight">DORY</strong> — 
      <span class="acronym-chunk"><span class="accent-letter">D</span>o the task</span>, 
      <span class="acronym-chunk"><span class="accent-letter">O</span>bserve results</span>, 
      <span class="acronym-chunk"><span class="accent-letter">R</span>ecognize mistakes</span>, and 
      <span class="acronym-chunk"><span class="accent-letter">Y</span>ield improvements</span>.
    </p>

    <!-- Try it now command block -->
    <div class="try-now-wrapper">
      <span class="try-now-label">Try it now</span>
      <div 
        class="command-pill" 
        on:click={handleCopy} 
        role="button" 
        tabindex="0"
        on:keydown={(e) => e.key === 'Enter' && handleCopy()}
        title="Click to copy command"
      >
        <span class="prompt-symbol">$</span>
        <code class="command-code">npx skills add &lt;owner/repo&gt;</code>
        <button class="copy-btn" aria-label="Copy command" type="button">
          {#if copied}
            <svg class="copy-icon check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          {:else}
            <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    position: relative;
    min-height: calc(100vh - 68px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px 24px 60px;
    background-color: var(--bg-canvas);
    overflow: hidden;
  }

  .ambient-glow {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 720px;
    height: 420px;
    background: radial-gradient(circle, rgba(3, 51, 255, 0.22) 0%, rgba(3, 51, 255, 0.04) 55%, transparent 80%);
    filter: blur(85px);
    pointer-events: none;
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /*
   * EXACT METRICS FROM design/ui.md:
   * bg:#0a0a0a
   * text:#fafafa
   * text:Inter
   * font-family: Inter, "Inter Fallback", -apple-system, "system-ui", "Segoe UI", Roboto, Arial, sans-serif;
   * font-size: 111px;
   * font-weight: 700;
   * line-height: 109px;
   * letter-spacing: -6.12px;
   * color: #fafafa;
   */
  .hero-title {
    font-family: var(--font-family-sans);
    font-size: clamp(48px, 8.2vw, 111px);
    font-weight: 700;
    line-height: clamp(52px, 8vw, 109px);
    letter-spacing: clamp(-2.8px, -0.055em, -6.12px);
    color: var(--text-primary);
    margin: 0 0 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-title .line {
    display: block;
    word-break: keep-all;
  }

  .hero-title .accent-now {
    color: #ffffff;
    text-shadow: 0 0 45px rgba(255, 255, 255, 0.4);
  }

  .hero-subline {
    max-width: 820px;
    font-size: clamp(16px, 1.4vw, 20px);
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
    font-weight: 400;
  }

  .dory-highlight {
    color: #fafafa;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  .acronym-chunk {
    display: inline-block;
  }

  .accent-letter {
    color: #60a5fa;
    font-weight: 700;
  }

  /* Try it now command block */
  .try-now-wrapper {
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .try-now-label {
    font-family: var(--font-family-mono);
    font-size: 13px;
    font-weight: 600;
    color: #a1a1aa;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .command-pill {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 12px 24px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: all var(--transition-fast);
    backdrop-filter: blur(12px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    user-select: none;
  }

  .command-pill:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.28);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.6);
  }

  .prompt-symbol {
    color: #3875ff;
    font-family: var(--font-family-mono);
    font-size: 15px;
    font-weight: 700;
  }

  .command-code {
    color: #fafafa;
    font-family: var(--font-family-mono);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.2px;
  }

  .copy-btn {
    background: transparent;
    border: none;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #a1a1aa;
    margin-left: 4px;
    transition: color var(--transition-fast);
  }

  .command-pill:hover .copy-btn {
    color: #ffffff;
  }

  .copy-icon {
    width: 16px;
    height: 16px;
  }

  .copy-icon.check {
    color: #10b981;
  }
</style>
