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
      rc.rectangle(660, 205, 195, 145, {
        stroke: '#f59e0b',
        strokeWidth: 1.8,
        roughness: 1.5,
        bowing: 1.8,
        fill: 'rgba(245, 158, 11, 0.05)',
        fillStyle: 'hachure',
        hachureGap: 12
      })
    );

    // Inner highlight badge for EXIT 0 REQUIRED
    shapesGroup.appendChild(
      rc.rectangle(675, 312, 165, 26, {
        stroke: 'rgba(245, 158, 11, 0.6)',
        strokeWidth: 1.4,
        roughness: 1.3,
        fill: 'rgba(245, 158, 11, 0.15)',
        fillStyle: 'solid'
      })
    );

    // Decision Branch A (Exit 0 -> Green Success)
    shapesGroup.appendChild(
      rc.line(855, 277, 945, 277, {
        stroke: greenStroke,
        strokeWidth: 2.4,
        roughness: 1.4
      })
    );
    shapesGroup.appendChild(
      rc.line(935, 270, 948, 277, { stroke: greenStroke, strokeWidth: 2.2, roughness: 1.2 })
    );
    shapesGroup.appendChild(
      rc.line(935, 284, 948, 277, { stroke: greenStroke, strokeWidth: 2.2, roughness: 1.2 })
    );

    // Green badge pill for EXIT 0
    shapesGroup.appendChild(
      rc.rectangle(860, 244, 78, 24, {
        stroke: greenStroke,
        strokeWidth: 1.6,
        roughness: 1.4,
        fill: 'rgba(16, 185, 129, 0.2)',
        fillStyle: 'solid'
      })
    );

    // Step 4: Y - Verified Commit (Green Box)
    shapesGroup.appendChild(
      rc.rectangle(950, 225, 175, 105, {
        stroke: greenStroke,
        strokeWidth: 2.2,
        roughness: 1.4,
        bowing: 1.6,
        fill: 'rgba(16, 185, 129, 0.1)',
        fillStyle: 'hachure',
        hachureGap: 8
      })
    );

    // Decision Branch B (Exit != 0 -> Loop back cleanly via R - Recognize)
    // Path: from bottom of Tri-Gate (x: 757, y: 350) down to y: 415, back to x: 460, up to bottom of Step 2 (x: 460, y: 335)
    shapesGroup.appendChild(
      rc.linearPath([
        [757, 350],
        [757, 415],
        [460, 415],
        [460, 335]
      ], {
        stroke: redStroke,
        strokeWidth: 2,
        roughness: 1.8
      })
    );
    // Arrowhead pointing back up to Step 2
    shapesGroup.appendChild(
      rc.line(453, 345, 460, 333, { stroke: redStroke, strokeWidth: 2, roughness: 1.4 })
    );
    shapesGroup.appendChild(
      rc.line(467, 345, 460, 333, { stroke: redStroke, strokeWidth: 2, roughness: 1.4 })
    );

    // Prominent Red Badge Pill around Exit != 0 label
    shapesGroup.appendChild(
      rc.rectangle(480, 400, 260, 30, {
        stroke: redStroke,
        strokeWidth: 1.6,
        roughness: 1.5,
        fill: 'rgba(239, 68, 68, 0.2)',
        fillStyle: 'solid'
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
    <text x="757" y="232" text-anchor="middle" class="node-title amber">The Tri-Gate</text>
    <text x="757" y="255" text-anchor="middle" class="gate-item">1. Style Linting</text>
    <text x="757" y="275" text-anchor="middle" class="gate-item">2. Strict Types</text>
    <text x="757" y="295" text-anchor="middle" class="gate-item">3. Runtime Tests</text>
    <text x="757" y="329" text-anchor="middle" class="gate-exit-highlight">EXIT 0 REQUIRED</text>

    <!-- Success Output -->
    <text x="1037" y="258" text-anchor="middle" class="node-title green">Y · Verified Commit</text>
    <text x="1037" y="280" text-anchor="middle" class="node-sub bold">Exit 0 Unanimous</text>
    <text x="1037" y="302" text-anchor="middle" class="node-sub mono">git commit --verified</text>

    <!-- Decision Arrow Labels -->
    <text x="899" y="261" text-anchor="middle" class="branch-exit-pass">EXIT 0</text>
    <text x="610" y="420" text-anchor="middle" class="branch-exit-fail">R · EXIT != 0 : Triage Disk & Retry</text>
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

  .gate-exit-highlight {
    font-family: var(--font-family-mono);
    font-size: 11px;
    font-weight: 800;
    fill: #fbbf24;
    letter-spacing: 0.8px;
  }

  .branch-exit-pass {
    font-family: var(--font-family-mono);
    font-size: 12px;
    font-weight: 800;
    fill: #34d399;
    letter-spacing: 0.6px;
  }

  .branch-exit-fail {
    font-family: var(--font-family-mono);
    font-size: 12px;
    font-weight: 800;
    fill: #f87171;
    letter-spacing: 0.5px;
  }

  .node-sub.bold {
    font-weight: 700;
    fill: #fafafa;
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
