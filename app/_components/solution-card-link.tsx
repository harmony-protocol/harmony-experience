"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { track } from "../_lib/analytics";

/* Solution grid card. Keeps Next.js client-side routing while firing a
   Plausible event so we can see which audiences draw the most interest. */
export function SolutionCardLink({
  slug,
  className,
  children,
}: {
  slug: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={`/solutions/${slug}`}
      className={className}
      onClick={() => track("Solution Card Clicked", { solution: slug })}
    >
      {children}
    </Link>
  );
}
