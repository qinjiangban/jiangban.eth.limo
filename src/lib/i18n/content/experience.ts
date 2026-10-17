import type { LocalizedText } from "@/lib/i18n/content/types";

/**
 * 经历页（/experience 与 /en/experience）的双语数据与文案。
 *
 * 每条经历的可见文字都以中英成对出现，页面组件按 locale 取值，
 * 保证两个语种都不会漏翻；链接地址、图片路径等与语言无关的字段保持单一值。
 */

/** 一段经历：所有文案字段均为双语 */
export interface Experience {
  id: string;
  /** 角色/职位 */
  role: LocalizedText;
  /** 公司/组织 */
  org: LocalizedText;
  /** 录用类型：正式 / 自由职业 / 实习 */
  type: LocalizedText;
  /** 开始时间 */
  from: LocalizedText;
  /** 结束时间，null 表示至今 */
  to: LocalizedText | null;
  /** 时长描述 */
  duration?: LocalizedText;
  /** 地点 */
  location: LocalizedText;
  /** 办公类型：远程办公 / 现场办公 */
  locationType: LocalizedText;
  /** 详细描述，可用 \n 换行 */
  description: LocalizedText;
  /** 相关链接（外链地址与显示文案与语言无关，两种语言共用） */
  link?: {
    url: string;
    label: string;
  };
  /** 可选 logo 图片路径，放在 public 目录下 */
  logoSrc?: string;
  /** 可选：作品集截图，展示在该经历卡片下方 */
  portfolioImages?: {
    src: string;
    alt: LocalizedText;
  }[];
  /** 分类：work / education */
  category: "work" | "education";
}

