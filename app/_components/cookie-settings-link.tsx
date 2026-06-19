"use client";

import { klaroConfig } from "../_lib/klaro-config";

/* Footer link that reopens the cookie preferences. Klaro is already set up by
   CookieConsent, so importing it here reuses the same cached module instance;
   show(config, true) forces the preferences modal open. This gives visitors a
   site-wide way to change or withdraw consent (as easy as giving it). */
export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => import("klaro").then((klaro) => klaro.show(klaroConfig, true))}
    >
      Cookie settings
    </button>
  );
}
