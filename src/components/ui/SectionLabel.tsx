import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`block text-[12px] md:text-[14px] font-medium uppercase tracking-[0.1em] text-brand-muted mb-4 ${className}`}
    >
      {children}
    </span>
  );
}
