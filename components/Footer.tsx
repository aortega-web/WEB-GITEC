
import React from 'react';
import { LinkedInIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gitec-blue text-gitec-lightblue py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          {/* Placeholder for LinkedIn, replace # with actual link */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gitec-lightblue hover:text-gitec-cream transition-colors duration-150 mx-2">
            <LinkedInIcon className="h-7 w-7 inline-block" />
          </a>
        </div>
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} GITEC - Tots els drets reservats.
        </p>
        <div className="text-xs">
          <a href="#" className="hover:text-gitec-cream transition-colors duration-150">Política de Privacitat</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gitec-cream transition-colors duration-150">Avís Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
