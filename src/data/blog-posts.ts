export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  quote?: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
  intro: string;
  sections: BlogSection[];
  conclusion: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    slug: "por-que-seu-site-bonito-nao-vende",
    tag: "Conversão",
    title: "Por que seu site bonito não vende — e o que fazer sobre isso.",
    excerpt:
      "5 erros que transformam seu site num folheto digital. O terceiro é o mais comum.",
    author: "Junior Rosa",
    readTime: "5 min",
    image: "/images/Posts/Por-que-seu-site-bonito-não-vende.jpg",
    intro:
      "Todo mundo já viu aquele site lindo, com animações elegantes, tipografia caprichada e fotos de banco de imagens premium. Só que ele não vende. Não gera lead. Não fecha contrato. Nesse artigo eu explico por quê — e o que precisa mudar para o seu site deixar de ser um portfólio digital e virar um ativo de vendas.",
    sections: [
      {
        heading: "1. O site fala sobre você, não sobre o cliente",
        paragraphs: [
          'A maioria dos sites começa com frases do tipo "Somos uma empresa que desde 2012..." ou "Nossa missão é entregar excelência". O cliente não está interessado na sua história na primeira dobra. Ele quer saber o que você resolve para ele, em quanto tempo e quanto custa.',
          "A regra é simples: fale do problema do cliente antes de falar de você. O 'sobre nós' existe, mas não deveria ser a primeira coisa que o visitante lê.",
        ],
      },
      {
        heading: "2. Zero hierarquia visual",
        paragraphs: [
          "Quando tudo é destaque, nada é destaque. Sites que querem mostrar tudo de uma vez — 10 botões, 6 headlines, 4 fotos em carrossel — confundem o cliente. A decisão dele vira paralisia.",
          "Um bom site tem uma ação principal em cada seção. O olho sabe para onde ir. O próximo clique é óbvio.",
        ],
      },
      {
        heading: "3. Falta prova social real",
        paragraphs: [
          "Esse é o erro mais comum. Depoimentos genéricos do tipo 'ótimo atendimento, recomendo!' não vendem nada. Ninguém compra baseado nisso.",
          "Prova social que converte tem nome, cargo, empresa, foto e — principalmente — resultado mensurável. 'A campanha que fizemos com o Junior vendeu 70% das unidades no lançamento' vale mais que 20 estrelinhas do Google.",
        ],
      },
      {
        heading: "4. CTA fraco ou invisível",
        paragraphs: [
          'Botões "Saiba mais", "Entre em contato" e "Fale conosco" são convites para o cliente não fazer nada. São verbos genéricos que não prometem nada.',
          'Troque por CTAs de ação concreta: "Quero uma proposta", "Receber diagnóstico grátis", "Agendar conversa de 15 minutos". Quanto mais específico o próximo passo, maior a conversão.',
        ],
      },
      {
        heading: "5. Site lento é site morto",
        paragraphs: [
          "A cada segundo a mais de carregamento, você perde cerca de 10% dos visitantes. Um site que demora 5 segundos para abrir no celular já perdeu metade dos leads antes mesmo de mostrar o primeiro conteúdo.",
          "Otimização de performance não é detalhe técnico — é fator de conversão direto.",
        ],
      },
    ],
    conclusion:
      "Design bonito sem estratégia é estética cara. O que transforma um site em ferramenta de vendas é a combinação de posicionamento claro, hierarquia visual, prova social real, CTAs fortes e performance técnica. Se o seu site tem dois ou mais desses problemas, ele não está trabalhando para você — está trabalhando contra você.",
  },
  {
    id: "b2",
    slug: "quanto-custa-um-site-profissional-em-2026",
    tag: "Negócios",
    title: "Quanto custa um site profissional em 2026? O guia completo.",
    excerpt:
      "De R$2k a R$50k — o que muda em cada faixa e por que o barato custa caro.",
    author: "Junior Rosa",
    readTime: "8 min",
    image: "/images/Posts/Quanto-custa-um-site-profissional-em-2026.jpg",
    intro:
      "Essa é a pergunta que mais recebo. E a resposta honesta é: depende. Mas depende de fatores concretos, não de chute. Nesse guia eu abro as faixas de preço, o que está incluso em cada uma e onde vale — ou não — economizar.",
    sections: [
      {
        heading: "Faixa 1: R$500 a R$2.000 — o site freelancer iniciante",
        paragraphs: [
          "Geralmente é um template WordPress ou Wix adaptado, com conteúdo que o próprio cliente envia e poucas customizações. O designer cobra barato porque está aprendendo, e o trabalho reflete isso: identidade visual fraca, textos genéricos, zero estratégia de conversão.",
          "Pode servir para quem está testando uma ideia com orçamento zero. Não serve para empresa que quer se posicionar.",
        ],
      },
      {
        heading: "Faixa 2: R$3.000 a R$8.000 — o profissional solo",
        paragraphs: [
          "Aqui você contrata alguém com experiência, que entrega um site customizado, responsivo e com boa performance. Ainda é trabalho de uma pessoa só, então normalmente não inclui copywriting profissional, branding aprofundado ou estratégia de tráfego.",
          "É a faixa ideal para pequenos negócios que precisam de presença digital profissional sem os adicionais de agência.",
        ],
      },
      {
        heading: "Faixa 3: R$10.000 a R$25.000 — o projeto estratégico",
        paragraphs: [
          "Essa é a faixa onde eu trabalho na maioria dos projetos. Aqui entra estratégia antes do design: briefing profundo, análise de concorrência, definição de posicionamento, copywriting voltado para conversão, design sob medida e desenvolvimento técnico otimizado.",
          "O entregável não é 'um site'. É um ativo digital pensado para gerar resultado específico — seja leads, vendas diretas ou autoridade.",
        ],
      },
      {
        heading: "Faixa 4: R$30.000 a R$50.000+ — o projeto premium",
        paragraphs: [
          "Projetos com integrações complexas, múltiplas páginas, sistemas customizados, branding completo do zero, produção fotográfica e vídeo, e muitas vezes acompanhamento pós-lançamento com otimizações baseadas em dados.",
          "É o padrão para empresas médias/grandes ou lançamentos de alto ticket. O investimento se paga na escala.",
        ],
      },
      {
        heading: "Por que o barato custa caro",
        paragraphs: [
          "Já recebi dezenas de clientes que tinham contratado um site de R$1.500, perderam 3 meses esperando entrega, ficaram com um produto ruim e precisaram refazer tudo comigo. No fim, gastaram mais do que gastariam se tivessem contratado direito na primeira vez.",
          "Site barato sem estratégia não é economia — é custo adiado.",
        ],
      },
    ],
    conclusion:
      "A pergunta certa não é 'quanto custa um site' — é 'qual resultado eu preciso gerar e quanto vale esse resultado'. Se o seu site novo fecha 3 contratos a mais por mês, o ROI de um projeto de R$20k pode aparecer em 60 dias. Pense em retorno, não em custo.",
  },
  {
    id: "b3",
    slug: "template-vs-site-sob-medida",
    tag: "Estratégia",
    title: "Template vs site sob medida: qual gera mais resultado?",
    excerpt:
      "Comparamos conversão, performance e percepção de marca. O resultado surpreende.",
    author: "Junior Rosa",
    readTime: "4 min",
    image: "/images/Posts/Template-vs-site-sob-medida.jpg",
    intro:
      "Template ou sob medida? É uma das decisões mais comuns no início de um projeto digital. Vou te mostrar, sem romantização, onde cada um brilha e onde decepciona.",
    sections: [
      {
        heading: "Templates: velocidade e previsibilidade",
        paragraphs: [
          "A vantagem do template é clara: você economiza tempo e dinheiro. Em poucos dias você tem um site no ar, com um design razoável, responsivo e funcional.",
          "Funciona bem para validar uma ideia, lançar um MVP ou publicar conteúdo institucional básico. Se o objetivo é 'estar online', template resolve.",
        ],
      },
      {
        heading: "Onde o template falha",
        paragraphs: [
          "Templates são genéricos por definição. Isso significa que seu posicionamento, diferenciais e tom de voz precisam ser espremidos dentro de uma estrutura pensada para milhares de negócios diferentes.",
          "O resultado: seu site parece com o do seu concorrente. A conversão cai porque a mensagem não é única. A marca não se destaca.",
        ],
      },
      {
        heading: "Site sob medida: identidade e conversão",
        paragraphs: [
          "Um site sob medida parte da estratégia do seu negócio — quem é o cliente ideal, qual é a objeção principal, qual é a narrativa que vende. A partir disso, design e código são construídos para converter esse cliente específico.",
          "A diferença aparece em cada pixel: hierarquia pensada, copy voltada para ação, microinterações que reforçam confiança, performance otimizada. Tudo trabalhando junto.",
        ],
      },
      {
        heading: "Os números",
        paragraphs: [
          "Em projetos que acompanho, sites sob medida costumam converter entre 2x e 4x mais que versões template do mesmo negócio. Em landing pages de tráfego pago, a diferença pode chegar a 10x.",
          "Isso porque em tráfego pago cada clique custa caro. A eficiência da página é o que separa um funil que escala de um funil que quebra.",
        ],
      },
    ],
    conclusion:
      "Template é ferramenta. Sob medida é investimento. Para quem quer presença, template resolve. Para quem quer resultado, o sob medida é o caminho. A pergunta certa é: o seu site é custo ou ativo?",
  },
];
