# Clickfunnels-style marketing pages, notes & methodology

Direction lock for `/[audience]` pages and the homepage grid. All audiences in `app/_data/audiences.json` follow this playbook.

## Section flow (in order, top to bottom)

1. **Hero**, single bold promise + Book a Call CTA. Headline pattern: *"Run your X on autopilot."* / *"Hit quota without the busywork."* / *"Lead engineering, not standups."*
2. **Integrates with**, per-audience logo row right beneath the hero. Builds credibility before the visitor decides to keep reading.
3. **Pain ("Sound familiar?")**, multi-hat empathy. Headline: *"You're not just an X. You're [N] jobs."* + intro listing the hats + 3-5 specific pains.
4. **Turn ("What if it ran itself?")**, flip from problem to solution. Use *"Picture this:"* to paint the dream outcome, then *"Harmony does all of it, in the background, while you [verb]."* + Book a Call.
5. **Personas pill row**, audience sub-types as chips ("Solo Tutors", "Tutoring Centres", etc.).
6. **Speed to lead** (Practices only), the first feature block on every practice audience. Outcome line: *"Reply before they [next-best-alternative]."*
7. **Feature blocks**, each is *"Your X"* eyebrow + outcome headline + check-bullet list + Book a Call.
8. **Comparison (10× vs 1×)**, Harmony AI vs Traditional Agencies, side by side.
9. **Final CTA**, closing serif headline + customization/two-weeks promise + Book a Call (large) + "Vishal Singh, Founder".

Sections marked *(optional)* in the JSON: `integrations`, `pain`, `turn`, `personas`, `comparison`. Set to undefined / false to hide.

## Copy patterns

- **"Stop X. Start Y." hero subtitles.** Lead with the pain the visitor is here to fix, then the outcome.
  > *"Stop chasing leads, drafting reports, and rebooking parents at midnight. Harmony does it in seconds, while you teach, sleep, or actually have a weekend."*
- **"Picture this:" turn bodies.** Three vivid moments, then *"Harmony does all of it, in the background, while you [verb]."*
  > *"Picture this: a parent inquiry hits at 9pm and a reply goes out in 60 seconds. A lesson ends and the parent report is already drafted... Harmony does all of it, in the background, while you teach."*
- **Multi-hat pain framing.** *"You're not just a tutor. You're three jobs. Marketer. Receptionist. Bookkeeper. Lesson planner."*
- **Possessive feature framing.** *"Your marketing"*, *"Your parent updates"*, *"Your engineering"*, *"Your sales"*, *"Your admin work"*.
- **Outcome-first feature titles.** *"Never lose a lead again."* beats *"Lead-response automation."*
- **Speed-to-lead first.** Every practice audience leads with a Speed-to-Lead block: *"Reply before they [book the next tutor / call another firm / swipe to the next listing]."*
- **Direct second person.** *"You"*, *"your"*. Never *"users"* or *"customers"*.
- **Specific time language in the dream.** *"60 seconds"*, *"in minutes"*, *"day or night"*, *"while you sleep"*.
- **Closing pattern.** *"Customized to your [their stack]. Live in two weeks, then we keep tuning it with you, so you can [outcome]."*
- **Single CTA, repeated.** Only one button copy across the whole site: **"Book a Call"** opening `https://cal.com/harmony-vishal/discovery`.
- **No em dashes anywhere.** Use commas, periods, or "and"/"so". Enforced via the rule in `CLAUDE.md`.

## Type system (lock to 3 sizes)

| Token | Class | Use |
|---|---|---|
| Body | `text-lg leading-8` | All paragraphs, list items, button labels, integration labels |
| Eyebrow / inline label | `text-sm uppercase` (JetBrains Mono, `0.16em`) | Section eyebrows + comparison row labels |
| Subhead | `text-3xl md:text-4xl` (serif gradient, `max-w-2xl`) | All section headings (`SectionHeading` component) |
| Hero | `text-5xl md:text-6xl` (serif gradient) | `<h1>` only |

## Container & spacing

- Article container: `maxWidth: 720, width: "92%", padding: "200px 0 128px"` (narrow centered, mirrors clickfunnels).
- Homepage grid uses `maxWidth: 1080, padding: "140px 0 128px"` (shifted up, wider for the cards).
- Section-to-section: `mt-32`.
- Heading-to-content: `mt-8` for paragraphs, `mt-10` for lists/CTA.
- Eyebrow-to-heading: `mb-3`.

## File map

- `app/_data/audiences.json`, single source of truth for all audiences. Add a new key to add a new page.
- `app/_components/marketing-page.tsx`, the shared template + atoms (Eyebrow, SectionHeading, PrimaryCTA).
- `app/[audience]/page.tsx`, dynamic route that looks up the slug in the JSON.
- `app/page.tsx`, homepage grid with category filter (All / Practices / Teams / Roles).

## Audience taxonomy (homepage filter)

- **Practices**, solo professionals: tutors, lawyers, realtors, consultants, mortgage-brokers, healthcare. *(All carry the Speed-to-Lead block.)*
- **Teams**, companies/firms: startups, agencies, staffing-firms.
- **Roles**, functions inside companies: investors, sales, engineering, marketers.

## Adding a new audience

1. Append a key to `audiences.json` with the same shape as an existing audience.
2. Set `category` so the homepage filter places it correctly.
3. Pick a `slug` matching the JSON key (it becomes `/your-slug`).
4. That's it, no code changes.

## What was tried and rejected (do not re-introduce without explicit ask)

- Sukie mascot in the hero, too prominent, looked off-brand.
- Mermaid workflow diagram below the hero, felt like documentation, not marketing.
- Heavy `marketing.tsx` abstractions for hero/CTA components, replaced with the focused atoms inside `marketing-page.tsx`.
- Card boxes with borders around every section, too "boxy"; preferred minimal flat sections separated by whitespace.
- `text-xs` eyebrows (12px), unreadable at scroll distance.
- More than 3 type sizes, drift creeps in fast; stay strict.
- Two CTAs (Get Access + Book a Call), the user prefers a single CTA.
- Em dashes in any copy, comment, or markdown file.
- Centered headings with left-aligned bullet lists, the bullets float and look unbalanced. Everything is left-aligned now.

## Reference

- getharmony.ai (Framer site, primary brand reference for serif headlines + persona segmentation).
- clickfunnels.com (flow inspiration: hero, benefit, personas, feature blocks, repeated CTAs, "Your X" possessive framing).
