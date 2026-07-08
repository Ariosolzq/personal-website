import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Content collections for the site. Each collection is backed by Markdown/MDX
 * files under `src/content/<name>`. Schemas below are the single source of
 * truth for a card's structured metadata — narrative sections (Problem, System
 * overview, etc.) live in the file body as Markdown.
 */

const status = z.enum(['draft', 'published']).default('draft');

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status,
    tags: z.array(z.string()).default([]),
    techStack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(999),
    updated: z.coerce.date().optional(),
    /** Optional external live-demo URL rendered as a "Live Demo" link. */
    demoUrl: z.string().url().optional(),
    /** Opt in to the client-side Mermaid runtime for embedded diagrams. */
    mermaid: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status,
    tags: z.array(z.string()).default([]),
    pubDate: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status,
    tags: z.array(z.string()).default([]),
    updated: z.coerce.date().optional(),
  }),
});

const architecture = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/architecture' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status,
    tags: z.array(z.string()).default([]),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { projects, blog, notes, architecture };
