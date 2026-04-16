"use client";

import { usePathname } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { MarqueeStrip } from "./MarqueeStrip";
import Image from "next/image";
import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const toHref = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href;
  return (
    <footer className="bg-brand-black w-full border-t border-brand-accent/5 flex flex-col">
      <div className="py-10 border-b border-brand-accent/5 bg-brand-black overflow-hidden">
        <MarqueeStrip
          text="CAUSE IMPACTO"
          speed="40s"
          bgColor="bg-brand-black"
          textClassName="text-[36px] sm:text-[64px] md:text-[120px] lg:text-[160px] font-bold uppercase tracking-tighter text-brand-white opacity-[0.04]"
        />
      </div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1200px] py-12 md:py-16 lg:py-24 flex flex-col gap-12 md:gap-16 lg:gap-20">
        <Reveal
          variant="fadeUp"
          margin="0px"
          className="flex flex-col md:flex-row justify-between gap-16"
        >
          <div className="max-w-[320px]">
            <Image src="/images/logo_clara.png" alt="RIVO" width={140} height={40} className="h-8 md:h-9 w-auto mb-5" />
            <p className="text-[13px] font-medium leading-[1.8] text-brand-muted">
              Design estratégico e desenvolvimento web para empresas que querem
              dominar o digital. Joinville, SC — atendimento remoto para todo
              Brasil.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
            <div className="flex flex-col gap-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-white">
                Navegação
              </span>
              <div className="flex flex-col gap-3 text-[14px] text-brand-muted">
                {NAVIGATION_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={toHref(link.href)}
                    className="hover:text-brand-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-white">
                Social
              </span>
              <div className="flex flex-col gap-3 text-[14px] text-brand-muted">
                {Object.entries(SITE_CONFIG.socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-white transition-colors duration-300 capitalize"
                  >
                    {key}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-white">
                Contato
              </span>
              <div className="flex flex-col gap-3 text-[14px] text-brand-muted">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-brand-white transition-colors duration-300"
                >
                  {SITE_CONFIG.email}
                </a>
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-white transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-accent/5 gap-4">
          <p className="text-[12px] text-brand-muted text-center md:text-left">
            &copy; 2026 Junior Rosa. Todos os direitos reservados.
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-white/15">
            Design &amp; código por RIVO Stúdio
          </p>
        </div>
      </div>
    </footer>
  );
}
