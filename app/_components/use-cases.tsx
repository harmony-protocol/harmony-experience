"use client";

import { useState } from "react";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  Calculator,
  CheckCircle2,
  Coffee,
  Handshake,
  ListChecks,
  Megaphone,
  PenLine,
  Target,
  Users,
  Workflow as WorkflowIcon,
} from "lucide-react";

/* ------------------------------ ICONS ------------------------------ */
const ICON: Record<string, string> = {
  gmail: "/assets/integrations/icon/gmail.webp",
  outlook: "/assets/integrations/icon/outlook.webp",
  slack: "/assets/integrations/icon/slack.webp",
  notion: "/assets/integrations/icon/notion.webp",
  hubspot: "/assets/integrations/icon/hubspot.webp",
  salesforce: "/assets/integrations/icon/salesforce.webp",
  linkedin: "/assets/integrations/icon/linkedin.webp",
  zoho: "/assets/integrations/icon/zoho_crm.webp",
  sheets: "/assets/integrations/icon/google_sheets.webp",
  docs: "/assets/integrations/icon/google_docs.webp",
  calendar: "/assets/integrations/icon/google_calendar.webp",
  airtable: "/assets/integrations/icon/airtable.webp",
  zoom: "/assets/integrations/icon/zoom.webp",
};

/* ----------------------------- PALETTES ----------------------------- */
// One hue family per workflow, ramped light -> dark across its 3 tiers.
type ToneSet = { grad: string; text: string; tint: string }[];
const PALETTES: Record<string, ToneSet> = {
  teal: [
    { grad: "from-teal-400 to-teal-500", text: "text-zinc-950", tint: "border-teal-400/25 bg-teal-500/10 text-teal-100" },
    { grad: "from-teal-500 to-cyan-600", text: "text-white", tint: "border-cyan-400/25 bg-cyan-500/10 text-cyan-100" },
    { grad: "from-cyan-600 to-cyan-800", text: "text-white", tint: "border-cyan-400/25 bg-cyan-600/10 text-cyan-100" },
  ],
  sky: [
    { grad: "from-sky-300 to-sky-400", text: "text-zinc-950", tint: "border-sky-400/25 bg-sky-500/10 text-sky-100" },
    { grad: "from-sky-500 to-blue-600", text: "text-white", tint: "border-blue-400/25 bg-blue-500/10 text-blue-100" },
    { grad: "from-blue-600 to-indigo-700", text: "text-white", tint: "border-indigo-400/25 bg-indigo-500/10 text-indigo-100" },
  ],
  emerald: [
    { grad: "from-emerald-300 to-emerald-400", text: "text-zinc-950", tint: "border-emerald-400/25 bg-emerald-500/10 text-emerald-100" },
    { grad: "from-emerald-400 to-emerald-600", text: "text-white", tint: "border-emerald-400/25 bg-emerald-500/10 text-emerald-100" },
    { grad: "from-emerald-600 to-teal-800", text: "text-white", tint: "border-teal-400/25 bg-teal-600/10 text-teal-100" },
  ],
  violet: [
    { grad: "from-violet-300 to-violet-400", text: "text-zinc-950", tint: "border-violet-400/25 bg-violet-500/10 text-violet-100" },
    { grad: "from-violet-500 to-purple-600", text: "text-white", tint: "border-purple-400/25 bg-purple-500/10 text-purple-100" },
    { grad: "from-purple-600 to-violet-800", text: "text-white", tint: "border-violet-400/25 bg-violet-600/10 text-violet-100" },
  ],
  rose: [
    { grad: "from-rose-300 to-rose-400", text: "text-zinc-950", tint: "border-rose-400/25 bg-rose-500/10 text-rose-100" },
    { grad: "from-rose-400 to-pink-600", text: "text-white", tint: "border-pink-400/25 bg-pink-500/10 text-pink-100" },
    { grad: "from-pink-600 to-fuchsia-700", text: "text-white", tint: "border-fuchsia-400/25 bg-fuchsia-500/10 text-fuchsia-100" },
  ],
  amber: [
    { grad: "from-amber-300 to-amber-400", text: "text-zinc-950", tint: "border-amber-400/25 bg-amber-500/10 text-amber-100" },
    { grad: "from-orange-400 to-orange-600", text: "text-white", tint: "border-orange-400/25 bg-orange-500/10 text-orange-100" },
    { grad: "from-orange-600 to-red-700", text: "text-white", tint: "border-red-400/25 bg-red-500/10 text-red-100" },
  ],
  cyan: [
    { grad: "from-cyan-300 to-cyan-400", text: "text-zinc-950", tint: "border-cyan-400/25 bg-cyan-500/10 text-cyan-100" },
    { grad: "from-cyan-500 to-sky-600", text: "text-white", tint: "border-sky-400/25 bg-sky-500/10 text-sky-100" },
    { grad: "from-sky-600 to-blue-800", text: "text-white", tint: "border-blue-400/25 bg-blue-600/10 text-blue-100" },
  ],
  fuchsia: [
    { grad: "from-fuchsia-300 to-fuchsia-400", text: "text-zinc-950", tint: "border-fuchsia-400/25 bg-fuchsia-500/10 text-fuchsia-100" },
    { grad: "from-fuchsia-500 to-purple-600", text: "text-white", tint: "border-purple-400/25 bg-purple-500/10 text-purple-100" },
    { grad: "from-purple-600 to-violet-800", text: "text-white", tint: "border-violet-400/25 bg-violet-600/10 text-violet-100" },
  ],
};

