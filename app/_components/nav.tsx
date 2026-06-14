"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CAL_LINK = "harmony-vishal/discovery";
const CAL_CONFIG = JSON.stringify({ layout: "month_view", theme: "dark" });
const CTA_ACCENT = "#9ff690";

const links = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "#pricing" },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Join Us",
    href: "https://tally.so/r/m60LZY",
    external: true,
  },
];

export function AgentflowNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (!href.startsWith("/")) return false;
    if (href === "/") return pathname === "/";
    // Active on the page itself and any nested route (e.g. /blog and /blog/*).
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black">
      <nav className="mx-auto flex h-16 w-[92%] max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="block w-[118px]" aria-label="Harmony home">
            <Image
              src="/assets/logo-full-dark.png"
              alt="Harmony"
              width={633}
              height={161}
              className="h-auto w-full"
              priority
            />
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-base transition ${
                  isActive(link.href)
                    ? "font-medium text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            data-cal-link={CAL_LINK}
            data-cal-config={CAL_CONFIG}
            className="group hidden h-10 cursor-pointer items-center gap-2 overflow-hidden pl-1 pr-3 text-base font-medium text-black transition hover:brightness-95 md:inline-flex"
            style={{ backgroundColor: CTA_ACCENT }}
          >
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden bg-black">
              <Image
                src="/assets/talk-to-sales-icon.svg"
                alt=""
                width={16}
                height={15}
                className="h-[15px] w-4 transition-transform duration-300 ease-out group-hover:-translate-y-7"
              />
              <Image
                src="/assets/talk-to-sales-icon.svg"
                alt=""
                aria-hidden
                width={16}
                height={15}
                className="absolute h-[15px] w-4 translate-y-7 transition-transform duration-300 ease-out group-hover:translate-y-0"
              />
            </span>
            <span>Book a Call</span>
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="mx-auto flex w-[92%] max-w-[1200px] flex-col py-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`py-2.5 text-base transition ${
                  isActive(link.href)
                    ? "font-medium text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              data-cal-link={CAL_LINK}
              data-cal-config={CAL_CONFIG}
              onClick={() => setOpen(false)}
              className="group mt-3 inline-flex h-12 cursor-pointer items-center justify-center gap-3 overflow-hidden pl-2 pr-5 text-base font-medium text-black"
              style={{ backgroundColor: CTA_ACCENT }}
            >
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden bg-black">
                <Image
                  src="/assets/talk-to-sales-icon.svg"
                  alt=""
                  width={16}
                  height={15}
                  className="h-[15px] w-4 transition-transform duration-300 ease-out group-hover:-translate-y-7"
                />
                <Image
                  src="/assets/talk-to-sales-icon.svg"
                  alt=""
                  aria-hidden
                  width={16}
                  height={15}
                  className="absolute h-[15px] w-4 translate-y-7 transition-transform duration-300 ease-out group-hover:translate-y-0"
                />
              </span>
              <span>Book a Call</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
