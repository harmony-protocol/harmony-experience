import type { Metadata } from "next";
import { Cabin, Schibsted_Grotesk } from "next/font/google";
import Image from "next/image";
import {
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
  Clock,
  CodeXml,
  Database,
  Globe,
  Landmark,
  Lock,
  MessagesSquare,
  Monitor,
  Repeat,
  Rocket,
  Server,
  ShoppingBag,
  Sparkles,
  Users,
  UsersRound,
} from "lucide-react";
import { AgentflowNav } from "./_components/nav";
import { Solutions } from "./_components/solutions";
import { Features } from "./_components/features";
import { Comparison } from "./_components/comparison";
import { Faq } from "./_components/faq";
import { UseCases } from "./_components/use-cases";

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
const CAL_URL = "https://cal.com/harmony-vishal/discovery";

// Paste the YouTube video id of the VSL here (the part after watch?v=).
const VSL_YOUTUBE_ID = "";

export const metadata: Metadata = {
  title: "We help B2B founders automate work operations | Harmony AI",
  description:
    "Harmony builds personalized AI systems for B2B founders and agency owners. The followups, reporting, and admin run in the background, so you can lead the business instead of the busywork.",
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
      <span
        className="h-1.5 w-1.5"
        style={{ backgroundColor: ACCENT }}
      />
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
      className={`max-w-lg text-base leading-7 md:text-[17px] md:leading-8 ${dark ? "text-white/55" : "text-[#4d4d4d]"} ${className}`}
    >
      {children}
    </p>
  );
}

function PrimaryButton({
  href = CAL_URL,
}: {
  href?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex h-12 items-center gap-3 overflow-hidden pl-2 pr-5 text-base font-medium text-black transition hover:brightness-95"
      style={{ backgroundColor: CTA_ACCENT }}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-black">
        <Image
          src="/assets/talk-to-sales-icon.svg"
          alt=""
          width={16}
          height={15}
          className="h-[15px] w-4"
        />
      </span>
      <span className="h-6 overflow-hidden">
        <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-6">
          <span className="flex h-6 items-center">Book a Call</span>
          <span className="flex h-6 items-center" aria-hidden="true">
            Book a Call
          </span>
        </span>
      </span>
    </a>
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
      className={`inline-flex h-12 items-center border px-6 text-base font-medium transition ${
        dark
          ? "border-[#b5f4a2] text-white hover:bg-white/10"
          : "border-black/20 text-black hover:bg-black/5"
      }`}
    >
      {children}
    </a>
  );
}

function FacebookIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor" aria-hidden="true">
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0Z" />
    </svg>
  );
}

function XIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor" aria-hidden="true">
      <path d="m214.75 211.71-62.6-98.38 61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72 40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29ZM164.39 208 62.57 48h29l101.86 160Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor" aria-hidden="true">
      <path d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm0 192H40V40h176ZM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140ZM100 84a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
    </svg>
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

const trustedLogos = [
  {
    name: "Sparklé",
    src: "https://framerusercontent.com/images/0tQJ7SlKdpCZUVbUjxOEy57XRhA.svg",
    width: 96,
    height: 30,
  },
  {
    name: "Craftgram",
    src: "https://framerusercontent.com/images/hsbt5NG4UUe3LO7ERSFGv8A0PrA.svg",
    width: 94,
    height: 27,
  },
  {
    name: "Pulse",
    src: "https://framerusercontent.com/images/O7fimt1JVKhKUjjZOGgeAWTdLQ.svg",
    width: 120,
    height: 25,
  },
  {
    name: "Swift",
    src: "https://framerusercontent.com/images/yg73mxfKVqYxGdl9PXd5goIE.svg",
    width: 80,
    height: 21,
  },
  {
    name: "ZenZap",
    src: "https://framerusercontent.com/images/6Fbv7vEmmB0WPOWiVDEZNhoZ0.svg",
    width: 68,
    height: 19,
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
    icon: <ChartNoAxesCombined className="h-5 w-5" strokeWidth={1.6} />,
    title: "Consultancies",
  },
  {
    icon: <ShoppingBag className="h-5 w-5" strokeWidth={1.6} />,
    title: "Ecommerce Agencies",
  },
  {
    icon: <CodeXml className="h-5 w-5" strokeWidth={1.6} />,
    title: "IT Services Firms",
  },
  {
    icon: <Monitor className="h-5 w-5" strokeWidth={1.6} />,
    title: "Coaches and Tutors",
  },
  {
    icon: <CircleDollarSign className="h-5 w-5" strokeWidth={1.6} />,
    title: "Accounting Firms",
  },
  {
    icon: <Building2 className="h-5 w-5" strokeWidth={1.6} />,
    title: "Real Estate Services",
  },
  {
    icon: <Landmark className="h-5 w-5" strokeWidth={1.6} />,
    title: "Investment Firms",
  },
];

