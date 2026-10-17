import type { ReactNode } from "react";

import SiteHeader from "@/components/SiteHeader";
import StructuredData from "@/components/StructuredData";
import { geistMono, geistSans } from "@/lib/fonts";
import { htmlLang } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";

/**
 * 两个语言根布局共用的 <html> / <body> 骨架。
 *
 * 中文站点位于根路径（lang="zh-CN"），英文站点位于 /en（lang="en"），
 * 两棵路由树各自拥有独立的根布局，保证静态导出后的每个 HTML 都带有正确的 lang 属性。
 */
export default function RootShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html
      lang={htmlLang[locale]}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <StructuredData locale={locale} />
        <SiteHeader locale={locale} />
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
