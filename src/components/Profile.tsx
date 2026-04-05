import Image from "next/image";
import Link from "next/link";
import { FaCoffee } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="w-full bg-white rounded-[24px] p-6 shadow-sm flex flex-col items-start text-left relative">
      {/* 打赏按钮放置在卡片右上角 */}
      <Link
        href="/gratuity"
        className="absolute top-6 right-6 flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-brand/10 text-brand font-medium text-sm hover:bg-brand hover:text-white transition-all duration-300 shadow-sm"
        title="gratuity"
      >
        <FaCoffee  className="w-4 h-4" /> Gratuity
      </Link>

      <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-100 shadow-sm mb-4 relative">
        <Image
          src="/avatar.png"
          alt="jiangban.eth avatar"
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <h1 className="text-2xl font-bold tracking-tight text-black mb-1">
        Jiangban Qin
      </h1>

      {/*       <p className="text-[14px] text-zinc-400 mb-4">
        Founder
      </p> */}

      <div className="space-y-1.5 text-[14px] text-black">
        <div className="flex items-center gap-2">
          <span>🟩create coolha.com</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🟧web3 build developer</span>
        </div>
      </div>
    </div>
  );
}
