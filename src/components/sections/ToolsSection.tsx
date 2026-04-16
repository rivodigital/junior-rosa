import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { TOOLS } from "@/data/tools";

export function ToolsSection() {
  return (
    <section id="ferramentas" className="py-16 md:py-24 lg:py-40 bg-brand-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <Reveal
          variant="fadeUp"
          margin="-80px"
          className="mb-16 md:mb-24 max-w-2xl"
        >
          <SectionLabel>06 — Stack de trabalho</SectionLabel>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold tracking-tight text-brand-white leading-[1.05] mb-5">
            Ferramentas de quem
            <br />
            <span className="text-brand-muted">leva o digital a sério.</span>
          </h2>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed">
            Domino o ecossistema completo — do Figma ao código. Isso significa
            zero ruído entre o que é desenhado e o que é entregue.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {TOOLS.map((group, groupIndex) => (
            <Reveal
              key={group.category}
              variant="fadeUp"
              delay={groupIndex * 80}
              margin="-50px"
              className="space-y-6"
            >
              <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-brand-white border-b border-white/10 pb-4">
                {group.category}
              </h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-brand-muted text-[15px] md:text-base hover:text-brand-white transition-colors duration-300 cursor-default flex items-center gap-3"
                  >
                    <span className="w-1 h-1 bg-brand-muted/40 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
