import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Página não encontrada — Junior Rosa",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex items-center justify-center min-h-[80vh] bg-brand-black px-6">
        <div className="max-w-[560px] w-full text-center">
          <p className="text-[12px] uppercase tracking-[0.3em] text-brand-muted mb-6">
            Erro 404
          </p>
          <h1 className="text-[48px] md:text-[72px] font-semibold tracking-tight text-brand-white leading-[1.05] mb-6">
            Essa página{" "}
            <span className="text-brand-white/55 font-light italic">
              não existe
            </span>
            .
          </h1>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-10">
            O link pode ter mudado, sido removido ou nunca ter existido. Volte
            para a home e encontre o que procurava.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-brand-white text-brand-white px-8 py-4 min-h-[52px] rounded-full font-bold text-[14px] uppercase tracking-[0.05em] hover:bg-brand-white hover:text-brand-black transition-all duration-300"
          >
            Voltar para a home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
