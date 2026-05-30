# Tech Spec — Adib Web Dev Learning

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.0.0 | UI framework |
| `react-dom` | ^19.0.0 | DOM renderer |
| `react-router-dom` | ^7.6.0 | Client-side routing (BrowserRouter) |
| `lucide-react` | ^0.510.0 | Icon library (all UI icons) |
| `tailwindcss` | ^4.1.0 | Utility-first CSS |
| `@tailwindcss/vite` | ^4.1.0 | Tailwind Vite integration |

**External resources (loaded via `<link>` in `index.html`, NOT npm):**
- Google Fonts: Caveat Brush, Inter, JetBrains Mono

No additional npm packages needed. All animation and canvas logic is hand-written.

---

## Component Inventory

### Layout Components

| Component | Source | Notes |
|-----------|--------|-------|
| `Header` | Custom | Fixed top nav. Includes scroll-aware tagline show/hide. Mobile: hamburger → full-screen overlay nav. |
| `Footer` | Custom | Simple static footer, always visible. |

### Page Components

| Component | Source | Notes |
|-----------|--------|-------|
| `HomePage` | Custom | Hero (with TrailPaintCanvas) + ModuleGrid + AboutMethod. |
| `ModulePage` | Custom | Breadcrumb + progress bar + chapter list for a module. Reads module data. |
| `ChapterPage` | Custom | Full pedagogical template. Reads chapter content data. |
| `TentangPage` | Custom | Philosophy + method grid. |

### Shared Components

| Component | Source | Reuse |
|-----------|--------|-------|
| `Breadcrumb` | Custom | Used on ModulePage, ChapterPage, TentangPage. Accepts array of `{label, path}` segments. |
| `Card` | Custom | Base card wrapper used everywhere. Supports glow variant (wraps GlowBorder). |
| `GlowBorder` | Custom | Pingpong glow effect. Wraps content with a `.glow` pseudo-element animated via rAF. Used on active module card and current chapter card. |
| `Button` | Custom | 3 variants: `primary`, `secondary`, `ghost`. Uses Tailwind compound classes. |
| `ChapterNav` | Custom | ModuleMiniMap + prev/next buttons. Used on every ChapterPage. |
| `ModuleMiniMap` | Custom | Horizontal circles showing chapter progress. Receives `moduleId`, `chapterId`, `completedChapters`. |
| `CodeBlock` | Custom | Syntax-highlighted code display. Simple CSS token coloring (keywords blue, strings green, comments gray). |
| `PromptAICard` | Custom | Dashed-border card with Sparkles icon + CTA. Used on every ChapterPage. |
| `ReflectiveQuestion` | Custom | Orange-left-border card with textarea. Auto-saves to localStorage. Used on every ChapterPage. |
| `ScrollReveal` | Custom | Wrapper that fades in children on scroll (IntersectionObserver). Used on cards, section headers. |
| `TrailPaintCanvas` | Custom | Canvas-based interactive paint trail. Desktop only. Hero variant (interactive) + chapter-bg variant (decorative, auto-play). |

### Hooks

| Hook | Purpose |
|------|---------|
| `useProgress` | Reads/writes chapter completion to localStorage. Returns `{ isCompleted, markComplete, getModuleProgress }`. |
| `useReflection` | Reads/writes textarea content to localStorage per chapter. Returns `{ value, setValue, save }`. |
| `useScrollReveal` | IntersectionObserver-based visibility toggle. Returns `{ ref, isVisible }`. |

---

## Animation Implementation

| Animation | Library / Approach | Implementation | Complexity |
|-----------|-------------------|----------------|------------|
| Page transition (fade out/in) | Hand-written CSS + React state | On route change: old content fades out (opacity 1→0, 0.2s), then new content fades in (opacity 0→1, 0.3s, 0.1s delay). Controlled by a transition wrapper component that manages the CSS class toggle. | Low |
| Hero load stagger | Hand-written CSS | CSS `@keyframes` with incremental `animation-delay` values (0.1s, 0.25s, 0.4s, 0.55s). No JS needed. | Low |
| Scroll-triggered fade-in | Custom `useScrollReveal` hook | `IntersectionObserver` (threshold 0.1) toggles a `.visible` class that applies `opacity: 0 → 1, translateY(24px → 0), 0.5s ease-out`. Sibling elements stagger via CSS `transition-delay` (0.1s increments). | Low |
| Pingpong glow border | Hand-written rAF loop | Conic-gradient pseudo-element with `--x`, `--y`, `--glow-angle` custom properties updated via `requestAnimationFrame`. Bounce logic for x/y (0.5%/0.35% per frame, bounds 10-90%). `IntersectionObserver` gates activation. | 🔒 High |
| Trail paint canvas | Hand-written Canvas 2D | Full canvas implementation: velocity-mapped brush radius (4-24px), tapered stroke segments, particle system with gravity/friction/fade, pixel-level alpha fade (`putImageData`). MOUSEMOVE/MOUSEDRAG events. Mobile: auto-play random trails at low opacity. | 🔒 High |
| Header tagline show/hide | Hand-written JS | Scroll position listener (>100px threshold) toggles CSS class for opacity transition. | Low |
| Mobile nav overlay | Hand-written CSS | Full-screen overlay with opacity transition (0.2s). Body scroll lock via `overflow: hidden`. | Low |
| Card hover lift | Hand-written CSS | `transition: transform 0.3s, box-shadow 0.3s`. Hover: `translateY(-2px), box-shadow: 4px 4px 0 var(--black)`. | Low |
| Chapter card stagger | Custom `useScrollReveal` | Same as scroll-triggered fade-in, but applied to chapter list items with 0.08s stagger. | Low |
| Progress bar fill | Hand-written CSS | `transition: width 0.5s ease-out`. Width computed from `completed/total * 100`. | Low |

