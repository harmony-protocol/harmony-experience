import Image from "next/image";
import Link from "next/link";
import { AgentCard } from "./_components/agent-card";
import agents from "./_data/agents.json";

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

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#020202] text-zinc-100">
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ width: "100%" }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth: 1224,
            width: "97%",
            padding: "25px 20px 25px 5px",
          }}
        >
          <Link
            href="/"
            className="block"
            style={{ width: 127, aspectRatio: "3.5" }}
          >
            <Image
              src="/assets/logo-full-dark.png"
              alt="Harmony"
              width={633}
              height={161}
              className="h-full w-full object-contain"
              priority
            />
          </Link>

          <div className="flex items-start gap-5" style={{ paddingLeft: 16 }}>
            {[
              { label: "Security", href: "https://getharmony.ai/#who-we-help" },
              { label: "Pricing", href: "https://getharmony.ai/#pricing" },
              { label: "Blog", href: "https://getharmony.ai/blog" },
              {
                label: "Join Us",
                href: "https://tally.so/r/m60LZY",
                external: true,
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm transition hover:text-white"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main
        className="mx-auto"
        style={{ maxWidth: 1224, width: "97%", padding: "112px 5px 96px" }}
      >
        <h1
          className="text-sm tracking-[0.15em] uppercase mb-10 text-zinc-500 font-normal"
          style={{ fontFamily: "var(--font-jetbrains)", fontSize: 14 }}
        >
          Meet Your Agent Friends
        </h1>

        <div className="grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
          {/* Get Your Own Agent CTA */}
          <a
            href="https://tally.so/r/m60LZY"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[200px] flex-col items-center justify-center rounded-none border border-dashed border-zinc-700 px-8 pt-7 pb-8 text-zinc-400 transition hover:border-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/40"
          >
            <svg className="h-6 w-6 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-lg font-normal">Get Your Own Agent</span>
          </a>
        </div>
      </main>

      {/* Chip + Footer wrapper */}
      <div className="relative">
        {/* Chip image - absolutely positioned, visible above footer, extends behind it */}
        <div
          className="pointer-events-none absolute left-0 right-0 z-0 flex justify-center"
          style={{ top: 70 }}
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

        {/* Footer - glass effect so chip is subtly visible beneath */}
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
            {/* Vertical grid lines */}
            <div className="pointer-events-none absolute inset-0 flex" aria-hidden="true" style={{ borderLeft: "1px solid rgba(101, 103, 113, 0.15)", borderRight: "1px solid rgba(101, 103, 113, 0.15)" }}>
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex-1"
                  style={{
                    borderRight: i < 3 ? "1px solid rgba(101, 103, 113, 0.15)" : "none",
                  }}
                />
              ))}
            </div>

            {/* Social Links Row */}
            <div className="flex w-full">
              {[
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/company/getharmony",
                },
                { label: "Twitter", href: "https://x.com/harmonyai_" },
                { label: "Blog", href: "https://getharmony.ai/blog" },
                { label: "Status Page", href: "https://getharmony.ai" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center justify-between transition"
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
            <div className="flex w-full gap-0" style={{ paddingBottom: 256 }}>
              {/* Company Info */}
              <div
                className="flex flex-1 flex-col gap-6"
                style={{ paddingRight: 20 }}
              >
                <div className="flex flex-col gap-2">
                  <Link
                    href="/"
                    className="block"
                    style={{ width: 127, aspectRatio: "3.5" }}
                  >
                    <Image
                      src="/assets/logo-full-dark.png"
                      alt="Harmony"
                      width={633}
                      height={161}
                      className="h-full w-full object-contain"
                    />
                  </Link>
                  <p
                    style={{ color: "#d0d1d4", fontSize: 15, lineHeight: 1.6 }}
                  >
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
              <div className="flex flex-1 flex-col gap-4">
                <h4
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{
                    color: "rgb(121, 125, 133)",
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: 14,
                  }}
                >
                  Product
                </h4>
                <ul className="flex flex-col gap-4 list-none">
                  <li>
                    <a
                      href="https://getharmony.ai/#features-2"
                      className="transition hover:opacity-80"
                      style={{ color: "rgb(245, 245, 246)", fontSize: 15 }}
                    >
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://getharmony.ai/#pricing"
                      className="transition hover:opacity-80"
                      style={{ color: "rgb(245, 245, 246)", fontSize: 15 }}
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              {/* Links */}
              <div className="flex flex-1 flex-col gap-4">
                <h4
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{
                    color: "rgb(121, 125, 133)",
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: 14,
                  }}
                >
                  Links
                </h4>
                <ul className="flex flex-col gap-4 list-none">
                  <li>
                    <a
                      href="https://x.com/harmonyai_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:opacity-80"
                      style={{ color: "rgb(245, 245, 246)", fontSize: 15 }}
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/company/getharmony"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:opacity-80"
                      style={{ color: "rgb(245, 245, 246)", fontSize: 15 }}
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="flex flex-1 flex-col gap-4">
                <h4
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{
                    color: "rgb(121, 125, 133)",
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: 14,
                  }}
                >
                  Legal
                </h4>
                <ul className="flex flex-col gap-4 list-none">
                  <li>
                    <a
                      href="https://getharmony.ai/privacy-policy"
                      className="transition hover:opacity-80"
                      style={{ color: "rgb(245, 245, 246)", fontSize: 15 }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
