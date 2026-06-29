import type { MetadataRoute } from "next";
import { getAllPosts } from "./_data/blog";

const SITE_URL = "https://getharmony.ai";

// Static, mostly-stable marketing routes.
const STATIC_PATHS = [
  "",
  "/about",
  "/contact",
  "/solutions",
  "/blog",
  "/privacy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const posts = await getAllPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map(({ slug, meta }) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(meta.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
