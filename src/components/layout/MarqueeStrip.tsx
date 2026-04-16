import React from "react";

interface MarqueeStripProps {
  text: string;
  speed?: string; // e.g. "30s"
  className?: string;
  textClassName?: string;
  bgColor?: string;
}

export function MarqueeStrip({ 
  text, 
  speed = "30s", 
  className = "",
  textClassName = "text-xl font-bold uppercase tracking-widest opacity-50",
  bgColor = "bg-brand-dark" 
}: MarqueeStripProps) {
  // Use the @keyframes marquee defined globalaly in globals.css
  // via Tailwind arbitrary animation value — no inline <style> needed.
  const animClass = `animate-[marquee_${speed}_linear_infinite]`;

  return (
    <div className={`overflow-hidden whitespace-nowrap flex w-full relative ${bgColor} ${className}`}>
      <div className={`${animClass} flex min-w-full`}>
        {/* Output elements twice so the container is 2× width and slides -50% seamlessly */}
        <div className="flex gap-12 md:gap-24 px-6 md:px-12 items-center shrink-0">
          <span className={textClassName}>{text}</span>
          <span className={textClassName}>{text}</span>
          <span className={textClassName}>{text}</span>
          <span className={textClassName}>{text}</span>
          <span className={textClassName}>{text}</span>
        </div>
        <div className="flex gap-12 md:gap-24 px-6 md:px-12 items-center shrink-0">
          <span className={textClassName}>{text}</span>
          <span className={textClassName}>{text}</span>
          <span className={textClassName}>{text}</span>
          <span className={textClassName}>{text}</span>
          <span className={textClassName}>{text}</span>
        </div>
      </div>
    </div>
  );
}
