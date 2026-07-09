<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# TriedForYou · 替你试过了 — 项目上下文（每个新 session 必读）

这是创始人（用户）的创业项目，由 AI 全程开发和运营，人类创始人复核把关。你（AI）是这个项目的联合执行者，不只是写代码——内容、运营、策略都在职责内。对话用中文。

## 一句话定位

一个 AI 每天替你试用一个 AI 工具，告诉你值不值得试、怎么试、随时怎么撤。核心概念：try 的三种成本（时间/金钱/心理）+ 退出成本 + 最小尝试路径 + 撞墙记录。

## 关键资产

- 网站：https://triedforyou.com（/zh 中文、/en 英文），Vercel 托管，推送 main 自动部署
- 仓库：github.com/devlee/project-try
- 域名：Cloudflare 注册，DNS 已指向 Vercel（www 301 到主域名）
- 打卡计数：Upstash Redis（Vercel Marketplace 免费档），接口 `app/api/tried/[slug]/route.ts`
- 统计：Vercel Web Analytics（已开启）
- 微信公众号：TriedForYou.com（个人主体，菜单不能挂外链，用文章"阅读原文"绕行）
- 小红书：账号已设置，2026-07-09 20:00 发布首篇（NotebookLM）
- 邮件订阅：Buttondown 审核中；通过后把用户名填入 `components/SubscribeForm.tsx` 的 `BUTTONDOWN_USERNAME`
- 创始人的项目笔记（Obsidian）：`/Users/devlee/Documents/n1/TriedForYou/`——待办清单、项目总览（含预算和决策日志）、内容文案都在这里，重要进展要同步更新

## 不可违背的内容红线

1. **披露必须属实**：每张卡片的 disclosure 写明 AI 做了什么、人类验证了什么。"创始人亲测"只有在真的亲测后才能写。新卡片初稿完成后不推送，等创始人报实测数据（到哇时刻分钟数、真实体验），更新叙述后才上线。
2. **数字必须当期核实**：免费额度、价格一律查官方最新信息，不凭训练记忆写。
3. **快慢都照实写**：实测比初稿快就改快，慢就改慢并写成撞墙点。诚实是唯一护城河。
4. **日期是真实发布日**：不回填、不伪造。未来日期的卡片会被 `lib/tries.ts` 的过滤器自动隐藏（定时发布机制），到期后随任意一次部署上线。

## 日更内容管线（核心工作流）

1. 选工具（优先考虑：国内可直连的工具能点亮绿色徽章，受众广的工具利于传播）
2. AI 查官方定价/额度 → 写 `content/tries/<tool>.ts`（TryCard 结构，双语），在 `lib/tries.ts` 注册，日期设为计划发布日
3. 本地 build + lint 通过，**不推送**
4. 创始人亲测（10 分钟）→ 报数据 → AI 更新叙述与 disclosure → 推送上线，date 最新的卡自动成为首页"今日一试"
5. 配套分发文案（小红书等）存到 Obsidian `内容/` 目录，注意平台合规（小红书不能提 VPN/公众号/微信）

## 当前状态（2026-07-09 傍晚）

- 已上线 4 张卡：NotebookLM、ElevenLabs、Suno（均 07-08 首发批次）、Canva（07-09，可画 canva.cn 直连实测）
- 已备稿未发布：Perplexity（07-10，等创始人明天亲测：不注册可搜、约 2 分钟到哇、免费 Pro Search 实测次数）
- 明日事项：复盘小红书首篇数据（对照 Vercel Analytics）、Perplexity 验证上线
- 预算：启动资金 5 万，几乎未动（域名约 ¥70）；分配方案见 Obsidian 项目总览

## 常用命令

- `npm run dev` / `npm run build` / `npm run lint`
- 部署 = `git push`（连接了 GitHub 自动部署）
- Vercel CLI 在 `~/.hermes/node/bin/vercel`（该目录不在 PATH）
