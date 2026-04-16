import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";

import { PROJECTS } from "@/data/projects";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 lg:py-40 bg-brand-black border-t border-white/[0.06]">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <Reveal
          variant="fadeUp"
          margin="-80px"
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20"
        >
          <div>
            <SectionLabel>03 — Resultados reais</SectionLabel>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight text-brand-white leading-[1.05]">
              Projetos que geraram
              <br />
              <span className="text-brand-muted">resultado mensurável.</span>
            </h2>
          </div>
          <p className="text-brand-muted text-base md:text-lg max-w-[380px] leading-relaxed">
            Cada projeto abaixo gerou impacto real no faturamento, posicionamento
            ou autoridade do cliente.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-16">
          {PROJECTS.map((project, index) => (
            <Reveal
              key={project.id}
              variant="fadeUp"
              delay={index * 120}
              margin="-60px"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
