import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The glob loader skips files starting with `_`, so `_index.md` files are
// excluded from these collections by design. Index pages are imported
// directly in their route files.

// One collection holds both practice pillars (type: 'pillar') and the
// productized hero offerings beneath them (type: 'service'). A service points
// at its parent pillar via `pillar` (the pillar's slug); a pillar lists its
// children by filtering services on that field.
const services = defineCollection({
  loader: glob({ pattern: ['*.md', '!_index.md'], base: './site-content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    type: z.enum(['pillar', 'service']),
    pillar: z.string().optional(), // service: parent pillar slug
    pillar_letter: z.string().optional(), // 'A'..'D', orders the pillars
    eyebrow: z.string(),
    subhead: z.string(),
    description: z.string(),
    card_blurb: z.string().optional(), // short line used in pillar/related cards
    cta_label: z.string(),
    cta_href: z.string(),
    cta_microcopy: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().optional(),
    // v3 additions
    meta_title: z.string().optional(), // overrides the <title> tag verbatim
    hide_hero_cta: z.boolean().optional(), // drop the CTA in the hero (keep the closing one)
    engagement: z
      .object({
        structure: z.string(),
        you_get: z.string(),
        afterward: z.string(),
      })
      .optional(), // quiet parameter strip above the closing CTA
  }),
});

// Engagement detail pages under /results. Outcome-first, with a stat row and a
// prose body rendered through Astro's content renderer.
const results = defineCollection({
  loader: glob({ pattern: ['*.md', '!_index.md'], base: './site-content/results' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    meta_title: z.string(),
    description: z.string(),
    kicker: z.string(),
    subhead: z.string(),
    order: z.number().optional(),
    stats: z.array(z.object({ stat: z.string(), line: z.string() })),
    cta_label: z.string(),
    cta_href: z.string(),
    related: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
  }),
});

const shared = defineCollection({
  loader: glob({ pattern: '*.md', base: './site-content/shared' }),
  schema: z.object({}).passthrough(),
});

export const collections = { services, results, shared };
