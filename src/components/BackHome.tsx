'use client'

import { ChevronLeftIcon } from "lucide-react"
import Link from "next/link"

export default function BackHome() {
    return (
        <>
            <Link
                href="/"
                className="inline-flex size-8 items-center justify-center rounded-full border border-white/70 bg-white/90 text-zinc-600 shadow-sm transition-colors hover:bg-white hover:text-brand"
                aria-label="返回首页"
            >
                <ChevronLeftIcon className="size-4" />
            </Link>
        </>
    )
}