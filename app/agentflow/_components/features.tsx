import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ACCENT = "#9ff690";

const TASK_ROWS: string[][] = [
  ["Summarize emails", "Prepare for calls", "Implement IT support", "Help customers", "Reply to emails"],
  ["Onboard employees", "Resolve IT tickets", "Qualify leads", "Support sales reps", "Answer FAQs"],
];

const INDUSTRIES = ["Healthcare", "Finance", "Retail", "Technology"];

const INTEGRATION_COLUMNS: string[][] = [
  ["Slack", "Stripe", "Discord", "GitHub", "Airtable", "Zapier", "Notion", "Gmail", "API"],
  ["HubSpot", "Linear", "Intercom", "Salesforce", "Calendly", "Webflow", "Twilio", "Drive", "Webhook"],
  ["Jira", "Asana", "Mailchimp", "QuickBooks", "Outlook", "Shopify", "Pipedrive", "SQL", "Sheets"],
];

const EQ_HEIGHTS = Array.from({ length: 44 }, (_, i) =>
  Math.round(34 + Math.abs(Math.sin(i * 1.27) + Math.cos(i * 0.6)) * 30),
);

function MockLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/45">
      {children}
    </p>
  );
}

function PulseDot() {
  return (
    <span className="relative inline-flex h-1.5 w-1.5 items-center justify-center">
      <span
        className="af-ping-soft absolute inline-flex h-full w-full rounded-full"
        style={{ backgroundColor: ACCENT }}
      />
      <span
        className="relative inline-flex h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: ACCENT }}
      />
    </span>
  );
}

/* ----------------------------- HERO ROW ----------------------------- */

