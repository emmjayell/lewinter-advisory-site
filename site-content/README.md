# site-content

Source of truth for every word on lewinteradvisory.com.

Each page on the site maps to one markdown file here. Deployment code (Astro + Tailwind + Cloudflare Pages) reads this folder, parses the YAML frontmatter for page metadata, and renders the markdown body as page content.

## Structure

```
site-content/
  README.md                         (this file)
  home.md                           Home page
  about.md                          About page
  contact.md                        Contact page
  services/
    _index.md                       Services overview page
    cybersecurity-assessments.md
    client-data-privacy-compliance.md
    enterprise-architecture-data.md
    it-business-transformation-advisory.md
    fractional-cto-ciso.md
  case-studies/
    _index.md                       Case studies overview page
    soc2-financial-services-software-factory.md
    hospitality-it-audit-cis-controls.md
  shared/
    nav.md                          Nav labels and link targets
    footer.md                       Footer copy
    seo.md                          Default SEO title, description, OG
```

## Edit protocol

Mike edits these files directly. Any file Mike has touched is Mike-authoritative. When Claude needs to change one of these files, Claude asks first or proposes a diff. Claude does not silently overwrite Mike's wording.

When the deployment code changes in ways that require a frontmatter field to be added or renamed, the change goes into this README first, then into the files, with Mike's sign-off.

## Frontmatter contract

Every file has YAML frontmatter. Shared fields:

- `title`: H1 on the page, also default HTML title
- `slug`: URL path segment. Omit on home and _index files.
- `description`: meta description for SEO and social cards (140 to 160 chars)
- `draft`: `true` hides from build. Default `false`.

Service pages also have:

- `service_line`: stable slug used to cross-link from case studies
- `cta_label` and `cta_href`: the primary call to action

Case studies also have:

- `vertical`: e.g. `financial-services`, `hospitality`, `retail`, `manufacturing`, `life-sciences`, `regulated-mid-market`
- `service_line`: primary service line the case study proves
- `secondary_service_line`: optional
- `anonymized`: `true` unless the client has given written approval to be named
- `featured`: `true` puts the case study on the home page

## Slug lists, with readable labels

Some files (`home.md`, `services/_index.md`, `case-studies/_index.md`) contain ordered lists of slugs that point to other files: `featured_services`, `featured_case_studies`, `service_order`, `case_study_order`. Each entry in those lists is followed by a YAML inline comment giving the human-readable label, so the list is easy to read when editing by hand:

```
featured_services:
  - cybersecurity-assessments            # Cybersecurity Assessments
  - client-data-privacy-compliance       # Client Data Privacy and Compliance
```

The deployment code parses the slugs and ignores the comments. When adding or reordering, keep the comment up to date so the file stays self-explanatory.

## Deployment handoff

When ready to build the site, the deployment code will:

1. Read every `.md` file in this folder.
2. Route each file to its URL based on its path:
   - `home.md` → `/`
   - `about.md` → `/about`
   - `contact.md` → `/contact`
   - `services/_index.md` → `/services`
   - `services/<name>.md` → `/services/<name>`
   - `case-studies/_index.md` → `/work`
   - `case-studies/<name>.md` → `/work/<name>`
3. Pull nav, footer, and SEO defaults from `shared/`.
4. Pull brand tokens (Geist typeface, teal `#2A9D9D`, ink `#1A1A1A`) from site config, not from this folder.

## Assets

Images go in `site-content/assets/`. Right now the only asset is the AI-generated headshot used on the about page, which Mike will drop in as `assets/headshot.jpg`.

Logo files live at the repo root (`lewinter-advisory-logo-light.png`, `lewinter-advisory-logo-dark.png`, `lewinter-advisory-logo-mono-white.png`), not in site-content.
