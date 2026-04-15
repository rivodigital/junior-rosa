import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const SITE_URL = SITE_CONFIG.url;
const OG_IMAGE = "/images/rivo_seo.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Junior Rosa | Criação de Sites, Landing Pages e E-commerces — RIVO Stúdio",
  description:
    "Crio sites, landing pages e e-commerces de alta conversão para empresas que querem dominar o digital. +50 projetos entregues, +R$2MM em vendas geradas. Joinville, SC.",
  keywords: [
    "criação de sites",
    "landing page",
    "e-commerce",
    "web design",
    "site institucional",
    "branding",
    "criação de site Joinville",
    "designer de sites",
    "site para empresas",
    "loja virtual",
    "RIVO Stúdio",
    "Junior Rosa",
  ],
  authors: [{ name: "Junior Rosa", url: SITE_URL }],
  creator: "Junior Rosa",
  publisher: "RIVO Stúdio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/icon_escuro.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Junior Rosa | Sites e Landing Pages que Geram Resultado",
    description:
      "Design estratégico para empresas que querem converter mais. +50 projetos, 3 países, +R$2MM em vendas geradas.",
    url: SITE_URL,
    type: "website",
    locale: "pt_BR",
    siteName: "RIVO Stúdio",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Junior Rosa — Criação de Sites e Landing Pages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junior Rosa | Sites e Landing Pages que Geram Resultado",
    description:
      "Design estratégico para empresas que querem converter mais.",
    images: [OG_IMAGE],
    creator: "@ojuniorosa",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Junior Rosa",
  url: SITE_URL,
  image: `${SITE_URL}/images/junior_01.jpg`,
  jobTitle: "Web Designer e Desenvolvedor",
  description:
    "Criação de sites, landing pages e e-commerces de alta conversão. +18 anos no digital, +50 projetos entregues.",
  worksFor: {
    "@type": "Organization",
    name: "RIVO Stúdio",
    url: SITE_URL,
  },
  sameAs: [SITE_CONFIG.socials.instagram],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}#business`,
  name: "RIVO Stúdio",
  image: `${SITE_URL}/images/logo_clara.png`,
  url: SITE_URL,
  email: SITE_CONFIG.email,
  description:
    "Estúdio de design e desenvolvimento web especializado em sites institucionais, landing pages e e-commerces de alta conversão.",
  founder: {
    "@type": "Person",
    name: "Junior Rosa",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Joinville",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  priceRange: "$$",
  sameAs: [SITE_CONFIG.socials.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} h-full antialiased dark`}>
      <head>
        <meta name="theme-color" content="#0A0A0A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-black text-brand-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
