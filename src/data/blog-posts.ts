export type BlogPost = {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    tag: "Conversão",
    title: "Por que seu site bonito não vende — e o que fazer sobre isso.",
    excerpt:
      "Design sem estratégia é só estética. Entenda os 5 erros que estão custando vendas todos os dias.",
    author: "Junior Rosa",
    readTime: "5 min",
    image: "/images/junior_05.jpg",
  },
  {
    id: "b2",
    tag: "Negócios",
    title: "Quanto custa um site profissional em 2026? O guia completo.",
    excerpt:
      "Valores reais, o que está incluso, e por que o barato sai caro. Tudo que empresários precisam saber antes de contratar.",
    author: "Junior Rosa",
    readTime: "8 min",
    image: "/images/junior_03.jpg",
  },
  {
    id: "b3",
    tag: "Estratégia",
    title: "Template vs site sob medida: qual gera mais resultado?",
    excerpt:
      "Comparamos performance, conversão e percepção de marca. Os dados vão te surpreender.",
    author: "Junior Rosa",
    readTime: "4 min",
    image: "/images/junior_04.jpg",
  },
];
