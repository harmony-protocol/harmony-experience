import type { Metadata } from "next";
import { Cabin, Schibsted_Grotesk } from "next/font/google";
import Image from "next/image";
import {
  Bot,
  Briefcase,
  CalendarCheck,
  ChartNoAxesCombined,
  CircleDollarSign,
  Database,
  Globe,
  Landmark,
  LayersPlus,
  LayoutDashboard,
  Lock,
  Magnet,
  MessagesSquare,
  Monitor,
  Repeat,
  Rocket,
  Server,
  ShoppingBag,
  Sparkles,
  Workflow,
} from "lucide-react";
import { HeroVideo } from "./_components/hero-video";
import { ViewTracker } from "./_components/view-tracker";
import { Solutions } from "./_components/solutions";
import { IntegrationsRow } from "./_components/features";
import { Comparison } from "./_components/comparison";
import { Faq } from "./_components/faq";
import { UseCases } from "./_components/use-cases";
import { CaseStudies } from "./_components/case-studies";
import { ReclaimCalculator } from "./_components/reclaim-calculator";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-schibsted",
});

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cabin",
});

const ACCENT = "#9ff690";
const CTA_ACCENT = "#9ff690";
const CAL_LINK = "harmony-vishal/discovery";
const CAL_CONFIG = JSON.stringify({ layout: "month_view", theme: "dark" });

export const metadata: Metadata = {
  title: "Harmony | AI Automations for B2B Teams",
  description:
    "Harmony is an AI automation agency for B2B teams. We build the agents and workflows that run customer success, hiring and onboarding, and team productivity in the background, so you can lead the business instead of the busywork.",
};

/* ------------------------------ ATOMS ------------------------------ */

function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] ${
        dark
          ? "border border-[#9ff690] bg-[rgba(162,249,147,0.10)] text-white"
          : "bg-black text-white"
      }`}
    >
      <span className="h-1.5 w-1.5" style={{ backgroundColor: ACCENT }} />
      {children}
    </span>
  );
}

function Heading({
  as: Tag = "h2",
  dark = false,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={`${dark ? "text-white" : "text-black"} font-normal ${
        Tag === "h1"
          ? "text-[40px] leading-[1.1] md:text-[56px]"
          : "max-w-2xl text-[32px] leading-[1.1] md:text-[46px]"
      }`}
      style={{ fontFamily: "var(--font-schibsted)" }}
    >
      {children}
    </Tag>
  );
}

function Sub({
  dark = false,
  className = "",
  children,
}: {
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`max-w-lg text-[17px] leading-8 ${dark ? "text-white/55" : "text-[#4d4d4d]"} ${className}`}
    >
      {children}
    </p>
  );
}

function PrimaryButton({ location }: { location: string }) {
  return (
    <button
      type="button"
      data-cal-link={CAL_LINK}
      data-cal-config={CAL_CONFIG}
      data-loc={location}
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

function GhostButton({
  children,
  href,
  dark = true,
}: {
  children: React.ReactNode;
  href: string;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex h-10 items-center border px-5 text-base font-medium transition ${
        dark
          ? "border-[#b5f4a2] text-white hover:bg-white/10"
          : "border-black/20 text-black hover:bg-black/5"
      }`}
    >
      {children}
    </a>
  );
}

function StepBox({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex w-full min-w-0 flex-col border border-black/10 bg-white p-5 md:p-6">
      <span
        className="flex h-10 w-10 items-center justify-center border border-black/10 text-black"
        style={{ backgroundColor: "rgba(159,246,144,0.14)" }}
      >
        {icon}
      </span>
      <h3
        className="mt-4 text-lg text-black"
        style={{ fontFamily: "var(--font-schibsted)" }}
      >
        {title}
      </h3>
      <p className="mt-1.5 text-[15px] leading-6 text-[#4d4d4d]">{body}</p>
    </div>
  );
}

