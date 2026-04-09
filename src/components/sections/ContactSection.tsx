"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactOptionCard } from "@/components/ui/ContactOptionCard";
import { MultiStepForm } from "@/components/ui/MultiStepForm";
import { SITE_CONFIG } from "@/lib/constants";
import { MessageCircle, Mail, Camera, ClipboardSignature } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="py-24 md:py-40 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>10 — Vamos conversar</SectionLabel>
          <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight mb-5 text-brand-white leading-[1.05]">
            Pronto para ter um site
            <br />
            <span className="text-brand-muted">que trabalha por você?</span>
          </h2>
          <p className="text-brand-muted text-base md:text-lg max-w-[580px] leading-relaxed">
            Preencha o briefing em 2 minutos e receba uma proposta personalizada
            em até 24h. Sem compromisso, sem chatbot — resposta humana e direta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <motion.div
            className="lg:col-span-4 flex flex-col gap-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactOptionCard
              icon={<ClipboardSignature />}
              title="Briefing rápido"
              description="O jeito mais eficiente de começar. Leva 2 minutos."
              isActive={true}
            />
            <ContactOptionCard
              icon={<MessageCircle />}
              title="WhatsApp"
              description="Resposta em até 2h em horário comercial."
              href={SITE_CONFIG.whatsapp}
            />
            <ContactOptionCard
              icon={<Mail />}
              title="E-mail"
              description={SITE_CONFIG.email}
              href={`mailto:${SITE_CONFIG.email}`}
            />
            <ContactOptionCard
              icon={<Camera />}
              title="Instagram"
              description="Bastidores e projetos em tempo real."
              href={SITE_CONFIG.socials.instagram}
            />
          </motion.div>

          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MultiStepForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
