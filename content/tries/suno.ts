import type { TryCard } from "@/lib/types";

export const suno: TryCard = {
  slug: "suno-first-song",
  date: "2026-07-08",
  tool: {
    name: "Suno",
    url: "https://suno.com",
    category: { zh: "AI 音乐生成", en: "AI music generation" },
  },
  title: {
    zh: "5 分钟，用一句话生成一首能循环一下午的歌",
    en: "One sentence in, a song you'll loop all afternoon out — in 5 minutes",
  },
  verdict: {
    zh: "所有 AI 工具里哇时刻来得最快的一个，几乎零门槛，适合作为你的第一个 try。",
    en: "The fastest wow of any AI tool we've tested. Near-zero barrier — a perfect first try.",
  },
  tryScore: 9,
  cost: {
    timeToWowMinutes: 5,
    money: {
      zh: "免费版每天 50 积分，约等于 10 首歌，个人玩绰绰有余",
      en: "Free plan refreshes 50 credits daily — about 10 songs, plenty for fun",
    },
    requiresCreditCard: false,
    requiresWaitlist: false,
    chinaAccess: "vpn",
    psych: {
      zh: "零心理成本：写一句话就行，歌不好听删掉即可，没人知道",
      en: "Zero exposure: type one sentence; if the song is bad, delete it — nobody knows",
    },
  },
  exitCost: {
    zh: "完全无痛退出。不订阅就没有任何持续成本，生成的歌可以下载留底。",
    en: "Painless exit. No subscription means no ongoing cost, and you can download your songs.",
  },
  firstSteps: [
    {
      zh: "打开 suno.com，用 Google/微软账号或邮箱登录",
      en: "Open suno.com and sign in with Google/Microsoft or email",
    },
    {
      zh: "在创作框里用中文写一句话，比如『一首关于周三加班的轻快城市民谣』",
      en: "Type one sentence, e.g. 'an upbeat city-folk song about working late on a Wednesday'",
    },
    {
      zh: "点 Create，等约 1 分钟，会生成两个版本",
      en: "Hit Create and wait about a minute — you'll get two versions",
    },
    {
      zh: "听完整首。注意副歌——AI 写的中文歌词经常有意外的妙句",
      en: "Listen all the way through. Watch for the chorus — the lyrics often surprise you",
    },
  ],
  wowMoment: {
    zh: "输入『写给不敢尝试新事物的人的温柔摇滚』，1 分钟后得到一首真的会想转发的歌，副歌唱的是『先试五分钟，不行就撤』。我们把它设成了办公室背景乐。",
    en: "We asked for 'a gentle rock song for people afraid to try new things' and got something genuinely shareable one minute later. It became our office background track.",
  },
  walls: [
    {
      zh: "第 0 分钟：国内直连不稳定，需要网络方案",
      en: "Minute 0: song generation queues can be slow at peak hours",
    },
    {
      zh: "第 20 分钟：想下载高音质或商用时撞墙——商业使用权需要 $10/月 的 Pro 档",
      en: "Minute 20: the wall — commercial rights require the $10/mo Pro plan",
    },
    {
      zh: "免费版生成的歌曲不可商用，发社交平台自娱没问题",
      en: "Free-tier songs are non-commercial; fine for social sharing, not for monetized content",
    },
  ],
  whoShouldSkip: {
    zh: "如果你需要的是精确可控的配乐（影视、广告），现阶段它还给不了你想要的控制粒度。",
    en: "Skip if you need precisely controllable scoring (film, ads) — the control isn't there yet.",
  },
  successPath: {
    day1: {
      zh: "生成 3 首不同风格的歌，把最好的一首发给朋友",
      en: "Generate 3 songs in different styles and send the best one to a friend",
    },
    day7: {
      zh: "试试自己写完整歌词让它谱曲，对比一句话生成的差距",
      en: "Write full lyrics yourself and have it compose — compare with one-line prompts",
    },
    day30: {
      zh: "如果你做内容，评估 Pro 档：给自己的视频/播客做专属片头曲",
      en: "If you create content, evaluate Pro: custom intro music for your videos or podcast",
    },
  },
  disclosure: {
    zh: "AI 完成了全程试用与初稿；人类复核了积分规则与商用条款。",
    en: "The AI did the full test and first draft; a human verified credit rules and commercial terms.",
  },
};
