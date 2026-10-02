# parkerbillinger.com

Personal portfolio site for Parker Billinger — a software engineer working in
C#/.NET, Azure and React. Single page, no router, no backend of its own.

## Stack

- **[Vite](https://vite.dev)** — dev server and build
- **[React 19](https://react.dev)**
- **[Tailwind CSS v4](https://tailwindcss.com)** — configured CSS-first in
  [`src/index.css`](src/index.css); there is no `tailwind.config.js`
- **[react-icons](https://react-icons.github.io/react-icons/)** — social and UI glyphs
- Deployed on [Netlify](https://netlify.com)

## Getting started

Requires Node 22+.

```bash
npm install
npm run dev      # dev server at http://localhost:5173
```

| Script | Does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally, to check the real output |

## Where things live

**All page copy is in [`src/data.js`](src/data.js)** — profile, featured project,
experience, projects, skills, education and contact details. Edit content there rather
than in the components; everything under [`src/components/`](src/components/) is
presentational and reads from it.

```
index.html              page shell, meta and Open Graph tags
src/main.jsx            React entry
src/App.jsx             section order
src/data.js             all content
src/index.css           Tailwind import + design tokens (@theme)
src/components/
  Section.jsx           shared section wrapper (eyebrow + heading)
  Navbar.jsx  Hero.jsx  FeaturedProject.jsx  Experience.jsx
  Projects.jsx  Skills.jsx  Education.jsx  Contact.jsx
public/                 static assets copied verbatim into dist/
```

### Design tokens

Colours, fonts and the label tracking are declared once in the `@theme` block at the top
of [`src/index.css`](src/index.css) and consumed as ordinary Tailwind utilities
(`bg-ink`, `text-fg-muted`, `border-edge`, `text-accent`, …). Change a value there and it
propagates across the site. The same file sets the global `:focus-visible` ring and the
`prefers-reduced-motion` rules.

## Deployment

Netlify builds from [`netlify.toml`](netlify.toml): `npm run build`, publishing `dist/`
on Node 22, with a catch-all redirect to `/index.html`. Pushing to the default branch
deploys.

## Outstanding

Items marked `TODO(Parker)` in the source:

- **Headshot** — add the image to `public/` and set `profile.headshot` in `src/data.js`
- **NextMovie screenshot** — add to `public/` and set `featured.screenshot`
- **NextMovie live URL** — set `featured.liveUrl`; a "Visit site" button appears once it
  is non-null
- **Canonical / OG URL and share image** — `index.html` has a commented-out block with
  the `canonical`, `og:url` and `og:image` tags. Add a 1200×630 `public/og-image.png`,
  then uncomment it and swap `https://example.com` for the real origin. These must be
  absolute URLs — link unfurlers ignore relative ones, which is why they ship commented
  out rather than with a placeholder
