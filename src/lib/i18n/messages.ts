import type { Locale } from "./config";

/**
 * 全站通用文案（导航、页头、结构化数据等）。
 *
 * 页面正文的翻译放在各页面自己的内容文件里（src/lib/i18n/content/*），
 * 这里只保留跨页面共用的「站点骨架」文案。
 */
const zh = {
  /** 站点元信息：用于 SEO / AEO 元数据与 JSON-LD 结构化数据 */
  meta: {
    jobTitle: "Web3 Builder 与 DApp 开发者",
    description:
      "Jiangban Qin（覃江扮）的个人网站：Web3 Builder 与 DApp 开发者，专注 DApp 开发、RWA 产品设计、AI Agent 集成、AEO 优化与 Web3 增长。ENS: jiangban.eth。",
    keywords: [
      "Jiangban Qin",
      "覃江扮",
      "jiangban.eth",
      "Web3",
      "DApp 开发",
      "RWA",
      "AI Agent",
      "AEO 优化",
      "Web3 增长",
      "IPFS",
      "ENS",
    ],
    knowsAbout: [
      "DApp 开发",
      "Web3 MVP 交付",
      "钱包集成",
      "链上支付",
      "x402 支付集成",
      "AI Agent 工作流",
      "AEO 与 llms.txt 设计",
      "RWA 产品设计",
      "Web3 增长",
      "ENS",
      "IPFS",
    ],
  },

  /** 顶部导航栏 */
  header: {
    brandHomeAria: "Jiangban Qin 首页",
    mainNavAria: "主导航",
    nav: {
      home: "首页",
      experience: "经历",
      cooperation: "合作",
    },
    contact: "联系",
    contactAria: "通过 X 联系我",
    openMenu: "打开导航菜单",
    closeMenu: "关闭导航菜单",
    /** 语言切换按钮上显示的文字（当前为中文时显示英文入口） */
    languageToggle: "EN",
    /** 目标语言的完整名称，用于移动端菜单 */
    languageToggleName: "英文",
    languageToggleAria: "切换到英文版（Switch to English）",
    languageToggleTitle: "Switch to English",
  },

  /** 通用组件文案 */
  common: {
    backHome: "返回首页",
    languageName: "中文",
  },
};

const en: typeof zh = {
  meta: {
    jobTitle: "Web3 Builder & DApp Developer",
    description:
      "Personal website of Jiangban Qin, a Web3 builder and DApp developer focused on DApp development, RWA product design, AI Agent integration, AEO optimization, and Web3 growth. ENS: jiangban.eth.",
    keywords: [
      "Jiangban Qin",
      "jiangban.eth",
      "Web3 builder",
      "DApp developer",
      "RWA",
      "AI Agent",
      "AEO",
      "x402",
      "Web3 growth",
      "IPFS",
      "ENS",
    ],
    knowsAbout: [
      "DApp development",
      "Web3 MVP delivery",
      "Wallet integration",
      "Onchain payments",
      "x402 payment integration",
      "AI Agent workflows",
      "AEO and llms.txt design",
      "RWA product design",
      "Web3 growth",
      "ENS",
      "IPFS",
    ],
  },

  header: {
    brandHomeAria: "Jiangban Qin home",
    mainNavAria: "Main navigation",
    nav: {
      home: "Home",
      experience: "Experience",
      cooperation: "Cooperation",
    },
    contact: "Contact",
    contactAria: "Contact me on X",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    languageToggle: "中文",
    languageToggleName: "中文",
    languageToggleAria: "Switch to Chinese (切换到中文版)",
    languageToggleTitle: "切换到中文版",
  },

  common: {
    backHome: "Back to home",
    languageName: "English",
  },
};

export const messages: Record<Locale, typeof zh> = { zh, en };

export type Messages = typeof zh;
