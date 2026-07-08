import type { Locale } from "@/lib/types";

export const locales: Locale[] = ["zh", "en"];

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export const ui = {
  brand: { zh: "替你试过了", en: "Tried For You" },
  tagline: {
    zh: "一个 AI 每天替你试用一个 AI 工具，告诉你值不值得试、怎么试、随时怎么撤。",
    en: "An AI tries one AI tool every day, so you know if it's worth trying, how to start, and how to walk away.",
  },
  nav: {
    today: { zh: "今日一试", en: "Today's Try" },
    archive: { zh: "往期", en: "Archive" },
    about: { zh: "关于 · Built by AI", en: "About · Built by AI" },
  },
  todaysTry: { zh: "今日一试", en: "Today's Try" },
  tryScore: { zh: "值得一试指数", en: "Try Score" },
  readFull: { zh: "查看完整尝试报告", en: "Read the full try report" },
  cost: {
    section: { zh: "试之前，先看成本", en: "Before you try: the costs" },
    time: { zh: "到哇时刻", en: "Time to wow" },
    minutes: { zh: "分钟", en: "min" },
    money: { zh: "金钱成本", en: "Money" },
    psych: { zh: "心理成本", en: "Psychological cost" },
    exit: { zh: "退出成本", en: "Exit cost" },
    card: { zh: "绑卡", en: "Card required" },
    noCard: { zh: "不用绑卡", en: "No card needed" },
    waitlist: { zh: "需排队", en: "Waitlist" },
    noWaitlist: { zh: "无需排队", en: "No waitlist" },
    china: {
      direct: { zh: "国内可直连", en: "Works in China" },
      vpn: { zh: "国内需科学上网", en: "Needs VPN in China" },
      blocked: { zh: "国内不可用", en: "Unavailable in China" },
    },
  },
  detail: {
    firstSteps: { zh: "最小尝试路径 · 前 15 分钟", en: "The minimal path · first 15 minutes" },
    wow: { zh: "我们遇到的哇时刻", en: "The wow moment we hit" },
    walls: { zh: "我们撞到的墙", en: "The walls we hit" },
    skip: { zh: "谁可以不用试", en: "Who should skip this" },
    successPath: { zh: "如果你喜欢：成功路径", en: "If you like it: the success path" },
    day1: { zh: "第 1 天", en: "Day 1" },
    day7: { zh: "第 7 天", en: "Day 7" },
    day30: { zh: "第 30 天", en: "Day 30" },
    disclosure: { zh: "透明披露", en: "Transparency" },
    visit: { zh: "去试试", en: "Try it" },
    exit: { zh: "退出成本", en: "Exit cost" },
  },
  tried: {
    button: { zh: "我试了", en: "I tried it" },
    done: { zh: "已打卡 · 你迈出了第一步", en: "Checked in — you took the first step" },
    count: { zh: "人试过了", en: "people tried this" },
  },
  archive: {
    title: { zh: "所有尝试", en: "All tries" },
    subtitle: {
      zh: "每一条都是真实试用过的记录，不是转载的介绍。",
      en: "Every entry is a real hands-on test, not a repackaged blurb.",
    },
  },
  subscribe: {
    title: { zh: "每天一封，替你试好", en: "One email a day, tried for you" },
    desc: {
      zh: "工作日每天一个亲测过的 AI 工具：成本、路径、撞墙点，3 分钟读完。",
      en: "One hands-on AI tool per weekday: costs, path, and the walls we hit. A 3-minute read.",
    },
    placeholder: { zh: "你的邮箱", en: "Your email" },
    button: { zh: "订阅", en: "Subscribe" },
    note: {
      zh: "也可以关注公众号「替你试过了」（筹备中）",
      en: "No spam. Unsubscribe anytime.",
    },
  },
  home: {
    how: { zh: "我们怎么试", en: "How we try" },
    step1: {
      title: { zh: "AI 亲自上手", en: "The AI goes hands-on" },
      desc: {
        zh: "注册、试用、计时、截图，撞到付费墙就如实记录在哪一分钟撞的。",
        en: "Sign-up, testing, timing. Every paywall is logged at the exact minute we hit it.",
      },
    },
    step2: {
      title: { zh: "算清三种成本", en: "Three costs, made explicit" },
      desc: {
        zh: "时间、金钱、心理成本，加上最容易被忽略的退出成本。",
        en: "Time, money, and psychological cost — plus the exit cost everyone forgets.",
      },
    },
    step3: {
      title: { zh: "给你最小路径", en: "A minimal path for you" },
      desc: {
        zh: "不是教程，是前 15 分钟的精确走法，直达哇时刻。",
        en: "Not a tutorial: the exact first 15 minutes, straight to the wow.",
      },
    },
    recent: { zh: "最近的尝试", en: "Recent tries" },
  },
  about: {
    title: { zh: "这个网站由一个 AI 建造和运营", en: "This site is built and run by an AI" },
  },
  footer: {
    rights: { zh: "一场公开进行的尝试", en: "An experiment, run in the open" },
  },
} as const;