const whatWeDo = [
  {
    icon: <Clock className="h-5 w-5" strokeWidth={1.6} />,
    title: "Free founders from busywork",
    body: "We take the admin and followups off your plate, so your hours go to leading and growing the business.",
  },
  {
    icon: <Repeat className="h-5 w-5" strokeWidth={1.6} />,
    title: "Fix operational drag",
    body: "Shifting demands, freelancer churn, and manual work become clean systems that run on their own.",
  },
  {
    icon: <Users className="h-5 w-5" strokeWidth={1.6} />,
    title: "Boost team efficiency",
    body: "More output without more input. We automate repetitive work so the same team delivers more.",
  },
];

const extendedTeam = [
  {
    icon: <UsersRound className="h-5 w-5" strokeWidth={1.6} />,
    title: "An extension of your team",
    body: "We work like an in-house team, not a vendor you have to chase. Your goals are our goals.",
  },
  {
    icon: <Sparkles className="h-5 w-5" strokeWidth={1.6} />,
    title: "Top-tier service",
    body: "Senior people on your account and fast responses. No ticket queues, no junior handoffs.",
  },
  {
    icon: <MessagesSquare className="h-5 w-5" strokeWidth={1.6} />,
    title: "We work where you work",
    body: "We collaborate with you in Slack and Trello, so you always see what is happening and what is next.",
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
    title: "Private Deployment",
    body: "Deploy in your own VPC for complete data sovereignty.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    description: "For small teams getting their first systems live",
    price: "$500",
    period: "/month",
    cta: "Book a Call",
    highlighted: false,
    features: [
      "Up to 2 AI workflows built for you",
      "Connected to your existing tools",
      "Built, managed, and run for you",
      "Monthly performance reporting",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For growing teams scaling their operations",
    price: "$1,500",
    period: "/month",
    cta: "Book a Call",
    highlighted: true,
    features: [
      "Up to 6 AI workflows built for you",
      "Dedicated agents and live dashboards",
      "Priority integrations and handoffs",
      "Weekly optimization and tuning",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    description: "For established teams that need custom scope",
    price: "Custom",
    period: "",
    cta: "Talk to Sales",
    highlighted: false,
    features: [
      "Unlimited workflows and agents",
      "Custom integrations and SLAs",
      "Dedicated solutions engineer",
      "Private or VPC deployment",
      "Hands-on onboarding and training",
    ],
  },
];

const footerColumns = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "./" },
      { label: "About", href: "./about" },
      { label: "Pricing", href: "./pricing" },
      { label: "Contact", href: "./contact" },
    ],
  },
  {
    title: "Useful",
    links: [
      { label: "Solution", href: "./solution" },
      { label: "Privacy Policy", href: "./legal-page/privacy" },
      { label: "Terms & Conditions", href: "./legal-page/terms" },
    ],
  },
];

/* ------------------------------ PAGE ------------------------------ */

