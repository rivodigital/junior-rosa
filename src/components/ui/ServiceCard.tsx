import { Service } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <a
      href="#contato"
      className="group border-t border-white/[0.06] py-8 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 hover:bg-brand-white/[0.03] hover:backdrop-blur-sm px-4 md:px-6 -mx-4 md:-mx-6 rounded-xl transition-all duration-500 cursor-pointer min-h-[44px]"
    >
      <div className="flex items-center gap-6 md:gap-8 md:w-[30%]">
        <span className="text-brand-muted/40 font-bold text-lg tabular-nums">
          {service.number}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-brand-white">
          {service.title}
        </h3>
      </div>

      <div className="md:w-[40%] space-y-2">
        <p className="text-brand-muted text-base md:text-lg leading-relaxed">
          {service.description}
        </p>
        {service.highlight && (
          <Reveal
            as="span"
            variant="fadeLeft"
            delay={200}
            className="inline-block text-xs uppercase tracking-[0.15em] font-bold text-brand-white/70 bg-brand-white/[0.04] backdrop-blur-md border border-white/[0.06] px-3 py-1 rounded-full"
          >
            {service.highlight}
          </Reveal>
        )}
      </div>

      <div className="md:w-[20%] flex md:justify-end">
        <span className="inline-flex items-center gap-2 text-brand-white font-bold text-sm transition-all duration-300 group-hover:gap-4">
          Solicitar
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
}
