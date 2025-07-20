
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  detailImageUrl?: string; 
  client?: string;
  location?: string;
  year?: string | number;
  longDescription: string;
  keyAspects: string[];
  challenges?: string;
  results?: string;
  category: 'Rehabilitació' | 'Obra Nova Industrialitzada' | 'Altres';
}

export const projectsData: Project[] = [
  {
    id: 'rehabilitacio-energetica-edifici-historic',
    title: 'Rehabilitació Energètica Edifici Històric',
    shortDescription: 'Millora integral de l\'eficiència energètica i conservació patrimonial al barri Gòtic.',
    imageUrl: 'https://i.postimg.cc/tRPCz3GY/Rehabilitaci-1.jpg',
    detailImageUrl: 'https://i.postimg.cc/SNhQ1nmV/Rehabilitaci-2.jpg',
    client: 'Comunitat de Propietaris Exemplar',
    location: 'Barcelona, Barri Gòtic',
    year: 2023,
    longDescription: 'Aquest projecte va abordar la complexa rehabilitació energètica d\'un edifici catalogat al cor de Barcelona. Es van implementar solucions SATE (Sistema d\'Aïllament Tèrmic per l\'Exterior) respectuoses amb la façana original, es van substituir fusteries per opcions d\'alta eficiència i es van integrar sistemes d\'energies renovables de baix impacte visual. L\'objectiu principal era reduir dràsticament la demanda energètica de l\'edifici, millorar el confort dels usuaris i preservar el valor patrimonial de la construcció.',
    keyAspects: [
      'Aïllament tèrmic SATE adaptat a façana històrica',
      'Fusteries d\'alta eficiència energètica amb control solar',
      'Instal·lació de sistema d\'aerotèrmia per a climatització i ACS',
      'Restauració d\'elements arquitectònics originals',
      'Monitorització energètica post-intervenció',
      'Gestió de llicències en entorn patrimonial protegit',
    ],
    challenges: 'El principal repte va ser compatibilitzar les exigències de millora energètica amb les normatives de protecció del patrimoni, assegurant la mínima alteració dels elements originals i utilitzant materials i tècniques reversibles on fos possible.',
    results: 'Reducció del consum energètic en un 65%. Millora significativa del confort tèrmic i acústic. Revalorització de l\'immoble i conservació del seu caràcter històric. Obtenció de certificació energètica A.',
    category: 'Rehabilitació',
  },
  {
    id: 'habitatge-unifamiliar-industrialitzat-passivhaus',
    title: 'Habitatge Unifamiliar Industrialitzat Passivhaus',
    shortDescription: 'Construcció ràpida i sostenible d\'un habitatge d\'alta eficiència amb estàndard Passivhaus.',
    imageUrl: 'https://i.postimg.cc/zfcXxpfR/industrialitzat-1.jpg',
    detailImageUrl: 'https://i.postimg.cc/y6rtW5bR/industrialitzat-2.jpg',
    client: 'Família EcoConscient',
    location: 'Sant Cugat del Vallès, Catalunya',
    year: 'En execució',
    longDescription: 'Disseny i construcció d\'un habitatge unifamiliar aïllat mitjançant un sistema de construcció industrialitzada amb panells de fusta contralaminada (CLT). El projecte s\'ha concebut des de l\'inici per complir els exigents estàndards Passivhaus, garantint un consum energètic quasi nul, un alt nivell de confort interior i una qualitat de l\'aire excepcional. La fabricació en taller permet un control de qualitat exhaustiu i una reducció significativa dels terminis d\'execució i dels residus en obra.',
    keyAspects: [
      'Estructura de panells de fusta contralaminada (CLT)',
      'Certificació Passivhaus (en procés)',
      'Hermeticitat a l\'aire controlada (assaig Blower Door)',
      'Ventilació mecànica amb recuperador de calor d\'alta eficiència',
      'Fusteries de triple vidre amb pont tèrmic trencat',
      'Ús de materials sostenibles i de baixa empremta de carboni',
      'Execució ràpida i reducció de residus',
    ],
    challenges: 'Coordinació precisa entre el disseny arquitectònic, el càlcul estructural i el procés de fabricació industrialitzada. Assegurar la correcta execució de les unions per garantir l\'hermeticitat exigida per l\'estàndard Passivhaus.',
    results: 'Prevista una demanda energètica per a calefacció inferior a 15 kWh/m²a. Temps de muntatge en obra reduït a poques setmanes. Mínim impacte ambiental durant la construcció.',
    category: 'Obra Nova Industrialitzada',
  },
  {
    id: 'adequacio-nau-industrial-canvi-us',
    title: 'Adequació Estructural i Canvi d\'Ús de Nau Industrial',
    shortDescription: 'Transformació d\'una antiga nau industrial en un espai polivalent per a oficines i tallers creatius.',
    imageUrl: 'https://i.postimg.cc/0jg5sQDk/nau-industrial-2.webp',
    detailImageUrl: 'https://i.postimg.cc/5yw4NVSw/nau-industrial-1.png',
    client: 'Empresa Innovadora del Sector Creatiu',
    location: 'Poblenou, Barcelona',
    year: 2024,
    longDescription: 'Aquest projecte va consistir en l\'adequació integral d\'una nau industrial en desús per adaptar-la a les necessitats d\'una empresa del sector creatiu. Es van realitzar reforços estructurals per permetre la creació de nous altells i espais diàfans, es van millorar les condicions d\'aïllament tèrmic i acústic, i es van renovar completament les instal·lacions. El disseny va buscar preservar el caràcter industrial original de l\'espai, combinant-lo amb solucions modernes i funcionals.',
    keyAspects: [
      'Reforç estructural metàl·lic per a nous altells',
      'Millora de l\'aïllament tèrmic en coberta i façanes',
      'Instal·lació de lluernaris per a millora de la il·luminació natural',
      'Disseny d\'espais de treball flexibles i col·laboratius',
      'Renovació completa d\'instal·lacions elèctriques, de climatització i de dades',
      'Adaptació a normativa d\'accessibilitat i seguretat contra incendis',
      'Interiorisme amb respecte al caràcter industrial',
    ],
    challenges: 'Adaptar una estructura existent a nous requisits de càrrega i distribució sense comprometre la seva integritat. Optimitzar la il·luminació natural en un espai de grans dimensions. Complir amb les normatives actuals en un edifici antic.',
    results: 'Creació d\'un espai de treball modern, funcional i inspirador. Optimització de l\'eficiència energètica de l\'edifici. Posada en valor d\'un immoble industrial, contribuint a la regeneració urbana de la zona.',
    category: 'Rehabilitació',
  }
];
