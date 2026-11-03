# DORY UI — Autonomous Iterative AI Coding Agent Skill

A two-page web experience and installation hub for **DORY** (Ralph Wiggum Cold-Start Pressure Cooker Edition), built with **Svelte 5**, **TypeScript**, and **Vite**.

Designed with reference to:
- [`design/image.png`](file:///Applications/dory-ui/design/image.png) — Ultra-clean minimalist dark canvas (`#0a0a0a`), Inter bold typography with tight tracking (`-6.12px`), badge pills, and sleek action pill.
- [`design/ui.md`](file:///Applications/dory-ui/design/ui.md) — Precise typographic and color tokens.
- [`design/skills/dory.md`](file:///Applications/dory-ui/design/skills/dory.md) & [`design/skills/skills.md`](file:///Applications/dory-ui/design/skills/skills.md) — The 4-Layer Citadel Architecture and Tri-Gate verification gateway.
- [`design/skills/image.png`](file:///Applications/dory-ui/design/skills/image.png) — Official 3D Dory artwork asset.

---

## 🏛️ Architectural Separation of Concerns (SoC)

The application strictly separates presentation, domain logic, application state, and configuration:

```
src/
├── styles/
│   ├── tokens.css               # Design tokens (#0a0a0a, #fafafa, Inter, clamp scales)
│   └── global.css               # Base reset, scrollbars, and glass utility classes
├── types/
│   └── index.ts                 # TypeScript types (PageRoute, InstallPlatform, TriGateState, etc.)
├── config/
│   └── dorySpec.ts              # Domain data (metadata, Citadel layers, Tri-Gate standards, platforms)
├── stores/                      # Reactive state management
│   ├── navigation.ts            # 2-Page navigation routing ('landing' | 'install')
│   ├── installer.ts             # Configuration, platform selection, terminal logs, Tri-Gate telemetry
│   └── toast.ts                 # Global notification toast store
├── services/                    # Business & utility services (decoupled from UI)
│   ├── clipboard.ts             # Asynchronous clipboard copy handler with fallback
│   ├── skillGenerator.ts        # Dynamic SKILL.md generator & browser file downloader
│   └── simulator.ts             # Simulated in-browser execution engine for Tri-Gate verification
├── components/
│   ├── common/                  # Reusable presentation components
│   │   ├── Badge.svelte         # Capsule badge pill (inspired by Decision 001)
│   │   ├── Button.svelte        # Standard, pill, outline button variants
│   │   ├── CopyButton.svelte    # Instant copy with animated state transition
│   │   ├── Toast.svelte         # Non-intrusive floating feedback alert
│   │   ├── Navbar.svelte        # 2-Page navigation tab bar and brand mark
│   │   └── Footer.svelte        # Dark minimal footer with operating axioms
│   ├── landing/                 # Page 1: Overview & Manifesto
│   │   ├── HeroSection.svelte   # 111px Inter hero, Dory fish artwork, ambient glow, pill CTA
│   │   ├── CitadelArchitecture.svelte # Block 01 - 04 architectural breakdown
│   │   ├── TriGateExplainer.svelte    # Gate A, Gate B, Gate C and Exit 0 intersection
│   │   ├── ComparisonChart.svelte     # Conversational Chat Trap vs Tabula Rasa Cold-Start
│   │   └── LandingPage.svelte         # Page 1 root orchestrator
│   └── installer/               # Page 2: Plugin & Skill Installation Hub
│       ├── PlatformSelector.svelte    # AGY, Claude Code, Cursor, skills.sh, cURL, NPM
│       ├── TerminalEmulator.svelte    # In-browser live simulation runner & real-time telemetry
│       ├── SkillConfigurator.svelte   # Parameter tuning (max_iterations, strict typing, sandboxing)
│       ├── SkillCodePreview.svelte    # Dynamic SKILL.md inspection, download & copy
│       └── InstallerPage.svelte       # Page 2 root orchestrator
├── App.svelte                   # Main application shell with 2-page switcher
└── main.ts                      # Client entry point
```

---

## 📄 2 Pages Overview

### Page 1: Overview & Manifesto
- **Hero Statement**: Matches `design/image.png` & `design/ui.md` with responsive hero typography (`Inter`, `700`, `-6.12px` tracking).
- **Badge**: `Skill 001 · Ralph Wiggum Cold-Start`.
- **Artwork Showcase**: Displays the 3D Dory Blue Fish artwork with electric blue rim glow and metadata.
- **Citadel 4-Layer Framework**: Details Contract Engine, Cold-Start Worker, Tri-Gate Gatekeepers, and Blast Radius Sentinel.
- **The Non-Negotiable Tri-Gate**: Gate A (Lint), Gate B (Strict Types), Gate C (Behavioral Tests) converging on Exit 0.
- **Chat Trap vs Cold-Start**: Explains how 0 Token Bleed eliminates horizontal context collapse.
- **Instant Switch**: Click "Install Dory Plugin" or tab "02 Install Plugin Hub" to navigate.

### Page 2: Plugin & Skill Installation Hub
- **Target Platform Selector**:
  - **Antigravity CLI (AGY)**: `agy skill install https://skills.sh/dory/SKILL.md`
  - **Claude Code**: `claude mcp add dory-skill -- https://skills.sh/dory/SKILL.md`
  - **Cursor IDE**: `.cursor/skills/dory.md`
  - **Skills.sh**: `npx skills add dory`
  - **cURL / Shell**: `curl -fsSL https://dory.dev/install.sh | bash`
  - **NPM / NPX**: `npm install -g @dory-agent/skill`
- **Interactive In-Browser Terminal Runner**: Run a simulated Ralph Wiggum cycle with real-time logs and live Tri-Gate status indicators.
- **Engine Configurator**: Sliders for `max_iterations`, strict typing, mandatory linting, air-gap sandboxing, and auto-commits.
- **Generated `SKILL.md`**: Live preview with raw YAML/Markdown view, rendered view, one-click copy, and one-click download.

---

## 🚀 Running Locally

```bash
# Install dependencies
pnpm install # or npm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```
