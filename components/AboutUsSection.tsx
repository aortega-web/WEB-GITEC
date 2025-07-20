
import React from 'react';
import { UserCircleIcon } from './icons'; // Placeholder icon if no image

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gitec-cream scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gitec-blue mb-4">Sobre GITEC</h2>
          <p className="text-lg text-gitec-gray max-w-2xl mx-auto">Passió, coneixement i compromís al servei de l'arquitectura tècnica.</p>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-8 md:p-12 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <img 
              src="https://i.postimg.cc/xT3fw9CQ/Perfil.jpg" 
              alt="Aleix Ortega, Arquitecte Tècnic" 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover shadow-lg border-4 border-gitec-lightblue"
            />
            <h3 className="text-2xl font-semibold text-gitec-blue mt-6 text-center">Aleix Ortega</h3>
            <p className="text-gitec-gray text-center">Arquitecte Tècnic</p>
          </div>
          <div className="lg:w-2/3">
            <p className="text-lg text-gitec-gray-dark mb-6 leading-relaxed">
              "La meva passió és transformar espais i materialitzar projectes amb rigor tècnic i una visió de futur. A GITEC, cada projecte és un compromís amb la qualitat, la innovació i la satisfacció del client. La meva formació especialitzada, amb un enfocament en rehabilitació i construcció industrialitzada, em permet oferir solucions eficients i sostenibles, adaptades a les necessitats actuals i futures."
            </p>
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gitec-blue mb-3">La Nostra Filosofia</h4>
              <ul className="space-y-3 text-gitec-gray">
                <li className="flex items-start">
                  <span className="text-gitec-red mr-3 mt-1">&#10003;</span>
                  <span><strong>Professionalitat:</strong> Rigor i excel·lència en cada fase del projecte.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gitec-red mr-3 mt-1">&#10003;</span>
                  <span><strong>Innovació:</strong> Cerca constant de solucions tècniques avançades i sostenibles.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gitec-red mr-3 mt-1">&#10003;</span>
                  <span><strong>Confiança:</strong> Transparència i comunicació propera amb els nostres clients.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gitec-red mr-3 mt-1">&#10003;</span>
                  <span><strong>Qualitat i Eficiència:</strong> Resultats òptims amb gestió eficient de recursos i terminis.</span>
                </li>
                 <li className="flex items-start">
                  <span className="text-gitec-red mr-3 mt-1">&#10003;</span>
                  <span><strong>Atenció Personalitzada:</strong> Solucions a mida per a cada client i projecte.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
