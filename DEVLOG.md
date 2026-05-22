# DEVLOG — AI Spend Audit Tool

This log tracks 7 days of building the AI Spend Audit Tool for the Credex internship assignment.

---

## Day 1 — 2026-05-20
**Hours worked:** 2

**What I did:**
- Understood the assignment scope
- Explored AI tools pricing (ChatGPT, Cursor, Copilot, Claude)
- Initialized Next.js project with Tailwind setup

**What I learned:**
- AI tool pricing varies significantly by plan and usage type
- Problem is more about “overbuying plans” than total usage

**Blockers:**
- Confusion about how deep audit logic should be

**Plan for tomorrow:**
- Build basic UI for tool input system

---

## Day 2 — 2026-05-21
**Hours worked:** 3

**What I did:**
- Built input form for adding AI tools
- Designed basic state structure for tool stack
- Started thinking about audit engine logic

**What I learned:**
- State structure must be normalized early to avoid refactor later

**Blockers:**
- Unsure how to model pricing comparison cleanly

**Plan for tomorrow:**
- Implement basic audit calculation engine

---

## Day 3 — 2026-05-22
**Hours worked:** 4

**What I did:**
- Built audit engine (rule-based comparison system)
- Implemented pricing baseline mapping
- Connected UI → audit output

**What I learned:**
- Deterministic logic is better than AI for financial calculations
- Keeping pricing data separate improves clarity

**Blockers:**
- Edge cases in seat-based pricing calculations

**Plan for tomorrow:**
- Improve result UI and breakdown display

---

## Day 4 — 2026-05-23
**Hours worked:** 3

**What I did:**
- Built results dashboard UI
- Added savings breakdown per tool
- Improved UX layout for readability

**What I learned:**
- Users care more about “total savings” than technical breakdown

**Blockers:**
- Making UI feel clean without overdesigning

**Plan for tomorrow:**
- Add shareable result structure

---

## Day 5 — 2026-05-24
**Hours worked:** 2

**What I did:**
- Structured result data for shareable output
- Added logic for high-savings detection
- Cleaned audit engine output format

**What I learned:**
- Clear data structure is key for scaling UI + sharing features

**Blockers:**
- None major

**Plan for tomorrow:**
- Improve documentation + architecture clarity

---

## Day 6 — 2026-05-25
**Hours worked:** 3

**What I did:**
- Wrote ARCHITECTURE.md
- Defined system flow and design decisions
- Cleaned separation of logic and UI

**What I learned:**
- Separation of concerns makes debugging much easier

**Blockers:**
- Deciding how much complexity to include in MVP

**Plan for tomorrow:**
- Final polish + testing

---

## Day 7 — 2026-05-26
**Hours worked:** 2

**What I did:**
- Final UI polishing
- Checked audit calculations
- Completed all required documentation files

**What I learned:**
- Shipping a complete product requires documentation as much as code

**Blockers:**
- None

**Final Status:**
MVP completed and ready for submission.