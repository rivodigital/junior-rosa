"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="py-16 md:py-24 lg:py-40 bg-brand-gray border-y border-white/5"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <motion.div
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
