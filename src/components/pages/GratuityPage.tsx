"use client";

import { useState } from "react";
import BackHome from "@/components/BackHome";
import { Copy, Check } from "lucide-react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { gratuityContent } from "@/lib/i18n/content/gratuity";
import { pick } from "@/lib/i18n/content/types";

const RECIPIENT_ADDRESS = "0x6e5C9aFa78E4a476600279b8dFDa29572e5F2a43";
const ENS_NAME = "jiangban.eth";

function fallbackCopy(text: string): boolean {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export default function GratuityPage({ locale }: { locale: Locale }) {
  const [copied, setCopied] = useState<"ens" | "address" | null>(null);
  const content = gratuityContent;

  const copy = async (text: string, type: "ens" | "address") => {
    let ok = false;

    // 优先使用现代 Clipboard API
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        ok = true;
      } catch {
        ok = false;
      }
    }

    // 失败则降级用 execCommand（兼容 IPFS 网关等受限场景）
    if (!ok) ok = fallbackCopy(text);

    if (ok) {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } else {
      console.error(pick(content.copyFailed, locale));
    }
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center p-4 font-sans selection:bg-brand selection:text-white">
      <main className="flex w-full max-w-125 flex-col items-center gap-4">
        <div className="flex w-full flex-col gap-5 rounded-[24px] bg-white p-5 shadow-sm sm:p-6">
          {/* 顶部 */}
          <div className="flex items-center justify-between">
            <BackHome locale={locale} />
            <h1 className="text-[15px] font-bold text-zinc-800">
              {pick(content.title, locale)}
            </h1>
            <span className="w-8" aria-hidden />
          </div>

          {/* ENS 与地址复制 */}
          <div className="flex flex-col gap-3 rounded-[16px] border border-zinc-100 bg-zinc-50 p-4">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold tracking-wider text-zinc-500">
                {content.ensLabel}
              </label>
              <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-2.5">
                <span className="text-[13px] font-bold text-zinc-800">{ENS_NAME}</span>
                <button
                  type="button"
                  onClick={() => copy(ENS_NAME, "ens")}
                  className="flex items-center justify-center rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-zinc-50 hover:text-brand"
                  title={pick(content.copyEns, locale)}
                >
                  {copied === "ens" ? (
                    <Check className="size-3.5 text-green-500" />
                  ) : (
                    <Copy className="size-3.5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold tracking-wider text-zinc-500">
                {content.evmLabel}
              </label>
              <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-2.5">
                <span className="break-all pr-2 font-mono text-[11px] text-zinc-600 sm:text-xs">
                  {RECIPIENT_ADDRESS}
                </span>
                <button
                  type="button"
                  onClick={() => copy(RECIPIENT_ADDRESS, "address")}
                  className="flex shrink-0 items-center justify-center rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-zinc-50 hover:text-brand"
                  title={pick(content.copyAddress, locale)}
                >
                  {copied === "address" ? (
                    <Check className="size-3.5 text-green-500" />
                  ) : (
                    <Copy className="size-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 收款二维码 */}
          <div className="flex flex-col gap-4">
            {content.methods.map((method) => (
              <div
                key={method.id}
                className="rounded-[16px] border border-zinc-100 bg-zinc-50 p-4"
              >
                <div className="mb-3">
                  <h2 className="text-[14px] font-bold text-zinc-800">
                    {pick(method.title, locale)}
                  </h2>
                  <p className="text-[12px] text-zinc-500">
                    {pick(method.subtitle, locale)}
                  </p>
                </div>
                <div className="mx-auto flex max-w-55 items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
                  <Image
                    src={method.qr}
                    alt={pick(method.alt, locale)}
                    width={400}
                    height={400}
                    unoptimized
                    className="h-auto w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
