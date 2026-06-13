"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import {
  Calculator,
  Handshake,
  ListChecks,
  Megaphone,
  Settings2,
  Target,
} from "lucide-react";

const ACCENT = "#9ff690";

type Workflow = {
  name: string;
  summary: string;
  inputs: [string, string, string];
  process: [string, string, string];
  outputs: [string, string, string];
};

type WorkflowArea = {
  id: string;
  icon: ReactNode;
  title: string;
  body: string;
  workflows: [Workflow, Workflow, Workflow];
};

const workflowAreas: WorkflowArea[] = [
  {
    id: "personal-productivity",
    icon: <ListChecks className="h-4 w-4" strokeWidth={1.8} />,
    title: "Personal Productivity",
    body: "Your inbox, calendar, and todo list, managed for you.",
    workflows: [
      {
        name: "Inbox Triage",
        summary: "Sort every thread, draft replies, and surface what needs you.",
        inputs: ["Inbox", "Rules", "Voice"],
        process: ["Classify", "Draft", "Route"],
        outputs: ["Replies", "Priority list", "Followups"],
      },
      {
        name: "Meeting Prep",
        summary: "Collect context before each call and turn notes into next steps.",
        inputs: ["Calendar", "CRM", "Docs"],
        process: ["Research", "Brief", "Summarize"],
        outputs: ["Prep note", "Call notes", "Tasks"],
      },
      {
        name: "Daily Digest",
        summary: "Start the day with priorities, blockers, and deadlines ranked.",
        inputs: ["Tasks", "Email", "Schedule"],
        process: ["Gather", "Rank", "Package"],
        outputs: ["Top 3", "Time blocks", "Risks"],
      },
    ],
  },
  {
    id: "marketing-workflows",
    icon: <Megaphone className="h-4 w-4" strokeWidth={1.8} />,
    title: "Marketing Workflows",
    body: "Content, campaigns, and reporting that ship on schedule.",
    workflows: [
      {
        name: "Content Drafts",
        summary: "Turn briefs, calls, and ideas into ready-to-edit campaign assets.",
        inputs: ["Ideas", "Voice", "Offers"],
        process: ["Research", "Draft", "Review"],
        outputs: ["Posts", "Emails", "Scripts"],
      },
      {
        name: "Campaign Reporting",
        summary: "Pull performance data and summarize what changed each week.",
        inputs: ["Ads", "CRM", "Sheets"],
        process: ["Sync", "Analyze", "Explain"],
        outputs: ["Report", "Insights", "Actions"],
      },
      {
        name: "Lead Magnet Followup",
        summary: "Trigger personalized sequences as soon as a prospect engages.",
        inputs: ["Forms", "Segments", "Intent"],
        process: ["Score", "Personalize", "Send"],
        outputs: ["Sequence", "CRM log", "Alert"],
      },
    ],
  },
  {
    id: "operations",
    icon: <Settings2 className="h-4 w-4" strokeWidth={1.8} />,
    title: "Operations",
    body: "The repeat processes that keep the business running.",
    workflows: [
      {
        name: "Client Onboarding",
        summary: "Move a signed client through setup without missed handoffs.",
        inputs: ["Contract", "Intake", "Owners"],
        process: ["Create", "Assign", "Track"],
        outputs: ["Checklist", "Tasks", "Status"],
      },
      {
        name: "Project Updates",
        summary: "Collect activity across tools and package it into clean updates.",
        inputs: ["Boards", "Messages", "Dates"],
        process: ["Collect", "Summarize", "Send"],
        outputs: ["Status", "Risks", "Next steps"],
      },
      {
        name: "Invoice Chasing",
        summary: "Watch due dates, send reminders, and escalate overdue invoices.",
        inputs: ["Invoices", "Terms", "Contacts"],
        process: ["Watch", "Remind", "Escalate"],
        outputs: ["Reminder", "Receipt", "Alert"],
      },
    ],
  },
  {
    id: "customer-relationships",
    icon: <Handshake className="h-4 w-4" strokeWidth={1.8} />,
    title: "Customer Relationships",
    body: "Every client feels like your only client.",
    workflows: [
      {
        name: "Check-ins",
        summary: "Keep clients warm with timely, context-aware updates.",
        inputs: ["Accounts", "Activity", "Cadence"],
        process: ["Detect", "Draft", "Send"],
        outputs: ["Email", "CRM note", "Reminder"],
      },
      {
        name: "Renewal Nudges",
        summary: "Start renewal motion early with usage, value, and timing context.",
        inputs: ["Contracts", "Dates", "Usage"],
        process: ["Monitor", "Prep", "Nudge"],
        outputs: ["Renewal task", "Email", "Quote"],
      },
      {
        name: "Feedback Routing",
        summary: "Capture feedback, classify it, and route it to the right owner.",
        inputs: ["Forms", "Emails", "Calls"],
        process: ["Extract", "Tag", "Route"],
        outputs: ["Issue", "Praise", "Followup"],
      },
    ],
  },
  {
    id: "sales-assistance",
    icon: <Target className="h-4 w-4" strokeWidth={1.8} />,
    title: "Sales Assistance",
    body: "Speed to lead, without you watching the inbox.",
    workflows: [
      {
        name: "Speed to Lead",
        summary: "Reply fast, qualify fit, and put serious leads in front of you.",
        inputs: ["Form", "Website", "Inbox"],
        process: ["Score", "Reply", "Book"],
        outputs: ["Response", "Meeting", "CRM log"],
      },
      {
        name: "CRM Updates",
        summary: "Turn calls and emails into clean pipeline records automatically.",
        inputs: ["Calls", "Emails", "Deals"],
        process: ["Extract", "Update", "Flag"],
        outputs: ["Fields", "Tasks", "Risks"],
      },
      {
        name: "Proposal Drafts",
        summary: "Assemble scope, pricing, and context into proposal first drafts.",
        inputs: ["Notes", "Pricing", "Templates"],
        process: ["Map", "Draft", "Package"],
        outputs: ["Proposal", "Quote", "Email"],
      },
    ],
  },
  {
    id: "finance-admin",
    icon: <Calculator className="h-4 w-4" strokeWidth={1.8} />,
    title: "Finance & Admin",
    body: "The back office, quietly handled.",
    workflows: [
      {
        name: "Payment Tracking",
        summary: "Monitor invoices, payment status, and expected cash movement.",
        inputs: ["Invoices", "Bank", "CRM"],
        process: ["Match", "Update", "Notify"],
        outputs: ["Paid log", "Aging", "Alert"],
      },
      {
        name: "Expense Categorization",
        summary: "Classify expenses and flag items that need review.",
        inputs: ["Receipts", "Cards", "Rules"],
        process: ["Read", "Categorize", "Flag"],
        outputs: ["Ledger", "Review queue", "Summary"],
      },
      {
        name: "Cash Flow Summary",
        summary: "Package weekly inflows, outflows, and upcoming obligations.",
        inputs: ["Revenue", "Spend", "Due dates"],
        process: ["Aggregate", "Forecast", "Explain"],
        outputs: ["Summary", "Forecast", "Actions"],
      },
    ],
  },
];

