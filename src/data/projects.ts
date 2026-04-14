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
    image: "/images/Projetos/zr3-dualite/dualite_01.jpg",
    result: "70% VENDAS NO LANÇAMENTO",
    gallery: [
      "/images/Projetos/zr3-dualite/dualite_07.jpg",
      "/images/Projetos/zr3-dualite/dualite_01.jpg",
      "/images/Projetos/zr3-dualite/dualite_02.jpg",
      "/images/Projetos/zr3-dualite/dualite_03.jpg",
      "/images/Projetos/zr3-dualite/dualite_04.jpg",
      "/images/Projetos/zr3-dualite/dualite_05.jpg",
      "/images/Projetos/zr3-dualite/dualite_06.jpg",
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
    id: "zr3-novo-jeito-de-morar",
    name: "Um Novo Jeito de Morar",
    category: "ZR3 Empreendimentos",
    tags: ["CAMPANHA", "BRANDING", "LANDING PAGE", "INTEGRAÇÕES"],
    image: "/images/Projetos/Umnovojeitodemorar/um_novo_01.jpg",
    result: "Projeto em desenvolvimento",
    gallery: [
      "/images/Projetos/Umnovojeitodemorar/um_novo_01.jpg",
      "/images/Projetos/Umnovojeitodemorar/um_novo_02.jpg",
      "/images/Projetos/Umnovojeitodemorar/um_novo_03.jpg",
    ],
  },
  {
    id: "escalla",
    name: "Escalla Imóveis",
    category: "Desenvolvimento Web",
    tags: ["SITE", "SISTEMA", "INTEGRAÇÃO"],
    image: "/images/Projetos/Escalla/escalla_01.jpg",
    result: "+150% na captação de leads",
    gallery: [
      "/images/Projetos/Escalla/escalla_01.jpg",
      "/images/Projetos/Escalla/escalla_02.jpg",
      "/images/Projetos/Escalla/escalla_03.jpg",
    ],
  },
];
