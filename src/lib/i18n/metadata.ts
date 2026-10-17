import type { Metadata } from "next";

import {
  defaultLocale,
  hreflang,
  localizePath,
  ogLocale,
  otherLocale,
  siteUrl,
} from "./config";
import type { Locale } from "./config";
import { messages } from "./messages";

/** 站内页面标识：同一个页面在中文 / 英文下各有独立的 URL 与元数据 */
export type PageKey =
  | "home"
  | "experience"
  | "cooperation"
  | "gratuity"
  | "forAgents";

/** 语言无关路径（用于生成 hreflang、canonical、sitemap） */
export const pagePaths: Record<PageKey, string> = {
  home: "/",
  experience: "/experience",
  cooperation: "/cooperation",
  gratuity: "/gratuity",
  forAgents: "/for-agents",
};

type PageMeta = {
  title: string;
  description: string;
};

/**
 * 每个页面、每个语种独立的 title / description。
 * 中英文分别书写（而不是直译），以便各自贴合本地搜索习惯。
 */
const pageMeta: Record<Locale, Record<PageKey, PageMeta>> = {
  zh: {
    home: {
      title: "Jiangban Qin - 覃江扮 - jiangban.eth",
      description:
        "Jiangban Qin（覃江扮）的个人网站：Web3 Builder 与 DApp 开发者，专注 DApp 开发、RWA 产品设计、AI Agent 集成、AEO 优化与 Web3 增长。ENS: jiangban.eth。",
    },
    experience: {
      title: "经历 - Jiangban Qin",
      description:
        "Jiangban Qin 的工作经历与教育背景时间线：Web3 与 DApp 开发、区块链技术应用、RWA 研究以及市场营销专业背景。",
    },
    cooperation: {
      title: "商务合作 - Jiangban Qin",
      description:
        "Jiangban Qin 的商务合作方向、核心能力与联系方式：DApp 开发、AI Agent 与 x402 支付集成、AEO 优化、RWA 咨询与 Web3 增长营销。",
    },
    gratuity: {
      title: "打赏与支持 - Jiangban Qin",
      description:
        "通过加密货币（ETH / Base 等 EVM 网络）、微信支付或 PayPal 打赏支持 Jiangban Qin。",
    },
    forAgents: {
      title: "面向智能体 - Jiangban Qin",
      description:
        "Jiangban Qin 的官方机器可读入口：llms.txt、agent.json、services.json 与 contact.json，方便 AI Agent 与 AI 搜索系统发现能力、服务与联系方式。",
    },
  },
  en: {
    home: {
      title: "Jiangban Qin - Web3 Builder & DApp Developer - jiangban.eth",
      description:
        "Personal website of Jiangban Qin, a Web3 builder and DApp developer focused on DApp development, RWA product design, AI Agent integration, AEO optimization, and Web3 growth. ENS: jiangban.eth.",
    },
    experience: {
      title: "Experience - Jiangban Qin",
      description:
        "Work experience and education timeline of Jiangban Qin: Web3 and DApp development, blockchain technology application, RWA research, and a marketing background.",
    },
    cooperation: {
      title: "Business Cooperation - Jiangban Qin",
      description:
        "Work with Jiangban Qin on DApp development, AI Agent and x402 payment integration, AEO optimization, RWA consulting, and Web3 growth marketing.",
    },
    gratuity: {
      title: "Gratuity & Support - Jiangban Qin",
      description:
        "Support Jiangban Qin with crypto on EVM networks (Ethereum, Base), WeChat Pay, or PayPal.",
    },
    forAgents: {
      title: "For Agents - Jiangban Qin",
      description:
        "Official machine-readable entry for Jiangban Qin: llms.txt, agent.json, services.json, and contact.json help AI agents and AI search systems discover capabilities, services, and contact routes.",
    },
  },
};

const OG_IMAGE = "/avatar.png";

/** 生成绝对 URL；根路径保留结尾斜杠 */
function absolute(path: string): string {
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path}`;
}

/**
 * 生成单个页面的 SEO / AEO 元数据：
 * canonical、zh-CN / en / x-default 三组 hreflang、Open Graph 与 Twitter Card。
 */
export function buildPageMetadata(locale: Locale, page: PageKey): Metadata {
  const { title, description } = pageMeta[locale][page];
  const path = localizePath(locale, pagePaths[page]);
  const zhPath = localizePath("zh", pagePaths[page]);
  const enPath = localizePath("en", pagePaths[page]);
  const other = otherLocale(locale);

  return {
    title,
    description,
    keywords: messages[locale].meta.keywords,
    alternates: {
      canonical: absolute(path),
      languages: {
        [hreflang.zh]: absolute(zhPath),
        [hreflang.en]: absolute(enPath),
        "x-default": absolute(localizePath(defaultLocale, pagePaths[page])),
      },
    },
    openGraph: {
      type: "website",
      siteName: "Jiangban Qin",
      title,
      description,
      url: absolute(path),
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[other]],
      images: [
        {
          url: absolute(OG_IMAGE),
          width: 1024,
          height: 1024,
          alt: "Jiangban Qin",
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [absolute(OG_IMAGE)],
    },
  };
}

/**
 * 生成根布局的通用元数据（metadataBase、作者、robots、验证标签等）。
 * 与语言无关的部分放在这里，各页面再通过 buildPageMetadata 覆盖 title / description / canonical。
 */
export function buildRootMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    applicationName: "Jiangban Qin",
    title: pageMeta[locale].home.title,
    description: pageMeta[locale].home.description,
    authors: [{ name: "Jiangban Qin", url: siteUrl }],
    creator: "Jiangban Qin",
    publisher: "Jiangban Qin",
    keywords: messages[locale].meta.keywords,
    referrer: "origin-when-cross-origin",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [{ url: "/favicon.ico" }],
      apple: [{ url: "/avatar.png" }],
    },
    other: {
      "base:app_id": "6a0c45816b7916c4b4095207",
      "talentapp:project_verification":
        "2bf075c1a68199a8325c5909ecb72b36c15b7838b4f7e71f34c2f8271b8ddcd929e201ab25aeedfad274929bd5c7930565419d539533f20196f91920d71930b9",
    },
  };
}
