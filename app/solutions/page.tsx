import { ArrowRight } from "lucide-react";
import audiences from "../_data/audiences.json";
import { SolutionCardLink } from "../_components/solution-card-link";
import {
  SolutionsShell,
  SolutionsSection,
} from "../_components/solutions-shell";
import { Eyebrow } from "../_components/marketing-page";
import type { AudienceConfig } from "../_components/marketing-page";
import { headingStyle } from "../_lib/brand-fonts";

const data = audiences as Record<string, AudienceConfig>;

// Cards we want surfaced first in the grid, in order. Everything else keeps its
// natural order from the data file.
const FEATURED_ORDER = ["agencies"];

export default function SolutionsPage() {
  const entries = Object.entries(data).sort(([a], [b]) => {
    const ai = FEATURED_ORDER.indexOf(a);
    const bi = FEATURED_ORDER.indexOf(b);
    if (ai === -1 && bi === -1) return 0;
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

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
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {entries.map(([slug, audience]) => (
            <li key={slug}>
              <SolutionCardLink
                slug={slug}
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
              </SolutionCardLink>
            </li>
          ))}
        </ul>
      </SolutionsSection>
    </SolutionsShell>
  );
}
