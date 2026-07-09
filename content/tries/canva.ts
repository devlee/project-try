import type { TryCard } from "@/lib/types";

export const canva: TryCard = {
  slug: "canva-magic-design",
  date: "2026-07-09",
  tool: {
    name: "Canva",
    url: "https://www.canva.com",
    category: { zh: "AI 设计", en: "AI design" },
  },
  title: {
    zh: "一句话，让 AI 给你出一整套能直接用的设计",
    en: "One sentence in, a full set of usable designs out",
  },
  verdict: {
    zh: "设计小白的第一站：免费额度够做出真东西，而且有国内可直连的版本。",
    en: "The first stop for non-designers: the free tier makes real things, no VPN gymnastics required.",
  },
  tryScore: 8,
  cost: {
    timeToWowMinutes: 5,
    money: {
      zh: "免费版每月 200 次标准 AI 或 20 次高级 AI（生图、Magic Design 属高级，共享额度池，每月 1 号重置）；基础版 Magic Write 写文案不占额度",
      en: "Free plan: up to 200 Standard or 20 Premium AI uses/month (image gen and Magic Design are Premium; shared pool, resets on the 1st); basic Magic Write doesn't count against it",
    },
    requiresCreditCard: false,
    requiresWaitlist: false,
    chinaAccess: "direct",
    psych: {
      zh: "零心理成本：不用懂任何设计术语，说人话就行，做丑了没人看见",
      en: "Zero exposure: no design jargon needed — describe what you want in plain words",
    },
  },
  exitCost: {
    zh: "无痛退出。做好的图可以导出带走，不订阅就没有任何持续成本。",
    en: "Painless exit. Export your designs and leave — no subscription, no ongoing cost.",
  },
  firstSteps: [
    {
      zh: "国内直接打开可画 canva.cn（国际版是 canva.com），邮箱或手机号注册，不用绑卡",
      en: "Open canva.com and sign up with Google or email — no card",
    },
    {
      zh: "注意：可画的 AI 入口不在首页，直接访问 canva.cn/ai，然后用一句话下需求，比如『给我的播客做一张封面，主题是每天尝试一个新工具，橙色系』",
      en: "Type a request into the AI box on the homepage, e.g. 'a podcast cover about trying one new tool a day, orange palette'",
    },
    {
      zh: "从生成的几版设计里挑一版，进编辑器随手改文字和配色",
      en: "Pick one of the generated options and tweak the text and colors in the editor",
    },
    {
      zh: "右上角导出 PNG——你刚完成了一次从想法到成品的设计",
      en: "Export as PNG — you just went from idea to finished design",
    },
  ],
  wowMoment: {
    zh: "我们在可画输入『给我的播客做一张封面，主题是每天尝试一个新工具，橙色系』，很快拿到 4 张排好字、配好色的完整封面——不是素材，是能直接用的成品。从打开网站到看见它们，实测一共 5 分钟，全程国内直连。",
    en: "We asked for 'a podcast cover about trying one new tool a day, orange palette' and quickly got four complete, typeset, color-matched covers — finished pieces, not assets. Landing page to results: 5 minutes flat.",
  },
  walls: [
    {
      zh: "20 次高级 AI 额度是真实的墙：生图和 Magic Design 每用一次都在扣，重度试玩两三天就能耗尽，之后等下月 1 号",
      en: "The 20 Premium AI uses are a real wall: image gen and Magic Design each burn one, and heavy play can drain them in days — then you wait for the 1st",
    },
    {
      zh: "一些你以为免费的功能在付费墙后：背景移除、Magic Eraser 等大多要 Pro（$144/年，约 $12/月）",
      en: "Some features you'd assume are free sit behind Pro ($144/yr, ~$12/mo): background remover, Magic Eraser, and friends",
    },
    {
      zh: "可画的 AI 入口藏得深：首页找不到，要直接访问 canva.cn/ai——第一次找入口可能就是你撞的第一堵墙",
      en: "On the Chinese edition (canva.cn) the AI entry point is hidden — it's at canva.cn/ai, not on the homepage",
    },
  ],
  whoShouldSkip: {
    zh: "Figma/Photoshop 熟手可以跳过——它的价值是把设计门槛降到零，而你的门槛本来就不高。",
    en: "Skip if you're fluent in Figma or Photoshop — Canva's value is dropping the barrier to zero, and yours is already low.",
  },
  successPath: {
    day1: {
      zh: "做一张你本来就要用的图：朋友圈封面、会议 PPT 首页、活动海报",
      en: "Make something you actually need today: a cover image, a deck title slide, an event poster",
    },
    day7: {
      zh: "建立自己的品牌套件（固定的颜色和字体），让每次生成都自动带上你的风格",
      en: "Set up a brand kit (your colors and fonts) so every generation carries your style",
    },
    day30: {
      zh: "如果每周都在产出设计，评估 Pro：一键改尺寸和背景移除对高频用户是真省时间",
      en: "If you ship designs weekly, evaluate Pro: one-click resize and background removal genuinely save time at volume",
    },
  },
  disclosure: {
    zh: "AI 撰写初稿并按官方文档核查额度与价格；人类创始人于 2026-07-09 经可画（canva.cn）亲测：一句话生成 4 张封面，全程 5 分钟，国内直连无碍。",
    en: "The AI wrote the draft and verified limits and pricing against official docs; the human founder tested via canva.cn on 2026-07-09 — four covers from one sentence, 5 minutes total.",
  },
};
