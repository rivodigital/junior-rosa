export type Project = {
  id: string;
  name: string;
  category: string;
  tags: string[];
  image: string;
  result?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "zr3-um-novo-jeito-de-morar",
    name: "Um Novo Jeito de Morar",
    category: "Campanha de Lançamento",
    tags: ["Landing Page", "Branding", "Tráfego"],
    image: "/images/zr3-um-novo-jeito-de-morar.jpg",
    result: "ZR3 Empreendimentos",
  },
  {
    id: "beta",
    name: "Elegance Store",
    category: "E-commerce",
    tags: ["E-commerce", "Branding"],
    image: "/images/junior_02.jpg",
    result: "R$480k em 90 dias",
  },
  {
    id: "gamma",
    name: "Arquitetura Viva",
    category: "Site Institucional",
    tags: ["Site Institucional", "UX Design"],
    image: "/images/junior_03.jpg",
    result: "3x mais leads",
  },
  {
    id: "delta",
    name: "Cultura Café",
    category: "Branding",
    tags: ["Branding", "Web Design"],
    image: "/images/junior_04.jpg",
    result: "Marca reconhecida em 3 estados",
  },
];
