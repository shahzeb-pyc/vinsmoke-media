# Security Policy

## Introduction

Vinsmoke Media is committed to ensuring the security and integrity of our users' data. This security policy outlines our procedures for handling security vulnerabilities and our disclosure policy.

## Scope

We cover the following scope for vulnerability disclosures:

- This repository: [`shahzeb-pyc/vinsmoke-media`](https://github.com/shahzeb-pyc/vinsmoke-media)

Vulnerabilities in third-party dependencies or user-hosted infrastructure are outside of this scope.

Vinsmoke Media is a fork of the open-source Postiz project. Vulnerabilities that also affect upstream Postiz should be reported to upstream as well; this policy covers only the Vinsmoke Media fork and its deployment.

## Supported Versions

This project currently only supports the latest release. We recommend that users always use the latest version of Vinsmoke Media to ensure they have the latest security patches.

## What We Consider a Vulnerability

We consider an issue a vulnerability when it is a weakness in an in-scope, supported product that can be exploited to impact the confidentiality, integrity, or availability of the product or its users' data, or that violates the product's security policy.

**In scope:**

- A demonstrable security impact, privilege escalation, data exposure, integrity violation, or loss of availability, in a supported product.
- Insecure default configurations shipped by Vinsmoke Media.

**Not a vulnerability:**

- Reports with no demonstrable security impact, or theoretical issues with no working proof of concept.
- Misconfiguration or non-default changes on a self-hosted instance (exposed database, missing TLS, weak operator-set secrets); these fall outside [Scope](#scope).
- Third-party dependency issues, unless Vinsmoke Media's own use of the dependency is independently exploitable. Updating a dependency is not itself a vulnerability.
- Denial-of-service, brute-force, or resource-exhaustion attacks absent a missing common defense.
- Issues requiring physical or local access to a machine the user already controls.
- Social engineering, phishing, or self-inflicted issues (e.g., self-XSS).
- Missing hardening (security headers, cookie flags) with no demonstrated exploitable impact.
- Reports affecting only end-of-life or unsupported versions (see [Supported Versions](#supported-versions)).

## Reporting Security Vulnerabilities

If you discover a security vulnerability in Vinsmoke Media, report it privately through GitHub's private vulnerability reporting on this repository (Security tab → "Report a vulnerability"). Please provide as much detail as possible, including:

- A clear description of the vulnerability
- Proof of concept (PoC), where possible
- Steps to reproduce the vulnerability
- Any relevant code or configuration files

Do not open a public issue for a vulnerability.

### AI Reports

Reports that appear to be LLM-generated without meaningful human analysis, typically lacking a working proof of concept, reproducible steps, or accurate impact assessment, will be closed without detailed response.

Reports that include AI-assisted analysis are welcome provided they have been validated by the reporter and include a proof of concept, reproduction steps, and impact assessment.

## Coordinated Disclosure

We follow a coordinated (private) disclosure model and will not publicly disclose a vulnerability until a fix or mitigation is available, to prevent exploitation before a patch is released. We ask reporters to operate the same way:

- Report privately through the channel above and do not publicly disclose, share, or discuss the issue, including partial details or proof-of-concept, until we have released a fix and published the corresponding advisory.
- Allow a reasonable remediation window per the timelines below, and coordinate the public disclosure date with us.
- Avoid harming users, degrading service, or accessing or modifying data that is not your own while researching or demonstrating the issue.
- Validate any AI-assisted analysis before submitting (see [AI Reports](#ai-reports)).

During the embargo we will not confirm, deny, or discuss specifics of an unpatched vulnerability publicly. Reporters who follow this process are credited in the published advisory, unless they request otherwise.

## Response Process and Timelines

For every report we investigate and verify the issue, develop a fix or mitigation, release it as soon as possible, and notify users through a published advisory. We aim to follow these timelines:

- **Initial Acknowledgment:** Within 72 hours of initial report.
- **Completed Triage / Verification:** Within 7 days of initial acknowledgment.
- **Critical Issue Remediation:** Within 90 days of completed triage.
- **Non-Critical Issue Remediation:** Within 180 days of completed triage.

## CVE Identifiers

Vinsmoke Media is not a CVE Numbering Authority (CNA) and does not assign CVE IDs. If a confirmed vulnerability qualifies for a CVE, one may be requested through the usual public channels (e.g., GitHub's CVE request flow or the CVE Program); we will cooperate with that process, but we do not operate it.