/* ------------------------------ DATA ------------------------------ */

type Workflow = {
  name: string;
  desc: string;
  hue: keyof typeof PALETTES;
  inputs: [string, string, string];
  stages: { label: string; tools: string[] }[];
  tierLabels: [string, string, string];
  middles: [string, string, string];
  outputs: [string, string, string];
};
type Category = {
  id: string;
  icon: ReactNode;
  title: string;
  // Shorter label used on phone, where the full title would truncate.
  shortTitle?: string;
  description: string;
  workflows: [Workflow, Workflow, Workflow];
};

const categories: Category[] = [
  {
    id: "personal-productivity",
    icon: <Coffee className="h-4 w-4" strokeWidth={2} />,
    title: "Personal Productivity",
    shortTitle: "Productivity",
    description: "We run your inbox, calendar, and daily prep so you start every day already ahead.",
    workflows: [
      { name: "Email Triage & Followups", desc: "Sort threads, draft replies, do followups.", hue: "teal",
        inputs: ["Mailboxes", "Rules", "Your Voice"], stages: [{ label: "Triage", tools: ["gmail", "outlook"] }, { label: "Draft & Track", tools: ["gmail", "outlook"] }],
        tierLabels: ["Reply Now", "Later", "Waiting"], middles: ["Draft", "Schedule", "Followup"], outputs: ["Sent", "Queued", "Chased"] },
      { name: "Calendar Management", desc: "Book meetings, defend focus time.", hue: "sky",
        inputs: ["Inbox", "Availability", "Priorities"], stages: [{ label: "Capture Request", tools: ["gmail", "outlook"] }, { label: "Schedule", tools: ["calendar"] }],
        tierLabels: ["Urgent", "Soon", "Flexible"], middles: ["Book", "Buffer", "Propose"], outputs: ["Confirmed", "Focus Blocks", "Proposals"] },
      { name: "Daily Brief", desc: "Rank the day, brief you each morning.", hue: "violet",
        inputs: ["Tasks", "Calendar", "Inbox"], stages: [{ label: "Gather", tools: ["slack", "gmail"] }, { label: "Prioritize", tools: ["notion"] }],
        tierLabels: ["P1", "P2", "P3"], middles: ["Do Now", "Time-block", "Defer"], outputs: ["Top 3", "Day Plan", "Backlog"] },
    ],
  },
  {
    id: "project-management",
    icon: <ListChecks className="h-4 w-4" strokeWidth={2} />,
    title: "Project Management",
    shortTitle: "Projects",
    description: "We keep projects moving, assignments clear, deadlines visible, blockers surfaced.",
    workflows: [
      { name: "Tracking", desc: "Watch status across boards.", hue: "sky",
        inputs: ["Boards", "Owners", "Dates"], stages: [{ label: "Sync", tools: ["notion", "airtable"] }, { label: "Watch", tools: ["slack"] }],
        tierLabels: ["On Track", "At Risk", "Late"], middles: ["Update", "Nudge", "Escalate"], outputs: ["Rollup", "Alerts", "Digest"] },
      { name: "Assignment", desc: "Route work to the right owner.", hue: "emerald",
        inputs: ["New Work", "Skills", "Load"], stages: [{ label: "Intake", tools: ["slack"] }, { label: "Match", tools: ["notion"] }],
        tierLabels: ["High", "Med", "Low"], middles: ["Assign", "Queue", "Defer"], outputs: ["Assigned", "Notified", "Logged"] },
      { name: "Reporting", desc: "Roll activity into updates.", hue: "violet",
        inputs: ["Activity", "Metrics", "Cadence"], stages: [{ label: "Collect", tools: ["slack"] }, { label: "Summarize", tools: ["docs"] }],
        tierLabels: ["Daily", "Weekly", "Sprint"], middles: ["Standup", "Status", "Recap"], outputs: ["Digest", "Update", "Recap"] },
    ],
  },
  {
    id: "fulfillment",
    icon: <WorkflowIcon className="h-4 w-4" strokeWidth={2} />,
    title: "Fulfillment",
    description: "We run the handoffs, approvals, and SOPs that quietly keep the business moving.",
    workflows: [
      { name: "SOPs", desc: "Run the play on every trigger.", hue: "cyan",
        inputs: ["Triggers", "SOPs", "Owners"], stages: [{ label: "Detect", tools: ["slack", "gmail"] }, { label: "Run", tools: ["notion"] }],
        tierLabels: ["Auto", "Review", "Manual"], middles: ["Execute", "Approve", "Assign"], outputs: ["Done", "Logged", "Routed"] },
      { name: "Approvals", desc: "Route requests, log decisions.", hue: "sky",
        inputs: ["Requests", "Policy", "Approvers"], stages: [{ label: "Intake", tools: ["slack"] }, { label: "Route", tools: ["notion"] }],
        tierLabels: ["Auto", "Manager", "Finance"], middles: ["Approve", "Hold", "Reject"], outputs: ["Approved", "Logged", "Notified"] },
      { name: "Vendors", desc: "Audit spend and renewals.", hue: "emerald",
        inputs: ["Vendors", "Renewals", "Spend"], stages: [{ label: "Audit", tools: ["sheets"] }, { label: "Queue", tools: ["slack"] }],
        tierLabels: ["Renew", "Review", "Cancel"], middles: ["Notify", "Negotiate", "Cut"], outputs: ["Queued", "Flagged", "Saved"] },
    ],
  },
  {
    id: "content-creation",
    icon: <PenLine className="h-4 w-4" strokeWidth={2} />,
    title: "Content Creation",
    shortTitle: "Content",
    description: "We turn ideas into a steady stream of published, on-brand content.",
    workflows: [
      { name: "Drafting", desc: "Research and write to voice.", hue: "violet",
        inputs: ["Ideas", "Voice", "Brief"], stages: [{ label: "Research", tools: ["notion"] }, { label: "Write", tools: ["docs"] }],
        tierLabels: ["TOF", "MOF", "BOF"], middles: ["Hook", "Body", "CTA"], outputs: ["Draft", "Outline", "Edits"] },
      { name: "Repurposing", desc: "Atomize long-form into many.", hue: "fuchsia",
        inputs: ["Long-form", "Channels", "Format"], stages: [{ label: "Atomize", tools: ["notion"] }, { label: "Adapt", tools: ["docs"] }],
        tierLabels: ["Social", "Email", "Video"], middles: ["Clip", "Thread", "Snippet"], outputs: ["Posts", "Threads", "Clips"] },
      { name: "Distribution", desc: "Queue and publish on cadence.", hue: "sky",
        inputs: ["Assets", "Calendar", "Channels"], stages: [{ label: "Queue", tools: ["linkedin"] }, { label: "Schedule", tools: ["calendar"] }],
        tierLabels: ["LinkedIn", "Blog", "Email"], middles: ["Post", "Publish", "Send"], outputs: ["Scheduled", "Live", "Sent"] },
    ],
  },
  {
    id: "client-relationships",
    icon: <Handshake className="h-4 w-4" strokeWidth={2} />,
    title: "Client Relationships",
    shortTitle: "Clients",
    description: "We keep every client warm, updated, and renewed before they think to ask.",
    workflows: [
      { name: "Followups", desc: "Never drop a thread again.", hue: "rose",
        inputs: ["Threads", "Cadence", "Voice"], stages: [{ label: "Track", tools: ["gmail", "slack"] }, { label: "Draft", tools: ["notion"] }],
        tierLabels: ["Hot", "Warm", "Cold"], middles: ["Reply", "Nudge", "Recap"], outputs: ["Sent", "Queued", "Logged"] },
      { name: "Weekly Reports", desc: "Polished client updates, every week.", hue: "amber",
        inputs: ["Activity", "Metrics", "Template"], stages: [{ label: "Collect", tools: ["slack", "sheets"] }, { label: "Draft & Send", tools: ["docs", "gmail"] }],
        tierLabels: ["Wins", "Progress", "Blockers"], middles: ["Highlight", "Summarize", "Flag"], outputs: ["Sent", "Logged", "Escalated"] },
      { name: "Relationship Building", desc: "Stay top of mind between projects.", hue: "teal",
        inputs: ["Clients", "Signals", "Occasions"], stages: [{ label: "Listen", tools: ["linkedin", "slack"] }, { label: "Reach Out", tools: ["gmail"] }],
        tierLabels: ["Wins", "Milestones", "Quiet"], middles: ["Congratulate", "Celebrate", "Check-in"], outputs: ["Note", "Shoutout", "Catch-up"] },
    ],
  },
  {
    id: "hiring-onboarding",
    icon: <Users className="h-4 w-4" strokeWidth={2} />,
    title: "Hiring & Onboarding",
    shortTitle: "Hiring",
    description: "We move candidates from applied to onboarded without the endless back and forth.",
    workflows: [
      { name: "Sourcing", desc: "Post roles, screen inbound.", hue: "emerald",
        inputs: ["Job Spec", "Channels", "ICP"], stages: [{ label: "Post", tools: ["linkedin"] }, { label: "Screen", tools: ["gmail"] }],
        tierLabels: ["Strong", "Maybe", "Pass"], middles: ["Advance", "Hold", "Reject"], outputs: ["Shortlist", "Replies", "Archive"] },
      { name: "Interviewing", desc: "Coordinate panels and prep.", hue: "teal",
        inputs: ["Shortlist", "Panel", "Slots"], stages: [{ label: "Coordinate", tools: ["calendar", "gmail"] }, { label: "Brief", tools: ["notion"] }],
        tierLabels: ["Onsite", "Phone", "Async"], middles: ["Schedule", "Prep", "Score"], outputs: ["Booked", "Briefs", "Scorecards"] },
      { name: "Onboarding", desc: "Provision and ramp new hires.", hue: "sky",
        inputs: ["New Hire", "Accounts", "Plan"], stages: [{ label: "Provision", tools: ["slack"] }, { label: "Brief", tools: ["notion"] }],
        tierLabels: ["Day 1", "Week 1", "Month 1"], middles: ["Setup", "Intro", "Train"], outputs: ["Access", "Plan", "Checklist"] },
    ],
  },
  {
    id: "sales-assistance",
    icon: <Target className="h-4 w-4" strokeWidth={2} />,
    title: "Sales Assistance",
    shortTitle: "Sales",
    description: "We keep the pipeline clean and moving, from call notes to followups to proposals.",
    workflows: [
      { name: "Call Analysis", desc: "Turn calls into actions.", hue: "amber",
        inputs: ["Recordings", "Playbook", "CRM"], stages: [{ label: "Transcribe", tools: ["zoom"] }, { label: "Extract", tools: ["notion"] }],
        tierLabels: ["Action", "Risk", "Note"], middles: ["Tasks", "Flags", "Summary"], outputs: ["Notes", "Actions", "CRM Sync"] },
      { name: "CRM Hygiene", desc: "Keep records clean and full.", hue: "teal",
        inputs: ["CRM", "Sources", "Rules"], stages: [{ label: "Scan", tools: ["hubspot", "salesforce"] }, { label: "Enrich", tools: ["linkedin"] }],
        tierLabels: ["Stale", "Dupes", "Gaps"], middles: ["Update", "Merge", "Fill"], outputs: ["Clean", "Enriched", "Logged"] },
      { name: "Followups", desc: "Move deals without nagging.", hue: "violet",
        inputs: ["Pipeline", "Stages", "Voice"], stages: [{ label: "Detect", tools: ["gmail"] }, { label: "Draft", tools: ["zoho"] }],
        tierLabels: ["Hot", "Warm", "Stalled"], middles: ["Send", "Sequence", "Revive"], outputs: ["Sent", "Cadence", "Proposals"] },
    ],
  },
  {
    id: "finance-admin",
    icon: <Calculator className="h-4 w-4" strokeWidth={2} />,
    title: "Finance & Admin",
    shortTitle: "Finance",
    description: "We assemble the reports, reconcile the books, and chase renewals before they slip.",
    workflows: [
      { name: "Invoicing", desc: "Draft, send, and chase invoices.", hue: "fuchsia",
        inputs: ["Work", "Rates", "Terms"], stages: [{ label: "Draft", tools: ["airtable"] }, { label: "Send", tools: ["gmail"] }],
        tierLabels: ["Due", "Sent", "Paid"], middles: ["Issue", "Remind", "Reconcile"], outputs: ["Invoice", "Reminder", "Receipt"] },
      { name: "Books", desc: "Categorize every transaction.", hue: "violet",
        inputs: ["Transactions", "Rules", "Accounts"], stages: [{ label: "Pull", tools: ["sheets"] }, { label: "Categorize", tools: ["notion"] }],
        tierLabels: ["Income", "Expense", "Transfer"], middles: ["Tag", "Match", "Flag"], outputs: ["Ledger", "Report", "Flags"] },
      { name: "Reporting", desc: "Assemble the numbers on time.", hue: "sky",
        inputs: ["Data", "Metrics", "Cadence"], stages: [{ label: "Aggregate", tools: ["sheets", "salesforce"] }, { label: "Build", tools: ["docs"] }],
        tierLabels: ["Weekly", "Monthly", "Quarterly"], middles: ["Update", "Review", "Forecast"], outputs: ["Dashboard", "Statement", "Deck"] },
    ],
  },
  {
    id: "ads-management",
    icon: <Megaphone className="h-4 w-4" strokeWidth={2} />,
    title: "Ads Management",
    description: "We launch campaigns, watch spend and ROAS, and pause the losers before budget leaks.",
    workflows: [
      { name: "Setup", desc: "Turn briefs into live campaigns.", hue: "cyan",
        inputs: ["Brief", "Audiences", "Creative"], stages: [{ label: "Build", tools: ["sheets"] }, { label: "Launch", tools: ["slack"] }],
        tierLabels: ["Search", "Social", "Display"], middles: ["Target", "Bid", "Creative"], outputs: ["Live", "Pixel", "Tracking"] },
      { name: "Monitor", desc: "Watch spend, ROAS, and pacing.", hue: "amber",
        inputs: ["Spend", "ROAS", "Pacing"], stages: [{ label: "Pull", tools: ["sheets"] }, { label: "Flag", tools: ["slack"] }],
        tierLabels: ["Winning", "Flat", "Bleeding"], middles: ["Scale", "Hold", "Pause"], outputs: ["Alerts", "Pacing", "Digest"] },
      { name: "Optimize", desc: "Reallocate budget, report results.", hue: "violet",
        inputs: ["Metrics", "Goals", "Cadence"], stages: [{ label: "Analyze", tools: ["sheets"] }, { label: "Report", tools: ["docs"] }],
        tierLabels: ["Scale", "Tune", "Cut"], middles: ["Adjust", "Test", "Reallocate"], outputs: ["Changes", "Report", "Forecast"] },
    ],
  },
];

