# AGENTS.md

## Cursor Cloud specific instructions

This is a **static HTML/CSS site** (personal resume/portfolio) with no build system, no package manager, and no backend services.

### Serving locally

Run a local dev server from the workspace root:

```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

All pages are then accessible at `http://localhost:8080/`. The main entry point is `index.html`.

### Linting

There is no project-local lint configuration. Use globally-installed tools:

- **HTML**: `htmlhint index.html about.html portfolio.html`
- **CSS**: `stylelint colors_and_type.css --config /tmp/.stylelintrc.json` (create the config file first; see below)

Note: `portfolio.html` has 6 pre-existing `spec-char-escape` warnings (unescaped `>` in arrow text). These are cosmetic and intentional in the source.

### Testing

There are no automated tests in this project. Verification is done by:
1. Serving the site locally and confirming all pages load (HTTP 200).
2. Visually inspecting in a browser that navigation, scroll, and download links work.

### Key files

- `index.html` — Homepage
- `about.html` — About page
- `portfolio.html` — Portfolio page
- `colors_and_type.css` — Design tokens (colors, type, spacing, radii, shadows, motion)
- `ui_kits/resume_site/index.html` — Full UI kit preview (single-page resume layout)
- `preview/` — 18 design-system component preview cards
- `uploads/resume.pdf` — Downloadable resume

### Gotchas

- Fonts and icons (Google Fonts, Lucide) are loaded from CDN. The site works without network access but falls back to system fonts.
- The site is deployed via GitHub Pages from the `main` branch root — no build step required.
- JSX files in `ui_kits/resume_site/` are documentation/reference only; they are NOT compiled or executed.
