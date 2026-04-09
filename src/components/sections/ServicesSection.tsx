"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 md:py-40 bg-brand-gray border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 mb-16 md:mb-20 items-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <SectionLabel>04 — O que eu resolvo</SectionLabel>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight text-brand-white leading-[1.05]">
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
        </motion.div>

        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
          <div className="border-t border-brand-accent/10 w-full" />
        </div>
      </div>
    </section>
  );
}
