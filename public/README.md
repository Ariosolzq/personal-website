# Static assets (`public/`)

Anything in this folder is served from the site root, unprocessed. For example,
`public/favicon.svg` is available at `/favicon.svg`.

## Add your resume

The Resume links are currently **hidden** because this file does not exist yet.

To enable them:

1. Place your resume here as:

   ```
   public/resume.pdf
   ```

2. In `src/consts.ts`, set `RESUME_AVAILABLE = true`.

The Resume links (nav, home hero, About) all read that flag and will reappear pointing at
`/resume.pdf` (`RESUME_HREF`). Keeping them hidden until the file exists avoids a public 404.

> Do not commit a resume that contains information you don't want public. This site is a
> public, static deployment.
