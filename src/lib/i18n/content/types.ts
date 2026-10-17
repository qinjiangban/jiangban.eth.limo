import type { Locale } from "@/lib/i18n/config";

/**
 * 一段同时包含中文与英文的文案。
 * 页面文案统一使用该结构，保证两种语言不会漏翻、也不会走散。
 */
export type LocalizedText = {
  zh: string;
  en: string;
};

/** 一组双语标签（例如技能标签、项目标签） */
export type LocalizedList = {
  zh: string[];
  en: string[];
};

/** 页面 / 组件通用的语种参数 */
export type LocaleProps = {
  locale: Locale;
};

/** 从双语字段中取出当前语种的值 */
export function pick(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

/** 从双语数组中取出当前语种的值 */
export function pickList(list: LocalizedList, locale: Locale): string[] {
  return list[locale];
}
