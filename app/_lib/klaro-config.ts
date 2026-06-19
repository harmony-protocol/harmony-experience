/* Klaro (open-source consent manager) config. Self-hosted: no backend, no
   database. The visitor's choice is stored client-side in the cookie named
   below and re-applied on every visit until it expires.

   Styling is driven by Klaro's CSS variables, which we override to match the
   site theme in globals.css (scoped to .harmony-klaro). */

// Pushes the consent signal to the GTM dataLayer (Google Consent Mode v2).
// The consent-default ("denied") is set in layout.tsx before GTM loads, so this
// is the "update" that flips analytics_storage to "granted" once the visitor
// opts in. The GTM snippet keeps loading regardless; tags configured to respect
// consent (e.g. Microsoft Clarity) read these signals to decide whether to fire.
// Remaining manual step: enable consent on the Clarity tag in the GTM container
// (or require analytics_storage) so it actually waits for this signal.
function signalGtm(granted: boolean): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  const state = granted ? "granted" : "denied";
  // Route through the global gtag defined by the consent-default script in
  // layout.tsx. GTM's consent API only registers the "arguments" object that
  // gtag pushes; a plain array push is ignored, so the update never lands.
  // Fall back to a local gtag shim (same arguments-object shape) if the global
  // is missing. Analytics only, no advertising/marketing signals.
  const gtag =
    typeof w.gtag === "function"
      ? w.gtag
      : function () {
          // eslint-disable-next-line prefer-rest-params
          (w.dataLayer as unknown[]).push(arguments);
        };
  gtag("consent", "update", { analytics_storage: state });
}

export const klaroConfig = {
  version: 1,
  // Class added to Klaro's root element. globals.css targets it for theming.
  additionalClass: "harmony-klaro",

  // Client-side store of the user's choice.
  cookieName: "harmony_consent",
  cookieExpiresAfterDays: 365,

  // Compact dark notice (not "wide"), pinned bottom-left via globals.css.
  styling: { theme: ["dark"] },

  // Show a slim notice (not a forced modal) on first visit. The detailed
  // modal opens only when the visitor clicks to customize.
  noticeAsModal: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  // Keep it minimal: no "powered by" line.
  disablePoweredBy: true,
  htmlTexts: true,

  translations: {
    zz: { privacyPolicyUrl: "/privacy" },
    en: {
      privacyPolicyUrl: "/privacy",
      consentModal: {
        title: "Cookie preferences",
        description:
          "We use cookies to understand how the site is used and to improve it. You choose what loads.",
      },
      consentNotice: {
        description: "We use cookies for functionality and analytics purposes.",
        learnMore: "Customize",
      },
      acceptAll: "Accept all",
      acceptSelected: "Save choices",
      decline: "Decline",
      ok: "Accept all",
      close: "Close",
      privacyPolicy: { name: "privacy policy", text: "Read our {privacyPolicy}." },
      purposes: {
        analytics: "Analytics",
      },
      "google-tag-manager": {
        description: "Loads analytics tags via Google Tag Manager. No marketing or advertising.",
      },
    },
  },

  services: [
    {
      name: "google-tag-manager",
      title: "Google Tag Manager",
      purposes: ["analytics"],
      // Off until the visitor opts in.
      default: false,
      callback: signalGtm,
    },
  ],
};
