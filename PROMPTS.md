# PROMPTS — AI Spend Audit Tool

This document contains the prompts used in the AI Spend Audit Tool, specifically for generating the personalized summary section of the audit report.

The core audit logic is rule-based. AI is only used for narrative summarization.

---

## 🧠 Primary Prompt (Audit Summary Generator)

### Purpose:
Generate a short personalized summary (~100 words) based on the user’s AI tool spending audit.

---

### Prompt:

You are a SaaS cost optimization assistant.

Given the following AI tool usage data, write a clear, concise 100-word summary for the user.

Your goal is to:
- Explain where the user is overpaying (if applicable)
- Highlight key inefficiencies
- Keep tone professional and neutral (not alarmist)
- Avoid making up pricing or facts not present in the input
- If user is already optimized, acknowledge that positively

User Data:
{{AUDIT_JSON}}

Output format:
- 1 short paragraph (~100 words)
- No bullet points
- No headings

---

## 🧠 Fallback Prompt (When API Fails)

### Purpose:
Used when LLM API fails or is unavailable.

---

### Prompt:

Write a short summary based on the user's AI tool spending data.

Keep it simple, professional, and under 100 words.

Focus on:
- total spend overview
- whether user is overpaying or optimized
- general recommendation to review AI tool stack periodically

---

## ⚙️ Design Decisions

### 1. Why AI is only used for summaries
Core financial logic must be deterministic to ensure accuracy. AI is not reliable for pricing calculations.

---

### 2. Why strict word limit
Ensures consistent UI layout and readability across all audit results.

---

### 3. Why structured input (JSON)
Prevents hallucination and ensures AI only uses verified computed data.

---

## 🧠 Example Input

```json
{
  "totalSpend": 120,
  "optimizedSpend": 70,
  "savings": 50,
  "tools": [
    {
      "name": "ChatGPT",
      "plan": "Plus",
      "spend": 20
    }
  ]
}