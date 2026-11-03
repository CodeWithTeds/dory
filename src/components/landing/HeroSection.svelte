<script lang="ts">
  import { onMount } from 'svelte';
  import { copyToClipboard } from '../../services/clipboard';
  import localTraffic from '../../../traffic/summary.json';

  let copied = false;
  let totalInstalls: number = localTraffic.total_clones || 0;
  let showStatsBadge = false;
  const commandText = 'npx skills add https://github.com/CodeWithTeds/dory --skill dory';

  onMount(() => {
    // Hidden URL trigger: only show live install stats when explicitly visited via #stats or ?stats
    const checkStatsUrl = () => {
      const hash = window.location.hash.toLowerCase();
      const search = window.location.search.toLowerCase();
      showStatsBadge = hash.includes('stats') || search.includes('stats') || hash.includes('metrics');
    };
    checkStatsUrl();
    window.addEventListener('hashchange', checkStatsUrl);

    // Attempt to fetch fresh live metrics from GitHub raw CDN
    fetch('https://raw.githubusercontent.com/CodeWithTeds/dory/main/traffic/summary.json', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.total_clones === 'number') {
          totalInstalls = data.total_clones;
        }
      })
      .catch(() => {
        // Fallback to bundled localTraffic
      });

    return () => {
      window.removeEventListener('hashchange', checkStatsUrl);
    };
  });

  async function handleCopy() {
    const success = await copyToClipboard(commandText, 'Copied: ' + commandText);
    if (success) {
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    }
  }

  // Official AI coding agents supported by skills.sh (sample.png)
  const agents = [
    {
      name: 'Cursor',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 17 17 7"/><polyline points="10 7 17 7 17 14"/><polyline points="4 14 10 8"/><polyline points="4 20 14 10"/></svg>`
    },
    {
      name: 'Claude Code',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 4 8 4 14v7h4.2v-6.5c0-3.2 1.6-4.8 3.8-4.8s3.8 1.6 3.8 4.8V21H20v-7c0-6-2.5-11-8-11z"/></svg>`
    },
    {
      name: 'Gemini CLI / Antigravity',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z"/></svg>`
    },
    {
      name: 'Cline',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="6" width="16" height="13" rx="4"/><circle cx="8.5" cy="12.5" r="1.5" fill="#0a0a0a"/><circle cx="15.5" cy="12.5" r="1.5" fill="#0a0a0a"/><path d="M12 2v4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="12" cy="2" r="1.2" fill="currentColor"/></svg>`
    },
    {
      name: 'Droid (Factory)',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="13" r="6"/><circle cx="9.5" cy="12.5" r="1.2" fill="#0a0a0a"/><circle cx="14.5" cy="12.5" r="1.2" fill="#0a0a0a"/><circle cx="5" cy="13" r="1.5"/><circle cx="19" cy="13" r="1.5"/><line x1="12" y1="3" x2="12" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="2.5" r="1.2"/></svg>`
    },
    {
      name: 'OpenAI Codex',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 0 1 4 4v2"/><path d="M19.07 4.93a4 4 0 0 1 0 5.66l-1.41 1.41"/><path d="M22 12a4 4 0 0 1-4 4h-2"/><path d="M19.07 19.07a4 4 0 0 1-5.66 0l-1.41-1.41"/><path d="M12 22a4 4 0 0 1-4-4v-2"/><path d="M4.93 19.07a4 4 0 0 1 0-5.66l1.41-1.41"/><path d="M2 12a4 4 0 0 1 4-4h2"/><path d="M4.93 4.93a4 4 0 0 1 5.66 0l1.41 1.41"/></svg>`
    },
    {
      name: 'Windsurf',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 17c3.5-3 7-5 10.5-2s7 1 9.5-2"/><path d="M2 11c3.5-3 7-5 10.5-2s7 1 9.5-2"/><path d="M12 2l7 7"/></svg>`
    },
    {
      name: 'Aider',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="8.5" cy="16" r="1.2" fill="currentColor"/><circle cx="15.5" cy="16" r="1.2" fill="currentColor"/><path d="M12 2v5M8 7h8"/></svg>`
    },
    {
      name: 'Roo Code',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 5l-2.5 3h-2l-1-2-2 1v2.5H8.5a4.5 4.5 0 0 0-4.5 4.5v5h3v-3.5h2v3.5h7v-3a3 3 0 0 0 3-3V7.5L20 6l-1-1z"/><circle cx="14" cy="9.5" r="1.2" fill="#0a0a0a"/></svg>`
    },
    {
      name: 'GitHub Copilot',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>`
    },
    {
      name: 'Continue',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="4 5 13 12 4 19 4 5"/><polygon points="12 5 21 12 12 19 12 5"/></svg>`
    },
    {
      name: 'Devin',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`
    },
    {
      name: 'Warp',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h7.5l4.5 7-4.5 7H4l4.5-7L4 4zm8 0h8l-4.5 7 4.5 7h-8l4.5-7L12 4z"/></svg>`
    },
    {
      name: 'Zed',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16L4 18h16"/></svg>`
    }
  ];
