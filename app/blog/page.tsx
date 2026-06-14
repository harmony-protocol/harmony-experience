import type { Metadata } from "next";
import { getAllPosts } from "../_data/blog";
import { BlogIndex } from "../_components/blog-index";

const DESCRIPTION =
  "The Workflow Fix: playbooks, teardowns, and field notes on running your practice on autopilot with AI agents.";

export const metadata: Metadata = {
  title: "The Workflow Fix - Harmony AI",
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Workflow Fix - Harmony AI",
    description: DESCRIPTION,
    type: "website",
    url: "/blog",
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  return <BlogIndex posts={posts} />;
}
