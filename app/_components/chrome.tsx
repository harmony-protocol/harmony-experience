"use client";

import { usePathname } from "next/navigation";

/* Hides the global navbar/footer on routes that ship their own chrome
   (currently the /agentflow template copy). */
export function Chrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/agentflow")) return null;
  return <>{children}</>;
}
