"use client";

import { useState } from "react";

const items = [
  {
    q: "What exactly do you build for us?",
    a: "Personalized AI agents, workflows, and dashboards wired into your tools. They handle the followups, reporting, scheduling, and admin that currently eat your week, in the background, every day.",
  },
  {
    q: "Will it work with the tools we already use?",
    a: "Yes. Email, Slack, calendars, CRMs, ticketing, Notion, Airtable, spreadsheets, and most tools with an API. We build around your existing stack, so nothing has to migrate.",
  },
  {
    q: "How is this different from hiring a VA?",
    a: "A VA needs hiring, training, and management, and can walk out the door with the process in their head. Your Harmony system works around the clock, never forgets a step, and costs less than a single hire.",
  },
  {
    q: "Do we need any technical skills?",
    a: "None. We audit, build, deploy, and maintain everything for you. You just tell us what is eating your week, and you talk to your system in plain English.",
  },
  {
    q: "How long until we are live?",
    a: "About two weeks, including the audit, the build, and wiring into your tools. Then we keep tuning the system with you as your business changes.",
  },
  {
    q: "How do we know it is actually working?",
    a: "Every system ships with a live dashboard tracking hours saved, lead response times, and tasks completed. We baseline these during the audit, so progress is measurable from day one.",
  },
  {
    q: "What does it cost?",
    a: "One simple monthly plan that covers your whole team, for less than the cost of a single hire. Pricing can vary by use case, so book a call and we will scope it together.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-black/10 first:border-t">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[17px] font-medium text-black">
                {item.q}
              </span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center text-black/50 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
              >
                <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
                  <path d="M7 1v12M1 7h12" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <p className="max-w-xl pb-6 text-[15px] leading-7 text-[#4d4d4d]">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
