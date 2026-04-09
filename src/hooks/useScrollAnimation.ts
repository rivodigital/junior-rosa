"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation(margin = "-100px") {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: margin as any });

  return { ref, isInView };
}

export const FADE_IN_UP: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const STAGGER_CONTAINER: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
