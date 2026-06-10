"use client";

import { useState } from "react";

const items = [
  {
    q: "What is Harmony, exactly?",
    a: "Harmony is a done-for-you service that comes with its own platform. We take on your requests and build, run, and keep improving personalized AI assistants, workflows, and dashboards for your team, all in our desktop app. Instead of you wiring up DIY tools, we find the operational bottlenecks in your day to day work and solve them properly, so you actually save time and attention. Our goal is to replace a human VA at a fraction of the cost.",
  },
  {
    q: "How fast will I receive my new automation requests?",
    a: "We try to deliver within 48 hours for simple requests. For new integrations and more complex workflows, it can take up to a week.",
  },
  {
    q: "How is Harmony giving unlimited access for a fixed price?",
    a: "We have gone deep into research and engineered the top workflows to run with high accuracy and low token consumption. To get technical, we built our own caching library, tool execution engine, tools, and data processing algorithms to make Harmony faster, better, and cheaper than OpenClaw for major business use cases. We have also set a new state of the art on some of these use cases in terms of accuracy, with results soon to be published.",
  },
  {
    q: "What if I don't like the output Harmony produces?",
    a: "No worries. We keep fine tuning it to your needs until it actually solves your problem end to end.",
  },
  {
    q: "How is Harmony different from ChatGPT or OpenClaw?",
    a: "ChatGPT and OpenClaw are general purpose, DIY tools. Harmony is an operations automation service for small firms, agencies, and startups. It is set up and managed by our team instead of being DIY, with an extreme focus on usability and reliability. It is a business grade product.",
  },
  {
    q: "How do I migrate to Harmony from OpenClaw, Zo, or Viktor?",
    a: "We do it for you. If you are a startup, agency, or small firm, just book a call. We will go through all your workflows, set up the integrations, build your dashboards, and migrate everything for you.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We enforce org level data isolation at the database level and have multiple security checks in place.",
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
