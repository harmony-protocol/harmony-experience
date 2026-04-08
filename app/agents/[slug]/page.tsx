import { notFound } from "next/navigation";
import agents from "../_data/agents.json";
import { AgentTemplate } from "../_components/agent-template";

export function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }));
}

export default async function AgentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = agents.find((a) => a.slug === slug);

  if (!agent) {
    notFound();
  }

  return <AgentTemplate agent={agent} />;
}
