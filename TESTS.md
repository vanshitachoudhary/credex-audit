# TESTS — AI Spend Audit Tool

This document lists all automated tests for the Audit Engine.

The goal is to ensure:
- Correct spend calculation
- Correct optimization logic
- No negative or inflated savings
- Seat-based pricing accuracy

---

## 🧪 Test Setup

Tests are written in simple JavaScript (or TypeScript-compatible logic tests).

Run manually or via Node:

```bash
node tests/auditEngine.test.js