import { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface LinkCardProps {
  href?: string;
  title: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export default function LinkCard({ href, title, icon, onClick }: LinkCardProps) {
  const commonClasses = "group relative w-full flex items-center p-[18px] rounded-[16px] bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] cursor-pointer";

  const content = (
    <>
      <div className="absolute left-5 flex items-center justify-center">
        {icon}
      </div>

      <span className="w-full text-center font-medium text-[15px] text-black">
        {title}
      </span>

      <div className="absolute right-5 flex items-center justify-center text-zinc-400 group-hover:text-zinc-600 transition-colors">
        <FiArrowUpRight className="w-5 h-5" />
      </div>
    </>
  );

  if (onClick) {
    return (
      <div onClick={onClick} className={commonClasses}>
        {content}
      </div>
    );
  }

  return (
    <a href={href} className={commonClasses} target='_blank'>
      {content}
    </a>
  );
}
