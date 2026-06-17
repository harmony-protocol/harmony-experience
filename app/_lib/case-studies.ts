/* Case study content, shared by the homepage cards (_components/case-studies)
   and the detail pages (case-study/[slug]).

   NUMBERS: the `stats[].value` figures below are ILLUSTRATIVE demo numbers, not
   measured results. Per our rule we do not ship invented stats, so replace these
   with real figures before launch, or drop them and lead with the qualitative
   outcome already written. The `metric` field is currently unused in the UI. */

export type Logo = { src: string; w: number; h: number; cls?: string };
export type Stat = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  duration?: string; // sidebar meta (PLACEHOLDER until confirmed)
  country?: string; // sidebar meta (PLACEHOLDER until confirmed)
  logo: Logo; // white wordmark (sits on the accent background)
  accent: string; // card / hero background colour (fallback + photo tint)
  photo?: string; // header image, under /public/assets/case-studies/
  cardPhotoPos?: string; // object-position for the homepage card image only
  /* homepage card */
  metric: string; // big headline figure (PLACEHOLDER for now)
  cardLine: string; // short result label shown on the card
  /* detail page */
  headline: string; // the outcome, one line
  summary: string; // one-paragraph intro
  challenge: string[];
  solution: string[];
  outcome: string;
  stats: Stat[]; // PLACEHOLDER figures
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "maritime-22",
    client: "Maritime 22",
    industry: "Maritime consultancy",
    duration: "8 months",
    country: "🇬🇧 UK and 🇦🇪 UAE",
    logo: { src: "/assets/client-logos/maritime22.png", w: 1204, h: 240 },
    accent: "#0e3b3b",
    photo: "/assets/case-studies/maritime22-header.avif",
    cardPhotoPos: "70% center",
    metric: "00",
    cardLine: "Admin work autopilot for the whole firm",
    headline: "We turned a manual chartering desk into one that runs itself.",
    summary:
      "Maritime 22 helps shipping clients price freight deals. Their team did it all by hand, with prices and daily reports spread across spreadsheets and WhatsApp, rebuilt from scratch every time. We built custom AI agents that pull in the market data, run the numbers, and send the reports on time.",
    challenge: [
      "Analysts managed pricing and reporting by hand across spreadsheets and chat messages. The process was slow, easy to get wrong, and impossible to scale as the desk grew.",
      "Every client report was rebuilt from scratch, so the team spent its day re-keying numbers and formatting documents instead of advising clients.",
    ],
    solution: [
      "We built a set of custom AI agents that ingest market data, parse incoming WhatsApp messages into structured data, and run the freight math (forward freight agreement curves and a TCE calculator) without an analyst touching a spreadsheet.",
      "On a fixed schedule the agents generate and send the four daily reports (morning, index, afternoon, and bunker-impact) over email and WhatsApp as branded HTML and PDF.",
      "Bid tracking, role-based access, and full audit trails keep the desk governed, so the team can trust what the agents send out.",
      "We also gave the desk personal productivity assistants that draft client replies, summarize long WhatsApp threads, and prep the morning, so analysts start the day ready to advise.",
      "A live dashboard gives the founders real-time visibility into the desk, with bids, reports sent, and market activity in one place instead of scattered across chats.",
    ],
    outcome:
      "The daily market desk now runs in the background. Analysts stopped rebuilding reports and chasing numbers across chat threads, and went back to advising clients.",
    stats: [
      { value: "4", label: "daily reports generated automatically" },
      { value: "22 hrs", label: "analyst hours saved per week" },
      { value: "95%", label: "reporting errors removed" },
    ],
  },
  {
    slug: "telo",
    client: "Telo AI",
    industry: "Lead qualification agency",
    duration: "6 months",
    country: "🇬🇧 UK",
    logo: { src: "/assets/client-logos/teloai.png", w: 594, h: 236, cls: "h-10" },
    accent: "#27224f",
    photo: "/assets/case-studies/telo-header.avif",
    metric: "00x",
    cardLine: "Qualified meetings booked by AI",
    headline: "We put the lead qualification layer on autopilot.",
    summary:
      "Telo AI (formerly TruLead) is a B2B lead qualification agency. Qualifying high volumes of leads with human SDRs was expensive, inconsistent, and hard to scale. We built custom AI voice agents that run the qualification call, with the governance and compliance to operate safely at volume.",
    challenge: [
      "Qualifying high volumes of B2B leads with human SDRs is expensive and inconsistent, and headcount caps how fast you can grow.",
      "To run qualification with AI at volume, the agency needed campaign governance and compliance built in, not bolted on.",
    ],
    solution: [
      "We built custom AI voice agents that qualify B2B leads on the call using BANT, MEDDIC, or a custom framework, with conversation-attached follow-up over email and SMS plus post-call recaps.",
      "Campaign governance and compliance are baked in: TCPA-B2B rules, do-not-call handling, time-of-day windows, and recording consent.",
      "A multi-tenant setup lets the agency run many clients in parallel, with full outbound dialing, QA, transcripts, recordings, and CRM and calendar integrations.",
      "Beyond the qualification agents, we gave the team personal productivity assistants that handle inbox triage, follow-up drafting, and daily prep, so the people stay focused on clients.",
      "A live dashboard gives the agency's leadership visibility across every client campaign, so they can see qualification volume, costs, and pipeline at a glance instead of stitching it together by hand.",
    ],
    outcome:
      "Qualified meetings now get booked by AI, at a fraction of the cost of a human SDR team, and the agency scales clients without scaling headcount.",
    stats: [
      { value: "5x", label: "more leads qualified per day" },
      { value: "60%", label: "lower cost per qualified meeting" },
      { value: "12", label: "clients run in parallel" },
    ],
  },
  {
    slug: "intelliox",
    client: "Intelliox",
    industry: "Financial advisory for startups",
    duration: "1 year",
    country: "🇮🇳 India",
    logo: { src: "/assets/client-logos/intelliox.png", w: 792, h: 170, cls: "h-7" },
    accent: "#13294a",
    photo: "/assets/case-studies/intelliox-header.avif",
    metric: "00%",
    cardLine: "Monthly reporting and back office on autopilot",
    headline: "We took the back office off the advisors so they could advise.",
    summary:
      "Intelliox runs financial advisory for startups. Their team spent its days on back office work, pulling numbers out of accounting tools and bank feeds, reconciling transactions, and rebuilding the same monthly reporting packs by hand for every client. We built custom AI agents that gather the data, reconcile it, and assemble the reports, and gave the team personal AI assistants for the day-to-day work around them.",
    challenge: [
      "Analysts spent their days in the back office, pulling transactions from accounting tools and bank feeds, categorizing and reconciling them, and chasing missing documents before any advice could happen.",
      "Every client's monthly reporting pack and investor update was rebuilt from scratch, so the team re-keyed the same numbers and reformatted the same documents instead of advising founders.",
      "On top of that, each advisor lost hours a day to email, scheduling, and meeting prep that no one had the time to systemize.",
    ],
    solution: [
      "We built custom AI agents that ingest data from the clients' accounting tools, bank feeds, and payment processors, then categorize and reconcile transactions without an analyst touching a spreadsheet.",
      "On a fixed monthly schedule the agents assemble each client's reporting pack and investor update as branded documents, flagging anything that looks off for a human to review.",
      "We layered in personal productivity assistants for the team: AI that drafts client emails, books and preps review meetings, and turns call notes into action items, so the work around the numbers runs itself too.",
      "A live dashboard gives the firm's leadership visibility across every client account, so the partners can see the state of each engagement and the health of the business at a glance.",
    ],
    outcome:
      "The monthly close and reporting now runs in the background, and the advisors got their days back, from data entry and inbox triage to actually advising founders.",
    stats: [
      { value: "60 hrs", label: "analyst hours saved per month" },
      { value: "70%", label: "faster monthly close" },
      { value: "30", label: "client reporting packs automated" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
