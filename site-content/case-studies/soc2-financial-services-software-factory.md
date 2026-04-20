---
title: "Building a SOC 2 Type II software factory that banks would actually buy from"
slug: "soc2-financial-services-software-factory"
vertical: "financial-services"
service_line: "cybersecurity-assessments"
secondary_service_line: "fractional-cto-ciso"
client_type: "Technology consulting firm serving regulated financial services clients"
engagement_year: "2021-2025"
duration: "Three consecutive Type II attestations"
anonymized: true
featured: true
---

> Three consecutive years of SOC 2 Type II attestation on a financial services software factory. Zero loss of scope. Active engagements with a regional bank and a specialty lender.

**Client.** Technology consulting firm selling custom software development into regulated financial services. Anonymized.
**Engagement type.** Principal Consultant. Designed and led the SOC 2 program end to end.
**Duration.** Three consecutive SOC 2 Type II attestation periods, 2021 through 2025.
**Services in play.** Cybersecurity Assessments, Fractional CTO / CISO.

## Challenge

A quick primer for readers who've never had a SOC 2 report land on their desk. SOC 2 is the independent audit that banks and lenders ask for before they'll buy software or services from you. A Type I report says your controls existed on paper the day the auditor walked in. A Type II report says those same controls actually operated, every day, over a multi-month window, and an independent CPA firm has the evidence. In financial services, Type I doesn't clear procurement. Type II does.

The firm wanted to sell custom software development to banks and specialty lenders. In that market, a vendor without current SOC 2 Type II gets filtered out before the sales call. The factory model, ongoing engineering capacity sold against a master services agreement, is only viable if the vendor's own environment can pass a third-party audit across the full software development lifecycle, user access management, change control, incident response, and vendor risk management.

A consulting-shop SOC 2 is harder than a SaaS SOC 2. A SaaS company has one production environment and one codebase. A consulting shop running client engagements in parallel has multiple codebases, rotating teams, shifting client environments, and real ambiguity about where its own controls end and each client's begin. Most small firms give up here and retreat to less-regulated verticals. Without Type II, no bank engagements, no lender engagements, no differentiation.

## Approach

**Scope the program to what the factory actually does.** I drew the audit boundary around the firm's own engineering pipeline and shared infrastructure and explicitly excluded client environments. A generic SaaS template would have dragged us into auditing other people's stacks. The first real decision in a consulting-firm SOC 2 is where the line goes.

**Build the operating rhythm before anything else.** Monthly access reviews, quarterly vendor risk checks, semiannual policy reviews, dated approvals on every change, incident response tabletops on a set cadence. Type II passes or fails on whether the controls were actually operating across the audit window, not on whether they exist on paper. A healthy operating rhythm is the audit. Everything else is documentation of it.

**Stand up the compliance tooling before bringing in the auditor.** This is the sequence most first-time programs get wrong. We deployed Vanta as the compliance backbone and wired it into the identity provider, cloud accounts, code repositories, and endpoint management on day one. Drift alerts routed to a named owner. The policy pack got customized away from the stock templates that experienced auditors recognize on sight. The tool didn't create the program. The program made the tool useful.

Most organizations either skip compliance tooling ("a spreadsheet is fine for now") or buy a Vanta or Drata and never configure it past the demo script. A surprising number of firms own the right tools, on the right licenses, and still fail their audit because nobody actually knows what to do with what they already have. The findings trace back to the same root cause every time: the tool is set up, nobody is running it.

**Then pick the auditor.** Half of first-time Type II failures are scope misalignment with the auditor, discovered on day one of fieldwork when it's too late to move anything. I interviewed five CPA firms and selected the one that fit the firm's culture and objectives the best. Because Vanta was already collecting real evidence, scoping was a conversation about an existing surface, not a hypothetical one. The audit itself became a calmer exercise.

**Make the program self-sustaining by design.** By year two, most evidence collection ran through the engineering pipeline and Vanta together. Branch protection rules, tickets linked to commits, signed artifact builds, and centralized log retention produced the change-control and access-review evidence without anyone opening a spreadsheet. Vanta pulled control state continuously and surfaced drift the moment it happened. Year three's audit took less internal engineering time than year one. That's how you know the program is real rather than performed.

## Outcome

- SOC 2 Type II achieved on first attestation. No Type I precursor.
- Three consecutive years of Type II attestation without loss of scope, qualified opinion, or material finding.
- Enabled active engagements with a regional bank and a specialty lender whose procurement required current Type II attestation.
- Internal audit burden trended down year over year as the tooling and automation compounded.
- Zero material findings across the three-year span.

## Relevance

If you run a consulting firm, MSP, or software shop that wants to sell to banks or lenders, SOC 2 Type II isn't a procurement checkbox. It's a product decision. Get it wrong and the program costs more every year instead of less, while auditors quietly expand scope until you run out of engineering time to keep up.

Reach out if any of these sound familiar. You're designing a SOC 2 program and don't want to burn a year on a failed first attestation. Your existing program is consuming more internal hours year over year instead of fewer. You already own compliance tooling like Vanta or Drata and aren't sure whether you have it configured correctly, what it should be catching, or what to do with the output.
