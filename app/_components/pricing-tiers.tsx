"use client";

import { useState } from "react";

const ACCENT = "#9ff690";
const CTA_ACCENT = "#9ff690";
const CAL_LINK = "harmony-vishal/discovery";
const CAL_CONFIG = JSON.stringify({ layout: "month_view", theme: "dark" });

type Feature = string | { label: string; tags: string[] };

type Plan = {
  name: string;
  description: string;
  price: string;
  period: string;
  cta: string;
  highlighted: boolean;
  features: Feature[];
};

const partnerPlans: Plan[] = [
  {
    name: "Growth Partner",
    description: "For teams at $300K-$1M/year",
    price: "$500",
    period: "/month",
    cta: "Book a free call",
    highlighted: true,
    features: [
      "We build and improve your AI systems",
      "In-depth audit of your processes",
      "AI agents, workflows and dashboards",
      {
        label: "Automation across your operations",
        tags: [
          "Founder's productivity",
          "Marketing",
          "Sales",
          "Fulfillment",
          "Client relations",
          "Finances",
          "Admin",
        ],
      },
      "Weekly strategy calls",
      "One automation built at a time",
      "Team-wide Harmony platform access",
      "We work like your extended team",
    ],
  },
  {
    name: "Scale Partner",
    description: "For teams at $1-10M/year",
    price: "$1,500",
    period: "/month",
    cta: "Book a free call",
    highlighted: false,
    features: [
      "Everything in Growth Partner",
      "Three automations built in parallel",
      "Dedicated fractional AI engineer",
      "Custom themed platform",
    ],
  },
  {
    name: "Enterprise",
    description: "For teams above $10M/year",
    price: "Custom",
    period: "",
    cta: "Talk to Sales",
    highlighted: false,
    features: [
      "Everything in Scale Partner",
      "Private deployment in your cloud",
      "Handling customer facing use cases",
      "Guaranteed SLAs",
    ],
  },
];

const workshopPlans: Plan[] = [
  {
    name: "1:1 Consultation",
    description: "Founders and operators going hands-on",
    price: "$80",
    period: "/session",
    cta: "Book a free call",
    highlighted: false,
    features: [
      "60 minute recorded sessions",
      "Find where AI fits in your business",
      "Learn how to actually build and run it",
      "Bring your real workflows and blockers",
      "Personalized roadmap doc",
      "Pay per session, no commitment",
    ],
  },
  {
    name: "Team Workshop",
    description: "Hands-on AI training for your whole team",
    price: "$1,000",
    period: "one-time",
    cta: "Book a free call",
    highlighted: true,
    features: [
      "Eight live sessions, 60 minutes each",
      "Hands-on with your own use cases",
      "Every session recorded for the team",
      "One time, no monthly commitment",
    ],
  },
];

const tabs = [
  {
    id: "partner",
    label: (
      <>
        Fractional
        <br className="sm:hidden" /> AI Department
      </>
    ),
    plans: partnerPlans,
  },
  { id: "workshops", label: "Workshops & consultations", plans: workshopPlans },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="relative flex min-h-[560px] flex-col border border-white/10 bg-black/80 p-7 backdrop-blur-2xl md:p-9">
      <span className="absolute -left-px -top-px h-1.5 w-1.5 bg-white" />
      <span className="absolute -right-px -top-px h-1.5 w-1.5 bg-white" />
      <div className="flex flex-1 flex-col">
        <h3
          className="text-2xl text-white"
          style={{ fontFamily: "var(--font-schibsted)" }}
        >
          {plan.name}
        </h3>
        <p className="mt-4 text-[17px] text-white/55">{plan.description}</p>

        <div className="mt-8 flex items-end gap-2">
          <span
            className="text-5xl leading-none text-white"
            style={{ fontFamily: "var(--font-schibsted)" }}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span className="pb-1.5 text-xl text-white/55">{plan.period}</span>
          )}
        </div>

        <button
          type="button"
          data-cal-link={CAL_LINK}
          data-cal-config={CAL_CONFIG}
          data-loc="pricing"
          className={`mt-9 flex h-12 cursor-pointer items-center justify-center border text-[14px] font-medium uppercase transition ${
            plan.highlighted
              ? "border-transparent text-black hover:brightness-95"
              : "border-[#9ff690] text-white hover:bg-white/10"
          }`}
          style={plan.highlighted ? { backgroundColor: CTA_ACCENT } : undefined}
        >
          {plan.cta}
        </button>

        <div className="mt-10 border-t border-white/10 pt-9">
          <p className="text-[17px] font-medium text-white/45">
            What&apos;s Included
          </p>
          <ul className="mt-7 space-y-5">
            {plan.features.map((feature) => {
              const tagged = typeof feature !== "string";
              const label = tagged ? feature.label : feature;
              return (
                <li
                  key={label}
                  className={`flex gap-3 text-[17px] text-white/85 ${
                    tagged ? "items-start" : "items-center"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 ${tagged ? "mt-2.5" : ""}`}
                    style={{ backgroundColor: ACCENT }}
                  />
                  <div>
                    {label}
                    {tagged && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {feature.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-white/15 bg-white/[0.03] px-2.5 py-1 text-[13px] text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function PricingTiers() {
  const [active, setActive] = useState(0);
  const plans = tabs[active].plans;

  return (
    <div className="mt-10">
      {/* Service-type switcher */}
      <div className="grid grid-cols-2 border border-white/10 sm:inline-flex">
        {tabs.map((tab, i) => {
          const on = i === active;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              className={`cursor-pointer px-2.5 py-3 text-center text-[13px] font-medium uppercase leading-tight transition focus:outline-none sm:px-5 sm:py-3.5 sm:text-[14px] ${
                i > 0 ? "border-l border-white/10" : ""
              } ${
                on
                  ? "text-black"
                  : "text-white/55 hover:bg-white/5 hover:text-white"
              }`}
              style={on ? { backgroundColor: ACCENT } : undefined}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Plans */}
      <div
        className={`mt-12 grid gap-5 ${
          plans.length === 2
            ? "md:grid-cols-2 lg:max-w-4xl"
            : "lg:grid-cols-3"
        }`}
      >
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );
}
