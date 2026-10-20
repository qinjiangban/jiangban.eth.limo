import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

/**
 * 全局 404 页面。
 *
 * 站点使用两个根布局（中文 `/`、英文 `/en`），未知路径不属于任何语言树，
 * 因此用 global-not-found 提供一个带正确 <html lang> 与站内入口的兜底页。
 * 页面默认使用中文（站点默认语言），同时提供英文首页入口。
 */
export const metadata: Metadata = {
  title: "页面未找到 (404) - Jiangban Qin",
  description: "页面不存在或已被移动。Page not found or moved.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="flex min-h-full flex-col items-center justify-center px-4 font-sans">
        <main className="w-full max-w-md rounded-[24px] border border-white/70 bg-white/95 p-8 text-center shadow-xl shadow-brand/10">
          <p className="font-mono text-xs tracking-[0.3em] text-brand">404</p>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900">
            页面未找到
          </h1>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            你访问的页面不存在或已被移动。
          </p>
          <p className="mt-1 text-sm leading-6 text-zinc-500" lang="en">
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-sm shadow-brand/25 transition-colors hover:bg-brand/90"
            >
              返回首页
            </Link>
            <Link
              href="/en/"
              hrefLang="en"
              className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-700 transition-colors hover:border-brand/30 hover:text-brand"
            >
              English Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
