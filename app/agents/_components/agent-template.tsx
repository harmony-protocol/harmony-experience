import Image from "next/image";
import Link from "next/link";
import { GetAgentCta } from "./get-agent-cta";
import { MermaidDiagram } from "./mermaid-diagram";

interface Agent {
  id: string;
  slug: string;
  title: string;
  name: string;
  description: string;
  mascot: string;
  benefits: string[];
  features: string[];
  integrations: string[];
  roles: string[];
  diagram: string;
}

const integrationLabels: Record<string, string> = {
  gmail: "Gmail",
  google_calendar: "Calendar",
  slack: "Slack",
  google_sheets: "Sheets",
  microsoft_teams: "Teams",
  granola: "Granola",
  notion: "Notion",
  airtable: "Airtable",
  jira: "Jira",
  hubspot: "HubSpot",
  telegram: "Telegram",
  zoom: "Zoom",
  claude: "Claude",
};

export function AgentTemplate({ agent }: { agent: Agent }) {
  return (
    <div
      className="mx-auto"
      style={{ maxWidth: 1224, width: "97%", padding: "112px 5px 96px" }}
    >
      {/* Back link */}
      <Link
        href="/agents"
        className="inline-flex items-center gap-2.5 text-base text-zinc-500 transition hover:text-zinc-300 mb-8"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        Back
      </Link>

      {/* Header — mascot + title + description inline, matching harmony-desktop */}
      <div className="flex items-start gap-4 mb-12">
        <Image
          src={agent.mascot}
          alt={agent.name}
          width={56}
          height={56}
          className="h-14 w-14 object-contain"
        />
        <div>
          <h1 className="text-2xl font-medium text-zinc-100 tracking-tight">
            {agent.title}
          </h1>
          <p className="text-base text-zinc-400 mt-1">
            {agent.name} {agent.description.charAt(0).toLowerCase() + agent.description.slice(1)}
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-12">
        <h2
          className="text-sm font-medium uppercase tracking-wider text-zinc-500 mb-5"
          style={{ fontFamily: "var(--font-jetbrains)", fontSize: 13 }}
        >
          Benefits
        </h2>
        <ul className="flex flex-col gap-4">
          {agent.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 text-base text-zinc-300"
            >
              <svg
                className="mt-1 h-4 w-4 shrink-0 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Best for */}
      <div className="mb-12">
        <h2
          className="text-sm font-medium uppercase tracking-wider text-zinc-500 mb-5"
          style={{ fontFamily: "var(--font-jetbrains)", fontSize: 13 }}
        >
          Best For
        </h2>
        <div className="flex flex-wrap gap-3">
          {agent.roles.map((role) => (
            <span
              key={role}
              className="rounded-none border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Integrations */}
      <div className="mb-12">
        <h2
          className="text-sm font-medium uppercase tracking-wider text-zinc-500 mb-5"
          style={{ fontFamily: "var(--font-jetbrains)", fontSize: 13 }}
        >
          Integrations
        </h2>
        <div className="flex flex-wrap gap-4">
          {agent.integrations.map((integration) => (
            <div
              key={integration}
              className="flex items-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5"
            >
              <Image
                src={["claude", "telegram"].includes(integration) ? `/assets/integrations/icon/svg/${integration}.svg` : `/assets/integrations/icon/${integration}.webp`}
                alt={integrationLabels[integration] || integration}
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              <span className="text-sm text-zinc-300">
                {integrationLabels[integration] || integration}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-12">
        <h2
          className="text-sm font-medium uppercase tracking-wider text-zinc-500 mb-5"
          style={{ fontFamily: "var(--font-jetbrains)", fontSize: 13 }}
        >
          How It Works
        </h2>
        <MermaidDiagram chart={agent.diagram} />
      </div>

      {/* Features */}
      <div className="mb-12">
        <h2
          className="text-sm font-medium uppercase tracking-wider text-zinc-500 mb-5"
          style={{ fontFamily: "var(--font-jetbrains)", fontSize: 13 }}
        >
          Features
        </h2>
        <ul className="flex flex-col gap-4">
          {agent.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-base text-zinc-400"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <GetAgentCta agentName={agent.name} />
    </div>
  );
}
