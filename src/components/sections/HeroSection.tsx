"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const TAGS = ["Landing Pages", "Sites Institucionais", "E-commerces", "Branding"];



const slideUp = {
  hidden: { y: 80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export function HeroSection() {

  return (
    <section
      className="relative min-h-screen w-full flex items-center bg-brand-black overflow-hidden"
    >
      {/* ===== CSS-ONLY BACKGROUND (no JS animation overhead) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gradient blobs via CSS animation */}
        <div className="absolute -top-[30%] -right-[15%] w-[900px] h-[900px] bg-brand-white/[0.03] rounded-full blur-[150px] animate-[blob_25s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[700px] h-[700px] bg-brand-accent/[0.04] rounded-full blur-[180px] animate-[blob_20s_ease-in-out_infinite_reverse]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_40%,transparent_100%)]" />

        {/* Floating geometric shapes via CSS */}
        <div className="absolute top-[15%] right-[20%] w-32 h-32 border border-brand-white/[0.06] rounded-full animate-[spin_60s_linear_infinite]" />
      </div>

      {/* ===== SCROLLING BACKGROUND TEXT (CSS-only) ===== */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full z-[2] pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[18vw] font-bold tracking-tighter text-brand-white leading-none mr-8"
            >
              DESIGN • ESTRATÉGIA • RESULTADO • IMPACTO •{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[85dvh]">
          {/* ===== LEFT: TYPOGRAPHY ===== */}
          <motion.div
            className="lg:col-span-7 flex flex-col relative z-20 pb-16 lg:pb-0"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Section label */}
            <motion.div variants={slideUp} className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-accent" />
              <SectionLabel className="!text-brand-accent">
                Do briefing ao resultado. Sem agência, sem ruído.
              </SectionLabel>
            </motion.div>

            {/* Main headline */}
            <div className="overflow-hidden mb-6 max-w-[640px]">
              <motion.h1
                variants={slideUp}
                className="text-[clamp(34px,4.4vw,60px)] font-semibold leading-[1.05] tracking-[-0.025em] text-brand-white"
              >
                Sites e landing pages que geram{" "}
                <span className="text-brand-white/55 font-light italic">
                  resultado real
                </span>
                .
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={slideUp}
              className="text-[16px] md:text-[18px] font-light text-brand-muted max-w-[520px] mb-10 leading-[1.6]"
            >
              Sou Junior Rosa, fundador da RIVO Stúdio. Seu próximo site não
              vai ser só bonito — vai fechar negócios enquanto você dorme.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={slideUp}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
            >
              <Button
                href="#portfolio"
                variant="outline"
                className="h-[52px] md:h-[60px] px-6 md:px-10 text-[14px] md:text-[16px] rounded-full relative overflow-hidden group"
              >
                <span className="relative z-10">Ver Trabalhos</span>
              </Button>

              {/* Static stat badges (no JS animation) */}
              <div className="flex -space-x-3">
                {[
                  { label: "BR" },
                  { label: "500+" },
                  { label: "18a" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="w-12 h-12 rounded-full border-2 border-brand-black flex items-center justify-center text-[10px] font-bold bg-brand-white/10 backdrop-blur-md text-brand-white"
                  >
                    {badge.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              variants={slideUp}
              className="flex flex-wrap gap-4 items-center"
            >
              {TAGS.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold text-brand-muted hover:text-brand-white transition-colors duration-500 cursor-default">
                    {tag}
                  </span>
                  {idx < TAGS.length - 1 && (
                    <span className="text-brand-white/10 hidden md:inline-block">
                      /
                    </span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* ===== RIGHT: IMAGE COMPOSITION ===== */}
          <motion.div
            className="lg:col-span-5 relative w-full h-full flex items-center justify-center mt-32 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Orbiting ring via CSS */}
            <div className="absolute inset-[-30px] border border-brand-white/[0.04] rounded-[40px] pointer-events-none animate-[spin_30s_linear_infinite]" />

            {/* Main Image Frame */}
            <div className="relative w-full max-w-[450px] lg:max-w-none aspect-[4/5] rounded-[32px] overflow-hidden">
              <Image
                src="/images/junior_01.jpg"
                alt="Junior Rosa Profile"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 450px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDABYWFhYWFiYWFiY2JiYmNkk2NjY2SVxJSUlJSVxvXFxcXFxcb29vb29vb2+Ghoamp6etra25ubn/2wBDARsdHS0pLUwpKUy3fGZ8t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7f/wAARCAAQAAwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwAWFhYWFhYmFhYmNiYmJjZJNjY2NklcSUlJSUlcb1xcXFxcXG9vb29vb29vhoaGhoaGnJycnJyvr6+vr6+vr6+v/9sAQwEbHR0tKS1MKSlMt3xmfLe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3/90ABAAB/9oADAMBAAIRAxEAPwDEtY4zZyMY97nv6D1rMPWrMc5SExrnc3B+lVqAP//Z"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
            </div>

            {/* Floating Glass Badge 1 */}
            <motion.div
              className="absolute z-20 left-1 sm:-left-6 md:-left-14 top-[2%] sm:top-[10%] md:top-[18%] bg-brand-white/[0.04] border border-brand-white/10 backdrop-blur-2xl py-3 px-4 sm:py-4 sm:px-6 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block text-[9px] sm:text-[10px] uppercase font-bold text-brand-muted tracking-[0.2em] mb-1">
                Resultado comprovado
              </span>
              <span className="block text-[13px] sm:text-[16px] text-brand-white font-medium">
                18 anos no digital
              </span>
            </motion.div>

            {/* Floating Glass Badge 2 */}
            <motion.div
              className="absolute z-20 right-1 sm:right-0 md:right-4 bottom-[4%] sm:bottom-[8%] md:bottom-[12%] bg-brand-black/50 border border-brand-white/[0.06] backdrop-blur-2xl py-3 px-4 sm:py-4 sm:px-8 rounded-full shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="block text-[10px] sm:text-[12px] uppercase font-bold text-brand-white tracking-[0.1em]">
                  Disponível para Projetos
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-[11px] sm:text-[10px] uppercase tracking-[0.3em] text-brand-muted font-medium animate-pulse">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-white/40 to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
      </motion.div>
    </section>
  );
}
