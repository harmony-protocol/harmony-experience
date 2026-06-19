import type { Metadata } from "next";
import { getAllPosts } from "../_data/blog";
import { BlogIndex } from "../_components/blog-index";

const DESCRIPTION =
  "The Workflow Fix: playbooks, teardowns, and field notes on running your practice on autopilot with AI agents.";

const LINK_PREVIEW_IMAGE = "/assets/link-previews/blog.jpg";

export const metadata: Metadata = {
  title: "The Workflow Fix - Harmony AI",
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Workflow Fix - Harmony AI",
    description: DESCRIPTION,
    type: "website",
    url: "/blog",
    images: [
      {
        url: LINK_PREVIEW_IMAGE,
        width: 1920,
        height: 1080,
        alt: "The Workflow Fix blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [LINK_PREVIEW_IMAGE],
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  return <BlogIndex posts={posts} />;
}
