import { NextResponse } from "next/server";

// The Workflow Fix, official Kit v4 API.
// Docs: https://developers.kit.com/api-reference
// "Main Form" (embed slug 67425a4a59). The v4 API path needs the numeric id,
// which for this form is 9585676.
const KIT_FORM_ID = process.env.KIT_FORM_ID ?? "9585676";

type NewsletterPayload = {
  email?: string;
  firstName?: string;
  website?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: NewsletterPayload;

  try {
    body = (await request.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without subscribing them.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim() ?? "";
  const firstName = body.firstName?.trim() ?? "";

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Newsletter is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const kitHeaders = {
    "X-Kit-Api-Key": apiKey,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // 1. Create (or upsert) the subscriber in Kit.
  const createResponse = await fetch("https://api.kit.com/v4/subscribers", {
    method: "POST",
    headers: kitHeaders,
    body: JSON.stringify({
      email_address: email,
      ...(firstName ? { first_name: firstName } : {}),
    }),
  });

  if (!createResponse.ok) {
    return NextResponse.json(
      { error: "Could not subscribe you right now. Please try again." },
      { status: 502 },
    );
  }

  // 2. Add the subscriber to the form so they get the form's confirmation /
  // opt-in email and automations. The subscriber must already exist, which
  // step 1 guarantees.
  const formResponse = await fetch(
    `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`,
    {
      method: "POST",
      headers: kitHeaders,
      body: JSON.stringify({ email_address: email }),
    },
  );

  if (!formResponse.ok) {
    return NextResponse.json(
      { error: "Could not subscribe you right now. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
