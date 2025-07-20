
import React from 'react';
import { BuildingIcon, CogIcon, LightningBoltIcon } from './icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="text-gitec-red mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold text-gitec-blue mb-4">{title}</h3>
    <p className="text-gitec-gray leading-relaxed">{description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gitec-blue mb-4">Els Nostres Serveis</h2>
          <p className="text-lg text-gitec-gray max-w-2xl mx-auto">Especialitats tècniques per a donar vida als teus projectes.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <ServiceCard
            icon={<BuildingIcon className="w-16 h-16" />}
            title="Rehabilitació Integral i Especialitzada"
            description="Oferim solucions completes per a la rehabilitació energètica, estructural, de façanes i interiors. Gestionem ITEs/IEE i adaptem edificis a les normatives vigents, millorant la seva durabilitat, confort i valor."
          />
          <ServiceCard
            icon={<CogIcon className="w-16 h-16" />}
            title="Obra Nova Industrialitzada: Eficiència i Sostenibilitat"
            description="Desenvolupem projectes d'obra nova amb mètodes industrialitzats que garanteixen rapidesa, control de qualitat superior, mínima generació de residus i màxima eficiència energètica. Ideal per a habitatges unifamiliars, plurifamiliars i naus industrials lleugeres."
          />
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gitec-blue mb-6">Altres Serveis Tècnics</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Direcció d\'Execució d\'Obra', 'Coordinació de Seguretat i Salut', 'Informes Tècnics', 'Certificacions Energètiques', 'Gestió de Projectes (Project Management)'].map((service) => (
              <span key={service} className="bg-gitec-lightblue text-gitec-blue text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
