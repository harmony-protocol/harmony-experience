import Link from "next/link";
import { ArrowRight } from "lucide-react";
import audiences from "../_data/audiences.json";
import {
  SolutionsShell,
  SolutionsSection,
  SolutionsSub,
} from "../_components/solutions-shell";
import { Eyebrow } from "../_components/marketing-page";
import type { AudienceConfig } from "../_components/marketing-page";
import { headingStyle } from "../_lib/brand-fonts";

const data = audiences as Record<string, AudienceConfig>;

export default function SolutionsPage() {
  const entries = Object.entries(data);

  return (
    <SolutionsShell topPadded={false}>
      <SolutionsSection
        bordered={false}
        innerClassName="pt-28 pb-20 md:pt-32 md:pb-28"
      >
        <div className="mx-auto max-w-[680px] text-center">
          <Eyebrow>Solutions</Eyebrow>
          <h1
            className="mt-6 text-[32px] font-normal leading-[1.1] text-white md:text-[46px]"
            style={headingStyle}
          >
            AI powered systems
            <br />
            built for <span className="text-[#9ff690]">your business</span>
          </h1>
          <SolutionsSub className="mx-auto mt-5">
            Choose the path closest to your business and see how Harmony
            automates the work slowing your team down.
          </SolutionsSub>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {entries.map(([slug, audience]) => (
            <li key={slug}>
              <Link
                href={`/solutions/${slug}`}
                className="group flex h-full min-h-[132px] flex-col justify-between rounded-none border border-white/10 bg-[#0b0c0c] p-5 transition hover:border-[#9ff690] hover:bg-[#101210] md:p-6"
              >
                <div>
                  <p
                    className="text-[17px] font-medium text-white transition group-hover:text-[#9ff690]"
                    style={headingStyle}
                  >
                    {audience.shortLabel}
                  </p>
                  <p className="mt-3 text-[17px] leading-8 text-white/50">
                    {audience.tagline}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-[17px] font-medium text-white/45 transition group-hover:text-white">
                  View solution
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-[#9ff690]"
                    strokeWidth={2}
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SolutionsSection>
    </SolutionsShell>
  );
}
