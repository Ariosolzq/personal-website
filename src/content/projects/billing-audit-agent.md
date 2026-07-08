---
title: Billing Audit Agent / Workflow Automation
summary: An agentic workflow that reviews billing and claims data against payer rules and surfaces exceptions for human sign-off.
status: draft
featured: true
order: 2
tags: ["Agentic Workflow", "Reliability", "Auditability", "Healthcare Ops"]
techStack: ["Python", "LangGraph", "PostgreSQL", "Rule Engine", "LLM"]
updated: 2026-07-07
---

## Problem

Billing and claims review involves checking many records against evolving payer rules and
denial codes. Manual review does not scale well, and purely automated adjustments are risky:
a wrong write-off or resubmission has financial and compliance consequences.

The goal was to automate the repetitive detection work while keeping a person accountable for
any action that changes a record.

## System overview

The system is an agentic workflow with bounded, verifiable steps rather than a single
open-ended agent loop.

- **Data assembly** — relevant claims, adjustments, and denial/remark codes are gathered into
  a normalized view.
- **Deterministic checks** — rule logic flags mismatches, missing data, and known
  denial patterns before any model call.
- **LLM reasoning (scoped)** — the model explains flagged cases and proposes a next action,
  constrained to a fixed set of allowed outcomes.
- **Exception queue** — proposed actions are queued for a reviewer with the supporting
  evidence attached.
- **Human sign-off + audit trail** — a reviewer approves or rejects; the decision and its
  rationale are recorded.

## My role

I built the workflow orchestration, the deterministic rule checks, and the exception queue
that connects automated findings to human review, along with the audit data model.

## Key engineering decisions

- **Bounded actions.** The agent selects from an explicit, enumerated set of outcomes rather
  than generating free-form changes, which keeps behavior predictable and reviewable.
- **Rules before models.** Deterministic checks handle the well-understood cases; the model is
  reserved for explanation and ambiguous ones.
- **Everything is queued, nothing auto-commits.** No record changes without human approval.
- **Evidence-first review.** Each exception carries the data and codes that triggered it, so a
  reviewer can decide quickly and correctly.

## Tradeoffs

- Enumerated actions cover the common cases well but need extension as new scenarios appear.
- Requiring sign-off on every change limits full automation — a deliberate choice given the
  cost of an incorrect financial action.
- Maintaining rule logic against changing payer requirements is ongoing work.

> Case study is abstracted and sanitized. It contains no proprietary rules, payer contracts,
> production endpoints, or real financial data.
