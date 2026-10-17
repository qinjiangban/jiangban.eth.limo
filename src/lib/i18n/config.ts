/**
 * 全站 i18n 基础配置。
 *
 * 站点默认语言为简体中文（根路径 `/`），英文版本位于 `/en` 前缀下。
 * 采用「不同语言不同 URL + hreflang」的方案：每个语种都有独立的、
 * 由服务端（构建期）完整渲染的 HTML，对搜索引擎和 AI Agent 都友好；
 * 切换语言时不使用客户端内容替换，也不做自动跳转（避免影响抓取与收录）。
 */

export const locales = ["zh", "en"] as const;

export type Locale = (typeof locales)[number];

/** 默认语言：中文优先 */
export const defaultLocale: Locale = "zh";

/** 站点主域名（ENS 的 Web2 网关），用于 canonical / hreflang / sitemap */
export const siteUrl = "https://jiangban.eth.limo";

/** 各语种对应的 <html lang> 值 */
export const htmlLang: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en",
};

/** 各语种对应的 Open Graph locale 值 */
export const ogLocale: Record<Locale, string> = {
  zh: "zh_CN",
  en: "en_US",
};

/** hreflang 使用的语言代码 */
export const hreflang: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en",
};

/** 语言在 URL 中的前缀：中文为默认语言，位于根路径；英文位于 /en。 */
export function localePrefix(locale: Locale): string {
  return locale === "zh" ? "" : "/en";
}

/** 把「语言无关路径」转换为指定语种的真实路径。 */
export function localizePath(locale: Locale, path = "/"): string {
  const normalized =
    path === "/" || path === "" ? "" : path.startsWith("/") ? path : `/${path}`;

  return `${localePrefix(locale)}${normalized}` || "/";
}

/** 去掉路径上的语言前缀，得到语言无关路径（用于生成 hreflang 与语言切换链接）。 */
export function stripLocale(pathname: string): string {
  if (!pathname) return "/";
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

/** 判断当前路径是否属于英文站点。 */
export function isEnglishPath(pathname: string): boolean {
  return pathname === "/en" || pathname.startsWith("/en/");
}

/** 计算「切换到另一语言」后应该跳转到的路径，并保持当前页面不变。 */
export function switchLocalePath(pathname: string, target: Locale): string {
  return localizePath(target, stripLocale(pathname));
}

/** 返回「另一门语言」 */
export function otherLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}