</script>

<section class="hero-section">
  <!-- Subtle ambient glow matching Dory blue (#0333ff) -->
  <div class="ambient-glow" aria-hidden="true"></div>

  <div class="hero-content">
    <!-- Massive typography strictly adhering to design/ui.md without cluttering icons -->
    <h1 class="hero-title">
      <span class="line line-1">Do the task.</span>
      <span class="line line-2">Yield improvements.</span>
      <span class="line line-3 accent-now">Now.</span>
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
        <div class="launch-header-row">
          <span class="launch-label">TRY IT NOW</span>
          {#if showStatsBadge}
            <span class="installs-badge">
              <span class="pulse-dot"></span>
              <span class="installs-count">{totalInstalls}</span>
              <span class="installs-text">installs</span>
            </span>
          {/if}
        </div>
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
            {#each [...agents, ...agents] as agent}
              <div class="agent-item" title={agent.name}>
                {@html agent.svg}
              </div>
            {/each}
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
    font-size: clamp(34px, 8.2vw, 111px);
    font-weight: 700;
    line-height: clamp(38px, 8vw, 109px);
    letter-spacing: clamp(-1.8px, -0.055em, -6.12px);
    color: var(--text-primary);
    margin: 0 0 28px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 100%;
  }

  .hero-title .line {
    display: block;
    word-break: normal;
    overflow-wrap: break-word;
  }

  /* Staggered entrance text animation when opening the site */
  .hero-title .line-1 {
    animation: revealHeroText 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;
  }

  .hero-title .line-2 {
    animation: revealHeroText 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.24s both;
  }

  .hero-title .line-3 {
    animation: revealHeroNow 1s cubic-bezier(0.16, 1, 0.3, 1) 0.42s both;
  }

  .hero-title .accent-now {
    color: #ffffff;
    text-shadow: 0 0 45px rgba(255, 255, 255, 0.4);
  }

  .hero-subline {
    max-width: 820px;
    font-size: clamp(14px, 1.4vw, 20px);
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
    font-weight: 400;
    animation: revealSubline 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
  }

  .launch-strip-container {
    animation: revealActions 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.75s both;
  }

  .ambient-glow {
    animation: ambientBreathe 1.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes revealHeroText {
    0% {
      opacity: 0;
      transform: translateY(28px);
      filter: blur(8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }

  @keyframes revealHeroNow {
    0% {
      opacity: 0;
      transform: translateY(28px) scale(0.97);
      filter: blur(8px);
      text-shadow: 0 0 0px rgba(255, 255, 255, 0);
    }
    60% {
      opacity: 1;
      text-shadow: 0 0 50px rgba(255, 255, 255, 0.6);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
      text-shadow: 0 0 45px rgba(255, 255, 255, 0.4);
    }
  }

  @keyframes revealSubline {
    0% {
      opacity: 0;
      transform: translateY(18px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes revealActions {
    0% {
      opacity: 0;
      transform: translateY(22px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes ambientBreathe {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.85);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
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

  .launch-header-row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .installs-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-family-mono);
    font-size: 11px;
    letter-spacing: 0.5px;
    color: var(--text-secondary);
    user-select: none;
  }

  .pulse-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #10b981;
    box-shadow: 0 0 8px #10b981;
    animation: pulseGlow 2.5s infinite ease-in-out;
  }

  @keyframes pulseGlow {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.35;
      transform: scale(0.85);
    }
  }

  .installs-count {
    color: var(--text-primary);
    font-weight: 700;
  }

  .installs-text {
    color: var(--text-muted);
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

  .agent-item :global(svg) {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 860px) {
    .hero-section {
      padding: 50px 20px 50px;
      min-height: calc(100vh - 60px);
    }

    .hero-title {
      font-size: clamp(34px, 8vw, 68px);
      line-height: 1.08;
      letter-spacing: -2px;
      margin-bottom: 24px;
    }

    .hero-subline {
      font-size: 15px;
      padding: 0 12px;
    }

    .launch-strip-container {
      margin-top: 40px;
      flex-direction: column;
      align-items: center;
      gap: 28px;
      width: 100%;
    }

    .launch-col {
      align-items: stretch;
      width: 100%;
      max-width: 540px;
    }

    .agents-col {
      max-width: 540px;
      width: 100%;
    }

    .terminal-input-box {
      width: 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .hero-section {
      padding: 36px 14px 44px;
    }

    .hero-title {
      font-size: clamp(28px, 8.5vw, 38px);
      line-height: 1.1;
      letter-spacing: -1.2px;
      margin-bottom: 18px;
    }

    .hero-subline {
      font-size: 13.5px;
      line-height: 1.55;
      padding: 0 4px;
    }

    .terminal-input-box {
      padding: 10px 12px;
      gap: 10px;
    }

    .terminal-code {
      font-size: 11.5px;
    }

    .launch-header-row {
      width: 100%;
    }
  }

  @media (max-width: 360px) {
    .hero-title {
      font-size: 26px;
      letter-spacing: -0.8px;
    }
  }
</style>
