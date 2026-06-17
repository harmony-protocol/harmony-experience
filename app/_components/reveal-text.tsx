"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

/* Scroll-linked word reveal. Each word fades from dim to full as the
   paragraph scrolls through the viewport, mirroring the AgentFlow effect. */
export function RevealText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.85", "end 0.55"],
  });

  // Split into paragraphs on blank lines, keeping one continuous reveal
  // across every word so the scroll animation flows through the whole block.
  const paragraphs = text.split(/\n{2,}/).map((p) => p.trim().split(" "));
  const totalWords = paragraphs.reduce((n, words) => n + words.length, 0);

  let wordOffset = 0;

  return (
    <div ref={container} className={className} style={style}>
      {paragraphs.map((words, p) => {
        const para = (
          <p key={`p-${p}`} className={p > 0 ? "mt-6 md:mt-8" : undefined}>
            {words.map((word, i) => {
              const index = wordOffset + i;
              const start = index / totalWords;
              const end = start + 1 / totalWords;
              return (
                <Word key={`${word}-${index}`} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        );
        wordOffset += words.length;
        return para;
      })}
    </div>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
