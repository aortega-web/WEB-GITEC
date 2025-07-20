
import React from 'react';

const HeroSection: React.FC = () => {
  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.hash = '#contact'; // App.tsx will handle the scroll
  };

  return (
    <section id="hero" className="relative bg-gitec-blue text-gitec-cream py-20 md:py-32 min-h-[calc(100vh-80px)] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://i.postimg.cc/jSqxKBw7/Portada.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gitec-blue opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          GITEC: Experts en Rehabilitació i Construcció Industrialitzada
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gitec-lightblue mb-10 max-w-3xl mx-auto">
          Solucions tècniques innovadores per a la rehabilitació d'edificis i la promoció d'obra nova eficient i sostenible.
        </p>
        <a
          href="#contact"
          onClick={handleContactClick}
          className="bg-gitec-red hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Sol·licita Pressupost
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
