<script lang="ts">
  import { onMount } from 'svelte';
  import rough from 'roughjs';

  let svgElement: SVGSVGElement;
  let shapesGroup: SVGGElement;

  function renderRoughDiagram() {
    if (!svgElement || !shapesGroup) return;

    // Clear previous drawings if any
    shapesGroup.innerHTML = '';
    const rc = rough.svg(svgElement);

    // Common rough options
    const whiteStroke = '#fafafa';
    const mutedStroke = 'rgba(255, 255, 255, 0.25)';
    const blueStroke = '#3875ff';
    const greenStroke = '#10b981';
    const redStroke = '#ef4444';

    // ─────────────────────────────────────────────────────────────────
    // PATH 1 (TOP): The Traditional "Chat Trap" (Broken, Drifting)
    // ─────────────────────────────────────────────────────────────────
    // Box 1: Vague Prompt
    shapesGroup.appendChild(
      rc.rectangle(40, 50, 200, 70, {
        stroke: mutedStroke,
        strokeWidth: 1.4,
        roughness: 1.6,
        bowing: 2
      })
    );

    // Arrow 1 -> 2
    shapesGroup.appendChild(
      rc.line(240, 85, 330, 85, {
        stroke: mutedStroke,
        strokeWidth: 1.4,
        roughness: 1.8
      })
    );
    shapesGroup.appendChild(
      rc.line(320, 78, 332, 85, { stroke: mutedStroke, strokeWidth: 1.5, roughness: 1.5 })
    );
    shapesGroup.appendChild(
      rc.line(320, 92, 332, 85, { stroke: mutedStroke, strokeWidth: 1.5, roughness: 1.5 })
    );

    // Box 2: 5k Error Dump in Chat
    shapesGroup.appendChild(
      rc.rectangle(340, 50, 240, 70, {
        stroke: 'rgba(239, 68, 68, 0.45)',
        strokeWidth: 1.4,
        roughness: 2.2,
        bowing: 2.5
      })
    );

    // Arrow 2 -> 3
    shapesGroup.appendChild(
      rc.line(580, 85, 670, 85, {
        stroke: mutedStroke,
        strokeWidth: 1.4,
        roughness: 1.8
      })
    );
    shapesGroup.appendChild(
      rc.line(660, 78, 672, 85, { stroke: mutedStroke, strokeWidth: 1.5, roughness: 1.5 })
    );
    shapesGroup.appendChild(
      rc.line(660, 92, 672, 85, { stroke: mutedStroke, strokeWidth: 1.5, roughness: 1.5 })
    );

    // Box 3: Apologetic Whack-A-Mole
    shapesGroup.appendChild(
      rc.rectangle(680, 50, 270, 70, {
        stroke: redStroke,
        strokeWidth: 1.6,
        roughness: 2.4,
        bowing: 3,
        fill: 'rgba(239, 68, 68, 0.08)',
        fillStyle: 'cross-hatch',
        hachureGap: 8
      })
    );

    // Red strike-through line across traditional failure
    shapesGroup.appendChild(
      rc.line(30, 85, 960, 85, {
        stroke: 'rgba(239, 68, 68, 0.55)',
        strokeWidth: 2.2,
        roughness: 3
      })
    );

    // ─────────────────────────────────────────────────────────────────
    // PATH 2 (BOTTOM): The DORY Closed-Loop Engine (Deterministic Exit 0)
    // ─────────────────────────────────────────────────────────────────
    // Step 1: D - Task Contract (Blue)
    shapesGroup.appendChild(
      rc.rectangle(40, 230, 210, 95, {
        stroke: blueStroke,
        strokeWidth: 1.8,
        roughness: 1.3,
        bowing: 1.5,
        fill: 'rgba(3, 51, 255, 0.08)',
        fillStyle: 'hachure',
        hachureGap: 10
      })
    );

    // Arrow Step 1 -> Step 2
    shapesGroup.appendChild(
      rc.line(250, 277, 340, 277, {
        stroke: whiteStroke,
        strokeWidth: 1.8,
        roughness: 1.2
      })
    );
    shapesGroup.appendChild(
      rc.line(330, 270, 342, 277, { stroke: whiteStroke, strokeWidth: 1.8, roughness: 1.2 })
    );
    shapesGroup.appendChild(
      rc.line(330, 284, 342, 277, { stroke: whiteStroke, strokeWidth: 1.8, roughness: 1.2 })
    );

    // Step 2: O - Bounded Mutation (Zero Token Bleed)
    shapesGroup.appendChild(
      rc.rectangle(350, 230, 220, 95, {
        stroke: whiteStroke,
        strokeWidth: 1.8,
        roughness: 1.4,
        bowing: 1.5
      })
    );

    // Arrow Step 2 -> Step 3
    shapesGroup.appendChild(
      rc.line(570, 277, 650, 277, {
        stroke: whiteStroke,
        strokeWidth: 1.8,
        roughness: 1.2
      })
    );
    shapesGroup.appendChild(
      rc.line(640, 270, 652, 277, { stroke: whiteStroke, strokeWidth: 1.8, roughness: 1.2 })
    );
    shapesGroup.appendChild(
      rc.line(640, 284, 652, 277, { stroke: whiteStroke, strokeWidth: 1.8, roughness: 1.2 })
    );

    // Step 3: Tri-Gate Gateway (Style + Types + Tests)
    shapesGroup.appendChild(
      rc.rectangle(660, 210, 190, 135, {
        stroke: '#f59e0b',
        strokeWidth: 1.8,
        roughness: 1.5,
        bowing: 1.8,
        fill: 'rgba(245, 158, 11, 0.05)',
        fillStyle: 'hachure',
        hachureGap: 12
      })
    );

    // Decision Branch A (Exit Code 0 -> Green Success)
    shapesGroup.appendChild(
      rc.line(850, 277, 915, 277, {
        stroke: greenStroke,
        strokeWidth: 2.2,
        roughness: 1.4
      })
    );
    shapesGroup.appendChild(
      rc.line(905, 270, 918, 277, { stroke: greenStroke, strokeWidth: 2.2, roughness: 1.2 })
    );
    shapesGroup.appendChild(
      rc.line(905, 284, 918, 277, { stroke: greenStroke, strokeWidth: 2.2, roughness: 1.2 })
    );

    // Step 4: Y - Verified Commit (Green Box)
    shapesGroup.appendChild(
      rc.rectangle(925, 230, 190, 95, {
        stroke: greenStroke,
        strokeWidth: 2,
        roughness: 1.4,
        bowing: 1.6,
        fill: 'rgba(16, 185, 129, 0.1)',
        fillStyle: 'hachure',
        hachureGap: 8
      })
    );

    // Decision Branch B (Exit != 0 -> Loop back cleanly via R - Recognize)
    // Path: from bottom of Tri-Gate (x: 755, y: 345) down to y: 400, back to x: 460, up to bottom of Step 2 (x: 460, y: 325)
    shapesGroup.appendChild(
      rc.linearPath([
        [755, 345],
        [755, 410],
        [460, 410],
        [460, 335]
      ], {
        stroke: redStroke,
        strokeWidth: 1.8,
        roughness: 1.8
      })
    );
    // Arrowhead pointing back up to Step 2
    shapesGroup.appendChild(
      rc.line(453, 345, 460, 333, { stroke: redStroke, strokeWidth: 1.8, roughness: 1.4 })
    );
    shapesGroup.appendChild(
      rc.line(467, 345, 460, 333, { stroke: redStroke, strokeWidth: 1.8, roughness: 1.4 })
    );

    // Badge pill around loop label
    shapesGroup.appendChild(
      rc.rectangle(520, 395, 175, 30, {
        stroke: 'rgba(239, 68, 68, 0.4)',
        strokeWidth: 1.2,
        roughness: 1.5
      })
    );
  }

  onMount(() => {
    renderRoughDiagram();

    // Re-render on window resize if needed
    window.addEventListener('resize', renderRoughDiagram);
    return () => {
      window.removeEventListener('resize', renderRoughDiagram);
    };
  });
