import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The glob loader skips files starting with `_`, so `_index.md` files are
// excluded from these collections by design. Index pages are imported
// directly in their route files.

const services = defineCollection({
  loader: glob({ pattern: ['*.md', '!_index.md'], base: './site-content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    service_line: z.string(),
    description: z.string(),
    cta_label: z.string(),
    cta_href: z.string(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: ['*.md', '!_index.md'], base: './site-content/case-studies' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    vertical: z.string(),
    service_line: z.string(),
    secondary_service_line: z.string().optional(),
    client_type: z.string().optional(),
    engagement_year: z.string().optional(),
    duration: z.string().optional(),
    anonymized: z.boolean().default(true),
    featured: z.boolean().default(false),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const shared = defineCollection({
  loader: glob({ pattern: '*.md', base: './site-content/shared' }),
  schema: z.object({}).passthrough(),
});

export const collections = { services, caseStudies, shared };
