export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  metric?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Foi a primeira vez que entregamos todo o digital de um lançamento na mão do Junior — branding, landing pages e tráfego — e o resultado superou qualquer expectativa. Um dos lançamentos de maior sucesso que já tivemos.",
    name: "Rafael Knabben",
    role: "Diretor, ZR3 Empreendimentos",
    image: "/images/testimonial-1.webp",
    metric: "Lançamento sold out",
  },
  {
    id: "t2",
    quote:
      "Contratamos 4 agências antes. Nenhuma entregou nem perto do que a RIVO fez. O nível de detalhe e a velocidade de entrega são de outro patamar.",
    name: "Ana Costa",
    role: "Diretora de Marketing, Studio Aura",
    image: "/images/testimonial-2.webp",
    metric: "5a agência — a definitiva",
  },
  {
    id: "t3",
    quote:
      "A landing page que o Junior criou converteu 12% no primeiro mês. Nosso custo por lead caiu pela metade. Retorno no investimento em 3 semanas.",
    name: "Marcos Oliveira",
    role: "Founder, Grow Digital",
    image: "/images/testimonial-3.webp",
    metric: "ROI em 21 dias",
  },
];
