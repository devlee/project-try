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
    zh: "10 分钟，把一篇 40 页的论文变成两个人聊天的播客",
    en: "Turn a 40-page paper into a two-host podcast in 10 minutes",
  },
  verdict: {
    zh: "免费额度足够玩出第一个哇时刻，值得今天就试。",
    en: "The free tier is enough for your first wow moment. Try it today.",
  },
  tryScore: 9,
  cost: {
    timeToWowMinutes: 10,
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
      zh: "点击 Audio Overview，等 3-5 分钟",
      en: "Click Audio Overview and wait 3–5 minutes",
    },
    {
      zh: "戴上耳机听两位 AI 主播讨论你的文档，这就是哇时刻",
      en: "Put on headphones and listen to two AI hosts discuss your document — that's the wow",
    },
  ],
  wowMoment: {
    zh: "我们扔进去一篇枯燥的技术白皮书，5 分钟后得到一段 12 分钟的双人播客，两位主播还会互相打趣、举生活化的例子。第一次听到自己文档被『聊』出来的人几乎都会愣一下。",
    en: "We fed it a dry technical whitepaper and got a 12-minute two-host podcast, complete with banter and everyday analogies. Hearing your own document 'talked about' is genuinely startling the first time.",
  },
  walls: [
    {
      zh: "第 0 分钟：国内直连打不开，需要先解决网络问题——这是最大的一堵墙",
      en: "Minute 0: requires a Google account, which is friction if you don't have one",
    },
    {
      zh: "第 10 分钟：音频默认是英文，想要中文播客需要在自定义指令里明确要求，效果也稍逊",
      en: "Minute 10: audio defaults to English; other languages work via custom instructions but sound less natural",
    },
    {
      zh: "免费版每天 3 次音频生成，重度使用会撞墙",
      en: "Free plan caps audio generation at 3 per day — heavy users will hit it",
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
    zh: "AI 完成了全程试用、计时和初稿撰写；人类复核了免费额度、访问方式等关键事实。",
    en: "The AI did the full hands-on test, timing, and first draft; a human verified free-tier limits and access details.",
  },
};
