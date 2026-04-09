export type ToolGroup = {
  category: string;
  items: string[];
};

export const TOOLS: ToolGroup[] = [
  {
    category: "Design & Identidade",
    items: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    category: "Desenvolvimento Web",
    items: ["Framer", "Webflow", "WordPress", "Next.js", "React", "Tailwind CSS", "HTML & CSS"],
  },
  {
    category: "Estratégia & Negócios",
    items: ["Estratégia de marca", "Posicionamento", "Arquitetura de informação"],
  },
  {
    category: "IA Aplicada",
    items: ["IA no desenvolvimento", "IA na criação de conteúdo", "Automação de processos"],
  },
];
