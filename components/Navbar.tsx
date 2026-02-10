import React, { useState } from 'react';
import { useScrollTo } from '../hooks';
import { navLinks } from '../data';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToId, scrollToTop } = useScrollTo();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);
    scrollToId(e, href);
  };

  return (
    <nav className="fixed w-full z-50 top-4 px-4">
      <div className="max-w-screen-xl mx-auto rounded-2xl border-2 border-black dark:border-gray-700 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md shadow-hard transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between p-3 px-6">
          <a
            href="#"
            onClick={scrollToTop}
            className="flex items-center space-x-3 rtl:space-x-reverse group"
          >
            <div className="relative w-10 h-10 flex items-center justify-center bg-primary border-2 border-black rounded-xl overflow-hidden animate-breathe shadow-hard-sm">
              <img 
                src="https://pub-9bd44561011b427d8901eec9c88e98a4.r2.dev/path3.png" 
                alt="Monkey Creative Icon" 
                className="w-7 h-7 object-contain group-hover:animate-float-sm transition-all duration-300"
              />
            </div>
            <span className="self-center text-xl font-display uppercase tracking-wide whitespace-nowrap dark:text-white transition-colors">
              Monkey Creative
            </span>
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:inline-flex items-center justify-center bg-black text-white dark:bg-primary dark:text-black font-bold py-2.5 px-6 rounded-xl border-2 border-transparent shadow-none transition-all uppercase tracking-wider text-xs md:text-sm"
            >
              VAMOS CONVERSAR
              <span className="material-symbols-outlined text-sm ml-2">
                arrow_outward
              </span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden focus:outline-none border-2 border-transparent"
            >
              <span className="sr-only">Open main menu</span>
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>

          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 px-3 text-black rounded md:p-0 dark:text-white transition-colors font-bold uppercase text-sm tracking-wide hover:text-primary dark:hover:text-primary cursor-pointer"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;