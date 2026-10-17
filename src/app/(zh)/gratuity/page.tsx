import type { Metadata } from "next";

import GratuityPage from "@/components/pages/GratuityPage";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata("zh", "gratuity");

export default function Page() {
  return <GratuityPage locale="zh" />;
}
