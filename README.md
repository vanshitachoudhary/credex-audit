# AI Spend Audit Tool 🚀

A free web app that helps startups and developers identify overspending across AI tools like ChatGPT, Cursor, GitHub Copilot, and others.

It analyzes your AI stack and suggests cost optimizations with estimated monthly and yearly savings.

---

## 🔗 Live Demo
https://your-deployment-link.com

---

## 📌 Problem Statement

Most startups and developers use multiple AI tools but have:
- No visibility into total AI spend
- No benchmark for correct pricing plans
- No awareness of cheaper alternatives

As a result, teams often overpay for unused or inefficient plans.

---

## 💡 Solution

AI Spend Audit Tool allows users to:
- Add their AI tools, plans, seats, and monthly spend
- Run an instant cost optimization audit
- See where they are overpaying
- Get actionable recommendations
- View total monthly + yearly savings

---

## ⚙️ Features

- Add multiple AI tools (ChatGPT, Cursor, Copilot, etc.)
- Real-time audit engine
- Cost optimization logic based on pricing benchmarks
- Breakdown of savings per tool
- Total savings summary
- Shareable result-ready UI (designed for virality)

---

## 🧠 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind / Custom CSS
- Node.js (logic layer)

---

## 🏗️ How It Works

1. User inputs AI tools + plans + spend
2. Audit engine compares against baseline pricing
3. System calculates:
   - Overpayment
   - Optimized spend
   - Savings potential
4. Results are displayed in a clean dashboard

---

## 🧩 Key Decisions

- Used rule-based audit engine instead of AI for core logic (ensures accuracy)
- Kept UI minimal to focus on clarity of financial insights
- Prioritized speed and instant feedback over complex workflows
- Designed shareable result format for viral distribution
- Stored logic separately from UI for maintainability

---

## 📊 Example Output

- Current Spend: $120/month  
- Optimized Spend: $60/month  
- Savings: $60/month (~50%)

---

## 🚀 Future Improvements

- Add real-time pricing API integration
- Expand AI tools database
- Add user accounts and history
- PDF export of audit reports
- Benchmarking vs similar companies

---

## 📂 Project Structure

- `/app` → Frontend UI
- `/lib/auditEngine.ts` → Core audit logic
- `/components` → UI components (if any)

---

## 🧪 Status

MVP Complete — functional end-to-end audit flow working.

---

## 👨‍💻 Author

Built as part of Credex Web Development Internship Assignment.