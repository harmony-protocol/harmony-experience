"use client";

import { useEffect, useRef, useState } from "react";

export function MermaidDiagram({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: {
          primaryColor: "transparent",
          primaryTextColor: "#ffffff",
          primaryBorderColor: "transparent",
          lineColor: "#64748b",
          arrowheadColor: "#94a3b8",
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
          fontSize: "13px",
          background: "transparent",
          mainBkg: "transparent",
          nodeBorder: "transparent",
          edgeLabelBackground: "#0a0a0b",
          clusterBkg: "transparent",
          clusterBorder: "transparent",
        },
        flowchart: {
          htmlLabels: true,
          curve: "basis",
          padding: 16,
          nodeSpacing: 40,
          rankSpacing: 50,
          useMaxWidth: true,
        },
      });

      const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
      const { svg: rendered } = await mermaid.render(id, chart);
      if (!cancelled) {
        setSvg(rendered);
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto rounded-lg border border-zinc-800/60 bg-zinc-950/50 p-6"
      style={{ backdropFilter: "blur(8px)" }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
