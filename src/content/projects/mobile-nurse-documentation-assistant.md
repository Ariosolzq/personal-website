---
title: Mobile Nurse Documentation Assistant
summary: A mobile-friendly assistant that helps nurses draft structured documentation from voice and notes, with review before anything is saved.
status: draft
featured: false
order: 3
tags: ["Human-in-the-loop", "LLM Application", "Mobile", "Healthcare Ops"]
techStack: ["TypeScript", "LLM", "Speech-to-Text", "Structured Output"]
updated: 2026-07-07
---

## Problem

Documentation is a large, repetitive part of a nurse's day, and it usually happens on the
move. Free-text notes are fast to capture but slow to standardize, and any assistant that
writes directly into a record without review is unacceptable in a clinical setting.

The goal was to reduce the friction of turning quick, informal input into clean, structured
documentation — while keeping the nurse fully in control of the final text.

## System overview

- **Capture** — voice or short text notes are captured on a mobile-friendly interface.
- **Transcription & structuring** — speech is transcribed and the model drafts structured
  documentation against a defined template.
- **Draft review** — the nurse edits the draft inline; nothing is treated as final until it is
  explicitly confirmed.
- **Confirmation** — only reviewed, confirmed content is exported downstream.

## My role

I worked on the application layer and the structured-output flow: the capture-to-draft
pipeline, the template-constrained generation, and the review interaction that keeps the
human as the final author.

## Key engineering decisions

- **Draft, never final.** Output is always a draft for review. The assistant accelerates
  writing; it does not author the record.
- **Template-constrained generation.** Structuring against a fixed template keeps output
  consistent and easy to check.
- **Mobile-first interaction.** The review step is designed for small screens and quick edits,
  since that is where the work actually happens.

## Tradeoffs

- Voice input quality varies; transcription review is a necessary step, not an optional one.
- Template constraints improve consistency but need updating as documentation needs change.
- Requiring explicit confirmation adds a step, accepted in exchange for correctness and trust.

> Case study is abstracted and sanitized. It contains no patient data, production endpoints,
> or internal system details.
