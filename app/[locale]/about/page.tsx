import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ui, isLocale, pageAlternates } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: locale === "zh" ? "关于 · Built by AI" : "About · Built by AI",
    description: ui.about.title[locale],
    alternates: pageAlternates(locale, "/about"),
  };
}

const content: Record<
  Locale,
  { intro: string[]; aiDoes: string[]; humanDoes: string[]; aiTitle: string; humanTitle: string; promise: string }
> = {
  zh: {
    intro: [
      "这个网站的代码由 AI 编写，工具评测由 AI 亲手完成，每天的内容初稿也出自 AI。一位人类创始人负责复核事实、把关品味，并对所有内容承担最终责任。",
      "我们不觉得这是需要遮掩的事，恰恰相反——一个 AI 每天替你试用 AI 工具，本身就是这个时代最诚实的测评方式：AI 不会因为拿了推广费而口是心非，它的每一次试用都有完整记录可查。",
      "这个项目本身，就是一场公开进行的尝试。它可能成功，也可能失败，我们会把过程原样晒出来。",
    ],
    aiTitle: "AI 负责",
    aiDoes: [
      "真实注册并试用每一个工具，记录到哇时刻的用时",
      "如实记录撞到付费墙、排队墙、网络墙的精确时点",
      "撰写中英双语的尝试报告初稿",
      "编写和维护这个网站的全部代码",
    ],
    humanTitle: "人类负责",
    humanDoes: [
      "复核价格、免费额度等关键事实",
      "把关内容品味，砍掉言过其实的表达",
      "回复每一条读者来信和评论",
      "对所有发布内容承担最终责任",
    ],
    promise:
      "透明承诺：如果某条链接是联盟链接（我们会因此获得佣金），会在页面上明确标注。佣金从不影响评分——评分在选择联盟计划之前就已完成。",
  },
  en: {
    intro: [
      "The code on this site is written by an AI. The hands-on tool testing is done by an AI. The daily drafts are written by an AI. One human founder verifies the facts, curates for taste, and takes final responsibility for everything published.",
      "We don't think that's something to hide. An AI trying AI tools on your behalf may be the most honest review format of this era: an AI doesn't fake enthusiasm for a sponsorship, and every test it runs is fully logged.",
      "This project is itself an experiment, run in the open. It might work; it might fail. Either way, you'll see the whole process.",
    ],
    aiTitle: "The AI",
    aiDoes: [
      "Signs up for and genuinely tests every tool, timing the path to wow",
      "Logs the exact minute it hits paywalls, waitlists, and access walls",
      "Writes the bilingual first draft of every try report",
      "Writes and maintains all the code for this site",
    ],
    humanTitle: "The human",
    humanDoes: [
      "Verifies pricing, free-tier limits, and other key facts",
      "Curates for taste and cuts overclaims",
      "Answers every reader email and comment",
      "Takes final responsibility for everything published",
    ],
    promise:
      "Transparency promise: if a link is an affiliate link (we earn a commission), it is clearly labeled on the page. Commissions never affect scores — scoring happens before any affiliate program is chosen.",
  },
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const c = content[locale];

  return (
    <div className="py-10 sm:py-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
        Built by AI
      </p>
      <h1 className="mb-6 max-w-2xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
        {ui.about.title[locale]}
      </h1>

      <div className="mb-10 max-w-2xl space-y-4">
        {c.intro.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-ink-soft">
            {p}
          </p>
        ))}
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-line bg-white p-6">
          <h2 className="mb-4 text-sm font-bold">🤖 {c.aiTitle}</h2>
          <ul className="space-y-2.5">
            {c.aiDoes.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                <span className="text-accent">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6">
          <h2 className="mb-4 text-sm font-bold">🧑 {c.humanTitle}</h2>
          <ul className="space-y-2.5">
            {c.humanDoes.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                <span className="text-accent">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="max-w-2xl rounded-xl border border-line bg-paper-deep/60 p-5 text-sm leading-relaxed text-ink-soft">
        {c.promise}
      </p>
    </div>
  );
}
