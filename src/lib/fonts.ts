import { Geist, Geist_Mono } from "next/font/google";

/** 全站字体：在根布局的 html 上挂载，多个根布局共用同一实例 */
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
