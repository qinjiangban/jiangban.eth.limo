import Image from "next/image";

export default function SocialLogo() {
  const socials = [
    {
      href: "https://app.ens.domains/jiangban.eth",
      iconSrc: "/logo/ENS.jpg",
      label: "ENS",
    },
    {
      href: "https://farcaster.xyz/qinjiangban",
      iconSrc: "/logo/Farcaster.jpg",
      label: "Farcaster",
    },
    {
      href: "https://firefly.social/profile/lens/qinjiangban",
      iconSrc: "/logo/lens.jpg",
      label: "Lens",
    },
    {
      href: "https://zora.co/@qinjiangban",
      iconSrc: "/logo/zora.jpg",
      label: "Zora",
    },
    {
      href: "https://paragraph.com/jiangban.eth",
      iconSrc: "/logo/paragraph.png",
      label: "Paragraph",
    },
 /*    {
      href: "#",
      iconSrc: "/logo/OpenSea.png",
      label: "OpenSea",
    }, */
    {
      href: "https://talent.app/qinjiangban",
      iconSrc: "/logo/Talent.jpg",
      label: "Talent",
    },
    {
      href: "https://cn.rootdata.com/member/%E8%A6%83%E6%B1%9F%E6%89%AE?k=MjcxMjc=",
      iconSrc: "/logo/Rootdata.jpg",
      label: "RootData",
    },
    {
      href: "https://www.instagram.com/qinjiangban",
      iconSrc: "/logo/instagram.png",
      label: "Instagram",
    },
    {
      href: "https://www.tiktok.com/@qinjiangban",
      iconSrc: "/logo/Tiktok.jpeg",
      label: "TikTok",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-2 mb-4 w-full px-2">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          title={social.label}
          aria-label={social.label}
          target="_blank"
          className="text-zinc-600 hover:text-brand dark:text-zinc-400 dark:hover:text-brand transition-transform transform hover:scale-110 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-zinc-100 overflow-hidden"
        >
          <Image
            src={social.iconSrc}
            alt={social.label}
            width={40}
            height={40}
            className="w-full h-full object-cover"
            unoptimized
          />
        </a>
      ))}
    </div>
  );
}
