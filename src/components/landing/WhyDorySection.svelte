<script lang="ts">
  // WhyDorySection - Documentation-style explanation of DORY in layman's terms
</script>

<section class="why-dory-section" id="why-dory">
  <!-- Subtle ambient glow matching Dory blue (#0333ff) -->
  <div class="ambient-glow" aria-hidden="true"></div>

  <div class="why-container">
    <!-- Top-Left Documentation Header -->
    <header class="doc-header">
      <div class="doc-breadcrumb">
        <span class="doc-tag">DOCUMENTATION</span>
        <span class="doc-sep">/</span>
        <span class="doc-topic">CORE CONCEPT</span>
      </div>
      <h2 class="why-title">Why dory?</h2>
      <p class="why-lede">
        A plain-English guide to how Dory prevents AI coding assistants from hallucinating, apologizing, and breaking your build.
      </p>
    </header>

    <!-- Documentation Body Grid -->
    <div class="doc-grid">
      <!-- Card 1: The Problem -->
      <article class="doc-card">
        <div class="card-header">
          <span class="card-index">01</span>
          <span class="card-badge warn">The Problem</span>
        </div>
        <h3 class="card-title">The "Chat Trap"</h3>
        <p class="card-text">
          When normal AI coding agents hit an error, they dump hundreds of lines of error logs into the conversation. They apologize repeatedly, guess random fixes, and slowly lose track of what they were doing.
        </p>
        <p class="card-subtext">
          Eventually, the chat memory fills up and the AI falsely claims the task is complete—leaving you with broken tests and corrupted code.
        </p>
      </article>

      <!-- Card 2: The Solution -->
      <article class="doc-card">
        <div class="card-header">
          <span class="card-index">02</span>
          <span class="card-badge blue">The Fix</span>
        </div>
        <h3 class="card-title">Trust the Computer, Not the AI</h3>
        <p class="card-text">
          Dory never assumes code is done because an AI thinks it "looks right." Code is only finished when three real tools on your computer agree with an <strong>Exit Code 0</strong>:
        </p>
        <ul class="doc-list">
          <li><strong>Style:</strong> No syntax errors or messy formatting.</li>
          <li><strong>Types:</strong> 100% strict type safety and valid signatures.</li>
          <li><strong>Tests:</strong> Real automated test suite passes with 100% green.</li>
        </ul>
      </article>

      <!-- Card 3: The Secret -->
      <article class="doc-card">
        <div class="card-header">
          <span class="card-index">03</span>
          <span class="card-badge green">The Engine</span>
        </div>
        <h3 class="card-title">Fresh Brain Every Step</h3>
        <p class="card-text">
          Chat history is fragile and temporary. Your hard drive and git history are permanent.
        </p>
        <p class="card-subtext">
          Instead of keeping a giant, confusing chat log, Dory evaluates each change cleanly. It reads the real compiler errors on disk, fixes the exact file, and moves forward with <strong>zero token bleed</strong>.
        </p>
      </article>
    </div>

    <!-- The 4-Step Operational Loop in Layman's Terms -->
    <div class="loop-doc-box">
      <div class="loop-box-header">
        <span class="loop-kicker">HOW IT WORKS</span>
        <h3 class="loop-title">The D-O-R-Y Loop in 4 Simple Steps</h3>
      </div>

      <div class="loop-steps-grid">
        <div class="step-card">
          <div class="step-letter">D</div>
          <div class="step-body">
            <h4 class="step-heading">Do the Contract</h4>
            <p class="step-desc">
              Write a failing test first. Dory defines what "done" means in measurable terms before touching production code.
            </p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-letter">O</div>
          <div class="step-body">
            <h4 class="step-heading">Observe Real Results</h4>
            <p class="step-desc">
              Run the actual compiler, linter, and test runner. Objective output only—no AI guesses or assumptions.
            </p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-letter">R</div>
          <div class="step-body">
            <h4 class="step-heading">Recognize the Real Error</h4>
            <p class="step-desc">
              If something breaks, Dory doesn't apologize in chat. It diagnoses the exact compiler diagnostic and isolates the fix.
            </p>
          </div>
        </div>

        <div class="step-card">
          <div class="step-letter">Y</div>
          <div class="step-body">
            <h4 class="step-heading">Yield Working Code</h4>
            <p class="step-desc">
              When all three gates pass with Exit Code 0, Dory commits verified code to git. Clean, tested, and reliable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .why-dory-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 90px 32px 120px;
    background-color: var(--bg-canvas);
    border-top: 1px solid var(--border-subtle);
    overflow: hidden;
  }

  .ambient-glow {
    position: absolute;
    top: 25%;
    left: 15%;
    transform: translate(-50%, -50%);
    width: 650px;
    height: 380px;
    background: radial-gradient(circle, rgba(3, 51, 255, 0.16) 0%, rgba(3, 51, 255, 0.02) 60%, transparent 80%);
    filter: blur(85px);
    pointer-events: none;
    z-index: 0;
  }

  .why-container {
    position: relative;
    z-index: 1;
    max-width: 1240px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  /* Top-Left Documentation Header */
  .doc-header {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .doc-breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family-mono);
    font-size: 11px;
    letter-spacing: 1.5px;
  }

  .doc-tag {
    color: var(--accent-blue-bright);
    font-weight: 600;
  }

  .doc-sep {
    color: var(--text-muted);
  }

  .doc-topic {
    color: var(--text-muted);
  }

  /* Smaller Top-Left Why dory? heading */
  .why-title {
    font-family: var(--font-family-sans);
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -1.2px;
    color: var(--text-primary);
    margin: 0;
    text-align: left;
  }

  .why-lede {
    max-width: 760px;
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
  }

  /* 3-Column Documentation Cards */
  .doc-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .doc-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all var(--transition-normal);
  }

  .doc-card:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: var(--border-hover);
    transform: translateY(-2px);
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-index {
    font-family: var(--font-family-mono);
    font-size: 13px;
    color: var(--text-muted);
    font-weight: 600;
  }

  .card-badge {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    padding: 3px 8px;
    border-radius: var(--radius-full);
  }

  .card-badge.warn {
    background: rgba(245, 158, 11, 0.12);
    color: #fbbf24;
    border: 1px solid rgba(245, 158, 11, 0.25);
  }

  .card-badge.blue {
    background: rgba(3, 51, 255, 0.16);
    color: #8bb2ff;
    border: 1px solid rgba(3, 51, 255, 0.35);
  }

  .card-badge.green {
    background: rgba(16, 185, 129, 0.12);
    color: #34d399;
    border: 1px solid rgba(16, 185, 129, 0.25);
  }

  .card-title {
    font-size: 19px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.4px;
    margin: 0;
  }

  .card-text {
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
  }

  .card-text strong {
    color: var(--text-primary);
  }

  .card-subtext {
    font-size: 13px;
    line-height: 1.55;
    color: var(--text-muted);
    margin: 0;
  }

  .doc-list {
    margin: 0;
    padding-left: 18px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 13px;
    color: var(--text-secondary);
  }

  .doc-list li strong {
    color: var(--text-primary);
  }

  /* 4-Step Loop Documentation Container */
  .loop-doc-box {
    background: rgba(255, 255, 255, 0.015);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-lg);
    padding: 36px 32px;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .loop-box-header {
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: left;
  }

  .loop-kicker {
    font-family: var(--font-family-mono);
    font-size: 11px;
    color: var(--accent-cyan);
    letter-spacing: 1.5px;
    font-weight: 600;
  }

  .loop-title {
    font-size: 22px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.5px;
    margin: 0;
  }

  .loop-steps-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .step-card {
    background: rgba(0, 0, 0, 0.35);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: 20px 18px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
  }

  .step-letter {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: rgba(3, 51, 255, 0.18);
    border: 1px solid rgba(3, 51, 255, 0.4);
    color: #8bb2ff;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-mono);
  }

  .step-body {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .step-heading {
    font-size: 15px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.2px;
    margin: 0;
  }

  .step-desc {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text-secondary);
    margin: 0;
  }

  @media (max-width: 1024px) {
    .doc-grid {
      grid-template-columns: 1fr;
    }

    .loop-steps-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .why-dory-section {
      padding: 60px 16px 80px;
    }

    .loop-steps-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
