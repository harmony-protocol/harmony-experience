import Image from "next/image";
import {
  Check,
  X,
  CircleCheck,
  CircleX,
  MessagesSquare,
  Eye,
  LayoutDashboard,
  PartyPopper,
  CalendarCheck,
  LayersPlus,
  Repeat,
  Rocket,
} from "lucide-react";
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
    <span className="inline-flex w-fit items-center gap-1.5 border border-[#9ff690] bg-[#141d12] px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] text-white">
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

/* ----------------------------- DIAGRAMS ----------------------------- */

/* The four outcomes of an AI system, shown as a widening ramp from a small
   foundation to full scale. Mirrors the home page, kept to a few words. */
const outcomes = [
  { icon: <CalendarCheck className="h-5 w-5" strokeWidth={1.6} />, title: "Free up your day" },
  { icon: <LayersPlus className="h-5 w-5" strokeWidth={1.6} />, title: "Multiply your output" },
  { icon: <Repeat className="h-5 w-5" strokeWidth={1.6} />, title: "Automate the busywork" },
  { icon: <Rocket className="h-5 w-5" strokeWidth={1.6} />, title: "Run it all on autopilot" },
];

function OutcomesRamp() {
  return (
    <div className="mt-12 flex items-stretch gap-4 md:gap-6">
      {/* foundation-to-scale axis */}
      <div className="hidden flex-col items-center py-2 md:flex">
        <span className="text-[15px] font-medium text-white/40">Foundation</span>
        <div className="mt-3 w-px flex-1 bg-white/30" />
        <span
          className="h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent"
          style={{ borderTopColor: "rgba(255,255,255,0.3)" }}
        />
        <span className="mt-3 text-[15px] font-medium text-white/40">Scale</span>
      </div>

      {/* left-aligned ramp: narrow at the top, widening as it scales out */}
      <div className="flex w-full max-w-[760px] flex-col items-start gap-2.5">
        {outcomes.map((item, i) => {
          const width = ["md:w-[58%]", "md:w-[72%]", "md:w-[86%]", "md:w-full"][i];
          return (
            <div
              key={item.title}
              className={`flex w-full items-center gap-5 border border-[#9ff690]/30 bg-[#0c130b] px-5 py-4 md:px-7 md:py-5 ${width}`}
            >
              <span
                className="text-lg font-medium leading-none text-[#9ff690]/70 md:text-xl"
                style={headingStyle}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="text-[16px] leading-tight text-white md:text-[19px]"
                style={headingStyle}
              >
                {item.title}
              </h3>
              <span className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center text-[#9ff690]/70">
                {item.icon}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* A single box in the "how we work" flow. */
function FlowBox({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex w-full items-center gap-4 border border-white/10 bg-[#0c0d0c] px-5 py-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#9ff690]/40 bg-[rgba(159,246,144,0.10)] text-[#9ff690]">
        {icon}
      </span>
      <span className="text-[16px] leading-tight text-white">{title}</span>
    </div>
  );
}

const flowEntry = [
  { icon: <MessagesSquare className="h-5 w-5" strokeWidth={1.6} />, title: "You share a request" },
  { icon: <Eye className="h-5 w-5" strokeWidth={1.6} />, title: "We spot an opportunity" },
];
const flowSteps = [
  { icon: <LayoutDashboard className="h-5 w-5" strokeWidth={1.6} />, title: "Get the plan" },
  { icon: <CircleCheck className="h-5 w-5" strokeWidth={1.6} />, title: "You approve" },
  { icon: <PartyPopper className="h-5 w-5" strokeWidth={1.6} />, title: "Watch it go live" },
];

/* Two entry points branch-merge into a simple left-to-right flow. */
function ProcessFlow() {
  return (
    <>
      {/* Desktop */}
      <div className="mt-12 hidden items-stretch md:flex">
        <div className="flex flex-1 flex-col justify-center gap-5">
          <FlowBox {...flowEntry[0]} />
          <span className="self-start px-1 text-[13px] font-medium uppercase tracking-[0.12em] text-white/40">
            or
          </span>
          <FlowBox {...flowEntry[1]} />
        </div>

        <div className="relative w-12 shrink-0" aria-hidden>
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <path d="M0 25 H55 V50 H100" stroke="rgba(255,255,255,0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <path d="M0 75 H55 V50" stroke="rgba(255,255,255,0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        {flowSteps.map((box, i) => (
          <div key={box.title} className="contents">
            {i > 0 && (
              <div className="flex w-10 shrink-0 items-center" aria-hidden>
                <span className="h-px w-full bg-white/25" />
              </div>
            )}
            <div className="flex flex-1 items-center">
              <FlowBox {...box} />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="mt-10 md:hidden">
        <div className="grid w-full grid-cols-2 gap-3">
          <FlowBox {...flowEntry[0]} />
          <FlowBox {...flowEntry[1]} />
        </div>
        <div className="flex justify-center" aria-hidden>
          <span className="h-6 w-px bg-white/25" />
        </div>
        {flowSteps.map((box, i) => (
          <div key={box.title}>
            {i > 0 && (
              <div className="flex justify-center" aria-hidden>
                <span className="h-6 w-px bg-white/25" />
              </div>
            )}
            <FlowBox {...box} />
          </div>
        ))}
      </div>
    </>
  );
}

/* A new, very low-word diagram: the same workday before and after Harmony,
   as two split bars. Busywork shrinks, the real work fills the day. */
function WorkdaySplit() {
  return (
    <div className="mt-12 space-y-5">
      <div>
        <p className="mb-2.5 text-[14px] font-medium uppercase tracking-[0.08em] text-[#f0908f]">
          Your day today
        </p>
        <div className="flex h-14 w-full overflow-hidden border border-white/10">
          <div
            className="flex items-center justify-center bg-[#241616] text-[14px] text-white/75"
            style={{ width: "72%" }}
          >
            Busywork
          </div>
          <div className="flex flex-1 items-center justify-center bg-[#121312] text-[14px] text-white/45">
            The real work
          </div>
        </div>
      </div>
      <div>
        <p className="mb-2.5 text-[14px] font-medium uppercase tracking-[0.08em] text-[#9ff690]">
          Your day with Harmony
        </p>
        <div className="flex h-14 w-full overflow-hidden border border-white/10">
          <div
            className="flex items-center justify-center bg-[#121312] text-[14px] text-white/45"
            style={{ width: "18%" }}
          >
            Busywork
          </div>
          <div className="flex flex-1 items-center justify-center bg-[#1b2a18] text-[14px] text-white">
            The real work
          </div>
        </div>
      </div>
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

      <SolutionsSection>
        <SectionIntro
          eyebrow="Where your time goes"
          title="Spend the day on the work that matters."
        />
        <WorkdaySplit />
      </SolutionsSection>

      {audience.shifts && audience.shifts.items.length > 0 && (
        <SolutionsSection>
          <SectionIntro
            eyebrow={audience.shifts.eyebrow}
            title={audience.shifts.headline}
            body={audience.shifts.body}
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {/* Before card */}
            <div className="border border-[#f0908f]/25 bg-[#0d0808] p-6 md:p-8">
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
            <div className="relative overflow-hidden border border-[#9ff690]/30 bg-[#0a0f08] p-6 md:p-8">
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

      <SolutionsSection>
        <SectionIntro eyebrow="Outcomes" title="Why you need AI systems." />
        <OutcomesRamp />
      </SolutionsSection>

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
                className="border border-white/10 bg-[#0c0d0c] px-5 py-4 text-[16px] leading-8 text-white/75"
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
                className="flex flex-col border border-white/10 bg-[#0c0d0c] p-7 md:p-8"
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
            <div className="border border-white/10 bg-[#0c0d0c] p-7 md:p-8">
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
            <div className="border border-white/10 bg-[#0c0d0c] p-7 md:p-8">
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

      <SolutionsSection>
        <SectionIntro
          eyebrow="How we work"
          title="We work like your extended team."
        />
        <ProcessFlow />
      </SolutionsSection>

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
