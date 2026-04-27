# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i          # Install dependencies
npm run dev    # Start Vite dev server
npm run build  # Production build
npm run preview # Preview production build locally
```

No test runner is configured. TypeScript type-checking is handled by Vite at build time.

## Architecture

This is a **single-page marketing/landing site** for Motilal Oswal's MCP (Model Context Protocol) desktop product — a bridge that connects the MO trading account to AI assistants like Claude.

**Entry point:** `src/main.tsx` → `src/app/App.tsx`

**Component layout** (`src/app/components/`): The page is a single-scroll layout. `App.tsx` assembles the sections in order: `Navigation` → `Breadcrumb` → `Hero` → `HowItWorks` → `Capabilities` → `AdvancedFeatures` → `DeviceSetup` → `Benefits` → `Security` → `SocialProof` → `FAQ` → `ConnectSection` → `Footer`. Navigation sections (`HowItWorks`, `Capabilities`, `DeviceSetup`, `Security`, `FAQ`) are loaded directly; the rest are lazy-loaded with `React.lazy`.

**Navigation** uses scroll-spy (IntersectionObserver pattern via manual offsetTop checks) and `sessionStorage` to persist scroll position across refreshes. A `window.__disableScrollRestoration` flag coordinates between `Navigation.tsx` and `App.tsx` to prevent scroll position restoration during in-page navigation.

**`src/imports/`**: SVG assets and logo components exported from Figma. The original design is at `https://www.figma.com/design/jjRBBUZylFW6VP6xZ9zOFG/MO-MCP-Desktop--Copy-`.

**`src/app/utils/generatePDF.ts`**: Standalone utility using `jspdf` + `jspdf-autotable` to generate a multi-page "Motilal Oswal MCP Server Setup & Usage Guide" PDF on demand.

**UI components** (`src/app/components/ui/`): Full shadcn/ui component library wired to Radix UI primitives. Styling tokens are defined in `src/styles/theme.css` and exposed to Tailwind via `@theme inline`. Brand primary color is `#2B2E8C`.

**Styling stack**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin), with custom tokens in `src/styles/theme.css`. The `@` alias resolves to `src/`.

**Key dependency**: `mo-mcp-bridge` is the npm package for the actual MCP server that this landing page documents.
