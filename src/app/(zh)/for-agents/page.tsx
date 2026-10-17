import type { Metadata } from "next";

import ForAgentsPage from "@/components/pages/ForAgentsPage";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata("zh", "forAgents");

export default function Page() {
  return <ForAgentsPage locale="zh" />;
}
