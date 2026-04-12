import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "link";
  href?: string;
}

export function Button({ variant = "outline", children, href, className = "", ...props }: ButtonProps) {
  const baseClasses = "transition-all duration-300 ease-in-out inline-flex items-center justify-center";
  
  const variants = {
    outline: "rounded-xl border border-brand-white bg-transparent text-brand-white text-[14px] font-medium uppercase tracking-[0.05em] px-[32px] py-[14px] hover:bg-brand-white hover:text-brand-black",
    link: "text-brand-white text-base md:text-lg font-medium hover:opacity-70 group",
  };

  const content = (
    <>
      {children}
      {variant === "link" && <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
}
