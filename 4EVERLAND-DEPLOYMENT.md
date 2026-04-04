# 4EVERLAND 部署指南

本项目配置了全自动的 GitHub Actions 工作流，用于将 Next.js 的静态构建导出并直接部署到 4EVERLAND。

## 工作原理

1. 您的代码（Next.js 源文件）位于 GitHub 的 `main`（或 `master`）分支。
2. 每次推送代码到主分支时，GitHub Actions 会自动触发构建（`pnpm build`），生成静态文件夹 `out`。
3. Actions 脚本会自动将 `out` 文件夹中的纯静态内容提取，并推送到仓库的一个特殊分支：`gh-pages`。
4. **4EVERLAND Hosting 直接绑定这个 `gh-pages` 分支即可。**

## 详细配置步骤

### 第一步：在 GitHub 上的准备工作

1. 确保您的项目已经推送到 GitHub 仓库。
2. 在 GitHub 仓库设置中（Settings -> Actions -> General）：
   - 找到 **Workflow permissions**，确保勾选了 **Read and write permissions**（这允许 Actions 向您的仓库推送静态文件分支）。
   - 点击 **Save**。

### 第二步：触发自动构建

1. 在本地完成任何修改后，提交并推送到 GitHub 的 `main` 分支。
2. 转到 GitHub 仓库的 **Actions** 选项卡，您会看到名为 `Deploy Next.js to gh-pages for 4everland` 的工作流正在运行。
3. 等待其运行成功（绿色的对勾）。此时，您的仓库中应该会自动生成一个包含纯静态页面的 `gh-pages` 分支。

### 第三步：在 4EVERLAND (dashboard.4everland.org) 部署

1. 登录 [dashboard.4everland.org](https://dashboard.4everland.org/)。
2. 进入 **Hosting** 面板，点击 **New Project**。
3. 选择 **Import from Git**，连接并授权您的 GitHub 账号。
4. 找到并选择这个个人网站所在的 GitHub 仓库。
5. **【关键步骤】配置部署设置**：
   - **Branch**：将部署分支从默认的 `main` 改为 **`gh-pages`**。
   - **Framework Preset**：选择 **Other** 或保持默认。
   - **Build Command**：**清空**（留白），因为内容已经是构建好的静态文件。
   - **Output Directory**：**清空**（或填 `/`，取决于界面要求，通常留白即可），因为整个分支就是静态资源。
6. 点击 **Deploy**。

4EVERLAND 现在会直接拉取 `gh-pages` 分支的纯静态内容进行分布式部署并上传至 IPFS/Arweave，速度会非常快，因为它不需要在 4EVERLAND 的服务器上再执行一次 `npm run build`。

### 第四步：配置 ENS 域名 (jiangban.eth.limo)

1. 在 4EVERLAND 部署成功后，进入项目的 **Settings -> Domains**。
2. 找到 ENS 配置选项，添加 `jiangban.eth`。
3. 按照 4EVERLAND 提供的指引，去 ENS DApp 更新域名的 Content Hash（指向 4EVERLAND 提供的 IPFS CID）。
4. 确认后，即可通过 `https://jiangban.eth.limo` 访问您的网站。