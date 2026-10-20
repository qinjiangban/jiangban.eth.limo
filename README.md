# Web3 Decentralized Personal Linktree

这是一个极简、现代化的 Web3 个人主页模板，旨在帮助开发者和创作者建立自己的去中心化数字身份。该项目采用了类似 Link3 的 UI 风格，并且从底层架构上完全适配去中心化存储和解析网络。

本项目不需要后端服务器，不需要数据库，可以作为纯静态文件永久托管在 IPFS 或 Arweave 上，并通过 ENS（以太坊域名系统）进行解析访问。

## 🌟 核心特性

- **纯静态架构**：基于 Next.js 静态导出（Static Export），零服务器依赖。
- **Web3 原生**：天生支持部署至 IPFS/Filecoin/Arweave 等去中心化存储网络。
- **ENS 友好**：完美配合 `.eth` 域名及 ENS 官方的 `.limo`  Web2 网关。
- **现代化 UI**：采用 Tailwind CSS 构建，提供流畅的动画、渐变背景和极简的卡片式设计。
- **开箱即用**：预置了多款 Web2 和 Web3 常见社交平台的图标映射，支持二维码弹窗展示（如微信）。

## 🏗️ 技术栈

- **框架**: Next.js (App Router), React
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **图标**: 自定义本地 SVG/Image（支持任意自定义图标）

## 🚀 本地开发

首先，安装依赖：

```bash
pnpm install
# 或者
npm install
# 或者
yarn install
```

然后，启动本地开发服务器：

