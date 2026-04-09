export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  highlight?: string;
};

export const SERVICES: Service[] = [
  {
    id: "landing-pages",
    number: "01.",
    title: "Landing Pages",
    description:
      "Páginas de alta conversão que transformam tráfego em faturamento. Copywriting, design e performance técnica trabalhados em conjunto.",
    highlight: "Média de +280% em conversão",
  },
  {
    id: "sites",
    number: "02.",
    title: "Sites Institucionais",
    description:
      "O cartão de visitas que fecha negócios antes da primeira reunião. Design que transmite credibilidade e posiciona a empresa como referência no mercado.",
    highlight: "Autoridade digital desde o primeiro acesso",
  },
  {
    id: "ecommerce",
    number: "03.",
    title: "E-commerces",
    description:
      "Lojas virtuais desenhadas para vender. Fluxo de compra otimizado, checkout sem fricção e design que elimina objeções de compra.",
    highlight: "Foco total em receita recorrente",
  },
  {
    id: "branding",
    number: "04.",
    title: "Branding",
    description:
      "Identidade visual que diferencia sua empresa num mercado saturado. Logo, paleta, tipografia e linguagem visual alinhados ao posicionamento estratégico.",
    highlight: "Marcas que as pessoas reconhecem",
  },
  {
    id: "ai-whatsapp",
    number: "05.",
    title: "Agentes de IA para WhatsApp",
    description:
      "Atendimento automatizado 24/7 no seu WhatsApp. O agente conversa naturalmente, entende áudios e imagens, qualifica leads, agenda reuniões e nunca deixa um cliente sem resposta.",
    highlight: "Atendimento que nunca dorme",
  },
  {
    id: "custom",
    number: "06.",
    title: "Projetos Sob Medida",
    description:
      "Portais, sistemas de agendamento, dashboards e integrações. Se o seu negócio precisa de algo único, criamos do zero com a mesma exigência de qualidade.",
    highlight: "Soluções sem limites de template",
  },
];
