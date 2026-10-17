'use client'

import { BriefcaseIcon, CalendarIcon } from "lucide-react"
import { localizePath } from "@/lib/i18n/config"
import { homeContent } from "@/lib/i18n/content/home"
import { pick, type LocaleProps } from "@/lib/i18n/content/types"
import LinkCardArrow from "../ui/LinkCardArrow"

export default function NavLink({ locale }: LocaleProps) {
    const content = homeContent.navLinks

    return (
        <div className="w-full">
            <div className="my-4 gap-4 flex flex-wrap">
                <LinkCardArrow
                    href={localizePath(locale, "/experience")}
                    title={pick(content.experience, locale)}
                    icon={<CalendarIcon />}
                />
                <LinkCardArrow
                    href={localizePath(locale, "/cooperation")}
                    title={pick(content.cooperation, locale)}
                    icon={<BriefcaseIcon />}
                />
            </div>
        </div>
    )
}
