"use client";

import { useState } from "react";
import BackHome from "@/components/BackHome";
import { Copy, Check } from "lucide-react";
import Image from "next/image";

const RECIPIENT_ADDRESS = "0x6e5C9aFa78E4a476600279b8dFDa29572e5F2a43";
const ENS_NAME = "jiangban.eth";

const QR_METHODS = [
  {
    id: "crypto",
    title: "加密货币",
    subtitle: "EVM 主流网络（ETH / Base 等）",
    qr: "/QR/0x.png",
    alt: "区块链地址二维码",
  },
  {
    id: "wechat",
    title: "微信支付",
    subtitle: "扫一扫二维码打赏",
    qr: "/QR/wechatpay-qr.png",
    alt: "微信支付二维码",
  },
  {
    id: "paypal",
    title: "PayPal",
    subtitle: "海外用户收款",
    qr: "/QR/paypal-qr.jpg",
    alt: "PayPal 收款二维码",
  },
];

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

export default function GratuityPage() {
  const [copied, setCopied] = useState<"ens" | "address" | null>(null);

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
      console.error("复制失败");
    }
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center p-4 font-sans selection:bg-brand selection:text-white">
      <main className="flex w-full max-w-125 flex-col items-center gap-4">
        <div className="flex w-full flex-col gap-5 rounded-[24px] bg-white p-5 shadow-sm sm:p-6">
          {/* 顶部 */}
          <div className="flex items-center justify-between">
            <BackHome />
            <h1 className="text-[15px] font-bold text-zinc-800">打赏 / 支持</h1>
            <span className="w-8" aria-hidden />
          </div>

          {/* ENS 与地址复制 */}
          <div className="flex flex-col gap-3 rounded-[16px] border border-zinc-100 bg-zinc-50 p-4">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-semibold tracking-wider text-zinc-500">
                ENS Domain
              </label>
              <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-2.5">
                <span className="text-[13px] font-bold text-zinc-800">{ENS_NAME}</span>
                <button
                  type="button"
                  onClick={() => copy(ENS_NAME, "ens")}
                  className="flex items-center justify-center rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-zinc-50 hover:text-brand"
                  title="复制 ENS"
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
                EVM Address
              </label>
              <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-2.5">
                <span className="break-all pr-2 font-mono text-[11px] text-zinc-600 sm:text-xs">
                  {RECIPIENT_ADDRESS}
                </span>
                <button
                  type="button"
                  onClick={() => copy(RECIPIENT_ADDRESS, "address")}
                  className="flex shrink-0 items-center justify-center rounded-md p-1.5 text-zinc-400 transition-colors hover:bg-zinc-50 hover:text-brand"
                  title="复制地址"
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
            {QR_METHODS.map((method) => (
              <div
                key={method.id}
                className="rounded-[16px] border border-zinc-100 bg-zinc-50 p-4"
              >
                <div className="mb-3">
                  <h2 className="text-[14px] font-bold text-zinc-800">
                    {method.title}
                  </h2>
                  <p className="text-[12px] text-zinc-500">{method.subtitle}</p>
                </div>
                <div className="mx-auto flex max-w-55 items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
                  <Image
                    src={method.qr}
                    alt={method.alt}
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
