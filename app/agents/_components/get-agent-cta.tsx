"use client";

import { useState } from "react";

export function GetAgentCta({ agentName }: { agentName: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-16 inline-flex items-center justify-center rounded-none border border-zinc-700 bg-white px-8 py-3 text-base font-medium text-black transition hover:bg-zinc-200 cursor-pointer"
      >
        Get {agentName}
      </button>

      {/* Dialog overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative mx-4 w-full max-w-md rounded-none border border-zinc-800 bg-zinc-950 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 transition hover:text-zinc-300"
              aria-label="Close"
            >
              <svg
                className="h-5 w-5"
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
            </button>

            <h3 className="text-xl font-medium text-zinc-100 mb-3">
              Get {agentName}
            </h3>
            <p className="text-base leading-relaxed text-zinc-400 mb-6">
              Sign up for early access to Harmony to start using {agentName} and
              all other agents.
            </p>
            <a
              href="https://getharmony.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-none bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Sign Up for Early Access
            </a>
          </div>
        </div>
      )}
    </>
  );
}
