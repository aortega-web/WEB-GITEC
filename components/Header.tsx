
import React, { useState } from 'react';
import { MenuIcon, XIcon } from './icons';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onNavFinish?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onNavFinish }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.hash = href; // App.tsx gestionarà el render i el desplaçament

    if (onNavFinish) {
      setTimeout(() => {
        onNavFinish();
      }, 50); 
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block text-gitec-gray-dark hover:text-gitec-red px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 md:text-sm md:inline-block md:px-3 md:py-2"
    >
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#hero', label: 'Inici' },
    { href: '#services', label: 'Serveis' },
    { href: '#about', label: 'Sobre Nosaltres' },
    { href: '#projects', label: 'Projectes' },
    { href: '#contact', label: 'Contacte' },
  ];

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.hash = '#hero'; // App.tsx gestionarà el desplaçament
     if (isOpen) {
      setIsOpen(false); 
    }
  };


  return (
    <header className="bg-gitec-cream shadow-md sticky top-0 z-50 h-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0">
            <a href="#hero" onClick={handleLogoClick} className="text-3xl font-bold text-gitec-blue font-['Roboto_Slab']">
              GITEC
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink 
                  key={item.href} 
                  href={item.href}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gitec-gray-dark hover:text-gitec-red focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gitec-red p-2 rounded-md"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Obrir menú principal</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gitec-gray-light bg-gitec-cream shadow-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onNavFinish={() => {
                  setIsOpen(false);
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
