import Image from "next/image";
import { Bot, Database, Mail, Smartphone, Video } from "lucide-react";

const ACCENT = "#9ff690";

const INTEGRATIONS = [
  { name: "Gmail", src: "/assets/integrations/full-color-logos/gmail.webp" },
  { name: "Slack", src: "/assets/integrations/full-color-logos/slack.webp" },
  { name: "HubSpot", src: "/assets/integrations/full-color-logos/hubspot.webp" },
  { name: "Notion", src: "/assets/integrations/full-color-logos/notion.webp" },
  { name: "Google Sheets", src: "/assets/integrations/full-color-logos/google-sheets.webp" },
  { name: "Google Calendar", src: "/assets/integrations/full-color-logos/google-calendar.webp" },
  { name: "Airtable", src: "/assets/integrations/full-color-logos/airtable.webp" },
  { name: "Zoom", src: "/assets/integrations/full-color-logos/zoom.webp" },
  { name: "Granola", src: "/assets/integrations/full-color-logos/granola.webp" },
  { name: "Jira", src: "/assets/integrations/full-color-logos/jira.webp" },
];

const MAC_FEATURES = [
  { icon: <Database className="h-3.5 w-3.5" strokeWidth={1.8} />, label: "Captures the data your automations need" },
  { icon: <Video className="h-3.5 w-3.5" strokeWidth={1.8} />, label: "Built-in Meet recorder" },
  { icon: <Mail className="h-3.5 w-3.5" strokeWidth={1.8} />, label: "Triages your inbox automatically" },
  { icon: <Smartphone className="h-3.5 w-3.5" strokeWidth={1.8} />, label: "Phone app to check in anywhere" },
];

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

function GreenBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="af-bg-translate absolute -inset-[20%]">
        <div
          className="af-bg-scale h-full w-full bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url(/assets/green-animation-bg.png)" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/35" />
    </div>
  );
}

