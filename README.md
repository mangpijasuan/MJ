# Mangpi Jasuan — Resume Design System

A small, focused design system for **Mangpi D Jasuan's** personal resume website, intended to live on GitHub Pages. It holds the visual foundations, component library, and a full UI kit you can point at to build or iterate on the site.

---

## Who this is for

**Mangpi D Jasuan** — Computer Science student (B.S., expected May 2027) at Northeastern State University with a Finance minor, based in Jenks, OK. Multi-year process technician and EHS coordinator at **Whirlpool Corporation** and Treasurer of **Zomi Community USA, Inc.** The resume telegraphs two themes in parallel: *technical / analytical* (CS, data, KPI tracking) and *financial / operational* (QuickBooks, reconciliation, budgeting, compliance).

### The product
- **One product**: a personal portfolio / resume website, rendered as a static site suitable for **GitHub Pages**.
- Core surfaces covered in the UI kit:
  - Hero + at-a-glance overview
  - Experience timeline
  - Education
  - Skills
  - Volunteer experience
  - Contact / footer

### Sources
- `uploads/resume.pdf` — the original Google Docs PDF (raw content extracted into the UI kit).
- No brand, codebase, Figma, or prior visual system was provided — **the aesthetic was designed from scratch in this system**. See *Visual Foundations* below for the rationale.

---

## Aesthetic, in one paragraph

Editorial-minimal on deep navy. A serif display face (Fraunces) carries the name and section titles in crisp white, paired with a tight geometric sans (Inter Tight) for body and a quiet monospace (JetBrains Mono) for dates and metadata — a small nod to the CS side without committing to a "developer portfolio" look. White on navy, hairline rules in lifted navy tones, one restrained warm-gold accent for links and the primary CTA. No gradients, no emoji, no heavy drop-shadows. The resume should read like a well-set magazine column at night: considered, confident, quiet.

---

## Content fundamentals

How copy is written across the site.

- **Voice**: first-person, understated. "I studied…", "I led…" — never "we," never marketing "you." The resume source is third-person bullets; we translate them to first-person narrative on the site but keep the resume doc itself in its original form.
- **Tone**: measured, factual, lightly warm. Confident without puffery. No superlatives ("world-class", "passionate"), no hype words ("leverage", "synergy").
- **Casing**: sentence case for everything except the name plate. Section labels are uppercase eyebrows with wide tracking (see *Type*). Job titles are Title Case.
- **Numbers**: write digits for metrics ("improving reporting efficiency by 20%"), spell out small counts in prose ("three years"). Dates are spelled out: *June 2021 – Present*.
- **Acronyms**: keep technical acronyms as-is on first reference if well-known in context (OSHA, HIPAA, EHS, KPI, JI). Never invent abbreviations.
- **Punctuation**: serial comma always. Em-dashes for asides, en-dashes for ranges.
- **Emoji**: **no emoji anywhere.** This is a quiet, editorial design — emoji would break the tone.
- **Links**: verbs, not nouns. "View the PDF" not "PDF here." Email and phone can render literally.
- **Lists**: resume bullets begin with a strong verb — *Managed*, *Prepared*, *Led*, *Developed*, *Conducted*. Keep each bullet to one sentence where possible.

**Examples**

> **Eyebrow**: `EXPERIENCE` · `EDUCATION` · `VOLUNTEER`
>
> **Role line**: *Process Technician / EHS Coordinator* — Whirlpool Corporation, Tulsa, OK · `June 2021 – Present`
>
> **Bullet**: Managed and reconciled EHS data using Google Sheets, Gensuite, and SEWOs, improving reporting efficiency by 20%.
>
> **Lede (optional hero subtitle)**: *"CS student with a finance minor. I build quiet systems and keep the books balanced."*

---

## Visual foundations

### Color

