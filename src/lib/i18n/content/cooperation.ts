import type { LocalizedList, LocalizedText } from "@/lib/i18n/content/types";

/**
 * 商务合作页（/cooperation 与 /en/cooperation）的全部文案。
 *
 * 页面组件只负责布局与图标，所有可见文字都从这里按 locale 取值；
 * 中英文成对出现，保证两个语种都不会漏翻。
 */

/** 单张核心能力卡片 */
export type CapabilityContent = {
  /** 图标标识：页面按该 key 映射对应的 lucide 图标，保证图标数量与顺序不变 */
  key: "dapp" | "agentPayment" | "aiAgents" | "aeo" | "rwa" | "growth";
  title: LocalizedText;
  intro: LocalizedText;
  groups: {
    label: LocalizedText;
    items: LocalizedList;
  }[];
};

export type CooperationContent = {
  /** 页面标题（h1） */
  title: LocalizedText;
  /** 返回首页链接的无障碍标签 */
  backHome: LocalizedText;
  /** 关于商务 */
  about: {
    title: LocalizedText;
    description: LocalizedText;
    pastProjectsLabel: LocalizedText;
    pastProjects: LocalizedList;
  };
  /** 核心能力 */
  capabilities: {
    title: LocalizedText;
    items: CapabilityContent[];
  };
  /** 合适的合作 */
  engagements: {
    title: LocalizedText;
    items: LocalizedList;
  };
  /** 联系 */
  contact: {
    title: LocalizedText;
    description: LocalizedText;
    audiencesLabel: LocalizedText;
    audiences: LocalizedList;
    notesLabel: LocalizedText;
    notes: LocalizedList;
    cta: LocalizedText;
  };
};

