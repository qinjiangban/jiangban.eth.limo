import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface LinkCardProps {
  href?: string;
  title: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function LinkCard({ href, title, icon, onClick }: LinkCardProps) {
  const content = (
    <Card className="w-full gap-0 rounded-[16px] border-white/70 bg-white/95 py-0 shadow-sm ring-black/5 transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-md">
      <CardHeader className="relative px-[18px] py-[18px]">
        <div className="flex items-center">
          <div className="absolute left-5 flex items-center justify-center text-foreground">
            {icon}
          </div>

          <CardTitle className="w-full text-center text-[15px] font-medium text-foreground">
            {title}
          </CardTitle>

          <div className="absolute right-5 text-muted-foreground transition-colors group-hover:text-foreground/70">
            <ArrowUpRightIcon />
          </div>
        </div>
      </CardHeader>
    </Card>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group block w-full cursor-pointer text-left"
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href || ""}
      className="group block w-full"
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </Link>
  );
}
