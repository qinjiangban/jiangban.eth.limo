'use client'

import { CalendarIcon, ArrowRightIcon } from "lucide-react"
import { Card, CardHeader, CardTitle } from "./card"
import Link from "next/link"

export default function LinkCardArrow({ href, title, icon }: { href: string, title: string, icon: React.ReactNode }) {
    return (
        <>
            <Link
                href={href || ""}
                title={title || ""}
                className="group block w-full"
                rel="noreferrer"
            >
                <Card className="w-full gap-0 rounded-[16px] border-white/70 bg-white/95 py-0 shadow-sm ring-black/5 transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-md">
                    <CardHeader className="relative px-[18px] py-[18px]">
                        <div className="flex items-center">
                            <div className="absolute left-5 flex items-center justify-center text-foreground">
                               {icon}
                            </div>

                            <CardTitle className="w-full text-center text-[15px] font-medium text-foreground">
                                {title || ""}
                            </CardTitle>

                            <div className="absolute right-5 text-muted-foreground transition-colors group-hover:text-foreground/70">
                                <ArrowRightIcon />
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            </Link>
        </>
    )
}