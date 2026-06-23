import type { ReactNode } from "react";

const GRID =
  "pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:25%_100%]";

export function SolutionsShell({
  children,
  topPadded = true,
}: {
  children: ReactNode;
  topPadded?: boolean;
}) {
  return (
    <main className={`bg-black ${topPadded ? "pt-28 md:pt-32" : ""}`}>
      {children}
    </main>
  );
}

export function SolutionsSection({
  children,
  bordered = true,
  className = "",
  innerClassName = "py-20 md:py-28",
}: {
  children: ReactNode;
  bordered?: boolean;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden ${bordered ? "border-b border-white/10" : ""} ${className}`}
    >
      <div className={`relative mx-auto w-[92%] max-w-[1200px] ${innerClassName}`}>
        <div aria-hidden className={GRID} />
        <div className="relative">{children}</div>
      </div>
    </section>
  );
}

export function SolutionsSub({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`max-w-lg text-[17px] leading-8 text-white/55 ${className}`}
    >
      {children}
    </p>
  );
}
