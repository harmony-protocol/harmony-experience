"use client";

import { useEffect, useState } from "react";

const ACCENT = "#9ff690";

type Solution = {
  id: string;
  label: string;
  title: string;
  body: string;
  chips: string[];
};

const solutions: Solution[] = [
  {
    id: "solution-01",
    label: "First 48 Hours",
    title: "Audit and plan",
    body: "We map your week and your numbers, pinpoint the top 3 time leaks, and hand you a clear plan for what we will automate first.",
    chips: ["Time-leak audit", "Top 3 priorities", "Clear action plan"],
  },
  {
    id: "solution-02",
    label: "First Week",
    title: "Build and deploy",
    body: "We build, test, and ship the core agents and workflows for your biggest bottlenecks, wired into the tools you already use and running live.",
    chips: ["Core workflows", "Wired into your tools", "Live in production"],
  },
  {
    id: "solution-03",
    label: "First Month",
    title: "Solve more problems",
    body: "With the core systems live, we keep building: new systems for new problems, across more of your stack and teams. Each one takes another job off your plate.",
    chips: ["More systems built", "More problems solved", "Across your stack"],
  },
  {
    id: "solution-04",
    label: "Ongoing",
    title: "Improve and scale",
    body: "We keep hunting for new bottlenecks, tune what is live, and roll out fresh automations as you grow. The system gets better every week, and you never manage it yourself.",
    chips: ["Find new bottlenecks", "Continuous improvement", "Fully managed"],
  },
];

function CornerDots() {
  const pos = [
    "-left-[3px] -top-[3px]",
    "-right-[3px] -top-[3px]",
    "-left-[3px] -bottom-[3px]",
    "-right-[3px] -bottom-[3px]",
  ];
  return (
    <>
      {pos.map((p) => (
        <span
          key={p}
          className={`absolute ${p} z-10 h-1.5 w-1.5 bg-white`}
        />
      ))}
    </>
  );
}

function MockLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/40">
      {children}
    </p>
  );
}

function AgentsVisual() {
  const prompts = [
    "Follow up with new leads",
    "Draft the weekly client report",
    "Chase this month's invoices",
    "Prep notes for tomorrow's calls",
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-5 p-6 md:p-8">
      <MockLabel>Automate tasks with AI agents</MockLabel>
      <div
        className="rounded-lg border bg-black/60 p-3.5"
        style={{ borderColor: "rgba(159,246,144,0.45)" }}
      >
        <div className="flex items-center gap-2.5">
          <svg
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 text-white/45"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="7" cy="7" r="5" />
            <path d="M14 14l-3-3" />
          </svg>
          <p className="flex-1 text-[13px] text-white/80">
            Search what you want the agents to do
            <span className="ml-0.5 animate-pulse" style={{ color: ACCENT }}>
              |
            </span>
          </p>
        </div>
        <span
          className="mt-3 inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] font-medium text-black"
          style={{ backgroundColor: ACCENT }}
        >
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="currentColor">
            <path d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12l-1.4-4.6L0 6l4.6-1.4L6 0z" />
          </svg>
          Run AI Agents
        </span>
      </div>
      <ul className="space-y-2.5">
        {prompts.map((p, i) => (
          <li key={p} className="flex items-center gap-2.5">
            <span
              className="flex h-4 w-4 items-center justify-center rounded-full border text-[#9ff690]"
              style={{
                borderColor:
                  i < 2 ? "rgba(159,246,144,0.5)" : "rgba(255,255,255,0.18)",
              }}
            >
              {i < 2 ? (
                <svg
                  viewBox="0 0 12 12"
                  className="h-2 w-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 6.5L4.5 9 10 3" />
                </svg>
              ) : null}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-white/55">
              {p}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const AGENT_ROWS = [
  { name: "Agent 1", color: ACCENT, role: "Drafting outbound" },
  { name: "Agent 2", color: "#f69090", role: "Qualifying leads" },
  { name: "Agent 3", color: "#90a8f6", role: "Updating CRM" },
];

function WorkflowVisual() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 md:p-8">
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg"
        style={{ backgroundColor: ACCENT }}
      >
        <svg viewBox="0 0 16 16" className="h-4 w-4 text-black" fill="currentColor">
          <path d="M8 0l1.8 6.2L16 8l-6.2 1.8L8 16l-1.8-6.2L0 8l6.2-1.8L8 0z" />
        </svg>
      </span>
      <span className="h-3 w-px bg-white/15" />
      <div className="w-full max-w-[320px] rounded-lg border border-white/10 bg-[#0a0a0a] px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-medium text-white">Harmony</span>
          <span className="flex gap-0.5 text-white/30">
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/55">
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ backgroundColor: ACCENT }}
            />
            Processing
          </span>
          <span className="text-[10px] text-white/35">Run for 10 minutes</span>
        </div>
      </div>
      <span className="h-3 w-px bg-white/15" />
      <div className="flex w-full max-w-[320px] flex-col gap-2">
        {AGENT_ROWS.map((agent) => (
          <div
            key={agent.name}
            className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-[#0a0a0a] px-3 py-2"
          >
            <span className="flex items-center gap-2 text-[12px] font-medium text-white">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: agent.color }}
              />
              {agent.name}
            </span>
            <span className="text-[10px] text-white/35">{agent.role}</span>
            <span
              className="text-[11px] font-medium"
              style={{
                background: `linear-gradient(90deg, rgba(255,255,255,0.35), ${agent.color}, rgba(255,255,255,0.35))`,
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "af-shimmer 2.2s linear infinite",
              }}
            >
              Working
            </span>
          </div>
        ))}
      </div>
      <span
        className="mt-1 rounded-md border px-3 py-1.5 text-[11px] italic text-white/60"
        style={{
          borderColor: "rgba(159,246,144,0.25)",
          backgroundColor: "rgba(159,246,144,0.06)",
        }}
      >
        Thought for 10 minutes...
      </span>
    </div>
  );
}

