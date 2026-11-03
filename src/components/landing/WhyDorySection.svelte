<script lang="ts">
  import { onMount } from 'svelte';
  import DoryRoughDiagram from './DoryRoughDiagram.svelte';

  let isVisible = false;
  let sectionElement: HTMLElement;

  onMount(() => {
    if (!sectionElement) {
      isVisible = true;
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionElement);
    return () => observer.disconnect();
  });
</script>

<section class="why-dory-section" id="why-dory" bind:this={sectionElement}>
  <div class="why-container" class:visible={isVisible}>
    <!-- Top-Left Documentation Header (smaller, clean, borderless) -->
    <header class="doc-header">
      <span class="doc-kicker">DOCUMENTATION · THE GROUND TRUTH</span>
      <h2 class="why-title">Why dory?</h2>
    </header>

    <!-- 3-Column Editorial (No borders, no card backgrounds) -->
    <div class="doc-columns">
      <div class="col-item">
        <span class="col-number">01</span>
        <h3 class="col-title">The "Chat Trap"</h3>
        <p class="col-text">
          Standard coding assistants live inside a chat prompt. When they break your code, they dump huge error logs into the conversation, apologize repeatedly, and guess random fixes.
        </p>
        <p class="col-subtext">
          As the chat gets longer, the AI loses focus and falsely claims the task is finished—leaving you with broken tests and corrupted files.
        </p>
      </div>

      <div class="col-item">
        <span class="col-number">02</span>
        <h3 class="col-title">Trust the Computer</h3>
        <p class="col-text">
          Dory never accepts code just because an AI says it "looks right." A task is only complete when your computer's native tools give unanimous approval:
        </p>
        <p class="col-subtext">
          No syntax or formatting errors. 100% strict type safety. Zero failing tests. If any tool returns an error code, Dory keeps working until it's green.
        </p>
      </div>

      <div class="col-item">
        <span class="col-number">03</span>
        <h3 class="col-title">Zero Token Bleed</h3>
        <p class="col-text">
          Chat history is temporary and easy to corrupt. Git diffs and compiler messages on your disk are permanent ground truth.
        </p>
        <p class="col-subtext">
          Instead of dragging a messy conversation forward, Dory starts every iteration with a fresh brain. It diagnoses the real error on disk and fixes it without memory drift.
        </p>
      </div>
    </div>

    <!-- Hand-Drawn Architecture Diagram with Rough.js (No borders, transparent) -->
    <div class="diagram-anim-wrapper">
      <DoryRoughDiagram />
    </div>

    <!-- The 4-Step Loop Breakdown (Clean typography, no borders, no boxes) -->
    <div class="loop-section">
      <div class="loop-header">
        <span class="loop-kicker">HOW IT WORKS</span>
        <h3 class="loop-title">The D-O-R-Y Loop</h3>
      </div>

      <div class="loop-grid">
        <div class="loop-step">
          <span class="step-letter">D</span>
          <h4 class="step-name">Do the contract</h4>
          <p class="step-desc">
            Write an explicit contract and a failing test first. Dory defines what success looks like before touching application code.
          </p>
        </div>

        <div class="loop-step">
          <span class="step-letter">O</span>
          <h4 class="step-name">Observe real results</h4>
          <p class="step-desc">
            Run the actual compiler, strict typechecker, and automated tests. Objective binary results only: Exit Code 0 or fail.
          </p>
        </div>

        <div class="loop-step">
          <span class="step-letter">R</span>
          <h4 class="step-name">Recognize mistakes</h4>
          <p class="step-desc">
            When a gate fails, Dory captures the exact compiler diagnostic from disk and isolates the fix without sycophantic chat.
          </p>
        </div>

        <div class="loop-step">
          <span class="step-letter">Y</span>
          <h4 class="step-name">Yield verified code</h4>
          <p class="step-desc">
            Commit clean, working code to git only after all gates pass with Exit Code 0. Zero wasted tokens, 100% verified.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Clean editorial section: NO BORDER, NO CARD BACKGROUNDS */
  .why-dory-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 100px 32px 140px;
    background-color: var(--bg-canvas);
    border: none;
    outline: none;
  }

  .why-container {
    max-width: 1240px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 72px;
  }

  /* Header - Top Left */
  .doc-header {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .visible .doc-header {
    opacity: 1;
    transform: translateY(0);
  }

  .doc-kicker {
    font-family: var(--font-family-mono);
    font-size: 11px;
    letter-spacing: 1.5px;
    color: var(--text-muted);
    font-weight: 600;
  }

  .why-title {
    font-family: var(--font-family-sans);
    font-size: clamp(28px, 3.8vw, 42px);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -1.2px;
    color: var(--text-primary);
    margin: 0;
    text-align: left;
  }

  /* 3-Column Editorial Grid: Pure text, no boxes, no cards, no borders, no backgrounds */
  .doc-columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
  }

  .col-item {
    display: flex;
    flex-direction: column;
    gap: 14px;
    text-align: left;
    background: transparent;
    border: none;
    padding: 0;
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .visible .col-item:nth-child(1) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.12s;
  }

  .visible .col-item:nth-child(2) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.26s;
  }

  .visible .col-item:nth-child(3) {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.40s;
  }

  .col-number {
    font-family: var(--font-family-mono);
    font-size: 13px;
    font-weight: 600;
    color: var(--text-muted);
    letter-spacing: 0.5px;
  }

  .col-title {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.4px;
    margin: 0;
  }

  .col-text {
    font-size: 15px;
    line-height: 1.65;
    color: var(--text-secondary);
    margin: 0;
  }

  .col-subtext {
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-muted);
    margin: 0;
  }

  .diagram-anim-wrapper {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.52s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.52s;
  }

  .visible .diagram-anim-wrapper {
    opacity: 1;
    transform: translateY(0);
  }

  /* 4-Step Loop Breakdown: Clean editorial typography, no borders, no backgrounds */
  .loop-section {
    display: flex;
    flex-direction: column;
    gap: 36px;
    text-align: left;
    background: transparent;
    border: none;
    padding: 0;
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.65s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.65s;
  }

  .visible .loop-section {
    opacity: 1;
    transform: translateY(0);
  }

  .loop-header {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .loop-kicker {
    font-family: var(--font-family-mono);
    font-size: 11px;
    color: var(--text-muted);
    letter-spacing: 1.5px;
    font-weight: 600;
  }

  .loop-title {
    font-size: 24px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.6px;
    margin: 0;
  }

  .loop-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 36px;
  }

  .loop-step {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: transparent;
    border: none;
    padding: 0;
    text-align: left;
  }

  .step-letter {
    font-family: var(--font-family-mono);
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2px;
  }

  .step-name {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.2px;
    margin: 0;
  }

  .step-desc {
    font-size: 14px;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
  }

  @media (max-width: 1024px) {
    .doc-columns {
      grid-template-columns: 1fr;
      gap: 36px;
    }

    .loop-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 28px;
    }
  }

  @media (max-width: 640px) {
    .why-dory-section {
      padding: 70px 20px 100px;
    }

    .why-container {
      gap: 48px;
    }

    .loop-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  @media (max-width: 480px) {
    .why-dory-section {
      padding: 50px 16px 70px;
    }

    .why-container {
      gap: 36px;
    }

    .why-title {
      font-size: clamp(24px, 8vw, 32px);
    }

    .col-title {
      font-size: 18px;
    }

    .col-text, .col-subtext {
      font-size: 13.5px;
    }

    .loop-title {
      font-size: 20px;
    }

    .step-name {
      font-size: 15px;
    }
  }
</style>
