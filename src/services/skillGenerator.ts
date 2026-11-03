import type { SkillConfig } from '../types';
import { toastStore } from '../stores/toast';

export function generateSkillMarkdown(config: SkillConfig): string {
  return `---
name: dory
description: >
  Autonomous, iterative AI coding skill implementing the Ralph Wiggum Cold-Start Pressure Cooker loop.
  Activates the D-O-R-Y engineering loop: Do (contract & True TDD), Observe (Tri-Gate verification),
  Recognize (senior triage & anti-thrash heuristics), and Yield (verified commits).
  Enforces 0 token bleed, strict static typing, style linting, and AFK self-healing until 100% green.
  Use on ANY autonomous coding, feature implementation, debugging, or refactoring task where the user
  wants relentless, self-correcting persistence without babysitting. Trigger whenever the user says
  "dory", "/dory", "just keep coding", "keep going until green", "afk mode", "autonomous loop",
  or asks for self-healing, test-gated development.
argument-hint: "[max_iterations=${config.maxIterations}]"
license: MIT
compatibility:
  strict_types: ${config.strictTypes}
  lint_enforced: ${config.lintEnforced}
  air_gap_sandbox: ${config.airGapSandbox}
  auto_commit_on_pass: ${config.autoCommitOnPass}
---

# DORY: Autonomous Iterative Coding Engine
### Ralph Wiggum Cold-Start Pressure Cooker Edition

> *"Just keep coding, just keep coding!"*  
> DORY is not blind repetition. It is relentless, deterministic, evidence-driven autonomous engineering.

---

## 1. Operating Axioms

1. **Active Until Green or Breaker Tripped:** Once invoked, do NOT stop after the first edit. Continue the cycle until all gates pass with Exit Code 0, or the hard iteration circuit breaker (limit: ${config.maxIterations}) is reached.
2. **Disk is Ground Truth (0 Token Bleed):** Conversational chat memory degrades exponentially (the Chat Trap). Do not rely on chat history. Your state is defined strictly by the filesystem: git diffs, task contracts, and compiler/test telemetry on disk.
3. **Zero Conversational Fluff:** No apologies, no conversational drift, no excuses. Report facts, exit codes, and diffs.
4. **Binary Gate Enforcement:** An edit is NEVER complete because it "looks right". Code is only complete when verified by the non-negotiable **Tri-Gate**.
5. **No Test Mutilation:** Never delete, skip, comment out, or weaken assertions to manufacture a passing build. Modifying tests is only allowed when updating outdated specifications explicitly requested by the user.

---

## 2. The D-O-R-Y Operational Loop

\`\`\`text
  ┌────────────────────────────────────────────────────────┐
  │                        [START]                         │
  └──────────────────────────┬─────────────────────────────┘
                             │
                             ▼
  ┌────────────────────────────────────────────────────────┐
  │  D – DO: Contract Ingestion, Whitelisting & True TDD   │
  └──────────────────────────┬─────────────────────────────┘
                             │
                             ▼
  ┌────────────────────────────────────────────────────────┐
  │  O – OBSERVE: The Tri-Gate Verification Gateway        │
  │  [Gate A: Lint/Style] → [Gate B: Types] → [Gate C: Test]│
  └──────────────────────────┬─────────────────────────────┘
                             │
            ┌────────────────┴────────────────┐
            ▼                                 ▼
      [Any Gate != 0]                   [All Gates == 0]
            │                                 │
            ▼                                 │
  ┌───────────────────────────────────┐       │
  │ R – RECOGNIZE: Senior Triage      │       │
  │ Anti-Thrash & Flake Elimination   │       │
  └─────────────────┬─────────────────┘       │
                    │                         │
                    ▼                         ▼
  ┌────────────────────────────────────────────────────────┐
  │  Y – YIELD: Increment Iteration & Commit or Recurse   │
  │  (Hard Circuit Breaker: Max ${config.maxIterations} Iterations)          │
  └────────────────────────────────────────────────────────┘
\`\`\`

---

## 3. The Citadel Architecture

### Block 01 · Specification Engine (Contract Engine)
- Formulate an explicit specification contract (\`task-spec.json\` or markdown contract) prior to code generation.
- Enforce strict target file whitelisting to prevent speculative scope creep.
- True TDD Pre-Flight: pre-write failing test assertion before writing logic.

### Block 02 · Orchestrated Execution (Cold-Start Worker)
- Treat each iteration as an isolated, bounded mutation step.
- Zero token bleed: clear context or rely strictly on filesystem state between runs.

### Block 03 · Tri-Gate Gatekeepers (Verification Gateway)
1. **Gate A · Code Style & Syntax:** ${config.lintEnforced ? 'Mandatory linting clean.' : 'Optional'}
2. **Gate B · Static Analysis & Strict Typing:** ${config.strictTypes ? 'Level 8 / strict compiler pass required.' : 'Standard typing'}
3. **Gate C · Runtime Behavioral Tests:** 100% green unit & integration test suites.

### Block 04 · Citadel Blast Radius Sentinel
- Sandbox containment: ${config.airGapSandbox ? 'Air-gapped workspace enabled.' : 'Standard environment'}
- Auto-commit: ${config.autoCommitOnPass ? 'Verified git commits on Exit 0.' : 'Manual review'}
`;
}

export function downloadSkillFile(config: SkillConfig): void {
  const content = generateSkillMarkdown(config);
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'SKILL.md';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  toastStore.show('Downloaded!', 'Saved SKILL.md to your downloads.', 'success');
}
