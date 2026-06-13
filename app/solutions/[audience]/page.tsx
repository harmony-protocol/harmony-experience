import type { Metadata } from "next";
import { notFound } from "next/navigation";
import audiences from "../../_data/audiences.json";
import {
  MarketingPage,
  type AudienceConfig,
} from "../../_components/marketing-page";

const data = audiences as Record<string, AudienceConfig>;

export function generateStaticParams() {
  return Object.keys(data).map((audience) => ({ audience }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ audience: string }>;
}): Promise<Metadata> {
  const { audience } = await params;
  const config = data[audience];
  if (!config) return {};
  return {
    title: config.title,
    description: config.metaDescription,
  };
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ audience: string }>;
}) {
  const { audience } = await params;
  const config = data[audience];
  if (!config) notFound();
  return <MarketingPage audience={config} />;
}
