"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-black px-6">
      <div className="max-w-[560px] w-full text-center">
        <p className="text-[12px] uppercase tracking-[0.3em] text-brand-muted mb-6">
          Algo deu errado
        </p>
        <h1 className="text-[40px] md:text-[60px] font-semibold tracking-tight text-brand-white leading-[1.05] mb-6">
          Ops, tivemos um{" "}
          <span className="text-brand-white/55 font-light italic">
            imprevisto
          </span>
          .
        </h1>
        <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-10">
          Já registramos o erro. Tente novamente em instantes ou volte para a
          home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center border border-brand-white text-brand-white px-8 py-4 min-h-[52px] rounded-full font-bold text-[14px] uppercase tracking-[0.05em] hover:bg-brand-white hover:text-brand-black transition-all duration-300 active:scale-95"
          >
            Tentar novamente
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center text-brand-muted px-6 py-4 min-h-[52px] font-medium text-[14px] uppercase tracking-[0.05em] hover:text-brand-white transition-colors duration-300"
          >
            Voltar para a home
          </Link>
        </div>
      </div>
    </main>
  );
}
