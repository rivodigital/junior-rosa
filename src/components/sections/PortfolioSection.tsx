"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";

import { PROJECTS } from "@/data/projects";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 lg:py-40 bg-brand-black border-t border-white/[0.06]">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