export const cooperationContent: CooperationContent = {
  title: { zh: "商务合作", en: "Business Cooperation" },
  backHome: { zh: "返回首页", en: "Back to home" },

  about: {
    title: { zh: "关于商务", en: "About My Work" },
    description: {
      zh: "我是一名 Web3 Builder，专注于 DApp 开发、RWA 应用设计、DeFAI 应用、AI Agent 集成、AEO 优化以及 Web3 产品增长。拥有市场营销与产品策划背景，同时具备 Web3 产品开发能力，长期关注数字资产、AI Agent、RWA 以及链上商业模式创新。",
      en: "I'm a Web3 builder focused on DApp development, RWA application design, DeFAI applications, AI Agent integration, AEO optimization, and Web3 product growth. With a background in marketing and product planning plus hands-on Web3 product development skills, I've long been tracking digital assets, AI Agents, RWA, and onchain business model innovation.",
    },
    pastProjectsLabel: {
      zh: "过去参与和主导过",
      en: "Past Projects",
    },
    pastProjects: {
      zh: [
        "DApp 产品开发",
        "Web3 社交平台建设",
        "RWA 代币化项目设计",
        "投资者仪表板开发",
        "链上数据与预言机研究",
        "AI Agent 工作流建设",
        "Web3 品牌与媒体运营",
      ],
      en: [
        "DApp product development",
        "Web3 social platform development",
        "RWA tokenization project design",
        "Investor dashboard development",
        "Onchain data and oracle research",
        "AI Agent workflow development",
        "Web3 branding and media operations",
      ],
    },
  },

  capabilities: {
    title: { zh: "核心能力", en: "Core Capabilities" },
    items: [
      {
        key: "dapp",
        title: { zh: "DApp 开发", en: "DApp Development" },
        intro: {
          zh: "构建基于 Ethereum、Base 等 EVM 生态的链上应用。",
          en: "Building onchain applications on EVM ecosystems such as Ethereum and Base.",
        },
        groups: [
          {
            label: { zh: "技术栈", en: "Tech Stack" },
            items: {
              zh: [
                "Next.js",
                "React",
                "TypeScript",
                "Wagmi",
                "Viem",
                "Solidity",
                "钱包连接",
                "IPFS 存储",
              ],
              en: [
                "Next.js",
                "React",
                "TypeScript",
                "Wagmi",
                "Viem",
                "Solidity",
                "Wallet connection",
                "IPFS storage",
              ],
            },
          },
          {
            label: { zh: "服务内容", en: "Services" },
            items: {
              zh: [
                "DApp 0到1 MVP 开发",
                "智能合约前端集成",
                "钱包登录系统",
                "链上支付与交互",
                "NFT 与 Token 功能接入",
                "创作者工具与仪表板",
              ],
              en: [
                "DApp 0-to-1 MVP development",
                "Smart contract frontend integration",
                "Wallet login systems",
                "Onchain payments and interactions",
                "NFT and Token feature integration",
                "Creator tools and dashboards",
              ],
            },
          },
        ],
      },
      {
        key: "agentPayment",
        title: {
          zh: "AI Agent 支付集成",
          en: "AI Agent Payment Integration",
        },
        intro: {
          zh: "帮助产品接入 AI Agent 时代的新型支付体系。",
          en: "Helping products adopt the new payment infrastructure of the AI Agent era.",
        },
        groups: [
          {
            label: { zh: "能力", en: "Capabilities" },
            items: {
              zh: [
                "x402 协议集成",
                "Agent 支付流程",
                "稳定币支付",
                "API 商业化",
                "机器间支付",
              ],
              en: [
                "x402 protocol integration",
                "Agent payment flows",
                "Stablecoin payments",
                "API monetization",
                "Machine-to-machine payments",
              ],
            },
          },
          {
            label: { zh: "适用于", en: "Best For" },
            items: {
              zh: ["AI Agent 产品", "MCP 服务", "SaaS API", "Web3 工具产品"],
              en: [
                "AI Agent products",
                "MCP services",
                "SaaS APIs",
                "Web3 tooling products",
              ],
            },
          },
        ],
      },
      {
        key: "aiAgents",
        title: { zh: "AI Agent 与自动化", en: "AI Agent & Automation" },
        intro: {
          zh: "构建 AI 驱动的自动化系统。",
          en: "Building AI-driven automation systems.",
        },
        groups: [
          {
            label: { zh: "技术", en: "Tech" },
            items: {
              zh: [
                "Agent 工作流设计",
                "MCP 集成",
                "OpenAI 集成",
                "Claude 集成",
                "AI 内容流程",
                "Web3 Agent",
              ],
              en: [
                "Agent workflow design",
                "MCP integration",
                "OpenAI integration",
                "Claude integration",
                "AI content pipelines",
                "Web3 Agents",
              ],
            },
          },
          {
            label: { zh: "可提供", en: "What I Offer" },
            items: {
              zh: [
                "Agent 原型开发",
                "Agent 工具调用设计",
                "AI 自动化工作流",
                "Web3 Agent 产品设计",
              ],
              en: [
                "Agent prototyping",
                "Agent tool-calling design",
                "AI automation workflows",
                "Web3 Agent product design",
              ],
            },
          },
        ],
      },
      {
        key: "aeo",
        title: {
          zh: "AEO（AI Engine Optimization）",
          en: "AEO (AI Engine Optimization)",
        },
        intro: {
          zh: "帮助项目被 AI 搜索引擎与 Agent 发现。",
          en: "Helping projects get discovered by AI search engines and Agents.",
        },
        groups: [
          {
            label: { zh: "能力", en: "Capabilities" },
            items: {
              zh: [
                "AI 搜索优化",
                "LLM SEO",
                "llms.txt 建设",
                "Agent 入口设计",
                "结构化数据设计",
                "知识库架构",
              ],
              en: [
                "AI search optimization",
                "LLM SEO",
                "llms.txt setup",
                "Agent entry point design",
                "Structured data design",
                "Knowledge base architecture",
              ],
            },
          },
          {
            label: { zh: "适用于", en: "Best For" },
            items: {
              zh: [
                "Web3 项目",
                "AI 产品",
                "SaaS 产品",
                "个人品牌",
                "电子商务网站",
              ],
              en: [
                "Web3 projects",
                "AI products",
                "SaaS products",
                "Personal brands",
                "E-commerce websites",
              ],
            },
          },
        ],
      },
      {
        key: "rwa",
        title: { zh: "RWA 咨询", en: "RWA Consulting" },
        intro: {
          zh: "参与多个 RWA 方向项目研究与实践。",
          en: "Hands-on research and practice across multiple RWA-focused projects.",
        },
        groups: [
          {
            label: { zh: "能力", en: "Capabilities" },
            items: {
              zh: [
                "RWA 产品设计",
                "代币化策略",
                "投资者仪表板",
                "预言机架构",
                "数据验证设计",
                "跨境数据结构",
              ],
              en: [
                "RWA product design",
                "Tokenization strategy",
                "Investor dashboards",
                "Oracle architecture",
                "Data verification design",
                "Cross-border data structures",
              ],
            },
          },
          {
            label: { zh: "关注方向", en: "Focus Areas" },
            items: {
              zh: [
                "收益权代币化",
                "实体资产映射",
                "合规架构研究",
                "链上金融产品设计",
              ],
              en: [
                "Revenue rights tokenization",
                "Real-world asset mapping",
                "Compliance framework research",
                "Onchain financial product design",
              ],
            },
          },
        ],
      },
      {
        key: "growth",
        title: { zh: "增长与营销", en: "Growth & Marketing" },
        intro: {
          zh: "拥有市场营销专业背景以及运营经验。",
          en: "A marketing background paired with hands-on growth operations experience.",
        },
        groups: [
          {
            label: { zh: "能力", en: "Capabilities" },
            items: {
              zh: [
                "Web3 社区增长",
                "X（Twitter）运营",
                "Farcaster 运营",
                "内容营销",
                "品牌传播",
                "活动推广",
              ],
              en: [
                "Web3 community growth",
                "X (Twitter) management",
                "Farcaster management",
                "Content marketing",
                "Brand communications",
                "Campaign promotion",
              ],
            },
          },
          {
            label: { zh: "可提供", en: "What I Offer" },
            items: {
              zh: [
                "Web3 项目推广合作",
                "品牌曝光合作",
                "社媒内容传播",
                "社区增长支持",
              ],
              en: [
                "Web3 project promotion",
                "Brand exposure partnerships",
                "Social media content distribution",
                "Community growth support",
              ],
            },
          },
        ],
      },
    ],
  },

  engagements: {
    title: { zh: "合适的合作", en: "Ideal Collaborations" },
    items: {
      zh: [
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
      ],
      en: [
        "DApp development",
        "Web3 MVP development",
        "AI Agent product development",
        "x402 payment integration",
        "AEO optimization",
        "RWA consulting",
        "Web3 brand promotion",
        "Social media marketing",
        "Advisory services",
        "Product lifecycle planning",
        "Investor dashboard development",
        "Tokenization research",
        "DApp project delivery",
        "Hong Kong and mainland China regulatory research",
        "Oracle and onchain data architecture design",
      ],
    },
  },

  contact: {
    title: { zh: "联系", en: "Contact" },
    description: {
      zh: "欢迎通过网站提供的联系方式发起合作。",
      en: "Feel free to reach out through the contact details on this site to start a collaboration.",
    },
    audiencesLabel: { zh: "适合以下人群", en: "Who This Is For" },
    audiences: {
      zh: [
        "创业者",
        "投资机构",
        "Web3 项目方",
        "AI Agent Builder",
        "RWA 项目团队",
        "需要推广至中文市场",
      ],
      en: [
        "Founders",
        "Investment firms",
        "Web3 project teams",
        "AI Agent builders",
        "RWA project teams",
        "Teams expanding into the Chinese-speaking market",
      ],
    },
    notesLabel: { zh: "联系时建议说明", en: "What to Include" },
    notes: {
      zh: ["项目背景", "当前阶段", "技术需求", "时间规划", "预算范围"],
      en: [
        "Project background",
        "Current stage",
        "Technical requirements",
        "Timeline",
        "Budget range",
      ],
    },
    cta: { zh: "通过 X Chat 联系", en: "Contact via X Chat" },
  },
};
