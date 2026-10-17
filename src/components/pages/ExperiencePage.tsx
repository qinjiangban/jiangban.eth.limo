import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import { getExperiencesByCategory } from "@/components/experience/experience-data";
import { localizePath } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";
import { experiencePageContent } from "@/lib/i18n/content/experience";
import { pick } from "@/lib/i18n/content/types";

export default function ExperiencePage({ locale }: { locale: Locale }) {
  const content = experiencePageContent;
  const workExperiences = getExperiencesByCategory("work");
  const educationExperiences = getExperiencesByCategory("education");

  return (
    <div className="flex flex-1 flex-col items-center p-4 font-sans selection:bg-brand selection:text-white">
      <main className="flex w-full max-w-[640px] flex-col gap-8">
        {/* 顶部导航 */}
        <div className="flex items-center gap-3">
          <Link
            href={localizePath(locale, "/")}
            className="inline-flex size-8 items-center justify-center rounded-full border border-white/70 bg-white/90 text-zinc-600 shadow-sm transition-colors hover:bg-white hover:text-brand"
            aria-label={pick(content.backHome, locale)}
          >
            <ChevronLeftIcon className="size-4" />
          </Link>
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            {pick(content.title, locale)}
          </h1>
        </div>

        {/* 工作经历 */}
        <section>
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {pick(content.workHeading, locale)}
          </h2>
          <ExperienceTimeline experiences={workExperiences} locale={locale} />
        </section>

        {/* 教育背景 */}
        <section>
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            {pick(content.educationHeading, locale)}
          </h2>
          <ExperienceTimeline experiences={educationExperiences} locale={locale} />
        </section>
      </main>
    </div>
  );
}
