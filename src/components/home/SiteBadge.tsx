import Link from "next/link";

import { localizePath } from "@/lib/i18n/config";
import { homeContent } from "@/lib/i18n/content/home";
import { pick, type LocaleProps } from "@/lib/i18n/content/types";

export default function SiteBadge({ locale }: LocaleProps) {
  const content = homeContent.siteBadge;
  const forAgentsLabel = pick(content.forAgents, locale);

  return (
    <div className="mt-12 flex flex-col items-center gap-2">


      <p className="text-xs text-zinc-500">
        {pick(content.accessPrefix, locale)}{" "}
        <span className="font-mono text-zinc-500">jiangban.eth</span>
        {" "}
        {pick(content.accessSuffix, locale)}
      </p>

      <Link
        href={localizePath(locale, "/for-agents")}
        className="text-[10px] font-medium tracking-wide text-zinc-400 transition-colors hover:text-brand"
        aria-label={forAgentsLabel}
        title={forAgentsLabel}
      >
        {forAgentsLabel}
      </Link>
    </div>
  );
}
