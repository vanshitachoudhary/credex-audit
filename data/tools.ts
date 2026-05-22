export type Tool = {
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
  // GROUP DUPLICATES (IMPORTANT)
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
    const currentSpend = (tool.spend || 0) * (tool.seats || 1);

    let bestSpend = currentSpend;

    let reason = "Pricing is aligned with standard vendor pricing";

    // -----------------------------
    // CHATGPT OPTIMIZATION
    // -----------------------------
    if (tool.name === "ChatGPT") {
      if (tool.plan === "Plus" && tool.seats >= 2) {
        bestSpend = tool.seats * 25;
        reason =
          "Multiple Plus seats detected → Team plan may reduce cost";
      }

      // single user optimization (light usage)
      if (tool.seats === 1 && tool.useCase === "light") {
        bestSpend = 0;
        reason =
          "Light usage detected → Free tier may be sufficient";
      }
    }

    // -----------------------------
    // CURSOR OPTIMIZATION
    // -----------------------------
    if (tool.name === "Cursor") {
      if (tool.useCase === "coding") {
        reason +=
          " | GitHub Copilot may be a cheaper alternative";
      }
    }

    // -----------------------------
    // ACCUMULATION
    // -----------------------------
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
    totalSpend: totalSpend || 0,
    optimizedSpend: optimizedSpend || 0,
    savings: Math.max(totalSpend - optimizedSpend, 0),
    breakdown
  };
}