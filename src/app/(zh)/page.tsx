import type { Metadata } from "next";

import HomePage from "@/components/pages/HomePage";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata("zh", "home");

export default function Page() {
  return <HomePage locale="zh" />;
}
