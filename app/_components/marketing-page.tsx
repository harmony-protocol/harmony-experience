import Image from "next/image";
import { Check, X, ArrowRight } from "lucide-react";

/* ----------------------------- TYPES ----------------------------- */

export type AudienceConfig = {
  title: string;
  shortLabel: string;
  tagline: string;
  metaDescription: string;
  hero: { headline: string; subtitle: string };
  /** Per-audience integration logos. If omitted, the section is hidden. */
  integrations?: { name: string; src: string }[];
  pain?: { eyebrow: string; headline: string; intro: string; items: string[] };
  turn?: { eyebrow: string; headline: string; body: string };
  personas?: { eyebrow: string; headline: string; items: string[] };
  features: { eyebrow: string; title: string; items: string[] }[];
  /** Defaults to true. Set false in the JSON to hide the 10x vs 1x section. */
  comparison?: boolean;
  closing: { eyebrow: string; headline: string; body: string };
};

/* --------------------- CONSTANTS (shared all pages) --------------------- */

const harmonyEdge = [
  "Pre-built world class AI platform",
  "Multifold faster deployment",
  "Niche expertise in communication and admin work",
  "Better user experience with our desktop app",
];

const agencyReality = [
  "Creates new solution from scratch everytime",
  "Expensive and slow",
  "No niche expertise",
  "Substandard user interface (if any)",
];

/* ----------------------------- ATOMS ----------------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-3 text-sm font-medium uppercase text-zinc-500"
      style={{
        fontFamily: "var(--font-jetbrains)",
        letterSpacing: "0.16em",
      }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="max-w-2xl pb-1 font-['New_York',Georgia,ui-serif,serif] text-3xl font-medium leading-[1.2] tracking-[-0.025em] md:text-4xl"
      style={{
        backgroundImage:
          "linear-gradient(115deg,#fafaf9 0%,#d6d3d1 34%,#a1a1aa 58%,#e7e5e4 82%,#71717a 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </h2>
  );
}

function PrimaryCTA({ size = "md" }: { size?: "md" | "lg" }) {
  const padding = size === "lg" ? "px-5 py-2.5" : "px-4 py-2";
  return (
    <a
      href="https://cal.com/harmony-vishal/discovery"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg bg-zinc-100 ${padding} text-base font-medium text-zinc-950 transition hover:bg-white`}
    >
      Book a Call
      <ArrowRight className="h-4 w-4" strokeWidth={2} />
    </a>
  );
}

/* ----------------------------- TEMPLATE ----------------------------- */

