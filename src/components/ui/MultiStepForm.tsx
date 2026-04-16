"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

const PROJECT_TYPES = [
  "Landing Page",
  "Site Institucional",
  "E-commerce",
  "Branding",
  "Projeto Personalizado",
  "Ainda não sei"
];

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: "",
    objective: "",
    deadline: "",
    details: "",
    name: "",
    email: "",
    whatsapp: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Falha ao enviar.");
      }
      setSubmitted(true);
      setStep(1);
      setFormData({
        type: "", objective: "", deadline: "", details: "", name: "", email: "", whatsapp: "", website: ""
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao enviar.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative bg-brand-gray p-5 md:p-12 rounded-xl flex flex-col min-h-[500px]">
      {submitted && (
        <div className="absolute inset-0 bg-brand-gray/95 z-10 flex items-center justify-center rounded-xl">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-brand-white/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-white mb-2">Mensagem enviada!</h3>
            <p className="text-brand-muted">Entrarei em contato em breve.</p>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-12">
        <div className="flex gap-4">
          {[1, 2, 3].map(i => (
            <span key={i} className={`w-10 md:w-16 h-1 rounded-full ${step >= i ? 'bg-brand-white' : 'bg-brand-white/20'}`} />
          ))}
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">Step 0{step} / 03</span>
      </div>

      <form onSubmit={step === 3 ? submitForm : (e) => { e.preventDefault(); nextStep(); }} className="flex-grow flex flex-col">
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
          <label>
            Não preencha este campo se for humano:
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </label>
        </div>
        {step === 1 && (
          <div className="flex-grow space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <h3 className="text-xl md:text-3xl font-bold text-brand-white mb-6">Qual o tipo do seu projeto?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {PROJECT_TYPES.map(type => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({ ...formData, type })}
                  className={`flex items-center gap-4 p-4 md:p-6 min-h-[56px] border rounded-xl cursor-pointer transition-all text-left ${formData.type === type ? 'border-brand-white bg-white/5' : 'border-white/10 hover:bg-white/5'}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${formData.type === type ? 'border-brand-white' : 'border-white/20'}`}>
                    {formData.type === type && <div className="w-2.5 h-2.5 rounded-full bg-brand-white" />}
                  </div>
                  <span className="font-bold text-brand-white text-sm md:text-base">{type}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex-grow space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <h3 className="text-xl md:text-3xl font-bold text-brand-white mb-6">Detalhes do projeto</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-brand-muted mb-2">Objetivo principal</label>
                <textarea 
                  required
                  rows={2}
                  value={formData.objective}
                  onChange={e => setFormData({...formData, objective: e.target.value})}
                  className="w-full bg-brand-dark border border-white/10 rounded-xl p-4 text-base text-brand-white focus:outline-none focus:border-brand-white transition-colors resize-none"
                  placeholder="Ex: Aumentar vendas, mudar posicionamento..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-muted mb-2">Prazo ideal</label>
                <select 
                  required
                  value={formData.deadline}
                  onChange={e => setFormData({...formData, deadline: e.target.value})}
                  className="w-full bg-brand-dark border border-white/10 rounded-xl p-4 text-base text-brand-white focus:outline-none focus:border-brand-white transition-colors"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="urgente">O quanto antes (Até 1 mês)</option>
                  <option value="normal">Em até 2 meses</option>
                  <option value="flexivel">Flexível (3+ meses)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-muted mb-2">Detalhes extras (Opcional)</label>
                <textarea 
                  rows={2}
                  value={formData.details}
                  onChange={e => setFormData({...formData, details: e.target.value})}
                  className="w-full bg-brand-dark border border-white/10 rounded-xl p-4 text-base text-brand-white focus:outline-none focus:border-brand-white transition-colors resize-none"
                  placeholder="Alguma restrição ou ideia específica?"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex-grow space-y-6 animate-in fade-in zoom-in-95 duration-300">
             <h3 className="text-xl md:text-3xl font-bold text-brand-white mb-6">Para onde envio a proposta?</h3>
             <div className="space-y-4">
               <div>
                  <label className="block text-sm font-bold text-brand-muted mb-2">Seu Nome</label>
                  <input 
                    type="text" required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 rounded-xl p-4 text-base text-brand-white focus:outline-none focus:border-brand-white transition-colors"
                  />
               </div>
               <div>
                  <label className="block text-sm font-bold text-brand-muted mb-2">E-mail Corporativo</label>
                  <input 
                    type="email" required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 rounded-xl p-4 text-base text-brand-white focus:outline-none focus:border-brand-white transition-colors"
                  />
               </div>
               <div>
                  <label className="block text-sm font-bold text-brand-muted mb-2">WhatsApp</label>
                  <input 
                    type="tel" required
                    value={formData.whatsapp}
                    onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 rounded-xl p-4 text-base text-brand-white focus:outline-none focus:border-brand-white transition-colors"
                  />
               </div>
             </div>
          </div>
        )}

        {error && step === 3 && (
          <p className="mt-4 text-sm text-red-400">{error}</p>
        )}

        <div className="pt-8 mt-auto border-t border-white/10 flex justify-between items-center">
          {step > 1 ? (
            <button type="button" onClick={prevStep} disabled={sending} className="text-brand-muted hover:text-brand-white font-medium text-sm transition-colors min-h-[44px] flex items-center disabled:opacity-50">
              Voltar
            </button>
          ) : <div/>}

          <Button type="submit" variant="outline" className="px-8 py-3 disabled:opacity-60" disabled={sending}>
            {step === 3 ? (sending ? "Enviando..." : "Enviar Solicitação") : "Próximo Passo"}
          </Button>
        </div>
      </form>
    </div>
  );
}
