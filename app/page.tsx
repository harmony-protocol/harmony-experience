import Link from "next/link";
import { ArrowRight } from "lucide-react";
import audiences from "./_data/audiences.json";
import type { AudienceConfig } from "./_components/marketing-page";

const data = audiences as Record<string, AudienceConfig>;

export default function Home() {
  const entries = Object.entries(data);

  return (
    <main className="relative isolate overflow-hidden bg-[#020202] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#141416_0%,#070708_44%,#020202_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(244,244,245,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(244,244,245,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12] [mask-image:linear-gradient(to_bottom,black_0%,transparent_72%)]" />

      <div
        className="mx-auto"
        style={{ maxWidth: 1224, width: "97%", padding: "140px 5px 128px 0" }}
      >
        <h1
          className="max-w-3xl font-['New_York',Georgia,ui-serif,serif] text-3xl font-medium leading-[1.15] tracking-[-0.025em] md:text-4xl"
          style={{
            backgroundImage:
              "linear-gradient(115deg,#fafaf9 0%,#d6d3d1 34%,#a1a1aa 58%,#e7e5e4 82%,#71717a 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
          }}
        >
          Choose your niche.
        </h1>

        <ul className="mt-10 grid gap-x-12 md:grid-cols-2 lg:grid-cols-3">
          {entries.map(([slug, audience]) => (
            <li
              key={slug}
              className="border-b border-zinc-800/80 last:border-b-0"
            >
              <Link
                href={`/${slug}`}
                className="group flex items-center justify-between py-5 transition"
              >
                <span className="font-['New_York',Georgia,ui-serif,serif] text-2xl font-medium tracking-tight text-zinc-300 transition group-hover:text-zinc-100">
                  {audience.shortLabel}
                </span>
                <ArrowRight
                  className="h-4 w-4 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-zinc-200"
                  strokeWidth={2}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
