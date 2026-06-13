"use client";

import { useEffect, useRef, useState } from "react";

const ACCENT = "#9ff690";

const LINE =
  "M0 50 L22 44 L44 47 L66 36 L88 40 L110 28 L132 32 L154 20 L176 24 L198 12 L220 16 L240 6";

/* Area sparkline that draws itself once the chart scrolls into view,
   mirroring the CountUp trigger. */
export function DashChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-16">
      <svg
        viewBox="0 0 240 64"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="af-spark-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.28" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={`${LINE} L240 64 L0 64 Z`}
          fill="url(#af-spark-fill)"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 700ms ease-out 500ms",
          }}
        />
        <path
          d={LINE}
          fill="none"
          stroke={ACCENT}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={inView ? 0 : 1}
          style={{ transition: "stroke-dashoffset 1200ms ease-out" }}
        />
      </svg>
      <span
        className="absolute right-0 top-[9.4%]"
        style={{
          transform: "translate(35%, -50%)",
          opacity: inView ? 1 : 0,
          transition: "opacity 400ms ease-out 1100ms",
        }}
      >
        <span className="relative flex h-1.5 w-1.5 items-center justify-center">
          <span
            className="af-ping-soft absolute inline-flex h-full w-full rounded-full"
            style={{ backgroundColor: ACCENT }}
          />
          <span
            className="relative inline-flex h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: ACCENT }}
          />
        </span>
      </span>
    </div>
  );
}
