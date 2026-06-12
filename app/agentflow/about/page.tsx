import type { Metadata } from "next";
import Link from "next/link";
import { Cabin, Schibsted_Grotesk } from "next/font/google";
import { AgentflowNav } from "../_components/nav";

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

const team = [
  { name: "Vishal Singh", role: "CEO & Head of Product" },
  { name: "Anurag Maurya", role: "CTO & AI Researcher" },
  { name: "Sid", role: "Automations Expert" },
  { name: "Ankit Raj", role: "AI Scalability Consultant" },
];

export const metadata: Metadata = {
  title: "About | Harmony AI",
  description:
    "Harmony is a done-for-you AI platform that helps teams and leaders automate their operations.",
};

export default function AgentflowAboutPage() {
  return (
    <div
      className={`${schibsted.variable} ${cabin.variable} min-h-screen bg-black text-white`}
      style={{ fontFamily: "var(--font-cabin)" }}
    >
      <AgentflowNav />

      <main className="mx-auto w-[92%] max-w-[820px] pb-24 pt-28 md:pt-32">
        <Link
          href="/agentflow"
          className="text-[15px] text-white/45 transition hover:text-white"
        >
          ← Back to home
        </Link>

        <h1
          className="mt-8 text-[36px] font-medium leading-tight text-white md:text-[48px]"
          style={{ fontFamily: "var(--font-schibsted)" }}
        >
          We help startups, agencies and firms scale faster
        </h1>

        <div className="mt-10 space-y-4 text-[16px] leading-8 text-white/65 md:text-[17px]">
          <p>Dear future partner,</p>
          <p>
            Harmony is a &ldquo;done-for-you&rdquo; AI platform that helps teams
            and leaders automate their operations.
          </p>
          <p>
            We observed that, while there are multiple technical solutions out
            there such as OpenClaw, there is no end-to-end product that could be
            quickly deployed and works on a fixed pricing plan.
          </p>
          <p>
            This led us to researching on, and rebuilding the agentic AI stack
            from scratch specifically for growing businesses.
          </p>
          <p>
            We are a team of passionate young AI experts on a mission to help
            your business scale faster.
          </p>
          <p>
            Thanks,
            <br />
            Team Harmony
          </p>
        </div>

        <h2
          className="mt-16 text-[22px] font-medium text-white md:text-[26px]"
          style={{ fontFamily: "var(--font-schibsted)" }}
        >
          Meet our team of AI experts
        </h2>
        <p className="mt-4 text-[16px] leading-8 text-white/65 md:text-[17px]">
          We are a team of ex-business owners, engineers, and passionate AI
          experts
        </p>

        <ul className="mt-8 space-y-6 border-t border-white/10 pt-8">
          {team.map((member) => (
            <li key={member.name}>
              <p className="text-[18px] text-white">{member.name}</p>
              <p className="mt-1 text-[15px] text-white/50">{member.role}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
