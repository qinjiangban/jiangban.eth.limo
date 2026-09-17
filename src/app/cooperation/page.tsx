import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  Briefcase,
  Code2,
  Landmark,
  Mail,
  Search,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { RiChat3Fill } from "react-icons/ri";

export const metadata: Metadata = {
  title: "商务合作 - Jiangban Qin",
  description: "Jiangban Qin 的商务合作方向、核心能力与联系方式",
};

const pastProjects = [
  "DApp 产品开发",
  "Web3 社交平台建设",
  "RWA 代币化项目设计",
  "投资者仪表板开发",
  "链上数据与预言机研究",
  "AI Agent 工作流建设",
  "Web3 品牌与媒体运营",
];

type Capability = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  intro: string;
  groups: { label: string; items: string[] }[];
};

const capabilities: Capability[] = [
  {
    icon: Code2,
    title: "DApp 开发",
    intro: "构建基于 Ethereum、Base 等 EVM 生态的链上应用。",
    groups: [
      {
        label: "技术栈",
        items: [
          "Next.js",
          "React",
          "TypeScript",
          "Wagmi",
          "Viem",
          "Solidity",
          "钱包连接",
          "IPFS 存储",
        ],
      },
      {
        label: "服务内容",
        items: [
          "DApp 0到1 MVP 开发",
          "智能合约前端集成",
          "钱包登录系统",
          "链上支付与交互",
          "NFT 与 Token 功能接入",
          "创作者工具与仪表板",
        ],
      },
    ],
  },
  {
    icon: Wallet,
    title: "AI Agent 支付集成",
    intro: "帮助产品接入 AI Agent 时代的新型支付体系。",
    groups: [
      {
        label: "能力",
        items: [
          "x402 协议集成",
          "Agent 支付流程",
          "稳定币支付",
          "API 商业化",
          "机器间支付",
        ],
      },
      {
        label: "适用于",
        items: ["AI Agent 产品", "MCP 服务", "SaaS API", "Web3 工具产品"],
      },
    ],
  },
  {
    icon: Bot,
    title: "AI Agent 与自动化",
    intro: "构建 AI 驱动的自动化系统。",
    groups: [
      {
        label: "技术",
        items: [
          "Agent 工作流设计",
          "MCP 集成",
          "OpenAI 集成",
          "Claude 集成",
          "AI 内容流程",
          "Web3 Agent",
        ],
      },
      {
        label: "可提供",
        items: [
          "Agent 原型开发",
          "Agent 工具调用设计",
          "AI 自动化工作流",
          "Web3 Agent 产品设计",
        ],
      },
    ],
  },
  {
    icon: Search,
    title: "AEO（AI Engine Optimization）",
    intro: "帮助项目被 AI 搜索引擎与 Agent 发现。",
    groups: [
      {
        label: "能力",
        items: [
          "AI 搜索优化",
          "LLM SEO",
          "llms.txt 建设",
          "Agent 入口设计",
          "结构化数据设计",
          "知识库架构",
        ],
      },
      {
        label: "适用于",
        items: ["Web3 项目", "AI 产品", "SaaS 产品", "个人品牌", "电子商务网站"],
      },
    ],
  },
  {
    icon: Landmark,
    title: "RWA 咨询",
    intro: "参与多个 RWA 方向项目研究与实践。",
    groups: [
      {
        label: "能力",
        items: [
          "RWA 产品设计",
          "代币化策略",
          "投资者仪表板",
          "预言机架构",
          "数据验证设计",
          "跨境数据结构",
        ],
      },
      {
        label: "关注方向",
        items: [
          "收益权代币化",
          "实体资产映射",
          "合规架构研究",
          "链上金融产品设计",
        ],
      },
    ],
  },
  {
    icon: TrendingUp,
    title: "增长与营销",
    intro: "拥有市场营销专业背景以及运营经验。",
    groups: [
      {
        label: "能力",
        items: [
          "Web3 社区增长",
          "X（Twitter）运营",
          "Farcaster 运营",
          "内容营销",
          "品牌传播",
          "活动推广",
        ],
      },
      {
        label: "可提供",
        items: [
          "Web3 项目推广合作",
          "品牌曝光合作",
          "社媒内容传播",
          "社区增长支持",
        ],
      },
    ],
  },
];

