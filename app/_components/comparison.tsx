"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  AppWindow,
  Bot,
  Building2,
  Check,
  Gauge,
  Laptop,
  Plug,
  Target,
  Timer,
  UserRound,
  Wallet,
  X,
} from "lucide-react";

const ACCENT = "#9ff690";
const CAL_LINK = "harmony-vishal/discovery";
const CAL_CONFIG = JSON.stringify({ layout: "month_view", theme: "dark" });

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

type Cell = boolean | string;

const competitors = [
  { label: "SaaS Tool", icon: AppWindow },
  { label: "AI Transformation Hire", icon: UserRound },
  { label: "Agency", icon: Building2 },
  { label: "Freelancer / VA", icon: Laptop },
];

/* cells[0] is Harmony, cells[1..4] follow the competitors order above */
const rows: { icon: React.ReactNode; label: string; cells: Cell[] }[] = [
  {
    icon: <Bot className="h-4 w-4" strokeWidth={1.6} />,
    label: "AI systems built for you",
    cells: [true, false, false, true, false],
  },
  {
    icon: <Plug className="h-4 w-4" strokeWidth={1.6} />,
    label: "Built into your tools",
    cells: [true, true, true, true, "Limited"],
  },
  {
    icon: <Gauge className="h-4 w-4" strokeWidth={1.6} />,
    label: "Fully managed for you",
    cells: [true, false, false, true, "Limited"],
  },
  {
    icon: <Target className="h-4 w-4" strokeWidth={1.6} />,
    label: "Strategy and execution",
    cells: [true, false, "Depends", true, "Execution only"],
  },
  {
    icon: <Timer className="h-4 w-4" strokeWidth={1.6} />,
    label: "Live in ~2 weeks",
    cells: [true, "Setup varies", "Ramp-up", false, "Onboarding"],
  },
  {
    icon: <Wallet className="h-4 w-4" strokeWidth={1.6} />,
    label: "Budget-friendly",
    cells: [
      true,
      "Per seat + API costs",
      "$15k/mo",
      "$30k + retainer",
      "$4k/mo/hire",
    ],
  },
];

const TOTAL = rows.length;
const FOOTER_ROW = TOTAL + 2;

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

function reveal(delay: number) {
  return {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.4, delay, ease: EASE },
  };
}

function HarmonyCheck() {
  return (
    <span
      className="inline-flex h-5 w-5 items-center justify-center rounded-full"
      style={{
        backgroundColor: ACCENT,
        boxShadow: "0 0 12px rgba(159,246,144,0.3)",
      }}
    >
      <Check className="h-3 w-3 text-black" strokeWidth={3} />
    </span>
  );
}

function CompetitorCell({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
        <Check className="h-3 w-3" strokeWidth={2.6} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/[0.05] text-black/25">
        <X className="h-3 w-3" strokeWidth={2.4} />
      </span>
    );
  }
  return (
    <span className="whitespace-nowrap border border-black/10 bg-white px-2.5 py-1 text-[13px] leading-none text-black/50">
      {value}
    </span>
  );
}

