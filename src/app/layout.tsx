import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jiangban Qin - Web3 Builder & Developer",
  description: "Personal website of Jiangban, Qin, a Web3 Builder & Developer. ENS: jiangban.eth",
  other: {
    'base:app_id': '6a0c45816b7916c4b4095207',
    'talentapp:project_verification': '2bf075c1a68199a8325c5909ecb72b36c15b7838b4f7e71f34c2f8271b8ddcd929e201ab25aeedfad274929bd5c7930565419d539533f20196f91920d71930b9'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