const cooperationItems = [
  "DApp 开发",
  "Web3 MVP 搭建",
  "AI Agent 产品开发",
  "x402 支付集成",
  "AEO 优化",
  "RWA 项目咨询",
  "Web3 品牌推广",
  "社媒营销合作",
  "顾问服务",
  "产品周期规划",
  "投资者仪表板开发",
  "代币化方案研究",
  "DApp 项目交付",
  "香港与中国内地监管研究",
  "预言机与数据上链架构设计",
];

const audiences = [
  "创业者",
  "投资机构",
  "Web3 项目方",
  "AI Agent Builder",
  "RWA 项目团队",
  "需要推广至中文市场",
];

const contactNotes = ["项目背景", "当前阶段", "技术需求", "时间规划", "预算范围"];

export default function CooperationPage() {
  return (
    <div className="flex flex-1 flex-col items-center p-4 font-sans selection:bg-brand selection:text-white">
      <main className="flex w-full max-w-3xl flex-col gap-10">
        {/* 顶部导航 */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex size-8 items-center justify-center rounded-full border border-white/70 bg-white/90 text-zinc-600 shadow-sm transition-colors hover:bg-white hover:text-brand"
            aria-label="返回首页"
          >
            <ArrowLeft className="size-4" />
          </Link>
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            商务合作
          </h1>
        </div>

        {/* 关于商务 */}
        <section className="rounded-[24px] border border-white/70 bg-white/95 p-6 shadow-sm ring-black/5 backdrop-blur">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Briefcase className="size-5" />
            </div>
            <h2 className="text-lg font-bold tracking-tight text-foreground">
              关于商务
            </h2>
          </div>

          <p className="text-sm leading-7 text-zinc-700">
            我是一名 Web3 Builder，专注于 DApp 开发、RWA 应用设计、DeFAI
            应用、AI Agent 集成、AEO 优化以及 Web3
            产品增长。拥有市场营销与产品策划背景，同时具备 Web3
            产品开发能力，长期关注数字资产、AI Agent、RWA
            以及链上商业模式创新。
          </p>

          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              过去参与和主导过
            </p>
            <div className="flex flex-wrap gap-2">
              {pastProjects.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-[13px] font-medium text-brand"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 核心能力 */}
        <section>
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            核心能力
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {capabilities.map((cap) => (
              <CapabilityCard key={cap.title} capability={cap} />
            ))}
          </div>
        </section>

        {/* 合适的合作 */}
        <section>
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            合适的合作
          </h2>
          <div className="flex flex-wrap gap-2">
            {cooperationItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-200 bg-white/80 px-3.5 py-1.5 text-[13px] font-medium text-zinc-700 shadow-sm transition-colors hover:border-brand/30 hover:text-brand"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* 联系 */}
        <section className="rounded-[24px] border border-brand/15 bg-gradient-to-br from-white/95 to-brand/5 p-6 shadow-sm ring-black/5 backdrop-blur">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-sm shadow-brand/25">
              <Mail className="size-5" />
            </div>
            <h2 className="text-lg font-bold tracking-tight text-foreground">
              联系
            </h2>
          </div>

          <p className="mb-5 text-sm leading-7 text-zinc-700">
            欢迎通过网站提供的联系方式发起合作。
          </p>

          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              适合以下人群
            </p>
            <div className="flex flex-wrap gap-2">
              {audiences.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-brand/10 px-3 py-1 text-[13px] font-medium text-brand"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              联系时建议说明
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {contactNotes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-zinc-700"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="https://x.com/i/chat/1288256201445130240-1288256201445130240"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand/25 transition-colors hover:bg-brand/90"
          >
            通过 X 联系
            <RiChat3Fill  className="size-4" />
          </Link>
        </section>
      </main>
    </div>
  );
}

function CapabilityCard({ capability }: { capability: Capability }) {
  const Icon = capability.icon;

  return (
    <div className="flex flex-col rounded-[20px] border border-white/70 bg-white/95 p-5 shadow-sm ring-black/5 backdrop-blur transition-all duration-300 hover:shadow-md">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Icon className="size-5" />
        </div>
        <h3 className="text-base font-bold tracking-tight text-foreground">
          {capability.title}
        </h3>
      </div>

      <p className="mb-4 text-[13px] leading-relaxed text-zinc-500">
        {capability.intro}
      </p>

      <div className="space-y-4">
        {capability.groups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              {group.label}
            </p>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13px] leading-relaxed text-zinc-700"
                >
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
