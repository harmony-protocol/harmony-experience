import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPostSlugs } from "../../_data/blog";
import { BlogSubscribe } from "./_components/blog-subscribe";

const SITE_URL = "https://getharmony.ai";

// Prerender every post at build time, and 404 anything not in /content/blog.
export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}
export const dynamicParams = false;

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

// Author headshots, keyed by the name used in each post's `meta.author`.
const AUTHOR_AVATARS: Record<string, string> = {
  "Vishal Singh": "/blog-author-dp/vishal.webp",
};

// Avatar + name + date byline. `center` for the one under the hero.
function ByLine({
  author,
  date,
  center,
}: {
  author: string;
  date: string;
  center?: boolean;
}) {
  const avatar = AUTHOR_AVATARS[author];
  return (
    <div
      className={`flex items-center gap-3 text-base text-white/50 ${
        center ? "justify-center" : ""
      }`}
      style={{ fontFamily: "var(--font-jetbrains)" }}
    >
      {avatar ? (
        <Image
          src={avatar}
          alt={author}
          width={400}
          height={400}
          className="h-7 w-7 rounded-full object-cover"
        />
      ) : null}
      <span className="relative top-[2px] inline-flex items-center gap-3">
        <span className="text-white/70">{author}</span>
        <span aria-hidden>·</span>
        <time dateTime={date}>{formatDate(date)}</time>
      </span>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const { meta } = post;
  const url = `/blog/${slug}`;
  const images = meta.hero ? [meta.hero.src] : undefined;
  return {
    title: `${meta.title} - Harmony AI`,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      url,
      publishedTime: meta.date,
      authors: [meta.author],
      tags: meta.tags,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const { Post, meta } = post;

  // BlogPosting structured data for rich results. Absolute URLs required.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.date,
    author: { "@type": "Person", name: meta.author },
    publisher: {
      "@type": "Organization",
      name: "Harmony AI",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logo-full-dark.png`,
      },
    },
    image: meta.hero ? `${SITE_URL}${meta.hero.src}` : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
  };

  return (
    <article
      className="mx-auto w-[92%] max-w-[920px]"
      style={{ padding: "120px 0 128px", fontFamily: "var(--font-geist-sans)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <nav
        className="flex items-center justify-center gap-2 text-sm text-white/45"
        style={{ fontFamily: "var(--font-jetbrains)" }}
        aria-label="Breadcrumbs"
      >
        <Link href="/blog" className="transition hover:text-white">
          Blog
        </Link>
        {meta.tags?.[0] ? (
          <>
            <span aria-hidden>/</span>
            <span>{meta.tags[0]}</span>
          </>
        ) : null}
      </nav>

      {/* Title, centered */}
      <h1
        className="mx-auto mt-5 max-w-[820px] text-center font-normal leading-[1.1] text-white text-[34px] md:text-[48px]"
        style={{ fontFamily: "var(--font-schibsted)" }}
      >
        {meta.title}
      </h1>

      {/* Wide hero (LCP: eager) */}
      {meta.hero ? (
        <Image
          src={meta.hero.src}
          alt={meta.hero.alt}
          width={meta.hero.width}
          height={meta.hero.height}
          priority
          sizes="(max-width: 920px) 92vw, 920px"
          className="mt-10 h-auto w-full rounded-2xl"
        />
      ) : null}

      {/* Author + date, centered */}
      <div className="mt-8">
        <ByLine author={meta.author} date={meta.date} center />
      </div>

      {/* Body, centered reading column */}
      <div className="mx-auto mt-14 max-w-[720px]">
        <Post />
      </div>

      {/* Newsletter subscribe */}
      <div className="mx-auto mt-16 max-w-[720px] border-t border-white/10 pt-12">
        <BlogSubscribe />
      </div>
    </article>
  );
}
