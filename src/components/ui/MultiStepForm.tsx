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
  });

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted Successfully:", formData);
    alert("Mensagem enviada com sucesso! Entrarei em contato em breve.");
    setStep(1);
    setFormData({
      type: "", objective: "", deadline: "", details: "", name: "", email: "", whatsapp: ""
    });
  };

  return (
    <div className="bg-brand-gray p-8 md:p-12 rounded-xl flex flex-col min-h-[500px]">
      <div className="flex justify-between items-center mb-12">
        <div className="flex gap-4">
          {[1, 2, 3].map(i => (
            <span key={i} className={`w-10 md:w-16 h-1 rounded-full ${step >= i ? 'bg-brand-white' : 'bg-brand-white/20'}`} />
          ))}
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">Step 0{step} / 03</span>
      </div>

      <form onSubmit={step === 3 ? submitForm : (e) => { e.preventDefault(); nextStep(); }} className="flex-grow flex flex-col">
        {step === 1 && (
          <div className="flex-grow space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-white mb-6">Qual o tipo do seu projeto?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECT_TYPES.map(type => (
                <label key={type} className={`flex items-center gap-4 p-5 md:p-6 border rounded-xl cursor-pointer transition-all ${formData.type === type ? 'border-brand-white bg-white/5' : 'border-white/10 hover:bg-white/5'}`}>
                  <input
                    type="radio"
                    name="project_type"
                    value={type}
                    checked={formData.type === type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-4 h-4 accent-brand-white bg-transparent border-white/20"
                    required
                  />
                  <span className="font-bold text-brand-white text-sm md:text-base">{type}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex-grow space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-white mb-6">Detalhes do projeto</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-brand-muted mb-2">Objetivo principal</label>
                <textarea 
                  required
                  rows={2}
                  value={formData.objective}
                  onChange={e => setFormData({...formData, objective: e.target.value})}
                  className="w-full bg-brand-dark border border-white/10 rounded-xl p-4 text-brand-white focus:outline-none focus:border-brand-white transition-colors resize-none"
                  placeholder="Ex: Aumentar vendas, mudar posicionamento..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-muted mb-2">Prazo ideal</label>
                <select 
                  required
                  value={formData.deadline}
                  onChange={e => setFormData({...formData, deadline: e.target.value})}
                  className="w-full bg-brand-dark border border-white/10 rounded-xl p-4 text-brand-white focus:outline-none focus:border-brand-white transition-colors"
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
                  className="w-full bg-brand-dark border border-white/10 rounded-xl p-4 text-brand-white focus:outline-none focus:border-brand-white transition-colors resize-none"
                  placeholder="Alguma restrição ou ideia específica?"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex-grow space-y-6 animate-in fade-in zoom-in-95 duration-300">
             <h3 className="text-2xl md:text-3xl font-bold text-brand-white mb-6">Para onde envio a proposta?</h3>
             <div className="space-y-4">
               <div>
                  <label className="block text-sm font-bold text-brand-muted mb-2">Seu Nome</label>
                  <input 
                    type="text" required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 rounded-xl p-4 text-brand-white focus:outline-none focus:border-brand-white transition-colors"
                  />
               </div>
               <div>
                  <label className="block text-sm font-bold text-brand-muted mb-2">E-mail Corporativo</label>
                  <input 
                    type="email" required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 rounded-xl p-4 text-brand-white focus:outline-none focus:border-brand-white transition-colors"
                  />
               </div>
               <div>
                  <label className="block text-sm font-bold text-brand-muted mb-2">WhatsApp</label>
                  <input 
                    type="tel" required
                    value={formData.whatsapp}
                    onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full bg-brand-dark border border-white/10 rounded-xl p-4 text-brand-white focus:outline-none focus:border-brand-white transition-colors"
                  />
               </div>
             </div>
          </div>
        )}

        <div className="pt-8 mt-auto border-t border-white/10 flex justify-between items-center">
          {step > 1 ? (
            <button type="button" onClick={prevStep} className="text-brand-muted hover:text-brand-white font-medium text-sm transition-colors">
              Voltar
            </button>
          ) : <div/>}

          <Button type="submit" variant="outline" className="px-8 py-3">
            {step === 3 ? "Enviar Solicitação" : "Próximo Passo"}
          </Button>
        </div>
      </form>
    </div>
  );
}
