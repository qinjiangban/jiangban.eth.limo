/**
 * 经历数据的读取入口。
 *
 * 双语原文统一维护在 src/lib/i18n/content/experience.ts，
 * 这里只负责按分类（工作经历 / 教育背景）筛选，供经历页分区渲染；
 * 各文本字段仍保持双语，最终由 ExperienceTimeline 按 locale 取值。
 */

import { experiences } from "@/lib/i18n/content/experience";
import type { Experience } from "@/lib/i18n/content/experience";

export type { Experience };

/** 按分类筛选经历，并保持内容文件中的展示顺序 */
export function getExperiencesByCategory(
  category: Experience["category"],
): Experience[] {
  return experiences.filter((experience) => experience.category === category);
}
