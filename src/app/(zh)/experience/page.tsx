import type { Metadata } from "next";

import ExperiencePage from "@/components/pages/ExperiencePage";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata("zh", "experience");

export default function Page() {
  return <ExperiencePage locale="zh" />;
}
