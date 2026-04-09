import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
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
  authors: [{ name: "Junior Rosa" }],
  robots: "index, follow",
  icons: {
    icon: "/images/icon_escuro.png",
  },
  openGraph: {
    title: "Junior Rosa | Sites e Landing Pages que Geram Resultado",
    description:
      "Design estratégico para empresas que querem converter mais. +50 projetos, 3 países, +R$2MM em vendas geradas.",
    type: "website",
    locale: "pt_BR",
    siteName: "RIVO Stúdio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junior Rosa | Sites e Landing Pages que Geram Resultado",
    description:
      "Design estratégico para empresas que querem converter mais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} h-full antialiased dark`}>
      <head>
        <link rel="canonical" href="https://juniorrosa.design" />
      </head>
      <body className="min-h-full flex flex-col bg-brand-black text-brand-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