---

## State & Logic Plan

### Routing

Use `react-router-dom` `BrowserRouter` with route table:

| Route | Page Component |
|-------|---------------|
| `/` | `HomePage` |
| `/modul/:moduleId` | `ModulePage` |
| `/modul/:moduleId/chapter/:chapterId` | `ChapterPage` |
| `/tentang` | `TentangPage` |
| `*` | redirect to `/` |

### Data Architecture

All content (module metadata, chapter content, pedagogical template data) is **static data defined in TypeScript files** — no API calls, no JSON fetch.

```
src/
  data/
    modules.ts        — Module metadata (id, title, description, chapterCount)
    chapters.ts       — Chapter content for all 6 chapters of Modul 1
                      — Each chapter object contains all 8 pedagogical sections
                      — Typed as ChapterData interface
```

`ChapterPage` receives `moduleId` and `chapterId` from route params, looks up the chapter data from the static array, and renders the pedagogical template. No state management needed for content.

### Progress Tracking (localStorage)

```
Key: "awl_progress"
Value: Record<string, boolean>  // { "1_1": true, "1_2": true, ... }
```

- On `ChapterPage` mount: auto-mark current chapter as completed via `useProgress`.
- `ModulePage` reads storage to compute progress bar width and checkmark display.
- `useProgress` hook encapsulates all read/write logic.

### Reflection Auto-Save (localStorage)

```
Key: "awl_reflection_{moduleId}_{chapterId}"
Value: string (textarea content)
```

- `ReflectiveQuestion` component uses `useReflection` hook.
- `onChange` updates state; debounced write to localStorage (300ms).
- On mount: reads from localStorage and pre-fills textarea.

### Trail Paint Canvas — Lifecycle & Variant Logic

`TrailPaintCanvas` accepts a `variant` prop: `"hero" | "chapter-bg"`.

- **Hero variant:** Interactive (mouse events attached). Full opacity. Active on desktop only (`min-width: 768px` check). Paused when scrolled out of viewport (IntersectionObserver gates `requestAnimationFrame`).
- **Chapter-bg variant:** Non-interactive. Fixed position, `opacity: 0.03`. Auto-generates very slow random trails (~50px/s) as subtle texture. Always running while chapter page is mounted.

The canvas component manages its own `requestAnimationFrame` loop and cleans up on unmount.

### Page Transition Orchestration

A `PageTransition` wrapper component manages the fade-out/fade-in sequence:

1. On route change (detected via `useLocation`), set `transitioning = true`.
2. Current content gets `.exiting` class (opacity → 0, 0.2s).
3. After 200ms, render new page content with `.entering` class (opacity → 1, 0.3s).
4. After entering animation completes, set `transitioning = false`.
5. Scroll to top at step 3.

This requires coordinating React render cycle with CSS transition timing — use `setTimeout` for the 200ms/300ms handoff points.

---

## Other Key Decisions

**No shadcn/ui.** The design is entirely custom with hand-drawn aesthetic (thick borders, custom radius, handwritten font). shadcn components would require heavy overrides with no benefit. All components are built from scratch with Tailwind.

**Hash routing vs BrowserRouter.** The design document specifies "hash-based routing" but the tech spec uses `BrowserRouter` (standard for React SPA with Vite). `BrowserRouter` is the correct choice — Vite's dev server and production build both support SPA fallback. The hash routing mention in design was conceptual; the actual implementation uses clean URLs.

**No code splitting.** The app has ~6 pages with static content. The bundle size will be small enough that lazy loading is unnecessary. All pages and data are imported statically.

**Canvas performance guardrails:**
- DPR capped at 2 (even on 3x displays).
- `IntersectionObserver` pauses rAF loop when canvas is off-screen.
- Mobile: canvas is `pointer-events: none` with auto-play at very low opacity — minimal CPU cost.
- `willReadFrequently: true` on canvas context for the pixel-level alpha fade operation.
