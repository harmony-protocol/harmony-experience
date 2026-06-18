"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const CAL_LINK = "harmony-vishal/discovery";
const CAL_CONFIG = JSON.stringify({ layout: "month_view", theme: "dark" });
const ACCENT = "#9ff690";

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

/* Square, tactile stepper in the brand style. */
function Stepper({
  value,
  step,
  min = 0,
  prefix = "",
  suffix = "",
  onChange,
  label,
}: {
  value: number;
  step: number;
  min?: number;
  prefix?: string;
  suffix?: string;
  onChange: (v: number) => void;
  label: string;
}) {
  const Btn = ({ dir }: { dir: 1 | -1 }) => (
    <button
      type="button"
      aria-label={`${dir > 0 ? "Increase" : "Decrease"} ${label}`}
      onClick={() => onChange(Math.max(min, value + dir * step))}
      className="flex h-11 w-10 shrink-0 items-center justify-center text-black/45 transition hover:bg-[#9ff690]/20 hover:text-black md:w-11"
    >
      {dir > 0 ? <Plus className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
    </button>
  );
  return (
    <div className="flex w-full items-stretch border border-black/15 bg-white md:w-auto">
      <Btn dir={-1} />
      <span
        className="flex min-w-0 flex-1 items-center justify-center whitespace-nowrap border-x border-black/10 px-2 text-[18px] text-black md:min-w-[92px] md:flex-none md:px-3"
        style={{ fontFamily: "var(--font-schibsted)" }}
      >
        {prefix}
        {value.toLocaleString("en-US")}
        {suffix}
      </span>
      <Btn dir={1} />
    </div>
  );
}

/* One role: how many people, how many busywork hours each, what an hour costs. */
function Role({
  label,
  count,
  hours,
  hoursMax,
  rate,
  onCount,
  onHours,
  onRate,
}: {
  label: string;
  count: number;
  hours: number;
  hoursMax: number;
  rate: number;
  onCount: (v: number) => void;
  onHours: (v: number) => void;
  onRate: (v: number) => void;
}) {
  return (
    <div className="border-t border-black/10 pt-7 first:border-t-0 first:pt-0">
      <span
        className="text-[18px] text-black"
        style={{ fontFamily: "var(--font-schibsted)" }}
      >
        {label}
      </span>
      <div className="mt-4 grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center">
        <Stepper
          value={count}
          step={1}
          min={0}
          suffix={count === 1 ? " head" : " heads"}
          onChange={onCount}
          label={`${label} headcount`}
        />
        <Stepper
          value={rate}
          step={20}
          min={5}
          prefix="$"
          suffix="/hr"
          onChange={onRate}
          label={`${label} hourly value`}
        />
      </div>
      <div className="mt-5 flex items-center gap-5">
        <input
          type="range"
          min={0}
          max={hoursMax}
          value={hours}
          onChange={(e) => onHours(Number(e.target.value))}
          className="range-slider w-full cursor-pointer appearance-none"
          style={{
            background: `linear-gradient(to right, ${ACCENT} 0 ${
              (hours / hoursMax) * 100
            }%, rgba(0,0,0,0.1) ${(hours / hoursMax) * 100}% 100%)`,
          }}
          aria-label={`${label} busywork hours per week`}
        />
        <span
          className="w-[132px] shrink-0 text-right text-[18px] text-black"
          style={{ fontFamily: "var(--font-schibsted)" }}
        >
          {hours}
          <span className="ml-1.5 text-[17px] text-black/40">hrs/wk each</span>
        </span>
      </div>
    </div>
  );
}

export function ReclaimCalculator() {
  const [leadCount, setLeadCount] = useState(2);
  const [leadHours, setLeadHours] = useState(8);
  const [leadRate, setLeadRate] = useState(200);
  const [teamCount, setTeamCount] = useState(8);
  const [teamHours, setTeamHours] = useState(12);
  const [teamRate, setTeamRate] = useState(75);

  const leadCost = leadCount * leadHours * leadRate * 52;
  const teamCost = teamCount * teamHours * teamRate * 52;
  const total = leadCost + teamCost;

  return (
    <div className="mt-12 grid gap-px overflow-hidden border border-black/10 bg-black/10 lg:grid-cols-[1.05fr_1fr]">
      {/* Inputs */}
      <div className="flex flex-col gap-7 bg-[#fafafa] p-5 md:p-10">
        <Role
          label="You & leadership"
          count={leadCount}
          hours={leadHours}
          hoursMax={40}
          rate={leadRate}
          onCount={setLeadCount}
          onHours={setLeadHours}
          onRate={setLeadRate}
        />
        <Role
          label="Your team"
          count={teamCount}
          hours={teamHours}
          hoursMax={40}
          rate={teamRate}
          onCount={setTeamCount}
          onHours={setTeamHours}
          onRate={setTeamRate}
        />
      </div>

      {/* Result */}
      <div className="flex flex-col justify-center gap-7 bg-black p-5 md:p-10">
        <div>
          <div className="text-[13px] uppercase tracking-[0.08em] text-white/40">
            Busywork is costing you
          </div>
          <div
            className="mt-3 text-[60px] leading-[0.95] md:text-[76px]"
            style={{ fontFamily: "var(--font-schibsted)", color: ACCENT }}
          >
            {money(total)}
          </div>
          <div className="mt-2 text-[17px] text-white/55">
            every year in payroll, plus the growth and freedom
          </div>
        </div>

        <div className="space-y-3.5 border-t border-white/10 pt-6">
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-[17px] text-white/65">You &amp; leadership</span>
            <span className="text-[17px] text-white" style={{ fontFamily: "var(--font-schibsted)" }}>
              {money(leadCost)}
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-[17px] text-white/65">Your team</span>
            <span className="text-[17px] text-white" style={{ fontFamily: "var(--font-schibsted)" }}>
              {money(teamCost)}
            </span>
          </div>
        </div>

        <button
          type="button"
          data-cal-link={CAL_LINK}
          data-cal-config={CAL_CONFIG}
          data-loc="reclaim-calculator"
          className="inline-flex h-11 w-fit cursor-pointer items-center px-6 text-base font-medium text-black transition hover:brightness-95"
          style={{ backgroundColor: ACCENT }}
        >
          Book a free call
        </button>
      </div>
    </div>
  );
}
