"use client";

import React, { useEffect, useRef } from "react";

type RevealVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "fade" | "scaleIn";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number; // ms
  margin?: string; // IntersectionObserver rootMargin
  as?: React.ElementType;
}

/**
 * Lightweight reveal-on-scroll component using IntersectionObserver + CSS.
 * Replace Framer Motion's `whileInView` for simple fade/slide animations.
 * Uses only `transform` + `opacity` → GPU-composited, zero scroll-frame JS.
 */
export function Reveal({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  margin = "-80px",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("reveal-visible"), delay);
          } else {
            el.classList.add("reveal-visible");
          }
          observer.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, margin]);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal reveal-${variant} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