function Band({
  id,
  dark = false,
  children,
  className = "",
  bgImage,
}: {
  id?: string;
  dark?: boolean;
  children: React.ReactNode;
  className?: string;
  bgImage?: string;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-clip ${dark ? "bg-black" : "bg-[#fafafa]"}`}
    >
      {bgImage && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div className="af-bg-translate absolute -inset-[20%]">
            <div
              className="af-bg-scale h-full w-full bg-cover bg-center opacity-80"
              style={{
                backgroundImage: `url(${bgImage})`,
                mixBlendMode: "screen",
              }}
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.7) 100%)",
            }}
          />
        </div>
      )}
      <div
        className={`relative z-[1] mx-auto w-[92%] max-w-[1200px] scroll-mt-20 py-20 md:py-28 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

/* ------------------------------ CONTENT ------------------------------ */

/* Base logo height in px. Each logo's display height = LOGO_BASE_HEIGHT *
   multiplier, so wordmarks with different visual weights can be tuned to a
   uniform optical height. Width is always auto, so aspect ratio is preserved. */
const LOGO_BASE_HEIGHT = 28;

const trustedLogos = [
  {
    name: "Integral Chat",
    src: "/assets/client-logos/integralchat.png",
    width: 872,
    height: 218,
    multiplier: 1,
    offsetY: 0,
  },
  {
    name: "Intelliox",
    src: "/assets/client-logos/intelliox.png",
    width: 792,
    height: 170,
    multiplier: 0.7,
    offsetY: 0,
  },
  {
    name: "Maritime 22",
    src: "/assets/client-logos/maritime22.png",
    width: 1204,
    height: 240,
    multiplier: 1,
    offsetY: 0,
  },
  {
    name: "Sarg",
    src: "/assets/client-logos/sarg.png",
    width: 860,
    height: 246,
    multiplier: 1,
    offsetY: 0,
  },
  {
    name: "Telo AI",
    src: "/assets/client-logos/teloai.png",
    width: 594,
    height: 236,
    multiplier: 1.15,
    offsetY: -2,
  },
];

const whoWeHelp = [
  {
    icon: <Globe className="h-5 w-5" strokeWidth={1.6} />,
    title: "Marketing Agencies",
  },
  {
    icon: <Rocket className="h-5 w-5" strokeWidth={1.6} />,
    title: "B2B Startups",
  },
  {
    icon: <ShoppingBag className="h-5 w-5" strokeWidth={1.6} />,
    title: "Ecommerce Agencies",
  },
  {
    icon: <Briefcase className="h-5 w-5" strokeWidth={1.6} />,
    title: "Recruitment Agencies",
  },
  {
    icon: <ChartNoAxesCombined className="h-5 w-5" strokeWidth={1.6} />,
    title: "IT and Consulting Firms",
  },
  {
    icon: <Monitor className="h-5 w-5" strokeWidth={1.6} />,
    title: "Coaches and Tutors",
  },
  {
    icon: <CircleDollarSign className="h-5 w-5" strokeWidth={1.6} />,
    title: "Financial Services Firms",
  },
  {
    icon: <Magnet className="h-5 w-5" strokeWidth={1.6} />,
    title: "Lead Gen Agencies",
  },
  {
    icon: <Landmark className="h-5 w-5" strokeWidth={1.6} />,
    title: "Investment Houses",
  },
];

// Ordered apex (foundation) to base (scale): freeing the founder/leader's time
// is the foundation, and it scales out into team output and clean operations.
const whatWeDo = [
  {
    icon: <CalendarCheck className="h-[22px] w-[22px]" strokeWidth={1.6} />,
    title: "Free up the founder",
  },
  {
    icon: <LayersPlus className="h-[22px] w-[22px]" strokeWidth={1.6} />,
    title: "Multiply team output",
  },
  {
    icon: <Workflow className="h-[22px] w-[22px]" strokeWidth={1.6} />,
    title: "Cut operational sludge",
  },
  {
    icon: <Repeat className="h-[22px] w-[22px]" strokeWidth={1.6} />,
    title: "Automate repetitive VA work",
  },
];

/* Step 01 has two entry points that branch-merge into the flow: the customer
   shares a request, or we suggest one. */
const entryBoxes = [
  {
    icon: <MessagesSquare className="h-5 w-5" strokeWidth={1.6} />,
    title: "You share a request",
    body: "You bring us a task, a problem, or an idea.",
  },
  {
    icon: <Sparkles className="h-5 w-5" strokeWidth={1.6} />,
    title: "We spot an opportunity",
    body: "We notice a new automation opportunity.",
  },
];

const flowBoxes = [
  {
    icon: <LayoutDashboard className="h-5 w-5" strokeWidth={1.6} />,
    title: "Get the plan",
    body: "You get a clear plan from us before any work starts.",
  },
  {
    icon: <CalendarCheck className="h-5 w-5" strokeWidth={1.6} />,
    title: "Approve and build",
    body: "You approve, and the build begins.",
  },
  {
    icon: <Repeat className="h-5 w-5" strokeWidth={1.6} />,
    title: "Deploy and iterate",
    body: "You watch it go live, then get better as you use it.",
  },
];

const platformCapabilities = [
  {
    icon: <Bot className="h-5 w-5" strokeWidth={1.6} />,
    title: "AI agents",
    body: "Your tasks, done with no code.",
  },
  {
    icon: <Workflow className="h-5 w-5" strokeWidth={1.6} />,
    title: "Workflows",
    body: "Multi-step flows, on autopilot.",
  },
  {
    icon: <LayoutDashboard className="h-5 w-5" strokeWidth={1.6} />,
    title: "Dashboards",
    body: "See what is running, live.",
  },
];

const securityCards = [
  {
    icon: <Lock className="h-5 w-5" strokeWidth={1.6} />,
    title: "End-to-End Encryption",
    body: "All data encrypted in transit and at rest using AES-256.",
  },
  {
    icon: <Database className="h-5 w-5" strokeWidth={1.6} />,
    title: "Zero Data Retention",
    body: "Your data is never stored or used for model training.",
  },
  {
    icon: <Server className="h-5 w-5" strokeWidth={1.6} />,
    title: "Data isolation",
    body: "Org-level isolation with row level security (RLS) at the database, so each team's data stays separate.",
  },
];

const pricingPlans = [
  {
    name: "Growth Partner",
    description: "Founder-led small teams",
    price: "$500",
    period: "/month",
    cta: "Book a free call",
    highlighted: true,
    features: [
      "In-depth audit of your current flows",
      "AI agents, workflows and dashboards",
      "One feature request at a time",
      "Email, Slack, and Calls integration",
      "CRM and Ticketing integration",
      "Marketing stack integration",
      "Notion and Airtable integration",
      "In-house quality AI expert support",
    ],
  },
  {
    name: "Scale Partner",
    description: "Mid-sized teams with Pods",
    price: "$1,500",
    period: "/month",
    cta: "Book a free call",
    highlighted: false,
    features: [
      "Everything in Growth Partner",
      "3 parallel requests at a time",
      "Dedicated fractional AI engineer",
      "Custom themed platform",
    ],
  },
  {
    name: "Enterprise",
    description: "Large teams, custom needs",
    price: "Custom",
    period: "",
    cta: "Talk to Sales",
    highlighted: false,
    features: [
      "Everything in Scale Partner",
      "Private deployment in your cloud",
      "Handling customer facing use cases",
      "Guaranteed SLAs",
    ],
  },
];

/* ------------------------------ PAGE ------------------------------ */

export default function AgentflowPage() {
  return (
    <div
      className={`${schibsted.variable} ${cabin.variable} bg-black text-white`}
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <style>{`
        @keyframes af-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .af-marquee { animation: af-marquee 36s linear infinite; }
        .af-logo-marquee { animation: af-marquee 24s linear infinite; }
        .af-logo-marquee.rev { animation-direction: reverse; animation-duration: 30s; }
        .af-marquee.rev { animation-direction: reverse; animation-duration: 44s; }
        @keyframes af-vmarquee { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        .af-vmarquee { animation: af-vmarquee 22s linear infinite; }
        .af-vmarquee.fast { animation-duration: 17s; }
        .af-vmarquee.rev { animation-direction: reverse; animation-duration: 26s; }
        @keyframes af-ping-soft { 0% { transform: scale(0.85); opacity: 0.85; } 100% { transform: scale(2.2); opacity: 0; } }
        .af-ping-soft { animation: af-ping-soft 1.8s cubic-bezier(0,0,0.2,1) infinite; }
        @keyframes af-bg-translate {
          0%   { transform: translate3d(-3%, -2%, 0); }
          50%  { transform: translate3d(3%, 2%, 0); }
          100% { transform: translate3d(-3%, -2%, 0); }
        }
        @keyframes af-bg-scale {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.25); }
          100% { transform: scale(1); }
        }
        .af-bg-translate { animation: af-bg-translate 26s ease-in-out infinite; will-change: transform; }
        .af-bg-scale     { animation: af-bg-scale 19s ease-in-out infinite; will-change: transform; }
        @keyframes af-eq { 0%, 100% { transform: scaleY(0.35); } 50% { transform: scaleY(1); } }
        .af-eq-bar { transform-origin: top; animation: af-eq 1.4s ease-in-out infinite; }
        @keyframes af-caret { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .af-caret { animation: af-caret 1.1s steps(1) infinite; }
        @keyframes af-pixel { 0%, 100% { opacity: 0.12; } 50% { opacity: 1; } }
        .af-pixel { animation: af-pixel 2.6s ease-in-out infinite; }
        @keyframes af-glow { 0%, 33.3%, 100% { opacity: 0; } 8%, 25% { opacity: 1; } }
        .af-glow { opacity: 0; animation: af-glow 5.4s ease-in-out infinite; }
        @keyframes af-dash { to { stroke-dashoffset: -16; } }
        .af-dash { animation: af-dash 1.2s linear infinite; }
        @keyframes af-flow {
          0%   { transform: translateY(0); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(var(--af-flow-dist, 12px)); opacity: 0; }
        }
        .af-flow { opacity: 0; animation: af-flow 1.6s ease-in-out infinite; }
        @keyframes af-spin { to { transform: rotate(360deg); } }
        .af-spin { animation: af-spin 4s linear infinite; }
        @keyframes af-done-in { 0%, 67% { opacity: 0; } 69%, 100% { opacity: 1; } }
        @keyframes af-done-out { 0%, 67% { opacity: 1; } 69%, 100% { opacity: 0; } }
        .af-done-in { opacity: 0; animation: af-done-in 22s linear infinite; }
        .af-done-out { animation: af-done-out 22s linear infinite; }
        @keyframes af-swap-a { 0%, 45% { opacity: 1; } 50%, 95% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes af-swap-b { 0%, 45% { opacity: 0; } 50%, 95% { opacity: 1; } 100% { opacity: 0; } }
        .af-swap-a { animation: af-swap-a 8s ease-in-out infinite; }
        .af-swap-b { opacity: 0; animation: af-swap-b 8s ease-in-out infinite; }
        @keyframes af-build {
          0%   { transform: scaleX(0); opacity: 1; }
          45%  { transform: scaleX(1); }
          85%  { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        .af-build { transform-origin: left; animation: af-build 5.4s ease-in-out infinite; }
        @keyframes af-fill {
          0%   { transform: scaleX(0); }
          30%  { transform: scaleX(1); }
          85%  { transform: scaleX(1); }
          100% { transform: scaleX(0); }
        }
        .af-fill { transform: scaleX(0); animation: af-fill 5.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .af-marquee, .af-logo-marquee, .af-vmarquee, .af-ping-soft,
          .af-bg-translate, .af-bg-scale, .af-eq-bar, .af-caret, .af-pixel,
          .af-glow, .af-dash, .af-flow, .af-spin, .af-fill, .af-build,
          .af-done-in, .af-done-out, .af-swap-a, .af-swap-b { animation: none; }
        }
      `}</style>

      {/* 1. HERO (black) */}
      <section className="relative isolate overflow-hidden bg-black">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-10 left-0 z-0 hidden w-[280px] xl:block"
        >
          <Image
            src="/assets/hero-bg-image-left.avif"
            alt=""
            width={1404}
            height={3408}
            sizes="280px"
            preload
            className="h-auto w-full object-contain object-top"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-20 right-0 z-0 hidden w-[280px] xl:block"
        >
          <Image
            src="/assets/hero-bg-image-right.avif"
            alt=""
            width={1684}
            height={4088}
            sizes="280px"
            preload
            className="h-auto w-full object-contain object-top"
          />
        </div>

        <div className="relative z-10 mx-auto flex w-[92%] max-w-[1200px] flex-col items-center pb-14 pt-36 text-center md:pb-20 md:pt-44">
          <Heading as="h1" dark>
            We help founders automate
            <br className="hidden md:block" /> the messy boring work
          </Heading>
          <p className="mt-6 max-w-md text-balance text-[17px] leading-8 text-white/55">
            We help B2B and professional services founders automate operations
            and scale with AI systems
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton location="hero" />
            <GhostButton href="#process">How it works</GhostButton>
          </div>

          {/* YouTube VSL */}
          <div className="mt-10 w-full max-w-[880px]">
            <HeroVideo />
          </div>
        </div>

        {/* Trusted by strip */}
        <div className="relative z-10 border-y border-white/[0.06] bg-black text-white">
          <div className="relative mx-auto flex w-[96%] max-w-[1320px] flex-col border-x border-white/[0.06] px-5 py-6 md:h-[132px] md:flex-row md:items-center md:px-10 md:py-0">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:25%_100%]"
            />
            <p className="relative max-w-[260px] shrink-0 text-left text-[17px] leading-7 text-white/70">
              Trusted by forward-thinking teams worldwide
            </p>
            <div className="relative mt-5 min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)] md:mt-0 md:pl-10">
              <div className="af-logo-marquee flex w-max items-center gap-20 pr-20">
                {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex h-12 shrink-0 items-center justify-center"
                    aria-hidden={index >= trustedLogos.length}
                  >
                    <Image
                      src={logo.src}
                      alt={index < trustedLogos.length ? logo.name : ""}
                      width={logo.width}
                      height={logo.height}
                      style={{
                        height: LOGO_BASE_HEIGHT * logo.multiplier,
                        width: "auto",
                        transform: `translateY(${logo.offsetY}px)`,
                      }}
                      className="opacity-75"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE WORK WITH (black) */}
      <section id="who-we-help" className="overflow-hidden bg-black">
        <div className="relative mx-auto w-[96%] max-w-[1320px] scroll-mt-20 border-x border-white/[0.06] px-4 pb-24 pt-20 md:px-8 md:pb-36 md:pt-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:25%_100%]"
          />
          <div className="relative">
            <h2
              className="mx-auto max-w-[680px] text-center text-[32px] font-normal leading-[1.1] text-white md:text-[46px]"
              style={{ fontFamily: "var(--font-schibsted)" }}
            >
              For overloaded teams
              <br />
              facing <span className="text-[#9ff690]">time shortage</span>
            </h2>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {whoWeHelp.map((item) => (
                <div
                  key={item.title}
                  className={`group min-h-20 items-center gap-4 rounded-none border-[1.5px] border-white/[0.08] bg-[#0b0c0c] px-5 py-4 transition duration-300 hover:border-[#9ff690]/60 hover:bg-[#0e120e] ${
                    item.title === "Recruitment Agencies"
                      ? "hidden lg:flex"
                      : "flex"
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9ff690]/25 text-[#9ff690] transition duration-300 group-hover:border-[#9ff690]/70 group-hover:bg-[rgba(159,246,144,0.12)] group-hover:text-[#b6f9aa]">
                    {item.icon}
                  </span>
                  <h3 className="text-[17px] font-medium text-white transition duration-300 group-hover:text-[#9ff690]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2b. WHAT WE DO (white) */}
      <Band id="results" className="pb-14 md:pb-20">
        <Eyebrow>Outcomes</Eyebrow>
        <div className="mt-5">
          <Heading>What we do for you</Heading>
        </div>
        <Sub className="mt-5">
          We focus on producing these outcomes, in order of priority.
        </Sub>

        <div className="mt-14 flex items-stretch justify-start gap-4 md:gap-6">
          {/* foundation-to-scale axis */}
          <div className="hidden flex-col items-center py-2 md:flex">
            <span className="text-[17px] font-medium text-black/50">
              Foundation
            </span>
            <div className="mt-3 w-px flex-1 bg-black/40" />
            <span
              className="h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent"
              style={{ borderTopColor: "rgba(0,0,0,0.4)" }}
            />
            <span className="mt-3 text-[17px] font-medium text-black/50">
              Scale
            </span>
          </div>

          {/* left-aligned growth ramp: narrow foundation up top, widening as it scales out */}
          <div className="flex w-full max-w-[760px] flex-col items-start gap-2.5">
            {whatWeDo.map((item, i) => {
              const width = [
                "md:w-[54%]",
                "md:w-[69%]",
                "md:w-[84%]",
                "md:w-full",
              ][i];
              const alpha = [0.72, 0.55, 0.38, 0.22][i];
              return (
                <div
                  key={item.title}
                  className={`flex w-full items-center gap-5 rounded-xl border border-[#9ff690]/40 px-5 py-4 md:px-7 md:py-5 ${width}`}
                  style={{ backgroundColor: `rgba(159,246,144,${alpha})` }}
                >
                  <span
                    className="text-lg font-medium leading-none text-black/45 md:text-xl"
                    style={{ fontFamily: "var(--font-schibsted)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-[16px] leading-tight text-black md:text-[19px]"
                    style={{ fontFamily: "var(--font-schibsted)" }}
                  >
                    {item.title}
                  </h3>
                  <span className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center text-[#3f7d33]/60">
                    {item.icon}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Band>

      {/* 3. WORKFLOWS WE RUN (white) */}
      <Band id="workflows" className="pt-14 md:pt-20">
        <Eyebrow>What We Take Over</Eyebrow>
        <div className="mt-5">
          <Heading>
            We remove time sinks
            <br />
            across your team
          </Heading>
        </div>
        <Sub className="mt-5">
          We detect time sinks across your organization, then automate them with
          agents, workflows and dashboards.
        </Sub>

        <div className="mt-12">
          <UseCases tabStyle="agentflow" />
        </div>
      </Band>

      {/* 4. PROCESS (black) */}
      <Band id="process" dark bgImage="/assets/green-animation-bg.png">
        <Eyebrow dark>Process</Eyebrow>
        <div className="mt-5">
          <Heading dark>From audit to autopilot</Heading>
        </div>
        <Sub dark className="mt-5">
          Our unique 4-phase process takes you from audit to autopilot, in as
          little as 2 weeks.
        </Sub>
        <Solutions />
      </Band>

      {/* 4a. HOW WE WORK (white) */}
      <Band id="extended-team">
        <Eyebrow>How We Work</Eyebrow>
        <div className="mt-5">
          <Heading>
            We work like your
            <br />
            extended team
          </Heading>
        </div>
        {/* Desktop: two entry boxes branch-merge into the linear flow */}
        <div className="mt-14 hidden items-stretch md:flex">
          <div className="flex flex-1 flex-col justify-center gap-3">
            <StepBox {...entryBoxes[0]} />
            <span className="self-start px-1 text-[13px] font-medium uppercase tracking-[0.12em] text-black/40">
              or
            </span>
            <StepBox {...entryBoxes[1]} />
          </div>

          {/* tree connector: both entry boxes merge into the next step */}
          <div className="relative w-12 shrink-0" aria-hidden>
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 25 H55 V50 H100"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M0 75 H55 V50"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {flowBoxes.map((box, i) => (
            <div key={box.title} className="contents">
              {i > 0 && (
                <div className="flex w-10 shrink-0 items-center" aria-hidden>
                  <span className="h-px w-full bg-black/20" />
                </div>
              )}
              <div className="flex flex-1 items-center">
                <StepBox {...box} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: two entry options side by side that branch-merge downward
            into the linear flow (vertical version of the desktop tree) */}
        <div className="mt-10 md:hidden">
          <div
            className="grid w-full gap-3"
            style={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}
          >
            <StepBox {...entryBoxes[0]} />
            <StepBox {...entryBoxes[1]} />
          </div>

          {/* both entry boxes drop a line that joins in the middle */}
          <div className="relative h-12 w-full" aria-hidden>
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M25 0 V55 H50"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M75 0 V55 H50"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M50 55 V100"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {flowBoxes.map((box, i) => (
            <div key={box.title}>
              {i > 0 && (
                <div className="flex justify-center" aria-hidden>
                  <span className="h-6 w-px bg-black/20" />
                </div>
              )}
              <StepBox {...box} />
            </div>
          ))}
        </div>
      </Band>

      {/* 4b. CAPABILITIES (black), one video, three capabilities, a logo row */}
      <Band id="capabilities" dark>
        <div className="pt-6 md:pt-10">
          <div className="grid gap-x-5 gap-y-12 lg:grid-cols-12">
            {/* Text column: header + the three capabilities as a clean list */}
            <div className="flex flex-col lg:col-span-4 lg:pt-6">
              <div className="lg:pr-10">
                <Eyebrow dark>Our Edge</Eyebrow>
                <div className="mt-5">
                  <Heading dark>One platform powers it all</Heading>
                </div>
                <Sub dark className="mt-5">
                  Everything we build runs on our own powerful platform, not
                  off-the-shelf tools.
                </Sub>
              </div>

              <div className="mt-10 flex flex-col gap-7 lg:mt-12 lg:pr-6">
                {platformCapabilities.map((cap) => (
                  <div key={cap.title} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#9ff690] bg-[rgba(162,249,147,0.10)] text-[#9ff690]">
                      {cap.icon}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-medium text-white">
                        {cap.title}
                      </h3>
                      <p className="mt-0.5 text-[17px] leading-7 text-white/55">
                        {cap.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video, the one product visual for the section */}
            <div className="aspect-[956/1200] overflow-hidden rounded-lg border border-white/10 bg-black md:aspect-[2022/1498] lg:col-span-8">
              <video
                className="hidden h-full w-full object-cover md:block"
                src="/assets/videos/hero-video-desktop.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <video
                className="h-full w-full object-cover md:hidden"
                src="/assets/videos/hero-new-mobile.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          {/* Quiet integrations row closes the section */}
          <div className="mt-20">
            <p className="text-center text-[13px] uppercase tracking-[0.14em] text-white/35">
              Connects to 50+ work apps
            </p>
            <div className="mt-9">
              <IntegrationsRow />
            </div>
          </div>
        </div>
      </Band>

      {/* 7b. WHY US (white) */}
      <Band id="why-us">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Why Us</Eyebrow>
          <div className="mt-5">
            <Heading>
              Not a traditional agency,
              <br />
              an ongoing partner
            </Heading>
          </div>
        </div>
        <Comparison />
      </Band>

      {/* 7b. CASE STUDIES (black) */}
      <Band id="case-studies" dark>
        <Eyebrow dark>Case Studies</Eyebrow>
        <div className="mt-5">
          <Heading dark>A closer look at our work</Heading>
        </div>
        <Sub dark className="mt-5">
          Teams that handed the messy work to custom AI agents and systems.
        </Sub>
        <div className="mt-14">
          <CaseStudies />
        </div>
      </Band>

      {/* 7c. RECLAIM CALCULATOR (light, separates the two dark bands) */}
      <Band id="roi">
        <Eyebrow>Cost Calculator</Eyebrow>
        <div className="mt-5">
          <Heading>How much is busywork costing you?</Heading>
        </div>
        <Sub className="mt-5">
          Weight your team by what their time is worth.
        </Sub>
        <ReclaimCalculator />
      </Band>

      {/* 8. PRICING (black) */}
      <ViewTracker targetId="pricing" event="Pricing Section Viewed" />
      <Band id="pricing" dark>
        <Eyebrow dark>Pricing</Eyebrow>
        <div className="mt-5">
          <Heading dark>
            Predictable pricing,
            <br />
            no surprises
          </Heading>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex min-h-[560px] flex-col border border-white/10 bg-black p-7 md:p-9"
            >
              <span className="absolute -left-px -top-px h-1.5 w-1.5 bg-white" />
              <span className="absolute -right-px -top-px h-1.5 w-1.5 bg-white" />
              <div className="flex flex-1 flex-col">
                <h3
                  className="text-2xl text-white"
                  style={{ fontFamily: "var(--font-schibsted)" }}
                >
                  {plan.name}
                </h3>
                <p className="mt-4 text-[17px] text-white/55">
                  {plan.description}
                </p>

                <div className="mt-8 flex items-end gap-2">
                  <span
                    className="text-5xl leading-none text-white"
                    style={{ fontFamily: "var(--font-schibsted)" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="pb-1.5 text-xl text-white/55">
                      {plan.period}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  data-cal-link={CAL_LINK}
                  data-cal-config={CAL_CONFIG}
                  data-loc="pricing"
                  className={`mt-9 flex h-12 cursor-pointer items-center justify-center border text-[14px] font-medium uppercase transition ${
                    plan.highlighted
                      ? "border-transparent text-black hover:brightness-95"
                      : "border-[#9ff690] text-white hover:bg-white/10"
                  }`}
                  style={
                    plan.highlighted
                      ? { backgroundColor: CTA_ACCENT }
                      : undefined
                  }
                >
                  {plan.cta}
                </button>

                <div className="mt-10 border-t border-white/10 pt-9">
                  <p className="text-[17px] font-medium text-white/45">
                    What&apos;s Included
                  </p>
                  <ul className="mt-7 space-y-5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-[17px] text-white/85"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0"
                          style={{ backgroundColor: ACCENT }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Band>

      {/* SECURITY (black) */}
      <Band id="security" dark className="pt-12 pb-32 md:pt-14 md:pb-40">
        <Eyebrow dark>Security</Eyebrow>
        <div className="mt-5">
          <Heading as="h3" dark>
            Enterprise-grade security
          </Heading>
        </div>
        <Sub dark className="mt-5">
          Your client data is non-negotiable. We hold the highest standards of
          security and compliance, so it stays yours.
        </Sub>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {securityCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col border border-white/10 bg-white/[0.03] p-7 md:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center border border-[#9ff690] bg-[rgba(162,249,147,0.10)] text-[#9ff690]">
                {card.icon}
              </span>
              <h3
                className="mt-6 text-xl text-white"
                style={{ fontFamily: "var(--font-schibsted)" }}
              >
                {card.title}
              </h3>
              <p className="mt-2 text-[17px] leading-8 text-white/55">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </Band>

      {/* 9. FAQ (white) */}
      <Band id="faq">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="flex flex-col items-start">
            <Eyebrow>FAQ</Eyebrow>
            <div className="mt-5">
              <Heading as="h3">Got any questions? We have answers</Heading>
            </div>
            <div className="mt-10 flex -space-x-2">
              {["/assets/about/vishal.avif", "/assets/about/anurag.webp"].map(
                (src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-[#fafafa] object-cover object-top"
                  />
                ),
              )}
            </div>
            <p className="mt-4 text-[17px] font-medium text-black">
              Have more questions?
            </p>
            <p className="mt-1 text-[17px] text-[#4d4d4d]">
              Reach out and we will walk you through it.
            </p>
            <button
              type="button"
              data-cal-link={CAL_LINK}
              data-cal-config={CAL_CONFIG}
              data-loc="faq"
              className="mt-5 cursor-pointer rounded-md bg-black px-4 py-2.5 text-[13px] font-medium uppercase tracking-[0.04em] text-white transition hover:bg-black/80"
            >
              Contact us
            </button>
          </div>
          <Faq />
        </div>
      </Band>

      {/* 10b. FOUNDER NOTE (black) */}
      <Band id="founder" dark>
        <Eyebrow dark>Founder&apos;s Note</Eyebrow>
        <div className="mt-10 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          <div className="relative aspect-[4/5] w-full max-w-[400px] shrink-0 overflow-hidden rounded-2xl border border-white/10 lg:aspect-auto">
            <Image
              src="/assets/founder-vishal.avif"
              alt="Vishal Singh, Founder of Harmony AI"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover"
            />
          </div>

          <div className="max-w-[460px]">
            <div className="space-y-5 text-[17px] leading-8 text-white/70 md:text-[19px] md:leading-9">
              <p>Hey,</p>
              <p>
                I used to run a B2B services agency that was growing at 1.5x
                quarter over quarter.
              </p>
              <p>
                But managing my team, vendors, and clients across multiple time
                zones became harder than the work itself.
              </p>
              <p>I eventually had to shut it down.</p>
              <p>
                That led me to start Harmony, to solve this for all by building
                the systems and agents that I wish we had.
              </p>
            </div>

            <div className="mt-9">
              <Image
                src="/assets/founder-signature.avif"
                alt="Vishal Singh signature"
                width={420}
                height={150}
                className="h-16 w-auto opacity-90"
              />
              <p className="mt-4 text-[17px] font-medium text-white">
                Vishal Singh
              </p>
              <p className="mt-0.5 text-[17px] text-white/50">
                Founder, Harmony AI
              </p>
            </div>
          </div>
        </div>
      </Band>

      {/* 11. FINAL CTA (black) */}
      <section className="relative isolate overflow-hidden border-t border-white/10 bg-black">
        <div className="relative mx-auto w-[92%] max-w-[1320px] overflow-hidden border-x border-white/10">
          {/* top corner + edge dots */}
          <div className="pointer-events-none absolute -top-1 left-0 h-2 w-2 bg-white" />
          <div className="pointer-events-none absolute -top-1 right-0 h-2 w-2 bg-white" />

          {/* uniform dot grid, fading toward the center */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(159,246,144,0.16)_1px,transparent_1.5px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_38%,transparent_62%,black)]"
          />

          <div className="relative z-[1] flex flex-col items-center py-24 text-center md:py-32">
            <Eyebrow dark>Get Started</Eyebrow>
            <div className="mt-5 flex flex-col items-center">
              <Heading dark>Ready to get your week back?</Heading>
            </div>
            <p className="mt-5 max-w-xl text-[17px] leading-8 text-white/55">
              Book a discovery call and together we will go through your
              processes, find the biggest time leaks, and map the system that
              plugs them.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton location="founder" />
              <GhostButton href="#process">How it works</GhostButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
