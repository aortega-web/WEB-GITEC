
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';
import { projectsData, Project } from './data/projectsData'; // Importa les dades

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      setCurrentHash(newHash); // Actualitza l'estat per re-renderitzar

      setTimeout(() => {
        if (newHash.startsWith('#/project-')) { // MODIFICAT AQUÍ
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const targetId = newHash.substring(1) || 'hero';
          const element = document.getElementById(targetId);
          if (element) {
            const headerOffset = 80; 
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - headerOffset,
              behavior: 'smooth',
            });
          } else if (targetId === 'hero') { 
             window.scrollTo({ top: 0, behavior: 'smooth'});
          }
        }
      }, 50); 
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []); 

  const isProjectDetailPage = currentHash.startsWith('#/project-'); // MODIFICAT AQUÍ
  let projectToShow: Project | undefined | null = null;

  if (isProjectDetailPage) {
    const projectId = currentHash.substring(10); // Longitud de '#/project-' és 10
    projectToShow = projectsData.find(p => p.id === projectId);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gitec-cream">
      <Header />
      <main className="flex-grow">
        {isProjectDetailPage ? (
          projectToShow ? (
            <ProjectDetailPage project={projectToShow} />
          ) : (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center scroll-mt-20">
              <h1 className="text-4xl font-bold text-gitec-red mb-6">Projecte no Trobat</h1>
              <p className="text-xl text-gitec-gray mb-8">Ho sentim, el projecte que cerques no existeix o l'enllaç és incorrecte.</p>
              <a
                href="#projects"
                className="bg-gitec-blue hover:bg-gitec-gray-dark text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Tornar a Projectes
              </a>
            </div>
          )
        ) : (
          <>
            <HeroSection />
            <ServicesSection />
            <AboutUsSection />
            <ProjectsSection projects={projectsData} />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
