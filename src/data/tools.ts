export type ToolGroup = {
  category: string;
  items: string[];
};

export const TOOLS: ToolGroup[] = [
  {
    category: "DESIGN & IDENTIDADE",
    items: [
      "Interfaces no Figma com fidelidade pixel-perfect",
      "Identidade visual completa no Illustrator e Photoshop",
      "Do conceito ao arquivo final — sem terceiros",
    ],
  },
  {
    category: "DESENVOLVIMENTO WEB",
    items: [
      "Sites rápidos em Next.js, React e Tailwind",
      "Também trabalho com Framer, Webflow e WordPress",
      "Código limpo, responsivo e otimizado pra SEO",
    ],
  },
  {
    category: "ESTRATÉGIA & POSICIONAMENTO",
    items: [
      "Estratégia de marca e posicionamento",
      "Arquitetura de informação focada em conversão",
      "Copywriting orientado a resultado",
    ],
  },
  {
    category: "IA APLICADA",
    items: [
      "Agentes de IA para atendimento via WhatsApp",
      "IA no desenvolvimento e criação de conteúdo",
      "Automação de processos repetitivos",
    ],
  },
];
