# Static assets (`public/`)

Anything in this folder is served from the site root, unprocessed. For example,
`public/favicon.svg` is available at `/favicon.svg`.

## Add your resume

The "Resume" button in the navigation links to `/resume.pdf`.

To make it work, place your resume file here as:

```
public/resume.pdf
```

That's it — no code changes needed. The link (`RESUME_HREF` in `src/consts.ts`) already
points at `/resume.pdf`. Until you add the file, the button will 404, which is expected.

> Do not commit a resume that contains information you don't want public. This site is a
> public, static deployment.
