type Tool = {
  name: string;
  plan: string;
  spend: number;
  seats: number;
  useCase?: string;
};

export function runAudit(tools: Tool[]) {
  let totalSpend = 0;
  let optimizedSpend = 0;

  const breakdown: any[] = [];

  // -----------------------------
  // GROUP SAME TOOLS (IMPORTANT FIX)
  // -----------------------------
  const grouped: Record<string, Tool> = {};

  for (const t of tools) {
    const key = `${t.name}-${t.plan}`;

    if (!grouped[key]) {
      grouped[key] = { ...t };
    } else {
      grouped[key].seats += t.seats;
    }
  }

  const finalTools = Object.values(grouped);

  for (const tool of finalTools) {
    const currentSpend = tool.spend * tool.seats;

    let bestSpend = currentSpend;
    let reason = "Pricing is aligned with standard vendor pricing";

    // -----------------------------
    // CHATGPT OPTIMIZATION
    // -----------------------------
    if (tool.name === "ChatGPT") {
      if (tool.seats >= 2 && tool.plan === "Plus") {
        bestSpend = tool.seats * 25; // Team approx
        reason = "Multiple Plus seats → Team plan is more cost efficient";
      }
    }

    // -----------------------------
    // CURSOR OPTIMIZATION
    // -----------------------------
    if (tool.name === "Cursor") {
      if (tool.useCase === "coding") {
        reason += " | GitHub Copilot may be cheaper alternative";
      }
    }

    totalSpend += currentSpend;
    optimizedSpend += bestSpend;

    breakdown.push({
      tool: tool.name,
      plan: tool.plan,
      currentSpend,
      optimizedSpend: bestSpend,
      savings: Math.max(currentSpend - bestSpend, 0),
      reason
    });
  }

  return {
    totalSpend,
    optimizedSpend,
    savings: Math.max(totalSpend - optimizedSpend, 0),
    breakdown
  };
}