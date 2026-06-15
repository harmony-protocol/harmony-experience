"use client";

import { init } from "@plausible-analytics/tracker";

// Guard so init runs once even with React's double render in dev.
let started = false;

/* Initializes the official Plausible tracker on the client. The tracking code
   is bundled with the app, so it loads first-party and adblockers cannot block
   it. Events post to /pl/event, which Amplify rewrites (status 200) to
   plausible.io/api/event at the edge, so the real client IP and User-Agent
   reach Plausible and the hits get recorded.

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
      endpoint: "/pl/event",
    });
  }

  return null;
}
