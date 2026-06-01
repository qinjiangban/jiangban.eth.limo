import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SocialLogo() {
  const socials = [

    /*     {
      href: "https://www.instagram.com/qinjiangban",
      iconSrc: "/logo/instagram.png",
      label: "Instagram",
    }, */
    {
      href: "https://farcaster.xyz/qinjiangban",
      iconSrc: "/logo/Farcaster.jpg",
      label: "Farcaster",
    },
    {
      href: "https://hey.xyz/u/jiangban",
      iconSrc: "/logo/lens.jpg",
      label: "Lens",
    },
    {
      href: "https://zora.co/@qinjiangban",
      iconSrc: "/logo/zora.jpg",
      label: "Zora",
    },
    {
      href: "https://app.ens.domains/jiangban.eth",
      iconSrc: "/logo/ENS.jpg",
      label: "ENS",
    },
/*     {
      href: "https://paragraph.com/jiangban.eth",
      iconSrc: "/logo/paragraph.png",
      label: "Paragraph",
    },
    {
      href: "#",
      iconSrc: "/logo/OpenSea.png",
      label: "OpenSea",
    },
    {
      href: "https://talent.app/qinjiangban",
      iconSrc: "/logo/Talent.jpg",
      label: "Talent",
    },
    {
      href: "https://www.rootdata.com/member/%E8%A6%83%E6%B1%9F%E6%89%AE?k=MjcxMjc%3D",
      iconSrc: "/logo/Rootdata.jpg",
      label: "RootData",
    }, */

  ];

  return (
    <div className="mt-2 mb-4 flex w-full flex-wrap items-center justify-center gap-4 px-2">
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          title={social.label}
          aria-label={social.label}
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-300 hover:-translate-y-0.5"
        >
          <Avatar className="size-10 bg-white shadow-sm after:border-black/5">
            <AvatarImage src={social.iconSrc} alt={social.label} />
            <AvatarFallback className="text-[11px]">
              {social.label.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </Link>
      ))}
    </div>
  );
}
