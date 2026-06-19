"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const CTA_ACCENT = "#9ff690";

type FormState = "idle" | "submitting" | "success" | "error";

const labelClassName = "mb-2.5 block text-[15px] font-medium text-black";
const inputClassName =
  "h-[52px] w-full border border-black/10 bg-white px-4 text-[17px] text-black placeholder:text-black/35 outline-none transition focus:border-[#9ff690]";

function NewsletterForm() {
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
    const firstName = String(data.get("firstName") ?? "").trim();

    setState("submitting");
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, website: data.get("website") }),
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

  if (state === "success") {
    return (
      <div className="border border-[#9ff690] bg-[rgba(159,246,144,0.18)] p-8">
        <p className="text-[18px] font-medium text-black">You&apos;re subscribed</p>
        <p className="mt-3 text-[16px] leading-7 text-[#333]">
          Check your inbox to confirm, then watch for the next issue of The
          Workflow Fix on building AI systems that scale.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-[15px] font-medium text-black underline transition hover:opacity-70"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute scale-0 opacity-0"
      />

      <label htmlFor="firstName">
        <span className={labelClassName}>First name (optional)</span>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First name"
          autoComplete="given-name"
          className={inputClassName}
        />
      </label>

      <label htmlFor="email">
        <span className={labelClassName}>Email</span>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email address"
          autoComplete="email"
          className={inputClassName}
        />
      </label>

      {state === "error" ? (
        <p className="text-[14px] text-[#c0392b]">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="flex h-[56px] w-full cursor-pointer items-center justify-center px-4 text-[15px] font-semibold uppercase tracking-[0.04em] text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
        style={{ backgroundColor: CTA_ACCENT }}
      >
        {state === "submitting" ? "Subscribing..." : "Subscribe"}
      </button>

      <p className="text-center text-[13px] leading-6 text-black/50">
        No spam. Unsubscribe anytime. By subscribing you agree to our{" "}
        <Link href="/privacy" className="text-black underline transition hover:text-black/70">
          Privacy Policy
        </Link>
      </p>
    </form>
  );
}

export function NewsletterFormPanel() {
  return <NewsletterForm />;
}
