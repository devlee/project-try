import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ui, isLocale, pageAlternates } from "@/lib/i18n";
import { getAllTries, getLatestTry } from "@/lib/tries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    description: ui.tagline[locale],
    alternates: pageAlternates(locale),
  };
}
import { CostBadges } from "@/components/CostBadges";
import { ScorePill } from "@/components/ScorePill";
import { SubscribeForm } from "@/components/SubscribeForm";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const latest = getLatestTry();
  const rest = getAllTries().slice(1);
  const steps = [ui.home.step1, ui.home.step2, ui.home.step3];

  return (
    <div className="py-10 sm:py-14">
      {/* Hero */}
      <section className="mb-14">
        <p className="mb-6 max-w-xl text-sm leading-relaxed text-ink-soft">
          {ui.tagline[locale]}
        </p>

        <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_1px_3px_rgba(28,25,23,0.04)] sm:p-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {ui.todaysTry[locale]} · {latest.date}
            </span>
            <ScorePill score={latest.tryScore} locale={locale} />
          </div>

          <h1 className="mb-2 text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
            {latest.title[locale]}
          </h1>
          <p className="mb-1 text-sm font-medium text-ink-soft">
            {latest.tool.name} · {latest.tool.category[locale]}
          </p>
          <p className="mb-5 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {latest.verdict[locale]}
          </p>

          <div className="mb-6">
            <CostBadges cost={latest.cost} locale={locale} />
          </div>

          <Link
            href={`/${locale}/tries/${latest.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-deep"
          >
            {ui.readFull[locale]} →
          </Link>
        </div>
      </section>

      {/* How we try */}
      <section className="mb-14">
        <h2 className="mb-5 text-lg font-bold tracking-tight">
          {ui.home.how[locale]}
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-xl border border-line bg-paper-deep/60 p-5"
            >
              <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent-deep">
                {i + 1}
              </div>
              <h3 className="mb-1.5 text-sm font-bold">{step.title[locale]}</h3>
              <p className="text-[13px] leading-relaxed text-ink-soft">
                {step.desc[locale]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent tries */}
      {rest.length > 0 && (
        <section className="mb-14">
          <div className="mb-5 flex items-baseline justify-between">
            <h2 className="text-lg font-bold tracking-tight">
              {ui.home.recent[locale]}
            </h2>
            <Link
              href={`/${locale}/tries`}
              className="text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {ui.nav.archive[locale]} →
            </Link>
          </div>
          <div className="divide-y divide-line rounded-xl border border-line bg-white">
            {rest.map((card) => (
              <Link
                key={card.slug}
                href={`/${locale}/tries/${card.slug}`}
                className="group flex items-center justify-between gap-4 p-5 transition-colors hover:bg-paper-deep/50"
              >
                <div className="min-w-0">
                  <p className="mb-0.5 text-xs text-ink-faint">
                    {card.date} · {card.tool.name}
                  </p>
                  <p className="truncate text-[15px] font-semibold transition-colors group-hover:text-accent">
                    {card.title[locale]}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-bold text-accent-deep">
                  {card.tryScore}/10
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Subscribe */}
      <section className="rounded-2xl border border-line bg-ink p-8 text-paper sm:p-10">
        <h2 className="mb-2 text-xl font-bold tracking-tight">
          {ui.subscribe.title[locale]}
        </h2>
        <p className="mb-5 max-w-lg text-sm leading-relaxed text-paper/70">
          {ui.subscribe.desc[locale]}
        </p>
        <SubscribeForm locale={locale} />
        <p className="mt-3 text-xs text-paper/50">{ui.subscribe.note[locale]}</p>
      </section>
    </div>
  );
}
