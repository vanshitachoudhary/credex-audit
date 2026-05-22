# AI Spend Audit Tool 🚀

A modern SaaS-style web application that helps startups and developers identify unnecessary spending across AI tools like ChatGPT, Cursor, GitHub Copilot, Claude, Gemini, and more.

The platform analyzes AI tooling usage, seat allocation, and subscription plans to uncover cost optimization opportunities with estimated monthly and yearly savings.

---

## 🔗 Live Demo

https://credex-lime.vercel.app/

---

## 📌 Problem Statement

AI tooling adoption inside startups is increasing rapidly, but visibility into tooling ROI remains fragmented.

Most teams use multiple AI tools simultaneously but often have:
- No centralized visibility into AI spend
- Overlapping subscriptions across workflows
- Unused premium plans
- Underutilized seats
- No benchmark for efficient pricing

As a result, organizations frequently overspend on AI infrastructure without realizing it.

---

## 💡 Solution

AI Spend Audit Tool provides a lightweight AI infrastructure cost analysis system.

Users can:
- Add AI tools, plans, seats, and spend
- Run an instant audit of their AI stack
- Identify overpayment and inefficiencies
- Receive optimization recommendations
- Analyze monthly and yearly savings opportunities
- Review spend breakdowns in a clean dashboard

---

## ⚙️ Features

- Multi-tool AI stack auditing
- Real-time spend analysis
- Cost optimization recommendations
- Savings breakdown by tool
- AI-generated audit summaries
- Industry benchmark insights
- Spend visualization dashboard
- Premium SaaS-style responsive UI
- Shareable audit-ready reporting experience

---

## 🧠 Product Thinking

This project was designed around a simple insight:

> AI adoption is scaling faster than operational visibility into tooling efficiency.

The objective was not just building another dashboard, but creating a lightweight decision-support system for AI infrastructure cost management.

The platform helps organizations:
- identify overlapping subscriptions
- reduce unnecessary premium plans
- optimize seat allocation
- benchmark AI tooling costs
- improve operational efficiency

Key product decisions:
- Rule-based audit engine for transparent recommendations
- Instant analysis without onboarding friction
- Minimal workflow complexity for faster adoption
- Shareable audit format for stakeholder reporting
- Clear financial visibility over feature-heavy analytics

---

## 🧠 Audit Engine Logic

The audit engine evaluates:
- pricing plans
- monthly spend
- number of seats
- workflow overlap
- potential consolidation opportunities

The system calculates:
- Current Spend
- Optimized Spend
- Monthly Savings
- Estimated Yearly Savings

Example optimization logic:
- Detect duplicate premium subscriptions
- Recommend cheaper alternatives
- Suggest seat consolidation opportunities
- Identify inefficient tool combinations

---

## 🏗️ System Workflow

1. User inputs AI tools + pricing plans
2. Audit engine evaluates spend patterns
3. System compares against optimization rules
4. Savings opportunities are calculated
5. Results are displayed in a dashboard
6. AI-generated summaries explain findings

---

## 📊 Example Output

| Metric | Value |
|---|---|
| Current Spend | $120/month |
| Optimized Spend | $65/month |
| Estimated Savings | $55/month |
| Estimated Yearly Savings | $660/year |

---

## 🧩 Technical Decisions

### Frontend
- Built using Next.js App Router
- TypeScript for maintainability
- Tailwind CSS for rapid UI iteration
- Responsive dashboard-first layout

### Product Design
- Focused on clarity over complexity
- Designed premium SaaS-style UX
- Prioritized fast interactions and readability
- Built lightweight MVP architecture for scalability

### Architecture
- Audit logic separated from UI layer
- Modular tool-based analysis system
- Easily extendable recommendation engine

---

## 🧠 Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js

---

## 📂 Project Structure

```bash
/app                  → Frontend pages
/components           → Reusable UI components
/lib/auditEngine.ts   → Audit logic engine
/public               → Static assets
/styles               → Styling