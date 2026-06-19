"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const CTA_ACCENT = "#9ff690";

type FormState = "idle" | "submitting" | "success" | "error";

export function BlogSubscribe() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      return;
    }

    const email = String(data.get("email") ?? "").trim();

    setState("submitting");
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: data.get("website") }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setError(payload?.error ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
      setState("error");
    }
  }

  return (
    <div>
      <h2
        className="text-[24px] font-normal leading-[1.15] text-white md:text-[28px]"
        style={{ fontFamily: "var(--font-schibsted)" }}
      >
        Subscribe to our newsletter
      </h2>
      <p className="mt-3 text-[16px] leading-7 text-white/55">
        Practical automation playbooks for founders and operators, sent to your
        inbox every week.
      </p>

      {state === "success" ? (
        <p className="mt-6 text-[16px] text-white">
          You&apos;re subscribed. Check your inbox to confirm.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="absolute scale-0 opacity-0"
          />
          <label htmlFor="blog-email" className="sr-only">
            Email address
          </label>
          <input
            id="blog-email"
            name="email"
            type="email"
            required
            placeholder="Email address"
            autoComplete="email"
            className="h-[52px] w-full border border-white/15 bg-white/5 px-4 text-[17px] text-white placeholder:text-white/40 outline-none transition focus:border-[#9ff690] sm:flex-1"
          />
          <button
            type="submit"
            disabled={state === "submitting"}
            className="flex h-[52px] shrink-0 cursor-pointer items-center justify-center px-7 text-[15px] font-semibold uppercase tracking-[0.04em] text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
            style={{ backgroundColor: CTA_ACCENT }}
          >
            {state === "submitting" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}

      {state === "error" ? (
        <p className="mt-3 text-[14px] text-[#ff9b8a]">{error}</p>
      ) : null}

      <p className="mt-4 text-[13px] leading-6 text-white/40">
        No spam. Unsubscribe anytime. By subscribing you agree to our{" "}
        <Link
          href="/privacy"
          className="text-white/70 underline transition hover:text-white"
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
