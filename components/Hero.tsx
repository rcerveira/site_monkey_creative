import React, { useState } from 'react';
import { useCursor } from '../hooks';

const Hero: React.FC = () => {
  const { textCursor, bananaCursor, defaultCursor } = useCursor();
  const [isSlipping, setIsSlipping] = useState(false);

  const triggerEasterEgg = () => {
    if (isSlipping) return;
    setIsSlipping(true);

    // Play cartoon slip sound
    const audio = new Audio('https://www.myinstants.com/media/sounds/cartoon-slip-sound-effect.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Audio play failed', e));

    setTimeout(() => {
      setIsSlipping(false);
    }, 1000);
  };

  return (
    <section className={`relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-surface-light dark:bg-background-dark z-10 transition-transform ${isSlipping ? 'animate-slip' : ''}`}>
      <div className="absolute right-0 top-0 w-[55vw] h-full bg-black/5 dark:bg-white/5 clip-path-slant z-0 pointer-events-none hidden lg:block"></div>
      <div className="absolute -left-20 top-40 w-96 h-96 bg-primary rounded-full blur-[180px] opacity-10 hidden lg:block"></div>
      
      {/* Easter Egg Floating Banana */}
      {isSlipping && (
        <div className="absolute bottom-20 right-20 z-50 animate-slide-out w-32 h-32 pointer-events-none">
             <img 
                src="https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/path3.png" 
                alt="Slipping Banana" 
                className="w-full h-full object-contain drop-shadow-2xl" 
             />
        </div>
      )}

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left space-y-8 relative">
            <div
              className="absolute -top-12 -left-8 text-6xl text-gray-200 dark:text-gray-800 opacity-20 font-display select-none -z-10 animate-float"
              style={{ animationDelay: '1s' }}
            >
              DESDE 2019
            </div>
            <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-1.5 border-2 border-primary shadow-hard-sm transform -rotate-1 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="material-symbols-outlined text-sm text-primary animate-spin-slow">
                code
              </span>
              <span>Desenvolvimento Web & Performance</span>
            </div>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter text-gray-900 dark:text-white mix-blend-mode-normal">
              CRIATIVIDADE <br />
              <span
                className="relative inline-block text-primary drop-shadow-[2px_2px_0_rgba(0,0,0,1)]"
                onMouseEnter={bananaCursor}
                onMouseLeave={defaultCursor}
              >
                QUE
                <svg
                  className="absolute w-[110%] h-8 -bottom-4 -left-2 text-black dark:text-white opacity-100"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q 50 15 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="6"
                  ></path>
                </svg>
              </span>{' '}
              <br />
              <span className="text-outline">CONVERTE</span>
            </h1>
            <p className="max-w-lg text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed border-l-8 border-black dark:border-white pl-6">
              Construímos produtos digitais que convertem, performam e escalam. 
              Foco total em desenvolvimento web, SEO e geração de leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center bg-black text-white dark:bg-primary dark:text-black font-bold py-4 px-8 rounded-none border-2 border-transparent shadow-hard uppercase tracking-wider text-sm"
              >
                Ver Projetos
                <span className="material-symbols-outlined ml-2">
                  arrow_forward
                </span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center py-4 px-8 text-sm font-bold text-gray-900 dark:text-white bg-transparent border-2 border-gray-900 dark:border-white uppercase tracking-widest shadow-none"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block h-full min-h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center animate-float">
              <div className="absolute top-10 right-10 w-64 h-64 border-4 border-black dark:border-white opacity-10 rotate-12"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary opacity-20 -rotate-12 rounded-full blur-xl"></div>
              <div className="absolute inset-0 bg-black dark:bg-white/5 rotate-6 border-4 border-black dark:border-gray-500 shadow-hard z-0"></div>
              
              <div 
                className="absolute inset-0 bg-white dark:bg-surface-dark -rotate-3 border-4 border-black dark:border-gray-200 shadow-hard z-10 overflow-hidden flex items-center justify-center group"
              >
                {/* Background - Simplified for performance */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Dashboard Widget Placeholders Layer */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {/* Top Left Widget */}
                    <div className="absolute top-6 left-6 w-[32%] h-[18%] border-2 border-white/20 bg-white/5 rounded-lg backdrop-blur-[1px]"></div>
                    {/* Top Right Widget */}
                    <div className="absolute top-6 right-6 w-[38%] h-[18%] border-2 border-white/20 bg-white/5 rounded-lg backdrop-blur-[1px]"></div>
                    {/* Middle Left Widget */}
                    <div className="absolute top-[40%] left-6 w-[28%] h-[12%] border-2 border-white/20 bg-white/5 rounded-lg backdrop-blur-[1px]"></div>
                    {/* Bottom Left Widget */}
                    <div className="absolute bottom-16 left-6 w-[35%] h-[25%] border-2 border-white/20 bg-white/5 rounded-lg backdrop-blur-[1px]"></div>
                </div>

                <div className="relative z-20 text-center p-8">
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 mx-auto bg-black rounded-full flex items-center justify-center border-4 border-primary shadow-hard-white overflow-hidden p-2">
                       <img 
                          src="https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/image1.png" 
                          alt="Monkey Creative Logo" 
                          className="w-full h-full object-contain" 
                       />
                    </div>
                    <div className="absolute -top-2 -right-4 bg-primary text-black font-bold text-xs px-2 py-1 border-2 border-black rotate-12">
                      v2.0
                    </div>
                  </div>
                  <h3 className="font-display text-7xl text-white uppercase mb-1 drop-shadow-lg tracking-tighter leading-none">
                    Web<br />
                    <span
                      className="text-primary text-outline"
                      style={{ WebkitTextStroke: '2px #FFDE00' }}
                    >
                      Experts
                    </span>
                  </h3>
                </div>
                {/* Easter Egg Trigger */}
                <button 
                  onClick={triggerEasterEgg}
                  className="absolute bottom-8 right-8 bg-primary text-black px-4 py-2 border-2 border-black rotate-3 shadow-hard z-30 font-bold uppercase text-sm cursor-none"
                  onMouseEnter={() => textCursor('???')}
                  onMouseLeave={defaultCursor}
                >
                  Est. 2019
                </button>
              </div>
            </div>
          </div>

          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70 transition-opacity z-20 cursor-none"
            onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}
          >
            <span className="text-xs font-bold uppercase tracking-widest mb-2 bg-white dark:bg-black px-2 py-1 border border-black dark:border-gray-700">
              Rolar p/ Baixo
            </span>
            <span className="material-symbols-outlined text-2xl dark:text-primary">
              keyboard_arrow_down
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;