import type { MetadataRoute } from "next";

import { localizePath, locales, siteUrl } from "@/lib/i18n/config";
import { pagePaths } from "@/lib/i18n/metadata";
import type { PageKey } from "@/lib/i18n/metadata";

export const dynamic = "force-static";

/** 各页面的权重与更新频率（中文、英文两套 URL 会同时生成） */
const pageConfig: {
  key: PageKey;
  priority: number;
  changeFrequency: "monthly" | "yearly";
}[] = [
  { key: "home", priority: 1, changeFrequency: "monthly" },
  { key: "cooperation", priority: 0.9, changeFrequency: "monthly" },
  { key: "experience", priority: 0.8, changeFrequency: "monthly" },
  { key: "forAgents", priority: 0.5, changeFrequency: "monthly" },
  { key: "gratuity", priority: 0.3, changeFrequency: "yearly" },
];

/**
 * 静态 sitemap：中英每个页面各生成一条 URL，
 * 并通过 alternates.languages 声明 zh-CN / en 的 hreflang 对应关系。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pageConfig.flatMap(({ key, priority, changeFrequency }) => {
    const zhPath = localizePath("zh", pagePaths[key]);
    const enPath = localizePath("en", pagePaths[key]);

    return locales.map((locale) => ({
      url: `${siteUrl}${localizePath(locale, pagePaths[key])}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          "zh-CN": `${siteUrl}${zhPath}`,
          en: `${siteUrl}${enPath}`,
        },
      },
    }));
  });
}
