<script lang="ts">
  import { navigationStore } from '../../stores/navigation';
  import { toastStore } from '../../stores/toast';

  let isSpeaking = false;

  function playDoryVoice() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance("DORY: Do the task, observe results, recognize mistakes, and yield improvements! Just keep coding until green!");
      utterance.pitch = 1.25;
      utterance.rate = 1.05;
      utterance.onstart = () => { isSpeaking = true; };
      utterance.onend = () => { isSpeaking = false; };
      utterance.onerror = () => { isSpeaking = false; };
      window.speechSynthesis.speak(utterance);
      toastStore.show('🔊 Dory Audio', '"Do the task, observe results, recognize mistakes, and yield improvements."', 'info');
    } else {
      toastStore.show('Audio notice', 'Web Speech API is not supported in this browser.', 'info');
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

    <!-- 4-Phase DORY Acronym Interactive Strip -->
    <div class="dory-acronym-bar">
      <div class="acronym-pill">
        <span class="pill-letter letter-d">D</span>
        <div class="pill-text">
          <span class="pill-verb">Do</span>
          <span class="pill-detail">Contracts & TDD</span>
        </div>
      </div>
      <div class="acronym-pill">
        <span class="pill-letter letter-o">O</span>
        <div class="pill-text">
          <span class="pill-verb">Observe</span>
          <span class="pill-detail">Tri-Gate Exit 0</span>
        </div>
      </div>
      <div class="acronym-pill">
        <span class="pill-letter letter-r">R</span>
        <div class="pill-text">
          <span class="pill-verb">Recognize</span>
          <span class="pill-detail">Anti-Thrash Triage</span>
        </div>
      </div>
      <div class="acronym-pill">
        <span class="pill-letter letter-y">Y</span>
        <div class="pill-text">
          <span class="pill-verb">Yield</span>
          <span class="pill-detail">Verified Commits</span>
        </div>
      </div>
    </div>

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
    margin: 20px 0 28px 0;
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
    margin: 0 0 28px 0;
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

  /* 4-Phase DORY Acronym Bar */
  .dory-acronym-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 40px;
    flex-wrap: wrap;
  }

  .acronym-pill {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-full);
    backdrop-filter: blur(8px);
    transition: all var(--transition-fast);
  }

  .acronym-pill:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--border-hover);
    transform: translateY(-1px);
  }

  .pill-letter {
    font-family: var(--font-family-mono);
    font-size: 13px;
    font-weight: 800;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .letter-d { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
  .letter-o { background: rgba(234, 179, 8, 0.2); color: #facc15; }
  .letter-r { background: rgba(244, 63, 94, 0.2); color: #fb7185; }
  .letter-y { background: rgba(16, 185, 129, 0.2); color: #34d399; }

  .pill-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 1.2;
  }

  .pill-verb {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .pill-detail {
    font-size: 10px;
    font-family: var(--font-family-mono);
    color: var(--text-muted);
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
    .dory-acronym-bar {
      flex-direction: column;
      width: 100%;
    }
    .acronym-pill {
      width: 100%;
    }
  }
</style>
