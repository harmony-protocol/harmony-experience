import { AgentCard } from "./_components/agent-card";
import agents from "./_data/agents.json";

export default function AgentsPage() {
  return (
    <div
      className="mx-auto"
      style={{ maxWidth: 1224, width: "97%", padding: "112px 5px 96px" }}
    >
      <h1
        className="text-sm tracking-[0.15em] uppercase mb-10 text-zinc-500 font-normal"
        style={{ fontFamily: "var(--font-jetbrains)", fontSize: 14 }}
      >
        Meet Your Agent Friends
      </h1>

      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
        {/* Get Your Own Agent CTA */}
        <a
          href="mailto:vishal@getharmony.ai?subject=Request%20for%20custom%20agent"
          className="flex min-h-[200px] flex-col items-center justify-center rounded-none border border-dashed border-zinc-700 px-8 pt-7 pb-8 text-zinc-400 transition hover:border-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/40"
        >
          <svg
            className="h-6 w-6 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="text-lg font-normal">Request an Agent</span>
        </a>
      </div>
    </div>
  );
}
