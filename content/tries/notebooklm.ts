import type { TryCard } from "@/lib/types";

export const notebooklm: TryCard = {
  slug: "notebooklm-audio-overview",
  date: "2026-07-06",
  tool: {
    name: "NotebookLM",
    url: "https://notebooklm.google.com",
    category: { zh: "AI 阅读与研究", en: "AI reading & research" },
  },
  title: {
    zh: "15 分钟，把一篇论文变成两个人用中文聊天的播客",
    en: "Turn a research paper into a two-host podcast in 15 minutes",
  },
  verdict: {
    zh: "免费额度足够玩出第一个哇时刻，值得今天就试。",
    en: "The free tier is enough for your first wow moment. Try it today.",
  },
  tryScore: 9,
  cost: {
    timeToWowMinutes: 15,
    money: {
      zh: "免费版每天可生成 3 个音频概览，试玩完全够用",
      en: "Free plan allows 3 audio overviews per day — plenty for a first run",
    },
    requiresCreditCard: false,
    requiresWaitlist: false,
    chinaAccess: "vpn",
    psych: {
      zh: "零心理成本：不用露脸、不用发声，成品只有自己能看到",
      en: "Zero exposure: no face, no voice, results are private by default",
    },
  },
  exitCost: {
    zh: "随时可以离开。笔记本可以整个删除，没有订阅、没有数据绑架。",
    en: "Walk away anytime. Delete the notebook and you're out — no subscription, no data lock-in.",
  },
  firstSteps: [
    {
      zh: "用 Google 账号登录 notebooklm.google.com（需要科学上网）",
      en: "Sign in at notebooklm.google.com with a Google account",
    },
    {
      zh: "新建笔记本，把手边任意一篇 PDF 拖进去（论文、报告、说明书都行）",
      en: "Create a notebook and drop in any PDF — a paper, a report, a manual",
    },
    {
      zh: "点击 Audio Overview，等 5-15 分钟（实测一篇 15 页论文等了 11 分钟，去泡杯茶）",
      en: "Click Audio Overview and wait 5–15 minutes (a 15-page paper took us 11 — go make tea)",
    },
    {
      zh: "戴上耳机听两位 AI 主播讨论你的文档，这就是哇时刻",
      en: "Put on headphones and listen to two AI hosts discuss your document — that's the wow",
    },
  ],
  wowMoment: {
    zh: "我们扔进去《Attention Is All You Need》——奠定所有大模型基础的那篇 Transformer 论文，11 分钟后得到一段 17 分 48 秒的播客：一男一女两位中文主播把注意力机制聊得像职场故事。语言直接跟随 Google 账号设置，中文不用任何额外操作。",
    en: "We fed it 'Attention Is All You Need' — the Transformer paper behind every modern LLM — and 11 minutes later got a 17-minute-48-second podcast of two hosts turning attention mechanisms into a workplace story. The language followed our account settings automatically.",
  },
  walls: [
    {
      zh: "第 0 分钟：国内直连打不开，需要先解决网络问题——这是最大的一堵墙",
      en: "Minute 0: requires a Google account, which is friction if you don't have one",
    },
    {
      zh: "音频生成等待比想象中长：实测 11 分钟，期间不能关页面走人——这是全程最考验耐心的一步",
      en: "The generation wait is longer than you'd expect — 11 minutes in our test — and it's the patience test of the whole flow",
    },
    {
      zh: "免费版每天 3 次音频生成（按滚动 24 小时重置，不是零点刷新），重度使用会撞墙",
      en: "Free plan caps audio at 3 per day on a rolling 24-hour window — heavy users will hit it",
    },
  ],
  whoShouldSkip: {
    zh: "如果你几乎不读长文档，或者没有稳定的科学上网环境，这个 try 对你性价比不高。",
    en: "If you rarely read long documents, the payoff won't justify the setup.",
  },
  successPath: {
    day1: {
      zh: "把一篇一直没读完的文档做成播客，通勤时听完",
      en: "Turn that document you never finished into a podcast and listen on your commute",
    },
    day7: {
      zh: "建立 2-3 个主题笔记本（行业报告 / 学习资料），养成『先听后读』的习惯",
      en: "Set up 2–3 topic notebooks (industry reports / study material) and build a listen-first habit",
    },
    day30: {
      zh: "把它变成你的私人研究助理：用聊天功能对多份来源交叉提问，替代一部分搜索",
      en: "Use it as a research assistant: cross-question multiple sources in chat, replacing some searches",
    },
  },
  disclosure: {
    zh: "AI 撰写初稿并核查免费额度与语言支持；人类创始人于 2026-07-09 用 Transformer 论文亲测全流程，验证了 11 分钟生成等待与中文双主播输出。",
    en: "The AI wrote the draft and verified free-tier limits and language support; the human founder ran the full flow on 2026-07-09 with the Transformer paper, confirming the 11-minute wait and Chinese two-host output.",
  },
};
