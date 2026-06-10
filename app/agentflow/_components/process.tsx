"use client";

import { useState } from "react";

const ACCENT = "#9ff690";

const steps = [
  {
    n: "Week 1",
    title: "Auditing",
    body: "We map your week and your numbers to quickly surface the top 3 pain points: the bottlenecks quietly draining the most hours and revenue, so we know exactly where to start.",
  },
  {
    n: "Week 2",
    title: "Implement and deploy",
    body: "We build, test, and ship the agents and workflows that fix those top 3 pain points, live inside your existing stack, so the work starts running without you.",
  },
  {
    n: "Ongoing",
    title: "Keep improving",
    body: "We watch the dashboards with you, tune the system as your business changes, and roll out new automations as you grow. You never have to manage it yourself.",
  },
];

function GlowVisual() {
  return (
    <div className="relative h-full min-h-[420px] overflow-hidden bg-black">
      <div
        aria-hidden
        className="absolute -right-20 top-1/4 h-[360px] w-[360px] rounded-full blur-[90px]"
        style={{ backgroundColor: "rgba(159,246,144,0.35)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 left-1/4 h-[260px] w-[260px] rounded-full blur-[80px]"
        style={{ backgroundColor: "rgba(61,142,47,0.4)" }}
      />
      <span className="absolute bottom-6 left-6 flex items-center gap-2 rounded-md border border-white/15 bg-black/60 px-3 py-2 text-[12px] text-white/80 backdrop-blur">
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        Finding your time leaks
      </span>
    </div>
  );
}

function CanvasVisual() {
  return (
    <div className="flex h-full min-h-[420px] flex-col bg-black p-6 md:p-8">
      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/40">
        Workflow Canvas
      </p>
      <div className="flex flex-1 flex-col items-center justify-center gap-0">
        {["New lead arrives", "AI Agent", "Reply sent in 60s"].map((node, i) => (
          <div key={node} className="flex flex-col items-center">
            {i > 0 && <span className="h-5 w-px bg-white/20" />}
            <span
              className={`w-44 rounded-lg border px-4 py-3 text-center text-[13px] ${
                i === 1
                  ? "border-transparent font-medium text-black"
                  : "border-white/15 bg-[#0d0d0d] text-white/75"
              }`}
              style={i === 1 ? { backgroundColor: ACCENT } : undefined}
            >
              {node}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="flex h-full min-h-[420px] flex-col gap-3 bg-black p-6 md:p-8">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/40">
          Live Dashboard
        </p>
        <span className="flex items-center gap-1.5 text-[11px] text-white/70">
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full"
            style={{ backgroundColor: ACCENT }}
          />
          Live
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-white/10 bg-[#0d0d0d] p-4">
          <p className="text-[10px] uppercase tracking-[0.08em] text-white/40">
            Tasks Today
          </p>
          <p className="mt-1.5 text-2xl text-white">128</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-[#0d0d0d] p-4">
          <p className="text-[10px] uppercase tracking-[0.08em] text-white/40">
            Success Rate
          </p>
          <p className="mt-1.5 text-2xl text-white">99.2%</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col rounded-lg border border-white/10 bg-[#0d0d0d] p-4">
        <p className="text-[10px] uppercase tracking-[0.08em] text-white/40">
          Activity
        </p>
        <div className="mt-3 flex flex-1 items-end gap-1.5">
          {[40, 65, 30, 80, 55, 90, 45, 70, 60, 85, 50, 75, 35, 95].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                backgroundColor: i % 3 === 0 ? ACCENT : "rgba(255,255,255,0.14)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const visuals = [GlowVisual, CanvasVisual, DashboardVisual];

function CornerTicks() {
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
          aria-hidden
          className={`pointer-events-none absolute z-10 h-1.5 w-1.5 ${p}`}
          style={{ backgroundColor: ACCENT }}
        />
      ))}
    </>
  );
}

export function Process() {
  const [active, setActive] = useState(0);
  const Visual = visuals[active];

  return (
    <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
      {/* Timeline */}
      <div>
        {steps.map((step, i) => {
          const isActive = i === active;
          const isDone = i < active;
          const isLast = i === steps.length - 1;
          return (
            <div key={step.n} className="relative flex gap-5">
              {/* Rail node */}
              <div className="relative z-10">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`${step.n}: ${step.title}`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center text-[13px] font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: isActive
                      ? ACCENT
                      : isDone
                        ? "rgba(159,246,144,0.18)"
                        : "transparent",
                    border: isActive
                      ? `1px solid ${ACCENT}`
                      : isDone
                        ? "1px solid rgba(159,246,144,0.55)"
                        : "1px solid rgba(0,0,0,0.15)",
                    color: isActive
                      ? "#000"
                      : isDone
                        ? "#2f7a22"
                        : "rgba(0,0,0,0.4)",
                    boxShadow: isActive
                      ? "0 0 0 4px rgba(159,246,144,0.18)"
                      : "none",
                  }}
                >
                  {isDone ? (
                    <svg
                      viewBox="0 0 12 12"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 6.5L4.5 9 10 3" />
                    </svg>
                  ) : (
                    String(i + 1).padStart(2, "0")
                  )}
                </button>
              </div>

              {/* Connector */}
              {!isLast && (
                <span
                  aria-hidden
                  className="absolute top-10 z-0 w-px transition-colors duration-300"
                  style={{
                    left: 20,
                    bottom: 0,
                    transform: "translateX(-50%)",
                    backgroundColor: isDone
                      ? "rgba(159,246,144,0.55)"
                      : "rgba(0,0,0,0.12)",
                  }}
                />
              )}

              {/* Content */}
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`flex-1 text-left transition-all duration-300 ${
                  isLast ? "pb-0" : "pb-10"
                }`}
              >
                <span
                  className="inline-flex items-center gap-1.5 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]"
                  style={{
                    backgroundColor: isActive
                      ? "rgba(159,246,144,0.16)"
                      : "rgba(0,0,0,0.05)",
                    border: isActive
                      ? "1px solid rgba(159,246,144,0.5)"
                      : "1px solid rgba(0,0,0,0.08)",
                    color: isActive ? "#2f7a22" : "rgba(0,0,0,0.45)",
                  }}
                >
                  <span
                    className="h-1.5 w-1.5"
                    style={{
                      backgroundColor: isActive ? ACCENT : "rgba(0,0,0,0.3)",
                    }}
                  />
                  {step.n}
                </span>
                <h3
                  className={`mt-3 text-[22px] leading-tight transition-colors duration-300 md:text-[26px] ${
                    isActive ? "text-black" : "text-black/45"
                  }`}
                  style={{ fontFamily: "var(--font-schibsted)" }}
                >
                  {step.title}
                </h3>
                <div
                  className="grid transition-all duration-300"
                  style={{
                    gridTemplateRows: isActive ? "1fr" : "0fr",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <p className="overflow-hidden">
                    <span className="mt-3 block max-w-md text-[15px] leading-7 text-[#4d4d4d]">
                      {step.body}
                    </span>
                  </p>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Visual */}
      <div className="relative lg:sticky lg:top-28 lg:self-start">
        <div className="relative min-h-[420px] border border-black/10 bg-black">
          <CornerTicks />
          <Visual />
        </div>
      </div>
    </div>
  );
}
