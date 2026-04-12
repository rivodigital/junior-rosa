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
    image: "/images/rafael.jpg",
    metric: "70% VENDIDO NO LANÇAMENTO",
  },
  {
    id: "t2",
    quote:
      "O Junior não é só um fornecedor — é alguém que pensa junto. Em quase 10 anos trabalhando com ele, toda vez que achei que já estava bom, ele trouxe uma inovação que levou o negócio pra outro nível. Não conheço ninguém que entregue com esse nível de comprometimento.",
    name: "Antônio Gattis Filho",
    role: "Proprietário, Real Hortifruti e Frutaria Espinheiros",
    image: "/images/antonio.jpg",
    metric: "PARCEIRO HÁ QUASE 10 ANOS",
  },
  {
    id: "t3",
    quote:
      "Precisávamos de algo que fosse além de um site. O Junior entregou uma plataforma completa com agenda, devocional e ferramentas que facilitam o dia a dia da igreja inteira. A comunidade abraçou desde o primeiro dia.",
    name: "Diego Boeira",
    role: "Pastor, Igreja A3",
    image: "/images/diego.jpg",
    metric: "TECNOLOGIA QUE CONECTA PESSOAS",
  },
];
