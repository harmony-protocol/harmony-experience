import Image from "next/image";
import { Calculator, Calendar, Handshake } from "lucide-react";
import { CountUp } from "./count-up";
import { DashChart } from "./dash-bars";

const ACCENT = "#9ff690";

const LOGO_DIR = "/assets/integrations/full-color-logos";
const INTEGRATIONS = [
  { name: "Gmail", src: `${LOGO_DIR}/gmail.webp`, w: 545, h: 114 },
  { name: "Slack", src: `${LOGO_DIR}/slack.webp`, w: 545, h: 114 },
  { name: "HubSpot", src: `${LOGO_DIR}/hubspot.webp`, w: 545, h: 114 },
  { name: "Notion", src: `${LOGO_DIR}/notion.webp`, w: 545, h: 114 },
  { name: "Google Sheets", src: `${LOGO_DIR}/google-sheets.webp`, w: 545, h: 114 },
  { name: "Google Calendar", src: `${LOGO_DIR}/google-calendar.webp`, w: 545, h: 114 },
  { name: "Airtable", src: `${LOGO_DIR}/airtable.webp`, w: 600, h: 126 },
  { name: "Zoom", src: `${LOGO_DIR}/zoom.webp`, w: 545, h: 114 },
  { name: "Stripe", src: `${LOGO_DIR}/stripe.webp`, w: 3809, h: 1633 },
  { name: "QuickBooks", src: `${LOGO_DIR}/quickbooks.png`, w: 2345, h: 600 },
  { name: "Granola", src: `${LOGO_DIR}/granola.webp`, w: 545, h: 114 },
  { name: "Jira", src: `${LOGO_DIR}/jira.webp`, w: 545, h: 114 },
  { name: "Asana", src: `${LOGO_DIR}/asana.webp`, w: 545, h: 114 },
  { name: "Teams", src: `${LOGO_DIR}/team.webp`, w: 506, h: 106 },
  { name: "Telegram", src: `${LOGO_DIR}/telegram.webp`, w: 545, h: 114 },
];

function PulseDot({ delay = "0s" }: { delay?: string }) {
  return (
    <span className="relative inline-flex h-1.5 w-1.5 items-center justify-center">
      <span
        className="af-ping-soft absolute inline-flex h-full w-full rounded-full"
        style={{ backgroundColor: ACCENT, animationDelay: delay }}
      />
      <span
        className="relative inline-flex h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: ACCENT }}
      />
    </span>
  );
}

const GRID_LOGOS = [
  "Gmail",
  "Slack",
  "Airtable",
  "Notion",
  "Zoom",
  "HubSpot",
  "Google Sheets",
  "Granola",
  "Google Calendar",
  "Teams",
  "Stripe",
  "Asana",
];

export function IntegrationsRow() {
  const logos = GRID_LOGOS.map((n) =>
    INTEGRATIONS.find((i) => i.name === n),
  ).filter((i): i is (typeof INTEGRATIONS)[number] => Boolean(i));
  return (
    <div className="grid grid-cols-3 items-center gap-x-6 gap-y-12 lg:grid-cols-6">
      {logos.map((app, i) => {
        const col = i % 6;
        const edge =
          col === 0
            ? "lg:justify-start"
            : col === 5
              ? "lg:justify-end"
              : "";
        return (
          <div
            key={app.name}
            className={`${i < 6 ? "flex" : "hidden lg:flex"} h-[30px] items-center justify-center ${edge}`}
          >
            <Image
              src={app.src}
              alt={app.name}
              width={app.w}
              height={app.h}
              className="h-[30px] w-auto max-w-full object-contain opacity-90"
            />
          </div>
        );
      })}
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
      className={`flex flex-col overflow-hidden rounded-lg border border-white/10 bg-[#070707] ${className}`}
    >
      <div className="relative m-2 h-60 overflow-hidden rounded-[6px] border border-white/[0.07] bg-black">
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
        <h3 className="text-xl text-white" style={{ fontFamily: "var(--font-schibsted)" }}>
          {title}
        </h3>
        <p className="mt-2 text-[17px] leading-8 text-white/55">{body}</p>
      </div>
    </div>
  );
}

