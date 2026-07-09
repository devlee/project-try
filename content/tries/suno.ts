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
    zh: "我们输入『一首关于周三加班的轻快城市民谣』，约 1 分钟后拿到两个版本，Suno 还自作主张把歌名起成了《周三晚班》。副歌真的带劲：『周三别停 / 周三别停 / 我还在这城里 / 慢慢往前』——从打开网站到听见这首歌，实测正好 5 分钟。",
    en: "We asked for 'an upbeat city-folk song about working late on a Wednesday' and got two versions in about a minute — Suno even titled it 'Wednesday Night Shift' on its own. The chorus genuinely slaps, and the clock from landing page to hearing the song read exactly 5 minutes.",
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
      zh: "免费版生成的歌曲永久不可商用——之后订阅也不会追溯授权，发社交平台自娱没问题",
      en: "Free-tier songs stay non-commercial forever — subscribing later doesn't retroactively license them; social sharing is fine",
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
    zh: "AI 撰写初稿并核查积分规则与商用条款；人类创始人于 2026-07-09 亲测全流程，验证了 5 分钟到哇时刻、双版本生成与副歌质量。",
    en: "The AI wrote the draft and verified credit rules and commercial terms; the human founder ran the full flow on 2026-07-09, confirming the 5-minute wow, the two-version output, and the chorus quality.",
  },
};
