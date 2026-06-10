"use client";

import { useEffect, useRef, useState } from "react";

const ACCENT = "#9ff690";
const DASH_BARS = [40, 62, 30, 78, 52, 88, 46, 70, 58, 84, 50, 92];

/* Bars grow from the baseline once the chart scrolls into view,
   mirroring the CountUp trigger. */
export function DashBars() {
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
    <div ref={ref} className="flex h-12 items-end gap-[3px]">
      {DASH_BARS.map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-t-[2px]"
          style={{
            height: inView ? `${h}%` : "0%",
            backgroundColor: i % 3 === 0 ? ACCENT : "rgba(255,255,255,0.14)",
            transition: "height 600ms ease-out",
            transitionDelay: `${i * 45}ms`,
          }}
        />
      ))}
    </div>
  );
}
