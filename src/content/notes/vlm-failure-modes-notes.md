---
title: VLM Failure Modes Notes
description: Notes on where vision-language models break on real documents — layout, low quality, hallucinated structure, and confident errors.
status: draft
tags: ["VLM", "Document AI", "Reliability"]
updated: 2026-07-07
---

> Running notes.

- Layout confusion: values read from the wrong column, row, or region.
- Low input quality (scans, faxes, skew) degrades extraction quietly.
- Hallucinated structure: inventing fields or table cells that are not there.
- Confident-but-wrong reads are the dangerous ones — confidence is not accuracy.
- Mitigations: layout-aware parsing, validation rules, and grounded human review of low-confidence fields.

_To expand: concrete failure examples and detection strategies._
