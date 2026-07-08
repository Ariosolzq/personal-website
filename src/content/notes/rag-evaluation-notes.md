---
title: RAG Evaluation Notes
description: Notes on evaluating retrieval-augmented generation — separating retrieval quality from generation quality, and measuring faithfulness.
status: draft
tags: ["RAG", "Evaluation", "Retrieval"]
updated: 2026-07-07
---

> Running notes.

- Measure retrieval and generation **separately** — end-to-end scores hide which stage fails.
- Retrieval: recall of the passages that actually support the answer, not just similarity.
- Generation: faithfulness (grounded in sources) vs. helpfulness (answers the question).
- Track refusal behavior — a correct "not enough support" is a good outcome, not a failure.
- Build a small labeled set early; a rough eval beats vibes.

_To expand: metrics, building eval sets, and offline vs. online evaluation._
