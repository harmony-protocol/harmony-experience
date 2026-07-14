// Thin wrapper around Umami's custom-event API. Umami is loaded in production by
// the official tracker script (UmamiInit in app/layout.tsx), which binds
// window.umami. We no-op outside production so local traffic never pollutes
// analytics.

declare global {
  interface Window {
    umami?: {
      track: (
        event: string,
        data?: Record<string, string | number | boolean>,
      ) => void;
      identify: (
        id: string,
        data?: Record<string, string | number | boolean>,
      ) => void;
    };
  }
}

export function track(
  event: string,
  props?: Record<string, string | number | boolean>,
) {
  if (process.env.NODE_ENV !== "production") return;
  if (typeof window === "undefined") return;
  window.umami?.track(event, props);
}
