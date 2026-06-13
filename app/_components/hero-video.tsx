"use client";

import { useEffect } from "react";
import { preconnect } from "react-dom";
import { WistiaPlayer } from "@wistia/wistia-player-react";

const isDev = process.env.NODE_ENV === "development";

/* Main hero VSL, embedded with Wistia's official React player.
   No wrapper/border here on purpose, styling is controlled in the Wistia
   dashboard.

   The explicit aspect matches the media (960x540). With it, the player
   reserves its final height from the first server-rendered paint instead
   of waiting on an async swatch fetch, which caused the hero to jump
   once the player expanded.

   In development we opt out of Wistia's tracking beacons
   (distillery.wistia.com and pipedream.wistia.com). They get blocked by
   adblockers or 500 on Wistia's side, and the player console.error()s the
   failure, which the Next.js dev overlay surfaces as "Failed to fetch".
   Production keeps full analytics. */
export function HeroVideo() {
  preconnect("https://fast.wistia.com");
  preconnect("https://fast.wistia.net");
  preconnect("https://embed-ssl.wistia.com");

  useEffect(() => {
    if (!isDev) return;
    const w = window as unknown as { _wq?: unknown[] };
    w._wq = w._wq || [];
    w._wq.push((W: { consent: (v: boolean) => void }) => W.consent(false));
  }, []);

  return (
    <WistiaPlayer mediaId="6mhelhqw1m" aspect={16 / 9} doNotTrack={isDev} />
  );
}
