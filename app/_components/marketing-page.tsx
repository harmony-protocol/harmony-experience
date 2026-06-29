import Image from "next/image";
import { Check, X, CircleCheck, CircleX } from "lucide-react";
import { headingStyle } from "../_lib/brand-fonts";
import { resolveIntegrationLogo } from "../_lib/integration-logos";
import {
  SolutionsShell,
  SolutionsSection,
  SolutionsSub,
} from "./solutions-shell";

const ACCENT = "#9ff690";
const CTA_ACCENT = "#9ff690";
const CAL_LINK = "harmony-vishal/discovery";
const CAL_CONFIG = JSON.stringify({ layout: "month_view", theme: "dark" });

/* ----------------------------- TYPES ----------------------------- */

export type AudienceConfig = {
  title: string;
  shortLabel: string;
  tagline: string;
  metaDescription: string;
  hero: { headline: string; subtitle: string };
  integrations?: { name: string; src: string }[];
  pain?: { eyebrow: string; headline: string; intro: string; items: string[] };
  turn?: { eyebrow: string; headline: string; body: string };
  personas?: { eyebrow: string; headline: string; items: string[] };
  shifts?: {
    eyebrow: string;
    headline: string;
    body?: string;
    items: { before: string; after: string }[];
  };
  features: { eyebrow: string; title: string; items: string[] }[];
  comparison?: boolean;
  closing: { eyebrow: string; headline: string; body: string };
};

const harmonyEdge = [
  "Pre-built world class AI platform",
  "Multifold faster deployment",
  "Niche expertise in services businesses",
  "Better user experience with our desktop app",
];

const agencyReality = [
  "Creates new solution from scratch everytime",
  "Expensive and slow",
  "No niche expertise",
  "Substandard user interface (if any)",
];

/* ----------------------------- ATOMS ----------------------------- */

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 border border-[#9ff690] bg-[rgba(162,249,147,0.10)] px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] text-white">
      <span className="h-1.5 w-1.5" style={{ backgroundColor: ACCENT }} />
      {children}
    </span>
  );
}

export function SectionHeading({
  as: Tag = "h2",
  children,
  className = "",
}: {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tag
      className={`max-w-2xl font-normal leading-[1.1] text-white ${
        Tag === "h1"
          ? "text-[40px] md:text-[56px]"
          : "text-[32px] md:text-[46px]"
      } ${className}`}
      style={headingStyle}
    >
      {children}
    </Tag>
  );
}

