# Funnel Audit — `/leaders` page against DotCom Secrets, Expert Secrets, Traffic Secrets

## Context

The current Harmony funnel page lives at `app/leaders/page.tsx`. It is a long-form dark-themed sales letter targeting AI-Powered Leaders (firm owners, founders, COOs, heads of function). It follows a Brunson-shaped flow on the surface — Hook, Story, Offer, Stack, Guarantee, FAQ, Close — but on close inspection, it imports the *shape* of Brunson's funnels without importing the *mechanics* that make them convert. This audit catalogs every gap I can see against the three Brunson books, ranked by impact.

Scope: this is a read-only audit. No code changes proposed here. The next planning round can pick which items to fix in what order.

Files referenced:
- `app/leaders/page.tsx` — the funnel itself
- `app/_components/marketing-page.tsx` — shared atoms (Eyebrow, SectionHeading, PrimaryCTA)
- `CLICKFUNNELS.md` — existing internal funnel notes
- (No customer testimonials, case studies, or analytics tracking files exist yet)

---

## Issues, grouped by Brunson framework

### A. DotCom Secrets (funnel mechanics)

**A1. The promised lead magnet does not exist.**
The primary CTA says "Get My Free Bottleneck Report" but routes to `cal.com/harmony-vishal/discovery` (a booked call). This is a credibility break the moment the visitor clicks. Brunson's first rule: deliver the exact thing the button promises. If they click "Free Report," they get a Free Report.
*Fix shape: build a tiny `/leaders/assessment` route that captures email + 8 questions and emails a generated PDF, OR rename every CTA to "Book My Free Audit Call" and stop promising a report.*

**A2. No two-step opt-in, no email captured before the call ask.**
The page jumps from "stranger" to "20-min call on my calendar" in a single click. The biggest missing mechanic from DotCom Secrets: capture email first (one click → modal asking for email → confirmation page with the actual offer). Right now we have zero way to recover the 99% who don't book.

**A3. No tripwire below the $449.**
The ladder goes FREE → FREE → FREE → $449. Brunson's classic 5-rung ladder has a $7–$47 tripwire between free and core. Candidates: a $27 "Operations Bottleneck Toolkit" (templates + the report) or a $47 mini-audit. Tripwires exist to identify hyperactive buyers, not to make money.

**A4. No order bump, no OTO, no upsell.**
The $449 is a monolithic Buy Now. Brunson's order-form playbook: one order bump on the form (small box, "+ Add this for $49"), one immediate upsell after purchase, one downsell if declined. Each one lifts AOV 20–40%. None present.

**A5. No continuity/membership reveal as a separate sale.**
The $20/user/mo is mentioned but bundled visually with the $449 build. Brunson would isolate the continuity offer as its own moment with its own CTA. Recurring revenue is the most valuable asset in the funnel and it's being treated as a footnote.

**A6. The Value Ladder is shown to the reader but is not actually built into the funnel.**
The "The Path" section explains the 5 steps narratively, but the funnel itself doesn't ascend through them — every CTA points to the same Cal URL. The ladder is a diagram, not a working machine.

**A7. Single weak urgency lever.**
The only scarcity is "Fast-action bonuses (book within 7 days)" buried in the Stack. No countdown, no cohort cap ("we take 10 firms per month"), no waitlist framing, no "next cohort closes Friday." Brunson's funnels stack 2–3 urgency mechanics minimum.

**A8. No follow-up funnel / email sequence referenced.**
A non-converter has no nurture path. Brunson's "Soap Opera Sequence" (5 emails, day 1–5) is what converts the 95% who don't buy on first visit. The page doesn't even mention email; nothing in `app/` suggests an ESP integration.

**A9. No retargeting hook / exit intent.**
No exit-intent modal. No retargeting pixel reference. No "wait, before you go" recovery. A leader who scrolled 70% and bounced is lost.

**A10. The Stack slide is well-built but mis-anchored.**
$32,750 → $449 is the right math, but the anchor items (e.g., "Custom AI agents — $5,000") are not benchmarked against anything visible. Brunson would add competitor pricing ("vs. paying a consultant $25k for the same audit") so the reader has external proof, not internal claims.

