"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
    body: "We map your week and your workload, pinpoint the top 3 time leaks, and hand you a clear plan for what we automate first.",
    chips: ["Time-leak audit", "Action plan"],
  },
  {
    id: "solution-02",
    label: "First Week",
    title: "Build and deploy",
    body: "We build, test, and ship the core agents and workflows for your biggest bottlenecks.",
    chips: ["Core workflows", "Wired in"],
  },
  {
    id: "solution-03",
    label: "First Month",
    title: "Solve more problems",
    body: "We keep building: new systems for new problems. Each one takes another job off your plate.",
    chips: ["More systems", "More problems solved"],
  },
  {
    id: "solution-04",
    label: "Ongoing",
    title: "Improve and scale",
    body: "We keep finding bottlenecks and shipping automations as you grow, so the system gets better every week.",
    chips: ["New bottlenecks", "Always improving"],
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

function SpinnerDot() {
  return (
    <span
      className="af-spin h-4 w-4 shrink-0 rounded-full border-[1.5px]"
      style={{
        borderColor: "rgba(255,255,255,0.18)",
        borderTopColor: ACCENT,
        animationDuration: "0.9s",
      }}
    />
  );
}

function CheckDot() {
  return (
    <span
      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
      style={{ borderColor: "rgba(159,246,144,0.5)", color: ACCENT }}
    >
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
    </span>
  );
}

/* Chip with a slowly rotating accent sweep running around its border. */
function GlowBorderChip({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-flex overflow-hidden rounded-md p-px ${className}`}
    >
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <span
          className="af-spin block aspect-square w-[280px]"
          style={{ background: `conic-gradient(transparent 240deg, ${ACCENT})` }}
        />
      </span>
      <span
        className="relative rounded-[5px] border bg-black px-3 py-1.5 text-[13px] text-white/75"
        style={{ borderColor: "rgba(159,246,144,0.12)" }}
      >
        {children}
      </span>
    </span>
  );
}

function AuditVisual() {
  const leaks = [
    { task: "Inbox and follow-ups", hours: "9h", pct: 90 },
    { task: "Reports and updates", hours: "6h", pct: 60 },
    { task: "Scheduling and admin", hours: "4h", pct: 40 },
  ];
  const plan = [
    { step: "01", title: "Automate lead follow-up", when: "Week 1" },
    { step: "02", title: "Auto-draft client reports", when: "Week 2" },
    { step: "03", title: "Wire up invoice chasing", when: "Week 3" },
  ];
  return (
    <div className="flex h-full flex-col justify-center p-6 md:p-8">
      <div className="relative mx-auto w-full max-w-[400px] overflow-hidden rounded-[4px] border border-white/10 bg-[#121211] px-6 py-5 shadow-[0_30px_70px_-28px_rgba(0,0,0,0.9)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <Image
              src="/assets/logo-full-dark.png"
              alt="Harmony"
              width={633}
              height={161}
              className="h-4 w-auto"
            />
            <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-white/40">
              Audit report
            </span>
          </div>

          <p className="mt-3 text-[10px] text-white/45">
            Prepared for your team, 48 hours after kickoff
          </p>
          <p
            className="mt-0.5 text-[19px] text-white"
            style={{ fontFamily: "var(--font-schibsted)" }}
          >
            Where your 19 hours go
          </p>

          <div className="mt-3 flex flex-col gap-2">
            {leaks.map((l) => (
              <div key={l.task} className="flex items-center gap-2.5">
                <span className="w-[126px] shrink-0 truncate text-[10.5px] text-white/70">
                  {l.task}
                </span>
                <span className="h-1.5 flex-1 overflow-hidden bg-white/10">
                  <span
                    className="block h-full"
                    style={{ width: `${l.pct}%`, backgroundColor: ACCENT }}
                  />
                </span>
                <span className="w-6 shrink-0 text-right text-[10.5px] text-white/45">
                  {l.hours}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 border-t border-white/10 pt-3 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/40">
            The plan
          </p>
          <div className="mt-2 flex flex-col gap-1.5">
            {plan.map((p, i) => (
              <div key={p.step} className="flex items-center gap-2.5">
                <span
                  className="flex h-4 w-4 shrink-0 items-center justify-center text-[9px] font-semibold text-black"
                  style={{ backgroundColor: ACCENT }}
                >
                  {i + 1}
                </span>
                <span className="flex-1 truncate text-[10.5px] text-white/75">
                  {p.title}
                </span>
                <span className="text-[9.5px] text-white/40">{p.when}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-3">
            <Image
              src="/assets/founder-signature.avif"
              alt="Signature of Vishal Singh"
              width={512}
              height={217}
              className="h-7 w-auto mix-blend-screen"
            />
            <span className="text-[9.5px] text-white/45">
              Vishal Singh, Founder
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const AGENT_ROWS = [
  { name: "Agent 1", color: ACCENT },
  { name: "Agent 2", color: "#f69090" },
  { name: "Agent 3", color: "#90a8f6" },
];

const LINE_ACCENT = "rgba(159,246,144,0.55)";

function WorkflowVisual() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-6 md:p-8">
      <div className="w-full max-w-[340px] rounded-lg border border-white/10 bg-[#0a0a0a]">
        <div className="flex items-center justify-between px-4 py-2.5">
          <span className="text-[13px] font-medium text-white">Harmony</span>
          <span className="flex gap-0.5 text-white/30">
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5">
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/70">
            <svg
              viewBox="0 0 16 16"
              className="af-spin h-3.5 w-3.5 text-white/80"
              style={{
                animationDuration: "0.8s",
                animationTimingFunction: "steps(8)",
              }}
              aria-hidden
            >
              {Array.from({ length: 8 }, (_, i) => (
                <line
                  key={i}
                  x1="8"
                  y1="1.5"
                  x2="8"
                  y2="4.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  opacity={(i + 1) / 8}
                  transform={`rotate(${i * 45} 8 8)`}
                />
              ))}
            </svg>
            Building
          </span>
        </div>
      </div>

      <div className="relative h-6 w-full max-w-[340px]">
        <span
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
          style={{ backgroundColor: LINE_ACCENT }}
        />
        <span className="absolute left-[16.66%] top-0 h-full w-px -translate-x-1/2 bg-white/15" />
        <span className="absolute left-[83.33%] top-0 h-full w-px -translate-x-1/2 bg-white/15" />
      </div>

      <div className="grid w-full max-w-[340px] grid-cols-3 gap-2.5">
        {AGENT_ROWS.map((agent, cardIndex) => (
          <div
            key={agent.name}
            className="rounded-lg border border-white/[0.08] bg-[#0a0a0a] p-3"
          >
            <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-white">
              <span
                className="h-1.5 w-1.5"
                style={{ backgroundColor: agent.color }}
              />
              {agent.name}
            </span>
            <p className="mt-0.5 text-[10px] text-white/40">Working</p>
            <div className="mt-3 flex flex-col gap-1.5">
              {[100, 72, 48].map((w, i) => (
                <span
                  key={w}
                  className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]"
                  style={{ width: `${w}%` }}
                >
                  <span
                    className="af-build block h-full rounded-full"
                    style={{
                      backgroundColor: `${agent.color}99`,
                      animationDelay: `${-(cardIndex * 0.6 + (2 - i) * 0.9)}s`,
                    }}
                  />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PROBLEM_FEED = [
  { label: "Lead follow-up", done: true },
  { label: "Weekly client reports", done: true },
  { label: "Invoice chasing", done: true },
  { label: "Meeting prep notes", done: false },
  { label: "CRM data hygiene", done: false },
  { label: "Hiring pipeline", done: false },
];

function SolveVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-5 py-6 pl-10 pr-6 md:py-8 md:pl-16 md:pr-8">
      <div
        className="h-[190px] overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        }}
      >
        <div className="af-vmarquee flex flex-col gap-5 pb-5">
          {[...PROBLEM_FEED, ...PROBLEM_FEED].map((p, i) => {
            const delay = `${((i % PROBLEM_FEED.length) * (22 / PROBLEM_FEED.length) - 19.35).toFixed(2)}s`;
            return (
              <div
                key={`${p.label}-${i}`}
                aria-hidden={i >= PROBLEM_FEED.length}
                className="flex items-center gap-2.5"
              >
                <span className="relative h-4 w-4 shrink-0">
                  <span
                    className="af-done-out absolute inset-0 flex"
                    style={{ animationDelay: delay }}
                  >
                    <SpinnerDot />
                  </span>
                  <span
                    className="af-done-in absolute inset-0 flex"
                    style={{ animationDelay: delay }}
                  >
                    <CheckDot />
                  </span>
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-white/55">
                  {p.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <GlowBorderChip className="self-start">
        New systems every week
      </GlowBorderChip>
    </div>
  );
}

const IMPROVE_BARS = [6, 8, 10, 12, 14, 17, 20, 24, 28, 33, 39, 46, 54, 64, 75, 88, 100];

function ImproveVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-5 p-6 md:p-8">
      <div className="flex h-[150px] items-end justify-between">
        {IMPROVE_BARS.map((h, i) => (
          <span
            key={i}
            className="w-[5px] rounded-full"
            style={{
              height: `${h}%`,
              background:
                "linear-gradient(to bottom, #d9ffcc 0%, #9ff690 35%, rgba(159,246,144,0.05) 100%)",
            }}
          />
        ))}
      </div>
      <div className="flex items-end justify-between gap-3">
        <div>
          <p
            className="text-4xl text-white"
            style={{ fontFamily: "var(--font-schibsted)" }}
          >
            27h
          </p>
          <p className="mt-1 text-[17px] leading-8 text-white/55">
            saved every week by month one
          </p>
        </div>
      </div>
    </div>
  );
}

const visuals = [AuditVisual, WorkflowVisual, SolveVisual, ImproveVisual];

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
                className={`flex items-center gap-2.5 text-[17px] font-semibold uppercase tracking-[0.08em] transition-opacity duration-300 ${
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
      <div className="space-y-5">
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
                <div className="flex flex-col bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-6 md:p-8">
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
                  <p className="mt-4 max-w-sm text-[17px] leading-8 text-white/55">
                    {s.body}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 md:mt-auto md:pt-6">
                    {s.chips.map((chip) => (
                      <span
                        key={chip}
                        className="border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[15px] text-white/75"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative min-h-[380px] border-t border-white/10 bg-black/85 backdrop-blur-sm md:border-l md:border-t-0">
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
