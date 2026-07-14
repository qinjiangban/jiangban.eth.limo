import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

import ExperienceTimeline from "@/app/experience/ExperienceTimeline";
import { experiences } from "@/app/experience/experience-data";

export const metadata: Metadata = {
  title: "经历 - Jiangban Qin",
  description: "Jiangban Qin 的工作经历与教育背景时间线",
};

export default function ExperiencePage() {
  const workExperiences = experiences.filter((e) => e.category === "work");
  const educationExperiences = experiences.filter(
    (e) => e.category === "education",
  );

  return (
    <div className="flex min-h-screen flex-col items-center p-4 font-sans selection:bg-brand selection:text-white">
      <main className="flex w-full max-w-[640px] flex-col gap-8">
        {/* 顶部导航 */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex size-8 items-center justify-center rounded-full border border-white/70 bg-white/90 text-zinc-600 shadow-sm transition-colors hover:bg-white hover:text-brand"
            aria-label="返回首页"
          >
            <ChevronLeftIcon className="size-4" />
          </Link>
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            时间线
          </h1>
        </div>

        {/* 工作经历 */}
        <section>
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            工作经历
          </h2>
          <ExperienceTimeline experiences={workExperiences} />
        </section>

        {/* 教育背景 */}
        <section>
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            教育背景
          </h2>
          <ExperienceTimeline experiences={educationExperiences} />
        </section>
      </main>
    </div>
  );
}