**A11. No purchase form / Stripe / Cal-payment integration visible.**
Once a buyer is convinced, where do they pay $449? The funnel ends at "book a call." That's a sales call, not a purchase. Either the call IS the close (then say so loudly), or there's a missing checkout step.

---

### B. Expert Secrets (positioning, identity, story)

**B1. The Attractive Character is buried at section 14.**
The founder story sits 80% of the way down the page. Brunson opens with the character. Recommend: a short founder card in the hero ("Built by Vishal, after losing his agency to meta-work") that the reader meets in the first 5 seconds.

**B2. Zero proof. No testimonials, no case studies, no logos beyond integrations.**
This is the single biggest credibility hole. "Trust Bar" currently shows tools Harmony integrates with, not customers who use it. No quote with a face. No before/after numbers. No "Sarah, partner at a 7-person law firm, recovered 14 hours/week." Even one specific story would 2× conversion.

**B3. The "new opportunity" frame is contaminated with "improvement offer" language.**
Brunson's rule: sell a new opportunity, never an improvement on what they're already failing at. The Big Idea ("Your attention is the asset. Harmony protects it.") is a new opportunity. But the Inside Harmony section ("Your inbox, Your calendar, Your followups, Your reports") reads as feature improvements on tools they already have. The reader walks away thinking "another inbox tool" instead of "operating system."

**B4. The Three Secrets are claims, not story-shaped epiphanies.**
Each Secret is a thesis statement + explanation. Brunson's Secrets follow the Epiphany Bridge: "I used to believe X. Then I saw Y happen. Now I know Z." Rewrite each Secret as a 3-sentence story with a moment of "lights on." Right now they read like a whitepaper.

**B5. No villain.**
Brunson always names a villain. It can be a competitor, a false belief, a system. Candidates here: "the cult of busywork," "the meta-work tax," "the VA-and-Zapier industrial complex," or the false belief that more discipline scales. None named explicitly; the comparisons gesture at it but don't make it a character.

**B6. No movement / tribe artifacts.**
"AI-Powered Leader" is named as an identity but not built as a tribe. Missing: a manifesto, a public commitment, a hashtag, a hand sign equivalent, declarations ("As an AI-Powered Leader, I…"). No way for a reader to *announce* they're one.

**B7. No future-pacing.**
The page tells the reader what Harmony does. It never paints "your Monday morning 90 days from now." Brunson's Perfect Webinar closes with vivid future state: "Imagine waking up Monday and the only three things on your desk are the three things that need you." Missing entirely.

**B8. The Big Domino is unclear.**
Brunson: there is ONE belief that, if installed, makes the sale inevitable. The page is currently selling 4–5 beliefs at once (attention is the asset, ops is the bottleneck, proactive beats reactive, custom beats generic, OS beats tools). Pick one. My vote: "Your firm has no operating system, and that is why everything routes through your head." Sell that one. Everything else is supporting evidence.

**B9. Origin story is too clean.**
Vishal's story is well-written but generic founder-loss narrative. Missing: a specific moment of breakdown (the email that broke the camel's back, the client who fired the agency, the night he stayed up till 4am paying bills). Specificity is the currency of belief.

**B10. No parable / second-person stories.**
Brunson laces customer-shaped parables through the page ("Sarah was running her agency the same way you are…"). The page is currently 100% in Vishal's voice or generic "you." No third-person customer stories anchor the abstractions.

**B11. No polarization.**
Brunson: pick a fight, name what you're against. The "Not for you if" card gestures at this but is too polite. Polarize harder: "If you think AI is a phase, close this tab." The current copy is too SaaS-safe.

---

### C. Traffic Secrets (acquisition + downstream tracking)

**C1. Single funnel for all traffic sources.**
Brunson's Dream 100 framework demands different openers for different sources. A visitor from a LinkedIn post by a podcast guest needs a different hero than a visitor from a Google search. Currently one page, one opener.

**C2. No analytics / event tracking visible.**
No Plausible, no PostHog, no Meta Pixel, no GA, no Cal.com event tracking. Cannot answer "did the visitor scroll past the Stack?" or "which section drops people?" Brunson tracks every step in DotCom Secrets chapter 7.

**C3. No source-of-truth UTM strategy.**
Even if analytics existed, the page doesn't suggest a UTM convention for incoming traffic so different campaigns can be A/B'd.

