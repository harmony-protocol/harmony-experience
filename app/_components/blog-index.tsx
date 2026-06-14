"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PostMeta } from "../_data/blog";

const ACCENT = "#9ff690";

type Post = { slug: string; meta: PostMeta };

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

// The green-dot category pill used across the site.
function Pill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex w-fit items-center gap-1.5 border border-[#9ff690] bg-[rgba(162,249,147,0.10)] px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] text-white"
      style={{ fontFamily: "var(--font-jetbrains)" }}
    >
      <span className="h-1.5 w-1.5" style={{ backgroundColor: ACCENT }} />
      {label}
    </span>
  );
}

// Vertical separators between columns (Linear-style): a left rule on every
// card that is not the first in its row, with matching gutters so the dividers
// sit centered. Rules are per-breakpoint because column counts change.
const SEPARATORS = [
  // 2 columns (sm up to lg only): divider before the 2nd card in each row.
  // Scoped with max-lg so these never leak into the 3-column layout, where the
  // higher-specificity nth-child rule would otherwise win and draw a stray line
  // on the first card of a row.
  "sm:max-lg:[&:nth-child(2n)]:border-l sm:max-lg:[&:nth-child(2n)]:border-white/10",
  "sm:max-lg:[&:nth-child(2n)]:pl-8 sm:max-lg:[&:nth-child(2n-1)]:pr-8",
  // 3 columns (lg+): divider before any card that is not 1st in its row.
  "lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:border-white/10",
  "lg:[&:not(:nth-child(3n+1))]:pl-8 lg:[&:not(:nth-child(3n))]:pr-8",
].join(" ");

// Linear-style card: image, title, description, then an "Author · Date" meta
// line. Flat on black, no border box.
function Card({ post }: { post: Post }) {
  const { slug, meta } = post;
  return (
    <Link href={`/blog/${slug}`} className={`group flex flex-col ${SEPARATORS}`}>
      <div className="relative h-48 overflow-hidden rounded-md">
        {meta.hero ? (
          <Image
            src={meta.hero.src}
            alt={meta.hero.alt}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 360px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-white/[0.03]">
            <span
              className="px-6 text-center font-normal text-white/80 text-xl"
              style={{ fontFamily: "var(--font-schibsted)" }}
            >
              {meta.tags?.[0] ?? "The Workflow Fix"}
            </span>
          </div>
        )}
      </div>

      <h3
        className="mt-6 font-normal leading-[1.25] text-white text-[20px] md:text-[22px] transition group-hover:text-white/75"
        style={{ fontFamily: "var(--font-schibsted)" }}
      >
        {meta.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-white/55 line-clamp-3">
        {meta.description}
      </p>

      <div
        className="mt-4 flex items-center text-sm text-white/45"
        style={{ fontFamily: "var(--font-jetbrains)" }}
      >
        <span>{meta.author}</span>
        <span className="mx-1.5">·</span>
        <time dateTime={meta.date}>{formatDate(meta.date)}</time>
      </div>
    </Link>
  );
}

export function BlogIndex({ posts }: { posts: Post[] }) {
  const tags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.meta.tags?.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, [posts]);

  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? posts
      : posts.filter((p) => p.meta.tags?.includes(active));

  return (
    <div
      className="mx-auto w-[92%] max-w-[1200px]"
      style={{ padding: "140px 0 128px", fontFamily: "var(--font-geist-sans)" }}
    >
      {/* Hero */}
      <header>
        <Pill label="Blog" />
        <h1
          className="mt-5 font-normal leading-[1.1] text-white text-[40px] md:text-[56px]"
          style={{ fontFamily: "var(--font-schibsted)" }}
        >
          The Workflow Fix
        </h1>

        {/* Filter row (replaces the description) */}
        <nav className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-b border-white/10 pb-1">
          {tags.map((tag) => {
            const isActive = tag === active;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActive(tag)}
                className={`-mb-px cursor-pointer border-b-2 pb-3 text-base transition ${
                  isActive
                    ? "border-[#9ff690] text-white"
                    : "border-transparent text-white/45 hover:text-white/75"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Cards grid */}
      {filtered.length === 0 ? (
        <p className="mt-16 text-lg leading-8 text-white/60">
          No posts in this category yet.
        </p>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Card key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
