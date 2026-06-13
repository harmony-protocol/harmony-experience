import type { ReactNode } from "react";

const GRID =
  "pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:25%_100%]";

export function SolutionsShell({ children }: { children: ReactNode }) {
  return <main className="bg-black pt-28 md:pt-32">{children}</main>;
}

export function SolutionsSection({
  children,
  bordered = true,
  className = "",
}: {
  children: ReactNode;
  bordered?: boolean;
  className?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden ${bordered ? "border-b border-white/10" : ""} ${className}`}
    >
      <div className="relative mx-auto w-[92%] max-w-[1320px] px-4 py-20 md:px-8 md:py-28">
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
