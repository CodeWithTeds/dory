<script lang="ts">
  import { navigationStore } from '../../stores/navigation';
  import { toastStore } from '../../stores/toast';

  let isSpeaking = false;

  function playDoryVoice() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance("Just keep coding, just keep coding! Exit code zero!");
      utterance.pitch = 1.3;
      utterance.rate = 1.05;
      utterance.onstart = () => { isSpeaking = true; };
      utterance.onend = () => { isSpeaking = false; };
      utterance.onerror = () => { isSpeaking = false; };
      window.speechSynthesis.speak(utterance);
      toastStore.show('🔊 Dory Audio', '"Just keep coding, just keep coding!" — Exit 0 Non-Negotiable', 'info');
    } else {
      toastStore.show('Audio notice', 'Web Speech API is not supported in this browser.', 'info');
    }
  }
</script>

<section class="hero-section">
  <!-- Subtle ambient glow matching Dory blue (#0333ff) -->
  <div class="ambient-glow" aria-hidden="true"></div>

  <div class="hero-content">
    <!-- Top kicker strictly referencing 'Decision 001' from design/image.png -->
    <div class="kicker-wrapper">
      <span class="kicker-text">Decision 001</span>
    </div>

    <!-- Massive typography strictly adhering to design/ui.md and design/image.png with inline icons -->
    <h1 class="hero-title">
      <span class="line">
        Get the 
        <span class="inline-icon-pill" title="Dory Fuel / Skill">
          <svg class="inline-svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.22v5.72c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V6h6v4z"/>
          </svg>
        </span> 
        fuel
      </span>
      <span class="line">
        aid to 
        <span class="inline-icon-pill" title="Autonomous Coding Agents">
          <svg class="inline-svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6zm6 3h4v4h-4V9z"/>
          </svg>
        </span> 
        farmers.
      </span>
      <span class="line accent-now">Now.</span>
    </h1>

    <!-- Subtitle clarifying the Autonomous Agent Skill purpose -->
    <p class="hero-subline">
      The Ralph Wiggum Cold-Start Pressure Cooker loop. 0 token bleed, strict static typing, and non-negotiable Tri-Gate verification until Exit Code 0.
    </p>

    <!-- Pill button strictly matching 'Listen to the case' from design/image.png -->
    <div class="cta-group">
      <button 
        class="hero-pill-btn sound-btn" 
        class:speaking={isSpeaking}
        on:click={playDoryVoice}
        aria-label="Listen to the case"
      >
        <svg class="speaker-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
        <span>{isSpeaking ? 'Playing Voice...' : 'Listen to the case'}</span>
      </button>

      <button class="hero-pill-btn install-primary-btn" on:click={() => navigationStore.navigateTo('install')}>
        <span>Install Dory Plugin</span>
        <svg class="pill-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>

    <!-- Hero Visual Artwork Showcase referencing design/skills/image.png -->
    <div class="hero-visual-card">
      <div class="visual-inner">
        <div class="fish-glow-halo"></div>
        <img src="/dory-fish.png" alt="Dory Autonomous Coding Engine" class="hero-fish-artwork" />
        <div class="visual-meta">
          <div class="meta-row">
            <span class="meta-label">ARCHITECTURE</span>
            <span class="meta-val">Citadel 4-Layer / Tabula Rasa</span>
          </div>
          <div class="meta-divider"></div>
          <div class="meta-row">
            <span class="meta-label">VERIFICATION</span>
            <span class="meta-val green-text">Tri-Gate Exit 0 Non-Negotiable</span>
          </div>
          <div class="meta-divider"></div>
          <div class="meta-row">
            <span class="meta-label">TOKEN BLEED</span>
            <span class="meta-val blue-text">Zero (Disk Ground Truth)</span>
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
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 720px;
    height: 420px;
    background: radial-gradient(circle, rgba(3, 51, 255, 0.25) 0%, rgba(3, 51, 255, 0.05) 55%, transparent 80%);
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

  /* 'Decision 001' style kicker from design/image.png */
  .kicker-wrapper {
    margin-bottom: 24px;
  }

  .kicker-text {
    font-family: var(--font-family-sans);
    font-size: 19px;
    font-weight: 500;
    color: #e4e4e7;
    letter-spacing: -0.3px;
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
    margin: 0 0 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-title .line {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(10px, 1.8vw, 24px);
    word-break: keep-all;
    flex-wrap: wrap;
  }

  .hero-title .accent-now {
    color: #ffffff;
    text-shadow: 0 0 45px rgba(255, 255, 255, 0.4);
  }

  /* Inline icon pill precisely styled like the gas pump and tractor in design/image.png */
  .inline-icon-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: clamp(46px, 6.2vw, 84px);
    height: clamp(46px, 6.2vw, 84px);
    border-radius: clamp(14px, 1.8vw, 24px);
    background: #fafafa;
    color: #0a0a0a;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
    vertical-align: middle;
    transform: translateY(-2px);
  }

  .inline-svg {
    width: 58%;
    height: 58%;
  }

  .hero-subline {
    max-width: 680px;
    font-size: clamp(15px, 1.3vw, 18px);
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0 0 40px 0;
    font-weight: 400;
  }

  /* Pill button group matching 'Listen to the case' */
  .cta-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 56px;
    flex-wrap: wrap;
  }

  .hero-pill-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-family-sans);
    font-size: 16px;
    font-weight: 600;
    padding: 14px 32px;
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
    cursor: pointer;
  }

  /* White pill button exactly like 'Listen to the case' in design/image.png */
  .sound-btn {
    background: #fafafa;
    color: #0a0a0a;
    box-shadow: 0 4px 24px rgba(255, 255, 255, 0.16);
  }

  .sound-btn:hover {
    background: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(255, 255, 255, 0.28);
  }

  .sound-btn.speaking {
    background: #3875ff;
    color: #ffffff;
    box-shadow: 0 0 28px rgba(56, 117, 255, 0.6);
  }

  .speaker-icon {
    width: 18px;
    height: 18px;
  }

  .install-primary-btn {
    background: rgba(255, 255, 255, 0.08);
    color: #fafafa;
    border: 1px solid var(--border-hover);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }

  .install-primary-btn:hover {
    background: rgba(255, 255, 255, 0.16);
    border-color: var(--border-active);
    transform: translateY(-2px);
  }

  .pill-arrow {
    width: 16px;
    height: 16px;
    transition: transform var(--transition-fast);
  }

  .install-primary-btn:hover .pill-arrow {
    transform: translateX(4px);
  }

  /* Artwork showcase */
  .hero-visual-card {
    position: relative;
    width: 100%;
    max-width: 740px;
    border-radius: var(--radius-lg);
    background: rgba(18, 18, 18, 0.65);
    border: 1px solid var(--border-subtle);
    padding: 28px 24px;
    backdrop-filter: blur(14px);
  }

  .visual-inner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .fish-glow-halo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 240px;
    height: 240px;
    background: radial-gradient(circle, rgba(3, 51, 255, 0.48) 0%, transparent 70%);
    filter: blur(38px);
    z-index: 0;
  }

  .hero-fish-artwork {
    position: relative;
    z-index: 1;
    width: 210px;
    height: auto;
    filter: drop-shadow(0 16px 36px rgba(3, 51, 255, 0.45));
    transition: transform 0.4s ease;
  }

  .hero-fish-artwork:hover {
    transform: scale(1.06) translateY(-4px);
  }

  .visual-meta {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    padding: 10px 24px;
    background: rgba(10, 10, 10, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-full);
    flex-wrap: wrap;
    justify-content: center;
  }

  .meta-row {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .meta-label {
    font-family: var(--font-family-mono);
    font-size: 9px;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }

  .meta-val {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-secondary);
  }

  .green-text { color: #34d399; }
  .blue-text { color: #60a5fa; }

  .meta-divider {
    width: 1px;
    height: 20px;
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 640px) {
    .visual-meta {
      flex-direction: column;
      gap: 12px;
      border-radius: var(--radius-md);
      align-items: flex-start;
    }
    .meta-divider {
      display: none;
    }
    .cta-group {
      flex-direction: column;
      width: 100%;
    }
    .hero-pill-btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>
