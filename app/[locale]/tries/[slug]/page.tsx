import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ui, isLocale, locales, pageAlternates } from "@/lib/i18n";
import { getAllTries, getTryBySlug } from "@/lib/tries";
import { CostBadges } from "@/components/CostBadges";
import { ScorePill } from "@/components/ScorePill";
import { TriedButton } from "@/components/TriedButton";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllTries().map((card) => ({ locale, slug: card.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const card = getTryBySlug(slug);
  if (!card || !isLocale(locale)) return {};
  return {
    title: card.title[locale],
    description: card.verdict[locale],
    alternates: pageAlternates(locale, `/tries/${slug}`),
    openGraph: {
      title: card.title[locale],
      description: card.verdict[locale],
      type: "article",
      publishedTime: card.date,
    },
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-bold tracking-tight">
        <span className="h-4 w-1 rounded-full bg-accent" />
        {title}
      </h2>
      {children}
    </section>
  );
}

export default async function TryDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const card = getTryBySlug(slug);
  if (!card) notFound();

  const t = ui.detail;
  const pathDays = [
    { label: t.day1[locale], text: card.successPath.day1[locale] },
    { label: t.day7[locale], text: card.successPath.day7[locale] },
    { label: t.day30[locale], text: card.successPath.day30[locale] },
  ];

  return (
    <article className="py-10 sm:py-14">
      {/* Header */}
      <header className="mb-10">
        <p className="mb-3 text-xs text-ink-faint">
          {card.date} · {card.tool.name} · {card.tool.category[locale]}
        </p>
        <h1 className="mb-4 text-2xl font-bold leading-snug tracking-tight sm:text-4xl">
          {card.title[locale]}
        </h1>
        <p className="mb-5 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          {card.verdict[locale]}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <ScorePill score={card.tryScore} locale={locale} />
          <a
            href={card.tool.affiliateUrl ?? card.tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent px-5 py-1.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
          >
            {t.visit[locale]}: {card.tool.name} ↗
          </a>
        </div>
      </header>

      {/* Costs */}
      <Section title={ui.cost.section[locale]}>
        <div className="mb-4">
          <CostBadges cost={card.cost} locale={locale} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-line bg-white p-5">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-ink-faint">
              {ui.cost.money[locale]}
            </p>
            <p className="text-sm leading-relaxed">{card.cost.money[locale]}</p>
          </div>
          <div className="rounded-xl border border-line bg-white p-5">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-ink-faint">
              {ui.cost.psych[locale]}
            </p>
            <p className="text-sm leading-relaxed">{card.cost.psych[locale]}</p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 sm:col-span-2">
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-600">
              {t.exit[locale]}
            </p>
            <p className="text-sm leading-relaxed text-emerald-900">
              {card.exitCost[locale]}
            </p>
          </div>
        </div>
      </Section>

      {/* First steps */}
      <Section title={t.firstSteps[locale]}>
        <ol className="space-y-3">
          {card.firstSteps.map((step, i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-line bg-white p-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent-deep">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed">{step[locale]}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Wow moment */}
      <Section title={t.wow[locale]}>
        <blockquote className="rounded-xl border-l-4 border-accent bg-accent-soft/50 p-5 text-sm leading-relaxed">
          {card.wowMoment[locale]}
        </blockquote>
      </Section>

      {/* Walls */}
      <Section title={t.walls[locale]}>
        <ul className="space-y-2">
          {card.walls.map((wall, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-sm leading-relaxed text-amber-900"
            >
              <span aria-hidden>🧱</span>
              {wall[locale]}
            </li>
          ))}
        </ul>
      </Section>

      {/* Who should skip */}
      <Section title={t.skip[locale]}>
        <p className="rounded-xl border border-line bg-paper-deep/60 p-5 text-sm leading-relaxed text-ink-soft">
          {card.whoShouldSkip[locale]}
        </p>
      </Section>

      {/* Success path */}
      <Section title={t.successPath[locale]}>
        <div className="grid gap-3 sm:grid-cols-3">
          {pathDays.map((day) => (
            <div key={day.label} className="rounded-xl border border-line bg-white p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">
                {day.label}
              </p>
              <p className="text-sm leading-relaxed">{day.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Check-in */}
      <div className="mb-10 rounded-2xl border border-line bg-white p-6">
        <TriedButton slug={card.slug} locale={locale} />
      </div>

      {/* Disclosure */}
      <p className="mb-6 rounded-xl bg-paper-deep/70 p-4 text-xs leading-relaxed text-ink-faint">
        🤖 {t.disclosure[locale]}: {card.disclosure[locale]}
      </p>

      <Link
        href={`/${locale}/tries`}
        className="text-sm text-ink-soft transition-colors hover:text-accent"
      >
        ← {ui.archive.title[locale]}
      </Link>
    </article>
  );
}
