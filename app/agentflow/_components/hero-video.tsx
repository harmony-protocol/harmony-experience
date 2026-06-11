"use client";

import { useEffect } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

const isDev = process.env.NODE_ENV === "development";

/* Main hero VSL, embedded with Wistia's official React player.
   No wrapper/border here on purpose, styling is controlled in the Wistia
   dashboard.

   In development we opt out of Wistia's tracking beacons
   (distillery.wistia.com and pipedream.wistia.com). They get blocked by
   adblockers or 500 on Wistia's side, and the player console.error()s the
   failure, which the Next.js dev overlay surfaces as "Failed to fetch".
   Production keeps full analytics. */
export function HeroVideo() {
  useEffect(() => {
    if (!isDev) return;
    const w = window as unknown as { _wq?: unknown[] };
    w._wq = w._wq || [];
    w._wq.push((W: { consent: (v: boolean) => void }) => W.consent(false));
  }, []);

  return <WistiaPlayer mediaId="6mhelhqw1m" doNotTrack={isDev} />;
}
