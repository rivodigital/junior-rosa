"use client";

import { useRef, useEffect, useState } from "react";

/**
 * Lightweight IntersectionObserver-based hook.
 * Previously used framer-motion's useInView — migrated to native API.
 */
export function useScrollAnimation(margin = "-100px") {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return { ref, isInView };
}

// Kept for any component that still reads these constants
export const FADE_IN_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
