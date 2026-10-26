---
name: Aura AI Editorial
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001f26'
  on-tertiary-container: '#0090a9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses high-clarity intelligence, calm authority, and refined modern craft. Tailored for next-generation AI platforms, creative audio synthesis, and interactive hardware/software ecosystems, it avoids hyperactive tech clichés in favor of considered whitespace, editorial authority, and precise technical execution.

Drawing directly from the quiet elegance of Linear, Apple, and Vercel design aesthetics, the interface communicates through:
- **Atmospheric Clarity:** Pure luminous canvas foundations accented by delicate, low-saturation spectral auras (soft violet, cyan, and amber glows) that suggest active computational intelligence without visual noise.
- **Editorial Contrast:** Razor-sharp typography anchoring deep charcoal slate text against pure and subtle warm-white surfaces.
- **Product As Art:** Generous breathing room framing crisp glass-like viewport cards, fluid wave forms, and high-fidelity device mockups.

## Colors

The palette establishes an ultra-clean, high-dynamic-range light mode interface. Primary contrast is achieved through deep midnight slate (`#0F172A`) against pristine background layers (`#FAFAF9` and `#FFFFFF`), ensuring effortless readability and institutional trust.

### Role Allocations
- **Primary (`#0F172A`):** Primary headlines, dominant call-to-action buttons, high-priority icons, and structural focus elements.
- **Secondary (`#6366F1`):** Accent highlights, active tabs, subtle spectral gradients, and interactive states.
- **Tertiary (`#06B6D4`):** Ambient glow backdrops, metric indicators, and real-time audio/intelligence visualizer states.
- **Neutral Surface Foundations:**
  - `Canvas / Base`: `#FAFAF9` (soft warm paper) to `#FFFFFF` (pure light).
  - `Card / Surface Raised`: `#FFFFFF` with 1px border `rgba(15, 23, 42, 0.06)`.
  - `Muted / Secondary Text`: `#64748B` (slate-500).
  - `Border / Hairlines`: `#E2E8F0` (slate-200).
- **Atmospheric Glows:** Soft radial gradient fills combining `#6366F112`, `#06B6D415`, and `#F43F5E0A` layered beneath primary product hero cards to simulate computational vitality.

## Typography

Typography establishes an immediate contrast between geometric editorial presence and utilitarian precision. 

- **Plus Jakarta Sans** governs major hero titles, section headlines, and modal titles. Its wide aperture, rounded terminal nuances, and clean geometric proportions convey modern technical optimism without feeling playful or ungrounded.
- **Inter** commands all narrative descriptions, metadata, specifications, and UI controls. It provides crisp neutral legibility at dense scales and guarantees high vertical balance.
- **Optical Tracking:** Tighter negative letter spacing is strictly applied to all display and headline sizes to prevent loose word structures, while label tags and metadata utilize positive letter-spacing for sharp micro-legibility.

## Layout & Spacing

The layout is built upon a 12-column fluid-responsive grid contained within a maximum width of `1280px` for landing page viewports and `1440px` for interactive app showcases.

- **Desktop (1024px+):** 12 columns, 24px (`1.5rem`) gutters, and 48px (`3rem`) page margins. Section blocks use expansive vertical padding (`space-xl` to 120px) to give product features museum-grade focus.
- **Tablet (768px - 1023px):** 8 columns, 20px gutters, and 32px margins. Multi-card feature grids reflow from 3 or 4 columns down to 2 columns.
- **Mobile (< 768px):** 4 columns, 16px (`1rem`) gutters, and 20px (`1.25rem`) margins. Content transforms into single-column flows with sticky navigation bars and pill actions.
- **Vertical Spacing Rhythm:** Strictly multiple-of-8 spacing ensures predictable cadence between headers, metadata chips, and descriptive body paragraphs.

## Elevation & Depth

Visual hierarchy uses refined physical lightness: whisper-thin micro-borders paired with ambient, diffused shadows and luminous atmospheric halos.

