import type { LocalizedText } from "./types";

/**
 * 首页全部双语文案。
 *
 * 中文为默认语言（根路径 `/`），英文为完整翻译（`/en`）。专有名词
 * （Jiangban Qin、覃江扮、jiangban.eth、X、Github、YouTube、Farcaster、
 * Lens、Zora、ENS、IPFS、coolha）在两种语言中保持原样，不做翻译。
 */

/** 首页所有双语文案的结构定义，保证中文与英文一一对应、不漏翻 */
export type HomeContent = {
  /** 个人名片 */
  profile: {
    /** 右上角打赏按钮 */
    gratuityLabel: LocalizedText;
    /** 名片正文第一行前缀（含 emoji） */
    createPrefix: LocalizedText;
    /** 第一行中的 coolha.com 链接文字：专有名词，两种语言一致 */
    createLinkLabel: string;
    /** 名片正文第二行（含 emoji） */
    secondHighlight: LocalizedText;
  };

  /** 社交 / 媒体入口；入口名称与二维码弹窗文案 */
  socialLinks: {
    /** 视频号 */
    channels: LocalizedText;
    /** 公众号 */
    officialAccount: LocalizedText;
    /** 视频号二维码弹窗描述 */
    channelsQrDescription: LocalizedText;
    /** 视频号二维码图片 alt */
    channelsQrAlt: LocalizedText;
    /** 公众号二维码弹窗描述 */
    officialAccountQrDescription: LocalizedText;
    /** 公众号二维码图片 alt */
    officialAccountQrAlt: LocalizedText;
  };

  /** 首页内的站内跳转卡片 */
  navLinks: {
    experience: LocalizedText;
    cooperation: LocalizedText;
  };

  /** 页面底部站点标识 */
  siteBadge: {
    /** ENS 网关访问说明：前缀 + 域名 + 后缀 */
    accessPrefix: LocalizedText;
    accessSuffix: LocalizedText;
    /** 面向智能体入口 */
    forAgents: LocalizedText;
  };

  /** 人类可读的个人简介（纯文本，沿用简单的 Markdown 结构解析） */
  humanReadableProfile: {
    profileText: LocalizedText;
  };
};

export const homeContent: HomeContent = {
  profile: {
    gratuityLabel: {
      zh: "打赏",
      en: "Gratuity",
    },
    createPrefix: {
      zh: "🟩 创建",
      en: "🟩 create",
    },
    createLinkLabel: "coolha.com↗",
    secondHighlight: {
      zh: "🟧 Web4 建设开发者",
      en: "🟧 web4 build developer",
    },
  },

  socialLinks: {
    channels: {
      zh: "视频号",
      en: "WeChat Channels",
    },
    officialAccount: {
      zh: "公众号",
      en: "WeChat Official Account",
    },
    channelsQrDescription: {
      zh: "使用微信扫一扫关注视频号",
      en: "Scan the QR code with WeChat to follow my WeChat Channels",
    },
    channelsQrAlt: {
      zh: "视频号二维码",
      en: "WeChat Channels QR code",
    },
    officialAccountQrDescription: {
      zh: "使用微信扫一扫关注公众号",
      en: "Scan the QR code with WeChat to follow my WeChat Official Account",
    },
    officialAccountQrAlt: {
      zh: "公众号二维码",
      en: "WeChat Official Account QR code",
    },
  },

  navLinks: {
    experience: {
      zh: "经历时间线",
      en: "Experience Timeline",
    },
    cooperation: {
      zh: "商务合作",
      en: "Business Cooperation",
    },
  },

  siteBadge: {
    accessPrefix: {
      zh: "通过",
      en: "Access via",
    },
    accessSuffix: {
      zh: "访问，托管于 IPFS",
      en: "Hosted on IPFS",
    },
    forAgents: {
      zh: "面向智能体",
      en: "For Agents",
    },
  },

  humanReadableProfile: {
    profileText: {
      zh: `# Jiangban Qin 覃江扮
2002年射手座生于广西，MBTI:INFJ
语言:简体中文、壮语、桂柳话（西南官话分支）

兴趣爱好:NBA篮球，绘画、影视、看书学毛选、易经思维、太极哲学、中医养生、科技商业学习乔布斯创新与伊隆马斯克的第一性原理，培养金融与投资思维。
毕业于南宁职业技术大学商学院市场营销专业，2020年上高中时上网接触到Bitcoin，学习区块链知识，上大学后不影响学业情况下自学区块链相关技术，开发DAPP网站，2022年GPT时刻后，AI兴起并利用AI辅助学习。并独立开发多个DAPP：去中心化社交平台、Swap平台、NFT销售、区块链小游戏、RWA、AIAgent等。`,
      en: `# Jiangban Qin 覃江扮
Born in Guangxi in 2002, Sagittarius, MBTI: INFJ
Languages: Simplified Chinese, Zhuang, Guiliu dialect (a branch of Southwestern Mandarin)

Interests: NBA basketball, painting, film and television, reading and studying Selected Works of Mao Zedong, I Ching thinking, Tai Chi philosophy, traditional Chinese medicine wellness, and studying technology and business through Steve Jobs' innovation and Elon Musk's first principles, while cultivating financial and investment thinking.
Graduated from the Business School of Nanning Vocational and Technical University with a major in Marketing. I came across Bitcoin online in high school in 2020 and started learning about blockchain; after entering university I taught myself blockchain-related technologies without affecting my studies and built DApp websites. After the "GPT moment" in 2022, with AI on the rise, I used AI to assist my learning, and independently developed multiple DApps: decentralized social platforms, Swap platforms, NFT sales, blockchain mini-games, RWA, AI Agents, and more.`,
    },
  },
};
