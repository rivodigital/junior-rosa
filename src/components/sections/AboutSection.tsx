import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const CREDENTIALS = [
  { value: "1", label: "PESSOA NO PROJETO" },
  { value: "5+", label: "AGENTES DE IA TRABALHANDO" },
  { value: "0", label: "INTERMEDIÁRIOS" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-40 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <Reveal
            variant="fadeLeft"
            margin="-80px"
            className="md:col-span-5 md:order-1 order-2"
          >
            <div className="w-full aspect-[3/4] bg-brand-gray rounded-2xl overflow-hidden relative">
              <Image
                src="/images/junior_02.jpg"
                alt="Junior Rosa"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal
            variant="fadeUp"
            margin="-80px"
            className="md:col-span-7 md:order-2 order-1"
          >
            <SectionLabel>05 — Quem está por trás</SectionLabel>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight mb-8 leading-[1.05] text-brand-white">
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
                . Há mais de 18 anos ajudo empresas a transformarem presença digital
                em{" "}
                <span className="text-brand-white font-medium">
                  vantagem competitiva real
                </span>
                .
              </p>
              <p>
                Diferente de agências onde seu projeto passa por 10 mãos, aqui
                eu cuido de tudo: estratégia, design e desenvolvimento. Você
                fala direto com quem decide e executa.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6 lg:gap-8 mb-12 pb-12 border-b border-white/5">
              {CREDENTIALS.map((cred, i) => (
                <Reveal
                  key={cred.label}
                  variant="fadeUp"
                  delay={300 + i * 100}
                  margin="-20px"
                  className="bg-brand-white/[0.02] backdrop-blur-md border border-white/[0.04] rounded-xl p-3 md:p-4 w-full hover:bg-brand-white/[0.04] hover:border-white/[0.06] transition-all duration-500"
                >
                  <span className="block text-[24px] sm:text-[28px] md:text-[36px] font-bold text-brand-white mb-1 tracking-tight">
                    {cred.value}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-brand-muted font-medium">
                    {cred.label}
                  </span>
                </Reveal>
              ))}
            </div>

            <Button variant="link" href="#contato">
              Iniciar um projeto comigo
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