export default function AgentflowPage() {
  return (
    <div
      className={`${schibsted.variable} ${cabin.variable} bg-black text-white`}
      style={{ fontFamily: "var(--font-cabin)" }}
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
          .af-glow, .af-dash, .af-flow, .af-spin, .af-fill { animation: none; }
        }
      `}</style>

      <AgentflowNav />

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
            className="h-auto w-full object-contain object-top"
          />
        </div>

        <div className="relative z-10 mx-auto flex w-[92%] max-w-[1200px] flex-col items-center pb-20 pt-36 text-center md:pt-44">
          <Heading as="h1" dark>
            We help B2B founders
            <br className="hidden md:block" /> automate work operations
          </Heading>
          <p className="mt-6 max-w-md text-balance text-base leading-7 text-white/55 md:text-lg md:leading-8">
            We help B2B founders and agency owners automate messy daily work
            and scale faster with AI systems
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton />
            <GhostButton href="#process">How it works</GhostButton>
          </div>

          {/* YouTube VSL */}
          <div className="mt-16 w-full max-w-[880px]">
            <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-2 shadow-[0_0_100px_rgba(159,246,144,0.1)]">
              {VSL_YOUTUBE_ID ? (
                <iframe
                  className="aspect-video w-full rounded-xl bg-black"
                  src={`https://www.youtube-nocookie.com/embed/${VSL_YOUTUBE_ID}`}
                  title="Harmony video sales letter"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-[#070707]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-24 right-0 h-[300px] w-[420px] rounded-full blur-[90px]"
                    style={{ backgroundColor: "rgba(61,142,47,0.35)" }}
                  />
                  <div className="flex flex-col items-center gap-4">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full text-black"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <svg viewBox="0 0 16 16" className="h-5 w-5 translate-x-px" fill="currentColor">
                        <path d="M4 2.5v11l9-5.5z" />
                      </svg>
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white/45">
                      Watch the 2 minute walkthrough
                    </span>
                  </div>
                </div>
              )}
            </div>
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
              <div className="af-logo-marquee flex w-max items-center gap-12 pr-12">
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
                      className="h-8 w-auto invert opacity-75"
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
              For overloaded leaders
              <br />
              facing <span className="text-[#9ff690]">time shortage</span>
            </h2>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {whoWeHelp.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-20 items-center gap-4 rounded-[4px] border border-white/[0.08] bg-[#0b0c0c] px-5 py-4 transition hover:border-[#9ff690]/35 hover:bg-[#101210]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#9ff690]/25 text-[#9ff690]">
                    {item.icon}
                  </span>
                  <h3 className="text-[16px] font-medium text-white md:text-[17px]">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2b. WHAT WE DO (white) */}
      <Band id="results">
        <Eyebrow>What We Do</Eyebrow>
        <div className="mt-5">
          <Heading>How we help you scale faster</Heading>
        </div>
        <Sub className="mt-5">
          Every system we build comes back to the same three outcomes for
          founder-led B2B teams.
        </Sub>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {whatWeDo.map((item) => (
            <div
              key={item.title}
              className="flex flex-col border border-black/10 bg-white p-7 md:p-8"
            >
              <span
                className="flex h-11 w-11 items-center justify-center border border-black/10 text-black"
                style={{ backgroundColor: "rgba(159,246,144,0.14)" }}
              >
                {item.icon}
              </span>
              <h3
                className="mt-6 text-xl text-black"
                style={{ fontFamily: "var(--font-schibsted)" }}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-[#4d4d4d]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Band>

      {/* 3. WORKFLOWS WE RUN (white) */}
      <Band id="workflows">
        <Eyebrow>What We Take Over</Eyebrow>
        <div className="mt-5">
          <Heading>Agents, workflows, and dashboards</Heading>
        </div>
        <Sub className="mt-5">
          We detect time sinks across your organization, then automate them
          with connected agents, workflows, dashboards, and integrations.
        </Sub>

        <div className="mt-12">
          <UseCases tabStyle="agentflow" />
        </div>
      </Band>

      {/* 4. PROCESS (black) */}
      <Band
        id="process"
        dark
        bgImage="/assets/green-animation-bg.png"
      >
        <Eyebrow dark>Process</Eyebrow>
        <div className="mt-5">
          <Heading dark>From audit to autopilot</Heading>
        </div>
        <Sub dark className="mt-5">
          A done-for-you rollout. Here is exactly what happens, from the first
          48 hours through ongoing optimization.
        </Sub>
        <Solutions />
      </Band>

      {/* 4b. CAPABILITIES (white) */}
      <Band id="capabilities">
        <Eyebrow>The Platform</Eyebrow>
        <div className="mt-5">
          <Heading>One platform runs it all</Heading>
        </div>
        <Sub className="mt-5">
          Everything we build for you runs on our own platform. Easy to use,
          easy to watch, with hundreds of integrations built in.
        </Sub>
        <Features />
      </Band>

      {/* 7b. WHY US (white) */}
      <Band id="why-us">
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Why Us</Eyebrow>
          <div className="mt-5">
            <Heading>Not another tool. Not another agency.</Heading>
          </div>
          <Sub className="mt-5">
            Harmony is an AI-native operations partner that ships outcomes, not
            software you have to run yourself.
          </Sub>
        </div>
        <Comparison />
      </Band>

      {/* 8. PRICING (black) */}
      <Band id="pricing" dark>
        <Eyebrow dark>Pricing</Eyebrow>
        <div className="mt-5">
          <Heading dark>Predictable pricing, no surprises</Heading>
        </div>
        <Sub dark className="mt-5">
          One plan for your whole team. One flat monthly fee, built and run by
          us.
        </Sub>

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
                <p className="mt-4 text-[15px] text-white/55">
                  {plan.description}
                </p>

                <div className="mt-16 flex items-end gap-2">
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

                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-9 flex h-12 items-center justify-center border text-[14px] font-medium uppercase transition ${
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
                </a>

                <div className="mt-10 border-t border-white/10 pt-9">
                  <p className="text-[15px] font-medium text-white/45">
                    What&apos;s Included
                  </p>
                  <ul className="mt-7 space-y-5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-[16px] text-white/85"
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
      <Band id="security" dark>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow dark>Security</Eyebrow>
            <div className="mt-5">
              <Heading as="h3" dark>
                Enterprise-grade security
              </Heading>
            </div>
            <Sub dark className="mt-5">
              Your client data is non-negotiable. We hold the highest
              standards of security and compliance, so it stays yours.
            </Sub>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
            {securityCards.map((card) => (
              <div key={card.title} className="flex flex-col sm:px-7 sm:first:pl-0 sm:last:pr-0">
                <span style={{ color: ACCENT }}>{card.icon}</span>
                <h3
                  className="mt-5 text-lg text-white"
                  style={{ fontFamily: "var(--font-schibsted)" }}
                >
                  {card.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-white/50">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
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
              {[
                "/assets/dummy-images/dummy-girl-image-1.webp",
                "/assets/dummy-images/dummy-boy-image-3.webp",
              ].map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-[#fafafa] object-cover"
                />
              ))}
            </div>
            <p className="mt-4 text-[17px] font-medium text-black">
              Have more questions?
            </p>
            <p className="mt-1 text-[15px] text-[#4d4d4d]">
              Reach out and we will walk you through it.
            </p>
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 rounded-md bg-black px-4 py-2.5 text-[13px] font-medium uppercase tracking-[0.04em] text-white transition hover:bg-black/80"
            >
              Contact us
            </a>
          </div>
          <Faq />
        </div>
      </Band>

      {/* 10a. EXTENDED TEAM (black) */}
      <Band id="extended-team" dark>
        <Eyebrow dark>How We Work</Eyebrow>
        <div className="mt-5">
          <Heading dark>Like an extended team, not a vendor</Heading>
        </div>
        <Sub dark className="mt-5">
          You get top-tier service and real collaboration in the tools you
          already use.
        </Sub>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {extendedTeam.map((item) => (
            <div
              key={item.title}
              className="flex flex-col border border-white/10 bg-white/[0.03] p-7 md:p-8"
            >
              <span
                className="flex h-11 w-11 items-center justify-center border border-[#9ff690]/40 text-white"
                style={{ backgroundColor: "rgba(159,246,144,0.12)" }}
              >
                {item.icon}
              </span>
              <h3
                className="mt-6 text-xl text-white"
                style={{ fontFamily: "var(--font-schibsted)" }}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-white/55">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Band>

      {/* 10b. FOUNDER NOTE (black) */}
      <Band id="founder" dark>
        <Eyebrow dark>Founder&apos;s Note</Eyebrow>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_1fr] lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/assets/founder-vishal.avif"
              alt="Vishal Singh, Founder of Harmony AI"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover"
            />
          </div>

          <div>
            <div className="space-y-5 text-[17px] leading-8 text-white/70 md:text-[19px] md:leading-9">
              <p>Hey,</p>
              <p>I used to run an agency that was growing at a good pace.</p>
              <p>
                But managing my team, vendors, and clients across multiple time
                zones became harder than the work itself.
              </p>
              <p>I eventually had to shut it down.</p>
              <p>
                That experience led me to start Harmony, to solve this for
                everyone.
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
              <p className="mt-0.5 text-[15px] text-white/50">
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
            <p className="mt-5 max-w-xl text-base leading-7 text-white/55 md:text-[17px] md:leading-8">
              Join the teams using Harmony to scale operations, cut costs, and
              deliver results faster. Book a call and we will map your biggest
              time leaks live, then show you the system that plugs them.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton />
              <GhostButton href="#process">How it works</GhostButton>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER (black) */}
      <footer className="relative overflow-hidden border-t border-white/10 bg-black">
        <div className="relative mx-auto w-[92%] max-w-[1320px] border-x border-white/10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-7 bg-[radial-gradient(circle,rgba(159,246,144,0.34)_1px,transparent_1.5px)] bg-[size:20px_20px] opacity-30" />
          <div className="pointer-events-none absolute -top-1 left-0 h-2 w-2 bg-white" />
          <div className="pointer-events-none absolute -top-1 right-0 h-2 w-2 bg-white" />
          <div className="flex flex-col gap-14 border-y border-white/10 px-7 py-20 md:px-10 lg:flex-row lg:items-start lg:justify-between lg:py-24">
            <div>
              <a href="./" className="block w-[150px]" aria-label="Harmony home">
                <Image
                  src="/assets/harmony-dark-logo-tm.avif"
                  alt="Harmony"
                  width={512}
                  height={114}
                  className="h-auto w-full"
                />
              </a>
              <p
                className="mt-8 max-w-sm text-[18px] leading-[1.4] text-white"
                style={{ fontFamily: "var(--font-schibsted)" }}
              >
                Stop stressing. Start scaling.
              </p>
              <p className="mt-8 font-mono text-[13px] uppercase leading-6 tracking-[0.12em] text-white/40">
                © 2026 Sarg Innovation Labs
                <br />
                All rights reserved
              </p>
            </div>

            <div className="flex gap-16 sm:gap-24 lg:gap-28">
              {footerColumns.map((col) => (
                <div key={col.title}>
                  <p className="text-[18px] text-white/30">{col.title}</p>
                  <ul className="mt-6 space-y-5">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-[18px] text-white/42 transition hover:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex border-b border-white/10 px-7 py-9 text-[16px] text-white/55 md:justify-end md:px-10">
            <div className="flex items-center gap-8 text-white/55">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-white">
                <FacebookIcon />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="transition hover:text-white">
                <XIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div
            className="relative h-32 overflow-hidden px-7 md:h-44 md:px-10"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
            }}
          >
            <Image
              src="/assets/Harmony-AI-Outline-Green-Gradient.svg"
              alt=""
              aria-hidden="true"
              width={1169}
              height={192}
              className="pointer-events-none absolute left-7 top-0 h-auto w-[calc(100%-1.75rem)] select-none opacity-80 md:left-10 md:w-[calc(100%-2.5rem)]"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
