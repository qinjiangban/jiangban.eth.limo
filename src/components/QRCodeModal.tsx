"use client";

import Image from "next/image";
import { FaWeixin } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="max-w-sm rounded-[28px] border-white/70 bg-white/95 p-8 shadow-2xl shadow-black/10">
        <DialogHeader className="items-center text-center">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[#07C160]/10 text-[#07C160]">
            <FaWeixin className="size-7" />
          </div>

          <DialogTitle className="text-xl">WeChat Channel</DialogTitle>
          <DialogDescription className="max-w-[22rem]">
            Scan the QR code below using WeChat to follow my channel.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4">
          <div className="overflow-hidden rounded-[24px] border border-border bg-muted/60 p-3 shadow-inner">
            <Image
              src="/wechat-qr.png"
              alt="WeChat QR"
              width={208}
              height={208}
              className="size-52 rounded-[18px] object-cover"
              priority
            />
          </div>

          <Badge
            variant="secondary"
            className="h-auto rounded-full bg-brand/10 px-3 py-1 text-brand"
          >
            使用微信扫码关注
          </Badge>
        </div>
      </DialogContent>
    </Dialog>
  );
}