function EaseOfUseCard() {
  return (
    <div className="relative isolate flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-black p-7 md:p-9">
      <GreenBackdrop />

      <div>
        <h4
          className="text-2xl text-white md:text-[28px] md:leading-[1.2]"
          style={{ fontFamily: "var(--font-schibsted)" }}
        >
          Beautifully simple, on Mac and phone
        </h4>
        <p className="mt-3 max-w-md text-[15px] leading-7 text-white/60">
          A polished, user-friendly Mac app, with a phone app for when you are
          away. It quietly captures everything your automations need.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-lg border border-white/12 bg-black/60 backdrop-blur">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[11px] text-white/40">Harmony for Mac</span>
        </div>
        <div className="flex flex-col">
          {MAC_FEATURES.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-3 border-b border-white/5 px-4 py-2.5 last:border-b-0"
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[5px]"
                style={{ backgroundColor: "rgba(159,246,144,0.1)", color: ACCENT }}
              >
                {f.icon}
              </span>
              <span className="text-[12.5px] text-white/80">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IntegrationsCard() {
  return (
    <div className="relative isolate flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-black p-7 md:p-9">
      <GreenBackdrop />

      <div>
        <h4
          className="text-2xl text-white md:text-[28px] md:leading-[1.2]"
          style={{ fontFamily: "var(--font-schibsted)" }}
        >
          Connect to the tools you already use
        </h4>
        <p className="mt-3 max-w-md text-[15px] leading-7 text-white/60">
          Plug into your CRM, inbox, billing, and docs. Hundreds of
          integrations, each set up in minutes.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2.5">
        {INTEGRATIONS.map((app) => (
          <span
            key={app.name}
            className="flex items-center rounded-lg border border-white/10 bg-black/50 px-3.5 py-2.5 backdrop-blur"
          >
            <Image
              src={app.src}
              alt={app.name}
              width={478}
              height={100}
              className="h-[22px] w-auto object-contain"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- TRAIT CARDS ----------------------------- */

function TraitCard({
  title,
  body,
  className = "",
  children,
}: {
  title: string;
  body: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_24px_50px_-34px_rgba(13,32,9,0.3)] ${className}`}
    >
      <div className="relative m-2 h-60 overflow-hidden rounded-lg bg-black">
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

function AgentsVisual() {
  const agents = [
    { name: "Lead Agent", task: "Following up with 12 leads", status: "Active", on: true },
    { name: "Support Agent", task: "Answering tickets", status: "Running", on: true },
    { name: "Reporting Agent", task: "Waiting for Friday", status: "Idle", on: false },
  ];
  return (
    <div className="relative z-[1] flex h-full flex-col justify-center gap-2.5 px-5 py-5">
      <div className="flex items-center justify-between">
        <MockLabel>Your agents</MockLabel>
        <span className="text-[10px] text-white/45">3 deployed</span>
      </div>
      {agents.map((a) => (
        <div
          key={a.name}
          className="flex items-center gap-2.5 rounded-md border border-white/10 bg-[#0c0c0c] px-3 py-2.5"
        >
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[6px]"
            style={{ backgroundColor: "rgba(159,246,144,0.1)", color: ACCENT }}
          >
            <Bot className="h-4 w-4" strokeWidth={1.8} />
          </span>
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="truncate text-[12.5px] text-white/85">{a.name}</span>
            <span className="truncate text-[10.5px] text-white/40">{a.task}</span>
          </span>
          <span
            className={`flex shrink-0 items-center gap-1.5 text-[10px] ${
              a.on ? "text-white/70" : "text-white/35"
            }`}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: a.on ? ACCENT : "rgba(255,255,255,0.25)",
              }}
            />
            {a.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function WorkflowStep({
  children,
  muted = false,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-md border px-3 py-2 ${
        muted
          ? "border-white/10 bg-[#0c0c0c]"
          : "border-[rgba(159,246,144,0.35)] bg-[rgba(159,246,144,0.07)]"
      }`}
    >
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: muted ? "rgba(255,255,255,0.3)" : ACCENT }}
      />
      <span className="text-[12px] text-white/80">{children}</span>
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div className="relative z-[1] flex h-full flex-col justify-center gap-2 px-5 py-5">
      <MockLabel>Multi-step workflow</MockLabel>
      <WorkflowStep>New lead comes in</WorkflowStep>
      <div className="ml-3 h-2.5 w-px bg-white/15" />
      <WorkflowStep>Qualify with AI</WorkflowStep>
      <div className="ml-3 flex items-center gap-2">
        <span className="h-2.5 w-px bg-white/15" />
        <span
          className="rounded-[5px] border border-white/12 bg-[#0c0c0c] px-2 py-0.5 text-[10px] text-white/55"
        >
          if score &gt; 80
        </span>
      </div>
      <WorkflowStep>Update CRM and notify rep</WorkflowStep>
    </div>
  );
}

const DASH_BARS = [40, 62, 30, 78, 52, 88, 46, 70, 58, 84, 50, 92];

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 rounded-md border border-white/10 bg-[#0c0c0c] px-3 py-2">
      <span
        className="block text-xl text-white"
        style={{ fontFamily: "var(--font-schibsted)" }}
      >
        {value}
      </span>
      <span className="text-[10.5px] text-white/45">{label}</span>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="relative z-[1] flex h-full flex-col justify-center gap-3 px-5 py-5">
      <div className="flex items-center justify-between">
        <MockLabel>Live Dashboard</MockLabel>
        <span className="flex items-center gap-1.5 text-[10px] text-white/60">
          <PulseDot />
          Live
        </span>
      </div>
      <div className="flex gap-2">
        <StatTile value="128" label="tasks today" />
        <StatTile value="27h" label="saved this week" />
      </div>
      <div className="flex h-12 items-end gap-[3px]">
        {DASH_BARS.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-[2px]"
            style={{
              height: `${h}%`,
              backgroundColor: i % 3 === 0 ? ACCENT : "rgba(255,255,255,0.14)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <div className="mt-12 flex flex-col gap-5">
      {/* Hero row: ease of use + integrations */}
      <div className="grid gap-5 lg:h-[460px] lg:grid-cols-2">
        <EaseOfUseCard />
        <IntegrationsCard />
      </div>

      {/* Agents, workflows, dashboards */}
      <div className="grid gap-5 md:grid-cols-3">
        <TraitCard
          title="AI agents"
          body="Build AI agents that do your tasks for you. Set them up in minutes, with no code."
        >
          <AgentsVisual />
        </TraitCard>
        <TraitCard
          title="Workflows"
          body="Build multi-step workflows with conditions and handoffs. They run start to finish on their own."
        >
          <WorkflowVisual />
        </TraitCard>
        <TraitCard
          title="Dashboards"
          body="Get a live dashboard with every build. See hours saved, tasks done, and what is running right now."
        >
          <DashboardVisual />
        </TraitCard>
      </div>
    </div>
  );
}
