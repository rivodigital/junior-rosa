"use client";

import { useRef, useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

function AnimatedCounter({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const stepTime = Math.abs(Math.floor((duration * 1000) / end));
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
          }, stepTime);
          observer.disconnect();
          return () => clearInterval(timer);
        }
      },
      { rootMargin: "-50px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const STATS = [
  { value: 500, suffix: "+", label: "PROJETOS ENTREGUES" },
  { value: 50, suffix: "M+", label: "EM VENDAS GERADAS", prefix: "R$" },
  { value: 280, suffix: "%", label: "CONVERSÃO MÉDIA", prefix: "+" },
  { value: 18, suffix: "+", label: "ANOS NO MERCADO" },
];

export function IntroSection() {
  return (
    <section id="intro" className="py-16 md:py-24 lg:py-40 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <Reveal variant="fade" margin="-100px">
          <SectionLabel>02 — Por que me contratar</SectionLabel>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mt-10 items-center">
          <Reveal
            variant="fadeUp"
            margin="-80px"
            className="lg:col-span-7"
          >
            <h2 className="text-[22px] sm:text-[26px] md:text-[34px] lg:text-[42px] font-light leading-[1.15] tracking-[-0.02em] text-brand-white mb-8">
              Seu site deveria estar{" "}
              <span className="font-semibold">vendendo agora</span>.
            </h2>
            <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-6 max-w-[560px]">
              A maioria dos negócios perde dinheiro com sites que não foram
              pensados para converter. Eu entro antes da primeira linha de
              código — na estratégia, no posicionamento e no design que
              transforma visitante em cliente.
            </p>
            <p className="text-brand-muted/80 text-sm md:text-base leading-relaxed mb-10 max-w-[520px]">
              Sem equipe intermediária, sem telefone sem fio. Você fala direto
              com quem desenha e desenvolve.
            </p>
            <Button variant="link" href="#contato">
              Quero um site que vende
            </Button>
          </Reveal>

          <Reveal
            variant="scaleIn"
            margin="-80px"
            delay={200}
            className="lg:col-span-5 h-full"
          >
            <div className="w-full aspect-[3/4] bg-brand-gray rounded-2xl overflow-hidden relative">
              <Image
                src="/images/junior_04.jpg"
                alt="Estratégia e Conversão"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-20 mt-20 border-t border-brand-accent/10">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              variant="fadeUp"
              delay={i * 100}
              margin="-50px"
              className="bg-brand-white/[0.02] backdrop-blur-md border border-white/[0.04] rounded-2xl p-4 md:p-6 hover:bg-brand-white/[0.04] hover:border-white/[0.06] transition-all duration-500"
            >
              <span className="block text-[28px] sm:text-[36px] md:text-[48px] font-bold text-brand-white mb-1 tracking-tight">
                {stat.prefix || ""}
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[12px] uppercase tracking-[0.15em] text-brand-muted font-medium">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
