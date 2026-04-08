"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Howl } from "howler";
import { Play, Pause } from "lucide-react";

export function VoicePlayer({ src }: { src: string }) {
  const howlRef = useRef<Howl | null>(null);
  const rafRef = useRef<number>(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const howl = howlRef.current;
    if (howl && howl.playing()) {
      const seek = howl.seek() as number;
      const duration = howl.duration();
      if (duration > 0) {
        setProgress(seek / duration);
      }
      rafRef.current = requestAnimationFrame(updateProgress);
    }
  }, []);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      howlRef.current?.unload();
    };
  }, []);

  const toggle = () => {
    if (!howlRef.current) {
      const howl = new Howl({
        src: [src],
        html5: true,
        onplay: () => {
          setPlaying(true);
          rafRef.current = requestAnimationFrame(updateProgress);
        },
        onpause: () => setPlaying(false),
        onend: () => {
          setPlaying(false);
          setProgress(0);
        },
        onloaderror: () => setPlaying(false),
        onplayerror: () => setPlaying(false),
      });
      howlRef.current = howl;
      howl.play();
      return;
    }

    const howl = howlRef.current;
    if (playing) {
      howl.pause();
    } else {
      howl.play();
    }
  };

  const size = 26;
  const radius = 10;
  const stroke = 2.5;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  return (
    <button
      type="button"
      onClick={toggle}
      className="relative flex shrink-0 items-center justify-center cursor-pointer transition hover:opacity-80"
      style={{ width: size, height: size }}
      aria-label={playing ? "Pause intro" : "Play intro"}
    >
      <svg
        className="absolute inset-0"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(82, 82, 91, 0.6)"
          strokeWidth={stroke}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#22c55e"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${center} ${center})`}
          style={{ transition: "stroke-dashoffset 0.05s linear" }}
        />
      </svg>

      {playing ? (
        <Pause className="h-2 w-2 text-zinc-500" fill="currentColor" />
      ) : (
        <Play className="h-2 w-2 text-zinc-500 ml-px" fill="currentColor" />
      )}
    </button>
  );
}
