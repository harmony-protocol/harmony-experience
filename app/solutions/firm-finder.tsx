"use client";

import { useMemo, useState } from "react";
import {
  BadgeDollarSign,
  Banknote,
  BarChart3,
  BookOpen,
  Braces,
  Brain,
  Briefcase,
  Building,
  Building2,
  CalendarCheck,
  Calculator,
  CandlestickChart,
  ClipboardCheck,
  Contact,
  Cloud,
  Code2,
  Compass,
  Dumbbell,
  Filter,
  FlaskConical,
  Gauge,
  Gavel,
  Gem,
  Handshake,
  Heart,
  HeartPulse,
  Home,
  Landmark,
  Languages,
  Laptop,
  Lightbulb,
  LineChart,
  Mail,
  Magnet,
  Megaphone,
  MousePointerClick,
  Music,
  Network,
  Palette,
  PenLine,
  PenTool,
  PiggyBank,
  Plane,
  ReceiptText,
  Repeat,
  Rocket,
  Scale,
  ScrollText,
  Search,
  Send,
  Server,
  Settings2,
  Share2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  TrendingUp,
  Trophy,
  Umbrella,
  Users,
  UserCheck,
  UserCog,
  UserSearch,
  Video,
  type LucideIcon,
} from "lucide-react";
import Fuse from "fuse.js";
import { headingStyle } from "../_lib/brand-fonts";

const CAL_LINK = "harmony-vishal/discovery";
const CAL_CONFIG = JSON.stringify({ layout: "month_view", theme: "dark" });

type FirmType = { label: string; icon: LucideIcon };
type Firm = { title: string; types: FirmType[] };

// Each entry is a *type of firm* (not a department), with its own icon. The
// category is just a quiet grouping label above the cluster.
const FIRMS: Firm[] = [
  {
    title: "Marketing Agencies",
    types: [
      { label: "Content Marketing", icon: PenLine },
      { label: "Performance Marketing", icon: TrendingUp },
      { label: "PPC & Paid Ads", icon: MousePointerClick },
      { label: "SEO", icon: Search },
      { label: "Social Media", icon: Share2 },
      { label: "Branding & Creative", icon: Palette },
      { label: "PR", icon: Megaphone },
      { label: "Email & Lifecycle", icon: Mail },
    ],
  },
  {
    title: "IT Services",
    types: [
      { label: "Managed IT (MSP)", icon: Server },
      { label: "Cybersecurity", icon: ShieldCheck },
      { label: "Cloud & DevOps", icon: Cloud },
      { label: "Software Development", icon: Code2 },
      { label: "Data & Analytics", icon: BarChart3 },
      { label: "IT Consulting", icon: Network },
    ],
  },
  {
    title: "Management Consulting",
    types: [
      { label: "Strategy Consulting", icon: Compass },
      { label: "Operations Consulting", icon: Settings2 },
      { label: "Financial Advisory", icon: Landmark },
      { label: "HR Consulting", icon: Users },
      { label: "Digital Transformation", icon: Repeat },
      { label: "Boutique Consulting", icon: Lightbulb },
    ],
  },
  {
    title: "Ecommerce Agencies",
    types: [
      { label: "Shopify & DTC", icon: ShoppingBag },
      { label: "Amazon & Marketplaces", icon: ShoppingCart },
      { label: "CRO Agencies", icon: Gauge },
      { label: "Retention & Email", icon: Mail },
      { label: "Paid Media", icon: BadgeDollarSign },
      { label: "Creative Studios", icon: PenTool },
    ],
  },
  {
    title: "Recruitment Agencies",
    types: [
      { label: "Tech Recruiting", icon: Laptop },
      { label: "Executive Search", icon: UserSearch },
      { label: "Contract Staffing", icon: UserCog },
      { label: "RPO", icon: Building2 },
      { label: "Healthcare Staffing", icon: Stethoscope },
      { label: "Sales Recruiting", icon: Handshake },
    ],
  },
  {
    title: "Lead Gen Agencies",
    types: [
      { label: "Cold Email", icon: Send },
      { label: "Appointment Setting", icon: CalendarCheck },
      { label: "B2B Demand Gen", icon: Magnet },
      { label: "Lead Qualification", icon: UserCheck },
      { label: "Paid Lead Gen", icon: Filter },
      { label: "LinkedIn Outreach", icon: Contact },
    ],
  },
  {
    title: "Tutors",
    types: [
      { label: "Academic Tutoring", icon: BookOpen },
      { label: "Test Prep", icon: ClipboardCheck },
      { label: "Language", icon: Languages },
      { label: "Music", icon: Music },
      { label: "STEM", icon: FlaskConical },
      { label: "AI", icon: Brain },
      { label: "Coding", icon: Braces },
      { label: "Online Tutoring", icon: Video },
    ],
  },
  {
    title: "Coaches",
    types: [
      { label: "Executive Coaching", icon: Briefcase },
      { label: "Business Coaching", icon: LineChart },
      { label: "Life Coaching", icon: Sparkles },
      { label: "Health & Fitness", icon: Dumbbell },
      { label: "Career Coaching", icon: Target },
      { label: "Sales Coaching", icon: Trophy },
    ],
  },
  {
    title: "Financial Services Firms",
    types: [
      { label: "Wealth Management", icon: Gem },
      { label: "Financial Planning", icon: PiggyBank },
      { label: "Tax & Accounting", icon: Calculator },
      { label: "Insurance", icon: Umbrella },
      { label: "Mortgage & Lending", icon: Home },
      { label: "Bookkeeping", icon: ReceiptText },
    ],
  },
  {
    title: "Law Firms",
    types: [
      { label: "Personal Injury", icon: HeartPulse },
      { label: "Family Law & Divorce", icon: Heart },
      { label: "Criminal Law", icon: Gavel },
      { label: "Employment Law", icon: Building },
      { label: "Estate & Probate", icon: ScrollText },
      { label: "Immigration", icon: Plane },
      { label: "Business Law", icon: Scale },
      { label: "Bankruptcy", icon: Banknote },
    ],
  },
  {
    title: "Investment Houses",
    types: [
      { label: "Venture Capital", icon: Rocket },
      { label: "Private Equity", icon: Building2 },
      { label: "Family Offices", icon: Landmark },
      { label: "Angel Syndicates", icon: Star },
      { label: "Hedge Funds", icon: CandlestickChart },
      { label: "Real Estate", icon: Home },
    ],
  },
];

