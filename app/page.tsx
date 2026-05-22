"use client";

import { useState } from "react";

type Tool = {
  name: string;
  plan: string;
  spend: number;
  seats: number;
  useCase: string;
};

const TOOL_OPTIONS: Record<string, string[]> = {
  ChatGPT: ["Plus", "Team", "Enterprise"],
  Cursor: ["Hobby", "Pro", "Business"],
  "GitHub Copilot": ["Individual", "Business", "Enterprise"],
  Claude: ["Free", "Pro", "Max"],
  Gemini: ["Pro", "Ultra"],
};

export default function Home() {
  const [tool, setTool] = useState<Tool>({
    name: "ChatGPT",
    plan: "Plus",
    spend: 20,
    seats: 1,
    useCase: "coding",
  });

  const [tools, setTools] = useState<Tool[]>([]);
  const [result, setResult] = useState<any>(null);

  // ADD TOOL
  const addTool = () => {
    setTools([...tools, tool]);
  };

  // AUDIT ENGINE
  const runAudit = () => {
    let totalSpend = 0;
    let optimizedSpend = 0;

    const breakdown: any[] = [];

    tools.forEach((t) => {
      const current = t.spend * t.seats;

      let optimized = current;

      let reason =
        "Your pricing is currently aligned with standard vendor pricing.";

      // CHATGPT
      if (t.name === "ChatGPT" && t.plan === "Plus") {
        if (t.seats >= 2) {
          optimized = t.seats * 15;

          reason =
            "Shared workflows and consolidated access could reduce multiple Plus subscriptions.";
        }
      }

      // CURSOR
      if (t.name === "Cursor" && t.useCase === "coding") {
        optimized = current - 10;

        reason =
          "GitHub Copilot may offer similar coding assistance at a lower monthly cost.";
      }

      // CLAUDE
      if (t.name === "Claude" && t.plan === "Pro") {
        optimized = current - 5;

        reason =
          "Mixed-model workflows may reduce reliance on premium Claude usage.";
      }

      if (optimized < 0) optimized = 0;

      totalSpend += current;
      optimizedSpend += optimized;

      breakdown.push({
        tool: t.name,
        current,
        optimized,
        savings: current - optimized,
        reason,
      });
    });

    setResult({
      totalSpend,
      optimizedSpend,
      savings: totalSpend - optimizedSpend,
      breakdown,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f5ef] to-[#efe7da] text-black px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* NAVBAR */}
        <div className="flex justify-between items-center mb-16">

          <div className="text-3xl font-bold tracking-tight">
            Credex Audit
          </div>

          <button className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3 rounded-2xl shadow-lg hover:opacity-90 transition">
            Book Consultation
          </button>
        </div>

        {/* HERO */}
        <div className="mb-16">

          <div className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow mb-6 text-sm font-medium">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            AI Infrastructure Cost Optimization
          </div>

          <h1 className="text-7xl font-bold tracking-tight leading-tight max-w-5xl">
            Stop Overpaying
            <br />
            For AI Tools
          </h1>

          <p className="text-xl text-gray-600 mt-6 max-w-3xl leading-relaxed">
            Audit ChatGPT, Claude, Cursor and Copilot usage across your organization and uncover unnecessary spend instantly.
          </p>

          {/* TRUST BAR */}
          <div className="flex flex-wrap gap-4 mt-10">

            <div className="bg-white px-5 py-3 rounded-2xl shadow text-sm font-medium">
              Used by AI-first startups
            </div>

            <div className="bg-white px-5 py-3 rounded-2xl shadow text-sm font-medium">
              Average 32% cost reduction
            </div>

            <div className="bg-white px-5 py-3 rounded-2xl shadow text-sm font-medium">
              Instant audit results
            </div>

          </div>

          {/* BENCHMARKS */}
          <div className="bg-white rounded-[32px] p-8 shadow-2xl mt-12">

            <div className="text-sm text-gray-500 mb-3">
              INDUSTRY BENCHMARKS
            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div>
                <div className="text-5xl font-bold">
                  $147
                </div>

                <div className="text-gray-500 mt-2">
                  Avg AI spend per employee
                </div>
              </div>

              <div>
                <div className="text-5xl font-bold">
                  31%
                </div>

                <div className="text-gray-500 mt-2">
                  Average wasted spend
                </div>
              </div>

              <div>
                <div className="text-5xl font-bold">
                  4.2x
                </div>

                <div className="text-gray-500 mt-2">
                  ROI from tooling consolidation
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>

            {/* FORM */}
            <div className="bg-white rounded-[32px] shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100 p-8">

              <h2 className="text-3xl font-bold mb-8">
                Add AI Tool
              </h2>

              <div className="space-y-5">

                {/* TOOL */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tool
                  </label>

                  <select
                    className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-black"
                    value={tool.name}
                    onChange={(e) =>
                      setTool({
                        ...tool,
                        name: e.target.value,
                        plan:
                          TOOL_OPTIONS[e.target.value][0],
                      })
                    }
                  >
                    {Object.keys(TOOL_OPTIONS).map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>

                {/* PLAN */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Plan
                  </label>

                  <select
                    className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-black"
                    value={tool.plan}
                    onChange={(e) =>
                      setTool({
                        ...tool,
                        plan: e.target.value,
                      })
                    }
                  >
                    {TOOL_OPTIONS[tool.name].map((plan) => (
                      <option key={plan}>{plan}</option>
                    ))}
                  </select>
                </div>

                {/* SPEND */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Monthly Spend ($)
                  </label>

                  <input
                    type="number"
                    className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-black"
                    value={tool.spend}
                    onChange={(e) =>
                      setTool({
                        ...tool,
                        spend: Number(e.target.value),
                      })
                    }
                  />
                </div>

                {/* SEATS */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Team Seats
                  </label>

                  <input
                    type="number"
                    className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-black"
                    value={tool.seats}
                    onChange={(e) =>
                      setTool({
                        ...tool,
                        seats: Number(e.target.value),
                      })
                    }
                  />
                </div>

                {/* USE CASE */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Primary Use Case
                  </label>

                  <input
                    type="text"
                    placeholder="coding / research / writing"
                    className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-black"
                    value={tool.useCase}
                    onChange={(e) =>
                      setTool({
                        ...tool,
                        useCase: e.target.value,
                      })
                    }
                  />
                </div>

                {/* BUTTON */}
                <button
                  onClick={addTool}
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl py-5 text-lg font-semibold hover:opacity-90 transition shadow-xl"
                >
                  Add Tool
                </button>

              </div>
            </div>

            {/* CURRENT STACK */}
            <div className="mt-8 bg-white rounded-[32px] shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100 p-8">

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold">
                  Current Stack
                </h2>

                <div className="text-sm text-gray-500">
                  {tools.length} tools added
                </div>
              </div>

              {tools.length === 0 ? (
                <div className="text-gray-500">
                  No tools added yet
                </div>
              ) : (
                <div className="space-y-4">
                  {tools.map((t, i) => (
                    <div
                      key={i}
                      className="bg-[#f8f5ef] rounded-2xl p-5 border border-gray-100"
                    >
                      <div className="flex justify-between items-center">

                        <div>
                          <div className="font-semibold text-lg">
                            {t.name}
                          </div>

                          <div className="text-gray-600 text-sm mt-1">
                            {t.plan} • {t.useCase}
                          </div>
                        </div>

                        <div className="text-right">

                          <div className="font-bold text-2xl">
                            ${t.spend}
                          </div>

                          <div className="text-sm text-gray-500">
                            {t.seats} seats
                          </div>

                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RUN BUTTON */}
            <button
              onClick={runAudit}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-[24px] py-6 mt-8 text-xl font-bold shadow-2xl hover:opacity-90 transition"
            >
              Run AI Spend Audit
            </button>

            {/* EXPORT BUTTON */}
            <button
              className="w-full bg-white border border-gray-200 rounded-[24px] py-5 mt-4 text-lg font-semibold shadow hover:bg-gray-50 transition"
            >
              Export PDF Report
            </button>

          </div>

          {/* RIGHT */}
          <div>

            <div className="bg-white rounded-[32px] shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100 p-8 sticky top-10">

              <div className="flex items-center justify-between mb-8">

                <div>
                  <div className="text-sm text-gray-500 mb-2">
                    LIVE AUDIT REPORT
                  </div>

                  <h2 className="text-5xl font-bold">
                    Audit Results
                  </h2>
                </div>

                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  Instant Analysis
                </div>
              </div>

              {!result ? (
                <div className="space-y-4 mt-6">

                  <div className="bg-[#f8f5ef] rounded-2xl p-5">
                    <div className="text-sm text-gray-500">
                      Estimated AI Spend
                    </div>

                    <div className="text-5xl font-bold mt-2">
                      $12,400
                    </div>
                  </div>

                  <div className="bg-[#f8f5ef] rounded-2xl p-5">
                    <div className="text-sm text-gray-500">
                      Potential Savings
                    </div>

                    <div className="text-5xl font-bold text-green-700 mt-2">
                      31%
                    </div>
                  </div>

                  <div className="bg-black text-white rounded-2xl p-5">
                    <div className="text-sm text-gray-400 mb-2">
                      AI Insight
                    </div>

                    <p className="leading-relaxed text-gray-200">
                      Teams commonly overspend through duplicated subscriptions and unused premium seats.
                    </p>
                  </div>

                </div>
              ) : (
                <>
                  {/* RESULT CARDS */}
                  <div className="grid grid-cols-3 gap-4 mb-8">

                    <div className="bg-[#f8f5ef] rounded-3xl p-5">
                      <div className="text-sm text-gray-500">
                        Current
                      </div>

                      <div className="text-4xl font-bold mt-3">
                        ${result.totalSpend}
                      </div>
                    </div>

                    <div className="bg-[#f8f5ef] rounded-3xl p-5">
                      <div className="text-sm text-gray-500">
                        Optimized
                      </div>

                      <div className="text-4xl font-bold mt-3">
                        ${result.optimizedSpend}
                      </div>
                    </div>

                    <div className="bg-[#e7f8ec] rounded-3xl p-5">
                      <div className="text-sm text-gray-500">
                        Savings
                      </div>

                      <div className="text-4xl font-bold text-green-700 mt-3">
                        ${result.savings}
                      </div>
                    </div>

                  </div>

                  {/* RISK SCORE */}
                  <div className="bg-[#fff7e8] border border-yellow-200 rounded-3xl p-6 mb-8">

                    <div className="text-sm text-yellow-700 font-medium">
                      COST RISK SCORE
                    </div>

                    <div className="text-5xl font-bold mt-3">
                      Medium
                    </div>

                    <p className="text-gray-600 mt-3 leading-relaxed">
                      Multiple overlapping AI subscriptions detected across research and coding workflows.
                    </p>

                  </div>

                  {/* AI SUMMARY */}
                  <div className="bg-black text-white rounded-3xl p-6 mb-8">

                    <div className="text-sm text-gray-400 mb-3">
                      AI GENERATED SUMMARY
                    </div>

                    <p className="text-lg leading-relaxed text-gray-200">
                      Your stack currently includes {tools.length} AI tools with an estimated monthly spend of ${result.totalSpend}. Based on your seat allocation and workflow patterns, consolidating overlapping subscriptions may reduce monthly AI infrastructure costs by approximately ${result.savings}.
                    </p>
                  </div>

                  {/* CHART */}
                  <div className="bg-[#f8f5ef] rounded-3xl p-6 mb-8">

                    <div className="text-2xl font-bold mb-6">
                      Spend Breakdown
                    </div>

                    <div className="space-y-5">

                      {tools.map((t, i) => (
                        <div key={i}>

                          <div className="flex justify-between mb-2">

                            <span className="font-medium">
                              {t.name}
                            </span>

                            <span className="font-semibold">
                              ${t.spend * t.seats}
                            </span>

                          </div>

                          <div className="w-full bg-gray-200 rounded-full h-4">

                            <div
                              className="bg-black h-4 rounded-full"
                              style={{
                                width: `${Math.min(
                                  (t.spend * t.seats) * 2,
                                  100
                                )}%`,
                              }}
                            />

                          </div>

                        </div>
                      ))}

                    </div>
                  </div>

                  {/* BREAKDOWN */}
                  <div className="space-y-5">

                    {result.breakdown.map(
                      (item: any, i: number) => (
                        <div
                          key={i}
                          className="border border-gray-100 rounded-3xl p-6"
                        >
                          <div className="flex justify-between items-start">

                            <div>

                              <div className="text-2xl font-bold">
                                {item.tool}
                              </div>

                              <div className="text-gray-600 mt-3 leading-relaxed">
                                {item.reason}
                              </div>

                            </div>

                            <div className="text-right ml-6">

                              <div className="text-3xl font-bold text-green-700">
                                -${item.savings}
                              </div>

                              <div className="text-sm text-gray-500">
                                monthly savings
                              </div>

                            </div>

                          </div>
                        </div>
                      )
                    )}

                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-24 border-t border-gray-200 pt-8 flex justify-between text-sm text-gray-500">

          <div>
            © 2025 Credex Audit
          </div>

          <div className="flex gap-6">
            <div>Privacy</div>
            <div>Terms</div>
            <div>Contact</div>
          </div>

        </div>

      </div>
    </div>
  );
}