/** 经历时间线上的全部经历（按展示顺序排列，数据筛选只按 category 进行） */
export const experiences: Experience[] = [
  {
    id: "coolha-owner",
    role: { zh: "企业主", en: "Business Owner" },
    org: { zh: "Coolha Limited · 创办人", en: "Coolha Limited · Founder" },
    logoSrc: "https://coolha.com/favicon.ico",
    type: { zh: "正式", en: "Full-time" },
    from: { zh: "2025年8月", en: "Aug 2025" },
    to: null,
    location: { zh: "香港", en: "Hong Kong" },
    locationType: { zh: "远程办公", en: "Remote" },
    description: {
      zh: "Coolha 酷哈是一个专注于Web3技术开发和应用的科技公司，致力于探索和应用前沿技术，提供更好的产品服务和解决方案，希望通过技术改变生产关系，让数据信息可拥有、可信任、有价值，让世界连接Web4",
      en: "Coolha is a technology company focused on Web3 technology development and applications. It is dedicated to exploring and applying frontier technologies to provide better products, services, and solutions, and hopes to transform production relations through technology — making data and information ownable, trustworthy, and valuable — so the world connects to Web4.",
    },
    link: { url: "https://coolha.com/", label: "coolha.com" },
    category: "work",
  },
  {
    id: "sz-blockchain",
    role: {
      zh: "区块链技术应用开发",
      en: "Blockchain Technology Application Developer",
    },
    org: {
      zh: "深圳链协发展集团有限公司 · 正式",
      en: "Shenzhen Blockchain Association Development Group Co., Ltd. · Full-time",
    },
    logoSrc: "https://hkbtaa.org/LOGO.jpg",
    type: { zh: "正式", en: "Full-time" },
    from: { zh: "2025年3月", en: "Mar 2025" },
    to: { zh: "2025年10月", en: "Oct 2025" },
    duration: { zh: "8 个月", en: "8 months" },
    location: { zh: "中国 广东省 深圳", en: "Shenzhen, Guangdong, China" },
    locationType: { zh: "现场办公", en: "On-site" },
    description: {
      zh: "香港区块链技术应用协会、深圳市信息服务业区块链协会、RWA加速器。新媒体编辑和视频剪辑。为客户提供代币化技术服务，针对中国和香港两地合规设计，负责业务从0到1启动，承接项目开发 RWA DAPP。",
      en: "Hong Kong Blockchain Technology Application Association, Shenzhen Information Services Blockchain Association, RWA Accelerator. New media editing and video editing. Provided tokenization technology services to clients with compliance design for both mainland China and Hong Kong, led the business launch from 0 to 1, and delivered project development for RWA DApps.",
    },
    category: "work",
    link: { url: "https://hkbtaa.org/", label: "hkbtaa.org" },
  },
  {
    id: "kuha-studio",
    role: { zh: "企业主", en: "Business Owner" },
    org: {
      zh: "都安酷哈网络科技工作室 · 自由职业",
      en: "Du'an Kuha Network Technology Studio · Freelance",
    },
    type: { zh: "自由职业", en: "Freelance" },
    from: { zh: "2024年2月", en: "Feb 2024" },
    to: { zh: "2024年11月", en: "Nov 2024" },
    duration: { zh: "10 个月", en: "10 months" },
    location: { zh: "", en: "" },
    locationType: { zh: "纯线上无固定地点", en: "Fully remote, no fixed location" },
    description: {
      zh: "创建个体经营，抖音电商自运营小店，撸空投，Web3 Dapp开发，运营开发基于Lens的去中心化社交平台（已停止维护）",
      en: "Started a sole proprietorship, ran a self-operated Douyin e-commerce shop, farmed airdrops, developed Web3 DApps, and built and operated a Lens-based decentralized social platform (no longer maintained).",
    },
    category: "work",
    portfolioImages: [
      { src: "/lens/app.png", alt: { zh: "手机端页面", en: "Mobile page" } },
      { src: "/lens/app首页.jpg", alt: { zh: "app首页", en: "App home page" } },
      { src: "/lens/app用户页.jpg", alt: { zh: "app用户页", en: "App user page" } },
      { src: "/lens/app聊天页.jpg", alt: { zh: "app聊天页", en: "App chat page" } },
      { src: "/lens/app视频.jpg", alt: { zh: "app视频", en: "App videos" } },
      { src: "/lens/app文章.jpg", alt: { zh: "app文章", en: "App articles" } },
      { src: "/lens/app图片.jpg", alt: { zh: "app图片", en: "App images" } },
      { src: "/lens/web.png", alt: { zh: "Web端页面", en: "Web page" } },
      { src: "/lens/coolhaV2.png", alt: { zh: "V2版本架构", en: "V2 architecture" } },
      { src: "/lens/web登入首页.jpg", alt: { zh: "web登入首页", en: "Web login page" } },
      { src: "/lens/web个人主页.jpg", alt: { zh: "web个人主页", en: "Web profile page" } },
      { src: "/lens/登入后的个人主页.jpg", alt: { zh: "登入后的个人主页", en: "Profile page after login" } },
      { src: "/lens/AIChat.jpg", alt: { zh: "AIChat功能", en: "AIChat feature" } },
    ],
    link: {
      url: "https://github.com/qinjiangban/Archive-coolha.com/tree/main",
      label: "github.com/qinjiangban/Archive-coolha.com",
    },
  },
  {
    id: "nft-intern",
    role: { zh: "数字资产专员", en: "Digital Asset Specialist" },
    org: {
      zh: "南宁天水目科技有限公司 · 实习",
      en: "Nanning Tianshuimu Technology Co., Ltd. · Internship",
    },
    type: { zh: "实习", en: "Internship" },
    from: { zh: "2024年1月", en: "Jan 2024" },
    to: { zh: "2024年1月", en: "Jan 2024" },
    duration: { zh: "1 个月", en: "1 month" },
    location: { zh: "中国广西南宁", en: "Nanning, Guangxi, China" },
    locationType: { zh: "现场办公", en: "On-site" },
    description: {
      zh: "电商数据用户消费行为画像打包成NFT售卖，DAPP产品交互，为企业提供Web3区块链行业研究。辅助学习电商运营。",
      en: "Packaged e-commerce consumer behavior profiles into NFTs for sale, worked on DApp product interactions, and provided Web3 blockchain industry research for the company. Also assisted with learning e-commerce operations.",
    },
    category: "work",
  },
  {
    id: "education-placeholder",
    role: { zh: "大学", en: "University" },
    org: {
      zh: "南宁职业技术大学 商学院 市场营销",
      en: "Nanning Vocational and Technical University, School of Business, Marketing",
    },
    type: { zh: "专科", en: "Associate degree" },
    from: { zh: "2021年9月", en: "Sep 2021" },
    to: { zh: "2024年6月", en: "Jun 2024" },
    duration: { zh: "3 年", en: "3 years" },
    location: { zh: "中国广西南宁", en: "Nanning, Guangxi, China" },
    locationType: { zh: "", en: "" },
    description: {
      zh: "2021年9月开始自学Web3技术，经历元宇宙和NFT爆发，穿梭了一轮牛熊加密周期，2022年12月见证ChatGPT时刻，利用其开发智能合约和Web应用程序，2023年1月开始探索基于Lens的去中心化社交平台，研学DAPP相关技术",
      en: "Began self-studying Web3 technology in September 2021, experienced the metaverse and NFT boom, and went through a full crypto bull-and-bear cycle. Witnessed the ChatGPT moment in December 2022 and used it to develop smart contracts and web applications. Started exploring Lens-based decentralized social platforms in January 2023 and studied DApp-related technologies.",
    },
    category: "education",
  },
  {
    id: "education-high-school",
    role: { zh: "高中", en: "High School" },
    org: { zh: "", en: "" },
    type: { zh: "", en: "" },
    from: { zh: "2018年9月", en: "Sep 2018" },
    to: { zh: "2021年6月", en: "Jun 2021" },
    location: { zh: "中国广西河池", en: "Hechi, Guangxi, China" },
    locationType: { zh: "", en: "" },
    description: {
      zh: "2020年9月了解到比特币，开始自学政治经济学和金融知识，为了验证判断，投入几百块到12月已经翻了4倍，2021参与meme币SHIB的16倍增长，同时在其它meme亏损，从此敬畏市场",
      en: "Learned about Bitcoin in September 2020 and began self-studying political economy and finance. To test my judgment, I put in a few hundred yuan, which had grown 4x by December. In 2021 I took part in the 16x rise of the meme coin SHIB while losing money on other meme coins — and have respected the market ever since.",
    },
    category: "education",
  },
];

/** 经历页的界面文案：标题、分区标题与时间线通用标签 */
export interface ExperiencePageContent {
  /** 页面标题（h1） */
  title: LocalizedText;
  /** 返回首页链接的无障碍标签 */
  backHome: LocalizedText;
  /** 工作经历分区标题 */
  workHeading: LocalizedText;
  /** 教育背景分区标题 */
  educationHeading: LocalizedText;
  /** 未结束经历在时间线上显示的「至今」 */
  present: LocalizedText;
  /** 作品集灯箱在图片 alt 缺失时的兜底标题 */
  portfolio: LocalizedText;
}

export const experiencePageContent: ExperiencePageContent = {
  title: { zh: "时间线", en: "Timeline" },
  backHome: { zh: "返回首页", en: "Back to home" },
  workHeading: { zh: "工作经历", en: "Work Experience" },
  educationHeading: { zh: "教育背景", en: "Education" },
  present: { zh: "至今", en: "Present" },
  portfolio: { zh: "作品集", en: "Portfolio" },
};
