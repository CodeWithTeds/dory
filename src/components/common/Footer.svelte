<script lang="ts">
  import { navigationStore } from '../../stores/navigation';
</script>

<footer class="footer">
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="brand-row">
          <img src="/dory-fish.png" alt="Dory" class="footer-fish" />
          <span class="footer-title">dory</span>
        </div>
        <p class="footer-quote">
          "Just keep coding, just keep coding! Relentless, evidence-driven autonomous engineering."
        </p>
      </div>

      <div class="footer-links-grid">
        <div class="link-col">
          <span class="col-head">Skill Core</span>
          <a href="#citadel" on:click|preventDefault={() => { navigationStore.navigateTo('landing'); setTimeout(() => document.getElementById('citadel')?.scrollIntoView({ behavior: 'smooth' }), 50); }}>Citadel 4-Layer</a>
          <a href="#tri-gate" on:click|preventDefault={() => { navigationStore.navigateTo('landing'); setTimeout(() => document.getElementById('trigate')?.scrollIntoView({ behavior: 'smooth' }), 50); }}>Tri-Gate Gateway</a>
          <a href="#chat-trap" on:click|preventDefault={() => { navigationStore.navigateTo('landing'); setTimeout(() => document.getElementById('chattrap')?.scrollIntoView({ behavior: 'smooth' }), 50); }}>Chat Trap vs Cold-Start</a>
        </div>

        <div class="link-col">
          <span class="col-head">Installation</span>
          <button class="link-btn" on:click={() => navigationStore.navigateTo('install')}>Antigravity (AGY)</button>
          <button class="link-btn" on:click={() => navigationStore.navigateTo('install')}>Claude Code</button>
          <button class="link-btn" on:click={() => navigationStore.navigateTo('install')}>Cursor IDE</button>
          <button class="link-btn" on:click={() => navigationStore.navigateTo('install')}>Skills.sh Runner</button>
        </div>

        <div class="link-col">
          <span class="col-head">Ground Truth</span>
          <span class="ground-truth">Exit Code: 0</span>
          <span class="ground-truth">Token Bleed: 0</span>
          <span class="ground-truth">Tabula Rasa State</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="copyright">
        DORY Agent Skill Specification · Ralph Wiggum Cold-Start Edition. Fully compatible with skills.sh & modern AI agent harnesses.
      </p>
      <div class="bottom-badges">
        <span class="status-badge"><span class="dot"></span> All Gates Operational</span>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--border-subtle);
    background: #0d0d0d;
    padding: 60px 0 32px;
    margin-top: 80px;
  }

  .footer-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    padding-bottom: 48px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .footer-brand {
    max-width: 380px;
  }

  .brand-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .footer-fish {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }

  .footer-title {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
  }

  .footer-quote {
    font-size: 13px;
    line-height: 1.6;
    color: var(--text-secondary);
    font-style: italic;
  }

  .footer-links-grid {
    display: flex;
    gap: 60px;
  }

  .link-col {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .col-head {
    font-size: 11px;
    font-family: var(--font-family-mono);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin-bottom: 4px;
  }

  .link-col a, .link-btn {
    font-size: 13px;
    color: var(--text-secondary);
    text-align: left;
    transition: color var(--transition-fast);
  }

  .link-col a:hover, .link-btn:hover {
    color: var(--text-primary);
  }

  .ground-truth {
    font-family: var(--font-family-mono);
    font-size: 12px;
    color: #34d399;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 28px;
    gap: 20px;
    flex-wrap: wrap;
  }

  .copyright {
    font-size: 12px;
    color: var(--text-muted);
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-family: var(--font-family-mono);
    color: #34d399;
    padding: 4px 12px;
    background: rgba(16, 185, 129, 0.08);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: var(--radius-full);
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
  }

  @media (max-width: 768px) {
    .footer-top {
      flex-direction: column;
      gap: 32px;
    }
    .footer-links-grid {
      flex-direction: column;
      gap: 24px;
    }
  }
</style>