A navy surface palette with soft-white text and a single warm-gold accent. The background is **always navy** (`--navy-1` #0B1A33) — never pure black, never light. See `colors_and_type.css` for the full token list.

- **Navy surfaces** (4 steps): `--navy-1` → `--navy-4`. Use `--navy-1` as page bg, `--navy-2` as card/alt-surface, `--navy-3` as hairline/divider, `--navy-4` for stronger borders.
- **Light scale** (4 steps): `--light-1` (#FFFFFF, titles) → `--light-4` (#7E88A0, captions).
- **Accent — warm gold** (`#E8B866`): reserved for links, focus rings, and the primary CTA. Hovers lighten to `#F2C77C`. `--accent-tint` is a deep navy-gold used for pill fills.
- **Highlighter**: same gold, used sparingly for `<mark>` text highlights.
- **Status tokens** (success/warn/error) exist for completeness but the resume rarely needs them.

### Type

- **Display — Fraunces (variable)**: name plate + section H1/H2. Optical size tuned per level (`opsz 144` for the name, `opsz 72–120` for headings). Weight 400–500.
- **Sans — Inter Tight**: body, UI, H3, buttons. 400/500/600/700.
- **Serif — Instrument Serif (italic)**: lede / pull-quote accents only — one appearance per page max.
- **Mono — JetBrains Mono**: dates, phone numbers, URLs, metadata. 400/500.
- **Eyebrow**: 12px, uppercase, `tracking-wider` (0.16em), weight 600 — the signature editorial detail separating sections.

Scale runs `--fs-xs` 12px → `--fs-5xl` 88px. Line-height: 1.1 tight for display, 1.5–1.65 for body.

### Spacing

4-pt scale: `--sp-1` 4px through `--sp-10` 128px. The site is generous with whitespace — section dividers are typically `--sp-8` (64px) above and below, and the outer page gutter on desktop is `--sp-7`–`--sp-8`.

### Layout

Single column, centered, max width **760px** (`--content`) for the resume body. Hero section may break to **960px** (`--content-wide`). The page never uses a sidebar — the rhythm is top-down, like a column in *The Economist*.

### Backgrounds

- No hero images, no gradients, no patterns, no illustrations. The navy tone IS the background.
- Optional subtle **star-field or grain** (SVG noise at 3–5% opacity) can be layered on `body` for depth — include as progressive enhancement only.

### Borders, rules, cards

- Hairline `1px solid var(--border)` (navy-3) is the workhorse divider.
- Section starters use a **full-width light rule** (`1px solid var(--rule)` = white) above an uppercase eyebrow label — the only "strong" line on the page.
- Cards are rare. When used: `--surface` fill, no border, `--shadow-1` at rest, `--r-3` corner radius.
- Corner radii: mostly **0px**. Small inputs and pills use `--r-2` (4px) or `--r-pill`. Never large rounded corners.

### Shadows

Subtle but noticeable on navy. `--shadow-1` is the default rest state; `--shadow-2` for hovered cards; `--shadow-3` only for floating popovers. Shadows use pure-black rgba at low opacity. Focus ring is a 3px gold-tinted halo.

### Motion

- **Easing**: `cubic-bezier(0.2, 0.6, 0.2, 1)` (`--ease`) for most transitions; `--ease-out` for enter-only.
- **Duration**: 120ms fast / 200ms default / 400ms slow.
- **No bounces**, no elastic. Fades and tiny translates only (2–6px). The motion should feel like turning a page.

### Hover / press states

- **Links**: color darkens from `--accent` to `--accent-hover`. Underline thickens 1px → 2px.
- **Buttons (primary)**: background darkens to `--accent-hover`. No scale.
- **Buttons (ghost)**: background fills from transparent to `--paper-2`.
- **Press**: translateY(1px) — a tiny physical tap, never a shrink.
- **Focus**: 3px emerald halo (`--ring`), always visible for keyboard users.

### Transparency / blur

Generally avoided. The only blur used is an optional `backdrop-filter: blur(8px)` on the sticky top nav when scrolled, over `rgba(11, 26, 51, 0.85)`.

### Imagery

No stock imagery is required or expected for this resume. If the user later adds a profile photo or project thumbnails, they should be:
- Warm-toned, natural light, no cold blues.
- Slight grain acceptable.
- Squared or rectangular — no circles, no masked shapes.

---

## Iconography

**System**: [Lucide](https://lucide.dev/) via CDN — a clean, 1.5px-stroke, open-source set that sits comfortably in an editorial layout. Used at 16px or 20px, inheriting `currentColor`.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<i data-lucide="mail"></i>
```

**Usage rules**
- Stroke width fixed at 1.5px — never thicker.
- Monochrome, inherits text color.
- Only used for functional affordances (contact, external link, download) and navigation — **never as section decoration**.
- **No emoji.** No Unicode icon characters (★ ▪ ♦ etc.) except the humble `·` middot as a separator in the metadata line.
- If a needed icon isn't in Lucide, use plain text instead.

**Substitution note**: Lucide is a substitution — the user did not specify an icon system. Happy to swap in Heroicons, Phosphor, or a custom set if preferred.

---

## Index — files in this project

```
README.md                     ← you are here
SKILL.md                      ← cross-compatible Agent Skill manifest
colors_and_type.css           ← design tokens: colors, type, spacing, radii, shadows, motion
uploads/
  resume.pdf                  ← source resume (renamed from Google Docs export)
preview/
  01-color-paper.html         ← design-system preview cards (Colors, Type, Spacing, Components)
  02-color-ink.html
  03-color-accent.html
  04-type-display.html
  05-type-headings.html
  06-type-body-meta.html
  07-type-eyebrow-lede.html
  08-spacing-scale.html
  09-radii-shadows.html
  10-motion-focus.html
  11-buttons.html
  12-form-inputs.html
  13-links-pills.html
  14-rules-section-starter.html
  15-experience-item.html
  16-skill-list.html
  17-iconography.html
  18-content-voice.html
ui_kits/
  resume_site/
    README.md
    index.html               ← the full resume site, interactive
    Hero.jsx
    SectionHeader.jsx
    ExperienceItem.jsx
    EducationItem.jsx
    SkillGroup.jsx
    VolunteerItem.jsx
    Footer.jsx
    Nav.jsx
    Button.jsx
```

---

## Caveats & known substitutions

- **Fonts are Google Fonts substitutions** for a hand-picked editorial feel — no font files were supplied. If you have license to a specific pairing you'd rather use (e.g. GT Sectra, Söhne, Söhne Mono), drop the `.woff2` files into `fonts/` and update the `@font-face` declarations in `colors_and_type.css`.
- **Icons**: Lucide via CDN (substitution).
- **Accent color**: the warm gold was chosen to read strongly on navy without feeling gaudy. Swap `--accent` in `colors_and_type.css` for a single change across the system.
- **No photo of Mangpi** was provided. The UI kit's hero uses a quiet monogram ("MJ") placeholder.
