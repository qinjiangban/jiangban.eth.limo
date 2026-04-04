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

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可查看结果。

## 🛠️ 定制您的专属主页

本模板被设计为极易修改：

1. **修改个人信息**: 编辑 `src/components/Profile.tsx`，替换您的名称、头衔和简介。
2. **替换头像**: 将您的头像图片命名为 `avatar.png` (或修改扩展名)，并放置在 `public/` 目录下。
3. **更新社交链接**: 编辑 `src/components/SocialLogo.tsx` 和 `src/components/SocialLinks.tsx` 中的 `links` 数组，更新为您自己的链接和图标。
4. **自定义图标**: 您可以将任何社交平台的 Logo 存放在 `public/logo/` 目录下，并在组件中通过 `Image` 组件引入。
5. **修改主题色**: 在 `src/app/globals.css` 中修改 `--color-brand` 和背景渐变颜色。

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

## 📄 许可证

Apache License 2.0 - 欢迎自由分发、修改和使用。