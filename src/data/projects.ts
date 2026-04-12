export type Project = {
  id: string;
  name: string;
  category: string;
  tags: string[];
  image: string;
  result?: string;
  gallery?: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "zr3-um-novo-jeito-de-morar",
    name: "Residencial Dualité",
    category: "ZR3 Empreendimentos",
    tags: ["LANDING PAGE", "BRANDING", "TRÁFEGO"],
    image: "/images/Projetos/ZR3 Dualité/dualite_01.jpg",
    result: "70% VENDAS NO LANÇAMENTO",
    gallery: [
      "/images/Projetos/ZR3 Dualité/dualite_07.jpg",
      "/images/Projetos/ZR3 Dualité/dualite_01.jpg",
      "/images/Projetos/ZR3 Dualité/dualite_02.jpg",
      "/images/Projetos/ZR3 Dualité/dualite_03.jpg",
      "/images/Projetos/ZR3 Dualité/dualite_04.jpg",
      "/images/Projetos/ZR3 Dualité/dualite_05.jpg",
      "/images/Projetos/ZR3 Dualité/dualite_06.jpg",
    ],
  },
  {
    id: "real-hortifruti",
    name: "Real Hortifruti",
    category: "Branding & Marketing",
    tags: ["BRANDING", "TRÁFEGO PAGO", "CONSULTORIA"],
    image: "/images/Projetos/Real/real_01.jpg",
    result: "Top hortifruti da cidade em 3 meses",
    gallery: [
      "/images/Projetos/Real/real_01.jpg",
      "/images/Projetos/Real/real_02.jpg",
      "/images/Projetos/Real/real_03.jpg",
      "/images/Projetos/Real/real_04.jpg",
      "/images/Projetos/Real/real_05.jpg",
    ],
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
