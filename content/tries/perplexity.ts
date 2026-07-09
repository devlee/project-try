import type { TryCard } from "@/lib/types";

export const perplexity: TryCard = {
  slug: "perplexity-first-search",
  date: "2026-07-10",
  tool: {
    name: "Perplexity",
    url: "https://www.perplexity.ai",
    category: { zh: "AI 搜索", en: "AI search" },
  },
  title: {
    zh: "不用注册，2 分钟体验\u201c带出处的答案\u201d长什么样",
    en: "No sign-up needed: see what answers with receipts look like in 2 minutes",
  },
  verdict: {
    zh: "所有工具里尝试门槛最低的一个：打开就能搜，每个结论都带引用来源。",
    en: "The lowest barrier of any tool we've tried: open it, search, and every claim comes with a source.",
  },
  tryScore: 9,
  cost: {
    timeToWowMinutes: 2,
    money: {
      zh: "基础搜索免费且不限次数；进阶的 Pro Search 免费版每天约 5 次（官方不公布精确数字，会动态调整）",
      en: "Basic searches are free and unlimited; advanced Pro Search is capped at ~5/day on free (Perplexity adjusts this and doesn't publish an exact number)",
    },
    requiresCreditCard: false,
    requiresWaitlist: false,
    chinaAccess: "vpn",
    psych: {
      zh: "零心理成本：连账号都不用注册就能开始搜，没有任何身份暴露",
      en: "Zero exposure: you don't even need an account to start searching",
    },
  },
  exitCost: {
    zh: "最干净的退出：不注册就没有任何东西留下，关掉页面就是离开。",
    en: "The cleanest exit possible: with no account, closing the tab is leaving.",
  },
  firstSteps: [
    {
      zh: "打开 perplexity.ai，不用注册，直接在搜索框提一个你最近真的想搞清楚的问题（中文即可）",
      en: "Open perplexity.ai — no sign-up — and ask something you genuinely want answered",
    },
    {
      zh: "看答案时注意每句话后面的引用角标，点开一两个核对原文",
      en: "Notice the citation markers after each claim; click one or two to check the source",
    },
    {
      zh: "用底部的追问框连续追问，感受\u201c搜索\u201d变成\u201c对话\u201d的差别",
      en: "Use the follow-up box to keep digging — search becomes a conversation",
    },
    {
      zh: "试一次 Pro Search 开关，对比同一个问题两种深度的答案",
      en: "Toggle Pro Search once and compare the depth on the same question",
    },
  ],
  wowMoment: {
    zh: "问一个平时要开七八个网页才能拼出答案的问题，它直接给出综合好的结论，每一句都标着来源角标——第一次意识到\u201c搜索引擎给链接，它给答案\u201d的瞬间，你会重新想一遍自己每天搜索的方式。",
    en: "Ask something that normally takes eight open tabs to piece together, and it hands you a synthesized answer with a source marker on every claim. The moment you realize search engines give links but this gives answers, you rethink how you search.",
  },
  walls: [
    {
      zh: "每天约 5 次的 Pro Search 额度是主要的墙：认真做研究半小时就能用完，之后退回基础搜索",
      en: "The ~5 daily Pro Searches are the main wall: serious research burns them in half an hour, then you're back to basic search",
    },
    {
      zh: "免费版不能选模型、没有图片生成、Deep Research 基本不可用——这些都在 Pro（$20/月，年付 $200）后面",
      en: "Free can't pick models, has no image generation, and little Deep Research — all behind Pro ($20/mo, $200/yr)",
    },
    {
      zh: "国内直连不可用，需要网络方案",
      en: "Answers are only as good as their sources — always spot-check citations on important questions",
    },
  ],
  whoShouldSkip: {
    zh: "如果你已经重度使用 ChatGPT/Kimi 的联网搜索且满意，收益会小一些——但\u201c每句话带出处\u201d仍值得体验一次。",
    en: "If you're already happy with ChatGPT's web search, the delta is smaller — but per-claim citations are still worth one look.",
  },
  successPath: {
    day1: {
      zh: "把今天本来要在传统搜索里查的三个问题全部换到这里问，对比效率",
      en: "Route today's three real search questions through it and compare",
    },
    day7: {
      zh: "把它设为浏览器默认搜索之一，观察一周内你回传统搜索的频率",
      en: "Make it one of your default search options and watch how often you go back",
    },
    day30: {
      zh: "如果每天都在撞 Pro Search 上限，$20/月 的订阅才值得考虑；否则免费版够用",
      en: "Consider the $20/mo plan only if you hit the Pro Search cap daily; otherwise free is enough",
    },
  },
  disclosure: {
    zh: "AI 基于官方文档与公开报道撰写初稿并核查额度与价格；人类创始人亲测验证后发布。",
    en: "The AI wrote this draft from official docs and public reporting, verifying limits and pricing; published after hands-on verification by the human founder.",
  },
};
