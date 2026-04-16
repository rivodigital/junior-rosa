import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 md:py-24 lg:py-40 bg-brand-gray border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <Reveal
          variant="fadeUp"
          margin="-80px"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 mb-16 md:mb-20 items-end"
        >
          <div>
            <SectionLabel>04 — O que eu resolvo</SectionLabel>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight text-brand-white leading-[1.05]">
              Seu negócio precisa de
              <br />
              <span className="text-brand-muted">presença que converte.</span>
            </h2>
          </div>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed">
            Não entrego &ldquo;sites bonitos&rdquo;. Entrego ativos digitais
            desenhados para gerar receita, autoridade e diferenciação competitiva
            para o seu negócio.
          </p>
        </Reveal>

        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.id}
              variant="fadeLeft"
              delay={index * 80}
              margin="-50px"
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
          <div className="border-t border-brand-accent/10 w-full" />
        </div>
      </div>
    </section>
  );
}
