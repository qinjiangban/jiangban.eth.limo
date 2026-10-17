import type { LocalizedText } from "./types";

/** 打赏页收款方式：二维码图片路径与语言无关，文案双语 */
export type GratuityMethod = {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  qr: string;
  alt: LocalizedText;
};

export const gratuityContent = {
  title: {
    zh: "打赏 / 支持",
    en: "Gratuity & Support",
  },
  /** ENS / EVM 属于技术名词，两种语言都保留英文标签 */
  ensLabel: "ENS Domain",
  evmLabel: "EVM Address",
  copyEns: {
    zh: "复制 ENS",
    en: "Copy ENS",
  },
  copyAddress: {
    zh: "复制地址",
    en: "Copy EVM address",
  },
  copyFailed: {
    zh: "复制失败",
    en: "Copy failed",
  },
  methods: [
    {
      id: "crypto",
      title: { zh: "加密货币", en: "Cryptocurrency" },
      subtitle: {
        zh: "EVM 主流网络（ETH / Base 等）",
        en: "Major EVM networks (Ethereum, Base, etc.)",
      },
      qr: "/QR/0x.png",
      alt: { zh: "区块链地址二维码", en: "Blockchain address QR code" },
    },
    {
      id: "wechat",
      title: { zh: "微信支付", en: "WeChat Pay" },
      subtitle: {
        zh: "扫一扫二维码打赏",
        en: "Scan the QR code with WeChat to support",
      },
      qr: "/QR/wechatpay-qr.png",
      alt: { zh: "微信支付二维码", en: "WeChat Pay QR code" },
    },
    {
      id: "paypal",
      title: { zh: "PayPal", en: "PayPal" },
      subtitle: { zh: "海外用户收款", en: "For supporters outside China" },
      qr: "/QR/paypal-qr.jpg",
      alt: { zh: "PayPal 收款二维码", en: "PayPal payment QR code" },
    },
  ] satisfies GratuityMethod[],
};
