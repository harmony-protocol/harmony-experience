"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Security", href: "https://getharmony.ai/#who-we-help" },
  { label: "Pricing", href: "https://getharmony.ai/#pricing" },
  { label: "Blog", href: "https://getharmony.ai/blog" },
  {
    label: "Join Us",
    href: "https://tally.so/r/m60LZY",
    external: true,
  },
];

function HamburgerIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

          {/* Desktop nav links */}
          <div
            className="hidden md:flex items-start gap-5"
            style={{ paddingLeft: 16 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-base transition hover:text-white"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <HamburgerIcon />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#020202] flex flex-col">
          {/* Top bar with logo and close — matches main navbar positioning */}
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
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src="/assets/logo-full-dark.png"
                alt="Harmony"
                width={633}
                height={161}
                className="h-full w-full object-contain"
              />
            </Link>
            <button
              className="text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Nav links — start right after the header, not centered */}
          <div
            className="mx-auto flex flex-col gap-10"
            style={{
              maxWidth: 1224,
              width: "97%",
              padding: "40px 20px 0 5px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-4xl font-light transition hover:text-white"
                style={{ color: "rgba(255, 255, 255, 0.6)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
