<script lang="ts">
  import Badge from '../common/Badge.svelte';
</script>

<section id="chat-trap" class="comparison-section">
  <div class="comp-container">
    <div class="header-center">
      <Badge variant="amber" size="md">The Fundamental Problem</Badge>
      <h2 class="title">Chat Trap vs. Ralph Cold-Start</h2>
      <p class="subtitle">
        Standard conversational agents suffer from linear horizontal degradation. DORY replaces conversational fluff with tabula rasa state discipline.
      </p>
    </div>

    <div class="comparison-grid">
      <!-- Chat Trap Column -->
      <div class="comp-card chat-trap-card">
        <div class="comp-header">
          <span class="status-cross">✕</span>
          <div class="comp-title-group">
            <h3 class="comp-name">The Conversational Chat Trap</h3>
            <span class="comp-tag">Standard Agent Behavior</span>
          </div>
        </div>

        <ul class="flaw-list">
          <li class="flaw-item">
            <span class="step-num">01</span>
            <div class="flaw-desc">
              <strong>Vague prompt injected into chat window</strong>
              <span>~2.5k tokens initial cost.</span>
            </div>
          </li>
          <li class="flaw-item">
            <span class="step-num">02</span>
            <div class="flaw-desc">
              <strong>Unverified mutation breaks tests</strong>
              <span>5k token raw error trace dumped directly into conversation history (~12k tokens).</span>
            </div>
          </li>
          <li class="flaw-item">
            <span class="step-num">03</span>
            <div class="flaw-desc">
              <strong>Whack-a-mole sycophantic patching</strong>
              <span>Agent apologizes repeatedly, hallucinates fixes, silently corrupts schema (~38k tokens).</span>
            </div>
          </li>
          <li class="flaw-item">
            <span class="step-num">04</span>
            <div class="flaw-desc">
              <strong>Context Collapse & Token Bleed</strong>
              <span>Context hits 80k+, attention drifts, agent falsely claims victory on a broken build.</span>
            </div>
          </li>
        </ul>

        <div class="comp-footer fail-footer">
          <span class="stat-highlight red-text">Result: 80k+ Token Bleed & Silent Failure</span>
        </div>
      </div>

      <!-- DORY Pressure Cooker Column -->
      <div class="comp-card dory-card">
        <div class="comp-header">
          <span class="status-check">✓</span>
          <div class="comp-title-group">
            <h3 class="comp-name">DORY Pressure Cooker</h3>
            <span class="comp-tag">Cold-Start Tabula Rasa</span>
          </div>
        </div>

        <ul class="flaw-list dory-list">
          <li class="flaw-item">
            <span class="step-num dory-num">01</span>
            <div class="flaw-desc">
              <strong>Explicit Contract & File Whitelist</strong>
              <span>Zero conversational ambiguity before code generation. Pre-writes failing assertion (True TDD).</span>
            </div>
          </li>
          <li class="flaw-item">
            <span class="step-num dory-num">02</span>
            <div class="flaw-desc">
              <strong>Disk as Ground Truth</strong>
              <span>Chat context is ephemeral; code diffs, logs, and compiler telemetry on disk are durable.</span>
            </div>
          </li>
          <li class="flaw-item">
            <span class="step-num dory-num">03</span>
            <div class="flaw-desc">
              <strong>Binary Tri-Gate Verification</strong>
              <span>Deterministic Exit Code 0 required from Style, Types, and Tests. No sycophantic self-assessment.</span>
            </div>
          </li>
          <li class="flaw-item">
            <span class="step-num dory-num">04</span>
            <div class="flaw-desc">
              <strong>0 Token Bleed State Reset</strong>
              <span>Each cycle evaluates cleanly. State carries via git diffs, not conversational history.</span>
            </div>
          </li>
        </ul>

        <div class="comp-footer success-footer">
          <span class="stat-highlight green-text">Result: 0 Token Bleed & 100% Green Verification</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .comparison-section {
    padding: 100px 24px;
    background: #0a0a0a;
  }

  .comp-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .header-center {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .title {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 700;
    letter-spacing: -1.5px;
    color: var(--text-primary);
  }

  .subtitle {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  .comparison-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .comp-card {
    border-radius: var(--radius-lg);
    padding: 36px;
    display: flex;
    flex-direction: column;
    background: #121212;
    border: 1px solid var(--border-subtle);
  }

  .chat-trap-card {
    border-color: rgba(239, 68, 68, 0.25);
    background: linear-gradient(180deg, rgba(239, 68, 68, 0.04) 0%, rgba(18, 18, 18, 0.95) 100%);
  }

  .dory-card {
    border-color: rgba(16, 185, 129, 0.35);
    background: linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, rgba(18, 18, 18, 0.95) 100%);
    box-shadow: 0 10px 40px rgba(16, 185, 129, 0.06);
  }

  .comp-header {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 28px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .status-cross {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(239, 68, 68, 0.15);
    color: #ef4444;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
  }

  .status-check {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(16, 185, 129, 0.15);
    color: #10b981;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
  }

  .comp-name {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
  }

  .comp-tag {
    font-size: 12px;
    font-family: var(--font-family-mono);
    color: var(--text-muted);
  }

  .flaw-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    margin-bottom: 28px;
  }

  .flaw-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }

  .step-num {
    font-family: var(--font-family-mono);
    font-size: 12px;
    font-weight: 700;
    color: #ef4444;
    padding: 2px 6px;
    background: rgba(239, 68, 68, 0.1);
    border-radius: var(--radius-sm);
  }

  .dory-num {
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
  }

  .flaw-desc {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .flaw-desc strong {
    font-size: 14px;
    color: var(--text-primary);
  }

  .flaw-desc span {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.4;
  }

  .comp-footer {
    padding-top: 18px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    text-align: center;
  }

  .stat-highlight {
    font-family: var(--font-family-mono);
    font-size: 13px;
    font-weight: 600;
  }

  .red-text {
    color: #f87171;
  }

  .green-text {
    color: #34d399;
  }

  @media (max-width: 860px) {
    .comparison-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
