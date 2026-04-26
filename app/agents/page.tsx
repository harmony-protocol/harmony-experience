import { AgentCard } from "./_components/agent-card";
import agents from "./_data/agents.json";

export default function AgentsPage() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#141416_0%,#070708_44%,#020202_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(244,244,245,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(244,244,245,0.05)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.18] [mask-image:linear-gradient(to_bottom,black_0%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[linear-gradient(to_bottom,rgba(244,244,245,0.055),transparent)]" />

      <div
        className="mx-auto"
        style={{ maxWidth: 1224, width: "97%", padding: "112px 5px 96px" }}
      >
        <div className="relative mb-10 pb-6">
          <p
            className="relative z-10 pb-1 font-['New_York',Georgia,ui-serif,serif] text-[34px] font-medium leading-[1.12] tracking-[-0.035em] drop-shadow-[0_1px_14px_rgba(244,244,245,0.06)]"
            style={{
              backgroundImage:
                "linear-gradient(115deg,#fafaf9 0%,#d6d3d1 34%,#a1a1aa 58%,#e7e5e4 82%,#71717a 100%)",
              backgroundSize: "160% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Harmony Agents
          </p>
          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-[linear-gradient(90deg,#fafaf9_0%,#d6d3d1_12%,#71717a_34%,#3f3f46_68%,#27272a_100%)] opacity-25" />
        </div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
          {/* Get Your Own Agent CTA */}
          <a
            href="mailto:vishal@getharmony.ai?subject=Request%20for%20custom%20agent"
            className="group relative flex min-h-[140px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-zinc-800/80 bg-black/35 px-6 pb-5 pt-4 text-zinc-400 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-black/45 hover:text-zinc-200 hover:shadow-lg hover:shadow-black/10"
          >
            <div className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-white/[0.045] opacity-60 blur-2xl transition-opacity group-hover:opacity-90" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200/12 to-transparent" />
            <svg
              className="relative mb-2.5 h-5 w-5"
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
            <span className="relative text-base font-medium">Request an Agent</span>
          </a>
        </div>
      </div>
    </section>
  );
}
