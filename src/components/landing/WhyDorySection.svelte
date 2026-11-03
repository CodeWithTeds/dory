<script lang="ts">
  // WhyDorySection - Second page screen dedicated to "Why dory?"
</script>

<section class="why-dory-section" id="why-dory">
  <!-- Subtle ambient glow matching Dory blue (#0333ff) -->
  <div class="ambient-glow" aria-hidden="true"></div>

  <div class="why-content">
    <h2 class="why-title">Why dory?</h2>
  </div>
</section>

<style>
  .why-dory-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 80px 32px;
    background-color: var(--bg-canvas);
    border-top: 1px solid var(--border-subtle);
    overflow: hidden;
  }

  .ambient-glow {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    width: 650px;
    height: 380px;
    background: radial-gradient(circle, rgba(3, 51, 255, 0.18) 0%, rgba(3, 51, 255, 0.03) 55%, transparent 80%);
    filter: blur(85px);
    pointer-events: none;
    z-index: 0;
  }

  .why-content {
    position: relative;
    z-index: 1;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  /*
   * EXACT METRICS FROM design/ui.md & HeroSection ("Do the task."):
   * font-family: Inter, "Inter Fallback", -apple-system, "system-ui", "Segoe UI", Roboto, Arial, sans-serif;
   * font-size: clamp(48px, 8.2vw, 111px);
   * font-weight: 700;
   * line-height: clamp(52px, 8vw, 109px);
   * letter-spacing: clamp(-2.8px, -0.055em, -6.12px);
   * color: #fafafa;
   */
  .why-title {
    font-family: var(--font-family-sans);
    font-size: clamp(48px, 8.2vw, 111px);
    font-weight: 700;
    line-height: clamp(52px, 8vw, 109px);
    letter-spacing: clamp(-2.8px, -0.055em, -6.12px);
    color: var(--text-primary);
    margin: 0;
    text-align: left;
    word-break: keep-all;
  }
</style>