</script>

<div class="rough-diagram-wrapper">
  <div class="diagram-kicker-bar">
    <span class="diagram-tag">SKETCHED ARCHITECTURE · ROUGH.JS</span>
    <span class="diagram-caption">Chat Trap vs. Closed-Loop Tri-Gate</span>
  </div>

  <svg 
    bind:this={svgElement} 
    viewBox="0 0 1140 450" 
    class="rough-svg" 
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Hand-drawn diagram of DORY Tri-Gate loop versus Chat Trap"
  >
    <!-- Group where roughjs appends hand-drawn SVG paths -->
    <g bind:this={shapesGroup} class="rough-shapes"></g>

    <!-- Crisp Typography Overlay for readability -->
    <!-- Top Lane Labels -->
    <text x="40" y="38" class="lane-title bad">✕ TRADITIONAL CONVERSATIONAL AGENT (CHAT TRAP)</text>
    
    <text x="140" y="80" text-anchor="middle" class="node-title">Vague Chat Prompt</text>
    <text x="140" y="98" text-anchor="middle" class="node-sub">Ambiguous task contract</text>

    <text x="460" y="80" text-anchor="middle" class="node-title">Raw Error Trace Dump</text>
    <text x="460" y="98" text-anchor="middle" class="node-sub">5,000+ token conversational dump</text>

    <text x="815" y="78" text-anchor="middle" class="node-title warn">Context Collapse</text>
    <text x="815" y="98" text-anchor="middle" class="node-sub">Agent apologizes & guesses fixes (80k tokens)</text>

    <!-- Bottom Lane Labels -->
    <text x="40" y="200" class="lane-title good">✓ DORY DETERMINISTIC CLOSED-LOOP (EXIT CODE 0)</text>

    <!-- Step 1 -->
    <text x="145" y="260" text-anchor="middle" class="node-title accent">D · Task Contract</text>
    <text x="145" y="280" text-anchor="middle" class="node-sub">Pre-flight failing assertion</text>
    <text x="145" y="298" text-anchor="middle" class="node-sub mono">task-spec.json</text>

    <!-- Step 2 -->
    <text x="460" y="260" text-anchor="middle" class="node-title">O · Bounded Mutation</text>
    <text x="460" y="280" text-anchor="middle" class="node-sub">Zero token bleed</text>
    <text x="460" y="298" text-anchor="middle" class="node-sub mono">Isolated workspace</text>

    <!-- Step 3: Tri-Gate -->
    <text x="755" y="240" text-anchor="middle" class="node-title amber">The Tri-Gate</text>
    <text x="755" y="265" text-anchor="middle" class="gate-item">1. Style Linting</text>
    <text x="755" y="287" text-anchor="middle" class="gate-item">2. Strict Types</text>
    <text x="755" y="309" text-anchor="middle" class="gate-item">3. Runtime Tests</text>
    <text x="755" y="332" text-anchor="middle" class="gate-sub mono">Exit Code 0 Required</text>

    <!-- Success Output -->
    <text x="1020" y="265" text-anchor="middle" class="node-title green">Y · Verified Commit</text>
    <text x="1020" y="287" text-anchor="middle" class="node-sub">Exit Code 0 unanimous</text>
    <text x="1020" y="305" text-anchor="middle" class="node-sub mono">git commit --verified</text>

    <!-- Decision Arrow Labels -->
    <text x="882" y="270" text-anchor="middle" class="branch-label green">== 0</text>
    <text x="607" y="415" text-anchor="middle" class="branch-label red">R · Exit != 0 (Self-Heal from Disk)</text>
  </svg>