export function Comparison() {
  return (
    <div className="mt-12 mb-10 overflow-x-auto overflow-y-hidden [scrollbar-width:thin] md:mb-16">
      <div className="min-w-[920px] py-3">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "minmax(210px, 250px) 1.12fr repeat(4, 1fr)",
            gridTemplateRows: `auto repeat(${TOTAL}, auto) auto`,
          }}
        >
          {/* Elevated Harmony column card, sits behind its cells */}
          <motion.div
            style={{ gridColumn: 2, gridRow: "1 / -1" }}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative z-[5] -my-2 border border-[#9ff690]/40 bg-black"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{ backgroundImage: NOISE }}
            />
            <span
              aria-hidden
              className="absolute -inset-x-px -top-[4px] h-[3px]"
              style={{ backgroundColor: ACCENT }}
            />
            <span
              aria-hidden
              className="absolute -inset-x-px -bottom-[4px] h-[3px]"
              style={{ backgroundColor: ACCENT }}
            />
          </motion.div>

          {/* Header row */}
          <div
            style={{ gridColumn: 1, gridRow: 1 }}
            className="sticky left-0 z-20 -mt-3 bg-[#fafafa]"
          />
          <motion.div
            {...reveal(0)}
            style={{ gridColumn: 2, gridRow: 1 }}
            className="z-10 flex items-end justify-center px-4 pb-6 pt-2"
          >
            <Image
              src="/assets/logo-full-dark.png"
              alt="Harmony"
              width={633}
              height={161}
              className="h-5 w-auto md:h-7"
            />
          </motion.div>
          {competitors.map((col, ci) => (
            <motion.div
              key={col.label}
              {...reveal(0)}
              style={{ gridColumn: ci + 3, gridRow: 1 }}
              className="flex items-end justify-center px-3 pb-5"
            >
              <span className="flex flex-col items-center gap-2">
                <col.icon
                  className="h-[18px] w-[18px] text-black/30"
                  strokeWidth={1.6}
                />
                <span className="whitespace-nowrap text-[15px] font-medium text-black/45">
                  {col.label}
                </span>
              </span>
            </motion.div>
          ))}

          {/* Data rows */}
          {rows.map((row, ri) => {
            const gridRow = ri + 2;
            const delay = 0.04 + ri * 0.03;
            return (
              <div key={row.label} className="group/row contents">
                <motion.div
                  {...reveal(delay)}
                  style={{ gridColumn: 1, gridRow }}
                  className="sticky left-0 z-20 flex items-center gap-3 border-t border-black/[0.07] bg-[#fafafa] py-4 pr-4 transition-colors duration-200 group-hover/row:bg-[#f3f3f0]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-black/[0.08] bg-white text-black/40">
                    {row.icon}
                  </span>
                  <span className="whitespace-nowrap text-[16px] font-medium text-black">
                    {row.label}
                  </span>
                </motion.div>

                <motion.div
                  {...reveal(delay)}
                  style={{ gridColumn: 2, gridRow }}
                  className="z-10 flex items-center justify-center border-t border-white/10 px-4 py-4 transition-colors duration-200 group-hover/row:bg-white/[0.04]"
                >
                  <HarmonyCheck />
                </motion.div>

                {row.cells.slice(1).map((cell, ci) => (
                  <motion.div
                    key={ci}
                    {...reveal(delay)}
                    style={{ gridColumn: ci + 3, gridRow }}
                    className="flex items-center justify-center border-t border-black/[0.07] px-3 py-4 transition-colors duration-200 group-hover/row:bg-black/[0.02]"
                  >
                    <CompetitorCell value={cell} />
                  </motion.div>
                ))}
              </div>
            );
          })}

          {/* Footer row: CTA inside the Harmony card */}
          <div
            style={{ gridColumn: 1, gridRow: FOOTER_ROW }}
            className="sticky left-0 z-20 -mb-3 bg-[#fafafa]"
          />
          <motion.div
            {...reveal(0.4)}
            style={{ gridColumn: 2, gridRow: FOOTER_ROW }}
            className="z-10 flex flex-col items-center border-t border-white/10 px-4 pb-3 pt-5"
          >
            <button
              type="button"
              data-cal-link={CAL_LINK}
              data-cal-config={CAL_CONFIG}
              data-loc="comparison"
              className="inline-flex h-9 cursor-pointer items-center whitespace-nowrap px-4 text-[15px] font-medium text-black transition hover:brightness-95"
              style={{ backgroundColor: ACCENT }}
            >
              Book a Call
            </button>
          </motion.div>
          {competitors.map((col, ci) => (
            <div
              key={col.label}
              style={{ gridColumn: ci + 3, gridRow: FOOTER_ROW }}
              className="border-t border-black/[0.07]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
