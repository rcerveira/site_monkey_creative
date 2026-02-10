import React, { useState, useEffect } from 'react';
import { useCursor } from '../hooks';

const LgpdBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(true);
  const { buttonCursor, defaultCursor } = useCursor();

  useEffect(() => {
    try {
      const hasAccepted = localStorage.getItem('lgpd_accepted');
      if (!hasAccepted) {
        setAccepted(false);
      }
    } catch (e) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('lgpd_accepted', 'true');
    } catch (e) {
      // Ignore storage errors and still hide the banner.
    }
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-surface-dark border-t-4 border-primary p-6 z-[60] shadow-[0_-4px_10px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center justify-between gap-4 animate-slide-up">
        <div className="text-sm text-black dark:text-white max-w-4xl">
            <h4 className="font-bold uppercase text-primary mb-1 text-lg">Privacidade & Dados</h4>
            <p className="leading-relaxed">
                Utilizamos cookies para garantir a melhor experiência em nosso site. Ao continuar navegando, você concorda com nossa 
                <span className="font-bold mx-1">Política de Privacidade</span> e 
                <span className="font-bold mx-1">Termos de Uso</span>.
            </p>
        </div>
        <button 
            onClick={handleAccept}
            className="bg-primary text-black font-display font-bold uppercase py-3 px-8 rounded-none border-2 border-transparent hover:border-black shadow-hard hover:shadow-none transition-all whitespace-nowrap text-lg"
            onMouseEnter={buttonCursor}
            onMouseLeave={defaultCursor}
        >
            Aceitar & Continuar
        </button>
    </div>
  );
};

export default LgpdBanner;