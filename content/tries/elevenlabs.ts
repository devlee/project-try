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
    zh: "7 分钟，不绑卡，听到 AI 用别人的声音读你写的话",
    en: "Hear an AI read your words in a lifelike voice — 7 minutes, no card",
  },
  verdict: {
    zh: "文字转语音的哇时刻免费就能拿到；克隆自己的声音才需要付费，可以以后再说。",
    en: "The text-to-speech wow is free; cloning your own voice is paid and can wait.",
  },
  tryScore: 8,
  cost: {
    timeToWowMinutes: 7,
    money: {
      zh: "免费版每月约 1 万字符额度，够生成十几段短语音",
      en: "Free plan gives ~10k characters/month — a dozen short clips",
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
      zh: "注册 elevenlabs.io，邮箱即可，不用绑卡",
      en: "Sign up at elevenlabs.io — email only, no card",
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
    zh: "把一段公众号文章粘进去，30 秒后一个从未存在过的『主播』把它读了出来，连『——』处的停顿都处理对了。中文效果比预期好。",
    en: "We pasted in a blog paragraph and 30 seconds later a narrator who has never existed read it back, nailing even the em-dash pauses.",
  },
  walls: [
    {
      zh: "第 0 分钟：国内直连不稳定，建议先解决网络",
      en: "Minute 0: sign-up email verification can land in spam",
    },
    {
      zh: "第 15 分钟：想克隆自己的声音时撞墙——Instant Voice Clone 需要 $5/月 的 Starter 档",
      en: "Minute 15: the wall — cloning your own voice needs the $5/mo Starter plan",
    },
    {
      zh: "免费额度按字符计，长文章一篇就能耗掉大半",
      en: "Free credits are per character; one long article can eat most of them",
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
      zh: "评估是否值得 $5/月：如果每周都在产出音频内容，克隆自己的声音开始划算",
      en: "Decide on the $5/mo plan: if you ship audio weekly, cloning your own voice starts to pay off",
    },
  },
  disclosure: {
    zh: "AI 完成了注册、试用与计时；人类复核了价格档位与免费额度数字。",
    en: "The AI did the sign-up, testing, and timing; a human verified pricing tiers and free-tier numbers.",
  },
};
