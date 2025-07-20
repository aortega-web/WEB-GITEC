import React from 'react';
import { Project } from '../data/projectsData';
import { MapPinIcon, CalendarDaysIcon, UserGroupIcon, CogIcon, ShieldCheckIcon, LightBulbIcon } from './icons';

interface ProjectDetailPageProps {
  project: Project;
}

const DetailItem: React.FC<{ icon: React.ReactNode; label: string; value?: string | number }> = ({ icon, label, value }) => {
  if (!value) return null;
  return (
    <div className="flex items-start text-gitec-gray mb-3">
      <span className="text-gitec-red mr-3 mt-1">{icon}</span>
      <div>
        <strong className="text-gitec-blue">{label}:</strong> {value}
      </div>
    </div>
  );
};

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project }) => {
  if (!project) {
    return <div className="container mx-auto p-8 text-center">Projecte no trobat.</div>;
  }

  const handleBackToProjectsClick = () => {
    // No es necessita event.preventDefault() per a un botó d'aquest tipus
    window.location.hash = '#projects';
  };

  return (
    <section className="py-12 md:py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botó per tornar */}
        <div className="mb-8">
          <button
            type="button"
            onClick={handleBackToProjectsClick}
            className="inline-flex items-center text-gitec-blue hover:text-gitec-red font-semibold transition-colors duration-150 group bg-transparent border-none p-0 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform transition-transform duration-150 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tornar a Projectes
          </button>
        </div>

        {/* Títol del Projecte */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gitec-blue mb-6 text-center">
          {project.title}
        </h1>
        <p className="text-center text-gitec-red font-semibold text-lg mb-10">{project.category}</p>


        {/* Imatge Principal del Projecte */}
        <div className="mb-10 md:mb-12">
          <img
            src={project.detailImageUrl || project.imageUrl}
            alt={`Imatge detallada de ${project.title}`}
            className="w-full max-h-[600px] object-cover rounded-xl shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Columna d'Informació Bàsica */}
          <div className="md:col-span-1 bg-slate-50 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gitec-blue mb-6 border-b-2 border-gitec-lightblue pb-2">Dades del Projecte</h2>
            <DetailItem icon={<UserGroupIcon className="w-5 h-5" />} label="Client" value={project.client} />
            <DetailItem icon={<MapPinIcon className="w-5 h-5" />} label="Ubicació" value={project.location} />
            <DetailItem icon={<CalendarDaysIcon className="w-5 h-5" />} label="Any" value={project.year} />
          </div>

          {/* Columna de Descripció i Detalls */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-gitec-blue mb-4">Descripció del Projecte</h2>
            <p className="text-gitec-gray-dark leading-relaxed mb-8 whitespace-pre-line">
              {project.longDescription}
            </p>

            {project.keyAspects && project.keyAspects.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gitec-blue mb-3 flex items-center">
                  <CogIcon className="w-6 h-6 mr-2 text-gitec-red"/> Aspectes Clau
                </h3>
                <ul className="list-none space-y-2 pl-0">
                  {project.keyAspects.map((aspect, index) => (
                    <li key={index} className="flex items-start text-gitec-gray">
                       <span className="text-gitec-red mr-2 mt-1">&#10004;</span>
                       <span>{aspect}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gitec-blue mb-3 flex items-center">
                  <ShieldCheckIcon className="w-6 h-6 mr-2 text-gitec-red"/> Reptes del Projecte
                </h3>
                <p className="text-gitec-gray-dark leading-relaxed whitespace-pre-line">{project.challenges}</p>
              </div>
            )}

            {project.results && (
              <div>
                <h3 className="text-xl font-semibold text-gitec-blue mb-3 flex items-center">
                   <LightBulbIcon className="w-6 h-6 mr-2 text-gitec-red"/> Resultats Obtinguts
                </h3>
                <p className="text-gitec-gray-dark leading-relaxed whitespace-pre-line">{project.results}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;