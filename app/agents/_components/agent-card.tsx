import Image from "next/image";
import Link from "next/link";

interface Agent {
  id: string;
  slug: string;
  title: string;
  name: string;
  description: string;
  mascot: string;
}

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link
      href={`/agents/${agent.slug}`}
      className="group relative flex min-h-[140px] w-full items-start gap-4 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/70 pb-6 pl-4 pr-6 pt-5 text-left shadow-sm transition duration-150 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/90 hover:shadow-lg hover:shadow-black/10"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-zinc-500/10 opacity-60 blur-2xl transition-opacity group-hover:opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200/12 to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-white/0 transition group-hover:ring-1 group-hover:ring-white/10" />

      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
        <Image
          src={agent.mascot}
          alt={agent.name}
          width={48}
          height={48}
          className="h-12 w-12 object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.28)]"
        />
      </div>

      <div className="relative min-w-0 flex-1 pr-3 pt-1.5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              {agent.name}
            </p>
            <h3 className="mt-1 truncate text-lg font-medium leading-tight tracking-[-0.02em] text-zinc-100">
              {agent.title}
            </h3>
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">
          {agent.description}
        </p>
      </div>
    </Link>
  );
}
