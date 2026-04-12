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
      "Página única com um objetivo: converter. Ideal para lançamentos, captação de leads e campanhas de tráfego pago.",
    highlight: "MÉDIA DE +280% EM CONVERSÃO",
  },
  {
    id: "sites",
    number: "02.",
    title: "Sites Institucionais",
    description:
      "O site que faz o prospect confiar na sua empresa antes da primeira reunião. Posicionamento, credibilidade e geração de demanda.",
    highlight: "SEU MELHOR VENDEDOR — 24H NO AR",
  },
  {
    id: "ecommerce",
    number: "03.",
    title: "E-commerces",
    description:
      "Loja virtual com fluxo de compra pensado pra reduzir abandono de carrinho e aumentar ticket médio. Design que vende, não que enfeita.",
    highlight: "CHECKOUT OTIMIZADO PARA CONVERSÃO",
  },
  {
    id: "branding",
    number: "04.",
    title: "Branding",
    description:
      "Identidade visual que posiciona sua empresa acima da concorrência. Logo, paleta, tipografia e linguagem — tudo alinhado à estratégia.",
    highlight: "SUA MARCA COMO ATIVO DE NEGÓCIO",
  },
  {
    id: "ai-whatsapp",
    number: "05.",
    title: "Agentes de IA para WhatsApp",
    description:
      "Seu WhatsApp respondendo sozinho — com inteligência. Qualifica leads, agenda reuniões, entende áudios e imagens. Nenhum cliente fica sem resposta.",
    highlight: "ATENDIMENTO 24/7 NO PILOTO AUTOMÁTICO",
  },
  {
    id: "custom",
    number: "06.",
    title: "Projetos Sob Medida",
    description:
      "Portais, dashboards, sistemas de agendamento ou qualquer solução que seu negócio precise. Se não existe template, a gente cria do zero.",
    highlight: "SEM LIMITES DE TEMPLATE",
  },
];
