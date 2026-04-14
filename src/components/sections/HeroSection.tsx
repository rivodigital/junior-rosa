"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const TAGS = ["Landing Pages", "Sites Institucionais", "E-commerces", "Branding"];

const SCROLLING_TEXT = "DESIGN • ESTRATÉGIA • RESULTADO • IMPACTO • ";

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return position;
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacityOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const springX = useSpring(mouse.x, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouse.y, { stiffness: 50, damping: 30 });

  const clipReveal = {
    hidden: { clipPath: "inset(100% 0 0 0)" },
    show: {
      clipPath: "inset(0% 0 0 0)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const slideUp = {
    hidden: { y: 120, opacity: 0, rotateX: 40 },
    show: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center bg-brand-black overflow-hidden"
    >
      {/* ===== CURSOR SPOTLIGHT ===== */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[1] opacity-20 hidden lg:block"
        style={{
          background: `radial-gradient(800px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.06), transparent 60%)`,
        }}
      />

      {/* ===== ANIMATED BACKGROUND LAYERS ===== */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: bgY }}
      >
        {/* Morphing gradient blobs */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1.1, 1],
            x: [0, 80, -40, 0],
            y: [0, -60, 30, 0],
            rotate: [0, 45, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[30%] -right-[15%] w-[900px] h-[900px] bg-brand-white/[0.03] rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 0.9, 1],
            x: [0, -120, 60, 0],
            y: [0, 80, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -left-[10%] w-[700px] h-[700px] bg-brand-accent/[0.04] rounded-full blur-[180px]"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_40%,transparent_100%)]" />

        {/* Animated diagonal lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.line
            x1="0%" y1="100%" x2="100%" y2="0%"
            stroke="white" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />
          <motion.line
            x1="20%" y1="100%" x2="100%" y2="20%"
            stroke="white" strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
          />
        </svg>

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[20%] w-32 h-32 border border-brand-white/[0.06] rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[25%] left-[15%] w-20 h-20 border border-brand-white/[0.04]"
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
        />
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[8%] w-3 h-3 bg-brand-white/10 rounded-full"
        />
        <motion.div
          animate={{ y: [10, -15, 10], x: [5, -8, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[8%] w-2 h-2 bg-brand-white/[0.08] rounded-full"
        />
      </motion.div>

      {/* ===== GIANT SCROLLING BACKGROUND TEXT ===== */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full z-[2] pointer-events-none overflow-hidden opacity-[0.03]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[18vw] font-bold tracking-tighter text-brand-white leading-none mr-8"
            >
              {SCROLLING_TEXT}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Second scrolling text layer - opposite direction */}
      <div className="absolute top-[65%] left-0 w-full z-[2] pointer-events-none overflow-hidden opacity-[0.02]">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[12vw] font-light italic tracking-tighter text-brand-white leading-none mr-8"
            >
              {SCROLLING_TEXT}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <motion.div
        className="container relative z-10 mx-auto px-6 md:px-12 max-w-[1400px]"
        style={{ y: textY, opacity: opacityOut }}
      >
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[85dvh]">
          {/* ===== LEFT: TYPOGRAPHY ===== */}
          <motion.div
            className="lg:col-span-7 flex flex-col relative z-20 pb-16 lg:pb-0 [perspective:1000px]"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Section label with line animation */}
            <motion.div variants={slideUp} className="mb-6 flex items-center gap-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-px w-12 bg-brand-accent origin-left"
              />
              <SectionLabel className="!text-brand-accent">
                Do briefing ao resultado. Sem agência, sem ruído.
              </SectionLabel>
            </motion.div>

            {/* Main headline with clip-path reveal */}
            <div className="overflow-hidden mb-6 max-w-[640px]">
              <motion.h1
                variants={clipReveal}
                className="text-[clamp(34px,4.4vw,60px)] font-semibold leading-[1.05] tracking-[-0.025em] text-brand-white"
              >
                Sites e landing pages que geram{" "}
                <span className="text-brand-white/55 font-light italic">
                  resultado real
                </span>
                .
              </motion.h1>
            </div>

            {/* Subtitle with staggered word reveal */}
            <motion.p
              variants={slideUp}
              className="text-[16px] md:text-[18px] font-light text-brand-muted max-w-[520px] mb-10 leading-[1.6]"
            >
              Sou Junior Rosa, fundador da RIVO Stúdio. Seu próximo site não
              vai ser só bonito — vai fechar negócios enquanto você dorme.
            </motion.p>

            {/* CTA with dramatic entrance */}
            <motion.div
              variants={slideUp}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  href="#portfolio"
                  variant="outline"
                  className="h-[52px] md:h-[60px] px-6 md:px-10 text-[14px] md:text-[16px] rounded-full relative overflow-hidden group"
                >
                  <span className="relative z-10">Ver Trabalhos</span>
                </Button>
              </motion.div>

              {/* Animated stat badges */}
              <div className="flex -space-x-3">
                {[
                  { label: "BR", delay: 0 },
                  { label: "500+", delay: 0.1 },
                  { label: "18a", delay: 0.2 },
                ].map((badge) => (
                  <motion.div
                    key={badge.label}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 2 + badge.delay,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    className={`w-12 h-12 rounded-full border-2 border-brand-black flex items-center justify-center text-[10px] font-bold cursor-default transition-colors duration-300 ${
                      badge.label === "Pro"
                        ? "bg-brand-white text-brand-black"
                        : badge.label === "100+"
                        ? "bg-brand-accent/20 backdrop-blur-md text-brand-white"
                        : "bg-brand-white/10 backdrop-blur-md text-brand-white"
                    }`}
                  >
                    {badge.label === "Pro" ? (
                      <span className="uppercase tracking-tighter">{badge.label}</span>
                    ) : (
                      badge.label
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tags with sequential line animation */}
            <motion.div
              variants={slideUp}
              className="flex flex-wrap gap-4 items-center"
            >
              {TAGS.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.5 + idx * 0.1 }}
                    className="text-[11px] sm:text-[12px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold text-brand-muted hover:text-brand-white transition-colors duration-500 cursor-default"
                  >
                    {tag}
                  </motion.span>
                  {idx < TAGS.length - 1 && (
                    <motion.span
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 2.7 + idx * 0.1 }}
                      className="text-brand-white/10 hidden md:inline-block"
                    >
                      /
                    </motion.span>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* ===== RIGHT: EPIC IMAGE COMPOSITION ===== */}
          <motion.div
            className="lg:col-span-5 relative w-full h-full flex items-center justify-center mt-12 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{ scale: imageScale }}
          >
            {/* Orbiting ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-30px] border border-brand-white/[0.04] rounded-[40px] pointer-events-none"
            />

            {/* Main Image Frame with parallax */}
            <div className="relative w-full max-w-[450px] lg:max-w-none aspect-[4/5] rounded-[32px] overflow-hidden">
              <motion.img
                src="/images/junior_01.jpg"
                alt="Junior Rosa Profile"
                className="object-cover w-full h-full"
                initial={{ scale: 1.3 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
              <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-white/20 to-transparent"
                animate={{ top: ["-10%", "110%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Floating Glass Badge 1 - with more dramatic movement */}
            <motion.div
              className="absolute left-2 sm:-left-6 md:-left-14 top-[18%] bg-brand-white/[0.04] border border-brand-white/10 backdrop-blur-2xl py-3 px-4 sm:py-4 sm:px-6 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, x: -50, rotateY: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                y: [0, 15, 0],
              }}
              transition={{
                opacity: { duration: 1.2, delay: 0.8 },
                x: { duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] },
                rotateY: { duration: 1.2, delay: 0.8 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
              }}
              whileHover={{ scale: 1.08 }}
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
              className="absolute right-0 md:right-4 bottom-[12%] bg-brand-black/50 border border-brand-white/[0.06] backdrop-blur-2xl py-3 px-4 sm:py-4 sm:px-8 rounded-full shadow-2xl"
              initial={{ opacity: 0, x: 50, rotateY: 20 }}
              animate={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                y: [0, -12, 0],
              }}
              transition={{
                opacity: { duration: 1.2, delay: 1.1 },
                x: { duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] },
                rotateY: { duration: 1.2, delay: 1.1 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              }}
              whileHover={{ scale: 1.08 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="block text-[10px] sm:text-[12px] uppercase font-bold text-brand-white tracking-[0.1em]">
                  Disponível para Projetos
                </span>
              </div>
            </motion.div>

            {/* NEW: Small floating accent shape */}
            <motion.div
              className="absolute -right-2 top-[8%] w-16 h-16 border border-brand-white/[0.08] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.span
          className="text-[11px] sm:text-[10px] uppercase tracking-[0.3em] text-brand-muted font-medium"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-brand-white/40 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
