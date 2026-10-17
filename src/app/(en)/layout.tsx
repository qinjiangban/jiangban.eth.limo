import type { Metadata, Viewport } from "next";

import RootShell from "@/components/RootShell";
import { buildRootMetadata } from "@/lib/i18n/metadata";

// 全局样式（Tailwind + 主题变量）必须在每个根布局中引入，
// 中文站与英文站各自持有一份根布局，因此两处都要 import。
import "../globals.css";

/** 英文站根布局：位于 /en 前缀下，<html lang="en"> */
export const metadata: Metadata = buildRootMetadata("en");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#EA7411",
};

export default function EnRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell locale="en">{children}</RootShell>;
}
