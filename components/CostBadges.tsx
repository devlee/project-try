import type { Locale, TryCost } from "@/lib/types";
import { ui } from "@/lib/i18n";

function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "good" | "warn";
}) {
  const tones = {
    neutral: "border-line bg-paper-deep text-ink-soft",
    good: "border-emerald-200 bg-emerald-50 text-emerald-700",
    warn: "border-amber-200 bg-amber-50 text-amber-700",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function CostBadges({
  cost,
  locale,
}: {
  cost: TryCost;
  locale: Locale;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      <Badge tone="good">
        ⏱ {cost.timeToWowMinutes} {ui.cost.minutes[locale]}
      </Badge>
      <Badge tone={cost.requiresCreditCard ? "warn" : "good"}>
        {cost.requiresCreditCard
          ? `💳 ${ui.cost.card[locale]}`
          : `✓ ${ui.cost.noCard[locale]}`}
      </Badge>
      {cost.requiresWaitlist && <Badge tone="warn">⏳ {ui.cost.waitlist[locale]}</Badge>}
      <Badge tone={cost.chinaAccess === "direct" ? "good" : "warn"}>
        {cost.chinaAccess === "direct" ? "🌐" : "🔒"}{" "}
        {ui.cost.china[cost.chinaAccess][locale]}
      </Badge>
    </div>
  );
}
