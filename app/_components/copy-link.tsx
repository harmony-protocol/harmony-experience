"use client";

import { useState } from "react";

// Linear-style "Copy link" action for the bottom of an article.
export function CopyLink() {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          // Clipboard unavailable (e.g. insecure context); ignore.
        }
      }}
      className="text-sm uppercase tracking-[0.16em] text-white/45 transition hover:text-white"
      style={{ fontFamily: "var(--font-jetbrains)" }}
    >
      {copied ? "Copied" : "Copy link"}
    </button>
  );
}
