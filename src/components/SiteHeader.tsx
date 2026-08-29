"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";

/**
 * 滚动超过该阈值后，头部由「铺满全宽的展开态」切换为「圆角浮层态」。
 * 阈值取一个较小值，保证刚开始下滑就能看到形变反馈。
 */
const SCROLL_THRESHOLD = 16;

const NAV_LINKS = [
  { href: "/", label: { zh: "首页", en: "Home" } },
  { href: "/experience", label: { zh: "经历", en: "Experience" } },
  { href: "/cooperation", label: { zh: "合作", en: "Cooperation" } },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const { lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /**
   * 用 requestAnimationFrame 节流 scroll 事件，避免频繁 setState 造成的布局抖动。
   * 始终以 false 作为首帧初值，保证服务端与客户端首屏一致，不产生 hydration 告警。
   */
  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Esc 关闭菜单并把焦点还给触发按钮
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // 菜单展开时强制使用浮层配色，避免下拉面板压在透明头部上难以阅读
  const floating = scrolled || menuOpen;

  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  const focusRing = floating
    ? "focus-visible:ring-brand/60"
    : "focus-visible:ring-white/80";

  const navLinkTone = (active: boolean) =>
    active
      ? floating
        ? "bg-brand/10 text-brand"
        : "bg-white/20 text-white"
      : floating
        ? "text-zinc-600 hover:bg-zinc-900/5 hover:text-zinc-900"
        : "text-white/85 hover:bg-white/15 hover:text-white";

  return (
    <header className="sticky top-0 z-50 h-16 w-full px-4 sm:px-6">
      <div
        data-state={floating ? "floating" : "expanded"}
        className={cn(
          "relative mx-auto flex h-12 w-full items-center justify-between gap-2",
          "transition-[max-width,background-color,border-color,border-radius,box-shadow,padding] duration-300 ease-out motion-reduce:transition-none",
          floating
            ? "mt-2 max-w-2xl rounded-full border border-white/70 bg-white/80 px-2 shadow-lg shadow-zinc-900/10 backdrop-blur-xl"
            : "max-w-full rounded-none border border-transparent bg-transparent px-0",
        )}
      >
        {/* 品牌区 */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Jiangban Qin 首页"
          className={cn(
            "flex min-w-0 items-center gap-2.5 rounded-full py-1 pl-0 pr-0 outline-none focus-visible:ring-2",
            focusRing,
          )}
        >
          <span
            className={cn(
              "relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full transition-[box-shadow] duration-300",
              floating ? "ring-1 ring-zinc-900/10" : "ring-2 ring-white/60",
            )}
          >
            <Image
              src="/avatar.png"
              alt=""
              width={36}
              height={36}
              priority
              className="size-9 rounded-full object-cover"
            />
          </span>

          <span className="flex min-w-0 flex-col leading-tight">
            <span
              className={cn(
                "truncate text-sm font-semibold tracking-tight transition-colors duration-300",
                floating ? "text-zinc-900" : "text-white",
              )}
            >
              Jiangban Qin
            </span>
            <span
              className={cn(
                "truncate font-mono text-[10px] transition-colors duration-300",
                floating ? "text-zinc-500" : "text-white/75",
              )}
            >
              jiangban.eth
            </span>
          </span>
        </Link>

        {/* 桌面端导航 */}
        <nav
          aria-label="主导航"
          className="hidden items-center gap-0.5 md:flex"
        >
          {NAV_LINKS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-300 outline-none focus-visible:ring-2",
                  focusRing,
                  navLinkTone(active),
                )}
              >
                {item.label[lang]}
              </Link>
            );
          })}
        </nav>

        {/* 右侧操作区 */}
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={toggle}
            aria-label="切换语言 / Switch language"
            className={cn(
              "hidden h-9 items-center gap-1.5 rounded-full px-4 text-sm font-semibold outline-none transition-colors duration-300 focus-visible:ring-2 sm:inline-flex",
              focusRing,
              floating
                ? "bg-brand text-white shadow-sm shadow-brand/25 hover:bg-brand/90"
                : "bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25",
            )}
          >
            <Languages className="size-4" aria-hidden />
            {lang === "zh" ? "翻译" : "Translate"}
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="site-mobile-menu"
            aria-label={menuOpen ? "关闭导航菜单" : "打开导航菜单"}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full outline-none transition-colors duration-300 focus-visible:ring-2 md:hidden",
              focusRing,
              floating
                ? "text-zinc-500 hover:bg-zinc-900/5 hover:text-zinc-900"
                : "text-white/85 hover:bg-white/15 hover:text-white",
            )}
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>

        {/* 移动端下拉菜单 */}
        <div
          id="site-mobile-menu"
          hidden={!menuOpen}
          className={cn(
            "absolute inset-x-0 top-full z-40 mt-2 md:hidden",
            menuOpen && "animate-in fade-in slide-in-from-top-2 duration-200",
          )}
        >
          <div className="rounded-3xl border border-white/70 bg-white/95 p-2 shadow-2xl shadow-zinc-900/15 backdrop-blur-xl">
            <ul className="flex flex-col">
              {NAV_LINKS.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand/60",
                        active
                          ? "bg-brand/10 text-brand"
                          : "text-zinc-700 hover:bg-zinc-100",
                      )}
                    >
                      {item.label[lang]}
                      {active ? (
                        <span className="size-1.5 rounded-full bg-brand" />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={() => {
                toggle();
                closeMenu();
              }}
              className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:ring-2 focus-visible:ring-brand/60"
            >
              <Languages className="size-4" aria-hidden />
              {lang === "zh" ? "翻译" : "Translate"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
