import type { Metadata } from "next";

import GratuityPage from "@/components/pages/GratuityPage";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata("en", "gratuity");

export default function Page() {
  return <GratuityPage locale="en" />;
}
