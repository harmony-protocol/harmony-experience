import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CASE_STUDIES, getCaseStudy, type CaseStudy } from "../../_lib/case-studies";
import { headingStyle } from "../../_lib/brand-fonts";

const CAL_LINK = "harmony-vishal/discovery";
const CAL_CONFIG = JSON.stringify({ layout: "month_view", theme: "dark" });
const ACCENT = "#9ff690";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.client} | Harmony Case Study`,
    description: study.summary,
  };
}

/* eyebrow badge, mirrors the homepage Eyebrow (dark variant) */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-[#9ff690] bg-[rgba(162,249,147,0.10)] px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] text-white">
      <span className="h-1.5 w-1.5" style={{ backgroundColor: ACCENT }} />
      {children}
    </span>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/10 py-4">
      <div className="text-xs uppercase tracking-[0.08em] text-white/40">
        {label}
      </div>
      <div className="mt-1.5 text-[15px] text-white/85">{value}</div>
    </div>
  );
}

function Block({ title, paras }: { title: string; paras: string[] }) {
  return (
    <div>
      <h2 className="text-[22px] text-white md:text-[26px]" style={headingStyle}>
        {title}
      </h2>
      <div className="mt-4 space-y-5">
        {paras.map((p, i) => (
          <p key={i} className="text-[17px] leading-8 text-white/75">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study: CaseStudy | undefined = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <div className="mx-auto w-[92%] max-w-[1200px] py-14 md:py-20">
      <Link
        href="/#case-studies"
        className="mt-3 inline-flex items-center gap-1.5 text-[17px] text-white/55 transition hover:text-white"
      >
        <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={2.25} />
        Back
      </Link>

      {/* Hero */}
      <div className="mt-8 max-w-3xl">
        <Eyebrow>Case Study</Eyebrow>
        <h1
          className="mt-5 text-[34px] leading-[1.1] text-white md:text-[52px]"
          style={headingStyle}
        >
          {study.headline}
        </h1>
      </div>

      {/* Hero: header image (or coloured band) with the logo overlay */}
      <div
        className="relative mt-10 flex aspect-[16/9] items-end overflow-hidden"
        style={{ backgroundColor: study.accent }}
      >
        {study.photo && (
          <>
            <Image
              src={study.photo}
              alt={study.client}
              fill
              sizes="(max-width: 1200px) 92vw, 1200px"
              className="object-cover"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 60%)",
              }}
            />
          </>
        )}
        <Image
          src={study.logo.src}
          alt={study.client}
          width={study.logo.w}
          height={study.logo.h}
          className="relative z-[1] m-7 h-10 w-auto md:m-9 md:h-12"
        />
      </div>

      {/* Stat row: hidden for now, numbers to be filled in later.
      <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-3">
        {study.stats.map((s, i) => (
          <div key={i} className="bg-black px-7 py-8">
            <div className="text-[44px] leading-none text-white" style={headingStyle}>
              {s.value}
            </div>
            <div className="mt-3 text-[15px] leading-snug text-white/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
      */}

      {/* Body: main prose + sidebar */}
      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_280px] md:gap-16">
        <div className="space-y-12 md:order-1">
          <p className="text-[17px] leading-8 text-white/85">{study.summary}</p>
          <Block title="The challenge" paras={study.challenge} />
          <Block title="What we built" paras={study.solution} />
          <Block title="The outcome" paras={[study.outcome]} />
        </div>

        <aside className="md:order-2">
          <div className="md:sticky md:top-24">
            <MetaRow label="Client" value={study.client} />
            <MetaRow label="Industry" value={study.industry} />
            {study.duration && (
              <MetaRow label="Duration" value={study.duration} />
            )}
            {study.country && <MetaRow label="Country" value={study.country} />}
          </div>
        </aside>
      </div>

      {/* CTA */}
      <div className="mt-16 border-t border-white/10 pt-14">
        <h2
          className="max-w-xl text-[28px] leading-[1.15] text-white md:text-[36px]"
          style={headingStyle}
        >
          Want this running in your business?
        </h2>
        <button
          type="button"
          data-cal-link={CAL_LINK}
          data-cal-config={CAL_CONFIG}
          data-loc="case-study"
          className="mt-6 inline-flex h-11 cursor-pointer items-center px-6 text-base font-medium text-black transition hover:brightness-95"
          style={{ backgroundColor: ACCENT }}
        >
          Book a Call
        </button>
      </div>
    </div>
  );
}