const AGENT_NODES = [
  {
    name: "AI CSM",
    status: "Updating clients",
    color: ACCENT,
    live: true,
    icon: <Handshake className="h-3.5 w-3.5" strokeWidth={1.8} />,
  },
  {
    name: "AI EA",
    status: "Booking meetings",
    color: "#f69090",
    live: true,
    icon: <Calendar className="h-3.5 w-3.5" strokeWidth={1.8} />,
  },
  {
    name: "AI CFO",
    status: "Idle",
    color: "#90a8f6",
    live: false,
    icon: <Calculator className="h-3.5 w-3.5" strokeWidth={1.8} />,
  },
];

function AgentsVisual() {
  return (
    <div className="relative z-[1] flex h-full flex-col justify-center gap-2 px-5 py-5">
      <span
        className="mx-auto mt-1 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] text-white/85"
        style={{
          borderColor: "rgba(159,246,144,0.35)",
          backgroundColor: "rgba(159,246,144,0.07)",
        }}
      >
        <PulseDot />
        Harmony
      </span>

      <svg
        viewBox="0 0 300 36"
        preserveAspectRatio="none"
        className="h-9 w-full"
        aria-hidden
      >
        {AGENT_NODES.map((a, i) => {
          const x = 50 + i * 100;
          return (
            <path
              key={a.name}
              d={`M150 0 C150 18, ${x} 18, ${x} 36`}
              fill="none"
              stroke={a.live ? a.color : "rgba(255,255,255,0.15)"}
              strokeOpacity={a.live ? 0.55 : 1}
              strokeWidth={1}
              strokeDasharray="4 4"
              vectorEffect="non-scaling-stroke"
              className={a.live ? "af-dash" : undefined}
            />
          );
        })}
      </svg>

      <div className="grid grid-cols-3 gap-2">
        {AGENT_NODES.map((a) => (
          <div
            key={a.name}
            className="flex flex-col items-center gap-1 rounded-md border border-white/10 bg-[#0c0c0c] px-1.5 py-2.5"
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded-[6px]"
              style={{ backgroundColor: `${a.color}1f`, color: a.color }}
            >
              {a.icon}
            </span>
            <span className="text-[11px] text-white/85">{a.name}</span>
            <span className="max-w-full truncate text-[9.5px] text-white/40">
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const ICON_DIR = "/assets/integrations/icon";

function ToolIcon({ name, size = "h-5 w-5" }: { name: string; size?: string }) {
  return (
    <span
      className={`flex ${size} items-center justify-center rounded-[5px] border border-white/10 bg-black/60`}
    >
      <Image
        src={`${ICON_DIR}/${name}.webp`}
        alt={name}
        width={48}
        height={48}
        className="h-[60%] w-[60%] object-contain"
      />
    </span>
  );
}

function SparkleChip() {
  return (
    <span
      className="flex h-5 w-5 items-center justify-center rounded-[5px]"
      style={{ backgroundColor: "rgba(159,246,144,0.1)", color: ACCENT }}
    >
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="currentColor">
        <path d="M6 0l1.4 4.6L12 6l-4.6 1.4L6 12l-1.4-4.6L0 6l4.6-1.4L6 0z" />
      </svg>
    </span>
  );
}

function WorkflowStep({
  children,
  delay,
  tools,
  sparkle = false,
}: {
  children: React.ReactNode;
  delay: string;
  tools?: string[];
  sparkle?: boolean;
}) {
  return (
    <div className="relative mx-auto flex w-fit items-center gap-2.5 rounded-md border border-white/10 bg-[#0c0c0c] px-3 py-2">
      <span
        aria-hidden
        className="af-glow pointer-events-none absolute inset-0 rounded-md border"
        style={{
          borderColor: "rgba(159,246,144,0.35)",
          backgroundColor: "rgba(159,246,144,0.07)",
          animationDelay: delay,
        }}
      />
      <span className="relative h-1.5 w-1.5 shrink-0 rounded-full bg-white/30">
        <span
          className="af-glow absolute inset-0 rounded-full"
          style={{ backgroundColor: ACCENT, animationDelay: delay }}
        />
      </span>
      <span className="relative text-[12px] text-white/80">{children}</span>
      {(sparkle || tools) && (
        <span className="relative flex gap-1">
          {sparkle && <SparkleChip />}
          {tools?.map((t) => <ToolIcon key={t} name={t} />)}
        </span>
      )}
    </div>
  );
}

function FlowDot({ dist }: { dist: string }) {
  return (
    <span
      className="af-flow absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full"
      style={{ backgroundColor: ACCENT, "--af-flow-dist": dist } as React.CSSProperties}
    />
  );
}

function BranchChip({
  cond,
  label,
  active = false,
  delay = "0s",
  tools,
}: {
  cond: string;
  label: string;
  active?: boolean;
  delay?: string;
  tools?: string[];
}) {
  return (
    <div className="relative w-fit justify-self-center rounded-md border border-white/10 bg-[#0c0c0c] px-2.5 py-2">
      {active && (
        <span
          aria-hidden
          className="af-glow pointer-events-none absolute inset-0 rounded-md border"
          style={{
            borderColor: "rgba(159,246,144,0.35)",
            backgroundColor: "rgba(159,246,144,0.07)",
            animationDelay: delay,
          }}
        />
      )}
      <div className="relative flex items-center gap-2">
        <p
          className={`text-[9px] font-semibold uppercase tracking-[0.08em] ${
            active ? "text-white/55" : "text-white/35"
          }`}
        >
          {cond}
        </p>
        {tools && (
          <span className="flex gap-1">
            {tools.map((t) => (
              <ToolIcon key={t} name={t} size="h-4 w-4" />
            ))}
          </span>
        )}
      </div>
      <p className="relative mt-0.5 text-[11.5px] leading-snug text-white/80">
        {label}
      </p>
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div className="relative z-[1] flex h-full flex-col justify-center gap-1.5 px-5 py-5">
      <WorkflowStep delay="0s" tools={["gmail", "linkedin"]}>
        New lead comes in
      </WorkflowStep>
      <div className="relative mx-auto h-3.5 w-px bg-white/15">
        <FlowDot dist="10px" />
      </div>
      <WorkflowStep delay="1.8s" sparkle>
        Qualify with AI
      </WorkflowStep>
      {/* T-split into the two branches */}
      <div className="relative h-5">
        <span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-white/15">
          <FlowDot dist="6px" />
        </span>
        <span className="absolute left-1/4 right-1/4 top-2 h-px bg-white/15" />
        <span className="absolute left-1/4 top-2 h-3 w-px bg-white/15" />
        <span className="absolute right-1/4 top-2 h-3 w-px bg-white/15" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <BranchChip
          cond="if score > 80"
          label="Update CRM, notify rep"
          active
          delay="3.6s"
          tools={["hubspot", "slack"]}
        />
        <BranchChip cond="else" label="Add to nurture" tools={["gmail"]} />
      </div>
    </div>
  );
}

function StatTile({
  value,
  label,
  delta,
}: {
  value: React.ReactNode;
  label: string;
  delta: string;
}) {
  return (
    <div className="flex-1 rounded-md border border-white/10 bg-[#0c0c0c] px-3 py-2">
      <span className="flex items-baseline justify-between gap-1">
        <span
          className="text-xl text-white"
          style={{ fontFamily: "var(--font-schibsted)" }}
        >
          {value}
        </span>
        <span
          className="inline-flex items-center gap-0.5 text-[10px] font-medium"
          style={{ color: ACCENT }}
        >
          <svg viewBox="0 0 12 12" className="h-2 w-2" fill="currentColor">
            <path d="M6 2l4 5H8v3H4V7H2l4-5z" />
          </svg>
          {delta}
        </span>
      </span>
      <span className="text-[10.5px] text-white/45">{label}</span>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="relative z-[1] flex h-full flex-col justify-center gap-3 px-5 py-5">
      <div className="flex items-center justify-end">
        <span className="flex items-center gap-1.5 text-[10px] text-white/60">
          <PulseDot />
          Live
        </span>
      </div>
      <div className="flex gap-2">
        <StatTile value={<CountUp value={128} />} label="tasks today" delta="+18%" />
        <StatTile
          value={<CountUp value={27} suffix="h" />}
          label="saved this week"
          delta="+6h"
        />
      </div>
      <DashChart />
    </div>
  );
}

export function Features() {
  return (
    <div className="flex flex-col gap-5">

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
