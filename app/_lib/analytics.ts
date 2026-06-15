// Thin wrapper around Plausible's custom-event API. Plausible is initialized in
// production by the official tracker (PlausibleInit in app/layout.tsx), which
// binds window.plausible. We no-op outside production so local traffic never
// pollutes analytics.

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
