"use client";

import { useState, type ReactNode } from "react";
import { GitHubIcon, WeChatIcon, YouTubeIcon, XBrandIcon, ShipinhaoIcon } from "@/components/icons";
import LinkCard from "../ui/LinkCard";
import QRCodeModal from "./QRCodeModal";

type SocialLink = {
  title: string;
  icon: ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function SocialLinks() {
  const [isOAModalOpen, setIsOAModalOpen] = useState(false);
  const [isChannelsModalOpen, setIsChannelsModalOpen] = useState(false);

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
      title: "视频号",
      icon: <ShipinhaoIcon />,
    },
    {
      onClick: () => setIsOAModalOpen(true),
      title: "公众号",
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
        title="公众号"
        description="使用微信扫一扫关注公众号"
        imageSrc="/wechat-oa-qr.jpg"
        imageAlt="公众号二维码"
      />

      <QRCodeModal
        isOpen={isChannelsModalOpen}
        onClose={() => setIsChannelsModalOpen(false)}
        title="视频号"
        description="使用微信扫一扫关注视频号"
        imageSrc="/wechat-qr.png"
        imageAlt="视频号二维码"
      />
    </>
  );
}