</div>

<style>
  /* STRICTLY NO BORDER, NO BACKGROUND PER USER INSTRUCTION */
  .rough-diagram-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: transparent;
    border: none;
    padding: 0;
    margin: 20px 0 10px;
    user-select: none;
  }

  .diagram-kicker-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    font-family: var(--font-family-mono);
    font-size: 11px;
    letter-spacing: 1.2px;
  }

  .diagram-tag {
    color: var(--text-muted);
    font-weight: 600;
  }

  .diagram-caption {
    color: var(--text-muted);
  }

  .rough-svg {
    width: 100%;
    height: auto;
    overflow: visible;
    background: transparent;
  }

  /* SVG Typography */
  .lane-title {
    font-family: var(--font-family-mono);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  .lane-title.bad {
    fill: #ef4444;
  }

  .lane-title.good {
    fill: #34d399;
  }

  .node-title {
    font-family: var(--font-family-sans);
    font-size: 15px;
    font-weight: 700;
    fill: var(--text-primary);
    letter-spacing: -0.2px;
  }

  .node-title.accent {
    fill: #8bb2ff;
  }

  .node-title.amber {
    fill: #fbbf24;
  }

  .node-title.green {
    fill: #34d399;
  }

  .node-title.warn {
    fill: #f87171;
  }

  .node-sub {
    font-family: var(--font-family-sans);
    font-size: 12px;
    fill: var(--text-secondary);
  }

  .node-sub.mono {
    font-family: var(--font-family-mono);
    font-size: 11px;
    fill: var(--text-muted);
  }

  .gate-item {
    font-family: var(--font-family-mono);
    font-size: 11px;
    font-weight: 600;
    fill: #fafafa;
  }

  .gate-sub {
    font-size: 10px;
    fill: #f59e0b;
    font-weight: 600;
  }

  .branch-label {
    font-family: var(--font-family-mono);
    font-size: 12px;
    font-weight: 700;
  }

  .branch-label.green {
    fill: #10b981;
  }

  .branch-label.red {
    fill: #f87171;
  }

  @media (max-width: 768px) {
    .rough-svg {
      min-width: 680px;
    }

    .rough-diagram-wrapper {
      overflow-x: auto;
      padding-bottom: 12px;
    }
  }
</style>
