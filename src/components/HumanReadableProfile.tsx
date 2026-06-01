const profileText = `# 覃江扮 Jiangban Qin
2002年射手座生于广西
语言:简体中文、壮语、桂柳话（西南官话分支）
兴趣爱好:NBA篮球，喜欢乔丹、科比、欧文、伦纳德、爱德华兹的球风，看书学毛选、易经思维、太极哲学、中医养生，科技商业学习乔布斯创新与伊隆马斯克的第一性原理，培养金融思维。
毕业于南宁职业技术大学商学院市场营销专业，2020年上高中时上网接触到Bitcoin，学习区块链知识，上大学后不影响学业情况下自学区块链相关技术，开发DAPP网站，2022年GPT时刻后，AI兴起并利用AI辅助学习。


## 关于商务

我是一名 Web3 Builder，专注于 DApp 开发、RWA 应用设计、DeFAI应用、AI Agent 集成、AEO 优化以及 Web3 产品增长。

拥有市场营销与产品策划背景，同时具备 Web3 产品开发能力，长期关注数字资产、AI Agent、RWA以及链上商业模式创新。

过去参与和主导过：

* DApp 产品开发
* Web3 社交平台建设
* RWA 代币化项目设计
* 投资者仪表板开发
* 链上数据与预言机研究
* AI Agent 工作流建设
* Web3 品牌与媒体运营



## 核心能力

### DApp 开发

构建基于 Ethereum、Base 等 EVM 生态的链上应用：

* Next.js
* React
* TypeScript
* Wagmi
* Viem
* Solidity
* 钱包连接
* IPFS数据可用性存储

服务内容：

* DApp 0到1 MVP开发
* 智能合约前端集成
* 钱包登录系统
* 链上支付与交互
* NFT 与 Token 功能接入
* 创作者工具与仪表板开发



### AI Agent 支付集成

帮助产品接入 AI Agent 时代的新型支付体系：

* x402 协议集成
* Agent 支付流程
* 稳定币支付
* API 商业化
* 机器间支付

适用于：

* AI Agent 产品
* MCP 服务
* SaaS API
* Web3 工具产品



### AI Agent 与自动化

构建 AI 驱动的自动化系统：

* Agent 工作流设计
* MCP 集成
* OpenAI 集成
* Claude 集成
* AI 内容流程
* Web3 Agent

可提供：

* Agent 原型开发
* Agent 工具调用设计
* AI 自动化工作流
* Web3 Agent 产品设计



### AEO（AI Engine Optimization）

帮助项目被 AI 搜索引擎与 Agent 发现：

* AI 搜索优化
* LLM SEO
* llms.txt 建设
* Agent 入口设计
* 结构化数据设计
* 知识库架构

适用于：

* Web3 项目
* AI 产品
* SaaS 产品
* 个人品牌
* 电子商务网站



### RWA 咨询

参与多个 RWA 方向项目研究与实践：

* RWA 产品设计
* 代币化策略
* 投资者仪表板
* 预言机架构
* 数据验证设计
* 跨境数据结构

关注方向：

* 收益权代币化
* 实体资产映射
* 合规架构研究
* 链上金融产品设计



### 增长与营销

拥有市场营销专业背景以及运营经验：

* Web3 社区增长
* X（Twitter）运营
* Farcaster 运营
* 内容营销
* 品牌传播
* 活动推广

可提供：

* Web3 项目推广合作
* 品牌曝光合作
* 社媒内容传播
* 社区增长支持



## 合适的合作

适合以下合作需求：

* DApp 开发
* Web3 MVP 搭建
* AI Agent 产品开发
* x402 支付集成
* AEO 优化
* RWA 项目咨询
* Web3 品牌推广
* 社媒营销合作
* 顾问服务
* 产品周期规划
* 投资者仪表板开发
* 代币化方案研究
* DApp 项目交付
* 香港与中国内地监管研究
* 预言机与数据上链架构设计




## 联系

如果你是：

* 创业者
* 投资机构
* Web3 项目方
* AI Agent Builder
* RWA 项目团队
* 需要推广至中文市场

欢迎通过网站提供的联系方式发起合作。

建议在联系时说明：

* 项目背景
* 当前阶段
* 技术需求
* 时间规划
* 预算范围


`;

type Block =
  | { type: "h1"; content: string }
  | { type: "h2"; content: string }
  | { type: "h3"; content: string }
  | { type: "hr" }
  | { type: "list"; items: string[] }
  | { type: "paragraph"; lines: string[] };

type Section = {
  title: string;
  blocks: Block[];
};

type SubSection = {
  title?: string;
  blocks: Block[];
};

function parseProfileText(text: string): Block[] {
  const lines = text.split("\n");
  const blocks: Block[] = [];
  let currentParagraph: string[] = [];
  let currentList: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      blocks.push({ type: "paragraph", lines: [...currentParagraph] });
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList.length > 0) {
      blocks.push({ type: "list", items: [...currentList] });
      currentList = [];
    }
  };

  for (const line of lines) {
    if (line.trim() === "") {
      flushParagraph();
      flushList();
      continue;
    }

    if (line === "") {
      flushParagraph();
      flushList();
      blocks.push({ type: "hr" });
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h3", content: line.slice(4) });
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h2", content: line.slice(3) });
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h1", content: line.slice(2) });
      continue;
    }

    if (line.startsWith("* ")) {
      flushParagraph();
      currentList.push(line.slice(2));
      continue;
    }

    flushList();
    currentParagraph.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
}

