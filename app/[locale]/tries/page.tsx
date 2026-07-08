import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ui, isLocale, pageAlternates } from "@/lib/i18n";
import { getAllTries } from "@/lib/tries";
import { CostBadges } from "@/components/CostBadges";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: ui.archive.title[locale],
    description: ui.archive.subtitle[locale],
    alternates: pageAlternates(locale, "/tries"),
  };
}

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const cards = getAllTries();

  return (
    <div className="py-10 sm:py-14">
      <h1 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {ui.archive.title[locale]}
      </h1>
      <p className="mb-8 text-sm text-ink-soft">{ui.archive.subtitle[locale]}</p>

      <div className="space-y-4">
        {cards.map((card) => (
          <Link
            key={card.slug}
            href={`/${locale}/tries/${card.slug}`}
            className="group block rounded-xl border border-line bg-white p-6 transition-all hover:border-accent/40 hover:shadow-[0_2px_12px_rgba(232,72,31,0.08)]"
          >
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs text-ink-faint">
                {card.date} · {card.tool.name} · {card.tool.category[locale]}
              </p>
              <span className="text-sm font-bold text-accent-deep">
                {card.tryScore}/10
              </span>
            </div>
            <h2 className="mb-2 text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
              {card.title[locale]}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-ink-soft">
              {card.verdict[locale]}
            </p>
            <CostBadges cost={card.cost} locale={locale} />
          </Link>
        ))}
      </div>
    </div>
  );
}
