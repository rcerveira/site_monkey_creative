
import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Process from './components/Process.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import LgpdBanner from './components/LgpdBanner.tsx';
import { CursorType } from './types.ts';
import { CursorContext } from './context.ts';

const App: React.FC = () => {
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [cursorText, setCursorText] = useState('');

  // Sincronização persistente do tema
  useEffect(() => {
    try {
      const isDark = document.documentElement.classList.contains('dark');
      if (!localStorage.getItem('color-theme')) {
          localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
      }
    } catch (e) {
      // Ignora erros de storage no mobile
    }
  }, []);

  const contextValue = useMemo(() => ({
    cursorType, 
    cursorText, 
    setCursorType, 
    setCursorText
  }), [cursorType, cursorText]);

  return (
    <CursorContext.Provider value={contextValue}>
      <div className="relative min-h-screen">
        {/* Background pattern agora usa CSS nativo via classe index.html */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-banana-pattern opacity-40 animate-scrolling-bg"></div>
        <CustomCursor />
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Projects />
        <Contact />
        <Footer />
        <WhatsAppButton />
        <LgpdBanner />
      </div>
    </CursorContext.Provider>
  );
};

export default App;