const CHART_BARS = [8, 10, 9, 13, 12, 16, 15, 20, 19, 25, 24, 31, 30, 39, 38, 49, 48, 62, 60, 78, 76, 96];

function StatCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0a0a0a] p-3.5">
      <MockLabel>{label}</MockLabel>
      <div className="mt-2 flex items-baseline justify-between gap-2">
        <span
          className="text-2xl text-white"
          style={{ fontFamily: "var(--font-schibsted)" }}
        >
          {value}
        </span>
        <span
          className="inline-flex items-center gap-0.5 text-[11px] font-medium"
          style={{ color: ACCENT }}
        >
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="currentColor">
            <path d="M6 2l4 5H8v3H4V7H2l4-5z" />
          </svg>
          {delta}
        </span>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="flex h-full flex-col gap-4 p-6 md:p-8">
      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Avg Response Time" value="1.4s" delta="+12.5%" />
        <StatCard label="AI Resolution Rate" value="78.2%" delta="+3.1%" />
      </div>
      <div className="flex flex-1 items-end gap-[5px] pt-2">
        {CHART_BARS.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-[2px]"
            style={{
              height: `${h}%`,
              backgroundColor: ACCENT,
              opacity: 0.35 + (i / CHART_BARS.length) * 0.65,
            }}
          />
        ))}
      </div>
      <div className="flex items-end justify-between gap-3">
        <p
          className="text-4xl text-white md:text-5xl"
          style={{ fontFamily: "var(--font-schibsted)" }}
        >
          94%
        </p>
        <p className="max-w-[180px] text-right text-[12px] leading-5 text-white/45">
          Less of your week spent on manual admin
        </p>
      </div>
    </div>
  );
}

function OptimizeVisual() {
  const weeks = [
    { label: "Week 1", val: "12 hrs saved" },
    { label: "Week 2", val: "19 hrs saved" },
    { label: "Week 4", val: "27 hrs saved" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-5 p-6 md:p-8">
      <MockLabel>Improving every week</MockLabel>
      <div className="flex flex-col gap-2.5">
        {weeks.map((w, i) => (
          <div
            key={w.label}
            className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-[#0a0a0a] px-4 py-3"
          >
            <span className="flex items-center gap-2.5 text-[12px] font-medium text-white">
              <span
                className="h-1.5 w-1.5"
                style={{ backgroundColor: ACCENT, opacity: 0.4 + i * 0.3 }}
              />
              {w.label}
            </span>
            <span className="text-[12px] text-white/70">{w.val}</span>
          </div>
        ))}
      </div>
      <span
        className="inline-flex items-center gap-2 self-start rounded-md border px-3 py-1.5 text-[11px] text-white/65"
        style={{
          borderColor: "rgba(159,246,144,0.25)",
          backgroundColor: "rgba(159,246,144,0.06)",
        }}
      >
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        Continuously optimized
      </span>
    </div>
  );
}

const visuals = [AgentsVisual, WorkflowVisual, AnalyticsVisual, OptimizeVisual];

export function Solutions() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = solutions.findIndex((s) => s.id === entry.target.id);
            if (i >= 0) setActive(i);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    for (const s of solutions) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[230px_1fr] lg:gap-16">
      <style>{`
        @keyframes af-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {/* Scroll-spy sidebar */}
      <div className="sticky top-24 hidden flex-col gap-7 self-start lg:flex">
        {solutions.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() =>
                document
                  .getElementById(s.id)
                  ?.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              className="group flex w-full flex-col gap-3.5 text-left"
            >
              <span
                className={`flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] transition-opacity duration-300 ${
                  isActive
                    ? "text-white opacity-100"
                    : "text-white opacity-30 group-hover:opacity-60"
                }`}
              >
                <span
                  className="h-1.5 w-1.5 transition-opacity duration-300"
                  style={{
                    backgroundColor: ACCENT,
                    boxShadow: isActive
                      ? "0 0 12px rgba(159,246,144,0.7)"
                      : "none",
                  }}
                />
                {s.label}
              </span>
              <span className="h-[2px] w-full overflow-hidden bg-white/10">
                <span
                  className="block h-full origin-left transition-transform duration-500 ease-out"
                  style={{
                    backgroundColor: ACCENT,
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </span>
            </button>
          );
        })}
      </div>

      {/* Stacked solution cards */}
      <div className="space-y-10">
        {solutions.map((s, i) => {
          const Visual = visuals[i];
          return (
            <div
              key={s.id}
              id={s.id}
              className="relative scroll-mt-28 border border-white/10"
            >
              <CornerDots />
              <div className="grid md:grid-cols-2">
                <div className="flex flex-col bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-7 md:p-9">
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 border border-[#9ff690] bg-[rgba(162,249,147,0.10)] px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] text-white">
                    <span
                      className="h-1.5 w-1.5"
                      style={{ backgroundColor: ACCENT }}
                    />
                    {s.label}
                  </span>
                  <h3
                    className="text-2xl text-white md:text-[30px] md:leading-[1.2]"
                    style={{ fontFamily: "var(--font-schibsted)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-[15px] leading-7 text-white/55">
                    {s.body}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2 md:mt-auto md:pt-10">
                    {s.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[12.5px] text-white/75"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative min-h-[360px] border-t border-white/10 bg-white/[0.04] backdrop-blur-md md:border-l md:border-t-0">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-32 -top-24 h-[280px] w-[420px] rounded-full blur-[100px]"
                    style={{ backgroundColor: "rgba(159,246,144,0.06)" }}
                  />
                  <div className="relative h-full">
                    <Visual />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
