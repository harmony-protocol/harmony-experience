"use client";

import { init } from "@plausible-analytics/tracker";

// Guard so init runs once even with React's double render in dev.
let started = false;

/* Initializes the official Plausible tracker on the client. The tracking code
   is bundled with the app, so the script always loads first-party and
   adblockers cannot block it. Events post directly to plausible.io (the default
   endpoint) so the real client IP and User-Agent reach Plausible and the hits
   get recorded. We tried proxying events through Amplify, but the edge rewrite
   dropped the client identity and Plausible silently discarded everything.

   init runs during render (not in an effect) so window.plausible is bound
   before any child MountTracker/ViewTracker effect fires. Only runs in
   production, matching the no-op in _lib/analytics.ts. */
export function PlausibleInit() {
  if (
    typeof window !== "undefined" &&
    !started &&
    process.env.NODE_ENV === "production"
  ) {
    started = true;
    init({
      domain: "getharmony.ai",
    });
  }

  return null;
}
