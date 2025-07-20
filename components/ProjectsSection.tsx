
import React from 'react';
import { Project } from '../data/projectsData'; // Importa el tipus Project

interface ProjectCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, imageUrl, title, description }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Assegura que el JS gestioni la navegació
    window.location.hash = `#/project-${id}`; // MODIFICAT AQUÍ
  };

  return (
    <a 
      href={`#/project-${id}`} // MODIFICAT AQUÍ
      onClick={handleClick}
      className="block bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 group"
      aria-label={`Veure detalls del projecte ${title}`}
    >
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gitec-blue mb-2 group-hover:text-gitec-red transition-colors duration-150">{title}</h3>
        <p className="text-gitec-gray text-sm leading-relaxed">{description}</p>
      </div>
    </a>
  );
};

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gitec-blue mb-4">Projectes Destacats</h2>
          <p className="text-lg text-gitec-gray max-w-2xl mx-auto">
            Explora alguns exemples de la nostra feina i les solucions que podem oferir.
          </p>
        </div>
        {projects && projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                id={project.id}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.shortDescription}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gitec-gray">Actualment no hi ha projectes destacats per mostrar. Torna aviat!</p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
