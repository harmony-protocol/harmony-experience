"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { track } from "../_lib/analytics";

/* Plain anchor that fires a Umami custom event on click. Use anywhere a server
   component needs a tracked link without becoming a client component itself. */
export function TrackedLink({
  event,
  eventProps,
  onClick,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  eventProps?: Record<string, string | number | boolean>;
  children: ReactNode;
}) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, eventProps);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
