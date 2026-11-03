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
    margin-top: 16px;
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
  }
</style>
