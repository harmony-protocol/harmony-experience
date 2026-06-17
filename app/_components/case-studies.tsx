import Image from "next/image";
import { CASE_STUDIES, type CaseStudy } from "../_lib/case-studies";

/* ------------------------------ ATOMS ------------------------------ */
function ArrowButton() {
  // white button + dark arrow, sits on the coloured card background.
  return (
    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden bg-white">
      <Image
        src="/assets/talk-to-sales-icon.svg"
        alt=""
        width={16}
        height={15}
        className="h-[15px] w-4 transition-transform duration-300 ease-out group-hover:-translate-y-8"
        style={{ filter: "invert(1)" }}
      />
      <Image
        src="/assets/talk-to-sales-icon.svg"
        alt=""
        aria-hidden
        width={16}
        height={15}
        className="absolute h-[15px] w-4 translate-y-8 transition-transform duration-300 ease-out group-hover:translate-y-0"
        style={{ filter: "invert(1)" }}
      />
    </span>
  );
}

/* ------------------------------ CARD ------------------------------ */
function Card({ study }: { study: CaseStudy }) {
  return (
    <a
      href={`/case-study/${study.slug}`}
      className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden p-7 md:min-h-[420px] md:p-8"
      style={{ backgroundColor: study.accent }}
    >
      {study.photo && (
        <>
          <Image
            src={study.photo}
            alt={study.client}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="ken-burns object-cover"
          />
          {/* legibility scrim, single top-to-bottom gradient */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.85) 100%)",
            }}
          />
        </>
      )}

      <div className="relative z-[1]">
        <Image
          src={study.logo.src}
          alt={study.client}
          width={study.logo.w}
          height={study.logo.h}
          className={`${study.logo.cls ?? "h-8"} w-auto`}
        />
        <p className="mt-3 text-[13px] font-medium uppercase tracking-[0.08em] text-white/85">
          {study.industry}
        </p>
      </div>

      <div className="relative z-[1] flex items-end justify-between gap-4">
        <p className="max-w-[20ch] text-[17px] leading-7 text-white/90">
          {study.cardLine}
        </p>
        <ArrowButton />
      </div>
    </a>
  );
}

/* ------------------------------ SECTION ------------------------------ */
export function CaseStudies() {
  return (
    <div className="grid gap-5 md:grid-cols-3 md:gap-6">
      {CASE_STUDIES.map((study) => (
        <Card key={study.slug} study={study} />
      ))}
    </div>
  );
}
