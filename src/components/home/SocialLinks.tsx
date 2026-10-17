"use client";

import { useState, type ReactNode } from "react";
import { GitHubIcon, WeChatIcon, YouTubeIcon, XBrandIcon, ShipinhaoIcon } from "@/components/icons";
import { homeContent } from "@/lib/i18n/content/home";
import { pick, type LocaleProps } from "@/lib/i18n/content/types";
import LinkCard from "../ui/LinkCard";
import QRCodeModal from "./QRCodeModal";

type SocialLink = {
  title: string;
  icon: ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function SocialLinks({ locale }: LocaleProps) {
  const [isOAModalOpen, setIsOAModalOpen] = useState(false);
  const [isChannelsModalOpen, setIsChannelsModalOpen] = useState(false);
  const content = homeContent.socialLinks;

  const links: SocialLink[] = [
    {
      href: "https://x.com/qinjiangban",
      title: "X",
      icon: <XBrandIcon className="w-6 h-6 text-black" />,
    },
    {
      href: "https://github.com/qinjiangban",
      title: "Github",
      icon: <GitHubIcon className="w-6 h-6 text-black" />,
    },
    {
      href: "https://www.youtube.com/@qinjiangban",
      title: "YouTube",
      icon: <YouTubeIcon className="w-6 h-6 text-[#FF0000]" />,
    },
    {
      onClick: () => setIsChannelsModalOpen(true),
      title: pick(content.channels, locale),
      icon: <ShipinhaoIcon />,
    },
    {
      onClick: () => setIsOAModalOpen(true),
      title: pick(content.officialAccount, locale),
      icon: <WeChatIcon className="w-6 h-6 text-[#07C160]" />,
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col gap-3">
        {links.map((link, index) => (
          <LinkCard
            key={index}
            href={link.href}
            title={link.title}
            icon={link.icon}
            onClick={link.onClick}
          />
        ))}
      </div>

      <QRCodeModal
        isOpen={isOAModalOpen}
        onClose={() => setIsOAModalOpen(false)}
        title={pick(content.officialAccount, locale)}
        description={pick(content.officialAccountQrDescription, locale)}
        imageSrc="/wechat-oa-qr.jpg"
        imageAlt={pick(content.officialAccountQrAlt, locale)}
      />

      <QRCodeModal
        isOpen={isChannelsModalOpen}
        onClose={() => setIsChannelsModalOpen(false)}
        title={pick(content.channels, locale)}
        description={pick(content.channelsQrDescription, locale)}
        imageSrc="/wechat-qr.png"
        imageAlt={pick(content.channelsQrAlt, locale)}
      />
    </>
  );
}
