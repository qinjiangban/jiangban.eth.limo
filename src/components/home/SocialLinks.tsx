"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaShopify, FaSquareXTwitter } from "react-icons/fa6";
import { RiWechatChannelsLine } from "react-icons/ri";
import LinkCard from "../ui/LinkCard";
import QRCodeModal from "./QRCodeModal";

export default function SocialLinks() {
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);

  const links = [
    {
      onClick: () => setIsWeChatModalOpen(true),
      title: "WeChat",
      icon: <RiWechatChannelsLine className="w-6 h-6 text-[#fa9d3b]" />
    },
    {
      href: "https://x.com/qinjiangban",
      title: "X",
      icon: <FaSquareXTwitter className="w-6 h-6 text-black" />
    },
    {
      href: "https://github.com/qinjiangban",
      title: "Github",
      icon: <FaGithub className="w-6 h-6 text-black" />
    },
/*     {
      href: "https://www.linkedin.com/in/qinjiangban/",
      title: "Linkedin",
      icon: <FaLinkedin className="w-6 h-6 text-[#0A66C2]" />
    }, */
    {
      href: "https://www.youtube.com/@qinjiangban",
      title: "YouTube",
      icon: <FaYoutube className="w-6 h-6 text-[#FF0000]" />
    },
    {
      href: "https://jiangban.myshopify.com/",
      title: "Shopify",
      icon: <FaShopify className="w-6 h-6 text-[#95BF47]" />
    }
    /*     {
          href: "https://www.tiktok.com/@qinjiangban",
          title: "Tiktok",
          icon: <FaTiktok className="w-6 h-6 text-[#000000]" />
        } */
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
        isOpen={isWeChatModalOpen}
        onClose={() => setIsWeChatModalOpen(false)}
      />
    </>
  );
}
