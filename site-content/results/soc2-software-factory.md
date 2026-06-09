---
title: "Two consecutive years of SOC 2 Type II. Zero material findings."
slug: "soc2-software-factory"
meta_title: "SOC 2 Type II, zero material findings | LeWinter Advisory"
description: "SOC 2 program design for a software factory selling into banks. Two consecutive Type II attestations, zero material findings, first pass with no Type I precursor."
kicker: "Results · Financial services"
subhead: "SOC 2 program design and leadership for a consulting firm running a software factory for banks and specialty lenders. Anonymized, real, and verifiable in conversation."
order: 1
stats:
  - stat: "2 consecutive"
    line: "Type II attestation periods, back to back"
  - stat: "0"
    line: "material findings across both periods"
  - stat: "First pass"
    line: "Type II with no Type I precursor"
  - stat: "Less time"
    line: "the second audit took less internal effort than the first"
cta_label: "Start a readiness conversation"
cta_href: "/contact"
related:
  - label: "SOC 2 Readiness Sprint"
    href: "/services/soc2-readiness-sprint"
  - label: "Fractional vCISO"
    href: "/services/fractional-vciso"
---

## The situation

A quick gloss for anyone who has not had a SOC 2 report land on their desk: SOC 2 is the independent audit banks and lenders ask for before they will buy software or services from you. A Type I report says your controls existed on paper the day the auditor visited. A Type II says they actually operated, every day, over a multi-month window. In financial services, Type I does not clear procurement. Type II does.

This firm wanted to sell custom software development into exactly that market. And a consulting-shop SOC 2 is harder than a SaaS one: multiple codebases, rotating teams, client environments everywhere, and real ambiguity about where the firm's controls end and each client's begin. Most small firms give up here and retreat to less-regulated work.

## How the program ran

**Scope the boundary first.** I drew the audit line around the firm's own engineering pipeline and shared infrastructure, and explicitly excluded client environments. A generic SaaS template would have dragged the audit into other people's stacks.

**Build the operating rhythm before anything else.** Monthly access reviews, quarterly vendor checks, dated approvals on every change, incident tabletops on a set cadence. Type II passes or fails on whether controls actually operated across the window. The rhythm is the audit. Everything else is documentation of it.

**Wire the tooling before the auditor shows up.** Vanta deployed as the compliance backbone and wired into identity, cloud, repos, and endpoints on day one, with drift alerts routed to a named owner. Plenty of firms own the right tools on the right licenses and still fail, because the tool is set up and nobody is running it.

**Pick the auditor last.** Half of first-time Type II failures are scope misalignment with the auditor, discovered during fieldwork when it is too late to move anything. I interviewed five CPA firms and chose with real evidence already flowing, so scoping was a conversation about an existing surface, not a hypothetical one.

**Design for year two.** By the second period, most evidence collection ran through the engineering pipeline and the tooling together. The second audit took less internal engineering time than the first. That is how you know a program is real rather than performed.

## What held up

- Type II achieved on the first attestation, no Type I precursor.
- Two consecutive attestation periods with no loss of scope, no qualified opinion, and zero material findings.
- Cleared procurement with a regional bank and a specialty lender that required current Type II.
- Internal audit burden went down in year two, not up.

## If this is your situation

You are designing a SOC 2 program and do not want to burn a year on a failed first attestation. Your existing program is consuming more hours every year instead of fewer. Or you already own Vanta or Drata and are not sure it is configured to catch anything. Any of those is a good reason to talk.
