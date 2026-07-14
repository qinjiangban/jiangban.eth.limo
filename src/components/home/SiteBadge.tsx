import Link from "next/link";



export default function SiteBadge() {
  return (
    <div className="mt-12 flex flex-col items-center gap-2">


      <p className="text-xs text-zinc-500">
        Access via{" "}
        <span className="font-mono text-zinc-500">jiangban.eth.limo</span>
        {" "}Hosted on IPFS
      </p>

      <Link
        href="/for-agents"
        className="text-[10px] font-medium tracking-wide text-zinc-400 transition-colors hover:text-brand"
        aria-label="For Agents"
        title="For Agents / 面向智能体"
      >
        For Agents / 面向智能体
      </Link>
    </div>
  );
}
