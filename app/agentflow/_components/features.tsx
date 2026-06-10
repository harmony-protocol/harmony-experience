import Image from "next/image";
import { Calculator, Calendar, Database, Handshake, Mail, Video } from "lucide-react";
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
];

const MAC_NAV = [
  { icon: <Video className="h-3 w-3" strokeWidth={1.8} />, label: "Recorder", active: true },
  { icon: <Mail className="h-3 w-3" strokeWidth={1.8} />, label: "Inbox", active: false },
  { icon: <Database className="h-3 w-3" strokeWidth={1.8} />, label: "Data", active: false },
];

const MAC_FEED = [
  { icon: <Video className="h-3 w-3" strokeWidth={1.8} />, title: "Meeting recorded", meta: "Sales sync, 9:30 AM" },
  { icon: <Mail className="h-3 w-3" strokeWidth={1.8} />, title: "Inbox triaged", meta: "14 emails sorted" },
  { icon: <Database className="h-3 w-3" strokeWidth={1.8} />, title: "CRM data captured", meta: "Synced to HubSpot" },
];

function MockLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/45">
      {children}
    </p>
  );
}

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
          One beautiful app, zero learning curve
        </h4>
        <p className="mt-3 max-w-md text-[15px] leading-7 text-white/60">
          A polished, user-friendly Mac app, with a phone app for when you are
          away. It quietly captures everything your automations need.
        </p>
      </div>

      <div className="relative mt-10">
        {/* Mac window */}
        <div className="overflow-hidden rounded-lg border border-white/12 bg-black/60 backdrop-blur sm:mr-24">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-[11px] text-white/40">Harmony for Mac</span>
          </div>
          <div className="flex">
            <div className="flex w-[112px] shrink-0 flex-col gap-1 border-r border-white/10 p-2">
              {MAC_NAV.map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-2 rounded-[5px] px-2 py-1.5 text-[11px]"
                  style={
                    item.active
                      ? { backgroundColor: "rgba(159,246,144,0.1)", color: "#fff" }
                      : { color: "rgba(255,255,255,0.45)" }
                  }
                >
                  <span style={item.active ? { color: ACCENT } : undefined}>
                    {item.icon}
                  </span>
                  {item.label}
                </span>
              ))}
            </div>
            <div className="min-w-0 flex-1 p-2.5">
              <p className="px-1.5 pb-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/35">
                Today
              </p>
              <div className="flex flex-col gap-1">
                {MAC_FEED.map((f, i) => (
                  <div
                    key={f.title}
                    className="relative flex items-center gap-2.5 rounded-[6px] border border-white/5 bg-black/40 px-2.5 py-1.5"
                  >
                    <span
                      aria-hidden
                      className="af-glow pointer-events-none absolute inset-0 rounded-[6px]"
                      style={{
                        backgroundColor: "rgba(159,246,144,0.06)",
                        animationDelay: `${i * 1.8}s`,
                      }}
                    />
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px]"
                      style={{ backgroundColor: "rgba(159,246,144,0.1)", color: ACCENT }}
                    >
                      {f.icon}
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="truncate text-[11.5px] text-white/85">{f.title}</span>
                      <span className="truncate text-[10px] text-white/40">{f.meta}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Phone, peeking over the window edge */}
        <div className="absolute -bottom-2 right-0 hidden w-[140px] rounded-[20px] border border-white/15 bg-[#0a0a0a] p-1.5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.85)] sm:block">
          <div className="rounded-[15px] border border-white/10 bg-black px-2 pb-2.5 pt-1.5">
            <span className="mx-auto block h-1 w-9 rounded-full bg-white/15" />
            <p
              className="mt-1.5 text-center text-[13px] text-white/80"
              style={{ fontFamily: "var(--font-schibsted)" }}
            >
              9:41
            </p>
            <div className="mt-1.5 rounded-md border border-white/10 bg-[#101010] p-2">
              <span className="flex items-center gap-1.5 text-[8.5px] text-white/45">
                <PulseDot />
                Harmony, now
              </span>
              <p className="mt-1 text-[9.5px] leading-snug text-white/80">
                Daily report ready. 27 tasks done while you were away.
              </p>
            </div>
          </div>
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

      <div className="mt-10 flex flex-col gap-2.5">
        {[INTEGRATIONS.slice(0, 6), INTEGRATIONS.slice(6)].map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]"
          >
            <div
              className={`af-logo-marquee flex w-max items-center gap-2.5 pr-2.5 ${
                rowIndex === 1 ? "rev" : ""
              }`}
            >
              {[...row, ...row].map((app, index) => (
                <span
                  key={`${app.name}-${index}`}
                  aria-hidden={index >= row.length}
                  className="flex shrink-0 items-center rounded-lg border border-white/10 bg-black/50 px-3.5 py-2.5 backdrop-blur"
                >
                  <Image
                    src={app.src}
                    alt={app.name}
                    width={app.w}
                    height={app.h}
                    className="h-[22px] w-auto object-contain"
                  />
                </span>
              ))}
            </div>
          </div>
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
      <div className="flex items-center justify-between">
        <MockLabel>Your agents</MockLabel>
        <span className="text-[10px] text-white/45">3 deployed</span>
      </div>

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
      <div className="flex items-center justify-between">
        <MockLabel>Live Dashboard</MockLabel>
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
