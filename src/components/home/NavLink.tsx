'use client'

import { BriefcaseIcon, CalendarIcon } from "lucide-react"
import LinkCardArrow from "../ui/LinkCardArrow"

export default function NavLink() {
    return (
        <div className="w-full">
            <div className="my-4 gap-4 flex flex-wrap">
                <LinkCardArrow
                    href="/experience"
                    title="经历时间线"
                    icon={<CalendarIcon />}
                />
                <LinkCardArrow
                    href="/cooperation"
                    title="商务合作"
                    icon={<BriefcaseIcon />}
                />
            </div>
        </div>
    )
}