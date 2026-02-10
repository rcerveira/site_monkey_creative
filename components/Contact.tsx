import React, { useState } from 'react';
import { useCursor } from '../hooks';

const Contact: React.FC = () => {
  const { textCursor, defaultCursor } = useCursor();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset form after 3 seconds could go here if needed
    }, 1500);
  };

  return (
    <section className="py-24 bg-primary text-black z-10 relative" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-none">
              Pronto para <br /> Inovar?
            </h2>
            <p className="text-xl font-medium max-w-md">
              Conte-nos seu projeto e retornamos em até 24h. Transformamos sua visão em código de alta performance.
            </p>
            <div className="space-y-4 pt-8">
              <a href="mailto:ola@mnkcreative.com" className="flex items-center space-x-4 group w-fit">
                <div className="bg-black text-white p-3 rounded-none shadow-hard group-hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined">email</span>
                </div>
                <span className="text-lg font-bold group-hover:underline">ola@mnkcreative.com</span>
              </a>
              <a href="tel:+5549988639543" className="flex items-center space-x-4 group w-fit">
                <div className="bg-black text-white p-3 rounded-none shadow-hard group-hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined">phone</span>
                </div>
                <span className="text-lg font-bold group-hover:underline">+55 (49) 98863-9543</span>
              </a>
              <a 
                href="https://maps.google.com/?q=Chapecó,+SC" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group w-fit"
              >
                <div className="bg-black text-white p-3 rounded-none shadow-hard group-hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <span className="text-lg font-bold group-hover:underline">
                  Chapecó, SC
                </span>
              </a>
            </div>
          </div>

          <div className="bg-black p-8 md:p-12 shadow-2xl relative rounded-3xl overflow-hidden">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-white rounded-3xl pointer-events-none hidden md:block"></div>
            
            {formState === 'success' ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center text-white animate-slide-up">
                 <span className="material-symbols-outlined text-8xl text-primary mb-4">check_circle</span>
                 <h3 className="font-display text-4xl uppercase mb-2">Mensagem Enviada!</h3>
                 <p className="text-gray-400 max-w-xs">Recebemos seu projeto. Nossa equipe entrará em contato em breve.</p>
                 <button 
                   onClick={() => setFormState('idle')}
                   className="mt-8 text-sm font-bold uppercase underline hover:text-primary"
                 >
                   Enviar nova mensagem
                 </button>
              </div>
            ) : (
              <form action="#" className={`space-y-6 transition-opacity duration-300 ${formState === 'submitting' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-bold text-primary mb-2 uppercase"
                      htmlFor="name"
                    >
                      Nome
                    </label>
                    <input
                      required
                      className="w-full bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 border-0 border-b-2 border-gray-700 text-white focus:ring-0 focus:border-primary px-4 py-3 transition-colors placeholder-gray-600 rounded-t-lg appearance-none"
                      id="name"
                      placeholder="Seu Nome"
                      type="text"
                      onMouseEnter={() => textCursor('Digitar')}
                      onMouseLeave={defaultCursor}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-bold text-primary mb-2 uppercase"
                      htmlFor="email"
                    >
                      E-mail
                    </label>
                    <input
                      required
                      className="w-full bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 border-0 border-b-2 border-gray-700 text-white focus:ring-0 focus:border-primary px-4 py-3 transition-colors placeholder-gray-600 rounded-t-lg appearance-none"
                      id="email"
                      placeholder="seu@email.com"
                      type="email"
                      onMouseEnter={() => textCursor('Digitar')}
                      onMouseLeave={defaultCursor}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-bold text-primary mb-2 uppercase"
                    htmlFor="service"
                  >
                    Tipo de Projeto
                  </label>
                  <select
                    className="w-full bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 border-0 border-b-2 border-gray-700 text-white focus:ring-0 focus:border-primary px-4 py-3 transition-colors rounded-t-lg appearance-none"
                    id="service"
                    onMouseEnter={() => textCursor('Selecionar')}
                    onMouseLeave={defaultCursor}
                  >
                    <option>Website Institucional</option>
                    <option>Landing Page</option>
                    <option>Site One Page</option>
                    <option>Micro SaaS</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-bold text-primary mb-2 uppercase"
                    htmlFor="message"
                  >
                    Mensagem
                  </label>
                  <textarea
                    required
                    className="w-full bg-gray-900 hover:bg-gray-800 focus:bg-gray-800 border-0 border-b-2 border-gray-700 text-white focus:ring-0 focus:border-primary px-4 py-3 transition-colors placeholder-gray-600 rounded-t-lg resize-none"
                    id="message"
                    placeholder="Descreva seu desafio..."
                    rows={4}
                    onMouseEnter={() => textCursor('Digitar')}
                    onMouseLeave={defaultCursor}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-primary text-black font-display text-xl uppercase py-4 px-8 transition-all duration-300 mt-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={formState === 'submitting'}
                  onMouseEnter={() => textCursor(formState === 'submitting' ? '...' : 'Enviar')}
                  onMouseLeave={defaultCursor}
                >
                  {formState === 'submitting' ? (
                    <>
                      <span className="animate-spin mr-2 material-symbols-outlined">progress_activity</span>
                      Enviando...
                    </>
                  ) : 'Enviar Projeto'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;