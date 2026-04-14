import React from "react";

interface ContactOptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
}

export function ContactOptionCard({ 
  icon, 
  title, 
  description, 
  onClick, 
  href,
  isActive = false
}: ContactOptionCardProps) {
  const baseClasses = `p-4 md:p-6 lg:p-8 bg-brand-white/[0.02] backdrop-blur-xl rounded-xl border transition-all cursor-pointer text-left active:scale-[0.98]
    ${isActive ? 'border-brand-white bg-brand-white/[0.05]' : 'border-white/[0.06] hover:border-white/[0.1] hover:bg-brand-white/[0.04]'}`;

  const content = (
    <>
      <div className="text-brand-white mb-4 [&>svg]:w-6 [&>svg]:h-6">
        {icon}
      </div>
      <h4 className="font-bold mb-1 text-lg">{title}</h4>
      <p className="text-brand-muted text-sm">{description}</p>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${baseClasses} w-full`}>
      {content}
    </button>
  );
}
