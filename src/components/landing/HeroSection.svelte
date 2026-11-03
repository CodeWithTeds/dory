<script lang="ts">
  import { copyToClipboard } from '../../services/clipboard';

  let copied = false;
  const commandText = 'npx skills add https://github.com/CodeWithTeds/dory --skill dory';

  async function handleCopy() {
    const success = await copyToClipboard(commandText, 'Copied: ' + commandText);
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

    <!-- Bottom Action Row matching sample.png -->
    <div class="launch-strip-container">
      <!-- Left Column: TRY IT NOW -->
      <div class="launch-col">
        <span class="launch-label">TRY IT NOW</span>
        <div 
          class="terminal-input-box" 
          on:click={handleCopy} 
          role="button" 
          tabindex="0"
          on:keydown={(e) => e.key === 'Enter' && handleCopy()}
          title="Click to copy command"
        >
          <div class="terminal-text-group">
            <span class="prompt-dollar">$</span>
            <code class="terminal-code">npx skills add https://github.com/CodeWithTeds/dory --skill dory</code>
          </div>
          <button class="copy-action-btn" aria-label="Copy command" type="button">
            {#if copied}
              <svg class="copy-svg check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            {:else}
              <svg class="copy-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            {/if}
          </button>
        </div>
      </div>

      <!-- Right Column: AVAILABLE FOR THESE AGENTS with Smooth Infinite Slideshow -->
      <div class="launch-col agents-col">
        <span class="launch-label">AVAILABLE FOR THESE AGENTS</span>
        <div class="agents-slideshow-mask">
          <div class="agents-slideshow-track">
            <!-- Set 1 of Real AI Coding Agents -->
            <!-- 1. Cursor IDE -->
            <div class="agent-item" title="Cursor IDE">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="7 17 17 7"/>
                <polyline points="10 7 17 7 17 14"/>
                <polyline points="4 14 10 8"/>
                <polyline points="4 20 14 10"/>
              </svg>
            </div>

            <!-- 2. Google Antigravity & Gemini CLI -->
            <div class="agent-item" title="Google Antigravity / Gemini">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z"/>
              </svg>
            </div>

            <!-- 3. Cline Autonomous Agent -->
            <div class="agent-item" title="Cline Coding Agent">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a1 1 0 0 1 1 1v2.07A8 8 0 0 1 20 13v3a3 3 0 0 1-3 3h-1v1a1 1 0 0 1-2 0v-1h-4v1a1 1 0 0 1-2 0v-1H7a3 3 0 0 1-3-3v-3a8 8 0 0 1 7-7.93V3a1 1 0 0 1 1-1zm-4 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
              </svg>
            </div>

            <!-- 4. Anthropic Claude Code -->
            <div class="agent-item" title="Anthropic Claude Code">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C7 3 4 8 4 14v7h4v-6c0-3 2-5 4-5s4 2 4 5v6h4v-7c0-6-3-11-8-11z"/>
              </svg>
            </div>

            <!-- 5. Windsurf AI Editor -->
            <div class="agent-item" title="Windsurf (Codeium)">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 16c3-3 6.5-4.5 10-1.5 3.5 3 6.5 1.5 8 0"/>
                <path d="M3 10c3-3 6.5-4.5 10-1.5 3.5 3 6.5 1.5 8 0"/>
                <path d="M13 3l6 6"/>
              </svg>
            </div>

            <!-- 6. Aider Pair Programmer -->
            <div class="agent-item" title="Aider">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="13" r="6"/>
                <circle cx="9.5" cy="12.5" r="1.3" fill="#000"/>
                <circle cx="14.5" cy="12.5" r="1.3" fill="#000"/>
                <circle cx="5" cy="13" r="1.5"/>
                <circle cx="19" cy="13" r="1.5"/>
                <line x1="12" y1="3" x2="12" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="2.5" r="1.2"/>
              </svg>
            </div>

            <!-- 7. Roo Code Autonomous Agent -->
            <div class="agent-item" title="Roo Code">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 4l-3 4h-2l-1-2-2 1v3H8a4 4 0 0 0-4 4v5h3v-4h2v4h6v-3a3 3 0 0 0 3-3v-6l2-2-2-1z"/>
                <circle cx="14" cy="9" r="1" fill="#000"/>
              </svg>
            </div>

            <!-- 8. OpenAI Codex / Operator -->
            <div class="agent-item" title="OpenAI Codex / Agents">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2a4 4 0 0 1 4 4v2"/>
                <path d="M19.07 4.93a4 4 0 0 1 0 5.66l-1.41 1.41"/>
                <path d="M22 12a4 4 0 0 1-4 4h-2"/>
                <path d="M19.07 19.07a4 4 0 0 1-5.66 0l-1.41-1.41"/>
                <path d="M12 22a4 4 0 0 1-4-4v-2"/>
                <path d="M4.93 19.07a4 4 0 0 1 0-5.66l1.41-1.41"/>
                <path d="M2 12a4 4 0 0 1 4-4h2"/>
                <path d="M4.93 4.93a4 4 0 0 1 5.66 0l1.41 1.41"/>
              </svg>
            </div>

            <!-- Set 2 (Duplicate for Seamless Infinite Marquee Loop) -->
            <!-- 1. Cursor IDE -->
            <div class="agent-item" title="Cursor IDE" aria-hidden="true">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="7 17 17 7"/>
                <polyline points="10 7 17 7 17 14"/>
                <polyline points="4 14 10 8"/>
                <polyline points="4 20 14 10"/>
              </svg>
            </div>

            <!-- 2. Google Antigravity & Gemini CLI -->
            <div class="agent-item" title="Google Antigravity / Gemini" aria-hidden="true">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z"/>
              </svg>
            </div>

            <!-- 3. Cline Autonomous Agent -->
            <div class="agent-item" title="Cline Coding Agent" aria-hidden="true">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a1 1 0 0 1 1 1v2.07A8 8 0 0 1 20 13v3a3 3 0 0 1-3 3h-1v1a1 1 0 0 1-2 0v-1h-4v1a1 1 0 0 1-2 0v-1H7a3 3 0 0 1-3-3v-3a8 8 0 0 1 7-7.93V3a1 1 0 0 1 1-1zm-4 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
              </svg>
            </div>

            <!-- 4. Anthropic Claude Code -->
            <div class="agent-item" title="Anthropic Claude Code" aria-hidden="true">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C7 3 4 8 4 14v7h4v-6c0-3 2-5 4-5s4 2 4 5v6h4v-7c0-6-3-11-8-11z"/>
              </svg>
            </div>

            <!-- 5. Windsurf AI Editor -->
            <div class="agent-item" title="Windsurf (Codeium)" aria-hidden="true">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 16c3-3 6.5-4.5 10-1.5 3.5 3 6.5 1.5 8 0"/>
                <path d="M3 10c3-3 6.5-4.5 10-1.5 3.5 3 6.5 1.5 8 0"/>
                <path d="M13 3l6 6"/>
              </svg>
            </div>

            <!-- 6. Aider Pair Programmer -->
            <div class="agent-item" title="Aider" aria-hidden="true">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="13" r="6"/>
                <circle cx="9.5" cy="12.5" r="1.3" fill="#000"/>
                <circle cx="14.5" cy="12.5" r="1.3" fill="#000"/>
                <circle cx="5" cy="13" r="1.5"/>
                <circle cx="19" cy="13" r="1.5"/>
                <line x1="12" y1="3" x2="12" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="2.5" r="1.2"/>
              </svg>
            </div>

            <!-- 7. Roo Code Autonomous Agent -->
            <div class="agent-item" title="Roo Code" aria-hidden="true">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 4l-3 4h-2l-1-2-2 1v3H8a4 4 0 0 0-4 4v5h3v-4h2v4h6v-3a3 3 0 0 0 3-3v-6l2-2-2-1z"/>
                <circle cx="14" cy="9" r="1" fill="#000"/>
              </svg>
            </div>

            <!-- 8. OpenAI Codex / Operator -->
            <div class="agent-item" title="OpenAI Codex / Agents" aria-hidden="true">
              <svg class="agent-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2a4 4 0 0 1 4 4v2"/>
                <path d="M19.07 4.93a4 4 0 0 1 0 5.66l-1.41 1.41"/>
                <path d="M22 12a4 4 0 0 1-4 4h-2"/>
                <path d="M19.07 19.07a4 4 0 0 1-5.66 0l-1.41-1.41"/>
                <path d="M12 22a4 4 0 0 1-4-4v-2"/>
                <path d="M4.93 19.07a4 4 0 0 1 0-5.66l1.41-1.41"/>
                <path d="M2 12a4 4 0 0 1 4-4h2"/>
                <path d="M4.93 4.93a4 4 0 0 1 5.66 0l1.41 1.41"/>
              </svg>
            </div>
          </div>
        </div>
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

  /* ==========================================================================
     Two-Column Section from sample.png: TRY IT NOW + AVAILABLE FOR THESE AGENTS
     ========================================================================== */
  .launch-strip-container {
    margin-top: 56px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    width: 100%;
    max-width: 1100px;
    flex-wrap: wrap;
    text-align: left;
  }

  .launch-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .launch-label {
    font-family: var(--font-family-mono);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: #a1a1aa;
    text-transform: uppercase;
  }

  /* Command Terminal Input Box from sample.png */
  .terminal-input-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background: #141414;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 8px;
    padding: 12px 18px;
    min-height: 48px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all var(--transition-fast);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    max-width: 620px;
    user-select: none;
  }

  .terminal-input-box:hover {
    background: #181818;
    border-color: rgba(255, 255, 255, 0.22);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.6);
  }

  .terminal-text-group {
    display: flex;
    align-items: center;
    gap: 10px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .terminal-text-group::-webkit-scrollbar {
    display: none;
  }

  .prompt-dollar {
    font-family: var(--font-family-mono);
    font-size: 14px;
    color: #71717a;
    user-select: none;
    flex-shrink: 0;
  }

  .terminal-code {
    font-family: var(--font-family-mono);
    font-size: clamp(12px, 1.8vw, 14px);
    color: #e4e4e7;
    white-space: nowrap;
    letter-spacing: -0.2px;
  }

  .copy-action-btn {
    background: transparent;
    border: none;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #71717a;
    flex-shrink: 0;
    transition: color var(--transition-fast);
  }

  .terminal-input-box:hover .copy-action-btn {
    color: #fafafa;
  }

  .copy-svg {
    width: 17px;
    height: 17px;
  }

  .copy-svg.check {
    color: #10b981;
  }

  /* Agents Column & Continuous Slideshow Marquee */
  .agents-col {
    max-width: 380px;
    width: 100%;
    overflow: hidden;
  }

  .agents-slideshow-mask {
    position: relative;
    width: 100%;
    overflow: hidden;
    min-height: 48px;
    display: flex;
    align-items: center;
    mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
  }

  .agents-slideshow-track {
    display: flex;
    align-items: center;
    gap: 26px;
    width: max-content;
    animation: agentScroll 22s linear infinite;
    will-change: transform;
  }

  .agents-slideshow-mask:hover .agents-slideshow-track {
    animation-play-state: paused;
  }

  @keyframes agentScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .agent-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    color: #88888e;
    transition: all var(--transition-fast);
    cursor: pointer;
    flex-shrink: 0;
  }

  .agent-item:hover {
    color: #ffffff;
    transform: scale(1.2);
  }

  .agent-svg {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 860px) {
    .launch-strip-container {
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }

    .launch-col {
      align-items: center;
      width: 100%;
    }

    .agents-col {
      max-width: 100%;
    }

    .terminal-input-box {
      width: 100%;
      max-width: 100%;
    }
  }
</style>
