# Ziqi Lin — Personal Website

A clean, static personal portfolio, technical writing hub, and engineering notebook.
Built with [Astro](https://astro.build/) and deployed as a fully static site.

- **Positioning:** reliable AI-assisted systems for real-world workflows — human-in-the-loop
  review, auditability, evaluation, and production reliability.
- **Stack:** Astro + MDX, TypeScript, plain global CSS. No database, no backend, no CMS.
- **Hosting:** static output, free to deploy on Vercel.
- **Live demo (external):** the Auditable AI Referral demo is a separate deployment linked
  from the portfolio — <https://auditable-ai-referral-demo.vercel.app/>

## Prerequisites

- Node.js 18.20+ / 20+ (this project was built on Node 23)
- npm

## Commands

| Command           | Action                                             |
| ----------------- | -------------------------------------------------- |
| `npm install`     | Install dependencies                               |
| `npm run dev`     | Start the local dev server at `localhost:4321`     |
| `npm run build`   | Build the static site to `dist/`                   |
| `npm run preview` | Preview the production build locally               |

## Project structure

```
public/                 Static assets served at the root (favicon, resume.pdf)
src/
  components/           Reusable UI (Header, Footer, cards, TagList, SectionHeader, Mermaid…)
  layouts/              BaseLayout (shell) and EntryLayout (detail pages)
  pages/                Routes
    index.astro         /
    about.astro         /about
    projects/           /projects and /projects/[slug]
    blog/               /blog and /blog/[slug]
    notes/              /notes and /notes/[slug]
    architecture/       /architecture and /architecture/[slug]
  content/              Markdown/MDX content collections
    projects/  blog/  notes/  architecture/
  content.config.ts     Collection schemas (frontmatter contract)
  consts.ts             Site title, description, nav, contact links
  styles/global.css     Design tokens + all styling
astro.config.mjs        Astro + MDX config; Mermaid code-fence transform
```

## Content update workflow

All content lives in `src/content/<collection>` as Markdown (`.md`) or MDX (`.mdx`).
To add an entry, create a new file in the right folder — the filename becomes the URL slug —
with frontmatter matching the collection's schema in `src/content.config.ts`.

**Add a project** — `src/content/projects/my-project.md`:

```markdown
---
title: My Project
summary: One-line summary shown on the card.
status: draft            # draft | published
featured: false          # show on the home page
order: 4                 # sort order on /projects
tags: ["Tag A", "Tag B"]
techStack: ["Python", "PostgreSQL"]
demoUrl: https://example.com   # optional — renders a "Live Demo" link on card + page
mermaid: true                  # optional — load Mermaid runtime for embedded diagrams
updated: 2026-07-07
---

## Problem
...
## System overview
...
## My role
...
## Key engineering decisions
...
## Tradeoffs
...
```

- **`demoUrl`** (optional): when set, a "Live Demo" link appears on the project card and a
  "Live Demo" button appears on the project page. Opens in a new tab.
- **`mermaid`** (optional): set `true` to load the client-side Mermaid runtime so a fenced
  ` ```mermaid ` block in the body renders as a diagram (wrap it in `<div class="diagram">`).

**Add a blog post** — `src/content/blog/my-post.md` with `title`, `description`, `status`,
`tags`, `pubDate`.

**Add a note** — `src/content/notes/my-note.md` with `title`, `description`, `status`,
`tags`, `updated`.

**Add an architecture writeup** — `src/content/architecture/my-doc.md` with `title`,
`description`, `status`, `tags`, `updated`. Diagrams use a fenced ` ```mermaid ` code block
wrapped in a `<div class="diagram">` (see the existing example); they render client-side.

The `status` field controls the badge (`draft` / `published`). Cards, list pages, and detail
routes are generated automatically — no page code to touch.

### Resume

Drop your resume at `public/resume.pdf`, then set `RESUME_AVAILABLE = true` in
`src/consts.ts`. The Resume links (nav, home hero, About) stay hidden until you do, so there's
no public 404. See `public/README.md`.

## Deploying to Vercel

This is a static Astro site, so no adapter or configuration is required.

1. Push the repo to GitHub — this project's remote is
   <https://github.com/Ariosolzq/personal-website.git>.
2. In Vercel, **Add New → Project** and import the repo.
3. Vercel auto-detects Astro. Use the **default settings**:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. Every push to the default branch triggers a new deploy.

Alternatively, with the Vercel CLI: `npx vercel` (preview) or `npx vercel --prod`.

> Update `site` in `astro.config.mjs` to your real domain once deployed — it's used for
> canonical URLs and social metadata.

## Related: external demo

The **Auditable AI Referral** interactive demo lives in a separate repository and Vercel
deployment: <https://auditable-ai-referral-demo.vercel.app/>. This portfolio links to it from
the *Auditable AI-Assisted Patient Intake Workflow* project page (via the `demoUrl` field) — it
is intentionally **not** bundled into this site. Only sanitized, portfolio-safe descriptions of
that work are migrated here.

## Notes on privacy

All project and architecture writeups are intentionally abstracted and sanitized. They
contain no patient data, proprietary rules, production endpoints, or internal system detail.
Keep it that way when adding content.
