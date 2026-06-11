import Image from "next/image";
import {
  Bot,
  Check,
  Gauge,
  Plug,
  Tag,
  Target,
  Timer,
  X,
} from "lucide-react";

const ACCENT = "#9ff690";

type Cell = boolean | string;

const columns = [
  "Harmony",
  "SaaS Tool",
  "Full-time Hire",
  "Agency",
  "Freelancer / VA",
];

const rows: { icon: React.ReactNode; label: string; cells: Cell[] }[] = [
  {
    icon: <Bot className="h-4 w-4" strokeWidth={1.6} />,
    label: "AI systems built for you",
    cells: [true, false, false, false, false],
  },
  {
    icon: <Plug className="h-4 w-4" strokeWidth={1.6} />,
    label: "Built into your tools",
    cells: [true, true, true, false, "Limited"],
  },
  {
    icon: <Gauge className="h-4 w-4" strokeWidth={1.6} />,
    label: "Fully managed for you",
    cells: [true, false, true, true, "Limited"],
  },
  {
    icon: <Target className="h-4 w-4" strokeWidth={1.6} />,
    label: "Strategy and execution",
    cells: [true, false, "Depends", "Strategy only", "Execution only"],
  },
  {
    icon: <Timer className="h-4 w-4" strokeWidth={1.6} />,
    label: "Live in ~2 weeks",
    cells: [true, "Setup varies", "Ramp-up", false, "Onboarding"],
  },
  {
    icon: <Tag className="h-4 w-4" strokeWidth={1.6} />,
    label: "Priced on outcomes",
    cells: [true, false, false, false, false],
  },
];

function CheckBadge({ accent = false }: { accent?: boolean }) {
  return (
    <span
      className="inline-flex h-5 w-5 items-center justify-center rounded-full"
      style={{
        backgroundColor: accent ? ACCENT : "#111",
        color: accent ? "#000" : "#fff",
      }}
    >
      <Check className="h-3 w-3" strokeWidth={2.6} />
    </span>
  );
}

function XBadge() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/[0.06] text-black/30">
      <X className="h-3 w-3" strokeWidth={2.4} />
    </span>
  );
}

function CellContent({ value, accent }: { value: Cell; accent: boolean }) {
  if (value === true) return <CheckBadge accent={accent} />;
  if (value === false) return <XBadge />;
  return (
    <span className="text-[17px] leading-snug text-black/45">{value}</span>
  );
}

export function Comparison() {
  return (
    <div className="mt-12 mb-16 overflow-x-auto [scrollbar-width:thin] md:mb-24">
      <table className="w-full min-w-[840px] border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 w-[210px] bg-[#fafafa]" />
            {columns.map((col, ci) => {
              const isHarmony = ci === 0;
              return (
                <th
                  key={col}
                  className={`px-4 pb-5 text-center align-bottom ${
                    isHarmony
                      ? "border-x border-t border-[#9ff690]/45 bg-[rgba(159,246,144,0.06)]"
                      : ""
                  }`}
                  style={isHarmony ? undefined : { paddingTop: "1.25rem" }}
                >
                  {isHarmony ? (
                    <span className="flex items-center justify-center">
                      <Image
                        src="/assets/logo-full-light.png"
                        alt="Harmony"
                        width={633}
                        height={161}
                        className="h-6 w-auto"
                      />
                    </span>
                  ) : (
                    <span className="text-[17px] font-medium text-black/45">
                      {col}
                    </span>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => {
            const isLast = ri === rows.length - 1;
            return (
              <tr key={row.label}>
                <th
                  scope="row"
                  className="sticky left-0 z-10 border-t border-black/10 bg-[#fafafa] py-4 pr-4 text-left"
                >
                  <span className="flex items-center gap-2.5 whitespace-nowrap text-[17px] font-medium text-black">
                    <span className="text-black/35">{row.icon}</span>
                    {row.label}
                  </span>
                </th>
                {row.cells.map((cell, ci) => {
                  const isHarmony = ci === 0;
                  return (
                    <td
                      key={ci}
                      className={`border-t border-black/10 px-4 py-4 text-center ${
                        isHarmony
                          ? `border-x border-[#9ff690]/45 bg-[rgba(159,246,144,0.06)] ${
                              isLast ? "border-b" : ""
                            }`
                          : ""
                      }`}
                    >
                      <span className="flex items-center justify-center">
                        <CellContent value={cell} accent={isHarmony} />
                      </span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