- **Level 0 (Flat / Canvas):** Direct integration with `#FAFAF9` canvas; un-elevated sections rely strictly on 1px hairlines (`#E2E8F0`).
- **Level 1 (Card / Resting State):** Base cards use `#FFFFFF` fill, a 1px border of `rgba(15, 23, 42, 0.06)`, and an ultra-diffused shadow: `0 1px 3px rgba(15, 23, 42, 0.04), 0 8px 24px -4px rgba(15, 23, 42, 0.03)`.
- **Level 2 (Hover / Floating Cards):** On cursor engagement, elevation rises gently with a shadow transition to `0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 20px 32px -6px rgba(15, 23, 42, 0.06)` accompanied by an inner hairline glow `inset 0 0 0 1px rgba(99, 102, 241, 0.15)`.
- **Level 3 (Modal / Hero Frame):** Dominant product previews and floating audio consoles utilize `0 24px 64px -12px rgba(15, 23, 42, 0.08)` paired with backdrop filters (`backdrop-filter: blur(16px)` on translucent floating glass controls).
- **Atmospheric Aura Backdrops:** Soft blurred ellipses placed in fixed positions behind featured hardware and product frames (e.g., `filter: blur(80px); opacity: 0.45; background: radial-gradient(circle, #6366F1 0%, #06B6D4 50%, transparent 70%);`).

## Shapes

The design system maintains a balanced **Rounded (`2`)** geometric standard, producing sleek, contemporary tech-forward forms that feel warm and tactile without veering into toy-like softness.

- **Standard Elements (0.5rem / 8px):** Input fields, inline code snippets, dropdown menus, and standard interactive tiles.
- **Large Cards & Panels (`rounded-lg` / 1rem / 16px):** Product feature cards, audio visualizer panels, and interactive mockup containers.
- **Display Enclosures (`rounded-xl` / 1.5rem / 24px):** Major hero card modules, viewport frames, and deep section containers.
- **Capsule / Pill (`rounded-full`):** Badges, tag chips, floating status indicators, and main CTA buttons adhere to a full circular radius for distinct touchpoint identity.

## Components

### Buttons
- **Primary CTA:** Solid `#0F172A` background, white label, full pill radius (`9999px`), 14px font weight 600, padding `12px 24px`. Hover state applies slight vertical lift (`translate-y(-1px)`) with `rgba(15, 23, 42, 0.85)` fill.
- **Secondary CTA:** Pure `#FFFFFF` background, 1px border in `rgba(15, 23, 42, 0.12)`, `#0F172A` text label, pill radius. Hover brings subtle slate surface tint (`#F8FAFC`).
- **Ghost / Text Button:** Neutral typography with subtle arrow icon animation on hover (`transform: translateX(4px)`).

### Badges & Pill Chips
- **Announcement / Meta Pills:** Height `28px`, pill radius, soft backdrop `rgba(255, 255, 255, 0.8)` with 1px border `rgba(15, 23, 42, 0.08)`. Text in `label-caps` (`11px`, slate-600) often prefixed with an emerald or indigo live-pulse indicator dot (6px circle).

### Cards & Feature Containers
- **Product Spotlight Cards:** Pure white ground, 16px radius, micro-borders (`#E2E8F0`). Internal padding `32px`. Header features a clean icon or pill badge, followed by `headline-sm` title, subtle narrative body text, and an isolated product asset or interactive UI canvas.
- **Minimal Metric Cards:** Frameless or light hairline-divided stat modules showing high-impact numerical figures (`36px` Plus Jakarta Sans) paired with small muted tracking labels (`label-caps`).

### Input Fields & Controls
- **Form Inputs:** 44px height, 8px radius, white surface with `1px solid #CBD5E1`. Placeholder in `#94A3B8`. Focus state applies `#0F172A` border with subtle indigo halo (`box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15)`).
- **Checkboxes & Radios:** 16px width and height, 4px border radius for checkboxes, full circle for radios. Active state fills with `#0F172A` and sharp white verification icons.

### Interactive Media & Waveform Panels
- **Audio / Intelligence Viewports:** Framed in 16px rounded borders with deep slate or muted light gray interior canvases, displaying soft cyan and violet dynamic wave strokes (`stroke-width: 2px`) representing live audio inference and model feedback.