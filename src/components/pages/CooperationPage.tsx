import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  Briefcase,
  Code2,
  Landmark,
  Mail,
  MessageCircle,
  Search,
  TrendingUp,
  Wallet,
} from "lucide-react";

import { localizePath } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";
import {
  cooperationContent,
  type CapabilityContent,
} from "@/lib/i18n/content/cooperation";
import { pick, pickList } from "@/lib/i18n/content/types";

/**
 * 核心能力卡片图标：按内容文件的 key 一一映射，
 * 图标数量与顺序沿用原设计，不随语言切换而变化。
 */
const CAPABILITY_ICONS: Record<
  CapabilityContent["key"],
  React.ComponentType<{ className?: string }>
> = {
  dapp: Code2,
  agentPayment: Wallet,
  aiAgents: Bot,
  aeo: Search,
  rwa: Landmark,
  growth: TrendingUp,
};

export default function CooperationPage({ locale }: { locale: Locale }) {
  const content = cooperationContent;

  return (
    <div className="flex flex-1 flex-col items-center p-4 font-sans selection:bg-brand selection:text-white">
      <main className="flex w-full max-w-3xl flex-col gap-10">
        {/* 顶部导航 */}
        <div className="flex items-center gap-3">
          <Link
            href={localizePath(locale, "/")}
            className="inline-flex size-8 items-center justify-center rounded-full border border-white/70 bg-white/90 text-zinc-600 shadow-sm transition-colors hover:bg-white hover:text-brand"
            aria-label={pick(content.backHome, locale)}
          >
            <ArrowLeft className="size-4" />
          </Link>
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            {pick(content.title, locale)}
          </h1>
        </div>

        {/* 关于商务 */}
        <section className="rounded-[24px] border border-white/70 bg-white/95 p-6 shadow-sm ring-black/5 backdrop-blur">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
              <Briefcase className="size-5" />
            </div>
            <h2 className="text-lg font-bold tracking-tight text-foreground">
              {pick(content.about.title, locale)}
            </h2>
          </div>

          <p className="text-sm leading-7 text-zinc-700">
            {pick(content.about.description, locale)}
          </p>

          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {pick(content.about.pastProjectsLabel, locale)}
            </p>
            <div className="flex flex-wrap gap-2">
              {pickList(content.about.pastProjects, locale).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand/15 bg-brand/5 px-3 py-1 text-[13px] font-medium text-brand"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 核心能力 */}
        <section>
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {pick(content.capabilities.title, locale)}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {content.capabilities.items.map((cap) => (
              <CapabilityCard key={cap.key} capability={cap} locale={locale} />
            ))}
          </div>
        </section>

        {/* 合适的合作 */}
        <section>
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {pick(content.engagements.title, locale)}
          </h2>
          <div className="flex flex-wrap gap-2">
            {pickList(content.engagements.items, locale).map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-200 bg-white/80 px-3.5 py-1.5 text-[13px] font-medium text-zinc-700 shadow-sm transition-colors hover:border-brand/30 hover:text-brand"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* 联系 */}
        <section className="rounded-[24px] border border-brand/15 bg-linear-to-br from-white/95 to-brand/5 p-6 shadow-sm ring-black/5 backdrop-blur">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-sm shadow-brand/25">
              <Mail className="size-5" />
            </div>
            <h2 className="text-lg font-bold tracking-tight text-foreground">
              {pick(content.contact.title, locale)}
            </h2>
          </div>

          <p className="mb-5 text-sm leading-7 text-zinc-700">
            {pick(content.contact.description, locale)}
          </p>

          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {pick(content.contact.audiencesLabel, locale)}
            </p>
            <div className="flex flex-wrap gap-2">
              {pickList(content.contact.audiences, locale).map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-brand/10 px-3 py-1 text-[13px] font-medium text-brand"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {pick(content.contact.notesLabel, locale)}
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {pickList(content.contact.notes, locale).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-zinc-700"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="https://x.com/qinjiangban?n=66162838"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand/25 transition-colors hover:bg-brand/90"
          >
            <MessageCircle className="size-4" />
            {pick(content.contact.cta, locale)}
          </Link>
        </section>
      </main>
    </div>
  );
}

function CapabilityCard({
  capability,
  locale,
}: {
  capability: CapabilityContent;
  locale: Locale;
}) {
  const Icon = CAPABILITY_ICONS[capability.key];

  return (
    <div className="flex flex-col rounded-[20px] border border-white/70 bg-white/95 p-5 shadow-sm ring-black/5 backdrop-blur transition-all duration-300 hover:shadow-md">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Icon className="size-5" />
        </div>
        <h3 className="text-base font-bold tracking-tight text-foreground">
          {pick(capability.title, locale)}
        </h3>
      </div>

      <p className="mb-4 text-[13px] leading-relaxed text-zinc-500">
        {pick(capability.intro, locale)}
      </p>

      <div className="space-y-4">
        {capability.groups.map((group) => (
          <div key={pick(group.label, locale)}>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              {pick(group.label, locale)}
            </p>
            <ul className="space-y-1.5">
              {pickList(group.items, locale).map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13px] leading-relaxed text-zinc-700"
                >
                  <span className="mt-1.75 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
