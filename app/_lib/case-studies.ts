/* Case study content, shared by the homepage cards (_components/case-studies)
   and the detail pages (case-study/[slug]).

   NUMBERS: values marked "est." are conservative operating estimates based on
   the workflow scope described here, not audited client performance claims. */

export type Logo = { src: string; w: number; h: number; cls?: string };
export type Stat = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  duration?: string; // sidebar meta (PLACEHOLDER until confirmed)
  country?: string; // sidebar meta (PLACEHOLDER until confirmed)
  poc?: string;
  expert?: string;
  logo: Logo; // white wordmark (sits on the accent background)
  accent: string; // card / hero background colour (fallback + photo tint)
  photo?: string; // header image, under /public/assets/case-studies/
  cardPhotoPos?: string; // object-position for the homepage card image only
  /* homepage card */
  metric: string; // big headline figure shown on the homepage card
  cardLine: string; // short result label shown on the card
  /* detail page */
  headline: string; // the outcome, one line
  summary: string; // one-paragraph intro
  challenge: string[];
  solution: string[];
  outcome: string;
  stats: Stat[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "maritime-22",
    client: "Maritime 22",
    industry: "Maritime consultancy",
    duration: "8 months",
    country: "🇬🇧 UK and 🇦🇪 UAE",
    poc: "James Mathias, CEO",
    expert: "Siddharth Shekhar",
    logo: { src: "/assets/client-logos/maritime22.png", w: 1204, h: 240 },
    accent: "#0e3b3b",
    photo: "/assets/case-studies/maritime22-header.avif",
    cardPhotoPos: "70% center",
    metric: "100+ hrs/wk",
    cardLine: "Saved across reporting, assets, comms, and HR ops",
    headline: "100+ combined hours back every week for Maritime 22.",
    summary:
      "Maritime 22 helps shipping clients price freight deals in a high-pressure market where speed, accuracy, and timing matter. The team was losing hours to market reports, client asset preparation, internal handoffs, and HR admin spread across spreadsheets, WhatsApp, and email. We implemented systems for report generation, client asset generation, internal communication automation, HR automation, and team productivity, giving the team an unfair advantage at several decision points during the day.",
    challenge: [
      "Analysts managed pricing and reporting by hand across spreadsheets and chat messages. The process was slow, easy to get wrong, and difficult to scale as the desk grew.",
      "In a high-pressure chartering environment, delays in reports, client updates, or internal handoffs could mean missed timing when the market was moving.",
      "Client assets, internal updates, and HR admin all sat outside a consistent system, so routine work kept pulling the team away from client-facing advisory.",
    ],
    solution: [
      "The report generation system now ingests market data, parses incoming WhatsApp messages into structured data, and runs the freight math (forward freight agreement curves and a TCE calculator) without an analyst rebuilding spreadsheets.",
      "The system generates four scheduled market reports each trading day (morning, index, afternoon, and bunker-impact) and distributes them over email and WhatsApp as branded HTML and PDF.",
      "The client asset generation system turns source material into reusable client-ready assets, so the team can produce updates, summaries, and supporting documents without starting from a blank page.",
      "Internal communication automation summarizes long threads, drafts follow-ups, routes updates to the right people, and keeps bid context available without manual chasing.",
      "HR automation handles repeatable people-ops workflows such as onboarding tasks, policy acknowledgements, document collection, and internal reminders.",
      "A live dashboard gives founders visibility into bids, reports sent, market activity, client assets, and operational tasks in one place instead of scattered across chats.",
    ],
    outcome:
      "Maritime 22 gets an estimated 100+ combined hours back every week across reporting, client asset generation, internal communication, and HR admin, giving the team more time for client-facing advisory work.",
    stats: [
      { value: "100+ hrs/wk", label: "combined time saved" },
      { value: "4", label: "areas with systems implemented" },
      { value: "10+", label: "tasks automated" },
    ],
  },
  {
    slug: "telo",
    client: "Telo AI",
    industry: "Lead qualification agency",
    duration: "6 months",
    country: "🇬🇧 UK",
    poc: "Tom Coutanche, CEO",
    expert: "Siddharth Shekhar",
    logo: { src: "/assets/client-logos/teloai.png", w: 594, h: 236, cls: "h-10" },
    accent: "#27224f",
    photo: "/assets/case-studies/telo-header.avif",
    metric: "12",
    cardLine: "Parallel client campaigns run by AI",
    headline: "We put the lead qualification layer on autopilot.",
    summary:
      "Telo AI (formerly TruLead) is a B2B lead qualification agency. Qualifying high volumes of leads with human SDRs was expensive, inconsistent, and hard to scale. We built custom AI voice agents that run the qualification call, score leads against three qualification frameworks, and hand off booked meetings with transcripts and recaps attached.",
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
      { value: "12", label: "client campaigns run in parallel" },
      { value: "3", label: "qualification frameworks supported" },
      { value: "60% est.", label: "lower cost per qualified meeting vs SDR-only delivery" },
    ],
  },
  {
    slug: "patients-io",
    client: "Patients.io",
    industry: "Healthcare data consultancy",
    country: "🇺🇸 USA",
    poc: "Christopher Butcher, Co-founder",
    expert: "Siddharth Shekhar",
    logo: { src: "/assets/client-logos/patientsio.png", w: 720, h: 160, cls: "h-8" },
    accent: "#123f5f",
    photo: "/assets/case-studies/patientsio-header.avif",
    metric: "30+ hrs/wk",
    cardLine: "Lens data, appointments, and reporting workflows automated",
    headline: "30+ hours back every week for Patients.io.",
    summary:
      "Patients.io is a healthcare data consultancy that helps eyecare and healthcare teams move patient and operational data cleanly across fragmented systems. The team was spending too much time structuring lens data, tracking appointment conversion, preparing reports, and turning clinical operations knowledge into usable workflows. We implemented systems for lens data structuring, appointment tracking, report generation, internal communication automation, and operational dashboards, so the team could move faster without adding more manual spreadsheet work.",
    challenge: [
      "Lens configuration data lived in spreadsheet structures with many dependent options: lens types, materials, front and back surface designs, transparency, coatings, colors, and inherited coating rules.",
      "Appointment conversion tracking and operational reporting still required manual cleanup before the data was useful for client work.",
      "In healthcare, speed could not come at the cost of accuracy. The systems needed to preserve review points while making recurring data work faster and less error-prone.",
    ],
    solution: [
      "The lens data system turns component rules into structured datasets across lens type, material, surface design, transparency, coatings, color, type, and inherited coating logic.",
      "Appointment tracking automation captures conversion data and keeps the follow-up workflow organized without repeated spreadsheet cleanup.",
      "Report generation creates operational summaries from the underlying workflow data, reducing the amount of manual compilation needed each week.",
      "Internal communication automation routes updates, summarizes context, and keeps patient data work moving without repeated manual follow-ups.",
      "Dashboards give the team visibility into lens data readiness, appointment conversion, pending items, exceptions, and throughput across the operation.",
    ],
    outcome:
      "Patients.io gets 30+ hours back every week across lens data structuring, appointment conversion tracking, reporting, internal communication, and workflow tracking, while keeping the review points healthcare data work requires.",
    stats: [
      { value: "30+ hrs/wk", label: "combined time saved" },
      { value: "5", label: "areas with systems implemented" },
      { value: "12+", label: "tasks automated" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
