import Image from "next/image";
import { CookieSettingsLink } from "./cookie-settings-link";

const footerColumns = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Useful",
    links: [
      { label: "Solutions", href: "/solutions" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

function FacebookIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor" aria-hidden="true">
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0Z" />
    </svg>
  );
}

function XIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor" aria-hidden="true">
      <path d="m214.75 211.71-62.6-98.38 61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72 40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29ZM164.39 208 62.57 48h29l101.86 160Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} fill="currentColor" aria-hidden="true">
      <path d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm0 192H40V40h176ZM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140ZM100 84a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
    </svg>
  );
}

/* Global site footer, shared across every page via the root layout. */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="relative mx-auto w-[92%] max-w-[1320px] border-x border-white/10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-7 bg-[radial-gradient(circle,rgba(159,246,144,0.34)_1px,transparent_1.5px)] bg-[size:20px_20px] opacity-30" />
        <div className="pointer-events-none absolute -top-1 left-0 h-2 w-2 bg-white" />
        <div className="pointer-events-none absolute -top-1 right-0 h-2 w-2 bg-white" />
        <div className="flex flex-col gap-14 border-y border-white/10 px-7 py-20 md:px-10 lg:flex-row lg:items-start lg:justify-between lg:py-24 lg:pr-24">
          <div>
            <a href="/" className="block w-[150px]" aria-label="Harmony home">
              <Image
                src="/assets/harmony-dark-logo-tm.avif"
                alt="Harmony"
                width={512}
                height={114}
                className="h-auto w-full"
              />
            </a>
            <p
              className="mt-8 max-w-sm text-[18px] leading-[1.4] text-white"
              style={{ fontFamily: "var(--font-schibsted)" }}
            >
              Stop stressing. Start scaling.
            </p>
            <p className="mt-8 font-mono text-[13px] uppercase leading-6 tracking-[0.12em] text-white/40">
              © 2026 Sarg Innovation Labs
              <br />
              All rights reserved
            </p>
          </div>

          <div className="flex gap-16 sm:gap-24 lg:gap-28">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-[18px] text-white/30">{col.title}</p>
                <ul className="mt-6 space-y-5">
                  {col.links.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="text-[18px] text-white/42 transition hover:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  })}
                  {col.title === "Useful" && (
                    <li>
                      <CookieSettingsLink className="cursor-pointer text-[18px] text-white/42 transition hover:text-white" />
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex border-b border-white/10 px-7 py-9 text-[17px] text-white/55 md:justify-end md:px-10">
          <div className="flex items-center gap-8 text-white/55">
            <a href="https://www.facebook.com/profile.php?id=61589399653731" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-white">
              <FacebookIcon />
            </a>
            <a href="https://x.com/harmonyai_" target="_blank" rel="noopener noreferrer" aria-label="X" className="transition hover:text-white">
              <XIcon />
            </a>
            <a href="https://www.linkedin.com/company/getharmony" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div
          className="relative h-32 overflow-hidden px-7 md:h-44 md:px-10"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
          }}
        >
          <Image
            src="/assets/Harmony-AI-Outline-Green-Gradient.svg"
            alt=""
            aria-hidden="true"
            width={1169}
            height={192}
            className="pointer-events-none absolute left-7 top-0 h-auto w-[calc(100%-1.75rem)] select-none opacity-80 md:left-10 md:w-[calc(100%-2.5rem)]"
          />
        </div>
      </div>
    </footer>
  );
}
