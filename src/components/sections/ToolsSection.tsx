"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TOOLS } from "@/data/tools";

export function ToolsSection() {
  return (
    <section id="ferramentas" className="py-24 md:py-40 bg-brand-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <motion.div
          className="mb-16 md:mb-24 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>06 — Stack de trabalho</SectionLabel>
          <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight text-brand-white leading-[1.05] mb-5">
            Ferramentas de quem
            <br />
            <span className="text-brand-muted">leva o digital a sério.</span>
          </h2>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed">
            Domino o ecossistema completo — do Figma ao código. Isso significa
            zero ruído entre o que é desenhado e o que é entregue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {TOOLS.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="space-y-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: 0.08 * groupIndex,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-brand-white border-b border-white/10 pb-4">
                {group.category}
              </h4>
              <ul className="space-y-3">
                {group.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    className="text-brand-muted text-[15px] md:text-base hover:text-brand-white transition-colors duration-300 cursor-default flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * groupIndex + 0.05 * itemIndex,
                    }}
                  >
                    <span className="w-1 h-1 bg-brand-muted/40 rounded-full shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
