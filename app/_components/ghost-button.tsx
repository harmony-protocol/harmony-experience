"use client";

import type { ReactNode } from "react";
import { track } from "../_lib/analytics";

export function GhostButton({
  children,
  href,
  dark = true,
  event,
  eventProps,
}: {
  children: ReactNode;
  href: string;
  dark?: boolean;
  event?: string;
  eventProps?: Record<string, string | number | boolean>;
}) {
  return (
    <a
      href={href}
      onClick={event ? () => track(event, eventProps) : undefined}
      className={`inline-flex h-10 items-center border px-5 text-base font-medium transition ${
        dark
          ? "border-[#b5f4a2] text-white hover:bg-white/10"
          : "border-black/20 text-black hover:bg-black/5"
      }`}
    >
      {children}
    </a>
  );
}