// Flat index of every firm type for fuzzy search across labels and categories.
const ALL_TYPES = FIRMS.flatMap((f) =>
  f.types.map((t) => ({ label: t.label, category: f.title })),
);
const fuse = new Fuse(ALL_TYPES, {
  keys: ["label", "category"],
  threshold: 0.34,
  ignoreLocation: true,
  minMatchCharLength: 2,
});

export function FirmFinder() {
  const [query, setQuery] = useState("");
  const q = query.trim();

  const { results, hits } = useMemo(() => {
    if (!q) return { results: FIRMS, hits: null as Set<string> | null };
    const found = fuse.search(q);
    const labelHits = new Set(found.map((r) => r.item.label));
    const catHits = new Set(found.map((r) => r.item.category));
    const matched = FIRMS.filter(
      (f) =>
        catHits.has(f.title) || f.types.some((t) => labelHits.has(t.label)),
    );
    return { results: matched, hits: labelHits };
  }, [q]);

  return (
    <div>
      {/* Search: the fast path to "is my firm supported?" */}
      <div className="mx-auto mt-10 max-w-[560px]">
        <div className="relative">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search for your type of firm"
            placeholder="Find your firm, e.g. personal injury, SEO, staffing"
            className="h-12 w-full border border-white/15 bg-[#0b0c0c] pl-12 pr-4 text-[16px] text-white outline-none placeholder:text-white/35 focus:border-[#9ff690]/60"
          />
        </div>
      </div>

      {results.length > 0 ? (
        // The wall of firms. Each firm type is a star with its own icon; the
        // category is a quiet label above its cluster.
        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[680px] max-w-full -translate-x-1/2 rounded-full bg-[#9ff690]/[0.06] blur-[120px]"
          />
          <div className="relative mx-auto grid max-w-[860px] gap-x-6 gap-y-10 md:grid-cols-2">
            {results.map((firm) => (
              <div key={firm.title}>
                {/* quiet category label, no icon */}
                <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/35">
                  {firm.title}
                </span>
                {/* the firm types, loud and proud, each with its own icon */}
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {firm.types.map(({ label, icon: Icon }) => {
                    const hit = hits?.has(label) ?? false;
                    return (
                      <li key={label}>
                        <span
                          className={`inline-flex items-center gap-2 border px-3.5 py-2 leading-tight transition duration-200 hover:-translate-y-0.5 ${
                            hit
                              ? "border-[#9ff690]/70 bg-[#16230f] text-[#d6ffcb]"
                              : "border-white/12 bg-[#0d0e0d] text-white hover:border-[#9ff690]/60 hover:bg-[#11160f]"
                          }`}
                          style={headingStyle}
                        >
                          <Icon
                            className={`h-4 w-4 shrink-0 ${
                              hit ? "text-[#9ff690]" : "text-[#9ff690]/75"
                            }`}
                            strokeWidth={1.6}
                          />
                          <span className="text-[15px]">{label}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-12 max-w-[560px] border border-white/10 bg-[#0b0c0c] p-8 text-center">
          <p className="text-[18px] text-white" style={headingStyle}>
            Don&apos;t see your firm?
          </p>
          <p className="mx-auto mt-3 max-w-sm text-[16px] leading-7 text-white/55">
            If you run a services firm, we can almost certainly run it for you.
            Let&apos;s find out in a quick call.
          </p>
          <button
            type="button"
            data-cal-link={CAL_LINK}
            data-cal-config={CAL_CONFIG}
            data-loc="solutions-finder"
            className="mt-6 inline-flex h-10 cursor-pointer items-center px-5 text-base font-medium text-black transition hover:brightness-95"
            style={{ backgroundColor: "#9ff690" }}
          >
            Book a free call
          </button>
        </div>
      )}
    </div>
  );
}
