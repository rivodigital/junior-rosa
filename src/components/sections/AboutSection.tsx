"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const CREDENTIALS = [
  { value: "500+", label: "Projetos entregues" },
  { value: "3", label: "Países atendidos" },
  { value: "18+", label: "Anos de mercado" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-40 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="md:col-span-5 md:order-1 order-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full aspect-[3/4] bg-brand-gray rounded-2xl overflow-hidden relative">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/junior_02.jpg')",
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:col-span-7 md:order-2 order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>05 — Quem está por trás</SectionLabel>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight mb-8 leading-[1.05] text-brand-white">
              Eu não terceirizo.
              <br />
              <span className="text-brand-muted">
                Cada projeto passa por mim.
              </span>
            </h2>

            <div className="space-y-5 text-lg md:text-xl font-light text-brand-muted leading-relaxed mb-12">
              <p>
                Sou Junior Rosa, fundador da{" "}
                <span className="text-brand-white font-medium">
                  RIVO Stúdio
                </span>
                . Nos últimos 18 anos, ajudei mais de 500 empresas a transformarem
                presença digital em{" "}
                <span className="text-brand-white font-medium">
                  vantagem competitiva real
                </span>
                .
              </p>
              <p>
                Diferente de agências onde seu projeto passa por 10 mãos, aqui
                eu cuido de tudo: estratégia, design e desenvolvimento. Isso
                garante consistência, velocidade e um nível de cuidado que
                empresas grandes não conseguem oferecer.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex gap-6 md:gap-8 mb-12 pb-12 border-b border-white/5">
              {CREDENTIALS.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="bg-brand-white/[0.02] backdrop-blur-md border border-white/[0.04] rounded-xl p-4 hover:bg-brand-white/[0.04] hover:border-white/[0.06] transition-all duration-500"
                >
                  <span className="block text-[28px] md:text-[36px] font-bold text-brand-white mb-1 tracking-tight">
                    {cred.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-brand-muted font-medium">
                    {cred.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <Button variant="link" href="#contato">
              Iniciar um projeto comigo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