**C4. No social-proof handoff from external content.**
If a reader arrived from a Vishal-on-podcast appearance, the hero doesn't say "Glad you came over from [X podcast]. Here is what I told them in 90 seconds." This is the "Pre-eminence" move from Traffic Secrets — match the temperature of the incoming visitor.

**C5. No SEO scaffolding for organic traffic.**
The page has a `<title>` and `<meta description>` but no Open Graph image, no Twitter card, no schema.org markup, no canonical, no preconnect for the Cal.com domain. If someone shares this in Slack, the unfurl is going to look generic.

**C6. No follow-up funnel.**
After they leave: nothing. No reminder email, no retargeting creative, no "you opened the page but didn't book" sequence. Traffic Secrets is built around the loop, not the visit.

---

### D. Page craft and conversion mechanics (cross-cutting)

**D1. Same CTA copy at every CTA.**
Every button says "Get My Free Bottleneck Report." Brunson varies by section: top is "Yes! Send me the report," mid is "Show me the stack," bottom is "I'm in, book me." Each variant matches the reader's commitment level at that scroll depth.

**D2. Guarantee is in one place, near the bottom.**
The guarantee shield should appear near every CTA, not only at section 13. A reader at section 7 considering clicking has no visible risk reversal.

**D3. No P.S. at the end.**
Classic Brunson signature: every final letter ends with a P.S. that reframes the offer. The Final CTA section has none.

**D4. No video.**
Brunson runs a 60–90 sec VSL above the fold on most funnels. The hero is text only. A short founder-to-camera video would lift conversion meaningfully.

**D5. Hero subtitle is a feature laundry list.**
"Followups, reports, inbox, calendar, post-call admin, hiring, invoicing, bookkeeping, vendors." It dilutes the headline. Brunson's hero subtitles are 1 sentence stating the dream outcome and 1 sentence on the mechanism.

**D6. FAQ doesn't lead with the top objections.**
Current order is roughly product-comparative first ("vs VA, vs Zapier, vs ChatGPT") then logistics. Brunson recommends objection-first: "But I don't have time…" "But what if I'm too small…" "But what if it doesn't work…" These should be the first three.

**D7. The Stack pricing anchors are not externally verifiable.**
"Custom AI agents — $5,000" is a number we wrote. A reader has no reason to believe it. Add either: a screenshot of a real consulting invoice at that number, a reference to a comparable Upwork/agency benchmark, or remove the dollar anchors entirely and switch to a hours-saved anchor.

**D8. Mobile not verified.**
The 5-step ladder, 3-column comparison, and 2-column pain grid have not been QA'd on mobile. Anything wider than a single column at 375px is suspect.

**D9. Color contrast / accessibility not audited.**
Yellow-on-dark and green-on-dark may not hit WCAG AA. The dark theme is design-driven but hasn't been checked.

**D10. No micro-proof beside the hero CTA.**
"Trusted by 100+ leaders" or "Used at firms generating $X in billings" beside the button would lift CTR on the first CTA. Currently no number, no anchor, just the button alone.

---

## Priority-ranked fix list

If only five things get fixed, fix these in this order:

1. **Build the actual free Bottleneck Report flow** (A1 + A2) — the promise must match the click. Capture email, deliver the PDF, then upsell the call. This single fix unlocks the rest of the funnel.
2. **Add at least one customer testimonial with name, role, and a specific number** (B2) — the page has no proof, period. Even one well-written quote with a number changes everything.
3. **Move the founder story / Attractive Character to the top of the page** (B1) — readers buy people, not products. The story belongs in the first viewport.
4. **Rewrite the Three Secrets as Epiphany Bridge stories** (B4) — claims become beliefs only when wrapped in a story arc.
5. **Pick one Big Domino and rewrite the page around it** (B8) — currently selling five ideas at once dilutes all of them.

Next five, in order:

6. Add future-pacing to the close (B7).
7. Add a tripwire below the $449 (A3).
8. Vary CTA copy by section (D1).
9. Reorder the FAQ to lead with top objections (D6).
10. Build the follow-up email sequence (A8 + C6) — even a 3-email nurture would recover 10%+ of bounced traffic.

---

## Verification

This is an audit deliverable, not an implementation. Verification = the user reads through and confirms each issue is real and worth fixing. The next planning round picks 1–5 items above and turns them into concrete code changes.
