"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactOptionCard } from "@/components/ui/ContactOptionCard";
import { MultiStepForm } from "@/components/ui/MultiStepForm";
import { SITE_CONFIG } from "@/lib/constants";
import { MessageCircle, Mail, ClipboardSignature } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contato" className="py-16 md:py-24 lg:py-40 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel>10 — Vamos conversar</SectionLabel>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight mb-5 text-brand-white leading-[1.05]">
            Vamos tirar seu projeto
            <br />
            <span className="text-brand-muted">do papel?</span>
          </h2>
          <p className="text-brand-muted text-base md:text-lg max-w-[580px] leading-relaxed">
            Chame no WhatsApp e o Riv, nosso assistente, vai te atender na hora, entender o que você precisa e me passar tudo certinho pra eu montar sua proposta.
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
              description="Formulário direto. Leva 2 minutos."
              isActive={true}
            />
            <ContactOptionCard
              icon={<MessageCircle />}
              title="WhatsApp"
              description="Resposta instantânea pelo Riv, 24/7."
              href={SITE_CONFIG.whatsapp}
            />
            <ContactOptionCard
              icon={<Mail />}
              title="E-mail"
              description={SITE_CONFIG.email}
              href={`mailto:${SITE_CONFIG.email}`}
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
