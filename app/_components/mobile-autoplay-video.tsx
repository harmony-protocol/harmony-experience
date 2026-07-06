"use client";

import { useCallback, useEffect, useRef } from "react";

type MobileAutoplayVideoProps = {
  className?: string;
  src: string;
};

export function MobileAutoplayVideo({ className, src }: MobileAutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.paused) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    void video.play().catch(() => {
      // Mobile Safari can reject until the element is visible or the tab is active.
    });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    if (!("IntersectionObserver" in window)) {
      play();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) play();
      },
      { threshold: 0.2 },
    );

    observer.observe(video);

    const retry = () => {
      if (!document.hidden) play();
    };
    document.addEventListener("visibilitychange", retry);
    window.addEventListener("pageshow", retry);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", retry);
      window.removeEventListener("pageshow", retry);
    };
  }, [play]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onCanPlay={play}
      onLoadedData={play}
    />
  );
}