function WorkflowCard({ workflow }: { workflow: Workflow }) {
  return (
    <div className="flex min-h-[380px] flex-col rounded-xl border border-black/10 bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      <div className="flex h-10 w-10 items-center justify-center bg-black text-black">
        <span className="h-2.5 w-2.5" style={{ backgroundColor: ACCENT }} />
      </div>
      <h3
        className="mt-5 text-xl text-black"
        style={{ fontFamily: "var(--font-schibsted)" }}
      >
        {workflow.name}
      </h3>
      <p className="mt-2 min-h-[54px] text-[14px] leading-6 text-[#555]">
        {workflow.summary}
      </p>

      <div className="mt-6 space-y-4">
        {[
          ["Inputs", workflow.inputs],
          ["System", workflow.process],
          ["Outputs", workflow.outputs],
        ].map(([label, items]) => (
          <div key={label as string}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-black/35">
              {label as string}
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(items as string[]).map((item, i) => (
                <span
                  key={item}
                  className={`flex min-h-12 items-center justify-center border px-2 text-center text-[11px] leading-tight ${
                    label === "System" && i === 1
                      ? "border-transparent text-black"
                      : "border-black/10 bg-[#fafafa] text-[#555]"
                  }`}
                  style={
                    label === "System" && i === 1
                      ? { backgroundColor: ACCENT }
                      : undefined
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkflowUseCases() {
  const [active, setActive] = useState(0);
  const area = workflowAreas[active];

  return (
    <div className="mt-12 w-full overflow-hidden rounded-xl border border-black/10 bg-white">
      <div className="grid border-b border-black/10 bg-[#fbfbfb] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {workflowAreas.map((item, i) => {
          const selected = i === active;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              className={`flex min-h-20 items-center justify-center gap-2.5 border-b border-black/10 px-4 text-center text-[14px] font-medium transition sm:[&:nth-child(2n)]:border-l lg:[&:nth-child(2n)]:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l xl:border-b-0 xl:[&:not(:first-child)]:border-l ${
                selected
                  ? "bg-[#e9fddf] text-black"
                  : "bg-white text-[#555] hover:bg-[#fafafa] hover:text-black"
              }`}
              aria-pressed={selected}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center bg-black ${
                  selected ? "text-[#9ff690]" : "text-white/60"
                }`}
              >
                {item.icon}
              </span>
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-[#fafafa] p-5 md:p-7">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-black/35">
              Active panel
            </p>
            <h3
              className="mt-1 text-2xl text-black"
              style={{ fontFamily: "var(--font-schibsted)" }}
            >
              {area.title}
            </h3>
          </div>
          <p className="max-w-md text-[14px] leading-6 text-[#555] md:text-right">
            {area.body}
          </p>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-3">
          {area.workflows.map((workflow) => (
            <WorkflowCard key={workflow.name} workflow={workflow} />
          ))}
        </div>
      </div>
    </div>
  );
}
