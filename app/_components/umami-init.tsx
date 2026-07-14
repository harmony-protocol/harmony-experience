"use client";

import Script from "next/script";

/* Loads the official Umami Cloud tracker on the client. The script auto-tracks
   pageviews and binds window.umami for the custom events fired via
   _lib/analytics.ts. Only loads in production, matching the no-op in
   _lib/analytics.ts.

   Note: unlike the old Plausible setup (npm-bundled first-party), the Umami
   Cloud script loads from cloud.umami.is, which sits on common adblock lists.
   Hits from visitors running blockers will be dropped. Self-hosting Umami with
   a renamed/proxied script path is the only way to make it unblockable. */
export function UmamiInit() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id="956a81cc-e18b-4202-9490-966717828c30"
      strategy="afterInteractive"
    />
  );
}
