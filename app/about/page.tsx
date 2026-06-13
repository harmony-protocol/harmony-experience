import type { Metadata } from "next";
import Image from "next/image";
import { Cabin, Schibsted_Grotesk } from "next/font/google";
import { Target, Sparkles, RefreshCcw } from "lucide-react";

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

const CAL_LINK = "harmony-vishal/discovery";
const CAL_CONFIG = JSON.stringify({ layout: "month_view", theme: "dark" });

const team = [
  {
    name: "Vishal Singh",
    role: "CEO & Head of Product",
    image: "/assets/about/vishal.avif",
    linkedin: "https://linkedin.com/company/getharmony",
  },
  {
    name: "Anurag Maurya",
    role: "CTO & AI Researcher",
    image: "/assets/about/anurag.webp",
    linkedin: "https://linkedin.com/company/getharmony",
  },
  {
    name: "Sid",
    role: "Automations Expert",
    image: "/assets/about/sid.webp",
    linkedin: "https://linkedin.com/company/getharmony",
  },
  {
    name: "Ankit Raj",
    role: "AI Scalability Consultant",
    image: "/assets/about/ankit.webp",
    linkedin: "https://linkedin.com/company/getharmony",
  },
];

const principles = [
  {
    icon: <Target className="h-5 w-5" strokeWidth={1.6} />,
    title: "Outcomes, not software",
    body: "We deliver working systems that run in the background, not another tool for you to manage yourself.",
  },
  {
    icon: <Sparkles className="h-5 w-5" strokeWidth={1.6} />,
    title: "Built around you",
    body: "Every automation is personalized to your stack, your workflows, and the way your team actually operates.",
  },
  {
    icon: <RefreshCcw className="h-5 w-5" strokeWidth={1.6} />,
    title: "Always improving",
    body: "We stay hands-on after launch, tuning and expanding your systems as your business grows.",
  },
];

export const metadata: Metadata = {
  title: "About | Harmony AI",
  description:
    "Harmony is a done-for-you AI service that helps teams and leaders automate their operations.",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-sm uppercase tracking-[0.16em] text-[#9ff690]"
      style={{ fontFamily: "var(--font-jetbrains)" }}
    >
      {children}
    </span>
  );
}

function PrimaryButton() {
  return (
    <button
      type="button"
      data-cal-link={CAL_LINK}
      data-cal-config={CAL_CONFIG}
      className="group inline-flex h-10 cursor-pointer items-center gap-2 overflow-hidden pl-1 pr-3 text-base font-medium text-black transition hover:brightness-95"
      style={{ backgroundColor: "#9ff690" }}
    >
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden bg-black">
        <Image
          src="/assets/talk-to-sales-icon.svg"
          alt=""
          width={16}
          height={15}
          className="h-[15px] w-4 transition-transform duration-300 ease-out group-hover:-translate-y-7"
        />
        <Image
          src="/assets/talk-to-sales-icon.svg"
          alt=""
          aria-hidden
          width={16}
          height={15}
          className="absolute h-[15px] w-4 translate-y-7 transition-transform duration-300 ease-out group-hover:translate-y-0"
        />
      </span>
      <span>Book a Call</span>
    </button>
  );
}

export default function AboutPage() {
  return (
    <div
      className={`${schibsted.variable} ${cabin.variable} min-h-screen bg-black text-white`}
      style={{ fontFamily: "var(--font-cabin)" }}
    >
      <style>{`
        @keyframes about-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .about-marquee { animation: about-marquee 45s linear infinite; }
        .about-marquee:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .about-marquee { animation: none; } }
      `}</style>

      <main className="pb-24 pt-28 md:pt-32">
        {/* Hero: tag + centered heading + subtitle + CTA */}
        <div className="mx-auto flex w-[92%] max-w-[820px] flex-col items-center text-center">
          <span className="inline-flex items-center gap-1.5 border border-[#9ff690] bg-[rgba(162,249,147,0.10)] px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] text-white">
            <span
              className="h-1.5 w-1.5"
              style={{ backgroundColor: "#9ff690" }}
            />
            About
          </span>
          <h1
            className="mt-6 text-[34px] font-normal leading-[1.1] text-white md:text-[52px]"
            style={{ fontFamily: "var(--font-schibsted)" }}
          >
            We help startups, agencies
            <br className="hidden md:block" /> and firms scale faster
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/60">
            A done-for-you AI team that automates the busywork in the
            background, so you can focus on growing the business.
          </p>
          <div className="mt-8">
            <PrimaryButton />
          </div>
        </div>

        {/* Wide banner */}
        <div className="relative mx-auto mt-12 aspect-[1672/941] w-[92%] max-w-[1000px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <Image
            src="/assets/about/header-vishal-and-anurag.avif"
            alt="Vishal Singh and Anurag Maurya"
            fill
            priority
            sizes="(max-width: 1000px) 92vw, 1000px"
            className="object-cover"
          />
        </div>

        {/* Team: centered heading + bounded marquee */}
        <section className="mt-24 md:mt-32">
          <div className="mx-auto w-[92%] max-w-[820px] text-center">
            <h2
              className="text-[28px] font-normal leading-[1.1] text-white md:text-[40px]"
              style={{ fontFamily: "var(--font-schibsted)" }}
            >
              Meet our team of AI experts
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[16px] leading-8 text-white/60 md:text-[17px]">
              We are a team of ex-business owners, engineers, and passionate AI
              experts
            </p>
          </div>

          <div className="mx-auto mt-12 w-[92%] max-w-[1080px] overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
            <ul className="about-marquee flex w-max gap-6">
              {[...team, ...team].map((member, index) => {
                const isClone = index >= team.length;
                return (
                  <li
                    key={`${member.name}-${index}`}
                    aria-hidden={isClone}
                    className="group relative h-[306px] w-[263px] shrink-0 overflow-hidden rounded-3xl"
                  >
                    <Image
                      src={member.image}
                      alt={isClone ? "" : member.name}
                      fill
                      sizes="263px"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 0%, #0d0d0d 100%)",
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-4 pb-6 text-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isClone ? -1 : 0}
                        aria-hidden={isClone}
                        className="mb-3 inline-flex items-center rounded-full bg-white/15 px-5 py-2 text-[15px] text-white opacity-0 backdrop-blur-sm transition duration-200 hover:bg-white/25 focus-visible:opacity-100 group-hover:opacity-100"
                      >
                        View on Linkedin
                      </a>
                      <h3 className="text-[17px] font-medium text-white">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-[14px] text-white/75">
                        {member.role}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Principles */}
        <section className="mt-24 md:mt-32">
          <div className="mx-auto w-[92%] max-w-[820px] text-center">
            <Eyebrow>Our Principles</Eyebrow>
            <h2
              className="mt-4 text-[28px] font-normal leading-[1.1] text-white md:text-[40px]"
              style={{ fontFamily: "var(--font-schibsted)" }}
            >
              Principles that guide us
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[16px] leading-8 text-white/60 md:text-[17px]">
              A few beliefs shape every system we build and every decision we
              make.
            </p>
          </div>

          <div className="mx-auto mt-12 grid w-[92%] max-w-[1080px] gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item.title}
                className="flex flex-col border border-white/10 bg-white/[0.03] p-7 md:p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-[#9ff690] bg-[rgba(162,249,147,0.10)] text-[#9ff690]">
                  {item.icon}
                </span>
                <h3
                  className="mt-6 text-xl text-white"
                  style={{ fontFamily: "var(--font-schibsted)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-[17px] leading-8 text-white/55">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
