import { htmlLang, siteUrl } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";
import { messages } from "@/lib/i18n/messages";
import { siteProfile } from "@/lib/site-profile";

/** 官方社交与身份链接，用于 schema.org Person.sameAs */
const SAME_AS = [
  "https://x.com/qinjiangban",
  "https://github.com/qinjiangban",
  "https://www.youtube.com/@qinjiangban",
  "https://farcaster.xyz/qinjiangban",
  "https://hey.xyz/u/jiangban",
  "https://zora.co/@qinjiangban",
  "https://app.ens.domains/jiangban.eth",
  "https://coolha.com/",
];

/**
 * 全站 JSON-LD 结构化数据（Person + WebSite + 服务目录）。
 *
 * 放在根布局中，让搜索引擎与 AI Agent 在任意页面都能读到
 * 稳定的身份、语言、能力与服务信息，属于 AEO 的基础设施。
 */
export default function StructuredData({ locale }: { locale: Locale }) {
  const meta = messages[locale].meta;
  const services = siteProfile.services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: locale === "zh" ? service.titleZh : service.title,
      description: locale === "zh" ? service.descriptionZh : service.description,
      provider: { "@id": `${siteUrl}/#person` },
    },
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Jiangban Qin",
        alternateName: ["覃江扮", "jiangban.eth"],
        url: `${siteUrl}/`,
        image: `${siteUrl}/avatar.png`,
        jobTitle: meta.jobTitle,
        description: meta.description,
        knowsLanguage: ["zh-CN", "en"],
        knowsAbout: meta.knowsAbout,
        sameAs: SAME_AS,
        worksFor: {
          "@type": "Organization",
          name: "Coolha",
          url: "https://coolha.com/",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: locale === "zh" ? "服务清单" : "Services",
          itemListElement: services,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Jiangban Qin",
        inLanguage: htmlLang[locale],
        publisher: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // 内容来自构建期的静态常量，不包含用户输入，无需转义处理。
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
