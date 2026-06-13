import type { Metadata } from "next";
import Image from "next/image";
import { Cabin, Schibsted_Grotesk } from "next/font/google";
import { Faq } from "../_components/faq";
import { ContactFormPanel } from "./_components/contact-form";

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
const CAL_LINK = "harmony-vishal/discovery";
const CAL_CONFIG = JSON.stringify({ layout: "month_view", theme: "dark" });
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

const contactTopics = [
  "Pricing and which plan fits your team",
  "Founder busywork: ops, follow-ups, and reporting",
  "Onboarding, integrations, and getting started",
];

export const metadata: Metadata = {
  title: "Contact | Harmony AI",
  description:
    "Get in touch with Harmony about pricing, custom workflows, onboarding, and how we can help your team scale.",
};

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

function Band({
  id,
  dark = false,
  children,
  className = "",
}: {
  id?: string;
  dark?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-clip ${dark ? "bg-black" : "bg-[#fafafa]"}`}
    >
      <div
        className={`relative z-[1] mx-auto w-[92%] max-w-[1200px] scroll-mt-20 py-20 md:py-28 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div
      className={`${schibsted.variable} ${cabin.variable} bg-black text-white`}
      style={{ fontFamily: "var(--font-cabin)" }}
    >
      <style>{`
        @keyframes af-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .af-logo-marquee { animation: af-marquee 24s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .af-logo-marquee { animation: none; }
        }
      `}</style>

      <main className="pb-0 pt-28 md:pt-32">
        <section className="mx-auto w-[92%] max-w-[1200px] pb-16 md:pb-24">
          <div className="border border-white/10">
            <div className="grid lg:grid-cols-[1fr_1.05fr]">
              <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
                <Eyebrow dark>Talk to us</Eyebrow>
                <div className="mt-6">
                  <Heading as="h1" dark>
                    Let&apos;s connect
                  </Heading>
                </div>
                <p className="mt-5 max-w-md text-[17px] leading-8 text-white/55">
                  Reach out about pricing, the work slowing your team down, or
                  how we onboard you like an extended team.
                </p>

                <ul className="mt-8 space-y-4">
                  {contactTopics.map((topic) => (
                    <li key={topic} className="flex gap-3.5">
                      <span
                        className="mt-2.5 block h-1.5 w-1.5 shrink-0"
                        style={{ backgroundColor: ACCENT }}
                      />
                      <span className="text-[17px] leading-8 text-white/70">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <ContactFormPanel />
            </div>
          </div>
        </section>

        <div className="border-y border-white/[0.06] bg-black text-white">
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
              <p className="mt-1 text-[17px] text-[#4d4d4d]">
                Reach out and we will walk you through it.
              </p>
              <button
                type="button"
                data-cal-link={CAL_LINK}
                data-cal-config={CAL_CONFIG}
                className="mt-5 cursor-pointer rounded-md bg-black px-4 py-2.5 text-[13px] font-medium uppercase tracking-[0.04em] text-white transition hover:bg-black/80"
              >
                Contact us
              </button>
            </div>
            <Faq />
          </div>
        </Band>
      </main>
    </div>
  );
}