```bash
pnpm dev
# 或者
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可查看结果。中文页位于 `/`，英文页位于 `/en`。

构建静态站点：

```bash
pnpm build
# 产物输出到 out/ 目录
```

预览构建产物（纯静态导出，不使用 `next start`，需要任意静态文件服务器）：

```bash
pnpm start
# 等价于 npx --yes serve@latest out，默认监听 http://localhost:3000
```

> 本项目配置了 `output: 'export'`，产物是纯静态文件，`next start` 不适用（会直接报错退出）。
> `pnpm start` 通过 `serve` 预览 `out/` 目录；首次运行会按提示下载 `serve`，之后走 npx 缓存。
> 也可以用任何其他静态服务器，例如 `npx http-server out` 或 `python -m http.server`（需切到 out 目录）。

> 提示：部分受限沙箱环境无法为构建 worker 创建子进程（`spawn EPERM`）。此时可用 `NEXT_SKIP_TYPECHECK=1 NEXT_BUILD_WORKER_THREADS=1 pnpm build` 跳过构建期类型检查并改用 worker 线程，再单独执行 `pnpm exec tsc --noEmit` 校验类型；正常 CI / 本地环境无需设置这两个变量。

## 🌐 中英双语（中文优先）

- **中文为默认语言**，位于根路径 `/`，输出 `<html lang="zh-CN">`。
- **英文翻译**位于 `/en` 前缀下，输出 `<html lang="en">`。
- 顶部导航栏右侧提供中英切换按钮，切换时保持当前页面（例如 `/experience` ↔ `/en/experience`），并输出 `hrefLang` 提示。
- 采用「每种语言独立静态 URL」的方案（而不是同一 URL 用客户端替换文案）：每个页面在构建期完整渲染中文或英文 HTML，并配合 canonical、hreflang、Open Graph、`sitemap.xml` 与 JSON-LD 结构化数据，兼顾 SEO 与 AEO（AI 搜索引擎 / Agent 抓取）。
- 站点额外生成 `/sitemap.xml`、`/robots.txt`（显式放行主流 AI 爬虫）；`/llms.txt`、`/agent.json` 中同时声明中英文入口。
- 专有名词（`Jiangban Qin`、`jiangban.eth` 等）与外部媒体链接在任何语言下都保持不变，仅界面与正文文案做翻译。

### 文案与翻译文件

| 位置 | 说明 |
| --- | --- |
| `src/lib/i18n/config.ts` | 语言类型、URL 前缀、`localizePath`、hreflang 配置 |
| `src/lib/i18n/messages.ts` | 导航、页头等全站通用文案 |
| `src/lib/i18n/metadata.ts` | 每个页面的中英文 title / description、canonical 与 hreflang |
| `src/lib/i18n/content/*.ts` | 各页面的双语正文内容 |
| `src/lib/i18n/content/types.ts` | `LocalizedText` / `LocalizedList` / `pick` 等双语工具类型 |
| `src/app/(zh)`、`src/app/(en)` | 中英文两棵路由树，各自拥有根布局与 `<html lang>` |

## 🛠️ 定制您的专属主页

本模板被设计为极易修改：

1. **修改个人信息**: 编辑 `src/components/home/Profile.tsx`，替换您的名称、头衔和简介。
2. **替换头像**: 将您的头像图片命名为 `avatar.png` (或修改扩展名)，并放置在 `public/` 目录下。
3. **更新社交链接**: 编辑 `src/components/home/SocialLogo.tsx` 和 `src/components/home/SocialLinks.tsx` 中的 `links` 数组，更新为您自己的链接和图标。
4. **自定义图标**: 您可以将任何社交平台的 Logo 存放在 `public/logo/` 目录下，并在组件中通过 `Image` 组件引入。
5. **修改主题色**: 在 `src/app/globals.css` 中修改 `--color-brand` 和背景渐变颜色。
6. **修改双语文案**: 中文 / 英文页面正文分别位于 `src/lib/i18n/content/` 下的内容文件，新增页面时同步在 `src/app/(zh)` 与 `src/app/(en)/en` 中创建对应路由。

## 📦 去中心化部署指南

本项目已被配置为纯静态输出（`output: 'export'`），您可以将其部署到任何支持静态托管的服务上，这里推荐使用 **4EVERLAND** 或 **Fleek** 部署到去中心化网络。

### 使用 4EVERLAND 部署至 IPFS

1. 将您的代码推送到 GitHub。
2. 登录 [4EVERLAND Dashboard](https://dashboard.4everland.org/)，选择 **Hosting** -> **New Project**。
3. 导入您的 GitHub 仓库。
4. 在构建配置（Build Configuration）中选择：
   - **Framework Preset**: `Next.js`
   - **Build Command**: `next build` (或 `pnpm build`)
   - **Output Directory**: `out`
5. 点击 **Deploy**。4EVERLAND 会自动构建并将 `out` 目录中的文件发布到 IPFS。

### 配置 ENS 域名 (例如 `yourname.eth.limo`)

1. 在 4EVERLAND 部署成功后，进入项目详情页的 **Domains** 选项卡。
2. 添加您的 ENS 域名（例如 `yourname.eth`）。
3. 系统会提供一个 **Content Hash**。
4. 前往 ENS 官方 App (app.ens.domains)，在您的域名设置中，将 **Content Hash** 更新为上述值。
5. 等待链上交易确认后，您就可以通过 Web3 浏览器直接访问 `yourname.eth`，或者通过 Web2 网关访问 `https://yourname.eth.limo`。

> **IPFS 部署注意事项（重要）**：
>
> - 本项目已在 `next.config.ts` 中设置 `trailingSlash: true`。IPFS 网关（包括 `.eth.limo`）按「目录 + `index.html`」解析 URL，**不会**像 Vercel/Netlify 那样把 `/en` 映射到 `en.html`。因此 `/en`、`/experience` 等页面必须导出为 `en/index.html`、`experience/index.html` 这种目录结构才能通过网关访问；站内链接也因此统一带结尾斜杠（如 `/en/experience/`）。
> - **每次重新部署后 IPFS CID 都会变化**，必须重新到 app.ens.domains 更新 Content Hash，否则 `.eth.limo` 仍指向旧版本。
> - 更新 Content Hash 后，`.limo` 网关可能有几分钟到几小时的缓存，页面未生效时先等待再排查。
> - 本地预览构建产物请用 `pnpm start`（内部是 `npx serve out`）；静态导出模式不支持 `next start`。

## 📄 许可证

Apache License 2.0 - 欢迎自由分发、修改和使用。