function TaskTicker({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`af-marquee flex w-max items-center gap-2 ${reverse ? "rev" : ""}`}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-md border border-white/12 bg-black/70 px-3 py-1.5 text-[12px] text-white/80 backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function LaptopShowcase() {
  return (
    <div className="relative h-[440px] overflow-hidden rounded-xl border border-black/[0.08] bg-black shadow-[0_30px_60px_-32px_rgba(13,32,9,0.25)] lg:h-full">
      <Image
        src="https://framerusercontent.com/images/hsBmUPrL4r9gj8eif3Iv3z8IcPA.png?width=1008&height=1071"
        alt="Founder working with AI agents"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pb-5 pt-16">
        <TaskTicker items={TASK_ROWS[0]} />
        <TaskTicker items={TASK_ROWS[1]} reverse />
      </div>
    </div>
  );
}

function FlowConnector() {
  return (
    <div aria-hidden className="flex flex-col items-center">
      <span className="h-5 w-px bg-white/15" />
      <div className="relative h-4 w-full">
        <span className="absolute left-[12.5%] right-[12.5%] top-0 h-px bg-white/15" />
        {INDUSTRIES.map((_, i) => (
          <span
            key={i}
            className="absolute top-0 h-4 w-px bg-white/15"
            style={{ left: `${12.5 + i * 25}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function AgentFlowCard() {
  return (
    <div className="relative isolate flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-black p-7 md:p-9">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="af-bg-translate absolute -inset-[20%]">
          <div
            className="af-bg-scale h-full w-full bg-cover bg-center opacity-70"
            style={{ backgroundImage: "url(/assets/green-animation-bg.png)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/35" />
      </div>

      <div>
        <h4
          className="text-2xl text-white md:text-[28px] md:leading-[1.2]"
          style={{ fontFamily: "var(--font-schibsted)" }}
        >
          Scale complex workflows with AgentFlow
        </h4>
        <p className="mt-3 max-w-md text-[15px] leading-7 text-white/60">
          Get 10x higher throughput and lower operating cost than running it by
          hand, across every team.
        </p>
      </div>

      <div className="mt-10">
        <div className="mx-auto flex max-w-sm items-center gap-2.5 rounded-lg border border-white/12 bg-black/60 px-4 py-3 backdrop-blur">
          <p className="flex-1 text-[13px] text-white/80">
            Ask anything, AgentFlow runs it
            <span className="af-caret ml-0.5" style={{ color: ACCENT }}>
              |
            </span>
          </p>
        </div>

        <FlowConnector />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {INDUSTRIES.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/50 px-3 py-2.5 backdrop-blur"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <span className="truncate text-[12.5px] text-white/80">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- TRAIT CARDS ----------------------------- */

function EqualizerTop() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-12 items-start justify-center gap-[3px] overflow-hidden px-3 [mask-image:linear-gradient(to_bottom,black,transparent)]">
      {EQ_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="af-eq-bar w-[5px] rounded-b-[2px]"
          style={{
            height: h,
            background: `linear-gradient(to bottom, ${ACCENT}, rgba(159,246,144,0))`,
            animationDelay: `${(i % 9) * 0.11}s`,
          }}
        />
      ))}
    </div>
  );
}

function TraitCard({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_24px_50px_-34px_rgba(13,32,9,0.3)]">
      <div className="relative m-2 h-48 overflow-hidden rounded-lg bg-black">
        <EqualizerTop />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 0%, rgba(159,246,144,0.08), transparent 70%)",
          }}
        />
        {children}
      </div>
      <div className="px-5 pb-6 pt-3">
        <h3 className="text-xl text-black" style={{ fontFamily: "var(--font-schibsted)" }}>
          {title}
        </h3>
        <p className="mt-2 text-[15px] leading-7 text-[#4d4d4d]">{body}</p>
      </div>
    </div>
  );
}

function NaturalControlVisual() {
  return (
    <div className="relative z-[1] flex h-full flex-col justify-center gap-3 px-5 pt-4">
      <MockLabel>Input</MockLabel>
      <div className="flex items-center gap-2 rounded-md border border-white/12 bg-[#0c0c0c] px-3 py-2.5">
        <p className="flex-1 text-[12.5px] text-white/80">
          &quot;Send email when form submitted&quot;
        </p>
        <ArrowRight className="h-3.5 w-3.5 text-white/35" strokeWidth={1.75} />
      </div>
      <div className="flex items-center gap-2 pt-1">
        <MockLabel>Workflow</MockLabel>
        <PulseDot />
      </div>
      <div className="flex items-center gap-1.5">
        {["Trigger", "Agent", "Email"].map((node, i) => (
          <div key={node} className="flex items-center gap-1.5">
            {i > 0 && <span className="h-px w-3 bg-white/20" />}
            <span
              className="rounded-[5px] border px-2 py-1 text-[10px] font-medium"
              style={{
                borderColor: "rgba(159,246,144,0.4)",
                color: ACCENT,
                backgroundColor: "rgba(159,246,144,0.06)",
              }}
            >
              {node}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgentCollabVisual() {
  const lines = [
    "agent.assign(lead_followup)",
    "context.share(crm, email)",
    "handoff agent_2 → agent_3",
  ];
  return (
    <div className="relative z-[1] flex h-full flex-col justify-center gap-2 px-5 pt-4">
      {lines.map((line) => (
        <p
          key={line}
          className="text-[12px] leading-5 text-white/55"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {line}
        </p>
      ))}
      <span
        className="mt-2 inline-flex w-max items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium text-black shadow-[0_8px_24px_-12px_rgba(159,246,144,0.55)]"
        style={{ backgroundColor: ACCENT }}
      >
        <svg
          viewBox="0 0 12 12"
          className="h-2.5 w-2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 6.5L4.5 9L10 3" />
        </svg>
        Deployed
      </span>
    </div>
  );
}

function IntegrationsVisual() {
  return (
    <div className="absolute inset-0 grid grid-cols-3 gap-2 p-3 pt-4 [mask-image:linear-gradient(to_bottom,transparent_0%,black_22%,black_82%,transparent_100%)]">
      {INTEGRATION_COLUMNS.map((col, i) => {
        const speedClass = i === 1 ? "fast" : i === 2 ? "rev" : "";
        const doubled = [...col, ...col];
        return (
          <div key={i} className="relative overflow-hidden">
            <div className={`af-vmarquee flex flex-col gap-2 ${speedClass}`}>
              {doubled.map((name, j) => (
                <span
                  key={`${name}-${j}`}
                  className="flex items-center justify-center rounded-md border border-white/10 bg-[#0c0c0c] px-2 py-2 text-[11px] font-medium text-white/65"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Features() {
  return (
    <div className="mt-12 flex flex-col gap-5">
      {/* Hero row */}
      <div className="grid gap-5 lg:h-[500px] lg:grid-cols-2">
        <LaptopShowcase />
        <AgentFlowCard />
      </div>

      {/* Trait cards */}
      <div className="grid gap-5 md:grid-cols-3">
        <TraitCard
          title="Natural Control"
          body="Control agents using simple language inputs, turning instructions into automated workflows without writing complex logic."
        >
          <NaturalControlVisual />
        </TraitCard>
        <TraitCard
          title="Agent Collaboration"
          body="Agents communicate, share context, and delegate tasks seamlessly to complete complex multi-step workflows without delays."
        >
          <AgentCollabVisual />
        </TraitCard>
        <TraitCard
          title="Universal Integration"
          body="Connect agents with the tools and systems you already use to execute actions instantly, with no migration and no complex setup."
        >
          <IntegrationsVisual />
        </TraitCard>
      </div>
    </div>
  );
}
