---
title: "IT assessment and CIS Controls roadmap for a Pacific-region resort operator"
slug: "hospitality-it-audit-cis-controls"
vertical: "hospitality"
service_line: "cybersecurity-assessments"
secondary_service_line: "it-business-transformation-advisory"
client_type: "Mid-sized resort operator in the Pacific region"
engagement_year: "2025"
duration: "Approximately six weeks, kickoff through report presentation"
anonymized: true
featured: true
---

> Full IT assessment for a mid-sized resort operator in the Pacific region. Scope expanded from a narrow Microsoft 365 investigation into a governance, infrastructure, data, and security review anchored to the CIS Controls cybersecurity framework. Delivered as a traceable matrix and a prioritized roadmap the client's IT team could execute against.

**Client.** Mid-sized resort operator in the Pacific region. Anonymized.
**Engagement type.** Principal Consultant. Led the assessment and the deliverable end to end.
**Duration.** Approximately six weeks from kickoff through report presentation. Ten business days on site.
**Services in play.** Cybersecurity Assessments, IT & Business Transformation Advisory.

## Challenge

The engagement started narrow. The original work order scoped us to investigate a handful of Microsoft 365 anomalies: Outlook inconsistencies, Excel files overwriting each other on OneDrive, user-reported behavior nobody could explain. Within the first week of technical review it was clear the M365 issues were symptoms of a broader picture. The client had aging on-premise infrastructure, no foundational IT governance, routine use of Global Admin accounts for ordinary daily email, no audit trail of who had privileged access or when they used it, and a security surface no one had ever measured.

The general manager had executive sponsorship and was prepared to act. What the organization needed was a defensible, framework-aligned picture of actual risk and a roadmap that could be sequenced and tracked. Not another vendor pitch dressed up as a report.

## Approach

**Expand scope once the narrow scope stopped making sense.** The M365 investigation stayed in play as a line of inquiry, but we rewrote the engagement into a full IT assessment covering governance, service desk, infrastructure, data, and security. Approximately 16 servers, 80 endpoints, and 15 business applications came into scope.

**Anchor remediation to the CIS Controls.** The Center for Internet Security publishes a prioritized catalog of cybersecurity safeguards known as the CIS Controls. Implementation Group 1, or IG1, is the baseline tier. It is the set of controls every organization should have in place before investing in anything more advanced: multi-factor authentication, limiting who has administrator rights, keeping systems patched and securely configured, centralizing logs so incidents can be investigated, maintaining tested off-site backups, and knowing what hardware and software actually exists on the network. That is where mid-sized operators need to be first. More advanced capabilities like endpoint detection and response, security event correlation tooling, and advanced Microsoft 365 controls come next, as capacity allows.

**Ground the assessment in real evidence.** Network vulnerability scans across three internal network segments. Forensic imaging and offline analysis of laptops and phones, with Windows disk encryption recovery keys retrieved from the users' Microsoft accounts so the drives could be opened. Firewall configuration export and log review. On-site walkthroughs of the server room, wiring closets, and guest Wi-Fi infrastructure. Stakeholder interviews with the general manager, the IT manager, and the hands-on IT technician.

**Fix what could be fixed while the audit was running.** When the firewall's management interface was found exposed to the public internet, we flagged it and IT disabled external admin access the same day. When the firewall firmware was found carrying vulnerabilities that attackers are known to be actively exploiting in the wild, we worked with IT to schedule the upgrade during the engagement. We loaned a portable log server on site to extend firewall log retention from 24 hours to a window long enough to actually investigate a security incident if one occurred. The assessment didn't wait for the final report to reduce risk.

**Deliver the report as a working document, not a shelf document.** Every finding was mapped into a traceable matrix: the finding itself, the recommended action, the specific CIS Controls it satisfies, whether it achieves full or partial IG1 coverage, and the evidence or metric that would prove the fix took. Thirty-three rows. IT was instructed to treat the matrix as a living ledger and add columns for Owner, Start and Target Dates, and Status, with monthly progress reported on the metrics that matter: how many users have MFA, what percentage of systems are fully patched, how much of the network is being logged centrally, whether backups have been test-restored, and how fast known vulnerabilities are being closed. A separate 38-item roadmap sorted every recommendation by when to start and by priority.

## Outcome

- **Full current-state IT assessment** across governance, service desk, infrastructure, data, and security, delivered to executive leadership.
- **616 vulnerabilities identified** across three internal network segments, including 177 high-severity findings on the server network alone.
- **Forensic-confirmed compromise** of one Windows laptop, where malware had arrived bundled with a 7-Zip installer the user had downloaded from a non-official source, and one Android phone, where corruption of the device's certificate store was blocking security updates and antivirus definition refreshes.
- **Critical firewall exposures closed during the engagement,** including an internet-facing management interface and firmware carrying vulnerabilities known to be actively exploited in the wild.
- **CIS Controls traceability matrix** with 33 findings, coverage flags against the IG1 baseline, and a specific evidence or metric defined for every item.
- **Prioritized 38-item roadmap** framed as a 90-day trajectory with partner support, or 120 to 180 days with internal staff augmentation.

## Relevance

If you run a mid-sized operator with legacy infrastructure, limited in-house IT, and an executive leadership team that needs a defensible picture of risk before it commits to spend, this is the kind of engagement I run.

Reach out if any of the following describes your situation. You engaged IT to fix a narrow problem and the investigation has surfaced bigger issues nobody has mapped. You have never had a framework-anchored picture of your security posture, and you are tired of vendor reports that hand you a list without a sequence. Or you have got aging infrastructure, unclear ownership, and a general manager, CFO, or board member asking the right question: what is our actual risk, and what do we do about it first.
