"use client";

import { useEffect } from "react";
import { track } from "../_lib/analytics";

/* Fires a Plausible event once when the element with `targetId` first scrolls
   into view. Used for section-level engagement goals (e.g. pricing seen). */
export function ViewTracker({
  targetId,
  event,
}: {
  targetId: string;
  event: string;
}) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          track(event);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [targetId, event]);

  return null;
}

/* Fires a Plausible event once on mount. Used for whole-page view goals on
   server-rendered pages that need a client-side signal. */
export function MountTracker({ event }: { event: string }) {
  useEffect(() => {
    track(event);
  }, [event]);

  return null;
}
