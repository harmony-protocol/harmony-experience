"use client";

import { useState } from "react";

const items = [
  {
    q: "What is Harmony, exactly?",
    a: "A done-for-you service with its own platform. We build, run, and keep improving personalized AI assistants, workflows, and dashboards for your team. Instead of you wiring up DIY tools, we find your operational bottlenecks and solve them properly, so you save real time and attention.",
  },
  {
    q: "Who is Harmony for?",
    a: "B2B services firms doing six to eight figures: agencies, consultancies, and professional services teams where the founder is still deep in delivery. If manual work is slowing growth and you do not want to hire your way out of it, Harmony is for you.",
  },
  {
    q: "How fast will I receive my new automation requests?",
    a: "We try to deliver within 48 hours for simple requests. For new integrations and more complex workflows, it can take up to a week.",
  },
  {
    q: "How is Harmony giving unlimited access for a fixed price?",
    a: "We engineered the top workflows to run with high accuracy and low token use. We built our own caching, tool execution engine, and data processing to make Harmony faster, better, and cheaper than OpenClaw for major business use cases, setting a new state of the art on accuracy for some of them.",
  },
  {
    q: "What if I don't like the output Harmony produces?",
    a: "No worries. We keep fine tuning it to your needs until it actually solves your problem end to end.",
  },
  {
    q: "How is Harmony different from ChatGPT or OpenClaw?",
    a: "ChatGPT and OpenClaw are general purpose DIY tools. Harmony is an operations automation service, set up and managed by our team, built for usability and reliability. It is a business grade product.",
  },
  {
    q: "What happens if I already have some automations running?",
    a: "We will not touch them. If needed, we rebuild and test them first, then switch you over to our platform and integrated service.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We enforce org level data isolation at the database level and have multiple security checks in place. We also sign an NDA and a data protection agreement with every client.",
  },
  {
    q: "What happens to my systems if I cancel my subscription?",
    a: "Two options. Keep them running: everything we built stays live for a small maintenance fee covering API and platform costs, you just stop new builds and support. Or fully offboard: we hand over every system as markdown files you can rebuild elsewhere.",
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
                <svg
                  viewBox="0 0 14 14"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                >
                  <path d="M7 1v12M1 7h12" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <p className="max-w-xl pb-6 text-[17px] leading-8 text-[#4d4d4d]">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
