
import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import { CursorType } from './types.ts';
import { CursorContext } from './context.ts';

// Lazy load below-the-fold components
const Services = lazy(() => import('./components/Services.tsx'));
const Process = lazy(() => import('./components/Process.tsx'));
const Projects = lazy(() => import('./components/Projects.tsx'));
const Contact = lazy(() => import('./components/Contact.tsx'));
const Footer = lazy(() => import('./components/Footer.tsx'));
const LgpdBanner = lazy(() => import('./components/LgpdBanner.tsx'));

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
        {/* Background pattern - hidden on mobile for performance */}
        <div className="hidden lg:block fixed inset-0 z-0 pointer-events-none bg-banana-pattern opacity-40 animate-scrolling-bg"></div>
        <CustomCursor />
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Services />
          <Process />
          <Projects />
          <Contact />
          <Footer />
          <LgpdBanner />
        </Suspense>
        <WhatsAppButton />
      </div>
    </CursorContext.Provider>
  );
};

export default App;
