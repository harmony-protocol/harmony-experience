"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

const CTA_ACCENT = "#9ff690";

type FormState = "idle" | "submitting" | "success" | "error";

const labelClassName = "mb-2 block text-[14px] text-white";
const inputClassName =
  "h-11 w-full border border-white/[0.08] bg-transparent px-3.5 text-[15px] text-white placeholder:text-white/30 outline-none transition focus:border-[#9ff690]/50";

function FormCorner({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute h-2 w-2 bg-white ${className}`}
    />
  );
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? ""),
    };

    setState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setErrorMessage(
          result?.error ?? "Something went wrong. Please try again.",
        );
        setState("error");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setErrorMessage("Could not reach the server. Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-[#9ff690]/30 bg-[rgba(159,246,144,0.08)] p-8">
        <p className="text-[18px] font-medium text-white">Message sent</p>
        <p className="mt-3 text-[16px] leading-7 text-white/80">
          Thanks for reaching out. We have got your message and will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-[15px] text-[#9ff690] transition hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute scale-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label htmlFor="firstName">
          <span className={labelClassName}>First Name</span>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="First Name"
            autoComplete="given-name"
            className={inputClassName}
          />
        </label>
        <label htmlFor="lastName">
          <span className={labelClassName}>Last Name</span>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Last name"
            autoComplete="family-name"
            className={inputClassName}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
        <label htmlFor="phone">
          <span className={labelClassName}>Phone number</span>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone number"
            autoComplete="tel"
            className={inputClassName}
          />
        </label>
      </div>

      <label htmlFor="message">
        <span className={labelClassName}>Message</span>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Write your message"
          className={`${inputClassName} min-h-[132px] resize-none py-3`}
        />
      </label>

      {state === "error" && errorMessage ? (
        <p className="text-[14px] leading-6 text-red-300">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="group flex h-12 w-full cursor-pointer items-center justify-center gap-2 overflow-hidden pl-1 pr-4 text-[13px] font-medium uppercase tracking-[0.04em] text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
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
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-center text-[13px] leading-6 text-white/50">
        By submitting this form you agree to our friendly{" "}
        <Link href="/privacy" className="text-white underline transition hover:text-white/80">
          Privacy Policy
        </Link>
      </p>
    </form>
  );
}

export function ContactFormPanel() {
  return (
    <div className="relative border border-white/10 bg-transparent p-6 md:p-8 lg:p-10">
      <FormCorner className="-left-1 -top-1" />
      <FormCorner className="-right-1 -top-1" />
      <FormCorner className="-bottom-1 -left-1" />
      <FormCorner className="-right-1 -bottom-1" />
      <ContactForm />
    </div>
  );
}
