import type { Metadata } from "next";

import HomePage from "@/components/pages/HomePage";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata("en", "home");

export default function Page() {
  return <HomePage locale="en" />;
}
