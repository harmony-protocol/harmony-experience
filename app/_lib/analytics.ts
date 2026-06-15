// Thin wrapper around Plausible's custom-event API. Plausible is loaded in
// production by next-plausible (PlausibleProvider in app/layout.tsx), which
// defines window.plausible. The provider only renders the script in production,
// so we no-op outside production too and local traffic never pollutes analytics.

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number | boolean> },
    ) => void;
  }
}

export function track(
  event: string,
  props?: Record<string, string | number | boolean>,
) {
  if (process.env.NODE_ENV !== "production") return;
  if (typeof window === "undefined") return;
  window.plausible?.(event, props ? { props } : undefined);
}
