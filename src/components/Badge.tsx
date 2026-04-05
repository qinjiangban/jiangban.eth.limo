export default function Badge() {
  return (
    <div className="mt-12 flex flex-col items-center gap-2">
      <div className="px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-medium flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
        Hosted on IPFS
      </div>
      <p className="text-xs text-zinc-500">
        Access via <span className="font-mono text-zinc-500 dark:text-zinc-500">jiangban.eth.limo</span>
      </p>
    </div>
  );
}
