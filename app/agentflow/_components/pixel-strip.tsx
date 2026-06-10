const ACCENT = "#9ff690";

export function PixelStrip({
  className = "",
  count = 420,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <div className={`pointer-events-none flex flex-wrap content-end gap-[3px] ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        const lit = (i * 37) % 11 === 0;
        return (
          <span
            key={i}
            className={lit ? "af-pixel" : ""}
            style={{
              width: 6,
              height: 6,
              backgroundColor: lit ? ACCENT : "rgba(255,255,255,0.05)",
              animationDelay: lit ? `${(i % 13) * 0.2}s` : undefined,
            }}
          />
        );
      })}
    </div>
  );
}
