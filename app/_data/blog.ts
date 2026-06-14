import "server-only";
import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

// Single source of truth for the blog. Posts are plain .mdx files in
// /content/blog. Drop a new file in there (with an exported `meta`) and it shows
// up automatically, no registry to edit. Mirrors the data-driven pattern the
// rest of the site uses (audiences.json -> route).

export type PostMeta = {
  title: string;
  // 150-160 chars, used for <meta description> and the card blurb.
  description: string;
  // ISO date, e.g. "2026-06-14". Drives ordering and <time>/structured data.
  date: string;
  author: string;
  tags?: string[];
  // Short label shown centered over the card image (e.g. "Speed to Lead").
  // Falls back to the first tag when omitted.
  kicker?: string;
  // The hero / LCP image. Real dimensions are required so next/image reserves
  // space and avoids layout shift.
  hero?: { src: string; width: number; height: number; alt: string };
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

type PostModule = {
  default: ComponentType;
  meta: PostMeta;
};

export async function getPost(
  slug: string
): Promise<{ Post: ComponentType; meta: PostMeta } | null> {
  if (!getPostSlugs().includes(slug)) return null;
  const mod = (await import(`@/content/blog/${slug}.mdx`)) as unknown as PostModule;
  if (!mod.meta) return null;
  return { Post: mod.default, meta: mod.meta };
}

export async function getAllPosts(): Promise<
  { slug: string; meta: PostMeta }[]
> {
  const posts = await Promise.all(
    getPostSlugs().map(async (slug) => {
      const mod = (await import(
        `@/content/blog/${slug}.mdx`
      )) as unknown as PostModule;
      return mod.meta ? { slug, meta: mod.meta } : null;
    })
  );
  return posts
    .filter((p): p is { slug: string; meta: PostMeta } => p !== null)
    .sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));
}
