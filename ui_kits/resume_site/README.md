# Resume Site UI Kit

An interactive, click-through recreation of Mangpi Jasuan's personal resume site, ready to deploy to GitHub Pages.

## Screens
- **Landing** — hero name plate, lede, quick contact, primary CTA to download the PDF.
- **About section** — short first-person blurb.
- **Experience** — reverse-chron timeline with role, org, dates, bullets.
- **Education**
- **Skills** — grouped by category, comma-joined.
- **Volunteer**
- **Contact / footer**

## Components
- `Nav.jsx` — sticky top nav with anchor links and a subtle blur on scroll.
- `Hero.jsx` — name plate + lede + meta row.
- `SectionHeader.jsx` — rule + eyebrow + title block.
- `ExperienceItem.jsx` — two-column (date / body) item.
- `EducationItem.jsx` — degree + school + date.
- `SkillGroup.jsx` — eyebrow label + comma-joined skill string.
- `VolunteerItem.jsx` — mirrors experience item.
- `Footer.jsx` — contact trio + copyright.
- `Button.jsx` — primary / ghost / text variants.
- `data.js` — content pulled directly from `uploads/resume.pdf`.

## Run
Open `index.html`. It's a single page, scroll-through layout with all content in view.
