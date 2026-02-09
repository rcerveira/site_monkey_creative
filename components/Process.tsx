import React from 'react';
import { useCursor } from '../hooks';
import { processSteps } from '../data';

const Process: React.FC = () => {
  const { textCursor, defaultCursor } = useCursor();

  return (
    <>
      <section className="relative bg-primary border-y-4 border-black z-20 overflow-hidden whitespace-nowrap py-6 select-none shadow-hard">
        <div className="flex animate-marquee-reverse">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-5xl md:text-7xl font-display uppercase text-black font-bold mx-8">
                Diagnóstico • Estratégia • Código • Performance • Dados • Escala •
              </span>
              <span className="text-5xl md:text-7xl font-display uppercase text-black font-bold text-stroke-black text-transparent mx-8">
                Diagnóstico • Estratégia • Código • Performance • Dados • Escala •
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-24 bg-black dark:bg-background-dark relative overflow-hidden z-10 border-y-4 border-primary"
        id="process"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 border-[20px] border-white rounded-full"></div>
          <div className="absolute -left-20 bottom-0 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-start md:items-center text-left md:text-center mb-20">
            <h2 className="font-display text-5xl md:text-7xl uppercase text-white mb-4">
              PROCESSO <span className="text-primary">DE TRABALHO</span>
            </h2>
            <div className="h-1 w-full max-w-[200px] bg-white mb-6"></div>
            <p className="text-gray-400 max-w-2xl font-medium text-lg">
              De ideias caóticas a diamantes lapidados. Nosso fluxo de trabalho é
              projetado para quebrar fronteiras e construir impérios digitais.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/20 transform -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-surface-dark md:bg-transparent p-6 md:p-0 border border-white/10 md:border-none rounded-xl md:rounded-none transition-colors ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}
                >
                  <div className="flex flex-col items-start md:items-center">
                    <div className="relative mb-6">
                      <div
                        className={`w-20 h-20 ${step.color === 'primary' ? 'bg-primary border-black' : 'bg-black border-primary'} border-4 flex items-center justify-center rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] transition-all z-20 relative`}
                        onMouseEnter={() => textCursor(step.num)}
                        onMouseLeave={defaultCursor}
                      >
                        <span className={`font-display text-4xl ${step.color === 'primary' ? 'text-black' : 'text-primary'}`}>
                          {step.num}
                        </span>
                      </div>
                      <div className="md:hidden absolute left-10 top-20 w-1 h-full bg-white/20 z-0"></div>
                    </div>
                    <div className="text-left md:text-center pt-2 md:pt-6 md:px-4">
                      <h3 className="font-display text-3xl uppercase text-white mb-2 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;