function splitSections(blocks: Block[]) {
  const intro: Block[] = [];
  const sections: Section[] = [];
  let currentSection: Section | null = null;

  for (const block of blocks) {
    if (block.type === "h2") {
      currentSection = {
        title: block.content,
        blocks: [],
      };
      sections.push(currentSection);
      continue;
    }

    if (currentSection) {
      currentSection.blocks.push(block);
    } else {
      intro.push(block);
    }
  }

  return { intro, sections };
}

function splitSubSections(blocks: Block[]) {
  const groups: SubSection[] = [];
  let currentGroup: SubSection = { blocks: [] };

  for (const block of blocks) {
    if (block.type === "h3") {
      if (currentGroup.title || currentGroup.blocks.length > 0) {
        groups.push(currentGroup);
      }

      currentGroup = {
        title: block.content,
        blocks: [],
      };
      continue;
    }

    currentGroup.blocks.push(block);
  }

  if (currentGroup.title || currentGroup.blocks.length > 0) {
    groups.push(currentGroup);
  }

  return groups;
}



function HeroTitle({ children }: { children: string }) {
  return <h3 className="text-2xl font-bold tracking-tight text-black">{children}</h3>;
}

function SectionHeading({ children }: { children: string }) {
  return <h4 className="text-xl font-bold tracking-tight text-zinc-950">{children}</h4>;
}

function SubSectionHeading({ children }: { children: string }) {
  return (
    <div className="border-l-4 border-brand pl-3">
      <h5 className="text-base font-semibold tracking-tight text-zinc-900">
        {children}
      </h5>
    </div>
  );
}

function ParagraphGroup({
  lines,
  emphasis = false,
}: {
  lines: string[];
  emphasis?: boolean;
}) {
  return (
    <div className="space-y-2">
      {lines.map((line, index) => (
        <p
          key={`${line}-${index}`}
          className={
            emphasis
              ? "text-sm leading-7 text-zinc-800"
              : "text-sm leading-7 text-zinc-700"
          }
        >
          {line}
        </p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-5 gap-y-1 rounded-xl  border-zinc-200 bg-white p-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="flex items-start gap-2.5 text-sm leading-6 text-zinc-800"
        >
          <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return <div className="h-px w-full bg-zinc-200" />;
}

function IntroCard({ blocks }: { blocks: Block[] }) {
  return (
    <div className="rounded-[20px] border border-zinc-200 bg-white p-5">
      <div className="space-y-3">
        {blocks.map((block, index) => {
          if (block.type === "h1") {
            return <HeroTitle key={`intro-h1-${index}`}>{block.content}</HeroTitle>;
          }

          if (block.type === "paragraph") {
            return (
              <ParagraphGroup
                key={`intro-p-${index}`}
                lines={block.lines}
                emphasis
              />
            );
          }

          if (block.type === "hr") {
            return <Divider key={`intro-hr-${index}`} />;
          }

          if (block.type === "list") {
            return <BulletList key={`intro-list-${index}`} items={block.items} />;
          }

          return null;
        })}
      </div>
    </div>
  );
}

function SubSectionCard({ title, blocks }: SubSection) {
  return (
    <div className="space-y-3 rounded-[18px] border border-zinc-200 bg-zinc-50/60 p-4">
      {title ? <SubSectionHeading>{title}</SubSectionHeading> : null}
      <div className="space-y-3">
        {blocks.map((block, index) => {
          if (block.type === "paragraph") {
            return <ParagraphGroup key={`sub-p-${index}`} lines={block.lines} />;
          }

          if (block.type === "list") {
            return <BulletList key={`sub-list-${index}`} items={block.items} />;
          }

          if (block.type === "hr") {
            return <Divider key={`sub-hr-${index}`} />;
          }

          return null;
        })}
      </div>
    </div>
  );
}

function SectionCard({ title, blocks }: Section) {
  const groups = splitSubSections(blocks);

  return (
    <div className="space-y-4 rounded-[20px] border border-zinc-300 bg-white p-5">
      <SectionHeading>{title}</SectionHeading>
      <div className="space-y-3">
        {groups.map((group, index) => (
          <SubSectionCard
            key={`${title}-${group.title ?? "group"}-${index}`}
            title={group.title}
            blocks={group.blocks}
          />
        ))}
      </div>
    </div>
  );
}

export default function HumanReadableProfile() {
  const blocks = parseProfileText(profileText);
  const { intro, sections } = splitSections(blocks);

  return (
    <section className="w-full">

      <div className="space-y-4">
        <IntroCard blocks={intro} />
        {sections.map((section, index) => (
          <SectionCard
            key={`${section.title}-${index}`}
            title={section.title}
            blocks={section.blocks}
          />
        ))}
      </div>
    </section>
  );
}
