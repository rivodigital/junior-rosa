import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";

import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { ContactSection } from "@/components/sections/ContactSection";

const MARQUEE_CLIENTS =
  "BRENNTAG \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 REAL\u00A0HORTIFRUTI \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 NESPRESSO \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 ESCALLA\u00A0IMÓVEIS \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 ZR3\u00A0EMPREENDIMENTOS \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 CCR \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 IFF \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 GRAND\u00A0HYATT \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 APERAM \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 SOTREQ \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 VALOREM \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 NEW\u00A0HOLLAND \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-grow flex flex-col w-full selection:bg-brand-white selection:text-brand-black">
        <HeroSection />

        <MarqueeStrip
          text={MARQUEE_CLIENTS}
          className="py-7 border-y border-white/[0.06] bg-brand-black"
          textClassName="text-[14px] md:text-[16px] font-semibold uppercase tracking-[0.2em] text-brand-white/40"
        />

        <IntroSection />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
        <ToolsSection />
        <TestimonialsSection />
        <BlogSection />
        <CtaBannerSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
