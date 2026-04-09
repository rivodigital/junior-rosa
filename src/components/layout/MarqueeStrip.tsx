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
  return (
    <div className={`overflow-hidden whitespace-nowrap flex w-full relative ${bgColor} ${className}`}>
      {/* 
        We use an inline flex container with two identical blocks to loop seamlessly.
        Using arbitrary values via tailwind like animate-[marquee_30s_linear_infinite]
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-custom {
          animation: marquee ${speed} linear infinite;
        }
      `}} />
      <div className="animate-marquee-custom flex min-w-full">
        {/* We output the elements twice inside the container so it has exactly 2x width to slide -50% */}
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
