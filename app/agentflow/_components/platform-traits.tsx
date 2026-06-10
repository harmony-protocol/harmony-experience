import { ArrowRight } from "lucide-react";

const ACCENT = "#9ff690";

const INTEGRATION_COLUMNS: string[][] = [
  ["Slack", "Stripe", "Discord", "GitHub", "Airtable", "Zapier", "Notion", "Gmail", "API"],
  ["HubSpot", "Linear", "Intercom", "Salesforce", "Calendly", "Webflow", "Twilio", "Drive", "Webhook"],
  ["Jira", "Asana", "Mailchimp", "QuickBooks", "Outlook", "Shopify", "Pipedrive", "SQL", "Sheets"],
];

function CardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#070707]">
      {children}
    </div>
  );
}

function VisualFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative m-2 h-52 overflow-hidden rounded-lg bg-black">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(159,246,144,0.06), transparent 70%)",
        }}
      />
      <CornerDots />
      {children}
    </div>
  );
}

function CornerDots() {
  const positions = ["left-1.5 top-1.5", "right-1.5 top-1.5", "left-1.5 bottom-1.5", "right-1.5 bottom-1.5"];
  return (
    <>
      {positions.map((pos) => (
        <span
          key={pos}
          className={`pointer-events-none absolute h-1 w-1 rounded-full bg-white/25 ${pos}`}
        />
      ))}
    </>
  );
}

function TitleBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="px-5 pb-6 pt-3">
      <h3 className="text-xl text-white" style={{ fontFamily: "var(--font-schibsted)" }}>
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-7 text-white/55">{children}</p>
    </div>
  );
}

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

function NaturalControlVisual() {
  return (
    <div className="relative z-[1] flex h-full flex-col justify-center gap-3 px-5">
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
    { text: "agent.assign(lead_followup)", muted: false },
    { text: "context.share(crm, email)", muted: false },
    { text: "handoff agent_2 → agent_3", muted: false },
  ];
  return (
    <div className="relative z-[1] flex h-full flex-col justify-center gap-2 px-5">
      {lines.map((line) => (
        <p
          key={line.text}
          className="text-[12px] leading-5 text-white/55"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          {line.text}
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
    <div className="absolute inset-0 grid grid-cols-3 gap-2 p-3 [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]">
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

export function PlatformTraits() {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      <CardShell>
        <VisualFrame>
          <NaturalControlVisual />
        </VisualFrame>
        <TitleBlock title="Natural Control">
          Tell your system what you need in plain English. No dashboards to
          learn, no logic to build. We set it up, you just talk to it.
        </TitleBlock>
      </CardShell>

      <CardShell>
        <VisualFrame>
          <AgentCollabVisual />
        </VisualFrame>
        <TitleBlock title="Agent Collaboration">
          Your agents share context and hand work to each other, so a lead can
          go from inquiry to booked call without you touching it.
        </TitleBlock>
      </CardShell>

      <CardShell>
        <VisualFrame>
          <IntegrationsVisual />
        </VisualFrame>
        <TitleBlock title="Universal Integration">
          We wire your agents into the tools you already use, so they act
          instantly with no migration and no new software.
        </TitleBlock>
      </CardShell>
    </div>
  );
}
