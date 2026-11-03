import type { InstallPlatform } from '../types';

export const DORY_META = {
  name: 'dory',
  version: '1.0.0',
  title: 'DORY: Autonomous Iterative Coding Agent Skill',
  subtitle: 'Ralph Wiggum Cold-Start Pressure Cooker Edition',
  tagline: 'Just keep coding, just keep coding! AFK self-healing until 100% green.',
  axiom: 'Disk is Ground Truth. Zero Token Bleed. Non-negotiable Tri-Gate.',
  license: 'MIT',
  githubUrl: 'https://github.com/CodeWithTeds/dory',
};

export const CITADEL_LAYERS = [
  {
    layer: '01',
    name: 'Specification Engine',
    short: 'Contract Engine',
    badge: 'Pre-Flight',
    desc: 'Formulates explicit task contracts (task-spec.json) & file whitelisting before touching application code.',
    rule: 'Eliminate conversational ambiguity. True TDD pre-flight with verified failing assertion.'
  },
  {
    layer: '02',
    name: 'Orchestrated Execution',
    short: 'Cold-Start Worker',
    badge: 'Tabula Rasa',
    desc: 'Each iteration cycle operates as an isolated, bounded mutation step with zero cross-cycle token bleed.',
    rule: 'Chat memory is ephemeral; git diffs and machine-readable telemetry on disk are durable.'
  },
  {
    layer: '03',
    name: 'Tri-Gate Gatekeepers',
    short: 'Verification Gateway',
    badge: 'Binary Exit Code',
    desc: 'Sequential three-tier verification (Linting → Strict Typing → Runtime Tests) requiring unanimous Exit 0.',
    rule: 'Never complete because it "looks right". Code is only complete when all 3 gates pass.'
  },
  {
    layer: '04',
    name: 'Citadel Blast Radius Sentinel',
    short: 'Containment Vault',
    badge: 'Air-Gap Guard',
    desc: 'Disposable workspaces (agent/*), protected secrets (.env), iteration circuit breaker, and automatic rollback.',
    rule: 'Prevents whack-a-mole hallucinated loops from corrupting existing production architectures.'
  }
];

export const TRI_GATES = [
  {
    id: 'A',
    name: 'Gate A: Code Style & Syntax',
    tooling: 'ESLint, Prettier, Pint, Ruff, Biome',
    standard: 'Zero formatting violations, dead code, or syntax errors.',
    command: 'npm run lint -- --max-warnings=0'
  },
  {
    id: 'B',
    name: 'Gate B: Static Analysis & Strict Types',
    tooling: 'TypeScript strict, PHPStan Level 8+, Mypy, Pyright',
    standard: 'Complete type soundness, non-null guarantees, signature conformance.',
    command: 'npx tsc --noEmit --strict'
  },
  {
    id: 'C',
    name: 'Gate C: Runtime Behavioral Tests',
    tooling: 'Vitest, Jest, Pest, Pytest, Go test',
    standard: '100% green assertions against real system & database state.',
    command: 'npm test -- --run'
  }
];

export const INSTALL_PLATFORMS: InstallPlatform[] = [
  {
    id: 'agy',
    name: 'Antigravity CLI (AGY)',
    category: 'agent-cli',
    icon: 'Terminal',
    headline: 'Native skill installation for Google Antigravity & AGY CLI',
    command: 'agy skill install https://skills.sh/dory/SKILL.md',
    installPath: '~/.gemini/antigravity-cli/skills/dory/SKILL.md',
    instructions: [
      'Executes directly inside your active Antigravity terminal session.',
      'Registers the skill into your AGY agent runtime immediately with full Tri-Gate support.',
      'Auto-detects when you prompt "dory", "keep going until green", or "afk mode".'
    ]
  },
  {
    id: 'local-workspace',
    name: 'Local Workspace / Antigravity',
    category: 'agent-cli',
    icon: 'Terminal',
    headline: 'Instant local project installation from @[design/skills]',
    command: 'agy skill add /Applications/dory-ui/design/skills',
    installPath: '/Applications/dory-ui/.agents/skills/dory/SKILL.md',
    instructions: [
      'Links the local skill definition directly from /Applications/dory-ui/design/skills.',
      'Enables Ralph Wiggum Cold-Start loop instantly inside this workspace.',
      'Runs Tri-Gate verification gates natively without downloading external assets.'
    ]
  },
  {
    id: 'skills-sh',
    name: 'Skills.sh Registry',
    category: 'registry',
    icon: 'Package',
    headline: 'Standard Agent Skills specification runner',
    command: 'npx skills add https://github.com/CodeWithTeds/dory --skill dory',
    installPath: '.agent/skills/dory/SKILL.md',
    instructions: [
      'Complies with standard RFC Agent Skills layout.',
      'Installs into project local or global agent configuration.',
      'Resolves dependencies and sets default iteration circuit breaker to 10.'
    ]
  },
  {
    id: 'claude',
    name: 'Claude Code',
    category: 'agent-cli',
    icon: 'Cpu',
    headline: 'Anthropic Claude Code autonomous engineer plugin',
    command: 'claude mcp add dory-skill -- https://skills.sh/dory/SKILL.md',
    installPath: '~/.claude/skills/dory.md',
    instructions: [
      'Incorporate DORY directly into Claude Code CLI tool chain.',
      'Prevents Claude token drift by enforcing tabula rasa file-based diffing.',
      'Trips auto-circuit breaker on consecutive test flakiness.'
    ]
  },
  {
    id: 'cursor',
    name: 'Cursor IDE',
    category: 'ide',
    icon: 'Code',
    headline: 'Project-level system prompt for Cursor Composer & Agent',
    command: 'mkdir -p .cursor/skills && curl -fsSL https://raw.githubusercontent.com/dory-agent/dory/main/SKILL.md -o .cursor/skills/dory.md',
    installPath: '.cursor/skills/dory.md',
    instructions: [
      'Places DORY rule file in .cursor/skills/dory.md in your repository root.',
      'Cursor Composer will strictly adhere to the Ralph Wiggum Cold-Start loop.',
      'Eliminates hallucinated apologies during multi-file refactoring.'
    ]
  },
  {
    id: 'curl',
    name: 'cURL / Shell One-Liner',
    category: 'manual',
    icon: 'Zap',
    headline: 'Universal download for any custom harness or CI/CD container',
    command: 'curl -fsSL https://dory.dev/install.sh | bash',
    installPath: './dory/SKILL.md',
    instructions: [
      'Creates dory/SKILL.md with verified YAML frontmatter.',
      'Performs pre-flight SHA256 checksum validation.',
      'Ready to be ingested by any LLM agent runner.'
    ]
  },
  {
    id: 'npm',
    name: 'NPM / NPX Global',
    category: 'registry',
    icon: 'Box',
    headline: 'Node.js global installation and executable harness',
    command: 'npm install -g @dory-agent/skill',
    installPath: '/usr/local/lib/node_modules/@dory-agent/skill',
    instructions: [
      'Provides dory CLI command to inspect, test, and inject the skill.',
      'Allows running `dory run --max-iterations=10` on any local project.',
      'Cross-platform Windows, macOS, and Linux compatibility.'
    ]
  }
];
