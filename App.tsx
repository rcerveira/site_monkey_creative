
import React, { useState, useEffect } from 'react';
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

  // Check for dark mode preference with error handling for mobile/private browsing
  useEffect(() => {
    try {
      const isDark = localStorage.getItem('color-theme') === 'dark' || 
                    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (isDark) {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
      // Fallback to media query if storage fails
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  return (
    <CursorContext.Provider value={{ cursorType, cursorText, setCursorType, setCursorText }}>
      <div className="relative min-h-screen">
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
