import type { Metadata } from "next";

import CooperationPage from "@/components/pages/CooperationPage";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata("en", "cooperation");

export default function Page() {
  return <CooperationPage locale="en" />;
}
