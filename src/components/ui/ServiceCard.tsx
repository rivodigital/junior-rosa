"use client";

import { motion } from "framer-motion";
import { Service } from "@/data/services";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      className="group border-t border-white/[0.06] py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-brand-white/[0.03] hover:backdrop-blur-sm px-6 -mx-6 rounded-xl transition-all duration-500 cursor-pointer"
      whileHover="hover"
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
          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.15em] font-bold text-brand-white/70 bg-brand-white/[0.04] backdrop-blur-md border border-white/[0.06] px-3 py-1 rounded-full"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {service.highlight}
          </motion.span>
        )}
      </div>

      <div className="md:w-[20%] flex md:justify-end">
        <motion.a
          href="#contato"
          className="inline-flex items-center gap-2 text-brand-white font-bold text-sm"
          variants={{
            hover: { gap: "16px" },
          }}
          transition={{ duration: 0.3 }}
        >
          Solicitar
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}
