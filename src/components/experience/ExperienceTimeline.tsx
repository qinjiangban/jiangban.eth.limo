'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, ClockIcon, ArrowUpRightIcon } from "lucide-react";

import type { Experience } from "@/components/experience/experience-data";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import type { Locale } from "@/lib/i18n/config";
import { experiencePageContent } from "@/lib/i18n/content/experience";
import { pick } from "@/lib/i18n/content/types";

/* ============ 子组件 ============ */

/** 圆点指示器：在时间线上标记一个节点 */
function TimelineDot({ category }: { category: Experience["category"] }) {
  return (
    <div className="relative z-10 flex shrink-0 items-center justify-center">
      <div
        className={`size-4 rounded-full border-4 ring-4 ring-white ${category === "work"
          ? "border-brand bg-brand/20"
          : "border-zinc-300 bg-zinc-100"
          }`}
      />
    </div>
  );
}

/** 一份经历的卡片内容 */
function ExperienceCard({
  experience,
  locale,
}: {
  experience: Experience;
  locale: Locale;
}) {
  const role = pick(experience.role, locale);
  const org = pick(experience.org, locale);
  const type = pick(experience.type, locale);
  const from = pick(experience.from, locale);
  const to = experience.to
    ? pick(experience.to, locale)
    : pick(experiencePageContent.present, locale);
  const duration = experience.duration
    ? pick(experience.duration, locale)
    : undefined;
  const location = pick(experience.location, locale);
  const locationType = pick(experience.locationType, locale);
  const description = pick(experience.description, locale);

  return (
    <div className="flex-1 rounded-[20px] border border-white/70 bg-white/95 p-5 shadow-sm ring-black/5 backdrop-blur transition-all duration-300 hover:shadow-md">
      {/* 角色 + 标签 */}
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {experience.logoSrc && (
          <div className="mr-1 flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full border border-zinc-100 bg-white">
            <Image
              src={experience.logoSrc}
              alt={`${org} logo`}
              width={28}
              height={28}
              className="size-full object-cover"
              unoptimized
            />
          </div>
        )}
        <span className="text-base font-bold tracking-tight text-foreground">
          {role}
        </span>
        {type && (
          <span className="inline-flex h-5 items-center rounded-full border border-brand/20 bg-brand/10 px-2.5 text-[11px] font-medium text-brand">
            {type}
          </span>
        )}
      </div>

      {/* 公司/组织 */}
      {org && (
        <p className="mb-2 text-[14px] font-medium text-zinc-600">
          {org}
        </p>
      )}

      {/* 时间 + 地点 */}
      <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-zinc-500">
        <span className="inline-flex items-center gap-1">
          <ClockIcon className="size-3.5" />
          {from}
          {` - ${to}`}
          {duration && ` · ${duration}`}
        </span>
        {(location || locationType) && (
          <span className="inline-flex items-center gap-1">
            <MapPinIcon className="size-3.5" />
            {location}
            {location && locationType && " · "}
            {locationType}
          </span>
        )}
      </div>

      {/* 描述 */}
      {description && (
        <p className="whitespace-pre-line text-[13px] leading-relaxed text-zinc-600">
          {description}
        </p>
      )}

      {/* 链接 */}
      {experience.link && (
        <Link
          href={experience.link.url}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-brand transition-colors hover:text-brand/70"
        >
          {experience.link.label}
          <ArrowUpRightIcon className="size-3.5" />
        </Link>
      )}

      {/* 作品集图片 */}
      {experience.portfolioImages && experience.portfolioImages.length > 0 && (
        <PortfolioGallery images={experience.portfolioImages} locale={locale} />
      )}
    </div>
  );
}

/** 作品集画廊：缩略图 + 点击放大 */
function PortfolioGallery({
  images,
  locale,
}: {
  images: NonNullable<Experience["portfolioImages"]>;
  locale: Locale;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelectedIndex(i)}
            className="group overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 transition-all hover:ring-2 hover:ring-brand/40"
          >
            <Image
              src={img.src}
              alt={pick(img.alt, locale)}
              width={400}
              height={300}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
          </button>
        ))}
      </div>

      {/* Lightbox 放大查看 */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => { if (!open) setSelectedIndex(null); }}
      >
        <DialogContent
          showCloseButton={false}
          className="flex cursor-pointer max-w-[95vw] items-center justify-center gap-0 border-0 bg-transparent p-0 shadow-none sm:max-w-[95vw]"
          onClick={() => setSelectedIndex(null)}
        >
          <DialogTitle className="sr-only">
            {selectedIndex !== null
              ? pick(images[selectedIndex].alt, locale)
              : pick(experiencePageContent.portfolio, locale)}
          </DialogTitle>
          {selectedIndex !== null && (
            <div className="overflow-hidden rounded-2xl bg-black/90">
              <Image
                src={images[selectedIndex].src}
                alt={pick(images[selectedIndex].alt, locale)}
                width={0}
                height={0}
                sizes="95vw"
                className="max-h-[95vh] h-auto w-auto object-contain pointer-events-none"
                unoptimized
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

/** 教育 / 事件的简洁标记 */
function EducationMarker({
  experience,
  locale,
}: {
  experience: Experience;
  locale: Locale;
}) {
  const role = pick(experience.role, locale);
  const org = pick(experience.org, locale);
  const type = pick(experience.type, locale);
  const from = pick(experience.from, locale);
  const to = experience.to ? pick(experience.to, locale) : "";
  const duration = experience.duration
    ? pick(experience.duration, locale)
    : undefined;
  const location = pick(experience.location, locale);
  const description = pick(experience.description, locale);

  return (
    <div className="flex-1 rounded-[20px] border border-white/70 bg-white/95 p-5 shadow-sm ring-black/5 backdrop-blur">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="text-base font-bold tracking-tight text-foreground">
          {role}
        </span>
        {type && (
          <span className="inline-flex h-5 items-center rounded-full border border-zinc-300 bg-zinc-50 px-2.5 text-[11px] font-medium text-zinc-500">
            {type}
          </span>
        )}
      </div>

      {org && (
        <p className="mb-2 text-[14px] font-medium text-zinc-600">
          {org}
        </p>
      )}

      {from && to && (
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-zinc-500">
          <span className="inline-flex items-center gap-1">
            <ClockIcon className="size-3.5" />
            {from} - {to}
            {duration && ` · ${duration}`}
          </span>
          {location && (
            <span className="inline-flex items-center gap-1">
              <MapPinIcon className="size-3.5" />
              {location}
            </span>
          )}
        </div>
      )}

      {description && (
        <p className="whitespace-pre-line text-[13px] leading-relaxed text-zinc-600">
          {description}
        </p>
      )}
    </div>
  );
}

/* ============ 主组件 ============ */

export default function ExperienceTimeline({
  experiences,
  locale,
}: {
  experiences: Experience[];
  locale: Locale;
}) {
  return (
    <div className="relative flex flex-col gap-8 pl-8">
      {/* 左侧时间线竖线（全局覆盖） */}
      <div className="absolute left-[7px] top-2 h-full w-0.5 bg-gradient-to-b from-brand/30 via-brand/10 to-zinc-200" />

      {experiences.map((exp) => (
        <div key={exp.id} className="relative flex items-start gap-5">
          <TimelineDot category={exp.category} />

          {exp.category === "work" ? (
            <ExperienceCard experience={exp} locale={locale} />
          ) : (
            <EducationMarker experience={exp} locale={locale} />
          )}
        </div>
      ))}
    </div>
  );
}
