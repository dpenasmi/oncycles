import heroImage from '../assets/images/ruedas.webp';
import wheelImage from '../assets/images/catalogo-ruedas.webp';
import standImage from '../assets/images/banco-ruedas.webp';
import tyreImage from '../assets/images/catalogo-neumaticos.webp';
import detailImage from '../assets/images/ruedas.webp';
import { withBase } from '../lib/paths.js';
import type { ImageMetadata } from 'astro';
import type { PageMetadata, ServiceHeroData, FaqItem, WorkflowStep } from '../types/content';

export interface WheelService {
  title: string;
  description: string;
  image: ImageMetadata | string;
  alt: string;
}

export const wheelsPage: PageMetadata = {
  title: 'Servicio de ruedas de bicicleta en Barcelona | On Cycles',
  description:
    'Centrado de ruedas, revisión de radios y bujes, mantenimiento tubeless y diagnóstico de llantas de bicicleta en Barcelona. Atención personal en On Cycles.',
};

export const wheelsHero: ServiceHeroData = {
  image: heroImage,
  alt: 'Rueda de bicicleta de montaña en el taller On Cycles',
  width: heroImage.width,
  height: heroImage.height,
  eyebrow: 'Servicio de ruedas de bicicleta en Barcelona',
  line1: 'Ruedas a punto.',
  line2: 'Cada kilómetro.',
  intro:
    'Centrado, revisión de radios, bujes y tubeless. Localizo holguras, ruidos y pérdidas de aire para que vuelvas a rodar con confianza.',
  service: 'Ruedas',
  exploreHref: '#servicios-ruedas',
  exploreLabel: 'Explora el servicio',
  exploreIcon: '↓',
  signature: 'Precisión · Fiabilidad · Oficio',
};

// Imágenes existentes del proyecto. La fotografía del banco sirve para ilustrar
// varios trabajos; se puede sustituir por tomas específicas de cada servicio.
export const wheelsServices: WheelService[] = [
  {
    title: 'Centrado y tensión',
    description: 'Revisión del descentrado lateral, el salto y la tensión de los radios.',
    image: standImage,
    alt: 'Rueda montada en un banco de centrado',
  },
  {
    title: 'Radios y llantas',
    description: 'Revisión de radios, cabecillas y estado de la llanta tras golpes.',
    image: wheelImage,
    alt: 'Rueda con llanta, radios y buje visibles',
  },
  {
    title: 'Bujes y rodamientos',
    description: 'Comprobación de holguras, suavidad de giro y desgaste del buje.',
    image: withBase('images/servicio-ruedas.webp'),
    alt: 'Primer plano del buje y los radios de una rueda',
  },
  {
    title: 'Núcleo y rueda libre',
    description: 'Revisión del engranaje, los ruidos y la respuesta al pedalear.',
    image: withBase('images/servicio-ruedas.webp'),
    alt: 'Detalle del conjunto de una rueda de bicicleta',
  },
  {
    title: 'Tubeless y cubiertas',
    description: 'Revisión del sellado, la válvula, el fondo de llanta y la cubierta.',
    image: tyreImage,
    alt: 'Cubierta de bicicleta de montaña',
  },
  {
    title: 'Montaje y comprobación',
    description: 'Montaje de componentes compatibles y verificación final de la rueda.',
    image: detailImage,
    alt: 'Bicicleta de montaña con ruedas montadas en el taller',
  },
];

export const wheelsSymptoms = [
  'La rueda se ha descentrado o roza al girar',
  'Oyes clics, crujidos o notas holgura al rodar',
  'El tubeless pierde aire o no sella bien',
  'Has dado un golpe a la llanta y quieres revisar su estado',
];

export const wheelsWorkflow: WorkflowStep[] = [
  { title: 'Diagnóstico', description: 'Reviso giro, radios, buje, llanta y cubierta.' },
  { title: 'Propuesta', description: 'Te explico el origen del problema y el trabajo necesario.' },
  { title: 'Mantenimiento', description: 'Centro, ajusto o sustituyo lo acordado.' },
  { title: 'Comprobación', description: 'Verifico el giro y el funcionamiento antes de la entrega.' },
];

export const wheelsFaqs: FaqItem[] = [
  {
    question: '¿Por qué mi rueda se descentra o roza?',
    answer:
      'Puede deberse a un golpe, un radio flojo o una tensión desigual. Compruebo también el estado de la llanta y del buje antes de centrarla.',
  },
  {
    question: '¿Qué puede causar un clic o crujido en la rueda?',
    answer:
      'El ruido puede venir de radios, eje, buje, núcleo o de otra parte de la bicicleta. Localizo el origen antes de recomendar un ajuste o una sustitución.',
  },
  {
    question: '¿Cada cuánto se revisa el líquido tubeless?',
    answer:
      'Depende del sellante, la temperatura y el uso. Si la rueda pierde aire o hace tiempo que no se revisa, compruebo la cantidad y el estado del líquido, el fondo de llanta y la válvula.',
  },
  {
    question: '¿Puedes revisar una llanta de carbono después de una caída?',
    answer:
      'Puedo realizar una inspección inicial de la llanta y la tensión de los radios. Si hay indicios de daño estructural, no recomiendo seguir usándola y te indicaré que la valore el fabricante o un especialista autorizado.',
  },
  {
    question: '¿Trabajas con mi buje y mi sistema de rueda?',
    answer:
      'Indícame la marca y el modelo al pedir cita. Confirmaré el mantenimiento disponible, la compatibilidad de las piezas y las herramientas necesarias antes de intervenir.',
  },
];