/* --------------------------- CONNECTORS --------------------------- */
const LINE_DARK = "border-dashed border-zinc-700/70";
const LINE_LIGHT = "border-dashed border-black/15";
const THIRDS = ["16.667%", "50%", "83.333%"];

function Trunk({ h = 18, line }: { h?: number; line: string }) {
  return <div className={`mx-auto w-px border-l ${line}`} style={{ height: h }} />;
}
function ForkIn({ line }: { line: string }) {
  return (
    <div className="relative h-8">
      {THIRDS.map((l) => (
        <div key={l} className={`absolute top-0 h-1/2 w-px -translate-x-1/2 border-l ${line}`} style={{ left: l }} />
      ))}
      <div className={`absolute top-1/2 border-t ${line}`} style={{ left: "16.667%", right: "16.667%" }} />
      <div className={`absolute bottom-0 top-1/2 left-1/2 w-px -translate-x-1/2 border-l ${line}`} />
    </div>
  );
}
function ForkOut({ line }: { line: string }) {
  return (
    <div className="relative h-8">
      <div className={`absolute top-0 h-1/2 left-1/2 w-px -translate-x-1/2 border-l ${line}`} />
      <div className={`absolute top-1/2 border-t ${line}`} style={{ left: "16.667%", right: "16.667%" }} />
      {THIRDS.map((l) => (
        <div key={l} className={`absolute bottom-0 top-1/2 w-px -translate-x-1/2 border-l ${line}`} style={{ left: l }} />
      ))}
    </div>
  );
}
function Drops({ h = 16, line }: { h?: number; line: string }) {
  return (
    <div className="relative" style={{ height: h }}>
      {THIRDS.map((l) => (
        <div key={l} className={`absolute inset-y-0 w-px -translate-x-1/2 border-l ${line}`} style={{ left: l }} />
      ))}
    </div>
  );
}

