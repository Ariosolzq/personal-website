/** Site-wide constants used for SEO metadata and navigation. */

export const SITE_TITLE = 'Ziqi Lin';

export const SITE_DESCRIPTION =
  'AI Systems and Data Engineering portfolio focused on reliable AI-assisted workflows, human-in-the-loop systems, and production evaluation.';

export const POSITIONING =
  'I build reliable AI-assisted systems for real-world workflows, with a focus on human-in-the-loop review, auditability, evaluation, and production reliability.';

/** Primary navigation. `resume` points at a static file the owner drops in later. */
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Notes', href: '/notes' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'About', href: '/about' },
];

export const RESUME_HREF = '/resume.pdf';

/**
 * Resume links show when `public/resume.pdf` exists. The file is committed, so
 * this is enabled.
 */
export const RESUME_AVAILABLE = true;

export const CONTACT_LINKS: { label: string; href: string }[] = [
  { label: 'Email', href: 'mailto:linziqi1229@outlook.com' },
  { label: 'GitHub', href: 'https://github.com/Ariosolzq' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ziqi-lin-lzq' },
];
