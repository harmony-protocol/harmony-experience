"use client";

import { useState } from "react";

const ACCENT = "#9ff690";

const steps = [
  {
    n: "Week 1",
    title: "The audit",
    body: "We map your week and your numbers to find the time leaks and money leaks: the bottlenecks quietly draining hours and revenue from the business.",
  },
  {
    n: "Week 2",
    title: "Fix and deploy",
    body: "We build the agents, workflows, and dashboards that fix your top bottlenecks, test them on real scenarios, and ship them live inside your stack.",
  },
  {
    n: "Ongoing",
    title: "Keep improving",
    body: "We watch the dashboards with you, keep tuning the system as your business changes, and add new automations as you grow. You never manage it yourself.",
  },
];

function GlowVisual() {
  return (
    <div className="relative h-full overflow-hidden rounded-xl bg-black">
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
    <div className="flex h-full flex-col rounded-xl bg-black p-6 md:p-8">
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
    <div className="flex h-full flex-col gap-3 rounded-xl bg-black p-6 md:p-8">
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

export function Process() {
  const [active, setActive] = useState(0);
  const Visual = visuals[active];

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <div key={step.n} className="border-b border-black/10 first:border-t">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span
                  className={`text-xl transition ${isActive ? "text-black" : "text-black/40 hover:text-black/70"}`}
                  style={{ fontFamily: "var(--font-schibsted)" }}
                >
                  {step.title}
                </span>
                <span className="text-[13px] font-medium uppercase tracking-[0.04em] text-black/35">
                  {step.n}
                </span>
              </button>
              {isActive && (
                <p className="max-w-md pb-6 text-[15px] leading-7 text-[#4d4d4d]">
                  {step.body}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div className="min-h-[420px]">
        <Visual />
      </div>
    </div>
  );
}
