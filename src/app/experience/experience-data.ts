export interface Experience {
  id: string;
  /** 角色/职位 */
  role: string;
  /** 公司/组织 */
  org: string;
  /** 录用类型：正式 / 自由职业 / 实习 */
  type: string;
  /** 开始时间 */
  from: string;
  /** 结束时间，null 表示至今 */
  to: string | null;
  /** 时长描述 */
  duration?: string;
  /** 地点 */
  location: string;
  /** 办公类型：远程办公 / 现场办公 */
  locationType: string;
  /** 详细描述，可用 \n 换行 */
  description: string;
  /** 相关链接 */
  link?: {
    url: string;
    label: string;
  };
  /** 可选 logo 图片路径，放在 public 目录下 */
  logoSrc?: string;
  /** 可选：作品集截图，展示在该经历卡片下方 */
  portfolioImages?: {
    src: string;
    alt: string;
  }[];
  /** 分类：work / education */
  category: "work" | "education";
}

export const experiences: Experience[] = [
  {
    id: "coolha-owner",
    role: "企业主",
    org: "Coolha Limited · 创办人",
    logoSrc: "https://coolha.com/favicon.ico",
    type: "正式",
    from: "2025年8月",
    to: null,
    location: "香港",
    locationType: "远程办公",
    description:
      "Coolha 酷哈是一个专注于Web3技术开发和应用的科技公司，致力于探索和应用前沿技术，提供更好的产品服务和解决方案，希望通过技术改变生产关系，让数据信息可拥有、可信任、有价值，让世界连接Web4",
    link: { url: "https://coolha.com/", label: "coolha.com" },
    category: "work",
  },
  {
    id: "sz-blockchain",
    role: "区块链技术应用开发",
    org: "深圳链协发展集团有限公司 · 正式",
    logoSrc: "https://hkbtaa.org/LOGO.jpg",
    type: "正式",
    from: "2025年3月",
    to: "2025年10月",
    duration: "8 个月",
    location: "中国 广东省 深圳",
    locationType: "现场办公",
    description:
      "香港区块链技术应用协会、深圳市信息服务业区块链协会、RWA加速器。新媒体编辑和视频剪辑。为客户提供代币化技术服务，针对中国和香港两地合规设计，负责业务从0到1启动，承接项目开发 RWA DAPP。",
    category: "work",
    link: { url: "https://hkbtaa.org/", label: "hkbtaa.org" },
  },
  {
    id: "kuha-studio",
    role: "企业主",
    org: "都安酷哈网络科技工作室 · 自由职业",
    type: "自由职业",
    from: "2024年2月",
    to: "2024年11月",
    duration: "10 个月",
    location: "",
    locationType: "纯线上无固定地点",
    description:
      "创建个体经营，抖音电商自运营小店，撸空投，Web3 Dapp开发，运营开发基于Lens的去中心化社交平台（已停止维护）",
    category: "work",
    portfolioImages: [
      { src: "/lens/app.png", alt: "手机端页面" },
      { src: "/lens/app首页.jpg", alt: "app首页" },
      { src: "/lens/app用户页.jpg", alt: "app用户页" },
      { src: "/lens/app聊天页.jpg", alt: "app聊天页" },
      { src: "/lens/app视频.jpg", alt: "app视频" },
      { src: "/lens/app文章.jpg", alt: "app文章" },
      { src: "/lens/app图片.jpg", alt: "app图片" },
      { src: "/lens/web.png", alt: "Web端页面" },
      { src: "/lens/coolhaV2.png", alt: "V2版本架构" },
      { src: "/lens/web登入首页.jpg", alt: "web登入首页" },
      { src: "/lens/web个人主页.jpg", alt: "web个人主页" },
      { src: "/lens/登入后的个人主页.jpg", alt: "登入后的个人主页" },
      { src: "/lens/AIChat.jpg", alt: "AIChat功能" },
    ],
    link: {
      url: "https://github.com/qinjiangban/Archive-coolha.com/tree/main",
      label: "github.com/qinjiangban/Archive-coolha.com",
    },
  },
  {
    id: "nft-intern",
    role: "数字资产专员",
    org: "南宁天水目科技有限公司 · 实习",
    type: "实习",
    from: "2024年1月",
    to: "2024年1月",
    duration: "1 个月",
    location: "中国广西南宁",
    locationType: "现场办公",
    description:
      "电商数据用户消费行为画像打包成NFT售卖，DAPP产品交互，为企业提供Web3区块链行业研究。辅助学习电商运营。",
    category: "work",
  },
  {
    id: "education-placeholder",
    role: "大学",
    org: "南宁职业技术大学 商学院 市场营销",
    type: "专科",
    from: "2021年9月",
    to: "2024年6月",
    duration: "3 年",
    location: "中国广西南宁",
    locationType: "",
    description: "2021年9月开始自学Web3技术，经历元宇宙和NFT爆发，穿梭了一轮牛熊加密周期，2022年12月见证ChatGPT时刻，利用其开发智能合约和Web应用程序，2023年1月开始探索基于Lens的去中心化社交平台，研学DAPP相关技术",
    category: "education",
  },
  {
    id: "education-high-school",
    role: "高中",
    org: "",
    type: "",
    from: "2018年9月",
    to: "2021年6月",
    location: "中国广西河池",
    locationType: "",
    description: "2020年9月了解到比特币，开始自学政治经济学和金融知识，为了验证判断，投入几百块到12月已经翻了4倍，2021参与meme币SHIB的16倍增长，同时在其它meme亏损，从此敬畏市场",
    category: "education",
  },
];
