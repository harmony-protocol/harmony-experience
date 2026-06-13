"use client";

import { useEffect } from "react";

/* Loads the official Cal.com vanilla embed once and themes it. Any element on
   the page with data-cal-link="harmony-vishal/discovery" then opens the booking
   flow in a modal overlay on the same page (no navigation). */
export function CalInit() {
  useEffect(() => {
    /* eslint-disable */
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", { origin: "https://cal.com" });
    Cal("ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: { dark: { "cal-brand": "#ffffff" } },
    });
    // Warm the modal booking iframe in the background so it opens faster.
    Cal("preload", { calLink: "harmony-vishal/discovery", type: "modal" });
    /* eslint-enable */
  }, []);

  return null;
}
