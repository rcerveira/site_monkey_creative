
import React, { useEffect, useRef, useState, useContext } from 'react';
import { CursorContext } from '../context';

const CustomCursor: React.FC = () => {
  const { cursorType, cursorText } = useContext(CursorContext);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Use refs for position to avoid re-renders
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports hover and has a fine pointer (desktop with mouse)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const root = document.documentElement;
    setIsMobile(!mediaQuery.matches);

    if (!mediaQuery.matches) {
      root.classList.remove('custom-cursor');
      return;
    }

    root.classList.add('custom-cursor');

    const onMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      // Update DOM directly for performance
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (!target) return;
      
      // Determine clickability
      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'LABEL' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null;

      setIsPointer(isClickable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      root.classList.remove('custom-cursor');
    };
  }, [isVisible]);

  // Don't render anything if mobile or not visible
  if (isMobile || !isVisible) return null;

  const isHoveringLink = isPointer || cursorType === 'button' || cursorType === 'external';

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform flex items-center justify-center"
      style={{
          width: '32px',
          height: '32px',
          transform: 'translate3d(-100px, -100px, 0)' 
      }}
    >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)] transition-transform duration-200 ease-out ${
            isHoveringLink ? 'scale-125' : 'scale-100'
          }`}
        >
          <path 
            d="M3 3L10.5 20.5L13.5 13.5L20.5 10.5L3 3Z" 
            fill="#FFDE00" 
            stroke="black" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
        </svg>

        {cursorType === 'text' && (
           <div className="absolute top-6 left-6 bg-black text-white text-[10px] font-bold uppercase px-2 py-1 whitespace-nowrap border border-white rounded-none animate-slide-up shadow-md">
             {cursorText.trim() || 'Ver'}
           </div>
        )}
    </div>
  );
};

export default CustomCursor;
