import type { TryCard } from "@/lib/types";

export const elevenlabs: TryCard = {
  slug: "elevenlabs-voice-clone",
  date: "2026-07-07",
  tool: {
    name: "ElevenLabs",
    url: "https://elevenlabs.io",
    category: { zh: "AI 语音生成", en: "AI voice generation" },
  },
  title: {
    zh: "3 分钟，不绑卡，听到 AI 用别人的声音读你写的话",
    en: "Hear an AI read your words in a lifelike voice — 3 minutes, no card",
  },
  verdict: {
    zh: "文字转语音的哇时刻免费就能拿到；克隆自己的声音才需要付费，可以以后再说。",
    en: "The text-to-speech wow is free; cloning your own voice is paid and can wait.",
  },
  tryScore: 8,
  cost: {
    timeToWowMinutes: 3,
    money: {
      zh: "免费版每月 1 万积分，约合 10 分钟语音，够生成十几段短音频",
      en: "Free plan gives 10k credits/month — about 10 minutes of speech",
    },
    requiresCreditCard: false,
    requiresWaitlist: false,
    chinaAccess: "vpn",
    psych: {
      zh: "低心理成本：用现成的声音库就能玩，不需要录自己的声音",
      en: "Low exposure: play with stock voices first, no need to record yourself",
    },
  },
  exitCost: {
    zh: "免费玩不留负担；如果订了付费克隆，记得当月取消，声音模型可随时删除。",
    en: "Free play leaves nothing behind; if you subscribe for cloning, cancel anytime and delete your voice model.",
  },
  firstSteps: [
    {
      zh: "注册 elevenlabs.io，Google 账号或邮箱均可，不用绑卡（实测 Google 登录 2 分钟搞定）",
      en: "Sign up at elevenlabs.io with Google or email, no card — Google took us 2 minutes flat",
    },
    {
      zh: "进入 Text to Speech，从声音库挑一个你喜欢的声音",
      en: "Open Text to Speech and pick a voice from the library",
    },
    {
      zh: "粘贴一段你自己写的文字（中文英文都支持），点生成",
      en: "Paste a paragraph you wrote and hit generate",
    },
    {
      zh: "听第一遍。注意换气和停顿的位置——那是最像人的部分",
      en: "Listen once. Notice the breaths and pauses — that's where it feels human",
    },
  ],
  wowMoment: {
    zh: "实测从打开官网到听见第一段语音只花了 3 分钟：Google 登录 2 分钟，挑声音加生成 1 分钟。一个从未存在过的『主播』把你写的话读出来，自然到需要提醒自己这是合成的。",
    en: "From landing page to hearing the first clip took exactly 3 minutes in our test: 2 to sign up with Google, 1 to pick a voice and generate. A narrator who has never existed reads your words back — natural enough that you have to remind yourself it's synthetic.",
  },
  walls: [
    {
      zh: "第 0 分钟：国内直连不稳定，建议先解决网络",
      en: "Minute 0: sign-up email verification can land in spam",
    },
    {
      zh: "想克隆自己的声音时撞墙——Instant Voice Clone 需要 $6/月 的 Starter 档（年付约 $5/月）",
      en: "The wall: cloning your own voice needs the $6/mo Starter plan (~$5/mo billed yearly)",
    },
    {
      zh: "免费额度只够约 10 分钟语音，长文章一篇就能耗掉大半；且免费生成的音频不可商用",
      en: "10 minutes of free speech goes fast — one long article can eat most of it; free output has no commercial license",
    },
  ],
  whoShouldSkip: {
    zh: "如果你的内容完全不需要音频形态（不做视频、播客、有声内容），可以跳过。",
    en: "Skip if your work never needs audio — no videos, podcasts, or voiceovers.",
  },
  successPath: {
    day1: {
      zh: "用库存声音把一段自己的文字变成语音，发给一个朋友听",
      en: "Turn a paragraph of yours into speech with a stock voice and send it to a friend",
    },
    day7: {
      zh: "为你的内容固定一个『品牌声音』，把一篇文章做成完整音频版",
      en: "Pick a consistent brand voice and produce a full audio version of one article",
    },
    day30: {
      zh: "评估是否值得 $6/月：如果每周都在产出音频内容，克隆自己的声音开始划算",
      en: "Decide on the $6/mo plan: if you ship audio weekly, cloning your own voice starts to pay off",
    },
  },
  disclosure: {
    zh: "AI 撰写初稿并核查价格档位与免费额度；人类创始人于 2026-07-09 亲测全流程，验证了 3 分钟到哇时刻与语音自然度。",
    en: "The AI wrote the draft and verified pricing tiers and free-tier numbers; the human founder ran the full flow on 2026-07-09, confirming the 3-minute wow and the voice quality.",
  },
};
