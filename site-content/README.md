# site-content

Source of truth for every word on lewinteradvisory.com.

Each page on the site maps to a markdown file here. The Astro build reads this folder, parses YAML frontmatter for page metadata, and renders the markdown body (and, for the home and services-overview pages, structured frontmatter) as page content.

The site is organized around the GTM positioning brief: **two doors** (forced vs. chosen), **four practice pillars** above the catalog, and a set of **hero service pages** beneath the pillars.

## Structure

```
site-content/
  README.md                         (this file)
  home.md                           Home page — two-door hero, all sections in frontmatter
  about.md                          About page — bio + the advisory-led prime model
  contact.md                        Contact page
  privacy.md                        Privacy page
  services/
    _index.md                       Services overview — four pillar cards + closing CTA
    cybersecurity-risk-compliance-privacy.md   Pillar A
    incident-response-resilience.md             Pillar B
    infrastructure-transformation-ai.md         Pillar C
    managed-services-advisory.md                Pillar D
    fractional-vciso.md                         hero service (Pillar A)
    security-posture-assessment.md              hero service (Pillar A)
    soc2-readiness-sprint.md                    hero service (Pillar A)
    website-digital-privacy-review.md           hero service (Pillar A)
    manufacturing-ot-assessment.md              hero service (Pillar A)
    incident-response-coordination.md           hero service (Pillar B)
  shared/
    nav.md                          Nav labels and link targets
    footer.md                       Footer copy
    seo.md                          Default SEO title, description, OG
```

## Voice and house rules

- **We/I split (deliberate, do not "fix"):** the brand speaks as *we* in the H1 slogan; Mike speaks as *I* wherever a real person is doing the work.
- **No em-dashes.** Use commas or periods.
- **No pricing anywhere on the public site.** Pricing is handled in conversation, not on the page. (The former "Starts at $4,000" anchor on home Door 2 and the Security Posture Assessment page has been removed pending a decision to publish prices.)
- **Honesty rule (managed services):** `managed-services-advisory.md` must never imply an in-house 24/7 SOC or helpdesk. The full advisory-led managed-services program copy stays gated (see the HTML comment in that file) until a real partner agreement with a defined SLA and escalation model exists.
- Every page should pass **Practical · Defensible · Built to hold up under scrutiny.**

## Edit protocol

Mike edits these files directly. Any file Mike has touched is Mike-authoritative. When Claude changes one of these files, it proposes the change rather than silently overwriting Mike's wording. Frontmatter contract changes go into this README first.

## Frontmatter contract

Shared fields:

- `title`: H1 on the page (home and about use a headline here; the SEO title is set separately in those routes).
- `slug`: URL path segment. Omit on `home.md`.
- `description`: meta description for SEO and social cards.
- `draft`: `true` hides from build. Default `false`.

Services collection (`services/*.md`, both pillars and hero pages) — see `src/content.config.ts`:

- `type`: `'pillar'` or `'service'`.
- `pillar`: (service only) slug of the parent pillar. A pillar page lists its children by matching this.
- `pillar_letter`: (pillar only) `A`–`D`, orders the pillars on the overview.
- `eyebrow`: short practice/offering label shown above the H1 and as the breadcrumb.
- `subhead`: hero subhead.
- `card_blurb`: short line used in pillar "Where to start" and sibling cards.
- `cta_label`, `cta_href`, `cta_microcopy` (optional): the primary call to action.
- `order`: orders hero services within a pillar.

`home.md` and `services/_index.md` carry their full section content as **structured frontmatter** (doors, blocks, situations, etc.); the page components render it directly. The markdown body in those two files is reference-only.

## Routing

- `home.md` → `/`
- `about.md` → `/about`
- `contact.md` → `/contact`
- `privacy.md` → `/privacy`
- `services/_index.md` → `/services`
- `services/<name>.md` → `/services/<name>` (pillars and hero pages share this flat namespace; the route branches on `type`)

Nav, footer, and SEO defaults come from `shared/`. Brand tokens (Geist typeface, teal `#2A9D9D`, ink `#1A1A1A`) live in `src/styles/global.css`, not here.

## Assets

Site images live in `public/assets/` (headshot, logo). Favicons live in `public/`.
