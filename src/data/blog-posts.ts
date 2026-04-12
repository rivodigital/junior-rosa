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
      "5 erros que transformam seu site num folheto digital. O terceiro é o mais comum.",
    author: "Junior Rosa",
    readTime: "5 min",
    image: "/images/junior_05.jpg",
  },
  {
    id: "b2",
    tag: "Negócios",
    title: "Quanto custa um site profissional em 2026? O guia completo.",
    excerpt:
      "De R$2k a R$50k — o que muda em cada faixa e por que o barato custa caro.",
    author: "Junior Rosa",
    readTime: "8 min",
    image: "/images/junior_03.jpg",
  },
  {
    id: "b3",
    tag: "Estratégia",
    title: "Template vs site sob medida: qual gera mais resultado?",
    excerpt:
      "Comparamos conversão, performance e percepção de marca. O resultado surpreende.",
    author: "Junior Rosa",
    readTime: "4 min",
    image: "/images/junior_04.jpg",
  },
];
