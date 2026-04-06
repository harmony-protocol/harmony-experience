import Image from "next/image";

interface Agent {
  id: string;
  title: string;
  name: string;
  description: string;
  mascot: string;
  comingSoon?: boolean;
}

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="flex min-h-[200px] flex-col rounded-none border border-zinc-800 bg-zinc-900/80 px-8 pt-7 pb-8">
      {/* Mascot */}
      <Image
        src={agent.mascot}
        alt={agent.name}
        width={56}
        height={56}
        className="mb-4 h-14 w-14 object-contain"
      />

      {/* Content */}
      <h3 className="text-2xl font-normal text-zinc-100">{agent.title}</h3>
      <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        {agent.name}
      </p>
      <p className="mt-2.5 text-base leading-relaxed text-zinc-400">
        {agent.description}
      </p>
    </div>
  );
}
