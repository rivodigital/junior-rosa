import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MarqueeStrip } from "@/components/layout/MarqueeStrip";
import { HeroSection } from "@/components/sections/HeroSection";

const IntroSection = dynamic(
  () =>
    import("@/components/sections/IntroSection").then((m) => m.IntroSection),
  { ssr: true }
);
const PortfolioSection = dynamic(
  () =>
    import("@/components/sections/PortfolioSection").then(
      (m) => m.PortfolioSection
    ),
  { ssr: true }
);
const ServicesSection = dynamic(
  () =>
    import("@/components/sections/ServicesSection").then(
      (m) => m.ServicesSection
    ),
  { ssr: true }
);
const AboutSection = dynamic(
  () =>
    import("@/components/sections/AboutSection").then((m) => m.AboutSection),
  { ssr: true }
);
const ToolsSection = dynamic(
  () =>
    import("@/components/sections/ToolsSection").then((m) => m.ToolsSection),
  { ssr: true }
);
const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/TestimonialsSection").then(
      (m) => m.TestimonialsSection
    ),
  { ssr: true }
);
const BlogSection = dynamic(
  () =>
    import("@/components/sections/BlogSection").then((m) => m.BlogSection),
  { ssr: true }
);
const CtaBannerSection = dynamic(
  () =>
    import("@/components/sections/CtaBannerSection").then(
      (m) => m.CtaBannerSection
    ),
  { ssr: true }
);
const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then(
      (m) => m.ContactSection
    ),
  { ssr: true }
);

const MARQUEE_CLIENTS =
  "BRENNTAG \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 REAL\u00A0HORTIFRUTI \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 NESPRESSO \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 ESCALLA\u00A0IMÓVEIS \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 ZR3\u00A0EMPREENDIMENTOS \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 CCR \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 IFF \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 GRAND\u00A0HYATT \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 APERAM \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 SOTREQ \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 VALOREM \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0 NEW\u00A0HOLLAND \u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-grow flex flex-col w-full selection:bg-brand-white selection:text-brand-black">
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
