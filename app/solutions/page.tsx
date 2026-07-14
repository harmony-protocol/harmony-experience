import type { Metadata } from "next";
import {
  SolutionsShell,
  SolutionsSection,
} from "../_components/solutions-shell";
import { Eyebrow } from "../_components/marketing-page";
import { headingStyle } from "../_lib/brand-fonts";
import { FirmFinder } from "./firm-finder";

export const metadata: Metadata = {
  title: "Solutions | Harmony for digital agencies",
  description:
    "Check if Harmony supports your digital agency. We run marketing agencies, law firms, IT services, consulting, recruiting, finance, and investment houses, down to the niche inside each.",
};

export default function SolutionsPage() {
  return (
    <SolutionsShell topPadded={false}>
      <SolutionsSection
        bordered={false}
        innerClassName="pt-28 pb-20 md:pt-32 md:pb-28"
      >
        <div className="mx-auto max-w-[720px] text-center">
          <Eyebrow>Solutions</Eyebrow>
          <h1
            className="mt-6 text-[32px] font-normal leading-[1.1] text-white md:text-[46px]"
            style={headingStyle}
          >
            Is <span className="text-[#9ff690]">your firm</span> a fit?
          </h1>
        </div>

        <FirmFinder />
      </SolutionsSection>
    </SolutionsShell>
  );
}
