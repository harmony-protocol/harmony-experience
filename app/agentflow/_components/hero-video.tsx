"use client";

import { WistiaPlayer } from "@wistia/wistia-player-react";

/* Main hero VSL, embedded with Wistia's official React player.
   No wrapper/border here on purpose, styling is controlled in the Wistia
   dashboard. */
export function HeroVideo() {
  return <WistiaPlayer mediaId="6mhelhqw1m" aspect={1.7777777777777777} />;
}
