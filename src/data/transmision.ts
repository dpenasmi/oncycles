import heroImage from '../assets/images/transmision.webp';
import chainImage from '../assets/images/cadena.png';
import cassetteImage from '../assets/images/cassette.webp';
import changeImage from '../assets/images/cambios.webp';
import cleaningImage from '../assets/images/lubricacion.webp';
import workshopImage from '../assets/images/patilla.webp';
import cranksImage from '../assets/images/pedalier.webp';
import type { ImageMetadata } from 'astro';
import type { PageMetadata, ServiceHeroData, FaqItem, WorkflowStep } from '../types/content';

export interface TransmissionService {
  title: string;
  description: string;
  image: ImageMetadata;
  alt: string;
}

export const transmissionPage: PageMetadata = {
  title: 'Servicio de transmisión de bicicleta en Barcelona | On Cycles',
  description:
    'Revisión de cadena, cassette, platos y cambios en Barcelona. Diagnóstico del desgaste y ajuste de la transmisión de tu bicicleta en On Cycles.',
};

export const transmissionHero: ServiceHeroData = {
  image: heroImage,
  alt: 'Cadena, cassette y cambio trasero de una bicicleta en el taller',
  width: heroImage.width,
  height: heroImage.height,
  eyebrow: 'Servicio de transmisión en Barcelona',
  line1: 'Cada cambio.',
  line2: 'En su punto.',
  intro:
    'Diagnóstico, mantenimiento y ajuste de la transmisión de tu bici. Cuido cada componente para que vuelvas a pedalear con precisión.',
  service: 'Transmisión',
  exploreHref: '#servicios-transmision',
  exploreLabel: 'Explora el servicio',
  exploreIcon: '↓',
  signature: 'Precisión · Durabilidad · Oficio',
};

// Fotografías existentes del proyecto. Sustituir las imágenes genéricas del taller
// y de las bielas por fotografías específicas del servicio cuando estén disponibles.
export const transmissionServices: TransmissionService[] = [
  {
    title: 'Cadena y desgaste',
    description: 'Medición, compatibilidad y sustitución.',
    image: chainImage,
    alt: 'Medición del desgaste de la cadena junto al cassette',
  },
  {
    title: 'Cassette y platos',
    description: 'Revisión de dientes y cambio de piezas.',
    image: cassetteImage,
    alt: 'Detalle de los piñones de un cassette de bicicleta',
  },
  {
    title: 'Cambios y desviadores',
    description: 'Indexado, ajuste y comprobación.',
    image: changeImage,
    alt: 'Transmisión y cambio trasero de una bicicleta',
  },
  {
    title: 'Limpieza y lubricación',
    description: 'Limpieza y lubricación de la transmisión.',
    image: cleaningImage,
    alt: 'Bicicleta durante un trabajo de limpieza en el taller',
  },
  {
    title: 'Patilla, cables y fundas',
    description: 'Alineado, revisión y sustitución.',
    image: workshopImage,
    alt: 'Mecánico trabajando en una bicicleta dentro del taller',
  },
  {
    title: 'Manetas, bielas y pedalier',
    description: 'Funcionamiento, aprietes y holguras.',
    image: cranksImage,
    alt: 'Detalle de una biela junto al motor de una bicicleta eléctrica',
  },
];

export const transmissionSymptoms = [
  'El cambio va lento o impreciso',
  'La cadena salta al pedalear',
  'Aparecen ruidos al cambiar',
  'Una cadena nueva sigue saltando',
];

export const transmissionWorkflow: WorkflowStep[] = [
  { title: 'Diagnóstico', description: 'Compruebo el desgaste y el funcionamiento.' },
  { title: 'Propuesta', description: 'Te explico las piezas y el trabajo necesario.' },
  { title: 'Ajuste', description: 'Limpio, sustituyo y calibro lo acordado.' },
  { title: 'Comprobación', description: 'Verifico el cambio antes de entregarla.' },
];

export const transmissionFaqs: FaqItem[] = [
  {
    question: '¿Cada cuánto debo revisar la cadena?',
    answer:
      'Depende del uso, el mantenimiento, el sistema y las condiciones en que ruedas. Mido el desgaste y sigo las indicaciones de la marca de tu transmisión para recomendar el momento adecuado.',
  },
  {
    question: '¿Por qué salta la cadena al pedalear?',
    answer:
      'Puede deberse al desgaste de la cadena, el cassette o los platos, o a un desajuste del cambio. Reviso el conjunto para localizar la causa antes de sustituir piezas.',
  },
  {
    question: '¿Hay que cambiar el cassette al cambiar la cadena?',
    answer:
      'No siempre. Si la cadena se cambia a tiempo, el cassette puede seguir en buen estado. Si una cadena nueva salta sobre piñones gastados, puede ser necesario sustituirlo.',
  },
  {
    question: '¿Revisas cambios Shimano Di2 y SRAM AXS?',
    answer:
      'Indícame la marca, el modelo y el problema al solicitar cita. Confirmaré qué diagnóstico y ajustes puedo realizar con tu sistema y las herramientas disponibles.',
  },
  {
    question: '¿También revisas la transmisión de e-bikes?',
    answer:
      'Sí, puedo valorar el desgaste y el ajuste mecánico de la transmisión. Indícame el sistema y el modelo de la e-bike para confirmar el alcance del servicio.',
  },
];
