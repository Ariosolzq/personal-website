---
title: Agent Memory Notes
description: Notes on memory for agents — what to persist, how to recall it, and how to keep memory from going stale or wrong.
status: draft
tags: ["Agent Memory", "Architecture"]
updated: 2026-07-07
---

> Running notes.

- Separate short-term working context from durable memory; they have different lifetimes.
- Store one fact per record with a description so recall can judge relevance.
- Memory reflects what was true when written — verify before acting on it.
- Prefer explicit, inspectable memory over opaque embeddings when auditability matters.
- Garbage collection matters: wrong or stale memory is worse than no memory.

_To expand: retrieval strategies, memory schemas, and conflict resolution._
