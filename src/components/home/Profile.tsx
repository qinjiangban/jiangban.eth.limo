import Link from "next/link";
import { CoffeeIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { localizePath } from "@/lib/i18n/config";
import { homeContent } from "@/lib/i18n/content/home";
import { pick, type LocaleProps } from "@/lib/i18n/content/types";
import { cn } from "@/lib/utils";

export default function Profile({ locale }: LocaleProps) {
  const content = homeContent.profile;

  return (
    <Card className="relative w-full gap-0 rounded-[24px] border-white/60 bg-white/95 py-0 shadow-xl shadow-brand/8 ring-black/5 backdrop-blur">
      <CardHeader className="px-6 pt-6 pb-0">
        <Link
          href={localizePath(locale, "/gratuity")}
          title={pick(content.gratuityLabel, locale)}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "absolute top-6 right-6 h-auto rounded-full border-brand/15 bg-brand/10 px-3 py-2 text-sm text-brand hover:bg-brand hover:text-white"
          )}
        >
          <CoffeeIcon data-icon="inline-start" />
          {pick(content.gratuityLabel, locale)}
        </Link>

        <div className="flex flex-col items-start text-left">
          <CardTitle className="mb-1 text-2xl font-bold tracking-tight text-foreground">
            Jiangban Qin
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="px-6 pt-0 pb-6">
        <div className="flex flex-col gap-1.5 text-[14px] text-foreground">
          <p>
            {pick(content.createPrefix, locale)}{" "}
            <Link
              href="https://coolha.com/"
              target="_blank"
              className="transition-all hover:text-primary hover:underline"
            >
              {content.createLinkLabel}
            </Link>
          </p>
          <p>{pick(content.secondHighlight, locale)}</p>
        </div>
      </CardContent>
    </Card>
  );
}
