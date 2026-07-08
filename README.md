# Tried For You · 替你试过了

> An AI tries one AI tool every day, so you know if it's worth trying, how to start, and how to walk away.
> 一个 AI 每天替你试用一个 AI 工具，告诉你值不值得试、怎么试、随时怎么撤。

**Domain**: [triedforyou.com](https://triedforyou.com) · **Status**: Phase 1 MVP · **Built by AI, run in the open.**

## 这是什么

每个工具发布为一张结构化的「尝试卡片」（try card），核心字段：

- **三种成本**：到哇时刻的时间（实测计时）、金钱成本（免费额度的真实边界）、心理成本（要不要露脸/绑卡/排队）
- **退出成本**：随时能不能无痛离开——几乎没人做，但这是"不敢尝试"的最大心理障碍
- **最小尝试路径**：前 15 分钟的精确走法，不是教程
- **撞墙记录**：在第几分钟撞到付费墙/网络墙，如实记录
- **成功路径**：Day 1 → Day 7 → Day 30
- **透明披露**：AI 做了什么、人类复核了什么

## 技术栈

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4。全静态生成，无数据库，托管在免费层即可运行。

```
app/[locale]/            # zh / en 双语路由
  page.tsx               # 首页：今日一试
  tries/page.tsx         # 归档
  tries/[slug]/page.tsx  # 尝试报告详情
  about/page.tsx         # Built by AI 透明页
content/tries/*.ts       # 尝试卡片（结构化双语数据）
lib/types.ts             # TryCard 数据模型
lib/i18n.ts              # 界面文案字典
```

## 本地开发

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # 生产构建
```

## 发布一张新卡片

1. 在 `content/tries/` 新建 `<tool>.ts`，按 `TryCard` 类型填写双语内容
2. 在 `lib/tries.ts` 的 `cards` 数组中登记
3. `date` 最新的卡片自动成为首页「今日一试」

**内容红线**：所有价格、免费额度、可用性信息必须在发布当天人工复核过。当前仓库里的 3 张卡片（NotebookLM / ElevenLabs / Suno）是 MVP 示例稿，数字基于训练知识，**上线前必须逐条重新实测核对**。

## 上线前待办

- [ ] **部署**：推荐 Vercel（`vercel --prod`），或 Cloudflare Pages（需 `@opennextjs/cloudflare` 适配）。域名已在 Cloudflare，Vercel 部署后在 Cloudflare DNS 加 CNAME 指向 `cname.vercel-dns.com` 即可
- [ ] **邮件订阅**：注册 [Buttondown](https://buttondown.com)（免费 100 订阅者），把用户名填入 `components/SubscribeForm.tsx` 的 `BUTTONDOWN_USERNAME`。接通前提交的邮箱暂存在访客浏览器 localStorage，不会丢但也收不到，尽早接通
- [ ] **打卡后端**：`TriedButton` 目前是 localStorage 雏形，Phase 2 换成真实计数（Cloudflare Workers KV 或 Vercel KV 均可，成本约为零）
- [ ] **统计**：接入 Plausible / Umami / Cloudflare Web Analytics（选一个，都免注册用户隐私友好）
- [ ] **复核示例内容**：见上文内容红线

## 运营节奏（Phase 1）

工作日每天一张卡片。AI 完成试用、计时、双语初稿；人类复核事实、把关品味、负责全部分发（小红书 / 公众号 / 即刻 / X）。所有联盟链接明确标注，评分先于联盟计划选择。
