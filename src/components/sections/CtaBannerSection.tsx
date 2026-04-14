"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { MapPin, MessageCircle, Zap } from "lucide-react";

export function CtaBannerSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-brand-dark border-y border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-white/[0.02] rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-[1200px] relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full h-[180px] md:h-auto md:block md:aspect-[3/4] bg-brand-gray rounded-2xl overflow-hidden relative">
            <Image
              src="/images/junior_06.jpg"
              alt="Junior Rosa"
              fill
              className="object-cover object-center grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-8">
            <motion.h2
              className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-[1.05] tracking-tight text-brand-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Enquanto você pensa, seu concorrente{" "}
              <span className="text-brand-muted">já contratou.</span>
            </motion.h2>

            <p className="text-brand-muted text-lg leading-relaxed max-w-[450px]">
              Preencha o briefing em 2 minutos. Receba uma proposta personalizada em até 24h. Sem compromisso.
            </p>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-3 text-brand-muted">
                <Zap className="w-4 h-4 text-brand-white" />
                <span>Início imediato após aprovação</span>
              </div>
              <div className="flex items-center gap-3 text-brand-muted">
                <MessageCircle className="w-4 h-4 text-brand-white" />
                <span>Atendimento ágil e direto — com acompanhamento pessoal meu em cada etapa</span>
              </div>
              <div className="flex items-center gap-3 text-brand-muted">
                <MapPin className="w-4 h-4 text-brand-white" />
                <span>Joinville, SC — atendimento remoto para todo Brasil</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href={SITE_CONFIG.whatsapp} variant="outline" className="px-10 py-4">
                Falar no WhatsApp
              </Button>
              <Button href="#contato" variant="link">
                Preencher briefing
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
