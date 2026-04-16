import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="py-16 md:py-24 lg:py-40 bg-brand-gray border-y border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <Reveal
          variant="fadeUp"
          margin="-80px"
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <SectionLabel>07 — Prova social</SectionLabel>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight text-brand-white leading-[1.05]">
              Não acredite em mim.
              <br />
              <span className="text-brand-muted">
                Acredite nos resultados.
              </span>
            </h2>
          </div>
          <p className="text-brand-muted text-base md:text-lg max-w-[360px] leading-relaxed">
            O que clientes reais dizem sobre o impacto no negócio deles.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              variant="fadeUp"
              delay={index * 100}
              margin="-50px"
            >
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
