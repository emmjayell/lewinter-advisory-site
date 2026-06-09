// Single source of truth for the four practice pillars and the solutions
// beneath each. Consumed by the /services page (full cards with solution rows)
// and the home page "What I do" section (compact cards linking into /services).
//
// A solution row links to a real detail page where one exists, otherwise to a
// section anchor on the parent pillar page. Anchor slugs are the GitHub-style
// heading ids Astro auto-generates from the pillar markdown headings; they are
// verified against the built pages, so changing a pillar heading means updating
// the matching href here.
//
// Gating: "Advisory-Led Managed Services" is intentionally omitted until a real
// partner agreement (capability, SLA, escalation) exists. Only the
// ongoing-advisory solutions ship now.

export interface SolutionRow {
  label: string;
  glyph: string; // /graphics/solutions/<slug>.svg
  href: string; // detail page, or /services/<pillar>#<heading-id>
}

export interface Pillar {
  id: string; // anchor on /services, e.g. "cybersecurity"
  aliasId?: string; // legacy anchor kept as a secondary target for old links
  name: string;
  oneLiner: string;
  icon: string; // /graphics/icon-*.svg
  href: string; // /services/<pillar-slug>
  solutions: SolutionRow[];
}

const PILLAR = '/services';
const GLYPH = '/graphics/solutions';
const ICON = '/graphics';

export const pillars: Pillar[] = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity, Risk, Compliance & Privacy',
    oneLiner: 'Security and compliance that hold up when someone checks.',
    icon: `${ICON}/icon-cybersecurity-compliance.svg`,
    href: `${PILLAR}/cybersecurity-risk-compliance-privacy`,
    solutions: [
      {
        label: 'Security Posture Assessment',
        glyph: `${GLYPH}/security-posture-assessment.svg`,
        href: `${PILLAR}/security-posture-assessment`,
      },
      {
        label: 'SOC 2 Readiness Sprint',
        glyph: `${GLYPH}/soc2-readiness-sprint.svg`,
        href: `${PILLAR}/soc2-readiness-sprint`,
      },
      {
        label: 'Website & Digital Privacy Review',
        glyph: `${GLYPH}/website-digital-privacy-review.svg`,
        href: `${PILLAR}/website-digital-privacy-review`,
      },
      {
        label: 'Manufacturing / OT Assessment',
        glyph: `${GLYPH}/manufacturing-ot-assessment.svg`,
        href: `${PILLAR}/manufacturing-ot-assessment`,
      },
    ],
  },
  {
    id: 'incident-response',
    name: 'Incident Response & Resilience',
    oneLiner: 'Be ready before it happens. Someone in command when it does.',
    icon: `${ICON}/icon-incident-response.svg`,
    href: `${PILLAR}/incident-response-resilience`,
    solutions: [
      {
        label: 'Incident Response Coordination',
        glyph: `${GLYPH}/incident-response-coordination.svg`,
        href: `${PILLAR}/incident-response-coordination`,
      },
      {
        label: 'IR Plan Development',
        glyph: `${GLYPH}/ir-plan-development.svg`,
        href: `${PILLAR}/incident-response-resilience#prepare-incident-response-plan-development`,
      },
      {
        label: 'Tabletop Exercise',
        glyph: `${GLYPH}/tabletop-exercise.svg`,
        href: `${PILLAR}/incident-response-resilience#rehearse-tabletop-exercise`,
      },
    ],
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure, Transformation & AI',
    oneLiner: 'Modernize, build, and adopt new technology without breaking what works.',
    icon: `${ICON}/icon-infrastructure-ai.svg`,
    href: `${PILLAR}/infrastructure-transformation-ai`,
    solutions: [
      {
        label: 'Software Selection & Implementation',
        glyph: `${GLYPH}/software-selection.svg`,
        href: `${PILLAR}/infrastructure-transformation-ai#software-selection-and-implementation-leadership`,
      },
      {
        label: 'Responsible AI Adoption',
        glyph: `${GLYPH}/ai-adoption.svg`,
        href: `${PILLAR}/infrastructure-transformation-ai#responsible-ai-adoption`,
      },
    ],
  },
  {
    id: 'fractional-leadership',
    aliasId: 'managed-services', // legacy anchor, in case anything links to #managed-services
    name: 'Fractional Leadership & Ongoing Advisory',
    oneLiner: 'Getting it right once is good. Keeping it right is the whole point.',
    icon: `${ICON}/icon-managed-services.svg`,
    href: `${PILLAR}/managed-services-advisory`,
    solutions: [
      {
        label: 'Fractional vCISO',
        glyph: `${GLYPH}/fractional-vciso.svg`,
        href: `${PILLAR}/fractional-vciso`,
      },
      {
        label: 'Fractional CTO',
        glyph: `${GLYPH}/fractional-cto.svg`,
        href: `${PILLAR}/infrastructure-transformation-ai#fractional-cto--technology-leadership`,
      },
      {
        label: 'Audit-Ready Continuation',
        glyph: `${GLYPH}/audit-continuation.svg`,
        href: `${PILLAR}/managed-services-advisory#audit-continuation--annual-maintenance`,
      },
      {
        label: 'Advisory Hours',
        glyph: `${GLYPH}/advisory-hours.svg`,
        href: `${PILLAR}/managed-services-advisory#advisory-hours`,
      },
      {
        label: 'Executive Briefings',
        glyph: `${GLYPH}/executive-briefings.svg`,
        href: `${PILLAR}/managed-services-advisory#executive--board-security-briefing`,
      },
    ],
  },
];
