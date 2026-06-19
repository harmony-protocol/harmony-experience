"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { SlidersHorizontal } from "lucide-react";
import "klaro/dist/klaro.css";
import { klaroConfig } from "../_lib/klaro-config";

/* Mounts the self-hosted Klaro consent banner. Loads in every environment
   (including `next dev`) so the banner is visible while developing, unlike the
   production-only analytics inits. Klaro stores the choice client-side and only
   re-shows the notice when no valid consent cookie exists. Visitors reopen
   their preferences later via the "Cookie settings" footer link.

   Klaro renders its own DOM (Preact), so we replace the "Customize" link's text
   with the lucide sliders icon by portaling it into that link once it mounts.
   The original "Customize" text stays in the DOM (hidden via font-size:0 in
   globals.css) so screen readers still announce it.

   Guarded so Klaro initializes once despite React's double render in dev. */
let started = false;

const CUSTOMIZE_SELECTOR =
  ".klaro .cookie-notice:not(.cookie-modal-notice) .cn-learn-more";

export function CookieConsent() {
  const [customizeLink, setCustomizeLink] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (started) return;
    started = true;
    // Dynamic import keeps Klaro out of the server bundle (browser-only API).
    import("klaro").then((klaro) => klaro.setup(klaroConfig));
  }, []);

  // Wait for Klaro's notice (and its Customize link) to mount, then target it.
  useEffect(() => {
    const find = () =>
      document.querySelector(CUSTOMIZE_SELECTOR) as HTMLElement | null;
    const existing = find();
    if (existing) {
      setCustomizeLink(existing);
      return;
    }
    const observer = new MutationObserver(() => {
      const el = find();
      if (el) {
        setCustomizeLink(el);
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  if (!customizeLink) return null;
  // stroke=currentColor, so the icon picks up the link color set in globals.css
  // (light grey, green on hover).
  return createPortal(
    <SlidersHorizontal size={18} strokeWidth={2} aria-hidden="true" />,
    customizeLink,
  );
}