/* ------------------------------ NODES ------------------------------ */

function IconChip({ tool }: { tool: string }) {
  const src = ICON[tool];
  if (!src) return null;
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded bg-white ring-1 ring-black/10">
      <Image src={src} alt="" width={12} height={12} className="h-3 w-3 object-contain" />
    </span>
  );
}
function Cell({ children }: { children: ReactNode }) {
  return <div className="mx-1">{children}</div>;
}

function Tree({
  wf,
  light = false,
}: {
  wf: Workflow;
  light?: boolean;
}) {
  const tones = PALETTES[wf.hue];
  const line = light ? LINE_LIGHT : LINE_DARK;
  return (
    <div>
      <div className="flex items-start gap-2.5">
        <span
          className={`ml-1 mt-[10px] h-2 w-2 shrink-0 ${
            light ? "bg-[#9ff690]" : "bg-emerald-400"
          }`}
        />
        <div>
          <h4
            className={light ? "text-xl text-black" : "text-[17px] font-medium text-zinc-100"}
            style={light ? { fontFamily: "var(--font-schibsted)" } : undefined}
          >
            {wf.name}
          </h4>
        </div>
      </div>

      <div className="mt-10 pb-6 md:pb-8">
        <div className="grid grid-cols-3">
          {wf.inputs.map((label) => (
            <Cell key={label}>
              <div
                className={`rounded-lg border px-1.5 py-2 text-center text-xs leading-tight ${
                  light
                    ? "border-black/10 bg-white text-[#555] shadow-[0_1px_0_rgba(0,0,0,0.02)]"
                    : "border-zinc-700/60 bg-zinc-900/40 text-zinc-300"
                }`}
              >
                {label}
              </div>
            </Cell>
          ))}
        </div>

        <ForkIn line={line} />

        {wf.stages.map((stage, i) => (
          <div key={stage.label}>
            {i > 0 && <Trunk line={line} />}
            <div
              className={`mx-auto w-fit max-w-full rounded-lg border px-3 py-2 text-center ${
                light
                  ? "border-black/10 bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.08)]"
                  : "border-zinc-700/60 bg-zinc-900/70 shadow-sm"
              }`}
            >
              <div className={`text-[13px] font-medium ${light ? "text-black" : "text-zinc-100"}`}>
                {stage.label}
              </div>
              <div className="mt-1.5 flex justify-center gap-1">
                {stage.tools.map((t) => (
                  <IconChip key={t} tool={t} />
                ))}
              </div>
            </div>
          </div>
        ))}

        <ForkOut line={line} />

        <div className="grid grid-cols-3">
          {wf.tierLabels.map((label, i) => (
            <Cell key={label}>
              <div className={`rounded-md bg-gradient-to-br ${tones[i].grad} px-1 py-2 text-center text-xs font-medium ${tones[i].text}`}>
                {label}
              </div>
            </Cell>
          ))}
        </div>

        <Drops line={line} />

        <div className="grid grid-cols-3">
          {wf.middles.map((label, i) => (
            <Cell key={label}>
              <div
                className={`rounded-lg border px-1 py-2 text-center text-xs leading-tight ${tones[i].tint} ${
                  light ? "!text-black/70" : ""
                }`}
              >
                {label}
              </div>
            </Cell>
          ))}
        </div>

        <Drops line={line} />

        <div className="grid grid-cols-3">
          {wf.outputs.map((label) => (
            <Cell key={label}>
              <div
                className={`flex items-center justify-center gap-1.5 rounded-lg border px-1 py-2 text-center ${
                  light ? "border-black/10 bg-white" : "border-zinc-800 bg-zinc-950"
                }`}
              >
                <CheckCircle2
                  className={`h-3.5 w-3.5 shrink-0 ${light ? "text-emerald-500" : "text-emerald-400"}`}
                  strokeWidth={2}
                />
                <span className={`text-xs leading-tight ${light ? "text-black/80" : "text-zinc-300"}`}>
                  {label}
                </span>
              </div>
            </Cell>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ MAIN ------------------------------ */

export function UseCases({
  tabStyle = "default",
}: {
  tabStyle?: "default" | "agentflow";
}) {
  const [active, setActive] = useState(0);
  const cat = categories[active];
  const agentflowTabs = tabStyle === "agentflow";

  if (agentflowTabs) {
    return (
      <div className="w-full overflow-hidden border border-black/[0.08] bg-white text-black shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_30px_60px_-32px_rgba(13,32,9,0.18)]">
        {/* Tabs */}
        <div className="grid w-full grid-cols-2 bg-[#fafafa] sm:grid-cols-3">
          {categories.map((c, i) => {
            const on = i === active;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={on}
                className={`group relative inline-flex min-h-[72px] cursor-pointer items-center justify-center gap-2.5 border-black/[0.06] px-3 py-3 text-[14.5px] font-medium transition focus:outline-none focus-visible:outline-none max-sm:border-b max-sm:[&:nth-child(2n)]:border-l sm:[&:not(:nth-child(3n+1))]:border-l sm:[&:nth-child(-n+6)]:border-b ${
                  c.id === "ads-management" ? "max-sm:hidden" : ""
                } ${
                  on
                    ? "z-10 bg-white text-black"
                    : "text-[#666] hover:bg-white hover:text-black"
                }`}
              >
                {on && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-[#9ff690]"
                  />
                )}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                    on
                      ? "bg-[#9ff690] text-[#0e2e07]"
                      : "bg-black/[0.04] text-[#555] group-hover:bg-black/[0.08]"
                  }`}
                >
                  {c.icon}
                </span>
                <span className="truncate">
                  {c.shortTitle ? (
                    <>
                      <span className="sm:hidden">{c.shortTitle}</span>
                      <span className="hidden sm:inline">{c.title}</span>
                    </>
                  ) : (
                    c.title
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Workflow tree panels, separated by hairlines */}
        <div className="grid border-t border-black/[0.06] bg-white lg:grid-cols-3">
          {cat.workflows.map((wf, i) => (
            <div
              key={wf.name}
              className={`w-full bg-white px-6 py-8 lg:px-7 lg:py-9 ${
                i > 0
                  ? "border-t border-black/[0.06] lg:border-l lg:border-t-0"
                  : ""
              }`}
            >
              <div className="mx-auto w-full max-w-sm lg:max-w-none">
                <Tree wf={wf} light />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-3xl border border-zinc-800/80 bg-zinc-900/20 p-5 md:p-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3">
        {categories.map((c, i) => {
          const on = i === active;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              className={`inline-flex items-center justify-center gap-2.5 rounded-lg border px-4 py-4 text-sm font-medium transition ${
                on
                  ? "border-emerald-400/40 bg-emerald-500/15 text-emerald-200"
                  : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
              }`}
            >
              <span className={on ? "text-emerald-300" : "text-zinc-500"}>
                {c.icon}
              </span>
              <span className="truncate">{c.title}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-10 text-left lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-zinc-800/70">
        {cat.workflows.map((wf) => (
          <div
            key={wf.name}
            className="mx-auto w-full max-w-sm lg:max-w-none lg:px-6 first:lg:pl-0 last:lg:pr-0"
          >
            <Tree wf={wf} />
          </div>
        ))}
      </div>
    </div>
  );
}