function PrimaryButton() {
  return (
    <button
      type="button"
      data-cal-link={CAL_LINK}
      data-cal-config={CAL_CONFIG}
      data-loc="marketing"
      className="group inline-flex h-10 cursor-pointer items-center gap-2 overflow-hidden pl-1 pr-3 text-base font-medium text-black transition hover:brightness-95"
      style={{ backgroundColor: CTA_ACCENT }}
    >
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden bg-black">
        <Image
          src="/assets/talk-to-sales-icon.svg"
          alt=""
          width={16}
          height={15}
          className="h-[15px] w-4 transition-transform duration-300 ease-out group-hover:translate-x-7"
        />
        <Image
          src="/assets/talk-to-sales-icon.svg"
          alt=""
          aria-hidden
          width={16}
          height={15}
          className="absolute h-[15px] w-4 -translate-x-7 transition-transform duration-300 ease-out group-hover:translate-x-0"
        />
      </span>
      <span>Book a free call</span>
    </button>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[17px] leading-8 text-white/70"
        >
          <span
            className="mt-3 h-1.5 w-1.5 shrink-0"
            style={{ backgroundColor: ACCENT }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="mt-5">
        <SectionHeading>{title}</SectionHeading>
      </div>
      {body ? <SolutionsSub className="mt-5">{body}</SolutionsSub> : null}
    </div>
  );
}

/* ----------------------------- TEMPLATE ----------------------------- */

export function MarketingPage({ audience }: { audience: AudienceConfig }) {
  return (
    <SolutionsShell>
      <SolutionsSection bordered={false}>
        <Eyebrow>{audience.shortLabel}</Eyebrow>
        <div className="mt-6 max-w-3xl">
          <SectionHeading as="h1">{audience.hero.headline}</SectionHeading>
        </div>
        <SolutionsSub className="mt-6 max-w-xl">{audience.hero.subtitle}</SolutionsSub>
        <div className="mt-8">
          <PrimaryButton />
        </div>
      </SolutionsSection>

      {audience.integrations && audience.integrations.length > 0 && (
        <SolutionsSection>
          <Eyebrow>Integrates with</Eyebrow>
          <div className="mt-10 grid w-full grid-cols-3 items-center gap-x-4 gap-y-8 lg:flex lg:justify-between lg:gap-y-0">
            {audience.integrations.slice(0, 6).map((tool) => {
              const logo = resolveIntegrationLogo(tool.src);
              return (
                <div
                  key={tool.name}
                  className="flex h-9 items-center justify-center lg:shrink-0"
                >
                  {logo.isFullLogo ? (
                    <Image
                      src={logo.src}
                      alt={tool.name}
                      width={logo.width}
                      height={logo.height}
                      className="h-9 w-auto max-w-full object-contain opacity-90 lg:max-w-[140px]"
                    />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Image
                        src={logo.src}
                        alt=""
                        width={logo.width}
                        height={logo.height}
                        className="h-7 w-7 shrink-0 object-contain opacity-90"
                      />
                      <span className="text-[17px] font-medium text-white/85">
                        {tool.name}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
            <span className="col-span-3 text-[17px] text-white/45 lg:col-span-1 lg:shrink-0">
              and more…
            </span>
          </div>
        </SolutionsSection>
      )}

      {audience.pain && (
        <SolutionsSection>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
            <SectionIntro
              eyebrow={audience.pain.eyebrow}
              title={audience.pain.headline}
              body={audience.pain.intro}
            />
            <div>
              {/* Invisible eyebrow + gap mirrors SectionIntro's spacing so the
                  bullets line up with the heading, not the eyebrow. */}
              <div aria-hidden className="invisible hidden lg:block">
                <Eyebrow>{audience.pain.eyebrow}</Eyebrow>
              </div>
              <div className="lg:mt-5">
                <BulletList items={audience.pain.items} />
              </div>
            </div>
          </div>
        </SolutionsSection>
      )}

      {audience.turn && (
        <SolutionsSection>
          <SectionIntro
            eyebrow={audience.turn.eyebrow}
            title={audience.turn.headline}
            body={audience.turn.body}
          />
          <div className="mt-8">
            <PrimaryButton />
          </div>
        </SolutionsSection>
      )}

      {audience.shifts && audience.shifts.items.length > 0 && (
        <SolutionsSection>
          <SectionIntro
            eyebrow={audience.shifts.eyebrow}
            title={audience.shifts.headline}
            body={audience.shifts.body}
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {/* Before card */}
            <div className="border border-[#f0908f]/25 bg-[#f0908f]/[0.04] p-6 md:p-8">
              <p className="text-[15px] font-medium uppercase tracking-[0.08em] text-[#f0908f]">
                Today
              </p>
              <ul className="mt-6 space-y-4">
                {audience.shifts.items.map((shift) => (
                  <li
                    key={shift.before}
                    className="flex items-start gap-2.5 text-[17px] leading-7 text-white/55"
                  >
                    <CircleX
                      aria-hidden
                      className="mt-1 h-[18px] w-[18px] shrink-0 text-[#f0908f]"
                      strokeWidth={1.6}
                    />
                    {shift.before}
                  </li>
                ))}
              </ul>
            </div>

            {/* After card */}
            <div className="relative overflow-hidden border border-[#9ff690]/30 bg-[#9ff690]/[0.05] p-6 md:p-8">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#9ff690]/15 blur-3xl"
              />
              <p className="relative text-[15px] font-medium uppercase tracking-[0.08em] text-[#9ff690]">
                With Harmony
              </p>
              <ul className="relative mt-6 space-y-4">
                {audience.shifts.items.map((shift) => (
                  <li
                    key={shift.after}
                    className="flex items-start gap-2.5 text-[17px] leading-7 text-white"
                  >
                    <CircleCheck
                      aria-hidden
                      className="mt-1 h-[18px] w-[18px] shrink-0 text-[#9ff690]"
                      strokeWidth={1.6}
                    />
                    {shift.after}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SolutionsSection>
      )}

      {audience.personas && (
        <SolutionsSection>
          <SectionIntro
            eyebrow={audience.personas.eyebrow}
            title={audience.personas.headline}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audience.personas.items.map((persona) => (
              <div
                key={persona}
                className="border border-white/10 bg-white/[0.03] px-5 py-4 text-[16px] leading-8 text-white/75"
              >
                {persona}
              </div>
            ))}
          </div>
        </SolutionsSection>
      )}

      {audience.features.length > 0 && (
        <SolutionsSection>
          <div className="max-w-2xl">
            <Eyebrow>What Harmony handles</Eyebrow>
            <div className="mt-5">
              <SectionHeading>Workflows we automate for you</SectionHeading>
            </div>
            <SolutionsSub className="mt-5">
              Built, managed, and improved by our team so you do not have to
              wire up another tool yourself.
            </SolutionsSub>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {audience.features.map((block) => (
              <div
                key={block.eyebrow}
                className="flex flex-col border border-white/10 bg-white/[0.03] p-7 md:p-8"
              >
                <Eyebrow>{block.eyebrow}</Eyebrow>
                <h3
                  className="mt-5 text-xl text-white"
                  style={headingStyle}
                >
                  {block.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[17px] leading-8 text-white/70"
                    >
                      <span
                        className="mt-3 h-1.5 w-1.5 shrink-0"
                        style={{ backgroundColor: ACCENT }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SolutionsSection>
      )}

      {audience.comparison !== false && (
        <SolutionsSection>
          <SectionIntro
            eyebrow="Why Harmony?"
            title="10× the work of a traditional agency."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="border border-white/10 bg-white/[0.03] p-7 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.06em] text-[#9ff690]">
                Harmony AI
              </p>
              <ul className="mt-6 space-y-4">
                {harmonyEdge.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[17px] leading-8 text-white/70"
                  >
                    <Check
                      className="mt-1.5 h-4 w-4 shrink-0 text-[#9ff690]"
                      strokeWidth={2.2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-white/10 bg-white/[0.03] p-7 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.06em] text-white/45">
                Traditional agencies
              </p>
              <ul className="mt-6 space-y-4">
                {agencyReality.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[17px] leading-8 text-white/45"
                  >
                    <X
                      className="mt-1.5 h-4 w-4 shrink-0 text-white/25"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SolutionsSection>
      )}

      <SolutionsSection bordered={false}>
        <div className="relative border border-white/10 bg-black p-7 md:p-10">
          <span className="absolute -left-px -top-px h-1.5 w-1.5 bg-white" />
          <span className="absolute -right-px -top-px h-1.5 w-1.5 bg-white" />
          <span className="absolute -bottom-px -left-px h-1.5 w-1.5 bg-white" />
          <span className="absolute -bottom-px -right-px h-1.5 w-1.5 bg-white" />

          <SectionIntro
            eyebrow={audience.closing.eyebrow}
            title={audience.closing.headline}
            body={audience.closing.body}
          />
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <PrimaryButton />
            <p className="text-[17px] text-white/45">Vishal Singh, Founder</p>
          </div>
        </div>
      </SolutionsSection>
    </SolutionsShell>
  );
}
