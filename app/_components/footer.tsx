import Image from "next/image";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.333 10L16.667 10M16.667 10L11.667 5M16.667 10L11.667 15" />
    </svg>
  );
}

export function Footer() {
  return (
    <div className="relative">
      {/* Chip image */}
      <div
        className="pointer-events-none absolute left-0 right-0 z-0 flex justify-center top-[130px] md:top-[70px]"
      >
        <Image
          src="/assets/footer-chip-image.avif"
          alt=""
          width={3126}
          height={2146}
          className="w-full max-w-[700px] object-contain"
        />
      </div>

      {/* Spacer so the chip is visible above the footer */}
      <div style={{ height: 280 }} />

      {/* Footer - glass effect */}
      <footer
        className="relative z-[1]"
        style={{
          padding: "0 20px",
          background: "rgba(2, 2, 2, 0.35)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          borderTop: "1px solid rgba(101, 103, 113, 0.15)",
        }}
      >
        <div
          className="relative mx-auto flex flex-col items-center"
          style={{ maxWidth: 1224, gap: 80 }}
        >
          {/* Vertical grid lines — 2 on mobile, 4 on desktop */}
          <div
            className="pointer-events-none absolute inset-0 grid grid-cols-2 md:grid-cols-4"
            aria-hidden="true"
            style={{
              borderLeft: "1px solid rgba(101, 103, 113, 0.15)",
              borderRight: "1px solid rgba(101, 103, 113, 0.15)",
            }}
          >
            <div style={{ borderRight: "1px solid rgba(101, 103, 113, 0.15)" }} />
            <div className="hidden md:block" style={{ borderRight: "1px solid rgba(101, 103, 113, 0.15)" }} />
            <div className="hidden md:block" style={{ borderRight: "1px solid rgba(101, 103, 113, 0.15)" }} />
            <div />
          </div>

          {/* Social Links Row — 2x2 on mobile, 1x4 on desktop */}
          <div className="grid w-full grid-cols-2 md:grid-cols-4">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/company/getharmony" },
              { label: "Twitter", href: "https://x.com/harmonyai_" },
              { label: "Blog", href: "https://getharmony.ai/blog" },
              { label: "Status Page", href: "https://getharmony.ai" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between transition"
                style={{
                  minHeight: 72,
                  padding: 24,
                  borderBottom: "1px solid rgba(101, 103, 113, 0.15)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <span className="text-base">{link.label}</span>
                <span className="opacity-60 transition-opacity group-hover:opacity-100">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>

          {/* Footer Columns */}
          <div
            className="grid w-full grid-cols-2 md:grid-cols-4 gap-y-10"
            style={{ paddingBottom: 256 }}
          >
            {/* Company Info */}
            <div className="col-span-2 flex flex-col gap-6 px-5 md:px-0" style={{ paddingRight: 20 }}>
              <div className="flex flex-col gap-2">
                <Link href="/" className="block" style={{ width: 127, aspectRatio: "3.5" }}>
                  <Image
                    src="/assets/logo-full-dark.png"
                    alt="Harmony"
                    width={633}
                    height={161}
                    className="h-full w-full object-contain"
                  />
                </Link>
                <p style={{ color: "#d0d1d4", fontSize: 15, lineHeight: 1.6 }}>
                  Stop syncing, start shipping
                </p>
              </div>
              <p
                className="uppercase tracking-wider"
                style={{
                  color: "rgb(121, 125, 133)",
                  fontSize: 13,
                  lineHeight: 1.6,
                  fontFamily: "var(--font-jetbrains)",
                }}
              >
                &copy; 2026 SARG INNOVATION LABS
                <br />
                ALL RIGHTS RESERVED
              </p>
            </div>

            {/* Product */}
            <div className="flex flex-col gap-4 px-5 md:px-0">
              <h4
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: "rgb(121, 125, 133)", fontFamily: "var(--font-jetbrains)", fontSize: 14 }}
              >
                Product
              </h4>
              <ul className="flex flex-col gap-4 list-none">
                <li>
                  <a href="https://getharmony.ai/#features-2" className="transition hover:opacity-80" style={{ color: "rgb(245, 245, 246)", fontSize: 15 }}>
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="https://getharmony.ai/#pricing" className="transition hover:opacity-80" style={{ color: "rgb(245, 245, 246)", fontSize: 15 }}>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4 px-5 md:px-0">
              <h4
                className="text-sm font-medium uppercase tracking-wider"
                style={{ color: "rgb(121, 125, 133)", fontFamily: "var(--font-jetbrains)", fontSize: 14 }}
              >
                Links
              </h4>
              <ul className="flex flex-col gap-4 list-none">
                <li>
                  <a href="https://x.com/harmonyai_" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80" style={{ color: "rgb(245, 245, 246)", fontSize: 15 }}>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/getharmony" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80" style={{ color: "rgb(245, 245, 246)", fontSize: 15 }}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://getharmony.ai/privacy-policy" className="transition hover:opacity-80" style={{ color: "rgb(245, 245, 246)", fontSize: 15 }}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