export function MarketingPage({ audience }: { audience: AudienceConfig }) {
  return (
    <main className="relative isolate overflow-hidden bg-[#020202] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_60vmax_at_50%_0%,#141416_0%,#070708_44%,#020202_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(244,244,245,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(244,244,245,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12] [mask-image:linear-gradient(to_bottom,black_0%,transparent_72%)]" />

      <div
        className="mx-auto pt-32 pb-32 md:pt-[200px]"
        style={{ maxWidth: 720, width: "92%" }}
      >
        {/* 1. HERO */}
        <section>
          <h1
            className="max-w-3xl pb-2 font-['New_York',Georgia,ui-serif,serif] text-5xl font-medium leading-[1.1] tracking-[-0.035em] md:text-6xl"
            style={{
              backgroundImage:
                "linear-gradient(115deg,#fafaf9 0%,#d6d3d1 34%,#a1a1aa 58%,#e7e5e4 82%,#71717a 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            {audience.hero.headline}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            {audience.hero.subtitle}
          </p>
          <div className="mt-10">
            <PrimaryCTA size="lg" />
          </div>
        </section>

        {/* 2. INTEGRATES WITH (optional) */}
        {audience.integrations && audience.integrations.length > 0 && (
          <section className="mt-20">
            <p
              className="text-sm font-medium uppercase text-zinc-500"
              style={{
                fontFamily: "var(--font-jetbrains)",
                letterSpacing: "0.16em",
              }}
            >
              Integrates with
            </p>
            <div className="mt-8 flex max-w-xl flex-wrap items-center gap-x-8 gap-y-5">
              {audience.integrations.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2.5 opacity-90"
                >
                  <Image
                    src={tool.src}
                    alt={tool.name}
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] object-contain"
                  />
                  <span className="text-lg text-zinc-200">{tool.name}</span>
                </div>
              ))}
              <span className="text-lg text-zinc-500">and more…</span>
            </div>
          </section>
        )}

        {/* 3. PAIN (optional) */}
        {audience.pain && (
          <section className="mt-32">
            <Eyebrow>{audience.pain.eyebrow}</Eyebrow>
            <SectionHeading>{audience.pain.headline}</SectionHeading>
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              {audience.pain.intro}
            </p>
            <ul className="mt-10 max-w-xl space-y-4">
              {audience.pain.items.map((pain) => (
                <li
                  key={pain}
                  className="flex items-start gap-4 text-lg leading-8 text-zinc-300"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                  {pain}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 4. TURN (optional) */}
        {audience.turn && (
          <section className="mt-32">
            <Eyebrow>{audience.turn.eyebrow}</Eyebrow>
            <SectionHeading>{audience.turn.headline}</SectionHeading>
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              {audience.turn.body}
            </p>
            <div className="mt-10">
              <PrimaryCTA />
            </div>
          </section>
        )}

        {/* 5. PERSONAS (optional) */}
        {audience.personas && (
          <section className="mt-32">
            <Eyebrow>{audience.personas.eyebrow}</Eyebrow>
            <SectionHeading>{audience.personas.headline}</SectionHeading>
            <div className="mt-10 flex flex-wrap gap-2">
              {audience.personas.items.map((persona) => (
                <span
                  key={persona}
                  className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3.5 py-1.5 text-sm text-zinc-300"
                >
                  {persona}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 6. FEATURE BLOCKS */}
        {audience.features.map((block) => (
          <section key={block.eyebrow} className="mt-32">
            <Eyebrow>{block.eyebrow}</Eyebrow>
            <SectionHeading>{block.title}</SectionHeading>
            <ul className="mt-10 max-w-md space-y-4">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 text-lg leading-8 text-zinc-100"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/40">
                    <Check
                      className="h-3.5 w-3.5 text-emerald-300"
                      strokeWidth={2.5}
                    />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <PrimaryCTA />
            </div>
          </section>
        ))}

        {/* 7. COMPARISON (defaults to true; set comparison: false to hide) */}
        {audience.comparison !== false && (
        <section className="mt-32">
          <Eyebrow>Why Harmony?</Eyebrow>
          <SectionHeading>10× the work of a traditional agency.</SectionHeading>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="text-sm font-medium uppercase text-emerald-300/80"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    letterSpacing: "0.16em",
                  }}
                >
                  Harmony AI
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                {harmonyEdge.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-lg leading-8 text-zinc-200"
                  >
                    <Check
                      className="mt-1.5 h-4 w-4 shrink-0 text-emerald-400"
                      strokeWidth={2.2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span
                  className="text-sm font-medium uppercase text-zinc-500"
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    letterSpacing: "0.16em",
                  }}
                >
                  Traditional agencies
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                {agencyReality.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-lg leading-8 text-zinc-500"
                  >
                    <X
                      className="mt-1.5 h-4 w-4 shrink-0 text-zinc-600"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        )}

        {/* 8. FINAL CTA */}
        <section className="mt-32">
          <Eyebrow>{audience.closing.eyebrow}</Eyebrow>
          <SectionHeading>{audience.closing.headline}</SectionHeading>
          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            {audience.closing.body}
          </p>
          <div className="mt-10">
            <PrimaryCTA size="lg" />
          </div>
          <p className="mt-8 text-lg text-zinc-500">Vishal Singh, Founder</p>
        </section>
      </div>
    </main>
  );
}
