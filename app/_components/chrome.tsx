"use client";

import { usePathname } from "next/navigation";

/* Hides the global navbar/footer on routes that ship their own chrome
   (the landing template: home, about, and privacy). */
const OWN_CHROME = ["/", "/about", "/privacy"];

export function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname && OWN_CHROME.includes(pathname)) return null;
  return <>{children}</>;
}
