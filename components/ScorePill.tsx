import type { Locale } from "@/lib/types";
import { ui } from "@/lib/i18n";

export function ScorePill({
  score,
  locale,
}: {
  score: number;
  locale: Locale;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1">
      <span className="text-sm font-bold text-accent-deep">{score}/10</span>
      <span className="text-xs text-accent-deep/70">{ui.tryScore[locale]}</span>
    </div>
  );
}
