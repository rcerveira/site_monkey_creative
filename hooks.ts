import React, { useContext } from 'react';
import { CursorContext } from './context';

export const useCursor = () => {
  const { setCursorType, setCursorText } = useContext(CursorContext);

  const textCursor = (text: string) => {
    setCursorType('text');
    setCursorText(text);
  };

  const bananaCursor = () => setCursorType('banana');
  const buttonCursor = () => setCursorType('button');
  
  const defaultCursor = () => {
    setCursorType('default');
    setCursorText('');
  };

  return { 
    textCursor, 
    bananaCursor, 
    buttonCursor, 
    defaultCursor,
    setCursorType,
    setCursorText
  };
};

export const useScrollTo = () => {
  const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>, href: string, offset: number = 120) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { scrollToId, scrollToTop };
};